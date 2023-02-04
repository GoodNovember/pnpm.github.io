"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8968],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||p;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(2962),a=t(2742),p=(t(9496),t(9613)),o=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},s=void 0,l={unversionedId:"pnpm-vs-npm",id:"pnpm-vs-npm",title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/ru/next/pnpm-vs-npm",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"docs",previous:{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",permalink:"/ru/next/uninstall"}},m={},c=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",id:"\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",level:2}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"npms-flat-tree"},"npm's flat tree"),(0,p.kt)("p",null,"npm maintains a ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),(0,p.kt)("p",null,"On the other hand, pnpm manages ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and symbolic linking to a global on-disk content-addressable store. This nets you the benefits of far less disk space usage, while also keeping your ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",(0,p.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish to learn more."),(0,p.kt)("p",null,"The good thing about pnpm's proper ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it "',(0,p.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not specified in the project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,p.kt)("p",null,"pnpm does not allow installation of packages without saving them to ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as regular dependencies. Like with npm, ",(0,p.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),(0,p.kt)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm unless they remove a dependency and leave it orphaned. That's why pnpm's implementation of the ",(0,p.kt)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),(0,p.kt)("h2",{id:"\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"),(0,p.kt)("p",null,"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430 ",(0,p.kt)("inlineCode",{parentName:"p"}," file:")," \u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043d\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435. \u041a\u0430\u043a \u0438 npm, pnpm \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u044d\u0442\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u041d\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 npm, pnpm \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0444\u0430\u0439\u043b\u043e\u0432."),(0,p.kt)("p",null,"\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,p.kt)("inlineCode",{parentName:"p"},"<root>/foo"),"), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u043c\u0435\u0435\u0442 ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, pnpm \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0434\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"<root>/bar"),", \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install ")," \u043d\u0430 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,p.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u0430\u0445 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f, \u0442\u043e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e ",(0,p.kt)("a",{parentName:"p",href:"cli/recursive"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}u.isMDXComponent=!0}}]);