(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[8],{"9IZE":function(e,a,t){"use strict";t.d(a,"a",(function(){return AuthoringWorkspaceSlugModal}));var l=t("ODXe"),r=t("QqFe"),n=t("1qqs"),o=t("q1tI"),u=t.n(o),s=t("yrBZ"),c=t("uQrA"),p=t("uz3z");const createLabel=(e,a)=>u.a.createElement(s.b,{column:!0},e,u.a.createElement(c.a,{as:"code"},a)),i="custom",WorkspaceSlugForm=({generatedWorkspaceSlug:e="",handleRenameWorkspace:a,workspaceSlug:t=""})=>{const r=Object(o.useState)(),n=Object(l.a)(r,2),s=n[0],c=[{label:"Workspace Slug Value",name:"workspaceSlug",onUpdate:n[1],options:[{label:createLabel("Current Workspace Slug",t),value:t},...e&&e!==t?[{label:createLabel("Generated Workspace Slug",e),value:e}]:[],{label:"Custom Slug",value:i}],size:12,type:"radio-group",validation:{required:"You gotta pick one!"}},{defaultValue:t,disabled:s!==i,label:"Custom Slug Value",name:"customSlug",size:12,type:"text"}];return u.a.createElement(p.GridForm,{fields:c,submit:{contents:"Save",size:6},onSubmit:e=>{a(e.workspaceSlug===i?e.customSlug:e.workspaceSlug)}})},AuthoringWorkspaceSlugModal=({handleRenameWorkspace:e,workspaceSlug:a,generatedWorkspaceSlug:t})=>{const s=Object(o.useState)(!1),c=Object(l.a)(s,2),p=c[0],i=c[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(r.b,{onClick:()=>i(!0),variant:"secondary"},"Save Workspace"),u.a.createElement(n.b,{isOpen:p,onRequestClose:()=>i(!1),minWidth:256,px:64,py:16,title:"Workspace Slug Chooser"},u.a.createElement(WorkspaceSlugForm,{generatedWorkspaceSlug:t,handleRenameWorkspace:a=>{e(a),i(!1)},workspaceSlug:a})))}}}]);
//# sourceMappingURL=8.b7199de5f0ce57bed2e5.chunk.js.map