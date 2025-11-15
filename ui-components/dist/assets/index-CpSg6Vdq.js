function hg(e,a){for(var l=0;l<a.length;l++){const n=a[l];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();function th(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},Fi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=Symbol.for("react.transitional.element"),fg=Symbol.for("react.fragment");function nh(e,a,l){var n=null;if(l!==void 0&&(n=""+l),a.key!==void 0&&(n=""+a.key),"key"in a){l={};for(var r in a)r!=="key"&&(l[r]=a[r])}else l=a;return a=l.ref,{$$typeof:pg,type:e,key:n,ref:a!==void 0?a:null,props:l}}Fi.Fragment=fg;Fi.jsx=nh;Fi.jsxs=nh;lh.exports=Fi;var t=lh.exports,rh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=Symbol.for("react.transitional.element"),gg=Symbol.for("react.portal"),vg=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),bg=Symbol.for("react.profiler"),yg=Symbol.for("react.consumer"),jg=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),Ng=Symbol.for("react.suspense"),Sg=Symbol.for("react.memo"),sh=Symbol.for("react.lazy"),zg=Symbol.for("react.activity"),t0=Symbol.iterator;function Cg(e){return e===null||typeof e!="object"?null:(e=t0&&e[t0]||e["@@iterator"],typeof e=="function"?e:null)}var ih={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oh=Object.assign,ch={};function cr(e,a,l){this.props=e,this.context=a,this.refs=ch,this.updater=l||ih}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dh(){}dh.prototype=cr.prototype;function Wd(e,a,l){this.props=e,this.context=a,this.refs=ch,this.updater=l||ih}var Gd=Wd.prototype=new dh;Gd.constructor=Wd;oh(Gd,cr.prototype);Gd.isPureReactComponent=!0;var l0=Array.isArray;function jc(){}var Ke={H:null,A:null,T:null,S:null},uh=Object.prototype.hasOwnProperty;function Xd(e,a,l){var n=l.ref;return{$$typeof:Yd,type:e,key:a,ref:n!==void 0?n:null,props:l}}function kg(e,a){return Xd(e.type,a,e.props)}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yd}function Mg(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return a[l]})}var n0=/\/+/g;function Ao(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Mg(""+e.key):a.toString(36)}function Rg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(jc,jc):(e.status="pending",e.then(function(a){e.status==="pending"&&(e.status="fulfilled",e.value=a)},function(a){e.status==="pending"&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Rn(e,a,l,n,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Yd:case gg:i=!0;break;case sh:return i=e._init,Rn(i(e._payload),a,l,n,r)}}if(i)return r=r(e),i=n===""?"."+Ao(e,0):n,l0(r)?(l="",i!=null&&(l=i.replace(n0,"$&/")+"/"),Rn(r,a,l,"",function(d){return d})):r!=null&&(Qd(r)&&(r=kg(r,l+(r.key==null||e&&e.key===r.key?"":(""+r.key).replace(n0,"$&/")+"/")+i)),a.push(r)),1;i=0;var o=n===""?".":n+":";if(l0(e))for(var c=0;c<e.length;c++)n=e[c],s=o+Ao(n,c),i+=Rn(n,a,l,s,r);else if(c=Cg(e),typeof c=="function")for(e=c.call(e),c=0;!(n=e.next()).done;)n=n.value,s=o+Ao(n,c++),i+=Rn(n,a,l,s,r);else if(s==="object"){if(typeof e.then=="function")return Rn(Rg(e),a,l,n,r);throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return i}function Ds(e,a,l){if(e==null)return e;var n=[],r=0;return Rn(e,n,"","",function(s){return a.call(l,s,r++)}),n}function Tg(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var r0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ag={map:Ds,forEach:function(e,a,l){Ds(e,function(){a.apply(this,arguments)},l)},count:function(e){var a=0;return Ds(e,function(){a++}),a},toArray:function(e){return Ds(e,function(a){return a})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Activity=zg;he.Children=Ag;he.Component=cr;he.Fragment=vg;he.Profiler=bg;he.PureComponent=Wd;he.StrictMode=xg;he.Suspense=Ng;he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ke;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ke.H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cacheSignal=function(){return null};he.cloneElement=function(e,a,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=oh({},e.props),r=e.key;if(a!=null)for(s in a.key!==void 0&&(r=""+a.key),a)!uh.call(a,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&a.ref===void 0||(n[s]=a[s]);var s=arguments.length-2;if(s===1)n.children=l;else if(1<s){for(var i=Array(s),o=0;o<s;o++)i[o]=arguments[o+2];n.children=i}return Xd(e.type,r,n)};he.createContext=function(e){return e={$$typeof:jg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:yg,_context:e},e};he.createElement=function(e,a,l){var n,r={},s=null;if(a!=null)for(n in a.key!==void 0&&(s=""+a.key),a)uh.call(a,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(r[n]=a[n]);var i=arguments.length-2;if(i===1)r.children=l;else if(1<i){for(var o=Array(i),c=0;c<i;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)r[n]===void 0&&(r[n]=i[n]);return Xd(e,s,r)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:wg,render:e}};he.isValidElement=Qd;he.lazy=function(e){return{$$typeof:sh,_payload:{_status:-1,_result:e},_init:Tg}};he.memo=function(e,a){return{$$typeof:Sg,type:e,compare:a===void 0?null:a}};he.startTransition=function(e){var a=Ke.T,l={};Ke.T=l;try{var n=e(),r=Ke.S;r!==null&&r(l,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(jc,r0)}catch(s){r0(s)}finally{a!==null&&l.types!==null&&(a.types=l.types),Ke.T=a}};he.unstable_useCacheRefresh=function(){return Ke.H.useCacheRefresh()};he.use=function(e){return Ke.H.use(e)};he.useActionState=function(e,a,l){return Ke.H.useActionState(e,a,l)};he.useCallback=function(e,a){return Ke.H.useCallback(e,a)};he.useContext=function(e){return Ke.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e,a){return Ke.H.useDeferredValue(e,a)};he.useEffect=function(e,a){return Ke.H.useEffect(e,a)};he.useEffectEvent=function(e){return Ke.H.useEffectEvent(e)};he.useId=function(){return Ke.H.useId()};he.useImperativeHandle=function(e,a,l){return Ke.H.useImperativeHandle(e,a,l)};he.useInsertionEffect=function(e,a){return Ke.H.useInsertionEffect(e,a)};he.useLayoutEffect=function(e,a){return Ke.H.useLayoutEffect(e,a)};he.useMemo=function(e,a){return Ke.H.useMemo(e,a)};he.useOptimistic=function(e,a){return Ke.H.useOptimistic(e,a)};he.useReducer=function(e,a,l){return Ke.H.useReducer(e,a,l)};he.useRef=function(e){return Ke.H.useRef(e)};he.useState=function(e){return Ke.H.useState(e)};he.useSyncExternalStore=function(e,a,l){return Ke.H.useSyncExternalStore(e,a,l)};he.useTransition=function(){return Ke.H.useTransition()};he.version="19.2.0";rh.exports=he;var u=rh.exports;const I=th(u),wc=hg({__proto__:null,default:I},[u]);var mh={exports:{}},Pi={},hh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(S,H){var E=S.length;S.push(H);e:for(;0<E;){var q=E-1>>>1,$=S[q];if(0<r($,H))S[q]=H,S[E]=$,E=q;else break e}}function l(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var H=S[0],E=S.pop();if(E!==H){S[0]=E;e:for(var q=0,$=S.length,J=$>>>1;q<J;){var Z=2*(q+1)-1,F=S[Z],G=Z+1,O=S[G];if(0>r(F,E))G<$&&0>r(O,F)?(S[q]=O,S[G]=E,q=G):(S[q]=F,S[Z]=E,q=Z);else if(G<$&&0>r(O,E))S[q]=O,S[G]=E,q=G;else break e}}return H}function r(S,H){var E=S.sortIndex-H.sortIndex;return E!==0?E:S.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],d=[],m=1,f=null,p=3,v=!1,j=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function b(S){for(var H=l(d);H!==null;){if(H.callback===null)n(d);else if(H.startTime<=S)n(d),H.sortIndex=H.expirationTime,a(c,H);else break;H=l(d)}}function N(S){if(y=!1,b(S),!j)if(l(c)!==null)j=!0,C||(C=!0,B());else{var H=l(d);H!==null&&Y(N,H.startTime-S)}}var C=!1,R=-1,k=5,L=-1;function T(){return w?!0:!(e.unstable_now()-L<k)}function A(){if(w=!1,C){var S=e.unstable_now();L=S;var H=!0;try{e:{j=!1,y&&(y=!1,g(R),R=-1),v=!0;var E=p;try{a:{for(b(S),f=l(c);f!==null&&!(f.expirationTime>S&&T());){var q=f.callback;if(typeof q=="function"){f.callback=null,p=f.priorityLevel;var $=q(f.expirationTime<=S);if(S=e.unstable_now(),typeof $=="function"){f.callback=$,b(S),H=!0;break a}f===l(c)&&n(c),b(S)}else n(c);f=l(c)}if(f!==null)H=!0;else{var J=l(d);J!==null&&Y(N,J.startTime-S),H=!1}}break e}finally{f=null,p=E,v=!1}H=void 0}}finally{H?B():C=!1}}}var B;if(typeof h=="function")B=function(){h(A)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,Q=_.port2;_.port1.onmessage=A,B=function(){Q.postMessage(null)}}else B=function(){x(A,0)};function Y(S,H){R=x(function(){S(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var E=p;p=H;try{return S()}finally{p=E}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(S,H){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=p;p=S;try{return H()}finally{p=E}},e.unstable_scheduleCallback=function(S,H,E){var q=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?q+E:q):E=q,S){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=E+$,S={id:m++,callback:H,priorityLevel:S,startTime:E,expirationTime:$,sortIndex:-1},E>q?(S.sortIndex=E,a(d,S),l(c)===null&&S===l(d)&&(y?(g(R),R=-1):y=!0,Y(N,E-q))):(S.sortIndex=$,a(c,S),j||v||(j=!0,C||(C=!0,B()))),S},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(S){var H=p;return function(){var E=p;p=H;try{return S.apply(this,arguments)}finally{p=E}}}})(ph);hh.exports=ph;var Eg=hh.exports,fh={exports:{}},qa={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=u;function gh(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gl(){}var Ua={d:{f:gl,r:function(){throw Error(gh(522))},D:gl,C:gl,L:gl,m:gl,X:gl,S:gl,M:gl},p:0,findDOMNode:null},Bg=Symbol.for("react.portal");function _g(e,a,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bg,key:n==null?null:""+n,children:e,containerInfo:a,implementation:l}}var Dr=Dg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Zi(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}qa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ua;qa.createPortal=function(e,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(gh(299));return _g(e,a,null,l)};qa.flushSync=function(e){var a=Dr.T,l=Ua.p;try{if(Dr.T=null,Ua.p=2,e)return e()}finally{Dr.T=a,Ua.p=l,Ua.d.f()}};qa.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Ua.d.C(e,a))};qa.prefetchDNS=function(e){typeof e=="string"&&Ua.d.D(e)};qa.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var l=a.as,n=Zi(l,a.crossOrigin),r=typeof a.integrity=="string"?a.integrity:void 0,s=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;l==="style"?Ua.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:n,integrity:r,fetchPriority:s}):l==="script"&&Ua.d.X(e,{crossOrigin:n,integrity:r,fetchPriority:s,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};qa.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var l=Zi(a.as,a.crossOrigin);Ua.d.M(e,{crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Ua.d.M(e)};qa.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var l=a.as,n=Zi(l,a.crossOrigin);Ua.d.L(e,l,{crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};qa.preloadModule=function(e,a){if(typeof e=="string")if(a){var l=Zi(a.as,a.crossOrigin);Ua.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Ua.d.m(e)};qa.requestFormReset=function(e){Ua.d.r(e)};qa.unstable_batchedUpdates=function(e,a){return e(a)};qa.useFormState=function(e,a,l){return Dr.H.useFormState(e,a,l)};qa.useFormStatus=function(){return Dr.H.useHostTransitionStatus()};qa.version="19.2.0";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(e){console.error(e)}}vh(),fh.exports=qa;var Fd=fh.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Eg,xh=u,Lg=Fd;function V(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hs(e){var a=e,l=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(l=a.return),e=a.return;while(e)}return a.tag===3?l:null}function yh(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function jh(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function s0(e){if(hs(e)!==e)throw Error(V(188))}function Hg(e){var a=e.alternate;if(!a){if(a=hs(e),a===null)throw Error(V(188));return a!==e?null:e}for(var l=e,n=a;;){var r=l.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){l=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===l)return s0(r),e;if(s===n)return s0(r),a;s=s.sibling}throw Error(V(188))}if(l.return!==n.return)l=r,n=s;else{for(var i=!1,o=r.child;o;){if(o===l){i=!0,l=r,n=s;break}if(o===n){i=!0,n=r,l=s;break}o=o.sibling}if(!i){for(o=s.child;o;){if(o===l){i=!0,l=s,n=r;break}if(o===n){i=!0,n=s,l=r;break}o=o.sibling}if(!i)throw Error(V(189))}}if(l.alternate!==n)throw Error(V(190))}if(l.tag!==3)throw Error(V(188));return l.stateNode.current===l?e:a}function wh(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=wh(e),a!==null)return a;e=e.sibling}return null}var Je=Object.assign,Og=Symbol.for("react.element"),Bs=Symbol.for("react.transitional.element"),zr=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Sh=Symbol.for("react.consumer"),It=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),zc=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),vl=Symbol.for("react.lazy"),Cc=Symbol.for("react.activity"),Vg=Symbol.for("react.memo_cache_sentinel"),i0=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=i0&&e[i0]||e["@@iterator"],typeof e=="function"?e:null)}var $g=Symbol.for("react.client.reference");function kc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$g?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Nc:return"Profiler";case Nh:return"StrictMode";case Sc:return"Suspense";case zc:return"SuspenseList";case Cc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zr:return"Portal";case It:return e.displayName||"Context";case Sh:return(e._context.displayName||"Context")+".Consumer";case Pd:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zd:return a=e.displayName||null,a!==null?a:kc(e.type)||"Memo";case vl:a=e._payload,e=e._init;try{return kc(e(a))}catch{}}return null}var Cr=Array.isArray,oe=xh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te=Lg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,on={pending:!1,data:null,method:null,action:null},Mc=[],Dn=-1;function Ut(e){return{current:e}}function ka(e){0>Dn||(e.current=Mc[Dn],Mc[Dn]=null,Dn--)}function Xe(e,a){Dn++,Mc[Dn]=e.current,e.current=a}var Vt=Ut(null),Zr=Ut(null),Dl=Ut(null),mi=Ut(null);function hi(e,a){switch(Xe(Dl,a),Xe(Zr,e),Xe(Vt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?hm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=hm(a),e=Wp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ka(Vt),Xe(Vt,e)}function Kn(){ka(Vt),ka(Zr),ka(Dl)}function Rc(e){e.memoizedState!==null&&Xe(mi,e);var a=Vt.current,l=Wp(a,e.type);a!==l&&(Xe(Zr,e),Xe(Vt,l))}function pi(e){Zr.current===e&&(ka(Vt),ka(Zr)),mi.current===e&&(ka(mi),is._currentValue=on)}var Eo,o0;function en(e){if(Eo===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Eo=a&&a[1]||"",o0=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Eo+e+o0}var Do=!1;function Bo(e,a){if(!e||Do)return"";Do=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(v){var p=v}Reflect.construct(e,[],f)}else{try{f.call()}catch(v){p=v}e.call(f.prototype)}}else{try{throw Error()}catch(v){p=v}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),i=s[0],o=s[1];if(i&&o){var c=i.split(`
`),d=o.split(`
`);for(r=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;r<d.length&&!d[r].includes("DetermineComponentFrameRoot");)r++;if(n===c.length||r===d.length)for(n=c.length-1,r=d.length-1;1<=n&&0<=r&&c[n]!==d[r];)r--;for(;1<=n&&0<=r;n--,r--)if(c[n]!==d[r]){if(n!==1||r!==1)do if(n--,r--,0>r||c[n]!==d[r]){var m=`
`+c[n].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=n&&0<=r);break}}}finally{Do=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?en(l):""}function Ug(e,a){switch(e.tag){case 26:case 27:case 5:return en(e.type);case 16:return en("Lazy");case 13:return e.child!==a&&a!==null?en("Suspense Fallback"):en("Suspense");case 19:return en("SuspenseList");case 0:case 15:return Bo(e.type,!1);case 11:return Bo(e.type.render,!1);case 1:return Bo(e.type,!0);case 31:return en("Activity");default:return""}}function c0(e){try{var a="",l=null;do a+=Ug(e,l),l=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Tc=Object.prototype.hasOwnProperty,Kd=Na.unstable_scheduleCallback,_o=Na.unstable_cancelCallback,qg=Na.unstable_shouldYield,Yg=Na.unstable_requestPaint,ct=Na.unstable_now,Wg=Na.unstable_getCurrentPriorityLevel,zh=Na.unstable_ImmediatePriority,Ch=Na.unstable_UserBlockingPriority,fi=Na.unstable_NormalPriority,Gg=Na.unstable_LowPriority,kh=Na.unstable_IdlePriority,Xg=Na.log,Qg=Na.unstable_setDisableYieldValue,ps=null,dt=null;function Sl(e){if(typeof Xg=="function"&&Qg(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ps,e)}catch{}}var ut=Math.clz32?Math.clz32:Zg,Fg=Math.log,Pg=Math.LN2;function Zg(e){return e>>>=0,e===0?32:31-(Fg(e)/Pg|0)|0}var _s=256,Ls=262144,Hs=4194304;function an(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,a,l){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?r=an(n):(i&=o,i!==0?r=an(i):l||(l=o&~e,l!==0&&(r=an(l))))):(o=n&~s,o!==0?r=an(o):i!==0?r=an(i):l||(l=n&~e,l!==0&&(r=an(l)))),r===0?0:a!==0&&a!==r&&!(a&s)&&(s=r&-r,l=a&-a,s>=l||s===32&&(l&4194048)!==0)?a:r}function fs(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Kg(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mh(){var e=Hs;return Hs<<=1,!(Hs&62914560)&&(Hs=4194304),e}function Lo(e){for(var a=[],l=0;31>l;l++)a.push(e);return a}function gs(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jg(e,a,l,n,r,s){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,d=e.hiddenUpdates;for(l=i&~l;0<l;){var m=31-ut(l),f=1<<m;o[m]=0,c[m]=-1;var p=d[m];if(p!==null)for(d[m]=null,m=0;m<p.length;m++){var v=p[m];v!==null&&(v.lane&=-536870913)}l&=~f}n!==0&&Rh(e,n,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(i&~a))}function Rh(e,a,l){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-ut(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function Th(e,a){var l=e.entangledLanes|=a;for(e=e.entanglements;l;){var n=31-ut(l),r=1<<n;r&a|e[n]&a&&(e[n]|=a),l&=~r}}function Ah(e,a){var l=a&-a;return l=l&42?1:Jd(l),l&(e.suspendedLanes|a)?0:l}function Jd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Id(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Eh(){var e=Te.p;return e!==0?e:(e=window.event,e===void 0?32:af(e.type))}function d0(e,a){var l=Te.p;try{return Te.p=e,a()}finally{Te.p=l}}var Fl=Math.random().toString(36).slice(2),Ea="__reactFiber$"+Fl,et="__reactProps$"+Fl,dr="__reactContainer$"+Fl,Ac="__reactEvents$"+Fl,Ig="__reactListeners$"+Fl,ev="__reactHandles$"+Fl,u0="__reactResources$"+Fl,vs="__reactMarker$"+Fl;function eu(e){delete e[Ea],delete e[et],delete e[Ac],delete e[Ig],delete e[ev]}function Bn(e){var a=e[Ea];if(a)return a;for(var l=e.parentNode;l;){if(a=l[dr]||l[Ea]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(e=xm(e);e!==null;){if(l=e[Ea])return l;e=xm(e)}return a}e=l,l=e.parentNode}return null}function ur(e){if(e=e[Ea]||e[dr]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function kr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(V(33))}function Wn(e){var a=e[u0];return a||(a=e[u0]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ca(e){e[vs]=!0}var Dh=new Set,Bh={};function bn(e,a){Jn(e,a),Jn(e+"Capture",a)}function Jn(e,a){for(Bh[e]=a,e=0;e<a.length;e++)Dh.add(a[e])}var av=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m0={},h0={};function tv(e){return Tc.call(h0,e)?!0:Tc.call(m0,e)?!1:av.test(e)?h0[e]=!0:(m0[e]=!0,!1)}function Ks(e,a,l){if(tv(a))if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+l)}}function Os(e,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+l)}}function Gt(e,a,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(a,l,""+n)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _h(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function lv(e,a,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(i){l=""+i,s.call(this,i)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ec(e){if(!e._valueTracker){var a=_h(e)?"checked":"value";e._valueTracker=lv(e,a,""+e[a])}}function Lh(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var l=a.getValue(),n="";return e&&(n=_h(e)?e.checked?"true":"false":e.value),e=n,e!==l?(a.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nv=/[\n"\\]/g;function jt(e){return e.replace(nv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Dc(e,a,l,n,r,s,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+xt(a)):e.value!==""+xt(a)&&(e.value=""+xt(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Bc(e,i,xt(a)):l!=null?Bc(e,i,xt(l)):n!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+xt(o):e.removeAttribute("name")}function Hh(e,a,l,n,r,s,i,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){Ec(e);return}l=l!=null?""+xt(l):"",a=a!=null?""+xt(a):l,o||a===e.value||(e.value=a),e.defaultValue=a}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Ec(e)}function Bc(e,a,l){a==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Gn(e,a,l,n){if(e=e.options,a){a={};for(var r=0;r<l.length;r++)a["$"+l[r]]=!0;for(l=0;l<e.length;l++)r=a.hasOwnProperty("$"+e[l].value),e[l].selected!==r&&(e[l].selected=r),r&&n&&(e[l].defaultSelected=!0)}else{for(l=""+xt(l),a=null,r=0;r<e.length;r++){if(e[r].value===l){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function Oh(e,a,l){if(a!=null&&(a=""+xt(a),a!==e.value&&(e.value=a),l==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=l!=null?""+xt(l):""}function Vh(e,a,l,n){if(a==null){if(n!=null){if(l!=null)throw Error(V(92));if(Cr(n)){if(1<n.length)throw Error(V(93));n=n[0]}l=n}l==null&&(l=""),a=l}l=xt(a),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),Ec(e)}function In(e,a){if(a){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=a;return}}e.textContent=a}var rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function p0(e,a,l){var n=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,l):typeof l!="number"||l===0||rv.has(a)?a==="float"?e.cssFloat=l:e[a]=(""+l).trim():e[a]=l+"px"}function $h(e,a,l){if(a!=null&&typeof a!="object")throw Error(V(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in a)n=a[r],a.hasOwnProperty(r)&&l[r]!==n&&p0(e,r,n)}else for(var s in a)a.hasOwnProperty(s)&&p0(e,s,a[s])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(e){return iv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function el(){}var _c=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,Xn=null;function f0(e){var a=ur(e);if(a&&(e=a.stateNode)){var l=e[et]||null;e:switch(e=a.stateNode,a.type){case"input":if(Dc(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+jt(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var n=l[a];if(n!==e&&n.form===e.form){var r=n[et]||null;if(!r)throw Error(V(90));Dc(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<l.length;a++)n=l[a],n.form===e.form&&Lh(n)}break e;case"textarea":Oh(e,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Gn(e,!!l.multiple,a,!1)}}}var Ho=!1;function Uh(e,a,l){if(Ho)return e(a,l);Ho=!0;try{var n=e(a);return n}finally{if(Ho=!1,(_n!==null||Xn!==null)&&(co(),_n&&(a=_n,e=Xn,Xn=_n=null,f0(a),e)))for(a=0;a<e.length;a++)f0(e[a])}}function Kr(e,a){var l=e.stateNode;if(l===null)return null;var n=l[et]||null;if(n===null)return null;l=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(V(231,a,typeof l));return l}var sl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=!1;if(sl)try{var br={};Object.defineProperty(br,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Lc=!1}var zl=null,lu=null,Is=null;function qh(){if(Is)return Is;var e,a=lu,l=a.length,n,r="value"in zl?zl.value:zl.textContent,s=r.length;for(e=0;e<l&&a[e]===r[e];e++);var i=l-e;for(n=1;n<=i&&a[l-n]===r[s-n];n++);return Is=r.slice(e,1<n?1-n:void 0)}function ei(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function g0(){return!1}function at(e){function a(l,n,r,s,i){this._reactName=l,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vs:g0,this.isPropagationStopped=g0,this}return Je(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),a}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=at(yn),xs=Je({},yn,{view:0,detail:0}),ov=at(xs),Oo,Vo,yr,Ii=Je({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(Oo=e.screenX-yr.screenX,Vo=e.screenY-yr.screenY):Vo=Oo=0,yr=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),v0=at(Ii),cv=Je({},Ii,{dataTransfer:0}),dv=at(cv),uv=Je({},xs,{relatedTarget:0}),$o=at(uv),mv=Je({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=at(mv),pv=Je({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fv=at(pv),gv=Je({},yn,{data:0}),x0=at(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=bv[e])?!!a[e]:!1}function nu(){return yv}var jv=Je({},xs,{key:function(e){if(e.key){var a=vv[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=at(jv),Nv=Je({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=at(Nv),Sv=Je({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),zv=at(Sv),Cv=Je({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=at(Cv),Mv=Je({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=at(Mv),Tv=Je({},yn,{newState:0,oldState:0}),Av=at(Tv),Ev=[9,13,27,32],ru=sl&&"CompositionEvent"in window,Br=null;sl&&"documentMode"in document&&(Br=document.documentMode);var Dv=sl&&"TextEvent"in window&&!Br,Yh=sl&&(!ru||Br&&8<Br&&11>=Br),y0=" ",j0=!1;function Wh(e,a){switch(e){case"keyup":return Ev.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Bv(e,a){switch(e){case"compositionend":return Gh(a);case"keypress":return a.which!==32?null:(j0=!0,y0);case"textInput":return e=a.data,e===y0&&j0?null:e;default:return null}}function _v(e,a){if(Ln)return e==="compositionend"||!ru&&Wh(e,a)?(e=qh(),Is=lu=zl=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Yh&&a.locale!=="ko"?null:a.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Lv[e.type]:a==="textarea"}function Xh(e,a,l,n){_n?Xn?Xn.push(n):Xn=[n]:_n=n,a=Bi(a,"onChange"),0<a.length&&(l=new Ji("onChange","change",null,l,n),e.push({event:l,listeners:a}))}var _r=null,Jr=null;function Hv(e){Up(e,0)}function eo(e){var a=kr(e);if(Lh(a))return e}function N0(e,a){if(e==="change")return a}var Qh=!1;if(sl){var Uo;if(sl){var qo="oninput"in document;if(!qo){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),qo=typeof S0.oninput=="function"}Uo=qo}else Uo=!1;Qh=Uo&&(!document.documentMode||9<document.documentMode)}function z0(){_r&&(_r.detachEvent("onpropertychange",Fh),Jr=_r=null)}function Fh(e){if(e.propertyName==="value"&&eo(Jr)){var a=[];Xh(a,Jr,e,tu(e)),Uh(Hv,a)}}function Ov(e,a,l){e==="focusin"?(z0(),_r=a,Jr=l,_r.attachEvent("onpropertychange",Fh)):e==="focusout"&&z0()}function Vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(Jr)}function $v(e,a){if(e==="click")return eo(a)}function Uv(e,a){if(e==="input"||e==="change")return eo(a)}function qv(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ht=typeof Object.is=="function"?Object.is:qv;function Ir(e,a){if(ht(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var l=Object.keys(e),n=Object.keys(a);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var r=l[n];if(!Tc.call(a,r)||!ht(e[r],a[r]))return!1}return!0}function C0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k0(e,a){var l=C0(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=a&&n>=a)return{node:l,offset:a-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=C0(l)}}function Ph(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ph(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Zh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=gi(e.document);a instanceof e.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)e=a.contentWindow;else break;a=gi(e.document)}return a}function su(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Yv=sl&&"documentMode"in document&&11>=document.documentMode,Hn=null,Hc=null,Lr=null,Oc=!1;function M0(e,a,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Oc||Hn==null||Hn!==gi(n)||(n=Hn,"selectionStart"in n&&su(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Lr&&Ir(Lr,n)||(Lr=n,n=Bi(Hc,"onSelect"),0<n.length&&(a=new Ji("onSelect","select",null,a,l),e.push({event:a,listeners:n}),a.target=Hn)))}function Il(e,a){var l={};return l[e.toLowerCase()]=a.toLowerCase(),l["Webkit"+e]="webkit"+a,l["Moz"+e]="moz"+a,l}var On={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionrun:Il("Transition","TransitionRun"),transitionstart:Il("Transition","TransitionStart"),transitioncancel:Il("Transition","TransitionCancel"),transitionend:Il("Transition","TransitionEnd")},Yo={},Kh={};sl&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function jn(e){if(Yo[e])return Yo[e];if(!On[e])return e;var a=On[e],l;for(l in a)if(a.hasOwnProperty(l)&&l in Kh)return Yo[e]=a[l];return e}var Jh=jn("animationend"),Ih=jn("animationiteration"),e1=jn("animationstart"),Wv=jn("transitionrun"),Gv=jn("transitionstart"),Xv=jn("transitioncancel"),a1=jn("transitionend"),t1=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function At(e,a){t1.set(e,a),bn(a,[e])}var vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],Vn=0,iu=0;function ao(){for(var e=Vn,a=iu=Vn=0;a<e;){var l=vt[a];vt[a++]=null;var n=vt[a];vt[a++]=null;var r=vt[a];vt[a++]=null;var s=vt[a];if(vt[a++]=null,n!==null&&r!==null){var i=n.pending;i===null?r.next=r:(r.next=i.next,i.next=r),n.pending=r}s!==0&&l1(l,r,s)}}function to(e,a,l,n){vt[Vn++]=e,vt[Vn++]=a,vt[Vn++]=l,vt[Vn++]=n,iu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ou(e,a,l,n){return to(e,a,l,n),xi(e)}function wn(e,a){return to(e,null,null,a),xi(e)}function l1(e,a,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var r=!1,s=e.return;s!==null;)s.childLanes|=l,n=s.alternate,n!==null&&(n.childLanes|=l),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&a!==null&&(r=31-ut(l),e=s.hiddenUpdates,n=e[r],n===null?e[r]=[a]:n.push(a),a.lane=l|536870912),s):null}function xi(e){if(50<Gr)throw Gr=0,sd=null,Error(V(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var $n={};function Qv(e,a,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,a,l,n){return new Qv(e,a,l,n)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tl(e,a){var l=e.alternate;return l===null?(l=it(e.tag,a,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=a,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,a=e.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function n1(e,a){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,a=l.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ai(e,a,l,n,r,s){var i=0;if(n=e,typeof e=="function")cu(e)&&(i=1);else if(typeof e=="string")i=Jx(e,l,Vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Cc:return e=it(31,l,a,r),e.elementType=Cc,e.lanes=s,e;case En:return cn(l.children,r,s,a);case Nh:i=8,r|=24;break;case Nc:return e=it(12,l,a,r|2),e.elementType=Nc,e.lanes=s,e;case Sc:return e=it(13,l,a,r),e.elementType=Sc,e.lanes=s,e;case zc:return e=it(19,l,a,r),e.elementType=zc,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case It:i=10;break e;case Sh:i=9;break e;case Pd:i=11;break e;case Zd:i=14;break e;case vl:i=16,n=null;break e}i=29,l=Error(V(130,e===null?"null":typeof e,"")),n=null}return a=it(i,l,a,r),a.elementType=e,a.type=n,a.lanes=s,a}function cn(e,a,l,n){return e=it(7,e,n,a),e.lanes=l,e}function Wo(e,a,l){return e=it(6,e,null,a),e.lanes=l,e}function r1(e){var a=it(18,null,null,0);return a.stateNode=e,a}function Go(e,a,l){return a=it(4,e.children!==null?e.children:[],e.key,a),a.lanes=l,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var R0=new WeakMap;function wt(e,a){if(typeof e=="object"&&e!==null){var l=R0.get(e);return l!==void 0?l:(a={value:e,source:a,stack:c0(a)},R0.set(e,a),a)}return{value:e,source:a,stack:c0(a)}}var Un=[],qn=0,bi=null,es=0,bt=[],yt=0,Wl=null,Bt=1,_t="";function Zt(e,a){Un[qn++]=es,Un[qn++]=bi,bi=e,es=a}function s1(e,a,l){bt[yt++]=Bt,bt[yt++]=_t,bt[yt++]=Wl,Wl=e;var n=Bt;e=_t;var r=32-ut(n)-1;n&=~(1<<r),l+=1;var s=32-ut(a)+r;if(30<s){var i=r-r%5;s=(n&(1<<i)-1).toString(32),n>>=i,r-=i,Bt=1<<32-ut(a)+r|l<<r|n,_t=s+e}else Bt=1<<s|l<<r|n,_t=e}function du(e){e.return!==null&&(Zt(e,1),s1(e,1,0))}function uu(e){for(;e===bi;)bi=Un[--qn],Un[qn]=null,es=Un[--qn],Un[qn]=null;for(;e===Wl;)Wl=bt[--yt],bt[yt]=null,_t=bt[--yt],bt[yt]=null,Bt=bt[--yt],bt[yt]=null}function i1(e,a){bt[yt++]=Bt,bt[yt++]=_t,bt[yt++]=Wl,Bt=a.id,_t=a.overflow,Wl=e}var Da=null,Ze=null,we=!1,Bl=null,Nt=!1,$c=Error(V(519));function Gl(e){var a=Error(V(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw as(wt(a,e)),$c}function T0(e){var a=e.stateNode,l=e.type,n=e.memoizedProps;switch(a[Ea]=e,a[et]=n,l){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(l=0;l<rs.length;l++)xe(rs[l],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),Hh(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),Vh(a,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||n.suppressHydrationWarning===!0||Yp(a.textContent,l)?(n.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),n.onScroll!=null&&xe("scroll",a),n.onScrollEnd!=null&&xe("scrollend",a),n.onClick!=null&&(a.onclick=el),a=!0):a=!1,a||Gl(e,!0)}function A0(e){for(Da=e.return;Da;)switch(Da.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Da=Da.return}}function kn(e){if(e!==Da)return!1;if(!we)return A0(e),we=!0,!1;var a=e.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ud(e.type,e.memoizedProps)),l=!l),l&&Ze&&Gl(e),A0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Ze=vm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Ze=vm(e)}else a===27?(a=Ze,Pl(e.type)?(e=fd,fd=null,Ze=e):Ze=a):Ze=Da?zt(e.stateNode.nextSibling):null;return!0}function hn(){Ze=Da=null,we=!1}function Xo(){var e=Bl;return e!==null&&(Ka===null?Ka=e:Ka.push.apply(Ka,e),Bl=null),e}function as(e){Bl===null?Bl=[e]:Bl.push(e)}var Uc=Ut(null),Nn=null,al=null;function bl(e,a,l){Xe(Uc,a._currentValue),a._currentValue=l}function ll(e){e._currentValue=Uc.current,ka(Uc)}function qc(e,a,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===l)break;e=e.return}}function Yc(e,a,l,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var i=r.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=r;for(var c=0;c<a.length;c++)if(o.context===a[c]){s.lanes|=l,o=s.alternate,o!==null&&(o.lanes|=l),qc(s.return,l,e),n||(i=null);break e}s=o.next}}else if(r.tag===18){if(i=r.return,i===null)throw Error(V(341));i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),qc(i,l,e),i=null}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===e){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}}function mr(e,a,l,n){e=null;for(var r=a,s=!1;r!==null;){if(!s){if(r.flags&524288)s=!0;else if(r.flags&262144)break}if(r.tag===10){var i=r.alternate;if(i===null)throw Error(V(387));if(i=i.memoizedProps,i!==null){var o=r.type;ht(r.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(r===mi.current){if(i=r.alternate,i===null)throw Error(V(387));i.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(is):e=[is])}r=r.return}e!==null&&Yc(a,e,l,n),a.flags|=262144}function yi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){Nn=e,al=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ba(e){return o1(Nn,e)}function $s(e,a){return Nn===null&&pn(e),o1(e,a)}function o1(e,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},al===null){if(e===null)throw Error(V(308));al=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else al=al.next=a;return l}var Fv=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(l){return l()})}},Pv=Na.unstable_scheduleCallback,Zv=Na.unstable_NormalPriority,va={$$typeof:It,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new Fv,data:new Map,refCount:0}}function bs(e){e.refCount--,e.refCount===0&&Pv(Zv,function(){e.controller.abort()})}var Hr=null,Wc=0,er=0,Qn=null;function Kv(e,a){if(Hr===null){var l=Hr=[];Wc=0,er=Hu(),Qn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Wc++,a.then(E0,E0),a}function E0(){if(--Wc===0&&Hr!==null){Qn!==null&&(Qn.status="fulfilled");var e=Hr;Hr=null,er=0,Qn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Jv(e,a){var l=[],n={status:"pending",value:null,reason:null,then:function(r){l.push(r)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var r=0;r<l.length;r++)(0,l[r])(a)},function(r){for(n.status="rejected",n.reason=r,r=0;r<l.length;r++)(0,l[r])(void 0)}),n}var D0=oe.S;oe.S=function(e,a){wp=ct(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Kv(e,a),D0!==null&&D0(e,a)};var dn=Ut(null);function hu(){var e=dn.current;return e!==null?e:We.pooledCache}function ti(e,a){a===null?Xe(dn,dn.current):Xe(dn,a.pool)}function c1(){var e=hu();return e===null?null:{parent:va._currentValue,pool:e}}var hr=Error(V(460)),pu=Error(V(474)),lo=Error(V(542)),ji={then:function(){}};function B0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d1(e,a,l){switch(l=e[l],l===void 0?e.push(a):l!==a&&(a.then(el,el),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,L0(e),e;default:if(typeof a.status=="string")a.then(el,el);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(V(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=n}},function(n){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,L0(e),e}throw un=a,hr}}function tn(e){try{var a=e._init;return a(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(un=l,hr):l}}var un=null;function _0(){if(un===null)throw Error(V(459));var e=un;return un=null,e}function L0(e){if(e===hr||e===lo)throw Error(V(483))}var Fn=null,ts=0;function Us(e){var a=ts;return ts+=1,Fn===null&&(Fn=[]),d1(Fn,e,a)}function jr(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function qs(e,a){throw a.$$typeof===Og?Error(V(525)):(e=Object.prototype.toString.call(a),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function u1(e){function a(x,g){if(e){var h=x.deletions;h===null?(x.deletions=[g],x.flags|=16):h.push(g)}}function l(x,g){if(!e)return null;for(;g!==null;)a(x,g),g=g.sibling;return null}function n(x){for(var g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function r(x,g){return x=tl(x,g),x.index=0,x.sibling=null,x}function s(x,g,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<g?(x.flags|=67108866,g):h):(x.flags|=67108866,g)):(x.flags|=1048576,g)}function i(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function o(x,g,h,b){return g===null||g.tag!==6?(g=Wo(h,x.mode,b),g.return=x,g):(g=r(g,h),g.return=x,g)}function c(x,g,h,b){var N=h.type;return N===En?m(x,g,h.props.children,b,h.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vl&&tn(N)===g.type)?(g=r(g,h.props),jr(g,h),g.return=x,g):(g=ai(h.type,h.key,h.props,null,x.mode,b),jr(g,h),g.return=x,g)}function d(x,g,h,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Go(h,x.mode,b),g.return=x,g):(g=r(g,h.children||[]),g.return=x,g)}function m(x,g,h,b,N){return g===null||g.tag!==7?(g=cn(h,x.mode,b,N),g.return=x,g):(g=r(g,h),g.return=x,g)}function f(x,g,h){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Wo(""+g,x.mode,h),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:return h=ai(g.type,g.key,g.props,null,x.mode,h),jr(h,g),h.return=x,h;case zr:return g=Go(g,x.mode,h),g.return=x,g;case vl:return g=tn(g),f(x,g,h)}if(Cr(g)||xr(g))return g=cn(g,x.mode,h,null),g.return=x,g;if(typeof g.then=="function")return f(x,Us(g),h);if(g.$$typeof===It)return f(x,$s(x,g),h);qs(x,g)}return null}function p(x,g,h,b){var N=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return N!==null?null:o(x,g,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Bs:return h.key===N?c(x,g,h,b):null;case zr:return h.key===N?d(x,g,h,b):null;case vl:return h=tn(h),p(x,g,h,b)}if(Cr(h)||xr(h))return N!==null?null:m(x,g,h,b,null);if(typeof h.then=="function")return p(x,g,Us(h),b);if(h.$$typeof===It)return p(x,g,$s(x,h),b);qs(x,h)}return null}function v(x,g,h,b,N){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return x=x.get(h)||null,o(g,x,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bs:return x=x.get(b.key===null?h:b.key)||null,c(g,x,b,N);case zr:return x=x.get(b.key===null?h:b.key)||null,d(g,x,b,N);case vl:return b=tn(b),v(x,g,h,b,N)}if(Cr(b)||xr(b))return x=x.get(h)||null,m(g,x,b,N,null);if(typeof b.then=="function")return v(x,g,h,Us(b),N);if(b.$$typeof===It)return v(x,g,h,$s(g,b),N);qs(g,b)}return null}function j(x,g,h,b){for(var N=null,C=null,R=g,k=g=0,L=null;R!==null&&k<h.length;k++){R.index>k?(L=R,R=null):L=R.sibling;var T=p(x,R,h[k],b);if(T===null){R===null&&(R=L);break}e&&R&&T.alternate===null&&a(x,R),g=s(T,g,k),C===null?N=T:C.sibling=T,C=T,R=L}if(k===h.length)return l(x,R),we&&Zt(x,k),N;if(R===null){for(;k<h.length;k++)R=f(x,h[k],b),R!==null&&(g=s(R,g,k),C===null?N=R:C.sibling=R,C=R);return we&&Zt(x,k),N}for(R=n(R);k<h.length;k++)L=v(R,x,k,h[k],b),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?k:L.key),g=s(L,g,k),C===null?N=L:C.sibling=L,C=L);return e&&R.forEach(function(A){return a(x,A)}),we&&Zt(x,k),N}function y(x,g,h,b){if(h==null)throw Error(V(151));for(var N=null,C=null,R=g,k=g=0,L=null,T=h.next();R!==null&&!T.done;k++,T=h.next()){R.index>k?(L=R,R=null):L=R.sibling;var A=p(x,R,T.value,b);if(A===null){R===null&&(R=L);break}e&&R&&A.alternate===null&&a(x,R),g=s(A,g,k),C===null?N=A:C.sibling=A,C=A,R=L}if(T.done)return l(x,R),we&&Zt(x,k),N;if(R===null){for(;!T.done;k++,T=h.next())T=f(x,T.value,b),T!==null&&(g=s(T,g,k),C===null?N=T:C.sibling=T,C=T);return we&&Zt(x,k),N}for(R=n(R);!T.done;k++,T=h.next())T=v(R,x,k,T.value,b),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?k:T.key),g=s(T,g,k),C===null?N=T:C.sibling=T,C=T);return e&&R.forEach(function(B){return a(x,B)}),we&&Zt(x,k),N}function w(x,g,h,b){if(typeof h=="object"&&h!==null&&h.type===En&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Bs:e:{for(var N=h.key;g!==null;){if(g.key===N){if(N=h.type,N===En){if(g.tag===7){l(x,g.sibling),b=r(g,h.props.children),b.return=x,x=b;break e}}else if(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vl&&tn(N)===g.type){l(x,g.sibling),b=r(g,h.props),jr(b,h),b.return=x,x=b;break e}l(x,g);break}else a(x,g);g=g.sibling}h.type===En?(b=cn(h.props.children,x.mode,b,h.key),b.return=x,x=b):(b=ai(h.type,h.key,h.props,null,x.mode,b),jr(b,h),b.return=x,x=b)}return i(x);case zr:e:{for(N=h.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){l(x,g.sibling),b=r(g,h.children||[]),b.return=x,x=b;break e}else{l(x,g);break}else a(x,g);g=g.sibling}b=Go(h,x.mode,b),b.return=x,x=b}return i(x);case vl:return h=tn(h),w(x,g,h,b)}if(Cr(h))return j(x,g,h,b);if(xr(h)){if(N=xr(h),typeof N!="function")throw Error(V(150));return h=N.call(h),y(x,g,h,b)}if(typeof h.then=="function")return w(x,g,Us(h),b);if(h.$$typeof===It)return w(x,g,$s(x,h),b);qs(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,g!==null&&g.tag===6?(l(x,g.sibling),b=r(g,h),b.return=x,x=b):(l(x,g),b=Wo(h,x.mode,b),b.return=x,x=b),i(x)):l(x,g)}return function(x,g,h,b){try{ts=0;var N=w(x,g,h,b);return Fn=null,N}catch(R){if(R===hr||R===lo)throw R;var C=it(29,R,null,x.mode);return C.lanes=b,C.return=x,C}finally{}}}var fn=u1(!0),m1=u1(!1),xl=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _l(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ll(e,a,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Re&2){var r=n.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a,a=xi(e),l1(e,null,l),a}return to(e,n,a,l),xi(e)}function Or(e,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,l|=n,a.lanes=l,Th(e,l)}}function Qo(e,a){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var r=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?r=s=i:s=s.next=i,l=l.next}while(l!==null);s===null?r=s=a:s=s.next=a}else r=s=a;l={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=a:e.next=a,l.lastBaseUpdate=a}var Xc=!1;function Vr(){if(Xc){var e=Qn;if(e!==null)throw e}}function $r(e,a,l,n){Xc=!1;var r=e.updateQueue;xl=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?s=d:i.next=d,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==i&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;i=0,m=d=c=null,o=s;do{var p=o.lane&-536870913,v=p!==o.lane;if(v?(ye&p)===p:(n&p)===p){p!==0&&p===er&&(Xc=!0),m!==null&&(m=m.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var j=e,y=o;p=a;var w=l;switch(y.tag){case 1:if(j=y.payload,typeof j=="function"){f=j.call(w,f,p);break e}f=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=y.payload,p=typeof j=="function"?j.call(w,f,p):j,p==null)break e;f=Je({},f,p);break e;case 2:xl=!0}}p=o.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=r.callbacks,v===null?r.callbacks=[p]:v.push(p))}else v={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=v,c=f):m=m.next=v,i|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;v=o,o=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(!0);m===null&&(c=f),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=m,s===null&&(r.shared.lanes=0),Ql|=i,e.lanes=i,e.memoizedState=f}}function h1(e,a){if(typeof e!="function")throw Error(V(191,e));e.call(a)}function p1(e,a){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)h1(l[e],a)}var ar=Ut(null),wi=Ut(0);function H0(e,a){e=dl,Xe(wi,e),Xe(ar,a),dl=e|a.baseLanes}function Qc(){Xe(wi,dl),Xe(ar,ar.current)}function gu(){dl=wi.current,ka(ar),ka(wi)}var pt=Ut(null),St=null;function yl(e){var a=e.alternate;Xe(ma,ma.current&1),Xe(pt,e),St===null&&(a===null||ar.current!==null||a.memoizedState!==null)&&(St=e)}function Fc(e){Xe(ma,ma.current),Xe(pt,e),St===null&&(St=e)}function f1(e){e.tag===22?(Xe(ma,ma.current),Xe(pt,e),St===null&&(St=e)):jl()}function jl(){Xe(ma,ma.current),Xe(pt,pt.current)}function st(e){ka(pt),St===e&&(St=null),ka(ma)}var ma=Ut(0);function Ni(e){for(var a=e;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||hd(l)||pd(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var il=0,pe=null,$e=null,fa=null,Si=!1,Pn=!1,gn=!1,zi=0,ls=0,Zn=null,Iv=0;function ia(){throw Error(V(321))}function vu(e,a){if(a===null)return!1;for(var l=0;l<a.length&&l<e.length;l++)if(!ht(e[l],a[l]))return!1;return!0}function xu(e,a,l,n,r,s){return il=s,pe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,oe.H=e===null||e.memoizedState===null?X1:Ru,gn=!1,s=l(n,r),gn=!1,Pn&&(s=v1(a,l,n,r)),g1(e),s}function g1(e){oe.H=ns;var a=$e!==null&&$e.next!==null;if(il=0,fa=$e=pe=null,Si=!1,ls=0,Zn=null,a)throw Error(V(300));e===null||xa||(e=e.dependencies,e!==null&&yi(e)&&(xa=!0))}function v1(e,a,l,n){pe=e;var r=0;do{if(Pn&&(Zn=null),ls=0,Pn=!1,25<=r)throw Error(V(301));if(r+=1,fa=$e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}oe.H=Q1,s=a(l,n)}while(Pn);return s}function ex(){var e=oe.H,a=e.useState()[0];return a=typeof a.then=="function"?ys(a):a,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(pe.flags|=1024),a}function bu(){var e=zi!==0;return zi=0,e}function yu(e,a,l){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~l}function ju(e){if(Si){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Si=!1}il=0,fa=$e=pe=null,Pn=!1,ls=zi=0,Zn=null}function $a(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fa===null?pe.memoizedState=fa=e:fa=fa.next=e,fa}function ha(){if($e===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var a=fa===null?pe.memoizedState:fa.next;if(a!==null)fa=a,$e=e;else{if(e===null)throw pe.alternate===null?Error(V(467)):Error(V(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},fa===null?pe.memoizedState=fa=e:fa=fa.next=e}return fa}function no(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ys(e){var a=ls;return ls+=1,Zn===null&&(Zn=[]),e=d1(Zn,e,a),a=pe,(fa===null?a.memoizedState:fa.next)===null&&(a=a.alternate,oe.H=a===null||a.memoizedState===null?X1:Ru),e}function ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ys(e);if(e.$$typeof===It)return Ba(e)}throw Error(V(438,String(e)))}function wu(e){var a=null,l=pe.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var n=pe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=no(),pe.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(e),n=0;n<e;n++)l[n]=Vg;return a.index++,l}function ol(e,a){return typeof a=="function"?a(e):a}function li(e){var a=ha();return Nu(a,$e,e)}function Nu(e,a,l){var n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=l;var r=e.baseQueue,s=n.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}a.baseQueue=r=s,n.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{a=r.next;var o=i=null,c=null,d=a,m=!1;do{var f=d.lane&-536870913;if(f!==d.lane?(ye&f)===f:(il&f)===f){var p=d.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),f===er&&(m=!0);else if((il&p)===p){d=d.next,p===er&&(m=!0);continue}else f={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=f,i=s):c=c.next=f,pe.lanes|=p,Ql|=p;f=d.action,gn&&l(s,f),s=d.hasEagerState?d.eagerState:l(s,f)}else p={lane:f,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=p,i=s):c=c.next=p,pe.lanes|=f,Ql|=f;d=d.next}while(d!==null&&d!==a);if(c===null?i=s:c.next=o,!ht(s,e.memoizedState)&&(xa=!0,m&&(l=Qn,l!==null)))throw l;e.memoizedState=s,e.baseState=i,e.baseQueue=c,n.lastRenderedState=s}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Fo(e){var a=ha(),l=a.queue;if(l===null)throw Error(V(311));l.lastRenderedReducer=e;var n=l.dispatch,r=l.pending,s=a.memoizedState;if(r!==null){l.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);ht(s,a.memoizedState)||(xa=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),l.lastRenderedState=s}return[s,n]}function x1(e,a,l){var n=pe,r=ha(),s=we;if(s){if(l===void 0)throw Error(V(407));l=l()}else l=a();var i=!ht(($e||r).memoizedState,l);if(i&&(r.memoizedState=l,xa=!0),r=r.queue,Su(j1.bind(null,n,r,e),[e]),r.getSnapshot!==a||i||fa!==null&&fa.memoizedState.tag&1){if(n.flags|=2048,tr(9,{destroy:void 0},y1.bind(null,n,r,l,a),null),We===null)throw Error(V(349));s||il&127||b1(n,a,l)}return l}function b1(e,a,l){e.flags|=16384,e={getSnapshot:a,value:l},a=pe.updateQueue,a===null?(a=no(),pe.updateQueue=a,a.stores=[e]):(l=a.stores,l===null?a.stores=[e]:l.push(e))}function y1(e,a,l,n){a.value=l,a.getSnapshot=n,w1(a)&&N1(e)}function j1(e,a,l){return l(function(){w1(a)&&N1(e)})}function w1(e){var a=e.getSnapshot;e=e.value;try{var l=a();return!ht(e,l)}catch{return!0}}function N1(e){var a=wn(e,2);a!==null&&Ja(a,e,2)}function Pc(e){var a=$a();if(typeof e=="function"){var l=e;if(e=l(),gn){Sl(!0);try{l()}finally{Sl(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:e},a}function S1(e,a,l,n){return e.baseState=l,Nu(e,$e,typeof n=="function"?n:ol)}function ax(e,a,l,n,r){if(io(e))throw Error(V(485));if(e=a.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){s.listeners.push(i)}};oe.T!==null?l(!0):s.isTransition=!1,n(s),l=a.pending,l===null?(s.next=a.pending=s,z1(a,s)):(s.next=l.next,a.pending=l.next=s)}}function z1(e,a){var l=a.action,n=a.payload,r=e.state;if(a.isTransition){var s=oe.T,i={};oe.T=i;try{var o=l(r,n),c=oe.S;c!==null&&c(i,o),O0(e,a,o)}catch(d){Zc(e,a,d)}finally{s!==null&&i.types!==null&&(s.types=i.types),oe.T=s}}else try{s=l(r,n),O0(e,a,s)}catch(d){Zc(e,a,d)}}function O0(e,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){V0(e,a,n)},function(n){return Zc(e,a,n)}):V0(e,a,l)}function V0(e,a,l){a.status="fulfilled",a.value=l,C1(a),e.state=l,a=e.pending,a!==null&&(l=a.next,l===a?e.pending=null:(l=l.next,a.next=l,z1(e,l)))}function Zc(e,a,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=l,C1(a),a=a.next;while(a!==n)}e.action=null}function C1(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function k1(e,a){return a}function $0(e,a){if(we){var l=We.formState;if(l!==null){e:{var n=pe;if(we){if(Ze){a:{for(var r=Ze,s=Nt;r.nodeType!==8;){if(!s){r=null;break a}if(r=zt(r.nextSibling),r===null){r=null;break a}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ze=zt(r.nextSibling),n=r.data==="F!";break e}}Gl(n)}n=!1}n&&(a=l[0])}}return l=$a(),l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k1,lastRenderedState:a},l.queue=n,l=Y1.bind(null,pe,n),n.dispatch=l,n=Pc(!1),s=Mu.bind(null,pe,!1,n.queue),n=$a(),r={state:a,dispatch:null,action:e,pending:null},n.queue=r,l=ax.bind(null,pe,r,s,l),r.dispatch=l,n.memoizedState=e,[a,l,!1]}function U0(e){var a=ha();return M1(a,$e,e)}function M1(e,a,l){if(a=Nu(e,a,k1)[0],e=li(ol)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=ys(a)}catch(i){throw i===hr?lo:i}else n=a;a=ha();var r=a.queue,s=r.dispatch;return l!==a.memoizedState&&(pe.flags|=2048,tr(9,{destroy:void 0},tx.bind(null,r,l),null)),[n,s,e]}function tx(e,a){e.action=a}function q0(e){var a=ha(),l=$e;if(l!==null)return M1(a,l,e);ha(),a=a.memoizedState,l=ha();var n=l.queue.dispatch;return l.memoizedState=e,[a,n,!1]}function tr(e,a,l,n){return e={tag:e,create:l,deps:n,inst:a,next:null},a=pe.updateQueue,a===null&&(a=no(),pe.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,a.lastEffect=e),e}function R1(){return ha().memoizedState}function ni(e,a,l,n){var r=$a();pe.flags|=e,r.memoizedState=tr(1|a,{destroy:void 0},l,n===void 0?null:n)}function so(e,a,l,n){var r=ha();n=n===void 0?null:n;var s=r.memoizedState.inst;$e!==null&&n!==null&&vu(n,$e.memoizedState.deps)?r.memoizedState=tr(a,s,l,n):(pe.flags|=e,r.memoizedState=tr(1|a,s,l,n))}function Y0(e,a){ni(8390656,8,e,a)}function Su(e,a){so(2048,8,e,a)}function lx(e){pe.flags|=4;var a=pe.updateQueue;if(a===null)a=no(),pe.updateQueue=a,a.events=[e];else{var l=a.events;l===null?a.events=[e]:l.push(e)}}function T1(e){var a=ha().memoizedState;return lx({ref:a,nextImpl:e}),function(){if(Re&2)throw Error(V(440));return a.impl.apply(void 0,arguments)}}function A1(e,a){return so(4,2,e,a)}function E1(e,a){return so(4,4,e,a)}function D1(e,a){if(typeof a=="function"){e=e();var l=a(e);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function B1(e,a,l){l=l!=null?l.concat([e]):null,so(4,4,D1.bind(null,a,e),l)}function zu(){}function _1(e,a){var l=ha();a=a===void 0?null:a;var n=l.memoizedState;return a!==null&&vu(a,n[1])?n[0]:(l.memoizedState=[e,a],e)}function L1(e,a){var l=ha();a=a===void 0?null:a;var n=l.memoizedState;if(a!==null&&vu(a,n[1]))return n[0];if(n=e(),gn){Sl(!0);try{e()}finally{Sl(!1)}}return l.memoizedState=[n,a],n}function Cu(e,a,l){return l===void 0||il&1073741824&&!(ye&261930)?e.memoizedState=a:(e.memoizedState=l,e=Sp(),pe.lanes|=e,Ql|=e,l)}function H1(e,a,l,n){return ht(l,a)?l:ar.current!==null?(e=Cu(e,l,n),ht(e,a)||(xa=!0),e):!(il&42)||il&1073741824&&!(ye&261930)?(xa=!0,e.memoizedState=l):(e=Sp(),pe.lanes|=e,Ql|=e,a)}function O1(e,a,l,n,r){var s=Te.p;Te.p=s!==0&&8>s?s:8;var i=oe.T,o={};oe.T=o,Mu(e,!1,a,l);try{var c=r(),d=oe.S;if(d!==null&&d(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=Jv(c,n);Ur(e,a,m,mt(e))}else Ur(e,a,n,mt(e))}catch(f){Ur(e,a,{then:function(){},status:"rejected",reason:f},mt())}finally{Te.p=s,i!==null&&o.types!==null&&(i.types=o.types),oe.T=i}}function nx(){}function Kc(e,a,l,n){if(e.tag!==5)throw Error(V(476));var r=V1(e).queue;O1(e,r,a,on,l===null?nx:function(){return $1(e),l(n)})}function V1(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:on,baseState:on,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:on},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:l},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function $1(e){var a=V1(e);a.next===null&&(a=e.alternate.memoizedState),Ur(e,a.next.queue,{},mt())}function ku(){return Ba(is)}function U1(){return ha().memoizedState}function q1(){return ha().memoizedState}function rx(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var l=mt();e=_l(l);var n=Ll(a,e,l);n!==null&&(Ja(n,a,l),Or(n,a,l)),a={cache:mu()},e.payload=a;return}a=a.return}}function sx(e,a,l){var n=mt();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},io(e)?W1(a,l):(l=ou(e,a,l,n),l!==null&&(Ja(l,e,n),G1(l,a,n)))}function Y1(e,a,l){var n=mt();Ur(e,a,l,n)}function Ur(e,a,l,n){var r={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(io(e))W1(a,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var i=a.lastRenderedState,o=s(i,l);if(r.hasEagerState=!0,r.eagerState=o,ht(o,i))return to(e,a,r,0),We===null&&ao(),!1}catch{}finally{}if(l=ou(e,a,r,n),l!==null)return Ja(l,e,n),G1(l,a,n),!0}return!1}function Mu(e,a,l,n){if(n={lane:2,revertLane:Hu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},io(e)){if(a)throw Error(V(479))}else a=ou(e,l,n,2),a!==null&&Ja(a,e,2)}function io(e){var a=e.alternate;return e===pe||a!==null&&a===pe}function W1(e,a){Pn=Si=!0;var l=e.pending;l===null?a.next=a:(a.next=l.next,l.next=a),e.pending=a}function G1(e,a,l){if(l&4194048){var n=a.lanes;n&=e.pendingLanes,l|=n,a.lanes=l,Th(e,l)}}var ns={readContext:Ba,use:ro,useCallback:ia,useContext:ia,useEffect:ia,useImperativeHandle:ia,useLayoutEffect:ia,useInsertionEffect:ia,useMemo:ia,useReducer:ia,useRef:ia,useState:ia,useDebugValue:ia,useDeferredValue:ia,useTransition:ia,useSyncExternalStore:ia,useId:ia,useHostTransitionStatus:ia,useFormState:ia,useActionState:ia,useOptimistic:ia,useMemoCache:ia,useCacheRefresh:ia};ns.useEffectEvent=ia;var X1={readContext:Ba,use:ro,useCallback:function(e,a){return $a().memoizedState=[e,a===void 0?null:a],e},useContext:Ba,useEffect:Y0,useImperativeHandle:function(e,a,l){l=l!=null?l.concat([e]):null,ni(4194308,4,D1.bind(null,a,e),l)},useLayoutEffect:function(e,a){return ni(4194308,4,e,a)},useInsertionEffect:function(e,a){ni(4,2,e,a)},useMemo:function(e,a){var l=$a();a=a===void 0?null:a;var n=e();if(gn){Sl(!0);try{e()}finally{Sl(!1)}}return l.memoizedState=[n,a],n},useReducer:function(e,a,l){var n=$a();if(l!==void 0){var r=l(a);if(gn){Sl(!0);try{l(a)}finally{Sl(!1)}}}else r=a;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=sx.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var a=$a();return e={current:e},a.memoizedState=e},useState:function(e){e=Pc(e);var a=e.queue,l=Y1.bind(null,pe,a);return a.dispatch=l,[e.memoizedState,l]},useDebugValue:zu,useDeferredValue:function(e,a){var l=$a();return Cu(l,e,a)},useTransition:function(){var e=Pc(!1);return e=O1.bind(null,pe,e.queue,!0,!1),$a().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,l){var n=pe,r=$a();if(we){if(l===void 0)throw Error(V(407));l=l()}else{if(l=a(),We===null)throw Error(V(349));ye&127||b1(n,a,l)}r.memoizedState=l;var s={value:l,getSnapshot:a};return r.queue=s,Y0(j1.bind(null,n,s,e),[e]),n.flags|=2048,tr(9,{destroy:void 0},y1.bind(null,n,s,l,a),null),l},useId:function(){var e=$a(),a=We.identifierPrefix;if(we){var l=_t,n=Bt;l=(n&~(1<<32-ut(n)-1)).toString(32)+l,a="_"+a+"R_"+l,l=zi++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=Iv++,a="_"+a+"r_"+l.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:ku,useFormState:$0,useActionState:$0,useOptimistic:function(e){var a=$a();a.memoizedState=a.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Mu.bind(null,pe,!0,l),l.dispatch=a,[e,a]},useMemoCache:wu,useCacheRefresh:function(){return $a().memoizedState=rx.bind(null,pe)},useEffectEvent:function(e){var a=$a(),l={impl:e};return a.memoizedState=l,function(){if(Re&2)throw Error(V(440));return l.impl.apply(void 0,arguments)}}},Ru={readContext:Ba,use:ro,useCallback:_1,useContext:Ba,useEffect:Su,useImperativeHandle:B1,useInsertionEffect:A1,useLayoutEffect:E1,useMemo:L1,useReducer:li,useRef:R1,useState:function(){return li(ol)},useDebugValue:zu,useDeferredValue:function(e,a){var l=ha();return H1(l,$e.memoizedState,e,a)},useTransition:function(){var e=li(ol)[0],a=ha().memoizedState;return[typeof e=="boolean"?e:ys(e),a]},useSyncExternalStore:x1,useId:U1,useHostTransitionStatus:ku,useFormState:U0,useActionState:U0,useOptimistic:function(e,a){var l=ha();return S1(l,$e,e,a)},useMemoCache:wu,useCacheRefresh:q1};Ru.useEffectEvent=T1;var Q1={readContext:Ba,use:ro,useCallback:_1,useContext:Ba,useEffect:Su,useImperativeHandle:B1,useInsertionEffect:A1,useLayoutEffect:E1,useMemo:L1,useReducer:Fo,useRef:R1,useState:function(){return Fo(ol)},useDebugValue:zu,useDeferredValue:function(e,a){var l=ha();return $e===null?Cu(l,e,a):H1(l,$e.memoizedState,e,a)},useTransition:function(){var e=Fo(ol)[0],a=ha().memoizedState;return[typeof e=="boolean"?e:ys(e),a]},useSyncExternalStore:x1,useId:U1,useHostTransitionStatus:ku,useFormState:q0,useActionState:q0,useOptimistic:function(e,a){var l=ha();return $e!==null?S1(l,$e,e,a):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:wu,useCacheRefresh:q1};Q1.useEffectEvent=T1;function Po(e,a,l,n){a=e.memoizedState,l=l(n,a),l=l==null?a:Je({},a,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Jc={enqueueSetState:function(e,a,l){e=e._reactInternals;var n=mt(),r=_l(n);r.payload=a,l!=null&&(r.callback=l),a=Ll(e,r,n),a!==null&&(Ja(a,e,n),Or(a,e,n))},enqueueReplaceState:function(e,a,l){e=e._reactInternals;var n=mt(),r=_l(n);r.tag=1,r.payload=a,l!=null&&(r.callback=l),a=Ll(e,r,n),a!==null&&(Ja(a,e,n),Or(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var l=mt(),n=_l(l);n.tag=2,a!=null&&(n.callback=a),a=Ll(e,n,l),a!==null&&(Ja(a,e,l),Or(a,e,l))}};function W0(e,a,l,n,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,i):a.prototype&&a.prototype.isPureReactComponent?!Ir(l,n)||!Ir(r,s):!0}function G0(e,a,l,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,n),a.state!==e&&Jc.enqueueReplaceState(a,a.state,null)}function vn(e,a){var l=a;if("ref"in a){l={};for(var n in a)n!=="ref"&&(l[n]=a[n])}if(e=e.defaultProps){l===a&&(l=Je({},l));for(var r in e)l[r]===void 0&&(l[r]=e[r])}return l}function F1(e){vi(e)}function P1(e){console.error(e)}function Z1(e){vi(e)}function Ci(e,a){try{var l=e.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function X0(e,a,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ic(e,a,l){return l=_l(l),l.tag=3,l.payload={element:null},l.callback=function(){Ci(e,a)},l}function K1(e){return e=_l(e),e.tag=3,e}function J1(e,a,l,n){var r=l.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;e.payload=function(){return r(s)},e.callback=function(){X0(a,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){X0(a,l,n),typeof r!="function"&&(Hl===null?Hl=new Set([this]):Hl.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function ix(e,a,l,n,r){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=l.alternate,a!==null&&mr(a,l,r,!0),l=pt.current,l!==null){switch(l.tag){case 31:case 13:return St===null?Ai():l.alternate===null&&oa===0&&(oa=3),l.flags&=-257,l.flags|=65536,l.lanes=r,n===ji?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([n]):a.add(n),sc(e,n,r)),!1;case 22:return l.flags|=65536,n===ji?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([n]):l.add(n)),sc(e,n,r)),!1}throw Error(V(435,l.tag))}return sc(e,n,r),Ai(),!1}if(we)return a=pt.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=r,n!==$c&&(e=Error(V(422),{cause:n}),as(wt(e,l)))):(n!==$c&&(a=Error(V(423),{cause:n}),as(wt(a,l))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=wt(n,l),r=Ic(e.stateNode,n,r),Qo(e,r),oa!==4&&(oa=2)),!1;var s=Error(V(520),{cause:n});if(s=wt(s,l),Wr===null?Wr=[s]:Wr.push(s),oa!==4&&(oa=2),a===null)return!0;n=wt(n,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,e=r&-r,l.lanes|=e,e=Ic(l.stateNode,n,e),Qo(l,e),!1;case 1:if(a=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Hl===null||!Hl.has(s))))return l.flags|=65536,r&=-r,l.lanes|=r,r=K1(r),J1(r,e,l,n),Qo(l,r),!1}l=l.return}while(l!==null);return!1}var Tu=Error(V(461)),xa=!1;function Aa(e,a,l,n){a.child=e===null?m1(a,null,l,n):fn(a,e.child,l,n)}function Q0(e,a,l,n,r){l=l.render;var s=a.ref;if("ref"in n){var i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}else i=n;return pn(a),n=xu(e,a,l,i,s,r),o=bu(),e!==null&&!xa?(yu(e,a,r),cl(e,a,r)):(we&&o&&du(a),a.flags|=1,Aa(e,a,n,r),a.child)}function F0(e,a,l,n,r){if(e===null){var s=l.type;return typeof s=="function"&&!cu(s)&&s.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=s,I1(e,a,s,n,r)):(e=ai(l.type,null,n,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!Au(e,r)){var i=s.memoizedProps;if(l=l.compare,l=l!==null?l:Ir,l(i,n)&&e.ref===a.ref)return cl(e,a,r)}return a.flags|=1,e=tl(s,n),e.ref=a.ref,e.return=a,a.child=e}function I1(e,a,l,n,r){if(e!==null){var s=e.memoizedProps;if(Ir(s,n)&&e.ref===a.ref)if(xa=!1,a.pendingProps=n=s,Au(e,r))e.flags&131072&&(xa=!0);else return a.lanes=e.lanes,cl(e,a,r)}return ed(e,a,l,n,r)}function ep(e,a,l,n){var r=n.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(a.flags&128){if(s=s!==null?s.baseLanes|l:l,e!==null){for(n=a.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~s}else n=0,a.child=null;return P0(e,a,s,l,n)}if(l&536870912)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ti(a,s!==null?s.cachePool:null),s!==null?H0(a,s):Qc(),f1(a);else return n=a.lanes=536870912,P0(e,a,s!==null?s.baseLanes|l:l,l,n)}else s!==null?(ti(a,s.cachePool),H0(a,s),jl(),a.memoizedState=null):(e!==null&&ti(a,null),Qc(),jl());return Aa(e,a,r,l),a.child}function Mr(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function P0(e,a,l,n,r){var s=hu();return s=s===null?null:{parent:va._currentValue,pool:s},a.memoizedState={baseLanes:l,cachePool:s},e!==null&&ti(a,null),Qc(),f1(a),e!==null&&mr(e,a,n,!0),a.childLanes=r,null}function ri(e,a){return a=ki({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Z0(e,a,l){return fn(a,e.child,null,l),e=ri(a,a.pendingProps),e.flags|=2,st(a),a.memoizedState=null,e}function ox(e,a,l){var n=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(we){if(n.mode==="hidden")return e=ri(a,n),a.lanes=536870912,Mr(null,e);if(Fc(a),(e=Ze)?(e=Xp(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Wl!==null?{id:Bt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},l=r1(e),l.return=a,a.child=l,Da=a,Ze=null)):e=null,e===null)throw Gl(a);return a.lanes=536870912,null}return ri(a,n)}var s=e.memoizedState;if(s!==null){var i=s.dehydrated;if(Fc(a),r)if(a.flags&256)a.flags&=-257,a=Z0(e,a,l);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(V(558));else if(xa||mr(e,a,l,!1),r=(l&e.childLanes)!==0,xa||r){if(n=We,n!==null&&(i=Ah(n,l),i!==0&&i!==s.retryLane))throw s.retryLane=i,wn(e,i),Ja(n,e,i),Tu;Ai(),a=Z0(e,a,l)}else e=s.treeContext,Ze=zt(i.nextSibling),Da=a,we=!0,Bl=null,Nt=!1,e!==null&&i1(a,e),a=ri(a,n),a.flags|=4096;return a}return e=tl(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function si(e,a){var l=a.ref;if(l===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(V(284));(e===null||e.ref!==l)&&(a.flags|=4194816)}}function ed(e,a,l,n,r){return pn(a),l=xu(e,a,l,n,void 0,r),n=bu(),e!==null&&!xa?(yu(e,a,r),cl(e,a,r)):(we&&n&&du(a),a.flags|=1,Aa(e,a,l,r),a.child)}function K0(e,a,l,n,r,s){return pn(a),a.updateQueue=null,l=v1(a,n,l,r),g1(e),n=bu(),e!==null&&!xa?(yu(e,a,s),cl(e,a,s)):(we&&n&&du(a),a.flags|=1,Aa(e,a,l,s),a.child)}function J0(e,a,l,n,r){if(pn(a),a.stateNode===null){var s=$n,i=l.contextType;typeof i=="object"&&i!==null&&(s=Ba(i)),s=new l(n,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Jc,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=n,s.state=a.memoizedState,s.refs={},fu(a),i=l.contextType,s.context=typeof i=="object"&&i!==null?Ba(i):$n,s.state=a.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(Po(a,l,i,n),s.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&Jc.enqueueReplaceState(s,s.state,null),$r(a,n,s,r),Vr(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){s=a.stateNode;var o=a.memoizedProps,c=vn(l,o);s.props=c;var d=s.context,m=l.contextType;i=$n,typeof m=="object"&&m!==null&&(i=Ba(m));var f=l.getDerivedStateFromProps;m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||d!==i)&&G0(a,s,n,i),xl=!1;var p=a.memoizedState;s.state=p,$r(a,n,s,r),Vr(),d=a.memoizedState,o||p!==d||xl?(typeof f=="function"&&(Po(a,l,f,n),d=a.memoizedState),(c=xl||W0(a,l,c,n,p,d,i))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=d),s.props=n,s.state=d,s.context=i,n=c):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{s=a.stateNode,Gc(e,a),i=a.memoizedProps,m=vn(l,i),s.props=m,f=a.pendingProps,p=s.context,d=l.contextType,c=$n,typeof d=="object"&&d!==null&&(c=Ba(d)),o=l.getDerivedStateFromProps,(d=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==f||p!==c)&&G0(a,s,n,c),xl=!1,p=a.memoizedState,s.state=p,$r(a,n,s,r),Vr();var v=a.memoizedState;i!==f||p!==v||xl||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof o=="function"&&(Po(a,l,o,n),v=a.memoizedState),(m=xl||W0(a,l,m,n,p,v,c)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,c)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=v),s.props=n,s.state=v,s.context=c,n=m):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),n=!1)}return s=n,si(e,a),n=(a.flags&128)!==0,s||n?(s=a.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&n?(a.child=fn(a,e.child,null,r),a.child=fn(a,null,l,r)):Aa(e,a,l,r),a.memoizedState=s.state,e=a.child):e=cl(e,a,r),e}function I0(e,a,l,n){return hn(),a.flags|=256,Aa(e,a,l,n),a.child}var Zo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:c1()}}function Jo(e,a,l){return e=e!==null?e.childLanes&~l:0,a&&(e|=ot),e}function ap(e,a,l){var n=a.pendingProps,r=!1,s=(a.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(ma.current&2)!==0),i&&(r=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(we){if(r?yl(a):jl(),(e=Ze)?(e=Xp(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Wl!==null?{id:Bt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},l=r1(e),l.return=a,a.child=l,Da=a,Ze=null)):e=null,e===null)throw Gl(a);return pd(e)?a.lanes=32:a.lanes=536870912,null}var o=n.children;return n=n.fallback,r?(jl(),r=a.mode,o=ki({mode:"hidden",children:o},r),n=cn(n,r,l,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=Ko(l),n.childLanes=Jo(e,i,l),a.memoizedState=Zo,Mr(null,n)):(yl(a),ad(a,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(s)a.flags&256?(yl(a),a.flags&=-257,a=Io(e,a,l)):a.memoizedState!==null?(jl(),a.child=e.child,a.flags|=128,a=null):(jl(),o=n.fallback,r=a.mode,n=ki({mode:"visible",children:n.children},r),o=cn(o,r,l,null),o.flags|=2,n.return=a,o.return=a,n.sibling=o,a.child=n,fn(a,e.child,null,l),n=a.child,n.memoizedState=Ko(l),n.childLanes=Jo(e,i,l),a.memoizedState=Zo,a=Mr(null,n));else if(yl(a),pd(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var d=i.dgst;i=d,n=Error(V(419)),n.stack="",n.digest=i,as({value:n,source:null,stack:null}),a=Io(e,a,l)}else if(xa||mr(e,a,l,!1),i=(l&e.childLanes)!==0,xa||i){if(i=We,i!==null&&(n=Ah(i,l),n!==0&&n!==c.retryLane))throw c.retryLane=n,wn(e,n),Ja(i,e,n),Tu;hd(o)||Ai(),a=Io(e,a,l)}else hd(o)?(a.flags|=192,a.child=e.child,a=null):(e=c.treeContext,Ze=zt(o.nextSibling),Da=a,we=!0,Bl=null,Nt=!1,e!==null&&i1(a,e),a=ad(a,n.children),a.flags|=4096);return a}return r?(jl(),o=n.fallback,r=a.mode,c=e.child,d=c.sibling,n=tl(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,d!==null?o=tl(d,o):(o=cn(o,r,l,null),o.flags|=2),o.return=a,n.return=a,n.sibling=o,a.child=n,Mr(null,n),n=a.child,o=e.child.memoizedState,o===null?o=Ko(l):(r=o.cachePool,r!==null?(c=va._currentValue,r=r.parent!==c?{parent:c,pool:c}:r):r=c1(),o={baseLanes:o.baseLanes|l,cachePool:r}),n.memoizedState=o,n.childLanes=Jo(e,i,l),a.memoizedState=Zo,Mr(e.child,n)):(yl(a),l=e.child,e=l.sibling,l=tl(l,{mode:"visible",children:n.children}),l.return=a,l.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=l,a.memoizedState=null,l)}function ad(e,a){return a=ki({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function ki(e,a){return e=it(22,e,null,a),e.lanes=0,e}function Io(e,a,l){return fn(a,e.child,null,l),e=ad(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function em(e,a,l){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),qc(e.return,a,l)}function ec(e,a,l,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:r,treeForkCount:s}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=r,i.treeForkCount=s)}function tp(e,a,l){var n=a.pendingProps,r=n.revealOrder,s=n.tail;n=n.children;var i=ma.current,o=(i&2)!==0;if(o?(i=i&1|2,a.flags|=128):i&=1,Xe(ma,i),Aa(e,a,n,l),n=we?es:0,!o&&e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,l,a);else if(e.tag===19)em(e,l,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(l=a.child,r=null;l!==null;)e=l.alternate,e!==null&&Ni(e)===null&&(r=l),l=l.sibling;l=r,l===null?(r=a.child,a.child=null):(r=l.sibling,l.sibling=null),ec(a,!1,r,l,s,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Ni(e)===null){a.child=r;break}e=r.sibling,r.sibling=l,l=r,r=e}ec(a,!0,l,null,s,n);break;case"together":ec(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function cl(e,a,l){if(e!==null&&(a.dependencies=e.dependencies),Ql|=a.lanes,!(l&a.childLanes))if(e!==null){if(mr(e,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(V(153));if(a.child!==null){for(e=a.child,l=tl(e,e.pendingProps),a.child=l,l.return=a;e.sibling!==null;)e=e.sibling,l=l.sibling=tl(e,e.pendingProps),l.return=a;l.sibling=null}return a.child}function Au(e,a){return e.lanes&a?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function cx(e,a,l){switch(a.tag){case 3:hi(a,a.stateNode.containerInfo),bl(a,va,e.memoizedState.cache),hn();break;case 27:case 5:Rc(a);break;case 4:hi(a,a.stateNode.containerInfo);break;case 10:bl(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Fc(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(yl(a),a.flags|=128,null):l&a.child.childLanes?ap(e,a,l):(yl(a),e=cl(e,a,l),e!==null?e.sibling:null);yl(a);break;case 19:var r=(e.flags&128)!==0;if(n=(l&a.childLanes)!==0,n||(mr(e,a,l,!1),n=(l&a.childLanes)!==0),r){if(n)return tp(e,a,l);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xe(ma,ma.current),n)break;return null;case 22:return a.lanes=0,ep(e,a,l,a.pendingProps);case 24:bl(a,va,e.memoizedState.cache)}return cl(e,a,l)}function lp(e,a,l){if(e!==null)if(e.memoizedProps!==a.pendingProps)xa=!0;else{if(!Au(e,l)&&!(a.flags&128))return xa=!1,cx(e,a,l);xa=!!(e.flags&131072)}else xa=!1,we&&a.flags&1048576&&s1(a,es,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=tn(a.elementType),a.type=e,typeof e=="function")cu(e)?(n=vn(e,n),a.tag=1,a=J0(null,a,e,n,l)):(a.tag=0,a=ed(null,a,e,n,l));else{if(e!=null){var r=e.$$typeof;if(r===Pd){a.tag=11,a=Q0(null,a,e,n,l);break e}else if(r===Zd){a.tag=14,a=F0(null,a,e,n,l);break e}}throw a=kc(e)||e,Error(V(306,a,""))}}return a;case 0:return ed(e,a,a.type,a.pendingProps,l);case 1:return n=a.type,r=vn(n,a.pendingProps),J0(e,a,n,r,l);case 3:e:{if(hi(a,a.stateNode.containerInfo),e===null)throw Error(V(387));n=a.pendingProps;var s=a.memoizedState;r=s.element,Gc(e,a),$r(a,n,null,l);var i=a.memoizedState;if(n=i.cache,bl(a,va,n),n!==s.cache&&Yc(a,[va],l,!0),Vr(),n=i.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=I0(e,a,n,l);break e}else if(n!==r){r=wt(Error(V(424)),a),as(r),a=I0(e,a,n,l);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=zt(e.firstChild),Da=a,we=!0,Bl=null,Nt=!0,l=m1(a,null,n,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(hn(),n===r){a=cl(e,a,l);break e}Aa(e,a,n,l)}a=a.child}return a;case 26:return si(e,a),e===null?(l=ym(a.type,null,a.pendingProps,null))?a.memoizedState=l:we||(l=a.type,e=a.pendingProps,n=_i(Dl.current).createElement(l),n[Ea]=a,n[et]=e,_a(n,l,e),Ca(n),a.stateNode=n):a.memoizedState=ym(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Rc(a),e===null&&we&&(n=a.stateNode=Qp(a.type,a.pendingProps,Dl.current),Da=a,Nt=!0,r=Ze,Pl(a.type)?(fd=r,Ze=zt(n.firstChild)):Ze=r),Aa(e,a,a.pendingProps.children,l),si(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&we&&((r=n=Ze)&&(n=Vx(n,a.type,a.pendingProps,Nt),n!==null?(a.stateNode=n,Da=a,Ze=zt(n.firstChild),Nt=!1,r=!0):r=!1),r||Gl(a)),Rc(a),r=a.type,s=a.pendingProps,i=e!==null?e.memoizedProps:null,n=s.children,ud(r,s)?n=null:i!==null&&ud(r,i)&&(a.flags|=32),a.memoizedState!==null&&(r=xu(e,a,ex,null,null,l),is._currentValue=r),si(e,a),Aa(e,a,n,l),a.child;case 6:return e===null&&we&&((e=l=Ze)&&(l=$x(l,a.pendingProps,Nt),l!==null?(a.stateNode=l,Da=a,Ze=null,e=!0):e=!1),e||Gl(a)),null;case 13:return ap(e,a,l);case 4:return hi(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=fn(a,null,n,l):Aa(e,a,n,l),a.child;case 11:return Q0(e,a,a.type,a.pendingProps,l);case 7:return Aa(e,a,a.pendingProps,l),a.child;case 8:return Aa(e,a,a.pendingProps.children,l),a.child;case 12:return Aa(e,a,a.pendingProps.children,l),a.child;case 10:return n=a.pendingProps,bl(a,a.type,n.value),Aa(e,a,n.children,l),a.child;case 9:return r=a.type._context,n=a.pendingProps.children,pn(a),r=Ba(r),n=n(r),a.flags|=1,Aa(e,a,n,l),a.child;case 14:return F0(e,a,a.type,a.pendingProps,l);case 15:return I1(e,a,a.type,a.pendingProps,l);case 19:return tp(e,a,l);case 31:return ox(e,a,l);case 22:return ep(e,a,l,a.pendingProps);case 24:return pn(a),n=Ba(va),e===null?(r=hu(),r===null&&(r=We,s=mu(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=l),r=s),a.memoizedState={parent:n,cache:r},fu(a),bl(a,va,r)):(e.lanes&l&&(Gc(e,a),$r(a,null,null,l),Vr()),r=e.memoizedState,s=a.memoizedState,r.parent!==n?(r={parent:n,cache:n},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),bl(a,va,n)):(n=s.cache,bl(a,va,n),n!==r.cache&&Yc(a,[va],l,!0))),Aa(e,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(V(156,a.tag))}function Xt(e){e.flags|=4}function ac(e,a,l,n,r){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(kp())e.flags|=8192;else throw un=ji,pu}else e.flags&=-16777217}function am(e,a){if(a.type!=="stylesheet"||a.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zp(a))if(kp())e.flags|=8192;else throw un=ji,pu}function Ys(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Mh():536870912,e.lanes|=a,lr|=a)}function wr(e,a){if(!we)switch(e.tailMode){case"hidden":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var a=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(a)for(var r=e.child;r!==null;)l|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)l|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=l,a}function dx(e,a,l){var n=a.pendingProps;switch(uu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(a),null;case 1:return Pe(a),null;case 3:return l=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),ll(va),Kn(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(kn(a)?Xt(a):e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Xo())),Pe(a),null;case 26:var r=a.type,s=a.memoizedState;return e===null?(Xt(a),s!==null?(Pe(a),am(a,s)):(Pe(a),ac(a,r,null,n,l))):s?s!==e.memoizedState?(Xt(a),Pe(a),am(a,s)):(Pe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Xt(a),Pe(a),ac(a,r,e,n,l)),null;case 27:if(pi(a),l=Dl.current,r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Xt(a);else{if(!n){if(a.stateNode===null)throw Error(V(166));return Pe(a),null}e=Vt.current,kn(a)?T0(a):(e=Qp(r,n,l),a.stateNode=e,Xt(a))}return Pe(a),null;case 5:if(pi(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Xt(a);else{if(!n){if(a.stateNode===null)throw Error(V(166));return Pe(a),null}if(s=Vt.current,kn(a))T0(a);else{var i=_i(Dl.current);switch(s){case 1:s=i.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=i.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=i.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?i.createElement(r,{is:n.is}):i.createElement(r)}}s[Ea]=a,s[et]=n;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)s.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=s;e:switch(_a(s,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Xt(a)}}return Pe(a),ac(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,l),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Xt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(V(166));if(e=Dl.current,kn(a)){if(e=a.stateNode,l=a.memoizedProps,n=null,r=Da,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[Ea]=a,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Yp(e.nodeValue,l)),e||Gl(a,!0)}else e=_i(e).createTextNode(n),e[Ea]=a,a.stateNode=e}return Pe(a),null;case 31:if(l=a.memoizedState,e===null||e.memoizedState!==null){if(n=kn(a),l!==null){if(e===null){if(!n)throw Error(V(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(557));e[Ea]=a}else hn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Pe(a),e=!1}else l=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return a.flags&256?(st(a),a):(st(a),null);if(a.flags&128)throw Error(V(558))}return Pe(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=kn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(V(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(V(317));r[Ea]=a}else hn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Pe(a),r=!1}else r=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(st(a),a):(st(a),null)}return st(a),a.flags&128?(a.lanes=l,a):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=a.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==r&&(n.flags|=2048)),l!==e&&l&&(a.child.flags|=8192),Ys(a,a.updateQueue),Pe(a),null);case 4:return Kn(),e===null&&Ou(a.stateNode.containerInfo),Pe(a),null;case 10:return ll(a.type),Pe(a),null;case 19:if(ka(ma),n=a.memoizedState,n===null)return Pe(a),null;if(r=(a.flags&128)!==0,s=n.rendering,s===null)if(r)wr(n,!1);else{if(oa!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(s=Ni(e),s!==null){for(a.flags|=128,wr(n,!1),e=s.updateQueue,a.updateQueue=e,Ys(a,e),a.subtreeFlags=0,e=l,l=a.child;l!==null;)n1(l,e),l=l.sibling;return Xe(ma,ma.current&1|2),we&&Zt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&ct()>Ri&&(a.flags|=128,r=!0,wr(n,!1),a.lanes=4194304)}else{if(!r)if(e=Ni(s),e!==null){if(a.flags|=128,r=!0,e=e.updateQueue,a.updateQueue=e,Ys(a,e),wr(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!we)return Pe(a),null}else 2*ct()-n.renderingStartTime>Ri&&l!==536870912&&(a.flags|=128,r=!0,wr(n,!1),a.lanes=4194304);n.isBackwards?(s.sibling=a.child,a.child=s):(e=n.last,e!==null?e.sibling=s:a.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ct(),e.sibling=null,l=ma.current,Xe(ma,r?l&1|2:l&1),we&&Zt(a,n.treeForkCount),e):(Pe(a),null);case 22:case 23:return st(a),gu(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?l&536870912&&!(a.flags&128)&&(Pe(a),a.subtreeFlags&6&&(a.flags|=8192)):Pe(a),l=a.updateQueue,l!==null&&Ys(a,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==l&&(a.flags|=2048),e!==null&&ka(dn),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ll(va),Pe(a),null;case 25:return null;case 30:return null}throw Error(V(156,a.tag))}function ux(e,a){switch(uu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ll(va),Kn(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return pi(a),null;case 31:if(a.memoizedState!==null){if(st(a),a.alternate===null)throw Error(V(340));hn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(st(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(V(340));hn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return ka(ma),null;case 4:return Kn(),null;case 10:return ll(a.type),null;case 22:case 23:return st(a),gu(),e!==null&&ka(dn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ll(va),null;case 25:return null;default:return null}}function np(e,a){switch(uu(a),a.tag){case 3:ll(va),Kn();break;case 26:case 27:case 5:pi(a);break;case 4:Kn();break;case 31:a.memoizedState!==null&&st(a);break;case 13:st(a);break;case 19:ka(ma);break;case 10:ll(a.type);break;case 22:case 23:st(a),gu(),e!==null&&ka(dn);break;case 24:ll(va)}}function js(e,a){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){n=void 0;var s=l.create,i=l.inst;n=s(),i.destroy=n}l=l.next}while(l!==r)}}catch(o){_e(a,a.return,o)}}function Xl(e,a,l){try{var n=a.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&e)===e){var i=n.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,r=a;var c=l,d=o;try{d()}catch(m){_e(r,c,m)}}}n=n.next}while(n!==s)}}catch(m){_e(a,a.return,m)}}function rp(e){var a=e.updateQueue;if(a!==null){var l=e.stateNode;try{p1(a,l)}catch(n){_e(e,e.return,n)}}}function sp(e,a,l){l.props=vn(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){_e(e,a,n)}}function qr(e,a){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(r){_e(e,a,r)}}function Lt(e,a){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(r){_e(e,a,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(r){_e(e,a,r)}else l.current=null}function ip(e){var a=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(r){_e(e,e.return,r)}}function tc(e,a,l){try{var n=e.stateNode;Dx(n,e.type,l,a),n[et]=a}catch(r){_e(e,e.return,r)}}function op(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pl(e.type)||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,a,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(e),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=el));else if(n!==4&&(n===27&&Pl(e.type)&&(l=e.stateNode,a=null),e=e.child,e!==null))for(td(e,a,l),e=e.sibling;e!==null;)td(e,a,l),e=e.sibling}function Mi(e,a,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?l.insertBefore(e,a):l.appendChild(e);else if(n!==4&&(n===27&&Pl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Mi(e,a,l),e=e.sibling;e!==null;)Mi(e,a,l),e=e.sibling}function cp(e){var a=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);_a(a,n,l),a[Ea]=e,a[et]=l}catch(s){_e(e,e.return,s)}}var Kt=!1,ga=!1,nc=!1,tm=typeof WeakSet=="function"?WeakSet:Set,za=null;function mx(e,a){if(e=e.containerInfo,cd=Vi,e=Zh(e),su(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var i=0,o=-1,c=-1,d=0,m=0,f=e,p=null;a:for(;;){for(var v;f!==l||r!==0&&f.nodeType!==3||(o=i+r),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break a;if(p===l&&++d===r&&(o=i),p===s&&++m===n&&(c=i),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}l=o===-1||c===-1?null:{start:o,end:c}}else l=null}l=l||{start:0,end:0}}else l=null;for(dd={focusedElem:e,selectionRange:l},Vi=!1,za=a;za!==null;)if(a=za,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,za=e;else for(;za!==null;){switch(a=za,s=a.alternate,e=a.flags,a.tag){case 0:if(e&4&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)r=e[l],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,l=a,r=s.memoizedProps,s=s.memoizedState,n=l.stateNode;try{var j=vn(l.type,r);e=n.getSnapshotBeforeUpdate(j,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(y){_e(l,l.return,y)}}break;case 3:if(e&1024){if(e=a.stateNode.containerInfo,l=e.nodeType,l===9)md(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(V(163))}if(e=a.sibling,e!==null){e.return=a.return,za=e;break}za=a.return}}function dp(e,a,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:Ft(e,l),n&4&&js(5,l);break;case 1:if(Ft(e,l),n&4)if(e=l.stateNode,a===null)try{e.componentDidMount()}catch(i){_e(l,l.return,i)}else{var r=vn(l.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(r,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){_e(l,l.return,i)}}n&64&&rp(l),n&512&&qr(l,l.return);break;case 3:if(Ft(e,l),n&64&&(e=l.updateQueue,e!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{p1(e,a)}catch(i){_e(l,l.return,i)}}break;case 27:a===null&&n&4&&cp(l);case 26:case 5:Ft(e,l),a===null&&n&4&&ip(l),n&512&&qr(l,l.return);break;case 12:Ft(e,l);break;case 31:Ft(e,l),n&4&&hp(e,l);break;case 13:Ft(e,l),n&4&&pp(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=jx.bind(null,l),Ux(e,l))));break;case 22:if(n=l.memoizedState!==null||Kt,!n){a=a!==null&&a.memoizedState!==null||ga,r=Kt;var s=ga;Kt=n,(ga=a)&&!s?Pt(e,l,(l.subtreeFlags&8772)!==0):Ft(e,l),Kt=r,ga=s}break;case 30:break;default:Ft(e,l)}}function up(e){var a=e.alternate;a!==null&&(e.alternate=null,up(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&eu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var na=null,Za=!1;function Qt(e,a,l){for(l=l.child;l!==null;)mp(e,a,l),l=l.sibling}function mp(e,a,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ps,l)}catch{}switch(l.tag){case 26:ga||Lt(l,a),Qt(e,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ga||Lt(l,a);var n=na,r=Za;Pl(l.type)&&(na=l.stateNode,Za=!1),Qt(e,a,l),Xr(l.stateNode),na=n,Za=r;break;case 5:ga||Lt(l,a);case 6:if(n=na,r=Za,na=null,Qt(e,a,l),na=n,Za=r,na!==null)if(Za)try{(na.nodeType===9?na.body:na.nodeName==="HTML"?na.ownerDocument.body:na).removeChild(l.stateNode)}catch(s){_e(l,a,s)}else try{na.removeChild(l.stateNode)}catch(s){_e(l,a,s)}break;case 18:na!==null&&(Za?(e=na,fm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),ir(e)):fm(na,l.stateNode));break;case 4:n=na,r=Za,na=l.stateNode.containerInfo,Za=!0,Qt(e,a,l),na=n,Za=r;break;case 0:case 11:case 14:case 15:Xl(2,l,a),ga||Xl(4,l,a),Qt(e,a,l);break;case 1:ga||(Lt(l,a),n=l.stateNode,typeof n.componentWillUnmount=="function"&&sp(l,a,n)),Qt(e,a,l);break;case 21:Qt(e,a,l);break;case 22:ga=(n=ga)||l.memoizedState!==null,Qt(e,a,l),ga=n;break;default:Qt(e,a,l)}}function hp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ir(e)}catch(l){_e(a,a.return,l)}}}function pp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ir(e)}catch(l){_e(a,a.return,l)}}function hx(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new tm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new tm),a;default:throw Error(V(435,e.tag))}}function Ws(e,a){var l=hx(e);a.forEach(function(n){if(!l.has(n)){l.add(n);var r=wx.bind(null,e,n);n.then(r,r)}})}function Fa(e,a){var l=a.deletions;if(l!==null)for(var n=0;n<l.length;n++){var r=l[n],s=e,i=a,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Pl(o.type)){na=o.stateNode,Za=!1;break e}break;case 5:na=o.stateNode,Za=!1;break e;case 3:case 4:na=o.stateNode.containerInfo,Za=!0;break e}o=o.return}if(na===null)throw Error(V(160));mp(s,i,r),na=null,Za=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)fp(a,e),a=a.sibling}var Rt=null;function fp(e,a){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fa(a,e),Pa(e),n&4&&(Xl(3,e,e.return),js(3,e),Xl(5,e,e.return));break;case 1:Fa(a,e),Pa(e),n&512&&(ga||l===null||Lt(l,l.return)),n&64&&Kt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var r=Rt;if(Fa(a,e),Pa(e),n&512&&(ga||l===null||Lt(l,l.return)),n&4){var s=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,r=r.ownerDocument||r;a:switch(n){case"title":s=r.getElementsByTagName("title")[0],(!s||s[vs]||s[Ea]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(n),r.head.insertBefore(s,r.querySelector("head > title"))),_a(s,n,l),s[Ea]=e,Ca(s),n=s;break e;case"link":var i=wm("link","href",r).get(n+(l.href||""));if(i){for(var o=0;o<i.length;o++)if(s=i[o],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(o,1);break a}}s=r.createElement(n),_a(s,n,l),r.head.appendChild(s);break;case"meta":if(i=wm("meta","content",r).get(n+(l.content||""))){for(o=0;o<i.length;o++)if(s=i[o],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(o,1);break a}}s=r.createElement(n),_a(s,n,l),r.head.appendChild(s);break;default:throw Error(V(468,n))}s[Ea]=e,Ca(s),n=s}e.stateNode=n}else Nm(r,e.type,e.stateNode);else e.stateNode=jm(r,n,e.memoizedProps);else s!==n?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,n===null?Nm(r,e.type,e.stateNode):jm(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&tc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Fa(a,e),Pa(e),n&512&&(ga||l===null||Lt(l,l.return)),l!==null&&n&4&&tc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Fa(a,e),Pa(e),n&512&&(ga||l===null||Lt(l,l.return)),e.flags&32){r=e.stateNode;try{In(r,"")}catch(j){_e(e,e.return,j)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,tc(e,r,l!==null?l.memoizedProps:r)),n&1024&&(nc=!0);break;case 6:if(Fa(a,e),Pa(e),n&4){if(e.stateNode===null)throw Error(V(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(j){_e(e,e.return,j)}}break;case 3:if(ci=null,r=Rt,Rt=Li(a.containerInfo),Fa(a,e),Rt=r,Pa(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{ir(a.containerInfo)}catch(j){_e(e,e.return,j)}nc&&(nc=!1,gp(e));break;case 4:n=Rt,Rt=Li(e.stateNode.containerInfo),Fa(a,e),Pa(e),Rt=n;break;case 12:Fa(a,e),Pa(e);break;case 31:Fa(a,e),Pa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ws(e,n)));break;case 13:Fa(a,e),Pa(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(oo=ct()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ws(e,n)));break;case 22:r=e.memoizedState!==null;var c=l!==null&&l.memoizedState!==null,d=Kt,m=ga;if(Kt=d||r,ga=m||c,Fa(a,e),ga=m,Kt=d,Pa(e),n&8192)e:for(a=e.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(l===null||c||Kt||ga||ln(e)),l=null,a=e;;){if(a.tag===5||a.tag===26){if(l===null){c=l=a;try{if(s=c.stateNode,r)i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=c.stateNode;var f=c.memoizedProps.style,p=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(j){_e(c,c.return,j)}}}else if(a.tag===6){if(l===null){c=a;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(j){_e(c,c.return,j)}}}else if(a.tag===18){if(l===null){c=a;try{var v=c.stateNode;r?gm(v,!0):gm(c.stateNode,!1)}catch(j){_e(c,c.return,j)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Ws(e,l))));break;case 19:Fa(a,e),Pa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ws(e,n)));break;case 30:break;case 21:break;default:Fa(a,e),Pa(e)}}function Pa(e){var a=e.flags;if(a&2){try{for(var l,n=e.return;n!==null;){if(op(n)){l=n;break}n=n.return}if(l==null)throw Error(V(160));switch(l.tag){case 27:var r=l.stateNode,s=lc(e);Mi(e,s,r);break;case 5:var i=l.stateNode;l.flags&32&&(In(i,""),l.flags&=-33);var o=lc(e);Mi(e,o,i);break;case 3:case 4:var c=l.stateNode.containerInfo,d=lc(e);td(e,d,c);break;default:throw Error(V(161))}}catch(m){_e(e,e.return,m)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;gp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ft(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)dp(e,a.alternate,a),a=a.sibling}function ln(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Xl(4,a,a.return),ln(a);break;case 1:Lt(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&sp(a,a.return,l),ln(a);break;case 27:Xr(a.stateNode);case 26:case 5:Lt(a,a.return),ln(a);break;case 22:a.memoizedState===null&&ln(a);break;case 30:ln(a);break;default:ln(a)}e=e.sibling}}function Pt(e,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,r=e,s=a,i=s.flags;switch(s.tag){case 0:case 11:case 15:Pt(r,s,l),js(4,s);break;case 1:if(Pt(r,s,l),n=s,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(d){_e(n,n.return,d)}if(n=s,r=n.updateQueue,r!==null){var o=n.stateNode;try{var c=r.shared.hiddenCallbacks;if(c!==null)for(r.shared.hiddenCallbacks=null,r=0;r<c.length;r++)h1(c[r],o)}catch(d){_e(n,n.return,d)}}l&&i&64&&rp(s),qr(s,s.return);break;case 27:cp(s);case 26:case 5:Pt(r,s,l),l&&n===null&&i&4&&ip(s),qr(s,s.return);break;case 12:Pt(r,s,l);break;case 31:Pt(r,s,l),l&&i&4&&hp(r,s);break;case 13:Pt(r,s,l),l&&i&4&&pp(r,s);break;case 22:s.memoizedState===null&&Pt(r,s,l),qr(s,s.return);break;case 30:break;default:Pt(r,s,l)}a=a.sibling}}function Eu(e,a){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&bs(l))}function Du(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&bs(e))}function Mt(e,a,l,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)vp(e,a,l,n),a=a.sibling}function vp(e,a,l,n){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Mt(e,a,l,n),r&2048&&js(9,a);break;case 1:Mt(e,a,l,n);break;case 3:Mt(e,a,l,n),r&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&bs(e)));break;case 12:if(r&2048){Mt(e,a,l,n),e=a.stateNode;try{var s=a.memoizedProps,i=s.id,o=s.onPostCommit;typeof o=="function"&&o(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){_e(a,a.return,c)}}else Mt(e,a,l,n);break;case 31:Mt(e,a,l,n);break;case 13:Mt(e,a,l,n);break;case 23:break;case 22:s=a.stateNode,i=a.alternate,a.memoizedState!==null?s._visibility&2?Mt(e,a,l,n):Yr(e,a):s._visibility&2?Mt(e,a,l,n):(s._visibility|=2,Tn(e,a,l,n,(a.subtreeFlags&10256)!==0||!1)),r&2048&&Eu(i,a);break;case 24:Mt(e,a,l,n),r&2048&&Du(a.alternate,a);break;default:Mt(e,a,l,n)}}function Tn(e,a,l,n,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,i=a,o=l,c=n,d=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(s,i,o,c,r),js(8,i);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&2?Tn(s,i,o,c,r):Yr(s,i):(m._visibility|=2,Tn(s,i,o,c,r)),r&&d&2048&&Eu(i.alternate,i);break;case 24:Tn(s,i,o,c,r),r&&d&2048&&Du(i.alternate,i);break;default:Tn(s,i,o,c,r)}a=a.sibling}}function Yr(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=e,n=a,r=n.flags;switch(n.tag){case 22:Yr(l,n),r&2048&&Eu(n.alternate,n);break;case 24:Yr(l,n),r&2048&&Du(n.alternate,n);break;default:Yr(l,n)}a=a.sibling}}var Rr=8192;function Mn(e,a,l){if(e.subtreeFlags&Rr)for(e=e.child;e!==null;)xp(e,a,l),e=e.sibling}function xp(e,a,l){switch(e.tag){case 26:Mn(e,a,l),e.flags&Rr&&e.memoizedState!==null&&Ix(l,Rt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,a,l);break;case 3:case 4:var n=Rt;Rt=Li(e.stateNode.containerInfo),Mn(e,a,l),Rt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Rr,Rr=16777216,Mn(e,a,l),Rr=n):Mn(e,a,l));break;default:Mn(e,a,l)}}function bp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Nr(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];za=n,jp(n,e)}bp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yp(e),e=e.sibling}function yp(e){switch(e.tag){case 0:case 11:case 15:Nr(e),e.flags&2048&&Xl(9,e,e.return);break;case 3:Nr(e);break;case 12:Nr(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,ii(e)):Nr(e);break;default:Nr(e)}}function ii(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];za=n,jp(n,e)}bp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Xl(8,a,a.return),ii(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,ii(a));break;default:ii(a)}e=e.sibling}}function jp(e,a){for(;za!==null;){var l=za;switch(l.tag){case 0:case 11:case 15:Xl(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:bs(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,za=n;else e:for(l=e;za!==null;){n=za;var r=n.sibling,s=n.return;if(up(n),n===l){za=null;break e}if(r!==null){r.return=s,za=r;break e}za=s}}}var px={getCacheForType:function(e){var a=Ba(va),l=a.data.get(e);return l===void 0&&(l=e(),a.data.set(e,l)),l},cacheSignal:function(){return Ba(va).controller.signal}},fx=typeof WeakMap=="function"?WeakMap:Map,Re=0,We=null,be=null,ye=0,Be=0,rt=null,Cl=!1,pr=!1,Bu=!1,dl=0,oa=0,Ql=0,mn=0,_u=0,ot=0,lr=0,Wr=null,Ka=null,ld=!1,oo=0,wp=0,Ri=1/0,Ti=null,Hl=null,wa=0,Ol=null,nr=null,nl=0,nd=0,rd=null,Np=null,Gr=0,sd=null;function mt(){return Re&2&&ye!==0?ye&-ye:oe.T!==null?Hu():Eh()}function Sp(){if(ot===0)if(!(ye&536870912)||we){var e=Ls;Ls<<=1,!(Ls&3932160)&&(Ls=262144),ot=e}else ot=536870912;return e=pt.current,e!==null&&(e.flags|=32),ot}function Ja(e,a,l){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(rr(e,0),kl(e,ye,ot,!1)),gs(e,l),(!(Re&2)||e!==We)&&(e===We&&(!(Re&2)&&(mn|=l),oa===4&&kl(e,ye,ot,!1)),qt(e))}function zp(e,a,l){if(Re&6)throw Error(V(327));var n=!l&&(a&127)===0&&(a&e.expiredLanes)===0||fs(e,a),r=n?xx(e,a):rc(e,a,!0),s=n;do{if(r===0){pr&&!n&&kl(e,a,0,!1);break}else{if(l=e.current.alternate,s&&!gx(l)){r=rc(e,a,!1),s=!1;continue}if(r===2){if(s=a,e.errorRecoveryDisabledLanes&s)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var o=e;r=Wr;var c=o.current.memoizedState.isDehydrated;if(c&&(rr(o,i).flags|=256),i=rc(o,i,!1),i!==2){if(Bu&&!c){o.errorRecoveryDisabledLanes|=s,mn|=s,r=4;break e}s=Ka,Ka=r,s!==null&&(Ka===null?Ka=s:Ka.push.apply(Ka,s))}r=i}if(s=!1,r!==2)continue}}if(r===1){rr(e,0),kl(e,a,0,!0);break}e:{switch(n=e,s=r,s){case 0:case 1:throw Error(V(345));case 4:if((a&4194048)!==a)break;case 6:kl(n,a,ot,!Cl);break e;case 2:Ka=null;break;case 3:case 5:break;default:throw Error(V(329))}if((a&62914560)===a&&(r=oo+300-ct(),10<r)){if(kl(n,a,ot,!Cl),Ki(n,0,!0)!==0)break e;nl=a,n.timeoutHandle=Gp(lm.bind(null,n,l,Ka,Ti,ld,a,ot,mn,lr,Cl,s,"Throttled",-0,0),r);break e}lm(n,l,Ka,Ti,ld,a,ot,mn,lr,Cl,s,null,-0,0)}}break}while(!0);qt(e)}function lm(e,a,l,n,r,s,i,o,c,d,m,f,p,v){if(e.timeoutHandle=-1,f=a.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:el},xp(a,s,f);var j=(s&62914560)===s?oo-ct():(s&4194048)===s?wp-ct():0;if(j=e2(f,j),j!==null){nl=s,e.cancelPendingCommit=j(rm.bind(null,e,a,s,l,n,r,i,o,c,m,f,null,p,v)),kl(e,s,i,!d);return}}rm(e,a,s,l,n,r,i,o,c)}function gx(e){for(var a=e;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var r=l[n],s=r.getSnapshot;r=r.value;try{if(!ht(s(),r))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function kl(e,a,l,n){a&=~_u,a&=~mn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var r=a;0<r;){var s=31-ut(r),i=1<<s;n[s]=-1,r&=~i}l!==0&&Rh(e,l,a)}function co(){return Re&6?!0:(ws(0),!1)}function Lu(){if(be!==null){if(Be===0)var e=be.return;else e=be,al=Nn=null,ju(e),Fn=null,ts=0,e=be;for(;e!==null;)np(e.alternate,e),e=e.return;be=null}}function rr(e,a){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Lx(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),nl=0,Lu(),We=e,be=l=tl(e.current,null),ye=a,Be=0,rt=null,Cl=!1,pr=fs(e,a),Bu=!1,lr=ot=_u=mn=Ql=oa=0,Ka=Wr=null,ld=!1,a&8&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var r=31-ut(n),s=1<<r;a|=e[r],n&=~s}return dl=a,ao(),l}function Cp(e,a){pe=null,oe.H=ns,a===hr||a===lo?(a=_0(),Be=3):a===pu?(a=_0(),Be=4):Be=a===Tu?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,rt=a,be===null&&(oa=1,Ci(e,wt(a,e.current)))}function kp(){var e=pt.current;return e===null?!0:(ye&4194048)===ye?St===null:(ye&62914560)===ye||ye&536870912?e===St:!1}function Mp(){var e=oe.H;return oe.H=ns,e===null?ns:e}function Rp(){var e=oe.A;return oe.A=px,e}function Ai(){oa=4,Cl||(ye&4194048)!==ye&&pt.current!==null||(pr=!0),!(Ql&134217727)&&!(mn&134217727)||We===null||kl(We,ye,ot,!1)}function rc(e,a,l){var n=Re;Re|=2;var r=Mp(),s=Rp();(We!==e||ye!==a)&&(Ti=null,rr(e,a)),a=!1;var i=oa;e:do try{if(Be!==0&&be!==null){var o=be,c=rt;switch(Be){case 8:Lu(),i=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(a=!0);var d=Be;if(Be=0,rt=null,Yn(e,o,c,d),l&&pr){i=0;break e}break;default:d=Be,Be=0,rt=null,Yn(e,o,c,d)}}vx(),i=oa;break}catch(m){Cp(e,m)}while(!0);return a&&e.shellSuspendCounter++,al=Nn=null,Re=n,oe.H=r,oe.A=s,be===null&&(We=null,ye=0,ao()),i}function vx(){for(;be!==null;)Tp(be)}function xx(e,a){var l=Re;Re|=2;var n=Mp(),r=Rp();We!==e||ye!==a?(Ti=null,Ri=ct()+500,rr(e,a)):pr=fs(e,a);e:do try{if(Be!==0&&be!==null){a=be;var s=rt;a:switch(Be){case 1:Be=0,rt=null,Yn(e,a,s,1);break;case 2:case 9:if(B0(s)){Be=0,rt=null,nm(a);break}a=function(){Be!==2&&Be!==9||We!==e||(Be=7),qt(e)},s.then(a,a);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:B0(s)?(Be=0,rt=null,nm(a)):(Be=0,rt=null,Yn(e,a,s,7));break;case 5:var i=null;switch(be.tag){case 26:i=be.memoizedState;case 5:case 27:var o=be;if(i?Zp(i):o.stateNode.complete){Be=0,rt=null;var c=o.sibling;if(c!==null)be=c;else{var d=o.return;d!==null?(be=d,uo(d)):be=null}break a}}Be=0,rt=null,Yn(e,a,s,5);break;case 6:Be=0,rt=null,Yn(e,a,s,6);break;case 8:Lu(),oa=6;break e;default:throw Error(V(462))}}bx();break}catch(m){Cp(e,m)}while(!0);return al=Nn=null,oe.H=n,oe.A=r,Re=l,be!==null?0:(We=null,ye=0,ao(),oa)}function bx(){for(;be!==null&&!qg();)Tp(be)}function Tp(e){var a=lp(e.alternate,e,dl);e.memoizedProps=e.pendingProps,a===null?uo(e):be=a}function nm(e){var a=e,l=a.alternate;switch(a.tag){case 15:case 0:a=K0(l,a,a.pendingProps,a.type,void 0,ye);break;case 11:a=K0(l,a,a.pendingProps,a.type.render,a.ref,ye);break;case 5:ju(a);default:np(l,a),a=be=n1(a,dl),a=lp(l,a,dl)}e.memoizedProps=e.pendingProps,a===null?uo(e):be=a}function Yn(e,a,l,n){al=Nn=null,ju(a),Fn=null,ts=0;var r=a.return;try{if(ix(e,r,a,l,ye)){oa=1,Ci(e,wt(l,e.current)),be=null;return}}catch(s){if(r!==null)throw be=r,s;oa=1,Ci(e,wt(l,e.current)),be=null;return}a.flags&32768?(we||n===1?e=!0:pr||ye&536870912?e=!1:(Cl=e=!0,(n===2||n===9||n===3||n===6)&&(n=pt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ap(a,e)):uo(a)}function uo(e){var a=e;do{if(a.flags&32768){Ap(a,Cl);return}e=a.return;var l=dx(a.alternate,a,dl);if(l!==null){be=l;return}if(a=a.sibling,a!==null){be=a;return}be=a=e}while(a!==null);oa===0&&(oa=5)}function Ap(e,a){do{var l=ux(e.alternate,e);if(l!==null){l.flags&=32767,be=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(e=e.sibling,e!==null)){be=e;return}be=e=l}while(e!==null);oa=6,be=null}function rm(e,a,l,n,r,s,i,o,c){e.cancelPendingCommit=null;do mo();while(wa!==0);if(Re&6)throw Error(V(327));if(a!==null){if(a===e.current)throw Error(V(177));if(s=a.lanes|a.childLanes,s|=iu,Jg(e,l,s,i,o,c),e===We&&(be=We=null,ye=0),nr=a,Ol=e,nl=l,nd=s,rd=r,Np=n,a.subtreeFlags&10256||a.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Nx(fi,function(){return Lp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,a.subtreeFlags&13878||n){n=oe.T,oe.T=null,r=Te.p,Te.p=2,i=Re,Re|=4;try{mx(e,a,l)}finally{Re=i,Te.p=r,oe.T=n}}wa=1,Ep(),Dp(),Bp()}}function Ep(){if(wa===1){wa=0;var e=Ol,a=nr,l=(a.flags&13878)!==0;if(a.subtreeFlags&13878||l){l=oe.T,oe.T=null;var n=Te.p;Te.p=2;var r=Re;Re|=4;try{fp(a,e);var s=dd,i=Zh(e.containerInfo),o=s.focusedElem,c=s.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(c!==null&&su(o)){var d=c.start,m=c.end;if(m===void 0&&(m=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(m,o.value.length);else{var f=o.ownerDocument||document,p=f&&f.defaultView||window;if(p.getSelection){var v=p.getSelection(),j=o.textContent.length,y=Math.min(c.start,j),w=c.end===void 0?y:Math.min(c.end,j);!v.extend&&y>w&&(i=w,w=y,y=i);var x=k0(o,y),g=k0(o,w);if(x&&g&&(v.rangeCount!==1||v.anchorNode!==x.node||v.anchorOffset!==x.offset||v.focusNode!==g.node||v.focusOffset!==g.offset)){var h=f.createRange();h.setStart(x.node,x.offset),v.removeAllRanges(),y>w?(v.addRange(h),v.extend(g.node,g.offset)):(h.setEnd(g.node,g.offset),v.addRange(h))}}}}for(f=[],v=o;v=v.parentNode;)v.nodeType===1&&f.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var b=f[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Vi=!!cd,dd=cd=null}finally{Re=r,Te.p=n,oe.T=l}}e.current=a,wa=2}}function Dp(){if(wa===2){wa=0;var e=Ol,a=nr,l=(a.flags&8772)!==0;if(a.subtreeFlags&8772||l){l=oe.T,oe.T=null;var n=Te.p;Te.p=2;var r=Re;Re|=4;try{dp(e,a.alternate,a)}finally{Re=r,Te.p=n,oe.T=l}}wa=3}}function Bp(){if(wa===4||wa===3){wa=0,Yg();var e=Ol,a=nr,l=nl,n=Np;a.subtreeFlags&10256||a.flags&10256?wa=5:(wa=0,nr=Ol=null,_p(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Hl=null),Id(l),a=a.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ps,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=oe.T,r=Te.p,Te.p=2,oe.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i];s(o.value,{componentStack:o.stack})}}finally{oe.T=a,Te.p=r}}nl&3&&mo(),qt(e),r=e.pendingLanes,l&261930&&r&42?e===sd?Gr++:(Gr=0,sd=e):Gr=0,ws(0)}}function _p(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,bs(a)))}function mo(){return Ep(),Dp(),Bp(),Lp()}function Lp(){if(wa!==5)return!1;var e=Ol,a=nd;nd=0;var l=Id(nl),n=oe.T,r=Te.p;try{Te.p=32>l?32:l,oe.T=null,l=rd,rd=null;var s=Ol,i=nl;if(wa=0,nr=Ol=null,nl=0,Re&6)throw Error(V(331));var o=Re;if(Re|=4,yp(s.current),vp(s,s.current,i,l),Re=o,ws(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ps,s)}catch{}return!0}finally{Te.p=r,oe.T=n,_p(e,a)}}function sm(e,a,l){a=wt(l,a),a=Ic(e.stateNode,a,2),e=Ll(e,a,2),e!==null&&(gs(e,2),qt(e))}function _e(e,a,l){if(e.tag===3)sm(e,e,l);else for(;a!==null;){if(a.tag===3){sm(a,e,l);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Hl===null||!Hl.has(n))){e=wt(l,e),l=K1(2),n=Ll(a,l,2),n!==null&&(J1(l,n,a,e),gs(n,2),qt(n));break}}a=a.return}}function sc(e,a,l){var n=e.pingCache;if(n===null){n=e.pingCache=new fx;var r=new Set;n.set(a,r)}else r=n.get(a),r===void 0&&(r=new Set,n.set(a,r));r.has(l)||(Bu=!0,r.add(l),e=yx.bind(null,e,a,l),a.then(e,e))}function yx(e,a,l){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,We===e&&(ye&l)===l&&(oa===4||oa===3&&(ye&62914560)===ye&&300>ct()-oo?!(Re&2)&&rr(e,0):_u|=l,lr===ye&&(lr=0)),qt(e)}function Hp(e,a){a===0&&(a=Mh()),e=wn(e,a),e!==null&&(gs(e,a),qt(e))}function jx(e){var a=e.memoizedState,l=0;a!==null&&(l=a.retryLane),Hp(e,l)}function wx(e,a){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(l=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(V(314))}n!==null&&n.delete(a),Hp(e,l)}function Nx(e,a){return Kd(e,a)}var Ei=null,An=null,id=!1,Di=!1,ic=!1,Ml=0;function qt(e){e!==An&&e.next===null&&(An===null?Ei=An=e:An=An.next=e),Di=!0,id||(id=!0,zx())}function ws(e,a){if(!ic&&Di){ic=!0;do for(var l=!1,n=Ei;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var s=0;else{var i=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-ut(42|e)+1)-1,s&=r&~(i&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,im(n,s))}else s=ye,s=Ki(n,n===We?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(s&3)||fs(n,s)||(l=!0,im(n,s));n=n.next}while(l);ic=!1}}function Sx(){Op()}function Op(){Di=id=!1;var e=0;Ml!==0&&_x()&&(e=Ml);for(var a=ct(),l=null,n=Ei;n!==null;){var r=n.next,s=Vp(n,a);s===0?(n.next=null,l===null?Ei=r:l.next=r,r===null&&(An=l)):(l=n,(e!==0||s&3)&&(Di=!0)),n=r}wa!==0&&wa!==5||ws(e),Ml!==0&&(Ml=0)}function Vp(e,a){for(var l=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var i=31-ut(s),o=1<<i,c=r[i];c===-1?(!(o&l)||o&n)&&(r[i]=Kg(o,a)):c<=a&&(e.expiredLanes|=o),s&=~o}if(a=We,l=ye,l=Ki(e,e===a?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===a&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&_o(n),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||fs(e,l)){if(a=l&-l,a===e.callbackPriority)return a;switch(n!==null&&_o(n),Id(l)){case 2:case 8:l=Ch;break;case 32:l=fi;break;case 268435456:l=kh;break;default:l=fi}return n=$p.bind(null,e),l=Kd(l,n),e.callbackPriority=a,e.callbackNode=l,a}return n!==null&&n!==null&&_o(n),e.callbackPriority=2,e.callbackNode=null,2}function $p(e,a){if(wa!==0&&wa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(mo()&&e.callbackNode!==l)return null;var n=ye;return n=Ki(e,e===We?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(zp(e,n,a),Vp(e,ct()),e.callbackNode!=null&&e.callbackNode===l?$p.bind(null,e):null)}function im(e,a){if(mo())return null;zp(e,a,!0)}function zx(){Hx(function(){Re&6?Kd(zh,Sx):Op()})}function Hu(){if(Ml===0){var e=er;e===0&&(e=_s,_s<<=1,!(_s&261888)&&(_s=256)),Ml=e}return Ml}function om(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Js(""+e)}function cm(e,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,e.id&&l.setAttribute("form",e.id),a.parentNode.insertBefore(l,a),e=new FormData(e),l.parentNode.removeChild(l),e}function Cx(e,a,l,n,r){if(a==="submit"&&l&&l.stateNode===r){var s=om((r[et]||null).action),i=n.submitter;i&&(a=(a=i[et]||null)?om(a.formAction):i.getAttribute("formAction"),a!==null&&(s=a,i=null));var o=new Ji("action","action",null,n,r);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ml!==0){var c=i?cm(r,i):new FormData(r);Kc(l,{pending:!0,data:c,method:r.method,action:s},null,c)}}else typeof s=="function"&&(o.preventDefault(),c=i?cm(r,i):new FormData(r),Kc(l,{pending:!0,data:c,method:r.method,action:s},s,c))},currentTarget:r}]})}}for(var oc=0;oc<Vc.length;oc++){var cc=Vc[oc],kx=cc.toLowerCase(),Mx=cc[0].toUpperCase()+cc.slice(1);At(kx,"on"+Mx)}At(Jh,"onAnimationEnd");At(Ih,"onAnimationIteration");At(e1,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(Wv,"onTransitionRun");At(Gv,"onTransitionStart");At(Xv,"onTransitionCancel");At(a1,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rs));function Up(e,a){a=(a&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],r=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var i=n.length-1;0<=i;i--){var o=n[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;s=o,r.currentTarget=d;try{s(r)}catch(m){vi(m)}r.currentTarget=null,s=c}else for(i=0;i<n.length;i++){if(o=n[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;s=o,r.currentTarget=d;try{s(r)}catch(m){vi(m)}r.currentTarget=null,s=c}}}}function xe(e,a){var l=a[Ac];l===void 0&&(l=a[Ac]=new Set);var n=e+"__bubble";l.has(n)||(qp(a,e,2,!1),l.add(n))}function dc(e,a,l){var n=0;a&&(n|=4),qp(l,e,n,a)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[Gs]){e[Gs]=!0,Dh.forEach(function(l){l!=="selectionchange"&&(Rx.has(l)||dc(l,!1,e),dc(l,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Gs]||(a[Gs]=!0,dc("selectionchange",!1,a))}}function qp(e,a,l,n){switch(af(a)){case 2:var r=l2;break;case 8:r=n2;break;default:r=qu}l=r.bind(null,a,l,e),r=void 0,!Lc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(a,l,{capture:!0,passive:r}):e.addEventListener(a,l,!0):r!==void 0?e.addEventListener(a,l,{passive:r}):e.addEventListener(a,l,!1)}function uc(e,a,l,n,r){var s=n;if(!(a&1)&&!(a&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===r)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===r)return;i=i.return}for(;o!==null;){if(i=Bn(o),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){n=s=i;continue e}o=o.parentNode}}n=n.return}Uh(function(){var d=s,m=tu(l),f=[];e:{var p=t1.get(e);if(p!==void 0){var v=Ji,j=e;switch(e){case"keypress":if(ei(l)===0)break e;case"keydown":case"keyup":v=wv;break;case"focusin":j="focus",v=$o;break;case"focusout":j="blur",v=$o;break;case"beforeblur":case"afterblur":v=$o;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=zv;break;case Jh:case Ih:case e1:v=hv;break;case a1:v=kv;break;case"scroll":case"scrollend":v=ov;break;case"wheel":v=Rv;break;case"copy":case"cut":case"paste":v=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=b0;break;case"toggle":case"beforetoggle":v=Av}var y=(a&4)!==0,w=!y&&(e==="scroll"||e==="scrollend"),x=y?p!==null?p+"Capture":null:p;y=[];for(var g=d,h;g!==null;){var b=g;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||x===null||(b=Kr(g,x),b!=null&&y.push(ss(g,b,h))),w)break;g=g.return}0<y.length&&(p=new v(p,j,null,l,m),f.push({event:p,listeners:y}))}}if(!(a&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&l!==_c&&(j=l.relatedTarget||l.fromElement)&&(Bn(j)||j[dr]))break e;if((v||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,v?(j=l.relatedTarget||l.toElement,v=d,j=j?Bn(j):null,j!==null&&(w=hs(j),y=j.tag,j!==w||y!==5&&y!==27&&y!==6)&&(j=null)):(v=null,j=d),v!==j)){if(y=v0,b="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=b0,b="onPointerLeave",x="onPointerEnter",g="pointer"),w=v==null?p:kr(v),h=j==null?p:kr(j),p=new y(b,g+"leave",v,l,m),p.target=w,p.relatedTarget=h,b=null,Bn(m)===d&&(y=new y(x,g+"enter",j,l,m),y.target=h,y.relatedTarget=w,b=y),w=b,v&&j)a:{for(y=Tx,x=v,g=j,h=0,b=x;b;b=y(b))h++;b=0;for(var N=g;N;N=y(N))b++;for(;0<h-b;)x=y(x),h--;for(;0<b-h;)g=y(g),b--;for(;h--;){if(x===g||g!==null&&x===g.alternate){y=x;break a}x=y(x),g=y(g)}y=null}else y=null;v!==null&&dm(f,p,v,y,!1),j!==null&&w!==null&&dm(f,w,j,y,!0)}}e:{if(p=d?kr(d):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=N0;else if(w0(p))if(Qh)C=Uv;else{C=Vv;var R=Ov}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&au(d.elementType)&&(C=N0):C=$v;if(C&&(C=C(e,d))){Xh(f,C,l,m);break e}R&&R(e,p,d),e==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&Bc(p,"number",p.value)}switch(R=d?kr(d):window,e){case"focusin":(w0(R)||R.contentEditable==="true")&&(Hn=R,Hc=d,Lr=null);break;case"focusout":Lr=Hc=Hn=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,M0(f,l,m);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":M0(f,l,m)}var k;if(ru)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ln?Wh(e,l)&&(L="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(L="onCompositionStart");L&&(Yh&&l.locale!=="ko"&&(Ln||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ln&&(k=qh()):(zl=m,lu="value"in zl?zl.value:zl.textContent,Ln=!0)),R=Bi(d,L),0<R.length&&(L=new x0(L,e,null,l,m),f.push({event:L,listeners:R}),k?L.data=k:(k=Gh(l),k!==null&&(L.data=k)))),(k=Dv?Bv(e,l):_v(e,l))&&(L=Bi(d,"onBeforeInput"),0<L.length&&(R=new x0("onBeforeInput","beforeinput",null,l,m),f.push({event:R,listeners:L}),R.data=k)),Cx(f,e,d,l,m)}Up(f,a)})}function ss(e,a,l){return{instance:e,listener:a,currentTarget:l}}function Bi(e,a){for(var l=a+"Capture",n=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Kr(e,l),r!=null&&n.unshift(ss(e,r,s)),r=Kr(e,a),r!=null&&n.push(ss(e,r,s))),e.tag===3)return n;e=e.return}return[]}function Tx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dm(e,a,l,n,r){for(var s=a._reactName,i=[];l!==null&&l!==n;){var o=l,c=o.alternate,d=o.stateNode;if(o=o.tag,c!==null&&c===n)break;o!==5&&o!==26&&o!==27||d===null||(c=d,r?(d=Kr(l,s),d!=null&&i.unshift(ss(l,d,c))):r||(d=Kr(l,s),d!=null&&i.push(ss(l,d,c)))),l=l.return}i.length!==0&&e.push({event:a,listeners:i})}var Ax=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function um(e){return(typeof e=="string"?e:""+e).replace(Ax,`
`).replace(Ex,"")}function Yp(e,a){return a=um(a),um(e)===a}function Ve(e,a,l,n,r,s){switch(l){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||In(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&In(e,""+n);break;case"className":Os(e,"class",n);break;case"tabIndex":Os(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Os(e,l,n);break;case"style":$h(e,n,s);break;case"data":if(a!=="object"){Os(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Js(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(a!=="input"&&Ve(e,a,"name",r.name,r,null),Ve(e,a,"formEncType",r.formEncType,r,null),Ve(e,a,"formMethod",r.formMethod,r,null),Ve(e,a,"formTarget",r.formTarget,r,null)):(Ve(e,a,"encType",r.encType,r,null),Ve(e,a,"method",r.method,r,null),Ve(e,a,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Js(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=el);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(V(61));if(l=n.__html,l!=null){if(r.children!=null)throw Error(V(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Js(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ks(e,"popover",n);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ks(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=sv.get(l)||l,Ks(e,l,n))}}function od(e,a,l,n,r,s){switch(l){case"style":$h(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(V(61));if(l=n.__html,l!=null){if(r.children!=null)throw Error(V(60));e.innerHTML=l}}break;case"children":typeof n=="string"?In(e,n):(typeof n=="number"||typeof n=="bigint")&&In(e,""+n);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=el);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bh.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(r=l.endsWith("Capture"),a=l.slice(2,r?l.length-7:void 0),s=e[et]||null,s=s!=null?s[l]:null,typeof s=="function"&&e.removeEventListener(a,s,r),typeof n=="function")){typeof s!="function"&&s!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(a,n,r);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Ks(e,l,n)}}}function _a(e,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var n=!1,r=!1,s;for(s in l)if(l.hasOwnProperty(s)){var i=l[s];if(i!=null)switch(s){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(V(137,a));default:Ve(e,a,s,i,l,null)}}r&&Ve(e,a,"srcSet",l.srcSet,l,null),n&&Ve(e,a,"src",l.src,l,null);return;case"input":xe("invalid",e);var o=s=i=r=null,c=null,d=null;for(n in l)if(l.hasOwnProperty(n)){var m=l[n];if(m!=null)switch(n){case"name":r=m;break;case"type":i=m;break;case"checked":c=m;break;case"defaultChecked":d=m;break;case"value":s=m;break;case"defaultValue":o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(V(137,a));break;default:Ve(e,a,n,m,l,null)}}Hh(e,s,o,c,d,i,r,!1);return;case"select":xe("invalid",e),n=i=s=null;for(r in l)if(l.hasOwnProperty(r)&&(o=l[r],o!=null))switch(r){case"value":s=o;break;case"defaultValue":i=o;break;case"multiple":n=o;default:Ve(e,a,r,o,l,null)}a=s,l=i,e.multiple=!!n,a!=null?Gn(e,!!n,a,!1):l!=null&&Gn(e,!!n,l,!0);return;case"textarea":xe("invalid",e),s=r=n=null;for(i in l)if(l.hasOwnProperty(i)&&(o=l[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":r=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(V(91));break;default:Ve(e,a,i,o,l,null)}Vh(e,n,r,s);return;case"option":for(c in l)if(l.hasOwnProperty(c)&&(n=l[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ve(e,a,c,n,l,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(n=0;n<rs.length;n++)xe(rs[n],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(n=l[d],n!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(V(137,a));default:Ve(e,a,d,n,l,null)}return;default:if(au(a)){for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!==void 0&&od(e,a,m,n,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(n=l[o],n!=null&&Ve(e,a,o,n,l,null))}function Dx(e,a,l,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,i=null,o=null,c=null,d=null,m=null;for(v in l){var f=l[v];if(l.hasOwnProperty(v)&&f!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=f;default:n.hasOwnProperty(v)||Ve(e,a,v,null,n,f)}}for(var p in n){var v=n[p];if(f=l[p],n.hasOwnProperty(p)&&(v!=null||f!=null))switch(p){case"type":s=v;break;case"name":r=v;break;case"checked":d=v;break;case"defaultChecked":m=v;break;case"value":i=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(V(137,a));break;default:v!==f&&Ve(e,a,p,v,n,f)}}Dc(e,i,o,c,d,m,s,r);return;case"select":v=i=o=p=null;for(s in l)if(c=l[s],l.hasOwnProperty(s)&&c!=null)switch(s){case"value":break;case"multiple":v=c;default:n.hasOwnProperty(s)||Ve(e,a,s,null,n,c)}for(r in n)if(s=n[r],c=l[r],n.hasOwnProperty(r)&&(s!=null||c!=null))switch(r){case"value":p=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:s!==c&&Ve(e,a,r,s,n,c)}a=o,l=i,n=v,p!=null?Gn(e,!!l,p,!1):!!n!=!!l&&(a!=null?Gn(e,!!l,a,!0):Gn(e,!!l,l?[]:"",!1));return;case"textarea":v=p=null;for(o in l)if(r=l[o],l.hasOwnProperty(o)&&r!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ve(e,a,o,null,n,r)}for(i in n)if(r=n[i],s=l[i],n.hasOwnProperty(i)&&(r!=null||s!=null))switch(i){case"value":p=r;break;case"defaultValue":v=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(V(91));break;default:r!==s&&Ve(e,a,i,r,n,s)}Oh(e,p,v);return;case"option":for(var j in l)if(p=l[j],l.hasOwnProperty(j)&&p!=null&&!n.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:Ve(e,a,j,null,n,p)}for(c in n)if(p=n[c],v=l[c],n.hasOwnProperty(c)&&p!==v&&(p!=null||v!=null))switch(c){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Ve(e,a,c,p,n,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in l)p=l[y],l.hasOwnProperty(y)&&p!=null&&!n.hasOwnProperty(y)&&Ve(e,a,y,null,n,p);for(d in n)if(p=n[d],v=l[d],n.hasOwnProperty(d)&&p!==v&&(p!=null||v!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(V(137,a));break;default:Ve(e,a,d,p,n,v)}return;default:if(au(a)){for(var w in l)p=l[w],l.hasOwnProperty(w)&&p!==void 0&&!n.hasOwnProperty(w)&&od(e,a,w,void 0,n,p);for(m in n)p=n[m],v=l[m],!n.hasOwnProperty(m)||p===v||p===void 0&&v===void 0||od(e,a,m,p,n,v);return}}for(var x in l)p=l[x],l.hasOwnProperty(x)&&p!=null&&!n.hasOwnProperty(x)&&Ve(e,a,x,null,n,p);for(f in n)p=n[f],v=l[f],!n.hasOwnProperty(f)||p===v||p==null&&v==null||Ve(e,a,f,p,n,v)}function mm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var r=l[n],s=r.transferSize,i=r.initiatorType,o=r.duration;if(s&&o&&mm(i)){for(i=0,o=r.responseEnd,n+=1;n<l.length;n++){var c=l[n],d=c.startTime;if(d>o)break;var m=c.transferSize,f=c.initiatorType;m&&mm(f)&&(c=c.responseEnd,i+=m*(c<o?1:(o-d)/(c-d)))}if(--n,a+=8*(s+i)/(r.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cd=null,dd=null;function _i(e){return e.nodeType===9?e:e.ownerDocument}function hm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ud(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var mc=null;function _x(){var e=window.event;return e&&e.type==="popstate"?e===mc?!1:(mc=e,!0):(mc=null,!1)}var Gp=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(e){return pm.resolve(null).then(e).catch(Ox)}:Gp;function Ox(e){setTimeout(function(){throw e})}function Pl(e){return e==="head"}function fm(e,a){var l=a,n=0;do{var r=l.nextSibling;if(e.removeChild(l),r&&r.nodeType===8)if(l=r.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(r),ir(a);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Xr(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Xr(l);for(var s=l.firstChild;s;){var i=s.nextSibling,o=s.nodeName;s[vs]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=i}}else l==="body"&&Xr(e.ownerDocument.body);l=r}while(l);ir(a)}function gm(e,a){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function md(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":md(l),eu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Vx(e,a,l,n){for(;e.nodeType===1;){var r=l;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[vs])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function $x(e,a,l){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=zt(e.nextSibling),e===null))return null;return e}function Xp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ux(e,a){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||l.readyState!=="loading")a();else{var n=function(){a(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function zt(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var fd=null;function vm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(a===0)return zt(e.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}e=e.nextSibling}return null}function xm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return e;a--}else l!=="/$"&&l!=="/&"||a++}e=e.previousSibling}return null}function Qp(e,a,l){switch(a=_i(l),e){case"html":if(e=a.documentElement,!e)throw Error(V(452));return e;case"head":if(e=a.head,!e)throw Error(V(453));return e;case"body":if(e=a.body,!e)throw Error(V(454));return e;default:throw Error(V(451))}}function Xr(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);eu(e)}var Ct=new Map,bm=new Set;function Li(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ml=Te.d;Te.d={f:qx,r:Yx,D:Wx,C:Gx,L:Xx,m:Qx,X:Px,S:Fx,M:Zx};function qx(){var e=ml.f(),a=co();return e||a}function Yx(e){var a=ur(e);a!==null&&a.tag===5&&a.type==="form"?$1(a):ml.r(e)}var fr=typeof document>"u"?null:document;function Fp(e,a,l){var n=fr;if(n&&typeof a=="string"&&a){var r=jt(a);r='link[rel="'+e+'"][href="'+r+'"]',typeof l=="string"&&(r+='[crossorigin="'+l+'"]'),bm.has(r)||(bm.add(r),e={rel:e,crossOrigin:l,href:a},n.querySelector(r)===null&&(a=n.createElement("link"),_a(a,"link",e),Ca(a),n.head.appendChild(a)))}}function Wx(e){ml.D(e),Fp("dns-prefetch",e,null)}function Gx(e,a){ml.C(e,a),Fp("preconnect",e,a)}function Xx(e,a,l){ml.L(e,a,l);var n=fr;if(n&&e&&a){var r='link[rel="preload"][as="'+jt(a)+'"]';a==="image"&&l&&l.imageSrcSet?(r+='[imagesrcset="'+jt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(r+='[imagesizes="'+jt(l.imageSizes)+'"]')):r+='[href="'+jt(e)+'"]';var s=r;switch(a){case"style":s=sr(e);break;case"script":s=gr(e)}Ct.has(s)||(e=Je({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:e,as:a},l),Ct.set(s,e),n.querySelector(r)!==null||a==="style"&&n.querySelector(Ns(s))||a==="script"&&n.querySelector(Ss(s))||(a=n.createElement("link"),_a(a,"link",e),Ca(a),n.head.appendChild(a)))}}function Qx(e,a){ml.m(e,a);var l=fr;if(l&&e){var n=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+jt(n)+'"][href="'+jt(e)+'"]',s=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=gr(e)}if(!Ct.has(s)&&(e=Je({rel:"modulepreload",href:e},a),Ct.set(s,e),l.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ss(s)))return}n=l.createElement("link"),_a(n,"link",e),Ca(n),l.head.appendChild(n)}}}function Fx(e,a,l){ml.S(e,a,l);var n=fr;if(n&&e){var r=Wn(n).hoistableStyles,s=sr(e);a=a||"default";var i=r.get(s);if(!i){var o={loading:0,preload:null};if(i=n.querySelector(Ns(s)))o.loading=5;else{e=Je({rel:"stylesheet",href:e,"data-precedence":a},l),(l=Ct.get(s))&&Vu(e,l);var c=i=n.createElement("link");Ca(c),_a(c,"link",e),c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,oi(i,a,n)}i={type:"stylesheet",instance:i,count:1,state:o},r.set(s,i)}}}function Px(e,a){ml.X(e,a);var l=fr;if(l&&e){var n=Wn(l).hoistableScripts,r=gr(e),s=n.get(r);s||(s=l.querySelector(Ss(r)),s||(e=Je({src:e,async:!0},a),(a=Ct.get(r))&&$u(e,a),s=l.createElement("script"),Ca(s),_a(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(r,s))}}function Zx(e,a){ml.M(e,a);var l=fr;if(l&&e){var n=Wn(l).hoistableScripts,r=gr(e),s=n.get(r);s||(s=l.querySelector(Ss(r)),s||(e=Je({src:e,async:!0,type:"module"},a),(a=Ct.get(r))&&$u(e,a),s=l.createElement("script"),Ca(s),_a(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(r,s))}}function ym(e,a,l,n){var r=(r=Dl.current)?Li(r):null;if(!r)throw Error(V(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=sr(l.href),l=Wn(r).hoistableStyles,n=l.get(a),n||(n={type:"style",instance:null,count:0,state:null},l.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=sr(l.href);var s=Wn(r).hoistableStyles,i=s.get(e);if(i||(r=r.ownerDocument||r,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,i),(s=r.querySelector(Ns(e)))&&!s._p&&(i.instance=s,i.state.loading=5),Ct.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ct.set(e,l),s||Kx(r,e,l,i.state))),a&&n===null)throw Error(V(528,""));return i}if(a&&n!==null)throw Error(V(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=gr(l),l=Wn(r).hoistableScripts,n=l.get(a),n||(n={type:"script",instance:null,count:0,state:null},l.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(V(444,e))}}function sr(e){return'href="'+jt(e)+'"'}function Ns(e){return'link[rel="stylesheet"]['+e+"]"}function Pp(e){return Je({},e,{"data-precedence":e.precedence,precedence:null})}function Kx(e,a,l,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),_a(a,"link",l),Ca(a),e.head.appendChild(a))}function gr(e){return'[src="'+jt(e)+'"]'}function Ss(e){return"script[async]"+e}function jm(e,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+jt(l.href)+'"]');if(n)return a.instance=n,Ca(n),n;var r=Je({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ca(n),_a(n,"style",r),oi(n,l.precedence,e),a.instance=n;case"stylesheet":r=sr(l.href);var s=e.querySelector(Ns(r));if(s)return a.state.loading|=4,a.instance=s,Ca(s),s;n=Pp(l),(r=Ct.get(r))&&Vu(n,r),s=(e.ownerDocument||e).createElement("link"),Ca(s);var i=s;return i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),_a(s,"link",n),a.state.loading|=4,oi(s,l.precedence,e),a.instance=s;case"script":return s=gr(l.src),(r=e.querySelector(Ss(s)))?(a.instance=r,Ca(r),r):(n=l,(r=Ct.get(s))&&(n=Je({},l),$u(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ca(r),_a(r,"link",n),e.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(V(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(n=a.instance,a.state.loading|=4,oi(n,l.precedence,e));return a.instance}function oi(e,a,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,s=r,i=0;i<n.length;i++){var o=n[i];if(o.dataset.precedence===a)s=o;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(e,a.firstChild))}function Vu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function $u(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ci=null;function wm(e,a,l){if(ci===null){var n=new Map,r=ci=new Map;r.set(l,n)}else r=ci,n=r.get(l),n||(n=new Map,r.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),r=0;r<l.length;r++){var s=l[r];if(!(s[vs]||s[Ea]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var i=s.getAttribute(a)||"";i=e+i;var o=n.get(i);o?o.push(s):n.set(i,[s])}}return n}function Nm(e,a,l){e=e.ownerDocument||e,e.head.insertBefore(l,a==="title"?e.querySelector("head > title"):null)}function Jx(e,a,l){if(l===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Zp(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Ix(e,a,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var r=sr(n.href),s=a.querySelector(Ns(r));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Hi.bind(e),a.then(e,e)),l.state.loading|=4,l.instance=s,Ca(s);return}s=a.ownerDocument||a,n=Pp(n),(r=Ct.get(r))&&Vu(n,r),s=s.createElement("link"),Ca(s);var i=s;i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),_a(s,"link",n),l.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,a),(a=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Hi.bind(e),a.addEventListener("load",l),a.addEventListener("error",l))}}var hc=0;function e2(e,a){return e.stylesheets&&e.count===0&&di(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&di(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&hc===0&&(hc=62500*Bx());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&di(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>hc?50:800)+a);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function Hi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)di(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oi=null;function di(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oi=new Map,a.forEach(a2,e),Oi=null,Hi.call(e))}function a2(e,a){if(!(a.state.loading&4)){var l=Oi.get(e);if(l)var n=l.get(null);else{l=new Map,Oi.set(e,l);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var i=r[s];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}r=a.instance,i=r.getAttribute("data-precedence"),s=l.get(i)||n,s===n&&l.set(null,r),l.set(i,r),this.count++,n=Hi.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),a.state.loading|=4}}var is={$$typeof:It,Provider:null,Consumer:null,_currentValue:on,_currentValue2:on,_threadCount:0};function t2(e,a,l,n,r,s,i,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.hiddenUpdates=Lo(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Kp(e,a,l,n,r,s,i,o,c,d,m,f){return e=new t2(e,a,l,i,c,d,m,f,o),a=1,s===!0&&(a|=24),s=it(3,null,null,a),e.current=s,s.stateNode=e,a=mu(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:n,isDehydrated:l,cache:a},fu(s),e}function Jp(e){return e?(e=$n,e):$n}function Ip(e,a,l,n,r,s){r=Jp(r),n.context===null?n.context=r:n.pendingContext=r,n=_l(a),n.payload={element:l},s=s===void 0?null:s,s!==null&&(n.callback=s),l=Ll(e,n,a),l!==null&&(Ja(l,e,a),Or(l,e,a))}function Sm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<a?l:a}}function Uu(e,a){Sm(e,a),(e=e.alternate)&&Sm(e,a)}function ef(e){if(e.tag===13||e.tag===31){var a=wn(e,67108864);a!==null&&Ja(a,e,67108864),Uu(e,67108864)}}function zm(e){if(e.tag===13||e.tag===31){var a=mt();a=Jd(a);var l=wn(e,a);l!==null&&Ja(l,e,a),Uu(e,a)}}var Vi=!0;function l2(e,a,l,n){var r=oe.T;oe.T=null;var s=Te.p;try{Te.p=2,qu(e,a,l,n)}finally{Te.p=s,oe.T=r}}function n2(e,a,l,n){var r=oe.T;oe.T=null;var s=Te.p;try{Te.p=8,qu(e,a,l,n)}finally{Te.p=s,oe.T=r}}function qu(e,a,l,n){if(Vi){var r=gd(n);if(r===null)uc(e,a,n,$i,l),Cm(e,n);else if(s2(r,e,a,l,n))n.stopPropagation();else if(Cm(e,n),a&4&&-1<r2.indexOf(e)){for(;r!==null;){var s=ur(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var i=an(s.pendingLanes);if(i!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var c=1<<31-ut(i);o.entanglements[1]|=c,i&=~c}qt(s),!(Re&6)&&(Ri=ct()+500,ws(0))}}break;case 31:case 13:o=wn(s,2),o!==null&&Ja(o,s,2),co(),Uu(s,2)}if(s=gd(n),s===null&&uc(e,a,n,$i,l),s===r)break;r=s}r!==null&&n.stopPropagation()}else uc(e,a,n,null,l)}}function gd(e){return e=tu(e),Yu(e)}var $i=null;function Yu(e){if($i=null,e=Bn(e),e!==null){var a=hs(e);if(a===null)e=null;else{var l=a.tag;if(l===13){if(e=yh(a),e!==null)return e;e=null}else if(l===31){if(e=jh(a),e!==null)return e;e=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return $i=e,null}function af(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wg()){case zh:return 2;case Ch:return 8;case fi:case Gg:return 32;case kh:return 268435456;default:return 32}default:return 32}}var vd=!1,Vl=null,$l=null,Ul=null,os=new Map,cs=new Map,wl=[],r2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cm(e,a){switch(e){case"focusin":case"focusout":Vl=null;break;case"dragenter":case"dragleave":$l=null;break;case"mouseover":case"mouseout":Ul=null;break;case"pointerover":case"pointerout":os.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(a.pointerId)}}function Sr(e,a,l,n,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:l,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},a!==null&&(a=ur(a),a!==null&&ef(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function s2(e,a,l,n,r){switch(a){case"focusin":return Vl=Sr(Vl,e,a,l,n,r),!0;case"dragenter":return $l=Sr($l,e,a,l,n,r),!0;case"mouseover":return Ul=Sr(Ul,e,a,l,n,r),!0;case"pointerover":var s=r.pointerId;return os.set(s,Sr(os.get(s)||null,e,a,l,n,r)),!0;case"gotpointercapture":return s=r.pointerId,cs.set(s,Sr(cs.get(s)||null,e,a,l,n,r)),!0}return!1}function tf(e){var a=Bn(e.target);if(a!==null){var l=hs(a);if(l!==null){if(a=l.tag,a===13){if(a=yh(l),a!==null){e.blockedOn=a,d0(e.priority,function(){zm(l)});return}}else if(a===31){if(a=jh(l),a!==null){e.blockedOn=a,d0(e.priority,function(){zm(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var l=gd(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);_c=n,l.target.dispatchEvent(n),_c=null}else return a=ur(l),a!==null&&ef(a),e.blockedOn=l,!1;a.shift()}return!0}function km(e,a,l){ui(e)&&l.delete(a)}function i2(){vd=!1,Vl!==null&&ui(Vl)&&(Vl=null),$l!==null&&ui($l)&&($l=null),Ul!==null&&ui(Ul)&&(Ul=null),os.forEach(km),cs.forEach(km)}function Xs(e,a){e.blockedOn===a&&(e.blockedOn=null,vd||(vd=!0,Na.unstable_scheduleCallback(Na.unstable_NormalPriority,i2)))}var Qs=null;function Mm(e){Qs!==e&&(Qs=e,Na.unstable_scheduleCallback(Na.unstable_NormalPriority,function(){Qs===e&&(Qs=null);for(var a=0;a<e.length;a+=3){var l=e[a],n=e[a+1],r=e[a+2];if(typeof n!="function"){if(Yu(n||l)===null)continue;break}var s=ur(l);s!==null&&(e.splice(a,3),a-=3,Kc(s,{pending:!0,data:r,method:l.method,action:n},n,r))}}))}function ir(e){function a(c){return Xs(c,e)}Vl!==null&&Xs(Vl,e),$l!==null&&Xs($l,e),Ul!==null&&Xs(Ul,e),os.forEach(a),cs.forEach(a);for(var l=0;l<wl.length;l++){var n=wl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<wl.length&&(l=wl[0],l.blockedOn===null);)tf(l),l.blockedOn===null&&wl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var r=l[n],s=l[n+1],i=r[et]||null;if(typeof s=="function")i||Mm(l);else if(i){var o=null;if(s&&s.hasAttribute("formAction")){if(r=s,i=s[et]||null)o=i.formAction;else if(Yu(r)!==null)continue}else o=i.action;typeof o=="function"?l[n+1]=o:(l.splice(n,3),n-=3),Mm(l)}}}function lf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(i){return r=i})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function Wu(e){this._internalRoot=e}ho.prototype.render=Wu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(V(409));var l=a.current,n=mt();Ip(l,n,e,a,null,null)};ho.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Ip(e.current,2,null,e,null,null),co(),a[dr]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var a=Eh();e={blockedOn:null,target:e,priority:a};for(var l=0;l<wl.length&&a!==0&&a<wl[l].priority;l++);wl.splice(l,0,e),l===0&&tf(e)}};var Rm=xh.version;if(Rm!=="19.2.0")throw Error(V(527,Rm,"19.2.0"));Te.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Hg(a),e=e!==null?wh(e):null,e=e===null?null:e.stateNode,e};var o2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:oe,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{ps=Fs.inject(o2),dt=Fs}catch{}}Pi.createRoot=function(e,a){if(!bh(e))throw Error(V(299));var l=!1,n="",r=F1,s=P1,i=Z1;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Kp(e,1,!1,null,null,l,n,null,r,s,i,lf),e[dr]=a.current,Ou(e),new Wu(a)};Pi.hydrateRoot=function(e,a,l){if(!bh(e))throw Error(V(299));var n=!1,r="",s=F1,i=P1,o=Z1,c=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(r=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(c=l.formState)),a=Kp(e,1,!0,a,l??null,n,r,c,s,i,o,lf),a.context=Jp(null),l=a.current,n=mt(),n=Jd(n),r=_l(n),r.callback=null,Ll(l,r,n),l=n,a.current.lanes=l,gs(a,l),qt(a),e[dr]=a.current,Ou(e),new ho(a)};Pi.version="19.2.0";function nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf)}catch(e){console.error(e)}}nf(),mh.exports=Pi;var c2=mh.exports;const d2=th(c2);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},ds.apply(this,arguments)}var Rl;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rl||(Rl={}));const Tm="popstate";function u2(e){e===void 0&&(e={});function a(n,r){let{pathname:s,search:i,hash:o}=n.location;return xd("",{pathname:s,search:i,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function l(n,r){return typeof r=="string"?r:Ui(r)}return h2(a,l,null,e)}function ca(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function rf(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function m2(){return Math.random().toString(36).substr(2,8)}function Am(e,a){return{usr:e.state,key:e.key,idx:a}}function xd(e,a,l,n){return l===void 0&&(l=null),ds({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?vr(a):a,{state:l,key:a&&a.key||n||m2()})}function Ui(e){let{pathname:a="/",search:l="",hash:n=""}=e;return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function vr(e){let a={};if(e){let l=e.indexOf("#");l>=0&&(a.hash=e.substr(l),e=e.substr(0,l));let n=e.indexOf("?");n>=0&&(a.search=e.substr(n),e=e.substr(0,n)),e&&(a.pathname=e)}return a}function h2(e,a,l,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:s=!1}=n,i=r.history,o=Rl.Pop,c=null,d=m();d==null&&(d=0,i.replaceState(ds({},i.state,{idx:d}),""));function m(){return(i.state||{idx:null}).idx}function f(){o=Rl.Pop;let w=m(),x=w==null?null:w-d;d=w,c&&c({action:o,location:y.location,delta:x})}function p(w,x){o=Rl.Push;let g=xd(y.location,w,x);d=m()+1;let h=Am(g,d),b=y.createHref(g);try{i.pushState(h,"",b)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;r.location.assign(b)}s&&c&&c({action:o,location:y.location,delta:1})}function v(w,x){o=Rl.Replace;let g=xd(y.location,w,x);d=m();let h=Am(g,d),b=y.createHref(g);i.replaceState(h,"",b),s&&c&&c({action:o,location:y.location,delta:0})}function j(w){let x=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof w=="string"?w:Ui(w);return g=g.replace(/ $/,"%20"),ca(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let y={get action(){return o},get location(){return e(r,i)},listen(w){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Tm,f),c=w,()=>{r.removeEventListener(Tm,f),c=null}},createHref(w){return a(r,w)},createURL:j,encodeLocation(w){let x=j(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:v,go(w){return i.go(w)}};return y}var Em;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Em||(Em={}));function p2(e,a,l){return l===void 0&&(l="/"),f2(e,a,l)}function f2(e,a,l,n){let r=typeof a=="string"?vr(a):a,s=or(r.pathname||"/",l);if(s==null)return null;let i=sf(e);g2(i);let o=null;for(let c=0;o==null&&c<i.length;++c){let d=k2(s);o=z2(i[c],d)}return o}function sf(e,a,l,n){a===void 0&&(a=[]),l===void 0&&(l=[]),n===void 0&&(n="");let r=(s,i,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(ca(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=ql([n,c.relativePath]),m=l.concat(c);s.children&&s.children.length>0&&(ca(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),sf(s.children,a,m,d)),!(s.path==null&&!s.index)&&a.push({path:d,score:N2(d,s.index),routesMeta:m})};return e.forEach((s,i)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,i);else for(let c of of(s.path))r(s,i,c)}),a}function of(e){let a=e.split("/");if(a.length===0)return[];let[l,...n]=a,r=l.endsWith("?"),s=l.replace(/\?$/,"");if(n.length===0)return r?[s,""]:[s];let i=of(n.join("/")),o=[];return o.push(...i.map(c=>c===""?s:[s,c].join("/"))),r&&o.push(...i),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function g2(e){e.sort((a,l)=>a.score!==l.score?l.score-a.score:S2(a.routesMeta.map(n=>n.childrenIndex),l.routesMeta.map(n=>n.childrenIndex)))}const v2=/^:[\w-]+$/,x2=3,b2=2,y2=1,j2=10,w2=-2,Dm=e=>e==="*";function N2(e,a){let l=e.split("/"),n=l.length;return l.some(Dm)&&(n+=w2),a&&(n+=b2),l.filter(r=>!Dm(r)).reduce((r,s)=>r+(v2.test(s)?x2:s===""?y2:j2),n)}function S2(e,a){return e.length===a.length&&e.slice(0,-1).every((n,r)=>n===a[r])?e[e.length-1]-a[a.length-1]:0}function z2(e,a,l){let{routesMeta:n}=e,r={},s="/",i=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,m=s==="/"?a:a.slice(s.length)||"/",f=bd({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),p=c.route;if(!f)return null;Object.assign(r,f.params),i.push({params:r,pathname:ql([s,f.pathname]),pathnameBase:A2(ql([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=ql([s,f.pathnameBase]))}return i}function bd(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,n]=C2(e.path,e.caseSensitive,e.end),r=a.match(l);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:n.reduce((d,m,f)=>{let{paramName:p,isOptional:v}=m;if(p==="*"){let y=o[f]||"";i=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const j=o[f];return v&&!j?d[p]=void 0:d[p]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:i,pattern:e}}function C2(e,a,l){a===void 0&&(a=!1),l===void 0&&(l=!0),rf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,a?void 0:"i"),n]}function k2(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return rf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function or(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,n=e.charAt(l);return n&&n!=="/"?null:e.slice(l)||"/"}function M2(e,a){a===void 0&&(a="/");let{pathname:l,search:n="",hash:r=""}=typeof e=="string"?vr(e):e;return{pathname:l?l.startsWith("/")?l:R2(l,a):a,search:E2(n),hash:D2(r)}}function R2(e,a){let l=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?l.length>1&&l.pop():r!=="."&&l.push(r)}),l.length>1?l.join("/"):"/"}function pc(e,a,l,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T2(e){return e.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function cf(e,a){let l=T2(e);return a?l.map((n,r)=>r===l.length-1?n.pathname:n.pathnameBase):l.map(n=>n.pathnameBase)}function df(e,a,l,n){n===void 0&&(n=!1);let r;typeof e=="string"?r=vr(e):(r=ds({},e),ca(!r.pathname||!r.pathname.includes("?"),pc("?","pathname","search",r)),ca(!r.pathname||!r.pathname.includes("#"),pc("#","pathname","hash",r)),ca(!r.search||!r.search.includes("#"),pc("#","search","hash",r)));let s=e===""||r.pathname==="",i=s?"/":r.pathname,o;if(i==null)o=l;else{let f=a.length-1;if(!n&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?a[f]:"/"}let c=M2(r,o),d=i&&i!=="/"&&i.endsWith("/"),m=(s||i===".")&&l.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const ql=e=>e.join("/").replace(/\/\/+/g,"/"),A2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uf=["post","put","patch","delete"];new Set(uf);const _2=["get",...uf];new Set(_2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function us(){return us=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},us.apply(this,arguments)}const po=u.createContext(null),mf=u.createContext(null),Zl=u.createContext(null),fo=u.createContext(null),Sn=u.createContext({outlet:null,matches:[],isDataRoute:!1}),hf=u.createContext(null);function L2(e,a){let{relative:l}=a===void 0?{}:a;zs()||ca(!1);let{basename:n,navigator:r}=u.useContext(Zl),{hash:s,pathname:i,search:o}=go(e,{relative:l}),c=i;return n!=="/"&&(c=i==="/"?n:ql([n,i])),r.createHref({pathname:c,search:o,hash:s})}function zs(){return u.useContext(fo)!=null}function Kl(){return zs()||ca(!1),u.useContext(fo).location}function pf(e){u.useContext(Zl).static||u.useLayoutEffect(e)}function Et(){let{isDataRoute:e}=u.useContext(Sn);return e?P2():H2()}function H2(){zs()||ca(!1);let e=u.useContext(po),{basename:a,future:l,navigator:n}=u.useContext(Zl),{matches:r}=u.useContext(Sn),{pathname:s}=Kl(),i=JSON.stringify(cf(r,l.v7_relativeSplatPath)),o=u.useRef(!1);return pf(()=>{o.current=!0}),u.useCallback(function(d,m){if(m===void 0&&(m={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let f=df(d,JSON.parse(i),s,m.relative==="path");e==null&&a!=="/"&&(f.pathname=f.pathname==="/"?a:ql([a,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[a,n,i,s,e])}function go(e,a){let{relative:l}=a===void 0?{}:a,{future:n}=u.useContext(Zl),{matches:r}=u.useContext(Sn),{pathname:s}=Kl(),i=JSON.stringify(cf(r,n.v7_relativeSplatPath));return u.useMemo(()=>df(e,JSON.parse(i),s,l==="path"),[e,i,s,l])}function O2(e,a){return V2(e,a)}function V2(e,a,l,n){zs()||ca(!1);let{navigator:r}=u.useContext(Zl),{matches:s}=u.useContext(Sn),i=s[s.length-1],o=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=Kl(),m;if(a){var f;let w=typeof a=="string"?vr(a):a;c==="/"||(f=w.pathname)!=null&&f.startsWith(c)||ca(!1),m=w}else m=d;let p=m.pathname||"/",v=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=p2(e,{pathname:v}),y=W2(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:ql([c,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:ql([c,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,l,n);return a&&y?u.createElement(fo.Provider,{value:{location:us({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Rl.Pop}},y):y}function $2(){let e=F2(),a=B2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},a),l?u.createElement("pre",{style:r},l):null,null)}const U2=u.createElement($2,null);class q2 extends u.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){console.error("React Router caught the following error during render",a,l)}render(){return this.state.error!==void 0?u.createElement(Sn.Provider,{value:this.props.routeContext},u.createElement(hf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y2(e){let{routeContext:a,match:l,children:n}=e,r=u.useContext(po);return r&&r.static&&r.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=l.route.id),u.createElement(Sn.Provider,{value:a},n)}function W2(e,a,l,n){var r;if(a===void 0&&(a=[]),l===void 0&&(l=null),n===void 0&&(n=null),e==null){var s;if(!l)return null;if(l.errors)e=l.matches;else if((s=n)!=null&&s.v7_partialHydration&&a.length===0&&!l.initialized&&l.matches.length>0)e=l.matches;else return null}let i=e,o=(r=l)==null?void 0:r.errors;if(o!=null){let m=i.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);m>=0||ca(!1),i=i.slice(0,Math.min(i.length,m+1))}let c=!1,d=-1;if(l&&n&&n.v7_partialHydration)for(let m=0;m<i.length;m++){let f=i[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=m),f.route.id){let{loaderData:p,errors:v}=l,j=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||j){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((m,f,p)=>{let v,j=!1,y=null,w=null;l&&(v=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||U2,c&&(d<0&&p===0?(Z2("route-fallback"),j=!0,w=null):d===p&&(j=!0,w=f.route.hydrateFallbackElement||null)));let x=a.concat(i.slice(0,p+1)),g=()=>{let h;return v?h=y:j?h=w:f.route.Component?h=u.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,u.createElement(Y2,{match:f,routeContext:{outlet:m,matches:x,isDataRoute:l!=null},children:h})};return l&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?u.createElement(q2,{location:l.location,revalidation:l.revalidation,component:y,error:v,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}var ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ff||{}),gf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gf||{});function G2(e){let a=u.useContext(po);return a||ca(!1),a}function X2(e){let a=u.useContext(mf);return a||ca(!1),a}function Q2(e){let a=u.useContext(Sn);return a||ca(!1),a}function vf(e){let a=Q2(),l=a.matches[a.matches.length-1];return l.route.id||ca(!1),l.route.id}function F2(){var e;let a=u.useContext(hf),l=X2(),n=vf();return a!==void 0?a:(e=l.errors)==null?void 0:e[n]}function P2(){let{router:e}=G2(ff.UseNavigateStable),a=vf(gf.UseNavigateStable),l=u.useRef(!1);return pf(()=>{l.current=!0}),u.useCallback(function(r,s){s===void 0&&(s={}),l.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,us({fromRouteId:a},s)))},[e,a])}const Bm={};function Z2(e,a,l){Bm[e]||(Bm[e]=!0)}function K2(e,a){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ee(e){ca(!1)}function J2(e){let{basename:a="/",children:l=null,location:n,navigationType:r=Rl.Pop,navigator:s,static:i=!1,future:o}=e;zs()&&ca(!1);let c=a.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:s,static:i,future:us({v7_relativeSplatPath:!1},o)}),[c,o,s,i]);typeof n=="string"&&(n=vr(n));let{pathname:m="/",search:f="",hash:p="",state:v=null,key:j="default"}=n,y=u.useMemo(()=>{let w=or(m,c);return w==null?null:{location:{pathname:w,search:f,hash:p,state:v,key:j},navigationType:r}},[c,m,f,p,v,j,r]);return y==null?null:u.createElement(Zl.Provider,{value:d},u.createElement(fo.Provider,{children:l,value:y}))}function I2(e){let{children:a,location:l}=e;return O2(yd(a),l)}new Promise(()=>{});function yd(e,a){a===void 0&&(a=[]);let l=[];return u.Children.forEach(e,(n,r)=>{if(!u.isValidElement(n))return;let s=[...a,r];if(n.type===u.Fragment){l.push.apply(l,yd(n.props.children,s));return}n.type!==ee&&ca(!1),!n.props.index||!n.props.children||ca(!1);let i={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=yd(n.props.children,s)),l.push(i)}),l}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},qi.apply(this,arguments)}function xf(e,a){if(e==null)return{};var l={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(a.indexOf(r)>=0)&&(l[r]=e[r]);return l}function eb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ab(e,a){return e.button===0&&(!a||a==="_self")&&!eb(e)}const tb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],nb="6";try{window.__reactRouterVersion=nb}catch{}const rb=u.createContext({isTransitioning:!1}),sb="startTransition",_m=wc[sb];function ib(e){let{basename:a,children:l,future:n,window:r}=e,s=u.useRef();s.current==null&&(s.current=u2({window:r,v5Compat:!0}));let i=s.current,[o,c]=u.useState({action:i.action,location:i.location}),{v7_startTransition:d}=n||{},m=u.useCallback(f=>{d&&_m?_m(()=>c(f)):c(f)},[c,d]);return u.useLayoutEffect(()=>i.listen(m),[i,m]),u.useEffect(()=>K2(n),[n]),u.createElement(J2,{basename:a,children:l,location:o.location,navigationType:o.action,navigator:i,future:n})}const ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oa=u.forwardRef(function(a,l){let{onClick:n,relative:r,reloadDocument:s,replace:i,state:o,target:c,to:d,preventScrollReset:m,viewTransition:f}=a,p=xf(a,tb),{basename:v}=u.useContext(Zl),j,y=!1;if(typeof d=="string"&&cb.test(d)&&(j=d,ob))try{let h=new URL(window.location.href),b=d.startsWith("//")?new URL(h.protocol+d):new URL(d),N=or(b.pathname,v);b.origin===h.origin&&N!=null?d=N+b.search+b.hash:y=!0}catch{}let w=L2(d,{relative:r}),x=ub(d,{replace:i,state:o,target:c,preventScrollReset:m,relative:r,viewTransition:f});function g(h){n&&n(h),h.defaultPrevented||x(h)}return u.createElement("a",qi({},p,{href:j||w,onClick:y||s?n:g,ref:l,target:c}))}),Lm=u.forwardRef(function(a,l){let{"aria-current":n="page",caseSensitive:r=!1,className:s="",end:i=!1,style:o,to:c,viewTransition:d,children:m}=a,f=xf(a,lb),p=go(c,{relative:f.relative}),v=Kl(),j=u.useContext(mf),{navigator:y,basename:w}=u.useContext(Zl),x=j!=null&&mb(p)&&d===!0,g=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,h=v.pathname,b=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;r||(h=h.toLowerCase(),b=b?b.toLowerCase():null,g=g.toLowerCase()),b&&w&&(b=or(b,w)||b);const N=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!i&&h.startsWith(g)&&h.charAt(N)==="/",R=b!=null&&(b===g||!i&&b.startsWith(g)&&b.charAt(g.length)==="/"),k={isActive:C,isPending:R,isTransitioning:x},L=C?n:void 0,T;typeof s=="function"?T=s(k):T=[s,C?"active":null,R?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A=typeof o=="function"?o(k):o;return u.createElement(Oa,qi({},f,{"aria-current":L,className:T,ref:l,style:A,to:c,viewTransition:d}),typeof m=="function"?m(k):m)});var jd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jd||(jd={}));var Hm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hm||(Hm={}));function db(e){let a=u.useContext(po);return a||ca(!1),a}function ub(e,a){let{target:l,replace:n,state:r,preventScrollReset:s,relative:i,viewTransition:o}=a===void 0?{}:a,c=Et(),d=Kl(),m=go(e,{relative:i});return u.useCallback(f=>{if(ab(f,l)){f.preventDefault();let p=n!==void 0?n:Ui(d)===Ui(m);c(e,{replace:p,state:r,preventScrollReset:s,relative:i,viewTransition:o})}},[d,c,m,n,r,l,e,s,i,o])}function mb(e,a){a===void 0&&(a={});let l=u.useContext(rb);l==null&&ca(!1);let{basename:n}=db(jd.useViewTransitionState),r=go(e,{relative:a.relative});if(!l.isTransitioning)return!1;let s=or(l.currentLocation.pathname,n)||l.currentLocation.pathname,i=or(l.nextLocation.pathname,n)||l.nextLocation.pathname;return bd(r.pathname,i)!=null||bd(r.pathname,s)!=null}const M=({name:e,size:a="md",color:l,className:n="",onClick:r,style:s={}})=>{const o={xs:12,sm:16,md:20,lg:24,xl:32}[a],c={home:t.jsx("path",{fillRule:"evenodd",d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",clipRule:"evenodd"}),user:t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),settings:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),search:t.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}),menu:t.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),close:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),check:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}),"arrow-right":t.jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}),"arrow-left":t.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}),"arrow-up":t.jsx("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}),"arrow-down":t.jsx("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}),plus:t.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}),minus:t.jsx("path",{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),edit:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),delete:t.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}),info:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}),warning:t.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}),error:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}),success:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),download:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}),upload:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}),calendar:t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),clock:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}),mail:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),phone:t.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}),location:t.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}),star:t.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}),heart:t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),bookmark:t.jsx("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}),share:t.jsx("path",{d:"M15 8a3 3 0 11-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}),bell:t.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}),lock:t.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}),unlock:t.jsx("path",{d:"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}),eye:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),t.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),"eye-off":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),t.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}),refresh:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),filter:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",clipRule:"evenodd"}),sort:t.jsx("path",{d:"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}),grid:t.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"}),list:t.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),play:t.jsx("path",{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"}),pause:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}),stop:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"}),"skip-forward":t.jsx("path",{d:"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}),"skip-back":t.jsx("path",{d:"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}),volume:t.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"}),mute:t.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",clipRule:"evenodd"}),camera:t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),image:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}),file:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"}),folder:t.jsx("path",{d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}),link:t.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",clipRule:"evenodd"}),"external-link":t.jsx("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),dashboard:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"}),t.jsx("path",{d:"M3 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z"}),t.jsx("path",{d:"M11 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4z"}),t.jsx("path",{d:"M11 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"})]}),"chevron-up":t.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"}),"chevron-down":t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}),"chevron-left":t.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}),"chevron-right":t.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}),users:t.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}),"user-plus":t.jsx(t.Fragment,{children:t.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"user-shield":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),t.jsx("path",{d:"M15 11h2v2l-2 4-2-4v-2h2z"})]}),"user-cog":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),t.jsx("circle",{cx:"16",cy:"13",r:"1"}),t.jsx("path",{d:"M16 11v1m0 2v1m1.5-2.5l-.866.5m-1.268 0l-.866-.5m0 2l.866-.5m1.268 0l.866.5",stroke:"currentColor",strokeWidth:"0.5",fill:"none"})]}),"user-group":t.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}),assignments:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})]}),"people-group":t.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}),"users-line":t.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}),"network-wired":t.jsx(t.Fragment,{children:t.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})}),building:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),"building-office":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),department:t.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}),organization:t.jsx("path",{d:"M10 3a1 1 0 011 1v5h3a1 1 0 110 2h-3v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h3V4a1 1 0 011-1z"}),sitemap:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L6 8.414l3.293 3.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"diagram-project":t.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 10-2 0v3a1 1 0 102 0v-3zm-5-3a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z",clipRule:"evenodd"}),shield:t.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"shield-check":t.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),key:t.jsx("path",{fillRule:"evenodd",d:"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",clipRule:"evenodd"}),hierarchy:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"}),"table-cells":t.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"}),table:t.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"}),clipboard:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),t.jsx("path",{fillRule:"evenodd",d:"M6 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2h-1a1 1 0 110-2h1a4 4 0 014 4v10a4 4 0 01-4 4H6a4 4 0 01-4-4V5a4 4 0 014-4h1a1 1 0 010 2H6z",clipRule:"evenodd"})]}),storage:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 6a1 1 0 100 2h10a1 1 0 100-2H5z",clipRule:"evenodd"}),database:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}),t.jsx("path",{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}),t.jsx("path",{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"})]}),cog:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),project:t.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",clipRule:"evenodd"}),code:t.jsx("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}),briefcase:t.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),cube:t.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"}),product:t.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"}),chart:t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),analytics:t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),"chart-bar":t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),"currency-yen":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h2.535l.465.78V13H8a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-1.22l.465-.78H15a1 1 0 100-2h-.633l1.49-2.485a1 1 0 10-1.714-1.03L12 8.763 9.858 5.485z",clipRule:"evenodd"}),price:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),notification:t.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}),"check-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),puzzle:t.jsx("path",{d:"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"}),palette:t.jsx("path",{fillRule:"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0v-1a1 1 0 011-1h1a1 1 0 100-2H9a1 1 0 01-1-1V9a1 1 0 012 0v1h.5a2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2H4zm1 5a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM8 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),"device-mobile":t.jsx("path",{fillRule:"evenodd",d:"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),envelope:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),comment:t.jsx("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"}),comments:t.jsx("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V5zm8 0H4v10.586L6.586 13H10V5z",clipRule:"evenodd"}),message:t.jsx("path",{d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}),inbox:t.jsx("path",{fillRule:"evenodd",d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",clipRule:"evenodd"}),"paper-plane":t.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}),video:t.jsx("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}),music:t.jsx("path",{d:"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}),photo:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}),film:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",clipRule:"evenodd"}),microphone:t.jsx("path",{fillRule:"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",clipRule:"evenodd"}),document:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),"folder-open":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",clipRule:"evenodd"}),t.jsx("path",{d:"M6 12a1 1 0 00-1 1v5a1 1 0 001 1h11.828a2 2 0 001.414-.586l.828-.828A2 2 0 0019.656 15H8a1 1 0 01-1-1v-2H6z"})]}),"shopping-cart":t.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}),"credit-card":t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),t.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),tag:t.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),tags:t.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),cart:t.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"}),wallet:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),t.jsx("path",{fillRule:"evenodd",d:"M2 9v5a2 2 0 002 2h12a2 2 0 002-2V9H2zm11 3a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",clipRule:"evenodd"})]}),receipt:t.jsx("path",{d:"M5 2a1 1 0 00-1 1v14l3.5-2 3.5 2 3.5-2 3.5 2V3a1 1 0 00-1-1H5zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H8z"}),"share-alt":t.jsx("path",{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}),"thumbs-up":t.jsx("path",{d:"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"}),"thumbs-down":t.jsx("path",{d:"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"}),flag:t.jsx("path",{fillRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),retweet:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),"calendar-alt":t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),"calendar-check":t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm7.707 7.707a1 1 0 00-1.414-1.414L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),stopwatch:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}),hourglass:t.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"}),history:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),map:t.jsx("path",{fillRule:"evenodd",d:"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 2.293A1 1 0 0018 3v10a1 1 0 01-.293.707L14 17.414V4.586l3.707-3.707z",clipRule:"evenodd"}),"map-marker":t.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}),compass:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",clipRule:"evenodd"}),globe:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",clipRule:"evenodd"}),navigation:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z",clipRule:"evenodd"}),sun:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}),moon:t.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}),cloud:t.jsx("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}),"cloud-rain":t.jsx("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8zM8 17a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),bolt:t.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"}),laptop:t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}),desktop:t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}),tablet:t.jsx("path",{fillRule:"evenodd",d:"M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 14V4h10v12H5z",clipRule:"evenodd"}),"mobile-alt":t.jsx("path",{fillRule:"evenodd",d:"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),keyboard:t.jsx("path",{fillRule:"evenodd",d:"M5 5a3 3 0 00-3 3v4a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3H5zM6 7h2v2H6V7zm3 0h2v2H9V7zm5 0h-2v2h2V7zm0 3h-2v2h2v-2zm-3 0H9v2h2v-2zM8 10H6v2h2v-2z",clipRule:"evenodd"}),mouse:t.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v8a4 4 0 108 0V6a4 4 0 00-4-4zM9 6a1 1 0 012 0v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),print:t.jsx("path",{fillRule:"evenodd",d:"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",clipRule:"evenodd"}),wifi:t.jsx("path",{fillRule:"evenodd",d:"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),bluetooth:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v5.586l2.707-2.707a1 1 0 011.414 1.414L12.414 10l2.707 2.707a1 1 0 01-1.414 1.414L11 11.414V17a1 1 0 11-2 0v-5.586L6.293 14.121a1 1 0 01-1.414-1.414L7.586 10 4.879 7.293a1 1 0 011.414-1.414L9 8.586V3a1 1 0 011-1z",clipRule:"evenodd"}),sliders:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"}),"toggle-on":t.jsx("path",{d:"M5 3a5 5 0 000 10h10a5 5 0 000-10H5zm0 2a3 3 0 100 6 3 3 0 000-6z"}),"toggle-off":t.jsx("path",{d:"M15 3a5 5 0 010 10H5A5 5 0 015 3h10zm0 2a3 3 0 100 6 3 3 0 000-6z"}),bars:t.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),ellipsis:t.jsx("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}),"ellipsis-v":t.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}),expand:t.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",clipRule:"evenodd"}),compress:t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}),"check-double":t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0zM12.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}),times:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),exclamation:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}),question:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),"minus-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),"plus-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"}),spinner:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z",clipRule:"evenodd"}),"arrow-circle-right":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",clipRule:"evenodd"}),"arrow-circle-left":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",clipRule:"evenodd"}),"arrow-circle-up":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",clipRule:"evenodd"}),"arrow-circle-down":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",clipRule:"evenodd"}),undo:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z",clipRule:"evenodd"}),redo:t.jsx("path",{fillRule:"evenodd",d:"M16 2a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 110-2h3.001A5.002 5.002 0 005.999 8.333 1 1 0 014.114 7.667 7.002 7.002 0 0115.899 5.101V3a1 1 0 011-1z",clipRule:"evenodd"}),"building-user":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),"clipboard-list":t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z",clipRule:"evenodd"})]}),tasks:t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),"file-contract":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),handshake:t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),"chart-line":t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L6 8.414l3.293 3.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"chart-pie":t.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),book:t.jsx("path",{d:"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}),"graduation-cap":t.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"}),"bookmark-alt":t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",clipRule:"evenodd"}),pencil:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),pen:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),"heart-pulse":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),t.jsx("path",{d:"M7 10h2l1-2 1 4 1-2h2",stroke:"white",strokeWidth:"1.5",fill:"none"})]}),hospital:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm5 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V9a1 1 0 00-1-1zm2-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V9a1 1 0 00-1-1zm-4 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V15a1 1 0 00-1-1zm2-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V15a1 1 0 00-1-1z",clipRule:"evenodd"}),pills:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414l-3 3a1 1 0 001.415 1.414l3-3zM10 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),syringe:t.jsx("path",{fillRule:"evenodd",d:"M17.414 2.586a2 2 0 00-2.828 0L13 4.172V3a1 1 0 00-2 0v1.172l-1.586-1.586a1 1 0 00-1.414 1.414L9.586 5.758 6.343 9l-1.415 1.414a1 1 0 101.415 1.415L7.758 10.243 11 7l1.586 1.586a1 1 0 001.414-1.414L12.414 5.586 14 4a.5.5 0 01.707 0l2.707 2.707a.5.5 0 010 .707L15 9.828V11a1 1 0 102 0V9.828l1.586-1.586a2 2 0 000-2.828l-1.172-1.172z",clipRule:"evenodd"}),stethoscope:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a4 4 0 004 4h.586l-.293.293a1 1 0 001.414 1.414l2-2a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 1.414l.293.293H7a2 2 0 01-2-2V5a1 1 0 000-2h-.5A1.5 1.5 0 013 3zm14.5 4a2.5 2.5 0 00-2.5 2.5v2a2.5 2.5 0 005 0v-2a2.5 2.5 0 00-2.5-2.5z",clipRule:"evenodd"}),car:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),t.jsx("path",{fillRule:"evenodd",d:"M5.172 6.172A4 4 0 018 5h4a4 4 0 012.828 1.172l2.586 2.586A2 2 0 0118 10.414V14a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a2 2 0 01-2-2v-3.586a2 2 0 01.586-1.414l2.586-2.586zM8 7a2 2 0 00-1.414.586L4 10.172V13h12v-2.828l-2.586-2.586A2 2 0 0012 7H8z",clipRule:"evenodd"})]}),plane:t.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}),train:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm4 12a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM4 9h12V5H4v4z",clipRule:"evenodd"}),ship:t.jsx("path",{d:"M4 10l6-8 6 8h1l-1 8H4l-1-8h1zm2 1l1 6h6l1-6H6z"}),bicycle:t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 104 0V7a2 2 0 00-2-2zm12 0a2 2 0 00-2 2v8a2 2 0 104 0V7a2 2 0 00-2-2zM8.5 9L10 6l1.5 3H14v2h-2.5L10 14 8.5 11H6V9h2.5z",clipRule:"evenodd"}),truck:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),t.jsx("path",{fillRule:"evenodd",d:"M2 4a2 2 0 012-2h6a2 2 0 012 2v9h1.5a.5.5 0 00.5-.5V9l3 3v2.5a.5.5 0 00.5.5H17v1a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a2 2 0 01-2-2V4zm8 9V4H4v9h6z",clipRule:"evenodd"})]}),coffee:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4zm0 6a2 2 0 000 4h12a2 2 0 100-4H4zm0 6a2 2 0 000 4h12a2 2 0 100-4H4z",clipRule:"evenodd"}),pizza:t.jsx("path",{d:"M10 2L2 7l8 11 8-11-8-5zM8.5 8.5L10 6l1.5 2.5h2L10 13l-3.5-4.5h2z"}),utensils:t.jsx("path",{d:"M3 1a1 1 0 000 2v10a2 2 0 104 0V3a1 1 0 100-2H3zM14 3a1 1 0 011 1v9a1 1 0 11-2 0V4a1 1 0 011-1zM14 1a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1z"}),"wine-glass":t.jsx("path",{fillRule:"evenodd",d:"M6.5 2a1 1 0 000 2H7v.5A4.5 4.5 0 009 8.973V14H6a1 1 0 100 2h8a1 1 0 100-2h-3V8.973A4.5 4.5 0 0013 4.5V4h.5a1 1 0 100-2h-7z",clipRule:"evenodd"}),gamepad:t.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}),dice:t.jsx("path",{d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0 1 1 0 002 0zM7 8a1 1 0 11-2 0 1 1 0 012 0zm5 3a1 1 0 10-2 0 1 1 0 002 0zM8 13a1 1 0 11-2 0 1 1 0 012 0zm6-1a1 1 0 10-2 0 1 1 0 002 0z"}),trophy:t.jsx("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}),medal:t.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"}),crown:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42A1 1 0 0117 14H3a1 1 0 01-.952-1.069l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 012 0z",clipRule:"evenodd"}),wrench:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),hammer:t.jsx("path",{d:"M6 2l1.5 1.5L9 2l4 4-2 2 4 4-2 2-4-4-2 2-4-4 2-2 1.5 1.5L6 2z"}),screwdriver:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),tools:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),cogs:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})};return t.jsx("svg",{className:`icon icon--${e} icon--${a} ${n}`,width:o,height:o,viewBox:"0 0 20 20",fill:l||"currentColor",onClick:r,style:{cursor:r?"pointer":"default",...s},"aria-hidden":"true",children:c[e]||c.info})},hb=()=>t.jsxs("div",{className:"pages-container",children:[t.jsxs("div",{className:"pages-header",children:[t.jsx("h1",{className:"pages-title",children:"汎用画面テンプレート"}),t.jsx("p",{className:"pages-subtitle",children:"データ駆動型の画面を素早く構築できる汎用テンプレート集"})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)",paddingBottom:"var(--spacing-2)",borderBottom:"2px solid var(--color-neutral-400)"},children:"構成要素（基本パーツ）"}),t.jsxs("div",{className:"pages-grid",children:[t.jsxs(Oa,{to:"/buttons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"plus-circle",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ボタン"}),t.jsx("p",{className:"page-card-description",children:"様々なスタイルとサイズのボタンコンポーネント"})]}),t.jsxs(Oa,{to:"/forms",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"edit",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"フォーム"}),t.jsx("p",{className:"page-card-description",children:"入力フィールド、セレクト、チェックボックスなど"})]}),t.jsxs(Oa,{to:"/messages",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"comment",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"メッセージ"}),t.jsx("p",{className:"page-card-description",children:"アラート、通知、モーダルなどのメッセージコンポーネント"})]}),t.jsxs(Oa,{to:"/tables",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"table",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"テーブル"}),t.jsx("p",{className:"page-card-description",children:"データ表示用のテーブルコンポーネント"})]}),t.jsxs(Oa,{to:"/navigation",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"menu",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-card-description",children:"タブ、ブレッドクラム、ページネーションなど"})]}),t.jsxs(Oa,{to:"/layout",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"grid",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"レイアウト"}),t.jsx("p",{className:"page-card-description",children:"カード、グリッド、サイドバーなどのレイアウトコンポーネント"})]}),t.jsxs(Oa,{to:"/icons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"star",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"アイコン"}),t.jsx("p",{className:"page-card-description",children:"200個以上のSVGアイコンライブラリ"})]}),t.jsxs(Oa,{to:"/components",className:"page-card",style:{background:"var(--color-neutral-50)",borderColor:"var(--color-neutral-300)"},children:[t.jsx("div",{className:"page-card-icon",style:{background:"var(--color-neutral-200)"},children:t.jsx(M,{name:"cube",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"すべての構成要素を見る"}),t.jsx("p",{className:"page-card-description",children:"基本パーツの一覧ページへ移動"})]})]})]})]}),pb=()=>t.jsxs("div",{className:"pages-container",children:[t.jsxs("div",{className:"pages-header",children:[t.jsx("h1",{className:"pages-title",children:"構成要素 - 基本パーツカタログ"}),t.jsx("p",{className:"pages-subtitle",children:"汎用テンプレートで使用される基本的なUIコンポーネント"})]}),t.jsxs("div",{className:"pages-grid",children:[t.jsxs(Oa,{to:"/buttons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"plus-circle",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ボタン"}),t.jsx("p",{className:"page-card-description",children:"様々なスタイルとサイズのボタンコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Primary"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Secondary"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Danger"})]})]}),t.jsxs(Oa,{to:"/forms",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"edit",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"フォーム"}),t.jsx("p",{className:"page-card-description",children:"入力フィールド、セレクト、チェックボックスなど"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Input"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Select"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Checkbox"})]})]}),t.jsxs(Oa,{to:"/messages",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"comment",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"メッセージ"}),t.jsx("p",{className:"page-card-description",children:"アラート、通知、モーダルなどのメッセージコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Alert"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Modal"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Toast"})]})]}),t.jsxs(Oa,{to:"/tables",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"table",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"テーブル"}),t.jsx("p",{className:"page-card-description",children:"データ表示用のテーブルコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"DataTable"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Pagination"})]})]}),t.jsxs(Oa,{to:"/navigation",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"menu",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-card-description",children:"タブ、ブレッドクラム、ページネーションなど"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Tab"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Breadcrumb"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Dropdown"})]})]}),t.jsxs(Oa,{to:"/layout",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"grid",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"レイアウト"}),t.jsx("p",{className:"page-card-description",children:"カード、グリッド、サイドバーなどのレイアウトコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Card"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Grid"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Sidebar"})]})]}),t.jsxs(Oa,{to:"/icons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(M,{name:"star",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"アイコン"}),t.jsx("p",{className:"page-card-description",children:"200個以上のSVGアイコンライブラリ"}),t.jsx("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"200+ Icons"})})]})]})]}),fb=({className:e="",disabled:a,children:l,dusk:n,...r})=>{const s=["primary-btn",e].filter(Boolean).join(" ");return t.jsx("button",{...r,className:s,disabled:a,"data-dusk":n,children:l})},Tl=I.memo(fb);function Ha({type:e="button",className:a="",disabled:l,children:n,...r}){return t.jsx("button",{...r,type:e,className:`inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-25 ${l&&"opacity-25"} `+a,style:{borderRadius:"var(--radius-md)",...r.style},disabled:l,children:n})}function Yi({className:e="",disabled:a,children:l,...n}){return t.jsx("button",{...n,className:`inline-flex items-center border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${a&&"opacity-25"} `+e,style:{borderRadius:"var(--radius-md)",...n.style},disabled:a,children:l})}const gb=()=>{const[e,a]=u.useState(!1),l=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return t.jsxs("div",{className:"buttons-page",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"ボタンコンポーネント"}),t.jsx("p",{className:"page-description",children:"統一されたボタンコンポーネント群。 プライマリ、セカンダリ、デンジャーの3つのバリエーションを提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ボタンコンポーネント"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton"}),t.jsx("p",{className:"component-description",children:"メインアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Tl,{onClick:()=>alert("保存処理を実行します"),children:"保存する"})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton onClick={handleSave}>
  保存する
</PrimaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SecondaryButton"}),t.jsx("p",{className:"component-description",children:"サブアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Ha,{onClick:()=>alert("キャンセル処理を実行します"),children:"キャンセル"})}),t.jsx("div",{className:"code-snippet",children:`<SecondaryButton onClick={handleCancel}>
  キャンセル
</SecondaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DangerButton"}),t.jsx("p",{className:"component-description",children:"危険なアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Yi,{onClick:()=>confirm("本当に削除しますか？"),children:"削除する"})}),t.jsx("div",{className:"code-snippet",children:`<DangerButton onClick={handleDelete}>
  削除する
</DangerButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton (disabled)"}),t.jsx("p",{className:"component-description",children:"無効状態のボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Tl,{disabled:!0,children:"無効なボタン"})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton disabled>
  無効なボタン
</PrimaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton (processing)"}),t.jsx("p",{className:"component-description",children:"処理中状態のボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Tl,{disabled:!0,onClick:l,children:"処理中..."})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton disabled>
  処理中...
</PrimaryButton>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"アイコン付きボタン例"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"アイコン付きボタンの使用例"}),t.jsx("p",{className:"component-description",children:"ボタンにアイコンを組み合わせた実用的な例"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs(Tl,{children:[t.jsx(M,{name:"check",className:"w-4 h-4 inline mr-2"}),"保存"]}),t.jsxs(Ha,{children:[t.jsx(M,{name:"close",className:"w-4 h-4 inline mr-2"}),"キャンセル"]}),t.jsxs(Yi,{children:[t.jsx(M,{name:"delete",className:"w-4 h-4 inline mr-2"}),"削除"]})]}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton onClick={handleSave}>
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
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"PrimaryButtonは1ページに1つまでの使用を推奨します"}),t.jsx("li",{children:"DangerButtonは削除や取り消し不可能なアクションに使用してください"}),t.jsx("li",{children:"SecondaryButtonは補助的なアクションに適しています"}),t.jsx("li",{children:"disabledプロパティでボタンを無効化できます"}),t.jsx("li",{children:"アイコンと組み合わせることでより直感的なUIを作成できます"})]})})]})]})},vb=({label:e,type:a="text",name:l,value:n="",onChange:r,placeholder:s,required:i=!1,disabled:o=!1,error:c="",helper:d="",icon:m=null,size:f="md",fullWidth:p=!1,className:v="",id:j,borderColor:y,...w})=>{const[x,g]=u.useState(!1),[h,b]=u.useState(!1),N=j||`input-${l}`,C=a==="password"&&x?"text":a,R=["form-input",`form-input--${f}`,c&&"form-input--error",p&&"form-input--full-width",m&&"form-input--with-icon",a==="password"&&"form-input--password",v].filter(Boolean).join(" "),k=["form-group",p&&"form-group--full-width"].filter(Boolean).join(" ");return t.jsxs("div",{className:k,children:[e&&t.jsx("label",{htmlFor:N,className:`form-label ${i?"form-label--required":""}`,children:e}),t.jsxs("div",{className:"form-input-wrapper",children:[m&&t.jsx("span",{className:"form-input__icon",children:m}),t.jsx("input",{id:N,type:C,name:l,value:n,onChange:r,placeholder:s,disabled:o,className:R,style:y?{borderColor:y}:void 0,onFocus:()=>b(!0),onBlur:()=>b(!1),"aria-invalid":!!c,"aria-describedby":c?`${N}-error`:d?`${N}-helper`:void 0,...w}),a==="password"&&t.jsx("button",{type:"button",className:"form-input__toggle-password",onClick:()=>g(!x),"aria-label":x?"パスワードを非表示":"パスワードを表示",tabIndex:-1,children:t.jsx(M,{name:x?"eye-off":"eye",style:{width:"18px",height:"18px"}})})]}),c&&t.jsxs("div",{id:`${N}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),c]}),d&&!c&&t.jsx("div",{id:`${N}-helper`,className:"form-helper",children:d})]})},xb=({label:e,name:a,value:l="",onChange:n,placeholder:r,required:s=!1,disabled:i=!1,error:o="",helper:c="",rows:d=4,fullWidth:m=!1,className:f="",id:p,...v})=>{const j=p||`textarea-${a}`,y=["form-textarea",o&&"form-textarea--error",m&&"form-textarea--full-width",f].filter(Boolean).join(" ");return t.jsxs("div",{className:`form-group ${m?"form-group--full-width":""}`,children:[e&&t.jsx("label",{htmlFor:j,className:`form-label ${s?"form-label--required":""}`,children:e}),t.jsx("textarea",{id:j,name:a,value:l,onChange:n,placeholder:r,disabled:i,rows:d,className:y,"aria-invalid":!!o,"aria-describedby":o?`${j}-error`:c?`${j}-helper`:void 0,...v}),o&&t.jsxs("div",{id:`${j}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),o]}),c&&!o&&t.jsx("div",{id:`${j}-helper`,className:"form-helper",children:c})]})},bb=({label:e,name:a,value:l="",onChange:n,options:r=[],placeholder:s="選択してください",required:i=!1,disabled:o=!1,error:c="",helper:d="",fullWidth:m=!1,className:f="",id:p,...v})=>{const j=p||`select-${a}`,y=["form-select",c&&"form-select--error",m&&"form-select--full-width",f].filter(Boolean).join(" ");return t.jsxs("div",{className:`form-group ${m?"form-group--full-width":""}`,children:[e&&t.jsx("label",{htmlFor:j,className:`form-label ${i?"form-label--required":""}`,children:e}),t.jsxs("select",{id:j,name:a,value:l,onChange:n,disabled:o,className:y,"aria-invalid":!!c,"aria-describedby":c?`${j}-error`:d?`${j}-helper`:void 0,...v,children:[t.jsx("option",{value:"",children:s}),r.map(w=>t.jsx("option",{value:w.value,children:w.label},w.value))]}),c&&t.jsxs("div",{id:`${j}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),c]}),d&&!c&&t.jsx("div",{id:`${j}-helper`,className:"form-helper",children:d})]})},Ue=I.memo(vb);function Ht({className:e="",...a}){return t.jsx("input",{...a,type:"checkbox",style:{borderColor:"rgb(209, 213, 219)",borderRadius:"4px",...a.style||{}},className:"text-indigo-600 shadow-sm focus:ring-indigo-500 "+e})}const bf=({label:e,name:a,value:l=[],options:n=[],onChange:r,onBlur:s,placeholder:i="選択してください",error:o,helper:c,disabled:d=!1,required:m=!1,className:f="",fullWidth:p=!0})=>{const[v,j]=u.useState(!1),y=u.useRef(null);u.useEffect(()=>{const h=b=>{y.current&&!y.current.contains(b.target)&&(j(!1),s&&s())};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[s]);const w=h=>{if(d)return;const b=l.includes(h)?l.filter(N=>N!==h):[...l,h];r(b)},x=()=>{d||j(!v)},g=()=>l.length===0?i:n.filter(b=>l.includes(b.value)).map(b=>b.label).join(", ");return t.jsxs("div",{className:`form-group ${p?"form-group--full":""} ${f}`,children:[e&&t.jsx("label",{htmlFor:a,className:`form-label ${m?"form-label--required":""}`,children:e}),t.jsxs("div",{ref:y,className:`select-box ${v?"select-box--open":""} ${o?"select-box--error":""} ${d?"select-box--disabled":""}`,children:[t.jsxs("div",{className:"select-box__trigger",onClick:x,role:"button","aria-haspopup":"listbox","aria-expanded":v,"aria-label":e,tabIndex:d?-1:0,onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),x())},children:[t.jsx("span",{className:"select-box__value",children:g()}),t.jsx(M,{name:v?"chevron-up":"chevron-down",className:"select-box__icon"})]}),v&&t.jsx("div",{className:"select-box__dropdown",role:"listbox",children:n.map(h=>{const b=l.includes(h.value);return t.jsxs("div",{className:`select-box__option ${b?"select-box__option--selected":""}`,onClick:()=>w(h.value),role:"option","aria-selected":b,children:[t.jsx("input",{type:"checkbox",checked:b,onChange:()=>{},tabIndex:-1,className:"select-box__checkbox"}),t.jsx("span",{className:"select-box__label",children:h.label})]},h.value)})})]}),c&&!o&&t.jsx("div",{className:"form-helper",children:c}),o&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),o]}),t.jsx("style",{children:`
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
      `})]})},yb=()=>{var e0,a0;const[e,a]=u.useState({name:"",email:"",password:"",message:"",prefecture:"",gender:"",priority:"",notifications:!1,darkMode:!1,agreeToTerms:!1,newsletter:!1}),[l,n]=u.useState({}),[r,s]=u.useState(""),[i,o]=u.useState({status:"all",category:"all"}),[c,d]=u.useState(!0),[m,f]=u.useState(50),[p,v]=u.useState([20,80]),[j,y]=u.useState(["react","javascript"]),[w,x]=u.useState(["react","javascript","typescript","nodejs","css"]),[g,h]=u.useState(""),[b,N]=u.useState([]),[C,R]=u.useState(""),[k,L]=u.useState(["tokyo","remote"]),T=()=>{const U={};return e.name.trim()||(U.name="お名前を入力してください"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(U.email="有効なメールアドレスを入力してください"):U.email="メールアドレスを入力してください",e.password?e.password.length<8&&(U.password="パスワードは8文字以上で入力してください"):U.password="パスワードを入力してください",J.trim()||(U.skills="スキルを入力してください"),g||(U.startDate="開始日を選択してください"),b.length===0&&(U.files="ファイルを選択してください"),C.trim()?C.length>200&&(U.description="詳細説明は200文字以内で入力してください"):U.description="詳細説明を入力してください",e.gender||(U.gender="性別を選択してください"),n(U),Object.keys(U).length===0},[A,B]=u.useState(0),[_,Q]=u.useState(0),[Y,S]=u.useState(0),[H,E]=u.useState(""),[q,$]=u.useState([]),[J,Z]=u.useState(""),[F,G]=u.useState(!1),[O,ae]=u.useState("mySecretPassword123"),[fe,Ne]=u.useState(""),[Ae,da]=u.useState(!1),[ua,ra]=u.useState(!1),[z,W]=u.useState("basic"),[ce,se]=u.useState(""),[D,K]=u.useState(""),[me,qe]=u.useState(""),[La,Ma]=u.useState([]),[ie,Ya]=u.useState(["React"]),[X,ne]=u.useState(["新着","おすすめ"]),[ge,Ge]=u.useState([]),[ea,Qe]=u.useState(""),[Fe,Ra]=u.useState([]),[ke,ba]=u.useState(""),Me=({children:U,content:te,position:le="top"})=>{const[ve,ze]=u.useState(!1),re={top:{bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px"},bottom:{top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:"8px"},left:{top:"50%",right:"100%",transform:"translateY(-50%)",marginRight:"8px"},right:{top:"50%",left:"100%",transform:"translateY(-50%)",marginLeft:"8px"}};return t.jsxs("div",{style:{position:"relative",display:"inline-block"},onMouseEnter:()=>ze(!0),onMouseLeave:()=>ze(!1),onFocus:()=>ze(!0),onBlur:()=>ze(!1),children:[U,ve&&t.jsxs("div",{style:{position:"absolute",...re[le],background:"var(--color-neutral-900)",color:"white",padding:"var(--spacing-1) var(--spacing-2)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",lineHeight:"var(--line-height-tight)",whiteSpace:"nowrap",zIndex:1e3,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",opacity:ve?1:0,transition:"opacity 0.2s ease-in-out",pointerEvents:"none"},role:"tooltip","aria-label":te,children:[te,t.jsx("div",{style:{position:"absolute",width:0,height:0,...le==="top"&&{top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderTop:"4px solid var(--color-neutral-900)"},...le==="bottom"&&{bottom:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderBottom:"4px solid var(--color-neutral-900)"},...le==="left"&&{top:"50%",left:"100%",transform:"translateY(-50%)",borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"4px solid var(--color-neutral-900)"},...le==="right"&&{top:"50%",right:"100%",transform:"translateY(-50%)",borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderRight:"4px solid var(--color-neutral-900)"}}})]})]})},Ta=({items:U,selected:te,onSelectionChange:le,removable:ve=!0,onRemove:ze})=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:U.map((re,aa)=>t.jsxs("div",{onClick:()=>le&&le(re),style:{display:"inline-flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-1) var(--spacing-3)",backgroundColor:te.includes(re)?"rgb(21, 52, 109)":"var(--color-neutral-200)",color:te.includes(re)?"white":"var(--color-neutral-700)",borderRadius:"var(--radius-full)",fontSize:"var(--font-size-sm)",cursor:le?"pointer":"default",transition:"all 0.2s",border:"none"},children:[t.jsx("span",{children:re}),ve&&ze&&t.jsx("button",{onClick:je=>{je.stopPropagation(),ze(re)},style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:"0",fontSize:"var(--font-size-xs)",fontWeight:"bold"},children:"×"})]},aa))}),Va=({checked:U,onChange:te,label:le,size:ve="md"})=>{const re={sm:{width:32,height:18,knobSize:14,translateX:14},md:{width:44,height:24,knobSize:18,translateX:20},lg:{width:56,height:32,knobSize:26,translateX:24}}[ve];return t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",cursor:"pointer"},children:[t.jsx("div",{style:{position:"relative",width:`${re.width}px`,height:`${re.height}px`,backgroundColor:U?"rgb(21, 52, 109)":"var(--color-neutral-300)",borderRadius:`${re.height}px`,transition:"all 0.3s",cursor:"pointer"},children:t.jsx("div",{style:{position:"absolute",top:"50%",left:U?`${re.translateX}px`:"3px",width:`${re.knobSize}px`,height:`${re.knobSize}px`,backgroundColor:"white",borderRadius:"50%",transform:"translateY(-50%)",transition:"all 0.3s",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"}})}),t.jsx("input",{type:"checkbox",checked:U,onChange:te,style:{display:"none"}}),le&&t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:le})]})},Wt=({value:U,onChange:te,label:le,error:ve,required:ze=!1})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[le&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[le," ",ze&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("input",{type:"date",value:U,onChange:re=>te(re.target.value),style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:`1px solid ${ve?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"},onFocus:re=>{re.target.style.borderColor=ve?"var(--color-error-500)":"rgb(21, 52, 109)",re.target.style.boxShadow=ve?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:re=>{re.target.style.borderColor=ve?"var(--color-error-500)":"var(--color-neutral-300)",re.target.style.boxShadow="none"}}),ve&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:ve})]}),pl=({onFilesChange:U,multiple:te=!1,accept:le,label:ve,error:ze,required:re=!1})=>{const[aa,je]=u.useState(!1),Ee=u.useRef(null),ya=Ce=>{const sa=Array.from(Ce);U(sa)},ja=Ce=>{Ce.preventDefault(),je(!1);const sa=Ce.dataTransfer.files;ya(sa)},Ga=Ce=>{Ce.preventDefault(),je(!0)},Xa=Ce=>{Ce.preventDefault(),je(!1)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[ve&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[ve," ",re&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("div",{onDrop:ja,onDragOver:Ga,onDragLeave:Xa,onClick:()=>{var Ce;return(Ce=Ee.current)==null?void 0:Ce.click()},style:{border:`2px dashed ${aa?"rgb(21, 52, 109)":ze?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",padding:"var(--spacing-6)",textAlign:"center",cursor:"pointer",background:aa?"rgba(21, 52, 109, 0.05)":"var(--color-neutral-50)",transition:"all 0.2s",minHeight:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"upload",style:{width:"32px",height:"32px",color:"var(--color-neutral-500)"}}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"ファイルをドラッグ&ドロップまたはクリックして選択"}),t.jsxs("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:[le&&`対応形式: ${le}`,te&&"（複数ファイル選択可）"]}),t.jsx("input",{ref:Ee,type:"file",multiple:te,accept:le,onChange:Ce=>ya(Ce.target.files),style:{display:"none"}})]}),ze&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:ze})]})},Wa=({value:U,onChange:te,placeholder:le,rows:ve=4,label:ze,error:re,required:aa=!1,maxLength:je})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[ze&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[ze," ",aa&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("textarea",{value:U,onChange:Ee=>te(Ee.target.value),placeholder:le,rows:ve,maxLength:je,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${re?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none",fontFamily:"inherit",resize:"vertical",lineHeight:"var(--line-height-relaxed)"},onFocus:Ee=>{Ee.target.style.borderColor=re?"var(--color-error-500)":"rgb(21, 52, 109)",Ee.target.style.boxShadow=re?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:Ee=>{Ee.target.style.borderColor=re?"var(--color-error-500)":"var(--color-neutral-300)",Ee.target.style.boxShadow="none"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[re?t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)"},children:re}):t.jsx("div",{}),je&&t.jsxs("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:[U.length,"/",je]})]})]}),Ts=({value:U,onChange:te,suggestions:le=[],placeholder:ve,label:ze,error:re,required:aa=!1,maxSuggestions:je=5})=>{const[Ee,ya]=u.useState(U||""),[ja,Ga]=u.useState([]),[Xa,Ce]=u.useState(!1),[sa,ta]=u.useState(-1),lt=u.useRef(null),Qa=u.useRef(null),Sa=le.length>0?le:["東京都","大阪府","愛知県","神奈川県","埼玉県","千葉県","兵庫県","北海道","福岡県","静岡県","JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go"];u.useEffect(()=>{ya(U||"")},[U]);const nt=la=>{const pa=la.target.value;if(ya(pa),pa.length>0){const Es=Sa.filter(Mo=>Mo.toLowerCase().includes(pa.toLowerCase())).slice(0,je);Ga(Es),Ce(Es.length>0)}else Ga([]),Ce(!1);ta(-1),te&&te(pa)},Cn=la=>{ya(la),Ce(!1),ta(-1),te&&te(la)},Co=la=>{if(Xa)switch(la.key){case"ArrowDown":la.preventDefault(),ta(pa=>pa<ja.length-1?pa+1:pa);break;case"ArrowUp":la.preventDefault(),ta(pa=>pa>0?pa-1:-1);break;case"Enter":la.preventDefault(),sa>=0&&Cn(ja[sa]);break;case"Escape":Ce(!1),ta(-1);break}},ko=la=>{Qa.current&&Qa.current.contains(la.relatedTarget)||setTimeout(()=>{Ce(!1),ta(-1)},100)};return t.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[ze&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[ze," ",aa&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("input",{ref:lt,type:"text",value:Ee,onChange:nt,onKeyDown:Co,onBlur:ko,onFocus:la=>{ja.length>0&&Ce(!0),la.target.style.borderColor=re?"var(--color-error-500)":"rgb(21, 52, 109)",la.target.style.boxShadow=re?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},placeholder:ve,style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:`1px solid ${re?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"}}),Xa&&t.jsx("div",{ref:Qa,style:{position:"absolute",top:"100%",left:0,right:0,backgroundColor:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:1e3,maxHeight:"200px",overflowY:"auto"},children:ja.map((la,pa)=>t.jsx("div",{onClick:()=>Cn(la),style:{padding:"var(--spacing-2) var(--spacing-3)",cursor:"pointer",fontSize:"var(--font-size-sm)",backgroundColor:pa===sa?"var(--color-primary-50)":"transparent",color:pa===sa?"rgb(21, 52, 109)":"var(--color-neutral-700)",borderBottom:pa<ja.length-1?"1px solid var(--color-neutral-100)":"none",transition:"all 0.2s"},onMouseEnter:()=>ta(pa),onMouseLeave:()=>ta(-1),children:la},pa))})]}),re&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:re})]})},P=({value:U,onChange:te,max:le=5,icon:ve="star",size:ze="md",label:re,readOnly:aa=!1,showValue:je=!1})=>{const[Ee,ya]=u.useState(0),ja={sm:{width:"16px",height:"16px"},md:{width:"24px",height:"24px"},lg:{width:"32px",height:"32px"}},Ga=ja[ze]||ja.md,Xa=lt=>{!aa&&te&&te(lt)},Ce=lt=>{aa||ya(lt)},sa=()=>{aa||ya(0)},ta=lt=>{if(lt<=(Ee||U))switch(ve){case"heart":return"#ef4444";case"thumb":return"#10b981";default:return"#fbbf24"}return"#d1d5db"};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[re&&t.jsx("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:re}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("div",{style:{display:"flex",gap:"var(--spacing-1)"},children:Array.from({length:le},(lt,Qa)=>{const Sa=Qa+1;return t.jsx("button",{type:"button",onClick:()=>Xa(Sa),onMouseEnter:()=>Ce(Sa),onMouseLeave:sa,disabled:aa,style:{background:"none",border:"none",cursor:aa?"default":"pointer",padding:"var(--spacing-1)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius-sm)",transition:"all 0.2s"},children:t.jsx(M,{name:ve,style:{...Ga,color:ta(Sa),transition:"color 0.2s"}})},Qa)})}),je&&t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginLeft:"var(--spacing-2)"},children:[U,"/",le]})]})]})},de=({value:U,onChange:te,min:le=0,max:ve=100,step:ze=1,showLabel:re=!1,color:aa="primary",size:je="medium",disabled:Ee=!1})=>{const ya=(U-le)/(ve-le)*100,ja={primary:"rgb(21, 52, 109)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},Ga={small:{height:"4px",thumbSize:"12px"},medium:{height:"6px",thumbSize:"16px"},large:{height:"8px",thumbSize:"20px"}},Xa=ja[aa]||ja.primary,Ce=Ga[je]||Ga.medium;return t.jsxs("div",{style:{width:"100%",opacity:Ee?.6:1},children:[re&&t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:[t.jsxs("span",{children:["値: ",U]}),t.jsxs("span",{children:[le," - ",ve]})]}),t.jsxs("div",{style:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center",cursor:Ee?"not-allowed":"pointer"},children:[t.jsx("div",{style:{width:"100%",height:Ce.height,backgroundColor:"var(--color-neutral-200)",borderRadius:Ce.height,position:"relative"},children:t.jsx("div",{style:{width:`${ya}%`,height:"100%",backgroundColor:Ee?"var(--color-neutral-400)":Xa,borderRadius:Ce.height,transition:"width 0.2s"}})}),t.jsx("input",{type:"range",min:le,max:ve,step:ze,value:U,disabled:Ee,onChange:sa=>te(Number(sa.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:Ee?"not-allowed":"pointer",margin:0,padding:0}}),t.jsx("div",{style:{position:"absolute",left:`${ya}%`,transform:"translateX(-50%)",width:Ce.thumbSize,height:Ce.thumbSize,backgroundColor:Ee?"var(--color-neutral-400)":Xa,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:Ee?"not-allowed":"pointer",transition:"left 0.2s"}})]})]})},De=({value:U=[0,100],onChange:te,min:le=0,max:ve=100,step:ze=1,color:re="primary",size:aa="medium",disabled:je=!1})=>{const[Ee,ya]=U,ja=(Ee-le)/(ve-le)*100,Ga=(ya-le)/(ve-le)*100,Xa={primary:"rgb(21, 52, 109)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},Ce={small:{height:"4px",thumbSize:"12px"},medium:{height:"6px",thumbSize:"16px"},large:{height:"8px",thumbSize:"20px"}},sa=Xa[re]||Xa.primary,ta=Ce[aa]||Ce.medium,lt=Sa=>{const nt=Math.min(Sa,ya-ze);te([nt,ya])},Qa=Sa=>{const nt=Math.max(Sa,Ee+ze);te([Ee,nt])};return t.jsx("div",{style:{width:"100%",opacity:je?.6:1},children:t.jsxs("div",{style:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center"},children:[t.jsx("div",{style:{width:"100%",height:ta.height,backgroundColor:"var(--color-neutral-200)",borderRadius:ta.height,position:"relative"},children:t.jsx("div",{style:{position:"absolute",left:`${ja}%`,width:`${Ga-ja}%`,height:"100%",backgroundColor:je?"var(--color-neutral-400)":sa,borderRadius:ta.height,transition:"all 0.2s"}})}),t.jsx("input",{type:"range",min:le,max:ve,step:ze,value:Ee,disabled:je,onChange:Sa=>lt(Number(Sa.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:je?"not-allowed":"pointer",margin:0,padding:0,zIndex:1}}),t.jsx("input",{type:"range",min:le,max:ve,step:ze,value:ya,disabled:je,onChange:Sa=>Qa(Number(Sa.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:je?"not-allowed":"pointer",margin:0,padding:0,zIndex:2}}),t.jsx("div",{style:{position:"absolute",left:`${ja}%`,transform:"translateX(-50%)",width:ta.thumbSize,height:ta.thumbSize,backgroundColor:je?"var(--color-neutral-400)":sa,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:je?"not-allowed":"pointer",transition:"left 0.2s",zIndex:3}}),t.jsx("div",{style:{position:"absolute",left:`${Ga}%`,transform:"translateX(-50%)",width:ta.thumbSize,height:ta.thumbSize,backgroundColor:je?"var(--color-neutral-400)":sa,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:je?"not-allowed":"pointer",transition:"left 0.2s",zIndex:4}})]})})},fl=({options:U=[],value:te="",onChange:le,placeholder:ve="選択してください...",searchPlaceholder:ze="検索...",size:re="medium",disabled:aa=!1,multiple:je=!1,maxSelected:Ee=null,clearable:ya=!0,searchable:ja=!0,loading:Ga=!1,noOptionsText:Xa="オプションが見つかりません",style:Ce={}})=>{const[sa,ta]=u.useState(!1),[lt,Qa]=u.useState(""),[Sa,nt]=u.useState(-1),Cn=u.useRef(null),Co=u.useRef(null),ko=u.useRef(null);u.useEffect(()=>{const ue=Oe=>{Cn.current&&!Cn.current.contains(Oe.target)&&(ta(!1),Qa(""),nt(-1))};return document.addEventListener("mousedown",ue),()=>document.removeEventListener("mousedown",ue)},[]);const la=U.filter(ue=>(typeof ue=="string"?ue:ue.label).toLowerCase().includes(lt.toLowerCase())),pa=ue=>{const Oe=typeof ue=="string"?ue:ue.value;if(je){const ft=Array.isArray(te)?te:[];if(ft.includes(Oe))le(ft.filter(To=>To!==Oe));else{if(Ee&&ft.length>=Ee)return;le([...ft,Oe])}}else le(Oe),ta(!1),Qa("");nt(-1)},Es=ue=>{if(!sa){(ue.key==="Enter"||ue.key===" "||ue.key==="ArrowDown")&&(ue.preventDefault(),ta(!0),nt(0));return}switch(ue.key){case"Escape":ta(!1),Qa(""),nt(-1);break;case"ArrowDown":ue.preventDefault(),nt(Oe=>Oe<la.length-1?Oe+1:0);break;case"ArrowUp":ue.preventDefault(),nt(Oe=>Oe>0?Oe-1:la.length-1);break;case"Enter":ue.preventDefault(),Sa>=0&&Sa<la.length&&pa(la[Sa]);break}},Mo=ue=>{ue.stopPropagation(),le(je?[]:"")},rg=()=>{if(je){const ue=Array.isArray(te)?te:[];if(ue.length===0)return ve;if(ue.length===1){const Oe=U.find(ft=>(typeof ft=="string"?ft:ft.value)===ue[0]);return typeof Oe=="string"?Oe:(Oe==null?void 0:Oe.label)||ue[0]}return`${ue.length}個選択済み`}else{if(!te)return ve;const ue=U.find(Oe=>(typeof Oe=="string"?Oe:Oe.value)===te);return typeof ue=="string"?ue:(ue==null?void 0:ue.label)||te}},sg={small:{padding:"6px 12px",fontSize:"14px",minHeight:"32px"},medium:{padding:"8px 16px",fontSize:"16px",minHeight:"40px"},large:{padding:"12px 20px",fontSize:"18px",minHeight:"48px"}},ig={position:"relative",width:"100%",...Ce},og={width:"100%",border:"1px solid #d1d5db",borderRadius:"6px",backgroundColor:aa?"#f9fafb":"#ffffff",color:aa?"#9ca3af":"#374151",cursor:aa?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"border-color 0.2s, box-shadow 0.2s",...sg[re],...sa&&{borderColor:"#2563eb",boxShadow:"0 0 0 3px rgba(37, 99, 235, 0.1)"}},cg={position:"absolute",top:"100%",left:0,right:0,backgroundColor:"white",border:"1px solid #d1d5db",borderTop:"none",borderRadius:"0 0 6px 6px",maxHeight:"200px",overflowY:"auto",zIndex:1e3,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},dg={width:"100%",padding:"8px 12px",border:"none",borderBottom:"1px solid #e5e7eb",fontSize:"14px",outline:"none"},ug=(ue,Oe)=>({padding:"8px 12px",cursor:"pointer",backgroundColor:Sa===Oe?"#f3f4f6":"transparent",borderBottom:"1px solid #f3f4f6",display:"flex",alignItems:"center",justifyContent:"space-between"}),Ro=je?Array.isArray(te)?te:[]:[];return t.jsxs("div",{ref:Cn,style:ig,children:[t.jsxs("div",{style:og,onClick:()=>!aa&&ta(!sa),onKeyDown:Es,tabIndex:aa?-1:0,children:[t.jsx("span",{style:{color:!te||je&&Ro.length===0?"#9ca3af":"inherit"},children:rg()}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[ya&&(je&&Ro.length>0||!je&&te)&&t.jsx("button",{onClick:Mo,style:{background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},children:t.jsx(M,{name:"x",style:{width:"16px",height:"16px"}})}),Ga?t.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #e5e7eb",borderTop:"2px solid #2563eb",borderRadius:"50%",animation:"spin 1s linear infinite"}}):t.jsx(M,{name:sa?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"#6b7280",transition:"transform 0.2s"}})]})]}),sa&&t.jsxs("div",{ref:Co,style:cg,children:[ja&&t.jsx("input",{ref:ko,type:"text",value:lt,onChange:ue=>Qa(ue.target.value),placeholder:ze,style:dg,autoFocus:!0}),la.length===0?t.jsx("div",{style:{padding:"12px",color:"#9ca3af",textAlign:"center",fontStyle:"italic"},children:Xa}):la.map((ue,Oe)=>{const ft=typeof ue=="string"?ue:ue.value,To=typeof ue=="string"?ue:ue.label,mg=je?Ro.includes(ft):te===ft;return t.jsxs("div",{style:ug(ue,Oe),onClick:()=>pa(ue),onMouseEnter:()=>nt(Oe),children:[t.jsx("span",{children:To}),mg&&t.jsx(M,{name:"check",style:{width:"16px",height:"16px",color:"#2563eb"}})]},ft)})]}),t.jsx("style",{jsx:!0,children:`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]})},As={status:[{value:"all",label:"すべて"},{value:"active",label:"アクティブ"},{value:"inactive",label:"非アクティブ"}],category:[{value:"all",label:"すべてのカテゴリ"},{value:"business",label:"ビジネス"},{value:"personal",label:"パーソナル"}]},He=U=>{const{name:te,value:le,type:ve,checked:ze}=U.target;a(re=>({...re,[te]:ve==="checkbox"?ze:le})),l[te]&&n(re=>({...re,[te]:""}))},Iu=(U,te)=>{o(le=>({...le,[U]:te})),console.log("フィルター変更:",U,te)},ag=U=>{y(te=>te.includes(U)?te.filter(le=>le!==U):[...te,U])},tg=U=>{x(te=>te.filter(le=>le!==U)),y(te=>te.filter(le=>le!==U))},lg=U=>{U.preventDefault(),T()&&alert("フォームが正常に送信されました！")},ng=()=>{n({name:"お名前は必須です",email:"有効なメールアドレスを入力してください",password:"パスワードは8文字以上で入力してください",prefecture:"都道府県を選択してください",startDate:"開始日を選択してください",files:"ファイルを選択してください",description:"詳細説明を入力してください",gender:"性別を選択してください",notifications:"通知設定を有効にしてください",agreeToTerms:"利用規約への同意は必須です"})};return t.jsxs("div",{className:"forms-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"フォーム / 入力"}),t.jsx("p",{className:"page-description",children:"フォーム入力とデータ収集に関するコンポーネント群。 基本的なフォーム要素から高度な入力コンポーネントまで包括的に提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"フォームコンポーネント"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField"}),t.jsx("p",{className:"component-description",children:"ラベル付きテキスト入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Ue,{name:"demo-field",label:"サンプルラベル",value:"サンプルテキスト",placeholder:"テキストを入力してください",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="fieldName"
  label="ラベルテキスト"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField (error)"}),t.jsx("p",{className:"component-description",children:"エラー状態の入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Ue,{name:"demo-error",label:"メールアドレス",value:"invalid-email",error:"このフィールドは必須です",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="email"
  label="メールアドレス"
  value={value}
  onChange={handleChange}
  error="エラーメッセージ"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField (ラベルなし)"}),t.jsx("p",{className:"component-description",children:"ラベルなしの入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Ue,{name:"demo-no-label",value:"",placeholder:"ラベルなしの入力",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="fieldName"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PasswordInput"}),t.jsx("p",{className:"component-description",children:"パスワード表示切り替え機能付き入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"password-input-container",children:[t.jsx("div",{className:"password-input-wrapper",children:t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",className:"input-label",children:"パスワード"}),t.jsxs("div",{className:"password-field",children:[t.jsx("input",{id:"password",type:Ae?"text":"password",value:O,onChange:U=>ae(U.target.value),placeholder:"パスワードを入力してください",className:"password-input"}),t.jsx("button",{type:"button",onClick:()=>da(!Ae),className:"password-toggle","aria-label":Ae?"パスワードを隠す":"パスワードを表示する",children:Ae?t.jsx(M,{name:"eye",className:"w-4 h-4"}):t.jsx(M,{name:"eye-off",className:"w-4 h-4"})})]})]})}),t.jsx("div",{className:"password-input-wrapper",children:t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"confirmPassword",className:"input-label",children:"パスワード確認"}),t.jsxs("div",{className:"password-field",children:[t.jsx("input",{id:"confirmPassword",type:ua?"text":"password",value:fe,onChange:U=>Ne(U.target.value),placeholder:"パスワードを再入力してください",className:"password-input"}),t.jsx("button",{type:"button",onClick:()=>ra(!ua),className:"password-toggle","aria-label":ua?"パスワードを隠す":"パスワードを表示する",children:ua?t.jsx(M,{name:"eye",className:"w-4 h-4"}):t.jsx(M,{name:"eye-off",className:"w-4 h-4"})})]})]})}),t.jsx("style",{jsx:!0,children:`
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
}`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Checkbox"}),t.jsx("p",{className:"component-description",children:"チェックボックス入力コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"checkbox-group",children:[t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ht,{name:"agreeToTerms",checked:e.agreeToTerms,onChange:He}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"利用規約に同意します"})]}),t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ht,{name:"newsletter",checked:e.newsletter,onChange:He}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"ニュースレターを受信します"})]})]})}),t.jsx("div",{className:"code-snippet",children:`<label className="flex items-center">
  <Checkbox
    name="agreeToTerms"
    checked={agreeToTerms}
    onChange={handleChange}
  />
  <span className="ms-2 text-sm text-gray-600">
    利用規約に同意します
  </span>
</label>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SelectBox"}),t.jsx("p",{className:"component-description",children:"ドロップダウン選択コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"select-wrapper",children:t.jsxs("select",{className:"select-input",value:e.prefecture,onChange:He,name:"prefecture",children:[t.jsx("option",{value:"",children:"都道府県を選択"}),t.jsx("option",{value:"tokyo",children:"東京都"}),t.jsx("option",{value:"osaka",children:"大阪府"}),t.jsx("option",{value:"kyoto",children:"京都府"}),t.jsx("option",{value:"kanagawa",children:"神奈川県"}),t.jsx("option",{value:"saitama",children:"埼玉県"})]})})}),t.jsx("div",{className:"code-snippet",children:`<div className="select-wrapper">
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
</div>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"MultiSelectBox (複数選択ドロップダウン)"}),t.jsx("p",{className:"component-description",children:"複数選択可能なカスタムドロップダウンコンポーネント - チェックボックス付き"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(bf,{label:"希望勤務地",name:"workLocation",value:k,options:[{value:"tokyo",label:"東京"},{value:"osaka",label:"大阪"},{value:"nagoya",label:"名古屋"},{value:"fukuoka",label:"福岡"},{value:"remote",label:"リモート"}],onChange:L,placeholder:"勤務地を選択してください",helper:"複数選択可能です",required:!0})}),t.jsx("div",{className:"code-snippet",children:`<SelectBox
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"RadioGroup"}),t.jsx("p",{className:"component-description",children:"高度なラジオボタン選択コンポーネント - エラー状態、説明文、無効化対応"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"radio-group-wrapper",children:[t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"性別 *"}),t.jsxs("div",{className:"radio-group vertical",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"male",checked:e.gender==="male",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"男性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"female",checked:e.gender==="female",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"女性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"other",checked:e.gender==="other",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"その他"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"no-answer",checked:e.gender==="no-answer",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"回答しない"})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"優先度"}),t.jsxs("div",{className:"radio-group horizontal",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"high",checked:e.priority==="high",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"高"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"medium",checked:e.priority==="medium",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"中"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"low",checked:e.priority==="low",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"低"})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"プランを選択"}),t.jsxs("div",{className:"radio-group vertical with-descriptions",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"plan",value:"basic",checked:e.plan==="basic",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsxs("div",{className:"radio-content",children:[t.jsx("span",{className:"radio-label",children:"ベーシックプラン"}),t.jsx("span",{className:"radio-description",children:"基本機能のみ利用可能"})]})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"plan",value:"premium",checked:e.plan==="premium",onChange:He}),t.jsx("span",{className:"radio-custom"}),t.jsxs("div",{className:"radio-content",children:[t.jsx("span",{className:"radio-label",children:"プレミアムプラン"}),t.jsx("span",{className:"radio-description",children:"全機能利用可能、優先サポート付き"})]})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"配送方法（現在利用不可）"}),t.jsxs("div",{className:"radio-group vertical disabled",children:[t.jsxs("label",{className:"radio-option disabled",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"shipping",value:"standard",disabled:!0}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"通常配送"})]}),t.jsxs("label",{className:"radio-option disabled",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"shipping",value:"express",disabled:!0}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"速達配送"})]})]})]}),t.jsx("style",{jsx:!0,children:`
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
</div>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ToggleButton / Switch"}),t.jsx("p",{className:"component-description",children:"ON/OFFを切り替えるトグルスイッチコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なトグルボタン"}),t.jsxs("div",{className:"toggle-group",children:[t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"notifications",checked:e.notifications,onChange:He}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"通知を受け取る"})]}),t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"darkMode",checked:e.darkMode,onChange:He}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"ダークモード"})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"サイズバリエーション"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx(Va,{checked:c,onChange:U=>d(U.target.checked),label:"小サイズ",size:"sm"}),t.jsx(Va,{checked:c,onChange:U=>d(U.target.checked),label:"中サイズ（デフォルト）",size:"md"}),t.jsx(Va,{checked:c,onChange:U=>d(U.target.checked),label:"大サイズ",size:"lg"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"実用例"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[t.jsx(Va,{checked:c,onChange:U=>d(U.target.checked),label:"プッシュ通知を有効にする"}),t.jsx(Va,{checked:!1,onChange:()=>{},label:"ダークモード"}),t.jsx(Va,{checked:!0,onChange:()=>{},label:"自動保存"})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なトグルボタン
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
<Switch size="lg" checked={value} onChange={handler} label="大サイズ" />`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DatePicker"}),t.jsx("p",{className:"component-description",children:"日付選択用のピッカーコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的な日付選択"}),t.jsx(Wt,{value:g,onChange:h,label:"開始日"})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"必須フィールド"}),t.jsx(Wt,{value:"",onChange:()=>{},label:"締切日",required:!0})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"日時選択（時間含む）"}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"block",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)",marginBottom:"var(--spacing-2)"},children:["開催日時 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("input",{type:"datetime-local",value:"",onChange:()=>{},style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"},onFocus:U=>{U.target.style.borderColor="rgb(21, 52, 109)",U.target.style.boxShadow="0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:U=>{U.target.style.borderColor="var(--color-neutral-300)",U.target.style.boxShadow="none"}})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な日付選択
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FileUpload"}),t.jsx("p",{className:"component-description",children:"ドラッグ&ドロップ対応のファイルアップロードコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"450px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"単一ファイル"}),t.jsx(pl,{onFilesChange:U=>N(U),label:"プロフィール画像",accept:"image/*"}),b.length>0&&t.jsxs("div",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:["選択ファイル: ",b.map(U=>U.name).join(", ")]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"複数ファイル"}),t.jsx(pl,{onFilesChange:()=>{},multiple:!0,label:"ドキュメント",accept:".pdf,.doc,.docx"})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 単一ファイル
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Textarea"}),t.jsx("p",{className:"component-description",children:"複数行テキスト入力用のテキストエリアコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"500px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なテキストエリア"}),t.jsx(Wa,{value:C,onChange:R,label:"メッセージ",placeholder:"ご意見・ご要望をお聞かせください",rows:4})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"文字数制限付き"}),t.jsx(Wa,{value:"",onChange:()=>{},label:"自己紹介",placeholder:"200文字以内で自己紹介をお書きください",rows:3,maxLength:200})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なテキストエリア
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
/>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"高度なフォーム要素"}),t.jsxs("div",{className:"advanced-demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Slider / RangeSlider"}),t.jsx("p",{className:"component-description",children:"単一値または範囲選択に対応した高度なスライダーコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"slider-wrapper",children:[t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"基本スライダー"}),t.jsxs("div",{className:"slider-item",children:[t.jsxs("label",{className:"slider-label",children:["音量: ",m,"%"]}),t.jsx(de,{value:m,onChange:f,min:0,max:100,showLabel:!1})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"レンジスライダー（範囲選択）"}),t.jsxs("div",{className:"slider-item",children:[t.jsxs("label",{className:"slider-label",children:["価格範囲: ¥",p[0].toLocaleString()," - ¥",p[1].toLocaleString()]}),t.jsx(De,{value:p,onChange:v,min:0,max:1e5,step:1e3})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"サイズバリエーション"}),t.jsxs("div",{className:"slider-sizes",children:[t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"小サイズ"}),t.jsx(de,{value:m,onChange:f,size:"small"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"標準サイズ"}),t.jsx(de,{value:m,onChange:f,size:"medium"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"大サイズ"}),t.jsx(de,{value:m,onChange:f,size:"large"})]})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"カラーバリエーション"}),t.jsxs("div",{className:"slider-colors",children:[t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Primary"}),t.jsx(de,{value:m,onChange:f,color:"primary"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Success"}),t.jsx(de,{value:m,onChange:f,color:"success"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Warning"}),t.jsx(de,{value:m,onChange:f,color:"warning"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Error"}),t.jsx(de,{value:m,onChange:f,color:"error"})]})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"無効状態"}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"設定不可（無効化）"}),t.jsx(de,{value:30,onChange:()=>{},disabled:!0})]})]}),t.jsx("style",{jsx:!0,children:`
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Tooltip"}),t.jsx("p",{className:"component-description",children:"ホバー時にヒントやヘルプ情報を表示するツールチップコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"chips-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なツールチップ"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(Me,{content:"上に表示",position:"top",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"上にホバー"})}),t.jsx(Me,{content:"下に表示",position:"bottom",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"下にホバー"})}),t.jsx(Me,{content:"左に表示",position:"left",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"左にホバー"})}),t.jsx(Me,{content:"右に表示",position:"right",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"右にホバー"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"アイコンにツールチップ"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[t.jsx(Me,{content:"ヘルプ情報",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-primary-600)"}})}),t.jsx(Me,{content:"詳細情報",children:t.jsx(M,{name:"info",style:{cursor:"pointer",color:"var(--color-info-600)"}})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"フォーム要素との組み合わせ"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:["パスワード",t.jsx(Me,{content:"8文字以上、英数字含む",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx("input",{type:"password",placeholder:"パスワードを入力",style:{marginTop:"var(--spacing-1)",width:"250px",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:["メールアドレス",t.jsx(Me,{content:"確認メールが送信されます",children:t.jsx(M,{name:"info",style:{cursor:"pointer",color:"var(--color-info-500)",width:"18px",height:"18px"}})})]}),t.jsx("input",{type:"email",placeholder:"example@email.com",style:{marginTop:"var(--spacing-1)",width:"250px",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なツールチップ
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
</label>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Rating"}),t.jsx("p",{className:"component-description",children:"星評価やいいね機能などの評価入力コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"slider-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"星評価"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx(P,{value:A,onChange:B,label:"総合評価",showValue:!0}),t.jsx(P,{value:4,readOnly:!0,label:"平均評価（読み取り専用）",showValue:!0})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"サイズバリエーション"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"小サイズ"}),t.jsx(P,{value:3,onChange:()=>{},size:"sm"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"中サイズ（デフォルト）"}),t.jsx(P,{value:3,onChange:()=>{},size:"md"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"大サイズ"}),t.jsx(P,{value:3,onChange:()=>{},size:"lg"})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"3段階評価"}),t.jsx(P,{value:2,onChange:()=>{},max:3,label:"満足度評価",showValue:!0})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な星評価
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"AutoComplete"}),t.jsx("p",{className:"component-description",children:"入力支援機能を提供するオートコンプリートコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"技術スタック"}),t.jsx(Ts,{value:"",onChange:()=>{},suggestions:["JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go"],placeholder:"使用技術を入力してください",label:"スキル"})]})})}),t.jsx("div",{className:"code-snippet",children:`// 技術スタック選択
<AutoComplete
  value={value}
  onChange={setValue}
  suggestions={['JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js']}
  placeholder="使用技術を入力してください"
  label="スキル"
  maxSuggestions={5}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Chips"}),t.jsx("p",{className:"component-description",children:"タグ選択や複数項目の管理に使用するチップコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"chips-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"選択可能チップス"}),t.jsxs("div",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:["選択中: ",j.join(", ")]}),t.jsx(Ta,{items:w,selected:j,onSelectionChange:ag,removable:!1})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"削除可能チップス"}),t.jsx("div",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"×ボタンでチップを削除できます"}),t.jsx(Ta,{items:w,selected:w,onSelectionChange:()=>{},removable:!0,onRemove:tg})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"カテゴリ例"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"スキル"}),t.jsx(Ta,{items:["JavaScript","React","Node.js","TypeScript","Python"],selected:["JavaScript","React"],onSelectionChange:()=>{},removable:!1})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"興味のあるトピック"}),t.jsx(Ta,{items:["Web開発","AI","デザイン","マーケティング","データ分析"],selected:["Web開発","デザイン"],onSelectionChange:()=>{},removable:!1})]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 選択可能チップス
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
/>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"実用的なフォーム例"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"統合フォームデモ"}),t.jsx("p",{className:"component-description",children:"フォームコンポーネントを組み合わせた実用例。「エラー表示テスト」ボタンでバリデーションエラーの表示を確認できます。"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("form",{onSubmit:lg,className:"demo-form",children:[t.jsx(Ue,{id:"form-name",name:"name",label:t.jsxs(t.Fragment,{children:["お名前 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:e.name,onChange:He,placeholder:"山田 太郎",required:!0,error:l.name,fullWidth:!0}),t.jsx(Ue,{id:"form-email",type:"email",name:"email",label:t.jsxs(t.Fragment,{children:["メールアドレス ",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:e.email,onChange:He,placeholder:"example@email.com",required:!0,error:l.email,fullWidth:!0}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["パスワード ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Me,{content:"8文字以上、英数字含む",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Ue,{id:"form-password",type:"password",name:"password",value:e.password,onChange:He,placeholder:"8文字以上で入力",required:!0,error:l.password,fullWidth:!0})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["スキル ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Me,{content:"お持ちの技術スキルを入力してください",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Ts,{value:J,onChange:Z,suggestions:["JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go","C++","CSS","HTML","SQL"],placeholder:"使用技術を入力してください",label:"",required:!0}),l.skills&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.skills})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["開始日 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Me,{content:"プロジェクトの開始予定日",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Wt,{value:g,onChange:h,error:l.startDate}),l.startDate&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.startDate})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["添付ファイル ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Me,{content:"PDF, Word, Excel形式対応",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(pl,{onFilesChange:U=>N(U),accept:".pdf,.doc,.docx,.xls,.xlsx",multiple:!0,error:l.files}),l.files&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.files})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["詳細説明 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Me,{content:"200文字以内で入力してください",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Wa,{value:C,onChange:R,placeholder:"プロジェクトの詳細をお書きください",rows:4,maxLength:200,error:l.description}),l.description&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.description})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["性別 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Me,{content:"回答したくない場合は「回答しない」を選択",children:t.jsx(M,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsxs("div",{className:`radio-group mt-1 ${l.gender?"error-state":""}`,children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"male",checked:e.gender==="male",onChange:He,required:!0}),t.jsx("span",{className:"radio-label",children:"男性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"female",checked:e.gender==="female",onChange:He,required:!0}),t.jsx("span",{className:"radio-label",children:"女性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"other",checked:e.gender==="other",onChange:He,required:!0}),t.jsx("span",{className:"radio-label",children:"その他"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"none",checked:e.gender==="none",onChange:He,required:!0}),t.jsx("span",{className:"radio-label",children:"回答しない"})]})]}),l.gender&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.gender})]}),t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"優先度"}),t.jsxs("div",{className:"radio-group-horizontal mt-1",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"high",checked:e.priority==="high",onChange:He}),t.jsx("span",{className:"radio-label",children:"高"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"medium",checked:e.priority==="medium",onChange:He}),t.jsx("span",{className:"radio-label",children:"中"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"low",checked:e.priority==="low",onChange:He}),t.jsx("span",{className:"radio-label",children:"低"})]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsx("label",{className:"form-label",style:{marginBottom:0},children:"設定オプション"}),t.jsx(Me,{content:"重要なお知らせを受け取るため推奨",children:t.jsx(M,{name:"info",style:{cursor:"pointer",color:"var(--color-info-500)",width:"18px",height:"18px"}})})]}),t.jsxs("div",{className:`toggle-group mt-1 ${l.notifications?"error-state":""}`,children:[t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"notifications",checked:e.notifications,onChange:He,required:!0}),t.jsx("span",{className:"toggle-slider"})]}),t.jsxs("span",{className:"toggle-label",children:["プッシュ通知を受け取る ",t.jsx("span",{style:{color:"red"},children:"*"})]})]}),t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"darkMode",checked:e.darkMode,onChange:He}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"ダークモード"})]})]}),l.notifications&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.notifications})]}),t.jsxs("div",{className:"checkbox-group",children:[t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ht,{name:"agreeToTerms",checked:e.agreeToTerms,onChange:He,required:!0}),t.jsxs("span",{className:"ms-2 text-sm text-gray-600",children:["利用規約に同意します ",t.jsx("span",{style:{color:"red"},children:"*"})]})]}),l.agreeToTerms&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.agreeToTerms}),t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ht,{name:"newsletter",checked:e.newsletter,onChange:He}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"ニュースレターを受信します"})]})]}),t.jsxs("div",{className:"form-actions",children:[t.jsx("button",{type:"button",style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{a({name:"",email:"",password:"",prefecture:"",gender:"",priority:"",notifications:!1,darkMode:!1,agreeToTerms:!1,newsletter:!1}),n({})},children:"リセット"}),t.jsx("button",{type:"button",style:{padding:"8px 16px",border:"1px solid #dc2626",borderRadius:"4px",background:"#dc2626",color:"white",cursor:"pointer",marginRight:"8px"},onClick:ng,children:"エラー表示テスト"}),t.jsx("button",{type:"submit",style:{padding:"8px 16px",border:"none",borderRadius:"4px",background:"rgb(21, 52, 109)",color:"white",cursor:"pointer"},children:"送信"})]})]})})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用方法"}),t.jsxs("div",{className:"component-card",children:[t.jsx("div",{className:"component-info",children:t.jsx("h3",{className:"component-name",children:"インポートと基本的な使用方法"})}),t.jsx("div",{className:"code-snippet",children:`// インポート
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
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"検索・フィルターパネル"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SearchFilterPanel"}),t.jsx("p",{className:"component-description",children:"検索ボックスとフィルター機能を組み合わせたパネルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"search-filter-demo",children:[t.jsxs("div",{className:"search-filter-panel",children:[t.jsxs("div",{className:"search-section",children:[t.jsx("label",{htmlFor:"demo-search",className:"search-label",children:"検索"}),t.jsx("input",{id:"demo-search",type:"text",className:"search-input",placeholder:"検索キーワードを入力...",value:r,onChange:U=>s(U.target.value)})]}),t.jsxs("div",{className:"filter-section",children:[t.jsxs("div",{className:"filter-item",children:[t.jsx("label",{htmlFor:"status-filter",className:"filter-label",children:"ステータス"}),t.jsx("select",{id:"status-filter",className:"filter-select",value:i.status,onChange:U=>Iu("status",U.target.value),children:As.status.map(U=>t.jsx("option",{value:U.value,children:U.label},U.value))})]}),t.jsxs("div",{className:"filter-item",children:[t.jsx("label",{htmlFor:"category-filter",className:"filter-label",children:"カテゴリ"}),t.jsx("select",{id:"category-filter",className:"filter-select",value:i.category,onChange:U=>Iu("category",U.target.value),children:As.category.map(U=>t.jsx("option",{value:U.value,children:U.label},U.value))})]})]})]}),t.jsx("div",{className:"demo-results",children:t.jsxs("p",{className:"results-text",children:['検索: "',r,'" | ステータス: ',(e0=As.status.find(U=>U.value===i.status))==null?void 0:e0.label," | カテゴリ: ",(a0=As.category.find(U=>U.value===i.category))==null?void 0:a0.label]})})]})}),t.jsx("div",{className:"code-snippet",children:`<SearchFilterPanel
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"検索可能セレクト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SearchableSelect"}),t.jsx("p",{className:"component-description",children:"検索機能付きの高機能セレクトコンポーネント - 単一選択、複数選択、キーボードナビゲーション対応"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"基本的な単一選択"}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500"},children:"国を選択"}),t.jsx(fl,{options:[{value:"jp",label:"日本"},{value:"us",label:"アメリカ"},{value:"uk",label:"イギリス"},{value:"fr",label:"フランス"},{value:"de",label:"ドイツ"},{value:"kr",label:"韓国"},{value:"cn",label:"中国"},{value:"ca",label:"カナダ"},{value:"au",label:"オーストラリア"},{value:"in",label:"インド"}],value:ea,onChange:Qe,placeholder:"国を選択してください...",searchPlaceholder:"国名で検索..."}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"#666"},children:["選択中: ",ea||"未選択"]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"複数選択"}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500"},children:"チームメンバー"}),t.jsx(fl,{options:[{value:"tanaka",label:"田中太郎"},{value:"suzuki",label:"鈴木花子"},{value:"sato",label:"佐藤一郎"},{value:"takahashi",label:"高橋美咲"},{value:"watanabe",label:"渡辺健太"},{value:"yamada",label:"山田美香"},{value:"nakamura",label:"中村悠太"},{value:"kobayashi",label:"小林由美"}],value:Fe,onChange:Ra,placeholder:"メンバーを選択...",searchPlaceholder:"名前で検索...",multiple:!0}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"#666"},children:["選択中 (",Fe.length,"): ",Fe.join(", ")||"未選択"]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な単一選択
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"InputFieldは適切なtype属性を設定してください（email, password等）"}),t.jsx("li",{children:"InputFieldにlabel属性を指定すると、ラベルと入力フィールドが自動的に関連付けられます"}),t.jsx("li",{children:"InputFieldのerror属性でバリデーションエラーを表示できます"}),t.jsx("li",{children:"Checkboxは重要な同意事項や設定項目に使用してください"}),t.jsx("li",{children:"SelectBoxには適切なデフォルトオプションを設定してください"}),t.jsx("li",{children:"RadioButtonは排他的な選択肢に使用し、同じname属性を設定してください"}),t.jsx("li",{children:"縦並び（radio-group）は選択肢が多い場合や説明が長い場合に適しています"}),t.jsx("li",{children:"横並び（radio-group-horizontal）は選択肢が少ない場合やコンパクトな表示が必要な場合に適しています"}),t.jsx("li",{children:"ToggleButtonは設定項目やON/OFF切り替えに使用してください"}),t.jsx("li",{children:"ToggleButtonは直感的な操作ができるよう適切なラベルを設定してください"}),t.jsx("li",{children:"ToggleButtonでエラー状態を表示する場合は、error-stateクラスを親要素に追加してください"}),t.jsx("li",{children:"必須のToggleButtonには「*」マークとrequired属性を設定してください"}),t.jsx("li",{children:"Switchコンポーネントは設定の即座適用が期待される場合に使用してください"}),t.jsx("li",{children:"Sliderは連続的な数値選択（音量、価格範囲等）に適しています"}),t.jsx("li",{children:"Sliderには最小値・最大値・ステップを適切に設定してください"}),t.jsx("li",{children:"Chipsは複数選択やタグ管理に有効で、選択状態を視覚的に分かりやすく表現します"}),t.jsx("li",{children:"削除可能なChipsはユーザーが追加したタグの管理に適しています"}),t.jsx("li",{children:"フォームには適切なバリデーションとエラーハンドリングを実装してください"}),t.jsx("li",{children:"エラー状態の要素には適切なCSSクラスやaria属性を設定してください"}),t.jsx("li",{children:"検索・フィルターパネルはリアルタイム検索または送信ボタンでの適用を検討してください"}),t.jsx("li",{children:"フィルター項目は用途に応じて適切なオプションを設定してください"}),t.jsx("li",{children:"Tooltipはユーザビリティ向上のため、入力規則や説明が必要な項目に使用してください"}),t.jsx("li",{children:"Tooltipのテキストは簡潔で分かりやすい内容にしてください"}),t.jsx("li",{children:"Tooltipの位置は画面端での表示を考慮して適切に設定してください"}),t.jsx("li",{children:"アイコンと組み合わせたTooltipはヘルプアイコンや情報アイコンの使用を推奨します"}),t.jsx("li",{children:"DatePickerは日付の入力が必要な場面で使用し、適切なラベルを設定してください"}),t.jsx("li",{children:"DatePickerにはmin/max属性で日付範囲の制限を設けることも可能です"}),t.jsx("li",{children:"FileUploadはaccept属性で対応ファイル形式を明確にしてください"}),t.jsx("li",{children:"FileUploadはドラッグ&ドロップとクリック選択の両方に対応しています"}),t.jsx("li",{children:"複数ファイル選択が必要な場合はmultiple属性を設定してください"}),t.jsx("li",{children:"Textareaは長文入力が必要な場面で使用し、適切な行数を設定してください"}),t.jsx("li",{children:"Textareaには文字数制限（maxLength）を設定してユーザーに入力量の目安を示してください"}),t.jsx("li",{children:"Textareaのresizeプロパティで垂直方向のリサイズを許可しています"}),t.jsx("li",{children:"Ratingコンポーネントは評価やフィードバック収集に適しています"}),t.jsx("li",{children:"星評価は1-5段階評価に適しており、デフォルトで星アイコンを使用します"}),t.jsx("li",{children:"読み取り専用モードで既存の評価値を表示できます"}),t.jsx("li",{children:"max属性で評価段階数をカスタマイズ可能です（3段階、5段階など）"}),t.jsx("li",{children:"ホバー効果でユーザビリティを向上させています"}),t.jsx("li",{children:"AutoCompleteは入力支援によりユーザビリティを向上させます"}),t.jsx("li",{children:"キーボード操作（矢印キー、Enter、Escape）に対応しています"}),t.jsx("li",{children:"部分一致でのフィルタリングにより候補を絞り込みます"}),t.jsx("li",{children:"maxSuggestionsで表示候補数を制限できます"}),t.jsx("li",{children:"住所、技術スタック、商品名など様々な用途に適用可能です"})]})})]})]})},jb=()=>{const[e,a]=u.useState(""),[l,n]=u.useState("all"),[r,s]=u.useState(""),i={navigation:["dashboard","home","menu","chevron-up","chevron-down","chevron-left","chevron-right","arrow-up","arrow-down","arrow-left","arrow-right","arrow-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","navigation"],user:["users","user","user-plus","user-shield","user-cog","user-group","assignments","people-group","users-line","network-wired"],organization:["building","building-office","building-user","department","organization","sitemap","diagram-project"],security:["shield","shield-check","lock","unlock","key","hierarchy"],data:["table-cells","table","folder","folder-open","file","document","clipboard","clipboard-list","storage","database","cog"],business:["project","code","briefcase","cube","product","tasks","file-contract","handshake"],analytics:["chart","analytics","chart-bar","chart-line","chart-pie"],system:["settings","cog","cogs","wrench","tools","hammer","screwdriver","sliders"],finance:["currency-yen","price","wallet","credit-card","receipt"],notification:["bell","notification","inbox"],feedback:["check","check-circle","check-double","close","times","warning","exclamation","info","success","error","question","plus-circle","minus-circle"],action:["plus","minus","search","filter","edit","pencil","pen","delete","list","star","eye","eye-off","refresh","undo","redo","spinner"],communication:["envelope","mail","comment","comments","message","paper-plane","phone"],media:["video","music","photo","image","film","microphone","camera"],shopping:["shopping-cart","cart","tag","tags"],social:["share","share-alt","thumbs-up","thumbs-down","flag","heart","retweet","bookmark"],time:["calendar","calendar-alt","calendar-check","clock","stopwatch","hourglass","history"],location:["location","map","map-marker","compass","globe"],weather:["sun","moon","cloud","cloud-rain","bolt"],device:["laptop","desktop","tablet","mobile-alt","device-mobile","keyboard","mouse","print","wifi","bluetooth"],ui:["bars","ellipsis","ellipsis-v","toggle-on","toggle-off","expand","compress","grid","list"],education:["book","graduation-cap","bookmark-alt"],health:["heart-pulse","hospital","pills","syringe","stethoscope"],transport:["car","plane","train","ship","bicycle","truck"],food:["coffee","pizza","utensils","wine-glass"],gaming:["gamepad","dice","trophy","medal","crown","play","pause","stop"]},o=Object.values(i).flat(),c={all:"全て",navigation:"ナビゲーション",user:"ユーザー",organization:"組織・建物",security:"セキュリティ",data:"ファイル・データ",business:"ビジネス",analytics:"分析・グラフ",system:"システム・設定",finance:"金融・決済",notification:"通知",feedback:"フィードバック",action:"アクション",communication:"コミュニケーション",media:"メディア",shopping:"ショッピング",social:"ソーシャル",time:"時間・カレンダー",location:"位置情報・地図",weather:"天気",device:"デバイス",ui:"UI制御",education:"教育",health:"医療・健康",transport:"交通",food:"飲食",gaming:"ゲーム・エンタメ"},d=o.filter(p=>{var y;const v=p.toLowerCase().includes(e.toLowerCase()),j=l==="all"||((y=i[l])==null?void 0:y.includes(p));return v&&j}),m={};l==="all"?Object.entries(i).forEach(([p,v])=>{const j=v.filter(y=>y.toLowerCase().includes(e.toLowerCase()));j.length>0&&(m[p]=j)}):m[l]=d;const f=async p=>{const v=`<Icon name="${p}" className="w-5 h-5" />`;try{await navigator.clipboard.writeText(v),s(p),setTimeout(()=>s(""),2e3)}catch(j){console.error("コピーに失敗しました:",j);const y=document.createElement("textarea");y.value=v,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),s(p),setTimeout(()=>s(""),2e3)}};return t.jsxs("div",{className:"icons-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"SVGアイコン一覧"}),t.jsx("p",{className:"page-description",children:"システム全体で使用する統一されたSVGアイコンライブラリです。 アイコンをクリックするとReactコンポーネントのコードがコピーされます。"})]}),t.jsxs("div",{className:"controls",children:[t.jsxs("div",{className:"search-control",children:[t.jsx("label",{className:"control-label",children:"アイコン検索"}),t.jsx("input",{type:"text",className:"search-input",placeholder:"アイコン名で検索...",value:e,onChange:p=>a(p.target.value)})]}),t.jsxs("div",{className:"category-control",children:[t.jsx("label",{className:"control-label",children:"カテゴリ"}),t.jsx("select",{className:"category-select",value:l,onChange:p=>n(p.target.value),children:Object.entries(c).map(([p,v])=>t.jsx("option",{value:p,children:v},p))})]})]}),t.jsxs("div",{className:"results-count",children:[d.length,"個のアイコンが見つかりました"]}),Object.entries(m).map(([p,v])=>t.jsxs("div",{className:"category-section",children:[t.jsxs("h2",{className:"category-header",children:[c[p]||p,t.jsxs("span",{style:{marginLeft:"var(--spacing-2)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)"},children:["(",v.length,")"]})]}),t.jsx("div",{className:"icons-grid",children:v.map(j=>t.jsxs("div",{className:"icon-item",onClick:()=>f(j),title:`${j} - クリックでコードをコピー`,children:[t.jsx("div",{className:"icon-display",children:t.jsx(M,{name:j,className:"w-8 h-8"})}),t.jsx("div",{className:"icon-name",children:j}),r===j&&t.jsx("div",{className:"copied-indicator",children:"コピー済み"})]},j))})]},p)),t.jsxs("div",{className:"usage-section",children:[t.jsx("h3",{className:"usage-title",children:"使用方法"}),t.jsxs("ul",{className:"usage-steps",children:[t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"1. インポート:"}),t.jsx("code",{className:"usage-code",children:"import Icon from '../../../components/icons/Icon.jsx';"})]}),t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"2. 基本的な使用:"}),t.jsx("code",{className:"usage-code",children:'<Icon name="dashboard" className="w-5 h-5" />'})]}),t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"3. カスタマイズ:"}),t.jsx("code",{className:"usage-code",children:'<Icon name="users" className="w-8 h-8 text-blue-600" />'})]})]})]})]})};var wb=Object.defineProperty,Nb=(e,a,l)=>a in e?wb(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,fc=(e,a,l)=>(Nb(e,typeof a!="symbol"?a+"":a,l),l);let Sb=class{constructor(){fc(this,"current",this.detect()),fc(this,"handoffState","pending"),fc(this,"currentId",0)}set(a){this.current!==a&&(this.handoffState="pending",this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},$t=new Sb;function Cs(e){var a;return $t.isServer?null:e==null?document:(a=e==null?void 0:e.ownerDocument)!=null?a:document}function wd(e){var a,l;return $t.isServer?null:e==null?document:(l=(a=e==null?void 0:e.getRootNode)==null?void 0:a.call(e))!=null?l:document}function yf(e){var a,l;return(l=(a=wd(e))==null?void 0:a.activeElement)!=null?l:null}function zb(e){return yf(e)===e}function vo(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(a=>setTimeout(()=>{throw a}))}function hl(){let e=[],a={addEventListener(l,n,r,s){return l.addEventListener(n,r,s),a.add(()=>l.removeEventListener(n,r,s))},requestAnimationFrame(...l){let n=requestAnimationFrame(...l);return a.add(()=>cancelAnimationFrame(n))},nextFrame(...l){return a.requestAnimationFrame(()=>a.requestAnimationFrame(...l))},setTimeout(...l){let n=setTimeout(...l);return a.add(()=>clearTimeout(n))},microTask(...l){let n={current:!0};return vo(()=>{n.current&&l[0]()}),a.add(()=>{n.current=!1})},style(l,n,r){let s=l.style.getPropertyValue(n);return Object.assign(l.style,{[n]:r}),this.add(()=>{Object.assign(l.style,{[n]:s})})},group(l){let n=hl();return l(n),this.add(()=>n.dispose())},add(l){return e.includes(l)||e.push(l),()=>{let n=e.indexOf(l);if(n>=0)for(let r of e.splice(n,1))r()}},dispose(){for(let l of e.splice(0))l()}};return a}function xo(){let[e]=u.useState(hl);return u.useEffect(()=>()=>e.dispose(),[e]),e}let Ia=(e,a)=>{$t.isServer?u.useEffect(e,a):u.useLayoutEffect(e,a)};function zn(e){let a=u.useRef(e);return Ia(()=>{a.current=e},[e]),a}let Ye=function(e){let a=zn(e);return I.useCallback((...l)=>a.current(...l),[a])};function ks(e){return u.useMemo(()=>e,Object.values(e))}let Cb=u.createContext(void 0);function kb(){return u.useContext(Cb)}function Nd(...e){return Array.from(new Set(e.flatMap(a=>typeof a=="string"?a.split(" "):[]))).filter(Boolean).join(" ")}function ul(e,a,...l){if(e in a){let r=a[e];return typeof r=="function"?r(...l):r}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ul),n}var Wi=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Wi||{}),Al=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Al||{});function kt(){let e=Rb();return u.useCallback(a=>Mb({mergeRefs:e,...a}),[e])}function Mb({ourProps:e,theirProps:a,slot:l,defaultTag:n,features:r,visible:s=!0,name:i,mergeRefs:o}){o=o??Tb;let c=jf(a,e);if(s)return Ps(c,l,n,i,o);let d=r??0;if(d&2){let{static:m=!1,...f}=c;if(m)return Ps(f,l,n,i,o)}if(d&1){let{unmount:m=!0,...f}=c;return ul(m?0:1,{0(){return null},1(){return Ps({...f,hidden:!0,style:{display:"none"}},l,n,i,o)}})}return Ps(c,l,n,i,o)}function Ps(e,a={},l,n,r){let{as:s=l,children:i,refName:o="ref",...c}=gc(e,["unmount","static"]),d=e.ref!==void 0?{[o]:e.ref}:{},m=typeof i=="function"?i(a):i;"className"in c&&c.className&&typeof c.className=="function"&&(c.className=c.className(a)),c["aria-labelledby"]&&c["aria-labelledby"]===c.id&&(c["aria-labelledby"]=void 0);let f={};if(a){let p=!1,v=[];for(let[j,y]of Object.entries(a))typeof y=="boolean"&&(p=!0),y===!0&&v.push(j.replace(/([A-Z])/g,w=>`-${w.toLowerCase()}`));if(p){f["data-headlessui-state"]=v.join(" ");for(let j of v)f[`data-${j}`]=""}}if(Qr(s)&&(Object.keys(nn(c)).length>0||Object.keys(nn(f)).length>0))if(!u.isValidElement(m)||Array.isArray(m)&&m.length>1||Eb(m)){if(Object.keys(nn(c)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(nn(c)).concat(Object.keys(nn(f))).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`))}else{let p=m.props,v=p==null?void 0:p.className,j=typeof v=="function"?(...x)=>Nd(v(...x),c.className):Nd(v,c.className),y=j?{className:j}:{},w=jf(m.props,nn(gc(c,["ref"])));for(let x in f)x in w&&delete f[x];return u.cloneElement(m,Object.assign({},w,f,d,{ref:r(Ab(m),d.ref)},y))}return u.createElement(s,Object.assign({},gc(c,["ref"]),!Qr(s)&&d,!Qr(s)&&f),m)}function Rb(){let e=u.useRef([]),a=u.useCallback(l=>{for(let n of e.current)n!=null&&(typeof n=="function"?n(l):n.current=l)},[]);return(...l)=>{if(!l.every(n=>n==null))return e.current=l,a}}function Tb(...e){return e.every(a=>a==null)?void 0:a=>{for(let l of e)l!=null&&(typeof l=="function"?l(a):l.current=a)}}function jf(...e){if(e.length===0)return{};if(e.length===1)return e[0];let a={},l={};for(let n of e)for(let r in n)r.startsWith("on")&&typeof n[r]=="function"?(l[r]!=null||(l[r]=[]),l[r].push(n[r])):a[r]=n[r];if(a.disabled||a["aria-disabled"])for(let n in l)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n)&&(l[n]=[r=>{var s;return(s=r==null?void 0:r.preventDefault)==null?void 0:s.call(r)}]);for(let n in l)Object.assign(a,{[n](r,...s){let i=l[n];for(let o of i){if((r instanceof Event||(r==null?void 0:r.nativeEvent)instanceof Event)&&r.defaultPrevented)return;o(r,...s)}}});return a}function tt(e){var a;return Object.assign(u.forwardRef(e),{displayName:(a=e.displayName)!=null?a:e.name})}function nn(e){let a=Object.assign({},e);for(let l in a)a[l]===void 0&&delete a[l];return a}function gc(e,a=[]){let l=Object.assign({},e);for(let n of a)n in l&&delete l[n];return l}function Ab(e){return I.version.split(".")[0]>="19"?e.props.ref:e.ref}function Qr(e){return e===u.Fragment||e===Symbol.for("react.fragment")}function Eb(e){return Qr(e.type)}let Db="span";var Gi=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Gi||{});function Bb(e,a){var l;let{features:n=1,...r}=e,s={ref:a,"aria-hidden":(n&2)===2?!0:(l=r["aria-hidden"])!=null?l:void 0,hidden:(n&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return kt()({ourProps:s,theirProps:r,slot:{},defaultTag:Db,name:"Hidden"})}let Sd=tt(Bb);function _b(e){return typeof e!="object"||e===null?!1:"nodeType"in e}function Yl(e){return _b(e)&&"tagName"in e}function xn(e){return Yl(e)&&"accessKey"in e}function El(e){return Yl(e)&&"tabIndex"in e}function Lb(e){return Yl(e)&&"style"in e}function Hb(e){return xn(e)&&e.nodeName==="IFRAME"}function Ob(e){return xn(e)&&e.nodeName==="INPUT"}let wf=Symbol();function Vb(e,a=!0){return Object.assign(e,{[wf]:a})}function Yt(...e){let a=u.useRef(e);u.useEffect(()=>{a.current=e},[e]);let l=Ye(n=>{for(let r of a.current)r!=null&&(typeof r=="function"?r(n):r.current=n)});return e.every(n=>n==null||(n==null?void 0:n[wf]))?void 0:l}let Gu=u.createContext(null);Gu.displayName="DescriptionContext";function Nf(){let e=u.useContext(Gu);if(e===null){let a=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,Nf),a}return e}function $b(){let[e,a]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(l){let n=Ye(s=>(a(i=>[...i,s]),()=>a(i=>{let o=i.slice(),c=o.indexOf(s);return c!==-1&&o.splice(c,1),o}))),r=u.useMemo(()=>({register:n,slot:l.slot,name:l.name,props:l.props,value:l.value}),[n,l.slot,l.name,l.props,l.value]);return I.createElement(Gu.Provider,{value:r},l.children)},[a])]}let Ub="p";function qb(e,a){let l=u.useId(),n=kb(),{id:r=`headlessui-description-${l}`,...s}=e,i=Nf(),o=Yt(a);Ia(()=>i.register(r),[r,i.register]);let c=ks({...i.slot,disabled:n||!1}),d={ref:o,...i.props,id:r};return kt()({ourProps:d,theirProps:s,slot:c,defaultTag:Ub,name:i.name||"Description"})}let Yb=tt(qb),Wb=Object.assign(Yb,{});var Sf=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Sf||{});let Gb=u.createContext(()=>{});function Xb({value:e,children:a}){return I.createElement(Gb.Provider,{value:e},a)}let zf=class extends Map{constructor(a){super(),this.factory=a}get(a){let l=super.get(a);return l===void 0&&(l=this.factory(a),this.set(a,l)),l}};var Qb=Object.defineProperty,Fb=(e,a,l)=>a in e?Qb(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,Pb=(e,a,l)=>(Fb(e,a+"",l),l),Cf=(e,a,l)=>{if(!a.has(e))throw TypeError("Cannot "+l)},gt=(e,a,l)=>(Cf(e,a,"read from private field"),l?l.call(e):a.get(e)),vc=(e,a,l)=>{if(a.has(e))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(e):a.set(e,l)},Om=(e,a,l,n)=>(Cf(e,a,"write to private field"),a.set(e,l),l),Dt,Tr,Ar;let Zb=class{constructor(a){vc(this,Dt,{}),vc(this,Tr,new zf(()=>new Set)),vc(this,Ar,new Set),Pb(this,"disposables",hl()),Om(this,Dt,a),$t.isServer&&this.disposables.microTask(()=>{this.dispose()})}dispose(){this.disposables.dispose()}get state(){return gt(this,Dt)}subscribe(a,l){if($t.isServer)return()=>{};let n={selector:a,callback:l,current:a(gt(this,Dt))};return gt(this,Ar).add(n),this.disposables.add(()=>{gt(this,Ar).delete(n)})}on(a,l){return $t.isServer?()=>{}:(gt(this,Tr).get(a).add(l),this.disposables.add(()=>{gt(this,Tr).get(a).delete(l)}))}send(a){let l=this.reduce(gt(this,Dt),a);if(l!==gt(this,Dt)){Om(this,Dt,l);for(let n of gt(this,Ar)){let r=n.selector(gt(this,Dt));kf(n.current,r)||(n.current=r,n.callback(r))}for(let n of gt(this,Tr).get(a.type))n(gt(this,Dt),a)}}};Dt=new WeakMap,Tr=new WeakMap,Ar=new WeakMap;function kf(e,a){return Object.is(e,a)?!0:typeof e!="object"||e===null||typeof a!="object"||a===null?!1:Array.isArray(e)&&Array.isArray(a)?e.length!==a.length?!1:xc(e[Symbol.iterator](),a[Symbol.iterator]()):e instanceof Map&&a instanceof Map||e instanceof Set&&a instanceof Set?e.size!==a.size?!1:xc(e.entries(),a.entries()):Vm(e)&&Vm(a)?xc(Object.entries(e)[Symbol.iterator](),Object.entries(a)[Symbol.iterator]()):!1}function xc(e,a){do{let l=e.next(),n=a.next();if(l.done&&n.done)return!0;if(l.done||n.done||!Object.is(l.value,n.value))return!1}while(!0)}function Vm(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let a=Object.getPrototypeOf(e);return a===null||Object.getPrototypeOf(a)===null}var Kb=Object.defineProperty,Jb=(e,a,l)=>a in e?Kb(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,$m=(e,a,l)=>(Jb(e,typeof a!="symbol"?a+"":a,l),l),Ib=(e=>(e[e.Push=0]="Push",e[e.Pop=1]="Pop",e))(Ib||{});let ey={0(e,a){let l=a.id,n=e.stack,r=e.stack.indexOf(l);if(r!==-1){let s=e.stack.slice();return s.splice(r,1),s.push(l),n=s,{...e,stack:n}}return{...e,stack:[...e.stack,l]}},1(e,a){let l=a.id,n=e.stack.indexOf(l);if(n===-1)return e;let r=e.stack.slice();return r.splice(n,1),{...e,stack:r}}},ay=class Mf extends Zb{constructor(){super(...arguments),$m(this,"actions",{push:a=>this.send({type:0,id:a}),pop:a=>this.send({type:1,id:a})}),$m(this,"selectors",{isTop:(a,l)=>a.stack[a.stack.length-1]===l,inStack:(a,l)=>a.stack.includes(l)})}static new(){return new Mf({stack:[]})}reduce(a,l){return ul(l.type,ey,a,l)}};const Rf=new zf(()=>ay.new());var Tf={exports:{}},Af={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=u;function ty(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ly=typeof Object.is=="function"?Object.is:ty,ny=Ms.useSyncExternalStore,ry=Ms.useRef,sy=Ms.useEffect,iy=Ms.useMemo,oy=Ms.useDebugValue;Af.useSyncExternalStoreWithSelector=function(e,a,l,n,r){var s=ry(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=iy(function(){function c(v){if(!d){if(d=!0,m=v,v=n(v),r!==void 0&&i.hasValue){var j=i.value;if(r(j,v))return f=j}return f=v}if(j=f,ly(m,v))return j;var y=n(v);return r!==void 0&&r(j,y)?(m=v,j):(m=v,f=y)}var d=!1,m,f,p=l===void 0?null:l;return[function(){return c(a())},p===null?void 0:function(){return c(p())}]},[a,l,n,r]);var o=ny(e,s[0],s[1]);return sy(function(){i.hasValue=!0,i.value=o},[o]),oy(o),o};Tf.exports=Af;var cy=Tf.exports;function Ef(e,a,l=kf){return cy.useSyncExternalStoreWithSelector(Ye(n=>e.subscribe(dy,n)),Ye(()=>e.state),Ye(()=>e.state),Ye(a),l)}function dy(e){return e}function Rs(e,a){let l=u.useId(),n=Rf.get(a),[r,s]=Ef(n,u.useCallback(i=>[n.selectors.isTop(i,l),n.selectors.inStack(i,l)],[n,l]));return Ia(()=>{if(e)return n.actions.push(l),()=>n.actions.pop(l)},[n,e,l]),e?s?r:!0:!1}let zd=new Map,Fr=new Map;function Um(e){var a;let l=(a=Fr.get(e))!=null?a:0;return Fr.set(e,l+1),l!==0?()=>qm(e):(zd.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>qm(e))}function qm(e){var a;let l=(a=Fr.get(e))!=null?a:1;if(l===1?Fr.delete(e):Fr.set(e,l-1),l!==1)return;let n=zd.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,zd.delete(e))}function uy(e,{allowed:a,disallowed:l}={}){let n=Rs(e,"inert-others");Ia(()=>{var r,s;if(!n)return;let i=hl();for(let c of(r=l==null?void 0:l())!=null?r:[])c&&i.add(Um(c));let o=(s=a==null?void 0:a())!=null?s:[];for(let c of o){if(!c)continue;let d=Cs(c);if(!d)continue;let m=c.parentElement;for(;m&&m!==d.body;){for(let f of m.children)o.some(p=>f.contains(p))||i.add(Um(f));m=m.parentElement}}return i.dispose},[n,a,l])}function my(e,a,l){let n=zn(r=>{let s=r.getBoundingClientRect();s.x===0&&s.y===0&&s.width===0&&s.height===0&&l()});u.useEffect(()=>{if(!e)return;let r=a===null?null:xn(a)?a:a.current;if(!r)return;let s=hl();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>n.current(r));i.observe(r),s.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>n.current(r));i.observe(r),s.add(()=>i.disconnect())}return()=>s.dispose()},[a,n,e])}let Xi=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),hy=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Jt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(Jt||{}),Cd=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Cd||{}),py=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(py||{});function fy(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Xi)).sort((a,l)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}function gy(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(hy)).sort((a,l)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}var Df=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Df||{});function vy(e,a=0){var l;return e===((l=Cs(e))==null?void 0:l.body)?!1:ul(a,{0(){return e.matches(Xi)},1(){let n=e;for(;n!==null;){if(n.matches(Xi))return!0;n=n.parentElement}return!1}})}var xy=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(xy||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function rl(e){e==null||e.focus({preventScroll:!0})}let by=["textarea","input"].join(",");function yy(e){var a,l;return(l=(a=e==null?void 0:e.matches)==null?void 0:a.call(e,by))!=null?l:!1}function jy(e,a=l=>l){return e.slice().sort((l,n)=>{let r=a(l),s=a(n);if(r===null||s===null)return 0;let i=r.compareDocumentPosition(s);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Pr(e,a,{sorted:l=!0,relativeTo:n=null,skipElements:r=[]}={}){let s=Array.isArray(e)?e.length>0?wd(e[0]):document:wd(e),i=Array.isArray(e)?l?jy(e):e:a&64?gy(e):fy(e);r.length>0&&i.length>1&&(i=i.filter(v=>!r.some(j=>j!=null&&"current"in j?(j==null?void 0:j.current)===v:j===v))),n=n??(s==null?void 0:s.activeElement);let o=(()=>{if(a&5)return 1;if(a&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(a&1)return 0;if(a&2)return Math.max(0,i.indexOf(n))-1;if(a&4)return Math.max(0,i.indexOf(n))+1;if(a&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=a&32?{preventScroll:!0}:{},m=0,f=i.length,p;do{if(m>=f||m+f<=0)return 0;let v=c+m;if(a&16)v=(v+f)%f;else{if(v<0)return 3;if(v>=f)return 1}p=i[v],p==null||p.focus(d),m+=o}while(p!==yf(p));return a&6&&yy(p)&&p.select(),2}function Bf(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function wy(){return/Android/gi.test(window.navigator.userAgent)}function Ym(){return Bf()||wy()}function Zs(e,a,l,n){let r=zn(l);u.useEffect(()=>{if(!e)return;function s(i){r.current(i)}return document.addEventListener(a,s,n),()=>document.removeEventListener(a,s,n)},[e,a,n])}function _f(e,a,l,n){let r=zn(l);u.useEffect(()=>{if(!e)return;function s(i){r.current(i)}return window.addEventListener(a,s,n),()=>window.removeEventListener(a,s,n)},[e,a,n])}const Wm=30;function Ny(e,a,l){let n=zn(l),r=u.useCallback(function(o,c){if(o.defaultPrevented)return;let d=c(o);if(d===null||!d.getRootNode().contains(d)||!d.isConnected)return;let m=function f(p){return typeof p=="function"?f(p()):Array.isArray(p)||p instanceof Set?p:[p]}(a);for(let f of m)if(f!==null&&(f.contains(d)||o.composed&&o.composedPath().includes(f)))return;return!vy(d,Df.Loose)&&d.tabIndex!==-1&&o.preventDefault(),n.current(o,d)},[n,a]),s=u.useRef(null);Zs(e,"pointerdown",o=>{var c,d;Ym()||(s.current=((d=(c=o.composedPath)==null?void 0:c.call(o))==null?void 0:d[0])||o.target)},!0),Zs(e,"pointerup",o=>{if(Ym()||!s.current)return;let c=s.current;return s.current=null,r(o,()=>c)},!0);let i=u.useRef({x:0,y:0});Zs(e,"touchstart",o=>{i.current.x=o.touches[0].clientX,i.current.y=o.touches[0].clientY},!0),Zs(e,"touchend",o=>{let c={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};if(!(Math.abs(c.x-i.current.x)>=Wm||Math.abs(c.y-i.current.y)>=Wm))return r(o,()=>El(o.target)?o.target:null)},!0),_f(e,"blur",o=>r(o,()=>Hb(window.document.activeElement)?window.document.activeElement:null),!0)}function Xu(...e){return u.useMemo(()=>Cs(...e),[...e])}function Lf(e,a,l,n){let r=zn(l);u.useEffect(()=>{e=e??window;function s(i){r.current(i)}return e.addEventListener(a,s,n),()=>e.removeEventListener(a,s,n)},[e,a,n])}function Sy(e){return u.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function zy(e,a){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(r){return n.add(r),()=>n.delete(r)},dispatch(r,...s){let i=a[r].call(l,...s);i&&(l=i,n.forEach(o=>o()))}}}function Cy(){let e;return{before({doc:a}){var l;let n=a.documentElement,r=(l=a.defaultView)!=null?l:window;e=Math.max(0,r.innerWidth-n.clientWidth)},after({doc:a,d:l}){let n=a.documentElement,r=Math.max(0,n.clientWidth-n.offsetWidth),s=Math.max(0,e-r);l.style(n,"paddingRight",`${s}px`)}}}function ky(){return Bf()?{before({doc:e,d:a,meta:l}){function n(r){for(let s of l().containers)for(let i of s())if(i.contains(r))return!0;return!1}a.microTask(()=>{var r;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let o=hl();o.style(e.documentElement,"scrollBehavior","auto"),a.add(()=>a.microTask(()=>o.dispose()))}let s=(r=window.scrollY)!=null?r:window.pageYOffset,i=null;a.addEventListener(e,"click",o=>{if(El(o.target))try{let c=o.target.closest("a");if(!c)return;let{hash:d}=new URL(c.href),m=e.querySelector(d);El(m)&&!n(m)&&(i=m)}catch{}},!0),a.group(o=>{a.addEventListener(e,"touchstart",c=>{if(o.dispose(),El(c.target)&&Lb(c.target))if(n(c.target)){let d=c.target;for(;d.parentElement&&n(d.parentElement);)d=d.parentElement;o.style(d,"overscrollBehavior","contain")}else o.style(c.target,"touchAction","none")})}),a.addEventListener(e,"touchmove",o=>{if(El(o.target)){if(Ob(o.target))return;if(n(o.target)){let c=o.target;for(;c.parentElement&&c.dataset.headlessuiPortal!==""&&!(c.scrollHeight>c.clientHeight||c.scrollWidth>c.clientWidth);)c=c.parentElement;c.dataset.headlessuiPortal===""&&o.preventDefault()}else o.preventDefault()}},{passive:!1}),a.add(()=>{var o;let c=(o=window.scrollY)!=null?o:window.pageYOffset;s!==c&&window.scrollTo(0,s),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function My(){return{before({doc:e,d:a}){a.style(e.documentElement,"overflow","hidden")}}}function Gm(e){let a={};for(let l of e)Object.assign(a,l(a));return a}let sn=zy(()=>new Map,{PUSH(e,a){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:hl(),meta:new Set,computedMeta:{}};return n.count++,n.meta.add(a),n.computedMeta=Gm(n.meta),this.set(e,n),this},POP(e,a){let l=this.get(e);return l&&(l.count--,l.meta.delete(a),l.computedMeta=Gm(l.meta)),this},SCROLL_PREVENT(e){let a={doc:e.doc,d:e.d,meta(){return e.computedMeta}},l=[ky(),Cy(),My()];l.forEach(({before:n})=>n==null?void 0:n(a)),l.forEach(({after:n})=>n==null?void 0:n(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});sn.subscribe(()=>{let e=sn.getSnapshot(),a=new Map;for(let[l]of e)a.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=a.get(l.doc)==="hidden",r=l.count!==0;(r&&!n||!r&&n)&&sn.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&sn.dispatch("TEARDOWN",l)}});function Ry(e,a,l=()=>({containers:[]})){let n=Sy(sn),r=a?n.get(a):void 0,s=r?r.count>0:!1;return Ia(()=>{if(!(!a||!e))return sn.dispatch("PUSH",a,l),()=>sn.dispatch("POP",a,l)},[e,a]),s}function Ty(e,a,l=()=>[document.body]){let n=Rs(e,"scroll-lock");Ry(n,a,r=>{var s;return{containers:[...(s=r.containers)!=null?s:[],l]}})}function Ay(e=0){let[a,l]=u.useState(e),n=u.useCallback(c=>l(c),[]),r=u.useCallback(c=>l(d=>d|c),[]),s=u.useCallback(c=>(a&c)===c,[a]),i=u.useCallback(c=>l(d=>d&~c),[]),o=u.useCallback(c=>l(d=>d^c),[]);return{flags:a,setFlag:n,addFlag:r,hasFlag:s,removeFlag:i,toggleFlag:o}}var Ey={},Xm,Qm;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Xm=process==null?void 0:Ey)==null?void 0:Xm.NODE_ENV)==="test"&&typeof((Qm=Element==null?void 0:Element.prototype)==null?void 0:Qm.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var Dy=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(Dy||{});function By(e){let a={};for(let l in e)e[l]===!0&&(a[`data-${l}`]="");return a}function _y(e,a,l,n){let[r,s]=u.useState(l),{hasFlag:i,addFlag:o,removeFlag:c}=Ay(e&&r?3:0),d=u.useRef(!1),m=u.useRef(!1),f=xo();return Ia(()=>{var p;if(e){if(l&&s(!0),!a){l&&o(3);return}return(p=n==null?void 0:n.start)==null||p.call(n,l),Ly(a,{inFlight:d,prepare(){m.current?m.current=!1:m.current=d.current,d.current=!0,!m.current&&(l?(o(3),c(4)):(o(4),c(2)))},run(){m.current?l?(c(3),o(4)):(c(4),o(3)):l?c(1):o(1)},done(){var v;m.current&&Vy(a)||(d.current=!1,c(7),l||s(!1),(v=n==null?void 0:n.end)==null||v.call(n,l))}})}},[e,l,a,f]),e?[r,{closed:i(1),enter:i(2),leave:i(4),transition:i(2)||i(4)}]:[l,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Ly(e,{prepare:a,run:l,done:n,inFlight:r}){let s=hl();return Oy(e,{prepare:a,inFlight:r}),s.nextFrame(()=>{l(),s.requestAnimationFrame(()=>{s.add(Hy(e,n))})}),s.dispose}function Hy(e,a){var l,n;let r=hl();if(!e)return r.dispose;let s=!1;r.add(()=>{s=!0});let i=(n=(l=e.getAnimations)==null?void 0:l.call(e).filter(o=>o instanceof CSSTransition))!=null?n:[];return i.length===0?(a(),r.dispose):(Promise.allSettled(i.map(o=>o.finished)).then(()=>{s||a()}),r.dispose)}function Oy(e,{inFlight:a,prepare:l}){if(a!=null&&a.current){l();return}let n=e.style.transition;e.style.transition="none",l(),e.offsetHeight,e.style.transition=n}function Vy(e){var a,l;return((l=(a=e.getAnimations)==null?void 0:a.call(e))!=null?l:[]).some(n=>n instanceof CSSTransition&&n.playState!=="finished")}function Qu(e,a){let l=u.useRef([]),n=Ye(e);u.useEffect(()=>{let r=[...l.current];for(let[s,i]of a.entries())if(l.current[s]!==i){let o=n(a,r);return l.current=a,o}},[n,...a])}let bo=u.createContext(null);bo.displayName="OpenClosedContext";var Tt=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Tt||{});function yo(){return u.useContext(bo)}function $y({value:e,children:a}){return I.createElement(bo.Provider,{value:e},a)}function Uy({children:e}){return I.createElement(bo.Provider,{value:null},e)}function qy(e){function a(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",a))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",a),a())}let Nl=[];qy(()=>{function e(a){if(!El(a.target)||a.target===document.body||Nl[0]===a.target)return;let l=a.target;l=l.closest(Xi),Nl.unshift(l??a.target),Nl=Nl.filter(n=>n!=null&&n.isConnected),Nl.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Hf(e){let a=Ye(e),l=u.useRef(!1);u.useEffect(()=>(l.current=!1,()=>{l.current=!0,vo(()=>{l.current&&a()})}),[a])}let Of=u.createContext(!1);function Yy(){return u.useContext(Of)}function Fm(e){return I.createElement(Of.Provider,{value:e.force},e.children)}function Wy(e){let a=Yy(),l=u.useContext($f),[n,r]=u.useState(()=>{var s;if(!a&&l!==null)return(s=l.current)!=null?s:null;if($t.isServer)return null;let i=e==null?void 0:e.getElementById("headlessui-portal-root");if(i)return i;if(e===null)return null;let o=e.createElement("div");return o.setAttribute("id","headlessui-portal-root"),e.body.appendChild(o)});return u.useEffect(()=>{n!==null&&(e!=null&&e.body.contains(n)||e==null||e.body.appendChild(n))},[n,e]),u.useEffect(()=>{a||l!==null&&r(l.current)},[l,r,a]),n}let Vf=u.Fragment,Gy=tt(function(e,a){let{ownerDocument:l=null,...n}=e,r=u.useRef(null),s=Yt(Vb(p=>{r.current=p}),a),i=Xu(r.current),o=l??i,c=Wy(o),d=u.useContext(kd),m=xo(),f=kt();return Hf(()=>{var p;c&&c.childNodes.length<=0&&((p=c.parentElement)==null||p.removeChild(c))}),c?Fd.createPortal(I.createElement("div",{"data-headlessui-portal":"",ref:p=>{m.dispose(),d&&p&&m.add(d.register(p))}},f({ourProps:{ref:s},theirProps:n,slot:{},defaultTag:Vf,name:"Portal"})),c):null});function Xy(e,a){let l=Yt(a),{enabled:n=!0,ownerDocument:r,...s}=e,i=kt();return n?I.createElement(Gy,{...s,ownerDocument:r,ref:l}):i({ourProps:{ref:l},theirProps:s,slot:{},defaultTag:Vf,name:"Portal"})}let Qy=u.Fragment,$f=u.createContext(null);function Fy(e,a){let{target:l,...n}=e,r={ref:Yt(a)},s=kt();return I.createElement($f.Provider,{value:l},s({ourProps:r,theirProps:n,defaultTag:Qy,name:"Popover.Group"}))}let kd=u.createContext(null);function Py(){let e=u.useContext(kd),a=u.useRef([]),l=Ye(s=>(a.current.push(s),e&&e.register(s),()=>n(s))),n=Ye(s=>{let i=a.current.indexOf(s);i!==-1&&a.current.splice(i,1),e&&e.unregister(s)}),r=u.useMemo(()=>({register:l,unregister:n,portals:a}),[l,n,a]);return[a,u.useMemo(()=>function({children:s}){return I.createElement(kd.Provider,{value:r},s)},[r])]}let Zy=tt(Xy),Uf=tt(Fy),Ky=Object.assign(Zy,{Group:Uf});function Jy(e,a=typeof document<"u"?document.defaultView:null,l){let n=Rs(e,"escape");Lf(a,"keydown",r=>{n&&(r.defaultPrevented||r.key===Sf.Escape&&l(r))})}function Iy(){var e;let[a]=u.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[l,n]=u.useState((e=a==null?void 0:a.matches)!=null?e:!1);return Ia(()=>{if(!a)return;function r(s){n(s.matches)}return a.addEventListener("change",r),()=>a.removeEventListener("change",r)},[a]),l}function ej({defaultContainers:e=[],portals:a,mainTreeNode:l}={}){let n=Ye(()=>{var r,s;let i=Cs(l),o=[];for(let c of e)c!==null&&(Yl(c)?o.push(c):"current"in c&&Yl(c.current)&&o.push(c.current));if(a!=null&&a.current)for(let c of a.current)o.push(c);for(let c of(r=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?r:[])c!==document.body&&c!==document.head&&Yl(c)&&c.id!=="headlessui-portal-root"&&(l&&(c.contains(l)||c.contains((s=l==null?void 0:l.getRootNode())==null?void 0:s.host))||o.some(d=>c.contains(d))||o.push(c));return o});return{resolveContainers:n,contains:Ye(r=>n().some(s=>s.contains(r)))}}let qf=u.createContext(null);function Pm({children:e,node:a}){let[l,n]=u.useState(null),r=Yf(a??l);return I.createElement(qf.Provider,{value:r},e,r===null&&I.createElement(Sd,{features:Gi.Hidden,ref:s=>{var i,o;if(s){for(let c of(o=(i=Cs(s))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?o:[])if(c!==document.body&&c!==document.head&&Yl(c)&&c!=null&&c.contains(s)){n(c);break}}}}))}function Yf(e=null){var a;return(a=u.useContext(qf))!=null?a:e}function aj(){let e=typeof document>"u";return"useSyncExternalStore"in wc?(a=>a.useSyncExternalStore)(wc)(()=>()=>{},()=>!1,()=>!e):!1}function jo(){let e=aj(),[a,l]=u.useState($t.isHandoffComplete);return a&&$t.isHandoffComplete===!1&&l(!1),u.useEffect(()=>{a!==!0&&l(!0)},[a]),u.useEffect(()=>$t.handoff(),[]),e?!1:a}function Fu(){let e=u.useRef(!1);return Ia(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var Er=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Er||{});function tj(){let e=u.useRef(0);return _f(!0,"keydown",a=>{a.key==="Tab"&&(e.current=a.shiftKey?1:0)},!0),e}function Wf(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let a=new Set;for(let l of e.current)Yl(l.current)&&a.add(l.current);return a}let lj="div";var rn=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(rn||{});function nj(e,a){let l=u.useRef(null),n=Yt(l,a),{initialFocus:r,initialFocusFallback:s,containers:i,features:o=15,...c}=e;jo()||(o=0);let d=Xu(l.current);oj(o,{ownerDocument:d});let m=cj(o,{ownerDocument:d,container:l,initialFocus:r,initialFocusFallback:s});dj(o,{ownerDocument:d,container:l,containers:i,previousActiveElement:m});let f=tj(),p=Ye(g=>{if(!xn(l.current))return;let h=l.current;(b=>b())(()=>{ul(f.current,{[Er.Forwards]:()=>{Pr(h,Jt.First,{skipElements:[g.relatedTarget,s]})},[Er.Backwards]:()=>{Pr(h,Jt.Last,{skipElements:[g.relatedTarget,s]})}})})}),v=Rs(!!(o&2),"focus-trap#tab-lock"),j=xo(),y=u.useRef(!1),w={ref:n,onKeyDown(g){g.key=="Tab"&&(y.current=!0,j.requestAnimationFrame(()=>{y.current=!1}))},onBlur(g){if(!(o&4))return;let h=Wf(i);xn(l.current)&&h.add(l.current);let b=g.relatedTarget;El(b)&&b.dataset.headlessuiFocusGuard!=="true"&&(Gf(h,b)||(y.current?Pr(l.current,ul(f.current,{[Er.Forwards]:()=>Jt.Next,[Er.Backwards]:()=>Jt.Previous})|Jt.WrapAround,{relativeTo:g.target}):El(g.target)&&rl(g.target)))}},x=kt();return I.createElement(I.Fragment,null,v&&I.createElement(Sd,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:Gi.Focusable}),x({ourProps:w,theirProps:c,defaultTag:lj,name:"FocusTrap"}),v&&I.createElement(Sd,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:Gi.Focusable}))}let rj=tt(nj),sj=Object.assign(rj,{features:rn});function ij(e=!0){let a=u.useRef(Nl.slice());return Qu(([l],[n])=>{n===!0&&l===!1&&vo(()=>{a.current.splice(0)}),n===!1&&l===!0&&(a.current=Nl.slice())},[e,Nl,a]),Ye(()=>{var l;return(l=a.current.find(n=>n!=null&&n.isConnected))!=null?l:null})}function oj(e,{ownerDocument:a}){let l=!!(e&8),n=ij(l);Qu(()=>{l||zb(a==null?void 0:a.body)&&rl(n())},[l]),Hf(()=>{l&&rl(n())})}function cj(e,{ownerDocument:a,container:l,initialFocus:n,initialFocusFallback:r}){let s=u.useRef(null),i=Rs(!!(e&1),"focus-trap#initial-focus"),o=Fu();return Qu(()=>{if(e===0)return;if(!i){r!=null&&r.current&&rl(r.current);return}let c=l.current;c&&vo(()=>{if(!o.current)return;let d=a==null?void 0:a.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===d){s.current=d;return}}else if(c.contains(d)){s.current=d;return}if(n!=null&&n.current)rl(n.current);else{if(e&16){if(Pr(c,Jt.First|Jt.AutoFocus)!==Cd.Error)return}else if(Pr(c,Jt.First)!==Cd.Error)return;if(r!=null&&r.current&&(rl(r.current),(a==null?void 0:a.activeElement)===r.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}s.current=a==null?void 0:a.activeElement})},[r,i,e]),s}function dj(e,{ownerDocument:a,container:l,containers:n,previousActiveElement:r}){let s=Fu(),i=!!(e&4);Lf(a==null?void 0:a.defaultView,"focus",o=>{if(!i||!s.current)return;let c=Wf(n);xn(l.current)&&c.add(l.current);let d=r.current;if(!d)return;let m=o.target;xn(m)?Gf(c,m)?(r.current=m,rl(m)):(o.preventDefault(),o.stopPropagation(),rl(d)):rl(r.current)},!0)}function Gf(e,a){for(let l of e)if(l.contains(a))return!0;return!1}function Xf(e){var a;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||!Qr((a=e.as)!=null?a:Ff)||I.Children.count(e.children)===1}let wo=u.createContext(null);wo.displayName="TransitionContext";var uj=(e=>(e.Visible="visible",e.Hidden="hidden",e))(uj||{});function mj(){let e=u.useContext(wo);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function hj(){let e=u.useContext(No);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let No=u.createContext(null);No.displayName="NestingContext";function So(e){return"children"in e?So(e.children):e.current.filter(({el:a})=>a.current!==null).filter(({state:a})=>a==="visible").length>0}function Qf(e,a){let l=zn(e),n=u.useRef([]),r=Fu(),s=xo(),i=Ye((v,j=Al.Hidden)=>{let y=n.current.findIndex(({el:w})=>w===v);y!==-1&&(ul(j,{[Al.Unmount](){n.current.splice(y,1)},[Al.Hidden](){n.current[y].state="hidden"}}),s.microTask(()=>{var w;!So(n)&&r.current&&((w=l.current)==null||w.call(l))}))}),o=Ye(v=>{let j=n.current.find(({el:y})=>y===v);return j?j.state!=="visible"&&(j.state="visible"):n.current.push({el:v,state:"visible"}),()=>i(v,Al.Unmount)}),c=u.useRef([]),d=u.useRef(Promise.resolve()),m=u.useRef({enter:[],leave:[]}),f=Ye((v,j,y)=>{c.current.splice(0),a&&(a.chains.current[j]=a.chains.current[j].filter(([w])=>w!==v)),a==null||a.chains.current[j].push([v,new Promise(w=>{c.current.push(w)})]),a==null||a.chains.current[j].push([v,new Promise(w=>{Promise.all(m.current[j].map(([x,g])=>g)).then(()=>w())})]),j==="enter"?d.current=d.current.then(()=>a==null?void 0:a.wait.current).then(()=>y(j)):y(j)}),p=Ye((v,j,y)=>{Promise.all(m.current[j].splice(0).map(([w,x])=>x)).then(()=>{var w;(w=c.current.shift())==null||w()}).then(()=>y(j))});return u.useMemo(()=>({children:n,register:o,unregister:i,onStart:f,onStop:p,wait:d,chains:m}),[o,i,n,f,p,m,d])}let Ff=u.Fragment,Pf=Wi.RenderStrategy;function pj(e,a){var l,n;let{transition:r=!0,beforeEnter:s,afterEnter:i,beforeLeave:o,afterLeave:c,enter:d,enterFrom:m,enterTo:f,entered:p,leave:v,leaveFrom:j,leaveTo:y,...w}=e,[x,g]=u.useState(null),h=u.useRef(null),b=Xf(e),N=Yt(...b?[h,a,g]:a===null?[]:[a]),C=(l=w.unmount)==null||l?Al.Unmount:Al.Hidden,{show:R,appear:k,initial:L}=mj(),[T,A]=u.useState(R?"visible":"hidden"),B=hj(),{register:_,unregister:Q}=B;Ia(()=>_(h),[_,h]),Ia(()=>{if(C===Al.Hidden&&h.current){if(R&&T!=="visible"){A("visible");return}return ul(T,{hidden:()=>Q(h),visible:()=>_(h)})}},[T,h,_,Q,R,C]);let Y=jo();Ia(()=>{if(b&&Y&&T==="visible"&&h.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[h,T,Y,b]);let S=L&&!k,H=k&&R&&L,E=u.useRef(!1),q=Qf(()=>{E.current||(A("hidden"),Q(h))},B),$=Ye(fe=>{E.current=!0;let Ne=fe?"enter":"leave";q.onStart(h,Ne,Ae=>{Ae==="enter"?s==null||s():Ae==="leave"&&(o==null||o())})}),J=Ye(fe=>{let Ne=fe?"enter":"leave";E.current=!1,q.onStop(h,Ne,Ae=>{Ae==="enter"?i==null||i():Ae==="leave"&&(c==null||c())}),Ne==="leave"&&!So(q)&&(A("hidden"),Q(h))});u.useEffect(()=>{b&&r||($(R),J(R))},[R,b,r]);let Z=!(!r||!b||!Y||S),[,F]=_y(Z,x,R,{start:$,end:J}),G=nn({ref:N,className:((n=Nd(w.className,H&&d,H&&m,F.enter&&d,F.enter&&F.closed&&m,F.enter&&!F.closed&&f,F.leave&&v,F.leave&&!F.closed&&j,F.leave&&F.closed&&y,!F.transition&&R&&p))==null?void 0:n.trim())||void 0,...By(F)}),O=0;T==="visible"&&(O|=Tt.Open),T==="hidden"&&(O|=Tt.Closed),R&&T==="hidden"&&(O|=Tt.Opening),!R&&T==="visible"&&(O|=Tt.Closing);let ae=kt();return I.createElement(No.Provider,{value:q},I.createElement($y,{value:O},ae({ourProps:G,theirProps:w,defaultTag:Ff,features:Pf,visible:T==="visible",name:"Transition.Child"})))}function fj(e,a){let{show:l,appear:n=!1,unmount:r=!0,...s}=e,i=u.useRef(null),o=Xf(e),c=Yt(...o?[i,a]:a===null?[]:[a]);jo();let d=yo();if(l===void 0&&d!==null&&(l=(d&Tt.Open)===Tt.Open),l===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,f]=u.useState(l?"visible":"hidden"),p=Qf(()=>{l||f("hidden")}),[v,j]=u.useState(!0),y=u.useRef([l]);Ia(()=>{v!==!1&&y.current[y.current.length-1]!==l&&(y.current.push(l),j(!1))},[y,l]);let w=u.useMemo(()=>({show:l,appear:n,initial:v}),[l,n,v]);Ia(()=>{l?f("visible"):!So(p)&&i.current!==null&&f("hidden")},[l,p]);let x={unmount:r},g=Ye(()=>{var N;v&&j(!1),(N=e.beforeEnter)==null||N.call(e)}),h=Ye(()=>{var N;v&&j(!1),(N=e.beforeLeave)==null||N.call(e)}),b=kt();return I.createElement(No.Provider,{value:p},I.createElement(wo.Provider,{value:w},b({ourProps:{...x,as:u.Fragment,children:I.createElement(Zf,{ref:c,...x,...s,beforeEnter:g,beforeLeave:h})},theirProps:{},defaultTag:u.Fragment,features:Pf,visible:m==="visible",name:"Transition"})))}function gj(e,a){let l=u.useContext(wo)!==null,n=yo()!==null;return I.createElement(I.Fragment,null,!l&&n?I.createElement(Md,{ref:a,...e}):I.createElement(Zf,{ref:a,...e}))}let Md=tt(fj),Zf=tt(pj),ms=tt(gj),Pu=Object.assign(Md,{Child:ms,Root:Md});var vj=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vj||{}),xj=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(xj||{});let bj={0(e,a){return e.titleId===a.id?e:{...e,titleId:a.id}}},Zu=u.createContext(null);Zu.displayName="DialogContext";function zo(e){let a=u.useContext(Zu);if(a===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,zo),l}return a}function yj(e,a){return ul(a.type,bj,e,a)}let Zm=tt(function(e,a){let l=u.useId(),{id:n=`headlessui-dialog-${l}`,open:r,onClose:s,initialFocus:i,role:o="dialog",autoFocus:c=!0,__demoMode:d=!1,unmount:m=!1,...f}=e,p=u.useRef(!1);o=function(){return o==="dialog"||o==="alertdialog"?o:(p.current||(p.current=!0,console.warn(`Invalid role [${o}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let v=yo();r===void 0&&v!==null&&(r=(v&Tt.Open)===Tt.Open);let j=u.useRef(null),y=Yt(j,a),w=Xu(j.current),x=r?0:1,[g,h]=u.useReducer(yj,{titleId:null,descriptionId:null,panelRef:u.createRef()}),b=Ye(()=>s(!1)),N=Ye(F=>h({type:0,id:F})),C=jo()?x===0:!1,[R,k]=Py(),L={get current(){var F;return(F=g.panelRef.current)!=null?F:j.current}},T=Yf(),{resolveContainers:A}=ej({mainTreeNode:T,portals:R,defaultContainers:[L]}),B=v!==null?(v&Tt.Closing)===Tt.Closing:!1;uy(d||B?!1:C,{allowed:Ye(()=>{var F,G;return[(G=(F=j.current)==null?void 0:F.closest("[data-headlessui-portal]"))!=null?G:null]}),disallowed:Ye(()=>{var F;return[(F=T==null?void 0:T.closest("body > *:not(#headlessui-portal-root)"))!=null?F:null]})});let _=Rf.get(null);Ia(()=>{if(C)return _.actions.push(n),()=>_.actions.pop(n)},[_,n,C]);let Q=Ef(_,u.useCallback(F=>_.selectors.isTop(F,n),[_,n]));Ny(Q,A,F=>{F.preventDefault(),b()}),Jy(Q,w==null?void 0:w.defaultView,F=>{F.preventDefault(),F.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),b()}),Ty(d||B?!1:C,w,A),my(C,j,b);let[Y,S]=$b(),H=u.useMemo(()=>[{dialogState:x,close:b,setTitleId:N,unmount:m},g],[x,b,N,m,g]),E=ks({open:x===0}),q={ref:y,id:n,role:o,tabIndex:-1,"aria-modal":d?void 0:x===0?!0:void 0,"aria-labelledby":g.titleId,"aria-describedby":Y,unmount:m},$=!Iy(),J=rn.None;C&&!d&&(J|=rn.RestoreFocus,J|=rn.TabLock,c&&(J|=rn.AutoFocus),$&&(J|=rn.InitialFocus));let Z=kt();return I.createElement(Uy,null,I.createElement(Fm,{force:!0},I.createElement(Ky,null,I.createElement(Zu.Provider,{value:H},I.createElement(Uf,{target:j},I.createElement(Fm,{force:!1},I.createElement(S,{slot:E},I.createElement(k,null,I.createElement(sj,{initialFocus:i,initialFocusFallback:j,containers:A,features:J},I.createElement(Xb,{value:b},Z({ourProps:q,theirProps:f,slot:E,defaultTag:jj,features:wj,visible:x===0,name:"Dialog"})))))))))))}),jj="div",wj=Wi.RenderStrategy|Wi.Static;function Nj(e,a){let{transition:l=!1,open:n,...r}=e,s=yo(),i=e.hasOwnProperty("open")||s!==null,o=e.hasOwnProperty("onClose");if(!i&&!o)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!o)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!s&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(n!==void 0||l)&&!r.static?I.createElement(Pm,null,I.createElement(Pu,{show:n,transition:l,unmount:r.unmount},I.createElement(Zm,{ref:a,...r}))):I.createElement(Pm,null,I.createElement(Zm,{ref:a,open:n,...r}))}let Sj="div";function zj(e,a){let l=u.useId(),{id:n=`headlessui-dialog-panel-${l}`,transition:r=!1,...s}=e,[{dialogState:i,unmount:o},c]=zo("Dialog.Panel"),d=Yt(a,c.panelRef),m=ks({open:i===0}),f=Ye(w=>{w.stopPropagation()}),p={ref:d,id:n,onClick:f},v=r?ms:u.Fragment,j=r?{unmount:o}:{},y=kt();return I.createElement(v,{...j},y({ourProps:p,theirProps:s,slot:m,defaultTag:Sj,name:"Dialog.Panel"}))}let Cj="div";function kj(e,a){let{transition:l=!1,...n}=e,[{dialogState:r,unmount:s}]=zo("Dialog.Backdrop"),i=ks({open:r===0}),o={ref:a,"aria-hidden":!0},c=l?ms:u.Fragment,d=l?{unmount:s}:{},m=kt();return I.createElement(c,{...d},m({ourProps:o,theirProps:n,slot:i,defaultTag:Cj,name:"Dialog.Backdrop"}))}let Mj="h2";function Rj(e,a){let l=u.useId(),{id:n=`headlessui-dialog-title-${l}`,...r}=e,[{dialogState:s,setTitleId:i}]=zo("Dialog.Title"),o=Yt(a);u.useEffect(()=>(i(n),()=>i(null)),[n,i]);let c=ks({open:s===0}),d={ref:o,id:n};return kt()({ourProps:d,theirProps:r,slot:c,defaultTag:Mj,name:"Dialog.Title"})}let Tj=tt(Nj),Kf=tt(zj);tt(kj);let Aj=tt(Rj),Ej=Object.assign(Tj,{Panel:Kf,Title:Aj,Description:Wb});function Dj({children:e,show:a=!1,maxWidth:l="2xl",closeable:n=!0,onClose:r=()=>{},title:s=""}){const i=()=>{n&&r()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"};return t.jsx(Pu,{show:a,leave:"duration-200",children:t.jsxs(Ej,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:i,children:[t.jsx(ms,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),t.jsx(ms,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:t.jsxs(Kf,{className:`mb-6 transform overflow-hidden bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${o[l]}`,style:{borderRadius:"var(--radius-lg)"},children:[s&&t.jsx("div",{style:{padding:"var(--spacing-6)",borderBottom:"1px solid var(--color-neutral-200)"},children:t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:s})}),t.jsx("div",{style:{padding:"var(--spacing-6)"},children:e})]})})]})})}function Bj({show:e,onClose:a,title:l="情報",message:n,type:r="info",confirmText:s="確認",icon:i=null}){if(u.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),u.useEffect(()=>{const d=m=>{m.key==="Escape"&&e&&a()};if(e)return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,a]),!e)return null;const c=(()=>{switch(r){case"warning":return{iconBg:"bg-yellow-100",iconColor:"text-yellow-600",buttonColor:"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})};case"error":return{iconBg:"bg-red-100",iconColor:"text-red-600",buttonColor:"bg-red-600 hover:bg-red-700 focus:ring-red-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})};case"success":return{iconBg:"bg-green-100",iconColor:"text-green-600",buttonColor:"bg-green-600 hover:bg-green-700 focus:ring-green-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})};default:return{iconBg:"bg-blue-100",iconColor:"text-blue-600",buttonColor:"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}}})();return t.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center",onClick:a,children:t.jsx("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4",onClick:d=>d.stopPropagation(),children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-start mb-4",children:[t.jsx("div",{className:`flex-shrink-0 w-10 h-10 mx-auto ${c.iconBg} rounded-full flex items-center justify-center mr-4`,children:t.jsx("div",{className:c.iconColor,children:i||c.defaultIcon})}),t.jsx("div",{className:"flex-1",children:t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:l})})]}),t.jsx("div",{className:"mb-6",children:t.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap leading-relaxed",children:n})}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{onClick:a,className:`px-4 py-2 ${c.buttonColor} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out`,children:s})})]})})})}function Jf({show:e,onClose:a,onConfirm:l,title:n="確認",message:r,confirmText:s="実行",cancelText:i="キャンセル",danger:o=!1,processing:c=!1}){if(u.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),!e)return null;const d=o?"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 transition duration-150 ease-in-out":"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition duration-150 ease-in-out";return t.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center",children:t.jsx("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-start mb-4",children:[o&&t.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4",children:t.jsx("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),t.jsx("div",{className:"flex-1",children:t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:n})})]}),t.jsx("div",{className:"mb-6",children:t.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap",children:r})}),t.jsxs("div",{className:"flex justify-end gap-3",children:[t.jsx("button",{onClick:a,disabled:c,className:"px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 transition duration-150 ease-in-out",children:i}),t.jsx("button",{onClick:l,disabled:c,className:d,children:c?"処理中...":s})]})]})})})}const Km=()=>{const[e,a]=u.useState(!1),[l,n]=u.useState(!1),[r,s]=u.useState(!1),[i,o]=u.useState(2),[c,d]=u.useState(!1),m=u.useRef(null),[f,p]=u.useState(!1),[v,j]=u.useState({type:"success",title:"",message:""}),[y,w]=u.useState(45),[x,g]=u.useState(75),[h,b]=u.useState(!1),[N,C]=u.useState(!1),[R,k]=u.useState(!1),[L,T]=u.useState(!1),[A,B]=u.useState(!1),[_,Q]=u.useState(!1),[Y,S]=u.useState(!1),[H,E]=u.useState(!1),[q,$]=u.useState(!1),[J,Z]=u.useState(!1),[F,G]=u.useState(!1),[O,ae]=u.useState(!1),[fe,Ne]=u.useState(!1),[Ae,da]=u.useState(!1),[ua,ra]=u.useState(!1),z=({show:X=!1,type:ne="info",title:ge,message:Ge,confirmText:ea="確認",cancelText:Qe="キャンセル",showCancel:Fe=!0,onConfirm:Ra,onCancel:ke,onClose:ba})=>{const Me={success:{icon:"✓",color:"#10b981",bgColor:"#ecfdf5",borderColor:"#10b981"},warning:{icon:"⚠",color:"#f59e0b",bgColor:"#fffbeb",borderColor:"#f59e0b"},danger:{icon:"✕",color:"#ef4444",bgColor:"#fef2f2",borderColor:"#ef4444"},info:{icon:"ℹ",color:"#3b82f6",bgColor:"#eff6ff",borderColor:"#3b82f6"}},Ta=Me[ne]||Me.info,Va=Wa=>{Wa.target===Wa.currentTarget&&ba&&ba()},Wt=()=>{Ra&&Ra(),ba&&ba()},pl=()=>{ke&&ke(),ba&&ba()};return X?t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"var(--spacing-4)"},onClick:Va,children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius-lg)",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",maxWidth:"400px",width:"100%",maxHeight:"90vh",overflow:"auto"},children:[t.jsxs("div",{style:{padding:"var(--spacing-6)",borderBottom:"1px solid var(--color-neutral-200)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:Ta.bgColor,border:`2px solid ${Ta.borderColor}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",color:Ta.color,fontWeight:"bold"},children:Ta.icon}),t.jsx("div",{children:t.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:ge})})]}),t.jsx("div",{style:{padding:"var(--spacing-6)"},children:t.jsx("p",{style:{margin:0,fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:Ge})}),t.jsxs("div",{style:{padding:"var(--spacing-6)",paddingTop:0,display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end"},children:[Fe&&t.jsx(Ha,{onClick:pl,children:Qe}),t.jsx("button",{onClick:Wt,style:{padding:"var(--spacing-2) var(--spacing-4)",borderRadius:"var(--radius-md)",border:"none",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"all 0.2s",backgroundColor:Ta.color,color:"white"},onMouseEnter:Wa=>{Wa.target.style.opacity="0.9",Wa.target.style.transform="translateY(-1px)"},onMouseLeave:Wa=>{Wa.target.style.opacity="1",Wa.target.style.transform="translateY(0)"},children:ea})]})]})}):null},W=({show:X,type:ne="info",message:ge,action:Ge=null,actionText:ea=null,onAction:Qe=null,onClose:Fe,autoHide:Ra=!0,duration:ke=4e3,position:ba="bottom-left"})=>{if(u.useEffect(()=>{if(X&&Ra){const Wt=setTimeout(()=>{Fe()},ke);return()=>clearTimeout(Wt)}},[X,Ra,ke,Fe]),!X)return null;const Me={success:{backgroundColor:"#d4edda",borderColor:"#c3e6cb",color:"#155724",iconColor:"#28a745"},error:{backgroundColor:"#f8d7da",borderColor:"#f5c6cb",color:"#721c24",iconColor:"#dc3545"},warning:{backgroundColor:"#fff3cd",borderColor:"#ffeaa7",color:"#856404",iconColor:"#ffc107"},info:{backgroundColor:"#d1ecf1",borderColor:"#bee5eb",color:"#0c5460",iconColor:"#17a2b8"}},Ta={"top-left":{top:"20px",left:"20px"},"top-right":{top:"20px",right:"20px"},"bottom-left":{bottom:"20px",left:"20px"},"bottom-right":{bottom:"20px",right:"20px"},"top-center":{top:"20px",left:"50%",transform:"translateX(-50%)"},"bottom-center":{bottom:"20px",left:"50%",transform:"translateX(-50%)"}},Va=()=>{switch(ne){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ";default:return"ℹ"}};return t.jsxs("div",{style:{position:"fixed",...Ta[ba],zIndex:1e3,minWidth:"300px",maxWidth:"500px",padding:"12px 16px",backgroundColor:Me[ne].backgroundColor,border:`1px solid ${Me[ne].borderColor}`,borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out",fontSize:"14px",lineHeight:"1.4"},children:[t.jsx("style",{children:`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: ${ba.includes("bottom")?"translateY(100%)":"translateY(-100%)"} ${ba.includes("center")?"translateX(-50%)":""};
              }
              to {
                opacity: 1;
                transform: ${ba.includes("center")?"translateX(-50%)":"none"};
              }
            }
          `}),t.jsx("span",{style:{color:Me[ne].iconColor,fontSize:"16px",fontWeight:"bold",flexShrink:0},children:Va()}),t.jsx("span",{style:{color:Me[ne].color,flex:1},children:ge}),Ge&&ea&&t.jsx("button",{onClick:Qe,style:{background:"none",border:"none",color:Me[ne].iconColor,textDecoration:"underline",cursor:"pointer",fontSize:"14px",fontWeight:"500",padding:"0",marginLeft:"8px"},children:ea}),t.jsx("button",{onClick:Fe,style:{background:"none",border:"none",color:Me[ne].color,cursor:"pointer",fontSize:"16px",padding:"0",marginLeft:"8px",opacity:.7,flexShrink:0},children:"×"})]})};u.useEffect(()=>{const X=ne=>{m.current&&!m.current.contains(ne.target)&&d(!1)};if(c)return document.addEventListener("mousedown",X),()=>{document.removeEventListener("mousedown",X)}},[c]);const ce=({show:X,message:ne="読み込み中..."})=>X?t.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:9999},children:[t.jsx("div",{style:{width:"48px",height:"48px",border:"4px solid #f3f4f6",borderTop:"4px solid rgb(21, 52, 109)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),t.jsx("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-lg)",color:"var(--color-neutral-600)",fontWeight:"var(--font-weight-medium)"},children:ne})]}):null,se=({show:X,onClose:ne,message:ge="処理中..."})=>X?t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius-lg)",padding:"var(--spacing-8)",textAlign:"center",minWidth:"300px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #f3f4f6",borderTop:"4px solid rgb(21, 52, 109)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto var(--spacing-4) auto"}}),t.jsx("h3",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:ge}),t.jsx("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-4)"},children:"しばらくお待ちください..."}),ne&&t.jsx("button",{onClick:ne,style:{padding:"var(--spacing-2) var(--spacing-4)",backgroundColor:"var(--color-neutral-100)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"キャンセル"})]})}):null,D=[{label:"総ユーザー数",value:"1,234",icon:"users",color:"primary"},{label:"アクティブセッション",value:"89",icon:"user-check",color:"success"},{label:"本日の訪問数",value:"456",icon:"eye",color:"info"},{label:"エラー率",value:"0.23%",icon:"warning",color:"warning"}],K=X=>{const ne={primary:{bg:"#f0f4f8",text:"#2c3e50",icon:"#2c3e50"},success:{bg:"#e6f4ea",text:"#137333",icon:"#34a853"},info:{bg:"#e8f0fe",text:"#1967d2",icon:"#4285f4"},warning:{bg:"#fef7e0",text:"#7a6100",icon:"#fbbc04"}};return ne[X]||ne.primary},me=({type:X,message:ne,icon:ge,onClose:Ge})=>{const ea={success:{bg:"#dcfce7",border:"#bbf7d0",text:"#15803d",iconColor:"#16a34a"},info:{bg:"#dbeafe",border:"#bfdbfe",text:"#1e40af",iconColor:"#3b82f6"},warning:{bg:"#fef3c7",border:"#fde68a",text:"#92400e",iconColor:"#f59e0b"},danger:{bg:"#fecaca",border:"#fecaca",text:"#b91c1c",iconColor:"#ef4444"}},Qe=ea[X]||ea.info,Fe=ge||{success:"check",info:"info",warning:"warning",danger:"error"}[X];return t.jsxs("div",{style:{backgroundColor:Qe.bg,border:`1px solid ${Qe.border}`,borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",marginBottom:"var(--spacing-3)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx(M,{name:Fe,style:{color:Qe.iconColor,width:"20px",height:"20px",flexShrink:0}}),t.jsx("div",{style:{color:Qe.text,fontSize:"var(--font-size-sm)",flex:1},children:ne})]})},qe=({type:X,title:ne,message:ge,showToast:Ge,onClose:ea})=>{if(!Ge)return null;const Qe={success:{bg:"#059669",border:"#059669",text:"#ffffff",iconColor:"#ffffff"},info:{bg:"#3b82f6",border:"#3b82f6",text:"#ffffff",iconColor:"#ffffff"},warning:{bg:"#f59e0b",border:"#f59e0b",text:"#ffffff",iconColor:"#ffffff"},error:{bg:"#ef4444",border:"#ef4444",text:"#ffffff",iconColor:"#ffffff"}},Fe=Qe[X]||Qe.info,Ra={success:"check",info:"info",warning:"warning",error:"error"}[X];return t.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",backgroundColor:Fe.bg,border:`1px solid ${Fe.border}`,borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:Fe.text,minWidth:"300px",maxWidth:"400px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.15)",zIndex:1e3,display:"flex",alignItems:"flex-start",gap:"var(--spacing-3)",animation:"slideInRight 0.3s ease-out"},children:[t.jsx(M,{name:Ra,style:{color:Fe.iconColor,width:"20px",height:"20px",flexShrink:0}}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{fontWeight:"var(--font-weight-semibold)",marginBottom:"var(--spacing-1)"},children:ne}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)"},children:ge})]}),t.jsx("button",{onClick:ea,style:{background:"none",border:"none",color:Fe.iconColor,cursor:"pointer",padding:"var(--spacing-1)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(M,{name:"close",style:{width:"16px",height:"16px"}})})]})},La=({value:X,max:ne=100,showLabel:ge=!1,color:Ge="primary",size:ea="md"})=>{const Qe=Math.min(X/ne*100,100),Fe={primary:"#3b82f6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444"},Ra={sm:{height:"4px",fontSize:"var(--font-size-xs)"},md:{height:"8px",fontSize:"var(--font-size-sm)"},lg:{height:"12px",fontSize:"var(--font-size-base)"}},ke=Ra[ea]||Ra.md,ba=Fe[Ge]||Fe.primary;return t.jsxs("div",{style:{width:"100%"},children:[ge&&t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)",fontSize:ke.fontSize,color:"var(--color-neutral-700)"},children:[t.jsx("span",{children:"進捗"}),t.jsxs("span",{children:[Math.round(Qe),"%"]})]}),t.jsx("div",{style:{width:"100%",height:ke.height,backgroundColor:"var(--color-neutral-200)",borderRadius:"var(--radius-full)",overflow:"hidden"},children:t.jsx("div",{style:{width:`${Qe}%`,height:"100%",backgroundColor:ba,transition:"width 0.3s ease-in-out",borderRadius:"var(--radius-full)"}})})]})},Ma=({value:X,max:ne=100,size:ge="md",color:Ge="primary",showLabel:ea=!1})=>{const Qe=Math.min(X/ne*100,100),Fe={sm:{size:40,strokeWidth:3,fontSize:"var(--font-size-xs)"},md:{size:60,strokeWidth:4,fontSize:"var(--font-size-sm)"},lg:{size:80,strokeWidth:5,fontSize:"var(--font-size-base)"}},Ra={primary:"#3b82f6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444"},ke=Fe[ge]||Fe.md,ba=Ra[Ge]||Ra.primary,Me=(ke.size-ke.strokeWidth*2)/2,Ta=Me*2*Math.PI,Va=`${Qe/100*Ta} ${Ta}`;return t.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[t.jsxs("svg",{width:ke.size,height:ke.size,style:{transform:"rotate(-90deg)"},children:[t.jsx("circle",{cx:ke.size/2,cy:ke.size/2,r:Me,fill:"none",stroke:"var(--color-neutral-200)",strokeWidth:ke.strokeWidth}),t.jsx("circle",{cx:ke.size/2,cy:ke.size/2,r:Me,fill:"none",stroke:ba,strokeWidth:ke.strokeWidth,strokeDasharray:Va,strokeLinecap:"round",style:{transition:"stroke-dasharray 0.3s ease-in-out"}})]}),ea&&t.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:ke.fontSize,fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-700)"},children:[Math.round(Qe),"%"]})]})},ie=({lines:X=3,height:ne=16,className:ge=""})=>t.jsx("div",{className:ge,children:Array.from({length:X}).map((Ge,ea)=>t.jsx("div",{style:{height:`${ne}px`,backgroundColor:"#f3f4f6",borderRadius:"var(--radius-sm)",marginBottom:ea<X-1?"var(--spacing-2)":0,animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",width:ea===X-1?"75%":"100%"}},ea))}),Ya=({children:X,header:ne,footer:ge,className:Ge="",style:ea={}})=>t.jsxs("div",{className:`card ${Ge}`,style:{backgroundColor:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",...ea},children:[ne&&t.jsx("div",{style:{padding:"var(--spacing-4)",borderBottom:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-50)"},children:ne}),t.jsx("div",{style:{padding:"var(--spacing-4)"},children:X}),ge&&t.jsx("div",{style:{padding:"var(--spacing-4)",borderTop:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-50)"},children:ge})]});return t.jsxs("div",{className:"messages-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"メッセージ / 通知"}),t.jsx("p",{className:"page-description",children:"ユーザーへの情報伝達、メッセージ表示、フィードバック、統計表示のためのコンポーネント群。 モーダル、ローダー、状態表示、通知、トースト、ダッシュボード要素を提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"メッセージ/通知"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"CardStyleMessage"}),t.jsx("p",{className:"component-description",children:"メッセージやお知らせを美しく表示するカード型コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"container-demo-grid",children:[t.jsxs(Ya,{children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"基本カード"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)"},children:"シンプルなカードコンポーネントです。テキストやその他のコンテンツを整理して表示できます。"}),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",backgroundColor:"rgb(21, 52, 109)",color:"white",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"詳細を見る"})})]}),t.jsx(Ya,{header:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"user",style:{width:"20px",height:"20px",color:"rgb(21, 52, 109)"}}),t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"ユーザー情報"})]}),children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"名前: 田中太郎"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"部署: 営業部"}),t.jsx("p",{style:{margin:"0"},children:"最終ログイン: 2024-01-15"})]})}),t.jsx(Ya,{header:t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"統計情報"}),footer:t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"最終更新: 2024-01-15 14:30"}),children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"rgb(21, 52, 109)",marginBottom:"var(--spacing-2)"},children:"1,234"}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"総ユーザー数"})]})})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本メッセージカード
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
</CardStyleMessage>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ImageStyleMessage"}),t.jsx("p",{className:"component-description",children:"画像を含むメッセージやギャラリー表示を行うコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"image-message-demo-grid",children:[t.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"300px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(M,{name:"user",style:{width:"20px",height:"20px",color:"var(--color-neutral-600)"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:"田中太郎"}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"2分前"})]})]}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)"},children:"新しいプロダクトのデザインが完成しました！"}),t.jsx("div",{style:{width:"100%",height:"150px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--color-neutral-200)",cursor:"pointer",transition:"all 0.2s"},children:t.jsx(M,{name:"image",style:{width:"32px",height:"32px",color:"var(--color-neutral-400)"}})})]}),t.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"320px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-primary-100)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(M,{name:"camera",style:{width:"20px",height:"20px",color:"rgb(21, 52, 109)"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:"営業部"}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"1時間前"})]})]}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)"},children:"会議の資料写真です（4枚）"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-2)"},children:[1,2,3,4].map(X=>t.jsxs("div",{style:{width:"100%",height:"80px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--color-neutral-200)",cursor:"pointer",transition:"all 0.2s",position:"relative"},children:[t.jsx(M,{name:"image",style:{width:"20px",height:"20px",color:"var(--color-neutral-400)"}}),X===4&&t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)"},children:"+2"})]},X))})]}),t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"280px"},children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--spacing-3) auto",border:"3px solid var(--color-primary-100)"},children:t.jsx(M,{name:"user",style:{width:"40px",height:"40px",color:"var(--color-neutral-500)"}})}),t.jsx("h4",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"佐藤花子"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"プロダクトデザイナー"}),t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-4)",backgroundColor:"rgb(21, 52, 109)",color:"white",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",transition:"all 0.2s"},children:"プロフィールを見る"})]})})]})}),t.jsx("div",{className:"code-snippet",children:`// 単一画像メッセージ
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"AnalyticStyleMessage"}),t.jsx("p",{className:"component-description",children:"数値やデータを分析レポート風に表示するメッセージコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"dashboard-grid",children:D.map((X,ne)=>{const ge=K(X.color);return t.jsxs("div",{className:"stat-card",style:{backgroundColor:ge.bg},children:[t.jsx("div",{className:"stat-icon",style:{backgroundColor:ge.bg,color:ge.icon},children:t.jsx(M,{name:X.icon,style:{width:"24px",height:"24px"}})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-label",style:{color:ge.text},children:X.label}),t.jsx("div",{className:"stat-value",style:{color:ge.text},children:X.value})]})]},ne)})})}),t.jsx("div",{className:"code-snippet",children:`<AnalyticStyleMessage
  stats={[
    { label: '新規メッセージ', value: '1,234', icon: 'message' },
    { label: '送信済み', value: '89', icon: 'check' },
    { label: 'エラー率', value: '0.23%', icon: 'warning' }
  ]}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FlashMessage"}),t.jsx("p",{className:"component-description",children:"フラッシュメッセージを表示するコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsx(me,{type:"success",message:"データの保存が正常に完了しました。"}),t.jsx(me,{type:"info",message:"システムメンテナンスが2024年1月15日に予定されています。"}),t.jsx(me,{type:"warning",message:"ディスク容量が90%を超えています。データのクリーンアップをお勧めします。"}),t.jsx(me,{type:"danger",message:"接続エラーが発生しました。ネットワーク設定を確認してください。"})]}),t.jsx("div",{className:"code-snippet",children:`<FlashMessage type="success" message="正常に完了しました" />
<FlashMessage type="info" message="お知らせメッセージ" />
<FlashMessage type="warning" message="注意が必要です" />
<FlashMessage type="danger" message="エラーが発生しました" />`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Notification"}),t.jsx("p",{className:"component-description",children:"ベルアイコンをクリックして通知ドロップダウンを表示するコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-4)"},children:[t.jsx(Ha,{onClick:()=>o(2),children:"未読件数をリセット (2件)"}),t.jsx(Ha,{onClick:()=>o(0),style:{marginLeft:"var(--spacing-2)"},children:"全て既読にする"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--spacing-6)",background:"var(--color-neutral-50)",border:"1px dashed var(--color-neutral-300)",borderRadius:"var(--radius-md)"},children:t.jsxs("div",{ref:m,style:{position:"relative"},children:[t.jsxs("button",{className:"notification-button",onClick:()=>d(!c),style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",border:"none",background:"var(--color-neutral-white)",borderRadius:"var(--radius-full)",cursor:"pointer",transition:"all 0.2s",color:"var(--color-warning-600)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},children:[t.jsx(M,{name:"bell",style:{width:"20px",height:"20px"}}),i>0&&t.jsx("span",{className:"notification-badge",children:i})]}),c&&t.jsxs("div",{className:"notification-dropdown",children:[t.jsxs("div",{className:"notification-dropdown-header",children:[t.jsx("h3",{className:"notification-dropdown-title",children:"通知"}),t.jsx("button",{className:"notification-close-btn",onClick:()=>d(!1),children:t.jsx(M,{name:"close",className:"w-4 h-4"})})]}),t.jsxs("div",{className:"notification-dropdown-content",children:[t.jsxs("div",{className:"notification-item",children:[t.jsx(M,{name:"info",className:"w-5 h-5 notification-icon"}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:"新しいメッセージ"}),t.jsx("span",{className:"notification-time",children:"2分前"})]}),t.jsx("p",{className:"notification-item-message",children:"管理者からの重要なお知らせがあります。"}),t.jsxs("div",{className:"notification-item-actions",children:[t.jsxs("button",{className:"notification-action-btn",onClick:()=>o(Math.max(0,i-1)),children:[t.jsx(M,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",children:[t.jsx(M,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]}),t.jsxs("div",{className:"notification-item unread",children:[t.jsx(M,{name:"warning",className:"w-5 h-5 notification-icon"}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:"システムメンテナンス"}),t.jsx("span",{className:"notification-time",children:"1時間前"})]}),t.jsx("p",{className:"notification-item-message",children:"本日22:00よりシステムメンテナンスを実施します。"}),t.jsxs("div",{className:"notification-item-actions",children:[t.jsxs("button",{className:"notification-action-btn",onClick:()=>o(Math.max(0,i-1)),children:[t.jsx(M,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",children:[t.jsx(M,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]})]}),t.jsx("div",{className:"notification-dropdown-footer",children:t.jsx("a",{href:"#",className:"notification-footer-link",children:"すべての通知を表示"})})]})]})}),t.jsx("p",{style:{textAlign:"center",color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)",marginTop:"var(--spacing-4)"},children:"ベルアイコンをクリックして通知を表示 - 実運用ではナビゲーション等に配置"})]}),t.jsx("div",{className:"code-snippet",children:`<Notification
  notifications={notifications}
  unreadCount={unreadCount}
  onMarkAsRead={handleMarkAsRead}
  onMarkAllAsRead={handleMarkAllAsRead}
  onDismiss={handleDismiss}
  onClose={handleClose}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Toast"}),t.jsx("p",{className:"component-description",children:"画面右上に表示される一時的な通知メッセージ"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"button-group",children:[t.jsx(Tl,{onClick:()=>{j({type:"success",title:"成功",message:"データの保存が完了しました"}),p(!0),setTimeout(()=>p(!1),3e3)},children:"成功トースト表示"}),t.jsx(Ha,{onClick:()=>{j({type:"info",title:"情報",message:"新しいメッセージが届きました"}),p(!0),setTimeout(()=>p(!1),3e3)},children:"情報トースト表示"}),t.jsx(Yi,{onClick:()=>{j({type:"error",title:"エラー",message:"接続に失敗しました"}),p(!0),setTimeout(()=>p(!1),3e3)},children:"エラートースト表示"})]}),t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginTop:"var(--spacing-3)"},children:"※ トーストは3秒後に自動的に閉じます"})]}),t.jsx("div",{className:"code-snippet",children:`<Toast
  type="success"
  title="成功"
  message="データの保存が完了しました"
  showToast={showToast}
  onClose={() => setShowToast(false)}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"モーダル"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Modal"}),t.jsx("p",{className:"component-description",children:"ユーザーへの情報表示、メッセージ通知、確認ダイアログとして使用するモーダルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"button-group",children:[t.jsx(Tl,{onClick:()=>a(!0),children:"基本モーダルを開く"}),t.jsx(Ha,{onClick:()=>n(!0),children:"情報モーダル"}),t.jsx(Yi,{onClick:()=>s(!0),children:"確認モーダル"})]})}),t.jsx("div",{className:"code-snippet",children:`<Modal show={show} onClose={onClose}>
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ローダー"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FullScreenLoader"}),t.jsx("p",{className:"component-description",children:"画面全体を覆うフルスクリーンローダー。API通信や重い処理中に使用"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Ha,{onClick:()=>{b(!0),setTimeout(()=>b(!1),3e3)},children:"フルスクリーンローダーを表示（3秒）"})}),t.jsx("div",{className:"code-snippet",children:`<FullScreenLoader
  show={showLoader}
  message="データを読み込み中..."
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ModalLoader"}),t.jsx("p",{className:"component-description",children:"モーダル形式のローダー。キャンセル可能な処理に適用"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Tl,{onClick:()=>{C(!0),setTimeout(()=>C(!1),3e3)},children:"モーダルローダーを表示（3秒）"})}),t.jsx("div",{className:"code-snippet",children:`<ModalLoader
  show={showLoader}
  message="ファイルをアップロード中..."
  onClose={handleCancel}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SkeletonLoader"}),t.jsx("p",{className:"component-description",children:"コンテンツ読み込み中のプレースホルダー表示"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"3行テキスト"}),t.jsx(ie,{lines:3,height:16})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"大きなコンテンツ"}),t.jsx(ie,{lines:5,height:20})]})]})}),t.jsx("div",{className:"code-snippet",children:`<SkeletonLoader lines={3} height={16} />
<SkeletonLoader lines={5} height={20} />`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"状態"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ProgressBar"}),t.jsx("p",{className:"component-description",children:"線形・円形のプログレスバーで作業の進捗状態を表示"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"progress-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"線形プログレスバー"}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(La,{value:y,showLabel:!0})}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(La,{value:y,color:"success",size:"sm"})}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(La,{value:y,color:"warning",size:"lg",showLabel:!0})}),t.jsxs("div",{className:"button-group",children:[t.jsx(Ha,{onClick:()=>w(Math.max(0,y-10)),children:"-10%"}),t.jsx(Ha,{onClick:()=>w(Math.min(100,y+10)),children:"+10%"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"円形プログレス"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx(Ma,{value:x,size:"sm",showLabel:!0}),t.jsx(Ma,{value:x,size:"md",color:"success",showLabel:!0}),t.jsx(Ma,{value:x,size:"lg",color:"warning",showLabel:!0})]}),t.jsxs("div",{className:"button-group",children:[t.jsx(Ha,{onClick:()=>g(Math.max(0,x-15)),children:"-15%"}),t.jsx(Ha,{onClick:()=>g(Math.min(100,x+15)),children:"+15%"})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 線形プログレスバー
<ProgressBar value={75} showLabel={true} color="primary" size="md" />

// 円形プログレス
<CircularProgress value={75} size="md" color="success" showLabel={true} />`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"モーダルは重要なメッセージや情報の表示、ユーザーへの確認に使用してください"}),t.jsx("li",{children:"InfoModalは一方向の情報伝達に、ConfirmModalは操作確認に適しています"}),t.jsx("li",{children:"モーダルは一度に1つだけ表示し、ESCキーや背景クリックで閉じられるようにしてください"}),t.jsx("li",{children:"FullScreenLoaderは重要な処理中に画面全体をブロックする場合に使用してください"}),t.jsx("li",{children:"ModalLoaderはキャンセル可能な処理（ファイルアップロード等）に適しています"}),t.jsx("li",{children:"SkeletonLoaderはコンテンツ読み込み中のプレースホルダーとして使用してください"}),t.jsx("li",{children:"トースト通知は成功・エラー・情報の一時的な通知に適しています"}),t.jsx("li",{children:"状態表示（プログレスバー）は長時間の処理進捗や完了度の可視化に使用してください"}),t.jsx("li",{children:"線形プログレスは全体進捗、円形プログレスは部分進捗や状態値に適しています"}),t.jsx("li",{children:"CardStyleMessageはメッセージやお知らせの表示に適したカード型レイアウトです"}),t.jsx("li",{children:"ImageStyleMessageは画像を含むメッセージ表示に最適化されています"}),t.jsx("li",{children:"単一画像、複数画像ギャラリー、プロフィール画像など様々な画像表示パターンに対応"}),t.jsx("li",{children:"画像のクリックで拡大表示やライトボックス機能を実装可能です"}),t.jsx("li",{children:"ダッシュボードカードは4個以下を1行に配置することを推奨します"}),t.jsx("li",{children:"フラッシュメッセージは重要度に応じて適切な色とアイコンを使用してください"}),t.jsx("li",{children:"ドロップダウンメニューは画面端での表示を考慮してアラインメントを調整してください"}),t.jsx("li",{children:"Badgeは簡潔で分かりやすいテキストを使用してください"}),t.jsx("li",{children:"ステータス表示には適切な色バリエーションを選択してください（成功=緑、警告=黄、エラー=赤）"}),t.jsx("li",{children:"削除可能なTagは誤操作を防ぐため、確認ダイアログの使用を検討してください"}),t.jsx("li",{children:"通知数表示のBadgeは数値が大きい場合は「99+」等の省略表示を検討してください"}),t.jsx("li",{children:"アクセシビリティのため、フォーカス管理とキーボードナビゲーションに注意してください"})]})})]}),t.jsx(Dj,{show:e,onClose:()=>a(!1),children:t.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[t.jsx("h3",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)"},children:"基本モーダル"}),t.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--color-neutral-600)"},children:"これは基本的なメッセージ表示用モーダルです。重要な情報やお知らせをユーザーに伝える際に使用します。"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end"},children:[t.jsx(Ha,{onClick:()=>a(!1),children:"キャンセル"}),t.jsx(Tl,{onClick:()=>a(!1),children:"確認"})]})]})}),t.jsx(Bj,{show:l,onClose:()=>n(!1),title:"お知らせ",message:"これは情報表示専用のモーダルです。システムからの重要な通知やメッセージを表示します。"}),t.jsx(Jf,{show:r,onClose:()=>s(!1),title:"操作の確認",message:"この操作を実行してもよろしいですか？実行後は元に戻すことができません。",onConfirm:()=>{alert("操作が確認されました"),s(!1)}}),t.jsx(qe,{type:v.type,title:v.title,message:v.message,showToast:f,onClose:()=>p(!1)}),t.jsx(ce,{show:h,message:"データを読み込み中..."}),t.jsx(se,{show:N,message:"ファイルをアップロード中...",onClose:()=>C(!1)}),t.jsx(z,{show:q,type:"info",title:"情報",message:"これは情報メッセージです。操作が正常に完了しました。",onClose:()=>$(!1)}),t.jsx(z,{show:A,type:"warning",title:"警告",message:"この操作を続行しますか？データが変更される可能性があります。",confirmText:"続行",cancelText:"キャンセル",onConfirm:()=>{alert("操作を続行しました"),B(!1)},onCancel:()=>B(!1)}),t.jsx(z,{show:Y,type:"error",title:"エラー",message:"操作中にエラーが発生しました。ネットワーク接続を確認してください。",confirmText:"再試行",cancelText:"閉じる",onConfirm:()=>{alert("再試行します"),S(!1)},onCancel:()=>S(!1)}),t.jsx(z,{show:L,type:"success",title:"成功",message:"データの保存が完了しました。変更内容が正常に反映されています。",onClose:()=>T(!1)}),t.jsx(z,{show:H,type:"error",title:"削除確認",message:"このアイテムを削除しますか？この操作は取り消せません。",confirmText:"削除",cancelText:"キャンセル",onConfirm:()=>{alert("アイテムが削除されました"),E(!1)},onCancel:()=>E(!1)}),t.jsx(W,{show:F,type:"success",message:"操作が正常に完了しました！",onClose:()=>G(!1),position:"bottom-right"}),t.jsx(W,{show:O,type:"error",message:"エラーが発生しました。もう一度お試しください。",onClose:()=>ae(!1),position:"top-right"}),t.jsx(W,{show:fe,type:"warning",message:"この操作にはご注意ください。",onClose:()=>Ne(!1),position:"top-center"}),t.jsx(W,{show:Ae,type:"info",message:"新しい情報があります。",onClose:()=>da(!1),position:"bottom-left"}),t.jsx(W,{show:ua,type:"info",message:"新しいメッセージが届きました",action:!0,actionText:"表示",onAction:()=>{alert("メッセージを表示します"),ra(!1)},onClose:()=>ra(!1),position:"bottom-center",duration:6e3})]})};function If({pagination:e,onPageChange:a=null,onPerPageChange:l=null,config:n}){if(!e)return null;const r=()=>{if(!a)return null;const s=e.current_page,i=e.last_page,o=[];if(i<=7)for(let d=1;d<=i;d++)o.push(d);else if(s<=3){for(let d=1;d<=5;d++)o.push(d);o.push("..."),o.push(i)}else if(s>=i-2){o.push(1),o.push("...");for(let d=i-4;d<=i;d++)o.push(d)}else{o.push(1),o.push("...");for(let d=s-1;d<=s+1;d++)o.push(d);o.push("..."),o.push(i)}return o.map((d,m)=>{if(d==="...")return t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${m}`);const f=d;return t.jsx("button",{onClick:()=>a(f),className:`pagination-page-btn ${f===s?"active":""}`,"aria-current":f===s?"page":void 0,children:f},f)})};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
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
            `}),t.jsxs("div",{className:"pagination-panel",children:[l&&(n==null?void 0:n.perPageOptions)&&t.jsxs("div",{className:"per-page-selector",children:[t.jsx("label",{htmlFor:"per-page-select",className:"per-page-label",children:"表示件数:"}),t.jsx("select",{id:"per-page-select",value:e.per_page,onChange:s=>l(parseInt(s.target.value)),className:"per-page-select",children:n.perPageOptions.map(s=>t.jsxs("option",{value:s,children:[s,"件"]},s))})]}),(n==null?void 0:n.showInfo)!==!1&&e.total>0&&t.jsxs("div",{className:"pagination-info",children:[t.jsx("span",{className:"font-medium",children:e.from}),t.jsx("span",{children:" - "}),t.jsx("span",{className:"font-medium",children:e.to}),t.jsx("span",{children:" / "}),t.jsx("span",{className:"font-medium",children:e.total}),t.jsx("span",{children:"件"})]}),a&&e.last_page>1&&t.jsxs("div",{className:"pagination-controls",children:[t.jsxs("button",{onClick:()=>a(e.current_page-1),disabled:!e.prev_page_url,className:"pagination-nav-btn","aria-label":"前のページ",children:[t.jsx(M,{name:"chevron-left",className:"h-4 w-4"}),t.jsx("span",{style:{marginLeft:"var(--spacing-1)"},children:"前へ"})]}),t.jsx("div",{className:"pagination-pages",children:r()}),t.jsxs("button",{onClick:()=>a(e.current_page+1),disabled:!e.next_page_url,className:"pagination-nav-btn","aria-label":"次のページ",children:[t.jsx("span",{style:{marginRight:"var(--spacing-1)"},children:"次へ"}),t.jsx(M,{name:"chevron-right",className:"h-4 w-4"})]})]})]})]})}const Jm=()=>{const[e,a]=u.useState(1),[l,n]=u.useState(5),[r,s]=u.useState({key:null,direction:null}),[i,o]=u.useState([]),c=[{id:1,name:"田中太郎",email:"tanaka@example.com",role:"管理者",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:2,name:"鈴木花子",email:"suzuki@example.com",role:"ユーザー",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:3,name:"佐藤次郎",email:"sato@example.com",role:"ユーザー",status:"非アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:4,name:"高橋三郎",email:"takahashi@example.com",role:"エディター",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:5,name:"伊藤四郎",email:"ito@example.com",role:"ユーザー",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:6,name:"渡辺五郎",email:"watanabe@example.com",role:"管理者",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:7,name:"山本六子",email:"yamamoto@example.com",role:"ユーザー",status:"非アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:8,name:"中村七美",email:"nakamura@example.com",role:"エディター",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"}],d=({status:k})=>{const L=k==="アクティブ";return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-1) var(--spacing-2)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",backgroundColor:L?"var(--color-success-100)":"var(--color-neutral-100)",color:L?"var(--color-success-800)":"var(--color-neutral-600)"},children:k})},m=({children:k,className:L="",style:T={}})=>t.jsx("div",{className:L,style:{backgroundColor:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden",...T},children:k}),f=({children:k,onClick:L,selected:T=!1,className:A="",style:B={}})=>t.jsx("div",{className:A,onClick:L,style:{padding:"var(--spacing-4)",borderBottom:"1px solid var(--color-neutral-100)",backgroundColor:T?"var(--color-primary-50)":"transparent",cursor:L?"pointer":"default",transition:"background-color 0.2s ease",":hover":L?{backgroundColor:T?"var(--color-primary-100)":"var(--color-neutral-50)"}:{},...B},onMouseEnter:_=>{L&&(_.target.style.backgroundColor=T?"var(--color-primary-100)":"var(--color-neutral-50)")},onMouseLeave:_=>{L&&(_.target.style.backgroundColor=T?"var(--color-primary-50)":"transparent")},children:k}),p=[{key:"id",label:"ID",width:"60px"},{key:"name",label:"名前",width:"120px"},{key:"email",label:"メールアドレス",width:"200px"},{key:"role",label:"ロール",width:"120px"},{key:"status",label:"ステータス",width:"120px"}],v=k=>{let L="asc";r.key===k&&r.direction==="asc"?L="desc":r.key===k&&r.direction==="desc"&&(L=null),s({key:L?k:null,direction:L})},j=I.useMemo(()=>!r.key||!r.direction?[...c]:[...c].sort((k,L)=>{const T=k[r.key],A=L[r.key];return T==null?1:A==null?-1:T<A?r.direction==="asc"?-1:1:T>A?r.direction==="asc"?1:-1:0}),[r]),y=Math.ceil(j.length/l),w=(e-1)*l,x=j.slice(w,w+l),g=[{month:"1月",users:120,sales:1800,revenue:2400},{month:"2月",users:190,sales:2100,revenue:2800},{month:"3月",users:300,sales:2800,revenue:3200},{month:"4月",users:280,sales:2600,revenue:3600},{month:"5月",users:320,sales:3200,revenue:4200},{month:"6月",users:380,sales:3800,revenue:4800}],h=({data:k,width:L=600,height:T=300})=>{const A={top:20,right:30,bottom:60,left:70},B=L-A.left-A.right,_=T-A.top-A.bottom,Q=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],Y=k.flatMap(Z=>[Z.users,Z.sales,Z.revenue]),S=Math.max(...Y),H=Math.min(...Y),E=S-H,q=E*.1,$=Z=>_-(Z-H+q)/(E+q*2)*_,J=Z=>Z/(k.length-1)*B;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の推移"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:L,height:T,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${A.left}, ${A.top})`,children:[[0,1,2,3,4].map(Z=>t.jsx("line",{x1:0,x2:B,y1:_*Z/4,y2:_*Z/4,stroke:"var(--color-neutral-200)",strokeWidth:1},Z)),[0,1,2,3,4].map(Z=>{const F=Math.round(S+q-(E+q*2)*Z/4);return t.jsx("text",{x:-10,y:_*Z/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:F},Z)}),Q.map(Z=>{const F=k.map((G,O)=>`${O===0?"M":"L"} ${J(O)} ${$(G[Z.key])}`).join(" ");return t.jsxs("g",{children:[t.jsx("path",{d:F,fill:"none",stroke:Z.color,strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),k.map((G,O)=>t.jsx("circle",{cx:J(O),cy:$(G[Z.key]),r:4,fill:Z.color,stroke:"white",strokeWidth:2},O))]},Z.key)}),k.map((Z,F)=>t.jsx("text",{x:J(F),y:_+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:Z.month},F)),t.jsx("text",{x:B/2,y:_+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"}),t.jsx("text",{x:-68,y:-25,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:Q.map(Z=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"3px",backgroundColor:Z.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:Z.label})]},Z.key))})]})},b=({data:k,width:L=600,height:T=300})=>{const A={top:20,right:30,bottom:60,left:70},B=L-A.left-A.right,_=T-A.top-A.bottom,Q=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],Y=k.flatMap($=>[$.users,$.sales,$.revenue]),S=Math.max(...Y),H=B/k.length*.8,E=H/Q.length,q=B/k.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の比較"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:L,height:T,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${A.left}, ${A.top})`,children:[[0,1,2,3,4].map($=>t.jsx("line",{x1:0,x2:B,y1:_*$/4,y2:_*$/4,stroke:"var(--color-neutral-200)",strokeWidth:1},$)),[0,1,2,3,4].map($=>{const J=Math.round(S*(4-$)/4);return t.jsx("text",{x:-10,y:_*$/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:J},$)}),k.map(($,J)=>{const Z=J*(B/k.length)+q/2;return t.jsxs("g",{children:[Q.map((F,G)=>{const O=$[F.key]/S*_,ae=Z+G*E;return t.jsx("rect",{x:ae,y:_-O,width:E,height:O,fill:F.color,rx:2},F.key)}),t.jsx("text",{x:Z+H/2,y:_+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:$.month})]},J)}),t.jsx("text",{x:B/2,y:_+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"}),t.jsx("text",{x:-68,y:-25,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:Q.map($=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:$.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:$.label})]},$.key))})]})},N=({data:k,width:L=600,height:T=300})=>{const A={top:20,right:80,bottom:60,left:120},B=L-A.left-A.right,_=T-A.top-A.bottom,Q=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],Y=k.flatMap($=>[$.users,$.sales,$.revenue]),S=Math.max(...Y),H=_/k.length*.8,E=H/Q.length,q=_/k.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の比較（横棒）"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:L,height:T,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${A.left}, ${A.top})`,children:[[0,1,2,3,4].map($=>t.jsx("line",{x1:B*$/4,x2:B*$/4,y1:0,y2:_,stroke:"var(--color-neutral-200)",strokeWidth:1},$)),[0,1,2,3,4].map($=>{const J=Math.round(S*$/4);return t.jsx("text",{x:B*$/4,y:_+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:J},$)}),k.map(($,J)=>{const Z=J*(_/k.length)+q/2;return t.jsxs("g",{children:[Q.map((F,G)=>{const O=$[F.key]/S*B,ae=Z+G*E;return t.jsx("rect",{x:0,y:ae,width:O,height:E,fill:F.color,rx:2},F.key)}),t.jsx("text",{x:-10,y:Z+H/2+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:$.month})]},J)}),t.jsx("text",{x:B/2,y:_+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"}),t.jsx("text",{x:-35,y:-5,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:Q.map($=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:$.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:$.label})]},$.key))})]})},C=({data:k,width:L=350,height:T=350})=>{const A=Math.min(L,T)/2-30,B=A*.45,_=L/2,Q=T/2,Y=k.reduce((E,q)=>E+q.value,0);let S=-Math.PI/2;const H=["rgb(21, 52, 109)","#6366f1","#8b5cf6","#ec4899","#f59e0b"];return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",textAlign:"center"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"部門別売上比率"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsxs("svg",{width:L,height:T,children:[k.map((E,q)=>{const $=E.value/Y*2*Math.PI,J=S,Z=S+$,F=_+Math.cos(J)*A,G=Q+Math.sin(J)*A,O=_+Math.cos(Z)*A,ae=Q+Math.sin(Z)*A,fe=_+Math.cos(Z)*B,Ne=Q+Math.sin(Z)*B,Ae=_+Math.cos(J)*B,da=Q+Math.sin(J)*B,ua=$>Math.PI?1:0,ra=[`M ${F} ${G}`,`A ${A} ${A} 0 ${ua} 1 ${O} ${ae}`,`L ${fe} ${Ne}`,`A ${B} ${B} 0 ${ua} 0 ${Ae} ${da}`,"Z"].join(" "),z=(J+Z)/2,W=(A+B)/2,ce=_+Math.cos(z)*W,se=Q+Math.sin(z)*W,D=(E.value/Y*100).toFixed(1);return S=Z,t.jsxs("g",{children:[t.jsx("path",{d:ra,fill:H[q%H.length],stroke:"white",strokeWidth:2}),t.jsx("text",{x:ce,y:se-10,textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"white",children:E.label.length>5?E.label.substring(0,4)+"...":E.label}),t.jsxs("text",{x:ce,y:se+4,textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"white",children:[D,"%"]}),t.jsxs("text",{x:ce,y:se+18,textAnchor:"middle",fontSize:"9",fill:"white",children:[E.value.toLocaleString(),"万円"]})]},q)}),t.jsx("text",{x:_,y:Q,textAnchor:"middle",fontSize:"20",fontWeight:"bold",fill:"var(--color-neutral-900)",children:"総売上"}),t.jsxs("text",{x:_,y:Q+25,textAnchor:"middle",fontSize:"16",fill:"var(--color-neutral-600)",children:[Y.toLocaleString(),"万円"]})]})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)"},children:k.map((E,q)=>{const $=(E.value/Y*100).toFixed(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-2)",background:"var(--color-neutral-50)",borderRadius:"var(--radius-md)",minWidth:"80px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:H[q%H.length],borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:E.label})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsxs("div",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:[E.value.toLocaleString(),"万円"]}),t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:["(",$,"%)"]})]})]},q)})})]})},R=[{label:"営業部",value:4200},{label:"開発部",value:3100},{label:"管理部",value:2800},{label:"マーケティング部",value:1900}];return t.jsxs("div",{className:"tables-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"テーブル・リスト・グラフコンポーネント"}),t.jsx("p",{className:"page-description",children:"データ表示とページネーション機能を提供するテーブルコンポーネント群、一覧表示に特化したリストコンポーネント、そしてデータ可視化のためのグラフコンポーネント。 基本的なデータテーブルから高機能な統合テーブル、ページネーション、基本的なリスト表示機能、そして折れ線グラフ・棒グラフ・ドーナツグラフまで包括的にカバーします。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"基本テーブル機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DataTable"}),t.jsx("p",{className:"component-description",children:"データテーブルの基本的な表示例"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-neutral-50)"},children:p.map(k=>t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",fontWeight:"var(--font-weight-medium)",borderBottom:"1px solid var(--color-neutral-200)",cursor:"pointer",userSelect:"none",position:"relative"},onClick:()=>v(k.key),children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[k.label,t.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",fontSize:"10px",lineHeight:"1",marginLeft:"4px"},children:[t.jsx("span",{style:{color:r.key===k.key&&r.direction==="asc"?"var(--color-primary-600)":"var(--color-neutral-400)",transition:"color 0.2s"},children:"▲"}),t.jsx("span",{style:{color:r.key===k.key&&r.direction==="desc"?"var(--color-primary-600)":"var(--color-neutral-400)",transition:"color 0.2s",marginTop:"-2px"},children:"▼"})]})]})},k.key))})}),t.jsx("tbody",{children:x.map((k,L)=>t.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)",backgroundColor:L%2===0?"var(--color-neutral-white)":"var(--color-neutral-25)"},children:p.map(T=>t.jsx("td",{style:{padding:"var(--spacing-3)",borderBottom:"1px solid var(--color-neutral-200)"},children:T.key==="status"?t.jsx(d,{status:k.status}):k[T.key]},T.key))},k.id))})]})})}),t.jsx("div",{className:"code-snippet",children:`<table>
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
</table>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PaginationPanel"}),t.jsx("p",{className:"component-description",children:"ページネーション機能を提供するパネルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(If,{pagination:{current_page:e,last_page:y,total:c.length,per_page:l,from:w+1,to:Math.min(w+l,c.length),prev_page_url:e>1?"#":null,next_page_url:e<y?"#":null},onPageChange:a,onPerPageChange:k=>{n(k),a(1)},config:{perPageOptions:[5,10,20],showInfo:!0}})}),t.jsx("div",{className:"code-snippet",children:`<PaginationPanel
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"リスト表示機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"基本リスト"}),t.jsx("p",{className:"component-description",children:"シンプルなリスト表示コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs(m,{style:{maxWidth:"400px"},children:[t.jsx(f,{children:"リストアイテム 1"}),t.jsx(f,{children:"リストアイテム 2"}),t.jsx(f,{children:"リストアイテム 3"}),t.jsx(f,{children:"リストアイテム 4"})]})}),t.jsx("div",{className:"code-snippet",children:`<List>
  <ListItem>リストアイテム 1</ListItem>
  <ListItem>リストアイテム 2</ListItem>
  <ListItem>リストアイテム 3</ListItem>
  <ListItem>リストアイテム 4</ListItem>
</List>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"クリック可能リスト"}),t.jsx("p",{className:"component-description",children:"クリックイベントと選択状態を持つリスト"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(m,{style:{maxWidth:"400px"},children:["オプション 1","オプション 2","オプション 3","オプション 4"].map((k,L)=>t.jsx(f,{onClick:()=>o([L]),selected:i.includes(L),children:k},L))})}),t.jsx("div",{className:"code-snippet",children:`<List>
  {items.map((item, index) => (
    <ListItem
      key={index}
      onClick={() => handleSelect(index)}
      selected={selectedItems.includes(index)}
    >
      {item}
    </ListItem>
  ))}
</List>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"グラフ機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"LineChart"}),t.jsx("p",{className:"component-description",children:"時系列データの推移を表示する折れ線グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(h,{data:g,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<LineChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"BarChart（縦棒）"}),t.jsx("p",{className:"component-description",children:"数値の比較を分かりやすく表示する縦棒グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(b,{data:g,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<BarChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"HorizontalBarChart（横棒）"}),t.jsx("p",{className:"component-description",children:"数値の比較を横棒で表示し、項目名を読みやすくした横棒グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(N,{data:g,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<HorizontalBarChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DonutChart"}),t.jsx("p",{className:"component-description",children:"割合や構成比を視覚的に表示するドーナツチャート"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(C,{data:R,width:400,height:400})})}),t.jsx("div",{className:"code-snippet",children:`<DonutChart
  data={pieData}
  width={350}
  height={350}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"テーブルは大量のデータを扱う場合、ページネーションと併用してください"}),t.jsx("li",{children:"データテーブルのプリセット設定により、一貫したスタイリングが適用されます"}),t.jsx("li",{children:"レスポンシブデザインを考慮し、モバイルでの表示を確認してください"}),t.jsx("li",{children:"ページネーションの表示件数は用途に応じて適切に設定してください"}),t.jsx("li",{children:"Listコンポーネントは統一されたスタイルで一覧表示を実現します"}),t.jsx("li",{children:"ListItemにはクリックイベントと選択状態を設定できます"}),t.jsx("li",{children:"リストアイテムの選択状態は配列で管理することを推奨します"}),t.jsx("li",{children:"折れ線グラフは時系列データや傾向の表示に適しています"}),t.jsx("li",{children:"縦棒グラフは数値の比較や順位の表示に効果的です"}),t.jsx("li",{children:"横棒グラフは項目名が長い場合や多数の項目がある場合に適しています"}),t.jsx("li",{children:"ドーナツグラフは割合や構成比の可視化に最適です"}),t.jsx("li",{children:"グラフのサイズは画面サイズに応じて調整してください"}),t.jsx("li",{children:"カラーパレットはブランドカラーに統一することを推奨します"})]})})]})]})};function _j(e,a="unified-scrollbar"){const{scrollbarConfig:l={}}=e,{width:n="17px",height:r="17px",trackColor:s="#f1f1f1",thumbColor:i="#c1c1c1",thumbHoverColor:o="#a8a8a8",cornerColor:c="#f1f1f1"}=l;return`.${a}{scrollbar-width:thin;-ms-overflow-style:auto;}.${a}::-webkit-scrollbar{width:${n};height:${r};}.${a}::-webkit-scrollbar-track{background:${s};border-radius:0;}.${a}::-webkit-scrollbar-thumb{background:${i};border-radius:0;border:none;}.${a}::-webkit-scrollbar-thumb:hover{background:${o};}.${a}::-webkit-scrollbar-corner{background:${c};}`}function Lj({tabs:e,activeTab:a,onChange:l,className:n="",config:r={},integrated:s=!1}){const i=_j(r,"tab-navigation-scrollbar");return u.useEffect(()=>{const o="tab-navigation-scrollbar-styles";let c=document.getElementById(o);return c||(c=document.createElement("style"),c.id=o,document.head.appendChild(c)),c.textContent=i,()=>{}},[i]),t.jsx("div",{className:`bg-white ${s?"":"border-b border-gray-200"} ${n}`,children:t.jsx("div",{className:"overflow-x-auto tab-navigation-scrollbar",children:t.jsx("nav",{className:"flex space-x-8 px-6 min-w-max",children:e.map(o=>t.jsx("button",{onClick:()=>l(o.key),className:`
                                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200
                                    ${a===o.key?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
                                `,children:o.label},o.key))})})})}function bc({active:e=!1,className:a="",children:l,href:n="#",...r}){return t.jsx("a",{href:n,...r,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+a,children:l})}function yc({active:e=!1,className:a="",children:l,href:n="#",...r}){return t.jsx("a",{href:n,...r,className:`flex w-full items-center border-l-4 py-2 pe-4 ps-3 ${e?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${a}`,children:l})}function Hj({children:e,align:a="right",width:l="48"}){var f,p,v,j;const[n,r]=u.useState(!1),[s,i]=u.useState("bottom"),o=u.useRef(null),c=u.useRef(null);u.useEffect(()=>{const y=w=>{o.current&&!o.current.contains(w.target)&&c.current&&!c.current.contains(w.target)&&r(!1)};if(n)return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[n]),u.useEffect(()=>{if(n&&c.current){const y=c.current.getBoundingClientRect(),w=window.innerHeight-y.bottom,x=y.top,g=64,h=130,b=30;w<h+b&&x>g+h+b?i("top"):i("bottom")}},[n]);const d=()=>s==="top"?a==="right"?"origin-bottom-right":"origin-bottom-left":a==="right"?"origin-top-right":"origin-top-left",m={48:"w-48",56:"w-56",64:"w-64"};return t.jsxs("div",{className:"relative",children:[t.jsx("div",{ref:c,children:t.jsx("button",{onClick:()=>r(!n),className:"flex items-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:t.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})})})}),n&&Fd.createPortal(t.jsx("div",{ref:o,className:`fixed ${m[l]} ${d()} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-150 ease-out`,style:{top:s==="top"?(((f=c.current)==null?void 0:f.getBoundingClientRect().top)||0)-130-8:(((p=c.current)==null?void 0:p.getBoundingClientRect().bottom)||0)+8,right:a==="right"?window.innerWidth-(((v=c.current)==null?void 0:v.getBoundingClientRect().right)||0):void 0,left:a==="left"?((j=c.current)==null?void 0:j.getBoundingClientRect().left)||0:void 0,zIndex:999999},children:t.jsx("div",{className:"py-1",onClick:y=>{y.target instanceof Element&&y.target.closest("button")&&r(!1)},children:e})}),document.body)]})}const Oj=()=>{const[e,a]=u.useState("overview"),[l,n]=u.useState(!1),[r,s]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState("right"),[m,f]=u.useState({0:!0}),p=({items:g,allowMultiple:h=!1})=>{const b=N=>{f(C=>h?{...C,[N]:!C[N]}:{[N]:!C[N]})};return t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:g.map((N,C)=>t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>b(C),style:{width:"100%",padding:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:m[C]?"var(--color-neutral-100)":"var(--color-neutral-white)",border:"none",borderBottom:C<g.length-1?"1px solid var(--color-neutral-200)":"none",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)",textAlign:"left",transition:"background-color 0.2s"},children:[t.jsx("span",{children:N.title}),t.jsx(M,{name:m[C]?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"var(--color-neutral-600)",transition:"transform 0.2s"}})]}),m[C]&&t.jsx("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-50)",borderBottom:C<g.length-1?"1px solid var(--color-neutral-200)":"none",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",lineHeight:"var(--line-height-relaxed)"},children:N.content})]},C))})},v=[{key:"overview",label:"概要",icon:"dashboard"},{key:"users",label:"ユーザー",icon:"users"},{key:"settings",label:"設定",icon:"settings"},{key:"reports",label:"レポート",icon:"chart"}],j=()=>{n(!l)},y=()=>{n(!1)},w=()=>{s(!r)},x=[{path:"/",label:"ホーム",icon:"home"},{path:"/buttons",label:"ボタン",icon:"cube"},{path:"/forms",label:"フォーム",icon:"edit"},{path:"/messages",label:"メッセージ",icon:"clipboard"},{path:"/tables",label:"テーブル",icon:"table"},{path:"/navigation",label:"ナビゲーション",icon:"menu"},{path:"/icons",label:"アイコン",icon:"star"}];return t.jsxs("div",{className:"navigation-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-description",children:"ページ間の移動、階層表示、検索・フィルタリング機能を提供するコンポーネント群"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"タブナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"TabNavigation"}),t.jsx("p",{className:"component-description",children:"コンテンツを複数のタブに分けて表示するナビゲーションコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsx("div",{className:"tab-navigation-wrapper",children:t.jsx(Lj,{tabs:v,activeTab:e,onTabChange:a,integrated:!0})}),t.jsxs("div",{className:"tab-content",children:[e==="overview"&&t.jsxs("div",{children:[t.jsx("h4",{children:"概要タブの内容"}),t.jsx("p",{children:"ここに概要情報が表示されます"})]}),e==="users"&&t.jsxs("div",{children:[t.jsx("h4",{children:"ユーザータブの内容"}),t.jsx("p",{children:"ユーザー関連の情報がここに表示されます"})]}),e==="settings"&&t.jsxs("div",{children:[t.jsx("h4",{children:"設定タブの内容"}),t.jsx("p",{children:"各種設定項目がここに表示されます"})]}),e==="reports"&&t.jsxs("div",{children:[t.jsx("h4",{children:"レポートタブの内容"}),t.jsx("p",{children:"レポートとダッシュボードがここに表示されます"})]})]})]}),t.jsx("div",{className:"code-snippet",children:`<TabNavigation
  tabs={[
    { key: 'tab1', label: 'タブ1', icon: 'icon-name' },
    { key: 'tab2', label: 'タブ2' }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ナビゲーションリンク"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"NavLink"}),t.jsx("p",{className:"component-description",children:"デスクトップナビゲーション用のリンクコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"nav-links-demo",children:[t.jsxs(bc,{href:"#",active:!0,children:[t.jsx(M,{name:"dashboard",className:"w-4 h-4 inline mr-2"}),"ダッシュボード"]}),t.jsxs(bc,{href:"#",children:[t.jsx(M,{name:"users",className:"w-4 h-4 inline mr-2"}),"ユーザー管理"]}),t.jsxs(bc,{href:"#",children:[t.jsx(M,{name:"settings",className:"w-4 h-4 inline mr-2"}),"設定"]})]})}),t.jsx("div",{className:"code-snippet",children:`<NavLink href="/dashboard" active>
  ダッシュボード
</NavLink>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SidebarLink"}),t.jsx("p",{className:"component-description",children:"サイドバーナビゲーション用のリンクコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"responsive-nav-demo",children:[t.jsxs(yc,{href:"#",active:!0,children:[t.jsx(M,{name:"dashboard",className:"w-4 h-4 inline mr-2"}),"ダッシュボード"]}),t.jsxs(yc,{href:"#",children:[t.jsx(M,{name:"users",className:"w-4 h-4 inline mr-2"}),"ユーザー管理"]}),t.jsxs(yc,{href:"#",children:[t.jsx(M,{name:"settings",className:"w-4 h-4 inline mr-2"}),"設定"]})]})}),t.jsx("div",{className:"code-snippet",children:`<SidebarLink href="/dashboard" active>
  ダッシュボード
</SidebarLink>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"パンくずナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"BreadcrumbNav"}),t.jsx("p",{className:"component-description",children:"現在のページ位置を階層的に表示するナビゲーション"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"breadcrumb-demo",children:t.jsxs("div",{className:"breadcrumb-items",children:[t.jsxs("a",{href:"#",className:"breadcrumb-item",children:[t.jsx(M,{name:"home",className:"w-4 h-4"}),t.jsx("span",{children:"ホーム"})]}),t.jsx("span",{className:"breadcrumb-separator",children:t.jsx(M,{name:"chevron-right",className:"w-4 h-4"})}),t.jsx("a",{href:"#",className:"breadcrumb-item",children:t.jsx("span",{children:"マスタ管理"})}),t.jsx("span",{className:"breadcrumb-separator",children:t.jsx(M,{name:"chevron-right",className:"w-4 h-4"})}),t.jsx("span",{className:"breadcrumb-item current",children:t.jsx("span",{children:"ユーザー一覧"})})]})})}),t.jsx("div",{className:"code-snippet",children:`<BreadcrumbNav items={[
  { label: 'ホーム', href: '/', icon: 'home' },
  { label: 'マスタ管理', href: '/master' },
  { label: 'ユーザー一覧' }
]} />`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ドロップダウンメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DropdownMenu"}),t.jsx("p",{className:"component-description",children:"基本的なドロップダウンコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"dropdown-controls",children:[t.jsx("label",{children:"表示位置:"}),t.jsx(Ha,{onClick:()=>d("left"),className:`alignment-btn ${c==="left"?"active":""}`,children:"左"}),t.jsx(Ha,{onClick:()=>d("right"),className:`alignment-btn ${c==="right"?"active":""}`,children:"右"}),t.jsx("div",{className:"dropdown-demo",children:t.jsx(Hj,{isOpen:i,onToggle:()=>o(!i),align:c,trigger:t.jsx(Ha,{onClick:()=>o(!i),children:t.jsx(M,{name:"more-vertical",className:"w-4 h-4"})}),children:t.jsxs("div",{style:{padding:"var(--spacing-2)"},children:[t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:"プロフィール"}),t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:"設定"}),t.jsx("hr",{style:{margin:"var(--spacing-2) 0"}}),t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer",color:"var(--color-danger-600)"},children:"ログアウト"})]})})})]})}),t.jsx("div",{className:"code-snippet",children:`<DropdownMenu
  isOpen={isOpen}
  onToggle={onToggle}
  align="right"
  trigger={<button>メニュー</button>}
>
  <div>ドロップダウンの内容</div>
</DropdownMenu>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ハンバーガーメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"HamburgerMenu"}),t.jsx("p",{className:"component-description",children:"モバイル向けのハンバーガーメニューボタン（3本線アイコン）"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"hamburger-demo",children:[t.jsxs("div",{className:"hamburger-header",children:[t.jsx("h4",{children:"サイトタイトル"}),t.jsx("button",{className:`hamburger-button ${r?"active":""}`,onClick:w,"aria-label":r?"メニューを閉じる":"メニューを開く",children:t.jsx(M,{name:"menu",className:"w-5 h-5 hamburger-icon"})})]}),t.jsx("div",{className:`hamburger-menu ${r?"open":""}`,children:t.jsx("ul",{className:"hamburger-nav-list",children:x.map((g,h)=>t.jsx("li",{className:"hamburger-nav-item",children:t.jsxs("a",{href:g.path,className:`hamburger-nav-link ${g.path==="/navigation"?"active":""}`,onClick:b=>{b.preventDefault(),s(!1)},children:[t.jsx(M,{name:g.icon,className:"w-4 h-4"}),g.label]})},g.path))})}),t.jsxs("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:["ハンバーガーメニューボタン - クリックして状態変化を確認",t.jsx("br",{}),"状態: ",r?"開いている":"閉じている"]})]})}),t.jsx("div",{className:"code-snippet",children:`// 状態管理
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
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ドロワーメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DrawerMenu"}),t.jsx("p",{className:"component-description",children:"スライド式のナビゲーションドロワー（ハンバーガーメニューと組み合わせて使用）"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"hamburger-demo",children:[t.jsxs("div",{className:"hamburger-header",children:[t.jsx("h4",{children:"サイトタイトル"}),t.jsx("button",{className:"hamburger-button",onClick:j,"aria-label":"メニューを開く",children:t.jsx(M,{name:"menu",className:"w-5 h-5"})})]}),t.jsx("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"ハンバーガーメニューをクリックしてドロワーを開く"})]}),t.jsx("div",{className:`drawer-overlay ${l?"open":""}`,onClick:y}),t.jsxs("div",{className:`drawer ${l?"open":""}`,children:[t.jsxs("div",{className:"drawer-header",children:[t.jsx("div",{className:"drawer-title",children:"ナビゲーション"}),t.jsx("button",{className:"drawer-close",onClick:y,"aria-label":"メニューを閉じる",children:t.jsx(M,{name:"close",className:"w-4 h-4"})})]}),t.jsx("nav",{className:"drawer-nav",children:t.jsx("ul",{className:"drawer-nav-list",children:x.map((g,h)=>t.jsx("li",{className:"drawer-nav-item",children:t.jsxs("a",{href:g.path,className:`drawer-nav-link ${g.path==="/navigation"?"active":""}`,onClick:b=>{b.preventDefault(),y()},children:[t.jsx(M,{name:g.icon,className:"w-5 h-5"}),g.label]})},g.path))})})]})]}),t.jsx("div",{className:"code-snippet",children:`// ドロワーオーバーレイ
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
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"アコーディオンナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Accordion"}),t.jsx("p",{className:"component-description",children:"展開・折りたたみ可能なナビゲーションコンテンツ（FAQやメニュー整理に最適）"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"accordion-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本アコーディオン（単一展開）"}),t.jsx(p,{items:[{title:"よくある質問",content:"このセクションでは、システムに関する最も頻繁に寄せられる質問とその回答をご覧いただけます。新しい質問がある場合は、サポートチームまでお気軽にお問い合わせください。"},{title:"機能ガイド",content:t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ダッシュボードの使い方"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• データのインポート・エクスポート"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• レポート作成手順"}),t.jsx("p",{style:{margin:"0"},children:"• ユーザー権限の管理"})]})},{title:"トラブルシューティング",content:"システムで問題が発生した場合は、まずこちらのトラブルシューティングガイドをご確認ください。ログイン問題、パフォーマンスの問題、データ同期に関する解決策を提供しています。"}],allowMultiple:!1})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"複数展開可能アコーディオン"}),t.jsx(p,{items:[{title:"ナビゲーションメニュー",content:t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ダッシュボード"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ユーザー管理"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• レポート"}),t.jsx("p",{style:{margin:"0"},children:"• 設定"})]})},{title:"管理者メニュー",content:t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• システム設定"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"• ユーザー権限管理"}),t.jsx("p",{style:{margin:"0"},children:"• ログ管理"})]})}],allowMultiple:!0})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本アコーディオン（単一展開）
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"タブナビゲーションは5つ以下のタブに制限することを推奨します"}),t.jsx("li",{children:"パンくずは3〜4階層までが理想的です"}),t.jsx("li",{children:"NavLinkは現在のページをactiveプロパティで示してください"}),t.jsx("li",{children:"SidebarLinkはサイドバーメニュー内で使用してください"}),t.jsx("li",{children:"ハンバーガーメニューは768px以下のモバイル画面で表示することが一般的です"}),t.jsx("li",{children:"ハンバーガーメニューボタンには適切なaria-labelを設定してください"}),t.jsx("li",{children:"ドロワーメニューは外部クリック、ESCキー、閉じるボタンで閉じられるようにしてください"}),t.jsx("li",{children:"ドロワーメニューはハンバーガーメニューと組み合わせて使用します"}),t.jsx("li",{children:"アコーディオンの単一展開モードはFAQやヘルプページに適しています"}),t.jsx("li",{children:"アコーディオンの複数展開モードはナビゲーションメニューや設定画面に適しています"}),t.jsx("li",{children:"アコーディオンは長いコンテンツを整理し、ユーザーが必要な情報のみを表示できます"})]})})]})]})},Vj=()=>{const e=({size:_="md",color:Q="#007bff",backgroundColor:Y="rgba(255, 255, 255, 0.9)",overlay:S=!1,text:H=null,show:E=!0})=>{if(!E)return null;const q={sm:{width:"20px",height:"20px",borderWidth:"2px"},md:{width:"40px",height:"40px",borderWidth:"4px"},lg:{width:"60px",height:"60px",borderWidth:"6px"},xl:{width:"80px",height:"80px",borderWidth:"8px"}},$={width:q[_].width,height:q[_].height,border:`${q[_].borderWidth} solid #f3f3f3`,borderTop:`${q[_].borderWidth} solid ${Q}`,borderRadius:"50%",animation:"spin 1s linear infinite"},J={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",...S&&{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:Y,zIndex:9999}};return t.jsxs("div",{style:J,children:[t.jsx("style",{children:`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}),t.jsx("div",{style:$}),H&&t.jsx("span",{style:{fontSize:"14px",color:"#666",fontWeight:"500"},children:H})]})},[a,l]=u.useState("standard"),[n,r]=u.useState(!1),[s,i]=u.useState("mobile-first"),[o,c]=u.useState(!0),[d,m]=u.useState(!1),[f,p]=u.useState(!1),[v,j]=u.useState(!1),[y,w]=u.useState(!1),[x,g]=u.useState("blue"),[h,b]=u.useState(!1),[N,C]=u.useState(!1),[R,k]=u.useState(!1),[L,T]=u.useState(!1),[A,B]=u.useState("default");return t.jsxs("div",{className:"layout-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"レイアウト"}),t.jsx("p",{className:"page-description",children:"PC（デスクトップ）とSP（スマートフォン）向けのレイアウトコンポーネント。 デバイスごとに最適化されたレイアウト構造を提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"配色"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Color Theme"}),t.jsx("p",{className:"component-description",children:"プロジェクトのブランドアイデンティティに合わせた配色テーマ。青基調はデフォルト、軽量なUIには白基調、汎用系はグレー基調を推奨します。"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"theme-selector",children:[t.jsxs("button",{className:`theme-button ${x==="blue"?"active":""}`,onClick:()=>g("blue"),children:[t.jsx("div",{className:"theme-preview blue"}),"青基調"]}),t.jsxs("button",{className:`theme-button ${x==="white"?"active":""}`,onClick:()=>g("white"),children:[t.jsx("div",{className:"theme-preview white"}),"白基調"]}),t.jsxs("button",{className:`theme-button ${x==="grey"?"active":""}`,onClick:()=>g("grey"),children:[t.jsx("div",{className:"theme-preview grey"}),"グレー基調"]})]}),t.jsxs("div",{className:`theme-demo-layout ${x}-theme`,children:[t.jsx("nav",{className:"theme-nav-header",children:t.jsx("div",{className:"theme-nav-container",children:t.jsx("a",{href:"#",className:"theme-nav-logo",children:"App Title"})})}),t.jsxs("div",{className:"theme-main-content",children:[t.jsxs("aside",{className:"theme-sidebar",children:[t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(M,{name:"dashboard",className:"w-4 h-4",style:{marginRight:"6px"}}),"ダッシュボード"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(M,{name:"users",className:"w-4 h-4",style:{marginRight:"6px"}}),"ユーザー"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(M,{name:"settings",className:"w-4 h-4",style:{marginRight:"6px"}}),"設定"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(M,{name:"clipboard",className:"w-4 h-4",style:{marginRight:"6px"}}),"レポート"]})]}),t.jsxs("main",{className:"theme-content",children:[t.jsx("h3",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)"},children:"テーマ適用サンプル"}),t.jsxs("p",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-xs)",lineHeight:"var(--line-height-relaxed)"},children:["現在のUI Componentsのレイアウトを再現したプレビューです。",t.jsx("br",{}),"選択したテーマに応じて、ヘッダー、サイドバー、フッターの色が変化します。"]}),t.jsx("div",{style:{background:x==="blue"?"#e1edff":x==="white"?"var(--color-primary-50)":"#f3f4f6",padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-xs)",color:x==="blue"?"rgb(21, 52, 109)":x==="white"?"var(--color-primary-700)":"#374151"},children:"🎨 ブランドアイデンティティに合わせた配色テーマで一貫性を保ちます"})]})]}),t.jsx("footer",{className:"theme-footer",children:t.jsxs("p",{style:{margin:0},children:["© 2025 UI Components - ",x==="blue"?"Blue Theme":x==="white"?"White Theme":"Grey Theme"]})})]})]}),t.jsx("div",{className:"code-snippet",children:`/* 青基調テーマ */
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
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"PCレイアウト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PC Layout"}),t.jsx("p",{className:"component-description",children:"デスクトップ向けのレイアウト。横幅を活用した多カラム構成が可能"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"layout-selector",children:[t.jsx("button",{className:`layout-button ${a==="standard"?"active":""}`,onClick:()=>l("standard"),children:"基本"}),t.jsx("button",{className:`layout-button ${a==="drawer"?"active":""}`,onClick:()=>l("drawer"),children:"サイドバー固定"}),t.jsx("button",{className:`layout-button ${a==="overlay"?"active":""}`,onClick:()=>l("overlay"),children:"オーバーレイ"}),t.jsx("button",{className:`layout-button ${a==="navigation"?"active":""}`,onClick:()=>l("navigation"),children:"ナビゲーション"})]}),t.jsxs("div",{className:"pc-layout-demo",children:[a==="navigation"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-nav",children:[t.jsxs("a",{href:"#",className:"pc-nav-item active",children:[t.jsx(M,{name:"home",className:"w-4 h-4",style:{marginRight:"8px"}}),"ホーム"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(M,{name:"user",className:"w-4 h-4",style:{marginRight:"8px"}}),"会社情報"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(M,{name:"briefcase",className:"w-4 h-4",style:{marginRight:"8px"}}),"サービス"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(M,{name:"mail",className:"w-4 h-4",style:{marginRight:"8px"}}),"お問い合わせ"]})]}),t.jsxs("div",{className:"pc-content",children:["ナビゲーション表示レイアウト",t.jsx("br",{}),"フルワイドでコンテンツを表示",t.jsx("br",{}),t.jsx("br",{}),"ヘッダー下にナビゲーション",t.jsx("br",{}),"メニューを配置するパターン"]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),a==="standard"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-main",children:[t.jsxs("div",{className:`pc-sidebar ${n?"collapsed":""}`,children:[t.jsx("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:n?"center":"flex-end"},children:t.jsx("button",{onClick:()=>r(!n),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:t.jsx(M,{name:n?"chevron-right":"chevron-left",className:"w-4 h-4",style:{color:"white"}})})}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(M,{name:"dashboard",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"ダッシュボード"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(M,{name:"users",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"ユーザー"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(M,{name:"settings",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"設定"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(M,{name:"clipboard",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"レポート"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(M,{name:"star",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"分析"})]})]}),t.jsxs("div",{className:"pc-content",children:["基本レイアウト",t.jsx("br",{}),"サイドバー付きの構成",t.jsx("br",{}),t.jsx("br",{}),"標準的なレイアウト",t.jsx("br",{}),"ダッシュボードに最適",t.jsx("br",{}),t.jsx("br",{}),"メインコンテンツエリア",t.jsx("br",{}),"管理画面向けの設計"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),a==="drawer"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-drawer-layout",children:[t.jsx("div",{className:`pc-drawer-sidebar ${o?"":"collapsed"}`,children:t.jsxs("div",{className:"drawer-menu-items",style:{marginTop:"8px"},children:[t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(M,{name:"dashboard",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ダッシュボード"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(M,{name:"users",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ユーザー"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(M,{name:"settings",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"設定"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(M,{name:"clipboard",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"レポート"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(M,{name:"star",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"分析"]})]})}),t.jsxs("div",{className:"pc-drawer-content",children:["サイドバー固定レイアウト",t.jsx("br",{}),"サイドバーが常時表示",t.jsx("br",{}),t.jsx("br",{}),"安定したナビゲーション",t.jsx("br",{}),"管理画面に最適",t.jsx("br",{}),t.jsx("br",{}),"コンテンツ領域と",t.jsx("br",{}),"バランスの取れた設計"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),a==="overlay"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("button",{className:"drawer-toggle",onClick:()=>m(!d),style:{position:"static",background:"none",border:"none",fontSize:"12px",cursor:"pointer",padding:"2px 4px",borderRadius:"3px"},children:"≡"}),t.jsx("span",{children:"App Title"})]})}),t.jsxs("div",{className:"overlay-drawer-layout",children:[t.jsx("div",{className:`overlay-drawer-backdrop ${d?"open":""}`,onClick:()=>m(!1)}),t.jsx("div",{className:`overlay-drawer-sidebar ${d?"open":""}`,children:t.jsxs("div",{className:"overlay-menu-items",style:{marginTop:"8px"},children:[t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(M,{name:"dashboard",className:"w-4 h-4",style:{color:"white"}}),"ダッシュボード"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(M,{name:"users",className:"w-4 h-4",style:{color:"white"}}),"ユーザー"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(M,{name:"settings",className:"w-4 h-4",style:{color:"white"}}),"設定"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(M,{name:"clipboard",className:"w-4 h-4",style:{color:"white"}}),"レポート"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(M,{name:"star",className:"w-4 h-4",style:{color:"white"}}),"分析"]})]})}),t.jsxs("div",{className:"overlay-drawer-content",children:["オーバーレイドロワー",t.jsx("br",{}),"コンテンツの上に重なる",t.jsx("br",{}),t.jsx("br",{}),"背景クリックで閉じる",t.jsx("br",{}),t.jsx("br",{}),"モバイルライクなUX",t.jsx("br",{}),t.jsx("br",{}),"画面サイズを問わず",t.jsx("br",{}),"一定の操作感"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]})]})]}),t.jsx("div",{className:"code-snippet",children:`<div className="pc-layout">
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
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"SPレイアウト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SP Layout"}),t.jsx("p",{className:"component-description",children:"スマートフォン向けのレイアウト。基本はハンバーガーメニューを使用した1カラム構成"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"layout-selector",children:[t.jsx("button",{className:`layout-button ${s==="mobile-first"?"active":""}`,onClick:()=>i("mobile-first"),children:"基本"}),t.jsx("button",{className:`layout-button ${s==="drawer"?"active":""}`,onClick:()=>i("drawer"),children:"ドロワー"}),t.jsx("button",{className:`layout-button ${s==="fullscreen"?"active":""}`,onClick:()=>i("fullscreen"),children:"全画面表示"}),t.jsx("button",{className:`layout-button ${s==="bottom-nav"?"active":""}`,onClick:()=>i("bottom-nav"),children:"ボトムナビ"})]}),t.jsx("div",{className:"sp-frame",children:t.jsxs("div",{className:"sp-layout-demo",children:[s==="mobile-first"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>p(!f),children:"☰"}),f&&t.jsxs("div",{className:`sp-hamburger-menu ${f?"open":""}`,children:[t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(M,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(M,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(M,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(M,{name:"mail",className:"w-4 h-4",style:{color:"white !important",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(M,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]}),t.jsxs("div",{className:"sp-content",children:["基本のモバイルレイアウト",t.jsx("br",{}),t.jsx("br",{}),"クリックでハンバーガー",t.jsx("br",{}),"メニューが表示される",t.jsx("br",{}),t.jsx("br",{}),"縦スクロールでの",t.jsx("br",{}),"コンテンツ表示",t.jsx("br",{}),t.jsx("br",{}),"最もスタンダードな",t.jsx("br",{}),"SP構成"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"})]}),s==="fullscreen"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsx("div",{style:{position:"relative"},children:t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>w(!y),children:"☰"})})]}),t.jsxs("div",{className:"sp-content",children:["全画面メニューレイアウト",t.jsx("br",{}),t.jsx("br",{}),"ハンバーガークリックで",t.jsx("br",{}),"全画面にメニュー表示",t.jsx("br",{}),t.jsx("br",{}),"シンプルで分かりやすい",t.jsx("br",{}),"ナビゲーション",t.jsx("br",{}),t.jsx("br",{}),"モバイルアプリ風の",t.jsx("br",{}),"操作感を実現"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"}),t.jsxs("div",{className:`sp-fullscreen-overlay ${y?"open":""}`,children:[t.jsx("button",{className:"sp-fullscreen-close",onClick:()=>w(!1),children:"×"}),t.jsxs("div",{className:"sp-fullscreen-menu",children:[t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(M,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(M,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(M,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(M,{name:"mail",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(M,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]}),s==="bottom-nav"&&t.jsxs("div",{children:[t.jsx("div",{className:"sp-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"sp-content",children:["ボトムナビゲーション",t.jsx("br",{}),"レイアウト",t.jsx("br",{}),t.jsx("br",{}),"下部に固定された",t.jsx("br",{}),"タブナビゲーション",t.jsx("br",{}),t.jsx("br",{}),"アプリライクな",t.jsx("br",{}),"操作感を実現",t.jsx("br",{}),t.jsx("br",{}),"タブ切り替えで",t.jsx("br",{}),"コンテンツ表示"]}),t.jsxs("div",{className:"sp-nav",style:{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"var(--spacing-3)"},children:[t.jsxs("div",{className:"sp-nav-item active",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["🏠",t.jsx("span",{children:"ホーム"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["📊",t.jsx("span",{children:"分析"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["💬",t.jsx("span",{children:"メッセージ"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["⚙️",t.jsx("span",{children:"設定"})]})]})]}),s==="drawer"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsx("div",{style:{position:"relative"},children:t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>j(!v),children:"☰"})})]}),t.jsxs("div",{className:"sp-content",children:["ドロワーメニューレイアウト",t.jsx("br",{}),t.jsx("br",{}),"右端のハンバーガークリックで",t.jsx("br",{}),"右からドロワーが表示",t.jsx("br",{}),t.jsx("br",{}),"基本オプションと同じ",t.jsx("br",{}),"レイアウト構成",t.jsx("br",{}),t.jsx("br",{}),"背景クリックで閉じる"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"}),t.jsx("div",{className:`sp-drawer-backdrop ${v?"open":""}`,onClick:()=>j(!1)}),t.jsxs("div",{className:`sp-drawer-sidebar ${v?"open":""}`,children:[t.jsx("button",{style:{position:"absolute",top:"var(--spacing-2)",right:"var(--spacing-2)",background:"none",border:"none",color:"white",fontSize:"18px",cursor:"pointer",padding:"var(--spacing-1)",zIndex:60},onClick:()=>j(!1),children:"×"}),t.jsxs("div",{style:{marginTop:"32px"},children:[t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(M,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(M,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(M,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(M,{name:"mail",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(M,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]})]})})]}),t.jsx("div",{className:"code-snippet",children:`<div className="sp-layout">
  <header className="sp-header">
    <!-- ヘッダー：ハンバーガーメニュー、タイトル -->
  </header>
  <main className="sp-content">
    <!-- メインコンテンツ：縦スクロール -->
  </main>
  <nav className="sp-bottom-nav">
    <!-- ボトムナビゲーション（オプション） -->
  </nav>
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"PCレイアウトは横幅1024px以上のデスクトップ環境を想定しています"}),t.jsx("li",{children:"SPレイアウトは横幅375px〜768pxのモバイル環境を想定しています"}),t.jsx("li",{children:"タブレット端末（768px〜1024px）はSPレイアウト準拠で実装してください"}),t.jsx("li",{children:"サイドバー付きレイアウトは管理画面やダッシュボードに適しています"}),t.jsx("li",{children:"ボトムナビゲーションはアプリライクなUXを実現できます"}),t.jsx("li",{children:"ドロワーメニューはコンテンツ領域を最大化したい場合に有効です"}),t.jsx("li",{children:"レスポンシブ対応時は@mediaクエリでPC/SPレイアウトを切り替えてください"}),t.jsx("li",{children:"タッチデバイスではボタンサイズを44px以上に設定することを推奨します"}),t.jsx("li",{children:"青基調テーマはビジネス系システムに、グレー基調テーマは汎用系システムに適しています"}),t.jsx("li",{children:"テーマ色はブランドガイドラインに合わせてカスタマイズしてください"})]})})]}),t.jsx(e,{show:h,overlay:!0,size:"md",text:"読み込み中..."}),t.jsx(e,{show:N,overlay:!0,size:"lg",color:"#28a745",text:"データを処理中...",backgroundColor:"rgba(40, 167, 69, 0.1)"}),t.jsx(e,{show:R,overlay:!0,size:"sm",color:"#ffc107",text:"少々お待ちください...",backgroundColor:"rgba(255, 193, 7, 0.1)"}),t.jsx(e,{show:L,overlay:!0,size:"xl",color:"#dc3545",text:"重要な処理を実行中です...",backgroundColor:"rgba(0, 0, 0, 0.7)"})]})},Ku=u.createContext(void 0),Se=({children:e})=>{const[a,l]=u.useState(!1),n=()=>{l(r=>!r)};return t.jsx(Ku.Provider,{value:{open:a,setOpen:l,toggleOpen:n},children:t.jsx("div",{className:"relative",children:e})})},$j=({children:e})=>{const a=u.useContext(Ku);if(!a)throw new Error("Trigger must be used within a Dropdown");const{open:l,setOpen:n,toggleOpen:r}=a;return t.jsxs(t.Fragment,{children:[t.jsx("div",{onClick:r,children:e}),l&&t.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},Uj=({align:e="right",width:a="48",contentClasses:l="py-1 bg-white",children:n})=>{const r=u.useContext(Ku);if(!r)throw new Error("Content must be used within a Dropdown");const{open:s,setOpen:i}=r;let o="origin-top";e==="left"?o="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(o="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return a==="48"&&(c="w-48"),t.jsx(t.Fragment,{children:t.jsx(Pu,{show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${o} ${c}`,onClick:()=>i(!1),children:t.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+l,children:n})})})})},qj=({className:e="",children:a,href:l="#",onClick:n,...r})=>{const s=i=>{i.preventDefault(),n==null||n(i)};return t.jsx("a",{href:l,onClick:s,...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+e,children:a})};Se.Trigger=$j;Se.Content=Uj;Se.Link=qj;const Jl=({viewMode:e="pc",onViewModeChange:a,className:l="",hide:n=!1,showCategories:r,showViewMode:s})=>{if(n)return null;let i,o;try{i=Et(),o=Kl()}catch{console.warn("TemplateNavigation: React Router hooks not available. Navigation disabled.")}const d=((o==null?void 0:o.pathname)||"").startsWith("/templates"),m=d?"/templates":"/pages",f=r!==void 0?r:!d,p=s!==void 0?s:!d,v=o?[`${m}/login`,`${m}/signup`,`${m}/signup-confirm`,`${m}/signup-complete`,`${m}/forgot-password`,`${m}/reset-password`,`${m}/password-reset-email`].some(h=>o.pathname.startsWith(h)):!1,j=o?[`${m}/dashboard`,`${m}/data/`,`${m}/statistics`,`${m}/notifications`,`${m}/settings`].some(h=>o.pathname.startsWith(h)):!1,y=o?[`${m}/error-404`,`${m}/error-500`,`${m}/maintenance`,`${m}/qna`,`${m}/terms`,`${m}/privacy`,`${m}/commercial`].some(h=>o.pathname.startsWith(h)):!1,w=()=>o?o.pathname.startsWith(`${m}/login`)?"ログイン":o.pathname.startsWith(`${m}/signup-complete`)?"登録完了":o.pathname.startsWith(`${m}/signup-confirm`)?"登録確認":o.pathname.startsWith(`${m}/signup`)?"新規登録":o.pathname.startsWith(`${m}/forgot-password`)?"再設定URL送信":o.pathname.startsWith(`${m}/reset-password`)?"パスワード再設定":o.pathname.startsWith(`${m}/password-reset-email`)?"リセットメール":"ページを選択":"ページを選択",x=()=>o?o.pathname.startsWith(`${m}/dashboard`)?"ダッシュボード":o.pathname.startsWith(`${m}/data/list`)?"データ一覧":o.pathname.startsWith(`${m}/data/add`)?"データ作成":o.pathname.startsWith(`${m}/data/edit`)?"データ編集":o.pathname.startsWith(`${m}/data/detail`)?"データ詳細":o.pathname.startsWith(`${m}/statistics`)?"統計":o.pathname.startsWith(`${m}/notifications`)?"通知一覧":o.pathname.startsWith(`${m}/settings`)?"設定":"ページを選択":"ページを選択",g=()=>o?o.pathname.startsWith(`${m}/qna`)?"Q&A":o.pathname.startsWith(`${m}/terms`)?"利用規約":o.pathname.startsWith(`${m}/privacy`)?"プライバシーポリシー":o.pathname.startsWith(`${m}/commercial`)?"特定商取引法":o.pathname.startsWith(`${m}/error-404`)?"404エラー":o.pathname.startsWith(`${m}/error-500`)?"500エラー":o.pathname.startsWith(`${m}/maintenance`)?"メンテナンス":"ページを選択":"ページを選択";return t.jsxs("div",{className:`template-navigation ${l}`,children:[f&&t.jsxs("div",{className:"navigation-group",children:[t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"ログイン前"}),t.jsxs(Se,{children:[t.jsx(Se.Trigger,{children:t.jsxs("button",{className:`page-select-button ${v?"active":""}`,children:[w(),t.jsx(M,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(Se.Content,{align:"left",children:[t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/login`),children:"ログイン"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/signup`),children:"新規登録"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/signup-confirm`),children:"登録確認"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/signup-complete`),children:"登録完了"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/forgot-password`),children:"再設定URL送信"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/reset-password`),children:"パスワード再設定"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/password-reset-email`),children:"リセットメール"})]})]})]}),t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"ログイン後"}),t.jsxs(Se,{children:[t.jsx(Se.Trigger,{children:t.jsxs("button",{className:`page-select-button ${j?"active":""}`,children:[x(),t.jsx(M,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(Se.Content,{align:"left",children:[t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/dashboard`),children:"ダッシュボード"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/data/list`),children:"データ一覧"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/data/add`),children:"データ作成"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/data/edit`),children:"データ編集"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/data/detail`),children:"データ詳細"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/statistics`),children:"統計"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/notifications`),children:"通知一覧"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/settings`),children:"設定"})]})]})]}),t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"その他"}),t.jsxs(Se,{children:[t.jsx(Se.Trigger,{children:t.jsxs("button",{className:`page-select-button ${y?"active":""}`,children:[g(),t.jsx(M,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(Se.Content,{align:"left",children:[t.jsx("div",{style:{padding:"var(--spacing-2) var(--spacing-3)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)"},children:"情報ページ"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/qna`),children:"Q&A"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/terms`),children:"利用規約"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/privacy`),children:"プライバシーポリシー"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/commercial`),children:"特定商取引法"}),t.jsx("div",{style:{padding:"var(--spacing-2) var(--spacing-3)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",borderTop:"1px solid var(--color-neutral-200)",marginTop:"var(--spacing-1)"},children:"エラー/メンテナンス"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/error-404`),children:"404エラー"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/error-500`),children:"500エラー"}),t.jsx(Se.Link,{onClick:()=>i==null?void 0:i(`${m}/maintenance`),children:"メンテナンス"})]})]})]})]}),p&&a&&t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"表示モード"}),t.jsxs("div",{className:"view-mode-toggle",children:[t.jsxs("button",{className:`view-mode-button ${e==="pc"?"active":""}`,onClick:()=>a("pc"),children:[t.jsx(M,{name:"desktop",style:{width:"16px",height:"16px"}}),"PC"]}),t.jsxs("button",{className:`view-mode-button ${e==="sp"?"active":""}`,onClick:()=>a("sp"),children:[t.jsx(M,{name:"device-mobile",style:{width:"16px",height:"16px"}}),"SP"]})]})]})]})},Im="app-view-mode",Ie=()=>{const[e,a]=u.useState(()=>{if(typeof window<"u"){const n=localStorage.getItem(Im);return n==="sp"||n==="pc"?n:"pc"}return"pc"});return[e,n=>{a(n),typeof window<"u"&&localStorage.setItem(Im,n)}]},Rd=e=>{var A,B,_,Q,Y;const[a]=Ie(),[l,n]=u.useState(""),[r,s]=u.useState(""),[i,o]=u.useState(!1),[c,d]=u.useState({}),[m,f]=u.useState(),p=e.email!==void 0?e.email:l,v=e.password!==void 0?e.password:r,j=e.rememberMe!==void 0?e.rememberMe:i,y=e.showRememberMe!==void 0?e.showRememberMe:!1,w={email:((A=e.errors)==null?void 0:A.email)||((B=e.loginErrors)==null?void 0:B.email)||c.email,password:((_=e.errors)==null?void 0:_.password)||((Q=e.loginErrors)==null?void 0:Q.password)||c.password},x=((Y=e.flash)==null?void 0:Y.error)||e.loginFormError||m,g=S=>{if(!S)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(S))return"正しいメールアドレスを入力してください"},h=S=>{if(!S)return"パスワードを入力してください";if(S.length<8)return"パスワードは8文字以上で入力してください"},b=S=>{e.onEmailChange?e.onEmailChange(S):(n(S),d(H=>({...H,email:void 0})))},N=S=>{e.onPasswordChange?e.onPasswordChange(S):(s(S),d(H=>({...H,password:void 0})))},C=S=>{e.onRememberMeChange?e.onRememberMeChange(S):o(S)},R=S=>{if(e.onEmailBlur)e.onEmailBlur(S);else{const H=g(S);d(E=>({...E,email:H}))}},k=S=>{if(e.onPasswordBlur)e.onPasswordBlur(S);else{const H=h(S);d(E=>({...E,password:H}))}},L=S=>{if(S.preventDefault(),e.onSubmit)e.onSubmit(S);else{const H=g(p),E=h(v);if(H||E){d({email:H,password:E});return}console.log("Login attempt:",{email:p,password:v,rememberMe:j}),f(void 0)}},T=()=>{if(e.onNavigateToForgotPassword)e.onNavigateToForgotPassword();else if(typeof window<"u"){const E=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${E}/forgot-password`}};return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"ログイン"}),t.jsx("p",{className:"login-subtitle",children:"アカウントにログインしてください"}),t.jsxs("form",{className:"login-form",onSubmit:L,noValidate:!0,children:[x&&t.jsxs("div",{className:"login-error",children:[t.jsx(M,{name:"exclamation",className:"w-5 h-5"}),t.jsx("span",{children:x})]}),t.jsx(Ue,{label:"メールアドレス",type:"email",name:"email",value:p,onChange:S=>b(S.target.value),onBlur:S=>R(S.target.value),placeholder:"example@email.com",required:!0,error:w.email}),t.jsx(Ue,{label:"パスワード",type:"password",name:"password",value:v,onChange:S=>N(S.target.value),onBlur:S=>k(S.target.value),placeholder:"••••••••",required:!0,error:w.password}),y&&t.jsxs("label",{className:"remember-me",children:[t.jsx(Ht,{name:"remember",checked:j,onChange:S=>C(S.target.checked)}),t.jsx("span",{children:"ログイン状態を保存する"})]}),t.jsx("div",{style:{textAlign:"center"},children:t.jsx("a",{href:"#",onClick:S=>{S.preventDefault(),T()},style:{color:"var(--color-primary-600)",textDecoration:"underline",fontSize:"var(--font-size-sm)"},children:"パスワードを忘れた場合"})}),t.jsx("button",{type:"submit",className:"login-button",children:"ログイン"})]})]})})})},Td=e=>{var w,x;const[a]=Ie(),[l,n]=u.useState(""),[r,s]=u.useState(),[i,o]=u.useState(!1),c=e.resetEmail!==void 0?e.resetEmail:l,d=((w=e.errors)==null?void 0:w.email)||e.resetEmailError||r,m=(x=e.flash)!=null&&x.status?!0:e.resetEmailSuccess!==void 0?e.resetEmailSuccess:i,f=g=>{if(!g)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g))return"正しいメールアドレスを入力してください"},p=g=>{e.onResetEmailChange?e.onResetEmailChange(g):(n(g),s(void 0),o(!1))},v=g=>{if(e.onResetEmailBlur)e.onResetEmailBlur(g);else{const h=f(g);s(h)}},j=g=>{if(g.preventDefault(),e.onSubmit)e.onSubmit(g);else{const h=f(c);if(h){s(h);return}console.log("Password reset requested for:",c),o(!0),s(void 0)}},y=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const b=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${b}/login`}};return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"パスワード再設定"}),t.jsx("p",{className:"login-subtitle",children:"メールアドレスに再設定用URLを送信します"}),t.jsxs("form",{className:"login-form",onSubmit:j,noValidate:!0,children:[m&&t.jsxs("div",{className:"success-message",children:[t.jsx(M,{name:"check-circle",className:"w-5 h-5"}),t.jsxs("span",{children:["再設定用URLを送信しました。",t.jsx("br",{}),"メールをご確認ください。"]})]}),t.jsx(Ue,{label:"メールアドレス",type:"email",name:"resetEmail",value:c,onChange:g=>p(g.target.value),onBlur:g=>v(g.target.value),placeholder:"example@email.com",required:!0,error:d}),t.jsx("button",{type:"submit",className:"login-button",children:"再設定用URLを送信"}),t.jsx("div",{style:{textAlign:"center",marginTop:"var(--spacing-4)"},children:t.jsx("a",{href:"#",onClick:g=>{g.preventDefault(),y()},style:{color:"var(--color-primary-600)",textDecoration:"none",fontSize:"var(--font-size-sm)"},children:"ログイン画面に戻る"})})]})]})})})},Ad=e=>{var N,C,R,k,L;const[a]=Ie(),[l,n]=u.useState(""),[r,s]=u.useState(""),[i,o]=u.useState(!1),[c,d]=u.useState({}),m=e.newPassword!==void 0?e.newPassword:l,f=e.confirmPassword!==void 0?e.confirmPassword:r,p={newPassword:((N=e.errors)==null?void 0:N.password)||((C=e.passwordResetErrors)==null?void 0:C.newPassword)||c.newPassword,confirmPassword:((R=e.errors)==null?void 0:R.password_confirmation)||((k=e.passwordResetErrors)==null?void 0:k.confirmPassword)||c.confirmPassword},v=(L=e.flash)!=null&&L.status?!0:e.passwordResetSuccess!==void 0?e.passwordResetSuccess:i,j=T=>{if(!T)return"パスワードを入力してください";if(T.length<8)return"パスワードは8文字以上で入力してください"},y=(T,A)=>{if(!T)return"パスワード確認を入力してください";if(T!==A)return"パスワードが一致しません"},w=T=>{e.onNewPasswordChange?e.onNewPasswordChange(T):(n(T),d(A=>({...A,newPassword:void 0})))},x=T=>{e.onConfirmPasswordChange?e.onConfirmPasswordChange(T):(s(T),d(A=>({...A,confirmPassword:void 0})))},g=T=>{if(e.onNewPasswordBlur)e.onNewPasswordBlur(T);else{const A=j(T);d(B=>({...B,newPassword:A}))}},h=T=>{if(e.onConfirmPasswordBlur)e.onConfirmPasswordBlur(T);else{const A=y(T,m);d(B=>({...B,confirmPassword:A}))}},b=T=>{if(T.preventDefault(),e.onSubmit)e.onSubmit(T);else{const A=j(m),B=y(f,m);if(A||B){d({newPassword:A,confirmPassword:B});return}console.log("Password reset successful"),o(!0),d({}),setTimeout(()=>{typeof window<"u"&&(window.location.href="/login")},2e3)}};return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"新しいパスワード設定"}),t.jsx("p",{className:"login-subtitle",children:"新しいパスワードを入力してください"}),t.jsxs("form",{className:"login-form",onSubmit:b,noValidate:!0,children:[v&&t.jsxs("div",{className:"success-message",children:[t.jsx(M,{name:"check-circle",className:"w-5 h-5"}),t.jsxs("span",{children:["パスワードが更新されました。",t.jsx("br",{}),"新しいパスワードでログインしてください。"]})]}),t.jsx(Ue,{label:"新しいパスワード",type:"password",name:"newPassword",value:m,onChange:T=>w(T.target.value),onBlur:T=>g(T.target.value),placeholder:"8文字以上",required:!0,error:p.newPassword}),t.jsx(Ue,{label:"パスワード確認",type:"password",name:"confirmPassword",value:f,onChange:T=>x(T.target.value),onBlur:T=>h(T.target.value),placeholder:"もう一度入力してください",required:!0,error:p.confirmPassword}),t.jsx("button",{type:"submit",className:"login-button",children:"パスワードを更新"})]})]})})})},Ed=e=>{var O,ae,fe,Ne,Ae,da,ua,ra,z,W,ce,se;const[a]=Ie(),[l,n]=u.useState(""),[r,s]=u.useState(""),[i,o]=u.useState(""),[c,d]=u.useState(""),[m,f]=u.useState(""),[p,v]=u.useState(!1),[j,y]=u.useState({}),w=e.signupName!==void 0?e.signupName:l,x=e.signupEmail!==void 0?e.signupEmail:r,g=e.signupPhone!==void 0?e.signupPhone:i,h=e.signupPassword!==void 0?e.signupPassword:c,b=e.signupPasswordConfirm!==void 0?e.signupPasswordConfirm:m,N=e.agreeToTerms!==void 0?e.agreeToTerms:p,C={name:((O=e.errors)==null?void 0:O.name)||((ae=e.signupErrors)==null?void 0:ae.name)||j.name,email:((fe=e.errors)==null?void 0:fe.email)||((Ne=e.signupErrors)==null?void 0:Ne.email)||j.email,phone:((Ae=e.errors)==null?void 0:Ae.phone)||((da=e.signupErrors)==null?void 0:da.phone)||j.phone,password:((ua=e.errors)==null?void 0:ua.password)||((ra=e.signupErrors)==null?void 0:ra.password)||j.password,passwordConfirm:((z=e.errors)==null?void 0:z.password_confirmation)||((W=e.signupErrors)==null?void 0:W.passwordConfirm)||j.passwordConfirm,agreeToTerms:((ce=e.errors)==null?void 0:ce.agreeToTerms)||((se=e.signupErrors)==null?void 0:se.agreeToTerms)||j.agreeToTerms},R=D=>{if(!D)return"お名前を入力してください";if(D.length<2)return"お名前は2文字以上で入力してください"},k=D=>{if(!D)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D))return"正しいメールアドレスを入力してください"},L=D=>{if(D&&!/^0\d{9,10}$/.test(D))return"正しい電話番号を入力してください"},T=D=>{if(!D)return"パスワードを入力してください";if(D.length<8)return"パスワードは8文字以上で入力してください"},A=(D,K)=>{if(!D)return"パスワード確認を入力してください";if(D!==K)return"パスワードが一致しません"},B=D=>{e.onNameChange?e.onNameChange(D):(n(D),y(K=>({...K,name:void 0})))},_=D=>{e.onEmailChange?e.onEmailChange(D):(s(D),y(K=>({...K,email:void 0})))},Q=D=>{const K=D.replace(/[^0-9]/g,"");e.onPhoneChange?e.onPhoneChange(K):(o(K),y(me=>({...me,phone:void 0})))},Y=D=>{e.onPasswordChange?e.onPasswordChange(D):(d(D),y(K=>({...K,password:void 0})))},S=D=>{e.onPasswordConfirmChange?e.onPasswordConfirmChange(D):(f(D),y(K=>({...K,passwordConfirm:void 0})))},H=D=>{e.onAgreeToTermsChange?e.onAgreeToTermsChange(D):(v(D),y(K=>({...K,agreeToTerms:void 0})))},E=D=>{if(e.onNameBlur)e.onNameBlur(D);else{const K=R(D);y(me=>({...me,name:K}))}},q=D=>{if(e.onEmailBlur)e.onEmailBlur(D);else{const K=k(D);y(me=>({...me,email:K}))}},$=D=>{if(e.onPhoneBlur)e.onPhoneBlur(D);else{const K=L(D);y(me=>({...me,phone:K}))}},J=D=>{if(e.onPasswordBlur)e.onPasswordBlur(D);else{const K=T(D);y(me=>({...me,password:K}))}},Z=D=>{if(e.onPasswordConfirmBlur)e.onPasswordConfirmBlur(D);else{const K=A(D,h);y(me=>({...me,passwordConfirm:K}))}},F=D=>{if(D.preventDefault(),e.onSubmit)e.onSubmit(D);else{const K=R(w),me=k(x),qe=L(g),La=T(h),Ma=A(b,h),ie=N?void 0:"利用規約に同意してください";if(K||me||qe||La||Ma||ie){y({name:K,email:me,phone:qe,password:La,passwordConfirm:Ma,agreeToTerms:ie});return}console.log("Signup attempt:",{signupName:w,signupEmail:x,signupPhone:g})}},G=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const me=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${me}/login`}};return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"新規アカウント作成"}),t.jsx("p",{className:"login-subtitle",children:"アカウント情報を入力してください"}),t.jsxs("form",{className:"login-form",onSubmit:F,noValidate:!0,children:[t.jsx(Ue,{label:"お名前",type:"text",name:"name",value:w,onChange:D=>B(D.target.value),onBlur:D=>E(D.target.value),placeholder:"山田 太郎",required:!0,error:C.name}),t.jsx(Ue,{label:"メールアドレス",type:"email",name:"email",value:x,onChange:D=>_(D.target.value),onBlur:D=>q(D.target.value),placeholder:"example@email.com",required:!0,error:C.email}),t.jsx(Ue,{label:"電話番号",type:"tel",name:"phone",value:g,onChange:D=>Q(D.target.value),onBlur:D=>$(D.target.value),placeholder:"09012345678",error:C.phone}),t.jsx(Ue,{label:"パスワード",type:"password",name:"password",value:h,onChange:D=>Y(D.target.value),onBlur:D=>J(D.target.value),placeholder:"8文字以上",required:!0,error:C.password}),t.jsx(Ue,{label:"パスワード確認",type:"password",name:"password_confirmation",value:b,onChange:D=>S(D.target.value),onBlur:D=>Z(D.target.value),placeholder:"もう一度入力してください",required:!0,error:C.passwordConfirm}),t.jsxs("div",{children:[t.jsxs("label",{className:"remember-me",children:[t.jsx(Ht,{name:"agreeToTerms",checked:N,onChange:D=>H(D.target.checked)}),t.jsx("span",{children:"利用規約に同意する"})]}),C.agreeToTerms&&t.jsxs("div",{style:{color:"var(--color-error-600)",fontSize:"var(--font-size-xs)",marginTop:"var(--spacing-1)",display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),C.agreeToTerms]})]}),t.jsx("button",{type:"submit",className:"login-button",children:"登録内容を確認"}),t.jsx("div",{style:{textAlign:"center",marginTop:"var(--spacing-4)"},children:t.jsx("a",{href:"#",onClick:D=>{D.preventDefault(),G()},style:{color:"var(--color-primary-600)",textDecoration:"none",fontSize:"var(--font-size-sm)"},children:"すでにアカウントをお持ちの方"})})]})]})})})},Dd=e=>{const[a]=Ie(),l=e.signupName||"サンプル 太郎",n=e.signupEmail||"sample@example.com",r=e.signupPhone||"",s=()=>{e.onConfirm?e.onConfirm():(console.log("Signup confirmed:",{signupName:l,signupEmail:n,signupPhone:r}),typeof window<"u"&&(window.location.href="/signup-complete"))},i=()=>{e.onBack?e.onBack():typeof window<"u"&&(window.location.href="/signup")};return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"登録内容の確認"}),t.jsx("p",{className:"login-subtitle",children:"以下の内容で登録します"}),t.jsxs("div",{className:"login-form",children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",padding:"var(--spacing-4)",background:"var(--color-neutral-50)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"お名前"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:l})]}),t.jsx("div",{style:{height:"1px",background:"var(--color-neutral-200)"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"メールアドレス"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:n})]}),r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"1px",background:"var(--color-neutral-200)"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"電話番号"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:r})]})]})]}),t.jsx("button",{type:"button",className:"login-button",onClick:s,children:"登録する"}),t.jsx("button",{type:"button",className:"login-button",onClick:i,style:{background:"var(--color-neutral-200)",color:"var(--color-neutral-700)",marginTop:"var(--spacing-2)"},children:"内容を修正する"})]})]})})})},Bd=e=>{const[a]=Ie(),l=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const s=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${s}/login`}};return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--spacing-6)"},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--spacing-4) auto"},children:t.jsx(M,{name:"check-circle",style:{width:"80px",height:"80px",color:"#10b981"}})}),t.jsx("h1",{className:"login-title",children:"アカウント登録完了"}),t.jsx("p",{className:"login-subtitle",children:"ご登録いただきありがとうございます。"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("button",{type:"button",className:"login-button",onClick:l,style:{margin:0},children:"ログイン画面へ"})})]})})})},_d=({onNavigate:e,hideNavigation:a})=>{const[l]=Ie(),n=()=>{e?e("dashboard"):typeof window<"u"&&(window.location.href="/dashboard")};return t.jsx("div",{className:l==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"お探しのページは見つかりませんでした"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"お探しのページは存在しないか、移動または削除された可能性があります。"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx("button",{type:"button",className:"login-button",onClick:n,style:{margin:0},children:"ホームに戻る"}),t.jsx("button",{type:"button",className:"login-button",onClick:()=>window.history.back(),style:{margin:0,background:"var(--color-neutral-200)",color:"var(--color-neutral-700)"},children:"前のページに戻る"})]})]})})})},Ld=({onNavigate:e,hideNavigation:a})=>{const[l]=Ie(),n=()=>{e?e("dashboard"):typeof window<"u"&&(window.location.href="/dashboard")};return t.jsx("div",{className:l==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"予期せぬ不具合が発生しました"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"しばらく時間をおいてから、もう一度お試しください。"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:t.jsx("button",{type:"button",className:"login-button",onClick:n,style:{margin:0},children:"ホームに戻る"})})]})})})},Hd=({hideNavigation:e})=>{const[a]=Ie();return t.jsx("div",{className:a==="sp"?"force-mobile":"",children:t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx(M,{name:"cog",style:{width:"32px",height:"32px",color:"rgb(21, 52, 109)"}}),t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"メンテナンス中"})]}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left",marginBottom:"var(--spacing-3)"},children:"現在、システムメンテナンスを実施しております。"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"ご不便をおかけして申し訳ございませんが、しばらくお待ちください。"})]}),t.jsxs("div",{style:{background:"var(--color-neutral-50)",padding:"var(--spacing-4)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",marginBottom:"var(--spacing-2)"},children:t.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"メンテナンス期間"})}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)"},children:"2024年10月14日 2:00 〜 6:00（予定）"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:t.jsx("button",{type:"button",className:"login-button",onClick:()=>window.location.reload(),style:{margin:0},children:"ページを更新"})})]})})})},Le=({children:e,viewMode:a,currentPage:l,onNavigate:n,onLogout:r,userName:s="ゲスト",sidebarMenuItems:i,unreadCount:o=0,showNotificationDropdown:c=!1,setShowNotificationDropdown:d=()=>{},showUserMenu:m=!1,setShowUserMenu:f=()=>{},isHamburgerOpen:p=!1,setIsHamburgerOpen:v=()=>{},sidebarCollapsed:j=!1,setSidebarCollapsed:y=()=>{},notificationRef:w,notifications:x=[],onMarkNotificationAsRead:g=()=>{},onMarkAllNotificationsAsRead:h=()=>{},onDismissNotification:b=()=>{}})=>{const C=i!==void 0?i:[{id:"dashboard",label:"ホーム",icon:"home",page:"dashboard"}],R=k=>{switch(k){case"warning":return"warning";case"success":return"check";case"danger":return"close";case"info":default:return"info"}};return t.jsxs("div",{className:"dashboard-container",children:[t.jsxs("div",{className:"dashboard-header",children:[t.jsx("div",{className:"dashboard-logo",onClick:()=>n("dashboard"),style:{cursor:"pointer"},children:"AppName"}),t.jsx("div",{className:"dashboard-user",children:a==="sp"?t.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:"8px"},children:[t.jsxs("button",{style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",color:"white",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>n("notifications"),children:[t.jsx(M,{name:"bell",style:{width:"20px",height:"20px"}}),o>0&&t.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",minWidth:"20px",height:"20px",background:"#ef4444",color:"#ffffff",fontSize:"12px",fontWeight:"bold",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid rgb(21, 52, 109)"},children:o})]}),t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"24px",color:"white",padding:"4px 8px"},onClick:()=>v(!p),children:"☰"}),p&&t.jsxs("div",{className:`sp-hamburger-menu ${p?"open":""}`,children:[C.map(k=>t.jsxs("div",{className:"sp-hamburger-item",onClick:()=>{v(!1),n(k.page)},children:[t.jsx(M,{name:k.icon,className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),k.label]},k.id)),t.jsxs("div",{className:"sp-hamburger-item",onClick:()=>{v(!1),r?r():n("login")},children:[t.jsx(M,{name:"arrow-right",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ログアウト"]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{ref:w,style:{position:"relative"},children:[t.jsxs("button",{style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",color:"white",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>d(!c),children:[t.jsx(M,{name:"bell",style:{width:"20px",height:"20px"}}),o>0&&t.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",minWidth:"20px",height:"20px",background:"#ef4444",color:"#ffffff",fontSize:"12px",fontWeight:"bold",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid rgb(21, 52, 109)"},children:o})]}),c&&x.length>0&&t.jsxs("div",{className:"notification-dropdown",children:[t.jsxs("div",{className:"notification-dropdown-header",children:[t.jsx("h3",{className:"notification-dropdown-title",children:"通知"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[x.some(k=>!k.read)&&t.jsxs("button",{className:"notification-action-btn",onClick:h,style:{fontSize:"var(--font-size-xs)"},children:[t.jsx(M,{name:"check",className:"w-4 h-4"}),"全て既読にする"]}),t.jsx("button",{className:"notification-close-btn",onClick:()=>d(!1),children:t.jsx(M,{name:"close",className:"w-4 h-4"})})]})]}),t.jsx("div",{className:"notification-dropdown-content",children:x.map(k=>t.jsxs("div",{className:`notification-item ${k.read?"":"unread"}`,onClick:()=>!k.read&&g(k.id),style:{cursor:k.read?"default":"pointer"},children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx(M,{name:R(k.type),className:"w-5 h-5 notification-icon"}),!k.read&&t.jsx("span",{style:{position:"absolute",top:"-2px",right:"-2px",width:"8px",height:"8px",background:"#ef4444",borderRadius:"50%",border:"1px solid white"}})]}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:k.title}),t.jsx("span",{className:"notification-time",children:k.time})]}),t.jsx("p",{className:"notification-item-message",children:k.message}),t.jsxs("div",{className:"notification-item-actions",children:[!k.read&&t.jsxs("button",{className:"notification-action-btn",onClick:L=>{L.stopPropagation(),g(k.id)},children:[t.jsx(M,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",onClick:L=>{L.stopPropagation(),b(k.id)},children:[t.jsx(M,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]},k.id))}),t.jsx("div",{className:"notification-dropdown-footer",children:t.jsx("a",{className:"notification-footer-link",onClick:()=>{d(!1),n("notifications")},style:{cursor:"pointer"},children:"すべての通知を表示"})})]})]}),t.jsxs("button",{className:"user-button",onClick:()=>f(!m),children:[t.jsx(M,{name:"user",className:"w-5 h-5"}),t.jsx("span",{children:s}),t.jsx(M,{name:"chevron-down",className:"w-4 h-4"})]}),m&&t.jsx("div",{className:"user-dropdown",children:t.jsxs("button",{className:"user-dropdown-item",onClick:()=>{f(!1),r?r():n("login")},children:[t.jsx(M,{name:"arrow-right",className:"w-4 h-4"}),"ログアウト"]})})]})})]}),t.jsxs("div",{className:"dashboard-body",children:[a==="pc"&&t.jsxs("aside",{className:`dashboard-sidebar ${j?"collapsed":""}`,children:[t.jsx("button",{className:"sidebar-toggle",onClick:()=>y(!j),"aria-label":j?"サイドバーを展開":"サイドバーを最小化",children:t.jsx(M,{name:j?"chevron-right":"chevron-left",className:"w-5 h-5"})}),t.jsx("nav",{className:"sidebar-nav",children:t.jsx("ul",{className:"sidebar-nav",children:C.map(k=>t.jsx("li",{className:"sidebar-nav-item",children:t.jsxs("div",{className:"sidebar-nav-link",onClick:()=>n(k.page),style:{cursor:"pointer"},children:[t.jsx(M,{name:k.icon,className:"w-5 h-5"}),t.jsx("span",{children:k.label})]})},k.id))})})]}),t.jsx("div",{className:"dashboard-content",children:e})]}),t.jsx("footer",{className:"page-footer",children:t.jsxs("div",{className:"footer-content",style:{display:"flex",flexDirection:a==="sp"?"column":"row",justifyContent:a==="sp"?"center":"space-between",alignItems:"center",gap:a==="sp"?"var(--spacing-2)":0,flexWrap:"nowrap"},children:[t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",fontSize:"var(--font-size-sm)"},children:[t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),n("qna")},style:{color:"white",textDecoration:"none"},children:"Q&A"}),t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),n("privacy")},style:{color:"white",textDecoration:"none"},children:"プライバシーポリシー"}),t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),n("terms")},style:{color:"white",textDecoration:"none"},children:"利用規約"}),t.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),n("commercial")},style:{color:"white",textDecoration:"none"},children:"特商法表記"})]}),t.jsx("div",{className:"footer-copyright",children:"© 2025 AppName. All rights reserved."})]})})]})},Od=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const n=u.useRef(null),[r]=Ie(),[s,i]=u.useState(!1),[o,c]=u.useState(!1),[d,m]=u.useState(!1),[f,p]=u.useState(!1),v=h=>{if(a)a(h);else{const C=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",k={dashboard:`${C}/dashboard`,"data-list":`${C}/data/list`,statistics:`${C}/statistics`,settings:`${C}/settings`,notifications:`${C}/notifications`,login:`${C}/login`,qna:`${C}/qna`,privacy:`${C}/privacy`,terms:`${C}/terms`,commercial:`${C}/commercial`}[h]||`${C}/${h}`;typeof window<"u"&&(window.location.href=k)}},j=()=>{if(l){l();return}v("login")},[y,w]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),x=h=>{w(b=>b.map(N=>N.id===h?{...N,read:!0}:N))},g=()=>{w(h=>h.map(b=>({...b,read:!0})))};return t.jsx("div",{className:r==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:r,currentPage:"commercial",onNavigate:v,unreadCount:y.filter(h=>!h.read).length,showNotificationDropdown:s,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:m,sidebarCollapsed:f,setSidebarCollapsed:p,notificationRef:n,notifications:y,onMarkNotificationAsRead:x,onMarkAllNotificationsAsRead:g,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:"var(--spacing-12)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:r==="sp"?"flex-start":"center",marginBottom:r==="sp"?"var(--spacing-2)":0,flexDirection:r==="sp"?"column":"row"},children:[t.jsx("h2",{className:"page-title",style:{alignSelf:r==="sp"?"flex-start":void 0},children:"特定商取引法に基づく表記"}),r!=="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),r==="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid var(--color-neutral-200)"},children:t.jsxs("tbody",{children:[t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",width:"30%",verticalAlign:"top"},children:"販売事業者名"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"株式会社サンプル"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"代表者名"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"代表取締役 山田太郎"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"所在地"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["〒150-0000",t.jsx("br",{}),"東京都渋谷区〇〇 1-2-3 サンプルビル 5F"]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"電話番号"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["03-1234-5678",t.jsx("br",{}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"※お問い合わせはメールにてお願いいたします"})]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"メールアドレス"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"support@example.com"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"運営統括責任者"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"山田花子"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsxs("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:["追加手数料等の",t.jsx("br",{}),"追加料金"]}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"サービス利用料以外に、振込手数料等がかかる場合があります。詳細は各プランページをご確認ください。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsxs("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:["交換および返品",t.jsx("br",{}),"（返金ポリシー）"]}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"サービスの性質上、お客様都合による返金はお受けできません。ただし、サービス提供に不備があった場合は、個別に対応させていただきます。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"引渡時期"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"お申し込み後、即時ご利用いただけます。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"受付可能な決済手段"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:t.jsxs("ul",{style:{margin:0,paddingLeft:0,listStylePosition:"inside"},children:[t.jsx("li",{children:"クレジットカード（VISA、Mastercard、JCB、American Express）"}),t.jsx("li",{children:"銀行振込"}),t.jsx("li",{children:"コンビニ決済"})]})})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"決済期間"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["クレジットカード決済の場合は即時決済となります。",t.jsx("br",{}),"銀行振込、コンビニ決済の場合は、お申し込み後7日以内にお支払いください。"]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"販売価格"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"各プランページに記載の金額（税込）となります。"})]}),t.jsxs("tr",{children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"サービス提供期間"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"月額プランの場合は、毎月自動更新されます。解約のお申し出がない限り、継続してサービスを提供いたします。"})]})]})}),t.jsxs("section",{style:{marginTop:"var(--spacing-6)",marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"お問い合わせ"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本表記に関するお問い合わせは、以下の連絡先までお願いいたします。"}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",padding:"var(--spacing-4)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"Eメールアドレス: support@example.com"}),t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"受付時間: 平日 9:00〜18:00（土日祝日を除く）"})]})]})]})})]})})})})},Vd=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const n=u.useRef(null),[r]=Ie(),[s,i]=u.useState(!1),[o,c]=u.useState(!1),[d,m]=u.useState(!1),[f,p]=u.useState(!1),v=h=>{if(a)a(h);else{const C=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",k={dashboard:`${C}/dashboard`,"data-list":`${C}/data/list`,statistics:`${C}/statistics`,settings:`${C}/settings`,notifications:`${C}/notifications`,login:`${C}/login`,qna:`${C}/qna`,privacy:`${C}/privacy`,terms:`${C}/terms`,commercial:`${C}/commercial`}[h]||`${C}/${h}`;typeof window<"u"&&(window.location.href=k)}},j=()=>{if(l){l();return}v("login")},[y,w]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),x=h=>{w(b=>b.map(N=>N.id===h?{...N,read:!0}:N))},g=()=>{w(h=>h.map(b=>({...b,read:!0})))};return t.jsx("div",{className:r==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:r,currentPage:"terms",onNavigate:v,unreadCount:y.filter(h=>!h.read).length,showNotificationDropdown:s,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:m,sidebarCollapsed:f,setSidebarCollapsed:p,notificationRef:n,notifications:y,onMarkNotificationAsRead:x,onMarkAllNotificationsAsRead:g,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{display:"flex",justifyContent:"space-between",alignItems:r==="sp"?"flex-start":"center",flexDirection:r==="sp"?"column":"row",gap:r==="sp"?"var(--spacing-2)":0,marginBottom:"var(--spacing-12)"},children:[t.jsx("h2",{className:"page-title",children:"利用規約"}),t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第1条（適用）"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本規約は、当社が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って、本サービスをご利用いただきます。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第2条（利用登録）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。"}),t.jsxs("li",{style:{marginBottom:"var(--spacing-2)"},children:["当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。",t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)",marginTop:"var(--spacing-2)"},children:[t.jsx("li",{children:"利用登録の申請に際して虚偽の事項を届け出た場合"}),t.jsx("li",{children:"本規約に違反したことがある者からの申請である場合"}),t.jsx("li",{children:"その他、当社が利用登録を相当でないと判断した場合"})]})]})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第3条（ユーザーIDおよびパスワードの管理）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第4条（禁止事項）"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"法令または公序良俗に違反する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"犯罪行為に関連する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスによって得られた情報を商業的に利用する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社のサービスの運営を妨害するおそれのある行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"不正アクセスをし、またはこれを試みる行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"他のユーザーに関する個人情報等を収集または蓄積する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"不正な目的を持って本サービスを利用する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"他のユーザーに成りすます行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"その他、当社が不適切と判断する行為"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第5条（本サービスの提供の停止等）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsxs("li",{style:{marginBottom:"var(--spacing-2)"},children:["当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。",t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)",marginTop:"var(--spacing-2)"},children:[t.jsx("li",{children:"本サービスにかかるコンピュータシステムの保守点検または更新を行う場合"}),t.jsx("li",{children:"地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合"}),t.jsx("li",{children:"コンピュータまたは通信回線等が事故により停止した場合"}),t.jsx("li",{children:"その他、当社が本サービスの提供が困難と判断した場合"})]})]}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第6条（免責事項）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第7条（サービス内容の変更等）"}),t.jsx("p",{children:"当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第8条（利用規約の変更）"}),t.jsx("p",{children:"当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。"})]})]})})]})})})})},$d=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const[n]=Ie(),r=u.useRef(null),[s,i]=u.useState(!1),[o,c]=u.useState(!1),[d,m]=u.useState(!1),[f,p]=u.useState(!1),v=h=>{if(a)a(h);else{const C=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",k={dashboard:`${C}/dashboard`,"data-list":`${C}/data/list`,statistics:`${C}/statistics`,settings:`${C}/settings`,notifications:`${C}/notifications`,login:`${C}/login`,qna:`${C}/qna`,privacy:`${C}/privacy`,terms:`${C}/terms`,commercial:`${C}/commercial`}[h]||`${C}/${h}`;typeof window<"u"&&(window.location.href=k)}},j=()=>{if(l){l();return}v("login")},[y,w]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),x=h=>{w(b=>b.map(N=>N.id===h?{...N,read:!0}:N))},g=()=>{w(h=>h.map(b=>({...b,read:!0})))};return t.jsx("div",{className:n==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:n,currentPage:"privacy",onNavigate:v,unreadCount:y.filter(h=>!h.read).length,showNotificationDropdown:s,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:m,sidebarCollapsed:f,setSidebarCollapsed:p,notificationRef:r,notifications:y,onMarkNotificationAsRead:x,onMarkAllNotificationsAsRead:g,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:"var(--spacing-12)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:n==="sp"?"var(--spacing-2)":0,flexDirection:n==="sp"?"column":"row",alignItems:n==="sp"?"flex-start":"center"},children:[t.jsx("h2",{className:"page-title",children:"プライバシーポリシー"}),n!=="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),n==="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("section",{style:{marginBottom:"var(--spacing-6)"},children:t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、お客様の個人情報について、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。本ポリシーは、当社がどのような個人情報を取得し、どのように利用・共有するか、お客様がどのようにご自身の個人情報を管理できるかをご説明するものです。"})}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"1. 事業者情報"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"事業者名: 株式会社サンプル"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"所在地: 東京都渋谷区〇〇 1-2-3"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"代表者: 代表取締役 山田太郎"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"連絡先: privacy@example.com"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"2. 取得する個人情報"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、以下の個人情報を取得します。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"氏名"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"メールアドレス"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"電話番号"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"住所"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"生年月日"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"クレジットカード情報"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"IPアドレス"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"Cookie情報"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ご利用履歴"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"3. 個人情報の利用目的"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、取得した個人情報を以下の目的で利用します。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの提供・運営のため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーからのお問い合わせに回答するため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等の案内のメールを送付するため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"メンテナンス、重要なお知らせなど必要に応じたご連絡のため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"サービスの改善や新サービスの開発等に役立てるため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"その他、上記利用目的に付随する目的のため"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"4. 個人情報の第三者提供"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示することはありません。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーの同意がある場合"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"法令に基づく場合"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"5. 個人情報の開示・訂正・削除"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、当社の保有する自己の個人情報について、開示、訂正、削除を請求することができます。その場合は、以下の窓口までご連絡ください。確認後、合理的な期間内に対応いたします。"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"個人情報お問い合わせ窓口: privacy@example.com"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"6. Cookie（クッキー）その他の技術の利用"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社のサービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当社による本サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化することができます。ただし、Cookieを無効化すると、本サービスの一部の機能をご利用いただけなくなる場合があります。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"7. プライバシーポリシーの変更"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"8. お問い合わせ"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。"}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",padding:"var(--spacing-4)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"Eメールアドレス: privacy@example.com"}),t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"受付時間: 平日 9:00〜18:00（土日祝日を除く）"})]})]})]})})]})})})})},Yj=({items:e,allowMultiple:a=!1})=>{const[l,n]=u.useState({}),r=s=>{n(i=>a?{...i,[s]:!i[s]}:{[s]:!i[s]})};return t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.map((s,i)=>t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>r(i),style:{width:"100%",padding:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"var(--color-neutral-white)",border:"none",borderBottom:i<e.length-1?"1px solid var(--color-neutral-200)":"none",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)",textAlign:"left",transition:"background-color 0.2s"},children:[t.jsx("span",{children:s.title}),t.jsx(M,{name:l[i]?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"var(--color-neutral-600)",transition:"transform 0.2s"}})]}),l[i]&&t.jsx("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",borderBottom:i<e.length-1?"1px solid var(--color-neutral-200)":"none",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",lineHeight:"var(--line-height-relaxed)"},children:s.content})]},i))})},Ud=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const n=u.useRef(null),[r]=Ie(),[s,i]=u.useState(!1),[o,c]=u.useState(!1),[d,m]=u.useState(!1),[f,p]=u.useState(!1),v=b=>{if(a)a(b);else{const R=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",L={dashboard:`${R}/dashboard`,"data-list":`${R}/data/list`,statistics:`${R}/statistics`,settings:`${R}/settings`,notifications:`${R}/notifications`,login:`${R}/login`,qna:`${R}/qna`,privacy:`${R}/privacy`,terms:`${R}/terms`,commercial:`${R}/commercial`}[b]||`${R}/${b}`;typeof window<"u"&&(window.location.href=L)}},j=()=>{if(l){l();return}v("login")},[y,w]=u.useState([{id:1,title:"新しいメッセージ",message:"よくある質問が更新されました",time:"2時間前",read:!1},{id:2,title:"システムお知らせ",message:"サポート体制の強化について",time:"1日前",read:!0}]),x=b=>{w(N=>N.map(C=>C.id===b?{...C,read:!0}:C))},g=()=>{w(b=>b.map(N=>({...N,read:!0})))},h=[{title:"Q. アカウントの登録方法を教えてください",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"アカウント登録は以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"トップページの「新規登録」ボタンをクリック"}),t.jsx("li",{children:"メールアドレスとパスワードを入力"}),t.jsx("li",{children:"利用規約に同意し、「登録」ボタンをクリック"}),t.jsx("li",{children:"確認メールが送信されるので、記載されたリンクをクリックして認証完了"})]})]})},{title:"Q. パスワードを忘れた場合はどうすればいいですか?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"パスワードを忘れた場合は、以下の手順でリセットできます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"ログインページの「パスワードをお忘れですか?」リンクをクリック"}),t.jsx("li",{children:"登録したメールアドレスを入力"}),t.jsx("li",{children:"パスワードリセット用のメールが送信されます"}),t.jsx("li",{children:"メール内のリンクから新しいパスワードを設定"})]})]})},{title:"Q. データのエクスポートは可能ですか?",content:t.jsx("p",{children:"はい、可能です。データ一覧画面の「エクスポート」ボタンからCSV形式でデータをダウンロードできます。また、APIを利用してJSON形式でのデータ取得も可能です。"})},{title:"Q. アカウントを削除したい場合はどうすればいいですか?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"アカウント削除は以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"アカウント設定画面を開く"}),t.jsx("li",{children:"ページ最下部の「アカウントを削除」ボタンをクリック"}),t.jsx("li",{children:"確認ダイアログで「削除」を選択"})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)",color:"var(--color-danger-600)",fontWeight:"var(--font-weight-medium)"},children:"※ 削除したアカウントと関連データは復元できませんのでご注意ください。"})]})},{title:"Q. プランのアップグレード方法は?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"プランのアップグレードは以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"アカウント設定画面の「プラン管理」タブを開く"}),t.jsx("li",{children:"希望するプランを選択"}),t.jsx("li",{children:"支払い情報を入力し、「アップグレード」ボタンをクリック"})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"プランは即座に適用され、日割り計算で請求されます。"})]})},{title:"Q. サポートへの問い合わせ方法は?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"以下の方法でサポートチームへお問い合わせいただけます:"}),t.jsxs("ul",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"メール:"})," support@example.com"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"チャット:"})," 画面右下のチャットアイコンからリアルタイムサポート（平日9:00-18:00）"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"お問い合わせフォーム:"})," ヘルプセンターから送信可能"]})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"通常、1営業日以内に返信いたします。"})]})}];return t.jsx("div",{className:r==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:r,currentPage:"qna",onNavigate:v,unreadCount:y.filter(b=>!b.read).length,showNotificationDropdown:s,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:m,sidebarCollapsed:f,setSidebarCollapsed:p,notificationRef:n,notifications:y,onMarkNotificationAsRead:x,onMarkAllNotificationsAsRead:g,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:r==="sp"?"var(--spacing-6)":"var(--spacing-8)"},children:[t.jsx("h2",{className:"page-title",style:{marginBottom:"var(--spacing-2)"},children:"よくある質問"}),t.jsx("p",{className:"card-description",style:{fontSize:r==="sp"?"var(--font-size-sm)":void 0},children:"サービスに関するよくある質問をご覧いただけます"})]}),t.jsx("div",{className:"card-body",children:t.jsx(Yj,{items:h,allowMultiple:!1})})]})})})})},Wj=({field:e,data:a})=>{var n,r;const l=a[e.key];if(e.render)return e.render(l,a);if(l==null||l==="")return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});switch(e.type){case"currency":const s=typeof l=="string"?parseFloat(l):l;if(isNaN(s))return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});const i=e.decimals??0,o=s.toLocaleString("ja-JP",{minimumFractionDigits:i,maximumFractionDigits:i}),c=e.currencySymbol||"";return t.jsxs("span",{children:[c,o]});case"badge":const d=(n=e.badgeConfig)==null?void 0:n[l];return d?t.jsx("span",{className:`status-badge status-badge--${d.variant||"default"}`,children:d.label||l}):t.jsx("span",{children:String(l)});case"list":if(!Array.isArray(l)||l.length===0)return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});const m=((r=e.listConfig)==null?void 0:r.renderItem)||(p=>t.jsx("span",{children:String(p)}));return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-1)"},children:l.map((p,v)=>t.jsx(I.Fragment,{children:m(p)},v))});case"date":const f=typeof l=="string"?new Date(l):l;return!(f instanceof Date)||isNaN(f.getTime())?t.jsx("span",{children:String(l)}):t.jsx("span",{children:f.toLocaleDateString("ja-JP")});case"email":return t.jsx("a",{href:`mailto:${l}`,style:{color:"var(--color-primary-600)"},children:String(l)});case"url":return t.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-600)"},children:String(l)});case"text":default:return t.jsx("span",{children:String(l)})}},Ju=({title:e,subtitle:a,data:l,fields:n=[],sections:r=[],tabs:s=[],layout:i,headerConfig:o,actions:c=[],secondaryActions:d=[],backButton:m,loading:f=!1,error:p,emptyState:v,breadcrumbs:j,headerActions:y=[],stickyHeader:w=!1,className:x="",onLogout:g})=>{var O,ae,fe,Ne,Ae,da,ua,ra;const[h,b]=u.useState("pc"),[N,C]=u.useState(()=>{const z=new Set;return r.forEach(W=>{(!W.collapsible||W.defaultCollapsed===!1)&&z.add(W.id)}),z}),R=z=>{const se=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",K={dashboard:`${se}/dashboard`,"data-list":`${se}/data/list`,statistics:`${se}/statistics`,settings:`${se}/settings`,notifications:`${se}/notifications`,login:`${se}/login`,qna:`${se}/qna`,privacy:`${se}/privacy`,terms:`${se}/terms`,commercial:`${se}/commercial`}[z]||`${se}/${z}`;window.location.href=K},k=()=>{if(g){g();return}R("login")},[L,T]=u.useState(()=>{const z=s.filter(W=>!W.visible||W.visible(l));return z.length>0?z[0].id:""}),[A,B]=u.useState({show:!1}),_=z=>{C(W=>{const ce=new Set(W);return ce.has(z)?ce.delete(z):ce.add(z),ce})},Q=z=>{z.confirm?B({show:!0,action:()=>z.onClick(l),config:z.confirm}):z.onClick(l)},Y=()=>{m!=null&&m.onClick?m.onClick():m!=null&&m.url?window.location.href=m.url:window.history.back()},S=(z,W)=>{z.path&&(W.preventDefault(),window.location.href=z.path)},H=u.useMemo(()=>r.filter(z=>!z.visible||z.visible(l)),[r,l]),E=u.useMemo(()=>n.filter(z=>!z.hidden&&(!z.visible||z.visible(l))),[n,l]),q=u.useMemo(()=>c.filter(z=>typeof z.visible=="function"?z.visible(l):z.visible!==!1),[c,l]),$=u.useMemo(()=>d.filter(z=>typeof z.visible=="function"?z.visible(l):z.visible!==!1),[d,l]),J=z=>{const W=typeof z.className=="function"?z.className(l[z.key],l):z.className||"",ce=z.width?`detail-field--${z.width}`:"";return t.jsxs("div",{className:`detail-field ${ce} ${W}`,children:[t.jsxs("dt",{className:`detail-field__label ${z.labelClassName||""}`,children:[z.label,z.tooltip&&t.jsx("span",{className:"detail-field__tooltip",title:z.tooltip,children:t.jsx(M,{name:"info",style:{width:"14px",height:"14px",marginLeft:"4px"}})})]}),t.jsx("dd",{className:`detail-field__value ${z.valueClassName||""}`,children:t.jsx(Wj,{field:z,data:l})})]},z.key)},Z=z=>{const W=N.has(z.id),ce=z.fields.filter(K=>!K.hidden&&(!K.visible||K.visible(l)));if(ce.length===0)return null;const se=z.columns||(i==null?void 0:i.columns)||2,D=z.layout==="grid"||(i==null?void 0:i.type)==="grid"?`detail-fields--grid detail-fields--cols-${se}`:"";return t.jsxs("div",{className:`detail-section ${z.className||""}`,children:[t.jsxs("div",{className:"detail-section__header",onClick:z.collapsible?()=>_(z.id):void 0,style:{cursor:z.collapsible?"pointer":"default"},children:[t.jsxs("div",{className:"detail-section__title-wrapper",children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"20px",height:"20px",marginRight:"var(--spacing-2)"}}),t.jsx("h3",{className:"detail-section__title",children:z.title})]}),z.collapsible&&t.jsx(M,{name:W?"chevron-up":"chevron-down",style:{width:"20px",height:"20px"}})]}),z.description&&t.jsx("p",{className:"detail-section__description",children:z.description}),W&&t.jsx("dl",{className:`detail-fields ${D}`,children:ce.map(J)})]},z.id)};if(f)return t.jsx("div",{className:h==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:h,currentPage:"data-detail",onNavigate:R,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:k,children:t.jsxs("div",{className:`dynamic-data-detail-page ${x}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:"読み込み中..."})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[t.jsx(M,{name:"refresh",style:{width:"48px",height:"48px",animation:"spin 1s linear infinite",color:"var(--color-primary-500)"}}),t.jsx("p",{style:{marginTop:"var(--spacing-4)",color:"var(--color-neutral-600)"},children:"データを読み込んでいます..."})]})]})})});if(p)return t.jsx("div",{className:h==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:h,currentPage:"data-detail",onNavigate:R,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:k,children:t.jsxs("div",{className:`dynamic-data-detail-page ${x}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:"エラー"})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[t.jsx(M,{name:"error",style:{width:"64px",height:"64px",color:"var(--color-error-500)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:"エラーが発生しました"}),t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:p.message}),p.retry&&t.jsxs("button",{className:"btn btn--primary",onClick:p.retry,children:[t.jsx(M,{name:"refresh",style:{width:"16px",height:"16px"}}),"再試行"]})]})]})})});if(!l||Object.keys(l).length===0)return t.jsx("div",{className:h==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:h,currentPage:"data-detail",onNavigate:R,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:k,children:t.jsxs("div",{className:`dynamic-data-detail-page ${x}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:(v==null?void 0:v.title)||"データが見つかりません"})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[(v==null?void 0:v.icon)&&t.jsx(M,{name:v.icon,style:{width:"64px",height:"64px",color:"var(--color-neutral-400)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:(v==null?void 0:v.title)||"データが見つかりません"}),(v==null?void 0:v.description)&&t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:v.description}),(v==null?void 0:v.action)&&t.jsx("button",{className:"btn btn--primary",onClick:v.action.onClick,children:v.action.label})]})]})})});const F=o!=null&&o.renderTitle?o.renderTitle(l):o!=null&&o.titleField?l[o.titleField]:e,G=typeof(o==null?void 0:o.subtitle)=="function"?o.subtitle(l):(o==null?void 0:o.subtitle)||a;return t.jsx("div",{className:h==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:h,currentPage:"data-detail",onNavigate:R,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},children:t.jsxs("div",{className:`dynamic-data-detail-page ${x}`,children:[j&&j.length>0&&t.jsx("nav",{className:"breadcrumbs",children:j.map((z,W)=>t.jsxs(I.Fragment,{children:[z.path?t.jsx("a",{href:z.path,className:"breadcrumb-link",onClick:ce=>S(z,ce),children:z.label}):t.jsx("span",{className:"breadcrumb-current",children:z.label}),W<j.length-1&&t.jsx(M,{name:"chevron-right",style:{width:"12px",height:"12px",margin:"0 var(--spacing-2)"}})]},W))}),t.jsxs("div",{className:`page-header ${w?"page-header--sticky":""}`,children:[t.jsxs("div",{className:"page-header__content",children:[m&&t.jsxs("button",{className:"btn btn--text detail-back-button",onClick:Y,children:[t.jsx(M,{name:m.icon||"arrow-left",style:{width:"16px",height:"16px"}}),m.label||"戻る"]}),t.jsxs("div",{className:"page-header__title-section",children:[(o==null?void 0:o.showAvatar)&&t.jsx("div",{className:"page-header__avatar",children:o.renderAvatar?o.renderAvatar(l):o.avatarField&&l[o.avatarField]&&t.jsx("img",{src:l[o.avatarField],alt:""})}),t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:F}),G&&t.jsx("p",{className:"page-subtitle",children:G}),(o==null?void 0:o.showStatus)&&o.statusField&&t.jsx("div",{style:{marginTop:"var(--spacing-2)"},children:(()=>{var se;const z=l[o.statusField],W=(se=o.statusBadgeConfig)==null?void 0:se[z],ce=(W==null?void 0:W.variant)||"default";return t.jsx("span",{className:`status-badge status-badge--${ce}`,children:(W==null?void 0:W.label)||z})})()})]})]})]}),t.jsxs("div",{className:"page-header__actions",children:[y.map((z,W)=>t.jsxs("button",{className:`btn btn--${z.variant||"secondary"}`,onClick:z.onClick,children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"16px",height:"16px"}}),z.label]},W)),$.map(z=>{const W=typeof z.disabled=="function"?z.disabled(l):z.disabled;return t.jsxs("button",{className:`btn btn--${z.variant||"secondary"}`,onClick:()=>Q(z),disabled:W||z.loading,title:z.tooltip,children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"16px",height:"16px"}}),z.label]},z.id)}),q.map(z=>{const W=typeof z.disabled=="function"?z.disabled(l):z.disabled;return t.jsxs("button",{className:`btn btn--${z.variant||"primary"}`,onClick:()=>Q(z),disabled:W||z.loading,title:z.tooltip,children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"16px",height:"16px"}}),z.label]},z.id)})]})]}),t.jsx("div",{className:"detail-content",children:s.length>0?t.jsxs("div",{className:"detail-tabs",children:[t.jsx("div",{className:"detail-tabs__header",children:s.filter(z=>!z.visible||z.visible(l)).map(z=>t.jsxs("button",{className:`detail-tabs__tab ${L===z.id?"detail-tabs__tab--active":""}`,onClick:()=>T(z.id),disabled:z.disabled,children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"16px",height:"16px"}}),z.label,z.badge&&t.jsx("span",{className:"detail-tabs__badge",children:typeof z.badge=="function"?z.badge(l):z.badge})]},z.id))}),t.jsx("div",{className:"detail-tabs__content",children:(O=s.find(z=>z.id===L))!=null&&O.renderContent?s.find(z=>z.id===L).renderContent(l):(fe=(ae=s.find(z=>z.id===L))==null?void 0:ae.sections)==null?void 0:fe.map(Z)})]}):t.jsx("div",{className:"dashboard-card",children:H.length>0?H.map(Z):E.length>0?t.jsx("dl",{className:`detail-fields ${(i==null?void 0:i.type)==="grid"?`detail-fields--grid detail-fields--cols-${i.columns||2}`:""}`,children:E.map(J)}):t.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-8)",color:"var(--color-neutral-500)"},children:"表示するフィールドがありません"})})}),t.jsx(Jf,{show:A.show,title:((Ne=A.config)==null?void 0:Ne.title)||"確認",message:((Ae=A.config)==null?void 0:Ae.message)||"この操作を実行してもよろしいですか？",confirmText:((da=A.config)==null?void 0:da.confirmText)||"実行",cancelText:((ua=A.config)==null?void 0:ua.cancelText)||"キャンセル",danger:((ra=A.config)==null?void 0:ra.variant)==="danger",onConfirm:()=>{var z;(z=A.action)==null||z.call(A),B({show:!1})},onClose:()=>B({show:!1})})]})})})},Gj=({field:e,value:a,error:l,onChange:n,onBlur:r,disabled:s=!1,readOnly:i=!1,formData:o={}})=>{if(e.visible&&!e.visible(o))return null;const c=s||e.disabled||e.conditionalDisabled&&e.conditionalDisabled(o),d=i||e.readOnly;if(e.render)return t.jsx("div",{className:e.wrapperClassName,children:e.render({value:a,onChange:n,onBlur:r,error:l})});switch(e.type){case"text":case"email":case"password":case"tel":case"url":case"number":case"date":case"datetime-local":case"time":case"month":case"week":case"search":return t.jsx(Ue,{type:e.type,label:e.label,name:e.name,id:e.name,value:a||"",onChange:f=>n(f.target.value),onBlur:r,placeholder:e.placeholder,required:e.required,disabled:c,readOnly:d,error:l,helper:e.helperText,min:e.min,max:e.max,step:e.step,maxLength:e.maxLength,pattern:e.pattern,autoComplete:e.autoComplete,autoFocus:e.autoFocus,inputMode:e.inputMode,className:e.className,fullWidth:e.width==="full",...e.attributes});case"textarea":return t.jsx(xb,{label:e.label,name:e.name,id:e.name,value:a||"",onChange:f=>n(f.target.value),onBlur:r,placeholder:e.placeholder,required:e.required,disabled:c,readOnly:d,error:l,helper:e.helperText,rows:e.rows||4,maxLength:e.maxLength,className:e.className,fullWidth:e.width==="full",...e.attributes});case"select":return t.jsx(bb,{label:e.label,name:e.name,id:e.name,value:e.multiple?Array.isArray(a)?a:[]:a||"",onChange:f=>{if(e.multiple){const p=Array.from(f.target.selectedOptions,v=>v.value);n(p)}else n(f.target.value)},onBlur:r,options:e.options||[],placeholder:e.placeholder,required:e.required,disabled:c,error:l,helper:e.helperText,className:e.className,fullWidth:e.width==="full",multiple:e.multiple,...e.attributes});case"multiselect":return t.jsx(bf,{label:e.label,name:e.name,value:Array.isArray(a)?a:[],options:e.options||[],onChange:n,onBlur:r,placeholder:e.placeholder,required:e.required,disabled:c,error:l,helper:e.helperText,className:e.className,fullWidth:e.width==="full"});case"checkbox":if(!e.options||e.options.length===0)return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c?"not-allowed":"pointer"},children:[t.jsx(Ht,{name:e.name,checked:!!a,onChange:f=>n(f.target.checked),onBlur:r,disabled:c,required:e.required,...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[e.label,e.required&&t.jsx("span",{style:{color:"#dc2626",marginLeft:"4px"},children:"*"})]})]}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",style:{marginLeft:"28px"},children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",style:{marginLeft:"28px"},children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});const m=Array.isArray(a)?a:[];return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:e.options.map(f=>t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c||f.disabled?"not-allowed":"pointer"},children:[t.jsx(Ht,{name:`${e.name}[]`,value:f.value,checked:m.includes(f.value),onChange:p=>{const v=p.target.checked?[...m,f.value]:m.filter(j=>j!==f.value);n(v)},onBlur:r,disabled:c||f.disabled,...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c||f.disabled?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[f.label,f.description&&t.jsx("span",{style:{display:"block",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)",marginTop:"2px"},children:f.description})]})]},f.value))}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"radio":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:(e.options||[]).map(f=>t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c||f.disabled?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e.name,value:f.value,checked:a===f.value,onChange:p=>n(p.target.value),onBlur:r,disabled:c||f.disabled,required:e.required,style:{width:"16px",height:"16px",cursor:c||f.disabled?"not-allowed":"pointer"},...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c||f.disabled?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[f.label,f.description&&t.jsx("span",{style:{display:"block",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)",marginTop:"2px"},children:f.description})]})]},f.value))}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"file":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("input",{type:"file",id:e.name,name:e.name,onChange:f=>{const p=f.target.files;e.multiple?n(p):n(p&&p.length>0?p[0]:null),setTimeout(()=>r(),0)},onBlur:r,accept:e.accept,multiple:e.multiple,disabled:c,required:e.required,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${l?"#dc2626":"rgb(209, 213, 219)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",fontFamily:"inherit",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"color":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("input",{type:"color",id:e.name,name:e.name,value:a||"#000000",onChange:f=>n(f.target.value),onBlur:r,disabled:c,required:e.required,style:{width:"100%",height:"40px",padding:"var(--spacing-1)",border:`1px solid ${l?"#dc2626":"rgb(209, 213, 219)"}`,borderRadius:"var(--radius-md)",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"range":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsxs("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:[e.label,t.jsxs("span",{style:{marginLeft:"var(--spacing-2)",color:"var(--color-neutral-500)",fontWeight:"normal"},children:["(",a||e.min||0,")"]})]}),t.jsx("input",{type:"range",id:e.name,name:e.name,value:a||e.min||0,onChange:f=>n(Number(f.target.value)),onBlur:r,min:e.min,max:e.max,step:e.step,disabled:c,required:e.required,style:{width:"100%",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"hidden":return t.jsx("input",{type:"hidden",name:e.name,value:a||"",...e.attributes});default:return console.warn(`Unsupported field type: ${e.type}`),null}};function Xj(e){const[a,l]=u.useState({}),[n,r]=u.useState(new Set),s=u.useRef({}),i=u.useCallback((y,w,x)=>{if(w.type==="async")return null;switch(w.type){case"required":if(y==null||y===""||typeof y=="string"&&!y.trim())return w.message;break;case"email":if(y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(y)))return w.message;break;case"min":case"minLength":if(typeof y=="string"&&y.length<w.value||typeof y=="number"&&y<w.value)return w.message;break;case"max":case"maxLength":if(typeof y=="string"&&y.length>w.value||typeof y=="number"&&y>w.value)return w.message;break;case"pattern":const h=new RegExp(w.value);if(y&&!h.test(String(y)))return w.message;break;case"numeric":if(y&&isNaN(Number(y)))return w.message;break;case"integer":if(y&&(!Number.isInteger(Number(y))||isNaN(Number(y))))return w.message;break;case"url":try{y&&new URL(y)}catch{return w.message}break;case"date":const b=new Date(y);if(y&&isNaN(b.getTime()))return w.message;break;case"dateAfter":if(y&&w.value){const N=new Date(y),C=new Date(w.value);if(N<=C)return w.message}break;case"dateBefore":if(y&&w.value){const N=new Date(y),C=new Date(w.value);if(N>=C)return w.message}break;case"fileSize":if(y){const N=y instanceof FileList?Array.from(y):[y];for(const C of N)if(C instanceof File&&C.size>w.value)return w.message}break;case"custom":if(w.validator&&!w.validator(y,x))return w.message;break;default:console.warn(`Unknown validation rule type: ${w.type}`)}return null},[]),o=u.useCallback((y,w,x)=>{const g=e[y];if(!g||g.length===0)return!0;for(const h of g){const b=i(w,h,x);if(b)return l(N=>({...N,[y]:b})),!1}return l(h=>{const b={...h};return delete b[y],b}),!0},[e,i]),c=u.useCallback(async(y,w,x)=>{const g=e[y];if(!g||g.length===0)return!0;const h=g.filter(b=>b.type==="async");return h.length===0?!0:(s.current[y]&&clearTimeout(s.current[y]),new Promise(b=>{const N=h[0].debounce??500;s.current[y]=setTimeout(async()=>{r(C=>new Set(C).add(y));try{for(const C of h){let R=!1;if(C.asyncValidator)try{R=await C.asyncValidator(w,x)}catch(k){console.error(`Async validation error for ${y}:`,k),R=!0}else if(C.endpoint)try{const k=new AbortController,L=setTimeout(()=>k.abort(),1e4),T=await fetch(C.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:w,fieldName:y,formData:x}),signal:k.signal});if(clearTimeout(L),T.ok){const A=await T.json();R=A.valid===!0,!R&&A.message&&(C.message=A.message)}else console.error(`API validation error for ${y}:`,T.statusText),R=!0}catch(k){console.error(`Network error during validation for ${y}:`,k),R=!0}if(!R){l(k=>({...k,[y]:C.message})),r(k=>{const L=new Set(k);return L.delete(y),L}),b(!1);return}}l(C=>{const R={...C};return delete R[y],R}),r(C=>{const R=new Set(C);return R.delete(y),R}),b(!0)}catch(C){console.error(`Unexpected error during async validation for ${y}:`,C),r(R=>{const k=new Set(R);return k.delete(y),k}),b(!0)}},N)}))},[e]),d=u.useCallback(y=>{const w={};let x=!0;return Object.keys(e).forEach(g=>{const h=e[g],b=y[g];for(const N of h){const C=i(b,N,y);if(C){w[g]=C,x=!1;break}}}),l(w),x},[e,i]),m=u.useCallback(y=>{l(w=>{const x={...w};return delete x[y],x})},[]),f=u.useCallback(()=>{l({})},[]),p=u.useCallback((y,w)=>{l(x=>({...x,[y]:w}))},[]),v=Object.keys(a).length>0,j=n.size>0;return{errors:a,validateField:o,validateFieldAsync:c,validateForm:d,clearError:m,clearAllErrors:f,setError:p,hasErrors:v,validatingFields:n,isValidating:j}}function Qj({initialData:e={},validation:a,onSubmit:l,onSuccess:n,onError:r}){const[s,i]=u.useState(e),[o,c]=u.useState(!1),[d,m]=u.useState(new Set),{errors:f,validateField:p,validateFieldAsync:v,validateForm:j,clearError:y,setError:w,hasErrors:x}=Xj(a),g=JSON.stringify(s)!==JSON.stringify(e),h=u.useCallback((A,B)=>{i(_=>({..._,[A]:B}))},[]),b=u.useCallback(A=>{i(B=>({...B,...A}))},[]),N=u.useCallback((A,B)=>{h(A,B),y(A)},[h,y]),C=u.useCallback(async A=>{m(B=>new Set(B).add(A)),p(A,s[A],s),await v(A,s[A],s)},[s,p,v]),R=u.useCallback((A,B)=>p(A,B,s),[s,p]),k=u.useCallback(()=>j(s),[s,j]),L=u.useCallback(async A=>{if(A&&A.preventDefault(),!k()){window.scrollTo({top:0,behavior:"smooth"});return}c(!0);try{await l(s),n==null||n()}catch(B){const _=B instanceof Error?B:new Error("Submit failed");r==null||r(_),console.error("Form submission error:",_)}finally{c(!1)}},[s,k,l,n,r]),T=u.useCallback(()=>{i(e),m(new Set)},[e]);return{formData:s,errors:f,isSubmitting:o,isDirty:g,hasErrors:x,setValue:h,setValues:b,handleChange:N,handleBlur:C,handleSubmit:L,resetForm:T,validateField:R,validateForm:k,clearError:y,setError:w}}const qd=({title:e,subtitle:a,fields:l=[],sections:n=[],validation:r,initialData:s={},errors:i={},isSubmitting:o=!1,onSubmit:c,onCancel:d,onDraftSave:m,onChange:f,submitButtonText:p="登録",cancelButtonText:v="キャンセル",showDraftButton:j=!0,draftButtonText:y="下書き保存",customActions:w=[],layout:x,validateOnBlur:g=!0,validateOnChange:h=!1,showInlineErrors:b=!0,showErrorSummary:N=!1,autoSaveInterval:C,warnOnUnsavedChanges:R=!1,formId:k="dynamic-form",className:L="",successMessage:T,readOnly:A=!1,loading:B=!1,breadcrumbs:_=[],headerActions:Q=[],onLogout:Y})=>{const[S,H]=u.useState("pc"),[E,q]=u.useState(new Set(n.filter(z=>z.defaultCollapsed).map(z=>z.id))),[$,J]=u.useState(!1),Z=z=>{const se=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",K={dashboard:`${se}/dashboard`,"data-list":`${se}/data/list`,statistics:`${se}/statistics`,settings:`${se}/settings`,notifications:`${se}/notifications`,login:`${se}/login`,qna:`${se}/qna`,privacy:`${se}/privacy`,terms:`${se}/terms`,commercial:`${se}/commercial`}[z]||`${se}/${z}`;window.location.href=K},F=()=>{if(Y){Y();return}Z("login")},G=Qj({initialData:s,validation:r,onSubmit:async z=>{const W=await c(z);W&&W.success&&(J(!0),setTimeout(()=>J(!1),3e3))},onError:z=>{console.error("Form submission error:",z)}});u.useEffect(()=>{i&&Object.keys(i).length>0&&Object.entries(i).forEach(([z,W])=>{G.setError(z,W)})},[i]),u.useEffect(()=>{if(!C||!m)return;const z=setInterval(()=>{G.isDirty&&!G.isSubmitting&&m(G.formData)},C);return()=>clearInterval(z)},[C,G.isDirty,G.isSubmitting,G.formData,m]),u.useEffect(()=>{if(!R)return;const z=W=>{G.isDirty&&(W.preventDefault(),W.returnValue="")};return window.addEventListener("beforeunload",z),()=>window.removeEventListener("beforeunload",z)},[R,G.isDirty]);const O=(z,W)=>{h?G.handleChange(z,W):(G.setValue(z,W),G.clearError(z)),f&&f(z,W,{...G.formData,[z]:W})},ae=z=>{g&&G.handleBlur(z)},fe=()=>{m&&m(G.formData)},Ne=z=>{q(W=>{const ce=new Set(W);return ce.has(z)?ce.delete(z):ce.add(z),ce})},Ae=z=>!z.width||z.width==="full"?"":{half:"form-field--half",third:"form-field--third","two-thirds":"form-field--two-thirds",quarter:"form-field--quarter"}[z.width]||"",da=z=>{const W=G.formData[z.name]??z.defaultValue??"",ce=b?G.errors[z.name]:void 0;return t.jsx("div",{className:`form-field ${Ae(z)}`,style:{gridColumn:z.width==="full"?"1 / -1":void 0},children:t.jsx(Gj,{field:z,value:W,error:ce,onChange:se=>O(z.name,se),onBlur:()=>ae(z.name),disabled:o||G.isSubmitting,readOnly:A,formData:G.formData})},z.name)},ua=z=>{if(z.visible&&!z.visible(G.formData))return null;const W=E.has(z.id);return t.jsxs("div",{className:`dashboard-card ${z.className||""}`,style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:W?0:"var(--spacing-4)",cursor:z.collapsible?"pointer":"default"},onClick:z.collapsible?()=>Ne(z.id):void 0,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"20px",height:"20px",color:"var(--color-primary-500)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:z.title})]}),z.collapsible&&t.jsx(M,{name:W?"chevron-down":"chevron-up",style:{width:"20px",height:"20px",color:"var(--color-neutral-500)",transition:"transform 0.2s"}})]}),z.description&&!W&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)",marginTop:"calc(var(--spacing-4) * -0.5)"},children:z.description}),!W&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:x!=null&&x.columns?`repeat(${x.columns}, 1fr)`:"1fr",gap:(x==null?void 0:x.gap)==="sm"?"var(--spacing-3)":(x==null?void 0:x.gap)==="lg"?"var(--spacing-6)":"var(--spacing-4)"},children:z.fields.map(da)})]},z.id)};if(B)return t.jsx("div",{className:S==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:S,currentPage:"data-form",onNavigate:Z,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:F,children:t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"400px"},children:t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid var(--color-neutral-200)",borderTopColor:"var(--color-primary-500)",borderRadius:0,animation:"spin 0.8s linear infinite"}})})})});const ra=o||G.isSubmitting;return t.jsx("div",{className:S==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:S,currentPage:"data-form",onNavigate:Z,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:F,children:t.jsxs("div",{className:`dashboard-content form-page ${L}`,children:[_.length>0&&t.jsx("nav",{style:{paddingBottom:"var(--spacing-3)",marginBottom:"var(--spacing-4)"},children:t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",flexWrap:"wrap"},children:_.map((z,W)=>t.jsxs(I.Fragment,{children:[z.path?t.jsxs("a",{href:"#",onClick:ce=>{ce.preventDefault(),d&&d()},style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-neutral-600)",textDecoration:"none",transition:"color 0.15s"},onMouseEnter:ce=>ce.currentTarget.style.color="var(--color-primary-600)",onMouseLeave:ce=>ce.currentTarget.style.color="var(--color-neutral-600)",children:[W===0&&t.jsx(M,{name:"table",style:{width:"16px",height:"16px"}}),t.jsx("span",{children:z.label})]}):t.jsx("span",{style:{color:"var(--color-neutral-900)",fontWeight:"var(--font-weight-medium)"},children:z.label}),W<_.length-1&&t.jsx(M,{name:"chevron-right",style:{width:"12px",height:"12px",color:"var(--color-neutral-400)"}})]},W))})}),t.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),a&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginTop:"var(--spacing-2)"},children:a})]}),Q.length>0&&t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:Q.map((z,W)=>t.jsxs("button",{type:"button",className:`btn btn--${z.variant||"secondary"}`,onClick:z.onClick,children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"16px",height:"16px"}}),z.label]},W))})]}),$&&T&&t.jsxs("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:0,marginBottom:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"check-circle",style:{width:"20px",height:"20px",color:"var(--color-success-600)"}}),t.jsx("span",{style:{color:"var(--color-success-700)",fontSize:"var(--font-size-sm)"},children:T})]}),N&&G.hasErrors&&t.jsxs("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-error-50)",border:"1px solid var(--color-error-200)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:[t.jsx(M,{name:"error",style:{width:"20px",height:"20px",color:"var(--color-error-600)"}}),t.jsx("h4",{style:{fontSize:"var(--font-size-md)",fontWeight:"var(--font-weight-bold)",color:"var(--color-error-700)",margin:0},children:"入力内容にエラーがあります"})]}),t.jsx("ul",{style:{margin:0,paddingLeft:"var(--spacing-5)",color:"var(--color-error-700)",fontSize:"var(--font-size-sm)"},children:Object.entries(G.errors).map(([z,W])=>t.jsx("li",{children:W},z))})]}),t.jsxs("form",{id:k,onSubmit:G.handleSubmit,noValidate:!0,children:[n.length>0?n.map(ua):t.jsx("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:t.jsx("div",{style:{display:"grid",gridTemplateColumns:x!=null&&x.columns?`repeat(${x.columns}, 1fr)`:"1fr",gap:(x==null?void 0:x.gap)==="sm"?"var(--spacing-3)":(x==null?void 0:x.gap)==="lg"?"var(--spacing-6)":"var(--spacing-4)"},children:l.map(da)})}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end",flexWrap:"wrap"},children:[d&&t.jsx("button",{type:"button",className:"btn btn--text",disabled:ra,onClick:d,children:v}),w.map((z,W)=>t.jsxs("button",{type:"button",className:`btn btn--${z.variant||"secondary"}`,disabled:z.disabled||ra,onClick:()=>z.onClick(G.formData),children:[z.icon&&t.jsx(M,{name:z.icon,style:{width:"16px",height:"16px"}}),z.label]},W)),j&&m&&!A&&t.jsxs("button",{type:"button",className:"btn btn--secondary",disabled:ra||!G.isDirty,onClick:fe,children:[t.jsx(M,{name:"file",style:{width:"16px",height:"16px"}}),y]}),!A&&t.jsx("button",{type:"submit",className:"btn btn--primary",disabled:ra,children:ra?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid white",borderTopColor:"transparent",borderRadius:0,animation:"spin 0.6s linear infinite"}}),"処理中..."]}):t.jsxs(t.Fragment,{children:[t.jsx(M,{name:"check",style:{width:"16px",height:"16px"}}),p]})})]})]})]})})})},Qi=()=>{const e=Kl(),a=Et(),l=u.useRef(null),[n,r]=Ie(),[s,i]=u.useState(!1),[o,c]=u.useState(!1),[d,m]=u.useState(!1),[f,p]=u.useState(!1),[v,j]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),y=e.pathname.includes("/edit"),w=y?"データ編集":"データ作成",x=y?"データ編集":"データ作成",g=[{id:"personal",title:"個人情報",description:"基本的な個人情報を入力してください",icon:"user",collapsible:!1,fields:[{name:"firstName",label:"名",type:"text",required:!0,width:"half",placeholder:"太郎"},{name:"lastName",label:"姓",type:"text",required:!0,width:"half",placeholder:"山田"},{name:"email",label:"メールアドレス",type:"email",required:!0,width:"full",placeholder:"example@email.com"},{name:"phone",label:"電話番号",type:"tel",width:"half",placeholder:"09012345678",pattern:"^[0-9]+$"},{name:"alternatePhone",label:"予備電話番号",type:"tel",width:"half",placeholder:"0312345678",pattern:"^[0-9]+$"}]},{id:"address",title:"住所情報",icon:"location",collapsible:!0,fields:[{name:"postalCode",label:"郵便番号",type:"text",placeholder:"1234567",width:"third",pattern:"^[0-9]{7}$"},{name:"prefecture",label:"都道府県",type:"select",required:!0,width:"two-thirds",placeholder:"選択してください",options:[{value:"tokyo",label:"東京都"},{value:"osaka",label:"大阪府"},{value:"kyoto",label:"京都府"},{value:"hokkaido",label:"北海道"}]},{name:"city",label:"市区町村",type:"text",required:!0,width:"half",placeholder:"渋谷区",maxLength:50},{name:"address1",label:"町名・番地",type:"text",required:!0,width:"half",placeholder:"道玄坂1-2-3",maxLength:50},{name:"address2",label:"建物名・部屋番号",type:"text",width:"full",placeholder:"〇〇ビル 4階",maxLength:50}]},{id:"employment",title:"職業情報",icon:"briefcase",collapsible:!0,defaultCollapsed:!0,fields:[{name:"employmentStatus",label:"雇用形態",type:"select",width:"half",options:[{value:"fulltime",label:"正社員"},{value:"parttime",label:"パート・アルバイト"},{value:"contract",label:"契約社員"},{value:"freelance",label:"フリーランス"},{value:"student",label:"学生"},{value:"unemployed",label:"無職"}]},{name:"occupation",label:"職種",type:"text",width:"half",placeholder:"ソフトウェアエンジニア",maxLength:30},{name:"companyName",label:"勤務先名",type:"text",width:"full",placeholder:"株式会社〇〇",maxLength:50},{name:"annualIncome",label:"年収",type:"text",width:"half",placeholder:"5000000",helperText:"税込の年収を入力してください",pattern:"^[0-9]+$",inputMode:"numeric"}]},{id:"preferences",title:"設定・希望",icon:"settings",collapsible:!0,fields:[{name:"skills",label:"スキル・得意分野",type:"checkbox",options:[{value:"programming",label:"プログラミング"},{value:"design",label:"デザイン"},{value:"marketing",label:"マーケティング"},{value:"management",label:"マネジメント"},{value:"sales",label:"営業"}]},{name:"workLocation",label:"希望勤務地",type:"multiselect",width:"full",options:[{value:"tokyo",label:"東京"},{value:"osaka",label:"大阪"},{value:"nagoya",label:"名古屋"},{value:"fukuoka",label:"福岡"},{value:"remote",label:"リモート"}],placeholder:"勤務地を選択してください",helperText:"複数選択可能です"},{name:"desiredSalary",label:"希望年収",type:"range",min:3e6,max:15e6,step:5e5,width:"full",helperText:"スライダーを動かして希望年収を選択してください"},{name:"availableStartDate",label:"就業可能日",type:"date",width:"half"},{name:"preferredContactTime",label:"希望連絡時間",type:"time",width:"half"}]},{id:"documents",title:"書類アップロード",icon:"file",collapsible:!0,defaultCollapsed:!0,fields:[{name:"resume",label:"履歴書",type:"file",accept:".pdf,.doc,.docx",width:"full",helperText:"PDF、Word形式（最大5MB）"},{name:"portfolio",label:"ポートフォリオ・作品",type:"file",multiple:!0,accept:"image/*,.pdf",width:"full",helperText:"画像またはPDF形式、複数選択可能（最大5MB）"},{name:"profilePhoto",label:"プロフィール写真",type:"file",accept:"image/*",width:"full",helperText:"JPG、PNG形式（最大2MB）"}]}],h={firstName:[{type:"required",message:"名は必須です"},{type:"minLength",value:1,message:"名を入力してください"}],lastName:[{type:"required",message:"姓は必須です"},{type:"minLength",value:1,message:"姓を入力してください"}],email:[{type:"required",message:"メールアドレスは必須です"},{type:"email",message:"有効なメールアドレスを入力してください"},{type:"async",asyncValidator:async A=>(await new Promise(_=>setTimeout(_,800)),!["test@example.com","admin@example.com","user@example.com"].includes(A.toLowerCase())),debounce:500,message:"このメールアドレスは既に使用されています"}],phone:[{type:"pattern",value:"^[0-9]+$",message:"電話番号は数字のみで入力してください"}],alternatePhone:[{type:"pattern",value:"^[0-9]+$",message:"電話番号は数字のみで入力してください"}],postalCode:[{type:"pattern",value:"^[0-9]{7}$",message:"郵便番号は7桁の数字で入力してください（例: 1234567）"}],prefecture:[{type:"required",message:"都道府県を選択してください"}],city:[{type:"required",message:"市区町村は必須です"},{type:"maxLength",value:50,message:"市区町村は50文字以内で入力してください"}],address1:[{type:"required",message:"町名・番地は必須です"},{type:"maxLength",value:50,message:"町名・番地は50文字以内で入力してください"}],address2:[{type:"maxLength",value:50,message:"建物名・部屋番号は50文字以内で入力してください"}],occupation:[{type:"maxLength",value:30,message:"職種は30文字以内で入力してください"}],companyName:[{type:"maxLength",value:50,message:"勤務先名は50文字以内で入力してください"}],annualIncome:[{type:"pattern",value:"^[0-9]+$",message:"年収は数字のみで入力してください"}],resume:[{type:"fileSize",value:5242880,message:"ファイルサイズは5MB以下にしてください"}],portfolio:[{type:"fileSize",value:5242880,message:"ファイルサイズは5MB以下にしてください"}],profilePhoto:[{type:"fileSize",value:2097152,message:"ファイルサイズは2MB以下にしてください"}]},b=A=>{j(B=>B.map(_=>_.id===A?{..._,read:!0}:_))},N=()=>{j(A=>A.map(B=>({...B,read:!0})))},C=A=>{const _={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[A]||`/pages/${A}`;a(_)},T={title:w,sections:g,validation:h,initialData:y?{firstName:"太郎",lastName:"山田",email:"taro.yamada@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"tokyo",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"fulltime",occupation:"ソフトウェアエンジニア",companyName:"株式会社サンプル",annualIncome:"6000000",skills:["programming","design"],workLocation:["tokyo","remote"],desiredSalary:6e6,availableStartDate:"2025-02-01",preferredContactTime:"14:00"}:{},onSubmit:async A=>(console.log("Form submitted:",A),new Promise(B=>{setTimeout(()=>{sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"データを登録しました"})),a("/pages/data/list"),B()},1e3)})),onDraftSave:async A=>{console.log("Draft saved:",A),sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"下書きを保存しました"})),a("/pages/data/list")},onChange:(A,B,_)=>{console.log(`Field ${A} changed to:`,B),console.log("All form data:",_)},breadcrumbs:[{label:"ホーム",path:"/"},{label:"データ一覧",path:"/pages/data/list"},{label:x}],submitButtonText:"登録",showDraftButton:!0,draftButtonText:"下書き保存",validateOnBlur:!0,showInlineErrors:!0,showErrorSummary:!0,warnOnUnsavedChanges:!0,layout:{columns:2,gap:"md",responsive:{tablet:2,mobile:1}}};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:n,onViewModeChange:r}),t.jsx(Le,{viewMode:n,currentPage:"data-form",onNavigate:C,unreadCount:v.filter(A=>!A.read).length,showNotificationDropdown:s,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:m,sidebarCollapsed:f,setSidebarCollapsed:p,notificationRef:l,notifications:v,onMarkNotificationAsRead:b,onMarkAllNotificationsAsRead:N,children:t.jsx(qd,{...T})})]})},Fj=()=>{Et();const[e,a]=u.useState("login"),[l,n]=u.useState(!1),[r,s]=u.useState(!1),i=u.useRef(null),[o,c]=u.useState(""),[d,m]=u.useState(""),[f,p]=u.useState(!1),[v,j]=u.useState(!1),[y,w]=u.useState(""),[x,g]=u.useState(""),[h,b]=u.useState(""),[N,C]=u.useState(null),[R,k]=u.useState(""),[L,T]=u.useState(""),[A,B]=u.useState(""),[_,Q]=u.useState(""),[Y,S]=u.useState(""),[H,E]=u.useState(!1),[q,$]=u.useState({email:"",password:""}),[J,Z]=u.useState(""),[F,G]=u.useState(!1),[O,ae]=u.useState(""),[fe,Ne]=u.useState(!1),[Ae,da]=u.useState({newPassword:"",confirmPassword:""}),[ua,ra]=u.useState({name:"",email:"",phone:"",password:"",passwordConfirm:"",agreeToTerms:""}),[z,W]=u.useState("pc"),[ce,se]=u.useState(!1),[D,K]=u.useState(!1),[me,qe]=u.useState({}),[La,Ma]=u.useState(!1);u.useEffect(()=>{const P=de=>{i.current&&!i.current.contains(de.target)&&s(!1)};if(r)return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[r]),u.useEffect(()=>{e==="data-edit"&&ea({title:"Webサイトリニューアル",description:"コーポレートサイトの全面リニューアルプロジェクト。レスポンシブデザイン対応とSEO最適化を実施します。",category:"web",status:"in-progress",priority:"high",tags:"Web, デザイン, SEO",startDate:"2024-09-15",endDate:"2024-12-31"})},[e]);const[ie,Ya]=u.useState([{id:1,type:"info",title:"システムアップデート",message:"新しい機能が追加されました",time:"2時間前",read:!1},{id:2,type:"success",title:"データ保存完了",message:"データが正常に保存されました",time:"5時間前",read:!1},{id:3,type:"warning",title:"メンテナンス予定",message:"明日の深夜にメンテナンスを実施します",time:"1日前",read:!0},{id:4,type:"error",title:"エラー発生",message:"一部の機能でエラーが発生しています",time:"2日前",read:!0}]),X=ie.filter(P=>!P.read).length,ne=P=>{Ya(de=>de.map(De=>De.id===P?{...De,read:!0}:De))},ge=()=>{Ya(P=>P.map(de=>({...de,read:!0})))},[Ge,ea]=u.useState({title:"",description:"",category:"",status:"draft",priority:"medium",tags:"",startDate:"",endDate:""}),Qe=(P,de)=>{let De="";switch(P){case"name":de.trim()||(De="お名前を入力してください");break;case"email":de.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(de)||(De="正しいメールアドレスを入力してください"):De="メールアドレスを入力してください";break;case"phone":de.trim()&&!/^[0-9]{10,11}$/.test(de.replace(/-/g,""))&&(De="正しい電話番号を入力してください（10〜11桁の数字）");break;case"password":de?de.length<8&&(De="パスワードは8文字以上で入力してください"):De="パスワードを入力してください";break;case"passwordConfirm":de?_!==de&&(De="パスワードが一致しません"):De="パスワード確認を入力してください";break}return ra(fl=>({...fl,[P]:De})),De===""},Fe=()=>{const P={name:"",email:"",phone:"",password:"",passwordConfirm:"",agreeToTerms:""};return R.trim()||(P.name="お名前を入力してください"),L.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L)||(P.email="正しいメールアドレスを入力してください"):P.email="メールアドレスを入力してください",A.trim()&&!/^[0-9]{10,11}$/.test(A.replace(/-/g,""))&&(P.phone="正しい電話番号を入力してください（10〜11桁の数字）"),_?_.length<8&&(P.password="パスワードは8文字以上で入力してください"):P.password="パスワードを入力してください",Y?_!==Y&&(P.passwordConfirm="パスワードが一致しません"):P.passwordConfirm="パスワード確認を入力してください",H||(P.agreeToTerms="利用規約に同意してください"),ra(P),!Object.values(P).some(de=>de!=="")},Ra=P=>{P.preventDefault(),Fe()&&a("signup-confirm")},ke=P=>{a(P)},ba=(P,de)=>{let De="";switch(P){case"newPassword":de?de.length<8&&(De="パスワードは8文字以上で入力してください"):De="パスワードを入力してください";break;case"confirmPassword":de?x!==de&&(De="パスワードが一致しません"):De="パスワード確認を入力してください";break}return da(fl=>({...fl,[P]:De})),De===""},Me=()=>{const P={newPassword:"",confirmPassword:""};return x?x.length<8&&(P.newPassword="パスワードは8文字以上で入力してください"):P.newPassword="パスワードを入力してください",h?x!==h&&(P.confirmPassword="パスワードが一致しません"):P.confirmPassword="パスワード確認を入力してください",da(P),!Object.values(P).some(de=>de!=="")},Ta=P=>{P.preventDefault(),Me()&&Ne(!0)},Va=P=>{let de="";return P.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P)||(de="正しいメールアドレスを入力してください"):de="メールアドレスを入力してください",ae(de),de===""},Wt=P=>{P.preventDefault(),Va(y)&&G(!0)},pl=(P,de)=>{let De="";switch(P){case"email":de.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(de)||(De="正しいメールアドレスを入力してください"):De="メールアドレスを入力してください";break;case"password":de||(De="パスワードを入力してください");break}return $(fl=>({...fl,[P]:De})),De===""},Wa=()=>{const P={email:"",password:""};return o.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)||(P.email="正しいメールアドレスを入力してください"):P.email="メールアドレスを入力してください",d||(P.password="パスワードを入力してください"),$(P),!Object.values(P).some(de=>de!=="")},Ts=P=>{P.preventDefault(),Wa()&&Z("メールアドレスまたはパスワードが正しくありません")};return t.jsxs("div",{className:`template-page ${z==="sp"?"force-mobile":""}`,children:[t.jsx(Jl,{viewMode:z,onViewModeChange:W}),e==="login"&&t.jsx(Rd,{email:o,password:d,rememberMe:f,loginFormError:J,loginErrors:q,onEmailChange:c,onPasswordChange:m,onRememberMeChange:p,onEmailBlur:P=>pl("email",P),onPasswordBlur:P=>pl("password",P),onSubmit:Ts,onNavigateToForgotPassword:()=>a("forgot-password"),hideNavigation:!0}),e==="forgot-password"&&t.jsx(Td,{resetEmail:y,resetEmailError:O,resetEmailSuccess:F,onResetEmailChange:w,onResetEmailBlur:Va,onSubmit:Wt,onNavigateToLogin:()=>a("login"),hideNavigation:!0}),e==="reset-password"&&t.jsx(Ad,{newPassword:x,confirmPassword:h,passwordResetSuccess:fe,passwordResetErrors:Ae,onNewPasswordChange:g,onConfirmPasswordChange:b,onNewPasswordBlur:P=>ba("newPassword",P),onConfirmPasswordBlur:P=>ba("confirmPassword",P),onSubmit:Ta,hideNavigation:!0}),e==="signup"&&t.jsx(Ed,{signupName:R,signupEmail:L,signupPhone:A,signupPassword:_,signupPasswordConfirm:Y,agreeToTerms:H,signupErrors:ua,onNameChange:k,onEmailChange:T,onPhoneChange:B,onPasswordChange:Q,onPasswordConfirmChange:S,onAgreeToTermsChange:E,onNameBlur:P=>Qe("name",P),onEmailBlur:P=>Qe("email",P),onPhoneBlur:P=>Qe("phone",P),onPasswordBlur:P=>Qe("password",P),onPasswordConfirmBlur:P=>Qe("passwordConfirm",P),onSubmit:Ra,onNavigateToLogin:()=>a("login"),hideNavigation:!0}),e==="signup-confirm"&&t.jsx(Dd,{signupName:R,signupEmail:L,signupPhone:A,onConfirm:()=>a("signup-complete"),onBack:()=>a("signup"),hideNavigation:!0}),e==="signup-complete"&&t.jsx(Bd,{onNavigateToLogin:()=>a("login"),hideNavigation:!0}),e==="error-404"&&t.jsx(_d,{onNavigate:ke,hideNavigation:!0}),e==="error-500"&&t.jsx(Ld,{onNavigate:ke,hideNavigation:!0}),e==="maintenance"&&t.jsx(Hd,{hideNavigation:!0}),e==="data-detail"&&t.jsx(Ju,{viewMode:z,onNavigate:ke,unreadCount:X,onUnreadCountChange:setUnreadCount,showFlashMessage:N,onFlashMessageChange:C,showDeleteModal:La,onDeleteModalChange:Ma}),e==="data-create"&&t.jsx(Le,{viewMode:z,currentPage:"data-create",onNavigate:ke,unreadCount:X,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:se,sidebarCollapsed:v,setSidebarCollapsed:j,notificationRef:i,notifications:ie,onMarkNotificationAsRead:ne,onMarkAllNotificationsAsRead:ge,children:t.jsx(Qi,{})}),e==="data-edit"&&t.jsx(Le,{viewMode:z,currentPage:"data-edit",onNavigate:ke,unreadCount:X,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:se,sidebarCollapsed:v,setSidebarCollapsed:j,notificationRef:i,notifications:ie,onMarkNotificationAsRead:ne,onMarkAllNotificationsAsRead:ge,children:t.jsx(Qi,{})}),e==="qna"&&t.jsx(Le,{viewMode:z,currentPage:"qna",onNavigate:ke,unreadCount:X,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:se,sidebarCollapsed:v,setSidebarCollapsed:j,notificationRef:i,notifications:ie,onMarkNotificationAsRead:ne,onMarkAllNotificationsAsRead:ge,children:t.jsx(Ud,{viewMode:z,hideNavigation:!0})}),e==="terms"&&t.jsx(Le,{viewMode:z,currentPage:"terms",onNavigate:ke,unreadCount:X,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:se,sidebarCollapsed:v,setSidebarCollapsed:j,notificationRef:i,notifications:ie,onMarkNotificationAsRead:ne,onMarkAllNotificationsAsRead:ge,children:t.jsx(Vd,{viewMode:z,hideNavigation:!0})}),e==="privacy"&&t.jsx(Le,{viewMode:z,currentPage:"privacy",onNavigate:ke,unreadCount:X,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:se,sidebarCollapsed:v,setSidebarCollapsed:j,notificationRef:i,notifications:ie,onMarkNotificationAsRead:ne,onMarkAllNotificationsAsRead:ge,children:t.jsx($d,{viewMode:z,hideNavigation:!0})}),e==="commercial"&&t.jsx(Le,{viewMode:z,currentPage:"commercial",onNavigate:ke,unreadCount:X,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:se,sidebarCollapsed:v,setSidebarCollapsed:j,notificationRef:i,notifications:ie,onMarkNotificationAsRead:ne,onMarkAllNotificationsAsRead:ge,children:t.jsx(Od,{viewMode:z,hideNavigation:!0})})]})};function Pj({data:e,defaultSortColumn:a,defaultSortDirection:l="asc",selectable:n=!1,initialSelectedIds:r=[]}){const[s,i]=u.useState(a||null),[o,c]=u.useState(l),[d,m]=u.useState(r),f=u.useCallback(h=>{i(b=>b===h?(c(N=>N==="asc"?"desc":"asc"),h):(c("asc"),h))},[]),p=u.useMemo(()=>s?[...e].sort((h,b)=>{const N=h[s],C=b[s];if(N==null&&C==null)return 0;if(N==null)return 1;if(C==null)return-1;let R=0;return typeof N=="string"&&typeof C=="string"?R=N.toLowerCase().localeCompare(C.toLowerCase()):typeof N=="number"&&typeof C=="number"?R=N-C:N instanceof Date&&C instanceof Date?R=N.getTime()-C.getTime():R=String(N).localeCompare(String(C)),o==="asc"?R:-R}):e,[e,s,o]),v=u.useCallback(()=>{d.length===e.length&&e.length>0?m([]):m(e.map(h=>h.id))},[e,d.length]),j=u.useCallback(h=>{m(b=>b.includes(h)?b.filter(N=>N!==h):[...b,h])},[]),y=u.useCallback(()=>{m([])},[]),w=u.useCallback(h=>d.includes(h),[d]),x=n&&d.length===e.length&&e.length>0,g=n&&d.length>0&&d.length<e.length;return{displayData:p,sortColumn:s,sortDirection:o,selectedIds:d,allSelected:x,someSelected:g,handleSort:f,handleSelectAll:v,handleSelectRow:j,clearSelection:y,isSelected:w}}function Zj({initialValues:e={},onSearch:a,serverSide:l=!1}={}){const[n,r]=u.useState(e),s=u.useCallback((m,f)=>{r(p=>({...p,[m]:f}))},[]),i=u.useCallback(m=>{r(f=>({...f,...m}))},[]),o=u.useCallback(()=>{a==null||a(n)},[n,a]),c=u.useCallback(()=>{r({}),l&&(a==null||a({}))},[l,a]),d=u.useMemo(()=>Object.values(n).some(m=>m!=null&&m!==""),[n]);return{searchValues:n,setValue:s,setValues:i,handleSearch:o,handleClear:c,hasActiveFilters:d}}const Kj=(e,a,l,n)=>{if(a.render)return a.render(e,l,n);if(e==null)return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:"-"});switch(a.dataType||"text"){case"text":return String(e);case"number":const s=a.decimals??0,i=a.thousandsSeparator||",",o=Number(e);if(isNaN(o))return e;const d=o.toFixed(s).split(".");return d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,i),d.join(".");case"currency":const m=a.currencySymbol||"¥",f=a.decimals??0,p=Number(e);if(isNaN(p))return e;const j=p.toFixed(f).split(".");return j[0]=j[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),`${m}${j.join(".")}`;case"percentage":const y=Number(e);if(isNaN(y))return e;const w=a.decimals??1;return`${y.toFixed(w)}%`;case"date":a.dateFormat;const x=e instanceof Date?e:new Date(e);if(isNaN(x.getTime()))return e;const g=x.getFullYear(),h=String(x.getMonth()+1).padStart(2,"0"),b=String(x.getDate()).padStart(2,"0");return`${g}-${h}-${b}`;case"datetime":const N=e instanceof Date?e:new Date(e);if(isNaN(N.getTime()))return e;const C=N.getFullYear(),R=String(N.getMonth()+1).padStart(2,"0"),k=String(N.getDate()).padStart(2,"0"),L=String(N.getHours()).padStart(2,"0"),T=String(N.getMinutes()).padStart(2,"0");return`${C}-${R}-${k} ${L}:${T}`;case"time":const A=e instanceof Date?e:new Date(e);if(isNaN(A.getTime()))return e;const B=a.timeFormat||"24h";let _=A.getHours();const Q=String(A.getMinutes()).padStart(2,"0");if(B==="12h"){const E=_>=12?"PM":"AM";return _=_%12||12,`${_}:${Q} ${E}`}return`${String(_).padStart(2,"0")}:${Q}`;case"boolean":return t.jsx("span",{className:`status-badge ${e?"status-badge--success":"status-badge--default"}`,children:e?"有効":"無効"});case"badge":if(!a.badgeConfig||!a.badgeConfig[e])return t.jsx("span",{className:"status-badge status-badge--default",children:e});const Y=a.badgeConfig[e],H={success:"status-badge--success",warning:"status-badge--warning",error:"status-badge--danger",danger:"status-badge--danger",info:"status-badge--info",default:"status-badge--default",primary:"status-badge--primary",secondary:"status-badge--default"}[Y.variant]||"status-badge--default";return t.jsx("span",{className:`status-badge ${H}`,children:Y.label});case"link":return t.jsx("a",{href:e,style:{color:"var(--color-primary-600)",fontWeight:"var(--font-weight-medium)"},onClick:E=>E.stopPropagation(),children:e});case"email":return t.jsx("a",{href:`mailto:${e}`,style:{color:"var(--color-primary-600)"},onClick:E=>E.stopPropagation(),children:e});case"phone":return t.jsx("a",{href:`tel:${e}`,style:{color:"var(--color-primary-600)"},onClick:E=>E.stopPropagation(),children:e});case"image":return t.jsx("img",{src:e,alt:"",style:{width:"40px",height:"40px",objectFit:"cover",borderRadius:0}});case"avatar":return t.jsx("img",{src:e,alt:"",style:{width:"32px",height:"32px",objectFit:"cover",borderRadius:0}});case"custom":return e;default:return String(e)}},eg=({title:e,subtitle:a,columns:l,data:n,searchConfig:r,pagination:s,rowActions:i=[],bulkActions:o=[],createButton:c,toolbarActions:d=[],sort:m,searchValues:f,onSortChange:p,onPageChange:v,onPerPageChange:j,onSearchChange:y,onRefresh:w,selectable:x=!1,selectedIds:g,onSelectionChange:h,rowConfig:b,emptyState:N,loading:C=!1,error:R,exportConfig:k,stickyHeader:L=!1,density:T="normal",showRowNumbers:A=!1,className:B="",breadcrumbs:_,headerActions:Q=[],flashMessage:Y,onLogout:S})=>{const[H]=Ie(),E=D=>{const qe=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",Ma={dashboard:`${qe}/dashboard`,"data-list":`${qe}/data/list`,statistics:`${qe}/statistics`,notifications:`${qe}/notifications`,settings:`${qe}/settings`}[D]||`${qe}/${D}`;typeof window<"u"&&(window.location.href=Ma)},q=()=>{if(S){S();return}E("login")},[$,J]=u.useState((r==null?void 0:r.defaultCollapsed)===!1),Z=Pj({data:n,defaultSortColumn:m==null?void 0:m.column,defaultSortDirection:(m==null?void 0:m.direction)||"asc",selectable:x,initialSelectedIds:g||[]}),F=Zj({initialValues:f||{},onSearch:y,serverSide:!!y}),G=g!==void 0?g:Z.selectedIds,O=h?()=>{const D=G.length===n.length?[]:n.map(K=>K[(b==null?void 0:b.idKey)||"id"]);h(D,n.filter(K=>D.includes(K[(b==null?void 0:b.idKey)||"id"])))}:Z.handleSelectAll,ae=D=>{if(h){const K=G.includes(D)?G.filter(me=>me!==D):[...G,D];h(K,n.filter(me=>K.includes(me[(b==null?void 0:b.idKey)||"id"])))}else Z.handleSelectRow(D)},fe=G.length===n.length&&n.length>0;G.length>0&&G.length<n.length;const Ne=u.useMemo(()=>n.filter(D=>G.includes(D[(b==null?void 0:b.idKey)||"id"])),[n,G,b==null?void 0:b.idKey]),Ae=u.useMemo(()=>l.filter(D=>!D.hidden),[l]),da=D=>{const K=l.find(me=>me.key===D);if(K!=null&&K.sortable)if(p){const me=(m==null?void 0:m.column)===D&&(m==null?void 0:m.direction)==="asc"?"desc":"asc";p(D,me)}else Z.handleSort(D)},ua=p?m==null?void 0:m.column:Z.sortColumn,ra=p?m==null?void 0:m.direction:Z.sortDirection,z=p?n:Z.displayData,W=()=>{F.handleSearch&&F.handleSearch()},ce=()=>{F.handleClear()},se=()=>{if(!r||!r.fields&&!r.groups)return null;const K=[...r.fields||[]].sort((X,ne)=>{const ge=X.order??999,Ge=ne.order??999;return ge-Ge});r.layout;const me=r.columns||4,qe=r.gap||r.columnGap||"var(--spacing-4)",La=r.rowGap||qe,Ma=r.columnGap||qe,ie=K.some(X=>X.gridColumn||X.gridRow||X.gridColumnSpan),Ya=ie?{display:"grid",gridTemplateColumns:`repeat(${me}, 1fr)`,gap:La===Ma?qe:void 0,rowGap:La!==qe?La:void 0,columnGap:Ma!==qe?Ma:void 0,marginBottom:"var(--spacing-4)"}:{display:"flex",gap:qe,marginBottom:"var(--spacing-4)",flexWrap:"wrap"};return t.jsx("div",{style:Ya,children:K.map(X=>{var ge;const ne=()=>ie?{gridColumn:X.gridColumn?X.gridColumnSpan?`${X.gridColumn} / span ${X.gridColumnSpan}`:X.gridColumn:void 0,gridRow:X.gridRow,order:X.order}:{flex:{full:"1 1 100%",half:"1 1 calc((100% - var(--spacing-4)) / 2)",third:"1 1 calc((100% - var(--spacing-4) * 2) / 3)",quarter:"1 1 calc((100% - var(--spacing-4) * 3) / 4)",fifth:"1 1 calc((100% - var(--spacing-4) * 4) / 5)"}[X.width||"quarter"]||"1 1 200px",order:X.order};return X.type==="text"?t.jsx("div",{style:ne(),children:t.jsx(Ue,{type:"text",label:X.label,placeholder:X.placeholder,value:F.searchValues[X.name]||"",onChange:Ge=>F.setValue(X.name,Ge.target.value),disabled:X.disabled,borderColor:r.borderColor||"#d1d5db"})},X.name):X.type==="select"?t.jsxs("div",{style:ne(),children:[t.jsx("label",{style:{display:"block",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",marginBottom:"var(--spacing-2)"},children:X.label}),t.jsxs("select",{value:F.searchValues[X.name]||"",onChange:Ge=>F.setValue(X.name,Ge.target.value),disabled:X.disabled,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${r.borderColor||"#d1d5db"}`,borderRadius:0,fontSize:"var(--font-size-sm)"},children:[t.jsx("option",{value:"",children:X.placeholder||"すべて"}),(ge=X.options)==null?void 0:ge.map(Ge=>t.jsx("option",{value:Ge.value,children:Ge.label},Ge.value))]})]},X.name):null})})};return!C&&n.length===0&&!F.hasActiveFilters?t.jsx("div",{className:H==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:H,currentPage:"data-list",onNavigate:E,unreadCount:0,notifications:[],children:t.jsxs("div",{className:`dynamic-data-list-page ${B}`,children:[t.jsxs("div",{className:"page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),a&&t.jsx("p",{className:"page-subtitle",children:a})]}),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:c&&t.jsxs("button",{className:`btn btn--${c.variant||"primary"}`,onClick:c.onClick,children:[c.icon&&t.jsx(M,{name:c.icon,style:{width:"16px",height:"16px"}}),c.label]})})]}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[(N==null?void 0:N.icon)&&t.jsx(M,{name:N.icon,style:{width:"64px",height:"64px",color:"var(--color-neutral-400)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:(N==null?void 0:N.title)||"データがありません"}),(N==null?void 0:N.description)&&t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:N.description}),(N==null?void 0:N.action)&&t.jsx("button",{className:"btn btn--primary",onClick:N.action.onClick,children:N.action.label})]})]})})}):t.jsx("div",{className:H==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:H,currentPage:"data-list",onNavigate:E,unreadCount:0,notifications:[],onLogout:q,children:t.jsxs("div",{className:`dynamic-data-list-page ${B}`,children:[t.jsxs("div",{className:"page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),a&&t.jsx("p",{className:"page-subtitle",children:a})]}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[Q.map((D,K)=>t.jsxs("button",{className:`btn btn--${D.variant||"secondary"}`,onClick:D.onClick,children:[D.icon&&t.jsx(M,{name:D.icon,style:{width:"16px",height:"16px"}}),D.label]},K)),c&&t.jsxs("button",{className:`btn btn--${c.variant||"primary"}`,onClick:c.onClick,children:[c.icon&&t.jsx(M,{name:c.icon,style:{width:"16px",height:"16px"}}),c.label]})]})]}),Y&&t.jsx("div",{style:{marginBottom:"var(--spacing-6)"},children:Y}),r&&(r.fields||r.groups)&&t.jsxs("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{onClick:()=>J(!$),style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"var(--spacing-3)",margin:"calc(var(--spacing-4) * -1)",marginBottom:$?"var(--spacing-4)":"calc(var(--spacing-4) * -1)",borderBottom:$?"1px solid var(--color-neutral-200)":"none"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"search",style:{width:"18px",height:"18px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:r.title||"検索"}),F.hasActiveFilters&&t.jsxs("span",{className:"status-badge status-badge--info",style:{marginLeft:"var(--spacing-2)"},children:[Object.keys(F.searchValues).filter(D=>F.searchValues[D]).length,"件フィルター中"]})]}),t.jsx(M,{name:$?"chevron-up":"chevron-down",style:{width:"20px",height:"20px"}})]}),$&&t.jsxs("div",{style:{paddingTop:"var(--spacing-4)"},children:[se(),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--spacing-3)"},children:[r.showClearButton!==!1&&t.jsxs("button",{className:"btn btn--secondary",onClick:ce,children:[t.jsx(M,{name:"close",style:{width:"16px",height:"16px"}}),r.clearButtonText||"クリア"]}),r.showSearchButton!==!1&&t.jsxs("button",{className:"btn btn--primary",onClick:W,children:[t.jsx(M,{name:"search",style:{width:"16px",height:"16px"}}),r.searchButtonText||"検索"]})]})]})]}),R&&t.jsx("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",color:"var(--color-error-600)"},children:[t.jsx(M,{name:"error",style:{width:"20px",height:"20px"}}),t.jsx("span",{children:R.message}),R.retry&&t.jsx("button",{className:"btn btn--secondary btn--sm",onClick:R.retry,children:"再試行"})]})}),t.jsxs("div",{className:"dashboard-card",children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:G.length>0&&`${G.length}件選択中`}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[d.map((D,K)=>t.jsxs("button",{className:`btn btn--${D.variant||"text"} btn--sm`,onClick:D.onClick,disabled:D.disabled,children:[D.icon&&t.jsx(M,{name:D.icon,style:{width:"16px",height:"16px"}}),D.label]},K)),o.map(D=>{const K=!D.minSelections||G.length>=D.minSelections,me=!D.maxSelections||G.length<=D.maxSelections,qe=D.disabled||G.length===0||!K||!me;return t.jsxs("button",{className:`btn btn--${D.variant||"text"} btn--sm`,disabled:qe,onClick:()=>D.onClick(G,Ne),children:[D.icon&&t.jsx(M,{name:D.icon,style:{width:"16px",height:"16px"}}),D.label]},D.id)})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:`data-table data-table--${T}`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[x&&t.jsx("th",{style:{width:"50px",textAlign:"center"},children:t.jsx(Ht,{checked:fe,onChange:O,"aria-label":"すべて選択"})}),A&&t.jsx("th",{style:{width:"60px",textAlign:"center"},children:"No."}),Ae.map(D=>{const K=D.sortable!==!1&&D.sortable!==void 0,me=ua===D.key,qe=D.align||"left";return t.jsx("th",{style:{textAlign:qe,width:D.width,minWidth:D.minWidth,maxWidth:D.maxWidth,cursor:K?"pointer":"default",userSelect:"none"},onClick:()=>K&&da(D.key),className:D.headerClassName,title:D.tooltip,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",justifyContent:qe},children:[t.jsx("span",{children:D.label}),K&&t.jsx(M,{name:me&&ra==="desc"?"arrow-down":"arrow-up",style:{width:"14px",height:"14px",opacity:me?1:.3}})]})},D.key)}),i.length>0&&t.jsx("th",{style:{width:"120px",textAlign:"center"},children:"操作"})]})}),t.jsx("tbody",{children:C?t.jsx("tr",{children:t.jsxs("td",{colSpan:Ae.length+(x?1:0)+(A?1:0)+(i.length>0?1:0),style:{textAlign:"center",padding:"var(--spacing-8)"},children:[t.jsx(M,{name:"refresh",style:{width:"24px",height:"24px",animation:"spin 1s linear infinite"}}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"読み込み中..."})]})}):z.length===0?t.jsx("tr",{children:t.jsxs("td",{colSpan:Ae.length+(x?1:0)+(A?1:0)+(i.length>0?1:0),style:{textAlign:"center",padding:"var(--spacing-8)"},children:[t.jsx(M,{name:"search",style:{width:"48px",height:"48px",color:"var(--color-neutral-400)"}}),t.jsx("p",{style:{marginTop:"var(--spacing-2)",color:"var(--color-neutral-600)"},children:"検索結果がありません"})]})}):z.map((D,K)=>{const me=D[(b==null?void 0:b.idKey)||"id"],qe=G.includes(me),La=typeof(b==null?void 0:b.className)=="function"?b.className(D,K):(b==null?void 0:b.className)||"",Ma=typeof(b==null?void 0:b.disabled)=="function"?b.disabled(D):(b==null?void 0:b.disabled)||!1;return t.jsxs("tr",{className:La,onClick:()=>{var ie;return(ie=b==null?void 0:b.onClick)==null?void 0:ie.call(b,D,K)},style:{cursor:b!=null&&b.clickable||b!=null&&b.onClick?"pointer":"default"},children:[x&&t.jsx("td",{children:t.jsx(Ht,{checked:qe,onChange:()=>ae(me),disabled:Ma,"aria-label":`行${K+1}を選択`})}),A&&t.jsx("td",{style:{textAlign:"center",fontWeight:"var(--font-weight-medium)"},children:K+1}),Ae.map(ie=>{const Ya=D[ie.key],X=ie.align||"left",ne=typeof ie.cellClassName=="function"?ie.cellClassName(Ya,D):ie.cellClassName||"";return t.jsx("td",{style:{textAlign:X},className:ne,children:Kj(Ya,ie,D,K)},ie.key)}),i.length>0&&t.jsx("td",{children:t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"center"},children:i.map(ie=>{const Ya=typeof ie.visible=="function"?ie.visible(D):ie.visible!==!1,X=typeof ie.disabled=="function"?ie.disabled(D):ie.disabled||!1;return Ya?t.jsxs("button",{className:`btn btn--${ie.variant||"text"} btn--sm`,title:ie.tooltip||ie.label,disabled:X||ie.loading,onClick:ne=>{ne.stopPropagation(),ie.confirm?window.confirm(`${ie.confirm.title}

${ie.confirm.message}`)&&ie.onClick(D,K):ie.onClick(D,K)},children:[ie.icon&&t.jsx(M,{name:ie.icon,style:{width:"16px",height:"16px"}}),ie.label&&t.jsx("span",{children:ie.label})]},ie.id):null})})})]},me)})})]})}),s&&t.jsx("div",{style:{marginTop:"var(--spacing-4)"},children:t.jsx(If,{pagination:{current_page:s.currentPage,last_page:s.lastPage,total:s.total,per_page:s.perPage,from:s.from,to:s.to,prev_page_url:s.currentPage>1?"#":null,next_page_url:s.currentPage<s.lastPage?"#":null},onPageChange:D=>v==null?void 0:v(D),onPerPageChange:D=>j==null?void 0:j(D),config:{perPageOptions:s.perPageOptions||[10,20,50,100],showInfo:s.showPageInfo!==!1}})})]})]})})})},Jj=({type:e,message:a,icon:l,onClose:n})=>{const r=l||{success:"check",info:"info",warning:"warning",danger:"error"}[e],s=["flash-message",`flash-message--${e}`].join(" ");return t.jsxs("div",{className:s,children:[t.jsx(M,{name:r,className:"flash-message__icon"}),t.jsx("div",{className:"flash-message__message",children:a}),n&&t.jsx("button",{onClick:n,className:"flash-message__close","aria-label":"閉じる",children:t.jsx(M,{name:"close"})})]})},Ij=I.memo(Jj),eh=[{id:1,firstName:"太郎",lastName:"田中",email:"tanaka.taro@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"tokyo",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"fulltime",occupation:"ソフトウェアエンジニア",companyName:"株式会社テックコーポレーション",annualIncome:"6000000",skills:["programming","design"],workLocation:["tokyo","remote"],desiredSalary:7e6,availableStartDate:"2025-02-01",preferredContactTime:"14:00"},{id:2,firstName:"花子",lastName:"佐藤",email:"sato.hanako@example.com",phone:"08098765432",alternatePhone:"0367891234",postalCode:"1070062",prefecture:"tokyo",city:"港区",address1:"南青山2-5-20",address2:"マンション青山 301",employmentStatus:"fulltime",occupation:"プロジェクトマネージャー",companyName:"株式会社グローバルソリューションズ",annualIncome:"8500000",skills:["management","marketing"],workLocation:["tokyo","osaka"],desiredSalary:9e6,availableStartDate:"2025-03-01",preferredContactTime:"10:00"},{id:3,firstName:"一郎",lastName:"鈴木",email:"suzuki.ichiro@example.com",phone:"07011112222",alternatePhone:"",postalCode:"1600023",prefecture:"tokyo",city:"新宿区",address1:"西新宿3-1-5",address2:"",employmentStatus:"contract",occupation:"システムエンジニア",companyName:"株式会社システム開発",annualIncome:"5500000",skills:["programming"],workLocation:["tokyo"],desiredSalary:6e6,availableStartDate:"2025-01-15",preferredContactTime:"15:00"},{id:4,firstName:"美咲",lastName:"高橋",email:"takahashi.misaki@example.com",phone:"09033334444",alternatePhone:"0445556666",postalCode:"2200012",prefecture:"hokkaido",city:"札幌市中央区",address1:"北1条西5丁目",address2:"オフィスビル 8F",employmentStatus:"fulltime",occupation:"Webデザイナー",companyName:"株式会社クリエイティブワークス",annualIncome:"4800000",skills:["design","marketing"],workLocation:["tokyo","remote"],desiredSalary:55e5,availableStartDate:"2025-04-01",preferredContactTime:"13:00"},{id:5,firstName:"健太",lastName:"伊藤",email:"ito.kenta@example.com",phone:"08055556666",alternatePhone:"0677778888",postalCode:"5300001",prefecture:"osaka",city:"大阪市北区",address1:"梅田1-1-3",address2:"大阪ビル 5F",employmentStatus:"fulltime",occupation:"営業担当",companyName:"株式会社セールスプロ",annualIncome:"5200000",skills:["sales","marketing"],workLocation:["osaka","nagoya"],desiredSalary:6e6,availableStartDate:"2025-02-15",preferredContactTime:"11:00"},{id:6,firstName:"真理子",lastName:"渡辺",email:"watanabe.mariko@example.com",phone:"07077778888",alternatePhone:"0399990000",postalCode:"1640001",prefecture:"tokyo",city:"中野区",address1:"中野4-10-1",address2:"中野タワー 15F",employmentStatus:"fulltime",occupation:"人事マネージャー",companyName:"株式会社ヒューマンリソース",annualIncome:"7200000",skills:["management"],workLocation:["tokyo"],desiredSalary:8e6,availableStartDate:"2025-05-01",preferredContactTime:"09:00"},{id:7,firstName:"拓也",lastName:"山本",email:"yamamoto.takuya@example.com",phone:"09088889999",alternatePhone:"",postalCode:"2310023",prefecture:"hokkaido",city:"横浜市中区",address1:"山下町1-2",address2:"",employmentStatus:"freelance",occupation:"フロントエンドエンジニア",companyName:"",annualIncome:"7500000",skills:["programming","design"],workLocation:["remote"],desiredSalary:8e6,availableStartDate:"2025-01-01",preferredContactTime:"16:00"},{id:8,firstName:"愛",lastName:"中村",email:"nakamura.ai@example.com",phone:"08011112222",alternatePhone:"0533334444",postalCode:"4600008",prefecture:"osaka",city:"名古屋市中区",address1:"栄3-4-5",address2:"栄ビル 7F",employmentStatus:"fulltime",occupation:"経理担当",companyName:"株式会社ファイナンス",annualIncome:"4500000",skills:[],workLocation:["nagoya"],desiredSalary:5e6,availableStartDate:"2025-03-15",preferredContactTime:"14:00"},{id:9,firstName:"大輔",lastName:"小林",email:"kobayashi.daisuke@example.com",phone:"07033334444",alternatePhone:"0755556666",postalCode:"6000000",prefecture:"kyoto",city:"京都市下京区",address1:"烏丸通四条下ル",address2:"京都センタービル 3F",employmentStatus:"parttime",occupation:"カスタマーサポート",companyName:"株式会社サポートセンター",annualIncome:"3000000",skills:["sales"],workLocation:["osaka","remote"],desiredSalary:35e5,availableStartDate:"2025-02-01",preferredContactTime:"10:00"},{id:10,firstName:"由美",lastName:"加藤",email:"kato.yumi@example.com",phone:"09055556666",alternatePhone:"",postalCode:"8100001",prefecture:"osaka",city:"福岡市中央区",address1:"天神2-3-10",address2:"",employmentStatus:"student",occupation:"インターン",companyName:"株式会社デジタルイノベーション",annualIncome:"1200000",skills:["programming"],workLocation:["fukuoka","remote"],desiredSalary:3e6,availableStartDate:"2025-04-01",preferredContactTime:"13:00"},{id:11,firstName:"翔太",lastName:"吉田",email:"yoshida.shota@example.com",phone:"08077778888",alternatePhone:"0344445555",postalCode:"1010051",prefecture:"tokyo",city:"千代田区",address1:"神田神保町1-1",address2:"神保町ビル 10F",employmentStatus:"fulltime",occupation:"データサイエンティスト",companyName:"株式会社データアナリティクス",annualIncome:"9000000",skills:["programming"],workLocation:["tokyo","remote"],desiredSalary:1e7,availableStartDate:"2025-06-01",preferredContactTime:"11:00"},{id:12,firstName:"結衣",lastName:"山田",email:"yamada.yui@example.com",phone:"07099990000",alternatePhone:"0611112222",postalCode:"5600001",prefecture:"osaka",city:"大阪市西区",address1:"江戸堀1-2-3",address2:"西区マンション 205",employmentStatus:"fulltime",occupation:"マーケティング担当",companyName:"株式会社マーケティングプロ",annualIncome:"5800000",skills:["marketing","design"],workLocation:["osaka"],desiredSalary:65e5,availableStartDate:"2025-03-01",preferredContactTime:"15:00"},{id:13,firstName:"陽介",lastName:"佐々木",email:"sasaki.yosuke@example.com",phone:"09011112222",alternatePhone:"",postalCode:"9800011",prefecture:"hokkaido",city:"仙台市青葉区",address1:"上杉1-1-1",address2:"",employmentStatus:"contract",occupation:"ネットワークエンジニア",companyName:"株式会社ネットワークソリューションズ",annualIncome:"6200000",skills:["programming"],workLocation:["tokyo","remote"],desiredSalary:7e6,availableStartDate:"2025-02-15",preferredContactTime:"14:00"},{id:14,firstName:"麻衣",lastName:"松本",email:"matsumoto.mai@example.com",phone:"08033334444",alternatePhone:"0922223333",postalCode:"8120011",prefecture:"osaka",city:"福岡市博多区",address1:"博多駅前2-1-1",address2:"博多ビル 6F",employmentStatus:"unemployed",occupation:"",companyName:"",annualIncome:"0",skills:["design"],workLocation:["fukuoka"],desiredSalary:4e6,availableStartDate:"2025-01-15",preferredContactTime:"10:00"},{id:15,firstName:"隆",lastName:"井上",email:"inoue.takashi@example.com",phone:"07055556666",alternatePhone:"0266667777",postalCode:"3900814",prefecture:"tokyo",city:"松本市",address1:"本庄1-2-1",address2:"松本オフィス 2F",employmentStatus:"fulltime",occupation:"ITコンサルタント",companyName:"株式会社ビジネスコンサルティング",annualIncome:"10500000",skills:["management","programming"],workLocation:["tokyo","nagoya","remote"],desiredSalary:12e6,availableStartDate:"2025-07-01",preferredContactTime:"09:00"}],e4=()=>{const e=Et(),a=u.useRef(null),[l,n]=u.useState(null),[r,s]=Ie(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,v]=u.useState(!1),[j,y]=u.useState({}),[w,x]=u.useState(eh),[g,h]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]);u.useEffect(()=>{const S=sessionStorage.getItem("flashMessage");if(S)try{const H=JSON.parse(S);n(H),sessionStorage.removeItem("flashMessage"),setTimeout(()=>{n(null)},5e3)}catch(H){console.error("Failed to parse flash message:",H)}},[]);const b=S=>{const E={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[S]||`/pages/${S}`;e(E)},N=S=>{h(H=>H.map(E=>E.id===S?{...E,read:!0}:E))},C=()=>{h(S=>S.map(H=>({...H,read:!0})))},R=S=>{y(S);const H=eh.filter(E=>{if(S.name){const q=S.name.toLowerCase(),$=`${E.lastName} ${E.firstName}`.toLowerCase(),J=`${E.firstName} ${E.lastName}`.toLowerCase();if(!$.includes(q)&&!J.includes(q))return!1}if(S.email){const q=S.email.toLowerCase();if(!E.email.toLowerCase().includes(q))return!1}if(S.prefecture&&E.prefecture!==S.prefecture||S.employmentStatus&&E.employmentStatus!==S.employmentStatus)return!1;if(S.occupation){const q=S.occupation.toLowerCase();if(!E.occupation||!E.occupation.toLowerCase().includes(q))return!1}return!0});x(H)},k=[{key:"id",label:"ID",dataType:"number",sortable:!0,width:"60px",align:"center"},{key:"fullName",label:"氏名",dataType:"text",sortable:!0,width:"120px",render:(S,H)=>`${H.lastName} ${H.firstName}`},{key:"email",label:"メールアドレス",dataType:"email",sortable:!0,width:"200px"},{key:"phone",label:"電話番号",dataType:"text",sortable:!0,width:"120px"},{key:"postalCode",label:"郵便番号",dataType:"text",sortable:!0,width:"100px"},{key:"prefecture",label:"都道府県",dataType:"text",sortable:!0,width:"100px",render:S=>({tokyo:"東京都",osaka:"大阪府",kyoto:"京都府",hokkaido:"北海道"})[S]||S},{key:"city",label:"市区町村",dataType:"text",sortable:!0,width:"150px"},{key:"employmentStatus",label:"雇用形態",dataType:"badge",sortable:!0,width:"120px",badgeConfig:{fulltime:{label:"正社員",variant:"success"},parttime:{label:"パート・アルバイト",variant:"info"},contract:{label:"契約社員",variant:"warning"},freelance:{label:"フリーランス",variant:"primary"},student:{label:"学生",variant:"default"},unemployed:{label:"無職",variant:"danger"}}},{key:"occupation",label:"職種",dataType:"text",sortable:!0,width:"150px"},{key:"companyName",label:"勤務先名",dataType:"text",sortable:!0,width:"200px"},{key:"annualIncome",label:"年収",dataType:"currency",sortable:!0,width:"120px",align:"right",render:S=>{const H=Number(S);return!S||isNaN(H)||H===0?"-":`¥${H.toLocaleString()}`}},{key:"skills",label:"スキル",dataType:"text",sortable:!1,width:"200px",render:S=>{if(!S||!Array.isArray(S)||S.length===0)return"-";const H={programming:"プログラミング",design:"デザイン",marketing:"マーケティング",management:"マネジメント",sales:"営業"};return S.map(E=>H[E]||E).join("、")}},{key:"workLocation",label:"希望勤務地",dataType:"text",sortable:!1,width:"150px",render:S=>{if(!S||!Array.isArray(S)||S.length===0)return"-";const H={tokyo:"東京",osaka:"大阪",nagoya:"名古屋",fukuoka:"福岡",remote:"リモート"};return S.map(E=>H[E]||E).join("、")}},{key:"desiredSalary",label:"希望年収",dataType:"currency",sortable:!0,width:"120px",align:"right",render:S=>{const H=Number(S);return!S||isNaN(H)||H===0?"-":`¥${H.toLocaleString()}`}}],L={title:"検索・フィルター",collapsible:!0,defaultCollapsed:!0,showClearButton:!0,showSearchButton:!0,borderColor:"#d1d5db",fields:[{name:"name",label:"氏名",type:"text",placeholder:"氏名で検索...",width:"half"},{name:"email",label:"メールアドレス",type:"text",placeholder:"メールアドレスで検索...",width:"half"},{name:"prefecture",label:"都道府県",type:"select",placeholder:"すべて",options:[{label:"東京都",value:"tokyo"},{label:"大阪府",value:"osaka"},{label:"京都府",value:"kyoto"},{label:"北海道",value:"hokkaido"}],width:"half"},{name:"employmentStatus",label:"雇用形態",type:"select",placeholder:"すべて",options:[{label:"正社員",value:"fulltime"},{label:"パート・アルバイト",value:"parttime"},{label:"契約社員",value:"contract"},{label:"フリーランス",value:"freelance"},{label:"学生",value:"student"},{label:"無職",value:"unemployed"}],width:"half"},{name:"occupation",label:"職種",type:"text",placeholder:"職種で検索...",width:"half"}]},T=[{id:"view",label:"",icon:"eye",onClick:S=>{console.log("View user:",S),e("/pages/data/detail")},tooltip:"詳細を表示"},{id:"edit",label:"",icon:"edit",onClick:S=>{e("/pages/data/edit")},tooltip:"編集"}],A=[{id:"delete",label:"削除",icon:"delete",variant:"danger",onClick:S=>{console.log("削除:",S)},minSelections:1}],B=[{label:"エクスポート",icon:"download",onClick:()=>{console.log("エクスポート"),alert("ユーザーデータをエクスポートします")}}],_={label:"新規登録",icon:"plus",onClick:()=>{console.log("Navigate to /pages/data/add"),e("/pages/data/add")}},Q={title:j&&Object.keys(j).length>0?"お探しのデータは見つかりませんでした":"データがありません",description:j&&Object.keys(j).length>0?"検索条件を変更してお試しください":"新しいデータを作成してください",icon:j&&Object.keys(j).length>0?"search":"user",action:j&&Object.keys(j).length>0?void 0:{label:"新規作成",onClick:()=>{e("/pages/data/add")}}},Y={title:"データ一覧",subtitle:void 0,columns:k,data:w,searchConfig:L,searchValues:j,onSearchChange:R,rowActions:T,bulkActions:A,toolbarActions:B,createButton:_,emptyState:Q,selectable:!0,showRowNumbers:!1,density:"normal",headerActions:[]};return t.jsxs("div",{className:r==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:r,onViewModeChange:s}),t.jsx(Le,{viewMode:r,currentPage:"data-list",onNavigate:b,unreadCount:g.filter(S=>!S.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:m,setIsHamburgerOpen:f,sidebarCollapsed:p,setSidebarCollapsed:v,notificationRef:a,notifications:g,onMarkNotificationAsRead:N,onMarkAllNotificationsAsRead:C,children:t.jsx(eg,{...Y,flashMessage:l?t.jsx(Ij,{type:l.type,message:l.message,onClose:()=>n(null)}):void 0})})]})},a4=({children:e,variant:a="primary",size:l="md",disabled:n=!1,onClick:r,type:s="button",icon:i=null,iconPosition:o="left",fullWidth:c=!1,loading:d=!1,className:m="",...f})=>{const p=["btn",`btn--${a}`,`btn--${l}`,c&&"btn--full-width",d&&"btn--loading",i&&!e&&"btn--icon-only",m].filter(Boolean).join(" "),v=j=>{!n&&!d&&r&&r(j)};return t.jsxs("button",{type:s,className:p,disabled:n||d,onClick:v,...f,children:[d&&t.jsx("span",{className:"btn__spinner",children:t.jsx("svg",{className:"spinner",width:"16",height:"16",viewBox:"0 0 24 24",children:t.jsx("circle",{className:"spinner-circle",cx:"12",cy:"12",r:"10",fill:"none",strokeWidth:"3"})})}),i&&o==="left"&&!d&&t.jsx("span",{className:"btn__icon btn__icon--left",children:i}),e&&t.jsx("span",{className:"btn__text",children:e}),i&&o==="right"&&!d&&t.jsx("span",{className:"btn__icon btn__icon--right",children:i})]})},Ot=I.memo(a4),t4=()=>{const e=Et(),a=u.useRef(null),[l,n]=Ie(),[r,s]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,v]=u.useState(!1),[j,y]=u.useState(null),[w,x]=u.useState({username:"管理者",email:"admin@example.com",role:"システム管理者",displayName:"田中 太郎",phone:"090-1234-5678",department:"開発部"}),[g,h]=u.useState({...w}),b=_=>{const Y={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[_]||`/pages/${_}`;e(Y)},[N,C]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),R=_=>{C(Q=>Q.map(Y=>Y.id===_?{...Y,read:!0}:Y))},k=()=>{C(_=>_.map(Q=>({...Q,read:!0})))},L=()=>{h({...w}),v(!0)},T=()=>{x({...g}),v(!1),y("プロフィールを保存しました"),setTimeout(()=>y(null),3e3)},A=()=>{h({...w}),v(!1)},B=(_,Q)=>{h(Y=>({...Y,[_]:Q}))};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:l,onViewModeChange:n}),t.jsx(Le,{viewMode:l,currentPage:"settings",onNavigate:b,unreadCount:N.filter(_=>!_.read).length,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:N,onMarkNotificationAsRead:R,onMarkAllNotificationsAsRead:k,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"1000px",margin:"0 auto"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-6)",color:"var(--color-neutral-900)"},children:"設定"}),j&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:"var(--radius-md)",color:"var(--color-success-700)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"check-circle",style:{width:"20px",height:"20px"}}),j]}),t.jsxs("div",{style:{marginBottom:"var(--spacing-8)",padding:"var(--spacing-6)",backgroundColor:"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-neutral-200)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:"プロフィール設定"}),!p&&t.jsxs("button",{className:"btn btn--primary",onClick:L,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"edit",style:{width:"16px",height:"16px"}}),"編集"]})]}),p?t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:l==="sp"?"var(--spacing-2)":"var(--spacing-1_5)"},children:[t.jsx(Ue,{label:"表示名",value:g.displayName,onChange:_=>B("displayName",_.target.value),placeholder:"表示名を入力"}),t.jsx(Ue,{label:"ユーザー名",value:g.username,onChange:_=>B("username",_.target.value),placeholder:"ユーザー名を入力"}),t.jsx(Ue,{label:"メールアドレス",type:"email",value:g.email,onChange:_=>B("email",_.target.value),placeholder:"メールアドレスを入力"}),t.jsx(Ue,{label:"電話番号",value:g.phone,onChange:_=>B("phone",_.target.value),placeholder:"電話番号を入力"}),t.jsx(Ue,{label:"部署",value:g.department,onChange:_=>B("department",_.target.value),placeholder:"部署を入力"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end",marginTop:"var(--spacing-2)"},children:[t.jsx(Ot,{variant:"text",onClick:A,children:"キャンセル"}),t.jsx(Ot,{variant:"primary",onClick:T,children:"保存"})]})]}):t.jsxs("div",{style:{color:"var(--color-neutral-600)"},children:[t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"表示名:"})," ",w.displayName]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"ユーザー名:"})," ",w.username]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"メールアドレス:"})," ",w.email]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"電話番号:"})," ",w.phone]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"部署:"})," ",w.department]}),t.jsxs("p",{children:[t.jsx("strong",{children:"役割:"})," ",w.role]})]})]})]})})]})},l4=()=>{const e=Et(),a=u.useRef(null),[l,n]=Ie(),[r,s]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),p=h=>{const N={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[h]||`/pages/${h}`;e(N)},[v,j]=u.useState([{id:1,type:"info",title:"システムアップデート",message:"新しい機能が追加されました",time:"2時間前",read:!1},{id:2,type:"success",title:"データ保存完了",message:"データが正常に保存されました",time:"5時間前",read:!1},{id:3,type:"warning",title:"メンテナンス予定",message:"明日の深夜にメンテナンスを実施します",time:"1日前",read:!0},{id:4,type:"error",title:"エラー発生",message:"一部の機能でエラーが発生しています",time:"2日前",read:!0}]),y=h=>{j(b=>b.map(N=>N.id===h?{...N,read:!0}:N))},w=()=>{j(h=>h.map(b=>({...b,read:!0})))},x=h=>{switch(h){case"success":return"check-circle";case"warning":return"warning";case"error":return"exclamation";default:return"info"}},g=h=>{switch(h){case"success":return"var(--color-success-600)";case"warning":return"var(--color-warning-600)";case"error":return"var(--color-error-600)";default:return"var(--color-primary-600)"}};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:l,onViewModeChange:n}),t.jsx(Le,{viewMode:l,currentPage:"notifications",onNavigate:p,unreadCount:v.filter(h=>!h.read).length,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:v,onMarkNotificationAsRead:y,onMarkAllNotificationsAsRead:w,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"900px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-6)"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"通知一覧"}),v.some(h=>!h.read)&&t.jsxs("button",{onClick:w,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-4)",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:h=>{h.currentTarget.style.backgroundColor="var(--color-primary-600)"},onMouseLeave:h=>{h.currentTarget.style.backgroundColor="var(--color-primary-500)"},children:[t.jsx(M,{name:"check",style:{width:"16px",height:"16px"}}),"全て既読にする"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:v.map(h=>t.jsxs("div",{style:{padding:"var(--spacing-5)",backgroundColor:h.read?"var(--color-neutral-50)":"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-neutral-200)",display:"flex",gap:"var(--spacing-4)",alignItems:"start",boxShadow:h.read?"none":"var(--shadow-sm)",position:"relative"},children:[t.jsx(M,{name:x(h.type),style:{width:"24px",height:"24px",color:g(h.type),flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"var(--spacing-2)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:h.title}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)",whiteSpace:"nowrap",marginLeft:"var(--spacing-3)"},children:h.time})]}),t.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)",marginBottom:h.read?0:"var(--spacing-3)"},children:h.message}),!h.read&&t.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:t.jsxs("button",{onClick:()=>y(h.id),style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-1) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="var(--color-neutral-200)",b.currentTarget.style.borderColor="var(--color-neutral-400)"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="var(--color-neutral-100)",b.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(M,{name:"check",style:{width:"12px",height:"12px"}}),"既読にする"]})})]})]},h.id))})]})})]})},n4=()=>{const e=Et(),a=u.useRef(null),[l,n]=Ie(),[r,s]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),p=h=>{const N={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[h]||`/pages/${h}`;e(N)},[v,j]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),y=h=>{j(b=>b.map(N=>N.id===h?{...N,read:!0}:N))},w=()=>{j(h=>h.map(b=>({...b,read:!0})))},x=[{label:"総ユーザー数",value:"1,234",icon:"user",color:"var(--color-primary-500)"},{label:"総データ数",value:"5,678",icon:"document",color:"var(--color-success-500)"},{label:"今月の新規",value:"234",icon:"chart-bar",color:"var(--color-warning-500)"},{label:"アクティブ率",value:"87%",icon:"chart-pie",color:"var(--color-info-500)"}],g=[{user:"田中太郎",action:"データを作成しました",time:"5分前"},{user:"佐藤花子",action:"プロフィールを更新しました",time:"15分前"},{user:"鈴木一郎",action:"データを編集しました",time:"1時間前"},{user:"高橋美咲",action:"データを削除しました",time:"2時間前"}];return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:l,onViewModeChange:n}),t.jsx(Le,{viewMode:l,currentPage:"dashboard",onNavigate:p,unreadCount:v.filter(h=>!h.read).length,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:v,onMarkNotificationAsRead:y,onMarkAllNotificationsAsRead:w,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--spacing-4)"},children:x.map((h,b)=>t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:`${h.color}20`,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(M,{name:h.icon,size:"md",style:{color:h.color}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-1)"},children:h.label}),t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:h.value})]})]},b))}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"最近のアクティビティ"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:g.map((h,b)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",background:"var(--color-neutral-50)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:h.user.charAt(0)}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)"},children:h.user}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:h.action})]})]}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:h.time})]},b))})]}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"クイックアクション"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-3)"},children:[t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:h=>{h.currentTarget.style.background="var(--color-neutral-50)",h.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:h=>{h.currentTarget.style.background="var(--color-neutral-white)",h.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(M,{name:"plus-circle",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"新規データ作成"})]}),t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:h=>{h.currentTarget.style.background="var(--color-neutral-50)",h.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:h=>{h.currentTarget.style.background="var(--color-neutral-white)",h.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(M,{name:"table",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"データ一覧表示"})]}),t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:h=>{h.currentTarget.style.background="var(--color-neutral-50)",h.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:h=>{h.currentTarget.style.background="var(--color-neutral-white)",h.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(M,{name:"chart-bar",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"統計を確認"})]})]})]})]})})]})};function r4({config:e,onSearchChange:a=null,onFilterChange:l=null,searchValue:n="",filterValues:r={}}){var o,c,d;const s=((o=e==null?void 0:e.search)==null?void 0:o.enabled)&&a,i=((c=e==null?void 0:e.filters)==null?void 0:c.length)>0&&l;return!s&&!i?null:t.jsx("div",{className:"bg-white rounded-lg shadow-sm p-4 mb-6",children:t.jsxs("div",{className:"flex flex-wrap gap-4 items-end",children:[s&&t.jsxs("div",{className:"flex-1 min-w-64",children:[t.jsx("label",{htmlFor:"search-input",className:"block text-sm font-medium text-gray-700 mb-1",children:"検索"}),t.jsx("input",{id:"search-input",type:"text",value:n,onChange:m=>a(m.target.value),placeholder:((d=e.search)==null?void 0:d.placeholder)||"検索...",className:"w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i&&e.filters.map((m,f)=>t.jsxs("div",{className:"min-w-32",children:[t.jsx("label",{htmlFor:`filter-${m.key}`,className:"block text-sm font-medium text-gray-700 mb-1",children:m.label}),t.jsx("select",{id:`filter-${m.key}`,value:r[m.key]||"",onChange:p=>l(m.key,p.target.value),className:"w-full border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white",style:{backgroundImage:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.5em 1.5em"},children:m.options.map(p=>t.jsx("option",{value:p.value,children:p.label},p.value))})]},m.key))]})})}const s4=({data:e,viewMode:a="pc",height:l=300,metrics:n})=>{const r=a==="sp"?340:800,s={top:20,right:30,bottom:60,left:70},i=r-s.left-s.right,o=l-s.top-s.bottom,d=[{key:"users",label:"ユーザー数",color:"var(--color-primary-500)"},{key:"sales",label:"売上数",color:"var(--color-info-500)"},{key:"revenue",label:"収益",color:"var(--color-success-500)"}].filter(y=>n.includes(y.key));if(d.length===0)return t.jsx("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",textAlign:"center",color:"var(--color-neutral-500)"},children:"メトリクスを選択してください"});const m=e.flatMap(y=>d.map(w=>y[w.key])),f=Math.max(...m,1),p=i/e.length*.8,v=p/d.length,j=i/e.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",overflow:"hidden"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",overflow:"auto",maxWidth:"100%"},children:t.jsx("svg",{width:r,height:l,style:{minWidth:a==="sp"?"340px":void 0},children:t.jsxs("g",{transform:`translate(${s.left}, ${s.top})`,children:[[0,1,2,3,4].map(y=>t.jsx("line",{x1:0,x2:i,y1:o*y/4,y2:o*y/4,stroke:"var(--color-neutral-200)",strokeWidth:1},y)),[0,1,2,3,4].map(y=>{const w=Math.round(f*(4-y)/4);return t.jsx("text",{x:-10,y:o*y/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:w},y)}),e.map((y,w)=>{const x=w*(i/e.length)+j/2;return t.jsxs("g",{children:[d.map((g,h)=>{const b=y[g.key]/f*o,N=x+h*v;return t.jsx("rect",{x:N,y:o-b,width:v,height:b,fill:g.color,rx:2},g.key)}),t.jsx("text",{x:x+p/2,y:o+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:y.month})]},w)})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:d.map(y=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:y.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:y.label})]},y.key))})]})},i4=()=>{const e=Et(),a=u.useRef(null),[l,n]=Ie(),[r,s]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,v]=u.useState({period:"6months",metrics:["users","sales","revenue"],chartType:"bar"}),j=B=>{const Q={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[B]||`/pages/${B}`;e(Q)},[y,w]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),x=B=>{w(_=>_.map(Q=>Q.id===B?{...Q,read:!0}:Q))},g=()=>{w(B=>B.map(_=>({..._,read:!0})))},h=[{month:"1月",users:45,sales:120,revenue:180},{month:"2月",users:62,sales:150,revenue:210},{month:"3月",users:58,sales:140,revenue:200},{month:"4月",users:71,sales:180,revenue:260},{month:"5月",users:68,sales:170,revenue:240},{month:"6月",users:85,sales:220,revenue:320},{month:"7月",users:92,sales:240,revenue:350},{month:"8月",users:88,sales:230,revenue:330},{month:"9月",users:95,sales:250,revenue:370},{month:"10月",users:102,sales:270,revenue:400},{month:"11月",users:110,sales:290,revenue:430},{month:"12月",users:125,sales:320,revenue:480}],b=[{label:"カテゴリA",value:35,color:"var(--color-primary-500)"},{label:"カテゴリB",value:25,color:"var(--color-success-500)"},{label:"カテゴリC",value:20,color:"var(--color-warning-500)"},{label:"カテゴリD",value:20,color:"var(--color-info-500)"}],N={title:"データフィルター",collapsible:!0,defaultCollapsed:!1,showClearButton:!0,showSearchButton:!1,fields:[{name:"period",label:"表示期間",type:"select",placeholder:"期間を選択",options:[{label:"3ヶ月",value:"3months"},{label:"6ヶ月",value:"6months"},{label:"12ヶ月",value:"12months"}],width:"third"},{name:"metrics",label:"表示メトリクス",type:"multiselect",placeholder:"メトリクスを選択",options:[{label:"ユーザー数",value:"users"},{label:"売上数",value:"sales"},{label:"収益",value:"revenue"}],width:"third"},{name:"chartType",label:"グラフタイプ",type:"select",placeholder:"タイプを選択",options:[{label:"棒グラフ",value:"bar"},{label:"折れ線グラフ",value:"line"}],width:"third"}]},C=u.useMemo(()=>{const B=p.period||"6months";let _=6;return B==="3months"?_=3:B==="6months"?_=6:B==="12months"&&(_=12),h.slice(-_)},[p.period]),R=u.useMemo(()=>{const B=p.metrics;return!B||Array.isArray(B)&&B.length===0?["users","sales","revenue"]:Array.isArray(B)?B:[B]},[p.metrics]),k=u.useMemo(()=>{const B=C,_=B[B.length-1],Q=B.flatMap(J=>R.map(Z=>J[Z])),Y=_?_.revenue:0,S=Q.length>0?Math.round(Q.reduce((J,Z)=>J+Z,0)/Q.length):0,H=Q.length>0?Math.max(...Q):0,E=B[0],q=B[B.length-1];let $=0;return E&&q&&E.revenue>0&&($=Math.round((q.revenue-E.revenue)/E.revenue*100)),{total:Y,average:S,maximum:H,growthRate:$}},[C,R]),L=b.reduce((B,_)=>B+_.value,0),T=B=>{v(B)},A=()=>{v({period:"6months",metrics:["users","sales","revenue"],chartType:"bar"})};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:l,onViewModeChange:n}),t.jsx(Le,{viewMode:l,currentPage:"statistics",onNavigate:j,unreadCount:y.filter(B=>!B.read).length,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:y,onMarkNotificationAsRead:x,onMarkAllNotificationsAsRead:g,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[t.jsx(r4,{config:N,values:p,onChange:T,onClear:A}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-4)"},children:[t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"今月の合計"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:k.total})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-success-500), var(--color-success-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"平均値"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:k.average})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"最高値"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:k.maximum})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-info-500), var(--color-info-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"成長率"}),t.jsxs("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:[k.growthRate>0?"+":"",k.growthRate,"%"]})]})]}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:"月次推移"}),t.jsx(M,{name:"chart-bar",size:"md",style:{color:"var(--color-primary-500)"}})]}),t.jsx(s4,{data:C,viewMode:l,height:300,metrics:R})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:l==="sp"?"1fr":"repeat(auto-fit, minmax(400px, 1fr))",gap:"var(--spacing-4)"},children:t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:"カテゴリ別分布"}),t.jsx(M,{name:"chart-pie",size:"md",style:{color:"var(--color-primary-500)"}})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--spacing-4)"},children:[t.jsx("div",{style:{width:"200px",height:"200px",borderRadius:"50%",background:`conic-gradient(
                    ${b[0].color} 0% ${b[0].value}%,
                    ${b[1].color} ${b[0].value}% ${b[0].value+b[1].value}%,
                    ${b[2].color} ${b[0].value+b[1].value}% ${b[0].value+b[1].value+b[2].value}%,
                    ${b[3].color} ${b[0].value+b[1].value+b[2].value}% 100%
                  )`,position:"relative"},children:t.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"120px",height:"120px",borderRadius:"50%",background:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:L}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"合計"})]})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)",width:"100%"},children:b.map((B,_)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-2)",borderRadius:"var(--radius-md)",background:"var(--color-neutral-50)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"var(--radius-sm)",background:B.color}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:B.label})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:[B.value,"%"]})})]},_))})]})]})})]})})]})},ah=({hideNavigation:e=!1,userName:a="ユーザー",resetUrl:l="https://example.com/reset-password?token=abc123def456",expirationHours:n=24,supportEmail:r="support@example.com",companyName:s="AppName"})=>{const[i]=Ie();return t.jsxs("div",{className:i==="sp"?"force-mobile":"",children:[t.jsx("div",{className:"email-preview-container",children:t.jsx("div",{className:"email-template",children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",style:{width:"100%",maxWidth:"600px",margin:"0 auto",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{padding:"20px",textAlign:"center",backgroundColor:"#15346D"},children:t.jsx("h1",{style:{margin:0,color:"#ffffff",fontSize:"24px",fontWeight:"600"},children:s})})}),t.jsx("tr",{children:t.jsxs("td",{style:{padding:"40px 30px",backgroundColor:"#ffffff"},children:[t.jsx("h2",{style:{margin:"0 0 20px 0",color:"#1f2937",fontSize:"20px",fontWeight:"600"},children:"パスワード再設定のご案内"}),t.jsxs("p",{style:{margin:"0 0 20px 0",color:"#4b5563",fontSize:"16px",lineHeight:"1.6"},children:[a," 様"]}),t.jsx("p",{style:{margin:"0 0 20px 0",color:"#4b5563",fontSize:"16px",lineHeight:"1.6"},children:"以下のボタンをクリックして、新しいパスワードを設定してください。"}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",style:{width:"100%",margin:"30px 0"},children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{style:{textAlign:"center"},children:t.jsx("a",{href:l,style:{display:"inline-block",padding:"14px 40px",backgroundColor:"#15346D",color:"#ffffff",textDecoration:"none",borderRadius:"6px",fontSize:"16px",fontWeight:"600"},children:"パスワードを再設定"})})})})}),t.jsx("div",{style:{margin:"30px 0",padding:"16px",backgroundColor:"#fef3c7",borderLeft:"4px solid #f59e0b",borderRadius:"4px"},children:t.jsxs("p",{style:{margin:0,color:"#92400e",fontSize:"14px",lineHeight:"1.6"},children:[t.jsx("strong",{children:"重要:"})," このリンクは",n,"時間後に無効となります。",t.jsx("br",{}),"パスワード再設定をリクエストしていない場合は、このメールを無視してください。"]})}),t.jsx("p",{style:{margin:"20px 0 0 0",color:"#6b7280",fontSize:"14px",lineHeight:"1.6"},children:"ご不明な点がございましたら、お気軽にお問い合わせください。"})]})}),t.jsx("tr",{children:t.jsxs("td",{style:{padding:"30px 20px",textAlign:"center",backgroundColor:"#f9fafb",borderTop:"1px solid #e5e7eb"},children:[t.jsxs("p",{style:{margin:"0 0 10px 0",color:"#6b7280",fontSize:"14px"},children:[s," カスタマーサポート"]}),t.jsxs("p",{style:{margin:"0 0 10px 0",color:"#9ca3af",fontSize:"12px"},children:["お問い合わせ:"," ",t.jsx("a",{href:`mailto:${r}`,style:{color:"#15346D",textDecoration:"none"},children:r})]}),t.jsx("p",{style:{margin:"10px 0 0 0",color:"#9ca3af",fontSize:"12px"},children:"このメールに心当たりがない場合は、破棄してください。"})]})})]})})})}),t.jsx("style",{children:`
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
      `})]})},o4=()=>{const e=Et(),a=u.useRef(null),[l,n]=Ie(),[r,s]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),p=N=>{const R={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[N]||`/pages/${N}`;e(R)},[v,j]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),y=N=>{j(C=>C.map(R=>R.id===N?{...R,read:!0}:R))},w=()=>{j(N=>N.map(C=>({...C,read:!0})))},x={firstName:"太郎",lastName:"山田",email:"taro.yamada@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"東京都",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"正社員",occupation:"ソフトウェアエンジニア",companyName:"株式会社サンプル",annualIncome:6e6,skills:["プログラミング","デザイン"],workLocation:["東京","リモート"],desiredSalary:6e6,availableStartDate:"2025/02/01",preferredContactTime:"14:00"},g=[{id:"personal",title:"個人情報",icon:"user",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"firstName",label:"名",type:"text"},{key:"lastName",label:"姓",type:"text"},{key:"email",label:"メールアドレス",type:"email"},{key:"phone",label:"電話番号",type:"text"}]},{id:"address",title:"住所情報",icon:"location",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"postalCode",label:"郵便番号",type:"text"},{key:"prefecture",label:"都道府県",type:"badge",badgeConfig:{tokyo:{label:"東京都",variant:"info"},osaka:{label:"大阪府",variant:"info"},kyoto:{label:"京都府",variant:"info"},hokkaido:{label:"北海道",variant:"info"}}},{key:"city",label:"市区町村",type:"text"},{key:"address1",label:"町名・番地",type:"text"},{key:"address2",label:"建物名・部屋番号",type:"text"}]},{id:"employment",title:"職業情報",icon:"briefcase",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"employmentStatus",label:"雇用形態",type:"badge",badgeConfig:{fulltime:{label:"正社員",variant:"success"},parttime:{label:"パート・アルバイト",variant:"info"},contract:{label:"契約社員",variant:"warning"},freelance:{label:"フリーランス",variant:"info"},student:{label:"学生",variant:"default"},unemployed:{label:"無職",variant:"error"}}},{key:"occupation",label:"職種",type:"text"},{key:"companyName",label:"勤務先名",type:"text"},{key:"annualIncome",label:"年収",type:"currency",currencySymbol:"¥",decimals:0}]},{id:"preferences",title:"設定・希望",icon:"settings",collapsible:!0,defaultCollapsed:!1,fields:[{key:"skills",label:"スキル・得意分野",type:"list",listConfig:{style:"inline",renderItem:N=>{const C={programming:"プログラミング",design:"デザイン",marketing:"マーケティング",management:"マネジメント",sales:"営業"};return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--color-primary-100)",color:"var(--color-primary-700)",borderRadius:"var(--radius-full)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",marginRight:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:C[N]||N})}}},{key:"workLocation",label:"希望勤務地",type:"list",listConfig:{style:"inline",renderItem:N=>{const C={tokyo:"東京",osaka:"大阪",nagoya:"名古屋",fukuoka:"福岡",remote:"リモート"};return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",marginRight:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:C[N]||N})}}},{key:"desiredSalary",label:"希望年収",type:"currency",currencySymbol:"¥",decimals:0},{key:"availableStartDate",label:"就業可能日",type:"text",render:N=>N?N.replace(/-/g,"/"):"-"},{key:"preferredContactTime",label:"希望連絡時間",type:"text"}]}],h=[{id:"edit",label:"編集",icon:"edit",variant:"primary",onClick:N=>{e("/pages/data/edit")}},{id:"delete",label:"削除",icon:"delete",variant:"danger",onClick:N=>{sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"データを削除しました"})),e("/pages/data/list")},confirm:{title:"削除の確認",message:"このユーザーを削除してもよろしいですか？この操作は取り消せません。",confirmText:"削除",cancelText:"キャンセル"}}],b=[{label:"ホーム",path:"/"},{label:"データ一覧",path:"/pages/data/list"},{label:"データ詳細"}];return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(Jl,{viewMode:l,onViewModeChange:n}),t.jsx(Le,{viewMode:l,currentPage:"data-detail",onNavigate:p,unreadCount:v.filter(N=>!N.read).length,showNotificationDropdown:r,setShowNotificationDropdown:s,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:v,onMarkNotificationAsRead:y,onMarkAllNotificationsAsRead:w,children:t.jsx(Ju,{title:"データ詳細",data:x,sections:g,actions:h,breadcrumbs:b,layout:{type:"grid",columns:2}})})]})},c4=({userName:e="ゲスト",stats:a=[],recentActivities:l=[],quickActions:n=[],notifications:r=[],flashMessage:s={type:"success",message:"こちらはダッシュボードです"},title:i="ダッシュボード",currentPage:o="dashboard",sidebarMenuItems:c,onNavigate:d,onLogout:m,onMarkNotificationAsRead:f,onMarkAllNotificationsAsRead:p})=>{const v=u.useRef(null),[j,y]=Ie(),[w,x]=u.useState(!1),[g,h]=u.useState(!1),[b,N]=u.useState(!1),[C,R]=u.useState(!1),[k,L]=u.useState(r);u.useEffect(()=>{const S=()=>{const E=window.innerWidth<=768?"sp":"pc";y(E)};return S(),window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S)}},[y]);const T=S=>{if(d){d(S);return}const q=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",J={dashboard:`${q}/dashboard`,"data-list":`${q}/data/list`,statistics:`${q}/statistics`,settings:`${q}/settings`,notifications:`${q}/notifications`,login:`${q}/login`,qna:`${q}/qna`,privacy:`${q}/privacy`,terms:`${q}/terms`,commercial:`${q}/commercial`}[S]||`${q}/${S}`;window.location.href=J},A=()=>{m()},B=S=>{f&&f(S),L(H=>H.map(E=>E.id===S?{...E,read:!0}:E))},_=()=>{p&&p(),L(S=>S.map(H=>({...H,read:!0})))},Q=[{label:"新規データ作成",icon:"plus-circle",onClick:()=>T("data-form")},{label:"データ一覧表示",icon:"table",onClick:()=>T("data-list")},{label:"統計を確認",icon:"chart-bar",onClick:()=>T("statistics")}],Y=n.length>0?n:Q;return t.jsx("div",{className:j==="sp"?"force-mobile":"",children:t.jsxs(Le,{viewMode:j,currentPage:o,onNavigate:T,onLogout:A,userName:e,sidebarMenuItems:c,unreadCount:k.filter(S=>!S.read).length,showNotificationDropdown:w,setShowNotificationDropdown:x,showUserMenu:g,setShowUserMenu:h,isHamburgerOpen:b,setIsHamburgerOpen:N,sidebarCollapsed:C,setSidebarCollapsed:R,notificationRef:v,notifications:k,onMarkNotificationAsRead:B,onMarkAllNotificationsAsRead:_,children:[s&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",background:s.type==="success"?"var(--color-success-50)":s.type==="error"?"var(--color-error-50)":s.type==="warning"?"var(--color-warning-50)":"var(--color-info-50)",border:`1px solid ${s.type==="success"?"var(--color-success-200)":s.type==="error"?"var(--color-error-200)":s.type==="warning"?"var(--color-warning-200)":"var(--color-info-200)"}`,borderRadius:0,color:s.type==="success"?"var(--color-success-900)":s.type==="error"?"var(--color-error-900)":s.type==="warning"?"var(--color-warning-900)":"var(--color-info-900)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:s.type==="success"?"check-circle":s.type==="error"?"exclamation":s.type==="warning"?"warning":"information-circle",style:{color:s.type==="success"?"var(--color-success-600)":s.type==="error"?"var(--color-error-600)":s.type==="warning"?"var(--color-warning-600)":"var(--color-info-600)",width:"20px",height:"20px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:s.message})]}),t.jsx("h1",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)",marginTop:s?"var(--spacing-4)":"0"},children:i}),a.length===0&&l.length===0&&n.length===0?null:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[a.length>0&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--spacing-4)"},role:"region","aria-label":"統計情報",children:a.map((S,H)=>t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},role:"article","aria-label":`${S.label}: ${S.value}`,children:[t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:0,background:`${S.color}20`,display:"flex",alignItems:"center",justifyContent:"center"},"aria-hidden":"true",children:t.jsx(M,{name:S.icon,size:"md",style:{color:S.color}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-1)"},children:S.label}),t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:S.value})]})]},H))}),l.length>0&&t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-5)"},role:"region","aria-label":"最近のアクティビティ",children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"最近のアクティビティ"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:l.map((S,H)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-3)",borderRadius:0,background:"var(--color-neutral-50)"},role:"article",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[S.avatarUrl?t.jsx("img",{src:S.avatarUrl,alt:`${S.user}のアバター`,style:{width:"32px",height:"32px",borderRadius:0,objectFit:"cover"}}):t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:0,background:"var(--color-primary-500)",color:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},"aria-hidden":"true",children:S.user.charAt(0)}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)"},children:S.user}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:S.action})]})]}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:S.time})]},H))})]}),n.length>0&&t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-5)"},role:"region","aria-label":"クイックアクション",children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"クイックアクション"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-3)"},children:Y.map((S,H)=>t.jsxs("button",{onClick:S.onClick,style:{padding:"var(--spacing-3)",borderRadius:0,border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:E=>{E.currentTarget.style.background="var(--color-neutral-50)",E.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:E=>{E.currentTarget.style.background="var(--color-neutral-white)",E.currentTarget.style.borderColor="var(--color-neutral-300)"},"aria-label":S.label,children:[t.jsx(M,{name:S.icon,size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:S.label})]},H))})]})]})]})})},d4=({profileData:e,notifications:a,currentPage:l="settings",onSave:n,onNavigate:r,onLogout:s,onMarkNotificationAsRead:i,onMarkAllNotificationsAsRead:o,flashMessage:c=null,initialViewMode:d="pc",hideNavigation:m=!0})=>{const f=u.useRef(null),[p]=Ie(),[v,j]=u.useState(!1),[y,w]=u.useState(!1),[x,g]=u.useState(!1),[h,b]=u.useState(!1),[N,C]=u.useState(!1),[R,k]=u.useState(c),L={username:"",email:"",role:"",displayName:"",phone:"",department:""},[T,A]=u.useState(e||L),[B,_]=u.useState({...T}),Q=[{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}],[Y,S]=u.useState(a||Q),H=O=>{if(r){r(O);return}const Ne=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",da={dashboard:`${Ne}/dashboard`,"data-list":`${Ne}/data/list`,statistics:`${Ne}/statistics`,settings:`${Ne}/settings`,notifications:`${Ne}/notifications`,login:`${Ne}/login`,qna:`${Ne}/qna`,privacy:`${Ne}/privacy`,terms:`${Ne}/terms`,commercial:`${Ne}/commercial`}[O]||`${Ne}/${O}`;window.location.href=da},E=()=>{if(s){s();return}H("login")},q=O=>{i?i(O):S(ae=>ae.map(fe=>fe.id===O?{...fe,read:!0}:fe))},$=()=>{o?o():S(O=>O.map(ae=>({...ae,read:!0})))},J=()=>{_({...T}),C(!0)},Z=async()=>{if(n)try{await n(B),A({...B}),C(!1),c||(k("プロフィールを保存しました"),setTimeout(()=>k(null),3e3))}catch(O){console.error("Save failed:",O),k("保存に失敗しました"),setTimeout(()=>k(null),3e3)}else A({...B}),C(!1),k("プロフィールを保存しました"),setTimeout(()=>k(null),3e3)},F=()=>{_({...T}),C(!1)},G=(O,ae)=>{_(fe=>({...fe,[O]:ae}))};return t.jsx("div",{className:p==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:p,currentPage:l,onNavigate:H,onLogout:E,unreadCount:Y.filter(O=>!O.read).length,showNotificationDropdown:v,setShowNotificationDropdown:j,showUserMenu:y,setShowUserMenu:w,isHamburgerOpen:x,setIsHamburgerOpen:g,sidebarCollapsed:h,setSidebarCollapsed:b,notificationRef:f,notifications:Y,onMarkNotificationAsRead:q,onMarkAllNotificationsAsRead:$,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"1000px",margin:"0 auto"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-6)",color:"var(--color-neutral-900)"},children:"設定"}),R&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:0,color:"var(--color-success-700)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"check-circle",style:{width:"20px",height:"20px"}}),R]}),t.jsxs("div",{style:{marginBottom:"var(--spacing-8)",padding:"var(--spacing-6)",backgroundColor:"var(--color-neutral-white)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:"プロフィール設定"}),!N&&t.jsxs("button",{className:"btn btn--primary",onClick:J,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(M,{name:"edit",style:{width:"16px",height:"16px"}}),"編集"]})]}),N?t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:p==="sp"?"var(--spacing-2)":"var(--spacing-1_5)"},children:[t.jsx(Ue,{label:"表示名",name:"displayName",value:B.displayName,onChange:O=>G("displayName",O.target.value),placeholder:"表示名を入力"}),t.jsx(Ue,{label:"ユーザー名",name:"username",value:B.username,onChange:O=>G("username",O.target.value),placeholder:"ユーザー名を入力"}),t.jsx(Ue,{label:"メールアドレス",name:"email",type:"email",value:B.email,onChange:O=>G("email",O.target.value),placeholder:"メールアドレスを入力"}),t.jsx(Ue,{label:"電話番号",name:"phone",value:B.phone,onChange:O=>G("phone",O.target.value),placeholder:"電話番号を入力"}),t.jsx(Ue,{label:"部署",name:"department",value:B.department,onChange:O=>G("department",O.target.value),placeholder:"部署を入力"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end",marginTop:"var(--spacing-2)"},children:[t.jsx(Ot,{variant:"text",onClick:F,children:"キャンセル"}),t.jsx(Ot,{variant:"primary",onClick:Z,children:"保存"})]})]}):t.jsxs("div",{style:{color:"var(--color-neutral-600)"},children:[t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"表示名:"})," ",T.displayName]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"ユーザー名:"})," ",T.username]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"メールアドレス:"})," ",T.email]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"電話番号:"})," ",T.phone]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"部署:"})," ",T.department]}),t.jsxs("p",{children:[t.jsx("strong",{children:"役割:"})," ",T.role]})]})]})]})})})},u4=({notifications:e=[],unreadCount:a=0,onMarkAsRead:l,onMarkAllAsRead:n,onNotificationClick:r,onNavigate:s,onLogout:i,currentPage:o="notifications",initialViewMode:c,pagination:d,onLoadMore:m,isLoading:f=!1,emptyMessage:p="通知はありません",enableTypeFilter:v=!1,enableStatusFilter:j=!1})=>{const y=u.useRef(null),[w]=Ie(),[x,g]=u.useState(!1),[h,b]=u.useState(!1),[N,C]=u.useState(!1),[R,k]=u.useState(!1),[L,T]=u.useState(e),[A,B]=u.useState(new Set),[_,Q]=u.useState(null),[Y,S]=u.useState("all");I.useEffect(()=>{T(e)},[e]);const H=async O=>{T(ae=>ae.map(fe=>fe.id===O?{...fe,read:!0}:fe)),B(ae=>new Set(ae).add(O));try{l&&await l(O)}catch(ae){T(e),console.error("Failed to mark notification as read:",ae)}finally{B(ae=>{const fe=new Set(ae);return fe.delete(O),fe})}},E=async()=>{const O=[...L];T(ae=>ae.map(fe=>({...fe,read:!0})));try{n&&await n()}catch(ae){T(O),console.error("Failed to mark all notifications as read:",ae)}},q=O=>{r&&r(O),O.read||H(O.id)},$=()=>{if(i){i();return}handleNavigate("login")},J=(O="info")=>{switch(O){case"success":return"check-circle";case"warning":return"warning";case"error":return"exclamation";default:return"info"}},Z=(O="info")=>{switch(O){case"success":return"var(--color-success-600)";case"warning":return"var(--color-warning-600)";case"error":return"var(--color-error-600)";default:return"var(--color-primary-600)"}},F=L.filter(O=>!(v&&_&&O.type!==_||j&&(Y==="read"&&!O.read||Y==="unread"&&O.read))),G=a||L.filter(O=>!O.read).length;return t.jsx("div",{className:w==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:w,currentPage:o,onNavigate:s,unreadCount:G,showNotificationDropdown:x,setShowNotificationDropdown:g,showUserMenu:h,setShowUserMenu:b,isHamburgerOpen:N,setIsHamburgerOpen:C,sidebarCollapsed:R,setSidebarCollapsed:k,notificationRef:y,notifications:L,onMarkNotificationAsRead:H,onMarkAllNotificationsAsRead:E,onLogout:$,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"900px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-6)",flexWrap:"wrap",gap:"var(--spacing-4)"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"通知一覧"}),L.some(O=>!O.read)&&t.jsxs("button",{onClick:E,disabled:f,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-4)",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:f?"not-allowed":"pointer",transition:"background-color 0.2s",opacity:f?.6:1},onMouseEnter:O=>{f||(O.currentTarget.style.backgroundColor="var(--color-primary-600)")},onMouseLeave:O=>{O.currentTarget.style.backgroundColor="var(--color-primary-500)"},children:[t.jsx(M,{name:"check",style:{width:"16px",height:"16px"}}),"全て既読にする"]})]}),(v||j)&&t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",marginBottom:"var(--spacing-6)",flexWrap:"wrap"},children:[v&&t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[t.jsx("button",{onClick:()=>Q(null),style:{padding:"var(--spacing-2) var(--spacing-3)",background:_===null?"var(--color-primary-500)":"var(--color-neutral-100)",color:_===null?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"全て"}),["info","success","warning","error"].map(O=>t.jsx("button",{onClick:()=>Q(O),style:{padding:"var(--spacing-2) var(--spacing-3)",background:_===O?"var(--color-primary-500)":"var(--color-neutral-100)",color:_===O?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:O},O))]}),j&&t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:["all","read","unread"].map(O=>t.jsx("button",{onClick:()=>S(O),style:{padding:"var(--spacing-2) var(--spacing-3)",background:Y===O?"var(--color-primary-500)":"var(--color-neutral-100)",color:Y===O?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:O==="all"?"全て":O==="read"?"既読":"未読"},O))})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:F.length===0?t.jsxs("div",{style:{padding:"var(--spacing-8)",textAlign:"center",backgroundColor:"var(--color-neutral-50)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx(M,{name:"info",style:{width:"48px",height:"48px",color:"var(--color-neutral-400)",margin:"0 auto var(--spacing-4)"}}),t.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--color-neutral-600)",margin:0},children:p})]}):F.map(O=>t.jsxs("div",{onClick:()=>q(O),style:{padding:"var(--spacing-5)",backgroundColor:O.read?"var(--color-neutral-50)":"var(--color-neutral-white)",borderRadius:0,border:"1px solid var(--color-neutral-200)",display:"flex",gap:"var(--spacing-4)",alignItems:"start",boxShadow:O.read?"none":"var(--shadow-sm)",position:"relative",cursor:r?"pointer":"default",transition:"transform 0.2s, box-shadow 0.2s",opacity:A.has(O.id)?.6:1},onMouseEnter:ae=>{r&&!O.read&&(ae.currentTarget.style.transform="translateY(-2px)",ae.currentTarget.style.boxShadow="var(--shadow-md)")},onMouseLeave:ae=>{r&&(ae.currentTarget.style.transform="translateY(0)",ae.currentTarget.style.boxShadow=O.read?"none":"var(--shadow-sm)")},children:[t.jsx(M,{name:J(O.type),style:{width:"24px",height:"24px",color:Z(O.type),flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"var(--spacing-2)",gap:"var(--spacing-3)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:O.title}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)",whiteSpace:"nowrap",flexShrink:0},children:O.time})]}),t.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)",marginBottom:O.read?0:"var(--spacing-3)",margin:0},children:O.message}),!O.read&&t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"var(--spacing-3)"},children:t.jsxs("button",{onClick:ae=>{ae.stopPropagation(),H(O.id)},disabled:A.has(O.id),style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-1) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",border:"1px solid var(--color-neutral-300)",borderRadius:0,fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:A.has(O.id)?"not-allowed":"pointer",transition:"all 0.2s"},onMouseEnter:ae=>{A.has(O.id)||(ae.currentTarget.style.backgroundColor="var(--color-neutral-200)",ae.currentTarget.style.borderColor="var(--color-neutral-400)")},onMouseLeave:ae=>{ae.currentTarget.style.backgroundColor="var(--color-neutral-100)",ae.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(M,{name:"check",style:{width:"12px",height:"12px"}}),"既読にする"]})})]})]},O.id))}),d&&d.lastPage>1&&t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-6)",padding:"var(--spacing-4)"},children:[t.jsx("button",{onClick:()=>m&&m(d.currentPage-1),disabled:d.currentPage===1||f,style:{padding:"var(--spacing-2) var(--spacing-4)",background:d.currentPage===1?"var(--color-neutral-100)":"var(--color-primary-500)",color:d.currentPage===1?"var(--color-neutral-400)":"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:d.currentPage===1||f?"not-allowed":"pointer"},children:"前へ"}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:[d.currentPage," / ",d.lastPage]}),t.jsx("button",{onClick:()=>m&&m(d.currentPage+1),disabled:d.currentPage===d.lastPage||f,style:{padding:"var(--spacing-2) var(--spacing-4)",background:d.currentPage===d.lastPage?"var(--color-neutral-100)":"var(--color-primary-500)",color:d.currentPage===d.lastPage?"var(--color-neutral-400)":"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:d.currentPage===d.lastPage||f?"not-allowed":"pointer"},children:"次へ"})]}),f&&t.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-4)",color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"読み込み中..."})]})})})},m4=({label:e,value:a,icon:l,iconColor:n,iconBackground:r,trend:s,subtitle:i,format:o,onClick:c})=>{const d=o?o(a):a;return t.jsx("div",{className:`stat-metric-card ${c?"stat-metric-card--clickable":""}`,onClick:c,role:c?"button":void 0,tabIndex:c?0:void 0,onKeyPress:c?m=>{(m.key==="Enter"||m.key===" ")&&c()}:void 0,children:t.jsxs("div",{className:"stat-metric-card__content",children:[t.jsxs("div",{className:"stat-metric-card__text",children:[t.jsx("p",{className:"stat-metric-card__label",children:e}),t.jsx("p",{className:"stat-metric-card__value",children:d}),i&&t.jsx("p",{className:"stat-metric-card__subtitle",children:i}),s&&t.jsxs("div",{className:`stat-metric-card__trend stat-metric-card__trend--${s.isPositive?"positive":"negative"}`,children:[t.jsx(M,{name:s.direction==="up"?"arrow-up":s.direction==="down"?"arrow-down":"minus",size:"xs"}),t.jsxs("span",{className:"stat-metric-card__trend-value",children:[s.value>0?"+":"",s.value,"%"]}),s.label&&t.jsx("span",{className:"stat-metric-card__trend-label",children:s.label})]})]}),l&&t.jsx("div",{className:"stat-metric-card__icon",style:{backgroundColor:r||"var(--color-primary-100)",color:n||"var(--color-primary-700)"},children:t.jsx(M,{name:l,size:"lg"})})]})})},h4=I.memo(m4),p4=({filters:e,onFilterChange:a,onApplyFilters:l,onResetFilters:n,collapsed:r=!1,onToggleCollapsed:s,className:i=""})=>{const o=(d,m)=>{a(d,m)},c=d=>{var m,f,p,v;switch(d.type){case"date-range":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsxs("div",{className:"filter-panel__date-range",children:[t.jsx("input",{type:"date",className:"filter-panel__input filter-panel__input--date",value:((m=d.value)==null?void 0:m.startDate)||"",onChange:j=>o(d.id,{...d.value,startDate:j.target.value}),placeholder:"開始日"}),t.jsx("span",{className:"filter-panel__date-separator",children:"〜"}),t.jsx("input",{type:"date",className:"filter-panel__input filter-panel__input--date",value:((f=d.value)==null?void 0:f.endDate)||"",onChange:j=>o(d.id,{...d.value,endDate:j.target.value}),placeholder:"終了日"})]})]},d.id);case"select":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsxs("select",{className:"filter-panel__select",value:d.value||"",onChange:j=>o(d.id,j.target.value),children:[t.jsx("option",{value:"",children:d.placeholder||"選択してください"}),(p=d.options)==null?void 0:p.map(j=>t.jsx("option",{value:j.value,children:j.label},j.value))]})]},d.id);case"multi-select":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsx("div",{className:"filter-panel__multi-select",children:(v=d.options)==null?void 0:v.map(j=>t.jsxs("label",{className:"filter-panel__checkbox-label",children:[t.jsx("input",{type:"checkbox",className:"filter-panel__checkbox",checked:Array.isArray(d.value)&&d.value.includes(j.value),onChange:y=>{const w=Array.isArray(d.value)?d.value:[],x=y.target.checked?[...w,j.value]:w.filter(g=>g!==j.value);o(d.id,x)}}),t.jsx("span",{children:j.label})]},j.value))})]},d.id);case"checkbox":return t.jsx("div",{className:"filter-panel__field",children:t.jsxs("label",{className:"filter-panel__checkbox-label filter-panel__checkbox-label--single",children:[t.jsx("input",{type:"checkbox",className:"filter-panel__checkbox",checked:!!d.value,onChange:j=>o(d.id,j.target.checked)}),t.jsx("span",{children:d.label})]})},d.id);case"text":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsx("input",{type:"text",className:"filter-panel__input",value:d.value||"",onChange:j=>o(d.id,j.target.value),placeholder:d.placeholder})]},d.id);default:return null}};return t.jsxs("div",{className:`filter-panel ${r?"filter-panel--collapsed":""} ${i}`,children:[t.jsxs("div",{className:"filter-panel__header",children:[t.jsxs("h3",{className:"filter-panel__title",children:[t.jsx(M,{name:"filter",size:"sm"}),t.jsx("span",{children:"フィルター"})]}),s&&t.jsx("button",{className:"filter-panel__toggle",onClick:s,"aria-label":r?"フィルターを表示":"フィルターを非表示",children:t.jsx(M,{name:r?"chevron-down":"chevron-up",size:"sm"})})]}),!r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"filter-panel__body",children:e.map(c)}),t.jsxs("div",{className:"filter-panel__actions",children:[n&&t.jsx(Ot,{variant:"text",size:"sm",onClick:n,icon:"refresh",children:"リセット"}),l&&t.jsx(Ot,{variant:"primary",size:"sm",onClick:l,icon:"check",children:"適用"})]})]})]})},f4=I.memo(p4),g4=({chart:e,className:a=""})=>!e.visible&&e.visible!==void 0?null:t.jsxs("div",{className:`statistics-chart-card ${a}`,children:[t.jsxs("div",{className:"statistics-chart-card__header",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"statistics-chart-card__title",children:e.title}),e.subtitle&&t.jsx("p",{className:"statistics-chart-card__subtitle",children:e.subtitle})]}),e.showRefreshButton&&e.onRefresh&&t.jsx("button",{className:"statistics-chart-card__refresh-button",onClick:e.onRefresh,disabled:e.loading,children:"↻"})]}),t.jsx("div",{className:"statistics-chart-card__content",children:e.loading?t.jsxs("div",{className:"statistics-chart-card__loading",children:[t.jsx("div",{className:"spinner"}),t.jsx("p",{children:"読み込み中..."})]}):t.jsx("div",{className:"statistics-chart-card__chart",children:t.jsxs("div",{style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-neutral-50)",borderRadius:"var(--radius-md)",color:"var(--color-neutral-600)"},children:[e.chartType," Chart: ",e.title]})})}),e.description&&t.jsx("div",{className:"statistics-chart-card__description",children:t.jsx("p",{children:e.description})}),e.lastUpdated&&t.jsx("div",{className:"statistics-chart-card__metadata",children:t.jsxs("span",{className:"statistics-chart-card__last-updated",children:["最終更新: ",new Date(e.lastUpdated).toLocaleString("ja-JP")]})})]}),v4=I.memo(g4),x4=({title:e,subtitle:a,metrics:l=[],charts:n,filters:r=[],exportConfig:s,onFilterChange:i,onApplyFilters:o,onResetFilters:c,onExport:d,viewMode:m="pc",onNavigate:f=()=>{},onLogout:p,showFilters:v=!0,showExport:j=!0,showMetrics:y=!0,chartColumns:w=1,loading:x=!1,error:g,className:h="",breadcrumbs:b,headerActions:N})=>{const[C,R]=u.useState(m),[k,L]=u.useState(!1),T=Y=>{if(f){f(Y);return}const E=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",$={dashboard:`${E}/dashboard`,"data-list":`${E}/data/list`,statistics:`${E}/statistics`,settings:`${E}/settings`,notifications:`${E}/notifications`,login:`${E}/login`,qna:`${E}/qna`,privacy:`${E}/privacy`,terms:`${E}/terms`,commercial:`${E}/commercial`}[Y]||`${E}/${Y}`;window.location.href=$},A=()=>{if(p){p();return}T("login")},B=Y=>{d?d(Y):s!=null&&s.onExport&&s.onExport(Y)},_=[...n].sort((Y,S)=>{const H=Y.order??0,E=S.order??0;return H-E}),Q=()=>x?t.jsxs("div",{className:"statistics-page__loading",children:[t.jsx("div",{className:"statistics-page__spinner",children:t.jsx(M,{name:"refresh",size:"xl"})}),t.jsx("p",{children:"データを読み込んでいます..."})]}):g?t.jsxs("div",{className:"statistics-page__error",children:[t.jsx(M,{name:"exclamation",size:"xl"}),t.jsx("h3",{children:"エラーが発生しました"}),t.jsx("p",{children:g})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"statistics-page__header",children:[t.jsxs("div",{className:"statistics-page__header-content",children:[t.jsx("h1",{className:"statistics-page__title",children:e}),a&&t.jsx("p",{className:"statistics-page__subtitle",children:a})]}),j&&((s==null?void 0:s.enableCsv)||(s==null?void 0:s.enablePng)||(s==null?void 0:s.enablePdf))&&t.jsxs("div",{className:"statistics-page__header-actions",children:[t.jsxs("div",{className:"statistics-page__export-group",children:[s.enableCsv&&t.jsx(Ot,{variant:"secondary",size:"sm",onClick:()=>B("csv"),icon:"download",children:"CSV"}),s.enablePng&&t.jsx(Ot,{variant:"secondary",size:"sm",onClick:()=>B("png"),icon:"image",children:"PNG"}),s.enablePdf&&t.jsx(Ot,{variant:"secondary",size:"sm",onClick:()=>B("pdf"),icon:"file",children:"PDF"})]}),N==null?void 0:N.map((Y,S)=>t.jsx(Ot,{variant:Y.variant||"secondary",size:"sm",onClick:Y.onClick,icon:Y.icon,children:Y.label},S))]})]}),v&&r.length>0&&i&&t.jsx(f4,{filters:r,onFilterChange:i,onApplyFilters:o,onResetFilters:c,collapsed:k,onToggleCollapsed:()=>L(!k)}),y&&l.length>0&&t.jsx("div",{className:"statistics-page__metrics",children:l.map(Y=>t.jsx(h4,{...Y},Y.id))}),n.length>0&&t.jsx("div",{className:"statistics-page__charts",style:{gridTemplateColumns:w>1?`repeat(${w}, 1fr)`:"1fr"},children:_.map(Y=>t.jsx(v4,{chart:Y},Y.id))}),n.length===0&&t.jsxs("div",{className:"statistics-page__empty",children:[t.jsx(M,{name:"chart-bar",size:"xl"}),t.jsx("h3",{children:"統計データがありません"}),t.jsx("p",{children:"表示する統計データがありません。"})]})]});return t.jsx("div",{className:C==="sp"?"force-mobile":"",children:t.jsx(Le,{viewMode:C,currentPage:"statistics",onNavigate:T,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:A,children:t.jsx("div",{className:`statistics-page ${h}`,children:Q()})})})};function b4(){const e=Et();return u.useEffect(()=>{const a=sessionStorage.getItem("redirectPath");a&&(sessionStorage.removeItem("redirectPath"),e(a,{replace:!0}))},[e]),null}function y4(){const{pathname:e}=Kl();return u.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function j4(){const e=[{path:"/",label:"ホーム",icon:"home"},{path:"/pages/login",label:"ページ",icon:"document"},{path:"/components",label:"構成要素",icon:"cube"}];return t.jsx(ib,{children:t.jsxs("div",{className:"app",children:[t.jsx("style",{children:`
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
        `}),t.jsx("nav",{className:"nav-header",children:t.jsxs("div",{className:"nav-container",children:[t.jsx(Lm,{to:"/",className:"nav-logo",children:"UI Components"}),t.jsx("ul",{className:"nav-links",children:e.map(a=>t.jsx("li",{children:t.jsxs(Lm,{to:a.path,className:({isActive:l})=>`nav-link ${l?"active":""}`,end:a.path==="/",children:[t.jsx(M,{name:a.icon,className:"w-4 h-4"}),a.label]})},a.path))})]})}),t.jsxs("main",{className:"main-content",children:[t.jsx(b4,{}),t.jsx(y4,{}),t.jsxs(I2,{children:[t.jsx(ee,{path:"/",element:t.jsx(hb,{})}),t.jsx(ee,{path:"/pages",element:t.jsx(Fj,{})}),t.jsx(ee,{path:"/pages/login",element:t.jsx(Rd,{})}),t.jsx(ee,{path:"/pages/signup",element:t.jsx(Ed,{})}),t.jsx(ee,{path:"/pages/signup-confirm",element:t.jsx(Dd,{})}),t.jsx(ee,{path:"/pages/signup-complete",element:t.jsx(Bd,{})}),t.jsx(ee,{path:"/pages/forgot-password",element:t.jsx(Td,{})}),t.jsx(ee,{path:"/pages/reset-password",element:t.jsx(Ad,{})}),t.jsx(ee,{path:"/pages/password-reset-email",element:t.jsx(ah,{})}),t.jsx(ee,{path:"/pages/dashboard",element:t.jsx(n4,{})}),t.jsx(ee,{path:"/pages/statistics",element:t.jsx(i4,{})}),t.jsx(ee,{path:"/pages/settings",element:t.jsx(t4,{})}),t.jsx(ee,{path:"/pages/notifications",element:t.jsx(l4,{})}),t.jsx(ee,{path:"/pages/data/list",element:t.jsx(e4,{})}),t.jsx(ee,{path:"/pages/data/add",element:t.jsx(Qi,{})}),t.jsx(ee,{path:"/pages/data/edit",element:t.jsx(Qi,{})}),t.jsx(ee,{path:"/pages/data/detail",element:t.jsx(o4,{})}),t.jsx(ee,{path:"/pages/error-404",element:t.jsx(_d,{})}),t.jsx(ee,{path:"/pages/error-500",element:t.jsx(Ld,{})}),t.jsx(ee,{path:"/pages/maintenance",element:t.jsx(Hd,{})}),t.jsx(ee,{path:"/pages/qna",element:t.jsx(Ud,{})}),t.jsx(ee,{path:"/pages/terms",element:t.jsx(Vd,{})}),t.jsx(ee,{path:"/pages/privacy",element:t.jsx($d,{})}),t.jsx(ee,{path:"/pages/commercial",element:t.jsx(Od,{})}),t.jsx(ee,{path:"/templates/login",element:t.jsx(Rd,{})}),t.jsx(ee,{path:"/templates/signup",element:t.jsx(Ed,{})}),t.jsx(ee,{path:"/templates/signup-confirm",element:t.jsx(Dd,{})}),t.jsx(ee,{path:"/templates/signup-complete",element:t.jsx(Bd,{})}),t.jsx(ee,{path:"/templates/forgot-password",element:t.jsx(Td,{})}),t.jsx(ee,{path:"/templates/reset-password",element:t.jsx(Ad,{})}),t.jsx(ee,{path:"/templates/password-reset-email",element:t.jsx(ah,{})}),t.jsx(ee,{path:"/templates/dashboard",element:t.jsx(c4,{})}),t.jsx(ee,{path:"/templates/settings",element:t.jsx(d4,{})}),t.jsx(ee,{path:"/templates/notifications",element:t.jsx(u4,{})}),t.jsx(ee,{path:"/templates/statistics",element:t.jsx(x4,{title:"統計",charts:[]})}),t.jsx(ee,{path:"/templates/data/list",element:t.jsx(eg,{title:"データ一覧",columns:[],data:[]})}),t.jsx(ee,{path:"/templates/data/add",element:t.jsx(qd,{title:"データ作成",validation:{},onSubmit:async()=>{}})}),t.jsx(ee,{path:"/templates/data/edit",element:t.jsx(qd,{title:"データ編集",validation:{},onSubmit:async()=>{}})}),t.jsx(ee,{path:"/templates/data/detail",element:t.jsx(Ju,{title:"データ詳細",data:{}})}),t.jsx(ee,{path:"/templates/error-404",element:t.jsx(_d,{})}),t.jsx(ee,{path:"/templates/error-500",element:t.jsx(Ld,{})}),t.jsx(ee,{path:"/templates/maintenance",element:t.jsx(Hd,{})}),t.jsx(ee,{path:"/templates/qna",element:t.jsx(Ud,{})}),t.jsx(ee,{path:"/templates/terms",element:t.jsx(Vd,{})}),t.jsx(ee,{path:"/templates/privacy",element:t.jsx($d,{})}),t.jsx(ee,{path:"/templates/commercial",element:t.jsx(Od,{})}),t.jsx(ee,{path:"/components",element:t.jsx(pb,{})}),t.jsx(ee,{path:"/buttons",element:t.jsx(gb,{})}),t.jsx(ee,{path:"/forms",element:t.jsx(yb,{})}),t.jsx(ee,{path:"/messages",element:t.jsx(Km,{})}),t.jsx(ee,{path:"/messages-notifications",element:t.jsx(Km,{})}),t.jsx(ee,{path:"/tables",element:t.jsx(Jm,{})}),t.jsx(ee,{path:"/tables-graphs",element:t.jsx(Jm,{})}),t.jsx(ee,{path:"/navigation",element:t.jsx(Oj,{})}),t.jsx(ee,{path:"/layout",element:t.jsx(Vj,{})}),t.jsx(ee,{path:"/icons",element:t.jsx(jb,{})})]})]}),t.jsx("footer",{style:{textAlign:"center",padding:"var(--spacing-8)",color:"var(--color-neutral-600)",borderTop:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-white)"},children:t.jsx("p",{children:"UI Components Library"})})]})})}d2.createRoot(document.getElementById("root")).render(t.jsx(I.StrictMode,{children:t.jsx(j4,{})}));
