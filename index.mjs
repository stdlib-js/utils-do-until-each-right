// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=t,i=e,s=r;var l=function(t,e,r,l){var o,a;if(!n(t))throw new TypeError(s("invalid argument. First argument must be a collection. Value: `%s`.",t));if(!i(e))throw new TypeError(s("invalid argument. Second argument must be a function. Value: `%s`.",e));if(!i(r))throw new TypeError(s("invalid argument. Third argument must be a function. Value: `%s`.",r));if(0===(o=t.length)&&(e.call(l,void 0,void 0,t),0===(o=t.length)))return t;a=o-1;do{e.call(l,t[a],a,t),o!==t.length&&(a+=t.length-o,o=t.length),a-=1}while(a>=0&&!r(t[a+1],a+1,t));return t};export{l as default};
//# sourceMappingURL=index.mjs.map