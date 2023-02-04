"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4674],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(2962),a=r(2742),i=(r(9496),r(9613)),o=["components"],p={id:"pack",title:"pnpm pack"},c=void 0,l={unversionedId:"cli/pack",id:"version-6.x/cli/pack",title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/zh-TW/6.x/cli/pack",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-6.x/docs",previous:{title:"pnpm publish",permalink:"/zh-TW/6.x/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/zh-TW/6.x/cli/recursive"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a tarball from a package."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \u5c07\u4fdd\u5b58 tarball \u7684\u8cc7\u6599\u593e\u3002 \u9810\u8a2d\u503c\u70ba\u7576\u524d\u5de5\u4f5c\u8cc7\u6599\u593e\u3002"))}f.isMDXComponent=!0}}]);