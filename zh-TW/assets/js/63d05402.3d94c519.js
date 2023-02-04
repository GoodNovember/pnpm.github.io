"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4160],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),v=l,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(2962),l=n(2742),i=(n(9496),n(9613)),o=["components"],a={id:"list",title:"pnpm list"},p=void 0,c={unversionedId:"cli/list",id:"version-7.x/cli/list",title:"pnpm list",description:"\u547d\u4ee4\u5225\u540d\uff1als",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/zh-TW/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-7.x/docs",previous:{title:"pnpm audit",permalink:"/zh-TW/cli/audit"},next:{title:"pnpm outdated",permalink:"/zh-TW/cli/outdated"}},s={},d=[{value:"\u53c3\u6578\u9078\u9805",id:"\u53c3\u6578\u9078\u9805",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--depth &lt;\u6578\u5b57&gt;",id:"--depth-\u6578\u5b57",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d};function v(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u547d\u4ee4\u5225\u540d\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"ls")),(0,i.kt)("p",null,"\u57f7\u884c\u6b64\u547d\u4ee4\u5c07\u6703\u4ee5\u6a39\u72c0\u7d50\u69cb\u8f38\u51fa\u6240\u6709\u5b89\u88dd\u7684\u5957\u4ef6\u53ca\u5176\u4f9d\u9644\u9805\u76ee\u7684\u7248\u672c\u8cc7\u8a0a\u3002"),(0,i.kt)("p",null,"Positional arguments are ",(0,i.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. \u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"\u3002"),(0,i.kt)("h2",{id:"\u53c3\u6578\u9078\u9805"},"\u53c3\u6578\u9078\u9805"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"\u4ee5 JSON \u683c\u5f0f\u8f38\u51fa\u7d00\u9304\u3002"),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"\u986f\u793a\u984d\u5916\u8cc7\u8a0a\u3002"),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"\u4ee5\u53ef\u88ab\u5256\u6790\u7684\u683c\u5f0f\u53d6\u4ee3\u6a39\u72c0\u5716\u4f86\u8f38\u51fa\u5957\u4ef6\u7684\u6240\u5728\u76ee\u9304\uff0c"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"\u5217\u51fa\u4f4d\u65bc\u5168\u57df\u5b89\u88dd\u76ee\u9304\u4e2d\u7684\u5957\u4ef6\uff0c\u800c\u975e\u76ee\u524d\u5c08\u6848\u4e2d\u7684\u3002"),(0,i.kt)("h3",{id:"--depth-\u6578\u5b57"},"--depth ","<","\u6578\u5b57",">"),(0,i.kt)("p",null,"\u5957\u4ef6\u4f9d\u9644\u95dc\u4fc2\u6a39\u7684\u6700\u5927\u6df1\u5ea6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," \u50c5\u70ba\u5217\u51fa\u76f4\u63a5\u7684\u4f9d\u9644\u9805\u76ee\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," \u50c5\u70ba\u5217\u51fa\u5c08\u6848\u3002 \u5728 workspace \u4e2d\uff0c\u8207 ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," \u9078\u9805\u4e00\u8d77\u4f7f\u7528\u6642\u5f88\u65b9\u4fbf\u3002"),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"\u50c5\u986f\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," \u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u5957\u4ef6\u4e4b\u4f9d\u9644\u95dc\u4fc2\u6a39\u3002"),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"\u50c5\u986f\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u7684\u5957\u4ef6\u4e4b\u4f9d\u9644\u95dc\u4fc2\u6a39\u3002"),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"\u4e0d\u986f\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u5957\u4ef6\u3002"),(0,i.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,i.kt)("p",null,"\u65b0\u589e\u65bc v7.22.0"),(0,i.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-TW/filtering"},"Read more about filtering.")))}v.isMDXComponent=!0}}]);