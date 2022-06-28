"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1901],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(a,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,l=new Array(p);l[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(2848),o=r(9213),p=(r(9496),r(9613)),l=["components"],i={id:"deploy",title:"pnpm deploy"},a=void 0,c={unversionedId:"cli/deploy",id:"version-7.x/cli/deploy",title:"pnpm deploy",description:"Added in: v7.4.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/zh/cli/deploy",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"version-7.x/docs",previous:{title:"pnpm init",permalink:"/zh/cli/init"},next:{title:"package.json",permalink:"/zh/package_json"}},u={},s=[],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Added in: v7.4.0"),(0,p.kt)("p",null,":::\u8b66\u544a"),(0,p.kt)("p",null,"This command is experimental"),(0,p.kt)("p",null,":::"),(0,p.kt)("p",null,"Deploy a package from a workspace."),(0,p.kt)("p",null,"Usage:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")))}m.isMDXComponent=!0}}]);