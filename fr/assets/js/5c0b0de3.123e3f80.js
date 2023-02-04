"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return r?t.createElement(d,a(a({ref:n},c),{},{components:r})):t.createElement(d,a({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5430:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var t=r(2962),o=r(2742),i=(r(9496),r(9613)),a=["components"],p={id:"configuring",title:"Configuration"},u=void 0,s={unversionedId:"configuring",id:"version-6.x/configuring",title:"Configuration",description:"pnpm utilise les formats de configuration de npm. Par cons\xe9quent, vous devriez d\xe9finir la configuration de la m\xeame mani\xe8re que pour npm. Par exemple,",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/fr/6.x/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"configuring",title:"Configuration"},sidebar:"version-6.x/docs",previous:{title:"pnpx CLI",permalink:"/fr/6.x/pnpx-cli"},next:{title:"Filtrage",permalink:"/fr/6.x/filtering"}},c={},l=[],m={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm utilise les ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"formats de configuration de npm"),". Par cons\xe9quent, vous devriez d\xe9finir la configuration de la m\xeame mani\xe8re que pour npm. Par exemple,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,i.kt)("p",null,"Si aucun emplacement n'est configur\xe9, pnpm cr\xe9era automatiquement un emplacement sur le m\xeame disque. Si vous avez besoin que pnpm fonctionne sur plusieurs disques durs ou syst\xe8mes de fichiers, veuillez lire ",(0,i.kt)("a",{parentName:"p",href:"/fr/6.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"les Questions Fr\xe9quemment Pos\xe9es"),"."),(0,i.kt)("p",null,"De plus, pnpm utilise la m\xeame configuration que npm utilise pour effectuer installations. Si vous disposez d'un registre priv\xe9 et que npm est configur\xe9 pour fonctionner avec, pnpm devrait pouvoir autoriser les requ\xeates \xe9galement, sans configuration suppl\xe9mentaire."),(0,i.kt)("p",null,"En plus de ces options, pnpm vous permet \xe9galement d'utiliser tous les param\xe8tres qui sont des flags (par exemple ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") comme des options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,i.kt)("p",null,"Voir la commande ",(0,i.kt)("a",{parentName:"p",href:"/fr/6.x/cli/config"},(0,i.kt)("inlineCode",{parentName:"a"},"config"))," pour plus d'informations."))}f.isMDXComponent=!0}}]);