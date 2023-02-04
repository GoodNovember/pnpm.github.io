"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6770],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=l.createContext({}),s=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=a,u=k["".concat(r,".").concat(d)]||k[d]||m[d]||o;return n?l.createElement(u,i(i({ref:t},c),{},{components:n})):l.createElement(u,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var l=n(2962),a=n(2742),o=(n(9496),n(9613)),i=["components"],p={id:"pnpmfile",title:".pnpmfile.cjs"},r=void 0,s={unversionedId:"pnpmfile",id:"pnpmfile",title:".pnpmfile.cjs",description:"pnpm \u8b93\u60a8\u53ef\u4ee5\u900f\u904e\u7279\u6b8a\u51fd\u5f0f (hooks) \u5c0d\u5b89\u88dd\u904e\u7a0b\u9032\u884c\u4f5c\u7528\u3002 hooks \u53ef\u4ee5\u88ab\u5b9a\u7fa9\u65bc\u7a31\u70ba .pnpmfile.cjs \u7684\u6a94\u6848\u4e2d\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/zh-TW/next/pnpmfile",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"docs",previous:{title:"pnpm-workspace.yaml",permalink:"/zh-TW/next/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/zh-TW/next/workspaces"}},c={},m=[{value:"Hooks",id:"hooks",level:2},{value:"\u6458\u8981",id:"\u6458\u8981",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"\u5f15\u6578",id:"\u5f15\u6578",level:4},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:4},{value:"\u5df2\u77e5\u7684\u9650\u5236",id:"\u5df2\u77e5\u7684\u9650\u5236",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"\u5f15\u6578",id:"\u5f15\u6578-1",level:4},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:4},{value:"\u5df2\u77e5\u7684\u9650\u5236",id:"\u5df2\u77e5\u7684\u9650\u5236-1",level:4},{value:"\u76f8\u95dc\u8a2d\u5b9a",id:"\u76f8\u95dc\u8a2d\u5b9a",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],k={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm \u8b93\u60a8\u53ef\u4ee5\u900f\u904e\u7279\u6b8a\u51fd\u5f0f (hooks) \u5c0d\u5b89\u88dd\u904e\u7a0b\u9032\u884c\u4f5c\u7528\u3002 hooks \u53ef\u4ee5\u88ab\u5b9a\u7fa9\u65bc\u7a31\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u7684\u6a94\u6848\u4e2d\u3002"),(0,o.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u61c9\u8207 lockfile \u7f6e\u65bc\u540c\u6a23\u7684\u76ee\u9304\u4e2d\u3002 \u4f8b\u5982\uff0c\u5728\u4e00\u500b\u5171\u7528 lockfile \u7684 ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/next/workspaces"},"\u5de5\u4f5c\u5340")," \u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u61c9\u7f6e\u65bc\u6b64 monorepo \u7684\u6839\u76ee\u9304\u3002"),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"\u6458\u8981"},"\u6458\u8981"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook \u51fd\u5f0f"),(0,o.kt)("th",{parentName:"tr",align:null},"Process"),(0,o.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728 pnpm \u5256\u6790\u4f9d\u9644\u5957\u4ef6\u7684\u8cc7\u8a0a\u6e05\u55ae (manifest) \u5f8c\u547c\u53eb\u6b64\u51fd\u5f0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8b93\u60a8\u53ef\u4ee5\u8b8a\u66f4\u4f9d\u9644\u5957\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u89e3\u6790\u4f9d\u9644\u95dc\u4fc2\u5b8c\u6210\u5f8c\u547c\u53eb\u6b64\u51fd\u5f0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8b93\u60a8\u53ef\u4ee5\u8b8a\u66f4 lockfile")))),(0,o.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,o.kt)("p",null,"Allows you to mutate a dependency's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to resolution. These mutations are not saved to the filesystem, however, they will affect what gets resolved in the lockfile and therefore what gets installed."),(0,o.kt)("p",null,"Note that you will need to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want to modify."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you need changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," saved to the filesystem, you need to use the ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/next/cli/patch"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," command and patch the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. This might be useful if you want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," field of a dependency for instance.")),(0,o.kt)("h4",{id:"\u5f15\u6578"},"\u5f15\u6578"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,o.kt)("h4",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"Example ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,o.kt)("h4",{id:"\u5df2\u77e5\u7684\u9650\u5236"},"\u5df2\u77e5\u7684\u9650\u5236"),(0,o.kt)("p",null,"Removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,o.kt)("inlineCode",{parentName:"p"},"readPackage")," will not prevent pnpm from building the dependency. When building a dependency, pnpm reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not affected by the hook. In order to ignore a package's build, use the ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/next/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,o.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,o.kt)("p",null,"Allows you to mutate the lockfile output before it is serialized."),(0,o.kt)("h4",{id:"\u5f15\u6578-1"},"\u5f15\u6578"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,o.kt)("h4",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,o.kt)("h4",{id:"\u5df2\u77e5\u7684\u9650\u5236-1"},"\u5df2\u77e5\u7684\u9650\u5236"),(0,o.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via this function, and you can even extend the lockfile's functionality."),(0,o.kt)("h2",{id:"\u76f8\u95dc\u8a2d\u5b9a"},"\u76f8\u95dc\u8a2d\u5b9a"),(0,o.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u578b\u5225\uff1a",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," will be ignored. Useful together with ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),(0,o.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,o.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,o.kt)("p",null,"\u6307\u5b9a pnpmfile \u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,o.kt)("p",null,"\u6307\u5b9a\u4e00\u4efd\u5168\u57df pnpmfile \u7684\u4f4d\u7f6e\u3002 \u5b89\u88dd\u671f\u9593\u7684\u6240\u6709\u5c08\u6848\u90fd\u6703\u4f7f\u7528\u6b64\u6a94\u6848\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to use local pnpmfiles. Only use a global pnpmfile if you use pnpm on projects that don't use pnpm as the primary package manager.")))}d.isMDXComponent=!0}}]);