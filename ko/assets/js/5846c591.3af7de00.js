"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1621],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=i,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(2962),i=n(2742),a=(n(9496),n(9613)),o=["components"],p={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-7.x/cli/patch",title:"pnpm patch <pkg>",description:"\ubc84\uc804 7.4.0\uc5d0\uc11c \ucd94\uac00\ub428",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/ko/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/ko/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/ko/cli/patch-commit"}},d={},u=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ubc84\uc804 7.4.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,a.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,a.kt)("p",null,"Once you're done with your changes, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,a.kt)("a",{parentName:"p",href:"/ko/package_json#pnpmpatcheddependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,a.kt)("p",null,"Added in: v7.11.0"),(0,a.kt)("p",null,"The package that needs to be patched will be extracted to this directory."),(0,a.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,a.kt)("p",null,"Added in: v7.25.0"),(0,a.kt)("p",null,"Ignore existing patch files when patching."))}m.isMDXComponent=!0}}]);