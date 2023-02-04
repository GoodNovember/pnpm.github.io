"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5171],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(2962),l=t(2742),o=(t(9496),t(9613)),a=["components"],i={id:"env",title:"pnpm env <cmd>"},p=void 0,s={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Mengelola lingkungan Node.js.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/id/next/cli/env",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/id/next/cli/start"},next:{title:"pnpm publish",permalink:"/id/next/cli/publish"}},u={},c=[{value:"Perintah",id:"perintah",level:2},{value:"use",id:"use",level:3},{value:"remove, rm",id:"remove-rm",level:3},{value:"list, ls",id:"list-ls",level:3},{value:"Opsi",id:"opsi",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mengelola lingkungan Node.js."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"perintah"},"Perintah"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Instal dan gunakan versi Node.js yang ditentukan"),(0,o.kt)("p",null,"Instal versi LTS dari Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Instal Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Instal versi pra-rilis Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Instal versi terbaru Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h3",{id:"remove-rm"},"remove, rm"),(0,o.kt)("p",null,"Added in: v7.10.0"),(0,o.kt)("p",null,"Removes the specified version of Node.JS."),(0,o.kt)("p",null,"Usage example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env remove --global 14.0.0\n")),(0,o.kt)("h3",{id:"list-ls"},"list, ls"),(0,o.kt)("p",null,"Added in: v7.16.0"),(0,o.kt)("p",null,"List Node.js versions available locally or remotely."),(0,o.kt)("p",null,"Print locally installed versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list\n")),(0,o.kt)("p",null,"Print remotely available Node.js versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote\n")),(0,o.kt)("p",null,"Print remotely available Node.js v16 versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote 16\n")),(0,o.kt)("h2",{id:"opsi"},"Opsi"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Perubahan dilakukan di seluruh sistem."))}m.isMDXComponent=!0}}]);