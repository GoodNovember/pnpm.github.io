"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1923],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(2962),i=n(2742),o=(n(9496),n(9613)),s=["components"],a={id:"limitations",title:"Limitations"},l=void 0,p={unversionedId:"limitations",id:"limitations",title:"Limitations",description:"1. npm-shrinkwrap.json et package-lock.json sont ignor\xe9s. Contrairement \xe0 pnpm, npm peut installer le m\xeame nom@version plusieurs fois et avec diff\xe9rents ensembles de d\xe9pendances. Le lockfile d'npm est con\xe7u pour refl\xe9ter la disposition plate de node_modules, cependant, comme pnpm cr\xe9e une disposition isol\xe9e par d\xe9faut, il ne peut pas respecter le format du lockfile d'npm. Voir pnpm import si vous souhaitez convertir un lockfile au format de pnpm.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/fr/next/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"docs",previous:{title:"Logos",permalink:"/fr/next/logos"},next:{title:"Symlinked `node_modules` structure",permalink:"/fr/next/symlinked-node-modules-structure"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," et ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," sont ignor\xe9s. Contrairement \xe0 pnpm, npm peut installer le m\xeame ",(0,o.kt)("inlineCode",{parentName:"li"},"nom@version")," plusieurs fois et avec diff\xe9rents ensembles de d\xe9pendances. Le lockfile d'npm est con\xe7u pour refl\xe9ter la disposition plate de ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),", cependant, comme pnpm cr\xe9e une disposition isol\xe9e par d\xe9faut, il ne peut pas respecter le format du lockfile d'npm. Voir ",(0,o.kt)("a",{parentName:"li",href:"/fr/next/cli/import"},"pnpm import")," si vous souhaitez convertir un lockfile au format de pnpm."),(0,o.kt)("li",{parentName:"ol"},"Les binstubs (fichiers dans ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") sont toujours des fichiers shell, et non liens symboliques vers des fichiers JS. Ces fichiers shell sont cr\xe9\xe9s pour aider les applications CLI enfichable \xe0 trouver leurs plugins dans la structure inhabituelle de ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". Ceci est tr\xe8s rarement un probl\xe8me et si vous vous attendez \xe0 ce que le fichier soit un fichier JS, r\xe9f\xe9rencez directement le fichier d'origine, comme d\xe9crit dans ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,o.kt)("p",null,"Vous avez une id\xe9e des solutions pour ces probl\xe8mes? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Partagez-les.")))}d.isMDXComponent=!0}}]);