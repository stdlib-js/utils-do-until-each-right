// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,i,n,o){var l,d;if(!t(s))throw new TypeError(e("0jQBO",s));if(!r(i))throw new TypeError(e("0jQ2S",i));if(!r(n))throw new TypeError(e("0jQ3Z",n));if(0===(l=s.length)&&(i.call(o,void 0,void 0,s),0===(l=s.length)))return s;d=l-1;do{i.call(o,s[d],d,s),l!==s.length&&(d+=s.length-l,l=s.length),d-=1}while(d>=0&&!n(s[d+1],d+1,s));return s}export{s as default};
//# sourceMappingURL=index.mjs.map
