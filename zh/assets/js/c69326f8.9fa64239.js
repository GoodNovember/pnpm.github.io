"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8027],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(2962),l=n(2742),a=(n(9496),n(9613)),p=["components"],i={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-6.x/cli/run",title:"pnpm run",description:"\u522b\u540d: run-script",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/zh/6.x/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-6.x/docs",previous:{title:"pnpm why",permalink:"/zh/6.x/cli/why"},next:{title:"pnpm test",permalink:"/zh/6.x/cli/test"}},u={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Details",id:"details",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u522b\u540d: ",(0,a.kt)("inlineCode",{parentName:"p"},"run-script")),(0,a.kt)("p",null,"\u8fd0\u884c\u4e00\u4e2a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684 manifest \u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u811a\u672c\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u5047\u5982\u60a8\u6709\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," \u811a\u672c\u914d\u7f6e\u5728\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"package.json "),"\u4e2d\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,a.kt)("p",null,"\u60a8\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"\u8fd0\u884c\u8be5\u811a\u672c\uff01 \u5f88\u7b80\u5355\u5427\uff1f \u5bf9\u4e8e\u90a3\u4e9b\u4e0d\u559c\u6b22\u6572\u952e\u76d8\u800c\u6d6a\u8d39\u65f6\u95f4\u7684\u4eba\u8981\u6ce8\u610f\u7684\u53e6\u4e00\u4ef6\u4e8b\u662f\uff0c\u6240\u6709\u811a\u672c\u90fd\u4f1a\u6709 pnpm \u547d\u4ee4\u7684\u522b\u540d\uff0c\u6240\u4ee5\u6700\u7ec8 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u7684\u7b80\u5199\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \uff08",(0,a.kt)("strong",{parentName:"p"},"\u4ec5\u9002\u7528\u4e8e"),"\u90a3\u4e9b\u4e0d\u4e0e\u5df2\u6709\u7684pnpm \u547d\u4ee4\u76f8\u540c\u540d\u5b57\u7684\u811a\u672c\uff09\u3002"),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,a.kt)("p",null,"And even though ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5de5\u4f5c\u7a7a\u95f4\uff0c\u622a\u81f3 v3.5 \uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \u4e5f\u5c06\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\u4e2d\uff0c\u56e0\u6b64\u5982\u679c\u5728\u5de5\u4f5c\u7a7a\u95f4\u6839\u76ee\u5f55\u4e2d\u5b89\u88c5\u4e86\u4e00\u4e2a\u5de5\u5177\uff0c\u5219\u53ef\u4ee5\u5728\u5de5\u4f5c\u7a7a\u95f4\u7684\u4efb\u4f55",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,a.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,a.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,a.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,a.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"script-shell"},"script-shell"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.10.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("strong",{parentName:"li"},"path"))),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u547d\u4ee4\u811a\u672c\u7684 shell\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u5f3a\u5236\u5728 Windows \u4e0a\u4f7f\u7528 Git Bash\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pnpm \u914d\u7f6e\u4e2d\u8bbe\u7f6e script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,a.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.8.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"\u5f53\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0cpnpm \u5c06\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," \u8fd9\u4e2aJavaScript \u5b9e\u73b0\u7684\u6267\u884c\u5668\u6765\u8fd0\u884c\u811a\u672c\u3002"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u7b80\u5316\u4e86\u8de8\u5e73\u53f0\u811a\u672c\u3002 \u4f8b\u5982\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0b\u9762\u7684\u811a\u672c\u5c06\u5728\u975e POSIX \u517c\u5bb9\u7cfb\u7edf\u4e0a\u5931\u8d25\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5b83\u5c06\u9002\u7528\u4e8e\u6240\u6709\u5e73\u53f0\u3002"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u8fd9\u4f1a\u4ece\u6bcf\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u201c scripts\u201d\u5bf9\u8c61\u4e2d\u6267\u884c\u4efb\u610f\u4e00\u4e2a\u547d\u4ee4\u3002 \u5982\u679c\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u6ca1\u6709\u8be5\u547d\u4ee4\uff0c\u5c31\u4f1a\u88ab\u8df3\u8fc7\u3002 \u5982\u679c\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u90fd\u6ca1\u6709\u8fd9\u4e2a\u547d\u4ee4\uff0c\u5219\u4f1a\u6267\u884c\u5931\u8d25\u3002"),(0,a.kt)("h3",{id:"--if-present"},"--if-present"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.5.0"),(0,a.kt)("p",null,"\u5982\u679c\u811a\u672c\u672a\u5b9a\u4e49\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--if-present "),"\u6807\u5fd7\u4ee5\u907f\u514d\u9047\u5230\u7528\u975e\u96f6\u7684\u9000\u51fa\u4ee3\u7801\u4ece\u800c\u5bfc\u81f4\u9000\u51fa\u3002 \u8fd9\u4f7f\u60a8\u53ef\u4ee5\u5728\u4e0d\u4e2d\u65ad\u6267\u884c\u94fe\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u53ef\u80fd\u672a\u5b9a\u4e49\u7684\u811a\u672c\u3002"),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.1.0"),(0,a.kt)("p",null,"\u5b8c\u5168\u5ffd\u7565\u5e76\u53d1\u548c\u62d3\u6251\u6392\u5e8f\uff0c\u5728\u6240\u6709\u5339\u914d\u7684\u5305\u4e2d\u7acb\u5373\u8fd0\u884c\u7ed9\u5b9a\u7684\u811a\u672c \u5e76\u8f93\u51fa\u524d\u7f00\u6d41\u3002 \u8fd9\u662f\u4e2a\u63a8\u8350\u7684\u6807\u5fd7\uff0c\u7528\u4e8e\u5728\u8bb8\u591a",(0,a.kt)("inlineCode",{parentName:"p"}," packages"),"\u4e0a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u4f8b\u5982\u5197\u957f\u7684\u6784\u5efa\u8fdb\u7a0b\u3002"),(0,a.kt)("h3",{id:"--stream"},"--stream"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.1.0"),(0,a.kt)("p",null,"\u4ee5\u8d77\u59cb",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u76ee\u5f55\u4f5c\u4e3a\u524d\u7f00\uff0c\u7acb\u5373\u4ece\u5b50\u8fdb\u7a0b\u8f93\u51fa\u6d41\u3002 \u8fd9\u5141\u8bb8\u4ece\u4e0d\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u4ea4\u66ff\u8f93\u51fa\u3002"),(0,a.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.24.0"),(0,a.kt)("p",null,"\u805a\u5408\u5e76\u884c\u8fd0\u884c\u7684\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\uff0c\u5e76\u4e14\u4ec5\u5728\u5b50\u8fdb\u7a0b\u5b8c\u6210\u65f6\u6253\u5370\u8f93\u51fa\u3002 \u5b83\u4f7f\u5728\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," \u65f6\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--parallel")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," \u540e\u8bfb\u53d6\u5927\u65e5\u5fd7\u66f4\u5bb9\u6613\uff08\u5c24\u5176\u662f\u5728 CI \u4e0a\uff09\u3002 \u4ec5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"--reporter=append-only"),"\u3002"),(0,a.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.1.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u5141\u8bb8\u4ece\u4e0d\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"package"),"\u4ea4\u66ff\u8f93\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"\u5f53\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0cpnpm \u5c06\u81ea\u52a8\u8fd0\u884c\u4efb\u4f55\u524d\u7f6e/\u540e\u7f6e\u94a9\u5b50\u811a\u672c\u3002 \u6240\u4ee5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm foo"),"\uff0c\u5c31\u76f8\u5f53\u4e8e\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}d.isMDXComponent=!0}}]);