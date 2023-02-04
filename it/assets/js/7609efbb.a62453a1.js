"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3955],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(2962),a=n(2742),l=(n(9496),n(9613)),p=["components"],i={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"Recupera un pacchetto dal registro senza installarlo come dipendenza, lo carica a caldo ed esegue qualsiasi comando binario predefinito che espone.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/it/cli/dlx",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/it/cli/exec"},next:{title:"pnpm create",permalink:"/it/cli/create"}},s={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--package &lt;nome&gt;",id:"--package-nome",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Recupera un pacchetto dal registro senza installarlo come dipendenza, lo carica a caldo ed esegue qualsiasi comando binario predefinito che espone."),(0,l.kt)("p",null,"Ad esempio, per utilizzare ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," ovunque per avviare un'app react senza che debba installarla in un altro progetto, puoi eseguire:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,l.kt)("p",null,"Questo recuperer\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," dal registro e lo eseguir\xe0 con gli argomenti forniti."),(0,l.kt)("p",null,"Puoi anche specificare quale versione esatta del pacchetto desideri utilizzare:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--package-nome"},"--package ","<","nome",">"),(0,l.kt)("p",null,"Il pacchetto da installare prima di eseguire il comando."),(0,l.kt)("p",null,"Esempio:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,l.kt)("p",null,"\xc8 possibile fornire pi\xf9 pacchetti per l'installazione:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Aggiunto nella versione: v7.21.0"),(0,l.kt)("p",null,"Esegue il comando all'interno di una shell. Utilizza ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," su UNIX e ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," su Windows."),(0,l.kt)("p",null,"Esempio:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package cowsay --package lolcatjs -c dlx 'echo \"hi pnpm\" | cowsay | lolcatjs'\n")),(0,l.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,l.kt)("p",null,"Viene stampato solo l'output del comando eseguito."))}m.isMDXComponent=!0}}]);