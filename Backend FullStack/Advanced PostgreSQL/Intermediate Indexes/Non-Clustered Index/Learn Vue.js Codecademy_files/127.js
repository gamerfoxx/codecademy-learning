(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[127],{"6lR+":function(e,r,o){"use strict";o.d(r,"a",(function(){return LearningEnvironmentMain}));var t=o("mwIZ"),n=o.n(t),s=o("gZmR"),i=o("q1tI"),a=o.n(i),l=o("Ywbj"),p=o("rePB");function ownKeys(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(o),!0).forEach((function(r){Object(p.a)(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}const u="grid",d="one_pane",m="two_pane_col",c="two_pane_row",y="three_pane_col",v="three_pane_col_right",h="three_pane_row",C="CodeEditor",T="Narrative",P="OutputTerminal",b="SandboxOutputTerminal",O="Preview",f="ReadOnlyCodeEditor",E="ReplTerminal",g="SandboxCodeEditor",S="SQLPreview",A="Terminal",w="Visual",N={["PersistentCodeEditor"]:C,["Brief"]:T,["WebBrowser"]:O,["Image"]:w,["Video"]:w},j={"CodeEditor--Narrative--Preview--ReadOnlyCodeEditor":{layoutType:u,layoutProps:{gridType:h,narrativeComp:T,firstComp:C,secondComp:f,thirdComp:O}},"CodeEditor--Narrative--OutputTerminal--ReadOnlyCodeEditor":{layoutType:u,layoutProps:{gridType:h,narrativeComp:T,firstComp:C,secondComp:f,thirdComp:P}},"CodeEditor--Narrative--ReadOnlyCodeEditor--Terminal":{layoutType:u,layoutProps:{gridType:h,narrativeComp:T,firstComp:C,secondComp:f,thirdComp:A}},"CodeEditor--Narrative--OutputTerminal--Preview":{layoutType:u,layoutProps:{gridType:y,narrativeComp:T,firstComp:C,secondComp:P,thirdComp:O}},"CodeEditor--Narrative--Preview--Terminal":{layoutType:u,layoutProps:{gridType:y,narrativeComp:T,firstComp:C,secondComp:A,thirdComp:O}},"CodeEditor--Narrative--OutputTerminal--Terminal":{layoutType:u,layoutProps:{gridType:v,narrativeComp:T,firstComp:C,secondComp:P,thirdComp:A}},"CodeEditor--Narrative--OutputTerminal--Visual":{layoutType:u,layoutProps:{gridType:y,narrativeComp:T,firstComp:C,secondComp:P,thirdComp:w}},"CodeEditor--Narrative--Terminal--Visual":{layoutType:u,layoutProps:{gridType:y,narrativeComp:T,firstComp:C,secondComp:A,thirdComp:w}},"CodeEditor--Narrative--ReadOnlyCodeEditor":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:C,secondComp:f}},"CodeEditor--Narrative--Preview":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:C,secondComp:O}},"CodeEditor--Narrative--Visual":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:C,secondComp:w}},"CodeEditor--Narrative--OutputTerminal":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:C,secondComp:P}},"CodeEditor--Narrative--Terminal":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:C,secondComp:A}},"CodeEditor--Narrative--SQLPreview":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:C,secondComp:S}},"Narrative--Preview--Visual":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:O,secondComp:w}},"Narrative--OutputTerminal--Preview":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:P,secondComp:O}},"Narrative--Preview--Terminal":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:A,secondComp:O}},"Narrative--OutputTerminal--Visual":{layoutType:u,layoutProps:{gridType:c,narrativeComp:T,firstComp:w,secondComp:P}},"Narrative--Terminal--Visual":{layoutType:u,layoutProps:{gridType:c,narrativeComp:T,firstComp:w,secondComp:A}},"CodeEditor--Narrative":{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:C}},"Narrative--Preview":{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:O}},"Narrative--OutputTerminal":{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:P}},"Narrative--Terminal":{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:A}},"Narrative--Visual":{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:w}},"Narrative--SQLPreview":{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:S}},"ExpoCodeEditor--ExpoPreview--Narrative":{layoutType:u,layoutProps:{gridType:m,narrativeComp:T,firstComp:"ExpoCodeEditor",secondComp:"ExpoPreview"}},Preview:{layoutType:u,layoutProps:{gridType:d,firstComp:O}},"Preview--SandboxCodeEditor":{layoutType:u,layoutProps:{gridType:m,firstComp:g,secondComp:O}},"ReplTerminal--SandboxCodeEditor":{layoutType:u,layoutProps:{gridType:m,firstComp:g,secondComp:E}},"SandboxCodeEditor--SandboxOutputTerminal":{layoutType:u,layoutProps:{gridType:m,firstComp:g,secondComp:b}},"SandboxCodeEditor--Terminal":{layoutType:u,layoutProps:{gridType:m,firstComp:g,secondComp:A}},"SandboxCodeEditor--SandboxOutputTerminal--Terminal":{layoutType:u,layoutProps:{gridType:v,firstComp:g,secondComp:b,thirdComp:A}},"ReplTerminal--SandboxCodeEditor--SandboxOutputTerminal":{layoutType:u,layoutProps:{gridType:v,firstComp:g,secondComp:b,thirdComp:E}},default:{layoutType:u,layoutProps:{gridType:d,narrativeComp:T,firstComp:null}}};function mapComponentsToLayoutConfig(e){const r=Object.keys(e),o=function buildCompString(e){return e.map((e=>N[e]||e)).sort().join("--")}(r);return function reverseConfigAliases(e,r){const o=Object.keys(e.layoutProps),t=Object.values(e.layoutProps),n=_objectSpread(_objectSpread({},e),{},{layoutProps:_objectSpread({},e.layoutProps)});return r.filter((e=>!t.includes(e))).forEach((e=>{const r=N[e],s=t.indexOf(r),i=o[s];n.layoutProps[i]=e})),n}(j[o]||j.default,r)}var k=o("R/ly"),_=o("V9qV"),q=o("/MKj"),R=o("z9go"),L=o("R/8o"),x=o("QiT0"),B=o("/mqS"),V=o("jY6L"),W=o("6jKE");const LearningComponentBuilder=({availableComponents:e,slotPath:r,name:o,shouldShowCheckWorkButton:t,shouldPreventCheckpointsOnTerminalCommand:n,showErrors:s})=>{const l=Object(L.b)().receiveActiveSlotPath,p=Object(q.useSelector)(V.c),u=Object(i.useCallback)((()=>{l(r),Object(R.c)({target:"toggle_le_fullscreen",slug:r.toString(),page_name:p})}),[r,p,l]),d=e[o];if(null==d||!d.type)return null;const m=x.a[d.type];return a.a.createElement(W.a,{componentName:o,slotPath:r},a.a.createElement(m,{shouldShowCheckWorkButton:Boolean(t),config:d,shouldPreventCheckpointsOnTerminalCommand:Boolean(n),toggleFullScreen:u}),s&&a.a.createElement(B.a,null))};var LayoutManager_GridManager=({layoutProps:{gridType:e,narrativeComp:r,firstComp:o,secondComp:t,thirdComp:n},components:s,shouldShowCheckWorkButton:i,shouldPreventCheckpointsOnTerminalCommand:l,hideErrors:p=!1})=>{const buildLearningComponent=(e,r,o=!1)=>a.a.createElement(LearningComponentBuilder,{availableComponents:s,slotPath:e,name:r,shouldShowCheckWorkButton:i,shouldPreventCheckpointsOnTerminalCommand:l,showErrors:o});return a.a.createElement(_.a,{gridType:e,narrativePane:r&&buildLearningComponent([k.a.narrative],r),firstPane:e=>buildLearningComponent(e,o,!p),secondPane:e=>buildLearningComponent(e,t),slotPath:[k.a.root],thirdPane:e=>buildLearningComponent(e,n)})};const LayoutManager=({components:e,shouldShowCheckWorkButton:r,shouldPreventCheckpointsOnTerminalCommand:o,hideErrors:t=!1})=>{const n=mapComponentsToLayoutConfig(e),s=n.layoutType,i=n.layoutProps;return"grid"!==s?null:a.a.createElement(LayoutManager_GridManager,{layoutProps:i,components:e,shouldShowCheckWorkButton:r,shouldPreventCheckpointsOnTerminalCommand:o,hideErrors:t})};var D="componentGrid__29fptvG6AAmYFk12IG1e55";const LearningEnvironmentMain=({components:e,hideErrors:r=!1,title:o})=>{const shouldPreventCheckpointsOnTerminalCommand=()=>!0===n()(e.Terminal,"prevent_checkpoint_run");return Object(l.b)(),a.a.createElement("div",{className:D},o&&a.a.createElement(s.a,{as:"h1"},o),a.a.createElement(LayoutManager,{components:e,shouldShowCheckWorkButton:shouldPreventCheckpointsOnTerminalCommand()&&(!e.PersistentCodeEditor||!0===n()(e.PersistentCodeEditor,"no_run_button")),shouldPreventCheckpointsOnTerminalCommand:shouldPreventCheckpointsOnTerminalCommand(),hideErrors:r}))}},QiT0:function(e,r,o){"use strict";o.d(r,"a",(function(){return s}));var t=o("MKeS");const n=Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-PersistentCodeEditor",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(596),o.e(103),o.e(208),o.e(145),o.e(8),o.e(370),o.e(466)]).then(o.bind(null,"8nqx")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"8nqx"}}),s={Brief:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-ProjectBrief",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(236),o.e(151),o.e(460),o.e(456),o.e(108),o.e(467)]).then(o.bind(null,"8YOW")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"8YOW"}}),ExpoCodeEditor:n,ExpoPreview:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-ExpoReactNativePreview",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(497),o.e(145),o.e(6),o.e(461)]).then(o.bind(null,"kIVY")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"kIVY"}}),Image:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-Image",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(53),o.e(165),o.e(462)]).then(o.bind(null,"D4LY")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"D4LY"}}),Narrative:Object(t.a)({resolved:{},chunkName:()=>"ExerciseNarrative",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(515),o.e(454)]).then(o.bind(null,"TQgb")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"TQgb"}}),OutputTerminal:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-OutputTerminal",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(145),o.e(15),o.e(124),o.e(44)]).then(o.bind(null,"zrGY")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"zrGY"}}),PersistentCodeEditor:n,ReadOnlyCodeEditor:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-ReadOnlyCodeEditor",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(364),o.e(235),o.e(469)]).then(o.bind(null,"Vy33")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"Vy33"}}),ReplTerminal:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-ReplTerminal",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(206),o.e(110),o.e(452),o.e(474)]).then(o.bind(null,"XAD/")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"XAD/"}}),SandboxCodeEditor:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-SandboxCodeEditor",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(82),o.e(232)]).then(o.bind(null,"5T2n")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"5T2n"}}),SandboxOutputTerminal:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-OutputTerminal-SandboxOutputTerminal",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(145),o.e(15),o.e(124),o.e(464)]).then(o.bind(null,"f8lt")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"f8lt"}}),SQLPreview:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-SQLPreview",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(145),o.e(6),o.e(56),o.e(100)]).then(o.bind(null,"vQS+")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"vQS+"}}),Terminal:Object(t.a)({resolved:{},chunkName:()=>"Terminal-TerminalContainer",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(206),o.e(110),o.e(115),o.e(398),o.e(452),o.e(476)]).then(o.bind(null,"exLW")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"exLW"}}),Video:Object(t.a)({resolved:{},chunkName:()=>"LayoutComponents-Video",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(248),o.e(475)]).then(o.bind(null,"ZX/S")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"ZX/S"}}),WebBrowser:Object(t.a)({resolved:{},chunkName:()=>"platform-components-WebBrowser-WebBrowserContainer",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!o.m[r]},importAsync:()=>Promise.all([o.e(2),o.e(596),o.e(103),o.e(208),o.e(206),o.e(268),o.e(6),o.e(8),o.e(370),o.e(115),o.e(78),o.e(137)]).then(o.bind(null,"mf31")),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return o(r)},resolve(){return"mf31"}})}}}]);
//# sourceMappingURL=127.061470369f328c64eb06.chunk.js.map