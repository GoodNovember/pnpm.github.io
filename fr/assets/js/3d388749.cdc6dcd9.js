"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1846],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(2962),r=n(2742),s=(n(9496),n(9613)),a=["components"],i={id:"motivation",title:"Motivation"},l=void 0,u={unversionedId:"motivation",id:"version-6.x/motivation",title:"Motivation",description:"\xc9conomiser de l'espace disque et booster la vitesse d'installation",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/fr/6.x/motivation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"version-6.x/docs",next:{title:"Installation",permalink:"/fr/6.x/installation"}},d={},p=[{value:"\xc9conomiser de l&#39;espace disque et booster la vitesse d&#39;installation",id:"\xe9conomiser-de-lespace-disque-et-booster-la-vitesse-dinstallation",level:2},{value:"Cr\xe9ation d&#39;un dossier node_modules non plat",id:"cr\xe9ation-dun-dossier-node_modules-non-plat",level:2}],c={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\xe9conomiser-de-lespace-disque-et-booster-la-vitesse-dinstallation"},"\xc9conomiser de l'espace disque et booster la vitesse d'installation"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,s.kt)("img",{src:n(8401).Z,width:"2500",height:"1406"}))),(0,s.kt)("p",null,"Lorsque vous utilisez npm ou Yarn, si vous avez 100 projets utilisant une d\xe9pendance, vous aurez 100 copies de cette d\xe9pendance enregistr\xe9es sur le disque. Avec pnpm, la d\xe9pendance sera stock\xe9e dans un stockage adressable au contenu, donc:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Si vous d\xe9pendez de diff\xe9rentes versions de la d\xe9pendance, seuls les fichiers qui diff\xe8rent sont ajout\xe9s au stockage. Par exemple, si elle a 100 fichiers, et qu'une nouvelle version a un changement dans un seul de ces fichiers, ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm update")," ajoutera seulement 1 nouveau fichier au stockage, au lieu de cloner la d\xe9pendance toute enti\xe8re juste pour un seul changement."),(0,s.kt)("li",{parentName:"ol"},"Tous les fichiers sont enregistr\xe9s en un seul endroit sur le disque. Lorsque des packages sont install\xe9s, leurs fichiers sont li\xe9s directement \xe0 partir de cet emplacement unique, ne consommant aucun espace disque suppl\xe9mentaire. Cela vous permet de partager les d\xe9pendances de m\xeame version entre les projets.")),(0,s.kt)("p",null,"En cons\xe9quence, vous \xe9conomisez beaucoup d'espace sur votre disque proportionnellement au nombre de projets et de d\xe9pendances, et vous avez des installations beaucoup plus rapides !"),(0,s.kt)("h2",{id:"cr\xe9ation-dun-dossier-node_modules-non-plat"},"Cr\xe9ation d'un dossier node_modules non plat"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,s.kt)("img",{src:n(7733).Z,width:"2920",height:"1392"}))),(0,s.kt)("p",null,"Lors de l'installation de d\xe9pendances avec npm ou Yarn Classic, tous les paquets sont remont\xe9s \xe0 la racine du dossier des modules. Par cons\xe9quent, le code source a acc\xe8s aux d\xe9pendances qui ne sont pas ajout\xe9es en tant que d\xe9pendances au projet."),(0,s.kt)("p",null,"Par d\xe9faut, pnpm utilise des liens symboliques pour n'ajouter que les d\xe9pendances directes du projet \xe0 la racine du dossier des modules. Si vous souhaitez avoir plus de d\xe9tails sur la structure unique de ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," que pnpm cr\xe9e et pourquoi elle fonctionne bien avec l'environnement de Node.js, lisez:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules n'est pas le seul moyen")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fr/6.x/symlinked-node-modules-structure"},"Structure node_modules en lien symbolique"))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Si votre outil ne fonctionne pas bien avec les liens symboliques, vous pouvez toujours utiliser pnpm et d\xe9finir le param\xe8tre ",(0,s.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," sur ",(0,s.kt)("inlineCode",{parentName:"p"},"hoisted"),". Cela indiquera \xe0 pnpm de cr\xe9er un r\xe9pertoire node_modules similaire \xe0 ceux cr\xe9\xe9s par npm et Yarn Classic.")))}m.isMDXComponent=!0},8401:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},7733:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);