"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5273],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),s=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,k=u["".concat(r,".").concat(m)]||u[m]||c[m]||p;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(2848),i=t(9213),p=(t(9496),t(9613)),o=["components"],l={id:"package_json",title:"package.json"},r=void 0,s={unversionedId:"package_json",id:"version-6.x/package_json",title:"package.json",description:"O arquivo de manifesto de um pacote. Cont\xe9m todos os metadados do pacote, incluindo depend\xeancias, t\xedtulo, autor e etc. Este \xe9 um padr\xe3o preservado por todos os principais gerenciadores de pacotes do Node.JS, incluindo o pnpm.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/pt/6.x/package_json",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-6.x/docs",previous:{title:"pnpm setup",permalink:"/pt/6.x/cli/setup"},next:{title:".npmrc",permalink:"/pt/6.x/npmrc"}},d={},c=[{value:"Fields",id:"fields",level:2},{value:"engines",id:"engines",level:3},{value:"dependenciesMeta",id:"dependenciesmeta",level:3},{value:"dependenciesMeta.*.injected",id:"dependenciesmetainjected",level:4},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",level:3},{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",level:4},{value:"publishConfig",id:"publishconfig",level:3},{value:"publishConfig.executableFiles",id:"publishconfigexecutablefiles",level:4},{value:"publishConfig.directory",id:"publishconfigdirectory",level:4},{value:"pnpm.overrides",id:"pnpmoverrides",level:3},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",level:3},{value:"pnpm.peerDependencyRules.ignoreMissing",id:"pnpmpeerdependencyrulesignoremissing",level:3},{value:"pnpm.peerDependencyRules.allowedVersions",id:"pnpmpeerdependencyrulesallowedversions",level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",level:3},{value:"pnpm.onlyBuiltDependencies",id:"pnpmonlybuiltdependencies",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"O arquivo de manifesto de um pacote. Cont\xe9m todos os metadados do pacote, incluindo depend\xeancias, t\xedtulo, autor e etc. Este \xe9 um padr\xe3o preservado por todos os principais gerenciadores de pacotes do Node.JS, incluindo o pnpm."),(0,p.kt)("h2",{id:"fields"},"Fields"),(0,p.kt)("h3",{id:"engines"},"engines"),(0,p.kt)("p",null,"Voc\xea pode especificar a vers\xe3o do Node e do pnpm em que o seu software funciona:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,p.kt)("p",null,"Durante o desenvolvimento local, o pnpm sempre falhar\xe1 com uma mensagem de erro se sua vers\xe3o n\xe3o corresponder \xe0 especificada no campo ",(0,p.kt)("inlineCode",{parentName:"p"},"engines"),"."),(0,p.kt)("p",null,"A menos que o usu\xe1rio tenha definido a flag de configura\xe7\xe3o ",(0,p.kt)("inlineCode",{parentName:"p"},"engine-strict")," (veja ",(0,p.kt)("a",{parentName:"p",href:"/pt/6.x/npmrc#engine-strict"},".npmrc"),"), esse campo \xe9 apenas consultivo e s\xf3 produzir\xe1 avisos quando seu pacote for instalado como depend\xeancia."),(0,p.kt)("h3",{id:"dependenciesmeta"},"dependenciesMeta"),(0,p.kt)("h4",{id:"dependenciesmetainjected"},"dependenciesMeta.*.injected"),(0,p.kt)("p",null,"Added in: v6.20.0"),(0,p.kt)("p",null,"If this is set to true for a local dependency, the package will be hard linked to the modules directory, not symlinked."),(0,p.kt)("p",null,"For instance, the following ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," in a workspace will create a symlink to ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," in the ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," directory of ",(0,p.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0"\n  }\n}\n')),(0,p.kt)("p",null,"But what if ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," has ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," in its peer dependencies? If all projects in the monorepo use the same version of ",(0,p.kt)("inlineCode",{parentName:"p"},"react"),", then no problem. But what if ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," is required by ",(0,p.kt)("inlineCode",{parentName:"p"},"card")," that uses ",(0,p.kt)("inlineCode",{parentName:"p"},"react@16")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"form")," with ",(0,p.kt)("inlineCode",{parentName:"p"},"react@17"),"? Without using ",(0,p.kt)("inlineCode",{parentName:"p"},"inject"),", you'd have to choose a single version of ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," and install it as dev dependency of ",(0,p.kt)("inlineCode",{parentName:"p"},"button"),". But using the ",(0,p.kt)("inlineCode",{parentName:"p"},"injected")," field you can inject ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," to a package, and ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," will be installed with the ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," version of that package."),(0,p.kt)("p",null,"So this will be the ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," of ",(0,p.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "16"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"button")," will be hard linked into the dependencies of ",(0,p.kt)("inlineCode",{parentName:"p"},"card"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"react@16")," will be symlinked to the dependencies of ",(0,p.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"."),(0,p.kt)("p",null,"And this will be the ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," of ",(0,p.kt)("inlineCode",{parentName:"p"},"form"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "form",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "17"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"button")," will be hard linked into the dependencies of ",(0,p.kt)("inlineCode",{parentName:"p"},"form"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"react@17")," will be symlinked to the dependencies of ",(0,p.kt)("inlineCode",{parentName:"p"},"form/node_modules/button"),"."),(0,p.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,p.kt)("p",null,"This field lists some extra information related to the dependencies listed in the ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,p.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,p.kt)("p",null,"If this is set to true, the selected peer dependency will be marked as optional by the package manager. Therefore, the consumer omitting it will no longer be reported as an error."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,p.kt)("p",null,"Note that even though ",(0,p.kt)("inlineCode",{parentName:"p"},"bar")," was not specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is marked as optional. pnpm will therefore assume that any version of bar is fine. However, ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),(0,p.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,p.kt)("p",null,"Added in: v3.4.0"),(0,p.kt)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#bin"},(0,p.kt)("inlineCode",{parentName:"a"},"bin"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#main"},(0,p.kt)("inlineCode",{parentName:"a"},"main"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,p.kt)("inlineCode",{parentName:"a"},"exports"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#types"},(0,p.kt)("inlineCode",{parentName:"a"},"types")," ou ",(0,p.kt)("inlineCode",{parentName:"a"},"typings"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#module"},(0,p.kt)("inlineCode",{parentName:"a"},"module"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#browser"},(0,p.kt)("inlineCode",{parentName:"a"},"browser"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#esnext"},(0,p.kt)("inlineCode",{parentName:"a"},"esnext"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#es2015"},(0,p.kt)("inlineCode",{parentName:"a"},"es2015"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,p.kt)("inlineCode",{parentName:"a"},"unpkg"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#microbundle"},(0,p.kt)("inlineCode",{parentName:"a"},"umd:main"))),(0,p.kt)("li",{parentName:"ul"},"cpu"),(0,p.kt)("li",{parentName:"ul"},"os")),(0,p.kt)("p",null,"To override a field, add the publish version of the field to ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,p.kt)("p",null,"For instance, the following ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,p.kt)("p",null,"Will be published as:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,p.kt)("h4",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,p.kt)("p",null,"Added in: v6.11.5"),(0,p.kt)("p",null,"By default, for portability reasons, no files except those listed in the bin field will be marked as executable in the resulting package archive. The ",(0,p.kt)("inlineCode",{parentName:"p"},"executableFiles")," field lets you declare additional fields that must have the executable flag (+x) set even if they aren't directly accessible through the bin field."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js"\n    ]\n  }\n}\n')),(0,p.kt)("h4",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,p.kt)("p",null,"Added in: v6.7.0"),(0,p.kt)("p",null,"You also can use the field ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," to customize the published subdirectory relative to the current ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("p",null,"It is expected to have a modified version of the current package in the specified directory (usually using third party build tools)."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Nesse exemplo, a pasta ",(0,p.kt)("inlineCode",{parentName:"p"},"dist")," deve conter um ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,p.kt)("p",null,"Added in: v5.10.1"),(0,p.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),(0,p.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,p.kt)("p",null,"An example of the ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "quux": "npm:@myorg/quux@^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,p.kt)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',(0,p.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,p.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,p.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),(0,p.kt)("h3",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,p.kt)("p",null,"Added in: v6.9.0"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," fields offer a way to extend the existing package definitions with additional information. For example, if ",(0,p.kt)("inlineCode",{parentName:"p"},"react-redux")," should have ",(0,p.kt)("inlineCode",{parentName:"p"},"react-dom")," in its ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," but it has not, it is possible to patch ",(0,p.kt)("inlineCode",{parentName:"p"},"react-redux")," using ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"The keys in ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," are package names or package names and semver ranges, so it is possible to patch only some versions of a package:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"The following fields may be extended using ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,p.kt)("p",null,"A bigger example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing"),(0,p.kt)("p",null,"Added in: v6.26.0"),(0,p.kt)("p",null,"pnpm will not print warnings about missing peer dependencies from this list."),(0,p.kt)("p",null,"For instance, with the following configuration, pnpm will not print warnings if a dependency needs ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," but ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," is not installed:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"]\n    }\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions"),(0,p.kt)("p",null,"Added in: v6.26.0"),(0,p.kt)("p",null,"Unmet peer dependency warnings will not be printed for peer dependencies of the specified range."),(0,p.kt)("p",null,"For instance, if you have some dependencies that need ",(0,p.kt)("inlineCode",{parentName:"p"},"react@16")," but you know that they work fine with ",(0,p.kt)("inlineCode",{parentName:"p"},"react@17"),", then you may use the following configuration:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowedVersions": {\n        "react": "17"\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"This will tell pnpm that any dependency that has react in its peer dependencies should allow ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," v17 to be installed."),(0,p.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,p.kt)("p",null,"Added in: v5.16.0"),(0,p.kt)("p",null,'This field allows to ignore the builds of specific dependencies. The "preinstall", "install", and "postinstall" scripts of the listed packages will not be executed during installation.'),(0,p.kt)("p",null,"An example of the ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmonlybuiltdependencies"},"pnpm.onlyBuiltDependencies"),(0,p.kt)("p",null,"Added in: v6.32.0"),(0,p.kt)("p",null,"A list of package names that are allowed to be executed during installation. If this field exists, only the listed packages will be able to run install scripts."),(0,p.kt)("p",null,"Exemplo:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);