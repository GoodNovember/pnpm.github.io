"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2279],{9613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(c,p(p({ref:e},m),{},{components:a})):n.createElement(c,p({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1027:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(2962),r=a(2742),l=(a(9496),a(9613)),p=["components"],i={id:"workspaces",title:"\u5de5\u4f5c\u5340"},o=void 0,d={unversionedId:"workspaces",id:"version-7.x/workspaces",title:"\u5de5\u4f5c\u5340",description:"pnpm \u5167\u5efa\u4e86\u5c0d Monorepo (\u55ae\u4e00\u5b58\u653e\u5eab\uff0c\u53c8\u7a31\u70ba\u591a\u91cd\u5957\u4ef6\u5b58\u653e\u5eab\u3001\u591a\u91cd\u5c08\u6848\u5b58\u653e\u5eab\u6216\u6574\u5408\u578b\u5b58\u653e\u5eab) \u7684\u652f\u63f4\u3002 \u60a8\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u5de5\u4f5c\u5340\u4f86\u5c07\u591a\u500b\u5c08\u6848\u7d50\u5408\u5728\u4e00\u500b\u55ae\u4e00\u5b58\u653e\u5eab\u7684\u5167\u90e8\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh-TW/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"workspaces",title:"\u5de5\u4f5c\u5340"},sidebar:"version-7.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/zh-TW/pnpmfile"},next:{title:"\u5225\u540d\uff08Aliases\uff09",permalink:"/zh-TW/aliases"}},m={},s=[{value:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a (workspace:)",id:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a-workspace",level:2},{value:"\u901a\u904e\u5225\u540d\u5f15\u7528 Workspace \u5957\u4ef6",id:"\u901a\u904e\u5225\u540d\u5f15\u7528-workspace-\u5957\u4ef6",level:3},{value:"\u901a\u904e\u76f8\u5c0d\u8def\u5f91\u5f15\u7528 Workspace \u5957\u4ef6",id:"\u901a\u904e\u76f8\u5c0d\u8def\u5f91\u5f15\u7528-workspace-\u5957\u4ef6",level:3},{value:"\u767c\u4f48 Workspace \u5957\u4ef6",id:"\u767c\u4f48-workspace-\u5957\u4ef6",level:3},{value:"\u767c\u5e03\u6d41\u7a0b",id:"\u767c\u5e03\u6d41\u7a0b",level:2},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"\u4f7f\u7528\u7bc4\u4f8b",id:"\u4f7f\u7528\u7bc4\u4f8b",level:2}],k={toc:s};function u(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm \u5167\u5efa\u4e86\u5c0d Monorepo (\u55ae\u4e00\u5b58\u653e\u5eab\uff0c\u53c8\u7a31\u70ba\u591a\u91cd\u5957\u4ef6\u5b58\u653e\u5eab\u3001\u591a\u91cd\u5c08\u6848\u5b58\u653e\u5eab\u6216\u6574\u5408\u578b\u5b58\u653e\u5eab) \u7684\u652f\u63f4\u3002 \u60a8\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u5de5\u4f5c\u5340\u4f86\u5c07\u591a\u500b\u5c08\u6848\u7d50\u5408\u5728\u4e00\u500b\u55ae\u4e00\u5b58\u653e\u5eab\u7684\u5167\u90e8\u3002"),(0,l.kt)("p",null,"\u5de5\u4f5c\u5340\u7684\u6839\u76ee\u9304\u4e2d\u5fc5\u9808\u5177\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u6a94\u3002 \u5de5\u4f5c\u5340\u7684\u6839\u76ee\u9304\u4e2d\u4e5f\u53ef\u80fd\u6703\u5177\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc")),"\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u8981\u7814\u7a76 monorepo \u7ba1\u7406\uff0c\u90a3\u9ebd\u60a8\u9084\u53ef\u80fd\u60f3\u8981\u7814\u7a76 ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit"),"\u3002 Bit \u5be6\u969b\u4e0a\u4f7f\u7528\u7684\u662f pnpm\uff0c\u4f46\u662f\u5b83\u6703\u81ea\u52d5\u57f7\u884c\u8a31\u591a\u76ee\u524d\u5728\u7531 pnpm/npm/Yarn \u6240\u7ba1\u7406\u7684\u50b3\u7d71\u5de5\u4f5c\u5340\u4e2d\u9700\u8981\u624b\u52d5\u57f7\u884c\u7684\u52d5\u4f5c\u3002 \u6709\u4e00\u7bc7\u6709\u95dc ",(0,l.kt)("inlineCode",{parentName:"p"},"bit install")," \u7684\u6587\u7ae0\u63d0\u5230\u9019\u4e9b\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"\u7528 Bit \u8f15\u9b06\u7ba1\u7406\u55ae\u4e00\u5b58\u653e\u5eab\u76f8\u4f9d\u6027")," (\u82f1\u6587\u7db2\u9801)\u3002")),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a-workspace"},"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a (workspace:)"),(0,l.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u53ef\u7528\u7684\u5957\u4ef6\u8207\u5df2\u5ba3\u544a\u7684\u7bc4\u570d\u76f8\u7b26\uff0cpnpm \u5c07\u6703\u9023\u63a5\u5de5\u4f5c\u5340\u4e2d\u7684\u5957\u4ef6\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u5728\u5176\u4f9d\u8cf4\u9805\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," \u4e26\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u5728 Workspace \u4e2d\uff0c\u5247 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u9023\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"\u3002 \u4f46\u662f\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u5728\u4f9d\u8cf4\u9805\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," \u4e26\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u4e0d\u5728\u5de5\u4f5c\u5340\u4e2d\uff0c\u5247\u5c07\u5f9e npm registry \u4e2d\u5b89\u88dd ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0"),"\u3002 \u9019\u7a2e\u884c\u70ba\u5f15\u5165\u4e86\u4e00\u4e9b\u4e0d\u78ba\u5b9a\u6027\u3002"),(0,l.kt)("p",null,"\u5e78\u904b\u7684\u662f\uff0cpnpm \u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u5354\u8b70\u3002 \u7576\u4f7f\u7528\u6b64\u901a\u8a0a\u5354\u5b9a\u6642\uff0c pnpm \u5c07\u62d2\u7d55\u89e3\u6790\u9664\u672c\u5730 workspace \u5305\u542b\u7684 package \u4e4b\u5916\u7684\u4efb\u4f55\u5167\u5bb9\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8a2d\u7f6e\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," \u6642\uff0c\u5b89\u88dd\u5c07\u6703\u5931\u6557\uff0c\u56e0\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u4e0d\u5b58\u5728\u65bc\u6b64 workspace \u4e2d\u3002"),(0,l.kt)("p",null,"\u7576 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/npmrc#link-workspace-packages"},"link-workspace-packages")," \u9078\u9805\u88ab\u8a2d\u5b9a\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u6642\uff0c\u9019\u500b\u901a\u8a0a\u5354\u5b9a\u5c07\u7279\u5225\u6709\u7528\u3002 \u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u53ea\u6709\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u901a\u8a0a\u5354\u5b9a\u8072\u660e\u4f9d\u8cf4\uff0cpnpm \u624d\u6703\u5f9e\u6b64 workspace \u9023\u63a5\u6240\u9700\u7684\u5305\u3002"),(0,l.kt)("h3",{id:"\u901a\u904e\u5225\u540d\u5f15\u7528-workspace-\u5957\u4ef6"},"\u901a\u904e\u5225\u540d\u5f15\u7528 Workspace \u5957\u4ef6"),(0,l.kt)("p",null,"\u5047\u8a2d\u60a8\u5728 Workspace \u4e2d\u6709\u4e00\u500b\u540d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u7684\u5957\u4ef6\u3002 \u901a\u5e38\uff0c\u60a8\u6703\u5c07\u5176\u5f15\u7528\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u4e0d\u540c\u7684\u5225\u540d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8a9e\u6cd5\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"\u3002"),(0,l.kt)("p",null,"\u5728\u767c\u4f48\u4e4b\u524d\uff0c\u5225\u540d\u5c07\u8f49\u63db\u70ba\u5e38\u898f\u7684\u5225\u540d\u4f9d\u8cf4\u9805\u3002 \u4e0a\u9762\u7684\u793a\u4f8b\u5c07\u8b8a\u70ba\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"\u3002"),(0,l.kt)("h3",{id:"\u901a\u904e\u76f8\u5c0d\u8def\u5f91\u5f15\u7528-workspace-\u5957\u4ef6"},"\u901a\u904e\u76f8\u5c0d\u8def\u5f91\u5f15\u7528 Workspace \u5957\u4ef6"),(0,l.kt)("p",null,"\u5728\u5177\u6709 2 \u500b\u5957\u4ef6\u7684 Workspace \u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u53ef\u80fd\u5728\u5176\u4f9d\u8cf4\u9805\u4e2d\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u8072\u660e\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),"\u3002 \u5728\u767c\u4f48\u4e4b\u524d\uff0c\u9019\u4e9b\u898f\u7bc4\u5c07\u8f49\u63db\u70ba\u6240\u6709\u5305\u7ba1\u7406\u5668\u652f\u63f4\u7684\u5e38\u898f\u7248\u672c\u898f\u7bc4\u3002"),(0,l.kt)("h3",{id:"\u767c\u4f48-workspace-\u5957\u4ef6"},"\u767c\u4f48 Workspace \u5957\u4ef6"),(0,l.kt)("p",null,"\u7576\u4e00\u500b Workspace \u5957\u4ef6\u88ab\u6253\u5305\u70ba\u4e00\u500b\u6a94\u6848\u6642\uff08\u7121\u8ad6\u662f\u901a\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \u6216\u662f\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u9019\u6a23\u7684\u767c\u5e03\u547d\u4ee4\uff09\uff0c\u6211\u5011\u6703\u52d5\u614b\u5730\u66ff\u63db\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u4f9d\u8cf4\u9805\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6a19 workspace \u4e2d\u7684\u5c0d\u61c9\u7248\u672c\uff08\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:^"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u95dc\u806f\u7684 semver \u7bc4\u570d\uff08\u9069\u7528\u65bc\u4efb\u4f55\u5176\u4ed6\u7bc4\u570d\u985e\u578b\uff09")),(0,l.kt)("p",null,"\u770b\u4e00\u500b\u4f8b\u5b50\uff0c\u5047\u8a2d\u6211\u5011\u7684 workspace \u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," \u4e26\u4e14\u5b83\u5011\u7684\u7248\u672c\u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u5c07\u6703\u88ab\u8f49\u63db\u70ba\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u9019\u500b\u529f\u80fd\u5141\u8a31\u4f60\u767c\u5e03\u8f49\u5316\u4e4b\u5f8c\u7684\u5957\u4ef6\u5230\u9060\u7aef\uff0c\u4e26\u4e14\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u672c\u5730 workspace \u4e2d\u7684\u5957\u4ef6\uff0c\u800c\u4e0d\u9700\u8981\u5176\u5b83\u4e2d\u9593\u6b65\u9a5f\u3002\u5957\u4ef6\u7684\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u50cf\u5e38\u898f\u7684\u5957\u4ef6\u90a3\u6a23\u6b63\u5e38\u4f7f\u7528\uff0c\u4e14\u4ecd\u7136\u53d7\u76ca\u65bc\u8a9e\u7fa9\u5316\u7248\u672c\u898f\u7bc4\u3002"),(0,l.kt)("h2",{id:"\u767c\u5e03\u6d41\u7a0b"},"\u767c\u5e03\u6d41\u7a0b"),(0,l.kt)("p",null,"\u5c0d workspace \u5167\u7684\u5305\u9032\u884c\u7248\u672c\u63a7\u5236\u662f\u4e00\u9805\u8907\u96dc\u7684\u4efb\u52d9\uff0cpnpm \u76ee\u524d\u4e0d\u63d0\u4f9b\u5167\u7f6e\u89e3\u6c7a\u65b9\u6848\u3002 \u4f46\u662f\uff0c\u6709 2 \u500b\u7d93\u904e\u5145\u5206\u6e2c\u8a66\u7684\u5de5\u5177\u53ef\u4ee5\u8655\u7406\u7248\u672c\u63a7\u5236\u4e26\u652f\u63f4 pnpm\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"\u6709\u95dc\u5982\u4f55\u4f7f\u7528 Rush \u8a2d\u7f6e repository\uff0c\u8acb\u53c3\u95b1",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/zh-cn/pages/maintainer/setup_new_repo"},"\u9019\u500b\u9801\u9762")," (\u7c21\u9ad4\u4e2d\u6587\u7db2\u9801)\u3002"),(0,l.kt)("p",null,"\u6709\u95dc\u5982\u4f55\u5c07 Changesets \u8207 pnpm \u914d\u5408\u4f7f\u7528\uff0c\u8acb\u53c3\u95b1",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/using-changesets"},"\u9019\u500b\u6307\u5357"),"\u3002"),(0,l.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,l.kt)("p",null,"pnpm \u7121\u6cd5\u4fdd\u8b49\u5728 Workspace \u76f8\u4f9d\u95dc\u4fc2\u4e4b\u9593\u6709\u5faa\u74b0\u6642\uff0c\u6703\u4ee5\u62d3\u8e7c\u9806\u5e8f\u57f7\u884c\u6307\u4ee4 \u3002 \u5982\u679c pnpm \u5728\u5b89\u88dd\u671f\u9593\u5075\u6e2c\u5230\u5faa\u74b0\u76f8\u4f9d\u95dc\u4fc2\uff0c\u4ed6\u6703\u7522\u751f\u4e00\u5247\u8b66\u544a\u3002 \u5982\u679c pnpm \u80fd\u5920\u627e\u51fa\u5c0e\u81f4\u5faa\u74b0\u7684\u76f8\u4f9d\u95dc\u4fc2\uff0c\u5247\u5b83\u4e5f\u6703\u986f\u793a\u5b83\u5011\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u770b\u5230\u6d88\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),"\uff0c\u8acb\u6aa2\u67e5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u8072\u660e\u7684 workspace \u4f9d\u8cf4\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u7bc4\u4f8b"},"\u4f7f\u7528\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 pnpm workspace \u529f\u80fd\u7684\u5e7e\u500b\u6700\u71b1\u9580\u7684\u958b\u653e\u7a0b\u5f0f\u78bc\u5c08\u6848\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c08\u6848"),(0,l.kt)("th",{parentName:"tr",align:null},"\u661f\u7d1a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u79fb\u8f49\u65e5\u671f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u79fb\u8f49\u8a8d\u53ef"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/turborepo"},"Turborepo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/turborepo",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fd171519ec02a69c9afafc1bc5d9d1b481fba721"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/vercel"},"Vercel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/vercel",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2023-01-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9c768b98b71cfc72e8638bf5172be88c39e8fa69"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/logto-io/logto"},"Logto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/logto-io/logto",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b002e07850c8e6d09b35d22fab56d3e99d77043"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))))))}u.isMDXComponent=!0}}]);