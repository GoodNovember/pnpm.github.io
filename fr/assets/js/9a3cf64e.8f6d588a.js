"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2919],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(2962),a=n(2742),l=(n(9496),n(9613)),p=["components"],o={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"version-7.x/cli/exec",title:"pnpm exec",description:"Ex\xe9cute une commande shell dans le cadre d'un projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/fr/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-7.x/docs",previous:{title:"pnpm test",permalink:"/fr/cli/test"},next:{title:"pnpm dlx",permalink:"/fr/cli/dlx"}},s={},u=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples-1",level:4},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ex\xe9cute une commande shell dans le cadre d'un projet."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," est ajout\xe9 au ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", donc ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permet d'ex\xe9cuter des commandes de d\xe9pendances."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Si vous avez Jest en tant que d\xe9pendance de votre projet, il n'est pas n\xe9cessaire d'installer Jest globalement, ex\xe9cutez-le simplement avec ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"La partie ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," est en fait facultative lorsque la commande n'est pas en conflit avec une commande pnpm int\xe9gr\xe9e, vous pouvez donc \xe9galement ex\xe9cuter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Toute option pour la commande ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," doit \xeatre list\xe9e avant le mot-cl\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),". Les options list\xe9es apr\xe8s le mot-cl\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," sont pass\xe9es \xe0 la commande ex\xe9cut\xe9e."),(0,l.kt)("p",null,"Bien. pnpm s'ex\xe9cutera de mani\xe8re r\xe9cursive\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,l.kt)("p",null,"Mauvais, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," ne s'ex\xe9cutera pas de mani\xe8re r\xe9cursive, mais ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," sera ex\xe9cut\xe9 avec l'option ",(0,l.kt)("inlineCode",{parentName:"p"},"-r")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Ex\xe9cutez la commande shell dans chaque projet de l'espace de travail."),(0,l.kt)("p",null,"Le nom du package actuel est disponible via la variable d'environnement ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Prune ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,l.kt)("p",null,"View package information for all packages. This should be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,l.kt)("p",null,"Added in: v7.22.0"),(0,l.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/fr/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);