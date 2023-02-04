"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7094],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2962),l=n(2742),r=(n(9496),n(9613)),p=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/es/next/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"update",title:"pnpm update"},sidebar:"docs",previous:{title:"pnpm install",permalink:"/es/next/cli/install"},next:{title:"pnpm remove",permalink:"/es/next/cli/remove"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;selector_de_paquete&gt;",id:"--filter-selector_de_paquete",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases: ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm update")," actualiza los paquetes a su \xfaltima versi\xf3n basado en el rango especificado."),(0,r.kt)("p",null,"Cuando se usa sin argumentos, actualiza todas las dependencias."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Comando"),(0,r.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,r.kt)("td",{parentName:"tr",align:null},"Actualiza todas las dependencias, adhiri\xe9ndose a los rangos especificados en el",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates ",(0,r.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,r.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,r.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,r.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,r.kt)("p",null,"You can use patterns to update specific dependencies."),(0,r.kt)("p",null,"Update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*"\n')),(0,r.kt)("p",null,"Update all dependencies, except ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,r.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*" !@babel/core\n')),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,r.kt)("p",null,"Ejemplos de uso:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,r.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,r.kt)("p",null,"Ignora el rango de versiones especificado en el ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". En su lugar, se utilizar\xe1 la versi\xf3n especificada por la ",(0,r.kt)("inlineCode",{parentName:"p"},"\xfaltima")," etiqueta (potencialmente actualizando los paquetes a trav\xe9s de las versiones principales)."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Actualizar paquetes globales."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,r.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Only update packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Only update packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,"Don't update packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,r.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,r.kt)("h3",{id:"--filter-selector_de_paquete"},"--filter ","<","selector_de_paquete",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);