// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=9007199254740991;var t}var t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function o(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,E,"$1e"),t=h.call(t,_,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,w,"$1."),t=h.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+S(n):S(n)+e}var x=String.fromCharCode,k=isNaN,A=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,o,a,l,u,p;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",l=1,u=0;u<e.length;u++)if(f(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),a+=n.arg||"",l+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=C.exec(e);n;)(r=e.slice(i,C.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=C.lastIndex,n=C.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){return"string"==typeof e}function R(e){var r,t,n;if(!$(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var P,B=Object.prototype,G=B.toString,L=B.__defineGetter__,U=B.__defineSetter__,Z=B.__lookupGetter__,M=B.__lookupSetter__;P=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var N=P;function W(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return z&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=H()?function(e){var r,t,n,i,o;if(null==e)return q.call(e);t=e[K],o=K,r=null!=(i=e)&&D.call(i,o);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)},Y=Boolean,ee=Boolean.prototype.toString,re=H();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return X(e)||te(e)}function ie(){return new Function("return this;")()}W(ne,"isPrimitive",X),W(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof globalThis?globalThis:null,le=function(e){if(arguments.length){if(!X(e))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(ce)return ce;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=le.document&&le.document.childNodes,se=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;W(fe,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function de(e){return null!==e&&"object"==typeof e}function he(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var ye="function"==typeof t||"object"==typeof se||"function"==typeof ue?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?he(e).toLowerCase():r};function be(e){return"function"===ye(e)}function we(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,t,n,i){var o,a;if(!r(e))throw new TypeError(we("1T9Ah,O3",e));if(!be(t))throw new TypeError(we("1T92H,G6",t));if(!be(n))throw new TypeError(we("1T93N,G4",n));if(0===(o=e.length)&&(t.call(i,void 0,void 0,e),0===(o=e.length)))return e;a=o-1;do{t.call(i,e[a],a,e),o!==e.length&&(a+=e.length-o,o=e.length),a-=1}while(a>=0&&!n(e[a+1],a+1,e));return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).doUntilEachRight=r();
//# sourceMappingURL=browser.js.map
