"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8942],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=t(2962),a=t(2742),l=(t(9496),t(9613)),o=["components"],p={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Ejecuta un comando de shell en el \xe1mbito de un proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/es/next/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/es/next/cli/test"},next:{title:"pnpm dlx",permalink:"/es/next/cli/dlx"}},s={},u=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Opciones",id:"opciones",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ejecuta un comando de shell en el \xe1mbito de un proyecto."),(0,l.kt)("p",null,"La carpeta ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," se agrega al ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", por lo que ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permite ejecutar comandos que exponen ciertas dependencias."),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)("p",null,"Si tienes Jest como dependencia de tu proyecto, no es necesario instalar Jest globalmente, simplemente ejec\xfatalo con ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"El argumento ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," es opcional cuando el comando a ejecutar no est\xe1 en conflicto con un comando incorporado de pnpm, as\xed que tambi\xe9n puedes ejecutar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("p",null,"Cualquier opci\xf3n para el comando ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," debe aparecer antes de la palabra ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),". Las opciones listadas despu\xe9s de la palabra ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," se pasan al comando ejecutado."),(0,l.kt)("p",null,"Bien. pnpm se ejecutar\xe1 recursivamente:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,l.kt)("p",null,"Mal, pnpm no se ejecutar\xe1 recursivamente pero ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," se ejecutar\xe1 con la opci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Ejecuta un comando de shell en cada proyecto del workspace."),(0,l.kt)("p",null,"El nombre del paquete actual est\xe1 disponible a trav\xe9s de la variable de entorno ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,l.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,l.kt)("p",null,"Prune ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,l.kt)("p",null,"View package information for all packages. This should be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,l.kt)("p",null,"Added in: v7.22.0"),(0,l.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);