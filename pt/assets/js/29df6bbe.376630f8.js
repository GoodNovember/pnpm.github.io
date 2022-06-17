"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5310],{9613:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>m});var a=o(9496);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=a.createContext({}),c=function(e){var n=a.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):p(p({},n),e)),o},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=t,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(f,p(p({ref:n},s),{},{components:o})):a.createElement(f,p({ref:n},s))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,p=new Array(r);p[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,p[1]=l;for(var c=2;c<r;c++)p[c]=o[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},975:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=o(2848),t=o(9213),r=(o(9496),o(9613)),p=["components"],l={id:"fetch",title:"pnpm fetch"},i=void 0,c={unversionedId:"cli/fetch",id:"cli/fetch",title:"pnpm fetch",description:"Buscar pacotes a partir de um arquivo lockfile em lojas virtuais, o manifesto do pacote \xe9 ignorado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/pt/next/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"docs",previous:{title:"pnpm prune",permalink:"/pt/next/cli/prune"},next:{title:"pnpm install-test",permalink:"/pt/next/cli/install-test"}},s={},d=[{value:"Casos de uso",id:"casos-de-uso",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],u={toc:d};function m(e){var n=e.components,o=(0,t.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Buscar pacotes a partir de um arquivo lockfile em lojas virtuais, o manifesto do pacote \xe9 ignorado."),(0,r.kt)("h2",{id:"casos-de-uso"},"Casos de uso"),(0,r.kt)("p",null,"Esse comando foi especificamente projetado para impulsionar a constru\xe7\xf5es de imagens Docker."),(0,r.kt)("p",null,"Voc\xea pode ter lido o ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"guia oficial")," para escrever um Dockerfile para uma aplica\xe7\xe3o Node.js, se voc\xea ainda n\xe3o leu, talvez queira l\xea-lo primeiro."),(0,r.kt)("p",null,"A partir desse guia, aprendemos a escrever um Dockerfile otimizado para projetos usando pnpm, que deve se parecer com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"Cotnanto que n\xe3o haja altera\xe7\xf5es no ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", o cache de build do Docker ainda \xe9 v\xe1lido at\xe9 a camada de ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", que mais custa durante a cria\xe7\xe3o de uma imagem do Docker."),(0,r.kt)("p",null,"No entanto, modifica\xe7\xf5es no ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," podem acontecer com muito mais frequ\xeancia do que esperamos, porque n\xe3o cont\xe9m apenas depend\xeancias, mas tamb\xe9m cont\xe9m o numero de vers\xe3o, scripts e configura\xe7\xf5es arbitr\xe1rias para qualquer outra ferramenta."),(0,r.kt)("p",null,"Tamb\xe9m \xe9 dif\xedcil manter um Dockerfile que construa um projeto monorepo, pode parecer como"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,r.kt)("p",null,"Como voc\xea pode ver, o Dockerfile tem que ser atualizado quando voc\xea adiciona ou remove sub-pacotes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," resolver\xe1 o problema acima perfeitamente, fornecendo a capacidade de buscar pacotes de uma loja virtual com a informa\xe7\xe3o apenas de um lockfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"Funciona tanto para o projeto simples quanto para o monorepo, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," for\xe7a o pnpm a n\xe3o se comunicar com o registro de pacotes, pois todos os pacotes necess\xe1rios devem estar presentes na loja virtual."),(0,r.kt)("p",null,"Contanto que o lockfile n\xe3o seja alterado, o cache de build \xe9 valido at\xe9 a camada ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", o que economizar\xe1 muito tempo."),(0,r.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,r.kt)("h3",{id:"--dev"},"--dev"),(0,r.kt)("p",null,"Apenas pacotes de desenvolvimento ser\xe3o buscados"),(0,r.kt)("h3",{id:"--prod"},"--prod"),(0,r.kt)("p",null,"Pacotes de desenvolvimento n\xe3o ser\xe3o buscados"))}m.isMDXComponent=!0}}]);