"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),i=["components"],c={id:"git",title:"Trabajando con Git"},l=void 0,s={unversionedId:"git",id:"version-7.x/git",title:"Trabajando con Git",description:"Archivos de bloqueo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/git.md",sourceDirName:".",slug:"/git",permalink:"/es/git",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"git",title:"Trabajando con Git"},sidebar:"version-7.x/docs",previous:{title:"Integraci\xf3n continua",permalink:"/es/continuous-integration"},next:{title:"C\xf3digos de error",permalink:"/es/errors"}},u={},p=[{value:"Archivos de bloqueo",id:"archivos-de-bloqueo",level:2},{value:"Combinar conflictos",id:"combinar-conflictos",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"archivos-de-bloqueo"},"Archivos de bloqueo"),(0,a.kt)("p",null,"Siempre debes hacer commit del archivo de bloqueo (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Esto se debe a una multitud de razones, la principal de las cuales es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"habilita una instalaci\xf3n m\xe1s r\xe1pida para CI y entornos de producci\xf3n, ya que es capaz de omitir la resoluci\xf3n de paquetes"),(0,a.kt)("li",{parentName:"ul"},"impone instalaciones y resoluciones coherentes entre desarrollo y producci\xf3n, lo que significa que los paquetes utilizados en prueba y producci\xf3n ser\xe1n exactamente los mismos que cuando desarroll\xf3 su proyecto")),(0,a.kt)("h3",{id:"combinar-conflictos"},"Combinar conflictos"),(0,a.kt)("p",null,"pnpm puede resolver autom\xe1ticamente los conflictos de combinaci\xf3n en ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Si tiene conflictos, simplemente ejecute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," y confirme los cambios."),(0,a.kt)("p",null,"Tenga cuidado, sin embargo. Se recomienda que revise los cambios antes de realizar un commit, porque no podemos garantizar que elegir\xe1 el encabezado correcto - en su lugar se compila con los archivos de bloqueo m\xe1s actualizados, lo que es ideal en la mayor\xeda los casos."))}m.isMDXComponent=!0}}]);