"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6976],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),i=["components"],a={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-7.x/cli/prune",title:"pnpm prune",description:"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u5957\u4ef6",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/zh-TW/cli/prune",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-7.x/docs",previous:{title:"pnpm rebuild",permalink:"/zh-TW/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/zh-TW/cli/fetch"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u5957\u4ef6"),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,"\u79fb\u9664\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u6307\u5b9a\u7684\u5957\u4ef6\u3002"),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"\u79fb\u9664\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u6307\u5b9a\u7684\u5957\u4ef6\u3002"),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"prune \u547d\u4ee4\u76ee\u524d\u4e0d\u652f\u6301\u5728 monorepo \u4e0a\u905e\u8ff4\u57f7\u884c\u3002 \u8981\u50c5\u5728 monorepo \u4e2d\u5b89\u88dd production \u4f9d\u8cf4\u9805\uff0c\u53ef\u4ee5\u522a\u9664 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u6587\u4ef6\u593e\uff0c\u7136\u5f8c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"\u91cd\u65b0\u5b89\u88dd\u3002")))}m.isMDXComponent=!0}}]);