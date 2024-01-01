// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r,i,s,l){var o,a;if(!t(r))throw new TypeError(n("invalid argument. First argument must be a collection. Value: `%s`.",r));if(!e(i))throw new TypeError(n("invalid argument. Second argument must be a function. Value: `%s`.",i));if(!e(s))throw new TypeError(n("invalid argument. Third argument must be a function. Value: `%s`.",s));if(0===(o=r.length)&&(i.call(l,void 0,void 0,r),0===(o=r.length)))return r;a=o-1;do{i.call(l,r[a],a,r),o!==r.length&&(a+=r.length-o,o=r.length),a-=1}while(a>=0&&!s(r[a+1],a+1,r));return r}export{r as default};
//# sourceMappingURL=index.mjs.map
