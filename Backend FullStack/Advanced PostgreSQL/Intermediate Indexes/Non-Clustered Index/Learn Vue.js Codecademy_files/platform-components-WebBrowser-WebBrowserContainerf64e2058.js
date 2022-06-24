(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[137],{mf31:function(e,r,t){"use strict";t.r(r),t.d(r,"WebBrowserContainer",(function(){return WebBrowserContainer}));var o=t("q1tI"),a=t.n(o),n=t("/MKj"),l=t("tLXD"),s=t("z9go"),c=t("jY6L"),i=t("VmES"),u=t("yxtj"),b=t("c2gB"),w=t("DZdY"),d=t("yrBZ"),B=t("QqFe"),f=t("hsiM"),g=t("9GW+"),h=t("7mab"),m=t("1Wj3"),p=t("qwNl"),j=t("630U"),O=t("gtj7"),E=t("xclP"),y=t("KKCq"),C=t("S6PG"),_=t("2oex"),L=t("GwnQ"),U=t("bCom");const BrowserFooter=()=>"jupyter"===Object(n.useSelector)(_.w)?a.a.createElement(U.a,{submitMode:L.d.TestOnly,showRunButton:!0,showCopyButton:!1}):null;var k=t("4sI8");const v=Object(w.a)("input",{target:"e1a735o50",label:"URLInput"})("background-color:transparent;color:",Object(j.B)("colors.text"),";padding-left:",Object(j.B)("spacing.12"),";flex:1;height:40px;font-size:",Object(j.B)("fontSize.14"),";white-space:nowrap;line-height:40px;border:1px solid ",Object(j.B)("colors.background"),";position:relative;&:focus{outline:0;}"),ThemedWebBrowser=e=>{const r=e.urlBarRef,t=e.browserRef,l=e.bindBrowserListener,i=e.onUrlBarKeyDown,u=e.onUrlBarChange,b=e.onBack,w=e.onRefresh,j=e.onBrowserLoad,_=e.onBrowserError,L=e.onBrowserMessage,U=e.showBrowserBar,x=void 0===U||U,R=e.showPreviewButton,D=e.isBlank,S=e.isReady,M=e.isLoading,z=e.src,K=e.refreshCount,P=e.displayUrl,A=void 0===P?"":P,G=e.toggleFullScreen,I=Object(n.useSelector)(c.c),T=Object(o.useCallback)((()=>{Object(s.c)({target:"preview_browser",page_name:I})}),[I]);if(!S)return a.a.createElement(d.b,{height:"100%",bg:"gray-900",alignItems:"center",justifyContent:"center"},a.a.createElement(C.a,null));let W;W=D?a.a.createElement(E.a,{theme:"dark",componentName:"Web Browser",icon:f.a}):a.a.createElement(k.a,{src:z,onBrowserLoad:j,onBrowserMessage:L,onBrowserError:_,bindBrowserListener:l,refreshCount:K,ref:t});const q=a.a.createElement(d.b,{bg:"shadow-solid",height:"3rem",alignItems:"center"},a.a.createElement(B.c,{"aria-label":"Previous Browser Page",mx:8,icon:g.a,size:"small",onClick:b}),a.a.createElement(B.c,{"aria-label":"Refresh Browser Page",mx:8,icon:h.a,size:"small",onClick:w}),a.a.createElement(d.b,{alignItems:"center",justifyContent:"center",flexGrow:1,pr:12},a.a.createElement(v,{"aria-label":"URL input",type:"text",value:A,ref:r,placeholder:"Type URL here",onKeyDown:i,onChange:u}),M&&a.a.createElement(y.a,null)),G&&a.a.createElement(B.c,{"aria-label":"Toggle fullscreen",icon:m.a,mx:8,onClick:G,size:"small"}),R&&a.a.createElement(B.c,{"aria-label":"Open in new tab",mx:8,icon:p.a,onClick:T,size:"small",target:"_blank",href:Object(O.a)(window.location.href,{preview:!0})}));return a.a.createElement(d.b,{flexGrow:1,flexDirection:"column",borderWidthLeft:1,borderLeft:"solid",borderColor:"navy-600"},x&&q,a.a.createElement(d.b,{flexGrow:1,bg:"white",flexDirection:"column"},W),a.a.createElement(BrowserFooter,null))},WebBrowserContainer=({onLoad:e=(()=>{}),config:{display_url:r,hide_browser_bar:t,show_preview_button:w}={display_url:i.a},toggleFullScreen:d})=>{const B=Object(b.c)(),f=B.ready,g=B.host,h=B.createBrowser,m=B.browser,p=void 0===m?{}:m,j=B.changeCounter,O=B.refreshBrowser,E=B.setBrowserUrlBar,y=B.pushBrowserLocation,C=B.navigateBrowserBack,_=B.loadBrowserSuccess,L=B.initializeBrowser,U=B.respondToBrowserMessage,k=p.init,v=p.loading,x=p.refreshCount,R=p.location,D=void 0===R?{}:R,S=p.urlBarValue,M=p.hosts,z=(void 0===M?{}:M).internalUrl,K=D.displayUrl,P=D.internalUrl,A=Object(o.useRef)(null),G=Object(o.useRef)(null),I=Object(o.useRef)(),T=I.current,W=null==p?void 0:p.message,q=Object(l.a)(W),F=Object(n.useSelector)(c.c),trackBrowserClick=e=>{Object(s.c)({target:e,page_name:F})},N=q===W&&W,H=Object(o.useMemo)((()=>!new RegExp(z,"g").test(P)),[z,P]),Q=Object(o.useMemo)((()=>P),[x,j]),V=Object(o.useCallback)((e=>E(e.target.value)),[E]),Y=Object(o.useCallback)((e=>{13===e.keyCode&&y({url:S,urlType:"displayUrl"})}),[S,y]),Z=Object(o.useCallback)((()=>{e(),_()}),[_,e]),X=Object(o.useCallback)((e=>{const r=e.data,t=e.origin;if(z.includes(t))return W&&Object(u.d)(r)?U(W,r):r.location?y({url:r.location,urlType:"internalUrl"}):void 0}),[z,W,U,y]),J=Object(o.useCallback)((e=>(I.current=e,()=>I.current=void 0)),[I]);return Object(o.useEffect)((()=>{h()}),[h]),Object(o.useEffect)((()=>{f&&g&&p&&!z&&L({hosts:{internalUrl:g},location:{displayUrl:r}})}),[f,g,r,p,z,L]),Object(o.useEffect)((()=>{g&&L({hosts:{internalUrl:g},location:{displayUrl:r}})}),[r,g,L]),Object(o.useEffect)((()=>{k&&O()}),[j,k,O]),Object(o.useEffect)((()=>{T&&N&&!v&&!H&&T(W.data)}),[N,T,v,H,W]),a.a.createElement(ThemedWebBrowser,{urlBarRef:A,browserRef:G,bindBrowserListener:J,onUrlBarKeyDown:Y,onUrlBarChange:V,onBack:()=>{trackBrowserClick("back_button_output"),C()},onRefresh:()=>{trackBrowserClick("refresh_output"),O()},onBrowserLoad:Z,onBrowserError:()=>{},onBrowserMessage:X,isBlank:!K||!P,isReady:f,isLoading:v,src:Q,showBrowserBar:!t,showPreviewButton:!!w,displayUrl:S,refreshCount:x,toggleFullScreen:d})};r.default=WebBrowserContainer}}]);
//# sourceMappingURL=platform-components-WebBrowser-WebBrowserContainer~f64e2058.7d87e8c2c386644112b9.chunk.js.map