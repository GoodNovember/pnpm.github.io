"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9880],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(2962),o=r(2742),i=(r(9496),r(9613)),l=["components"],a={id:"root",title:"pnpm root"},c=void 0,p={unversionedId:"cli/root",id:"cli/root",title:"pnpm root",description:"Prints the effective modules directory.",source:"@site/docs/cli/root.md",sourceDirName:"cli",slug:"/cli/root",permalink:"/next/cli/root",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/root.md",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1633650459,formattedLastUpdatedAt:"Oct 7, 2021",frontMatter:{id:"root",title:"pnpm root"},sidebar:"docs",previous:{title:"pnpm store",permalink:"/next/cli/store"},next:{title:"pnpm bin",permalink:"/next/cli/bin"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Prints the effective modules directory."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"The global package's modules directory is printed."))}f.isMDXComponent=!0}}]);