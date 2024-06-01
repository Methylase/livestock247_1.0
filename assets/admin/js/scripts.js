/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-boxshadow-csstransforms3d-csstransitions-history-svg-video-domprefixes-mq-prefixed-prefixes-setclasses-shiv-testallprops-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),S.push((o?"":"no-")+s.join("-"))}}function a(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?E.className.baseVal=t:E.className=t)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var a,i,c,u,f="modernizr",d=s("div"),p=l();if(parseInt(r,10))for(;r--;)c=s("div"),c.id=o?o[r]:f+(r+1),d.appendChild(c);return a=s("style"),a.type="text/css",a.id="s"+f,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),i=n(d,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=u,E.offsetHeight):d.parentNode.removeChild(d),!!i}function u(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+p(t[o])+":"+r+")");return a=a.join(" or "),c("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function v(e,t,o,a){function l(){f&&(delete F.style,delete F.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=h(e,o);if(!r(c,"undefined"))return c}for(var f,d,p,m,v,g=["modernizr","tspan","samp"];!F.style&&g.length;)f=!0,F.modElem=s(g.shift()),F.style=F.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=F.style[m],u(m,"-")&&(m=i(m)),F.style[m]!==n){if(a||r(o,"undefined"))return l(),"pfx"==t?m:!0;try{F.style[m]=o}catch(y){}if(F.style[m]!=v)return l(),"pfx"==t?m:!0}return l(),!1}function g(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+z.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,a):(s=(e+" "+_.join(i+" ")+i).split(" "),d(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var S=[],C=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=b;var E=t.documentElement,w="svg"===E.nodeName.toLowerCase();w||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=S.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),S.elements=n+" "+e,c(t)}function a(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function c(e){e||(e=t);var r=a(e);return!S.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var S={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=S,c(t),"object"==typeof module&&module.exports&&(module.exports=S)}("undefined"!=typeof e?e:this,t);var T="Moz O ms Webkit",_=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=_,Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var P="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",P||N);var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=k;var z=(x.testStyles=c,x._config.usePrefixes?T.split(" "):[]);x._cssomPrefixes=z;var j=function(t){var r,o=b.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=b[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=j;var M={elem:s("modernizr")};Modernizr._q.push(function(){delete M.elem});var F={style:M.elem.style};Modernizr._q.unshift(function(){delete F.style}),x.testAllProps=g;x.prefixed=function(e,t,n){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=i(e)),t?g(e,t,n):g(e,"pfx"))};x.testAllProps=y,Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),o(),a(S),delete x.addTest,delete x.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);
;/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

;!function(e,a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?a(require("jquery")):a(e.jQuery)}(this,function(n){n.fn.appear=function(r,e){var l=n.extend({data:void 0,one:!0,accX:0,accY:0},e);return this.each(function(){var u=n(this);if(u.appeared=!1,r){var d=n(window),a=function(){if(u.is(":visible")){var e=d.scrollLeft(),a=d.scrollTop(),r=u.offset(),n=r.left,p=r.top,t=l.accX,i=l.accY,c=u.height(),o=d.height(),f=u.width(),s=d.width();a<=p+c+i&&p<=a+o+i&&e<=n+f+t&&n<=e+s+t?u.appeared||u.trigger("appear",l.data):u.appeared=!1}else u.appeared=!1},e=function(){if(u.appeared=!0,l.one){d.unbind("scroll",a);var e=n.inArray(a,n.fn.appear.checks);0<=e&&n.fn.appear.checks.splice(e,1)}r.apply(this,arguments)};l.one?u.one("appear",l.data,e):u.bind("appear",l.data,e),d.scroll(a),n.fn.appear.checks.push(a),a()}else u.trigger("appear",l.data)})},n.extend(n.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=n.fn.appear.checks.length;if(0<e)for(;e--;)n.fn.appear.checks[e]()},run:function(){n.fn.appear.timeout&&clearTimeout(n.fn.appear.timeout),n.fn.appear.timeout=setTimeout(n.fn.appear.checkAll,20)}}),n.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var r=n.fn[a];r&&(n.fn[a]=function(){var e=r.apply(this,arguments);return n.fn.appear.run(),e})})});
;(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});
;!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(v){var i=/\+/g;function x(e){return l.raw?e:encodeURIComponent(e)}function k(e,o){var n=l.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(i," ")),l.json?JSON.parse(e):e}catch(e){}}(e);return v.isFunction(o)?o(n):n}var l=v.cookie=function(e,o,n){if(void 0!==o&&!v.isFunction(o)){if("number"==typeof(n=v.extend({},l.defaults,n)).expires){var i=n.expires,r=n.expires=new Date;r.setTime(+r+864e5*i)}return document.cookie=[x(e),"=",(t=o,x(l.json?JSON.stringify(t):String(t))),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}for(var t,c,u=e?void 0:{},a=document.cookie?document.cookie.split("; "):[],d=0,f=a.length;d<f;d++){var p=a[d].split("="),s=(c=p.shift(),l.raw?c:decodeURIComponent(c)),m=p.join("=");if(e&&e===s){u=k(m,o);break}e||void 0===(m=k(m))||(u[s]=m)}return u};l.defaults={},v.removeCookie=function(e,o){return void 0!==v.cookie(e)&&(v.cookie(e,"",v.extend({},o,{expires:-1})),!v.cookie(e))}});
;/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;function scrollAndFocus(t,e,o,i,s){var n;(n=jQuery)("body").addClass("scrolling"),n(t).closest("#mainNav").get(0)&&n(t).parents(".collapse.show").collapse("hide"),n("html, body").animate({scrollTop:n(e).offset().top-(i||0)},300,function(){n("body").removeClass("scrolling"),setTimeout(function(){n(o).focus()},500),s&&n("html, body").animate({scrollTop:n(e).offset().top-(i||0)})})}if(function(p){p.extend({browserSelector:function(){var t;t=navigator.userAgent||navigator.vendor||window.opera,(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4));var e="ontouchstart"in window||navigator.msMaxTouchPoints,o=navigator.userAgent.toLowerCase(),i=function(t){return-1<o.indexOf(t)},s="gecko",n="webkit",a="safari",r="opera",l=document.documentElement,d=[!/opera|webtv/i.test(o)&&/msie\s(\d)/.test(o)?"ie ie"+parseFloat(navigator.appVersion.split("MSIE")[1]):i("firefox/2")?s+" ff2":i("firefox/3.5")?s+" ff3 ff3_5":i("firefox/3")?s+" ff3":i("gecko/")?s:i("opera")?r+(/version\/(\d+)/.test(o)?" "+r+RegExp.jQuery1:/opera(\s|\/)(\d+)/.test(o)?" "+r+RegExp.jQuery2:""):i("konqueror")?"konqueror":i("chrome")?n+" chrome":i("iron")?n+" iron":i("applewebkit/")?n+" "+a+(/version\/(\d+)/.test(o)?" "+a+RegExp.jQuery1:""):i("mozilla/")?s:"",i("j2me")?"mobile":i("iphone")?"iphone":i("ipod")?"ipod":i("mac")?"mac":i("darwin")?"mac":i("webtv")?"webtv":i("win")?"win":i("freebsd")?"freebsd":i("x11")||i("linux")?"linux":"","js"];c=d.join(" "),p.browser.mobile&&(c+=" mobile"),e&&(c+=" touch"),l.className+=" "+c,/Edge/.test(navigator.userAgent)&&p("html").removeClass("chrome").addClass("edge"),!window.ActiveXObject&&"ActiveXObject"in window?p("html").removeClass("gecko").addClass("ie ie11"):(p("body").hasClass("dark")&&p("html").addClass("dark"),p("body").hasClass("boxed")&&p("html").addClass("boxed"))}}),p.browserSelector()}(jQuery),/iPad|iPhone|iPod/.test(navigator.platform)&&$(document).ready(function(t){t(".thumb-info").attr("onclick","return true")}),function(t){t('[data-toggle="tooltip"]').tooltip(),t('[data-toggle="popover"]').popover()}(jQuery),$('a[data-toggle="tab"]').on("shown.bs.tab",function(t){$(this).parents(".nav-tabs").find(".active").removeClass("active"),$(this).addClass("active").parent().addClass("active")}),!$("html").hasClass("disable-onload-scroll")&&window.location.hash&&(window.scrollTo(0,0),$(window).on("load",function(){setTimeout(function(){var t=window.location.hash,e=$(window).width()<768?180:90;$(t).get(0)&&($("a[href$='"+window.location.hash+"']").is("[data-hash-offset]")?e=parseInt($("a[href$='"+window.location.hash+"']").first().attr("data-hash-offset")):$("html").is("[data-hash-offset]")&&(e=parseInt($("html").attr("data-hash-offset"))),$("body").addClass("scrolling"),$("html, body").animate({scrollTop:$(t).offset().top-e},600,"easeOutQuad",function(){$("body").removeClass("scrolling")}))},1)})),function(s){s.fn.extend({textRotator:function(i){i=s.extend({fadeSpeed:500,pauseSpeed:100,child:null},i);return this.each(function(){var e=i,o=s(this);if(s(o.children(),o).each(function(){s(this).hide()}),e.child)t=e.child;else var t=s(o).children(":first");s(t).fadeIn(e.fadeSpeed,function(){s(t).delay(e.pauseSpeed).fadeOut(e.fadeSpeed,function(){var t=s(this).next();0==t.length&&(t=s(o).children(":first")),s(o).textRotator({child:t,fadeSpeed:e.fadeSpeed,pauseSpeed:e.pauseSpeed})})})})}})}(jQuery),function(e){var t={$wrapper:e(".notice-top-bar"),$body:e(".body"),init:function(){this.build()},build:function(){var t=this;e(window).on("load",function(){setTimeout(function(){t.$body.css({"margin-top":t.$wrapper.outerHeight(),transition:"ease margin 300ms"}),e("#noticeTopBarContent").textRotator({fadeSpeed:500,pauseSpeed:5e3})},1e3)})}};e(".notice-top-bar").get(0)&&t.init()}(jQuery),function(t){t(".close-theme-switcher-bar").on("click",function(){t(this).closest(".header-top").css({height:0,"min-height":0,overflow:"hidden"})})}(jQuery),function(e){e(".recommend-themes").get(0)&&e("#demos").get(0)&&e(window).on("scroll",function(t){e(window).scrollTop()+1>=e("#demos").offset().top?e(".recommend-themes").addClass("active"):e(".recommend-themes").removeClass("active")})}(jQuery),function(o){o('a[data-toggle="tab"]').on("shown.bs.tab",function(t){var e=o(o(t.target).attr("href"));e.get(0)&&e.find(".owl-carousel").trigger("refresh.owl.carousel")})}(jQuery),jQuery(".image-hotspot").append('<span class="ring"></span>').append('<span class="circle"></span>'),function(e){e("body[data-plugin-page-transition]").get(0)&&(e(window).on("beforeunload",function(){e("body").addClass("page-transition-active")}),window.onpageshow=function(t){t.persisted&&e("html").hasClass("safari")&&window.location.reload()})}(jQuery),function(e){e(".thumb-info-floating-caption").get(0)&&(e(".thumb-info-floating-caption").on("mouseenter",function(){e(".thumb-info-floating-caption-title").get(0)||(e(".body").append('<div class="thumb-info-floating-caption-title">'+e(this).data("title")+"</div>"),e(this).data("type")&&e(".thumb-info-floating-caption-title").append('<div class="thumb-info-floating-caption-type">'+e(this).data("type")+"</div>").css({"padding-bottom":22}),e(this).hasClass("thumb-info-floating-caption-clean")&&e(".thumb-info-floating-caption-title").addClass("bg-transparent"))}).on("mouseout",function(){e(".thumb-info-floating-caption-title").remove()}),e(document).on("mousemove",function(t){e(".thumb-info-floating-caption-title").css({position:"fixed",left:t.clientX-20,top:t.clientY+20})}))}(jQuery),function(o){o("[data-toggle-text-click]").on("click",function(){o(this).text(function(t,e){return e===o(this).attr("data-toggle-text-click")?o(this).attr("data-toggle-text-click-alt"):o(this).attr("data-toggle-text-click")})})}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)}(function(n){var a=function(t,e){this.$element=n(t),this.options=n.extend({},a.DEFAULTS,this.dataOptions(),e),this.init()};a.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null},a.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},a.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},e=Object.keys(t);for(var o in e){var i=e[o];void 0===t[i]&&delete t[i]}return t},a.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},a.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},a.prototype.restart=function(){this.stop(),this.init(),this.start()},a.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},a.prototype.stop=function(){this.interval&&clearInterval(this.interval)},a.prototype.toggle=function(){this.interval?this.stop():this.start()},n.fn.countTo=function(s){return this.each(function(){var t=n(this),e=t.data("countTo"),o="object"==typeof s?s:{},i="string"==typeof s?s:"start";(!e||"object"==typeof s)&&(e&&e.stop(),t.data("countTo",e=new a(this,o))),e[i].call(e)})}}),function(H){H.fn.visible=function(t,e,o,i){if(!(this.length<1)){var s=1<this.length?this.eq(0):this,n=null!=i,a=H(n?i:window),r=n?a.position():0,l=s.get(0),c=a.outerWidth(),d=a.outerHeight(),p=(o=o||"both",!0!==e||l.offsetWidth*l.offsetHeight);if("function"==typeof l.getBoundingClientRect){var u=l.getBoundingClientRect(),h=n?0<=u.top-r.top&&u.top<d+r.top:0<=u.top&&u.top<d,f=n?0<u.bottom-r.top&&u.bottom<=d+r.top:0<u.bottom&&u.bottom<=d,m=n?0<=u.left-r.left&&u.left<c+r.left:0<=u.left&&u.left<c,v=n?0<u.right-r.left&&u.right<c+r.left:0<u.right&&u.right<=c,g=t?h||f:h&&f,w=t?m||v:m&&v;if("both"===o)return p&&g&&w;if("vertical"===o)return p&&g;if("horizontal"===o)return p&&w}else{var b=n?0:r,y=b+d,C=a.scrollLeft(),x=C+c,k=s.position(),j=k.top,T=j+s.height(),$=k.left,S=$+s.width(),I=!0===t?T:j,Q=!0===t?j:T,_=!0===t?S:$,z=!0===t?$:S;if("both"===o)return!!p&&Q<=y&&b<=I&&z<=x&&C<=_;if("vertical"===o)return!!p&&Q<=y&&b<=I;if("horizontal"===o)return!!p&&z<=x&&C<=_}}}}(jQuery),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(l){var i=-1,s=-1,c=function(t){return parseFloat(t)||0},d=function(t){var e=l(t),i=null,s=[];return e.each(function(){var t=l(this),e=t.offset().top-c(t.css("margin-top")),o=0<s.length?s[s.length-1]:null;null===o?s.push(t):Math.floor(Math.abs(i-e))<=1?s[s.length-1]=o.add(t):s.push(t),i=e}),s},p=function(t){var e={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof t?l.extend(e,t):("boolean"==typeof t?e.byRow=t:"remove"===t&&(e.remove=!0),e)},u=l.fn.matchHeight=function(t){var e=p(t);if(e.remove){var o=this;return this.css(e.property,""),l.each(u._groups,function(t,e){e.elements=e.elements.not(o)}),this}return this.length<=1&&!e.target||(u._groups.push({elements:this,options:e}),u._apply(this,e)),this};u.version="0.7.2",u._groups=[],u._throttle=80,u._maintainScroll=!1,u._beforeUpdate=null,u._afterUpdate=null,u._rows=d,u._parse=c,u._parseOptions=p,u._apply=function(t,e){var n=p(e),o=l(t),i=[o],s=l(window).scrollTop(),a=l("html").outerHeight(!0),r=o.parents().filter(":hidden");return r.each(function(){var t=l(this);t.data("style-cache",t.attr("style"))}),r.css("display","block"),n.byRow&&!n.target&&(o.each(function(){var t=l(this),e=t.css("display");"inline-block"!==e&&"flex"!==e&&"inline-flex"!==e&&(e="block"),t.data("style-cache",t.attr("style")),t.css({display:e,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),i=d(o),o.each(function(){var t=l(this);t.attr("style",t.data("style-cache")||"")})),l.each(i,function(t,e){var o=l(e),s=0;if(n.target)s=n.target.outerHeight(!1);else{if(n.byRow&&o.length<=1)return void o.css(n.property,"");o.each(function(){var t=l(this),e=t.attr("style"),o=t.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block");var i={display:o};i[n.property]="",t.css(i),t.outerHeight(!1)>s&&(s=t.outerHeight(!1)),e?t.attr("style",e):t.css("display","")})}o.each(function(){var t=l(this),e=0;n.target&&t.is(n.target)||("border-box"!==t.css("box-sizing")&&(e+=c(t.css("border-top-width"))+c(t.css("border-bottom-width")),e+=c(t.css("padding-top"))+c(t.css("padding-bottom"))),t.css(n.property,s-e+"px"))})}),r.each(function(){var t=l(this);t.attr("style",t.data("style-cache")||null)}),u._maintainScroll&&l(window).scrollTop(s/a*l("html").outerHeight(!0)),this},u._applyDataApi=function(){var o={};l("[data-match-height], [data-mh]").each(function(){var t=l(this),e=t.attr("data-mh")||t.attr("data-match-height");o[e]=e in o?o[e].add(t):t}),l.each(o,function(){this.matchHeight(!0)})};var n=function(t){u._beforeUpdate&&u._beforeUpdate(t,u._groups),l.each(u._groups,function(){u._apply(this.elements,this.options)}),u._afterUpdate&&u._afterUpdate(t,u._groups)};u._update=function(t,e){if(e&&"resize"===e.type){var o=l(window).width();if(o===i)return;i=o}t?-1===s&&(s=setTimeout(function(){n(e),s=-1},u._throttle)):n(e)},l(u._applyDataApi);var t=l.fn.on?"on":"bind";l(window)[t]("load",function(t){u._update(!1,t)}),l(window)[t]("resize orientationchange",function(t){u._update(!0,t)})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(h){var t,f="waitForImages",m=(t=new Image).srcset&&t.sizes;h.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},h.expr.pseudos["has-src"]=function(t){return h(t).is('img[src][src!=""]')},h.expr.pseudos.uncached=function(t){return!!h(t).is(":has-src")&&!t.complete},h.fn.waitForImages=function(){var n,a,r,e,l=0,c=h.Deferred(),d=this,p=[],o=h.waitForImages.hasImageProperties||[],i=h.waitForImages.hasImageAttributes||[],u=/url\(\s*(['"]?)(.*?)\1\s*\)/g;if(h.isPlainObject(arguments[0])?(e=arguments[0].waitForAll,r=arguments[0].each,a=arguments[0].finished):e=1===arguments.length&&"boolean"===h.type(arguments[0])?arguments[0]:(a=arguments[0],r=arguments[1],arguments[2]),a=a||h.noop,r=r||h.noop,e=!!e,!h.isFunction(a)||!h.isFunction(r))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var t=h(this);e?t.find("*").addBack().each(function(){var s=h(this);s.is("img:has-src")&&!s.is("[srcset]")&&p.push({src:s.attr("src"),element:s[0]}),h.each(o,function(t,e){var o,i=s.css(e);if(!i)return!0;for(;o=u.exec(i);)p.push({src:o[2],element:s[0]})}),h.each(i,function(t,e){if(!s.attr(e))return!0;p.push({src:s.attr("src"),srcset:s.attr("srcset"),element:s[0]})})}):t.find("img:has-src").each(function(){p.push({src:this.src,element:this})})}),n=p.length,(l=0)===n&&(a.call(d),c.resolveWith(d)),h.each(p,function(t,i){var e=new Image,s="load."+f+" error."+f;h(e).one(s,function t(e){var o=[l,n,"load"==e.type];if(l++,r.apply(i.element,o),c.notifyWith(i.element,o),h(this).off(s,t),l==n)return a.call(d[0]),c.resolveWith(d[0]),!1}),m&&i.srcset&&(e.srcset=i.srcset,e.sizes=i.sizes),e.src=i.src}),c.promise()}}),function(t,c){fontSpy=function(t,e){var o=c("html"),i=c("body");if("string"!=typeof t||""===t)throw"A valid fontName is required. fontName must be a string and must not be an empty string.";var s={font:t,fontClass:t.toLowerCase().replace(/\s/g,""),success:function(){},failure:function(){},testFont:"Courier New",testString:"QW@HhsXJ",glyphs:"",delay:50,timeOut:1e3,callback:c.noop},n=c.extend(s,e),a=c("<span>"+n.testString+n.glyphs+"</span>").css("position","absolute").css("top","-9999px").css("left","-9999px").css("visibility","hidden").css("fontFamily",n.testFont).css("fontSize","250px");i.append(a);var r=a.outerWidth();a.css("fontFamily",n.font+","+n.testFont);var l=function(){var t=a.outerWidth();r!==t?(n.callback(),o.addClass(n.fontClass),n&&n.success&&n.success(),a.remove()):n.timeOut<0?(o.addClass("no-"+n.fontClass),n&&n.failure&&n.failure(),n.callback(new Error("FontSpy timeout")),a.remove()):(setTimeout(l,n.delay),n.timeOut=n.timeOut-n.delay)};l()}}(0,jQuery),function(u){"use strict";u.fn.pin=function(l){var r=0,c=[],d=!1,p=u(window);l=l||{};var o=function(){for(var t=0,e=c.length;t<e;t++){var o=c[t];if(l.minWidth&&p.width()<=l.minWidth)o.parent().is(".pin-wrapper")&&o.unwrap(),o.css({width:"",left:"",top:"",position:""}),l.activeClass&&o.removeClass(l.activeClass),d=!0;else{d=!1;var i=l.containerSelector?o.closest(l.containerSelector):u(document.body),s=o.offset(),n=i.offset(),a=o.parent().offset();o.parent().is(".pin-wrapper")||o.wrap("<div class='pin-wrapper'>");var r=u.extend({top:0,bottom:0},l.padding||{});o.data("pin",{pad:r,from:(l.containerSelector?n.top:s.top)-r.top,to:n.top+i.height()-o.outerHeight()-r.bottom,end:n.top+i.height(),parentTop:a.top}),o.css({width:o.outerWidth()}),o.parent().css("height",o.outerHeight())}}},t=function(){if(!d){r=p.scrollTop();for(var t=[],e=0,o=c.length;e<o;e++){var i=u(c[e]),s=i.data("pin");if(s){t.push(i);var n=s.from-s.pad.bottom,a=s.to-s.pad.top;n+i.outerHeight()>s.end?i.css("position",""):n<r&&r<a?("fixed"!=i.css("position")&&i.css({left:i.offset().left,top:s.pad.top}).css("position","fixed"),l.activeClass&&i.addClass(l.activeClass)):a<=r?(i.css({left:"",top:a-s.parentTop+s.pad.top}).css("position","absolute"),l.activeClass&&i.addClass(l.activeClass)):(i.css({position:"",top:"",left:""}),l.activeClass&&i.removeClass(l.activeClass))}}c=t}},i=function(){o(),t()};return this.each(function(){var t=u(this),e=u(this).data("pin")||{};e&&e.update||(c.push(t),u("img",this).one("load",o),e.update=i,u(this).data("pin",e))}),p.scroll(t),p.resize(function(){o()}),o(),p.on("load",i),this}}(jQuery),function(o){"use strict";var s,n={action:function(){},runOnLoad:!1,duration:500},a=!1,i={init:function(){for(var t=0;t<=arguments.length;t++){var e=arguments[t];switch(typeof e){case"function":n.action=e;break;case"boolean":n.runOnLoad=e;break;case"number":n.duration=e}}return this.each(function(){n.runOnLoad&&n.action(),o(this).resize(function(){i.timedAction.call(this)})})},timedAction:function(t,e){var o=function(){var t=n.duration;if(a){var e=new Date-s;if((t=n.duration-e)<=0)return clearTimeout(a),a=!1,void n.action()}i(t)},i=function(t){a=setTimeout(o,t)};s=new Date,"number"==typeof e&&(n.duration=e),"function"==typeof t&&(n.action=t),a||o()}};o.fn.afterResize=function(t){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):i.init.apply(this,arguments)}}(jQuery),jQuery(document).ready(function(a){var t,n,r=2500,l=3800,c=l-3e3,s=50,d=150,p=500,u=p+800,h=600,o=1500;function f(t){var e=g(t);if(t.parents(".word-rotator").hasClass("type")){var o=t.parent(".word-rotator-words");o.addClass("selected").removeClass("waiting"),setTimeout(function(){o.removeClass("selected"),t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},p),setTimeout(function(){m(e,d)},u)}else if(t.parents(".word-rotator").hasClass("letters")){var i=t.children("i").length>=e.children("i").length;!function t(e,o,i,s){e.removeClass("in").addClass("out");e.is(":last-child")?i&&setTimeout(function(){f(g(o))},r):setTimeout(function(){t(e.next(),o,i,s)},s);if(e.is(":last-child")&&a("html").hasClass("no-csstransitions")){var n=g(o);w(o,n)}}(t.find("i").eq(0),t,i,s),v(e.find("i").eq(0),e,i,s)}else t.parents(".word-rotator").hasClass("clip")?t.parents(".word-rotator-words").animate({width:"2px"},h,function(){w(t,e),m(e)}):t.parents(".word-rotator").hasClass("loading-bar")?(t.parents(".word-rotator-words").removeClass("is-loading"),w(t,e),setTimeout(function(){f(e)},l),setTimeout(function(){t.parents(".word-rotator-words").addClass("is-loading")},c)):(w(t,e),setTimeout(function(){f(e)},r))}function m(t,e){t.parents(".word-rotator").hasClass("type")?(v(t.find("i").eq(0),t,!1,e),t.addClass("is-visible").removeClass("is-hidden")):t.parents(".word-rotator").hasClass("clip")&&t.parents(".word-rotator-words").animate({width:t.outerWidth()+10},h,function(){setTimeout(function(){f(t)},o)})}function v(t,e,o,i){t.addClass("in").removeClass("out"),t.is(":last-child")?(e.parents(".word-rotator").hasClass("type")&&setTimeout(function(){e.parents(".word-rotator-words").addClass("waiting")},200),o||setTimeout(function(){f(e)},r),e.closest(".word-rotator").hasClass("type")||e.closest(".word-rotator-words").animate({width:e.outerWidth()})):setTimeout(function(){v(t.next(),e,o,i)},i)}function g(t){return t.is(":last-child")?t.parent().children().eq(0):t.next()}function w(t,e){if(t.removeClass("is-visible").addClass("is-hidden"),e.removeClass("is-hidden").addClass("is-visible"),!e.closest(".word-rotator").hasClass("clip")){var o=0,i=e.outerWidth()>t.outerWidth()?0:600;(e.closest(".word-rotator").hasClass("loading-bar")||e.closest(".word-rotator").hasClass("slide"))&&(o=3,i=0),setTimeout(function(){e.closest(".word-rotator-words").animate({width:e.outerWidth()+o})},i)}}a(".word-rotator.letters").find("b").each(function(){var t=a(this),e=t.text().split(""),o=t.hasClass("is-visible");for(i in e)0<t.parents(".rotate-2").length&&(e[i]="<em>"+e[i]+"</em>"),e[i]=o?'<i class="in">'+e[i]+"</i>":"<i>"+e[i]+"</i>";var s=e.join("");t.html(s).css("opacity",1)}),t=a(".word-rotator"),n=r,t.each(function(){var t=a(this);if(t.hasClass("loading-bar"))n=l,setTimeout(function(){t.find(".word-rotator-words").addClass("is-loading")},c);else if(t.hasClass("clip")){var e=t.find(".word-rotator-words"),o=e.outerWidth()+10;e.css("width",o)}else if(!t.hasClass("type")){var i=t.find(".word-rotator-words b"),s=0;i.each(function(){var t=a(this).outerWidth();s<t&&(s=t)}),t.find(".word-rotator-words").css("width",s)}setTimeout(function(){f(t.find(".is-visible").eq(0))},n)})}),function(e){e.fn.hover3d=function(t){var h=e.extend({selector:null,perspective:1e3,sensitivity:20,invert:!1,shine:!1,hoverInClass:"hover-in",hoverOutClass:"hover-out",hoverClass:"hover-3d"},t);return this.each(function(){var t=e(this),p=t.find(h.selector);currentX=0,currentY=0,h.shine&&p.append('<div class="shine"></div>');var u=e(this).find(".shine");t.css({perspective:h.perspective+"px",transformStyle:"preserve-3d"}),p.css({perspective:h.perspective+"px",transformStyle:"preserve-3d"}),u.css({position:"absolute",top:0,left:0,bottom:0,right:0,transform:"translateZ(1px)","z-index":9}),t.on("mouseenter",function(){return p.addClass(h.hoverInClass+" "+h.hoverClass),currentX=currentY=0,void setTimeout(function(){p.removeClass(h.hoverInClass)},1e3)}),t.on("mousemove",function(t){return e=t,o=p.innerWidth(),i=p.innerHeight(),s=Math.round(e.pageX-p.offset().left),n=Math.round(e.pageY-p.offset().top),a=h.invert?(o/2-s)/h.sensitivity:-(o/2-s)/h.sensitivity,r=h.invert?-(i/2-n)/h.sensitivity:(i/2-n)/h.sensitivity,l=s-o/2,c=n-i/2,(d=180*Math.atan2(c,l)/Math.PI-90)<0&&(d+=360),p.css({perspective:h.perspective+"px",transformStyle:"preserve-3d",transform:"rotateY("+a+"deg) rotateX("+r+"deg)"}),void u.css("background","linear-gradient("+d+"deg, rgba(255,255,255,"+e.offsetY/i*.5+") 0%,rgba(255,255,255,0) 80%)");var e,o,i,s,n,a,r,l,c,d}),t.on("mouseleave",function(){return p.addClass(h.hoverOutClass+" "+h.hoverClass),p.css({perspective:h.perspective+"px",transformStyle:"preserve-3d",transform:"rotateX(0) rotateY(0)"}),void setTimeout(function(){p.removeClass(h.hoverOutClass+" "+h.hoverClass),currentX=currentY=0},1e3)})})}}(jQuery),function(t){t.isFunction(t.fn.hover3d)&&t(function(){t(".hover-effect-3d").each(function(){t(this).hover3d({selector:".thumb-info"})})})}.apply(this,[jQuery]),$("[data-title-border]").get(0)){var $pageHeaderTitleBorder=$('<span class="page-header-title-border"></span>'),$pageHeaderTitle=$("[data-title-border]"),$window=$(window);$pageHeaderTitle.before($pageHeaderTitleBorder);var setPageHeaderTitleBorderWidth=function(){$pageHeaderTitleBorder.width($pageHeaderTitle.width())};$window.afterResize(function(){setPageHeaderTitleBorderWidth()}),setPageHeaderTitleBorderWidth(),$pageHeaderTitleBorder.addClass("visible")}!function(o){var t={$wrapper:o(".footer-reveal"),init:function(){this.build(),this.events()},build:function(){var t=this.$wrapper.outerHeight(!0);o(window).height()-o(".header-body").height()<t?(o("#footer").removeClass("footer-reveal"),o("body").css("padding-bottom",0)):(o("#footer").addClass("footer-reveal"),o("body").css("padding-bottom",t))},events:function(){var t=this,e=o(window);e.on("load",function(){e.afterResize(function(){t.build()})})}};o(".footer-reveal").get(0)&&t.init()}(jQuery);
;/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
;!function(g){g.fn.gMap=function(e,o){switch(e){case"addMarker":return g(this).trigger("gMap.addMarker",[o.latitude,o.longitude,o.content,o.icon,o.popup]);case"centerAt":return g(this).trigger("gMap.centerAt",[o.latitude,o.longitude,o.zoom]);case"clearMarkers":return g(this).trigger("gMap.clearMarkers")}var w=g.extend({},g.fn.gMap.defaults,e);return this.each(function(){var c=new google.maps.Map(this);g(this).data("gMap.reference",c);var e=new google.maps.Geocoder;w.address?e.geocode({address:w.address},function(e,o){e&&e.length&&c.setCenter(e[0].geometry.location)}):w.latitude&&w.longitude?c.setCenter(new google.maps.LatLng(w.latitude,w.longitude)):g.isArray(w.markers)&&0<w.markers.length?w.markers[0].address?e.geocode({address:w.markers[0].address},function(e,o){e&&0<e.length&&c.setCenter(e[0].geometry.location)}):c.setCenter(new google.maps.LatLng(w.markers[0].latitude,w.markers[0].longitude)):c.setCenter(new google.maps.LatLng(34.885931,9.84375)),c.setZoom(w.zoom),c.setMapTypeId(google.maps.MapTypeId[w.maptype]);var o={scrollwheel:w.scrollwheel,disableDoubleClickZoom:!w.doubleclickzoom};!1===w.controls?g.extend(o,{disableDefaultUI:!0}):0!==w.controls.length&&g.extend(o,w.controls,{disableDefaultUI:!0}),c.setOptions(o);var a,n,p=new google.maps.Marker;(a=new google.maps.MarkerImage(w.icon.image)).size=new google.maps.Size(w.icon.iconsize[0],w.icon.iconsize[1]),a.anchor=new google.maps.Point(w.icon.iconanchor[0],w.icon.iconanchor[1]),p.setIcon(a),w.icon.shadow&&((n=new google.maps.MarkerImage(w.icon.shadow)).size=new google.maps.Size(w.icon.shadowsize[0],w.icon.shadowsize[1]),n.anchor=new google.maps.Point(w.icon.shadowanchor[0],w.icon.shadowanchor[1]),p.setShadow(n)),g(this).bind("gMap.centerAt",function(e,o,a,n){n&&c.setZoom(n),c.panTo(new google.maps.LatLng(parseFloat(o),parseFloat(a)))});var m,s,h=[];g(this).bind("gMap.clearMarkers",function(){for(;h[0];)h.pop().setMap(null)}),g(this).bind("gMap.addMarker",function(e,o,a,n,s,t){var r,i,g=new google.maps.LatLng(parseFloat(o),parseFloat(a)),l=new google.maps.Marker({position:g});if(s?((r=new google.maps.MarkerImage(s.image)).size=new google.maps.Size(s.iconsize[0],s.iconsize[1]),r.anchor=new google.maps.Point(s.iconanchor[0],s.iconanchor[1]),l.setIcon(r),s.shadow&&((i=new google.maps.MarkerImage(s.shadow)).size=new google.maps.Size(s.shadowsize[0],s.shadowsize[1]),i.anchor=new google.maps.Point(s.shadowanchor[0],s.shadowanchor[1]),p.setShadow(i))):(l.setIcon(p.getIcon()),l.setShadow(p.getShadow())),n){"_latlng"===n&&(n=o+", "+a);var d=new google.maps.InfoWindow({content:w.html_prepend+n+w.html_append});google.maps.event.addListener(l,"click",function(){m&&m.close(),d.open(c,l),m=d}),t&&google.maps.event.addListenerOnce(c,"tilesloaded",function(){d.open(c,l)})}l.setMap(c),h.push(l)});for(var t=this,r=function(a){return function(e,o){e&&0<e.length&&g(t).trigger("gMap.addMarker",[e[0].geometry.location.lat(),e[0].geometry.location.lng(),a.html,a.icon,a.popup])}},i=0;i<w.markers.length;i++)(s=w.markers[i]).address?("_address"===s.html&&(s.html=s.address),e.geocode({address:s.address},r(s))):g(this).trigger("gMap.addMarker",[s.latitude,s.longitude,s.html,s.icon,s.popup])})},g.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery);
;!function(l,o,n,a){var h=l(o);l.fn.lazyload=function(e){var t,r=this,f={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:o,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function i(){var t=0;r.each(function(){var e=l(this);if(!f.skip_invisible||e.is(":visible"))if(l.abovethetop(this,f)||l.leftofbegin(this,f));else if(l.belowthefold(this,f)||l.rightoffold(this,f)){if(++t>f.failure_limit)return!1}else e.trigger("appear"),t=0})}return e&&(a!==e.failurelimit&&(e.failure_limit=e.failurelimit,delete e.failurelimit),a!==e.effectspeed&&(e.effect_speed=e.effectspeed,delete e.effectspeed),l.extend(f,e)),t=f.container===a||f.container===o?h:l(f.container),0===f.event.indexOf("scroll")&&t.bind(f.event,function(){return i()}),this.each(function(){var o=this,n=l(o);o.loaded=!1,n.attr("src")!==a&&!1!==n.attr("src")||n.is("img")&&n.attr("src",f.placeholder),n.one("appear",function(){if(!this.loaded){if(f.appear){var e=r.length;f.appear.call(o,e,f)}l("<img />").bind("load",function(){var e=n.attr("data-"+f.data_attribute);n.hide(),n.is("img")?n.attr("src",e):n.css("background-image","url('"+e+"')"),n[f.effect](f.effect_speed),o.loaded=!0;var t=l.grep(r,function(e){return!e.loaded});if(r=l(t),f.load){var i=r.length;f.load.call(o,i,f)}}).attr("src",n.attr("data-"+f.data_attribute))}}),0!==f.event.indexOf("scroll")&&n.bind(f.event,function(){o.loaded||n.trigger("appear")})}),h.bind("resize",function(){i()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&h.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&r.each(function(){l(this).trigger("appear")})}),l(n).ready(function(){i()}),this},l.belowthefold=function(e,t){return(t.container===a||t.container===o?(o.innerHeight?o.innerHeight:h.height())+h.scrollTop():l(t.container).offset().top+l(t.container).height())<=l(e).offset().top-t.threshold},l.rightoffold=function(e,t){return(t.container===a||t.container===o?h.width()+h.scrollLeft():l(t.container).offset().left+l(t.container).width())<=l(e).offset().left-t.threshold},l.abovethetop=function(e,t){return(t.container===a||t.container===o?h.scrollTop():l(t.container).offset().top)>=l(e).offset().top+t.threshold+l(e).height()},l.leftofbegin=function(e,t){return(t.container===a||t.container===o?h.scrollLeft():l(t.container).offset().left)>=l(e).offset().left+t.threshold+l(e).width()},l.inviewport=function(e,t){return!(l.rightoffold(e,t)||l.leftofbegin(e,t)||l.belowthefold(e,t)||l.abovethetop(e,t))},l.extend(l.expr[":"],{"below-the-fold":function(e){return l.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!l.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return l.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!l.rightoffold(e,{threshold:0})},"in-viewport":function(e){return l.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!l.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return l.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!l.rightoffold(e,{threshold:0})}})}(jQuery,window,document);
;/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

!function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof module&&module.exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window,function(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}),function(a,b){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof module&&module.exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window,function(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}var c=b.prototype;c.reset=function(){this.spaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=d[this.sortDirection]||d.downwardLeftToRight},c.pack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b];if(c.canFit(a)){this.placeInSpace(a,c);break}}},c.columnPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.x<=a.x&&c.x+c.width>=a.x+a.width&&c.height>=a.height-.01;if(d){a.y=c.y,this.placed(a);break}}},c.rowPack=function(a){for(var b=0;b<this.spaces.length;b++){var c=this.spaces[b],d=c.y<=a.y&&c.y+c.height>=a.y+a.height&&c.width>=a.width-.01;if(d){a.x=c.x,this.placed(a);break}}},c.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},c.placed=function(a){for(var b=[],c=0;c<this.spaces.length;c++){var d=this.spaces[c],e=d.getMaximalFreeRects(a);e?b.push.apply(b,e):b.push(d)}this.spaces=b,this.mergeSortSpaces()},c.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},c.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b];a:for(;c;){for(var d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue a}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}b++,c=a[b]}return a};var d={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],b):"object"==typeof module&&module.exports?module.exports=b(require("outlayer"),require("./rect")):a.Packery.Item=b(a.Outlayer,a.Packery.Rect)}(window,function(a,b){var c=document.documentElement.style,d="string"==typeof c.transform?"transform":"WebkitTransform",e=function(){a.Item.apply(this,arguments)},f=e.prototype=Object.create(a.Item.prototype),g=f._create;f._create=function(){g.call(this),this.rect=new b};var h=f.moveTo;return f.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b),e=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d;return e?void this.goTo(a,b):void h.apply(this,arguments)},f.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},f.disablePlacing=function(){this.isPlacing=!1},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},f.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||(a=this.dropPlaceholder=document.createElement("div"),a.className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},f.positionDropPlaceholder=function(){this.dropPlaceholder.style[d]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},f.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},e}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/packery",["get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof module&&module.exports?module.exports=b(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window,function(a,b,c,d,e){function f(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function g(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function h(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=b.create("packery");i.Item=e;var j=i.prototype;j._create=function(){b.prototype._create.call(this),this.packer=new d,this.shiftPacker=new d,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(b,c){c&&a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},j._resetLayout=function(){this.getSize(),this._getMeasurements();var a,b,c;this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},j._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},j._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},j.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},j._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},j._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},j._setRectSize=function(b,c){var d=a(b),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},j._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},j._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},j._manageStamp=function(a){var b,d=this.getItem(a);if(d&&d.isPlacing)b=d.rect;else{var e=this._getElementOffset(a);b=new c({x:this._getOption("originLeft")?e.left:e.right,y:this._getOption("originTop")?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},j.sortItemsByPosition=function(){var a=this._getOption("horizontal")?g:f;this.items.sort(a)},j.fit=function(a,b,c){var d=this.getItem(a);d&&(this.stamp(d.element),d.enablePlacing(),this.updateShiftTargets(d),b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,this.shift(d,b,c),this._bindFitEvents(d),d.moveTo(d.rect.x,d.rect.y),this.shiftLayout(),this.unstamp(d.element),this.sortItemsByPosition(),d.disablePlacing())},j._bindFitEvents=function(a){function b(){d++,2==d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},j.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},j.needsResizeLayout=function(){var b=a(this.element),c=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[c]!=this.size[c]},j.resizeShiftPercentLayout=function(){var b=this._getItemsForLayout(this.items),c=this._getOption("horizontal"),d=c?"y":"x",e=c?"height":"width",f=c?"rowHeight":"columnWidth",g=c?"innerHeight":"innerWidth",h=this[f];if(h=h&&h+this.gutter){this._getMeasurements();var i=this[f]+this.gutter;b.forEach(function(a){var b=Math.round(a.rect[d]/h);a.rect[d]=b*i})}else{var j=a(this.element)[g]+this.gutter,k=this.packer[e];b.forEach(function(a){a.rect[d]=a.rect[d]/k*j})}this.shiftLayout()},j.itemDragStart=function(a){if(this.isEnabled){this.stamp(a);var b=this.getItem(a);b&&(b.enablePlacing(),b.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(b))}},j.updateShiftTargets=function(a){this.shiftPacker.reset(),this._getBoundingRect();var b=this._getOption("originLeft"),d=this._getOption("originTop");this.stamps.forEach(function(a){var e=this.getItem(a);if(!e||!e.isPlacing){var f=this._getElementOffset(a),g=new c({x:b?f.left:f.right,y:d?f.top:f.bottom});this._setRectSize(a,g),this.shiftPacker.placed(g)}},this);var e=this._getOption("horizontal"),f=e?"rowHeight":"columnWidth",g=e?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h,i=this[f];if(i=i&&i+this.gutter){var j=Math.ceil(a.rect[g]/i),k=Math.floor((this.shiftPacker[g]+this.gutter)/i);h=(k-j)*i;for(var l=0;k>l;l++)this._addShiftTarget(l*i,0,h)}else h=this.shiftPacker[g]+this.gutter-a.rect[g],this._addShiftTarget(0,0,h);var m=this._getItemsForLayout(this.items),n=this._getPackMethod();m.forEach(function(a){var b=a.rect;this._setRectSize(a.element,b),this.shiftPacker[n](b),this._addShiftTarget(b.x,b.y,h);var c=e?b.x+b.width:b.x,d=e?b.y:b.y+b.height;if(this._addShiftTarget(c,d,h),i)for(var f=Math.round(b[g]/i),j=1;f>j;j++){var k=e?c:b.x+i*j,l=e?b.y+i*j:d;this._addShiftTarget(k,l,h)}},this)},j._addShiftTarget=function(a,b,c){var d=this._getOption("horizontal")?b:a;if(!(0!==d&&d>c)){var e=a+","+b,f=-1!=this.shiftTargetKeys.indexOf(e);f||(this.shiftTargetKeys.push(e),this.shiftTargets.push({x:a,y:b}))}},j.shift=function(a,b,c){var d,e=1/0,f={x:b,y:c};this.shiftTargets.forEach(function(a){var b=h(a,f);e>b&&(d=a,e=b)}),a.rect.x=d.x,a.rect.y=d.y};var k=120;j.itemDragMove=function(a,b,c){function d(){f.shift(e,b,c),e.positionDropPlaceholder(),f.layout()}var e=this.isEnabled&&this.getItem(a);if(e){b-=this.size.paddingLeft,c-=this.size.paddingTop;var f=this,g=new Date;this._itemDragTime&&g-this._itemDragTime<k?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(d,k)):(d(),this._itemDragTime=g)}},j.itemDragEnd=function(a){function b(){d++,2==d&&(c.element.classList.remove("is-positioning-post-drag"),c.hideDropPlaceholder(),e.dispatchEvent("dragItemPositioned",null,[c]))}var c=this.isEnabled&&this.getItem(a);if(c){clearTimeout(this.dragTimeout),c.element.classList.add("is-positioning-post-drag");var d=0,e=this;c.once("layout",b),this.once("layoutComplete",b),c.moveTo(c.rect.x,c.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),c.disablePlacing(),this.unstamp(c.element)}},j.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},j.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},j._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},j.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},j.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},j._bindUIDraggableEvents=function(a,b){var c=this.handleUIDraggable;a[b]("dragstart",c.start)[b]("drag",c.drag)[b]("dragstop",c.stop)};var l=j.destroy;return j.destroy=function(){l.apply(this,arguments),this.isEnabled=!1},i.Rect=c,i.Packer=d,i}),function(a,b){"function"==typeof define&&define.amd?define(["isotope-layout/js/layout-mode","packery/js/packery"],b):"object"==typeof module&&module.exports?module.exports=b(require("isotope-layout/js/layout-mode"),require("packery")):b(a.Isotope.LayoutMode,a.Packery)}(window,function(a,b){var c=a.create("packery"),d=c.prototype,e={_getElementOffset:!0,_getMeasurement:!0};for(var f in b.prototype)e[f]||(d[f]=b.prototype[f]);var g=d._resetLayout;d._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)};var h=d._getItemLayoutPosition;d._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)};var i=d.needsResizeLayout;d.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)};var j=d._getOption;return d._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},c});
;/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
;/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;h<g&&(c=f[h],c.search(/^(http|https|ftp):\/\//)===-1&&c.search(":")!==-1);h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||"false"!==e&&e),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;d<b;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.gif">').on("load",d),a('<img src="'+b+'.jpg">').on("load",d),a('<img src="'+b+'.jpeg">').on("load",d),a('<img src="'+b+'.png">').on("load",d)}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d;try{this.init()}catch(i){if(i.message!==h)throw i}}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},h="Not implemented";e.prototype.init=function(){var b,e,f=this,g=f.path,i=g,j="",k=f.$element,l=f.settings,m=c(l.position),n=l.posterType;e=f.$wrapper=a("<div>").addClass(l.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":l.bgColor,"background-repeat":"no-repeat","background-position":m.x+" "+m.y}),"object"==typeof g&&(g.poster?i=g.poster:g.mp4?i=g.mp4:g.webm?i=g.webm:g.ogv&&(i=g.ogv)),"detect"===n?d(i,function(a){e.css("background-image","url("+a+")")}):"none"!==n&&e.css("background-image","url("+i+"."+n+")"),"static"===k.css("position")&&k.css("position","relative"),k.prepend(e),"object"==typeof g?(g.mp4&&(j+='<source src="'+g.mp4+'.mp4" type="video/mp4">'),g.webm&&(j+='<source src="'+g.webm+'.webm" type="video/webm">'),g.ogv&&(j+='<source src="'+g.ogv+'.ogv" type="video/ogg">'),b=f.$video=a("<video>"+j+"</video>")):b=f.$video=a('<video><source src="'+g+'.mp4" type="video/mp4"><source src="'+g+'.webm" type="video/webm"><source src="'+g+'.ogv" type="video/ogg"></video>');try{b.prop({autoplay:l.autoplay,loop:l.loop,volume:l.volume,muted:l.muted,defaultMuted:l.muted,playbackRate:l.playbackRate,defaultPlaybackRate:l.playbackRate})}catch(o){throw new Error(h)}b.css({margin:"auto",position:"absolute","z-index":-1,top:m.y,left:m.x,"-webkit-transform":"translate(-"+m.x+", -"+m.y+")","-ms-transform":"translate(-"+m.x+", -"+m.y+")","-moz-transform":"translate(-"+m.x+", -"+m.y+")",transform:"translate(-"+m.x+", -"+m.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",function(){f.resize()}).one("playing.vide",function(){b.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),k.on("resize.vide",function(){l.resizing&&f.resize()}),e.append(b)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},e.prototype.destroy=function(){delete a[f].lookup[this.index],this.$video&&this.$video.off(f),this.$element.off(f).removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize.vide",function(){for(var b,c=a[f].lookup.length,d=0;d<c;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload.vide",function(){return!1}),a(document).find("[data-vide-bg]").each(function(b,c){var d=a(c),e=d.data("vide-options"),g=d.data("vide-bg");d[f](g,e)})})});
;/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.4
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";!function(){function t(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function e(t,e,n){r(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}t.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],t.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],t.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},t.prototype.lineToPath=function(t){var e={},r=t.x1||0,n=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+r+","+n+"L"+i+","+a,e},t.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(0>o?s:o,0),i/2),s=Math.min(Math.max(0>s?o:s,0),a/2),e.d="M "+(r+o)+","+n+" L "+(r+i-o)+","+n+" A "+o+","+s+",0,0,1,"+(r+i)+","+(n+s)+" L "+(r+i)+","+(n+a-s)+" A "+o+","+s+",0,0,1,"+(r+i-o)+","+(n+a)+" L "+(r+o)+","+(n+a)+" A "+o+","+s+",0,0,1,"+r+","+(n+a-s)+" L "+r+","+(n+s)+" A "+o+","+s+",0,0,1,"+(r+o)+","+n}else e.d="M"+r+" "+n+" L"+(r+i)+" "+n+" L"+(r+i)+" "+(n+a)+" L"+r+" "+(n+a)+" Z";return e},t.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},t.prototype.polygonToPath=function(e){var r=t.prototype.polylineToPath(e);return r.d+="Z",r},t.prototype.ellipseToPath=function(t){var e={},r=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-r,s=a,h=parseFloat(i)+parseFloat(r),l=a;return e.d="M"+o+","+s+"A"+r+","+n+" 0,1,1 "+h+","+l+"A"+r+","+n+" 0,1,1 "+o+","+l,e},t.prototype.circleToPath=function(t){var e={},r=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=n-r,o=i,s=parseFloat(n)+parseFloat(r),h=i;return e.d="M"+a+","+o+"A"+r+","+r+" 0,1,1 "+s+","+h+"A"+r+","+r+" 0,1,1 "+a+","+h,e},t.prototype.pathMaker=function(t,e){var r,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],-1===this.ATTR_WATCH.indexOf(n.name)&&i.setAttribute(n.name,n.value);for(r in e)i.setAttribute(r,e[r]);return i},t.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var r,n,i,a;e.LINEAR=function(t){return t},e.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},e.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},e.EASE_IN=function(t){return Math.pow(t,3)},e.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},e.prototype.setElement=function(t,e){var r,n;if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var n=this;r=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var r=t.querySelector("svg");if(!r)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+e.file);n.el=r,n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%"),n.parentEl.appendChild(n.el),n.isReady=!0,n.init(),n=null};var i=new window.XMLHttpRequest;return i.addEventListener("load",r),i.open("GET",e.file),i.send(),void 0}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:n=this,r=function(e){if(!n.isReady){if(n.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!n.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");n.el&&(t.getAttribute("built-by-vivus")&&(n.parentEl.insertBefore(n.el,t),n.parentEl.removeChild(t),n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%")),n.isReady=!0,n.init(),n=null)}},r()||t.addEventListener("load",r);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},e.prototype.setOptions=function(t){var r=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===r.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||r[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=a(t.duration,120),this.delay=a(t.delay,null),this.dashGap=a(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=t.hasOwnProperty("ignoreInvisible")?!!t.ignoreInvisible:!1,this.animTimingFunction=t.animTimingFunction||e.LINEAR,this.pathTimingFunction=t.pathTimingFunction||e.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},e.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},e.prototype.mapping=function(){var t,e,r,n,i,o,s,h;for(h=o=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],this.isInvisible(r)||(i={el:r,length:Math.ceil(r.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(i),r.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),r.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,o+=i.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=s/o*this.duration,i.duration=i.length/o*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":r=i.el,n=this.parseAttr(r),i.startAt=h+(a(n["data-delay"],this.delayUnit)||0),i.duration=a(n["data-duration"],this.duration),h=void 0!==n["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":r=i.el,n=this.parseAttr(r),i.startAt=a(n["data-start"],this.delayUnit)||0,i.duration=a(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}s+=i.length,this.frameLength=this.frameLength||this.duration}},e.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),this.handle=n(function(){t.drawer()}),void 0;this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},e.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},e.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},e.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new t(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},e.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},e.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},e.prototype.reset=function(){return this.setFrameProgress(0)},e.prototype.finish=function(){return this.setFrameProgress(1)},e.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},e.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},e.prototype.stop=function(){return this.handle&&(i(this.handle),this.handle=null),this},e.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},e.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},e.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},e.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},e.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},e.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){e.prototype.docElem||(e.prototype.docElem=window.document.documentElement,n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),i=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},a=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return e}):"object"==typeof exports?module.exports=e:window.Vivus=e}();
;/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

// Theme
window.theme = {};

// Theme Common Functions
window.theme.fn = {

	getOptions: function(opts) {

		if (typeof(opts) == 'object') {

			return opts;

		} else if (typeof(opts) == 'string') {

			try {
				return JSON.parse(opts.replace(/'/g,'"').replace(';',''));
			} catch(e) {
				return {};
			}

		} else {

			return {};

		}

	}

};

// Animate
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__animate';

	var PluginAnimate = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginAnimate.defaults = {
		accX: 0,
		accY: -80,
		delay: 100,
		duration: '750ms',
		minWindowWidth: 767
	};

	PluginAnimate.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this;

			if($('body').hasClass('loading-overlay-showing')) {
				$(window).on('loading.overlay.ready', function(){
					self.animate();
				});
			} else {
				self.animate();
			}

			return this;
		},

		animate: function() {
			var self = this,
				$el = this.options.wrapper,
				delay = 0,
				duration = this.options.duration,
				elTopDistance = $el.offset().top,
				windowTopDistance = $(window).scrollTop();

			$el.addClass('appear-animation animated');

			if (!$('html').hasClass('no-csstransitions') && $(window).width() > self.options.minWindowWidth && elTopDistance >= windowTopDistance) {

				$el.appear(function() {

					$el.one('animation:show', function(ev) {
						delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);
						duration = ($el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration);

						if (duration != '750ms') {
							$el.css('animation-duration', duration);
						}

						$el.css('animation-delay', delay + 'ms');

						$el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
					});

					$el.trigger('animation:show');

				}, {
					accX: self.options.accX,
					accY: self.options.accY
				});

			} else {

				$el.addClass('appear-animation-visible');

			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginAnimate: PluginAnimate
	});

	// jquery plugin
	$.fn.themePluginAnimate = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginAnimate($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Before / After
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__beforeafter';

	var PluginBeforeAfter = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginBeforeAfter.defaults = {
		
	};

	PluginBeforeAfter.prototype = {
		initialize: function($el, opts) {
			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginBeforeAfter.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {

			if (!($.isFunction($.fn.twentytwenty))) {
				return this;
			}

			var self = this;

			self.options.wrapper
				.twentytwenty(self.options);

			return this;

		}
	};

	// expose to scope
	$.extend(theme, {
		PluginBeforeAfter: PluginBeforeAfter
	});

	// jquery plugin
	$.fn.themePluginBeforeAfter = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginBeforeAfter($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Carousel
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__carousel';

	var PluginCarousel = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCarousel.defaults = {
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 2
			},
			979: {
				items: 3
			},
			1199: {
				items: 4
			}
		},
		navText: []
	};

	PluginCarousel.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.owlCarousel))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			// Add Theme Class
			$el.addClass('owl-theme');

			// Add Loading
			$el.addClass('owl-loading');

			// Force RTL according to HTML dir attribute
			if ($('html').attr('dir') == 'rtl') {
				this.options = $.extend(true, {}, this.options, {
					rtl: true
				});
			}

			if (this.options.items == 1) {
				this.options.responsive = {}
			}

			if (this.options.items > 4) {
				this.options = $.extend(true, {}, this.options, {
					responsive: {
						1199: {
							items: this.options.items
						}
					}
				});
			}

			// Auto Height Fixes
			if (this.options.autoHeight) {
				var itemsHeight = [];

				$el.find('.owl-item').each(function(){
					if( $(this).hasClass('active') ) {
						itemsHeight.push( $(this).height() );
					}
				});

				$(window).afterResize(function() {
					$el.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
				});

				$(window).on('load', function() {
					$el.find('.owl-stage-outer').height( Math.max.apply(null, itemsHeight) );
				});
			}

			// Initialize OwlCarousel
			$el.owlCarousel(this.options).addClass('owl-carousel-init');

			// Sync
			if ($el.attr('data-sync')) {
				$el.on('change.owl.carousel', function(event) {
					if (event.namespace && event.property.name === 'position') {
					    var target = event.relatedTarget.relative(event.property.value, true);
					    $( $el.data('sync') ).owlCarousel('to', target, 300, true);				        
				  	}
				});
			}

			// Carousel Center Active Item
			if( $el.hasClass('carousel-center-active-item') ) {
				var itemsActive    = $el.find('.owl-item.active'),
					indexCenter    = Math.floor( ($el.find('.owl-item.active').length - 1) / 2 ),
					itemCenter     = itemsActive.eq(indexCenter);

				itemCenter.addClass('current');

				$el.on('change.owl.carousel', function(event) {
				  	$el.find('.owl-item').removeClass('current');
					
					setTimeout(function(){
					  	var itemsActive    = $el.find('.owl-item.active'),
					  		indexCenter    = Math.floor( ($el.find('.owl-item.active').length - 1) / 2 ),
					  		itemCenter     = itemsActive.eq(indexCenter);

					  	itemCenter.addClass('current');
					}, 100);
				});

				// Refresh
				$el.trigger('refresh.owl.carousel');

			}

			// Remove Loading
			$el.removeClass('owl-loading');

			// Remove Height
			$el.css('height', 'auto');

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCarousel: PluginCarousel
	});

	// jquery plugin
	$.fn.themePluginCarousel = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCarousel($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Chart Circular
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__chartCircular';

	var PluginChartCircular = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginChartCircular.defaults = {
		accX: 0,
		accY: -150,
		delay: 1,
		barColor: '#0088CC',
		trackColor: '#f2f2f2',
		scaleColor: false,
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 13,
		size: 175,
		rotate: 0,
		animate: ({
			duration: 2500,
			enabled: true
		})
	};

	PluginChartCircular.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.appear)) || !($.isFunction($.fn.easyPieChart))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
				percentEl = $el.find('.percent');

			$.extend(true, self.options, {
				onStep: function(from, to, currentValue) {
					percentEl.html(parseInt(currentValue));
				}
			});

			$el.attr('data-percent', 0);

			$el.appear(function() {

				$el.easyPieChart(self.options);

				setTimeout(function() {

					$el.data('easyPieChart').update(value);
					$el.attr('data-percent', value);

				}, self.options.delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginChartCircular: PluginChartCircular
	});

	// jquery plugin
	$.fn.themePluginChartCircular = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginChartCircular($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Countdown
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__countdown';

	var PluginCountdown = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCountdown.defaults = {
		date: '2030/06/10 12:00:00',
		textDay: 'DAY',
		textHour: 'HRS',
		textMin: 'MIN',
		textSec: 'SEC',
		uppercase: true,
		numberClass: '',
		wrapperClass: '',
		insertHTMLbefore: '',
		insertHTMLafter: ''
	};

	PluginCountdown.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCountdown.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.countTo))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				numberClass = ( self.options.numberClass ) ? ' ' + self.options.numberClass : '',
				wrapperClass = ( self.options.wrapperClass ) ? ' ' + self.options.wrapperClass : '';

			if( self.options.uppercase ) {
				$el.countdown(self.options.date).on('update.countdown', function(event) {
					var $this = $(this).html(event.strftime(self.options.insertHTMLbefore
						+ '<span class="days'+ wrapperClass +'"><span class="'+ numberClass +'">%D</span> '+ self.options.textDay +'<div class="d-inline text-uppercase">%!d</div></span> '
						+ '<span class="hours'+ wrapperClass +'"><span class="'+ numberClass +'">%H</span> '+ self.options.textHour +'</span> '
						+ '<span class="minutes'+ wrapperClass +'"><span class="'+ numberClass +'">%M</span> '+ self.options.textMin +'</span> '
						+ '<span class="seconds'+ wrapperClass +'"><span class="'+ numberClass +'">%S</span> '+ self.options.textSec +'</span> '
						+ self.options.insertHTMLafter
					));
				});
			} else {
				$el.countdown(self.options.date).on('update.countdown', function(event) {
					var $this = $(this).html(event.strftime(self.options.insertHTMLbefore
						+ '<span class="days'+ wrapperClass +'"><span class="'+ numberClass +'">%D</span> '+ self.options.textDay +'%!d</span> '
						+ '<span class="hours'+ wrapperClass +'"><span class="'+ numberClass +'">%H</span> '+ self.options.textHour +'</span> '
						+ '<span class="minutes'+ wrapperClass +'"><span class="'+ numberClass +'">%M</span> '+ self.options.textMin +'</span> '
						+ '<span class="seconds'+ wrapperClass +'"><span class="'+ numberClass +'">%S</span> '+ self.options.textSec +'</span> '
						+ self.options.insertHTMLafter
					));
				});
			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCountdown: PluginCountdown
	});

	// jquery plugin
	$.fn.themePluginCountdown = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCountdown($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Counter
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__counter';

	var PluginCounter = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCounter.defaults = {
		accX: 0,
		accY: 0,
		speed: 3000,
		refreshInterval: 100,
		decimals: 0,
		onUpdate: null,
		onComplete: null
	};

	PluginCounter.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.countTo))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			$.extend(self.options, {
				onComplete: function() {
					if ($el.data('append')) {
						$el.html($el.html() + $el.data('append'));
					}

					if ($el.data('prepend')) {
						$el.html($el.data('prepend') + $el.html());
					}
				}
			});

			$el.appear(function() {

				$el.countTo(self.options);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCounter: PluginCounter
	});

	// jquery plugin
	$.fn.themePluginCounter = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCounter($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Float Element
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__floatElement';

	var PluginFloatElement = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginFloatElement.defaults = {
		startPos: 'top',
		speed: 3,
		horizontal: false,
		transition: false
	};

	PluginFloatElement.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginFloatElement.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper,
				$window = $(window),
				minus;

			if( self.options.style ) {
				$el.attr('style', self.options.style);
			}

			if( $window.width() > 767 ) {

				// Set Start Position
				if( self.options.startPos == 'none' ) {
					minus = '';
				} else if( self.options.startPos == 'top' ) {
					$el.css({
						top: 0
					});
					minus = '';
				} else {
					$el.css({
						bottom: 0
					});
					minus = '-';
				}

				// Set Transition
				if( self.options.transition ) {
					$el.css({
						transition: 'ease transform 500ms'
					});
				}

				// First Load
				self.movement(minus);	

				// Scroll
				$window.on('scroll', function(){
					self.movement(minus);				   
				});

			}

			return this;
		},

		movement: function(minus) {
			var self = this,
				$el = this.options.wrapper,
				$window = $(window),
				scrollTop = $window.scrollTop(),
		    	elementOffset = $el.offset().top,
		     	currentElementOffset = (elementOffset - scrollTop);

		   	var scrollPercent = 100 * currentElementOffset / ($window.height());

		   	if( $el.visible( true ) ) {

		   		if( !self.options.horizontal ) {

		   			$el.css({
			   			transform: 'translate3d(0, '+ minus + scrollPercent / self.options.speed +'%, 0)'
			   		});

		   		} else {

		   			$el.css({
			   			transform: 'translate3d('+ minus + scrollPercent / self.options.speed +'%, '+ minus + scrollPercent / self.options.speed +'%, 0)'
			   		});

		   		}
		   		
		   	}
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginFloatElement: PluginFloatElement
	});

	// jquery plugin
	$.fn.themePluginFloatElement = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginFloatElement($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Icon
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var instanceName = '__icon';

	var PluginIcon = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginIcon.defaults = {
		color: '#2388ED',
		animated: false,
		delay: 300
	};

	PluginIcon.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginIcon.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self  	 = this,
				$el   	 = this.options.wrapper,
				color 	 = self.options.color,
				elTopDistance = $el.offset().top,
				windowTopDistance = $(window).scrollTop(),
				duration = ( self.options.animated && !self.options.strokeBased ) ? 200 : 100;

			// Check origin
			if( window.location.origin === 'file://' ) {
				$el.css('opacity', 1);
				return;
			}

			// Duration
			if( self.options.duration ) {
				duration = self.options.duration;
			}

			// SVG Content
			var SVGContent = $.get({
				url: $el.attr('src'), 
				success: function(data, status, xhr){
					var iconWrapper = $('<div class="animated-icon">'+ xhr.responseText +'</div>'),
						uniqid = 'icon_' + Math.floor(Math.random() * 26) + Date.now();

					iconWrapper.find('svg').attr('id', uniqid);

					if( $el.attr('width') ) {
						iconWrapper.find('svg')
							.attr('width', $el.attr('width'))
							.attr('height', $el.attr('width'));						
					}

					$el.replaceWith(iconWrapper);

					$el = iconWrapper;

					var icon = new Vivus(uniqid, {start: 'manual', type: 'sync', selfDestroy: true, duration: duration, onReady: function(obj){
						var styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style"),
							animateStyle = '';

						// SVG Fill Based
						if( self.options.animated && !self.options.strokeBased || !self.options.animated && color && !self.options.strokeBased ) {
							animateStyle = 'stroke-width: 0.1px; fill-opacity: 0; transition: ease fill-opacity 300ms;';
							
							// Set Style on SVG inside object
							styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { fill: '+ color +'; stroke: '+ color +'; '+ animateStyle + (self.options.svgStyle ? self.options.svgStyle : "") + ' } .finished path { fill-opacity: 1; }';
							obj.el.appendChild(styleElement);
						}

						// SVG Stroke Based
						if( self.options.animated && self.options.strokeBased || !self.options.animated && color && self.options.strokeBased ) {

							// Set Style on SVG inside object
							styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { stroke: '+ color +'; ' + (self.options.svgStyle ? self.options.svgStyle : "") + '}';
							obj.el.appendChild(styleElement);
						}

						$.event.trigger('theme.plugin.icon.svg.ready');
					}});

					// Isn't animated
					if( !self.options.animated ) {
						setTimeout(function(){
							icon.finish();
						}, 10);
						$el.css({ opacity: 1 });
					}

					// Animated
					if( self.options.animated && $(window).width() > 767 ) {
						// First Load
						if( $el.visible( true ) ) {
							self.startIconAnimation( icon, $el );
						} else if( elTopDistance < windowTopDistance ) {
							self.startIconAnimation( icon, $el );
						}

						// On Scroll
						$(window).on('scroll', function(){
							if( $el.visible( true ) ) {
								self.startIconAnimation( icon, $el );
							}
						});

					} else {
						
						$el.css({ opacity: 1 });
						icon.finish();
						
						$(window).on('theme.plugin.icon.svg.ready', function(){
							setTimeout(function(){
								icon.el.setAttribute('class', 'finished');
								icon.finish();
							}, 300);
						});
						
					}

				}
			});

			return this;
		},
		startIconAnimation: function(icon, $el) {
			var self = this;

			// Animate for better performance
			$({to:0}).animate({to:1}, ((self.options.strokeBased) ? self.options.delay : self.options.delay + 300 ), function() {
				$el.css({ opacity: 1 });
			});

			$({to:0}).animate({to:1}, self.options.delay, function() {
				icon.play(1);

				setTimeout(function(){
					icon.el.setAttribute('class', 'finished');
				}, icon.duration * 5 );
			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginIcon: PluginIcon
	});

	// jquery plugin
	$.fn.themePluginIcon = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginIcon($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Lazy Load
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__lazyload';

	var PluginLazyLoad = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLazyLoad.defaults = {
		effect: 'show',
		appearEffect: '',
		imgFluid: true,
		appear: function(elements_left, settings) {
			
		},
		load: function(elements_left, settings) {
			$(this).addClass($.trim('lazy-load-loaded ' + settings.appearEffect)).css({
				'animation-duration': '1s'
			});
		}
	};

	PluginLazyLoad.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginLazyLoad.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.lazyload))) {
				return this;
			}

			var self = this;

			self.options.wrapper.lazyload(this.options);

			return this;
		},

		events: function() {
			var self = this;

			if( self.options.imgFluid && self.options.wrapper.is('img') ) {
				self.options.wrapper.on('appear', function(){
					setTimeout(function(){
						self.options.wrapper.addClass('img-fluid');
					}, 500);
				});
			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLazyLoad: PluginLazyLoad
	});

	// jquery plugin
	$.fn.themePluginLazyLoad = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLazyLoad($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Lightbox
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__lightbox';

	var PluginLightbox = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLightbox.defaults = {
		tClose: 'Close (Esc)', // Alt text on close button
		tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
		gallery: {
			tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
			tNext: 'Next (Right arrow key)', // Alt text on right arrow
			tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
		},
		image: {
			tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
		},
		ajax: {
			tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
		},
		callbacks: {
			open: function() {
				$('html').addClass('lightbox-opened');
			},
			close: function() {
				$('html').removeClass('lightbox-opened');
			}
		}
	};

	PluginLightbox.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.magnificPopup))) {
				return this;
			}

			this.options.wrapper.magnificPopup(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLightbox: PluginLightbox
	});

	// jquery plugin
	$.fn.themePluginLightbox = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLightbox($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Loading Overlay
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var loadingOverlayTemplate = [
		'<div class="loading-overlay">',
			'<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
		'</div>'
	].join('');

	var LoadingOverlay = function( $wrapper, options ) {
		return this.initialize( $wrapper, options );
	};

	LoadingOverlay.prototype = {

		options: {
			css: {},
			hideDelay: 500
		},

		initialize: function( $wrapper, options ) {
			this.$wrapper = $wrapper;

			this
				.setVars()
				.setOptions( options )
				.build()
				.events();

			this.$wrapper.data( 'loadingOverlay', this );
		},

		setVars: function() {
			this.$overlay = this.$wrapper.find('.loading-overlay');

			return this;
		},

		setOptions: function( options ) {
			if ( !this.$overlay.get(0) ) {
				this.matchProperties();
			}
			this.options     = $.extend( true, {}, this.options, options, theme.fn.getOptions(this.$wrapper.data('plugin-options')) );

			this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

			return this;
		},

		build: function() {
			if ( !this.$overlay.closest(document.documentElement).get(0) ) {
				if ( !this.$cachedOverlay ) {
					this.$overlay = $( loadingOverlayTemplate ).clone();

					if ( this.options.css ) {
						this.$overlay.css( this.options.css );
						this.$overlay.find( '.loader' ).addClass( this.loaderClass );
					}
				} else {
					this.$overlay = this.$cachedOverlay.clone();
				}

				this.$wrapper.append( this.$overlay );
			}

			if ( !this.$cachedOverlay ) {
				this.$cachedOverlay = this.$overlay.clone();
			}

			return this;
		},

		events: function() {
			var _self = this;

			if ( this.options.startShowing ) {
				_self.show();
			}

			if ( this.$wrapper.is('body') || this.options.hideOnWindowLoad ) {
				$( window ).on( 'load error', function() {
					_self.hide();
				});
			}

			if ( this.options.listenOn ) {
				$( this.options.listenOn )
					.on( 'loading-overlay:show beforeSend.ic', function( e ) {
						e.stopPropagation();
						_self.show();
					})
					.on( 'loading-overlay:hide complete.ic', function( e ) {
						e.stopPropagation();
						_self.hide();
					});
			}

			this.$wrapper
				.on( 'loading-overlay:show beforeSend.ic', function( e ) {
					if ( e.target === _self.$wrapper.get(0) ) {
						e.stopPropagation();
						_self.show();
						return true;
					}
					return false;
				})
				.on( 'loading-overlay:hide complete.ic', function( e ) {
					if ( e.target === _self.$wrapper.get(0) ) {
						e.stopPropagation();
						_self.hide();
						return true;
					}
					return false;
				});

			return this;
		},

		show: function() {
			this.build();

			this.position = this.$wrapper.css( 'position' ).toLowerCase();
			if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
				this.$wrapper.css({
					position: 'relative'
				});
			}
			this.$wrapper.addClass( 'loading-overlay-showing' );
		},

		hide: function() {
			var _self = this;

			setTimeout(function() {
				_self.$wrapper.removeClass( 'loading-overlay-showing' );
				
				if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
					_self.$wrapper.css({ position: '' });
				}

				$(window).trigger('loading.overlay.ready');
			}, _self.options.hideDelay);
		},

		matchProperties: function() {
			var i,
				l,
				properties;

			properties = [
				'backgroundColor',
				'borderRadius'
			];

			l = properties.length;

			for( i = 0; i < l; i++ ) {
				var obj = {};
				obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

				$.extend( this.options.css, obj );
			}
		},

		getLoaderClass: function( backgroundColor ) {
			if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
				return 'black';
			}

			var hexColor,
				r,
				g,
				b,
				yiq;

			var colorToHex = function( color ){
				var hex,
					rgb;

				if( color.indexOf('#') >- 1 ){
					hex = color.replace('#', '');
				} else {
					rgb = color.match(/\d+/g);
					hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
				}

				if ( hex.length === 3 ) {
					hex = hex + hex;
				}

				return hex;
			};

			hexColor = colorToHex( backgroundColor );

			r = parseInt( hexColor.substr( 0, 2), 16 );
			g = parseInt( hexColor.substr( 2, 2), 16 );
			b = parseInt( hexColor.substr( 4, 2), 16 );
			yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

			return ( yiq >= 128 ) ? 'black' : 'white';
		}

	};

	// expose to scope
	$.extend(theme, {
		LoadingOverlay: LoadingOverlay
	});

	// expose as a jquery plugin
	$.fn.loadingOverlay = function( opts ) {
		return this.each(function() {
			var $this = $( this );

			var loadingOverlay = $this.data( 'loadingOverlay' );
			if ( loadingOverlay ) {
				return loadingOverlay;
			} else {
				var options = opts || $this.data( 'loading-overlay-options' ) || {};
				return new LoadingOverlay( $this, options );
			}
		});
	}

	// auto init
	$('[data-loading-overlay]').loadingOverlay();

}).apply(this, [window.theme, jQuery]);

// Masonry
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__masonry';

	var PluginMasonry = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMasonry.defaults = {

	};

	PluginMasonry.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			var self = this,
				$window = $(window);

			self.$loader = false;

			if (self.options.wrapper.parents('.masonry-loader').get(0)) {
				self.$loader = self.options.wrapper.parents('.masonry-loader');
				self.createLoader();
			}

			self.options.wrapper.one('layoutComplete', function(event, laidOutItems) {
				self.removeLoader();
			});

			self.options.wrapper.waitForImages(function() {
				self.options.wrapper.isotope(self.options);	
			});

			// IE10/11 fix
			if( $('html').hasClass('ie10') || $('html').hasClass('ie11') ) {
				var padding = parseInt( self.options.wrapper.children().css('padding-left') ) + parseInt( self.options.wrapper.children().css('padding-right') );
			}

			$(window).on('resize', function() {
				setTimeout(function() {
					self.options.wrapper.isotope('layout');
				}, 300);
			});

			setTimeout(function() {
				self.removeLoader();
			}, 3000);

			return this;
		},

		createLoader: function() {
			var self = this;

			var loaderTemplate = [
				'<div class="bounce-loader">',
					'<div class="bounce1"></div>',
					'<div class="bounce2"></div>',
					'<div class="bounce3"></div>',
				'</div>'
			].join('');

			self.$loader.append(loaderTemplate);

			return this;
		},

		removeLoader: function() {

			var self = this;

			if (self.$loader) {

				self.$loader.removeClass('masonry-loader-showing');

				setTimeout(function() {
					self.$loader.addClass('masonry-loader-loaded');
				}, 300);

			}

		}
	};

	// expose to scope
	$.extend(theme, {
		PluginMasonry: PluginMasonry
	});

	// jquery plugin
	$.fn.themePluginMasonry = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginMasonry($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Match Height
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__matchHeight';

	var PluginMatchHeight = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMatchHeight.defaults = {
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	};

	PluginMatchHeight.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginMatchHeight.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.matchHeight))) {
				return this;
			}

			var self = this;

			self.options.wrapper.matchHeight(self.options);

			return this;
		}

	};

	// expose to scope
	$.extend(theme, {
		PluginMatchHeight: PluginMatchHeight
	});

	// jquery plugin
	$.fn.themePluginMatchHeight = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginMatchHeight($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Parallax
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__parallax';

	var PluginParallax = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginParallax.defaults = {
		speed: 1.5,
		horizontalPosition: '50%',
		offset: 0,
		parallaxHeight: '180%'
	};

	PluginParallax.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginParallax.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$window = $(window),
				offset,
				yPos,
				bgpos,
				background;

			// Create Parallax Element
			background = $('<div class="parallax-background"></div>');

			// Set Style for Parallax Element
			background.css({
				'background-image' : 'url(' + self.options.wrapper.data('image-src') + ')',
				'background-size' : 'cover',
				'position' : 'absolute',
				'top' : 0,
				'left' : 0,
				'width' : '100%',
				'height' : self.options.parallaxHeight
			});

			// Add Parallax Element on DOM
			self.options.wrapper.prepend(background);

			// Set Overlfow Hidden and Position Relative to Parallax Wrapper
			self.options.wrapper.css({
				'position' : 'relative',
				'overflow' : 'hidden'
			});

			// Parallax Effect on Scroll & Resize
			var parallaxEffectOnScrolResize = function() {
				$window.on('scroll resize', function() {
					offset  = self.options.wrapper.offset();
					yPos    = -($window.scrollTop() - (offset.top - 100)) / ((self.options.speed + 2 ));
					plxPos  = (yPos < 0) ? Math.abs(yPos) : -Math.abs(yPos);
					background.css({
						'transform' : 'translate3d(0, '+ ( (plxPos - 50) + (self.options.offset) ) +'px, 0)',
						'background-position-x' : self.options.horizontalPosition
					});
				});

				$window.trigger('scroll');
			}

			if (!$.browser.mobile) {
				parallaxEffectOnScrolResize();
			} else {
				if( self.options.enableOnMobile == true ) {
					parallaxEffectOnScrolResize();
				} else {
					self.options.wrapper.addClass('parallax-disabled');
				}
			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginParallax: PluginParallax
	});

	// jquery plugin
	$.fn.themePluginParallax = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginParallax($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Progress Bar
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__progressBar';

	var PluginProgressBar = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginProgressBar.defaults = {
		accX: 0,
		accY: -50,
		delay: 1
	};

	PluginProgressBar.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.appear))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				delay = 1;

			$el.appear(function() {

				delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

				$el.addClass($el.attr('data-appear-animation'));

				setTimeout(function() {

					$el.animate({
						width: $el.attr('data-appear-progress-animation')
					}, 1500, 'easeOutQuad', function() {
						$el.find('.progress-bar-tooltip').animate({
							opacity: 1
						}, 500, 'easeOutQuad');
					});

				}, delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginProgressBar: PluginProgressBar
	});

	// jquery plugin
	$.fn.themePluginProgressBar = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginProgressBar($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Revolution Slider
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__revolution';

	var PluginRevolutionSlider = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginRevolutionSlider.defaults = {
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 9000,
		gridwidth: 1170,
		gridheight: 500,
		spinner: 'spinner3',
		disableProgressBar: 'on',
		parallax: {
			type: 'off',
			bgparallax: 'off'
		},
		navigation: {
			keyboardNavigation: 'off',
			keyboard_direction: 'horizontal',
			mouseScrollNavigation: 'off',
			onHoverStop: 'off',
			touch: {
				touchenabled: 'on',
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: 'horizontal',
				drag_block_vertical: false
			},
			arrows: {
				enable: true,
				hide_onmobile: false,
				hide_under: 0,
				hide_onleave: true,
				hide_delay: 200,
				hide_delay_mobile: 1200,
				left: {
					h_align: 'left',
					v_align: 'center',
					h_offset: 30,
					v_offset: 0
				},
				right: {
					h_align: 'right',
					v_align: 'center',
					h_offset: 30,
					v_offset: 0
				}
			}
		},

		/* ADDONS */
	    addOnTypewriter: {
			enable: false
		},
		addOnWhiteboard: {
			enable: false,

		},
	    whiteboard: {
	        movehand: {
	            src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/hand_point_right.png',
	            width: 400,
	            height: 1000,
	            handtype: 'right',
	            transform: {
	                transformX: 50,
	                transformY: 50
	            },
	            jittering: {
	                distance: '80',
	                distance_horizontal: '100',
	                repeat: '5',
	                offset: '10',
	                offset_horizontal: '0'
	            },
	            rotation: {
	                angle: '10',
	                repeat: '3'
	            }
	        },
	        writehand: {
	            src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/write_right_angle.png',
	            width: 572,
	            height: 691,
	            handtype: 'right',
	            transform: {
	                transformX: 50,
	                transformY: 50
	            },
	            jittering: {
	                distance: '80',
	                distance_horizontal: '100',
	                repeat: '5',
	                offset: '10',
	                offset_horizontal: '0'
	            },
	            rotation:{
	                angle: '10',
	                repeat: '3'
	            }
	        }
	    },
	    addOnParticles: {
	    	enable: false
	    },
	    particles: {
			startSlide: "first", 
			endSlide: "last", 
			zIndex: "1",
			particles: {
				number: {value: 80}, color: {value: "#ffffff"},
				shape: {
					type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
					image: {src: ""}
				},
				opacity: {value: 0.5, random: true, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
				size: {value: 2, random: false, min: 30, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
				line_linked: {enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
				move: {enable: true, speed: 6, direction: "none", random: true, min_speed: 6, straight: false, out_mode: "out"}
			},
			interactivity: {
				events: {onhover: {enable: false, mode: "repulse"}, onclick: {enable: false, mode: "repulse"}},
				modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.4}, repulse: {distance: 200}}
			}
		},
		addOnCountdown: {
			enable: false,
			targetdate: new Date().getTime() + 864000000, // http://www.freeformatter.com/epoch-timestamp-to-date-converter.html
			slidechanges: [{days: 0, hours: 0, minutes: 0, seconds: 0, slide: 2}]
		},
		addOnSlicey: {
			enable: false
		},
		addOnFilmstrip: {
			enable: false
		},
		addOnBeforeAfter : {
			enable: false,
			options: {
				cursor: "move",
			    carousel: false,
			    arrowStyles: {
			        leftIcon: "fa-icon-caret-left",
			        rightIcon: "fa-icon-caret-right",
			        topIcon: "fa-icon-caret-up",
			        bottomIcon: "fa-icon-caret-down",
			        size: "35",
			        color: "#ffffff",
			        spacing: "10",
			        bgColor: "transparent",
			        padding: "0",
			        borderRadius: "0"
			    },
			    dividerStyles: {
			        width: "1",
			        color: "rgba(255, 255, 255, 0.5)"
			    }
			}
		},
		addOnPanorama: {
			enable: false
		},
		addOnRevealer: {
			enable: false,
		},
		revealer: {
			direction: "open_horizontal",
			color: "#ffffff",
			duration: "1500",
			delay: "0",
			easing: "Power2.easeInOut",
			overlay_enabled: true,
			overlay_color: "#000000",
			overlay_duration: "1500",
			overlay_delay: "0",
			overlay_easing: "Power2.easeInOut",
			spinner: "1",
			spinnerColor: "#006dd2",
			spinnerHtml: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>"
		},
		addOnDuotone: {
			enable: false
		},
		addOnBubblemorph: {
			enable: false
		},
		addOnDistortion: {
			enable: false
		}
		
	};

	PluginRevolutionSlider.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.revolution))) {
				return this;
			}

			// Single Slider Class
			if(this.options.wrapper.find('> ul > li').length == 1) {
				this.options.wrapper.addClass('slider-single-slide');

				// Remove Bullets
				// this.options.navigation.bullets.enable = false;
				$.extend(this.options.navigation, {
					bullets: {
						enable: false
					}
				});

			}

			// Full Screen Class
			if(this.options.sliderLayout == 'fullscreen') {
				this.options.wrapper.closest('.slider-container').addClass('fullscreen-slider');
			}
			
			// Initialize Revolution Slider
			this.options.wrapper.revolution(this.options);

			// Addon Init - Typewriter
			if(this.options.addOnTypewriter.enable) {
				RsTypewriterAddOn($, this.options.wrapper);
			}

			// Addon Init - Whiteboard
			if(this.options.addOnWhiteboard.enable) {
				this.options.wrapper.rsWhiteBoard();
			}

			// Addon Init - Particles
			if(this.options.addOnParticles.enable) {
				RsParticlesAddOn(this.options.wrapper);
			}

			// Addon Init - Countdown
			if(this.options.addOnCountdown.enable) {
				tp_countdown(this.options.wrapper, this.options.addOnCountdown.targetdate, this.options.addOnCountdown.slidechanges);
			}

			// Addon Init - Slicey
			if(this.options.addOnSlicey.enable) {
				this.options.wrapper.revSliderSlicey();
			}

			// Addon Init - Filmstrip
			if(this.options.addOnFilmstrip.enable) {
				RsFilmstripAddOn($, this.options.wrapper, '../vendor/rs-plugin/revolution-addons/filmstrip/', false);
			}

			// Addon Init - Before After
			if(this.options.addOnBeforeAfter.enable) {
				RevSliderBeforeAfter($, this.options.wrapper, this.options.addOnBeforeAfter.options);
			}

			// Addon Init - Panorama
			if(this.options.addOnPanorama.enable) {
				RsAddonPanorama($, this.options.wrapper);
			}

			// Addon Init - Revealer
			if(this.options.addOnRevealer.enable) {
				RsRevealerAddOn($, this.options.wrapper, this.options.revealer.spinnerHtml);
			}

			// Addon Init - Duotone
			if(this.options.addOnDuotone.enable) {
				RsAddonDuotone($, this.options.wrapper, true, "cubic-bezier(0.645, 0.045, 0.355, 1.000)", "1000");
			}

			// Addon Init - Bubblemorph
			if(this.options.addOnBubblemorph.enable) {
				BubbleMorphAddOn($, this.options.wrapper, false);
			}

			// Addon Init - Distortion
			if(this.options.addOnDistortion.enable) {
				RsLiquideffectAddOn($, this.options.wrapper);
			}

			return this;
		},

		events: function() {

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginRevolutionSlider: PluginRevolutionSlider
	});

	// jquery plugin
	$.fn.themePluginRevolutionSlider = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginRevolutionSlider($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function(theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginScrollToTop: {

			defaults: {
				wrapper: $('body'),
				offset: 150,
				buttonClass: 'scroll-to-top',
				iconClass: 'fas fa-chevron-up',
				delay: 1000,
				visibleMobile: false,
				label: false,
				easing: 'easeOutBack'
			},

			initialize: function(opts) {
				initialized = true;

				// Don't initialize if the page has Section Scroll
				if( $('body[data-plugin-section-scroll]').get(0) ) {
					return;
				}

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				var self = this,
					$el;

				// Base HTML Markup
				$el = $('<a />')
					.addClass(self.options.buttonClass)
					.attr({
						'href': '#',
					})
					.append(
						$('<i />')
						.addClass(self.options.iconClass)
				);

				// Visible Mobile
				if (!self.options.visibleMobile) {
					$el.addClass('hidden-mobile');
				}

				// Label
				if (self.options.label) {
					$el.append(
						$('<span />').html(self.options.label)
					);
				}

				this.options.wrapper.append($el);

				this.$el = $el;

				return this;
			},

			events: function() {
				var self = this,
					_isScrolling = false;

				// Click Element Action
				self.$el.on('click', function(e) {
					e.preventDefault();
					$('body, html').animate({
						scrollTop: 0
					}, self.options.delay, self.options.easing);
					return false;
				});

				// Show/Hide Button on Window Scroll event.
				$(window).scroll(function() {

					if (!_isScrolling) {

						_isScrolling = true;

						if ($(window).scrollTop() > self.options.offset) {

							self.$el.stop(true, true).addClass('visible');
							_isScrolling = false;

						} else {

							self.$el.stop(true, true).removeClass('visible');
							_isScrolling = false;

						}

					}

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Scrollable
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__scrollable';

	var PluginScrollable = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginScrollable.updateModals = function() {
		PluginScrollable.updateBootstrapModal();
	};

	PluginScrollable.updateBootstrapModal = function() {
		var updateBoostrapModal;

		updateBoostrapModal = typeof $.fn.modal !== 'undefined';
		updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
		updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
		updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';

		if ( !updateBoostrapModal ) {
			return false;
		}

		var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;
		$.fn.modal.Constructor.prototype.enforceFocus = function() {
			originalFocus.apply( this );

			var $scrollable = this.$element.find('.scrollable');
			if ( $scrollable ) {
				if ( $.isFunction($.fn['themePluginScrollable'])  ) {
					$scrollable.themePluginScrollable();
				}

				if ( $.isFunction($.fn['nanoScroller']) ) {
					$scrollable.nanoScroller();
				}
			}
		};
	};

	PluginScrollable.defaults = {
		contentClass: 'scrollable-content',
		paneClass: 'scrollable-pane',
		sliderClass: 'scrollable-slider',
		alwaysVisible: true,
		preventPageScrolling: true
	};

	PluginScrollable.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			this.options.wrapper.nanoScroller(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginScrollable: PluginScrollable
	});

	// jquery plugin
	$.fn.themePluginScrollable = function(opts) {
		return this.each(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginScrollable($this, opts);
			}

		});
	};

	$(function() {
		PluginScrollable.updateModals();
	});

}).apply(this, [window.theme, jQuery]);

// Section Scroll
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__sectionScroll';

	var PluginSectionScroll = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSectionScroll.defaults = {
		targetClass: '.section',
		dotsNav: true,
		changeHeaderLogo: true,
		headerLogoDark: 'img/logo-default-slim.png',
		headerLogoLight: 'img/logo-default-slim-dark.png'
	};

	PluginSectionScroll.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSectionScroll.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper;

			// Check type of header and change the target for header (by change header color purpose)
			if( $('html').hasClass('side-header-overlay-full-screen') ) {
				self.$header = $('.sticky-wrapper');
			} else {
				self.$header = $('#header');
			}

			// Turn the section full height or not depeding on the content size
			self.updateSectionsHeight();

			// Wrap all sections in a section wrapper
			$( this.options.targetClass ).wrap('<div class="section-wrapper"></div>');

			// Set the section wrapper height
	  		$('.section-wrapper').each(function(){
	  			$(this).height( $(this).find('.section-scroll').outerHeight() );
	  		});

	  		// Add active class to the first section on page load
	  		$('.section-wrapper').first().addClass('active');
			
	        var	flag = false,
	            scrollableFlag = false,
	        	touchDirection = '',
	        	touchstartY = 0,
	        	touchendY = 0;

	        $(window).on('touchstart', function(event) {
			    touchstartY = event.changedTouches[0].screenY;
			});

	        var wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	        if( $(window).width() < 992 && $('html').hasClass('touch') ) {
	        	wheelEvent = 'onwheel' in document ? 'wheel touchend' : document.onmousewheel !== undefined ? 'mousewheel touchend' : 'DOMMouseScroll touchend';
	        }

	        $(window).on(wheelEvent, function(e){
	        	if( $(window).width() < 992 && $('html').hasClass('touch') ) {
		        	if( $(e.target).closest('.section-scroll-dots-navigation').get(0) || $(e.target).closest('.header-body').get(0) || $(e.target).closest('.owl-carousel').get(0) ) {
		        		return;
		        	}
		        }

		        // Side Header Overlay Full Screen
		        if( $('html.side-header-overlay-full-screen.side-header-hide').get(0) ) {
		        	return;
		        }

	        	var wheelDirection = e.originalEvent.wheelDelta == undefined ? e.originalEvent.deltaY > 0 : e.originalEvent.wheelDelta < 0;
	        	if( $(window).width() < 992 && $('html').hasClass('touch') ) {
		        	touchendY = event.changedTouches[0].screenY;
	        		
				    if( touchendY <= touchstartY ) {
				    	touchDirection = 'up';
				    }

				    if( touchendY >= touchstartY ) {
				    	touchDirection = 'down';
				    }

				    if( touchendY == touchstartY ) {
				    	return;
				    }
	        	}

	        	var $currentSection = $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll'),
            		$nextSection = self.getNextSection(wheelDirection, touchDirection),
            		nextSectionOffsetTop;

            	// If is the last section, then change the offsetTop value
            	if( self.getCurrentIndex() == $('.section-wrapper').length - 1 ) {
            		nextSectionOffsetTop = $(document).height();
            	} else {
            		nextSectionOffsetTop = $nextSection.offset().top;
            	}

			    if( $(window).width() < 992 && $('html').hasClass('touch') ) {
				    setTimeout(function(){
					    if( $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll').hasClass('section-scroll-scrollable') ) {
					    	$('html').removeClass('overflow-hidden');
					    } else {
					    	$('html').addClass('overflow-hidden');
					    }
				    }, 1200);
				}

	        	// For non full height sections
	        	if( $currentSection.hasClass('section-scroll-scrollable') ) {
	        		if( !flag && !scrollableFlag ) {

		        		// Scroll Direction
		        		if(wheelDirection || touchDirection == 'up') {
		        			if( ( $(window).scrollTop() + $(window).height() ) >= nextSectionOffsetTop ) {
		        				flag = true;
								setTimeout(function(){
									$(window).trigger('section.scroll.change.header.color');

					            	setTimeout(function(){
										flag = false;
									}, 500);
								}, 1000);

		        				if( self.getCurrentIndex() == ( $('.section-wrapper').length - 1 )  ) {
						    		return false;
						    	}

		        				// Move to the next section
		        				self.moveTo( $currentSection.offset().top + $currentSection.outerHeight() );

		        				// Change Section Active Class
					   			self.changeSectionActiveState( $nextSection );

					   			self.$header.css({
							    	opacity: 0,
							    	transition: 'ease opacity 500ms'
							    });
					        }

			        		if( !$('html').hasClass('touch') ) {
				        		for( var i = 1; i < 100; i++ ) {
					        		$('body, html').scrollTop( $(window).scrollTop() + 1 );

					        		if( ( $(window).scrollTop() + $(window).height() ) >= nextSectionOffsetTop ) {
					        			scrollableFlag = true;
										setTimeout(function(){
											$(window).trigger('section.scroll.change.header.color');
							            	scrollableFlag = false;
										}, 500);
					        			break;
					        		}
				        		}
				        	}
					    } else {
					    	if( $(window).scrollTop() <= $currentSection.offset().top ) {
					    		flag = true;
								setTimeout(function(){
									$(window).trigger('section.scroll.change.header.color');

					            	setTimeout(function(){
										flag = false;
									}, 500);
								}, 1000);

					    		if( self.getCurrentIndex() == 0  ) {
						    		return false;
						    	}

					   			// Move to the next section
		        				self.moveTo( $currentSection.offset().top - $(window).height() );

		        				// Change Section Active Class
					   			self.changeSectionActiveState( $nextSection );

					   			self.$header.css({
							    	opacity: 0,
							    	transition: 'ease opacity 500ms'
							    });
					        }

					    	if( !$('html').hasClass('touch') ) {
				        		for( var i = 1; i < 100; i++ ) {
					        		$('body, html').scrollTop( $(window).scrollTop() - 1 );

					        		if( $(window).scrollTop() <= $currentSection.offset().top ) {
					        			scrollableFlag = true;
										setTimeout(function(){
											$(window).trigger('section.scroll.change.header.color');
							            	scrollableFlag = false;
										}, 500);
					        			break;
					        		}
				        		}
				        	}
					    }

			   			// Change Dots Active Class
				        self.changeDotsActiveState();

		        		return;

		        	}
	        	}

	        	// For full height sections
	        	if( !flag && !scrollableFlag ) {
				    if(wheelDirection || touchDirection == 'up') {
				    	if( self.getCurrentIndex() == ( $('.section-wrapper').length - 1 )  ) {
				    		return false;
				    	}

				   		// Change Section Active Class
			   			self.changeSectionActiveState( $nextSection );

				   		setTimeout(function(){
				   			// Move to the next section
	        				self.moveTo( $nextSection.offset().top );

				   		}, 150);
				    } else {
				    	if( self.getCurrentIndex() == 0  ) {
				    		return false;
				    	}

				   		// Change Section Active Class
			   			self.changeSectionActiveState( $nextSection );

				   		if( $nextSection.height() > $(window).height() ) {
				   			// Move to the next section
	        				self.moveTo( $currentSection.offset().top - $(window).height() );
				   		} else {
					        setTimeout(function(){
					   			// Move to the next section
		        				self.moveTo( $nextSection.offset().top );

					   		}, 150);
				   		}
				    }

				    // Change Dots Active Class
			        self.changeDotsActiveState();

				    self.$header.css({
				    	opacity: 0,
				    	transition: 'ease opacity 500ms'
				    });

				    // Style next section
	            	$nextSection.css({
	            		position: 'relative',
	            		opacity: 1,
	            		'z-index': 1,
	            		transform: 'translate3d(0,0,0) scale(1)'
	            	});

	            	// Style previous section
	            	$currentSection.css({
	            		position: 'fixed',
	            		width: '100%',
	            		top: 0,
	            		left: 0,
	            		opacity: 0,
	            		'z-index': 0,
	            		transform: 'translate3d(0,0,-10px) scale(0.7)',
	            		transition: 'ease transform 600ms, ease opacity 600ms',
	            	});

					setTimeout(function(){
						$currentSection.css({
		            		position: 'relative',
		            		opacity: 1,
		            		transform: 'translate3d(0,0,-10px) scale(1)'
		            	});

						$(window).trigger('section.scroll.change.header.color');

		            	setTimeout(function(){
							flag = false;
						}, 500);
					}, 1000);

					flag = true;

				}

				return;
	        });

	        // Dots Navigation
	        if( this.options.dotsNav ) {
	        	self.dotsNavigation();
	        }

	        // First Load
	        setTimeout(function(){
		        if( $(window.location.hash).get(0) ) {
		        	self.moveTo( $(window.location.hash).parent().offset().top );

		        	self.changeSectionActiveState( $(window.location.hash) );

		        	// Change Dots Active Class
			        self.changeDotsActiveState();

		        	self.updateHash( true );
		        } else {
		        	var hash  = window.location.hash,
		        		index = hash.replace('#','');

		        	if( !hash ) {
		        		index = 1;
		        	}

		        	self.moveTo( $('.section-wrapper').eq( index - 1 ).offset().top );

		        	self.changeSectionActiveState( $('.section-wrapper').eq( index - 1 ).find('.section-scroll') );

		        	// Change Dots Active Class
			        self.changeDotsActiveState();

		        	self.updateHash( true );
		        }

				$(window).trigger('section.scroll.ready');
			}, 500);

			return this;
		},

		updateSectionsHeight: function() {
			var self = this;

			$('.section-scroll').css({ height: '' });

			$('.section-scroll').each(function(){
				if( $(this).outerHeight() < ( $(window).height() + 3 ) ) {
					$(this).css({ height: '100vh' });		
				} else {
					$(this).addClass('section-scroll-scrollable');
				}
			});

			// Set the section wrapper height
	  		$('.section-wrapper').each(function(){
	  			$(this).height( $(this).find('.section-scroll').outerHeight() );
	  		});

			return this;
		},

		updateHash: function( first_load ){
			var self = this;

			if( !window.location.hash ) {
				window.location.hash = 1;
			} else {
				if(!first_load) {
					var $section = $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll'),
						section_id = $section.attr('id') ? $section.attr('id') : $section.parent().index() + 1;

					window.location.hash = section_id;
				}
			}

			return this;
		},

		getCurrentIndex: function() {
			var self = this,
				currentIndex = 0;

			currentIndex = $('.section-wrapper.active').index();

			return currentIndex;
		},

		moveTo: function( $scrollTopValue, first_load ) {
			var self = this;

			$('body, html').animate({
   				scrollTop: $scrollTopValue
   			}, 1000, 'easeOutQuint');

   			setTimeout(function(){
	   			self.updateHash();
   			}, 500);

			return this;
		},

		getNextSection: function(wheelDirection, touchDirection) {
			var self = this,
				$nextSection = '';

			// Scroll Direction
        	if(wheelDirection || touchDirection == 'up') {
				$nextSection = $('.section-wrapper').eq( self.getCurrentIndex() + 1 ).find('.section-scroll');
        	} else {
        		$nextSection = $('.section-wrapper').eq( self.getCurrentIndex() - 1 ).find('.section-scroll');
        	}

			return $nextSection;
		},

		changeSectionActiveState: function( $nextSection ) {
			var self = this;

			$('.section-wrapper').removeClass('active');
	   		$nextSection.parent().addClass('active');

			return this;
		},

		changeDotsActiveState: function() {
			var self = this;

			$('.section-scroll-dots-navigation > ul > li').removeClass('active');
			$('.section-scroll-dots-navigation > ul > li').eq( self.getCurrentIndex() ).addClass('active');

			return this;
		},

		dotsNavigation: function() {
			var self = this;

			var dotsNav = $('<div class="section-scroll-dots-navigation"><ul class="list list-unstyled"></ul></div>'),
        		currentSectionIndex = self.getCurrentIndex();

        	if( self.options.dotsClass ) {
        		dotsNav.addClass( self.options.dotsClass );
        	}

        	for( var i = 0; i < $('.section-scroll').length; i++ ) {
        		var title = $('.section-wrapper').eq( i ).find('.section-scroll').data('section-scroll-title');

        		dotsNav.find('> ul').append( '<li'+ ( ( currentSectionIndex == i ) ? ' class="active"' : '' ) +'><a href="#'+ i +'" data-nav-id="'+ i +'"><span>'+ title +'</span></a></li>' );
        	}

        	$('.body').append( dotsNav );

        	dotsNav.find('a[data-nav-id]').on('click touchstart', function(e){
        		e.preventDefault();
        		var $this = $(this);

        		$('.section-scroll').css({
        			opacity: 0,
        			transition: 'ease opacity 300ms'
        		});

        		self.$header.css({
			    	opacity: 0,
			    	transition: 'ease opacity 500ms'
			    });

        		setTimeout(function(){
	        		self.moveTo( $('.section-wrapper').eq( $this.data('nav-id') ).offset().top )

		   			$('.section-wrapper').removeClass('active');
			   		$('.section-wrapper').eq( $this.data('nav-id') ).addClass('active');

	        		$('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll').css({
	        			opacity: 1
	        		});

	        		setTimeout(function(){
		        		$('.section-scroll').css({ opacity: 1 });

		        		$(window).trigger('section.scroll.change.header.color');
	        		}, 500);

	        		self.changeDotsActiveState();
        		}, 500);
        	});

			return this;
		},

		events: function() {
			var self = this;

			$(window).on('section.scroll.ready', function(){
				$(window).scrollTop(0);
			});

			$(window).on('section.scroll.change.header.color', function(){
		    	var headerColor = $('.section-wrapper').eq( self.getCurrentIndex() ).find('.section-scroll').data('section-scroll-header-color');
		    	
		    	$('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
		    	$('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
		    	$('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor);

		    	// Change Logo
		    	if( self.options.changeHeaderLogo && headerColor != undefined ) {
			    	if( headerColor == 'light' ) {
			    		$('#header .header-logo img').attr('src', self.options.headerLogoLight);
			    	} else if( headerColor == 'dark' ) {
			    		$('#header .header-logo img').attr('src', self.options.headerLogoDark);
			    	}
		    	}

		    	self.$header.css({
		    		opacity: 1
		    	});
		    });

			$(document).ready(function(){
			    $(window).afterResize(function(){
			    	self.updateSectionsHeight();
			    });
			});

		    return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginSectionScroll: PluginSectionScroll
	});

	// jquery plugin
	$.fn.themePluginSectionScroll = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSectionScroll($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Sort
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__sort';

	var PluginSort = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSort.defaults = {
		useHash: true,
		itemSelector: '.isotope-item',
		layoutMode: 'masonry',
		filter: '*',
		hiddenStyle: {
			opacity: 0
		},
		visibleStyle: {
			opacity: 1
		},
		stagger: 30,
		isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
	};

	PluginSort.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSort.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			var self = this,
				$source = this.options.wrapper,
				$destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]'),
				$window = $(window);

			if ($destination.get(0)) {

				self.$source = $source;
				self.$destination = $destination;
				self.$loader = false;

				self.setParagraphHeight($destination);

				if (self.$destination.parents('.sort-destination-loader').get(0)) {
					self.$loader = self.$destination.parents('.sort-destination-loader');
					self.createLoader();
				}

				$destination.attr('data-filter', '*');

				$destination.one('layoutComplete', function(event, laidOutItems) {
					self.removeLoader();
				});

				// IE10/11 fix
				if( $('html').hasClass('ie10') || $('html').hasClass('ie11') ) {
					var padding = parseInt( self.options.wrapper.children().css('padding-left') ) + parseInt( self.options.wrapper.children().css('padding-right') );
				}

				$destination.waitForImages(function() {
					$destination.isotope(self.options);
					self.events();
				});


				setTimeout(function() {
					self.removeLoader();
				}, 3000);

			}

			return this;
		},

		events: function() {
			var self = this,
				filter = null,
				$window = $(window);

			self.$source.find('a').click(function(e) {
				e.preventDefault();

				filter = $(this).parent().data('option-value');

				self.setFilter(filter);

				if (e.originalEvent) {
					self.$source.trigger('filtered');
				}

				return this;
			});

			self.$destination.trigger('filtered');
			self.$source.trigger('filtered');

			if (self.options.useHash) {
				self.hashEvents();
			}

			$window.on('resize', function() {
				setTimeout(function() {
					self.$destination.isotope('layout');
				}, 300);
			});

			setTimeout(function() {
				$window.trigger('resize');
			}, 300);

			return this;
		},

		setFilter: function(filter) {
			var self = this,
				page = false,
				currentFilter = filter;

			self.$source.find('.active').removeClass('active');
			self.$source.find('li[data-option-value="' + filter + '"], li[data-option-value="' + filter + '"] > a').addClass('active');

			self.options.filter = currentFilter;

			if (self.$destination.attr('data-current-page')) {
				currentFilter = currentFilter + '[data-page-rel=' + self.$destination.attr('data-current-page') + ']';
			}

			self.$destination.attr('data-filter', filter).isotope({
				filter: currentFilter
			}).one('arrangeComplete', function( event, filteredItems ) {
				
				if (self.options.useHash) {
					if (window.location.hash != '' || self.options.filter.replace('.', '') != '*') {
						window.location.hash = self.options.filter.replace('.', '');
					}
				}
				
				$(window).trigger('scroll');

			}).trigger('filtered');

			return this;
		},

		hashEvents: function() {
			var self = this,
				hash = null,
				hashFilter = null,
				initHashFilter = '.' + location.hash.replace('#', '');

			if (initHashFilter != '.' && initHashFilter != '.*') {
				self.setFilter(initHashFilter);
			}

			$(window).on('hashchange', function(e) {

				hashFilter = '.' + location.hash.replace('#', '');
				hash = (hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter);

				self.setFilter(hash);

			});

			return this;
		},

		setParagraphHeight: function() {
			var self = this,
				minParagraphHeight = 0,
				paragraphs = $('span.thumb-info-caption p', self.$destination);

			paragraphs.each(function() {
				if ($(this).height() > minParagraphHeight) {
					minParagraphHeight = ($(this).height() + 10);
				}
			});

			paragraphs.height(minParagraphHeight);

			return this;
		},

		createLoader: function() {
			var self = this;

			var loaderTemplate = [
				'<div class="bounce-loader">',
					'<div class="bounce1"></div>',
					'<div class="bounce2"></div>',
					'<div class="bounce3"></div>',
				'</div>'
			].join('');

			self.$loader.append(loaderTemplate);

			return this;
		},

		removeLoader: function() {

			var self = this;

			if (self.$loader) {

				self.$loader.removeClass('sort-destination-loader-showing');

				setTimeout(function() {
					self.$loader.addClass('sort-destination-loader-loaded');
				}, 300);

			}

		}

	};

	// expose to scope
	$.extend(theme, {
		PluginSort: PluginSort
	});

	// jquery plugin
	$.fn.themePluginSort = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSort($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Star Rating
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__starrating';

	var PluginStarRating = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginStarRating.defaults = {
		theme: 'krajee-fas',
		color: 'primary',
		showClear: false,
		showCaption: false
	};

	PluginStarRating.prototype = {
		initialize: function($el, opts) {
			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginStarRating.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {

			if (!($.isFunction($.fn.rating))) {
				return this;
			}

			var self = this;

			self.options.wrapper
				.rating(self.options);

			self.options.wrapper.parents('.rating-container')
				.addClass('rating-' + self.options.color);

			return this;

		}
	};

	// expose to scope
	$.extend(theme, {
		PluginStarRating: PluginStarRating
	});

	// jquery plugin
	$.fn.themePluginStarRating = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginStarRating($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Sticky
(function(theme, $) {
	
	theme = theme || {};
	
	var instanceName = '__sticky';

	var PluginSticky = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSticky.defaults = {
		minWidth: 991,
		activeClass: 'sticky-active'
	};

	PluginSticky.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSticky.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.pin))) {
				return this;
			}

			var self = this,
				$window = $(window);
			
			self.options.wrapper.pin(self.options);

			if( self.options.wrapper.hasClass('sticky-wrapper-transparent') ) {
				self.options.wrapper.parent().addClass('position-absolute w-100');
			}

			$window.afterResize(function() {
				self.options.wrapper.removeAttr('style').removeData('pin');
				self.options.wrapper.pin(self.options);
				$window.trigger('scroll');
			});

			// Change Logo Src
			if( self.options.wrapper.find('img').attr('data-change-src') ) {
				var $logo      = self.options.wrapper.find('img'),
					logoSrc    = $logo.attr('src'),
					logoNewSrc = $logo.attr('data-change-src');

				self.changeLogoSrc = function(activate) {
					if(activate) {
						$logo.attr('src', logoNewSrc);
					} else {
						$logo.attr('src', logoSrc);
					}
				}
			}
			
			return this;
		},

		events: function() {
			var self = this,
				$window = $(window),
				$logo = self.options.wrapper.find('img'),
				sticky_activate_flag = true,
				sticky_deactivate_flag = false,
				class_to_check = ( self.options.wrapper.hasClass('sticky-wrapper-effect-1') ) ? 'sticky-effect-active' : 'sticky-active';

			$window.on('scroll sticky.effect.active', function(){
				if( self.options.wrapper.hasClass( class_to_check ) ) {		
					if( sticky_activate_flag ) {			
						if( $logo.attr('data-change-src') ) {
							self.changeLogoSrc(true);
						}

						sticky_activate_flag = false;
						sticky_deactivate_flag = true;
					}
				} else {	
					if( sticky_deactivate_flag ) {				
						if( $logo.attr('data-change-src') ) {
							self.changeLogoSrc(false);
						}

						sticky_deactivate_flag = false;
						sticky_activate_flag = true;
					}
				}
			});

			var is_backing = false;
			if( self.options.stickyStartEffectAt ) {

				// First Load
				if( self.options.stickyStartEffectAt < $window.scrollTop() ) {
					self.options.wrapper.addClass('sticky-effect-active');

					$window.trigger('sticky.effect.active');
				}

				$window.on('scroll', function(){
					if( self.options.stickyStartEffectAt < $window.scrollTop() ) {	
						self.options.wrapper.addClass('sticky-effect-active');
						is_backing = true;

						$window.trigger('sticky.effect.active');
					} else {	
						if( is_backing ) {
							self.options.wrapper.find('.sticky-body').addClass('position-fixed');
							is_backing = false;
						}

						if( $window.scrollTop() == 0 ) {
							self.options.wrapper.find('.sticky-body').removeClass('position-fixed');
						}

						self.options.wrapper.removeClass('sticky-effect-active');
					}
				});
			}
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginSticky: PluginSticky
	});

	// jquery plugin
	$.fn.themePluginSticky = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSticky($this, opts);
			}
			
		});
	}

}).apply(this, [ window.theme, jQuery ]);

// Toggle
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__toggle';

	var PluginToggle = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginToggle.defaults = {
		duration: 350,
		isAccordion: false
	};

	PluginToggle.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$wrapper = this.options.wrapper,
				$items = $wrapper.find('> .toggle'),
				$el = null;

			$items.each(function() {
				$el = $(this);

				if ($el.hasClass('active')) {
					$el.find('> p').addClass('preview-active');
					$el.find('> .toggle-content').slideDown(self.options.duration);
				}

				self.events($el);
			});

			if (self.options.isAccordion) {
				self.options.duration = self.options.duration / 2;
			}

			return this;
		},

		events: function($el) {
			var self = this,
				previewParCurrentHeight = 0,
				previewParAnimateHeight = 0,
				toggleContent = null;

			$el.find('> label').click(function(e) {

				var $this = $(this),
					parentSection = $this.parent(),
					parentWrapper = $this.parents('.toggle'),
					previewPar = null,
					closeElement = null;

				if (self.options.isAccordion && typeof(e.originalEvent) != 'undefined') {
					closeElement = parentWrapper.find('.toggle.active > label');

					if (closeElement[0] == $this[0]) {
						return;
					}
				}

				parentSection.toggleClass('active');

				// Preview Paragraph
				if (parentSection.find('> p').get(0)) {

					previewPar = parentSection.find('> p');
					previewParCurrentHeight = previewPar.css('height');
					previewPar.css('height', 'auto');
					previewParAnimateHeight = previewPar.css('height');
					previewPar.css('height', previewParCurrentHeight);

				}

				// Content
				toggleContent = parentSection.find('> .toggle-content');

				if (parentSection.hasClass('active')) {

					$(previewPar).animate({
						height: previewParAnimateHeight
					}, self.options.duration, function() {
						$(this).addClass('preview-active');
					});

					toggleContent.slideDown(self.options.duration, function() {
						if (closeElement) {
							closeElement.trigger('click');
						}
					});

				} else {

					$(previewPar).animate({
						height: 0
					}, self.options.duration, function() {
						$(this).removeClass('preview-active');
					});

					toggleContent.slideUp(self.options.duration);

				}

			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginToggle: PluginToggle
	});

	// jquery plugin
	$.fn.themePluginToggle = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginToggle($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Tweets
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__tweets';

	var PluginTweets = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginTweets.defaults = {
		username: null,
		count: 2,
		URL: 'php/twitter-feed.php',
		iconColor: false
	};

	PluginTweets.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (this.options.username == null || this.options.username == '') {
				return this;
			}

			var self = this,
				$wrapper = this.options.wrapper;

			$.ajax({
				type: 'GET',
				data: {
					twitter_screen_name: self.options.username,
					tweets_to_display: self.options.count,
					icon_color: self.options.iconColor
				},
				url: self.options.URL,
			}).done(function(html) {
				$wrapper.html(html).find('a').attr('target','_blank');
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginTweets: PluginTweets
	});

	// jquery plugin
	$.fn.themePluginTweets = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginTweets($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Validation
(function(theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginValidation: {

			defaults: {
				formClass: 'needs-validation',
				validator: {
					highlight: function(element) {
						$(element)
							.addClass('is-invalid')
							.removeClass('is-valid')
							.parent()
							.removeClass('has-success')
							.addClass('has-danger');
					},
					success: function(label, element) {
						$(element)
							.removeClass('is-invalid')
							.addClass('is-valid')
							.parent()
							.removeClass('has-danger')
							.addClass('has-success')
							.find('label.error')
							.remove();
					},
					errorPlacement: function(error, element) {
						if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
							error.appendTo(element.parent().parent());
						} else {
							error.insertAfter(element);
						}
					}
				},
				validateCaptchaURL: 'php/contact-form-verify-captcha.php',
				refreshCaptchaURL: 'php/contact-form-refresh-captcha.php'
			},

			initialize: function(opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				var self = this;

				if (!($.isFunction($.validator))) {
					return this;
				}

				self.addMethods();
				self.setMessageGroups();

				$.validator.setDefaults(self.options.validator);

				$('.' + self.options.formClass).validate();

				return this;
			},

			addMethods: function() {
				var self = this;

				$.validator.addMethod('captcha', function(value, element, params) {
					var captchaValid = false;

					$.ajax({
						url: self.options.validateCaptchaURL,
						type: 'POST',
						async: false,
						dataType: 'json',
						data: {
							captcha: $.trim(value)
						},
						success: function(data) {
							if (data.response == 'success') {
								captchaValid = true;
							}
						}
					});

					if (captchaValid) {
						return true;
					}

				}, '');

				// Refresh Captcha
				$('#refreshCaptcha').on('click', function(e) {
					e.preventDefault();
					$.get(self.options.refreshCaptchaURL, function(url) {
						$('#captcha-image').attr('src', url);
					});					
				});

			},

			setMessageGroups: function() {

				$('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function() {
					var message = $(this).data('msg-required');
					$(this).find('input').attr('data-msg-required', message);
				});

			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Video Background
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__videobackground';

	var PluginVideoBackground = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginVideoBackground.defaults = {
		overlay: false,
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect'
	};

	PluginVideoBackground.prototype = {
		initialize: function($el, opts) {
			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
				path: this.$el.data('video-path'),
				wrapper: this.$el
			});

			return this;
		},

		build: function() {

			if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
				return this;
			}

			if (this.options.overlay) {

				var overlayClass = this.options.overlayClass;

				this.options.wrapper.prepend(
					$('<div />').addClass(overlayClass)
				);
			}

			this.options.wrapper
				.vide(this.options.path, this.options)
				.first().css('z-index', 0);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginVideoBackground: PluginVideoBackground
	});

	// jquery plugin
	$.fn.themePluginVideoBackground = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginVideoBackground($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Account
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Account: {

			defaults: {
				wrapper: $('#headerAccount')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			events: function() {
				var self = this;

				$(window).on('load', function(){
					$(document).ready(function(){
						setTimeout(function(){

							self.$wrapper.find('input').on('focus', function() {
								self.$wrapper.addClass('open');

								$(document).mouseup(function(e) {
									if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
										self.$wrapper.removeClass('open');
									}
								});
							});

						}, 1500);
					});
				});

				$('#headerSignUp').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
					self.$wrapper.find('.signup-form input:first').focus();
				});

				$('#headerSignIn').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});

				$('#headerRecover').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
					self.$wrapper.find('.recover-form input:first').focus();
				});

				$('#headerRecoverCancel').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Nav
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Nav: {

			defaults: {
				wrapper: $('#mainNav'),
				scrollDelay: 600,
				scrollAnimation: 'easeOutQuad'
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				var self = this,
					$html = $('html'),
					$header = $('#header'),
					$headerNavMain = $('#header .header-nav-main'),
					thumbInfoPreview;

				// Preview Thumbs
				self.$wrapper.find('a[data-thumb-preview]').each(function() {
					thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview')
											.append($('<span />').addClass('thumb-info-wrapper')
												.append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')
										   )
									   );

					$(this).append(thumbInfoPreview);
				});

				// Side Header / Side Header Hamburguer Sidebar (Reverse Dropdown)
				if($html.hasClass('side-header') || $html.hasClass('side-header-hamburguer-sidebar')) {
					
					// Side Header Right / Side Header Hamburguer Sidebar Right
					if($html.hasClass('side-header-right') || $html.hasClass('side-header-hamburguer-sidebar-right')) {
						if(!$html.hasClass('side-header-right-no-reverse')) {
							$header.find('.dropdown-submenu').addClass('dropdown-reverse');
						}
					}

				} else {
					
					// Reverse
					self.checkReverse = function() {
						self.$wrapper.find('.dropdown, .dropdown-submenu').removeClass('dropdown-reverse');

						self.$wrapper.find('.dropdown:not(.manual):not(.dropdown-mega), .dropdown-submenu:not(.manual)').each(function() {
							if(!$(this).find('.dropdown-menu').visible( false, true, 'horizontal' )  ) {
								$(this).addClass('dropdown-reverse');
							}
						});
					}

					self.checkReverse();

	 				$(window).on('resize', function() {
						self.checkReverse();
	 				});

				}

				// Clone Items
				if($headerNavMain.hasClass('header-nav-main-clone-items')) {

			    	$headerNavMain.find('nav > ul > li > a').each(function(){
				    	var parent = $(this).parent(),
				    		clone  = $(this).clone(),
				    		clone2 = $(this).clone(),
				    		wrapper = $('<span class="wrapper-items-cloned"></span>');

				    	// Config Classes
				    	$(this).addClass('item-original');
				    	clone2.addClass('item-two');

				    	// Insert on DOM
				    	parent.prepend(wrapper);
				    	wrapper.append(clone).append(clone2);
				    });

				}

				// Floating
				if($('#header.header-floating-icons').get(0) && $(window).width() > 991) {

					var menuFloatingAnim = {
						$menuFloating: $('#header.header-floating-icons .header-container > .header-row'),

						build: function() {
							var self = this;

							self.init();
						},
						init: function(){
							var self  = this,
								divisor = 0;

							$(window).scroll(function() {
							    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()),
							    	st = $(this).scrollTop();

								divisor = $(document).height() / $(window).height();

							    self.$menuFloating.find('.header-column > .header-row').css({
							    	transform : 'translateY( calc('+ scrollPercent +'vh - '+ st / divisor +'px) )' 
							    });
							});
						}
					}

					menuFloatingAnim.build();

				}

				// Slide
				if($('.header-nav-links-vertical-slide').get(0)) {
					var slideNavigation = {
						$mainNav: $('#mainNav'),
						$mainNavItem: $('#mainNav li'),

						build: function(){
							var self = this;

							self.menuNav();
						},
						menuNav: function(){
							var self = this;

							self.$mainNavItem.on('click', function(e){
								var currentMenuItem 	= $(this),
									currentMenu 		= $(this).parent(),
									nextMenu        	= $(this).find('ul').first(),
									prevMenu        	= $(this).closest('.next-menu'),
									isSubMenu       	= currentMenuItem.hasClass('dropdown') || currentMenuItem.hasClass('dropdown-submenu'),
									isBack          	= currentMenuItem.hasClass('back-button'),
									nextMenuHeightDiff  = ( ( nextMenu.find('> li').length * nextMenu.find('> li').outerHeight() ) - nextMenu.outerHeight() ),
									prevMenuHeightDiff  = ( ( prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() ) - prevMenu.outerHeight() );

								if( isSubMenu ) {
									currentMenu.addClass('next-menu');
									nextMenu.addClass('visible');
									currentMenu.css({
										overflow: 'visible',
										'overflow-y': 'visible'
									});
									
									if( nextMenuHeightDiff > 0 ) {
										nextMenu.css({
											overflow: 'hidden',
											'overflow-y': 'scroll'
										});
									}

									for( i = 0; i < nextMenu.find('> li').length; i++ ) {
										if( nextMenu.outerHeight() < ($('.header-row-side-header').outerHeight() - 100) ) {
											nextMenu.css({
												height: nextMenu.outerHeight() + nextMenu.find('> li').outerHeight()
											});
										}
									}

									nextMenu.css({
										'padding-top': nextMenuHeightDiff + 'px'
									});
								}

								if( isBack ) {
									currentMenu.parent().parent().removeClass('next-menu');
									currentMenu.removeClass('visible');

									if( prevMenuHeightDiff > 0 ) {
										prevMenu.css({
											overflow: 'hidden',
											'overflow-y': 'scroll'
										});
									}
								}

								e.stopPropagation();
							});
						}
					}

					$(window).trigger('resize');
					
					if( $(window).width() > 991 ) {
						slideNavigation.build();
					}

					$(document).ready(function(){
						$(window).afterResize(function(){
							if( $(window).width() > 991 ) {
								slideNavigation.build();
							}
						});
					});
				}

				// Header Nav Main Mobile Dark
				if($('.header-nav-main-mobile-dark').get(0)) {
					$('#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)').addClass('header-no-border-bottom');
				}
				
				return this;
			},

			events: function() {
				var self    = this,
					$html   = $('html'),
					$header = $('#header'),
					$window = $(window),
					headerBodyHeight = $('.header-body').outerHeight();

				$header.find('a[href="#"]').on('click', function(e) {
					e.preventDefault();
				});

				// Mobile Arrows
				$header.find('.dropdown-toggle, .dropdown-submenu > a')
					.append('<i class="fas fa-chevron-down"></i>');
				
				$header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down').on('click', function(e) {
					e.preventDefault();
					if ($window.width() < 992) {
						$(this).closest('li').toggleClass('open');

						// Adjust Header Body Height
						var height = ( $header.hasClass('header-effect-shrink') && $html.hasClass('sticky-header-active') ) ? theme.StickyHeader.options.stickyHeaderContainerHeight : headerBodyHeight;
						$('.header-body').animate({
					 		height: ($('.header-nav-main nav').outerHeight(true) + height) + 10
					 	}, 0);
					}
				});

				$header.find('li a.active').addClass('current-page-active');

				// Add Open Class
				$header.find('.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i').on('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					if ($window.width() > 991) {

						$header.find('li a.active').removeClass('active');

						if( $(this).prop('tagName') == 'I' ) {
							$(this).parent().addClass('active');
						} else {
							$(this).addClass('active');
						}

						if (!$(this).closest('li').hasClass('open')) {

							var $li = $(this).closest('li'),
								isSub = false;

							if ( $(this).parent().hasClass('dropdown-submenu') ) {
								isSub = true;
							}

							$(this).closest('.dropdown-menu').find('.dropdown-submenu.open').removeClass('open');
							$(this).parent('.dropdown').parent().find('.dropdown.open').removeClass('open');

							if (!isSub) {
								$(this).parent().find('.dropdown-submenu.open').removeClass('open');
							}

							$li.addClass('open');

							$(document).off('click.nav-click-to-open').on('click.nav-click-to-open', function (e) {
								if (!$li.is(e.target) && $li.has(e.target).length === 0) {
									$li.removeClass('open');
									$li.parents('.open').removeClass('open');
									$header.find('li a.active').removeClass('active');
									$header.find('li a.current-page-active').addClass('active');
								}
							});

						} else {
							$(this).closest('li').removeClass('open');
							$header.find('li a.active').removeClass('active');
							$header.find('li a.current-page-active').addClass('active');
						}

						$window.trigger({
							type: 'resize',
							from: 'header-nav-click-to-open'
						});
					}
				});

				// Collapse Nav
				$header.find('[data-collapse-nav]').on('click', function(e) {
					$(this).parents('.collapse').removeClass('show');
				});

				// Top Features
				$header.find('.header-nav-features-toggle').on('click', function(e) {
					e.preventDefault();

					var $toggleParent = $(this).parent();

					if (!$(this).siblings('.header-nav-features-dropdown').hasClass('show')) {

						var $dropdown = $(this).siblings('.header-nav-features-dropdown');

						$('.header-nav-features-dropdown.show').removeClass('show');

						$dropdown.addClass('show');

						$(document).off('click.header-nav-features-toggle').on('click.header-nav-features-toggle', function (e) {
							if (!$toggleParent.is(e.target) && $toggleParent.has(e.target).length === 0) {
								$('.header-nav-features-dropdown.show').removeClass('show');
							}
						});

						if ($(this).attr('data-focus')) {
							$('#' + $(this).attr('data-focus')).focus();
						}

					} else {
						$(this).siblings('.header-nav-features-dropdown').removeClass('show');
					}
				});

				// Hamburguer Menu
				var $hamburguerMenuBtn = $('.hamburguer-btn:not(.side-panel-toggle)'),
					$hamburguerSideHeader = $('#header.side-header, #header.side-header-overlay-full-screen');
				
				$hamburguerMenuBtn.on('click', function(){
					if($(this).attr('data-set-active') != 'false') {
						$(this).toggleClass('active');
					}
					$hamburguerSideHeader.toggleClass('side-header-hide');
					$html.toggleClass('side-header-hide');

					$window.trigger('resize');
				});

				$('.hamburguer-close:not(.side-panel-toggle)').on('click', function(){
					$('.hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)').trigger('click');
				});				
				
				// Set Header Body Height when open mobile menu
				$('.header-nav-main nav').on('show.bs.collapse', function () {
				 	$(this).removeClass('closed');

				 	// Add Mobile Menu Opened Class
				 	$('html').addClass('mobile-menu-opened');

			 		$('.header-body').animate({
				 		height: ($('.header-body').outerHeight() + $('.header-nav-main nav').outerHeight(true)) + 10
				 	});

				 	// Header Below Slider / Header Bottom Slider - Scroll to menu position
				 	if( $('#header').is('.header-bottom-slider, .header-below-slider') && !$('html').hasClass('sticky-header-active') ) {
				 		self.scrollToTarget( $('#header'), 0 );
				 	}
				});

				// Set Header Body Height when collapse mobile menu
				$('.header-nav-main nav').on('hide.bs.collapse', function () {
				 	$(this).addClass('closed');

				 	// Remove Mobile Menu Opened Class
				 	$('html').removeClass('mobile-menu-opened');

			 		$('.header-body').animate({
				 		height: ($('.header-body').outerHeight() - $('.header-nav-main nav').outerHeight(true))
				 	}, function(){
				 		$(this).height('auto');
				 	});
				});

				// Header Effect Shrink - Adjust header body height on mobile
				$window.on('stickyHeader.activate', function(){
					if( $window.width() < 992 && $header.hasClass('header-effect-shrink') ) {
						if( $('.header-btn-collapse-nav').attr('aria-expanded') == 'true' ) {
							$('.header-body').animate({
						 		height: ( $('.header-nav-main nav').outerHeight(true) + theme.StickyHeader.options.stickyHeaderContainerHeight ) + ( ($('.header-nav-bar').get(0)) ? $('.header-nav-bar').outerHeight() : 0 ) 
						 	});
						}
					}
				});

				$window.on('stickyHeader.deactivate', function(){
					if( $window.width() < 992 && $header.hasClass('header-effect-shrink') ) {
						if( $('.header-btn-collapse-nav').attr('aria-expanded') == 'true' ) {
							$('.header-body').animate({
						 		height: headerBodyHeight + $('.header-nav-main nav').outerHeight(true) + 10
						 	});
						}
					}
				});

				// Remove Open Class on Resize		
				$window.on('resize.removeOpen', function(e) {
					if( e.from == 'header-nav-click-to-open' ) {
						return;
					}
					
					setTimeout(function() {
						if( $window.width() > 991 ) {
							$header.find('.dropdown.open').removeClass('open');
						}
					}, 100);
				});

				// Side Header - Change value of initial header body height
				$(document).ready(function(){
					if( $window.width() > 991 ) {
						var flag = false;
						
						$window.on('resize', function(e) {
							if( e.from == 'header-nav-click-to-open' ) {
								return;
							}

							$header.find('.dropdown.open').removeClass('open');

							if( $window.width() < 992 && flag == false ) {
								headerBodyHeight = $('.header-body').outerHeight();
								flag = true;

								setTimeout(function(){
									flag = false;
								}, 500);
							}
						});
					}
				});

				// Side Header - Set header height on mobile
				if( $html.hasClass('side-header') ) {
					if( $window.width() < 992 ) {
						$header.css({
							height: $('.header-body .header-container').outerHeight() + (parseInt( $('.header-body').css('border-top-width') ) + parseInt( $('.header-body').css('border-bottom-width') ))
						});
					}

					$(document).ready(function(){
						$window.afterResize(function(){
							if( $window.width() < 992 ) {
								$header.css({
									height: $('.header-body .header-container').outerHeight() + (parseInt( $('.header-body').css('border-top-width') ) + parseInt( $('.header-body').css('border-bottom-width') ))
								});
							} else {
								$header.css({
									height: ''
								});
							}
						});
					});
				}

				// Anchors Position
				$('[data-hash]').each(function() {

					var target = $(this).attr('href'),
						offset = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0);

					if($(target).get(0)) {
						$(this).on('click', function(e) {
							e.preventDefault();

							if( !$(e.target).is('i') ) {

								// Close Collapse if open
								$(this).parents('.collapse.show').collapse('hide');

								// Close Side Header
								$hamburguerSideHeader.addClass('side-header-hide');
								$html.addClass('side-header-hide');
								
								$window.trigger('resize');

								self.scrollToTarget(target, offset);
								
							}

							return;
						});
					}

				});

				// Floating
				if($('#header.header-floating-icons').get(0)) {

					$('#header.header-floating-icons [data-hash]').off().each(function() {

						var target = $(this).attr('href'),
							offset = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0);

						if($(target).get(0)) {
							$(this).on('click', function(e) {
								e.preventDefault();

									$('html, body').animate({
										scrollTop: $(target).offset().top - offset
									}, 600, 'easeOutQuad', function() {

									});

								return;
							});
						}

					});

				}

				// Side Panel Toggle
				if( $('.side-panel-toggle').get(0) ) {
					var init_html_class = $('html').attr('class');

					$('.side-panel-toggle').on('click', function(e){
						var extra_class = $(this).data('extra-class'),
							delay       = ( extra_class ) ? 100 : 0;

						e.preventDefault();

						if( $(this).hasClass('active') ) {
							$('html').removeClass('side-panel-open');
							$('.hamburguer-btn.side-panel-toggle:not(.side-panel-close)').removeClass('active');
							return false;
						}

						if( extra_class ) {
							$('.side-panel-wrapper').css('transition','none');
							$('html')
								.removeClass()
								.addClass( init_html_class )
								.addClass( extra_class );
						}

						setTimeout(function(){
							$('.side-panel-wrapper').css('transition','');
							$('html').toggleClass('side-panel-open');
						}, delay);
					});

					$(document).on('click', function(e){
						if( !$(e.target).closest('.side-panel-wrapper').get(0) && !$(e.target).hasClass('side-panel-toggle') ) {
							$('.hamburguer-btn.side-panel-toggle:not(.side-panel-close)').removeClass('active');
							$('html').removeClass('side-panel-open');
						}
					});
				}

				return this;
			},

			scrollToTarget: function(target, offset) {
				var self = this;

				$('body').addClass('scrolling');

				$('html, body').animate({
					scrollTop: $(target).offset().top - offset
				}, self.options.scrollDelay, self.options.scrollAnimation, function() {
					$('body').removeClass('scrolling');
				});

				return this;

			}

		}

	});

}).apply(this, [window.theme, jQuery]);


// Newsletter
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Newsletter: {

			defaults: {
				wrapper: $('#newsletterForm')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				var self = this,
					$email = self.$wrapper.find('#newsletterEmail'),
					$success = $('#newsletterSuccess'),
					$error = $('#newsletterError');

				self.$wrapper.validate({
					submitHandler: function(form) {

						$.ajax({
							type: 'POST',
							url: self.$wrapper.attr('action'),
							data: {
								'email': $email.val()
							},
							dataType: 'json',
							success: function(data) {
								if (data.response == 'success') {

									$success.removeClass('d-none');
									$error.addClass('d-none');

									$email
										.val('')
										.blur()
										.closest('.control-group')
										.removeClass('success')
										.removeClass('error');

								} else {

									$error.html(data.message);
									$error.removeClass('d-none');
									$success.addClass('d-none');

									$email
										.blur()
										.closest('.control-group')
										.removeClass('success')
										.addClass('error');

								}
							}
						});

					},
					rules: {
						newsletterEmail: {
							required: true,
							email: true
						}
					},
					errorPlacement: function(error, element) {

					}
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Search
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Search: {

			defaults: {
				wrapper: $('#searchForm')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				this.$wrapper.validate({
					errorPlacement: function(error, element) {}
				});

				// Search Reveal
				$('.header-nav-features-search-reveal').each(function() {

					var $el = $(this)
						$header = $('#header'),
						$html = $('htmnl');

					$el.find('.header-nav-features-search-show-icon').on('click', function() {
						$el.addClass('show');
						$header.addClass('search-show');
						$html.addClass('search-show');
						$('#headerSearch').focus();
					});

					$el.find('.header-nav-features-search-hide-icon').on('click', function() {
						$el.removeClass('show');
						$header.removeClass('search-show');
						$html.removeClass('search-show');
					});

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Sticky Header
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		StickyHeader: {

			defaults: {
				wrapper: $('#header'),
				headerBody: $('#header .header-body'),
				stickyEnabled: true,
				stickyEnableOnBoxed: true,
				stickyEnableOnMobile: true,
				stickyStartAt: 0,
				stickyStartAtElement: false,
				stickySetTop: 0,
				stickyEffect: '',
				stickyHeaderContainerHeight: false,
				stickyChangeLogo: false,
				stickyChangeLogoWrapper: true
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

				return this;
			},

			build: function() {
				if (!this.options.stickyEnableOnBoxed && $('html').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') || !this.options.stickyEnabled) {
					return this;
				}

				var self = this,
					$html = $('html'),
					$window = $(window),
					sideHeader = $html.hasClass('side-header'),
					initialHeaderTopHeight = self.options.wrapper.find('.header-top').outerHeight(),
					initialHeaderContainerHeight = self.options.wrapper.find('.header-container').outerHeight(),
					minHeight;

				// HTML Classes
				$html.addClass('sticky-header-enabled');

				if (parseInt(self.options.stickySetTop) < 0) {
					$html.addClass('sticky-header-negative');
				}

				// Set Start At
				if(self.options.stickyStartAtElement) {

					var $stickyStartAtElement = $(self.options.stickyStartAtElement);

					$(window).on('scroll resize', function() {
						self.options.stickyStartAt = $stickyStartAtElement.offset().top;
					});

					$(window).trigger('resize');
				}

				// Define Min Height value
				if( self.options.wrapper.find('.header-top').get(0) ) {
					minHeight = ( initialHeaderTopHeight + initialHeaderContainerHeight );
				} else {
					minHeight = initialHeaderContainerHeight;
				}

				// Set Wrapper Min-Height
				if( !sideHeader ) {
					if( !$('.header-logo-sticky-change').get(0) ) {
						self.options.wrapper.css('height', self.options.headerBody.outerHeight());
					} else {
						$window.on('stickyChangeLogo.loaded', function(){
							self.options.wrapper.css('height', self.options.headerBody.outerHeight());
						});
					}

					if( self.options.stickyEffect == 'shrink' ) {
						
						// Prevent wrong visualization of header when reload on middle of page
						$(document).ready(function(){
							if( $window.scrollTop() >= self.options.stickyStartAt ) {
								self.options.wrapper.find('.header-container').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
									self.options.headerBody.css('position', 'fixed');
								});
							} else {
								self.options.headerBody.css('position', 'fixed');
							}
						});

						self.options.wrapper.find('.header-container').css('height', initialHeaderContainerHeight);
						self.options.wrapper.find('.header-top').css('height', initialHeaderTopHeight);
					}
				}

				// Sticky Header Container Height
				if( self.options.stickyHeaderContainerHeight ) {
					self.options.wrapper.find('.header-container').css('height', self.options.wrapper.find('.header-container').outerHeight());
				}

				// Boxed
				if($html.hasClass('boxed') && self.options.stickyEffect == 'shrink') {
					if( (parseInt(self.options.stickyStartAt) == 0) && $window.width() > 991) {
						self.options.stickyStartAt = 30;
					}

					// Set Header Body Position Absolute
					self.options.headerBody.css('position','absolute');

					// Set position absolute because top margin from boxed layout
					$window.on('scroll', function(){
						if( $window.scrollTop() > $('.body').offset().top ) {
							self.options.headerBody.css({
								'position' : 'fixed',
								'top' : 0
							});								
						} else {
							self.options.headerBody.css({
								'position' : 'absolute',
								'top' : 0
							});
						}
					});
				}

				// Check Sticky Header / Flags prevent multiple runs at same time
				var activate_flag   = true,
					deactivate_flag = false;

				self.checkStickyHeader = function() {
					if( $window.width() > 991 && $html.hasClass('side-header') ) {
						$html.removeClass('sticky-header-active');
						activate_flag = true;
						return;
					}

					if ($window.scrollTop() >= parseInt(self.options.stickyStartAt)) {
						if( activate_flag ) {
							self.activateStickyHeader();
							activate_flag = false;
							deactivate_flag = true;
						}
					} else {
						if( deactivate_flag ) {
							self.deactivateStickyHeader();
							deactivate_flag = false;
							activate_flag = true;
						}
					}
				};
				
				// Activate Sticky Header
				self.activateStickyHeader = function() {

					if ($window.width() < 992) {
						if (!self.options.stickyEnableOnMobile) {
							self.deactivateStickyHeader();
							return;
						}
					} else {
						if (sideHeader) {
							self.deactivateStickyHeader();
							return;
						}
					}

					$html.addClass('sticky-header-active');

					// Sticky Effect - Reveal
					if( self.options.stickyEffect == 'reveal' ) {

						self.options.headerBody.css('top','-' + self.options.stickyStartAt + 'px');

						self.options.headerBody.animate({
							top: self.options.stickySetTop
						}, 400, function() {});

					}

					// Sticky Effect - Shrink
					if( self.options.stickyEffect == 'shrink' ) {

						// If Header Top
						if( self.options.wrapper.find('.header-top').get(0) ) {
							self.options.wrapper.find('.header-top').css({
								height: 0,
								'min-height': 0,
								overflow: 'hidden'
							});
						}

						// Header Container
						if( self.options.stickyHeaderContainerHeight ) {
							self.options.wrapper.find('.header-container').css({
								height: self.options.stickyHeaderContainerHeight,
								'min-height': 0
							});
						} else {
							self.options.wrapper.find('.header-container').css({
								height: (initialHeaderContainerHeight / 3) * 2, // two third of container height
								'min-height': 0
							});

							var y = initialHeaderContainerHeight - ((initialHeaderContainerHeight / 3) * 2);
							$('.main').css({
								transform: 'translate3d(0, -'+ y +'px, 0)',
								transition: 'ease transform 300ms'
							});

							if($html.hasClass('boxed')) {
								self.options.headerBody.css('position','fixed');
							}
						}

					}

					self.options.headerBody.css('top', self.options.stickySetTop);

					if (self.options.stickyChangeLogo) {
						self.changeLogo(true);
					}

					// Set Elements Style
					$('[data-sticky-header-style]').each(function() {
						var $el = $(this),
							css = theme.fn.getOptions($el.data('sticky-header-style-active')),
							opts = theme.fn.getOptions($el.data('sticky-header-style'));

						if( $window.width() > opts.minResolution ) {
							$el.css(css);
						}
					});

					$.event.trigger({
						type: 'stickyHeader.activate'
					});
				};

				// Deactivate Sticky Header
				self.deactivateStickyHeader = function() {

					$html.removeClass('sticky-header-active');

					// Sticky Effect - Shrink
					if( self.options.stickyEffect == 'shrink' ) {

						// Boxed Layout
						if( $html.hasClass('boxed') ) {

							// Set Header Body Position Absolute
							self.options.headerBody.css('position','absolute');

							if( $window.scrollTop() > $('.body').offset().top ) {
								// Set Header Body Position Fixed
								self.options.headerBody.css('position','fixed');								
							}

						} else {
							// Set Header Body Position Fixed
							self.options.headerBody.css('position','fixed');
						}

						// If Header Top
						if( self.options.wrapper.find('.header-top').get(0) ) {
							self.options.wrapper.find('.header-top').css({
								height: initialHeaderTopHeight,
								overflow: 'visible'
							});
						}

						// Header Container
						self.options.wrapper.find('.header-container').css({
							height: initialHeaderContainerHeight
						});

					}

					self.options.headerBody.css('top', 0);

					if (self.options.stickyChangeLogo) {
						self.changeLogo(false);
					}

					// Set Elements Style
					$('[data-sticky-header-style]').each(function() {
						var $el = $(this),
							css = theme.fn.getOptions($el.data('sticky-header-style-deactive')),
							opts = theme.fn.getOptions($el.data('sticky-header-style'));

						if( $window.width() > opts.minResolution ) {
							$el.css(css);
						}
					});

					$.event.trigger({
						type: 'stickyHeader.deactivate'
					});
				};

				// Always Sticky
				if (parseInt(self.options.stickyStartAt) <= 0) {
					self.activateStickyHeader();
				}

				// Notice Top Bar
				if ($('.notice-top-bar').get(0)) {
					self.options.stickyStartAt = $('.notice-top-bar').outerHeight();
				}

				// Set Logo
				if (self.options.stickyChangeLogo) {

					var $logoWrapper = self.options.wrapper.find('.header-logo'),
						$logo = $logoWrapper.find('img'),
						logoWidth = $logo.attr('width'),
						logoHeight = $logo.attr('height'),
						logoSmallTop = parseInt($logo.attr('data-sticky-top') ? $logo.attr('data-sticky-top') : 0),
						logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : 'auto'),
						logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : 'auto');

					if (self.options.stickyChangeLogoWrapper) {
						$logoWrapper.css({
							'width': $logo.outerWidth(true),
							'height': $logo.outerHeight(true)
						});
					}

					self.changeLogo = function(activate) {
						if(activate) {
							
							$logo.css({
								'top': logoSmallTop,
								'width': logoSmallWidth,
								'height': logoSmallHeight
							});

						} else {
							
							$logo.css({
								'top': 0,
								'width': logoWidth,
								'height': logoHeight
							});

						}
					}

					$.event.trigger({
						type: 'stickyChangeLogo.loaded'
					});

				}

				// Side Header
				var headerBodyHeight,
					flag = false;

				self.checkSideHeader = function() {
					if($window.width() < 992 && flag == false) {
						headerBodyHeight = self.options.headerBody.height();
						flag = true;
					}

					if(self.options.stickyStartAt == 0 && sideHeader) {
						self.options.wrapper.css('min-height', 0);
					}

					if(self.options.stickyStartAt > 0 && sideHeader && $window.width() < 992) {
						self.options.wrapper.css('min-height', headerBodyHeight);
					}
				}

				return this;
			},

			events: function() {
				var self = this;

				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') || !this.options.stickyEnabled) {
					return this;
				}

				if (!self.options.alwaysStickyEnabled) {
					$(window).on('scroll resize', function() {
						self.checkStickyHeader();
					});
				} else {
					self.activateStickyHeader();
				}

				$(window).on('load resize', function(){
					self.checkSideHeader();
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);
;/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 08.03.2018
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/



(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}


/* TWEEN LITE */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
/* TIME LINE LITE */
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],f=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,f=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=f,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&f.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&f.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&f.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),f.to(t[u],e,c(r),u*n);return this.add(f,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(f=r[u])&&(f=new s({tweens:f})),this.add(f,l),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?l=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(c===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");


/* EASING PLUGIN*/
/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var a=function(){return _gsScope.GreenSockGlobals||_gsScope};"function"==typeof define&&define.amd?define(["TweenLite"],a):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=a())}();


/* CSS PLUGIN */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",
b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");


/* SPLIT TEXT UTIL */
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery);

;/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.4.8 (10.06.2018)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
!function(jQuery,undefined){"use strict";var version={core:"5.4.8","revolution.extensions.actions.min.js":"2.1.0","revolution.extensions.carousel.min.js":"1.2.1","revolution.extensions.kenburn.min.js":"1.3.1","revolution.extensions.layeranimation.min.js":"3.6.5","revolution.extensions.navigation.min.js":"1.3.5","revolution.extensions.parallax.min.js":"2.2.3","revolution.extensions.slideanims.min.js":"1.8","revolution.extensions.video.min.js":"2.2.2"};jQuery.fn.extend({revolution:function(i){var e={delay:9e3,responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,autoHeight:"off",sliderType:"standard",sliderLayout:"auto",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0",hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,disableProgressBar:"off",stopAtSlide:-1,stopAfterLoops:-1,shadow:0,dottedOverlay:"none",startDelay:0,lazyType:"smart",spinner:"spinner0",shuffle:"off",viewPort:{enable:!1,outof:"wait",visible_area:"60%",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:"off",simplifyAll:"on",nextSlideOnWindowFocus:"off",disableFocusListener:!0,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",speed:400,bgparallax:"off",opacity:"on",disable_onmobile:"off",ddd_shadow:"on",ddd_bgfreeze:"off",ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,ddd_path:"mouse"},scrolleffect:{fade:"off",blur:"off",scale:"off",grayscale:"off",maxblur:10,on_layers:"off",on_slidebg:"off",on_static_layers:"off",on_parallax_layers:"off",on_parallax_static_layers:"off",direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,disable_on_mobile:"on"},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:"off",horizontal_align:"center",vertical_align:"center",infinity:"on",space:0,maxVisibleItems:3,stretch:"off",fadeout:"on",maxRotation:0,minScale:0,vary_fade:"off",vary_rotation:"on",vary_scale:"off",border_radius:"0px",padding_top:0,padding_bottom:0},navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"off",touchOnDesktop:"off",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{container:"slider",rtl:!1,style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"left",v_align:"center",space:0,h_offset:20,v_offset:0,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"left",v_align:"center",h_offset:20,v_offset:0},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"left",v_align:"center",h_offset:20,v_offset:0}},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1};return i=jQuery.extend(!0,{},e,i),this.each(function(){var e=jQuery(this);i.minHeight=i.minHeight!=undefined?parseInt(i.minHeight,0):i.minHeight,i.scrolleffect.on="on"===i.scrolleffect.fade||"on"===i.scrolleffect.scale||"on"===i.scrolleffect.blur||"on"===i.scrolleffect.grayscale,"hero"==i.sliderType&&e.find(">ul>li").each(function(e){0<e&&jQuery(this).remove()}),i.jsFileLocation=i.jsFileLocation||getScriptLocation("themepunch.revolution.min.js"),i.jsFileLocation=i.jsFileLocation+i.extensions,i.scriptsneeded=getNeededScripts(i,e),i.curWinRange=0,i.rtl=!0,i.navigation!=undefined&&i.navigation.touch!=undefined&&(i.navigation.touch.swipe_min_touches=5<i.navigation.touch.swipe_min_touches?1:i.navigation.touch.swipe_min_touches),jQuery(this).on("scriptsloaded",function(){if(i.modulesfailing)return e.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+i.errorm+"</div>").show(),!1;_R.migration!=undefined&&(i=_R.migration(e,i)),punchgs.force3D=!0,"on"!==i.simplifyAll&&punchgs.TweenLite.lagSmoothing(1e3,16),prepareOptions(e,i),initSlider(e,i)}),e[0].opt=i,waitForScripts(e,i)})},getRSVersion:function(e){if(!0===e)return jQuery("body").data("tp_rs_version");var i=jQuery("body").data("tp_rs_version"),t="";for(var a in t+="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n",t+="---------------------------------------------------------\n",i)t+=i[a].alias+": "+i[a].ver+"\n";return t+="---------------------------------------------------------\n"},revremoveslide:function(r){return this.each(function(){var e=jQuery(this),i=e[0].opt;if(!(r<0||r>i.slideamount)&&e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&i&&0<i.li.length&&(0<r||r<=i.li.length)){var t=jQuery(i.li[r]),a=t.data("index"),n=!1;i.slideamount=i.slideamount-1,i.realslideamount=i.realslideamount-1,removeNavWithLiref(".tp-bullet",a,i),removeNavWithLiref(".tp-tab",a,i),removeNavWithLiref(".tp-thumb",a,i),t.hasClass("active-revslide")&&(n=!0),t.remove(),i.li=removeArray(i.li,r),i.carousel&&i.carousel.slides&&(i.carousel.slides=removeArray(i.carousel.slides,r)),i.thumbs=removeArray(i.thumbs,r),_R.updateNavIndexes&&_R.updateNavIndexes(i),n&&e.revnext(),punchgs.TweenLite.set(i.li,{minWidth:"99%"}),punchgs.TweenLite.set(i.li,{minWidth:"100%"})}})},revaddcallback:function(e){return this.each(function(){this.opt&&(this.opt.callBackArray===undefined&&(this.opt.callBackArray=new Array),this.opt.callBackArray.push(e))})},revgetparallaxproc:function(){return jQuery(this)[0].opt.scrollproc},revdebugmode:function(){return this.each(function(){var e=jQuery(this);e[0].opt.debugMode=!0,containerResized(e,e[0].opt)})},revscroll:function(i){return this.each(function(){var e=jQuery(this);jQuery("body,html").animate({scrollTop:e.offset().top+e.height()-i+"px"},{duration:400})})},revredraw:function(e){return this.each(function(){var e=jQuery(this);containerResized(e,e[0].opt)})},revkill:function(e){var i=this,t=jQuery(this);if(punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements),t!=undefined&&0<t.length&&0<jQuery("body").find("#"+t.attr("id")).length){t.data("conthover",1),t.data("conthover-changed",1),t.trigger("revolution.slide.onpause");var a=t.parent().find(".tp-bannertimer"),n=t[0].opt;n.tonpause=!0,t.trigger("stoptimer");var r="resize.revslider-"+t.attr("id");jQuery(window).unbind(r),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),t.unbind("hover, mouseover, mouseenter,mouseleave, resize");r="resize.revslider-"+t.attr("id");jQuery(window).off(r),t.find("*").each(function(){var e=jQuery(this);e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),e.off("on, hover, mouseenter,mouseleave,mouseover, resize"),e.data("mySplitText",null),e.data("ctl",null),e.data("tween")!=undefined&&e.data("tween").kill(),e.data("kenburn")!=undefined&&e.data("kenburn").kill(),e.data("timeline_out")!=undefined&&e.data("timeline_out").kill(),e.data("timeline")!=undefined&&e.data("timeline").kill(),e.remove(),e.empty(),e=null}),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),a.remove();try{t.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(e){}try{t.closest(".rev_slider_wrapper").remove()}catch(e){}try{t.remove()}catch(e){}return t.empty(),t.html(),n=t=null,delete i.c,delete i.opt,delete i.container,!0}return!1},revpause:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&(e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause"),e[0].opt.tonpause=!0,e.trigger("stoptimer"))})},revresume:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&(e.data("conthover",0),e.data("conthover-changed",1),e.trigger("revolution.slide.onresume"),e[0].opt.tonpause=!1,e.trigger("starttimer"))})},revstart:function(){var e=jQuery(this);if(e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&e[0].opt!==undefined)return e[0].opt.sliderisrunning?(console.log("Slider Is Running Already"),!1):((e[0].opt.c=e)[0].opt.ul=e.find(">ul"),runSlider(e,e[0].opt),!0)},revnext:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,1)})},revprev:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,-1)})},revmaxslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revcurrentslide:function(){var e=jQuery(this);if(e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length)return parseInt(e[0].opt.act,0)+1},revlastslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revshowslide:function(i){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,"to"+(i-1))})},revcallslidewithid:function(i){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,i)})}});var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{getversion:function(){return version},compare_version:function(e){var i=jQuery("body").data("tp_rs_version");return(i=i===undefined?new Object:i).Core===undefined&&(i.Core=new Object,i.Core.alias="Slider Revolution Core",i.Core.name="jquery.themepunch.revolution.min.js",i.Core.ver=_R.getversion().core),"stop"!=e.check&&(_R.getversion().core<e.min_core?(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     Core is older than expected ("+e.min_core+") from "+e.alias,"color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop"):_R.getversion()[e.name]!=undefined&&e.version<_R.getversion()[e.name]&&(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     "+e.alias+" ("+e.version+") is older than requiered ("+_R.getversion()[e.name]+")","color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop")),i[e.alias]===undefined&&(i[e.alias]=new Object,i[e.alias].alias=e.alias,i[e.alias].ver=e.version,i[e.alias].name=e.name),jQuery("body").data("tp_rs_version",i),e},currentSlideIndex:function(e){var i=e.c.find(".active-revslide").index();return i=-1==i?0:i},simp:function(e,i,t){var a=Math.abs(e)-Math.floor(Math.abs(e/i))*i;return t?a:e<0?-1*a:a},iOSVersion:function(){var e=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(e=!0):e=!1,e},isIE:function(e,i){var t=jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));t.html("\x3c!--[if "+(i||"")+" IE "+(e||"")+"]><a>&nbsp;</a><![endif]--\x3e");var a=t.find("a").length;return t.remove(),a},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],i=!1;for(var t in e)1<navigator.userAgent.split(e[t]).length&&(i=!0);return i},is_android:function(){var e=["android","Android"],i=!1;for(var t in e)1<navigator.userAgent.split(e[t]).length&&(i=!0);return i},callBackHandling:function(e,t,a){try{e.callBackArray&&jQuery.each(e.callBackArray,function(e,i){i&&i.inmodule&&i.inmodule===t&&i.atposition&&i.atposition===a&&i.callback&&i.callback.call()})}catch(e){console.log("Call Back Failed")}},get_browser:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[0]},get_browser_version:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[1]},isSafari11:function(){var e=jQuery.trim(_R.get_browser().toLowerCase());return-1===jQuery.trim(navigator.userAgent.toLowerCase()).search("edge")&&"msie"!==e&&e.match(/safari|chrome/)},getHorizontalOffset:function(e,i){var t=gWiderOut(e,".outer-left"),a=gWiderOut(e,".outer-right");switch(i){case"left":return t;case"right":return a;case"both":return t+a}},callingNewSlide:function(e,i){var t=0<e.find(".next-revslide").length?e.find(".next-revslide").index():0<e.find(".processing-revslide").length?e.find(".processing-revslide").index():e.find(".active-revslide").index(),a=0,n=e[0].opt;e.find(".next-revslide").removeClass("next-revslide"),e.find(".active-revslide").hasClass("tp-invisible-slide")&&(t=n.last_shown_slide),i&&jQuery.isNumeric(i)||i.match(/to/g)?(a=1===i||-1===i?(a=t+i)<0?n.slideamount-1:a>=n.slideamount?0:a:(i=jQuery.isNumeric(i)?i:parseInt(i.split("to")[1],0))<0?0:i>n.slideamount-1?n.slideamount-1:i,e.find(".tp-revslider-slidesli:eq("+a+")").addClass("next-revslide")):i&&e.find(".tp-revslider-slidesli").each(function(){var e=jQuery(this);e.data("index")===i&&e.addClass("next-revslide")}),a=e.find(".next-revslide").index(),e.trigger("revolution.nextslide.waiting"),t===a&&t===n.last_shown_slide||a!==t&&-1!=a?swapSlide(e):e.find(".next-revslide").removeClass("next-revslide")},slotSize:function(e,i){i.slotw=Math.ceil(i.width/i.slots),"fullscreen"==i.sliderLayout?i.sloth=Math.ceil(jQuery(window).height()/i.slots):i.sloth=Math.ceil(i.height/i.slots),"on"==i.autoHeight&&e!==undefined&&""!==e&&(i.sloth=Math.ceil(e.height()/i.slots))},setSize:function(e){var i=(e.top_outer||0)+(e.bottom_outer||0),t=parseInt(e.carousel.padding_top||0,0),a=parseInt(e.carousel.padding_bottom||0,0),n=e.gridheight[e.curWinRange],r=0,o=-1===e.nextSlide||e.nextSlide===undefined?0:e.nextSlide;if(e.paddings=e.paddings===undefined?{top:parseInt(e.c.parent().css("paddingTop"),0)||0,bottom:parseInt(e.c.parent().css("paddingBottom"),0)||0}:e.paddings,e.rowzones&&0<e.rowzones.length)for(var s=0;s<e.rowzones[o].length;s++)r+=e.rowzones[o][s][0].offsetHeight;if(n=(n=n<e.minHeight?e.minHeight:n)<r?r:n,"fullwidth"==e.sliderLayout&&"off"==e.autoHeight&&punchgs.TweenLite.set(e.c,{maxHeight:n+"px"}),e.c.css({marginTop:t,marginBottom:a}),e.width=e.ul.width(),e.height=e.ul.height(),setScale(e),e.height=Math.round(e.gridheight[e.curWinRange]*(e.width/e.gridwidth[e.curWinRange])),e.height>e.gridheight[e.curWinRange]&&"on"!=e.autoHeight&&(e.height=e.gridheight[e.curWinRange]),"fullscreen"==e.sliderLayout||e.infullscreenmode){e.height=e.bw*e.gridheight[e.curWinRange];e.c.parent().width();var l=jQuery(window).height();if(e.fullScreenOffsetContainer!=undefined){try{var d=e.fullScreenOffsetContainer.split(",");d&&jQuery.each(d,function(e,i){l=0<jQuery(i).length?l-jQuery(i).outerHeight(!0):l})}catch(e){}try{1<e.fullScreenOffset.split("%").length&&e.fullScreenOffset!=undefined&&0<e.fullScreenOffset.length?l-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:e.fullScreenOffset!=undefined&&0<e.fullScreenOffset.length&&(l-=parseInt(e.fullScreenOffset,0))}catch(e){}}l=l<e.minHeight?e.minHeight:l,l-=i,e.c.parent().height(l),e.c.closest(".rev_slider_wrapper").height(l),e.c.css({height:"100%"}),e.height=l,e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height}else e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height,e.c.height(e.height);var c={height:t+a+i+e.height+e.paddings.top+e.paddings.bottom};e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c),e.c.closest(".rev_slider_wrapper").css(c),setScale(e)},enterInViewPort:function(t){t.waitForCountDown&&(countDown(t.c,t),t.waitForCountDown=!1),t.waitForFirstSlide&&(swapSlide(t.c),t.waitForFirstSlide=!1,setTimeout(function(){t.c.removeClass("tp-waitforfirststart")},500)),"playing"!=t.sliderlaststatus&&t.sliderlaststatus!=undefined||t.c.trigger("starttimer"),t.lastplayedvideos!=undefined&&0<t.lastplayedvideos.length&&jQuery.each(t.lastplayedvideos,function(e,i){_R.playVideo(i,t)})},leaveViewPort:function(t){t.sliderlaststatus=t.sliderstatus,t.c.trigger("stoptimer"),t.playingvideos!=undefined&&0<t.playingvideos.length&&(t.lastplayedvideos=jQuery.extend(!0,[],t.playingvideos),t.playingvideos&&jQuery.each(t.playingvideos,function(e,i){t.leaveViewPortBasedStop=!0,_R.stopVideo&&_R.stopVideo(i,t)}))},unToggleState:function(e){e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){i.removeClass("rs-toggle-content-active")})},toggleState:function(e){e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){i.addClass("rs-toggle-content-active")})},swaptoggleState:function(e){e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){jQuery(i).hasClass("rs-toggle-content-active")?jQuery(i).removeClass("rs-toggle-content-active"):jQuery(i).addClass("rs-toggle-content-active")})},lastToggleState:function(e){var t=0;return e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){t=i.hasClass("rs-toggle-content-active")}),t}});var _ISM=_R.is_mobile(),_ANDROID=_R.is_android(),checkIDS=function(e,i){if(e.anyid=e.anyid===undefined?[]:e.anyid,-1!=jQuery.inArray(i.attr("id"),e.anyid)){var t=i.attr("id")+"_"+Math.round(9999*Math.random());i.attr("id",t)}e.anyid.push(i.attr("id"))},removeArray=function(e,t){var a=[];return jQuery.each(e,function(e,i){e!=t&&a.push(i)}),a},removeNavWithLiref=function(e,i,t){t.c.find(e).each(function(){var e=jQuery(this);e.data("liref")===i&&e.remove()})},lAjax=function(i,t){return!jQuery("body").data(i)&&(t.filesystem?(t.errorm===undefined&&(t.errorm="<br>Local Filesystem Detected !<br>Put this to your header:"),console.warn("Local Filesystem detected !"),t.errorm=t.errorm+'<br>&lt;script type="text/javascript" src="'+t.jsFileLocation+i+t.extensions_suffix+'"&gt;&lt;/script&gt;',console.warn(t.jsFileLocation+i+t.extensions_suffix+" could not be loaded !"),console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."),console.log(" "),!(t.modulesfailing=!0)):(jQuery.ajax({url:t.jsFileLocation+i+t.extensions_suffix+"?version="+version.core,dataType:"script",cache:!0,error:function(e){console.warn("Slider Revolution 5.0 Error !"),console.error("Failure at Loading:"+i+t.extensions_suffix+" on Path:"+t.jsFileLocation),console.info(e)}}),void jQuery("body").data(i,!0)))},getNeededScripts=function(t,e){var i=new Object,a=t.navigation;return i.kenburns=!1,i.parallax=!1,i.carousel=!1,i.navigation=!1,i.videos=!1,i.actions=!1,i.layeranim=!1,i.migration=!1,e.data("version")&&e.data("version").toString().match(/5./gi)?(e.find("img").each(function(){"on"==jQuery(this).data("kenburns")&&(i.kenburns=!0)}),("carousel"==t.sliderType||"on"==a.keyboardNavigation||"on"==a.mouseScrollNavigation||"on"==a.touch.touchenabled||a.arrows.enable||a.bullets.enable||a.thumbnails.enable||a.tabs.enable)&&(i.navigation=!0),e.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function(){var e=jQuery(this);(e.data("ytid")!=undefined||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("youtube"))&&(i.videos=!0),(e.data("vimeoid")!=undefined||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("vimeo"))&&(i.videos=!0),e.data("actions")!==undefined&&(i.actions=!0),i.layeranim=!0}),e.find("li").each(function(){jQuery(this).data("link")&&jQuery(this).data("link")!=undefined&&(i.layeranim=!0,i.actions=!0)}),!i.videos&&(0<e.find(".rs-background-video-layer").length||0<e.find(".tp-videolayer").length||0<e.find(".tp-audiolayer").length||0<e.find("iframe").length||0<e.find("video").length)&&(i.videos=!0),"carousel"==t.sliderType&&(i.carousel=!0),("off"!==t.parallax.type||t.viewPort.enable||"true"==t.viewPort.enable||"true"===t.scrolleffect.on||t.scrolleffect.on)&&(i.parallax=!0)):(i.kenburns=!0,i.parallax=!0,i.carousel=!1,i.navigation=!0,i.videos=!0,i.actions=!0,i.layeranim=!0,i.migration=!0),"hero"==t.sliderType&&(i.carousel=!1,i.navigation=!1),window.location.href.match(/file:/gi)&&(i.filesystem=!0,t.filesystem=!0),i.videos&&void 0===_R.isVideoPlaying&&lAjax("revolution.extension.video",t),i.carousel&&void 0===_R.prepareCarousel&&lAjax("revolution.extension.carousel",t),i.carousel||void 0!==_R.animateSlide||lAjax("revolution.extension.slideanims",t),i.actions&&void 0===_R.checkActions&&lAjax("revolution.extension.actions",t),i.layeranim&&void 0===_R.handleStaticLayers&&lAjax("revolution.extension.layeranimation",t),i.kenburns&&void 0===_R.stopKenBurn&&lAjax("revolution.extension.kenburn",t),i.navigation&&void 0===_R.createNavigation&&lAjax("revolution.extension.navigation",t),i.migration&&void 0===_R.migration&&lAjax("revolution.extension.migration",t),i.parallax&&void 0===_R.checkForParallax&&lAjax("revolution.extension.parallax",t),t.addons!=undefined&&0<t.addons.length&&jQuery.each(t.addons,function(e,i){"object"==typeof i&&i.fileprefix!=undefined&&lAjax(i.fileprefix,t)}),i},waitForScripts=function(e,i){var t=!0,a=i.scriptsneeded;i.addons!=undefined&&0<i.addons.length&&jQuery.each(i.addons,function(e,i){"object"==typeof i&&i.init!=undefined&&_R[i.init]===undefined&&(t=!1)}),a.filesystem||"undefined"!=typeof punchgs&&t&&(!a.kenburns||a.kenburns&&void 0!==_R.stopKenBurn)&&(!a.navigation||a.navigation&&void 0!==_R.createNavigation)&&(!a.carousel||a.carousel&&void 0!==_R.prepareCarousel)&&(!a.videos||a.videos&&void 0!==_R.resetVideo)&&(!a.actions||a.actions&&void 0!==_R.checkActions)&&(!a.layeranim||a.layeranim&&void 0!==_R.handleStaticLayers)&&(!a.migration||a.migration&&void 0!==_R.migration)&&(!a.parallax||a.parallax&&void 0!==_R.checkForParallax)&&(a.carousel||!a.carousel&&void 0!==_R.animateSlide)?e.trigger("scriptsloaded"):setTimeout(function(){waitForScripts(e,i)},50)},getScriptLocation=function(e){var i=new RegExp("themepunch.revolution.min.js","gi"),t="";return jQuery("script").each(function(){var e=jQuery(this).attr("src");e&&e.match(i)&&(t=e)}),t=(t=(t=t.replace("jquery.themepunch.revolution.min.js","")).replace("jquery.themepunch.revolution.js","")).split("?")[0]},setCurWinRange=function(e,i){var t=9999,a=0,n=0,r=0,o=jQuery(window).width(),s=i&&9999==e.responsiveLevels?e.visibilityLevels:e.responsiveLevels;s&&s.length&&jQuery.each(s,function(e,i){o<i&&(0==a||i<a)&&(r=e,a=t=i),i<o&&a<i&&(a=i,n=e)}),a<t&&(r=n),i?e.forcedWinRange=r:e.curWinRange=r},prepareOptions=function(e,i){i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%"},gWiderOut=function(e,i){var t=0;return e.find(i).each(function(){var e=jQuery(this);!e.hasClass("tp-forcenotvisible")&&t<e.outerWidth()&&(t=e.outerWidth())}),t},initSlider=function(container,opt){if(container==undefined)return!1;container.data("aimg")!=undefined&&("enabled"==container.data("aie8")&&_R.isIE(8)||"enabled"==container.data("amobile")&&_ISM)&&container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">'),container.find(">ul").addClass("tp-revslider-mainul"),opt.c=container,opt.ul=container.find(".tp-revslider-mainul"),opt.ul.find(">li").each(function(e){var i=jQuery(this);"on"==i.data("hideslideonmobile")&&_ISM&&i.remove(),(i.data("invisible")||!0===i.data("invisible"))&&(i.addClass("tp-invisible-slide"),i.appendTo(opt.ul))}),opt.addons!=undefined&&0<opt.addons.length&&jQuery.each(opt.addons,function(i,obj){"object"==typeof obj&&obj.init!=undefined&&_R[obj.init](eval(obj.params))}),opt.cid=container.attr("id"),opt.ul.css({visibility:"visible"}),opt.slideamount=opt.ul.find(">li").not(".tp-invisible-slide").length,opt.realslideamount=opt.ul.find(">li").length,opt.slayers=container.find(".tp-static-layers"),opt.slayers.data("index","staticlayers"),1!=opt.waitForInit&&(container[0].opt=opt,runSlider(container,opt))},onFullScreenChange=function(){jQuery("body").data("rs-fullScreenMode",!jQuery("body").data("rs-fullScreenMode")),jQuery("body").data("rs-fullScreenMode")&&setTimeout(function(){jQuery(window).trigger("resize")},200)},runSlider=function(t,x){if(x.sliderisrunning=!0,x.ul.find(">li").each(function(e){jQuery(this).data("originalindex",e)}),x.allli=x.ul.find(">li"),jQuery.each(x.allli,function(e,i){(i=jQuery(i)).data("origindex",i.index())}),x.li=x.ul.find(">li").not(".tp-invisible-slide"),"on"==x.shuffle){var e=new Object,i=x.ul.find(">li:first-child");e.fstransition=i.data("fstransition"),e.fsmasterspeed=i.data("fsmasterspeed"),e.fsslotamount=i.data("fsslotamount");for(var a=0;a<x.slideamount;a++){var n=Math.round(Math.random()*x.slideamount);x.ul.find(">li:eq("+n+")").prependTo(x.ul)}var r=x.ul.find(">li:first-child");r.data("fstransition",e.fstransition),r.data("fsmasterspeed",e.fsmasterspeed),r.data("fsslotamount",e.fsslotamount),x.allli=x.ul.find(">li"),x.li=x.ul.find(">li").not(".tp-invisible-slide")}if(x.inli=x.ul.find(">li.tp-invisible-slide"),x.thumbs=new Array,x.slots=4,x.act=-1,x.firststart=1,x.loadqueue=new Array,x.syncload=0,x.conw=t.width(),x.conh=t.height(),1<x.responsiveLevels.length?x.responsiveLevels[0]=9999:x.responsiveLevels=9999,jQuery.each(x.allli,function(e,i){var t=(i=jQuery(i)).find(".rev-slidebg")||i.find("img").first(),a=0;i.addClass("tp-revslider-slidesli"),i.data("index")===undefined&&i.data("index","rs-"+Math.round(999999*Math.random()));var n=new Object;n.params=new Array,n.id=i.data("index"),n.src=i.data("thumb")!==undefined?i.data("thumb"):t.data("lazyload")!==undefined?t.data("lazyload"):t.attr("src"),i.data("title")!==undefined&&n.params.push({from:RegExp("\\{\\{title\\}\\}","g"),to:i.data("title")}),i.data("description")!==undefined&&n.params.push({from:RegExp("\\{\\{description\\}\\}","g"),to:i.data("description")});for(a=1;a<=10;a++)i.data("param"+a)!==undefined&&n.params.push({from:RegExp("\\{\\{param"+a+"\\}\\}","g"),to:i.data("param"+a)});if(x.thumbs.push(n),i.data("link")!=undefined){var r=i.data("link"),o=i.data("target")||"_self",s="back"===i.data("slideindex")?0:60,l=i.data("linktoslide"),d=l;l!=undefined&&"next"!=l&&"prev"!=l&&x.allli.each(function(){var e=jQuery(this);e.data("origindex")+1==d&&(l=e.data("index"))}),"slide"!=r&&(l="no");var c='<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+s+';" data-x="center" data-y="center" data-basealign="slide" ',u=' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';c="no"==l?c+u+" >":c+"data-actions='"+("scroll_under"===l?'[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]':"prev"===l?'[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]':"next"===l?'[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]':'[{"event":"click","action":"jumptoslide","slide":"'+l+'","delay":"0.2"}]')+"'"+u+" >",c+='<a style="width:100%;height:100%;display:block"',c="slide"!=r?c+' target="'+o+'" href="'+r+'"':c,c+='><span style="width:100%;height:100%;display:block"></span></a></div>',i.append(c)}}),x.rle=x.responsiveLevels.length||1,x.gridwidth=cArray(x.gridwidth,x.rle),x.gridheight=cArray(x.gridheight,x.rle),"on"==x.simplifyAll&&(_R.isIE(8)||_R.iOSVersion())&&(t.find(".tp-caption").each(function(){var e=jQuery(this);e.removeClass("customin customout").addClass("fadein fadeout"),e.data("splitin",""),e.data("speed",400)}),x.allli.each(function(){var e=jQuery(this);e.data("transition","fade"),e.data("masterspeed",500),e.data("slotamount",1),(e.find(".rev-slidebg")||e.find(">img").first()).data("kenburns","off")})),x.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),x.autoHeight="fullscreen"==x.sliderLayout?"on":x.autoHeight,"fullwidth"==x.sliderLayout&&"off"==x.autoHeight&&t.css({maxHeight:x.gridheight[x.curWinRange]+"px"}),"auto"!=x.sliderLayout&&0==t.closest(".forcefullwidth_wrapper_tp_banner").length&&("fullscreen"!==x.sliderLayout||"on"!=x.fullScreenAutoWidth)){var o=t.parent(),s=o.css("marginBottom"),l=o.css("marginTop"),d=t.attr("id")+"_forcefullwidth";s=s===undefined?0:s,l=l===undefined?0:l,o.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="'+d+'" style="position:relative;width:100%;height:auto;margin-top:'+l+";margin-bottom:"+s+'"></div>'),t.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+t.height()+'px"></div>'),t.parent().css({marginTop:"0px",marginBottom:"0px"}),t.parent().css({position:"absolute"})}if(x.shadow!==undefined&&0<x.shadow&&(t.parent().addClass("tp-shadow"+x.shadow),t.parent().append('<div class="tp-shadowcover"></div>'),t.parent().find(".tp-shadowcover").css({backgroundColor:t.parent().css("backgroundColor"),backgroundImage:t.parent().css("backgroundImage")})),setCurWinRange(x),setCurWinRange(x,!0),!t.hasClass("revslider-initialised")){t.addClass("revslider-initialised"),t.addClass("tp-simpleresponsive"),t.attr("id")==undefined&&t.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),checkIDS(x,t),x.firefox13=!1,x.ie=!jQuery.support.opacity,x.ie9=9==document.documentMode,x.origcd=x.delay;var c=jQuery.fn.jquery.split("."),u=parseFloat(c[0]),p=parseFloat(c[1]);parseFloat(c[2]||"0");1==u&&p<7&&t.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+c+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),1<u&&(x.ie=!1);var j=new Object;j.addedyt=0,j.addedvim=0,j.addedvid=0,x.scrolleffect.on&&(x.scrolleffect.layers=new Array),t.find(".tp-caption, .rs-background-video-layer").each(function(e){var n=jQuery(this),i=n.data(),t=i.autoplayonlyfirsttime,a=i.autoplay,r=(i.videomp4!==undefined||i.videowebm!==undefined||i.videoogv,n.hasClass("tp-audiolayer")),o=i.videoloop,s=!0,l=!1;i.startclasses=n.attr("class"),i.isparallaxlayer=0<=i.startclasses.indexOf("rs-parallax"),n.hasClass("tp-static-layer")&&_R.handleStaticLayers&&(_R.handleStaticLayers(n,x),x.scrolleffect.on&&("on"===x.scrolleffect.on_parallax_static_layers&&i.isparallaxlayer||"on"===x.scrolleffect.on_static_layers&&!i.isparallaxlayer)&&(l=!0),s=!1);var d=n.data("noposteronmobile")||n.data("noPosterOnMobile")||n.data("posteronmobile")||n.data("posterOnMobile")||n.data("posterOnMObile");n.data("noposteronmobile",d);var c=0;if(n.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:0}),c++}),0<c&&n.data("iframes",!0),n.hasClass("tp-caption")){var u=n.hasClass("slidelink")?"width:100% !important;height:100% !important;":"",p=n.data(),f="",h=p.type,g="row"===h||"column"===h?"relative":"absolute",v="";"row"===h?(n.addClass("rev_row").removeClass("tp-resizeme"),v="rev_row_wrap"):"column"===h?(f=p.verticalalign===undefined?" vertical-align:bottom;":" vertical-align:"+p.verticalalign+";",v="rev_column",n.addClass("rev_column_inner").removeClass("tp-resizeme"),n.data("width","auto"),punchgs.TweenLite.set(n,{width:"auto"})):"group"===h&&n.removeClass("tp-resizeme");var m="",y="";"row"!==h&&"group"!==h&&"column"!==h?(m="display:"+n.css("display")+";",0<n.closest(".rev_column").length?(n.addClass("rev_layer_in_column"),s=!1):0<n.closest(".rev_group").length&&(n.addClass("rev_layer_in_group"),s=!1)):"column"===h&&(s=!1),p.wrapper_class!==undefined&&(v=v+" "+p.wrapper_class),p.wrapper_id!==undefined&&(y='id="'+p.wrapper_id+'"');var w="";n.hasClass("tp-no-events")&&(w=";pointer-events:none"),n.wrap("<div "+y+' class="tp-parallax-wrap '+v+'" style="'+f+" "+u+"position:"+g+";"+m+";visibility:hidden"+w+'"><div class="tp-loop-wrap" style="'+u+"position:"+g+";"+m+';"><div class="tp-mask-wrap" style="'+u+"position:"+g+";"+m+';" ></div></div></div>'),s&&x.scrolleffect.on&&("on"===x.scrolleffect.on_parallax_layers&&i.isparallaxlayer||"on"===x.scrolleffect.on_layers&&!i.isparallaxlayer)&&x.scrolleffect.layers.push(n.parent()),l&&x.scrolleffect.layers.push(n.parent()),"column"===h&&(n.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'),n.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));var b=n.closest(".tp-loop-wrap");jQuery.each(["pendulum","rotate","slideloop","pulse","wave"],function(e,i){var t=n.find(".rs-"+i),a=t.data()||"";""!=a&&(b.data(a),b.addClass("rs-"+i),t.children(0).unwrap(),n.data("loopanimation","on"))}),n.attr("id")===undefined&&n.attr("id","layer-"+Math.round(999999999*Math.random())),checkIDS(x,n),punchgs.TweenLite.set(n,{visibility:"hidden"})}var _=n.data("actions");_!==undefined&&_R.checkActions(n,x,_),checkHoverDependencies(n,x),_R.checkVideoApis&&(j=_R.checkVideoApis(n,x,j)),r||1!=t&&"true"!=t&&"1sttime"!=a||"loopandnoslidestop"==o||n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),r||1!=a&&"true"!=a&&"on"!=a&&"no1sttime"!=a||"loopandnoslidestop"==o||n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")}),t[0].addEventListener("mouseenter",function(){t.trigger("tp-mouseenter"),x.overcontainer=!0},{passive:!0}),t[0].addEventListener("mouseover",function(){t.trigger("tp-mouseover"),x.overcontainer=!0},{passive:!0}),t[0].addEventListener("mouseleave",function(){t.trigger("tp-mouseleft"),x.overcontainer=!1},{passive:!0}),t.find(".tp-caption video").each(function(e){var i=jQuery(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==x.sliderType&&(x.lazyType="all"),loadImages(t.find(".tp-static-layers"),x,0,!0),waitForCurrentImages(t.find(".tp-static-layers"),x,function(){t.find(".tp-static-layers img").each(function(){var e=jQuery(this),i=e.data("lazyload")!=undefined?e.data("lazyload"):e.attr("src"),t=getLoadObj(x,i);e.attr("src",t.src)})}),x.rowzones=[],x.allli.each(function(e){var i=jQuery(this);punchgs.TweenLite.set(this,{perspective:6e3}),x.rowzones[e]=[],i.find(".rev_row_zone").each(function(){x.rowzones[e].push(jQuery(this))}),"all"!=x.lazyType&&("smart"!=x.lazyType||0!=e&&1!=e&&e!=x.slideamount&&e!=x.slideamount-1)||(loadImages(i,x,e),waitForCurrentImages(i,x,function(){}))});var f=getUrlVars("#")[0];if(f.length<9&&1<f.split("slide").length){var h=parseInt(f.split("slide")[1],0);h<1&&(h=1),h>x.slideamount&&(h=x.slideamount),x.startWithSlide=h-1}t.append('<div class="tp-loader '+x.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),x.loader=t.find(".tp-loader"),0===t.find(".tp-bannertimer").length&&t.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'),t.find(".tp-bannertimer").css({width:"0%"}),x.ul.css({display:"block"}),prepareSlides(t,x),("off"!==x.parallax.type||x.scrolleffect.on)&&_R.checkForParallax&&_R.checkForParallax(t,x),_R.setSize(x),"hero"!==x.sliderType&&_R.createNavigation&&_R.createNavigation(t,x),_R.resizeThumbsTabs&&_R.resizeThumbsTabs&&_R.resizeThumbsTabs(x),contWidthManager(x);var g=x.viewPort;x.inviewport=!1,g!=undefined&&g.enable&&(jQuery.isNumeric(g.visible_area)||-1!==g.visible_area.indexOf("%")&&(g.visible_area=parseInt(g.visible_area)/100),_R.scrollTicker&&_R.scrollTicker(x,t)),"carousel"===x.sliderType&&_R.prepareCarousel&&(punchgs.TweenLite.set(x.ul,{opacity:0}),_R.prepareCarousel(x,new punchgs.TimelineLite,undefined,0),x.onlyPreparedSlide=!0),setTimeout(function(){if(!g.enable||g.enable&&x.inviewport||g.enable&&!x.inviewport&&"wait"==!g.outof)swapSlide(t);else if(x.c.addClass("tp-waitforfirststart"),x.waitForFirstSlide=!0,g.presize){var e=jQuery(x.li[0]);loadImages(e,x,0,!0),waitForCurrentImages(e.find(".tp-layers"),x,function(){_R.animateTheCaptions({slide:e,opt:x,preset:!0})})}_R.manageNavigation&&_R.manageNavigation(x),1<x.slideamount&&(!g.enable||g.enable&&x.inviewport?countDown(t,x):x.waitForCountDown=!0),setTimeout(function(){t.trigger("revolution.slide.onloaded")},100)},x.startDelay),x.startDelay=0,jQuery("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("mozfullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("webkitfullscreenchange",onFullScreenChange,{passive:!0});var v="resize.revslider-"+t.attr("id");jQuery(window).on(v,function(){if(t==undefined)return!1;0!=jQuery("body").find(t)&&contWidthManager(x);var e=!1;if("fullscreen"==x.sliderLayout){var i=jQuery(window).height();"mobile"==x.fallbacks.ignoreHeightChanges&&_ISM||"always"==x.fallbacks.ignoreHeightChanges?(x.fallbacks.ignoreHeightChangesSize=x.fallbacks.ignoreHeightChangesSize==undefined?0:x.fallbacks.ignoreHeightChangesSize,e=i!=x.lastwindowheight&&Math.abs(i-x.lastwindowheight)>x.fallbacks.ignoreHeightChangesSize):e=i!=x.lastwindowheight}(t.outerWidth(!0)!=x.width||t.is(":hidden")||e)&&(x.lastwindowheight=jQuery(window).height(),containerResized(t,x))}),hideSliderUnder(t,x),contWidthManager(x),x.fallbacks.disableFocusListener||"true"==x.fallbacks.disableFocusListener||!0===x.fallbacks.disableFocusListener||(t.addClass("rev_redraw_on_blurfocus"),tabBlurringCheck())}},cArray=function(e,i){if(!jQuery.isArray(e)){var t=e;(e=new Array).push(t)}if(e.length<i){t=e[e.length-1];for(var a=0;a<i-e.length+2;a++)e.push(t)}return e},checkHoverDependencies=function(e,n){var i=e.data();("sliderenter"===i.start||i.frames!==undefined&&i.frames[0]!=undefined&&"sliderenter"===i.frames[0].delay)&&(n.layersonhover===undefined&&(n.c.on("tp-mouseenter",function(){n.layersonhover&&jQuery.each(n.layersonhover,function(e,i){var t=i.data("closestli")||i.closest(".tp-revslider-slidesli"),a=i.data("staticli")||i.closest(".tp-static-layers");i.data("closestli")===undefined&&(i.data("closestli",t),i.data("staticli",a)),(0<t.length&&t.hasClass("active-revslide")||t.hasClass("processing-revslide")||0<a.length)&&(i.data("animdirection","in"),_R.playAnimationFrame&&_R.playAnimationFrame({caption:i,opt:n,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),i.data("triggerstate","on"))})}),n.c.on("tp-mouseleft",function(){n.layersonhover&&jQuery.each(n.layersonhover,function(e,i){i.data("animdirection","out"),i.data("triggered",!0),i.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(i,n),_R.playAnimationFrame&&_R.playAnimationFrame({caption:i,opt:n,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})})}),n.layersonhover=new Array),n.layersonhover.push(e))},contWidthManager=function(e){var i=_R.getHorizontalOffset(e.c,"left");if("auto"==e.sliderLayout||"fullscreen"===e.sliderLayout&&"on"==e.fullScreenAutoWidth)"fullscreen"==e.sliderLayout&&"on"==e.fullScreenAutoWidth?punchgs.TweenLite.set(e.ul,{left:0,width:e.c.width()}):punchgs.TweenLite.set(e.ul,{left:i,width:e.c.width()-_R.getHorizontalOffset(e.c,"both")});else{var t=Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left-i);punchgs.TweenLite.set(e.c.parent(),{left:0-t+"px",width:jQuery(window).width()-_R.getHorizontalOffset(e.c,"both")})}e.slayers&&"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout&&punchgs.TweenLite.set(e.slayers,{left:i})},cv=function(e,i){return e===undefined?i:e},hideSliderUnder=function(e,i,t){var a=e.parent();jQuery(window).width()<i.hideSliderAtLimit?(e.trigger("stoptimer"),"none"!=a.css("display")&&a.data("olddisplay",a.css("display")),a.css({display:"none"})):e.is(":hidden")&&t&&(a.data("olddisplay")!=undefined&&"undefined"!=a.data("olddisplay")&&"none"!=a.data("olddisplay")?a.css({display:a.data("olddisplay")}):a.css({display:"block"}),e.trigger("restarttimer"),setTimeout(function(){containerResized(e,i)},150)),_R.hideUnHideNav&&_R.hideUnHideNav(i)},containerResized=function(e,i){if(e.trigger("revolution.slide.beforeredraw"),1==i.infullscreenmode&&(i.minHeight=jQuery(window).height()),setCurWinRange(i),setCurWinRange(i,!0),!_R.resizeThumbsTabs||!0===_R.resizeThumbsTabs(i)){if(hideSliderUnder(e,i,!0),contWidthManager(i),"carousel"==i.sliderType&&_R.prepareCarousel(i,!0),e===undefined)return!1;_R.setSize(i),i.conw=i.c.width(),i.conh=i.infullscreenmode?i.minHeight:i.c.height();var t=e.find(".active-revslide .slotholder"),a=e.find(".processing-revslide .slotholder");removeSlots(e,i,e,2),"standard"===i.sliderType&&(punchgs.TweenLite.set(a.find(".defaultimg"),{opacity:0}),t.find(".defaultimg").css({opacity:1})),"carousel"===i.sliderType&&i.lastconw!=i.conw&&(clearTimeout(i.pcartimer),i.pcartimer=setTimeout(function(){_R.prepareCarousel(i,!0),"carousel"==i.sliderType&&"on"===i.carousel.showLayersAllTime&&jQuery.each(i.li,function(e){_R.animateTheCaptions({slide:jQuery(i.li[e]),opt:i,recall:!0})})},100),i.lastconw=i.conw),_R.manageNavigation&&_R.manageNavigation(i),_R.animateTheCaptions&&0<e.find(".active-revslide").length&&_R.animateTheCaptions({slide:e.find(".active-revslide"),opt:i,recall:!0}),"on"==a.data("kenburns")&&_R.startKenBurn(a,i,a.data("kbtl")!==undefined?a.data("kbtl").progress():0),"on"==t.data("kenburns")&&_R.startKenBurn(t,i,t.data("kbtl")!==undefined?t.data("kbtl").progress():0),_R.animateTheCaptions&&0<e.find(".processing-revslide").length&&_R.animateTheCaptions({slide:e.find(".processing-revslide"),opt:i,recall:!0}),_R.manageNavigation&&_R.manageNavigation(i)}e.trigger("revolution.slide.afterdraw")},setScale=function(e){e.bw=e.width/e.gridwidth[e.curWinRange],e.bh=e.height/e.gridheight[e.curWinRange],e.bh>e.bw?e.bh=e.bw:e.bw=e.bh,(1<e.bh||1<e.bw)&&(e.bw=1,e.bh=1)},prepareSlides=function(e,u){if(e.find(".tp-caption").each(function(){var e=jQuery(this);e.data("transition")!==undefined&&e.addClass(e.data("transition"))}),u.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:e.parent().css("maxHeight")}),"on"==u.autoHeight&&(u.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),e.css({maxHeight:"none"}),e.parent().css({maxHeight:"none"})),u.allli.each(function(e){var i=jQuery(this),t=i.data("originalindex");(u.startWithSlide!=undefined&&t==u.startWithSlide||u.startWithSlide===undefined&&0==e)&&i.addClass("next-revslide"),i.css({width:"100%",height:"100%",overflow:"hidden"})}),"carousel"===u.sliderType){u.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');var i='<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';u.c.parent().prepend(i),u.c.parent().append(i),_R.prepareCarousel(u)}e.parent().css({overflow:"visible"}),u.allli.find(">img").each(function(e){var i=jQuery(this),t=i.closest("li"),a=t.find(".rs-background-video-layer");a.addClass("defaultvid").css({zIndex:30}),i.addClass("defaultimg"),"on"==u.fallbacks.panZoomDisableOnMobile&&_ISM&&(i.data("kenburns","off"),i.data("bgfit","cover"));var n=t.data("mediafilter");n="none"===n||n===undefined?"":n,i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'),a.appendTo(t.find(".slotholder"));var r=i.data();i.closest(".slotholder").data(r),0<a.length&&r.bgparallax!=undefined&&(a.data("bgparallax",r.bgparallax),a.data("showcoveronpause","on")),"none"!=u.dottedOverlay&&u.dottedOverlay!=undefined&&i.closest(".slotholder").append('<div class="tp-dottedoverlay '+u.dottedOverlay+'"></div>');var o=i.attr("src");r.src=o,r.bgfit=r.bgfit||"cover",r.bgrepeat=r.bgrepeat||"no-repeat",r.bgposition=r.bgposition||"center center";i.closest(".slotholder");var s=i.data("bgcolor"),l="";l=s!==undefined&&0<=s.indexOf("gradient")?'"background:'+s+';width:100%;height:100%;"':'"background-color:'+s+";background-repeat:"+r.bgrepeat+";background-image:url("+o+");background-size:"+r.bgfit+";background-position:"+r.bgposition+';width:100%;height:100%;"',i.data("mediafilter",n),n="on"===i.data("kenburns")?"":n;var d=jQuery('<div class="tp-bgimg defaultimg '+n+'" data-bgcolor="'+s+'" style='+l+"></div>");i.parent().append(d);var c=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+i.get(0).outerHTML);i.replaceWith(c),d.data(r),d.attr("src",o),"standard"!==u.sliderType&&"undefined"!==u.sliderType||d.css({opacity:0})}),u.scrolleffect.on&&"on"===u.scrolleffect.on_slidebg&&(u.allslotholder=new Array,u.allli.find(".slotholder").each(function(){jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')}),u.allslotholder=u.c.find(".slotholder_fadeoutwrap"))},removeSlots=function(e,i,t,a){i.removePrepare=i.removePrepare+a,t.find(".slot, .slot-circle-wrapper").each(function(){jQuery(this).remove()}),i.transition=0,i.removePrepare=0},cutParams=function(e){var i=e;return e!=undefined&&0<e.length&&(i=e.split("?")[0]),i},relativeRedir=function(e){return location.pathname.replace(/(.*)\/[^/]*/,"$1/"+e)},abstorel=function(e,i){var t=e.split("/"),a=i.split("/");t.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?t.pop():t.push(a[n]));return t.join("/")},imgLoaded=function(l,e,d){e.syncload--,e.loadqueue&&jQuery.each(e.loadqueue,function(e,i){var t=i.src.replace(/\.\.\/\.\.\//gi,""),a=self.location.href,n=document.location.origin,r=a.substring(0,a.length-1)+"/"+t,o=n+"/"+t,s=abstorel(self.location.href,i.src);a=a.substring(0,a.length-1)+t,(cutParams(n+=t)===cutParams(decodeURIComponent(l.src))||cutParams(a)===cutParams(decodeURIComponent(l.src))||cutParams(s)===cutParams(decodeURIComponent(l.src))||cutParams(o)===cutParams(decodeURIComponent(l.src))||cutParams(r)===cutParams(decodeURIComponent(l.src))||cutParams(i.src)===cutParams(decodeURIComponent(l.src))||cutParams(i.src).replace(/^.*\/\/[^\/]+/,"")===cutParams(decodeURIComponent(l.src)).replace(/^.*\/\/[^\/]+/,"")||"file://"===window.location.origin&&cutParams(l.src).match(new RegExp(t)))&&(i.progress=d,i.width=l.width,i.height=l.height)}),progressImageLoad(e)},progressImageLoad=function(a){3!=a.syncload&&a.loadqueue&&jQuery.each(a.loadqueue,function(e,i){if(i.progress.match(/prepared/g)&&a.syncload<=3){if(a.syncload++,"img"==i.type){var t=new Image;t.onload=function(){imgLoaded(this,a,"loaded"),i.error=!1},t.onerror=function(){imgLoaded(this,a,"failed"),i.error=!0},t.src=i.src}else jQuery.get(i.src,function(e){i.innerHTML=(new XMLSerializer).serializeToString(e.documentElement),i.progress="loaded",a.syncload--,progressImageLoad(a)}).fail(function(){i.progress="failed",a.syncload--,progressImageLoad(a)});i.progress="inload"}})},addToLoadQueue=function(t,e,i,a,n){var r=!1;if(e.loadqueue&&jQuery.each(e.loadqueue,function(e,i){i.src===t&&(r=!0)}),!r){var o=new Object;o.src=t,o.starttoload=jQuery.now(),o.type=a||"img",o.prio=i,o.progress="prepared",o.static=n,e.loadqueue.push(o)}},loadImages=function(e,a,n,r){e.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),i=e.data("lazyload")!==undefined&&"undefined"!==e.data("lazyload")?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),t=e.data("svg_src")!=undefined?"svg":"img";e.data("start-to-load",jQuery.now()),addToLoadQueue(i,a,n,t,r)}),progressImageLoad(a)},getLoadObj=function(e,t){var a=new Object;return e.loadqueue&&jQuery.each(e.loadqueue,function(e,i){i.src==t&&(a=i)}),a},waitForCurrentImages=function(o,s,e){var l=!1;o.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),i=e.data("lazyload")!=undefined?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),t=getLoadObj(s,i);if(e.data("loaded")===undefined&&t!==undefined&&t.progress&&t.progress.match(/loaded/g)){if(e.attr("src",t.src),"img"==t.type)if(e.hasClass("defaultimg"))_R.isIE(8)?defimg.attr("src",t.src):-1==t.src.indexOf("images/transparent.png")&&-1==t.src.indexOf("assets/transparent.png")||e.data("bgcolor")===undefined?e.css({backgroundImage:'url("'+t.src+'")'}):e.data("bgcolor")!==undefined&&e.css({background:e.data("bgcolor")}),o.data("owidth",t.width),o.data("oheight",t.height),o.find(".slotholder").data("owidth",t.width),o.find(".slotholder").data("oheight",t.height);else{var a=e.data("ww"),n=e.data("hh");e.data("owidth",t.width),e.data("oheight",t.height),a=a==undefined||"auto"==a||""==a?t.width:a,n=n==undefined||"auto"==n||""==n?t.height:n,!jQuery.isNumeric(a)&&0<a.indexOf("%")&&(n=a),e.data("ww",a),e.data("hh",n)}else"svg"==t.type&&"loaded"==t.progress&&(e.append('<div class="tp-svg-innercontainer"></div>'),e.find(".tp-svg-innercontainer").append(t.innerHTML));e.data("loaded",!0)}if(t&&t.progress&&t.progress.match(/inprogress|inload|prepared/g)&&(!t.error&&jQuery.now()-e.data("start-to-load")<5e3?l=!0:(t.progress="failed",t.reported_img||(t.reported_img=!0,console.warn(i+"  Could not be loaded !")))),1==s.youtubeapineeded&&(!window.YT||YT.Player==undefined)&&(l=!0,5e3<jQuery.now()-s.youtubestarttime&&1!=s.youtubewarning)){s.youtubewarning=!0;var r="YouTube Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}if(1==s.vimeoapineeded&&!window.Vimeo&&(l=!0,5e3<jQuery.now()-s.vimeostarttime&&1!=s.vimeowarning)){s.vimeowarning=!0;r="Vimeo Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}}),!_ISM&&s.audioqueue&&0<s.audioqueue.length&&jQuery.each(s.audioqueue,function(e,i){i.status&&"prepared"===i.status&&jQuery.now()-i.start<i.waittime&&(l=!0)}),jQuery.each(s.loadqueue,function(e,i){!0!==i.static||"loaded"==i.progress&&"failed"!==i.progress||("failed"==i.progress?i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded in time. Error Exists:"+i.error)):!i.error&&jQuery.now()-i.starttoload<5e3?l=!0:i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded within 5s! Error Exists:"+i.error)))}),l?punchgs.TweenLite.delayedCall(.18,waitForCurrentImages,[o,s,e]):punchgs.TweenLite.delayedCall(.18,e)},swapSlide=function(e){var i=e[0].opt;if(clearTimeout(i.waitWithSwapSlide),0<e.find(".processing-revslide").length)return i.waitWithSwapSlide=setTimeout(function(){swapSlide(e)},150),!1;var t=e.find(".active-revslide"),a=e.find(".next-revslide"),n=a.find(".defaultimg");if("carousel"!==i.sliderType||i.carousel.fadein||(punchgs.TweenLite.to(i.ul,1,{opacity:1}),i.carousel.fadein=!0),a.index()===t.index()&&!0!==i.onlyPreparedSlide)return a.removeClass("next-revslide"),!1;!0===i.onlyPreparedSlide&&(i.onlyPreparedSlide=!1,jQuery(i.li[0]).addClass("processing-revslide")),a.removeClass("next-revslide").addClass("processing-revslide"),-1===a.index()&&"carousel"===i.sliderType&&(a=jQuery(i.li[0])),a.data("slide_on_focus_amount",a.data("slide_on_focus_amount")+1||1),"on"==i.stopLoop&&a.index()==i.lastslidetoshow-1&&(e.find(".tp-bannertimer").css({visibility:"hidden"}),e.trigger("revolution.slide.onstop"),i.noloopanymore=1),a.index()===i.slideamount-1&&(i.looptogo=i.looptogo-1,i.looptogo<=0&&(i.stopLoop="on")),i.tonpause=!0,e.trigger("stoptimer"),i.cd=0,"off"===i.spinner&&(i.loader!==undefined?i.loader.css({display:"none"}):i.loadertimer=setTimeout(function(){i.loader!==undefined&&i.loader.css({display:"block"})},50)),loadImages(a,i,1),_R.preLoadAudio&&_R.preLoadAudio(a,i,1),waitForCurrentImages(a,i,function(){a.find(".rs-background-video-layer").each(function(){var e=jQuery(this);e.hasClass("HasListener")||(e.data("bgvideo",1),_R.manageVideoLayer&&_R.manageVideoLayer(e,i)),0==e.find(".rs-fullvideo-cover").length&&e.append('<div class="rs-fullvideo-cover"></div>')}),swapSlideProgress(n,e)})},swapSlideProgress=function(e,i){var t=i.find(".active-revslide"),a=i.find(".processing-revslide"),n=t.find(".slotholder"),r=a.find(".slotholder"),o=i[0].opt;o.tonpause=!1,o.cd=0,clearTimeout(o.loadertimer),o.loader!==undefined&&o.loader.css({display:"none"}),_R.setSize(o),_R.slotSize(e,o),_R.manageNavigation&&_R.manageNavigation(o);var s={};s.nextslide=a,s.currentslide=t,i.trigger("revolution.slide.onbeforeswap",s),o.transition=1,o.videoplaying=!1,a.data("delay")!=undefined?(o.cd=0,o.delay=a.data("delay")):o.delay=o.origcd,"true"==a.data("ssop")||!0===a.data("ssop")?o.ssop=!0:o.ssop=!1,i.trigger("nulltimer");var l=t.index(),d=a.index();o.sdir=d<l?1:0,"arrow"==o.sc_indicator&&(0==l&&d==o.slideamount-1&&(o.sdir=1),l==o.slideamount-1&&0==d&&(o.sdir=0)),o.lsdir=o.lsdir===undefined?o.sdir:o.lsdir,o.dirc=o.lsdir!=o.sdir,o.lsdir=o.sdir,t.index()!=a.index()&&1!=o.firststart&&_R.removeTheCaptions&&_R.removeTheCaptions(t,o),a.hasClass("rs-pause-timer-once")||a.hasClass("rs-pause-timer-always")?o.videoplaying=!0:i.trigger("restarttimer"),a.removeClass("rs-pause-timer-once");var c;if(o.currentSlide=t.index(),o.nextSlide=a.index(),"carousel"==o.sliderType)c=new punchgs.TimelineLite,_R.prepareCarousel(o,c),letItFree(i,r,n,a,t,c),o.transition=0,o.firststart=0;else{(c=new punchgs.TimelineLite({onComplete:function(){letItFree(i,r,n,a,t,c)}})).add(punchgs.TweenLite.set(r.find(".defaultimg"),{opacity:0})),c.pause(),_R.animateTheCaptions&&_R.animateTheCaptions({slide:a,opt:o,preset:!0}),1==o.firststart&&(punchgs.TweenLite.set(t,{autoAlpha:0}),o.firststart=0),punchgs.TweenLite.set(t,{zIndex:18}),punchgs.TweenLite.set(a,{autoAlpha:0,zIndex:20}),"prepared"==a.data("differentissplayed")&&(a.data("differentissplayed","done"),a.data("transition",a.data("savedtransition")),a.data("slotamount",a.data("savedslotamount")),a.data("masterspeed",a.data("savedmasterspeed"))),a.data("fstransition")!=undefined&&"done"!=a.data("differentissplayed")&&(a.data("savedtransition",a.data("transition")),a.data("savedslotamount",a.data("slotamount")),a.data("savedmasterspeed",a.data("masterspeed")),a.data("transition",a.data("fstransition")),a.data("slotamount",a.data("fsslotamount")),a.data("masterspeed",a.data("fsmasterspeed")),a.data("differentissplayed","prepared")),a.data("transition")==undefined&&a.data("transition","random"),0;var u=a.data("transition")!==undefined?a.data("transition").split(","):"fade",p=a.data("nexttransid")==undefined?-1:a.data("nexttransid");"on"==a.data("randomtransition")?p=Math.round(Math.random()*u.length):p+=1,p==u.length&&(p=0),a.data("nexttransid",p);var f=u[p];o.ie&&("boxfade"==f&&(f="boxslide"),"slotfade-vertical"==f&&(f="slotzoom-vertical"),"slotfade-horizontal"==f&&(f="slotzoom-horizontal")),_R.isIE(8)&&(f=11),c=_R.animateSlide(0,f,i,a,t,r,n,c),"on"==r.data("kenburns")&&(_R.startKenBurn(r,o),c.add(punchgs.TweenLite.set(r,{autoAlpha:0}))),c.pause()}_R.scrollHandling&&(_R.scrollHandling(o,!0,0),c.eventCallback("onUpdate",function(){_R.scrollHandling(o,!0,0)})),"off"!=o.parallax.type&&o.parallax.firstgo==undefined&&_R.scrollHandling&&(o.parallax.firstgo=!0,o.lastscrolltop=-999,_R.scrollHandling(o,!0,0),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},210),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},420)),_R.animateTheCaptions?"carousel"===o.sliderType&&"on"===o.carousel.showLayersAllTime?(jQuery.each(o.li,function(e){o.carousel.allLayersStarted?_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,recall:!0}):o.li[e]===a?_R.animateTheCaptions({slide:jQuery(o.li[e]),maintimeline:c,opt:o,startslideanimat:0}):_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,startslideanimat:0})}),o.carousel.allLayersStarted=!0):_R.animateTheCaptions({slide:a,opt:o,maintimeline:c,startslideanimat:0}):c!=undefined&&setTimeout(function(){c.resume()},30),punchgs.TweenLite.to(a,.001,{autoAlpha:1})},letItFree=function(e,i,t,a,n,r){var o=e[0].opt;"carousel"===o.sliderType||(o.removePrepare=0,punchgs.TweenLite.to(i.find(".defaultimg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){removeSlots(e,o,a,1)}}),a.index()!=n.index()&&punchgs.TweenLite.to(n,.2,{zIndex:18,autoAlpha:0,onComplete:function(){removeSlots(e,o,n,1)}})),e.find(".active-revslide").removeClass("active-revslide"),e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"),o.act=a.index(),o.c.attr("data-slideactive",e.find(".active-revslide").data("index")),"scroll"!=o.parallax.type&&"scroll+mouse"!=o.parallax.type&&"mouse+scroll"!=o.parallax.type||(o.lastscrolltop=-999,_R.scrollHandling(o)),r.clear(),t.data("kbtl")!=undefined&&(t.data("kbtl").reverse(),t.data("kbtl").timeScale(25)),"on"==i.data("kenburns")&&(i.data("kbtl")!=undefined?(i.data("kbtl").timeScale(1),i.data("kbtl").play()):_R.startKenBurn(i,o)),a.find(".rs-background-video-layer").each(function(e){if(_ISM&&!o.fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var i=jQuery(this);_R.resetVideo(i,o,!1,!0),punchgs.TweenLite.fromTo(i,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.2,onComplete:function(){_R.animcompleted&&_R.animcompleted(i,o)}})}),n.find(".rs-background-video-layer").each(function(e){if(_ISM)return!1;var i=jQuery(this);_R.stopVideo&&(_R.resetVideo(i,o),_R.stopVideo(i,o)),punchgs.TweenLite.to(i,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var s={};if(s.slideIndex=a.index()+1,s.slideLIIndex=a.index(),s.slide=a,s.currentslide=a,s.prevslide=n,o.last_shown_slide=n.index(),e.trigger("revolution.slide.onchange",s),e.trigger("revolution.slide.onafterswap",s),o.startWithSlide!==undefined&&"done"!==o.startWithSlide&&"carousel"===o.sliderType){for(var l=o.startWithSlide,d=0;d<=o.li.length-1;d++){jQuery(o.li[d]).data("originalindex")===o.startWithSlide&&(l=d)}0!==l&&_R.callingNewSlide(o.c,l),o.startWithSlide="done"}o.duringslidechange=!1;var c=n.data("slide_on_focus_amount"),u=n.data("hideafterloop");0!=u&&u<=c&&o.c.revremoveslide(n.index());var p=-1===o.nextSlide||o.nextSlide===undefined?0:o.nextSlide;o.rowzones!=undefined&&(p=p>o.rowzones.length?o.rowzones.length:p),o.rowzones!=undefined&&0<o.rowzones.length&&o.rowzones[p]!=undefined&&0<=p&&p<=o.rowzones.length&&0<o.rowzones[p].length&&_R.setSize(o)},removeAllListeners=function(e,i){e.children().each(function(){try{jQuery(this).die("click")}catch(e){}try{jQuery(this).die("mouseenter")}catch(e){}try{jQuery(this).die("mouseleave")}catch(e){}try{jQuery(this).unbind("hover")}catch(e){}});try{e.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i.cdint),e=null},countDown=function(e,i){i.cd=0,i.loop=0,i.stopAfterLoops!=undefined&&-1<i.stopAfterLoops?i.looptogo=i.stopAfterLoops:i.looptogo=9999999,i.stopAtSlide!=undefined&&-1<i.stopAtSlide?i.lastslidetoshow=i.stopAtSlide:i.lastslidetoshow=999,i.stopLoop="off",0==i.looptogo&&(i.stopLoop="on");var t=e.find(".tp-bannertimer");e.on("stoptimer",function(){var e=jQuery(this).find(".tp-bannertimer");e[0].tween.pause(),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),i.sliderstatus="paused",_R.unToggleState(i.slidertoggledby)}),e.on("starttimer",function(){i.forcepause_viatoggle||(1!=i.conthover&&1!=i.videoplaying&&i.width>i.hideSliderAtLimit&&1!=i.tonpause&&1!=i.overnav&&1!=i.ssop&&(1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||(t.css({visibility:"visible"}),t[0].tween.resume(),i.sliderstatus="playing")),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby))}),e.on("restarttimer",function(){if(!i.forcepause_viatoggle){var e=jQuery(this).find(".tp-bannertimer");if(i.mouseoncontainer&&"on"==i.navigation.onHoverStop&&!_ISM)return!1;1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||1==i.ssop||(e.css({visibility:"visible"}),e[0].tween.kill(),e[0].tween=punchgs.TweenLite.fromTo(e,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),i.sliderstatus="playing"),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby)}}),e.on("nulltimer",function(){t[0].tween.kill(),t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),t[0].tween.pause(0),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),i.sliderstatus="paused"});var a=function(){0==jQuery("body").find(e).length&&(removeAllListeners(e,i),clearInterval(i.cdint)),e.trigger("revolution.slide.slideatend"),1==e.data("conthover-changed")&&(i.conthover=e.data("conthover"),e.data("conthover-changed",0)),_R.callingNewSlide(e,1)};t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),1<i.slideamount&&(0!=i.stopAfterLoops||1!=i.stopAtSlide)?e.trigger("starttimer"):(i.noloopanymore=1,e.trigger("nulltimer")),e.on("tp-mouseenter",function(){i.mouseoncontainer=!0,"on"!=i.navigation.onHoverStop||_ISM||(e.trigger("stoptimer"),e.trigger("revolution.slide.onpause"))}),e.on("tp-mouseleft",function(){i.mouseoncontainer=!1,1!=e.data("conthover")&&"on"==i.navigation.onHoverStop&&(1==i.viewPort.enable&&i.inviewport||0==i.viewPort.enable)&&(e.trigger("revolution.slide.onresume"),e.trigger("starttimer"))})},vis=function(){var i,t,e={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(i in e)if(i in document){t=e[i];break}return function(e){return e&&document.addEventListener(t,e,{pasive:!0}),!document[i]}}(),restartOnFocus=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;if(e==undefined||e.c==undefined||0===e.c.length)return!1;1!=e.windowfocused&&(e.windowfocused=!0,punchgs.TweenLite.delayedCall(.3,function(){"on"==e.fallbacks.nextSlideOnWindowFocus&&e.c.revnext(),e.c.revredraw(),"playing"==e.lastsliderstatus&&e.c.revresume()}))})},lastStatBlur=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;e.windowfocused=!1,e.lastsliderstatus=e.sliderstatus,e.c.revpause();var i=e.c.find(".active-revslide .slotholder"),t=e.c.find(".processing-revslide .slotholder");"on"==t.data("kenburns")&&_R.stopKenBurn(t,e),"on"==i.data("kenburns")&&_R.stopKenBurn(i,e)})},tabBlurringCheck=function(){var e=document.documentMode===undefined,i=window.chrome;1!==jQuery("body").data("revslider_focus_blur_listener")&&(jQuery("body").data("revslider_focus_blur_listener",1),e&&!i?jQuery(window).on("focusin",function(){restartOnFocus()}).on("focusout",function(){lastStatBlur()}):window.addEventListener?(window.addEventListener("focus",function(e){restartOnFocus()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){lastStatBlur()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){restartOnFocus()}),window.attachEvent("blur",function(e){lastStatBlur()})))},getUrlVars=function(e){for(var i,t=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),n=0;n<a.length;n++)a[n]=a[n].replace("%3D","="),i=a[n].split("="),t.push(i[0]),t[i[0]]=i[1];return t}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.4 EXTENSION - ACTIONS
 * @version: 2.1.0 (22.11.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/

!function($){"use strict";function getScrollRoot(){var e,t=document.documentElement,o=document.body,a=(void 0!==window.pageYOffset?window.pageYOffset:null)||o.scrollTop||t.scrollTop;return t.scrollTop=o.scrollTop=a+(a>0)?-1:1,e=t.scrollTop!==a?t:o,e.scrollTop=a,e}var _R=jQuery.fn.revolution,_ISM=_R.is_mobile(),extension={alias:"Actions Min JS",name:"revolution.extensions.actions.min.js",min_core:"5.4.5",version:"2.1.0"};jQuery.extend(!0,_R,{checkActions:function(e,t,o){if("stop"===_R.compare_version(extension).check)return!1;checkActions_intern(e,t,o)}});var checkActions_intern=function(e,t,o){o&&jQuery.each(o,function(o,a){a.delay=parseInt(a.delay,0)/1e3,e.addClass("tp-withaction"),t.fullscreen_esclistener||"exitfullscreen"!=a.action&&"togglefullscreen"!=a.action||(jQuery(document).keyup(function(t){27==t.keyCode&&jQuery("#rs-go-fullscreen").length>0&&e.trigger(a.event)}),t.fullscreen_esclistener=!0);var r="backgroundvideo"==a.layer?jQuery(".rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".tp-revslider-slidesli").find(".tp-videolayer"):jQuery("#"+a.layer);switch(-1!=jQuery.inArray(a.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&e.data("togglelisteners",!0),a.action){case"togglevideo":jQuery.each(r,function(t,o){var a=(o=jQuery(o)).data("videotoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videotoggledby",a)});break;case"togglelayer":jQuery.each(r,function(t,o){var r=(o=jQuery(o)).data("layertoggledby");void 0==r&&(r=new Array),r.push(e),o.data("layertoggledby",r),o.data("triggered_startstatus",a.layerstatus)});break;case"toggle_mute_video":case"toggle_global_mute_video":jQuery.each(r,function(t,o){var a=(o=jQuery(o)).data("videomutetoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)});break;case"toggleslider":void 0==t.slidertoggledby&&(t.slidertoggledby=new Array),t.slidertoggledby.push(e);break;case"togglefullscreen":void 0==t.fullscreentoggledby&&(t.fullscreentoggledby=new Array),t.fullscreentoggledby.push(e)}switch(e.on(a.event,function(){if("click"===a.event&&e.hasClass("tp-temporarydisabled"))return!1;var o="backgroundvideo"==a.layer?jQuery(".active-revslide .slotholder .rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".active-revslide .tp-videolayer").first():jQuery("#"+a.layer);if("stoplayer"==a.action||"togglelayer"==a.action||"startlayer"==a.action){if(o.length>0){var r=o.data();void 0!==r.clicked_time_stamp&&(new Date).getTime()-r.clicked_time_stamp>150&&(clearTimeout(r.triggerdelayIn),clearTimeout(r.triggerdelayOut)),r.clicked_time_stamp=(new Date).getTime(),"startlayer"==a.action||"togglelayer"==a.action&&"in"!=o.data("animdirection")?(r.animdirection="in",r.triggerstate="on",_R.toggleState(r.layertoggledby),_R.playAnimationFrame&&(clearTimeout(r.triggerdelayIn),r.triggerdelayIn=setTimeout(function(){_R.playAnimationFrame({caption:o,opt:t,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"})},1e3*a.delay))):("stoplayer"==a.action||"togglelayer"==a.action&&"out"!=o.data("animdirection"))&&(r.animdirection="out",r.triggered=!0,r.triggerstate="off",_R.stopVideo&&_R.stopVideo(o,t),_R.unToggleState(r.layertoggledby),_R.endMoveCaption&&(clearTimeout(r.triggerdelayOut),r.triggerdelayOut=setTimeout(function(){_R.playAnimationFrame({caption:o,opt:t,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})},1e3*a.delay)))}}else!_ISM||"playvideo"!=a.action&&"stopvideo"!=a.action&&"togglevideo"!=a.action&&"mutevideo"!=a.action&&"unmutevideo"!=a.action&&"toggle_mute_video"!=a.action&&"toggle_global_mute_video"!=a.action?(a.delay="NaN"===a.delay||NaN===a.delay?0:a.delay,_R.isSafari11()?actionSwitches(o,t,a,e):punchgs.TweenLite.delayedCall(a.delay,function(){actionSwitches(o,t,a,e)},[o,t,a,e])):actionSwitches(o,t,a,e)}),a.action){case"togglelayer":case"startlayer":case"playlayer":case"stoplayer":var l=(r=jQuery("#"+a.layer)).data();r.length>0&&void 0!==l&&(void 0!==l.frames&&"bytrigger"!=l.frames[0].delay||void 0===l.frames&&"bytrigger"!==l.start)&&(l.triggerstate="on")}})},actionSwitches=function(tnc,opt,a,_nc){switch(a.action){case"scrollbelow":a.speed=void 0!==a.speed?a.speed:400,a.ease=void 0!==a.ease?a.ease:punchgs.Power2.easeOut,_nc.addClass("tp-scrollbelowslider"),_nc.data("scrolloffset",a.offset),_nc.data("scrolldelay",a.delay),_nc.data("scrollspeed",a.speed),_nc.data("scrollease",a.ease);var off=getOffContH(opt.fullScreenOffsetContainer)||0,aof=parseInt(a.offset,0)||0;off=off-aof||0,opt.scrollRoot=jQuery(document);var sobj={_y:opt.scrollRoot.scrollTop()};punchgs.TweenLite.to(sobj,a.speed/1e3,{_y:opt.c.offset().top+jQuery(opt.li[0]).height()-off,ease:a.ease,onUpdate:function(){opt.scrollRoot.scrollTop(sobj._y)}});break;case"callback":eval(a.callback);break;case"jumptoslide":switch(a.slide.toLowerCase()){case"+1":case"next":opt.sc_indicator="arrow",_R.callingNewSlide(opt.c,1);break;case"previous":case"prev":case"-1":opt.sc_indicator="arrow",_R.callingNewSlide(opt.c,-1);break;default:var ts=jQuery.isNumeric(a.slide)?parseInt(a.slide,0):a.slide;_R.callingNewSlide(opt.c,ts)}break;case"simplelink":window.open(a.url,a.target);break;case"toggleslider":opt.noloopanymore=0,"playing"==opt.sliderstatus?(opt.c.revpause(),opt.forcepause_viatoggle=!0,_R.unToggleState(opt.slidertoggledby)):(opt.forcepause_viatoggle=!1,opt.c.revresume(),_R.toggleState(opt.slidertoggledby));break;case"pauseslider":opt.c.revpause(),_R.unToggleState(opt.slidertoggledby);break;case"playslider":opt.noloopanymore=0,opt.c.revresume(),_R.toggleState(opt.slidertoggledby);break;case"playvideo":tnc.length>0&&_R.playVideo(tnc,opt);break;case"stopvideo":tnc.length>0&&_R.stopVideo&&_R.stopVideo(tnc,opt);break;case"togglevideo":tnc.length>0&&(_R.isVideoPlaying(tnc,opt)?_R.stopVideo&&_R.stopVideo(tnc,opt):_R.playVideo(tnc,opt));break;case"mutevideo":tnc.length>0&&_R.muteVideo(tnc,opt);break;case"unmutevideo":tnc.length>0&&_R.unMuteVideo&&_R.unMuteVideo(tnc,opt);break;case"toggle_mute_video":tnc.length>0&&(_R.isVideoMuted(tnc,opt)?_R.unMuteVideo(tnc,opt):_R.muteVideo&&_R.muteVideo(tnc,opt)),_nc.toggleClass("rs-toggle-content-active");break;case"toggle_global_mute_video":!0===opt.globalmute?(opt.globalmute=!1,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.unMuteVideo&&_R.unMuteVideo(t,opt)})):(opt.globalmute=!0,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.muteVideo&&_R.muteVideo(t,opt)})),_nc.toggleClass("rs-toggle-content-active");break;case"simulateclick":tnc.length>0&&tnc.click();break;case"toggleclass":tnc.length>0&&(tnc.hasClass(a.classname)?tnc.removeClass(a.classname):tnc.addClass(a.classname));break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":if(jQuery(".rs-go-fullscreen").length>0&&("togglefullscreen"==a.action||"exitfullscreen"==a.action)){jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen");var gf=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");opt.minHeight=opt.oldminheight,opt.infullscreenmode=!1,opt.c.revredraw(),jQuery(window).trigger("resize"),_R.unToggleState(opt.fullscreentoggledby)}else if(0==jQuery(".rs-go-fullscreen").length&&("togglefullscreen"==a.action||"gofullscreen"==a.action)){var gf=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");gf.addClass("rs-go-fullscreen"),opt.oldminheight=opt.minHeight,opt.minHeight=jQuery(window).height(),opt.infullscreenmode=!0,opt.c.revredraw(),jQuery(window).trigger("resize"),_R.toggleState(opt.fullscreentoggledby)}break;default:var obj={};obj.event=a,obj.layer=_nc,opt.c.trigger("layeraction",[obj])}},getOffContH=function(e){if(void 0==e)return 0;if(e.split(",").length>1){var t=e.split(","),o=0;return t&&jQuery.each(t,function(e,t){jQuery(t).length>0&&(o+=jQuery(t).outerHeight(!0))}),o}return jQuery(e).height()}}(jQuery);

/********************************************
 * REVOLUTION 5.4 EXTENSION - CAROUSEL
 * @version: 1.2.1 (18.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c={alias:"Carousel Min JS",name:"revolution.extensions.carousel.min.js",min_core:"5.3.0",version:"1.2.1"};jQuery.extend(!0,b,{prepareCarousel:function(a,d,h,i){return"stop"!==b.compare_version(c).check&&(h=a.carousel.lastdirection=f(h,a.carousel.lastdirection),e(a),a.carousel.slide_offset_target=j(a),void(void 0!==i?g(a,h,!1,0):void 0==d?b.carouselToEvalPosition(a,h):g(a,h,!1)))},carouselToEvalPosition:function(a,c){var d=a.carousel;c=d.lastdirection=f(c,d.lastdirection);var e="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width,h=b.simp(e,a.slideamount,!1),i=h-Math.floor(h),j=0,k=-1*(Math.ceil(h)-h),l=-1*(Math.floor(h)-h);j=i>=.3&&"left"===c||i>=.7&&"right"===c?k:i<.3&&"left"===c||i<.7&&"right"===c?l:j,j="off"===d.infinity?h<0?h:e>a.slideamount-1?e-(a.slideamount-1):j:j,d.slide_offset_target=j*d.slide_width,0!==Math.abs(d.slide_offset_target)?g(a,c,!0):b.organiseCarousel(a,c)},organiseCarousel:function(a,b,c,d){b=void 0===b||"down"==b||"up"==b||null===b||jQuery.isEmptyObject(b)?"left":b;for(var e=a.carousel,f=new Array,g=e.slides.length,i=("right"===e.horizontal_align?a.width:0,0);i<g;i++){var j=i*e.slide_width+e.slide_offset;"on"===e.infinity&&(j=j>e.wrapwidth-e.inneroffset&&"right"==b?e.slide_offset-(e.slides.length-i)*e.slide_width:j,j=j<0-e.inneroffset-e.slide_width&&"left"==b?j+e.maxwidth:j),f[i]=j}var k=999;e.slides&&jQuery.each(e.slides,function(d,h){var i=f[d];"on"===e.infinity&&(i=i>e.wrapwidth-e.inneroffset&&"left"===b?f[0]-(g-d)*e.slide_width:i,i=i<0-e.inneroffset-e.slide_width?"left"==b?i+e.maxwidth:"right"===b?f[g-1]+(d+1)*e.slide_width:i:i);var j=new Object;j.left=i+e.inneroffset;var l="center"===e.horizontal_align?(Math.abs(e.wrapwidth/2)-(j.left+e.slide_width/2))/e.slide_width:(e.inneroffset-j.left)/e.slide_width,n="center"===e.horizontal_align?2:1;if((c&&Math.abs(l)<k||0===l)&&(k=Math.abs(l),e.focused=d),j.width=e.slide_width,j.x=0,j.transformPerspective=1200,j.transformOrigin="50% "+e.vertical_align,"on"===e.fadeout)if("on"===e.vary_fade)j.autoAlpha=1-Math.abs(1/Math.ceil(e.maxVisibleItems/n)*l);else switch(e.horizontal_align){case"center":j.autoAlpha=Math.abs(l)<Math.ceil(e.maxVisibleItems/n-1)?1:1-(Math.abs(l)-Math.floor(Math.abs(l)));break;case"left":j.autoAlpha=l<1&&l>0?1-l:Math.abs(l)>e.maxVisibleItems-1?1-(Math.abs(l)-(e.maxVisibleItems-1)):1;break;case"right":j.autoAlpha=l>-1&&l<0?1-Math.abs(l):l>e.maxVisibleItems-1?1-(Math.abs(l)-(e.maxVisibleItems-1)):1}else j.autoAlpha=Math.abs(l)<Math.ceil(e.maxVisibleItems/n)?1:0;if(void 0!==e.minScale&&e.minScale>0)if("on"===e.vary_scale){j.scale=1-Math.abs(e.minScale/100/Math.ceil(e.maxVisibleItems/n)*l);var o=(e.slide_width-e.slide_width*j.scale)*Math.abs(l)}else{j.scale=l>=1||l<=-1?1-e.minScale/100:(100-e.minScale*Math.abs(l))/100;var o=(e.slide_width-e.slide_width*(1-e.minScale/100))*Math.abs(l)}void 0!==e.maxRotation&&0!=Math.abs(e.maxRotation)&&("on"===e.vary_rotation?(j.rotationY=Math.abs(e.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(e.maxVisibleItems/n)*l))*e.maxRotation),j.autoAlpha=Math.abs(j.rotationY)>90?0:j.autoAlpha):j.rotationY=l>=1||l<=-1?e.maxRotation:Math.abs(l)*e.maxRotation,j.rotationY=l<0?j.rotationY*-1:j.rotationY),j.x=-1*e.space*l,j.left=Math.floor(j.left),j.x=Math.floor(j.x),void 0!==j.scale?l<0?j.x-o:j.x+o:j.x,j.zIndex=Math.round(100-Math.abs(5*l)),j.transformStyle="3D"!=a.parallax.type&&"3d"!=a.parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(h,j)}),d&&(a.c.find(".next-revslide").removeClass("next-revslide"),jQuery(e.slides[e.focused]).addClass("next-revslide"),a.c.trigger("revolution.nextslide.waiting"));e.wrapwidth/2-e.slide_offset,e.maxwidth+e.slide_offset-e.wrapwidth/2}});var d=function(a){var b=a.carousel;b.infbackup=b.infinity,b.maxVisiblebackup=b.maxVisibleItems,b.slide_globaloffset="none",b.slide_offset=0,b.wrap=a.c.find(".tp-carousel-wrapper"),b.slides=a.c.find(".tp-revslider-slidesli"),0!==b.maxRotation&&("3D"!=a.parallax.type&&"3d"!=a.parallax.type?punchgs.TweenLite.set(b.wrap,{perspective:1200,transformStyle:"flat"}):punchgs.TweenLite.set(b.wrap,{perspective:1600,transformStyle:"preserve-3d"})),void 0!==b.border_radius&&parseInt(b.border_radius,0)>0&&punchgs.TweenLite.set(a.c.find(".tp-revslider-slidesli"),{borderRadius:b.border_radius})},e=function(a){void 0===a.bw&&b.setSize(a);var c=a.carousel,e=b.getHorizontalOffset(a.c,"left"),f=b.getHorizontalOffset(a.c,"right");void 0===c.wrap&&d(a),c.slide_width="on"!==c.stretch?a.gridwidth[a.curWinRange]*a.bw:a.c.width(),c.maxwidth=a.slideamount*c.slide_width,c.maxVisiblebackup>c.slides.length+1&&(c.maxVisibleItems=c.slides.length+2),c.wrapwidth=c.maxVisibleItems*c.slide_width+(c.maxVisibleItems-1)*c.space,c.wrapwidth="auto"!=a.sliderLayout?c.wrapwidth>a.c.closest(".tp-simpleresponsive").width()?a.c.closest(".tp-simpleresponsive").width():c.wrapwidth:c.wrapwidth>a.ul.width()?a.ul.width():c.wrapwidth,c.infinity=c.wrapwidth>=c.maxwidth?"off":c.infbackup,c.wrapoffset="center"===c.horizontal_align?(a.c.width()-f-e-c.wrapwidth)/2:0,c.wrapoffset="auto"!=a.sliderLayout&&a.outernav?0:c.wrapoffset<e?e:c.wrapoffset;var g="hidden";"3D"!=a.parallax.type&&"3d"!=a.parallax.type||(g="visible"),"right"===c.horizontal_align?punchgs.TweenLite.set(c.wrap,{left:"auto",right:c.wrapoffset+"px",width:c.wrapwidth,overflow:g}):punchgs.TweenLite.set(c.wrap,{right:"auto",left:c.wrapoffset+"px",width:c.wrapwidth,overflow:g}),c.inneroffset="right"===c.horizontal_align?c.wrapwidth-c.slide_width:0,c.realoffset=Math.abs(c.wrap.position().left),c.windhalf=jQuery(window).width()/2},f=function(a,b){return null===a||jQuery.isEmptyObject(a)?b:void 0===a?"right":a},g=function(a,c,d,e){var g=a.carousel;c=g.lastdirection=f(c,g.lastdirection);var h=new Object,i=d?punchgs.Power2.easeOut:g.easing;h.from=0,h.to=g.slide_offset_target,e=void 0===e?g.speed/1e3:e,e=d?.4:e,void 0!==g.positionanim&&g.positionanim.pause(),g.positionanim=punchgs.TweenLite.to(h,e,{from:h.to,onUpdate:function(){g.slide_offset=g.slide_globaloffset+h.from,g.slide_offset=b.simp(g.slide_offset,g.maxwidth),b.organiseCarousel(a,c,!1,!1)},onComplete:function(){g.slide_globaloffset="off"===g.infinity?g.slide_globaloffset+g.slide_offset_target:b.simp(g.slide_globaloffset+g.slide_offset_target,g.maxwidth),g.slide_offset=b.simp(g.slide_offset,g.maxwidth),b.organiseCarousel(a,c,!1,!0);var e=jQuery(a.li[g.focused]);a.c.find(".next-revslide").removeClass("next-revslide"),d&&b.callingNewSlide(a.c,e.data("index"))},ease:i})},h=function(a,b){return Math.abs(a)>Math.abs(b)?a>0?a-Math.abs(Math.floor(a/b)*b):a+Math.abs(Math.floor(a/b)*b):a},i=function(a,b,c){var c,c,d=b-a,e=b-c-a;return d=h(d,c),e=h(e,c),Math.abs(d)>Math.abs(e)?e:d},j=function(a){var c=0,d=a.carousel;if(void 0!==d.positionanim&&d.positionanim.kill(),"none"==d.slide_globaloffset)d.slide_globaloffset=c="center"===d.horizontal_align?d.wrapwidth/2-d.slide_width/2:0;else{d.slide_globaloffset=d.slide_offset,d.slide_offset=0;var e=a.c.find(".processing-revslide").index(),f="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width;f=b.simp(f,a.slideamount,!1),e=e>=0?e:a.c.find(".active-revslide").index(),e=e>=0?e:0,c="off"===d.infinity?f-e:-i(f,e,a.slideamount),c*=d.slide_width}return c}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.5 EXTENSION - KEN BURN
 * @version: 1.3.1 (15.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c={alias:"KenBurns Min JS",name:"revolution.extensions.kenburn.min.js",min_core:"5.4",version:"1.3.1"};jQuery.extend(!0,b,{stopKenBurn:function(a){if("stop"===b.compare_version(c).check)return!1;void 0!=a.data("kbtl")&&a.data("kbtl").pause()},startKenBurn:function(a,d,e){if("stop"===b.compare_version(c).check)return!1;var f=a.data(),g=a.find(".defaultimg"),h=g.data("lazyload")||g.data("src"),j=(f.owidth,f.oheight,"carousel"===d.sliderType?d.carousel.slide_width:d.ul.width()),k=d.ul.height();if(a.data("kbtl")&&a.data("kbtl").kill(),e=e||0,0==a.find(".tp-kbimg").length){var m=g.data("mediafilter");m=void 0===m?"":m,a.append('<div class="tp-kbimg-wrap '+m+'" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+h+'" style="position:absolute;" width="'+f.owidth+'" height="'+f.oheight+'"></div>'),a.data("kenburn",a.find(".tp-kbimg"))}var n=function(a,b,c,d,e,f,g){var h=a*c,i=b*c,j=Math.abs(d-h),k=Math.abs(e-i),l=new Object;return l.l=(0-f)*j,l.r=l.l+h,l.t=(0-g)*k,l.b=l.t+i,l.h=f,l.v=g,l},o=function(a,b,c,d,e){var f=a.bgposition.split(" ")||"center center",g="center"==f[0]?"50%":"left"==f[0]||"left"==f[1]?"0%":"right"==f[0]||"right"==f[1]?"100%":f[0],h="center"==f[1]?"50%":"top"==f[0]||"top"==f[1]?"0%":"bottom"==f[0]||"bottom"==f[1]?"100%":f[1];g=parseInt(g,0)/100||0,h=parseInt(h,0)/100||0;var i=new Object;return i.start=n(e.start.width,e.start.height,e.start.scale,b,c,g,h),i.end=n(e.start.width,e.start.height,e.end.scale,b,c,g,h),i},p=function(a,b,c){var d=c.scalestart/100,e=c.scaleend/100,f=void 0!=c.offsetstart?c.offsetstart.split(" ")||[0,0]:[0,0],g=void 0!=c.offsetend?c.offsetend.split(" ")||[0,0]:[0,0];c.bgposition="center center"==c.bgposition?"50% 50%":c.bgposition;var h=new Object,i=a*d,k=(c.owidth,c.oheight,a*e);c.owidth,c.oheight;if(h.start=new Object,h.starto=new Object,h.end=new Object,h.endo=new Object,h.start.width=a,h.start.height=h.start.width/c.owidth*c.oheight,h.start.height<b){var m=b/h.start.height;h.start.height=b,h.start.width=h.start.width*m}h.start.transformOrigin=c.bgposition,h.start.scale=d,h.end.scale=e,c.rotatestart=0===c.rotatestart?.01:c.rotatestart,h.start.rotation=c.rotatestart+"deg",h.end.rotation=c.rotateend+"deg";var n=o(c,a,b,f,h);f[0]=parseFloat(f[0])+n.start.l,g[0]=parseFloat(g[0])+n.end.l,f[1]=parseFloat(f[1])+n.start.t,g[1]=parseFloat(g[1])+n.end.t;var p=n.start.r-n.start.l,q=n.start.b-n.start.t,r=n.end.r-n.end.l,s=n.end.b-n.end.t;return f[0]=f[0]>0?0:p+f[0]<a?a-p:f[0],g[0]=g[0]>0?0:r+g[0]<a?a-r:g[0],f[1]=f[1]>0?0:q+f[1]<b?b-q:f[1],g[1]=g[1]>0?0:s+g[1]<b?b-s:g[1],h.starto.x=f[0]+"px",h.starto.y=f[1]+"px",h.endo.x=g[0]+"px",h.endo.y=g[1]+"px",h.end.ease=h.endo.ease=c.ease,h.end.force3D=h.endo.force3D=!0,h};void 0!=a.data("kbtl")&&(a.data("kbtl").kill(),a.removeData("kbtl"));var q=a.data("kenburn"),r=q.parent(),s=p(j,k,f),t=new punchgs.TimelineLite;if(t.pause(),s.start.transformOrigin="0% 0%",s.starto.transformOrigin="0% 0%",t.add(punchgs.TweenLite.fromTo(q,f.duration/1e3,s.start,s.end),0),t.add(punchgs.TweenLite.fromTo(r,f.duration/1e3,s.starto,s.endo),0),void 0!==f.blurstart&&void 0!==f.blurend&&(0!==f.blurstart||0!==f.blurend)){var u={a:f.blurstart},v={a:f.blurend,ease:s.endo.ease},w=new punchgs.TweenLite(u,f.duration/1e3,v);w.eventCallback("onUpdate",function(a){punchgs.TweenLite.set(a,{filter:"blur("+u.a+"px)",webkitFilter:"blur("+u.a+"px)"})},[r]),t.add(w,0)}t.progress(e),t.play(),a.data("kbtl",t)}})}(jQuery);

/************************************************
 * REVOLUTION 5.4.6.5 EXTENSION - LAYER ANIMATION
 * @version: 3.6.5 (10.06.2018)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(e){"use strict";var A=jQuery.fn.revolution,l=(A.is_mobile(),A.is_android(),{alias:"LayerAnimation Min JS",name:"revolution.extensions.layeranimation.min.js",min_core:"5.4.6.4",version:"3.6.5"});jQuery.extend(!0,A,{updateMarkup:function(e,t){var i=jQuery(e).data();if(void 0!==i.start&&!i.frames_added&&void 0===i.frames){var a=new Array,n=F(B(),i.transform_in,void 0,!1),r=F(B(),i.transform_out,void 0,!1),o=F(B(),i.transform_hover,void 0,!1);jQuery.isNumeric(i.end)&&jQuery.isNumeric(i.start)&&jQuery.isNumeric(n.speed)&&(i.end=parseInt(i.end,0)-(parseInt(i.start,0)+parseFloat(n.speed,0))),a.push({frame:"0",delay:i.start,from:i.transform_in,to:i.transform_idle,split:i.splitin,speed:n.speed,ease:n.anim.ease,mask:i.mask_in,splitdelay:i.elementdelay}),a.push({frame:"5",delay:i.end,to:i.transform_out,split:i.splitout,speed:r.speed,ease:r.anim.ease,mask:i.mask_out,splitdelay:i.elementdelay}),i.transform_hover&&a.push({frame:"hover",to:i.transform_hover,style:i.style_hover,speed:o.speed,ease:o.anim.ease,splitdelay:i.elementdelay}),i.frames=a}if(!i.frames_added){if(i.inframeindex=0,i.outframeindex=-1,i.hoverframeindex=-1,void 0!==i.frames)for(var s=0;s<i.frames.length;s++)void 0!==i.frames[s].sfx_effect&&0<=i.frames[s].sfx_effect.indexOf("block")&&(0===s?(i.frames[s].from="o:0",i.frames[s].to="o:1"):i.frames[s].to="o:0",i._sfx="block"),void 0===i.frames[0].from&&(i.frames[0].from="o:inherit"),0===i.frames[0].delay&&(i.frames[0].delay=20),"hover"===i.frames[s].frame?i.hoverframeindex=s:"frame_999"!==i.frames[s].frame&&"frame_out"!==i.frames[s].frame&&"last"!==i.frames[s].frame&&"end"!==i.frames[s].frame||(i.outframeindex=s),void 0!==i.frames[s].split&&i.frames[s].split.match(/chars|words|lines/g)&&(i.splittext=!0);i.outframeindex=-1===i.outframeindex?-1===i.hoverframeindex?i.frames.length-1:i.frames.length-2:i.outframeindex,i.frames_added=!0}},animcompleted:function(e,t){var i=e.data(),a=i.videotype,n=i.autoplay,r=i.autoplayonlyfirsttime;null!=a&&"none"!=a&&(1==n||"true"==n||"on"==n||"1sttime"==n||r?(("carousel"!==t.sliderType||"carousel"===t.sliderType&&"on"===t.carousel.showLayersAllTime&&e.closest("li").hasClass("active-revslide")||"carousel"===t.sliderType&&"on"!==t.carousel.showLayersAllTime&&e.closest("li").hasClass("active-revslide"))&&A.playVideo(e,t),A.toggleState(e.data("videotoggledby")),(r||"1sttime"==n)&&(i.autoplayonlyfirsttime=!1,i.autoplay="off")):("no1sttime"==n&&(i.datasetautoplay="on"),A.unToggleState(e.data("videotoggledby"))))},handleStaticLayers:function(e,t){var i=parseInt(e.data("startslide"),0),a=parseInt(e.data("endslide"),0);i<0&&(i=0),a<0&&(a=t.realslideamount),0===i&&a===t.realslideamount-1&&(a=t.realslideamount+1),e.data("startslide",i),e.data("endslide",a)},animateTheCaptions:function(e){if("stop"===A.compare_version(l).check)return!1;var p=e.opt,t=e.slide,n=e.recall,i=e.maintimeline,r=e.preset,o=e.startslideanimat,s="carousel"===p.sliderType?0:p.width/2-p.gridwidth[p.curWinRange]*p.bw/2,a=t.data("index");if(p.layers=p.layers||new Object,p.layers[a]=p.layers[a]||t.find(".tp-caption"),p.layers.static=p.layers.static||p.c.find(".tp-static-layers").find(".tp-caption"),void 0===p.timelines&&A.createTimelineStructure(p),p.conh=p.c.height(),p.conw=p.c.width(),p.ulw=p.ul.width(),p.ulh=p.ul.height(),p.debugMode){t.addClass("indebugmode"),t.find(".helpgrid").remove(),p.c.find(".hglayerinfo").remove(),t.append('<div class="helpgrid" style="width:'+p.gridwidth[p.curWinRange]*p.bw+"px;height:"+p.gridheight[p.curWinRange]*p.bw+'px;"></div>');var d=t.find(".helpgrid");d.append('<div class="hginfo">Zoom:'+Math.round(100*p.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+p.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+p.gridwidth[p.curWinRange]+"x"+p.gridheight[p.curWinRange]+"</div>"),p.c.append('<div class="hglayerinfo"></div>'),d.append('<div class="tlhg"></div>')}void 0!==a&&p.layers[a]&&jQuery.each(p.layers[a],function(e,t){var i=jQuery(this);A.updateMarkup(this,p),A.prepareSingleCaption({caption:i,opt:p,offsetx:s,offsety:0,index:e,recall:n,preset:r}),r&&0!==o||A.buildFullTimeLine({caption:i,opt:p,offsetx:s,offsety:0,index:e,recall:n,preset:r,regenerate:0===o}),n&&"carousel"===p.sliderType&&"on"===p.carousel.showLayersAllTime&&A.animcompleted(i,p)}),p.layers.static&&jQuery.each(p.layers.static,function(e,t){var i=jQuery(this),a=i.data();!0!==a.hoveredstatus&&!0!==a.inhoveroutanimation?(A.updateMarkup(this,p),A.prepareSingleCaption({caption:i,opt:p,offsetx:s,offsety:0,index:e,recall:n,preset:r}),r&&0!==o||!0===a.veryfirstststic||(A.buildFullTimeLine({caption:i,opt:p,offsetx:s,offsety:0,index:e,recall:n,preset:r,regenerate:0===o}),a.veryfirstststic=!0),n&&"carousel"===p.sliderType&&"on"===p.carousel.showLayersAllTime&&A.animcompleted(i,p)):A.prepareSingleCaption({caption:i,opt:p,offsetx:s,offsety:0,index:e,recall:n,preset:r})});var g=-1===p.nextSlide||void 0===p.nextSlide?0:p.nextSlide;void 0!==p.rowzones&&(g=g>p.rowzones.length?p.rowzones.length:g),null!=p.rowzones&&0<p.rowzones.length&&null!=p.rowzones[g]&&0<=g&&g<=p.rowzones.length&&0<p.rowzones[g].length&&A.setSize(p),r||void 0!==o&&(void 0!==a&&jQuery.each(p.timelines[a].layers,function(e,t){var i=t.layer.data();"none"!==t.wrapper&&void 0!==t.wrapper||("keep"==t.triggerstate&&"on"===i.triggerstate?A.playAnimationFrame({caption:t.layer,opt:p,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}):t.timeline.restart())}),p.timelines.staticlayers&&jQuery.each(p.timelines.staticlayers.layers,function(e,t){var i=t.layer.data(),a=g>=t.firstslide&&g<=t.lastslide,n=g<t.firstslide||g>t.lastslide,r=t.timeline.getLabelTime("slide_"+t.firstslide),o=t.timeline.getLabelTime("slide_"+t.lastslide),s=i.static_layer_timeline_time,d="in"===i.animdirection||"out"!==i.animdirection&&void 0,l="bytrigger"===i.frames[0].delay,m=(i.frames[i.frames.length-1].delay,i.triggered_startstatus),c=i.lasttriggerstate;!0!==i.hoveredstatus&&1!=i.inhoveroutanimation&&(void 0!==s&&d&&("keep"==c?(A.playAnimationFrame({caption:t.layer,opt:p,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),i.triggeredtimeline.time(s)):!0!==i.hoveredstatus&&t.timeline.time(s)),"reset"===c&&"hidden"===m&&(t.timeline.time(0),i.animdirection="out"),a?d?g===t.lastslide&&(t.timeline.play(o),i.animdirection="in"):(l||"in"===i.animdirection||t.timeline.play(r),("visible"==m&&"keep"!==c||"keep"===c&&!0===d||"visible"==m&&void 0===d)&&(t.timeline.play(r+.01),i.animdirection="in")):n&&d&&t.timeline.play("frame_999"))})),null!=i&&setTimeout(function(){i.resume()},30)},prepareSingleCaption:function(e){var t=e.caption,i=t.data(),a=e.opt,n=e.recall,r=e.recall,o=(e.preset,jQuery("body").hasClass("rtl"));if(i._pw=void 0===i._pw?t.closest(".tp-parallax-wrap"):i._pw,i._lw=void 0===i._lw?t.closest(".tp-loop-wrap"):i._lw,i._mw=void 0===i._mw?t.closest(".tp-mask-wrap"):i._mw,i._responsive=i.responsive||"on",i._respoffset=i.responsive_offset||"on",i._ba=i.basealign||"grid",i._gw="grid"===i._ba?a.width:a.ulw,i._gh="grid"===i._ba?a.height:a.ulh,i._lig=void 0===i._lig?t.hasClass("rev_layer_in_group")?t.closest(".rev_group"):t.hasClass("rev_layer_in_column")?t.closest(".rev_column_inner"):t.hasClass("rev_column_inner")?t.closest(".rev_row"):"none":i._lig,i._column=void 0===i._column?t.hasClass("rev_column_inner")?t.closest(".rev_column"):"none":i._column,i._row=void 0===i._row?t.hasClass("rev_column_inner")?t.closest(".rev_row"):"none":i._row,i._ingroup=void 0===i._ingroup?!(t.hasClass("rev_group")||!t.closest(".rev_group")):i._ingroup,i._isgroup=void 0===i._isgroup?!!t.hasClass("rev_group"):i._isgroup,i._nctype=i.type||"none",i._cbgc_auto=void 0===i._cbgc_auto?"column"===i._nctype&&i._pw.find(".rev_column_bg_auto_sized"):i._cbgc_auto,i._cbgc_man=void 0===i._cbgc_man?"column"===i._nctype&&i._pw.find(".rev_column_bg_man_sized"):i._cbgc_man,i._slideid=i._slideid||t.closest(".tp-revslider-slidesli").data("index"),i._id=void 0===i._id?t.data("id")||t.attr("id"):i._id,i._slidelink=void 0===i._slidelink?void 0!==t.hasClass("slidelink")&&t.hasClass("slidelink"):i._slidelink,void 0===i._li&&(t.hasClass("tp-static-layer")?(i._isstatic=!0,i._li=t.closest(".tp-static-layers"),i._slideid="staticlayers"):i._li=t.closest(".tp-revslider-slidesli")),i._row=void 0===i._row?"column"===i._nctype&&i._pw.closest(".rev_row"):i._row,void 0===i._togglelisteners&&t.find(".rs-toggled-content")?(i._togglelisteners=!0,void 0===i.actions&&t.click(function(){A.swaptoggleState(t)})):i._togglelisteners=!1,"fullscreen"==a.sliderLayout&&(e.offsety=i._gh/2-a.gridheight[a.curWinRange]*a.bh/2),("on"==a.autoHeight||null!=a.minHeight&&0<a.minHeight)&&(e.offsety=a.conh/2-a.gridheight[a.curWinRange]*a.bh/2),e.offsety<0&&(e.offsety=0),a.debugMode){t.closest("li").find(".helpgrid").css({top:e.offsety+"px",left:e.offsetx+"px"});var s=a.c.find(".hglayerinfo");t.on("hover, mouseenter",function(){var i="";t.data()&&jQuery.each(t.data(),function(e,t){"object"!=typeof t&&(i=i+'<span style="white-space:nowrap"><span style="color:#27ae60">'+e+":</span>"+t+"</span>&nbsp; &nbsp; ")}),s.html(i)})}if("off"===(void 0===i.visibility?"oon":N(i.visibility,a)[a.forcedWinRange]||N(i.visibility,a)||"ooon")||i._gw<a.hideCaptionAtLimit&&"on"==i.captionhidden||i._gw<a.hideAllCaptionAtLimit?i._pw.addClass("tp-hidden-caption"):i._pw.removeClass("tp-hidden-caption"),i.layertype="html",e.offsetx<0&&(e.offsetx=0),null!=i.thumbimage&&null==i.videoposter&&(i.videoposter=i.thumbimage),0<t.find("img").length){var d=t.find("img");i.layertype="image",0==d.width()&&d.css({width:"auto"}),0==d.height()&&d.css({height:"auto"}),null==d.data("ww")&&0<d.width()&&d.data("ww",d.width()),null==d.data("hh")&&0<d.height()&&d.data("hh",d.height());var l=d.data("ww"),m=d.data("hh"),c="slide"==i._ba?a.ulw:a.gridwidth[a.curWinRange],p="slide"==i._ba?a.ulh:a.gridheight[a.curWinRange],g="full"===(l=N(d.data("ww"),a)[a.curWinRange]||N(d.data("ww"),a)||"auto")||"full-proportional"===l,u="full"===(m=N(d.data("hh"),a)[a.curWinRange]||N(d.data("hh"),a)||"auto")||"full-proportional"===m;if("full-proportional"===l){var f=d.data("owidth"),h=d.data("oheight");f/c<h/p?m=h*((l=c)/f):l=f*((m=p)/h)}else l=g?c:!jQuery.isNumeric(l)&&0<l.indexOf("%")?l:parseFloat(l),m=u?p:!jQuery.isNumeric(m)&&0<m.indexOf("%")?m:parseFloat(m);l=void 0===l?0:l,m=void 0===m?0:m,"off"!==i._responsive?("grid"!=i._ba&&g?jQuery.isNumeric(l)?d.css({width:l+"px"}):d.css({width:l}):jQuery.isNumeric(l)?d.css({width:l*a.bw+"px"}):d.css({width:l}),"grid"!=i._ba&&u?jQuery.isNumeric(m)?d.css({height:m+"px"}):d.css({height:m}):jQuery.isNumeric(m)?d.css({height:m*a.bh+"px"}):d.css({height:m})):d.css({width:l,height:m}),i._ingroup&&"row"!==i._nctype&&(void 0!==l&&!jQuery.isNumeric(l)&&"string"===jQuery.type(l)&&0<l.indexOf("%")&&punchgs.TweenLite.set([i._lw,i._pw,i._mw],{minWidth:l}),void 0!==m&&!jQuery.isNumeric(m)&&"string"===jQuery.type(m)&&0<m.indexOf("%")&&punchgs.TweenLite.set([i._lw,i._pw,i._mw],{minHeight:m}))}if("slide"===i._ba)e.offsetx=0,e.offsety=0;else if(i._isstatic&&void 0!==a.carousel&&void 0!==a.carousel.horizontal_align&&"carousel"===a.sliderType){switch(a.carousel.horizontal_align){case"center":e.offsetx=0+(a.ulw-a.gridwidth[a.curWinRange]*a.bw)/2;break;case"left":break;case"right":e.offsetx=a.ulw-a.gridwidth[a.curWinRange]*a.bw}e.offsetx=e.offsetx<0?0:e.offsetx}var v="html5"==i.audio?"audio":"video";if(t.hasClass("tp-videolayer")||t.hasClass("tp-audiolayer")||0<t.find("iframe").length||0<t.find(v).length){if(i.layertype="video",A.manageVideoLayer&&A.manageVideoLayer(t,a,n,r),!n&&!r){i.videotype;A.resetVideo&&A.resetVideo(t,a,e.preset)}var _=i.aspectratio;null!=_&&1<_.split(":").length&&A.prepareCoveredVideo(a,t);d=t.find("iframe")?t.find("iframe"):d=t.find(v);var b=!t.find("iframe"),y=t.hasClass("coverscreenvideo");d.css({display:"block"}),null==t.data("videowidth")&&(t.data("videowidth",d.width()),t.data("videoheight",d.height()));l=N(t.data("videowidth"),a)[a.curWinRange]||N(t.data("videowidth"),a)||"auto",m=N(t.data("videoheight"),a)[a.curWinRange]||N(t.data("videoheight"),a)||"auto";l="auto"===l||!jQuery.isNumeric(l)&&0<l.indexOf("%")?"auto"===l?"auto":"grid"===i._ba?a.gridwidth[a.curWinRange]*a.bw:i._gw:parseFloat(l)*a.bw+"px",m="auto"===m||!jQuery.isNumeric(m)&&0<m.indexOf("%")?"auto"===m?"auto":"grid"===i._ba?a.gridheight[a.curWinRange]*a.bw:i._gh:parseFloat(m)*a.bh+"px",i.cssobj=void 0===i.cssobj?V(t,0):i.cssobj;var w=Z(i.cssobj,a);if("auto"==w.lineHeight&&(w.lineHeight=w.fontSize+4),t.hasClass("fullscreenvideo")||y){e.offsetx=0,e.offsety=0,t.data("x",0),t.data("y",0);var x=i._gh;"on"==a.autoHeight&&(x=a.conh),t.css({width:i._gw,height:x})}else punchgs.TweenLite.set(t,{paddingTop:Math.round(w.paddingTop*a.bh)+"px",paddingBottom:Math.round(w.paddingBottom*a.bh)+"px",paddingLeft:Math.round(w.paddingLeft*a.bw)+"px",paddingRight:Math.round(w.paddingRight*a.bw)+"px",marginTop:w.marginTop*a.bh+"px",marginBottom:w.marginBottom*a.bh+"px",marginLeft:w.marginLeft*a.bw+"px",marginRight:w.marginRight*a.bw+"px",borderTopWidth:Math.round(w.borderTopWidth*a.bh)+"px",borderBottomWidth:Math.round(w.borderBottomWidth*a.bh)+"px",borderLeftWidth:Math.round(w.borderLeftWidth*a.bw)+"px",borderRightWidth:Math.round(w.borderRightWidth*a.bw)+"px",width:l,height:m});(0==b&&!y||1!=i.forcecover&&!t.hasClass("fullscreenvideo")&&!y)&&(d.width(l),d.height(m)),i._ingroup&&null!==i.videowidth&&void 0!==i.videowidth&&!jQuery.isNumeric(i.videowidth)&&0<i.videowidth.indexOf("%")&&punchgs.TweenLite.set([i._lw,i._pw,i._mw],{minWidth:i.videowidth})}E(t,a,0,i._responsive),t.hasClass("tp-resizeme")&&t.find("*").each(function(){E(jQuery(this),a,"rekursive",i._responsive)});var T=t.outerHeight(),k=t.css("backgroundColor");D(t,".frontcorner","left","borderRight","borderTopColor",T,k),D(t,".frontcornertop","left","borderRight","borderBottomColor",T,k),D(t,".backcorner","right","borderLeft","borderBottomColor",T,k),D(t,".backcornertop","right","borderLeft","borderTopColor",T,k),"on"==a.fullScreenAlignForce&&(e.offsetx=0,e.offsety=0),"block"===i._sfx&&void 0===i._bmask&&(i._bmask=jQuery('<div class="tp-blockmask"></div>'),i._mw.append(i._bmask)),i.arrobj=new Object,i.arrobj.voa=N(i.voffset,a)[a.curWinRange]||N(i.voffset,a)[0],i.arrobj.hoa=N(i.hoffset,a)[a.curWinRange]||N(i.hoffset,a)[0],i.arrobj.elx=N(i.x,a)[a.curWinRange]||N(i.x,a)[0],i.arrobj.ely=N(i.y,a)[a.curWinRange]||N(i.y,a)[0];var j=0==i.arrobj.voa.length?0:i.arrobj.voa,L=0==i.arrobj.hoa.length?0:i.arrobj.hoa,I=0==i.arrobj.elx.length?0:i.arrobj.elx,W=0==i.arrobj.ely.length?0:i.arrobj.ely;i.eow=t.outerWidth(!0),i.eoh=t.outerHeight(!0),0==i.eow&&0==i.eoh&&(i.eow=a.ulw,i.eoh=a.ulh);var R="off"!==i._respoffset?parseInt(j,0)*a.bw:parseInt(j,0),C="off"!==i._respoffset?parseInt(L,0)*a.bw:parseInt(L,0),z="grid"===i._ba?a.gridwidth[a.curWinRange]*a.bw:i._gw,O="grid"===i._ba?a.gridheight[a.curWinRange]*a.bw:i._gh;"on"==a.fullScreenAlignForce&&(z=a.ulw,O=a.ulh),"none"!==i._lig&&null!=i._lig&&(z=i._lig.width(),O=i._lig.height(),e.offsetx=0,e.offsety=0),I="center"===I||"middle"===I?z/2-i.eow/2+C:"left"===I?C:"right"===I?z-i.eow-C:"off"!==i._respoffset?I*a.bw:I,W="center"==W||"middle"==W?O/2-i.eoh/2+R:"top"==W?R:"bottom"==W?O-i.eoh-R:"off"!==i._respoffset?W*a.bw:W,o&&!i._slidelink&&(I+=i.eow),i._slidelink&&(I=0),i.calcx=parseInt(I,0)+e.offsetx,i.calcy=parseInt(W,0)+e.offsety;var Q=t.css("z-Index");if("row"!==i._nctype&&"column"!==i._nctype)punchgs.TweenLite.set(i._pw,{zIndex:Q,top:i.calcy,left:i.calcx,overwrite:"auto"});else if("row"!==i._nctype)punchgs.TweenLite.set(i._pw,{zIndex:Q,width:i.columnwidth,top:0,left:0,overwrite:"auto"});else if("row"===i._nctype){var S="grid"===i._ba?z+"px":"100%";punchgs.TweenLite.set(i._pw,{zIndex:Q,width:S,top:0,left:e.offsetx,overwrite:"auto"})}if(void 0!==i.blendmode&&punchgs.TweenLite.set(i._pw,{mixBlendMode:i.blendmode}),"row"===i._nctype&&(i.columnbreak<=a.curWinRange?t.addClass("rev_break_columns"):t.removeClass("rev_break_columns")),"on"==i.loopanimation&&punchgs.TweenLite.set(i._lw,{minWidth:i.eow,minHeight:i.eoh}),"column"===i._nctype){var M=void 0!==t[0]._gsTransform?t[0]._gsTransform.y:0,P=parseInt(i._column[0].style.paddingTop,0);punchgs.TweenLite.set(t,{y:0}),punchgs.TweenLite.set(i._cbgc_man,{y:parseInt(P+i._column.offset().top-t.offset().top,0)}),punchgs.TweenLite.set(t,{y:M})}i._ingroup&&"row"!==i._nctype&&(void 0!==i._groupw&&!jQuery.isNumeric(i._groupw)&&0<i._groupw.indexOf("%")&&punchgs.TweenLite.set([i._lw,i._pw,i._mw],{minWidth:i._groupw}),void 0!==i._grouph&&!jQuery.isNumeric(i._grouph)&&0<i._grouph.indexOf("%")&&punchgs.TweenLite.set([i._lw,i._pw,i._mw],{minHeight:i._grouph}))},createTimelineStructure:function(s){s.timelines=s.timelines||new Object,s.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function(){var e=jQuery(this),o=e.data("index");s.timelines[o]=s.timelines[o]||{},s.timelines[o].layers=s.timelines[o].layers||new Object,e.find(".tp-caption").each(function(e){var t,i,a,n,r;t=jQuery(this),i=s.timelines[o].layers,a=o,r=new punchgs.TimelineLite({paused:!0}),(i=i||new Object)[t.attr("id")]=i[t.attr("id")]||new Object,"staticlayers"===a&&(i[t.attr("id")].firstslide=t.data("startslide"),i[t.attr("id")].lastslide=t.data("endslide")),t.data("slideid",a),i[t.attr("id")].defclasses=n=t[0].className,i[t.attr("id")].wrapper=0<=n.indexOf("rev_layer_in_column")?t.closest(".rev_column_inner"):0<=n.indexOf("rev_column_inner")?t.closest(".rev_row"):0<=n.indexOf("rev_layer_in_group")?t.closest(".rev_group"):"none",i[t.attr("id")].timeline=r,i[t.attr("id")].layer=t,i[t.attr("id")].triggerstate=t.data("lasttriggerstate"),i[t.attr("id")].dchildren=0<=n.indexOf("rev_row")?t[0].getElementsByClassName("rev_column_inner"):0<=n.indexOf("rev_column_inner")?t[0].getElementsByClassName("tp-caption"):0<=n.indexOf("rev_group")?t[0].getElementsByClassName("rev_layer_in_group"):"none",t.data("timeline",r)})})},buildFullTimeLine:function(e){var t,i,a=e.caption,n=a.data(),r=e.opt,o={},s=h();if(!(t=r.timelines[n._slideid].layers[n._id]).generated||!0===e.regenerate){if(i=t.timeline,t.generated=!0,void 0!==n.current_timeline&&!0!==e.regenerate?(n.current_timeline_pause=n.current_timeline.paused(),n.current_timeline_time=n.current_timeline.time(),n.current_is_nc_timeline=i===n.current_timeline,n.static_layer_timeline_time=n.current_timeline_time):(n.static_layer_timeline_time=n.current_timeline_time,n.current_timeline_time=0,n.current_timeline&&n.current_timeline.clear()),i.clear(),o.svg=null!=n.svg_src&&a.find("svg"),o.svg&&(n.idlesvg=f(n.svg_idle,u()),punchgs.TweenLite.set(o.svg,n.idlesvg.anim)),-1!==n.hoverframeindex&&void 0!==n.hoverframeindex&&!a.hasClass("rs-hover-ready")){if(a.addClass("rs-hover-ready"),n.hovertimelines={},n.hoveranim=F(s,n.frames[n.hoverframeindex].to),n.hoveranim=v(n.hoveranim,n.frames[n.hoverframeindex].style),o.svg){var d=f(n.svg_hover,u());null!=n.hoveranim.anim.color&&(d.anim.fill=n.hoveranim.anim.color,n.idlesvg.anim.css.fill=o.svg.css("fill")),n.hoversvg=d}a.hover(function(e){var t={caption:jQuery(e.currentTarget),opt:r,firstframe:"frame_0",lastframe:"frame_999"},i=(g(t),t.caption),a=i.data(),n=a.frames[a.hoverframeindex];a.forcehover=n.force,a.hovertimelines.item=punchgs.TweenLite.to(i,n.speed/1e3,a.hoveranim.anim),(a.hoverzIndex||a.hoveranim.anim&&a.hoveranim.anim.zIndex)&&(a.basiczindex=void 0===a.basiczindex?a.cssobj.zIndex:a.basiczindex,a.hoverzIndex=void 0===a.hoverzIndex?a.hoveranim.anim.zIndex:a.hoverzIndex,a.inhoverinanimation=!0,0===n.speed&&(a.inhoverinanimation=!1),a.hovertimelines.pwhoveranim=punchgs.TweenLite.to(a._pw,n.speed/1e3,{overwrite:"auto",zIndex:a.hoverzIndex}),a.hovertimelines.pwhoveranim.eventCallback("onComplete",function(e){e.inhoverinanimation=!1},[a])),o.svg&&(a.hovertimelines.svghoveranim=punchgs.TweenLite.to([o.svg,o.svg.find("path")],n.speed/1e3,a.hoversvg.anim)),a.hoveredstatus=!0},function(e){var t={caption:jQuery(e.currentTarget),opt:r,firstframe:"frame_0",lastframe:"frame_999"},i=(g(t),t.caption),a=i.data(),n=a.frames[a.hoverframeindex];a.hoveredstatus=!1,a.inhoveroutanimation=!0,a.hovertimelines.item.pause(),a.hovertimelines.item=punchgs.TweenLite.to(i,n.speed/1e3,jQuery.extend(!0,{},a._gsTransformTo)),0==n.speed&&(a.inhoveroutanimation=!1),a.hovertimelines.item.eventCallback("onComplete",function(e){e.inhoveroutanimation=!1},[a]),void 0!==a.hovertimelines.pwhoveranim&&(a.hovertimelines.pwhoveranim=punchgs.TweenLite.to(a._pw,n.speed/1e3,{overwrite:"auto",zIndex:a.basiczindex})),o.svg&&punchgs.TweenLite.to([o.svg,o.svg.find("path")],n.speed/1e3,a.idlesvg.anim)})}for(var l=0;l<n.frames.length;l++)if(l!==n.hoverframeindex){var m=l===n.inframeindex?"frame_0":l===n.outframeindex||"frame_999"===n.frames[l].frame?"frame_999":"frame_"+l;t[n.frames[l].framename=m]={},t[m].timeline=new punchgs.TimelineLite({align:"normal"});var c=n.frames[l].delay,p=(n.triggered_startstatus,void 0!==c?0<=jQuery.inArray(c,["slideenter","bytrigger","wait"])?c:parseInt(c,0)/1e3:"wait");void 0!==t.firstslide&&"frame_0"===m&&(i.addLabel("slide_"+t.firstslide+"_pause",0),i.addPause("slide_"+t.firstslide+"_pause"),i.addLabel("slide_"+t.firstslide,"+=0.005")),void 0!==t.lastslide&&"frame_999"===m&&(i.addLabel("slide_"+t.lastslide+"_pause","+=0.01"),i.addPause("slide_"+t.lastslide+"_pause"),i.addLabel("slide_"+t.lastslide,"+=0.005")),jQuery.isNumeric(p)?i.addLabel(m,"+="+p):(i.addLabel("pause_"+l,"+=0.01"),i.addPause("pause_"+l),i.addLabel(m,"+=0.01")),i=A.createFrameOnTimeline({caption:e.caption,timeline:i,label:m,frameindex:l,opt:r})}e.regenerate||(n.current_is_nc_timeline&&(n.current_timeline=i),n.current_timeline_pause?i.pause(n.current_timeline_time):i.time(n.current_timeline_time))}},createFrameOnTimeline:function(e){var t=e.caption,i=t.data(),a=e.label,n=e.timeline,r=e.frameindex,o=e.opt,s=t,d={},l=o.timelines[i._slideid].layers[i._id],m=i.frames.length-1,c=i.frames[r].split,p=i.frames[r].split_direction,g=i.frames[r].sfx_effect,u=!1;if(p=void 0===p?"forward":p,-1!==i.hoverframeindex&&i.hoverframeindex==m&&(m-=1),d.content=new punchgs.TimelineLite({align:"normal"}),d.mask=new punchgs.TimelineLite({align:"normal"}),void 0===n.vars.id&&(n.vars.id=Math.round(1e5*Math.random())),"column"===i._nctype&&(n.add(punchgs.TweenLite.set(i._cbgc_man,{visibility:"visible"}),a),n.add(punchgs.TweenLite.set(i._cbgc_auto,{visibility:"hidden"}),a)),i.splittext&&0===r){void 0!==i.mySplitText&&i.mySplitText.revert();var f=0<t.find("a").length?t.find("a"):t;i.mySplitText=new punchgs.SplitText(f,{type:"chars,words,lines",charsClass:"tp-splitted tp-charsplit",wordsClass:"tp-splitted tp-wordsplit",linesClass:"tp-splitted tp-linesplit"}),t.addClass("splitted")}void 0!==i.mySplitText&&c&&c.match(/chars|words|lines/g)&&(s=i.mySplitText[c],u=!0);var h,v,_=r!==i.outframeindex?F(B(),i.frames[r].to,void 0,u,s.length-1):void 0!==i.frames[r].to&&null===i.frames[r].to.match(/auto:auto/g)?F(X(),i.frames[r].to,1==o.sdir,u,s.length-1):F(X(),i.frames[i.inframeindex].from,0==o.sdir,u,s.length-1),b=void 0!==i.frames[r].from?F(_,i.frames[i.inframeindex].from,1==o.sdir,u,s.length-1):void 0,y=i.frames[r].splitdelay;if(0!==r||e.fromcurrentstate?v=H(i.frames[r].mask):h=H(i.frames[r].mask),_.anim.ease=void 0===i.frames[r].ease?punchgs.Power1.easeInOut:i.frames[r].ease,void 0!==b&&(b.anim.ease=void 0===i.frames[r].ease?punchgs.Power1.easeInOut:i.frames[r].ease,b.speed=void 0===i.frames[r].speed?b.speed:i.frames[r].speed,b.anim.x=b.anim.x*o.bw||Y(b.anim.x,o,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),b.anim.y=b.anim.y*o.bw||Y(b.anim.y,o,i.eow,i.eoh,i.calcy,i.calcx,"vertical")),void 0!==_&&(_.anim.ease=void 0===i.frames[r].ease?punchgs.Power1.easeInOut:i.frames[r].ease,_.speed=void 0===i.frames[r].speed?_.speed:i.frames[r].speed,_.anim.x=_.anim.x*o.bw||Y(_.anim.x,o,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),_.anim.y=_.anim.y*o.bw||Y(_.anim.y,o,i.eow,i.eoh,i.calcy,i.calcx,"vertical")),t.data("iframes")&&n.add(punchgs.TweenLite.set(t.find("iframe"),{autoAlpha:1}),a+"+=0.001"),r===i.outframeindex&&(i.frames[r].to&&i.frames[r].to.match(/auto:auto/g),_.speed=void 0===i.frames[r].speed||"inherit"===i.frames[r].speed?i.frames[i.inframeindex].speed:i.frames[r].speed,_.anim.ease=void 0===i.frames[r].ease||"inherit"===i.frames[r].ease?i.frames[i.inframeindex].ease:i.frames[r].ease,_.anim.overwrite="auto"),0!==r||e.fromcurrentstate)0===r&&e.fromcurrentstate&&(_.speed=b.speed);else{if(s!=t){var w=jQuery.extend({},_.anim,!0);n.add(punchgs.TweenLite.set(t,_.anim),a),(_=B()).ease=w.ease,void 0!==w.filter&&(_.anim.filter=w.filter),void 0!==w["-webkit-filter"]&&(_.anim["-webkit-filter"]=w["-webkit-filter"])}b.anim.visibility="hidden",b.anim.immediateRender=!0,_.anim.visibility="visible"}e.fromcurrentstate&&(_.anim.immediateRender=!0);var x=-1;if(0===r&&!e.fromcurrentstate&&void 0!==i._bmask&&void 0!==g&&0<=g.indexOf("block")||r===i.outframeindex&&!e.fromcurrentstate&&void 0!==i._bmask&&void 0!==g&&0<=g.indexOf("block")){var T=0===r?b.speed/1e3/2:_.speed/1e3/2,k=[{scaleY:1,scaleX:0,transformOrigin:"0% 50%"},{scaleY:1,scaleX:1,ease:_.anim.ease}],j={scaleY:1,scaleX:0,transformOrigin:"100% 50%",ease:_.anim.ease};switch(x=void 0===y?T:y+T,g){case"blocktoleft":case"blockfromright":k[0].transformOrigin="100% 50%",j.transformOrigin="0% 50%";break;case"blockfromtop":case"blocktobottom":k=[{scaleX:1,scaleY:0,transformOrigin:"50% 0%"},{scaleX:1,scaleY:1,ease:_.anim.ease}],j={scaleX:1,scaleY:0,transformOrigin:"50% 100%",ease:_.anim.ease};break;case"blocktotop":case"blockfrombottom":k=[{scaleX:1,scaleY:0,transformOrigin:"50% 100%"},{scaleX:1,scaleY:1,ease:_.anim.ease}],j={scaleX:1,scaleY:0,transformOrigin:"50% 0%",ease:_.anim.ease}}k[0].background=i.frames[r].sfxcolor,n.add(d.mask.fromTo(i._bmask,T,k[0],k[1],y),a),n.add(d.mask.to(i._bmask,T,j,x),a)}if(u)var L=M(s.length-1,p);if(0!==r||e.fromcurrentstate)if("block"===i._sfx_out&&r===i.outframeindex)n.add(d.content.staggerTo(s,.001,{autoAlpha:0,delay:x}),a),n.add(d.content.staggerTo(s,_.speed/1e3/2-.001,{x:0,delay:x}),a+"+=0.001");else if(u&&void 0!==L){R={to:P(_.anim)};for(var I in s){z=jQuery.extend({},_.anim);for(var W in R.to)z[W]=parseInt(R.to[W].values[R.to[W].index],0),R.to[W].index=R.to[W].index<R.to[W].len?R.to[W].index+1:0;void 0!==i.frames[r].color&&(z.color=i.frames[r].color),void 0!==i.frames[r].bgcolor&&(z.backgroundColor=i.frames[r].bgcolor),n.add(d.content.to(s[L[I]],_.speed/1e3,z,y*I),a)}}else void 0!==i.frames[r].color&&(_.anim.color=i.frames[r].color),void 0!==i.frames[r].bgcolor&&(_.anim.backgroundColor=i.frames[r].bgcolor),n.add(d.content.staggerTo(s,_.speed/1e3,_.anim,y),a);else if("block"===i._sfx_in)n.add(d.content.staggerFromTo(s,.05,{x:0,y:0,autoAlpha:0},{x:0,y:0,autoAlpha:1,delay:x}),a);else if(u&&void 0!==L){var R={from:P(b.anim),to:P(_.anim)};for(var I in s){var C=jQuery.extend({},b.anim),z=jQuery.extend({},_.anim);for(var W in R.from)C[W]=parseInt(R.from[W].values[R.from[W].index],0),R.from[W].index=R.from[W].index<R.from[W].len?R.from[W].index+1:0;z.ease=C.ease,void 0!==i.frames[r].color&&(C.color=i.frames[r].color,z.color=i.cssobj.styleProps.color),void 0!==i.frames[r].bgcolor&&(C.backgroundColor=i.frames[r].bgcolor,z.backgroundColor=i.cssobj.styleProps["background-color"]),n.add(d.content.fromTo(s[L[I]],b.speed/1e3,C,z,y*I),a)}}else void 0!==i.frames[r].color&&(b.anim.color=i.frames[r].color,_.anim.color=i.cssobj.styleProps.color),void 0!==i.frames[r].bgcolor&&(b.anim.backgroundColor=i.frames[r].bgcolor,_.anim.backgroundColor=i.cssobj.styleProps["background-color"]),n.add(d.content.staggerFromTo(s,b.speed/1e3,b.anim,_.anim,y),a);return void 0===v||!1===v||0===r&&e.ignorefirstframe||(v.anim.ease=void 0===v.anim.ease||"inherit"===v.anim.ease?i.frames[0].ease:v.anim.ease,v.anim.overflow="hidden",v.anim.x=v.anim.x*o.bw||Y(v.anim.x,o,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),v.anim.y=v.anim.y*o.bw||Y(v.anim.y,o,i.eow,i.eoh,i.calcy,i.calcx,"vertical")),0===r&&h&&!1!==h&&!e.fromcurrentstate||0===r&&e.ignorefirstframe?((v=new Object).anim=new Object,v.anim.overwrite="auto",v.anim.ease=_.anim.ease,v.anim.x=v.anim.y=0,h&&!1!==h&&(h.anim.x=h.anim.x*o.bw||Y(h.anim.x,o,i.eow,i.eoh,i.calcy,i.calcx,"horizontal"),h.anim.y=h.anim.y*o.bw||Y(h.anim.y,o,i.eow,i.eoh,i.calcy,i.calcx,"vertical"),h.anim.overflow="hidden")):0===r&&n.add(d.mask.set(i._mw,{overflow:"visible"}),a),void 0!==h&&void 0!==v&&!1!==h&&!1!==v?n.add(d.mask.fromTo(i._mw,b.speed/1e3,h.anim,v.anim,y),a):void 0!==v&&!1!==v&&n.add(d.mask.to(i._mw,_.speed/1e3,v.anim,y),a),n.addLabel(a+"_end"),i._gsTransformTo&&r===m&&i.hoveredstatus&&(i.hovertimelines.item=punchgs.TweenLite.to(t,0,i._gsTransformTo)),i._gsTransformTo=!1,d.content.eventCallback("onStart",O,[r,l,i._pw,i,n,_.anim,t,e.updateStaticTimeline,o]),d.content.eventCallback("onUpdate",Q,[a,i._id,i._pw,i,n,r,jQuery.extend(!0,{},_.anim),e.updateStaticTimeline,t,o]),d.content.eventCallback("onComplete",S,[r,i.frames.length,m,i._pw,i,n,e.updateStaticTimeline,t,o]),n},endMoveCaption:function(e){e.firstframe="frame_0",e.lastframe="frame_999";var t=g(e),i=e.caption.data();if(void 0!==e.frame?t.timeline.play(e.frame):(!t.static||e.currentslide>=t.removeonslide||e.currentslide<t.showonslide)&&(t.outnow=new punchgs.TimelineLite,t.timeline.pause(),!0===i.visibleelement&&A.createFrameOnTimeline({caption:e.caption,timeline:t.outnow,label:"outnow",frameindex:e.caption.data("outframeindex"),opt:e.opt,fromcurrentstate:!0}).play()),e.checkchildrens&&t.timeline_obj&&t.timeline_obj.dchildren&&"none"!==t.timeline_obj.dchildren&&0<t.timeline_obj.dchildren.length)for(var a=0;a<t.timeline_obj.dchildren.length;a++)A.endMoveCaption({caption:jQuery(t.timeline_obj.dchildren[a]),opt:e.opt})},playAnimationFrame:function(e){e.firstframe=e.triggerframein,e.lastframe=e.triggerframeout;var t,i=g(e),a=e.caption.data(),n=0;for(var r in a.frames)a.frames[r].framename===e.frame&&(t=n),n++;void 0!==a.triggeredtimeline&&a.triggeredtimeline.pause(),a.triggeredtimeline=new punchgs.TimelineLite,i.timeline.pause();var o=!0===a.visibleelement;a.triggeredtimeline=A.createFrameOnTimeline({caption:e.caption,timeline:a.triggeredtimeline,label:"triggered",frameindex:t,updateStaticTimeline:!0,opt:e.opt,ignorefirstframe:!0,fromcurrentstate:o}).play()},removeTheCaptions:function(e,i){if("stop"===A.compare_version(l).check)return!1;var t=e.data("index"),a=new Array;i.layers[t]&&jQuery.each(i.layers[t],function(e,t){a.push(t)});var n=A.currentSlideIndex(i);a&&jQuery.each(a,function(e){var t=jQuery(this);"carousel"===i.sliderType&&"on"===i.carousel.showLayersAllTime?(clearTimeout(t.data("videoplaywait")),A.stopVideo&&A.stopVideo(t,i)):(r(t),clearTimeout(t.data("videoplaywait")),A.endMoveCaption({caption:t,opt:i,currentslide:n})),A.removeMediaFromList&&A.removeMediaFromList(t,i),i.lastplayedvideos=[]})}});var O=function(e,t,i,a,n,r,o,s,d){var l={};if(l.layer=o,l.eventtype=0===e?"enterstage":e===a.outframeindex?"leavestage":"framestarted",l.layertype=o.data("layertype"),a.active=!0,l.frame_index=e,l.layersettings=o.data(),d.c.trigger("revolution.layeraction",[l]),"on"==a.loopanimation&&c(a._lw,d.bw),"enterstage"===l.eventtype&&(a.animdirection="in",a.visibleelement=!0,A.toggleState(a.layertoggledby)),"none"!==t.dchildren&&void 0!==t.dchildren&&0<t.dchildren.length)if(0===e)for(var m=0;m<t.dchildren.length;m++)jQuery(t.dchildren[m]).data("timeline").play(0);else if(e===a.outframeindex)for(m=0;m<t.dchildren.length;m++)A.endMoveCaption({caption:jQuery(t.dchildren[m]),opt:d,checkchildrens:!0});punchgs.TweenLite.set(i,{visibility:"visible"}),a.current_frame=e,a.current_timeline=n,a.current_timeline_time=n.time(),s&&(a.static_layer_timeline_time=a.current_timeline_time),a.last_frame_started=e},Q=function(e,t,i,a,n,r,o,s,d,l){"column"===a._nctype&&b(d,l),punchgs.TweenLite.set(i,{visibility:"visible"}),a.current_frame=r,a.current_timeline=n,a.current_timeline_time=n.time(),s&&(a.static_layer_timeline_time=a.current_timeline_time),void 0!==a.hoveranim&&!1===a._gsTransformTo&&(a._gsTransformTo=o,a._gsTransformTo&&a._gsTransformTo.startAt&&delete a._gsTransformTo.startAt,void 0===a.cssobj.styleProps.css?a._gsTransformTo=jQuery.extend(!0,{},a.cssobj.styleProps,a._gsTransformTo):a._gsTransformTo=jQuery.extend(!0,{},a.cssobj.styleProps.css,a._gsTransformTo)),a.visibleelement=!0},S=function(e,t,i,a,n,r,o,s,d){var l={};l.layer=s,l.eventtype=0===e?"enteredstage":e===t-1||e===i?"leftstage":"frameended",l.layertype=s.data("layertype"),l.layersettings=s.data(),d.c.trigger("revolution.layeraction",[l]),"leftstage"!==l.eventtype&&A.animcompleted(s,d),"leftstage"===l.eventtype&&A.stopVideo&&A.stopVideo(s,d),"column"===n._nctype&&(punchgs.TweenLite.to(n._cbgc_man,.01,{visibility:"hidden"}),punchgs.TweenLite.to(n._cbgc_auto,.01,{visibility:"visible"})),"leftstage"===l.eventtype&&(n.active=!1,punchgs.TweenLite.set(a,{visibility:"hidden",overwrite:"auto"}),n.animdirection="out",n.visibleelement=!1,A.unToggleState(n.layertoggledby),"video"===n._nctype&&A.resetVideo&&setTimeout(function(){A.resetVideo(s,d)},100)),n.current_frame=e,n.current_timeline=r,n.current_timeline_time=r.time(),o&&(n.static_layer_timeline_time=n.current_timeline_time)},g=function(e){var t={};return e.firstframe=void 0===e.firstframe?"frame_0":e.firstframe,e.lastframe=void 0===e.lastframe?"frame_999":e.lastframe,t.id=e.caption.data("id")||e.caption.attr("id"),t.slideid=e.caption.data("slideid")||e.caption.closest(".tp-revslider-slidesli").data("index"),t.timeline_obj=e.opt.timelines[t.slideid].layers[t.id],t.timeline=t.timeline_obj.timeline,t.ffs=t.timeline.getLabelTime(e.firstframe),t.ffe=t.timeline.getLabelTime(e.firstframe+"_end"),t.lfs=t.timeline.getLabelTime(e.lastframe),t.lfe=t.timeline.getLabelTime(e.lastframe+"_end"),t.ct=t.timeline.time(),t.static=null!=t.timeline_obj.firstslide||null!=t.timeline_obj.lastslide,t.static&&(t.showonslide=t.timeline_obj.firstslide,t.removeonslide=t.timeline_obj.lastslide),t},M=function(e,t){var i=new Array;switch(t){case"forward":case"random":for(var a=0;a<=e;a++)i.push(a);"random"===t&&(i=function(e){for(var t,i,a=e.length;0!==a;)i=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[i],e[i]=t;return e}(i));break;case"backward":for(a=0;a<=e;a++)i.push(e-a);break;case"middletoedge":var n=Math.ceil(e/2),r=n-1,o=n+1;i.push(n);for(a=0;a<n;a++)0<=r&&i.push(r),o<=e&&i.push(o),r--,o++;break;case"edgetomiddle":for(r=e,o=0,a=0;a<=Math.floor(e/2);a++)i.push(r),o<r&&i.push(o),r--,o++}return i},P=function(e){var t={};for(var i in e)"string"==typeof e[i]&&0<=e[i].indexOf("|")&&(void 0===t[i]&&(t[i]={index:0}),t[i].values=e[i].replace("[","").replace("]","").split("|"),t[i].len=t[i].values.length-1);return t},B=function(e){return(e=void 0===e?new Object:e).anim=void 0===e.anim?new Object:e.anim,e.anim.x=void 0===e.anim.x?0:e.anim.x,e.anim.y=void 0===e.anim.y?0:e.anim.y,e.anim.z=void 0===e.anim.z?0:e.anim.z,e.anim.rotationX=void 0===e.anim.rotationX?0:e.anim.rotationX,e.anim.rotationY=void 0===e.anim.rotationY?0:e.anim.rotationY,e.anim.rotationZ=void 0===e.anim.rotationZ?0:e.anim.rotationZ,e.anim.scaleX=void 0===e.anim.scaleX?1:e.anim.scaleX,e.anim.scaleY=void 0===e.anim.scaleY?1:e.anim.scaleY,e.anim.skewX=void 0===e.anim.skewX?0:e.anim.skewX,e.anim.skewY=void 0===e.anim.skewY?0:e.anim.skewY,e.anim.opacity=void 0===e.anim.opacity?1:e.anim.opacity,e.anim.transformOrigin=void 0===e.anim.transformOrigin?"50% 50%":e.anim.transformOrigin,e.anim.transformPerspective=void 0===e.anim.transformPerspective?600:e.anim.transformPerspective,e.anim.rotation=void 0===e.anim.rotation?0:e.anim.rotation,e.anim.force3D=void 0===e.anim.force3D?"auto":e.anim.force3D,e.anim.autoAlpha=void 0===e.anim.autoAlpha?1:e.anim.autoAlpha,e.anim.visibility=void 0===e.anim.visibility?"visible":e.anim.visibility,e.anim.overwrite=void 0===e.anim.overwrite?"auto":e.anim.overwrite,e.speed=void 0===e.speed?.3:e.speed,e.filter=void 0===e.filter?"blur(0px) grayscale(0%) brightness(100%)":e.filter,e["-webkit-filter"]=void 0===e["-webkit-filter"]?"blur(0px) grayscale(0%) brightness(100%)":e["-webkit-filter"],e},u=function(){var e=new Object;return e.anim=new Object,e.anim.stroke="none",e.anim.strokeWidth=0,e.anim.strokeDasharray="none",e.anim.strokeDashoffset="0",e},f=function(e,r){var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":"),a=i[0],n=i[1];"sc"==a&&(r.anim.stroke=n),"sw"==a&&(r.anim.strokeWidth=n),"sda"==a&&(r.anim.strokeDasharray=n),"sdo"==a&&(r.anim.strokeDashoffset=n)}),r},X=function(){var e=new Object;return e.anim=new Object,e.anim.x=0,e.anim.y=0,e.anim.z=0,e},h=function(){var e=new Object;return e.anim=new Object,e.speed=.2,e},m=function(e,t,i,a,n){if(n=void 0===n?"":n,jQuery.isNumeric(parseFloat(e)))return parseFloat(e)+n;if(void 0===e||"inherit"===e)return t+"ext";if(1<e.split("{").length){var r=e.split(","),o=parseFloat(r[1].split("}")[0]);if(r=parseFloat(r[0].split("{")[1]),void 0!==i&&void 0!==a){parseInt(Math.random()*(o-r),0),parseInt(r,0);for(var s=0;s<a;s++)e=e+"|"+(parseInt(Math.random()*(o-r),0)+parseInt(r,0))+n;e+="]"}else e=Math.random()*(o-r)+r}return e},Y=function(e,t,i,a,n,r,o){return!jQuery.isNumeric(e)&&e.match(/%]/g)?(e=e.split("[")[1].split("]")[0],"horizontal"==o?e=(i+2)*parseInt(e,0)/100:"vertical"==o&&(e=(a+2)*parseInt(e,0)/100)):e="top"===(e="left"===(e="layer_top"===(e="layer_left"===e?0-i:"layer_right"===e?i:e)?0-a:"layer_bottom"===e?a:e)||"stage_left"===e?0-i-r:"right"===e||"stage_right"===e?t.conw-r:"center"===e||"stage_center"===e?t.conw/2-i/2-r:e)||"stage_top"===e?0-a-n:"bottom"===e||"stage_bottom"===e?t.conh-n:"middle"===e||"stage_middle"===e?t.conh/2-a/2-n:e,e},F=function(e,t,r,o,s){var d=new Object;if(d=jQuery.extend(!0,{},d,e),void 0===t)return d;var i=t.split(";"),l="";return i&&jQuery.each(i,function(e,t){var i=t.split(":"),a=i[0],n=i[1];r&&"none"!==r&&null!=n&&0<n.length&&n.match(/\(R\)/)&&("["===(n="right"===(n=n.replace("(R)",""))?"left":"left"===n?"right":"top"===n?"bottom":"bottom"===n?"top":n)[0]&&"-"===n[1]?n=n.replace("[-","["):"["===n[0]&&"-"!==n[1]?n=n.replace("[","[-"):"-"===n[0]?n=n.replace("-",""):n[0].match(/[1-9]/)&&(n="-"+n)),null!=n&&(n=n.replace(/\(R\)/,""),"rotationX"!=a&&"rX"!=a||(d.anim.rotationX=m(n,d.anim.rotationX,o,s,"deg")),"rotationY"!=a&&"rY"!=a||(d.anim.rotationY=m(n,d.anim.rotationY,o,s,"deg")),"rotationZ"!=a&&"rZ"!=a||(d.anim.rotation=m(n,d.anim.rotationZ,o,s,"deg")),"scaleX"!=a&&"sX"!=a||(d.anim.scaleX=m(n,d.anim.scaleX,o,s)),"scaleY"!=a&&"sY"!=a||(d.anim.scaleY=m(n,d.anim.scaleY,o,s)),"opacity"!=a&&"o"!=a||(d.anim.opacity=m(n,d.anim.opacity,o,s)),"fb"==a&&(l=""===l?"blur("+parseInt(n,0)+"px)":l+" blur("+parseInt(n,0)+"px)"),"fg"==a&&(l=""===l?"grayscale("+parseInt(n,0)+"%)":l+" grayscale("+parseInt(n,0)+"%)"),"fbr"==a&&(l=""===l?"brightness("+parseInt(n,0)+"%)":l+" brightness("+parseInt(n,0)+"%)"),0===d.anim.opacity&&(d.anim.autoAlpha=0),d.anim.opacity=0==d.anim.opacity?1e-4:d.anim.opacity,"skewX"!=a&&"skX"!=a||(d.anim.skewX=m(n,d.anim.skewX,o,s)),"skewY"!=a&&"skY"!=a||(d.anim.skewY=m(n,d.anim.skewY,o,s)),"x"==a&&(d.anim.x=m(n,d.anim.x,o,s)),"y"==a&&(d.anim.y=m(n,d.anim.y,o,s)),"z"==a&&(d.anim.z=m(n,d.anim.z,o,s)),"transformOrigin"!=a&&"tO"!=a||(d.anim.transformOrigin=n.toString()),"transformPerspective"!=a&&"tP"!=a||(d.anim.transformPerspective=parseInt(n,0)),"speed"!=a&&"s"!=a||(d.speed=parseFloat(n)))}),""!==l&&(d.anim["-webkit-filter"]=l,d.anim.filter=l),d},H=function(e){if(void 0===e)return!1;var n=new Object;n.anim=new Object;var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=(t=t.split(":"))[0],a=t[1];"x"==i&&(n.anim.x=a),"y"==i&&(n.anim.y=a),"s"==i&&(n.speed=parseFloat(a)),"e"!=i&&"ease"!=i||(n.anim.ease=a)}),n},N=function(i,e,t){if(null==i&&(i=0),!jQuery.isArray(i)&&"string"===jQuery.type(i)&&(1<i.split(",").length||1<i.split("[").length)){var a=(i=(i=i.replace("[","")).replace("]","")).match(/'/g)?i.split("',"):i.split(",");i=new Array,a&&jQuery.each(a,function(e,t){t=(t=t.replace("'","")).replace("'",""),i.push(t)})}else{var n=i;jQuery.isArray(i)||(i=new Array).push(n)}n=i[i.length-1];if(i.length<e.rle)for(var r=1;r<=e.curWinRange;r++)i.push(n);return i};function D(e,t,i,a,n,r,o){var s=e.find(t);s.css("borderWidth",r+"px"),s.css(i,0-r+"px"),s.css(a,"0px solid transparent"),s.css(n,o)}var v=function(a,e){if(void 0===e)return a;var t=(e=(e=(e=(e=(e=(e=(e=(e=e.replace("c:","color:")).replace("bg:","background-color:")).replace("bw:","border-width:")).replace("bc:","border-color:")).replace("br:","borderRadius:")).replace("bs:","border-style:")).replace("td:","text-decoration:")).replace("zi:","zIndex:")).split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":");0<i[0].length&&("background-color"===i[0]&&0<=i[1].indexOf("gradient")&&(i[0]="background"),a.anim[i[0]]=i[1])}),a},V=function(e,t){var i,a=new Object,n=!1;if("rekursive"==t&&(i=e.closest(".tp-caption"))&&e.css("fontSize")===i.css("fontSize")&&e.css("fontWeight")===i.css("fontWeight")&&e.css("lineHeight")===i.css("lineHeight")&&(n=!0),a.basealign=e.data("basealign")||"grid",a.fontSize=n?void 0===i.data("fontsize")?parseInt(i.css("fontSize"),0)||0:i.data("fontsize"):void 0===e.data("fontsize")?parseInt(e.css("fontSize"),0)||0:e.data("fontsize"),a.fontWeight=n?void 0===i.data("fontweight")?parseInt(i.css("fontWeight"),0)||0:i.data("fontweight"):void 0===e.data("fontweight")?parseInt(e.css("fontWeight"),0)||0:e.data("fontweight"),a.whiteSpace=n?void 0===i.data("whitespace")?i.css("whitespace")||"normal":i.data("whitespace"):void 0===e.data("whitespace")?e.css("whitespace")||"normal":e.data("whitespace"),a.textAlign=n?void 0===i.data("textalign")?i.css("textalign")||"inherit":i.data("textalign"):void 0===e.data("textalign")?e.css("textalign")||"inherit":e.data("textalign"),a.zIndex=n?void 0===i.data("zIndex")?i.css("zIndex")||"inherit":i.data("zIndex"):void 0===e.data("zIndex")?e.css("zIndex")||"inherit":e.data("zIndex"),-1!==jQuery.inArray(e.data("layertype"),["video","image","audio"])||e.is("img")?a.lineHeight=0:a.lineHeight=n?void 0===i.data("lineheight")?parseInt(i.css("lineHeight"),0)||0:i.data("lineheight"):void 0===e.data("lineheight")?parseInt(e.css("lineHeight"),0)||0:e.data("lineheight"),a.letterSpacing=n?void 0===i.data("letterspacing")?parseFloat(i.css("letterSpacing"),0)||0:i.data("letterspacing"):void 0===e.data("letterspacing")?parseFloat(e.css("letterSpacing"))||0:e.data("letterspacing"),a.paddingTop=void 0===e.data("paddingtop")?parseInt(e.css("paddingTop"),0)||0:e.data("paddingtop"),a.paddingBottom=void 0===e.data("paddingbottom")?parseInt(e.css("paddingBottom"),0)||0:e.data("paddingbottom"),a.paddingLeft=void 0===e.data("paddingleft")?parseInt(e.css("paddingLeft"),0)||0:e.data("paddingleft"),a.paddingRight=void 0===e.data("paddingright")?parseInt(e.css("paddingRight"),0)||0:e.data("paddingright"),a.marginTop=void 0===e.data("margintop")?parseInt(e.css("marginTop"),0)||0:e.data("margintop"),a.marginBottom=void 0===e.data("marginbottom")?parseInt(e.css("marginBottom"),0)||0:e.data("marginbottom"),a.marginLeft=void 0===e.data("marginleft")?parseInt(e.css("marginLeft"),0)||0:e.data("marginleft"),a.marginRight=void 0===e.data("marginright")?parseInt(e.css("marginRight"),0)||0:e.data("marginright"),a.borderTopWidth=void 0===e.data("bordertopwidth")?parseInt(e.css("borderTopWidth"),0)||0:e.data("bordertopwidth"),a.borderBottomWidth=void 0===e.data("borderbottomwidth")?parseInt(e.css("borderBottomWidth"),0)||0:e.data("borderbottomwidth"),a.borderLeftWidth=void 0===e.data("borderleftwidth")?parseInt(e.css("borderLeftWidth"),0)||0:e.data("borderleftwidth"),a.borderRightWidth=void 0===e.data("borderrightwidth")?parseInt(e.css("borderRightWidth"),0)||0:e.data("borderrightwidth"),"rekursive"!=t){if(a.color=void 0===e.data("color")?"nopredefinedcolor":e.data("color"),a.whiteSpace=n?void 0===i.data("whitespace")?i.css("whiteSpace")||"nowrap":i.data("whitespace"):void 0===e.data("whitespace")?e.css("whiteSpace")||"nowrap":e.data("whitespace"),a.textAlign=n?void 0===i.data("textalign")?i.css("textalign")||"inherit":i.data("textalign"):void 0===e.data("textalign")?e.css("textalign")||"inherit":e.data("textalign"),a.fontWeight=n?void 0===i.data("fontweight")?parseInt(i.css("fontWeight"),0)||0:i.data("fontweight"):void 0===e.data("fontweight")?parseInt(e.css("fontWeight"),0)||0:e.data("fontweight"),a.minWidth=void 0===e.data("width")?parseInt(e.css("minWidth"),0)||0:e.data("width"),a.minHeight=void 0===e.data("height")?parseInt(e.css("minHeight"),0)||0:e.data("height"),null!=e.data("videowidth")&&null!=e.data("videoheight")){var r=e.data("videowidth"),o=e.data("videoheight");r="100%"===r?"none":r,o="100%"===o?"none":o,e.data("width",r),e.data("height",o)}a.maxWidth=void 0===e.data("width")?parseInt(e.css("maxWidth"),0)||"none":e.data("width"),a.maxHeight=-1!==jQuery.inArray(e.data("type"),["column","row"])?"none":void 0===e.data("height")?parseInt(e.css("maxHeight"),0)||"none":e.data("height"),a.wan=void 0===e.data("wan")?parseInt(e.css("-webkit-transition"),0)||"none":e.data("wan"),a.moan=void 0===e.data("moan")?parseInt(e.css("-moz-animation-transition"),0)||"none":e.data("moan"),a.man=void 0===e.data("man")?parseInt(e.css("-ms-animation-transition"),0)||"none":e.data("man"),a.ani=void 0===e.data("ani")?parseInt(e.css("transition"),0)||"none":e.data("ani")}return a.styleProps={borderTopLeftRadius:e[0].style.borderTopLeftRadius,borderTopRightRadius:e[0].style.borderTopRightRadius,borderBottomRightRadius:e[0].style.borderBottomRightRadius,borderBottomLeftRadius:e[0].style.borderBottomLeftRadius,background:e[0].style.background,boxShadow:e[0].style.boxShadow,"background-color":e[0].style["background-color"],"border-top-color":e[0].style["border-top-color"],"border-bottom-color":e[0].style["border-bottom-color"],"border-right-color":e[0].style["border-right-color"],"border-left-color":e[0].style["border-left-color"],"border-top-style":e[0].style["border-top-style"],"border-bottom-style":e[0].style["border-bottom-style"],"border-left-style":e[0].style["border-left-style"],"border-right-style":e[0].style["border-right-style"],"border-left-width":e[0].style["border-left-width"],"border-right-width":e[0].style["border-right-width"],"border-bottom-width":e[0].style["border-bottom-width"],"border-top-width":e[0].style["border-top-width"],color:e[0].style.color,"text-decoration":e[0].style["text-decoration"],"font-style":e[0].style["font-style"]},""!==a.styleProps.background&&void 0!==a.styleProps.background&&a.styleProps.background!==a.styleProps["background-color"]||delete a.styleProps.background,""==a.styleProps.color&&(a.styleProps.color=e.css("color")),a},Z=function(a,n){var r=new Object;return a&&jQuery.each(a,function(e,t){var i=N(t,n)[n.curWinRange];r[e]=void 0!==i?i:a[e]}),r},_=function(e,t,i,a){return e="full"===(e=jQuery.isNumeric(e)?e*t+"px":e)?a:"auto"===e||"none"===e?i:e},E=function(e,t,i,a){var n=e.data();n=void 0===n?{}:n;try{if("BR"==e[0].nodeName||"br"==e[0].tagName)return!1}catch(e){}n.cssobj=void 0===n.cssobj?V(e,i):n.cssobj;var r=Z(n.cssobj,t),o=t.bw,s=t.bh;"off"===a&&(s=o=1),"auto"==r.lineHeight&&(r.lineHeight=r.fontSize+4);var d={Top:r.marginTop,Bottom:r.marginBottom,Left:r.marginLeft,Right:r.marginRight};if("column"===n._nctype&&(punchgs.TweenLite.set(n._column,{paddingTop:Math.round(r.marginTop*s)+"px",paddingBottom:Math.round(r.marginBottom*s)+"px",paddingLeft:Math.round(r.marginLeft*o)+"px",paddingRight:Math.round(r.marginRight*o)+"px"}),d={Top:0,Bottom:0,Left:0,Right:0}),!e.hasClass("tp-splitted")){if(e.css("-webkit-transition","none"),e.css("-moz-transition","none"),e.css("-ms-transition","none"),e.css("transition","none"),(void 0!==e.data("transform_hover")||void 0!==e.data("style_hover"))&&punchgs.TweenLite.set(e,r.styleProps),punchgs.TweenLite.set(e,{fontSize:Math.round(r.fontSize*o)+"px",fontWeight:r.fontWeight,letterSpacing:Math.floor(r.letterSpacing*o)+"px",paddingTop:Math.round(r.paddingTop*s)+"px",paddingBottom:Math.round(r.paddingBottom*s)+"px",paddingLeft:Math.round(r.paddingLeft*o)+"px",paddingRight:Math.round(r.paddingRight*o)+"px",marginTop:d.Top*s+"px",marginBottom:d.Bottom*s+"px",marginLeft:d.Left*o+"px",marginRight:d.Right*o+"px",borderTopWidth:Math.round(r.borderTopWidth*s)+"px",borderBottomWidth:Math.round(r.borderBottomWidth*s)+"px",borderLeftWidth:Math.round(r.borderLeftWidth*o)+"px",borderRightWidth:Math.round(r.borderRightWidth*o)+"px",lineHeight:Math.round(r.lineHeight*s)+"px",textAlign:r.textAlign,overwrite:"auto"}),"rekursive"!=i){var l="slide"==r.basealign?t.ulw:t.gridwidth[t.curWinRange],m="slide"==r.basealign?t.ulh:t.gridheight[t.curWinRange],c=_(r.maxWidth,o,"none",l),p=_(r.maxHeight,s,"none",m),g=_(r.minWidth,o,"0px",l),u=_(r.minHeight,s,"0px",m);if(g=void 0===g?0:g,u=void 0===u?0:u,c=void 0===c?"none":c,p=void 0===p?"none":p,n._isgroup&&("#1/1#"===g&&(g=c=l),"#1/2#"===g&&(g=c=l/2),"#1/3#"===g&&(g=c=l/3),"#1/4#"===g&&(g=c=l/4),"#1/5#"===g&&(g=c=l/5),"#1/6#"===g&&(g=c=l/6),"#2/3#"===g&&(g=c=l/3*2),"#3/4#"===g&&(g=c=l/4*3),"#2/5#"===g&&(g=c=l/5*2),"#3/5#"===g&&(g=c=l/5*3),"#4/5#"===g&&(g=c=l/5*4),"#3/6#"===g&&(g=c=l/6*3),"#4/6#"===g&&(g=c=l/6*4),"#5/6#"===g&&(g=c=l/6*5)),n._ingroup&&(n._groupw=g,n._grouph=u),punchgs.TweenLite.set(e,{maxWidth:c,maxHeight:p,minWidth:g,minHeight:u,whiteSpace:r.whiteSpace,textAlign:r.textAlign,overwrite:"auto"}),"nopredefinedcolor"!=r.color&&punchgs.TweenLite.set(e,{color:r.color,overwrite:"auto"}),null!=n.svg_src){var f="nopredefinedcolor"!=r.color&&null!=r.color?r.color:null!=r.css&&"nopredefinedcolor"!=r.css.color&&null!=r.css.color?r.css.color:null!=r.styleProps.color?r.styleProps.color:null!=r.styleProps.css&&null!=r.styleProps.css.color&&r.styleProps.css.color;0!=f&&(punchgs.TweenLite.set(e.find("svg"),{fill:f,overwrite:"auto"}),punchgs.TweenLite.set(e.find("svg path"),{fill:f,overwrite:"auto"}))}}"column"===n._nctype&&(void 0===n._column_bg_set&&(n._column_bg_set=e.css("backgroundColor"),n._column_bg_image=e.css("backgroundImage"),n._column_bg_image_repeat=e.css("backgroundRepeat"),n._column_bg_image_position=e.css("backgroundPosition"),n._column_bg_image_size=e.css("backgroundSize"),n._column_bg_opacity=e.data("bgopacity"),n._column_bg_opacity=void 0===n._column_bg_opacity?1:n._column_bg_opacity,punchgs.TweenLite.set(e,{backgroundColor:"transparent",backgroundImage:""})),setTimeout(function(){b(e,t)},1),n._cbgc_auto&&0<n._cbgc_auto.length&&(n._cbgc_auto[0].style.backgroundSize=n._column_bg_image_size,jQuery.isArray(r.marginLeft)?punchgs.TweenLite.set(n._cbgc_auto,{borderTopWidth:r.marginTop[t.curWinRange]*s+"px",borderLeftWidth:r.marginLeft[t.curWinRange]*o+"px",borderRightWidth:r.marginRight[t.curWinRange]*o+"px",borderBottomWidth:r.marginBottom[t.curWinRange]*s+"px",backgroundColor:n._column_bg_set,backgroundImage:n._column_bg_image,backgroundRepeat:n._column_bg_image_repeat,backgroundPosition:n._column_bg_image_position,opacity:n._column_bg_opacity}):punchgs.TweenLite.set(n._cbgc_auto,{borderTopWidth:r.marginTop*s+"px",borderLeftWidth:r.marginLeft*o+"px",borderRightWidth:r.marginRight*o+"px",borderBottomWidth:r.marginBottom*s+"px",backgroundColor:n._column_bg_set,backgroundImage:n._column_bg_image,backgroundRepeat:n._column_bg_image_repeat,backgroundPosition:n._column_bg_image_position,opacity:n._column_bg_opacity}))),setTimeout(function(){e.css("-webkit-transition",e.data("wan")),e.css("-moz-transition",e.data("moan")),e.css("-ms-transition",e.data("man")),e.css("transition",e.data("ani"))},30)}},b=function(e,t){var i,a,n,r=e.data();r._cbgc_man&&0<r._cbgc_man.length&&(jQuery.isArray(r.cssobj.marginLeft)?(r.cssobj.marginLeft[t.curWinRange]*t.bw,i=r.cssobj.marginTop[t.curWinRange]*t.bh,a=r.cssobj.marginBottom[t.curWinRange]*t.bh,r.cssobj.marginRight[t.curWinRange],t.bw):(r.cssobj.marginLeft*t.bw,i=r.cssobj.marginTop*t.bh,a=r.cssobj.marginBottom*t.bh,r.cssobj.marginRight,t.bw),n=r._row.hasClass("rev_break_columns")?"100%":r._row.height()-(i+a)+"px",r._cbgc_man[0].style.backgroundSize=r._column_bg_image_size,punchgs.TweenLite.set(r._cbgc_man,{width:"100%",height:n,backgroundColor:r._column_bg_set,backgroundImage:r._column_bg_image,backgroundRepeat:r._column_bg_image_repeat,backgroundPosition:r._column_bg_image_position,overwrite:"auto",opacity:r._column_bg_opacity}))},c=function(e,t){var i=e.data();if(e.hasClass("rs-pendulum")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var a=null==e.data("startdeg")?-20:e.data("startdeg"),n=null==e.data("enddeg")?20:e.data("enddeg"),r=null==e.data("speed")?2:e.data("speed"),o=null==e.data("origin")?"50% 50%":e.data("origin"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");a*=t,n*=t,i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",rotation:a,transformOrigin:o},{rotation:n,ease:s})),i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",rotation:n,transformOrigin:o},{rotation:a,ease:s,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-rotate")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;a=null==e.data("startdeg")?0:e.data("startdeg"),n=null==e.data("enddeg")?360:e.data("enddeg"),r=null==e.data("speed")?2:e.data("speed"),o=null==e.data("origin")?"50% 50%":e.data("origin"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");a*=t,n*=t,i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",rotation:a,transformOrigin:o},{rotation:n,ease:s,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-slideloop")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var d=null==e.data("xs")?0:e.data("xs"),l=null==e.data("ys")?0:e.data("ys"),m=null==e.data("xe")?0:e.data("xe"),c=null==e.data("ye")?0:e.data("ye");r=null==e.data("speed")?2:e.data("speed"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");d*=t,l*=t,m*=t,c*=t,i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",x:d,y:l},{x:m,y:c,ease:s})),i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",x:m,y:c},{x:d,y:l,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-pulse")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var p=null==e.data("zoomstart")?0:e.data("zoomstart"),g=null==e.data("zoomend")?0:e.data("zoomend");r=null==e.data("speed")?2:e.data("speed"),s=null==e.data("easing")?punchgs.Power2.easeInOut:e.data("easing");i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",scale:p},{scale:g,ease:s})),i._loop_timeline.append(new punchgs.TweenLite.fromTo(e,r,{force3D:"auto",scale:g},{scale:p,onComplete:function(){i._loop_timeline.restart()}}))}if(e.hasClass("rs-wave")&&null==i._loop_timeline){i._loop_timeline=new punchgs.TimelineLite;var u=null==e.data("angle")?10:parseInt(e.data("angle"),0),f=null==e.data("radius")?10:parseInt(e.data("radius"),0),h=(r=null==e.data("speed")?-20:e.data("speed"),(o=null==e.data("origin")?"50% 50%":e.data("origin")).split(" ")),v=new Object;1<=h.length?(v.x=h[0],v.y=h[1]):(v.x="50%",v.y="50%"),f*=t;var _=(parseInt(v.x,0)/100-.5)*e.width(),b=(parseInt(v.y,0)/100-.5)*e.height(),y={a:0,ang:u,element:e,unit:f,xoffset:0+_,yoffset:-1*f+b},w=parseInt(u,0),x=new punchgs.TweenLite.fromTo(y,r,{a:0+w},{a:360+w,force3D:"auto",ease:punchgs.Linear.easeNone});x.eventCallback("onUpdate",function(e){var t=e.a*(Math.PI/180),i=e.yoffset+e.unit*(1-Math.sin(t)),a=e.xoffset+Math.cos(t)*e.unit;punchgs.TweenLite.to(e.element,.1,{force3D:"auto",x:a,y:i})},[y]),x.eventCallback("onComplete",function(e){e._loop_timeline.restart()},[i]),i._loop_timeline.append(x)}},r=function(e){e.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){null!=this._loop_timeline&&(this._loop_timeline.pause(),this._loop_timeline=null)})}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.5 EXTENSION - NAVIGATION
 * @version: 1.3.5 (06.04.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.4.0",version:"1.3.5"};jQuery.extend(!0,b,{hideUnHideNav:function(a){var b=a.c.width(),c=a.navigation.arrows,d=a.navigation.bullets,e=a.navigation.thumbnails,f=a.navigation.tabs;m(c)&&y(a.c.find(".tparrows"),c.hide_under,b,c.hide_over),m(d)&&y(a.c.find(".tp-bullets"),d.hide_under,b,d.hide_over),m(e)&&y(a.c.parent().find(".tp-thumbs"),e.hide_under,b,e.hide_over),m(f)&&y(a.c.parent().find(".tp-tabs"),f.hide_under,b,f.hide_over),x(a)},resizeThumbsTabs:function(a,b){if(a.navigation&&a.navigation.tabs.enable||a.navigation&&a.navigation.thumbnails.enable){var c=(jQuery(window).width()-480)/500,d=new punchgs.TimelineLite,e=a.navigation.tabs,g=a.navigation.thumbnails,h=a.navigation.bullets;if(d.pause(),c=c>1?1:c<0?0:c,m(e)&&(b||e.width>e.min_width)&&f(c,d,a.c,e,a.slideamount,"tab"),m(g)&&(b||g.width>g.min_width)&&f(c,d,a.c,g,a.slideamount,"thumb"),m(h)&&b){var i=a.c.find(".tp-bullets");i.find(".tp-bullet").each(function(a){var b=jQuery(this),c=a+1,d=b.outerWidth()+parseInt(void 0===h.space?0:h.space,0),e=b.outerHeight()+parseInt(void 0===h.space?0:h.space,0);"vertical"===h.direction?(b.css({top:(c-1)*e+"px",left:"0px"}),i.css({height:(c-1)*e+b.outerHeight(),width:b.outerWidth()})):(b.css({left:(c-1)*d+"px",top:"0px"}),i.css({width:(c-1)*d+b.outerWidth(),height:b.outerHeight()}))})}d.play(),x(a)}return!0},updateNavIndexes:function(a){function d(a){c.find(a).lenght>0&&c.find(a).each(function(a){jQuery(this).data("liindex",a)})}var c=a.c;d(".tp-tab"),d(".tp-bullet"),d(".tp-thumb"),b.resizeThumbsTabs(a,!0),b.manageNavigation(a)},manageNavigation:function(a){var c=b.getHorizontalOffset(a.c.parent(),"left"),d=b.getHorizontalOffset(a.c.parent(),"right");m(a.navigation.bullets)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.bullets.h_offset_old=void 0===a.navigation.bullets.h_offset_old?a.navigation.bullets.h_offset:a.navigation.bullets.h_offset_old,a.navigation.bullets.h_offset="center"===a.navigation.bullets.h_align?a.navigation.bullets.h_offset_old+c/2-d/2:a.navigation.bullets.h_offset_old+c-d),t(a.c.find(".tp-bullets"),a.navigation.bullets,a)),m(a.navigation.thumbnails)&&t(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails,a),m(a.navigation.tabs)&&t(a.c.parent().find(".tp-tabs"),a.navigation.tabs,a),m(a.navigation.arrows)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.arrows.left.h_offset_old=void 0===a.navigation.arrows.left.h_offset_old?a.navigation.arrows.left.h_offset:a.navigation.arrows.left.h_offset_old,a.navigation.arrows.left.h_offset="right"===a.navigation.arrows.left.h_align?a.navigation.arrows.left.h_offset_old+d:a.navigation.arrows.left.h_offset_old+c,a.navigation.arrows.right.h_offset_old=void 0===a.navigation.arrows.right.h_offset_old?a.navigation.arrows.right.h_offset:a.navigation.arrows.right.h_offset_old,a.navigation.arrows.right.h_offset="right"===a.navigation.arrows.right.h_align?a.navigation.arrows.right.h_offset_old+d:a.navigation.arrows.right.h_offset_old+c),t(a.c.find(".tp-leftarrow.tparrows"),a.navigation.arrows.left,a),t(a.c.find(".tp-rightarrow.tparrows"),a.navigation.arrows.right,a)),m(a.navigation.thumbnails)&&e(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails),m(a.navigation.tabs)&&e(a.c.parent().find(".tp-tabs"),a.navigation.tabs)},createNavigation:function(a,f){if("stop"===b.compare_version(d).check)return!1;var g=a.parent(),j=f.navigation.arrows,n=f.navigation.bullets,r=f.navigation.thumbnails,s=f.navigation.tabs,t=m(j),v=m(n),x=m(r),y=m(s);h(a,f),i(a,f),t&&q(a,j,f),f.li.each(function(b){var c=jQuery(f.li[f.li.length-1-b]),d=jQuery(this);v&&(f.navigation.bullets.rtl?u(a,n,c,f):u(a,n,d,f)),x&&(f.navigation.thumbnails.rtl?w(a,r,c,"tp-thumb",f):w(a,r,d,"tp-thumb",f)),y&&(f.navigation.tabs.rtl?w(a,s,c,"tp-tab",f):w(a,s,d,"tp-tab",f))}),a.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var b=0==a.find(".next-revslide").length?a.find(".active-revslide").data("index"):a.find(".next-revslide").data("index");a.find(".tp-bullet").each(function(){var a=jQuery(this);a.data("liref")===b?a.addClass("selected"):a.removeClass("selected")}),g.find(".tp-thumb, .tp-tab").each(function(){var a=jQuery(this);a.data("liref")===b?(a.addClass("selected"),a.hasClass("tp-tab")?e(g.find(".tp-tabs"),s):e(g.find(".tp-thumbs"),r)):a.removeClass("selected")});var c=0,d=!1;f.thumbs&&jQuery.each(f.thumbs,function(a,e){c=!1===d?a:c,d=e.id===b||a===b||d});var h=c>0?c-1:f.slideamount-1,i=c+1==f.slideamount?0:c+1;if(!0===j.enable){var k=j.tmp;if(void 0!=f.thumbs[h]&&jQuery.each(f.thumbs[h].params,function(a,b){k=k.replace(b.from,b.to)}),j.left.j.html(k),k=j.tmp,i>f.slideamount)return;jQuery.each(f.thumbs[i].params,function(a,b){k=k.replace(b.from,b.to)}),j.right.j.html(k),j.rtl?(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"})):(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}))}}),l(j),l(n),l(r),l(s),g.on("mouseenter mousemove",function(){g.hasClass("tp-mouseover")||(g.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(p),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"show"),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"show"),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"show"),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"show"),c&&(g.removeClass("tp-mouseover"),o(a,f)))}),g.on("mouseleave",function(){g.removeClass("tp-mouseover"),o(a,f)}),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"hide",0),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"hide",0),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"hide",0),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"hide",0),x&&k(g.find(".tp-thumbs"),f),y&&k(g.find(".tp-tabs"),f),"carousel"===f.sliderType&&k(a,f,!0),("on"===f.navigation.touch.touchOnDesktop||"on"==f.navigation.touch.touchenabled&&c)&&k(a,f,"swipebased")}});var e=function(a,b){var d=(a.hasClass("tp-thumbs"),a.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),e=a.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",f=a.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",g=a.find(d),h=g.find(e),i=b.direction,j="vertical"===i?g.find(f).first().outerHeight(!0)+b.space:g.find(f).first().outerWidth(!0)+b.space,k="vertical"===i?g.height():g.width(),l=parseInt(g.find(f+".selected").data("liindex"),0),m=k/j,n="vertical"===i?g.height():g.width(),o=0-l*j,p="vertical"===i?h.height():h.width(),q=o<0-(p-n)?0-(p-n):q>0?0:o,r=h.data("offset");m>2&&(q=o-(r+j)<=0?o-(r+j)<0-j?r:q+j:q,q=o-j+r+k<j&&o+(Math.round(m)-2)*j<r?o+(Math.round(m)-2)*j:q),q=q<0-(p-n)?0-(p-n):q>0?0:q,"vertical"!==i&&g.width()>=h.width()&&(q=0),"vertical"===i&&g.height()>=h.height()&&(q=0),a.hasClass("dragged")||("vertical"===i?h.data("tmmove",punchgs.TweenLite.to(h,.5,{top:q+"px",ease:punchgs.Power3.easeInOut})):h.data("tmmove",punchgs.TweenLite.to(h,.5,{left:q+"px",ease:punchgs.Power3.easeInOut})),h.data("offset",q))},f=function(a,b,c,d,e,f){var g=c.parent().find(".tp-"+f+"s"),h=g.find(".tp-"+f+"s-inner-wrapper"),i=g.find(".tp-"+f+"-mask"),j=d.width*a<d.min_width?d.min_width:Math.round(d.width*a),k=Math.round(j/d.width*d.height),l="vertical"===d.direction?j:j*e+d.space*(e-1),m="vertical"===d.direction?k*e+d.space*(e-1):k,n="vertical"===d.direction?{width:j+"px"}:{height:k+"px"};b.add(punchgs.TweenLite.set(g,n)),b.add(punchgs.TweenLite.set(h,{width:l+"px",height:m+"px"})),b.add(punchgs.TweenLite.set(i,{width:l+"px",height:m+"px"}));var o=h.find(".tp-"+f);return o&&jQuery.each(o,function(a,c){"vertical"===d.direction?b.add(punchgs.TweenLite.set(c,{top:a*(k+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"})):"horizontal"===d.direction&&b.add(punchgs.TweenLite.set(c,{left:a*(j+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"}))}),b},g=function(a){var b=0,c=0,d=0,e=0,f=1,g=1,h=1;return"detail"in a&&(c=a.detail),"wheelDelta"in a&&(c=-a.wheelDelta/120),"wheelDeltaY"in a&&(c=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(b=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(b=c,c=0),d=b*f,e=c*f,"deltaY"in a&&(e=a.deltaY),"deltaX"in a&&(d=a.deltaX),(d||e)&&a.deltaMode&&(1==a.deltaMode?(d*=g,e*=g):(d*=h,e*=h)),d&&!b&&(b=d<1?-1:1),e&&!c&&(c=e<1?-1:1),e=navigator.userAgent.match(/mozilla/i)?10*e:e,(e>300||e<-300)&&(e/=10),{spinX:b,spinY:c,pixelX:d,pixelY:e}},h=function(a,c){"on"===c.navigation.keyboardNavigation&&jQuery(document).keydown(function(d){("horizontal"==c.navigation.keyboard_direction&&39==d.keyCode||"vertical"==c.navigation.keyboard_direction&&40==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=0,b.callingNewSlide(a,1)),("horizontal"==c.navigation.keyboard_direction&&37==d.keyCode||"vertical"==c.navigation.keyboard_direction&&38==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=1,b.callingNewSlide(a,-1))})},i=function(a,c){if("on"===c.navigation.mouseScrollNavigation||"carousel"===c.navigation.mouseScrollNavigation){c.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),c.isSafari=!!navigator.userAgent.match(/safari/i),c.ischrome=!!navigator.userAgent.match(/chrome/i);var d=c.ischrome?-49:c.isIEEleven||c.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,e=c.ischrome?49:c.isIEEleven||c.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;a.on("mousewheel DOMMouseScroll",function(f){var h=g(f.originalEvent),i=a.find(".tp-revslider-slidesli.active-revslide").index(),j=a.find(".tp-revslider-slidesli.processing-revslide").index(),k=-1!=i&&0==i||-1!=j&&0==j,l=-1!=i&&i==c.slideamount-1||1!=j&&j==c.slideamount-1,m=!0;"carousel"==c.navigation.mouseScrollNavigation&&(k=l=!1),-1==j?h.pixelY<d?(k||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1),l||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1)):h.pixelY>e&&(l||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1),k||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1)):m=!1;var n=c.c.offset().top-jQuery("body").scrollTop(),o=n+c.c.height();return"carousel"!=c.navigation.mouseScrollNavigation?("reverse"!==c.navigation.mouseScrollReverse&&(n>0&&h.pixelY>0||o<jQuery(window).height()&&h.pixelY<0)&&(m=!0),"reverse"===c.navigation.mouseScrollReverse&&(n<0&&h.pixelY<0||o>jQuery(window).height()&&h.pixelY>0)&&(m=!0)):m=!1,0==m?(f.preventDefault(f),!1):void 0})}},j=function(a,b,d){return a=c?jQuery(d.target).closest("."+a).length||jQuery(d.srcElement).closest("."+a).length:jQuery(d.toElement).closest("."+a).length||jQuery(d.originalTarget).closest("."+a).length,!0===a||1===a?1:0},k=function(a,d,e){var f=d.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),f.Limit="endless";var h=(c||b.get_browser(),a),i="vertical"===d.navigation.thumbnails.direction||"vertical"===d.navigation.tabs.direction?"none":"vertical",k=d.navigation.touch.swipe_direction||"horizontal";i="swipebased"==e&&"vertical"==k?"none":e?"vertical":i,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",h.swipetp({allowPageScroll:i,triggerOnTouchLeave:!0,treshold:d.navigation.touch.swipe_treshold,fingers:d.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(e,g,h,i,l,m,n){var o=j("rev_slider_wrapper",a,e),p=j("tp-thumbs",a,e),q=j("tp-tabs",a,e),r=jQuery(this).attr("class"),s=!!r.match(/tp-tabs|tp-thumb/gi);if("carousel"===d.sliderType&&(("move"===g||"end"===g||"cancel"==g)&&d.dragStartedOverSlider&&!d.dragStartedOverThumbs&&!d.dragStartedOverTabs||"start"===g&&o>0&&0===p&&0===q)){if(c&&("up"===h||"down"===h))return;switch(d.dragStartedOverSlider=!0,i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i),g){case"start":void 0!==f.positionanim&&(f.positionanim.kill(),f.slide_globaloffset="off"===f.infinity?f.slide_offset:b.simp(f.slide_offset,f.maxwidth)),f.overpull="none",f.wrap.addClass("dragged");break;case"move":if(d.c.find(".tp-withaction").addClass("tp-temporarydisabled"),f.slide_offset="off"===f.infinity?f.slide_globaloffset+i:b.simp(f.slide_globaloffset+i,f.maxwidth),"off"===f.infinity){var t="center"===f.horizontal_align?(f.wrapwidth/2-f.slide_width/2-f.slide_offset)/f.slide_width:(0-f.slide_offset)/f.slide_width;"none"!==f.overpull&&0!==f.overpull||!(t<0||t>d.slideamount-1)?t>=0&&t<=d.slideamount-1&&(t>=0&&i>f.overpull||t<=d.slideamount-1&&i<f.overpull)&&(f.overpull=0):f.overpull=i,f.slide_offset=t<0?f.slide_offset+(f.overpull-i)/1.1+Math.sqrt(Math.abs((f.overpull-i)/1.1)):t>d.slideamount-1?f.slide_offset+(f.overpull-i)/1.1-Math.sqrt(Math.abs((f.overpull-i)/1.1)):f.slide_offset}b.organiseCarousel(d,h,!0,!0);break;case"end":case"cancel":f.slide_globaloffset=f.slide_offset,f.wrap.removeClass("dragged"),b.carouselToEvalPosition(d,h),d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,setTimeout(function(){d.c.find(".tp-withaction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==g&&"end"!==g&&"cancel"!=g||d.dragStartedOverSlider||!d.dragStartedOverThumbs&&!d.dragStartedOverTabs)&&!("start"===g&&o>0&&(p>0||q>0))){if("end"==g&&!s){if(d.sc_indicator="arrow","horizontal"==k&&"left"==h||"vertical"==k&&"up"==h)return d.sc_indicator_dir=0,b.callingNewSlide(d.c,1),!1;if("horizontal"==k&&"right"==h||"vertical"==k&&"down"==h)return d.sc_indicator_dir=1,b.callingNewSlide(d.c,-1),!1}return d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,!0}p>0&&(d.dragStartedOverThumbs=!0),q>0&&(d.dragStartedOverTabs=!0);var u=d.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",v=d.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",w=d.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=d.dragStartedOverThumbs?".tp-thumb":".tp-tab",y=d.dragStartedOverThumbs?d.navigation.thumbnails:d.navigation.tabs;i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i);var z=a.parent().find(v),A=z.find(w),B=y.direction,C="vertical"===B?A.height():A.width(),D="vertical"===B?z.height():z.width(),E="vertical"===B?z.find(x).first().outerHeight(!0)+y.space:z.find(x).first().outerWidth(!0)+y.space,F=void 0===A.data("offset")?0:parseInt(A.data("offset"),0),G=0;switch(g){case"start":a.parent().find(u).addClass("dragged"),F="vertical"===B?A.position().top:A.position().left,A.data("offset",F),A.data("tmmove")&&A.data("tmmove").pause();break;case"move":if(C<=D)return!1;G=F+i,G=G>0?"horizontal"===B?G-A.width()*(G/A.width()*G/A.width()):G-A.height()*(G/A.height()*G/A.height()):G;var H="vertical"===B?0-(A.height()-z.height()):0-(A.width()-z.width());G=G<H?"horizontal"===B?G+A.width()*(G-H)/A.width()*(G-H)/A.width():G+A.height()*(G-H)/A.height()*(G-H)/A.height():G,"vertical"===B?punchgs.TweenLite.set(A,{top:G+"px"}):punchgs.TweenLite.set(A,{left:G+"px"});break;case"end":case"cancel":if(s)return G=F+i,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,G=Math.abs(i)>E/10?i<=0?Math.floor(G/E)*E:Math.ceil(G/E)*E:i<0?Math.ceil(G/E)*E:Math.floor(G/E)*E,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,"vertical"===B?punchgs.TweenLite.to(A,.5,{top:G+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(A,.5,{left:G+"px",ease:punchgs.Power3.easeOut}),G=G||("vertical"===B?A.position().top:A.position().left),A.data("offset",G),A.data("distance",i),setTimeout(function(){d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1},100),a.parent().find(u).removeClass("dragged"),!1}}}})},l=function(a){a.hide_delay=jQuery.isNumeric(parseInt(a.hide_delay,0))?a.hide_delay/1e3:.2,a.hide_delay_mobile=jQuery.isNumeric(parseInt(a.hide_delay_mobile,0))?a.hide_delay_mobile/1e3:.2},m=function(a){return a&&a.enable},n=function(a){return a&&a.enable&&!0===a.hide_onleave&&(void 0===a.position||!a.position.match(/outer/g))},o=function(a,b){var d=a.parent();n(b.navigation.arrows)&&punchgs.TweenLite.delayedCall(c?b.navigation.arrows.hide_delay_mobile:b.navigation.arrows.hide_delay,p,[d.find(".tparrows"),b.navigation.arrows,"hide"]),n(b.navigation.bullets)&&punchgs.TweenLite.delayedCall(c?b.navigation.bullets.hide_delay_mobile:b.navigation.bullets.hide_delay,p,[d.find(".tp-bullets"),b.navigation.bullets,"hide"]),n(b.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(c?b.navigation.thumbnails.hide_delay_mobile:b.navigation.thumbnails.hide_delay,p,[d.find(".tp-thumbs"),b.navigation.thumbnails,"hide"]),n(b.navigation.tabs)&&punchgs.TweenLite.delayedCall(c?b.navigation.tabs.hide_delay_mobile:b.navigation.tabs.hide_delay,p,[d.find(".tp-tabs"),b.navigation.tabs,"hide"])},p=function(a,b,c,d){switch(d=void 0===d?.5:d,c){case"show":punchgs.TweenLite.to(a,d,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(a,d,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},q=function(a,b,c){b.style=void 0===b.style?"":b.style,b.left.style=void 0===b.left.style?"":b.left.style,b.right.style=void 0===b.right.style?"":b.right.style,0===a.find(".tp-leftarrow.tparrows").length&&a.append('<div class="tp-leftarrow tparrows '+b.style+" "+b.left.style+'">'+b.tmp+"</div>"),0===a.find(".tp-rightarrow.tparrows").length&&a.append('<div class="tp-rightarrow tparrows '+b.style+" "+b.right.style+'">'+b.tmp+"</div>");var d=a.find(".tp-leftarrow.tparrows"),e=a.find(".tp-rightarrow.tparrows");b.rtl?(d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})):(e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})),b.right.j=a.find(".tp-rightarrow.tparrows"),b.left.j=a.find(".tp-leftarrow.tparrows"),b.padding_top=parseInt(c.carousel.padding_top||0,0),b.padding_bottom=parseInt(c.carousel.padding_bottom||0,0),t(d,b.left,c),t(e,b.right,c),b.left.opt=c,b.right.opt=c,"outer-left"!=b.position&&"outer-right"!=b.position||(c.outernav=!0)},r=function(a,b,c){var d=a.outerHeight(!0),f=(a.outerWidth(!0),void 0==b.opt?0:0==c.conh?c.height:c.conh),g="layergrid"==b.container?"fullscreen"==c.sliderLayout?c.height/2-c.gridheight[c.curWinRange]*c.bh/2:"on"==c.autoHeight||void 0!=c.minHeight&&c.minHeight>0?f/2-c.gridheight[c.curWinRange]*c.bh/2:0:0,h="top"===b.v_align?{top:"0px",y:Math.round(b.v_offset+g)+"px"}:"center"===b.v_align?{top:"50%",y:Math.round(0-d/2+b.v_offset)+"px"}:{top:"100%",y:Math.round(0-(d+b.v_offset+g))+"px"};a.hasClass("outer-bottom")||punchgs.TweenLite.set(a,h)},s=function(a,b,c){var e=(a.outerHeight(!0),a.outerWidth(!0)),f="layergrid"==b.container?"carousel"===c.sliderType?0:c.width/2-c.gridwidth[c.curWinRange]*c.bw/2:0,g="left"===b.h_align?{left:"0px",x:Math.round(b.h_offset+f)+"px"}:"center"===b.h_align?{left:"50%",x:Math.round(0-e/2+b.h_offset)+"px"}:{left:"100%",x:Math.round(0-(e+b.h_offset+f))+"px"};punchgs.TweenLite.set(a,g)},t=function(a,b,c){var d=a.closest(".tp-simpleresponsive").length>0?a.closest(".tp-simpleresponsive"):a.closest(".tp-revslider-mainul").length>0?a.closest(".tp-revslider-mainul"):a.closest(".rev_slider_wrapper").length>0?a.closest(".rev_slider_wrapper"):a.parent().find(".tp-revslider-mainul"),e=d.width(),f=d.height();if(r(a,b,c),s(a,b,c),"outer-left"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout?"outer-right"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout||punchgs.TweenLite.set(a,{right:0-a.outerWidth()+"px",x:b.h_offset+"px"}):punchgs.TweenLite.set(a,{left:0-a.outerWidth()+"px",x:b.h_offset+"px"}),a.hasClass("tp-thumbs")||a.hasClass("tp-tabs")){var g=a.data("wr_padding"),h=a.data("maxw"),i=a.data("maxh"),j=a.hasClass("tp-thumbs")?a.find(".tp-thumb-mask"):a.find(".tp-tab-mask"),k=parseInt(b.padding_top||0,0),l=parseInt(b.padding_bottom||0,0);h>e&&"outer-left"!==b.position&&"outer-right"!==b.position?(punchgs.TweenLite.set(a,{left:"0px",x:0,maxWidth:e-2*g+"px"}),punchgs.TweenLite.set(j,{maxWidth:e-2*g+"px"})):(punchgs.TweenLite.set(a,{maxWidth:h+"px"}),punchgs.TweenLite.set(j,{maxWidth:h+"px"})),i+2*g>f&&"outer-bottom"!==b.position&&"outer-top"!==b.position?(punchgs.TweenLite.set(a,{top:"0px",y:0,maxHeight:k+l+(f-2*g)+"px"}),punchgs.TweenLite.set(j,{maxHeight:k+l+(f-2*g)+"px"})):(punchgs.TweenLite.set(a,{maxHeight:i+"px"}),punchgs.TweenLite.set(j,{maxHeight:i+"px"})),"outer-left"!==b.position&&"outer-right"!==b.position&&(k=0,l=0),!0===b.span&&"vertical"===b.direction?(punchgs.TweenLite.set(a,{maxHeight:k+l+(f-2*g)+"px",height:k+l+(f-2*g)+"px",top:0-k,y:0}),r(j,b,c)):!0===b.span&&"horizontal"===b.direction&&(punchgs.TweenLite.set(a,{maxWidth:"100%",width:e-2*g+"px",left:0,x:0}),s(j,b,c))}},u=function(a,b,c,d){0===a.find(".tp-bullets").length&&(b.style=void 0===b.style?"":b.style,a.append('<div class="tp-bullets '+b.style+" "+b.direction+'"></div>'));var e=a.find(".tp-bullets"),f=c.data("index"),g=b.tmp;jQuery.each(d.thumbs[c.index()].params,function(a,b){g=g.replace(b.from,b.to)}),e.append('<div class="justaddedbullet tp-bullet">'+g+"</div>");var h=a.find(".justaddedbullet"),i=a.find(".tp-bullet").length,j=h.outerWidth()+parseInt(void 0===b.space?0:b.space,0),k=h.outerHeight()+parseInt(void 0===b.space?0:b.space,0);"vertical"===b.direction?(h.css({top:(i-1)*k+"px",left:"0px"}),e.css({height:(i-1)*k+h.outerHeight(),width:h.outerWidth()})):(h.css({left:(i-1)*j+"px",top:"0px"}),e.css({width:(i-1)*j+h.outerWidth(),height:h.outerHeight()})),h.find(".tp-bullet-image").css({backgroundImage:"url("+d.thumbs[c.index()].src+")"}),h.data("liref",f),h.click(function(){d.sc_indicator="bullet",a.revcallslidewithid(f),a.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),h.removeClass("justaddedbullet"),b.padding_top=parseInt(d.carousel.padding_top||0,0),b.padding_bottom=parseInt(d.carousel.padding_bottom||0,0),b.opt=d,"outer-left"!=b.position&&"outer-right"!=b.position||(d.outernav=!0),e.addClass("nav-pos-hor-"+b.h_align),e.addClass("nav-pos-ver-"+b.v_align),e.addClass("nav-dir-"+b.direction),t(e,b,d)},w=function(a,b,c,d,e){var f="tp-thumb"===d?".tp-thumbs":".tp-tabs",g="tp-thumb"===d?".tp-thumb-mask":".tp-tab-mask",h="tp-thumb"===d?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",i="tp-thumb"===d?".tp-thumb":".tp-tab",j="tp-thumb"===d?".tp-thumb-image":".tp-tab-image";if(b.visibleAmount=b.visibleAmount>e.slideamount?e.slideamount:b.visibleAmount,b.sliderLayout=e.sliderLayout,0===a.parent().find(f).length){b.style=void 0===b.style?"":b.style;var k=!0===b.span?"tp-span-wrapper":"",l='<div class="'+d+"s "+k+" "+b.position+" "+b.style+'"><div class="'+d+'-mask"><div class="'+d+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===b.position?a.parent().prepend(l):"outer-bottom"===b.position?a.after(l):a.append(l),b.padding_top=parseInt(e.carousel.padding_top||0,0),b.padding_bottom=parseInt(e.carousel.padding_bottom||0,0),"outer-left"!=b.position&&"outer-right"!=b.position||(e.outernav=!0)}var m=c.data("index"),n=a.parent().find(f),o=n.find(g),p=o.find(h),q="horizontal"===b.direction?b.width*b.visibleAmount+b.space*(b.visibleAmount-1):b.width,r="horizontal"===b.direction?b.height:b.height*b.visibleAmount+b.space*(b.visibleAmount-1),s=b.tmp;jQuery.each(e.thumbs[c.index()].params,function(a,b){s=s.replace(b.from,b.to)}),p.append('<div data-liindex="'+c.index()+'" data-liref="'+m+'" class="justaddedthumb '+d+'" style="width:'+b.width+"px;height:"+b.height+'px;">'+s+"</div>");var u=n.find(".justaddedthumb"),v=n.find(i).length,w=u.outerWidth()+parseInt(void 0===b.space?0:b.space,0),x=u.outerHeight()+parseInt(void 0===b.space?0:b.space,0);u.find(j).css({backgroundImage:"url("+e.thumbs[c.index()].src+")"}),"vertical"===b.direction?(u.css({top:(v-1)*x+"px",left:"0px"}),p.css({height:(v-1)*x+u.outerHeight(),width:u.outerWidth()})):(u.css({left:(v-1)*w+"px",top:"0px"}),p.css({width:(v-1)*w+u.outerWidth(),height:u.outerHeight()})),n.data("maxw",q),n.data("maxh",r),n.data("wr_padding",b.wrapper_padding);var y="outer-top"===b.position||"outer-bottom"===b.position?"relative":"absolute";"outer-top"!==b.position&&"outer-bottom"!==b.position||b.h_align;o.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"hidden",position:"relative"}),n.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"visible",position:y,background:b.wrapper_color,padding:b.wrapper_padding+"px",boxSizing:"contet-box"}),u.click(function(){e.sc_indicator="bullet";var b=a.parent().find(h).data("distance");b=void 0===b?0:b,Math.abs(b)<10&&(a.revcallslidewithid(m),a.parent().find(f).removeClass("selected"),jQuery(this).addClass("selected"))}),u.removeClass("justaddedthumb"),b.opt=e,n.addClass("nav-pos-hor-"+b.h_align),n.addClass("nav-pos-ver-"+b.v_align),n.addClass("nav-dir-"+b.direction),t(n,b,e)},x=function(a){var b=a.c.parent().find(".outer-top"),c=a.c.parent().find(".outer-bottom");a.top_outer=b.hasClass("tp-forcenotvisible")?0:b.outerHeight()||0,a.bottom_outer=c.hasClass("tp-forcenotvisible")?0:c.outerHeight()||0},y=function(a,b,c,d){b>c||c>d?a.addClass("tp-forcenotvisible"):a.removeClass("tp-forcenotvisible")}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.5 EXTENSION - NAVIGATION
 * @version: 1.3.5 (06.04.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.4.0",version:"1.3.5"};jQuery.extend(!0,b,{hideUnHideNav:function(a){var b=a.c.width(),c=a.navigation.arrows,d=a.navigation.bullets,e=a.navigation.thumbnails,f=a.navigation.tabs;m(c)&&y(a.c.find(".tparrows"),c.hide_under,b,c.hide_over),m(d)&&y(a.c.find(".tp-bullets"),d.hide_under,b,d.hide_over),m(e)&&y(a.c.parent().find(".tp-thumbs"),e.hide_under,b,e.hide_over),m(f)&&y(a.c.parent().find(".tp-tabs"),f.hide_under,b,f.hide_over),x(a)},resizeThumbsTabs:function(a,b){if(a.navigation&&a.navigation.tabs.enable||a.navigation&&a.navigation.thumbnails.enable){var c=(jQuery(window).width()-480)/500,d=new punchgs.TimelineLite,e=a.navigation.tabs,g=a.navigation.thumbnails,h=a.navigation.bullets;if(d.pause(),c=c>1?1:c<0?0:c,m(e)&&(b||e.width>e.min_width)&&f(c,d,a.c,e,a.slideamount,"tab"),m(g)&&(b||g.width>g.min_width)&&f(c,d,a.c,g,a.slideamount,"thumb"),m(h)&&b){var i=a.c.find(".tp-bullets");i.find(".tp-bullet").each(function(a){var b=jQuery(this),c=a+1,d=b.outerWidth()+parseInt(void 0===h.space?0:h.space,0),e=b.outerHeight()+parseInt(void 0===h.space?0:h.space,0);"vertical"===h.direction?(b.css({top:(c-1)*e+"px",left:"0px"}),i.css({height:(c-1)*e+b.outerHeight(),width:b.outerWidth()})):(b.css({left:(c-1)*d+"px",top:"0px"}),i.css({width:(c-1)*d+b.outerWidth(),height:b.outerHeight()}))})}d.play(),x(a)}return!0},updateNavIndexes:function(a){function d(a){c.find(a).lenght>0&&c.find(a).each(function(a){jQuery(this).data("liindex",a)})}var c=a.c;d(".tp-tab"),d(".tp-bullet"),d(".tp-thumb"),b.resizeThumbsTabs(a,!0),b.manageNavigation(a)},manageNavigation:function(a){var c=b.getHorizontalOffset(a.c.parent(),"left"),d=b.getHorizontalOffset(a.c.parent(),"right");m(a.navigation.bullets)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.bullets.h_offset_old=void 0===a.navigation.bullets.h_offset_old?a.navigation.bullets.h_offset:a.navigation.bullets.h_offset_old,a.navigation.bullets.h_offset="center"===a.navigation.bullets.h_align?a.navigation.bullets.h_offset_old+c/2-d/2:a.navigation.bullets.h_offset_old+c-d),t(a.c.find(".tp-bullets"),a.navigation.bullets,a)),m(a.navigation.thumbnails)&&t(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails,a),m(a.navigation.tabs)&&t(a.c.parent().find(".tp-tabs"),a.navigation.tabs,a),m(a.navigation.arrows)&&("fullscreen"!=a.sliderLayout&&"fullwidth"!=a.sliderLayout&&(a.navigation.arrows.left.h_offset_old=void 0===a.navigation.arrows.left.h_offset_old?a.navigation.arrows.left.h_offset:a.navigation.arrows.left.h_offset_old,a.navigation.arrows.left.h_offset="right"===a.navigation.arrows.left.h_align?a.navigation.arrows.left.h_offset_old+d:a.navigation.arrows.left.h_offset_old+c,a.navigation.arrows.right.h_offset_old=void 0===a.navigation.arrows.right.h_offset_old?a.navigation.arrows.right.h_offset:a.navigation.arrows.right.h_offset_old,a.navigation.arrows.right.h_offset="right"===a.navigation.arrows.right.h_align?a.navigation.arrows.right.h_offset_old+d:a.navigation.arrows.right.h_offset_old+c),t(a.c.find(".tp-leftarrow.tparrows"),a.navigation.arrows.left,a),t(a.c.find(".tp-rightarrow.tparrows"),a.navigation.arrows.right,a)),m(a.navigation.thumbnails)&&e(a.c.parent().find(".tp-thumbs"),a.navigation.thumbnails),m(a.navigation.tabs)&&e(a.c.parent().find(".tp-tabs"),a.navigation.tabs)},createNavigation:function(a,f){if("stop"===b.compare_version(d).check)return!1;var g=a.parent(),j=f.navigation.arrows,n=f.navigation.bullets,r=f.navigation.thumbnails,s=f.navigation.tabs,t=m(j),v=m(n),x=m(r),y=m(s);h(a,f),i(a,f),t&&q(a,j,f),f.li.each(function(b){var c=jQuery(f.li[f.li.length-1-b]),d=jQuery(this);v&&(f.navigation.bullets.rtl?u(a,n,c,f):u(a,n,d,f)),x&&(f.navigation.thumbnails.rtl?w(a,r,c,"tp-thumb",f):w(a,r,d,"tp-thumb",f)),y&&(f.navigation.tabs.rtl?w(a,s,c,"tp-tab",f):w(a,s,d,"tp-tab",f))}),a.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var b=0==a.find(".next-revslide").length?a.find(".active-revslide").data("index"):a.find(".next-revslide").data("index");a.find(".tp-bullet").each(function(){var a=jQuery(this);a.data("liref")===b?a.addClass("selected"):a.removeClass("selected")}),g.find(".tp-thumb, .tp-tab").each(function(){var a=jQuery(this);a.data("liref")===b?(a.addClass("selected"),a.hasClass("tp-tab")?e(g.find(".tp-tabs"),s):e(g.find(".tp-thumbs"),r)):a.removeClass("selected")});var c=0,d=!1;f.thumbs&&jQuery.each(f.thumbs,function(a,e){c=!1===d?a:c,d=e.id===b||a===b||d});var h=c>0?c-1:f.slideamount-1,i=c+1==f.slideamount?0:c+1;if(!0===j.enable){var k=j.tmp;if(void 0!=f.thumbs[h]&&jQuery.each(f.thumbs[h].params,function(a,b){k=k.replace(b.from,b.to)}),j.left.j.html(k),k=j.tmp,i>f.slideamount)return;jQuery.each(f.thumbs[i].params,function(a,b){k=k.replace(b.from,b.to)}),j.right.j.html(k),j.rtl?(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"})):(punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[h].src+")"}),punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+f.thumbs[i].src+")"}))}}),l(j),l(n),l(r),l(s),g.on("mouseenter mousemove",function(){g.hasClass("tp-mouseover")||(g.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(p),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"show"),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"show"),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"show"),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"show"),c&&(g.removeClass("tp-mouseover"),o(a,f)))}),g.on("mouseleave",function(){g.removeClass("tp-mouseover"),o(a,f)}),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"hide",0),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"hide",0),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"hide",0),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"hide",0),x&&k(g.find(".tp-thumbs"),f),y&&k(g.find(".tp-tabs"),f),"carousel"===f.sliderType&&k(a,f,!0),("on"===f.navigation.touch.touchOnDesktop||"on"==f.navigation.touch.touchenabled&&c)&&k(a,f,"swipebased")}});var e=function(a,b){var d=(a.hasClass("tp-thumbs"),a.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),e=a.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",f=a.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",g=a.find(d),h=g.find(e),i=b.direction,j="vertical"===i?g.find(f).first().outerHeight(!0)+b.space:g.find(f).first().outerWidth(!0)+b.space,k="vertical"===i?g.height():g.width(),l=parseInt(g.find(f+".selected").data("liindex"),0),m=k/j,n="vertical"===i?g.height():g.width(),o=0-l*j,p="vertical"===i?h.height():h.width(),q=o<0-(p-n)?0-(p-n):q>0?0:o,r=h.data("offset");m>2&&(q=o-(r+j)<=0?o-(r+j)<0-j?r:q+j:q,q=o-j+r+k<j&&o+(Math.round(m)-2)*j<r?o+(Math.round(m)-2)*j:q),q=q<0-(p-n)?0-(p-n):q>0?0:q,"vertical"!==i&&g.width()>=h.width()&&(q=0),"vertical"===i&&g.height()>=h.height()&&(q=0),a.hasClass("dragged")||("vertical"===i?h.data("tmmove",punchgs.TweenLite.to(h,.5,{top:q+"px",ease:punchgs.Power3.easeInOut})):h.data("tmmove",punchgs.TweenLite.to(h,.5,{left:q+"px",ease:punchgs.Power3.easeInOut})),h.data("offset",q))},f=function(a,b,c,d,e,f){var g=c.parent().find(".tp-"+f+"s"),h=g.find(".tp-"+f+"s-inner-wrapper"),i=g.find(".tp-"+f+"-mask"),j=d.width*a<d.min_width?d.min_width:Math.round(d.width*a),k=Math.round(j/d.width*d.height),l="vertical"===d.direction?j:j*e+d.space*(e-1),m="vertical"===d.direction?k*e+d.space*(e-1):k,n="vertical"===d.direction?{width:j+"px"}:{height:k+"px"};b.add(punchgs.TweenLite.set(g,n)),b.add(punchgs.TweenLite.set(h,{width:l+"px",height:m+"px"})),b.add(punchgs.TweenLite.set(i,{width:l+"px",height:m+"px"}));var o=h.find(".tp-"+f);return o&&jQuery.each(o,function(a,c){"vertical"===d.direction?b.add(punchgs.TweenLite.set(c,{top:a*(k+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"})):"horizontal"===d.direction&&b.add(punchgs.TweenLite.set(c,{left:a*(j+parseInt(void 0===d.space?0:d.space,0)),width:j+"px",height:k+"px"}))}),b},g=function(a){var b=0,c=0,d=0,e=0,f=1,g=1,h=1;return"detail"in a&&(c=a.detail),"wheelDelta"in a&&(c=-a.wheelDelta/120),"wheelDeltaY"in a&&(c=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(b=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(b=c,c=0),d=b*f,e=c*f,"deltaY"in a&&(e=a.deltaY),"deltaX"in a&&(d=a.deltaX),(d||e)&&a.deltaMode&&(1==a.deltaMode?(d*=g,e*=g):(d*=h,e*=h)),d&&!b&&(b=d<1?-1:1),e&&!c&&(c=e<1?-1:1),e=navigator.userAgent.match(/mozilla/i)?10*e:e,(e>300||e<-300)&&(e/=10),{spinX:b,spinY:c,pixelX:d,pixelY:e}},h=function(a,c){"on"===c.navigation.keyboardNavigation&&jQuery(document).keydown(function(d){("horizontal"==c.navigation.keyboard_direction&&39==d.keyCode||"vertical"==c.navigation.keyboard_direction&&40==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=0,b.callingNewSlide(a,1)),("horizontal"==c.navigation.keyboard_direction&&37==d.keyCode||"vertical"==c.navigation.keyboard_direction&&38==d.keyCode)&&(c.sc_indicator="arrow",c.sc_indicator_dir=1,b.callingNewSlide(a,-1))})},i=function(a,c){if("on"===c.navigation.mouseScrollNavigation||"carousel"===c.navigation.mouseScrollNavigation){c.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),c.isSafari=!!navigator.userAgent.match(/safari/i),c.ischrome=!!navigator.userAgent.match(/chrome/i);var d=c.ischrome?-49:c.isIEEleven||c.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,e=c.ischrome?49:c.isIEEleven||c.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;a.on("mousewheel DOMMouseScroll",function(f){var h=g(f.originalEvent),i=a.find(".tp-revslider-slidesli.active-revslide").index(),j=a.find(".tp-revslider-slidesli.processing-revslide").index(),k=-1!=i&&0==i||-1!=j&&0==j,l=-1!=i&&i==c.slideamount-1||1!=j&&j==c.slideamount-1,m=!0;"carousel"==c.navigation.mouseScrollNavigation&&(k=l=!1),-1==j?h.pixelY<d?(k||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1),l||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1)):h.pixelY>e&&(l||(c.sc_indicator="arrow","reverse"!==c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=0,b.callingNewSlide(a,1)),m=!1),k||(c.sc_indicator="arrow","reverse"===c.navigation.mouseScrollReverse&&(c.sc_indicator_dir=1,b.callingNewSlide(a,-1)),m=!1)):m=!1;var n=c.c.offset().top-jQuery("body").scrollTop(),o=n+c.c.height();return"carousel"!=c.navigation.mouseScrollNavigation?("reverse"!==c.navigation.mouseScrollReverse&&(n>0&&h.pixelY>0||o<jQuery(window).height()&&h.pixelY<0)&&(m=!0),"reverse"===c.navigation.mouseScrollReverse&&(n<0&&h.pixelY<0||o>jQuery(window).height()&&h.pixelY>0)&&(m=!0)):m=!1,0==m?(f.preventDefault(f),!1):void 0})}},j=function(a,b,d){return a=c?jQuery(d.target).closest("."+a).length||jQuery(d.srcElement).closest("."+a).length:jQuery(d.toElement).closest("."+a).length||jQuery(d.originalTarget).closest("."+a).length,!0===a||1===a?1:0},k=function(a,d,e){var f=d.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),f.Limit="endless";var h=(c||b.get_browser(),a),i="vertical"===d.navigation.thumbnails.direction||"vertical"===d.navigation.tabs.direction?"none":"vertical",k=d.navigation.touch.swipe_direction||"horizontal";i="swipebased"==e&&"vertical"==k?"none":e?"vertical":i,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",h.swipetp({allowPageScroll:i,triggerOnTouchLeave:!0,treshold:d.navigation.touch.swipe_treshold,fingers:d.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(e,g,h,i,l,m,n){var o=j("rev_slider_wrapper",a,e),p=j("tp-thumbs",a,e),q=j("tp-tabs",a,e),r=jQuery(this).attr("class"),s=!!r.match(/tp-tabs|tp-thumb/gi);if("carousel"===d.sliderType&&(("move"===g||"end"===g||"cancel"==g)&&d.dragStartedOverSlider&&!d.dragStartedOverThumbs&&!d.dragStartedOverTabs||"start"===g&&o>0&&0===p&&0===q)){if(c&&("up"===h||"down"===h))return;switch(d.dragStartedOverSlider=!0,i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i),g){case"start":void 0!==f.positionanim&&(f.positionanim.kill(),f.slide_globaloffset="off"===f.infinity?f.slide_offset:b.simp(f.slide_offset,f.maxwidth)),f.overpull="none",f.wrap.addClass("dragged");break;case"move":if(d.c.find(".tp-withaction").addClass("tp-temporarydisabled"),f.slide_offset="off"===f.infinity?f.slide_globaloffset+i:b.simp(f.slide_globaloffset+i,f.maxwidth),"off"===f.infinity){var t="center"===f.horizontal_align?(f.wrapwidth/2-f.slide_width/2-f.slide_offset)/f.slide_width:(0-f.slide_offset)/f.slide_width;"none"!==f.overpull&&0!==f.overpull||!(t<0||t>d.slideamount-1)?t>=0&&t<=d.slideamount-1&&(t>=0&&i>f.overpull||t<=d.slideamount-1&&i<f.overpull)&&(f.overpull=0):f.overpull=i,f.slide_offset=t<0?f.slide_offset+(f.overpull-i)/1.1+Math.sqrt(Math.abs((f.overpull-i)/1.1)):t>d.slideamount-1?f.slide_offset+(f.overpull-i)/1.1-Math.sqrt(Math.abs((f.overpull-i)/1.1)):f.slide_offset}b.organiseCarousel(d,h,!0,!0);break;case"end":case"cancel":f.slide_globaloffset=f.slide_offset,f.wrap.removeClass("dragged"),b.carouselToEvalPosition(d,h),d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,setTimeout(function(){d.c.find(".tp-withaction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==g&&"end"!==g&&"cancel"!=g||d.dragStartedOverSlider||!d.dragStartedOverThumbs&&!d.dragStartedOverTabs)&&!("start"===g&&o>0&&(p>0||q>0))){if("end"==g&&!s){if(d.sc_indicator="arrow","horizontal"==k&&"left"==h||"vertical"==k&&"up"==h)return d.sc_indicator_dir=0,b.callingNewSlide(d.c,1),!1;if("horizontal"==k&&"right"==h||"vertical"==k&&"down"==h)return d.sc_indicator_dir=1,b.callingNewSlide(d.c,-1),!1}return d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1,!0}p>0&&(d.dragStartedOverThumbs=!0),q>0&&(d.dragStartedOverTabs=!0);var u=d.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",v=d.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",w=d.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=d.dragStartedOverThumbs?".tp-thumb":".tp-tab",y=d.dragStartedOverThumbs?d.navigation.thumbnails:d.navigation.tabs;i=h&&h.match(/left|up/g)?Math.round(-1*i):i=Math.round(1*i);var z=a.parent().find(v),A=z.find(w),B=y.direction,C="vertical"===B?A.height():A.width(),D="vertical"===B?z.height():z.width(),E="vertical"===B?z.find(x).first().outerHeight(!0)+y.space:z.find(x).first().outerWidth(!0)+y.space,F=void 0===A.data("offset")?0:parseInt(A.data("offset"),0),G=0;switch(g){case"start":a.parent().find(u).addClass("dragged"),F="vertical"===B?A.position().top:A.position().left,A.data("offset",F),A.data("tmmove")&&A.data("tmmove").pause();break;case"move":if(C<=D)return!1;G=F+i,G=G>0?"horizontal"===B?G-A.width()*(G/A.width()*G/A.width()):G-A.height()*(G/A.height()*G/A.height()):G;var H="vertical"===B?0-(A.height()-z.height()):0-(A.width()-z.width());G=G<H?"horizontal"===B?G+A.width()*(G-H)/A.width()*(G-H)/A.width():G+A.height()*(G-H)/A.height()*(G-H)/A.height():G,"vertical"===B?punchgs.TweenLite.set(A,{top:G+"px"}):punchgs.TweenLite.set(A,{left:G+"px"});break;case"end":case"cancel":if(s)return G=F+i,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,G=Math.abs(i)>E/10?i<=0?Math.floor(G/E)*E:Math.ceil(G/E)*E:i<0?Math.ceil(G/E)*E:Math.floor(G/E)*E,G="vertical"===B?G<0-(A.height()-z.height())?0-(A.height()-z.height()):G:G<0-(A.width()-z.width())?0-(A.width()-z.width()):G,G=G>0?0:G,"vertical"===B?punchgs.TweenLite.to(A,.5,{top:G+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(A,.5,{left:G+"px",ease:punchgs.Power3.easeOut}),G=G||("vertical"===B?A.position().top:A.position().left),A.data("offset",G),A.data("distance",i),setTimeout(function(){d.dragStartedOverSlider=!1,d.dragStartedOverThumbs=!1,d.dragStartedOverTabs=!1},100),a.parent().find(u).removeClass("dragged"),!1}}}})},l=function(a){a.hide_delay=jQuery.isNumeric(parseInt(a.hide_delay,0))?a.hide_delay/1e3:.2,a.hide_delay_mobile=jQuery.isNumeric(parseInt(a.hide_delay_mobile,0))?a.hide_delay_mobile/1e3:.2},m=function(a){return a&&a.enable},n=function(a){return a&&a.enable&&!0===a.hide_onleave&&(void 0===a.position||!a.position.match(/outer/g))},o=function(a,b){var d=a.parent();n(b.navigation.arrows)&&punchgs.TweenLite.delayedCall(c?b.navigation.arrows.hide_delay_mobile:b.navigation.arrows.hide_delay,p,[d.find(".tparrows"),b.navigation.arrows,"hide"]),n(b.navigation.bullets)&&punchgs.TweenLite.delayedCall(c?b.navigation.bullets.hide_delay_mobile:b.navigation.bullets.hide_delay,p,[d.find(".tp-bullets"),b.navigation.bullets,"hide"]),n(b.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(c?b.navigation.thumbnails.hide_delay_mobile:b.navigation.thumbnails.hide_delay,p,[d.find(".tp-thumbs"),b.navigation.thumbnails,"hide"]),n(b.navigation.tabs)&&punchgs.TweenLite.delayedCall(c?b.navigation.tabs.hide_delay_mobile:b.navigation.tabs.hide_delay,p,[d.find(".tp-tabs"),b.navigation.tabs,"hide"])},p=function(a,b,c,d){switch(d=void 0===d?.5:d,c){case"show":punchgs.TweenLite.to(a,d,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(a,d,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},q=function(a,b,c){b.style=void 0===b.style?"":b.style,b.left.style=void 0===b.left.style?"":b.left.style,b.right.style=void 0===b.right.style?"":b.right.style,0===a.find(".tp-leftarrow.tparrows").length&&a.append('<div class="tp-leftarrow tparrows '+b.style+" "+b.left.style+'">'+b.tmp+"</div>"),0===a.find(".tp-rightarrow.tparrows").length&&a.append('<div class="tp-rightarrow tparrows '+b.style+" "+b.right.style+'">'+b.tmp+"</div>");var d=a.find(".tp-leftarrow.tparrows"),e=a.find(".tp-rightarrow.tparrows");b.rtl?(d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})):(e.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=0,a.revnext()}),d.click(function(){c.sc_indicator="arrow",c.sc_indicator_dir=1,a.revprev()})),b.right.j=a.find(".tp-rightarrow.tparrows"),b.left.j=a.find(".tp-leftarrow.tparrows"),b.padding_top=parseInt(c.carousel.padding_top||0,0),b.padding_bottom=parseInt(c.carousel.padding_bottom||0,0),t(d,b.left,c),t(e,b.right,c),b.left.opt=c,b.right.opt=c,"outer-left"!=b.position&&"outer-right"!=b.position||(c.outernav=!0)},r=function(a,b,c){var d=a.outerHeight(!0),f=(a.outerWidth(!0),void 0==b.opt?0:0==c.conh?c.height:c.conh),g="layergrid"==b.container?"fullscreen"==c.sliderLayout?c.height/2-c.gridheight[c.curWinRange]*c.bh/2:"on"==c.autoHeight||void 0!=c.minHeight&&c.minHeight>0?f/2-c.gridheight[c.curWinRange]*c.bh/2:0:0,h="top"===b.v_align?{top:"0px",y:Math.round(b.v_offset+g)+"px"}:"center"===b.v_align?{top:"50%",y:Math.round(0-d/2+b.v_offset)+"px"}:{top:"100%",y:Math.round(0-(d+b.v_offset+g))+"px"};a.hasClass("outer-bottom")||punchgs.TweenLite.set(a,h)},s=function(a,b,c){var e=(a.outerHeight(!0),a.outerWidth(!0)),f="layergrid"==b.container?"carousel"===c.sliderType?0:c.width/2-c.gridwidth[c.curWinRange]*c.bw/2:0,g="left"===b.h_align?{left:"0px",x:Math.round(b.h_offset+f)+"px"}:"center"===b.h_align?{left:"50%",x:Math.round(0-e/2+b.h_offset)+"px"}:{left:"100%",x:Math.round(0-(e+b.h_offset+f))+"px"};punchgs.TweenLite.set(a,g)},t=function(a,b,c){var d=a.closest(".tp-simpleresponsive").length>0?a.closest(".tp-simpleresponsive"):a.closest(".tp-revslider-mainul").length>0?a.closest(".tp-revslider-mainul"):a.closest(".rev_slider_wrapper").length>0?a.closest(".rev_slider_wrapper"):a.parent().find(".tp-revslider-mainul"),e=d.width(),f=d.height();if(r(a,b,c),s(a,b,c),"outer-left"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout?"outer-right"!==b.position||"fullwidth"!=b.sliderLayout&&"fullscreen"!=b.sliderLayout||punchgs.TweenLite.set(a,{right:0-a.outerWidth()+"px",x:b.h_offset+"px"}):punchgs.TweenLite.set(a,{left:0-a.outerWidth()+"px",x:b.h_offset+"px"}),a.hasClass("tp-thumbs")||a.hasClass("tp-tabs")){var g=a.data("wr_padding"),h=a.data("maxw"),i=a.data("maxh"),j=a.hasClass("tp-thumbs")?a.find(".tp-thumb-mask"):a.find(".tp-tab-mask"),k=parseInt(b.padding_top||0,0),l=parseInt(b.padding_bottom||0,0);h>e&&"outer-left"!==b.position&&"outer-right"!==b.position?(punchgs.TweenLite.set(a,{left:"0px",x:0,maxWidth:e-2*g+"px"}),punchgs.TweenLite.set(j,{maxWidth:e-2*g+"px"})):(punchgs.TweenLite.set(a,{maxWidth:h+"px"}),punchgs.TweenLite.set(j,{maxWidth:h+"px"})),i+2*g>f&&"outer-bottom"!==b.position&&"outer-top"!==b.position?(punchgs.TweenLite.set(a,{top:"0px",y:0,maxHeight:k+l+(f-2*g)+"px"}),punchgs.TweenLite.set(j,{maxHeight:k+l+(f-2*g)+"px"})):(punchgs.TweenLite.set(a,{maxHeight:i+"px"}),punchgs.TweenLite.set(j,{maxHeight:i+"px"})),"outer-left"!==b.position&&"outer-right"!==b.position&&(k=0,l=0),!0===b.span&&"vertical"===b.direction?(punchgs.TweenLite.set(a,{maxHeight:k+l+(f-2*g)+"px",height:k+l+(f-2*g)+"px",top:0-k,y:0}),r(j,b,c)):!0===b.span&&"horizontal"===b.direction&&(punchgs.TweenLite.set(a,{maxWidth:"100%",width:e-2*g+"px",left:0,x:0}),s(j,b,c))}},u=function(a,b,c,d){0===a.find(".tp-bullets").length&&(b.style=void 0===b.style?"":b.style,a.append('<div class="tp-bullets '+b.style+" "+b.direction+'"></div>'));var e=a.find(".tp-bullets"),f=c.data("index"),g=b.tmp;jQuery.each(d.thumbs[c.index()].params,function(a,b){g=g.replace(b.from,b.to)}),e.append('<div class="justaddedbullet tp-bullet">'+g+"</div>");var h=a.find(".justaddedbullet"),i=a.find(".tp-bullet").length,j=h.outerWidth()+parseInt(void 0===b.space?0:b.space,0),k=h.outerHeight()+parseInt(void 0===b.space?0:b.space,0);"vertical"===b.direction?(h.css({top:(i-1)*k+"px",left:"0px"}),e.css({height:(i-1)*k+h.outerHeight(),width:h.outerWidth()})):(h.css({left:(i-1)*j+"px",top:"0px"}),e.css({width:(i-1)*j+h.outerWidth(),height:h.outerHeight()})),h.find(".tp-bullet-image").css({backgroundImage:"url("+d.thumbs[c.index()].src+")"}),h.data("liref",f),h.click(function(){d.sc_indicator="bullet",a.revcallslidewithid(f),a.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),h.removeClass("justaddedbullet"),b.padding_top=parseInt(d.carousel.padding_top||0,0),b.padding_bottom=parseInt(d.carousel.padding_bottom||0,0),b.opt=d,"outer-left"!=b.position&&"outer-right"!=b.position||(d.outernav=!0),e.addClass("nav-pos-hor-"+b.h_align),e.addClass("nav-pos-ver-"+b.v_align),e.addClass("nav-dir-"+b.direction),t(e,b,d)},w=function(a,b,c,d,e){var f="tp-thumb"===d?".tp-thumbs":".tp-tabs",g="tp-thumb"===d?".tp-thumb-mask":".tp-tab-mask",h="tp-thumb"===d?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",i="tp-thumb"===d?".tp-thumb":".tp-tab",j="tp-thumb"===d?".tp-thumb-image":".tp-tab-image";if(b.visibleAmount=b.visibleAmount>e.slideamount?e.slideamount:b.visibleAmount,b.sliderLayout=e.sliderLayout,0===a.parent().find(f).length){b.style=void 0===b.style?"":b.style;var k=!0===b.span?"tp-span-wrapper":"",l='<div class="'+d+"s "+k+" "+b.position+" "+b.style+'"><div class="'+d+'-mask"><div class="'+d+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===b.position?a.parent().prepend(l):"outer-bottom"===b.position?a.after(l):a.append(l),b.padding_top=parseInt(e.carousel.padding_top||0,0),b.padding_bottom=parseInt(e.carousel.padding_bottom||0,0),"outer-left"!=b.position&&"outer-right"!=b.position||(e.outernav=!0)}var m=c.data("index"),n=a.parent().find(f),o=n.find(g),p=o.find(h),q="horizontal"===b.direction?b.width*b.visibleAmount+b.space*(b.visibleAmount-1):b.width,r="horizontal"===b.direction?b.height:b.height*b.visibleAmount+b.space*(b.visibleAmount-1),s=b.tmp;jQuery.each(e.thumbs[c.index()].params,function(a,b){s=s.replace(b.from,b.to)}),p.append('<div data-liindex="'+c.index()+'" data-liref="'+m+'" class="justaddedthumb '+d+'" style="width:'+b.width+"px;height:"+b.height+'px;">'+s+"</div>");var u=n.find(".justaddedthumb"),v=n.find(i).length,w=u.outerWidth()+parseInt(void 0===b.space?0:b.space,0),x=u.outerHeight()+parseInt(void 0===b.space?0:b.space,0);u.find(j).css({backgroundImage:"url("+e.thumbs[c.index()].src+")"}),"vertical"===b.direction?(u.css({top:(v-1)*x+"px",left:"0px"}),p.css({height:(v-1)*x+u.outerHeight(),width:u.outerWidth()})):(u.css({left:(v-1)*w+"px",top:"0px"}),p.css({width:(v-1)*w+u.outerWidth(),height:u.outerHeight()})),n.data("maxw",q),n.data("maxh",r),n.data("wr_padding",b.wrapper_padding);var y="outer-top"===b.position||"outer-bottom"===b.position?"relative":"absolute";"outer-top"!==b.position&&"outer-bottom"!==b.position||b.h_align;o.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"hidden",position:"relative"}),n.css({maxWidth:q+"px",maxHeight:r+"px",overflow:"visible",position:y,background:b.wrapper_color,padding:b.wrapper_padding+"px",boxSizing:"contet-box"}),u.click(function(){e.sc_indicator="bullet";var b=a.parent().find(h).data("distance");b=void 0===b?0:b,Math.abs(b)<10&&(a.revcallslidewithid(m),a.parent().find(f).removeClass("selected"),jQuery(this).addClass("selected"))}),u.removeClass("justaddedthumb"),b.opt=e,n.addClass("nav-pos-hor-"+b.h_align),n.addClass("nav-pos-ver-"+b.v_align),n.addClass("nav-dir-"+b.direction),t(n,b,e)},x=function(a){var b=a.c.parent().find(".outer-top"),c=a.c.parent().find(".outer-bottom");a.top_outer=b.hasClass("tp-forcenotvisible")?0:b.outerHeight()||0,a.bottom_outer=c.hasClass("tp-forcenotvisible")?0:c.outerHeight()||0},y=function(a,b,c,d){b>c||c>d?a.addClass("tp-forcenotvisible"):a.removeClass("tp-forcenotvisible")}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.5 EXTENSION - PARALLAX
 * @version: 2.2.3 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";function e(a,b){a.lastscrolltop=b}var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Parallax Min JS",name:"revolution.extensions.parallax.min.js",min_core:"5.4.5",version:"2.2.3"};jQuery.extend(!0,b,{checkForParallax:function(a,e){function g(a){if("3D"==f.type||"3d"==f.type){a.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),a.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+f.ddd_layer_overflow+';"></div>'),a.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var b=a.find(".dddwrapper"),c=a.find(".dddwrapper-layer");a.find(".dddwrapper-layertobggroup").appendTo(b),"carousel"==e.sliderType&&("on"==f.ddd_shadow&&b.addClass("dddwrappershadow"),punchgs.TweenLite.set(b,{borderRadius:e.carousel.border_radius})),punchgs.TweenLite.set(a,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(b,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(c,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(e.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}}if("stop"===b.compare_version(d).check)return!1;var f=e.parallax;if(!f.done){if(f.done=!0,c&&"on"==f.disable_onmobile)return!1;"3D"!=f.type&&"3d"!=f.type||(punchgs.TweenLite.set(e.c,{overflow:f.ddd_overflow}),punchgs.TweenLite.set(e.ul,{overflow:f.ddd_overflow}),"carousel"!=e.sliderType&&"on"==f.ddd_shadow&&(e.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(e.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),e.li.each(function(){g(jQuery(this))}),("3D"==f.type||"3d"==f.type)&&e.c.find(".tp-static-layers").length>0&&(punchgs.TweenLite.set(e.c.find(".tp-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),g(e.c.find(".tp-static-layers"))),f.pcontainers=new Array,f.pcontainer_depths=new Array,f.bgcontainers=new Array,f.bgcontainer_depths=new Array,e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var a=jQuery(this),b=a.data("bgparallax")||e.parallax.bgparallax;void 0!==(b="on"==b?1:b)&&"off"!==b&&(f.bgcontainers.push(a),f.bgcontainer_depths.push(e.parallax.levels[parseInt(b,0)-1]/100))});for(var h=1;h<=f.levels.length;h++)e.c.find(".rs-parallaxlevel-"+h).each(function(){var a=jQuery(this),b=a.closest(".tp-parallax-wrap");b.data("parallaxlevel",f.levels[h-1]),b.addClass("tp-parallax-container"),f.pcontainers.push(b),f.pcontainer_depths.push(f.levels[h-1])});"mouse"!=f.type&&"scroll+mouse"!=f.type&&"mouse+scroll"!=f.type&&"3D"!=f.type&&"3d"!=f.type||(a.mouseenter(function(b){var c=a.find(".active-revslide"),d=a.offset().top,e=a.offset().left,f=b.pageX-e,g=b.pageY-d;c.data("enterx",f),c.data("entery",g)}),a.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(b,c){var d=c&&c.li?c.li:a.find(".active-revslide");if("enterpoint"==f.origo){var g=a.offset().top,h=a.offset().left;void 0==d.data("enterx")&&d.data("enterx",b.pageX-h),void 0==d.data("entery")&&d.data("entery",b.pageY-g);var i=d.data("enterx")||b.pageX-h,j=d.data("entery")||b.pageY-g,k=i-(b.pageX-h),l=j-(b.pageY-g),m=f.speed/1e3||.4}else var g=a.offset().top,h=a.offset().left,k=e.conw/2-(b.pageX-h),l=e.conh/2-(b.pageY-g),m=f.speed/1e3||3;"mouseleave"==b.type&&(k=f.ddd_lasth||0,l=f.ddd_lastv||0,m=1.5);for(var n=0;n<f.pcontainers.length;n++){var o=f.pcontainers[n],p=f.pcontainer_depths[n],q="3D"==f.type||"3d"==f.type?p/200:p/100,r=k*q,s=l*q;"scroll+mouse"==f.type||"mouse+scroll"==f.type?punchgs.TweenLite.to(o,m,{force3D:"auto",x:r,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(o,m,{force3D:"auto",x:r,y:s,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==f.type||"3d"==f.type){var t=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===e.sliderType&&(t=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),e.c.find(t).each(function(){var a=jQuery(this),c=f.levels[f.levels.length-1]/200,d=k*c,g=l*c,h=0==e.conw?0:Math.round(k/e.conw*c*100)||0,i=0==e.conh?0:Math.round(l/e.conh*c*100)||0,j=a.closest("li"),n=0,o=!1;a.hasClass("dddwrapper-layer")&&(n=f.ddd_z_correction||65,o=!0),a.hasClass("dddwrapper-layer")&&(d=0,g=0),j.hasClass("active-revslide")||"carousel"!=e.sliderType?"on"!=f.ddd_bgfreeze||o?punchgs.TweenLite.to(a,m,{rotationX:i,rotationY:-h,x:d,z:n,y:g,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==b.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),c&&(window.ondeviceorientation=function(b){var c=Math.round(b.beta||0)-70,d=Math.round(b.gamma||0),g=a.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var h=d;d=c,c=h}var i=a.width(),j=a.height(),k=360/i*d,l=180/j*c,m=f.speed/1e3||3,n=[];if(g.find(".tp-parallax-container").each(function(a){n.push(jQuery(this))}),a.find(".tp-static-layers .tp-parallax-container").each(function(){n.push(jQuery(this))}),jQuery.each(n,function(){var a=jQuery(this),b=parseInt(a.data("parallaxlevel"),0),c=b/100,d=k*c*2,e=l*c*4;punchgs.TweenLite.to(a,m,{force3D:"auto",x:d,y:e,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==f.type||"3d"==f.type){var o=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===e.sliderType&&(o=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),e.c.find(o).each(function(){var a=jQuery(this),c=f.levels[f.levels.length-1]/200,d=k*c,g=l*c*3,h=0==e.conw?0:Math.round(k/e.conw*c*500)||0,i=0==e.conh?0:Math.round(l/e.conh*c*700)||0,j=a.closest("li"),n=0,o=!1;a.hasClass("dddwrapper-layer")&&(n=f.ddd_z_correction||65,o=!0),a.hasClass("dddwrapper-layer")&&(d=0,g=0),j.hasClass("active-revslide")||"carousel"!=e.sliderType?"on"!=f.ddd_bgfreeze||o?punchgs.TweenLite.to(a,m,{rotationX:i,rotationY:-h,x:d,z:n,y:g,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(a,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==b.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}));var i=e.scrolleffect;if(i.bgs=new Array,i.on){if("on"===i.on_slidebg)for(var h=0;h<e.allslotholder.length;h++)i.bgs.push(e.allslotholder[h]);i.multiplicator_layers=parseFloat(i.multiplicator_layers),i.multiplicator=parseFloat(i.multiplicator)}void 0!==i.layers&&0===i.layers.length&&(i.layers=!1),void 0!==i.bgs&&0===i.bgs.length&&(i.bgs=!1),b.scrollTicker(e,a)}},scrollTicker:function(a,d){1!=a.scrollTicker&&(a.scrollTicker=!0,c?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){b.scrollHandling(a)},d,!1,1)):document.addEventListener("scroll",function(c){b.scrollHandling(a,!0)},{passive:!0})),b.scrollHandling(a,!0)},scrollHandling:function(a,d,f){if(a.lastwindowheight=a.lastwindowheight||window.innerHeight,a.conh=0===a.conh||void 0===a.conh?a.infullscreenmode?a.minHeight:a.c.height():a.conh,a.lastscrolltop==window.scrollY&&!a.duringslidechange&&!d)return!1;punchgs.TweenLite.delayedCall(.2,e,[a,window.scrollY]);var g=a.c[0].getBoundingClientRect(),h=a.viewPort,i=a.parallax,j=g.top<0||g.height>a.lastwindowheight?g.top/g.height:g.bottom>a.lastwindowheight?(g.bottom-a.lastwindowheight)/g.height:0;if(a.scrollproc=j,b.callBackHandling&&b.callBackHandling(a,"parallax","start"),h.enable){var k=1-Math.abs(j);k=k<0?0:k,jQuery.isNumeric(h.visible_area)||-1!==h.visible_area.indexOf("%")&&(h.visible_area=parseInt(h.visible_area)/100),1-h.visible_area<=k?a.inviewport||(a.inviewport=!0,b.enterInViewPort(a)):a.inviewport&&(a.inviewport=!1,b.leaveViewPort(a))}if(c&&"on"==i.disable_onmobile)return!1;if("3d"!=i.type&&"3D"!=i.type){if(("scroll"==i.type||"scroll+mouse"==i.type||"mouse+scroll"==i.type)&&i.pcontainers)for(var l=0;l<i.pcontainers.length;l++)if(i.pcontainers[l].length>0){var m=i.pcontainers[l],n=i.pcontainer_depths[l]/100,o=Math.round(j*(-n*a.conh)*10)/10||0,p=void 0!==f?f:i.speedls/1e3||0;m.data("parallaxoffset",o),punchgs.TweenLite.to(m,p,{overwrite:"auto",force3D:"auto",y:o})}if(i.bgcontainers)for(var l=0;l<i.bgcontainers.length;l++){var q=i.bgcontainers[l],r=i.bgcontainer_depths[l],o=j*(-r*a.conh)||0,p=void 0!==f?f:i.speedbg/1e3||0;punchgs.TweenLite.to(q,p,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:o+"px"})}}var s=a.scrolleffect;if(s.on&&("on"!==s.disable_on_mobile||!c)){var t=Math.abs(j)-s.tilt/100;if(t=t<0?0:t,!1!==s.layers){var u=1-t*s.multiplicator_layers,v={backfaceVisibility:"hidden",force3D:"true",z:.001,perspective:600};if("top"==s.direction&&j>=0&&(u=1),"bottom"==s.direction&&j<=0&&(u=1),u=u>1?1:u<0?0:u,"on"===s.fade&&(v.opacity=u),"on"===s.scale){var w=u;v.scale=1-w+1}if("on"===s.blur){var x=(1-u)*s.maxblur;v["-webkit-filter"]="blur("+x+"px)",v.filter="blur("+x+"px)"}if("on"===s.grayscale){var y=100*(1-u),z="grayscale("+y+"%)";v["-webkit-filter"]=void 0===v["-webkit-filter"]?z:v["-webkit-filter"]+" "+z,v.filter=void 0===v.filter?z:v.filter+" "+z}punchgs.TweenLite.set(s.layers,v)}if(!1!==s.bgs){var u=1-t*s.multiplicator,v={backfaceVisibility:"hidden",force3D:"true"};if("top"==s.direction&&j>=0&&(u=1),"bottom"==s.direction&&j<=0&&(u=1),u=u>1?1:u<0?0:u,"on"===s.fade&&(v.opacity=u),"on"===s.scale){var w=u;punchgs.TweenLite.set(jQuery(".tp-kbimg-wrap"),{transformOrigin:"50% 50%",scale:w,force3D:!0})}if("on"===s.blur){var x=(1-u)*s.maxblur;v["-webkit-filter"]="blur("+x+"px)",v.filter="blur("+x+"px)"}if("on"===s.grayscale){var y=100*(1-u),z="grayscale("+y+"%)";v["-webkit-filter"]=void 0===v["-webkit-filter"]?z:v["-webkit-filter"]+" "+z,v.filter=void 0===v.filter?z:v.filter+" "+z}punchgs.TweenLite.set(s.bgs,v)}}b.callBackHandling&&b.callBackHandling(a,"parallax","end")}})}(jQuery);

/************************************************
 * REVOLUTION 5.4.6.5 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.8 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(t){"use strict";var L=jQuery.fn.revolution,l={alias:"SlideAnimations Min JS",name:"revolution.extensions.slideanims.min.js",min_core:"5.4.5",version:"1.8"};jQuery.extend(!0,L,{animateSlide:function(t,e,o,a,i,n,r,s){return"stop"===L.compare_version(l).check?s:d(t,e,o,a,i,n,r,s)}});var ct=function(t,e,o,a){var i=t,n=i.find(".defaultimg"),r=n.data("mediafilter"),s=i.data("zoomstart"),l=i.data("rotationstart");null!=n.data("currotate")&&(l=n.data("currotate")),null!=n.data("curscale")&&"box"==a?s=100*n.data("curscale"):null!=n.data("curscale")&&(s=n.data("curscale")),L.slotSize(n,e);var d=n.attr("src"),h=n.data("bgcolor"),f=e.width,c=e.height,u=n.data("fxof");void 0===h&&(h=n.css("backgroundColor")),"on"==e.autoHeight&&(c=e.c.height()),null==u&&(u=0);var p=0,g=n.data("bgfit"),w=n.data("bgrepeat"),m=n.data("bgposition");null==g&&(g="cover"),null==w&&(w="no-repeat"),null==m&&(m="center center");var v="";switch(v=void 0!==h&&0<=h.indexOf("gradient")?"background:"+h:"background-color:"+h+";background-image:url("+d+");background-repeat:"+w+";background-size:"+g+";background-position:"+m,a){case"box":for(var y=0,x=0,T=0;T<e.slots;T++){for(var z=x=0;z<e.slots;z++)i.append('<div class="slot" style="position:absolute;top:'+(0+x)+"px;left:"+(u+y)+"px;width:"+e.slotw+"px;height:"+e.sloth+'px;overflow:hidden;"><div class="slotslide '+r+'" data-x="'+y+'" data-y="'+x+'" style="position:absolute;top:0px;left:0px;width:'+e.slotw+"px;height:"+e.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-x)+"px;left:"+(0-y)+"px;width:"+f+"px;height:"+c+"px;"+v+';"></div></div></div>'),x+=e.sloth,null!=s&&null!=l&&punchgs.TweenLite.set(i.find(".slot").last(),{rotationZ:l});y+=e.slotw}break;case"vertical":case"horizontal":if("horizontal"==a){if(!o)p=0-e.slotw;for(z=0;z<e.slots;z++)i.append('<div class="slot" style="position:absolute;top:0px;left:'+(u+z*e.slotw)+"px;overflow:hidden;width:"+(e.slotw+.3)+"px;height:"+c+'px"><div class="slotslide '+r+'" style="position:absolute;top:0px;left:'+p+"px;width:"+(e.slotw+.6)+"px;height:"+c+'px;overflow:hidden;"><div style="position:absolute;top:0px;left:'+(0-z*e.slotw)+"px;width:"+f+"px;height:"+c+"px;"+v+';"></div></div></div>'),null!=s&&null!=l&&punchgs.TweenLite.set(i.find(".slot").last(),{rotationZ:l})}else{if(!o)p=0-e.sloth;for(z=0;z<e.slots+2;z++)i.append('<div class="slot" style="position:absolute;top:'+(0+z*e.sloth)+"px;left:"+u+"px;overflow:hidden;width:"+f+"px;height:"+e.sloth+'px"><div class="slotslide '+r+'" style="position:absolute;top:'+p+"px;left:0px;width:"+f+"px;height:"+e.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-z*e.sloth)+"px;left:0px;width:"+f+"px;height:"+c+"px;"+v+';"></div></div></div>'),null!=s&&null!=l&&punchgs.TweenLite.set(i.find(".slot").last(),{rotationZ:l})}}};var ut=function(t,e){return null==e||jQuery.isNumeric(t)?t:null==t?t:t.split(",")[e]},d=function(a,t,e,o,i,n,r,s){var l=e[0].opt,d=i.index(),h=o.index()<d?1:0;"arrow"==l.sc_indicator&&(h=l.sc_indicator_dir);var f=function(t,o,e,a){var i=t[0].opt,n=punchgs.Power1.easeIn,r=punchgs.Power1.easeOut,s=punchgs.Power1.easeInOut,l=punchgs.Power2.easeIn,d=punchgs.Power2.easeOut,h=punchgs.Power2.easeInOut,f=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),c=punchgs.Power3.easeInOut,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],p=[16,17,18,19,20,21,22,23,24,25,27],g=0,w=1,m=0,v=0,y=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,r,r,500,6],["boxfade",1,0,10,0,"box",!1,null,1,s,s,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,h,h,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,h,h,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,r,r,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,r,r,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,r,r,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,r,r,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,d,d,500,8],["slotfade-horizontal",9,0,0,1e3,"horizontal",!0,null,9,d,d,2e3,10],["slotfade-vertical",10,0,0,1e3,"vertical",!0,null,10,d,d,2e3,10],["fade",11,0,1,300,"horizontal",!0,null,11,h,h,1e3,1],["crossfade",11,1,1,300,"horizontal",!0,null,11,h,h,1e3,1],["fadethroughdark",11,2,1,300,"horizontal",!0,null,11,h,h,1e3,1],["fadethroughlight",11,3,1,300,"horizontal",!0,null,11,h,h,1e3,1],["fadethroughtransparent",11,4,1,300,"horizontal",!0,null,11,h,h,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,c,c,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,c,c,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,c,c,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,c,c,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,c,c,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,c,c,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,c,c,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,c,c,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,c,c,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,c,c,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,c,c,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,c,c,1e3,1],["papercut",16,0,0,600,"",null,null,16,c,c,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,s,s,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,s,s,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,c,c,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,c,c,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,f,c,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,c,c,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,h,h,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,d,d,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,d,d,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,h,h,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,h,h,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,h,h,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,h,h,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,h,h,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,h,h,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,h,h,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,h,h,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,h,h,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,h,h,1e3,1],["parallaxtoright",15,3,1,0,"horizontal",!0,!0,36,h,l,1500,1],["parallaxtoleft",12,3,1,0,"horizontal",!0,!0,37,h,l,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,h,n,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,h,n,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,h,l,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,h,l,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,h,l,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,h,l,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,h,l,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,h,l,1e3,1],["slidingoverlayup",27,0,1,0,"horizontal",!0,!0,47,s,r,2e3,1],["slidingoverlaydown",28,0,1,0,"horizontal",!0,!0,48,s,r,2e3,1],["slidingoverlayright",30,0,1,0,"horizontal",!0,!0,49,s,r,2e3,1],["slidingoverlayleft",29,0,1,0,"horizontal",!0,!0,50,s,r,2e3,1],["parallaxcirclesup",31,0,1,0,"horizontal",!0,!0,51,h,n,1500,1],["parallaxcirclesdown",32,0,1,0,"horizontal",!0,!0,52,h,n,1500,1],["parallaxcirclesright",33,0,1,0,"horizontal",!0,!0,53,h,n,1500,1],["parallaxcirclesleft",34,0,1,0,"horizontal",!0,!0,54,h,n,1500,1],["notransition",26,0,1,0,"horizontal",!0,null,46,h,l,1e3,1],["parallaxright",15,3,1,0,"horizontal",!0,!0,55,h,l,1500,1],["parallaxleft",12,3,1,0,"horizontal",!0,!0,56,h,l,1500,1],["parallaxup",14,3,1,0,"horizontal",!0,!0,57,h,n,1500,1],["parallaxdown",13,3,1,0,"horizontal",!0,!0,58,h,n,1500,1],["grayscale",11,5,1,300,"horizontal",!0,null,11,h,h,1e3,1],["grayscalecross",11,6,1,300,"horizontal",!0,null,11,h,h,1e3,1],["brightness",11,7,1,300,"horizontal",!0,null,11,h,h,1e3,1],["brightnesscross",11,8,1,300,"horizontal",!0,null,11,h,h,1e3,1],["blurlight",11,9,1,300,"horizontal",!0,null,11,h,h,1e3,1],["blurlightcross",11,10,1,300,"horizontal",!0,null,11,h,h,1e3,1],["blurstrong",11,9,1,300,"horizontal",!0,null,11,h,h,1e3,1],["blurstrongcross",11,10,1,300,"horizontal",!0,null,11,h,h,1e3,1]]);i.duringslidechange=!0,i.testanims=!1,1==i.testanims&&(i.nexttesttransform=void 0===i.nexttesttransform?34:i.nexttesttransform+1,i.nexttesttransform=70<i.nexttesttransform?0:i.nexttesttransform,o=y[i.nexttesttransform][0],console.log(o+"  "+i.nexttesttransform+"  "+y[i.nexttesttransform][1]+"  "+y[i.nexttesttransform][2])),jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(t,e){o==e+"horizontal"&&(o=1!=a?e+"left":e+"right"),o==e+"vertical"&&(o=1!=a?e+"up":e+"down")}),"random"==o&&(o=Math.round(Math.random()*y.length-1),y.length-1<o&&(o=y.length-1)),"random-static"==o&&(o=Math.round(Math.random()*u.length-1),u.length-1<o&&(o=u.length-1),o=u[o]),"random-premium"==o&&(o=Math.round(Math.random()*p.length-1),p.length-1<o&&(o=p.length-1),o=p[o]);if(1==i.isJoomla&&null!=window.MooTools&&-1!=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45].indexOf(o)){var x=Math.round(Math.random()*(p.length-2))+1;p.length-1<x&&(x=p.length-1),0==x&&(x=1),o=p[x]}jQuery.each(y,function(t,e){e[0]!=o&&e[8]!=o||(g=e[1],w=e[2],m=v),v+=1}),30<g&&(g=30),g<0&&(g=0);var T=new Object;return T.nexttrans=g,T.STA=y[m],T.specials=w,T}(e,t,0,h),c=f.STA,u=f.specials;a=f.nexttrans;"on"==n.data("kenburns")&&(a=11);var p=o.data("nexttransid")||0,g=ut(o.data("masterspeed"),p);g=(g="default"===g?c[11]:"random"===g?Math.round(1e3*Math.random()+300):null!=g?parseInt(g,0):c[11])>l.delay?l.delay:g,g+=c[4],l.slots=ut(o.data("slotamount"),p),l.slots=null==l.slots||"default"==l.slots?c[12]:"random"==l.slots?Math.round(12*Math.random()+4):l.slots,l.slots=l.slots<1?"boxslide"==t?Math.round(6*Math.random()+3):"flyin"==t?Math.round(4*Math.random()+1):l.slots:l.slots,l.slots=(4==a||5==a||6==a)&&l.slots<3?3:l.slots,l.slots=0!=c[3]?Math.min(l.slots,c[3]):l.slots,l.slots=9==a?l.width/l.slots:10==a?l.height/l.slots:l.slots,l.rotate=ut(o.data("rotate"),p),l.rotate=null==l.rotate||"default"==l.rotate?0:999==l.rotate||"random"==l.rotate?Math.round(360*Math.random()):l.rotate,l.rotate=l.ie||l.ie9?0:l.rotate,11!=a&&(null!=c[7]&&ct(r,l,c[7],c[5]),null!=c[6]&&ct(n,l,c[6],c[5])),s.add(punchgs.TweenLite.set(n.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),s.add(punchgs.TweenLite.set(r.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),s.add(punchgs.TweenLite.set(n.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),s.add(punchgs.TweenLite.set(r.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),s.add(punchgs.TweenLite.set(n,{autoAlpha:1,y:"+0%",x:"+0%"}),0),s.add(punchgs.TweenLite.set(r,{autoAlpha:1,y:"+0%",x:"+0%"}),0),s.add(punchgs.TweenLite.set(n.parent(),{backgroundColor:"transparent"}),0),s.add(punchgs.TweenLite.set(r.parent(),{backgroundColor:"transparent"}),0);var w=ut(o.data("easein"),p),m=ut(o.data("easeout"),p);if(w="default"===w?c[9]||punchgs.Power2.easeInOut:w||c[9]||punchgs.Power2.easeInOut,m="default"===m?c[10]||punchgs.Power2.easeInOut:m||c[10]||punchgs.Power2.easeInOut,0==a){var v=Math.ceil(l.height/l.sloth),y=0;n.find(".slotslide").each(function(t){var e=jQuery(this);(y+=1)==v&&(y=0),s.add(punchgs.TweenLite.from(e,g/600,{opacity:0,top:0-l.sloth,left:0-l.slotw,rotation:l.rotate,force3D:"auto",ease:w}),(15*t+30*y)/1500)})}if(1==a){var x;n.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*g+300,a=500*Math.random()+200;x<o+a&&(x=a+a,t),s.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:l.rotate,ease:w}),a/1e3)})}if(2==a){var T=new punchgs.TimelineLite;r.find(".slotslide").each(function(){var t=jQuery(this);T.add(punchgs.TweenLite.to(t,g/1e3,{left:l.slotw,ease:w,force3D:"auto",rotation:0-l.rotate}),0),s.add(T,0)}),n.find(".slotslide").each(function(){var t=jQuery(this);T.add(punchgs.TweenLite.from(t,g/1e3,{left:0-l.slotw,ease:w,force3D:"auto",rotation:l.rotate}),0),s.add(T,0)})}if(3==a){T=new punchgs.TimelineLite;r.find(".slotslide").each(function(){var t=jQuery(this);T.add(punchgs.TweenLite.to(t,g/1e3,{top:l.sloth,ease:w,rotation:l.rotate,force3D:"auto",transformPerspective:600}),0),s.add(T,0)}),n.find(".slotslide").each(function(){var t=jQuery(this);T.add(punchgs.TweenLite.from(t,g/1e3,{top:0-l.sloth,rotation:l.rotate,ease:m,force3D:"auto",transformPerspective:600}),0),s.add(T,0)})}if(4==a||5==a){setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);var z=g/1e3;T=new punchgs.TimelineLite;r.find(".slotslide").each(function(t){var e=jQuery(this),o=t*z/l.slots;5==a&&(o=(l.slots-t-1)*z/l.slots/1.5),T.add(punchgs.TweenLite.to(e,3*z,{transformPerspective:600,force3D:"auto",top:0+l.height,opacity:.5,rotation:l.rotate,ease:w,delay:o}),0),s.add(T,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this),o=t*z/l.slots;5==a&&(o=(l.slots-t-1)*z/l.slots/1.5),T.add(punchgs.TweenLite.from(e,3*z,{top:0-l.height,opacity:.5,rotation:l.rotate,force3D:"auto",ease:punchgs.eo,delay:o}),0),s.add(T,0)})}if(6==a){l.slots<2&&(l.slots=2),l.slots%2&&(l.slots=l.slots+1);T=new punchgs.TimelineLite;setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100),r.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<l.slots/2)var o=90*(t+2);else o=90*(2+l.slots-t);T.add(punchgs.TweenLite.to(e,(g+o)/1e3,{top:0+l.height,opacity:1,force3D:"auto",rotation:l.rotate,ease:w}),0),s.add(T,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<l.slots/2)var o=90*(t+2);else o=90*(2+l.slots-t);T.add(punchgs.TweenLite.from(e,(g+o)/1e3,{top:0-l.height,opacity:1,force3D:"auto",rotation:l.rotate,ease:m}),0),s.add(T,0)})}if(7==a){(g*=2)>l.delay&&(g=l.delay);T=new punchgs.TimelineLite;setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100),r.find(".slotslide").each(function(){var t=jQuery(this).find("div");T.add(punchgs.TweenLite.to(t,g/1e3,{left:0-l.slotw/2+"px",top:0-l.height/2+"px",width:2*l.slotw+"px",height:2*l.height+"px",opacity:0,rotation:l.rotate,force3D:"auto",ease:w}),0),s.add(T,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this).find("div");T.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*l.slotw+"px",ease:m,force3D:"auto",top:"0px",width:l.width,height:l.height,opacity:1,rotation:0,delay:.1}),0),s.add(T,0)})}if(8==a){(g*=3)>l.delay&&(g=l.delay);T=new punchgs.TimelineLite;r.find(".slotslide").each(function(){var t=jQuery(this).find("div");T.add(punchgs.TweenLite.to(t,g/1e3,{left:0-l.width/2+"px",top:0-l.sloth/2+"px",width:2*l.width+"px",height:2*l.sloth+"px",force3D:"auto",ease:w,opacity:0,rotation:l.rotate}),0),s.add(T,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this).find("div");T.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*l.sloth+"px",width:n.find(".defaultimg").data("neww")+"px",height:n.find(".defaultimg").data("newh")+"px",opacity:1,ease:m,rotation:0}),0),s.add(T,0)})}if(9==a||10==a){n.find(".slotslide").each(function(t){var e=jQuery(this);0,s.add(punchgs.TweenLite.fromTo(e,g/2e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:w,delay:t*l.slots/100/2e3}),0)})}if(27==a||28==a||29==a||30==a){var L=n.find(".slot"),b=27==a||29==a?"-100%":"+100%",A=27==a||29==a?"+100%":"-100%",D=27==a||29==a?"-80%":"80%",j=27==a||29==a?"+80%":"-80%",Q=27==a||29==a?"+10%":"-10%",M={overwrite:"all"},P={autoAlpha:0,zIndex:1,force3D:"auto",ease:w},k={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},O={autoAlpha:1,force3D:"auto",ease:m},I={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},X={autoAlpha:1,force3D:"auto",overwrite:"all",ease:w},Y={overwrite:"all",zIndex:2,autoAlpha:1},S={autoAlpha:1,force3D:"auto",ease:w},_=1==(27==a||28==a?1:2)?"y":"x";M[_]="0px",P[_]=b,k[_]=Q,O[_]="0%",I[_]=A,X[_]=b,Y[_]=D,S[_]=j,L.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),s.add(punchgs.TweenLite.fromTo(r,g/1e3,M,P),0),s.add(punchgs.TweenLite.fromTo(n.find(".defaultimg"),g/2e3,k,O),g/2e3),s.add(punchgs.TweenLite.fromTo(L,g/1e3,I,X),0),s.add(punchgs.TweenLite.fromTo(L.find(".slotslide div"),g/1e3,Y,S),0)}if(31==a||32==a||33==a||34==a){g=6e3,w=punchgs.Power3.easeInOut;var C=g/1e3;mas=C-C/5,_nt=a,fy=31==_nt?"+100%":32==_nt?"-100%":"0%",fx=33==_nt?"+100%":34==_nt?"-100%":"0%",ty=31==_nt?"-100%":32==_nt?"+100%":"0%",tx=33==_nt?"-100%":34==_nt?"+100%":"0%",s.add(punchgs.TweenLite.fromTo(r,C-.2*C,{y:0,x:0},{y:ty,x:tx,ease:m}),.2*C),s.add(punchgs.TweenLite.fromTo(n,C,{y:fy,x:fx},{y:"0%",x:"0%",ease:w}),0),n.find(".slot").remove(),n.find(".defaultimg").clone().appendTo(n).addClass("slot"),function(t,f,c,e,u){var o=t.find(".slot"),p=[2,1.2,.9,.7,.55,.42],g=t.width(),w=t.height();o.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');for(var a=0;a<6;a++)o.parent().clone(!1).appendTo(nextsh);t.find(".slot-circle-wrapper").each(function(t){if(t<6){var e=jQuery(this),o=e.find(".slot"),a=w<g?p[t]*g:p[t]*w,i=a/2-g/2+0,n=a/2-w/2+0,r={scale:1,transformOrigo:"50% 50%",width:a+"px",height:a+"px",top:w/2-a/2+"px",left:(33==c?g/2-a/2:34==c?g-a:g/2-a/2)+"px",borderRadius:0!=t?"50%":"0"},s={scale:1,top:w/2-a/2,left:g/2-a/2,ease:u},l={width:g,height:w,autoAlpha:1,top:n+"px",position:"absolute",left:(33==c?i:34==c?i+g/2:i)+"px"},d={top:n+"px",left:i+"px",ease:u},h=f;mtl.add(punchgs.TweenLite.fromTo(e,h,r,s),0),mtl.add(punchgs.TweenLite.fromTo(o,h,l,d),0),mtl.add(punchgs.TweenLite.fromTo(e,.001,{autoAlpha:0},{autoAlpha:1}),0)}})}(n,C,_nt,0,w)}if(11==a){12<u&&(u=0);var V=2==u?"#000000":3==u?"#ffffff":"transparent";switch(u){case 0:s.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),0);break;case 1:s.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),0),s.add(punchgs.TweenLite.fromTo(r,g/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:w}),0);break;case 2:case 3:case 4:s.add(punchgs.TweenLite.set(r.parent(),{backgroundColor:V,force3D:"auto"}),0),s.add(punchgs.TweenLite.set(n.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),s.add(punchgs.TweenLite.to(r,g/2e3,{autoAlpha:0,force3D:"auto",ease:w}),0),s.add(punchgs.TweenLite.fromTo(n,g/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),g/2e3);break;case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:var Z="blur("+(0<=jQuery.inArray(u,[9,10])?5:0<=jQuery.inArray(u,[11,12])?10:0)+"px) grayscale("+(0<=jQuery.inArray(u,[5,6,7,8])?100:0)+"%) brightness("+(0<=jQuery.inArray(u,[7,8])?300:0)+"%)",H="blur(0px) grayscale(0%) brightness(100%)";s.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0,filter:Z,"-webkit-filter":Z},{autoAlpha:1,filter:H,"-webkit-filter":H,force3D:"auto",ease:w}),0),0<=jQuery.inArray(u,[6,8,10])&&s.add(punchgs.TweenLite.fromTo(r,g/1e3,{autoAlpha:1,filter:H,"-webkit-filter":H},{autoAlpha:0,force3D:"auto",ease:w,filter:Z,"-webkit-filter":Z}),0)}s.add(punchgs.TweenLite.set(n.find(".defaultimg"),{autoAlpha:1}),0),s.add(punchgs.TweenLite.set(r.find("defaultimg"),{autoAlpha:1}),0)}if(26==a){g=0,s.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),0),s.add(punchgs.TweenLite.to(r,g/1e3,{autoAlpha:0,force3D:"auto",ease:w}),0),s.add(punchgs.TweenLite.set(n.find(".defaultimg"),{autoAlpha:1}),0),s.add(punchgs.TweenLite.set(r.find("defaultimg"),{autoAlpha:1}),0)}if(12==a||13==a||14==a||15==a){(g=g)>l.delay&&(g=l.delay),setTimeout(function(){punchgs.TweenLite.set(r.find(".defaultimg"),{autoAlpha:0})},100);var J=l.width,N=l.height,R=n.find(".slotslide, .defaultvid"),q=0,B=0,E=1,F=1,G=1,K=g/1e3,U=K;"fullwidth"!=l.sliderLayout&&"fullscreen"!=l.sliderLayout||(J=R.width(),N=R.height()),12==a?q=J:15==a?q=0-J:13==a?B=N:14==a&&(B=0-N),1==u&&(E=0),2==u&&(E=0),3==u&&(K=g/1300),4!=u&&5!=u||(F=.6),6==u&&(F=1.4),5!=u&&6!=u||(G=1.4,B=q=N=J=E=0),6==u&&(G=.6);7==u&&(N=J=0);var W=n.find(".slotslide"),$=r.find(".slotslide, .defaultvid");if(s.add(punchgs.TweenLite.set(i,{zIndex:15}),0),s.add(punchgs.TweenLite.set(o,{zIndex:20}),0),8==u?(s.add(punchgs.TweenLite.set(i,{zIndex:20}),0),s.add(punchgs.TweenLite.set(o,{zIndex:15}),0),s.add(punchgs.TweenLite.set(W,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:w,force3D:"auto"}),0)):s.add(punchgs.TweenLite.from(W,K,{left:q,top:B,scale:G,opacity:E,rotation:l.rotate,ease:w,force3D:"auto"}),0),4!=u&&5!=u||(N=J=0),1!=u)switch(a){case 12:s.add(punchgs.TweenLite.to($,U,{left:0-J+"px",force3D:"auto",scale:F,opacity:E,rotation:l.rotate,ease:m}),0);break;case 15:s.add(punchgs.TweenLite.to($,U,{left:J+"px",force3D:"auto",scale:F,opacity:E,rotation:l.rotate,ease:m}),0);break;case 13:s.add(punchgs.TweenLite.to($,U,{top:0-N+"px",force3D:"auto",scale:F,opacity:E,rotation:l.rotate,ease:m}),0);break;case 14:s.add(punchgs.TweenLite.to($,U,{top:N+"px",force3D:"auto",scale:F,opacity:E,rotation:l.rotate,ease:m}),0)}}if(16==a){T=new punchgs.TimelineLite;s.add(punchgs.TweenLite.set(i,{position:"absolute","z-index":20}),0),s.add(punchgs.TweenLite.set(o,{position:"absolute","z-index":15}),0),i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),i.find(".tp-half-one").clone(!0).appendTo(i).addClass("tp-half-two"),i.find(".tp-half-two").removeClass("tp-half-one");J=l.width,N=l.height;"on"==l.autoHeight&&(N=e.height()),i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+J+"px;height:"+N+'px;"></div>'),i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+J+"px;height:"+N+'px;"></div>'),i.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),s.add(punchgs.TweenLite.set(i.find(".tp-half-two"),{width:J,height:N,overflow:"hidden",zIndex:15,position:"absolute",top:N/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),s.add(punchgs.TweenLite.set(i.find(".tp-half-one"),{width:J,height:N/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);i.find(".defaultimg");var tt=Math.round(20*Math.random()-10),et=Math.round(20*Math.random()-10),ot=Math.round(20*Math.random()-10),at=.4*Math.random()-.2,it=.4*Math.random()-.2,nt=1*Math.random()+1,rt=1*Math.random()+1,st=.3*Math.random()+.3;s.add(punchgs.TweenLite.set(i.find(".tp-half-one"),{overflow:"hidden"}),0),s.add(punchgs.TweenLite.fromTo(i.find(".tp-half-one"),g/800,{width:J,height:N/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:nt,rotation:tt,y:0-N-N/4,autoAlpha:0,ease:w}),0),s.add(punchgs.TweenLite.fromTo(i.find(".tp-half-two"),g/800,{width:J,height:N,overflow:"hidden",position:"absolute",top:N/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:rt,rotation:et,y:N+N/4,ease:w,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(i,{position:"absolute","z-index":15}),punchgs.TweenLite.set(o,{position:"absolute","z-index":20}),0<i.find(".tp-half-one").length&&(i.find(".tp-half-one .defaultimg").unwrap(),i.find(".tp-half-one .slotholder").unwrap()),i.find(".tp-half-two").remove()}}),0),T.add(punchgs.TweenLite.set(n.find(".defaultimg"),{autoAlpha:1}),0),null!=i.html()&&s.add(punchgs.TweenLite.fromTo(o,(g-200)/1e3,{scale:st,x:l.width/4*at,y:N/4*it,rotation:ot,force3D:"auto",transformOrigin:"center center",ease:m},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),s.add(T,0)}if(17==a&&n.find(".slotslide").each(function(t){var e=jQuery(this);s.add(punchgs.TweenLite.fromTo(e,g/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:w,delay:.06*t}),0)}),18==a&&n.find(".slotslide").each(function(t){var e=jQuery(this);s.add(punchgs.TweenLite.fromTo(e,g/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:w,delay:.06*t}),0)}),19==a||22==a){T=new punchgs.TimelineLite;s.add(punchgs.TweenLite.set(i,{zIndex:20}),0),s.add(punchgs.TweenLite.set(o,{zIndex:20}),0),setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);var lt=90,dt=(E=1,"center center ");1==h&&(lt=-90),19==a?(dt=dt+"-"+l.height/2,E=0):dt+=l.height/2,punchgs.TweenLite.set(e,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),n.find(".slotslide").each(function(t){var e=jQuery(this);T.add(punchgs.TweenLite.fromTo(e,g/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:l.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:dt,rotationX:lt},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:w}),0),T.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),s.add(T)}),r.find(".slotslide").each(function(t){var e=jQuery(this),o=-90;1==h&&(o=90),T.add(punchgs.TweenLite.fromTo(e,g/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:dt,rotationX:0},{autoAlpha:1,rotationY:l.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:m}),0),s.add(T)}),s.add(punchgs.TweenLite.set(i,{zIndex:18}),0)}if(20==a){if(setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100),1==h){var ht=-l.width;lt=80,dt="20% 70% -"+l.height/2}else ht=l.width,lt=-80,dt="80% 70% -"+l.height/2;n.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;s.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:ht,rotationX:40,z:-600,opacity:E,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:dt,transformStyle:"flat",rotationY:lt},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:w}),0)}),r.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;if(o=0<t?o+g/9e3:0,1!=h)var a=-l.width/2,i=30,n="20% 70% -"+l.height/2;else a=l.width/2,i=-30,n="80% 70% -"+l.height/2;m=punchgs.Power2.easeInOut,s.add(punchgs.TweenLite.fromTo(e,g/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:m}),0)})}if(21==a||25==a){setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);lt=90,ht=-l.width;var ft=-lt;if(1==h)if(25==a){dt="center top 0";lt=l.rotate}else{dt="left center 0";ft=l.rotate}else if(ht=l.width,lt=-90,25==a){dt="center bottom 0";ft=-lt,lt=l.rotate}else{dt="right center 0";ft=l.rotate}n.find(".slotslide").each(function(t){var e=jQuery(this),o=g/1.5/3;s.add(punchgs.TweenLite.fromTo(e,2*o/1e3,{left:0,transformStyle:"flat",rotationX:ft,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:dt,rotationY:lt},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:o/1e3,ease:w}),0)}),1!=h?(ht=-l.width,lt=90,25==a?(dt="center top 0",ft=-lt,lt=l.rotate):(dt="left center 0",ft=l.rotate)):(ht=l.width,lt=-90,25==a?(dt="center bottom 0",ft=-lt,lt=l.rotate):(dt="right center 0",ft=l.rotate)),r.find(".slotslide").each(function(t){var e=jQuery(this);s.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:dt,rotationY:0},{left:0,rotationX:ft,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:lt,ease:m}),0)})}if(23==a||24==a){setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);lt=-90,E=1;if(1==h&&(lt=90),23==a){dt="center center -"+l.width/2;E=0}else dt="center center "+l.width/2;punchgs.TweenLite.set(e,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),n.find(".slotslide").each(function(t){var e=jQuery(this);s.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,rotationX:l.rotate,force3D:"auto",opacity:E,top:0,scale:1,transformPerspective:1200,transformOrigin:dt,rotationY:lt},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:w}),0)}),lt=90,1==h&&(lt=-90),r.find(".slotslide").each(function(t){var e=jQuery(this);s.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:dt,rotationY:0},{left:0,rotationX:l.rotate,top:0,scale:1,rotationY:lt,delay:50*t/500,ease:m}),0),23==a&&s.add(punchgs.TweenLite.fromTo(e,g/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*t/500+g/3e3,ease:m}),0)})}return s}}(jQuery);

/********************************************
 * REVOLUTION 5.4.6.5 EXTENSION - VIDEO FUNCTIONS
 * @version: 2.2.2 (04.06.2018)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
;!function(e){"use strict";var I=jQuery.fn.revolution,_=I.is_mobile(),S=(I.is_android(),{alias:"Video Min JS",name:"revolution.extensions.video.min.js",min_core:"5.4.8",version:"2.2.2"});function j(e){return null==e?-1:jQuery.isNumeric(e)?e:1<e.split(":").length?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}jQuery.extend(!0,I,{preLoadAudio:function(e,a){if("stop"===I.compare_version(S).check)return!1;e.find(".tp-audiolayer").each(function(){var e=jQuery(this),t={};0===e.find("audio").length&&(t.src=null!=e.data("videomp4")?e.data("videomp4"):"",t.pre=e.data("videopreload")||"",void 0===e.attr("id")&&e.attr("audio-layer-"+Math.round(199999*Math.random())),t.id=e.attr("id"),t.status="prepared",t.start=jQuery.now(),t.waittime=1e3*e.data("videopreloadwait")||5e3,"auto"!=t.pre&&"canplaythrough"!=t.pre&&"canplay"!=t.pre&&"progress"!=t.pre||(void 0===a.audioqueue&&(a.audioqueue=[]),a.audioqueue.push(t),I.manageVideoLayer(e,a)))})},preLoadAudioDone:function(a,e,i){e.audioqueue&&0<e.audioqueue.length&&jQuery.each(e.audioqueue,function(e,t){a.data("videomp4")!==t.src||t.pre!==i&&"auto"!==t.pre||(t.status="loaded")})},resetVideo:function(e,t,a,i){var o=e.data();switch(o.videotype){case"youtube":o.player;try{if("on"==o.forcerewind){var d=-1==(l=j(e.data("videostartat"))),n=1===o.bgvideo||0<e.find(".tp-videoposter").length;null!=o.player&&(l=-1==l?0:l,o.player.seekTo(l),o.player.pauseVideo())}}catch(e){}0==e.find(".tp-videoposter").length&&1!==o.bgvideo&&!0!==a&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":var r=e.data("vimeoplayer");try{if("on"==o.forcerewind){var l=j(o.videostartat);d=-1==l,n=1===o.bgvideo||0<e.find(".tp-videoposter").length;(0!==(l=-1==l?0:l)&&!d||n)&&r.pause().then(function(){r.setCurrentTime(l)})}}catch(e){}0==e.find(".tp-videoposter").length&&1!==o.bgvideo&&!0!==a&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(_&&1==o.disablevideoonmobile)return!1;var s="html5"==o.audio?"audio":"video",u=e.find(s),p=u[0];if(punchgs.TweenLite.to(u,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==o.forcerewind&&!e.hasClass("videoisplaying"))try{l=j(o.videostartat);p.currentTime=-1==l?0:l}catch(e){}("mute"==o.volume||I.lastToggleState(e.videomutetoggledby)||!0===t.globalmute)&&(p.muted=!0)}},isVideoMuted:function(e,t){var a=!1,i=e.data();switch(i.videotype){case"youtube":try{a=i.player.isMuted()}catch(e){}break;case"vimeo":try{"mute"==i.volume&&(a=!0)}catch(e){}break;case"html5":var o="html5"==i.audio?"audio":"video";e.find(o)[0].muted&&(a=!0)}return a},muteVideo:function(e,t){var a=e.data();switch(a.videotype){case"youtube":try{a.player.mute()}catch(e){}break;case"vimeo":try{var i=e.data("vimeoplayer");e.data("volume","mute"),i.setVolume(0)}catch(e){}break;case"html5":var o="html5"==a.audio?"audio":"video";e.find(o)[0].muted=!0}},unMuteVideo:function(e,t){if(!0!==t.globalmute){var a=e.data();switch(a.videotype){case"youtube":try{a.player.unMute()}catch(e){}break;case"vimeo":try{var i=e.data("vimeoplayer");e.data("volume","1"),i.setVolume(1)}catch(e){}break;case"html5":var o="html5"==a.audio?"audio":"video";e.find(o)[0].muted=!1}}},stopVideo:function(e,t){var a=e.data();switch(t.leaveViewPortBasedStop||(t.lastplayedvideos=[]),t.leaveViewPortBasedStop=!1,a.videotype){case"youtube":try{var i=a.player;if(2===i.getPlayerState()||5===i.getPlayerState())return;i.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80)}catch(e){console.log("Issue at YouTube Video Pause:"),console.log(e)}break;case"vimeo":try{e.data("vimeoplayer").pause(),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80)}catch(e){console.log("Issue at Vimeo Video Pause:"),console.log(e)}break;case"html5":var o="html5"==a.audio?"audio":"video",d=e.find(o),n=d[0];null!=d&&null!=n&&n.pause()}},playVideo:function(a,i){clearTimeout(a.data("videoplaywait"));var e=a.data();switch(e.videotype){case"youtube":if(0==a.find("iframe").length)a.append(a.data("videomarkup")),O(a,i,!0);else if(null!=e.player.playVideo){var t=j(a.data("videostartat")),o=e.player.getCurrentTime();1==a.data("nextslideatend-triggered")&&(o=-1,a.data("nextslideatend-triggered",0)),-1!=t&&o<t&&e.player.seekTo(t),!0!==e.youtubepausecalled&&e.player.playVideo()}else a.data("videoplaywait",setTimeout(function(){!0!==e.youtubepausecalled&&I.playVideo(a,i)},50));break;case"vimeo":if(0==a.find("iframe").length)a.removeData("vimeoplayer"),a.append(a.data("videomarkup")),O(a,i,!0);else if(a.hasClass("rs-apiready")){var d,n=a.find("iframe").attr("id");a.data("vimeoplayer")?d=a.data("vimeoplayer"):(d=new Vimeo.Player(n),a.data("vimeoplayer",d)),d.getPaused()?setTimeout(function(){var e=j(a.data("videostartat")),t=a.data("currenttime");t||(t=0),1==a.data("nextslideatend-triggered")&&(t=-1,a.data("nextslideatend-triggered",0)),-1!=e&&t<e&&d.setCurrentTime(e),d.play()},510):a.data("videoplaywait",setTimeout(function(){!0!==e.vimeopausecalled&&I.playVideo(a,i)},50))}else a.data("videoplaywait",setTimeout(function(){!0!==e.vimeopausecalled&&I.playVideo(a,i)},50));break;case"html5":var r="html5"==e.audio?"audio":"video",l=a.find(r),s=l[0];if(1!=l.parent().data("metaloaded"))A(s,"loadedmetadata",function(e){I.resetVideo(e,i),s.play();var t=j(e.data("videostartat")),a=s.currentTime;1==e.data("nextslideatend-triggered")&&(a=-1,e.data("nextslideatend-triggered",0)),-1!=t&&a<t&&(s.currentTime=t)}(a));else{s.play();t=j(a.data("videostartat")),o=s.currentTime;1==a.data("nextslideatend-triggered")&&(o=-1,a.data("nextslideatend-triggered",0)),-1!=t&&o<t&&(s.currentTime=t)}}},isVideoPlaying:function(a,e){var i=!1;return null!=e.playingvideos&&jQuery.each(e.playingvideos,function(e,t){a.attr("id")==t.attr("id")&&(i=!0)}),i},removeMediaFromList:function(e,t){V(e,t)},prepareCoveredVideo:function(e,t){if((!t.hasClass("tp-caption")||t.hasClass("coverscreenvideo"))&&(void 0===t.data("vimeoid")||void 0!==t.data("vimeoplayerloaded"))){var a={};a.ifr=t.find("iframe, video"),a.asp=t.data("aspectratio"),a.wa=a.asp.split(":")[0],a.ha=a.asp.split(":")[1],a.vd=a.wa/a.ha;var i="carousel"!==e.sliderType?e.conw:t.closest(".tp-revslider-slidesli").width();if(0===i||0===e.conh)return I.setSize(e),clearTimeout(a.ifr.data("resizelistener")),void a.ifr.data("resizelistener",setTimeout(function(){I.prepareCoveredVideo(e,t)},100));var o=i/e.conh,d=o/a.vd*100,n=a.vd/o*100;o>a.vd?punchgs.TweenLite.set(a.ifr,{height:d+"%",width:"100%",top:-(d-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.set(a.ifr,{width:n+"%",height:"100%",left:-(n-100)/2+"%",top:"0px",position:"absolute"}),a.ifr.hasClass("resizelistener")||(a.ifr.addClass("resizelistener"),jQuery(window).resize(function(){I.prepareCoveredVideo(e,t),clearTimeout(a.ifr.data("resizelistener")),a.ifr.data("resizelistener",setTimeout(function(){I.prepareCoveredVideo(e,t)},90))}))}},checkVideoApis:function(e,t,a){location.protocol;if((null!=e.data("ytid")||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("youtube"))&&(t.youtubeapineeded=!0),(null!=e.data("ytid")||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("youtube"))&&0==a.addedyt){t.youtubestarttime=jQuery.now(),a.addedyt=1;var i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0],d=!0;jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(i,o)}if((null!=e.data("vimeoid")||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("vimeo"))&&(t.vimeoapineeded=!0),(null!=e.data("vimeoid")||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("vimeo"))&&0==a.addedvim){t.vimeostarttime=jQuery.now(),a.addedvim=1;var n=document.createElement("script");o=document.getElementsByTagName("script")[0],d=!0;n.src="https://player.vimeo.com/api/player.js",jQuery("head").find("*").each(function(){"https://player.vimeo.com/api/player.js"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(n,o)}return a},manageVideoLayer:function(i,o,e,t){if("stop"===I.compare_version(S).check)return!1;var a=i.data(),d=a.videoattributes,n=a.ytid,r=a.vimeoid,l="auto"===a.videopreload||"canplay"===a.videopreload||"canplaythrough"===a.videopreload||"progress"===a.videopreload?"auto":a.videopreload,s=a.videomp4,u=a.videowebm,p=a.videoogv,v=a.allowfullscreenvideo,c=a.videocontrols,m="http",g="loop"==a.videoloop?"loop":"loopandnoslidestop"==a.videoloop?"loop":"",y=null!=s||null!=u?"html5":null!=n&&1<String(n).length?"youtube":null!=r&&1<String(r).length?"vimeo":"none",f="html5"==a.audio?"audio":"video",h="html5"==y&&0==i.find(f).length?"html5":"youtube"==y&&0==i.find("iframe").length?"youtube":"vimeo"==y&&0==i.find("iframe").length?"vimeo":"none";switch(g=!0===a.nextslideatend?"":g,a.videotype=y,h){case"html5":"controls"!=c&&(c="");f="video";"html5"==a.audio&&(f="audio",i.addClass("tp-audio-html5"));var b="";"video"===f&&(I.is_mobile()||I.isSafari11())&&("on"===a.autoplay||"true"===a.autoplay||!0===a.autoplay?b="muted playsinline autoplay":1!=a.videoinline&&"true"!==a.videoinline&&1!==a.videoinline||(b+=" playsinline"));var w="<"+f+" "+b+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+g+' preload="'+l+'">';"auto"==l&&(o.mediapreload=!0),"video"===f?(null!=u&&"firefox"==I.get_browser().toLowerCase()&&(w=w+'<source src="'+u+'" type="video/webm" />'),null!=s&&(w=w+'<source src="'+s+'" type="video/mp4" />'),null!=p&&(w=w+'<source src="'+p+'" type="video/ogg" />')):"audio"===f&&(null!=s&&(w=w+'<source src="'+s+'" type="audio/mpeg" />'),null!=p&&(w=w+'<source src="'+p+'" type="audio/ogg" />')),w=w+"</"+f+">";var T="";"true"!==v&&!0!==v||(T='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==c&&(w=w+'<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+T+"</div>"),i.data("videomarkup",w),i.append(w),(_&&1==i.data("disablevideoonmobile")||I.isIE(8))&&i.find(f).remove(),i.find(f).each(function(e){var t,a=jQuery(this);a.parent().hasClass("html5vid")||a.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),1!=a.parent().data("metaloaded")&&A(this,"loadedmetadata",(Q(t=i,o),void I.resetVideo(t,o)))});break;case"youtube":m="https","none"==c&&-1==(d=d.replace("controls=1","controls=0")).toLowerCase().indexOf("controls")&&(d+="&controls=0"),(!0===a.videoinline||"true"===a.videoinline||1===a.videoinline||i.hasClass("rs-background-video-layer")||"on"===i.data("autoplay"))&&(d+="&playsinline=1");var k=j(i.data("videostartat")),x=j(i.data("videoendat"));-1!=k&&(d=d+"&start="+k),-1!=x&&(d=d+"&end="+x);var V=d.split("origin="+m+"://"),L="";1<V.length?(L=V[0]+"origin="+m+"://",self.location.href.match(/www/gi)&&!V[1].match(/www/gi)&&(L+="www."),L+=V[1]):L=d;var C="true"===v||!0===v?"allowfullscreen":"";i.data("videomarkup",'<iframe type="text/html" src="'+m+"://www.youtube-nocookie.com/embed/"+n+"?"+L+'" '+C+' width="100%" height="100%" style="opacity:0;width:100%;height:100%"></iframe>');break;case"vimeo":m="https",i.data("videomarkup",'<iframe src="'+m+"://player.vimeo.com/video/"+r+"?"+d+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>')}var P=_&&"on"==i.data("noposteronmobile");if(null!=a.videoposter&&2<a.videoposter.length&&!P)0==i.find(".tp-videoposter").length&&i.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+a.videoposter+'); background-size:cover;background-position:center center;"></div>'),0==i.find("iframe").length&&i.find(".tp-videoposter").click(function(){if(I.playVideo(i,o),_){if(1==i.data("disablevideoonmobile"))return!1;punchgs.TweenLite.to(i.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(i.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}});else{if(_&&1==i.data("disablevideoonmobile"))return!1;0!=i.find("iframe").length||"youtube"!=y&&"vimeo"!=y||(i.removeData("vimeoplayer"),i.append(i.data("videomarkup")),O(i,o,!1))}"none"!=i.data("dottedoverlay")&&null!=i.data("dottedoverlay")&&1!=i.find(".tp-dottedoverlay").length&&i.append('<div class="tp-dottedoverlay '+i.data("dottedoverlay")+'"></div>'),i.addClass("HasListener"),1==i.data("bgvideo")&&(i.data("ytid")?punchgs.TweenLite.set(i.find("iframe"),{opacity:0}):punchgs.TweenLite.set(i.find("video, iframe"),{autoAlpha:0}))}});var A=function(e,t,a){e.addEventListener?e.addEventListener(t,a,{capture:!1,passive:!0}):e.attachEvent(t,a,{capture:!1,passive:!0})},b=function(e,t,a){var i={};return i.video=e,i.videotype=t,i.settings=a,i},w=function(e,t){if(1==t.data("bgvideo")||1==t.data("forcecover")){1===t.data("forcecover")&&t.removeClass("fullscreenvideo").addClass("coverscreenvideo");var a=t.data("aspectratio");void 0===a&&a.split(":").length<=1&&t.data("aspectratio","16:9"),I.prepareCoveredVideo(e,t)}},O=function(r,o,e){var l=r.data(),t=r.find("iframe"),a="iframe"+Math.round(1e5*Math.random()+1),d=l.videoloop,n="loopandnoslidestop"!=d;if(d="loop"==d||"loopandnoslidestop"==d,w(o,r),t.attr("id",a),e&&r.data("startvideonow",!0),1!==r.data("videolistenerexist"))switch(l.videotype){case"youtube":var s=new YT.Player(a,{events:{onStateChange:function(e){var t=r.closest(".tp-simpleresponsive"),a=(l.videorate,r.data("videostart"),k());if(e.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(r.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(r.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==r.data("volume")||I.lastToggleState(r.data("videomutetoggledby"))||!0===o.globalmute?s.mute():(s.unMute(),s.setVolume(parseInt(r.data("volume"),0)||75)),o.videoplaying=!0,x(r,o),n?o.c.trigger("stoptimer"):o.videoplaying=!1,o.c.trigger("revolution.slide.onvideoplay",b(s,"youtube",r.data())),I.toggleState(l.videotoggledby);else{if(0==e.data&&d){var i=j(r.data("videostartat"));-1!=i&&s.seekTo(i),s.playVideo(),I.toggleState(l.videotoggledby)}a||0!=e.data&&2!=e.data||!("on"==r.data("showcoveronpause")&&0<r.find(".tp-videoposter").length||1===r.data("bgvideo")&&0<r.find(".rs-fullvideo-cover").length)||(1===r.data("bgvideo")?punchgs.TweenLite.to(r.find(".rs-fullvideo-cover"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(r.find(".tp-videoposter"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(r.find("iframe"),.1,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=e.data&&3!=e.data&&(o.videoplaying=!1,o.tonpause=!1,V(r,o),t.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",b(s,"youtube",r.data())),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=r.attr("id")||I.unToggleState(l.videotoggledby)),0==e.data&&1==r.data("nextslideatend")?(T(),r.data("nextslideatend-triggered",1),o.c.revnext(),V(r,o)):(V(r,o),o.videoplaying=!1,t.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",b(s,"youtube",r.data())),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=r.attr("id")||I.unToggleState(l.videotoggledby))}},onReady:function(e){var t,a=I.is_mobile(),i=r.hasClass("tp-videolayer");if(a||I.isSafari11()){var o=i&&"off"!==r.data("autoplay");if(r.hasClass("rs-background-video-layer")||o)a&&i||(t=!0,s.setVolume(0),r.data("volume","mute"),s.mute(),clearTimeout(r.data("mobilevideotimr")),r.data("mobilevideotimr",setTimeout(function(){s.playVideo()},500)))}t||"mute"!=r.data("volume")||(s.setVolume(0),s.mute());var d=l.videorate;r.data("videostart");if(r.addClass("rs-apiready"),null!=d&&e.target.setPlaybackRate(parseFloat(d)),r.find(".tp-videoposter").unbind("click"),r.find(".tp-videoposter").click(function(){_||s.playVideo()}),r.data("startvideonow")){l.player.playVideo();var n=j(r.data("videostartat"));-1!=n&&l.player.seekTo(n)}r.data("videolistenerexist",1)}}});r.data("player",s);break;case"vimeo":for(var i,u=t.attr("src"),p={},v=u,c=/([^&=]+)=([^&]*)/g;i=c.exec(v);)p[decodeURIComponent(i[1])]=decodeURIComponent(i[2]);u=(u=null!=p.player_id?u.replace(p.player_id,a):u+"&player_id="+a).replace(/&api=0|&api=1/g,"");var m=I.is_mobile(),g=r.data("autoplay"),y=(r.data("volume"),m||I.isSafari11());r.hasClass("rs-background-video-layer");(g="on"===g||"true"===g||!0===g)&&y&&(u+="?autoplay=1&autopause=0&muted=1&background=1&playsinline=1",r.data({vimeoplaysinline:!0,volume:"mute"})),t.attr("src",u);s=r.find("iframe")[0],jQuery("#"+a);if(r.data("vimeoplayer")?h=r.data("vimeoplayer"):(h=new Vimeo.Player(a),r.data("vimeoplayer",h)),h.on("loaded",function(e){var t={};h.getVideoWidth().then(function(e){t.width=e,void 0!==t.width&&void 0!==t.height&&(r.data("aspectratio",t.width+":"+t.height),r.data("vimeoplayerloaded",!0),w(o,r))}),h.getVideoHeight().then(function(e){t.height=e,void 0!==t.width&&void 0!==t.height&&(r.data("aspectratio",t.width+":"+t.height),r.data("vimeoplayerloaded",!0),w(o,r))})}),r.addClass("rs-apiready"),h.on("play",function(e){r.data("nextslidecalled",0),punchgs.TweenLite.to(r.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(r.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),o.c.trigger("revolution.slide.onvideoplay",b(h,"vimeo",r.data())),o.videoplaying=!0,x(r,o),n?o.c.trigger("stoptimer"):o.videoplaying=!1,r.data("vimeoplaysinline")||("mute"==r.data("volume")||I.lastToggleState(r.data("videomutetoggledby"))||!0===o.globalmute?h.setVolume(0):h.setVolume(parseInt(r.data("volume"),0)/100||.75),I.toggleState(l.videotoggledby))}),h.on("timeupdate",function(e){var t=j(r.data("videoendat"));if(r.data("currenttime",e.seconds),0!=t&&Math.abs(t-e.seconds)<1&&t>e.seconds&&1!=r.data("nextslidecalled"))if(d){h.play();var a=j(r.data("videostartat"));-1!=a&&h.setCurrentTime(a)}else 1==r.data("nextslideatend")&&(r.data("nextslideatend-triggered",1),r.data("nextslidecalled",1),o.c.revnext()),h.pause()}),h.on("ended",function(e){V(r,o),o.videoplaying=!1,o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",b(h,"vimeo",r.data())),1==r.data("nextslideatend")&&(r.data("nextslideatend-triggered",1),o.c.revnext()),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=r.attr("id")||I.unToggleState(l.videotoggledby)}),h.on("pause",function(e){("on"==r.data("showcoveronpause")&&0<r.find(".tp-videoposter").length||1===r.data("bgvideo")&&0<r.find(".rs-fullvideo-cover").length)&&(1===r.data("bgvideo")?punchgs.TweenLite.to(r.find(".rs-fullvideo-cover"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(r.find(".tp-videoposter"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(r.find("iframe"),.1,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),o.videoplaying=!1,o.tonpause=!1,V(r,o),o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",b(h,"vimeo",r.data())),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=r.attr("id")||I.unToggleState(l.videotoggledby)}),r.find(".tp-videoposter").unbind("click"),r.find(".tp-videoposter").click(function(){if(!_)return h.play(),!1}),r.data("startvideonow"))h.play(),-1!=(f=j(r.data("videostartat")))&&h.setCurrentTime(f);r.data("videolistenerexist",1)}else{var f=j(r.data("videostartat"));switch(l.videotype){case"youtube":e&&(l.player.playVideo(),-1!=f&&l.player.seekTo());break;case"vimeo":var h;if(e)(h=r.data("vimeoplayer")).play(),-1!=f&&h.seekTo(f)}}},T=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},k=function(){try{if(void 0!==window.fullScreen)return window.fullScreen;var e=5;return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(e=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e}catch(e){}},Q=function(o,d,e){if(_&&1==o.data("disablevideoonmobile"))return!1;var n=o.data(),t="html5"==n.audio?"audio":"video",a=o.find(t),r=a[0],i=a.parent(),l=n.videoloop,s="loopandnoslidestop"!=l;if(l="loop"==l||"loopandnoslidestop"==l,i.data("metaloaded",1),1!=o.data("bgvideo")||"none"!==n.videoloop&&!1!==n.videoloop||(s=!1),null==a.attr("control")&&(0!=o.find(".tp-video-play-button").length||_||o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),o.find("video, .tp-poster, .tp-video-play-button").click(function(){o.hasClass("videoisplaying")?r.pause():r.play()})),1==o.data("forcecover")||o.hasClass("fullscreenvideo")||1==o.data("bgvideo"))if(1==o.data("forcecover")||1==o.data("bgvideo")){i.addClass("fullcoveredvideo");var u=o.data("aspectratio");void 0!==u&&1!=u.split(":").length||o.data("aspectratio","16:9"),I.prepareCoveredVideo(d,o)}else i.addClass("fullscreenvideo");var p=o.find(".tp-vid-play-pause")[0],v=o.find(".tp-vid-mute")[0],c=o.find(".tp-vid-full-screen")[0],m=o.find(".tp-seek-bar")[0],g=o.find(".tp-volume-bar")[0];null!=p&&A(p,"click",function(){1==r.paused?r.play():r.pause()}),null!=v&&A(v,"click",function(){0==r.muted?(r.muted=!0,v.innerHTML="Unmute"):(r.muted=!1,v.innerHTML="Mute")}),null!=c&&c&&A(c,"click",function(){r.requestFullscreen?r.requestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen&&r.webkitRequestFullscreen()}),null!=m&&(A(m,"change",function(){var e=r.duration*(m.value/100);r.currentTime=e}),A(m,"mousedown",function(){o.addClass("seekbardragged"),r.pause()}),A(m,"mouseup",function(){o.removeClass("seekbardragged"),r.play()})),A(r,"canplaythrough",function(){I.preLoadAudioDone(o,d,"canplaythrough")}),A(r,"canplay",function(){I.preLoadAudioDone(o,d,"canplay")}),A(r,"progress",function(){I.preLoadAudioDone(o,d,"progress")}),A(r,"timeupdate",function(){var e=100/r.duration*r.currentTime,t=j(o.data("videoendat")),a=r.currentTime;if(null!=m&&(m.value=e),0!=t&&-1!=t&&Math.abs(t-a)<=.3&&a<t&&1!=o.data("nextslidecalled"))if(l){r.play();var i=j(o.data("videostartat"));-1!=i&&(r.currentTime=i)}else 1==o.data("nextslideatend")&&(o.data("nextslideatend-triggered",1),o.data("nextslidecalled",1),d.just_called_nextslide_at_htmltimer=!0,d.c.revnext(),setTimeout(function(){d.just_called_nextslide_at_htmltimer=!1},1e3)),r.pause()}),null!=g&&A(g,"change",function(){r.volume=g.value}),A(r,"play",function(){o.data("nextslidecalled",0);var e=o.data("volume");e=null!=e&&"mute"!=e?parseFloat(e)/100:e,I.is_mobile()||I.isSafari11()||(!0===d.globalmute?r.muted=!0:r.muted=!1,1<e&&(e/=100),"mute"==e?r.muted=!0:null!=e&&(r.volume=e)),o.addClass("videoisplaying");var t="html5"==n.audio?"audio":"video";x(o,d),s&&"audio"!=t?(d.videoplaying=!0,d.c.trigger("stoptimer"),d.c.trigger("revolution.slide.onvideoplay",b(r,"html5",n))):(d.videoplaying=!1,"audio"!=t&&d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",b(r,"html5",n))),punchgs.TweenLite.to(o.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(o.find(t),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});var a=o.find(".tp-vid-play-pause")[0],i=o.find(".tp-vid-mute")[0];null!=a&&(a.innerHTML="Pause"),null!=i&&r.muted&&(i.innerHTML="Unmute"),I.toggleState(n.videotoggledby)}),A(r,"pause",function(e){var t="html5"==n.audio?"audio":"video";!k()&&0<o.find(".tp-videoposter").length&&"on"==o.data("showcoveronpause")&&!o.hasClass("seekbardragged")&&(punchgs.TweenLite.to(o.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(o.find(t),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),o.removeClass("videoisplaying"),d.videoplaying=!1,V(o,d),"audio"!=t&&d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",b(r,"html5",o.data()));var a=o.find(".tp-vid-play-pause")[0];null!=a&&(a.innerHTML="Play"),null!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=o.attr("id")||I.unToggleState(n.videotoggledby)}),A(r,"ended",function(){T(),V(o,d),d.videoplaying=!1,V(o,d),"audio"!=t&&d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",b(r,"html5",o.data())),!0===o.data("nextslideatend")&&0<r.currentTime&&(1==!d.just_called_nextslide_at_htmltimer&&(o.data("nextslideatend-triggered",1),d.c.revnext(),d.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){d.just_called_nextslide_at_htmltimer=!1},1500)),o.removeClass("videoisplaying")})},x=function(e,a){null==a.playingvideos&&(a.playingvideos=new Array),e.data("stopallvideos")&&null!=a.playingvideos&&0<a.playingvideos.length&&(a.lastplayedvideos=jQuery.extend(!0,[],a.playingvideos),jQuery.each(a.playingvideos,function(e,t){I.stopVideo(t,a)})),a.playingvideos.push(e),a.currentLayerVideoIsPlaying=e},V=function(e,t){null!=t.playingvideos&&0<=jQuery.inArray(e,t.playingvideos)&&t.playingvideos.splice(jQuery.inArray(e,t.playingvideos),1)}}(jQuery);
;
;// Commom Plugins
(function($) {

	'use strict';

	// Scroll to Top Button.
	if (typeof theme.PluginScrollToTop !== 'undefined') {
		theme.PluginScrollToTop.initialize();
	}

	// Tooltips
	if ($.isFunction($.fn['tooltip'])) {
		$('[data-tooltip]:not(.manual), [data-plugin-tooltip]:not(.manual)').tooltip();
	}

	// Popover
	if ($.isFunction($.fn['popover'])) {
		$(function() {
			$('[data-plugin-popover]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.popover(opts);
			});
		});
	}

	// Validations
	if (typeof theme.PluginValidation !== 'undefined') {
		theme.PluginValidation.initialize();
	}

	// Match Height
	if ($.isFunction($.fn['matchHeight'])) {

		$('.match-height').matchHeight();

		// Featured Boxes
		$('.featured-boxes .featured-box').matchHeight();

		// Featured Box Full
		$('.featured-box-full').matchHeight();

	}

}).apply(this, [jQuery]);

// Animate
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginAnimate'])) {

		$(function() {
			$('[data-appear-animation]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginAnimate(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Before / After
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginBeforeAfter'])) {

		$(function() {
			$('[data-plugin-before-after]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginBeforeAfter(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Carousel
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCarousel'])) {

		$(function() {
			$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCarousel(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Chart.Circular
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginChartCircular'])) {

		$(function() {
			$('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginChartCircular(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Countdown
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCountdown'])) {

		$(function() {
			$('[data-plugin-countdown]:not(.manual), .countdown').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCountdown(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Counter
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCounter'])) {

		$(function() {
			$('[data-plugin-counter]:not(.manual), .counters [data-to]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCounter(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Float Element
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginFloatElement'])) {

		$(function() {
			$('[data-plugin-float-element]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginFloatElement(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Animated Icon
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginIcon'])) {

		$(document).ready(function(){
			$(function() {

				$('[data-icon]:not(.svg-inline--fa)').each(function() {
					var $this = $(this),
						opts;

					var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
					if (pluginOptions)
						opts = pluginOptions;

					$this.themePluginIcon(opts);
				});
				
			});
		});
	}

}).apply(this, [jQuery]);

// Lazy Load
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLazyLoad'])) {

		$(function() {
			$('[data-plugin-lazyload]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLazyLoad(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Lightbox
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLightbox'])) {

		$(function() {
			$('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLightbox(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Masonry
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMasonry'])) {

		$(function() {
			$('[data-plugin-masonry]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Match Height
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMatchHeight'])) {

		$(function() {
			$('[data-plugin-match-height]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMatchHeight(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Parallax
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginParallax'])) {

		$(function() {
			$('[data-plugin-parallax]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginParallax(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Progress Bar
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginProgressBar'])) {

		$(function() {
			$('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginProgressBar(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Revolution Slider
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginRevolutionSlider'])) {

		$(function() {
			$('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginRevolutionSlider(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Scrollable
(function($) {

	'use strict';

	if ( $.isFunction($.fn[ 'nanoScroller' ]) ) {

		$(function() {
			$('[data-plugin-scrollable]').each(function() {
				var $this = $( this ),
					opts = {};

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions) {
					opts = pluginOptions;
				}

				$this.themePluginScrollable(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Section Scroll
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSectionScroll'])) {

		$(function() {
			$('[data-plugin-section-scroll]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSectionScroll(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sort
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSort'])) {

		$(function() {
			$('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSort(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Star Rating
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginStarRating'])) {

		$(function() {
			$('[data-plugin-star-rating]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginStarRating(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sticky
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSticky'])) {

		$(function() {
			$('[data-plugin-sticky]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSticky(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Toggle
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginToggle'])) {

		$(function() {
			$('[data-plugin-toggle]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginToggle(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Tweets
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginTweets'])) {

		$(function() {
			$('[data-plugin-tweets]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginTweets(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Video Background
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginVideoBackground'])) {

		$(function() {
			$('[data-plugin-video-background]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginVideoBackground(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Commom Partials
(function($) {

	'use strict';

	// Sticky Header
	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	// Search
	if (typeof theme.Search !== 'undefined') {
		theme.Search.initialize();
	}

	// Newsletter
	if (typeof theme.Newsletter !== 'undefined') {
		theme.Newsletter.initialize();
	}

	// Account
	if (typeof theme.Account !== 'undefined') {
		theme.Account.initialize();
	}

}).apply(this, [jQuery]);
;