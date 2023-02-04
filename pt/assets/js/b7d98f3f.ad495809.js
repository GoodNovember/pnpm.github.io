"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7237],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,v=u["".concat(p,".").concat(f)]||u[f]||s[f]||a;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(2962),o=r(2742),a=(r(9496),r(9613)),l=["components"],i={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-6.x/cli/why",title:"pnpm why",description:"Mostra todos os pacotes que dependem do pacote especificado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/pt/6.x/cli/why",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-6.x/docs",previous:{title:"pnpm outdated",permalink:"/pt/6.x/cli/outdated"},next:{title:"pnpm run",permalink:"/pt/6.x/cli/run"}},d={},s=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mostra todos os pacotes que dependem do pacote especificado."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Mostra a \xe1rvore de depend\xeancia para o pacote especificado para cada pacote em subdiret\xf3rios ou para cada pacote do workspace quando executado dentro de um workspace."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Added in: 3.7.0"),(0,a.kt)("p",null,"Show information in JSON format."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Show verbose output."),(0,a.kt)("h3",{id:"--parseable"},"--parseable"),(0,a.kt)("p",null,"Show parseable output instead of tree view."),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Only display the dependency tree for packages in ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Only display the dependency tree for packages in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/filtering"},"Leia mais sobre filtragem.")))}f.isMDXComponent=!0}}]);