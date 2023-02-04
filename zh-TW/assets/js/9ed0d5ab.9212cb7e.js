"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7684],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),f=a,y=u["".concat(l,".").concat(f)]||u[f]||m[f]||p;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6194:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=t(2962),a=t(2742),p=(t(9496),t(9613)),o=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"version-7.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml \u5b9a\u7fa9\u4e86 workspace \u4e14\u80fd\u5920\u8b93\u60a8\u8a2d\u5b9a\u5de5\u4f5c\u5340\u4e2d\u5305\u542b/\u6392\u9664\u7684\u76ee\u9304\u3002 \u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5957\u4ef6\u4e2d\u7684\u6240\u6709\u5b50\u76ee\u9304\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/zh-TW/pnpm-workspace_yaml",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-7.x/docs",previous:{title:".npmrc",permalink:"/zh-TW/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/zh-TW/pnpmfile"}},s={},m=[],u={toc:m};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u5b9a\u7fa9\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/workspaces"},"workspace")," \u4e14\u80fd\u5920\u8b93\u60a8\u8a2d\u5b9a\u5de5\u4f5c\u5340\u4e2d\u5305\u542b/\u6392\u9664\u7684\u76ee\u9304\u3002 \u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5957\u4ef6\u4e2d\u7684\u6240\u6709\u5b50\u76ee\u9304\u3002"),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in direct subdirs of packages/\n  - 'packages/*'\n  # all packages in subdirs of components/\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,p.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u4e86\u842c\u7528\u5b57\u6e90\u81ea\u5b9a\u7fa9\u4f4d\u7f6e\uff0c\u6839\u76ee\u9304\u4e2d\u7684\u5957\u4ef6\u9084\u662f\u6703\u88ab\u5305\u542b\u5728\u5167\u3002"))}f.isMDXComponent=!0}}]);