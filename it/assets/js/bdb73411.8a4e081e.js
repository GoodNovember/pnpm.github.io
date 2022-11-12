"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2149],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?i.createElement(f,l(l({ref:n},c),{},{components:t})):i.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var i=t(2962),o=t(2742),a=(t(9496),t(9613)),l=["components"],r={id:"motivation",title:"Motivazione"},s=void 0,d={unversionedId:"motivation",id:"motivation",title:"Motivazione",description:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/it/next/motivation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"motivation",title:"Motivazione"},sidebar:"docs",next:{title:"Installazione",permalink:"/it/next/installation"}},c={},p=[{value:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione",level:2},{value:"Creazione di una cartella node_modules non flat",id:"creazione-di-una-cartella-node_modules-non-flat",level:2}],u={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione"},"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,a.kt)("img",{src:t(2995).Z,width:"2500",height:"1406"}))),(0,a.kt)("p",null,"When using npm, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. Con pnpm, la dipendenza sar\xe0 memorizzata in un archivio indirizzabile al contenuto, quindi:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Se dipendi da versioni diverse della dipendenza, solo i file diversi sono aggiunti all'archivio. Ad esempio, se una dipendenza ha 100 file e una nuova versione ha cambiamenti in un solo file, ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm update")," aggiunger\xe0 solamente un nuovo file all'interno dell'archivio, invece di clonare l'intera dipendenza solo per una modifica singola."),(0,a.kt)("li",{parentName:"ol"},"Tutti i file sono salvati in un'unica posizione sul disco. Quando i pacchetti vengono installati, i loro file sono collegati fisicamente da quella singola posizione, senza consumare spazio su disco aggiuntivo. Ci\xf2 consente di condividere dipendenze della stessa versione tra progetti.")),(0,a.kt)("p",null,"Di conseguenza, \xe8 possibile risparmiare molto spazio su disco proporzionalmente al numero di progetti e dipendenze, e avrai installazioni molto pi\xf9 veloci!"),(0,a.kt)("h2",{id:"creazione-di-una-cartella-node_modules-non-flat"},"Creazione di una cartella node_modules non flat"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,a.kt)("img",{src:t(9426).Z,width:"2920",height:"1392"}))),(0,a.kt)("p",null,"Quando si installano le dipendenze con npm o Yarn Classic, tutti i pacchetti vengono agganciati alla radice della cartella dei moduli. Di conseguenza, il codice sorgente ha accesso a dipendenze non aggiunte come dipendenze al progetto."),(0,a.kt)("p",null,"Per impostazione predefinita, pnpm utilizza collegamenti simbolici per aggiungere solo le dipendenze dirette del progetto nella root della cartella dei moduli. Se desideri maggiori dettagli sulla struttura unica di ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," che pnpm crea e perch\xe9 funziona bene con l'ecosistema Node.js, leggi:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"La node_modules flat non \xe8 l'unico modo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/it/next/symlinked-node-modules-structure"},"Struttura node_modules con collegamenti simbolici"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Se i tuoi strumenti non funzionano bene con i collegamenti simbolici, puoi comunque utilizzare pnpm e impostare l'impostazione ",(0,a.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," su ",(0,a.kt)("inlineCode",{parentName:"p"},"hoisted"),". Questo indicher\xe0 a pnpm di creare una cartella node_modules simile a quelle create da npm e Yarn Classic.")))}m.isMDXComponent=!0},2995:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},9426:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);