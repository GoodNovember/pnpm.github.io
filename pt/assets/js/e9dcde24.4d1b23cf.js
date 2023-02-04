"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[400],{9613:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(9496);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,_=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?t.createElement(_,p(p({ref:r},d),{},{components:n})):t.createElement(_,p({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6024:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(2962),a=n(2742),o=(n(9496),n(9613)),p=["components"],s={id:"errors",title:"C\xf3digos de Erro"},i=void 0,l={unversionedId:"errors",id:"errors",title:"C\xf3digos de Erro",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/pt/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"errors",title:"C\xf3digos de Erro"},sidebar:"docs",previous:{title:"Compara\xe7\xe3o de Recursos",permalink:"/pt/next/feature-comparison"},next:{title:"Logos",permalink:"/pt/next/logos"}},d={},c=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],u={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"Um diret\xf3rio de m\xf3dulos est\xe1 presente e est\xe1 vinculado a um diret\xf3rio de armazenamento diferente."),(0,o.kt)("p",null,"Se voc\xea alterou o diret\xf3rio de armazenamento intencionalmente, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," e o pnpm reinstalar\xe1 as depend\xeancias usando o novo armazenamento."),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"Um projeto tem uma depend\xeancia de \xe1rea de trabalho que n\xe3o existe na \xe1rea de trabalho principal."),(0,o.kt)("p",null,"Por exemplo, o pacote ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," tem ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," em ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"No entanto, h\xe1 apenas ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," na \xe1rea de trabalho, portanto, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," falhar\xe1."),(0,o.kt)("p",null,"Para corrigir esse erro, todas as depend\xeancias que usam o protocolo ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/workspaces#workspace-protocol-workspace"},"de \xe1rea de trabalho")," devem ser atualizadas para usar as vers\xf5es dos pacotes presentes na \xe1rea de trabalho. Isso pode ser feito manualmente ou usando o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," falhar\xe1 se o projeto tiver depend\xeancias de pares n\xe3o resolvidas ou se as depend\xeancias de pares n\xe3o corresponderem aos intervalos desejados. Para corrigir isso, instale as depend\xeancias de pares ausentes."),(0,o.kt)("p",null,"Voc\xea tamb\xe9m pode ignorar seletivamente esses erros usando os campos ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," e ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," em ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"Este erro ocorre quando a instala\xe7\xe3o n\xe3o pode ser executada sem altera\xe7\xf5es no arquivo lockfile. Isso poder\xe1 acontecer no ambiente de CI se algu\xe9m alterar o arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," no reposit\xf3rio sem executar ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," depois. Ou quando algu\xe9m esquecer de fazer o commit das altera\xe7\xf5es no arquivo lockfile."),(0,o.kt)("p",null,"Para corrigir este erro, apenas execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," e fa\xe7a o commit das altera\xe7\xf5es do arquivo lockfile."))}m.isMDXComponent=!0}}]);