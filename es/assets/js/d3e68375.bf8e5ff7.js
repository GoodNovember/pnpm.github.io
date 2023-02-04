"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4160],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var a=n(2962),r=n(2742),l=(n(9496),n(9613)),i=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"cli/run",title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/es/next/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm licenses",permalink:"/es/next/cli/licenses"},next:{title:"pnpm test",permalink:"/es/next/cli/test"}},u={},c=[{value:"Examples",id:"examples",level:2},{value:"Detalles",id:"detalles",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Environment",id:"environment",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"Runs a script defined in the package's manifest file."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Let's say you have a ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," script configured in your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,l.kt)("p",null,"You can now run that script by using ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right? Otra cosa a tener en cuenta para aquellos a los que les gusta ahorrar pulsaciones de teclas y tiempo es que todos los scripts tienen un alias como comandos pnpm, por lo que, en \xfaltima instancia, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," es solo una abreviatura de ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (S\xd3LO para scripts que no comparten el mismo nombre que los comandos pnpm ya existentes)."),(0,l.kt)("h2",{id:"detalles"},"Detalles"),(0,l.kt)("p",null,"Adem\xe1s del ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," preexistente del shell, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," incluye ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," en el ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," proporcionado a ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),". Esto significa que siempre que tenga un paquete instalado, puede usarlo en un script como un comando normal. Por ejemplo, si tiene instalado ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),", puede escribir un script as\xed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"And even though ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,l.kt)("p",null,"For workspaces, ",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,l.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,l.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,l.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,l.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,l.kt)("h2",{id:"environment"},"Environment"),(0,l.kt)("p",null,"There are some environment variables that pnpm automatically creates for the executed scripts. These environment variables may be used to get contextual information about the running process."),(0,l.kt)("p",null,"These are the environment variables created by pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"npm_command")," - contains the name of the executed command. If the executed command is ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm run"),', then the value of this variable will be "run-script".')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Any options for the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," command should be listed before the script's name. Options listed after the script's name are passed to the executed script."),(0,l.kt)("p",null,"All these will run pnpm CLI with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--silent")," option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,l.kt)("p",null,"Any arguments after the command's name are added to the executed script. So if ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", then this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,l.kt)("p",null,"will run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"path"))),(0,l.kt)("p",null,"The shell to use for scripts run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,l.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,l.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"But if the ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,l.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,l.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,l.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,l.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,l.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,l.kt)("p",null,"Added in: v7.22.0"),(0,l.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);