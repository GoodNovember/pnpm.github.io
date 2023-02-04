"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9308],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=n(2962),a=n(2742),r=(n(9496),n(9613)),o=["components"],l={id:"run",title:"pnpm run"},p=void 0,s={unversionedId:"cli/run",id:"cli/run",title:"pnpm run",description:"Alias: run-script",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/it/next/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm licenses",permalink:"/it/next/cli/licenses"},next:{title:"pnpm test",permalink:"/it/next/cli/test"}},c={},u=[{value:"Esempi",id:"esempi",level:2},{value:"Dettagli",id:"dettagli",level:2},{value:"Differenze con <code>npm run</code>",id:"differenze-con-npm-run",level:2},{value:"Environment",id:"environment",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"run-script")),(0,r.kt)("p",null,"Esegue uno script definito nel file manifesto del pacchetto."),(0,r.kt)("h2",{id:"esempi"},"Esempi"),(0,r.kt)("p",null,"Supponiamo che tu abbia uno script ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," configurato nel tuo ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", in questo modo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,r.kt)("p",null,"Ora puoi eseguire questo script usando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Semplice, vero? Un'altra cosa da notare per coloro a cui piace risparmiare sequenze di tasti e tempo \xe8 che tutti gli script vengono resi alias come comandi pnpm, quindi alla fine ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \xe8 solo abbreviazione per ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (SOLO per gli script che non condividono lo stesso nome dei comandi pnpm gi\xe0 esistenti)."),(0,r.kt)("h2",{id:"dettagli"},"Dettagli"),(0,r.kt)("p",null,"Oltre alla preesistente ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," della shell, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run")," include ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," nel ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," fornito a ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),". Ci\xf2 significa che finch\xe9 hai installato un pacchetto, puoi usarlo in uno script come un normale comando. Ad esempio, se hai installato ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),", puoi scrivere uno script in questo modo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,r.kt)("p",null,"E anche se ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," non \xe8 installato globalmente nella tua shell, verr\xe0 eseguito."),(0,r.kt)("p",null,"Per gli spazi di lavoro, viene anche aggiunto ",(0,r.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," al ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", quindi se uno strumento \xe8 installato nella radice dello spazio di lavoro, pu\xf2 essere chiamato negli ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," di qualsiasi pacchetto di spazio di lavoro."),(0,r.kt)("h2",{id:"differenze-con-npm-run"},"Differenze con ",(0,r.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,r.kt)("p",null,"Per impostazione predefinita, pnpm non esegue gli hook arbitrari ",(0,r.kt)("inlineCode",{parentName:"p"},"pre")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," per gli script definiti dall'utente (come ad esempio ",(0,r.kt)("inlineCode",{parentName:"p"},"prestart"),"). Questo comportamento, ereditato da npm, ha fatto s\xec che gli script siano impliciti invece che espliciti, nascondendo il flusso di esecuzione. Ha anche portato a sorprendenti esecuzioni con ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm serve")," che eseguiva anche ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,r.kt)("p",null,"Se per qualche motivo necessiti del comportamento degli script pre/post di npm, usa l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts"),"."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"There are some environment variables that pnpm automatically creates for the executed scripts. These environment variables may be used to get contextual information about the running process."),(0,r.kt)("p",null,"These are the environment variables created by pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"npm_command")," - contains the name of the executed command. If the executed command is ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm run"),', then the value of this variable will be "run-script".')),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("p",null,"Any options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command should be listed before the script's name. Options listed after the script's name are passed to the executed script."),(0,r.kt)("p",null,"All these will run pnpm CLI with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--silent")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,r.kt)("p",null,"Any arguments after the command's name are added to the executed script. So if ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," runs ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", then this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,r.kt)("p",null,"will run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,r.kt)("h3",{id:"script-shell"},"script-shell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predefinito: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"percorso"))),(0,r.kt)("p",null,"La shell da usare per gli script eseguiti con il comando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,r.kt)("p",null,"Ad esempio, per forzare l'utilizzo di Git Bash su Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,r.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predefinito: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"Booleano"))),(0,r.kt)("p",null,"Quando ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm utilizzer\xe0 un'implementazione JavaScript di ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"shell simili a bash")," per eseguire gli script."),(0,r.kt)("p",null,"Questa opzione semplifica lo scripting multipiattaforma. Ad esempio, per impostazione predefinita, lo script successivo avr\xe0 esito negativo sui sistemi non conformi a POSIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,r.kt)("p",null,"Ma se l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \xe8 impostata a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", funzioner\xe0 su tutte le piattaforme."),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,'Questo esegue un comando arbitrario dall\'oggetto "script" di ogni pacchetto. Se un pacchetto non ha il comando, viene saltato. Se nessuno dei pacchetti ha il comando, il comando fallisce.'),(0,r.kt)("h3",{id:"--if-present"},"--if-present"),(0,r.kt)("p",null,"Puoi usare il flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--if-present")," per evitare di uscire con un codice di uscita diverso da zero quando lo script non \xe8 definito. Questo consente di eseguire script potenzialmente indefiniti senza interrompere la catena di esecuzione."),(0,r.kt)("h3",{id:"--parallel"},"--parallel"),(0,r.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,r.kt)("h3",{id:"--stream"},"--stream"),(0,r.kt)("p",null,"Trasmetti immediatamente l'output dai processi figlio, con il prefisso della cartella del pacchetto di origine. Questo permette di interporre l'output di pacchetti diversi."),(0,r.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,r.kt)("p",null,"Aggrega l'output dai processi figlio eseguiti in parallelo e stampa l'output solo quando il processo figlio \xe8 terminato. Rende molto pi\xf9 semplice la lettura di registri di grandi dimensioni dopo aver eseguito ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," con ",(0,r.kt)("inlineCode",{parentName:"p"},"--parallel")," o con ",(0,r.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," (specialmente su CI). Solo ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \xe8 supportato."),(0,r.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predefinito: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"Booleano"))),(0,r.kt)("p",null,"Quando ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm eseguir\xe0 automaticamente tutti gli script pre/post. Quindi l'esecuzione di ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm foo")," sar\xe0 come eseguire ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,r.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,r.kt)("p",null,"Added in: v7.22.0"),(0,r.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,r.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);