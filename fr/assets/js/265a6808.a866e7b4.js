"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9148],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||p;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<p;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(2848),o=t(9213),p=(t(9496),t(9613)),a=["components"],l={id:"only-allow-pnpm",title:"Autoriser uniquement pnpm"},i=void 0,u={unversionedId:"only-allow-pnpm",id:"version-7.x/only-allow-pnpm",title:"Autoriser uniquement pnpm",description:"Quand tu utilises pnpm sur un projet, tu ne veux pas que les autres d\xe9veloppeurs ex\xe9cute accidentellement npm install ou yarn. Pour emp\xeacher les d\xe9veloppeurs d'utiliser d'autres gestionnaires de paquets, tu peux additionner ce script preinstall \xe0 votre package.json:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/only-allow-pnpm.md",sourceDirName:".",slug:"/only-allow-pnpm",permalink:"/fr/only-allow-pnpm",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"only-allow-pnpm",title:"Autoriser uniquement pnpm"}},s={},c=[],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Quand tu utilises pnpm sur un projet, tu ne veux pas que les autres d\xe9veloppeurs ex\xe9cute accidentellement ",(0,p.kt)("inlineCode",{parentName:"p"},"npm install")," ou ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn"),". Pour emp\xeacher les d\xe9veloppeurs d'utiliser d'autres gestionnaires de paquets, tu peux additionner ce script ",(0,p.kt)("inlineCode",{parentName:"p"},"preinstall")," \xe0 votre ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "preinstall": "npx only-allow pnpm"\n    }\n}\n')),(0,p.kt)("p",null,"Maintenant, quand quelqu'un ex\xe9cute ",(0,p.kt)("inlineCode",{parentName:"p"},"npm install")," ou ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn"),", iels vont recevoir une erreur et l'installation ne vais pas continuer."),(0,p.kt)("p",null,"Si tu utilises npm v7, utilise ",(0,p.kt)("inlineCode",{parentName:"p"},"npx -y")," au lieu."))}d.isMDXComponent=!0}}]);