"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6838],{9613:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=o(a),c=l,u=s["".concat(d,".").concat(c)]||s[c]||m[c]||r;return a?n.createElement(u,p(p({ref:t},k),{},{components:a})):n.createElement(u,p({ref:t},k))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(2962),l=a(2742),r=(a(9496),a(9613)),p=["components"],i={id:"add",title:"pnpm add <pkg>"},d=void 0,o={unversionedId:"cli/add",id:"version-7.x/cli/add",title:"pnpm add <pkg>",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u308c\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u306f production \u4f9d\u5b58\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/ja/cli/add",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-7.x/docs",previous:{title:"\u30b9\u30af\u30ea\u30d7\u30c8",permalink:"/ja/scripts"},next:{title:"pnpm install",permalink:"/ja/cli/install"}},k={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148",id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148",level:2},{value:"npm \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"npm-\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"\u30ea\u30e2\u30fc\u30c8\u306e tarball \u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30ea\u30e2\u30fc\u30c8\u306e-tarball-\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"Git \u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"git-\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"Options",id:"options",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check",id:"--ignore-workspace-root-check",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:m};function c(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u308c\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u306f production \u4f9d\u5b58\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30b3\u30de\u30f3\u30c9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u5473"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dependencies")," \u3078\u4fdd\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies")," \u3078\u4fdd\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies")," \u3078\u4fdd\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"next")," \u30bf\u30b0\u306b\u5bfe\u5fdc\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4fdd\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0")," \u3092\u6307\u5b9a")))),(0,r.kt)("h2",{id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148"},"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148"),(0,r.kt)("h3",{id:"npm-\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"npm \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u6700\u65b0\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"package-name")," \u3092 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," \u3088\u308a\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u5b9f\u884c\u3055\u308c\u305f\u5834\u5408\u3001\u6700\u521d\u306b\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u6307\u5b9a\u3055\u308c\u305f\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u3001\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u6b21\u306e\u3088\u3046\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tag \u3092\u6307\u5b9a: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6307\u5b9a: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u6307\u5b9a: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,r.kt)("h3",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9")," \u304b\u3089\u4f9d\u5b58\u3092\u8ffd\u52a0\u3057\u3066\u4f5c\u696d\u3059\u308b\u5834\u5408\u306f\u3001\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148\u306f\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/ja/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," \u3068 ",(0,r.kt)("a",{parentName:"p",href:"/ja/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u7bc4\u56f2\u6307\u5b9a"))," \u306e\u8a2d\u5b9a\u306b\u3088\u3063\u3066\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"tarball \u30d5\u30a1\u30a4\u30eb\u304b\u3089 (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089")),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408\u306f\u3001\u73fe\u5728\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306b\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link")," \u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3068\u540c\u69d8\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30ea\u30e2\u30fc\u30c8\u306e-tarball-\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30ea\u30e2\u30fc\u30c8\u306e tarball \u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,'\u5f15\u6570\u306f\u3001 "http://" \u307e\u305f\u306f "https://" \u3067\u59cb\u307e\u308b\u30d5\u30a7\u30c3\u30c1\u53ef\u80fd\u306a URL \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002'),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"git-\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Git \u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"\u30db\u30b9\u30c8\u3055\u308c\u305f Git \u30d7\u30ed\u30d0\u30a4\u30c0\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 Git \u3067\u30af\u30ed\u30fc\u30f3\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 \u7279\u5b9a\u306e\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b\u5bfe\u3057\u3066 Git \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,r.kt)("p",null,"\u6b21\u306e\u65b9\u6cd5\u3067 Git \u306b\u3088\u308a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master \u30d6\u30e9\u30f3\u30c1\u306e\u6700\u65b0\u306e\u30b3\u30df\u30c3\u30c8: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30b3\u30df\u30c3\u30c8: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30d6\u30e9\u30f3\u30c1: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u901a\u5e38\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," \u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u901a\u5e38\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u901a\u5e38\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"pnpm \u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e semver \u7bc4\u56f2\u6307\u5b9a\u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u56fa\u5b9a\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," \u3092\u4f7f\u3046\u3053\u3068\u3067\u30011\u3064\u4ee5\u4e0a\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u3068  ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306e\u4e21\u65b9\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--ignore-workspace-root-check"},"--ignore-workspace-root-check"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," \u30d5\u30e9\u30b0\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001\u65b0\u3057\u3044\u4f9d\u5b58\u95a2\u4fc2\u3092\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306b\u8ffd\u52a0\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u5931\u6557\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -w")),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u898b\u3064\u304b\u3063\u305f\u5834\u5408\u306b\u306e\u307f\u3001\u65b0\u3057\u3044\u4f9d\u5b58\u95a2\u4fc2\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}c.isMDXComponent=!0}}]);