"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7572],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=c(n),f=l,u=g["".concat(o,".").concat(f)]||g[f]||s[f]||r;return n?a.createElement(u,p(p({ref:t},m),{},{components:n})):a.createElement(u,p({ref:t},m))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(2962),l=n(2742),r=(n(9496),n(9613)),p=["components"],i={id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"},o=void 0,c={unversionedId:"filtering",id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",description:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b3\u30de\u30f3\u30c9\u3092\u306e\u7279\u5b9a\u306e\u4e00\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5236\u9650\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/ja/next/filtering",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"},sidebar:"docs",previous:{title:"\u8a2d\u5b9a",permalink:"/ja/next/configuring"},next:{title:"\u30b9\u30af\u30ea\u30d7\u30c8",permalink:"/ja/next/scripts"}},m={},s=[{value:"Matching",id:"matching",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"\u9664\u5916",id:"\u9664\u5916",level:2},{value:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b",id:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],g={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b3\u30de\u30f3\u30c9\u3092\u306e\u7279\u5b9a\u306e\u4e00\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5236\u9650\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"pnpm \u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u540d\u524d\u307e\u305f\u306f\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u9078\u629e\u3059\u308b\u305f\u3081\u306e\u8c4a\u5bcc\u306a\u30bb\u30ec\u30af\u30bf\u69cb\u6587\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bb\u30ec\u30af\u30bf\u30fc\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," (\u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"-F"),") \u30d5\u30e9\u30b0\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,r.kt)("h2",{id:"matching"},"Matching"),(0,r.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,r.kt)("p",null,"\u5b8c\u5168\u306b\u4e00\u81f4\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u305d\u306e\u540d\u524d (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3082\u3057\u304f\u306f\u3001\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u3059\u3079\u3066\u3092\u9078\u629e\u3067\u304d\u307e\u3059 (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/*"),") \u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u6307\u5b9a\u3059\u308b\u306e\u306f\u4efb\u610f\u306a\u306e\u3067\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter=core")," \u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," \u304c\u898b\u3064\u304b\u3089\u306a\u3051\u308c\u3070 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u304c\u9078\u629e\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u540c\u3058\u540d\u524d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u8907\u6570\u3042\u308b\u5834\u5408 (\u305f\u3068\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/core"),") \u3001\u30b9\u30b3\u30fc\u30d7\u306a\u3057\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u3068\u4f55\u3082\u9078\u629e\u3055\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u95a2\u4fc2\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u672b\u5c3e\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3092\u4ed8\u3051\u307e\u3059\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"<package_name>..."),"\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u305d\u306e\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,r.kt)("p",null,"\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30eb\u30fc\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,r.kt)("p",null,"\u30eb\u30fc\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9664\u3044\u305f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e (\u76f4\u63a5\u3068\u9593\u63a5\u306e\u4e21\u65b9\u306e) \u4f9d\u5b58\u95a2\u4fc2\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u5f8c\u308d\u3001\u524d\u8ff0\u306e\u4e09\u70b9\u30ea\u30fc\u30c0\u306e\u524d\u306b\u30ad\u30e3\u30ec\u30c3\u30c8\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u81ea\u8eab\u3092\u9664\u3044\u305f\u3059\u3079\u3066\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u4f9d\u5b58\u95a2\u4fc2\u306b\u3064\u3044\u3066\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u524d\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"...<package_name>"),"\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u305d\u308c\u306b\u4f9d\u5b58\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,r.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u524d\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3068\u305d\u308c\u306b\u7d9a\u304f\u30ad\u30e3\u30ec\u30c3\u30c8\u3092\u4ed8\u3051\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u81ea\u8eab\u3092\u9664\u3044\u305f\u3059\u3079\u3066\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u306b\u4f9d\u5b58\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,r.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u4e00\u81f4\u3059\u308b\u3001\u73fe\u5728\u306e\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u306e\u76f8\u5bfe\u7684\u306a\u30b0\u30ed\u30d6\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,r.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3081\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u304a\u3088\u3073\u30ad\u30e3\u30ec\u30c3\u30c8\u6f14\u7b97\u5b50\u3068\u3068\u3082\u306b\u4f7f\u7528\u3057\u3066\u3001\u4f9d\u5b58 / \u88ab\u4f9d\u5b58\u95a2\u4fc2\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,r.kt)("p",null,"\u307e\u305f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"[<since>]")," \u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u5909\u66f4\u306e\u3042\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u307f\u3092\u3059\u3079\u3066\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,r.kt)("p",null,"\u307e\u305f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30bf\u30fc\u30f3\u306b\u4e00\u81f4\u3059\u308b\u540d\u524d\u3092\u6301\u3064\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,r.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b3\u30df\u30c3\u30c8 / \u30d6\u30e9\u30f3\u30c1\u4ee5\u964d\u306b\u5909\u66f4\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u4f9d\u5b58 / \u88ab\u4f9d\u5b58\u95a2\u4fc2\u3092\u542b\u3081\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"...")," \u63a5\u982d\u8f9e / \u63a5\u5c3e\u8f9e\u3092\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"master")," \u4ee5\u964d\u306e\u3059\u3079\u3066\u306e\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,r.kt)("h2",{id:"\u9664\u5916"},"\u9664\u5916"),(0,r.kt)("p",null,'\u3044\u305a\u308c\u306e\u30d5\u30a3\u30eb\u30bf\u30bb\u30ec\u30af\u30bf\u3082\u3001\u5148\u982d\u306b "!" \u304c\u3042\u308b\u5834\u5408\u306f\u9664\u5916\u6f14\u7b97\u5b50\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002 zsh\uff08\u304a\u3088\u3073\u304a\u305d\u3089\u304f\u4ed6\u306e\u30b7\u30a7\u30eb\uff09\u3067\u306f\u3001"!" \u306f\u30a8\u30b9\u30b1\u30fc\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a ',(0,r.kt)("inlineCode",{parentName:"p"},"\\!"),"\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," \u3092\u9664\u304f\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,r.kt)("p",null,"\u305d\u3057\u3066\u3001\u6b21\u306e\u4f8b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u306a\u3044\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,r.kt)("h2",{id:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b"},"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u3059\u308b\u969b\u306f\u3001\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u306b\u4e00\u81f4\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002 \u5fc5\u8981\u306a\u6570\u3060\u3051\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,r.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," \u3068\u540c\u3058\u52d5\u4f5c\u3092\u3057\u307e\u3059\u304c\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u4f9d\u5b58\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9078\u629e\u3059\u308b\u969b\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306f\u9664\u5916\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test-pattern")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u304c\u30c6\u30b9\u30c8\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u691c\u51fa\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3082\u3057\u305d\u3046\u3067\u3042\u308c\u3070\u3001\u305d\u306e\u3088\u3046\u306a\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,'\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001"changed since" \u30d5\u30a3\u30eb\u30bf\u3068\u4e00\u7dd2\u306b\u4f7f\u3046\u3068\u4fbf\u5229\u3067\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u5909\u66f4\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u5909\u66f4\u304c\u3042\u3063\u305f\u5834\u5408\u306f\u3001\u30c6\u30b9\u30c8\u306f\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3082\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,r.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,r.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b3\u30df\u30c3\u30c8/\u30d6\u30e9\u30f3\u30c1\u4ee5\u964d\u306b\u5909\u66f4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u969b\u306b\u3001glob\u30d1\u30bf\u30fc\u30f3\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u7121\u8996\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}f.isMDXComponent=!0}}]);