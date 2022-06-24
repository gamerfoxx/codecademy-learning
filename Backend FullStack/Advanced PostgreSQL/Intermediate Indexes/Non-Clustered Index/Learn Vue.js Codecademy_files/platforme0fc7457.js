(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[486],{"6itM":function(e,t,n){"use strict";n.d(t,"c",(function(){return isVR})),n.d(t,"b",(function(){return isChromeOSPWA})),n.d(t,"a",(function(){return isChromeOS}));const isVR=()=>{try{return/OculusBrowser|Mobile VR/.test(navigator.userAgent)}catch{return!1}},isChromeOSPWA=()=>isChromeOS()&&window.getDigitalGoodsService&&window.matchMedia("(display-mode: standalone)").matches,isChromeOS=()=>"undefined"!=typeof navigator&&/\bCrOS\b/.test(navigator.userAgent)},"84j9":function(e,t,n){"use strict";n.d(t,"c",(function(){return calculateUTCOffset})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n("y6Ls"),o=n.n(r),a=n("1TcP"),i=n.n(a),c=n("/2DS");const calculateUTCOffset=()=>-1*(new Date).getTimezoneOffset(),s=o()(i.a,Object(c.listTimeZones)()),u={timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,frequency:"daily",timeframe:"morning"}},"9izG":function(e,t,n){"use strict";n.d(t,"a",(function(){return startLoggingJSErrors}));var r=n("rePB"),o=n("GL5z");const a=["Script error","Script error."];class JSErrorLogger{constructor(){Object(r.a)(this,"onError",(e=>{var t;if(!e)return;const n=null===(t=e.message)||void 0===t?void 0:t.replace(/"/g,'\\"');a.some((e=>n===e))||(this.errors[n]?this.errors[n]+=1:this.errors[n]=1,this.errors[n]>2||o.a.error(e))})),this.errors={},this.uniqueErrorCount=0,window.addEventListener("error",this.onError),window.addEventListener("unhandledrejection",(e=>this.onError(null==e?void 0:e.reason)))}}const startLoggingJSErrors=()=>{new JSErrorLogger}},B3Mn:function(e,t,n){"use strict";n.d(t,"a",(function(){return logSameOriginError}));var r=n("ODXe"),o=n("PtqM"),a=n.n(o),i=n("MjPQ"),c=n.n(i),s=n("GL5z");const logSameOriginError=e=>{if(!a()(e))return;const t=c.a.parse(e),n=Object(r.a)(t,1)[0].fileName;null!=n&&n.includes(window.location.hostname)&&s.a.error(e)}},ELhD:function(e,t,n){"use strict";n.d(t,"a",(function(){return hasContentItemAccess}));const hasContentItemAccess=(e,t,n=!1)=>{if(e)return!0;if(!t)return!1;if(n)return!1;return"lesson"===t.type||Boolean(t.isFree||t.is_free)}},Fwbx:function(e,t,n){"use strict";let r;n.d(t,"a",(function(){return r})),function(e){e.dark="dark",e.highContrast="hc-black"}(r||(r={}))},GL5z:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("rePB"),o=n("DUL6"),a=n("tYyt");function sessionId(){var e,t;let n=null;if(null!==(e=window.sessionStorage)&&void 0!==e&&e.getItem){const e=window.sessionStorage.getItem("logger_session_id");null!==e&&(n=e)}return null===n&&(n="xxxxxx".replace(/x/g,(()=>(16*Math.random()|0).toString(16)))),null!==(t=window.sessionStorage)&&void 0!==t&&t.setItem&&window.sessionStorage.setItem("logger_session_id",n),n}var i=n("ODXe"),c=n("GoyQ"),s=n.n(c),u=n("MjPQ"),d=n.n(u);const errorOrMessage=e=>(e=>s()(e)&&"message"in e)(e)?`${e.message}`:`${e}`,captureErrorMessageStack=e=>{const t=e instanceof Error?[e,0]:[new Error(errorOrMessage(e)),1],n=Object(i.a)(t,2),r=n[0],o=n[1],a=d.a.parse(r),c=a[o];return{error:r,message:r.message,stack:{column:c.columnNumber,file:c.fileName,line:c.lineNumber,sources:a.map((e=>e.source)).join("\n")}}};class LoggerError extends Error{constructor(e){super(e),this.name=this.constructor.name}}class LoggerWarning extends Error{constructor(e){super(e),this.name=this.constructor.name}}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function stringify(e,t){return t.map((t=>{let n=e[t];return void 0===n&&(n=""),`${t}="${n}"`})).join(" ")}function send(e,t,n=Object.keys(t).sort(),r){const o=stringify(t,n),a=`//${window.location.host}/logs/v1/`,i=stringify({ua:window.navigator.userAgent,location:window.location.pathname,utype:CCDATA.current_user?"r":"a",uid:CCDATA.current_user?CCDATA.current_user._id:"null",backend:"container_api"},["ua","location","utype","uid","backend"]),c=document.createElement("img"),s={level:e,data:o,metadata:i,logfile:r,date:(new Date).valueOf(),session:sessionId()};c.src=`${a}?${function paramaterize(e){let t="";for(const n in e)""!=t&&(t+="&"),t+=`${n}=${encodeURIComponent(e[n])}`;return t}(s)}`}const createBasicLoggerMethod=e=>(t,n,r)=>("string"==typeof t&&(t={message:t}),["development","test"].includes(a.a.get("env"))&&console[e](`${n}.log`,t),send(e,t,r,n),!0),l=createBasicLoggerMethod("error"),f=createBasicLoggerMethod("warn"),p={info:createBasicLoggerMethod("info"),error:(e,t)=>{const n=captureErrorMessageStack(e),r=n.message,a=_objectSpread(_objectSpread({message:r},n.stack),{extraInfo:t});l(a,"javascript_errors"),o.a.addError(new LoggerError(r),a)},warn:e=>{const t=captureErrorMessageStack(e),n=t.message,r=_objectSpread({message:n},t.stack);f(r,"javascript_warnings"),o.a.addError(new LoggerWarning(n),r)}}},HvYt:function(e,t,n){"use strict";var r=n("hhPA"),o=n.n(r),a=n("gkUE"),i=n.n(a);o.a.use(i()(Promise))},Ljmm:function(e,t,n){"use strict";n.d(t,"a",(function(){return tryCatchAsync})),n.d(t,"b",(function(){return tryCatchOrFallback}));const tryCatchAsync=async e=>{try{return await e()}catch(e){return e}},tryCatchOrFallback=(e,t)=>{try{return e()}catch{return t}}},N0NO:function(e,t,n){"use strict";n.d(t,"a",(function(){return LanguageServices}));var r=n("rePB");class LanguageServices{constructor(e){Object(r.a)(this,"services",new Map),this.creators=e}async use(e,t){const n=this.creators.get(e);if(!n)return{};const r=this.services.get(e);if(r)return r;const o=(await n()).default(t);return this.services.set(e,o),o}}},NnNw:function(e,t,n){"use strict";n.d(t,"b",(function(){return getLanguageForName})),n.d(t,"a",(function(){return getLanguageForFile}));var r=n("uGWv");const o=new Map([["cpp",r.b],["csharp",r.a],["css",r.c],["go",r.e],["html",r.f],["java",r.g],["javascript",r.h],["js",r.h],["kotlin",r.i],["php",r.j],["python",r.k],["scss",r.o],["swift",r.q],["r",r.l],["razor",r.m],["ruby",r.n],["sql",r.p]]),a=new Map([[".rmd",".r"],[".sqlite",".sql"]]),getLanguageForExtension=(e,t)=>{var n;return null===(n=e.languages.getLanguages().find((e=>{var n;return null===(n=e.extensions)||void 0===n?void 0:n.includes(t.toLowerCase())})))||void 0===n?void 0:n.id},getLanguageForName=(e,t)=>{var n;const a=t.toLowerCase(),i=e.languages.getLanguages().find((e=>e.id===a))?a:getLanguageForExtension(e,`.${t.toLowerCase()}`);return i?null!==(n=o.get(i))&&void 0!==n?n:i:r.d},getLanguageForFile=(e,t)=>{var n;if(null!=t&&t.match(/\.min\./))return r.d;const i=(e=>{var t;const n=null==e?void 0:e.substring(e.lastIndexOf(".")).toLowerCase();return null!==(t=a.get(n))&&void 0!==t?t:n})(t);if(!i)return r.d;const c=getLanguageForExtension(e,i);return c?null!==(n=o.get(c))&&void 0!==n?n:c:r.d}},Ueeo:function(e,t,n){"use strict";var r=n("ODXe"),o=n("24Ii"),a=n.n(o),i=n("GL5z"),c=n("AW55"),s=n("hFGM"),u=n("YFq9");const d={start(e){const t=window.ASSETS_VERSION;if(!t)return;let n=!0;u.a.on("active",(()=>{n=!0}));const tryRequestAssetsVersion=()=>{const r=e*(n?1:10);(async()=>{const e=(await a.a.get("/assets_version").use(s.b).set("Cache-Control","no-cache,no-store,must-revalidate,max-age=-1,private").use(s.d)).body.value;e.match("assets-v")&&(t!==e&&(c.a.increment("mandatory_assets_version.refresh","client_refresh"),window.location.assign(window.location.href)),n=!1)})().catch((e=>i.a.error(e))).finally((()=>setTimeout(tryRequestAssetsVersion,r)))};setTimeout(tryRequestAssetsVersion,e)}},l=6e4,f=(()=>{const e=window.location.search.match(/pollFrequency=(\d+)/);if(e)try{return[0,e?parseInt(e[1],10):l]}catch(e){}return[l,l]})(),p=Object(r.a)(f,2),m=p[0],g=p[1];setTimeout((()=>{d.start(g)}),m)},UeuL:function(e,t,n){"use strict";var r=n("ODXe"),o=n("q1tI"),a=n("NnNw"),i=n("uGWv");const c=new(n("N0NO").a)(new Map([[i.b,()=>Promise.all([n.e(180),n.e(307)]).then(n.bind(null,"8cPy"))],[i.a,()=>Promise.all([n.e(180),n.e(308)]).then(n.bind(null,"LkG+"))],[i.c,()=>Promise.all([n.e(75),n.e(57),n.e(180),n.e(174),n.e(309),n.e(648)]).then(n.bind(null,"HD1I"))],[i.e,()=>Promise.all([n.e(180),n.e(310)]).then(n.bind(null,"WpQ5"))],[i.f,()=>Promise.all([n.e(294),n.e(180),n.e(309),n.e(311)]).then(n.bind(null,"he5L"))],[i.g,()=>Promise.all([n.e(180),n.e(312)]).then(n.bind(null,"XZln"))],[i.h,()=>Promise.all([n.e(180),n.e(313)]).then(n.bind(null,"l6/Q"))],[i.i,()=>Promise.all([n.e(180),n.e(314)]).then(n.bind(null,"KpSg"))],[i.j,()=>Promise.all([n.e(180),n.e(315)]).then(n.bind(null,"wSpk"))],[i.k,()=>Promise.all([n.e(180),n.e(316)]).then(n.bind(null,"C/bG"))],[i.l,()=>Promise.all([n.e(180),n.e(317)]).then(n.bind(null,"7pGr"))],[i.m,()=>Promise.all([n.e(180),n.e(318)]).then(n.bind(null,"lRUR"))],[i.n,()=>Promise.all([n.e(180),n.e(319)]).then(n.bind(null,"Cb8Q"))],[i.o,()=>Promise.all([n.e(180),n.e(174),n.e(320)]).then(n.bind(null,"F11e"))],[i.p,()=>Promise.all([n.e(180),n.e(321)]).then(n.bind(null,"vBLH"))],[i.q,()=>Promise.all([n.e(180),n.e(322)]).then(n.bind(null,"ncdu"))]]));t.a=(e,t,n)=>{const i=Object(o.useState)(),s=Object(r.a)(i,2),u=s[0],d=s[1],l=Object(o.useState)(),f=Object(r.a)(l,2),p=f[0],m=f[1];return Object(o.useEffect)((()=>{if(!t||!n)return;const r=t.getModel(),o=u,i=Object(a.a)(n,e);d(i),i&&(i!==o&&(n.editor.setModelLanguage(r,i),r.setEOL(n.editor.EndOfLineSequence.LF)),c.use(i,n).then(m))}),[t,e,u,n]),{id:u,registration:p}}},"VSi/":function(e,t,n){"use strict";n.d(t,"b",(function(){return arraysEqual})),n.d(t,"a",(function(){return arrayStartsWith})),n.d(t,"c",(function(){return getCenteredSubset})),n.d(t,"d",(function(){return isDefinedFilter}));const arraysEqual=(e,t)=>e.length===t.length&&e.every(((e,n)=>e===t[n])),arrayStartsWith=(e,t)=>{if(e.length<t.length)return!1;for(let n=0;n<t.length;n+=1)if(e[n]!==t[n])return!1;return!0};function getCenteredSubset(e,t,n){if(e.length<=n)return e;const r=t-(n-1)/2,o=Math.max(r,0),a=Math.min(o,e.length-n);return e.slice(a,a+n)}const isDefinedFilter=e=>!!e},YA6q:function(e,t,n){"use strict";n.d(t,"a",(function(){return genericRequest})),n.d(t,"b",(function(){return handleResponse}));var r=n("rePB"),o=n("cr+I"),a=n("tYyt"),i=n("GL5z"),c=n("eikI");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function genericRequest({endpoint:e,data:t={},query:n={},headers:r={},method:i="GET"}){const s=t&&Object.keys(t).length,u=t instanceof FormData;if(("GET"===i||"HEAD"===i)&&s)throw new Error("GET and HEAD requests do not have data objects, only query params are allowed, please make sure you're using the correct method");const d=_objectSpread(_objectSpread({},!u&&{"Content-Type":"application/json"}),{},{Accept:"application/json"},r),l=a.a.get("authenticity_token");l&&(d["X-CSRF-Token"]=l);const f=c.a.authenticationToken();f&&(d["X-Auth-Token"]=f);const p=`${e}${Object.keys(n).length?`?${Object(o.stringify)(n)}`:""}`;if(!fetch)throw new Error(["Oh no 😭 something is trying to fetch in the renderer!",JSON.stringify({fullURL:p,method:i})].join(" \n"));let m;return u?m=t:s&&(m=JSON.stringify(t)),fetch(p,{body:m,headers:d,method:i.toUpperCase(),credentials:"same-origin"})}function handleResponse({errorMessage:e,logAndSwallowErrors:t}){return function(n){if(!n.ok){if(i.a.error({message:`${e}, status: ${n.status}`}),t)return{};throw new Error(e||n.statusText)}try{return n.json()}catch(n){if(i.a.error({message:e}),t)return{};throw n}}}},YFq9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("fiWp"),o=n("oA68");class UserActivityEmitter extends r.EventEmitter{}const a=new UserActivityEmitter;o.a.init({idleTimeout:60,reportInterval:30,userTimingHandler:(...e)=>a.emit("timing",...e),eventHandler:()=>{a.emit("active")}}),a.riveted=o.a},Z8mt:function(e,t,n){"use strict";n.d(t,"a",(function(){return useCallOnce}));var r=n("ODXe"),o=n("q1tI");const useCallOnce=()=>{const e=Object(o.useState)(!0),t=Object(r.a)(e,2)[1];return e=>{t((t=>!!t&&(e(),!1)))}}},cdx9:function(e,t,n){"use strict";n.d(t,"a",(function(){return initializeReactBinder}));var r=n("MKeS"),o=n("q1tI"),a=n.n(o),i=n("i8i4"),c=n.n(i),s=n("GL5z");const u="data-react-class";const initializeReactBinder=async(e,t={})=>{await Object(r.b)();const n=[...document.querySelectorAll("[data-react-class]")];return Promise.all(n.map((async n=>{const r=n.getAttribute(u);let o=e[r];const i=t[r];if(i&&(o=await i()),o){const e=(()=>{try{var e,t;return JSON.parse((null===(e=document.getElementById("_INITIAL_REACT_PROPS_"))||void 0===e||null===(t=e.textContent)||void 0===t?void 0:t.trim())||"")}catch(e){return s.a.error(e),{}}})();n.innerHTML?c.a.hydrate(a.a.createElement(o,e),n):c.a.render(a.a.createElement(o,e),n)}})))}},dRey:function(e,t,n){"use strict";n.d(t,"b",(function(){return canViewCertificate})),n.d(t,"a",(function(){return addCompletion}));var r=n("YA6q");const canViewCertificate=(e,t)=>!!((e,t)=>Boolean(t&&!t.includes(e)))(e.id,t)&&!!e.certifiedAt,addCompletion=async({containerId:e,containerType:t,date:n})=>{const o=await Object(r.a)({endpoint:"/completions/add_completion",method:"POST",data:{container_id:e,container_type:t,date:n,achievement:!1}});return(await o.json()).completion}},fTi7:function(e,t,n){"use strict";n.d(t,"b",(function(){return enrollInCourse})),n.d(t,"c",(function(){return enrollInPath})),n.d(t,"d",(function(){return enrollInPathAndJourneyAndRedirect})),n.d(t,"a",(function(){return activateExperiment})),n.d(t,"e",(function(){return toggleOneTimeTrigger})),n.d(t,"h",(function(){return updatePassword})),n.d(t,"g",(function(){return updateGoalPreferences})),n.d(t,"f",(function(){return updateEmailPreferences})),n.d(t,"i",(function(){return updateUserInterfaceSettings}));var r=n("YA6q"),o=n("GL5z"),a=n("b0K7"),i=n("eikI");const enrollInCourse=({track_id:e,module_id:t,content_id:n})=>async()=>{try{await Object(r.a)({endpoint:"/learn/enroll",method:"POST",data:{container_type:"track",track_id:e,module_id:t,content_id:n}})}catch(e){o.a.error({message:`Unable to create course for user: ${e}`})}},enrollInPath=(e,t,n,a)=>async()=>{try{const o=(await Object(r.a)({endpoint:"/learn/enroll",method:"POST",data:{container_type:"path",path_id:e,path_name:t}})).ok?`/paths/${n}`:a;window.location.assign(o)}catch(e){o.a.error({message:`Unable to create path for user: ${e}`})}},tryToUnenroll=(e,t)=>Object(r.a)({endpoint:"/learn/unenroll",method:"POST",data:{containers:[{id:e,type:t}]}}),enrollInPathAndJourneyAndRedirect=(e,t,n,o,i)=>async()=>{if(!await(async e=>{try{var t;const n=await Object(r.a)({endpoint:"/learn/enroll",method:"POST",data:{container_type:"journey",journey_id:e}});return!!(n.ok||null!==(t=await n.json())&&void 0!==t&&t.error.includes("Already enrolled in journey"))}catch(e){return!1}})(n))return void window.location.assign(i);if(!await(async(e,t,n)=>{try{var o;const a=await Object(r.a)({endpoint:"/learn/enroll",method:"POST",data:{container_type:"path",path_id:e,path_name:t,redirect_strategy:n}});return!!(a.ok||null!==(o=await a.json())&&void 0!==o&&o.error.includes("Already enrolled in path"))}catch(e){return!1}})(e,t,"none"))return tryToUnenroll(n,"journey"),tryToUnenroll(e,"path"),void window.location.assign(i);window.location.assign(Object(a.t)(o))},activateExperiment=async e=>{try{var t;const n=await Object(r.a)({endpoint:"/experiments/assign",method:"POST",data:{use_optimizely:!0,experiment_handle:e}});if(!n.ok)return;return null!==(t=(await n.json()).group)&&void 0!==t?t:void 0}catch(e){return void o.a.error({message:`Unable to activate experiment for user: ${e}`})}},toggleOneTimeTrigger=async({name:e,unset:t=!1})=>{const n=t?"unmark_one_time_trigger":"mark_one_time_trigger";return Object(r.a)({endpoint:`/users/${i.a.id()}/${n}`,method:"POST",data:{name:e}}).catch((()=>o.a.error("Unable to toggle one time trigger")))},updatePassword=async e=>{const t=await Object(r.a)({data:{current_password:e.currentPassword,id:i.a.id(),password:e.password,password_confirmation:e.passwordConfirmation},endpoint:"/users/update_password",method:"POST"});return{ok:t.ok,message:(await t.json()).message}},updateGoalPreferences=async({targetDays:e})=>Object(r.a)({data:{target_days:e},endpoint:`/users/${i.a.id()}/target-settings`,method:"PUT"}).then(Object(r.b)({errorMessage:"Failed to update goal preferences",logAndSwallowErrors:!1})),updateEmailPreferences=({frequency:e,launchesAndUpdates:t,onboarding:n,progressUpdates:o,promotions:a,unsubscribedFromAll:c,timeframe:s,timezone:u})=>Object(r.a)({data:{coding_reminders_comms_frequency:e,coding_reminders_comms_timeframe:s,coding_reminders_comms_timezone:u,content_and_feature_comms:t,deals_and_promotions_comms:a,mail_silence:c,onboarding_comms:n,progress_update_comms:o},endpoint:`/users/${i.a.id()}/email-settings`,method:"PUT"}).then(Object(r.b)({errorMessage:"Failed to update email preferences",logAndSwallowErrors:!0})),updateUserInterfaceSettings=e=>Object(r.a)({data:{high_contrast:e.highContrast,screen_reader:e.screenReader,auto_close_tokens:e.autoCloseTokens,render_whitespace:e.renderWhitespace,editor_font_size:e.editorFontSize},endpoint:`/users/${i.a.id()}/interface-settings`,method:"PUT"}).then(Object(r.b)({errorMessage:"Failed to update interface settings",logAndSwallowErrors:!0}))},i2by:function(e,t,n){"use strict";n.d(t,"b",(function(){return isGoldExclusivePath})),n.d(t,"a",(function(){return getProExclusiveTextByPathGoal}));const isGoldExclusivePath=e=>{const t=e.goal,n=e.category_ids;return"career"===t||!(null==n||!n.includes("5f5a7a7019960100120d08cd"))},getProExclusiveTextByPathGoal=e=>`${"career"===e?"Career":"Interview prep skill"} paths are only available to Pro members. Upgrade now to unlock access.`},io5G:function(e,t,n){"use strict";n.d(t,"a",(function(){return matchesSelector}));const matchesSelector=(e,t)=>{const n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.msMatchesSelector||function(e){return-1!==Array.prototype.indexOf.call(document.querySelectorAll(e),this)}).call(e,t)}},jpEE:function(e,t,n){"use strict";n.d(t,"a",(function(){return beacon}));var r=n("GL5z"),o=n("eikI");const beacon=async(e,t)=>{try{var n,a;if(t.append("authentication_token",o.a.authenticationToken()),null!==(n=(a=navigator).sendBeacon)&&void 0!==n&&n.call(a,e,t))return Promise.resolve();const r={method:"POST",body:t};return"keepalive"in Request.prototype&&(r.keepalive=!0),await fetch(e,r)}catch(e){r.a.error(`Error in beacon: ${e}`)}}},omc6:function(e,t,n){"use strict";n.d(t,"a",(function(){return contentfulServiceRequest}));var r=n("YA6q");function contentfulServiceRequest({endpoint:e,data:t={},query:n={},method:o="GET",version:a=1,logAndSwallowErrors:i=!0}){const c=`/contentful/v${a}/${e}`;return Object(r.a)({endpoint:c,query:n,data:t,method:o}).then(Object(r.b)({logAndSwallowErrors:i,errorMessage:`Unable to fetch data from contentful endpoint: ${c}`}))}},rT0A:function(e,t,n){"use strict";n.d(t,"a",(function(){return isKnownSlowNetwork}));const r=new Set(["slow-2g","2g","3g"]);function isKnownSlowNetwork(){try{var e,t;const n=null!==(e=null!==(t=navigator.connection)&&void 0!==t?t:navigator.mozConnection)&&void 0!==e?e:navigator.webkitConnection;return r.has(null==n?void 0:n.effectiveType)}catch{return!1}}},tYyt:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const getCCDATA=()=>"undefined"!=typeof window&&window.CCDATA||{},r={get:(e,t)=>getCCDATA()[e]||t,has:e=>e in getCCDATA()}},uBVh:function(e,t,n){"use strict";n.d(t,"b",(function(){return extname})),n.d(t,"d",(function(){return shouldHideFileOrFolder})),n.d(t,"c",(function(){return shouldDisableFile})),n.d(t,"a",(function(){return contentEncoding}));const r=[/^\.(babelrc|env|gitignore|browserslistrc)$/],o=[/^\./,/^\/test/,/^\/spec/],a=[/\.sqlite$/];function patternMatch(e,t){return e.some((e=>t.match(e)))}const extname=e=>{if(e)return(e.split(".").slice(-1)[0]||"").toLowerCase()};function shouldHideFileOrFolder(e){return!patternMatch(r,e)&&!!patternMatch(o,e)}function shouldDisableFile(e){return!!patternMatch(a,e)}const contentEncoding=e=>{switch(e.toLowerCase()||""){case"jpg":case"jpeg":case"png":case"gif":return"base64";default:return"text"}}},uGWv:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return g})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"i",(function(){return w})),n.d(t,"m",(function(){return y}));const r="codecademy-css",o="plaintext",a="codecademy-go",i="codecademy-html",c="codecademy-java",s="codecademy-js",u="codecademy-php",d="codecademy-python",l="codecademy-r",f="codecademy-ruby",p="codecademy-scss",m="codecademy-sql",g="codecademy-swift",b="codecademy-cs",h="codecademy-cpp",w="codecademy-kotlin",y="codecademy-razor"},yHCd:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return isCareerJourneyPath}));const r=["4410c8cdd75f424b9a5b7c8aba6a03f5","0a2b8351134d481693db157ab362e282","7403724656554a5da64002440db8d5dc","466a6cef64cf4a2e8cbb26b826218f9a","62a9811b635a496b9f4e76939798c343","c26ec1b886e442a996d7bbd08afdf0bb"],o="5f7e644d833c070013ef47c4",isCareerJourneyPath=e=>r.includes(e)},z9go:function(e,t,n){"use strict";n.d(t,"b",(function(){return track})),n.d(t,"c",(function(){return trackUserClick})),n.d(t,"d",(function(){return trackUserImpression})),n.d(t,"e",(function(){return trackUserVisit})),n.d(t,"a",(function(){return p}));var r,o,a=n("rePB"),i=n("Y+p1"),c=n.n(i),s=n("zi0v"),u=n("GL5z");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=null===(r=window)||void 0===r||null===(o=r.location)||void 0===o?void 0:o.origin,l=Object(s.createTracker)({apiBaseUrl:d,verbose:!1});function track(e,t,n,r={}){l.event(e,t,_objectSpread(_objectSpread({},n),{},{source_codebase:"monolith"}),r)}const trackUserClick=e=>{track("user","click",e)},trackUserImpression=e=>{track("user","impression",e)};let f;const trackUserVisit=e=>{c()(e,f)?u.a.warn(`Consecutive trackUserVisit events fired with the same data: ${e.page_name}`):(f=e,track("user","visit",e))},p=l.pushDataLayerEvent},zHg5:function(e,t,n){"use strict";n.d(t,"a",(function(){return contentServiceV4Request}));var r=n("rePB"),o=n("YA6q"),a=n("GL5z");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const contentServiceV4Request=async({url:e="https://contentv4.staging-eks.codecademy.com/graphql",jwt:t,logAndSwallowErrors:n=!0,query:i,variables:c={},bypassCache:s})=>{const u=function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({Authorization:`Bearer ${t}`},s&&{"bypass-content-cache":!0}),d=await Object(o.a)({endpoint:e,data:{query:i,variables:c},headers:u,method:"POST"}),l=Object(o.b)({logAndSwallowErrors:n,errorMessage:"Unable to fetch data from content service v4."}),f=await l(d),p=f.errors,m=f.data;if(void 0!==m)return p&&a.a.error(`GraphQL errors: ${null==p?void 0:p.map((e=>e.message)).join("\n")}`),m;if(!n)throw new Error(`GraphQL errors: ${null==p?void 0:p.map((e=>e.message)).join("\n")}`);a.a.error(`GraphQL errors: ${null==p?void 0:p.map((e=>e.message)).join("\n")}`)}}}]);
//# sourceMappingURL=platform~e0fc7457.c3ad7543a4d8784208d8.chunk.js.map