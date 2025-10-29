function fh(e,r){for(var n=0;n<r.length;n++){const a=r[n];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function gh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xu={exports:{}},El={},Gu={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),vh=Symbol.for("react.portal"),xh=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),jh=Symbol.for("react.profiler"),bh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Sh=Symbol.for("react.memo"),zh=Symbol.for("react.lazy"),fd=Symbol.iterator;function Ch(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var Ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,e0={};function ma(e,r,n){this.props=e,this.context=r,this.refs=e0,this.updater=n||Ju}ma.prototype.isReactComponent={};ma.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};ma.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function t0(){}t0.prototype=ma.prototype;function cc(e,r,n){this.props=e,this.context=r,this.refs=e0,this.updater=n||Ju}var dc=cc.prototype=new t0;dc.constructor=cc;Zu(dc,ma.prototype);dc.isPureReactComponent=!0;var gd=Array.isArray,r0=Object.prototype.hasOwnProperty,uc={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function a0(e,r,n){var a,s={},l=null,i=null;if(r!=null)for(a in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(l=""+r.key),r)r0.call(r,a)&&!n0.hasOwnProperty(a)&&(s[a]=r[a]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(a in o=e.defaultProps,o)s[a]===void 0&&(s[a]=o[a]);return{$$typeof:ds,type:e,key:l,ref:i,props:s,_owner:uc.current}}function Rh(e,r){return{$$typeof:ds,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds}function Mh(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var vd=/\/+/g;function di(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Mh(""+e.key):r.toString(36)}function Hs(e,r,n,a,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ds:case vh:i=!0}}if(i)return i=e,s=s(i),e=a===""?"."+di(i,0):a,gd(s)?(n="",e!=null&&(n=e.replace(vd,"$&/")+"/"),Hs(s,r,n,"",function(d){return d})):s!=null&&(pc(s)&&(s=Rh(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(vd,"$&/")+"/")+e)),r.push(s)),1;if(i=0,a=a===""?".":a+":",gd(e))for(var o=0;o<e.length;o++){l=e[o];var c=a+di(l,o);i+=Hs(l,r,n,c,s)}else if(c=Ch(e),typeof c=="function")for(e=c.call(e),o=0;!(l=e.next()).done;)l=l.value,c=a+di(l,o++),i+=Hs(l,r,n,c,s);else if(l==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function Ns(e,r,n){if(e==null)return e;var a=[],s=0;return Hs(e,a,"","",function(l){return r.call(n,l,s++)}),a}function Ph(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},Ws={transition:null},Eh={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:uc};function s0(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:Ns,forEach:function(e,r,n){Ns(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Ns(e,function(){r++}),r},toArray:function(e){return Ns(e,function(r){return r})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=ma;xe.Fragment=xh;xe.Profiler=jh;xe.PureComponent=cc;xe.StrictMode=yh;xe.Suspense=kh;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;xe.act=s0;xe.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Zu({},e.props),s=e.key,l=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(l=r.ref,i=uc.current),r.key!==void 0&&(s=""+r.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in r)r0.call(r,c)&&!n0.hasOwnProperty(c)&&(a[c]=r[c]===void 0&&o!==void 0?o[c]:r[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];a.children=o}return{$$typeof:ds,type:e.type,key:s,ref:l,props:a,_owner:i}};xe.createContext=function(e){return e={$$typeof:wh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bh,_context:e},e.Consumer=e};xe.createElement=a0;xe.createFactory=function(e){var r=a0.bind(null,e);return r.type=e,r};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:Nh,render:e}};xe.isValidElement=pc;xe.lazy=function(e){return{$$typeof:zh,_payload:{_status:-1,_result:e},_init:Ph}};xe.memo=function(e,r){return{$$typeof:Sh,type:e,compare:r===void 0?null:r}};xe.startTransition=function(e){var r=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=r}};xe.unstable_act=s0;xe.useCallback=function(e,r){return Pt.current.useCallback(e,r)};xe.useContext=function(e){return Pt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};xe.useEffect=function(e,r){return Pt.current.useEffect(e,r)};xe.useId=function(){return Pt.current.useId()};xe.useImperativeHandle=function(e,r,n){return Pt.current.useImperativeHandle(e,r,n)};xe.useInsertionEffect=function(e,r){return Pt.current.useInsertionEffect(e,r)};xe.useLayoutEffect=function(e,r){return Pt.current.useLayoutEffect(e,r)};xe.useMemo=function(e,r){return Pt.current.useMemo(e,r)};xe.useReducer=function(e,r,n){return Pt.current.useReducer(e,r,n)};xe.useRef=function(e){return Pt.current.useRef(e)};xe.useState=function(e){return Pt.current.useState(e)};xe.useSyncExternalStore=function(e,r,n){return Pt.current.useSyncExternalStore(e,r,n)};xe.useTransition=function(){return Pt.current.useTransition()};xe.version="18.3.1";Gu.exports=xe;var u=Gu.exports;const re=gh(u),Wi=fh({__proto__:null,default:re},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=u,Th=Symbol.for("react.element"),Lh=Symbol.for("react.fragment"),_h=Object.prototype.hasOwnProperty,Ah=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ih={key:!0,ref:!0,__self:!0,__source:!0};function l0(e,r,n){var a,s={},l=null,i=null;n!==void 0&&(l=""+n),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(i=r.ref);for(a in r)_h.call(r,a)&&!Ih.hasOwnProperty(a)&&(s[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)s[a]===void 0&&(s[a]=r[a]);return{$$typeof:Th,type:e,key:l,ref:i,props:s,_owner:Ah.current}}El.Fragment=Lh;El.jsx=l0;El.jsxs=l0;Xu.exports=El;var t=Xu.exports,Oi={},i0={exports:{}},Xt={},o0={exports:{}},c0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(M,D){var V=M.length;M.push(D);e:for(;0<V;){var q=V-1>>>1,O=M[q];if(0<s(O,D))M[q]=D,M[V]=O,V=q;else break e}}function n(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var D=M[0],V=M.pop();if(V!==D){M[0]=V;e:for(var q=0,O=M.length,X=O>>>1;q<X;){var G=2*(q+1)-1,ee=M[G],B=G+1,te=M[B];if(0>s(ee,V))B<O&&0>s(te,ee)?(M[q]=te,M[B]=V,q=B):(M[q]=ee,M[G]=V,q=G);else if(B<O&&0>s(te,V))M[q]=te,M[B]=V,q=B;else break e}}return D}function s(M,D){var V=M.sortIndex-D.sortIndex;return V!==0?V:M.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],d=[],p=1,h=null,f=3,b=!1,j=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var D=n(d);D!==null;){if(D.callback===null)a(d);else if(D.startTime<=M)a(d),D.sortIndex=D.expirationTime,r(c,D);else break;D=n(d)}}function x(M){if(y=!1,m(M),!j)if(n(c)!==null)j=!0,L(N);else{var D=n(d);D!==null&&A(x,D.startTime-M)}}function N(M,D){j=!1,y&&(y=!1,v(R),R=-1),b=!0;var V=f;try{for(m(D),h=n(c);h!==null&&(!(h.expirationTime>D)||M&&!P());){var q=h.callback;if(typeof q=="function"){h.callback=null,f=h.priorityLevel;var O=q(h.expirationTime<=D);D=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(c)&&a(c),m(D)}else a(c);h=n(c)}if(h!==null)var X=!0;else{var G=n(d);G!==null&&A(x,G.startTime-D),X=!1}return X}finally{h=null,f=V,b=!1}}var C=!1,k=null,R=-1,I=5,_=-1;function P(){return!(e.unstable_now()-_<I)}function T(){if(k!==null){var M=e.unstable_now();_=M;var D=!0;try{D=k(!0,M)}finally{D?$():(C=!1,k=null)}}else C=!1}var $;if(typeof g=="function")$=function(){g(T)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Q=W.port2;W.port1.onmessage=T,$=function(){Q.postMessage(null)}}else $=function(){w(T,0)};function L(M){k=M,C||(C=!0,$())}function A(M,D){R=w(function(){M(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){j||b||(j=!0,L(N))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var V=f;f=D;try{return M()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,D){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var V=f;f=M;try{return D()}finally{f=V}},e.unstable_scheduleCallback=function(M,D,V){var q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?q+V:q):V=q,M){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=V+O,M={id:p++,callback:D,priorityLevel:M,startTime:V,expirationTime:O,sortIndex:-1},V>q?(M.sortIndex=V,r(d,M),n(c)===null&&M===n(d)&&(y?(v(R),R=-1):y=!0,A(x,V-q))):(M.sortIndex=O,r(c,M),j||b||(j=!0,L(N))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var D=f;return function(){var V=f;f=D;try{return M.apply(this,arguments)}finally{f=V}}}})(c0);o0.exports=c0;var Dh=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh=u,Kt=Dh;function H(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d0=new Set,Oa={};function _n(e,r){sa(e,r),sa(e+"Capture",r)}function sa(e,r){for(Oa[e]=r,e=0;e<r.length;e++)d0.add(r[e])}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=Object.prototype.hasOwnProperty,Bh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xd={},yd={};function Fh(e){return Ui.call(yd,e)?!0:Ui.call(xd,e)?!1:Bh.test(e)?yd[e]=!0:(xd[e]=!0,!1)}function Hh(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wh(e,r,n,a){if(r===null||typeof r>"u"||Hh(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Et(e,r,n,a,s,l,i){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=i}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){yt[e]=new Et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];yt[r]=new Et(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){yt[e]=new Et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){yt[e]=new Et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){yt[e]=new Et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){yt[e]=new Et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){yt[e]=new Et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){yt[e]=new Et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){yt[e]=new Et(e,5,!1,e.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(mc,hc);yt[r]=new Et(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(mc,hc);yt[r]=new Et(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(mc,hc);yt[r]=new Et(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){yt[e]=new Et(e,1,!1,e.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){yt[e]=new Et(e,1,!1,e.toLowerCase(),null,!0,!0)});function fc(e,r,n,a){var s=yt.hasOwnProperty(r)?yt[r]:null;(s!==null?s.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Wh(r,n,s,a)&&(n=null),a||s===null?Fh(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(r=s.attributeName,a=s.attributeNamespace,n===null?e.removeAttribute(r):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var Vr=Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),Qi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),m0=Symbol.for("react.offscreen"),jd=Symbol.iterator;function va(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Object.assign,ui;function Sa(e){if(ui===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);ui=r&&r[1]||""}return`
`+ui+e}var pi=!1;function mi(e,r){if(!e||pi)return"";pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(d){var a=d}Reflect.construct(e,[],r)}else{try{r.call()}catch(d){a=d}e.call(r.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),l=a.stack.split(`
`),i=s.length-1,o=l.length-1;1<=i&&0<=o&&s[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(s[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||s[i]!==l[o]){var c=`
`+s[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=o);break}}}finally{pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sa(e):""}function Oh(e){switch(e.tag){case 5:return Sa(e.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return e=mi(e.type,!1),e;case 11:return e=mi(e.type.render,!1),e;case 1:return e=mi(e.type,!0),e;default:return""}}function Ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Fn:return"Portal";case qi:return"Profiler";case gc:return"StrictMode";case Qi:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p0:return(e.displayName||"Context")+".Consumer";case u0:return(e._context.displayName||"Context")+".Provider";case vc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return r=e.displayName||null,r!==null?r:Ki(e.type)||"Memo";case Or:r=e._payload,e=e._init;try{return Ki(e(r))}catch{}}return null}function Uh(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ki(r);case 8:return r===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function h0(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function qh(e){var r=h0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(i){a=""+i,l.call(this,i)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Ss(e){e._valueTracker||(e._valueTracker=qh(e))}function f0(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=h0(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,r){var n=r.checked;return Je({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bd(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=pn(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function g0(e,r){r=r.checked,r!=null&&fc(e,"checked",r,!1)}function Gi(e,r){g0(e,r);var n=pn(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Ji(e,r.type,n):r.hasOwnProperty("defaultValue")&&Ji(e,r.type,pn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function wd(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ji(e,r,n){(r!=="number"||el(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var za=Array.isArray;function Zn(e,r,n,a){if(e=e.options,r){r={};for(var s=0;s<n.length;s++)r["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=r.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),r=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function Zi(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(H(91));return Je({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nd(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(H(92));if(za(n)){if(1<n.length)throw Error(H(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:pn(n)}}function v0(e,r){var n=pn(r.value),a=pn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function kd(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function x0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?x0(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zs,y0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,s){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,s)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ua(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qh=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(e){Qh.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),$a[r]=$a[e]})});function j0(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||$a.hasOwnProperty(e)&&$a[e]?(""+r).trim():r+"px"}function b0(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,s=j0(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,s):e[n]=s}}var Yh=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function to(e,r){if(r){if(Yh[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(H(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(H(61))}if(r.style!=null&&typeof r.style!="object")throw Error(H(62))}}function ro(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var no=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,ea=null,ta=null;function Sd(e){if(e=ms(e)){if(typeof ao!="function")throw Error(H(280));var r=e.stateNode;r&&(r=Al(r),ao(e.stateNode,e.type,r))}}function w0(e){ea?ta?ta.push(e):ta=[e]:ea=e}function N0(){if(ea){var e=ea,r=ta;if(ta=ea=null,Sd(e),r)for(e=0;e<r.length;e++)Sd(r[e])}}function k0(e,r){return e(r)}function S0(){}var hi=!1;function z0(e,r,n){if(hi)return e(r,n);hi=!0;try{return k0(e,r,n)}finally{hi=!1,(ea!==null||ta!==null)&&(S0(),N0())}}function qa(e,r){var n=e.stateNode;if(n===null)return null;var a=Al(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,r,typeof n));return n}var so=!1;if(Lr)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){so=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{so=!1}function Kh(e,r,n,a,s,l,i,o,c){var d=Array.prototype.slice.call(arguments,3);try{r.apply(n,d)}catch(p){this.onError(p)}}var Ta=!1,tl=null,rl=!1,lo=null,Xh={onError:function(e){Ta=!0,tl=e}};function Gh(e,r,n,a,s,l,i,o,c){Ta=!1,tl=null,Kh.apply(Xh,arguments)}function Jh(e,r,n,a,s,l,i,o,c){if(Gh.apply(this,arguments),Ta){if(Ta){var d=tl;Ta=!1,tl=null}else throw Error(H(198));rl||(rl=!0,lo=d)}}function An(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function C0(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function zd(e){if(An(e)!==e)throw Error(H(188))}function Zh(e){var r=e.alternate;if(!r){if(r=An(e),r===null)throw Error(H(188));return r!==e?null:e}for(var n=e,a=r;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return zd(s),e;if(l===a)return zd(s),r;l=l.sibling}throw Error(H(188))}if(n.return!==a.return)n=s,a=l;else{for(var i=!1,o=s.child;o;){if(o===n){i=!0,n=s,a=l;break}if(o===a){i=!0,a=s,n=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===n){i=!0,n=l,a=s;break}if(o===a){i=!0,a=l,n=s;break}o=o.sibling}if(!i)throw Error(H(189))}}if(n.alternate!==a)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:r}function R0(e){return e=Zh(e),e!==null?M0(e):null}function M0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=M0(e);if(r!==null)return r;e=e.sibling}return null}var P0=Kt.unstable_scheduleCallback,Cd=Kt.unstable_cancelCallback,e1=Kt.unstable_shouldYield,t1=Kt.unstable_requestPaint,nt=Kt.unstable_now,r1=Kt.unstable_getCurrentPriorityLevel,jc=Kt.unstable_ImmediatePriority,E0=Kt.unstable_UserBlockingPriority,nl=Kt.unstable_NormalPriority,n1=Kt.unstable_LowPriority,$0=Kt.unstable_IdlePriority,$l=null,wr=null;function a1(e){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot($l,e,void 0,(e.current.flags&128)===128)}catch{}}var pr=Math.clz32?Math.clz32:i1,s1=Math.log,l1=Math.LN2;function i1(e){return e>>>=0,e===0?32:31-(s1(e)/l1|0)|0}var Cs=64,Rs=4194304;function Ca(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,s=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var o=i&~s;o!==0?a=Ca(o):(l&=i,l!==0&&(a=Ca(l)))}else i=n&~s,i!==0?a=Ca(i):l!==0&&(a=Ca(l));if(a===0)return 0;if(r!==0&&r!==a&&!(r&s)&&(s=a&-a,l=r&-r,s>=l||s===16&&(l&4194240)!==0))return r;if(a&4&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-pr(r),s=1<<n,a|=e[n],r&=~s;return a}function o1(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-pr(l),o=1<<i,c=s[i];c===-1?(!(o&n)||o&a)&&(s[i]=o1(o,r)):c<=r&&(e.expiredLanes|=o),l&=~o}}function io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function T0(){var e=Cs;return Cs<<=1,!(Cs&4194240)&&(Cs=64),e}function fi(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function us(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-pr(r),e[r]=n}function d1(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-pr(n),l=1<<s;r[s]=0,a[s]=-1,e[s]=-1,n&=~l}}function bc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-pr(n),s=1<<a;s&r|e[a]&r&&(e[a]|=r),n&=~s}}var $e=0;function L0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _0,wc,A0,I0,D0,oo=!1,Ms=[],tn=null,rn=null,nn=null,Qa=new Map,Ya=new Map,qr=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(e,r){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Qa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(r.pointerId)}}function ya(e,r,n,a,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[s]},r!==null&&(r=ms(r),r!==null&&wc(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function p1(e,r,n,a,s){switch(r){case"focusin":return tn=ya(tn,e,r,n,a,s),!0;case"dragenter":return rn=ya(rn,e,r,n,a,s),!0;case"mouseover":return nn=ya(nn,e,r,n,a,s),!0;case"pointerover":var l=s.pointerId;return Qa.set(l,ya(Qa.get(l)||null,e,r,n,a,s)),!0;case"gotpointercapture":return l=s.pointerId,Ya.set(l,ya(Ya.get(l)||null,e,r,n,a,s)),!0}return!1}function V0(e){var r=Nn(e.target);if(r!==null){var n=An(r);if(n!==null){if(r=n.tag,r===13){if(r=C0(n),r!==null){e.blockedOn=r,D0(e.priority,function(){A0(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Os(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=co(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);no=a,n.target.dispatchEvent(a),no=null}else return r=ms(n),r!==null&&wc(r),e.blockedOn=n,!1;r.shift()}return!0}function Md(e,r,n){Os(e)&&n.delete(r)}function m1(){oo=!1,tn!==null&&Os(tn)&&(tn=null),rn!==null&&Os(rn)&&(rn=null),nn!==null&&Os(nn)&&(nn=null),Qa.forEach(Md),Ya.forEach(Md)}function ja(e,r){e.blockedOn===r&&(e.blockedOn=null,oo||(oo=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,m1)))}function Ka(e){function r(s){return ja(s,e)}if(0<Ms.length){ja(Ms[0],e);for(var n=1;n<Ms.length;n++){var a=Ms[n];a.blockedOn===e&&(a.blockedOn=null)}}for(tn!==null&&ja(tn,e),rn!==null&&ja(rn,e),nn!==null&&ja(nn,e),Qa.forEach(r),Ya.forEach(r),n=0;n<qr.length;n++)a=qr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)V0(n),n.blockedOn===null&&qr.shift()}var ra=Vr.ReactCurrentBatchConfig,sl=!0;function h1(e,r,n,a){var s=$e,l=ra.transition;ra.transition=null;try{$e=1,Nc(e,r,n,a)}finally{$e=s,ra.transition=l}}function f1(e,r,n,a){var s=$e,l=ra.transition;ra.transition=null;try{$e=4,Nc(e,r,n,a)}finally{$e=s,ra.transition=l}}function Nc(e,r,n,a){if(sl){var s=co(e,r,n,a);if(s===null)Si(e,r,a,ll,n),Rd(e,a);else if(p1(s,e,r,n,a))a.stopPropagation();else if(Rd(e,a),r&4&&-1<u1.indexOf(e)){for(;s!==null;){var l=ms(s);if(l!==null&&_0(l),l=co(e,r,n,a),l===null&&Si(e,r,a,ll,n),l===s)break;s=l}s!==null&&a.stopPropagation()}else Si(e,r,a,null,n)}}var ll=null;function co(e,r,n,a){if(ll=null,e=yc(a),e=Nn(e),e!==null)if(r=An(e),r===null)e=null;else if(n=r.tag,n===13){if(e=C0(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ll=e,null}function B0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r1()){case jc:return 1;case E0:return 4;case nl:case n1:return 16;case $0:return 536870912;default:return 16}default:return 16}}var Kr=null,kc=null,Us=null;function F0(){if(Us)return Us;var e,r=kc,n=r.length,a,s="value"in Kr?Kr.value:Kr.textContent,l=s.length;for(e=0;e<n&&r[e]===s[e];e++);var i=n-e;for(a=1;a<=i&&r[n-a]===s[l-a];a++);return Us=s.slice(e,1<a?1-a:void 0)}function qs(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ps(){return!0}function Pd(){return!1}function Gt(e){function r(n,a,s,l,i){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ps:Pd,this.isPropagationStopped=Pd,this}return Je(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps}),r}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sc=Gt(ha),ps=Je({},ha,{view:0,detail:0}),g1=Gt(ps),gi,vi,ba,Tl=Je({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(gi=e.screenX-ba.screenX,vi=e.screenY-ba.screenY):vi=gi=0,ba=e),gi)},movementY:function(e){return"movementY"in e?e.movementY:vi}}),Ed=Gt(Tl),v1=Je({},Tl,{dataTransfer:0}),x1=Gt(v1),y1=Je({},ps,{relatedTarget:0}),xi=Gt(y1),j1=Je({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=Gt(j1),w1=Je({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N1=Gt(w1),k1=Je({},ha,{data:0}),$d=Gt(k1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R1(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=C1[e])?!!r[e]:!1}function zc(){return R1}var M1=Je({},ps,{key:function(e){if(e.key){var r=S1[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(e){return e.type==="keypress"?qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P1=Gt(M1),E1=Je({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Gt(E1),$1=Je({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),T1=Gt($1),L1=Je({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=Gt(L1),A1=Je({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=Gt(A1),D1=[9,13,27,32],Cc=Lr&&"CompositionEvent"in window,La=null;Lr&&"documentMode"in document&&(La=document.documentMode);var V1=Lr&&"TextEvent"in window&&!La,H0=Lr&&(!Cc||La&&8<La&&11>=La),Ld=" ",_d=!1;function W0(e,r){switch(e){case"keyup":return D1.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function B1(e,r){switch(e){case"compositionend":return O0(r);case"keypress":return r.which!==32?null:(_d=!0,Ld);case"textInput":return e=r.data,e===Ld&&_d?null:e;default:return null}}function F1(e,r){if(Wn)return e==="compositionend"||!Cc&&W0(e,r)?(e=F0(),Us=kc=Kr=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return H0&&r.locale!=="ko"?null:r.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!H1[e.type]:r==="textarea"}function U0(e,r,n,a){w0(a),r=il(r,"onChange"),0<r.length&&(n=new Sc("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var _a=null,Xa=null;function W1(e){rp(e,0)}function Ll(e){var r=qn(e);if(f0(r))return e}function O1(e,r){if(e==="change")return r}var q0=!1;if(Lr){var yi;if(Lr){var ji="oninput"in document;if(!ji){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),ji=typeof Id.oninput=="function"}yi=ji}else yi=!1;q0=yi&&(!document.documentMode||9<document.documentMode)}function Dd(){_a&&(_a.detachEvent("onpropertychange",Q0),Xa=_a=null)}function Q0(e){if(e.propertyName==="value"&&Ll(Xa)){var r=[];U0(r,Xa,e,yc(e)),z0(W1,r)}}function U1(e,r,n){e==="focusin"?(Dd(),_a=r,Xa=n,_a.attachEvent("onpropertychange",Q0)):e==="focusout"&&Dd()}function q1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(Xa)}function Q1(e,r){if(e==="click")return Ll(r)}function Y1(e,r){if(e==="input"||e==="change")return Ll(r)}function K1(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var hr=typeof Object.is=="function"?Object.is:K1;function Ga(e,r){if(hr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!Ui.call(r,s)||!hr(e[s],r[s]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bd(e,r){var n=Vd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vd(n)}}function Y0(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Y0(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function K0(){for(var e=window,r=el();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=el(e.document)}return r}function Rc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function X1(e){var r=K0(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(a!==null&&Rc(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(a.start,s);a=a.end===void 0?l:Math.min(a.end,s),!e.extend&&l>a&&(s=a,a=l,l=s),s=Bd(n,l);var i=Bd(n,a);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),l>a?(e.addRange(r),e.extend(i.node,i.offset)):(r.setEnd(i.node,i.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G1=Lr&&"documentMode"in document&&11>=document.documentMode,On=null,uo=null,Aa=null,po=!1;function Fd(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||On==null||On!==el(a)||(a=On,"selectionStart"in a&&Rc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Aa&&Ga(Aa,a)||(Aa=a,a=il(uo,"onSelect"),0<a.length&&(r=new Sc("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=On)))}function Es(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Un={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionend:Es("Transition","TransitionEnd")},bi={},X0={};Lr&&(X0=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function _l(e){if(bi[e])return bi[e];if(!Un[e])return e;var r=Un[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in X0)return bi[e]=r[n];return e}var G0=_l("animationend"),J0=_l("animationiteration"),Z0=_l("animationstart"),ep=_l("transitionend"),tp=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,r){tp.set(e,r),_n(r,[e])}for(var wi=0;wi<Hd.length;wi++){var Ni=Hd[wi],J1=Ni.toLowerCase(),Z1=Ni[0].toUpperCase()+Ni.slice(1);hn(J1,"on"+Z1)}hn(G0,"onAnimationEnd");hn(J0,"onAnimationIteration");hn(Z0,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(ep,"onTransitionEnd");sa("onMouseEnter",["mouseout","mouseover"]);sa("onMouseLeave",["mouseout","mouseover"]);sa("onPointerEnter",["pointerout","pointerover"]);sa("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Wd(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,Jh(a,r,void 0,e),e.currentTarget=null}function rp(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var l=void 0;if(r)for(var i=a.length-1;0<=i;i--){var o=a[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==l&&s.isPropagationStopped())break e;Wd(s,o,d),l=c}else for(i=0;i<a.length;i++){if(o=a[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==l&&s.isPropagationStopped())break e;Wd(s,o,d),l=c}}}if(rl)throw e=lo,rl=!1,lo=null,e}function Be(e,r){var n=r[vo];n===void 0&&(n=r[vo]=new Set);var a=e+"__bubble";n.has(a)||(np(r,e,2,!1),n.add(a))}function ki(e,r,n){var a=0;r&&(a|=4),np(n,e,a,r)}var $s="_reactListening"+Math.random().toString(36).slice(2);function Ja(e){if(!e[$s]){e[$s]=!0,d0.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||ki(n,!1,e),ki(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[$s]||(r[$s]=!0,ki("selectionchange",!1,r))}}function np(e,r,n,a){switch(B0(r)){case 1:var s=h1;break;case 4:s=f1;break;default:s=Nc}n=s.bind(null,r,n,e),s=void 0,!so||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(r,n,{capture:!0,passive:s}):e.addEventListener(r,n,!0):s!==void 0?e.addEventListener(r,n,{passive:s}):e.addEventListener(r,n,!1)}function Si(e,r,n,a,s){var l=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var o=a.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(i===4)for(i=a.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;i=i.return}for(;o!==null;){if(i=Nn(o),i===null)return;if(c=i.tag,c===5||c===6){a=l=i;continue e}o=o.parentNode}}a=a.return}z0(function(){var d=l,p=yc(n),h=[];e:{var f=tp.get(e);if(f!==void 0){var b=Sc,j=e;switch(e){case"keypress":if(qs(n)===0)break e;case"keydown":case"keyup":b=P1;break;case"focusin":j="focus",b=xi;break;case"focusout":j="blur",b=xi;break;case"beforeblur":case"afterblur":b=xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=T1;break;case G0:case J0:case Z0:b=b1;break;case ep:b=_1;break;case"scroll":b=g1;break;case"wheel":b=I1;break;case"copy":case"cut":case"paste":b=N1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Td}var y=(r&4)!==0,w=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var g=d,m;g!==null;){m=g;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,v!==null&&(x=qa(g,v),x!=null&&y.push(Za(g,x,m)))),w)break;g=g.return}0<y.length&&(f=new b(f,j,null,n,p),h.push({event:f,listeners:y}))}}if(!(r&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==no&&(j=n.relatedTarget||n.fromElement)&&(Nn(j)||j[_r]))break e;if((b||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,b?(j=n.relatedTarget||n.toElement,b=d,j=j?Nn(j):null,j!==null&&(w=An(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(b=null,j=d),b!==j)){if(y=Ed,x="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Td,x="onPointerLeave",v="onPointerEnter",g="pointer"),w=b==null?f:qn(b),m=j==null?f:qn(j),f=new y(x,g+"leave",b,n,p),f.target=w,f.relatedTarget=m,x=null,Nn(p)===d&&(y=new y(v,g+"enter",j,n,p),y.target=m,y.relatedTarget=w,x=y),w=x,b&&j)t:{for(y=b,v=j,g=0,m=y;m;m=Bn(m))g++;for(m=0,x=v;x;x=Bn(x))m++;for(;0<g-m;)y=Bn(y),g--;for(;0<m-g;)v=Bn(v),m--;for(;g--;){if(y===v||v!==null&&y===v.alternate)break t;y=Bn(y),v=Bn(v)}y=null}else y=null;b!==null&&Od(h,f,b,y,!1),j!==null&&w!==null&&Od(h,w,j,y,!0)}}e:{if(f=d?qn(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var N=O1;else if(Ad(f))if(q0)N=Y1;else{N=q1;var C=U1}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Q1);if(N&&(N=N(e,d))){U0(h,N,n,p);break e}C&&C(e,f,d),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ji(f,"number",f.value)}switch(C=d?qn(d):window,e){case"focusin":(Ad(C)||C.contentEditable==="true")&&(On=C,uo=d,Aa=null);break;case"focusout":Aa=uo=On=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,Fd(h,n,p);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Fd(h,n,p)}var k;if(Cc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Wn?W0(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(H0&&n.locale!=="ko"&&(Wn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Wn&&(k=F0()):(Kr=p,kc="value"in Kr?Kr.value:Kr.textContent,Wn=!0)),C=il(d,R),0<C.length&&(R=new $d(R,e,null,n,p),h.push({event:R,listeners:C}),k?R.data=k:(k=O0(n),k!==null&&(R.data=k)))),(k=V1?B1(e,n):F1(e,n))&&(d=il(d,"onBeforeInput"),0<d.length&&(p=new $d("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:d}),p.data=k))}rp(h,r)})}function Za(e,r,n){return{instance:e,listener:r,currentTarget:n}}function il(e,r){for(var n=r+"Capture",a=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=qa(e,n),l!=null&&a.unshift(Za(e,l,s)),l=qa(e,r),l!=null&&a.push(Za(e,l,s))),e=e.return}return a}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,r,n,a,s){for(var l=r._reactName,i=[];n!==null&&n!==a;){var o=n,c=o.alternate,d=o.stateNode;if(c!==null&&c===a)break;o.tag===5&&d!==null&&(o=d,s?(c=qa(n,l),c!=null&&i.unshift(Za(n,c,o))):s||(c=qa(n,l),c!=null&&i.push(Za(n,c,o)))),n=n.return}i.length!==0&&e.push({event:r,listeners:i})}var tf=/\r\n?/g,rf=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(rf,"")}function Ts(e,r,n){if(r=Ud(r),Ud(e)!==r&&n)throw Error(H(425))}function ol(){}var mo=null,ho=null;function fo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,af=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(sf)}:go;function sf(e){setTimeout(function(){throw e})}function zi(e,r){var n=r,a=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(a===0){e.removeChild(s),Ka(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=s}while(n);Ka(r)}function an(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Qd(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var fa=Math.random().toString(36).slice(2),yr="__reactFiber$"+fa,es="__reactProps$"+fa,_r="__reactContainer$"+fa,vo="__reactEvents$"+fa,lf="__reactListeners$"+fa,of="__reactHandles$"+fa;function Nn(e){var r=e[yr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[_r]||n[yr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Qd(e);e!==null;){if(n=e[yr])return n;e=Qd(e)}return r}e=n,n=e.parentNode}return null}function ms(e){return e=e[yr]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function Al(e){return e[es]||null}var xo=[],Qn=-1;function fn(e){return{current:e}}function Fe(e){0>Qn||(e.current=xo[Qn],xo[Qn]=null,Qn--)}function Ie(e,r){Qn++,xo[Qn]=e.current,e.current=r}var mn={},zt=fn(mn),Vt=fn(!1),Mn=mn;function la(e,r){var n=e.type.contextTypes;if(!n)return mn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=r[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function Bt(e){return e=e.childContextTypes,e!=null}function cl(){Fe(Vt),Fe(zt)}function Yd(e,r,n){if(zt.current!==mn)throw Error(H(168));Ie(zt,r),Ie(Vt,n)}function ap(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var s in a)if(!(s in r))throw Error(H(108,Uh(e)||"Unknown",s));return Je({},n,a)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Mn=zt.current,Ie(zt,e),Ie(Vt,Vt.current),!0}function Kd(e,r,n){var a=e.stateNode;if(!a)throw Error(H(169));n?(e=ap(e,r,Mn),a.__reactInternalMemoizedMergedChildContext=e,Fe(Vt),Fe(zt),Ie(zt,e)):Fe(Vt),Ie(Vt,n)}var Rr=null,Il=!1,Ci=!1;function sp(e){Rr===null?Rr=[e]:Rr.push(e)}function cf(e){Il=!0,sp(e)}function gn(){if(!Ci&&Rr!==null){Ci=!0;var e=0,r=$e;try{var n=Rr;for($e=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Rr=null,Il=!1}catch(s){throw Rr!==null&&(Rr=Rr.slice(e+1)),P0(jc,gn),s}finally{$e=r,Ci=!1}}return null}var Yn=[],Kn=0,ul=null,pl=0,er=[],tr=0,Pn=null,Pr=1,Er="";function yn(e,r){Yn[Kn++]=pl,Yn[Kn++]=ul,ul=e,pl=r}function lp(e,r,n){er[tr++]=Pr,er[tr++]=Er,er[tr++]=Pn,Pn=e;var a=Pr;e=Er;var s=32-pr(a)-1;a&=~(1<<s),n+=1;var l=32-pr(r)+s;if(30<l){var i=s-s%5;l=(a&(1<<i)-1).toString(32),a>>=i,s-=i,Pr=1<<32-pr(r)+s|n<<s|a,Er=l+e}else Pr=1<<l|n<<s|a,Er=e}function Mc(e){e.return!==null&&(yn(e,1),lp(e,1,0))}function Pc(e){for(;e===ul;)ul=Yn[--Kn],Yn[Kn]=null,pl=Yn[--Kn],Yn[Kn]=null;for(;e===Pn;)Pn=er[--tr],er[tr]=null,Er=er[--tr],er[tr]=null,Pr=er[--tr],er[tr]=null}var Yt=null,Qt=null,qe=!1,dr=null;function ip(e,r){var n=rr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Xd(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Yt=e,Qt=an(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Yt=e,Qt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Pn!==null?{id:Pr,overflow:Er}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=rr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Yt=e,Qt=null,!0):!1;default:return!1}}function yo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(qe){var r=Qt;if(r){var n=r;if(!Xd(e,r)){if(yo(e))throw Error(H(418));r=an(n.nextSibling);var a=Yt;r&&Xd(e,r)?ip(a,n):(e.flags=e.flags&-4097|2,qe=!1,Yt=e)}}else{if(yo(e))throw Error(H(418));e.flags=e.flags&-4097|2,qe=!1,Yt=e}}}function Gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function Ls(e){if(e!==Yt)return!1;if(!qe)return Gd(e),qe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!fo(e.type,e.memoizedProps)),r&&(r=Qt)){if(yo(e))throw op(),Error(H(418));for(;r;)ip(e,r),r=an(r.nextSibling)}if(Gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){Qt=an(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}Qt=null}}else Qt=Yt?an(e.stateNode.nextSibling):null;return!0}function op(){for(var e=Qt;e;)e=an(e.nextSibling)}function ia(){Qt=Yt=null,qe=!1}function Ec(e){dr===null?dr=[e]:dr.push(e)}var df=Vr.ReactCurrentBatchConfig;function wa(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var a=n.stateNode}if(!a)throw Error(H(147,e));var s=a,l=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===l?r.ref:(r=function(i){var o=s.refs;i===null?delete o[l]:o[l]=i},r._stringRef=l,r)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function _s(e,r){throw e=Object.prototype.toString.call(r),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Jd(e){var r=e._init;return r(e._payload)}function cp(e){function r(v,g){if(e){var m=v.deletions;m===null?(v.deletions=[g],v.flags|=16):m.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)r(v,g),g=g.sibling;return null}function a(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function s(v,g){return v=cn(v,g),v.index=0,v.sibling=null,v}function l(v,g,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<g?(v.flags|=2,g):m):(v.flags|=2,g)):(v.flags|=1048576,g)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function o(v,g,m,x){return g===null||g.tag!==6?(g=Li(m,v.mode,x),g.return=v,g):(g=s(g,m),g.return=v,g)}function c(v,g,m,x){var N=m.type;return N===Hn?p(v,g,m.props.children,x,m.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Or&&Jd(N)===g.type)?(x=s(g,m.props),x.ref=wa(v,g,m),x.return=v,x):(x=Zs(m.type,m.key,m.props,null,v.mode,x),x.ref=wa(v,g,m),x.return=v,x)}function d(v,g,m,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=_i(m,v.mode,x),g.return=v,g):(g=s(g,m.children||[]),g.return=v,g)}function p(v,g,m,x,N){return g===null||g.tag!==7?(g=Rn(m,v.mode,x,N),g.return=v,g):(g=s(g,m),g.return=v,g)}function h(v,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Li(""+g,v.mode,m),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ks:return m=Zs(g.type,g.key,g.props,null,v.mode,m),m.ref=wa(v,null,g),m.return=v,m;case Fn:return g=_i(g,v.mode,m),g.return=v,g;case Or:var x=g._init;return h(v,x(g._payload),m)}if(za(g)||va(g))return g=Rn(g,v.mode,m,null),g.return=v,g;_s(v,g)}return null}function f(v,g,m,x){var N=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:o(v,g,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ks:return m.key===N?c(v,g,m,x):null;case Fn:return m.key===N?d(v,g,m,x):null;case Or:return N=m._init,f(v,g,N(m._payload),x)}if(za(m)||va(m))return N!==null?null:p(v,g,m,x,null);_s(v,m)}return null}function b(v,g,m,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(m)||null,o(g,v,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ks:return v=v.get(x.key===null?m:x.key)||null,c(g,v,x,N);case Fn:return v=v.get(x.key===null?m:x.key)||null,d(g,v,x,N);case Or:var C=x._init;return b(v,g,m,C(x._payload),N)}if(za(x)||va(x))return v=v.get(m)||null,p(g,v,x,N,null);_s(g,x)}return null}function j(v,g,m,x){for(var N=null,C=null,k=g,R=g=0,I=null;k!==null&&R<m.length;R++){k.index>R?(I=k,k=null):I=k.sibling;var _=f(v,k,m[R],x);if(_===null){k===null&&(k=I);break}e&&k&&_.alternate===null&&r(v,k),g=l(_,g,R),C===null?N=_:C.sibling=_,C=_,k=I}if(R===m.length)return n(v,k),qe&&yn(v,R),N;if(k===null){for(;R<m.length;R++)k=h(v,m[R],x),k!==null&&(g=l(k,g,R),C===null?N=k:C.sibling=k,C=k);return qe&&yn(v,R),N}for(k=a(v,k);R<m.length;R++)I=b(k,v,R,m[R],x),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?R:I.key),g=l(I,g,R),C===null?N=I:C.sibling=I,C=I);return e&&k.forEach(function(P){return r(v,P)}),qe&&yn(v,R),N}function y(v,g,m,x){var N=va(m);if(typeof N!="function")throw Error(H(150));if(m=N.call(m),m==null)throw Error(H(151));for(var C=N=null,k=g,R=g=0,I=null,_=m.next();k!==null&&!_.done;R++,_=m.next()){k.index>R?(I=k,k=null):I=k.sibling;var P=f(v,k,_.value,x);if(P===null){k===null&&(k=I);break}e&&k&&P.alternate===null&&r(v,k),g=l(P,g,R),C===null?N=P:C.sibling=P,C=P,k=I}if(_.done)return n(v,k),qe&&yn(v,R),N;if(k===null){for(;!_.done;R++,_=m.next())_=h(v,_.value,x),_!==null&&(g=l(_,g,R),C===null?N=_:C.sibling=_,C=_);return qe&&yn(v,R),N}for(k=a(v,k);!_.done;R++,_=m.next())_=b(k,v,R,_.value,x),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?R:_.key),g=l(_,g,R),C===null?N=_:C.sibling=_,C=_);return e&&k.forEach(function(T){return r(v,T)}),qe&&yn(v,R),N}function w(v,g,m,x){if(typeof m=="object"&&m!==null&&m.type===Hn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ks:e:{for(var N=m.key,C=g;C!==null;){if(C.key===N){if(N=m.type,N===Hn){if(C.tag===7){n(v,C.sibling),g=s(C,m.props.children),g.return=v,v=g;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Or&&Jd(N)===C.type){n(v,C.sibling),g=s(C,m.props),g.ref=wa(v,C,m),g.return=v,v=g;break e}n(v,C);break}else r(v,C);C=C.sibling}m.type===Hn?(g=Rn(m.props.children,v.mode,x,m.key),g.return=v,v=g):(x=Zs(m.type,m.key,m.props,null,v.mode,x),x.ref=wa(v,g,m),x.return=v,v=x)}return i(v);case Fn:e:{for(C=m.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(v,g.sibling),g=s(g,m.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else r(v,g);g=g.sibling}g=_i(m,v.mode,x),g.return=v,v=g}return i(v);case Or:return C=m._init,w(v,g,C(m._payload),x)}if(za(m))return j(v,g,m,x);if(va(m))return y(v,g,m,x);_s(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(v,g.sibling),g=s(g,m),g.return=v,v=g):(n(v,g),g=Li(m,v.mode,x),g.return=v,v=g),i(v)):n(v,g)}return w}var oa=cp(!0),dp=cp(!1),ml=fn(null),hl=null,Xn=null,$c=null;function Tc(){$c=Xn=hl=null}function Lc(e){var r=ml.current;Fe(ml),e._currentValue=r}function bo(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function na(e,r){hl=e,$c=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Dt=!0),e.firstContext=null)}function ar(e){var r=e._currentValue;if($c!==e)if(e={context:e,memoizedValue:r,next:null},Xn===null){if(hl===null)throw Error(H(308));Xn=e,hl.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return r}var kn=null;function _c(e){kn===null?kn=[e]:kn.push(e)}function up(e,r,n,a){var s=r.interleaved;return s===null?(n.next=n,_c(r)):(n.next=s.next,s.next=n),r.interleaved=n,Ar(e,a)}function Ar(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function sn(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Se&2){var s=a.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),a.pending=r,Ar(e,n)}return s=a.interleaved,s===null?(r.next=r,_c(a)):(r.next=s.next,s.next=r),a.interleaved=r,Ar(e,n)}function Qs(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,bc(e,n)}}function Zd(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?s=l=r:l=l.next=r}else s=l=r;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function fl(e,r,n,a){var s=e.updateQueue;Ur=!1;var l=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?l=d:i.next=d,i=c;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==i&&(o===null?p.firstBaseUpdate=d:o.next=d,p.lastBaseUpdate=c))}if(l!==null){var h=s.baseState;i=0,p=d=c=null,o=l;do{var f=o.lane,b=o.eventTime;if((a&f)===f){p!==null&&(p=p.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=e,y=o;switch(f=r,b=n,y.tag){case 1:if(j=y.payload,typeof j=="function"){h=j.call(b,h,f);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,f=typeof j=="function"?j.call(b,h,f):j,f==null)break e;h=Je({},h,f);break e;case 2:Ur=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[o]:f.push(o))}else b={eventTime:b,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(d=p=b,c=h):p=p.next=b,i|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(p===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=p,r=s.shared.interleaved,r!==null){s=r;do i|=s.lane,s=s.next;while(s!==r)}else l===null&&(s.shared.lanes=0);$n|=i,e.lanes=i,e.memoizedState=h}}function eu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],s=a.callback;if(s!==null){if(a.callback=null,a=n,typeof s!="function")throw Error(H(191,s));s.call(a)}}}var hs={},Nr=fn(hs),ts=fn(hs),rs=fn(hs);function Sn(e){if(e===hs)throw Error(H(174));return e}function Ic(e,r){switch(Ie(rs,r),Ie(ts,e),Ie(Nr,hs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:eo(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=eo(r,e)}Fe(Nr),Ie(Nr,r)}function ca(){Fe(Nr),Fe(ts),Fe(rs)}function mp(e){Sn(rs.current);var r=Sn(Nr.current),n=eo(r,e.type);r!==n&&(Ie(ts,e),Ie(Nr,n))}function Dc(e){ts.current===e&&(Fe(Nr),Fe(ts))}var Xe=fn(0);function gl(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ri=[];function Vc(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var Ys=Vr.ReactCurrentDispatcher,Mi=Vr.ReactCurrentBatchConfig,En=0,Ge=null,dt=null,mt=null,vl=!1,Ia=!1,ns=0,uf=0;function bt(){throw Error(H(321))}function Bc(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!hr(e[n],r[n]))return!1;return!0}function Fc(e,r,n,a,s,l){if(En=l,Ge=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ys.current=e===null||e.memoizedState===null?ff:gf,e=n(a,s),Ia){l=0;do{if(Ia=!1,ns=0,25<=l)throw Error(H(301));l+=1,mt=dt=null,r.updateQueue=null,Ys.current=vf,e=n(a,s)}while(Ia)}if(Ys.current=xl,r=dt!==null&&dt.next!==null,En=0,mt=dt=Ge=null,vl=!1,r)throw Error(H(300));return e}function Hc(){var e=ns!==0;return ns=0,e}function xr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ge.memoizedState=mt=e:mt=mt.next=e,mt}function sr(){if(dt===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var r=mt===null?Ge.memoizedState:mt.next;if(r!==null)mt=r,dt=e;else{if(e===null)throw Error(H(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},mt===null?Ge.memoizedState=mt=e:mt=mt.next=e}return mt}function as(e,r){return typeof r=="function"?r(e):r}function Pi(e){var r=sr(),n=r.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var a=dt,s=a.baseQueue,l=n.pending;if(l!==null){if(s!==null){var i=s.next;s.next=l.next,l.next=i}a.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,a=a.baseState;var o=i=null,c=null,d=l;do{var p=d.lane;if((En&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,i=a):c=c.next=h,Ge.lanes|=p,$n|=p}d=d.next}while(d!==null&&d!==l);c===null?i=a:c.next=o,hr(a,r.memoizedState)||(Dt=!0),r.memoizedState=a,r.baseState=i,r.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){s=e;do l=s.lane,Ge.lanes|=l,$n|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Ei(e){var r=sr(),n=r.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,l=r.memoizedState;if(s!==null){n.pending=null;var i=s=s.next;do l=e(l,i.action),i=i.next;while(i!==s);hr(l,r.memoizedState)||(Dt=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),n.lastRenderedState=l}return[l,a]}function hp(){}function fp(e,r){var n=Ge,a=sr(),s=r(),l=!hr(a.memoizedState,s);if(l&&(a.memoizedState=s,Dt=!0),a=a.queue,Wc(xp.bind(null,n,a,e),[e]),a.getSnapshot!==r||l||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,ss(9,vp.bind(null,n,a,s,r),void 0,null),ht===null)throw Error(H(349));En&30||gp(n,r,s)}return s}function gp(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Ge.updateQueue,r===null?(r={lastEffect:null,stores:null},Ge.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function vp(e,r,n,a){r.value=n,r.getSnapshot=a,yp(r)&&jp(e)}function xp(e,r,n){return n(function(){yp(r)&&jp(e)})}function yp(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!hr(e,n)}catch{return!0}}function jp(e){var r=Ar(e,1);r!==null&&mr(r,e,1,-1)}function tu(e){var r=xr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},r.queue=e,e=e.dispatch=hf.bind(null,Ge,e),[r.memoizedState,e]}function ss(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=Ge.updateQueue,r===null?(r={lastEffect:null,stores:null},Ge.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function bp(){return sr().memoizedState}function Ks(e,r,n,a){var s=xr();Ge.flags|=e,s.memoizedState=ss(1|r,n,void 0,a===void 0?null:a)}function Dl(e,r,n,a){var s=sr();a=a===void 0?null:a;var l=void 0;if(dt!==null){var i=dt.memoizedState;if(l=i.destroy,a!==null&&Bc(a,i.deps)){s.memoizedState=ss(r,n,l,a);return}}Ge.flags|=e,s.memoizedState=ss(1|r,n,l,a)}function ru(e,r){return Ks(8390656,8,e,r)}function Wc(e,r){return Dl(2048,8,e,r)}function wp(e,r){return Dl(4,2,e,r)}function Np(e,r){return Dl(4,4,e,r)}function kp(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Sp(e,r,n){return n=n!=null?n.concat([e]):null,Dl(4,4,kp.bind(null,r,e),n)}function Oc(){}function zp(e,r){var n=sr();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Bc(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function Cp(e,r){var n=sr();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Bc(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function Rp(e,r,n){return En&21?(hr(n,r)||(n=T0(),Ge.lanes|=n,$n|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=n)}function pf(e,r){var n=$e;$e=n!==0&&4>n?n:4,e(!0);var a=Mi.transition;Mi.transition={};try{e(!1),r()}finally{$e=n,Mi.transition=a}}function Mp(){return sr().memoizedState}function mf(e,r,n){var a=on(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Pp(e))Ep(r,n);else if(n=up(e,r,n,a),n!==null){var s=Mt();mr(n,e,a,s),$p(n,r,a)}}function hf(e,r,n){var a=on(e),s={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pp(e))Ep(r,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var i=r.lastRenderedState,o=l(i,n);if(s.hasEagerState=!0,s.eagerState=o,hr(o,i)){var c=r.interleaved;c===null?(s.next=s,_c(r)):(s.next=c.next,c.next=s),r.interleaved=s;return}}catch{}finally{}n=up(e,r,s,a),n!==null&&(s=Mt(),mr(n,e,a,s),$p(n,r,a))}}function Pp(e){var r=e.alternate;return e===Ge||r!==null&&r===Ge}function Ep(e,r){Ia=vl=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function $p(e,r,n){if(n&4194240){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,bc(e,n)}}var xl={readContext:ar,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},ff={readContext:ar,useCallback:function(e,r){return xr().memoizedState=[e,r===void 0?null:r],e},useContext:ar,useEffect:ru,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Ks(4194308,4,kp.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Ks(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ks(4,2,e,r)},useMemo:function(e,r){var n=xr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=xr();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=mf.bind(null,Ge,e),[a.memoizedState,e]},useRef:function(e){var r=xr();return e={current:e},r.memoizedState=e},useState:tu,useDebugValue:Oc,useDeferredValue:function(e){return xr().memoizedState=e},useTransition:function(){var e=tu(!1),r=e[0];return e=pf.bind(null,e[1]),xr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=Ge,s=xr();if(qe){if(n===void 0)throw Error(H(407));n=n()}else{if(n=r(),ht===null)throw Error(H(349));En&30||gp(a,r,n)}s.memoizedState=n;var l={value:n,getSnapshot:r};return s.queue=l,ru(xp.bind(null,a,l,e),[e]),a.flags|=2048,ss(9,vp.bind(null,a,l,n,r),void 0,null),n},useId:function(){var e=xr(),r=ht.identifierPrefix;if(qe){var n=Er,a=Pr;n=(a&~(1<<32-pr(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=ns++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=uf++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},gf={readContext:ar,useCallback:zp,useContext:ar,useEffect:Wc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Np,useMemo:Cp,useReducer:Pi,useRef:bp,useState:function(){return Pi(as)},useDebugValue:Oc,useDeferredValue:function(e){var r=sr();return Rp(r,dt.memoizedState,e)},useTransition:function(){var e=Pi(as)[0],r=sr().memoizedState;return[e,r]},useMutableSource:hp,useSyncExternalStore:fp,useId:Mp,unstable_isNewReconciler:!1},vf={readContext:ar,useCallback:zp,useContext:ar,useEffect:Wc,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Np,useMemo:Cp,useReducer:Ei,useRef:bp,useState:function(){return Ei(as)},useDebugValue:Oc,useDeferredValue:function(e){var r=sr();return dt===null?r.memoizedState=e:Rp(r,dt.memoizedState,e)},useTransition:function(){var e=Ei(as)[0],r=sr().memoizedState;return[e,r]},useMutableSource:hp,useSyncExternalStore:fp,useId:Mp,unstable_isNewReconciler:!1};function or(e,r){if(e&&e.defaultProps){r=Je({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function wo(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:Je({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=Mt(),s=on(e),l=$r(a,s);l.payload=r,n!=null&&(l.callback=n),r=sn(e,l,s),r!==null&&(mr(r,e,s,a),Qs(r,e,s))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=Mt(),s=on(e),l=$r(a,s);l.tag=1,l.payload=r,n!=null&&(l.callback=n),r=sn(e,l,s),r!==null&&(mr(r,e,s,a),Qs(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Mt(),a=on(e),s=$r(n,a);s.tag=2,r!=null&&(s.callback=r),r=sn(e,s,a),r!==null&&(mr(r,e,a,n),Qs(r,e,a))}};function nu(e,r,n,a,s,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,i):r.prototype&&r.prototype.isPureReactComponent?!Ga(n,a)||!Ga(s,l):!0}function Tp(e,r,n){var a=!1,s=mn,l=r.contextType;return typeof l=="object"&&l!==null?l=ar(l):(s=Bt(r)?Mn:zt.current,a=r.contextTypes,l=(a=a!=null)?la(e,s):mn),r=new r(n,l),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vl,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),r}function au(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&Vl.enqueueReplaceState(r,r.state,null)}function No(e,r,n,a){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ac(e);var l=r.contextType;typeof l=="object"&&l!==null?s.context=ar(l):(l=Bt(r)?Mn:zt.current,s.context=la(e,l)),s.state=e.memoizedState,l=r.getDerivedStateFromProps,typeof l=="function"&&(wo(e,r,l,n),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Vl.enqueueReplaceState(s,s.state,null),fl(e,n,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function da(e,r){try{var n="",a=r;do n+=Oh(a),a=a.return;while(a);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:r,stack:s,digest:null}}function $i(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function ko(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function Lp(e,r,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){jl||(jl=!0,Lo=a),ko(e,r)},n}function _p(e,r,n){n=$r(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=r.value;n.payload=function(){return a(s)},n.callback=function(){ko(e,r)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ko(e,r),typeof a!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var i=r.stack;this.componentDidCatch(r.value,{componentStack:i!==null?i:""})}),n}function su(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new xf;var s=new Set;a.set(r,s)}else s=a.get(r),s===void 0&&(s=new Set,a.set(r,s));s.has(n)||(s.add(n),e=$f.bind(null,e,r,n),r.then(e,e))}function lu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function iu(e,r,n,a,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=$r(-1,1),r.tag=2,sn(n,r,1))),n.lanes|=1),e)}var yf=Vr.ReactCurrentOwner,Dt=!1;function Rt(e,r,n,a){r.child=e===null?dp(r,null,n,a):oa(r,e.child,n,a)}function ou(e,r,n,a,s){n=n.render;var l=r.ref;return na(r,s),a=Fc(e,r,n,a,l,s),n=Hc(),e!==null&&!Dt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Ir(e,r,s)):(qe&&n&&Mc(r),r.flags|=1,Rt(e,r,a,s),r.child)}function cu(e,r,n,a,s){if(e===null){var l=n.type;return typeof l=="function"&&!Jc(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=l,Ap(e,r,l,a,s)):(e=Zs(n.type,null,a,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(l=e.child,!(e.lanes&s)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(i,a)&&e.ref===r.ref)return Ir(e,r,s)}return r.flags|=1,e=cn(l,a),e.ref=r.ref,e.return=r,r.child=e}function Ap(e,r,n,a,s){if(e!==null){var l=e.memoizedProps;if(Ga(l,a)&&e.ref===r.ref)if(Dt=!1,r.pendingProps=a=l,(e.lanes&s)!==0)e.flags&131072&&(Dt=!0);else return r.lanes=e.lanes,Ir(e,r,s)}return So(e,r,n,a,s)}function Ip(e,r,n){var a=r.pendingProps,s=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Jn,qt),qt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ie(Jn,qt),qt|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,Ie(Jn,qt),qt|=a}else l!==null?(a=l.baseLanes|n,r.memoizedState=null):a=n,Ie(Jn,qt),qt|=a;return Rt(e,r,s,n),r.child}function Dp(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function So(e,r,n,a,s){var l=Bt(n)?Mn:zt.current;return l=la(r,l),na(r,s),n=Fc(e,r,n,a,l,s),a=Hc(),e!==null&&!Dt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Ir(e,r,s)):(qe&&a&&Mc(r),r.flags|=1,Rt(e,r,n,s),r.child)}function du(e,r,n,a,s){if(Bt(n)){var l=!0;dl(r)}else l=!1;if(na(r,s),r.stateNode===null)Xs(e,r),Tp(r,n,a),No(r,n,a,s),a=!0;else if(e===null){var i=r.stateNode,o=r.memoizedProps;i.props=o;var c=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=ar(d):(d=Bt(n)?Mn:zt.current,d=la(r,d));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==a||c!==d)&&au(r,i,a,d),Ur=!1;var f=r.memoizedState;i.state=f,fl(r,a,i,s),c=r.memoizedState,o!==a||f!==c||Vt.current||Ur?(typeof p=="function"&&(wo(r,n,p,a),c=r.memoizedState),(o=Ur||nu(r,n,o,a,f,c,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(r.flags|=4194308)):(typeof i.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=c),i.props=a,i.state=c,i.context=d,a=o):(typeof i.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{i=r.stateNode,pp(e,r),o=r.memoizedProps,d=r.type===r.elementType?o:or(r.type,o),i.props=d,h=r.pendingProps,f=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=ar(c):(c=Bt(n)?Mn:zt.current,c=la(r,c));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==h||f!==c)&&au(r,i,a,c),Ur=!1,f=r.memoizedState,i.state=f,fl(r,a,i,s);var j=r.memoizedState;o!==h||f!==j||Vt.current||Ur?(typeof b=="function"&&(wo(r,n,b,a),j=r.memoizedState),(d=Ur||nu(r,n,d,a,f,j,c)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,j,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,j,c)),typeof i.componentDidUpdate=="function"&&(r.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=j),i.props=a,i.state=j,i.context=c,a=d):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),a=!1)}return zo(e,r,n,a,l,s)}function zo(e,r,n,a,s,l){Dp(e,r);var i=(r.flags&128)!==0;if(!a&&!i)return s&&Kd(r,n,!1),Ir(e,r,l);a=r.stateNode,yf.current=r;var o=i&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&i?(r.child=oa(r,e.child,null,l),r.child=oa(r,null,o,l)):Rt(e,r,o,l),r.memoizedState=a.state,s&&Kd(r,n,!0),r.child}function Vp(e){var r=e.stateNode;r.pendingContext?Yd(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Yd(e,r.context,!1),Ic(e,r.containerInfo)}function uu(e,r,n,a,s){return ia(),Ec(s),r.flags|=256,Rt(e,r,n,a),r.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bp(e,r,n){var a=r.pendingProps,s=Xe.current,l=!1,i=(r.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(l=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ie(Xe,s&1),e===null)return jo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(i=a.children,e=a.fallback,l?(a=r.mode,l=r.child,i={mode:"hidden",children:i},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Hl(i,a,0,null),e=Rn(e,a,n,null),l.return=r,e.return=r,l.sibling=e,r.child=l,r.child.memoizedState=Ro(n),r.memoizedState=Co,e):Uc(r,i));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return jf(e,r,i,a,o,s,n);if(l){l=a.fallback,i=r.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:a.children};return!(i&1)&&r.child!==s?(a=r.child,a.childLanes=0,a.pendingProps=c,r.deletions=null):(a=cn(s,c),a.subtreeFlags=s.subtreeFlags&14680064),o!==null?l=cn(o,l):(l=Rn(l,i,n,null),l.flags|=2),l.return=r,a.return=r,a.sibling=l,r.child=a,a=l,l=r.child,i=e.child.memoizedState,i=i===null?Ro(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,r.memoizedState=Co,a}return l=e.child,e=l.sibling,a=cn(l,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function Uc(e,r){return r=Hl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function As(e,r,n,a){return a!==null&&Ec(a),oa(r,e.child,null,n),e=Uc(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function jf(e,r,n,a,s,l,i){if(n)return r.flags&256?(r.flags&=-257,a=$i(Error(H(422))),As(e,r,i,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(l=a.fallback,s=r.mode,a=Hl({mode:"visible",children:a.children},s,0,null),l=Rn(l,s,i,null),l.flags|=2,a.return=r,l.return=r,a.sibling=l,r.child=a,r.mode&1&&oa(r,e.child,null,i),r.child.memoizedState=Ro(i),r.memoizedState=Co,l);if(!(r.mode&1))return As(e,r,i,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var o=a.dgst;return a=o,l=Error(H(419)),a=$i(l,a,void 0),As(e,r,i,a)}if(o=(i&e.childLanes)!==0,Dt||o){if(a=ht,a!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(a.suspendedLanes|i)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Ar(e,s),mr(a,e,s,-1))}return Gc(),a=$i(Error(H(421))),As(e,r,i,a)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=Tf.bind(null,e),s._reactRetry=r,null):(e=l.treeContext,Qt=an(s.nextSibling),Yt=r,qe=!0,dr=null,e!==null&&(er[tr++]=Pr,er[tr++]=Er,er[tr++]=Pn,Pr=e.id,Er=e.overflow,Pn=r),r=Uc(r,a.children),r.flags|=4096,r)}function pu(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),bo(e.return,r,n)}function Ti(e,r,n,a,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s}:(l.isBackwards=r,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=s)}function Fp(e,r,n){var a=r.pendingProps,s=a.revealOrder,l=a.tail;if(Rt(e,r,a.children,n),a=Xe.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,r);else if(e.tag===19)pu(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ie(Xe,a),!(r.mode&1))r.memoizedState=null;else switch(s){case"forwards":for(n=r.child,s=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=r.child,r.child=null):(s=n.sibling,n.sibling=null),Ti(r,!1,s,n,l);break;case"backwards":for(n=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&gl(e)===null){r.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ti(r,!0,n,null,l);break;case"together":Ti(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xs(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ir(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),$n|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(H(153));if(r.child!==null){for(e=r.child,n=cn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function bf(e,r,n){switch(r.tag){case 3:Vp(r),ia();break;case 5:mp(r);break;case 1:Bt(r.type)&&dl(r);break;case 4:Ic(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,s=r.memoizedProps.value;Ie(ml,a._currentValue),a._currentValue=s;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Ie(Xe,Xe.current&1),r.flags|=128,null):n&r.child.childLanes?Bp(e,r,n):(Ie(Xe,Xe.current&1),e=Ir(e,r,n),e!==null?e.sibling:null);Ie(Xe,Xe.current&1);break;case 19:if(a=(n&r.childLanes)!==0,e.flags&128){if(a)return Fp(e,r,n);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(Xe,Xe.current),a)break;return null;case 22:case 23:return r.lanes=0,Ip(e,r,n)}return Ir(e,r,n)}var Hp,Mo,Wp,Op;Hp=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mo=function(){};Wp=function(e,r,n,a){var s=e.memoizedProps;if(s!==a){e=r.stateNode,Sn(Nr.current);var l=null;switch(n){case"input":s=Xi(e,s),a=Xi(e,a),l=[];break;case"select":s=Je({},s,{value:void 0}),a=Je({},a,{value:void 0}),l=[];break;case"textarea":s=Zi(e,s),a=Zi(e,a),l=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ol)}to(n,a);var i;n=null;for(d in s)if(!a.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var o=s[d];for(i in o)o.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Oa.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in a){var c=a[d];if(o=s!=null?s[d]:void 0,a.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(i in o)!o.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&o[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Be("scroll",e),l||o===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(r.updateQueue=d)&&(r.flags|=4)}};Op=function(e,r,n,a){n!==a&&(r.flags|=4)};function Na(e,r){if(!qe)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function wt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function wf(e,r,n){var a=r.pendingProps;switch(Pc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(r),null;case 1:return Bt(r.type)&&cl(),wt(r),null;case 3:return a=r.stateNode,ca(),Fe(Vt),Fe(zt),Vc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ls(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,dr!==null&&(Io(dr),dr=null))),Mo(e,r),wt(r),null;case 5:Dc(r);var s=Sn(rs.current);if(n=r.type,e!==null&&r.stateNode!=null)Wp(e,r,n,a,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(H(166));return wt(r),null}if(e=Sn(Nr.current),Ls(r)){a=r.stateNode,n=r.type;var l=r.memoizedProps;switch(a[yr]=r,a[es]=l,e=(r.mode&1)!==0,n){case"dialog":Be("cancel",a),Be("close",a);break;case"iframe":case"object":case"embed":Be("load",a);break;case"video":case"audio":for(s=0;s<Ra.length;s++)Be(Ra[s],a);break;case"source":Be("error",a);break;case"img":case"image":case"link":Be("error",a),Be("load",a);break;case"details":Be("toggle",a);break;case"input":bd(a,l),Be("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},Be("invalid",a);break;case"textarea":Nd(a,l),Be("invalid",a)}to(n,l),s=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?a.textContent!==o&&(l.suppressHydrationWarning!==!0&&Ts(a.textContent,o,e),s=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Ts(a.textContent,o,e),s=["children",""+o]):Oa.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&Be("scroll",a)}switch(n){case"input":Ss(a),wd(a,l,!0);break;case"textarea":Ss(a),kd(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=ol)}a=s,r.updateQueue=a,a!==null&&(r.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=x0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(n,{is:a.is}):(e=i.createElement(n),n==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,n),e[yr]=r,e[es]=a,Hp(e,r,!1,!1),r.stateNode=e;e:{switch(i=ro(n,a),n){case"dialog":Be("cancel",e),Be("close",e),s=a;break;case"iframe":case"object":case"embed":Be("load",e),s=a;break;case"video":case"audio":for(s=0;s<Ra.length;s++)Be(Ra[s],e);s=a;break;case"source":Be("error",e),s=a;break;case"img":case"image":case"link":Be("error",e),Be("load",e),s=a;break;case"details":Be("toggle",e),s=a;break;case"input":bd(e,a),s=Xi(e,a),Be("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=Je({},a,{value:void 0}),Be("invalid",e);break;case"textarea":Nd(e,a),s=Zi(e,a),Be("invalid",e);break;default:s=a}to(n,s),o=s;for(l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="style"?b0(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&y0(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ua(e,c):typeof c=="number"&&Ua(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Oa.hasOwnProperty(l)?c!=null&&l==="onScroll"&&Be("scroll",e):c!=null&&fc(e,l,c,i))}switch(n){case"input":Ss(e),wd(e,a,!1);break;case"textarea":Ss(e),kd(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pn(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?Zn(e,!!a.multiple,l,!1):a.defaultValue!=null&&Zn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return wt(r),null;case 6:if(e&&r.stateNode!=null)Op(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(H(166));if(n=Sn(rs.current),Sn(Nr.current),Ls(r)){if(a=r.stateNode,n=r.memoizedProps,a[yr]=r,(l=a.nodeValue!==n)&&(e=Yt,e!==null))switch(e.tag){case 3:Ts(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ts(a.nodeValue,n,(e.mode&1)!==0)}l&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[yr]=r,r.stateNode=a}return wt(r),null;case 13:if(Fe(Xe),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&Qt!==null&&r.mode&1&&!(r.flags&128))op(),ia(),r.flags|=98560,l=!1;else if(l=Ls(r),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(H(318));if(l=r.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(H(317));l[yr]=r}else ia(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;wt(r),l=!1}else dr!==null&&(Io(dr),dr=null),l=!0;if(!l)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||Xe.current&1?ut===0&&(ut=3):Gc())),r.updateQueue!==null&&(r.flags|=4),wt(r),null);case 4:return ca(),Mo(e,r),e===null&&Ja(r.stateNode.containerInfo),wt(r),null;case 10:return Lc(r.type._context),wt(r),null;case 17:return Bt(r.type)&&cl(),wt(r),null;case 19:if(Fe(Xe),l=r.memoizedState,l===null)return wt(r),null;if(a=(r.flags&128)!==0,i=l.rendering,i===null)if(a)Na(l,!1);else{if(ut!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(i=gl(e),i!==null){for(r.flags|=128,Na(l,!1),a=i.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)l=n,e=a,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Xe,Xe.current&1|2),r.child}e=e.sibling}l.tail!==null&&nt()>ua&&(r.flags|=128,a=!0,Na(l,!1),r.lanes=4194304)}else{if(!a)if(e=gl(i),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Na(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!qe)return wt(r),null}else 2*nt()-l.renderingStartTime>ua&&n!==1073741824&&(r.flags|=128,a=!0,Na(l,!1),r.lanes=4194304);l.isBackwards?(i.sibling=r.child,r.child=i):(n=l.last,n!==null?n.sibling=i:r.child=i,l.last=i)}return l.tail!==null?(r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=nt(),r.sibling=null,n=Xe.current,Ie(Xe,a?n&1|2:n&1),r):(wt(r),null);case 22:case 23:return Xc(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?qt&1073741824&&(wt(r),r.subtreeFlags&6&&(r.flags|=8192)):wt(r),null;case 24:return null;case 25:return null}throw Error(H(156,r.tag))}function Nf(e,r){switch(Pc(r),r.tag){case 1:return Bt(r.type)&&cl(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ca(),Fe(Vt),Fe(zt),Vc(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Dc(r),null;case 13:if(Fe(Xe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(H(340));ia()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Fe(Xe),null;case 4:return ca(),null;case 10:return Lc(r.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var Is=!1,St=!1,kf=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Gn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){tt(e,r,a)}else n.current=null}function Po(e,r,n){try{n()}catch(a){tt(e,r,a)}}var mu=!1;function Sf(e,r){if(mo=sl,e=K0(),Rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,o=-1,c=-1,d=0,p=0,h=e,f=null;t:for(;;){for(var b;h!==n||s!==0&&h.nodeType!==3||(o=i+s),h!==l||a!==0&&h.nodeType!==3||(c=i+a),h.nodeType===3&&(i+=h.nodeValue.length),(b=h.firstChild)!==null;)f=h,h=b;for(;;){if(h===e)break t;if(f===n&&++d===s&&(o=i),f===l&&++p===a&&(c=i),(b=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=b}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ho={focusedElem:e,selectionRange:n},sl=!1,Z=r;Z!==null;)if(r=Z,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Z=e;else for(;Z!==null;){r=Z;try{var j=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var y=j.memoizedProps,w=j.memoizedState,v=r.stateNode,g=v.getSnapshotBeforeUpdate(r.elementType===r.type?y:or(r.type,y),w);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){tt(r,r.return,x)}if(e=r.sibling,e!==null){e.return=r.return,Z=e;break}Z=r.return}return j=mu,mu=!1,j}function Da(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&Po(r,n,l)}s=s.next}while(s!==a)}}function Bl(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function Eo(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Up(e){var r=e.alternate;r!==null&&(e.alternate=null,Up(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[yr],delete r[es],delete r[vo],delete r[lf],delete r[of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qp(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=ol));else if(a!==4&&(e=e.child,e!==null))for($o(e,r,n),e=e.sibling;e!==null;)$o(e,r,n),e=e.sibling}function To(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(To(e,r,n),e=e.sibling;e!==null;)To(e,r,n),e=e.sibling}var vt=null,cr=!1;function Wr(e,r,n){for(n=n.child;n!==null;)Qp(e,r,n),n=n.sibling}function Qp(e,r,n){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:St||Gn(n,r);case 6:var a=vt,s=cr;vt=null,Wr(e,r,n),vt=a,cr=s,vt!==null&&(cr?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(cr?(e=vt,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),Ka(e)):zi(vt,n.stateNode));break;case 4:a=vt,s=cr,vt=n.stateNode.containerInfo,cr=!0,Wr(e,r,n),vt=a,cr=s;break;case 0:case 11:case 14:case 15:if(!St&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var l=s,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Po(n,r,i),s=s.next}while(s!==a)}Wr(e,r,n);break;case 1:if(!St&&(Gn(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(o){tt(n,r,o)}Wr(e,r,n);break;case 21:Wr(e,r,n);break;case 22:n.mode&1?(St=(a=St)||n.memoizedState!==null,Wr(e,r,n),St=a):Wr(e,r,n);break;default:Wr(e,r,n)}}function fu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kf),r.forEach(function(a){var s=Lf.bind(null,e,a);n.has(a)||(n.add(a),a.then(s,s))})}}function ir(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];try{var l=e,i=r,o=i;e:for(;o!==null;){switch(o.tag){case 5:vt=o.stateNode,cr=!1;break e;case 3:vt=o.stateNode.containerInfo,cr=!0;break e;case 4:vt=o.stateNode.containerInfo,cr=!0;break e}o=o.return}if(vt===null)throw Error(H(160));Qp(l,i,s),vt=null,cr=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){tt(s,r,d)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Yp(r,e),r=r.sibling}function Yp(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ir(r,e),gr(e),a&4){try{Da(3,e,e.return),Bl(3,e)}catch(y){tt(e,e.return,y)}try{Da(5,e,e.return)}catch(y){tt(e,e.return,y)}}break;case 1:ir(r,e),gr(e),a&512&&n!==null&&Gn(n,n.return);break;case 5:if(ir(r,e),gr(e),a&512&&n!==null&&Gn(n,n.return),e.flags&32){var s=e.stateNode;try{Ua(s,"")}catch(y){tt(e,e.return,y)}}if(a&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&g0(s,l),ro(o,i);var d=ro(o,l);for(i=0;i<c.length;i+=2){var p=c[i],h=c[i+1];p==="style"?b0(s,h):p==="dangerouslySetInnerHTML"?y0(s,h):p==="children"?Ua(s,h):fc(s,p,h,d)}switch(o){case"input":Gi(s,l);break;case"textarea":v0(s,l);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?Zn(s,!!l.multiple,b,!1):f!==!!l.multiple&&(l.defaultValue!=null?Zn(s,!!l.multiple,l.defaultValue,!0):Zn(s,!!l.multiple,l.multiple?[]:"",!1))}s[es]=l}catch(y){tt(e,e.return,y)}}break;case 6:if(ir(r,e),gr(e),a&4){if(e.stateNode===null)throw Error(H(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(y){tt(e,e.return,y)}}break;case 3:if(ir(r,e),gr(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(r.containerInfo)}catch(y){tt(e,e.return,y)}break;case 4:ir(r,e),gr(e);break;case 13:ir(r,e),gr(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Yc=nt())),a&4&&fu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(St=(d=St)||p,ir(r,e),St=d):ir(r,e),gr(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(Z=e,p=e.child;p!==null;){for(h=Z=p;Z!==null;){switch(f=Z,b=f.child,f.tag){case 0:case 11:case 14:case 15:Da(4,f,f.return);break;case 1:Gn(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){a=f,n=f.return;try{r=a,j.props=r.memoizedProps,j.state=r.memoizedState,j.componentWillUnmount()}catch(y){tt(a,n,y)}}break;case 5:Gn(f,f.return);break;case 22:if(f.memoizedState!==null){vu(h);continue}}b!==null?(b.return=f,Z=b):vu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{s=h.stateNode,d?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=j0("display",i))}catch(y){tt(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){tt(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ir(r,e),gr(e),a&4&&fu(e);break;case 21:break;default:ir(r,e),gr(e)}}function gr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(qp(n)){var a=n;break e}n=n.return}throw Error(H(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(Ua(s,""),a.flags&=-33);var l=hu(e);To(e,l,s);break;case 3:case 4:var i=a.stateNode.containerInfo,o=hu(e);$o(e,o,i);break;default:throw Error(H(161))}}catch(c){tt(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function zf(e,r,n){Z=e,Kp(e)}function Kp(e,r,n){for(var a=(e.mode&1)!==0;Z!==null;){var s=Z,l=s.child;if(s.tag===22&&a){var i=s.memoizedState!==null||Is;if(!i){var o=s.alternate,c=o!==null&&o.memoizedState!==null||St;o=Is;var d=St;if(Is=i,(St=c)&&!d)for(Z=s;Z!==null;)i=Z,c=i.child,i.tag===22&&i.memoizedState!==null?xu(s):c!==null?(c.return=i,Z=c):xu(s);for(;l!==null;)Z=l,Kp(l),l=l.sibling;Z=s,Is=o,St=d}gu(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,Z=l):gu(e)}}function gu(e){for(;Z!==null;){var r=Z;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:St||Bl(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!St)if(n===null)a.componentDidMount();else{var s=r.elementType===r.type?n.memoizedProps:or(r.type,n.memoizedProps);a.componentDidUpdate(s,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=r.updateQueue;l!==null&&eu(r,l,a);break;case 3:var i=r.updateQueue;if(i!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}eu(r,i,n)}break;case 5:var o=r.stateNode;if(n===null&&r.flags&4){n=o;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var d=r.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}St||r.flags&512&&Eo(r)}catch(f){tt(r,r.return,f)}}if(r===e){Z=null;break}if(n=r.sibling,n!==null){n.return=r.return,Z=n;break}Z=r.return}}function vu(e){for(;Z!==null;){var r=Z;if(r===e){Z=null;break}var n=r.sibling;if(n!==null){n.return=r.return,Z=n;break}Z=r.return}}function xu(e){for(;Z!==null;){var r=Z;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Bl(4,r)}catch(c){tt(r,n,c)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var s=r.return;try{a.componentDidMount()}catch(c){tt(r,s,c)}}var l=r.return;try{Eo(r)}catch(c){tt(r,l,c)}break;case 5:var i=r.return;try{Eo(r)}catch(c){tt(r,i,c)}}}catch(c){tt(r,r.return,c)}if(r===e){Z=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Z=o;break}Z=r.return}}var Cf=Math.ceil,yl=Vr.ReactCurrentDispatcher,qc=Vr.ReactCurrentOwner,nr=Vr.ReactCurrentBatchConfig,Se=0,ht=null,lt=null,xt=0,qt=0,Jn=fn(0),ut=0,ls=null,$n=0,Fl=0,Qc=0,Va=null,It=null,Yc=0,ua=1/0,Cr=null,jl=!1,Lo=null,ln=null,Ds=!1,Xr=null,bl=0,Ba=0,_o=null,Gs=-1,Js=0;function Mt(){return Se&6?nt():Gs!==-1?Gs:Gs=nt()}function on(e){return e.mode&1?Se&2&&xt!==0?xt&-xt:df.transition!==null?(Js===0&&(Js=T0()),Js):(e=$e,e!==0||(e=window.event,e=e===void 0?16:B0(e.type)),e):1}function mr(e,r,n,a){if(50<Ba)throw Ba=0,_o=null,Error(H(185));us(e,n,a),(!(Se&2)||e!==ht)&&(e===ht&&(!(Se&2)&&(Fl|=n),ut===4&&Qr(e,xt)),Ft(e,a),n===1&&Se===0&&!(r.mode&1)&&(ua=nt()+500,Il&&gn()))}function Ft(e,r){var n=e.callbackNode;c1(e,r);var a=al(e,e===ht?xt:0);if(a===0)n!==null&&Cd(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&Cd(n),r===1)e.tag===0?cf(yu.bind(null,e)):sp(yu.bind(null,e)),af(function(){!(Se&6)&&gn()}),n=null;else{switch(L0(a)){case 1:n=jc;break;case 4:n=E0;break;case 16:n=nl;break;case 536870912:n=$0;break;default:n=nl}n=nm(n,Xp.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Xp(e,r){if(Gs=-1,Js=0,Se&6)throw Error(H(327));var n=e.callbackNode;if(aa()&&e.callbackNode!==n)return null;var a=al(e,e===ht?xt:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=wl(e,a);else{r=a;var s=Se;Se|=2;var l=Jp();(ht!==e||xt!==r)&&(Cr=null,ua=nt()+500,Cn(e,r));do try{Pf();break}catch(o){Gp(e,o)}while(!0);Tc(),yl.current=l,Se=s,lt!==null?r=0:(ht=null,xt=0,r=ut)}if(r!==0){if(r===2&&(s=io(e),s!==0&&(a=s,r=Ao(e,s))),r===1)throw n=ls,Cn(e,0),Qr(e,a),Ft(e,nt()),n;if(r===6)Qr(e,a);else{if(s=e.current.alternate,!(a&30)&&!Rf(s)&&(r=wl(e,a),r===2&&(l=io(e),l!==0&&(a=l,r=Ao(e,l))),r===1))throw n=ls,Cn(e,0),Qr(e,a),Ft(e,nt()),n;switch(e.finishedWork=s,e.finishedLanes=a,r){case 0:case 1:throw Error(H(345));case 2:jn(e,It,Cr);break;case 3:if(Qr(e,a),(a&130023424)===a&&(r=Yc+500-nt(),10<r)){if(al(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){Mt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=go(jn.bind(null,e,It,Cr),r);break}jn(e,It,Cr);break;case 4:if(Qr(e,a),(a&4194240)===a)break;for(r=e.eventTimes,s=-1;0<a;){var i=31-pr(a);l=1<<i,i=r[i],i>s&&(s=i),a&=~l}if(a=s,a=nt()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Cf(a/1960))-a,10<a){e.timeoutHandle=go(jn.bind(null,e,It,Cr),a);break}jn(e,It,Cr);break;case 5:jn(e,It,Cr);break;default:throw Error(H(329))}}}return Ft(e,nt()),e.callbackNode===n?Xp.bind(null,e):null}function Ao(e,r){var n=Va;return e.current.memoizedState.isDehydrated&&(Cn(e,r).flags|=256),e=wl(e,r),e!==2&&(r=It,It=n,r!==null&&Io(r)),e}function Io(e){It===null?It=e:It.push.apply(It,e)}function Rf(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var s=n[a],l=s.getSnapshot;s=s.value;try{if(!hr(l(),s))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(e,r){for(r&=~Qc,r&=~Fl,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-pr(r),a=1<<n;e[n]=-1,r&=~a}}function yu(e){if(Se&6)throw Error(H(327));aa();var r=al(e,0);if(!(r&1))return Ft(e,nt()),null;var n=wl(e,r);if(e.tag!==0&&n===2){var a=io(e);a!==0&&(r=a,n=Ao(e,a))}if(n===1)throw n=ls,Cn(e,0),Qr(e,r),Ft(e,nt()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,jn(e,It,Cr),Ft(e,nt()),null}function Kc(e,r){var n=Se;Se|=1;try{return e(r)}finally{Se=n,Se===0&&(ua=nt()+500,Il&&gn())}}function Tn(e){Xr!==null&&Xr.tag===0&&!(Se&6)&&aa();var r=Se;Se|=1;var n=nr.transition,a=$e;try{if(nr.transition=null,$e=1,e)return e()}finally{$e=a,nr.transition=n,Se=r,!(Se&6)&&gn()}}function Xc(){qt=Jn.current,Fe(Jn)}function Cn(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nf(n)),lt!==null)for(n=lt.return;n!==null;){var a=n;switch(Pc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&cl();break;case 3:ca(),Fe(Vt),Fe(zt),Vc();break;case 5:Dc(a);break;case 4:ca();break;case 13:Fe(Xe);break;case 19:Fe(Xe);break;case 10:Lc(a.type._context);break;case 22:case 23:Xc()}n=n.return}if(ht=e,lt=e=cn(e.current,null),xt=qt=r,ut=0,ls=null,Qc=Fl=$n=0,It=Va=null,kn!==null){for(r=0;r<kn.length;r++)if(n=kn[r],a=n.interleaved,a!==null){n.interleaved=null;var s=a.next,l=n.pending;if(l!==null){var i=l.next;l.next=s,a.next=i}n.pending=a}kn=null}return e}function Gp(e,r){do{var n=lt;try{if(Tc(),Ys.current=xl,vl){for(var a=Ge.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}vl=!1}if(En=0,mt=dt=Ge=null,Ia=!1,ns=0,qc.current=null,n===null||n.return===null){ut=1,ls=r,lt=null;break}e:{var l=e,i=n.return,o=n,c=r;if(r=xt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=lu(i);if(b!==null){b.flags&=-257,iu(b,i,o,l,r),b.mode&1&&su(l,d,r),r=b,c=d;var j=r.updateQueue;if(j===null){var y=new Set;y.add(c),r.updateQueue=y}else j.add(c);break e}else{if(!(r&1)){su(l,d,r),Gc();break e}c=Error(H(426))}}else if(qe&&o.mode&1){var w=lu(i);if(w!==null){!(w.flags&65536)&&(w.flags|=256),iu(w,i,o,l,r),Ec(da(c,o));break e}}l=c=da(c,o),ut!==4&&(ut=2),Va===null?Va=[l]:Va.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,r&=-r,l.lanes|=r;var v=Lp(l,c,r);Zd(l,v);break e;case 1:o=c;var g=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ln===null||!ln.has(m)))){l.flags|=65536,r&=-r,l.lanes|=r;var x=_p(l,o,r);Zd(l,x);break e}}l=l.return}while(l!==null)}em(n)}catch(N){r=N,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function Jp(){var e=yl.current;return yl.current=xl,e===null?xl:e}function Gc(){(ut===0||ut===3||ut===2)&&(ut=4),ht===null||!($n&268435455)&&!(Fl&268435455)||Qr(ht,xt)}function wl(e,r){var n=Se;Se|=2;var a=Jp();(ht!==e||xt!==r)&&(Cr=null,Cn(e,r));do try{Mf();break}catch(s){Gp(e,s)}while(!0);if(Tc(),Se=n,yl.current=a,lt!==null)throw Error(H(261));return ht=null,xt=0,ut}function Mf(){for(;lt!==null;)Zp(lt)}function Pf(){for(;lt!==null&&!e1();)Zp(lt)}function Zp(e){var r=rm(e.alternate,e,qt);e.memoizedProps=e.pendingProps,r===null?em(e):lt=r,qc.current=null}function em(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=Nf(n,r),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ut=6,lt=null;return}}else if(n=wf(n,r,qt),n!==null){lt=n;return}if(r=r.sibling,r!==null){lt=r;return}lt=r=e}while(r!==null);ut===0&&(ut=5)}function jn(e,r,n){var a=$e,s=nr.transition;try{nr.transition=null,$e=1,Ef(e,r,n,a)}finally{nr.transition=s,$e=a}return null}function Ef(e,r,n,a){do aa();while(Xr!==null);if(Se&6)throw Error(H(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(d1(e,l),e===ht&&(lt=ht=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,nm(nl,function(){return aa(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=nr.transition,nr.transition=null;var i=$e;$e=1;var o=Se;Se|=4,qc.current=null,Sf(e,n),Yp(n,e),X1(ho),sl=!!mo,ho=mo=null,e.current=n,zf(n),t1(),Se=o,$e=i,nr.transition=l}else e.current=n;if(Ds&&(Ds=!1,Xr=e,bl=s),l=e.pendingLanes,l===0&&(ln=null),a1(n.stateNode),Ft(e,nt()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)s=r[n],a(s.value,{componentStack:s.stack,digest:s.digest});if(jl)throw jl=!1,e=Lo,Lo=null,e;return bl&1&&e.tag!==0&&aa(),l=e.pendingLanes,l&1?e===_o?Ba++:(Ba=0,_o=e):Ba=0,gn(),null}function aa(){if(Xr!==null){var e=L0(bl),r=nr.transition,n=$e;try{if(nr.transition=null,$e=16>e?16:e,Xr===null)var a=!1;else{if(e=Xr,Xr=null,bl=0,Se&6)throw Error(H(331));var s=Se;for(Se|=4,Z=e.current;Z!==null;){var l=Z,i=l.child;if(Z.flags&16){var o=l.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(Z=d;Z!==null;){var p=Z;switch(p.tag){case 0:case 11:case 15:Da(8,p,l)}var h=p.child;if(h!==null)h.return=p,Z=h;else for(;Z!==null;){p=Z;var f=p.sibling,b=p.return;if(Up(p),p===d){Z=null;break}if(f!==null){f.return=b,Z=f;break}Z=b}}}var j=l.alternate;if(j!==null){var y=j.child;if(y!==null){j.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}Z=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,Z=i;else e:for(;Z!==null;){if(l=Z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Da(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,Z=v;break e}Z=l.return}}var g=e.current;for(Z=g;Z!==null;){i=Z;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,Z=m;else e:for(i=g;Z!==null;){if(o=Z,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Bl(9,o)}}catch(N){tt(o,o.return,N)}if(o===i){Z=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Z=x;break e}Z=o.return}}if(Se=s,gn(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot($l,e)}catch{}a=!0}return a}finally{$e=n,nr.transition=r}}return!1}function ju(e,r,n){r=da(n,r),r=Lp(e,r,1),e=sn(e,r,1),r=Mt(),e!==null&&(us(e,1,r),Ft(e,r))}function tt(e,r,n){if(e.tag===3)ju(e,e,n);else for(;r!==null;){if(r.tag===3){ju(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ln===null||!ln.has(a))){e=da(n,e),e=_p(r,e,1),r=sn(r,e,1),e=Mt(),r!==null&&(us(r,1,e),Ft(r,e));break}}r=r.return}}function $f(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=Mt(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(xt&n)===n&&(ut===4||ut===3&&(xt&130023424)===xt&&500>nt()-Yc?Cn(e,0):Qc|=n),Ft(e,r)}function tm(e,r){r===0&&(e.mode&1?(r=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):r=1);var n=Mt();e=Ar(e,r),e!==null&&(us(e,r,n),Ft(e,n))}function Tf(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),tm(e,n)}function Lf(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(H(314))}a!==null&&a.delete(r),tm(e,n)}var rm;rm=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Vt.current)Dt=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return Dt=!1,bf(e,r,n);Dt=!!(e.flags&131072)}else Dt=!1,qe&&r.flags&1048576&&lp(r,pl,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Xs(e,r),e=r.pendingProps;var s=la(r,zt.current);na(r,n),s=Fc(null,r,a,e,s,n);var l=Hc();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Bt(a)?(l=!0,dl(r)):l=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ac(r),s.updater=Vl,r.stateNode=s,s._reactInternals=r,No(r,a,e,n),r=zo(null,r,a,!0,l,n)):(r.tag=0,qe&&l&&Mc(r),Rt(null,r,s,n),r=r.child),r;case 16:a=r.elementType;e:{switch(Xs(e,r),e=r.pendingProps,s=a._init,a=s(a._payload),r.type=a,s=r.tag=Af(a),e=or(a,e),s){case 0:r=So(null,r,a,e,n);break e;case 1:r=du(null,r,a,e,n);break e;case 11:r=ou(null,r,a,e,n);break e;case 14:r=cu(null,r,a,or(a.type,e),n);break e}throw Error(H(306,a,""))}return r;case 0:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:or(a,s),So(e,r,a,s,n);case 1:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:or(a,s),du(e,r,a,s,n);case 3:e:{if(Vp(r),e===null)throw Error(H(387));a=r.pendingProps,l=r.memoizedState,s=l.element,pp(e,r),fl(r,a,null,n);var i=r.memoizedState;if(a=i.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){s=da(Error(H(423)),r),r=uu(e,r,a,n,s);break e}else if(a!==s){s=da(Error(H(424)),r),r=uu(e,r,a,n,s);break e}else for(Qt=an(r.stateNode.containerInfo.firstChild),Yt=r,qe=!0,dr=null,n=dp(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),a===s){r=Ir(e,r,n);break e}Rt(e,r,a,n)}r=r.child}return r;case 5:return mp(r),e===null&&jo(r),a=r.type,s=r.pendingProps,l=e!==null?e.memoizedProps:null,i=s.children,fo(a,s)?i=null:l!==null&&fo(a,l)&&(r.flags|=32),Dp(e,r),Rt(e,r,i,n),r.child;case 6:return e===null&&jo(r),null;case 13:return Bp(e,r,n);case 4:return Ic(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=oa(r,null,a,n):Rt(e,r,a,n),r.child;case 11:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:or(a,s),ou(e,r,a,s,n);case 7:return Rt(e,r,r.pendingProps,n),r.child;case 8:return Rt(e,r,r.pendingProps.children,n),r.child;case 12:return Rt(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,s=r.pendingProps,l=r.memoizedProps,i=s.value,Ie(ml,a._currentValue),a._currentValue=i,l!==null)if(hr(l.value,i)){if(l.children===s.children&&!Vt.current){r=Ir(e,r,n);break e}}else for(l=r.child,l!==null&&(l.return=r);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var c=o.firstContext;c!==null;){if(c.context===a){if(l.tag===1){c=$r(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),bo(l.return,n,r),o.lanes|=n;break}c=c.next}}else if(l.tag===10)i=l.type===r.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(H(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),bo(i,n,r),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===r){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Rt(e,r,s.children,n),r=r.child}return r;case 9:return s=r.type,a=r.pendingProps.children,na(r,n),s=ar(s),a=a(s),r.flags|=1,Rt(e,r,a,n),r.child;case 14:return a=r.type,s=or(a,r.pendingProps),s=or(a.type,s),cu(e,r,a,s,n);case 15:return Ap(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:or(a,s),Xs(e,r),r.tag=1,Bt(a)?(e=!0,dl(r)):e=!1,na(r,n),Tp(r,a,s),No(r,a,s,n),zo(null,r,a,!0,e,n);case 19:return Fp(e,r,n);case 22:return Ip(e,r,n)}throw Error(H(156,r.tag))};function nm(e,r){return P0(e,r)}function _f(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(e,r,n,a){return new _f(e,r,n,a)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vc)return 11;if(e===xc)return 14}return 2}function cn(e,r){var n=e.alternate;return n===null?(n=rr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zs(e,r,n,a,s,l){var i=2;if(a=e,typeof e=="function")Jc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Hn:return Rn(n.children,s,l,r);case gc:i=8,s|=8;break;case qi:return e=rr(12,n,r,s|2),e.elementType=qi,e.lanes=l,e;case Qi:return e=rr(13,n,r,s),e.elementType=Qi,e.lanes=l,e;case Yi:return e=rr(19,n,r,s),e.elementType=Yi,e.lanes=l,e;case m0:return Hl(n,s,l,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case u0:i=10;break e;case p0:i=9;break e;case vc:i=11;break e;case xc:i=14;break e;case Or:i=16,a=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return r=rr(i,n,r,s),r.elementType=e,r.type=a,r.lanes=l,r}function Rn(e,r,n,a){return e=rr(7,e,a,r),e.lanes=n,e}function Hl(e,r,n,a){return e=rr(22,e,a,r),e.elementType=m0,e.lanes=n,e.stateNode={isHidden:!1},e}function Li(e,r,n){return e=rr(6,e,null,r),e.lanes=n,e}function _i(e,r,n){return r=rr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function If(e,r,n,a,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Zc(e,r,n,a,s,l,i,o,c){return e=new If(e,r,n,o,c),r===1?(r=1,l===!0&&(r|=8)):r=0,l=rr(3,null,null,r),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(l),e}function Df(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function am(e){if(!e)return mn;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(H(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Bt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(Bt(n))return ap(e,n,r)}return r}function sm(e,r,n,a,s,l,i,o,c){return e=Zc(n,a,!0,e,s,l,i,o,c),e.context=am(null),n=e.current,a=Mt(),s=on(n),l=$r(a,s),l.callback=r??null,sn(n,l,s),e.current.lanes=s,us(e,s,a),Ft(e,a),e}function Wl(e,r,n,a){var s=r.current,l=Mt(),i=on(s);return n=am(n),r.context===null?r.context=n:r.pendingContext=n,r=$r(l,i),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=sn(s,r,i),e!==null&&(mr(e,s,i,l),Qs(e,s,i)),i}function Nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function ed(e,r){bu(e,r),(e=e.alternate)&&bu(e,r)}function Vf(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function td(e){this._internalRoot=e}Ol.prototype.render=td.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(H(409));Wl(e,r,null,null)};Ol.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Tn(function(){Wl(null,e,null,null)}),r[_r]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var r=I0();e={blockedOn:null,target:e,priority:r};for(var n=0;n<qr.length&&r!==0&&r<qr[n].priority;n++);qr.splice(n,0,e),n===0&&V0(e)}};function rd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function Bf(e,r,n,a,s){if(s){if(typeof a=="function"){var l=a;a=function(){var d=Nl(i);l.call(d)}}var i=sm(r,a,e,0,null,!1,!1,"",wu);return e._reactRootContainer=i,e[_r]=i.current,Ja(e.nodeType===8?e.parentNode:e),Tn(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var o=a;a=function(){var d=Nl(c);o.call(d)}}var c=Zc(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=c,e[_r]=c.current,Ja(e.nodeType===8?e.parentNode:e),Tn(function(){Wl(r,c,n,a)}),c}function ql(e,r,n,a,s){var l=n._reactRootContainer;if(l){var i=l;if(typeof s=="function"){var o=s;s=function(){var c=Nl(i);o.call(c)}}Wl(r,i,e,s)}else i=Bf(n,r,e,s,a);return Nl(i)}_0=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ca(r.pendingLanes);n!==0&&(bc(r,n|1),Ft(r,nt()),!(Se&6)&&(ua=nt()+500,gn()))}break;case 13:Tn(function(){var a=Ar(e,1);if(a!==null){var s=Mt();mr(a,e,1,s)}}),ed(e,1)}};wc=function(e){if(e.tag===13){var r=Ar(e,134217728);if(r!==null){var n=Mt();mr(r,e,134217728,n)}ed(e,134217728)}};A0=function(e){if(e.tag===13){var r=on(e),n=Ar(e,r);if(n!==null){var a=Mt();mr(n,e,r,a)}ed(e,r)}};I0=function(){return $e};D0=function(e,r){var n=$e;try{return $e=e,r()}finally{$e=n}};ao=function(e,r,n){switch(r){case"input":if(Gi(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var s=Al(a);if(!s)throw Error(H(90));f0(a),Gi(a,s)}}}break;case"textarea":v0(e,n);break;case"select":r=n.value,r!=null&&Zn(e,!!n.multiple,r,!1)}};k0=Kc;S0=Tn;var Ff={usingClientEntryPoint:!1,Events:[ms,qn,Al,w0,N0,Kc]},ka={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=R0(e),e===null?null:e.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{$l=Vs.inject(Hf),wr=Vs}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;Xt.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(r))throw Error(H(200));return Df(e,r,null,n)};Xt.createRoot=function(e,r){if(!rd(e))throw Error(H(299));var n=!1,a="",s=lm;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=Zc(e,1,!1,null,null,n,!1,a,s),e[_r]=r.current,Ja(e.nodeType===8?e.parentNode:e),new td(r)};Xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=R0(r),e=e===null?null:e.stateNode,e};Xt.flushSync=function(e){return Tn(e)};Xt.hydrate=function(e,r,n){if(!Ul(r))throw Error(H(200));return ql(null,e,r,!0,n)};Xt.hydrateRoot=function(e,r,n){if(!rd(e))throw Error(H(405));var a=n!=null&&n.hydratedSources||null,s=!1,l="",i=lm;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),r=sm(r,null,e,1,n??null,s,!1,l,i),e[_r]=r.current,Ja(e),a)for(e=0;e<a.length;e++)n=a[e],s=n._getVersion,s=s(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,s]:r.mutableSourceEagerHydrationData.push(n,s);return new Ol(r)};Xt.render=function(e,r,n){if(!Ul(r))throw Error(H(200));return ql(null,e,r,!1,n)};Xt.unmountComponentAtNode=function(e){if(!Ul(e))throw Error(H(40));return e._reactRootContainer?(Tn(function(){ql(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};Xt.unstable_batchedUpdates=Kc;Xt.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!Ul(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return ql(e,r,n,!1,a)};Xt.version="18.3.1-next-f1338f8080-20240426";function im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(im)}catch(e){console.error(e)}}im(),i0.exports=Xt;var nd=i0.exports,Nu=nd;Oi.createRoot=Nu.createRoot,Oi.hydrateRoot=Nu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},is.apply(this,arguments)}var Gr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gr||(Gr={}));const ku="popstate";function Wf(e){e===void 0&&(e={});function r(a,s){let{pathname:l,search:i,hash:o}=a.location;return Do("",{pathname:l,search:i,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:kl(s)}return Uf(r,n,null,e)}function rt(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function om(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Of(){return Math.random().toString(36).substr(2,8)}function Su(e,r){return{usr:e.state,key:e.key,idx:r}}function Do(e,r,n,a){return n===void 0&&(n=null),is({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?ga(r):r,{state:n,key:r&&r.key||a||Of()})}function kl(e){let{pathname:r="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function ga(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(r.search=e.substr(a),e=e.substr(0,a)),e&&(r.pathname=e)}return r}function Uf(e,r,n,a){a===void 0&&(a={});let{window:s=document.defaultView,v5Compat:l=!1}=a,i=s.history,o=Gr.Pop,c=null,d=p();d==null&&(d=0,i.replaceState(is({},i.state,{idx:d}),""));function p(){return(i.state||{idx:null}).idx}function h(){o=Gr.Pop;let w=p(),v=w==null?null:w-d;d=w,c&&c({action:o,location:y.location,delta:v})}function f(w,v){o=Gr.Push;let g=Do(y.location,w,v);d=p()+1;let m=Su(g,d),x=y.createHref(g);try{i.pushState(m,"",x)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;s.location.assign(x)}l&&c&&c({action:o,location:y.location,delta:1})}function b(w,v){o=Gr.Replace;let g=Do(y.location,w,v);d=p();let m=Su(g,d),x=y.createHref(g);i.replaceState(m,"",x),l&&c&&c({action:o,location:y.location,delta:0})}function j(w){let v=s.location.origin!=="null"?s.location.origin:s.location.href,g=typeof w=="string"?w:kl(w);return g=g.replace(/ $/,"%20"),rt(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let y={get action(){return o},get location(){return e(s,i)},listen(w){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(ku,h),c=w,()=>{s.removeEventListener(ku,h),c=null}},createHref(w){return r(s,w)},createURL:j,encodeLocation(w){let v=j(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:b,go(w){return i.go(w)}};return y}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function qf(e,r,n){return n===void 0&&(n="/"),Qf(e,r,n)}function Qf(e,r,n,a){let s=typeof r=="string"?ga(r):r,l=pa(s.pathname||"/",n);if(l==null)return null;let i=cm(e);Yf(i);let o=null;for(let c=0;o==null&&c<i.length;++c){let d=sg(l);o=ng(i[c],d)}return o}function cm(e,r,n,a){r===void 0&&(r=[]),n===void 0&&(n=[]),a===void 0&&(a="");let s=(l,i,o)=>{let c={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};c.relativePath.startsWith("/")&&(rt(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=dn([a,c.relativePath]),p=n.concat(c);l.children&&l.children.length>0&&(rt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),cm(l.children,r,p,d)),!(l.path==null&&!l.index)&&r.push({path:d,score:tg(d,l.index),routesMeta:p})};return e.forEach((l,i)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))s(l,i);else for(let c of dm(l.path))s(l,i,c)}),r}function dm(e){let r=e.split("/");if(r.length===0)return[];let[n,...a]=r,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let i=dm(a.join("/")),o=[];return o.push(...i.map(c=>c===""?l:[l,c].join("/"))),s&&o.push(...i),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Yf(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:rg(r.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Kf=/^:[\w-]+$/,Xf=3,Gf=2,Jf=1,Zf=10,eg=-2,Cu=e=>e==="*";function tg(e,r){let n=e.split("/"),a=n.length;return n.some(Cu)&&(a+=eg),r&&(a+=Gf),n.filter(s=>!Cu(s)).reduce((s,l)=>s+(Kf.test(l)?Xf:l===""?Jf:Zf),a)}function rg(e,r){return e.length===r.length&&e.slice(0,-1).every((a,s)=>a===r[s])?e[e.length-1]-r[r.length-1]:0}function ng(e,r,n){let{routesMeta:a}=e,s={},l="/",i=[];for(let o=0;o<a.length;++o){let c=a[o],d=o===a.length-1,p=l==="/"?r:r.slice(l.length)||"/",h=Vo({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),f=c.route;if(!h)return null;Object.assign(s,h.params),i.push({params:s,pathname:dn([l,h.pathname]),pathnameBase:cg(dn([l,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(l=dn([l,h.pathnameBase]))}return i}function Vo(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=ag(e.path,e.caseSensitive,e.end),s=r.match(n);if(!s)return null;let l=s[0],i=l.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:a.reduce((d,p,h)=>{let{paramName:f,isOptional:b}=p;if(f==="*"){let y=o[h]||"";i=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const j=o[h];return b&&!j?d[f]=void 0:d[f]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:i,pattern:e}}function ag(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),om(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,c)=>(a.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),a]}function sg(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return om(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function pa(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function lg(e,r){r===void 0&&(r="/");let{pathname:n,search:a="",hash:s=""}=typeof e=="string"?ga(e):e;return{pathname:n?n.startsWith("/")?n:ig(n,r):r,search:dg(a),hash:ug(s)}}function ig(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ai(e,r,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function og(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function um(e,r){let n=og(e);return r?n.map((a,s)=>s===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function pm(e,r,n,a){a===void 0&&(a=!1);let s;typeof e=="string"?s=ga(e):(s=is({},e),rt(!s.pathname||!s.pathname.includes("?"),Ai("?","pathname","search",s)),rt(!s.pathname||!s.pathname.includes("#"),Ai("#","pathname","hash",s)),rt(!s.search||!s.search.includes("#"),Ai("#","search","hash",s)));let l=e===""||s.pathname==="",i=l?"/":s.pathname,o;if(i==null)o=n;else{let h=r.length-1;if(!a&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}o=h>=0?r[h]:"/"}let c=lg(s,o),d=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const dn=e=>e.join("/").replace(/\/\/+/g,"/"),cg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ug=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mm=["post","put","patch","delete"];new Set(mm);const mg=["get",...mm];new Set(mg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},os.apply(this,arguments)}const Ql=u.createContext(null),hm=u.createContext(null),vn=u.createContext(null),Yl=u.createContext(null),In=u.createContext({outlet:null,matches:[],isDataRoute:!1}),fm=u.createContext(null);function hg(e,r){let{relative:n}=r===void 0?{}:r;fs()||rt(!1);let{basename:a,navigator:s}=u.useContext(vn),{hash:l,pathname:i,search:o}=Kl(e,{relative:n}),c=i;return a!=="/"&&(c=i==="/"?a:dn([a,i])),s.createHref({pathname:c,search:o,hash:l})}function fs(){return u.useContext(Yl)!=null}function xn(){return fs()||rt(!1),u.useContext(Yl).location}function gm(e){u.useContext(vn).static||u.useLayoutEffect(e)}function fr(){let{isDataRoute:e}=u.useContext(In);return e?Cg():fg()}function fg(){fs()||rt(!1);let e=u.useContext(Ql),{basename:r,future:n,navigator:a}=u.useContext(vn),{matches:s}=u.useContext(In),{pathname:l}=xn(),i=JSON.stringify(um(s,n.v7_relativeSplatPath)),o=u.useRef(!1);return gm(()=>{o.current=!0}),u.useCallback(function(d,p){if(p===void 0&&(p={}),!o.current)return;if(typeof d=="number"){a.go(d);return}let h=pm(d,JSON.parse(i),l,p.relative==="path");e==null&&r!=="/"&&(h.pathname=h.pathname==="/"?r:dn([r,h.pathname])),(p.replace?a.replace:a.push)(h,p.state,p)},[r,a,i,l,e])}function Kl(e,r){let{relative:n}=r===void 0?{}:r,{future:a}=u.useContext(vn),{matches:s}=u.useContext(In),{pathname:l}=xn(),i=JSON.stringify(um(s,a.v7_relativeSplatPath));return u.useMemo(()=>pm(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function gg(e,r){return vg(e,r)}function vg(e,r,n,a){fs()||rt(!1);let{navigator:s}=u.useContext(vn),{matches:l}=u.useContext(In),i=l[l.length-1],o=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=xn(),p;if(r){var h;let w=typeof r=="string"?ga(r):r;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||rt(!1),p=w}else p=d;let f=p.pathname||"/",b=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=qf(e,{pathname:b}),y=wg(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:dn([c,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:dn([c,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,n,a);return r&&y?u.createElement(Yl.Provider,{value:{location:os({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Gr.Pop}},y):y}function xg(){let e=zg(),r=pg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},r),n?u.createElement("pre",{style:s},n):null,null)}const yg=u.createElement(xg,null);class jg extends u.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?u.createElement(In.Provider,{value:this.props.routeContext},u.createElement(fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bg(e){let{routeContext:r,match:n,children:a}=e,s=u.useContext(Ql);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(In.Provider,{value:r},a)}function wg(e,r,n,a){var s;if(r===void 0&&(r=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=a)!=null&&l.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=(s=n)==null?void 0:s.errors;if(o!=null){let p=i.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);p>=0||rt(!1),i=i.slice(0,Math.min(i.length,p+1))}let c=!1,d=-1;if(n&&a&&a.v7_partialHydration)for(let p=0;p<i.length;p++){let h=i[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:f,errors:b}=n,j=h.route.loader&&f[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||j){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((p,h,f)=>{let b,j=!1,y=null,w=null;n&&(b=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||yg,c&&(d<0&&f===0?(Rg("route-fallback"),j=!0,w=null):d===f&&(j=!0,w=h.route.hydrateFallbackElement||null)));let v=r.concat(i.slice(0,f+1)),g=()=>{let m;return b?m=y:j?m=w:h.route.Component?m=u.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=p,u.createElement(bg,{match:h,routeContext:{outlet:p,matches:v,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?u.createElement(jg,{location:n.location,revalidation:n.revalidation,component:y,error:b,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var vm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vm||{}),xm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xm||{});function Ng(e){let r=u.useContext(Ql);return r||rt(!1),r}function kg(e){let r=u.useContext(hm);return r||rt(!1),r}function Sg(e){let r=u.useContext(In);return r||rt(!1),r}function ym(e){let r=Sg(),n=r.matches[r.matches.length-1];return n.route.id||rt(!1),n.route.id}function zg(){var e;let r=u.useContext(fm),n=kg(),a=ym();return r!==void 0?r:(e=n.errors)==null?void 0:e[a]}function Cg(){let{router:e}=Ng(vm.UseNavigateStable),r=ym(xm.UseNavigateStable),n=u.useRef(!1);return gm(()=>{n.current=!0}),u.useCallback(function(s,l){l===void 0&&(l={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,os({fromRouteId:r},l)))},[e,r])}const Ru={};function Rg(e,r,n){Ru[e]||(Ru[e]=!0)}function Mg(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ne(e){rt(!1)}function Pg(e){let{basename:r="/",children:n=null,location:a,navigationType:s=Gr.Pop,navigator:l,static:i=!1,future:o}=e;fs()&&rt(!1);let c=r.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:l,static:i,future:os({v7_relativeSplatPath:!1},o)}),[c,o,l,i]);typeof a=="string"&&(a=ga(a));let{pathname:p="/",search:h="",hash:f="",state:b=null,key:j="default"}=a,y=u.useMemo(()=>{let w=pa(p,c);return w==null?null:{location:{pathname:w,search:h,hash:f,state:b,key:j},navigationType:s}},[c,p,h,f,b,j,s]);return y==null?null:u.createElement(vn.Provider,{value:d},u.createElement(Yl.Provider,{children:n,value:y}))}function Eg(e){let{children:r,location:n}=e;return gg(Bo(r),n)}new Promise(()=>{});function Bo(e,r){r===void 0&&(r=[]);let n=[];return u.Children.forEach(e,(a,s)=>{if(!u.isValidElement(a))return;let l=[...r,s];if(a.type===u.Fragment){n.push.apply(n,Bo(a.props.children,l));return}a.type!==ne&&rt(!1),!a.props.index||!a.props.children||rt(!1);let i={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=Bo(a.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Sl.apply(this,arguments)}function jm(e,r){if(e==null)return{};var n={},a=Object.keys(e),s,l;for(l=0;l<a.length;l++)s=a[l],!(r.indexOf(s)>=0)&&(n[s]=e[s]);return n}function $g(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tg(e,r){return e.button===0&&(!r||r==="_self")&&!$g(e)}const Lg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_g=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ag="6";try{window.__reactRouterVersion=Ag}catch{}const Ig=u.createContext({isTransitioning:!1}),Dg="startTransition",Mu=Wi[Dg];function Vg(e){let{basename:r,children:n,future:a,window:s}=e,l=u.useRef();l.current==null&&(l.current=Wf({window:s,v5Compat:!0}));let i=l.current,[o,c]=u.useState({action:i.action,location:i.location}),{v7_startTransition:d}=a||{},p=u.useCallback(h=>{d&&Mu?Mu(()=>c(h)):c(h)},[c,d]);return u.useLayoutEffect(()=>i.listen(p),[i,p]),u.useEffect(()=>Mg(a),[a]),u.createElement(Pg,{basename:r,children:n,location:o.location,navigationType:o.action,navigator:i,future:a})}const Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kt=u.forwardRef(function(r,n){let{onClick:a,relative:s,reloadDocument:l,replace:i,state:o,target:c,to:d,preventScrollReset:p,viewTransition:h}=r,f=jm(r,Lg),{basename:b}=u.useContext(vn),j,y=!1;if(typeof d=="string"&&Fg.test(d)&&(j=d,Bg))try{let m=new URL(window.location.href),x=d.startsWith("//")?new URL(m.protocol+d):new URL(d),N=pa(x.pathname,b);x.origin===m.origin&&N!=null?d=N+x.search+x.hash:y=!0}catch{}let w=hg(d,{relative:s}),v=Wg(d,{replace:i,state:o,target:c,preventScrollReset:p,relative:s,viewTransition:h});function g(m){a&&a(m),m.defaultPrevented||v(m)}return u.createElement("a",Sl({},f,{href:j||w,onClick:y||l?a:g,ref:n,target:c}))}),Pu=u.forwardRef(function(r,n){let{"aria-current":a="page",caseSensitive:s=!1,className:l="",end:i=!1,style:o,to:c,viewTransition:d,children:p}=r,h=jm(r,_g),f=Kl(c,{relative:h.relative}),b=xn(),j=u.useContext(hm),{navigator:y,basename:w}=u.useContext(vn),v=j!=null&&Og(f)&&d===!0,g=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,m=b.pathname,x=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;s||(m=m.toLowerCase(),x=x?x.toLowerCase():null,g=g.toLowerCase()),x&&w&&(x=pa(x,w)||x);const N=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=m===g||!i&&m.startsWith(g)&&m.charAt(N)==="/",k=x!=null&&(x===g||!i&&x.startsWith(g)&&x.charAt(g.length)==="/"),R={isActive:C,isPending:k,isTransitioning:v},I=C?a:void 0,_;typeof l=="function"?_=l(R):_=[l,C?"active":null,k?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(R):o;return u.createElement(kt,Sl({},h,{"aria-current":I,className:_,ref:n,style:P,to:c,viewTransition:d}),typeof p=="function"?p(R):p)});var Fo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fo||(Fo={}));var Eu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Eu||(Eu={}));function Hg(e){let r=u.useContext(Ql);return r||rt(!1),r}function Wg(e,r){let{target:n,replace:a,state:s,preventScrollReset:l,relative:i,viewTransition:o}=r===void 0?{}:r,c=fr(),d=xn(),p=Kl(e,{relative:i});return u.useCallback(h=>{if(Tg(h,n)){h.preventDefault();let f=a!==void 0?a:kl(d)===kl(p);c(e,{replace:f,state:s,preventScrollReset:l,relative:i,viewTransition:o})}},[d,c,p,a,s,n,e,l,i,o])}function Og(e,r){r===void 0&&(r={});let n=u.useContext(Ig);n==null&&rt(!1);let{basename:a}=Hg(Fo.useViewTransitionState),s=Kl(e,{relative:r.relative});if(!n.isTransitioning)return!1;let l=pa(n.currentLocation.pathname,a)||n.currentLocation.pathname,i=pa(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Vo(s.pathname,i)!=null||Vo(s.pathname,l)!=null}const z=({name:e,size:r="md",color:n,className:a="",onClick:s,style:l={}})=>{const o={xs:12,sm:16,md:20,lg:24,xl:32}[r],c={home:t.jsx("path",{fillRule:"evenodd",d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",clipRule:"evenodd"}),user:t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),settings:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),search:t.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}),menu:t.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),close:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),check:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}),"arrow-right":t.jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}),"arrow-left":t.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}),"arrow-up":t.jsx("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}),"arrow-down":t.jsx("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}),plus:t.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}),minus:t.jsx("path",{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),edit:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),delete:t.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}),info:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}),warning:t.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}),error:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}),success:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),download:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}),upload:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}),calendar:t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),clock:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}),mail:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),phone:t.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}),location:t.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}),star:t.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}),heart:t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),bookmark:t.jsx("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}),share:t.jsx("path",{d:"M15 8a3 3 0 11-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}),bell:t.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}),lock:t.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}),unlock:t.jsx("path",{d:"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}),eye:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),t.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),"eye-off":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),t.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}),refresh:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),filter:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",clipRule:"evenodd"}),sort:t.jsx("path",{d:"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}),grid:t.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"}),list:t.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),play:t.jsx("path",{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"}),pause:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}),stop:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"}),"skip-forward":t.jsx("path",{d:"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}),"skip-back":t.jsx("path",{d:"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}),volume:t.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"}),mute:t.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",clipRule:"evenodd"}),camera:t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),image:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}),file:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"}),folder:t.jsx("path",{d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}),link:t.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",clipRule:"evenodd"}),"external-link":t.jsx("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),dashboard:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"}),t.jsx("path",{d:"M3 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z"}),t.jsx("path",{d:"M11 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4z"}),t.jsx("path",{d:"M11 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"})]}),"chevron-up":t.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"}),"chevron-down":t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}),"chevron-left":t.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}),"chevron-right":t.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}),users:t.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}),"user-plus":t.jsx(t.Fragment,{children:t.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"user-shield":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),t.jsx("path",{d:"M15 11h2v2l-2 4-2-4v-2h2z"})]}),"user-cog":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),t.jsx("circle",{cx:"16",cy:"13",r:"1"}),t.jsx("path",{d:"M16 11v1m0 2v1m1.5-2.5l-.866.5m-1.268 0l-.866-.5m0 2l.866-.5m1.268 0l.866.5",stroke:"currentColor",strokeWidth:"0.5",fill:"none"})]}),"user-group":t.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}),assignments:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})]}),"people-group":t.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}),"users-line":t.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}),"network-wired":t.jsx(t.Fragment,{children:t.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})}),building:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),"building-office":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),department:t.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}),organization:t.jsx("path",{d:"M10 3a1 1 0 011 1v5h3a1 1 0 110 2h-3v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h3V4a1 1 0 011-1z"}),sitemap:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L6 8.414l3.293 3.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"diagram-project":t.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 10-2 0v3a1 1 0 102 0v-3zm-5-3a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z",clipRule:"evenodd"}),shield:t.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"shield-check":t.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),key:t.jsx("path",{fillRule:"evenodd",d:"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",clipRule:"evenodd"}),hierarchy:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"}),"table-cells":t.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"}),table:t.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"}),clipboard:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),t.jsx("path",{fillRule:"evenodd",d:"M6 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2h-1a1 1 0 110-2h1a4 4 0 014 4v10a4 4 0 01-4 4H6a4 4 0 01-4-4V5a4 4 0 014-4h1a1 1 0 010 2H6z",clipRule:"evenodd"})]}),storage:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 6a1 1 0 100 2h10a1 1 0 100-2H5z",clipRule:"evenodd"}),database:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}),t.jsx("path",{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}),t.jsx("path",{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"})]}),cog:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),project:t.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",clipRule:"evenodd"}),code:t.jsx("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}),briefcase:t.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),cube:t.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"}),product:t.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"}),chart:t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),analytics:t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),"chart-bar":t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),"currency-yen":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h2.535l.465.78V13H8a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-1.22l.465-.78H15a1 1 0 100-2h-.633l1.49-2.485a1 1 0 10-1.714-1.03L12 8.763 9.858 5.485z",clipRule:"evenodd"}),price:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),notification:t.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}),"check-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),puzzle:t.jsx("path",{d:"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"}),palette:t.jsx("path",{fillRule:"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0v-1a1 1 0 011-1h1a1 1 0 100-2H9a1 1 0 01-1-1V9a1 1 0 012 0v1h.5a2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2H4zm1 5a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM8 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),"device-mobile":t.jsx("path",{fillRule:"evenodd",d:"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),envelope:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),comment:t.jsx("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"}),comments:t.jsx("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V5zm8 0H4v10.586L6.586 13H10V5z",clipRule:"evenodd"}),message:t.jsx("path",{d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}),inbox:t.jsx("path",{fillRule:"evenodd",d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",clipRule:"evenodd"}),"paper-plane":t.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}),video:t.jsx("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}),music:t.jsx("path",{d:"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}),photo:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}),film:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",clipRule:"evenodd"}),microphone:t.jsx("path",{fillRule:"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",clipRule:"evenodd"}),document:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),"folder-open":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",clipRule:"evenodd"}),t.jsx("path",{d:"M6 12a1 1 0 00-1 1v5a1 1 0 001 1h11.828a2 2 0 001.414-.586l.828-.828A2 2 0 0019.656 15H8a1 1 0 01-1-1v-2H6z"})]}),"shopping-cart":t.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}),"credit-card":t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),t.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),tag:t.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),tags:t.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),cart:t.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"}),wallet:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),t.jsx("path",{fillRule:"evenodd",d:"M2 9v5a2 2 0 002 2h12a2 2 0 002-2V9H2zm11 3a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",clipRule:"evenodd"})]}),receipt:t.jsx("path",{d:"M5 2a1 1 0 00-1 1v14l3.5-2 3.5 2 3.5-2 3.5 2V3a1 1 0 00-1-1H5zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H8z"}),"share-alt":t.jsx("path",{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}),"thumbs-up":t.jsx("path",{d:"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"}),"thumbs-down":t.jsx("path",{d:"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"}),flag:t.jsx("path",{fillRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),retweet:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),"calendar-alt":t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),"calendar-check":t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm7.707 7.707a1 1 0 00-1.414-1.414L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),stopwatch:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}),hourglass:t.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"}),history:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),map:t.jsx("path",{fillRule:"evenodd",d:"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 2.293A1 1 0 0018 3v10a1 1 0 01-.293.707L14 17.414V4.586l3.707-3.707z",clipRule:"evenodd"}),"map-marker":t.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}),compass:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",clipRule:"evenodd"}),globe:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",clipRule:"evenodd"}),navigation:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z",clipRule:"evenodd"}),sun:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}),moon:t.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}),cloud:t.jsx("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}),"cloud-rain":t.jsx("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8zM8 17a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),bolt:t.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"}),laptop:t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}),desktop:t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}),tablet:t.jsx("path",{fillRule:"evenodd",d:"M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 14V4h10v12H5z",clipRule:"evenodd"}),"mobile-alt":t.jsx("path",{fillRule:"evenodd",d:"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),keyboard:t.jsx("path",{fillRule:"evenodd",d:"M5 5a3 3 0 00-3 3v4a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3H5zM6 7h2v2H6V7zm3 0h2v2H9V7zm5 0h-2v2h2V7zm0 3h-2v2h2v-2zm-3 0H9v2h2v-2zM8 10H6v2h2v-2z",clipRule:"evenodd"}),mouse:t.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v8a4 4 0 108 0V6a4 4 0 00-4-4zM9 6a1 1 0 012 0v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),print:t.jsx("path",{fillRule:"evenodd",d:"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",clipRule:"evenodd"}),wifi:t.jsx("path",{fillRule:"evenodd",d:"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),bluetooth:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v5.586l2.707-2.707a1 1 0 011.414 1.414L12.414 10l2.707 2.707a1 1 0 01-1.414 1.414L11 11.414V17a1 1 0 11-2 0v-5.586L6.293 14.121a1 1 0 01-1.414-1.414L7.586 10 4.879 7.293a1 1 0 011.414-1.414L9 8.586V3a1 1 0 011-1z",clipRule:"evenodd"}),sliders:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"}),"toggle-on":t.jsx("path",{d:"M5 3a5 5 0 000 10h10a5 5 0 000-10H5zm0 2a3 3 0 100 6 3 3 0 000-6z"}),"toggle-off":t.jsx("path",{d:"M15 3a5 5 0 010 10H5A5 5 0 015 3h10zm0 2a3 3 0 100 6 3 3 0 000-6z"}),bars:t.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),ellipsis:t.jsx("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}),"ellipsis-v":t.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}),expand:t.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",clipRule:"evenodd"}),compress:t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}),"check-double":t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0zM12.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}),times:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),exclamation:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}),question:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),"minus-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),"plus-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"}),spinner:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z",clipRule:"evenodd"}),"arrow-circle-right":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",clipRule:"evenodd"}),"arrow-circle-left":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",clipRule:"evenodd"}),"arrow-circle-up":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",clipRule:"evenodd"}),"arrow-circle-down":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",clipRule:"evenodd"}),undo:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z",clipRule:"evenodd"}),redo:t.jsx("path",{fillRule:"evenodd",d:"M16 2a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 110-2h3.001A5.002 5.002 0 005.999 8.333 1 1 0 014.114 7.667 7.002 7.002 0 0115.899 5.101V3a1 1 0 011-1z",clipRule:"evenodd"}),"building-user":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),"clipboard-list":t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z",clipRule:"evenodd"})]}),tasks:t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),"file-contract":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),handshake:t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),"chart-line":t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L6 8.414l3.293 3.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"chart-pie":t.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),book:t.jsx("path",{d:"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}),"graduation-cap":t.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"}),"bookmark-alt":t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",clipRule:"evenodd"}),pencil:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),pen:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),"heart-pulse":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),t.jsx("path",{d:"M7 10h2l1-2 1 4 1-2h2",stroke:"white",strokeWidth:"1.5",fill:"none"})]}),hospital:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm5 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V9a1 1 0 00-1-1zm2-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V9a1 1 0 00-1-1zm-4 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V15a1 1 0 00-1-1zm2-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V15a1 1 0 00-1-1z",clipRule:"evenodd"}),pills:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414l-3 3a1 1 0 001.415 1.414l3-3zM10 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),syringe:t.jsx("path",{fillRule:"evenodd",d:"M17.414 2.586a2 2 0 00-2.828 0L13 4.172V3a1 1 0 00-2 0v1.172l-1.586-1.586a1 1 0 00-1.414 1.414L9.586 5.758 6.343 9l-1.415 1.414a1 1 0 101.415 1.415L7.758 10.243 11 7l1.586 1.586a1 1 0 001.414-1.414L12.414 5.586 14 4a.5.5 0 01.707 0l2.707 2.707a.5.5 0 010 .707L15 9.828V11a1 1 0 102 0V9.828l1.586-1.586a2 2 0 000-2.828l-1.172-1.172z",clipRule:"evenodd"}),stethoscope:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a4 4 0 004 4h.586l-.293.293a1 1 0 001.414 1.414l2-2a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 1.414l.293.293H7a2 2 0 01-2-2V5a1 1 0 000-2h-.5A1.5 1.5 0 013 3zm14.5 4a2.5 2.5 0 00-2.5 2.5v2a2.5 2.5 0 005 0v-2a2.5 2.5 0 00-2.5-2.5z",clipRule:"evenodd"}),car:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),t.jsx("path",{fillRule:"evenodd",d:"M5.172 6.172A4 4 0 018 5h4a4 4 0 012.828 1.172l2.586 2.586A2 2 0 0118 10.414V14a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a2 2 0 01-2-2v-3.586a2 2 0 01.586-1.414l2.586-2.586zM8 7a2 2 0 00-1.414.586L4 10.172V13h12v-2.828l-2.586-2.586A2 2 0 0012 7H8z",clipRule:"evenodd"})]}),plane:t.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}),train:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm4 12a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM4 9h12V5H4v4z",clipRule:"evenodd"}),ship:t.jsx("path",{d:"M4 10l6-8 6 8h1l-1 8H4l-1-8h1zm2 1l1 6h6l1-6H6z"}),bicycle:t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 104 0V7a2 2 0 00-2-2zm12 0a2 2 0 00-2 2v8a2 2 0 104 0V7a2 2 0 00-2-2zM8.5 9L10 6l1.5 3H14v2h-2.5L10 14 8.5 11H6V9h2.5z",clipRule:"evenodd"}),truck:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),t.jsx("path",{fillRule:"evenodd",d:"M2 4a2 2 0 012-2h6a2 2 0 012 2v9h1.5a.5.5 0 00.5-.5V9l3 3v2.5a.5.5 0 00.5.5H17v1a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a2 2 0 01-2-2V4zm8 9V4H4v9h6z",clipRule:"evenodd"})]}),coffee:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4zm0 6a2 2 0 000 4h12a2 2 0 100-4H4zm0 6a2 2 0 000 4h12a2 2 0 100-4H4z",clipRule:"evenodd"}),pizza:t.jsx("path",{d:"M10 2L2 7l8 11 8-11-8-5zM8.5 8.5L10 6l1.5 2.5h2L10 13l-3.5-4.5h2z"}),utensils:t.jsx("path",{d:"M3 1a1 1 0 000 2v10a2 2 0 104 0V3a1 1 0 100-2H3zM14 3a1 1 0 011 1v9a1 1 0 11-2 0V4a1 1 0 011-1zM14 1a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1z"}),"wine-glass":t.jsx("path",{fillRule:"evenodd",d:"M6.5 2a1 1 0 000 2H7v.5A4.5 4.5 0 009 8.973V14H6a1 1 0 100 2h8a1 1 0 100-2h-3V8.973A4.5 4.5 0 0013 4.5V4h.5a1 1 0 100-2h-7z",clipRule:"evenodd"}),gamepad:t.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}),dice:t.jsx("path",{d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0 1 1 0 002 0zM7 8a1 1 0 11-2 0 1 1 0 012 0zm5 3a1 1 0 10-2 0 1 1 0 002 0zM8 13a1 1 0 11-2 0 1 1 0 012 0zm6-1a1 1 0 10-2 0 1 1 0 002 0z"}),trophy:t.jsx("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}),medal:t.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"}),crown:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42A1 1 0 0117 14H3a1 1 0 01-.952-1.069l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 012 0z",clipRule:"evenodd"}),wrench:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),hammer:t.jsx("path",{d:"M6 2l1.5 1.5L9 2l4 4-2 2 4 4-2 2-4-4-2 2-4-4 2-2 1.5 1.5L6 2z"}),screwdriver:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),tools:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),cogs:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})};return t.jsx("svg",{className:`icon icon--${e} icon--${r} ${a}`,width:o,height:o,viewBox:"0 0 20 20",fill:n||"currentColor",onClick:s,style:{cursor:s?"pointer":"default",...l},"aria-hidden":"true",children:c[e]||c.info})},Ug=()=>t.jsxs("div",{className:"pages-container",children:[t.jsxs("div",{className:"pages-header",children:[t.jsx("h1",{className:"pages-title",children:"汎用画面テンプレート"}),t.jsx("p",{className:"pages-subtitle",children:"データ駆動型の画面を素早く構築できる汎用テンプレート集"})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)",paddingBottom:"var(--spacing-2)",borderBottom:"2px solid var(--color-neutral-400)"},children:"構成要素（基本パーツ）"}),t.jsxs("div",{className:"pages-grid",children:[t.jsxs(kt,{to:"/buttons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"plus-circle",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ボタン"}),t.jsx("p",{className:"page-card-description",children:"様々なスタイルとサイズのボタンコンポーネント"})]}),t.jsxs(kt,{to:"/forms",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"edit",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"フォーム"}),t.jsx("p",{className:"page-card-description",children:"入力フィールド、セレクト、チェックボックスなど"})]}),t.jsxs(kt,{to:"/messages",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"comment",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"メッセージ"}),t.jsx("p",{className:"page-card-description",children:"アラート、通知、モーダルなどのメッセージコンポーネント"})]}),t.jsxs(kt,{to:"/tables",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"table",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"テーブル"}),t.jsx("p",{className:"page-card-description",children:"データ表示用のテーブルコンポーネント"})]}),t.jsxs(kt,{to:"/navigation",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"menu",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-card-description",children:"タブ、ブレッドクラム、ページネーションなど"})]}),t.jsxs(kt,{to:"/layout",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"grid",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"レイアウト"}),t.jsx("p",{className:"page-card-description",children:"カード、グリッド、サイドバーなどのレイアウトコンポーネント"})]}),t.jsxs(kt,{to:"/icons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"star",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"アイコン"}),t.jsx("p",{className:"page-card-description",children:"200個以上のSVGアイコンライブラリ"})]}),t.jsxs(kt,{to:"/components",className:"page-card",style:{background:"var(--color-neutral-50)",borderColor:"var(--color-neutral-300)"},children:[t.jsx("div",{className:"page-card-icon",style:{background:"var(--color-neutral-200)"},children:t.jsx(z,{name:"cube",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"すべての構成要素を見る"}),t.jsx("p",{className:"page-card-description",children:"基本パーツの一覧ページへ移動"})]})]})]})]}),qg=()=>t.jsxs("div",{className:"pages-container",children:[t.jsxs("div",{className:"pages-header",children:[t.jsx("h1",{className:"pages-title",children:"構成要素 - 基本パーツカタログ"}),t.jsx("p",{className:"pages-subtitle",children:"汎用テンプレートで使用される基本的なUIコンポーネント"})]}),t.jsxs("div",{className:"pages-grid",children:[t.jsxs(kt,{to:"/buttons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"plus-circle",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ボタン"}),t.jsx("p",{className:"page-card-description",children:"様々なスタイルとサイズのボタンコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Primary"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Secondary"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Danger"})]})]}),t.jsxs(kt,{to:"/forms",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"edit",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"フォーム"}),t.jsx("p",{className:"page-card-description",children:"入力フィールド、セレクト、チェックボックスなど"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Input"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Select"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Checkbox"})]})]}),t.jsxs(kt,{to:"/messages",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"comment",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"メッセージ"}),t.jsx("p",{className:"page-card-description",children:"アラート、通知、モーダルなどのメッセージコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Alert"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Modal"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Toast"})]})]}),t.jsxs(kt,{to:"/tables",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"table",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"テーブル"}),t.jsx("p",{className:"page-card-description",children:"データ表示用のテーブルコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"DataTable"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Pagination"})]})]}),t.jsxs(kt,{to:"/navigation",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"menu",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-card-description",children:"タブ、ブレッドクラム、ページネーションなど"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Tab"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Breadcrumb"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Dropdown"})]})]}),t.jsxs(kt,{to:"/layout",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"grid",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"レイアウト"}),t.jsx("p",{className:"page-card-description",children:"カード、グリッド、サイドバーなどのレイアウトコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Card"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Grid"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Sidebar"})]})]}),t.jsxs(kt,{to:"/icons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(z,{name:"star",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"アイコン"}),t.jsx("p",{className:"page-card-description",children:"200個以上のSVGアイコンライブラリ"}),t.jsx("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"200+ Icons"})})]})]})]}),Qg=({className:e="",disabled:r,children:n,dusk:a,...s})=>{const l=["primary-btn",e].filter(Boolean).join(" ");return t.jsx("button",{...s,className:l,disabled:r,dusk:a,children:n})},Jr=re.memo(Qg);function Nt({type:e="button",className:r="",disabled:n,children:a,...s}){return t.jsx("button",{...s,type:e,className:`inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-25 ${n&&"opacity-25"} `+r,style:{borderRadius:"var(--radius-md)",...s.style},disabled:n,children:a})}function zl({className:e="",disabled:r,children:n,...a}){return t.jsx("button",{...a,className:`inline-flex items-center border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${r&&"opacity-25"} `+e,style:{borderRadius:"var(--radius-md)",...a.style},disabled:r,children:n})}const Yg=()=>{const[e,r]=u.useState(!1),n=()=>{r(!0),setTimeout(()=>r(!1),2e3)};return t.jsxs("div",{className:"buttons-page",children:[t.jsx("style",{children:`
        .buttons-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-3);
          align-items: center;
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"ボタンコンポーネント"}),t.jsx("p",{className:"page-description",children:"統一されたボタンコンポーネント群。 プライマリ、セカンダリ、デンジャーの3つのバリエーションを提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ボタンコンポーネント"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton"}),t.jsx("p",{className:"component-description",children:"メインアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Jr,{onClick:()=>alert("保存処理を実行します"),children:"保存する"})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton onClick={handleSave}>
  保存する
</PrimaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SecondaryButton"}),t.jsx("p",{className:"component-description",children:"サブアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Nt,{onClick:()=>alert("キャンセル処理を実行します"),children:"キャンセル"})}),t.jsx("div",{className:"code-snippet",children:`<SecondaryButton onClick={handleCancel}>
  キャンセル
</SecondaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DangerButton"}),t.jsx("p",{className:"component-description",children:"危険なアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(zl,{onClick:()=>confirm("本当に削除しますか？"),children:"削除する"})}),t.jsx("div",{className:"code-snippet",children:`<DangerButton onClick={handleDelete}>
  削除する
</DangerButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton (disabled)"}),t.jsx("p",{className:"component-description",children:"無効状態のボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Jr,{disabled:!0,children:"無効なボタン"})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton disabled>
  無効なボタン
</PrimaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton (processing)"}),t.jsx("p",{className:"component-description",children:"処理中状態のボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Jr,{disabled:!0,onClick:n,children:"処理中..."})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton disabled>
  処理中...
</PrimaryButton>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"アイコン付きボタン例"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"アイコン付きボタンの使用例"}),t.jsx("p",{className:"component-description",children:"ボタンにアイコンを組み合わせた実用的な例"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs(Jr,{children:[t.jsx(z,{name:"check",className:"w-4 h-4 inline mr-2"}),"保存"]}),t.jsxs(Nt,{children:[t.jsx(z,{name:"close",className:"w-4 h-4 inline mr-2"}),"キャンセル"]}),t.jsxs(zl,{children:[t.jsx(z,{name:"delete",className:"w-4 h-4 inline mr-2"}),"削除"]})]}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton onClick={handleSave}>
  <Icon name="check" className="w-4 h-4 inline mr-2" />
  保存
</PrimaryButton>

<SecondaryButton onClick={handleCancel}>
  <Icon name="close" className="w-4 h-4 inline mr-2" />
  キャンセル
</SecondaryButton>

<DangerButton onClick={handleDelete}>
  <Icon name="delete" className="w-4 h-4 inline mr-2" />
  削除
</DangerButton>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用方法"}),t.jsxs("div",{className:"component-card",children:[t.jsx("div",{className:"component-info",children:t.jsx("h3",{className:"component-name",children:"インポートと基本的な使用方法"})}),t.jsx("div",{className:"code-snippet",children:`// インポート
import PrimaryButton from '../../../components/buttons/PrimaryButton.jsx';
import SecondaryButton from '../../../components/buttons/SecondaryButton.jsx';
import DangerButton from '../../../components/buttons/DangerButton.jsx';
import Icon from '../../../components/icons/Icon.jsx';

// 基本的な使用
function MyComponent() {
  const handleSave = () => {
    // 保存処理
  };

  const handleCancel = () => {
    // キャンセル処理
  };

  const handleDelete = () => {
    // 削除処理
  };

  return (
    <div>
      <PrimaryButton onClick={handleSave}>
        保存
      </PrimaryButton>

      <SecondaryButton onClick={handleCancel}>
        キャンセル
      </SecondaryButton>

      <DangerButton onClick={handleDelete}>
        削除
      </DangerButton>
    </div>
  );
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"PrimaryButtonは1ページに1つまでの使用を推奨します"}),t.jsx("li",{children:"DangerButtonは削除や取り消し不可能なアクションに使用してください"}),t.jsx("li",{children:"SecondaryButtonは補助的なアクションに適しています"}),t.jsx("li",{children:"disabledプロパティでボタンを無効化できます"}),t.jsx("li",{children:"アイコンと組み合わせることでより直感的なUIを作成できます"})]})})]})]})},Kg=({label:e,type:r="text",name:n,value:a="",onChange:s,placeholder:l,required:i=!1,disabled:o=!1,error:c="",helper:d="",icon:p=null,size:h="md",fullWidth:f=!1,className:b="",id:j,borderColor:y,...w})=>{const[v,g]=u.useState(!1),[m,x]=u.useState(!1),N=j||`input-${n}`,C=r==="password"&&m?"text":r,k=["form-input",`form-input--${h}`,c&&"form-input--error",f&&"form-input--full-width",p&&"form-input--with-icon",r==="password"&&"form-input--password",b].filter(Boolean).join(" "),R=["form-group",f&&"form-group--full-width"].filter(Boolean).join(" ");return t.jsxs("div",{className:R,children:[e&&t.jsx("label",{htmlFor:N,className:`form-label ${i?"form-label--required":""}`,children:e}),t.jsxs("div",{className:"form-input-wrapper",children:[p&&t.jsx("span",{className:"form-input__icon",children:p}),t.jsx("input",{id:N,type:C,name:n,value:a,onChange:s,placeholder:l,disabled:o,className:k,style:y?{borderColor:y}:void 0,onFocus:()=>g(!0),onBlur:()=>g(!1),"aria-invalid":!!c,"aria-describedby":c?`${N}-error`:d?`${N}-helper`:void 0,...w}),r==="password"&&t.jsx("button",{type:"button",className:"form-input__toggle-password",onClick:()=>x(!m),"aria-label":m?"パスワードを非表示":"パスワードを表示",tabIndex:-1,children:t.jsx(z,{name:m?"eye-off":"eye",style:{width:"18px",height:"18px"}})})]}),c&&t.jsxs("div",{id:`${N}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),c]}),d&&!c&&t.jsx("div",{id:`${N}-helper`,className:"form-helper",children:d})]})},Xg=({label:e,name:r,value:n="",onChange:a,placeholder:s,required:l=!1,disabled:i=!1,error:o="",helper:c="",rows:d=4,fullWidth:p=!1,className:h="",id:f,...b})=>{const j=f||`textarea-${r}`,y=["form-textarea",o&&"form-textarea--error",p&&"form-textarea--full-width",h].filter(Boolean).join(" ");return t.jsxs("div",{className:`form-group ${p?"form-group--full-width":""}`,children:[e&&t.jsx("label",{htmlFor:j,className:`form-label ${l?"form-label--required":""}`,children:e}),t.jsx("textarea",{id:j,name:r,value:n,onChange:a,placeholder:s,disabled:i,rows:d,className:y,"aria-invalid":!!o,"aria-describedby":o?`${j}-error`:c?`${j}-helper`:void 0,...b}),o&&t.jsxs("div",{id:`${j}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),o]}),c&&!o&&t.jsx("div",{id:`${j}-helper`,className:"form-helper",children:c})]})},Gg=({label:e,name:r,value:n="",onChange:a,options:s=[],placeholder:l="選択してください",required:i=!1,disabled:o=!1,error:c="",helper:d="",fullWidth:p=!1,className:h="",id:f,...b})=>{const j=f||`select-${r}`,y=["form-select",c&&"form-select--error",p&&"form-select--full-width",h].filter(Boolean).join(" ");return t.jsxs("div",{className:`form-group ${p?"form-group--full-width":""}`,children:[e&&t.jsx("label",{htmlFor:j,className:`form-label ${i?"form-label--required":""}`,children:e}),t.jsxs("select",{id:j,name:r,value:n,onChange:a,disabled:o,className:y,"aria-invalid":!!c,"aria-describedby":c?`${j}-error`:d?`${j}-helper`:void 0,...b,children:[t.jsx("option",{value:"",children:l}),s.map(w=>t.jsx("option",{value:w.value,children:w.label},w.value))]}),c&&t.jsxs("div",{id:`${j}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),c]}),d&&!c&&t.jsx("div",{id:`${j}-helper`,className:"form-helper",children:d})]})},_e=re.memo(Kg);function jr({className:e="",...r}){return t.jsx("input",{...r,type:"checkbox",style:{borderColor:"rgb(209, 213, 219)",borderRadius:"4px",...r.style||{}},className:"text-indigo-600 shadow-sm focus:ring-indigo-500 "+e})}const bm=({label:e,name:r,value:n=[],options:a=[],onChange:s,onBlur:l,placeholder:i="選択してください",error:o,helper:c,disabled:d=!1,required:p=!1,className:h="",fullWidth:f=!0})=>{const[b,j]=u.useState(!1),y=u.useRef(null);u.useEffect(()=>{const m=x=>{y.current&&!y.current.contains(x.target)&&(j(!1),l&&l())};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[l]);const w=m=>{if(d)return;const x=n.includes(m)?n.filter(N=>N!==m):[...n,m];s(x)},v=()=>{d||j(!b)},g=()=>n.length===0?i:a.filter(x=>n.includes(x.value)).map(x=>x.label).join(", ");return t.jsxs("div",{className:`form-group ${f?"form-group--full":""} ${h}`,children:[e&&t.jsx("label",{htmlFor:r,className:`form-label ${p?"form-label--required":""}`,children:e}),t.jsxs("div",{ref:y,className:`select-box ${b?"select-box--open":""} ${o?"select-box--error":""} ${d?"select-box--disabled":""}`,children:[t.jsxs("div",{className:"select-box__trigger",onClick:v,role:"button","aria-haspopup":"listbox","aria-expanded":b,"aria-label":e,tabIndex:d?-1:0,onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),v())},children:[t.jsx("span",{className:"select-box__value",children:g()}),t.jsx(z,{name:b?"chevron-up":"chevron-down",className:"select-box__icon"})]}),b&&t.jsx("div",{className:"select-box__dropdown",role:"listbox",children:a.map(m=>{const x=n.includes(m.value);return t.jsxs("div",{className:`select-box__option ${x?"select-box__option--selected":""}`,onClick:()=>w(m.value),role:"option","aria-selected":x,children:[t.jsx("input",{type:"checkbox",checked:x,onChange:()=>{},tabIndex:-1,className:"select-box__checkbox"}),t.jsx("span",{className:"select-box__label",children:m.label})]},m.value)})})]}),c&&!o&&t.jsx("div",{className:"form-helper",children:c}),o&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),o]}),t.jsx("style",{children:`
        .select-box {
          position: relative;
          width: 100%;
        }

        .select-box__trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3);
          background-color: var(--color-neutral-white);
          border: 1px solid rgb(209, 213, 219);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          cursor: pointer;
          transition: all var(--duration-fast) var(--ease-out);
          min-height: 42px;
        }

        .select-box__trigger:hover {
          border-color: var(--color-primary-500);
        }

        .select-box__trigger:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        .select-box--open .select-box__trigger {
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .select-box--error .select-box__trigger {
          border-color: var(--color-error-500);
        }

        .select-box--disabled .select-box__trigger {
          background-color: var(--color-neutral-100);
          cursor: not-allowed;
          opacity: 0.6;
        }

        .select-box__value {
          flex: 1;
          color: var(--color-neutral-900);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .select-box__icon {
          width: 16px;
          height: 16px;
          color: var(--color-neutral-500);
          flex-shrink: 0;
          margin-left: var(--spacing-2);
          transition: transform var(--duration-fast) var(--ease-out);
        }

        .select-box--open .select-box__icon {
          transform: rotate(180deg);
        }

        .select-box__dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background-color: var(--color-neutral-white);
          border: 1px solid rgb(209, 213, 219);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          max-height: 240px;
          overflow-y: auto;
          z-index: var(--z-index-dropdown);
          animation: slideDown 0.15s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .select-box__option {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-3);
          cursor: pointer;
          transition: background-color var(--duration-fast) var(--ease-out);
        }

        .select-box__option:hover {
          background-color: var(--color-neutral-50);
        }

        .select-box__option--selected {
          background-color: var(--color-primary-50);
        }

        .select-box__option--selected:hover {
          background-color: var(--color-primary-100);
        }

        .select-box__checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .select-box__label {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-900);
        }

        .select-box__option--selected .select-box__label {
          font-weight: var(--font-weight-medium);
          color: var(--color-primary-700);
        }
      `})]})},Jg=()=>{var md,hd;const[e,r]=u.useState({name:"",email:"",password:"",message:"",prefecture:"",gender:"",priority:"",notifications:!1,darkMode:!1,agreeToTerms:!1,newsletter:!1}),[n,a]=u.useState({}),[s,l]=u.useState(""),[i,o]=u.useState({status:"all",category:"all"}),[c,d]=u.useState(!0),[p,h]=u.useState(50),[f,b]=u.useState([20,80]),[j,y]=u.useState(["react","javascript"]),[w,v]=u.useState(["react","javascript","typescript","nodejs","css"]),[g,m]=u.useState(""),[x,N]=u.useState([]),[C,k]=u.useState(""),[R,I]=u.useState(["tokyo","remote"]),_=()=>{const F={};return e.name.trim()||(F.name="お名前を入力してください"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(F.email="有効なメールアドレスを入力してください"):F.email="メールアドレスを入力してください",e.password?e.password.length<8&&(F.password="パスワードは8文字以上で入力してください"):F.password="パスワードを入力してください",q.trim()||(F.skills="スキルを入力してください"),g||(F.startDate="開始日を選択してください"),x.length===0&&(F.files="ファイルを選択してください"),C.trim()?C.length>200&&(F.description="詳細説明は200文字以内で入力してください"):F.description="詳細説明を入力してください",e.gender||(F.gender="性別を選択してください"),a(F),Object.keys(F).length===0},[P,T]=u.useState(0),[$,W]=u.useState(0),[Q,L]=u.useState(0),[A,M]=u.useState(""),[D,V]=u.useState([]),[q,O]=u.useState(""),[X,G]=u.useState(!1),[ee,B]=u.useState("mySecretPassword123"),[te,fe]=u.useState(""),[ge,Qe]=u.useState(!1),[Ye,Ke]=u.useState(!1),[S,U]=u.useState("basic"),[ce,oe]=u.useState(""),[$t,E]=u.useState(""),[J,he]=u.useState(""),[Re,jt]=u.useState([]),[Ze,de]=u.useState(["React"]),[se,K]=u.useState(["新着","おすすめ"]),[me,at]=u.useState([]),[ye,De]=u.useState(""),[Ve,ft]=u.useState([]),[ze,it]=u.useState(""),Ce=({children:F,content:ae,position:le="top"})=>{const[ve,Ne]=u.useState(!1),ie={top:{bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px"},bottom:{top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:"8px"},left:{top:"50%",right:"100%",transform:"translateY(-50%)",marginRight:"8px"},right:{top:"50%",left:"100%",transform:"translateY(-50%)",marginLeft:"8px"}};return t.jsxs("div",{style:{position:"relative",display:"inline-block"},onMouseEnter:()=>Ne(!0),onMouseLeave:()=>Ne(!1),onFocus:()=>Ne(!0),onBlur:()=>Ne(!1),children:[F,ve&&t.jsxs("div",{style:{position:"absolute",...ie[le],background:"var(--color-neutral-900)",color:"white",padding:"var(--spacing-1) var(--spacing-2)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",lineHeight:"var(--line-height-tight)",whiteSpace:"nowrap",zIndex:1e3,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",opacity:ve?1:0,transition:"opacity 0.2s ease-in-out",pointerEvents:"none"},role:"tooltip","aria-label":ae,children:[ae,t.jsx("div",{style:{position:"absolute",width:0,height:0,...le==="top"&&{top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderTop:"4px solid var(--color-neutral-900)"},...le==="bottom"&&{bottom:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderBottom:"4px solid var(--color-neutral-900)"},...le==="left"&&{top:"50%",left:"100%",transform:"translateY(-50%)",borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"4px solid var(--color-neutral-900)"},...le==="right"&&{top:"50%",right:"100%",transform:"translateY(-50%)",borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderRight:"4px solid var(--color-neutral-900)"}}})]})]})},gt=({items:F,selected:ae,onSelectionChange:le,removable:ve=!0,onRemove:Ne})=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:F.map((ie,We)=>t.jsxs("div",{onClick:()=>le&&le(ie),style:{display:"inline-flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-1) var(--spacing-3)",backgroundColor:ae.includes(ie)?"rgb(21, 52, 109)":"var(--color-neutral-200)",color:ae.includes(ie)?"white":"var(--color-neutral-700)",borderRadius:"var(--radius-full)",fontSize:"var(--font-size-sm)",cursor:le?"pointer":"default",transition:"all 0.2s",border:"none"},children:[t.jsx("span",{children:ie}),ve&&Ne&&t.jsx("button",{onClick:je=>{je.stopPropagation(),Ne(ie)},style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:"0",fontSize:"var(--font-size-xs)",fontWeight:"bold"},children:"×"})]},We))}),Ct=({checked:F,onChange:ae,label:le,size:ve="md"})=>{const ie={sm:{width:32,height:18,knobSize:14,translateX:14},md:{width:44,height:24,knobSize:18,translateX:20},lg:{width:56,height:32,knobSize:26,translateX:24}}[ve];return t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",cursor:"pointer"},children:[t.jsx("div",{style:{position:"relative",width:`${ie.width}px`,height:`${ie.height}px`,backgroundColor:F?"rgb(21, 52, 109)":"var(--color-neutral-300)",borderRadius:`${ie.height}px`,transition:"all 0.3s",cursor:"pointer"},children:t.jsx("div",{style:{position:"absolute",top:"50%",left:F?`${ie.translateX}px`:"3px",width:`${ie.knobSize}px`,height:`${ie.knobSize}px`,backgroundColor:"white",borderRadius:"50%",transform:"translateY(-50%)",transition:"all 0.3s",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"}})}),t.jsx("input",{type:"checkbox",checked:F,onChange:ae,style:{display:"none"}}),le&&t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:le})]})},zr=({value:F,onChange:ae,label:le,error:ve,required:Ne=!1})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[le&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[le," ",Ne&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("input",{type:"date",value:F,onChange:ie=>ae(ie.target.value),style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:`1px solid ${ve?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"},onFocus:ie=>{ie.target.style.borderColor=ve?"var(--color-error-500)":"rgb(21, 52, 109)",ie.target.style.boxShadow=ve?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:ie=>{ie.target.style.borderColor=ve?"var(--color-error-500)":"var(--color-neutral-300)",ie.target.style.boxShadow="none"}}),ve&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:ve})]}),Fr=({onFilesChange:F,multiple:ae=!1,accept:le,label:ve,error:Ne,required:ie=!1})=>{const[We,je]=u.useState(!1),Me=u.useRef(null),ot=ke=>{const et=Array.from(ke);F(et)},ct=ke=>{ke.preventDefault(),je(!1);const et=ke.dataTransfer.files;ot(et)},Lt=ke=>{ke.preventDefault(),je(!0)},_t=ke=>{ke.preventDefault(),je(!1)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[ve&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[ve," ",ie&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("div",{onDrop:ct,onDragOver:Lt,onDragLeave:_t,onClick:()=>{var ke;return(ke=Me.current)==null?void 0:ke.click()},style:{border:`2px dashed ${We?"rgb(21, 52, 109)":Ne?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",padding:"var(--spacing-6)",textAlign:"center",cursor:"pointer",background:We?"rgba(21, 52, 109, 0.05)":"var(--color-neutral-50)",transition:"all 0.2s",minHeight:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"upload",style:{width:"32px",height:"32px",color:"var(--color-neutral-500)"}}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"ファイルをドラッグ&ドロップまたはクリックして選択"}),t.jsxs("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:[le&&`対応形式: ${le}`,ae&&"（複数ファイル選択可）"]}),t.jsx("input",{ref:Me,type:"file",multiple:ae,accept:le,onChange:ke=>ot(ke.target.files),style:{display:"none"}})]}),Ne&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:Ne})]})},Tt=({value:F,onChange:ae,placeholder:le,rows:ve=4,label:Ne,error:ie,required:We=!1,maxLength:je})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[Ne&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[Ne," ",We&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("textarea",{value:F,onChange:Me=>ae(Me.target.value),placeholder:le,rows:ve,maxLength:je,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${ie?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none",fontFamily:"inherit",resize:"vertical",lineHeight:"var(--line-height-relaxed)"},onFocus:Me=>{Me.target.style.borderColor=ie?"var(--color-error-500)":"rgb(21, 52, 109)",Me.target.style.boxShadow=ie?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:Me=>{Me.target.style.borderColor=ie?"var(--color-error-500)":"var(--color-neutral-300)",Me.target.style.boxShadow="none"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[ie?t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)"},children:ie}):t.jsx("div",{}),je&&t.jsxs("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:[F.length,"/",je]})]})]}),js=({value:F,onChange:ae,suggestions:le=[],placeholder:ve,label:Ne,error:ie,required:We=!1,maxSuggestions:je=5})=>{const[Me,ot]=u.useState(F||""),[ct,Lt]=u.useState([]),[_t,ke]=u.useState(!1),[et,Oe]=u.useState(-1),Ot=u.useRef(null),At=u.useRef(null),pt=le.length>0?le:["東京都","大阪府","愛知県","神奈川県","埼玉県","千葉県","兵庫県","北海道","福岡県","静岡県","JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go"];u.useEffect(()=>{ot(F||"")},[F]);const Ut=Ue=>{const st=Ue.target.value;if(ot(st),st.length>0){const ws=pt.filter(ii=>ii.toLowerCase().includes(st.toLowerCase())).slice(0,je);Lt(ws),ke(ws.length>0)}else Lt([]),ke(!1);Oe(-1),ae&&ae(st)},Vn=Ue=>{ot(Ue),ke(!1),Oe(-1),ae&&ae(Ue)},si=Ue=>{if(_t)switch(Ue.key){case"ArrowDown":Ue.preventDefault(),Oe(st=>st<ct.length-1?st+1:st);break;case"ArrowUp":Ue.preventDefault(),Oe(st=>st>0?st-1:-1);break;case"Enter":Ue.preventDefault(),et>=0&&Vn(ct[et]);break;case"Escape":ke(!1),Oe(-1);break}},li=Ue=>{At.current&&At.current.contains(Ue.relatedTarget)||setTimeout(()=>{ke(!1),Oe(-1)},100)};return t.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[Ne&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[Ne," ",We&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("input",{ref:Ot,type:"text",value:Me,onChange:Ut,onKeyDown:si,onBlur:li,onFocus:Ue=>{ct.length>0&&ke(!0),Ue.target.style.borderColor=ie?"var(--color-error-500)":"rgb(21, 52, 109)",Ue.target.style.boxShadow=ie?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},placeholder:ve,style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:`1px solid ${ie?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"}}),_t&&t.jsx("div",{ref:At,style:{position:"absolute",top:"100%",left:0,right:0,backgroundColor:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:1e3,maxHeight:"200px",overflowY:"auto"},children:ct.map((Ue,st)=>t.jsx("div",{onClick:()=>Vn(Ue),style:{padding:"var(--spacing-2) var(--spacing-3)",cursor:"pointer",fontSize:"var(--font-size-sm)",backgroundColor:st===et?"var(--color-primary-50)":"transparent",color:st===et?"rgb(21, 52, 109)":"var(--color-neutral-700)",borderBottom:st<ct.length-1?"1px solid var(--color-neutral-100)":"none",transition:"all 0.2s"},onMouseEnter:()=>Oe(st),onMouseLeave:()=>Oe(-1),children:Ue},st))})]}),ie&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:ie})]})},Y=({value:F,onChange:ae,max:le=5,icon:ve="star",size:Ne="md",label:ie,readOnly:We=!1,showValue:je=!1})=>{const[Me,ot]=u.useState(0),ct={sm:{width:"16px",height:"16px"},md:{width:"24px",height:"24px"},lg:{width:"32px",height:"32px"}},Lt=ct[Ne]||ct.md,_t=Ot=>{!We&&ae&&ae(Ot)},ke=Ot=>{We||ot(Ot)},et=()=>{We||ot(0)},Oe=Ot=>{if(Ot<=(Me||F))switch(ve){case"heart":return"#ef4444";case"thumb":return"#10b981";default:return"#fbbf24"}return"#d1d5db"};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[ie&&t.jsx("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:ie}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("div",{style:{display:"flex",gap:"var(--spacing-1)"},children:Array.from({length:le},(Ot,At)=>{const pt=At+1;return t.jsx("button",{type:"button",onClick:()=>_t(pt),onMouseEnter:()=>ke(pt),onMouseLeave:et,disabled:We,style:{background:"none",border:"none",cursor:We?"default":"pointer",padding:"var(--spacing-1)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius-sm)",transition:"all 0.2s"},children:t.jsx(z,{name:ve,style:{...Lt,color:Oe(pt),transition:"color 0.2s"}})},At)})}),je&&t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginLeft:"var(--spacing-2)"},children:[F,"/",le]})]})]})},ue=({value:F,onChange:ae,min:le=0,max:ve=100,step:Ne=1,showLabel:ie=!1,color:We="primary",size:je="medium",disabled:Me=!1})=>{const ot=(F-le)/(ve-le)*100,ct={primary:"rgb(21, 52, 109)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},Lt={small:{height:"4px",thumbSize:"12px"},medium:{height:"6px",thumbSize:"16px"},large:{height:"8px",thumbSize:"20px"}},_t=ct[We]||ct.primary,ke=Lt[je]||Lt.medium;return t.jsxs("div",{style:{width:"100%",opacity:Me?.6:1},children:[ie&&t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:[t.jsxs("span",{children:["値: ",F]}),t.jsxs("span",{children:[le," - ",ve]})]}),t.jsxs("div",{style:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center",cursor:Me?"not-allowed":"pointer"},children:[t.jsx("div",{style:{width:"100%",height:ke.height,backgroundColor:"var(--color-neutral-200)",borderRadius:ke.height,position:"relative"},children:t.jsx("div",{style:{width:`${ot}%`,height:"100%",backgroundColor:Me?"var(--color-neutral-400)":_t,borderRadius:ke.height,transition:"width 0.2s"}})}),t.jsx("input",{type:"range",min:le,max:ve,step:Ne,value:F,disabled:Me,onChange:et=>ae(Number(et.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:Me?"not-allowed":"pointer",margin:0,padding:0}}),t.jsx("div",{style:{position:"absolute",left:`${ot}%`,transform:"translateX(-50%)",width:ke.thumbSize,height:ke.thumbSize,backgroundColor:Me?"var(--color-neutral-400)":_t,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:Me?"not-allowed":"pointer",transition:"left 0.2s"}})]})]})},Pe=({value:F=[0,100],onChange:ae,min:le=0,max:ve=100,step:Ne=1,color:ie="primary",size:We="medium",disabled:je=!1})=>{const[Me,ot]=F,ct=(Me-le)/(ve-le)*100,Lt=(ot-le)/(ve-le)*100,_t={primary:"rgb(21, 52, 109)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},ke={small:{height:"4px",thumbSize:"12px"},medium:{height:"6px",thumbSize:"16px"},large:{height:"8px",thumbSize:"20px"}},et=_t[ie]||_t.primary,Oe=ke[We]||ke.medium,Ot=pt=>{const Ut=Math.min(pt,ot-Ne);ae([Ut,ot])},At=pt=>{const Ut=Math.max(pt,Me+Ne);ae([Me,Ut])};return t.jsx("div",{style:{width:"100%",opacity:je?.6:1},children:t.jsxs("div",{style:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center"},children:[t.jsx("div",{style:{width:"100%",height:Oe.height,backgroundColor:"var(--color-neutral-200)",borderRadius:Oe.height,position:"relative"},children:t.jsx("div",{style:{position:"absolute",left:`${ct}%`,width:`${Lt-ct}%`,height:"100%",backgroundColor:je?"var(--color-neutral-400)":et,borderRadius:Oe.height,transition:"all 0.2s"}})}),t.jsx("input",{type:"range",min:le,max:ve,step:Ne,value:Me,disabled:je,onChange:pt=>Ot(Number(pt.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:je?"not-allowed":"pointer",margin:0,padding:0,zIndex:1}}),t.jsx("input",{type:"range",min:le,max:ve,step:Ne,value:ot,disabled:je,onChange:pt=>At(Number(pt.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:je?"not-allowed":"pointer",margin:0,padding:0,zIndex:2}}),t.jsx("div",{style:{position:"absolute",left:`${ct}%`,transform:"translateX(-50%)",width:Oe.thumbSize,height:Oe.thumbSize,backgroundColor:je?"var(--color-neutral-400)":et,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:je?"not-allowed":"pointer",transition:"left 0.2s",zIndex:3}}),t.jsx("div",{style:{position:"absolute",left:`${Lt}%`,transform:"translateX(-50%)",width:Oe.thumbSize,height:Oe.thumbSize,backgroundColor:je?"var(--color-neutral-400)":et,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:je?"not-allowed":"pointer",transition:"left 0.2s",zIndex:4}})]})})},Hr=({options:F=[],value:ae="",onChange:le,placeholder:ve="選択してください...",searchPlaceholder:Ne="検索...",size:ie="medium",disabled:We=!1,multiple:je=!1,maxSelected:Me=null,clearable:ot=!0,searchable:ct=!0,loading:Lt=!1,noOptionsText:_t="オプションが見つかりません",style:ke={}})=>{const[et,Oe]=u.useState(!1),[Ot,At]=u.useState(""),[pt,Ut]=u.useState(-1),Vn=u.useRef(null),si=u.useRef(null),li=u.useRef(null);u.useEffect(()=>{const pe=Le=>{Vn.current&&!Vn.current.contains(Le.target)&&(Oe(!1),At(""),Ut(-1))};return document.addEventListener("mousedown",pe),()=>document.removeEventListener("mousedown",pe)},[]);const Ue=F.filter(pe=>(typeof pe=="string"?pe:pe.label).toLowerCase().includes(Ot.toLowerCase())),st=pe=>{const Le=typeof pe=="string"?pe:pe.value;if(je){const Jt=Array.isArray(ae)?ae:[];if(Jt.includes(Le))le(Jt.filter(ci=>ci!==Le));else{if(Me&&Jt.length>=Me)return;le([...Jt,Le])}}else le(Le),Oe(!1),At("");Ut(-1)},ws=pe=>{if(!et){(pe.key==="Enter"||pe.key===" "||pe.key==="ArrowDown")&&(pe.preventDefault(),Oe(!0),Ut(0));return}switch(pe.key){case"Escape":Oe(!1),At(""),Ut(-1);break;case"ArrowDown":pe.preventDefault(),Ut(Le=>Le<Ue.length-1?Le+1:0);break;case"ArrowUp":pe.preventDefault(),Ut(Le=>Le>0?Le-1:Ue.length-1);break;case"Enter":pe.preventDefault(),pt>=0&&pt<Ue.length&&st(Ue[pt]);break}},ii=pe=>{pe.stopPropagation(),le(je?[]:"")},ih=()=>{if(je){const pe=Array.isArray(ae)?ae:[];if(pe.length===0)return ve;if(pe.length===1){const Le=F.find(Jt=>(typeof Jt=="string"?Jt:Jt.value)===pe[0]);return typeof Le=="string"?Le:(Le==null?void 0:Le.label)||pe[0]}return`${pe.length}個選択済み`}else{if(!ae)return ve;const pe=F.find(Le=>(typeof Le=="string"?Le:Le.value)===ae);return typeof pe=="string"?pe:(pe==null?void 0:pe.label)||ae}},oh={small:{padding:"6px 12px",fontSize:"14px",minHeight:"32px"},medium:{padding:"8px 16px",fontSize:"16px",minHeight:"40px"},large:{padding:"12px 20px",fontSize:"18px",minHeight:"48px"}},ch={position:"relative",width:"100%",...ke},dh={width:"100%",border:"1px solid #d1d5db",borderRadius:"6px",backgroundColor:We?"#f9fafb":"#ffffff",color:We?"#9ca3af":"#374151",cursor:We?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"border-color 0.2s, box-shadow 0.2s",...oh[ie],...et&&{borderColor:"#2563eb",boxShadow:"0 0 0 3px rgba(37, 99, 235, 0.1)"}},uh={position:"absolute",top:"100%",left:0,right:0,backgroundColor:"white",border:"1px solid #d1d5db",borderTop:"none",borderRadius:"0 0 6px 6px",maxHeight:"200px",overflowY:"auto",zIndex:1e3,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},ph={width:"100%",padding:"8px 12px",border:"none",borderBottom:"1px solid #e5e7eb",fontSize:"14px",outline:"none"},mh=(pe,Le)=>({padding:"8px 12px",cursor:"pointer",backgroundColor:pt===Le?"#f3f4f6":"transparent",borderBottom:"1px solid #f3f4f6",display:"flex",alignItems:"center",justifyContent:"space-between"}),oi=je?Array.isArray(ae)?ae:[]:[];return t.jsxs("div",{ref:Vn,style:ch,children:[t.jsxs("div",{style:dh,onClick:()=>!We&&Oe(!et),onKeyDown:ws,tabIndex:We?-1:0,children:[t.jsx("span",{style:{color:!ae||je&&oi.length===0?"#9ca3af":"inherit"},children:ih()}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[ot&&(je&&oi.length>0||!je&&ae)&&t.jsx("button",{onClick:ii,style:{background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},children:t.jsx(z,{name:"x",style:{width:"16px",height:"16px"}})}),Lt?t.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #e5e7eb",borderTop:"2px solid #2563eb",borderRadius:"50%",animation:"spin 1s linear infinite"}}):t.jsx(z,{name:et?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"#6b7280",transition:"transform 0.2s"}})]})]}),et&&t.jsxs("div",{ref:si,style:uh,children:[ct&&t.jsx("input",{ref:li,type:"text",value:Ot,onChange:pe=>At(pe.target.value),placeholder:Ne,style:ph,autoFocus:!0}),Ue.length===0?t.jsx("div",{style:{padding:"12px",color:"#9ca3af",textAlign:"center",fontStyle:"italic"},children:_t}):Ue.map((pe,Le)=>{const Jt=typeof pe=="string"?pe:pe.value,ci=typeof pe=="string"?pe:pe.label,hh=je?oi.includes(Jt):ae===Jt;return t.jsxs("div",{style:mh(pe,Le),onClick:()=>st(pe),onMouseEnter:()=>Ut(Le),children:[t.jsx("span",{children:ci}),hh&&t.jsx(z,{name:"check",style:{width:"16px",height:"16px",color:"#2563eb"}})]},Jt)})]}),t.jsx("style",{jsx:!0,children:`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]})},bs={status:[{value:"all",label:"すべて"},{value:"active",label:"アクティブ"},{value:"inactive",label:"非アクティブ"}],category:[{value:"all",label:"すべてのカテゴリ"},{value:"business",label:"ビジネス"},{value:"personal",label:"パーソナル"}]},Te=F=>{const{name:ae,value:le,type:ve,checked:Ne}=F.target;r(ie=>({...ie,[ae]:ve==="checkbox"?Ne:le})),n[ae]&&a(ie=>({...ie,[ae]:""}))},pd=(F,ae)=>{o(le=>({...le,[F]:ae})),console.log("フィルター変更:",F,ae)},nh=F=>{y(ae=>ae.includes(F)?ae.filter(le=>le!==F):[...ae,F])},ah=F=>{v(ae=>ae.filter(le=>le!==F)),y(ae=>ae.filter(le=>le!==F))},sh=F=>{F.preventDefault(),_()&&alert("フォームが正常に送信されました！")},lh=()=>{a({name:"お名前は必須です",email:"有効なメールアドレスを入力してください",password:"パスワードは8文字以上で入力してください",prefecture:"都道府県を選択してください",startDate:"開始日を選択してください",files:"ファイルを選択してください",description:"詳細説明を入力してください",gender:"性別を選択してください",notifications:"通知設定を有効にしてください",agreeToTerms:"利用規約への同意は必須です"})};return t.jsxs("div",{className:"forms-page",children:[t.jsx("style",{jsx:!0,children:`
        .forms-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .demo-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
          max-width: 400px;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-6);
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .select-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .select-input {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          background: white;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-900);
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8.825L2.075 4.9l.85-.85L6 7.125 9.075 4.05l.85.85L6 8.825z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 40px;
        }

        .select-input:focus {
          outline: none;
          border-color: var(--color-primary-600);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .select-input.error {
          border-color: var(--color-error-500);
        }

        .select-input.error:focus {
          border-color: var(--color-error-500);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .radio-group-horizontal {
          display: flex;
          flex-direction: row;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .radio-input {
          width: 16px;
          height: 16px;
          border: 2px solid var(--color-neutral-300);
          border-radius: 50%;
          background: white;
          position: relative;
          cursor: pointer;
          appearance: none;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .radio-input:checked {
          border-color: var(--color-primary-600);
          background-color: var(--color-primary-600);
        }

        .radio-input:checked::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
        }

        .radio-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .radio-label {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
          cursor: pointer;
        }

        .error-state .select-input {
          border-color: var(--color-error-500);
        }

        .error-state .radio-input {
          border-color: var(--color-error-500);
        }

        .toggle-wrapper {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }

        .toggle-input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-neutral-300);
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-input:checked + .toggle-slider {
          background-color: rgb(21, 52, 109);
        }

        .toggle-input:focus + .toggle-slider {
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .toggle-input:checked + .toggle-slider:before {
          transform: translateX(20px);
        }

        .toggle-label {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
          cursor: pointer;
          user-select: none;
        }

        .toggle-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .toggle-group.error-state .toggle-slider {
          border: 2px solid #dc2626;
        }

        .toggle-group.error-state .toggle-input:focus + .toggle-slider {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        .form-actions {
          display: flex;
          gap: var(--spacing-3);
          justify-content: flex-end;
          margin-top: var(--spacing-6);
        }

        .search-filter-demo {
          max-width: 600px;
        }

        .search-filter-panel {
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          margin-bottom: var(--spacing-4);
        }

        .search-section {
          margin-bottom: var(--spacing-4);
        }

        .search-label {
          display: block;
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-700);
          margin-bottom: var(--spacing-1);
          font-size: var(--font-size-sm);
        }

        .search-input {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: rgb(21, 52, 109);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .filter-section {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .filter-item {
          min-width: 150px;
          flex: 1;
        }

        .filter-label {
          display: block;
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-700);
          margin-bottom: var(--spacing-1);
          font-size: var(--font-size-sm);
        }

        .filter-select {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          background: white;
          cursor: pointer;
        }

        .filter-select:focus {
          outline: none;
          border-color: rgb(21, 52, 109);
          box-shadow: 0 0 0 3px rgba(21, 52, 109, 0.1);
        }

        .demo-results {
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-3);
        }

        .results-text {
          margin: 0;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          font-family: var(--font-family-mono);
        }

        @media (max-width: 768px) {
          .filter-section {
            flex-direction: column;
          }
        }

        .advanced-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-6);
        }

        .slider-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .chips-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .switch-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"フォーム / 入力"}),t.jsx("p",{className:"page-description",children:"フォーム入力とデータ収集に関するコンポーネント群。 基本的なフォーム要素から高度な入力コンポーネントまで包括的に提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"フォームコンポーネント"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField"}),t.jsx("p",{className:"component-description",children:"ラベル付きテキスト入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(_e,{name:"demo-field",label:"サンプルラベル",value:"サンプルテキスト",placeholder:"テキストを入力してください",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="fieldName"
  label="ラベルテキスト"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField (error)"}),t.jsx("p",{className:"component-description",children:"エラー状態の入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(_e,{name:"demo-error",label:"メールアドレス",value:"invalid-email",error:"このフィールドは必須です",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="email"
  label="メールアドレス"
  value={value}
  onChange={handleChange}
  error="エラーメッセージ"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField (ラベルなし)"}),t.jsx("p",{className:"component-description",children:"ラベルなしの入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(_e,{name:"demo-no-label",value:"",placeholder:"ラベルなしの入力",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="fieldName"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PasswordInput"}),t.jsx("p",{className:"component-description",children:"パスワード表示切り替え機能付き入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"password-input-container",children:[t.jsx("div",{className:"password-input-wrapper",children:t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",className:"input-label",children:"パスワード"}),t.jsxs("div",{className:"password-field",children:[t.jsx("input",{id:"password",type:ge?"text":"password",value:ee,onChange:F=>B(F.target.value),placeholder:"パスワードを入力してください",className:"password-input"}),t.jsx("button",{type:"button",onClick:()=>Qe(!ge),className:"password-toggle","aria-label":ge?"パスワードを隠す":"パスワードを表示する",children:ge?t.jsx(z,{name:"eye",className:"w-4 h-4"}):t.jsx(z,{name:"eye-off",className:"w-4 h-4"})})]})]})}),t.jsx("div",{className:"password-input-wrapper",children:t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"confirmPassword",className:"input-label",children:"パスワード確認"}),t.jsxs("div",{className:"password-field",children:[t.jsx("input",{id:"confirmPassword",type:Ye?"text":"password",value:te,onChange:F=>fe(F.target.value),placeholder:"パスワードを再入力してください",className:"password-input"}),t.jsx("button",{type:"button",onClick:()=>Ke(!Ye),className:"password-toggle","aria-label":Ye?"パスワードを隠す":"パスワードを表示する",children:Ye?t.jsx(z,{name:"eye",className:"w-4 h-4"}):t.jsx(z,{name:"eye-off",className:"w-4 h-4"})})]})]})}),t.jsx("style",{jsx:!0,children:`
                  .password-input-container {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-4);
                    max-width: 400px;
                  }

                  .password-input-wrapper {
                    width: 100%;
                  }

                  .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-2);
                  }

                  .input-label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-700);
                  }

                  .password-field {
                    position: relative;
                    display: flex;
                    align-items: center;
                  }

                  .password-input {
                    width: 100%;
                    padding: var(--spacing-3);
                    padding-right: var(--spacing-10);
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    font-size: var(--font-size-sm);
                    transition: border-color 0.2s, box-shadow 0.2s;
                    background: var(--color-neutral-white);
                  }

                  .password-input:focus {
                    outline: none;
                    border-color: var(--color-primary-500);
                    box-shadow: 0 0 0 3px var(--color-primary-100);
                  }

                  .password-input::placeholder {
                    color: var(--color-neutral-400);
                  }

                  .password-toggle {
                    position: absolute;
                    right: var(--spacing-3);
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: var(--color-neutral-500);
                    cursor: pointer;
                    padding: var(--spacing-1);
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s, background-color 0.2s;
                  }

                  .password-toggle:hover {
                    color: var(--color-neutral-700);
                    background-color: var(--color-neutral-100);
                  }

                  .password-toggle:focus {
                    outline: none;
                    color: var(--color-primary-600);
                    background-color: var(--color-primary-50);
                  }
                `})]})}),t.jsx("div",{className:"code-snippet",children:`// PasswordInput コンポーネントの使用例
import { useState } from 'react';
import Icon from '../../../components/icons/Icon.tsx';

function PasswordInputDemo() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-group">
      <label htmlFor="password" className="input-label">
        パスワード
      </label>
      <div className="password-field">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワードを入力してください"
          className="password-input"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
        >
          {showPassword ? (
            <Icon name="eye" className="w-4 h-4" />
          ) : (
            <Icon name="eye-off" className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Checkbox"}),t.jsx("p",{className:"component-description",children:"チェックボックス入力コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"checkbox-group",children:[t.jsxs("label",{className:"flex items-center",children:[t.jsx(jr,{name:"agreeToTerms",checked:e.agreeToTerms,onChange:Te}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"利用規約に同意します"})]}),t.jsxs("label",{className:"flex items-center",children:[t.jsx(jr,{name:"newsletter",checked:e.newsletter,onChange:Te}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"ニュースレターを受信します"})]})]})}),t.jsx("div",{className:"code-snippet",children:`<label className="flex items-center">
  <Checkbox
    name="agreeToTerms"
    checked={agreeToTerms}
    onChange={handleChange}
  />
  <span className="ms-2 text-sm text-gray-600">
    利用規約に同意します
  </span>
</label>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SelectBox"}),t.jsx("p",{className:"component-description",children:"ドロップダウン選択コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"select-wrapper",children:t.jsxs("select",{className:"select-input",value:e.prefecture,onChange:Te,name:"prefecture",children:[t.jsx("option",{value:"",children:"都道府県を選択"}),t.jsx("option",{value:"tokyo",children:"東京都"}),t.jsx("option",{value:"osaka",children:"大阪府"}),t.jsx("option",{value:"kyoto",children:"京都府"}),t.jsx("option",{value:"kanagawa",children:"神奈川県"}),t.jsx("option",{value:"saitama",children:"埼玉県"})]})})}),t.jsx("div",{className:"code-snippet",children:`<div className="select-wrapper">
  <select
    className="select-input"
    value={selectedValue}
    onChange={handleChange}
    name="fieldName"
  >
    <option value="">選択してください</option>
    <option value="option1">オプション1</option>
    <option value="option2">オプション2</option>
  </select>
</div>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"MultiSelectBox (複数選択ドロップダウン)"}),t.jsx("p",{className:"component-description",children:"複数選択可能なカスタムドロップダウンコンポーネント - チェックボックス付き"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(bm,{label:"希望勤務地",name:"workLocation",value:R,options:[{value:"tokyo",label:"東京"},{value:"osaka",label:"大阪"},{value:"nagoya",label:"名古屋"},{value:"fukuoka",label:"福岡"},{value:"remote",label:"リモート"}],onChange:I,placeholder:"勤務地を選択してください",helper:"複数選択可能です",required:!0})}),t.jsx("div",{className:"code-snippet",children:`<SelectBox
  label="希望勤務地"
  name="workLocation"
  value={workLocation}
  options={[
    { value: 'tokyo', label: '東京' },
    { value: 'osaka', label: '大阪' },
    { value: 'nagoya', label: '名古屋' },
    { value: 'fukuoka', label: '福岡' },
    { value: 'remote', label: 'リモート' },
  ]}
  onChange={setWorkLocation}
  placeholder="勤務地を選択してください"
  helper="複数選択可能です"
  required
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"RadioGroup"}),t.jsx("p",{className:"component-description",children:"高度なラジオボタン選択コンポーネント - エラー状態、説明文、無効化対応"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"radio-group-wrapper",children:[t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"性別 *"}),t.jsxs("div",{className:"radio-group vertical",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"male",checked:e.gender==="male",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"男性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"female",checked:e.gender==="female",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"女性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"other",checked:e.gender==="other",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"その他"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"no-answer",checked:e.gender==="no-answer",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"回答しない"})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"優先度"}),t.jsxs("div",{className:"radio-group horizontal",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"high",checked:e.priority==="high",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"高"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"medium",checked:e.priority==="medium",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"中"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"low",checked:e.priority==="low",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"低"})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"プランを選択"}),t.jsxs("div",{className:"radio-group vertical with-descriptions",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"plan",value:"basic",checked:e.plan==="basic",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsxs("div",{className:"radio-content",children:[t.jsx("span",{className:"radio-label",children:"ベーシックプラン"}),t.jsx("span",{className:"radio-description",children:"基本機能のみ利用可能"})]})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"plan",value:"premium",checked:e.plan==="premium",onChange:Te}),t.jsx("span",{className:"radio-custom"}),t.jsxs("div",{className:"radio-content",children:[t.jsx("span",{className:"radio-label",children:"プレミアムプラン"}),t.jsx("span",{className:"radio-description",children:"全機能利用可能、優先サポート付き"})]})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"配送方法（現在利用不可）"}),t.jsxs("div",{className:"radio-group vertical disabled",children:[t.jsxs("label",{className:"radio-option disabled",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"shipping",value:"standard",disabled:!0}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"通常配送"})]}),t.jsxs("label",{className:"radio-option disabled",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"shipping",value:"express",disabled:!0}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"速達配送"})]})]})]}),t.jsx("style",{jsx:!0,children:`
                  .radio-group-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-6);
                    max-width: 500px;
                  }

                  .radio-group-section {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-3);
                  }

                  .radio-group-label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-700);
                  }

                  .radio-group {
                    display: flex;
                    gap: var(--spacing-3);
                  }

                  .radio-group.vertical {
                    flex-direction: column;
                  }

                  .radio-group.horizontal {
                    flex-direction: row;
                    flex-wrap: wrap;
                  }

                  .radio-option {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--spacing-2);
                    cursor: pointer;
                    padding: var(--spacing-2);
                    border-radius: var(--radius-md);
                    transition: background-color 0.2s;
                  }

                  .radio-option:hover:not(.disabled) {
                    background-color: var(--color-neutral-50);
                  }

                  .radio-option.disabled {
                    cursor: not-allowed;
                    opacity: 0.6;
                  }

                  .radio-input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                  }

                  .radio-custom {
                    width: 18px;
                    height: 18px;
                    border: 2px solid var(--color-neutral-300);
                    border-radius: 50%;
                    position: relative;
                    flex-shrink: 0;
                    transition: border-color 0.2s, background-color 0.2s;
                    margin-top: 1px;
                  }

                  .radio-input:checked + .radio-custom {
                    border-color: var(--color-primary-500);
                    background-color: var(--color-primary-500);
                  }

                  .radio-input:checked + .radio-custom::after {
                    content: '';
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: white;
                  }

                  .radio-input:focus + .radio-custom {
                    box-shadow: 0 0 0 3px var(--color-primary-100);
                  }

                  .radio-input:disabled + .radio-custom {
                    border-color: var(--color-neutral-200);
                    background-color: var(--color-neutral-100);
                  }

                  .radio-content {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-1);
                  }

                  .radio-label {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-700);
                    line-height: var(--line-height-tight);
                  }

                  .radio-description {
                    font-size: var(--font-size-xs);
                    color: var(--color-neutral-500);
                    line-height: var(--line-height-relaxed);
                  }

                  .radio-group.horizontal .radio-option {
                    min-width: auto;
                    padding: var(--spacing-2) var(--spacing-3);
                  }

                  .radio-group.with-descriptions .radio-option {
                    padding: var(--spacing-3);
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--radius-lg);
                  }

                  .radio-group.with-descriptions .radio-option:hover:not(.disabled) {
                    border-color: var(--color-primary-300);
                    background-color: var(--color-primary-25);
                  }

                  .radio-input:checked ~ .radio-content .radio-label {
                    color: var(--color-primary-700);
                  }
                `})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なRadioGroup
<div className="radio-group-section">
  <label className="radio-group-label">性別 *</label>
  <div className="radio-group vertical">
    <label className="radio-option">
      <input
        type="radio"
        className="radio-input"
        name="gender"
        value="male"
        checked={value === 'male'}
        onChange={handleChange}
      />
      <span className="radio-custom"></span>
      <span className="radio-label">男性</span>
    </label>
    <label className="radio-option">
      <input
        type="radio"
        className="radio-input"
        name="gender"
        value="female"
        checked={value === 'female'}
        onChange={handleChange}
      />
      <span className="radio-custom"></span>
      <span className="radio-label">女性</span>
    </label>
  </div>
</div>

// 説明文付きRadioGroup
<div className="radio-group vertical with-descriptions">
  <label className="radio-option">
    <input type="radio" className="radio-input" name="plan" value="basic" />
    <span className="radio-custom"></span>
    <div className="radio-content">
      <span className="radio-label">ベーシックプラン</span>
      <span className="radio-description">基本機能のみ利用可能</span>
    </div>
  </label>
</div>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ToggleButton / Switch"}),t.jsx("p",{className:"component-description",children:"ON/OFFを切り替えるトグルスイッチコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なトグルボタン"}),t.jsxs("div",{className:"toggle-group",children:[t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"notifications",checked:e.notifications,onChange:Te}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"通知を受け取る"})]}),t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"darkMode",checked:e.darkMode,onChange:Te}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"ダークモード"})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"サイズバリエーション"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx(Ct,{checked:c,onChange:F=>d(F.target.checked),label:"小サイズ",size:"sm"}),t.jsx(Ct,{checked:c,onChange:F=>d(F.target.checked),label:"中サイズ（デフォルト）",size:"md"}),t.jsx(Ct,{checked:c,onChange:F=>d(F.target.checked),label:"大サイズ",size:"lg"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"実用例"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[t.jsx(Ct,{checked:c,onChange:F=>d(F.target.checked),label:"プッシュ通知を有効にする"}),t.jsx(Ct,{checked:!1,onChange:()=>{},label:"ダークモード"}),t.jsx(Ct,{checked:!0,onChange:()=>{},label:"自動保存"})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なトグルボタン
<label className="toggle-wrapper">
  <div className="toggle-switch">
    <input
      type="checkbox"
      className="toggle-input"
      name="fieldName"
      checked={isToggled}
      onChange={handleChange}
    />
    <span className="toggle-slider"></span>
  </div>
  <span className="toggle-label">ラベルテキスト</span>
</label>

// Switchコンポーネント（基本）
<Switch
  checked={isEnabled}
  onChange={(e) => setIsEnabled(e.target.checked)}
  label="機能を有効にする"
/>

// Switchコンポーネント（サイズ指定）
<Switch size="sm" checked={value} onChange={handler} label="小サイズ" />
<Switch size="lg" checked={value} onChange={handler} label="大サイズ" />`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DatePicker"}),t.jsx("p",{className:"component-description",children:"日付選択用のピッカーコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的な日付選択"}),t.jsx(zr,{value:g,onChange:m,label:"開始日"})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"必須フィールド"}),t.jsx(zr,{value:"",onChange:()=>{},label:"締切日",required:!0})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"日時選択（時間含む）"}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"block",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)",marginBottom:"var(--spacing-2)"},children:["開催日時 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("input",{type:"datetime-local",value:"",onChange:()=>{},style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"},onFocus:F=>{F.target.style.borderColor="rgb(21, 52, 109)",F.target.style.boxShadow="0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:F=>{F.target.style.borderColor="var(--color-neutral-300)",F.target.style.boxShadow="none"}})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な日付選択
<DatePicker
  value={selectedDate}
  onChange={setSelectedDate}
  label="開始日"
/>

// 必須フィールド
<DatePicker
  value={date}
  onChange={setDate}
  label="締切日"
  required={true}
/>

// 日時選択（時間含む）
<input
  type="datetime-local"
  value={dateTime}
  onChange={(e) => setDateTime(e.target.value)}
  style={{
    width: '100%',
    padding: 'var(--spacing-2) var(--spacing-3)',
    border: '1px solid var(--color-neutral-300)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-sm)'
  }}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FileUpload"}),t.jsx("p",{className:"component-description",children:"ドラッグ&ドロップ対応のファイルアップロードコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"450px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"単一ファイル"}),t.jsx(Fr,{onFilesChange:F=>N(F),label:"プロフィール画像",accept:"image/*"}),x.length>0&&t.jsxs("div",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:["選択ファイル: ",x.map(F=>F.name).join(", ")]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"複数ファイル"}),t.jsx(Fr,{onFilesChange:()=>{},multiple:!0,label:"ドキュメント",accept:".pdf,.doc,.docx"})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 単一ファイル
<FileUpload
  onFilesChange={setFiles}
  label="プロフィール画像"
  accept="image/*"
/>

// 複数ファイル
<FileUpload
  onFilesChange={setFiles}
  multiple={true}
  label="ドキュメント"
  accept=".pdf,.doc,.docx"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Textarea"}),t.jsx("p",{className:"component-description",children:"複数行テキスト入力用のテキストエリアコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"500px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なテキストエリア"}),t.jsx(Tt,{value:C,onChange:k,label:"メッセージ",placeholder:"ご意見・ご要望をお聞かせください",rows:4})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"文字数制限付き"}),t.jsx(Tt,{value:"",onChange:()=>{},label:"自己紹介",placeholder:"200文字以内で自己紹介をお書きください",rows:3,maxLength:200})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なテキストエリア
<Textarea
  value={value}
  onChange={setValue}
  label="メッセージ"
  placeholder="ご意見をお聞かせください"
  rows={4}
/>

// 文字数制限付き
<Textarea
  value={value}
  onChange={setValue}
  label="自己紹介"
  placeholder="200文字以内で入力"
  maxLength={200}
  rows={3}
/>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"高度なフォーム要素"}),t.jsxs("div",{className:"advanced-demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Slider / RangeSlider"}),t.jsx("p",{className:"component-description",children:"単一値または範囲選択に対応した高度なスライダーコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"slider-wrapper",children:[t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"基本スライダー"}),t.jsxs("div",{className:"slider-item",children:[t.jsxs("label",{className:"slider-label",children:["音量: ",p,"%"]}),t.jsx(ue,{value:p,onChange:h,min:0,max:100,showLabel:!1})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"レンジスライダー（範囲選択）"}),t.jsxs("div",{className:"slider-item",children:[t.jsxs("label",{className:"slider-label",children:["価格範囲: ¥",f[0].toLocaleString()," - ¥",f[1].toLocaleString()]}),t.jsx(Pe,{value:f,onChange:b,min:0,max:1e5,step:1e3})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"サイズバリエーション"}),t.jsxs("div",{className:"slider-sizes",children:[t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"小サイズ"}),t.jsx(ue,{value:p,onChange:h,size:"small"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"標準サイズ"}),t.jsx(ue,{value:p,onChange:h,size:"medium"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"大サイズ"}),t.jsx(ue,{value:p,onChange:h,size:"large"})]})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"カラーバリエーション"}),t.jsxs("div",{className:"slider-colors",children:[t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Primary"}),t.jsx(ue,{value:p,onChange:h,color:"primary"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Success"}),t.jsx(ue,{value:p,onChange:h,color:"success"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Warning"}),t.jsx(ue,{value:p,onChange:h,color:"warning"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Error"}),t.jsx(ue,{value:p,onChange:h,color:"error"})]})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"無効状態"}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"設定不可（無効化）"}),t.jsx(ue,{value:30,onChange:()=>{},disabled:!0})]})]}),t.jsx("style",{jsx:!0,children:`
                  .slider-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-6);
                    max-width: 600px;
                  }

                  .slider-section {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-3);
                  }

                  .slider-section-title {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-semibold);
                    color: var(--color-neutral-800);
                    margin: 0;
                  }

                  .slider-item {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-2);
                  }

                  .slider-label {
                    font-size: var(--font-size-xs);
                    font-weight: var(--font-weight-medium);
                    color: var(--color-neutral-600);
                  }

                  .slider-sizes, .slider-colors {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-4);
                  }
                `})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本スライダー
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  showLabel={true}
/>

// レンジスライダー（範囲選択）
<RangeSlider
  value={[min, max]}
  onChange={setRange}
  min={0}
  max={100000}
  step={1000}
/>

// サイズとカラー指定
<Slider
  value={value}
  onChange={setValue}
  size="large"
  color="success"
  disabled={false}
/>

// カスタム設定例
<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
  size="medium"
  color="primary"
  formatLabel={(val) => \`\${val}%\`}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Tooltip"}),t.jsx("p",{className:"component-description",children:"ホバー時にヒントやヘルプ情報を表示するツールチップコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"chips-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なツールチップ"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(Ce,{content:"上に表示",position:"top",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"上にホバー"})}),t.jsx(Ce,{content:"下に表示",position:"bottom",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"下にホバー"})}),t.jsx(Ce,{content:"左に表示",position:"left",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"左にホバー"})}),t.jsx(Ce,{content:"右に表示",position:"right",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"右にホバー"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"アイコンにツールチップ"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[t.jsx(Ce,{content:"ヘルプ情報",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-primary-600)"}})}),t.jsx(Ce,{content:"詳細情報",children:t.jsx(z,{name:"info",style:{cursor:"pointer",color:"var(--color-info-600)"}})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"フォーム要素との組み合わせ"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:["パスワード",t.jsx(Ce,{content:"8文字以上、英数字含む",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx("input",{type:"password",placeholder:"パスワードを入力",style:{marginTop:"var(--spacing-1)",width:"250px",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:["メールアドレス",t.jsx(Ce,{content:"確認メールが送信されます",children:t.jsx(z,{name:"info",style:{cursor:"pointer",color:"var(--color-info-500)",width:"18px",height:"18px"}})})]}),t.jsx("input",{type:"email",placeholder:"example@email.com",style:{marginTop:"var(--spacing-1)",width:"250px",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なツールチップ
<Tooltip content="ヒントテキスト" position="top">
  <button>ホバーしてください</button>
</Tooltip>

// 位置指定
<Tooltip content="下に表示" position="bottom">
  <span>要素</span>
</Tooltip>

// アイコンと組み合わせ
<Tooltip content="ヘルプ情報">
  <Icon name="help" />
</Tooltip>

// フォームラベルと組み合わせ
<label>
  フィールド名
  <Tooltip content="入力形式の説明">
    <Icon name="info" />
  </Tooltip>
</label>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Rating"}),t.jsx("p",{className:"component-description",children:"星評価やいいね機能などの評価入力コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"slider-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"星評価"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx(Y,{value:P,onChange:T,label:"総合評価",showValue:!0}),t.jsx(Y,{value:4,readOnly:!0,label:"平均評価（読み取り専用）",showValue:!0})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"サイズバリエーション"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"小サイズ"}),t.jsx(Y,{value:3,onChange:()=>{},size:"sm"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"中サイズ（デフォルト）"}),t.jsx(Y,{value:3,onChange:()=>{},size:"md"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"大サイズ"}),t.jsx(Y,{value:3,onChange:()=>{},size:"lg"})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"3段階評価"}),t.jsx(Y,{value:2,onChange:()=>{},max:3,label:"満足度評価",showValue:!0})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な星評価
<Rating
  value={rating}
  onChange={setRating}
  label="総合評価"
  showValue={true}
/>

// 読み取り専用
<Rating
  value={4}
  readOnly={true}
  label="平均評価"
  showValue={true}
/>

// カスタム段階数とサイズ
<Rating
  value={rating}
  onChange={setRating}
  max={3}
  size="lg"
  label="3段階評価"
  showValue={true}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"AutoComplete"}),t.jsx("p",{className:"component-description",children:"入力支援機能を提供するオートコンプリートコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"技術スタック"}),t.jsx(js,{value:"",onChange:()=>{},suggestions:["JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go"],placeholder:"使用技術を入力してください",label:"スキル"})]})})}),t.jsx("div",{className:"code-snippet",children:`// 技術スタック選択
<AutoComplete
  value={value}
  onChange={setValue}
  suggestions={['JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js']}
  placeholder="使用技術を入力してください"
  label="スキル"
  maxSuggestions={5}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Chips"}),t.jsx("p",{className:"component-description",children:"タグ選択や複数項目の管理に使用するチップコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"chips-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"選択可能チップス"}),t.jsxs("div",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:["選択中: ",j.join(", ")]}),t.jsx(gt,{items:w,selected:j,onSelectionChange:nh,removable:!1})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"削除可能チップス"}),t.jsx("div",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"×ボタンでチップを削除できます"}),t.jsx(gt,{items:w,selected:w,onSelectionChange:()=>{},removable:!0,onRemove:ah})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"カテゴリ例"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"スキル"}),t.jsx(gt,{items:["JavaScript","React","Node.js","TypeScript","Python"],selected:["JavaScript","React"],onSelectionChange:()=>{},removable:!1})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"興味のあるトピック"}),t.jsx(gt,{items:["Web開発","AI","デザイン","マーケティング","データ分析"],selected:["Web開発","デザイン"],onSelectionChange:()=>{},removable:!1})]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 選択可能チップス
<Chips
  items={['tag1', 'tag2', 'tag3']}
  selected={selectedTags}
  onSelectionChange={handleSelection}
  removable={false}
/>

// 削除可能チップス
<Chips
  items={allTags}
  selected={allTags}
  onSelectionChange={() => {}}
  removable={true}
  onRemove={handleRemove}
/>

// 使用例：スキル選択
<Chips
  items={skills}
  selected={selectedSkills}
  onSelectionChange={toggleSkill}
  removable={false}
/>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"実用的なフォーム例"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"統合フォームデモ"}),t.jsx("p",{className:"component-description",children:"フォームコンポーネントを組み合わせた実用例。「エラー表示テスト」ボタンでバリデーションエラーの表示を確認できます。"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("form",{onSubmit:sh,className:"demo-form",children:[t.jsx(_e,{id:"form-name",name:"name",label:t.jsxs(t.Fragment,{children:["お名前 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:e.name,onChange:Te,placeholder:"山田 太郎",required:!0,error:n.name,fullWidth:!0}),t.jsx(_e,{id:"form-email",type:"email",name:"email",label:t.jsxs(t.Fragment,{children:["メールアドレス ",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:e.email,onChange:Te,placeholder:"example@email.com",required:!0,error:n.email,fullWidth:!0}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["パスワード ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ce,{content:"8文字以上、英数字含む",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(_e,{id:"form-password",type:"password",name:"password",value:e.password,onChange:Te,placeholder:"8文字以上で入力",required:!0,error:n.password,fullWidth:!0})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["スキル ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ce,{content:"お持ちの技術スキルを入力してください",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(js,{value:q,onChange:O,suggestions:["JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go","C++","CSS","HTML","SQL"],placeholder:"使用技術を入力してください",label:"",required:!0}),n.skills&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.skills})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["開始日 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ce,{content:"プロジェクトの開始予定日",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(zr,{value:g,onChange:m,error:n.startDate}),n.startDate&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.startDate})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["添付ファイル ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ce,{content:"PDF, Word, Excel形式対応",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Fr,{onFilesChange:F=>N(F),accept:".pdf,.doc,.docx,.xls,.xlsx",multiple:!0,error:n.files}),n.files&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.files})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["詳細説明 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ce,{content:"200文字以内で入力してください",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Tt,{value:C,onChange:k,placeholder:"プロジェクトの詳細をお書きください",rows:4,maxLength:200,error:n.description}),n.description&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.description})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["性別 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ce,{content:"回答したくない場合は「回答しない」を選択",children:t.jsx(z,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsxs("div",{className:`radio-group mt-1 ${n.gender?"error-state":""}`,children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"male",checked:e.gender==="male",onChange:Te,required:!0}),t.jsx("span",{className:"radio-label",children:"男性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"female",checked:e.gender==="female",onChange:Te,required:!0}),t.jsx("span",{className:"radio-label",children:"女性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"other",checked:e.gender==="other",onChange:Te,required:!0}),t.jsx("span",{className:"radio-label",children:"その他"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"none",checked:e.gender==="none",onChange:Te,required:!0}),t.jsx("span",{className:"radio-label",children:"回答しない"})]})]}),n.gender&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.gender})]}),t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"優先度"}),t.jsxs("div",{className:"radio-group-horizontal mt-1",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"high",checked:e.priority==="high",onChange:Te}),t.jsx("span",{className:"radio-label",children:"高"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"medium",checked:e.priority==="medium",onChange:Te}),t.jsx("span",{className:"radio-label",children:"中"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"low",checked:e.priority==="low",onChange:Te}),t.jsx("span",{className:"radio-label",children:"低"})]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsx("label",{className:"form-label",style:{marginBottom:0},children:"設定オプション"}),t.jsx(Ce,{content:"重要なお知らせを受け取るため推奨",children:t.jsx(z,{name:"info",style:{cursor:"pointer",color:"var(--color-info-500)",width:"18px",height:"18px"}})})]}),t.jsxs("div",{className:`toggle-group mt-1 ${n.notifications?"error-state":""}`,children:[t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"notifications",checked:e.notifications,onChange:Te,required:!0}),t.jsx("span",{className:"toggle-slider"})]}),t.jsxs("span",{className:"toggle-label",children:["プッシュ通知を受け取る ",t.jsx("span",{style:{color:"red"},children:"*"})]})]}),t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"darkMode",checked:e.darkMode,onChange:Te}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"ダークモード"})]})]}),n.notifications&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.notifications})]}),t.jsxs("div",{className:"checkbox-group",children:[t.jsxs("label",{className:"flex items-center",children:[t.jsx(jr,{name:"agreeToTerms",checked:e.agreeToTerms,onChange:Te,required:!0}),t.jsxs("span",{className:"ms-2 text-sm text-gray-600",children:["利用規約に同意します ",t.jsx("span",{style:{color:"red"},children:"*"})]})]}),n.agreeToTerms&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:n.agreeToTerms}),t.jsxs("label",{className:"flex items-center",children:[t.jsx(jr,{name:"newsletter",checked:e.newsletter,onChange:Te}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"ニュースレターを受信します"})]})]}),t.jsxs("div",{className:"form-actions",children:[t.jsx("button",{type:"button",style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{r({name:"",email:"",password:"",prefecture:"",gender:"",priority:"",notifications:!1,darkMode:!1,agreeToTerms:!1,newsletter:!1}),a({})},children:"リセット"}),t.jsx("button",{type:"button",style:{padding:"8px 16px",border:"1px solid #dc2626",borderRadius:"4px",background:"#dc2626",color:"white",cursor:"pointer",marginRight:"8px"},onClick:lh,children:"エラー表示テスト"}),t.jsx("button",{type:"submit",style:{padding:"8px 16px",border:"none",borderRadius:"4px",background:"rgb(21, 52, 109)",color:"white",cursor:"pointer"},children:"送信"})]})]})})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用方法"}),t.jsxs("div",{className:"component-card",children:[t.jsx("div",{className:"component-info",children:t.jsx("h3",{className:"component-name",children:"インポートと基本的な使用方法"})}),t.jsx("div",{className:"code-snippet",children:`// インポート
import InputField from '../../../components/forms/InputField.tsx';
import Checkbox from '../../../components/forms/Checkbox.tsx';
import DatePicker from '../../../components/basic/DatePicker.tsx';
import FileUpload from '../../../components/basic/FileUpload.tsx';
import Textarea from '../../../components/basic/Textarea.tsx';

// 基本的な使用
function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form>
      <InputField
        name="name"
        label="お名前"
        value={formData.name}
        onChange={handleChange}
        placeholder="山田 太郎"
        error={errors.name}
        required
      />

      <InputField
        name="email"
        type="email"
        label="メールアドレス"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
        error={errors.email}
        required
      />

      <label className="flex items-center">
        <Checkbox
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <span>利用規約に同意します</span>
      </label>
    </form>
  );
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"検索・フィルターパネル"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SearchFilterPanel"}),t.jsx("p",{className:"component-description",children:"検索ボックスとフィルター機能を組み合わせたパネルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"search-filter-demo",children:[t.jsxs("div",{className:"search-filter-panel",children:[t.jsxs("div",{className:"search-section",children:[t.jsx("label",{htmlFor:"demo-search",className:"search-label",children:"検索"}),t.jsx("input",{id:"demo-search",type:"text",className:"search-input",placeholder:"検索キーワードを入力...",value:s,onChange:F=>l(F.target.value)})]}),t.jsxs("div",{className:"filter-section",children:[t.jsxs("div",{className:"filter-item",children:[t.jsx("label",{htmlFor:"status-filter",className:"filter-label",children:"ステータス"}),t.jsx("select",{id:"status-filter",className:"filter-select",value:i.status,onChange:F=>pd("status",F.target.value),children:bs.status.map(F=>t.jsx("option",{value:F.value,children:F.label},F.value))})]}),t.jsxs("div",{className:"filter-item",children:[t.jsx("label",{htmlFor:"category-filter",className:"filter-label",children:"カテゴリ"}),t.jsx("select",{id:"category-filter",className:"filter-select",value:i.category,onChange:F=>pd("category",F.target.value),children:bs.category.map(F=>t.jsx("option",{value:F.value,children:F.label},F.value))})]})]})]}),t.jsx("div",{className:"demo-results",children:t.jsxs("p",{className:"results-text",children:['検索: "',s,'" | ステータス: ',(md=bs.status.find(F=>F.value===i.status))==null?void 0:md.label," | カテゴリ: ",(hd=bs.category.find(F=>F.value===i.category))==null?void 0:hd.label]})})]})}),t.jsx("div",{className:"code-snippet",children:`<SearchFilterPanel
  searchPlaceholder="検索..."
  searchValue={searchQuery}
  onSearch={handleSearch}
  filters={[
    {
      name: 'status',
      label: 'ステータス',
      options: [...],
      value: selectedValue,
      onChange: handleChange
    }
  ]}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"検索可能セレクト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SearchableSelect"}),t.jsx("p",{className:"component-description",children:"検索機能付きの高機能セレクトコンポーネント - 単一選択、複数選択、キーボードナビゲーション対応"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"基本的な単一選択"}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500"},children:"国を選択"}),t.jsx(Hr,{options:[{value:"jp",label:"日本"},{value:"us",label:"アメリカ"},{value:"uk",label:"イギリス"},{value:"fr",label:"フランス"},{value:"de",label:"ドイツ"},{value:"kr",label:"韓国"},{value:"cn",label:"中国"},{value:"ca",label:"カナダ"},{value:"au",label:"オーストラリア"},{value:"in",label:"インド"}],value:ye,onChange:De,placeholder:"国を選択してください...",searchPlaceholder:"国名で検索..."}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"#666"},children:["選択中: ",ye||"未選択"]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"複数選択"}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500"},children:"チームメンバー"}),t.jsx(Hr,{options:[{value:"tanaka",label:"田中太郎"},{value:"suzuki",label:"鈴木花子"},{value:"sato",label:"佐藤一郎"},{value:"takahashi",label:"高橋美咲"},{value:"watanabe",label:"渡辺健太"},{value:"yamada",label:"山田美香"},{value:"nakamura",label:"中村悠太"},{value:"kobayashi",label:"小林由美"}],value:Ve,onChange:ft,placeholder:"メンバーを選択...",searchPlaceholder:"名前で検索...",multiple:!0}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"#666"},children:["選択中 (",Ve.length,"): ",Ve.join(", ")||"未選択"]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な単一選択
<SearchableSelect
  options={[
    { value: 'jp', label: '日本' },
    { value: 'us', label: 'アメリカ' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="選択してください..."
/>

// 複数選択
<SearchableSelect
  options={['オプション1', 'オプション2', 'オプション3']}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple={true}
  placeholder="複数選択可能..."
/>

// 選択数制限付き複数選択
<SearchableSelect
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple={true}
  maxSelected={3}
  placeholder="最大3個まで選択可能..."
/>

// カスタマイズ
<SearchableSelect
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  size="large"
  searchable={true}
  clearable={true}
  loading={isLoading}
  disabled={isDisabled}
  placeholder="カスタマイズ例..."
  searchPlaceholder="検索..."
  noOptionsText="見つかりません"
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"InputFieldは適切なtype属性を設定してください（email, password等）"}),t.jsx("li",{children:"InputFieldにlabel属性を指定すると、ラベルと入力フィールドが自動的に関連付けられます"}),t.jsx("li",{children:"InputFieldのerror属性でバリデーションエラーを表示できます"}),t.jsx("li",{children:"Checkboxは重要な同意事項や設定項目に使用してください"}),t.jsx("li",{children:"SelectBoxには適切なデフォルトオプションを設定してください"}),t.jsx("li",{children:"RadioButtonは排他的な選択肢に使用し、同じname属性を設定してください"}),t.jsx("li",{children:"縦並び（radio-group）は選択肢が多い場合や説明が長い場合に適しています"}),t.jsx("li",{children:"横並び（radio-group-horizontal）は選択肢が少ない場合やコンパクトな表示が必要な場合に適しています"}),t.jsx("li",{children:"ToggleButtonは設定項目やON/OFF切り替えに使用してください"}),t.jsx("li",{children:"ToggleButtonは直感的な操作ができるよう適切なラベルを設定してください"}),t.jsx("li",{children:"ToggleButtonでエラー状態を表示する場合は、error-stateクラスを親要素に追加してください"}),t.jsx("li",{children:"必須のToggleButtonには「*」マークとrequired属性を設定してください"}),t.jsx("li",{children:"Switchコンポーネントは設定の即座適用が期待される場合に使用してください"}),t.jsx("li",{children:"Sliderは連続的な数値選択（音量、価格範囲等）に適しています"}),t.jsx("li",{children:"Sliderには最小値・最大値・ステップを適切に設定してください"}),t.jsx("li",{children:"Chipsは複数選択やタグ管理に有効で、選択状態を視覚的に分かりやすく表現します"}),t.jsx("li",{children:"削除可能なChipsはユーザーが追加したタグの管理に適しています"}),t.jsx("li",{children:"フォームには適切なバリデーションとエラーハンドリングを実装してください"}),t.jsx("li",{children:"エラー状態の要素には適切なCSSクラスやaria属性を設定してください"}),t.jsx("li",{children:"検索・フィルターパネルはリアルタイム検索または送信ボタンでの適用を検討してください"}),t.jsx("li",{children:"フィルター項目は用途に応じて適切なオプションを設定してください"}),t.jsx("li",{children:"Tooltipはユーザビリティ向上のため、入力規則や説明が必要な項目に使用してください"}),t.jsx("li",{children:"Tooltipのテキストは簡潔で分かりやすい内容にしてください"}),t.jsx("li",{children:"Tooltipの位置は画面端での表示を考慮して適切に設定してください"}),t.jsx("li",{children:"アイコンと組み合わせたTooltipはヘルプアイコンや情報アイコンの使用を推奨します"}),t.jsx("li",{children:"DatePickerは日付の入力が必要な場面で使用し、適切なラベルを設定してください"}),t.jsx("li",{children:"DatePickerにはmin/max属性で日付範囲の制限を設けることも可能です"}),t.jsx("li",{children:"FileUploadはaccept属性で対応ファイル形式を明確にしてください"}),t.jsx("li",{children:"FileUploadはドラッグ&ドロップとクリック選択の両方に対応しています"}),t.jsx("li",{children:"複数ファイル選択が必要な場合はmultiple属性を設定してください"}),t.jsx("li",{children:"Textareaは長文入力が必要な場面で使用し、適切な行数を設定してください"}),t.jsx("li",{children:"Textareaには文字数制限（maxLength）を設定してユーザーに入力量の目安を示してください"}),t.jsx("li",{children:"Textareaのresizeプロパティで垂直方向のリサイズを許可しています"}),t.jsx("li",{children:"Ratingコンポーネントは評価やフィードバック収集に適しています"}),t.jsx("li",{children:"星評価は1-5段階評価に適しており、デフォルトで星アイコンを使用します"}),t.jsx("li",{children:"読み取り専用モードで既存の評価値を表示できます"}),t.jsx("li",{children:"max属性で評価段階数をカスタマイズ可能です（3段階、5段階など）"}),t.jsx("li",{children:"ホバー効果でユーザビリティを向上させています"}),t.jsx("li",{children:"AutoCompleteは入力支援によりユーザビリティを向上させます"}),t.jsx("li",{children:"キーボード操作（矢印キー、Enter、Escape）に対応しています"}),t.jsx("li",{children:"部分一致でのフィルタリングにより候補を絞り込みます"}),t.jsx("li",{children:"maxSuggestionsで表示候補数を制限できます"}),t.jsx("li",{children:"住所、技術スタック、商品名など様々な用途に適用可能です"})]})})]})]})},Zg=()=>{const[e,r]=u.useState(""),[n,a]=u.useState("all"),[s,l]=u.useState(""),i={navigation:["dashboard","home","menu","chevron-up","chevron-down","chevron-left","chevron-right","arrow-up","arrow-down","arrow-left","arrow-right","arrow-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","navigation"],user:["users","user","user-plus","user-shield","user-cog","user-group","assignments","people-group","users-line","network-wired"],organization:["building","building-office","building-user","department","organization","sitemap","diagram-project"],security:["shield","shield-check","lock","unlock","key","hierarchy"],data:["table-cells","table","folder","folder-open","file","document","clipboard","clipboard-list","storage","database","cog"],business:["project","code","briefcase","cube","product","tasks","file-contract","handshake"],analytics:["chart","analytics","chart-bar","chart-line","chart-pie"],system:["settings","cog","cogs","wrench","tools","hammer","screwdriver","sliders"],finance:["currency-yen","price","wallet","credit-card","receipt"],notification:["bell","notification","inbox"],feedback:["check","check-circle","check-double","close","times","warning","exclamation","info","success","error","question","plus-circle","minus-circle"],action:["plus","minus","search","filter","edit","pencil","pen","delete","list","star","eye","eye-off","refresh","undo","redo","spinner"],communication:["envelope","mail","comment","comments","message","paper-plane","phone"],media:["video","music","photo","image","film","microphone","camera"],shopping:["shopping-cart","cart","tag","tags"],social:["share","share-alt","thumbs-up","thumbs-down","flag","heart","retweet","bookmark"],time:["calendar","calendar-alt","calendar-check","clock","stopwatch","hourglass","history"],location:["location","map","map-marker","compass","globe"],weather:["sun","moon","cloud","cloud-rain","bolt"],device:["laptop","desktop","tablet","mobile-alt","device-mobile","keyboard","mouse","print","wifi","bluetooth"],ui:["bars","ellipsis","ellipsis-v","toggle-on","toggle-off","expand","compress","grid","list"],education:["book","graduation-cap","bookmark-alt"],health:["heart-pulse","hospital","pills","syringe","stethoscope"],transport:["car","plane","train","ship","bicycle","truck"],food:["coffee","pizza","utensils","wine-glass"],gaming:["gamepad","dice","trophy","medal","crown","play","pause","stop"]},o=Object.values(i).flat(),c={all:"全て",navigation:"ナビゲーション",user:"ユーザー",organization:"組織・建物",security:"セキュリティ",data:"ファイル・データ",business:"ビジネス",analytics:"分析・グラフ",system:"システム・設定",finance:"金融・決済",notification:"通知",feedback:"フィードバック",action:"アクション",communication:"コミュニケーション",media:"メディア",shopping:"ショッピング",social:"ソーシャル",time:"時間・カレンダー",location:"位置情報・地図",weather:"天気",device:"デバイス",ui:"UI制御",education:"教育",health:"医療・健康",transport:"交通",food:"飲食",gaming:"ゲーム・エンタメ"},d=o.filter(f=>{var y;const b=f.toLowerCase().includes(e.toLowerCase()),j=n==="all"||((y=i[n])==null?void 0:y.includes(f));return b&&j}),p={};n==="all"?Object.entries(i).forEach(([f,b])=>{const j=b.filter(y=>y.toLowerCase().includes(e.toLowerCase()));j.length>0&&(p[f]=j)}):p[n]=d;const h=async f=>{const b=`<Icon name="${f}" className="w-5 h-5" />`;try{await navigator.clipboard.writeText(b),l(f),setTimeout(()=>l(""),2e3)}catch(j){console.error("コピーに失敗しました:",j);const y=document.createElement("textarea");y.value=b,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),l(f),setTimeout(()=>l(""),2e3)}};return t.jsxs("div",{className:"icons-page",children:[t.jsx("style",{jsx:!0,children:`
        .icons-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .controls {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
          padding: var(--spacing-6);
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
        }

        .search-control {
          display: flex;
          flex-direction: column;
        }

        .category-control {
          display: flex;
          flex-direction: column;
          min-width: 200px;
        }

        .control-label {
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-700);
          margin-bottom: var(--spacing-2);
        }

        .search-input {
          padding: var(--spacing-3) var(--spacing-4);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .category-select {
          padding: var(--spacing-3) var(--spacing-4);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          background: white;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .category-select:focus {
          outline: none;
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .results-count {
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
          font-size: var(--font-size-sm);
        }

        .category-section {
          margin-bottom: var(--spacing-8);
        }

        .category-header {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
          padding-bottom: var(--spacing-2);
          border-bottom: 2px solid var(--color-primary-500);
        }

        .icons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
        }

        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--spacing-4);
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }

        .icon-item:hover {
          border-color: var(--color-primary-300);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .icon-display {
          margin-bottom: var(--spacing-3);
          color: var(--color-neutral-700);
        }

        .icon-name {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: var(--color-neutral-900);
          text-align: center;
        }

        .copied-indicator {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--color-success-500);
          color: white;
          font-size: var(--font-size-xs);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .usage-section {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
        }

        .usage-title {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .usage-steps {
          list-style: none;
          padding: 0;
        }

        .usage-step {
          margin-bottom: var(--spacing-3);
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
        }

        .usage-code {
          background: var(--color-neutral-100);
          color: var(--color-primary-700);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-sm);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-sm);
          margin-left: var(--spacing-2);
        }

        @media (max-width: 768px) {
          .controls {
            grid-template-columns: 1fr;
          }

          .icons-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: var(--spacing-3);
          }
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"SVGアイコン一覧"}),t.jsx("p",{className:"page-description",children:"システム全体で使用する統一されたSVGアイコンライブラリです。 アイコンをクリックするとReactコンポーネントのコードがコピーされます。"})]}),t.jsxs("div",{className:"controls",children:[t.jsxs("div",{className:"search-control",children:[t.jsx("label",{className:"control-label",children:"アイコン検索"}),t.jsx("input",{type:"text",className:"search-input",placeholder:"アイコン名で検索...",value:e,onChange:f=>r(f.target.value)})]}),t.jsxs("div",{className:"category-control",children:[t.jsx("label",{className:"control-label",children:"カテゴリ"}),t.jsx("select",{className:"category-select",value:n,onChange:f=>a(f.target.value),children:Object.entries(c).map(([f,b])=>t.jsx("option",{value:f,children:b},f))})]})]}),t.jsxs("div",{className:"results-count",children:[d.length,"個のアイコンが見つかりました"]}),Object.entries(p).map(([f,b])=>t.jsxs("div",{className:"category-section",children:[t.jsxs("h2",{className:"category-header",children:[c[f]||f,t.jsxs("span",{style:{marginLeft:"var(--spacing-2)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)"},children:["(",b.length,")"]})]}),t.jsx("div",{className:"icons-grid",children:b.map(j=>t.jsxs("div",{className:"icon-item",onClick:()=>h(j),title:`${j} - クリックでコードをコピー`,children:[t.jsx("div",{className:"icon-display",children:t.jsx(z,{name:j,className:"w-8 h-8"})}),t.jsx("div",{className:"icon-name",children:j}),s===j&&t.jsx("div",{className:"copied-indicator",children:"コピー済み"})]},j))})]},f)),t.jsxs("div",{className:"usage-section",children:[t.jsx("h3",{className:"usage-title",children:"使用方法"}),t.jsxs("ul",{className:"usage-steps",children:[t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"1. インポート:"}),t.jsx("code",{className:"usage-code",children:"import Icon from '../../../components/icons/Icon.jsx';"})]}),t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"2. 基本的な使用:"}),t.jsx("code",{className:"usage-code",children:'<Icon name="dashboard" className="w-5 h-5" />'})]}),t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"3. カスタマイズ:"}),t.jsx("code",{className:"usage-code",children:'<Icon name="users" className="w-8 h-8 text-blue-600" />'})]})]})]})]})};var ev=Object.defineProperty,tv=(e,r,n)=>r in e?ev(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Ii=(e,r,n)=>(tv(e,typeof r!="symbol"?r+"":r,n),n);let rv=class{constructor(){Ii(this,"current",this.detect()),Ii(this,"handoffState","pending"),Ii(this,"currentId",0)}set(r){this.current!==r&&(this.handoffState="pending",this.currentId=0,this.current=r)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},kr=new rv;function gs(e){var r;return kr.isServer?null:e==null?document:(r=e==null?void 0:e.ownerDocument)!=null?r:document}function Ho(e){var r,n;return kr.isServer?null:e==null?document:(n=(r=e==null?void 0:e.getRootNode)==null?void 0:r.call(e))!=null?n:document}function wm(e){var r,n;return(n=(r=Ho(e))==null?void 0:r.activeElement)!=null?n:null}function nv(e){return wm(e)===e}function Xl(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(r=>setTimeout(()=>{throw r}))}function Br(){let e=[],r={addEventListener(n,a,s,l){return n.addEventListener(a,s,l),r.add(()=>n.removeEventListener(a,s,l))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);return r.add(()=>cancelAnimationFrame(a))},nextFrame(...n){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...n))},setTimeout(...n){let a=setTimeout(...n);return r.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return Xl(()=>{a.current&&n[0]()}),r.add(()=>{a.current=!1})},style(n,a,s){let l=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:s}),this.add(()=>{Object.assign(n.style,{[a]:l})})},group(n){let a=Br();return n(a),this.add(()=>a.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let a=e.indexOf(n);if(a>=0)for(let s of e.splice(a,1))s()}},dispose(){for(let n of e.splice(0))n()}};return r}function Gl(){let[e]=u.useState(Br);return u.useEffect(()=>()=>e.dispose(),[e]),e}let Ht=(e,r)=>{kr.isServer?u.useEffect(e,r):u.useLayoutEffect(e,r)};function Dn(e){let r=u.useRef(e);return Ht(()=>{r.current=e},[e]),r}let Ae=function(e){let r=Dn(e);return re.useCallback((...n)=>r.current(...n),[r])};function vs(e){return u.useMemo(()=>e,Object.values(e))}let av=u.createContext(void 0);function sv(){return u.useContext(av)}function Wo(...e){return Array.from(new Set(e.flatMap(r=>typeof r=="string"?r.split(" "):[]))).filter(Boolean).join(" ")}function Dr(e,r,...n){if(e in r){let s=r[e];return typeof s=="function"?s(...n):s}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Dr),a}var Cl=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Cl||{}),Zr=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Zr||{});function lr(){let e=iv();return u.useCallback(r=>lv({mergeRefs:e,...r}),[e])}function lv({ourProps:e,theirProps:r,slot:n,defaultTag:a,features:s,visible:l=!0,name:i,mergeRefs:o}){o=o??ov;let c=Nm(r,e);if(l)return Bs(c,n,a,i,o);let d=s??0;if(d&2){let{static:p=!1,...h}=c;if(p)return Bs(h,n,a,i,o)}if(d&1){let{unmount:p=!0,...h}=c;return Dr(p?0:1,{0(){return null},1(){return Bs({...h,hidden:!0,style:{display:"none"}},n,a,i,o)}})}return Bs(c,n,a,i,o)}function Bs(e,r={},n,a,s){let{as:l=n,children:i,refName:o="ref",...c}=Di(e,["unmount","static"]),d=e.ref!==void 0?{[o]:e.ref}:{},p=typeof i=="function"?i(r):i;"className"in c&&c.className&&typeof c.className=="function"&&(c.className=c.className(r)),c["aria-labelledby"]&&c["aria-labelledby"]===c.id&&(c["aria-labelledby"]=void 0);let h={};if(r){let f=!1,b=[];for(let[j,y]of Object.entries(r))typeof y=="boolean"&&(f=!0),y===!0&&b.push(j.replace(/([A-Z])/g,w=>`-${w.toLowerCase()}`));if(f){h["data-headlessui-state"]=b.join(" ");for(let j of b)h[`data-${j}`]=""}}if(Fa(l)&&(Object.keys(bn(c)).length>0||Object.keys(bn(h)).length>0))if(!u.isValidElement(p)||Array.isArray(p)&&p.length>1||dv(p)){if(Object.keys(bn(c)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(bn(c)).concat(Object.keys(bn(h))).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`))}else{let f=p.props,b=f==null?void 0:f.className,j=typeof b=="function"?(...v)=>Wo(b(...v),c.className):Wo(b,c.className),y=j?{className:j}:{},w=Nm(p.props,bn(Di(c,["ref"])));for(let v in h)v in w&&delete h[v];return u.cloneElement(p,Object.assign({},w,h,d,{ref:s(cv(p),d.ref)},y))}return u.createElement(l,Object.assign({},Di(c,["ref"]),!Fa(l)&&d,!Fa(l)&&h),p)}function iv(){let e=u.useRef([]),r=u.useCallback(n=>{for(let a of e.current)a!=null&&(typeof a=="function"?a(n):a.current=n)},[]);return(...n)=>{if(!n.every(a=>a==null))return e.current=n,r}}function ov(...e){return e.every(r=>r==null)?void 0:r=>{for(let n of e)n!=null&&(typeof n=="function"?n(r):n.current=r)}}function Nm(...e){if(e.length===0)return{};if(e.length===1)return e[0];let r={},n={};for(let a of e)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(a[s])):r[s]=a[s];if(r.disabled||r["aria-disabled"])for(let a in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(a)&&(n[a]=[s=>{var l;return(l=s==null?void 0:s.preventDefault)==null?void 0:l.call(s)}]);for(let a in n)Object.assign(r,{[a](s,...l){let i=n[a];for(let o of i){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;o(s,...l)}}});return r}function Wt(e){var r;return Object.assign(u.forwardRef(e),{displayName:(r=e.displayName)!=null?r:e.name})}function bn(e){let r=Object.assign({},e);for(let n in r)r[n]===void 0&&delete r[n];return r}function Di(e,r=[]){let n=Object.assign({},e);for(let a of r)a in n&&delete n[a];return n}function cv(e){return re.version.split(".")[0]>="19"?e.props.ref:e.ref}function Fa(e){return e===u.Fragment||e===Symbol.for("react.fragment")}function dv(e){return Fa(e.type)}let uv="span";var Rl=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Rl||{});function pv(e,r){var n;let{features:a=1,...s}=e,l={ref:r,"aria-hidden":(a&2)===2?!0:(n=s["aria-hidden"])!=null?n:void 0,hidden:(a&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return lr()({ourProps:l,theirProps:s,slot:{},defaultTag:uv,name:"Hidden"})}let Oo=Wt(pv);function mv(e){return typeof e!="object"||e===null?!1:"nodeType"in e}function un(e){return mv(e)&&"tagName"in e}function Ln(e){return un(e)&&"accessKey"in e}function en(e){return un(e)&&"tabIndex"in e}function hv(e){return un(e)&&"style"in e}function fv(e){return Ln(e)&&e.nodeName==="IFRAME"}function gv(e){return Ln(e)&&e.nodeName==="INPUT"}let km=Symbol();function vv(e,r=!0){return Object.assign(e,{[km]:r})}function Sr(...e){let r=u.useRef(e);u.useEffect(()=>{r.current=e},[e]);let n=Ae(a=>{for(let s of r.current)s!=null&&(typeof s=="function"?s(a):s.current=a)});return e.every(a=>a==null||(a==null?void 0:a[km]))?void 0:n}let ad=u.createContext(null);ad.displayName="DescriptionContext";function Sm(){let e=u.useContext(ad);if(e===null){let r=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,Sm),r}return e}function xv(){let[e,r]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let a=Ae(l=>(r(i=>[...i,l]),()=>r(i=>{let o=i.slice(),c=o.indexOf(l);return c!==-1&&o.splice(c,1),o}))),s=u.useMemo(()=>({register:a,slot:n.slot,name:n.name,props:n.props,value:n.value}),[a,n.slot,n.name,n.props,n.value]);return re.createElement(ad.Provider,{value:s},n.children)},[r])]}let yv="p";function jv(e,r){let n=u.useId(),a=sv(),{id:s=`headlessui-description-${n}`,...l}=e,i=Sm(),o=Sr(r);Ht(()=>i.register(s),[s,i.register]);let c=vs({...i.slot,disabled:a||!1}),d={ref:o,...i.props,id:s};return lr()({ourProps:d,theirProps:l,slot:c,defaultTag:yv,name:i.name||"Description"})}let bv=Wt(jv),wv=Object.assign(bv,{});var zm=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(zm||{});let Nv=u.createContext(()=>{});function kv({value:e,children:r}){return re.createElement(Nv.Provider,{value:e},r)}let Cm=class extends Map{constructor(r){super(),this.factory=r}get(r){let n=super.get(r);return n===void 0&&(n=this.factory(r),this.set(r,n)),n}};var Sv=Object.defineProperty,zv=(e,r,n)=>r in e?Sv(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Cv=(e,r,n)=>(zv(e,r+"",n),n),Rm=(e,r,n)=>{if(!r.has(e))throw TypeError("Cannot "+n)},Zt=(e,r,n)=>(Rm(e,r,"read from private field"),n?n.call(e):r.get(e)),Vi=(e,r,n)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,n)},$u=(e,r,n,a)=>(Rm(e,r,"write to private field"),r.set(e,n),n),vr,Ma,Pa;let Rv=class{constructor(r){Vi(this,vr,{}),Vi(this,Ma,new Cm(()=>new Set)),Vi(this,Pa,new Set),Cv(this,"disposables",Br()),$u(this,vr,r),kr.isServer&&this.disposables.microTask(()=>{this.dispose()})}dispose(){this.disposables.dispose()}get state(){return Zt(this,vr)}subscribe(r,n){if(kr.isServer)return()=>{};let a={selector:r,callback:n,current:r(Zt(this,vr))};return Zt(this,Pa).add(a),this.disposables.add(()=>{Zt(this,Pa).delete(a)})}on(r,n){return kr.isServer?()=>{}:(Zt(this,Ma).get(r).add(n),this.disposables.add(()=>{Zt(this,Ma).get(r).delete(n)}))}send(r){let n=this.reduce(Zt(this,vr),r);if(n!==Zt(this,vr)){$u(this,vr,n);for(let a of Zt(this,Pa)){let s=a.selector(Zt(this,vr));Mm(a.current,s)||(a.current=s,a.callback(s))}for(let a of Zt(this,Ma).get(r.type))a(Zt(this,vr),r)}}};vr=new WeakMap,Ma=new WeakMap,Pa=new WeakMap;function Mm(e,r){return Object.is(e,r)?!0:typeof e!="object"||e===null||typeof r!="object"||r===null?!1:Array.isArray(e)&&Array.isArray(r)?e.length!==r.length?!1:Bi(e[Symbol.iterator](),r[Symbol.iterator]()):e instanceof Map&&r instanceof Map||e instanceof Set&&r instanceof Set?e.size!==r.size?!1:Bi(e.entries(),r.entries()):Tu(e)&&Tu(r)?Bi(Object.entries(e)[Symbol.iterator](),Object.entries(r)[Symbol.iterator]()):!1}function Bi(e,r){do{let n=e.next(),a=r.next();if(n.done&&a.done)return!0;if(n.done||a.done||!Object.is(n.value,a.value))return!1}while(!0)}function Tu(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let r=Object.getPrototypeOf(e);return r===null||Object.getPrototypeOf(r)===null}var Mv=Object.defineProperty,Pv=(e,r,n)=>r in e?Mv(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Lu=(e,r,n)=>(Pv(e,typeof r!="symbol"?r+"":r,n),n),Ev=(e=>(e[e.Push=0]="Push",e[e.Pop=1]="Pop",e))(Ev||{});let $v={0(e,r){let n=r.id,a=e.stack,s=e.stack.indexOf(n);if(s!==-1){let l=e.stack.slice();return l.splice(s,1),l.push(n),a=l,{...e,stack:a}}return{...e,stack:[...e.stack,n]}},1(e,r){let n=r.id,a=e.stack.indexOf(n);if(a===-1)return e;let s=e.stack.slice();return s.splice(a,1),{...e,stack:s}}},Tv=class Pm extends Rv{constructor(){super(...arguments),Lu(this,"actions",{push:r=>this.send({type:0,id:r}),pop:r=>this.send({type:1,id:r})}),Lu(this,"selectors",{isTop:(r,n)=>r.stack[r.stack.length-1]===n,inStack:(r,n)=>r.stack.includes(n)})}static new(){return new Pm({stack:[]})}reduce(r,n){return Dr(n.type,$v,r,n)}};const Em=new Cm(()=>Tv.new());var $m={exports:{}},Tm={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=u;function Lv(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var _v=typeof Object.is=="function"?Object.is:Lv,Av=xs.useSyncExternalStore,Iv=xs.useRef,Dv=xs.useEffect,Vv=xs.useMemo,Bv=xs.useDebugValue;Tm.useSyncExternalStoreWithSelector=function(e,r,n,a,s){var l=Iv(null);if(l.current===null){var i={hasValue:!1,value:null};l.current=i}else i=l.current;l=Vv(function(){function c(b){if(!d){if(d=!0,p=b,b=a(b),s!==void 0&&i.hasValue){var j=i.value;if(s(j,b))return h=j}return h=b}if(j=h,_v(p,b))return j;var y=a(b);return s!==void 0&&s(j,y)?(p=b,j):(p=b,h=y)}var d=!1,p,h,f=n===void 0?null:n;return[function(){return c(r())},f===null?void 0:function(){return c(f())}]},[r,n,a,s]);var o=Av(e,l[0],l[1]);return Dv(function(){i.hasValue=!0,i.value=o},[o]),Bv(o),o};$m.exports=Tm;var Fv=$m.exports;function Lm(e,r,n=Mm){return Fv.useSyncExternalStoreWithSelector(Ae(a=>e.subscribe(Hv,a)),Ae(()=>e.state),Ae(()=>e.state),Ae(r),n)}function Hv(e){return e}function ys(e,r){let n=u.useId(),a=Em.get(r),[s,l]=Lm(a,u.useCallback(i=>[a.selectors.isTop(i,n),a.selectors.inStack(i,n)],[a,n]));return Ht(()=>{if(e)return a.actions.push(n),()=>a.actions.pop(n)},[a,e,n]),e?l?s:!0:!1}let Uo=new Map,Ha=new Map;function _u(e){var r;let n=(r=Ha.get(e))!=null?r:0;return Ha.set(e,n+1),n!==0?()=>Au(e):(Uo.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>Au(e))}function Au(e){var r;let n=(r=Ha.get(e))!=null?r:1;if(n===1?Ha.delete(e):Ha.set(e,n-1),n!==1)return;let a=Uo.get(e);a&&(a["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",a["aria-hidden"]),e.inert=a.inert,Uo.delete(e))}function Wv(e,{allowed:r,disallowed:n}={}){let a=ys(e,"inert-others");Ht(()=>{var s,l;if(!a)return;let i=Br();for(let c of(s=n==null?void 0:n())!=null?s:[])c&&i.add(_u(c));let o=(l=r==null?void 0:r())!=null?l:[];for(let c of o){if(!c)continue;let d=gs(c);if(!d)continue;let p=c.parentElement;for(;p&&p!==d.body;){for(let h of p.children)o.some(f=>h.contains(f))||i.add(_u(h));p=p.parentElement}}return i.dispose},[a,r,n])}function Ov(e,r,n){let a=Dn(s=>{let l=s.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});u.useEffect(()=>{if(!e)return;let s=r===null?null:Ln(r)?r:r.current;if(!s)return;let l=Br();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>a.current(s));i.observe(s),l.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>a.current(s));i.observe(s),l.add(()=>i.disconnect())}return()=>l.dispose()},[r,a,e])}let Ml=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),Uv=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Mr=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(Mr||{}),qo=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(qo||{}),qv=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(qv||{});function Qv(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Ml)).sort((r,n)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function Yv(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Uv)).sort((r,n)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var _m=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(_m||{});function Kv(e,r=0){var n;return e===((n=gs(e))==null?void 0:n.body)?!1:Dr(r,{0(){return e.matches(Ml)},1(){let a=e;for(;a!==null;){if(a.matches(Ml))return!0;a=a.parentElement}return!1}})}var Xv=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Xv||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Tr(e){e==null||e.focus({preventScroll:!0})}let Gv=["textarea","input"].join(",");function Jv(e){var r,n;return(n=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,Gv))!=null?n:!1}function Zv(e,r=n=>n){return e.slice().sort((n,a)=>{let s=r(n),l=r(a);if(s===null||l===null)return 0;let i=s.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Wa(e,r,{sorted:n=!0,relativeTo:a=null,skipElements:s=[]}={}){let l=Array.isArray(e)?e.length>0?Ho(e[0]):document:Ho(e),i=Array.isArray(e)?n?Zv(e):e:r&64?Yv(e):Qv(e);s.length>0&&i.length>1&&(i=i.filter(b=>!s.some(j=>j!=null&&"current"in j?(j==null?void 0:j.current)===b:j===b))),a=a??(l==null?void 0:l.activeElement);let o=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,i.indexOf(a))-1;if(r&4)return Math.max(0,i.indexOf(a))+1;if(r&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=r&32?{preventScroll:!0}:{},p=0,h=i.length,f;do{if(p>=h||p+h<=0)return 0;let b=c+p;if(r&16)b=(b+h)%h;else{if(b<0)return 3;if(b>=h)return 1}f=i[b],f==null||f.focus(d),p+=o}while(f!==wm(f));return r&6&&Jv(f)&&f.select(),2}function Am(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ex(){return/Android/gi.test(window.navigator.userAgent)}function Iu(){return Am()||ex()}function Fs(e,r,n,a){let s=Dn(n);u.useEffect(()=>{if(!e)return;function l(i){s.current(i)}return document.addEventListener(r,l,a),()=>document.removeEventListener(r,l,a)},[e,r,a])}function Im(e,r,n,a){let s=Dn(n);u.useEffect(()=>{if(!e)return;function l(i){s.current(i)}return window.addEventListener(r,l,a),()=>window.removeEventListener(r,l,a)},[e,r,a])}const Du=30;function tx(e,r,n){let a=Dn(n),s=u.useCallback(function(o,c){if(o.defaultPrevented)return;let d=c(o);if(d===null||!d.getRootNode().contains(d)||!d.isConnected)return;let p=function h(f){return typeof f=="function"?h(f()):Array.isArray(f)||f instanceof Set?f:[f]}(r);for(let h of p)if(h!==null&&(h.contains(d)||o.composed&&o.composedPath().includes(h)))return;return!Kv(d,_m.Loose)&&d.tabIndex!==-1&&o.preventDefault(),a.current(o,d)},[a,r]),l=u.useRef(null);Fs(e,"pointerdown",o=>{var c,d;Iu()||(l.current=((d=(c=o.composedPath)==null?void 0:c.call(o))==null?void 0:d[0])||o.target)},!0),Fs(e,"pointerup",o=>{if(Iu()||!l.current)return;let c=l.current;return l.current=null,s(o,()=>c)},!0);let i=u.useRef({x:0,y:0});Fs(e,"touchstart",o=>{i.current.x=o.touches[0].clientX,i.current.y=o.touches[0].clientY},!0),Fs(e,"touchend",o=>{let c={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};if(!(Math.abs(c.x-i.current.x)>=Du||Math.abs(c.y-i.current.y)>=Du))return s(o,()=>en(o.target)?o.target:null)},!0),Im(e,"blur",o=>s(o,()=>fv(window.document.activeElement)?window.document.activeElement:null),!0)}function sd(...e){return u.useMemo(()=>gs(...e),[...e])}function Dm(e,r,n,a){let s=Dn(n);u.useEffect(()=>{e=e??window;function l(i){s.current(i)}return e.addEventListener(r,l,a),()=>e.removeEventListener(r,l,a)},[e,r,a])}function rx(e){return u.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function nx(e,r){let n=e(),a=new Set;return{getSnapshot(){return n},subscribe(s){return a.add(s),()=>a.delete(s)},dispatch(s,...l){let i=r[s].call(n,...l);i&&(n=i,a.forEach(o=>o()))}}}function ax(){let e;return{before({doc:r}){var n;let a=r.documentElement,s=(n=r.defaultView)!=null?n:window;e=Math.max(0,s.innerWidth-a.clientWidth)},after({doc:r,d:n}){let a=r.documentElement,s=Math.max(0,a.clientWidth-a.offsetWidth),l=Math.max(0,e-s);n.style(a,"paddingRight",`${l}px`)}}}function sx(){return Am()?{before({doc:e,d:r,meta:n}){function a(s){for(let l of n().containers)for(let i of l())if(i.contains(s))return!0;return!1}r.microTask(()=>{var s;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let o=Br();o.style(e.documentElement,"scrollBehavior","auto"),r.add(()=>r.microTask(()=>o.dispose()))}let l=(s=window.scrollY)!=null?s:window.pageYOffset,i=null;r.addEventListener(e,"click",o=>{if(en(o.target))try{let c=o.target.closest("a");if(!c)return;let{hash:d}=new URL(c.href),p=e.querySelector(d);en(p)&&!a(p)&&(i=p)}catch{}},!0),r.group(o=>{r.addEventListener(e,"touchstart",c=>{if(o.dispose(),en(c.target)&&hv(c.target))if(a(c.target)){let d=c.target;for(;d.parentElement&&a(d.parentElement);)d=d.parentElement;o.style(d,"overscrollBehavior","contain")}else o.style(c.target,"touchAction","none")})}),r.addEventListener(e,"touchmove",o=>{if(en(o.target)){if(gv(o.target))return;if(a(o.target)){let c=o.target;for(;c.parentElement&&c.dataset.headlessuiPortal!==""&&!(c.scrollHeight>c.clientHeight||c.scrollWidth>c.clientWidth);)c=c.parentElement;c.dataset.headlessuiPortal===""&&o.preventDefault()}else o.preventDefault()}},{passive:!1}),r.add(()=>{var o;let c=(o=window.scrollY)!=null?o:window.pageYOffset;l!==c&&window.scrollTo(0,l),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function lx(){return{before({doc:e,d:r}){r.style(e.documentElement,"overflow","hidden")}}}function Vu(e){let r={};for(let n of e)Object.assign(r,n(r));return r}let zn=nx(()=>new Map,{PUSH(e,r){var n;let a=(n=this.get(e))!=null?n:{doc:e,count:0,d:Br(),meta:new Set,computedMeta:{}};return a.count++,a.meta.add(r),a.computedMeta=Vu(a.meta),this.set(e,a),this},POP(e,r){let n=this.get(e);return n&&(n.count--,n.meta.delete(r),n.computedMeta=Vu(n.meta)),this},SCROLL_PREVENT(e){let r={doc:e.doc,d:e.d,meta(){return e.computedMeta}},n=[sx(),ax(),lx()];n.forEach(({before:a})=>a==null?void 0:a(r)),n.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});zn.subscribe(()=>{let e=zn.getSnapshot(),r=new Map;for(let[n]of e)r.set(n,n.documentElement.style.overflow);for(let n of e.values()){let a=r.get(n.doc)==="hidden",s=n.count!==0;(s&&!a||!s&&a)&&zn.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&zn.dispatch("TEARDOWN",n)}});function ix(e,r,n=()=>({containers:[]})){let a=rx(zn),s=r?a.get(r):void 0,l=s?s.count>0:!1;return Ht(()=>{if(!(!r||!e))return zn.dispatch("PUSH",r,n),()=>zn.dispatch("POP",r,n)},[e,r]),l}function ox(e,r,n=()=>[document.body]){let a=ys(e,"scroll-lock");ix(a,r,s=>{var l;return{containers:[...(l=s.containers)!=null?l:[],n]}})}function cx(e=0){let[r,n]=u.useState(e),a=u.useCallback(c=>n(c),[]),s=u.useCallback(c=>n(d=>d|c),[]),l=u.useCallback(c=>(r&c)===c,[r]),i=u.useCallback(c=>n(d=>d&~c),[]),o=u.useCallback(c=>n(d=>d^c),[]);return{flags:r,setFlag:a,addFlag:s,hasFlag:l,removeFlag:i,toggleFlag:o}}var dx={},Bu,Fu;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Bu=process==null?void 0:dx)==null?void 0:Bu.NODE_ENV)==="test"&&typeof((Fu=Element==null?void 0:Element.prototype)==null?void 0:Fu.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var ux=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(ux||{});function px(e){let r={};for(let n in e)e[n]===!0&&(r[`data-${n}`]="");return r}function mx(e,r,n,a){let[s,l]=u.useState(n),{hasFlag:i,addFlag:o,removeFlag:c}=cx(e&&s?3:0),d=u.useRef(!1),p=u.useRef(!1),h=Gl();return Ht(()=>{var f;if(e){if(n&&l(!0),!r){n&&o(3);return}return(f=a==null?void 0:a.start)==null||f.call(a,n),hx(r,{inFlight:d,prepare(){p.current?p.current=!1:p.current=d.current,d.current=!0,!p.current&&(n?(o(3),c(4)):(o(4),c(2)))},run(){p.current?n?(c(3),o(4)):(c(4),o(3)):n?c(1):o(1)},done(){var b;p.current&&vx(r)||(d.current=!1,c(7),n||l(!1),(b=a==null?void 0:a.end)==null||b.call(a,n))}})}},[e,n,r,h]),e?[s,{closed:i(1),enter:i(2),leave:i(4),transition:i(2)||i(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function hx(e,{prepare:r,run:n,done:a,inFlight:s}){let l=Br();return gx(e,{prepare:r,inFlight:s}),l.nextFrame(()=>{n(),l.requestAnimationFrame(()=>{l.add(fx(e,a))})}),l.dispose}function fx(e,r){var n,a;let s=Br();if(!e)return s.dispose;let l=!1;s.add(()=>{l=!0});let i=(a=(n=e.getAnimations)==null?void 0:n.call(e).filter(o=>o instanceof CSSTransition))!=null?a:[];return i.length===0?(r(),s.dispose):(Promise.allSettled(i.map(o=>o.finished)).then(()=>{l||r()}),s.dispose)}function gx(e,{inFlight:r,prepare:n}){if(r!=null&&r.current){n();return}let a=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=a}function vx(e){var r,n;return((n=(r=e.getAnimations)==null?void 0:r.call(e))!=null?n:[]).some(a=>a instanceof CSSTransition&&a.playState!=="finished")}function ld(e,r){let n=u.useRef([]),a=Ae(e);u.useEffect(()=>{let s=[...n.current];for(let[l,i]of r.entries())if(n.current[l]!==i){let o=a(r,s);return n.current=r,o}},[a,...r])}let Jl=u.createContext(null);Jl.displayName="OpenClosedContext";var ur=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ur||{});function Zl(){return u.useContext(Jl)}function xx({value:e,children:r}){return re.createElement(Jl.Provider,{value:e},r)}function yx({children:e}){return re.createElement(Jl.Provider,{value:null},e)}function jx(e){function r(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",r))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",r),r())}let Yr=[];jx(()=>{function e(r){if(!en(r.target)||r.target===document.body||Yr[0]===r.target)return;let n=r.target;n=n.closest(Ml),Yr.unshift(n??r.target),Yr=Yr.filter(a=>a!=null&&a.isConnected),Yr.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Vm(e){let r=Ae(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,Xl(()=>{n.current&&r()})}),[r])}let Bm=u.createContext(!1);function bx(){return u.useContext(Bm)}function Hu(e){return re.createElement(Bm.Provider,{value:e.force},e.children)}function wx(e){let r=bx(),n=u.useContext(Hm),[a,s]=u.useState(()=>{var l;if(!r&&n!==null)return(l=n.current)!=null?l:null;if(kr.isServer)return null;let i=e==null?void 0:e.getElementById("headlessui-portal-root");if(i)return i;if(e===null)return null;let o=e.createElement("div");return o.setAttribute("id","headlessui-portal-root"),e.body.appendChild(o)});return u.useEffect(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a))},[a,e]),u.useEffect(()=>{r||n!==null&&s(n.current)},[n,s,r]),a}let Fm=u.Fragment,Nx=Wt(function(e,r){let{ownerDocument:n=null,...a}=e,s=u.useRef(null),l=Sr(vv(f=>{s.current=f}),r),i=sd(s.current),o=n??i,c=wx(o),d=u.useContext(Qo),p=Gl(),h=lr();return Vm(()=>{var f;c&&c.childNodes.length<=0&&((f=c.parentElement)==null||f.removeChild(c))}),c?nd.createPortal(re.createElement("div",{"data-headlessui-portal":"",ref:f=>{p.dispose(),d&&f&&p.add(d.register(f))}},h({ourProps:{ref:l},theirProps:a,slot:{},defaultTag:Fm,name:"Portal"})),c):null});function kx(e,r){let n=Sr(r),{enabled:a=!0,ownerDocument:s,...l}=e,i=lr();return a?re.createElement(Nx,{...l,ownerDocument:s,ref:n}):i({ourProps:{ref:n},theirProps:l,slot:{},defaultTag:Fm,name:"Portal"})}let Sx=u.Fragment,Hm=u.createContext(null);function zx(e,r){let{target:n,...a}=e,s={ref:Sr(r)},l=lr();return re.createElement(Hm.Provider,{value:n},l({ourProps:s,theirProps:a,defaultTag:Sx,name:"Popover.Group"}))}let Qo=u.createContext(null);function Cx(){let e=u.useContext(Qo),r=u.useRef([]),n=Ae(l=>(r.current.push(l),e&&e.register(l),()=>a(l))),a=Ae(l=>{let i=r.current.indexOf(l);i!==-1&&r.current.splice(i,1),e&&e.unregister(l)}),s=u.useMemo(()=>({register:n,unregister:a,portals:r}),[n,a,r]);return[r,u.useMemo(()=>function({children:l}){return re.createElement(Qo.Provider,{value:s},l)},[s])]}let Rx=Wt(kx),Wm=Wt(zx),Mx=Object.assign(Rx,{Group:Wm});function Px(e,r=typeof document<"u"?document.defaultView:null,n){let a=ys(e,"escape");Dm(r,"keydown",s=>{a&&(s.defaultPrevented||s.key===zm.Escape&&n(s))})}function Ex(){var e;let[r]=u.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,a]=u.useState((e=r==null?void 0:r.matches)!=null?e:!1);return Ht(()=>{if(!r)return;function s(l){a(l.matches)}return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[r]),n}function $x({defaultContainers:e=[],portals:r,mainTreeNode:n}={}){let a=Ae(()=>{var s,l;let i=gs(n),o=[];for(let c of e)c!==null&&(un(c)?o.push(c):"current"in c&&un(c.current)&&o.push(c.current));if(r!=null&&r.current)for(let c of r.current)o.push(c);for(let c of(s=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?s:[])c!==document.body&&c!==document.head&&un(c)&&c.id!=="headlessui-portal-root"&&(n&&(c.contains(n)||c.contains((l=n==null?void 0:n.getRootNode())==null?void 0:l.host))||o.some(d=>c.contains(d))||o.push(c));return o});return{resolveContainers:a,contains:Ae(s=>a().some(l=>l.contains(s)))}}let Om=u.createContext(null);function Wu({children:e,node:r}){let[n,a]=u.useState(null),s=Um(r??n);return re.createElement(Om.Provider,{value:s},e,s===null&&re.createElement(Oo,{features:Rl.Hidden,ref:l=>{var i,o;if(l){for(let c of(o=(i=gs(l))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?o:[])if(c!==document.body&&c!==document.head&&un(c)&&c!=null&&c.contains(l)){a(c);break}}}}))}function Um(e=null){var r;return(r=u.useContext(Om))!=null?r:e}function Tx(){let e=typeof document>"u";return"useSyncExternalStore"in Wi?(r=>r.useSyncExternalStore)(Wi)(()=>()=>{},()=>!1,()=>!e):!1}function ei(){let e=Tx(),[r,n]=u.useState(kr.isHandoffComplete);return r&&kr.isHandoffComplete===!1&&n(!1),u.useEffect(()=>{r!==!0&&n(!0)},[r]),u.useEffect(()=>kr.handoff(),[]),e?!1:r}function id(){let e=u.useRef(!1);return Ht(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var Ea=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ea||{});function Lx(){let e=u.useRef(0);return Im(!0,"keydown",r=>{r.key==="Tab"&&(e.current=r.shiftKey?1:0)},!0),e}function qm(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let r=new Set;for(let n of e.current)un(n.current)&&r.add(n.current);return r}let _x="div";var wn=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(wn||{});function Ax(e,r){let n=u.useRef(null),a=Sr(n,r),{initialFocus:s,initialFocusFallback:l,containers:i,features:o=15,...c}=e;ei()||(o=0);let d=sd(n.current);Bx(o,{ownerDocument:d});let p=Fx(o,{ownerDocument:d,container:n,initialFocus:s,initialFocusFallback:l});Hx(o,{ownerDocument:d,container:n,containers:i,previousActiveElement:p});let h=Lx(),f=Ae(g=>{if(!Ln(n.current))return;let m=n.current;(x=>x())(()=>{Dr(h.current,{[Ea.Forwards]:()=>{Wa(m,Mr.First,{skipElements:[g.relatedTarget,l]})},[Ea.Backwards]:()=>{Wa(m,Mr.Last,{skipElements:[g.relatedTarget,l]})}})})}),b=ys(!!(o&2),"focus-trap#tab-lock"),j=Gl(),y=u.useRef(!1),w={ref:a,onKeyDown(g){g.key=="Tab"&&(y.current=!0,j.requestAnimationFrame(()=>{y.current=!1}))},onBlur(g){if(!(o&4))return;let m=qm(i);Ln(n.current)&&m.add(n.current);let x=g.relatedTarget;en(x)&&x.dataset.headlessuiFocusGuard!=="true"&&(Qm(m,x)||(y.current?Wa(n.current,Dr(h.current,{[Ea.Forwards]:()=>Mr.Next,[Ea.Backwards]:()=>Mr.Previous})|Mr.WrapAround,{relativeTo:g.target}):en(g.target)&&Tr(g.target)))}},v=lr();return re.createElement(re.Fragment,null,b&&re.createElement(Oo,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Rl.Focusable}),v({ourProps:w,theirProps:c,defaultTag:_x,name:"FocusTrap"}),b&&re.createElement(Oo,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Rl.Focusable}))}let Ix=Wt(Ax),Dx=Object.assign(Ix,{features:wn});function Vx(e=!0){let r=u.useRef(Yr.slice());return ld(([n],[a])=>{a===!0&&n===!1&&Xl(()=>{r.current.splice(0)}),a===!1&&n===!0&&(r.current=Yr.slice())},[e,Yr,r]),Ae(()=>{var n;return(n=r.current.find(a=>a!=null&&a.isConnected))!=null?n:null})}function Bx(e,{ownerDocument:r}){let n=!!(e&8),a=Vx(n);ld(()=>{n||nv(r==null?void 0:r.body)&&Tr(a())},[n]),Vm(()=>{n&&Tr(a())})}function Fx(e,{ownerDocument:r,container:n,initialFocus:a,initialFocusFallback:s}){let l=u.useRef(null),i=ys(!!(e&1),"focus-trap#initial-focus"),o=id();return ld(()=>{if(e===0)return;if(!i){s!=null&&s.current&&Tr(s.current);return}let c=n.current;c&&Xl(()=>{if(!o.current)return;let d=r==null?void 0:r.activeElement;if(a!=null&&a.current){if((a==null?void 0:a.current)===d){l.current=d;return}}else if(c.contains(d)){l.current=d;return}if(a!=null&&a.current)Tr(a.current);else{if(e&16){if(Wa(c,Mr.First|Mr.AutoFocus)!==qo.Error)return}else if(Wa(c,Mr.First)!==qo.Error)return;if(s!=null&&s.current&&(Tr(s.current),(r==null?void 0:r.activeElement)===s.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=r==null?void 0:r.activeElement})},[s,i,e]),l}function Hx(e,{ownerDocument:r,container:n,containers:a,previousActiveElement:s}){let l=id(),i=!!(e&4);Dm(r==null?void 0:r.defaultView,"focus",o=>{if(!i||!l.current)return;let c=qm(a);Ln(n.current)&&c.add(n.current);let d=s.current;if(!d)return;let p=o.target;Ln(p)?Qm(c,p)?(s.current=p,Tr(p)):(o.preventDefault(),o.stopPropagation(),Tr(d)):Tr(s.current)},!0)}function Qm(e,r){for(let n of e)if(n.contains(r))return!0;return!1}function Ym(e){var r;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||!Fa((r=e.as)!=null?r:Xm)||re.Children.count(e.children)===1}let ti=u.createContext(null);ti.displayName="TransitionContext";var Wx=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Wx||{});function Ox(){let e=u.useContext(ti);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ux(){let e=u.useContext(ri);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let ri=u.createContext(null);ri.displayName="NestingContext";function ni(e){return"children"in e?ni(e.children):e.current.filter(({el:r})=>r.current!==null).filter(({state:r})=>r==="visible").length>0}function Km(e,r){let n=Dn(e),a=u.useRef([]),s=id(),l=Gl(),i=Ae((b,j=Zr.Hidden)=>{let y=a.current.findIndex(({el:w})=>w===b);y!==-1&&(Dr(j,{[Zr.Unmount](){a.current.splice(y,1)},[Zr.Hidden](){a.current[y].state="hidden"}}),l.microTask(()=>{var w;!ni(a)&&s.current&&((w=n.current)==null||w.call(n))}))}),o=Ae(b=>{let j=a.current.find(({el:y})=>y===b);return j?j.state!=="visible"&&(j.state="visible"):a.current.push({el:b,state:"visible"}),()=>i(b,Zr.Unmount)}),c=u.useRef([]),d=u.useRef(Promise.resolve()),p=u.useRef({enter:[],leave:[]}),h=Ae((b,j,y)=>{c.current.splice(0),r&&(r.chains.current[j]=r.chains.current[j].filter(([w])=>w!==b)),r==null||r.chains.current[j].push([b,new Promise(w=>{c.current.push(w)})]),r==null||r.chains.current[j].push([b,new Promise(w=>{Promise.all(p.current[j].map(([v,g])=>g)).then(()=>w())})]),j==="enter"?d.current=d.current.then(()=>r==null?void 0:r.wait.current).then(()=>y(j)):y(j)}),f=Ae((b,j,y)=>{Promise.all(p.current[j].splice(0).map(([w,v])=>v)).then(()=>{var w;(w=c.current.shift())==null||w()}).then(()=>y(j))});return u.useMemo(()=>({children:a,register:o,unregister:i,onStart:h,onStop:f,wait:d,chains:p}),[o,i,a,h,f,p,d])}let Xm=u.Fragment,Gm=Cl.RenderStrategy;function qx(e,r){var n,a;let{transition:s=!0,beforeEnter:l,afterEnter:i,beforeLeave:o,afterLeave:c,enter:d,enterFrom:p,enterTo:h,entered:f,leave:b,leaveFrom:j,leaveTo:y,...w}=e,[v,g]=u.useState(null),m=u.useRef(null),x=Ym(e),N=Sr(...x?[m,r,g]:r===null?[]:[r]),C=(n=w.unmount)==null||n?Zr.Unmount:Zr.Hidden,{show:k,appear:R,initial:I}=Ox(),[_,P]=u.useState(k?"visible":"hidden"),T=Ux(),{register:$,unregister:W}=T;Ht(()=>$(m),[$,m]),Ht(()=>{if(C===Zr.Hidden&&m.current){if(k&&_!=="visible"){P("visible");return}return Dr(_,{hidden:()=>W(m),visible:()=>$(m)})}},[_,m,$,W,k,C]);let Q=ei();Ht(()=>{if(x&&Q&&_==="visible"&&m.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[m,_,Q,x]);let L=I&&!R,A=R&&k&&I,M=u.useRef(!1),D=Km(()=>{M.current||(P("hidden"),W(m))},T),V=Ae(te=>{M.current=!0;let fe=te?"enter":"leave";D.onStart(m,fe,ge=>{ge==="enter"?l==null||l():ge==="leave"&&(o==null||o())})}),q=Ae(te=>{let fe=te?"enter":"leave";M.current=!1,D.onStop(m,fe,ge=>{ge==="enter"?i==null||i():ge==="leave"&&(c==null||c())}),fe==="leave"&&!ni(D)&&(P("hidden"),W(m))});u.useEffect(()=>{x&&s||(V(k),q(k))},[k,x,s]);let O=!(!s||!x||!Q||L),[,X]=mx(O,v,k,{start:V,end:q}),G=bn({ref:N,className:((a=Wo(w.className,A&&d,A&&p,X.enter&&d,X.enter&&X.closed&&p,X.enter&&!X.closed&&h,X.leave&&b,X.leave&&!X.closed&&j,X.leave&&X.closed&&y,!X.transition&&k&&f))==null?void 0:a.trim())||void 0,...px(X)}),ee=0;_==="visible"&&(ee|=ur.Open),_==="hidden"&&(ee|=ur.Closed),k&&_==="hidden"&&(ee|=ur.Opening),!k&&_==="visible"&&(ee|=ur.Closing);let B=lr();return re.createElement(ri.Provider,{value:D},re.createElement(xx,{value:ee},B({ourProps:G,theirProps:w,defaultTag:Xm,features:Gm,visible:_==="visible",name:"Transition.Child"})))}function Qx(e,r){let{show:n,appear:a=!1,unmount:s=!0,...l}=e,i=u.useRef(null),o=Ym(e),c=Sr(...o?[i,r]:r===null?[]:[r]);ei();let d=Zl();if(n===void 0&&d!==null&&(n=(d&ur.Open)===ur.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,h]=u.useState(n?"visible":"hidden"),f=Km(()=>{n||h("hidden")}),[b,j]=u.useState(!0),y=u.useRef([n]);Ht(()=>{b!==!1&&y.current[y.current.length-1]!==n&&(y.current.push(n),j(!1))},[y,n]);let w=u.useMemo(()=>({show:n,appear:a,initial:b}),[n,a,b]);Ht(()=>{n?h("visible"):!ni(f)&&i.current!==null&&h("hidden")},[n,f]);let v={unmount:s},g=Ae(()=>{var N;b&&j(!1),(N=e.beforeEnter)==null||N.call(e)}),m=Ae(()=>{var N;b&&j(!1),(N=e.beforeLeave)==null||N.call(e)}),x=lr();return re.createElement(ri.Provider,{value:f},re.createElement(ti.Provider,{value:w},x({ourProps:{...v,as:u.Fragment,children:re.createElement(Jm,{ref:c,...v,...l,beforeEnter:g,beforeLeave:m})},theirProps:{},defaultTag:u.Fragment,features:Gm,visible:p==="visible",name:"Transition"})))}function Yx(e,r){let n=u.useContext(ti)!==null,a=Zl()!==null;return re.createElement(re.Fragment,null,!n&&a?re.createElement(Yo,{ref:r,...e}):re.createElement(Jm,{ref:r,...e}))}let Yo=Wt(Qx),Jm=Wt(qx),cs=Wt(Yx),od=Object.assign(Yo,{Child:cs,Root:Yo});var Kx=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kx||{}),Xx=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Xx||{});let Gx={0(e,r){return e.titleId===r.id?e:{...e,titleId:r.id}}},cd=u.createContext(null);cd.displayName="DialogContext";function ai(e){let r=u.useContext(cd);if(r===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ai),n}return r}function Jx(e,r){return Dr(r.type,Gx,e,r)}let Ou=Wt(function(e,r){let n=u.useId(),{id:a=`headlessui-dialog-${n}`,open:s,onClose:l,initialFocus:i,role:o="dialog",autoFocus:c=!0,__demoMode:d=!1,unmount:p=!1,...h}=e,f=u.useRef(!1);o=function(){return o==="dialog"||o==="alertdialog"?o:(f.current||(f.current=!0,console.warn(`Invalid role [${o}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let b=Zl();s===void 0&&b!==null&&(s=(b&ur.Open)===ur.Open);let j=u.useRef(null),y=Sr(j,r),w=sd(j.current),v=s?0:1,[g,m]=u.useReducer(Jx,{titleId:null,descriptionId:null,panelRef:u.createRef()}),x=Ae(()=>l(!1)),N=Ae(X=>m({type:0,id:X})),C=ei()?v===0:!1,[k,R]=Cx(),I={get current(){var X;return(X=g.panelRef.current)!=null?X:j.current}},_=Um(),{resolveContainers:P}=$x({mainTreeNode:_,portals:k,defaultContainers:[I]}),T=b!==null?(b&ur.Closing)===ur.Closing:!1;Wv(d||T?!1:C,{allowed:Ae(()=>{var X,G;return[(G=(X=j.current)==null?void 0:X.closest("[data-headlessui-portal]"))!=null?G:null]}),disallowed:Ae(()=>{var X;return[(X=_==null?void 0:_.closest("body > *:not(#headlessui-portal-root)"))!=null?X:null]})});let $=Em.get(null);Ht(()=>{if(C)return $.actions.push(a),()=>$.actions.pop(a)},[$,a,C]);let W=Lm($,u.useCallback(X=>$.selectors.isTop(X,a),[$,a]));tx(W,P,X=>{X.preventDefault(),x()}),Px(W,w==null?void 0:w.defaultView,X=>{X.preventDefault(),X.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),x()}),ox(d||T?!1:C,w,P),Ov(C,j,x);let[Q,L]=xv(),A=u.useMemo(()=>[{dialogState:v,close:x,setTitleId:N,unmount:p},g],[v,x,N,p,g]),M=vs({open:v===0}),D={ref:y,id:a,role:o,tabIndex:-1,"aria-modal":d?void 0:v===0?!0:void 0,"aria-labelledby":g.titleId,"aria-describedby":Q,unmount:p},V=!Ex(),q=wn.None;C&&!d&&(q|=wn.RestoreFocus,q|=wn.TabLock,c&&(q|=wn.AutoFocus),V&&(q|=wn.InitialFocus));let O=lr();return re.createElement(yx,null,re.createElement(Hu,{force:!0},re.createElement(Mx,null,re.createElement(cd.Provider,{value:A},re.createElement(Wm,{target:j},re.createElement(Hu,{force:!1},re.createElement(L,{slot:M},re.createElement(R,null,re.createElement(Dx,{initialFocus:i,initialFocusFallback:j,containers:P,features:q},re.createElement(kv,{value:x},O({ourProps:D,theirProps:h,slot:M,defaultTag:Zx,features:e2,visible:v===0,name:"Dialog"})))))))))))}),Zx="div",e2=Cl.RenderStrategy|Cl.Static;function t2(e,r){let{transition:n=!1,open:a,...s}=e,l=Zl(),i=e.hasOwnProperty("open")||l!==null,o=e.hasOwnProperty("onClose");if(!i&&!o)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!o)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(a!==void 0||n)&&!s.static?re.createElement(Wu,null,re.createElement(od,{show:a,transition:n,unmount:s.unmount},re.createElement(Ou,{ref:r,...s}))):re.createElement(Wu,null,re.createElement(Ou,{ref:r,open:a,...s}))}let r2="div";function n2(e,r){let n=u.useId(),{id:a=`headlessui-dialog-panel-${n}`,transition:s=!1,...l}=e,[{dialogState:i,unmount:o},c]=ai("Dialog.Panel"),d=Sr(r,c.panelRef),p=vs({open:i===0}),h=Ae(w=>{w.stopPropagation()}),f={ref:d,id:a,onClick:h},b=s?cs:u.Fragment,j=s?{unmount:o}:{},y=lr();return re.createElement(b,{...j},y({ourProps:f,theirProps:l,slot:p,defaultTag:r2,name:"Dialog.Panel"}))}let a2="div";function s2(e,r){let{transition:n=!1,...a}=e,[{dialogState:s,unmount:l}]=ai("Dialog.Backdrop"),i=vs({open:s===0}),o={ref:r,"aria-hidden":!0},c=n?cs:u.Fragment,d=n?{unmount:l}:{},p=lr();return re.createElement(c,{...d},p({ourProps:o,theirProps:a,slot:i,defaultTag:a2,name:"Dialog.Backdrop"}))}let l2="h2";function i2(e,r){let n=u.useId(),{id:a=`headlessui-dialog-title-${n}`,...s}=e,[{dialogState:l,setTitleId:i}]=ai("Dialog.Title"),o=Sr(r);u.useEffect(()=>(i(a),()=>i(null)),[a,i]);let c=vs({open:l===0}),d={ref:o,id:a};return lr()({ourProps:d,theirProps:s,slot:c,defaultTag:l2,name:"Dialog.Title"})}let o2=Wt(t2),Zm=Wt(n2);Wt(s2);let c2=Wt(i2),d2=Object.assign(o2,{Panel:Zm,Title:c2,Description:wv});function u2({children:e,show:r=!1,maxWidth:n="2xl",closeable:a=!0,onClose:s=()=>{},title:l=""}){const i=()=>{a&&s()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"};return t.jsx(od,{show:r,leave:"duration-200",children:t.jsxs(d2,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:i,children:[t.jsx(cs,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),t.jsx(cs,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:t.jsxs(Zm,{className:`mb-6 transform overflow-hidden bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${o[n]}`,style:{borderRadius:"var(--radius-lg)"},children:[l&&t.jsx("div",{style:{padding:"var(--spacing-6)",borderBottom:"1px solid var(--color-neutral-200)"},children:t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:l})}),t.jsx("div",{style:{padding:"var(--spacing-6)"},children:e})]})})]})})}function p2({show:e,onClose:r,title:n="情報",message:a,type:s="info",confirmText:l="確認",icon:i=null}){if(u.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),u.useEffect(()=>{const d=p=>{p.key==="Escape"&&e&&r()};if(e)return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,r]),!e)return null;const c=(()=>{switch(s){case"warning":return{iconBg:"bg-yellow-100",iconColor:"text-yellow-600",buttonColor:"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})};case"error":return{iconBg:"bg-red-100",iconColor:"text-red-600",buttonColor:"bg-red-600 hover:bg-red-700 focus:ring-red-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})};case"success":return{iconBg:"bg-green-100",iconColor:"text-green-600",buttonColor:"bg-green-600 hover:bg-green-700 focus:ring-green-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})};default:return{iconBg:"bg-blue-100",iconColor:"text-blue-600",buttonColor:"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}}})();return t.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center",onClick:r,children:t.jsx("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4",onClick:d=>d.stopPropagation(),children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-start mb-4",children:[t.jsx("div",{className:`flex-shrink-0 w-10 h-10 mx-auto ${c.iconBg} rounded-full flex items-center justify-center mr-4`,children:t.jsx("div",{className:c.iconColor,children:i||c.defaultIcon})}),t.jsx("div",{className:"flex-1",children:t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:n})})]}),t.jsx("div",{className:"mb-6",children:t.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap leading-relaxed",children:a})}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{onClick:r,className:`px-4 py-2 ${c.buttonColor} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out`,children:l})})]})})})}function eh({show:e,onClose:r,onConfirm:n,title:a="確認",message:s,confirmText:l="実行",cancelText:i="キャンセル",danger:o=!1,processing:c=!1}){if(u.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),!e)return null;const d=o?"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 transition duration-150 ease-in-out":"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition duration-150 ease-in-out";return t.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center",children:t.jsx("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-start mb-4",children:[o&&t.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4",children:t.jsx("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),t.jsx("div",{className:"flex-1",children:t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:a})})]}),t.jsx("div",{className:"mb-6",children:t.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap",children:s})}),t.jsxs("div",{className:"flex justify-end gap-3",children:[t.jsx("button",{onClick:r,disabled:c,className:"px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 transition duration-150 ease-in-out",children:i}),t.jsx("button",{onClick:n,disabled:c,className:d,children:c?"処理中...":l})]})]})})})}const Uu=()=>{const[e,r]=u.useState(!1),[n,a]=u.useState(!1),[s,l]=u.useState(!1),[i,o]=u.useState(2),[c,d]=u.useState(!1),p=u.useRef(null),[h,f]=u.useState(!1),[b,j]=u.useState({type:"success",title:"",message:""}),[y,w]=u.useState(45),[v,g]=u.useState(75),[m,x]=u.useState(!1),[N,C]=u.useState(!1),[k,R]=u.useState(!1),[I,_]=u.useState(!1),[P,T]=u.useState(!1),[$,W]=u.useState(!1),[Q,L]=u.useState(!1),[A,M]=u.useState(!1),[D,V]=u.useState(!1),[q,O]=u.useState(!1),[X,G]=u.useState(!1),[ee,B]=u.useState(!1),[te,fe]=u.useState(!1),[ge,Qe]=u.useState(!1),[Ye,Ke]=u.useState(!1),S=({show:se=!1,type:K="info",title:me,message:at,confirmText:ye="確認",cancelText:De="キャンセル",showCancel:Ve=!0,onConfirm:ft,onCancel:ze,onClose:it})=>{const Ce={success:{icon:"✓",color:"#10b981",bgColor:"#ecfdf5",borderColor:"#10b981"},warning:{icon:"⚠",color:"#f59e0b",bgColor:"#fffbeb",borderColor:"#f59e0b"},danger:{icon:"✕",color:"#ef4444",bgColor:"#fef2f2",borderColor:"#ef4444"},info:{icon:"ℹ",color:"#3b82f6",bgColor:"#eff6ff",borderColor:"#3b82f6"}},gt=Ce[K]||Ce.info,Ct=Tt=>{Tt.target===Tt.currentTarget&&it&&it()},zr=()=>{ft&&ft(),it&&it()},Fr=()=>{ze&&ze(),it&&it()};return se?t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"var(--spacing-4)"},onClick:Ct,children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius-lg)",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",maxWidth:"400px",width:"100%",maxHeight:"90vh",overflow:"auto"},children:[t.jsxs("div",{style:{padding:"var(--spacing-6)",borderBottom:"1px solid var(--color-neutral-200)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:gt.bgColor,border:`2px solid ${gt.borderColor}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",color:gt.color,fontWeight:"bold"},children:gt.icon}),t.jsx("div",{children:t.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:me})})]}),t.jsx("div",{style:{padding:"var(--spacing-6)"},children:t.jsx("p",{style:{margin:0,fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:at})}),t.jsxs("div",{style:{padding:"var(--spacing-6)",paddingTop:0,display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end"},children:[Ve&&t.jsx(Nt,{onClick:Fr,children:De}),t.jsx("button",{onClick:zr,style:{padding:"var(--spacing-2) var(--spacing-4)",borderRadius:"var(--radius-md)",border:"none",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"all 0.2s",backgroundColor:gt.color,color:"white"},onMouseEnter:Tt=>{Tt.target.style.opacity="0.9",Tt.target.style.transform="translateY(-1px)"},onMouseLeave:Tt=>{Tt.target.style.opacity="1",Tt.target.style.transform="translateY(0)"},children:ye})]})]})}):null},U=({show:se,type:K="info",message:me,action:at=null,actionText:ye=null,onAction:De=null,onClose:Ve,autoHide:ft=!0,duration:ze=4e3,position:it="bottom-left"})=>{if(u.useEffect(()=>{if(se&&ft){const zr=setTimeout(()=>{Ve()},ze);return()=>clearTimeout(zr)}},[se,ft,ze,Ve]),!se)return null;const Ce={success:{backgroundColor:"#d4edda",borderColor:"#c3e6cb",color:"#155724",iconColor:"#28a745"},error:{backgroundColor:"#f8d7da",borderColor:"#f5c6cb",color:"#721c24",iconColor:"#dc3545"},warning:{backgroundColor:"#fff3cd",borderColor:"#ffeaa7",color:"#856404",iconColor:"#ffc107"},info:{backgroundColor:"#d1ecf1",borderColor:"#bee5eb",color:"#0c5460",iconColor:"#17a2b8"}},gt={"top-left":{top:"20px",left:"20px"},"top-right":{top:"20px",right:"20px"},"bottom-left":{bottom:"20px",left:"20px"},"bottom-right":{bottom:"20px",right:"20px"},"top-center":{top:"20px",left:"50%",transform:"translateX(-50%)"},"bottom-center":{bottom:"20px",left:"50%",transform:"translateX(-50%)"}},Ct=()=>{switch(K){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ";default:return"ℹ"}};return t.jsxs("div",{style:{position:"fixed",...gt[it],zIndex:1e3,minWidth:"300px",maxWidth:"500px",padding:"12px 16px",backgroundColor:Ce[K].backgroundColor,border:`1px solid ${Ce[K].borderColor}`,borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out",fontSize:"14px",lineHeight:"1.4"},children:[t.jsx("style",{children:`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: ${it.includes("bottom")?"translateY(100%)":"translateY(-100%)"} ${it.includes("center")?"translateX(-50%)":""};
              }
              to {
                opacity: 1;
                transform: ${it.includes("center")?"translateX(-50%)":"none"};
              }
            }
          `}),t.jsx("span",{style:{color:Ce[K].iconColor,fontSize:"16px",fontWeight:"bold",flexShrink:0},children:Ct()}),t.jsx("span",{style:{color:Ce[K].color,flex:1},children:me}),at&&ye&&t.jsx("button",{onClick:De,style:{background:"none",border:"none",color:Ce[K].iconColor,textDecoration:"underline",cursor:"pointer",fontSize:"14px",fontWeight:"500",padding:"0",marginLeft:"8px"},children:ye}),t.jsx("button",{onClick:Ve,style:{background:"none",border:"none",color:Ce[K].color,cursor:"pointer",fontSize:"16px",padding:"0",marginLeft:"8px",opacity:.7,flexShrink:0},children:"×"})]})};u.useEffect(()=>{const se=K=>{p.current&&!p.current.contains(K.target)&&d(!1)};if(c)return document.addEventListener("mousedown",se),()=>{document.removeEventListener("mousedown",se)}},[c]);const ce=({show:se,message:K="読み込み中..."})=>se?t.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:9999},children:[t.jsx("div",{style:{width:"48px",height:"48px",border:"4px solid #f3f4f6",borderTop:"4px solid rgb(21, 52, 109)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),t.jsx("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-lg)",color:"var(--color-neutral-600)",fontWeight:"var(--font-weight-medium)"},children:K})]}):null,oe=({show:se,onClose:K,message:me="処理中..."})=>se?t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius-lg)",padding:"var(--spacing-8)",textAlign:"center",minWidth:"300px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #f3f4f6",borderTop:"4px solid rgb(21, 52, 109)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto var(--spacing-4) auto"}}),t.jsx("h3",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:me}),t.jsx("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-4)"},children:"しばらくお待ちください..."}),K&&t.jsx("button",{onClick:K,style:{padding:"var(--spacing-2) var(--spacing-4)",backgroundColor:"var(--color-neutral-100)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"キャンセル"})]})}):null,$t=[{label:"総ユーザー数",value:"1,234",icon:"users",color:"primary"},{label:"アクティブセッション",value:"89",icon:"user-check",color:"success"},{label:"本日の訪問数",value:"456",icon:"eye",color:"info"},{label:"エラー率",value:"0.23%",icon:"warning",color:"warning"}],E=se=>{const K={primary:{bg:"#f0f4f8",text:"#2c3e50",icon:"#2c3e50"},success:{bg:"#e6f4ea",text:"#137333",icon:"#34a853"},info:{bg:"#e8f0fe",text:"#1967d2",icon:"#4285f4"},warning:{bg:"#fef7e0",text:"#7a6100",icon:"#fbbc04"}};return K[se]||K.primary},J=({type:se,message:K,icon:me,onClose:at})=>{const ye={success:{bg:"#dcfce7",border:"#bbf7d0",text:"#15803d",iconColor:"#16a34a"},info:{bg:"#dbeafe",border:"#bfdbfe",text:"#1e40af",iconColor:"#3b82f6"},warning:{bg:"#fef3c7",border:"#fde68a",text:"#92400e",iconColor:"#f59e0b"},danger:{bg:"#fecaca",border:"#fecaca",text:"#b91c1c",iconColor:"#ef4444"}},De=ye[se]||ye.info,Ve=me||{success:"check",info:"info",warning:"warning",danger:"error"}[se];return t.jsxs("div",{style:{backgroundColor:De.bg,border:`1px solid ${De.border}`,borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",marginBottom:"var(--spacing-3)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx(z,{name:Ve,style:{color:De.iconColor,width:"20px",height:"20px",flexShrink:0}}),t.jsx("div",{style:{color:De.text,fontSize:"var(--font-size-sm)",flex:1},children:K})]})},he=({type:se,title:K,message:me,showToast:at,onClose:ye})=>{if(!at)return null;const De={success:{bg:"#059669",border:"#059669",text:"#ffffff",iconColor:"#ffffff"},info:{bg:"#3b82f6",border:"#3b82f6",text:"#ffffff",iconColor:"#ffffff"},warning:{bg:"#f59e0b",border:"#f59e0b",text:"#ffffff",iconColor:"#ffffff"},error:{bg:"#ef4444",border:"#ef4444",text:"#ffffff",iconColor:"#ffffff"}},Ve=De[se]||De.info,ft={success:"check",info:"info",warning:"warning",error:"error"}[se];return t.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",backgroundColor:Ve.bg,border:`1px solid ${Ve.border}`,borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:Ve.text,minWidth:"300px",maxWidth:"400px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.15)",zIndex:1e3,display:"flex",alignItems:"flex-start",gap:"var(--spacing-3)",animation:"slideInRight 0.3s ease-out"},children:[t.jsx(z,{name:ft,style:{color:Ve.iconColor,width:"20px",height:"20px",flexShrink:0}}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{fontWeight:"var(--font-weight-semibold)",marginBottom:"var(--spacing-1)"},children:K}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)"},children:me})]}),t.jsx("button",{onClick:ye,style:{background:"none",border:"none",color:Ve.iconColor,cursor:"pointer",padding:"var(--spacing-1)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(z,{name:"close",style:{width:"16px",height:"16px"}})})]})},Re=({value:se,max:K=100,showLabel:me=!1,color:at="primary",size:ye="md"})=>{const De=Math.min(se/K*100,100),Ve={primary:"#3b82f6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444"},ft={sm:{height:"4px",fontSize:"var(--font-size-xs)"},md:{height:"8px",fontSize:"var(--font-size-sm)"},lg:{height:"12px",fontSize:"var(--font-size-base)"}},ze=ft[ye]||ft.md,it=Ve[at]||Ve.primary;return t.jsxs("div",{style:{width:"100%"},children:[me&&t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)",fontSize:ze.fontSize,color:"var(--color-neutral-700)"},children:[t.jsx("span",{children:"進捗"}),t.jsxs("span",{children:[Math.round(De),"%"]})]}),t.jsx("div",{style:{width:"100%",height:ze.height,backgroundColor:"var(--color-neutral-200)",borderRadius:"var(--radius-full)",overflow:"hidden"},children:t.jsx("div",{style:{width:`${De}%`,height:"100%",backgroundColor:it,transition:"width 0.3s ease-in-out",borderRadius:"var(--radius-full)"}})})]})},jt=({value:se,max:K=100,size:me="md",color:at="primary",showLabel:ye=!1})=>{const De=Math.min(se/K*100,100),Ve={sm:{size:40,strokeWidth:3,fontSize:"var(--font-size-xs)"},md:{size:60,strokeWidth:4,fontSize:"var(--font-size-sm)"},lg:{size:80,strokeWidth:5,fontSize:"var(--font-size-base)"}},ft={primary:"#3b82f6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444"},ze=Ve[me]||Ve.md,it=ft[at]||ft.primary,Ce=(ze.size-ze.strokeWidth*2)/2,gt=Ce*2*Math.PI,Ct=`${De/100*gt} ${gt}`;return t.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[t.jsxs("svg",{width:ze.size,height:ze.size,style:{transform:"rotate(-90deg)"},children:[t.jsx("circle",{cx:ze.size/2,cy:ze.size/2,r:Ce,fill:"none",stroke:"var(--color-neutral-200)",strokeWidth:ze.strokeWidth}),t.jsx("circle",{cx:ze.size/2,cy:ze.size/2,r:Ce,fill:"none",stroke:it,strokeWidth:ze.strokeWidth,strokeDasharray:Ct,strokeLinecap:"round",style:{transition:"stroke-dasharray 0.3s ease-in-out"}})]}),ye&&t.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:ze.fontSize,fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-700)"},children:[Math.round(De),"%"]})]})},Ze=({lines:se=3,height:K=16,className:me=""})=>t.jsx("div",{className:me,children:Array.from({length:se}).map((at,ye)=>t.jsx("div",{style:{height:`${K}px`,backgroundColor:"#f3f4f6",borderRadius:"var(--radius-sm)",marginBottom:ye<se-1?"var(--spacing-2)":0,animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",width:ye===se-1?"75%":"100%"}},ye))}),de=({children:se,header:K,footer:me,className:at="",style:ye={}})=>t.jsxs("div",{className:`card ${at}`,style:{backgroundColor:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",...ye},children:[K&&t.jsx("div",{style:{padding:"var(--spacing-4)",borderBottom:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-50)"},children:K}),t.jsx("div",{style:{padding:"var(--spacing-4)"},children:se}),me&&t.jsx("div",{style:{padding:"var(--spacing-4)",borderTop:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-50)"},children:me})]});return t.jsxs("div",{className:"messages-page",children:[t.jsx("style",{jsx:!0,children:`
        .messages-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
        }

        .button-group {
          display: flex;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
          flex-wrap: wrap;
        }


        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: var(--font-size-sm);
          line-height: 1.5;
          overflow-x: auto;
          white-space: pre;
        }

        .usage-notes {
          background: var(--color-info-50);
          border: 1px solid var(--color-info-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-6);
          margin-top: var(--spacing-8);
        }

        .usage-notes h2 {
          color: var(--color-info-800);
          margin-bottom: var(--spacing-4);
        }

        .usage-notes ul {
          color: var(--color-info-700);
          padding-left: var(--spacing-5);
        }

        .usage-notes li {
          margin-bottom: var(--spacing-2);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-4);
        }

        .stat-card {
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: var(--font-size-sm);
          margin-bottom: var(--spacing-1);
        }

        .stat-value {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
        }

        .notification-panel-demo {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-4);
          max-width: 400px;
          margin: 0 auto;
          position: relative;
        }

        .notification-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3) 0;
          border-bottom: 1px solid var(--color-neutral-200);
          margin-bottom: var(--spacing-4);
        }

        .notification-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: -100px;
          width: 320px;
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
        }

        .notification-dropdown-header {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--color-neutral-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .notification-dropdown-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin: 0;
        }

        .notification-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: background 0.2s;
          color: var(--color-neutral-500);
        }

        .notification-close-btn:hover {
          background: var(--color-neutral-100);
          color: var(--color-neutral-700);
        }

        .notification-dropdown-content {
          padding: var(--spacing-2);
        }

        .notification-dropdown-footer {
          padding: var(--spacing-3);
          border-top: 1px solid var(--color-neutral-200);
        }

        .notification-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin: 0;
        }

        .notification-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: var(--color-neutral-100);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--color-warning-600);
        }

        .notification-button:hover {
          background: var(--color-neutral-200);
          color: var(--color-warning-700);
        }

        .notification-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          min-width: 24px;
          height: 24px;
          background: #ef4444;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 6px;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          line-height: 1;
        }

        .notification-item {
          display: flex;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-3);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
        }

        .notification-item.unread {
          background: var(--color-info-50);
          border-color: var(--color-info-200);
        }

        .notification-icon {
          color: var(--color-neutral-600);
          margin-top: var(--spacing-1);
          flex-shrink: 0;
        }

        .notification-item.unread .notification-icon {
          color: var(--color-info-600);
        }

        .notification-content {
          flex: 1;
        }

        .notification-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-2);
        }

        .notification-item-title {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin: 0;
        }

        .notification-time {
          font-size: var(--font-size-xs);
          color: var(--color-neutral-500);
        }

        .notification-item-message {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-700);
          margin: 0 0 var(--spacing-3) 0;
          line-height: 1.4;
        }

        .notification-item-actions {
          display: flex;
          gap: var(--spacing-2);
        }

        .notification-action-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          padding: var(--spacing-1) var(--spacing-2);
          border: 1px solid var(--color-neutral-300);
          background: var(--color-neutral-white);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: var(--font-size-xs);
          color: var(--color-neutral-600);
          transition: all 0.2s;
        }

        .notification-action-btn:hover {
          background: var(--color-neutral-100);
          border-color: var(--color-neutral-400);
        }

        .notification-footer-link {
          display: block;
          text-align: center;
          padding: var(--spacing-3);
          color: var(--color-primary-600);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          border-top: 1px solid var(--color-neutral-200);
          margin-top: var(--spacing-4);
          transition: color 0.2s;
        }

        .notification-footer-link:hover {
          color: var(--color-primary-700);
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .progress-demo-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
          align-items: center;
        }

        .skeleton-demo-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-4);
        }

        .container-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }

        .image-message-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-4);
          align-items: start;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"メッセージ / 通知"}),t.jsx("p",{className:"page-description",children:"ユーザーへの情報伝達、メッセージ表示、フィードバック、統計表示のためのコンポーネント群。 モーダル、ローダー、状態表示、通知、トースト、ダッシュボード要素を提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"メッセージ/通知"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"CardStyleMessage"}),t.jsx("p",{className:"component-description",children:"メッセージやお知らせを美しく表示するカード型コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"container-demo-grid",children:[t.jsxs(de,{children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"基本カード"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)"},children:"シンプルなカードコンポーネントです。テキストやその他のコンテンツを整理して表示できます。"}),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",backgroundColor:"rgb(21, 52, 109)",color:"white",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"詳細を見る"})})]}),t.jsx(de,{header:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"user",style:{width:"20px",height:"20px",color:"rgb(21, 52, 109)"}}),t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"ユーザー情報"})]}),children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"名前: 田中太郎"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"部署: 営業部"}),t.jsx("p",{style:{margin:"0"},children:"最終ログイン: 2024-01-15"})]})}),t.jsx(de,{header:t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"統計情報"}),footer:t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"最終更新: 2024-01-15 14:30"}),children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"rgb(21, 52, 109)",marginBottom:"var(--spacing-2)"},children:"1,234"}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"総ユーザー数"})]})})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本メッセージカード
<CardStyleMessage>
  <h4>お知らせタイトル</h4>
  <p>メッセージ内容</p>
</CardStyleMessage>

// ヘッダー付きメッセージ
<CardStyleMessage header={<span>重要なお知らせ</span>}>
  システムメンテナンスのお知らせです
</CardStyleMessage>

// ヘッダー・フッター付きメッセージ
<CardStyleMessage
  header={<span>システム通知</span>}
  footer={<span>2024-01-15 14:30</span>}
>
  アップデートが完了しました
</CardStyleMessage>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ImageStyleMessage"}),t.jsx("p",{className:"component-description",children:"画像を含むメッセージやギャラリー表示を行うコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"image-message-demo-grid",children:[t.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"300px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(z,{name:"user",style:{width:"20px",height:"20px",color:"var(--color-neutral-600)"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:"田中太郎"}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"2分前"})]})]}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)"},children:"新しいプロダクトのデザインが完成しました！"}),t.jsx("div",{style:{width:"100%",height:"150px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--color-neutral-200)",cursor:"pointer",transition:"all 0.2s"},children:t.jsx(z,{name:"image",style:{width:"32px",height:"32px",color:"var(--color-neutral-400)"}})})]}),t.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"320px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-primary-100)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(z,{name:"camera",style:{width:"20px",height:"20px",color:"rgb(21, 52, 109)"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:"営業部"}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"1時間前"})]})]}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)"},children:"会議の資料写真です（4枚）"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-2)"},children:[1,2,3,4].map(se=>t.jsxs("div",{style:{width:"100%",height:"80px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--color-neutral-200)",cursor:"pointer",transition:"all 0.2s",position:"relative"},children:[t.jsx(z,{name:"image",style:{width:"20px",height:"20px",color:"var(--color-neutral-400)"}}),se===4&&t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)"},children:"+2"})]},se))})]}),t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"280px"},children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--spacing-3) auto",border:"3px solid var(--color-primary-100)"},children:t.jsx(z,{name:"user",style:{width:"40px",height:"40px",color:"var(--color-neutral-500)"}})}),t.jsx("h4",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"佐藤花子"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"プロダクトデザイナー"}),t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-4)",backgroundColor:"rgb(21, 52, 109)",color:"white",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",transition:"all 0.2s"},children:"プロフィールを見る"})]})})]})}),t.jsx("div",{className:"code-snippet",children:`// 単一画像メッセージ
<ImageStyleMessage
  user={{ name: "田中太郎", avatar: "/avatars/tanaka.jpg" }}
  timestamp="2分前"
  message="新しいプロダクトのデザインが完成しました！"
  image="/uploads/design.jpg"
/>

// 複数画像ギャラリー
<ImageStyleMessage
  user={{ name: "営業部", avatar: "/icons/department.jpg" }}
  timestamp="1時間前"
  message="会議の資料写真です（4枚）"
  images={[
    "/uploads/meeting1.jpg",
    "/uploads/meeting2.jpg",
    "/uploads/meeting3.jpg",
    "/uploads/meeting4.jpg"
  ]}
  showCount={2}
/>

// プロフィール画像メッセージ
<ImageStyleMessage
  type="profile"
  user={{
    name: "佐藤花子",
    role: "プロダクトデザイナー",
    avatar: "/avatars/sato.jpg"
  }}
  action={{ text: "プロフィールを見る", onClick: handleProfile }}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"AnalyticStyleMessage"}),t.jsx("p",{className:"component-description",children:"数値やデータを分析レポート風に表示するメッセージコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"dashboard-grid",children:$t.map((se,K)=>{const me=E(se.color);return t.jsxs("div",{className:"stat-card",style:{backgroundColor:me.bg},children:[t.jsx("div",{className:"stat-icon",style:{backgroundColor:me.bg,color:me.icon},children:t.jsx(z,{name:se.icon,style:{width:"24px",height:"24px"}})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-label",style:{color:me.text},children:se.label}),t.jsx("div",{className:"stat-value",style:{color:me.text},children:se.value})]})]},K)})})}),t.jsx("div",{className:"code-snippet",children:`<AnalyticStyleMessage
  stats={[
    { label: '新規メッセージ', value: '1,234', icon: 'message' },
    { label: '送信済み', value: '89', icon: 'check' },
    { label: 'エラー率', value: '0.23%', icon: 'warning' }
  ]}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FlashMessage"}),t.jsx("p",{className:"component-description",children:"フラッシュメッセージを表示するコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsx(J,{type:"success",message:"データの保存が正常に完了しました。"}),t.jsx(J,{type:"info",message:"システムメンテナンスが2024年1月15日に予定されています。"}),t.jsx(J,{type:"warning",message:"ディスク容量が90%を超えています。データのクリーンアップをお勧めします。"}),t.jsx(J,{type:"danger",message:"接続エラーが発生しました。ネットワーク設定を確認してください。"})]}),t.jsx("div",{className:"code-snippet",children:`<FlashMessage type="success" message="正常に完了しました" />
<FlashMessage type="info" message="お知らせメッセージ" />
<FlashMessage type="warning" message="注意が必要です" />
<FlashMessage type="danger" message="エラーが発生しました" />`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Notification"}),t.jsx("p",{className:"component-description",children:"ベルアイコンをクリックして通知ドロップダウンを表示するコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-4)"},children:[t.jsx(Nt,{onClick:()=>o(2),children:"未読件数をリセット (2件)"}),t.jsx(Nt,{onClick:()=>o(0),style:{marginLeft:"var(--spacing-2)"},children:"全て既読にする"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--spacing-6)",background:"var(--color-neutral-50)",border:"1px dashed var(--color-neutral-300)",borderRadius:"var(--radius-md)"},children:t.jsxs("div",{ref:p,style:{position:"relative"},children:[t.jsxs("button",{className:"notification-button",onClick:()=>d(!c),style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",border:"none",background:"var(--color-neutral-white)",borderRadius:"var(--radius-full)",cursor:"pointer",transition:"all 0.2s",color:"var(--color-warning-600)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},children:[t.jsx(z,{name:"bell",style:{width:"20px",height:"20px"}}),i>0&&t.jsx("span",{className:"notification-badge",children:i})]}),c&&t.jsxs("div",{className:"notification-dropdown",children:[t.jsxs("div",{className:"notification-dropdown-header",children:[t.jsx("h3",{className:"notification-dropdown-title",children:"通知"}),t.jsx("button",{className:"notification-close-btn",onClick:()=>d(!1),children:t.jsx(z,{name:"close",className:"w-4 h-4"})})]}),t.jsxs("div",{className:"notification-dropdown-content",children:[t.jsxs("div",{className:"notification-item",children:[t.jsx(z,{name:"info",className:"w-5 h-5 notification-icon"}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:"新しいメッセージ"}),t.jsx("span",{className:"notification-time",children:"2分前"})]}),t.jsx("p",{className:"notification-item-message",children:"管理者からの重要なお知らせがあります。"}),t.jsxs("div",{className:"notification-item-actions",children:[t.jsxs("button",{className:"notification-action-btn",onClick:()=>o(Math.max(0,i-1)),children:[t.jsx(z,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",children:[t.jsx(z,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]}),t.jsxs("div",{className:"notification-item unread",children:[t.jsx(z,{name:"warning",className:"w-5 h-5 notification-icon"}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:"システムメンテナンス"}),t.jsx("span",{className:"notification-time",children:"1時間前"})]}),t.jsx("p",{className:"notification-item-message",children:"本日22:00よりシステムメンテナンスを実施します。"}),t.jsxs("div",{className:"notification-item-actions",children:[t.jsxs("button",{className:"notification-action-btn",onClick:()=>o(Math.max(0,i-1)),children:[t.jsx(z,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",children:[t.jsx(z,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]})]}),t.jsx("div",{className:"notification-dropdown-footer",children:t.jsx("a",{href:"#",className:"notification-footer-link",children:"すべての通知を表示"})})]})]})}),t.jsx("p",{style:{textAlign:"center",color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)",marginTop:"var(--spacing-4)"},children:"ベルアイコンをクリックして通知を表示 - 実運用ではナビゲーション等に配置"})]}),t.jsx("div",{className:"code-snippet",children:`<Notification
  notifications={notifications}
  unreadCount={unreadCount}
  onMarkAsRead={handleMarkAsRead}
  onMarkAllAsRead={handleMarkAllAsRead}
  onDismiss={handleDismiss}
  onClose={handleClose}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Toast"}),t.jsx("p",{className:"component-description",children:"画面右上に表示される一時的な通知メッセージ"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"button-group",children:[t.jsx(Jr,{onClick:()=>{j({type:"success",title:"成功",message:"データの保存が完了しました"}),f(!0),setTimeout(()=>f(!1),3e3)},children:"成功トースト表示"}),t.jsx(Nt,{onClick:()=>{j({type:"info",title:"情報",message:"新しいメッセージが届きました"}),f(!0),setTimeout(()=>f(!1),3e3)},children:"情報トースト表示"}),t.jsx(zl,{onClick:()=>{j({type:"error",title:"エラー",message:"接続に失敗しました"}),f(!0),setTimeout(()=>f(!1),3e3)},children:"エラートースト表示"})]}),t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginTop:"var(--spacing-3)"},children:"※ トーストは3秒後に自動的に閉じます"})]}),t.jsx("div",{className:"code-snippet",children:`<Toast
  type="success"
  title="成功"
  message="データの保存が完了しました"
  showToast={showToast}
  onClose={() => setShowToast(false)}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"モーダル"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Modal"}),t.jsx("p",{className:"component-description",children:"ユーザーへの情報表示、メッセージ通知、確認ダイアログとして使用するモーダルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"button-group",children:[t.jsx(Jr,{onClick:()=>r(!0),children:"基本モーダルを開く"}),t.jsx(Nt,{onClick:()=>a(!0),children:"情報モーダル"}),t.jsx(zl,{onClick:()=>l(!0),children:"確認モーダル"})]})}),t.jsx("div",{className:"code-snippet",children:`<Modal show={show} onClose={onClose}>
  <div>メッセージ内容</div>
</Modal>

<InfoModal
  show={show}
  title="お知らせ"
  message="情報メッセージ"
  onClose={onClose}
/>

<ConfirmModal
  show={show}
  title="確認"
  message="実行しますか？"
  onConfirm={onConfirm}
  onClose={onClose}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ローダー"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FullScreenLoader"}),t.jsx("p",{className:"component-description",children:"画面全体を覆うフルスクリーンローダー。API通信や重い処理中に使用"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Nt,{onClick:()=>{x(!0),setTimeout(()=>x(!1),3e3)},children:"フルスクリーンローダーを表示（3秒）"})}),t.jsx("div",{className:"code-snippet",children:`<FullScreenLoader
  show={showLoader}
  message="データを読み込み中..."
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ModalLoader"}),t.jsx("p",{className:"component-description",children:"モーダル形式のローダー。キャンセル可能な処理に適用"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Jr,{onClick:()=>{C(!0),setTimeout(()=>C(!1),3e3)},children:"モーダルローダーを表示（3秒）"})}),t.jsx("div",{className:"code-snippet",children:`<ModalLoader
  show={showLoader}
  message="ファイルをアップロード中..."
  onClose={handleCancel}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SkeletonLoader"}),t.jsx("p",{className:"component-description",children:"コンテンツ読み込み中のプレースホルダー表示"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"3行テキスト"}),t.jsx(Ze,{lines:3,height:16})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"大きなコンテンツ"}),t.jsx(Ze,{lines:5,height:20})]})]})}),t.jsx("div",{className:"code-snippet",children:`<SkeletonLoader lines={3} height={16} />
<SkeletonLoader lines={5} height={20} />`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"状態"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ProgressBar"}),t.jsx("p",{className:"component-description",children:"線形・円形のプログレスバーで作業の進捗状態を表示"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"progress-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"線形プログレスバー"}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(Re,{value:y,showLabel:!0})}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(Re,{value:y,color:"success",size:"sm"})}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(Re,{value:y,color:"warning",size:"lg",showLabel:!0})}),t.jsxs("div",{className:"button-group",children:[t.jsx(Nt,{onClick:()=>w(Math.max(0,y-10)),children:"-10%"}),t.jsx(Nt,{onClick:()=>w(Math.min(100,y+10)),children:"+10%"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"円形プログレス"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx(jt,{value:v,size:"sm",showLabel:!0}),t.jsx(jt,{value:v,size:"md",color:"success",showLabel:!0}),t.jsx(jt,{value:v,size:"lg",color:"warning",showLabel:!0})]}),t.jsxs("div",{className:"button-group",children:[t.jsx(Nt,{onClick:()=>g(Math.max(0,v-15)),children:"-15%"}),t.jsx(Nt,{onClick:()=>g(Math.min(100,v+15)),children:"+15%"})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 線形プログレスバー
<ProgressBar value={75} showLabel={true} color="primary" size="md" />

// 円形プログレス
<CircularProgress value={75} size="md" color="success" showLabel={true} />`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"モーダルは重要なメッセージや情報の表示、ユーザーへの確認に使用してください"}),t.jsx("li",{children:"InfoModalは一方向の情報伝達に、ConfirmModalは操作確認に適しています"}),t.jsx("li",{children:"モーダルは一度に1つだけ表示し、ESCキーや背景クリックで閉じられるようにしてください"}),t.jsx("li",{children:"FullScreenLoaderは重要な処理中に画面全体をブロックする場合に使用してください"}),t.jsx("li",{children:"ModalLoaderはキャンセル可能な処理（ファイルアップロード等）に適しています"}),t.jsx("li",{children:"SkeletonLoaderはコンテンツ読み込み中のプレースホルダーとして使用してください"}),t.jsx("li",{children:"トースト通知は成功・エラー・情報の一時的な通知に適しています"}),t.jsx("li",{children:"状態表示（プログレスバー）は長時間の処理進捗や完了度の可視化に使用してください"}),t.jsx("li",{children:"線形プログレスは全体進捗、円形プログレスは部分進捗や状態値に適しています"}),t.jsx("li",{children:"CardStyleMessageはメッセージやお知らせの表示に適したカード型レイアウトです"}),t.jsx("li",{children:"ImageStyleMessageは画像を含むメッセージ表示に最適化されています"}),t.jsx("li",{children:"単一画像、複数画像ギャラリー、プロフィール画像など様々な画像表示パターンに対応"}),t.jsx("li",{children:"画像のクリックで拡大表示やライトボックス機能を実装可能です"}),t.jsx("li",{children:"ダッシュボードカードは4個以下を1行に配置することを推奨します"}),t.jsx("li",{children:"フラッシュメッセージは重要度に応じて適切な色とアイコンを使用してください"}),t.jsx("li",{children:"ドロップダウンメニューは画面端での表示を考慮してアラインメントを調整してください"}),t.jsx("li",{children:"Badgeは簡潔で分かりやすいテキストを使用してください"}),t.jsx("li",{children:"ステータス表示には適切な色バリエーションを選択してください（成功=緑、警告=黄、エラー=赤）"}),t.jsx("li",{children:"削除可能なTagは誤操作を防ぐため、確認ダイアログの使用を検討してください"}),t.jsx("li",{children:"通知数表示のBadgeは数値が大きい場合は「99+」等の省略表示を検討してください"}),t.jsx("li",{children:"アクセシビリティのため、フォーカス管理とキーボードナビゲーションに注意してください"})]})})]}),t.jsx(u2,{show:e,onClose:()=>r(!1),children:t.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[t.jsx("h3",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)"},children:"基本モーダル"}),t.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--color-neutral-600)"},children:"これは基本的なメッセージ表示用モーダルです。重要な情報やお知らせをユーザーに伝える際に使用します。"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end"},children:[t.jsx(Nt,{onClick:()=>r(!1),children:"キャンセル"}),t.jsx(Jr,{onClick:()=>r(!1),children:"確認"})]})]})}),t.jsx(p2,{show:n,onClose:()=>a(!1),title:"お知らせ",message:"これは情報表示専用のモーダルです。システムからの重要な通知やメッセージを表示します。"}),t.jsx(eh,{show:s,onClose:()=>l(!1),title:"操作の確認",message:"この操作を実行してもよろしいですか？実行後は元に戻すことができません。",onConfirm:()=>{alert("操作が確認されました"),l(!1)}}),t.jsx(he,{type:b.type,title:b.title,message:b.message,showToast:h,onClose:()=>f(!1)}),t.jsx(ce,{show:m,message:"データを読み込み中..."}),t.jsx(oe,{show:N,message:"ファイルをアップロード中...",onClose:()=>C(!1)}),t.jsx(S,{show:D,type:"info",title:"情報",message:"これは情報メッセージです。操作が正常に完了しました。",onClose:()=>V(!1)}),t.jsx(S,{show:P,type:"warning",title:"警告",message:"この操作を続行しますか？データが変更される可能性があります。",confirmText:"続行",cancelText:"キャンセル",onConfirm:()=>{alert("操作を続行しました"),T(!1)},onCancel:()=>T(!1)}),t.jsx(S,{show:Q,type:"error",title:"エラー",message:"操作中にエラーが発生しました。ネットワーク接続を確認してください。",confirmText:"再試行",cancelText:"閉じる",onConfirm:()=>{alert("再試行します"),L(!1)},onCancel:()=>L(!1)}),t.jsx(S,{show:I,type:"success",title:"成功",message:"データの保存が完了しました。変更内容が正常に反映されています。",onClose:()=>_(!1)}),t.jsx(S,{show:A,type:"error",title:"削除確認",message:"このアイテムを削除しますか？この操作は取り消せません。",confirmText:"削除",cancelText:"キャンセル",onConfirm:()=>{alert("アイテムが削除されました"),M(!1)},onCancel:()=>M(!1)}),t.jsx(U,{show:X,type:"success",message:"操作が正常に完了しました！",onClose:()=>G(!1),position:"bottom-right"}),t.jsx(U,{show:ee,type:"error",message:"エラーが発生しました。もう一度お試しください。",onClose:()=>B(!1),position:"top-right"}),t.jsx(U,{show:te,type:"warning",message:"この操作にはご注意ください。",onClose:()=>fe(!1),position:"top-center"}),t.jsx(U,{show:ge,type:"info",message:"新しい情報があります。",onClose:()=>Qe(!1),position:"bottom-left"}),t.jsx(U,{show:Ye,type:"info",message:"新しいメッセージが届きました",action:!0,actionText:"表示",onAction:()=>{alert("メッセージを表示します"),Ke(!1)},onClose:()=>Ke(!1),position:"bottom-center",duration:6e3})]})};function th({pagination:e,onPageChange:r=null,onPerPageChange:n=null,config:a}){if(!e)return null;const s=()=>{if(!r)return null;const l=e.current_page,i=e.last_page,o=[];if(i<=7)for(let d=1;d<=i;d++)o.push(d);else if(l<=3){for(let d=1;d<=5;d++)o.push(d);o.push("..."),o.push(i)}else if(l>=i-2){o.push(1),o.push("...");for(let d=i-4;d<=i;d++)o.push(d)}else{o.push(1),o.push("...");for(let d=l-1;d<=l+1;d++)o.push(d);o.push("..."),o.push(i)}return o.map((d,p)=>{if(d==="...")return t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${p}`);const h=d;return t.jsx("button",{onClick:()=>r(h),className:`pagination-page-btn ${h===l?"active":""}`,"aria-current":h===l?"page":void 0,children:h},h)})};return t.jsxs(t.Fragment,{children:[t.jsx("style",{jsx:!0,children:`
                .pagination-panel {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: var(--spacing-3);
                    padding: var(--spacing-4) var(--spacing-6);
                    background: var(--color-neutral-white);
                    border-top: 1px solid var(--color-neutral-200);
                }

                @media (min-width: 640px) {
                    .pagination-panel {
                        flex-direction: row;
                        align-items: center;
                        gap: 0;
                    }
                }

                .per-page-selector {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-2);
                    flex-shrink: 0;
                }

                .per-page-label {
                    font-size: var(--font-size-sm);
                    color: var(--color-neutral-700);
                    white-space: nowrap;
                }

                .per-page-select {
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    padding: var(--spacing-1) var(--spacing-2);
                    font-size: var(--font-size-sm);
                    background: var(--color-neutral-white);
                    color: var(--color-neutral-900);
                    width: 80px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .per-page-select:focus {
                    outline: none;
                    ring: 2px solid var(--color-primary-500);
                    border-color: transparent;
                }

                .pagination-info {
                    font-size: var(--font-size-sm);
                    color: var(--color-neutral-700);
                }

                .pagination-info .font-medium {
                    font-weight: var(--font-weight-medium);
                }

                .pagination-controls {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-1);
                }

                .pagination-nav-btn {
                    display: flex;
                    align-items: center;
                    padding: var(--spacing-1) var(--spacing-2);
                    font-size: var(--font-size-sm);
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    background: var(--color-neutral-white);
                    color: var(--color-neutral-700);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pagination-nav-btn:hover:not(:disabled) {
                    background: var(--color-neutral-50);
                }

                .pagination-nav-btn:disabled {
                    background: var(--color-neutral-50);
                    color: var(--color-neutral-400);
                    border-color: var(--color-neutral-200);
                    cursor: not-allowed;
                }

                .pagination-pages {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-1);
                }

                .pagination-page-btn {
                    padding: var(--spacing-1) var(--spacing-3);
                    font-size: var(--font-size-sm);
                    border: 1px solid var(--color-neutral-300);
                    border-radius: var(--radius-md);
                    background: var(--color-neutral-white);
                    color: var(--color-neutral-700);
                    cursor: pointer;
                    transition: all 0.2s;
                    min-width: 32px;
                }

                .pagination-page-btn:hover {
                    background: var(--color-neutral-50);
                }

                .pagination-page-btn.active {
                    background: var(--color-primary-600);
                    color: var(--color-neutral-white);
                    border-color: var(--color-primary-600);
                }

                .pagination-ellipsis {
                    padding: var(--spacing-1) var(--spacing-3);
                    font-size: var(--font-size-sm);
                    color: var(--color-neutral-700);
                }
            `}),t.jsxs("div",{className:"pagination-panel",children:[n&&(a==null?void 0:a.perPageOptions)&&t.jsxs("div",{className:"per-page-selector",children:[t.jsx("label",{htmlFor:"per-page-select",className:"per-page-label",children:"表示件数:"}),t.jsx("select",{id:"per-page-select",value:e.per_page,onChange:l=>n(parseInt(l.target.value)),className:"per-page-select",children:a.perPageOptions.map(l=>t.jsxs("option",{value:l,children:[l,"件"]},l))})]}),(a==null?void 0:a.showInfo)!==!1&&e.total>0&&t.jsxs("div",{className:"pagination-info",children:[t.jsx("span",{className:"font-medium",children:e.from}),t.jsx("span",{children:" - "}),t.jsx("span",{className:"font-medium",children:e.to}),t.jsx("span",{children:" / "}),t.jsx("span",{className:"font-medium",children:e.total}),t.jsx("span",{children:"件"})]}),r&&e.last_page>1&&t.jsxs("div",{className:"pagination-controls",children:[t.jsxs("button",{onClick:()=>r(e.current_page-1),disabled:!e.prev_page_url,className:"pagination-nav-btn","aria-label":"前のページ",children:[t.jsx(z,{name:"chevron-left",className:"h-4 w-4"}),t.jsx("span",{style:{marginLeft:"var(--spacing-1)"},children:"前へ"})]}),t.jsx("div",{className:"pagination-pages",children:s()}),t.jsxs("button",{onClick:()=>r(e.current_page+1),disabled:!e.next_page_url,className:"pagination-nav-btn","aria-label":"次のページ",children:[t.jsx("span",{style:{marginRight:"var(--spacing-1)"},children:"次へ"}),t.jsx(z,{name:"chevron-right",className:"h-4 w-4"})]})]})]})]})}const qu=()=>{const[e,r]=u.useState(1),[n,a]=u.useState(5),[s,l]=u.useState({key:null,direction:null}),[i,o]=u.useState([]),c=[{id:1,name:"田中太郎",email:"tanaka@example.com",role:"管理者",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:2,name:"鈴木花子",email:"suzuki@example.com",role:"ユーザー",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:3,name:"佐藤次郎",email:"sato@example.com",role:"ユーザー",status:"非アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:4,name:"高橋三郎",email:"takahashi@example.com",role:"エディター",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:5,name:"伊藤四郎",email:"ito@example.com",role:"ユーザー",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:6,name:"渡辺五郎",email:"watanabe@example.com",role:"管理者",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:7,name:"山本六子",email:"yamamoto@example.com",role:"ユーザー",status:"非アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:8,name:"中村七美",email:"nakamura@example.com",role:"エディター",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"}],d=({status:R})=>{const I=R==="アクティブ";return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-1) var(--spacing-2)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",backgroundColor:I?"var(--color-success-100)":"var(--color-neutral-100)",color:I?"var(--color-success-800)":"var(--color-neutral-600)"},children:R})},p=({children:R,className:I="",style:_={}})=>t.jsx("div",{className:I,style:{backgroundColor:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden",..._},children:R}),h=({children:R,onClick:I,selected:_=!1,className:P="",style:T={}})=>t.jsx("div",{className:P,onClick:I,style:{padding:"var(--spacing-4)",borderBottom:"1px solid var(--color-neutral-100)",backgroundColor:_?"var(--color-primary-50)":"transparent",cursor:I?"pointer":"default",transition:"background-color 0.2s ease",":hover":I?{backgroundColor:_?"var(--color-primary-100)":"var(--color-neutral-50)"}:{},...T},onMouseEnter:$=>{I&&($.target.style.backgroundColor=_?"var(--color-primary-100)":"var(--color-neutral-50)")},onMouseLeave:$=>{I&&($.target.style.backgroundColor=_?"var(--color-primary-50)":"transparent")},children:R}),f=[{key:"id",label:"ID",width:"60px"},{key:"name",label:"名前",width:"120px"},{key:"email",label:"メールアドレス",width:"200px"},{key:"role",label:"ロール",width:"120px"},{key:"status",label:"ステータス",width:"120px"}],b=R=>{let I="asc";s.key===R&&s.direction==="asc"?I="desc":s.key===R&&s.direction==="desc"&&(I=null),l({key:I?R:null,direction:I})},j=re.useMemo(()=>!s.key||!s.direction?[...c]:[...c].sort((R,I)=>{const _=R[s.key],P=I[s.key];return _==null?1:P==null?-1:_<P?s.direction==="asc"?-1:1:_>P?s.direction==="asc"?1:-1:0}),[s]),y=Math.ceil(j.length/n),w=(e-1)*n,v=j.slice(w,w+n),g=[{month:"1月",users:120,sales:1800,revenue:2400},{month:"2月",users:190,sales:2100,revenue:2800},{month:"3月",users:300,sales:2800,revenue:3200},{month:"4月",users:280,sales:2600,revenue:3600},{month:"5月",users:320,sales:3200,revenue:4200},{month:"6月",users:380,sales:3800,revenue:4800}],m=({data:R,width:I=600,height:_=300})=>{const P={top:20,right:30,bottom:60,left:70},T=I-P.left-P.right,$=_-P.top-P.bottom,W=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],Q=R.flatMap(O=>[O.users,O.sales,O.revenue]),L=Math.max(...Q),A=Math.min(...Q),M=L-A,D=M*.1,V=O=>$-(O-A+D)/(M+D*2)*$,q=O=>O/(R.length-1)*T;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の推移"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:I,height:_,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${P.left}, ${P.top})`,children:[[0,1,2,3,4].map(O=>t.jsx("line",{x1:0,x2:T,y1:$*O/4,y2:$*O/4,stroke:"var(--color-neutral-200)",strokeWidth:1},O)),[0,1,2,3,4].map(O=>{const X=Math.round(L+D-(M+D*2)*O/4);return t.jsx("text",{x:-10,y:$*O/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:X},O)}),W.map(O=>{const X=R.map((G,ee)=>`${ee===0?"M":"L"} ${q(ee)} ${V(G[O.key])}`).join(" ");return t.jsxs("g",{children:[t.jsx("path",{d:X,fill:"none",stroke:O.color,strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),R.map((G,ee)=>t.jsx("circle",{cx:q(ee),cy:V(G[O.key]),r:4,fill:O.color,stroke:"white",strokeWidth:2},ee))]},O.key)}),R.map((O,X)=>t.jsx("text",{x:q(X),y:$+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:O.month},X)),t.jsx("text",{x:T/2,y:$+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"}),t.jsx("text",{x:-68,y:-25,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:W.map(O=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"3px",backgroundColor:O.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:O.label})]},O.key))})]})},x=({data:R,width:I=600,height:_=300})=>{const P={top:20,right:30,bottom:60,left:70},T=I-P.left-P.right,$=_-P.top-P.bottom,W=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],Q=R.flatMap(V=>[V.users,V.sales,V.revenue]),L=Math.max(...Q),A=T/R.length*.8,M=A/W.length,D=T/R.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の比較"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:I,height:_,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${P.left}, ${P.top})`,children:[[0,1,2,3,4].map(V=>t.jsx("line",{x1:0,x2:T,y1:$*V/4,y2:$*V/4,stroke:"var(--color-neutral-200)",strokeWidth:1},V)),[0,1,2,3,4].map(V=>{const q=Math.round(L*(4-V)/4);return t.jsx("text",{x:-10,y:$*V/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:q},V)}),R.map((V,q)=>{const O=q*(T/R.length)+D/2;return t.jsxs("g",{children:[W.map((X,G)=>{const ee=V[X.key]/L*$,B=O+G*M;return t.jsx("rect",{x:B,y:$-ee,width:M,height:ee,fill:X.color,rx:2},X.key)}),t.jsx("text",{x:O+A/2,y:$+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:V.month})]},q)}),t.jsx("text",{x:T/2,y:$+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"}),t.jsx("text",{x:-68,y:-25,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:W.map(V=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:V.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:V.label})]},V.key))})]})},N=({data:R,width:I=600,height:_=300})=>{const P={top:20,right:80,bottom:60,left:120},T=I-P.left-P.right,$=_-P.top-P.bottom,W=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],Q=R.flatMap(V=>[V.users,V.sales,V.revenue]),L=Math.max(...Q),A=$/R.length*.8,M=A/W.length,D=$/R.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の比較（横棒）"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:I,height:_,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${P.left}, ${P.top})`,children:[[0,1,2,3,4].map(V=>t.jsx("line",{x1:T*V/4,x2:T*V/4,y1:0,y2:$,stroke:"var(--color-neutral-200)",strokeWidth:1},V)),[0,1,2,3,4].map(V=>{const q=Math.round(L*V/4);return t.jsx("text",{x:T*V/4,y:$+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:q},V)}),R.map((V,q)=>{const O=q*($/R.length)+D/2;return t.jsxs("g",{children:[W.map((X,G)=>{const ee=V[X.key]/L*T,B=O+G*M;return t.jsx("rect",{x:0,y:B,width:ee,height:M,fill:X.color,rx:2},X.key)}),t.jsx("text",{x:-10,y:O+A/2+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:V.month})]},q)}),t.jsx("text",{x:T/2,y:$+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"}),t.jsx("text",{x:-35,y:-5,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:W.map(V=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:V.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:V.label})]},V.key))})]})},C=({data:R,width:I=350,height:_=350})=>{const P=Math.min(I,_)/2-30,T=P*.45,$=I/2,W=_/2,Q=R.reduce((M,D)=>M+D.value,0);let L=-Math.PI/2;const A=["rgb(21, 52, 109)","#6366f1","#8b5cf6","#ec4899","#f59e0b"];return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",textAlign:"center"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"部門別売上比率"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsxs("svg",{width:I,height:_,children:[R.map((M,D)=>{const V=M.value/Q*2*Math.PI,q=L,O=L+V,X=$+Math.cos(q)*P,G=W+Math.sin(q)*P,ee=$+Math.cos(O)*P,B=W+Math.sin(O)*P,te=$+Math.cos(O)*T,fe=W+Math.sin(O)*T,ge=$+Math.cos(q)*T,Qe=W+Math.sin(q)*T,Ye=V>Math.PI?1:0,Ke=[`M ${X} ${G}`,`A ${P} ${P} 0 ${Ye} 1 ${ee} ${B}`,`L ${te} ${fe}`,`A ${T} ${T} 0 ${Ye} 0 ${ge} ${Qe}`,"Z"].join(" "),S=(q+O)/2,U=(P+T)/2,ce=$+Math.cos(S)*U,oe=W+Math.sin(S)*U,$t=(M.value/Q*100).toFixed(1);return L=O,t.jsxs("g",{children:[t.jsx("path",{d:Ke,fill:A[D%A.length],stroke:"white",strokeWidth:2}),t.jsx("text",{x:ce,y:oe-10,textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"white",children:M.label.length>5?M.label.substring(0,4)+"...":M.label}),t.jsxs("text",{x:ce,y:oe+4,textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"white",children:[$t,"%"]}),t.jsxs("text",{x:ce,y:oe+18,textAnchor:"middle",fontSize:"9",fill:"white",children:[M.value.toLocaleString(),"万円"]})]},D)}),t.jsx("text",{x:$,y:W,textAnchor:"middle",fontSize:"20",fontWeight:"bold",fill:"var(--color-neutral-900)",children:"総売上"}),t.jsxs("text",{x:$,y:W+25,textAnchor:"middle",fontSize:"16",fill:"var(--color-neutral-600)",children:[Q.toLocaleString(),"万円"]})]})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)"},children:R.map((M,D)=>{const V=(M.value/Q*100).toFixed(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-2)",background:"var(--color-neutral-50)",borderRadius:"var(--radius-md)",minWidth:"80px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:A[D%A.length],borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:M.label})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsxs("div",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:[M.value.toLocaleString(),"万円"]}),t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:["(",V,"%)"]})]})]},D)})})]})},k=[{label:"営業部",value:4200},{label:"開発部",value:3100},{label:"管理部",value:2800},{label:"マーケティング部",value:1900}];return t.jsxs("div",{className:"tables-page",children:[t.jsx("style",{jsx:!0,children:`
        .tables-page {
          padding: var(--spacing-6);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          font-size: var(--font-size-lg);
          color: var(--color-neutral-600);
          line-height: 1.6;
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          overflow-x: auto;
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: var(--font-size-sm);
          line-height: 1.5;
          overflow-x: auto;
          white-space: pre;
          margin-top: var(--spacing-4);
        }

        .usage-notes {
          background: var(--color-info-50);
          border: 1px solid var(--color-info-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-6);
          margin-top: var(--spacing-8);
        }

        .usage-notes h2 {
          color: var(--color-info-800);
          margin-bottom: var(--spacing-4);
        }

        .usage-notes ul {
          color: var(--color-info-700);
          padding-left: var(--spacing-5);
        }

        .usage-notes li {
          margin-bottom: var(--spacing-2);
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"テーブル・リスト・グラフコンポーネント"}),t.jsx("p",{className:"page-description",children:"データ表示とページネーション機能を提供するテーブルコンポーネント群、一覧表示に特化したリストコンポーネント、そしてデータ可視化のためのグラフコンポーネント。 基本的なデータテーブルから高機能な統合テーブル、ページネーション、基本的なリスト表示機能、そして折れ線グラフ・棒グラフ・ドーナツグラフまで包括的にカバーします。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"基本テーブル機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DataTable"}),t.jsx("p",{className:"component-description",children:"データテーブルの基本的な表示例"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-neutral-50)"},children:f.map(R=>t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",fontWeight:"var(--font-weight-medium)",borderBottom:"1px solid var(--color-neutral-200)",cursor:"pointer",userSelect:"none",position:"relative"},onClick:()=>b(R.key),children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[R.label,t.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",fontSize:"10px",lineHeight:"1",marginLeft:"4px"},children:[t.jsx("span",{style:{color:s.key===R.key&&s.direction==="asc"?"var(--color-primary-600)":"var(--color-neutral-400)",transition:"color 0.2s"},children:"▲"}),t.jsx("span",{style:{color:s.key===R.key&&s.direction==="desc"?"var(--color-primary-600)":"var(--color-neutral-400)",transition:"color 0.2s",marginTop:"-2px"},children:"▼"})]})]})},R.key))})}),t.jsx("tbody",{children:v.map((R,I)=>t.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)",backgroundColor:I%2===0?"var(--color-neutral-white)":"var(--color-neutral-25)"},children:f.map(_=>t.jsx("td",{style:{padding:"var(--spacing-3)",borderBottom:"1px solid var(--color-neutral-200)"},children:_.key==="status"?t.jsx(d,{status:R.status}):R[_.key]},_.key))},R.id))})]})})}),t.jsx("div",{className:"code-snippet",children:`<table>
  <thead>
    <tr>
      {columns.map(column => (
        <th key={column.key}>{column.label}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map(item => (
      <tr key={item.id}>
        {columns.map(column => (
          <td key={column.key}>{item[column.key]}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PaginationPanel"}),t.jsx("p",{className:"component-description",children:"ページネーション機能を提供するパネルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(th,{pagination:{current_page:e,last_page:y,total:c.length,per_page:n,from:w+1,to:Math.min(w+n,c.length),prev_page_url:e>1?"#":null,next_page_url:e<y?"#":null},onPageChange:r,onPerPageChange:R=>{a(R),r(1)},config:{perPageOptions:[5,10,20],showInfo:!0}})}),t.jsx("div",{className:"code-snippet",children:`<PaginationPanel
  pagination={{
    current_page: 1,
    last_page: 10,
    total: 100,
    per_page: 10,
    from: 1,
    to: 10
  }}
  onPageChange={setCurrentPage}
  onPerPageChange={setItemsPerPage}
  config={{
    showInfo: true
  }}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"リスト表示機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"基本リスト"}),t.jsx("p",{className:"component-description",children:"シンプルなリスト表示コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs(p,{style:{maxWidth:"400px"},children:[t.jsx(h,{children:"リストアイテム 1"}),t.jsx(h,{children:"リストアイテム 2"}),t.jsx(h,{children:"リストアイテム 3"}),t.jsx(h,{children:"リストアイテム 4"})]})}),t.jsx("div",{className:"code-snippet",children:`<List>
  <ListItem>リストアイテム 1</ListItem>
  <ListItem>リストアイテム 2</ListItem>
  <ListItem>リストアイテム 3</ListItem>
  <ListItem>リストアイテム 4</ListItem>
</List>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"クリック可能リスト"}),t.jsx("p",{className:"component-description",children:"クリックイベントと選択状態を持つリスト"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(p,{style:{maxWidth:"400px"},children:["オプション 1","オプション 2","オプション 3","オプション 4"].map((R,I)=>t.jsx(h,{onClick:()=>o([I]),selected:i.includes(I),children:R},I))})}),t.jsx("div",{className:"code-snippet",children:`<List>
  {items.map((item, index) => (
    <ListItem
      key={index}
      onClick={() => handleSelect(index)}
      selected={selectedItems.includes(index)}
    >
      {item}
    </ListItem>
  ))}
</List>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"グラフ機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"LineChart"}),t.jsx("p",{className:"component-description",children:"時系列データの推移を表示する折れ線グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(m,{data:g,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<LineChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"BarChart（縦棒）"}),t.jsx("p",{className:"component-description",children:"数値の比較を分かりやすく表示する縦棒グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(x,{data:g,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<BarChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"HorizontalBarChart（横棒）"}),t.jsx("p",{className:"component-description",children:"数値の比較を横棒で表示し、項目名を読みやすくした横棒グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(N,{data:g,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<HorizontalBarChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DonutChart"}),t.jsx("p",{className:"component-description",children:"割合や構成比を視覚的に表示するドーナツチャート"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(C,{data:k,width:400,height:400})})}),t.jsx("div",{className:"code-snippet",children:`<DonutChart
  data={pieData}
  width={350}
  height={350}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"テーブルは大量のデータを扱う場合、ページネーションと併用してください"}),t.jsx("li",{children:"データテーブルのプリセット設定により、一貫したスタイリングが適用されます"}),t.jsx("li",{children:"レスポンシブデザインを考慮し、モバイルでの表示を確認してください"}),t.jsx("li",{children:"ページネーションの表示件数は用途に応じて適切に設定してください"}),t.jsx("li",{children:"Listコンポーネントは統一されたスタイルで一覧表示を実現します"}),t.jsx("li",{children:"ListItemにはクリックイベントと選択状態を設定できます"}),t.jsx("li",{children:"リストアイテムの選択状態は配列で管理することを推奨します"}),t.jsx("li",{children:"折れ線グラフは時系列データや傾向の表示に適しています"}),t.jsx("li",{children:"縦棒グラフは数値の比較や順位の表示に効果的です"}),t.jsx("li",{children:"横棒グラフは項目名が長い場合や多数の項目がある場合に適しています"}),t.jsx("li",{children:"ドーナツグラフは割合や構成比の可視化に最適です"}),t.jsx("li",{children:"グラフのサイズは画面サイズに応じて調整してください"}),t.jsx("li",{children:"カラーパレットはブランドカラーに統一することを推奨します"})]})})]})]})};function m2(e,r="unified-scrollbar"){const{scrollbarConfig:n={}}=e,{width:a="17px",height:s="17px",trackColor:l="#f1f1f1",thumbColor:i="#c1c1c1",thumbHoverColor:o="#a8a8a8",cornerColor:c="#f1f1f1"}=n;return`.${r}{scrollbar-width:thin;-ms-overflow-style:auto;}.${r}::-webkit-scrollbar{width:${a};height:${s};}.${r}::-webkit-scrollbar-track{background:${l};border-radius:0;}.${r}::-webkit-scrollbar-thumb{background:${i};border-radius:0;border:none;}.${r}::-webkit-scrollbar-thumb:hover{background:${o};}.${r}::-webkit-scrollbar-corner{background:${c};}`}function h2({tabs:e,activeTab:r,onChange:n,className:a="",config:s={},integrated:l=!1}){const i=m2(s,"tab-navigation-scrollbar");return u.useEffect(()=>{const o="tab-navigation-scrollbar-styles";let c=document.getElementById(o);return c||(c=document.createElement("style"),c.id=o,document.head.appendChild(c)),c.textContent=i,()=>{}},[i]),t.jsx("div",{className:`bg-white ${l?"":"border-b border-gray-200"} ${a}`,children:t.jsx("div",{className:"overflow-x-auto tab-navigation-scrollbar",children:t.jsx("nav",{className:"flex space-x-8 px-6 min-w-max",children:e.map(o=>t.jsx("button",{onClick:()=>n(o.key),className:`
                                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200
                                    ${r===o.key?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
                                `,children:o.label},o.key))})})})}function Fi({active:e=!1,className:r="",children:n,href:a="#",...s}){return t.jsx("a",{href:a,...s,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+r,children:n})}function Hi({active:e=!1,className:r="",children:n,href:a="#",...s}){return t.jsx("a",{href:a,...s,className:`flex w-full items-center border-l-4 py-2 pe-4 ps-3 ${e?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${r}`,children:n})}function f2({children:e,align:r="right",width:n="48"}){var h,f,b,j;const[a,s]=u.useState(!1),[l,i]=u.useState("bottom"),o=u.useRef(null),c=u.useRef(null);u.useEffect(()=>{const y=w=>{o.current&&!o.current.contains(w.target)&&c.current&&!c.current.contains(w.target)&&s(!1)};if(a)return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[a]),u.useEffect(()=>{if(a&&c.current){const y=c.current.getBoundingClientRect(),w=window.innerHeight-y.bottom,v=y.top,g=64,m=130,x=30;w<m+x&&v>g+m+x?i("top"):i("bottom")}},[a]);const d=()=>l==="top"?r==="right"?"origin-bottom-right":"origin-bottom-left":r==="right"?"origin-top-right":"origin-top-left",p={48:"w-48",56:"w-56",64:"w-64"};return t.jsxs("div",{className:"relative",children:[t.jsx("div",{ref:c,children:t.jsx("button",{onClick:()=>s(!a),className:"flex items-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:t.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})})})}),a&&nd.createPortal(t.jsx("div",{ref:o,className:`fixed ${p[n]} ${d()} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-150 ease-out`,style:{top:l==="top"?(((h=c.current)==null?void 0:h.getBoundingClientRect().top)||0)-130-8:(((f=c.current)==null?void 0:f.getBoundingClientRect().bottom)||0)+8,right:r==="right"?window.innerWidth-(((b=c.current)==null?void 0:b.getBoundingClientRect().right)||0):void 0,left:r==="left"?((j=c.current)==null?void 0:j.getBoundingClientRect().left)||0:void 0,zIndex:999999},children:t.jsx("div",{className:"py-1",onClick:y=>{y.target instanceof Element&&y.target.closest("button")&&s(!1)},children:e})}),document.body)]})}const g2=()=>{const[e,r]=u.useState("overview"),[n,a]=u.useState(!1),[s,l]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState("right"),[p,h]=u.useState({0:!0}),f=({items:g,allowMultiple:m=!1})=>{const x=N=>{h(C=>m?{...C,[N]:!C[N]}:{[N]:!C[N]})};return t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:g.map((N,C)=>t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>x(C),style:{width:"100%",padding:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:p[C]?"var(--color-neutral-100)":"var(--color-neutral-white)",border:"none",borderBottom:C<g.length-1?"1px solid var(--color-neutral-200)":"none",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)",textAlign:"left",transition:"background-color 0.2s"},children:[t.jsx("span",{children:N.title}),t.jsx(z,{name:p[C]?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"var(--color-neutral-600)",transition:"transform 0.2s"}})]}),p[C]&&t.jsx("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-50)",borderBottom:C<g.length-1?"1px solid var(--color-neutral-200)":"none",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",lineHeight:"var(--line-height-relaxed)"},children:N.content})]},C))})},b=[{key:"overview",label:"概要",icon:"dashboard"},{key:"users",label:"ユーザー",icon:"users"},{key:"settings",label:"設定",icon:"settings"},{key:"reports",label:"レポート",icon:"chart"}],j=()=>{a(!n)},y=()=>{a(!1)},w=()=>{l(!s)},v=[{path:"/",label:"ホーム",icon:"home"},{path:"/buttons",label:"ボタン",icon:"cube"},{path:"/forms",label:"フォーム",icon:"edit"},{path:"/messages",label:"メッセージ",icon:"clipboard"},{path:"/tables",label:"テーブル",icon:"table"},{path:"/navigation",label:"ナビゲーション",icon:"menu"},{path:"/icons",label:"アイコン",icon:"star"}];return t.jsxs("div",{className:"navigation-page",children:[t.jsx("style",{jsx:!0,children:`
        .navigation-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .tab-navigation-wrapper {
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          overflow: hidden;
        }

        .tab-navigation-wrapper > div {
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .tab-navigation-wrapper button {
          padding: var(--spacing-3) var(--spacing-1) !important;
        }

        .dropdown-controls {
          display: flex;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
          align-items: center;
        }

        .alignment-btn {
          position: relative;
          transition: all 0.2s ease !important;
        }

        .alignment-btn.active {
          background: var(--color-primary-600) !important;
          color: var(--color-neutral-white) !important;
          border-color: var(--color-primary-600) !important;
          font-weight: var(--font-weight-semibold);
          transform: scale(1.05);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .alignment-btn:not(.active) {
          background: var(--color-neutral-100) !important;
          color: var(--color-neutral-600) !important;
          border-color: var(--color-neutral-300) !important;
        }

        .alignment-btn:not(.active):hover {
          background: var(--color-neutral-200) !important;
          color: var(--color-neutral-700) !important;
        }

        .dropdown-demo {
          position: relative;
          display: inline-block;
        }

        .tab-content {
          padding: var(--spacing-6);
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-top: none;
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
          min-height: 150px;
        }

        .nav-links-demo {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .responsive-nav-demo {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .breadcrumb-demo {
          background: white;
          padding: var(--spacing-4);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .breadcrumb-items {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .breadcrumb-separator {
          color: var(--color-neutral-400);
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          color: var(--color-primary-600);
          text-decoration: none;
          font-size: var(--font-size-sm);
        }

        .breadcrumb-item:hover {
          text-decoration: underline;
        }

        .breadcrumb-item.current {
          color: var(--color-neutral-700);
          cursor: default;
        }

        .alert-panel-demo {
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          max-width: 300px;
        }

        .alert-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-3);
          border-bottom: 1px solid var(--color-neutral-200);
        }

        .alert-title {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-semibold);
          margin: 0;
        }

        .alert-button {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-neutral-600);
          hover: var(--color-neutral-800);
        }

        .alert-item {
          display: flex;
          padding: var(--spacing-3);
          gap: var(--spacing-3);
          border-bottom: 1px solid var(--color-neutral-100);
        }

        .alert-icon {
          color: rgb(21, 52, 109);
          margin-top: var(--spacing-1);
        }

        .alert-content {
          flex: 1;
        }

        .alert-item-header {
          margin-bottom: var(--spacing-1);
        }

        .alert-item-title {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          margin: 0;
          color: var(--color-neutral-900);
        }

        .alert-item-message {
          font-size: var(--font-size-xs);
          color: var(--color-neutral-600);
          margin: 0 0 var(--spacing-2) 0;
          line-height: var(--line-height-relaxed);
        }

        .alert-item-actions {
          display: flex;
          gap: var(--spacing-2);
        }

        .alert-action-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          background: none;
          border: none;
          cursor: pointer;
          font-size: var(--font-size-xs);
          color: var(--color-neutral-500);
          padding: var(--spacing-1);
        }

        .alert-action-btn:hover {
          color: var(--color-neutral-700);
        }

        .alert-footer-link {
          display: block;
          text-align: center;
          padding: var(--spacing-3);
          background: var(--color-neutral-50);
          border-top: 1px solid var(--color-neutral-200);
          color: rgb(21, 52, 109);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
        }

        .alert-footer-link:hover {
          opacity: 0.8;
        }


        .hamburger-demo {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-4);
          position: relative;
        }

        .hamburger-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-4);
        }

        .hamburger-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color-neutral-700);
        }

        .hamburger-button:hover {
          background: var(--color-neutral-200);
        }

        .hamburger-button.active {
          background: var(--color-primary-100);
          color: var(--color-primary-700);
        }

        .hamburger-button .hamburger-icon {
          transition: transform 0.3s ease;
        }

        .hamburger-button.active .hamburger-icon {
          transform: rotate(90deg);
        }

        .hamburger-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          z-index: 50;
          opacity: 0;
          transform: translateY(-10px);
          visibility: hidden;
          transition: all 0.2s ease;
        }

        .hamburger-menu.open {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        .hamburger-nav-list {
          list-style: none;
          margin: 0;
          padding: var(--spacing-2);
        }

        .hamburger-nav-item {
          margin-bottom: var(--spacing-1);
        }

        .hamburger-nav-item:last-child {
          margin-bottom: 0;
        }

        .hamburger-nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--color-neutral-600);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          transition: all 0.2s;
        }

        .hamburger-nav-link:hover {
          background: var(--color-neutral-100);
          color: var(--color-neutral-900);
        }

        .hamburger-nav-link.active {
          background: var(--color-primary-100);
          color: var(--color-primary-700);
        }

        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 60;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }

        .drawer-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 280px;
          background: var(--color-neutral-white);
          z-index: 70;
          transform: translateX(-100%);
          transition: transform 0.3s;
          overflow-y: auto;
        }

        .drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--color-neutral-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .drawer-title {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary-700);
        }

        .drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--color-neutral-500);
        }

        .drawer-close:hover {
          background: var(--color-neutral-100);
        }

        .drawer-nav {
          padding: var(--spacing-4);
        }

        .drawer-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .drawer-nav-item {
          margin-bottom: var(--spacing-1);
        }

        .drawer-nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: var(--color-neutral-600);
          font-weight: var(--font-weight-medium);
          transition: all 0.2s;
        }

        .drawer-nav-link:hover {
          background: var(--color-neutral-100);
          color: var(--color-neutral-900);
        }

        .drawer-nav-link.active {
          background: var(--color-primary-100);
          color: var(--color-primary-700);
        }

        @media (max-width: 768px) {
          .nav-links-demo {
            flex-direction: column;
          }
        }

        .accordion-demo-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-description",children:"ページ間の移動、階層表示、検索・フィルタリング機能を提供するコンポーネント群"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"タブナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"TabNavigation"}),t.jsx("p",{className:"component-description",children:"コンテンツを複数のタブに分けて表示するナビゲーションコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsx("div",{className:"tab-navigation-wrapper",children:t.jsx(h2,{tabs:b,activeTab:e,onTabChange:r,integrated:!0})}),t.jsxs("div",{className:"tab-content",children:[e==="overview"&&t.jsxs("div",{children:[t.jsx("h4",{children:"概要タブの内容"}),t.jsx("p",{children:"ここに概要情報が表示されます"})]}),e==="users"&&t.jsxs("div",{children:[t.jsx("h4",{children:"ユーザータブの内容"}),t.jsx("p",{children:"ユーザー関連の情報がここに表示されます"})]}),e==="settings"&&t.jsxs("div",{children:[t.jsx("h4",{children:"設定タブの内容"}),t.jsx("p",{children:"各種設定項目がここに表示されます"})]}),e==="reports"&&t.jsxs("div",{children:[t.jsx("h4",{children:"レポートタブの内容"}),t.jsx("p",{children:"レポートとダッシュボードがここに表示されます"})]})]})]}),t.jsx("div",{className:"code-snippet",children:`<TabNavigation
  tabs={[
    { key: 'tab1', label: 'タブ1', icon: 'icon-name' },
    { key: 'tab2', label: 'タブ2' }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ナビゲーションリンク"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"NavLink"}),t.jsx("p",{className:"component-description",children:"デスクトップナビゲーション用のリンクコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"nav-links-demo",children:[t.jsxs(Fi,{href:"#",active:!0,children:[t.jsx(z,{name:"dashboard",className:"w-4 h-4 inline mr-2"}),"ダッシュボード"]}),t.jsxs(Fi,{href:"#",children:[t.jsx(z,{name:"users",className:"w-4 h-4 inline mr-2"}),"ユーザー管理"]}),t.jsxs(Fi,{href:"#",children:[t.jsx(z,{name:"settings",className:"w-4 h-4 inline mr-2"}),"設定"]})]})}),t.jsx("div",{className:"code-snippet",children:`<NavLink href="/dashboard" active>
  ダッシュボード
</NavLink>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SidebarLink"}),t.jsx("p",{className:"component-description",children:"サイドバーナビゲーション用のリンクコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"responsive-nav-demo",children:[t.jsxs(Hi,{href:"#",active:!0,children:[t.jsx(z,{name:"dashboard",className:"w-4 h-4 inline mr-2"}),"ダッシュボード"]}),t.jsxs(Hi,{href:"#",children:[t.jsx(z,{name:"users",className:"w-4 h-4 inline mr-2"}),"ユーザー管理"]}),t.jsxs(Hi,{href:"#",children:[t.jsx(z,{name:"settings",className:"w-4 h-4 inline mr-2"}),"設定"]})]})}),t.jsx("div",{className:"code-snippet",children:`<SidebarLink href="/dashboard" active>
  ダッシュボード
</SidebarLink>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"パンくずナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"BreadcrumbNav"}),t.jsx("p",{className:"component-description",children:"現在のページ位置を階層的に表示するナビゲーション"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"breadcrumb-demo",children:t.jsxs("div",{className:"breadcrumb-items",children:[t.jsxs("a",{href:"#",className:"breadcrumb-item",children:[t.jsx(z,{name:"home",className:"w-4 h-4"}),t.jsx("span",{children:"ホーム"})]}),t.jsx("span",{className:"breadcrumb-separator",children:t.jsx(z,{name:"chevron-right",className:"w-4 h-4"})}),t.jsx("a",{href:"#",className:"breadcrumb-item",children:t.jsx("span",{children:"マスタ管理"})}),t.jsx("span",{className:"breadcrumb-separator",children:t.jsx(z,{name:"chevron-right",className:"w-4 h-4"})}),t.jsx("span",{className:"breadcrumb-item current",children:t.jsx("span",{children:"ユーザー一覧"})})]})})}),t.jsx("div",{className:"code-snippet",children:`<BreadcrumbNav items={[
  { label: 'ホーム', href: '/', icon: 'home' },
  { label: 'マスタ管理', href: '/master' },
  { label: 'ユーザー一覧' }
]} />`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ドロップダウンメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DropdownMenu"}),t.jsx("p",{className:"component-description",children:"基本的なドロップダウンコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"dropdown-controls",children:[t.jsx("label",{children:"表示位置:"}),t.jsx(Nt,{onClick:()=>d("left"),className:`alignment-btn ${c==="left"?"active":""}`,children:"左"}),t.jsx(Nt,{onClick:()=>d("right"),className:`alignment-btn ${c==="right"?"active":""}`,children:"右"}),t.jsx("div",{className:"dropdown-demo",children:t.jsx(f2,{isOpen:i,onToggle:()=>o(!i),align:c,trigger:t.jsx(Nt,{onClick:()=>o(!i),children:t.jsx(z,{name:"more-vertical",className:"w-4 h-4"})}),children:t.jsxs("div",{style:{padding:"var(--spacing-2)"},children:[t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:"プロフィール"}),t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:"設定"}),t.jsx("hr",{style:{margin:"var(--spacing-2) 0"}}),t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer",color:"var(--color-danger-600)"},children:"ログアウト"})]})})})]})}),t.jsx("div",{className:"code-snippet",children:`<DropdownMenu
  isOpen={isOpen}
  onToggle={onToggle}
  align="right"
  trigger={<button>メニュー</button>}
>
  <div>ドロップダウンの内容</div>
</DropdownMenu>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ハンバーガーメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"HamburgerMenu"}),t.jsx("p",{className:"component-description",children:"モバイル向けのハンバーガーメニューボタン（3本線アイコン）"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"hamburger-demo",children:[t.jsxs("div",{className:"hamburger-header",children:[t.jsx("h4",{children:"サイトタイトル"}),t.jsx("button",{className:`hamburger-button ${s?"active":""}`,onClick:w,"aria-label":s?"メニューを閉じる":"メニューを開く",children:t.jsx(z,{name:"menu",className:"w-5 h-5 hamburger-icon"})})]}),t.jsx("div",{className:`hamburger-menu ${s?"open":""}`,children:t.jsx("ul",{className:"hamburger-nav-list",children:v.map((g,m)=>t.jsx("li",{className:"hamburger-nav-item",children:t.jsxs("a",{href:g.path,className:`hamburger-nav-link ${g.path==="/navigation"?"active":""}`,onClick:x=>{x.preventDefault(),l(!1)},children:[t.jsx(z,{name:g.icon,className:"w-4 h-4"}),g.label]})},g.path))})}),t.jsxs("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:["ハンバーガーメニューボタン - クリックして状態変化を確認",t.jsx("br",{}),"状態: ",s?"開いている":"閉じている"]})]})}),t.jsx("div",{className:"code-snippet",children:`// 状態管理
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

// ハンバーガーボタンとメニュー
<div className="hamburger-demo">
  <button
    className={\`hamburger-button \${isMenuOpen ? 'active' : ''}\`}
    onClick={toggleMenu}
    aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
  >
    <Icon name="menu" className="hamburger-icon" />
  </button>

  {/* ドロップダウンメニュー */}
  <div className={\`hamburger-menu \${isMenuOpen ? 'open' : ''}\`}>
    <ul className="hamburger-nav-list">
      {navItems.map(item => (
        <li key={item.path} className="hamburger-nav-item">
          <a href={item.path} className="hamburger-nav-link">
            <Icon name={item.icon} />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ドロワーメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DrawerMenu"}),t.jsx("p",{className:"component-description",children:"スライド式のナビゲーションドロワー（ハンバーガーメニューと組み合わせて使用）"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"hamburger-demo",children:[t.jsxs("div",{className:"hamburger-header",children:[t.jsx("h4",{children:"サイトタイトル"}),t.jsx("button",{className:"hamburger-button",onClick:j,"aria-label":"メニューを開く",children:t.jsx(z,{name:"menu",className:"w-5 h-5"})})]}),t.jsx("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"ハンバーガーメニューをクリックしてドロワーを開く"})]}),t.jsx("div",{className:`drawer-overlay ${n?"open":""}`,onClick:y}),t.jsxs("div",{className:`drawer ${n?"open":""}`,children:[t.jsxs("div",{className:"drawer-header",children:[t.jsx("div",{className:"drawer-title",children:"ナビゲーション"}),t.jsx("button",{className:"drawer-close",onClick:y,"aria-label":"メニューを閉じる",children:t.jsx(z,{name:"close",className:"w-4 h-4"})})]}),t.jsx("nav",{className:"drawer-nav",children:t.jsx("ul",{className:"drawer-nav-list",children:v.map((g,m)=>t.jsx("li",{className:"drawer-nav-item",children:t.jsxs("a",{href:g.path,className:`drawer-nav-link ${g.path==="/navigation"?"active":""}`,onClick:x=>{x.preventDefault(),y()},children:[t.jsx(z,{name:g.icon,className:"w-5 h-5"}),g.label]})},g.path))})})]})]}),t.jsx("div",{className:"code-snippet",children:`// ドロワーオーバーレイ
<div className="drawer-overlay" onClick={closeDrawer} />

// ドロワーメニュー
<div className={\`drawer \${isOpen ? 'open' : ''}\`}>
  <div className="drawer-header">
    <h3>ナビゲーション</h3>
    <button onClick={closeDrawer}>
      <Icon name="close" />
    </button>
  </div>
  <nav className="drawer-nav">
    <ul className="drawer-nav-list">
      {navItems.map(item => (
        <li key={item.path}>
          <a href={item.path} className="drawer-nav-link">
            <Icon name={item.icon} />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"アコーディオンナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Accordion"}),t.jsx("p",{className:"component-description",children:"展開・折りたたみ可能なナビゲーションコンテンツ（FAQやメニュー整理に最適）"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"accordion-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本アコーディオン（単一展開）"}),t.jsx(f,{items:[{title:"よくある質問",content:"このセクションでは、システムに関する最も頻繁に寄せられる質問とその回答をご覧いただけます。新しい質問がある場合は、サポートチームまでお気軽にお問い合わせください。"},{title:"機能ガイド",content:t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ダッシュボードの使い方"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• データのインポート・エクスポート"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• レポート作成手順"}),t.jsx("p",{style:{margin:"0"},children:"• ユーザー権限の管理"})]})},{title:"トラブルシューティング",content:"システムで問題が発生した場合は、まずこちらのトラブルシューティングガイドをご確認ください。ログイン問題、パフォーマンスの問題、データ同期に関する解決策を提供しています。"}],allowMultiple:!1})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"複数展開可能アコーディオン"}),t.jsx(f,{items:[{title:"ナビゲーションメニュー",content:t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ダッシュボード"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ユーザー管理"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• レポート"}),t.jsx("p",{style:{margin:"0"},children:"• 設定"})]})},{title:"管理者メニュー",content:t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• システム設定"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ユーザー権限管理"}),t.jsx("p",{style:{margin:"0"},children:"• ログ管理"})]})}],allowMultiple:!0})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本アコーディオン（単一展開）
<Accordion
  items={[
    { title: "項目1", content: "内容1" },
    { title: "項目2", content: "内容2" }
  ]}
  allowMultiple={false}
/>

// 複数展開可能アコーディオン
<Accordion
  items={[
    { title: "項目1", content: "内容1" },
    { title: "項目2", content: "内容2" }
  ]}
  allowMultiple={true}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"タブナビゲーションは5つ以下のタブに制限することを推奨します"}),t.jsx("li",{children:"パンくずは3〜4階層までが理想的です"}),t.jsx("li",{children:"NavLinkは現在のページをactiveプロパティで示してください"}),t.jsx("li",{children:"SidebarLinkはサイドバーメニュー内で使用してください"}),t.jsx("li",{children:"ハンバーガーメニューは768px以下のモバイル画面で表示することが一般的です"}),t.jsx("li",{children:"ハンバーガーメニューボタンには適切なaria-labelを設定してください"}),t.jsx("li",{children:"ドロワーメニューは外部クリック、ESCキー、閉じるボタンで閉じられるようにしてください"}),t.jsx("li",{children:"ドロワーメニューはハンバーガーメニューと組み合わせて使用します"}),t.jsx("li",{children:"アコーディオンの単一展開モードはFAQやヘルプページに適しています"}),t.jsx("li",{children:"アコーディオンの複数展開モードはナビゲーションメニューや設定画面に適しています"}),t.jsx("li",{children:"アコーディオンは長いコンテンツを整理し、ユーザーが必要な情報のみを表示できます"})]})})]})]})},v2=()=>{const e=({size:$="md",color:W="#007bff",backgroundColor:Q="rgba(255, 255, 255, 0.9)",overlay:L=!1,text:A=null,show:M=!0})=>{if(!M)return null;const D={sm:{width:"20px",height:"20px",borderWidth:"2px"},md:{width:"40px",height:"40px",borderWidth:"4px"},lg:{width:"60px",height:"60px",borderWidth:"6px"},xl:{width:"80px",height:"80px",borderWidth:"8px"}},V={width:D[$].width,height:D[$].height,border:`${D[$].borderWidth} solid #f3f3f3`,borderTop:`${D[$].borderWidth} solid ${W}`,borderRadius:"50%",animation:"spin 1s linear infinite"},q={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",...L&&{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:Q,zIndex:9999}};return t.jsxs("div",{style:q,children:[t.jsx("style",{children:`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}),t.jsx("div",{style:V}),A&&t.jsx("span",{style:{fontSize:"14px",color:"#666",fontWeight:"500"},children:A})]})},[r,n]=u.useState("standard"),[a,s]=u.useState(!1),[l,i]=u.useState("mobile-first"),[o,c]=u.useState(!0),[d,p]=u.useState(!1),[h,f]=u.useState(!1),[b,j]=u.useState(!1),[y,w]=u.useState(!1),[v,g]=u.useState("blue"),[m,x]=u.useState(!1),[N,C]=u.useState(!1),[k,R]=u.useState(!1),[I,_]=u.useState(!1),[P,T]=u.useState("default");return t.jsxs("div",{className:"layout-page",children:[t.jsx("style",{jsx:!0,children:`
        .layout-page {
          padding: var(--spacing-8);
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: var(--spacing-8);
        }

        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-4);
        }

        .page-description {
          color: var(--color-neutral-600);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
        }

        .component-section {
          margin-bottom: var(--spacing-12);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid var(--color-primary-200);
          padding-bottom: var(--spacing-3);
        }

        .component-card {
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .component-info {
          margin-bottom: var(--spacing-4);
        }

        .component-name {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .component-description {
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
          margin-bottom: var(--spacing-4);
        }

        .component-demo {
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--radius-md);
        }

        .code-snippet {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-md);
          font-family: var(--font-family-mono);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-3);
          overflow-x: auto;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }

        .layout-demo {
          background: white;
          border: 2px dashed var(--color-neutral-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          min-height: 200px;
        }

        .pc-layout-demo {
          background: white;
          border: 2px solid var(--color-primary-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          min-height: 250px;
          width: 100%;
        }

        .sp-layout-demo {
          background: white;
          border: 2px solid var(--color-success-200);
          border-radius: var(--radius-md);
          padding: var(--spacing-4);
          min-height: 300px;
          width: 320px;
          margin: 0 auto;
        }

        .device-frame {
          border: 3px solid var(--color-neutral-400);
          border-radius: var(--radius-lg);
          padding: var(--spacing-2);
          background: var(--color-neutral-800);
        }

        .sp-frame {
          width: 320px;
          margin: 0 auto;
        }

        .pc-header {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pc-nav {
          background: #e5e7eb;
          padding: var(--spacing-2);
          border-radius: 0;
          margin-bottom: 0;
          display: flex;
          gap: var(--spacing-2);
        }

        .pc-nav-item {
          padding: var(--spacing-1) var(--spacing-2);
          background: transparent;
          border-radius: var(--radius-sm);
          font-size: var(--font-size-xs);
          display: flex;
          align-items: center;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.15s ease-in-out;
          text-decoration: none;
          color: var(--color-neutral-500);
          font-weight: var(--font-weight-medium);
          position: relative;
        }

        .pc-nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: transparent;
          transition: all 0.15s ease-in-out;
        }

        .pc-nav-item:hover {
          color: var(--color-neutral-700);
          background: rgba(0, 0, 0, 0.05);
        }

        .pc-nav-item:hover::after {
          background: var(--color-neutral-300);
        }

        .pc-nav-item.active {
          color: var(--color-neutral-900);
          background: transparent;
        }

        .pc-nav-item.active::after {
          background: #6366f1;
        }

        .pc-main {
          display: flex;
        }

        .pc-sidebar {
          flex: 0 0 120px;
          background: rgb(55, 65, 81);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .pc-content {
          flex: 1;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
          min-height: 120px;
        }

        .pc-nav + .pc-content {
          border-radius: 0;
        }

        .pc-footer {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-xs);
        }

        .sp-header {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: var(--font-size-xs);
        }

        .sp-nav {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
          margin-bottom: 0;
          font-size: var(--font-size-xs);
          text-align: center;
        }

        .sp-nav-item {
          padding: var(--spacing-2) var(--spacing-1);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          min-width: 50px;
        }

        .sp-nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-nav-item.active {
          background: rgba(255, 255, 255, 0.2);
          font-weight: var(--font-weight-semibold);
        }

        .sp-content {
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
          min-height: 150px;
          margin-bottom: 0;
        }

        .sp-footer {
          background: rgb(21, 52, 109);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0 0 var(--radius-sm) var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-xs);
        }

        .pc-drawer-layout {
          display: flex;
          height: 220px;
        }

        .pc-drawer-sidebar {
          flex: 0 0 180px;
          background: rgb(55, 65, 81);
          color: white;
          padding: var(--spacing-2);
          border-radius: 0;
          font-size: var(--font-size-xs);
          transition: all 0.3s ease;
          margin-right: 0;
          position: relative;
          overflow: hidden;
        }

        .pc-drawer-sidebar.collapsed {
          flex: 0 0 50px;
        }

        .pc-drawer-content {
          flex: 1;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .drawer-toggle {
          position: absolute;
          top: var(--spacing-2);
          left: var(--spacing-2);
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: var(--radius-sm);
          padding: var(--spacing-1);
          cursor: pointer;
          font-size: var(--font-size-xs);
          transition: background 0.2s;
          z-index: 10;
        }

        .drawer-toggle:hover {
          background: #f3f4f6;
        }

        .drawer-menu-items {
          margin-top: 24px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .pc-drawer-sidebar.collapsed .drawer-menu-items {
          opacity: 0;
        }

        .drawer-menu-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          white-space: nowrap;
          color: white;
          display: flex;
          align-items: center;
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .overlay-drawer-layout {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .overlay-drawer-sidebar {
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          height: 100%;
          background: rgb(55, 65, 81);
          color: white;
          border: 1px solid #e5e7eb;
          border-radius: var(--radius-sm);
          padding: var(--spacing-2);
          font-size: var(--font-size-xs);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 20;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .overlay-drawer-sidebar.open {
          transform: translateX(0);
        }

        .overlay-drawer-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .overlay-drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .overlay-drawer-content {
          width: 100%;
          height: 100%;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .overlay-menu-items {
          margin-top: 8px;
        }

        .overlay-menu-item {
          padding: var(--spacing-1) var(--spacing-2);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
          white-space: nowrap;
        }

        .overlay-menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-hamburger-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: rgb(55, 65, 81);
          border: 1px solid rgb(55, 65, 81);
          border-radius: var(--radius-sm);
          padding: var(--spacing-2);
          margin: var(--spacing-1) 0 0 0;
          transform: translateY(-10px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 20;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          min-width: max-content;
        }

        .sp-hamburger-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .sp-hamburger-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          color: white;
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-weight: var(--font-weight-medium);
        }

        .sp-hamburger-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-hamburger-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .sp-drawer-layout {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .sp-drawer-sidebar {
          position: absolute;
          top: 0;
          right: 0;
          width: 180px;
          height: 100%;
          background: rgb(55, 65, 81);
          border: 1px solid rgb(55, 65, 81);
          border-radius: var(--radius-sm);
          padding: var(--spacing-2);
          font-size: var(--font-size-xs);
          transform: translateX(50%);
          transition: all 0.25s ease-out;
          z-index: 20;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          color: white;
          visibility: hidden;
          opacity: 0;
        }

        .sp-drawer-sidebar.open {
          transform: translateX(0);
          visibility: visible;
          opacity: 1;
        }

        .sp-drawer-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .sp-drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .sp-drawer-content {
          width: 100%;
          height: 100%;
          background: #f9fafb;
          padding: var(--spacing-3);
          border-radius: 0;
          font-size: var(--font-size-xs);
        }

        .sp-drawer-menu-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          color: white;
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-weight: var(--font-weight-medium);
        }

        .sp-drawer-menu-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .sp-drawer-menu-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .sp-fullscreen-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(21, 52, 109);
          color: white;
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: var(--radius-sm);
        }

        .sp-fullscreen-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .sp-fullscreen-menu {
          text-align: center;
          width: 100%;
          max-width: 200px;
          margin-top: var(--spacing-6);
        }

        .sp-fullscreen-close {
          position: absolute;
          top: var(--spacing-2);
          right: var(--spacing-2);
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: var(--spacing-1);
          z-index: 60;
        }

        .sp-fullscreen-item {
          border-left: 4px solid transparent;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-medium);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .sp-fullscreen-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .sp-fullscreen-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.25);
        }


        .container-demo {
          max-width: 600px;
          margin: 0 auto;
          padding: var(--spacing-4);
          background: var(--color-primary-50);
          border-radius: var(--radius-md);
        }

        .container-content {
          background: white;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
        }

        .grid-demo {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--spacing-3);
        }

        .grid-item {
          background: var(--color-primary-100);
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--color-primary-700);
          font-weight: var(--font-weight-medium);
        }

        .sidebar-demo {
          display: flex;
          gap: var(--spacing-4);
          min-height: 200px;
        }

        .sidebar {
          flex: 0 0 200px;
          background: var(--color-neutral-100);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
        }

        .sidebar-item {
          padding: var(--spacing-2);
          margin-bottom: var(--spacing-2);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-sm);
          color: white;
        }

        .main-content {
          flex: 1;
          background: var(--color-neutral-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
        }

        .content-block {
          background: white;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          margin-bottom: var(--spacing-3);
          font-size: var(--font-size-sm);
          color: var(--color-neutral-600);
        }

        .layout-selector {
          display: flex;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-4);
        }

        .layout-button {
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-sm);
          background: white;
          font-size: var(--font-size-sm);
          cursor: pointer;
          transition: all 0.2s;
        }

        .layout-button.active {
          background: rgb(21, 52, 109);
          color: white;
          border-color: rgb(21, 52, 109);
        }

        .layout-button:hover:not(.active) {
          background: var(--color-neutral-50);
        }

        .theme-selector {
          display: flex;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-6);
          padding: var(--spacing-4);
          background: var(--color-neutral-50);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-neutral-200);
        }

        .theme-button {
          padding: var(--spacing-2) var(--spacing-4);
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--radius-sm);
          background: white;
          font-size: var(--font-size-sm);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .theme-button.active {
          background: rgb(21, 52, 109);
          color: white;
          border-color: rgb(21, 52, 109);
        }

        .theme-button:hover:not(.active) {
          background: var(--color-neutral-50);
        }

        .theme-preview {
          width: 16px;
          height: 16px;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .theme-preview.white {
          background: linear-gradient(45deg, #f3f4f6 50%, #e5e7eb 50%);
        }

        .theme-preview.blue {
          background: linear-gradient(45deg, rgb(21, 52, 109) 50%, rgb(55, 65, 81) 50%);
        }

        .theme-preview.grey {
          background: linear-gradient(45deg, #4b5563 50%, #6b7280 50%);
        }

        .theme-demo-layout {
          border: 2px solid var(--color-neutral-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: white;
          min-height: 300px;
        }

        .theme-nav-header {
          border-bottom: 1px solid var(--color-neutral-200);
          position: relative;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        .theme-nav-container {
          padding: 0 var(--spacing-4);
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 48px;
        }

        .theme-nav-logo {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          text-decoration: none;
          transition: color 0.2s;
        }

        .theme-user-menu {
          font-size: var(--font-size-xs);
          color: inherit;
        }

        .theme-main-content {
          display: flex;
          min-height: 200px;
        }

        .theme-sidebar {
          flex: 0 0 120px;
          padding: var(--spacing-3);
          border-right: 1px solid var(--color-neutral-200);
        }

        .theme-content {
          flex: 1;
          padding: var(--spacing-4);
        }

        .theme-menu-item {
          padding: var(--spacing-1);
          margin-bottom: var(--spacing-1);
          border-radius: var(--radius-xs);
          font-size: var(--font-size-xs);
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .theme-footer {
          border-top: 1px solid var(--color-neutral-200);
          padding: var(--spacing-3);
          text-align: center;
          font-size: var(--font-size-xs);
          margin-top: auto;
        }

        /* White Theme */
        .white-theme .theme-nav-header {
          background: var(--color-neutral-white);
        }

        .white-theme .theme-nav-logo {
          color: var(--color-primary-700);
        }

        .white-theme .theme-nav-logo:hover {
          color: var(--color-primary-800);
        }

        .white-theme .theme-user-menu {
          color: var(--color-primary-700);
        }

        .white-theme .theme-sidebar {
          background: var(--color-neutral-white);
          border-right-color: var(--color-neutral-200);
        }

        .white-theme .theme-menu-item {
          border-left: 4px solid transparent;
          background: transparent;
          color: #4b5563;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .white-theme .theme-menu-item:hover {
          border-left-color: #d1d5db;
          background: #f9fafb;
          color: #374151;
        }

        .white-theme .theme-menu-item:first-child {
          border-left-color: #6366f1;
          background: #eef2ff;
          color: #4338ca;
        }

        .white-theme .theme-menu-item svg {
          color: #4b5563;
        }

        .white-theme .theme-menu-item:hover svg {
          color: #374151;
        }

        .white-theme .theme-menu-item:first-child svg {
          color: #4338ca !important;
        }

        .white-theme .theme-content {
          background: #f9fafb;
          color: var(--color-neutral-900);
        }

        .white-theme .theme-footer {
          background: var(--color-neutral-white);
          color: var(--color-neutral-600);
          border-top-color: var(--color-neutral-200);
        }

        /* Blue Theme */
        .blue-theme .theme-nav-header {
          background: rgb(21, 52, 109);
        }

        .blue-theme .theme-nav-logo {
          color: white;
        }

        .blue-theme .theme-nav-logo:hover {
          color: #e1edff;
        }

        .blue-theme .theme-user-menu {
          color: white;
        }

        .blue-theme .theme-sidebar {
          background: rgb(55, 65, 81);
          border-right-color: rgb(55, 65, 81);
        }

        .blue-theme .theme-menu-item {
          border-left: 4px solid transparent;
          background: transparent;
          color: white;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .blue-theme .theme-menu-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(21, 52, 109, 0.2);
        }

        .blue-theme .theme-menu-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .blue-theme .theme-content {
          background: #f9fafb;
          color: #111827;
        }

        .blue-theme .theme-footer {
          background: rgb(21, 52, 109);
          color: white;
          border-top-color: rgb(55, 65, 81);
        }

        /* Grey Theme */
        .grey-theme .theme-nav-header {
          background: #374151;
        }

        .grey-theme .theme-nav-logo {
          color: white;
        }

        .grey-theme .theme-nav-logo:hover {
          color: #e5e7eb;
        }

        .grey-theme .theme-user-menu {
          color: white;
        }

        .grey-theme .theme-sidebar {
          background: #fefdf8;
          border-right-color: #f0eedc;
        }

        .grey-theme .theme-menu-item {
          border-left: 4px solid transparent;
          background: transparent;
          color: #111827;
          padding: var(--spacing-2) var(--spacing-3);
          margin-bottom: var(--spacing-1);
          font-weight: var(--font-weight-medium);
          transition: all 0.15s ease-in-out;
        }

        .grey-theme .theme-menu-item:hover {
          border-left-color: #9ca3af;
          background: rgba(55, 65, 81, 0.1);
          color: #111827;
        }

        .grey-theme .theme-menu-item:first-child {
          border-left-color: #374151;
          background: #f3f4f6;
          color: #111827;
        }

        .grey-theme .theme-menu-item svg {
          color: #4b5563 !important;
        }

        .grey-theme .theme-menu-item:hover svg {
          color: #111827 !important;
        }

        .grey-theme .theme-menu-item:first-child svg {
          color: #374151 !important;
        }

        .grey-theme .theme-content {
          background: #fafafa;
          color: #111827;
        }

        .grey-theme .theme-footer {
          background: #374151;
          color: white;
          border-top-color: #4b5563;
        }

        @media (max-width: 768px) {
          .demo-grid {
            grid-template-columns: 1fr;
          }

          .sidebar-demo {
            flex-direction: column;
          }

          .sidebar {
            flex: none;
          }

          .theme-selector {
            flex-direction: column;
          }
        }


      `}),t.jsx("style",{jsx:!0,children:`
        .pc-sidebar {
          transition: all 0.3s ease;
        }

        .pc-sidebar.collapsed {
          flex: 0 0 40px;
        }

        .sidebar-item {
          border-left: 4px solid transparent;
          margin-bottom: var(--spacing-1);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          white-space: nowrap;
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-medium);
          color: white;
        }

        .sidebar-item:hover {
          border-left-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-item:first-child {
          border-left-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .sidebar-item svg {
          color: white !important;
        }

        .pc-sidebar .sidebar-item svg {
          color: white !important;
        }
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"レイアウト"}),t.jsx("p",{className:"page-description",children:"PC（デスクトップ）とSP（スマートフォン）向けのレイアウトコンポーネント。 デバイスごとに最適化されたレイアウト構造を提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"配色"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Color Theme"}),t.jsx("p",{className:"component-description",children:"プロジェクトのブランドアイデンティティに合わせた配色テーマ。青基調はデフォルト、軽量なUIには白基調、汎用系はグレー基調を推奨します。"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"theme-selector",children:[t.jsxs("button",{className:`theme-button ${v==="blue"?"active":""}`,onClick:()=>g("blue"),children:[t.jsx("div",{className:"theme-preview blue"}),"青基調"]}),t.jsxs("button",{className:`theme-button ${v==="white"?"active":""}`,onClick:()=>g("white"),children:[t.jsx("div",{className:"theme-preview white"}),"白基調"]}),t.jsxs("button",{className:`theme-button ${v==="grey"?"active":""}`,onClick:()=>g("grey"),children:[t.jsx("div",{className:"theme-preview grey"}),"グレー基調"]})]}),t.jsxs("div",{className:`theme-demo-layout ${v}-theme`,children:[t.jsx("nav",{className:"theme-nav-header",children:t.jsx("div",{className:"theme-nav-container",children:t.jsx("a",{href:"#",className:"theme-nav-logo",children:"App Title"})})}),t.jsxs("div",{className:"theme-main-content",children:[t.jsxs("aside",{className:"theme-sidebar",children:[t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(z,{name:"dashboard",className:"w-4 h-4",style:{marginRight:"6px"}}),"ダッシュボード"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(z,{name:"users",className:"w-4 h-4",style:{marginRight:"6px"}}),"ユーザー"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(z,{name:"settings",className:"w-4 h-4",style:{marginRight:"6px"}}),"設定"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(z,{name:"clipboard",className:"w-4 h-4",style:{marginRight:"6px"}}),"レポート"]})]}),t.jsxs("main",{className:"theme-content",children:[t.jsx("h3",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)"},children:"テーマ適用サンプル"}),t.jsxs("p",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-xs)",lineHeight:"var(--line-height-relaxed)"},children:["現在のUI Componentsのレイアウトを再現したプレビューです。",t.jsx("br",{}),"選択したテーマに応じて、ヘッダー、サイドバー、フッターの色が変化します。"]}),t.jsx("div",{style:{background:v==="blue"?"#e1edff":v==="white"?"var(--color-primary-50)":"#f3f4f6",padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-xs)",color:v==="blue"?"rgb(21, 52, 109)":v==="white"?"var(--color-primary-700)":"#374151"},children:"🎨 ブランドアイデンティティに合わせた配色テーマで一貫性を保ちます"})]})]}),t.jsx("footer",{className:"theme-footer",children:t.jsxs("p",{style:{margin:0},children:["© 2025 UI Components - ",v==="blue"?"Blue Theme":v==="white"?"White Theme":"Grey Theme"]})})]})]}),t.jsx("div",{className:"code-snippet",children:`/* 青基調テーマ */
.blue-theme .pc-header {
  background: rgb(21, 52, 109); /* CWJ-BISブルー */
  color: white;
}
.blue-theme .sidebar {
  background: rgb(55, 65, 81); /* CWJ-BISサイドバーグレー */
  color: white;
}

/* 白基調テーマ */
.white-theme .pc-header {
  background: var(--color-neutral-white);
  color: var(--color-primary-700);
}

/* グレー基調テーマ */
.grey-theme .pc-header {
  background: #374151; /* UI-Componentsグレー */
  color: white;
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"PCレイアウト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PC Layout"}),t.jsx("p",{className:"component-description",children:"デスクトップ向けのレイアウト。横幅を活用した多カラム構成が可能"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"layout-selector",children:[t.jsx("button",{className:`layout-button ${r==="standard"?"active":""}`,onClick:()=>n("standard"),children:"基本"}),t.jsx("button",{className:`layout-button ${r==="drawer"?"active":""}`,onClick:()=>n("drawer"),children:"サイドバー固定"}),t.jsx("button",{className:`layout-button ${r==="overlay"?"active":""}`,onClick:()=>n("overlay"),children:"オーバーレイ"}),t.jsx("button",{className:`layout-button ${r==="navigation"?"active":""}`,onClick:()=>n("navigation"),children:"ナビゲーション"})]}),t.jsxs("div",{className:"pc-layout-demo",children:[r==="navigation"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-nav",children:[t.jsxs("a",{href:"#",className:"pc-nav-item active",children:[t.jsx(z,{name:"home",className:"w-4 h-4",style:{marginRight:"8px"}}),"ホーム"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(z,{name:"user",className:"w-4 h-4",style:{marginRight:"8px"}}),"会社情報"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(z,{name:"briefcase",className:"w-4 h-4",style:{marginRight:"8px"}}),"サービス"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(z,{name:"mail",className:"w-4 h-4",style:{marginRight:"8px"}}),"お問い合わせ"]})]}),t.jsxs("div",{className:"pc-content",children:["ナビゲーション表示レイアウト",t.jsx("br",{}),"フルワイドでコンテンツを表示",t.jsx("br",{}),t.jsx("br",{}),"ヘッダー下にナビゲーション",t.jsx("br",{}),"メニューを配置するパターン"]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),r==="standard"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-main",children:[t.jsxs("div",{className:`pc-sidebar ${a?"collapsed":""}`,children:[t.jsx("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:a?"center":"flex-end"},children:t.jsx("button",{onClick:()=>s(!a),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:t.jsx(z,{name:a?"chevron-right":"chevron-left",className:"w-4 h-4",style:{color:"white"}})})}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(z,{name:"dashboard",className:"w-4 h-4",style:{color:"white"}}),!a&&t.jsx("span",{children:"ダッシュボード"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(z,{name:"users",className:"w-4 h-4",style:{color:"white"}}),!a&&t.jsx("span",{children:"ユーザー"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(z,{name:"settings",className:"w-4 h-4",style:{color:"white"}}),!a&&t.jsx("span",{children:"設定"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(z,{name:"clipboard",className:"w-4 h-4",style:{color:"white"}}),!a&&t.jsx("span",{children:"レポート"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(z,{name:"star",className:"w-4 h-4",style:{color:"white"}}),!a&&t.jsx("span",{children:"分析"})]})]}),t.jsxs("div",{className:"pc-content",children:["基本レイアウト",t.jsx("br",{}),"サイドバー付きの構成",t.jsx("br",{}),t.jsx("br",{}),"標準的なレイアウト",t.jsx("br",{}),"ダッシュボードに最適",t.jsx("br",{}),t.jsx("br",{}),"メインコンテンツエリア",t.jsx("br",{}),"管理画面向けの設計"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),r==="drawer"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-drawer-layout",children:[t.jsx("div",{className:`pc-drawer-sidebar ${o?"":"collapsed"}`,children:t.jsxs("div",{className:"drawer-menu-items",style:{marginTop:"8px"},children:[t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(z,{name:"dashboard",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ダッシュボード"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(z,{name:"users",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ユーザー"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(z,{name:"settings",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"設定"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(z,{name:"clipboard",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"レポート"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(z,{name:"star",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"分析"]})]})}),t.jsxs("div",{className:"pc-drawer-content",children:["サイドバー固定レイアウト",t.jsx("br",{}),"サイドバーが常時表示",t.jsx("br",{}),t.jsx("br",{}),"安定したナビゲーション",t.jsx("br",{}),"管理画面に最適",t.jsx("br",{}),t.jsx("br",{}),"コンテンツ領域と",t.jsx("br",{}),"バランスの取れた設計"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),r==="overlay"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("button",{className:"drawer-toggle",onClick:()=>p(!d),style:{position:"static",background:"none",border:"none",fontSize:"12px",cursor:"pointer",padding:"2px 4px",borderRadius:"3px"},children:"≡"}),t.jsx("span",{children:"App Title"})]})}),t.jsxs("div",{className:"overlay-drawer-layout",children:[t.jsx("div",{className:`overlay-drawer-backdrop ${d?"open":""}`,onClick:()=>p(!1)}),t.jsx("div",{className:`overlay-drawer-sidebar ${d?"open":""}`,children:t.jsxs("div",{className:"overlay-menu-items",style:{marginTop:"8px"},children:[t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(z,{name:"dashboard",className:"w-4 h-4",style:{color:"white"}}),"ダッシュボード"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(z,{name:"users",className:"w-4 h-4",style:{color:"white"}}),"ユーザー"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(z,{name:"settings",className:"w-4 h-4",style:{color:"white"}}),"設定"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(z,{name:"clipboard",className:"w-4 h-4",style:{color:"white"}}),"レポート"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(z,{name:"star",className:"w-4 h-4",style:{color:"white"}}),"分析"]})]})}),t.jsxs("div",{className:"overlay-drawer-content",children:["オーバーレイドロワー",t.jsx("br",{}),"コンテンツの上に重なる",t.jsx("br",{}),t.jsx("br",{}),"背景クリックで閉じる",t.jsx("br",{}),t.jsx("br",{}),"モバイルライクなUX",t.jsx("br",{}),t.jsx("br",{}),"画面サイズを問わず",t.jsx("br",{}),"一定の操作感"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]})]})]}),t.jsx("div",{className:"code-snippet",children:`<div className="pc-layout">
  <header className="pc-header">
    <!-- ヘッダー：ロゴ、ナビゲーション、ユーザーメニュー -->
  </header>
  <main className="pc-main">
    <aside className="pc-sidebar">
      <!-- サイドバー：メニュー、フィルター -->
    </aside>
    <div className="pc-content">
      <!-- メインコンテンツ -->
    </div>
  </main>
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"SPレイアウト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SP Layout"}),t.jsx("p",{className:"component-description",children:"スマートフォン向けのレイアウト。基本はハンバーガーメニューを使用した1カラム構成"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"layout-selector",children:[t.jsx("button",{className:`layout-button ${l==="mobile-first"?"active":""}`,onClick:()=>i("mobile-first"),children:"基本"}),t.jsx("button",{className:`layout-button ${l==="drawer"?"active":""}`,onClick:()=>i("drawer"),children:"ドロワー"}),t.jsx("button",{className:`layout-button ${l==="fullscreen"?"active":""}`,onClick:()=>i("fullscreen"),children:"全画面表示"}),t.jsx("button",{className:`layout-button ${l==="bottom-nav"?"active":""}`,onClick:()=>i("bottom-nav"),children:"ボトムナビ"})]}),t.jsx("div",{className:"sp-frame",children:t.jsxs("div",{className:"sp-layout-demo",children:[l==="mobile-first"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>f(!h),children:"☰"}),h&&t.jsxs("div",{className:`sp-hamburger-menu ${h?"open":""}`,children:[t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(z,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(z,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(z,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(z,{name:"mail",className:"w-4 h-4",style:{color:"white !important",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(z,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]}),t.jsxs("div",{className:"sp-content",children:["基本のモバイルレイアウト",t.jsx("br",{}),t.jsx("br",{}),"クリックでハンバーガー",t.jsx("br",{}),"メニューが表示される",t.jsx("br",{}),t.jsx("br",{}),"縦スクロールでの",t.jsx("br",{}),"コンテンツ表示",t.jsx("br",{}),t.jsx("br",{}),"最もスタンダードな",t.jsx("br",{}),"SP構成"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"})]}),l==="fullscreen"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsx("div",{style:{position:"relative"},children:t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>w(!y),children:"☰"})})]}),t.jsxs("div",{className:"sp-content",children:["全画面メニューレイアウト",t.jsx("br",{}),t.jsx("br",{}),"ハンバーガークリックで",t.jsx("br",{}),"全画面にメニュー表示",t.jsx("br",{}),t.jsx("br",{}),"シンプルで分かりやすい",t.jsx("br",{}),"ナビゲーション",t.jsx("br",{}),t.jsx("br",{}),"モバイルアプリ風の",t.jsx("br",{}),"操作感を実現"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"}),t.jsxs("div",{className:`sp-fullscreen-overlay ${y?"open":""}`,children:[t.jsx("button",{className:"sp-fullscreen-close",onClick:()=>w(!1),children:"×"}),t.jsxs("div",{className:"sp-fullscreen-menu",children:[t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(z,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(z,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(z,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(z,{name:"mail",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(z,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]}),l==="bottom-nav"&&t.jsxs("div",{children:[t.jsx("div",{className:"sp-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"sp-content",children:["ボトムナビゲーション",t.jsx("br",{}),"レイアウト",t.jsx("br",{}),t.jsx("br",{}),"下部に固定された",t.jsx("br",{}),"タブナビゲーション",t.jsx("br",{}),t.jsx("br",{}),"アプリライクな",t.jsx("br",{}),"操作感を実現",t.jsx("br",{}),t.jsx("br",{}),"タブ切り替えで",t.jsx("br",{}),"コンテンツ表示"]}),t.jsxs("div",{className:"sp-nav",style:{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"var(--spacing-3)"},children:[t.jsxs("div",{className:"sp-nav-item active",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["🏠",t.jsx("span",{children:"ホーム"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["📊",t.jsx("span",{children:"分析"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["💬",t.jsx("span",{children:"メッセージ"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["⚙️",t.jsx("span",{children:"設定"})]})]})]}),l==="drawer"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsx("div",{style:{position:"relative"},children:t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>j(!b),children:"☰"})})]}),t.jsxs("div",{className:"sp-content",children:["ドロワーメニューレイアウト",t.jsx("br",{}),t.jsx("br",{}),"右端のハンバーガークリックで",t.jsx("br",{}),"右からドロワーが表示",t.jsx("br",{}),t.jsx("br",{}),"基本オプションと同じ",t.jsx("br",{}),"レイアウト構成",t.jsx("br",{}),t.jsx("br",{}),"背景クリックで閉じる"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"}),t.jsx("div",{className:`sp-drawer-backdrop ${b?"open":""}`,onClick:()=>j(!1)}),t.jsxs("div",{className:`sp-drawer-sidebar ${b?"open":""}`,children:[t.jsx("button",{style:{position:"absolute",top:"var(--spacing-2)",right:"var(--spacing-2)",background:"none",border:"none",color:"white",fontSize:"18px",cursor:"pointer",padding:"var(--spacing-1)",zIndex:60},onClick:()=>j(!1),children:"×"}),t.jsxs("div",{style:{marginTop:"32px"},children:[t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(z,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(z,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(z,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(z,{name:"mail",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(z,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]})]})})]}),t.jsx("div",{className:"code-snippet",children:`<div className="sp-layout">
  <header className="sp-header">
    <!-- ヘッダー：ハンバーガーメニュー、タイトル -->
  </header>
  <main className="sp-content">
    <!-- メインコンテンツ：縦スクロール -->
  </main>
  <nav className="sp-bottom-nav">
    <!-- ボトムナビゲーション（オプション） -->
  </nav>
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"PCレイアウトは横幅1024px以上のデスクトップ環境を想定しています"}),t.jsx("li",{children:"SPレイアウトは横幅375px〜768pxのモバイル環境を想定しています"}),t.jsx("li",{children:"タブレット端末（768px〜1024px）はSPレイアウト準拠で実装してください"}),t.jsx("li",{children:"サイドバー付きレイアウトは管理画面やダッシュボードに適しています"}),t.jsx("li",{children:"ボトムナビゲーションはアプリライクなUXを実現できます"}),t.jsx("li",{children:"ドロワーメニューはコンテンツ領域を最大化したい場合に有効です"}),t.jsx("li",{children:"レスポンシブ対応時は@mediaクエリでPC/SPレイアウトを切り替えてください"}),t.jsx("li",{children:"タッチデバイスではボタンサイズを44px以上に設定することを推奨します"}),t.jsx("li",{children:"青基調テーマはビジネス系システムに、グレー基調テーマは汎用系システムに適しています"}),t.jsx("li",{children:"テーマ色はブランドガイドラインに合わせてカスタマイズしてください"})]})})]}),t.jsx(e,{show:m,overlay:!0,size:"md",text:"読み込み中..."}),t.jsx(e,{show:N,overlay:!0,size:"lg",color:"#28a745",text:"データを処理中...",backgroundColor:"rgba(40, 167, 69, 0.1)"}),t.jsx(e,{show:k,overlay:!0,size:"sm",color:"#ffc107",text:"少々お待ちください...",backgroundColor:"rgba(255, 193, 7, 0.1)"}),t.jsx(e,{show:I,overlay:!0,size:"xl",color:"#dc3545",text:"重要な処理を実行中です...",backgroundColor:"rgba(0, 0, 0, 0.7)"})]})},dd=u.createContext(void 0),be=({children:e})=>{const[r,n]=u.useState(!1),a=()=>{n(s=>!s)};return t.jsx(dd.Provider,{value:{open:r,setOpen:n,toggleOpen:a},children:t.jsx("div",{className:"relative",children:e})})},x2=({children:e})=>{const r=u.useContext(dd);if(!r)throw new Error("Trigger must be used within a Dropdown");const{open:n,setOpen:a,toggleOpen:s}=r;return t.jsxs(t.Fragment,{children:[t.jsx("div",{onClick:s,children:e}),n&&t.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>a(!1)})]})},y2=({align:e="right",width:r="48",contentClasses:n="py-1 bg-white",children:a})=>{const s=u.useContext(dd);if(!s)throw new Error("Content must be used within a Dropdown");const{open:l,setOpen:i}=s;let o="origin-top";e==="left"?o="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(o="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return r==="48"&&(c="w-48"),t.jsx(t.Fragment,{children:t.jsx(od,{show:l,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${o} ${c}`,onClick:()=>i(!1),children:t.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:a})})})})},j2=({className:e="",children:r,href:n="#",onClick:a,...s})=>{const l=i=>{i.preventDefault(),a==null||a(i)};return t.jsx("a",{href:n,onClick:l,...s,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+e,children:r})};be.Trigger=x2;be.Content=y2;be.Link=j2;const we=({viewMode:e="pc",onViewModeChange:r,className:n="",hide:a=!1,showCategories:s,showViewMode:l})=>{if(a)return null;let i,o;try{i=fr(),o=xn()}catch{console.warn("TemplateNavigation: React Router hooks not available. Navigation disabled.")}const d=((o==null?void 0:o.pathname)||"").startsWith("/templates"),p=d?"/templates":"/pages",h=s!==void 0?s:!d,f=l!==void 0?l:!d,b=o?[`${p}/login`,`${p}/signup`,`${p}/signup-confirm`,`${p}/signup-complete`,`${p}/forgot-password`,`${p}/reset-password`,`${p}/password-reset-email`].some(m=>o.pathname.startsWith(m)):!1,j=o?[`${p}/dashboard`,`${p}/data/`,`${p}/statistics`,`${p}/notifications`,`${p}/settings`].some(m=>o.pathname.startsWith(m)):!1,y=o?[`${p}/error-404`,`${p}/error-500`,`${p}/maintenance`,`${p}/qna`,`${p}/terms`,`${p}/privacy`,`${p}/commercial`].some(m=>o.pathname.startsWith(m)):!1,w=()=>o?o.pathname.startsWith(`${p}/login`)?"ログイン":o.pathname.startsWith(`${p}/signup-complete`)?"登録完了":o.pathname.startsWith(`${p}/signup-confirm`)?"登録確認":o.pathname.startsWith(`${p}/signup`)?"新規登録":o.pathname.startsWith(`${p}/forgot-password`)?"再設定URL送信":o.pathname.startsWith(`${p}/reset-password`)?"パスワード再設定":o.pathname.startsWith(`${p}/password-reset-email`)?"リセットメール":"ページを選択":"ページを選択",v=()=>o?o.pathname.startsWith(`${p}/dashboard`)?"ダッシュボード":o.pathname.startsWith(`${p}/data/list`)?"データ一覧":o.pathname.startsWith(`${p}/data/add`)?"データ作成":o.pathname.startsWith(`${p}/data/edit`)?"データ編集":o.pathname.startsWith(`${p}/data/detail`)?"データ詳細":o.pathname.startsWith(`${p}/statistics`)?"統計":o.pathname.startsWith(`${p}/notifications`)?"通知一覧":o.pathname.startsWith(`${p}/settings`)?"設定":"ページを選択":"ページを選択",g=()=>o?o.pathname.startsWith(`${p}/qna`)?"Q&A":o.pathname.startsWith(`${p}/terms`)?"利用規約":o.pathname.startsWith(`${p}/privacy`)?"プライバシーポリシー":o.pathname.startsWith(`${p}/commercial`)?"特定商取引法":o.pathname.startsWith(`${p}/error-404`)?"404エラー":o.pathname.startsWith(`${p}/error-500`)?"500エラー":o.pathname.startsWith(`${p}/maintenance`)?"メンテナンス":"ページを選択":"ページを選択";return t.jsxs("div",{className:`template-navigation ${n}`,children:[h&&t.jsxs("div",{className:"navigation-group",children:[t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"ログイン前"}),t.jsxs(be,{children:[t.jsx(be.Trigger,{children:t.jsxs("button",{className:`page-select-button ${b?"active":""}`,children:[w(),t.jsx(z,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(be.Content,{align:"left",children:[t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/login`),children:"ログイン"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/signup`),children:"新規登録"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/signup-confirm`),children:"登録確認"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/signup-complete`),children:"登録完了"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/forgot-password`),children:"再設定URL送信"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/reset-password`),children:"パスワード再設定"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/password-reset-email`),children:"リセットメール"})]})]})]}),t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"ログイン後"}),t.jsxs(be,{children:[t.jsx(be.Trigger,{children:t.jsxs("button",{className:`page-select-button ${j?"active":""}`,children:[v(),t.jsx(z,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(be.Content,{align:"left",children:[t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/dashboard`),children:"ダッシュボード"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/data/list`),children:"データ一覧"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/data/add`),children:"データ作成"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/data/edit`),children:"データ編集"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/data/detail`),children:"データ詳細"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/statistics`),children:"統計"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/notifications`),children:"通知一覧"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/settings`),children:"設定"})]})]})]}),t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"その他"}),t.jsxs(be,{children:[t.jsx(be.Trigger,{children:t.jsxs("button",{className:`page-select-button ${y?"active":""}`,children:[g(),t.jsx(z,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(be.Content,{align:"left",children:[t.jsx("div",{style:{padding:"var(--spacing-2) var(--spacing-3)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)"},children:"情報ページ"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/qna`),children:"Q&A"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/terms`),children:"利用規約"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/privacy`),children:"プライバシーポリシー"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/commercial`),children:"特定商取引法"}),t.jsx("div",{style:{padding:"var(--spacing-2) var(--spacing-3)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",borderTop:"1px solid var(--color-neutral-200)",marginTop:"var(--spacing-1)"},children:"エラー/メンテナンス"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/error-404`),children:"404エラー"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/error-500`),children:"500エラー"}),t.jsx(be.Link,{onClick:()=>i==null?void 0:i(`${p}/maintenance`),children:"メンテナンス"})]})]})]})]}),f&&r&&t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"表示モード"}),t.jsxs("div",{className:"view-mode-toggle",children:[t.jsxs("button",{className:`view-mode-button ${e==="pc"?"active":""}`,onClick:()=>r("pc"),children:[t.jsx(z,{name:"desktop",style:{width:"16px",height:"16px"}}),"PC"]}),t.jsxs("button",{className:`view-mode-button ${e==="sp"?"active":""}`,onClick:()=>r("sp"),children:[t.jsx(z,{name:"device-mobile",style:{width:"16px",height:"16px"}}),"SP"]})]})]})]})},Qu="app-view-mode",He=()=>{const[e,r]=u.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem(Qu);return a==="sp"||a==="pc"?a:"pc"}return"pc"});return[e,a=>{r(a),typeof window<"u"&&localStorage.setItem(Qu,a)}]},Ko=e=>{var T,$,W,Q,L;const[r,n]=He(),[a,s]=u.useState(""),[l,i]=u.useState(""),[o,c]=u.useState(!1),[d,p]=u.useState({}),[h,f]=u.useState(),b=e.email!==void 0?e.email:a,j=e.password!==void 0?e.password:l,y=e.rememberMe!==void 0?e.rememberMe:o,w=e.showRememberMe!==void 0?e.showRememberMe:!1,v={email:((T=e.errors)==null?void 0:T.email)||(($=e.loginErrors)==null?void 0:$.email)||d.email,password:((W=e.errors)==null?void 0:W.password)||((Q=e.loginErrors)==null?void 0:Q.password)||d.password},g=((L=e.flash)==null?void 0:L.error)||e.loginFormError||h,m=A=>{if(!A)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A))return"正しいメールアドレスを入力してください"},x=A=>{if(!A)return"パスワードを入力してください";if(A.length<8)return"パスワードは8文字以上で入力してください"},N=A=>{e.onEmailChange?e.onEmailChange(A):(s(A),p(M=>({...M,email:void 0})))},C=A=>{e.onPasswordChange?e.onPasswordChange(A):(i(A),p(M=>({...M,password:void 0})))},k=A=>{e.onRememberMeChange?e.onRememberMeChange(A):c(A)},R=A=>{if(e.onEmailBlur)e.onEmailBlur(A);else{const M=m(A);p(D=>({...D,email:M}))}},I=A=>{if(e.onPasswordBlur)e.onPasswordBlur(A);else{const M=x(A);p(D=>({...D,password:M}))}},_=A=>{if(A.preventDefault(),e.onSubmit)e.onSubmit(A);else{const M=m(b),D=x(j);if(M||D){p({email:M,password:D});return}console.log("Login attempt:",{email:b,password:j,rememberMe:y}),f(void 0)}},P=()=>{if(e.onNavigateToForgotPassword)e.onNavigateToForgotPassword();else if(typeof window<"u"){const D=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${D}/forgot-password`}};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e.hideNavigation,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"login-title",children:"ログイン"}),t.jsx("p",{className:"login-subtitle",children:"アカウントにログインしてください"}),t.jsxs("form",{className:"login-form",onSubmit:_,noValidate:!0,children:[g&&t.jsxs("div",{className:"login-error",children:[t.jsx(z,{name:"exclamation",className:"w-5 h-5"}),t.jsx("span",{children:g})]}),t.jsx(_e,{label:"メールアドレス",type:"email",name:"email",value:b,onChange:A=>N(A.target.value),onBlur:A=>R(A.target.value),placeholder:"example@email.com",required:!0,error:v.email}),t.jsx(_e,{label:"パスワード",type:"password",name:"password",value:j,onChange:A=>C(A.target.value),onBlur:A=>I(A.target.value),placeholder:"••••••••",required:!0,error:v.password}),w&&t.jsxs("label",{className:"remember-me",children:[t.jsx(jr,{checked:y,onChange:A=>k(A.target.checked)}),t.jsx("span",{children:"ログイン状態を保存する"})]}),t.jsx("div",{style:{textAlign:"center"},children:t.jsx("a",{href:"#",onClick:A=>{A.preventDefault(),P()},style:{color:"var(--color-primary-600)",textDecoration:"underline",fontSize:"var(--font-size-sm)"},children:"パスワードを忘れた場合"})}),t.jsx("button",{type:"submit",className:"login-button",children:"ログイン"})]})]})})]})},Xo=e=>{var v,g;const[r,n]=He(),[a,s]=u.useState(""),[l,i]=u.useState(),[o,c]=u.useState(!1),d=e.resetEmail!==void 0?e.resetEmail:a,p=((v=e.errors)==null?void 0:v.email)||e.resetEmailError||l,h=(g=e.flash)!=null&&g.status?!0:e.resetEmailSuccess!==void 0?e.resetEmailSuccess:o,f=m=>{if(!m)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m))return"正しいメールアドレスを入力してください"},b=m=>{e.onResetEmailChange?e.onResetEmailChange(m):(s(m),i(void 0),c(!1))},j=m=>{if(e.onResetEmailBlur)e.onResetEmailBlur(m);else{const x=f(m);i(x)}},y=m=>{if(m.preventDefault(),e.onSubmit)e.onSubmit(m);else{const x=f(d);if(x){i(x);return}console.log("Password reset requested for:",d),c(!0),i(void 0)}},w=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const N=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${N}/login`}};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e.hideNavigation,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"login-title",children:"パスワード再設定"}),t.jsx("p",{className:"login-subtitle",children:"メールアドレスに再設定用URLを送信します"}),t.jsxs("form",{className:"login-form",onSubmit:y,noValidate:!0,children:[h&&t.jsxs("div",{className:"success-message",children:[t.jsx(z,{name:"check-circle",className:"w-5 h-5"}),t.jsxs("span",{children:["再設定用URLを送信しました。",t.jsx("br",{}),"メールをご確認ください。"]})]}),t.jsx(_e,{label:"メールアドレス",type:"email",name:"resetEmail",value:d,onChange:m=>b(m.target.value),onBlur:m=>j(m.target.value),placeholder:"example@email.com",required:!0,error:p}),t.jsx("button",{type:"submit",className:"login-button",children:"再設定用URLを送信"}),t.jsx("div",{style:{textAlign:"center",marginTop:"var(--spacing-4)"},children:t.jsx("a",{href:"#",onClick:m=>{m.preventDefault(),w()},style:{color:"var(--color-primary-600)",textDecoration:"none",fontSize:"var(--font-size-sm)"},children:"ログイン画面に戻る"})})]})]})})]})},Go=e=>{var C,k,R,I,_;const[r,n]=He(),[a,s]=u.useState(""),[l,i]=u.useState(""),[o,c]=u.useState(!1),[d,p]=u.useState({}),h=e.newPassword!==void 0?e.newPassword:a,f=e.confirmPassword!==void 0?e.confirmPassword:l,b={newPassword:((C=e.errors)==null?void 0:C.password)||((k=e.passwordResetErrors)==null?void 0:k.newPassword)||d.newPassword,confirmPassword:((R=e.errors)==null?void 0:R.password_confirmation)||((I=e.passwordResetErrors)==null?void 0:I.confirmPassword)||d.confirmPassword},j=(_=e.flash)!=null&&_.status?!0:e.passwordResetSuccess!==void 0?e.passwordResetSuccess:o,y=P=>{if(!P)return"パスワードを入力してください";if(P.length<8)return"パスワードは8文字以上で入力してください"},w=(P,T)=>{if(!P)return"パスワード確認を入力してください";if(P!==T)return"パスワードが一致しません"},v=P=>{e.onNewPasswordChange?e.onNewPasswordChange(P):(s(P),p(T=>({...T,newPassword:void 0})))},g=P=>{e.onConfirmPasswordChange?e.onConfirmPasswordChange(P):(i(P),p(T=>({...T,confirmPassword:void 0})))},m=P=>{if(e.onNewPasswordBlur)e.onNewPasswordBlur(P);else{const T=y(P);p($=>({...$,newPassword:T}))}},x=P=>{if(e.onConfirmPasswordBlur)e.onConfirmPasswordBlur(P);else{const T=w(P,h);p($=>({...$,confirmPassword:T}))}},N=P=>{if(P.preventDefault(),e.onSubmit)e.onSubmit(P);else{const T=y(h),$=w(f,h);if(T||$){p({newPassword:T,confirmPassword:$});return}console.log("Password reset successful"),c(!0),p({}),setTimeout(()=>{typeof window<"u"&&(window.location.href="/login")},2e3)}};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e.hideNavigation,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"login-title",children:"新しいパスワード設定"}),t.jsx("p",{className:"login-subtitle",children:"新しいパスワードを入力してください"}),t.jsxs("form",{className:"login-form",onSubmit:N,noValidate:!0,children:[j&&t.jsxs("div",{className:"success-message",children:[t.jsx(z,{name:"check-circle",className:"w-5 h-5"}),t.jsxs("span",{children:["パスワードが更新されました。",t.jsx("br",{}),"新しいパスワードでログインしてください。"]})]}),t.jsx(_e,{label:"新しいパスワード",type:"password",name:"newPassword",value:h,onChange:P=>v(P.target.value),onBlur:P=>m(P.target.value),placeholder:"8文字以上",required:!0,error:b.newPassword}),t.jsx(_e,{label:"パスワード確認",type:"password",name:"confirmPassword",value:f,onChange:P=>g(P.target.value),onBlur:P=>x(P.target.value),placeholder:"もう一度入力してください",required:!0,error:b.confirmPassword}),t.jsx("button",{type:"submit",className:"login-button",children:"パスワードを更新"})]})]})})]})},Jo=e=>{var B,te,fe,ge,Qe,Ye,Ke,S,U,ce,oe,$t;const[r,n]=He(),[a,s]=u.useState(""),[l,i]=u.useState(""),[o,c]=u.useState(""),[d,p]=u.useState(""),[h,f]=u.useState(""),[b,j]=u.useState(!1),[y,w]=u.useState({}),v=e.signupName!==void 0?e.signupName:a,g=e.signupEmail!==void 0?e.signupEmail:l,m=e.signupPhone!==void 0?e.signupPhone:o,x=e.signupPassword!==void 0?e.signupPassword:d,N=e.signupPasswordConfirm!==void 0?e.signupPasswordConfirm:h,C=e.agreeToTerms!==void 0?e.agreeToTerms:b,k={name:((B=e.errors)==null?void 0:B.name)||((te=e.signupErrors)==null?void 0:te.name)||y.name,email:((fe=e.errors)==null?void 0:fe.email)||((ge=e.signupErrors)==null?void 0:ge.email)||y.email,phone:((Qe=e.errors)==null?void 0:Qe.phone)||((Ye=e.signupErrors)==null?void 0:Ye.phone)||y.phone,password:((Ke=e.errors)==null?void 0:Ke.password)||((S=e.signupErrors)==null?void 0:S.password)||y.password,passwordConfirm:((U=e.errors)==null?void 0:U.password_confirmation)||((ce=e.signupErrors)==null?void 0:ce.passwordConfirm)||y.passwordConfirm,agreeToTerms:((oe=e.errors)==null?void 0:oe.agreeToTerms)||(($t=e.signupErrors)==null?void 0:$t.agreeToTerms)||y.agreeToTerms},R=E=>{if(!E)return"お名前を入力してください";if(E.length<2)return"お名前は2文字以上で入力してください"},I=E=>{if(!E)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E))return"正しいメールアドレスを入力してください"},_=E=>{if(E&&!/^0\d{9,10}$/.test(E))return"正しい電話番号を入力してください"},P=E=>{if(!E)return"パスワードを入力してください";if(E.length<8)return"パスワードは8文字以上で入力してください"},T=(E,J)=>{if(!E)return"パスワード確認を入力してください";if(E!==J)return"パスワードが一致しません"},$=E=>{e.onNameChange?e.onNameChange(E):(s(E),w(J=>({...J,name:void 0})))},W=E=>{e.onEmailChange?e.onEmailChange(E):(i(E),w(J=>({...J,email:void 0})))},Q=E=>{const J=E.replace(/[^0-9]/g,"");e.onPhoneChange?e.onPhoneChange(J):(c(J),w(he=>({...he,phone:void 0})))},L=E=>{e.onPasswordChange?e.onPasswordChange(E):(p(E),w(J=>({...J,password:void 0})))},A=E=>{e.onPasswordConfirmChange?e.onPasswordConfirmChange(E):(f(E),w(J=>({...J,passwordConfirm:void 0})))},M=E=>{e.onAgreeToTermsChange?e.onAgreeToTermsChange(E):(j(E),w(J=>({...J,agreeToTerms:void 0})))},D=E=>{if(e.onNameBlur)e.onNameBlur(E);else{const J=R(E);w(he=>({...he,name:J}))}},V=E=>{if(e.onEmailBlur)e.onEmailBlur(E);else{const J=I(E);w(he=>({...he,email:J}))}},q=E=>{if(e.onPhoneBlur)e.onPhoneBlur(E);else{const J=_(E);w(he=>({...he,phone:J}))}},O=E=>{if(e.onPasswordBlur)e.onPasswordBlur(E);else{const J=P(E);w(he=>({...he,password:J}))}},X=E=>{if(e.onPasswordConfirmBlur)e.onPasswordConfirmBlur(E);else{const J=T(E,x);w(he=>({...he,passwordConfirm:J}))}},G=E=>{if(E.preventDefault(),e.onSubmit)e.onSubmit(E);else{const J=R(v),he=I(g),Re=_(m),jt=P(x),Ze=T(N,x),de=C?void 0:"利用規約に同意してください";if(J||he||Re||jt||Ze||de){w({name:J,email:he,phone:Re,password:jt,passwordConfirm:Ze,agreeToTerms:de});return}console.log("Signup attempt:",{signupName:v,signupEmail:g,signupPhone:m})}},ee=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const he=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${he}/login`}};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e.hideNavigation,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"login-title",children:"新規アカウント作成"}),t.jsx("p",{className:"login-subtitle",children:"アカウント情報を入力してください"}),t.jsxs("form",{className:"login-form",onSubmit:G,noValidate:!0,children:[t.jsx(_e,{label:"お名前",type:"text",name:"signupName",value:v,onChange:E=>$(E.target.value),onBlur:E=>D(E.target.value),placeholder:"山田 太郎",required:!0,error:k.name}),t.jsx(_e,{label:"メールアドレス",type:"email",name:"signupEmail",value:g,onChange:E=>W(E.target.value),onBlur:E=>V(E.target.value),placeholder:"example@email.com",required:!0,error:k.email}),t.jsx(_e,{label:"電話番号",type:"tel",name:"signupPhone",value:m,onChange:E=>Q(E.target.value),onBlur:E=>q(E.target.value),placeholder:"09012345678",error:k.phone}),t.jsx(_e,{label:"パスワード",type:"password",name:"signupPassword",value:x,onChange:E=>L(E.target.value),onBlur:E=>O(E.target.value),placeholder:"8文字以上",required:!0,error:k.password}),t.jsx(_e,{label:"パスワード確認",type:"password",name:"signupPasswordConfirm",value:N,onChange:E=>A(E.target.value),onBlur:E=>X(E.target.value),placeholder:"もう一度入力してください",required:!0,error:k.passwordConfirm}),t.jsxs("div",{children:[t.jsxs("label",{className:"remember-me",children:[t.jsx(jr,{checked:C,onChange:E=>M(E.target.checked)}),t.jsx("span",{children:"利用規約に同意する"})]}),k.agreeToTerms&&t.jsxs("div",{style:{color:"var(--color-error-600)",fontSize:"var(--font-size-xs)",marginTop:"var(--spacing-1)",display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),k.agreeToTerms]})]}),t.jsx("button",{type:"submit",className:"login-button",children:"登録内容を確認"}),t.jsx("div",{style:{textAlign:"center",marginTop:"var(--spacing-4)"},children:t.jsx("a",{href:"#",onClick:E=>{E.preventDefault(),ee()},style:{color:"var(--color-primary-600)",textDecoration:"none",fontSize:"var(--font-size-sm)"},children:"すでにアカウントをお持ちの方"})})]})]})})]})},Zo=e=>{const[r,n]=He(),a=e.signupName||"サンプル 太郎",s=e.signupEmail||"sample@example.com",l=e.signupPhone||"",i=()=>{e.onConfirm?e.onConfirm():(console.log("Signup confirmed:",{signupName:a,signupEmail:s,signupPhone:l}),typeof window<"u"&&(window.location.href="/signup-complete"))},o=()=>{e.onBack?e.onBack():typeof window<"u"&&(window.location.href="/signup")};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e.hideNavigation,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"login-title",children:"登録内容の確認"}),t.jsx("p",{className:"login-subtitle",children:"以下の内容で登録します"}),t.jsxs("div",{className:"login-form",children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",padding:"var(--spacing-4)",background:"var(--color-neutral-50)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"お名前"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:a})]}),t.jsx("div",{style:{height:"1px",background:"var(--color-neutral-200)"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"メールアドレス"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:s})]}),l&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"1px",background:"var(--color-neutral-200)"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"電話番号"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:l})]})]})]}),t.jsx("button",{type:"button",className:"login-button",onClick:i,children:"登録する"}),t.jsx("button",{type:"button",className:"login-button",onClick:o,style:{background:"var(--color-neutral-200)",color:"var(--color-neutral-700)",marginTop:"var(--spacing-2)"},children:"内容を修正する"})]})]})})]})},ec=e=>{const[r,n]=He(),a=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const i=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${i}/login`}};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e.hideNavigation,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--spacing-6)"},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--spacing-4) auto"},children:t.jsx(z,{name:"check-circle",style:{width:"80px",height:"80px",color:"#10b981"}})}),t.jsx("h2",{className:"login-title",children:"アカウント登録完了"}),t.jsx("p",{className:"login-subtitle",children:"ご登録いただきありがとうございます。"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("button",{type:"button",className:"login-button",onClick:a,style:{margin:0},children:"ログイン画面へ"})})]})})]})},tc=({onNavigate:e,hideNavigation:r})=>{const[n,a]=He(),s=()=>{e?e("dashboard"):typeof window<"u"&&(window.location.href="/dashboard")};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:r,viewMode:n,onViewModeChange:a}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"お探しのページは見つかりませんでした"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"お探しのページは存在しないか、移動または削除された可能性があります。"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx("button",{type:"button",className:"login-button",onClick:s,style:{margin:0},children:"ホームに戻る"}),t.jsx("button",{type:"button",className:"login-button",onClick:()=>window.history.back(),style:{margin:0,background:"var(--color-neutral-200)",color:"var(--color-neutral-700)"},children:"前のページに戻る"})]})]})})]})},rc=({onNavigate:e,hideNavigation:r})=>{const[n,a]=He(),s=()=>{e?e("dashboard"):typeof window<"u"&&(window.location.href="/dashboard")};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:r,viewMode:n,onViewModeChange:a}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"予期せぬ不具合が発生しました"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"しばらく時間をおいてから、もう一度お試しください。"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:t.jsx("button",{type:"button",className:"login-button",onClick:s,style:{margin:0},children:"ホームに戻る"})})]})})]})},nc=({hideNavigation:e})=>{const[r,n]=He();return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e,viewMode:r,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx(z,{name:"cog",style:{width:"32px",height:"32px",color:"rgb(21, 52, 109)"}}),t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"メンテナンス中"})]}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left",marginBottom:"var(--spacing-3)"},children:"現在、システムメンテナンスを実施しております。"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"ご不便をおかけして申し訳ございませんが、しばらくお待ちください。"})]}),t.jsxs("div",{style:{background:"var(--color-neutral-50)",padding:"var(--spacing-4)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",marginBottom:"var(--spacing-2)"},children:t.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"メンテナンス期間"})}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)"},children:"2024年10月14日 2:00 〜 6:00（予定）"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:t.jsx("button",{type:"button",className:"login-button",onClick:()=>window.location.reload(),style:{margin:0},children:"ページを更新"})})]})})]})},Ee=({children:e,viewMode:r,currentPage:n,onNavigate:a,onLogout:s,sidebarMenuItems:l,unreadCount:i=0,showNotificationDropdown:o=!1,setShowNotificationDropdown:c=()=>{},showUserMenu:d=!1,setShowUserMenu:p=()=>{},isHamburgerOpen:h=!1,setIsHamburgerOpen:f=()=>{},sidebarCollapsed:b=!1,setSidebarCollapsed:j=()=>{},notificationRef:y,notifications:w=[],onMarkNotificationAsRead:v=()=>{},onMarkAllNotificationsAsRead:g=()=>{},onDismissNotification:m=()=>{}})=>{const N=l!==void 0?l:[{id:"dashboard",label:"ホーム",icon:"home",page:"dashboard"}],C=k=>{switch(k){case"warning":return"warning";case"success":return"check";case"danger":return"close";case"info":default:return"info"}};return t.jsxs("div",{className:"dashboard-container",children:[t.jsxs("div",{className:"dashboard-header",children:[t.jsx("div",{className:"dashboard-logo",onClick:()=>a("dashboard"),style:{cursor:"pointer"},children:"AppName"}),t.jsx("div",{className:"dashboard-user",children:r==="sp"?t.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:"8px"},children:[t.jsxs("button",{style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",color:"white",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>a("notifications"),children:[t.jsx(z,{name:"bell",style:{width:"20px",height:"20px"}}),i>0&&t.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",minWidth:"20px",height:"20px",background:"#ef4444",color:"#ffffff",fontSize:"12px",fontWeight:"bold",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid rgb(21, 52, 109)"},children:i})]}),t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"24px",color:"white",padding:"4px 8px"},onClick:()=>f(!h),children:"☰"}),h&&t.jsxs("div",{className:`sp-hamburger-menu ${h?"open":""}`,children:[N.map(k=>t.jsxs("div",{className:"sp-hamburger-item",onClick:()=>{f(!1),a(k.page)},children:[t.jsx(z,{name:k.icon,className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),k.label]},k.id)),t.jsxs("div",{className:"sp-hamburger-item",onClick:()=>{f(!1),s?s():a("login")},children:[t.jsx(z,{name:"arrow-right",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ログアウト"]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{ref:y,style:{position:"relative"},children:[t.jsxs("button",{style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",color:"white",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>c(!o),children:[t.jsx(z,{name:"bell",style:{width:"20px",height:"20px"}}),i>0&&t.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",minWidth:"20px",height:"20px",background:"#ef4444",color:"#ffffff",fontSize:"12px",fontWeight:"bold",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid rgb(21, 52, 109)"},children:i})]}),o&&w.length>0&&t.jsxs("div",{className:"notification-dropdown",children:[t.jsxs("div",{className:"notification-dropdown-header",children:[t.jsx("h3",{className:"notification-dropdown-title",children:"通知"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[w.some(k=>!k.read)&&t.jsxs("button",{className:"notification-action-btn",onClick:g,style:{fontSize:"var(--font-size-xs)"},children:[t.jsx(z,{name:"check",className:"w-4 h-4"}),"全て既読にする"]}),t.jsx("button",{className:"notification-close-btn",onClick:()=>c(!1),children:t.jsx(z,{name:"close",className:"w-4 h-4"})})]})]}),t.jsx("div",{className:"notification-dropdown-content",children:w.map(k=>t.jsxs("div",{className:`notification-item ${k.read?"":"unread"}`,onClick:()=>!k.read&&v(k.id),style:{cursor:k.read?"default":"pointer"},children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx(z,{name:C(k.type),className:"w-5 h-5 notification-icon"}),!k.read&&t.jsx("span",{style:{position:"absolute",top:"-2px",right:"-2px",width:"8px",height:"8px",background:"#ef4444",borderRadius:"50%",border:"1px solid white"}})]}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:k.title}),t.jsx("span",{className:"notification-time",children:k.time})]}),t.jsx("p",{className:"notification-item-message",children:k.message}),t.jsxs("div",{className:"notification-item-actions",children:[!k.read&&t.jsxs("button",{className:"notification-action-btn",onClick:R=>{R.stopPropagation(),v(k.id)},children:[t.jsx(z,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",onClick:R=>{R.stopPropagation(),m(k.id)},children:[t.jsx(z,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]},k.id))}),t.jsx("div",{className:"notification-dropdown-footer",children:t.jsx("a",{className:"notification-footer-link",onClick:()=>{c(!1),a("notifications")},style:{cursor:"pointer"},children:"すべての通知を表示"})})]})]}),t.jsxs("button",{className:"user-button",onClick:()=>p(!d),children:[t.jsx(z,{name:"user",className:"w-5 h-5"}),t.jsx("span",{children:"田中 太郎"}),t.jsx(z,{name:"chevron-down",className:"w-4 h-4"})]}),d&&t.jsx("div",{className:"user-dropdown",children:t.jsxs("button",{className:"user-dropdown-item",onClick:()=>{p(!1),s?s():a("login")},children:[t.jsx(z,{name:"arrow-right",className:"w-4 h-4"}),"ログアウト"]})})]})})]}),t.jsxs("div",{className:"dashboard-body",children:[r==="pc"&&t.jsxs("aside",{className:`dashboard-sidebar ${b?"collapsed":""}`,children:[t.jsx("button",{className:"sidebar-toggle",onClick:()=>j(!b),"aria-label":b?"サイドバーを展開":"サイドバーを最小化",children:t.jsx(z,{name:b?"chevron-right":"chevron-left",className:"w-5 h-5"})}),t.jsx("nav",{className:"sidebar-nav",children:t.jsx("ul",{className:"sidebar-nav",children:N.map(k=>t.jsx("li",{className:"sidebar-nav-item",children:t.jsxs("div",{className:"sidebar-nav-link",onClick:()=>a(k.page),style:{cursor:"pointer"},children:[t.jsx(z,{name:k.icon,className:"w-5 h-5"}),t.jsx("span",{children:k.label})]})},k.id))})})]}),t.jsx("div",{className:"dashboard-content",children:e})]}),t.jsx("footer",{className:"page-footer",children:t.jsxs("div",{className:"footer-content",style:{display:"flex",flexDirection:r==="sp"?"column":"row",justifyContent:r==="sp"?"center":"space-between",alignItems:"center",gap:r==="sp"?"var(--spacing-2)":0,flexWrap:"nowrap"},children:[t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",fontSize:"var(--font-size-sm)"},children:[t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),a("qna")},style:{color:"white",textDecoration:"none"},children:"Q&A"}),t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),a("privacy")},style:{color:"white",textDecoration:"none"},children:"プライバシーポリシー"}),t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),a("terms")},style:{color:"white",textDecoration:"none"},children:"利用規約"}),t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),a("commercial")},style:{color:"white",textDecoration:"none"},children:"特商法表記"})]}),t.jsx("div",{className:"footer-copyright",children:"© 2025 AppName. All rights reserved."})]})})]})},ac=({hideNavigation:e,onNavigate:r,onLogout:n})=>{const a=u.useRef(null),[s,l]=He(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState(!1),j=x=>{if(r)r(x);else{const k=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",I={dashboard:`${k}/dashboard`,"data-list":`${k}/data/list`,statistics:`${k}/statistics`,settings:`${k}/settings`,notifications:`${k}/notifications`,login:`${k}/login`,qna:`${k}/qna`,privacy:`${k}/privacy`,terms:`${k}/terms`,commercial:`${k}/commercial`}[x]||`${k}/${x}`;typeof window<"u"&&(window.location.href=I)}},y=()=>{if(n){n();return}j("login")},[w,v]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),g=x=>{v(N=>N.map(C=>C.id===x?{...C,read:!0}:C))},m=()=>{v(x=>x.map(N=>({...N,read:!0})))};return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e,viewMode:s,onViewModeChange:l}),t.jsx(Ee,{viewMode:s,currentPage:"commercial",onNavigate:j,unreadCount:w.filter(x=>!x.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:p,setIsHamburgerOpen:h,sidebarCollapsed:f,setSidebarCollapsed:b,notificationRef:a,notifications:w,onMarkNotificationAsRead:g,onMarkAllNotificationsAsRead:m,onLogout:y,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:"var(--spacing-12)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:s==="sp"?"flex-start":"center",marginBottom:s==="sp"?"var(--spacing-2)":0,flexDirection:s==="sp"?"column":"row"},children:[t.jsx("h2",{className:"page-title",style:{alignSelf:s==="sp"?"flex-start":void 0},children:"特定商取引法に基づく表記"}),s!=="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),s==="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid var(--color-neutral-200)"},children:t.jsxs("tbody",{children:[t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",width:"30%",verticalAlign:"top"},children:"販売事業者名"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"株式会社サンプル"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"代表者名"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"代表取締役 山田太郎"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"所在地"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["〒150-0000",t.jsx("br",{}),"東京都渋谷区〇〇 1-2-3 サンプルビル 5F"]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"電話番号"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["03-1234-5678",t.jsx("br",{}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"※お問い合わせはメールにてお願いいたします"})]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"メールアドレス"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"support@example.com"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"運営統括責任者"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"山田花子"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsxs("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:["追加手数料等の",t.jsx("br",{}),"追加料金"]}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"サービス利用料以外に、振込手数料等がかかる場合があります。詳細は各プランページをご確認ください。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsxs("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:["交換および返品",t.jsx("br",{}),"（返金ポリシー）"]}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"サービスの性質上、お客様都合による返金はお受けできません。ただし、サービス提供に不備があった場合は、個別に対応させていただきます。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"引渡時期"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"お申し込み後、即時ご利用いただけます。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"受付可能な決済手段"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:t.jsxs("ul",{style:{margin:0,paddingLeft:0,listStylePosition:"inside"},children:[t.jsx("li",{children:"クレジットカード（VISA、Mastercard、JCB、American Express）"}),t.jsx("li",{children:"銀行振込"}),t.jsx("li",{children:"コンビニ決済"})]})})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"決済期間"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["クレジットカード決済の場合は即時決済となります。",t.jsx("br",{}),"銀行振込、コンビニ決済の場合は、お申し込み後7日以内にお支払いください。"]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"販売価格"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"各プランページに記載の金額（税込）となります。"})]}),t.jsxs("tr",{children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"サービス提供期間"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"月額プランの場合は、毎月自動更新されます。解約のお申し出がない限り、継続してサービスを提供いたします。"})]})]})}),t.jsxs("section",{style:{marginTop:"var(--spacing-6)",marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"お問い合わせ"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本表記に関するお問い合わせは、以下の連絡先までお願いいたします。"}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",padding:"var(--spacing-4)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"Eメールアドレス: support@example.com"}),t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"受付時間: 平日 9:00〜18:00（土日祝日を除く）"})]})]})]})})]})})})]})},sc=({hideNavigation:e,onNavigate:r,onLogout:n})=>{const a=u.useRef(null),[s,l]=He(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState(!1),j=x=>{if(r)r(x);else{const k=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",I={dashboard:`${k}/dashboard`,"data-list":`${k}/data/list`,statistics:`${k}/statistics`,settings:`${k}/settings`,notifications:`${k}/notifications`,login:`${k}/login`,qna:`${k}/qna`,privacy:`${k}/privacy`,terms:`${k}/terms`,commercial:`${k}/commercial`}[x]||`${k}/${x}`;typeof window<"u"&&(window.location.href=I)}},y=()=>{if(n){n();return}j("login")},[w,v]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),g=x=>{v(N=>N.map(C=>C.id===x?{...C,read:!0}:C))},m=()=>{v(x=>x.map(N=>({...N,read:!0})))};return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e,viewMode:s,onViewModeChange:l}),t.jsx(Ee,{viewMode:s,currentPage:"terms",onNavigate:j,unreadCount:w.filter(x=>!x.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:p,setIsHamburgerOpen:h,sidebarCollapsed:f,setSidebarCollapsed:b,notificationRef:a,notifications:w,onMarkNotificationAsRead:g,onMarkAllNotificationsAsRead:m,onLogout:y,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{display:"flex",justifyContent:"space-between",alignItems:s==="sp"?"flex-start":"center",flexDirection:s==="sp"?"column":"row",gap:s==="sp"?"var(--spacing-2)":0,marginBottom:"var(--spacing-12)"},children:[t.jsx("h2",{className:"page-title",children:"利用規約"}),t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第1条（適用）"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本規約は、当社が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って、本サービスをご利用いただきます。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第2条（利用登録）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。"}),t.jsxs("li",{style:{marginBottom:"var(--spacing-2)"},children:["当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。",t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)",marginTop:"var(--spacing-2)"},children:[t.jsx("li",{children:"利用登録の申請に際して虚偽の事項を届け出た場合"}),t.jsx("li",{children:"本規約に違反したことがある者からの申請である場合"}),t.jsx("li",{children:"その他、当社が利用登録を相当でないと判断した場合"})]})]})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第3条（ユーザーIDおよびパスワードの管理）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第4条（禁止事項）"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"法令または公序良俗に違反する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"犯罪行為に関連する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスによって得られた情報を商業的に利用する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社のサービスの運営を妨害するおそれのある行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"不正アクセスをし、またはこれを試みる行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"他のユーザーに関する個人情報等を収集または蓄積する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"不正な目的を持って本サービスを利用する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"他のユーザーに成りすます行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"その他、当社が不適切と判断する行為"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第5条（本サービスの提供の停止等）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsxs("li",{style:{marginBottom:"var(--spacing-2)"},children:["当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。",t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)",marginTop:"var(--spacing-2)"},children:[t.jsx("li",{children:"本サービスにかかるコンピュータシステムの保守点検または更新を行う場合"}),t.jsx("li",{children:"地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合"}),t.jsx("li",{children:"コンピュータまたは通信回線等が事故により停止した場合"}),t.jsx("li",{children:"その他、当社が本サービスの提供が困難と判断した場合"})]})]}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第6条（免責事項）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第7条（サービス内容の変更等）"}),t.jsx("p",{children:"当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第8条（利用規約の変更）"}),t.jsx("p",{children:"当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。"})]})]})})]})})})]})},lc=({hideNavigation:e,onNavigate:r,onLogout:n})=>{const[a,s]=He(),l=u.useRef(null),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState(!1),j=x=>{if(r)r(x);else{const k=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",I={dashboard:`${k}/dashboard`,"data-list":`${k}/data/list`,statistics:`${k}/statistics`,settings:`${k}/settings`,notifications:`${k}/notifications`,login:`${k}/login`,qna:`${k}/qna`,privacy:`${k}/privacy`,terms:`${k}/terms`,commercial:`${k}/commercial`}[x]||`${k}/${x}`;typeof window<"u"&&(window.location.href=I)}},y=()=>{if(n){n();return}j("login")},[w,v]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),g=x=>{v(N=>N.map(C=>C.id===x?{...C,read:!0}:C))},m=()=>{v(x=>x.map(N=>({...N,read:!0})))};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e,viewMode:a,onViewModeChange:s}),t.jsx(Ee,{viewMode:a,currentPage:"privacy",onNavigate:j,unreadCount:w.filter(x=>!x.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:p,setIsHamburgerOpen:h,sidebarCollapsed:f,setSidebarCollapsed:b,notificationRef:l,notifications:w,onMarkNotificationAsRead:g,onMarkAllNotificationsAsRead:m,onLogout:y,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:"var(--spacing-12)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:a==="sp"?"var(--spacing-2)":0,flexDirection:a==="sp"?"column":"row",alignItems:a==="sp"?"flex-start":"center"},children:[t.jsx("h2",{className:"page-title",children:"プライバシーポリシー"}),a!=="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),a==="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("section",{style:{marginBottom:"var(--spacing-6)"},children:t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、お客様の個人情報について、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。本ポリシーは、当社がどのような個人情報を取得し、どのように利用・共有するか、お客様がどのようにご自身の個人情報を管理できるかをご説明するものです。"})}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"1. 事業者情報"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"事業者名: 株式会社サンプル"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"所在地: 東京都渋谷区〇〇 1-2-3"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"代表者: 代表取締役 山田太郎"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"連絡先: privacy@example.com"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"2. 取得する個人情報"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、以下の個人情報を取得します。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"氏名"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"メールアドレス"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"電話番号"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"住所"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"生年月日"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"クレジットカード情報"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"IPアドレス"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"Cookie情報"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ご利用履歴"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"3. 個人情報の利用目的"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、取得した個人情報を以下の目的で利用します。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの提供・運営のため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーからのお問い合わせに回答するため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等の案内のメールを送付するため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"メンテナンス、重要なお知らせなど必要に応じたご連絡のため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"サービスの改善や新サービスの開発等に役立てるため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"その他、上記利用目的に付随する目的のため"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"4. 個人情報の第三者提供"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示することはありません。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーの同意がある場合"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"法令に基づく場合"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"5. 個人情報の開示・訂正・削除"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、当社の保有する自己の個人情報について、開示、訂正、削除を請求することができます。その場合は、以下の窓口までご連絡ください。確認後、合理的な期間内に対応いたします。"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"個人情報お問い合わせ窓口: privacy@example.com"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"6. Cookie（クッキー）その他の技術の利用"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社のサービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当社による本サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化することができます。ただし、Cookieを無効化すると、本サービスの一部の機能をご利用いただけなくなる場合があります。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"7. プライバシーポリシーの変更"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"8. お問い合わせ"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。"}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",padding:"var(--spacing-4)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"Eメールアドレス: privacy@example.com"}),t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"受付時間: 平日 9:00〜18:00（土日祝日を除く）"})]})]})]})})]})})})]})},b2=({items:e,allowMultiple:r=!1})=>{const[n,a]=u.useState({}),s=l=>{a(i=>r?{...i,[l]:!i[l]}:{[l]:!i[l]})};return t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.map((l,i)=>t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>s(i),style:{width:"100%",padding:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"var(--color-neutral-white)",border:"none",borderBottom:i<e.length-1?"1px solid var(--color-neutral-200)":"none",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)",textAlign:"left",transition:"background-color 0.2s"},children:[t.jsx("span",{children:l.title}),t.jsx(z,{name:n[i]?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"var(--color-neutral-600)",transition:"transform 0.2s"}})]}),n[i]&&t.jsx("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",borderBottom:i<e.length-1?"1px solid var(--color-neutral-200)":"none",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",lineHeight:"var(--line-height-relaxed)"},children:l.content})]},i))})},ic=({hideNavigation:e,onNavigate:r,onLogout:n})=>{const a=u.useRef(null),[s,l]=He(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState(!1),j=N=>{if(r)r(N);else{const R=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",_={dashboard:`${R}/dashboard`,"data-list":`${R}/data/list`,statistics:`${R}/statistics`,settings:`${R}/settings`,notifications:`${R}/notifications`,login:`${R}/login`,qna:`${R}/qna`,privacy:`${R}/privacy`,terms:`${R}/terms`,commercial:`${R}/commercial`}[N]||`${R}/${N}`;typeof window<"u"&&(window.location.href=_)}},y=()=>{if(n){n();return}j("login")},[w,v]=u.useState([{id:1,title:"新しいメッセージ",message:"よくある質問が更新されました",time:"2時間前",read:!1},{id:2,title:"システムお知らせ",message:"サポート体制の強化について",time:"1日前",read:!0}]),g=N=>{v(C=>C.map(k=>k.id===N?{...k,read:!0}:k))},m=()=>{v(N=>N.map(C=>({...C,read:!0})))},x=[{title:"Q. アカウントの登録方法を教えてください",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"アカウント登録は以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"トップページの「新規登録」ボタンをクリック"}),t.jsx("li",{children:"メールアドレスとパスワードを入力"}),t.jsx("li",{children:"利用規約に同意し、「登録」ボタンをクリック"}),t.jsx("li",{children:"確認メールが送信されるので、記載されたリンクをクリックして認証完了"})]})]})},{title:"Q. パスワードを忘れた場合はどうすればいいですか?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"パスワードを忘れた場合は、以下の手順でリセットできます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"ログインページの「パスワードをお忘れですか?」リンクをクリック"}),t.jsx("li",{children:"登録したメールアドレスを入力"}),t.jsx("li",{children:"パスワードリセット用のメールが送信されます"}),t.jsx("li",{children:"メール内のリンクから新しいパスワードを設定"})]})]})},{title:"Q. データのエクスポートは可能ですか?",content:t.jsx("p",{children:"はい、可能です。データ一覧画面の「エクスポート」ボタンからCSV形式でデータをダウンロードできます。また、APIを利用してJSON形式でのデータ取得も可能です。"})},{title:"Q. アカウントを削除したい場合はどうすればいいですか?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"アカウント削除は以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"アカウント設定画面を開く"}),t.jsx("li",{children:"ページ最下部の「アカウントを削除」ボタンをクリック"}),t.jsx("li",{children:"確認ダイアログで「削除」を選択"})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)",color:"var(--color-danger-600)",fontWeight:"var(--font-weight-medium)"},children:"※ 削除したアカウントと関連データは復元できませんのでご注意ください。"})]})},{title:"Q. プランのアップグレード方法は?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"プランのアップグレードは以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"アカウント設定画面の「プラン管理」タブを開く"}),t.jsx("li",{children:"希望するプランを選択"}),t.jsx("li",{children:"支払い情報を入力し、「アップグレード」ボタンをクリック"})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"プランは即座に適用され、日割り計算で請求されます。"})]})},{title:"Q. サポートへの問い合わせ方法は?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"以下の方法でサポートチームへお問い合わせいただけます:"}),t.jsxs("ul",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"メール:"})," support@example.com"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"チャット:"})," 画面右下のチャットアイコンからリアルタイムサポート（平日9:00-18:00）"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"お問い合わせフォーム:"})," ヘルプセンターから送信可能"]})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"通常、1営業日以内に返信いたします。"})]})}];return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e,viewMode:s,onViewModeChange:l}),t.jsx(Ee,{viewMode:s,currentPage:"qna",onNavigate:j,unreadCount:w.filter(N=>!N.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:p,setIsHamburgerOpen:h,sidebarCollapsed:f,setSidebarCollapsed:b,notificationRef:a,notifications:w,onMarkNotificationAsRead:g,onMarkAllNotificationsAsRead:m,onLogout:y,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:s==="sp"?"var(--spacing-6)":"var(--spacing-8)"},children:[t.jsx("h2",{className:"page-title",style:{marginBottom:"var(--spacing-2)"},children:"よくある質問"}),t.jsx("p",{className:"card-description",style:{fontSize:s==="sp"?"var(--font-size-sm)":void 0},children:"サービスに関するよくある質問をご覧いただけます"})]}),t.jsx("div",{className:"card-body",children:t.jsx(b2,{items:x,allowMultiple:!1})})]})})})]})},w2=({field:e,data:r})=>{var a,s;const n=r[e.key];if(e.render)return e.render(n,r);if(n==null||n==="")return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});switch(e.type){case"currency":const l=typeof n=="string"?parseFloat(n):n;if(isNaN(l))return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});const i=e.decimals??0,o=l.toLocaleString("ja-JP",{minimumFractionDigits:i,maximumFractionDigits:i}),c=e.currencySymbol||"";return t.jsxs("span",{children:[c,o]});case"badge":const d=(a=e.badgeConfig)==null?void 0:a[n];return d?t.jsx("span",{className:`status-badge status-badge--${d.variant||"default"}`,children:d.label||n}):t.jsx("span",{children:String(n)});case"list":if(!Array.isArray(n)||n.length===0)return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});const p=((s=e.listConfig)==null?void 0:s.renderItem)||(f=>t.jsx("span",{children:String(f)}));return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-1)"},children:n.map((f,b)=>t.jsx(re.Fragment,{children:p(f)},b))});case"date":const h=typeof n=="string"?new Date(n):n;return!(h instanceof Date)||isNaN(h.getTime())?t.jsx("span",{children:String(n)}):t.jsx("span",{children:h.toLocaleDateString("ja-JP")});case"email":return t.jsx("a",{href:`mailto:${n}`,style:{color:"var(--color-primary-600)"},children:String(n)});case"url":return t.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-600)"},children:String(n)});case"text":default:return t.jsx("span",{children:String(n)})}},ud=({title:e,subtitle:r,data:n,fields:a=[],sections:s=[],tabs:l=[],layout:i,headerConfig:o,actions:c=[],secondaryActions:d=[],backButton:p,loading:h=!1,error:f,emptyState:b,breadcrumbs:j,headerActions:y=[],stickyHeader:w=!1,className:v="",onLogout:g})=>{var ee,B,te,fe,ge,Qe,Ye,Ke;const[m,x]=u.useState("pc"),[N,C]=u.useState(()=>{const S=new Set;return s.forEach(U=>{(!U.collapsible||U.defaultCollapsed===!1)&&S.add(U.id)}),S}),k=S=>{const oe=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",E={dashboard:`${oe}/dashboard`,"data-list":`${oe}/data/list`,statistics:`${oe}/statistics`,settings:`${oe}/settings`,notifications:`${oe}/notifications`,login:`${oe}/login`,qna:`${oe}/qna`,privacy:`${oe}/privacy`,terms:`${oe}/terms`,commercial:`${oe}/commercial`}[S]||`${oe}/${S}`;window.location.href=E},R=()=>{if(g){g();return}k("login")},[I,_]=u.useState(()=>{const S=l.filter(U=>!U.visible||U.visible(n));return S.length>0?S[0].id:""}),[P,T]=u.useState({show:!1}),$=S=>{C(U=>{const ce=new Set(U);return ce.has(S)?ce.delete(S):ce.add(S),ce})},W=S=>{S.confirm?T({show:!0,action:()=>S.onClick(n),config:S.confirm}):S.onClick(n)},Q=()=>{p!=null&&p.onClick?p.onClick():p!=null&&p.url?window.location.href=p.url:window.history.back()},L=(S,U)=>{S.path&&(U.preventDefault(),window.location.href=S.path)},A=u.useMemo(()=>s.filter(S=>!S.visible||S.visible(n)),[s,n]),M=u.useMemo(()=>a.filter(S=>!S.hidden&&(!S.visible||S.visible(n))),[a,n]),D=u.useMemo(()=>c.filter(S=>typeof S.visible=="function"?S.visible(n):S.visible!==!1),[c,n]),V=u.useMemo(()=>d.filter(S=>typeof S.visible=="function"?S.visible(n):S.visible!==!1),[d,n]),q=S=>{const U=typeof S.className=="function"?S.className(n[S.key],n):S.className||"",ce=S.width?`detail-field--${S.width}`:"";return t.jsxs("div",{className:`detail-field ${ce} ${U}`,children:[t.jsxs("dt",{className:`detail-field__label ${S.labelClassName||""}`,children:[S.label,S.tooltip&&t.jsx("span",{className:"detail-field__tooltip",title:S.tooltip,children:t.jsx(z,{name:"info",style:{width:"14px",height:"14px",marginLeft:"4px"}})})]}),t.jsx("dd",{className:`detail-field__value ${S.valueClassName||""}`,children:t.jsx(w2,{field:S,data:n})})]},S.key)},O=S=>{const U=N.has(S.id),ce=S.fields.filter(E=>!E.hidden&&(!E.visible||E.visible(n)));if(ce.length===0)return null;const oe=S.columns||(i==null?void 0:i.columns)||2,$t=S.layout==="grid"||(i==null?void 0:i.type)==="grid"?`detail-fields--grid detail-fields--cols-${oe}`:"";return t.jsxs("div",{className:`detail-section ${S.className||""}`,children:[t.jsxs("div",{className:"detail-section__header",onClick:S.collapsible?()=>$(S.id):void 0,style:{cursor:S.collapsible?"pointer":"default"},children:[t.jsxs("div",{className:"detail-section__title-wrapper",children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"20px",height:"20px",marginRight:"var(--spacing-2)"}}),t.jsx("h3",{className:"detail-section__title",children:S.title})]}),S.collapsible&&t.jsx(z,{name:U?"chevron-up":"chevron-down",style:{width:"20px",height:"20px"}})]}),S.description&&t.jsx("p",{className:"detail-section__description",children:S.description}),U&&t.jsx("dl",{className:`detail-fields ${$t}`,children:ce.map(q)})]},S.id)};if(h)return t.jsxs("div",{className:m==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:m,onViewModeChange:x}),t.jsx(Ee,{viewMode:m,currentPage:"data-detail",onNavigate:k,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:R,children:t.jsxs("div",{className:`dynamic-data-detail-page ${v}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:"読み込み中..."})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[t.jsx(z,{name:"refresh",style:{width:"48px",height:"48px",animation:"spin 1s linear infinite",color:"var(--color-primary-500)"}}),t.jsx("p",{style:{marginTop:"var(--spacing-4)",color:"var(--color-neutral-600)"},children:"データを読み込んでいます..."})]})]})})]});if(f)return t.jsxs("div",{className:m==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:m,onViewModeChange:x}),t.jsx(Ee,{viewMode:m,currentPage:"data-detail",onNavigate:k,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:R,children:t.jsxs("div",{className:`dynamic-data-detail-page ${v}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:"エラー"})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[t.jsx(z,{name:"error",style:{width:"64px",height:"64px",color:"var(--color-error-500)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:"エラーが発生しました"}),t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:f.message}),f.retry&&t.jsxs("button",{className:"btn btn--primary",onClick:f.retry,children:[t.jsx(z,{name:"refresh",style:{width:"16px",height:"16px"}}),"再試行"]})]})]})})]});if(!n||Object.keys(n).length===0)return t.jsxs("div",{className:m==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:m,onViewModeChange:x}),t.jsx(Ee,{viewMode:m,currentPage:"data-detail",onNavigate:k,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:R,children:t.jsxs("div",{className:`dynamic-data-detail-page ${v}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:(b==null?void 0:b.title)||"データが見つかりません"})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[(b==null?void 0:b.icon)&&t.jsx(z,{name:b.icon,style:{width:"64px",height:"64px",color:"var(--color-neutral-400)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:(b==null?void 0:b.title)||"データが見つかりません"}),(b==null?void 0:b.description)&&t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:b.description}),(b==null?void 0:b.action)&&t.jsx("button",{className:"btn btn--primary",onClick:b.action.onClick,children:b.action.label})]})]})})]});const X=o!=null&&o.renderTitle?o.renderTitle(n):o!=null&&o.titleField?n[o.titleField]:e,G=typeof(o==null?void 0:o.subtitle)=="function"?o.subtitle(n):(o==null?void 0:o.subtitle)||r;return t.jsxs("div",{className:m==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:m,onViewModeChange:x}),t.jsx(Ee,{viewMode:m,currentPage:"data-detail",onNavigate:k,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},children:t.jsxs("div",{className:`dynamic-data-detail-page ${v}`,children:[j&&j.length>0&&t.jsx("nav",{className:"breadcrumbs",children:j.map((S,U)=>t.jsxs(re.Fragment,{children:[S.path?t.jsx("a",{href:S.path,className:"breadcrumb-link",onClick:ce=>L(S,ce),children:S.label}):t.jsx("span",{className:"breadcrumb-current",children:S.label}),U<j.length-1&&t.jsx(z,{name:"chevron-right",style:{width:"12px",height:"12px",margin:"0 var(--spacing-2)"}})]},U))}),t.jsxs("div",{className:`page-header ${w?"page-header--sticky":""}`,children:[t.jsxs("div",{className:"page-header__content",children:[p&&t.jsxs("button",{className:"btn btn--text detail-back-button",onClick:Q,children:[t.jsx(z,{name:p.icon||"arrow-left",style:{width:"16px",height:"16px"}}),p.label||"戻る"]}),t.jsxs("div",{className:"page-header__title-section",children:[(o==null?void 0:o.showAvatar)&&t.jsx("div",{className:"page-header__avatar",children:o.renderAvatar?o.renderAvatar(n):o.avatarField&&n[o.avatarField]&&t.jsx("img",{src:n[o.avatarField],alt:""})}),t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:X}),G&&t.jsx("p",{className:"page-subtitle",children:G}),(o==null?void 0:o.showStatus)&&o.statusField&&t.jsx("div",{style:{marginTop:"var(--spacing-2)"},children:(()=>{var oe;const S=n[o.statusField],U=(oe=o.statusBadgeConfig)==null?void 0:oe[S],ce=(U==null?void 0:U.variant)||"default";return t.jsx("span",{className:`status-badge status-badge--${ce}`,children:(U==null?void 0:U.label)||S})})()})]})]})]}),t.jsxs("div",{className:"page-header__actions",children:[y.map((S,U)=>t.jsxs("button",{className:`btn btn--${S.variant||"secondary"}`,onClick:S.onClick,children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},U)),V.map(S=>{const U=typeof S.disabled=="function"?S.disabled(n):S.disabled;return t.jsxs("button",{className:`btn btn--${S.variant||"secondary"}`,onClick:()=>W(S),disabled:U||S.loading,title:S.tooltip,children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},S.id)}),D.map(S=>{const U=typeof S.disabled=="function"?S.disabled(n):S.disabled;return t.jsxs("button",{className:`btn btn--${S.variant||"primary"}`,onClick:()=>W(S),disabled:U||S.loading,title:S.tooltip,children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},S.id)})]})]}),t.jsx("div",{className:"detail-content",children:l.length>0?t.jsxs("div",{className:"detail-tabs",children:[t.jsx("div",{className:"detail-tabs__header",children:l.filter(S=>!S.visible||S.visible(n)).map(S=>t.jsxs("button",{className:`detail-tabs__tab ${I===S.id?"detail-tabs__tab--active":""}`,onClick:()=>_(S.id),disabled:S.disabled,children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label,S.badge&&t.jsx("span",{className:"detail-tabs__badge",children:typeof S.badge=="function"?S.badge(n):S.badge})]},S.id))}),t.jsx("div",{className:"detail-tabs__content",children:(ee=l.find(S=>S.id===I))!=null&&ee.renderContent?l.find(S=>S.id===I).renderContent(n):(te=(B=l.find(S=>S.id===I))==null?void 0:B.sections)==null?void 0:te.map(O)})]}):t.jsx("div",{className:"dashboard-card",children:A.length>0?A.map(O):M.length>0?t.jsx("dl",{className:`detail-fields ${(i==null?void 0:i.type)==="grid"?`detail-fields--grid detail-fields--cols-${i.columns||2}`:""}`,children:M.map(q)}):t.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-8)",color:"var(--color-neutral-500)"},children:"表示するフィールドがありません"})})}),t.jsx(eh,{show:P.show,title:((fe=P.config)==null?void 0:fe.title)||"確認",message:((ge=P.config)==null?void 0:ge.message)||"この操作を実行してもよろしいですか？",confirmText:((Qe=P.config)==null?void 0:Qe.confirmText)||"実行",cancelText:((Ye=P.config)==null?void 0:Ye.cancelText)||"キャンセル",danger:((Ke=P.config)==null?void 0:Ke.variant)==="danger",onConfirm:()=>{var S;(S=P.action)==null||S.call(P),T({show:!1})},onClose:()=>T({show:!1})})]})})]})},N2=({field:e,value:r,error:n,onChange:a,onBlur:s,disabled:l=!1,readOnly:i=!1,formData:o={}})=>{if(e.visible&&!e.visible(o))return null;const c=l||e.disabled||e.conditionalDisabled&&e.conditionalDisabled(o),d=i||e.readOnly;if(e.render)return t.jsx("div",{className:e.wrapperClassName,children:e.render({value:r,onChange:a,onBlur:s,error:n})});switch(e.type){case"text":case"email":case"password":case"tel":case"url":case"number":case"date":case"datetime-local":case"time":case"month":case"week":case"search":return t.jsx(_e,{type:e.type,label:e.label,name:e.name,id:e.name,value:r||"",onChange:h=>a(h.target.value),onBlur:s,placeholder:e.placeholder,required:e.required,disabled:c,readOnly:d,error:n,helper:e.helperText,min:e.min,max:e.max,step:e.step,maxLength:e.maxLength,pattern:e.pattern,autoComplete:e.autoComplete,autoFocus:e.autoFocus,inputMode:e.inputMode,className:e.className,fullWidth:e.width==="full",...e.attributes});case"textarea":return t.jsx(Xg,{label:e.label,name:e.name,id:e.name,value:r||"",onChange:h=>a(h.target.value),onBlur:s,placeholder:e.placeholder,required:e.required,disabled:c,readOnly:d,error:n,helper:e.helperText,rows:e.rows||4,maxLength:e.maxLength,className:e.className,fullWidth:e.width==="full",...e.attributes});case"select":return t.jsx(Gg,{label:e.label,name:e.name,id:e.name,value:e.multiple?Array.isArray(r)?r:[]:r||"",onChange:h=>{if(e.multiple){const f=Array.from(h.target.selectedOptions,b=>b.value);a(f)}else a(h.target.value)},onBlur:s,options:e.options||[],placeholder:e.placeholder,required:e.required,disabled:c,error:n,helper:e.helperText,className:e.className,fullWidth:e.width==="full",multiple:e.multiple,...e.attributes});case"multiselect":return t.jsx(bm,{label:e.label,name:e.name,value:Array.isArray(r)?r:[],options:e.options||[],onChange:a,onBlur:s,placeholder:e.placeholder,required:e.required,disabled:c,error:n,helper:e.helperText,className:e.className,fullWidth:e.width==="full"});case"checkbox":if(!e.options||e.options.length===0)return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c?"not-allowed":"pointer"},children:[t.jsx(jr,{name:e.name,checked:!!r,onChange:h=>a(h.target.checked),onBlur:s,disabled:c,required:e.required,...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[e.label,e.required&&t.jsx("span",{style:{color:"#dc2626",marginLeft:"4px"},children:"*"})]})]}),e.helperText&&!n&&t.jsx("div",{className:"form-helper",style:{marginLeft:"28px"},children:e.helperText}),n&&t.jsxs("div",{className:"form-error",role:"alert",style:{marginLeft:"28px"},children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),n]})]});const p=Array.isArray(r)?r:[];return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:e.options.map(h=>t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c||h.disabled?"not-allowed":"pointer"},children:[t.jsx(jr,{name:`${e.name}[]`,value:h.value,checked:p.includes(h.value),onChange:f=>{const b=f.target.checked?[...p,h.value]:p.filter(j=>j!==h.value);a(b)},onBlur:s,disabled:c||h.disabled,...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c||h.disabled?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[h.label,h.description&&t.jsx("span",{style:{display:"block",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)",marginTop:"2px"},children:h.description})]})]},h.value))}),e.helperText&&!n&&t.jsx("div",{className:"form-helper",children:e.helperText}),n&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),n]})]});case"radio":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:(e.options||[]).map(h=>t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c||h.disabled?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e.name,value:h.value,checked:r===h.value,onChange:f=>a(f.target.value),onBlur:s,disabled:c||h.disabled,required:e.required,style:{width:"16px",height:"16px",cursor:c||h.disabled?"not-allowed":"pointer"},...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c||h.disabled?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[h.label,h.description&&t.jsx("span",{style:{display:"block",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)",marginTop:"2px"},children:h.description})]})]},h.value))}),e.helperText&&!n&&t.jsx("div",{className:"form-helper",children:e.helperText}),n&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),n]})]});case"file":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("input",{type:"file",id:e.name,name:e.name,onChange:h=>{const f=h.target.files;e.multiple?a(f):a(f&&f.length>0?f[0]:null),setTimeout(()=>s(),0)},onBlur:s,accept:e.accept,multiple:e.multiple,disabled:c,required:e.required,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${n?"#dc2626":"rgb(209, 213, 219)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",fontFamily:"inherit",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!n&&t.jsx("div",{className:"form-helper",children:e.helperText}),n&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),n]})]});case"color":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("input",{type:"color",id:e.name,name:e.name,value:r||"#000000",onChange:h=>a(h.target.value),onBlur:s,disabled:c,required:e.required,style:{width:"100%",height:"40px",padding:"var(--spacing-1)",border:`1px solid ${n?"#dc2626":"rgb(209, 213, 219)"}`,borderRadius:"var(--radius-md)",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!n&&t.jsx("div",{className:"form-helper",children:e.helperText}),n&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),n]})]});case"range":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsxs("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:[e.label,t.jsxs("span",{style:{marginLeft:"var(--spacing-2)",color:"var(--color-neutral-500)",fontWeight:"normal"},children:["(",r||e.min||0,")"]})]}),t.jsx("input",{type:"range",id:e.name,name:e.name,value:r||e.min||0,onChange:h=>a(Number(h.target.value)),onBlur:s,min:e.min,max:e.max,step:e.step,disabled:c,required:e.required,style:{width:"100%",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!n&&t.jsx("div",{className:"form-helper",children:e.helperText}),n&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),n]})]});case"hidden":return t.jsx("input",{type:"hidden",name:e.name,value:r||"",...e.attributes});default:return console.warn(`Unsupported field type: ${e.type}`),null}};function k2(e){const[r,n]=u.useState({}),[a,s]=u.useState(new Set),l=u.useRef({}),i=u.useCallback((y,w,v)=>{if(w.type==="async")return null;switch(w.type){case"required":if(y==null||y===""||typeof y=="string"&&!y.trim())return w.message;break;case"email":if(y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(y)))return w.message;break;case"min":case"minLength":if(typeof y=="string"&&y.length<w.value||typeof y=="number"&&y<w.value)return w.message;break;case"max":case"maxLength":if(typeof y=="string"&&y.length>w.value||typeof y=="number"&&y>w.value)return w.message;break;case"pattern":const m=new RegExp(w.value);if(y&&!m.test(String(y)))return w.message;break;case"numeric":if(y&&isNaN(Number(y)))return w.message;break;case"integer":if(y&&(!Number.isInteger(Number(y))||isNaN(Number(y))))return w.message;break;case"url":try{y&&new URL(y)}catch{return w.message}break;case"date":const x=new Date(y);if(y&&isNaN(x.getTime()))return w.message;break;case"dateAfter":if(y&&w.value){const N=new Date(y),C=new Date(w.value);if(N<=C)return w.message}break;case"dateBefore":if(y&&w.value){const N=new Date(y),C=new Date(w.value);if(N>=C)return w.message}break;case"fileSize":if(y){const N=y instanceof FileList?Array.from(y):[y];for(const C of N)if(C instanceof File&&C.size>w.value)return w.message}break;case"custom":if(w.validator&&!w.validator(y,v))return w.message;break;default:console.warn(`Unknown validation rule type: ${w.type}`)}return null},[]),o=u.useCallback((y,w,v)=>{const g=e[y];if(!g||g.length===0)return!0;for(const m of g){const x=i(w,m,v);if(x)return n(N=>({...N,[y]:x})),!1}return n(m=>{const x={...m};return delete x[y],x}),!0},[e,i]),c=u.useCallback(async(y,w,v)=>{const g=e[y];if(!g||g.length===0)return!0;const m=g.filter(x=>x.type==="async");return m.length===0?!0:(l.current[y]&&clearTimeout(l.current[y]),new Promise(x=>{const N=m[0].debounce??500;l.current[y]=setTimeout(async()=>{s(C=>new Set(C).add(y));try{for(const C of m){let k=!1;if(C.asyncValidator)try{k=await C.asyncValidator(w,v)}catch(R){console.error(`Async validation error for ${y}:`,R),k=!0}else if(C.endpoint)try{const R=new AbortController,I=setTimeout(()=>R.abort(),1e4),_=await fetch(C.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:w,fieldName:y,formData:v}),signal:R.signal});if(clearTimeout(I),_.ok){const P=await _.json();k=P.valid===!0,!k&&P.message&&(C.message=P.message)}else console.error(`API validation error for ${y}:`,_.statusText),k=!0}catch(R){console.error(`Network error during validation for ${y}:`,R),k=!0}if(!k){n(R=>({...R,[y]:C.message})),s(R=>{const I=new Set(R);return I.delete(y),I}),x(!1);return}}n(C=>{const k={...C};return delete k[y],k}),s(C=>{const k=new Set(C);return k.delete(y),k}),x(!0)}catch(C){console.error(`Unexpected error during async validation for ${y}:`,C),s(k=>{const R=new Set(k);return R.delete(y),R}),x(!0)}},N)}))},[e]),d=u.useCallback(y=>{const w={};let v=!0;return Object.keys(e).forEach(g=>{const m=e[g],x=y[g];for(const N of m){const C=i(x,N,y);if(C){w[g]=C,v=!1;break}}}),n(w),v},[e,i]),p=u.useCallback(y=>{n(w=>{const v={...w};return delete v[y],v})},[]),h=u.useCallback(()=>{n({})},[]),f=u.useCallback((y,w)=>{n(v=>({...v,[y]:w}))},[]),b=Object.keys(r).length>0,j=a.size>0;return{errors:r,validateField:o,validateFieldAsync:c,validateForm:d,clearError:p,clearAllErrors:h,setError:f,hasErrors:b,validatingFields:a,isValidating:j}}function S2({initialData:e={},validation:r,onSubmit:n,onSuccess:a,onError:s}){const[l,i]=u.useState(e),[o,c]=u.useState(!1),[d,p]=u.useState(new Set),{errors:h,validateField:f,validateFieldAsync:b,validateForm:j,clearError:y,setError:w,hasErrors:v}=k2(r),g=JSON.stringify(l)!==JSON.stringify(e),m=u.useCallback((P,T)=>{i($=>({...$,[P]:T}))},[]),x=u.useCallback(P=>{i(T=>({...T,...P}))},[]),N=u.useCallback((P,T)=>{m(P,T),y(P)},[m,y]),C=u.useCallback(async P=>{p(T=>new Set(T).add(P)),f(P,l[P],l),await b(P,l[P],l)},[l,f,b]),k=u.useCallback((P,T)=>f(P,T,l),[l,f]),R=u.useCallback(()=>j(l),[l,j]),I=u.useCallback(async P=>{if(P&&P.preventDefault(),!R()){window.scrollTo({top:0,behavior:"smooth"});return}c(!0);try{await n(l),a==null||a()}catch(T){const $=T instanceof Error?T:new Error("Submit failed");s==null||s($),console.error("Form submission error:",$)}finally{c(!1)}},[l,R,n,a,s]),_=u.useCallback(()=>{i(e),p(new Set)},[e]);return{formData:l,errors:h,isSubmitting:o,isDirty:g,hasErrors:v,setValue:m,setValues:x,handleChange:N,handleBlur:C,handleSubmit:I,resetForm:_,validateField:k,validateForm:R,clearError:y,setError:w}}const oc=({title:e,subtitle:r,fields:n=[],sections:a=[],validation:s,initialData:l={},errors:i={},isSubmitting:o=!1,onSubmit:c,onCancel:d,onDraftSave:p,onChange:h,submitButtonText:f="登録",cancelButtonText:b="キャンセル",showDraftButton:j=!0,draftButtonText:y="下書き保存",customActions:w=[],layout:v,validateOnBlur:g=!0,validateOnChange:m=!1,showInlineErrors:x=!0,showErrorSummary:N=!1,autoSaveInterval:C,warnOnUnsavedChanges:k=!1,formId:R="dynamic-form",className:I="",successMessage:_,readOnly:P=!1,loading:T=!1,breadcrumbs:$=[],headerActions:W=[],onLogout:Q})=>{const[L,A]=u.useState("pc"),[M,D]=u.useState(new Set(a.filter(S=>S.defaultCollapsed).map(S=>S.id))),[V,q]=u.useState(!1),O=S=>{const oe=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",E={dashboard:`${oe}/dashboard`,"data-list":`${oe}/data/list`,statistics:`${oe}/statistics`,settings:`${oe}/settings`,notifications:`${oe}/notifications`,login:`${oe}/login`,qna:`${oe}/qna`,privacy:`${oe}/privacy`,terms:`${oe}/terms`,commercial:`${oe}/commercial`}[S]||`${oe}/${S}`;window.location.href=E},X=()=>{if(Q){Q();return}O("login")},G=S2({initialData:l,validation:s,onSubmit:async S=>{const U=await c(S);U&&U.success&&(q(!0),setTimeout(()=>q(!1),3e3))},onError:S=>{console.error("Form submission error:",S)}});u.useEffect(()=>{i&&Object.keys(i).length>0&&Object.entries(i).forEach(([S,U])=>{G.setError(S,U)})},[i]),u.useEffect(()=>{if(!C||!p)return;const S=setInterval(()=>{G.isDirty&&!G.isSubmitting&&p(G.formData)},C);return()=>clearInterval(S)},[C,G.isDirty,G.isSubmitting,G.formData,p]),u.useEffect(()=>{if(!k)return;const S=U=>{G.isDirty&&(U.preventDefault(),U.returnValue="")};return window.addEventListener("beforeunload",S),()=>window.removeEventListener("beforeunload",S)},[k,G.isDirty]);const ee=(S,U)=>{m?G.handleChange(S,U):(G.setValue(S,U),G.clearError(S)),h&&h(S,U,{...G.formData,[S]:U})},B=S=>{g&&G.handleBlur(S)},te=()=>{p&&p(G.formData)},fe=S=>{D(U=>{const ce=new Set(U);return ce.has(S)?ce.delete(S):ce.add(S),ce})},ge=S=>!S.width||S.width==="full"?"":{half:"form-field--half",third:"form-field--third","two-thirds":"form-field--two-thirds",quarter:"form-field--quarter"}[S.width]||"",Qe=S=>{const U=G.formData[S.name]??S.defaultValue??"",ce=x?G.errors[S.name]:void 0;return t.jsx("div",{className:`form-field ${ge(S)}`,style:{gridColumn:S.width==="full"?"1 / -1":void 0},children:t.jsx(N2,{field:S,value:U,error:ce,onChange:oe=>ee(S.name,oe),onBlur:()=>B(S.name),disabled:o||G.isSubmitting,readOnly:P,formData:G.formData})},S.name)},Ye=S=>{if(S.visible&&!S.visible(G.formData))return null;const U=M.has(S.id);return t.jsxs("div",{className:`dashboard-card ${S.className||""}`,style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:U?0:"var(--spacing-4)",cursor:S.collapsible?"pointer":"default"},onClick:S.collapsible?()=>fe(S.id):void 0,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"20px",height:"20px",color:"var(--color-primary-500)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:S.title})]}),S.collapsible&&t.jsx(z,{name:U?"chevron-down":"chevron-up",style:{width:"20px",height:"20px",color:"var(--color-neutral-500)",transition:"transform 0.2s"}})]}),S.description&&!U&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)",marginTop:"calc(var(--spacing-4) * -0.5)"},children:S.description}),!U&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:v!=null&&v.columns?`repeat(${v.columns}, 1fr)`:"1fr",gap:(v==null?void 0:v.gap)==="sm"?"var(--spacing-3)":(v==null?void 0:v.gap)==="lg"?"var(--spacing-6)":"var(--spacing-4)"},children:S.fields.map(Qe)})]},S.id)};if(T)return t.jsxs("div",{className:L==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:L,onViewModeChange:A}),t.jsx(Ee,{viewMode:L,currentPage:"data-form",onNavigate:O,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:X,children:t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"400px"},children:t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid var(--color-neutral-200)",borderTopColor:"var(--color-primary-500)",borderRadius:0,animation:"spin 0.8s linear infinite"}})})})]});const Ke=o||G.isSubmitting;return t.jsxs("div",{className:L==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:L,onViewModeChange:A}),t.jsx(Ee,{viewMode:L,currentPage:"data-form",onNavigate:O,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:X,children:t.jsxs("div",{className:`dashboard-content form-page ${I}`,children:[$.length>0&&t.jsx("nav",{style:{paddingBottom:"var(--spacing-3)",marginBottom:"var(--spacing-4)"},children:t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",flexWrap:"wrap"},children:$.map((S,U)=>t.jsxs(re.Fragment,{children:[S.path?t.jsxs("a",{href:"#",onClick:ce=>{ce.preventDefault(),d&&d()},style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-neutral-600)",textDecoration:"none",transition:"color 0.15s"},onMouseEnter:ce=>ce.currentTarget.style.color="var(--color-primary-600)",onMouseLeave:ce=>ce.currentTarget.style.color="var(--color-neutral-600)",children:[U===0&&t.jsx(z,{name:"table",style:{width:"16px",height:"16px"}}),t.jsx("span",{children:S.label})]}):t.jsx("span",{style:{color:"var(--color-neutral-900)",fontWeight:"var(--font-weight-medium)"},children:S.label}),U<$.length-1&&t.jsx(z,{name:"chevron-right",style:{width:"12px",height:"12px",color:"var(--color-neutral-400)"}})]},U))})}),t.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),r&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginTop:"var(--spacing-2)"},children:r})]}),W.length>0&&t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:W.map((S,U)=>t.jsxs("button",{type:"button",className:`btn btn--${S.variant||"secondary"}`,onClick:S.onClick,children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},U))})]}),V&&_&&t.jsxs("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:0,marginBottom:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"check-circle",style:{width:"20px",height:"20px",color:"var(--color-success-600)"}}),t.jsx("span",{style:{color:"var(--color-success-700)",fontSize:"var(--font-size-sm)"},children:_})]}),N&&G.hasErrors&&t.jsxs("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-error-50)",border:"1px solid var(--color-error-200)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:[t.jsx(z,{name:"error",style:{width:"20px",height:"20px",color:"var(--color-error-600)"}}),t.jsx("h4",{style:{fontSize:"var(--font-size-md)",fontWeight:"var(--font-weight-bold)",color:"var(--color-error-700)",margin:0},children:"入力内容にエラーがあります"})]}),t.jsx("ul",{style:{margin:0,paddingLeft:"var(--spacing-5)",color:"var(--color-error-700)",fontSize:"var(--font-size-sm)"},children:Object.entries(G.errors).map(([S,U])=>t.jsx("li",{children:U},S))})]}),t.jsxs("form",{id:R,onSubmit:G.handleSubmit,noValidate:!0,children:[a.length>0?a.map(Ye):t.jsx("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:t.jsx("div",{style:{display:"grid",gridTemplateColumns:v!=null&&v.columns?`repeat(${v.columns}, 1fr)`:"1fr",gap:(v==null?void 0:v.gap)==="sm"?"var(--spacing-3)":(v==null?void 0:v.gap)==="lg"?"var(--spacing-6)":"var(--spacing-4)"},children:n.map(Qe)})}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end",flexWrap:"wrap"},children:[d&&t.jsx("button",{type:"button",className:"btn btn--text",disabled:Ke,onClick:d,children:b}),w.map((S,U)=>t.jsxs("button",{type:"button",className:`btn btn--${S.variant||"secondary"}`,disabled:S.disabled||Ke,onClick:()=>S.onClick(G.formData),children:[S.icon&&t.jsx(z,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},U)),j&&p&&!P&&t.jsxs("button",{type:"button",className:"btn btn--secondary",disabled:Ke||!G.isDirty,onClick:te,children:[t.jsx(z,{name:"file",style:{width:"16px",height:"16px"}}),y]}),!P&&t.jsx("button",{type:"submit",className:"btn btn--primary",disabled:Ke,children:Ke?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid white",borderTopColor:"transparent",borderRadius:0,animation:"spin 0.6s linear infinite"}}),"処理中..."]}):t.jsxs(t.Fragment,{children:[t.jsx(z,{name:"check",style:{width:"16px",height:"16px"}}),f]})})]})]})]})})]})},Pl=()=>{const e=xn(),r=fr(),n=u.useRef(null),[a,s]=He(),[l,i]=u.useState(!1),[o,c]=u.useState(!1),[d,p]=u.useState(!1),[h,f]=u.useState(!1),[b,j]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),y=e.pathname.includes("/edit"),w=y?"データ編集":"データ作成",v=y?"データ編集":"データ作成",g=[{id:"personal",title:"個人情報",description:"基本的な個人情報を入力してください",icon:"user",collapsible:!1,fields:[{name:"firstName",label:"名",type:"text",required:!0,width:"half",placeholder:"太郎"},{name:"lastName",label:"姓",type:"text",required:!0,width:"half",placeholder:"山田"},{name:"email",label:"メールアドレス",type:"email",required:!0,width:"full",placeholder:"example@email.com"},{name:"phone",label:"電話番号",type:"tel",width:"half",placeholder:"09012345678",pattern:"^[0-9]+$"},{name:"alternatePhone",label:"予備電話番号",type:"tel",width:"half",placeholder:"0312345678",pattern:"^[0-9]+$"}]},{id:"address",title:"住所情報",icon:"location",collapsible:!0,fields:[{name:"postalCode",label:"郵便番号",type:"text",placeholder:"1234567",width:"third",pattern:"^[0-9]{7}$"},{name:"prefecture",label:"都道府県",type:"select",required:!0,width:"two-thirds",placeholder:"選択してください",options:[{value:"tokyo",label:"東京都"},{value:"osaka",label:"大阪府"},{value:"kyoto",label:"京都府"},{value:"hokkaido",label:"北海道"}]},{name:"city",label:"市区町村",type:"text",required:!0,width:"half",placeholder:"渋谷区",maxLength:50},{name:"address1",label:"町名・番地",type:"text",required:!0,width:"half",placeholder:"道玄坂1-2-3",maxLength:50},{name:"address2",label:"建物名・部屋番号",type:"text",width:"full",placeholder:"〇〇ビル 4階",maxLength:50}]},{id:"employment",title:"職業情報",icon:"briefcase",collapsible:!0,defaultCollapsed:!0,fields:[{name:"employmentStatus",label:"雇用形態",type:"select",width:"half",options:[{value:"fulltime",label:"正社員"},{value:"parttime",label:"パート・アルバイト"},{value:"contract",label:"契約社員"},{value:"freelance",label:"フリーランス"},{value:"student",label:"学生"},{value:"unemployed",label:"無職"}]},{name:"occupation",label:"職種",type:"text",width:"half",placeholder:"ソフトウェアエンジニア",maxLength:30},{name:"companyName",label:"勤務先名",type:"text",width:"full",placeholder:"株式会社〇〇",maxLength:50},{name:"annualIncome",label:"年収",type:"text",width:"half",placeholder:"5000000",helperText:"税込の年収を入力してください",pattern:"^[0-9]+$",inputMode:"numeric"}]},{id:"preferences",title:"設定・希望",icon:"settings",collapsible:!0,fields:[{name:"skills",label:"スキル・得意分野",type:"checkbox",options:[{value:"programming",label:"プログラミング"},{value:"design",label:"デザイン"},{value:"marketing",label:"マーケティング"},{value:"management",label:"マネジメント"},{value:"sales",label:"営業"}]},{name:"workLocation",label:"希望勤務地",type:"multiselect",width:"full",options:[{value:"tokyo",label:"東京"},{value:"osaka",label:"大阪"},{value:"nagoya",label:"名古屋"},{value:"fukuoka",label:"福岡"},{value:"remote",label:"リモート"}],placeholder:"勤務地を選択してください",helperText:"複数選択可能です"},{name:"desiredSalary",label:"希望年収",type:"range",min:3e6,max:15e6,step:5e5,width:"full",helperText:"スライダーを動かして希望年収を選択してください"},{name:"availableStartDate",label:"就業可能日",type:"date",width:"half"},{name:"preferredContactTime",label:"希望連絡時間",type:"time",width:"half"}]},{id:"documents",title:"書類アップロード",icon:"file",collapsible:!0,defaultCollapsed:!0,fields:[{name:"resume",label:"履歴書",type:"file",accept:".pdf,.doc,.docx",width:"full",helperText:"PDF、Word形式（最大5MB）"},{name:"portfolio",label:"ポートフォリオ・作品",type:"file",multiple:!0,accept:"image/*,.pdf",width:"full",helperText:"画像またはPDF形式、複数選択可能（最大5MB）"},{name:"profilePhoto",label:"プロフィール写真",type:"file",accept:"image/*",width:"full",helperText:"JPG、PNG形式（最大2MB）"}]}],m={firstName:[{type:"required",message:"名は必須です"},{type:"minLength",value:1,message:"名を入力してください"}],lastName:[{type:"required",message:"姓は必須です"},{type:"minLength",value:1,message:"姓を入力してください"}],email:[{type:"required",message:"メールアドレスは必須です"},{type:"email",message:"有効なメールアドレスを入力してください"},{type:"async",asyncValidator:async P=>(await new Promise($=>setTimeout($,800)),!["test@example.com","admin@example.com","user@example.com"].includes(P.toLowerCase())),debounce:500,message:"このメールアドレスは既に使用されています"}],phone:[{type:"pattern",value:"^[0-9]+$",message:"電話番号は数字のみで入力してください"}],alternatePhone:[{type:"pattern",value:"^[0-9]+$",message:"電話番号は数字のみで入力してください"}],postalCode:[{type:"pattern",value:"^[0-9]{7}$",message:"郵便番号は7桁の数字で入力してください（例: 1234567）"}],prefecture:[{type:"required",message:"都道府県を選択してください"}],city:[{type:"required",message:"市区町村は必須です"},{type:"maxLength",value:50,message:"市区町村は50文字以内で入力してください"}],address1:[{type:"required",message:"町名・番地は必須です"},{type:"maxLength",value:50,message:"町名・番地は50文字以内で入力してください"}],address2:[{type:"maxLength",value:50,message:"建物名・部屋番号は50文字以内で入力してください"}],occupation:[{type:"maxLength",value:30,message:"職種は30文字以内で入力してください"}],companyName:[{type:"maxLength",value:50,message:"勤務先名は50文字以内で入力してください"}],annualIncome:[{type:"pattern",value:"^[0-9]+$",message:"年収は数字のみで入力してください"}],resume:[{type:"fileSize",value:5242880,message:"ファイルサイズは5MB以下にしてください"}],portfolio:[{type:"fileSize",value:5242880,message:"ファイルサイズは5MB以下にしてください"}],profilePhoto:[{type:"fileSize",value:2097152,message:"ファイルサイズは2MB以下にしてください"}]},x=P=>{j(T=>T.map($=>$.id===P?{...$,read:!0}:$))},N=()=>{j(P=>P.map(T=>({...T,read:!0})))},C=P=>{const $={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[P]||`/pages/${P}`;r($)},_={title:w,sections:g,validation:m,initialData:y?{firstName:"太郎",lastName:"山田",email:"taro.yamada@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"tokyo",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"fulltime",occupation:"ソフトウェアエンジニア",companyName:"株式会社サンプル",annualIncome:"6000000",skills:["programming","design"],workLocation:["tokyo","remote"],desiredSalary:6e6,availableStartDate:"2025-02-01",preferredContactTime:"14:00"}:{},onSubmit:async P=>(console.log("Form submitted:",P),new Promise(T=>{setTimeout(()=>{sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"データを登録しました"})),r("/pages/data/list"),T()},1e3)})),onDraftSave:async P=>{console.log("Draft saved:",P),sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"下書きを保存しました"})),r("/pages/data/list")},onChange:(P,T,$)=>{console.log(`Field ${P} changed to:`,T),console.log("All form data:",$)},breadcrumbs:[{label:"ホーム",path:"/"},{label:"データ一覧",path:"/pages/data/list"},{label:v}],submitButtonText:"登録",showDraftButton:!0,draftButtonText:"下書き保存",validateOnBlur:!0,showInlineErrors:!0,showErrorSummary:!0,warnOnUnsavedChanges:!0,layout:{columns:2,gap:"md",responsive:{tablet:2,mobile:1}}};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:a,onViewModeChange:s}),t.jsx(Ee,{viewMode:a,currentPage:"data-form",onNavigate:C,unreadCount:b.filter(P=>!P.read).length,showNotificationDropdown:l,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:p,sidebarCollapsed:h,setSidebarCollapsed:f,notificationRef:n,notifications:b,onMarkNotificationAsRead:x,onMarkAllNotificationsAsRead:N,children:t.jsx(oc,{..._})})]})},z2=()=>{fr();const[e,r]=u.useState("login"),[n,a]=u.useState(!1),[s,l]=u.useState(!1),i=u.useRef(null),[o,c]=u.useState(""),[d,p]=u.useState(""),[h,f]=u.useState(!1),[b,j]=u.useState(!1),[y,w]=u.useState(""),[v,g]=u.useState(""),[m,x]=u.useState(""),[N,C]=u.useState(null),[k,R]=u.useState(""),[I,_]=u.useState(""),[P,T]=u.useState(""),[$,W]=u.useState(""),[Q,L]=u.useState(""),[A,M]=u.useState(!1),[D,V]=u.useState({email:"",password:""}),[q,O]=u.useState(""),[X,G]=u.useState(!1),[ee,B]=u.useState(""),[te,fe]=u.useState(!1),[ge,Qe]=u.useState({newPassword:"",confirmPassword:""}),[Ye,Ke]=u.useState({name:"",email:"",phone:"",password:"",passwordConfirm:"",agreeToTerms:""}),[S,U]=u.useState("pc"),[ce,oe]=u.useState(!1),[$t,E]=u.useState(!1),[J,he]=u.useState({}),[Re,jt]=u.useState(!1);u.useEffect(()=>{const Y=ue=>{i.current&&!i.current.contains(ue.target)&&l(!1)};if(s)return document.addEventListener("mousedown",Y),()=>{document.removeEventListener("mousedown",Y)}},[s]),u.useEffect(()=>{e==="data-edit"&&ye({title:"Webサイトリニューアル",description:"コーポレートサイトの全面リニューアルプロジェクト。レスポンシブデザイン対応とSEO最適化を実施します。",category:"web",status:"in-progress",priority:"high",tags:"Web, デザイン, SEO",startDate:"2024-09-15",endDate:"2024-12-31"})},[e]);const[Ze,de]=u.useState([{id:1,type:"info",title:"システムアップデート",message:"新しい機能が追加されました",time:"2時間前",read:!1},{id:2,type:"success",title:"データ保存完了",message:"データが正常に保存されました",time:"5時間前",read:!1},{id:3,type:"warning",title:"メンテナンス予定",message:"明日の深夜にメンテナンスを実施します",time:"1日前",read:!0},{id:4,type:"error",title:"エラー発生",message:"一部の機能でエラーが発生しています",time:"2日前",read:!0}]),se=Ze.filter(Y=>!Y.read).length,K=Y=>{de(ue=>ue.map(Pe=>Pe.id===Y?{...Pe,read:!0}:Pe))},me=()=>{de(Y=>Y.map(ue=>({...ue,read:!0})))},[at,ye]=u.useState({title:"",description:"",category:"",status:"draft",priority:"medium",tags:"",startDate:"",endDate:""}),De=(Y,ue)=>{let Pe="";switch(Y){case"name":ue.trim()||(Pe="お名前を入力してください");break;case"email":ue.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ue)||(Pe="正しいメールアドレスを入力してください"):Pe="メールアドレスを入力してください";break;case"phone":ue.trim()&&!/^[0-9]{10,11}$/.test(ue.replace(/-/g,""))&&(Pe="正しい電話番号を入力してください（10〜11桁の数字）");break;case"password":ue?ue.length<8&&(Pe="パスワードは8文字以上で入力してください"):Pe="パスワードを入力してください";break;case"passwordConfirm":ue?$!==ue&&(Pe="パスワードが一致しません"):Pe="パスワード確認を入力してください";break}return Ke(Hr=>({...Hr,[Y]:Pe})),Pe===""},Ve=()=>{const Y={name:"",email:"",phone:"",password:"",passwordConfirm:"",agreeToTerms:""};return k.trim()||(Y.name="お名前を入力してください"),I.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(I)||(Y.email="正しいメールアドレスを入力してください"):Y.email="メールアドレスを入力してください",P.trim()&&!/^[0-9]{10,11}$/.test(P.replace(/-/g,""))&&(Y.phone="正しい電話番号を入力してください（10〜11桁の数字）"),$?$.length<8&&(Y.password="パスワードは8文字以上で入力してください"):Y.password="パスワードを入力してください",Q?$!==Q&&(Y.passwordConfirm="パスワードが一致しません"):Y.passwordConfirm="パスワード確認を入力してください",A||(Y.agreeToTerms="利用規約に同意してください"),Ke(Y),!Object.values(Y).some(ue=>ue!=="")},ft=Y=>{Y.preventDefault(),Ve()&&r("signup-confirm")},ze=Y=>{r(Y)},it=(Y,ue)=>{let Pe="";switch(Y){case"newPassword":ue?ue.length<8&&(Pe="パスワードは8文字以上で入力してください"):Pe="パスワードを入力してください";break;case"confirmPassword":ue?v!==ue&&(Pe="パスワードが一致しません"):Pe="パスワード確認を入力してください";break}return Qe(Hr=>({...Hr,[Y]:Pe})),Pe===""},Ce=()=>{const Y={newPassword:"",confirmPassword:""};return v?v.length<8&&(Y.newPassword="パスワードは8文字以上で入力してください"):Y.newPassword="パスワードを入力してください",m?v!==m&&(Y.confirmPassword="パスワードが一致しません"):Y.confirmPassword="パスワード確認を入力してください",Qe(Y),!Object.values(Y).some(ue=>ue!=="")},gt=Y=>{Y.preventDefault(),Ce()&&fe(!0)},Ct=Y=>{let ue="";return Y.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Y)||(ue="正しいメールアドレスを入力してください"):ue="メールアドレスを入力してください",B(ue),ue===""},zr=Y=>{Y.preventDefault(),Ct(y)&&G(!0)},Fr=(Y,ue)=>{let Pe="";switch(Y){case"email":ue.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ue)||(Pe="正しいメールアドレスを入力してください"):Pe="メールアドレスを入力してください";break;case"password":ue||(Pe="パスワードを入力してください");break}return V(Hr=>({...Hr,[Y]:Pe})),Pe===""},Tt=()=>{const Y={email:"",password:""};return o.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)||(Y.email="正しいメールアドレスを入力してください"):Y.email="メールアドレスを入力してください",d||(Y.password="パスワードを入力してください"),V(Y),!Object.values(Y).some(ue=>ue!=="")},js=Y=>{Y.preventDefault(),Tt()&&O("メールアドレスまたはパスワードが正しくありません")};return t.jsxs("div",{className:`template-page ${S==="sp"?"force-mobile":""}`,children:[t.jsx(we,{viewMode:S,onViewModeChange:U}),e==="login"&&t.jsx(Ko,{email:o,password:d,rememberMe:h,loginFormError:q,loginErrors:D,onEmailChange:c,onPasswordChange:p,onRememberMeChange:f,onEmailBlur:Y=>Fr("email",Y),onPasswordBlur:Y=>Fr("password",Y),onSubmit:js,onNavigateToForgotPassword:()=>r("forgot-password"),hideNavigation:!0}),e==="forgot-password"&&t.jsx(Xo,{resetEmail:y,resetEmailError:ee,resetEmailSuccess:X,onResetEmailChange:w,onResetEmailBlur:Ct,onSubmit:zr,onNavigateToLogin:()=>r("login"),hideNavigation:!0}),e==="reset-password"&&t.jsx(Go,{newPassword:v,confirmPassword:m,passwordResetSuccess:te,passwordResetErrors:ge,onNewPasswordChange:g,onConfirmPasswordChange:x,onNewPasswordBlur:Y=>it("newPassword",Y),onConfirmPasswordBlur:Y=>it("confirmPassword",Y),onSubmit:gt,hideNavigation:!0}),e==="signup"&&t.jsx(Jo,{signupName:k,signupEmail:I,signupPhone:P,signupPassword:$,signupPasswordConfirm:Q,agreeToTerms:A,signupErrors:Ye,onNameChange:R,onEmailChange:_,onPhoneChange:T,onPasswordChange:W,onPasswordConfirmChange:L,onAgreeToTermsChange:M,onNameBlur:Y=>De("name",Y),onEmailBlur:Y=>De("email",Y),onPhoneBlur:Y=>De("phone",Y),onPasswordBlur:Y=>De("password",Y),onPasswordConfirmBlur:Y=>De("passwordConfirm",Y),onSubmit:ft,onNavigateToLogin:()=>r("login"),hideNavigation:!0}),e==="signup-confirm"&&t.jsx(Zo,{signupName:k,signupEmail:I,signupPhone:P,onConfirm:()=>r("signup-complete"),onBack:()=>r("signup"),hideNavigation:!0}),e==="signup-complete"&&t.jsx(ec,{onNavigateToLogin:()=>r("login"),hideNavigation:!0}),e==="error-404"&&t.jsx(tc,{onNavigate:ze,hideNavigation:!0}),e==="error-500"&&t.jsx(rc,{onNavigate:ze,hideNavigation:!0}),e==="maintenance"&&t.jsx(nc,{hideNavigation:!0}),e==="data-detail"&&t.jsx(ud,{viewMode:S,onNavigate:ze,unreadCount:se,onUnreadCountChange:setUnreadCount,showFlashMessage:N,onFlashMessageChange:C,showDeleteModal:Re,onDeleteModalChange:jt}),e==="data-create"&&t.jsx(Ee,{viewMode:S,currentPage:"data-create",onNavigate:ze,unreadCount:se,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:n,setShowUserMenu:a,isHamburgerOpen:ce,setIsHamburgerOpen:oe,sidebarCollapsed:b,setSidebarCollapsed:j,notificationRef:i,notifications:Ze,onMarkNotificationAsRead:K,onMarkAllNotificationsAsRead:me,children:t.jsx(Pl,{})}),e==="data-edit"&&t.jsx(Ee,{viewMode:S,currentPage:"data-edit",onNavigate:ze,unreadCount:se,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:n,setShowUserMenu:a,isHamburgerOpen:ce,setIsHamburgerOpen:oe,sidebarCollapsed:b,setSidebarCollapsed:j,notificationRef:i,notifications:Ze,onMarkNotificationAsRead:K,onMarkAllNotificationsAsRead:me,children:t.jsx(Pl,{})}),e==="qna"&&t.jsx(Ee,{viewMode:S,currentPage:"qna",onNavigate:ze,unreadCount:se,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:n,setShowUserMenu:a,isHamburgerOpen:ce,setIsHamburgerOpen:oe,sidebarCollapsed:b,setSidebarCollapsed:j,notificationRef:i,notifications:Ze,onMarkNotificationAsRead:K,onMarkAllNotificationsAsRead:me,children:t.jsx(ic,{viewMode:S,hideNavigation:!0})}),e==="terms"&&t.jsx(Ee,{viewMode:S,currentPage:"terms",onNavigate:ze,unreadCount:se,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:n,setShowUserMenu:a,isHamburgerOpen:ce,setIsHamburgerOpen:oe,sidebarCollapsed:b,setSidebarCollapsed:j,notificationRef:i,notifications:Ze,onMarkNotificationAsRead:K,onMarkAllNotificationsAsRead:me,children:t.jsx(sc,{viewMode:S,hideNavigation:!0})}),e==="privacy"&&t.jsx(Ee,{viewMode:S,currentPage:"privacy",onNavigate:ze,unreadCount:se,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:n,setShowUserMenu:a,isHamburgerOpen:ce,setIsHamburgerOpen:oe,sidebarCollapsed:b,setSidebarCollapsed:j,notificationRef:i,notifications:Ze,onMarkNotificationAsRead:K,onMarkAllNotificationsAsRead:me,children:t.jsx(lc,{viewMode:S,hideNavigation:!0})}),e==="commercial"&&t.jsx(Ee,{viewMode:S,currentPage:"commercial",onNavigate:ze,unreadCount:se,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:n,setShowUserMenu:a,isHamburgerOpen:ce,setIsHamburgerOpen:oe,sidebarCollapsed:b,setSidebarCollapsed:j,notificationRef:i,notifications:Ze,onMarkNotificationAsRead:K,onMarkAllNotificationsAsRead:me,children:t.jsx(ac,{viewMode:S,hideNavigation:!0})})]})};function C2({data:e,defaultSortColumn:r,defaultSortDirection:n="asc",selectable:a=!1,initialSelectedIds:s=[]}){const[l,i]=u.useState(r||null),[o,c]=u.useState(n),[d,p]=u.useState(s),h=u.useCallback(m=>{i(x=>x===m?(c(N=>N==="asc"?"desc":"asc"),m):(c("asc"),m))},[]),f=u.useMemo(()=>l?[...e].sort((m,x)=>{const N=m[l],C=x[l];if(N==null&&C==null)return 0;if(N==null)return 1;if(C==null)return-1;let k=0;return typeof N=="string"&&typeof C=="string"?k=N.toLowerCase().localeCompare(C.toLowerCase()):typeof N=="number"&&typeof C=="number"?k=N-C:N instanceof Date&&C instanceof Date?k=N.getTime()-C.getTime():k=String(N).localeCompare(String(C)),o==="asc"?k:-k}):e,[e,l,o]),b=u.useCallback(()=>{d.length===e.length&&e.length>0?p([]):p(e.map(m=>m.id))},[e,d.length]),j=u.useCallback(m=>{p(x=>x.includes(m)?x.filter(N=>N!==m):[...x,m])},[]),y=u.useCallback(()=>{p([])},[]),w=u.useCallback(m=>d.includes(m),[d]),v=a&&d.length===e.length&&e.length>0,g=a&&d.length>0&&d.length<e.length;return{displayData:f,sortColumn:l,sortDirection:o,selectedIds:d,allSelected:v,someSelected:g,handleSort:h,handleSelectAll:b,handleSelectRow:j,clearSelection:y,isSelected:w}}function R2({initialValues:e={},onSearch:r,serverSide:n=!1}={}){const[a,s]=u.useState(e),l=u.useCallback((p,h)=>{s(f=>({...f,[p]:h}))},[]),i=u.useCallback(p=>{s(h=>({...h,...p}))},[]),o=u.useCallback(()=>{r==null||r(a)},[a,r]),c=u.useCallback(()=>{s({}),n&&(r==null||r({}))},[n,r]),d=u.useMemo(()=>Object.values(a).some(p=>p!=null&&p!==""),[a]);return{searchValues:a,setValue:l,setValues:i,handleSearch:o,handleClear:c,hasActiveFilters:d}}const M2=(e,r,n,a)=>{if(r.render)return r.render(e,n,a);if(e==null)return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:"-"});switch(r.dataType||"text"){case"text":return String(e);case"number":const l=r.decimals??0,i=r.thousandsSeparator||",",o=Number(e);if(isNaN(o))return e;const d=o.toFixed(l).split(".");return d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,i),d.join(".");case"currency":const p=r.currencySymbol||"¥",h=r.decimals??0,f=Number(e);if(isNaN(f))return e;const j=f.toFixed(h).split(".");return j[0]=j[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),`${p}${j.join(".")}`;case"percentage":const y=Number(e);if(isNaN(y))return e;const w=r.decimals??1;return`${y.toFixed(w)}%`;case"date":r.dateFormat;const v=e instanceof Date?e:new Date(e);if(isNaN(v.getTime()))return e;const g=v.getFullYear(),m=String(v.getMonth()+1).padStart(2,"0"),x=String(v.getDate()).padStart(2,"0");return`${g}-${m}-${x}`;case"datetime":const N=e instanceof Date?e:new Date(e);if(isNaN(N.getTime()))return e;const C=N.getFullYear(),k=String(N.getMonth()+1).padStart(2,"0"),R=String(N.getDate()).padStart(2,"0"),I=String(N.getHours()).padStart(2,"0"),_=String(N.getMinutes()).padStart(2,"0");return`${C}-${k}-${R} ${I}:${_}`;case"time":const P=e instanceof Date?e:new Date(e);if(isNaN(P.getTime()))return e;const T=r.timeFormat||"24h";let $=P.getHours();const W=String(P.getMinutes()).padStart(2,"0");if(T==="12h"){const M=$>=12?"PM":"AM";return $=$%12||12,`${$}:${W} ${M}`}return`${String($).padStart(2,"0")}:${W}`;case"boolean":return t.jsx("span",{className:`status-badge ${e?"status-badge--success":"status-badge--default"}`,children:e?"有効":"無効"});case"badge":if(!r.badgeConfig||!r.badgeConfig[e])return t.jsx("span",{className:"status-badge status-badge--default",children:e});const Q=r.badgeConfig[e],A={success:"status-badge--success",warning:"status-badge--warning",error:"status-badge--danger",danger:"status-badge--danger",info:"status-badge--info",default:"status-badge--default",primary:"status-badge--primary",secondary:"status-badge--default"}[Q.variant]||"status-badge--default";return t.jsx("span",{className:`status-badge ${A}`,children:Q.label});case"link":return t.jsx("a",{href:e,style:{color:"var(--color-primary-600)",fontWeight:"var(--font-weight-medium)"},onClick:M=>M.stopPropagation(),children:e});case"email":return t.jsx("a",{href:`mailto:${e}`,style:{color:"var(--color-primary-600)"},onClick:M=>M.stopPropagation(),children:e});case"phone":return t.jsx("a",{href:`tel:${e}`,style:{color:"var(--color-primary-600)"},onClick:M=>M.stopPropagation(),children:e});case"image":return t.jsx("img",{src:e,alt:"",style:{width:"40px",height:"40px",objectFit:"cover",borderRadius:0}});case"avatar":return t.jsx("img",{src:e,alt:"",style:{width:"32px",height:"32px",objectFit:"cover",borderRadius:0}});case"custom":return e;default:return String(e)}},rh=({title:e,subtitle:r,columns:n,data:a,searchConfig:s,pagination:l,rowActions:i=[],bulkActions:o=[],createButton:c,toolbarActions:d=[],sort:p,searchValues:h,onSortChange:f,onPageChange:b,onPerPageChange:j,onSearchChange:y,onRefresh:w,selectable:v=!1,selectedIds:g,onSelectionChange:m,rowConfig:x,emptyState:N,loading:C=!1,error:k,exportConfig:R,stickyHeader:I=!1,density:_="normal",showRowNumbers:P=!1,className:T="",breadcrumbs:$,headerActions:W=[],flashMessage:Q,onLogout:L})=>{const[A,M]=He(),D=E=>{const Re=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",Ze={dashboard:`${Re}/dashboard`,"data-list":`${Re}/data/list`,statistics:`${Re}/statistics`,notifications:`${Re}/notifications`,settings:`${Re}/settings`}[E]||`${Re}/${E}`;typeof window<"u"&&(window.location.href=Ze)},V=()=>{if(L){L();return}D("login")},[q,O]=u.useState((s==null?void 0:s.defaultCollapsed)===!1),X=C2({data:a,defaultSortColumn:p==null?void 0:p.column,defaultSortDirection:(p==null?void 0:p.direction)||"asc",selectable:v,initialSelectedIds:g||[]}),G=R2({initialValues:h||{},onSearch:y,serverSide:!!y}),ee=g!==void 0?g:X.selectedIds,B=m?()=>{const E=ee.length===a.length?[]:a.map(J=>J[(x==null?void 0:x.idKey)||"id"]);m(E,a.filter(J=>E.includes(J[(x==null?void 0:x.idKey)||"id"])))}:X.handleSelectAll,te=E=>{if(m){const J=ee.includes(E)?ee.filter(he=>he!==E):[...ee,E];m(J,a.filter(he=>J.includes(he[(x==null?void 0:x.idKey)||"id"])))}else X.handleSelectRow(E)},fe=ee.length===a.length&&a.length>0;ee.length>0&&ee.length<a.length;const ge=u.useMemo(()=>a.filter(E=>ee.includes(E[(x==null?void 0:x.idKey)||"id"])),[a,ee,x==null?void 0:x.idKey]),Qe=u.useMemo(()=>n.filter(E=>!E.hidden),[n]),Ye=E=>{const J=n.find(he=>he.key===E);if(J!=null&&J.sortable)if(f){const he=(p==null?void 0:p.column)===E&&(p==null?void 0:p.direction)==="asc"?"desc":"asc";f(E,he)}else X.handleSort(E)},Ke=f?p==null?void 0:p.column:X.sortColumn,S=f?p==null?void 0:p.direction:X.sortDirection,U=f?a:X.displayData,ce=()=>{G.handleSearch&&G.handleSearch()},oe=()=>{G.handleClear()},$t=()=>{if(!s||!s.fields&&!s.groups)return null;const J=[...s.fields||[]].sort((K,me)=>{const at=K.order??999,ye=me.order??999;return at-ye});s.layout;const he=s.columns||4,Re=s.gap||s.columnGap||"var(--spacing-4)",jt=s.rowGap||Re,Ze=s.columnGap||Re,de=J.some(K=>K.gridColumn||K.gridRow||K.gridColumnSpan),se=de?{display:"grid",gridTemplateColumns:`repeat(${he}, 1fr)`,gap:jt===Ze?Re:void 0,rowGap:jt!==Re?jt:void 0,columnGap:Ze!==Re?Ze:void 0,marginBottom:"var(--spacing-4)"}:{display:"flex",gap:Re,marginBottom:"var(--spacing-4)",flexWrap:"wrap"};return t.jsx("div",{style:se,children:J.map(K=>{var at;const me=()=>de?{gridColumn:K.gridColumn?K.gridColumnSpan?`${K.gridColumn} / span ${K.gridColumnSpan}`:K.gridColumn:void 0,gridRow:K.gridRow,order:K.order}:{flex:{full:"1 1 100%",half:"1 1 calc((100% - var(--spacing-4)) / 2)",third:"1 1 calc((100% - var(--spacing-4) * 2) / 3)",quarter:"1 1 calc((100% - var(--spacing-4) * 3) / 4)",fifth:"1 1 calc((100% - var(--spacing-4) * 4) / 5)"}[K.width||"quarter"]||"1 1 200px",order:K.order};return K.type==="text"?t.jsx("div",{style:me(),children:t.jsx(_e,{type:"text",label:K.label,placeholder:K.placeholder,value:G.searchValues[K.name]||"",onChange:ye=>G.setValue(K.name,ye.target.value),disabled:K.disabled,borderColor:s.borderColor||"#d1d5db"})},K.name):K.type==="select"?t.jsxs("div",{style:me(),children:[t.jsx("label",{style:{display:"block",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",marginBottom:"var(--spacing-2)"},children:K.label}),t.jsxs("select",{value:G.searchValues[K.name]||"",onChange:ye=>G.setValue(K.name,ye.target.value),disabled:K.disabled,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${s.borderColor||"#d1d5db"}`,borderRadius:0,fontSize:"var(--font-size-sm)"},children:[t.jsx("option",{value:"",children:K.placeholder||"すべて"}),(at=K.options)==null?void 0:at.map(ye=>t.jsx("option",{value:ye.value,children:ye.label},ye.value))]})]},K.name):null})})};return!C&&a.length===0&&!G.hasActiveFilters?t.jsxs("div",{className:A==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:A,onViewModeChange:M}),t.jsx(Ee,{viewMode:A,currentPage:"data-list",onNavigate:D,unreadCount:0,notifications:[],children:t.jsxs("div",{className:`dynamic-data-list-page ${T}`,children:[t.jsxs("div",{className:"page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),r&&t.jsx("p",{className:"page-subtitle",children:r})]}),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:c&&t.jsxs("button",{className:`btn btn--${c.variant||"primary"}`,onClick:c.onClick,children:[c.icon&&t.jsx(z,{name:c.icon,style:{width:"16px",height:"16px"}}),c.label]})})]}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[(N==null?void 0:N.icon)&&t.jsx(z,{name:N.icon,style:{width:"64px",height:"64px",color:"var(--color-neutral-400)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:(N==null?void 0:N.title)||"データがありません"}),(N==null?void 0:N.description)&&t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:N.description}),(N==null?void 0:N.action)&&t.jsx("button",{className:"btn btn--primary",onClick:N.action.onClick,children:N.action.label})]})]})})]}):t.jsxs("div",{className:A==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:A,onViewModeChange:M}),t.jsx(Ee,{viewMode:A,currentPage:"data-list",onNavigate:D,unreadCount:0,notifications:[],onLogout:V,children:t.jsxs("div",{className:`dynamic-data-list-page ${T}`,children:[t.jsxs("div",{className:"page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),r&&t.jsx("p",{className:"page-subtitle",children:r})]}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[W.map((E,J)=>t.jsxs("button",{className:`btn btn--${E.variant||"secondary"}`,onClick:E.onClick,children:[E.icon&&t.jsx(z,{name:E.icon,style:{width:"16px",height:"16px"}}),E.label]},J)),c&&t.jsxs("button",{className:`btn btn--${c.variant||"primary"}`,onClick:c.onClick,children:[c.icon&&t.jsx(z,{name:c.icon,style:{width:"16px",height:"16px"}}),c.label]})]})]}),Q&&t.jsx("div",{style:{marginBottom:"var(--spacing-6)"},children:Q}),s&&(s.fields||s.groups)&&t.jsxs("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{onClick:()=>O(!q),style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"var(--spacing-3)",margin:"calc(var(--spacing-4) * -1)",marginBottom:q?"var(--spacing-4)":"calc(var(--spacing-4) * -1)",borderBottom:q?"1px solid var(--color-neutral-200)":"none"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"search",style:{width:"18px",height:"18px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:s.title||"検索"}),G.hasActiveFilters&&t.jsxs("span",{className:"status-badge status-badge--info",style:{marginLeft:"var(--spacing-2)"},children:[Object.keys(G.searchValues).filter(E=>G.searchValues[E]).length,"件フィルター中"]})]}),t.jsx(z,{name:q?"chevron-up":"chevron-down",style:{width:"20px",height:"20px"}})]}),q&&t.jsxs("div",{style:{paddingTop:"var(--spacing-4)"},children:[$t(),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--spacing-3)"},children:[s.showClearButton!==!1&&t.jsxs("button",{className:"btn btn--secondary",onClick:oe,children:[t.jsx(z,{name:"close",style:{width:"16px",height:"16px"}}),s.clearButtonText||"クリア"]}),s.showSearchButton!==!1&&t.jsxs("button",{className:"btn btn--primary",onClick:ce,children:[t.jsx(z,{name:"search",style:{width:"16px",height:"16px"}}),s.searchButtonText||"検索"]})]})]})]}),k&&t.jsx("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",color:"var(--color-error-600)"},children:[t.jsx(z,{name:"error",style:{width:"20px",height:"20px"}}),t.jsx("span",{children:k.message}),k.retry&&t.jsx("button",{className:"btn btn--secondary btn--sm",onClick:k.retry,children:"再試行"})]})}),t.jsxs("div",{className:"dashboard-card",children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:ee.length>0&&`${ee.length}件選択中`}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[d.map((E,J)=>t.jsxs("button",{className:`btn btn--${E.variant||"text"} btn--sm`,onClick:E.onClick,disabled:E.disabled,children:[E.icon&&t.jsx(z,{name:E.icon,style:{width:"16px",height:"16px"}}),E.label]},J)),o.map(E=>{const J=!E.minSelections||ee.length>=E.minSelections,he=!E.maxSelections||ee.length<=E.maxSelections,Re=E.disabled||ee.length===0||!J||!he;return t.jsxs("button",{className:`btn btn--${E.variant||"text"} btn--sm`,disabled:Re,onClick:()=>E.onClick(ee,ge),children:[E.icon&&t.jsx(z,{name:E.icon,style:{width:"16px",height:"16px"}}),E.label]},E.id)})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:`data-table data-table--${_}`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[v&&t.jsx("th",{style:{width:"50px",textAlign:"center"},children:t.jsx(jr,{checked:fe,onChange:B,"aria-label":"すべて選択"})}),P&&t.jsx("th",{style:{width:"60px",textAlign:"center"},children:"No."}),Qe.map(E=>{const J=E.sortable!==!1&&E.sortable!==void 0,he=Ke===E.key,Re=E.align||"left";return t.jsx("th",{style:{textAlign:Re,width:E.width,minWidth:E.minWidth,maxWidth:E.maxWidth,cursor:J?"pointer":"default",userSelect:"none"},onClick:()=>J&&Ye(E.key),className:E.headerClassName,title:E.tooltip,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",justifyContent:Re},children:[t.jsx("span",{children:E.label}),J&&t.jsx(z,{name:he&&S==="desc"?"arrow-down":"arrow-up",style:{width:"14px",height:"14px",opacity:he?1:.3}})]})},E.key)}),i.length>0&&t.jsx("th",{style:{width:"120px",textAlign:"center"},children:"操作"})]})}),t.jsx("tbody",{children:C?t.jsx("tr",{children:t.jsxs("td",{colSpan:Qe.length+(v?1:0)+(P?1:0)+(i.length>0?1:0),style:{textAlign:"center",padding:"var(--spacing-8)"},children:[t.jsx(z,{name:"refresh",style:{width:"24px",height:"24px",animation:"spin 1s linear infinite"}}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"読み込み中..."})]})}):U.length===0?t.jsx("tr",{children:t.jsxs("td",{colSpan:Qe.length+(v?1:0)+(P?1:0)+(i.length>0?1:0),style:{textAlign:"center",padding:"var(--spacing-8)"},children:[t.jsx(z,{name:"search",style:{width:"48px",height:"48px",color:"var(--color-neutral-400)"}}),t.jsx("p",{style:{marginTop:"var(--spacing-2)",color:"var(--color-neutral-600)"},children:"検索結果がありません"})]})}):U.map((E,J)=>{const he=E[(x==null?void 0:x.idKey)||"id"],Re=ee.includes(he),jt=typeof(x==null?void 0:x.className)=="function"?x.className(E,J):(x==null?void 0:x.className)||"",Ze=typeof(x==null?void 0:x.disabled)=="function"?x.disabled(E):(x==null?void 0:x.disabled)||!1;return t.jsxs("tr",{className:jt,onClick:()=>{var de;return(de=x==null?void 0:x.onClick)==null?void 0:de.call(x,E,J)},style:{cursor:x!=null&&x.clickable||x!=null&&x.onClick?"pointer":"default"},children:[v&&t.jsx("td",{children:t.jsx(jr,{checked:Re,onChange:()=>te(he),disabled:Ze,"aria-label":`行${J+1}を選択`})}),P&&t.jsx("td",{style:{textAlign:"center",fontWeight:"var(--font-weight-medium)"},children:J+1}),Qe.map(de=>{const se=E[de.key],K=de.align||"left",me=typeof de.cellClassName=="function"?de.cellClassName(se,E):de.cellClassName||"";return t.jsx("td",{style:{textAlign:K},className:me,children:M2(se,de,E,J)},de.key)}),i.length>0&&t.jsx("td",{children:t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"center"},children:i.map(de=>{const se=typeof de.visible=="function"?de.visible(E):de.visible!==!1,K=typeof de.disabled=="function"?de.disabled(E):de.disabled||!1;return se?t.jsxs("button",{className:`btn btn--${de.variant||"text"} btn--sm`,title:de.tooltip||de.label,disabled:K||de.loading,onClick:me=>{me.stopPropagation(),de.confirm?window.confirm(`${de.confirm.title}

${de.confirm.message}`)&&de.onClick(E,J):de.onClick(E,J)},children:[de.icon&&t.jsx(z,{name:de.icon,style:{width:"16px",height:"16px"}}),de.label&&t.jsx("span",{children:de.label})]},de.id):null})})})]},he)})})]})}),l&&t.jsx("div",{style:{marginTop:"var(--spacing-4)"},children:t.jsx(th,{pagination:{current_page:l.currentPage,last_page:l.lastPage,total:l.total,per_page:l.perPage,from:l.from,to:l.to,prev_page_url:l.currentPage>1?"#":null,next_page_url:l.currentPage<l.lastPage?"#":null},onPageChange:E=>b==null?void 0:b(E),onPerPageChange:E=>j==null?void 0:j(E),config:{perPageOptions:l.perPageOptions||[10,20,50,100],showInfo:l.showPageInfo!==!1}})})]})]})})]})},P2=({type:e,message:r,icon:n,onClose:a})=>{const s=n||{success:"check",info:"info",warning:"warning",danger:"error"}[e],l=["flash-message",`flash-message--${e}`].join(" ");return t.jsxs("div",{className:l,children:[t.jsx(z,{name:s,className:"flash-message__icon"}),t.jsx("div",{className:"flash-message__message",children:r}),a&&t.jsx("button",{onClick:a,className:"flash-message__close","aria-label":"閉じる",children:t.jsx(z,{name:"close"})})]})},E2=re.memo(P2),Yu=[{id:1,firstName:"太郎",lastName:"田中",email:"tanaka.taro@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"tokyo",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"fulltime",occupation:"ソフトウェアエンジニア",companyName:"株式会社テックコーポレーション",annualIncome:"6000000",skills:["programming","design"],workLocation:["tokyo","remote"],desiredSalary:7e6,availableStartDate:"2025-02-01",preferredContactTime:"14:00"},{id:2,firstName:"花子",lastName:"佐藤",email:"sato.hanako@example.com",phone:"08098765432",alternatePhone:"0367891234",postalCode:"1070062",prefecture:"tokyo",city:"港区",address1:"南青山2-5-20",address2:"マンション青山 301",employmentStatus:"fulltime",occupation:"プロジェクトマネージャー",companyName:"株式会社グローバルソリューションズ",annualIncome:"8500000",skills:["management","marketing"],workLocation:["tokyo","osaka"],desiredSalary:9e6,availableStartDate:"2025-03-01",preferredContactTime:"10:00"},{id:3,firstName:"一郎",lastName:"鈴木",email:"suzuki.ichiro@example.com",phone:"07011112222",alternatePhone:"",postalCode:"1600023",prefecture:"tokyo",city:"新宿区",address1:"西新宿3-1-5",address2:"",employmentStatus:"contract",occupation:"システムエンジニア",companyName:"株式会社システム開発",annualIncome:"5500000",skills:["programming"],workLocation:["tokyo"],desiredSalary:6e6,availableStartDate:"2025-01-15",preferredContactTime:"15:00"},{id:4,firstName:"美咲",lastName:"高橋",email:"takahashi.misaki@example.com",phone:"09033334444",alternatePhone:"0445556666",postalCode:"2200012",prefecture:"hokkaido",city:"札幌市中央区",address1:"北1条西5丁目",address2:"オフィスビル 8F",employmentStatus:"fulltime",occupation:"Webデザイナー",companyName:"株式会社クリエイティブワークス",annualIncome:"4800000",skills:["design","marketing"],workLocation:["tokyo","remote"],desiredSalary:55e5,availableStartDate:"2025-04-01",preferredContactTime:"13:00"},{id:5,firstName:"健太",lastName:"伊藤",email:"ito.kenta@example.com",phone:"08055556666",alternatePhone:"0677778888",postalCode:"5300001",prefecture:"osaka",city:"大阪市北区",address1:"梅田1-1-3",address2:"大阪ビル 5F",employmentStatus:"fulltime",occupation:"営業担当",companyName:"株式会社セールスプロ",annualIncome:"5200000",skills:["sales","marketing"],workLocation:["osaka","nagoya"],desiredSalary:6e6,availableStartDate:"2025-02-15",preferredContactTime:"11:00"},{id:6,firstName:"真理子",lastName:"渡辺",email:"watanabe.mariko@example.com",phone:"07077778888",alternatePhone:"0399990000",postalCode:"1640001",prefecture:"tokyo",city:"中野区",address1:"中野4-10-1",address2:"中野タワー 15F",employmentStatus:"fulltime",occupation:"人事マネージャー",companyName:"株式会社ヒューマンリソース",annualIncome:"7200000",skills:["management"],workLocation:["tokyo"],desiredSalary:8e6,availableStartDate:"2025-05-01",preferredContactTime:"09:00"},{id:7,firstName:"拓也",lastName:"山本",email:"yamamoto.takuya@example.com",phone:"09088889999",alternatePhone:"",postalCode:"2310023",prefecture:"hokkaido",city:"横浜市中区",address1:"山下町1-2",address2:"",employmentStatus:"freelance",occupation:"フロントエンドエンジニア",companyName:"",annualIncome:"7500000",skills:["programming","design"],workLocation:["remote"],desiredSalary:8e6,availableStartDate:"2025-01-01",preferredContactTime:"16:00"},{id:8,firstName:"愛",lastName:"中村",email:"nakamura.ai@example.com",phone:"08011112222",alternatePhone:"0533334444",postalCode:"4600008",prefecture:"osaka",city:"名古屋市中区",address1:"栄3-4-5",address2:"栄ビル 7F",employmentStatus:"fulltime",occupation:"経理担当",companyName:"株式会社ファイナンス",annualIncome:"4500000",skills:[],workLocation:["nagoya"],desiredSalary:5e6,availableStartDate:"2025-03-15",preferredContactTime:"14:00"},{id:9,firstName:"大輔",lastName:"小林",email:"kobayashi.daisuke@example.com",phone:"07033334444",alternatePhone:"0755556666",postalCode:"6000000",prefecture:"kyoto",city:"京都市下京区",address1:"烏丸通四条下ル",address2:"京都センタービル 3F",employmentStatus:"parttime",occupation:"カスタマーサポート",companyName:"株式会社サポートセンター",annualIncome:"3000000",skills:["sales"],workLocation:["osaka","remote"],desiredSalary:35e5,availableStartDate:"2025-02-01",preferredContactTime:"10:00"},{id:10,firstName:"由美",lastName:"加藤",email:"kato.yumi@example.com",phone:"09055556666",alternatePhone:"",postalCode:"8100001",prefecture:"osaka",city:"福岡市中央区",address1:"天神2-3-10",address2:"",employmentStatus:"student",occupation:"インターン",companyName:"株式会社デジタルイノベーション",annualIncome:"1200000",skills:["programming"],workLocation:["fukuoka","remote"],desiredSalary:3e6,availableStartDate:"2025-04-01",preferredContactTime:"13:00"},{id:11,firstName:"翔太",lastName:"吉田",email:"yoshida.shota@example.com",phone:"08077778888",alternatePhone:"0344445555",postalCode:"1010051",prefecture:"tokyo",city:"千代田区",address1:"神田神保町1-1",address2:"神保町ビル 10F",employmentStatus:"fulltime",occupation:"データサイエンティスト",companyName:"株式会社データアナリティクス",annualIncome:"9000000",skills:["programming"],workLocation:["tokyo","remote"],desiredSalary:1e7,availableStartDate:"2025-06-01",preferredContactTime:"11:00"},{id:12,firstName:"結衣",lastName:"山田",email:"yamada.yui@example.com",phone:"07099990000",alternatePhone:"0611112222",postalCode:"5600001",prefecture:"osaka",city:"大阪市西区",address1:"江戸堀1-2-3",address2:"西区マンション 205",employmentStatus:"fulltime",occupation:"マーケティング担当",companyName:"株式会社マーケティングプロ",annualIncome:"5800000",skills:["marketing","design"],workLocation:["osaka"],desiredSalary:65e5,availableStartDate:"2025-03-01",preferredContactTime:"15:00"},{id:13,firstName:"陽介",lastName:"佐々木",email:"sasaki.yosuke@example.com",phone:"09011112222",alternatePhone:"",postalCode:"9800011",prefecture:"hokkaido",city:"仙台市青葉区",address1:"上杉1-1-1",address2:"",employmentStatus:"contract",occupation:"ネットワークエンジニア",companyName:"株式会社ネットワークソリューションズ",annualIncome:"6200000",skills:["programming"],workLocation:["tokyo","remote"],desiredSalary:7e6,availableStartDate:"2025-02-15",preferredContactTime:"14:00"},{id:14,firstName:"麻衣",lastName:"松本",email:"matsumoto.mai@example.com",phone:"08033334444",alternatePhone:"0922223333",postalCode:"8120011",prefecture:"osaka",city:"福岡市博多区",address1:"博多駅前2-1-1",address2:"博多ビル 6F",employmentStatus:"unemployed",occupation:"",companyName:"",annualIncome:"0",skills:["design"],workLocation:["fukuoka"],desiredSalary:4e6,availableStartDate:"2025-01-15",preferredContactTime:"10:00"},{id:15,firstName:"隆",lastName:"井上",email:"inoue.takashi@example.com",phone:"07055556666",alternatePhone:"0266667777",postalCode:"3900814",prefecture:"tokyo",city:"松本市",address1:"本庄1-2-1",address2:"松本オフィス 2F",employmentStatus:"fulltime",occupation:"ITコンサルタント",companyName:"株式会社ビジネスコンサルティング",annualIncome:"10500000",skills:["management","programming"],workLocation:["tokyo","nagoya","remote"],desiredSalary:12e6,availableStartDate:"2025-07-01",preferredContactTime:"09:00"}],$2=()=>{const e=fr(),r=u.useRef(null),[n,a]=u.useState(null),[s,l]=He(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState(!1),[j,y]=u.useState({}),[w,v]=u.useState(Yu),[g,m]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]);u.useEffect(()=>{const L=sessionStorage.getItem("flashMessage");if(L)try{const A=JSON.parse(L);a(A),sessionStorage.removeItem("flashMessage"),setTimeout(()=>{a(null)},5e3)}catch(A){console.error("Failed to parse flash message:",A)}},[]);const x=L=>{const M={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[L]||`/pages/${L}`;e(M)},N=L=>{m(A=>A.map(M=>M.id===L?{...M,read:!0}:M))},C=()=>{m(L=>L.map(A=>({...A,read:!0})))},k=L=>{y(L);const A=Yu.filter(M=>{if(L.name){const D=L.name.toLowerCase(),V=`${M.lastName} ${M.firstName}`.toLowerCase(),q=`${M.firstName} ${M.lastName}`.toLowerCase();if(!V.includes(D)&&!q.includes(D))return!1}if(L.email){const D=L.email.toLowerCase();if(!M.email.toLowerCase().includes(D))return!1}if(L.prefecture&&M.prefecture!==L.prefecture||L.employmentStatus&&M.employmentStatus!==L.employmentStatus)return!1;if(L.occupation){const D=L.occupation.toLowerCase();if(!M.occupation||!M.occupation.toLowerCase().includes(D))return!1}return!0});v(A)},R=[{key:"id",label:"ID",dataType:"number",sortable:!0,width:"60px",align:"center"},{key:"fullName",label:"氏名",dataType:"text",sortable:!0,width:"120px",render:(L,A)=>`${A.lastName} ${A.firstName}`},{key:"email",label:"メールアドレス",dataType:"email",sortable:!0,width:"200px"},{key:"phone",label:"電話番号",dataType:"text",sortable:!0,width:"120px"},{key:"postalCode",label:"郵便番号",dataType:"text",sortable:!0,width:"100px"},{key:"prefecture",label:"都道府県",dataType:"text",sortable:!0,width:"100px",render:L=>({tokyo:"東京都",osaka:"大阪府",kyoto:"京都府",hokkaido:"北海道"})[L]||L},{key:"city",label:"市区町村",dataType:"text",sortable:!0,width:"150px"},{key:"employmentStatus",label:"雇用形態",dataType:"badge",sortable:!0,width:"120px",badgeConfig:{fulltime:{label:"正社員",variant:"success"},parttime:{label:"パート・アルバイト",variant:"info"},contract:{label:"契約社員",variant:"warning"},freelance:{label:"フリーランス",variant:"primary"},student:{label:"学生",variant:"default"},unemployed:{label:"無職",variant:"danger"}}},{key:"occupation",label:"職種",dataType:"text",sortable:!0,width:"150px"},{key:"companyName",label:"勤務先名",dataType:"text",sortable:!0,width:"200px"},{key:"annualIncome",label:"年収",dataType:"currency",sortable:!0,width:"120px",align:"right",render:L=>{const A=Number(L);return!L||isNaN(A)||A===0?"-":`¥${A.toLocaleString()}`}},{key:"skills",label:"スキル",dataType:"text",sortable:!1,width:"200px",render:L=>{if(!L||!Array.isArray(L)||L.length===0)return"-";const A={programming:"プログラミング",design:"デザイン",marketing:"マーケティング",management:"マネジメント",sales:"営業"};return L.map(M=>A[M]||M).join("、")}},{key:"workLocation",label:"希望勤務地",dataType:"text",sortable:!1,width:"150px",render:L=>{if(!L||!Array.isArray(L)||L.length===0)return"-";const A={tokyo:"東京",osaka:"大阪",nagoya:"名古屋",fukuoka:"福岡",remote:"リモート"};return L.map(M=>A[M]||M).join("、")}},{key:"desiredSalary",label:"希望年収",dataType:"currency",sortable:!0,width:"120px",align:"right",render:L=>{const A=Number(L);return!L||isNaN(A)||A===0?"-":`¥${A.toLocaleString()}`}}],I={title:"検索・フィルター",collapsible:!0,defaultCollapsed:!0,showClearButton:!0,showSearchButton:!0,borderColor:"#d1d5db",fields:[{name:"name",label:"氏名",type:"text",placeholder:"氏名で検索...",width:"half"},{name:"email",label:"メールアドレス",type:"text",placeholder:"メールアドレスで検索...",width:"half"},{name:"prefecture",label:"都道府県",type:"select",placeholder:"すべて",options:[{label:"東京都",value:"tokyo"},{label:"大阪府",value:"osaka"},{label:"京都府",value:"kyoto"},{label:"北海道",value:"hokkaido"}],width:"half"},{name:"employmentStatus",label:"雇用形態",type:"select",placeholder:"すべて",options:[{label:"正社員",value:"fulltime"},{label:"パート・アルバイト",value:"parttime"},{label:"契約社員",value:"contract"},{label:"フリーランス",value:"freelance"},{label:"学生",value:"student"},{label:"無職",value:"unemployed"}],width:"half"},{name:"occupation",label:"職種",type:"text",placeholder:"職種で検索...",width:"half"}]},_=[{id:"view",label:"",icon:"eye",onClick:L=>{console.log("View user:",L),e("/pages/data/detail")},tooltip:"詳細を表示"},{id:"edit",label:"",icon:"edit",onClick:L=>{e("/pages/data/edit")},tooltip:"編集"}],P=[{id:"delete",label:"削除",icon:"delete",variant:"danger",onClick:L=>{console.log("削除:",L)},minSelections:1}],T=[{label:"エクスポート",icon:"download",onClick:()=>{console.log("エクスポート"),alert("ユーザーデータをエクスポートします")}}],$={label:"新規登録",icon:"plus",onClick:()=>{console.log("Navigate to /pages/data/add"),e("/pages/data/add")}},W={title:j&&Object.keys(j).length>0?"お探しのデータは見つかりませんでした":"データがありません",description:j&&Object.keys(j).length>0?"検索条件を変更してお試しください":"新しいデータを作成してください",icon:j&&Object.keys(j).length>0?"search":"user",action:j&&Object.keys(j).length>0?void 0:{label:"新規作成",onClick:()=>{e("/pages/data/add")}}},Q={title:"データ一覧",subtitle:void 0,columns:R,data:w,searchConfig:I,searchValues:j,onSearchChange:k,rowActions:_,bulkActions:P,toolbarActions:T,createButton:$,emptyState:W,selectable:!0,showRowNumbers:!1,density:"normal",headerActions:[]};return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:s,onViewModeChange:l}),t.jsx(Ee,{viewMode:s,currentPage:"data-list",onNavigate:x,unreadCount:g.filter(L=>!L.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:p,setIsHamburgerOpen:h,sidebarCollapsed:f,setSidebarCollapsed:b,notificationRef:r,notifications:g,onMarkNotificationAsRead:N,onMarkAllNotificationsAsRead:C,children:t.jsx(rh,{...Q,flashMessage:n?t.jsx(E2,{type:n.type,message:n.message,onClose:()=>a(null)}):void 0})})]})},T2=({children:e,variant:r="primary",size:n="md",disabled:a=!1,onClick:s,type:l="button",icon:i=null,iconPosition:o="left",fullWidth:c=!1,loading:d=!1,className:p="",...h})=>{const f=["btn",`btn--${r}`,`btn--${n}`,c&&"btn--full-width",d&&"btn--loading",i&&!e&&"btn--icon-only",p].filter(Boolean).join(" "),b=j=>{!a&&!d&&s&&s(j)};return t.jsxs("button",{type:l,className:f,disabled:a||d,onClick:b,...h,children:[d&&t.jsx("span",{className:"btn__spinner",children:t.jsx("svg",{className:"spinner",width:"16",height:"16",viewBox:"0 0 24 24",children:t.jsx("circle",{className:"spinner-circle",cx:"12",cy:"12",r:"10",fill:"none",strokeWidth:"3"})})}),i&&o==="left"&&!d&&t.jsx("span",{className:"btn__icon btn__icon--left",children:i}),e&&t.jsx("span",{className:"btn__text",children:e}),i&&o==="right"&&!d&&t.jsx("span",{className:"btn__icon btn__icon--right",children:i})]})},br=re.memo(T2),L2=()=>{const e=fr(),r=u.useRef(null),[n,a]=He(),[s,l]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState(!1),[j,y]=u.useState(null),[w,v]=u.useState({username:"管理者",email:"admin@example.com",role:"システム管理者",displayName:"田中 太郎",phone:"090-1234-5678",department:"開発部"}),[g,m]=u.useState({...w}),x=$=>{const Q={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[$]||`/pages/${$}`;e(Q)},[N,C]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),k=$=>{C(W=>W.map(Q=>Q.id===$?{...Q,read:!0}:Q))},R=()=>{C($=>$.map(W=>({...W,read:!0})))},I=()=>{m({...w}),b(!0)},_=()=>{v({...g}),b(!1),y("プロフィールを保存しました"),setTimeout(()=>y(null),3e3)},P=()=>{m({...w}),b(!1)},T=($,W)=>{m(Q=>({...Q,[$]:W}))};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:n,onViewModeChange:a}),t.jsx(Ee,{viewMode:n,currentPage:"settings",onNavigate:x,unreadCount:N.filter($=>!$.read).length,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:p,setSidebarCollapsed:h,notificationRef:r,notifications:N,onMarkNotificationAsRead:k,onMarkAllNotificationsAsRead:R,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"1000px",margin:"0 auto"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-6)",color:"var(--color-neutral-900)"},children:"設定"}),j&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:"var(--radius-md)",color:"var(--color-success-700)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"check-circle",style:{width:"20px",height:"20px"}}),j]}),t.jsxs("div",{style:{marginBottom:"var(--spacing-8)",padding:"var(--spacing-6)",backgroundColor:"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-neutral-200)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:"プロフィール設定"}),!f&&t.jsxs("button",{className:"btn btn--primary",onClick:I,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"edit",style:{width:"16px",height:"16px"}}),"編集"]})]}),f?t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n==="sp"?"var(--spacing-2)":"var(--spacing-1_5)"},children:[t.jsx(_e,{label:"表示名",value:g.displayName,onChange:$=>T("displayName",$.target.value),placeholder:"表示名を入力"}),t.jsx(_e,{label:"ユーザー名",value:g.username,onChange:$=>T("username",$.target.value),placeholder:"ユーザー名を入力"}),t.jsx(_e,{label:"メールアドレス",type:"email",value:g.email,onChange:$=>T("email",$.target.value),placeholder:"メールアドレスを入力"}),t.jsx(_e,{label:"電話番号",value:g.phone,onChange:$=>T("phone",$.target.value),placeholder:"電話番号を入力"}),t.jsx(_e,{label:"部署",value:g.department,onChange:$=>T("department",$.target.value),placeholder:"部署を入力"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end",marginTop:"var(--spacing-2)"},children:[t.jsx(br,{variant:"text",onClick:P,children:"キャンセル"}),t.jsx(br,{variant:"primary",onClick:_,children:"保存"})]})]}):t.jsxs("div",{style:{color:"var(--color-neutral-600)"},children:[t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"表示名:"})," ",w.displayName]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"ユーザー名:"})," ",w.username]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"メールアドレス:"})," ",w.email]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"電話番号:"})," ",w.phone]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"部署:"})," ",w.department]}),t.jsxs("p",{children:[t.jsx("strong",{children:"役割:"})," ",w.role]})]})]})]})})]})},_2=()=>{const e=fr(),r=u.useRef(null),[n,a]=He(),[s,l]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),f=m=>{const N={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[m]||`/pages/${m}`;e(N)},[b,j]=u.useState([{id:1,type:"info",title:"システムアップデート",message:"新しい機能が追加されました",time:"2時間前",read:!1},{id:2,type:"success",title:"データ保存完了",message:"データが正常に保存されました",time:"5時間前",read:!1},{id:3,type:"warning",title:"メンテナンス予定",message:"明日の深夜にメンテナンスを実施します",time:"1日前",read:!0},{id:4,type:"error",title:"エラー発生",message:"一部の機能でエラーが発生しています",time:"2日前",read:!0}]),y=m=>{j(x=>x.map(N=>N.id===m?{...N,read:!0}:N))},w=()=>{j(m=>m.map(x=>({...x,read:!0})))},v=m=>{switch(m){case"success":return"check-circle";case"warning":return"warning";case"error":return"exclamation";default:return"info"}},g=m=>{switch(m){case"success":return"var(--color-success-600)";case"warning":return"var(--color-warning-600)";case"error":return"var(--color-error-600)";default:return"var(--color-primary-600)"}};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:n,onViewModeChange:a}),t.jsx(Ee,{viewMode:n,currentPage:"notifications",onNavigate:f,unreadCount:b.filter(m=>!m.read).length,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:p,setSidebarCollapsed:h,notificationRef:r,notifications:b,onMarkNotificationAsRead:y,onMarkAllNotificationsAsRead:w,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"900px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-6)"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"通知一覧"}),b.some(m=>!m.read)&&t.jsxs("button",{onClick:w,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-4)",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--color-primary-600)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--color-primary-500)"},children:[t.jsx(z,{name:"check",style:{width:"16px",height:"16px"}}),"全て既読にする"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:b.map(m=>t.jsxs("div",{style:{padding:"var(--spacing-5)",backgroundColor:m.read?"var(--color-neutral-50)":"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-neutral-200)",display:"flex",gap:"var(--spacing-4)",alignItems:"start",boxShadow:m.read?"none":"var(--shadow-sm)",position:"relative"},children:[t.jsx(z,{name:v(m.type),style:{width:"24px",height:"24px",color:g(m.type),flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"var(--spacing-2)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:m.title}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)",whiteSpace:"nowrap",marginLeft:"var(--spacing-3)"},children:m.time})]}),t.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)",marginBottom:m.read?0:"var(--spacing-3)"},children:m.message}),!m.read&&t.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:t.jsxs("button",{onClick:()=>y(m.id),style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-1) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:x=>{x.currentTarget.style.backgroundColor="var(--color-neutral-200)",x.currentTarget.style.borderColor="var(--color-neutral-400)"},onMouseLeave:x=>{x.currentTarget.style.backgroundColor="var(--color-neutral-100)",x.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(z,{name:"check",style:{width:"12px",height:"12px"}}),"既読にする"]})})]})]},m.id))})]})})]})},A2=()=>{const e=fr(),r=u.useRef(null),[n,a]=He(),[s,l]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),f=m=>{const N={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[m]||`/pages/${m}`;e(N)},[b,j]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),y=m=>{j(x=>x.map(N=>N.id===m?{...N,read:!0}:N))},w=()=>{j(m=>m.map(x=>({...x,read:!0})))},v=[{label:"総ユーザー数",value:"1,234",icon:"user",color:"var(--color-primary-500)"},{label:"総データ数",value:"5,678",icon:"document",color:"var(--color-success-500)"},{label:"今月の新規",value:"234",icon:"chart-bar",color:"var(--color-warning-500)"},{label:"アクティブ率",value:"87%",icon:"chart-pie",color:"var(--color-info-500)"}],g=[{user:"田中太郎",action:"データを作成しました",time:"5分前"},{user:"佐藤花子",action:"プロフィールを更新しました",time:"15分前"},{user:"鈴木一郎",action:"データを編集しました",time:"1時間前"},{user:"高橋美咲",action:"データを削除しました",time:"2時間前"}];return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:n,onViewModeChange:a}),t.jsx(Ee,{viewMode:n,currentPage:"dashboard",onNavigate:f,unreadCount:b.filter(m=>!m.read).length,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:p,setSidebarCollapsed:h,notificationRef:r,notifications:b,onMarkNotificationAsRead:y,onMarkAllNotificationsAsRead:w,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--spacing-4)"},children:v.map((m,x)=>t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:`${m.color}20`,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(z,{name:m.icon,size:"md",style:{color:m.color}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-1)"},children:m.label}),t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:m.value})]})]},x))}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"最近のアクティビティ"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:g.map((m,x)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",background:"var(--color-neutral-50)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:m.user.charAt(0)}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)"},children:m.user}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:m.action})]})]}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:m.time})]},x))})]}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"クイックアクション"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-3)"},children:[t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:m=>{m.currentTarget.style.background="var(--color-neutral-50)",m.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:m=>{m.currentTarget.style.background="var(--color-neutral-white)",m.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(z,{name:"plus-circle",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"新規データ作成"})]}),t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:m=>{m.currentTarget.style.background="var(--color-neutral-50)",m.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:m=>{m.currentTarget.style.background="var(--color-neutral-white)",m.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(z,{name:"table",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"データ一覧表示"})]}),t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:m=>{m.currentTarget.style.background="var(--color-neutral-50)",m.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:m=>{m.currentTarget.style.background="var(--color-neutral-white)",m.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(z,{name:"chart-bar",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"統計を確認"})]})]})]})]})})]})};function I2({config:e,onSearchChange:r=null,onFilterChange:n=null,searchValue:a="",filterValues:s={}}){var o,c,d;const l=((o=e==null?void 0:e.search)==null?void 0:o.enabled)&&r,i=((c=e==null?void 0:e.filters)==null?void 0:c.length)>0&&n;return!l&&!i?null:t.jsx("div",{className:"bg-white rounded-lg shadow-sm p-4 mb-6",children:t.jsxs("div",{className:"flex flex-wrap gap-4 items-end",children:[l&&t.jsxs("div",{className:"flex-1 min-w-64",children:[t.jsx("label",{htmlFor:"search-input",className:"block text-sm font-medium text-gray-700 mb-1",children:"検索"}),t.jsx("input",{id:"search-input",type:"text",value:a,onChange:p=>r(p.target.value),placeholder:((d=e.search)==null?void 0:d.placeholder)||"検索...",className:"w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i&&e.filters.map((p,h)=>t.jsxs("div",{className:"min-w-32",children:[t.jsx("label",{htmlFor:`filter-${p.key}`,className:"block text-sm font-medium text-gray-700 mb-1",children:p.label}),t.jsx("select",{id:`filter-${p.key}`,value:s[p.key]||"",onChange:f=>n(p.key,f.target.value),className:"w-full border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white",style:{backgroundImage:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.5em 1.5em"},children:p.options.map(f=>t.jsx("option",{value:f.value,children:f.label},f.value))})]},p.key))]})})}const D2=({data:e,viewMode:r="pc",height:n=300,metrics:a})=>{const s=r==="sp"?340:800,l={top:20,right:30,bottom:60,left:70},i=s-l.left-l.right,o=n-l.top-l.bottom,d=[{key:"users",label:"ユーザー数",color:"var(--color-primary-500)"},{key:"sales",label:"売上数",color:"var(--color-info-500)"},{key:"revenue",label:"収益",color:"var(--color-success-500)"}].filter(y=>a.includes(y.key));if(d.length===0)return t.jsx("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",textAlign:"center",color:"var(--color-neutral-500)"},children:"メトリクスを選択してください"});const p=e.flatMap(y=>d.map(w=>y[w.key])),h=Math.max(...p,1),f=i/e.length*.8,b=f/d.length,j=i/e.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",overflow:"hidden"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",overflow:"auto",maxWidth:"100%"},children:t.jsx("svg",{width:s,height:n,style:{minWidth:r==="sp"?"340px":void 0},children:t.jsxs("g",{transform:`translate(${l.left}, ${l.top})`,children:[[0,1,2,3,4].map(y=>t.jsx("line",{x1:0,x2:i,y1:o*y/4,y2:o*y/4,stroke:"var(--color-neutral-200)",strokeWidth:1},y)),[0,1,2,3,4].map(y=>{const w=Math.round(h*(4-y)/4);return t.jsx("text",{x:-10,y:o*y/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:w},y)}),e.map((y,w)=>{const v=w*(i/e.length)+j/2;return t.jsxs("g",{children:[d.map((g,m)=>{const x=y[g.key]/h*o,N=v+m*b;return t.jsx("rect",{x:N,y:o-x,width:b,height:x,fill:g.color,rx:2},g.key)}),t.jsx("text",{x:v+f/2,y:o+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:y.month})]},w)})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:d.map(y=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:y.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:y.label})]},y.key))})]})},V2=()=>{const e=fr(),r=u.useRef(null),[n,a]=He(),[s,l]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),[f,b]=u.useState({period:"6months",metrics:["users","sales","revenue"],chartType:"bar"}),j=T=>{const W={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[T]||`/pages/${T}`;e(W)},[y,w]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),v=T=>{w($=>$.map(W=>W.id===T?{...W,read:!0}:W))},g=()=>{w(T=>T.map($=>({...$,read:!0})))},m=[{month:"1月",users:45,sales:120,revenue:180},{month:"2月",users:62,sales:150,revenue:210},{month:"3月",users:58,sales:140,revenue:200},{month:"4月",users:71,sales:180,revenue:260},{month:"5月",users:68,sales:170,revenue:240},{month:"6月",users:85,sales:220,revenue:320},{month:"7月",users:92,sales:240,revenue:350},{month:"8月",users:88,sales:230,revenue:330},{month:"9月",users:95,sales:250,revenue:370},{month:"10月",users:102,sales:270,revenue:400},{month:"11月",users:110,sales:290,revenue:430},{month:"12月",users:125,sales:320,revenue:480}],x=[{label:"カテゴリA",value:35,color:"var(--color-primary-500)"},{label:"カテゴリB",value:25,color:"var(--color-success-500)"},{label:"カテゴリC",value:20,color:"var(--color-warning-500)"},{label:"カテゴリD",value:20,color:"var(--color-info-500)"}],N={title:"データフィルター",collapsible:!0,defaultCollapsed:!1,showClearButton:!0,showSearchButton:!1,fields:[{name:"period",label:"表示期間",type:"select",placeholder:"期間を選択",options:[{label:"3ヶ月",value:"3months"},{label:"6ヶ月",value:"6months"},{label:"12ヶ月",value:"12months"}],width:"third"},{name:"metrics",label:"表示メトリクス",type:"multiselect",placeholder:"メトリクスを選択",options:[{label:"ユーザー数",value:"users"},{label:"売上数",value:"sales"},{label:"収益",value:"revenue"}],width:"third"},{name:"chartType",label:"グラフタイプ",type:"select",placeholder:"タイプを選択",options:[{label:"棒グラフ",value:"bar"},{label:"折れ線グラフ",value:"line"}],width:"third"}]},C=u.useMemo(()=>{const T=f.period||"6months";let $=6;return T==="3months"?$=3:T==="6months"?$=6:T==="12months"&&($=12),m.slice(-$)},[f.period]),k=u.useMemo(()=>{const T=f.metrics;return!T||Array.isArray(T)&&T.length===0?["users","sales","revenue"]:Array.isArray(T)?T:[T]},[f.metrics]),R=u.useMemo(()=>{const T=C,$=T[T.length-1],W=T.flatMap(q=>k.map(O=>q[O])),Q=$?$.revenue:0,L=W.length>0?Math.round(W.reduce((q,O)=>q+O,0)/W.length):0,A=W.length>0?Math.max(...W):0,M=T[0],D=T[T.length-1];let V=0;return M&&D&&M.revenue>0&&(V=Math.round((D.revenue-M.revenue)/M.revenue*100)),{total:Q,average:L,maximum:A,growthRate:V}},[C,k]),I=x.reduce((T,$)=>T+$.value,0),_=T=>{b(T)},P=()=>{b({period:"6months",metrics:["users","sales","revenue"],chartType:"bar"})};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:n,onViewModeChange:a}),t.jsx(Ee,{viewMode:n,currentPage:"statistics",onNavigate:j,unreadCount:y.filter(T=>!T.read).length,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:p,setSidebarCollapsed:h,notificationRef:r,notifications:y,onMarkNotificationAsRead:v,onMarkAllNotificationsAsRead:g,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[t.jsx(I2,{config:N,values:f,onChange:_,onClear:P}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-4)"},children:[t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"今月の合計"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:R.total})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-success-500), var(--color-success-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"平均値"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:R.average})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"最高値"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:R.maximum})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-info-500), var(--color-info-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"成長率"}),t.jsxs("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:[R.growthRate>0?"+":"",R.growthRate,"%"]})]})]}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:"月次推移"}),t.jsx(z,{name:"chart-bar",size:"md",style:{color:"var(--color-primary-500)"}})]}),t.jsx(D2,{data:C,viewMode:n,height:300,metrics:k})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:n==="sp"?"1fr":"repeat(auto-fit, minmax(400px, 1fr))",gap:"var(--spacing-4)"},children:t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:"カテゴリ別分布"}),t.jsx(z,{name:"chart-pie",size:"md",style:{color:"var(--color-primary-500)"}})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--spacing-4)"},children:[t.jsx("div",{style:{width:"200px",height:"200px",borderRadius:"50%",background:`conic-gradient(
                    ${x[0].color} 0% ${x[0].value}%,
                    ${x[1].color} ${x[0].value}% ${x[0].value+x[1].value}%,
                    ${x[2].color} ${x[0].value+x[1].value}% ${x[0].value+x[1].value+x[2].value}%,
                    ${x[3].color} ${x[0].value+x[1].value+x[2].value}% 100%
                  )`,position:"relative"},children:t.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"120px",height:"120px",borderRadius:"50%",background:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:I}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"合計"})]})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)",width:"100%"},children:x.map((T,$)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-2)",borderRadius:"var(--radius-md)",background:"var(--color-neutral-50)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"var(--radius-sm)",background:T.color}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:T.label})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:[T.value,"%"]})})]},$))})]})]})})]})})]})},Ku=({hideNavigation:e=!1,userName:r="ユーザー",resetUrl:n="https://example.com/reset-password?token=abc123def456",expirationHours:a=24,supportEmail:s="support@example.com",companyName:l="AppName"})=>{const[i,o]=He();return t.jsxs("div",{className:i==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:e,viewMode:i,onViewModeChange:o}),t.jsx("div",{className:"email-preview-container",children:t.jsx("div",{className:"email-template",children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",style:{width:"100%",maxWidth:"600px",margin:"0 auto",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{padding:"20px",textAlign:"center",backgroundColor:"#15346D"},children:t.jsx("h1",{style:{margin:0,color:"#ffffff",fontSize:"24px",fontWeight:"600"},children:l})})}),t.jsx("tr",{children:t.jsxs("td",{style:{padding:"40px 30px",backgroundColor:"#ffffff"},children:[t.jsx("h2",{style:{margin:"0 0 20px 0",color:"#1f2937",fontSize:"20px",fontWeight:"600"},children:"パスワード再設定のご案内"}),t.jsxs("p",{style:{margin:"0 0 20px 0",color:"#4b5563",fontSize:"16px",lineHeight:"1.6"},children:[r," 様"]}),t.jsx("p",{style:{margin:"0 0 20px 0",color:"#4b5563",fontSize:"16px",lineHeight:"1.6"},children:"以下のボタンをクリックして、新しいパスワードを設定してください。"}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",style:{width:"100%",margin:"30px 0"},children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{style:{textAlign:"center"},children:t.jsx("a",{href:n,style:{display:"inline-block",padding:"14px 40px",backgroundColor:"#15346D",color:"#ffffff",textDecoration:"none",borderRadius:"6px",fontSize:"16px",fontWeight:"600"},children:"パスワードを再設定"})})})})}),t.jsx("div",{style:{margin:"30px 0",padding:"16px",backgroundColor:"#fef3c7",borderLeft:"4px solid #f59e0b",borderRadius:"4px"},children:t.jsxs("p",{style:{margin:0,color:"#92400e",fontSize:"14px",lineHeight:"1.6"},children:[t.jsx("strong",{children:"重要:"})," このリンクは",a,"時間後に無効となります。",t.jsx("br",{}),"パスワード再設定をリクエストしていない場合は、このメールを無視してください。"]})}),t.jsx("p",{style:{margin:"20px 0 0 0",color:"#6b7280",fontSize:"14px",lineHeight:"1.6"},children:"ご不明な点がございましたら、お気軽にお問い合わせください。"})]})}),t.jsx("tr",{children:t.jsxs("td",{style:{padding:"30px 20px",textAlign:"center",backgroundColor:"#f9fafb",borderTop:"1px solid #e5e7eb"},children:[t.jsxs("p",{style:{margin:"0 0 10px 0",color:"#6b7280",fontSize:"14px"},children:[l," カスタマーサポート"]}),t.jsxs("p",{style:{margin:"0 0 10px 0",color:"#9ca3af",fontSize:"12px"},children:["お問い合わせ:"," ",t.jsx("a",{href:`mailto:${s}`,style:{color:"#15346D",textDecoration:"none"},children:s})]}),t.jsx("p",{style:{margin:"10px 0 0 0",color:"#9ca3af",fontSize:"12px"},children:"このメールに心当たりがない場合は、破棄してください。"})]})})]})})})}),t.jsx("style",{children:`
        .email-preview-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: var(--spacing-8);
        }

        .email-preview-header {
          text-align: center;
          margin-bottom: var(--spacing-8);
        }

        .email-preview-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-3);
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .email-preview-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-neutral-600);
        }

        .email-template {
          background: #f3f4f6;
          padding: var(--spacing-8);
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .email-preview-container {
            padding: var(--spacing-4);
          }

          .email-preview-title {
            font-size: var(--font-size-2xl);
          }

          .email-template {
            padding: var(--spacing-4);
          }
        }

        .force-mobile .email-preview-container {
          padding: var(--spacing-4) !important;
          max-width: 428px !important;
        }

        .force-mobile .email-template {
          padding: var(--spacing-4) !important;
        }

        .force-mobile .email-template table {
          max-width: 100% !important;
        }

        .force-mobile .email-preview-title {
          font-size: var(--font-size-xl) !important;
        }

        .force-mobile .email-preview-subtitle {
          font-size: var(--font-size-base) !important;
        }
      `})]})},B2=()=>{const e=fr(),r=u.useRef(null),[n,a]=He(),[s,l]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[p,h]=u.useState(!1),f=N=>{const k={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[N]||`/pages/${N}`;e(k)},[b,j]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),y=N=>{j(C=>C.map(k=>k.id===N?{...k,read:!0}:k))},w=()=>{j(N=>N.map(C=>({...C,read:!0})))},v={firstName:"太郎",lastName:"山田",email:"taro.yamada@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"東京都",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"正社員",occupation:"ソフトウェアエンジニア",companyName:"株式会社サンプル",annualIncome:6e6,skills:["プログラミング","デザイン"],workLocation:["東京","リモート"],desiredSalary:6e6,availableStartDate:"2025/02/01",preferredContactTime:"14:00"},g=[{id:"personal",title:"個人情報",icon:"user",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"firstName",label:"名",type:"text"},{key:"lastName",label:"姓",type:"text"},{key:"email",label:"メールアドレス",type:"email"},{key:"phone",label:"電話番号",type:"text"}]},{id:"address",title:"住所情報",icon:"location",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"postalCode",label:"郵便番号",type:"text"},{key:"prefecture",label:"都道府県",type:"badge",badgeConfig:{tokyo:{label:"東京都",variant:"info"},osaka:{label:"大阪府",variant:"info"},kyoto:{label:"京都府",variant:"info"},hokkaido:{label:"北海道",variant:"info"}}},{key:"city",label:"市区町村",type:"text"},{key:"address1",label:"町名・番地",type:"text"},{key:"address2",label:"建物名・部屋番号",type:"text"}]},{id:"employment",title:"職業情報",icon:"briefcase",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"employmentStatus",label:"雇用形態",type:"badge",badgeConfig:{fulltime:{label:"正社員",variant:"success"},parttime:{label:"パート・アルバイト",variant:"info"},contract:{label:"契約社員",variant:"warning"},freelance:{label:"フリーランス",variant:"info"},student:{label:"学生",variant:"default"},unemployed:{label:"無職",variant:"error"}}},{key:"occupation",label:"職種",type:"text"},{key:"companyName",label:"勤務先名",type:"text"},{key:"annualIncome",label:"年収",type:"currency",currencySymbol:"¥",decimals:0}]},{id:"preferences",title:"設定・希望",icon:"settings",collapsible:!0,defaultCollapsed:!1,fields:[{key:"skills",label:"スキル・得意分野",type:"list",listConfig:{style:"inline",renderItem:N=>{const C={programming:"プログラミング",design:"デザイン",marketing:"マーケティング",management:"マネジメント",sales:"営業"};return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--color-primary-100)",color:"var(--color-primary-700)",borderRadius:"var(--radius-full)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",marginRight:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:C[N]||N})}}},{key:"workLocation",label:"希望勤務地",type:"list",listConfig:{style:"inline",renderItem:N=>{const C={tokyo:"東京",osaka:"大阪",nagoya:"名古屋",fukuoka:"福岡",remote:"リモート"};return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",marginRight:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:C[N]||N})}}},{key:"desiredSalary",label:"希望年収",type:"currency",currencySymbol:"¥",decimals:0},{key:"availableStartDate",label:"就業可能日",type:"text",render:N=>N?N.replace(/-/g,"/"):"-"},{key:"preferredContactTime",label:"希望連絡時間",type:"text"}]}],m=[{id:"edit",label:"編集",icon:"edit",variant:"primary",onClick:N=>{e("/pages/data/edit")}},{id:"delete",label:"削除",icon:"delete",variant:"danger",onClick:N=>{sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"データを削除しました"})),e("/pages/data/list")},confirm:{title:"削除の確認",message:"このユーザーを削除してもよろしいですか？この操作は取り消せません。",confirmText:"削除",cancelText:"キャンセル"}}],x=[{label:"ホーム",path:"/"},{label:"データ一覧",path:"/pages/data/list"},{label:"データ詳細"}];return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:n,onViewModeChange:a}),t.jsx(Ee,{viewMode:n,currentPage:"data-detail",onNavigate:f,unreadCount:b.filter(N=>!N.read).length,showNotificationDropdown:s,setShowNotificationDropdown:l,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:p,setSidebarCollapsed:h,notificationRef:r,notifications:b,onMarkNotificationAsRead:y,onMarkAllNotificationsAsRead:w,children:t.jsx(ud,{title:"データ詳細",data:v,sections:g,actions:m,breadcrumbs:x,layout:{type:"grid",columns:2}})})]})},F2=({stats:e=[],hideNavigation:r=!0,recentActivities:n=[],quickActions:a=[],notifications:s=[],flashMessage:l={type:"success",message:"こちらはダッシュボードです"},title:i="ダッシュボード",currentPage:o="dashboard",sidebarMenuItems:c,onNavigate:d,onLogout:p,onMarkNotificationAsRead:h,onMarkAllNotificationsAsRead:f})=>{const b=u.useRef(null),[j,y]=He(),[w,v]=u.useState(!1),[g,m]=u.useState(!1),[x,N]=u.useState(!1),[C,k]=u.useState(!1),[R,I]=u.useState(s);u.useEffect(()=>{const L=()=>{const M=window.innerWidth<=768?"sp":"pc";y(M)};return L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)}},[y]);const _=L=>{if(d){d(L);return}const D=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",q={dashboard:`${D}/dashboard`,"data-list":`${D}/data/list`,statistics:`${D}/statistics`,settings:`${D}/settings`,notifications:`${D}/notifications`,login:`${D}/login`,qna:`${D}/qna`,privacy:`${D}/privacy`,terms:`${D}/terms`,commercial:`${D}/commercial`}[L]||`${D}/${L}`;window.location.href=q},P=()=>{if(p){p();return}_("login")},T=L=>{h&&h(L),I(A=>A.map(M=>M.id===L?{...M,read:!0}:M))},$=()=>{f&&f(),I(L=>L.map(A=>({...A,read:!0})))},W=[{label:"新規データ作成",icon:"plus-circle",onClick:()=>_("data-form")},{label:"データ一覧表示",icon:"table",onClick:()=>_("data-list")},{label:"統計を確認",icon:"chart-bar",onClick:()=>_("statistics")}],Q=a.length>0?a:W;return t.jsxs("div",{className:j==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:r,viewMode:j,onViewModeChange:y}),t.jsxs(Ee,{viewMode:j,currentPage:o,onNavigate:_,onLogout:P,sidebarMenuItems:c,unreadCount:R.filter(L=>!L.read).length,showNotificationDropdown:w,setShowNotificationDropdown:v,showUserMenu:g,setShowUserMenu:m,isHamburgerOpen:x,setIsHamburgerOpen:N,sidebarCollapsed:C,setSidebarCollapsed:k,notificationRef:b,notifications:R,onMarkNotificationAsRead:T,onMarkAllNotificationsAsRead:$,children:[l&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",background:l.type==="success"?"var(--color-success-50)":l.type==="error"?"var(--color-error-50)":l.type==="warning"?"var(--color-warning-50)":"var(--color-info-50)",border:`1px solid ${l.type==="success"?"var(--color-success-200)":l.type==="error"?"var(--color-error-200)":l.type==="warning"?"var(--color-warning-200)":"var(--color-info-200)"}`,borderRadius:0,color:l.type==="success"?"var(--color-success-900)":l.type==="error"?"var(--color-error-900)":l.type==="warning"?"var(--color-warning-900)":"var(--color-info-900)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:l.type==="success"?"check-circle":l.type==="error"?"exclamation":l.type==="warning"?"warning":"information-circle",style:{color:l.type==="success"?"var(--color-success-600)":l.type==="error"?"var(--color-error-600)":l.type==="warning"?"var(--color-warning-600)":"var(--color-info-600)",width:"20px",height:"20px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:l.message})]}),e.length===0&&n.length===0&&a.length===0?null:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[e.length>0&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--spacing-4)"},role:"region","aria-label":"統計情報",children:e.map((L,A)=>t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},role:"article","aria-label":`${L.label}: ${L.value}`,children:[t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:0,background:`${L.color}20`,display:"flex",alignItems:"center",justifyContent:"center"},"aria-hidden":"true",children:t.jsx(z,{name:L.icon,size:"md",style:{color:L.color}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-1)"},children:L.label}),t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:L.value})]})]},A))}),n.length>0&&t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-5)"},role:"region","aria-label":"最近のアクティビティ",children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"最近のアクティビティ"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:n.map((L,A)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-3)",borderRadius:0,background:"var(--color-neutral-50)"},role:"article",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[L.avatarUrl?t.jsx("img",{src:L.avatarUrl,alt:`${L.user}のアバター`,style:{width:"32px",height:"32px",borderRadius:0,objectFit:"cover"}}):t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:0,background:"var(--color-primary-500)",color:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},"aria-hidden":"true",children:L.user.charAt(0)}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)"},children:L.user}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:L.action})]})]}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:L.time})]},A))})]}),a.length>0&&t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-5)"},role:"region","aria-label":"クイックアクション",children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"クイックアクション"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-3)"},children:Q.map((L,A)=>t.jsxs("button",{onClick:L.onClick,style:{padding:"var(--spacing-3)",borderRadius:0,border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:M=>{M.currentTarget.style.background="var(--color-neutral-50)",M.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:M=>{M.currentTarget.style.background="var(--color-neutral-white)",M.currentTarget.style.borderColor="var(--color-neutral-300)"},"aria-label":L.label,children:[t.jsx(z,{name:L.icon,size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:L.label})]},A))})]})]})]})]})},H2=({profileData:e,notifications:r,currentPage:n="settings",onSave:a,onNavigate:s,onLogout:l,onMarkNotificationAsRead:i,onMarkAllNotificationsAsRead:o,flashMessage:c=null,initialViewMode:d="pc",hideNavigation:p=!0})=>{const h=u.useRef(null),[f,b]=He(),[j,y]=u.useState(!1),[w,v]=u.useState(!1),[g,m]=u.useState(!1),[x,N]=u.useState(!1),[C,k]=u.useState(!1),[R,I]=u.useState(c),_={username:"",email:"",role:"",displayName:"",phone:"",department:""},[P,T]=u.useState(e||_),[$,W]=u.useState({...P}),Q=[{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}],[L,A]=u.useState(r||Q),M=B=>{if(s){s(B);return}const ge=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",Ye={dashboard:`${ge}/dashboard`,"data-list":`${ge}/data/list`,statistics:`${ge}/statistics`,settings:`${ge}/settings`,notifications:`${ge}/notifications`,login:`${ge}/login`,qna:`${ge}/qna`,privacy:`${ge}/privacy`,terms:`${ge}/terms`,commercial:`${ge}/commercial`}[B]||`${ge}/${B}`;window.location.href=Ye},D=()=>{if(l){l();return}M("login")},V=B=>{i?i(B):A(te=>te.map(fe=>fe.id===B?{...fe,read:!0}:fe))},q=()=>{o?o():A(B=>B.map(te=>({...te,read:!0})))},O=()=>{W({...P}),k(!0)},X=async()=>{if(a)try{await a($),T({...$}),k(!1),c||(I("プロフィールを保存しました"),setTimeout(()=>I(null),3e3))}catch(B){console.error("Save failed:",B),I("保存に失敗しました"),setTimeout(()=>I(null),3e3)}else T({...$}),k(!1),I("プロフィールを保存しました"),setTimeout(()=>I(null),3e3)},G=()=>{W({...P}),k(!1)},ee=(B,te)=>{W(fe=>({...fe,[B]:te}))};return t.jsxs("div",{className:f==="sp"?"force-mobile":"",children:[t.jsx(we,{hide:p,viewMode:f,onViewModeChange:b}),t.jsx(Ee,{viewMode:f,currentPage:n,onNavigate:M,onLogout:D,unreadCount:L.filter(B=>!B.read).length,showNotificationDropdown:j,setShowNotificationDropdown:y,showUserMenu:w,setShowUserMenu:v,isHamburgerOpen:g,setIsHamburgerOpen:m,sidebarCollapsed:x,setSidebarCollapsed:N,notificationRef:h,notifications:L,onMarkNotificationAsRead:V,onMarkAllNotificationsAsRead:q,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"1000px",margin:"0 auto"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-6)",color:"var(--color-neutral-900)"},children:"設定"}),R&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:0,color:"var(--color-success-700)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"check-circle",style:{width:"20px",height:"20px"}}),R]}),t.jsxs("div",{style:{marginBottom:"var(--spacing-8)",padding:"var(--spacing-6)",backgroundColor:"var(--color-neutral-white)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:"プロフィール設定"}),!C&&t.jsxs("button",{className:"btn btn--primary",onClick:O,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(z,{name:"edit",style:{width:"16px",height:"16px"}}),"編集"]})]}),C?t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:f==="sp"?"var(--spacing-2)":"var(--spacing-1_5)"},children:[t.jsx(_e,{label:"表示名",name:"displayName",value:$.displayName,onChange:B=>ee("displayName",B.target.value),placeholder:"表示名を入力"}),t.jsx(_e,{label:"ユーザー名",name:"username",value:$.username,onChange:B=>ee("username",B.target.value),placeholder:"ユーザー名を入力"}),t.jsx(_e,{label:"メールアドレス",name:"email",type:"email",value:$.email,onChange:B=>ee("email",B.target.value),placeholder:"メールアドレスを入力"}),t.jsx(_e,{label:"電話番号",name:"phone",value:$.phone,onChange:B=>ee("phone",B.target.value),placeholder:"電話番号を入力"}),t.jsx(_e,{label:"部署",name:"department",value:$.department,onChange:B=>ee("department",B.target.value),placeholder:"部署を入力"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end",marginTop:"var(--spacing-2)"},children:[t.jsx(br,{variant:"text",onClick:G,children:"キャンセル"}),t.jsx(br,{variant:"primary",onClick:X,children:"保存"})]})]}):t.jsxs("div",{style:{color:"var(--color-neutral-600)"},children:[t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"表示名:"})," ",P.displayName]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"ユーザー名:"})," ",P.username]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"メールアドレス:"})," ",P.email]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"電話番号:"})," ",P.phone]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"部署:"})," ",P.department]}),t.jsxs("p",{children:[t.jsx("strong",{children:"役割:"})," ",P.role]})]})]})]})})]})},W2=({notifications:e=[],unreadCount:r=0,onMarkAsRead:n,onMarkAllAsRead:a,onNotificationClick:s,onNavigate:l,onLogout:i,currentPage:o="notifications",initialViewMode:c,pagination:d,onLoadMore:p,isLoading:h=!1,emptyMessage:f="通知はありません",enableTypeFilter:b=!1,enableStatusFilter:j=!1})=>{const y=u.useRef(null),[w,v]=He(),[g,m]=u.useState(!1),[x,N]=u.useState(!1),[C,k]=u.useState(!1),[R,I]=u.useState(!1),[_,P]=u.useState(e),[T,$]=u.useState(new Set),[W,Q]=u.useState(null),[L,A]=u.useState("all");re.useEffect(()=>{P(e)},[e]);const M=async B=>{P(te=>te.map(fe=>fe.id===B?{...fe,read:!0}:fe)),$(te=>new Set(te).add(B));try{n&&await n(B)}catch(te){P(e),console.error("Failed to mark notification as read:",te)}finally{$(te=>{const fe=new Set(te);return fe.delete(B),fe})}},D=async()=>{const B=[..._];P(te=>te.map(fe=>({...fe,read:!0})));try{a&&await a()}catch(te){P(B),console.error("Failed to mark all notifications as read:",te)}},V=B=>{s&&s(B),B.read||M(B.id)},q=()=>{if(i){i();return}handleNavigate("login")},O=(B="info")=>{switch(B){case"success":return"check-circle";case"warning":return"warning";case"error":return"exclamation";default:return"info"}},X=(B="info")=>{switch(B){case"success":return"var(--color-success-600)";case"warning":return"var(--color-warning-600)";case"error":return"var(--color-error-600)";default:return"var(--color-primary-600)"}},G=_.filter(B=>!(b&&W&&B.type!==W||j&&(L==="read"&&!B.read||L==="unread"&&B.read))),ee=r||_.filter(B=>!B.read).length;return t.jsxs("div",{className:w==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:w,onViewModeChange:v}),t.jsx(Ee,{viewMode:w,currentPage:o,onNavigate:l,unreadCount:ee,showNotificationDropdown:g,setShowNotificationDropdown:m,showUserMenu:x,setShowUserMenu:N,isHamburgerOpen:C,setIsHamburgerOpen:k,sidebarCollapsed:R,setSidebarCollapsed:I,notificationRef:y,notifications:_,onMarkNotificationAsRead:M,onMarkAllNotificationsAsRead:D,onLogout:q,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"900px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-6)",flexWrap:"wrap",gap:"var(--spacing-4)"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"通知一覧"}),_.some(B=>!B.read)&&t.jsxs("button",{onClick:D,disabled:h,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-4)",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:h?"not-allowed":"pointer",transition:"background-color 0.2s",opacity:h?.6:1},onMouseEnter:B=>{h||(B.currentTarget.style.backgroundColor="var(--color-primary-600)")},onMouseLeave:B=>{B.currentTarget.style.backgroundColor="var(--color-primary-500)"},children:[t.jsx(z,{name:"check",style:{width:"16px",height:"16px"}}),"全て既読にする"]})]}),(b||j)&&t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",marginBottom:"var(--spacing-6)",flexWrap:"wrap"},children:[b&&t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[t.jsx("button",{onClick:()=>Q(null),style:{padding:"var(--spacing-2) var(--spacing-3)",background:W===null?"var(--color-primary-500)":"var(--color-neutral-100)",color:W===null?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"全て"}),["info","success","warning","error"].map(B=>t.jsx("button",{onClick:()=>Q(B),style:{padding:"var(--spacing-2) var(--spacing-3)",background:W===B?"var(--color-primary-500)":"var(--color-neutral-100)",color:W===B?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:B},B))]}),j&&t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:["all","read","unread"].map(B=>t.jsx("button",{onClick:()=>A(B),style:{padding:"var(--spacing-2) var(--spacing-3)",background:L===B?"var(--color-primary-500)":"var(--color-neutral-100)",color:L===B?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:B==="all"?"全て":B==="read"?"既読":"未読"},B))})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:G.length===0?t.jsxs("div",{style:{padding:"var(--spacing-8)",textAlign:"center",backgroundColor:"var(--color-neutral-50)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx(z,{name:"info",style:{width:"48px",height:"48px",color:"var(--color-neutral-400)",margin:"0 auto var(--spacing-4)"}}),t.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--color-neutral-600)",margin:0},children:f})]}):G.map(B=>t.jsxs("div",{onClick:()=>V(B),style:{padding:"var(--spacing-5)",backgroundColor:B.read?"var(--color-neutral-50)":"var(--color-neutral-white)",borderRadius:0,border:"1px solid var(--color-neutral-200)",display:"flex",gap:"var(--spacing-4)",alignItems:"start",boxShadow:B.read?"none":"var(--shadow-sm)",position:"relative",cursor:s?"pointer":"default",transition:"transform 0.2s, box-shadow 0.2s",opacity:T.has(B.id)?.6:1},onMouseEnter:te=>{s&&!B.read&&(te.currentTarget.style.transform="translateY(-2px)",te.currentTarget.style.boxShadow="var(--shadow-md)")},onMouseLeave:te=>{s&&(te.currentTarget.style.transform="translateY(0)",te.currentTarget.style.boxShadow=B.read?"none":"var(--shadow-sm)")},children:[t.jsx(z,{name:O(B.type),style:{width:"24px",height:"24px",color:X(B.type),flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"var(--spacing-2)",gap:"var(--spacing-3)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:B.title}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)",whiteSpace:"nowrap",flexShrink:0},children:B.time})]}),t.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)",marginBottom:B.read?0:"var(--spacing-3)",margin:0},children:B.message}),!B.read&&t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"var(--spacing-3)"},children:t.jsxs("button",{onClick:te=>{te.stopPropagation(),M(B.id)},disabled:T.has(B.id),style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-1) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",border:"1px solid var(--color-neutral-300)",borderRadius:0,fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:T.has(B.id)?"not-allowed":"pointer",transition:"all 0.2s"},onMouseEnter:te=>{T.has(B.id)||(te.currentTarget.style.backgroundColor="var(--color-neutral-200)",te.currentTarget.style.borderColor="var(--color-neutral-400)")},onMouseLeave:te=>{te.currentTarget.style.backgroundColor="var(--color-neutral-100)",te.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(z,{name:"check",style:{width:"12px",height:"12px"}}),"既読にする"]})})]})]},B.id))}),d&&d.lastPage>1&&t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-6)",padding:"var(--spacing-4)"},children:[t.jsx("button",{onClick:()=>p&&p(d.currentPage-1),disabled:d.currentPage===1||h,style:{padding:"var(--spacing-2) var(--spacing-4)",background:d.currentPage===1?"var(--color-neutral-100)":"var(--color-primary-500)",color:d.currentPage===1?"var(--color-neutral-400)":"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:d.currentPage===1||h?"not-allowed":"pointer"},children:"前へ"}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:[d.currentPage," / ",d.lastPage]}),t.jsx("button",{onClick:()=>p&&p(d.currentPage+1),disabled:d.currentPage===d.lastPage||h,style:{padding:"var(--spacing-2) var(--spacing-4)",background:d.currentPage===d.lastPage?"var(--color-neutral-100)":"var(--color-primary-500)",color:d.currentPage===d.lastPage?"var(--color-neutral-400)":"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:d.currentPage===d.lastPage||h?"not-allowed":"pointer"},children:"次へ"})]}),h&&t.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-4)",color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"読み込み中..."})]})})]})},O2=({label:e,value:r,icon:n,iconColor:a,iconBackground:s,trend:l,subtitle:i,format:o,onClick:c})=>{const d=o?o(r):r;return t.jsx("div",{className:`stat-metric-card ${c?"stat-metric-card--clickable":""}`,onClick:c,role:c?"button":void 0,tabIndex:c?0:void 0,onKeyPress:c?p=>{(p.key==="Enter"||p.key===" ")&&c()}:void 0,children:t.jsxs("div",{className:"stat-metric-card__content",children:[t.jsxs("div",{className:"stat-metric-card__text",children:[t.jsx("p",{className:"stat-metric-card__label",children:e}),t.jsx("p",{className:"stat-metric-card__value",children:d}),i&&t.jsx("p",{className:"stat-metric-card__subtitle",children:i}),l&&t.jsxs("div",{className:`stat-metric-card__trend stat-metric-card__trend--${l.isPositive?"positive":"negative"}`,children:[t.jsx(z,{name:l.direction==="up"?"arrow-up":l.direction==="down"?"arrow-down":"minus",size:"xs"}),t.jsxs("span",{className:"stat-metric-card__trend-value",children:[l.value>0?"+":"",l.value,"%"]}),l.label&&t.jsx("span",{className:"stat-metric-card__trend-label",children:l.label})]})]}),n&&t.jsx("div",{className:"stat-metric-card__icon",style:{backgroundColor:s||"var(--color-primary-100)",color:a||"var(--color-primary-700)"},children:t.jsx(z,{name:n,size:"lg"})})]})})},U2=re.memo(O2),q2=({filters:e,onFilterChange:r,onApplyFilters:n,onResetFilters:a,collapsed:s=!1,onToggleCollapsed:l,className:i=""})=>{const o=(d,p)=>{r(d,p)},c=d=>{var p,h,f,b;switch(d.type){case"date-range":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsxs("div",{className:"filter-panel__date-range",children:[t.jsx("input",{type:"date",className:"filter-panel__input filter-panel__input--date",value:((p=d.value)==null?void 0:p.startDate)||"",onChange:j=>o(d.id,{...d.value,startDate:j.target.value}),placeholder:"開始日"}),t.jsx("span",{className:"filter-panel__date-separator",children:"〜"}),t.jsx("input",{type:"date",className:"filter-panel__input filter-panel__input--date",value:((h=d.value)==null?void 0:h.endDate)||"",onChange:j=>o(d.id,{...d.value,endDate:j.target.value}),placeholder:"終了日"})]})]},d.id);case"select":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsxs("select",{className:"filter-panel__select",value:d.value||"",onChange:j=>o(d.id,j.target.value),children:[t.jsx("option",{value:"",children:d.placeholder||"選択してください"}),(f=d.options)==null?void 0:f.map(j=>t.jsx("option",{value:j.value,children:j.label},j.value))]})]},d.id);case"multi-select":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsx("div",{className:"filter-panel__multi-select",children:(b=d.options)==null?void 0:b.map(j=>t.jsxs("label",{className:"filter-panel__checkbox-label",children:[t.jsx("input",{type:"checkbox",className:"filter-panel__checkbox",checked:Array.isArray(d.value)&&d.value.includes(j.value),onChange:y=>{const w=Array.isArray(d.value)?d.value:[],v=y.target.checked?[...w,j.value]:w.filter(g=>g!==j.value);o(d.id,v)}}),t.jsx("span",{children:j.label})]},j.value))})]},d.id);case"checkbox":return t.jsx("div",{className:"filter-panel__field",children:t.jsxs("label",{className:"filter-panel__checkbox-label filter-panel__checkbox-label--single",children:[t.jsx("input",{type:"checkbox",className:"filter-panel__checkbox",checked:!!d.value,onChange:j=>o(d.id,j.target.checked)}),t.jsx("span",{children:d.label})]})},d.id);case"text":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsx("input",{type:"text",className:"filter-panel__input",value:d.value||"",onChange:j=>o(d.id,j.target.value),placeholder:d.placeholder})]},d.id);default:return null}};return t.jsxs("div",{className:`filter-panel ${s?"filter-panel--collapsed":""} ${i}`,children:[t.jsxs("div",{className:"filter-panel__header",children:[t.jsxs("h3",{className:"filter-panel__title",children:[t.jsx(z,{name:"filter",size:"sm"}),t.jsx("span",{children:"フィルター"})]}),l&&t.jsx("button",{className:"filter-panel__toggle",onClick:l,"aria-label":s?"フィルターを表示":"フィルターを非表示",children:t.jsx(z,{name:s?"chevron-down":"chevron-up",size:"sm"})})]}),!s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"filter-panel__body",children:e.map(c)}),t.jsxs("div",{className:"filter-panel__actions",children:[a&&t.jsx(br,{variant:"text",size:"sm",onClick:a,icon:"refresh",children:"リセット"}),n&&t.jsx(br,{variant:"primary",size:"sm",onClick:n,icon:"check",children:"適用"})]})]})]})},Q2=re.memo(q2),Y2=({chart:e,className:r=""})=>!e.visible&&e.visible!==void 0?null:t.jsxs("div",{className:`statistics-chart-card ${r}`,children:[t.jsxs("div",{className:"statistics-chart-card__header",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"statistics-chart-card__title",children:e.title}),e.subtitle&&t.jsx("p",{className:"statistics-chart-card__subtitle",children:e.subtitle})]}),e.showRefreshButton&&e.onRefresh&&t.jsx("button",{className:"statistics-chart-card__refresh-button",onClick:e.onRefresh,disabled:e.loading,children:"↻"})]}),t.jsx("div",{className:"statistics-chart-card__content",children:e.loading?t.jsxs("div",{className:"statistics-chart-card__loading",children:[t.jsx("div",{className:"spinner"}),t.jsx("p",{children:"読み込み中..."})]}):t.jsx("div",{className:"statistics-chart-card__chart",children:t.jsxs("div",{style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-neutral-50)",borderRadius:"var(--radius-md)",color:"var(--color-neutral-600)"},children:[e.chartType," Chart: ",e.title]})})}),e.description&&t.jsx("div",{className:"statistics-chart-card__description",children:t.jsx("p",{children:e.description})}),e.lastUpdated&&t.jsx("div",{className:"statistics-chart-card__metadata",children:t.jsxs("span",{className:"statistics-chart-card__last-updated",children:["最終更新: ",new Date(e.lastUpdated).toLocaleString("ja-JP")]})})]}),K2=re.memo(Y2),X2=({title:e,subtitle:r,metrics:n=[],charts:a,filters:s=[],exportConfig:l,onFilterChange:i,onApplyFilters:o,onResetFilters:c,onExport:d,viewMode:p="pc",onNavigate:h=()=>{},onLogout:f,showFilters:b=!0,showExport:j=!0,showMetrics:y=!0,chartColumns:w=1,loading:v=!1,error:g,className:m="",breadcrumbs:x,headerActions:N})=>{const[C,k]=u.useState(p),[R,I]=u.useState(!1),_=Q=>{if(h){h(Q);return}const M=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",V={dashboard:`${M}/dashboard`,"data-list":`${M}/data/list`,statistics:`${M}/statistics`,settings:`${M}/settings`,notifications:`${M}/notifications`,login:`${M}/login`,qna:`${M}/qna`,privacy:`${M}/privacy`,terms:`${M}/terms`,commercial:`${M}/commercial`}[Q]||`${M}/${Q}`;window.location.href=V},P=()=>{if(f){f();return}_("login")},T=Q=>{d?d(Q):l!=null&&l.onExport&&l.onExport(Q)},$=[...a].sort((Q,L)=>{const A=Q.order??0,M=L.order??0;return A-M}),W=()=>v?t.jsxs("div",{className:"statistics-page__loading",children:[t.jsx("div",{className:"statistics-page__spinner",children:t.jsx(z,{name:"refresh",size:"xl"})}),t.jsx("p",{children:"データを読み込んでいます..."})]}):g?t.jsxs("div",{className:"statistics-page__error",children:[t.jsx(z,{name:"exclamation",size:"xl"}),t.jsx("h3",{children:"エラーが発生しました"}),t.jsx("p",{children:g})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"statistics-page__header",children:[t.jsxs("div",{className:"statistics-page__header-content",children:[t.jsx("h1",{className:"statistics-page__title",children:e}),r&&t.jsx("p",{className:"statistics-page__subtitle",children:r})]}),j&&((l==null?void 0:l.enableCsv)||(l==null?void 0:l.enablePng)||(l==null?void 0:l.enablePdf))&&t.jsxs("div",{className:"statistics-page__header-actions",children:[t.jsxs("div",{className:"statistics-page__export-group",children:[l.enableCsv&&t.jsx(br,{variant:"secondary",size:"sm",onClick:()=>T("csv"),icon:"download",children:"CSV"}),l.enablePng&&t.jsx(br,{variant:"secondary",size:"sm",onClick:()=>T("png"),icon:"image",children:"PNG"}),l.enablePdf&&t.jsx(br,{variant:"secondary",size:"sm",onClick:()=>T("pdf"),icon:"file",children:"PDF"})]}),N==null?void 0:N.map((Q,L)=>t.jsx(br,{variant:Q.variant||"secondary",size:"sm",onClick:Q.onClick,icon:Q.icon,children:Q.label},L))]})]}),b&&s.length>0&&i&&t.jsx(Q2,{filters:s,onFilterChange:i,onApplyFilters:o,onResetFilters:c,collapsed:R,onToggleCollapsed:()=>I(!R)}),y&&n.length>0&&t.jsx("div",{className:"statistics-page__metrics",children:n.map(Q=>t.jsx(U2,{...Q},Q.id))}),a.length>0&&t.jsx("div",{className:"statistics-page__charts",style:{gridTemplateColumns:w>1?`repeat(${w}, 1fr)`:"1fr"},children:$.map(Q=>t.jsx(K2,{chart:Q},Q.id))}),a.length===0&&t.jsxs("div",{className:"statistics-page__empty",children:[t.jsx(z,{name:"chart-bar",size:"xl"}),t.jsx("h3",{children:"統計データがありません"}),t.jsx("p",{children:"表示する統計データがありません。"})]})]});return t.jsxs("div",{className:C==="sp"?"force-mobile":"",children:[t.jsx(we,{viewMode:C,onViewModeChange:k}),t.jsx(Ee,{viewMode:C,currentPage:"statistics",onNavigate:_,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:P,children:t.jsx("div",{className:`statistics-page ${m}`,children:W()})})]})};function G2(){const e=fr();return u.useEffect(()=>{const r=sessionStorage.getItem("redirectPath");r&&(sessionStorage.removeItem("redirectPath"),e(r,{replace:!0}))},[e]),null}function J2(){const{pathname:e}=xn();return u.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Z2(){const e=[{path:"/",label:"ホーム",icon:"home"},{path:"/pages/login",label:"ページ",icon:"document"},{path:"/components",label:"構成要素",icon:"cube"}];return t.jsx(Vg,{children:t.jsxs("div",{className:"app",children:[t.jsx("style",{children:`
          .nav-header {
            background: var(--color-neutral-white);
            border-bottom: 1px solid var(--color-neutral-200);
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 var(--spacing-4);
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
          }

          .nav-logo {
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-bold);
            color: var(--color-primary-700);
            text-decoration: none;
            transition: color 0.2s;
            white-space: nowrap;
            margin-right: var(--spacing-4);
          }

          .nav-logo:hover {
            color: var(--color-primary-800);
          }

          .nav-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: var(--spacing-1);
            flex-wrap: nowrap;
          }

          .nav-link {
            display: flex;
            align-items: center;
            gap: var(--spacing-1);
            padding: var(--spacing-2) var(--spacing-3);
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--color-neutral-600);
            font-weight: var(--font-weight-medium);
            transition: all 0.2s;
            font-size: var(--font-size-xs);
            white-space: nowrap;
          }

          .nav-link:hover {
            background: var(--color-neutral-100);
            color: var(--color-neutral-900);
          }

          .nav-link.active {
            background: var(--color-primary-100);
            color: var(--color-primary-700);
          }


          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
          }
        `}),t.jsx("nav",{className:"nav-header",children:t.jsxs("div",{className:"nav-container",children:[t.jsx(Pu,{to:"/",className:"nav-logo",children:"UI Components"}),t.jsx("ul",{className:"nav-links",children:e.map(r=>t.jsx("li",{children:t.jsxs(Pu,{to:r.path,className:({isActive:n})=>`nav-link ${n?"active":""}`,end:r.path==="/",children:[t.jsx(z,{name:r.icon,className:"w-4 h-4"}),r.label]})},r.path))})]})}),t.jsxs("main",{className:"main-content",children:[t.jsx(G2,{}),t.jsx(J2,{}),t.jsxs(Eg,{children:[t.jsx(ne,{path:"/",element:t.jsx(Ug,{})}),t.jsx(ne,{path:"/pages",element:t.jsx(z2,{})}),t.jsx(ne,{path:"/pages/login",element:t.jsx(Ko,{})}),t.jsx(ne,{path:"/pages/signup",element:t.jsx(Jo,{})}),t.jsx(ne,{path:"/pages/signup-confirm",element:t.jsx(Zo,{})}),t.jsx(ne,{path:"/pages/signup-complete",element:t.jsx(ec,{})}),t.jsx(ne,{path:"/pages/forgot-password",element:t.jsx(Xo,{})}),t.jsx(ne,{path:"/pages/reset-password",element:t.jsx(Go,{})}),t.jsx(ne,{path:"/pages/password-reset-email",element:t.jsx(Ku,{})}),t.jsx(ne,{path:"/pages/dashboard",element:t.jsx(A2,{})}),t.jsx(ne,{path:"/pages/statistics",element:t.jsx(V2,{})}),t.jsx(ne,{path:"/pages/settings",element:t.jsx(L2,{})}),t.jsx(ne,{path:"/pages/notifications",element:t.jsx(_2,{})}),t.jsx(ne,{path:"/pages/data/list",element:t.jsx($2,{})}),t.jsx(ne,{path:"/pages/data/add",element:t.jsx(Pl,{})}),t.jsx(ne,{path:"/pages/data/edit",element:t.jsx(Pl,{})}),t.jsx(ne,{path:"/pages/data/detail",element:t.jsx(B2,{})}),t.jsx(ne,{path:"/pages/error-404",element:t.jsx(tc,{})}),t.jsx(ne,{path:"/pages/error-500",element:t.jsx(rc,{})}),t.jsx(ne,{path:"/pages/maintenance",element:t.jsx(nc,{})}),t.jsx(ne,{path:"/pages/qna",element:t.jsx(ic,{})}),t.jsx(ne,{path:"/pages/terms",element:t.jsx(sc,{})}),t.jsx(ne,{path:"/pages/privacy",element:t.jsx(lc,{})}),t.jsx(ne,{path:"/pages/commercial",element:t.jsx(ac,{})}),t.jsx(ne,{path:"/templates/login",element:t.jsx(Ko,{})}),t.jsx(ne,{path:"/templates/signup",element:t.jsx(Jo,{})}),t.jsx(ne,{path:"/templates/signup-confirm",element:t.jsx(Zo,{})}),t.jsx(ne,{path:"/templates/signup-complete",element:t.jsx(ec,{})}),t.jsx(ne,{path:"/templates/forgot-password",element:t.jsx(Xo,{})}),t.jsx(ne,{path:"/templates/reset-password",element:t.jsx(Go,{})}),t.jsx(ne,{path:"/templates/password-reset-email",element:t.jsx(Ku,{})}),t.jsx(ne,{path:"/templates/dashboard",element:t.jsx(F2,{})}),t.jsx(ne,{path:"/templates/settings",element:t.jsx(H2,{})}),t.jsx(ne,{path:"/templates/notifications",element:t.jsx(W2,{})}),t.jsx(ne,{path:"/templates/statistics",element:t.jsx(X2,{title:"統計",charts:[]})}),t.jsx(ne,{path:"/templates/data/list",element:t.jsx(rh,{title:"データ一覧",columns:[],data:[]})}),t.jsx(ne,{path:"/templates/data/add",element:t.jsx(oc,{title:"データ作成",validation:{},onSubmit:async()=>{}})}),t.jsx(ne,{path:"/templates/data/edit",element:t.jsx(oc,{title:"データ編集",validation:{},onSubmit:async()=>{}})}),t.jsx(ne,{path:"/templates/data/detail",element:t.jsx(ud,{title:"データ詳細",data:{}})}),t.jsx(ne,{path:"/templates/error-404",element:t.jsx(tc,{})}),t.jsx(ne,{path:"/templates/error-500",element:t.jsx(rc,{})}),t.jsx(ne,{path:"/templates/maintenance",element:t.jsx(nc,{})}),t.jsx(ne,{path:"/templates/qna",element:t.jsx(ic,{})}),t.jsx(ne,{path:"/templates/terms",element:t.jsx(sc,{})}),t.jsx(ne,{path:"/templates/privacy",element:t.jsx(lc,{})}),t.jsx(ne,{path:"/templates/commercial",element:t.jsx(ac,{})}),t.jsx(ne,{path:"/components",element:t.jsx(qg,{})}),t.jsx(ne,{path:"/buttons",element:t.jsx(Yg,{})}),t.jsx(ne,{path:"/forms",element:t.jsx(Jg,{})}),t.jsx(ne,{path:"/messages",element:t.jsx(Uu,{})}),t.jsx(ne,{path:"/messages-notifications",element:t.jsx(Uu,{})}),t.jsx(ne,{path:"/tables",element:t.jsx(qu,{})}),t.jsx(ne,{path:"/tables-graphs",element:t.jsx(qu,{})}),t.jsx(ne,{path:"/navigation",element:t.jsx(g2,{})}),t.jsx(ne,{path:"/layout",element:t.jsx(v2,{})}),t.jsx(ne,{path:"/icons",element:t.jsx(Zg,{})})]})]}),t.jsx("footer",{style:{textAlign:"center",padding:"var(--spacing-8)",color:"var(--color-neutral-600)",borderTop:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-white)"},children:t.jsx("p",{children:"UI Components Library"})})]})})}Oi.createRoot(document.getElementById("root")).render(t.jsx(re.StrictMode,{children:t.jsx(Z2,{})}));
