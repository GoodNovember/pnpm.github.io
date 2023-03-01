"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6545],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=p,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(_,o(o({ref:n},c),{},{components:r})):t.createElement(_,o({ref:n},c))}));function m(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},763:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=r(2962),p=r(2742),a=(r(9496),r(9613)),o=["components"],l={id:"errors",title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"},i=void 0,s={unversionedId:"errors",id:"errors",title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/ja/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"errors",title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"},sidebar:"docs",previous:{title:"\u6a5f\u80fd\u306e\u6bd4\u8f03",permalink:"/ja/next/feature-comparison"},next:{title:"\u30ed\u30b4",permalink:"/ja/next/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2},{value:"ERR_PNPM_TARBALL_INTEGRITY",id:"err_pnpm_tarball_integrity",level:2}],d={toc:u};function m(e){var n=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u5b58\u5728\u3057\u3001\u5225\u306e\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u610f\u56f3\u7684\u306b\u5909\u66f4\u3057\u305f\u3044\u5834\u5408\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001pnpm\u306f\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3057\u306a\u3044\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u4f9d\u5b58\u95a2\u4fc2\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u306e\u4f9d\u5b58\u95a2\u4fc2\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," \u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\u3057\u304b\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u306f\u5931\u6557\u3059\u308b\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/next/workspaces#workspace-protocol-workspace"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb"),"\u3092\u4f7f\u7528\u3059\u308b\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u304c\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002 \u624b\u52d5\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"\u30b3\u30de\u30f3\u30c9\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u672a\u89e3\u6c7a\u306e peer dependencies \u304c\u3042\u308b\u5834\u5408\u3001\u307e\u305f\u306f peer dependencies \u304c\u8981\u6c42\u3055\u308c\u305f\u7bc4\u56f2\u306b\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u3001\u5931\u6557\u3057\u307e\u3059\u3002 \u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u306b\u306f\u3001\u4e0d\u8db3\u3057\u3066\u3044\u308b peer dependencies \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," \u3068 ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," \u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u3092\u9078\u629e\u7684\u306b\u7121\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,a.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u306f\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3057\u306a\u3044\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044\u5834\u5408\u306b\u767a\u751f\u3057\u307e\u3059\u3002 \u3053\u308c\u306fCI\u74b0\u5883\u306b\u304a\u3044\u3066\u3001\u8ab0\u304b\u304c\u30ea\u30dd\u30b8\u30c8\u30ea\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3057\u305f\u5f8c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u3092\u5b9f\u884c\u3057\u306a\u3044\u5834\u5408\u306b\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3042\u308b\u3044\u306f\u3001\u8ab0\u304b\u304c\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u5909\u66f4\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u306e\u3092\u5fd8\u308c\u305f\u304b\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u3066\u304b\u3089\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u5909\u66f4\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u3060\u3051\u3067\u826f\u3044\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"err_pnpm_tarball_integrity"},"ERR","_","PNPM","_","TARBALL","_","INTEGRITY"),(0,a.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u306f\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e tarball \u304c\u6574\u5408\u6027\u30c1\u30a7\u30c3\u30af\u30b5\u30e0\u306e\u671f\u5f85\u5024\u3068\u4e00\u81f4\u3057\u306a\u304b\u3063\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"npm \u30ec\u30b8\u30b9\u30c8\u30ea(",(0,a.kt)("inlineCode",{parentName:"p"},"registry.npmjs.org"),")\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u308c\u306f\u304a\u305d\u3089\u304f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u6574\u5408\u6027\u304c\u6b63\u3057\u304f\u306a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u30de\u30fc\u30b8\u7af6\u5408\u3092\u6b63\u5e38\u306b\u89e3\u6c7a\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u65e2\u5b58\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0a\u66f8\u304d\u3067\u304d\u308b\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30ed\u30fc\u30ab\u30eb\u30e1\u30bf\u30c7\u30fc\u30bf\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u6574\u5408\u6027\u30c1\u30a7\u30c3\u30af\u30b5\u30e0\u304c\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30ed\u30fc\u30ab\u30eb \u30e1\u30bf\u30c7\u30fc\u30bf \u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u5931\u6557\u3057\u305f\u30b3\u30de\u30f3\u30c9\u3092\u518d\u8a66\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u6b63\u3057\u3044URL\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3082\u6ce8\u610f\u3057\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 URL\u306f\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);