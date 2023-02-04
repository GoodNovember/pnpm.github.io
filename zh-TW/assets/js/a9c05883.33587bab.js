"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7007],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||r;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>k});var n=a(2962),i=a(2742),r=(a(9496),a(9613)),o=["components"],l={id:"workspaces",title:"Workspace"},p=void 0,s={unversionedId:"workspaces",id:"version-6.x/workspaces",title:"Workspace",description:"pnpm \u5167\u5efa\u4e86\u5c0d Monorepo (\u55ae\u4e00\u5b58\u653e\u5eab\uff0c\u53c8\u7a31\u70ba\u591a\u91cd\u5957\u4ef6\u5b58\u653e\u5eab\u3001\u591a\u91cd\u5c08\u6848\u5b58\u653e\u5eab\u6216\u6574\u5408\u578b\u5b58\u653e\u5eab) \u7684\u652f\u63f4\u3002 \u60a8\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u5de5\u4f5c\u5340\u4f86\u5c07\u591a\u500b\u5c08\u6848\u7d50\u5408\u5728\u55ae\u500b\u5b58\u653e\u5eab\u7684\u5167\u90e8\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh-TW/6.x/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"workspaces",title:"Workspace"},sidebar:"version-6.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/zh-TW/6.x/pnpmfile"},next:{title:"\u5225\u540d\uff08Aliases\uff09",permalink:"/zh-TW/6.x/aliases"}},c={},k=[{value:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a (workspace:)",id:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a-workspace",level:2},{value:"\u900f\u904e\u5225\u540d\u53c3\u8003\u5de5\u4f5c\u5340\u5957\u4ef6",id:"\u900f\u904e\u5225\u540d\u53c3\u8003\u5de5\u4f5c\u5340\u5957\u4ef6",level:3},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",level:3},{value:"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6",id:"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6",level:3},{value:"\u91cb\u51fa\u5de5\u4f5c\u6d41\u7a0b",id:"\u91cb\u51fa\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"Options",id:"options",level:2},{value:"link-workspace-packages",id:"link-workspace-packages",level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Usage examples",id:"usage-examples",level:2}],d={toc:k};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm \u5167\u5efa\u4e86\u5c0d Monorepo (\u55ae\u4e00\u5b58\u653e\u5eab\uff0c\u53c8\u7a31\u70ba\u591a\u91cd\u5957\u4ef6\u5b58\u653e\u5eab\u3001\u591a\u91cd\u5c08\u6848\u5b58\u653e\u5eab\u6216\u6574\u5408\u578b\u5b58\u653e\u5eab) \u7684\u652f\u63f4\u3002 \u60a8\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u5de5\u4f5c\u5340\u4f86\u5c07\u591a\u500b\u5c08\u6848\u7d50\u5408\u5728\u55ae\u500b\u5b58\u653e\u5eab\u7684\u5167\u90e8\u3002"),(0,r.kt)("p",null,"\u5de5\u4f5c\u5340\u7684\u6839\u76ee\u9304\u4e2d\u5fc5\u9808\u5177\u6709 ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/6.x/pnpm-workspace_yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u6a94\u3002 \u5de5\u4f5c\u5340\u7684\u6839\u76ee\u9304\u4e2d\u4e5f\u53ef\u80fd\u6703\u5177\u6709 ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/6.x/npmrc"},(0,r.kt)("inlineCode",{parentName:"a"},".npmrc")),"\u3002"),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a-workspace"},"\u5de5\u4f5c\u5340\u901a\u8a0a\u5354\u5b9a (workspace:)"),(0,r.kt)("p",null,"Added in: v3.7.0."),(0,r.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies and ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not in the workspace. However, if ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),(0,r.kt)("p",null,"Luckily, pnpm supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol. When this protocol is used, pnpm will refuse to resolve to anything other than a local workspace package. So, if you set ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time installation will fail because ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),(0,r.kt)("p",null,"This protocol is especially useful when the ",(0,r.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,r.kt)("h3",{id:"\u900f\u904e\u5225\u540d\u53c3\u8003\u5de5\u4f5c\u5340\u5957\u4ef6"},"\u900f\u904e\u5225\u540d\u53c3\u8003\u5de5\u4f5c\u5340\u5957\u4ef6"),(0,r.kt)("p",null,"Added in: v5.12.0"),(0,r.kt)("p",null,"Let's say you have a package in the workspace named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),". Usually, you would reference it as ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,r.kt)("p",null,"If you want to use a different alias, the following syntax will work too: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,r.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,r.kt)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),(0,r.kt)("p",null,"Added in: v5.12.0"),(0,r.kt)("p",null,"In a workspace with 2 packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),(0,r.kt)("h3",{id:"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6"},"\u767c\u4f48\u5de5\u4f5c\u5340\u5957\u4ef6"),(0,r.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,r.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,r.kt)("p",null,"So for example, if we have ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zoo")," in the workspace and they all are at version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,r.kt)("p",null,"Will be transformed into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,r.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,r.kt)("h2",{id:"\u91cb\u51fa\u5de5\u4f5c\u6d41\u7a0b"},"\u91cb\u51fa\u5de5\u4f5c\u6d41\u7a0b"),(0,r.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,r.kt)("p",null,"For how to set up a repository using Rush, read ",(0,r.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,r.kt)("p",null,"For using Changesets with pnpm, read ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/6.x/using-changesets"},"this guide"),"."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,r.kt)("p",null,"Added in: v2.14.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"true"),", ",(0,r.kt)("strong",{parentName:"li"},"false"),", ",(0,r.kt)("strong",{parentName:"li"},"deep"))),(0,r.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,r.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,r.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,r.kt)("p",null,"Added in: v5.13.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,r.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,r.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,r.kt)("p",null,"Added in: v2.17.0 as ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,r.kt)("p",null,"Advantages of this option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,r.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,r.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Even though all the dependencies will be hard linked into the root ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking.")),(0,r.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,r.kt)("p",null,"You might want to change this setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,r.kt)("p",null,"If you see the message ",(0,r.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,r.kt)("p",null,"Here are a few open source projects that use the workspace feature of pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ice-lab/icestark"},"icestark")," (as of 12/16/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"4862326a8de53d02f617e7b1986774fd7540fccd"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")," (as of 10/9/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Rollup plugins")," (as of 9/21/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (as of 2/18/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (as of 9/25/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (as of 4/12/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"SvelteKit")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/telecraft/telecraft"},"Telecraft")," (as of 9/26/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"73a9c48c9d4f160d758b8881f404cc52c20a7454"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hayes/giraphql"},"GiraphQL")," (as of 8/4/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"3dd3ff148da382d6f406f20626a9a5c25707c0c8"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/msgbyte/tailchat"},"Tailchat")," (as of 12/27/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"298af71aa0619e0a8fa8717777afe2fb32739db4"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitest-dev/vitest"},"Vitest")," (as of 12/13/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/element-plus/element-plus"},"Element Plus")," (as of 9/23/2021, commit ",(0,r.kt)("inlineCode",{parentName:"li"},"f9e192535ff74d1443f1d9e0c5394fad10428629"),")")))}m.isMDXComponent=!0}}]);