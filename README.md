<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# doUntilEachRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Until a test condition is true, invoke a function for each element in a collection, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
doUntilEachRight = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-do-until-each-right@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-do-until-each-right/tags). For example,

```javascript
doUntilEachRight = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-do-until-each-right@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var doUntilEachRight = require( 'path/to/vendor/umd/utils-do-until-each-right/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-do-until-each-right@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.doUntilEachRight;
})();
</script>
```

#### doUntilEachRight( collection, fcn, predicate\[, thisArg ] )

Invokes a `function` for each element in a `collection`, iterating from right to left, until either a `predicate` function returns `true` or the function has iterated over all `collection` elements. Note that the condition is evaluated **after** executing `fcn`; thus, `fcn` **always** executes at least once.

```javascript
function predicate( value ) {
    return ( value !== value );
}

function log( value, index ) {
    console.log( '%s: %d', index, value );
}

var arr = [ 1, NaN, 2, 3, 4 ];

doUntilEachRight( arr, log, predicate );
/* =>
    4: 4
    3: 3
    2: 2
    1: NaN
*/
```

Both the `predicate` function and the `function` to apply are provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

If provided an empty `collection`, both `value` and `index` are `undefined`.

```javascript
function predicate( value ) {
    return ( value !== value );
}

function log( value, index ) {
    console.log( '%s: %s', index, value );
}

var arr = [];

doUntilEachRight( arr, log, predicate );
/* =>
    undefined: undefined
*/
```

Basic support for dynamic collections is provided. Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

```javascript
var arr = [ 1, 2, 3, 4 ];
var i = 0;

function predicate( value ) {
    return ( value !== value );
}

function log1( value, index, collection ) {
    console.log( '%s: %d', index, value );
    i += 1;
    if ( index === 0 && collection.length < 10 ) {
        collection.unshift( i+1 );
    }
}

doUntilEachRight( arr, log1, predicate );
/* =>
    3: 4
    2: 3
    1: 2
    0: 1
    0: 5
    0: 6
    0: 7
    0: 8
    0: 9
    0: 10
*/

function log2( value, index, collection ) {
    console.log( '%s: %d', index, value );
    collection.pop();
}

arr = [ 1, 2, 3, 4 ];

doUntilEachRight( arr, log2, predicate );
/* =>
    3: 4
    1: 2
*/
```

To set the function execution context for the applied function, provide a `thisArg`.

```javascript
function predicate( value ) {
    return ( value < 3 );
}

function sum( value ) {
    this.sum += value;
    this.count += 1;
}

var arr = [ 1, NaN, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

doUntilEachRight( arr, sum, predicate, context );

var mean = context.sum / context.count;
// returns 3.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function returns the input `collection`.

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays -->

    ```javascript
    function predicate( value ) {
        return ( value !== value );
    }

    function log( value, index ) {
        console.log( '%s: %s', index, value );
    }

    var arr = [ 1, , , 4 ];

    doUntilEachRight( arr, log, predicate );
    /* =>
        3: 4
        2: undefined
        1: undefined
        0: 1
    */
    ```

-   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-even@umd/browser.js"></script>
<script type="text/javascript">
(function () {.isPrimitive;
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var doUntilEachRight = require( '@stdlib/utils-do-until-each-right' );

var arr;
var i;
var j;

function predicate( value ) {
    return ( value !== value );
}

function log( value, index, collection ) {
    console.log( '%s: %d', index, value );
    i += 1;
    if ( isEven( i ) ) {
        collection.pop();
    } else {
        collection.unshift( i+1 );
    }
}

arr = new Array( 100 );
j = floor( randu()*arr.length );
for ( i = arr.length-1; i >= 0; i-- ) {
    if ( i === j ) {
        arr[ i ] = NaN;
    } else {
        arr[ i ] = i;
    }
}

i = 0;
doUntilEachRight( arr, log, predicate );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-do-until-each`][@stdlib/utils/do-until-each]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-do-while-each-right`][@stdlib/utils/do-while-each-right]</span><span class="delimiter">: </span><span class="description">while a test condition is true, invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-until-each-right`][@stdlib/utils/until-each-right]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-do-until-each-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-do-until-each-right

[test-image]: https://github.com/stdlib-js/utils-do-until-each-right/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-do-until-each-right/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-do-until-each-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-do-until-each-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-do-until-each-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-do-until-each-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-do-until-each-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-do-until-each-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-do-until-each-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-do-until-each-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-do-until-each-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-do-until-each-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-do-until-each-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-do-until-each-right/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/do-until-each]: https://github.com/stdlib-js/utils-do-until-each/tree/umd

[@stdlib/utils/do-while-each-right]: https://github.com/stdlib-js/utils-do-while-each-right/tree/umd

[@stdlib/utils/until-each-right]: https://github.com/stdlib-js/utils-until-each-right/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
