"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8846],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(2848),a=n(9213),i=(n(9496),n(9613)),p=["components"],c={id:"patch",title:"pnpm patch <pkg>"},o=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"Added in: v7.4.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/tr/next/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/tr/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/tr/next/cli/patch-commit"}},u={},s=[],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v7.4.0"),(0,i.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,i.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,i.kt)("p",null,"Once you're done with your changes, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,i.kt)("a",{parentName:"p",href:"/tr/next/package_json#pnpmpatcheddependencies"},(0,i.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."))}d.isMDXComponent=!0}}]);