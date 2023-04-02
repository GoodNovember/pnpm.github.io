"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1752],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,k=d["".concat(o,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(2962),l=n(2742),a=(n(9496),n(9613)),p=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ja/next/cli/exec",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/ja/next/cli/test"},next:{title:"pnpm dlx",permalink:"/ja/next/cli/dlx"}},u={},m=[{value:"\u5177\u4f53\u4f8b",id:"\u5177\u4f53\u4f8b",level:2},{value:"\u5f15\u6570",id:"\u5f15\u6570",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"\u4f8b",id:"\u4f8b",level:4},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u74b0\u5883\u5909\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\u3092\u8ffd\u52a0\u3057\u305f\u72b6\u614b\u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u306f\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u542b\u307e\u308c\u308b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5177\u4f53\u4f8b"},"\u5177\u4f53\u4f8b"),(0,a.kt)("p",null,"\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u306bJest\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306a\u3089\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u3067\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"\u5b9f\u969b\u306e\u3068\u3053\u308d\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"exec"),"\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u304cpnpm\u306e\u7d44\u307f\u8fbc\u307f\u30b3\u30de\u30f3\u30c9\u3068\u885d\u7a81\u3057\u306a\u3044\u5834\u5408\u3001\u305d\u306e\u307e\u307e\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u30b3\u30de\u30f3\u30c9\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u3068\u3044\u3046\u30ad\u30fc\u30ef\u30fc\u30c9\u306e\u524d\u306b\u7f6e\u304b\u308c\u3066\u3044\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u306e\u5f8c\u306b\u7f6e\u304b\u308c\u305f\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u5b9f\u884c\u5bfe\u8c61\u306b\u30b3\u30de\u30f3\u30c9\u306b\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u826f\u3044\u4f8b\u3002 pnpm \u306f\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u518d\u5e30\u7684\u306b\u5b9f\u884c\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u6b21\u306e\u4f8b\u3067\u306f pnpm \u306f\u30b3\u30de\u30f3\u30c9\u3092\u518d\u5e30\u7684\u306b\u5b9f\u884c\u305b\u305a\u3001\u4ee3\u308f\u308a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," \u304c ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," \u3068\u3044\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u4ed8\u304d\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u540d\u524d\u306f\u3001\u74b0\u5883\u5909\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," \u3067\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h4",{id:"\u4f8b"},"\u4f8b"),(0,a.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3092\u524a\u9664\u3059\u308b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u3002 \u3053\u308c\u306f\u3001\u74b0\u5883\u5909\u6570\u304c\u6b63\u3057\u304d\u5c55\u958b\u3055\u308c\u308b\u305f\u3081\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (\u307e\u305f\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") \u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u3068\u3082\u306b\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,a.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"\u4e26\u884c\u6027\u3068\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u5b8c\u5168\u306b\u7121\u8996\u3057\u3066\u3001\u30de\u30c3\u30c1\u3059\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5373\u6642\u5b9f\u884c\u3057\u3001\u63a5\u982d\u8f9e\u4ed8\u304d\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3067\u51fa\u529b\u3057\u307e\u3059\u3002 \u3053\u306e\u30d5\u30e9\u30b0\u306f\u3001\u591a\u304f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u9577\u6642\u9593\u5b9f\u884c\u3055\u308c\u308b\u51e6\u7406\u3001\u4f8b\u3048\u3070\u3001\u9577\u6642\u9593\u306e\u30d3\u30eb\u30c9\u51e6\u7406\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"\u30b7\u30a7\u30eb\u5185\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 UNIX\u3067\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," \u3092\u4f7f\u7528\u3057\u3001Windows\u3067\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/next/cli/run#--report-summary"},"Read about this option in the run command docs")),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0}}]);