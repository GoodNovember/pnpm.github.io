"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8595],{9613:(e,i,n)=>{n.d(i,{Zo:()=>c,kt:()=>u});var t=n(9496);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function a(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?a(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function r(e,i){if(null==e)return{};var n,t,o=function(e,i){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var i=t.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},c=function(e){var i=s(e.components);return t.createElement(p.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},m=t.forwardRef((function(e,i){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?t.createElement(k,l(l({ref:i},c),{},{components:n})):t.createElement(k,l({ref:i},c))}));function u(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var r={};for(var p in i)hasOwnProperty.call(i,p)&&(r[p]=i[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5364:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(2962),o=n(2742),a=(n(9496),n(9613)),l=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"version-7.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Gli hook possono essere dichiarati in un file chiamato .pnpmfile.cjs.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/it/pnpmfile",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-7.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/it/pnpm-workspace_yaml"},next:{title:"Spazio di lavoro",permalink:"/it/workspaces"}},c={},d=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Argomenti",id:"argomenti",level:4},{value:"Utilizzo",id:"utilizzo",level:4},{value:"Limitazioni conosciute",id:"limitazioni-conosciute",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"Argomenti",id:"argomenti-1",level:4},{value:"Esempio di utilizzo",id:"esempio-di-utilizzo",level:4},{value:"Limitazioni note",id:"limitazioni-note",level:4},{value:"Configurazione correlata",id:"configurazione-correlata",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],m={toc:d};function u(e){var i=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Gli hook possono essere dichiarati in un file chiamato ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,a.kt)("p",null,"Per impostazione predefinita, ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dovrebbe trovarsi nella stessa cartella del file di blocco. Ad esempio, in uno ",(0,a.kt)("a",{parentName:"p",href:"/it/workspaces"},"spazio di lavoro")," con un file di blocco ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dovrebbe trovarsi nella radice del monorepo."),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("h3",{id:"tldr"},"TL;DR"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Funzione hook"),(0,a.kt)("th",{parentName:"tr",align:null},"Processo"),(0,a.kt)("th",{parentName:"tr",align:null},"Utilizzi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,a.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che pnpm ha analizzato il manifesto del pacchetto della dipendenza"),(0,a.kt)("td",{parentName:"tr",align:null},"Ti permette di mutare il ",(0,a.kt)("inlineCode",{parentName:"td"},"package.json")," di una dipendenza")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,a.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che le dipendenze sono state risolte."),(0,a.kt)("td",{parentName:"tr",align:null},"Consente di modificare il file di blocco.")))),(0,a.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,a.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,a.kt)("p",null,"Consente di modificare ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," di una dipendenza dopo l'analisi e prima della risoluzione. Queste mutazioni non vengono salvate nel filesystem, tuttavia, interessano ci\xf2 viene risolto nel file di blocco e quindi ci\xf2 che viene installato."),(0,a.kt)("p",null,"Nota che dovrai eliminare ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," se hai gi\xe0 risolto la dipendenza che desideri modificare."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Se hai bisogno di modifiche al file ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," salvate nel filesystem, devi usare il comando ",(0,a.kt)("a",{parentName:"p",href:"/it/cli/patch"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," e patchare il file ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". Questo potrebbe essere utile se vuoi rimuovere il campo ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," di una dipendenza, ad esempio.")),(0,a.kt)("h4",{id:"argomenti"},"Argomenti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pkg")," - Il manifesto del pacchetto. La risposta dal registro o il contenuto di ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,a.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,a.kt)("h4",{id:"utilizzo"},"Utilizzo"),(0,a.kt)("p",null,"Esempio ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (cambia le dipendenze di una dipendenza):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Sovrascrive il manifesto di foo@1.x dopo averlo scaricato dal registro\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Sostituisce bar@x.x.x con bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // Questo modificher\xe0 ogni pacchetto che usa baz@x.x.x in modo da usare baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,a.kt)("h4",{id:"limitazioni-conosciute"},"Limitazioni conosciute"),(0,a.kt)("p",null,"Rimozione del campo ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," da una dipendenza del manifesto tramite ",(0,a.kt)("inlineCode",{parentName:"p"},"readPackage")," sar\xe0 impedir\xe0 a pnpm di costruire la dipendenza. Quando si crea una dipendenza, pnpm legge il ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," del pacchetto dall'archivio del pacchetto, che non \xe8 interessato dall'hook. Per ignorare la compilazione di un pacchetto, utilizzare il campo ",(0,a.kt)("a",{parentName:"p",href:"/it/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),"."),(0,a.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,a.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,a.kt)("p",null,"Consente di modificare l'output del file di blocco prima che venga serializzato."),(0,a.kt)("h4",{id:"argomenti-1"},"Argomenti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lockfile")," - L'oggetto risoluzioni lockfile serializzato su ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,a.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,a.kt)("h4",{id:"esempio-di-utilizzo"},"Esempio di utilizzo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,a.kt)("h4",{id:"limitazioni-note"},"Limitazioni note"),(0,a.kt)("p",null,"Non ce ne sono: tutto ci\xf2 che pu\xf2 essere fatto con il file di blocco pu\xf2 essere modificato tramite questa funzione e puoi persino estendere la funzionalit\xe0 del file di blocco."),(0,a.kt)("h2",{id:"configurazione-correlata"},"Configurazione correlata"),(0,a.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," verr\xe0 ignorato. Utile insieme a ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignore-script")," quando si si desidera assicurarsi che nessuno script venga eseguito durante l'installazione."),(0,a.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"percorso")),(0,a.kt)("li",{parentName:"ul"},"Esempio: ",(0,a.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,a.kt)("p",null,"La posizione del file pnpm locale."),(0,a.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"percorso")),(0,a.kt)("li",{parentName:"ul"},"Esempio: ",(0,a.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,a.kt)("p",null,"La posizione di un file pnpm globale. Un file pnpm globale viene utilizzato da tutti i progetti durante l'installazione."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Si consiglia di utilizzare file pnpm locali. Usa un pnpmfile globale solo se usi pnpm su progetti che non usano pnpm come gestore di pacchetti principale.")))}u.isMDXComponent=!0}}]);