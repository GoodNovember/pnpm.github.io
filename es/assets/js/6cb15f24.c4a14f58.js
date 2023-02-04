"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9252],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(2962),r=t(2742),l=(t(9496),t(9613)),o=["components"],i={id:"uninstall",title:"Desinstalando pnpm"},p=void 0,s={unversionedId:"uninstall",id:"uninstall",title:"Desinstalando pnpm",description:"Eliminando los paquetes instalados globalmente",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/es/next/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"uninstall",title:"Desinstalando pnpm"},sidebar:"docs",previous:{title:"C\xf3mo se resuelven los peers",permalink:"/es/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/es/next/pnpm-vs-npm"}},c={},d=[{value:"Eliminando los paquetes instalados globalmente",id:"eliminando-los-paquetes-instalados-globalmente",level:2},{value:"Eliminando la CLI de pnpm",id:"eliminando-la-cli-de-pnpm",level:2},{value:"Eliminando el almac\xe9n direccionable de contenido global",id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"eliminando-los-paquetes-instalados-globalmente"},"Eliminando los paquetes instalados globalmente"),(0,l.kt)("p",null,"Antes de eliminar la CLI de pnpm, es recomendado eliminar todos los paquetes globales que instal\xf3 mediante pnpm."),(0,l.kt)("p",null,"Para listar todos los paquetes globales, ejecute ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Hay dos formas de eliminar los paquetes globales:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Ejecute ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con cada paquete global listado."),(0,l.kt)("li",{parentName:"ol"},"Ejecute ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," para encontrar la ubicaci\xf3n del directorio global y elim\xednelo manualmente.")),(0,l.kt)("h2",{id:"eliminando-la-cli-de-pnpm"},"Eliminando la CLI de pnpm"),(0,l.kt)("p",null,"Si utiliz\xf3 el script para instalar pnpm (o npx), entonces deber\xeda poder desinstalar la CLI de pnpm usando:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,l.kt)("p",null,"Tambi\xe9n puede que quieras quitar la variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," de tu configuraci\xf3n de shell (",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," o ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,l.kt)("p",null,"Si us\xf3 npm para instalar pnpm, entonces debe usar npm para desinstalar pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global"},"Eliminando el almac\xe9n direccionable de contenido global"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,l.kt)("p",null,"Si us\xf3 pnpm en discos no primarios, debe ejecutar el comando anterior en cada disco, donde se us\xf3 pnpm. pnpm crea una almac\xe9n por disco."))}u.isMDXComponent=!0}}]);