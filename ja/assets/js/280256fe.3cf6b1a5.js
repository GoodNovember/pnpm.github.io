"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1853],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,k=f["".concat(p,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(2962),i=n(2742),l=(n(9496),n(9613)),a=["components"],o={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"cli/unlink",title:"pnpm unlink",description:"\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u304b\u3089\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059 (pnpm link\u306e\u9006\u3067\u3059) \u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/ja/next/cli/unlink",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/ja/next/cli/link"},next:{title:"pnpm import",permalink:"/ja/next/cli/import"}},u={},s=[{value:"\u5f15\u6570",id:"\u5f15\u6570",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u304b\u3089\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059 (",(0,l.kt)("a",{parentName:"p",href:"/ja/next/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),"\u306e\u9006\u3067\u3059) \u3002"),(0,l.kt)("p",null,"\u5f15\u6570\u306a\u3057\u3067\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u30ea\u30f3\u30af\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),"\u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001pnpm\u306f\u5916\u90e8\u30ea\u30f3\u30af\u3092\u524a\u9664\u3057\u305f\u3042\u3068\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/next/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9")," \u5185\u3067\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3084\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);