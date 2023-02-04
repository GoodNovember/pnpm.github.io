"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6273],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,p(p({ref:n},m),{},{components:t})):a.createElement(k,p({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(2962),l=t(2742),r=(t(9496),t(9613)),p=["components"],i={id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},o=void 0,s={unversionedId:"installation",id:"version-7.x/installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ru/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},sidebar:"version-7.x/docs",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/ru/motivation"},next:{title:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439",permalink:"/ru/feature-comparison"}},m={},u=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439-\u0441\u043a\u0440\u0438\u043f\u0442",level:2},{value:"\u041d\u0430 Windows",id:"\u043d\u0430-windows",level:3},{value:"\u041d\u0430 POSIX-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",id:"\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",level:3},{value:"\u041d\u0430 Alpine Linux",id:"\u043d\u0430-alpine-linux",level:3},{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439-\u0432\u0435\u0440\u0441\u0438\u0438",level:3},{value:"Using Corepack",id:"using-corepack",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f npm",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-npm",level:2},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",id:"\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430",level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u043d\u0430 POSIX \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",level:4},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u0432 PowerShell (Windows):",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u0432-powershell-windows",level:4},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439-\u0441\u043a\u0440\u0438\u043f\u0442"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442"),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c pnpm, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 Node.js, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b."),(0,r.kt)("h3",{id:"\u043d\u0430-windows"},"\u041d\u0430 Windows"),(0,r.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"},"\u041d\u0430 POSIX-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d curl, \u0438 \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"\u043d\u0430-alpine-linux"},"\u041d\u0430 Alpine Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm\n')),(0,r.kt)("h3",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pnpm, \u0442\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 Node.js (\u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c v14) \u0432 \u0441\u0432\u043e\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435."),(0,r.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439-\u0432\u0435\u0440\u0441\u0438\u0438"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438"),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("a",{parentName:"p",href:"/ru/cli/env"},"pnpm env")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Node.js.")),(0,r.kt)("h2",{id:"using-corepack"},"Using Corepack"),(0,r.kt)("p",null,"Since v16.13, Node.js is shipping ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," for managing package managers. This is an experimental feature, so you need to enable it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,r.kt)("p",null,"This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-npm"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,r.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,r.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0425\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0432 CI/CD? \u0421\u043c.: ",(0,r.kt)("a",{parentName:"p",href:"/ru/continuous-integration"},"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"),".")),(0,r.kt)("h2",{id:"\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"},"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"),(0,r.kt)("p",null,"\u041d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 pnpm \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0439 Node.js."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 pnpm \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0435\u0433\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c pnpm \u0438 \u0435\u0433\u043e \u0444\u0430\u0439\u043b\u044b, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0432 \u043f\u0443\u0442\u044c \u0434\u043e \u0435\u0433\u043e \u043f\u0430\u043f\u043a\u0438 \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f PATH."),(0,r.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 pnpm, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Windows, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u044d\u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 Git Bash. \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b pnpm, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f CLI pnpm, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u044d\u0442\u0443 \u043f\u0430\u043f\u043a\u0443 \u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 pnpm \u0444\u0430\u0439\u043b\u044b (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u0438 \u0442.\u0434.). \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 pnpm \u0435\u0449\u0435 \u0440\u0430\u0437, \u0438 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0432\u044b \u0442\u043e\u0433\u043e \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435."),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,r.kt)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u043d\u0430 POSIX \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u0432-powershell-windows"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u0432 PowerShell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm"),(0,r.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,r.kt)("a",{parentName:"p",href:"/ru/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);