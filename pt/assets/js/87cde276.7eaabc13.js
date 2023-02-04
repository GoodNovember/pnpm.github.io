"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1764],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),l=["components"],i={id:"list",title:"pnpm list"},p=void 0,s={unversionedId:"cli/list",id:"cli/list",title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/pt/next/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"list",title:"pnpm list"},sidebar:"docs",previous:{title:"pnpm audit",permalink:"/pt/next/cli/audit"},next:{title:"pnpm outdated",permalink:"/pt/next/cli/outdated"}},d={},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")),(0,a.kt)("p",null,"Este comando ir\xe1 exibir todas as vers\xf5es dos pacotes que est\xe3o instalados, bem como suas depend\xeancias, em uma estrutura de \xe1rvore."),(0,a.kt)("p",null,"Os argumentos posicionais s\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"identificadores name-pattern@version-range"),", que limitar\xe3o os resultados apenas aos pacotes nomeados. Por exemplo, ",(0,a.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Execute o comando em cada pacote em subdiret\xf3rios ou em cada pacote do workspace, quando executado dentro de um workspace."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Exibe o log de sa\xedda no formato JSON."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Exibir informa\xe7\xf5es extendidas."),(0,a.kt)("h3",{id:"--parseable"},"--parseable"),(0,a.kt)("p",null,"Exibe os diret\xf3rios de pacotes em um formato parseable em vez de sua visualiza\xe7\xe3o de \xe1rvore."),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Liste os pacotes no diret\xf3rio de instala\xe7\xe3o global em vez de no projeto atual."),(0,a.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,a.kt)("p",null,"A profundidade m\xe1xima da \xe1rvore de depend\xeancia."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," listar\xe1 apenas as depend\xeancias diretas. ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," listar\xe1 apenas projetos. \xdatil dentro de um workspace quando usado com a op\xe7\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"-r"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Exibe apenas o gr\xe1fico de depend\xeancia para pacotes em ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," e ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Exibe apenas o gr\xe1fico de depend\xeancia para pacotes em ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"N\xe3o exibe pacotes listados em ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,a.kt)("p",null,"Added in: v7.22.0"),(0,a.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}m.isMDXComponent=!0}}]);