function hg(e,a){for(var l=0;l<a.length;l++){const n=a[l];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();function th(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},Fi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=Symbol.for("react.transitional.element"),fg=Symbol.for("react.fragment");function nh(e,a,l){var n=null;if(l!==void 0&&(n=""+l),a.key!==void 0&&(n=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:pg,type:e,key:n,ref:a!==void 0?a:null,props:l}}Fi.Fragment=fg;Fi.jsx=nh;Fi.jsxs=nh;lh.exports=Fi;var t=lh.exports,sh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=Symbol.for("react.transitional.element"),gg=Symbol.for("react.portal"),vg=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),bg=Symbol.for("react.profiler"),yg=Symbol.for("react.consumer"),jg=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),Ng=Symbol.for("react.suspense"),Sg=Symbol.for("react.memo"),rh=Symbol.for("react.lazy"),zg=Symbol.for("react.activity"),t0=Symbol.iterator;function Cg(e){return e===null||typeof e!="object"?null:(e=t0&&e[t0]||e["@@iterator"],typeof e=="function"?e:null)}var ih={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oh=Object.assign,ch={};function cs(e,a,l){this.props=e,this.context=a,this.refs=ch,this.updater=l||ih}cs.prototype.isReactComponent={};cs.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};cs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dh(){}dh.prototype=cs.prototype;function Wd(e,a,l){this.props=e,this.context=a,this.refs=ch,this.updater=l||ih}var Gd=Wd.prototype=new dh;Gd.constructor=Wd;oh(Gd,cs.prototype);Gd.isPureReactComponent=!0;var l0=Array.isArray;function jc(){}var Je={H:null,A:null,T:null,S:null},uh=Object.prototype.hasOwnProperty;function Xd(e,a,l){var n=l.ref;return{$$typeof:Yd,type:e,key:a,ref:n!==void 0?n:null,props:l}}function kg(e,a){return Xd(e.type,a,e.props)}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yd}function Mg(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return a[l]})}var n0=/\/+/g;function Ao(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Mg(""+e.key):a.toString(36)}function Rg(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(jc,jc):(e.status="pending",e.then(function(a){e.status==="pending"&&(e.status="fulfilled",e.value=a)},function(a){e.status==="pending"&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Rn(e,a,l,n,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Yd:case gg:i=!0;break;case rh:return i=e._init,Rn(i(e._payload),a,l,n,s)}}if(i)return s=s(e),i=n===""?"."+Ao(e,0):n,l0(s)?(l="",i!=null&&(l=i.replace(n0,"$&/")+"/"),Rn(s,a,l,"",function(d){return d})):s!=null&&(Qd(s)&&(s=kg(s,l+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(n0,"$&/")+"/")+i)),a.push(s)),1;i=0;var o=n===""?".":n+":";if(l0(e))for(var c=0;c<e.length;c++)n=e[c],r=o+Ao(n,c),i+=Rn(n,a,l,r,s);else if(c=Cg(e),typeof c=="function")for(e=c.call(e),c=0;!(n=e.next()).done;)n=n.value,r=o+Ao(n,c++),i+=Rn(n,a,l,r,s);else if(r==="object"){if(typeof e.then=="function")return Rn(Rg(e),a,l,n,s);throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return i}function Dr(e,a,l){if(e==null)return e;var n=[],s=0;return Rn(e,n,"","",function(r){return a.call(l,r,s++)}),n}function Tg(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var s0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ag={map:Dr,forEach:function(e,a,l){Dr(e,function(){a.apply(this,arguments)},l)},count:function(e){var a=0;return Dr(e,function(){a++}),a},toArray:function(e){return Dr(e,function(a){return a})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Activity=zg;he.Children=Ag;he.Component=cs;he.Fragment=vg;he.Profiler=bg;he.PureComponent=Wd;he.StrictMode=xg;he.Suspense=Ng;he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Je;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Je.H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cacheSignal=function(){return null};he.cloneElement=function(e,a,l){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=oh({},e.props),s=e.key;if(a!=null)for(r in a.key!==void 0&&(s=""+a.key),a)!uh.call(a,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&a.ref===void 0||(n[r]=a[r]);var r=arguments.length-2;if(r===1)n.children=l;else if(1<r){for(var i=Array(r),o=0;o<r;o++)i[o]=arguments[o+2];n.children=i}return Xd(e.type,s,n)};he.createContext=function(e){return e={$$typeof:jg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:yg,_context:e},e};he.createElement=function(e,a,l){var n,s={},r=null;if(a!=null)for(n in a.key!==void 0&&(r=""+a.key),a)uh.call(a,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(s[n]=a[n]);var i=arguments.length-2;if(i===1)s.children=l;else if(1<i){for(var o=Array(i),c=0;c<i;c++)o[c]=arguments[c+2];s.children=o}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)s[n]===void 0&&(s[n]=i[n]);return Xd(e,r,s)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:wg,render:e}};he.isValidElement=Qd;he.lazy=function(e){return{$$typeof:rh,_payload:{_status:-1,_result:e},_init:Tg}};he.memo=function(e,a){return{$$typeof:Sg,type:e,compare:a===void 0?null:a}};he.startTransition=function(e){var a=Je.T,l={};Je.T=l;try{var n=e(),s=Je.S;s!==null&&s(l,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(jc,s0)}catch(r){s0(r)}finally{a!==null&&l.types!==null&&(a.types=l.types),Je.T=a}};he.unstable_useCacheRefresh=function(){return Je.H.useCacheRefresh()};he.use=function(e){return Je.H.use(e)};he.useActionState=function(e,a,l){return Je.H.useActionState(e,a,l)};he.useCallback=function(e,a){return Je.H.useCallback(e,a)};he.useContext=function(e){return Je.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e,a){return Je.H.useDeferredValue(e,a)};he.useEffect=function(e,a){return Je.H.useEffect(e,a)};he.useEffectEvent=function(e){return Je.H.useEffectEvent(e)};he.useId=function(){return Je.H.useId()};he.useImperativeHandle=function(e,a,l){return Je.H.useImperativeHandle(e,a,l)};he.useInsertionEffect=function(e,a){return Je.H.useInsertionEffect(e,a)};he.useLayoutEffect=function(e,a){return Je.H.useLayoutEffect(e,a)};he.useMemo=function(e,a){return Je.H.useMemo(e,a)};he.useOptimistic=function(e,a){return Je.H.useOptimistic(e,a)};he.useReducer=function(e,a,l){return Je.H.useReducer(e,a,l)};he.useRef=function(e){return Je.H.useRef(e)};he.useState=function(e){return Je.H.useState(e)};he.useSyncExternalStore=function(e,a,l){return Je.H.useSyncExternalStore(e,a,l)};he.useTransition=function(){return Je.H.useTransition()};he.version="19.2.0";sh.exports=he;var u=sh.exports;const ee=th(u),wc=hg({__proto__:null,default:ee},[u]);var mh={exports:{}},Pi={},hh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(A,R){var E=A.length;A.push(R);e:for(;0<E;){var U=E-1>>>1,V=A[U];if(0<s(V,R))A[U]=R,A[E]=V,E=U;else break e}}function l(A){return A.length===0?null:A[0]}function n(A){if(A.length===0)return null;var R=A[0],E=A.pop();if(E!==R){A[0]=E;e:for(var U=0,V=A.length,J=V>>>1;U<J;){var P=2*(U+1)-1,Z=A[P],F=P+1,I=A[F];if(0>s(Z,E))F<V&&0>s(I,Z)?(A[U]=I,A[F]=E,U=F):(A[U]=Z,A[P]=E,U=P);else if(F<V&&0>s(I,E))A[U]=I,A[F]=E,U=F;else break e}}return R}function s(A,R){var E=A.sortIndex-R.sortIndex;return E!==0?E:A.id-R.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],d=[],m=1,f=null,p=3,x=!1,y=!1,j=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function g(A){for(var R=l(d);R!==null;){if(R.callback===null)n(d);else if(R.startTime<=A)n(d),R.sortIndex=R.expirationTime,a(c,R);else break;R=l(d)}}function N(A){if(j=!1,g(A),!y)if(l(c)!==null)y=!0,T||(T=!0,B());else{var R=l(d);R!==null&&G(N,R.startTime-A)}}var T=!1,z=-1,C=5,L=-1;function H(){return w?!0:!(e.unstable_now()-L<C)}function M(){if(w=!1,T){var A=e.unstable_now();L=A;var R=!0;try{e:{y=!1,j&&(j=!1,v(z),z=-1),x=!0;var E=p;try{a:{for(g(A),f=l(c);f!==null&&!(f.expirationTime>A&&H());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var V=U(f.expirationTime<=A);if(A=e.unstable_now(),typeof V=="function"){f.callback=V,g(A),R=!0;break a}f===l(c)&&n(c),g(A)}else n(c);f=l(c)}if(f!==null)R=!0;else{var J=l(d);J!==null&&G(N,J.startTime-A),R=!1}}break e}finally{f=null,p=E,x=!1}R=void 0}}finally{R?B():T=!1}}}var B;if(typeof h=="function")B=function(){h(M)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,Y=_.port2;_.port1.onmessage=M,B=function(){Y.postMessage(null)}}else B=function(){b(M,0)};function G(A,R){z=b(function(){A(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var E=p;p=R;try{return A()}finally{p=E}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var E=p;p=A;try{return R()}finally{p=E}},e.unstable_scheduleCallback=function(A,R,E){var U=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?U+E:U):E=U,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=E+V,A={id:m++,callback:R,priorityLevel:A,startTime:E,expirationTime:V,sortIndex:-1},E>U?(A.sortIndex=E,a(d,A),l(c)===null&&A===l(d)&&(j?(v(z),z=-1):j=!0,G(N,E-U))):(A.sortIndex=V,a(c,A),y||x||(y=!0,T||(T=!0,B()))),A},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(A){var R=p;return function(){var E=p;p=R;try{return A.apply(this,arguments)}finally{p=E}}}})(ph);hh.exports=ph;var Eg=hh.exports,fh={exports:{}},Ya={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=u;function gh(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function vl(){}var qa={d:{f:vl,r:function(){throw Error(gh(522))},D:vl,C:vl,L:vl,m:vl,X:vl,S:vl,M:vl},p:0,findDOMNode:null},Bg=Symbol.for("react.portal");function _g(e,a,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bg,key:n==null?null:""+n,children:e,containerInfo:a,implementation:l}}var Ds=Dg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Zi(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=qa;Ya.createPortal=function(e,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(gh(299));return _g(e,a,null,l)};Ya.flushSync=function(e){var a=Ds.T,l=qa.p;try{if(Ds.T=null,qa.p=2,e)return e()}finally{Ds.T=a,qa.p=l,qa.d.f()}};Ya.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,qa.d.C(e,a))};Ya.prefetchDNS=function(e){typeof e=="string"&&qa.d.D(e)};Ya.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var l=a.as,n=Zi(l,a.crossOrigin),s=typeof a.integrity=="string"?a.integrity:void 0,r=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;l==="style"?qa.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:n,integrity:s,fetchPriority:r}):l==="script"&&qa.d.X(e,{crossOrigin:n,integrity:s,fetchPriority:r,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Ya.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var l=Zi(a.as,a.crossOrigin);qa.d.M(e,{crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&qa.d.M(e)};Ya.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var l=a.as,n=Zi(l,a.crossOrigin);qa.d.L(e,l,{crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Ya.preloadModule=function(e,a){if(typeof e=="string")if(a){var l=Zi(a.as,a.crossOrigin);qa.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else qa.d.m(e)};Ya.requestFormReset=function(e){qa.d.r(e)};Ya.unstable_batchedUpdates=function(e,a){return e(a)};Ya.useFormState=function(e,a,l){return Ds.H.useFormState(e,a,l)};Ya.useFormStatus=function(){return Ds.H.useHostTransitionStatus()};Ya.version="19.2.0";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(e){console.error(e)}}vh(),fh.exports=Ya;var Fd=fh.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Eg,xh=u,Lg=Fd;function O(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hr(e){var a=e,l=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(l=a.return),e=a.return;while(e)}return a.tag===3?l:null}function yh(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function jh(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function r0(e){if(hr(e)!==e)throw Error(O(188))}function Hg(e){var a=e.alternate;if(!a){if(a=hr(e),a===null)throw Error(O(188));return a!==e?null:e}for(var l=e,n=a;;){var s=l.return;if(s===null)break;var r=s.alternate;if(r===null){if(n=s.return,n!==null){l=n;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===l)return r0(s),e;if(r===n)return r0(s),a;r=r.sibling}throw Error(O(188))}if(l.return!==n.return)l=s,n=r;else{for(var i=!1,o=s.child;o;){if(o===l){i=!0,l=s,n=r;break}if(o===n){i=!0,n=s,l=r;break}o=o.sibling}if(!i){for(o=r.child;o;){if(o===l){i=!0,l=r,n=s;break}if(o===n){i=!0,n=r,l=s;break}o=o.sibling}if(!i)throw Error(O(189))}}if(l.alternate!==n)throw Error(O(190))}if(l.tag!==3)throw Error(O(188));return l.stateNode.current===l?e:a}function wh(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=wh(e),a!==null)return a;e=e.sibling}return null}var Ie=Object.assign,Og=Symbol.for("react.element"),Br=Symbol.for("react.transitional.element"),zs=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Sh=Symbol.for("react.consumer"),el=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),zc=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),xl=Symbol.for("react.lazy"),Cc=Symbol.for("react.activity"),Vg=Symbol.for("react.memo_cache_sentinel"),i0=Symbol.iterator;function xs(e){return e===null||typeof e!="object"?null:(e=i0&&e[i0]||e["@@iterator"],typeof e=="function"?e:null)}var $g=Symbol.for("react.client.reference");function kc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$g?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Nc:return"Profiler";case Nh:return"StrictMode";case Sc:return"Suspense";case zc:return"SuspenseList";case Cc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zs:return"Portal";case el:return e.displayName||"Context";case Sh:return(e._context.displayName||"Context")+".Consumer";case Pd:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zd:return a=e.displayName||null,a!==null?a:kc(e.type)||"Memo";case xl:a=e._payload,e=e._init;try{return kc(e(a))}catch{}}return null}var Cs=Array.isArray,oe=xh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De=Lg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,on={pending:!1,data:null,method:null,action:null},Mc=[],Dn=-1;function qt(e){return{current:e}}function Ra(e){0>Dn||(e.current=Mc[Dn],Mc[Dn]=null,Dn--)}function Qe(e,a){Dn++,Mc[Dn]=e.current,e.current=a}var $t=qt(null),Zs=qt(null),Bl=qt(null),mi=qt(null);function hi(e,a){switch(Qe(Bl,a),Qe(Zs,e),Qe($t,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?hm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=hm(a),e=Wp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ra($t),Qe($t,e)}function Kn(){Ra($t),Ra(Zs),Ra(Bl)}function Rc(e){e.memoizedState!==null&&Qe(mi,e);var a=$t.current,l=Wp(a,e.type);a!==l&&(Qe(Zs,e),Qe($t,l))}function pi(e){Zs.current===e&&(Ra($t),Ra(Zs)),mi.current===e&&(Ra(mi),ir._currentValue=on)}var Eo,o0;function en(e){if(Eo===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Eo=a&&a[1]||"",o0=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Eo+e+o0}var Do=!1;function Bo(e,a){if(!e||Do)return"";Do=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(x){var p=x}Reflect.construct(e,[],f)}else{try{f.call()}catch(x){p=x}e.call(f.prototype)}}else{try{throw Error()}catch(x){p=x}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),i=r[0],o=r[1];if(i&&o){var c=i.split(`
`),d=o.split(`
`);for(s=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;s<d.length&&!d[s].includes("DetermineComponentFrameRoot");)s++;if(n===c.length||s===d.length)for(n=c.length-1,s=d.length-1;1<=n&&0<=s&&c[n]!==d[s];)s--;for(;1<=n&&0<=s;n--,s--)if(c[n]!==d[s]){if(n!==1||s!==1)do if(n--,s--,0>s||c[n]!==d[s]){var m=`
`+c[n].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=n&&0<=s);break}}}finally{Do=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?en(l):""}function Ug(e,a){switch(e.tag){case 26:case 27:case 5:return en(e.type);case 16:return en("Lazy");case 13:return e.child!==a&&a!==null?en("Suspense Fallback"):en("Suspense");case 19:return en("SuspenseList");case 0:case 15:return Bo(e.type,!1);case 11:return Bo(e.type.render,!1);case 1:return Bo(e.type,!0);case 31:return en("Activity");default:return""}}function c0(e){try{var a="",l=null;do a+=Ug(e,l),l=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Tc=Object.prototype.hasOwnProperty,Kd=za.unstable_scheduleCallback,_o=za.unstable_cancelCallback,qg=za.unstable_shouldYield,Yg=za.unstable_requestPaint,dt=za.unstable_now,Wg=za.unstable_getCurrentPriorityLevel,zh=za.unstable_ImmediatePriority,Ch=za.unstable_UserBlockingPriority,fi=za.unstable_NormalPriority,Gg=za.unstable_LowPriority,kh=za.unstable_IdlePriority,Xg=za.log,Qg=za.unstable_setDisableYieldValue,pr=null,ut=null;function zl(e){if(typeof Xg=="function"&&Qg(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(pr,e)}catch{}}var mt=Math.clz32?Math.clz32:Zg,Fg=Math.log,Pg=Math.LN2;function Zg(e){return e>>>=0,e===0?32:31-(Fg(e)/Pg|0)|0}var _r=256,Lr=262144,Hr=4194304;function an(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,a,l){var n=e.pendingLanes;if(n===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~r,n!==0?s=an(n):(i&=o,i!==0?s=an(i):l||(l=o&~e,l!==0&&(s=an(l))))):(o=n&~r,o!==0?s=an(o):i!==0?s=an(i):l||(l=n&~e,l!==0&&(s=an(l)))),s===0?0:a!==0&&a!==s&&!(a&r)&&(r=s&-s,l=a&-a,r>=l||r===32&&(l&4194048)!==0)?a:s}function fr(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Kg(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mh(){var e=Hr;return Hr<<=1,!(Hr&62914560)&&(Hr=4194304),e}function Lo(e){for(var a=[],l=0;31>l;l++)a.push(e);return a}function gr(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jg(e,a,l,n,s,r){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,d=e.hiddenUpdates;for(l=i&~l;0<l;){var m=31-mt(l),f=1<<m;o[m]=0,c[m]=-1;var p=d[m];if(p!==null)for(d[m]=null,m=0;m<p.length;m++){var x=p[m];x!==null&&(x.lane&=-536870913)}l&=~f}n!==0&&Rh(e,n,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~a))}function Rh(e,a,l){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-mt(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function Th(e,a){var l=e.entangledLanes|=a;for(e=e.entanglements;l;){var n=31-mt(l),s=1<<n;s&a|e[n]&a&&(e[n]|=a),l&=~s}}function Ah(e,a){var l=a&-a;return l=l&42?1:Jd(l),l&(e.suspendedLanes|a)?0:l}function Jd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Id(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Eh(){var e=De.p;return e!==0?e:(e=window.event,e===void 0?32:af(e.type))}function d0(e,a){var l=De.p;try{return De.p=e,a()}finally{De.p=l}}var Pl=Math.random().toString(36).slice(2),Da="__reactFiber$"+Pl,at="__reactProps$"+Pl,ds="__reactContainer$"+Pl,Ac="__reactEvents$"+Pl,Ig="__reactListeners$"+Pl,ev="__reactHandles$"+Pl,u0="__reactResources$"+Pl,vr="__reactMarker$"+Pl;function eu(e){delete e[Da],delete e[at],delete e[Ac],delete e[Ig],delete e[ev]}function Bn(e){var a=e[Da];if(a)return a;for(var l=e.parentNode;l;){if(a=l[ds]||l[Da]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(e=xm(e);e!==null;){if(l=e[Da])return l;e=xm(e)}return a}e=l,l=e.parentNode}return null}function us(e){if(e=e[Da]||e[ds]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ks(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(O(33))}function Wn(e){var a=e[u0];return a||(a=e[u0]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ma(e){e[vr]=!0}var Dh=new Set,Bh={};function bn(e,a){Jn(e,a),Jn(e+"Capture",a)}function Jn(e,a){for(Bh[e]=a,e=0;e<a.length;e++)Dh.add(a[e])}var av=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m0={},h0={};function tv(e){return Tc.call(h0,e)?!0:Tc.call(m0,e)?!1:av.test(e)?h0[e]=!0:(m0[e]=!0,!1)}function Kr(e,a,l){if(tv(a))if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+l)}}function Or(e,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+l)}}function Xt(e,a,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(a,l,""+n)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _h(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function lv(e,a,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return s.call(this)},set:function(i){l=""+i,r.call(this,i)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ec(e){if(!e._valueTracker){var a=_h(e)?"checked":"value";e._valueTracker=lv(e,a,""+e[a])}}function Lh(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var l=a.getValue(),n="";return e&&(n=_h(e)?e.checked?"true":"false":e.value),e=n,e!==l?(a.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nv=/[\n"\\]/g;function wt(e){return e.replace(nv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Dc(e,a,l,n,s,r,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+bt(a)):e.value!==""+bt(a)&&(e.value=""+bt(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Bc(e,i,bt(a)):l!=null?Bc(e,i,bt(l)):n!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+bt(o):e.removeAttribute("name")}function Hh(e,a,l,n,s,r,i,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),a!=null||l!=null){if(!(r!=="submit"&&r!=="reset"||a!=null)){Ec(e);return}l=l!=null?""+bt(l):"",a=a!=null?""+bt(a):l,o||a===e.value||(e.value=a),e.defaultValue=a}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Ec(e)}function Bc(e,a,l){a==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Gn(e,a,l,n){if(e=e.options,a){a={};for(var s=0;s<l.length;s++)a["$"+l[s]]=!0;for(l=0;l<e.length;l++)s=a.hasOwnProperty("$"+e[l].value),e[l].selected!==s&&(e[l].selected=s),s&&n&&(e[l].defaultSelected=!0)}else{for(l=""+bt(l),a=null,s=0;s<e.length;s++){if(e[s].value===l){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}a!==null||e[s].disabled||(a=e[s])}a!==null&&(a.selected=!0)}}function Oh(e,a,l){if(a!=null&&(a=""+bt(a),a!==e.value&&(e.value=a),l==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=l!=null?""+bt(l):""}function Vh(e,a,l,n){if(a==null){if(n!=null){if(l!=null)throw Error(O(92));if(Cs(n)){if(1<n.length)throw Error(O(93));n=n[0]}l=n}l==null&&(l=""),a=l}l=bt(a),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),Ec(e)}function In(e,a){if(a){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=a;return}}e.textContent=a}var sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function p0(e,a,l){var n=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,l):typeof l!="number"||l===0||sv.has(a)?a==="float"?e.cssFloat=l:e[a]=(""+l).trim():e[a]=l+"px"}function $h(e,a,l){if(a!=null&&typeof a!="object")throw Error(O(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var s in a)n=a[s],a.hasOwnProperty(s)&&l[s]!==n&&p0(e,s,n)}else for(var r in a)a.hasOwnProperty(r)&&p0(e,r,a[r])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jr(e){return iv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function al(){}var _c=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,Xn=null;function f0(e){var a=us(e);if(a&&(e=a.stateNode)){var l=e[at]||null;e:switch(e=a.stateNode,a.type){case"input":if(Dc(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+wt(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var n=l[a];if(n!==e&&n.form===e.form){var s=n[at]||null;if(!s)throw Error(O(90));Dc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(a=0;a<l.length;a++)n=l[a],n.form===e.form&&Lh(n)}break e;case"textarea":Oh(e,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Gn(e,!!l.multiple,a,!1)}}}var Ho=!1;function Uh(e,a,l){if(Ho)return e(a,l);Ho=!0;try{var n=e(a);return n}finally{if(Ho=!1,(_n!==null||Xn!==null)&&(co(),_n&&(a=_n,e=Xn,Xn=_n=null,f0(a),e)))for(a=0;a<e.length;a++)f0(e[a])}}function Ks(e,a){var l=e.stateNode;if(l===null)return null;var n=l[at]||null;if(n===null)return null;l=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(O(231,a,typeof l));return l}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=!1;if(il)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Lc=!1}var Cl=null,lu=null,Ir=null;function qh(){if(Ir)return Ir;var e,a=lu,l=a.length,n,s="value"in Cl?Cl.value:Cl.textContent,r=s.length;for(e=0;e<l&&a[e]===s[e];e++);var i=l-e;for(n=1;n<=i&&a[l-n]===s[r-n];n++);return Ir=s.slice(e,1<n?1-n:void 0)}function ei(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function g0(){return!1}function tt(e){function a(l,n,s,r,i){this._reactName=l,this._targetInst=s,this.type=n,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Vr:g0,this.isPropagationStopped=g0,this}return Ie(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),a}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=tt(yn),xr=Ie({},yn,{view:0,detail:0}),ov=tt(xr),Oo,Vo,ys,Ii=Ie({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ys&&(ys&&e.type==="mousemove"?(Oo=e.screenX-ys.screenX,Vo=e.screenY-ys.screenY):Vo=Oo=0,ys=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),v0=tt(Ii),cv=Ie({},Ii,{dataTransfer:0}),dv=tt(cv),uv=Ie({},xr,{relatedTarget:0}),$o=tt(uv),mv=Ie({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=tt(mv),pv=Ie({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fv=tt(pv),gv=Ie({},yn,{data:0}),x0=tt(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=bv[e])?!!a[e]:!1}function nu(){return yv}var jv=Ie({},xr,{key:function(e){if(e.key){var a=vv[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=tt(jv),Nv=Ie({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=tt(Nv),Sv=Ie({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),zv=tt(Sv),Cv=Ie({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=tt(Cv),Mv=Ie({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=tt(Mv),Tv=Ie({},yn,{newState:0,oldState:0}),Av=tt(Tv),Ev=[9,13,27,32],su=il&&"CompositionEvent"in window,Bs=null;il&&"documentMode"in document&&(Bs=document.documentMode);var Dv=il&&"TextEvent"in window&&!Bs,Yh=il&&(!su||Bs&&8<Bs&&11>=Bs),y0=" ",j0=!1;function Wh(e,a){switch(e){case"keyup":return Ev.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Bv(e,a){switch(e){case"compositionend":return Gh(a);case"keypress":return a.which!==32?null:(j0=!0,y0);case"textInput":return e=a.data,e===y0&&j0?null:e;default:return null}}function _v(e,a){if(Ln)return e==="compositionend"||!su&&Wh(e,a)?(e=qh(),Ir=lu=Cl=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Yh&&a.locale!=="ko"?null:a.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Lv[e.type]:a==="textarea"}function Xh(e,a,l,n){_n?Xn?Xn.push(n):Xn=[n]:_n=n,a=Bi(a,"onChange"),0<a.length&&(l=new Ji("onChange","change",null,l,n),e.push({event:l,listeners:a}))}var _s=null,Js=null;function Hv(e){Up(e,0)}function eo(e){var a=ks(e);if(Lh(a))return e}function N0(e,a){if(e==="change")return a}var Qh=!1;if(il){var Uo;if(il){var qo="oninput"in document;if(!qo){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),qo=typeof S0.oninput=="function"}Uo=qo}else Uo=!1;Qh=Uo&&(!document.documentMode||9<document.documentMode)}function z0(){_s&&(_s.detachEvent("onpropertychange",Fh),Js=_s=null)}function Fh(e){if(e.propertyName==="value"&&eo(Js)){var a=[];Xh(a,Js,e,tu(e)),Uh(Hv,a)}}function Ov(e,a,l){e==="focusin"?(z0(),_s=a,Js=l,_s.attachEvent("onpropertychange",Fh)):e==="focusout"&&z0()}function Vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(Js)}function $v(e,a){if(e==="click")return eo(a)}function Uv(e,a){if(e==="input"||e==="change")return eo(a)}function qv(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var pt=typeof Object.is=="function"?Object.is:qv;function Is(e,a){if(pt(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var l=Object.keys(e),n=Object.keys(a);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var s=l[n];if(!Tc.call(a,s)||!pt(e[s],a[s]))return!1}return!0}function C0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k0(e,a){var l=C0(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=a&&n>=a)return{node:l,offset:a-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=C0(l)}}function Ph(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ph(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Zh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=gi(e.document);a instanceof e.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)e=a.contentWindow;else break;a=gi(e.document)}return a}function ru(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Yv=il&&"documentMode"in document&&11>=document.documentMode,Hn=null,Hc=null,Ls=null,Oc=!1;function M0(e,a,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Oc||Hn==null||Hn!==gi(n)||(n=Hn,"selectionStart"in n&&ru(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ls&&Is(Ls,n)||(Ls=n,n=Bi(Hc,"onSelect"),0<n.length&&(a=new Ji("onSelect","select",null,a,l),e.push({event:a,listeners:n}),a.target=Hn)))}function Il(e,a){var l={};return l[e.toLowerCase()]=a.toLowerCase(),l["Webkit"+e]="webkit"+a,l["Moz"+e]="moz"+a,l}var On={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionrun:Il("Transition","TransitionRun"),transitionstart:Il("Transition","TransitionStart"),transitioncancel:Il("Transition","TransitionCancel"),transitionend:Il("Transition","TransitionEnd")},Yo={},Kh={};il&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function jn(e){if(Yo[e])return Yo[e];if(!On[e])return e;var a=On[e],l;for(l in a)if(a.hasOwnProperty(l)&&l in Kh)return Yo[e]=a[l];return e}var Jh=jn("animationend"),Ih=jn("animationiteration"),e1=jn("animationstart"),Wv=jn("transitionrun"),Gv=jn("transitionstart"),Xv=jn("transitioncancel"),a1=jn("transitionend"),t1=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function Et(e,a){t1.set(e,a),bn(a,[e])}var vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],Vn=0,iu=0;function ao(){for(var e=Vn,a=iu=Vn=0;a<e;){var l=xt[a];xt[a++]=null;var n=xt[a];xt[a++]=null;var s=xt[a];xt[a++]=null;var r=xt[a];if(xt[a++]=null,n!==null&&s!==null){var i=n.pending;i===null?s.next=s:(s.next=i.next,i.next=s),n.pending=s}r!==0&&l1(l,s,r)}}function to(e,a,l,n){xt[Vn++]=e,xt[Vn++]=a,xt[Vn++]=l,xt[Vn++]=n,iu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ou(e,a,l,n){return to(e,a,l,n),xi(e)}function wn(e,a){return to(e,null,null,a),xi(e)}function l1(e,a,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var s=!1,r=e.return;r!==null;)r.childLanes|=l,n=r.alternate,n!==null&&(n.childLanes|=l),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&a!==null&&(s=31-mt(l),e=r.hiddenUpdates,n=e[s],n===null?e[s]=[a]:n.push(a),a.lane=l|536870912),r):null}function xi(e){if(50<Gs)throw Gs=0,rd=null,Error(O(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var $n={};function Qv(e,a,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,a,l,n){return new Qv(e,a,l,n)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ll(e,a){var l=e.alternate;return l===null?(l=ot(e.tag,a,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=a,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,a=e.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function n1(e,a){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,a=l.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ai(e,a,l,n,s,r){var i=0;if(n=e,typeof e=="function")cu(e)&&(i=1);else if(typeof e=="string")i=Jx(e,l,$t.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Cc:return e=ot(31,l,a,s),e.elementType=Cc,e.lanes=r,e;case En:return cn(l.children,s,r,a);case Nh:i=8,s|=24;break;case Nc:return e=ot(12,l,a,s|2),e.elementType=Nc,e.lanes=r,e;case Sc:return e=ot(13,l,a,s),e.elementType=Sc,e.lanes=r,e;case zc:return e=ot(19,l,a,s),e.elementType=zc,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case el:i=10;break e;case Sh:i=9;break e;case Pd:i=11;break e;case Zd:i=14;break e;case xl:i=16,n=null;break e}i=29,l=Error(O(130,e===null?"null":typeof e,"")),n=null}return a=ot(i,l,a,s),a.elementType=e,a.type=n,a.lanes=r,a}function cn(e,a,l,n){return e=ot(7,e,n,a),e.lanes=l,e}function Wo(e,a,l){return e=ot(6,e,null,a),e.lanes=l,e}function s1(e){var a=ot(18,null,null,0);return a.stateNode=e,a}function Go(e,a,l){return a=ot(4,e.children!==null?e.children:[],e.key,a),a.lanes=l,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var R0=new WeakMap;function Nt(e,a){if(typeof e=="object"&&e!==null){var l=R0.get(e);return l!==void 0?l:(a={value:e,source:a,stack:c0(a)},R0.set(e,a),a)}return{value:e,source:a,stack:c0(a)}}var Un=[],qn=0,bi=null,er=0,yt=[],jt=0,Gl=null,_t=1,Lt="";function Kt(e,a){Un[qn++]=er,Un[qn++]=bi,bi=e,er=a}function r1(e,a,l){yt[jt++]=_t,yt[jt++]=Lt,yt[jt++]=Gl,Gl=e;var n=_t;e=Lt;var s=32-mt(n)-1;n&=~(1<<s),l+=1;var r=32-mt(a)+s;if(30<r){var i=s-s%5;r=(n&(1<<i)-1).toString(32),n>>=i,s-=i,_t=1<<32-mt(a)+s|l<<s|n,Lt=r+e}else _t=1<<r|l<<s|n,Lt=e}function du(e){e.return!==null&&(Kt(e,1),r1(e,1,0))}function uu(e){for(;e===bi;)bi=Un[--qn],Un[qn]=null,er=Un[--qn],Un[qn]=null;for(;e===Gl;)Gl=yt[--jt],yt[jt]=null,Lt=yt[--jt],yt[jt]=null,_t=yt[--jt],yt[jt]=null}function i1(e,a){yt[jt++]=_t,yt[jt++]=Lt,yt[jt++]=Gl,_t=a.id,Lt=a.overflow,Gl=e}var Ba=null,Ke=null,ze=!1,_l=null,St=!1,$c=Error(O(519));function Xl(e){var a=Error(O(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ar(Nt(a,e)),$c}function T0(e){var a=e.stateNode,l=e.type,n=e.memoizedProps;switch(a[Da]=e,a[at]=n,l){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(l=0;l<sr.length;l++)ye(sr[l],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":ye("invalid",a),Hh(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ye("invalid",a);break;case"textarea":ye("invalid",a),Vh(a,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||n.suppressHydrationWarning===!0||Yp(a.textContent,l)?(n.popover!=null&&(ye("beforetoggle",a),ye("toggle",a)),n.onScroll!=null&&ye("scroll",a),n.onScrollEnd!=null&&ye("scrollend",a),n.onClick!=null&&(a.onclick=al),a=!0):a=!1,a||Xl(e,!0)}function A0(e){for(Ba=e.return;Ba;)switch(Ba.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Ba=Ba.return}}function kn(e){if(e!==Ba)return!1;if(!ze)return A0(e),ze=!0,!1;var a=e.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ud(e.type,e.memoizedProps)),l=!l),l&&Ke&&Xl(e),A0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));Ke=vm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));Ke=vm(e)}else a===27?(a=Ke,Zl(e.type)?(e=fd,fd=null,Ke=e):Ke=a):Ke=Ba?Ct(e.stateNode.nextSibling):null;return!0}function hn(){Ke=Ba=null,ze=!1}function Xo(){var e=_l;return e!==null&&(Ja===null?Ja=e:Ja.push.apply(Ja,e),_l=null),e}function ar(e){_l===null?_l=[e]:_l.push(e)}var Uc=qt(null),Nn=null,tl=null;function yl(e,a,l){Qe(Uc,a._currentValue),a._currentValue=l}function nl(e){e._currentValue=Uc.current,Ra(Uc)}function qc(e,a,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===l)break;e=e.return}}function Yc(e,a,l,n){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var i=s.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=s;for(var c=0;c<a.length;c++)if(o.context===a[c]){r.lanes|=l,o=r.alternate,o!==null&&(o.lanes|=l),qc(r.return,l,e),n||(i=null);break e}r=o.next}}else if(s.tag===18){if(i=s.return,i===null)throw Error(O(341));i.lanes|=l,r=i.alternate,r!==null&&(r.lanes|=l),qc(i,l,e),i=null}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===e){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}}function ms(e,a,l,n){e=null;for(var s=a,r=!1;s!==null;){if(!r){if(s.flags&524288)r=!0;else if(s.flags&262144)break}if(s.tag===10){var i=s.alternate;if(i===null)throw Error(O(387));if(i=i.memoizedProps,i!==null){var o=s.type;pt(s.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(s===mi.current){if(i=s.alternate,i===null)throw Error(O(387));i.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ir):e=[ir])}s=s.return}e!==null&&Yc(a,e,l,n),a.flags|=262144}function yi(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){Nn=e,tl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _a(e){return o1(Nn,e)}function $r(e,a){return Nn===null&&pn(e),o1(e,a)}function o1(e,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},tl===null){if(e===null)throw Error(O(308));tl=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else tl=tl.next=a;return l}var Fv=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(l){return l()})}},Pv=za.unstable_scheduleCallback,Zv=za.unstable_NormalPriority,ba={$$typeof:el,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new Fv,data:new Map,refCount:0}}function br(e){e.refCount--,e.refCount===0&&Pv(Zv,function(){e.controller.abort()})}var Hs=null,Wc=0,es=0,Qn=null;function Kv(e,a){if(Hs===null){var l=Hs=[];Wc=0,es=Hu(),Qn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Wc++,a.then(E0,E0),a}function E0(){if(--Wc===0&&Hs!==null){Qn!==null&&(Qn.status="fulfilled");var e=Hs;Hs=null,es=0,Qn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Jv(e,a){var l=[],n={status:"pending",value:null,reason:null,then:function(s){l.push(s)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var s=0;s<l.length;s++)(0,l[s])(a)},function(s){for(n.status="rejected",n.reason=s,s=0;s<l.length;s++)(0,l[s])(void 0)}),n}var D0=oe.S;oe.S=function(e,a){wp=dt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Kv(e,a),D0!==null&&D0(e,a)};var dn=qt(null);function hu(){var e=dn.current;return e!==null?e:Xe.pooledCache}function ti(e,a){a===null?Qe(dn,dn.current):Qe(dn,a.pool)}function c1(){var e=hu();return e===null?null:{parent:ba._currentValue,pool:e}}var hs=Error(O(460)),pu=Error(O(474)),lo=Error(O(542)),ji={then:function(){}};function B0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d1(e,a,l){switch(l=e[l],l===void 0?e.push(a):l!==a&&(a.then(al,al),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,L0(e),e;default:if(typeof a.status=="string")a.then(al,al);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(O(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var s=a;s.status="fulfilled",s.value=n}},function(n){if(a.status==="pending"){var s=a;s.status="rejected",s.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,L0(e),e}throw un=a,hs}}function tn(e){try{var a=e._init;return a(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(un=l,hs):l}}var un=null;function _0(){if(un===null)throw Error(O(459));var e=un;return un=null,e}function L0(e){if(e===hs||e===lo)throw Error(O(483))}var Fn=null,tr=0;function Ur(e){var a=tr;return tr+=1,Fn===null&&(Fn=[]),d1(Fn,e,a)}function js(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function qr(e,a){throw a.$$typeof===Og?Error(O(525)):(e=Object.prototype.toString.call(a),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function u1(e){function a(b,v){if(e){var h=b.deletions;h===null?(b.deletions=[v],b.flags|=16):h.push(v)}}function l(b,v){if(!e)return null;for(;v!==null;)a(b,v),v=v.sibling;return null}function n(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function s(b,v){return b=ll(b,v),b.index=0,b.sibling=null,b}function r(b,v,h){return b.index=h,e?(h=b.alternate,h!==null?(h=h.index,h<v?(b.flags|=67108866,v):h):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function i(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,v,h,g){return v===null||v.tag!==6?(v=Wo(h,b.mode,g),v.return=b,v):(v=s(v,h),v.return=b,v)}function c(b,v,h,g){var N=h.type;return N===En?m(b,v,h.props.children,g,h.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xl&&tn(N)===v.type)?(v=s(v,h.props),js(v,h),v.return=b,v):(v=ai(h.type,h.key,h.props,null,b.mode,g),js(v,h),v.return=b,v)}function d(b,v,h,g){return v===null||v.tag!==4||v.stateNode.containerInfo!==h.containerInfo||v.stateNode.implementation!==h.implementation?(v=Go(h,b.mode,g),v.return=b,v):(v=s(v,h.children||[]),v.return=b,v)}function m(b,v,h,g,N){return v===null||v.tag!==7?(v=cn(h,b.mode,g,N),v.return=b,v):(v=s(v,h),v.return=b,v)}function f(b,v,h){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Wo(""+v,b.mode,h),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Br:return h=ai(v.type,v.key,v.props,null,b.mode,h),js(h,v),h.return=b,h;case zs:return v=Go(v,b.mode,h),v.return=b,v;case xl:return v=tn(v),f(b,v,h)}if(Cs(v)||xs(v))return v=cn(v,b.mode,h,null),v.return=b,v;if(typeof v.then=="function")return f(b,Ur(v),h);if(v.$$typeof===el)return f(b,$r(b,v),h);qr(b,v)}return null}function p(b,v,h,g){var N=v!==null?v.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return N!==null?null:o(b,v,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Br:return h.key===N?c(b,v,h,g):null;case zs:return h.key===N?d(b,v,h,g):null;case xl:return h=tn(h),p(b,v,h,g)}if(Cs(h)||xs(h))return N!==null?null:m(b,v,h,g,null);if(typeof h.then=="function")return p(b,v,Ur(h),g);if(h.$$typeof===el)return p(b,v,$r(b,h),g);qr(b,h)}return null}function x(b,v,h,g,N){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return b=b.get(h)||null,o(v,b,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Br:return b=b.get(g.key===null?h:g.key)||null,c(v,b,g,N);case zs:return b=b.get(g.key===null?h:g.key)||null,d(v,b,g,N);case xl:return g=tn(g),x(b,v,h,g,N)}if(Cs(g)||xs(g))return b=b.get(h)||null,m(v,b,g,N,null);if(typeof g.then=="function")return x(b,v,h,Ur(g),N);if(g.$$typeof===el)return x(b,v,h,$r(v,g),N);qr(v,g)}return null}function y(b,v,h,g){for(var N=null,T=null,z=v,C=v=0,L=null;z!==null&&C<h.length;C++){z.index>C?(L=z,z=null):L=z.sibling;var H=p(b,z,h[C],g);if(H===null){z===null&&(z=L);break}e&&z&&H.alternate===null&&a(b,z),v=r(H,v,C),T===null?N=H:T.sibling=H,T=H,z=L}if(C===h.length)return l(b,z),ze&&Kt(b,C),N;if(z===null){for(;C<h.length;C++)z=f(b,h[C],g),z!==null&&(v=r(z,v,C),T===null?N=z:T.sibling=z,T=z);return ze&&Kt(b,C),N}for(z=n(z);C<h.length;C++)L=x(z,b,C,h[C],g),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?C:L.key),v=r(L,v,C),T===null?N=L:T.sibling=L,T=L);return e&&z.forEach(function(M){return a(b,M)}),ze&&Kt(b,C),N}function j(b,v,h,g){if(h==null)throw Error(O(151));for(var N=null,T=null,z=v,C=v=0,L=null,H=h.next();z!==null&&!H.done;C++,H=h.next()){z.index>C?(L=z,z=null):L=z.sibling;var M=p(b,z,H.value,g);if(M===null){z===null&&(z=L);break}e&&z&&M.alternate===null&&a(b,z),v=r(M,v,C),T===null?N=M:T.sibling=M,T=M,z=L}if(H.done)return l(b,z),ze&&Kt(b,C),N;if(z===null){for(;!H.done;C++,H=h.next())H=f(b,H.value,g),H!==null&&(v=r(H,v,C),T===null?N=H:T.sibling=H,T=H);return ze&&Kt(b,C),N}for(z=n(z);!H.done;C++,H=h.next())H=x(z,b,C,H.value,g),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?C:H.key),v=r(H,v,C),T===null?N=H:T.sibling=H,T=H);return e&&z.forEach(function(B){return a(b,B)}),ze&&Kt(b,C),N}function w(b,v,h,g){if(typeof h=="object"&&h!==null&&h.type===En&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Br:e:{for(var N=h.key;v!==null;){if(v.key===N){if(N=h.type,N===En){if(v.tag===7){l(b,v.sibling),g=s(v,h.props.children),g.return=b,b=g;break e}}else if(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xl&&tn(N)===v.type){l(b,v.sibling),g=s(v,h.props),js(g,h),g.return=b,b=g;break e}l(b,v);break}else a(b,v);v=v.sibling}h.type===En?(g=cn(h.props.children,b.mode,g,h.key),g.return=b,b=g):(g=ai(h.type,h.key,h.props,null,b.mode,g),js(g,h),g.return=b,b=g)}return i(b);case zs:e:{for(N=h.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===h.containerInfo&&v.stateNode.implementation===h.implementation){l(b,v.sibling),g=s(v,h.children||[]),g.return=b,b=g;break e}else{l(b,v);break}else a(b,v);v=v.sibling}g=Go(h,b.mode,g),g.return=b,b=g}return i(b);case xl:return h=tn(h),w(b,v,h,g)}if(Cs(h))return y(b,v,h,g);if(xs(h)){if(N=xs(h),typeof N!="function")throw Error(O(150));return h=N.call(h),j(b,v,h,g)}if(typeof h.then=="function")return w(b,v,Ur(h),g);if(h.$$typeof===el)return w(b,v,$r(b,h),g);qr(b,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,v!==null&&v.tag===6?(l(b,v.sibling),g=s(v,h),g.return=b,b=g):(l(b,v),g=Wo(h,b.mode,g),g.return=b,b=g),i(b)):l(b,v)}return function(b,v,h,g){try{tr=0;var N=w(b,v,h,g);return Fn=null,N}catch(z){if(z===hs||z===lo)throw z;var T=ot(29,z,null,b.mode);return T.lanes=g,T.return=b,T}finally{}}}var fn=u1(!0),m1=u1(!1),bl=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ll(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hl(e,a,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Ee&2){var s=n.pending;return s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a,a=xi(e),l1(e,null,l),a}return to(e,n,a,l),xi(e)}function Os(e,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,l|=n,a.lanes=l,Th(e,l)}}function Qo(e,a){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var s=null,r=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};r===null?s=r=i:r=r.next=i,l=l.next}while(l!==null);r===null?s=r=a:r=r.next=a}else s=r=a;l={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=a:e.next=a,l.lastBaseUpdate=a}var Xc=!1;function Vs(){if(Xc){var e=Qn;if(e!==null)throw e}}function $s(e,a,l,n){Xc=!1;var s=e.updateQueue;bl=!1;var r=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?r=d:i.next=d,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==i&&(o===null?m.firstBaseUpdate=d:o.next=d,m.lastBaseUpdate=c))}if(r!==null){var f=s.baseState;i=0,m=d=c=null,o=r;do{var p=o.lane&-536870913,x=p!==o.lane;if(x?(we&p)===p:(n&p)===p){p!==0&&p===es&&(Xc=!0),m!==null&&(m=m.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var y=e,j=o;p=a;var w=l;switch(j.tag){case 1:if(y=j.payload,typeof y=="function"){f=y.call(w,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,p=typeof y=="function"?y.call(w,f,p):y,p==null)break e;f=Ie({},f,p);break e;case 2:bl=!0}}p=o.callback,p!==null&&(e.flags|=64,x&&(e.flags|=8192),x=s.callbacks,x===null?s.callbacks=[p]:x.push(p))}else x={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(d=m=x,c=f):m=m.next=x,i|=p;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;x=o,o=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);m===null&&(c=f),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=m,r===null&&(s.shared.lanes=0),Fl|=i,e.lanes=i,e.memoizedState=f}}function h1(e,a){if(typeof e!="function")throw Error(O(191,e));e.call(a)}function p1(e,a){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)h1(l[e],a)}var as=qt(null),wi=qt(0);function H0(e,a){e=ul,Qe(wi,e),Qe(as,a),ul=e|a.baseLanes}function Qc(){Qe(wi,ul),Qe(as,as.current)}function gu(){ul=wi.current,Ra(as),Ra(wi)}var ft=qt(null),zt=null;function jl(e){var a=e.alternate;Qe(ha,ha.current&1),Qe(ft,e),zt===null&&(a===null||as.current!==null||a.memoizedState!==null)&&(zt=e)}function Fc(e){Qe(ha,ha.current),Qe(ft,e),zt===null&&(zt=e)}function f1(e){e.tag===22?(Qe(ha,ha.current),Qe(ft,e),zt===null&&(zt=e)):wl()}function wl(){Qe(ha,ha.current),Qe(ft,ft.current)}function it(e){Ra(ft),zt===e&&(zt=null),Ra(ha)}var ha=qt(0);function Ni(e){for(var a=e;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||hd(l)||pd(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ol=0,pe=null,Ye=null,va=null,Si=!1,Pn=!1,gn=!1,zi=0,lr=0,Zn=null,Iv=0;function da(){throw Error(O(321))}function vu(e,a){if(a===null)return!1;for(var l=0;l<a.length&&l<e.length;l++)if(!pt(e[l],a[l]))return!1;return!0}function xu(e,a,l,n,s,r){return ol=r,pe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,oe.H=e===null||e.memoizedState===null?X1:Ru,gn=!1,r=l(n,s),gn=!1,Pn&&(r=v1(a,l,n,s)),g1(e),r}function g1(e){oe.H=nr;var a=Ye!==null&&Ye.next!==null;if(ol=0,va=Ye=pe=null,Si=!1,lr=0,Zn=null,a)throw Error(O(300));e===null||ya||(e=e.dependencies,e!==null&&yi(e)&&(ya=!0))}function v1(e,a,l,n){pe=e;var s=0;do{if(Pn&&(Zn=null),lr=0,Pn=!1,25<=s)throw Error(O(301));if(s+=1,va=Ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}oe.H=Q1,r=a(l,n)}while(Pn);return r}function ex(){var e=oe.H,a=e.useState()[0];return a=typeof a.then=="function"?yr(a):a,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(pe.flags|=1024),a}function bu(){var e=zi!==0;return zi=0,e}function yu(e,a,l){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~l}function ju(e){if(Si){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Si=!1}ol=0,va=Ye=pe=null,Pn=!1,lr=zi=0,Zn=null}function Ua(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return va===null?pe.memoizedState=va=e:va=va.next=e,va}function pa(){if(Ye===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var a=va===null?pe.memoizedState:va.next;if(a!==null)va=a,Ye=e;else{if(e===null)throw pe.alternate===null?Error(O(467)):Error(O(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},va===null?pe.memoizedState=va=e:va=va.next=e}return va}function no(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yr(e){var a=lr;return lr+=1,Zn===null&&(Zn=[]),e=d1(Zn,e,a),a=pe,(va===null?a.memoizedState:va.next)===null&&(a=a.alternate,oe.H=a===null||a.memoizedState===null?X1:Ru),e}function so(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yr(e);if(e.$$typeof===el)return _a(e)}throw Error(O(438,String(e)))}function wu(e){var a=null,l=pe.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var n=pe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(s){return s.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=no(),pe.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(e),n=0;n<e;n++)l[n]=Vg;return a.index++,l}function cl(e,a){return typeof a=="function"?a(e):a}function li(e){var a=pa();return Nu(a,Ye,e)}function Nu(e,a,l){var n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=l;var s=e.baseQueue,r=n.pending;if(r!==null){if(s!==null){var i=s.next;s.next=r.next,r.next=i}a.baseQueue=s=r,n.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{a=s.next;var o=i=null,c=null,d=a,m=!1;do{var f=d.lane&-536870913;if(f!==d.lane?(we&f)===f:(ol&f)===f){var p=d.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),f===es&&(m=!0);else if((ol&p)===p){d=d.next,p===es&&(m=!0);continue}else f={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=f,i=r):c=c.next=f,pe.lanes|=p,Fl|=p;f=d.action,gn&&l(r,f),r=d.hasEagerState?d.eagerState:l(r,f)}else p={lane:f,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=p,i=r):c=c.next=p,pe.lanes|=f,Fl|=f;d=d.next}while(d!==null&&d!==a);if(c===null?i=r:c.next=o,!pt(r,e.memoizedState)&&(ya=!0,m&&(l=Qn,l!==null)))throw l;e.memoizedState=r,e.baseState=i,e.baseQueue=c,n.lastRenderedState=r}return s===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Fo(e){var a=pa(),l=a.queue;if(l===null)throw Error(O(311));l.lastRenderedReducer=e;var n=l.dispatch,s=l.pending,r=a.memoizedState;if(s!==null){l.pending=null;var i=s=s.next;do r=e(r,i.action),i=i.next;while(i!==s);pt(r,a.memoizedState)||(ya=!0),a.memoizedState=r,a.baseQueue===null&&(a.baseState=r),l.lastRenderedState=r}return[r,n]}function x1(e,a,l){var n=pe,s=pa(),r=ze;if(r){if(l===void 0)throw Error(O(407));l=l()}else l=a();var i=!pt((Ye||s).memoizedState,l);if(i&&(s.memoizedState=l,ya=!0),s=s.queue,Su(j1.bind(null,n,s,e),[e]),s.getSnapshot!==a||i||va!==null&&va.memoizedState.tag&1){if(n.flags|=2048,ts(9,{destroy:void 0},y1.bind(null,n,s,l,a),null),Xe===null)throw Error(O(349));r||ol&127||b1(n,a,l)}return l}function b1(e,a,l){e.flags|=16384,e={getSnapshot:a,value:l},a=pe.updateQueue,a===null?(a=no(),pe.updateQueue=a,a.stores=[e]):(l=a.stores,l===null?a.stores=[e]:l.push(e))}function y1(e,a,l,n){a.value=l,a.getSnapshot=n,w1(a)&&N1(e)}function j1(e,a,l){return l(function(){w1(a)&&N1(e)})}function w1(e){var a=e.getSnapshot;e=e.value;try{var l=a();return!pt(e,l)}catch{return!0}}function N1(e){var a=wn(e,2);a!==null&&Ia(a,e,2)}function Pc(e){var a=Ua();if(typeof e=="function"){var l=e;if(e=l(),gn){zl(!0);try{l()}finally{zl(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:e},a}function S1(e,a,l,n){return e.baseState=l,Nu(e,Ye,typeof n=="function"?n:cl)}function ax(e,a,l,n,s){if(io(e))throw Error(O(485));if(e=a.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};oe.T!==null?l(!0):r.isTransition=!1,n(r),l=a.pending,l===null?(r.next=a.pending=r,z1(a,r)):(r.next=l.next,a.pending=l.next=r)}}function z1(e,a){var l=a.action,n=a.payload,s=e.state;if(a.isTransition){var r=oe.T,i={};oe.T=i;try{var o=l(s,n),c=oe.S;c!==null&&c(i,o),O0(e,a,o)}catch(d){Zc(e,a,d)}finally{r!==null&&i.types!==null&&(r.types=i.types),oe.T=r}}else try{r=l(s,n),O0(e,a,r)}catch(d){Zc(e,a,d)}}function O0(e,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){V0(e,a,n)},function(n){return Zc(e,a,n)}):V0(e,a,l)}function V0(e,a,l){a.status="fulfilled",a.value=l,C1(a),e.state=l,a=e.pending,a!==null&&(l=a.next,l===a?e.pending=null:(l=l.next,a.next=l,z1(e,l)))}function Zc(e,a,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=l,C1(a),a=a.next;while(a!==n)}e.action=null}function C1(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function k1(e,a){return a}function $0(e,a){if(ze){var l=Xe.formState;if(l!==null){e:{var n=pe;if(ze){if(Ke){a:{for(var s=Ke,r=St;s.nodeType!==8;){if(!r){s=null;break a}if(s=Ct(s.nextSibling),s===null){s=null;break a}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ke=Ct(s.nextSibling),n=s.data==="F!";break e}}Xl(n)}n=!1}n&&(a=l[0])}}return l=Ua(),l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k1,lastRenderedState:a},l.queue=n,l=Y1.bind(null,pe,n),n.dispatch=l,n=Pc(!1),r=Mu.bind(null,pe,!1,n.queue),n=Ua(),s={state:a,dispatch:null,action:e,pending:null},n.queue=s,l=ax.bind(null,pe,s,r,l),s.dispatch=l,n.memoizedState=e,[a,l,!1]}function U0(e){var a=pa();return M1(a,Ye,e)}function M1(e,a,l){if(a=Nu(e,a,k1)[0],e=li(cl)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=yr(a)}catch(i){throw i===hs?lo:i}else n=a;a=pa();var s=a.queue,r=s.dispatch;return l!==a.memoizedState&&(pe.flags|=2048,ts(9,{destroy:void 0},tx.bind(null,s,l),null)),[n,r,e]}function tx(e,a){e.action=a}function q0(e){var a=pa(),l=Ye;if(l!==null)return M1(a,l,e);pa(),a=a.memoizedState,l=pa();var n=l.queue.dispatch;return l.memoizedState=e,[a,n,!1]}function ts(e,a,l,n){return e={tag:e,create:l,deps:n,inst:a,next:null},a=pe.updateQueue,a===null&&(a=no(),pe.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,a.lastEffect=e),e}function R1(){return pa().memoizedState}function ni(e,a,l,n){var s=Ua();pe.flags|=e,s.memoizedState=ts(1|a,{destroy:void 0},l,n===void 0?null:n)}function ro(e,a,l,n){var s=pa();n=n===void 0?null:n;var r=s.memoizedState.inst;Ye!==null&&n!==null&&vu(n,Ye.memoizedState.deps)?s.memoizedState=ts(a,r,l,n):(pe.flags|=e,s.memoizedState=ts(1|a,r,l,n))}function Y0(e,a){ni(8390656,8,e,a)}function Su(e,a){ro(2048,8,e,a)}function lx(e){pe.flags|=4;var a=pe.updateQueue;if(a===null)a=no(),pe.updateQueue=a,a.events=[e];else{var l=a.events;l===null?a.events=[e]:l.push(e)}}function T1(e){var a=pa().memoizedState;return lx({ref:a,nextImpl:e}),function(){if(Ee&2)throw Error(O(440));return a.impl.apply(void 0,arguments)}}function A1(e,a){return ro(4,2,e,a)}function E1(e,a){return ro(4,4,e,a)}function D1(e,a){if(typeof a=="function"){e=e();var l=a(e);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function B1(e,a,l){l=l!=null?l.concat([e]):null,ro(4,4,D1.bind(null,a,e),l)}function zu(){}function _1(e,a){var l=pa();a=a===void 0?null:a;var n=l.memoizedState;return a!==null&&vu(a,n[1])?n[0]:(l.memoizedState=[e,a],e)}function L1(e,a){var l=pa();a=a===void 0?null:a;var n=l.memoizedState;if(a!==null&&vu(a,n[1]))return n[0];if(n=e(),gn){zl(!0);try{e()}finally{zl(!1)}}return l.memoizedState=[n,a],n}function Cu(e,a,l){return l===void 0||ol&1073741824&&!(we&261930)?e.memoizedState=a:(e.memoizedState=l,e=Sp(),pe.lanes|=e,Fl|=e,l)}function H1(e,a,l,n){return pt(l,a)?l:as.current!==null?(e=Cu(e,l,n),pt(e,a)||(ya=!0),e):!(ol&42)||ol&1073741824&&!(we&261930)?(ya=!0,e.memoizedState=l):(e=Sp(),pe.lanes|=e,Fl|=e,a)}function O1(e,a,l,n,s){var r=De.p;De.p=r!==0&&8>r?r:8;var i=oe.T,o={};oe.T=o,Mu(e,!1,a,l);try{var c=s(),d=oe.S;if(d!==null&&d(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=Jv(c,n);Us(e,a,m,ht(e))}else Us(e,a,n,ht(e))}catch(f){Us(e,a,{then:function(){},status:"rejected",reason:f},ht())}finally{De.p=r,i!==null&&o.types!==null&&(i.types=o.types),oe.T=i}}function nx(){}function Kc(e,a,l,n){if(e.tag!==5)throw Error(O(476));var s=V1(e).queue;O1(e,s,a,on,l===null?nx:function(){return $1(e),l(n)})}function V1(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:on,baseState:on,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:on},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:l},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function $1(e){var a=V1(e);a.next===null&&(a=e.alternate.memoizedState),Us(e,a.next.queue,{},ht())}function ku(){return _a(ir)}function U1(){return pa().memoizedState}function q1(){return pa().memoizedState}function sx(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var l=ht();e=Ll(l);var n=Hl(a,e,l);n!==null&&(Ia(n,a,l),Os(n,a,l)),a={cache:mu()},e.payload=a;return}a=a.return}}function rx(e,a,l){var n=ht();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},io(e)?W1(a,l):(l=ou(e,a,l,n),l!==null&&(Ia(l,e,n),G1(l,a,n)))}function Y1(e,a,l){var n=ht();Us(e,a,l,n)}function Us(e,a,l,n){var s={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(io(e))W1(a,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=a.lastRenderedReducer,r!==null))try{var i=a.lastRenderedState,o=r(i,l);if(s.hasEagerState=!0,s.eagerState=o,pt(o,i))return to(e,a,s,0),Xe===null&&ao(),!1}catch{}finally{}if(l=ou(e,a,s,n),l!==null)return Ia(l,e,n),G1(l,a,n),!0}return!1}function Mu(e,a,l,n){if(n={lane:2,revertLane:Hu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},io(e)){if(a)throw Error(O(479))}else a=ou(e,l,n,2),a!==null&&Ia(a,e,2)}function io(e){var a=e.alternate;return e===pe||a!==null&&a===pe}function W1(e,a){Pn=Si=!0;var l=e.pending;l===null?a.next=a:(a.next=l.next,l.next=a),e.pending=a}function G1(e,a,l){if(l&4194048){var n=a.lanes;n&=e.pendingLanes,l|=n,a.lanes=l,Th(e,l)}}var nr={readContext:_a,use:so,useCallback:da,useContext:da,useEffect:da,useImperativeHandle:da,useLayoutEffect:da,useInsertionEffect:da,useMemo:da,useReducer:da,useRef:da,useState:da,useDebugValue:da,useDeferredValue:da,useTransition:da,useSyncExternalStore:da,useId:da,useHostTransitionStatus:da,useFormState:da,useActionState:da,useOptimistic:da,useMemoCache:da,useCacheRefresh:da};nr.useEffectEvent=da;var X1={readContext:_a,use:so,useCallback:function(e,a){return Ua().memoizedState=[e,a===void 0?null:a],e},useContext:_a,useEffect:Y0,useImperativeHandle:function(e,a,l){l=l!=null?l.concat([e]):null,ni(4194308,4,D1.bind(null,a,e),l)},useLayoutEffect:function(e,a){return ni(4194308,4,e,a)},useInsertionEffect:function(e,a){ni(4,2,e,a)},useMemo:function(e,a){var l=Ua();a=a===void 0?null:a;var n=e();if(gn){zl(!0);try{e()}finally{zl(!1)}}return l.memoizedState=[n,a],n},useReducer:function(e,a,l){var n=Ua();if(l!==void 0){var s=l(a);if(gn){zl(!0);try{l(a)}finally{zl(!1)}}}else s=a;return n.memoizedState=n.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=rx.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var a=Ua();return e={current:e},a.memoizedState=e},useState:function(e){e=Pc(e);var a=e.queue,l=Y1.bind(null,pe,a);return a.dispatch=l,[e.memoizedState,l]},useDebugValue:zu,useDeferredValue:function(e,a){var l=Ua();return Cu(l,e,a)},useTransition:function(){var e=Pc(!1);return e=O1.bind(null,pe,e.queue,!0,!1),Ua().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,l){var n=pe,s=Ua();if(ze){if(l===void 0)throw Error(O(407));l=l()}else{if(l=a(),Xe===null)throw Error(O(349));we&127||b1(n,a,l)}s.memoizedState=l;var r={value:l,getSnapshot:a};return s.queue=r,Y0(j1.bind(null,n,r,e),[e]),n.flags|=2048,ts(9,{destroy:void 0},y1.bind(null,n,r,l,a),null),l},useId:function(){var e=Ua(),a=Xe.identifierPrefix;if(ze){var l=Lt,n=_t;l=(n&~(1<<32-mt(n)-1)).toString(32)+l,a="_"+a+"R_"+l,l=zi++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=Iv++,a="_"+a+"r_"+l.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:ku,useFormState:$0,useActionState:$0,useOptimistic:function(e){var a=Ua();a.memoizedState=a.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Mu.bind(null,pe,!0,l),l.dispatch=a,[e,a]},useMemoCache:wu,useCacheRefresh:function(){return Ua().memoizedState=sx.bind(null,pe)},useEffectEvent:function(e){var a=Ua(),l={impl:e};return a.memoizedState=l,function(){if(Ee&2)throw Error(O(440));return l.impl.apply(void 0,arguments)}}},Ru={readContext:_a,use:so,useCallback:_1,useContext:_a,useEffect:Su,useImperativeHandle:B1,useInsertionEffect:A1,useLayoutEffect:E1,useMemo:L1,useReducer:li,useRef:R1,useState:function(){return li(cl)},useDebugValue:zu,useDeferredValue:function(e,a){var l=pa();return H1(l,Ye.memoizedState,e,a)},useTransition:function(){var e=li(cl)[0],a=pa().memoizedState;return[typeof e=="boolean"?e:yr(e),a]},useSyncExternalStore:x1,useId:U1,useHostTransitionStatus:ku,useFormState:U0,useActionState:U0,useOptimistic:function(e,a){var l=pa();return S1(l,Ye,e,a)},useMemoCache:wu,useCacheRefresh:q1};Ru.useEffectEvent=T1;var Q1={readContext:_a,use:so,useCallback:_1,useContext:_a,useEffect:Su,useImperativeHandle:B1,useInsertionEffect:A1,useLayoutEffect:E1,useMemo:L1,useReducer:Fo,useRef:R1,useState:function(){return Fo(cl)},useDebugValue:zu,useDeferredValue:function(e,a){var l=pa();return Ye===null?Cu(l,e,a):H1(l,Ye.memoizedState,e,a)},useTransition:function(){var e=Fo(cl)[0],a=pa().memoizedState;return[typeof e=="boolean"?e:yr(e),a]},useSyncExternalStore:x1,useId:U1,useHostTransitionStatus:ku,useFormState:q0,useActionState:q0,useOptimistic:function(e,a){var l=pa();return Ye!==null?S1(l,Ye,e,a):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:wu,useCacheRefresh:q1};Q1.useEffectEvent=T1;function Po(e,a,l,n){a=e.memoizedState,l=l(n,a),l=l==null?a:Ie({},a,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Jc={enqueueSetState:function(e,a,l){e=e._reactInternals;var n=ht(),s=Ll(n);s.payload=a,l!=null&&(s.callback=l),a=Hl(e,s,n),a!==null&&(Ia(a,e,n),Os(a,e,n))},enqueueReplaceState:function(e,a,l){e=e._reactInternals;var n=ht(),s=Ll(n);s.tag=1,s.payload=a,l!=null&&(s.callback=l),a=Hl(e,s,n),a!==null&&(Ia(a,e,n),Os(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var l=ht(),n=Ll(l);n.tag=2,a!=null&&(n.callback=a),a=Hl(e,n,l),a!==null&&(Ia(a,e,l),Os(a,e,l))}};function W0(e,a,l,n,s,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,i):a.prototype&&a.prototype.isPureReactComponent?!Is(l,n)||!Is(s,r):!0}function G0(e,a,l,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,n),a.state!==e&&Jc.enqueueReplaceState(a,a.state,null)}function vn(e,a){var l=a;if("ref"in a){l={};for(var n in a)n!=="ref"&&(l[n]=a[n])}if(e=e.defaultProps){l===a&&(l=Ie({},l));for(var s in e)l[s]===void 0&&(l[s]=e[s])}return l}function F1(e){vi(e)}function P1(e){console.error(e)}function Z1(e){vi(e)}function Ci(e,a){try{var l=e.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function X0(e,a,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ic(e,a,l){return l=Ll(l),l.tag=3,l.payload={element:null},l.callback=function(){Ci(e,a)},l}function K1(e){return e=Ll(e),e.tag=3,e}function J1(e,a,l,n){var s=l.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;e.payload=function(){return s(r)},e.callback=function(){X0(a,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){X0(a,l,n),typeof s!="function"&&(Ol===null?Ol=new Set([this]):Ol.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function ix(e,a,l,n,s){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=l.alternate,a!==null&&ms(a,l,s,!0),l=ft.current,l!==null){switch(l.tag){case 31:case 13:return zt===null?Ai():l.alternate===null&&ua===0&&(ua=3),l.flags&=-257,l.flags|=65536,l.lanes=s,n===ji?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([n]):a.add(n),rc(e,n,s)),!1;case 22:return l.flags|=65536,n===ji?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([n]):l.add(n)),rc(e,n,s)),!1}throw Error(O(435,l.tag))}return rc(e,n,s),Ai(),!1}if(ze)return a=ft.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=s,n!==$c&&(e=Error(O(422),{cause:n}),ar(Nt(e,l)))):(n!==$c&&(a=Error(O(423),{cause:n}),ar(Nt(a,l))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,n=Nt(n,l),s=Ic(e.stateNode,n,s),Qo(e,s),ua!==4&&(ua=2)),!1;var r=Error(O(520),{cause:n});if(r=Nt(r,l),Ws===null?Ws=[r]:Ws.push(r),ua!==4&&(ua=2),a===null)return!0;n=Nt(n,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,e=s&-s,l.lanes|=e,e=Ic(l.stateNode,n,e),Qo(l,e),!1;case 1:if(a=l.type,r=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ol===null||!Ol.has(r))))return l.flags|=65536,s&=-s,l.lanes|=s,s=K1(s),J1(s,e,l,n),Qo(l,s),!1}l=l.return}while(l!==null);return!1}var Tu=Error(O(461)),ya=!1;function Ea(e,a,l,n){a.child=e===null?m1(a,null,l,n):fn(a,e.child,l,n)}function Q0(e,a,l,n,s){l=l.render;var r=a.ref;if("ref"in n){var i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}else i=n;return pn(a),n=xu(e,a,l,i,r,s),o=bu(),e!==null&&!ya?(yu(e,a,s),dl(e,a,s)):(ze&&o&&du(a),a.flags|=1,Ea(e,a,n,s),a.child)}function F0(e,a,l,n,s){if(e===null){var r=l.type;return typeof r=="function"&&!cu(r)&&r.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=r,I1(e,a,r,n,s)):(e=ai(l.type,null,n,a,a.mode,s),e.ref=a.ref,e.return=a,a.child=e)}if(r=e.child,!Au(e,s)){var i=r.memoizedProps;if(l=l.compare,l=l!==null?l:Is,l(i,n)&&e.ref===a.ref)return dl(e,a,s)}return a.flags|=1,e=ll(r,n),e.ref=a.ref,e.return=a,a.child=e}function I1(e,a,l,n,s){if(e!==null){var r=e.memoizedProps;if(Is(r,n)&&e.ref===a.ref)if(ya=!1,a.pendingProps=n=r,Au(e,s))e.flags&131072&&(ya=!0);else return a.lanes=e.lanes,dl(e,a,s)}return ed(e,a,l,n,s)}function ep(e,a,l,n){var s=n.children,r=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(a.flags&128){if(r=r!==null?r.baseLanes|l:l,e!==null){for(n=a.child=e.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;n=s&~r}else n=0,a.child=null;return P0(e,a,r,l,n)}if(l&536870912)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ti(a,r!==null?r.cachePool:null),r!==null?H0(a,r):Qc(),f1(a);else return n=a.lanes=536870912,P0(e,a,r!==null?r.baseLanes|l:l,l,n)}else r!==null?(ti(a,r.cachePool),H0(a,r),wl(),a.memoizedState=null):(e!==null&&ti(a,null),Qc(),wl());return Ea(e,a,s,l),a.child}function Ms(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function P0(e,a,l,n,s){var r=hu();return r=r===null?null:{parent:ba._currentValue,pool:r},a.memoizedState={baseLanes:l,cachePool:r},e!==null&&ti(a,null),Qc(),f1(a),e!==null&&ms(e,a,n,!0),a.childLanes=s,null}function si(e,a){return a=ki({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Z0(e,a,l){return fn(a,e.child,null,l),e=si(a,a.pendingProps),e.flags|=2,it(a),a.memoizedState=null,e}function ox(e,a,l){var n=a.pendingProps,s=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ze){if(n.mode==="hidden")return e=si(a,n),a.lanes=536870912,Ms(null,e);if(Fc(a),(e=Ke)?(e=Xp(e,St),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Gl!==null?{id:_t,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},l=s1(e),l.return=a,a.child=l,Ba=a,Ke=null)):e=null,e===null)throw Xl(a);return a.lanes=536870912,null}return si(a,n)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(Fc(a),s)if(a.flags&256)a.flags&=-257,a=Z0(e,a,l);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(O(558));else if(ya||ms(e,a,l,!1),s=(l&e.childLanes)!==0,ya||s){if(n=Xe,n!==null&&(i=Ah(n,l),i!==0&&i!==r.retryLane))throw r.retryLane=i,wn(e,i),Ia(n,e,i),Tu;Ai(),a=Z0(e,a,l)}else e=r.treeContext,Ke=Ct(i.nextSibling),Ba=a,ze=!0,_l=null,St=!1,e!==null&&i1(a,e),a=si(a,n),a.flags|=4096;return a}return e=ll(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function ri(e,a){var l=a.ref;if(l===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(O(284));(e===null||e.ref!==l)&&(a.flags|=4194816)}}function ed(e,a,l,n,s){return pn(a),l=xu(e,a,l,n,void 0,s),n=bu(),e!==null&&!ya?(yu(e,a,s),dl(e,a,s)):(ze&&n&&du(a),a.flags|=1,Ea(e,a,l,s),a.child)}function K0(e,a,l,n,s,r){return pn(a),a.updateQueue=null,l=v1(a,n,l,s),g1(e),n=bu(),e!==null&&!ya?(yu(e,a,r),dl(e,a,r)):(ze&&n&&du(a),a.flags|=1,Ea(e,a,l,r),a.child)}function J0(e,a,l,n,s){if(pn(a),a.stateNode===null){var r=$n,i=l.contextType;typeof i=="object"&&i!==null&&(r=_a(i)),r=new l(n,r),a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jc,a.stateNode=r,r._reactInternals=a,r=a.stateNode,r.props=n,r.state=a.memoizedState,r.refs={},fu(a),i=l.contextType,r.context=typeof i=="object"&&i!==null?_a(i):$n,r.state=a.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(Po(a,l,i,n),r.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&Jc.enqueueReplaceState(r,r.state,null),$s(a,n,r,s),Vs(),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){r=a.stateNode;var o=a.memoizedProps,c=vn(l,o);r.props=c;var d=r.context,m=l.contextType;i=$n,typeof m=="object"&&m!==null&&(i=_a(m));var f=l.getDerivedStateFromProps;m=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,m||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||d!==i)&&G0(a,r,n,i),bl=!1;var p=a.memoizedState;r.state=p,$s(a,n,r,s),Vs(),d=a.memoizedState,o||p!==d||bl?(typeof f=="function"&&(Po(a,l,f,n),d=a.memoizedState),(c=bl||W0(a,l,c,n,p,d,i))?(m||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=d),r.props=n,r.state=d,r.context=i,n=c):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{r=a.stateNode,Gc(e,a),i=a.memoizedProps,m=vn(l,i),r.props=m,f=a.pendingProps,p=r.context,d=l.contextType,c=$n,typeof d=="object"&&d!==null&&(c=_a(d)),o=l.getDerivedStateFromProps,(d=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||p!==c)&&G0(a,r,n,c),bl=!1,p=a.memoizedState,r.state=p,$s(a,n,r,s),Vs();var x=a.memoizedState;i!==f||p!==x||bl||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof o=="function"&&(Po(a,l,o,n),x=a.memoizedState),(m=bl||W0(a,l,m,n,p,x,c)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,x,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,x,c)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=x),r.props=n,r.state=x,r.context=c,n=m):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),n=!1)}return r=n,ri(e,a),n=(a.flags&128)!==0,r||n?(r=a.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:r.render(),a.flags|=1,e!==null&&n?(a.child=fn(a,e.child,null,s),a.child=fn(a,null,l,s)):Ea(e,a,l,s),a.memoizedState=r.state,e=a.child):e=dl(e,a,s),e}function I0(e,a,l,n){return hn(),a.flags|=256,Ea(e,a,l,n),a.child}var Zo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:c1()}}function Jo(e,a,l){return e=e!==null?e.childLanes&~l:0,a&&(e|=ct),e}function ap(e,a,l){var n=a.pendingProps,s=!1,r=(a.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(ha.current&2)!==0),i&&(s=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(ze){if(s?jl(a):wl(),(e=Ke)?(e=Xp(e,St),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Gl!==null?{id:_t,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},l=s1(e),l.return=a,a.child=l,Ba=a,Ke=null)):e=null,e===null)throw Xl(a);return pd(e)?a.lanes=32:a.lanes=536870912,null}var o=n.children;return n=n.fallback,s?(wl(),s=a.mode,o=ki({mode:"hidden",children:o},s),n=cn(n,s,l,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=Ko(l),n.childLanes=Jo(e,i,l),a.memoizedState=Zo,Ms(null,n)):(jl(a),ad(a,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(r)a.flags&256?(jl(a),a.flags&=-257,a=Io(e,a,l)):a.memoizedState!==null?(wl(),a.child=e.child,a.flags|=128,a=null):(wl(),o=n.fallback,s=a.mode,n=ki({mode:"visible",children:n.children},s),o=cn(o,s,l,null),o.flags|=2,n.return=a,o.return=a,n.sibling=o,a.child=n,fn(a,e.child,null,l),n=a.child,n.memoizedState=Ko(l),n.childLanes=Jo(e,i,l),a.memoizedState=Zo,a=Ms(null,n));else if(jl(a),pd(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var d=i.dgst;i=d,n=Error(O(419)),n.stack="",n.digest=i,ar({value:n,source:null,stack:null}),a=Io(e,a,l)}else if(ya||ms(e,a,l,!1),i=(l&e.childLanes)!==0,ya||i){if(i=Xe,i!==null&&(n=Ah(i,l),n!==0&&n!==c.retryLane))throw c.retryLane=n,wn(e,n),Ia(i,e,n),Tu;hd(o)||Ai(),a=Io(e,a,l)}else hd(o)?(a.flags|=192,a.child=e.child,a=null):(e=c.treeContext,Ke=Ct(o.nextSibling),Ba=a,ze=!0,_l=null,St=!1,e!==null&&i1(a,e),a=ad(a,n.children),a.flags|=4096);return a}return s?(wl(),o=n.fallback,s=a.mode,c=e.child,d=c.sibling,n=ll(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,d!==null?o=ll(d,o):(o=cn(o,s,l,null),o.flags|=2),o.return=a,n.return=a,n.sibling=o,a.child=n,Ms(null,n),n=a.child,o=e.child.memoizedState,o===null?o=Ko(l):(s=o.cachePool,s!==null?(c=ba._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=c1(),o={baseLanes:o.baseLanes|l,cachePool:s}),n.memoizedState=o,n.childLanes=Jo(e,i,l),a.memoizedState=Zo,Ms(e.child,n)):(jl(a),l=e.child,e=l.sibling,l=ll(l,{mode:"visible",children:n.children}),l.return=a,l.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=l,a.memoizedState=null,l)}function ad(e,a){return a=ki({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function ki(e,a){return e=ot(22,e,null,a),e.lanes=0,e}function Io(e,a,l){return fn(a,e.child,null,l),e=ad(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function em(e,a,l){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),qc(e.return,a,l)}function ec(e,a,l,n,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:s,treeForkCount:r}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=s,i.treeForkCount=r)}function tp(e,a,l){var n=a.pendingProps,s=n.revealOrder,r=n.tail;n=n.children;var i=ha.current,o=(i&2)!==0;if(o?(i=i&1|2,a.flags|=128):i&=1,Qe(ha,i),Ea(e,a,n,l),n=ze?er:0,!o&&e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,l,a);else if(e.tag===19)em(e,l,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(l=a.child,s=null;l!==null;)e=l.alternate,e!==null&&Ni(e)===null&&(s=l),l=l.sibling;l=s,l===null?(s=a.child,a.child=null):(s=l.sibling,l.sibling=null),ec(a,!1,s,l,r,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,s=a.child,a.child=null;s!==null;){if(e=s.alternate,e!==null&&Ni(e)===null){a.child=s;break}e=s.sibling,s.sibling=l,l=s,s=e}ec(a,!0,l,null,r,n);break;case"together":ec(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function dl(e,a,l){if(e!==null&&(a.dependencies=e.dependencies),Fl|=a.lanes,!(l&a.childLanes))if(e!==null){if(ms(e,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(O(153));if(a.child!==null){for(e=a.child,l=ll(e,e.pendingProps),a.child=l,l.return=a;e.sibling!==null;)e=e.sibling,l=l.sibling=ll(e,e.pendingProps),l.return=a;l.sibling=null}return a.child}function Au(e,a){return e.lanes&a?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function cx(e,a,l){switch(a.tag){case 3:hi(a,a.stateNode.containerInfo),yl(a,ba,e.memoizedState.cache),hn();break;case 27:case 5:Rc(a);break;case 4:hi(a,a.stateNode.containerInfo);break;case 10:yl(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Fc(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(jl(a),a.flags|=128,null):l&a.child.childLanes?ap(e,a,l):(jl(a),e=dl(e,a,l),e!==null?e.sibling:null);jl(a);break;case 19:var s=(e.flags&128)!==0;if(n=(l&a.childLanes)!==0,n||(ms(e,a,l,!1),n=(l&a.childLanes)!==0),s){if(n)return tp(e,a,l);a.flags|=128}if(s=a.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Qe(ha,ha.current),n)break;return null;case 22:return a.lanes=0,ep(e,a,l,a.pendingProps);case 24:yl(a,ba,e.memoizedState.cache)}return dl(e,a,l)}function lp(e,a,l){if(e!==null)if(e.memoizedProps!==a.pendingProps)ya=!0;else{if(!Au(e,l)&&!(a.flags&128))return ya=!1,cx(e,a,l);ya=!!(e.flags&131072)}else ya=!1,ze&&a.flags&1048576&&r1(a,er,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=tn(a.elementType),a.type=e,typeof e=="function")cu(e)?(n=vn(e,n),a.tag=1,a=J0(null,a,e,n,l)):(a.tag=0,a=ed(null,a,e,n,l));else{if(e!=null){var s=e.$$typeof;if(s===Pd){a.tag=11,a=Q0(null,a,e,n,l);break e}else if(s===Zd){a.tag=14,a=F0(null,a,e,n,l);break e}}throw a=kc(e)||e,Error(O(306,a,""))}}return a;case 0:return ed(e,a,a.type,a.pendingProps,l);case 1:return n=a.type,s=vn(n,a.pendingProps),J0(e,a,n,s,l);case 3:e:{if(hi(a,a.stateNode.containerInfo),e===null)throw Error(O(387));n=a.pendingProps;var r=a.memoizedState;s=r.element,Gc(e,a),$s(a,n,null,l);var i=a.memoizedState;if(n=i.cache,yl(a,ba,n),n!==r.cache&&Yc(a,[ba],l,!0),Vs(),n=i.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=r,a.memoizedState=r,a.flags&256){a=I0(e,a,n,l);break e}else if(n!==s){s=Nt(Error(O(424)),a),ar(s),a=I0(e,a,n,l);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=Ct(e.firstChild),Ba=a,ze=!0,_l=null,St=!0,l=m1(a,null,n,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(hn(),n===s){a=dl(e,a,l);break e}Ea(e,a,n,l)}a=a.child}return a;case 26:return ri(e,a),e===null?(l=ym(a.type,null,a.pendingProps,null))?a.memoizedState=l:ze||(l=a.type,e=a.pendingProps,n=_i(Bl.current).createElement(l),n[Da]=a,n[at]=e,La(n,l,e),Ma(n),a.stateNode=n):a.memoizedState=ym(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Rc(a),e===null&&ze&&(n=a.stateNode=Qp(a.type,a.pendingProps,Bl.current),Ba=a,St=!0,s=Ke,Zl(a.type)?(fd=s,Ke=Ct(n.firstChild)):Ke=s),Ea(e,a,a.pendingProps.children,l),ri(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ze&&((s=n=Ke)&&(n=Vx(n,a.type,a.pendingProps,St),n!==null?(a.stateNode=n,Ba=a,Ke=Ct(n.firstChild),St=!1,s=!0):s=!1),s||Xl(a)),Rc(a),s=a.type,r=a.pendingProps,i=e!==null?e.memoizedProps:null,n=r.children,ud(s,r)?n=null:i!==null&&ud(s,i)&&(a.flags|=32),a.memoizedState!==null&&(s=xu(e,a,ex,null,null,l),ir._currentValue=s),ri(e,a),Ea(e,a,n,l),a.child;case 6:return e===null&&ze&&((e=l=Ke)&&(l=$x(l,a.pendingProps,St),l!==null?(a.stateNode=l,Ba=a,Ke=null,e=!0):e=!1),e||Xl(a)),null;case 13:return ap(e,a,l);case 4:return hi(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=fn(a,null,n,l):Ea(e,a,n,l),a.child;case 11:return Q0(e,a,a.type,a.pendingProps,l);case 7:return Ea(e,a,a.pendingProps,l),a.child;case 8:return Ea(e,a,a.pendingProps.children,l),a.child;case 12:return Ea(e,a,a.pendingProps.children,l),a.child;case 10:return n=a.pendingProps,yl(a,a.type,n.value),Ea(e,a,n.children,l),a.child;case 9:return s=a.type._context,n=a.pendingProps.children,pn(a),s=_a(s),n=n(s),a.flags|=1,Ea(e,a,n,l),a.child;case 14:return F0(e,a,a.type,a.pendingProps,l);case 15:return I1(e,a,a.type,a.pendingProps,l);case 19:return tp(e,a,l);case 31:return ox(e,a,l);case 22:return ep(e,a,l,a.pendingProps);case 24:return pn(a),n=_a(ba),e===null?(s=hu(),s===null&&(s=Xe,r=mu(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=l),s=r),a.memoizedState={parent:n,cache:s},fu(a),yl(a,ba,s)):(e.lanes&l&&(Gc(e,a),$s(a,null,null,l),Vs()),s=e.memoizedState,r=a.memoizedState,s.parent!==n?(s={parent:n,cache:n},a.memoizedState=s,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=s),yl(a,ba,n)):(n=r.cache,yl(a,ba,n),n!==s.cache&&Yc(a,[ba],l,!0))),Ea(e,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(O(156,a.tag))}function Qt(e){e.flags|=4}function ac(e,a,l,n,s){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(kp())e.flags|=8192;else throw un=ji,pu}else e.flags&=-16777217}function am(e,a){if(a.type!=="stylesheet"||a.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zp(a))if(kp())e.flags|=8192;else throw un=ji,pu}function Yr(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Mh():536870912,e.lanes|=a,ls|=a)}function ws(e,a){if(!ze)switch(e.tailMode){case"hidden":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(a)for(var s=e.child;s!==null;)l|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)l|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=l,a}function dx(e,a,l){var n=a.pendingProps;switch(uu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(a),null;case 1:return Ze(a),null;case 3:return l=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),nl(ba),Kn(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(kn(a)?Qt(a):e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Xo())),Ze(a),null;case 26:var s=a.type,r=a.memoizedState;return e===null?(Qt(a),r!==null?(Ze(a),am(a,r)):(Ze(a),ac(a,s,null,n,l))):r?r!==e.memoizedState?(Qt(a),Ze(a),am(a,r)):(Ze(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Qt(a),Ze(a),ac(a,s,e,n,l)),null;case 27:if(pi(a),l=Bl.current,s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Qt(a);else{if(!n){if(a.stateNode===null)throw Error(O(166));return Ze(a),null}e=$t.current,kn(a)?T0(a):(e=Qp(s,n,l),a.stateNode=e,Qt(a))}return Ze(a),null;case 5:if(pi(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Qt(a);else{if(!n){if(a.stateNode===null)throw Error(O(166));return Ze(a),null}if(r=$t.current,kn(a))T0(a);else{var i=_i(Bl.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?i.createElement(s,{is:n.is}):i.createElement(s)}}r[Da]=a,r[at]=n;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=r;e:switch(La(r,s,n),s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Qt(a)}}return Ze(a),ac(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,l),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Qt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(O(166));if(e=Bl.current,kn(a)){if(e=a.stateNode,l=a.memoizedProps,n=null,s=Ba,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}e[Da]=a,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Yp(e.nodeValue,l)),e||Xl(a,!0)}else e=_i(e).createTextNode(n),e[Da]=a,a.stateNode=e}return Ze(a),null;case 31:if(l=a.memoizedState,e===null||e.memoizedState!==null){if(n=kn(a),l!==null){if(e===null){if(!n)throw Error(O(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(557));e[Da]=a}else hn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Ze(a),e=!1}else l=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return a.flags&256?(it(a),a):(it(a),null);if(a.flags&128)throw Error(O(558))}return Ze(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=kn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(O(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[Da]=a}else hn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Ze(a),s=!1}else s=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return a.flags&256?(it(a),a):(it(a),null)}return it(a),a.flags&128?(a.lanes=l,a):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=a.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==s&&(n.flags|=2048)),l!==e&&l&&(a.child.flags|=8192),Yr(a,a.updateQueue),Ze(a),null);case 4:return Kn(),e===null&&Ou(a.stateNode.containerInfo),Ze(a),null;case 10:return nl(a.type),Ze(a),null;case 19:if(Ra(ha),n=a.memoizedState,n===null)return Ze(a),null;if(s=(a.flags&128)!==0,r=n.rendering,r===null)if(s)ws(n,!1);else{if(ua!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(r=Ni(e),r!==null){for(a.flags|=128,ws(n,!1),e=r.updateQueue,a.updateQueue=e,Yr(a,e),a.subtreeFlags=0,e=l,l=a.child;l!==null;)n1(l,e),l=l.sibling;return Qe(ha,ha.current&1|2),ze&&Kt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&dt()>Ri&&(a.flags|=128,s=!0,ws(n,!1),a.lanes=4194304)}else{if(!s)if(e=Ni(r),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,Yr(a,e),ws(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ze)return Ze(a),null}else 2*dt()-n.renderingStartTime>Ri&&l!==536870912&&(a.flags|=128,s=!0,ws(n,!1),a.lanes=4194304);n.isBackwards?(r.sibling=a.child,a.child=r):(e=n.last,e!==null?e.sibling=r:a.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=dt(),e.sibling=null,l=ha.current,Qe(ha,s?l&1|2:l&1),ze&&Kt(a,n.treeForkCount),e):(Ze(a),null);case 22:case 23:return it(a),gu(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?l&536870912&&!(a.flags&128)&&(Ze(a),a.subtreeFlags&6&&(a.flags|=8192)):Ze(a),l=a.updateQueue,l!==null&&Yr(a,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==l&&(a.flags|=2048),e!==null&&Ra(dn),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),nl(ba),Ze(a),null;case 25:return null;case 30:return null}throw Error(O(156,a.tag))}function ux(e,a){switch(uu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return nl(ba),Kn(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return pi(a),null;case 31:if(a.memoizedState!==null){if(it(a),a.alternate===null)throw Error(O(340));hn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(it(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(O(340));hn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ra(ha),null;case 4:return Kn(),null;case 10:return nl(a.type),null;case 22:case 23:return it(a),gu(),e!==null&&Ra(dn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return nl(ba),null;case 25:return null;default:return null}}function np(e,a){switch(uu(a),a.tag){case 3:nl(ba),Kn();break;case 26:case 27:case 5:pi(a);break;case 4:Kn();break;case 31:a.memoizedState!==null&&it(a);break;case 13:it(a);break;case 19:Ra(ha);break;case 10:nl(a.type);break;case 22:case 23:it(a),gu(),e!==null&&Ra(dn);break;case 24:nl(ba)}}function jr(e,a){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){n=void 0;var r=l.create,i=l.inst;n=r(),i.destroy=n}l=l.next}while(l!==s)}}catch(o){Oe(a,a.return,o)}}function Ql(e,a,l){try{var n=a.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var r=s.next;n=r;do{if((n.tag&e)===e){var i=n.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,s=a;var c=l,d=o;try{d()}catch(m){Oe(s,c,m)}}}n=n.next}while(n!==r)}}catch(m){Oe(a,a.return,m)}}function sp(e){var a=e.updateQueue;if(a!==null){var l=e.stateNode;try{p1(a,l)}catch(n){Oe(e,e.return,n)}}}function rp(e,a,l){l.props=vn(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){Oe(e,a,n)}}function qs(e,a){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(s){Oe(e,a,s)}}function Ht(e,a){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(s){Oe(e,a,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(s){Oe(e,a,s)}else l.current=null}function ip(e){var a=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(s){Oe(e,e.return,s)}}function tc(e,a,l){try{var n=e.stateNode;Dx(n,e.type,l,a),n[at]=a}catch(s){Oe(e,e.return,s)}}function op(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zl(e.type)||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,a,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(e),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=al));else if(n!==4&&(n===27&&Zl(e.type)&&(l=e.stateNode,a=null),e=e.child,e!==null))for(td(e,a,l),e=e.sibling;e!==null;)td(e,a,l),e=e.sibling}function Mi(e,a,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?l.insertBefore(e,a):l.appendChild(e);else if(n!==4&&(n===27&&Zl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Mi(e,a,l),e=e.sibling;e!==null;)Mi(e,a,l),e=e.sibling}function cp(e){var a=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,s=a.attributes;s.length;)a.removeAttributeNode(s[0]);La(a,n,l),a[Da]=e,a[at]=l}catch(r){Oe(e,e.return,r)}}var Jt=!1,xa=!1,nc=!1,tm=typeof WeakSet=="function"?WeakSet:Set,ka=null;function mx(e,a){if(e=e.containerInfo,cd=Vi,e=Zh(e),ru(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var s=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var i=0,o=-1,c=-1,d=0,m=0,f=e,p=null;a:for(;;){for(var x;f!==l||s!==0&&f.nodeType!==3||(o=i+s),f!==r||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break a;if(p===l&&++d===s&&(o=i),p===r&&++m===n&&(c=i),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}l=o===-1||c===-1?null:{start:o,end:c}}else l=null}l=l||{start:0,end:0}}else l=null;for(dd={focusedElem:e,selectionRange:l},Vi=!1,ka=a;ka!==null;)if(a=ka,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ka=e;else for(;ka!==null;){switch(a=ka,r=a.alternate,e=a.flags,a.tag){case 0:if(e&4&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)s=e[l],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,l=a,s=r.memoizedProps,r=r.memoizedState,n=l.stateNode;try{var y=vn(l.type,s);e=n.getSnapshotBeforeUpdate(y,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(j){Oe(l,l.return,j)}}break;case 3:if(e&1024){if(e=a.stateNode.containerInfo,l=e.nodeType,l===9)md(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(O(163))}if(e=a.sibling,e!==null){e.return=a.return,ka=e;break}ka=a.return}}function dp(e,a,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:Pt(e,l),n&4&&jr(5,l);break;case 1:if(Pt(e,l),n&4)if(e=l.stateNode,a===null)try{e.componentDidMount()}catch(i){Oe(l,l.return,i)}else{var s=vn(l.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(s,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Oe(l,l.return,i)}}n&64&&sp(l),n&512&&qs(l,l.return);break;case 3:if(Pt(e,l),n&64&&(e=l.updateQueue,e!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{p1(e,a)}catch(i){Oe(l,l.return,i)}}break;case 27:a===null&&n&4&&cp(l);case 26:case 5:Pt(e,l),a===null&&n&4&&ip(l),n&512&&qs(l,l.return);break;case 12:Pt(e,l);break;case 31:Pt(e,l),n&4&&hp(e,l);break;case 13:Pt(e,l),n&4&&pp(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=jx.bind(null,l),Ux(e,l))));break;case 22:if(n=l.memoizedState!==null||Jt,!n){a=a!==null&&a.memoizedState!==null||xa,s=Jt;var r=xa;Jt=n,(xa=a)&&!r?Zt(e,l,(l.subtreeFlags&8772)!==0):Pt(e,l),Jt=s,xa=r}break;case 30:break;default:Pt(e,l)}}function up(e){var a=e.alternate;a!==null&&(e.alternate=null,up(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&eu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var na=null,Ka=!1;function Ft(e,a,l){for(l=l.child;l!==null;)mp(e,a,l),l=l.sibling}function mp(e,a,l){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(pr,l)}catch{}switch(l.tag){case 26:xa||Ht(l,a),Ft(e,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:xa||Ht(l,a);var n=na,s=Ka;Zl(l.type)&&(na=l.stateNode,Ka=!1),Ft(e,a,l),Xs(l.stateNode),na=n,Ka=s;break;case 5:xa||Ht(l,a);case 6:if(n=na,s=Ka,na=null,Ft(e,a,l),na=n,Ka=s,na!==null)if(Ka)try{(na.nodeType===9?na.body:na.nodeName==="HTML"?na.ownerDocument.body:na).removeChild(l.stateNode)}catch(r){Oe(l,a,r)}else try{na.removeChild(l.stateNode)}catch(r){Oe(l,a,r)}break;case 18:na!==null&&(Ka?(e=na,fm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),is(e)):fm(na,l.stateNode));break;case 4:n=na,s=Ka,na=l.stateNode.containerInfo,Ka=!0,Ft(e,a,l),na=n,Ka=s;break;case 0:case 11:case 14:case 15:Ql(2,l,a),xa||Ql(4,l,a),Ft(e,a,l);break;case 1:xa||(Ht(l,a),n=l.stateNode,typeof n.componentWillUnmount=="function"&&rp(l,a,n)),Ft(e,a,l);break;case 21:Ft(e,a,l);break;case 22:xa=(n=xa)||l.memoizedState!==null,Ft(e,a,l),xa=n;break;default:Ft(e,a,l)}}function hp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{is(e)}catch(l){Oe(a,a.return,l)}}}function pp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{is(e)}catch(l){Oe(a,a.return,l)}}function hx(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new tm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new tm),a;default:throw Error(O(435,e.tag))}}function Wr(e,a){var l=hx(e);a.forEach(function(n){if(!l.has(n)){l.add(n);var s=wx.bind(null,e,n);n.then(s,s)}})}function Pa(e,a){var l=a.deletions;if(l!==null)for(var n=0;n<l.length;n++){var s=l[n],r=e,i=a,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Zl(o.type)){na=o.stateNode,Ka=!1;break e}break;case 5:na=o.stateNode,Ka=!1;break e;case 3:case 4:na=o.stateNode.containerInfo,Ka=!0;break e}o=o.return}if(na===null)throw Error(O(160));mp(r,i,s),na=null,Ka=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)fp(a,e),a=a.sibling}var Tt=null;function fp(e,a){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pa(a,e),Za(e),n&4&&(Ql(3,e,e.return),jr(3,e),Ql(5,e,e.return));break;case 1:Pa(a,e),Za(e),n&512&&(xa||l===null||Ht(l,l.return)),n&64&&Jt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var s=Tt;if(Pa(a,e),Za(e),n&512&&(xa||l===null||Ht(l,l.return)),n&4){var r=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,s=s.ownerDocument||s;a:switch(n){case"title":r=s.getElementsByTagName("title")[0],(!r||r[vr]||r[Da]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(n),s.head.insertBefore(r,s.querySelector("head > title"))),La(r,n,l),r[Da]=e,Ma(r),n=r;break e;case"link":var i=wm("link","href",s).get(n+(l.href||""));if(i){for(var o=0;o<i.length;o++)if(r=i[o],r.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&r.getAttribute("rel")===(l.rel==null?null:l.rel)&&r.getAttribute("title")===(l.title==null?null:l.title)&&r.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(o,1);break a}}r=s.createElement(n),La(r,n,l),s.head.appendChild(r);break;case"meta":if(i=wm("meta","content",s).get(n+(l.content||""))){for(o=0;o<i.length;o++)if(r=i[o],r.getAttribute("content")===(l.content==null?null:""+l.content)&&r.getAttribute("name")===(l.name==null?null:l.name)&&r.getAttribute("property")===(l.property==null?null:l.property)&&r.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&r.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(o,1);break a}}r=s.createElement(n),La(r,n,l),s.head.appendChild(r);break;default:throw Error(O(468,n))}r[Da]=e,Ma(r),n=r}e.stateNode=n}else Nm(s,e.type,e.stateNode);else e.stateNode=jm(s,n,e.memoizedProps);else r!==n?(r===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):r.count--,n===null?Nm(s,e.type,e.stateNode):jm(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&tc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Pa(a,e),Za(e),n&512&&(xa||l===null||Ht(l,l.return)),l!==null&&n&4&&tc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Pa(a,e),Za(e),n&512&&(xa||l===null||Ht(l,l.return)),e.flags&32){s=e.stateNode;try{In(s,"")}catch(y){Oe(e,e.return,y)}}n&4&&e.stateNode!=null&&(s=e.memoizedProps,tc(e,s,l!==null?l.memoizedProps:s)),n&1024&&(nc=!0);break;case 6:if(Pa(a,e),Za(e),n&4){if(e.stateNode===null)throw Error(O(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(y){Oe(e,e.return,y)}}break;case 3:if(ci=null,s=Tt,Tt=Li(a.containerInfo),Pa(a,e),Tt=s,Za(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{is(a.containerInfo)}catch(y){Oe(e,e.return,y)}nc&&(nc=!1,gp(e));break;case 4:n=Tt,Tt=Li(e.stateNode.containerInfo),Pa(a,e),Za(e),Tt=n;break;case 12:Pa(a,e),Za(e);break;case 31:Pa(a,e),Za(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wr(e,n)));break;case 13:Pa(a,e),Za(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(oo=dt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wr(e,n)));break;case 22:s=e.memoizedState!==null;var c=l!==null&&l.memoizedState!==null,d=Jt,m=xa;if(Jt=d||s,xa=m||c,Pa(a,e),xa=m,Jt=d,Za(e),n&8192)e:for(a=e.stateNode,a._visibility=s?a._visibility&-2:a._visibility|1,s&&(l===null||c||Jt||xa||ln(e)),l=null,a=e;;){if(a.tag===5||a.tag===26){if(l===null){c=l=a;try{if(r=c.stateNode,s)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=c.stateNode;var f=c.memoizedProps.style,p=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){Oe(c,c.return,y)}}}else if(a.tag===6){if(l===null){c=a;try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(y){Oe(c,c.return,y)}}}else if(a.tag===18){if(l===null){c=a;try{var x=c.stateNode;s?gm(x,!0):gm(c.stateNode,!1)}catch(y){Oe(c,c.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Wr(e,l))));break;case 19:Pa(a,e),Za(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wr(e,n)));break;case 30:break;case 21:break;default:Pa(a,e),Za(e)}}function Za(e){var a=e.flags;if(a&2){try{for(var l,n=e.return;n!==null;){if(op(n)){l=n;break}n=n.return}if(l==null)throw Error(O(160));switch(l.tag){case 27:var s=l.stateNode,r=lc(e);Mi(e,r,s);break;case 5:var i=l.stateNode;l.flags&32&&(In(i,""),l.flags&=-33);var o=lc(e);Mi(e,o,i);break;case 3:case 4:var c=l.stateNode.containerInfo,d=lc(e);td(e,d,c);break;default:throw Error(O(161))}}catch(m){Oe(e,e.return,m)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;gp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Pt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)dp(e,a.alternate,a),a=a.sibling}function ln(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ql(4,a,a.return),ln(a);break;case 1:Ht(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&rp(a,a.return,l),ln(a);break;case 27:Xs(a.stateNode);case 26:case 5:Ht(a,a.return),ln(a);break;case 22:a.memoizedState===null&&ln(a);break;case 30:ln(a);break;default:ln(a)}e=e.sibling}}function Zt(e,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,s=e,r=a,i=r.flags;switch(r.tag){case 0:case 11:case 15:Zt(s,r,l),jr(4,r);break;case 1:if(Zt(s,r,l),n=r,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(d){Oe(n,n.return,d)}if(n=r,s=n.updateQueue,s!==null){var o=n.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)h1(c[s],o)}catch(d){Oe(n,n.return,d)}}l&&i&64&&sp(r),qs(r,r.return);break;case 27:cp(r);case 26:case 5:Zt(s,r,l),l&&n===null&&i&4&&ip(r),qs(r,r.return);break;case 12:Zt(s,r,l);break;case 31:Zt(s,r,l),l&&i&4&&hp(s,r);break;case 13:Zt(s,r,l),l&&i&4&&pp(s,r);break;case 22:r.memoizedState===null&&Zt(s,r,l),qs(r,r.return);break;case 30:break;default:Zt(s,r,l)}a=a.sibling}}function Eu(e,a){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&br(l))}function Du(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&br(e))}function Rt(e,a,l,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)vp(e,a,l,n),a=a.sibling}function vp(e,a,l,n){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Rt(e,a,l,n),s&2048&&jr(9,a);break;case 1:Rt(e,a,l,n);break;case 3:Rt(e,a,l,n),s&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&br(e)));break;case 12:if(s&2048){Rt(e,a,l,n),e=a.stateNode;try{var r=a.memoizedProps,i=r.id,o=r.onPostCommit;typeof o=="function"&&o(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){Oe(a,a.return,c)}}else Rt(e,a,l,n);break;case 31:Rt(e,a,l,n);break;case 13:Rt(e,a,l,n);break;case 23:break;case 22:r=a.stateNode,i=a.alternate,a.memoizedState!==null?r._visibility&2?Rt(e,a,l,n):Ys(e,a):r._visibility&2?Rt(e,a,l,n):(r._visibility|=2,Tn(e,a,l,n,(a.subtreeFlags&10256)!==0||!1)),s&2048&&Eu(i,a);break;case 24:Rt(e,a,l,n),s&2048&&Du(a.alternate,a);break;default:Rt(e,a,l,n)}}function Tn(e,a,l,n,s){for(s=s&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var r=e,i=a,o=l,c=n,d=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(r,i,o,c,s),jr(8,i);break;case 23:break;case 22:var m=i.stateNode;i.memoizedState!==null?m._visibility&2?Tn(r,i,o,c,s):Ys(r,i):(m._visibility|=2,Tn(r,i,o,c,s)),s&&d&2048&&Eu(i.alternate,i);break;case 24:Tn(r,i,o,c,s),s&&d&2048&&Du(i.alternate,i);break;default:Tn(r,i,o,c,s)}a=a.sibling}}function Ys(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=e,n=a,s=n.flags;switch(n.tag){case 22:Ys(l,n),s&2048&&Eu(n.alternate,n);break;case 24:Ys(l,n),s&2048&&Du(n.alternate,n);break;default:Ys(l,n)}a=a.sibling}}var Rs=8192;function Mn(e,a,l){if(e.subtreeFlags&Rs)for(e=e.child;e!==null;)xp(e,a,l),e=e.sibling}function xp(e,a,l){switch(e.tag){case 26:Mn(e,a,l),e.flags&Rs&&e.memoizedState!==null&&Ix(l,Tt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,a,l);break;case 3:case 4:var n=Tt;Tt=Li(e.stateNode.containerInfo),Mn(e,a,l),Tt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Rs,Rs=16777216,Mn(e,a,l),Rs=n):Mn(e,a,l));break;default:Mn(e,a,l)}}function bp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Ns(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];ka=n,jp(n,e)}bp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yp(e),e=e.sibling}function yp(e){switch(e.tag){case 0:case 11:case 15:Ns(e),e.flags&2048&&Ql(9,e,e.return);break;case 3:Ns(e);break;case 12:Ns(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,ii(e)):Ns(e);break;default:Ns(e)}}function ii(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];ka=n,jp(n,e)}bp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ql(8,a,a.return),ii(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,ii(a));break;default:ii(a)}e=e.sibling}}function jp(e,a){for(;ka!==null;){var l=ka;switch(l.tag){case 0:case 11:case 15:Ql(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:br(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,ka=n;else e:for(l=e;ka!==null;){n=ka;var s=n.sibling,r=n.return;if(up(n),n===l){ka=null;break e}if(s!==null){s.return=r,ka=s;break e}ka=r}}}var px={getCacheForType:function(e){var a=_a(ba),l=a.data.get(e);return l===void 0&&(l=e(),a.data.set(e,l)),l},cacheSignal:function(){return _a(ba).controller.signal}},fx=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Xe=null,je=null,we=0,He=0,rt=null,kl=!1,ps=!1,Bu=!1,ul=0,ua=0,Fl=0,mn=0,_u=0,ct=0,ls=0,Ws=null,Ja=null,ld=!1,oo=0,wp=0,Ri=1/0,Ti=null,Ol=null,Sa=0,Vl=null,ns=null,sl=0,nd=0,sd=null,Np=null,Gs=0,rd=null;function ht(){return Ee&2&&we!==0?we&-we:oe.T!==null?Hu():Eh()}function Sp(){if(ct===0)if(!(we&536870912)||ze){var e=Lr;Lr<<=1,!(Lr&3932160)&&(Lr=262144),ct=e}else ct=536870912;return e=ft.current,e!==null&&(e.flags|=32),ct}function Ia(e,a,l){(e===Xe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Ml(e,we,ct,!1)),gr(e,l),(!(Ee&2)||e!==Xe)&&(e===Xe&&(!(Ee&2)&&(mn|=l),ua===4&&Ml(e,we,ct,!1)),Yt(e))}function zp(e,a,l){if(Ee&6)throw Error(O(327));var n=!l&&(a&127)===0&&(a&e.expiredLanes)===0||fr(e,a),s=n?xx(e,a):sc(e,a,!0),r=n;do{if(s===0){ps&&!n&&Ml(e,a,0,!1);break}else{if(l=e.current.alternate,r&&!gx(l)){s=sc(e,a,!1),r=!1;continue}if(s===2){if(r=a,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var o=e;s=Ws;var c=o.current.memoizedState.isDehydrated;if(c&&(ss(o,i).flags|=256),i=sc(o,i,!1),i!==2){if(Bu&&!c){o.errorRecoveryDisabledLanes|=r,mn|=r,s=4;break e}r=Ja,Ja=s,r!==null&&(Ja===null?Ja=r:Ja.push.apply(Ja,r))}s=i}if(r=!1,s!==2)continue}}if(s===1){ss(e,0),Ml(e,a,0,!0);break}e:{switch(n=e,r=s,r){case 0:case 1:throw Error(O(345));case 4:if((a&4194048)!==a)break;case 6:Ml(n,a,ct,!kl);break e;case 2:Ja=null;break;case 3:case 5:break;default:throw Error(O(329))}if((a&62914560)===a&&(s=oo+300-dt(),10<s)){if(Ml(n,a,ct,!kl),Ki(n,0,!0)!==0)break e;sl=a,n.timeoutHandle=Gp(lm.bind(null,n,l,Ja,Ti,ld,a,ct,mn,ls,kl,r,"Throttled",-0,0),s);break e}lm(n,l,Ja,Ti,ld,a,ct,mn,ls,kl,r,null,-0,0)}}break}while(!0);Yt(e)}function lm(e,a,l,n,s,r,i,o,c,d,m,f,p,x){if(e.timeoutHandle=-1,f=a.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:al},xp(a,r,f);var y=(r&62914560)===r?oo-dt():(r&4194048)===r?wp-dt():0;if(y=e2(f,y),y!==null){sl=r,e.cancelPendingCommit=y(sm.bind(null,e,a,r,l,n,s,i,o,c,m,f,null,p,x)),Ml(e,r,i,!d);return}}sm(e,a,r,l,n,s,i,o,c)}function gx(e){for(var a=e;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var s=l[n],r=s.getSnapshot;s=s.value;try{if(!pt(r(),s))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ml(e,a,l,n){a&=~_u,a&=~mn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var s=a;0<s;){var r=31-mt(s),i=1<<r;n[r]=-1,s&=~i}l!==0&&Rh(e,l,a)}function co(){return Ee&6?!0:(wr(0),!1)}function Lu(){if(je!==null){if(He===0)var e=je.return;else e=je,tl=Nn=null,ju(e),Fn=null,tr=0,e=je;for(;e!==null;)np(e.alternate,e),e=e.return;je=null}}function ss(e,a){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Lx(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),sl=0,Lu(),Xe=e,je=l=ll(e.current,null),we=a,He=0,rt=null,kl=!1,ps=fr(e,a),Bu=!1,ls=ct=_u=mn=Fl=ua=0,Ja=Ws=null,ld=!1,a&8&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var s=31-mt(n),r=1<<s;a|=e[s],n&=~r}return ul=a,ao(),l}function Cp(e,a){pe=null,oe.H=nr,a===hs||a===lo?(a=_0(),He=3):a===pu?(a=_0(),He=4):He=a===Tu?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,rt=a,je===null&&(ua=1,Ci(e,Nt(a,e.current)))}function kp(){var e=ft.current;return e===null?!0:(we&4194048)===we?zt===null:(we&62914560)===we||we&536870912?e===zt:!1}function Mp(){var e=oe.H;return oe.H=nr,e===null?nr:e}function Rp(){var e=oe.A;return oe.A=px,e}function Ai(){ua=4,kl||(we&4194048)!==we&&ft.current!==null||(ps=!0),!(Fl&134217727)&&!(mn&134217727)||Xe===null||Ml(Xe,we,ct,!1)}function sc(e,a,l){var n=Ee;Ee|=2;var s=Mp(),r=Rp();(Xe!==e||we!==a)&&(Ti=null,ss(e,a)),a=!1;var i=ua;e:do try{if(He!==0&&je!==null){var o=je,c=rt;switch(He){case 8:Lu(),i=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(a=!0);var d=He;if(He=0,rt=null,Yn(e,o,c,d),l&&ps){i=0;break e}break;default:d=He,He=0,rt=null,Yn(e,o,c,d)}}vx(),i=ua;break}catch(m){Cp(e,m)}while(!0);return a&&e.shellSuspendCounter++,tl=Nn=null,Ee=n,oe.H=s,oe.A=r,je===null&&(Xe=null,we=0,ao()),i}function vx(){for(;je!==null;)Tp(je)}function xx(e,a){var l=Ee;Ee|=2;var n=Mp(),s=Rp();Xe!==e||we!==a?(Ti=null,Ri=dt()+500,ss(e,a)):ps=fr(e,a);e:do try{if(He!==0&&je!==null){a=je;var r=rt;a:switch(He){case 1:He=0,rt=null,Yn(e,a,r,1);break;case 2:case 9:if(B0(r)){He=0,rt=null,nm(a);break}a=function(){He!==2&&He!==9||Xe!==e||(He=7),Yt(e)},r.then(a,a);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:B0(r)?(He=0,rt=null,nm(a)):(He=0,rt=null,Yn(e,a,r,7));break;case 5:var i=null;switch(je.tag){case 26:i=je.memoizedState;case 5:case 27:var o=je;if(i?Zp(i):o.stateNode.complete){He=0,rt=null;var c=o.sibling;if(c!==null)je=c;else{var d=o.return;d!==null?(je=d,uo(d)):je=null}break a}}He=0,rt=null,Yn(e,a,r,5);break;case 6:He=0,rt=null,Yn(e,a,r,6);break;case 8:Lu(),ua=6;break e;default:throw Error(O(462))}}bx();break}catch(m){Cp(e,m)}while(!0);return tl=Nn=null,oe.H=n,oe.A=s,Ee=l,je!==null?0:(Xe=null,we=0,ao(),ua)}function bx(){for(;je!==null&&!qg();)Tp(je)}function Tp(e){var a=lp(e.alternate,e,ul);e.memoizedProps=e.pendingProps,a===null?uo(e):je=a}function nm(e){var a=e,l=a.alternate;switch(a.tag){case 15:case 0:a=K0(l,a,a.pendingProps,a.type,void 0,we);break;case 11:a=K0(l,a,a.pendingProps,a.type.render,a.ref,we);break;case 5:ju(a);default:np(l,a),a=je=n1(a,ul),a=lp(l,a,ul)}e.memoizedProps=e.pendingProps,a===null?uo(e):je=a}function Yn(e,a,l,n){tl=Nn=null,ju(a),Fn=null,tr=0;var s=a.return;try{if(ix(e,s,a,l,we)){ua=1,Ci(e,Nt(l,e.current)),je=null;return}}catch(r){if(s!==null)throw je=s,r;ua=1,Ci(e,Nt(l,e.current)),je=null;return}a.flags&32768?(ze||n===1?e=!0:ps||we&536870912?e=!1:(kl=e=!0,(n===2||n===9||n===3||n===6)&&(n=ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ap(a,e)):uo(a)}function uo(e){var a=e;do{if(a.flags&32768){Ap(a,kl);return}e=a.return;var l=dx(a.alternate,a,ul);if(l!==null){je=l;return}if(a=a.sibling,a!==null){je=a;return}je=a=e}while(a!==null);ua===0&&(ua=5)}function Ap(e,a){do{var l=ux(e.alternate,e);if(l!==null){l.flags&=32767,je=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(e=e.sibling,e!==null)){je=e;return}je=e=l}while(e!==null);ua=6,je=null}function sm(e,a,l,n,s,r,i,o,c){e.cancelPendingCommit=null;do mo();while(Sa!==0);if(Ee&6)throw Error(O(327));if(a!==null){if(a===e.current)throw Error(O(177));if(r=a.lanes|a.childLanes,r|=iu,Jg(e,l,r,i,o,c),e===Xe&&(je=Xe=null,we=0),ns=a,Vl=e,sl=l,nd=r,sd=s,Np=n,a.subtreeFlags&10256||a.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Nx(fi,function(){return Lp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,a.subtreeFlags&13878||n){n=oe.T,oe.T=null,s=De.p,De.p=2,i=Ee,Ee|=4;try{mx(e,a,l)}finally{Ee=i,De.p=s,oe.T=n}}Sa=1,Ep(),Dp(),Bp()}}function Ep(){if(Sa===1){Sa=0;var e=Vl,a=ns,l=(a.flags&13878)!==0;if(a.subtreeFlags&13878||l){l=oe.T,oe.T=null;var n=De.p;De.p=2;var s=Ee;Ee|=4;try{fp(a,e);var r=dd,i=Zh(e.containerInfo),o=r.focusedElem,c=r.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(c!==null&&ru(o)){var d=c.start,m=c.end;if(m===void 0&&(m=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(m,o.value.length);else{var f=o.ownerDocument||document,p=f&&f.defaultView||window;if(p.getSelection){var x=p.getSelection(),y=o.textContent.length,j=Math.min(c.start,y),w=c.end===void 0?j:Math.min(c.end,y);!x.extend&&j>w&&(i=w,w=j,j=i);var b=k0(o,j),v=k0(o,w);if(b&&v&&(x.rangeCount!==1||x.anchorNode!==b.node||x.anchorOffset!==b.offset||x.focusNode!==v.node||x.focusOffset!==v.offset)){var h=f.createRange();h.setStart(b.node,b.offset),x.removeAllRanges(),j>w?(x.addRange(h),x.extend(v.node,v.offset)):(h.setEnd(v.node,v.offset),x.addRange(h))}}}}for(f=[],x=o;x=x.parentNode;)x.nodeType===1&&f.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var g=f[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Vi=!!cd,dd=cd=null}finally{Ee=s,De.p=n,oe.T=l}}e.current=a,Sa=2}}function Dp(){if(Sa===2){Sa=0;var e=Vl,a=ns,l=(a.flags&8772)!==0;if(a.subtreeFlags&8772||l){l=oe.T,oe.T=null;var n=De.p;De.p=2;var s=Ee;Ee|=4;try{dp(e,a.alternate,a)}finally{Ee=s,De.p=n,oe.T=l}}Sa=3}}function Bp(){if(Sa===4||Sa===3){Sa=0,Yg();var e=Vl,a=ns,l=sl,n=Np;a.subtreeFlags&10256||a.flags&10256?Sa=5:(Sa=0,ns=Vl=null,_p(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ol=null),Id(l),a=a.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(pr,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=oe.T,s=De.p,De.p=2,oe.T=null;try{for(var r=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i];r(o.value,{componentStack:o.stack})}}finally{oe.T=a,De.p=s}}sl&3&&mo(),Yt(e),s=e.pendingLanes,l&261930&&s&42?e===rd?Gs++:(Gs=0,rd=e):Gs=0,wr(0)}}function _p(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,br(a)))}function mo(){return Ep(),Dp(),Bp(),Lp()}function Lp(){if(Sa!==5)return!1;var e=Vl,a=nd;nd=0;var l=Id(sl),n=oe.T,s=De.p;try{De.p=32>l?32:l,oe.T=null,l=sd,sd=null;var r=Vl,i=sl;if(Sa=0,ns=Vl=null,sl=0,Ee&6)throw Error(O(331));var o=Ee;if(Ee|=4,yp(r.current),vp(r,r.current,i,l),Ee=o,wr(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(pr,r)}catch{}return!0}finally{De.p=s,oe.T=n,_p(e,a)}}function rm(e,a,l){a=Nt(l,a),a=Ic(e.stateNode,a,2),e=Hl(e,a,2),e!==null&&(gr(e,2),Yt(e))}function Oe(e,a,l){if(e.tag===3)rm(e,e,l);else for(;a!==null;){if(a.tag===3){rm(a,e,l);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ol===null||!Ol.has(n))){e=Nt(l,e),l=K1(2),n=Hl(a,l,2),n!==null&&(J1(l,n,a,e),gr(n,2),Yt(n));break}}a=a.return}}function rc(e,a,l){var n=e.pingCache;if(n===null){n=e.pingCache=new fx;var s=new Set;n.set(a,s)}else s=n.get(a),s===void 0&&(s=new Set,n.set(a,s));s.has(l)||(Bu=!0,s.add(l),e=yx.bind(null,e,a,l),a.then(e,e))}function yx(e,a,l){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Xe===e&&(we&l)===l&&(ua===4||ua===3&&(we&62914560)===we&&300>dt()-oo?!(Ee&2)&&ss(e,0):_u|=l,ls===we&&(ls=0)),Yt(e)}function Hp(e,a){a===0&&(a=Mh()),e=wn(e,a),e!==null&&(gr(e,a),Yt(e))}function jx(e){var a=e.memoizedState,l=0;a!==null&&(l=a.retryLane),Hp(e,l)}function wx(e,a){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(l=s.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(O(314))}n!==null&&n.delete(a),Hp(e,l)}function Nx(e,a){return Kd(e,a)}var Ei=null,An=null,id=!1,Di=!1,ic=!1,Rl=0;function Yt(e){e!==An&&e.next===null&&(An===null?Ei=An=e:An=An.next=e),Di=!0,id||(id=!0,zx())}function wr(e,a){if(!ic&&Di){ic=!0;do for(var l=!1,n=Ei;n!==null;){if(e!==0){var s=n.pendingLanes;if(s===0)var r=0;else{var i=n.suspendedLanes,o=n.pingedLanes;r=(1<<31-mt(42|e)+1)-1,r&=s&~(i&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(l=!0,im(n,r))}else r=we,r=Ki(n,n===Xe?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(r&3)||fr(n,r)||(l=!0,im(n,r));n=n.next}while(l);ic=!1}}function Sx(){Op()}function Op(){Di=id=!1;var e=0;Rl!==0&&_x()&&(e=Rl);for(var a=dt(),l=null,n=Ei;n!==null;){var s=n.next,r=Vp(n,a);r===0?(n.next=null,l===null?Ei=s:l.next=s,s===null&&(An=l)):(l=n,(e!==0||r&3)&&(Di=!0)),n=s}Sa!==0&&Sa!==5||wr(e),Rl!==0&&(Rl=0)}function Vp(e,a){for(var l=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-mt(r),o=1<<i,c=s[i];c===-1?(!(o&l)||o&n)&&(s[i]=Kg(o,a)):c<=a&&(e.expiredLanes|=o),r&=~o}if(a=Xe,l=we,l=Ki(e,e===a?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===a&&(He===2||He===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&_o(n),e.callbackNode=null,e.callbackPriority=0;if(!(l&3)||fr(e,l)){if(a=l&-l,a===e.callbackPriority)return a;switch(n!==null&&_o(n),Id(l)){case 2:case 8:l=Ch;break;case 32:l=fi;break;case 268435456:l=kh;break;default:l=fi}return n=$p.bind(null,e),l=Kd(l,n),e.callbackPriority=a,e.callbackNode=l,a}return n!==null&&n!==null&&_o(n),e.callbackPriority=2,e.callbackNode=null,2}function $p(e,a){if(Sa!==0&&Sa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(mo()&&e.callbackNode!==l)return null;var n=we;return n=Ki(e,e===Xe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(zp(e,n,a),Vp(e,dt()),e.callbackNode!=null&&e.callbackNode===l?$p.bind(null,e):null)}function im(e,a){if(mo())return null;zp(e,a,!0)}function zx(){Hx(function(){Ee&6?Kd(zh,Sx):Op()})}function Hu(){if(Rl===0){var e=es;e===0&&(e=_r,_r<<=1,!(_r&261888)&&(_r=256)),Rl=e}return Rl}function om(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jr(""+e)}function cm(e,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,e.id&&l.setAttribute("form",e.id),a.parentNode.insertBefore(l,a),e=new FormData(e),l.parentNode.removeChild(l),e}function Cx(e,a,l,n,s){if(a==="submit"&&l&&l.stateNode===s){var r=om((s[at]||null).action),i=n.submitter;i&&(a=(a=i[at]||null)?om(a.formAction):i.getAttribute("formAction"),a!==null&&(r=a,i=null));var o=new Ji("action","action",null,n,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Rl!==0){var c=i?cm(s,i):new FormData(s);Kc(l,{pending:!0,data:c,method:s.method,action:r},null,c)}}else typeof r=="function"&&(o.preventDefault(),c=i?cm(s,i):new FormData(s),Kc(l,{pending:!0,data:c,method:s.method,action:r},r,c))},currentTarget:s}]})}}for(var oc=0;oc<Vc.length;oc++){var cc=Vc[oc],kx=cc.toLowerCase(),Mx=cc[0].toUpperCase()+cc.slice(1);Et(kx,"on"+Mx)}Et(Jh,"onAnimationEnd");Et(Ih,"onAnimationIteration");Et(e1,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Wv,"onTransitionRun");Et(Gv,"onTransitionStart");Et(Xv,"onTransitionCancel");Et(a1,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sr));function Up(e,a){a=(a&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],s=n.event;n=n.listeners;e:{var r=void 0;if(a)for(var i=n.length-1;0<=i;i--){var o=n[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==r&&s.isPropagationStopped())break e;r=o,s.currentTarget=d;try{r(s)}catch(m){vi(m)}s.currentTarget=null,r=c}else for(i=0;i<n.length;i++){if(o=n[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==r&&s.isPropagationStopped())break e;r=o,s.currentTarget=d;try{r(s)}catch(m){vi(m)}s.currentTarget=null,r=c}}}}function ye(e,a){var l=a[Ac];l===void 0&&(l=a[Ac]=new Set);var n=e+"__bubble";l.has(n)||(qp(a,e,2,!1),l.add(n))}function dc(e,a,l){var n=0;a&&(n|=4),qp(l,e,n,a)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[Gr]){e[Gr]=!0,Dh.forEach(function(l){l!=="selectionchange"&&(Rx.has(l)||dc(l,!1,e),dc(l,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Gr]||(a[Gr]=!0,dc("selectionchange",!1,a))}}function qp(e,a,l,n){switch(af(a)){case 2:var s=l2;break;case 8:s=n2;break;default:s=qu}l=s.bind(null,a,l,e),s=void 0,!Lc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(a,l,{capture:!0,passive:s}):e.addEventListener(a,l,!0):s!==void 0?e.addEventListener(a,l,{passive:s}):e.addEventListener(a,l,!1)}function uc(e,a,l,n,s){var r=n;if(!(a&1)&&!(a&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===s)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===s)return;i=i.return}for(;o!==null;){if(i=Bn(o),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){n=r=i;continue e}o=o.parentNode}}n=n.return}Uh(function(){var d=r,m=tu(l),f=[];e:{var p=t1.get(e);if(p!==void 0){var x=Ji,y=e;switch(e){case"keypress":if(ei(l)===0)break e;case"keydown":case"keyup":x=wv;break;case"focusin":y="focus",x=$o;break;case"focusout":y="blur",x=$o;break;case"beforeblur":case"afterblur":x=$o;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=zv;break;case Jh:case Ih:case e1:x=hv;break;case a1:x=kv;break;case"scroll":case"scrollend":x=ov;break;case"wheel":x=Rv;break;case"copy":case"cut":case"paste":x=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=b0;break;case"toggle":case"beforetoggle":x=Av}var j=(a&4)!==0,w=!j&&(e==="scroll"||e==="scrollend"),b=j?p!==null?p+"Capture":null:p;j=[];for(var v=d,h;v!==null;){var g=v;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||b===null||(g=Ks(v,b),g!=null&&j.push(rr(v,g,h))),w)break;v=v.return}0<j.length&&(p=new x(p,y,null,l,m),f.push({event:p,listeners:j}))}}if(!(a&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&l!==_c&&(y=l.relatedTarget||l.fromElement)&&(Bn(y)||y[ds]))break e;if((x||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=l.relatedTarget||l.toElement,x=d,y=y?Bn(y):null,y!==null&&(w=hr(y),j=y.tag,y!==w||j!==5&&j!==27&&j!==6)&&(y=null)):(x=null,y=d),x!==y)){if(j=v0,g="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(j=b0,g="onPointerLeave",b="onPointerEnter",v="pointer"),w=x==null?p:ks(x),h=y==null?p:ks(y),p=new j(g,v+"leave",x,l,m),p.target=w,p.relatedTarget=h,g=null,Bn(m)===d&&(j=new j(b,v+"enter",y,l,m),j.target=h,j.relatedTarget=w,g=j),w=g,x&&y)a:{for(j=Tx,b=x,v=y,h=0,g=b;g;g=j(g))h++;g=0;for(var N=v;N;N=j(N))g++;for(;0<h-g;)b=j(b),h--;for(;0<g-h;)v=j(v),g--;for(;h--;){if(b===v||v!==null&&b===v.alternate){j=b;break a}b=j(b),v=j(v)}j=null}else j=null;x!==null&&dm(f,p,x,j,!1),y!==null&&w!==null&&dm(f,w,y,j,!0)}}e:{if(p=d?ks(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var T=N0;else if(w0(p))if(Qh)T=Uv;else{T=Vv;var z=Ov}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&au(d.elementType)&&(T=N0):T=$v;if(T&&(T=T(e,d))){Xh(f,T,l,m);break e}z&&z(e,p,d),e==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&Bc(p,"number",p.value)}switch(z=d?ks(d):window,e){case"focusin":(w0(z)||z.contentEditable==="true")&&(Hn=z,Hc=d,Ls=null);break;case"focusout":Ls=Hc=Hn=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,M0(f,l,m);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":M0(f,l,m)}var C;if(su)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ln?Wh(e,l)&&(L="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(L="onCompositionStart");L&&(Yh&&l.locale!=="ko"&&(Ln||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ln&&(C=qh()):(Cl=m,lu="value"in Cl?Cl.value:Cl.textContent,Ln=!0)),z=Bi(d,L),0<z.length&&(L=new x0(L,e,null,l,m),f.push({event:L,listeners:z}),C?L.data=C:(C=Gh(l),C!==null&&(L.data=C)))),(C=Dv?Bv(e,l):_v(e,l))&&(L=Bi(d,"onBeforeInput"),0<L.length&&(z=new x0("onBeforeInput","beforeinput",null,l,m),f.push({event:z,listeners:L}),z.data=C)),Cx(f,e,d,l,m)}Up(f,a)})}function rr(e,a,l){return{instance:e,listener:a,currentTarget:l}}function Bi(e,a){for(var l=a+"Capture",n=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Ks(e,l),s!=null&&n.unshift(rr(e,s,r)),s=Ks(e,a),s!=null&&n.push(rr(e,s,r))),e.tag===3)return n;e=e.return}return[]}function Tx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dm(e,a,l,n,s){for(var r=a._reactName,i=[];l!==null&&l!==n;){var o=l,c=o.alternate,d=o.stateNode;if(o=o.tag,c!==null&&c===n)break;o!==5&&o!==26&&o!==27||d===null||(c=d,s?(d=Ks(l,r),d!=null&&i.unshift(rr(l,d,c))):s||(d=Ks(l,r),d!=null&&i.push(rr(l,d,c)))),l=l.return}i.length!==0&&e.push({event:a,listeners:i})}var Ax=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function um(e){return(typeof e=="string"?e:""+e).replace(Ax,`
`).replace(Ex,"")}function Yp(e,a){return a=um(a),um(e)===a}function qe(e,a,l,n,s,r){switch(l){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||In(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&In(e,""+n);break;case"className":Or(e,"class",n);break;case"tabIndex":Or(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,l,n);break;case"style":$h(e,n,r);break;case"data":if(a!=="object"){Or(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Jr(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(l==="formAction"?(a!=="input"&&qe(e,a,"name",s.name,s,null),qe(e,a,"formEncType",s.formEncType,s,null),qe(e,a,"formMethod",s.formMethod,s,null),qe(e,a,"formTarget",s.formTarget,s,null)):(qe(e,a,"encType",s.encType,s,null),qe(e,a,"method",s.method,s,null),qe(e,a,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Jr(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=al);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(O(61));if(l=n.__html,l!=null){if(s.children!=null)throw Error(O(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Jr(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Kr(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Kr(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=rv.get(l)||l,Kr(e,l,n))}}function od(e,a,l,n,s,r){switch(l){case"style":$h(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(O(61));if(l=n.__html,l!=null){if(s.children!=null)throw Error(O(60));e.innerHTML=l}}break;case"children":typeof n=="string"?In(e,n):(typeof n=="number"||typeof n=="bigint")&&In(e,""+n);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"onClick":n!=null&&(e.onclick=al);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bh.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(s=l.endsWith("Capture"),a=l.slice(2,s?l.length-7:void 0),r=e[at]||null,r=r!=null?r[l]:null,typeof r=="function"&&e.removeEventListener(a,r,s),typeof n=="function")){typeof r!="function"&&r!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(a,n,s);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):Kr(e,l,n)}}}function La(e,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var n=!1,s=!1,r;for(r in l)if(l.hasOwnProperty(r)){var i=l[r];if(i!=null)switch(r){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(O(137,a));default:qe(e,a,r,i,l,null)}}s&&qe(e,a,"srcSet",l.srcSet,l,null),n&&qe(e,a,"src",l.src,l,null);return;case"input":ye("invalid",e);var o=r=i=s=null,c=null,d=null;for(n in l)if(l.hasOwnProperty(n)){var m=l[n];if(m!=null)switch(n){case"name":s=m;break;case"type":i=m;break;case"checked":c=m;break;case"defaultChecked":d=m;break;case"value":r=m;break;case"defaultValue":o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(O(137,a));break;default:qe(e,a,n,m,l,null)}}Hh(e,r,o,c,d,i,s,!1);return;case"select":ye("invalid",e),n=i=r=null;for(s in l)if(l.hasOwnProperty(s)&&(o=l[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":i=o;break;case"multiple":n=o;default:qe(e,a,s,o,l,null)}a=r,l=i,e.multiple=!!n,a!=null?Gn(e,!!n,a,!1):l!=null&&Gn(e,!!n,l,!0);return;case"textarea":ye("invalid",e),r=s=n=null;for(i in l)if(l.hasOwnProperty(i)&&(o=l[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(O(91));break;default:qe(e,a,i,o,l,null)}Vh(e,n,s,r);return;case"option":for(c in l)if(l.hasOwnProperty(c)&&(n=l[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:qe(e,a,c,n,l,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(n=0;n<sr.length;n++)ye(sr[n],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(n=l[d],n!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(O(137,a));default:qe(e,a,d,n,l,null)}return;default:if(au(a)){for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!==void 0&&od(e,a,m,n,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(n=l[o],n!=null&&qe(e,a,o,n,l,null))}function Dx(e,a,l,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,i=null,o=null,c=null,d=null,m=null;for(x in l){var f=l[x];if(l.hasOwnProperty(x)&&f!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=f;default:n.hasOwnProperty(x)||qe(e,a,x,null,n,f)}}for(var p in n){var x=n[p];if(f=l[p],n.hasOwnProperty(p)&&(x!=null||f!=null))switch(p){case"type":r=x;break;case"name":s=x;break;case"checked":d=x;break;case"defaultChecked":m=x;break;case"value":i=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(O(137,a));break;default:x!==f&&qe(e,a,p,x,n,f)}}Dc(e,i,o,c,d,m,r,s);return;case"select":x=i=o=p=null;for(r in l)if(c=l[r],l.hasOwnProperty(r)&&c!=null)switch(r){case"value":break;case"multiple":x=c;default:n.hasOwnProperty(r)||qe(e,a,r,null,n,c)}for(s in n)if(r=n[s],c=l[s],n.hasOwnProperty(s)&&(r!=null||c!=null))switch(s){case"value":p=r;break;case"defaultValue":o=r;break;case"multiple":i=r;default:r!==c&&qe(e,a,s,r,n,c)}a=o,l=i,n=x,p!=null?Gn(e,!!l,p,!1):!!n!=!!l&&(a!=null?Gn(e,!!l,a,!0):Gn(e,!!l,l?[]:"",!1));return;case"textarea":x=p=null;for(o in l)if(s=l[o],l.hasOwnProperty(o)&&s!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:qe(e,a,o,null,n,s)}for(i in n)if(s=n[i],r=l[i],n.hasOwnProperty(i)&&(s!=null||r!=null))switch(i){case"value":p=s;break;case"defaultValue":x=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(O(91));break;default:s!==r&&qe(e,a,i,s,n,r)}Oh(e,p,x);return;case"option":for(var y in l)if(p=l[y],l.hasOwnProperty(y)&&p!=null&&!n.hasOwnProperty(y))switch(y){case"selected":e.selected=!1;break;default:qe(e,a,y,null,n,p)}for(c in n)if(p=n[c],x=l[c],n.hasOwnProperty(c)&&p!==x&&(p!=null||x!=null))switch(c){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:qe(e,a,c,p,n,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in l)p=l[j],l.hasOwnProperty(j)&&p!=null&&!n.hasOwnProperty(j)&&qe(e,a,j,null,n,p);for(d in n)if(p=n[d],x=l[d],n.hasOwnProperty(d)&&p!==x&&(p!=null||x!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(O(137,a));break;default:qe(e,a,d,p,n,x)}return;default:if(au(a)){for(var w in l)p=l[w],l.hasOwnProperty(w)&&p!==void 0&&!n.hasOwnProperty(w)&&od(e,a,w,void 0,n,p);for(m in n)p=n[m],x=l[m],!n.hasOwnProperty(m)||p===x||p===void 0&&x===void 0||od(e,a,m,p,n,x);return}}for(var b in l)p=l[b],l.hasOwnProperty(b)&&p!=null&&!n.hasOwnProperty(b)&&qe(e,a,b,null,n,p);for(f in n)p=n[f],x=l[f],!n.hasOwnProperty(f)||p===x||p==null&&x==null||qe(e,a,f,p,n,x)}function mm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var s=l[n],r=s.transferSize,i=s.initiatorType,o=s.duration;if(r&&o&&mm(i)){for(i=0,o=s.responseEnd,n+=1;n<l.length;n++){var c=l[n],d=c.startTime;if(d>o)break;var m=c.transferSize,f=c.initiatorType;m&&mm(f)&&(c=c.responseEnd,i+=m*(c<o?1:(o-d)/(c-d)))}if(--n,a+=8*(r+i)/(s.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cd=null,dd=null;function _i(e){return e.nodeType===9?e:e.ownerDocument}function hm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ud(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var mc=null;function _x(){var e=window.event;return e&&e.type==="popstate"?e===mc?!1:(mc=e,!0):(mc=null,!1)}var Gp=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(e){return pm.resolve(null).then(e).catch(Ox)}:Gp;function Ox(e){setTimeout(function(){throw e})}function Zl(e){return e==="head"}function fm(e,a){var l=a,n=0;do{var s=l.nextSibling;if(e.removeChild(l),s&&s.nodeType===8)if(l=s.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(s),is(a);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Xs(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Xs(l);for(var r=l.firstChild;r;){var i=r.nextSibling,o=r.nodeName;r[vr]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||l.removeChild(r),r=i}}else l==="body"&&Xs(e.ownerDocument.body);l=s}while(l);is(a)}function gm(e,a){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function md(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":md(l),eu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Vx(e,a,l,n){for(;e.nodeType===1;){var s=l;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[vr])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ct(e.nextSibling),e===null)break}return null}function $x(e,a,l){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ct(e.nextSibling),e===null))return null;return e}function Xp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ct(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ux(e,a){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||l.readyState!=="loading")a();else{var n=function(){a(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ct(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var fd=null;function vm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(a===0)return Ct(e.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}e=e.nextSibling}return null}function xm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return e;a--}else l!=="/$"&&l!=="/&"||a++}e=e.previousSibling}return null}function Qp(e,a,l){switch(a=_i(l),e){case"html":if(e=a.documentElement,!e)throw Error(O(452));return e;case"head":if(e=a.head,!e)throw Error(O(453));return e;case"body":if(e=a.body,!e)throw Error(O(454));return e;default:throw Error(O(451))}}function Xs(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);eu(e)}var kt=new Map,bm=new Set;function Li(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var hl=De.d;De.d={f:qx,r:Yx,D:Wx,C:Gx,L:Xx,m:Qx,X:Px,S:Fx,M:Zx};function qx(){var e=hl.f(),a=co();return e||a}function Yx(e){var a=us(e);a!==null&&a.tag===5&&a.type==="form"?$1(a):hl.r(e)}var fs=typeof document>"u"?null:document;function Fp(e,a,l){var n=fs;if(n&&typeof a=="string"&&a){var s=wt(a);s='link[rel="'+e+'"][href="'+s+'"]',typeof l=="string"&&(s+='[crossorigin="'+l+'"]'),bm.has(s)||(bm.add(s),e={rel:e,crossOrigin:l,href:a},n.querySelector(s)===null&&(a=n.createElement("link"),La(a,"link",e),Ma(a),n.head.appendChild(a)))}}function Wx(e){hl.D(e),Fp("dns-prefetch",e,null)}function Gx(e,a){hl.C(e,a),Fp("preconnect",e,a)}function Xx(e,a,l){hl.L(e,a,l);var n=fs;if(n&&e&&a){var s='link[rel="preload"][as="'+wt(a)+'"]';a==="image"&&l&&l.imageSrcSet?(s+='[imagesrcset="'+wt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(s+='[imagesizes="'+wt(l.imageSizes)+'"]')):s+='[href="'+wt(e)+'"]';var r=s;switch(a){case"style":r=rs(e);break;case"script":r=gs(e)}kt.has(r)||(e=Ie({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:e,as:a},l),kt.set(r,e),n.querySelector(s)!==null||a==="style"&&n.querySelector(Nr(r))||a==="script"&&n.querySelector(Sr(r))||(a=n.createElement("link"),La(a,"link",e),Ma(a),n.head.appendChild(a)))}}function Qx(e,a){hl.m(e,a);var l=fs;if(l&&e){var n=a&&typeof a.as=="string"?a.as:"script",s='link[rel="modulepreload"][as="'+wt(n)+'"][href="'+wt(e)+'"]',r=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=gs(e)}if(!kt.has(r)&&(e=Ie({rel:"modulepreload",href:e},a),kt.set(r,e),l.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Sr(r)))return}n=l.createElement("link"),La(n,"link",e),Ma(n),l.head.appendChild(n)}}}function Fx(e,a,l){hl.S(e,a,l);var n=fs;if(n&&e){var s=Wn(n).hoistableStyles,r=rs(e);a=a||"default";var i=s.get(r);if(!i){var o={loading:0,preload:null};if(i=n.querySelector(Nr(r)))o.loading=5;else{e=Ie({rel:"stylesheet",href:e,"data-precedence":a},l),(l=kt.get(r))&&Vu(e,l);var c=i=n.createElement("link");Ma(c),La(c,"link",e),c._p=new Promise(function(d,m){c.onload=d,c.onerror=m}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,oi(i,a,n)}i={type:"stylesheet",instance:i,count:1,state:o},s.set(r,i)}}}function Px(e,a){hl.X(e,a);var l=fs;if(l&&e){var n=Wn(l).hoistableScripts,s=gs(e),r=n.get(s);r||(r=l.querySelector(Sr(s)),r||(e=Ie({src:e,async:!0},a),(a=kt.get(s))&&$u(e,a),r=l.createElement("script"),Ma(r),La(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(s,r))}}function Zx(e,a){hl.M(e,a);var l=fs;if(l&&e){var n=Wn(l).hoistableScripts,s=gs(e),r=n.get(s);r||(r=l.querySelector(Sr(s)),r||(e=Ie({src:e,async:!0,type:"module"},a),(a=kt.get(s))&&$u(e,a),r=l.createElement("script"),Ma(r),La(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(s,r))}}function ym(e,a,l,n){var s=(s=Bl.current)?Li(s):null;if(!s)throw Error(O(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=rs(l.href),l=Wn(s).hoistableStyles,n=l.get(a),n||(n={type:"style",instance:null,count:0,state:null},l.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=rs(l.href);var r=Wn(s).hoistableStyles,i=r.get(e);if(i||(s=s.ownerDocument||s,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=s.querySelector(Nr(e)))&&!r._p&&(i.instance=r,i.state.loading=5),kt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},kt.set(e,l),r||Kx(s,e,l,i.state))),a&&n===null)throw Error(O(528,""));return i}if(a&&n!==null)throw Error(O(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=gs(l),l=Wn(s).hoistableScripts,n=l.get(a),n||(n={type:"script",instance:null,count:0,state:null},l.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(O(444,e))}}function rs(e){return'href="'+wt(e)+'"'}function Nr(e){return'link[rel="stylesheet"]['+e+"]"}function Pp(e){return Ie({},e,{"data-precedence":e.precedence,precedence:null})}function Kx(e,a,l,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),La(a,"link",l),Ma(a),e.head.appendChild(a))}function gs(e){return'[src="'+wt(e)+'"]'}function Sr(e){return"script[async]"+e}function jm(e,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+wt(l.href)+'"]');if(n)return a.instance=n,Ma(n),n;var s=Ie({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ma(n),La(n,"style",s),oi(n,l.precedence,e),a.instance=n;case"stylesheet":s=rs(l.href);var r=e.querySelector(Nr(s));if(r)return a.state.loading|=4,a.instance=r,Ma(r),r;n=Pp(l),(s=kt.get(s))&&Vu(n,s),r=(e.ownerDocument||e).createElement("link"),Ma(r);var i=r;return i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),La(r,"link",n),a.state.loading|=4,oi(r,l.precedence,e),a.instance=r;case"script":return r=gs(l.src),(s=e.querySelector(Sr(r)))?(a.instance=s,Ma(s),s):(n=l,(s=kt.get(r))&&(n=Ie({},l),$u(n,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ma(s),La(s,"link",n),e.head.appendChild(s),a.instance=s);case"void":return null;default:throw Error(O(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(n=a.instance,a.state.loading|=4,oi(n,l.precedence,e));return a.instance}function oi(e,a,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,r=s,i=0;i<n.length;i++){var o=n[i];if(o.dataset.precedence===a)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(e,a.firstChild))}function Vu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function $u(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ci=null;function wm(e,a,l){if(ci===null){var n=new Map,s=ci=new Map;s.set(l,n)}else s=ci,n=s.get(l),n||(n=new Map,s.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),s=0;s<l.length;s++){var r=l[s];if(!(r[vr]||r[Da]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(a)||"";i=e+i;var o=n.get(i);o?o.push(r):n.set(i,[r])}}return n}function Nm(e,a,l){e=e.ownerDocument||e,e.head.insertBefore(l,a==="title"?e.querySelector("head > title"):null)}function Jx(e,a,l){if(l===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Zp(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Ix(e,a,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var s=rs(n.href),r=a.querySelector(Nr(s));if(r){a=r._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Hi.bind(e),a.then(e,e)),l.state.loading|=4,l.instance=r,Ma(r);return}r=a.ownerDocument||a,n=Pp(n),(s=kt.get(s))&&Vu(n,s),r=r.createElement("link"),Ma(r);var i=r;i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),La(r,"link",n),l.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,a),(a=l.state.preload)&&!(l.state.loading&3)&&(e.count++,l=Hi.bind(e),a.addEventListener("load",l),a.addEventListener("error",l))}}var hc=0;function e2(e,a){return e.stylesheets&&e.count===0&&di(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&di(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+a);0<e.imgBytes&&hc===0&&(hc=62500*Bx());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&di(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>hc?50:800)+a);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(s)}}:null}function Hi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)di(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oi=null;function di(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oi=new Map,a.forEach(a2,e),Oi=null,Hi.call(e))}function a2(e,a){if(!(a.state.loading&4)){var l=Oi.get(e);if(l)var n=l.get(null);else{l=new Map,Oi.set(e,l);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var i=s[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}s=a.instance,i=s.getAttribute("data-precedence"),r=l.get(i)||n,r===n&&l.set(null,s),l.set(i,s),this.count++,n=Hi.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),a.state.loading|=4}}var ir={$$typeof:el,Provider:null,Consumer:null,_currentValue:on,_currentValue2:on,_threadCount:0};function t2(e,a,l,n,s,r,i,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.hiddenUpdates=Lo(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Kp(e,a,l,n,s,r,i,o,c,d,m,f){return e=new t2(e,a,l,i,c,d,m,f,o),a=1,r===!0&&(a|=24),r=ot(3,null,null,a),e.current=r,r.stateNode=e,a=mu(),a.refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:n,isDehydrated:l,cache:a},fu(r),e}function Jp(e){return e?(e=$n,e):$n}function Ip(e,a,l,n,s,r){s=Jp(s),n.context===null?n.context=s:n.pendingContext=s,n=Ll(a),n.payload={element:l},r=r===void 0?null:r,r!==null&&(n.callback=r),l=Hl(e,n,a),l!==null&&(Ia(l,e,a),Os(l,e,a))}function Sm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<a?l:a}}function Uu(e,a){Sm(e,a),(e=e.alternate)&&Sm(e,a)}function ef(e){if(e.tag===13||e.tag===31){var a=wn(e,67108864);a!==null&&Ia(a,e,67108864),Uu(e,67108864)}}function zm(e){if(e.tag===13||e.tag===31){var a=ht();a=Jd(a);var l=wn(e,a);l!==null&&Ia(l,e,a),Uu(e,a)}}var Vi=!0;function l2(e,a,l,n){var s=oe.T;oe.T=null;var r=De.p;try{De.p=2,qu(e,a,l,n)}finally{De.p=r,oe.T=s}}function n2(e,a,l,n){var s=oe.T;oe.T=null;var r=De.p;try{De.p=8,qu(e,a,l,n)}finally{De.p=r,oe.T=s}}function qu(e,a,l,n){if(Vi){var s=gd(n);if(s===null)uc(e,a,n,$i,l),Cm(e,n);else if(r2(s,e,a,l,n))n.stopPropagation();else if(Cm(e,n),a&4&&-1<s2.indexOf(e)){for(;s!==null;){var r=us(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=an(r.pendingLanes);if(i!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var c=1<<31-mt(i);o.entanglements[1]|=c,i&=~c}Yt(r),!(Ee&6)&&(Ri=dt()+500,wr(0))}}break;case 31:case 13:o=wn(r,2),o!==null&&Ia(o,r,2),co(),Uu(r,2)}if(r=gd(n),r===null&&uc(e,a,n,$i,l),r===s)break;s=r}s!==null&&n.stopPropagation()}else uc(e,a,n,null,l)}}function gd(e){return e=tu(e),Yu(e)}var $i=null;function Yu(e){if($i=null,e=Bn(e),e!==null){var a=hr(e);if(a===null)e=null;else{var l=a.tag;if(l===13){if(e=yh(a),e!==null)return e;e=null}else if(l===31){if(e=jh(a),e!==null)return e;e=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return $i=e,null}function af(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wg()){case zh:return 2;case Ch:return 8;case fi:case Gg:return 32;case kh:return 268435456;default:return 32}default:return 32}}var vd=!1,$l=null,Ul=null,ql=null,or=new Map,cr=new Map,Nl=[],s2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cm(e,a){switch(e){case"focusin":case"focusout":$l=null;break;case"dragenter":case"dragleave":Ul=null;break;case"mouseover":case"mouseout":ql=null;break;case"pointerover":case"pointerout":or.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(a.pointerId)}}function Ss(e,a,l,n,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:a,domEventName:l,eventSystemFlags:n,nativeEvent:r,targetContainers:[s]},a!==null&&(a=us(a),a!==null&&ef(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,s!==null&&a.indexOf(s)===-1&&a.push(s),e)}function r2(e,a,l,n,s){switch(a){case"focusin":return $l=Ss($l,e,a,l,n,s),!0;case"dragenter":return Ul=Ss(Ul,e,a,l,n,s),!0;case"mouseover":return ql=Ss(ql,e,a,l,n,s),!0;case"pointerover":var r=s.pointerId;return or.set(r,Ss(or.get(r)||null,e,a,l,n,s)),!0;case"gotpointercapture":return r=s.pointerId,cr.set(r,Ss(cr.get(r)||null,e,a,l,n,s)),!0}return!1}function tf(e){var a=Bn(e.target);if(a!==null){var l=hr(a);if(l!==null){if(a=l.tag,a===13){if(a=yh(l),a!==null){e.blockedOn=a,d0(e.priority,function(){zm(l)});return}}else if(a===31){if(a=jh(l),a!==null){e.blockedOn=a,d0(e.priority,function(){zm(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var l=gd(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);_c=n,l.target.dispatchEvent(n),_c=null}else return a=us(l),a!==null&&ef(a),e.blockedOn=l,!1;a.shift()}return!0}function km(e,a,l){ui(e)&&l.delete(a)}function i2(){vd=!1,$l!==null&&ui($l)&&($l=null),Ul!==null&&ui(Ul)&&(Ul=null),ql!==null&&ui(ql)&&(ql=null),or.forEach(km),cr.forEach(km)}function Xr(e,a){e.blockedOn===a&&(e.blockedOn=null,vd||(vd=!0,za.unstable_scheduleCallback(za.unstable_NormalPriority,i2)))}var Qr=null;function Mm(e){Qr!==e&&(Qr=e,za.unstable_scheduleCallback(za.unstable_NormalPriority,function(){Qr===e&&(Qr=null);for(var a=0;a<e.length;a+=3){var l=e[a],n=e[a+1],s=e[a+2];if(typeof n!="function"){if(Yu(n||l)===null)continue;break}var r=us(l);r!==null&&(e.splice(a,3),a-=3,Kc(r,{pending:!0,data:s,method:l.method,action:n},n,s))}}))}function is(e){function a(c){return Xr(c,e)}$l!==null&&Xr($l,e),Ul!==null&&Xr(Ul,e),ql!==null&&Xr(ql,e),or.forEach(a),cr.forEach(a);for(var l=0;l<Nl.length;l++){var n=Nl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)tf(l),l.blockedOn===null&&Nl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var s=l[n],r=l[n+1],i=s[at]||null;if(typeof r=="function")i||Mm(l);else if(i){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,i=r[at]||null)o=i.formAction;else if(Yu(s)!==null)continue}else o=i.action;typeof o=="function"?l[n+1]=o:(l.splice(n,3),n-=3),Mm(l)}}}function lf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return s=i})},focusReset:"manual",scroll:"manual"})}function a(){s!==null&&(s(),s=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),s!==null&&(s(),s=null)}}}function Wu(e){this._internalRoot=e}ho.prototype.render=Wu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(O(409));var l=a.current,n=ht();Ip(l,n,e,a,null,null)};ho.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Ip(e.current,2,null,e,null,null),co(),a[ds]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var a=Eh();e={blockedOn:null,target:e,priority:a};for(var l=0;l<Nl.length&&a!==0&&a<Nl[l].priority;l++);Nl.splice(l,0,e),l===0&&tf(e)}};var Rm=xh.version;if(Rm!=="19.2.0")throw Error(O(527,Rm,"19.2.0"));De.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Hg(a),e=e!==null?wh(e):null,e=e===null?null:e.stateNode,e};var o2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:oe,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{pr=Fr.inject(o2),ut=Fr}catch{}}Pi.createRoot=function(e,a){if(!bh(e))throw Error(O(299));var l=!1,n="",s=F1,r=P1,i=Z1;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Kp(e,1,!1,null,null,l,n,null,s,r,i,lf),e[ds]=a.current,Ou(e),new Wu(a)};Pi.hydrateRoot=function(e,a,l){if(!bh(e))throw Error(O(299));var n=!1,s="",r=F1,i=P1,o=Z1,c=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(s=l.identifierPrefix),l.onUncaughtError!==void 0&&(r=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(c=l.formState)),a=Kp(e,1,!0,a,l??null,n,s,c,r,i,o,lf),a.context=Jp(null),l=a.current,n=ht(),n=Jd(n),s=Ll(n),s.callback=null,Hl(l,s,n),l=n,a.current.lanes=l,gr(a,l),Yt(a),e[ds]=a.current,Ou(e),new ho(a)};Pi.version="19.2.0";function nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf)}catch(e){console.error(e)}}nf(),mh.exports=Pi;var c2=mh.exports;const d2=th(c2);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},dr.apply(this,arguments)}var Tl;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tl||(Tl={}));const Tm="popstate";function u2(e){e===void 0&&(e={});function a(n,s){let{pathname:r,search:i,hash:o}=n.location;return xd("",{pathname:r,search:i,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function l(n,s){return typeof s=="string"?s:Ui(s)}return h2(a,l,null,e)}function ma(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function sf(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function m2(){return Math.random().toString(36).substr(2,8)}function Am(e,a){return{usr:e.state,key:e.key,idx:a}}function xd(e,a,l,n){return l===void 0&&(l=null),dr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?vs(a):a,{state:l,key:a&&a.key||n||m2()})}function Ui(e){let{pathname:a="/",search:l="",hash:n=""}=e;return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function vs(e){let a={};if(e){let l=e.indexOf("#");l>=0&&(a.hash=e.substr(l),e=e.substr(0,l));let n=e.indexOf("?");n>=0&&(a.search=e.substr(n),e=e.substr(0,n)),e&&(a.pathname=e)}return a}function h2(e,a,l,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:r=!1}=n,i=s.history,o=Tl.Pop,c=null,d=m();d==null&&(d=0,i.replaceState(dr({},i.state,{idx:d}),""));function m(){return(i.state||{idx:null}).idx}function f(){o=Tl.Pop;let w=m(),b=w==null?null:w-d;d=w,c&&c({action:o,location:j.location,delta:b})}function p(w,b){o=Tl.Push;let v=xd(j.location,w,b);d=m()+1;let h=Am(v,d),g=j.createHref(v);try{i.pushState(h,"",g)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;s.location.assign(g)}r&&c&&c({action:o,location:j.location,delta:1})}function x(w,b){o=Tl.Replace;let v=xd(j.location,w,b);d=m();let h=Am(v,d),g=j.createHref(v);i.replaceState(h,"",g),r&&c&&c({action:o,location:j.location,delta:0})}function y(w){let b=s.location.origin!=="null"?s.location.origin:s.location.href,v=typeof w=="string"?w:Ui(w);return v=v.replace(/ $/,"%20"),ma(b,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,b)}let j={get action(){return o},get location(){return e(s,i)},listen(w){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Tm,f),c=w,()=>{s.removeEventListener(Tm,f),c=null}},createHref(w){return a(s,w)},createURL:y,encodeLocation(w){let b=y(w);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:x,go(w){return i.go(w)}};return j}var Em;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Em||(Em={}));function p2(e,a,l){return l===void 0&&(l="/"),f2(e,a,l)}function f2(e,a,l,n){let s=typeof a=="string"?vs(a):a,r=os(s.pathname||"/",l);if(r==null)return null;let i=rf(e);g2(i);let o=null;for(let c=0;o==null&&c<i.length;++c){let d=k2(r);o=z2(i[c],d)}return o}function rf(e,a,l,n){a===void 0&&(a=[]),l===void 0&&(l=[]),n===void 0&&(n="");let s=(r,i,o)=>{let c={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};c.relativePath.startsWith("/")&&(ma(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Yl([n,c.relativePath]),m=l.concat(c);r.children&&r.children.length>0&&(ma(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),rf(r.children,a,m,d)),!(r.path==null&&!r.index)&&a.push({path:d,score:N2(d,r.index),routesMeta:m})};return e.forEach((r,i)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))s(r,i);else for(let c of of(r.path))s(r,i,c)}),a}function of(e){let a=e.split("/");if(a.length===0)return[];let[l,...n]=a,s=l.endsWith("?"),r=l.replace(/\?$/,"");if(n.length===0)return s?[r,""]:[r];let i=of(n.join("/")),o=[];return o.push(...i.map(c=>c===""?r:[r,c].join("/"))),s&&o.push(...i),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function g2(e){e.sort((a,l)=>a.score!==l.score?l.score-a.score:S2(a.routesMeta.map(n=>n.childrenIndex),l.routesMeta.map(n=>n.childrenIndex)))}const v2=/^:[\w-]+$/,x2=3,b2=2,y2=1,j2=10,w2=-2,Dm=e=>e==="*";function N2(e,a){let l=e.split("/"),n=l.length;return l.some(Dm)&&(n+=w2),a&&(n+=b2),l.filter(s=>!Dm(s)).reduce((s,r)=>s+(v2.test(r)?x2:r===""?y2:j2),n)}function S2(e,a){return e.length===a.length&&e.slice(0,-1).every((n,s)=>n===a[s])?e[e.length-1]-a[a.length-1]:0}function z2(e,a,l){let{routesMeta:n}=e,s={},r="/",i=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,m=r==="/"?a:a.slice(r.length)||"/",f=bd({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),p=c.route;if(!f)return null;Object.assign(s,f.params),i.push({params:s,pathname:Yl([r,f.pathname]),pathnameBase:A2(Yl([r,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(r=Yl([r,f.pathnameBase]))}return i}function bd(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,n]=C2(e.path,e.caseSensitive,e.end),s=a.match(l);if(!s)return null;let r=s[0],i=r.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:n.reduce((d,m,f)=>{let{paramName:p,isOptional:x}=m;if(p==="*"){let j=o[f]||"";i=r.slice(0,r.length-j.length).replace(/(.)\/+$/,"$1")}const y=o[f];return x&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:i,pattern:e}}function C2(e,a,l){a===void 0&&(a=!1),l===void 0&&(l=!0),sf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),n]}function k2(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return sf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function os(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,n=e.charAt(l);return n&&n!=="/"?null:e.slice(l)||"/"}function M2(e,a){a===void 0&&(a="/");let{pathname:l,search:n="",hash:s=""}=typeof e=="string"?vs(e):e;return{pathname:l?l.startsWith("/")?l:R2(l,a):a,search:E2(n),hash:D2(s)}}function R2(e,a){let l=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function pc(e,a,l,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T2(e){return e.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function cf(e,a){let l=T2(e);return a?l.map((n,s)=>s===l.length-1?n.pathname:n.pathnameBase):l.map(n=>n.pathnameBase)}function df(e,a,l,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=vs(e):(s=dr({},e),ma(!s.pathname||!s.pathname.includes("?"),pc("?","pathname","search",s)),ma(!s.pathname||!s.pathname.includes("#"),pc("#","pathname","hash",s)),ma(!s.search||!s.search.includes("#"),pc("#","search","hash",s)));let r=e===""||s.pathname==="",i=r?"/":s.pathname,o;if(i==null)o=l;else{let f=a.length-1;if(!n&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;s.pathname=p.join("/")}o=f>=0?a[f]:"/"}let c=M2(s,o),d=i&&i!=="/"&&i.endsWith("/"),m=(r||i===".")&&l.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const Yl=e=>e.join("/").replace(/\/\/+/g,"/"),A2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uf=["post","put","patch","delete"];new Set(uf);const _2=["get",...uf];new Set(_2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},ur.apply(this,arguments)}const po=u.createContext(null),mf=u.createContext(null),Kl=u.createContext(null),fo=u.createContext(null),Sn=u.createContext({outlet:null,matches:[],isDataRoute:!1}),hf=u.createContext(null);function L2(e,a){let{relative:l}=a===void 0?{}:a;zr()||ma(!1);let{basename:n,navigator:s}=u.useContext(Kl),{hash:r,pathname:i,search:o}=go(e,{relative:l}),c=i;return n!=="/"&&(c=i==="/"?n:Yl([n,i])),s.createHref({pathname:c,search:o,hash:r})}function zr(){return u.useContext(fo)!=null}function Jl(){return zr()||ma(!1),u.useContext(fo).location}function pf(e){u.useContext(Kl).static||u.useLayoutEffect(e)}function Dt(){let{isDataRoute:e}=u.useContext(Sn);return e?P2():H2()}function H2(){zr()||ma(!1);let e=u.useContext(po),{basename:a,future:l,navigator:n}=u.useContext(Kl),{matches:s}=u.useContext(Sn),{pathname:r}=Jl(),i=JSON.stringify(cf(s,l.v7_relativeSplatPath)),o=u.useRef(!1);return pf(()=>{o.current=!0}),u.useCallback(function(d,m){if(m===void 0&&(m={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let f=df(d,JSON.parse(i),r,m.relative==="path");e==null&&a!=="/"&&(f.pathname=f.pathname==="/"?a:Yl([a,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[a,n,i,r,e])}function go(e,a){let{relative:l}=a===void 0?{}:a,{future:n}=u.useContext(Kl),{matches:s}=u.useContext(Sn),{pathname:r}=Jl(),i=JSON.stringify(cf(s,n.v7_relativeSplatPath));return u.useMemo(()=>df(e,JSON.parse(i),r,l==="path"),[e,i,r,l])}function O2(e,a){return V2(e,a)}function V2(e,a,l,n){zr()||ma(!1);let{navigator:s}=u.useContext(Kl),{matches:r}=u.useContext(Sn),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=Jl(),m;if(a){var f;let w=typeof a=="string"?vs(a):a;c==="/"||(f=w.pathname)!=null&&f.startsWith(c)||ma(!1),m=w}else m=d;let p=m.pathname||"/",x=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=p2(e,{pathname:x}),j=W2(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Yl([c,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Yl([c,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),r,l,n);return a&&j?u.createElement(fo.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Tl.Pop}},j):j}function $2(){let e=F2(),a=B2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},a),l?u.createElement("pre",{style:s},l):null,null)}const U2=u.createElement($2,null);class q2 extends u.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){console.error("React Router caught the following error during render",a,l)}render(){return this.state.error!==void 0?u.createElement(Sn.Provider,{value:this.props.routeContext},u.createElement(hf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y2(e){let{routeContext:a,match:l,children:n}=e,s=u.useContext(po);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),u.createElement(Sn.Provider,{value:a},n)}function W2(e,a,l,n){var s;if(a===void 0&&(a=[]),l===void 0&&(l=null),n===void 0&&(n=null),e==null){var r;if(!l)return null;if(l.errors)e=l.matches;else if((r=n)!=null&&r.v7_partialHydration&&a.length===0&&!l.initialized&&l.matches.length>0)e=l.matches;else return null}let i=e,o=(s=l)==null?void 0:s.errors;if(o!=null){let m=i.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);m>=0||ma(!1),i=i.slice(0,Math.min(i.length,m+1))}let c=!1,d=-1;if(l&&n&&n.v7_partialHydration)for(let m=0;m<i.length;m++){let f=i[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=m),f.route.id){let{loaderData:p,errors:x}=l,y=f.route.loader&&p[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((m,f,p)=>{let x,y=!1,j=null,w=null;l&&(x=o&&f.route.id?o[f.route.id]:void 0,j=f.route.errorElement||U2,c&&(d<0&&p===0?(Z2("route-fallback"),y=!0,w=null):d===p&&(y=!0,w=f.route.hydrateFallbackElement||null)));let b=a.concat(i.slice(0,p+1)),v=()=>{let h;return x?h=j:y?h=w:f.route.Component?h=u.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,u.createElement(Y2,{match:f,routeContext:{outlet:m,matches:b,isDataRoute:l!=null},children:h})};return l&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?u.createElement(q2,{location:l.location,revalidation:l.revalidation,component:j,error:x,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):v()},null)}var ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ff||{}),gf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gf||{});function G2(e){let a=u.useContext(po);return a||ma(!1),a}function X2(e){let a=u.useContext(mf);return a||ma(!1),a}function Q2(e){let a=u.useContext(Sn);return a||ma(!1),a}function vf(e){let a=Q2(),l=a.matches[a.matches.length-1];return l.route.id||ma(!1),l.route.id}function F2(){var e;let a=u.useContext(hf),l=X2(),n=vf();return a!==void 0?a:(e=l.errors)==null?void 0:e[n]}function P2(){let{router:e}=G2(ff.UseNavigateStable),a=vf(gf.UseNavigateStable),l=u.useRef(!1);return pf(()=>{l.current=!0}),u.useCallback(function(s,r){r===void 0&&(r={}),l.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ur({fromRouteId:a},r)))},[e,a])}const Bm={};function Z2(e,a,l){Bm[e]||(Bm[e]=!0)}function K2(e,a){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ae(e){ma(!1)}function J2(e){let{basename:a="/",children:l=null,location:n,navigationType:s=Tl.Pop,navigator:r,static:i=!1,future:o}=e;zr()&&ma(!1);let c=a.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:r,static:i,future:ur({v7_relativeSplatPath:!1},o)}),[c,o,r,i]);typeof n=="string"&&(n=vs(n));let{pathname:m="/",search:f="",hash:p="",state:x=null,key:y="default"}=n,j=u.useMemo(()=>{let w=os(m,c);return w==null?null:{location:{pathname:w,search:f,hash:p,state:x,key:y},navigationType:s}},[c,m,f,p,x,y,s]);return j==null?null:u.createElement(Kl.Provider,{value:d},u.createElement(fo.Provider,{children:l,value:j}))}function I2(e){let{children:a,location:l}=e;return O2(yd(a),l)}new Promise(()=>{});function yd(e,a){a===void 0&&(a=[]);let l=[];return u.Children.forEach(e,(n,s)=>{if(!u.isValidElement(n))return;let r=[...a,s];if(n.type===u.Fragment){l.push.apply(l,yd(n.props.children,r));return}n.type!==ae&&ma(!1),!n.props.index||!n.props.children||ma(!1);let i={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=yd(n.props.children,r)),l.push(i)}),l}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},qi.apply(this,arguments)}function xf(e,a){if(e==null)return{};var l={},n=Object.keys(e),s,r;for(r=0;r<n.length;r++)s=n[r],!(a.indexOf(s)>=0)&&(l[s]=e[s]);return l}function eb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ab(e,a){return e.button===0&&(!a||a==="_self")&&!eb(e)}const tb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],nb="6";try{window.__reactRouterVersion=nb}catch{}const sb=u.createContext({isTransitioning:!1}),rb="startTransition",_m=wc[rb];function ib(e){let{basename:a,children:l,future:n,window:s}=e,r=u.useRef();r.current==null&&(r.current=u2({window:s,v5Compat:!0}));let i=r.current,[o,c]=u.useState({action:i.action,location:i.location}),{v7_startTransition:d}=n||{},m=u.useCallback(f=>{d&&_m?_m(()=>c(f)):c(f)},[c,d]);return u.useLayoutEffect(()=>i.listen(m),[i,m]),u.useEffect(()=>K2(n),[n]),u.createElement(J2,{basename:a,children:l,location:o.location,navigationType:o.action,navigator:i,future:n})}const ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Va=u.forwardRef(function(a,l){let{onClick:n,relative:s,reloadDocument:r,replace:i,state:o,target:c,to:d,preventScrollReset:m,viewTransition:f}=a,p=xf(a,tb),{basename:x}=u.useContext(Kl),y,j=!1;if(typeof d=="string"&&cb.test(d)&&(y=d,ob))try{let h=new URL(window.location.href),g=d.startsWith("//")?new URL(h.protocol+d):new URL(d),N=os(g.pathname,x);g.origin===h.origin&&N!=null?d=N+g.search+g.hash:j=!0}catch{}let w=L2(d,{relative:s}),b=ub(d,{replace:i,state:o,target:c,preventScrollReset:m,relative:s,viewTransition:f});function v(h){n&&n(h),h.defaultPrevented||b(h)}return u.createElement("a",qi({},p,{href:y||w,onClick:j||r?n:v,ref:l,target:c}))}),Lm=u.forwardRef(function(a,l){let{"aria-current":n="page",caseSensitive:s=!1,className:r="",end:i=!1,style:o,to:c,viewTransition:d,children:m}=a,f=xf(a,lb),p=go(c,{relative:f.relative}),x=Jl(),y=u.useContext(mf),{navigator:j,basename:w}=u.useContext(Kl),b=y!=null&&mb(p)&&d===!0,v=j.encodeLocation?j.encodeLocation(p).pathname:p.pathname,h=x.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;s||(h=h.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase()),g&&w&&(g=os(g,w)||g);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let T=h===v||!i&&h.startsWith(v)&&h.charAt(N)==="/",z=g!=null&&(g===v||!i&&g.startsWith(v)&&g.charAt(v.length)==="/"),C={isActive:T,isPending:z,isTransitioning:b},L=T?n:void 0,H;typeof r=="function"?H=r(C):H=[r,T?"active":null,z?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let M=typeof o=="function"?o(C):o;return u.createElement(Va,qi({},f,{"aria-current":L,className:H,ref:l,style:M,to:c,viewTransition:d}),typeof m=="function"?m(C):m)});var jd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jd||(jd={}));var Hm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hm||(Hm={}));function db(e){let a=u.useContext(po);return a||ma(!1),a}function ub(e,a){let{target:l,replace:n,state:s,preventScrollReset:r,relative:i,viewTransition:o}=a===void 0?{}:a,c=Dt(),d=Jl(),m=go(e,{relative:i});return u.useCallback(f=>{if(ab(f,l)){f.preventDefault();let p=n!==void 0?n:Ui(d)===Ui(m);c(e,{replace:p,state:s,preventScrollReset:r,relative:i,viewTransition:o})}},[d,c,m,n,s,l,e,r,i,o])}function mb(e,a){a===void 0&&(a={});let l=u.useContext(sb);l==null&&ma(!1);let{basename:n}=db(jd.useViewTransitionState),s=go(e,{relative:a.relative});if(!l.isTransitioning)return!1;let r=os(l.currentLocation.pathname,n)||l.currentLocation.pathname,i=os(l.nextLocation.pathname,n)||l.nextLocation.pathname;return bd(s.pathname,i)!=null||bd(s.pathname,r)!=null}const k=({name:e,size:a="md",color:l,className:n="",onClick:s,style:r={}})=>{const o={xs:12,sm:16,md:20,lg:24,xl:32}[a],c={home:t.jsx("path",{fillRule:"evenodd",d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",clipRule:"evenodd"}),user:t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),settings:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),search:t.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}),menu:t.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),close:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),check:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}),"arrow-right":t.jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}),"arrow-left":t.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}),"arrow-up":t.jsx("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}),"arrow-down":t.jsx("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}),plus:t.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}),minus:t.jsx("path",{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),edit:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),delete:t.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}),info:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}),warning:t.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}),error:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}),success:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),download:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}),upload:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}),calendar:t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),clock:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}),mail:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),phone:t.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}),location:t.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}),star:t.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}),heart:t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),bookmark:t.jsx("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}),share:t.jsx("path",{d:"M15 8a3 3 0 11-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}),bell:t.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}),lock:t.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}),unlock:t.jsx("path",{d:"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}),eye:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),t.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),"eye-off":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),t.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}),refresh:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),filter:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",clipRule:"evenodd"}),sort:t.jsx("path",{d:"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}),grid:t.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"}),list:t.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),play:t.jsx("path",{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"}),pause:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}),stop:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"}),"skip-forward":t.jsx("path",{d:"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}),"skip-back":t.jsx("path",{d:"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}),volume:t.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"}),mute:t.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",clipRule:"evenodd"}),camera:t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),image:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}),file:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"}),folder:t.jsx("path",{d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}),link:t.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",clipRule:"evenodd"}),"external-link":t.jsx("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),dashboard:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"}),t.jsx("path",{d:"M3 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z"}),t.jsx("path",{d:"M11 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4z"}),t.jsx("path",{d:"M11 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"})]}),"chevron-up":t.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"}),"chevron-down":t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}),"chevron-left":t.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}),"chevron-right":t.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}),users:t.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}),"user-plus":t.jsx(t.Fragment,{children:t.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"user-shield":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),t.jsx("path",{d:"M15 11h2v2l-2 4-2-4v-2h2z"})]}),"user-cog":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}),t.jsx("circle",{cx:"16",cy:"13",r:"1"}),t.jsx("path",{d:"M16 11v1m0 2v1m1.5-2.5l-.866.5m-1.268 0l-.866-.5m0 2l.866-.5m1.268 0l.866.5",stroke:"currentColor",strokeWidth:"0.5",fill:"none"})]}),"user-group":t.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}),assignments:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})]}),"people-group":t.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}),"users-line":t.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}),"network-wired":t.jsx(t.Fragment,{children:t.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})}),building:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),"building-office":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),department:t.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}),organization:t.jsx("path",{d:"M10 3a1 1 0 011 1v5h3a1 1 0 110 2h-3v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h3V4a1 1 0 011-1z"}),sitemap:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L6 8.414l3.293 3.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"diagram-project":t.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 10-2 0v3a1 1 0 102 0v-3zm-5-3a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z",clipRule:"evenodd"}),shield:t.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"shield-check":t.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),key:t.jsx("path",{fillRule:"evenodd",d:"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",clipRule:"evenodd"}),hierarchy:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"}),"table-cells":t.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"}),table:t.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"}),clipboard:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),t.jsx("path",{fillRule:"evenodd",d:"M6 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2h-1a1 1 0 110-2h1a4 4 0 014 4v10a4 4 0 01-4 4H6a4 4 0 01-4-4V5a4 4 0 014-4h1a1 1 0 010 2H6z",clipRule:"evenodd"})]}),storage:t.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 6a1 1 0 100 2h10a1 1 0 100-2H5z",clipRule:"evenodd"}),database:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}),t.jsx("path",{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}),t.jsx("path",{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"})]}),cog:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),project:t.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",clipRule:"evenodd"}),code:t.jsx("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}),briefcase:t.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),cube:t.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"}),product:t.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"}),chart:t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),analytics:t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),"chart-bar":t.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}),"currency-yen":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h2.535l.465.78V13H8a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-1.22l.465-.78H15a1 1 0 100-2h-.633l1.49-2.485a1 1 0 10-1.714-1.03L12 8.763 9.858 5.485z",clipRule:"evenodd"}),price:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),notification:t.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}),"check-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),puzzle:t.jsx("path",{d:"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"}),palette:t.jsx("path",{fillRule:"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0v-1a1 1 0 011-1h1a1 1 0 100-2H9a1 1 0 01-1-1V9a1 1 0 012 0v1h.5a2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2H4zm1 5a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM8 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),"device-mobile":t.jsx("path",{fillRule:"evenodd",d:"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),envelope:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),comment:t.jsx("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"}),comments:t.jsx("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V5zm8 0H4v10.586L6.586 13H10V5z",clipRule:"evenodd"}),message:t.jsx("path",{d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}),inbox:t.jsx("path",{fillRule:"evenodd",d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",clipRule:"evenodd"}),"paper-plane":t.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}),video:t.jsx("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}),music:t.jsx("path",{d:"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}),photo:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}),film:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",clipRule:"evenodd"}),microphone:t.jsx("path",{fillRule:"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",clipRule:"evenodd"}),document:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),"folder-open":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",clipRule:"evenodd"}),t.jsx("path",{d:"M6 12a1 1 0 00-1 1v5a1 1 0 001 1h11.828a2 2 0 001.414-.586l.828-.828A2 2 0 0019.656 15H8a1 1 0 01-1-1v-2H6z"})]}),"shopping-cart":t.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}),"credit-card":t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),t.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),tag:t.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),tags:t.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),cart:t.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"}),wallet:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),t.jsx("path",{fillRule:"evenodd",d:"M2 9v5a2 2 0 002 2h12a2 2 0 002-2V9H2zm11 3a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",clipRule:"evenodd"})]}),receipt:t.jsx("path",{d:"M5 2a1 1 0 00-1 1v14l3.5-2 3.5 2 3.5-2 3.5 2V3a1 1 0 00-1-1H5zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H8z"}),"share-alt":t.jsx("path",{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}),"thumbs-up":t.jsx("path",{d:"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"}),"thumbs-down":t.jsx("path",{d:"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"}),flag:t.jsx("path",{fillRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),retweet:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),"calendar-alt":t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),"calendar-check":t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm7.707 7.707a1 1 0 00-1.414-1.414L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),stopwatch:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}),hourglass:t.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"}),history:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),map:t.jsx("path",{fillRule:"evenodd",d:"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 2.293A1 1 0 0018 3v10a1 1 0 01-.293.707L14 17.414V4.586l3.707-3.707z",clipRule:"evenodd"}),"map-marker":t.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"}),compass:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",clipRule:"evenodd"}),globe:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",clipRule:"evenodd"}),navigation:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z",clipRule:"evenodd"}),sun:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}),moon:t.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}),cloud:t.jsx("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}),"cloud-rain":t.jsx("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8zM8 17a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),bolt:t.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"}),laptop:t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}),desktop:t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}),tablet:t.jsx("path",{fillRule:"evenodd",d:"M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 14V4h10v12H5z",clipRule:"evenodd"}),"mobile-alt":t.jsx("path",{fillRule:"evenodd",d:"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),keyboard:t.jsx("path",{fillRule:"evenodd",d:"M5 5a3 3 0 00-3 3v4a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3H5zM6 7h2v2H6V7zm3 0h2v2H9V7zm5 0h-2v2h2V7zm0 3h-2v2h2v-2zm-3 0H9v2h2v-2zM8 10H6v2h2v-2z",clipRule:"evenodd"}),mouse:t.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v8a4 4 0 108 0V6a4 4 0 00-4-4zM9 6a1 1 0 012 0v3a1 1 0 11-2 0V6z",clipRule:"evenodd"}),print:t.jsx("path",{fillRule:"evenodd",d:"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",clipRule:"evenodd"}),wifi:t.jsx("path",{fillRule:"evenodd",d:"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),bluetooth:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v5.586l2.707-2.707a1 1 0 011.414 1.414L12.414 10l2.707 2.707a1 1 0 01-1.414 1.414L11 11.414V17a1 1 0 11-2 0v-5.586L6.293 14.121a1 1 0 01-1.414-1.414L7.586 10 4.879 7.293a1 1 0 011.414-1.414L9 8.586V3a1 1 0 011-1z",clipRule:"evenodd"}),sliders:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"}),"toggle-on":t.jsx("path",{d:"M5 3a5 5 0 000 10h10a5 5 0 000-10H5zm0 2a3 3 0 100 6 3 3 0 000-6z"}),"toggle-off":t.jsx("path",{d:"M15 3a5 5 0 010 10H5A5 5 0 015 3h10zm0 2a3 3 0 100 6 3 3 0 000-6z"}),bars:t.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),ellipsis:t.jsx("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}),"ellipsis-v":t.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}),expand:t.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",clipRule:"evenodd"}),compress:t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}),"check-double":t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0zM12.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}),times:t.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),exclamation:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}),question:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),"minus-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),"plus-circle":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"}),spinner:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z",clipRule:"evenodd"}),"arrow-circle-right":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",clipRule:"evenodd"}),"arrow-circle-left":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",clipRule:"evenodd"}),"arrow-circle-up":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",clipRule:"evenodd"}),"arrow-circle-down":t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",clipRule:"evenodd"}),undo:t.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z",clipRule:"evenodd"}),redo:t.jsx("path",{fillRule:"evenodd",d:"M16 2a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 110-2h3.001A5.002 5.002 0 005.999 8.333 1 1 0 014.114 7.667 7.002 7.002 0 0115.899 5.101V3a1 1 0 011-1z",clipRule:"evenodd"}),"building-user":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",clipRule:"evenodd"}),"clipboard-list":t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z",clipRule:"evenodd"})]}),tasks:t.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}),"file-contract":t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"}),handshake:t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),"chart-line":t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L6 8.414l3.293 3.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}),"chart-pie":t.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),book:t.jsx("path",{d:"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}),"graduation-cap":t.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"}),"bookmark-alt":t.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",clipRule:"evenodd"}),pencil:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),pen:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),"heart-pulse":t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}),t.jsx("path",{d:"M7 10h2l1-2 1 4 1-2h2",stroke:"white",strokeWidth:"1.5",fill:"none"})]}),hospital:t.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm5 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V9a1 1 0 00-1-1zm2-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V9a1 1 0 00-1-1zm-4 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V15a1 1 0 00-1-1zm2-3a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v.01a1 1 0 102 0V15a1 1 0 00-1-1z",clipRule:"evenodd"}),pills:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414l-3 3a1 1 0 001.415 1.414l3-3zM10 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}),syringe:t.jsx("path",{fillRule:"evenodd",d:"M17.414 2.586a2 2 0 00-2.828 0L13 4.172V3a1 1 0 00-2 0v1.172l-1.586-1.586a1 1 0 00-1.414 1.414L9.586 5.758 6.343 9l-1.415 1.414a1 1 0 101.415 1.415L7.758 10.243 11 7l1.586 1.586a1 1 0 001.414-1.414L12.414 5.586 14 4a.5.5 0 01.707 0l2.707 2.707a.5.5 0 010 .707L15 9.828V11a1 1 0 102 0V9.828l1.586-1.586a2 2 0 000-2.828l-1.172-1.172z",clipRule:"evenodd"}),stethoscope:t.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a4 4 0 004 4h.586l-.293.293a1 1 0 001.414 1.414l2-2a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 1.414l.293.293H7a2 2 0 01-2-2V5a1 1 0 000-2h-.5A1.5 1.5 0 013 3zm14.5 4a2.5 2.5 0 00-2.5 2.5v2a2.5 2.5 0 005 0v-2a2.5 2.5 0 00-2.5-2.5z",clipRule:"evenodd"}),car:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),t.jsx("path",{fillRule:"evenodd",d:"M5.172 6.172A4 4 0 018 5h4a4 4 0 012.828 1.172l2.586 2.586A2 2 0 0118 10.414V14a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a2 2 0 01-2-2v-3.586a2 2 0 01.586-1.414l2.586-2.586zM8 7a2 2 0 00-1.414.586L4 10.172V13h12v-2.828l-2.586-2.586A2 2 0 0012 7H8z",clipRule:"evenodd"})]}),plane:t.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}),train:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm4 12a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zM4 9h12V5H4v4z",clipRule:"evenodd"}),ship:t.jsx("path",{d:"M4 10l6-8 6 8h1l-1 8H4l-1-8h1zm2 1l1 6h6l1-6H6z"}),bicycle:t.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 104 0V7a2 2 0 00-2-2zm12 0a2 2 0 00-2 2v8a2 2 0 104 0V7a2 2 0 00-2-2zM8.5 9L10 6l1.5 3H14v2h-2.5L10 14 8.5 11H6V9h2.5z",clipRule:"evenodd"}),truck:t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),t.jsx("path",{fillRule:"evenodd",d:"M2 4a2 2 0 012-2h6a2 2 0 012 2v9h1.5a.5.5 0 00.5-.5V9l3 3v2.5a.5.5 0 00.5.5H17v1a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a2 2 0 01-2-2V4zm8 9V4H4v9h6z",clipRule:"evenodd"})]}),coffee:t.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4zm0 6a2 2 0 000 4h12a2 2 0 100-4H4zm0 6a2 2 0 000 4h12a2 2 0 100-4H4z",clipRule:"evenodd"}),pizza:t.jsx("path",{d:"M10 2L2 7l8 11 8-11-8-5zM8.5 8.5L10 6l1.5 2.5h2L10 13l-3.5-4.5h2z"}),utensils:t.jsx("path",{d:"M3 1a1 1 0 000 2v10a2 2 0 104 0V3a1 1 0 100-2H3zM14 3a1 1 0 011 1v9a1 1 0 11-2 0V4a1 1 0 011-1zM14 1a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1z"}),"wine-glass":t.jsx("path",{fillRule:"evenodd",d:"M6.5 2a1 1 0 000 2H7v.5A4.5 4.5 0 009 8.973V14H6a1 1 0 100 2h8a1 1 0 100-2h-3V8.973A4.5 4.5 0 0013 4.5V4h.5a1 1 0 100-2h-7z",clipRule:"evenodd"}),gamepad:t.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}),dice:t.jsx("path",{d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0 1 1 0 002 0zM7 8a1 1 0 11-2 0 1 1 0 012 0zm5 3a1 1 0 10-2 0 1 1 0 002 0zM8 13a1 1 0 11-2 0 1 1 0 012 0zm6-1a1 1 0 10-2 0 1 1 0 002 0z"}),trophy:t.jsx("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}),medal:t.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"}),crown:t.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42A1 1 0 0117 14H3a1 1 0 01-.952-1.069l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 012 0z",clipRule:"evenodd"}),wrench:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),hammer:t.jsx("path",{d:"M6 2l1.5 1.5L9 2l4 4-2 2 4 4-2 2-4-4-2 2-4-4 2-2 1.5 1.5L6 2z"}),screwdriver:t.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}),tools:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}),cogs:t.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})};return t.jsx("svg",{className:`icon icon--${e} icon--${a} ${n}`,width:o,height:o,viewBox:"0 0 20 20",fill:l||"currentColor",onClick:s,style:{cursor:s?"pointer":"default",...r},"aria-hidden":"true",children:c[e]||c.info})},hb=()=>t.jsxs("div",{className:"pages-container",children:[t.jsxs("div",{className:"pages-header",children:[t.jsx("h1",{className:"pages-title",children:"汎用画面テンプレート"}),t.jsx("p",{className:"pages-subtitle",children:"データ駆動型の画面を素早く構築できる汎用テンプレート集"})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)",paddingBottom:"var(--spacing-2)",borderBottom:"2px solid var(--color-neutral-400)"},children:"構成要素（基本パーツ）"}),t.jsxs("div",{className:"pages-grid",children:[t.jsxs(Va,{to:"/buttons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"plus-circle",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ボタン"}),t.jsx("p",{className:"page-card-description",children:"様々なスタイルとサイズのボタンコンポーネント"})]}),t.jsxs(Va,{to:"/forms",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"edit",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"フォーム"}),t.jsx("p",{className:"page-card-description",children:"入力フィールド、セレクト、チェックボックスなど"})]}),t.jsxs(Va,{to:"/messages",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"comment",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"メッセージ"}),t.jsx("p",{className:"page-card-description",children:"アラート、通知、モーダルなどのメッセージコンポーネント"})]}),t.jsxs(Va,{to:"/tables",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"table",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"テーブル"}),t.jsx("p",{className:"page-card-description",children:"データ表示用のテーブルコンポーネント"})]}),t.jsxs(Va,{to:"/navigation",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"menu",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-card-description",children:"タブ、ブレッドクラム、ページネーションなど"})]}),t.jsxs(Va,{to:"/layout",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"grid",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"レイアウト"}),t.jsx("p",{className:"page-card-description",children:"カード、グリッド、サイドバーなどのレイアウトコンポーネント"})]}),t.jsxs(Va,{to:"/icons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"star",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"アイコン"}),t.jsx("p",{className:"page-card-description",children:"200個以上のSVGアイコンライブラリ"})]}),t.jsxs(Va,{to:"/components",className:"page-card",style:{background:"var(--color-neutral-50)",borderColor:"var(--color-neutral-300)"},children:[t.jsx("div",{className:"page-card-icon",style:{background:"var(--color-neutral-200)"},children:t.jsx(k,{name:"cube",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"すべての構成要素を見る"}),t.jsx("p",{className:"page-card-description",children:"基本パーツの一覧ページへ移動"})]})]})]})]}),pb=()=>t.jsxs("div",{className:"pages-container",children:[t.jsxs("div",{className:"pages-header",children:[t.jsx("h1",{className:"pages-title",children:"構成要素 - 基本パーツカタログ"}),t.jsx("p",{className:"pages-subtitle",children:"汎用テンプレートで使用される基本的なUIコンポーネント"})]}),t.jsxs("div",{className:"pages-grid",children:[t.jsxs(Va,{to:"/buttons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"plus-circle",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ボタン"}),t.jsx("p",{className:"page-card-description",children:"様々なスタイルとサイズのボタンコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Primary"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Secondary"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Danger"})]})]}),t.jsxs(Va,{to:"/forms",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"edit",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"フォーム"}),t.jsx("p",{className:"page-card-description",children:"入力フィールド、セレクト、チェックボックスなど"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Input"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Select"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Checkbox"})]})]}),t.jsxs(Va,{to:"/messages",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"comment",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"メッセージ"}),t.jsx("p",{className:"page-card-description",children:"アラート、通知、モーダルなどのメッセージコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Alert"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Modal"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Toast"})]})]}),t.jsxs(Va,{to:"/tables",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"table",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"テーブル"}),t.jsx("p",{className:"page-card-description",children:"データ表示用のテーブルコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"DataTable"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Pagination"})]})]}),t.jsxs(Va,{to:"/navigation",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"menu",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-card-description",children:"タブ、ブレッドクラム、ページネーションなど"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Tab"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Breadcrumb"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Dropdown"})]})]}),t.jsxs(Va,{to:"/layout",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"grid",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"レイアウト"}),t.jsx("p",{className:"page-card-description",children:"カード、グリッド、サイドバーなどのレイアウトコンポーネント"}),t.jsxs("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:[t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Card"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Grid"}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"Sidebar"})]})]}),t.jsxs(Va,{to:"/icons",className:"page-card",children:[t.jsx("div",{className:"page-card-icon",children:t.jsx(k,{name:"star",size:"lg"})}),t.jsx("h2",{className:"page-card-title",children:"アイコン"}),t.jsx("p",{className:"page-card-description",children:"200個以上のSVGアイコンライブラリ"}),t.jsx("div",{style:{marginTop:"var(--spacing-3)",display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:t.jsx("span",{style:{fontSize:"var(--font-size-xs)",padding:"var(--spacing-1) var(--spacing-2)",background:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",color:"var(--color-neutral-700)"},children:"200+ Icons"})})]})]})]}),fb=({className:e="",disabled:a,children:l,dusk:n,...s})=>{const r=["primary-btn",e].filter(Boolean).join(" ");return t.jsx("button",{...s,className:r,disabled:a,"data-dusk":n,children:l})},Al=ee.memo(fb);function Oa({type:e="button",className:a="",disabled:l,children:n,...s}){return t.jsx("button",{...s,type:e,className:`inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-25 ${l&&"opacity-25"} `+a,style:{borderRadius:"var(--radius-md)",...s.style},disabled:l,children:n})}function Yi({className:e="",disabled:a,children:l,...n}){return t.jsx("button",{...n,className:`inline-flex items-center border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${a&&"opacity-25"} `+e,style:{borderRadius:"var(--radius-md)",...n.style},disabled:a,children:l})}const gb=()=>{const[e,a]=u.useState(!1),l=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return t.jsxs("div",{className:"buttons-page",children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"ボタンコンポーネント"}),t.jsx("p",{className:"page-description",children:"統一されたボタンコンポーネント群。 プライマリ、セカンダリ、デンジャーの3つのバリエーションを提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ボタンコンポーネント"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton"}),t.jsx("p",{className:"component-description",children:"メインアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Al,{onClick:()=>alert("保存処理を実行します"),children:"保存する"})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton onClick={handleSave}>
  保存する
</PrimaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SecondaryButton"}),t.jsx("p",{className:"component-description",children:"サブアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Oa,{onClick:()=>alert("キャンセル処理を実行します"),children:"キャンセル"})}),t.jsx("div",{className:"code-snippet",children:`<SecondaryButton onClick={handleCancel}>
  キャンセル
</SecondaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DangerButton"}),t.jsx("p",{className:"component-description",children:"危険なアクション用ボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Yi,{onClick:()=>confirm("本当に削除しますか？"),children:"削除する"})}),t.jsx("div",{className:"code-snippet",children:`<DangerButton onClick={handleDelete}>
  削除する
</DangerButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton (disabled)"}),t.jsx("p",{className:"component-description",children:"無効状態のボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Al,{disabled:!0,children:"無効なボタン"})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton disabled>
  無効なボタン
</PrimaryButton>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PrimaryButton (processing)"}),t.jsx("p",{className:"component-description",children:"処理中状態のボタン"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Al,{disabled:!0,onClick:l,children:"処理中..."})}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton disabled>
  処理中...
</PrimaryButton>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"アイコン付きボタン例"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"アイコン付きボタンの使用例"}),t.jsx("p",{className:"component-description",children:"ボタンにアイコンを組み合わせた実用的な例"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs(Al,{children:[t.jsx(k,{name:"check",className:"w-4 h-4 inline mr-2"}),"保存"]}),t.jsxs(Oa,{children:[t.jsx(k,{name:"close",className:"w-4 h-4 inline mr-2"}),"キャンセル"]}),t.jsxs(Yi,{children:[t.jsx(k,{name:"delete",className:"w-4 h-4 inline mr-2"}),"削除"]})]}),t.jsx("div",{className:"code-snippet",children:`<PrimaryButton onClick={handleSave}>
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
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"PrimaryButtonは1ページに1つまでの使用を推奨します"}),t.jsx("li",{children:"DangerButtonは削除や取り消し不可能なアクションに使用してください"}),t.jsx("li",{children:"SecondaryButtonは補助的なアクションに適しています"}),t.jsx("li",{children:"disabledプロパティでボタンを無効化できます"}),t.jsx("li",{children:"アイコンと組み合わせることでより直感的なUIを作成できます"})]})})]})]})},vb=({label:e,type:a="text",name:l,value:n="",onChange:s,placeholder:r,required:i=!1,disabled:o=!1,error:c="",helper:d="",icon:m=null,size:f="md",fullWidth:p=!1,className:x="",id:y,borderColor:j,...w})=>{const[b,v]=u.useState(!1),[h,g]=u.useState(!1),N=y||`input-${l}`,T=a==="password"&&b?"text":a,z=["form-input",`form-input--${f}`,c&&"form-input--error",p&&"form-input--full-width",m&&"form-input--with-icon",a==="password"&&"form-input--password",x].filter(Boolean).join(" "),C=["form-group",p&&"form-group--full-width"].filter(Boolean).join(" ");return t.jsxs("div",{className:C,children:[e&&t.jsx("label",{htmlFor:N,className:`form-label ${i?"form-label--required":""}`,children:e}),t.jsxs("div",{className:"form-input-wrapper",children:[m&&t.jsx("span",{className:"form-input__icon",children:m}),t.jsx("input",{id:N,type:T,name:l,value:n,onChange:s,placeholder:r,disabled:o,className:z,style:j?{borderColor:j}:void 0,onFocus:()=>g(!0),onBlur:()=>g(!1),"aria-invalid":!!c,"aria-describedby":c?`${N}-error`:d?`${N}-helper`:void 0,...w}),a==="password"&&t.jsx("button",{type:"button",className:"form-input__toggle-password",onClick:()=>v(!b),"aria-label":b?"パスワードを非表示":"パスワードを表示",tabIndex:-1,children:t.jsx(k,{name:b?"eye-off":"eye",style:{width:"18px",height:"18px"}})})]}),c&&t.jsxs("div",{id:`${N}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),c]}),d&&!c&&t.jsx("div",{id:`${N}-helper`,className:"form-helper",children:d})]})},xb=({label:e,name:a,value:l="",onChange:n,placeholder:s,required:r=!1,disabled:i=!1,error:o="",helper:c="",rows:d=4,fullWidth:m=!1,className:f="",id:p,...x})=>{const y=p||`textarea-${a}`,j=["form-textarea",o&&"form-textarea--error",m&&"form-textarea--full-width",f].filter(Boolean).join(" ");return t.jsxs("div",{className:`form-group ${m?"form-group--full-width":""}`,children:[e&&t.jsx("label",{htmlFor:y,className:`form-label ${r?"form-label--required":""}`,children:e}),t.jsx("textarea",{id:y,name:a,value:l,onChange:n,placeholder:s,disabled:i,rows:d,className:j,"aria-invalid":!!o,"aria-describedby":o?`${y}-error`:c?`${y}-helper`:void 0,...x}),o&&t.jsxs("div",{id:`${y}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),o]}),c&&!o&&t.jsx("div",{id:`${y}-helper`,className:"form-helper",children:c})]})},bb=({label:e,name:a,value:l="",onChange:n,options:s=[],placeholder:r="選択してください",required:i=!1,disabled:o=!1,error:c="",helper:d="",fullWidth:m=!1,className:f="",id:p,...x})=>{const y=p||`select-${a}`,j=["form-select",c&&"form-select--error",m&&"form-select--full-width",f].filter(Boolean).join(" ");return t.jsxs("div",{className:`form-group ${m?"form-group--full-width":""}`,children:[e&&t.jsx("label",{htmlFor:y,className:`form-label ${i?"form-label--required":""}`,children:e}),t.jsxs("select",{id:y,name:a,value:l,onChange:n,disabled:o,className:j,"aria-invalid":!!c,"aria-describedby":c?`${y}-error`:d?`${y}-helper`:void 0,...x,children:[t.jsx("option",{value:"",children:r}),s.map(w=>t.jsx("option",{value:w.value,children:w.label},w.value))]}),c&&t.jsxs("div",{id:`${y}-error`,className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),c]}),d&&!c&&t.jsx("div",{id:`${y}-helper`,className:"form-helper",children:d})]})},We=ee.memo(vb);function Ot({className:e="",...a}){return t.jsx("input",{...a,type:"checkbox",style:{borderColor:"rgb(209, 213, 219)",borderRadius:"4px",...a.style||{}},className:"text-indigo-600 shadow-sm focus:ring-indigo-500 "+e})}const bf=({label:e,name:a,value:l=[],options:n=[],onChange:s,onBlur:r,placeholder:i="選択してください",error:o,helper:c,disabled:d=!1,required:m=!1,className:f="",fullWidth:p=!0})=>{const[x,y]=u.useState(!1),j=u.useRef(null);u.useEffect(()=>{const h=g=>{j.current&&!j.current.contains(g.target)&&(y(!1),r&&r())};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[r]);const w=h=>{if(d)return;const g=l.includes(h)?l.filter(N=>N!==h):[...l,h];s(g)},b=()=>{d||y(!x)},v=()=>l.length===0?i:n.filter(g=>l.includes(g.value)).map(g=>g.label).join(", ");return t.jsxs("div",{className:`form-group ${p?"form-group--full":""} ${f}`,children:[e&&t.jsx("label",{htmlFor:a,className:`form-label ${m?"form-label--required":""}`,children:e}),t.jsxs("div",{ref:j,className:`select-box ${x?"select-box--open":""} ${o?"select-box--error":""} ${d?"select-box--disabled":""}`,children:[t.jsxs("div",{className:"select-box__trigger",onClick:b,role:"button","aria-haspopup":"listbox","aria-expanded":x,"aria-label":e,tabIndex:d?-1:0,onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),b())},children:[t.jsx("span",{className:"select-box__value",children:v()}),t.jsx(k,{name:x?"chevron-up":"chevron-down",className:"select-box__icon"})]}),x&&t.jsx("div",{className:"select-box__dropdown",role:"listbox",children:n.map(h=>{const g=l.includes(h.value);return t.jsxs("div",{className:`select-box__option ${g?"select-box__option--selected":""}`,onClick:()=>w(h.value),role:"option","aria-selected":g,children:[t.jsx("input",{type:"checkbox",checked:g,onChange:()=>{},tabIndex:-1,className:"select-box__checkbox"}),t.jsx("span",{className:"select-box__label",children:h.label})]},h.value)})})]}),c&&!o&&t.jsx("div",{className:"form-helper",children:c}),o&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),o]}),t.jsx("style",{children:`
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
      `})]})},yb=()=>{var e0,a0;const[e,a]=u.useState({name:"",email:"",password:"",message:"",prefecture:"",gender:"",priority:"",notifications:!1,darkMode:!1,agreeToTerms:!1,newsletter:!1}),[l,n]=u.useState({}),[s,r]=u.useState(""),[i,o]=u.useState({status:"all",category:"all"}),[c,d]=u.useState(!0),[m,f]=u.useState(50),[p,x]=u.useState([20,80]),[y,j]=u.useState(["react","javascript"]),[w,b]=u.useState(["react","javascript","typescript","nodejs","css"]),[v,h]=u.useState(""),[g,N]=u.useState([]),[T,z]=u.useState(""),[C,L]=u.useState(["tokyo","remote"]),H=()=>{const q={};return e.name.trim()||(q.name="お名前を入力してください"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(q.email="有効なメールアドレスを入力してください"):q.email="メールアドレスを入力してください",e.password?e.password.length<8&&(q.password="パスワードは8文字以上で入力してください"):q.password="パスワードを入力してください",J.trim()||(q.skills="スキルを入力してください"),v||(q.startDate="開始日を選択してください"),g.length===0&&(q.files="ファイルを選択してください"),T.trim()?T.length>200&&(q.description="詳細説明は200文字以内で入力してください"):q.description="詳細説明を入力してください",e.gender||(q.gender="性別を選択してください"),n(q),Object.keys(q).length===0},[M,B]=u.useState(0),[_,Y]=u.useState(0),[G,A]=u.useState(0),[R,E]=u.useState(""),[U,V]=u.useState([]),[J,P]=u.useState(""),[Z,F]=u.useState(!1),[I,$]=u.useState("mySecretPassword123"),[le,ve]=u.useState(""),[xe,sa]=u.useState(!1),[ra,ia]=u.useState(!1),[S,W]=u.useState("basic"),[ce,ie]=u.useState(""),[Wa,D]=u.useState(""),[K,ge]=u.useState(""),[Be,Ha]=u.useState([]),[oa,de]=u.useState(["React"]),[ne,Q]=u.useState(["新着","おすすめ"]),[fe,fa]=u.useState([]),[Ne,Fe]=u.useState(""),[Pe,Ta]=u.useState([]),[Te,ja]=u.useState(""),Ae=({children:q,content:te,position:se="top"})=>{const[be,Me]=u.useState(!1),re={top:{bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"8px"},bottom:{top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:"8px"},left:{top:"50%",right:"100%",transform:"translateY(-50%)",marginRight:"8px"},right:{top:"50%",left:"100%",transform:"translateY(-50%)",marginLeft:"8px"}};return t.jsxs("div",{style:{position:"relative",display:"inline-block"},onMouseEnter:()=>Me(!0),onMouseLeave:()=>Me(!1),onFocus:()=>Me(!0),onBlur:()=>Me(!1),children:[q,be&&t.jsxs("div",{style:{position:"absolute",...re[se],background:"var(--color-neutral-900)",color:"white",padding:"var(--spacing-1) var(--spacing-2)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",lineHeight:"var(--line-height-tight)",whiteSpace:"nowrap",zIndex:1e3,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",opacity:be?1:0,transition:"opacity 0.2s ease-in-out",pointerEvents:"none"},role:"tooltip","aria-label":te,children:[te,t.jsx("div",{style:{position:"absolute",width:0,height:0,...se==="top"&&{top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderTop:"4px solid var(--color-neutral-900)"},...se==="bottom"&&{bottom:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderBottom:"4px solid var(--color-neutral-900)"},...se==="left"&&{top:"50%",left:"100%",transform:"translateY(-50%)",borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderLeft:"4px solid var(--color-neutral-900)"},...se==="right"&&{top:"50%",right:"100%",transform:"translateY(-50%)",borderTop:"4px solid transparent",borderBottom:"4px solid transparent",borderRight:"4px solid var(--color-neutral-900)"}}})]})]})},Aa=({items:q,selected:te,onSelectionChange:se,removable:be=!0,onRemove:Me})=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-2)"},children:q.map((re,aa)=>t.jsxs("div",{onClick:()=>se&&se(re),style:{display:"inline-flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-1) var(--spacing-3)",backgroundColor:te.includes(re)?"rgb(21, 52, 109)":"var(--color-neutral-200)",color:te.includes(re)?"white":"var(--color-neutral-700)",borderRadius:"var(--radius-full)",fontSize:"var(--font-size-sm)",cursor:se?"pointer":"default",transition:"all 0.2s",border:"none"},children:[t.jsx("span",{children:re}),be&&Me&&t.jsx("button",{onClick:Se=>{Se.stopPropagation(),Me(re)},style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:"0",fontSize:"var(--font-size-xs)",fontWeight:"bold"},children:"×"})]},aa))}),$a=({checked:q,onChange:te,label:se,size:be="md"})=>{const re={sm:{width:32,height:18,knobSize:14,translateX:14},md:{width:44,height:24,knobSize:18,translateX:20},lg:{width:56,height:32,knobSize:26,translateX:24}}[be];return t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",cursor:"pointer"},children:[t.jsx("div",{style:{position:"relative",width:`${re.width}px`,height:`${re.height}px`,backgroundColor:q?"rgb(21, 52, 109)":"var(--color-neutral-300)",borderRadius:`${re.height}px`,transition:"all 0.3s",cursor:"pointer"},children:t.jsx("div",{style:{position:"absolute",top:"50%",left:q?`${re.translateX}px`:"3px",width:`${re.knobSize}px`,height:`${re.knobSize}px`,backgroundColor:"white",borderRadius:"50%",transform:"translateY(-50%)",transition:"all 0.3s",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"}})}),t.jsx("input",{type:"checkbox",checked:q,onChange:te,style:{display:"none"}}),se&&t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:se})]})},Gt=({value:q,onChange:te,label:se,error:be,required:Me=!1})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[se&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[se," ",Me&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("input",{type:"date",value:q,onChange:re=>te(re.target.value),style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:`1px solid ${be?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"},onFocus:re=>{re.target.style.borderColor=be?"var(--color-error-500)":"rgb(21, 52, 109)",re.target.style.boxShadow=be?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:re=>{re.target.style.borderColor=be?"var(--color-error-500)":"var(--color-neutral-300)",re.target.style.boxShadow="none"}}),be&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:be})]}),fl=({onFilesChange:q,multiple:te=!1,accept:se,label:be,error:Me,required:re=!1})=>{const[aa,Se]=u.useState(!1),_e=u.useRef(null),wa=Re=>{const ca=Array.from(Re);q(ca)},Na=Re=>{Re.preventDefault(),Se(!1);const ca=Re.dataTransfer.files;wa(ca)},Xa=Re=>{Re.preventDefault(),Se(!0)},Qa=Re=>{Re.preventDefault(),Se(!1)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[be&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[be," ",re&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("div",{onDrop:Na,onDragOver:Xa,onDragLeave:Qa,onClick:()=>{var Re;return(Re=_e.current)==null?void 0:Re.click()},style:{border:`2px dashed ${aa?"rgb(21, 52, 109)":Me?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",padding:"var(--spacing-6)",textAlign:"center",cursor:"pointer",background:aa?"rgba(21, 52, 109, 0.05)":"var(--color-neutral-50)",transition:"all 0.2s",minHeight:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"upload",style:{width:"32px",height:"32px",color:"var(--color-neutral-500)"}}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"ファイルをドラッグ&ドロップまたはクリックして選択"}),t.jsxs("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:[se&&`対応形式: ${se}`,te&&"（複数ファイル選択可）"]}),t.jsx("input",{ref:_e,type:"file",multiple:te,accept:se,onChange:Re=>wa(Re.target.files),style:{display:"none"}})]}),Me&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:Me})]})},Ga=({value:q,onChange:te,placeholder:se,rows:be=4,label:Me,error:re,required:aa=!1,maxLength:Se})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[Me&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[Me," ",aa&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("textarea",{value:q,onChange:_e=>te(_e.target.value),placeholder:se,rows:be,maxLength:Se,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${re?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none",fontFamily:"inherit",resize:"vertical",lineHeight:"var(--line-height-relaxed)"},onFocus:_e=>{_e.target.style.borderColor=re?"var(--color-error-500)":"rgb(21, 52, 109)",_e.target.style.boxShadow=re?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:_e=>{_e.target.style.borderColor=re?"var(--color-error-500)":"var(--color-neutral-300)",_e.target.style.boxShadow="none"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[re?t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)"},children:re}):t.jsx("div",{}),Se&&t.jsxs("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:[q.length,"/",Se]})]})]}),Tr=({value:q,onChange:te,suggestions:se=[],placeholder:be,label:Me,error:re,required:aa=!1,maxSuggestions:Se=5})=>{const[_e,wa]=u.useState(q||""),[Na,Xa]=u.useState([]),[Qa,Re]=u.useState(!1),[ca,ta]=u.useState(-1),nt=u.useRef(null),Fa=u.useRef(null),Ca=se.length>0?se:["東京都","大阪府","愛知県","神奈川県","埼玉県","千葉県","兵庫県","北海道","福岡県","静岡県","JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go"];u.useEffect(()=>{wa(q||"")},[q]);const st=la=>{const ga=la.target.value;if(wa(ga),ga.length>0){const Er=Ca.filter(Mo=>Mo.toLowerCase().includes(ga.toLowerCase())).slice(0,Se);Xa(Er),Re(Er.length>0)}else Xa([]),Re(!1);ta(-1),te&&te(ga)},Cn=la=>{wa(la),Re(!1),ta(-1),te&&te(la)},Co=la=>{if(Qa)switch(la.key){case"ArrowDown":la.preventDefault(),ta(ga=>ga<Na.length-1?ga+1:ga);break;case"ArrowUp":la.preventDefault(),ta(ga=>ga>0?ga-1:-1);break;case"Enter":la.preventDefault(),ca>=0&&Cn(Na[ca]);break;case"Escape":Re(!1),ta(-1);break}},ko=la=>{Fa.current&&Fa.current.contains(la.relatedTarget)||setTimeout(()=>{Re(!1),ta(-1)},100)};return t.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[Me&&t.jsxs("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:[Me," ",aa&&t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("input",{ref:nt,type:"text",value:_e,onChange:st,onKeyDown:Co,onBlur:ko,onFocus:la=>{Na.length>0&&Re(!0),la.target.style.borderColor=re?"var(--color-error-500)":"rgb(21, 52, 109)",la.target.style.boxShadow=re?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(21, 52, 109, 0.1)"},placeholder:be,style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:`1px solid ${re?"var(--color-error-500)":"var(--color-neutral-300)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"}}),Qa&&t.jsx("div",{ref:Fa,style:{position:"absolute",top:"100%",left:0,right:0,backgroundColor:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:1e3,maxHeight:"200px",overflowY:"auto"},children:Na.map((la,ga)=>t.jsx("div",{onClick:()=>Cn(la),style:{padding:"var(--spacing-2) var(--spacing-3)",cursor:"pointer",fontSize:"var(--font-size-sm)",backgroundColor:ga===ca?"var(--color-primary-50)":"transparent",color:ga===ca?"rgb(21, 52, 109)":"var(--color-neutral-700)",borderBottom:ga<Na.length-1?"1px solid var(--color-neutral-100)":"none",transition:"all 0.2s"},onMouseEnter:()=>ta(ga),onMouseLeave:()=>ta(-1),children:la},ga))})]}),re&&t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-error-500)",marginTop:"var(--spacing-1)"},children:re})]})},X=({value:q,onChange:te,max:se=5,icon:be="star",size:Me="md",label:re,readOnly:aa=!1,showValue:Se=!1})=>{const[_e,wa]=u.useState(0),Na={sm:{width:"16px",height:"16px"},md:{width:"24px",height:"24px"},lg:{width:"32px",height:"32px"}},Xa=Na[Me]||Na.md,Qa=nt=>{!aa&&te&&te(nt)},Re=nt=>{aa||wa(nt)},ca=()=>{aa||wa(0)},ta=nt=>{if(nt<=(_e||q))switch(be){case"heart":return"#ef4444";case"thumb":return"#10b981";default:return"#fbbf24"}return"#d1d5db"};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[re&&t.jsx("label",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)"},children:re}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("div",{style:{display:"flex",gap:"var(--spacing-1)"},children:Array.from({length:se},(nt,Fa)=>{const Ca=Fa+1;return t.jsx("button",{type:"button",onClick:()=>Qa(Ca),onMouseEnter:()=>Re(Ca),onMouseLeave:ca,disabled:aa,style:{background:"none",border:"none",cursor:aa?"default":"pointer",padding:"var(--spacing-1)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius-sm)",transition:"all 0.2s"},children:t.jsx(k,{name:be,style:{...Xa,color:ta(Ca),transition:"color 0.2s"}})},Fa)})}),Se&&t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginLeft:"var(--spacing-2)"},children:[q,"/",se]})]})]})},ue=({value:q,onChange:te,min:se=0,max:be=100,step:Me=1,showLabel:re=!1,color:aa="primary",size:Se="medium",disabled:_e=!1})=>{const wa=(q-se)/(be-se)*100,Na={primary:"rgb(21, 52, 109)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},Xa={small:{height:"4px",thumbSize:"12px"},medium:{height:"6px",thumbSize:"16px"},large:{height:"8px",thumbSize:"20px"}},Qa=Na[aa]||Na.primary,Re=Xa[Se]||Xa.medium;return t.jsxs("div",{style:{width:"100%",opacity:_e?.6:1},children:[re&&t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:[t.jsxs("span",{children:["値: ",q]}),t.jsxs("span",{children:[se," - ",be]})]}),t.jsxs("div",{style:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center",cursor:_e?"not-allowed":"pointer"},children:[t.jsx("div",{style:{width:"100%",height:Re.height,backgroundColor:"var(--color-neutral-200)",borderRadius:Re.height,position:"relative"},children:t.jsx("div",{style:{width:`${wa}%`,height:"100%",backgroundColor:_e?"var(--color-neutral-400)":Qa,borderRadius:Re.height,transition:"width 0.2s"}})}),t.jsx("input",{type:"range",min:se,max:be,step:Me,value:q,disabled:_e,onChange:ca=>te(Number(ca.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:_e?"not-allowed":"pointer",margin:0,padding:0}}),t.jsx("div",{style:{position:"absolute",left:`${wa}%`,transform:"translateX(-50%)",width:Re.thumbSize,height:Re.thumbSize,backgroundColor:_e?"var(--color-neutral-400)":Qa,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:_e?"not-allowed":"pointer",transition:"left 0.2s"}})]})]})},Le=({value:q=[0,100],onChange:te,min:se=0,max:be=100,step:Me=1,color:re="primary",size:aa="medium",disabled:Se=!1})=>{const[_e,wa]=q,Na=(_e-se)/(be-se)*100,Xa=(wa-se)/(be-se)*100,Qa={primary:"rgb(21, 52, 109)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},Re={small:{height:"4px",thumbSize:"12px"},medium:{height:"6px",thumbSize:"16px"},large:{height:"8px",thumbSize:"20px"}},ca=Qa[re]||Qa.primary,ta=Re[aa]||Re.medium,nt=Ca=>{const st=Math.min(Ca,wa-Me);te([st,wa])},Fa=Ca=>{const st=Math.max(Ca,_e+Me);te([_e,st])};return t.jsx("div",{style:{width:"100%",opacity:Se?.6:1},children:t.jsxs("div",{style:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center"},children:[t.jsx("div",{style:{width:"100%",height:ta.height,backgroundColor:"var(--color-neutral-200)",borderRadius:ta.height,position:"relative"},children:t.jsx("div",{style:{position:"absolute",left:`${Na}%`,width:`${Xa-Na}%`,height:"100%",backgroundColor:Se?"var(--color-neutral-400)":ca,borderRadius:ta.height,transition:"all 0.2s"}})}),t.jsx("input",{type:"range",min:se,max:be,step:Me,value:_e,disabled:Se,onChange:Ca=>nt(Number(Ca.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:Se?"not-allowed":"pointer",margin:0,padding:0,zIndex:1}}),t.jsx("input",{type:"range",min:se,max:be,step:Me,value:wa,disabled:Se,onChange:Ca=>Fa(Number(Ca.target.value)),style:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:Se?"not-allowed":"pointer",margin:0,padding:0,zIndex:2}}),t.jsx("div",{style:{position:"absolute",left:`${Na}%`,transform:"translateX(-50%)",width:ta.thumbSize,height:ta.thumbSize,backgroundColor:Se?"var(--color-neutral-400)":ca,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:Se?"not-allowed":"pointer",transition:"left 0.2s",zIndex:3}}),t.jsx("div",{style:{position:"absolute",left:`${Xa}%`,transform:"translateX(-50%)",width:ta.thumbSize,height:ta.thumbSize,backgroundColor:Se?"var(--color-neutral-400)":ca,borderRadius:"50%",border:"2px solid white",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",cursor:Se?"not-allowed":"pointer",transition:"left 0.2s",zIndex:4}})]})})},gl=({options:q=[],value:te="",onChange:se,placeholder:be="選択してください...",searchPlaceholder:Me="検索...",size:re="medium",disabled:aa=!1,multiple:Se=!1,maxSelected:_e=null,clearable:wa=!0,searchable:Na=!0,loading:Xa=!1,noOptionsText:Qa="オプションが見つかりません",style:Re={}})=>{const[ca,ta]=u.useState(!1),[nt,Fa]=u.useState(""),[Ca,st]=u.useState(-1),Cn=u.useRef(null),Co=u.useRef(null),ko=u.useRef(null);u.useEffect(()=>{const me=Ue=>{Cn.current&&!Cn.current.contains(Ue.target)&&(ta(!1),Fa(""),st(-1))};return document.addEventListener("mousedown",me),()=>document.removeEventListener("mousedown",me)},[]);const la=q.filter(me=>(typeof me=="string"?me:me.label).toLowerCase().includes(nt.toLowerCase())),ga=me=>{const Ue=typeof me=="string"?me:me.value;if(Se){const gt=Array.isArray(te)?te:[];if(gt.includes(Ue))se(gt.filter(To=>To!==Ue));else{if(_e&&gt.length>=_e)return;se([...gt,Ue])}}else se(Ue),ta(!1),Fa("");st(-1)},Er=me=>{if(!ca){(me.key==="Enter"||me.key===" "||me.key==="ArrowDown")&&(me.preventDefault(),ta(!0),st(0));return}switch(me.key){case"Escape":ta(!1),Fa(""),st(-1);break;case"ArrowDown":me.preventDefault(),st(Ue=>Ue<la.length-1?Ue+1:0);break;case"ArrowUp":me.preventDefault(),st(Ue=>Ue>0?Ue-1:la.length-1);break;case"Enter":me.preventDefault(),Ca>=0&&Ca<la.length&&ga(la[Ca]);break}},Mo=me=>{me.stopPropagation(),se(Se?[]:"")},sg=()=>{if(Se){const me=Array.isArray(te)?te:[];if(me.length===0)return be;if(me.length===1){const Ue=q.find(gt=>(typeof gt=="string"?gt:gt.value)===me[0]);return typeof Ue=="string"?Ue:(Ue==null?void 0:Ue.label)||me[0]}return`${me.length}個選択済み`}else{if(!te)return be;const me=q.find(Ue=>(typeof Ue=="string"?Ue:Ue.value)===te);return typeof me=="string"?me:(me==null?void 0:me.label)||te}},rg={small:{padding:"6px 12px",fontSize:"14px",minHeight:"32px"},medium:{padding:"8px 16px",fontSize:"16px",minHeight:"40px"},large:{padding:"12px 20px",fontSize:"18px",minHeight:"48px"}},ig={position:"relative",width:"100%",...Re},og={width:"100%",border:"1px solid #d1d5db",borderRadius:"6px",backgroundColor:aa?"#f9fafb":"#ffffff",color:aa?"#9ca3af":"#374151",cursor:aa?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"border-color 0.2s, box-shadow 0.2s",...rg[re],...ca&&{borderColor:"#2563eb",boxShadow:"0 0 0 3px rgba(37, 99, 235, 0.1)"}},cg={position:"absolute",top:"100%",left:0,right:0,backgroundColor:"white",border:"1px solid #d1d5db",borderTop:"none",borderRadius:"0 0 6px 6px",maxHeight:"200px",overflowY:"auto",zIndex:1e3,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},dg={width:"100%",padding:"8px 12px",border:"none",borderBottom:"1px solid #e5e7eb",fontSize:"14px",outline:"none"},ug=(me,Ue)=>({padding:"8px 12px",cursor:"pointer",backgroundColor:Ca===Ue?"#f3f4f6":"transparent",borderBottom:"1px solid #f3f4f6",display:"flex",alignItems:"center",justifyContent:"space-between"}),Ro=Se?Array.isArray(te)?te:[]:[];return t.jsxs("div",{ref:Cn,style:ig,children:[t.jsxs("div",{style:og,onClick:()=>!aa&&ta(!ca),onKeyDown:Er,tabIndex:aa?-1:0,children:[t.jsx("span",{style:{color:!te||Se&&Ro.length===0?"#9ca3af":"inherit"},children:sg()}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[wa&&(Se&&Ro.length>0||!Se&&te)&&t.jsx("button",{onClick:Mo,style:{background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},children:t.jsx(k,{name:"x",style:{width:"16px",height:"16px"}})}),Xa?t.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #e5e7eb",borderTop:"2px solid #2563eb",borderRadius:"50%",animation:"spin 1s linear infinite"}}):t.jsx(k,{name:ca?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"#6b7280",transition:"transform 0.2s"}})]})]}),ca&&t.jsxs("div",{ref:Co,style:cg,children:[Na&&t.jsx("input",{ref:ko,type:"text",value:nt,onChange:me=>Fa(me.target.value),placeholder:Me,style:dg,autoFocus:!0}),la.length===0?t.jsx("div",{style:{padding:"12px",color:"#9ca3af",textAlign:"center",fontStyle:"italic"},children:Qa}):la.map((me,Ue)=>{const gt=typeof me=="string"?me:me.value,To=typeof me=="string"?me:me.label,mg=Se?Ro.includes(gt):te===gt;return t.jsxs("div",{style:ug(me,Ue),onClick:()=>ga(me),onMouseEnter:()=>st(Ue),children:[t.jsx("span",{children:To}),mg&&t.jsx(k,{name:"check",style:{width:"16px",height:"16px",color:"#2563eb"}})]},gt)})]}),t.jsx("style",{jsx:!0,children:`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]})},Ar={status:[{value:"all",label:"すべて"},{value:"active",label:"アクティブ"},{value:"inactive",label:"非アクティブ"}],category:[{value:"all",label:"すべてのカテゴリ"},{value:"business",label:"ビジネス"},{value:"personal",label:"パーソナル"}]},$e=q=>{const{name:te,value:se,type:be,checked:Me}=q.target;a(re=>({...re,[te]:be==="checkbox"?Me:se})),l[te]&&n(re=>({...re,[te]:""}))},Iu=(q,te)=>{o(se=>({...se,[q]:te})),console.log("フィルター変更:",q,te)},ag=q=>{j(te=>te.includes(q)?te.filter(se=>se!==q):[...te,q])},tg=q=>{b(te=>te.filter(se=>se!==q)),j(te=>te.filter(se=>se!==q))},lg=q=>{q.preventDefault(),H()&&alert("フォームが正常に送信されました！")},ng=()=>{n({name:"お名前は必須です",email:"有効なメールアドレスを入力してください",password:"パスワードは8文字以上で入力してください",prefecture:"都道府県を選択してください",startDate:"開始日を選択してください",files:"ファイルを選択してください",description:"詳細説明を入力してください",gender:"性別を選択してください",notifications:"通知設定を有効にしてください",agreeToTerms:"利用規約への同意は必須です"})};return t.jsxs("div",{className:"forms-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"フォーム / 入力"}),t.jsx("p",{className:"page-description",children:"フォーム入力とデータ収集に関するコンポーネント群。 基本的なフォーム要素から高度な入力コンポーネントまで包括的に提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"フォームコンポーネント"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField"}),t.jsx("p",{className:"component-description",children:"ラベル付きテキスト入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(We,{name:"demo-field",label:"サンプルラベル",value:"サンプルテキスト",placeholder:"テキストを入力してください",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="fieldName"
  label="ラベルテキスト"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField (error)"}),t.jsx("p",{className:"component-description",children:"エラー状態の入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(We,{name:"demo-error",label:"メールアドレス",value:"invalid-email",error:"このフィールドは必須です",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="email"
  label="メールアドレス"
  value={value}
  onChange={handleChange}
  error="エラーメッセージ"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"InputField (ラベルなし)"}),t.jsx("p",{className:"component-description",children:"ラベルなしの入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(We,{name:"demo-no-label",value:"",placeholder:"ラベルなしの入力",onChange:()=>{}})}),t.jsx("div",{className:"code-snippet",children:`<InputField
  name="fieldName"
  value={value}
  onChange={handleChange}
  placeholder="プレースホルダー"
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PasswordInput"}),t.jsx("p",{className:"component-description",children:"パスワード表示切り替え機能付き入力フィールド"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"password-input-container",children:[t.jsx("div",{className:"password-input-wrapper",children:t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"password",className:"input-label",children:"パスワード"}),t.jsxs("div",{className:"password-field",children:[t.jsx("input",{id:"password",type:xe?"text":"password",value:I,onChange:q=>$(q.target.value),placeholder:"パスワードを入力してください",className:"password-input"}),t.jsx("button",{type:"button",onClick:()=>sa(!xe),className:"password-toggle","aria-label":xe?"パスワードを隠す":"パスワードを表示する",children:xe?t.jsx(k,{name:"eye",className:"w-4 h-4"}):t.jsx(k,{name:"eye-off",className:"w-4 h-4"})})]})]})}),t.jsx("div",{className:"password-input-wrapper",children:t.jsxs("div",{className:"input-group",children:[t.jsx("label",{htmlFor:"confirmPassword",className:"input-label",children:"パスワード確認"}),t.jsxs("div",{className:"password-field",children:[t.jsx("input",{id:"confirmPassword",type:ra?"text":"password",value:le,onChange:q=>ve(q.target.value),placeholder:"パスワードを再入力してください",className:"password-input"}),t.jsx("button",{type:"button",onClick:()=>ia(!ra),className:"password-toggle","aria-label":ra?"パスワードを隠す":"パスワードを表示する",children:ra?t.jsx(k,{name:"eye",className:"w-4 h-4"}):t.jsx(k,{name:"eye-off",className:"w-4 h-4"})})]})]})}),t.jsx("style",{jsx:!0,children:`
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
}`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Checkbox"}),t.jsx("p",{className:"component-description",children:"チェックボックス入力コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"checkbox-group",children:[t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ot,{name:"agreeToTerms",checked:e.agreeToTerms,onChange:$e}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"利用規約に同意します"})]}),t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ot,{name:"newsletter",checked:e.newsletter,onChange:$e}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"ニュースレターを受信します"})]})]})}),t.jsx("div",{className:"code-snippet",children:`<label className="flex items-center">
  <Checkbox
    name="agreeToTerms"
    checked={agreeToTerms}
    onChange={handleChange}
  />
  <span className="ms-2 text-sm text-gray-600">
    利用規約に同意します
  </span>
</label>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SelectBox"}),t.jsx("p",{className:"component-description",children:"ドロップダウン選択コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"select-wrapper",children:t.jsxs("select",{className:"select-input",value:e.prefecture,onChange:$e,name:"prefecture",children:[t.jsx("option",{value:"",children:"都道府県を選択"}),t.jsx("option",{value:"tokyo",children:"東京都"}),t.jsx("option",{value:"osaka",children:"大阪府"}),t.jsx("option",{value:"kyoto",children:"京都府"}),t.jsx("option",{value:"kanagawa",children:"神奈川県"}),t.jsx("option",{value:"saitama",children:"埼玉県"})]})})}),t.jsx("div",{className:"code-snippet",children:`<div className="select-wrapper">
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
</div>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"MultiSelectBox (複数選択ドロップダウン)"}),t.jsx("p",{className:"component-description",children:"複数選択可能なカスタムドロップダウンコンポーネント - チェックボックス付き"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(bf,{label:"希望勤務地",name:"workLocation",value:C,options:[{value:"tokyo",label:"東京"},{value:"osaka",label:"大阪"},{value:"nagoya",label:"名古屋"},{value:"fukuoka",label:"福岡"},{value:"remote",label:"リモート"}],onChange:L,placeholder:"勤務地を選択してください",helper:"複数選択可能です",required:!0})}),t.jsx("div",{className:"code-snippet",children:`<SelectBox
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"RadioGroup"}),t.jsx("p",{className:"component-description",children:"高度なラジオボタン選択コンポーネント - エラー状態、説明文、無効化対応"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"radio-group-wrapper",children:[t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"性別 *"}),t.jsxs("div",{className:"radio-group vertical",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"male",checked:e.gender==="male",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"男性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"female",checked:e.gender==="female",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"女性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"other",checked:e.gender==="other",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"その他"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"no-answer",checked:e.gender==="no-answer",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"回答しない"})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"優先度"}),t.jsxs("div",{className:"radio-group horizontal",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"high",checked:e.priority==="high",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"高"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"medium",checked:e.priority==="medium",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"中"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"low",checked:e.priority==="low",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"低"})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"プランを選択"}),t.jsxs("div",{className:"radio-group vertical with-descriptions",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"plan",value:"basic",checked:e.plan==="basic",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsxs("div",{className:"radio-content",children:[t.jsx("span",{className:"radio-label",children:"ベーシックプラン"}),t.jsx("span",{className:"radio-description",children:"基本機能のみ利用可能"})]})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"plan",value:"premium",checked:e.plan==="premium",onChange:$e}),t.jsx("span",{className:"radio-custom"}),t.jsxs("div",{className:"radio-content",children:[t.jsx("span",{className:"radio-label",children:"プレミアムプラン"}),t.jsx("span",{className:"radio-description",children:"全機能利用可能、優先サポート付き"})]})]})]})]}),t.jsxs("div",{className:"radio-group-section",children:[t.jsx("label",{className:"radio-group-label",children:"配送方法（現在利用不可）"}),t.jsxs("div",{className:"radio-group vertical disabled",children:[t.jsxs("label",{className:"radio-option disabled",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"shipping",value:"standard",disabled:!0}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"通常配送"})]}),t.jsxs("label",{className:"radio-option disabled",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"shipping",value:"express",disabled:!0}),t.jsx("span",{className:"radio-custom"}),t.jsx("span",{className:"radio-label",children:"速達配送"})]})]})]}),t.jsx("style",{jsx:!0,children:`
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
</div>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ToggleButton / Switch"}),t.jsx("p",{className:"component-description",children:"ON/OFFを切り替えるトグルスイッチコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なトグルボタン"}),t.jsxs("div",{className:"toggle-group",children:[t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"notifications",checked:e.notifications,onChange:$e}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"通知を受け取る"})]}),t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"darkMode",checked:e.darkMode,onChange:$e}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"ダークモード"})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"サイズバリエーション"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx($a,{checked:c,onChange:q=>d(q.target.checked),label:"小サイズ",size:"sm"}),t.jsx($a,{checked:c,onChange:q=>d(q.target.checked),label:"中サイズ（デフォルト）",size:"md"}),t.jsx($a,{checked:c,onChange:q=>d(q.target.checked),label:"大サイズ",size:"lg"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"実用例"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)"},children:[t.jsx($a,{checked:c,onChange:q=>d(q.target.checked),label:"プッシュ通知を有効にする"}),t.jsx($a,{checked:!1,onChange:()=>{},label:"ダークモード"}),t.jsx($a,{checked:!0,onChange:()=>{},label:"自動保存"})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なトグルボタン
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
<Switch size="lg" checked={value} onChange={handler} label="大サイズ" />`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DatePicker"}),t.jsx("p",{className:"component-description",children:"日付選択用のピッカーコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的な日付選択"}),t.jsx(Gt,{value:v,onChange:h,label:"開始日"})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"必須フィールド"}),t.jsx(Gt,{value:"",onChange:()=>{},label:"締切日",required:!0})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"日時選択（時間含む）"}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"block",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-700)",marginBottom:"var(--spacing-2)"},children:["開催日時 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx("input",{type:"datetime-local",value:"",onChange:()=>{},style:{width:"100%",padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)",background:"white",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none"},onFocus:q=>{q.target.style.borderColor="rgb(21, 52, 109)",q.target.style.boxShadow="0 0 0 3px rgba(21, 52, 109, 0.1)"},onBlur:q=>{q.target.style.borderColor="var(--color-neutral-300)",q.target.style.boxShadow="none"}})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な日付選択
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FileUpload"}),t.jsx("p",{className:"component-description",children:"ドラッグ&ドロップ対応のファイルアップロードコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"450px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"単一ファイル"}),t.jsx(fl,{onFilesChange:q=>N(q),label:"プロフィール画像",accept:"image/*"}),g.length>0&&t.jsxs("div",{style:{marginTop:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:["選択ファイル: ",g.map(q=>q.name).join(", ")]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"複数ファイル"}),t.jsx(fl,{onFilesChange:()=>{},multiple:!0,label:"ドキュメント",accept:".pdf,.doc,.docx"})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 単一ファイル
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Textarea"}),t.jsx("p",{className:"component-description",children:"複数行テキスト入力用のテキストエリアコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"500px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なテキストエリア"}),t.jsx(Ga,{value:T,onChange:z,label:"メッセージ",placeholder:"ご意見・ご要望をお聞かせください",rows:4})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"文字数制限付き"}),t.jsx(Ga,{value:"",onChange:()=>{},label:"自己紹介",placeholder:"200文字以内で自己紹介をお書きください",rows:3,maxLength:200})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なテキストエリア
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
/>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"高度なフォーム要素"}),t.jsxs("div",{className:"advanced-demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Slider / RangeSlider"}),t.jsx("p",{className:"component-description",children:"単一値または範囲選択に対応した高度なスライダーコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"slider-wrapper",children:[t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"基本スライダー"}),t.jsxs("div",{className:"slider-item",children:[t.jsxs("label",{className:"slider-label",children:["音量: ",m,"%"]}),t.jsx(ue,{value:m,onChange:f,min:0,max:100,showLabel:!1})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"レンジスライダー（範囲選択）"}),t.jsxs("div",{className:"slider-item",children:[t.jsxs("label",{className:"slider-label",children:["価格範囲: ¥",p[0].toLocaleString()," - ¥",p[1].toLocaleString()]}),t.jsx(Le,{value:p,onChange:x,min:0,max:1e5,step:1e3})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"サイズバリエーション"}),t.jsxs("div",{className:"slider-sizes",children:[t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"小サイズ"}),t.jsx(ue,{value:m,onChange:f,size:"small"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"標準サイズ"}),t.jsx(ue,{value:m,onChange:f,size:"medium"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"大サイズ"}),t.jsx(ue,{value:m,onChange:f,size:"large"})]})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"カラーバリエーション"}),t.jsxs("div",{className:"slider-colors",children:[t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Primary"}),t.jsx(ue,{value:m,onChange:f,color:"primary"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Success"}),t.jsx(ue,{value:m,onChange:f,color:"success"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Warning"}),t.jsx(ue,{value:m,onChange:f,color:"warning"})]}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"Error"}),t.jsx(ue,{value:m,onChange:f,color:"error"})]})]})]}),t.jsxs("div",{className:"slider-section",children:[t.jsx("h4",{className:"slider-section-title",children:"無効状態"}),t.jsxs("div",{className:"slider-item",children:[t.jsx("label",{className:"slider-label",children:"設定不可（無効化）"}),t.jsx(ue,{value:30,onChange:()=>{},disabled:!0})]})]}),t.jsx("style",{jsx:!0,children:`
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Tooltip"}),t.jsx("p",{className:"component-description",children:"ホバー時にヒントやヘルプ情報を表示するツールチップコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"chips-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"基本的なツールチップ"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",flexWrap:"wrap"},children:[t.jsx(Ae,{content:"上に表示",position:"top",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"上にホバー"})}),t.jsx(Ae,{content:"下に表示",position:"bottom",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"下にホバー"})}),t.jsx(Ae,{content:"左に表示",position:"left",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"左にホバー"})}),t.jsx(Ae,{content:"右に表示",position:"right",children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",background:"white",cursor:"pointer"},children:"右にホバー"})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"アイコンにツールチップ"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[t.jsx(Ae,{content:"ヘルプ情報",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-primary-600)"}})}),t.jsx(Ae,{content:"詳細情報",children:t.jsx(k,{name:"info",style:{cursor:"pointer",color:"var(--color-info-600)"}})})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"フォーム要素との組み合わせ"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:["パスワード",t.jsx(Ae,{content:"8文字以上、英数字含む",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx("input",{type:"password",placeholder:"パスワードを入力",style:{marginTop:"var(--spacing-1)",width:"250px",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:["メールアドレス",t.jsx(Ae,{content:"確認メールが送信されます",children:t.jsx(k,{name:"info",style:{cursor:"pointer",color:"var(--color-info-500)",width:"18px",height:"18px"}})})]}),t.jsx("input",{type:"email",placeholder:"example@email.com",style:{marginTop:"var(--spacing-1)",width:"250px",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的なツールチップ
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
</label>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Rating"}),t.jsx("p",{className:"component-description",children:"星評価やいいね機能などの評価入力コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"slider-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"星評価"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx(X,{value:M,onChange:B,label:"総合評価",showValue:!0}),t.jsx(X,{value:4,readOnly:!0,label:"平均評価（読み取り専用）",showValue:!0})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"サイズバリエーション"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"小サイズ"}),t.jsx(X,{value:3,onChange:()=>{},size:"sm"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"中サイズ（デフォルト）"}),t.jsx(X,{value:3,onChange:()=>{},size:"md"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"大サイズ"}),t.jsx(X,{value:3,onChange:()=>{},size:"lg"})]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"3段階評価"}),t.jsx(X,{value:2,onChange:()=>{},max:3,label:"満足度評価",showValue:!0})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な星評価
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"AutoComplete"}),t.jsx("p",{className:"component-description",children:"入力支援機能を提供するオートコンプリートコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",maxWidth:"400px"},children:t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"技術スタック"}),t.jsx(Tr,{value:"",onChange:()=>{},suggestions:["JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go"],placeholder:"使用技術を入力してください",label:"スキル"})]})})}),t.jsx("div",{className:"code-snippet",children:`// 技術スタック選択
<AutoComplete
  value={value}
  onChange={setValue}
  suggestions={['JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js']}
  placeholder="使用技術を入力してください"
  label="スキル"
  maxSuggestions={5}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Chips"}),t.jsx("p",{className:"component-description",children:"タグ選択や複数項目の管理に使用するチップコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"chips-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"選択可能チップス"}),t.jsxs("div",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:["選択中: ",y.join(", ")]}),t.jsx(Aa,{items:w,selected:y,onSelectionChange:ag,removable:!1})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"削除可能チップス"}),t.jsx("div",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"×ボタンでチップを削除できます"}),t.jsx(Aa,{items:w,selected:w,onSelectionChange:()=>{},removable:!0,onRemove:tg})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"カテゴリ例"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"スキル"}),t.jsx(Aa,{items:["JavaScript","React","Node.js","TypeScript","Python"],selected:["JavaScript","React"],onSelectionChange:()=>{},removable:!1})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-2)"},children:"興味のあるトピック"}),t.jsx(Aa,{items:["Web開発","AI","デザイン","マーケティング","データ分析"],selected:["Web開発","デザイン"],onSelectionChange:()=>{},removable:!1})]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 選択可能チップス
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
/>`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"実用的なフォーム例"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"統合フォームデモ"}),t.jsx("p",{className:"component-description",children:"フォームコンポーネントを組み合わせた実用例。「エラー表示テスト」ボタンでバリデーションエラーの表示を確認できます。"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("form",{onSubmit:lg,className:"demo-form",children:[t.jsx(We,{id:"form-name",name:"name",label:t.jsxs(t.Fragment,{children:["お名前 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:e.name,onChange:$e,placeholder:"山田 太郎",required:!0,error:l.name,fullWidth:!0}),t.jsx(We,{id:"form-email",type:"email",name:"email",label:t.jsxs(t.Fragment,{children:["メールアドレス ",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:e.email,onChange:$e,placeholder:"example@email.com",required:!0,error:l.email,fullWidth:!0}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["パスワード ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ae,{content:"8文字以上、英数字含む",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(We,{id:"form-password",type:"password",name:"password",value:e.password,onChange:$e,placeholder:"8文字以上で入力",required:!0,error:l.password,fullWidth:!0})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["スキル ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ae,{content:"お持ちの技術スキルを入力してください",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Tr,{value:J,onChange:P,suggestions:["JavaScript","React","Vue.js","Angular","TypeScript","Node.js","Python","Java","PHP","Go","C++","CSS","HTML","SQL"],placeholder:"使用技術を入力してください",label:"",required:!0}),l.skills&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.skills})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["開始日 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ae,{content:"プロジェクトの開始予定日",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Gt,{value:v,onChange:h,error:l.startDate}),l.startDate&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.startDate})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["添付ファイル ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ae,{content:"PDF, Word, Excel形式対応",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(fl,{onFilesChange:q=>N(q),accept:".pdf,.doc,.docx,.xls,.xlsx",multiple:!0,error:l.files}),l.files&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.files})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["詳細説明 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ae,{content:"200文字以内で入力してください",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsx(Ga,{value:T,onChange:z,placeholder:"プロジェクトの詳細をお書きください",rows:4,maxLength:200,error:l.description}),l.description&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.description})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsxs("label",{className:"form-label",style:{marginBottom:0},children:["性別 ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsx(Ae,{content:"回答したくない場合は「回答しない」を選択",children:t.jsx(k,{name:"help",style:{cursor:"pointer",color:"var(--color-neutral-500)",width:"18px",height:"18px"}})})]}),t.jsxs("div",{className:`radio-group mt-1 ${l.gender?"error-state":""}`,children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"male",checked:e.gender==="male",onChange:$e,required:!0}),t.jsx("span",{className:"radio-label",children:"男性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"female",checked:e.gender==="female",onChange:$e,required:!0}),t.jsx("span",{className:"radio-label",children:"女性"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"other",checked:e.gender==="other",onChange:$e,required:!0}),t.jsx("span",{className:"radio-label",children:"その他"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"gender",value:"none",checked:e.gender==="none",onChange:$e,required:!0}),t.jsx("span",{className:"radio-label",children:"回答しない"})]})]}),l.gender&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.gender})]}),t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"優先度"}),t.jsxs("div",{className:"radio-group-horizontal mt-1",children:[t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"high",checked:e.priority==="high",onChange:$e}),t.jsx("span",{className:"radio-label",children:"高"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"medium",checked:e.priority==="medium",onChange:$e}),t.jsx("span",{className:"radio-label",children:"中"})]}),t.jsxs("label",{className:"radio-option",children:[t.jsx("input",{type:"radio",className:"radio-input",name:"priority",value:"low",checked:e.priority==="low",onChange:$e}),t.jsx("span",{className:"radio-label",children:"低"})]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"4px"},children:[t.jsx("label",{className:"form-label",style:{marginBottom:0},children:"設定オプション"}),t.jsx(Ae,{content:"重要なお知らせを受け取るため推奨",children:t.jsx(k,{name:"info",style:{cursor:"pointer",color:"var(--color-info-500)",width:"18px",height:"18px"}})})]}),t.jsxs("div",{className:`toggle-group mt-1 ${l.notifications?"error-state":""}`,children:[t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"notifications",checked:e.notifications,onChange:$e,required:!0}),t.jsx("span",{className:"toggle-slider"})]}),t.jsxs("span",{className:"toggle-label",children:["プッシュ通知を受け取る ",t.jsx("span",{style:{color:"red"},children:"*"})]})]}),t.jsxs("label",{className:"toggle-wrapper",children:[t.jsxs("div",{className:"toggle-switch",children:[t.jsx("input",{type:"checkbox",className:"toggle-input",name:"darkMode",checked:e.darkMode,onChange:$e}),t.jsx("span",{className:"toggle-slider"})]}),t.jsx("span",{className:"toggle-label",children:"ダークモード"})]})]}),l.notifications&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.notifications})]}),t.jsxs("div",{className:"checkbox-group",children:[t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ot,{name:"agreeToTerms",checked:e.agreeToTerms,onChange:$e,required:!0}),t.jsxs("span",{className:"ms-2 text-sm text-gray-600",children:["利用規約に同意します ",t.jsx("span",{style:{color:"red"},children:"*"})]})]}),l.agreeToTerms&&t.jsx("div",{className:"form-error mt-2",role:"alert",children:l.agreeToTerms}),t.jsxs("label",{className:"flex items-center",children:[t.jsx(Ot,{name:"newsletter",checked:e.newsletter,onChange:$e}),t.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"ニュースレターを受信します"})]})]}),t.jsxs("div",{className:"form-actions",children:[t.jsx("button",{type:"button",style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>{a({name:"",email:"",password:"",prefecture:"",gender:"",priority:"",notifications:!1,darkMode:!1,agreeToTerms:!1,newsletter:!1}),n({})},children:"リセット"}),t.jsx("button",{type:"button",style:{padding:"8px 16px",border:"1px solid #dc2626",borderRadius:"4px",background:"#dc2626",color:"white",cursor:"pointer",marginRight:"8px"},onClick:ng,children:"エラー表示テスト"}),t.jsx("button",{type:"submit",style:{padding:"8px 16px",border:"none",borderRadius:"4px",background:"rgb(21, 52, 109)",color:"white",cursor:"pointer"},children:"送信"})]})]})})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用方法"}),t.jsxs("div",{className:"component-card",children:[t.jsx("div",{className:"component-info",children:t.jsx("h3",{className:"component-name",children:"インポートと基本的な使用方法"})}),t.jsx("div",{className:"code-snippet",children:`// インポート
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
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"検索・フィルターパネル"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SearchFilterPanel"}),t.jsx("p",{className:"component-description",children:"検索ボックスとフィルター機能を組み合わせたパネルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"search-filter-demo",children:[t.jsxs("div",{className:"search-filter-panel",children:[t.jsxs("div",{className:"search-section",children:[t.jsx("label",{htmlFor:"demo-search",className:"search-label",children:"検索"}),t.jsx("input",{id:"demo-search",type:"text",className:"search-input",placeholder:"検索キーワードを入力...",value:s,onChange:q=>r(q.target.value)})]}),t.jsxs("div",{className:"filter-section",children:[t.jsxs("div",{className:"filter-item",children:[t.jsx("label",{htmlFor:"status-filter",className:"filter-label",children:"ステータス"}),t.jsx("select",{id:"status-filter",className:"filter-select",value:i.status,onChange:q=>Iu("status",q.target.value),children:Ar.status.map(q=>t.jsx("option",{value:q.value,children:q.label},q.value))})]}),t.jsxs("div",{className:"filter-item",children:[t.jsx("label",{htmlFor:"category-filter",className:"filter-label",children:"カテゴリ"}),t.jsx("select",{id:"category-filter",className:"filter-select",value:i.category,onChange:q=>Iu("category",q.target.value),children:Ar.category.map(q=>t.jsx("option",{value:q.value,children:q.label},q.value))})]})]})]}),t.jsx("div",{className:"demo-results",children:t.jsxs("p",{className:"results-text",children:['検索: "',s,'" | ステータス: ',(e0=Ar.status.find(q=>q.value===i.status))==null?void 0:e0.label," | カテゴリ: ",(a0=Ar.category.find(q=>q.value===i.category))==null?void 0:a0.label]})})]})}),t.jsx("div",{className:"code-snippet",children:`<SearchFilterPanel
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"検索可能セレクト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SearchableSelect"}),t.jsx("p",{className:"component-description",children:"検索機能付きの高機能セレクトコンポーネント - 単一選択、複数選択、キーボードナビゲーション対応"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"基本的な単一選択"}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500"},children:"国を選択"}),t.jsx(gl,{options:[{value:"jp",label:"日本"},{value:"us",label:"アメリカ"},{value:"uk",label:"イギリス"},{value:"fr",label:"フランス"},{value:"de",label:"ドイツ"},{value:"kr",label:"韓国"},{value:"cn",label:"中国"},{value:"ca",label:"カナダ"},{value:"au",label:"オーストラリア"},{value:"in",label:"インド"}],value:Ne,onChange:Fe,placeholder:"国を選択してください...",searchPlaceholder:"国名で検索..."}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"#666"},children:["選択中: ",Ne||"未選択"]})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"複数選択"}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:"500"},children:"チームメンバー"}),t.jsx(gl,{options:[{value:"tanaka",label:"田中太郎"},{value:"suzuki",label:"鈴木花子"},{value:"sato",label:"佐藤一郎"},{value:"takahashi",label:"高橋美咲"},{value:"watanabe",label:"渡辺健太"},{value:"yamada",label:"山田美香"},{value:"nakamura",label:"中村悠太"},{value:"kobayashi",label:"小林由美"}],value:Pe,onChange:Ta,placeholder:"メンバーを選択...",searchPlaceholder:"名前で検索...",multiple:!0}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"#666"},children:["選択中 (",Pe.length,"): ",Pe.join(", ")||"未選択"]})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本的な単一選択
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"InputFieldは適切なtype属性を設定してください（email, password等）"}),t.jsx("li",{children:"InputFieldにlabel属性を指定すると、ラベルと入力フィールドが自動的に関連付けられます"}),t.jsx("li",{children:"InputFieldのerror属性でバリデーションエラーを表示できます"}),t.jsx("li",{children:"Checkboxは重要な同意事項や設定項目に使用してください"}),t.jsx("li",{children:"SelectBoxには適切なデフォルトオプションを設定してください"}),t.jsx("li",{children:"RadioButtonは排他的な選択肢に使用し、同じname属性を設定してください"}),t.jsx("li",{children:"縦並び（radio-group）は選択肢が多い場合や説明が長い場合に適しています"}),t.jsx("li",{children:"横並び（radio-group-horizontal）は選択肢が少ない場合やコンパクトな表示が必要な場合に適しています"}),t.jsx("li",{children:"ToggleButtonは設定項目やON/OFF切り替えに使用してください"}),t.jsx("li",{children:"ToggleButtonは直感的な操作ができるよう適切なラベルを設定してください"}),t.jsx("li",{children:"ToggleButtonでエラー状態を表示する場合は、error-stateクラスを親要素に追加してください"}),t.jsx("li",{children:"必須のToggleButtonには「*」マークとrequired属性を設定してください"}),t.jsx("li",{children:"Switchコンポーネントは設定の即座適用が期待される場合に使用してください"}),t.jsx("li",{children:"Sliderは連続的な数値選択（音量、価格範囲等）に適しています"}),t.jsx("li",{children:"Sliderには最小値・最大値・ステップを適切に設定してください"}),t.jsx("li",{children:"Chipsは複数選択やタグ管理に有効で、選択状態を視覚的に分かりやすく表現します"}),t.jsx("li",{children:"削除可能なChipsはユーザーが追加したタグの管理に適しています"}),t.jsx("li",{children:"フォームには適切なバリデーションとエラーハンドリングを実装してください"}),t.jsx("li",{children:"エラー状態の要素には適切なCSSクラスやaria属性を設定してください"}),t.jsx("li",{children:"検索・フィルターパネルはリアルタイム検索または送信ボタンでの適用を検討してください"}),t.jsx("li",{children:"フィルター項目は用途に応じて適切なオプションを設定してください"}),t.jsx("li",{children:"Tooltipはユーザビリティ向上のため、入力規則や説明が必要な項目に使用してください"}),t.jsx("li",{children:"Tooltipのテキストは簡潔で分かりやすい内容にしてください"}),t.jsx("li",{children:"Tooltipの位置は画面端での表示を考慮して適切に設定してください"}),t.jsx("li",{children:"アイコンと組み合わせたTooltipはヘルプアイコンや情報アイコンの使用を推奨します"}),t.jsx("li",{children:"DatePickerは日付の入力が必要な場面で使用し、適切なラベルを設定してください"}),t.jsx("li",{children:"DatePickerにはmin/max属性で日付範囲の制限を設けることも可能です"}),t.jsx("li",{children:"FileUploadはaccept属性で対応ファイル形式を明確にしてください"}),t.jsx("li",{children:"FileUploadはドラッグ&ドロップとクリック選択の両方に対応しています"}),t.jsx("li",{children:"複数ファイル選択が必要な場合はmultiple属性を設定してください"}),t.jsx("li",{children:"Textareaは長文入力が必要な場面で使用し、適切な行数を設定してください"}),t.jsx("li",{children:"Textareaには文字数制限（maxLength）を設定してユーザーに入力量の目安を示してください"}),t.jsx("li",{children:"Textareaのresizeプロパティで垂直方向のリサイズを許可しています"}),t.jsx("li",{children:"Ratingコンポーネントは評価やフィードバック収集に適しています"}),t.jsx("li",{children:"星評価は1-5段階評価に適しており、デフォルトで星アイコンを使用します"}),t.jsx("li",{children:"読み取り専用モードで既存の評価値を表示できます"}),t.jsx("li",{children:"max属性で評価段階数をカスタマイズ可能です（3段階、5段階など）"}),t.jsx("li",{children:"ホバー効果でユーザビリティを向上させています"}),t.jsx("li",{children:"AutoCompleteは入力支援によりユーザビリティを向上させます"}),t.jsx("li",{children:"キーボード操作（矢印キー、Enter、Escape）に対応しています"}),t.jsx("li",{children:"部分一致でのフィルタリングにより候補を絞り込みます"}),t.jsx("li",{children:"maxSuggestionsで表示候補数を制限できます"}),t.jsx("li",{children:"住所、技術スタック、商品名など様々な用途に適用可能です"})]})})]})]})},jb=()=>{const[e,a]=u.useState(""),[l,n]=u.useState("all"),[s,r]=u.useState(""),i={navigation:["dashboard","home","menu","chevron-up","chevron-down","chevron-left","chevron-right","arrow-up","arrow-down","arrow-left","arrow-right","arrow-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","navigation"],user:["users","user","user-plus","user-shield","user-cog","user-group","assignments","people-group","users-line","network-wired"],organization:["building","building-office","building-user","department","organization","sitemap","diagram-project"],security:["shield","shield-check","lock","unlock","key","hierarchy"],data:["table-cells","table","folder","folder-open","file","document","clipboard","clipboard-list","storage","database","cog"],business:["project","code","briefcase","cube","product","tasks","file-contract","handshake"],analytics:["chart","analytics","chart-bar","chart-line","chart-pie"],system:["settings","cog","cogs","wrench","tools","hammer","screwdriver","sliders"],finance:["currency-yen","price","wallet","credit-card","receipt"],notification:["bell","notification","inbox"],feedback:["check","check-circle","check-double","close","times","warning","exclamation","info","success","error","question","plus-circle","minus-circle"],action:["plus","minus","search","filter","edit","pencil","pen","delete","list","star","eye","eye-off","refresh","undo","redo","spinner"],communication:["envelope","mail","comment","comments","message","paper-plane","phone"],media:["video","music","photo","image","film","microphone","camera"],shopping:["shopping-cart","cart","tag","tags"],social:["share","share-alt","thumbs-up","thumbs-down","flag","heart","retweet","bookmark"],time:["calendar","calendar-alt","calendar-check","clock","stopwatch","hourglass","history"],location:["location","map","map-marker","compass","globe"],weather:["sun","moon","cloud","cloud-rain","bolt"],device:["laptop","desktop","tablet","mobile-alt","device-mobile","keyboard","mouse","print","wifi","bluetooth"],ui:["bars","ellipsis","ellipsis-v","toggle-on","toggle-off","expand","compress","grid","list"],education:["book","graduation-cap","bookmark-alt"],health:["heart-pulse","hospital","pills","syringe","stethoscope"],transport:["car","plane","train","ship","bicycle","truck"],food:["coffee","pizza","utensils","wine-glass"],gaming:["gamepad","dice","trophy","medal","crown","play","pause","stop"]},o=Object.values(i).flat(),c={all:"全て",navigation:"ナビゲーション",user:"ユーザー",organization:"組織・建物",security:"セキュリティ",data:"ファイル・データ",business:"ビジネス",analytics:"分析・グラフ",system:"システム・設定",finance:"金融・決済",notification:"通知",feedback:"フィードバック",action:"アクション",communication:"コミュニケーション",media:"メディア",shopping:"ショッピング",social:"ソーシャル",time:"時間・カレンダー",location:"位置情報・地図",weather:"天気",device:"デバイス",ui:"UI制御",education:"教育",health:"医療・健康",transport:"交通",food:"飲食",gaming:"ゲーム・エンタメ"},d=o.filter(p=>{var j;const x=p.toLowerCase().includes(e.toLowerCase()),y=l==="all"||((j=i[l])==null?void 0:j.includes(p));return x&&y}),m={};l==="all"?Object.entries(i).forEach(([p,x])=>{const y=x.filter(j=>j.toLowerCase().includes(e.toLowerCase()));y.length>0&&(m[p]=y)}):m[l]=d;const f=async p=>{const x=`<Icon name="${p}" className="w-5 h-5" />`;try{await navigator.clipboard.writeText(x),r(p),setTimeout(()=>r(""),2e3)}catch(y){console.error("コピーに失敗しました:",y);const j=document.createElement("textarea");j.value=x,document.body.appendChild(j),j.select(),document.execCommand("copy"),document.body.removeChild(j),r(p),setTimeout(()=>r(""),2e3)}};return t.jsxs("div",{className:"icons-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"SVGアイコン一覧"}),t.jsx("p",{className:"page-description",children:"システム全体で使用する統一されたSVGアイコンライブラリです。 アイコンをクリックするとReactコンポーネントのコードがコピーされます。"})]}),t.jsxs("div",{className:"controls",children:[t.jsxs("div",{className:"search-control",children:[t.jsx("label",{className:"control-label",children:"アイコン検索"}),t.jsx("input",{type:"text",className:"search-input",placeholder:"アイコン名で検索...",value:e,onChange:p=>a(p.target.value)})]}),t.jsxs("div",{className:"category-control",children:[t.jsx("label",{className:"control-label",children:"カテゴリ"}),t.jsx("select",{className:"category-select",value:l,onChange:p=>n(p.target.value),children:Object.entries(c).map(([p,x])=>t.jsx("option",{value:p,children:x},p))})]})]}),t.jsxs("div",{className:"results-count",children:[d.length,"個のアイコンが見つかりました"]}),Object.entries(m).map(([p,x])=>t.jsxs("div",{className:"category-section",children:[t.jsxs("h2",{className:"category-header",children:[c[p]||p,t.jsxs("span",{style:{marginLeft:"var(--spacing-2)",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)"},children:["(",x.length,")"]})]}),t.jsx("div",{className:"icons-grid",children:x.map(y=>t.jsxs("div",{className:"icon-item",onClick:()=>f(y),title:`${y} - クリックでコードをコピー`,children:[t.jsx("div",{className:"icon-display",children:t.jsx(k,{name:y,className:"w-8 h-8"})}),t.jsx("div",{className:"icon-name",children:y}),s===y&&t.jsx("div",{className:"copied-indicator",children:"コピー済み"})]},y))})]},p)),t.jsxs("div",{className:"usage-section",children:[t.jsx("h3",{className:"usage-title",children:"使用方法"}),t.jsxs("ul",{className:"usage-steps",children:[t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"1. インポート:"}),t.jsx("code",{className:"usage-code",children:"import Icon from '../../../components/icons/Icon.jsx';"})]}),t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"2. 基本的な使用:"}),t.jsx("code",{className:"usage-code",children:'<Icon name="dashboard" className="w-5 h-5" />'})]}),t.jsxs("li",{className:"usage-step",children:[t.jsx("strong",{children:"3. カスタマイズ:"}),t.jsx("code",{className:"usage-code",children:'<Icon name="users" className="w-8 h-8 text-blue-600" />'})]})]})]})]})};var wb=Object.defineProperty,Nb=(e,a,l)=>a in e?wb(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,fc=(e,a,l)=>(Nb(e,typeof a!="symbol"?a+"":a,l),l);let Sb=class{constructor(){fc(this,"current",this.detect()),fc(this,"handoffState","pending"),fc(this,"currentId",0)}set(a){this.current!==a&&(this.handoffState="pending",this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Ut=new Sb;function Cr(e){var a;return Ut.isServer?null:e==null?document:(a=e==null?void 0:e.ownerDocument)!=null?a:document}function wd(e){var a,l;return Ut.isServer?null:e==null?document:(l=(a=e==null?void 0:e.getRootNode)==null?void 0:a.call(e))!=null?l:document}function yf(e){var a,l;return(l=(a=wd(e))==null?void 0:a.activeElement)!=null?l:null}function zb(e){return yf(e)===e}function vo(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(a=>setTimeout(()=>{throw a}))}function pl(){let e=[],a={addEventListener(l,n,s,r){return l.addEventListener(n,s,r),a.add(()=>l.removeEventListener(n,s,r))},requestAnimationFrame(...l){let n=requestAnimationFrame(...l);return a.add(()=>cancelAnimationFrame(n))},nextFrame(...l){return a.requestAnimationFrame(()=>a.requestAnimationFrame(...l))},setTimeout(...l){let n=setTimeout(...l);return a.add(()=>clearTimeout(n))},microTask(...l){let n={current:!0};return vo(()=>{n.current&&l[0]()}),a.add(()=>{n.current=!1})},style(l,n,s){let r=l.style.getPropertyValue(n);return Object.assign(l.style,{[n]:s}),this.add(()=>{Object.assign(l.style,{[n]:r})})},group(l){let n=pl();return l(n),this.add(()=>n.dispose())},add(l){return e.includes(l)||e.push(l),()=>{let n=e.indexOf(l);if(n>=0)for(let s of e.splice(n,1))s()}},dispose(){for(let l of e.splice(0))l()}};return a}function xo(){let[e]=u.useState(pl);return u.useEffect(()=>()=>e.dispose(),[e]),e}let et=(e,a)=>{Ut.isServer?u.useEffect(e,a):u.useLayoutEffect(e,a)};function zn(e){let a=u.useRef(e);return et(()=>{a.current=e},[e]),a}let Ge=function(e){let a=zn(e);return ee.useCallback((...l)=>a.current(...l),[a])};function kr(e){return u.useMemo(()=>e,Object.values(e))}let Cb=u.createContext(void 0);function kb(){return u.useContext(Cb)}function Nd(...e){return Array.from(new Set(e.flatMap(a=>typeof a=="string"?a.split(" "):[]))).filter(Boolean).join(" ")}function ml(e,a,...l){if(e in a){let s=a[e];return typeof s=="function"?s(...l):s}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ml),n}var Wi=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Wi||{}),El=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(El||{});function Mt(){let e=Rb();return u.useCallback(a=>Mb({mergeRefs:e,...a}),[e])}function Mb({ourProps:e,theirProps:a,slot:l,defaultTag:n,features:s,visible:r=!0,name:i,mergeRefs:o}){o=o??Tb;let c=jf(a,e);if(r)return Pr(c,l,n,i,o);let d=s??0;if(d&2){let{static:m=!1,...f}=c;if(m)return Pr(f,l,n,i,o)}if(d&1){let{unmount:m=!0,...f}=c;return ml(m?0:1,{0(){return null},1(){return Pr({...f,hidden:!0,style:{display:"none"}},l,n,i,o)}})}return Pr(c,l,n,i,o)}function Pr(e,a={},l,n,s){let{as:r=l,children:i,refName:o="ref",...c}=gc(e,["unmount","static"]),d=e.ref!==void 0?{[o]:e.ref}:{},m=typeof i=="function"?i(a):i;"className"in c&&c.className&&typeof c.className=="function"&&(c.className=c.className(a)),c["aria-labelledby"]&&c["aria-labelledby"]===c.id&&(c["aria-labelledby"]=void 0);let f={};if(a){let p=!1,x=[];for(let[y,j]of Object.entries(a))typeof j=="boolean"&&(p=!0),j===!0&&x.push(y.replace(/([A-Z])/g,w=>`-${w.toLowerCase()}`));if(p){f["data-headlessui-state"]=x.join(" ");for(let y of x)f[`data-${y}`]=""}}if(Qs(r)&&(Object.keys(nn(c)).length>0||Object.keys(nn(f)).length>0))if(!u.isValidElement(m)||Array.isArray(m)&&m.length>1||Eb(m)){if(Object.keys(nn(c)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(nn(c)).concat(Object.keys(nn(f))).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`))}else{let p=m.props,x=p==null?void 0:p.className,y=typeof x=="function"?(...b)=>Nd(x(...b),c.className):Nd(x,c.className),j=y?{className:y}:{},w=jf(m.props,nn(gc(c,["ref"])));for(let b in f)b in w&&delete f[b];return u.cloneElement(m,Object.assign({},w,f,d,{ref:s(Ab(m),d.ref)},j))}return u.createElement(r,Object.assign({},gc(c,["ref"]),!Qs(r)&&d,!Qs(r)&&f),m)}function Rb(){let e=u.useRef([]),a=u.useCallback(l=>{for(let n of e.current)n!=null&&(typeof n=="function"?n(l):n.current=l)},[]);return(...l)=>{if(!l.every(n=>n==null))return e.current=l,a}}function Tb(...e){return e.every(a=>a==null)?void 0:a=>{for(let l of e)l!=null&&(typeof l=="function"?l(a):l.current=a)}}function jf(...e){if(e.length===0)return{};if(e.length===1)return e[0];let a={},l={};for(let n of e)for(let s in n)s.startsWith("on")&&typeof n[s]=="function"?(l[s]!=null||(l[s]=[]),l[s].push(n[s])):a[s]=n[s];if(a.disabled||a["aria-disabled"])for(let n in l)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n)&&(l[n]=[s=>{var r;return(r=s==null?void 0:s.preventDefault)==null?void 0:r.call(s)}]);for(let n in l)Object.assign(a,{[n](s,...r){let i=l[n];for(let o of i){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;o(s,...r)}}});return a}function lt(e){var a;return Object.assign(u.forwardRef(e),{displayName:(a=e.displayName)!=null?a:e.name})}function nn(e){let a=Object.assign({},e);for(let l in a)a[l]===void 0&&delete a[l];return a}function gc(e,a=[]){let l=Object.assign({},e);for(let n of a)n in l&&delete l[n];return l}function Ab(e){return ee.version.split(".")[0]>="19"?e.props.ref:e.ref}function Qs(e){return e===u.Fragment||e===Symbol.for("react.fragment")}function Eb(e){return Qs(e.type)}let Db="span";var Gi=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Gi||{});function Bb(e,a){var l;let{features:n=1,...s}=e,r={ref:a,"aria-hidden":(n&2)===2?!0:(l=s["aria-hidden"])!=null?l:void 0,hidden:(n&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return Mt()({ourProps:r,theirProps:s,slot:{},defaultTag:Db,name:"Hidden"})}let Sd=lt(Bb);function _b(e){return typeof e!="object"||e===null?!1:"nodeType"in e}function Wl(e){return _b(e)&&"tagName"in e}function xn(e){return Wl(e)&&"accessKey"in e}function Dl(e){return Wl(e)&&"tabIndex"in e}function Lb(e){return Wl(e)&&"style"in e}function Hb(e){return xn(e)&&e.nodeName==="IFRAME"}function Ob(e){return xn(e)&&e.nodeName==="INPUT"}let wf=Symbol();function Vb(e,a=!0){return Object.assign(e,{[wf]:a})}function Wt(...e){let a=u.useRef(e);u.useEffect(()=>{a.current=e},[e]);let l=Ge(n=>{for(let s of a.current)s!=null&&(typeof s=="function"?s(n):s.current=n)});return e.every(n=>n==null||(n==null?void 0:n[wf]))?void 0:l}let Gu=u.createContext(null);Gu.displayName="DescriptionContext";function Nf(){let e=u.useContext(Gu);if(e===null){let a=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,Nf),a}return e}function $b(){let[e,a]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(l){let n=Ge(r=>(a(i=>[...i,r]),()=>a(i=>{let o=i.slice(),c=o.indexOf(r);return c!==-1&&o.splice(c,1),o}))),s=u.useMemo(()=>({register:n,slot:l.slot,name:l.name,props:l.props,value:l.value}),[n,l.slot,l.name,l.props,l.value]);return ee.createElement(Gu.Provider,{value:s},l.children)},[a])]}let Ub="p";function qb(e,a){let l=u.useId(),n=kb(),{id:s=`headlessui-description-${l}`,...r}=e,i=Nf(),o=Wt(a);et(()=>i.register(s),[s,i.register]);let c=kr({...i.slot,disabled:n||!1}),d={ref:o,...i.props,id:s};return Mt()({ourProps:d,theirProps:r,slot:c,defaultTag:Ub,name:i.name||"Description"})}let Yb=lt(qb),Wb=Object.assign(Yb,{});var Sf=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Sf||{});let Gb=u.createContext(()=>{});function Xb({value:e,children:a}){return ee.createElement(Gb.Provider,{value:e},a)}let zf=class extends Map{constructor(a){super(),this.factory=a}get(a){let l=super.get(a);return l===void 0&&(l=this.factory(a),this.set(a,l)),l}};var Qb=Object.defineProperty,Fb=(e,a,l)=>a in e?Qb(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,Pb=(e,a,l)=>(Fb(e,a+"",l),l),Cf=(e,a,l)=>{if(!a.has(e))throw TypeError("Cannot "+l)},vt=(e,a,l)=>(Cf(e,a,"read from private field"),l?l.call(e):a.get(e)),vc=(e,a,l)=>{if(a.has(e))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(e):a.set(e,l)},Om=(e,a,l,n)=>(Cf(e,a,"write to private field"),a.set(e,l),l),Bt,Ts,As;let Zb=class{constructor(a){vc(this,Bt,{}),vc(this,Ts,new zf(()=>new Set)),vc(this,As,new Set),Pb(this,"disposables",pl()),Om(this,Bt,a),Ut.isServer&&this.disposables.microTask(()=>{this.dispose()})}dispose(){this.disposables.dispose()}get state(){return vt(this,Bt)}subscribe(a,l){if(Ut.isServer)return()=>{};let n={selector:a,callback:l,current:a(vt(this,Bt))};return vt(this,As).add(n),this.disposables.add(()=>{vt(this,As).delete(n)})}on(a,l){return Ut.isServer?()=>{}:(vt(this,Ts).get(a).add(l),this.disposables.add(()=>{vt(this,Ts).get(a).delete(l)}))}send(a){let l=this.reduce(vt(this,Bt),a);if(l!==vt(this,Bt)){Om(this,Bt,l);for(let n of vt(this,As)){let s=n.selector(vt(this,Bt));kf(n.current,s)||(n.current=s,n.callback(s))}for(let n of vt(this,Ts).get(a.type))n(vt(this,Bt),a)}}};Bt=new WeakMap,Ts=new WeakMap,As=new WeakMap;function kf(e,a){return Object.is(e,a)?!0:typeof e!="object"||e===null||typeof a!="object"||a===null?!1:Array.isArray(e)&&Array.isArray(a)?e.length!==a.length?!1:xc(e[Symbol.iterator](),a[Symbol.iterator]()):e instanceof Map&&a instanceof Map||e instanceof Set&&a instanceof Set?e.size!==a.size?!1:xc(e.entries(),a.entries()):Vm(e)&&Vm(a)?xc(Object.entries(e)[Symbol.iterator](),Object.entries(a)[Symbol.iterator]()):!1}function xc(e,a){do{let l=e.next(),n=a.next();if(l.done&&n.done)return!0;if(l.done||n.done||!Object.is(l.value,n.value))return!1}while(!0)}function Vm(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let a=Object.getPrototypeOf(e);return a===null||Object.getPrototypeOf(a)===null}var Kb=Object.defineProperty,Jb=(e,a,l)=>a in e?Kb(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,$m=(e,a,l)=>(Jb(e,typeof a!="symbol"?a+"":a,l),l),Ib=(e=>(e[e.Push=0]="Push",e[e.Pop=1]="Pop",e))(Ib||{});let ey={0(e,a){let l=a.id,n=e.stack,s=e.stack.indexOf(l);if(s!==-1){let r=e.stack.slice();return r.splice(s,1),r.push(l),n=r,{...e,stack:n}}return{...e,stack:[...e.stack,l]}},1(e,a){let l=a.id,n=e.stack.indexOf(l);if(n===-1)return e;let s=e.stack.slice();return s.splice(n,1),{...e,stack:s}}},ay=class Mf extends Zb{constructor(){super(...arguments),$m(this,"actions",{push:a=>this.send({type:0,id:a}),pop:a=>this.send({type:1,id:a})}),$m(this,"selectors",{isTop:(a,l)=>a.stack[a.stack.length-1]===l,inStack:(a,l)=>a.stack.includes(l)})}static new(){return new Mf({stack:[]})}reduce(a,l){return ml(l.type,ey,a,l)}};const Rf=new zf(()=>ay.new());var Tf={exports:{}},Af={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=u;function ty(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ly=typeof Object.is=="function"?Object.is:ty,ny=Mr.useSyncExternalStore,sy=Mr.useRef,ry=Mr.useEffect,iy=Mr.useMemo,oy=Mr.useDebugValue;Af.useSyncExternalStoreWithSelector=function(e,a,l,n,s){var r=sy(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=iy(function(){function c(x){if(!d){if(d=!0,m=x,x=n(x),s!==void 0&&i.hasValue){var y=i.value;if(s(y,x))return f=y}return f=x}if(y=f,ly(m,x))return y;var j=n(x);return s!==void 0&&s(y,j)?(m=x,y):(m=x,f=j)}var d=!1,m,f,p=l===void 0?null:l;return[function(){return c(a())},p===null?void 0:function(){return c(p())}]},[a,l,n,s]);var o=ny(e,r[0],r[1]);return ry(function(){i.hasValue=!0,i.value=o},[o]),oy(o),o};Tf.exports=Af;var cy=Tf.exports;function Ef(e,a,l=kf){return cy.useSyncExternalStoreWithSelector(Ge(n=>e.subscribe(dy,n)),Ge(()=>e.state),Ge(()=>e.state),Ge(a),l)}function dy(e){return e}function Rr(e,a){let l=u.useId(),n=Rf.get(a),[s,r]=Ef(n,u.useCallback(i=>[n.selectors.isTop(i,l),n.selectors.inStack(i,l)],[n,l]));return et(()=>{if(e)return n.actions.push(l),()=>n.actions.pop(l)},[n,e,l]),e?r?s:!0:!1}let zd=new Map,Fs=new Map;function Um(e){var a;let l=(a=Fs.get(e))!=null?a:0;return Fs.set(e,l+1),l!==0?()=>qm(e):(zd.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>qm(e))}function qm(e){var a;let l=(a=Fs.get(e))!=null?a:1;if(l===1?Fs.delete(e):Fs.set(e,l-1),l!==1)return;let n=zd.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,zd.delete(e))}function uy(e,{allowed:a,disallowed:l}={}){let n=Rr(e,"inert-others");et(()=>{var s,r;if(!n)return;let i=pl();for(let c of(s=l==null?void 0:l())!=null?s:[])c&&i.add(Um(c));let o=(r=a==null?void 0:a())!=null?r:[];for(let c of o){if(!c)continue;let d=Cr(c);if(!d)continue;let m=c.parentElement;for(;m&&m!==d.body;){for(let f of m.children)o.some(p=>f.contains(p))||i.add(Um(f));m=m.parentElement}}return i.dispose},[n,a,l])}function my(e,a,l){let n=zn(s=>{let r=s.getBoundingClientRect();r.x===0&&r.y===0&&r.width===0&&r.height===0&&l()});u.useEffect(()=>{if(!e)return;let s=a===null?null:xn(a)?a:a.current;if(!s)return;let r=pl();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>n.current(s));i.observe(s),r.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>n.current(s));i.observe(s),r.add(()=>i.disconnect())}return()=>r.dispose()},[a,n,e])}let Xi=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),hy=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var It=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(It||{}),Cd=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Cd||{}),py=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(py||{});function fy(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Xi)).sort((a,l)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}function gy(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(hy)).sort((a,l)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}var Df=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Df||{});function vy(e,a=0){var l;return e===((l=Cr(e))==null?void 0:l.body)?!1:ml(a,{0(){return e.matches(Xi)},1(){let n=e;for(;n!==null;){if(n.matches(Xi))return!0;n=n.parentElement}return!1}})}var xy=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(xy||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function rl(e){e==null||e.focus({preventScroll:!0})}let by=["textarea","input"].join(",");function yy(e){var a,l;return(l=(a=e==null?void 0:e.matches)==null?void 0:a.call(e,by))!=null?l:!1}function jy(e,a=l=>l){return e.slice().sort((l,n)=>{let s=a(l),r=a(n);if(s===null||r===null)return 0;let i=s.compareDocumentPosition(r);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ps(e,a,{sorted:l=!0,relativeTo:n=null,skipElements:s=[]}={}){let r=Array.isArray(e)?e.length>0?wd(e[0]):document:wd(e),i=Array.isArray(e)?l?jy(e):e:a&64?gy(e):fy(e);s.length>0&&i.length>1&&(i=i.filter(x=>!s.some(y=>y!=null&&"current"in y?(y==null?void 0:y.current)===x:y===x))),n=n??(r==null?void 0:r.activeElement);let o=(()=>{if(a&5)return 1;if(a&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(a&1)return 0;if(a&2)return Math.max(0,i.indexOf(n))-1;if(a&4)return Math.max(0,i.indexOf(n))+1;if(a&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=a&32?{preventScroll:!0}:{},m=0,f=i.length,p;do{if(m>=f||m+f<=0)return 0;let x=c+m;if(a&16)x=(x+f)%f;else{if(x<0)return 3;if(x>=f)return 1}p=i[x],p==null||p.focus(d),m+=o}while(p!==yf(p));return a&6&&yy(p)&&p.select(),2}function Bf(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function wy(){return/Android/gi.test(window.navigator.userAgent)}function Ym(){return Bf()||wy()}function Zr(e,a,l,n){let s=zn(l);u.useEffect(()=>{if(!e)return;function r(i){s.current(i)}return document.addEventListener(a,r,n),()=>document.removeEventListener(a,r,n)},[e,a,n])}function _f(e,a,l,n){let s=zn(l);u.useEffect(()=>{if(!e)return;function r(i){s.current(i)}return window.addEventListener(a,r,n),()=>window.removeEventListener(a,r,n)},[e,a,n])}const Wm=30;function Ny(e,a,l){let n=zn(l),s=u.useCallback(function(o,c){if(o.defaultPrevented)return;let d=c(o);if(d===null||!d.getRootNode().contains(d)||!d.isConnected)return;let m=function f(p){return typeof p=="function"?f(p()):Array.isArray(p)||p instanceof Set?p:[p]}(a);for(let f of m)if(f!==null&&(f.contains(d)||o.composed&&o.composedPath().includes(f)))return;return!vy(d,Df.Loose)&&d.tabIndex!==-1&&o.preventDefault(),n.current(o,d)},[n,a]),r=u.useRef(null);Zr(e,"pointerdown",o=>{var c,d;Ym()||(r.current=((d=(c=o.composedPath)==null?void 0:c.call(o))==null?void 0:d[0])||o.target)},!0),Zr(e,"pointerup",o=>{if(Ym()||!r.current)return;let c=r.current;return r.current=null,s(o,()=>c)},!0);let i=u.useRef({x:0,y:0});Zr(e,"touchstart",o=>{i.current.x=o.touches[0].clientX,i.current.y=o.touches[0].clientY},!0),Zr(e,"touchend",o=>{let c={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};if(!(Math.abs(c.x-i.current.x)>=Wm||Math.abs(c.y-i.current.y)>=Wm))return s(o,()=>Dl(o.target)?o.target:null)},!0),_f(e,"blur",o=>s(o,()=>Hb(window.document.activeElement)?window.document.activeElement:null),!0)}function Xu(...e){return u.useMemo(()=>Cr(...e),[...e])}function Lf(e,a,l,n){let s=zn(l);u.useEffect(()=>{e=e??window;function r(i){s.current(i)}return e.addEventListener(a,r,n),()=>e.removeEventListener(a,r,n)},[e,a,n])}function Sy(e){return u.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function zy(e,a){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(s){return n.add(s),()=>n.delete(s)},dispatch(s,...r){let i=a[s].call(l,...r);i&&(l=i,n.forEach(o=>o()))}}}function Cy(){let e;return{before({doc:a}){var l;let n=a.documentElement,s=(l=a.defaultView)!=null?l:window;e=Math.max(0,s.innerWidth-n.clientWidth)},after({doc:a,d:l}){let n=a.documentElement,s=Math.max(0,n.clientWidth-n.offsetWidth),r=Math.max(0,e-s);l.style(n,"paddingRight",`${r}px`)}}}function ky(){return Bf()?{before({doc:e,d:a,meta:l}){function n(s){for(let r of l().containers)for(let i of r())if(i.contains(s))return!0;return!1}a.microTask(()=>{var s;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let o=pl();o.style(e.documentElement,"scrollBehavior","auto"),a.add(()=>a.microTask(()=>o.dispose()))}let r=(s=window.scrollY)!=null?s:window.pageYOffset,i=null;a.addEventListener(e,"click",o=>{if(Dl(o.target))try{let c=o.target.closest("a");if(!c)return;let{hash:d}=new URL(c.href),m=e.querySelector(d);Dl(m)&&!n(m)&&(i=m)}catch{}},!0),a.group(o=>{a.addEventListener(e,"touchstart",c=>{if(o.dispose(),Dl(c.target)&&Lb(c.target))if(n(c.target)){let d=c.target;for(;d.parentElement&&n(d.parentElement);)d=d.parentElement;o.style(d,"overscrollBehavior","contain")}else o.style(c.target,"touchAction","none")})}),a.addEventListener(e,"touchmove",o=>{if(Dl(o.target)){if(Ob(o.target))return;if(n(o.target)){let c=o.target;for(;c.parentElement&&c.dataset.headlessuiPortal!==""&&!(c.scrollHeight>c.clientHeight||c.scrollWidth>c.clientWidth);)c=c.parentElement;c.dataset.headlessuiPortal===""&&o.preventDefault()}else o.preventDefault()}},{passive:!1}),a.add(()=>{var o;let c=(o=window.scrollY)!=null?o:window.pageYOffset;r!==c&&window.scrollTo(0,r),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function My(){return{before({doc:e,d:a}){a.style(e.documentElement,"overflow","hidden")}}}function Gm(e){let a={};for(let l of e)Object.assign(a,l(a));return a}let rn=zy(()=>new Map,{PUSH(e,a){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:pl(),meta:new Set,computedMeta:{}};return n.count++,n.meta.add(a),n.computedMeta=Gm(n.meta),this.set(e,n),this},POP(e,a){let l=this.get(e);return l&&(l.count--,l.meta.delete(a),l.computedMeta=Gm(l.meta)),this},SCROLL_PREVENT(e){let a={doc:e.doc,d:e.d,meta(){return e.computedMeta}},l=[ky(),Cy(),My()];l.forEach(({before:n})=>n==null?void 0:n(a)),l.forEach(({after:n})=>n==null?void 0:n(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});rn.subscribe(()=>{let e=rn.getSnapshot(),a=new Map;for(let[l]of e)a.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=a.get(l.doc)==="hidden",s=l.count!==0;(s&&!n||!s&&n)&&rn.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&rn.dispatch("TEARDOWN",l)}});function Ry(e,a,l=()=>({containers:[]})){let n=Sy(rn),s=a?n.get(a):void 0,r=s?s.count>0:!1;return et(()=>{if(!(!a||!e))return rn.dispatch("PUSH",a,l),()=>rn.dispatch("POP",a,l)},[e,a]),r}function Ty(e,a,l=()=>[document.body]){let n=Rr(e,"scroll-lock");Ry(n,a,s=>{var r;return{containers:[...(r=s.containers)!=null?r:[],l]}})}function Ay(e=0){let[a,l]=u.useState(e),n=u.useCallback(c=>l(c),[]),s=u.useCallback(c=>l(d=>d|c),[]),r=u.useCallback(c=>(a&c)===c,[a]),i=u.useCallback(c=>l(d=>d&~c),[]),o=u.useCallback(c=>l(d=>d^c),[]);return{flags:a,setFlag:n,addFlag:s,hasFlag:r,removeFlag:i,toggleFlag:o}}var Ey={},Xm,Qm;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Xm=process==null?void 0:Ey)==null?void 0:Xm.NODE_ENV)==="test"&&typeof((Qm=Element==null?void 0:Element.prototype)==null?void 0:Qm.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var Dy=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(Dy||{});function By(e){let a={};for(let l in e)e[l]===!0&&(a[`data-${l}`]="");return a}function _y(e,a,l,n){let[s,r]=u.useState(l),{hasFlag:i,addFlag:o,removeFlag:c}=Ay(e&&s?3:0),d=u.useRef(!1),m=u.useRef(!1),f=xo();return et(()=>{var p;if(e){if(l&&r(!0),!a){l&&o(3);return}return(p=n==null?void 0:n.start)==null||p.call(n,l),Ly(a,{inFlight:d,prepare(){m.current?m.current=!1:m.current=d.current,d.current=!0,!m.current&&(l?(o(3),c(4)):(o(4),c(2)))},run(){m.current?l?(c(3),o(4)):(c(4),o(3)):l?c(1):o(1)},done(){var x;m.current&&Vy(a)||(d.current=!1,c(7),l||r(!1),(x=n==null?void 0:n.end)==null||x.call(n,l))}})}},[e,l,a,f]),e?[s,{closed:i(1),enter:i(2),leave:i(4),transition:i(2)||i(4)}]:[l,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Ly(e,{prepare:a,run:l,done:n,inFlight:s}){let r=pl();return Oy(e,{prepare:a,inFlight:s}),r.nextFrame(()=>{l(),r.requestAnimationFrame(()=>{r.add(Hy(e,n))})}),r.dispose}function Hy(e,a){var l,n;let s=pl();if(!e)return s.dispose;let r=!1;s.add(()=>{r=!0});let i=(n=(l=e.getAnimations)==null?void 0:l.call(e).filter(o=>o instanceof CSSTransition))!=null?n:[];return i.length===0?(a(),s.dispose):(Promise.allSettled(i.map(o=>o.finished)).then(()=>{r||a()}),s.dispose)}function Oy(e,{inFlight:a,prepare:l}){if(a!=null&&a.current){l();return}let n=e.style.transition;e.style.transition="none",l(),e.offsetHeight,e.style.transition=n}function Vy(e){var a,l;return((l=(a=e.getAnimations)==null?void 0:a.call(e))!=null?l:[]).some(n=>n instanceof CSSTransition&&n.playState!=="finished")}function Qu(e,a){let l=u.useRef([]),n=Ge(e);u.useEffect(()=>{let s=[...l.current];for(let[r,i]of a.entries())if(l.current[r]!==i){let o=n(a,s);return l.current=a,o}},[n,...a])}let bo=u.createContext(null);bo.displayName="OpenClosedContext";var At=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(At||{});function yo(){return u.useContext(bo)}function $y({value:e,children:a}){return ee.createElement(bo.Provider,{value:e},a)}function Uy({children:e}){return ee.createElement(bo.Provider,{value:null},e)}function qy(e){function a(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",a))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",a),a())}let Sl=[];qy(()=>{function e(a){if(!Dl(a.target)||a.target===document.body||Sl[0]===a.target)return;let l=a.target;l=l.closest(Xi),Sl.unshift(l??a.target),Sl=Sl.filter(n=>n!=null&&n.isConnected),Sl.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Hf(e){let a=Ge(e),l=u.useRef(!1);u.useEffect(()=>(l.current=!1,()=>{l.current=!0,vo(()=>{l.current&&a()})}),[a])}let Of=u.createContext(!1);function Yy(){return u.useContext(Of)}function Fm(e){return ee.createElement(Of.Provider,{value:e.force},e.children)}function Wy(e){let a=Yy(),l=u.useContext($f),[n,s]=u.useState(()=>{var r;if(!a&&l!==null)return(r=l.current)!=null?r:null;if(Ut.isServer)return null;let i=e==null?void 0:e.getElementById("headlessui-portal-root");if(i)return i;if(e===null)return null;let o=e.createElement("div");return o.setAttribute("id","headlessui-portal-root"),e.body.appendChild(o)});return u.useEffect(()=>{n!==null&&(e!=null&&e.body.contains(n)||e==null||e.body.appendChild(n))},[n,e]),u.useEffect(()=>{a||l!==null&&s(l.current)},[l,s,a]),n}let Vf=u.Fragment,Gy=lt(function(e,a){let{ownerDocument:l=null,...n}=e,s=u.useRef(null),r=Wt(Vb(p=>{s.current=p}),a),i=Xu(s.current),o=l??i,c=Wy(o),d=u.useContext(kd),m=xo(),f=Mt();return Hf(()=>{var p;c&&c.childNodes.length<=0&&((p=c.parentElement)==null||p.removeChild(c))}),c?Fd.createPortal(ee.createElement("div",{"data-headlessui-portal":"",ref:p=>{m.dispose(),d&&p&&m.add(d.register(p))}},f({ourProps:{ref:r},theirProps:n,slot:{},defaultTag:Vf,name:"Portal"})),c):null});function Xy(e,a){let l=Wt(a),{enabled:n=!0,ownerDocument:s,...r}=e,i=Mt();return n?ee.createElement(Gy,{...r,ownerDocument:s,ref:l}):i({ourProps:{ref:l},theirProps:r,slot:{},defaultTag:Vf,name:"Portal"})}let Qy=u.Fragment,$f=u.createContext(null);function Fy(e,a){let{target:l,...n}=e,s={ref:Wt(a)},r=Mt();return ee.createElement($f.Provider,{value:l},r({ourProps:s,theirProps:n,defaultTag:Qy,name:"Popover.Group"}))}let kd=u.createContext(null);function Py(){let e=u.useContext(kd),a=u.useRef([]),l=Ge(r=>(a.current.push(r),e&&e.register(r),()=>n(r))),n=Ge(r=>{let i=a.current.indexOf(r);i!==-1&&a.current.splice(i,1),e&&e.unregister(r)}),s=u.useMemo(()=>({register:l,unregister:n,portals:a}),[l,n,a]);return[a,u.useMemo(()=>function({children:r}){return ee.createElement(kd.Provider,{value:s},r)},[s])]}let Zy=lt(Xy),Uf=lt(Fy),Ky=Object.assign(Zy,{Group:Uf});function Jy(e,a=typeof document<"u"?document.defaultView:null,l){let n=Rr(e,"escape");Lf(a,"keydown",s=>{n&&(s.defaultPrevented||s.key===Sf.Escape&&l(s))})}function Iy(){var e;let[a]=u.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[l,n]=u.useState((e=a==null?void 0:a.matches)!=null?e:!1);return et(()=>{if(!a)return;function s(r){n(r.matches)}return a.addEventListener("change",s),()=>a.removeEventListener("change",s)},[a]),l}function ej({defaultContainers:e=[],portals:a,mainTreeNode:l}={}){let n=Ge(()=>{var s,r;let i=Cr(l),o=[];for(let c of e)c!==null&&(Wl(c)?o.push(c):"current"in c&&Wl(c.current)&&o.push(c.current));if(a!=null&&a.current)for(let c of a.current)o.push(c);for(let c of(s=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?s:[])c!==document.body&&c!==document.head&&Wl(c)&&c.id!=="headlessui-portal-root"&&(l&&(c.contains(l)||c.contains((r=l==null?void 0:l.getRootNode())==null?void 0:r.host))||o.some(d=>c.contains(d))||o.push(c));return o});return{resolveContainers:n,contains:Ge(s=>n().some(r=>r.contains(s)))}}let qf=u.createContext(null);function Pm({children:e,node:a}){let[l,n]=u.useState(null),s=Yf(a??l);return ee.createElement(qf.Provider,{value:s},e,s===null&&ee.createElement(Sd,{features:Gi.Hidden,ref:r=>{var i,o;if(r){for(let c of(o=(i=Cr(r))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?o:[])if(c!==document.body&&c!==document.head&&Wl(c)&&c!=null&&c.contains(r)){n(c);break}}}}))}function Yf(e=null){var a;return(a=u.useContext(qf))!=null?a:e}function aj(){let e=typeof document>"u";return"useSyncExternalStore"in wc?(a=>a.useSyncExternalStore)(wc)(()=>()=>{},()=>!1,()=>!e):!1}function jo(){let e=aj(),[a,l]=u.useState(Ut.isHandoffComplete);return a&&Ut.isHandoffComplete===!1&&l(!1),u.useEffect(()=>{a!==!0&&l(!0)},[a]),u.useEffect(()=>Ut.handoff(),[]),e?!1:a}function Fu(){let e=u.useRef(!1);return et(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var Es=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Es||{});function tj(){let e=u.useRef(0);return _f(!0,"keydown",a=>{a.key==="Tab"&&(e.current=a.shiftKey?1:0)},!0),e}function Wf(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let a=new Set;for(let l of e.current)Wl(l.current)&&a.add(l.current);return a}let lj="div";var sn=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(sn||{});function nj(e,a){let l=u.useRef(null),n=Wt(l,a),{initialFocus:s,initialFocusFallback:r,containers:i,features:o=15,...c}=e;jo()||(o=0);let d=Xu(l.current);oj(o,{ownerDocument:d});let m=cj(o,{ownerDocument:d,container:l,initialFocus:s,initialFocusFallback:r});dj(o,{ownerDocument:d,container:l,containers:i,previousActiveElement:m});let f=tj(),p=Ge(v=>{if(!xn(l.current))return;let h=l.current;(g=>g())(()=>{ml(f.current,{[Es.Forwards]:()=>{Ps(h,It.First,{skipElements:[v.relatedTarget,r]})},[Es.Backwards]:()=>{Ps(h,It.Last,{skipElements:[v.relatedTarget,r]})}})})}),x=Rr(!!(o&2),"focus-trap#tab-lock"),y=xo(),j=u.useRef(!1),w={ref:n,onKeyDown(v){v.key=="Tab"&&(j.current=!0,y.requestAnimationFrame(()=>{j.current=!1}))},onBlur(v){if(!(o&4))return;let h=Wf(i);xn(l.current)&&h.add(l.current);let g=v.relatedTarget;Dl(g)&&g.dataset.headlessuiFocusGuard!=="true"&&(Gf(h,g)||(j.current?Ps(l.current,ml(f.current,{[Es.Forwards]:()=>It.Next,[Es.Backwards]:()=>It.Previous})|It.WrapAround,{relativeTo:v.target}):Dl(v.target)&&rl(v.target)))}},b=Mt();return ee.createElement(ee.Fragment,null,x&&ee.createElement(Sd,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:Gi.Focusable}),b({ourProps:w,theirProps:c,defaultTag:lj,name:"FocusTrap"}),x&&ee.createElement(Sd,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:Gi.Focusable}))}let sj=lt(nj),rj=Object.assign(sj,{features:sn});function ij(e=!0){let a=u.useRef(Sl.slice());return Qu(([l],[n])=>{n===!0&&l===!1&&vo(()=>{a.current.splice(0)}),n===!1&&l===!0&&(a.current=Sl.slice())},[e,Sl,a]),Ge(()=>{var l;return(l=a.current.find(n=>n!=null&&n.isConnected))!=null?l:null})}function oj(e,{ownerDocument:a}){let l=!!(e&8),n=ij(l);Qu(()=>{l||zb(a==null?void 0:a.body)&&rl(n())},[l]),Hf(()=>{l&&rl(n())})}function cj(e,{ownerDocument:a,container:l,initialFocus:n,initialFocusFallback:s}){let r=u.useRef(null),i=Rr(!!(e&1),"focus-trap#initial-focus"),o=Fu();return Qu(()=>{if(e===0)return;if(!i){s!=null&&s.current&&rl(s.current);return}let c=l.current;c&&vo(()=>{if(!o.current)return;let d=a==null?void 0:a.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===d){r.current=d;return}}else if(c.contains(d)){r.current=d;return}if(n!=null&&n.current)rl(n.current);else{if(e&16){if(Ps(c,It.First|It.AutoFocus)!==Cd.Error)return}else if(Ps(c,It.First)!==Cd.Error)return;if(s!=null&&s.current&&(rl(s.current),(a==null?void 0:a.activeElement)===s.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}r.current=a==null?void 0:a.activeElement})},[s,i,e]),r}function dj(e,{ownerDocument:a,container:l,containers:n,previousActiveElement:s}){let r=Fu(),i=!!(e&4);Lf(a==null?void 0:a.defaultView,"focus",o=>{if(!i||!r.current)return;let c=Wf(n);xn(l.current)&&c.add(l.current);let d=s.current;if(!d)return;let m=o.target;xn(m)?Gf(c,m)?(s.current=m,rl(m)):(o.preventDefault(),o.stopPropagation(),rl(d)):rl(s.current)},!0)}function Gf(e,a){for(let l of e)if(l.contains(a))return!0;return!1}function Xf(e){var a;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||!Qs((a=e.as)!=null?a:Ff)||ee.Children.count(e.children)===1}let wo=u.createContext(null);wo.displayName="TransitionContext";var uj=(e=>(e.Visible="visible",e.Hidden="hidden",e))(uj||{});function mj(){let e=u.useContext(wo);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function hj(){let e=u.useContext(No);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let No=u.createContext(null);No.displayName="NestingContext";function So(e){return"children"in e?So(e.children):e.current.filter(({el:a})=>a.current!==null).filter(({state:a})=>a==="visible").length>0}function Qf(e,a){let l=zn(e),n=u.useRef([]),s=Fu(),r=xo(),i=Ge((x,y=El.Hidden)=>{let j=n.current.findIndex(({el:w})=>w===x);j!==-1&&(ml(y,{[El.Unmount](){n.current.splice(j,1)},[El.Hidden](){n.current[j].state="hidden"}}),r.microTask(()=>{var w;!So(n)&&s.current&&((w=l.current)==null||w.call(l))}))}),o=Ge(x=>{let y=n.current.find(({el:j})=>j===x);return y?y.state!=="visible"&&(y.state="visible"):n.current.push({el:x,state:"visible"}),()=>i(x,El.Unmount)}),c=u.useRef([]),d=u.useRef(Promise.resolve()),m=u.useRef({enter:[],leave:[]}),f=Ge((x,y,j)=>{c.current.splice(0),a&&(a.chains.current[y]=a.chains.current[y].filter(([w])=>w!==x)),a==null||a.chains.current[y].push([x,new Promise(w=>{c.current.push(w)})]),a==null||a.chains.current[y].push([x,new Promise(w=>{Promise.all(m.current[y].map(([b,v])=>v)).then(()=>w())})]),y==="enter"?d.current=d.current.then(()=>a==null?void 0:a.wait.current).then(()=>j(y)):j(y)}),p=Ge((x,y,j)=>{Promise.all(m.current[y].splice(0).map(([w,b])=>b)).then(()=>{var w;(w=c.current.shift())==null||w()}).then(()=>j(y))});return u.useMemo(()=>({children:n,register:o,unregister:i,onStart:f,onStop:p,wait:d,chains:m}),[o,i,n,f,p,m,d])}let Ff=u.Fragment,Pf=Wi.RenderStrategy;function pj(e,a){var l,n;let{transition:s=!0,beforeEnter:r,afterEnter:i,beforeLeave:o,afterLeave:c,enter:d,enterFrom:m,enterTo:f,entered:p,leave:x,leaveFrom:y,leaveTo:j,...w}=e,[b,v]=u.useState(null),h=u.useRef(null),g=Xf(e),N=Wt(...g?[h,a,v]:a===null?[]:[a]),T=(l=w.unmount)==null||l?El.Unmount:El.Hidden,{show:z,appear:C,initial:L}=mj(),[H,M]=u.useState(z?"visible":"hidden"),B=hj(),{register:_,unregister:Y}=B;et(()=>_(h),[_,h]),et(()=>{if(T===El.Hidden&&h.current){if(z&&H!=="visible"){M("visible");return}return ml(H,{hidden:()=>Y(h),visible:()=>_(h)})}},[H,h,_,Y,z,T]);let G=jo();et(()=>{if(g&&G&&H==="visible"&&h.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[h,H,G,g]);let A=L&&!C,R=C&&z&&L,E=u.useRef(!1),U=Qf(()=>{E.current||(M("hidden"),Y(h))},B),V=Ge(le=>{E.current=!0;let ve=le?"enter":"leave";U.onStart(h,ve,xe=>{xe==="enter"?r==null||r():xe==="leave"&&(o==null||o())})}),J=Ge(le=>{let ve=le?"enter":"leave";E.current=!1,U.onStop(h,ve,xe=>{xe==="enter"?i==null||i():xe==="leave"&&(c==null||c())}),ve==="leave"&&!So(U)&&(M("hidden"),Y(h))});u.useEffect(()=>{g&&s||(V(z),J(z))},[z,g,s]);let P=!(!s||!g||!G||A),[,Z]=_y(P,b,z,{start:V,end:J}),F=nn({ref:N,className:((n=Nd(w.className,R&&d,R&&m,Z.enter&&d,Z.enter&&Z.closed&&m,Z.enter&&!Z.closed&&f,Z.leave&&x,Z.leave&&!Z.closed&&y,Z.leave&&Z.closed&&j,!Z.transition&&z&&p))==null?void 0:n.trim())||void 0,...By(Z)}),I=0;H==="visible"&&(I|=At.Open),H==="hidden"&&(I|=At.Closed),z&&H==="hidden"&&(I|=At.Opening),!z&&H==="visible"&&(I|=At.Closing);let $=Mt();return ee.createElement(No.Provider,{value:U},ee.createElement($y,{value:I},$({ourProps:F,theirProps:w,defaultTag:Ff,features:Pf,visible:H==="visible",name:"Transition.Child"})))}function fj(e,a){let{show:l,appear:n=!1,unmount:s=!0,...r}=e,i=u.useRef(null),o=Xf(e),c=Wt(...o?[i,a]:a===null?[]:[a]);jo();let d=yo();if(l===void 0&&d!==null&&(l=(d&At.Open)===At.Open),l===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,f]=u.useState(l?"visible":"hidden"),p=Qf(()=>{l||f("hidden")}),[x,y]=u.useState(!0),j=u.useRef([l]);et(()=>{x!==!1&&j.current[j.current.length-1]!==l&&(j.current.push(l),y(!1))},[j,l]);let w=u.useMemo(()=>({show:l,appear:n,initial:x}),[l,n,x]);et(()=>{l?f("visible"):!So(p)&&i.current!==null&&f("hidden")},[l,p]);let b={unmount:s},v=Ge(()=>{var N;x&&y(!1),(N=e.beforeEnter)==null||N.call(e)}),h=Ge(()=>{var N;x&&y(!1),(N=e.beforeLeave)==null||N.call(e)}),g=Mt();return ee.createElement(No.Provider,{value:p},ee.createElement(wo.Provider,{value:w},g({ourProps:{...b,as:u.Fragment,children:ee.createElement(Zf,{ref:c,...b,...r,beforeEnter:v,beforeLeave:h})},theirProps:{},defaultTag:u.Fragment,features:Pf,visible:m==="visible",name:"Transition"})))}function gj(e,a){let l=u.useContext(wo)!==null,n=yo()!==null;return ee.createElement(ee.Fragment,null,!l&&n?ee.createElement(Md,{ref:a,...e}):ee.createElement(Zf,{ref:a,...e}))}let Md=lt(fj),Zf=lt(pj),mr=lt(gj),Pu=Object.assign(Md,{Child:mr,Root:Md});var vj=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vj||{}),xj=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(xj||{});let bj={0(e,a){return e.titleId===a.id?e:{...e,titleId:a.id}}},Zu=u.createContext(null);Zu.displayName="DialogContext";function zo(e){let a=u.useContext(Zu);if(a===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,zo),l}return a}function yj(e,a){return ml(a.type,bj,e,a)}let Zm=lt(function(e,a){let l=u.useId(),{id:n=`headlessui-dialog-${l}`,open:s,onClose:r,initialFocus:i,role:o="dialog",autoFocus:c=!0,__demoMode:d=!1,unmount:m=!1,...f}=e,p=u.useRef(!1);o=function(){return o==="dialog"||o==="alertdialog"?o:(p.current||(p.current=!0,console.warn(`Invalid role [${o}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let x=yo();s===void 0&&x!==null&&(s=(x&At.Open)===At.Open);let y=u.useRef(null),j=Wt(y,a),w=Xu(y.current),b=s?0:1,[v,h]=u.useReducer(yj,{titleId:null,descriptionId:null,panelRef:u.createRef()}),g=Ge(()=>r(!1)),N=Ge(Z=>h({type:0,id:Z})),T=jo()?b===0:!1,[z,C]=Py(),L={get current(){var Z;return(Z=v.panelRef.current)!=null?Z:y.current}},H=Yf(),{resolveContainers:M}=ej({mainTreeNode:H,portals:z,defaultContainers:[L]}),B=x!==null?(x&At.Closing)===At.Closing:!1;uy(d||B?!1:T,{allowed:Ge(()=>{var Z,F;return[(F=(Z=y.current)==null?void 0:Z.closest("[data-headlessui-portal]"))!=null?F:null]}),disallowed:Ge(()=>{var Z;return[(Z=H==null?void 0:H.closest("body > *:not(#headlessui-portal-root)"))!=null?Z:null]})});let _=Rf.get(null);et(()=>{if(T)return _.actions.push(n),()=>_.actions.pop(n)},[_,n,T]);let Y=Ef(_,u.useCallback(Z=>_.selectors.isTop(Z,n),[_,n]));Ny(Y,M,Z=>{Z.preventDefault(),g()}),Jy(Y,w==null?void 0:w.defaultView,Z=>{Z.preventDefault(),Z.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),g()}),Ty(d||B?!1:T,w,M),my(T,y,g);let[G,A]=$b(),R=u.useMemo(()=>[{dialogState:b,close:g,setTitleId:N,unmount:m},v],[b,g,N,m,v]),E=kr({open:b===0}),U={ref:j,id:n,role:o,tabIndex:-1,"aria-modal":d?void 0:b===0?!0:void 0,"aria-labelledby":v.titleId,"aria-describedby":G,unmount:m},V=!Iy(),J=sn.None;T&&!d&&(J|=sn.RestoreFocus,J|=sn.TabLock,c&&(J|=sn.AutoFocus),V&&(J|=sn.InitialFocus));let P=Mt();return ee.createElement(Uy,null,ee.createElement(Fm,{force:!0},ee.createElement(Ky,null,ee.createElement(Zu.Provider,{value:R},ee.createElement(Uf,{target:y},ee.createElement(Fm,{force:!1},ee.createElement(A,{slot:E},ee.createElement(C,null,ee.createElement(rj,{initialFocus:i,initialFocusFallback:y,containers:M,features:J},ee.createElement(Xb,{value:g},P({ourProps:U,theirProps:f,slot:E,defaultTag:jj,features:wj,visible:b===0,name:"Dialog"})))))))))))}),jj="div",wj=Wi.RenderStrategy|Wi.Static;function Nj(e,a){let{transition:l=!1,open:n,...s}=e,r=yo(),i=e.hasOwnProperty("open")||r!==null,o=e.hasOwnProperty("onClose");if(!i&&!o)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!o)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!r&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(n!==void 0||l)&&!s.static?ee.createElement(Pm,null,ee.createElement(Pu,{show:n,transition:l,unmount:s.unmount},ee.createElement(Zm,{ref:a,...s}))):ee.createElement(Pm,null,ee.createElement(Zm,{ref:a,open:n,...s}))}let Sj="div";function zj(e,a){let l=u.useId(),{id:n=`headlessui-dialog-panel-${l}`,transition:s=!1,...r}=e,[{dialogState:i,unmount:o},c]=zo("Dialog.Panel"),d=Wt(a,c.panelRef),m=kr({open:i===0}),f=Ge(w=>{w.stopPropagation()}),p={ref:d,id:n,onClick:f},x=s?mr:u.Fragment,y=s?{unmount:o}:{},j=Mt();return ee.createElement(x,{...y},j({ourProps:p,theirProps:r,slot:m,defaultTag:Sj,name:"Dialog.Panel"}))}let Cj="div";function kj(e,a){let{transition:l=!1,...n}=e,[{dialogState:s,unmount:r}]=zo("Dialog.Backdrop"),i=kr({open:s===0}),o={ref:a,"aria-hidden":!0},c=l?mr:u.Fragment,d=l?{unmount:r}:{},m=Mt();return ee.createElement(c,{...d},m({ourProps:o,theirProps:n,slot:i,defaultTag:Cj,name:"Dialog.Backdrop"}))}let Mj="h2";function Rj(e,a){let l=u.useId(),{id:n=`headlessui-dialog-title-${l}`,...s}=e,[{dialogState:r,setTitleId:i}]=zo("Dialog.Title"),o=Wt(a);u.useEffect(()=>(i(n),()=>i(null)),[n,i]);let c=kr({open:r===0}),d={ref:o,id:n};return Mt()({ourProps:d,theirProps:s,slot:c,defaultTag:Mj,name:"Dialog.Title"})}let Tj=lt(Nj),Kf=lt(zj);lt(kj);let Aj=lt(Rj),Ej=Object.assign(Tj,{Panel:Kf,Title:Aj,Description:Wb});function Dj({children:e,show:a=!1,maxWidth:l="2xl",closeable:n=!0,onClose:s=()=>{},title:r=""}){const i=()=>{n&&s()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"};return t.jsx(Pu,{show:a,leave:"duration-200",children:t.jsxs(Ej,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:i,children:[t.jsx(mr,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),t.jsx(mr,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:t.jsxs(Kf,{className:`mb-6 transform overflow-hidden bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${o[l]}`,style:{borderRadius:"var(--radius-lg)"},children:[r&&t.jsx("div",{style:{padding:"var(--spacing-6)",borderBottom:"1px solid var(--color-neutral-200)"},children:t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:r})}),t.jsx("div",{style:{padding:"var(--spacing-6)"},children:e})]})})]})})}function Bj({show:e,onClose:a,title:l="情報",message:n,type:s="info",confirmText:r="確認",icon:i=null}){if(u.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),u.useEffect(()=>{const d=m=>{m.key==="Escape"&&e&&a()};if(e)return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,a]),!e)return null;const c=(()=>{switch(s){case"warning":return{iconBg:"bg-yellow-100",iconColor:"text-yellow-600",buttonColor:"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})};case"error":return{iconBg:"bg-red-100",iconColor:"text-red-600",buttonColor:"bg-red-600 hover:bg-red-700 focus:ring-red-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})};case"success":return{iconBg:"bg-green-100",iconColor:"text-green-600",buttonColor:"bg-green-600 hover:bg-green-700 focus:ring-green-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})};default:return{iconBg:"bg-blue-100",iconColor:"text-blue-600",buttonColor:"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",defaultIcon:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}}})();return t.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center",onClick:a,children:t.jsx("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4",onClick:d=>d.stopPropagation(),children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-start mb-4",children:[t.jsx("div",{className:`flex-shrink-0 w-10 h-10 mx-auto ${c.iconBg} rounded-full flex items-center justify-center mr-4`,children:t.jsx("div",{className:c.iconColor,children:i||c.defaultIcon})}),t.jsx("div",{className:"flex-1",children:t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:l})})]}),t.jsx("div",{className:"mb-6",children:t.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap leading-relaxed",children:n})}),t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{onClick:a,className:`px-4 py-2 ${c.buttonColor} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out`,children:r})})]})})})}function Jf({show:e,onClose:a,onConfirm:l,title:n="確認",message:s,confirmText:r="実行",cancelText:i="キャンセル",danger:o=!1,processing:c=!1}){if(u.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),!e)return null;const d=o?"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 transition duration-150 ease-in-out":"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition duration-150 ease-in-out";return t.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center",children:t.jsx("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-start mb-4",children:[o&&t.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4",children:t.jsx("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),t.jsx("div",{className:"flex-1",children:t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:n})})]}),t.jsx("div",{className:"mb-6",children:t.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap",children:s})}),t.jsxs("div",{className:"flex justify-end gap-3",children:[t.jsx("button",{onClick:a,disabled:c,className:"px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 transition duration-150 ease-in-out",children:i}),t.jsx("button",{onClick:l,disabled:c,className:d,children:c?"処理中...":r})]})]})})})}const Km=()=>{const[e,a]=u.useState(!1),[l,n]=u.useState(!1),[s,r]=u.useState(!1),[i,o]=u.useState(2),[c,d]=u.useState(!1),m=u.useRef(null),[f,p]=u.useState(!1),[x,y]=u.useState({type:"success",title:"",message:""}),[j,w]=u.useState(45),[b,v]=u.useState(75),[h,g]=u.useState(!1),[N,T]=u.useState(!1),[z,C]=u.useState(!1),[L,H]=u.useState(!1),[M,B]=u.useState(!1),[_,Y]=u.useState(!1),[G,A]=u.useState(!1),[R,E]=u.useState(!1),[U,V]=u.useState(!1),[J,P]=u.useState(!1),[Z,F]=u.useState(!1),[I,$]=u.useState(!1),[le,ve]=u.useState(!1),[xe,sa]=u.useState(!1),[ra,ia]=u.useState(!1),S=({show:ne=!1,type:Q="info",title:fe,message:fa,confirmText:Ne="確認",cancelText:Fe="キャンセル",showCancel:Pe=!0,onConfirm:Ta,onCancel:Te,onClose:ja})=>{const Ae={success:{icon:"✓",color:"#10b981",bgColor:"#ecfdf5",borderColor:"#10b981"},warning:{icon:"⚠",color:"#f59e0b",bgColor:"#fffbeb",borderColor:"#f59e0b"},danger:{icon:"✕",color:"#ef4444",bgColor:"#fef2f2",borderColor:"#ef4444"},info:{icon:"ℹ",color:"#3b82f6",bgColor:"#eff6ff",borderColor:"#3b82f6"}},Aa=Ae[Q]||Ae.info,$a=Ga=>{Ga.target===Ga.currentTarget&&ja&&ja()},Gt=()=>{Ta&&Ta(),ja&&ja()},fl=()=>{Te&&Te(),ja&&ja()};return ne?t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"var(--spacing-4)"},onClick:$a,children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius-lg)",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",maxWidth:"400px",width:"100%",maxHeight:"90vh",overflow:"auto"},children:[t.jsxs("div",{style:{padding:"var(--spacing-6)",borderBottom:"1px solid var(--color-neutral-200)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:Aa.bgColor,border:`2px solid ${Aa.borderColor}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",color:Aa.color,fontWeight:"bold"},children:Aa.icon}),t.jsx("div",{children:t.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:fe})})]}),t.jsx("div",{style:{padding:"var(--spacing-6)"},children:t.jsx("p",{style:{margin:0,fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:fa})}),t.jsxs("div",{style:{padding:"var(--spacing-6)",paddingTop:0,display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end"},children:[Pe&&t.jsx(Oa,{onClick:fl,children:Fe}),t.jsx("button",{onClick:Gt,style:{padding:"var(--spacing-2) var(--spacing-4)",borderRadius:"var(--radius-md)",border:"none",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"all 0.2s",backgroundColor:Aa.color,color:"white"},onMouseEnter:Ga=>{Ga.target.style.opacity="0.9",Ga.target.style.transform="translateY(-1px)"},onMouseLeave:Ga=>{Ga.target.style.opacity="1",Ga.target.style.transform="translateY(0)"},children:Ne})]})]})}):null},W=({show:ne,type:Q="info",message:fe,action:fa=null,actionText:Ne=null,onAction:Fe=null,onClose:Pe,autoHide:Ta=!0,duration:Te=4e3,position:ja="bottom-left"})=>{if(u.useEffect(()=>{if(ne&&Ta){const Gt=setTimeout(()=>{Pe()},Te);return()=>clearTimeout(Gt)}},[ne,Ta,Te,Pe]),!ne)return null;const Ae={success:{backgroundColor:"#d4edda",borderColor:"#c3e6cb",color:"#155724",iconColor:"#28a745"},error:{backgroundColor:"#f8d7da",borderColor:"#f5c6cb",color:"#721c24",iconColor:"#dc3545"},warning:{backgroundColor:"#fff3cd",borderColor:"#ffeaa7",color:"#856404",iconColor:"#ffc107"},info:{backgroundColor:"#d1ecf1",borderColor:"#bee5eb",color:"#0c5460",iconColor:"#17a2b8"}},Aa={"top-left":{top:"20px",left:"20px"},"top-right":{top:"20px",right:"20px"},"bottom-left":{bottom:"20px",left:"20px"},"bottom-right":{bottom:"20px",right:"20px"},"top-center":{top:"20px",left:"50%",transform:"translateX(-50%)"},"bottom-center":{bottom:"20px",left:"50%",transform:"translateX(-50%)"}},$a=()=>{switch(Q){case"success":return"✓";case"error":return"✕";case"warning":return"⚠";case"info":return"ℹ";default:return"ℹ"}};return t.jsxs("div",{style:{position:"fixed",...Aa[ja],zIndex:1e3,minWidth:"300px",maxWidth:"500px",padding:"12px 16px",backgroundColor:Ae[Q].backgroundColor,border:`1px solid ${Ae[Q].borderColor}`,borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out",fontSize:"14px",lineHeight:"1.4"},children:[t.jsx("style",{children:`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: ${ja.includes("bottom")?"translateY(100%)":"translateY(-100%)"} ${ja.includes("center")?"translateX(-50%)":""};
              }
              to {
                opacity: 1;
                transform: ${ja.includes("center")?"translateX(-50%)":"none"};
              }
            }
          `}),t.jsx("span",{style:{color:Ae[Q].iconColor,fontSize:"16px",fontWeight:"bold",flexShrink:0},children:$a()}),t.jsx("span",{style:{color:Ae[Q].color,flex:1},children:fe}),fa&&Ne&&t.jsx("button",{onClick:Fe,style:{background:"none",border:"none",color:Ae[Q].iconColor,textDecoration:"underline",cursor:"pointer",fontSize:"14px",fontWeight:"500",padding:"0",marginLeft:"8px"},children:Ne}),t.jsx("button",{onClick:Pe,style:{background:"none",border:"none",color:Ae[Q].color,cursor:"pointer",fontSize:"16px",padding:"0",marginLeft:"8px",opacity:.7,flexShrink:0},children:"×"})]})};u.useEffect(()=>{const ne=Q=>{m.current&&!m.current.contains(Q.target)&&d(!1)};if(c)return document.addEventListener("mousedown",ne),()=>{document.removeEventListener("mousedown",ne)}},[c]);const ce=({show:ne,message:Q="読み込み中..."})=>ne?t.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:9999},children:[t.jsx("div",{style:{width:"48px",height:"48px",border:"4px solid #f3f4f6",borderTop:"4px solid rgb(21, 52, 109)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),t.jsx("p",{style:{marginTop:"var(--spacing-4)",fontSize:"var(--font-size-lg)",color:"var(--color-neutral-600)",fontWeight:"var(--font-weight-medium)"},children:Q})]}):null,ie=({show:ne,onClose:Q,message:fe="処理中..."})=>ne?t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"var(--radius-lg)",padding:"var(--spacing-8)",textAlign:"center",minWidth:"300px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #f3f4f6",borderTop:"4px solid rgb(21, 52, 109)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto var(--spacing-4) auto"}}),t.jsx("h3",{style:{marginBottom:"var(--spacing-2)",fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:fe}),t.jsx("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-4)"},children:"しばらくお待ちください..."}),Q&&t.jsx("button",{onClick:Q,style:{padding:"var(--spacing-2) var(--spacing-4)",backgroundColor:"var(--color-neutral-100)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"キャンセル"})]})}):null,Wa=[{label:"総ユーザー数",value:"1,234",icon:"users",color:"primary"},{label:"アクティブセッション",value:"89",icon:"user-check",color:"success"},{label:"本日の訪問数",value:"456",icon:"eye",color:"info"},{label:"エラー率",value:"0.23%",icon:"warning",color:"warning"}],D=ne=>{const Q={primary:{bg:"#f0f4f8",text:"#2c3e50",icon:"#2c3e50"},success:{bg:"#e6f4ea",text:"#137333",icon:"#34a853"},info:{bg:"#e8f0fe",text:"#1967d2",icon:"#4285f4"},warning:{bg:"#fef7e0",text:"#7a6100",icon:"#fbbc04"}};return Q[ne]||Q.primary},K=({type:ne,message:Q,icon:fe,onClose:fa})=>{const Ne={success:{bg:"#dcfce7",border:"#bbf7d0",text:"#15803d",iconColor:"#16a34a"},info:{bg:"#dbeafe",border:"#bfdbfe",text:"#1e40af",iconColor:"#3b82f6"},warning:{bg:"#fef3c7",border:"#fde68a",text:"#92400e",iconColor:"#f59e0b"},danger:{bg:"#fecaca",border:"#fecaca",text:"#b91c1c",iconColor:"#ef4444"}},Fe=Ne[ne]||Ne.info,Pe=fe||{success:"check",info:"info",warning:"warning",danger:"error"}[ne];return t.jsxs("div",{style:{backgroundColor:Fe.bg,border:`1px solid ${Fe.border}`,borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",marginBottom:"var(--spacing-3)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx(k,{name:Pe,style:{color:Fe.iconColor,width:"20px",height:"20px",flexShrink:0}}),t.jsx("div",{style:{color:Fe.text,fontSize:"var(--font-size-sm)",flex:1},children:Q})]})},ge=({type:ne,title:Q,message:fe,showToast:fa,onClose:Ne})=>{if(!fa)return null;const Fe={success:{bg:"#059669",border:"#059669",text:"#ffffff",iconColor:"#ffffff"},info:{bg:"#3b82f6",border:"#3b82f6",text:"#ffffff",iconColor:"#ffffff"},warning:{bg:"#f59e0b",border:"#f59e0b",text:"#ffffff",iconColor:"#ffffff"},error:{bg:"#ef4444",border:"#ef4444",text:"#ffffff",iconColor:"#ffffff"}},Pe=Fe[ne]||Fe.info,Ta={success:"check",info:"info",warning:"warning",error:"error"}[ne];return t.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",backgroundColor:Pe.bg,border:`1px solid ${Pe.border}`,borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:Pe.text,minWidth:"300px",maxWidth:"400px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.15)",zIndex:1e3,display:"flex",alignItems:"flex-start",gap:"var(--spacing-3)",animation:"slideInRight 0.3s ease-out"},children:[t.jsx(k,{name:Ta,style:{color:Pe.iconColor,width:"20px",height:"20px",flexShrink:0}}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{fontWeight:"var(--font-weight-semibold)",marginBottom:"var(--spacing-1)"},children:Q}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)"},children:fe})]}),t.jsx("button",{onClick:Ne,style:{background:"none",border:"none",color:Pe.iconColor,cursor:"pointer",padding:"var(--spacing-1)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(k,{name:"close",style:{width:"16px",height:"16px"}})})]})},Be=({value:ne,max:Q=100,showLabel:fe=!1,color:fa="primary",size:Ne="md"})=>{const Fe=Math.min(ne/Q*100,100),Pe={primary:"#3b82f6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444"},Ta={sm:{height:"4px",fontSize:"var(--font-size-xs)"},md:{height:"8px",fontSize:"var(--font-size-sm)"},lg:{height:"12px",fontSize:"var(--font-size-base)"}},Te=Ta[Ne]||Ta.md,ja=Pe[fa]||Pe.primary;return t.jsxs("div",{style:{width:"100%"},children:[fe&&t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"var(--spacing-2)",fontSize:Te.fontSize,color:"var(--color-neutral-700)"},children:[t.jsx("span",{children:"進捗"}),t.jsxs("span",{children:[Math.round(Fe),"%"]})]}),t.jsx("div",{style:{width:"100%",height:Te.height,backgroundColor:"var(--color-neutral-200)",borderRadius:"var(--radius-full)",overflow:"hidden"},children:t.jsx("div",{style:{width:`${Fe}%`,height:"100%",backgroundColor:ja,transition:"width 0.3s ease-in-out",borderRadius:"var(--radius-full)"}})})]})},Ha=({value:ne,max:Q=100,size:fe="md",color:fa="primary",showLabel:Ne=!1})=>{const Fe=Math.min(ne/Q*100,100),Pe={sm:{size:40,strokeWidth:3,fontSize:"var(--font-size-xs)"},md:{size:60,strokeWidth:4,fontSize:"var(--font-size-sm)"},lg:{size:80,strokeWidth:5,fontSize:"var(--font-size-base)"}},Ta={primary:"#3b82f6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444"},Te=Pe[fe]||Pe.md,ja=Ta[fa]||Ta.primary,Ae=(Te.size-Te.strokeWidth*2)/2,Aa=Ae*2*Math.PI,$a=`${Fe/100*Aa} ${Aa}`;return t.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[t.jsxs("svg",{width:Te.size,height:Te.size,style:{transform:"rotate(-90deg)"},children:[t.jsx("circle",{cx:Te.size/2,cy:Te.size/2,r:Ae,fill:"none",stroke:"var(--color-neutral-200)",strokeWidth:Te.strokeWidth}),t.jsx("circle",{cx:Te.size/2,cy:Te.size/2,r:Ae,fill:"none",stroke:ja,strokeWidth:Te.strokeWidth,strokeDasharray:$a,strokeLinecap:"round",style:{transition:"stroke-dasharray 0.3s ease-in-out"}})]}),Ne&&t.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:Te.fontSize,fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-700)"},children:[Math.round(Fe),"%"]})]})},oa=({lines:ne=3,height:Q=16,className:fe=""})=>t.jsx("div",{className:fe,children:Array.from({length:ne}).map((fa,Ne)=>t.jsx("div",{style:{height:`${Q}px`,backgroundColor:"#f3f4f6",borderRadius:"var(--radius-sm)",marginBottom:Ne<ne-1?"var(--spacing-2)":0,animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",width:Ne===ne-1?"75%":"100%"}},Ne))}),de=({children:ne,header:Q,footer:fe,className:fa="",style:Ne={}})=>t.jsxs("div",{className:`card ${fa}`,style:{backgroundColor:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",...Ne},children:[Q&&t.jsx("div",{style:{padding:"var(--spacing-4)",borderBottom:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-50)"},children:Q}),t.jsx("div",{style:{padding:"var(--spacing-4)"},children:ne}),fe&&t.jsx("div",{style:{padding:"var(--spacing-4)",borderTop:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-50)"},children:fe})]});return t.jsxs("div",{className:"messages-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"メッセージ / 通知"}),t.jsx("p",{className:"page-description",children:"ユーザーへの情報伝達、メッセージ表示、フィードバック、統計表示のためのコンポーネント群。 モーダル、ローダー、状態表示、通知、トースト、ダッシュボード要素を提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"メッセージ/通知"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"CardStyleMessage"}),t.jsx("p",{className:"component-description",children:"メッセージやお知らせを美しく表示するカード型コンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"container-demo-grid",children:[t.jsxs(de,{children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"基本カード"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)"},children:"シンプルなカードコンポーネントです。テキストやその他のコンテンツを整理して表示できます。"}),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-3)",backgroundColor:"rgb(21, 52, 109)",color:"white",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"詳細を見る"})})]}),t.jsx(de,{header:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"user",style:{width:"20px",height:"20px",color:"rgb(21, 52, 109)"}}),t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"ユーザー情報"})]}),children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:[t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"名前: 田中太郎"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-2) 0"},children:"部署: 営業部"}),t.jsx("p",{style:{margin:"0"},children:"最終ログイン: 2024-01-15"})]})}),t.jsx(de,{header:t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"統計情報"}),footer:t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"最終更新: 2024-01-15 14:30"}),children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"rgb(21, 52, 109)",marginBottom:"var(--spacing-2)"},children:"1,234"}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"総ユーザー数"})]})})]})}),t.jsx("div",{className:"code-snippet",children:`// 基本メッセージカード
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
</CardStyleMessage>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ImageStyleMessage"}),t.jsx("p",{className:"component-description",children:"画像を含むメッセージやギャラリー表示を行うコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"image-message-demo-grid",children:[t.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"300px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(k,{name:"user",style:{width:"20px",height:"20px",color:"var(--color-neutral-600)"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:"田中太郎"}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"2分前"})]})]}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)"},children:"新しいプロダクトのデザインが完成しました！"}),t.jsx("div",{style:{width:"100%",height:"150px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--color-neutral-200)",cursor:"pointer",transition:"all 0.2s"},children:t.jsx(k,{name:"image",style:{width:"32px",height:"32px",color:"var(--color-neutral-400)"}})})]}),t.jsxs("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"320px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-primary-100)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(k,{name:"camera",style:{width:"20px",height:"20px",color:"rgb(21, 52, 109)"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:"営業部"}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:"1時間前"})]})]}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)"},children:"会議の資料写真です（4枚）"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--spacing-2)"},children:[1,2,3,4].map(ne=>t.jsxs("div",{style:{width:"100%",height:"80px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--color-neutral-200)",cursor:"pointer",transition:"all 0.2s",position:"relative"},children:[t.jsx(k,{name:"image",style:{width:"20px",height:"20px",color:"var(--color-neutral-400)"}}),ne===4&&t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)"},children:"+2"})]},ne))})]}),t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",maxWidth:"280px"},children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"var(--color-neutral-200)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--spacing-3) auto",border:"3px solid var(--color-primary-100)"},children:t.jsx(k,{name:"user",style:{width:"40px",height:"40px",color:"var(--color-neutral-500)"}})}),t.jsx("h4",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:"佐藤花子"}),t.jsx("p",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:"プロダクトデザイナー"}),t.jsx("button",{style:{padding:"var(--spacing-2) var(--spacing-4)",backgroundColor:"rgb(21, 52, 109)",color:"white",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",cursor:"pointer",transition:"all 0.2s"},children:"プロフィールを見る"})]})})]})}),t.jsx("div",{className:"code-snippet",children:`// 単一画像メッセージ
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
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"AnalyticStyleMessage"}),t.jsx("p",{className:"component-description",children:"数値やデータを分析レポート風に表示するメッセージコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"dashboard-grid",children:Wa.map((ne,Q)=>{const fe=D(ne.color);return t.jsxs("div",{className:"stat-card",style:{backgroundColor:fe.bg},children:[t.jsx("div",{className:"stat-icon",style:{backgroundColor:fe.bg,color:fe.icon},children:t.jsx(k,{name:ne.icon,style:{width:"24px",height:"24px"}})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("div",{className:"stat-label",style:{color:fe.text},children:ne.label}),t.jsx("div",{className:"stat-value",style:{color:fe.text},children:ne.value})]})]},Q)})})}),t.jsx("div",{className:"code-snippet",children:`<AnalyticStyleMessage
  stats={[
    { label: '新規メッセージ', value: '1,234', icon: 'message' },
    { label: '送信済み', value: '89', icon: 'check' },
    { label: 'エラー率', value: '0.23%', icon: 'warning' }
  ]}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FlashMessage"}),t.jsx("p",{className:"component-description",children:"フラッシュメッセージを表示するコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsx(K,{type:"success",message:"データの保存が正常に完了しました。"}),t.jsx(K,{type:"info",message:"システムメンテナンスが2024年1月15日に予定されています。"}),t.jsx(K,{type:"warning",message:"ディスク容量が90%を超えています。データのクリーンアップをお勧めします。"}),t.jsx(K,{type:"danger",message:"接続エラーが発生しました。ネットワーク設定を確認してください。"})]}),t.jsx("div",{className:"code-snippet",children:`<FlashMessage type="success" message="正常に完了しました" />
<FlashMessage type="info" message="お知らせメッセージ" />
<FlashMessage type="warning" message="注意が必要です" />
<FlashMessage type="danger" message="エラーが発生しました" />`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Notification"}),t.jsx("p",{className:"component-description",children:"ベルアイコンをクリックして通知ドロップダウンを表示するコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-4)"},children:[t.jsx(Oa,{onClick:()=>o(2),children:"未読件数をリセット (2件)"}),t.jsx(Oa,{onClick:()=>o(0),style:{marginLeft:"var(--spacing-2)"},children:"全て既読にする"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"var(--spacing-6)",background:"var(--color-neutral-50)",border:"1px dashed var(--color-neutral-300)",borderRadius:"var(--radius-md)"},children:t.jsxs("div",{ref:m,style:{position:"relative"},children:[t.jsxs("button",{className:"notification-button",onClick:()=>d(!c),style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",border:"none",background:"var(--color-neutral-white)",borderRadius:"var(--radius-full)",cursor:"pointer",transition:"all 0.2s",color:"var(--color-warning-600)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},children:[t.jsx(k,{name:"bell",style:{width:"20px",height:"20px"}}),i>0&&t.jsx("span",{className:"notification-badge",children:i})]}),c&&t.jsxs("div",{className:"notification-dropdown",children:[t.jsxs("div",{className:"notification-dropdown-header",children:[t.jsx("h3",{className:"notification-dropdown-title",children:"通知"}),t.jsx("button",{className:"notification-close-btn",onClick:()=>d(!1),children:t.jsx(k,{name:"close",className:"w-4 h-4"})})]}),t.jsxs("div",{className:"notification-dropdown-content",children:[t.jsxs("div",{className:"notification-item",children:[t.jsx(k,{name:"info",className:"w-5 h-5 notification-icon"}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:"新しいメッセージ"}),t.jsx("span",{className:"notification-time",children:"2分前"})]}),t.jsx("p",{className:"notification-item-message",children:"管理者からの重要なお知らせがあります。"}),t.jsxs("div",{className:"notification-item-actions",children:[t.jsxs("button",{className:"notification-action-btn",onClick:()=>o(Math.max(0,i-1)),children:[t.jsx(k,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",children:[t.jsx(k,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]}),t.jsxs("div",{className:"notification-item unread",children:[t.jsx(k,{name:"warning",className:"w-5 h-5 notification-icon"}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:"システムメンテナンス"}),t.jsx("span",{className:"notification-time",children:"1時間前"})]}),t.jsx("p",{className:"notification-item-message",children:"本日22:00よりシステムメンテナンスを実施します。"}),t.jsxs("div",{className:"notification-item-actions",children:[t.jsxs("button",{className:"notification-action-btn",onClick:()=>o(Math.max(0,i-1)),children:[t.jsx(k,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",children:[t.jsx(k,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]})]}),t.jsx("div",{className:"notification-dropdown-footer",children:t.jsx("a",{href:"#",className:"notification-footer-link",children:"すべての通知を表示"})})]})]})}),t.jsx("p",{style:{textAlign:"center",color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)",marginTop:"var(--spacing-4)"},children:"ベルアイコンをクリックして通知を表示 - 実運用ではナビゲーション等に配置"})]}),t.jsx("div",{className:"code-snippet",children:`<Notification
  notifications={notifications}
  unreadCount={unreadCount}
  onMarkAsRead={handleMarkAsRead}
  onMarkAllAsRead={handleMarkAllAsRead}
  onDismiss={handleDismiss}
  onClose={handleClose}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Toast"}),t.jsx("p",{className:"component-description",children:"画面右上に表示される一時的な通知メッセージ"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"button-group",children:[t.jsx(Al,{onClick:()=>{y({type:"success",title:"成功",message:"データの保存が完了しました"}),p(!0),setTimeout(()=>p(!1),3e3)},children:"成功トースト表示"}),t.jsx(Oa,{onClick:()=>{y({type:"info",title:"情報",message:"新しいメッセージが届きました"}),p(!0),setTimeout(()=>p(!1),3e3)},children:"情報トースト表示"}),t.jsx(Yi,{onClick:()=>{y({type:"error",title:"エラー",message:"接続に失敗しました"}),p(!0),setTimeout(()=>p(!1),3e3)},children:"エラートースト表示"})]}),t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginTop:"var(--spacing-3)"},children:"※ トーストは3秒後に自動的に閉じます"})]}),t.jsx("div",{className:"code-snippet",children:`<Toast
  type="success"
  title="成功"
  message="データの保存が完了しました"
  showToast={showToast}
  onClose={() => setShowToast(false)}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"モーダル"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Modal"}),t.jsx("p",{className:"component-description",children:"ユーザーへの情報表示、メッセージ通知、確認ダイアログとして使用するモーダルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"button-group",children:[t.jsx(Al,{onClick:()=>a(!0),children:"基本モーダルを開く"}),t.jsx(Oa,{onClick:()=>n(!0),children:"情報モーダル"}),t.jsx(Yi,{onClick:()=>r(!0),children:"確認モーダル"})]})}),t.jsx("div",{className:"code-snippet",children:`<Modal show={show} onClose={onClose}>
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ローダー"}),t.jsxs("div",{className:"demo-grid",children:[t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"FullScreenLoader"}),t.jsx("p",{className:"component-description",children:"画面全体を覆うフルスクリーンローダー。API通信や重い処理中に使用"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Oa,{onClick:()=>{g(!0),setTimeout(()=>g(!1),3e3)},children:"フルスクリーンローダーを表示（3秒）"})}),t.jsx("div",{className:"code-snippet",children:`<FullScreenLoader
  show={showLoader}
  message="データを読み込み中..."
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ModalLoader"}),t.jsx("p",{className:"component-description",children:"モーダル形式のローダー。キャンセル可能な処理に適用"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(Al,{onClick:()=>{T(!0),setTimeout(()=>T(!1),3e3)},children:"モーダルローダーを表示（3秒）"})}),t.jsx("div",{className:"code-snippet",children:`<ModalLoader
  show={showLoader}
  message="ファイルをアップロード中..."
  onClose={handleCancel}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SkeletonLoader"}),t.jsx("p",{className:"component-description",children:"コンテンツ読み込み中のプレースホルダー表示"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"3行テキスト"}),t.jsx(oa,{lines:3,height:16})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"大きなコンテンツ"}),t.jsx(oa,{lines:5,height:20})]})]})}),t.jsx("div",{className:"code-snippet",children:`<SkeletonLoader lines={3} height={16} />
<SkeletonLoader lines={5} height={20} />`})]})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"状態"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"ProgressBar"}),t.jsx("p",{className:"component-description",children:"線形・円形のプログレスバーで作業の進捗状態を表示"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"progress-demo-section",children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"線形プログレスバー"}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(Be,{value:j,showLabel:!0})}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(Be,{value:j,color:"success",size:"sm"})}),t.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:t.jsx(Be,{value:j,color:"warning",size:"lg",showLabel:!0})}),t.jsxs("div",{className:"button-group",children:[t.jsx(Oa,{onClick:()=>w(Math.max(0,j-10)),children:"-10%"}),t.jsx(Oa,{onClick:()=>w(Math.min(100,j+10)),children:"+10%"})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"var(--spacing-3)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"円形プログレス"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx(Ha,{value:b,size:"sm",showLabel:!0}),t.jsx(Ha,{value:b,size:"md",color:"success",showLabel:!0}),t.jsx(Ha,{value:b,size:"lg",color:"warning",showLabel:!0})]}),t.jsxs("div",{className:"button-group",children:[t.jsx(Oa,{onClick:()=>v(Math.max(0,b-15)),children:"-15%"}),t.jsx(Oa,{onClick:()=>v(Math.min(100,b+15)),children:"+15%"})]})]})]})}),t.jsx("div",{className:"code-snippet",children:`// 線形プログレスバー
<ProgressBar value={75} showLabel={true} color="primary" size="md" />

// 円形プログレス
<CircularProgress value={75} size="md" color="success" showLabel={true} />`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"モーダルは重要なメッセージや情報の表示、ユーザーへの確認に使用してください"}),t.jsx("li",{children:"InfoModalは一方向の情報伝達に、ConfirmModalは操作確認に適しています"}),t.jsx("li",{children:"モーダルは一度に1つだけ表示し、ESCキーや背景クリックで閉じられるようにしてください"}),t.jsx("li",{children:"FullScreenLoaderは重要な処理中に画面全体をブロックする場合に使用してください"}),t.jsx("li",{children:"ModalLoaderはキャンセル可能な処理（ファイルアップロード等）に適しています"}),t.jsx("li",{children:"SkeletonLoaderはコンテンツ読み込み中のプレースホルダーとして使用してください"}),t.jsx("li",{children:"トースト通知は成功・エラー・情報の一時的な通知に適しています"}),t.jsx("li",{children:"状態表示（プログレスバー）は長時間の処理進捗や完了度の可視化に使用してください"}),t.jsx("li",{children:"線形プログレスは全体進捗、円形プログレスは部分進捗や状態値に適しています"}),t.jsx("li",{children:"CardStyleMessageはメッセージやお知らせの表示に適したカード型レイアウトです"}),t.jsx("li",{children:"ImageStyleMessageは画像を含むメッセージ表示に最適化されています"}),t.jsx("li",{children:"単一画像、複数画像ギャラリー、プロフィール画像など様々な画像表示パターンに対応"}),t.jsx("li",{children:"画像のクリックで拡大表示やライトボックス機能を実装可能です"}),t.jsx("li",{children:"ダッシュボードカードは4個以下を1行に配置することを推奨します"}),t.jsx("li",{children:"フラッシュメッセージは重要度に応じて適切な色とアイコンを使用してください"}),t.jsx("li",{children:"ドロップダウンメニューは画面端での表示を考慮してアラインメントを調整してください"}),t.jsx("li",{children:"Badgeは簡潔で分かりやすいテキストを使用してください"}),t.jsx("li",{children:"ステータス表示には適切な色バリエーションを選択してください（成功=緑、警告=黄、エラー=赤）"}),t.jsx("li",{children:"削除可能なTagは誤操作を防ぐため、確認ダイアログの使用を検討してください"}),t.jsx("li",{children:"通知数表示のBadgeは数値が大きい場合は「99+」等の省略表示を検討してください"}),t.jsx("li",{children:"アクセシビリティのため、フォーカス管理とキーボードナビゲーションに注意してください"})]})})]}),t.jsx(Dj,{show:e,onClose:()=>a(!1),children:t.jsxs("div",{style:{padding:"var(--spacing-6)"},children:[t.jsx("h3",{style:{marginBottom:"var(--spacing-4)",fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)"},children:"基本モーダル"}),t.jsx("p",{style:{marginBottom:"var(--spacing-4)",color:"var(--color-neutral-600)"},children:"これは基本的なメッセージ表示用モーダルです。重要な情報やお知らせをユーザーに伝える際に使用します。"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end"},children:[t.jsx(Oa,{onClick:()=>a(!1),children:"キャンセル"}),t.jsx(Al,{onClick:()=>a(!1),children:"確認"})]})]})}),t.jsx(Bj,{show:l,onClose:()=>n(!1),title:"お知らせ",message:"これは情報表示専用のモーダルです。システムからの重要な通知やメッセージを表示します。"}),t.jsx(Jf,{show:s,onClose:()=>r(!1),title:"操作の確認",message:"この操作を実行してもよろしいですか？実行後は元に戻すことができません。",onConfirm:()=>{alert("操作が確認されました"),r(!1)}}),t.jsx(ge,{type:x.type,title:x.title,message:x.message,showToast:f,onClose:()=>p(!1)}),t.jsx(ce,{show:h,message:"データを読み込み中..."}),t.jsx(ie,{show:N,message:"ファイルをアップロード中...",onClose:()=>T(!1)}),t.jsx(S,{show:U,type:"info",title:"情報",message:"これは情報メッセージです。操作が正常に完了しました。",onClose:()=>V(!1)}),t.jsx(S,{show:M,type:"warning",title:"警告",message:"この操作を続行しますか？データが変更される可能性があります。",confirmText:"続行",cancelText:"キャンセル",onConfirm:()=>{alert("操作を続行しました"),B(!1)},onCancel:()=>B(!1)}),t.jsx(S,{show:G,type:"error",title:"エラー",message:"操作中にエラーが発生しました。ネットワーク接続を確認してください。",confirmText:"再試行",cancelText:"閉じる",onConfirm:()=>{alert("再試行します"),A(!1)},onCancel:()=>A(!1)}),t.jsx(S,{show:L,type:"success",title:"成功",message:"データの保存が完了しました。変更内容が正常に反映されています。",onClose:()=>H(!1)}),t.jsx(S,{show:R,type:"error",title:"削除確認",message:"このアイテムを削除しますか？この操作は取り消せません。",confirmText:"削除",cancelText:"キャンセル",onConfirm:()=>{alert("アイテムが削除されました"),E(!1)},onCancel:()=>E(!1)}),t.jsx(W,{show:Z,type:"success",message:"操作が正常に完了しました！",onClose:()=>F(!1),position:"bottom-right"}),t.jsx(W,{show:I,type:"error",message:"エラーが発生しました。もう一度お試しください。",onClose:()=>$(!1),position:"top-right"}),t.jsx(W,{show:le,type:"warning",message:"この操作にはご注意ください。",onClose:()=>ve(!1),position:"top-center"}),t.jsx(W,{show:xe,type:"info",message:"新しい情報があります。",onClose:()=>sa(!1),position:"bottom-left"}),t.jsx(W,{show:ra,type:"info",message:"新しいメッセージが届きました",action:!0,actionText:"表示",onAction:()=>{alert("メッセージを表示します"),ia(!1)},onClose:()=>ia(!1),position:"bottom-center",duration:6e3})]})};function If({pagination:e,onPageChange:a=null,onPerPageChange:l=null,config:n}){if(!e)return null;const s=()=>{if(!a)return null;const r=e.current_page,i=e.last_page,o=[];if(i<=7)for(let d=1;d<=i;d++)o.push(d);else if(r<=3){for(let d=1;d<=5;d++)o.push(d);o.push("..."),o.push(i)}else if(r>=i-2){o.push(1),o.push("...");for(let d=i-4;d<=i;d++)o.push(d)}else{o.push(1),o.push("...");for(let d=r-1;d<=r+1;d++)o.push(d);o.push("..."),o.push(i)}return o.map((d,m)=>{if(d==="...")return t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${m}`);const f=d;return t.jsx("button",{onClick:()=>a(f),className:`pagination-page-btn ${f===r?"active":""}`,"aria-current":f===r?"page":void 0,children:f},f)})};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
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
            `}),t.jsxs("div",{className:"pagination-panel",children:[l&&(n==null?void 0:n.perPageOptions)&&t.jsxs("div",{className:"per-page-selector",children:[t.jsx("label",{htmlFor:"per-page-select",className:"per-page-label",children:"表示件数:"}),t.jsx("select",{id:"per-page-select",value:e.per_page,onChange:r=>l(parseInt(r.target.value)),className:"per-page-select",children:n.perPageOptions.map(r=>t.jsxs("option",{value:r,children:[r,"件"]},r))})]}),(n==null?void 0:n.showInfo)!==!1&&e.total>0&&t.jsxs("div",{className:"pagination-info",children:[t.jsx("span",{className:"font-medium",children:e.from}),t.jsx("span",{children:" - "}),t.jsx("span",{className:"font-medium",children:e.to}),t.jsx("span",{children:" / "}),t.jsx("span",{className:"font-medium",children:e.total}),t.jsx("span",{children:"件"})]}),a&&e.last_page>1&&t.jsxs("div",{className:"pagination-controls",children:[t.jsxs("button",{onClick:()=>a(e.current_page-1),disabled:!e.prev_page_url,className:"pagination-nav-btn","aria-label":"前のページ",children:[t.jsx(k,{name:"chevron-left",className:"h-4 w-4"}),t.jsx("span",{style:{marginLeft:"var(--spacing-1)"},children:"前へ"})]}),t.jsx("div",{className:"pagination-pages",children:s()}),t.jsxs("button",{onClick:()=>a(e.current_page+1),disabled:!e.next_page_url,className:"pagination-nav-btn","aria-label":"次のページ",children:[t.jsx("span",{style:{marginRight:"var(--spacing-1)"},children:"次へ"}),t.jsx(k,{name:"chevron-right",className:"h-4 w-4"})]})]})]})]})}const Jm=()=>{const[e,a]=u.useState(1),[l,n]=u.useState(5),[s,r]=u.useState({key:null,direction:null}),[i,o]=u.useState([]),c=[{id:1,name:"田中太郎",email:"tanaka@example.com",role:"管理者",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:2,name:"鈴木花子",email:"suzuki@example.com",role:"ユーザー",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:3,name:"佐藤次郎",email:"sato@example.com",role:"ユーザー",status:"非アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:4,name:"高橋三郎",email:"takahashi@example.com",role:"エディター",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:5,name:"伊藤四郎",email:"ito@example.com",role:"ユーザー",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:6,name:"渡辺五郎",email:"watanabe@example.com",role:"管理者",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:7,name:"山本六子",email:"yamamoto@example.com",role:"ユーザー",status:"非アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"},{id:8,name:"中村七美",email:"nakamura@example.com",role:"エディター",status:"アクティブ",department:"営業部",joined_date:"2023-04-01",last_login:"2024-01-15 14:30"}],d=({status:C})=>{const L=C==="アクティブ";return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-1) var(--spacing-2)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",backgroundColor:L?"var(--color-success-100)":"var(--color-neutral-100)",color:L?"var(--color-success-800)":"var(--color-neutral-600)"},children:C})},m=({children:C,className:L="",style:H={}})=>t.jsx("div",{className:L,style:{backgroundColor:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden",...H},children:C}),f=({children:C,onClick:L,selected:H=!1,className:M="",style:B={}})=>t.jsx("div",{className:M,onClick:L,style:{padding:"var(--spacing-4)",borderBottom:"1px solid var(--color-neutral-100)",backgroundColor:H?"var(--color-primary-50)":"transparent",cursor:L?"pointer":"default",transition:"background-color 0.2s ease",":hover":L?{backgroundColor:H?"var(--color-primary-100)":"var(--color-neutral-50)"}:{},...B},onMouseEnter:_=>{L&&(_.target.style.backgroundColor=H?"var(--color-primary-100)":"var(--color-neutral-50)")},onMouseLeave:_=>{L&&(_.target.style.backgroundColor=H?"var(--color-primary-50)":"transparent")},children:C}),p=[{key:"id",label:"ID",width:"60px"},{key:"name",label:"名前",width:"120px"},{key:"email",label:"メールアドレス",width:"200px"},{key:"role",label:"ロール",width:"120px"},{key:"status",label:"ステータス",width:"120px"}],x=C=>{let L="asc";s.key===C&&s.direction==="asc"?L="desc":s.key===C&&s.direction==="desc"&&(L=null),r({key:L?C:null,direction:L})},y=ee.useMemo(()=>!s.key||!s.direction?[...c]:[...c].sort((C,L)=>{const H=C[s.key],M=L[s.key];return H==null?1:M==null?-1:H<M?s.direction==="asc"?-1:1:H>M?s.direction==="asc"?1:-1:0}),[s]),j=Math.ceil(y.length/l),w=(e-1)*l,b=y.slice(w,w+l),v=[{month:"1月",users:120,sales:1800,revenue:2400},{month:"2月",users:190,sales:2100,revenue:2800},{month:"3月",users:300,sales:2800,revenue:3200},{month:"4月",users:280,sales:2600,revenue:3600},{month:"5月",users:320,sales:3200,revenue:4200},{month:"6月",users:380,sales:3800,revenue:4800}],h=({data:C,width:L=600,height:H=300})=>{const M={top:20,right:30,bottom:60,left:70},B=L-M.left-M.right,_=H-M.top-M.bottom,Y=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],G=C.flatMap(P=>[P.users,P.sales,P.revenue]),A=Math.max(...G),R=Math.min(...G),E=A-R,U=E*.1,V=P=>_-(P-R+U)/(E+U*2)*_,J=P=>P/(C.length-1)*B;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の推移"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:L,height:H,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${M.left}, ${M.top})`,children:[[0,1,2,3,4].map(P=>t.jsx("line",{x1:0,x2:B,y1:_*P/4,y2:_*P/4,stroke:"var(--color-neutral-200)",strokeWidth:1},P)),[0,1,2,3,4].map(P=>{const Z=Math.round(A+U-(E+U*2)*P/4);return t.jsx("text",{x:-10,y:_*P/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:Z},P)}),Y.map(P=>{const Z=C.map((F,I)=>`${I===0?"M":"L"} ${J(I)} ${V(F[P.key])}`).join(" ");return t.jsxs("g",{children:[t.jsx("path",{d:Z,fill:"none",stroke:P.color,strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),C.map((F,I)=>t.jsx("circle",{cx:J(I),cy:V(F[P.key]),r:4,fill:P.color,stroke:"white",strokeWidth:2},I))]},P.key)}),C.map((P,Z)=>t.jsx("text",{x:J(Z),y:_+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:P.month},Z)),t.jsx("text",{x:B/2,y:_+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"}),t.jsx("text",{x:-68,y:-25,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:Y.map(P=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"3px",backgroundColor:P.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:P.label})]},P.key))})]})},g=({data:C,width:L=600,height:H=300})=>{const M={top:20,right:30,bottom:60,left:70},B=L-M.left-M.right,_=H-M.top-M.bottom,Y=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],G=C.flatMap(V=>[V.users,V.sales,V.revenue]),A=Math.max(...G),R=B/C.length*.8,E=R/Y.length,U=B/C.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の比較"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:L,height:H,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${M.left}, ${M.top})`,children:[[0,1,2,3,4].map(V=>t.jsx("line",{x1:0,x2:B,y1:_*V/4,y2:_*V/4,stroke:"var(--color-neutral-200)",strokeWidth:1},V)),[0,1,2,3,4].map(V=>{const J=Math.round(A*(4-V)/4);return t.jsx("text",{x:-10,y:_*V/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:J},V)}),C.map((V,J)=>{const P=J*(B/C.length)+U/2;return t.jsxs("g",{children:[Y.map((Z,F)=>{const I=V[Z.key]/A*_,$=P+F*E;return t.jsx("rect",{x:$,y:_-I,width:E,height:I,fill:Z.color,rx:2},Z.key)}),t.jsx("text",{x:P+R/2,y:_+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:V.month})]},J)}),t.jsx("text",{x:B/2,y:_+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"}),t.jsx("text",{x:-68,y:-25,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:Y.map(V=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:V.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:V.label})]},V.key))})]})},N=({data:C,width:L=600,height:H=300})=>{const M={top:20,right:80,bottom:60,left:120},B=L-M.left-M.right,_=H-M.top-M.bottom,Y=[{key:"users",label:"ユーザー数",color:"rgb(21, 52, 109)"},{key:"sales",label:"売上数",color:"#6366f1"},{key:"revenue",label:"収益",color:"#10b981"}],G=C.flatMap(V=>[V.users,V.sales,V.revenue]),A=Math.max(...G),R=_/C.length*.8,E=R/Y.length,U=_/C.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"複数データ系列の比較（横棒）"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("svg",{width:L,height:H,style:{overflow:"visible"},children:t.jsxs("g",{transform:`translate(${M.left}, ${M.top})`,children:[[0,1,2,3,4].map(V=>t.jsx("line",{x1:B*V/4,x2:B*V/4,y1:0,y2:_,stroke:"var(--color-neutral-200)",strokeWidth:1},V)),[0,1,2,3,4].map(V=>{const J=Math.round(A*V/4);return t.jsx("text",{x:B*V/4,y:_+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:J},V)}),C.map((V,J)=>{const P=J*(_/C.length)+U/2;return t.jsxs("g",{children:[Y.map((Z,F)=>{const I=V[Z.key]/A*B,$=P+F*E;return t.jsx("rect",{x:0,y:$,width:I,height:E,fill:Z.color,rx:2},Z.key)}),t.jsx("text",{x:-10,y:P+R/2+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:V.month})]},J)}),t.jsx("text",{x:B/2,y:_+45,textAnchor:"middle",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"データ値"}),t.jsx("text",{x:-35,y:-5,textAnchor:"start",fontSize:"14",fontWeight:"600",fill:"var(--color-neutral-700)",children:"期間"})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:Y.map(V=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:V.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:V.label})]},V.key))})]})},T=({data:C,width:L=350,height:H=350})=>{const M=Math.min(L,H)/2-30,B=M*.45,_=L/2,Y=H/2,G=C.reduce((E,U)=>E+U.value,0);let A=-Math.PI/2;const R=["rgb(21, 52, 109)","#6366f1","#8b5cf6","#ec4899","#f59e0b"];return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",textAlign:"center"},children:[t.jsx("h4",{style:{margin:"0 0 var(--spacing-4) 0",fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)",textAlign:"center"},children:"部門別売上比率"}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsxs("svg",{width:L,height:H,children:[C.map((E,U)=>{const V=E.value/G*2*Math.PI,J=A,P=A+V,Z=_+Math.cos(J)*M,F=Y+Math.sin(J)*M,I=_+Math.cos(P)*M,$=Y+Math.sin(P)*M,le=_+Math.cos(P)*B,ve=Y+Math.sin(P)*B,xe=_+Math.cos(J)*B,sa=Y+Math.sin(J)*B,ra=V>Math.PI?1:0,ia=[`M ${Z} ${F}`,`A ${M} ${M} 0 ${ra} 1 ${I} ${$}`,`L ${le} ${ve}`,`A ${B} ${B} 0 ${ra} 0 ${xe} ${sa}`,"Z"].join(" "),S=(J+P)/2,W=(M+B)/2,ce=_+Math.cos(S)*W,ie=Y+Math.sin(S)*W,Wa=(E.value/G*100).toFixed(1);return A=P,t.jsxs("g",{children:[t.jsx("path",{d:ia,fill:R[U%R.length],stroke:"white",strokeWidth:2}),t.jsx("text",{x:ce,y:ie-10,textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"white",children:E.label.length>5?E.label.substring(0,4)+"...":E.label}),t.jsxs("text",{x:ce,y:ie+4,textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"white",children:[Wa,"%"]}),t.jsxs("text",{x:ce,y:ie+18,textAnchor:"middle",fontSize:"9",fill:"white",children:[E.value.toLocaleString(),"万円"]})]},U)}),t.jsx("text",{x:_,y:Y,textAnchor:"middle",fontSize:"20",fontWeight:"bold",fill:"var(--color-neutral-900)",children:"総売上"}),t.jsxs("text",{x:_,y:Y+25,textAnchor:"middle",fontSize:"16",fill:"var(--color-neutral-600)",children:[G.toLocaleString(),"万円"]})]})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)"},children:C.map((E,U)=>{const V=(E.value/G*100).toFixed(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-2)",background:"var(--color-neutral-50)",borderRadius:"var(--radius-md)",minWidth:"80px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:R[U%R.length],borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:E.label})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsxs("div",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:[E.value.toLocaleString(),"万円"]}),t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:["(",V,"%)"]})]})]},U)})})]})},z=[{label:"営業部",value:4200},{label:"開発部",value:3100},{label:"管理部",value:2800},{label:"マーケティング部",value:1900}];return t.jsxs("div",{className:"tables-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"テーブル・リスト・グラフコンポーネント"}),t.jsx("p",{className:"page-description",children:"データ表示とページネーション機能を提供するテーブルコンポーネント群、一覧表示に特化したリストコンポーネント、そしてデータ可視化のためのグラフコンポーネント。 基本的なデータテーブルから高機能な統合テーブル、ページネーション、基本的なリスト表示機能、そして折れ線グラフ・棒グラフ・ドーナツグラフまで包括的にカバーします。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"基本テーブル機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DataTable"}),t.jsx("p",{className:"component-description",children:"データテーブルの基本的な表示例"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"var(--font-size-sm)"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-neutral-50)"},children:p.map(C=>t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",fontWeight:"var(--font-weight-medium)",borderBottom:"1px solid var(--color-neutral-200)",cursor:"pointer",userSelect:"none",position:"relative"},onClick:()=>x(C.key),children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[C.label,t.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",fontSize:"10px",lineHeight:"1",marginLeft:"4px"},children:[t.jsx("span",{style:{color:s.key===C.key&&s.direction==="asc"?"var(--color-primary-600)":"var(--color-neutral-400)",transition:"color 0.2s"},children:"▲"}),t.jsx("span",{style:{color:s.key===C.key&&s.direction==="desc"?"var(--color-primary-600)":"var(--color-neutral-400)",transition:"color 0.2s",marginTop:"-2px"},children:"▼"})]})]})},C.key))})}),t.jsx("tbody",{children:b.map((C,L)=>t.jsx("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)",backgroundColor:L%2===0?"var(--color-neutral-white)":"var(--color-neutral-25)"},children:p.map(H=>t.jsx("td",{style:{padding:"var(--spacing-3)",borderBottom:"1px solid var(--color-neutral-200)"},children:H.key==="status"?t.jsx(d,{status:C.status}):C[H.key]},H.key))},C.id))})]})})}),t.jsx("div",{className:"code-snippet",children:`<table>
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
</table>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PaginationPanel"}),t.jsx("p",{className:"component-description",children:"ページネーション機能を提供するパネルコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(If,{pagination:{current_page:e,last_page:j,total:c.length,per_page:l,from:w+1,to:Math.min(w+l,c.length),prev_page_url:e>1?"#":null,next_page_url:e<j?"#":null},onPageChange:a,onPerPageChange:C=>{n(C),a(1)},config:{perPageOptions:[5,10,20],showInfo:!0}})}),t.jsx("div",{className:"code-snippet",children:`<PaginationPanel
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
</List>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"クリック可能リスト"}),t.jsx("p",{className:"component-description",children:"クリックイベントと選択状態を持つリスト"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(m,{style:{maxWidth:"400px"},children:["オプション 1","オプション 2","オプション 3","オプション 4"].map((C,L)=>t.jsx(f,{onClick:()=>o([L]),selected:i.includes(L),children:C},L))})}),t.jsx("div",{className:"code-snippet",children:`<List>
  {items.map((item, index) => (
    <ListItem
      key={index}
      onClick={() => handleSelect(index)}
      selected={selectedItems.includes(index)}
    >
      {item}
    </ListItem>
  ))}
</List>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"グラフ機能"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"LineChart"}),t.jsx("p",{className:"component-description",children:"時系列データの推移を表示する折れ線グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(h,{data:v,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<LineChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"BarChart（縦棒）"}),t.jsx("p",{className:"component-description",children:"数値の比較を分かりやすく表示する縦棒グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(g,{data:v,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<BarChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"HorizontalBarChart（横棒）"}),t.jsx("p",{className:"component-description",children:"数値の比較を横棒で表示し、項目名を読みやすくした横棒グラフ"})]}),t.jsx("div",{className:"component-demo",children:t.jsx(N,{data:v,width:600,height:300})}),t.jsx("div",{className:"code-snippet",children:`<HorizontalBarChart
  data={chartData}
  width={600}
  height={300}
/>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DonutChart"}),t.jsx("p",{className:"component-description",children:"割合や構成比を視覚的に表示するドーナツチャート"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(T,{data:z,width:400,height:400})})}),t.jsx("div",{className:"code-snippet",children:`<DonutChart
  data={pieData}
  width={350}
  height={350}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"テーブルは大量のデータを扱う場合、ページネーションと併用してください"}),t.jsx("li",{children:"データテーブルのプリセット設定により、一貫したスタイリングが適用されます"}),t.jsx("li",{children:"レスポンシブデザインを考慮し、モバイルでの表示を確認してください"}),t.jsx("li",{children:"ページネーションの表示件数は用途に応じて適切に設定してください"}),t.jsx("li",{children:"Listコンポーネントは統一されたスタイルで一覧表示を実現します"}),t.jsx("li",{children:"ListItemにはクリックイベントと選択状態を設定できます"}),t.jsx("li",{children:"リストアイテムの選択状態は配列で管理することを推奨します"}),t.jsx("li",{children:"折れ線グラフは時系列データや傾向の表示に適しています"}),t.jsx("li",{children:"縦棒グラフは数値の比較や順位の表示に効果的です"}),t.jsx("li",{children:"横棒グラフは項目名が長い場合や多数の項目がある場合に適しています"}),t.jsx("li",{children:"ドーナツグラフは割合や構成比の可視化に最適です"}),t.jsx("li",{children:"グラフのサイズは画面サイズに応じて調整してください"}),t.jsx("li",{children:"カラーパレットはブランドカラーに統一することを推奨します"})]})})]})]})};function _j(e,a="unified-scrollbar"){const{scrollbarConfig:l={}}=e,{width:n="17px",height:s="17px",trackColor:r="#f1f1f1",thumbColor:i="#c1c1c1",thumbHoverColor:o="#a8a8a8",cornerColor:c="#f1f1f1"}=l;return`.${a}{scrollbar-width:thin;-ms-overflow-style:auto;}.${a}::-webkit-scrollbar{width:${n};height:${s};}.${a}::-webkit-scrollbar-track{background:${r};border-radius:0;}.${a}::-webkit-scrollbar-thumb{background:${i};border-radius:0;border:none;}.${a}::-webkit-scrollbar-thumb:hover{background:${o};}.${a}::-webkit-scrollbar-corner{background:${c};}`}function Lj({tabs:e,activeTab:a,onChange:l,className:n="",config:s={},integrated:r=!1}){const i=_j(s,"tab-navigation-scrollbar");return u.useEffect(()=>{const o="tab-navigation-scrollbar-styles";let c=document.getElementById(o);return c||(c=document.createElement("style"),c.id=o,document.head.appendChild(c)),c.textContent=i,()=>{}},[i]),t.jsx("div",{className:`bg-white ${r?"":"border-b border-gray-200"} ${n}`,children:t.jsx("div",{className:"overflow-x-auto tab-navigation-scrollbar",children:t.jsx("nav",{className:"flex space-x-8 px-6 min-w-max",children:e.map(o=>t.jsx("button",{onClick:()=>l(o.key),className:`
                                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200
                                    ${a===o.key?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
                                `,children:o.label},o.key))})})})}function bc({active:e=!1,className:a="",children:l,href:n="#",...s}){return t.jsx("a",{href:n,...s,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+a,children:l})}function yc({active:e=!1,className:a="",children:l,href:n="#",...s}){return t.jsx("a",{href:n,...s,className:`flex w-full items-center border-l-4 py-2 pe-4 ps-3 ${e?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${a}`,children:l})}function Hj({children:e,align:a="right",width:l="48"}){var f,p,x,y;const[n,s]=u.useState(!1),[r,i]=u.useState("bottom"),o=u.useRef(null),c=u.useRef(null);u.useEffect(()=>{const j=w=>{o.current&&!o.current.contains(w.target)&&c.current&&!c.current.contains(w.target)&&s(!1)};if(n)return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[n]),u.useEffect(()=>{if(n&&c.current){const j=c.current.getBoundingClientRect(),w=window.innerHeight-j.bottom,b=j.top,v=64,h=130,g=30;w<h+g&&b>v+h+g?i("top"):i("bottom")}},[n]);const d=()=>r==="top"?a==="right"?"origin-bottom-right":"origin-bottom-left":a==="right"?"origin-top-right":"origin-top-left",m={48:"w-48",56:"w-56",64:"w-64"};return t.jsxs("div",{className:"relative",children:[t.jsx("div",{ref:c,children:t.jsx("button",{onClick:()=>s(!n),className:"flex items-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:t.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})})})}),n&&Fd.createPortal(t.jsx("div",{ref:o,className:`fixed ${m[l]} ${d()} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-150 ease-out`,style:{top:r==="top"?(((f=c.current)==null?void 0:f.getBoundingClientRect().top)||0)-130-8:(((p=c.current)==null?void 0:p.getBoundingClientRect().bottom)||0)+8,right:a==="right"?window.innerWidth-(((x=c.current)==null?void 0:x.getBoundingClientRect().right)||0):void 0,left:a==="left"?((y=c.current)==null?void 0:y.getBoundingClientRect().left)||0:void 0,zIndex:999999},children:t.jsx("div",{className:"py-1",onClick:j=>{j.target instanceof Element&&j.target.closest("button")&&s(!1)},children:e})}),document.body)]})}const Oj=()=>{const[e,a]=u.useState("overview"),[l,n]=u.useState(!1),[s,r]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState("right"),[m,f]=u.useState({0:!0}),p=({items:v,allowMultiple:h=!1})=>{const g=N=>{f(T=>h?{...T,[N]:!T[N]}:{[N]:!T[N]})};return t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:v.map((N,T)=>t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>g(T),style:{width:"100%",padding:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:m[T]?"var(--color-neutral-100)":"var(--color-neutral-white)",border:"none",borderBottom:T<v.length-1?"1px solid var(--color-neutral-200)":"none",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)",textAlign:"left",transition:"background-color 0.2s"},children:[t.jsx("span",{children:N.title}),t.jsx(k,{name:m[T]?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"var(--color-neutral-600)",transition:"transform 0.2s"}})]}),m[T]&&t.jsx("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-50)",borderBottom:T<v.length-1?"1px solid var(--color-neutral-200)":"none",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",lineHeight:"var(--line-height-relaxed)"},children:N.content})]},T))})},x=[{key:"overview",label:"概要",icon:"dashboard"},{key:"users",label:"ユーザー",icon:"users"},{key:"settings",label:"設定",icon:"settings"},{key:"reports",label:"レポート",icon:"chart"}],y=()=>{n(!l)},j=()=>{n(!1)},w=()=>{r(!s)},b=[{path:"/",label:"ホーム",icon:"home"},{path:"/buttons",label:"ボタン",icon:"cube"},{path:"/forms",label:"フォーム",icon:"edit"},{path:"/messages",label:"メッセージ",icon:"clipboard"},{path:"/tables",label:"テーブル",icon:"table"},{path:"/navigation",label:"ナビゲーション",icon:"menu"},{path:"/icons",label:"アイコン",icon:"star"}];return t.jsxs("div",{className:"navigation-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"ナビゲーション"}),t.jsx("p",{className:"page-description",children:"ページ間の移動、階層表示、検索・フィルタリング機能を提供するコンポーネント群"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"タブナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"TabNavigation"}),t.jsx("p",{className:"component-description",children:"コンテンツを複数のタブに分けて表示するナビゲーションコンポーネント"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsx("div",{className:"tab-navigation-wrapper",children:t.jsx(Lj,{tabs:x,activeTab:e,onTabChange:a,integrated:!0})}),t.jsxs("div",{className:"tab-content",children:[e==="overview"&&t.jsxs("div",{children:[t.jsx("h4",{children:"概要タブの内容"}),t.jsx("p",{children:"ここに概要情報が表示されます"})]}),e==="users"&&t.jsxs("div",{children:[t.jsx("h4",{children:"ユーザータブの内容"}),t.jsx("p",{children:"ユーザー関連の情報がここに表示されます"})]}),e==="settings"&&t.jsxs("div",{children:[t.jsx("h4",{children:"設定タブの内容"}),t.jsx("p",{children:"各種設定項目がここに表示されます"})]}),e==="reports"&&t.jsxs("div",{children:[t.jsx("h4",{children:"レポートタブの内容"}),t.jsx("p",{children:"レポートとダッシュボードがここに表示されます"})]})]})]}),t.jsx("div",{className:"code-snippet",children:`<TabNavigation
  tabs={[
    { key: 'tab1', label: 'タブ1', icon: 'icon-name' },
    { key: 'tab2', label: 'タブ2' }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ナビゲーションリンク"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"NavLink"}),t.jsx("p",{className:"component-description",children:"デスクトップナビゲーション用のリンクコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"nav-links-demo",children:[t.jsxs(bc,{href:"#",active:!0,children:[t.jsx(k,{name:"dashboard",className:"w-4 h-4 inline mr-2"}),"ダッシュボード"]}),t.jsxs(bc,{href:"#",children:[t.jsx(k,{name:"users",className:"w-4 h-4 inline mr-2"}),"ユーザー管理"]}),t.jsxs(bc,{href:"#",children:[t.jsx(k,{name:"settings",className:"w-4 h-4 inline mr-2"}),"設定"]})]})}),t.jsx("div",{className:"code-snippet",children:`<NavLink href="/dashboard" active>
  ダッシュボード
</NavLink>`})]}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SidebarLink"}),t.jsx("p",{className:"component-description",children:"サイドバーナビゲーション用のリンクコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"responsive-nav-demo",children:[t.jsxs(yc,{href:"#",active:!0,children:[t.jsx(k,{name:"dashboard",className:"w-4 h-4 inline mr-2"}),"ダッシュボード"]}),t.jsxs(yc,{href:"#",children:[t.jsx(k,{name:"users",className:"w-4 h-4 inline mr-2"}),"ユーザー管理"]}),t.jsxs(yc,{href:"#",children:[t.jsx(k,{name:"settings",className:"w-4 h-4 inline mr-2"}),"設定"]})]})}),t.jsx("div",{className:"code-snippet",children:`<SidebarLink href="/dashboard" active>
  ダッシュボード
</SidebarLink>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"パンくずナビゲーション"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"BreadcrumbNav"}),t.jsx("p",{className:"component-description",children:"現在のページ位置を階層的に表示するナビゲーション"})]}),t.jsx("div",{className:"component-demo",children:t.jsx("div",{className:"breadcrumb-demo",children:t.jsxs("div",{className:"breadcrumb-items",children:[t.jsxs("a",{href:"#",className:"breadcrumb-item",children:[t.jsx(k,{name:"home",className:"w-4 h-4"}),t.jsx("span",{children:"ホーム"})]}),t.jsx("span",{className:"breadcrumb-separator",children:t.jsx(k,{name:"chevron-right",className:"w-4 h-4"})}),t.jsx("a",{href:"#",className:"breadcrumb-item",children:t.jsx("span",{children:"マスタ管理"})}),t.jsx("span",{className:"breadcrumb-separator",children:t.jsx(k,{name:"chevron-right",className:"w-4 h-4"})}),t.jsx("span",{className:"breadcrumb-item current",children:t.jsx("span",{children:"ユーザー一覧"})})]})})}),t.jsx("div",{className:"code-snippet",children:`<BreadcrumbNav items={[
  { label: 'ホーム', href: '/', icon: 'home' },
  { label: 'マスタ管理', href: '/master' },
  { label: 'ユーザー一覧' }
]} />`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ドロップダウンメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DropdownMenu"}),t.jsx("p",{className:"component-description",children:"基本的なドロップダウンコンポーネント"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"dropdown-controls",children:[t.jsx("label",{children:"表示位置:"}),t.jsx(Oa,{onClick:()=>d("left"),className:`alignment-btn ${c==="left"?"active":""}`,children:"左"}),t.jsx(Oa,{onClick:()=>d("right"),className:`alignment-btn ${c==="right"?"active":""}`,children:"右"}),t.jsx("div",{className:"dropdown-demo",children:t.jsx(Hj,{isOpen:i,onToggle:()=>o(!i),align:c,trigger:t.jsx(Oa,{onClick:()=>o(!i),children:t.jsx(k,{name:"more-vertical",className:"w-4 h-4"})}),children:t.jsxs("div",{style:{padding:"var(--spacing-2)"},children:[t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:"プロフィール"}),t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer"},children:"設定"}),t.jsx("hr",{style:{margin:"var(--spacing-2) 0"}}),t.jsx("div",{style:{padding:"var(--spacing-2)",cursor:"pointer",color:"var(--color-danger-600)"},children:"ログアウト"})]})})})]})}),t.jsx("div",{className:"code-snippet",children:`<DropdownMenu
  isOpen={isOpen}
  onToggle={onToggle}
  align="right"
  trigger={<button>メニュー</button>}
>
  <div>ドロップダウンの内容</div>
</DropdownMenu>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ハンバーガーメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"HamburgerMenu"}),t.jsx("p",{className:"component-description",children:"モバイル向けのハンバーガーメニューボタン（3本線アイコン）"})]}),t.jsx("div",{className:"component-demo",children:t.jsxs("div",{className:"hamburger-demo",children:[t.jsxs("div",{className:"hamburger-header",children:[t.jsx("h4",{children:"サイトタイトル"}),t.jsx("button",{className:`hamburger-button ${s?"active":""}`,onClick:w,"aria-label":s?"メニューを閉じる":"メニューを開く",children:t.jsx(k,{name:"menu",className:"w-5 h-5 hamburger-icon"})})]}),t.jsx("div",{className:`hamburger-menu ${s?"open":""}`,children:t.jsx("ul",{className:"hamburger-nav-list",children:b.map((v,h)=>t.jsx("li",{className:"hamburger-nav-item",children:t.jsxs("a",{href:v.path,className:`hamburger-nav-link ${v.path==="/navigation"?"active":""}`,onClick:g=>{g.preventDefault(),r(!1)},children:[t.jsx(k,{name:v.icon,className:"w-4 h-4"}),v.label]})},v.path))})}),t.jsxs("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:["ハンバーガーメニューボタン - クリックして状態変化を確認",t.jsx("br",{}),"状態: ",s?"開いている":"閉じている"]})]})}),t.jsx("div",{className:"code-snippet",children:`// 状態管理
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
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"ドロワーメニュー"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"DrawerMenu"}),t.jsx("p",{className:"component-description",children:"スライド式のナビゲーションドロワー（ハンバーガーメニューと組み合わせて使用）"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"hamburger-demo",children:[t.jsxs("div",{className:"hamburger-header",children:[t.jsx("h4",{children:"サイトタイトル"}),t.jsx("button",{className:"hamburger-button",onClick:y,"aria-label":"メニューを開く",children:t.jsx(k,{name:"menu",className:"w-5 h-5"})})]}),t.jsx("p",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"ハンバーガーメニューをクリックしてドロワーを開く"})]}),t.jsx("div",{className:`drawer-overlay ${l?"open":""}`,onClick:j}),t.jsxs("div",{className:`drawer ${l?"open":""}`,children:[t.jsxs("div",{className:"drawer-header",children:[t.jsx("div",{className:"drawer-title",children:"ナビゲーション"}),t.jsx("button",{className:"drawer-close",onClick:j,"aria-label":"メニューを閉じる",children:t.jsx(k,{name:"close",className:"w-4 h-4"})})]}),t.jsx("nav",{className:"drawer-nav",children:t.jsx("ul",{className:"drawer-nav-list",children:b.map((v,h)=>t.jsx("li",{className:"drawer-nav-item",children:t.jsxs("a",{href:v.path,className:`drawer-nav-link ${v.path==="/navigation"?"active":""}`,onClick:g=>{g.preventDefault(),j()},children:[t.jsx(k,{name:v.icon,className:"w-5 h-5"}),v.label]})},v.path))})})]})]}),t.jsx("div",{className:"code-snippet",children:`// ドロワーオーバーレイ
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
/>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"タブナビゲーションは5つ以下のタブに制限することを推奨します"}),t.jsx("li",{children:"パンくずは3〜4階層までが理想的です"}),t.jsx("li",{children:"NavLinkは現在のページをactiveプロパティで示してください"}),t.jsx("li",{children:"SidebarLinkはサイドバーメニュー内で使用してください"}),t.jsx("li",{children:"ハンバーガーメニューは768px以下のモバイル画面で表示することが一般的です"}),t.jsx("li",{children:"ハンバーガーメニューボタンには適切なaria-labelを設定してください"}),t.jsx("li",{children:"ドロワーメニューは外部クリック、ESCキー、閉じるボタンで閉じられるようにしてください"}),t.jsx("li",{children:"ドロワーメニューはハンバーガーメニューと組み合わせて使用します"}),t.jsx("li",{children:"アコーディオンの単一展開モードはFAQやヘルプページに適しています"}),t.jsx("li",{children:"アコーディオンの複数展開モードはナビゲーションメニューや設定画面に適しています"}),t.jsx("li",{children:"アコーディオンは長いコンテンツを整理し、ユーザーが必要な情報のみを表示できます"})]})})]})]})},Vj=()=>{const e=({size:_="md",color:Y="#007bff",backgroundColor:G="rgba(255, 255, 255, 0.9)",overlay:A=!1,text:R=null,show:E=!0})=>{if(!E)return null;const U={sm:{width:"20px",height:"20px",borderWidth:"2px"},md:{width:"40px",height:"40px",borderWidth:"4px"},lg:{width:"60px",height:"60px",borderWidth:"6px"},xl:{width:"80px",height:"80px",borderWidth:"8px"}},V={width:U[_].width,height:U[_].height,border:`${U[_].borderWidth} solid #f3f3f3`,borderTop:`${U[_].borderWidth} solid ${Y}`,borderRadius:"50%",animation:"spin 1s linear infinite"},J={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",...A&&{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:G,zIndex:9999}};return t.jsxs("div",{style:J,children:[t.jsx("style",{children:`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}),t.jsx("div",{style:V}),R&&t.jsx("span",{style:{fontSize:"14px",color:"#666",fontWeight:"500"},children:R})]})},[a,l]=u.useState("standard"),[n,s]=u.useState(!1),[r,i]=u.useState("mobile-first"),[o,c]=u.useState(!0),[d,m]=u.useState(!1),[f,p]=u.useState(!1),[x,y]=u.useState(!1),[j,w]=u.useState(!1),[b,v]=u.useState("blue"),[h,g]=u.useState(!1),[N,T]=u.useState(!1),[z,C]=u.useState(!1),[L,H]=u.useState(!1),[M,B]=u.useState("default");return t.jsxs("div",{className:"layout-page",children:[t.jsx("style",{jsx:!0,children:`
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
      `}),t.jsxs("div",{className:"page-header",children:[t.jsx("h1",{className:"page-title",children:"レイアウト"}),t.jsx("p",{className:"page-description",children:"PC（デスクトップ）とSP（スマートフォン）向けのレイアウトコンポーネント。 デバイスごとに最適化されたレイアウト構造を提供します。"})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"配色"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"Color Theme"}),t.jsx("p",{className:"component-description",children:"プロジェクトのブランドアイデンティティに合わせた配色テーマ。青基調はデフォルト、軽量なUIには白基調、汎用系はグレー基調を推奨します。"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"theme-selector",children:[t.jsxs("button",{className:`theme-button ${b==="blue"?"active":""}`,onClick:()=>v("blue"),children:[t.jsx("div",{className:"theme-preview blue"}),"青基調"]}),t.jsxs("button",{className:`theme-button ${b==="white"?"active":""}`,onClick:()=>v("white"),children:[t.jsx("div",{className:"theme-preview white"}),"白基調"]}),t.jsxs("button",{className:`theme-button ${b==="grey"?"active":""}`,onClick:()=>v("grey"),children:[t.jsx("div",{className:"theme-preview grey"}),"グレー基調"]})]}),t.jsxs("div",{className:`theme-demo-layout ${b}-theme`,children:[t.jsx("nav",{className:"theme-nav-header",children:t.jsx("div",{className:"theme-nav-container",children:t.jsx("a",{href:"#",className:"theme-nav-logo",children:"App Title"})})}),t.jsxs("div",{className:"theme-main-content",children:[t.jsxs("aside",{className:"theme-sidebar",children:[t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(k,{name:"dashboard",className:"w-4 h-4",style:{marginRight:"6px"}}),"ダッシュボード"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(k,{name:"users",className:"w-4 h-4",style:{marginRight:"6px"}}),"ユーザー"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(k,{name:"settings",className:"w-4 h-4",style:{marginRight:"6px"}}),"設定"]}),t.jsxs("div",{className:"theme-menu-item",children:[t.jsx(k,{name:"clipboard",className:"w-4 h-4",style:{marginRight:"6px"}}),"レポート"]})]}),t.jsxs("main",{className:"theme-content",children:[t.jsx("h3",{style:{margin:"0 0 var(--spacing-3) 0",fontSize:"var(--font-size-sm)"},children:"テーマ適用サンプル"}),t.jsxs("p",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"var(--font-size-xs)",lineHeight:"var(--line-height-relaxed)"},children:["現在のUI Componentsのレイアウトを再現したプレビューです。",t.jsx("br",{}),"選択したテーマに応じて、ヘッダー、サイドバー、フッターの色が変化します。"]}),t.jsx("div",{style:{background:b==="blue"?"#e1edff":b==="white"?"var(--color-primary-50)":"#f3f4f6",padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-xs)",color:b==="blue"?"rgb(21, 52, 109)":b==="white"?"var(--color-primary-700)":"#374151"},children:"🎨 ブランドアイデンティティに合わせた配色テーマで一貫性を保ちます"})]})]}),t.jsx("footer",{className:"theme-footer",children:t.jsxs("p",{style:{margin:0},children:["© 2025 UI Components - ",b==="blue"?"Blue Theme":b==="white"?"White Theme":"Grey Theme"]})})]})]}),t.jsx("div",{className:"code-snippet",children:`/* 青基調テーマ */
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
}`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"PCレイアウト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"PC Layout"}),t.jsx("p",{className:"component-description",children:"デスクトップ向けのレイアウト。横幅を活用した多カラム構成が可能"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"layout-selector",children:[t.jsx("button",{className:`layout-button ${a==="standard"?"active":""}`,onClick:()=>l("standard"),children:"基本"}),t.jsx("button",{className:`layout-button ${a==="drawer"?"active":""}`,onClick:()=>l("drawer"),children:"サイドバー固定"}),t.jsx("button",{className:`layout-button ${a==="overlay"?"active":""}`,onClick:()=>l("overlay"),children:"オーバーレイ"}),t.jsx("button",{className:`layout-button ${a==="navigation"?"active":""}`,onClick:()=>l("navigation"),children:"ナビゲーション"})]}),t.jsxs("div",{className:"pc-layout-demo",children:[a==="navigation"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-nav",children:[t.jsxs("a",{href:"#",className:"pc-nav-item active",children:[t.jsx(k,{name:"home",className:"w-4 h-4",style:{marginRight:"8px"}}),"ホーム"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(k,{name:"user",className:"w-4 h-4",style:{marginRight:"8px"}}),"会社情報"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(k,{name:"briefcase",className:"w-4 h-4",style:{marginRight:"8px"}}),"サービス"]}),t.jsxs("a",{href:"#",className:"pc-nav-item",children:[t.jsx(k,{name:"mail",className:"w-4 h-4",style:{marginRight:"8px"}}),"お問い合わせ"]})]}),t.jsxs("div",{className:"pc-content",children:["ナビゲーション表示レイアウト",t.jsx("br",{}),"フルワイドでコンテンツを表示",t.jsx("br",{}),t.jsx("br",{}),"ヘッダー下にナビゲーション",t.jsx("br",{}),"メニューを配置するパターン"]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),a==="standard"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-main",children:[t.jsxs("div",{className:`pc-sidebar ${n?"collapsed":""}`,children:[t.jsx("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:n?"center":"flex-end"},children:t.jsx("button",{onClick:()=>s(!n),style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:t.jsx(k,{name:n?"chevron-right":"chevron-left",className:"w-4 h-4",style:{color:"white"}})})}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(k,{name:"dashboard",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"ダッシュボード"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(k,{name:"users",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"ユーザー"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(k,{name:"settings",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"設定"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(k,{name:"clipboard",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"レポート"})]}),t.jsxs("div",{className:"sidebar-item",children:[t.jsx(k,{name:"star",className:"w-4 h-4",style:{color:"white"}}),!n&&t.jsx("span",{children:"分析"})]})]}),t.jsxs("div",{className:"pc-content",children:["基本レイアウト",t.jsx("br",{}),"サイドバー付きの構成",t.jsx("br",{}),t.jsx("br",{}),"標準的なレイアウト",t.jsx("br",{}),"ダッシュボードに最適",t.jsx("br",{}),t.jsx("br",{}),"メインコンテンツエリア",t.jsx("br",{}),"管理画面向けの設計"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),a==="drawer"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"pc-drawer-layout",children:[t.jsx("div",{className:`pc-drawer-sidebar ${o?"":"collapsed"}`,children:t.jsxs("div",{className:"drawer-menu-items",style:{marginTop:"8px"},children:[t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(k,{name:"dashboard",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ダッシュボード"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(k,{name:"users",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ユーザー"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(k,{name:"settings",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"設定"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(k,{name:"clipboard",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"レポート"]}),t.jsxs("div",{className:"drawer-menu-item",style:{padding:"var(--spacing-1) var(--spacing-2)"},children:[t.jsx(k,{name:"star",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"分析"]})]})}),t.jsxs("div",{className:"pc-drawer-content",children:["サイドバー固定レイアウト",t.jsx("br",{}),"サイドバーが常時表示",t.jsx("br",{}),t.jsx("br",{}),"安定したナビゲーション",t.jsx("br",{}),"管理画面に最適",t.jsx("br",{}),t.jsx("br",{}),"コンテンツ領域と",t.jsx("br",{}),"バランスの取れた設計"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]}),a==="overlay"&&t.jsxs("div",{children:[t.jsx("div",{className:"pc-header",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("button",{className:"drawer-toggle",onClick:()=>m(!d),style:{position:"static",background:"none",border:"none",fontSize:"12px",cursor:"pointer",padding:"2px 4px",borderRadius:"3px"},children:"≡"}),t.jsx("span",{children:"App Title"})]})}),t.jsxs("div",{className:"overlay-drawer-layout",children:[t.jsx("div",{className:`overlay-drawer-backdrop ${d?"open":""}`,onClick:()=>m(!1)}),t.jsx("div",{className:`overlay-drawer-sidebar ${d?"open":""}`,children:t.jsxs("div",{className:"overlay-menu-items",style:{marginTop:"8px"},children:[t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(k,{name:"dashboard",className:"w-4 h-4",style:{color:"white"}}),"ダッシュボード"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(k,{name:"users",className:"w-4 h-4",style:{color:"white"}}),"ユーザー"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(k,{name:"settings",className:"w-4 h-4",style:{color:"white"}}),"設定"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(k,{name:"clipboard",className:"w-4 h-4",style:{color:"white"}}),"レポート"]}),t.jsxs("div",{className:"overlay-menu-item",children:[t.jsx(k,{name:"star",className:"w-4 h-4",style:{color:"white"}}),"分析"]})]})}),t.jsxs("div",{className:"overlay-drawer-content",children:["オーバーレイドロワー",t.jsx("br",{}),"コンテンツの上に重なる",t.jsx("br",{}),t.jsx("br",{}),"背景クリックで閉じる",t.jsx("br",{}),t.jsx("br",{}),"モバイルライクなUX",t.jsx("br",{}),t.jsx("br",{}),"画面サイズを問わず",t.jsx("br",{}),"一定の操作感"]})]}),t.jsx("div",{className:"pc-footer",children:"© 2025 App Title"})]})]})]}),t.jsx("div",{className:"code-snippet",children:`<div className="pc-layout">
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
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"SPレイアウト"}),t.jsxs("div",{className:"component-card",children:[t.jsxs("div",{className:"component-info",children:[t.jsx("h3",{className:"component-name",children:"SP Layout"}),t.jsx("p",{className:"component-description",children:"スマートフォン向けのレイアウト。基本はハンバーガーメニューを使用した1カラム構成"})]}),t.jsxs("div",{className:"component-demo",children:[t.jsxs("div",{className:"layout-selector",children:[t.jsx("button",{className:`layout-button ${r==="mobile-first"?"active":""}`,onClick:()=>i("mobile-first"),children:"基本"}),t.jsx("button",{className:`layout-button ${r==="drawer"?"active":""}`,onClick:()=>i("drawer"),children:"ドロワー"}),t.jsx("button",{className:`layout-button ${r==="fullscreen"?"active":""}`,onClick:()=>i("fullscreen"),children:"全画面表示"}),t.jsx("button",{className:`layout-button ${r==="bottom-nav"?"active":""}`,onClick:()=>i("bottom-nav"),children:"ボトムナビ"})]}),t.jsx("div",{className:"sp-frame",children:t.jsxs("div",{className:"sp-layout-demo",children:[r==="mobile-first"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>p(!f),children:"☰"}),f&&t.jsxs("div",{className:`sp-hamburger-menu ${f?"open":""}`,children:[t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(k,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(k,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(k,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(k,{name:"mail",className:"w-4 h-4",style:{color:"white !important",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-hamburger-item",children:[t.jsx(k,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]}),t.jsxs("div",{className:"sp-content",children:["基本のモバイルレイアウト",t.jsx("br",{}),t.jsx("br",{}),"クリックでハンバーガー",t.jsx("br",{}),"メニューが表示される",t.jsx("br",{}),t.jsx("br",{}),"縦スクロールでの",t.jsx("br",{}),"コンテンツ表示",t.jsx("br",{}),t.jsx("br",{}),"最もスタンダードな",t.jsx("br",{}),"SP構成"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"})]}),r==="fullscreen"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsx("div",{style:{position:"relative"},children:t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>w(!j),children:"☰"})})]}),t.jsxs("div",{className:"sp-content",children:["全画面メニューレイアウト",t.jsx("br",{}),t.jsx("br",{}),"ハンバーガークリックで",t.jsx("br",{}),"全画面にメニュー表示",t.jsx("br",{}),t.jsx("br",{}),"シンプルで分かりやすい",t.jsx("br",{}),"ナビゲーション",t.jsx("br",{}),t.jsx("br",{}),"モバイルアプリ風の",t.jsx("br",{}),"操作感を実現"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"}),t.jsxs("div",{className:`sp-fullscreen-overlay ${j?"open":""}`,children:[t.jsx("button",{className:"sp-fullscreen-close",onClick:()=>w(!1),children:"×"}),t.jsxs("div",{className:"sp-fullscreen-menu",children:[t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(k,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(k,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(k,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(k,{name:"mail",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-fullscreen-item",children:[t.jsx(k,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]}),r==="bottom-nav"&&t.jsxs("div",{children:[t.jsx("div",{className:"sp-header",children:t.jsx("span",{children:"App Title"})}),t.jsxs("div",{className:"sp-content",children:["ボトムナビゲーション",t.jsx("br",{}),"レイアウト",t.jsx("br",{}),t.jsx("br",{}),"下部に固定された",t.jsx("br",{}),"タブナビゲーション",t.jsx("br",{}),t.jsx("br",{}),"アプリライクな",t.jsx("br",{}),"操作感を実現",t.jsx("br",{}),t.jsx("br",{}),"タブ切り替えで",t.jsx("br",{}),"コンテンツ表示"]}),t.jsxs("div",{className:"sp-nav",style:{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"var(--spacing-3)"},children:[t.jsxs("div",{className:"sp-nav-item active",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["🏠",t.jsx("span",{children:"ホーム"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["📊",t.jsx("span",{children:"分析"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["💬",t.jsx("span",{children:"メッセージ"})]}),t.jsxs("div",{className:"sp-nav-item",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",fontSize:"10px"},children:["⚙️",t.jsx("span",{children:"設定"})]})]})]}),r==="drawer"&&t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"sp-header",children:[t.jsx("span",{children:"App Title"}),t.jsx("div",{style:{position:"relative"},children:t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"14px",color:"white"},onClick:()=>y(!x),children:"☰"})})]}),t.jsxs("div",{className:"sp-content",children:["ドロワーメニューレイアウト",t.jsx("br",{}),t.jsx("br",{}),"右端のハンバーガークリックで",t.jsx("br",{}),"右からドロワーが表示",t.jsx("br",{}),t.jsx("br",{}),"基本オプションと同じ",t.jsx("br",{}),"レイアウト構成",t.jsx("br",{}),t.jsx("br",{}),"背景クリックで閉じる"]}),t.jsx("div",{className:"sp-footer",children:"© 2025 App Title"}),t.jsx("div",{className:`sp-drawer-backdrop ${x?"open":""}`,onClick:()=>y(!1)}),t.jsxs("div",{className:`sp-drawer-sidebar ${x?"open":""}`,children:[t.jsx("button",{style:{position:"absolute",top:"var(--spacing-2)",right:"var(--spacing-2)",background:"none",border:"none",color:"white",fontSize:"18px",cursor:"pointer",padding:"var(--spacing-1)",zIndex:60},onClick:()=>y(!1),children:"×"}),t.jsxs("div",{style:{marginTop:"32px"},children:[t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(k,{name:"home",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ホーム"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(k,{name:"briefcase",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"サービス"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(k,{name:"building",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"会社情報"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(k,{name:"mail",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"お問い合わせ"]}),t.jsxs("div",{className:"sp-drawer-menu-item",children:[t.jsx(k,{name:"user",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"マイページ"]})]})]})]})]})})]}),t.jsx("div",{className:"code-snippet",children:`<div className="sp-layout">
  <header className="sp-header">
    <!-- ヘッダー：ハンバーガーメニュー、タイトル -->
  </header>
  <main className="sp-content">
    <!-- メインコンテンツ：縦スクロール -->
  </main>
  <nav className="sp-bottom-nav">
    <!-- ボトムナビゲーション（オプション） -->
  </nav>
</div>`})]})]}),t.jsxs("div",{className:"component-section",children:[t.jsx("h2",{className:"section-title",children:"使用上の注意"}),t.jsx("div",{className:"component-card",children:t.jsxs("ul",{style:{lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("li",{children:"PCレイアウトは横幅1024px以上のデスクトップ環境を想定しています"}),t.jsx("li",{children:"SPレイアウトは横幅375px〜768pxのモバイル環境を想定しています"}),t.jsx("li",{children:"タブレット端末（768px〜1024px）はSPレイアウト準拠で実装してください"}),t.jsx("li",{children:"サイドバー付きレイアウトは管理画面やダッシュボードに適しています"}),t.jsx("li",{children:"ボトムナビゲーションはアプリライクなUXを実現できます"}),t.jsx("li",{children:"ドロワーメニューはコンテンツ領域を最大化したい場合に有効です"}),t.jsx("li",{children:"レスポンシブ対応時は@mediaクエリでPC/SPレイアウトを切り替えてください"}),t.jsx("li",{children:"タッチデバイスではボタンサイズを44px以上に設定することを推奨します"}),t.jsx("li",{children:"青基調テーマはビジネス系システムに、グレー基調テーマは汎用系システムに適しています"}),t.jsx("li",{children:"テーマ色はブランドガイドラインに合わせてカスタマイズしてください"})]})})]}),t.jsx(e,{show:h,overlay:!0,size:"md",text:"読み込み中..."}),t.jsx(e,{show:N,overlay:!0,size:"lg",color:"#28a745",text:"データを処理中...",backgroundColor:"rgba(40, 167, 69, 0.1)"}),t.jsx(e,{show:z,overlay:!0,size:"sm",color:"#ffc107",text:"少々お待ちください...",backgroundColor:"rgba(255, 193, 7, 0.1)"}),t.jsx(e,{show:L,overlay:!0,size:"xl",color:"#dc3545",text:"重要な処理を実行中です...",backgroundColor:"rgba(0, 0, 0, 0.7)"})]})},Ku=u.createContext(void 0),Ce=({children:e})=>{const[a,l]=u.useState(!1),n=()=>{l(s=>!s)};return t.jsx(Ku.Provider,{value:{open:a,setOpen:l,toggleOpen:n},children:t.jsx("div",{className:"relative",children:e})})},$j=({children:e})=>{const a=u.useContext(Ku);if(!a)throw new Error("Trigger must be used within a Dropdown");const{open:l,setOpen:n,toggleOpen:s}=a;return t.jsxs(t.Fragment,{children:[t.jsx("div",{onClick:s,children:e}),l&&t.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},Uj=({align:e="right",width:a="48",contentClasses:l="py-1 bg-white",children:n})=>{const s=u.useContext(Ku);if(!s)throw new Error("Content must be used within a Dropdown");const{open:r,setOpen:i}=s;let o="origin-top";e==="left"?o="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(o="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return a==="48"&&(c="w-48"),t.jsx(t.Fragment,{children:t.jsx(Pu,{show:r,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${o} ${c}`,onClick:()=>i(!1),children:t.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+l,children:n})})})})},qj=({className:e="",children:a,href:l="#",onClick:n,...s})=>{const r=i=>{i.preventDefault(),n==null||n(i)};return t.jsx("a",{href:l,onClick:r,...s,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+e,children:a})};Ce.Trigger=$j;Ce.Content=Uj;Ce.Link=qj;const ke=({viewMode:e="pc",onViewModeChange:a,className:l="",hide:n=!1,showCategories:s,showViewMode:r})=>{if(n)return null;let i,o;try{i=Dt(),o=Jl()}catch{console.warn("TemplateNavigation: React Router hooks not available. Navigation disabled.")}const d=((o==null?void 0:o.pathname)||"").startsWith("/templates"),m=d?"/templates":"/pages",f=s!==void 0?s:!d,p=r!==void 0?r:!d,x=o?[`${m}/login`,`${m}/signup`,`${m}/signup-confirm`,`${m}/signup-complete`,`${m}/forgot-password`,`${m}/reset-password`,`${m}/password-reset-email`].some(h=>o.pathname.startsWith(h)):!1,y=o?[`${m}/dashboard`,`${m}/data/`,`${m}/statistics`,`${m}/notifications`,`${m}/settings`].some(h=>o.pathname.startsWith(h)):!1,j=o?[`${m}/error-404`,`${m}/error-500`,`${m}/maintenance`,`${m}/qna`,`${m}/terms`,`${m}/privacy`,`${m}/commercial`].some(h=>o.pathname.startsWith(h)):!1,w=()=>o?o.pathname.startsWith(`${m}/login`)?"ログイン":o.pathname.startsWith(`${m}/signup-complete`)?"登録完了":o.pathname.startsWith(`${m}/signup-confirm`)?"登録確認":o.pathname.startsWith(`${m}/signup`)?"新規登録":o.pathname.startsWith(`${m}/forgot-password`)?"再設定URL送信":o.pathname.startsWith(`${m}/reset-password`)?"パスワード再設定":o.pathname.startsWith(`${m}/password-reset-email`)?"リセットメール":"ページを選択":"ページを選択",b=()=>o?o.pathname.startsWith(`${m}/dashboard`)?"ダッシュボード":o.pathname.startsWith(`${m}/data/list`)?"データ一覧":o.pathname.startsWith(`${m}/data/add`)?"データ作成":o.pathname.startsWith(`${m}/data/edit`)?"データ編集":o.pathname.startsWith(`${m}/data/detail`)?"データ詳細":o.pathname.startsWith(`${m}/statistics`)?"統計":o.pathname.startsWith(`${m}/notifications`)?"通知一覧":o.pathname.startsWith(`${m}/settings`)?"設定":"ページを選択":"ページを選択",v=()=>o?o.pathname.startsWith(`${m}/qna`)?"Q&A":o.pathname.startsWith(`${m}/terms`)?"利用規約":o.pathname.startsWith(`${m}/privacy`)?"プライバシーポリシー":o.pathname.startsWith(`${m}/commercial`)?"特定商取引法":o.pathname.startsWith(`${m}/error-404`)?"404エラー":o.pathname.startsWith(`${m}/error-500`)?"500エラー":o.pathname.startsWith(`${m}/maintenance`)?"メンテナンス":"ページを選択":"ページを選択";return t.jsxs("div",{className:`template-navigation ${l}`,children:[f&&t.jsxs("div",{className:"navigation-group",children:[t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"ログイン前"}),t.jsxs(Ce,{children:[t.jsx(Ce.Trigger,{children:t.jsxs("button",{className:`page-select-button ${x?"active":""}`,children:[w(),t.jsx(k,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(Ce.Content,{align:"left",children:[t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/login`),children:"ログイン"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/signup`),children:"新規登録"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/signup-confirm`),children:"登録確認"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/signup-complete`),children:"登録完了"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/forgot-password`),children:"再設定URL送信"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/reset-password`),children:"パスワード再設定"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/password-reset-email`),children:"リセットメール"})]})]})]}),t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"ログイン後"}),t.jsxs(Ce,{children:[t.jsx(Ce.Trigger,{children:t.jsxs("button",{className:`page-select-button ${y?"active":""}`,children:[b(),t.jsx(k,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(Ce.Content,{align:"left",children:[t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/dashboard`),children:"ダッシュボード"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/data/list`),children:"データ一覧"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/data/add`),children:"データ作成"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/data/edit`),children:"データ編集"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/data/detail`),children:"データ詳細"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/statistics`),children:"統計"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/notifications`),children:"通知一覧"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/settings`),children:"設定"})]})]})]}),t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"その他"}),t.jsxs(Ce,{children:[t.jsx(Ce.Trigger,{children:t.jsxs("button",{className:`page-select-button ${j?"active":""}`,children:[v(),t.jsx(k,{name:"chevron-down",style:{width:"16px",height:"16px"}})]})}),t.jsxs(Ce.Content,{align:"left",children:[t.jsx("div",{style:{padding:"var(--spacing-2) var(--spacing-3)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)"},children:"情報ページ"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/qna`),children:"Q&A"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/terms`),children:"利用規約"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/privacy`),children:"プライバシーポリシー"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/commercial`),children:"特定商取引法"}),t.jsx("div",{style:{padding:"var(--spacing-2) var(--spacing-3)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-600)",borderTop:"1px solid var(--color-neutral-200)",marginTop:"var(--spacing-1)"},children:"エラー/メンテナンス"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/error-404`),children:"404エラー"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/error-500`),children:"500エラー"}),t.jsx(Ce.Link,{onClick:()=>i==null?void 0:i(`${m}/maintenance`),children:"メンテナンス"})]})]})]})]}),p&&a&&t.jsxs("div",{className:"navigation-section",children:[t.jsx("div",{className:"navigation-label",children:"表示モード"}),t.jsxs("div",{className:"view-mode-toggle",children:[t.jsxs("button",{className:`view-mode-button ${e==="pc"?"active":""}`,onClick:()=>a("pc"),children:[t.jsx(k,{name:"desktop",style:{width:"16px",height:"16px"}}),"PC"]}),t.jsxs("button",{className:`view-mode-button ${e==="sp"?"active":""}`,onClick:()=>a("sp"),children:[t.jsx(k,{name:"device-mobile",style:{width:"16px",height:"16px"}}),"SP"]})]})]})]})},Im="app-view-mode",ea=()=>{const[e,a]=u.useState(()=>{if(typeof window<"u"){const n=localStorage.getItem(Im);return n==="sp"||n==="pc"?n:"pc"}return"pc"});return[e,n=>{a(n),typeof window<"u"&&localStorage.setItem(Im,n)}]},Rd=e=>{var B,_,Y,G,A;const[a,l]=ea(),[n,s]=u.useState(""),[r,i]=u.useState(""),[o,c]=u.useState(!1),[d,m]=u.useState({}),[f,p]=u.useState(),x=e.email!==void 0?e.email:n,y=e.password!==void 0?e.password:r,j=e.rememberMe!==void 0?e.rememberMe:o,w=e.showRememberMe!==void 0?e.showRememberMe:!1,b={email:((B=e.errors)==null?void 0:B.email)||((_=e.loginErrors)==null?void 0:_.email)||d.email,password:((Y=e.errors)==null?void 0:Y.password)||((G=e.loginErrors)==null?void 0:G.password)||d.password},v=((A=e.flash)==null?void 0:A.error)||e.loginFormError||f,h=R=>{if(!R)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R))return"正しいメールアドレスを入力してください"},g=R=>{if(!R)return"パスワードを入力してください";if(R.length<8)return"パスワードは8文字以上で入力してください"},N=R=>{e.onEmailChange?e.onEmailChange(R):(s(R),m(E=>({...E,email:void 0})))},T=R=>{e.onPasswordChange?e.onPasswordChange(R):(i(R),m(E=>({...E,password:void 0})))},z=R=>{e.onRememberMeChange?e.onRememberMeChange(R):c(R)},C=R=>{if(e.onEmailBlur)e.onEmailBlur(R);else{const E=h(R);m(U=>({...U,email:E}))}},L=R=>{if(e.onPasswordBlur)e.onPasswordBlur(R);else{const E=g(R);m(U=>({...U,password:E}))}},H=R=>{if(R.preventDefault(),e.onSubmit)e.onSubmit(R);else{const E=h(x),U=g(y);if(E||U){m({email:E,password:U});return}console.log("Login attempt:",{email:x,password:y,rememberMe:j}),p(void 0)}},M=()=>{if(e.onNavigateToForgotPassword)e.onNavigateToForgotPassword();else if(typeof window<"u"){const U=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${U}/forgot-password`}};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e.hideNavigation,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"ログイン"}),t.jsx("p",{className:"login-subtitle",children:"アカウントにログインしてください"}),t.jsxs("form",{className:"login-form",onSubmit:H,noValidate:!0,children:[v&&t.jsxs("div",{className:"login-error",children:[t.jsx(k,{name:"exclamation",className:"w-5 h-5"}),t.jsx("span",{children:v})]}),t.jsx(We,{label:"メールアドレス",type:"email",name:"email",value:x,onChange:R=>N(R.target.value),onBlur:R=>C(R.target.value),placeholder:"example@email.com",required:!0,error:b.email}),t.jsx(We,{label:"パスワード",type:"password",name:"password",value:y,onChange:R=>T(R.target.value),onBlur:R=>L(R.target.value),placeholder:"••••••••",required:!0,error:b.password}),w&&t.jsxs("label",{className:"remember-me",children:[t.jsx(Ot,{name:"remember",checked:j,onChange:R=>z(R.target.checked)}),t.jsx("span",{children:"ログイン状態を保存する"})]}),t.jsx("div",{style:{textAlign:"center"},children:t.jsx("a",{href:"#",onClick:R=>{R.preventDefault(),M()},style:{color:"var(--color-primary-600)",textDecoration:"underline",fontSize:"var(--font-size-sm)"},children:"パスワードを忘れた場合"})}),t.jsx("button",{type:"submit",className:"login-button",children:"ログイン"})]})]})})]})},Td=e=>{var b,v;const[a,l]=ea(),[n,s]=u.useState(""),[r,i]=u.useState(),[o,c]=u.useState(!1),d=e.resetEmail!==void 0?e.resetEmail:n,m=((b=e.errors)==null?void 0:b.email)||e.resetEmailError||r,f=(v=e.flash)!=null&&v.status?!0:e.resetEmailSuccess!==void 0?e.resetEmailSuccess:o,p=h=>{if(!h)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h))return"正しいメールアドレスを入力してください"},x=h=>{e.onResetEmailChange?e.onResetEmailChange(h):(s(h),i(void 0),c(!1))},y=h=>{if(e.onResetEmailBlur)e.onResetEmailBlur(h);else{const g=p(h);i(g)}},j=h=>{if(h.preventDefault(),e.onSubmit)e.onSubmit(h);else{const g=p(d);if(g){i(g);return}console.log("Password reset requested for:",d),c(!0),i(void 0)}},w=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const N=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${N}/login`}};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e.hideNavigation,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"パスワード再設定"}),t.jsx("p",{className:"login-subtitle",children:"メールアドレスに再設定用URLを送信します"}),t.jsxs("form",{className:"login-form",onSubmit:j,noValidate:!0,children:[f&&t.jsxs("div",{className:"success-message",children:[t.jsx(k,{name:"check-circle",className:"w-5 h-5"}),t.jsxs("span",{children:["再設定用URLを送信しました。",t.jsx("br",{}),"メールをご確認ください。"]})]}),t.jsx(We,{label:"メールアドレス",type:"email",name:"resetEmail",value:d,onChange:h=>x(h.target.value),onBlur:h=>y(h.target.value),placeholder:"example@email.com",required:!0,error:m}),t.jsx("button",{type:"submit",className:"login-button",children:"再設定用URLを送信"}),t.jsx("div",{style:{textAlign:"center",marginTop:"var(--spacing-4)"},children:t.jsx("a",{href:"#",onClick:h=>{h.preventDefault(),w()},style:{color:"var(--color-primary-600)",textDecoration:"none",fontSize:"var(--font-size-sm)"},children:"ログイン画面に戻る"})})]})]})})]})},Ad=e=>{var T,z,C,L,H;const[a,l]=ea(),[n,s]=u.useState(""),[r,i]=u.useState(""),[o,c]=u.useState(!1),[d,m]=u.useState({}),f=e.newPassword!==void 0?e.newPassword:n,p=e.confirmPassword!==void 0?e.confirmPassword:r,x={newPassword:((T=e.errors)==null?void 0:T.password)||((z=e.passwordResetErrors)==null?void 0:z.newPassword)||d.newPassword,confirmPassword:((C=e.errors)==null?void 0:C.password_confirmation)||((L=e.passwordResetErrors)==null?void 0:L.confirmPassword)||d.confirmPassword},y=(H=e.flash)!=null&&H.status?!0:e.passwordResetSuccess!==void 0?e.passwordResetSuccess:o,j=M=>{if(!M)return"パスワードを入力してください";if(M.length<8)return"パスワードは8文字以上で入力してください"},w=(M,B)=>{if(!M)return"パスワード確認を入力してください";if(M!==B)return"パスワードが一致しません"},b=M=>{e.onNewPasswordChange?e.onNewPasswordChange(M):(s(M),m(B=>({...B,newPassword:void 0})))},v=M=>{e.onConfirmPasswordChange?e.onConfirmPasswordChange(M):(i(M),m(B=>({...B,confirmPassword:void 0})))},h=M=>{if(e.onNewPasswordBlur)e.onNewPasswordBlur(M);else{const B=j(M);m(_=>({..._,newPassword:B}))}},g=M=>{if(e.onConfirmPasswordBlur)e.onConfirmPasswordBlur(M);else{const B=w(M,f);m(_=>({..._,confirmPassword:B}))}},N=M=>{if(M.preventDefault(),e.onSubmit)e.onSubmit(M);else{const B=j(f),_=w(p,f);if(B||_){m({newPassword:B,confirmPassword:_});return}console.log("Password reset successful"),c(!0),m({}),setTimeout(()=>{typeof window<"u"&&(window.location.href="/login")},2e3)}};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e.hideNavigation,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"新しいパスワード設定"}),t.jsx("p",{className:"login-subtitle",children:"新しいパスワードを入力してください"}),t.jsxs("form",{className:"login-form",onSubmit:N,noValidate:!0,children:[y&&t.jsxs("div",{className:"success-message",children:[t.jsx(k,{name:"check-circle",className:"w-5 h-5"}),t.jsxs("span",{children:["パスワードが更新されました。",t.jsx("br",{}),"新しいパスワードでログインしてください。"]})]}),t.jsx(We,{label:"新しいパスワード",type:"password",name:"newPassword",value:f,onChange:M=>b(M.target.value),onBlur:M=>h(M.target.value),placeholder:"8文字以上",required:!0,error:x.newPassword}),t.jsx(We,{label:"パスワード確認",type:"password",name:"confirmPassword",value:p,onChange:M=>v(M.target.value),onBlur:M=>g(M.target.value),placeholder:"もう一度入力してください",required:!0,error:x.confirmPassword}),t.jsx("button",{type:"submit",className:"login-button",children:"パスワードを更新"})]})]})})]})},Ed=e=>{var $,le,ve,xe,sa,ra,ia,S,W,ce,ie,Wa;const[a,l]=ea(),[n,s]=u.useState(""),[r,i]=u.useState(""),[o,c]=u.useState(""),[d,m]=u.useState(""),[f,p]=u.useState(""),[x,y]=u.useState(!1),[j,w]=u.useState({}),b=e.signupName!==void 0?e.signupName:n,v=e.signupEmail!==void 0?e.signupEmail:r,h=e.signupPhone!==void 0?e.signupPhone:o,g=e.signupPassword!==void 0?e.signupPassword:d,N=e.signupPasswordConfirm!==void 0?e.signupPasswordConfirm:f,T=e.agreeToTerms!==void 0?e.agreeToTerms:x,z={name:(($=e.errors)==null?void 0:$.name)||((le=e.signupErrors)==null?void 0:le.name)||j.name,email:((ve=e.errors)==null?void 0:ve.email)||((xe=e.signupErrors)==null?void 0:xe.email)||j.email,phone:((sa=e.errors)==null?void 0:sa.phone)||((ra=e.signupErrors)==null?void 0:ra.phone)||j.phone,password:((ia=e.errors)==null?void 0:ia.password)||((S=e.signupErrors)==null?void 0:S.password)||j.password,passwordConfirm:((W=e.errors)==null?void 0:W.password_confirmation)||((ce=e.signupErrors)==null?void 0:ce.passwordConfirm)||j.passwordConfirm,agreeToTerms:((ie=e.errors)==null?void 0:ie.agreeToTerms)||((Wa=e.signupErrors)==null?void 0:Wa.agreeToTerms)||j.agreeToTerms},C=D=>{if(!D)return"お名前を入力してください";if(D.length<2)return"お名前は2文字以上で入力してください"},L=D=>{if(!D)return"メールアドレスを入力してください";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D))return"正しいメールアドレスを入力してください"},H=D=>{if(D&&!/^0\d{9,10}$/.test(D))return"正しい電話番号を入力してください"},M=D=>{if(!D)return"パスワードを入力してください";if(D.length<8)return"パスワードは8文字以上で入力してください"},B=(D,K)=>{if(!D)return"パスワード確認を入力してください";if(D!==K)return"パスワードが一致しません"},_=D=>{e.onNameChange?e.onNameChange(D):(s(D),w(K=>({...K,name:void 0})))},Y=D=>{e.onEmailChange?e.onEmailChange(D):(i(D),w(K=>({...K,email:void 0})))},G=D=>{const K=D.replace(/[^0-9]/g,"");e.onPhoneChange?e.onPhoneChange(K):(c(K),w(ge=>({...ge,phone:void 0})))},A=D=>{e.onPasswordChange?e.onPasswordChange(D):(m(D),w(K=>({...K,password:void 0})))},R=D=>{e.onPasswordConfirmChange?e.onPasswordConfirmChange(D):(p(D),w(K=>({...K,passwordConfirm:void 0})))},E=D=>{e.onAgreeToTermsChange?e.onAgreeToTermsChange(D):(y(D),w(K=>({...K,agreeToTerms:void 0})))},U=D=>{if(e.onNameBlur)e.onNameBlur(D);else{const K=C(D);w(ge=>({...ge,name:K}))}},V=D=>{if(e.onEmailBlur)e.onEmailBlur(D);else{const K=L(D);w(ge=>({...ge,email:K}))}},J=D=>{if(e.onPhoneBlur)e.onPhoneBlur(D);else{const K=H(D);w(ge=>({...ge,phone:K}))}},P=D=>{if(e.onPasswordBlur)e.onPasswordBlur(D);else{const K=M(D);w(ge=>({...ge,password:K}))}},Z=D=>{if(e.onPasswordConfirmBlur)e.onPasswordConfirmBlur(D);else{const K=B(D,g);w(ge=>({...ge,passwordConfirm:K}))}},F=D=>{if(D.preventDefault(),e.onSubmit)e.onSubmit(D);else{const K=C(b),ge=L(v),Be=H(h),Ha=M(g),oa=B(N,g),de=T?void 0:"利用規約に同意してください";if(K||ge||Be||Ha||oa||de){w({name:K,email:ge,phone:Be,password:Ha,passwordConfirm:oa,agreeToTerms:de});return}console.log("Signup attempt:",{signupName:b,signupEmail:v,signupPhone:h})}},I=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const ge=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${ge}/login`}};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e.hideNavigation,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"新規アカウント作成"}),t.jsx("p",{className:"login-subtitle",children:"アカウント情報を入力してください"}),t.jsxs("form",{className:"login-form",onSubmit:F,noValidate:!0,children:[t.jsx(We,{label:"お名前",type:"text",name:"name",value:b,onChange:D=>_(D.target.value),onBlur:D=>U(D.target.value),placeholder:"山田 太郎",required:!0,error:z.name}),t.jsx(We,{label:"メールアドレス",type:"email",name:"email",value:v,onChange:D=>Y(D.target.value),onBlur:D=>V(D.target.value),placeholder:"example@email.com",required:!0,error:z.email}),t.jsx(We,{label:"電話番号",type:"tel",name:"phone",value:h,onChange:D=>G(D.target.value),onBlur:D=>J(D.target.value),placeholder:"09012345678",error:z.phone}),t.jsx(We,{label:"パスワード",type:"password",name:"password",value:g,onChange:D=>A(D.target.value),onBlur:D=>P(D.target.value),placeholder:"8文字以上",required:!0,error:z.password}),t.jsx(We,{label:"パスワード確認",type:"password",name:"password_confirmation",value:N,onChange:D=>R(D.target.value),onBlur:D=>Z(D.target.value),placeholder:"もう一度入力してください",required:!0,error:z.passwordConfirm}),t.jsxs("div",{children:[t.jsxs("label",{className:"remember-me",children:[t.jsx(Ot,{name:"agreeToTerms",checked:T,onChange:D=>E(D.target.checked)}),t.jsx("span",{children:"利用規約に同意する"})]}),z.agreeToTerms&&t.jsxs("div",{style:{color:"var(--color-error-600)",fontSize:"var(--font-size-xs)",marginTop:"var(--spacing-1)",display:"flex",alignItems:"center",gap:"var(--spacing-1)"},children:[t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),z.agreeToTerms]})]}),t.jsx("button",{type:"submit",className:"login-button",children:"登録内容を確認"}),t.jsx("div",{style:{textAlign:"center",marginTop:"var(--spacing-4)"},children:t.jsx("a",{href:"#",onClick:D=>{D.preventDefault(),I()},style:{color:"var(--color-primary-600)",textDecoration:"none",fontSize:"var(--font-size-sm)"},children:"すでにアカウントをお持ちの方"})})]})]})})]})},Dd=e=>{const[a,l]=ea(),n=e.signupName||"サンプル 太郎",s=e.signupEmail||"sample@example.com",r=e.signupPhone||"",i=()=>{e.onConfirm?e.onConfirm():(console.log("Signup confirmed:",{signupName:n,signupEmail:s,signupPhone:r}),typeof window<"u"&&(window.location.href="/signup-complete"))},o=()=>{e.onBack?e.onBack():typeof window<"u"&&(window.location.href="/signup")};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e.hideNavigation,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"login-title",children:"登録内容の確認"}),t.jsx("p",{className:"login-subtitle",children:"以下の内容で登録します"}),t.jsxs("div",{className:"login-form",children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)",padding:"var(--spacing-4)",background:"var(--color-neutral-50)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"お名前"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:n})]}),t.jsx("div",{style:{height:"1px",background:"var(--color-neutral-200)"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"メールアドレス"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:s})]}),r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"1px",background:"var(--color-neutral-200)"}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"電話番号"}),t.jsx("span",{style:{fontWeight:"var(--font-weight-semibold)"},children:r})]})]})]}),t.jsx("button",{type:"button",className:"login-button",onClick:i,children:"登録する"}),t.jsx("button",{type:"button",className:"login-button",onClick:o,style:{background:"var(--color-neutral-200)",color:"var(--color-neutral-700)",marginTop:"var(--spacing-2)"},children:"内容を修正する"})]})]})})]})},Bd=e=>{const[a,l]=ea(),n=()=>{if(e.onNavigateToLogin)e.onNavigateToLogin();else if(typeof window<"u"){const i=window.location.pathname.startsWith("/templates")?"/templates":"/pages";window.location.href=`${i}/login`}};return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e.hideNavigation,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--spacing-6)"},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto var(--spacing-4) auto"},children:t.jsx(k,{name:"check-circle",style:{width:"80px",height:"80px",color:"#10b981"}})}),t.jsx("h1",{className:"login-title",children:"アカウント登録完了"}),t.jsx("p",{className:"login-subtitle",children:"ご登録いただきありがとうございます。"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx("button",{type:"button",className:"login-button",onClick:n,style:{margin:0},children:"ログイン画面へ"})})]})})]})},_d=({onNavigate:e,hideNavigation:a})=>{const[l,n]=ea(),s=()=>{e?e("dashboard"):typeof window<"u"&&(window.location.href="/dashboard")};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:a,viewMode:l,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"お探しのページは見つかりませんでした"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"お探しのページは存在しないか、移動または削除された可能性があります。"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:[t.jsx("button",{type:"button",className:"login-button",onClick:s,style:{margin:0},children:"ホームに戻る"}),t.jsx("button",{type:"button",className:"login-button",onClick:()=>window.history.back(),style:{margin:0,background:"var(--color-neutral-200)",color:"var(--color-neutral-700)"},children:"前のページに戻る"})]})]})})]})},Ld=({onNavigate:e,hideNavigation:a})=>{const[l,n]=ea(),s=()=>{e?e("dashboard"):typeof window<"u"&&(window.location.href="/dashboard")};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:a,viewMode:l,onViewModeChange:n}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)",textAlign:"center"},children:"予期せぬ不具合が発生しました"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"しばらく時間をおいてから、もう一度お試しください。"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:t.jsx("button",{type:"button",className:"login-button",onClick:s,style:{margin:0},children:"ホームに戻る"})})]})})]})},Hd=({hideNavigation:e})=>{const[a,l]=ea();return t.jsxs("div",{className:a==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e,viewMode:a,onViewModeChange:l}),t.jsx("div",{className:"login-screen",children:t.jsxs("div",{className:"login-card",style:{maxWidth:"500px"},children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--spacing-3)",marginBottom:"var(--spacing-3)"},children:[t.jsx(k,{name:"cog",style:{width:"32px",height:"32px",color:"rgb(21, 52, 109)"}}),t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"メンテナンス中"})]}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left",marginBottom:"var(--spacing-3)"},children:"現在、システムメンテナンスを実施しております。"}),t.jsx("p",{className:"login-subtitle",style:{textAlign:"left"},children:"ご不便をおかけして申し訳ございませんが、しばらくお待ちください。"})]}),t.jsxs("div",{style:{background:"var(--color-neutral-50)",padding:"var(--spacing-4)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",marginBottom:"var(--spacing-2)"},children:t.jsx("span",{style:{fontWeight:"var(--font-weight-medium)"},children:"メンテナンス期間"})}),t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-900)"},children:"2024年10月14日 2:00 〜 6:00（予定）"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:t.jsx("button",{type:"button",className:"login-button",onClick:()=>window.location.reload(),style:{margin:0},children:"ページを更新"})})]})})]})},Ve=({children:e,viewMode:a,currentPage:l,onNavigate:n,onLogout:s,userName:r="ゲスト",sidebarMenuItems:i,unreadCount:o=0,showNotificationDropdown:c=!1,setShowNotificationDropdown:d=()=>{},showUserMenu:m=!1,setShowUserMenu:f=()=>{},isHamburgerOpen:p=!1,setIsHamburgerOpen:x=()=>{},sidebarCollapsed:y=!1,setSidebarCollapsed:j=()=>{},notificationRef:w,notifications:b=[],onMarkNotificationAsRead:v=()=>{},onMarkAllNotificationsAsRead:h=()=>{},onDismissNotification:g=()=>{}})=>{const T=i!==void 0?i:[{id:"dashboard",label:"ホーム",icon:"home",page:"dashboard"}],z=C=>{switch(C){case"warning":return"warning";case"success":return"check";case"danger":return"close";case"info":default:return"info"}};return t.jsxs("div",{className:"dashboard-container",children:[t.jsxs("div",{className:"dashboard-header",children:[t.jsx("div",{className:"dashboard-logo",onClick:()=>n("dashboard"),style:{cursor:"pointer"},children:"AppName"}),t.jsx("div",{className:"dashboard-user",children:a==="sp"?t.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:"8px"},children:[t.jsxs("button",{style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",color:"white",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>n("notifications"),children:[t.jsx(k,{name:"bell",style:{width:"20px",height:"20px"}}),o>0&&t.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",minWidth:"20px",height:"20px",background:"#ef4444",color:"#ffffff",fontSize:"12px",fontWeight:"bold",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid rgb(21, 52, 109)"},children:o})]}),t.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"24px",color:"white",padding:"4px 8px"},onClick:()=>x(!p),children:"☰"}),p&&t.jsxs("div",{className:`sp-hamburger-menu ${p?"open":""}`,children:[T.map(C=>t.jsxs("div",{className:"sp-hamburger-item",onClick:()=>{x(!1),n(C.page)},children:[t.jsx(k,{name:C.icon,className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),C.label]},C.id)),t.jsxs("div",{className:"sp-hamburger-item",onClick:()=>{x(!1),s?s():n("login")},children:[t.jsx(k,{name:"arrow-right",className:"w-4 h-4",style:{color:"white",marginRight:"8px"}}),"ログアウト"]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{ref:w,style:{position:"relative"},children:[t.jsxs("button",{style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",cursor:"pointer",color:"white",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onClick:()=>d(!c),children:[t.jsx(k,{name:"bell",style:{width:"20px",height:"20px"}}),o>0&&t.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",minWidth:"20px",height:"20px",background:"#ef4444",color:"#ffffff",fontSize:"12px",fontWeight:"bold",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid rgb(21, 52, 109)"},children:o})]}),c&&b.length>0&&t.jsxs("div",{className:"notification-dropdown",children:[t.jsxs("div",{className:"notification-dropdown-header",children:[t.jsx("h3",{className:"notification-dropdown-title",children:"通知"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[b.some(C=>!C.read)&&t.jsxs("button",{className:"notification-action-btn",onClick:h,style:{fontSize:"var(--font-size-xs)"},children:[t.jsx(k,{name:"check",className:"w-4 h-4"}),"全て既読にする"]}),t.jsx("button",{className:"notification-close-btn",onClick:()=>d(!1),children:t.jsx(k,{name:"close",className:"w-4 h-4"})})]})]}),t.jsx("div",{className:"notification-dropdown-content",children:b.map(C=>t.jsxs("div",{className:`notification-item ${C.read?"":"unread"}`,onClick:()=>!C.read&&v(C.id),style:{cursor:C.read?"default":"pointer"},children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx(k,{name:z(C.type),className:"w-5 h-5 notification-icon"}),!C.read&&t.jsx("span",{style:{position:"absolute",top:"-2px",right:"-2px",width:"8px",height:"8px",background:"#ef4444",borderRadius:"50%",border:"1px solid white"}})]}),t.jsxs("div",{className:"notification-content",children:[t.jsxs("div",{className:"notification-item-header",children:[t.jsx("h4",{className:"notification-item-title",children:C.title}),t.jsx("span",{className:"notification-time",children:C.time})]}),t.jsx("p",{className:"notification-item-message",children:C.message}),t.jsxs("div",{className:"notification-item-actions",children:[!C.read&&t.jsxs("button",{className:"notification-action-btn",onClick:L=>{L.stopPropagation(),v(C.id)},children:[t.jsx(k,{name:"check",className:"w-4 h-4"}),"既読にする"]}),t.jsxs("button",{className:"notification-action-btn",onClick:L=>{L.stopPropagation(),g(C.id)},children:[t.jsx(k,{name:"close",className:"w-4 h-4"}),"非表示"]})]})]})]},C.id))}),t.jsx("div",{className:"notification-dropdown-footer",children:t.jsx("a",{className:"notification-footer-link",onClick:()=>{d(!1),n("notifications")},style:{cursor:"pointer"},children:"すべての通知を表示"})})]})]}),t.jsxs("button",{className:"user-button",onClick:()=>f(!m),children:[t.jsx(k,{name:"user",className:"w-5 h-5"}),t.jsx("span",{children:r}),t.jsx(k,{name:"chevron-down",className:"w-4 h-4"})]}),m&&t.jsx("div",{className:"user-dropdown",children:t.jsxs("button",{className:"user-dropdown-item",onClick:()=>{f(!1),s?s():n("login")},children:[t.jsx(k,{name:"arrow-right",className:"w-4 h-4"}),"ログアウト"]})})]})})]}),t.jsxs("div",{className:"dashboard-body",children:[a==="pc"&&t.jsxs("aside",{className:`dashboard-sidebar ${y?"collapsed":""}`,children:[t.jsx("button",{className:"sidebar-toggle",onClick:()=>j(!y),"aria-label":y?"サイドバーを展開":"サイドバーを最小化",children:t.jsx(k,{name:y?"chevron-right":"chevron-left",className:"w-5 h-5"})}),t.jsx("nav",{className:"sidebar-nav",children:t.jsx("ul",{className:"sidebar-nav",children:T.map(C=>t.jsx("li",{className:"sidebar-nav-item",children:t.jsxs("div",{className:"sidebar-nav-link",onClick:()=>n(C.page),style:{cursor:"pointer"},children:[t.jsx(k,{name:C.icon,className:"w-5 h-5"}),t.jsx("span",{children:C.label})]})},C.id))})})]}),t.jsx("div",{className:"dashboard-content",children:e})]}),t.jsx("footer",{className:"page-footer",children:t.jsxs("div",{className:"footer-content",style:{display:"flex",flexDirection:a==="sp"?"column":"row",justifyContent:a==="sp"?"center":"space-between",alignItems:"center",gap:a==="sp"?"var(--spacing-2)":0,flexWrap:"nowrap"},children:[t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",fontSize:"var(--font-size-sm)"},children:[t.jsx("a",{href:"#",onClick:C=>{C.preventDefault(),n("qna")},style:{color:"white",textDecoration:"none"},children:"Q&A"}),t.jsx("a",{href:"#",onClick:C=>{C.preventDefault(),n("privacy")},style:{color:"white",textDecoration:"none"},children:"プライバシーポリシー"}),t.jsx("a",{href:"#",onClick:C=>{C.preventDefault(),n("terms")},style:{color:"white",textDecoration:"none"},children:"利用規約"}),t.jsx("a",{href:"#",onClick:C=>{C.preventDefault(),n("commercial")},style:{color:"white",textDecoration:"none"},children:"特商法表記"})]}),t.jsx("div",{className:"footer-copyright",children:"© 2025 AppName. All rights reserved."})]})})]})},Od=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const n=u.useRef(null),[s,r]=ea(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState(!1),y=g=>{if(a)a(g);else{const z=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",L={dashboard:`${z}/dashboard`,"data-list":`${z}/data/list`,statistics:`${z}/statistics`,settings:`${z}/settings`,notifications:`${z}/notifications`,login:`${z}/login`,qna:`${z}/qna`,privacy:`${z}/privacy`,terms:`${z}/terms`,commercial:`${z}/commercial`}[g]||`${z}/${g}`;typeof window<"u"&&(window.location.href=L)}},j=()=>{if(l){l();return}y("login")},[w,b]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),v=g=>{b(N=>N.map(T=>T.id===g?{...T,read:!0}:T))},h=()=>{b(g=>g.map(N=>({...N,read:!0})))};return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e,viewMode:s,onViewModeChange:r}),t.jsx(Ve,{viewMode:s,currentPage:"commercial",onNavigate:y,unreadCount:w.filter(g=>!g.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:m,setIsHamburgerOpen:f,sidebarCollapsed:p,setSidebarCollapsed:x,notificationRef:n,notifications:w,onMarkNotificationAsRead:v,onMarkAllNotificationsAsRead:h,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:"var(--spacing-12)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:s==="sp"?"flex-start":"center",marginBottom:s==="sp"?"var(--spacing-2)":0,flexDirection:s==="sp"?"column":"row"},children:[t.jsx("h2",{className:"page-title",style:{alignSelf:s==="sp"?"flex-start":void 0},children:"特定商取引法に基づく表記"}),s!=="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),s==="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid var(--color-neutral-200)"},children:t.jsxs("tbody",{children:[t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",width:"30%",verticalAlign:"top"},children:"販売事業者名"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"株式会社サンプル"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"代表者名"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"代表取締役 山田太郎"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"所在地"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["〒150-0000",t.jsx("br",{}),"東京都渋谷区〇〇 1-2-3 サンプルビル 5F"]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"電話番号"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["03-1234-5678",t.jsx("br",{}),t.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"※お問い合わせはメールにてお願いいたします"})]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"メールアドレス"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"support@example.com"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"運営統括責任者"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"山田花子"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsxs("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:["追加手数料等の",t.jsx("br",{}),"追加料金"]}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"サービス利用料以外に、振込手数料等がかかる場合があります。詳細は各プランページをご確認ください。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsxs("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:["交換および返品",t.jsx("br",{}),"（返金ポリシー）"]}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"サービスの性質上、お客様都合による返金はお受けできません。ただし、サービス提供に不備があった場合は、個別に対応させていただきます。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"引渡時期"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"お申し込み後、即時ご利用いただけます。"})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"受付可能な決済手段"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:t.jsxs("ul",{style:{margin:0,paddingLeft:0,listStylePosition:"inside"},children:[t.jsx("li",{children:"クレジットカード（VISA、Mastercard、JCB、American Express）"}),t.jsx("li",{children:"銀行振込"}),t.jsx("li",{children:"コンビニ決済"})]})})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"決済期間"}),t.jsxs("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:["クレジットカード決済の場合は即時決済となります。",t.jsx("br",{}),"銀行振込、コンビニ決済の場合は、お申し込み後7日以内にお支払いください。"]})]}),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-neutral-200)"},children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"販売価格"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"各プランページに記載の金額（税込）となります。"})]}),t.jsxs("tr",{children:[t.jsx("th",{style:{padding:"var(--spacing-3)",textAlign:"left",backgroundColor:"var(--color-neutral-50)",fontWeight:"var(--font-weight-semibold)",verticalAlign:"top"},children:"サービス提供期間"}),t.jsx("td",{style:{padding:"var(--spacing-3)",backgroundColor:"var(--color-neutral-white)"},children:"月額プランの場合は、毎月自動更新されます。解約のお申し出がない限り、継続してサービスを提供いたします。"})]})]})}),t.jsxs("section",{style:{marginTop:"var(--spacing-6)",marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"お問い合わせ"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本表記に関するお問い合わせは、以下の連絡先までお願いいたします。"}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",padding:"var(--spacing-4)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"Eメールアドレス: support@example.com"}),t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"受付時間: 平日 9:00〜18:00（土日祝日を除く）"})]})]})]})})]})})})]})},Vd=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const n=u.useRef(null),[s,r]=ea(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState(!1),y=g=>{if(a)a(g);else{const z=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",L={dashboard:`${z}/dashboard`,"data-list":`${z}/data/list`,statistics:`${z}/statistics`,settings:`${z}/settings`,notifications:`${z}/notifications`,login:`${z}/login`,qna:`${z}/qna`,privacy:`${z}/privacy`,terms:`${z}/terms`,commercial:`${z}/commercial`}[g]||`${z}/${g}`;typeof window<"u"&&(window.location.href=L)}},j=()=>{if(l){l();return}y("login")},[w,b]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),v=g=>{b(N=>N.map(T=>T.id===g?{...T,read:!0}:T))},h=()=>{b(g=>g.map(N=>({...N,read:!0})))};return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e,viewMode:s,onViewModeChange:r}),t.jsx(Ve,{viewMode:s,currentPage:"terms",onNavigate:y,unreadCount:w.filter(g=>!g.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:m,setIsHamburgerOpen:f,sidebarCollapsed:p,setSidebarCollapsed:x,notificationRef:n,notifications:w,onMarkNotificationAsRead:v,onMarkAllNotificationsAsRead:h,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{display:"flex",justifyContent:"space-between",alignItems:s==="sp"?"flex-start":"center",flexDirection:s==="sp"?"column":"row",gap:s==="sp"?"var(--spacing-2)":0,marginBottom:"var(--spacing-12)"},children:[t.jsx("h2",{className:"page-title",children:"利用規約"}),t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第1条（適用）"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本規約は、当社が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って、本サービスをご利用いただきます。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第2条（利用登録）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。"}),t.jsxs("li",{style:{marginBottom:"var(--spacing-2)"},children:["当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。",t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)",marginTop:"var(--spacing-2)"},children:[t.jsx("li",{children:"利用登録の申請に際して虚偽の事項を届け出た場合"}),t.jsx("li",{children:"本規約に違反したことがある者からの申請である場合"}),t.jsx("li",{children:"その他、当社が利用登録を相当でないと判断した場合"})]})]})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第3条（ユーザーIDおよびパスワードの管理）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第4条（禁止事項）"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"法令または公序良俗に違反する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"犯罪行為に関連する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスによって得られた情報を商業的に利用する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社のサービスの運営を妨害するおそれのある行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"不正アクセスをし、またはこれを試みる行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"他のユーザーに関する個人情報等を収集または蓄積する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"不正な目的を持って本サービスを利用する行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"他のユーザーに成りすます行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"その他、当社が不適切と判断する行為"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第5条（本サービスの提供の停止等）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)",marginBottom:"var(--spacing-2)"},children:[t.jsxs("li",{style:{marginBottom:"var(--spacing-2)"},children:["当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。",t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)",marginTop:"var(--spacing-2)"},children:[t.jsx("li",{children:"本サービスにかかるコンピュータシステムの保守点検または更新を行う場合"}),t.jsx("li",{children:"地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合"}),t.jsx("li",{children:"コンピュータまたは通信回線等が事故により停止した場合"}),t.jsx("li",{children:"その他、当社が本サービスの提供が困難と判断した場合"})]})]}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第6条（免責事項）"}),t.jsxs("ol",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。"}),t.jsx("li",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第7条（サービス内容の変更等）"}),t.jsx("p",{children:"当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"第8条（利用規約の変更）"}),t.jsx("p",{children:"当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。"})]})]})})]})})})]})},$d=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const[n,s]=ea(),r=u.useRef(null),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState(!1),y=g=>{if(a)a(g);else{const z=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",L={dashboard:`${z}/dashboard`,"data-list":`${z}/data/list`,statistics:`${z}/statistics`,settings:`${z}/settings`,notifications:`${z}/notifications`,login:`${z}/login`,qna:`${z}/qna`,privacy:`${z}/privacy`,terms:`${z}/terms`,commercial:`${z}/commercial`}[g]||`${z}/${g}`;typeof window<"u"&&(window.location.href=L)}},j=()=>{if(l){l();return}y("login")},[w,b]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!0}]),v=g=>{b(N=>N.map(T=>T.id===g?{...T,read:!0}:T))},h=()=>{b(g=>g.map(N=>({...N,read:!0})))};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e,viewMode:n,onViewModeChange:s}),t.jsx(Ve,{viewMode:n,currentPage:"privacy",onNavigate:y,unreadCount:w.filter(g=>!g.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:m,setIsHamburgerOpen:f,sidebarCollapsed:p,setSidebarCollapsed:x,notificationRef:r,notifications:w,onMarkNotificationAsRead:v,onMarkAllNotificationsAsRead:h,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:"var(--spacing-12)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:n==="sp"?"var(--spacing-2)":0,flexDirection:n==="sp"?"column":"row",alignItems:n==="sp"?"flex-start":"center"},children:[t.jsx("h2",{className:"page-title",children:"プライバシーポリシー"}),n!=="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),n==="sp"&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",margin:0},children:"最終更新日: 2024年10月15日"})]}),t.jsx("div",{className:"card-body",children:t.jsxs("div",{style:{fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-relaxed)",color:"var(--color-neutral-700)"},children:[t.jsx("section",{style:{marginBottom:"var(--spacing-6)"},children:t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、お客様の個人情報について、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。本ポリシーは、当社がどのような個人情報を取得し、どのように利用・共有するか、お客様がどのようにご自身の個人情報を管理できるかをご説明するものです。"})}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"1. 事業者情報"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"事業者名: 株式会社サンプル"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"所在地: 東京都渋谷区〇〇 1-2-3"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"代表者: 代表取締役 山田太郎"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"連絡先: privacy@example.com"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"2. 取得する個人情報"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、以下の個人情報を取得します。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"氏名"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"メールアドレス"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"電話番号"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"住所"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"生年月日"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"クレジットカード情報"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"IPアドレス"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"Cookie情報"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ご利用履歴"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"3. 個人情報の利用目的"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、取得した個人情報を以下の目的で利用します。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"本サービスの提供・運営のため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーからのお問い合わせに回答するため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等の案内のメールを送付するため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"メンテナンス、重要なお知らせなど必要に応じたご連絡のため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"サービスの改善や新サービスの開発等に役立てるため"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"その他、上記利用目的に付随する目的のため"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"4. 個人情報の第三者提供"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社は、個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示することはありません。"}),t.jsxs("ul",{style:{marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"ユーザーの同意がある場合"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"法令に基づく場合"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき"}),t.jsx("li",{style:{marginBottom:"var(--spacing-1)"},children:"国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき"})]})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"5. 個人情報の開示・訂正・削除"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"ユーザーは、当社の保有する自己の個人情報について、開示、訂正、削除を請求することができます。その場合は、以下の窓口までご連絡ください。確認後、合理的な期間内に対応いたします。"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)",fontWeight:"var(--font-weight-medium)"},children:"個人情報お問い合わせ窓口: privacy@example.com"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"6. Cookie（クッキー）その他の技術の利用"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社のサービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当社による本サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化することができます。ただし、Cookieを無効化すると、本サービスの一部の機能をご利用いただけなくなる場合があります。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"7. プライバシーポリシーの変更"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。"})]}),t.jsxs("section",{style:{marginBottom:"var(--spacing-6)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-3)"},children:"8. お問い合わせ"}),t.jsx("p",{style:{marginBottom:"var(--spacing-2)"},children:"本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。"}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",padding:"var(--spacing-4)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"Eメールアドレス: privacy@example.com"}),t.jsx("p",{style:{marginBottom:"var(--spacing-1)",fontWeight:"var(--font-weight-medium)"},children:"受付時間: 平日 9:00〜18:00（土日祝日を除く）"})]})]})]})})]})})})]})},Yj=({items:e,allowMultiple:a=!1})=>{const[l,n]=u.useState({}),s=r=>{n(i=>a?{...i,[r]:!i[r]}:{[r]:!i[r]})};return t.jsx("div",{style:{border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:e.map((r,i)=>t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>s(i),style:{width:"100%",padding:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"var(--color-neutral-white)",border:"none",borderBottom:i<e.length-1?"1px solid var(--color-neutral-200)":"none",cursor:"pointer",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)",textAlign:"left",transition:"background-color 0.2s"},children:[t.jsx("span",{children:r.title}),t.jsx(k,{name:l[i]?"chevron-up":"chevron-down",style:{width:"16px",height:"16px",color:"var(--color-neutral-600)",transition:"transform 0.2s"}})]}),l[i]&&t.jsx("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-neutral-white)",borderBottom:i<e.length-1?"1px solid var(--color-neutral-200)":"none",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",lineHeight:"var(--line-height-relaxed)"},children:r.content})]},i))})},Ud=({hideNavigation:e,onNavigate:a,onLogout:l})=>{const n=u.useRef(null),[s,r]=ea(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState(!1),y=N=>{if(a)a(N);else{const C=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",H={dashboard:`${C}/dashboard`,"data-list":`${C}/data/list`,statistics:`${C}/statistics`,settings:`${C}/settings`,notifications:`${C}/notifications`,login:`${C}/login`,qna:`${C}/qna`,privacy:`${C}/privacy`,terms:`${C}/terms`,commercial:`${C}/commercial`}[N]||`${C}/${N}`;typeof window<"u"&&(window.location.href=H)}},j=()=>{if(l){l();return}y("login")},[w,b]=u.useState([{id:1,title:"新しいメッセージ",message:"よくある質問が更新されました",time:"2時間前",read:!1},{id:2,title:"システムお知らせ",message:"サポート体制の強化について",time:"1日前",read:!0}]),v=N=>{b(T=>T.map(z=>z.id===N?{...z,read:!0}:z))},h=()=>{b(N=>N.map(T=>({...T,read:!0})))},g=[{title:"Q. アカウントの登録方法を教えてください",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"アカウント登録は以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"トップページの「新規登録」ボタンをクリック"}),t.jsx("li",{children:"メールアドレスとパスワードを入力"}),t.jsx("li",{children:"利用規約に同意し、「登録」ボタンをクリック"}),t.jsx("li",{children:"確認メールが送信されるので、記載されたリンクをクリックして認証完了"})]})]})},{title:"Q. パスワードを忘れた場合はどうすればいいですか?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"パスワードを忘れた場合は、以下の手順でリセットできます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"ログインページの「パスワードをお忘れですか?」リンクをクリック"}),t.jsx("li",{children:"登録したメールアドレスを入力"}),t.jsx("li",{children:"パスワードリセット用のメールが送信されます"}),t.jsx("li",{children:"メール内のリンクから新しいパスワードを設定"})]})]})},{title:"Q. データのエクスポートは可能ですか?",content:t.jsx("p",{children:"はい、可能です。データ一覧画面の「エクスポート」ボタンからCSV形式でデータをダウンロードできます。また、APIを利用してJSON形式でのデータ取得も可能です。"})},{title:"Q. アカウントを削除したい場合はどうすればいいですか?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"アカウント削除は以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"アカウント設定画面を開く"}),t.jsx("li",{children:"ページ最下部の「アカウントを削除」ボタンをクリック"}),t.jsx("li",{children:"確認ダイアログで「削除」を選択"})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)",color:"var(--color-danger-600)",fontWeight:"var(--font-weight-medium)"},children:"※ 削除したアカウントと関連データは復元できませんのでご注意ください。"})]})},{title:"Q. プランのアップグレード方法は?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"プランのアップグレードは以下の手順で行えます:"}),t.jsxs("ol",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsx("li",{children:"アカウント設定画面の「プラン管理」タブを開く"}),t.jsx("li",{children:"希望するプランを選択"}),t.jsx("li",{children:"支払い情報を入力し、「アップグレード」ボタンをクリック"})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"プランは即座に適用され、日割り計算で請求されます。"})]})},{title:"Q. サポートへの問い合わせ方法は?",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"以下の方法でサポートチームへお問い合わせいただけます:"}),t.jsxs("ul",{style:{marginTop:"var(--spacing-2)",marginLeft:"var(--spacing-4)"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"メール:"})," support@example.com"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"チャット:"})," 画面右下のチャットアイコンからリアルタイムサポート（平日9:00-18:00）"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"お問い合わせフォーム:"})," ヘルプセンターから送信可能"]})]}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"通常、1営業日以内に返信いたします。"})]})}];return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e,viewMode:s,onViewModeChange:r}),t.jsx(Ve,{viewMode:s,currentPage:"qna",onNavigate:y,unreadCount:w.filter(N=>!N.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:m,setIsHamburgerOpen:f,sidebarCollapsed:p,setSidebarCollapsed:x,notificationRef:n,notifications:w,onMarkNotificationAsRead:v,onMarkAllNotificationsAsRead:h,onLogout:j,children:t.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"var(--spacing-6)"},children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"card-header",style:{marginBottom:s==="sp"?"var(--spacing-6)":"var(--spacing-8)"},children:[t.jsx("h2",{className:"page-title",style:{marginBottom:"var(--spacing-2)"},children:"よくある質問"}),t.jsx("p",{className:"card-description",style:{fontSize:s==="sp"?"var(--font-size-sm)":void 0},children:"サービスに関するよくある質問をご覧いただけます"})]}),t.jsx("div",{className:"card-body",children:t.jsx(Yj,{items:g,allowMultiple:!1})})]})})})]})},Wj=({field:e,data:a})=>{var n,s;const l=a[e.key];if(e.render)return e.render(l,a);if(l==null||l==="")return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});switch(e.type){case"currency":const r=typeof l=="string"?parseFloat(l):l;if(isNaN(r))return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});const i=e.decimals??0,o=r.toLocaleString("ja-JP",{minimumFractionDigits:i,maximumFractionDigits:i}),c=e.currencySymbol||"";return t.jsxs("span",{children:[c,o]});case"badge":const d=(n=e.badgeConfig)==null?void 0:n[l];return d?t.jsx("span",{className:`status-badge status-badge--${d.variant||"default"}`,children:d.label||l}):t.jsx("span",{children:String(l)});case"list":if(!Array.isArray(l)||l.length===0)return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:e.emptyText||"-"});const m=((s=e.listConfig)==null?void 0:s.renderItem)||(p=>t.jsx("span",{children:String(p)}));return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-1)"},children:l.map((p,x)=>t.jsx(ee.Fragment,{children:m(p)},x))});case"date":const f=typeof l=="string"?new Date(l):l;return!(f instanceof Date)||isNaN(f.getTime())?t.jsx("span",{children:String(l)}):t.jsx("span",{children:f.toLocaleDateString("ja-JP")});case"email":return t.jsx("a",{href:`mailto:${l}`,style:{color:"var(--color-primary-600)"},children:String(l)});case"url":return t.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-600)"},children:String(l)});case"text":default:return t.jsx("span",{children:String(l)})}},Ju=({title:e,subtitle:a,data:l,fields:n=[],sections:s=[],tabs:r=[],layout:i,headerConfig:o,actions:c=[],secondaryActions:d=[],backButton:m,loading:f=!1,error:p,emptyState:x,breadcrumbs:y,headerActions:j=[],stickyHeader:w=!1,className:b="",onLogout:v})=>{var I,$,le,ve,xe,sa,ra,ia;const[h,g]=u.useState("pc"),[N,T]=u.useState(()=>{const S=new Set;return s.forEach(W=>{(!W.collapsible||W.defaultCollapsed===!1)&&S.add(W.id)}),S}),z=S=>{const ie=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",D={dashboard:`${ie}/dashboard`,"data-list":`${ie}/data/list`,statistics:`${ie}/statistics`,settings:`${ie}/settings`,notifications:`${ie}/notifications`,login:`${ie}/login`,qna:`${ie}/qna`,privacy:`${ie}/privacy`,terms:`${ie}/terms`,commercial:`${ie}/commercial`}[S]||`${ie}/${S}`;window.location.href=D},C=()=>{if(v){v();return}z("login")},[L,H]=u.useState(()=>{const S=r.filter(W=>!W.visible||W.visible(l));return S.length>0?S[0].id:""}),[M,B]=u.useState({show:!1}),_=S=>{T(W=>{const ce=new Set(W);return ce.has(S)?ce.delete(S):ce.add(S),ce})},Y=S=>{S.confirm?B({show:!0,action:()=>S.onClick(l),config:S.confirm}):S.onClick(l)},G=()=>{m!=null&&m.onClick?m.onClick():m!=null&&m.url?window.location.href=m.url:window.history.back()},A=(S,W)=>{S.path&&(W.preventDefault(),window.location.href=S.path)},R=u.useMemo(()=>s.filter(S=>!S.visible||S.visible(l)),[s,l]),E=u.useMemo(()=>n.filter(S=>!S.hidden&&(!S.visible||S.visible(l))),[n,l]),U=u.useMemo(()=>c.filter(S=>typeof S.visible=="function"?S.visible(l):S.visible!==!1),[c,l]),V=u.useMemo(()=>d.filter(S=>typeof S.visible=="function"?S.visible(l):S.visible!==!1),[d,l]),J=S=>{const W=typeof S.className=="function"?S.className(l[S.key],l):S.className||"",ce=S.width?`detail-field--${S.width}`:"";return t.jsxs("div",{className:`detail-field ${ce} ${W}`,children:[t.jsxs("dt",{className:`detail-field__label ${S.labelClassName||""}`,children:[S.label,S.tooltip&&t.jsx("span",{className:"detail-field__tooltip",title:S.tooltip,children:t.jsx(k,{name:"info",style:{width:"14px",height:"14px",marginLeft:"4px"}})})]}),t.jsx("dd",{className:`detail-field__value ${S.valueClassName||""}`,children:t.jsx(Wj,{field:S,data:l})})]},S.key)},P=S=>{const W=N.has(S.id),ce=S.fields.filter(D=>!D.hidden&&(!D.visible||D.visible(l)));if(ce.length===0)return null;const ie=S.columns||(i==null?void 0:i.columns)||2,Wa=S.layout==="grid"||(i==null?void 0:i.type)==="grid"?`detail-fields--grid detail-fields--cols-${ie}`:"";return t.jsxs("div",{className:`detail-section ${S.className||""}`,children:[t.jsxs("div",{className:"detail-section__header",onClick:S.collapsible?()=>_(S.id):void 0,style:{cursor:S.collapsible?"pointer":"default"},children:[t.jsxs("div",{className:"detail-section__title-wrapper",children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"20px",height:"20px",marginRight:"var(--spacing-2)"}}),t.jsx("h3",{className:"detail-section__title",children:S.title})]}),S.collapsible&&t.jsx(k,{name:W?"chevron-up":"chevron-down",style:{width:"20px",height:"20px"}})]}),S.description&&t.jsx("p",{className:"detail-section__description",children:S.description}),W&&t.jsx("dl",{className:`detail-fields ${Wa}`,children:ce.map(J)})]},S.id)};if(f)return t.jsxs("div",{className:h==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:h,onViewModeChange:g}),t.jsx(Ve,{viewMode:h,currentPage:"data-detail",onNavigate:z,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:C,children:t.jsxs("div",{className:`dynamic-data-detail-page ${b}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:"読み込み中..."})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[t.jsx(k,{name:"refresh",style:{width:"48px",height:"48px",animation:"spin 1s linear infinite",color:"var(--color-primary-500)"}}),t.jsx("p",{style:{marginTop:"var(--spacing-4)",color:"var(--color-neutral-600)"},children:"データを読み込んでいます..."})]})]})})]});if(p)return t.jsxs("div",{className:h==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:h,onViewModeChange:g}),t.jsx(Ve,{viewMode:h,currentPage:"data-detail",onNavigate:z,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:C,children:t.jsxs("div",{className:`dynamic-data-detail-page ${b}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:"エラー"})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[t.jsx(k,{name:"error",style:{width:"64px",height:"64px",color:"var(--color-error-500)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:"エラーが発生しました"}),t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:p.message}),p.retry&&t.jsxs("button",{className:"btn btn--primary",onClick:p.retry,children:[t.jsx(k,{name:"refresh",style:{width:"16px",height:"16px"}}),"再試行"]})]})]})})]});if(!l||Object.keys(l).length===0)return t.jsxs("div",{className:h==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:h,onViewModeChange:g}),t.jsx(Ve,{viewMode:h,currentPage:"data-detail",onNavigate:z,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:C,children:t.jsxs("div",{className:`dynamic-data-detail-page ${b}`,children:[t.jsx("div",{className:"page-header",children:t.jsx("h2",{className:"page-title",children:(x==null?void 0:x.title)||"データが見つかりません"})}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[(x==null?void 0:x.icon)&&t.jsx(k,{name:x.icon,style:{width:"64px",height:"64px",color:"var(--color-neutral-400)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:(x==null?void 0:x.title)||"データが見つかりません"}),(x==null?void 0:x.description)&&t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:x.description}),(x==null?void 0:x.action)&&t.jsx("button",{className:"btn btn--primary",onClick:x.action.onClick,children:x.action.label})]})]})})]});const Z=o!=null&&o.renderTitle?o.renderTitle(l):o!=null&&o.titleField?l[o.titleField]:e,F=typeof(o==null?void 0:o.subtitle)=="function"?o.subtitle(l):(o==null?void 0:o.subtitle)||a;return t.jsxs("div",{className:h==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:h,onViewModeChange:g}),t.jsx(Ve,{viewMode:h,currentPage:"data-detail",onNavigate:z,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},children:t.jsxs("div",{className:`dynamic-data-detail-page ${b}`,children:[y&&y.length>0&&t.jsx("nav",{className:"breadcrumbs",children:y.map((S,W)=>t.jsxs(ee.Fragment,{children:[S.path?t.jsx("a",{href:S.path,className:"breadcrumb-link",onClick:ce=>A(S,ce),children:S.label}):t.jsx("span",{className:"breadcrumb-current",children:S.label}),W<y.length-1&&t.jsx(k,{name:"chevron-right",style:{width:"12px",height:"12px",margin:"0 var(--spacing-2)"}})]},W))}),t.jsxs("div",{className:`page-header ${w?"page-header--sticky":""}`,children:[t.jsxs("div",{className:"page-header__content",children:[m&&t.jsxs("button",{className:"btn btn--text detail-back-button",onClick:G,children:[t.jsx(k,{name:m.icon||"arrow-left",style:{width:"16px",height:"16px"}}),m.label||"戻る"]}),t.jsxs("div",{className:"page-header__title-section",children:[(o==null?void 0:o.showAvatar)&&t.jsx("div",{className:"page-header__avatar",children:o.renderAvatar?o.renderAvatar(l):o.avatarField&&l[o.avatarField]&&t.jsx("img",{src:l[o.avatarField],alt:""})}),t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:Z}),F&&t.jsx("p",{className:"page-subtitle",children:F}),(o==null?void 0:o.showStatus)&&o.statusField&&t.jsx("div",{style:{marginTop:"var(--spacing-2)"},children:(()=>{var ie;const S=l[o.statusField],W=(ie=o.statusBadgeConfig)==null?void 0:ie[S],ce=(W==null?void 0:W.variant)||"default";return t.jsx("span",{className:`status-badge status-badge--${ce}`,children:(W==null?void 0:W.label)||S})})()})]})]})]}),t.jsxs("div",{className:"page-header__actions",children:[j.map((S,W)=>t.jsxs("button",{className:`btn btn--${S.variant||"secondary"}`,onClick:S.onClick,children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},W)),V.map(S=>{const W=typeof S.disabled=="function"?S.disabled(l):S.disabled;return t.jsxs("button",{className:`btn btn--${S.variant||"secondary"}`,onClick:()=>Y(S),disabled:W||S.loading,title:S.tooltip,children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},S.id)}),U.map(S=>{const W=typeof S.disabled=="function"?S.disabled(l):S.disabled;return t.jsxs("button",{className:`btn btn--${S.variant||"primary"}`,onClick:()=>Y(S),disabled:W||S.loading,title:S.tooltip,children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},S.id)})]})]}),t.jsx("div",{className:"detail-content",children:r.length>0?t.jsxs("div",{className:"detail-tabs",children:[t.jsx("div",{className:"detail-tabs__header",children:r.filter(S=>!S.visible||S.visible(l)).map(S=>t.jsxs("button",{className:`detail-tabs__tab ${L===S.id?"detail-tabs__tab--active":""}`,onClick:()=>H(S.id),disabled:S.disabled,children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label,S.badge&&t.jsx("span",{className:"detail-tabs__badge",children:typeof S.badge=="function"?S.badge(l):S.badge})]},S.id))}),t.jsx("div",{className:"detail-tabs__content",children:(I=r.find(S=>S.id===L))!=null&&I.renderContent?r.find(S=>S.id===L).renderContent(l):(le=($=r.find(S=>S.id===L))==null?void 0:$.sections)==null?void 0:le.map(P)})]}):t.jsx("div",{className:"dashboard-card",children:R.length>0?R.map(P):E.length>0?t.jsx("dl",{className:`detail-fields ${(i==null?void 0:i.type)==="grid"?`detail-fields--grid detail-fields--cols-${i.columns||2}`:""}`,children:E.map(J)}):t.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-8)",color:"var(--color-neutral-500)"},children:"表示するフィールドがありません"})})}),t.jsx(Jf,{show:M.show,title:((ve=M.config)==null?void 0:ve.title)||"確認",message:((xe=M.config)==null?void 0:xe.message)||"この操作を実行してもよろしいですか？",confirmText:((sa=M.config)==null?void 0:sa.confirmText)||"実行",cancelText:((ra=M.config)==null?void 0:ra.cancelText)||"キャンセル",danger:((ia=M.config)==null?void 0:ia.variant)==="danger",onConfirm:()=>{var S;(S=M.action)==null||S.call(M),B({show:!1})},onClose:()=>B({show:!1})})]})})]})},Gj=({field:e,value:a,error:l,onChange:n,onBlur:s,disabled:r=!1,readOnly:i=!1,formData:o={}})=>{if(e.visible&&!e.visible(o))return null;const c=r||e.disabled||e.conditionalDisabled&&e.conditionalDisabled(o),d=i||e.readOnly;if(e.render)return t.jsx("div",{className:e.wrapperClassName,children:e.render({value:a,onChange:n,onBlur:s,error:l})});switch(e.type){case"text":case"email":case"password":case"tel":case"url":case"number":case"date":case"datetime-local":case"time":case"month":case"week":case"search":return t.jsx(We,{type:e.type,label:e.label,name:e.name,id:e.name,value:a||"",onChange:f=>n(f.target.value),onBlur:s,placeholder:e.placeholder,required:e.required,disabled:c,readOnly:d,error:l,helper:e.helperText,min:e.min,max:e.max,step:e.step,maxLength:e.maxLength,pattern:e.pattern,autoComplete:e.autoComplete,autoFocus:e.autoFocus,inputMode:e.inputMode,className:e.className,fullWidth:e.width==="full",...e.attributes});case"textarea":return t.jsx(xb,{label:e.label,name:e.name,id:e.name,value:a||"",onChange:f=>n(f.target.value),onBlur:s,placeholder:e.placeholder,required:e.required,disabled:c,readOnly:d,error:l,helper:e.helperText,rows:e.rows||4,maxLength:e.maxLength,className:e.className,fullWidth:e.width==="full",...e.attributes});case"select":return t.jsx(bb,{label:e.label,name:e.name,id:e.name,value:e.multiple?Array.isArray(a)?a:[]:a||"",onChange:f=>{if(e.multiple){const p=Array.from(f.target.selectedOptions,x=>x.value);n(p)}else n(f.target.value)},onBlur:s,options:e.options||[],placeholder:e.placeholder,required:e.required,disabled:c,error:l,helper:e.helperText,className:e.className,fullWidth:e.width==="full",multiple:e.multiple,...e.attributes});case"multiselect":return t.jsx(bf,{label:e.label,name:e.name,value:Array.isArray(a)?a:[],options:e.options||[],onChange:n,onBlur:s,placeholder:e.placeholder,required:e.required,disabled:c,error:l,helper:e.helperText,className:e.className,fullWidth:e.width==="full"});case"checkbox":if(!e.options||e.options.length===0)return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c?"not-allowed":"pointer"},children:[t.jsx(Ot,{name:e.name,checked:!!a,onChange:f=>n(f.target.checked),onBlur:s,disabled:c,required:e.required,...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[e.label,e.required&&t.jsx("span",{style:{color:"#dc2626",marginLeft:"4px"},children:"*"})]})]}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",style:{marginLeft:"28px"},children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",style:{marginLeft:"28px"},children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});const m=Array.isArray(a)?a:[];return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:e.options.map(f=>t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c||f.disabled?"not-allowed":"pointer"},children:[t.jsx(Ot,{name:`${e.name}[]`,value:f.value,checked:m.includes(f.value),onChange:p=>{const x=p.target.checked?[...m,f.value]:m.filter(y=>y!==f.value);n(x)},onBlur:s,disabled:c||f.disabled,...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c||f.disabled?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[f.label,f.description&&t.jsx("span",{style:{display:"block",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)",marginTop:"2px"},children:f.description})]})]},f.value))}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"radio":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:(e.options||[]).map(f=>t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",cursor:c||f.disabled?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e.name,value:f.value,checked:a===f.value,onChange:p=>n(p.target.value),onBlur:s,disabled:c||f.disabled,required:e.required,style:{width:"16px",height:"16px",cursor:c||f.disabled?"not-allowed":"pointer"},...e.attributes}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:c||f.disabled?"var(--color-neutral-400)":"var(--color-neutral-700)"},children:[f.label,f.description&&t.jsx("span",{style:{display:"block",fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)",marginTop:"2px"},children:f.description})]})]},f.value))}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"file":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("input",{type:"file",id:e.name,name:e.name,onChange:f=>{const p=f.target.files;e.multiple?n(p):n(p&&p.length>0?p[0]:null),setTimeout(()=>s(),0)},onBlur:s,accept:e.accept,multiple:e.multiple,disabled:c,required:e.required,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${l?"#dc2626":"rgb(209, 213, 219)"}`,borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",fontFamily:"inherit",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"color":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsx("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:e.label}),t.jsx("input",{type:"color",id:e.name,name:e.name,value:a||"#000000",onChange:f=>n(f.target.value),onBlur:s,disabled:c,required:e.required,style:{width:"100%",height:"40px",padding:"var(--spacing-1)",border:`1px solid ${l?"#dc2626":"rgb(209, 213, 219)"}`,borderRadius:"var(--radius-md)",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"range":return t.jsxs("div",{className:`form-group ${e.wrapperClassName||""}`,children:[t.jsxs("label",{htmlFor:e.name,className:`form-label ${e.required?"form-label--required":""}`,children:[e.label,t.jsxs("span",{style:{marginLeft:"var(--spacing-2)",color:"var(--color-neutral-500)",fontWeight:"normal"},children:["(",a||e.min||0,")"]})]}),t.jsx("input",{type:"range",id:e.name,name:e.name,value:a||e.min||0,onChange:f=>n(Number(f.target.value)),onBlur:s,min:e.min,max:e.max,step:e.step,disabled:c,required:e.required,style:{width:"100%",cursor:c?"not-allowed":"pointer"},className:e.className,...e.attributes}),e.helperText&&!l&&t.jsx("div",{className:"form-helper",children:e.helperText}),l&&t.jsxs("div",{className:"form-error",role:"alert",children:[t.jsx("svg",{className:"form-error__icon",width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]})]});case"hidden":return t.jsx("input",{type:"hidden",name:e.name,value:a||"",...e.attributes});default:return console.warn(`Unsupported field type: ${e.type}`),null}};function Xj(e){const[a,l]=u.useState({}),[n,s]=u.useState(new Set),r=u.useRef({}),i=u.useCallback((j,w,b)=>{if(w.type==="async")return null;switch(w.type){case"required":if(j==null||j===""||typeof j=="string"&&!j.trim())return w.message;break;case"email":if(j&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(j)))return w.message;break;case"min":case"minLength":if(typeof j=="string"&&j.length<w.value||typeof j=="number"&&j<w.value)return w.message;break;case"max":case"maxLength":if(typeof j=="string"&&j.length>w.value||typeof j=="number"&&j>w.value)return w.message;break;case"pattern":const h=new RegExp(w.value);if(j&&!h.test(String(j)))return w.message;break;case"numeric":if(j&&isNaN(Number(j)))return w.message;break;case"integer":if(j&&(!Number.isInteger(Number(j))||isNaN(Number(j))))return w.message;break;case"url":try{j&&new URL(j)}catch{return w.message}break;case"date":const g=new Date(j);if(j&&isNaN(g.getTime()))return w.message;break;case"dateAfter":if(j&&w.value){const N=new Date(j),T=new Date(w.value);if(N<=T)return w.message}break;case"dateBefore":if(j&&w.value){const N=new Date(j),T=new Date(w.value);if(N>=T)return w.message}break;case"fileSize":if(j){const N=j instanceof FileList?Array.from(j):[j];for(const T of N)if(T instanceof File&&T.size>w.value)return w.message}break;case"custom":if(w.validator&&!w.validator(j,b))return w.message;break;default:console.warn(`Unknown validation rule type: ${w.type}`)}return null},[]),o=u.useCallback((j,w,b)=>{const v=e[j];if(!v||v.length===0)return!0;for(const h of v){const g=i(w,h,b);if(g)return l(N=>({...N,[j]:g})),!1}return l(h=>{const g={...h};return delete g[j],g}),!0},[e,i]),c=u.useCallback(async(j,w,b)=>{const v=e[j];if(!v||v.length===0)return!0;const h=v.filter(g=>g.type==="async");return h.length===0?!0:(r.current[j]&&clearTimeout(r.current[j]),new Promise(g=>{const N=h[0].debounce??500;r.current[j]=setTimeout(async()=>{s(T=>new Set(T).add(j));try{for(const T of h){let z=!1;if(T.asyncValidator)try{z=await T.asyncValidator(w,b)}catch(C){console.error(`Async validation error for ${j}:`,C),z=!0}else if(T.endpoint)try{const C=new AbortController,L=setTimeout(()=>C.abort(),1e4),H=await fetch(T.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:w,fieldName:j,formData:b}),signal:C.signal});if(clearTimeout(L),H.ok){const M=await H.json();z=M.valid===!0,!z&&M.message&&(T.message=M.message)}else console.error(`API validation error for ${j}:`,H.statusText),z=!0}catch(C){console.error(`Network error during validation for ${j}:`,C),z=!0}if(!z){l(C=>({...C,[j]:T.message})),s(C=>{const L=new Set(C);return L.delete(j),L}),g(!1);return}}l(T=>{const z={...T};return delete z[j],z}),s(T=>{const z=new Set(T);return z.delete(j),z}),g(!0)}catch(T){console.error(`Unexpected error during async validation for ${j}:`,T),s(z=>{const C=new Set(z);return C.delete(j),C}),g(!0)}},N)}))},[e]),d=u.useCallback(j=>{const w={};let b=!0;return Object.keys(e).forEach(v=>{const h=e[v],g=j[v];for(const N of h){const T=i(g,N,j);if(T){w[v]=T,b=!1;break}}}),l(w),b},[e,i]),m=u.useCallback(j=>{l(w=>{const b={...w};return delete b[j],b})},[]),f=u.useCallback(()=>{l({})},[]),p=u.useCallback((j,w)=>{l(b=>({...b,[j]:w}))},[]),x=Object.keys(a).length>0,y=n.size>0;return{errors:a,validateField:o,validateFieldAsync:c,validateForm:d,clearError:m,clearAllErrors:f,setError:p,hasErrors:x,validatingFields:n,isValidating:y}}function Qj({initialData:e={},validation:a,onSubmit:l,onSuccess:n,onError:s}){const[r,i]=u.useState(e),[o,c]=u.useState(!1),[d,m]=u.useState(new Set),{errors:f,validateField:p,validateFieldAsync:x,validateForm:y,clearError:j,setError:w,hasErrors:b}=Xj(a),v=JSON.stringify(r)!==JSON.stringify(e),h=u.useCallback((M,B)=>{i(_=>({..._,[M]:B}))},[]),g=u.useCallback(M=>{i(B=>({...B,...M}))},[]),N=u.useCallback((M,B)=>{h(M,B),j(M)},[h,j]),T=u.useCallback(async M=>{m(B=>new Set(B).add(M)),p(M,r[M],r),await x(M,r[M],r)},[r,p,x]),z=u.useCallback((M,B)=>p(M,B,r),[r,p]),C=u.useCallback(()=>y(r),[r,y]),L=u.useCallback(async M=>{if(M&&M.preventDefault(),!C()){window.scrollTo({top:0,behavior:"smooth"});return}c(!0);try{await l(r),n==null||n()}catch(B){const _=B instanceof Error?B:new Error("Submit failed");s==null||s(_),console.error("Form submission error:",_)}finally{c(!1)}},[r,C,l,n,s]),H=u.useCallback(()=>{i(e),m(new Set)},[e]);return{formData:r,errors:f,isSubmitting:o,isDirty:v,hasErrors:b,setValue:h,setValues:g,handleChange:N,handleBlur:T,handleSubmit:L,resetForm:H,validateField:z,validateForm:C,clearError:j,setError:w}}const qd=({title:e,subtitle:a,fields:l=[],sections:n=[],validation:s,initialData:r={},errors:i={},isSubmitting:o=!1,onSubmit:c,onCancel:d,onDraftSave:m,onChange:f,submitButtonText:p="登録",cancelButtonText:x="キャンセル",showDraftButton:y=!0,draftButtonText:j="下書き保存",customActions:w=[],layout:b,validateOnBlur:v=!0,validateOnChange:h=!1,showInlineErrors:g=!0,showErrorSummary:N=!1,autoSaveInterval:T,warnOnUnsavedChanges:z=!1,formId:C="dynamic-form",className:L="",successMessage:H,readOnly:M=!1,loading:B=!1,breadcrumbs:_=[],headerActions:Y=[],onLogout:G})=>{const[A,R]=u.useState("pc"),[E,U]=u.useState(new Set(n.filter(S=>S.defaultCollapsed).map(S=>S.id))),[V,J]=u.useState(!1),P=S=>{const ie=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",D={dashboard:`${ie}/dashboard`,"data-list":`${ie}/data/list`,statistics:`${ie}/statistics`,settings:`${ie}/settings`,notifications:`${ie}/notifications`,login:`${ie}/login`,qna:`${ie}/qna`,privacy:`${ie}/privacy`,terms:`${ie}/terms`,commercial:`${ie}/commercial`}[S]||`${ie}/${S}`;window.location.href=D},Z=()=>{if(G){G();return}P("login")},F=Qj({initialData:r,validation:s,onSubmit:async S=>{const W=await c(S);W&&W.success&&(J(!0),setTimeout(()=>J(!1),3e3))},onError:S=>{console.error("Form submission error:",S)}});u.useEffect(()=>{i&&Object.keys(i).length>0&&Object.entries(i).forEach(([S,W])=>{F.setError(S,W)})},[i]),u.useEffect(()=>{if(!T||!m)return;const S=setInterval(()=>{F.isDirty&&!F.isSubmitting&&m(F.formData)},T);return()=>clearInterval(S)},[T,F.isDirty,F.isSubmitting,F.formData,m]),u.useEffect(()=>{if(!z)return;const S=W=>{F.isDirty&&(W.preventDefault(),W.returnValue="")};return window.addEventListener("beforeunload",S),()=>window.removeEventListener("beforeunload",S)},[z,F.isDirty]);const I=(S,W)=>{h?F.handleChange(S,W):(F.setValue(S,W),F.clearError(S)),f&&f(S,W,{...F.formData,[S]:W})},$=S=>{v&&F.handleBlur(S)},le=()=>{m&&m(F.formData)},ve=S=>{U(W=>{const ce=new Set(W);return ce.has(S)?ce.delete(S):ce.add(S),ce})},xe=S=>!S.width||S.width==="full"?"":{half:"form-field--half",third:"form-field--third","two-thirds":"form-field--two-thirds",quarter:"form-field--quarter"}[S.width]||"",sa=S=>{const W=F.formData[S.name]??S.defaultValue??"",ce=g?F.errors[S.name]:void 0;return t.jsx("div",{className:`form-field ${xe(S)}`,style:{gridColumn:S.width==="full"?"1 / -1":void 0},children:t.jsx(Gj,{field:S,value:W,error:ce,onChange:ie=>I(S.name,ie),onBlur:()=>$(S.name),disabled:o||F.isSubmitting,readOnly:M,formData:F.formData})},S.name)},ra=S=>{if(S.visible&&!S.visible(F.formData))return null;const W=E.has(S.id);return t.jsxs("div",{className:`dashboard-card ${S.className||""}`,style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:W?0:"var(--spacing-4)",cursor:S.collapsible?"pointer":"default"},onClick:S.collapsible?()=>ve(S.id):void 0,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"20px",height:"20px",color:"var(--color-primary-500)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:S.title})]}),S.collapsible&&t.jsx(k,{name:W?"chevron-down":"chevron-up",style:{width:"20px",height:"20px",color:"var(--color-neutral-500)",transition:"transform 0.2s"}})]}),S.description&&!W&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)",marginTop:"calc(var(--spacing-4) * -0.5)"},children:S.description}),!W&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:b!=null&&b.columns?`repeat(${b.columns}, 1fr)`:"1fr",gap:(b==null?void 0:b.gap)==="sm"?"var(--spacing-3)":(b==null?void 0:b.gap)==="lg"?"var(--spacing-6)":"var(--spacing-4)"},children:S.fields.map(sa)})]},S.id)};if(B)return t.jsxs("div",{className:A==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:A,onViewModeChange:R}),t.jsx(Ve,{viewMode:A,currentPage:"data-form",onNavigate:P,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:Z,children:t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"400px"},children:t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid var(--color-neutral-200)",borderTopColor:"var(--color-primary-500)",borderRadius:0,animation:"spin 0.8s linear infinite"}})})})]});const ia=o||F.isSubmitting;return t.jsxs("div",{className:A==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:A,onViewModeChange:R}),t.jsx(Ve,{viewMode:A,currentPage:"data-form",onNavigate:P,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:Z,children:t.jsxs("div",{className:`dashboard-content form-page ${L}`,children:[_.length>0&&t.jsx("nav",{style:{paddingBottom:"var(--spacing-3)",marginBottom:"var(--spacing-4)"},children:t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",flexWrap:"wrap"},children:_.map((S,W)=>t.jsxs(ee.Fragment,{children:[S.path?t.jsxs("a",{href:"#",onClick:ce=>{ce.preventDefault(),d&&d()},style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-neutral-600)",textDecoration:"none",transition:"color 0.15s"},onMouseEnter:ce=>ce.currentTarget.style.color="var(--color-primary-600)",onMouseLeave:ce=>ce.currentTarget.style.color="var(--color-neutral-600)",children:[W===0&&t.jsx(k,{name:"table",style:{width:"16px",height:"16px"}}),t.jsx("span",{children:S.label})]}):t.jsx("span",{style:{color:"var(--color-neutral-900)",fontWeight:"var(--font-weight-medium)"},children:S.label}),W<_.length-1&&t.jsx(k,{name:"chevron-right",style:{width:"12px",height:"12px",color:"var(--color-neutral-400)"}})]},W))})}),t.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),a&&t.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginTop:"var(--spacing-2)"},children:a})]}),Y.length>0&&t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:Y.map((S,W)=>t.jsxs("button",{type:"button",className:`btn btn--${S.variant||"secondary"}`,onClick:S.onClick,children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},W))})]}),V&&H&&t.jsxs("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:0,marginBottom:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"check-circle",style:{width:"20px",height:"20px",color:"var(--color-success-600)"}}),t.jsx("span",{style:{color:"var(--color-success-700)",fontSize:"var(--font-size-sm)"},children:H})]}),N&&F.hasErrors&&t.jsxs("div",{style:{padding:"var(--spacing-4)",backgroundColor:"var(--color-error-50)",border:"1px solid var(--color-error-200)",borderRadius:0,marginBottom:"var(--spacing-4)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:[t.jsx(k,{name:"error",style:{width:"20px",height:"20px",color:"var(--color-error-600)"}}),t.jsx("h4",{style:{fontSize:"var(--font-size-md)",fontWeight:"var(--font-weight-bold)",color:"var(--color-error-700)",margin:0},children:"入力内容にエラーがあります"})]}),t.jsx("ul",{style:{margin:0,paddingLeft:"var(--spacing-5)",color:"var(--color-error-700)",fontSize:"var(--font-size-sm)"},children:Object.entries(F.errors).map(([S,W])=>t.jsx("li",{children:W},S))})]}),t.jsxs("form",{id:C,onSubmit:F.handleSubmit,noValidate:!0,children:[n.length>0?n.map(ra):t.jsx("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:t.jsx("div",{style:{display:"grid",gridTemplateColumns:b!=null&&b.columns?`repeat(${b.columns}, 1fr)`:"1fr",gap:(b==null?void 0:b.gap)==="sm"?"var(--spacing-3)":(b==null?void 0:b.gap)==="lg"?"var(--spacing-6)":"var(--spacing-4)"},children:l.map(sa)})}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",justifyContent:"flex-end",flexWrap:"wrap"},children:[d&&t.jsx("button",{type:"button",className:"btn btn--text",disabled:ia,onClick:d,children:x}),w.map((S,W)=>t.jsxs("button",{type:"button",className:`btn btn--${S.variant||"secondary"}`,disabled:S.disabled||ia,onClick:()=>S.onClick(F.formData),children:[S.icon&&t.jsx(k,{name:S.icon,style:{width:"16px",height:"16px"}}),S.label]},W)),y&&m&&!M&&t.jsxs("button",{type:"button",className:"btn btn--secondary",disabled:ia||!F.isDirty,onClick:le,children:[t.jsx(k,{name:"file",style:{width:"16px",height:"16px"}}),j]}),!M&&t.jsx("button",{type:"submit",className:"btn btn--primary",disabled:ia,children:ia?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid white",borderTopColor:"transparent",borderRadius:0,animation:"spin 0.6s linear infinite"}}),"処理中..."]}):t.jsxs(t.Fragment,{children:[t.jsx(k,{name:"check",style:{width:"16px",height:"16px"}}),p]})})]})]})]})})]})},Qi=()=>{const e=Jl(),a=Dt(),l=u.useRef(null),[n,s]=ea(),[r,i]=u.useState(!1),[o,c]=u.useState(!1),[d,m]=u.useState(!1),[f,p]=u.useState(!1),[x,y]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),j=e.pathname.includes("/edit"),w=j?"データ編集":"データ作成",b=j?"データ編集":"データ作成",v=[{id:"personal",title:"個人情報",description:"基本的な個人情報を入力してください",icon:"user",collapsible:!1,fields:[{name:"firstName",label:"名",type:"text",required:!0,width:"half",placeholder:"太郎"},{name:"lastName",label:"姓",type:"text",required:!0,width:"half",placeholder:"山田"},{name:"email",label:"メールアドレス",type:"email",required:!0,width:"full",placeholder:"example@email.com"},{name:"phone",label:"電話番号",type:"tel",width:"half",placeholder:"09012345678",pattern:"^[0-9]+$"},{name:"alternatePhone",label:"予備電話番号",type:"tel",width:"half",placeholder:"0312345678",pattern:"^[0-9]+$"}]},{id:"address",title:"住所情報",icon:"location",collapsible:!0,fields:[{name:"postalCode",label:"郵便番号",type:"text",placeholder:"1234567",width:"third",pattern:"^[0-9]{7}$"},{name:"prefecture",label:"都道府県",type:"select",required:!0,width:"two-thirds",placeholder:"選択してください",options:[{value:"tokyo",label:"東京都"},{value:"osaka",label:"大阪府"},{value:"kyoto",label:"京都府"},{value:"hokkaido",label:"北海道"}]},{name:"city",label:"市区町村",type:"text",required:!0,width:"half",placeholder:"渋谷区",maxLength:50},{name:"address1",label:"町名・番地",type:"text",required:!0,width:"half",placeholder:"道玄坂1-2-3",maxLength:50},{name:"address2",label:"建物名・部屋番号",type:"text",width:"full",placeholder:"〇〇ビル 4階",maxLength:50}]},{id:"employment",title:"職業情報",icon:"briefcase",collapsible:!0,defaultCollapsed:!0,fields:[{name:"employmentStatus",label:"雇用形態",type:"select",width:"half",options:[{value:"fulltime",label:"正社員"},{value:"parttime",label:"パート・アルバイト"},{value:"contract",label:"契約社員"},{value:"freelance",label:"フリーランス"},{value:"student",label:"学生"},{value:"unemployed",label:"無職"}]},{name:"occupation",label:"職種",type:"text",width:"half",placeholder:"ソフトウェアエンジニア",maxLength:30},{name:"companyName",label:"勤務先名",type:"text",width:"full",placeholder:"株式会社〇〇",maxLength:50},{name:"annualIncome",label:"年収",type:"text",width:"half",placeholder:"5000000",helperText:"税込の年収を入力してください",pattern:"^[0-9]+$",inputMode:"numeric"}]},{id:"preferences",title:"設定・希望",icon:"settings",collapsible:!0,fields:[{name:"skills",label:"スキル・得意分野",type:"checkbox",options:[{value:"programming",label:"プログラミング"},{value:"design",label:"デザイン"},{value:"marketing",label:"マーケティング"},{value:"management",label:"マネジメント"},{value:"sales",label:"営業"}]},{name:"workLocation",label:"希望勤務地",type:"multiselect",width:"full",options:[{value:"tokyo",label:"東京"},{value:"osaka",label:"大阪"},{value:"nagoya",label:"名古屋"},{value:"fukuoka",label:"福岡"},{value:"remote",label:"リモート"}],placeholder:"勤務地を選択してください",helperText:"複数選択可能です"},{name:"desiredSalary",label:"希望年収",type:"range",min:3e6,max:15e6,step:5e5,width:"full",helperText:"スライダーを動かして希望年収を選択してください"},{name:"availableStartDate",label:"就業可能日",type:"date",width:"half"},{name:"preferredContactTime",label:"希望連絡時間",type:"time",width:"half"}]},{id:"documents",title:"書類アップロード",icon:"file",collapsible:!0,defaultCollapsed:!0,fields:[{name:"resume",label:"履歴書",type:"file",accept:".pdf,.doc,.docx",width:"full",helperText:"PDF、Word形式（最大5MB）"},{name:"portfolio",label:"ポートフォリオ・作品",type:"file",multiple:!0,accept:"image/*,.pdf",width:"full",helperText:"画像またはPDF形式、複数選択可能（最大5MB）"},{name:"profilePhoto",label:"プロフィール写真",type:"file",accept:"image/*",width:"full",helperText:"JPG、PNG形式（最大2MB）"}]}],h={firstName:[{type:"required",message:"名は必須です"},{type:"minLength",value:1,message:"名を入力してください"}],lastName:[{type:"required",message:"姓は必須です"},{type:"minLength",value:1,message:"姓を入力してください"}],email:[{type:"required",message:"メールアドレスは必須です"},{type:"email",message:"有効なメールアドレスを入力してください"},{type:"async",asyncValidator:async M=>(await new Promise(_=>setTimeout(_,800)),!["test@example.com","admin@example.com","user@example.com"].includes(M.toLowerCase())),debounce:500,message:"このメールアドレスは既に使用されています"}],phone:[{type:"pattern",value:"^[0-9]+$",message:"電話番号は数字のみで入力してください"}],alternatePhone:[{type:"pattern",value:"^[0-9]+$",message:"電話番号は数字のみで入力してください"}],postalCode:[{type:"pattern",value:"^[0-9]{7}$",message:"郵便番号は7桁の数字で入力してください（例: 1234567）"}],prefecture:[{type:"required",message:"都道府県を選択してください"}],city:[{type:"required",message:"市区町村は必須です"},{type:"maxLength",value:50,message:"市区町村は50文字以内で入力してください"}],address1:[{type:"required",message:"町名・番地は必須です"},{type:"maxLength",value:50,message:"町名・番地は50文字以内で入力してください"}],address2:[{type:"maxLength",value:50,message:"建物名・部屋番号は50文字以内で入力してください"}],occupation:[{type:"maxLength",value:30,message:"職種は30文字以内で入力してください"}],companyName:[{type:"maxLength",value:50,message:"勤務先名は50文字以内で入力してください"}],annualIncome:[{type:"pattern",value:"^[0-9]+$",message:"年収は数字のみで入力してください"}],resume:[{type:"fileSize",value:5242880,message:"ファイルサイズは5MB以下にしてください"}],portfolio:[{type:"fileSize",value:5242880,message:"ファイルサイズは5MB以下にしてください"}],profilePhoto:[{type:"fileSize",value:2097152,message:"ファイルサイズは2MB以下にしてください"}]},g=M=>{y(B=>B.map(_=>_.id===M?{..._,read:!0}:_))},N=()=>{y(M=>M.map(B=>({...B,read:!0})))},T=M=>{const _={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[M]||`/pages/${M}`;a(_)},H={title:w,sections:v,validation:h,initialData:j?{firstName:"太郎",lastName:"山田",email:"taro.yamada@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"tokyo",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"fulltime",occupation:"ソフトウェアエンジニア",companyName:"株式会社サンプル",annualIncome:"6000000",skills:["programming","design"],workLocation:["tokyo","remote"],desiredSalary:6e6,availableStartDate:"2025-02-01",preferredContactTime:"14:00"}:{},onSubmit:async M=>(console.log("Form submitted:",M),new Promise(B=>{setTimeout(()=>{sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"データを登録しました"})),a("/pages/data/list"),B()},1e3)})),onDraftSave:async M=>{console.log("Draft saved:",M),sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"下書きを保存しました"})),a("/pages/data/list")},onChange:(M,B,_)=>{console.log(`Field ${M} changed to:`,B),console.log("All form data:",_)},breadcrumbs:[{label:"ホーム",path:"/"},{label:"データ一覧",path:"/pages/data/list"},{label:b}],submitButtonText:"登録",showDraftButton:!0,draftButtonText:"下書き保存",validateOnBlur:!0,showInlineErrors:!0,showErrorSummary:!0,warnOnUnsavedChanges:!0,layout:{columns:2,gap:"md",responsive:{tablet:2,mobile:1}}};return t.jsxs("div",{className:n==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:n,onViewModeChange:s}),t.jsx(Ve,{viewMode:n,currentPage:"data-form",onNavigate:T,unreadCount:x.filter(M=>!M.read).length,showNotificationDropdown:r,setShowNotificationDropdown:i,showUserMenu:o,setShowUserMenu:c,isHamburgerOpen:d,setIsHamburgerOpen:m,sidebarCollapsed:f,setSidebarCollapsed:p,notificationRef:l,notifications:x,onMarkNotificationAsRead:g,onMarkAllNotificationsAsRead:N,children:t.jsx(qd,{...H})})]})},Fj=()=>{Dt();const[e,a]=u.useState("login"),[l,n]=u.useState(!1),[s,r]=u.useState(!1),i=u.useRef(null),[o,c]=u.useState(""),[d,m]=u.useState(""),[f,p]=u.useState(!1),[x,y]=u.useState(!1),[j,w]=u.useState(""),[b,v]=u.useState(""),[h,g]=u.useState(""),[N,T]=u.useState(null),[z,C]=u.useState(""),[L,H]=u.useState(""),[M,B]=u.useState(""),[_,Y]=u.useState(""),[G,A]=u.useState(""),[R,E]=u.useState(!1),[U,V]=u.useState({email:"",password:""}),[J,P]=u.useState(""),[Z,F]=u.useState(!1),[I,$]=u.useState(""),[le,ve]=u.useState(!1),[xe,sa]=u.useState({newPassword:"",confirmPassword:""}),[ra,ia]=u.useState({name:"",email:"",phone:"",password:"",passwordConfirm:"",agreeToTerms:""}),[S,W]=u.useState("pc"),[ce,ie]=u.useState(!1),[Wa,D]=u.useState(!1),[K,ge]=u.useState({}),[Be,Ha]=u.useState(!1);u.useEffect(()=>{const X=ue=>{i.current&&!i.current.contains(ue.target)&&r(!1)};if(s)return document.addEventListener("mousedown",X),()=>{document.removeEventListener("mousedown",X)}},[s]),u.useEffect(()=>{e==="data-edit"&&Ne({title:"Webサイトリニューアル",description:"コーポレートサイトの全面リニューアルプロジェクト。レスポンシブデザイン対応とSEO最適化を実施します。",category:"web",status:"in-progress",priority:"high",tags:"Web, デザイン, SEO",startDate:"2024-09-15",endDate:"2024-12-31"})},[e]);const[oa,de]=u.useState([{id:1,type:"info",title:"システムアップデート",message:"新しい機能が追加されました",time:"2時間前",read:!1},{id:2,type:"success",title:"データ保存完了",message:"データが正常に保存されました",time:"5時間前",read:!1},{id:3,type:"warning",title:"メンテナンス予定",message:"明日の深夜にメンテナンスを実施します",time:"1日前",read:!0},{id:4,type:"error",title:"エラー発生",message:"一部の機能でエラーが発生しています",time:"2日前",read:!0}]),ne=oa.filter(X=>!X.read).length,Q=X=>{de(ue=>ue.map(Le=>Le.id===X?{...Le,read:!0}:Le))},fe=()=>{de(X=>X.map(ue=>({...ue,read:!0})))},[fa,Ne]=u.useState({title:"",description:"",category:"",status:"draft",priority:"medium",tags:"",startDate:"",endDate:""}),Fe=(X,ue)=>{let Le="";switch(X){case"name":ue.trim()||(Le="お名前を入力してください");break;case"email":ue.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ue)||(Le="正しいメールアドレスを入力してください"):Le="メールアドレスを入力してください";break;case"phone":ue.trim()&&!/^[0-9]{10,11}$/.test(ue.replace(/-/g,""))&&(Le="正しい電話番号を入力してください（10〜11桁の数字）");break;case"password":ue?ue.length<8&&(Le="パスワードは8文字以上で入力してください"):Le="パスワードを入力してください";break;case"passwordConfirm":ue?_!==ue&&(Le="パスワードが一致しません"):Le="パスワード確認を入力してください";break}return ia(gl=>({...gl,[X]:Le})),Le===""},Pe=()=>{const X={name:"",email:"",phone:"",password:"",passwordConfirm:"",agreeToTerms:""};return z.trim()||(X.name="お名前を入力してください"),L.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L)||(X.email="正しいメールアドレスを入力してください"):X.email="メールアドレスを入力してください",M.trim()&&!/^[0-9]{10,11}$/.test(M.replace(/-/g,""))&&(X.phone="正しい電話番号を入力してください（10〜11桁の数字）"),_?_.length<8&&(X.password="パスワードは8文字以上で入力してください"):X.password="パスワードを入力してください",G?_!==G&&(X.passwordConfirm="パスワードが一致しません"):X.passwordConfirm="パスワード確認を入力してください",R||(X.agreeToTerms="利用規約に同意してください"),ia(X),!Object.values(X).some(ue=>ue!=="")},Ta=X=>{X.preventDefault(),Pe()&&a("signup-confirm")},Te=X=>{a(X)},ja=(X,ue)=>{let Le="";switch(X){case"newPassword":ue?ue.length<8&&(Le="パスワードは8文字以上で入力してください"):Le="パスワードを入力してください";break;case"confirmPassword":ue?b!==ue&&(Le="パスワードが一致しません"):Le="パスワード確認を入力してください";break}return sa(gl=>({...gl,[X]:Le})),Le===""},Ae=()=>{const X={newPassword:"",confirmPassword:""};return b?b.length<8&&(X.newPassword="パスワードは8文字以上で入力してください"):X.newPassword="パスワードを入力してください",h?b!==h&&(X.confirmPassword="パスワードが一致しません"):X.confirmPassword="パスワード確認を入力してください",sa(X),!Object.values(X).some(ue=>ue!=="")},Aa=X=>{X.preventDefault(),Ae()&&ve(!0)},$a=X=>{let ue="";return X.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X)||(ue="正しいメールアドレスを入力してください"):ue="メールアドレスを入力してください",$(ue),ue===""},Gt=X=>{X.preventDefault(),$a(j)&&F(!0)},fl=(X,ue)=>{let Le="";switch(X){case"email":ue.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ue)||(Le="正しいメールアドレスを入力してください"):Le="メールアドレスを入力してください";break;case"password":ue||(Le="パスワードを入力してください");break}return V(gl=>({...gl,[X]:Le})),Le===""},Ga=()=>{const X={email:"",password:""};return o.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)||(X.email="正しいメールアドレスを入力してください"):X.email="メールアドレスを入力してください",d||(X.password="パスワードを入力してください"),V(X),!Object.values(X).some(ue=>ue!=="")},Tr=X=>{X.preventDefault(),Ga()&&P("メールアドレスまたはパスワードが正しくありません")};return t.jsxs("div",{className:`template-page ${S==="sp"?"force-mobile":""}`,children:[t.jsx(ke,{viewMode:S,onViewModeChange:W}),e==="login"&&t.jsx(Rd,{email:o,password:d,rememberMe:f,loginFormError:J,loginErrors:U,onEmailChange:c,onPasswordChange:m,onRememberMeChange:p,onEmailBlur:X=>fl("email",X),onPasswordBlur:X=>fl("password",X),onSubmit:Tr,onNavigateToForgotPassword:()=>a("forgot-password"),hideNavigation:!0}),e==="forgot-password"&&t.jsx(Td,{resetEmail:j,resetEmailError:I,resetEmailSuccess:Z,onResetEmailChange:w,onResetEmailBlur:$a,onSubmit:Gt,onNavigateToLogin:()=>a("login"),hideNavigation:!0}),e==="reset-password"&&t.jsx(Ad,{newPassword:b,confirmPassword:h,passwordResetSuccess:le,passwordResetErrors:xe,onNewPasswordChange:v,onConfirmPasswordChange:g,onNewPasswordBlur:X=>ja("newPassword",X),onConfirmPasswordBlur:X=>ja("confirmPassword",X),onSubmit:Aa,hideNavigation:!0}),e==="signup"&&t.jsx(Ed,{signupName:z,signupEmail:L,signupPhone:M,signupPassword:_,signupPasswordConfirm:G,agreeToTerms:R,signupErrors:ra,onNameChange:C,onEmailChange:H,onPhoneChange:B,onPasswordChange:Y,onPasswordConfirmChange:A,onAgreeToTermsChange:E,onNameBlur:X=>Fe("name",X),onEmailBlur:X=>Fe("email",X),onPhoneBlur:X=>Fe("phone",X),onPasswordBlur:X=>Fe("password",X),onPasswordConfirmBlur:X=>Fe("passwordConfirm",X),onSubmit:Ta,onNavigateToLogin:()=>a("login"),hideNavigation:!0}),e==="signup-confirm"&&t.jsx(Dd,{signupName:z,signupEmail:L,signupPhone:M,onConfirm:()=>a("signup-complete"),onBack:()=>a("signup"),hideNavigation:!0}),e==="signup-complete"&&t.jsx(Bd,{onNavigateToLogin:()=>a("login"),hideNavigation:!0}),e==="error-404"&&t.jsx(_d,{onNavigate:Te,hideNavigation:!0}),e==="error-500"&&t.jsx(Ld,{onNavigate:Te,hideNavigation:!0}),e==="maintenance"&&t.jsx(Hd,{hideNavigation:!0}),e==="data-detail"&&t.jsx(Ju,{viewMode:S,onNavigate:Te,unreadCount:ne,onUnreadCountChange:setUnreadCount,showFlashMessage:N,onFlashMessageChange:T,showDeleteModal:Be,onDeleteModalChange:Ha}),e==="data-create"&&t.jsx(Ve,{viewMode:S,currentPage:"data-create",onNavigate:Te,unreadCount:ne,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:ie,sidebarCollapsed:x,setSidebarCollapsed:y,notificationRef:i,notifications:oa,onMarkNotificationAsRead:Q,onMarkAllNotificationsAsRead:fe,children:t.jsx(Qi,{})}),e==="data-edit"&&t.jsx(Ve,{viewMode:S,currentPage:"data-edit",onNavigate:Te,unreadCount:ne,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:ie,sidebarCollapsed:x,setSidebarCollapsed:y,notificationRef:i,notifications:oa,onMarkNotificationAsRead:Q,onMarkAllNotificationsAsRead:fe,children:t.jsx(Qi,{})}),e==="qna"&&t.jsx(Ve,{viewMode:S,currentPage:"qna",onNavigate:Te,unreadCount:ne,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:ie,sidebarCollapsed:x,setSidebarCollapsed:y,notificationRef:i,notifications:oa,onMarkNotificationAsRead:Q,onMarkAllNotificationsAsRead:fe,children:t.jsx(Ud,{viewMode:S,hideNavigation:!0})}),e==="terms"&&t.jsx(Ve,{viewMode:S,currentPage:"terms",onNavigate:Te,unreadCount:ne,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:ie,sidebarCollapsed:x,setSidebarCollapsed:y,notificationRef:i,notifications:oa,onMarkNotificationAsRead:Q,onMarkAllNotificationsAsRead:fe,children:t.jsx(Vd,{viewMode:S,hideNavigation:!0})}),e==="privacy"&&t.jsx(Ve,{viewMode:S,currentPage:"privacy",onNavigate:Te,unreadCount:ne,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:ie,sidebarCollapsed:x,setSidebarCollapsed:y,notificationRef:i,notifications:oa,onMarkNotificationAsRead:Q,onMarkAllNotificationsAsRead:fe,children:t.jsx($d,{viewMode:S,hideNavigation:!0})}),e==="commercial"&&t.jsx(Ve,{viewMode:S,currentPage:"commercial",onNavigate:Te,unreadCount:ne,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:l,setShowUserMenu:n,isHamburgerOpen:ce,setIsHamburgerOpen:ie,sidebarCollapsed:x,setSidebarCollapsed:y,notificationRef:i,notifications:oa,onMarkNotificationAsRead:Q,onMarkAllNotificationsAsRead:fe,children:t.jsx(Od,{viewMode:S,hideNavigation:!0})})]})};function Pj({data:e,defaultSortColumn:a,defaultSortDirection:l="asc",selectable:n=!1,initialSelectedIds:s=[]}){const[r,i]=u.useState(a||null),[o,c]=u.useState(l),[d,m]=u.useState(s),f=u.useCallback(h=>{i(g=>g===h?(c(N=>N==="asc"?"desc":"asc"),h):(c("asc"),h))},[]),p=u.useMemo(()=>r?[...e].sort((h,g)=>{const N=h[r],T=g[r];if(N==null&&T==null)return 0;if(N==null)return 1;if(T==null)return-1;let z=0;return typeof N=="string"&&typeof T=="string"?z=N.toLowerCase().localeCompare(T.toLowerCase()):typeof N=="number"&&typeof T=="number"?z=N-T:N instanceof Date&&T instanceof Date?z=N.getTime()-T.getTime():z=String(N).localeCompare(String(T)),o==="asc"?z:-z}):e,[e,r,o]),x=u.useCallback(()=>{d.length===e.length&&e.length>0?m([]):m(e.map(h=>h.id))},[e,d.length]),y=u.useCallback(h=>{m(g=>g.includes(h)?g.filter(N=>N!==h):[...g,h])},[]),j=u.useCallback(()=>{m([])},[]),w=u.useCallback(h=>d.includes(h),[d]),b=n&&d.length===e.length&&e.length>0,v=n&&d.length>0&&d.length<e.length;return{displayData:p,sortColumn:r,sortDirection:o,selectedIds:d,allSelected:b,someSelected:v,handleSort:f,handleSelectAll:x,handleSelectRow:y,clearSelection:j,isSelected:w}}function Zj({initialValues:e={},onSearch:a,serverSide:l=!1}={}){const[n,s]=u.useState(e),r=u.useCallback((m,f)=>{s(p=>({...p,[m]:f}))},[]),i=u.useCallback(m=>{s(f=>({...f,...m}))},[]),o=u.useCallback(()=>{a==null||a(n)},[n,a]),c=u.useCallback(()=>{s({}),l&&(a==null||a({}))},[l,a]),d=u.useMemo(()=>Object.values(n).some(m=>m!=null&&m!==""),[n]);return{searchValues:n,setValue:r,setValues:i,handleSearch:o,handleClear:c,hasActiveFilters:d}}const Kj=(e,a,l,n)=>{if(a.render)return a.render(e,l,n);if(e==null)return t.jsx("span",{style:{color:"var(--color-neutral-400)"},children:"-"});switch(a.dataType||"text"){case"text":return String(e);case"number":const r=a.decimals??0,i=a.thousandsSeparator||",",o=Number(e);if(isNaN(o))return e;const d=o.toFixed(r).split(".");return d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,i),d.join(".");case"currency":const m=a.currencySymbol||"¥",f=a.decimals??0,p=Number(e);if(isNaN(p))return e;const y=p.toFixed(f).split(".");return y[0]=y[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),`${m}${y.join(".")}`;case"percentage":const j=Number(e);if(isNaN(j))return e;const w=a.decimals??1;return`${j.toFixed(w)}%`;case"date":a.dateFormat;const b=e instanceof Date?e:new Date(e);if(isNaN(b.getTime()))return e;const v=b.getFullYear(),h=String(b.getMonth()+1).padStart(2,"0"),g=String(b.getDate()).padStart(2,"0");return`${v}-${h}-${g}`;case"datetime":const N=e instanceof Date?e:new Date(e);if(isNaN(N.getTime()))return e;const T=N.getFullYear(),z=String(N.getMonth()+1).padStart(2,"0"),C=String(N.getDate()).padStart(2,"0"),L=String(N.getHours()).padStart(2,"0"),H=String(N.getMinutes()).padStart(2,"0");return`${T}-${z}-${C} ${L}:${H}`;case"time":const M=e instanceof Date?e:new Date(e);if(isNaN(M.getTime()))return e;const B=a.timeFormat||"24h";let _=M.getHours();const Y=String(M.getMinutes()).padStart(2,"0");if(B==="12h"){const E=_>=12?"PM":"AM";return _=_%12||12,`${_}:${Y} ${E}`}return`${String(_).padStart(2,"0")}:${Y}`;case"boolean":return t.jsx("span",{className:`status-badge ${e?"status-badge--success":"status-badge--default"}`,children:e?"有効":"無効"});case"badge":if(!a.badgeConfig||!a.badgeConfig[e])return t.jsx("span",{className:"status-badge status-badge--default",children:e});const G=a.badgeConfig[e],R={success:"status-badge--success",warning:"status-badge--warning",error:"status-badge--danger",danger:"status-badge--danger",info:"status-badge--info",default:"status-badge--default",primary:"status-badge--primary",secondary:"status-badge--default"}[G.variant]||"status-badge--default";return t.jsx("span",{className:`status-badge ${R}`,children:G.label});case"link":return t.jsx("a",{href:e,style:{color:"var(--color-primary-600)",fontWeight:"var(--font-weight-medium)"},onClick:E=>E.stopPropagation(),children:e});case"email":return t.jsx("a",{href:`mailto:${e}`,style:{color:"var(--color-primary-600)"},onClick:E=>E.stopPropagation(),children:e});case"phone":return t.jsx("a",{href:`tel:${e}`,style:{color:"var(--color-primary-600)"},onClick:E=>E.stopPropagation(),children:e});case"image":return t.jsx("img",{src:e,alt:"",style:{width:"40px",height:"40px",objectFit:"cover",borderRadius:0}});case"avatar":return t.jsx("img",{src:e,alt:"",style:{width:"32px",height:"32px",objectFit:"cover",borderRadius:0}});case"custom":return e;default:return String(e)}},eg=({title:e,subtitle:a,columns:l,data:n,searchConfig:s,pagination:r,rowActions:i=[],bulkActions:o=[],createButton:c,toolbarActions:d=[],sort:m,searchValues:f,onSortChange:p,onPageChange:x,onPerPageChange:y,onSearchChange:j,onRefresh:w,selectable:b=!1,selectedIds:v,onSelectionChange:h,rowConfig:g,emptyState:N,loading:T=!1,error:z,exportConfig:C,stickyHeader:L=!1,density:H="normal",showRowNumbers:M=!1,className:B="",breadcrumbs:_,headerActions:Y=[],flashMessage:G,onLogout:A})=>{const[R,E]=ea(),U=D=>{const Be=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",oa={dashboard:`${Be}/dashboard`,"data-list":`${Be}/data/list`,statistics:`${Be}/statistics`,notifications:`${Be}/notifications`,settings:`${Be}/settings`}[D]||`${Be}/${D}`;typeof window<"u"&&(window.location.href=oa)},V=()=>{if(A){A();return}U("login")},[J,P]=u.useState((s==null?void 0:s.defaultCollapsed)===!1),Z=Pj({data:n,defaultSortColumn:m==null?void 0:m.column,defaultSortDirection:(m==null?void 0:m.direction)||"asc",selectable:b,initialSelectedIds:v||[]}),F=Zj({initialValues:f||{},onSearch:j,serverSide:!!j}),I=v!==void 0?v:Z.selectedIds,$=h?()=>{const D=I.length===n.length?[]:n.map(K=>K[(g==null?void 0:g.idKey)||"id"]);h(D,n.filter(K=>D.includes(K[(g==null?void 0:g.idKey)||"id"])))}:Z.handleSelectAll,le=D=>{if(h){const K=I.includes(D)?I.filter(ge=>ge!==D):[...I,D];h(K,n.filter(ge=>K.includes(ge[(g==null?void 0:g.idKey)||"id"])))}else Z.handleSelectRow(D)},ve=I.length===n.length&&n.length>0;I.length>0&&I.length<n.length;const xe=u.useMemo(()=>n.filter(D=>I.includes(D[(g==null?void 0:g.idKey)||"id"])),[n,I,g==null?void 0:g.idKey]),sa=u.useMemo(()=>l.filter(D=>!D.hidden),[l]),ra=D=>{const K=l.find(ge=>ge.key===D);if(K!=null&&K.sortable)if(p){const ge=(m==null?void 0:m.column)===D&&(m==null?void 0:m.direction)==="asc"?"desc":"asc";p(D,ge)}else Z.handleSort(D)},ia=p?m==null?void 0:m.column:Z.sortColumn,S=p?m==null?void 0:m.direction:Z.sortDirection,W=p?n:Z.displayData,ce=()=>{F.handleSearch&&F.handleSearch()},ie=()=>{F.handleClear()},Wa=()=>{if(!s||!s.fields&&!s.groups)return null;const K=[...s.fields||[]].sort((Q,fe)=>{const fa=Q.order??999,Ne=fe.order??999;return fa-Ne});s.layout;const ge=s.columns||4,Be=s.gap||s.columnGap||"var(--spacing-4)",Ha=s.rowGap||Be,oa=s.columnGap||Be,de=K.some(Q=>Q.gridColumn||Q.gridRow||Q.gridColumnSpan),ne=de?{display:"grid",gridTemplateColumns:`repeat(${ge}, 1fr)`,gap:Ha===oa?Be:void 0,rowGap:Ha!==Be?Ha:void 0,columnGap:oa!==Be?oa:void 0,marginBottom:"var(--spacing-4)"}:{display:"flex",gap:Be,marginBottom:"var(--spacing-4)",flexWrap:"wrap"};return t.jsx("div",{style:ne,children:K.map(Q=>{var fa;const fe=()=>de?{gridColumn:Q.gridColumn?Q.gridColumnSpan?`${Q.gridColumn} / span ${Q.gridColumnSpan}`:Q.gridColumn:void 0,gridRow:Q.gridRow,order:Q.order}:{flex:{full:"1 1 100%",half:"1 1 calc((100% - var(--spacing-4)) / 2)",third:"1 1 calc((100% - var(--spacing-4) * 2) / 3)",quarter:"1 1 calc((100% - var(--spacing-4) * 3) / 4)",fifth:"1 1 calc((100% - var(--spacing-4) * 4) / 5)"}[Q.width||"quarter"]||"1 1 200px",order:Q.order};return Q.type==="text"?t.jsx("div",{style:fe(),children:t.jsx(We,{type:"text",label:Q.label,placeholder:Q.placeholder,value:F.searchValues[Q.name]||"",onChange:Ne=>F.setValue(Q.name,Ne.target.value),disabled:Q.disabled,borderColor:s.borderColor||"#d1d5db"})},Q.name):Q.type==="select"?t.jsxs("div",{style:fe(),children:[t.jsx("label",{style:{display:"block",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",marginBottom:"var(--spacing-2)"},children:Q.label}),t.jsxs("select",{value:F.searchValues[Q.name]||"",onChange:Ne=>F.setValue(Q.name,Ne.target.value),disabled:Q.disabled,style:{width:"100%",padding:"var(--spacing-3)",border:`1px solid ${s.borderColor||"#d1d5db"}`,borderRadius:0,fontSize:"var(--font-size-sm)"},children:[t.jsx("option",{value:"",children:Q.placeholder||"すべて"}),(fa=Q.options)==null?void 0:fa.map(Ne=>t.jsx("option",{value:Ne.value,children:Ne.label},Ne.value))]})]},Q.name):null})})};return!T&&n.length===0&&!F.hasActiveFilters?t.jsxs("div",{className:R==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:R,onViewModeChange:E}),t.jsx(Ve,{viewMode:R,currentPage:"data-list",onNavigate:U,unreadCount:0,notifications:[],children:t.jsxs("div",{className:`dynamic-data-list-page ${B}`,children:[t.jsxs("div",{className:"page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),a&&t.jsx("p",{className:"page-subtitle",children:a})]}),t.jsx("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:c&&t.jsxs("button",{className:`btn btn--${c.variant||"primary"}`,onClick:c.onClick,children:[c.icon&&t.jsx(k,{name:c.icon,style:{width:"16px",height:"16px"}}),c.label]})})]}),t.jsxs("div",{className:"dashboard-card",style:{textAlign:"center",padding:"var(--spacing-12)"},children:[(N==null?void 0:N.icon)&&t.jsx(k,{name:N.icon,style:{width:"64px",height:"64px",color:"var(--color-neutral-400)",marginBottom:"var(--spacing-4)"}}),t.jsx("h3",{style:{fontSize:"var(--font-size-xl)",marginBottom:"var(--spacing-2)"},children:(N==null?void 0:N.title)||"データがありません"}),(N==null?void 0:N.description)&&t.jsx("p",{style:{color:"var(--color-neutral-600)",marginBottom:"var(--spacing-4)"},children:N.description}),(N==null?void 0:N.action)&&t.jsx("button",{className:"btn btn--primary",onClick:N.action.onClick,children:N.action.label})]})]})})]}):t.jsxs("div",{className:R==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:R,onViewModeChange:E}),t.jsx(Ve,{viewMode:R,currentPage:"data-list",onNavigate:U,unreadCount:0,notifications:[],onLogout:V,children:t.jsxs("div",{className:`dynamic-data-list-page ${B}`,children:[t.jsxs("div",{className:"page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"page-title",children:e}),a&&t.jsx("p",{className:"page-subtitle",children:a})]}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-3)",alignItems:"center"},children:[Y.map((D,K)=>t.jsxs("button",{className:`btn btn--${D.variant||"secondary"}`,onClick:D.onClick,children:[D.icon&&t.jsx(k,{name:D.icon,style:{width:"16px",height:"16px"}}),D.label]},K)),c&&t.jsxs("button",{className:`btn btn--${c.variant||"primary"}`,onClick:c.onClick,children:[c.icon&&t.jsx(k,{name:c.icon,style:{width:"16px",height:"16px"}}),c.label]})]})]}),G&&t.jsx("div",{style:{marginBottom:"var(--spacing-6)"},children:G}),s&&(s.fields||s.groups)&&t.jsxs("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:[t.jsxs("div",{onClick:()=>P(!J),style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"var(--spacing-3)",margin:"calc(var(--spacing-4) * -1)",marginBottom:J?"var(--spacing-4)":"calc(var(--spacing-4) * -1)",borderBottom:J?"1px solid var(--color-neutral-200)":"none"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"search",style:{width:"18px",height:"18px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-base)",fontWeight:"var(--font-weight-semibold)"},children:s.title||"検索"}),F.hasActiveFilters&&t.jsxs("span",{className:"status-badge status-badge--info",style:{marginLeft:"var(--spacing-2)"},children:[Object.keys(F.searchValues).filter(D=>F.searchValues[D]).length,"件フィルター中"]})]}),t.jsx(k,{name:J?"chevron-up":"chevron-down",style:{width:"20px",height:"20px"}})]}),J&&t.jsxs("div",{style:{paddingTop:"var(--spacing-4)"},children:[Wa(),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--spacing-3)"},children:[s.showClearButton!==!1&&t.jsxs("button",{className:"btn btn--secondary",onClick:ie,children:[t.jsx(k,{name:"close",style:{width:"16px",height:"16px"}}),s.clearButtonText||"クリア"]}),s.showSearchButton!==!1&&t.jsxs("button",{className:"btn btn--primary",onClick:ce,children:[t.jsx(k,{name:"search",style:{width:"16px",height:"16px"}}),s.searchButtonText||"検索"]})]})]})]}),z&&t.jsx("div",{className:"dashboard-card",style:{marginBottom:"var(--spacing-6)"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-3)",color:"var(--color-error-600)"},children:[t.jsx(k,{name:"error",style:{width:"20px",height:"20px"}}),t.jsx("span",{children:z.message}),z.retry&&t.jsx("button",{className:"btn btn--secondary btn--sm",onClick:z.retry,children:"再試行"})]})}),t.jsxs("div",{className:"dashboard-card",children:[t.jsxs("div",{style:{marginBottom:"var(--spacing-4)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)"},children:I.length>0&&`${I.length}件選択中`}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[d.map((D,K)=>t.jsxs("button",{className:`btn btn--${D.variant||"text"} btn--sm`,onClick:D.onClick,disabled:D.disabled,children:[D.icon&&t.jsx(k,{name:D.icon,style:{width:"16px",height:"16px"}}),D.label]},K)),o.map(D=>{const K=!D.minSelections||I.length>=D.minSelections,ge=!D.maxSelections||I.length<=D.maxSelections,Be=D.disabled||I.length===0||!K||!ge;return t.jsxs("button",{className:`btn btn--${D.variant||"text"} btn--sm`,disabled:Be,onClick:()=>D.onClick(I,xe),children:[D.icon&&t.jsx(k,{name:D.icon,style:{width:"16px",height:"16px"}}),D.label]},D.id)})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:`data-table data-table--${H}`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[b&&t.jsx("th",{style:{width:"50px",textAlign:"center"},children:t.jsx(Ot,{checked:ve,onChange:$,"aria-label":"すべて選択"})}),M&&t.jsx("th",{style:{width:"60px",textAlign:"center"},children:"No."}),sa.map(D=>{const K=D.sortable!==!1&&D.sortable!==void 0,ge=ia===D.key,Be=D.align||"left";return t.jsx("th",{style:{textAlign:Be,width:D.width,minWidth:D.minWidth,maxWidth:D.maxWidth,cursor:K?"pointer":"default",userSelect:"none"},onClick:()=>K&&ra(D.key),className:D.headerClassName,title:D.tooltip,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",justifyContent:Be},children:[t.jsx("span",{children:D.label}),K&&t.jsx(k,{name:ge&&S==="desc"?"arrow-down":"arrow-up",style:{width:"14px",height:"14px",opacity:ge?1:.3}})]})},D.key)}),i.length>0&&t.jsx("th",{style:{width:"120px",textAlign:"center"},children:"操作"})]})}),t.jsx("tbody",{children:T?t.jsx("tr",{children:t.jsxs("td",{colSpan:sa.length+(b?1:0)+(M?1:0)+(i.length>0?1:0),style:{textAlign:"center",padding:"var(--spacing-8)"},children:[t.jsx(k,{name:"refresh",style:{width:"24px",height:"24px",animation:"spin 1s linear infinite"}}),t.jsx("p",{style:{marginTop:"var(--spacing-2)"},children:"読み込み中..."})]})}):W.length===0?t.jsx("tr",{children:t.jsxs("td",{colSpan:sa.length+(b?1:0)+(M?1:0)+(i.length>0?1:0),style:{textAlign:"center",padding:"var(--spacing-8)"},children:[t.jsx(k,{name:"search",style:{width:"48px",height:"48px",color:"var(--color-neutral-400)"}}),t.jsx("p",{style:{marginTop:"var(--spacing-2)",color:"var(--color-neutral-600)"},children:"検索結果がありません"})]})}):W.map((D,K)=>{const ge=D[(g==null?void 0:g.idKey)||"id"],Be=I.includes(ge),Ha=typeof(g==null?void 0:g.className)=="function"?g.className(D,K):(g==null?void 0:g.className)||"",oa=typeof(g==null?void 0:g.disabled)=="function"?g.disabled(D):(g==null?void 0:g.disabled)||!1;return t.jsxs("tr",{className:Ha,onClick:()=>{var de;return(de=g==null?void 0:g.onClick)==null?void 0:de.call(g,D,K)},style:{cursor:g!=null&&g.clickable||g!=null&&g.onClick?"pointer":"default"},children:[b&&t.jsx("td",{children:t.jsx(Ot,{checked:Be,onChange:()=>le(ge),disabled:oa,"aria-label":`行${K+1}を選択`})}),M&&t.jsx("td",{style:{textAlign:"center",fontWeight:"var(--font-weight-medium)"},children:K+1}),sa.map(de=>{const ne=D[de.key],Q=de.align||"left",fe=typeof de.cellClassName=="function"?de.cellClassName(ne,D):de.cellClassName||"";return t.jsx("td",{style:{textAlign:Q},className:fe,children:Kj(ne,de,D,K)},de.key)}),i.length>0&&t.jsx("td",{children:t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"center"},children:i.map(de=>{const ne=typeof de.visible=="function"?de.visible(D):de.visible!==!1,Q=typeof de.disabled=="function"?de.disabled(D):de.disabled||!1;return ne?t.jsxs("button",{className:`btn btn--${de.variant||"text"} btn--sm`,title:de.tooltip||de.label,disabled:Q||de.loading,onClick:fe=>{fe.stopPropagation(),de.confirm?window.confirm(`${de.confirm.title}

${de.confirm.message}`)&&de.onClick(D,K):de.onClick(D,K)},children:[de.icon&&t.jsx(k,{name:de.icon,style:{width:"16px",height:"16px"}}),de.label&&t.jsx("span",{children:de.label})]},de.id):null})})})]},ge)})})]})}),r&&t.jsx("div",{style:{marginTop:"var(--spacing-4)"},children:t.jsx(If,{pagination:{current_page:r.currentPage,last_page:r.lastPage,total:r.total,per_page:r.perPage,from:r.from,to:r.to,prev_page_url:r.currentPage>1?"#":null,next_page_url:r.currentPage<r.lastPage?"#":null},onPageChange:D=>x==null?void 0:x(D),onPerPageChange:D=>y==null?void 0:y(D),config:{perPageOptions:r.perPageOptions||[10,20,50,100],showInfo:r.showPageInfo!==!1}})})]})]})})]})},Jj=({type:e,message:a,icon:l,onClose:n})=>{const s=l||{success:"check",info:"info",warning:"warning",danger:"error"}[e],r=["flash-message",`flash-message--${e}`].join(" ");return t.jsxs("div",{className:r,children:[t.jsx(k,{name:s,className:"flash-message__icon"}),t.jsx("div",{className:"flash-message__message",children:a}),n&&t.jsx("button",{onClick:n,className:"flash-message__close","aria-label":"閉じる",children:t.jsx(k,{name:"close"})})]})},Ij=ee.memo(Jj),eh=[{id:1,firstName:"太郎",lastName:"田中",email:"tanaka.taro@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"tokyo",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"fulltime",occupation:"ソフトウェアエンジニア",companyName:"株式会社テックコーポレーション",annualIncome:"6000000",skills:["programming","design"],workLocation:["tokyo","remote"],desiredSalary:7e6,availableStartDate:"2025-02-01",preferredContactTime:"14:00"},{id:2,firstName:"花子",lastName:"佐藤",email:"sato.hanako@example.com",phone:"08098765432",alternatePhone:"0367891234",postalCode:"1070062",prefecture:"tokyo",city:"港区",address1:"南青山2-5-20",address2:"マンション青山 301",employmentStatus:"fulltime",occupation:"プロジェクトマネージャー",companyName:"株式会社グローバルソリューションズ",annualIncome:"8500000",skills:["management","marketing"],workLocation:["tokyo","osaka"],desiredSalary:9e6,availableStartDate:"2025-03-01",preferredContactTime:"10:00"},{id:3,firstName:"一郎",lastName:"鈴木",email:"suzuki.ichiro@example.com",phone:"07011112222",alternatePhone:"",postalCode:"1600023",prefecture:"tokyo",city:"新宿区",address1:"西新宿3-1-5",address2:"",employmentStatus:"contract",occupation:"システムエンジニア",companyName:"株式会社システム開発",annualIncome:"5500000",skills:["programming"],workLocation:["tokyo"],desiredSalary:6e6,availableStartDate:"2025-01-15",preferredContactTime:"15:00"},{id:4,firstName:"美咲",lastName:"高橋",email:"takahashi.misaki@example.com",phone:"09033334444",alternatePhone:"0445556666",postalCode:"2200012",prefecture:"hokkaido",city:"札幌市中央区",address1:"北1条西5丁目",address2:"オフィスビル 8F",employmentStatus:"fulltime",occupation:"Webデザイナー",companyName:"株式会社クリエイティブワークス",annualIncome:"4800000",skills:["design","marketing"],workLocation:["tokyo","remote"],desiredSalary:55e5,availableStartDate:"2025-04-01",preferredContactTime:"13:00"},{id:5,firstName:"健太",lastName:"伊藤",email:"ito.kenta@example.com",phone:"08055556666",alternatePhone:"0677778888",postalCode:"5300001",prefecture:"osaka",city:"大阪市北区",address1:"梅田1-1-3",address2:"大阪ビル 5F",employmentStatus:"fulltime",occupation:"営業担当",companyName:"株式会社セールスプロ",annualIncome:"5200000",skills:["sales","marketing"],workLocation:["osaka","nagoya"],desiredSalary:6e6,availableStartDate:"2025-02-15",preferredContactTime:"11:00"},{id:6,firstName:"真理子",lastName:"渡辺",email:"watanabe.mariko@example.com",phone:"07077778888",alternatePhone:"0399990000",postalCode:"1640001",prefecture:"tokyo",city:"中野区",address1:"中野4-10-1",address2:"中野タワー 15F",employmentStatus:"fulltime",occupation:"人事マネージャー",companyName:"株式会社ヒューマンリソース",annualIncome:"7200000",skills:["management"],workLocation:["tokyo"],desiredSalary:8e6,availableStartDate:"2025-05-01",preferredContactTime:"09:00"},{id:7,firstName:"拓也",lastName:"山本",email:"yamamoto.takuya@example.com",phone:"09088889999",alternatePhone:"",postalCode:"2310023",prefecture:"hokkaido",city:"横浜市中区",address1:"山下町1-2",address2:"",employmentStatus:"freelance",occupation:"フロントエンドエンジニア",companyName:"",annualIncome:"7500000",skills:["programming","design"],workLocation:["remote"],desiredSalary:8e6,availableStartDate:"2025-01-01",preferredContactTime:"16:00"},{id:8,firstName:"愛",lastName:"中村",email:"nakamura.ai@example.com",phone:"08011112222",alternatePhone:"0533334444",postalCode:"4600008",prefecture:"osaka",city:"名古屋市中区",address1:"栄3-4-5",address2:"栄ビル 7F",employmentStatus:"fulltime",occupation:"経理担当",companyName:"株式会社ファイナンス",annualIncome:"4500000",skills:[],workLocation:["nagoya"],desiredSalary:5e6,availableStartDate:"2025-03-15",preferredContactTime:"14:00"},{id:9,firstName:"大輔",lastName:"小林",email:"kobayashi.daisuke@example.com",phone:"07033334444",alternatePhone:"0755556666",postalCode:"6000000",prefecture:"kyoto",city:"京都市下京区",address1:"烏丸通四条下ル",address2:"京都センタービル 3F",employmentStatus:"parttime",occupation:"カスタマーサポート",companyName:"株式会社サポートセンター",annualIncome:"3000000",skills:["sales"],workLocation:["osaka","remote"],desiredSalary:35e5,availableStartDate:"2025-02-01",preferredContactTime:"10:00"},{id:10,firstName:"由美",lastName:"加藤",email:"kato.yumi@example.com",phone:"09055556666",alternatePhone:"",postalCode:"8100001",prefecture:"osaka",city:"福岡市中央区",address1:"天神2-3-10",address2:"",employmentStatus:"student",occupation:"インターン",companyName:"株式会社デジタルイノベーション",annualIncome:"1200000",skills:["programming"],workLocation:["fukuoka","remote"],desiredSalary:3e6,availableStartDate:"2025-04-01",preferredContactTime:"13:00"},{id:11,firstName:"翔太",lastName:"吉田",email:"yoshida.shota@example.com",phone:"08077778888",alternatePhone:"0344445555",postalCode:"1010051",prefecture:"tokyo",city:"千代田区",address1:"神田神保町1-1",address2:"神保町ビル 10F",employmentStatus:"fulltime",occupation:"データサイエンティスト",companyName:"株式会社データアナリティクス",annualIncome:"9000000",skills:["programming"],workLocation:["tokyo","remote"],desiredSalary:1e7,availableStartDate:"2025-06-01",preferredContactTime:"11:00"},{id:12,firstName:"結衣",lastName:"山田",email:"yamada.yui@example.com",phone:"07099990000",alternatePhone:"0611112222",postalCode:"5600001",prefecture:"osaka",city:"大阪市西区",address1:"江戸堀1-2-3",address2:"西区マンション 205",employmentStatus:"fulltime",occupation:"マーケティング担当",companyName:"株式会社マーケティングプロ",annualIncome:"5800000",skills:["marketing","design"],workLocation:["osaka"],desiredSalary:65e5,availableStartDate:"2025-03-01",preferredContactTime:"15:00"},{id:13,firstName:"陽介",lastName:"佐々木",email:"sasaki.yosuke@example.com",phone:"09011112222",alternatePhone:"",postalCode:"9800011",prefecture:"hokkaido",city:"仙台市青葉区",address1:"上杉1-1-1",address2:"",employmentStatus:"contract",occupation:"ネットワークエンジニア",companyName:"株式会社ネットワークソリューションズ",annualIncome:"6200000",skills:["programming"],workLocation:["tokyo","remote"],desiredSalary:7e6,availableStartDate:"2025-02-15",preferredContactTime:"14:00"},{id:14,firstName:"麻衣",lastName:"松本",email:"matsumoto.mai@example.com",phone:"08033334444",alternatePhone:"0922223333",postalCode:"8120011",prefecture:"osaka",city:"福岡市博多区",address1:"博多駅前2-1-1",address2:"博多ビル 6F",employmentStatus:"unemployed",occupation:"",companyName:"",annualIncome:"0",skills:["design"],workLocation:["fukuoka"],desiredSalary:4e6,availableStartDate:"2025-01-15",preferredContactTime:"10:00"},{id:15,firstName:"隆",lastName:"井上",email:"inoue.takashi@example.com",phone:"07055556666",alternatePhone:"0266667777",postalCode:"3900814",prefecture:"tokyo",city:"松本市",address1:"本庄1-2-1",address2:"松本オフィス 2F",employmentStatus:"fulltime",occupation:"ITコンサルタント",companyName:"株式会社ビジネスコンサルティング",annualIncome:"10500000",skills:["management","programming"],workLocation:["tokyo","nagoya","remote"],desiredSalary:12e6,availableStartDate:"2025-07-01",preferredContactTime:"09:00"}],e4=()=>{const e=Dt(),a=u.useRef(null),[l,n]=u.useState(null),[s,r]=ea(),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState(!1),[y,j]=u.useState({}),[w,b]=u.useState(eh),[v,h]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]);u.useEffect(()=>{const A=sessionStorage.getItem("flashMessage");if(A)try{const R=JSON.parse(A);n(R),sessionStorage.removeItem("flashMessage"),setTimeout(()=>{n(null)},5e3)}catch(R){console.error("Failed to parse flash message:",R)}},[]);const g=A=>{const E={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[A]||`/pages/${A}`;e(E)},N=A=>{h(R=>R.map(E=>E.id===A?{...E,read:!0}:E))},T=()=>{h(A=>A.map(R=>({...R,read:!0})))},z=A=>{j(A);const R=eh.filter(E=>{if(A.name){const U=A.name.toLowerCase(),V=`${E.lastName} ${E.firstName}`.toLowerCase(),J=`${E.firstName} ${E.lastName}`.toLowerCase();if(!V.includes(U)&&!J.includes(U))return!1}if(A.email){const U=A.email.toLowerCase();if(!E.email.toLowerCase().includes(U))return!1}if(A.prefecture&&E.prefecture!==A.prefecture||A.employmentStatus&&E.employmentStatus!==A.employmentStatus)return!1;if(A.occupation){const U=A.occupation.toLowerCase();if(!E.occupation||!E.occupation.toLowerCase().includes(U))return!1}return!0});b(R)},C=[{key:"id",label:"ID",dataType:"number",sortable:!0,width:"60px",align:"center"},{key:"fullName",label:"氏名",dataType:"text",sortable:!0,width:"120px",render:(A,R)=>`${R.lastName} ${R.firstName}`},{key:"email",label:"メールアドレス",dataType:"email",sortable:!0,width:"200px"},{key:"phone",label:"電話番号",dataType:"text",sortable:!0,width:"120px"},{key:"postalCode",label:"郵便番号",dataType:"text",sortable:!0,width:"100px"},{key:"prefecture",label:"都道府県",dataType:"text",sortable:!0,width:"100px",render:A=>({tokyo:"東京都",osaka:"大阪府",kyoto:"京都府",hokkaido:"北海道"})[A]||A},{key:"city",label:"市区町村",dataType:"text",sortable:!0,width:"150px"},{key:"employmentStatus",label:"雇用形態",dataType:"badge",sortable:!0,width:"120px",badgeConfig:{fulltime:{label:"正社員",variant:"success"},parttime:{label:"パート・アルバイト",variant:"info"},contract:{label:"契約社員",variant:"warning"},freelance:{label:"フリーランス",variant:"primary"},student:{label:"学生",variant:"default"},unemployed:{label:"無職",variant:"danger"}}},{key:"occupation",label:"職種",dataType:"text",sortable:!0,width:"150px"},{key:"companyName",label:"勤務先名",dataType:"text",sortable:!0,width:"200px"},{key:"annualIncome",label:"年収",dataType:"currency",sortable:!0,width:"120px",align:"right",render:A=>{const R=Number(A);return!A||isNaN(R)||R===0?"-":`¥${R.toLocaleString()}`}},{key:"skills",label:"スキル",dataType:"text",sortable:!1,width:"200px",render:A=>{if(!A||!Array.isArray(A)||A.length===0)return"-";const R={programming:"プログラミング",design:"デザイン",marketing:"マーケティング",management:"マネジメント",sales:"営業"};return A.map(E=>R[E]||E).join("、")}},{key:"workLocation",label:"希望勤務地",dataType:"text",sortable:!1,width:"150px",render:A=>{if(!A||!Array.isArray(A)||A.length===0)return"-";const R={tokyo:"東京",osaka:"大阪",nagoya:"名古屋",fukuoka:"福岡",remote:"リモート"};return A.map(E=>R[E]||E).join("、")}},{key:"desiredSalary",label:"希望年収",dataType:"currency",sortable:!0,width:"120px",align:"right",render:A=>{const R=Number(A);return!A||isNaN(R)||R===0?"-":`¥${R.toLocaleString()}`}}],L={title:"検索・フィルター",collapsible:!0,defaultCollapsed:!0,showClearButton:!0,showSearchButton:!0,borderColor:"#d1d5db",fields:[{name:"name",label:"氏名",type:"text",placeholder:"氏名で検索...",width:"half"},{name:"email",label:"メールアドレス",type:"text",placeholder:"メールアドレスで検索...",width:"half"},{name:"prefecture",label:"都道府県",type:"select",placeholder:"すべて",options:[{label:"東京都",value:"tokyo"},{label:"大阪府",value:"osaka"},{label:"京都府",value:"kyoto"},{label:"北海道",value:"hokkaido"}],width:"half"},{name:"employmentStatus",label:"雇用形態",type:"select",placeholder:"すべて",options:[{label:"正社員",value:"fulltime"},{label:"パート・アルバイト",value:"parttime"},{label:"契約社員",value:"contract"},{label:"フリーランス",value:"freelance"},{label:"学生",value:"student"},{label:"無職",value:"unemployed"}],width:"half"},{name:"occupation",label:"職種",type:"text",placeholder:"職種で検索...",width:"half"}]},H=[{id:"view",label:"",icon:"eye",onClick:A=>{console.log("View user:",A),e("/pages/data/detail")},tooltip:"詳細を表示"},{id:"edit",label:"",icon:"edit",onClick:A=>{e("/pages/data/edit")},tooltip:"編集"}],M=[{id:"delete",label:"削除",icon:"delete",variant:"danger",onClick:A=>{console.log("削除:",A)},minSelections:1}],B=[{label:"エクスポート",icon:"download",onClick:()=>{console.log("エクスポート"),alert("ユーザーデータをエクスポートします")}}],_={label:"新規登録",icon:"plus",onClick:()=>{console.log("Navigate to /pages/data/add"),e("/pages/data/add")}},Y={title:y&&Object.keys(y).length>0?"お探しのデータは見つかりませんでした":"データがありません",description:y&&Object.keys(y).length>0?"検索条件を変更してお試しください":"新しいデータを作成してください",icon:y&&Object.keys(y).length>0?"search":"user",action:y&&Object.keys(y).length>0?void 0:{label:"新規作成",onClick:()=>{e("/pages/data/add")}}},G={title:"データ一覧",subtitle:void 0,columns:C,data:w,searchConfig:L,searchValues:y,onSearchChange:z,rowActions:H,bulkActions:M,toolbarActions:B,createButton:_,emptyState:Y,selectable:!0,showRowNumbers:!1,density:"normal",headerActions:[]};return t.jsxs("div",{className:s==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:s,onViewModeChange:r}),t.jsx(Ve,{viewMode:s,currentPage:"data-list",onNavigate:g,unreadCount:v.filter(A=>!A.read).length,showNotificationDropdown:i,setShowNotificationDropdown:o,showUserMenu:c,setShowUserMenu:d,isHamburgerOpen:m,setIsHamburgerOpen:f,sidebarCollapsed:p,setSidebarCollapsed:x,notificationRef:a,notifications:v,onMarkNotificationAsRead:N,onMarkAllNotificationsAsRead:T,children:t.jsx(eg,{...G,flashMessage:l?t.jsx(Ij,{type:l.type,message:l.message,onClose:()=>n(null)}):void 0})})]})},a4=({children:e,variant:a="primary",size:l="md",disabled:n=!1,onClick:s,type:r="button",icon:i=null,iconPosition:o="left",fullWidth:c=!1,loading:d=!1,className:m="",...f})=>{const p=["btn",`btn--${a}`,`btn--${l}`,c&&"btn--full-width",d&&"btn--loading",i&&!e&&"btn--icon-only",m].filter(Boolean).join(" "),x=y=>{!n&&!d&&s&&s(y)};return t.jsxs("button",{type:r,className:p,disabled:n||d,onClick:x,...f,children:[d&&t.jsx("span",{className:"btn__spinner",children:t.jsx("svg",{className:"spinner",width:"16",height:"16",viewBox:"0 0 24 24",children:t.jsx("circle",{className:"spinner-circle",cx:"12",cy:"12",r:"10",fill:"none",strokeWidth:"3"})})}),i&&o==="left"&&!d&&t.jsx("span",{className:"btn__icon btn__icon--left",children:i}),e&&t.jsx("span",{className:"btn__text",children:e}),i&&o==="right"&&!d&&t.jsx("span",{className:"btn__icon btn__icon--right",children:i})]})},Vt=ee.memo(a4),t4=()=>{const e=Dt(),a=u.useRef(null),[l,n]=ea(),[s,r]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState(!1),[y,j]=u.useState(null),[w,b]=u.useState({username:"管理者",email:"admin@example.com",role:"システム管理者",displayName:"田中 太郎",phone:"090-1234-5678",department:"開発部"}),[v,h]=u.useState({...w}),g=_=>{const G={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[_]||`/pages/${_}`;e(G)},[N,T]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),z=_=>{T(Y=>Y.map(G=>G.id===_?{...G,read:!0}:G))},C=()=>{T(_=>_.map(Y=>({...Y,read:!0})))},L=()=>{h({...w}),x(!0)},H=()=>{b({...v}),x(!1),j("プロフィールを保存しました"),setTimeout(()=>j(null),3e3)},M=()=>{h({...w}),x(!1)},B=(_,Y)=>{h(G=>({...G,[_]:Y}))};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:l,onViewModeChange:n}),t.jsx(Ve,{viewMode:l,currentPage:"settings",onNavigate:g,unreadCount:N.filter(_=>!_.read).length,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:N,onMarkNotificationAsRead:z,onMarkAllNotificationsAsRead:C,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"1000px",margin:"0 auto"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-6)",color:"var(--color-neutral-900)"},children:"設定"}),y&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:"var(--radius-md)",color:"var(--color-success-700)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"check-circle",style:{width:"20px",height:"20px"}}),y]}),t.jsxs("div",{style:{marginBottom:"var(--spacing-8)",padding:"var(--spacing-6)",backgroundColor:"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-neutral-200)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:"プロフィール設定"}),!p&&t.jsxs("button",{className:"btn btn--primary",onClick:L,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"edit",style:{width:"16px",height:"16px"}}),"編集"]})]}),p?t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:l==="sp"?"var(--spacing-2)":"var(--spacing-1_5)"},children:[t.jsx(We,{label:"表示名",value:v.displayName,onChange:_=>B("displayName",_.target.value),placeholder:"表示名を入力"}),t.jsx(We,{label:"ユーザー名",value:v.username,onChange:_=>B("username",_.target.value),placeholder:"ユーザー名を入力"}),t.jsx(We,{label:"メールアドレス",type:"email",value:v.email,onChange:_=>B("email",_.target.value),placeholder:"メールアドレスを入力"}),t.jsx(We,{label:"電話番号",value:v.phone,onChange:_=>B("phone",_.target.value),placeholder:"電話番号を入力"}),t.jsx(We,{label:"部署",value:v.department,onChange:_=>B("department",_.target.value),placeholder:"部署を入力"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end",marginTop:"var(--spacing-2)"},children:[t.jsx(Vt,{variant:"text",onClick:M,children:"キャンセル"}),t.jsx(Vt,{variant:"primary",onClick:H,children:"保存"})]})]}):t.jsxs("div",{style:{color:"var(--color-neutral-600)"},children:[t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"表示名:"})," ",w.displayName]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"ユーザー名:"})," ",w.username]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"メールアドレス:"})," ",w.email]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"電話番号:"})," ",w.phone]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"部署:"})," ",w.department]}),t.jsxs("p",{children:[t.jsx("strong",{children:"役割:"})," ",w.role]})]})]})]})})]})},l4=()=>{const e=Dt(),a=u.useRef(null),[l,n]=ea(),[s,r]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),p=h=>{const N={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[h]||`/pages/${h}`;e(N)},[x,y]=u.useState([{id:1,type:"info",title:"システムアップデート",message:"新しい機能が追加されました",time:"2時間前",read:!1},{id:2,type:"success",title:"データ保存完了",message:"データが正常に保存されました",time:"5時間前",read:!1},{id:3,type:"warning",title:"メンテナンス予定",message:"明日の深夜にメンテナンスを実施します",time:"1日前",read:!0},{id:4,type:"error",title:"エラー発生",message:"一部の機能でエラーが発生しています",time:"2日前",read:!0}]),j=h=>{y(g=>g.map(N=>N.id===h?{...N,read:!0}:N))},w=()=>{y(h=>h.map(g=>({...g,read:!0})))},b=h=>{switch(h){case"success":return"check-circle";case"warning":return"warning";case"error":return"exclamation";default:return"info"}},v=h=>{switch(h){case"success":return"var(--color-success-600)";case"warning":return"var(--color-warning-600)";case"error":return"var(--color-error-600)";default:return"var(--color-primary-600)"}};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:l,onViewModeChange:n}),t.jsx(Ve,{viewMode:l,currentPage:"notifications",onNavigate:p,unreadCount:x.filter(h=>!h.read).length,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:x,onMarkNotificationAsRead:j,onMarkAllNotificationsAsRead:w,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"900px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-6)"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"通知一覧"}),x.some(h=>!h.read)&&t.jsxs("button",{onClick:w,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-4)",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",border:"none",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:h=>{h.currentTarget.style.backgroundColor="var(--color-primary-600)"},onMouseLeave:h=>{h.currentTarget.style.backgroundColor="var(--color-primary-500)"},children:[t.jsx(k,{name:"check",style:{width:"16px",height:"16px"}}),"全て既読にする"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:x.map(h=>t.jsxs("div",{style:{padding:"var(--spacing-5)",backgroundColor:h.read?"var(--color-neutral-50)":"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-neutral-200)",display:"flex",gap:"var(--spacing-4)",alignItems:"start",boxShadow:h.read?"none":"var(--shadow-sm)",position:"relative"},children:[t.jsx(k,{name:b(h.type),style:{width:"24px",height:"24px",color:v(h.type),flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"var(--spacing-2)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:h.title}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)",whiteSpace:"nowrap",marginLeft:"var(--spacing-3)"},children:h.time})]}),t.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)",marginBottom:h.read?0:"var(--spacing-3)"},children:h.message}),!h.read&&t.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:t.jsxs("button",{onClick:()=>j(h.id),style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-1) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",border:"1px solid var(--color-neutral-300)",borderRadius:"var(--radius-sm)",fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:g=>{g.currentTarget.style.backgroundColor="var(--color-neutral-200)",g.currentTarget.style.borderColor="var(--color-neutral-400)"},onMouseLeave:g=>{g.currentTarget.style.backgroundColor="var(--color-neutral-100)",g.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(k,{name:"check",style:{width:"12px",height:"12px"}}),"既読にする"]})})]})]},h.id))})]})})]})},n4=()=>{const e=Dt(),a=u.useRef(null),[l,n]=ea(),[s,r]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),p=h=>{const N={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[h]||`/pages/${h}`;e(N)},[x,y]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),j=h=>{y(g=>g.map(N=>N.id===h?{...N,read:!0}:N))},w=()=>{y(h=>h.map(g=>({...g,read:!0})))},b=[{label:"総ユーザー数",value:"1,234",icon:"user",color:"var(--color-primary-500)"},{label:"総データ数",value:"5,678",icon:"document",color:"var(--color-success-500)"},{label:"今月の新規",value:"234",icon:"chart-bar",color:"var(--color-warning-500)"},{label:"アクティブ率",value:"87%",icon:"chart-pie",color:"var(--color-info-500)"}],v=[{user:"田中太郎",action:"データを作成しました",time:"5分前"},{user:"佐藤花子",action:"プロフィールを更新しました",time:"15分前"},{user:"鈴木一郎",action:"データを編集しました",time:"1時間前"},{user:"高橋美咲",action:"データを削除しました",time:"2時間前"}];return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:l,onViewModeChange:n}),t.jsx(Ve,{viewMode:l,currentPage:"dashboard",onNavigate:p,unreadCount:x.filter(h=>!h.read).length,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:x,onMarkNotificationAsRead:j,onMarkAllNotificationsAsRead:w,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--spacing-4)"},children:b.map((h,g)=>t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},children:[t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:`${h.color}20`,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(k,{name:h.icon,size:"md",style:{color:h.color}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-1)"},children:h.label}),t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:h.value})]})]},g))}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"最近のアクティビティ"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:v.map((h,g)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",background:"var(--color-neutral-50)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},children:h.user.charAt(0)}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)"},children:h.user}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:h.action})]})]}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:h.time})]},g))})]}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"クイックアクション"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-3)"},children:[t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:h=>{h.currentTarget.style.background="var(--color-neutral-50)",h.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:h=>{h.currentTarget.style.background="var(--color-neutral-white)",h.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(k,{name:"plus-circle",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"新規データ作成"})]}),t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:h=>{h.currentTarget.style.background="var(--color-neutral-50)",h.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:h=>{h.currentTarget.style.background="var(--color-neutral-white)",h.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(k,{name:"table",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"データ一覧表示"})]}),t.jsxs("button",{style:{padding:"var(--spacing-3)",borderRadius:"var(--radius-md)",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:h=>{h.currentTarget.style.background="var(--color-neutral-50)",h.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:h=>{h.currentTarget.style.background="var(--color-neutral-white)",h.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(k,{name:"chart-bar",size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:"統計を確認"})]})]})]})]})})]})};function s4({config:e,onSearchChange:a=null,onFilterChange:l=null,searchValue:n="",filterValues:s={}}){var o,c,d;const r=((o=e==null?void 0:e.search)==null?void 0:o.enabled)&&a,i=((c=e==null?void 0:e.filters)==null?void 0:c.length)>0&&l;return!r&&!i?null:t.jsx("div",{className:"bg-white rounded-lg shadow-sm p-4 mb-6",children:t.jsxs("div",{className:"flex flex-wrap gap-4 items-end",children:[r&&t.jsxs("div",{className:"flex-1 min-w-64",children:[t.jsx("label",{htmlFor:"search-input",className:"block text-sm font-medium text-gray-700 mb-1",children:"検索"}),t.jsx("input",{id:"search-input",type:"text",value:n,onChange:m=>a(m.target.value),placeholder:((d=e.search)==null?void 0:d.placeholder)||"検索...",className:"w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i&&e.filters.map((m,f)=>t.jsxs("div",{className:"min-w-32",children:[t.jsx("label",{htmlFor:`filter-${m.key}`,className:"block text-sm font-medium text-gray-700 mb-1",children:m.label}),t.jsx("select",{id:`filter-${m.key}`,value:s[m.key]||"",onChange:p=>l(m.key,p.target.value),className:"w-full border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white",style:{backgroundImage:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat",backgroundSize:"1.5em 1.5em"},children:m.options.map(p=>t.jsx("option",{value:p.value,children:p.label},p.value))})]},m.key))]})})}const r4=({data:e,viewMode:a="pc",height:l=300,metrics:n})=>{const s=a==="sp"?340:800,r={top:20,right:30,bottom:60,left:70},i=s-r.left-r.right,o=l-r.top-r.bottom,d=[{key:"users",label:"ユーザー数",color:"var(--color-primary-500)"},{key:"sales",label:"売上数",color:"var(--color-info-500)"},{key:"revenue",label:"収益",color:"var(--color-success-500)"}].filter(j=>n.includes(j.key));if(d.length===0)return t.jsx("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",textAlign:"center",color:"var(--color-neutral-500)"},children:"メトリクスを選択してください"});const m=e.flatMap(j=>d.map(w=>j[w.key])),f=Math.max(...m,1),p=i/e.length*.8,x=p/d.length,y=i/e.length*.2;return t.jsxs("div",{style:{background:"white",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-md)",padding:"var(--spacing-4)",overflow:"hidden"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",overflow:"auto",maxWidth:"100%"},children:t.jsx("svg",{width:s,height:l,style:{minWidth:a==="sp"?"340px":void 0},children:t.jsxs("g",{transform:`translate(${r.left}, ${r.top})`,children:[[0,1,2,3,4].map(j=>t.jsx("line",{x1:0,x2:i,y1:o*j/4,y2:o*j/4,stroke:"var(--color-neutral-200)",strokeWidth:1},j)),[0,1,2,3,4].map(j=>{const w=Math.round(f*(4-j)/4);return t.jsx("text",{x:-10,y:o*j/4+5,textAnchor:"end",fontSize:"12",fill:"var(--color-neutral-600)",children:w},j)}),e.map((j,w)=>{const b=w*(i/e.length)+y/2;return t.jsxs("g",{children:[d.map((v,h)=>{const g=j[v.key]/f*o,N=b+h*x;return t.jsx("rect",{x:N,y:o-g,width:x,height:g,fill:v.color,rx:2},v.key)}),t.jsx("text",{x:b+p/2,y:o+20,textAnchor:"middle",fontSize:"12",fill:"var(--color-neutral-600)",children:j.month})]},w)})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-4)",flexWrap:"wrap"},children:d.map(j=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"12px",backgroundColor:j.color,borderRadius:"2px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)",fontWeight:"var(--font-weight-medium)"},children:j.label})]},j.key))})]})},i4=()=>{const e=Dt(),a=u.useRef(null),[l,n]=ea(),[s,r]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),[p,x]=u.useState({period:"6months",metrics:["users","sales","revenue"],chartType:"bar"}),y=B=>{const Y={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[B]||`/pages/${B}`;e(Y)},[j,w]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),b=B=>{w(_=>_.map(Y=>Y.id===B?{...Y,read:!0}:Y))},v=()=>{w(B=>B.map(_=>({..._,read:!0})))},h=[{month:"1月",users:45,sales:120,revenue:180},{month:"2月",users:62,sales:150,revenue:210},{month:"3月",users:58,sales:140,revenue:200},{month:"4月",users:71,sales:180,revenue:260},{month:"5月",users:68,sales:170,revenue:240},{month:"6月",users:85,sales:220,revenue:320},{month:"7月",users:92,sales:240,revenue:350},{month:"8月",users:88,sales:230,revenue:330},{month:"9月",users:95,sales:250,revenue:370},{month:"10月",users:102,sales:270,revenue:400},{month:"11月",users:110,sales:290,revenue:430},{month:"12月",users:125,sales:320,revenue:480}],g=[{label:"カテゴリA",value:35,color:"var(--color-primary-500)"},{label:"カテゴリB",value:25,color:"var(--color-success-500)"},{label:"カテゴリC",value:20,color:"var(--color-warning-500)"},{label:"カテゴリD",value:20,color:"var(--color-info-500)"}],N={title:"データフィルター",collapsible:!0,defaultCollapsed:!1,showClearButton:!0,showSearchButton:!1,fields:[{name:"period",label:"表示期間",type:"select",placeholder:"期間を選択",options:[{label:"3ヶ月",value:"3months"},{label:"6ヶ月",value:"6months"},{label:"12ヶ月",value:"12months"}],width:"third"},{name:"metrics",label:"表示メトリクス",type:"multiselect",placeholder:"メトリクスを選択",options:[{label:"ユーザー数",value:"users"},{label:"売上数",value:"sales"},{label:"収益",value:"revenue"}],width:"third"},{name:"chartType",label:"グラフタイプ",type:"select",placeholder:"タイプを選択",options:[{label:"棒グラフ",value:"bar"},{label:"折れ線グラフ",value:"line"}],width:"third"}]},T=u.useMemo(()=>{const B=p.period||"6months";let _=6;return B==="3months"?_=3:B==="6months"?_=6:B==="12months"&&(_=12),h.slice(-_)},[p.period]),z=u.useMemo(()=>{const B=p.metrics;return!B||Array.isArray(B)&&B.length===0?["users","sales","revenue"]:Array.isArray(B)?B:[B]},[p.metrics]),C=u.useMemo(()=>{const B=T,_=B[B.length-1],Y=B.flatMap(J=>z.map(P=>J[P])),G=_?_.revenue:0,A=Y.length>0?Math.round(Y.reduce((J,P)=>J+P,0)/Y.length):0,R=Y.length>0?Math.max(...Y):0,E=B[0],U=B[B.length-1];let V=0;return E&&U&&E.revenue>0&&(V=Math.round((U.revenue-E.revenue)/E.revenue*100)),{total:G,average:A,maximum:R,growthRate:V}},[T,z]),L=g.reduce((B,_)=>B+_.value,0),H=B=>{x(B)},M=()=>{x({period:"6months",metrics:["users","sales","revenue"],chartType:"bar"})};return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:l,onViewModeChange:n}),t.jsx(Ve,{viewMode:l,currentPage:"statistics",onNavigate:y,unreadCount:j.filter(B=>!B.read).length,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:j,onMarkNotificationAsRead:b,onMarkAllNotificationsAsRead:v,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[t.jsx(s4,{config:N,values:p,onChange:H,onClear:M}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-4)"},children:[t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"今月の合計"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:C.total})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-success-500), var(--color-success-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"平均値"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:C.average})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"最高値"}),t.jsx("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:C.maximum})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, var(--color-info-500), var(--color-info-600))",borderRadius:"var(--radius-lg)",padding:"var(--spacing-4)",color:"var(--color-neutral-white)"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",marginBottom:"var(--spacing-2)",opacity:.9},children:"成長率"}),t.jsxs("div",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)"},children:[C.growthRate>0?"+":"",C.growthRate,"%"]})]})]}),t.jsxs("div",{style:{background:"var(--color-neutral-white)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:"月次推移"}),t.jsx(k,{name:"chart-bar",size:"md",style:{color:"var(--color-primary-500)"}})]}),t.jsx(r4,{data:T,viewMode:l,height:300,metrics:z})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:l==="sp"?"1fr":"repeat(auto-fit, minmax(400px, 1fr))",gap:"var(--spacing-4)"},children:t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:"var(--radius-lg)",padding:"var(--spacing-5)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:"カテゴリ別分布"}),t.jsx(k,{name:"chart-pie",size:"md",style:{color:"var(--color-primary-500)"}})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--spacing-4)"},children:[t.jsx("div",{style:{width:"200px",height:"200px",borderRadius:"50%",background:`conic-gradient(
                    ${g[0].color} 0% ${g[0].value}%,
                    ${g[1].color} ${g[0].value}% ${g[0].value+g[1].value}%,
                    ${g[2].color} ${g[0].value+g[1].value}% ${g[0].value+g[1].value+g[2].value}%,
                    ${g[3].color} ${g[0].value+g[1].value+g[2].value}% 100%
                  )`,position:"relative"},children:t.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"120px",height:"120px",borderRadius:"50%",background:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:L}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:"合計"})]})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-2)",width:"100%"},children:g.map((B,_)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-2)",borderRadius:"var(--radius-md)",background:"var(--color-neutral-50)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"var(--radius-sm)",background:B.color}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:B.label})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)"},children:[B.value,"%"]})})]},_))})]})]})})]})})]})},ah=({hideNavigation:e=!1,userName:a="ユーザー",resetUrl:l="https://example.com/reset-password?token=abc123def456",expirationHours:n=24,supportEmail:s="support@example.com",companyName:r="AppName"})=>{const[i,o]=ea();return t.jsxs("div",{className:i==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:e,viewMode:i,onViewModeChange:o}),t.jsx("div",{className:"email-preview-container",children:t.jsx("div",{className:"email-template",children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",style:{width:"100%",maxWidth:"600px",margin:"0 auto",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{padding:"20px",textAlign:"center",backgroundColor:"#15346D"},children:t.jsx("h1",{style:{margin:0,color:"#ffffff",fontSize:"24px",fontWeight:"600"},children:r})})}),t.jsx("tr",{children:t.jsxs("td",{style:{padding:"40px 30px",backgroundColor:"#ffffff"},children:[t.jsx("h2",{style:{margin:"0 0 20px 0",color:"#1f2937",fontSize:"20px",fontWeight:"600"},children:"パスワード再設定のご案内"}),t.jsxs("p",{style:{margin:"0 0 20px 0",color:"#4b5563",fontSize:"16px",lineHeight:"1.6"},children:[a," 様"]}),t.jsx("p",{style:{margin:"0 0 20px 0",color:"#4b5563",fontSize:"16px",lineHeight:"1.6"},children:"以下のボタンをクリックして、新しいパスワードを設定してください。"}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",style:{width:"100%",margin:"30px 0"},children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{style:{textAlign:"center"},children:t.jsx("a",{href:l,style:{display:"inline-block",padding:"14px 40px",backgroundColor:"#15346D",color:"#ffffff",textDecoration:"none",borderRadius:"6px",fontSize:"16px",fontWeight:"600"},children:"パスワードを再設定"})})})})}),t.jsx("div",{style:{margin:"30px 0",padding:"16px",backgroundColor:"#fef3c7",borderLeft:"4px solid #f59e0b",borderRadius:"4px"},children:t.jsxs("p",{style:{margin:0,color:"#92400e",fontSize:"14px",lineHeight:"1.6"},children:[t.jsx("strong",{children:"重要:"})," このリンクは",n,"時間後に無効となります。",t.jsx("br",{}),"パスワード再設定をリクエストしていない場合は、このメールを無視してください。"]})}),t.jsx("p",{style:{margin:"20px 0 0 0",color:"#6b7280",fontSize:"14px",lineHeight:"1.6"},children:"ご不明な点がございましたら、お気軽にお問い合わせください。"})]})}),t.jsx("tr",{children:t.jsxs("td",{style:{padding:"30px 20px",textAlign:"center",backgroundColor:"#f9fafb",borderTop:"1px solid #e5e7eb"},children:[t.jsxs("p",{style:{margin:"0 0 10px 0",color:"#6b7280",fontSize:"14px"},children:[r," カスタマーサポート"]}),t.jsxs("p",{style:{margin:"0 0 10px 0",color:"#9ca3af",fontSize:"12px"},children:["お問い合わせ:"," ",t.jsx("a",{href:`mailto:${s}`,style:{color:"#15346D",textDecoration:"none"},children:s})]}),t.jsx("p",{style:{margin:"10px 0 0 0",color:"#9ca3af",fontSize:"12px"},children:"このメールに心当たりがない場合は、破棄してください。"})]})})]})})})}),t.jsx("style",{children:`
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
      `})]})},o4=()=>{const e=Dt(),a=u.useRef(null),[l,n]=ea(),[s,r]=u.useState(!1),[i,o]=u.useState(!1),[c,d]=u.useState(!1),[m,f]=u.useState(!1),p=N=>{const z={dashboard:"/pages/dashboard","data-list":"/pages/data/list",statistics:"/pages/statistics",settings:"/pages/settings",notifications:"/pages/notifications",login:"/pages/login",qna:"/pages/qna",privacy:"/pages/privacy",terms:"/pages/terms",commercial:"/pages/commercial"}[N]||`/pages/${N}`;e(z)},[x,y]=u.useState([{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}]),j=N=>{y(T=>T.map(z=>z.id===N?{...z,read:!0}:z))},w=()=>{y(N=>N.map(T=>({...T,read:!0})))},b={firstName:"太郎",lastName:"山田",email:"taro.yamada@example.com",phone:"09012345678",alternatePhone:"0312345678",postalCode:"1500043",prefecture:"東京都",city:"渋谷区",address1:"道玄坂1-2-3",address2:"渋谷ビル 4F",employmentStatus:"正社員",occupation:"ソフトウェアエンジニア",companyName:"株式会社サンプル",annualIncome:6e6,skills:["プログラミング","デザイン"],workLocation:["東京","リモート"],desiredSalary:6e6,availableStartDate:"2025/02/01",preferredContactTime:"14:00"},v=[{id:"personal",title:"個人情報",icon:"user",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"firstName",label:"名",type:"text"},{key:"lastName",label:"姓",type:"text"},{key:"email",label:"メールアドレス",type:"email"},{key:"phone",label:"電話番号",type:"text"}]},{id:"address",title:"住所情報",icon:"location",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"postalCode",label:"郵便番号",type:"text"},{key:"prefecture",label:"都道府県",type:"badge",badgeConfig:{tokyo:{label:"東京都",variant:"info"},osaka:{label:"大阪府",variant:"info"},kyoto:{label:"京都府",variant:"info"},hokkaido:{label:"北海道",variant:"info"}}},{key:"city",label:"市区町村",type:"text"},{key:"address1",label:"町名・番地",type:"text"},{key:"address2",label:"建物名・部屋番号",type:"text"}]},{id:"employment",title:"職業情報",icon:"briefcase",columns:2,layout:"grid",collapsible:!0,defaultCollapsed:!1,fields:[{key:"employmentStatus",label:"雇用形態",type:"badge",badgeConfig:{fulltime:{label:"正社員",variant:"success"},parttime:{label:"パート・アルバイト",variant:"info"},contract:{label:"契約社員",variant:"warning"},freelance:{label:"フリーランス",variant:"info"},student:{label:"学生",variant:"default"},unemployed:{label:"無職",variant:"error"}}},{key:"occupation",label:"職種",type:"text"},{key:"companyName",label:"勤務先名",type:"text"},{key:"annualIncome",label:"年収",type:"currency",currencySymbol:"¥",decimals:0}]},{id:"preferences",title:"設定・希望",icon:"settings",collapsible:!0,defaultCollapsed:!1,fields:[{key:"skills",label:"スキル・得意分野",type:"list",listConfig:{style:"inline",renderItem:N=>{const T={programming:"プログラミング",design:"デザイン",marketing:"マーケティング",management:"マネジメント",sales:"営業"};return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--color-primary-100)",color:"var(--color-primary-700)",borderRadius:"var(--radius-full)",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",marginRight:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:T[N]||N})}}},{key:"workLocation",label:"希望勤務地",type:"list",listConfig:{style:"inline",renderItem:N=>{const T={tokyo:"東京",osaka:"大阪",nagoya:"名古屋",fukuoka:"福岡",remote:"リモート"};return t.jsx("span",{style:{display:"inline-block",padding:"var(--spacing-2) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",borderRadius:"var(--radius-md)",fontSize:"var(--font-size-sm)",marginRight:"var(--spacing-2)",marginBottom:"var(--spacing-2)"},children:T[N]||N})}}},{key:"desiredSalary",label:"希望年収",type:"currency",currencySymbol:"¥",decimals:0},{key:"availableStartDate",label:"就業可能日",type:"text",render:N=>N?N.replace(/-/g,"/"):"-"},{key:"preferredContactTime",label:"希望連絡時間",type:"text"}]}],h=[{id:"edit",label:"編集",icon:"edit",variant:"primary",onClick:N=>{e("/pages/data/edit")}},{id:"delete",label:"削除",icon:"delete",variant:"danger",onClick:N=>{sessionStorage.setItem("flashMessage",JSON.stringify({type:"success",message:"データを削除しました"})),e("/pages/data/list")},confirm:{title:"削除の確認",message:"このユーザーを削除してもよろしいですか？この操作は取り消せません。",confirmText:"削除",cancelText:"キャンセル"}}],g=[{label:"ホーム",path:"/"},{label:"データ一覧",path:"/pages/data/list"},{label:"データ詳細"}];return t.jsxs("div",{className:l==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:l,onViewModeChange:n}),t.jsx(Ve,{viewMode:l,currentPage:"data-detail",onNavigate:p,unreadCount:x.filter(N=>!N.read).length,showNotificationDropdown:s,setShowNotificationDropdown:r,showUserMenu:i,setShowUserMenu:o,isHamburgerOpen:c,setIsHamburgerOpen:d,sidebarCollapsed:m,setSidebarCollapsed:f,notificationRef:a,notifications:x,onMarkNotificationAsRead:j,onMarkAllNotificationsAsRead:w,children:t.jsx(Ju,{title:"データ詳細",data:b,sections:v,actions:h,breadcrumbs:g,layout:{type:"grid",columns:2}})})]})},c4=({userName:e="ゲスト",stats:a=[],hideNavigation:l=!0,recentActivities:n=[],quickActions:s=[],notifications:r=[],flashMessage:i={type:"success",message:"こちらはダッシュボードです"},title:o="ダッシュボード",currentPage:c="dashboard",sidebarMenuItems:d,onNavigate:m,onLogout:f,onMarkNotificationAsRead:p,onMarkAllNotificationsAsRead:x})=>{const y=u.useRef(null),[j,w]=ea(),[b,v]=u.useState(!1),[h,g]=u.useState(!1),[N,T]=u.useState(!1),[z,C]=u.useState(!1),[L,H]=u.useState(r);u.useEffect(()=>{const R=()=>{const U=window.innerWidth<=768?"sp":"pc";w(U)};return R(),window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)}},[w]);const M=R=>{if(m){m(R);return}const V=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",P={dashboard:`${V}/dashboard`,"data-list":`${V}/data/list`,statistics:`${V}/statistics`,settings:`${V}/settings`,notifications:`${V}/notifications`,login:`${V}/login`,qna:`${V}/qna`,privacy:`${V}/privacy`,terms:`${V}/terms`,commercial:`${V}/commercial`}[R]||`${V}/${R}`;window.location.href=P},B=()=>{if(f){f();return}M("login")},_=R=>{p&&p(R),H(E=>E.map(U=>U.id===R?{...U,read:!0}:U))},Y=()=>{x&&x(),H(R=>R.map(E=>({...E,read:!0})))},G=[{label:"新規データ作成",icon:"plus-circle",onClick:()=>M("data-form")},{label:"データ一覧表示",icon:"table",onClick:()=>M("data-list")},{label:"統計を確認",icon:"chart-bar",onClick:()=>M("statistics")}],A=s.length>0?s:G;return t.jsxs("div",{className:j==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:l,viewMode:j,onViewModeChange:w}),t.jsxs(Ve,{viewMode:j,currentPage:c,onNavigate:M,onLogout:B,userName:e,sidebarMenuItems:d,unreadCount:L.filter(R=>!R.read).length,showNotificationDropdown:b,setShowNotificationDropdown:v,showUserMenu:h,setShowUserMenu:g,isHamburgerOpen:N,setIsHamburgerOpen:T,sidebarCollapsed:z,setSidebarCollapsed:C,notificationRef:y,notifications:L,onMarkNotificationAsRead:_,onMarkAllNotificationsAsRead:Y,children:[i&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",background:i.type==="success"?"var(--color-success-50)":i.type==="error"?"var(--color-error-50)":i.type==="warning"?"var(--color-warning-50)":"var(--color-info-50)",border:`1px solid ${i.type==="success"?"var(--color-success-200)":i.type==="error"?"var(--color-error-200)":i.type==="warning"?"var(--color-warning-200)":"var(--color-info-200)"}`,borderRadius:0,color:i.type==="success"?"var(--color-success-900)":i.type==="error"?"var(--color-error-900)":i.type==="warning"?"var(--color-warning-900)":"var(--color-info-900)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:i.type==="success"?"check-circle":i.type==="error"?"exclamation":i.type==="warning"?"warning":"information-circle",style:{color:i.type==="success"?"var(--color-success-600)":i.type==="error"?"var(--color-error-600)":i.type==="warning"?"var(--color-warning-600)":"var(--color-info-600)",width:"20px",height:"20px"}}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:i.message})]}),a.length===0&&n.length===0&&s.length===0?null:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-6)"},children:[a.length>0&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"var(--spacing-4)"},role:"region","aria-label":"統計情報",children:a.map((R,E)=>t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-4)",display:"flex",alignItems:"center",gap:"var(--spacing-3)"},role:"article","aria-label":`${R.label}: ${R.value}`,children:[t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:0,background:`${R.color}20`,display:"flex",alignItems:"center",justifyContent:"center"},"aria-hidden":"true",children:t.jsx(k,{name:R.icon,size:"md",style:{color:R.color}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-600)",marginBottom:"var(--spacing-1)"},children:R.label}),t.jsx("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)"},children:R.value})]})]},E))}),n.length>0&&t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-5)"},role:"region","aria-label":"最近のアクティビティ",children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"最近のアクティビティ"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-3)"},children:n.map((R,E)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--spacing-3)",borderRadius:0,background:"var(--color-neutral-50)"},role:"article",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[R.avatarUrl?t.jsx("img",{src:R.avatarUrl,alt:`${R.user}のアバター`,style:{width:"32px",height:"32px",borderRadius:0,objectFit:"cover"}}):t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:0,background:"var(--color-primary-500)",color:"var(--color-neutral-white)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-semibold)"},"aria-hidden":"true",children:R.user.charAt(0)}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",color:"var(--color-neutral-900)"},children:R.user}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-600)"},children:R.action})]})]}),t.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-neutral-500)"},children:R.time})]},E))})]}),s.length>0&&t.jsxs("div",{style:{background:"var(--color-neutral-white)",border:"1px solid var(--color-neutral-200)",borderRadius:0,padding:"var(--spacing-5)"},role:"region","aria-label":"クイックアクション",children:[t.jsx("h2",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",marginBottom:"var(--spacing-4)"},children:"クイックアクション"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--spacing-3)"},children:A.map((R,E)=>t.jsxs("button",{onClick:R.onClick,style:{padding:"var(--spacing-3)",borderRadius:0,border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-white)",cursor:"pointer",display:"flex",alignItems:"center",gap:"var(--spacing-2)",transition:"all 0.2s"},onMouseOver:U=>{U.currentTarget.style.background="var(--color-neutral-50)",U.currentTarget.style.borderColor="var(--color-primary-500)"},onMouseOut:U=>{U.currentTarget.style.background="var(--color-neutral-white)",U.currentTarget.style.borderColor="var(--color-neutral-300)"},"aria-label":R.label,children:[t.jsx(k,{name:R.icon,size:"sm"}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)"},children:R.label})]},E))})]})]})]})]})},d4=({profileData:e,notifications:a,currentPage:l="settings",onSave:n,onNavigate:s,onLogout:r,onMarkNotificationAsRead:i,onMarkAllNotificationsAsRead:o,flashMessage:c=null,initialViewMode:d="pc",hideNavigation:m=!0})=>{const f=u.useRef(null),[p,x]=ea(),[y,j]=u.useState(!1),[w,b]=u.useState(!1),[v,h]=u.useState(!1),[g,N]=u.useState(!1),[T,z]=u.useState(!1),[C,L]=u.useState(c),H={username:"",email:"",role:"",displayName:"",phone:"",department:""},[M,B]=u.useState(e||H),[_,Y]=u.useState({...M}),G=[{id:1,title:"新しいメッセージ",message:"システムから重要なお知らせがあります",time:"5分前",read:!1},{id:2,title:"データ更新完了",message:"データの同期が完了しました",time:"1時間前",read:!1},{id:3,title:"メンテナンスのお知らせ",message:"明日の深夜にメンテナンスを実施します",time:"3時間前",read:!0}],[A,R]=u.useState(a||G),E=$=>{if(s){s($);return}const xe=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",ra={dashboard:`${xe}/dashboard`,"data-list":`${xe}/data/list`,statistics:`${xe}/statistics`,settings:`${xe}/settings`,notifications:`${xe}/notifications`,login:`${xe}/login`,qna:`${xe}/qna`,privacy:`${xe}/privacy`,terms:`${xe}/terms`,commercial:`${xe}/commercial`}[$]||`${xe}/${$}`;window.location.href=ra},U=()=>{if(r){r();return}E("login")},V=$=>{i?i($):R(le=>le.map(ve=>ve.id===$?{...ve,read:!0}:ve))},J=()=>{o?o():R($=>$.map(le=>({...le,read:!0})))},P=()=>{Y({...M}),z(!0)},Z=async()=>{if(n)try{await n(_),B({..._}),z(!1),c||(L("プロフィールを保存しました"),setTimeout(()=>L(null),3e3))}catch($){console.error("Save failed:",$),L("保存に失敗しました"),setTimeout(()=>L(null),3e3)}else B({..._}),z(!1),L("プロフィールを保存しました"),setTimeout(()=>L(null),3e3)},F=()=>{Y({...M}),z(!1)},I=($,le)=>{Y(ve=>({...ve,[$]:le}))};return t.jsxs("div",{className:p==="sp"?"force-mobile":"",children:[t.jsx(ke,{hide:m,viewMode:p,onViewModeChange:x}),t.jsx(Ve,{viewMode:p,currentPage:l,onNavigate:E,onLogout:U,unreadCount:A.filter($=>!$.read).length,showNotificationDropdown:y,setShowNotificationDropdown:j,showUserMenu:w,setShowUserMenu:b,isHamburgerOpen:v,setIsHamburgerOpen:h,sidebarCollapsed:g,setSidebarCollapsed:N,notificationRef:f,notifications:A,onMarkNotificationAsRead:V,onMarkAllNotificationsAsRead:J,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"1000px",margin:"0 auto"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",marginBottom:"var(--spacing-6)",color:"var(--color-neutral-900)"},children:"設定"}),C&&t.jsxs("div",{style:{padding:"var(--spacing-4)",marginBottom:"var(--spacing-4)",backgroundColor:"var(--color-success-50)",border:"1px solid var(--color-success-200)",borderRadius:0,color:"var(--color-success-700)",display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"check-circle",style:{width:"20px",height:"20px"}}),C]}),t.jsxs("div",{style:{marginBottom:"var(--spacing-8)",padding:"var(--spacing-6)",backgroundColor:"var(--color-neutral-white)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-4)"},children:[t.jsx("h2",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:"プロフィール設定"}),!T&&t.jsxs("button",{className:"btn btn--primary",onClick:P,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[t.jsx(k,{name:"edit",style:{width:"16px",height:"16px"}}),"編集"]})]}),T?t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:p==="sp"?"var(--spacing-2)":"var(--spacing-1_5)"},children:[t.jsx(We,{label:"表示名",name:"displayName",value:_.displayName,onChange:$=>I("displayName",$.target.value),placeholder:"表示名を入力"}),t.jsx(We,{label:"ユーザー名",name:"username",value:_.username,onChange:$=>I("username",$.target.value),placeholder:"ユーザー名を入力"}),t.jsx(We,{label:"メールアドレス",name:"email",type:"email",value:_.email,onChange:$=>I("email",$.target.value),placeholder:"メールアドレスを入力"}),t.jsx(We,{label:"電話番号",name:"phone",value:_.phone,onChange:$=>I("phone",$.target.value),placeholder:"電話番号を入力"}),t.jsx(We,{label:"部署",name:"department",value:_.department,onChange:$=>I("department",$.target.value),placeholder:"部署を入力"}),t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)",justifyContent:"flex-end",marginTop:"var(--spacing-2)"},children:[t.jsx(Vt,{variant:"text",onClick:F,children:"キャンセル"}),t.jsx(Vt,{variant:"primary",onClick:Z,children:"保存"})]})]}):t.jsxs("div",{style:{color:"var(--color-neutral-600)"},children:[t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"表示名:"})," ",M.displayName]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"ユーザー名:"})," ",M.username]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"メールアドレス:"})," ",M.email]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"電話番号:"})," ",M.phone]}),t.jsxs("p",{style:{marginBottom:"var(--spacing-2)"},children:[t.jsx("strong",{children:"部署:"})," ",M.department]}),t.jsxs("p",{children:[t.jsx("strong",{children:"役割:"})," ",M.role]})]})]})]})})]})},u4=({notifications:e=[],unreadCount:a=0,onMarkAsRead:l,onMarkAllAsRead:n,onNotificationClick:s,onNavigate:r,onLogout:i,currentPage:o="notifications",initialViewMode:c,pagination:d,onLoadMore:m,isLoading:f=!1,emptyMessage:p="通知はありません",enableTypeFilter:x=!1,enableStatusFilter:y=!1})=>{const j=u.useRef(null),[w,b]=ea(),[v,h]=u.useState(!1),[g,N]=u.useState(!1),[T,z]=u.useState(!1),[C,L]=u.useState(!1),[H,M]=u.useState(e),[B,_]=u.useState(new Set),[Y,G]=u.useState(null),[A,R]=u.useState("all");ee.useEffect(()=>{M(e)},[e]);const E=async $=>{M(le=>le.map(ve=>ve.id===$?{...ve,read:!0}:ve)),_(le=>new Set(le).add($));try{l&&await l($)}catch(le){M(e),console.error("Failed to mark notification as read:",le)}finally{_(le=>{const ve=new Set(le);return ve.delete($),ve})}},U=async()=>{const $=[...H];M(le=>le.map(ve=>({...ve,read:!0})));try{n&&await n()}catch(le){M($),console.error("Failed to mark all notifications as read:",le)}},V=$=>{s&&s($),$.read||E($.id)},J=()=>{if(i){i();return}handleNavigate("login")},P=($="info")=>{switch($){case"success":return"check-circle";case"warning":return"warning";case"error":return"exclamation";default:return"info"}},Z=($="info")=>{switch($){case"success":return"var(--color-success-600)";case"warning":return"var(--color-warning-600)";case"error":return"var(--color-error-600)";default:return"var(--color-primary-600)"}},F=H.filter($=>!(x&&Y&&$.type!==Y||y&&(A==="read"&&!$.read||A==="unread"&&$.read))),I=a||H.filter($=>!$.read).length;return t.jsxs("div",{className:w==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:w,onViewModeChange:b}),t.jsx(Ve,{viewMode:w,currentPage:o,onNavigate:r,unreadCount:I,showNotificationDropdown:v,setShowNotificationDropdown:h,showUserMenu:g,setShowUserMenu:N,isHamburgerOpen:T,setIsHamburgerOpen:z,sidebarCollapsed:C,setSidebarCollapsed:L,notificationRef:j,notifications:H,onMarkNotificationAsRead:E,onMarkAllNotificationsAsRead:U,onLogout:J,children:t.jsxs("div",{style:{padding:"var(--spacing-6)",maxWidth:"900px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-6)",flexWrap:"wrap",gap:"var(--spacing-4)"},children:[t.jsx("h1",{style:{fontSize:"var(--font-size-3xl)",fontWeight:"var(--font-weight-bold)",color:"var(--color-neutral-900)",margin:0},children:"通知一覧"}),H.some($=>!$.read)&&t.jsxs("button",{onClick:U,disabled:f,style:{display:"flex",alignItems:"center",gap:"var(--spacing-2)",padding:"var(--spacing-2) var(--spacing-4)",background:"var(--color-primary-500)",color:"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",fontWeight:"var(--font-weight-medium)",cursor:f?"not-allowed":"pointer",transition:"background-color 0.2s",opacity:f?.6:1},onMouseEnter:$=>{f||($.currentTarget.style.backgroundColor="var(--color-primary-600)")},onMouseLeave:$=>{$.currentTarget.style.backgroundColor="var(--color-primary-500)"},children:[t.jsx(k,{name:"check",style:{width:"16px",height:"16px"}}),"全て既読にする"]})]}),(x||y)&&t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-4)",marginBottom:"var(--spacing-6)",flexWrap:"wrap"},children:[x&&t.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:[t.jsx("button",{onClick:()=>G(null),style:{padding:"var(--spacing-2) var(--spacing-3)",background:Y===null?"var(--color-primary-500)":"var(--color-neutral-100)",color:Y===null?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:"全て"}),["info","success","warning","error"].map($=>t.jsx("button",{onClick:()=>G($),style:{padding:"var(--spacing-2) var(--spacing-3)",background:Y===$?"var(--color-primary-500)":"var(--color-neutral-100)",color:Y===$?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:$},$))]}),y&&t.jsx("div",{style:{display:"flex",gap:"var(--spacing-2)"},children:["all","read","unread"].map($=>t.jsx("button",{onClick:()=>R($),style:{padding:"var(--spacing-2) var(--spacing-3)",background:A===$?"var(--color-primary-500)":"var(--color-neutral-100)",color:A===$?"var(--color-neutral-white)":"var(--color-neutral-700)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:"pointer"},children:$==="all"?"全て":$==="read"?"既読":"未読"},$))})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--spacing-4)"},children:F.length===0?t.jsxs("div",{style:{padding:"var(--spacing-8)",textAlign:"center",backgroundColor:"var(--color-neutral-50)",borderRadius:0,border:"1px solid var(--color-neutral-200)"},children:[t.jsx(k,{name:"info",style:{width:"48px",height:"48px",color:"var(--color-neutral-400)",margin:"0 auto var(--spacing-4)"}}),t.jsx("p",{style:{fontSize:"var(--font-size-lg)",color:"var(--color-neutral-600)",margin:0},children:p})]}):F.map($=>t.jsxs("div",{onClick:()=>V($),style:{padding:"var(--spacing-5)",backgroundColor:$.read?"var(--color-neutral-50)":"var(--color-neutral-white)",borderRadius:0,border:"1px solid var(--color-neutral-200)",display:"flex",gap:"var(--spacing-4)",alignItems:"start",boxShadow:$.read?"none":"var(--shadow-sm)",position:"relative",cursor:s?"pointer":"default",transition:"transform 0.2s, box-shadow 0.2s",opacity:B.has($.id)?.6:1},onMouseEnter:le=>{s&&!$.read&&(le.currentTarget.style.transform="translateY(-2px)",le.currentTarget.style.boxShadow="var(--shadow-md)")},onMouseLeave:le=>{s&&(le.currentTarget.style.transform="translateY(0)",le.currentTarget.style.boxShadow=$.read?"none":"var(--shadow-sm)")},children:[t.jsx(k,{name:P($.type),style:{width:"24px",height:"24px",color:Z($.type),flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"var(--spacing-2)",gap:"var(--spacing-3)"},children:[t.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-semibold)",color:"var(--color-neutral-900)",margin:0},children:$.title}),t.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-500)",whiteSpace:"nowrap",flexShrink:0},children:$.time})]}),t.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-neutral-600)",lineHeight:"var(--line-height-relaxed)",marginBottom:$.read?0:"var(--spacing-3)",margin:0},children:$.message}),!$.read&&t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"var(--spacing-3)"},children:t.jsxs("button",{onClick:le=>{le.stopPropagation(),E($.id)},disabled:B.has($.id),style:{display:"flex",alignItems:"center",gap:"var(--spacing-1)",padding:"var(--spacing-1) var(--spacing-3)",background:"var(--color-neutral-100)",color:"var(--color-neutral-700)",border:"1px solid var(--color-neutral-300)",borderRadius:0,fontSize:"var(--font-size-xs)",fontWeight:"var(--font-weight-medium)",cursor:B.has($.id)?"not-allowed":"pointer",transition:"all 0.2s"},onMouseEnter:le=>{B.has($.id)||(le.currentTarget.style.backgroundColor="var(--color-neutral-200)",le.currentTarget.style.borderColor="var(--color-neutral-400)")},onMouseLeave:le=>{le.currentTarget.style.backgroundColor="var(--color-neutral-100)",le.currentTarget.style.borderColor="var(--color-neutral-300)"},children:[t.jsx(k,{name:"check",style:{width:"12px",height:"12px"}}),"既読にする"]})})]})]},$.id))}),d&&d.lastPage>1&&t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"var(--spacing-4)",marginTop:"var(--spacing-6)",padding:"var(--spacing-4)"},children:[t.jsx("button",{onClick:()=>m&&m(d.currentPage-1),disabled:d.currentPage===1||f,style:{padding:"var(--spacing-2) var(--spacing-4)",background:d.currentPage===1?"var(--color-neutral-100)":"var(--color-primary-500)",color:d.currentPage===1?"var(--color-neutral-400)":"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:d.currentPage===1||f?"not-allowed":"pointer"},children:"前へ"}),t.jsxs("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-neutral-700)"},children:[d.currentPage," / ",d.lastPage]}),t.jsx("button",{onClick:()=>m&&m(d.currentPage+1),disabled:d.currentPage===d.lastPage||f,style:{padding:"var(--spacing-2) var(--spacing-4)",background:d.currentPage===d.lastPage?"var(--color-neutral-100)":"var(--color-primary-500)",color:d.currentPage===d.lastPage?"var(--color-neutral-400)":"var(--color-neutral-white)",border:"none",borderRadius:0,fontSize:"var(--font-size-sm)",cursor:d.currentPage===d.lastPage||f?"not-allowed":"pointer"},children:"次へ"})]}),f&&t.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-4)",color:"var(--color-neutral-600)",fontSize:"var(--font-size-sm)"},children:"読み込み中..."})]})})]})},m4=({label:e,value:a,icon:l,iconColor:n,iconBackground:s,trend:r,subtitle:i,format:o,onClick:c})=>{const d=o?o(a):a;return t.jsx("div",{className:`stat-metric-card ${c?"stat-metric-card--clickable":""}`,onClick:c,role:c?"button":void 0,tabIndex:c?0:void 0,onKeyPress:c?m=>{(m.key==="Enter"||m.key===" ")&&c()}:void 0,children:t.jsxs("div",{className:"stat-metric-card__content",children:[t.jsxs("div",{className:"stat-metric-card__text",children:[t.jsx("p",{className:"stat-metric-card__label",children:e}),t.jsx("p",{className:"stat-metric-card__value",children:d}),i&&t.jsx("p",{className:"stat-metric-card__subtitle",children:i}),r&&t.jsxs("div",{className:`stat-metric-card__trend stat-metric-card__trend--${r.isPositive?"positive":"negative"}`,children:[t.jsx(k,{name:r.direction==="up"?"arrow-up":r.direction==="down"?"arrow-down":"minus",size:"xs"}),t.jsxs("span",{className:"stat-metric-card__trend-value",children:[r.value>0?"+":"",r.value,"%"]}),r.label&&t.jsx("span",{className:"stat-metric-card__trend-label",children:r.label})]})]}),l&&t.jsx("div",{className:"stat-metric-card__icon",style:{backgroundColor:s||"var(--color-primary-100)",color:n||"var(--color-primary-700)"},children:t.jsx(k,{name:l,size:"lg"})})]})})},h4=ee.memo(m4),p4=({filters:e,onFilterChange:a,onApplyFilters:l,onResetFilters:n,collapsed:s=!1,onToggleCollapsed:r,className:i=""})=>{const o=(d,m)=>{a(d,m)},c=d=>{var m,f,p,x;switch(d.type){case"date-range":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsxs("div",{className:"filter-panel__date-range",children:[t.jsx("input",{type:"date",className:"filter-panel__input filter-panel__input--date",value:((m=d.value)==null?void 0:m.startDate)||"",onChange:y=>o(d.id,{...d.value,startDate:y.target.value}),placeholder:"開始日"}),t.jsx("span",{className:"filter-panel__date-separator",children:"〜"}),t.jsx("input",{type:"date",className:"filter-panel__input filter-panel__input--date",value:((f=d.value)==null?void 0:f.endDate)||"",onChange:y=>o(d.id,{...d.value,endDate:y.target.value}),placeholder:"終了日"})]})]},d.id);case"select":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsxs("select",{className:"filter-panel__select",value:d.value||"",onChange:y=>o(d.id,y.target.value),children:[t.jsx("option",{value:"",children:d.placeholder||"選択してください"}),(p=d.options)==null?void 0:p.map(y=>t.jsx("option",{value:y.value,children:y.label},y.value))]})]},d.id);case"multi-select":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsx("div",{className:"filter-panel__multi-select",children:(x=d.options)==null?void 0:x.map(y=>t.jsxs("label",{className:"filter-panel__checkbox-label",children:[t.jsx("input",{type:"checkbox",className:"filter-panel__checkbox",checked:Array.isArray(d.value)&&d.value.includes(y.value),onChange:j=>{const w=Array.isArray(d.value)?d.value:[],b=j.target.checked?[...w,y.value]:w.filter(v=>v!==y.value);o(d.id,b)}}),t.jsx("span",{children:y.label})]},y.value))})]},d.id);case"checkbox":return t.jsx("div",{className:"filter-panel__field",children:t.jsxs("label",{className:"filter-panel__checkbox-label filter-panel__checkbox-label--single",children:[t.jsx("input",{type:"checkbox",className:"filter-panel__checkbox",checked:!!d.value,onChange:y=>o(d.id,y.target.checked)}),t.jsx("span",{children:d.label})]})},d.id);case"text":return t.jsxs("div",{className:"filter-panel__field",children:[t.jsxs("label",{className:"filter-panel__label",children:[d.label,d.required&&t.jsx("span",{className:"filter-panel__required",children:"*"})]}),t.jsx("input",{type:"text",className:"filter-panel__input",value:d.value||"",onChange:y=>o(d.id,y.target.value),placeholder:d.placeholder})]},d.id);default:return null}};return t.jsxs("div",{className:`filter-panel ${s?"filter-panel--collapsed":""} ${i}`,children:[t.jsxs("div",{className:"filter-panel__header",children:[t.jsxs("h3",{className:"filter-panel__title",children:[t.jsx(k,{name:"filter",size:"sm"}),t.jsx("span",{children:"フィルター"})]}),r&&t.jsx("button",{className:"filter-panel__toggle",onClick:r,"aria-label":s?"フィルターを表示":"フィルターを非表示",children:t.jsx(k,{name:s?"chevron-down":"chevron-up",size:"sm"})})]}),!s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"filter-panel__body",children:e.map(c)}),t.jsxs("div",{className:"filter-panel__actions",children:[n&&t.jsx(Vt,{variant:"text",size:"sm",onClick:n,icon:"refresh",children:"リセット"}),l&&t.jsx(Vt,{variant:"primary",size:"sm",onClick:l,icon:"check",children:"適用"})]})]})]})},f4=ee.memo(p4),g4=({chart:e,className:a=""})=>!e.visible&&e.visible!==void 0?null:t.jsxs("div",{className:`statistics-chart-card ${a}`,children:[t.jsxs("div",{className:"statistics-chart-card__header",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"statistics-chart-card__title",children:e.title}),e.subtitle&&t.jsx("p",{className:"statistics-chart-card__subtitle",children:e.subtitle})]}),e.showRefreshButton&&e.onRefresh&&t.jsx("button",{className:"statistics-chart-card__refresh-button",onClick:e.onRefresh,disabled:e.loading,children:"↻"})]}),t.jsx("div",{className:"statistics-chart-card__content",children:e.loading?t.jsxs("div",{className:"statistics-chart-card__loading",children:[t.jsx("div",{className:"spinner"}),t.jsx("p",{children:"読み込み中..."})]}):t.jsx("div",{className:"statistics-chart-card__chart",children:t.jsxs("div",{style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-neutral-50)",borderRadius:"var(--radius-md)",color:"var(--color-neutral-600)"},children:[e.chartType," Chart: ",e.title]})})}),e.description&&t.jsx("div",{className:"statistics-chart-card__description",children:t.jsx("p",{children:e.description})}),e.lastUpdated&&t.jsx("div",{className:"statistics-chart-card__metadata",children:t.jsxs("span",{className:"statistics-chart-card__last-updated",children:["最終更新: ",new Date(e.lastUpdated).toLocaleString("ja-JP")]})})]}),v4=ee.memo(g4),x4=({title:e,subtitle:a,metrics:l=[],charts:n,filters:s=[],exportConfig:r,onFilterChange:i,onApplyFilters:o,onResetFilters:c,onExport:d,viewMode:m="pc",onNavigate:f=()=>{},onLogout:p,showFilters:x=!0,showExport:y=!0,showMetrics:j=!0,chartColumns:w=1,loading:b=!1,error:v,className:h="",breadcrumbs:g,headerActions:N})=>{const[T,z]=u.useState(m),[C,L]=u.useState(!1),H=G=>{if(f){f(G);return}const E=(typeof window<"u"?window.location.pathname:"").startsWith("/templates")?"/templates":"/pages",V={dashboard:`${E}/dashboard`,"data-list":`${E}/data/list`,statistics:`${E}/statistics`,settings:`${E}/settings`,notifications:`${E}/notifications`,login:`${E}/login`,qna:`${E}/qna`,privacy:`${E}/privacy`,terms:`${E}/terms`,commercial:`${E}/commercial`}[G]||`${E}/${G}`;window.location.href=V},M=()=>{if(p){p();return}H("login")},B=G=>{d?d(G):r!=null&&r.onExport&&r.onExport(G)},_=[...n].sort((G,A)=>{const R=G.order??0,E=A.order??0;return R-E}),Y=()=>b?t.jsxs("div",{className:"statistics-page__loading",children:[t.jsx("div",{className:"statistics-page__spinner",children:t.jsx(k,{name:"refresh",size:"xl"})}),t.jsx("p",{children:"データを読み込んでいます..."})]}):v?t.jsxs("div",{className:"statistics-page__error",children:[t.jsx(k,{name:"exclamation",size:"xl"}),t.jsx("h3",{children:"エラーが発生しました"}),t.jsx("p",{children:v})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"statistics-page__header",children:[t.jsxs("div",{className:"statistics-page__header-content",children:[t.jsx("h1",{className:"statistics-page__title",children:e}),a&&t.jsx("p",{className:"statistics-page__subtitle",children:a})]}),y&&((r==null?void 0:r.enableCsv)||(r==null?void 0:r.enablePng)||(r==null?void 0:r.enablePdf))&&t.jsxs("div",{className:"statistics-page__header-actions",children:[t.jsxs("div",{className:"statistics-page__export-group",children:[r.enableCsv&&t.jsx(Vt,{variant:"secondary",size:"sm",onClick:()=>B("csv"),icon:"download",children:"CSV"}),r.enablePng&&t.jsx(Vt,{variant:"secondary",size:"sm",onClick:()=>B("png"),icon:"image",children:"PNG"}),r.enablePdf&&t.jsx(Vt,{variant:"secondary",size:"sm",onClick:()=>B("pdf"),icon:"file",children:"PDF"})]}),N==null?void 0:N.map((G,A)=>t.jsx(Vt,{variant:G.variant||"secondary",size:"sm",onClick:G.onClick,icon:G.icon,children:G.label},A))]})]}),x&&s.length>0&&i&&t.jsx(f4,{filters:s,onFilterChange:i,onApplyFilters:o,onResetFilters:c,collapsed:C,onToggleCollapsed:()=>L(!C)}),j&&l.length>0&&t.jsx("div",{className:"statistics-page__metrics",children:l.map(G=>t.jsx(h4,{...G},G.id))}),n.length>0&&t.jsx("div",{className:"statistics-page__charts",style:{gridTemplateColumns:w>1?`repeat(${w}, 1fr)`:"1fr"},children:_.map(G=>t.jsx(v4,{chart:G},G.id))}),n.length===0&&t.jsxs("div",{className:"statistics-page__empty",children:[t.jsx(k,{name:"chart-bar",size:"xl"}),t.jsx("h3",{children:"統計データがありません"}),t.jsx("p",{children:"表示する統計データがありません。"})]})]});return t.jsxs("div",{className:T==="sp"?"force-mobile":"",children:[t.jsx(ke,{viewMode:T,onViewModeChange:z}),t.jsx(Ve,{viewMode:T,currentPage:"statistics",onNavigate:H,unreadCount:0,notifications:[],onMarkNotificationAsRead:()=>{},onMarkAllNotificationsAsRead:()=>{},onLogout:M,children:t.jsx("div",{className:`statistics-page ${h}`,children:Y()})})]})};function b4(){const e=Dt();return u.useEffect(()=>{const a=sessionStorage.getItem("redirectPath");a&&(sessionStorage.removeItem("redirectPath"),e(a,{replace:!0}))},[e]),null}function y4(){const{pathname:e}=Jl();return u.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function j4(){const e=[{path:"/",label:"ホーム",icon:"home"},{path:"/pages/login",label:"ページ",icon:"document"},{path:"/components",label:"構成要素",icon:"cube"}];return t.jsx(ib,{children:t.jsxs("div",{className:"app",children:[t.jsx("style",{children:`
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
        `}),t.jsx("nav",{className:"nav-header",children:t.jsxs("div",{className:"nav-container",children:[t.jsx(Lm,{to:"/",className:"nav-logo",children:"UI Components"}),t.jsx("ul",{className:"nav-links",children:e.map(a=>t.jsx("li",{children:t.jsxs(Lm,{to:a.path,className:({isActive:l})=>`nav-link ${l?"active":""}`,end:a.path==="/",children:[t.jsx(k,{name:a.icon,className:"w-4 h-4"}),a.label]})},a.path))})]})}),t.jsxs("main",{className:"main-content",children:[t.jsx(b4,{}),t.jsx(y4,{}),t.jsxs(I2,{children:[t.jsx(ae,{path:"/",element:t.jsx(hb,{})}),t.jsx(ae,{path:"/pages",element:t.jsx(Fj,{})}),t.jsx(ae,{path:"/pages/login",element:t.jsx(Rd,{})}),t.jsx(ae,{path:"/pages/signup",element:t.jsx(Ed,{})}),t.jsx(ae,{path:"/pages/signup-confirm",element:t.jsx(Dd,{})}),t.jsx(ae,{path:"/pages/signup-complete",element:t.jsx(Bd,{})}),t.jsx(ae,{path:"/pages/forgot-password",element:t.jsx(Td,{})}),t.jsx(ae,{path:"/pages/reset-password",element:t.jsx(Ad,{})}),t.jsx(ae,{path:"/pages/password-reset-email",element:t.jsx(ah,{})}),t.jsx(ae,{path:"/pages/dashboard",element:t.jsx(n4,{})}),t.jsx(ae,{path:"/pages/statistics",element:t.jsx(i4,{})}),t.jsx(ae,{path:"/pages/settings",element:t.jsx(t4,{})}),t.jsx(ae,{path:"/pages/notifications",element:t.jsx(l4,{})}),t.jsx(ae,{path:"/pages/data/list",element:t.jsx(e4,{})}),t.jsx(ae,{path:"/pages/data/add",element:t.jsx(Qi,{})}),t.jsx(ae,{path:"/pages/data/edit",element:t.jsx(Qi,{})}),t.jsx(ae,{path:"/pages/data/detail",element:t.jsx(o4,{})}),t.jsx(ae,{path:"/pages/error-404",element:t.jsx(_d,{})}),t.jsx(ae,{path:"/pages/error-500",element:t.jsx(Ld,{})}),t.jsx(ae,{path:"/pages/maintenance",element:t.jsx(Hd,{})}),t.jsx(ae,{path:"/pages/qna",element:t.jsx(Ud,{})}),t.jsx(ae,{path:"/pages/terms",element:t.jsx(Vd,{})}),t.jsx(ae,{path:"/pages/privacy",element:t.jsx($d,{})}),t.jsx(ae,{path:"/pages/commercial",element:t.jsx(Od,{})}),t.jsx(ae,{path:"/templates/login",element:t.jsx(Rd,{})}),t.jsx(ae,{path:"/templates/signup",element:t.jsx(Ed,{})}),t.jsx(ae,{path:"/templates/signup-confirm",element:t.jsx(Dd,{})}),t.jsx(ae,{path:"/templates/signup-complete",element:t.jsx(Bd,{})}),t.jsx(ae,{path:"/templates/forgot-password",element:t.jsx(Td,{})}),t.jsx(ae,{path:"/templates/reset-password",element:t.jsx(Ad,{})}),t.jsx(ae,{path:"/templates/password-reset-email",element:t.jsx(ah,{})}),t.jsx(ae,{path:"/templates/dashboard",element:t.jsx(c4,{})}),t.jsx(ae,{path:"/templates/settings",element:t.jsx(d4,{})}),t.jsx(ae,{path:"/templates/notifications",element:t.jsx(u4,{})}),t.jsx(ae,{path:"/templates/statistics",element:t.jsx(x4,{title:"統計",charts:[]})}),t.jsx(ae,{path:"/templates/data/list",element:t.jsx(eg,{title:"データ一覧",columns:[],data:[]})}),t.jsx(ae,{path:"/templates/data/add",element:t.jsx(qd,{title:"データ作成",validation:{},onSubmit:async()=>{}})}),t.jsx(ae,{path:"/templates/data/edit",element:t.jsx(qd,{title:"データ編集",validation:{},onSubmit:async()=>{}})}),t.jsx(ae,{path:"/templates/data/detail",element:t.jsx(Ju,{title:"データ詳細",data:{}})}),t.jsx(ae,{path:"/templates/error-404",element:t.jsx(_d,{})}),t.jsx(ae,{path:"/templates/error-500",element:t.jsx(Ld,{})}),t.jsx(ae,{path:"/templates/maintenance",element:t.jsx(Hd,{})}),t.jsx(ae,{path:"/templates/qna",element:t.jsx(Ud,{})}),t.jsx(ae,{path:"/templates/terms",element:t.jsx(Vd,{})}),t.jsx(ae,{path:"/templates/privacy",element:t.jsx($d,{})}),t.jsx(ae,{path:"/templates/commercial",element:t.jsx(Od,{})}),t.jsx(ae,{path:"/components",element:t.jsx(pb,{})}),t.jsx(ae,{path:"/buttons",element:t.jsx(gb,{})}),t.jsx(ae,{path:"/forms",element:t.jsx(yb,{})}),t.jsx(ae,{path:"/messages",element:t.jsx(Km,{})}),t.jsx(ae,{path:"/messages-notifications",element:t.jsx(Km,{})}),t.jsx(ae,{path:"/tables",element:t.jsx(Jm,{})}),t.jsx(ae,{path:"/tables-graphs",element:t.jsx(Jm,{})}),t.jsx(ae,{path:"/navigation",element:t.jsx(Oj,{})}),t.jsx(ae,{path:"/layout",element:t.jsx(Vj,{})}),t.jsx(ae,{path:"/icons",element:t.jsx(jb,{})})]})]}),t.jsx("footer",{style:{textAlign:"center",padding:"var(--spacing-8)",color:"var(--color-neutral-600)",borderTop:"1px solid var(--color-neutral-200)",backgroundColor:"var(--color-neutral-white)"},children:t.jsx("p",{children:"UI Components Library"})})]})})}d2.createRoot(document.getElementById("root")).render(t.jsx(ee.StrictMode,{children:t.jsx(j4,{})}));
