(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5Yp1":function(e,t,r){"use strict";var o=r("q1tI"),n=r.n(o),a=r("YFqc"),c=r.n(a),u=n.a.createElement,f={marginRight:15},i=function(){return u("div",null,u(c.a,{href:"/"},u("a",{style:f},"Home")),u(c.a,{href:"/about"},u("a",{style:f},"About")))},s=n.a.createElement,l={margin:20,padding:20,border:"1px solid #DDD"};t.a=function(e){return s("div",{style:l},s(i,null),e.children)}},J66h:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){module.exports=t(e)}("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},r=0,o=e.length;r<o;r++)t[e.charAt(r)]=r;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),t>=2?"=":b64chars.charAt(r>>>6&63),t>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,r=t%4,o=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),n=[fromCharCode(o>>>16),fromCharCode(o>>>8&255),fromCharCode(255&o)];return n.length-=[0,0,2,1][r],n.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__("yLpj"))},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var o=r("lwsE"),n=r("W8MJ"),a=r("7W2i"),c=r("a1gu"),u=r("Nsbk");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var i=r("TqRt"),s=r("284h");t.__esModule=!0,t.default=void 0;var l,h=s(r("q1tI")),d=r("QmWs"),p=r("g/15"),b=i(r("nOHt")),_=r("elyg");function g(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var C=new Map,v=window.IntersectionObserver,m={};function A(){return l||(v?l=new v((function(e){e.forEach((function(e){if(C.has(e.target)){var t=C.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),C.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var y=function(e){a(s,e);var t,i=(t=s,function(){var e,r=u(t);if(f()){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)});function s(e){var t;return o(this,s),(t=i.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,r=null,o=null;return function(n,a){if(o&&n===t&&a===r)return o;var c=e(n,a);return t=n,r=a,o=c,c}}((function(e,t){return{href:(0,_.addBasePath)(g(e)),as:t?(0,_.addBasePath)(g(t)):t}})),t.linkClicked=function(e){var r=e.currentTarget,o=r.nodeName,n=r.target;if("A"!==o||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),c=a.href,u=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(c)){var f=window.location.pathname;c=(0,d.resolve)(f,c),u=u?(0,d.resolve)(f,u):c,e.preventDefault();var i=t.props.scroll;null==i&&(i=u.indexOf("#")<0),b.default[t.props.replace?"replace":"push"](c,u,{shallow:t.props.shallow}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return n(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as,n=(0,d.resolve)(e,r);return[n,o?(0,d.resolve)(e,o):n]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=A();return r?(r.observe(e),C.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}C.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();b.default.prefetch(t[0],t[1],e).catch((function(e){0})),m[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,o=this.formatUrls(this.props.href,this.props.as),n=o.href,a=o.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var c=h.Children.only(t),u={ref:function(t){e.handleRef(t),c&&"object"===typeof c&&c.ref&&("function"===typeof c.ref?c.ref(t):"object"===typeof c.ref&&(c.ref.current=t))},onMouseEnter:function(t){c.props&&"function"===typeof c.props.onMouseEnter&&c.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){c.props&&"function"===typeof c.props.onClick&&c.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==c.type||"href"in c.props)||(u.href=a||n);var f=r("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=f(u.href)),h.default.cloneElement(c,u)}}]),s}(h.Component);t.default=y},vcXL:function(e,t,r){"use strict";var o=self.fetch.bind(self);e.exports=o,e.exports.default=e.exports},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(o){"object"===typeof window&&(r=window)}e.exports=r}}]);