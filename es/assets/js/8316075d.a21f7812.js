"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8413],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(f,p(p({ref:n},d),{},{components:t})):o.createElement(f,p({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<a;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(2962),r=t(2742),a=(t(9496),t(9613)),p=["components"],s={id:"how-peers-are-resolved",title:"C\xf3mo se resuelven los peers"},i=void 0,l={unversionedId:"how-peers-are-resolved",id:"version-7.x/how-peers-are-resolved",title:"C\xf3mo se resuelven los peers",description:"Una de las mejores caracter\xedsticas de pnpm es que en un proyecto, una versi\xf3n espec\xedfica de un paquete siempre tendr\xe1 un conjunto de dependencias. Hay una excepci\xf3n a la regla, los paquetes con peer dependencies.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/how-peers-are-resolved.md",sourceDirName:".",slug:"/how-peers-are-resolved",permalink:"/es/how-peers-are-resolved",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"how-peers-are-resolved",title:"C\xf3mo se resuelven los peers"},sidebar:"version-7.x/docs",previous:{title:"Estructura de `node_modules` con enlaces simb\xf3licos",permalink:"/es/symlinked-node-modules-structure"},next:{title:"Desinstalando pnpm",permalink:"/es/uninstall"}},d={},c=[],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Una de las mejores caracter\xedsticas de pnpm es que en un proyecto, una versi\xf3n espec\xedfica de un paquete siempre tendr\xe1 un conjunto de dependencias. Hay una excepci\xf3n a la regla, los paquetes con ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"peer dependencies"),"."),(0,a.kt)("p",null,"Las Peer dependencies son resueltas desde dependencias instaladas m\xe1s arriba en el \xe1rbol de dependencias, ya que comparten el mismo padre. Esto significa que si ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," tiene dos pares (",(0,a.kt)("inlineCode",{parentName:"p"},"bar@^1")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@^1"),") entonces podria tener difentes juegos de dependencias en el mismo proyecto."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),(0,a.kt)("p",null,"In the example above, ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is installed for ",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-2"),". Ambos paquetes tambi\xe9n tienen ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"baz")," , pero dependen de versiones diferentes de ",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),". As a result, ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," has two different sets of dependencies: one with ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.0.0")," and the other one with ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.1.0"),". To support these use cases, pnpm has to hard link ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," as many times as there are different dependency sets."),(0,a.kt)("p",null,"Normally, if a package does not have peer dependencies, it is hard linked to a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder next to symlinks of its dependencies, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"However, if ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," has peer dependencies, there may be multiple sets of dependencies for it, so we create different sets for different peer dependency resolutions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"We create symlinks either to the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," that is inside ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.0.0")," or to the one in ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),". As a consequence, the Node.js module resolver will find the correct peers."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If a package has no peer dependencies but has dependencies with peers that are resolved higher in the graph"),", then that transitive package can appear in the project with different sets of dependencies. For instance, there's package ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," with a single dependency ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," has a peer dependency ",(0,a.kt)("inlineCode",{parentName:"p"},"c@^1"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," will never resolve the peers of ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),", so it becomes dependent from the peers of ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," as well."),(0,a.kt)("p",null,"Here's how that structure will look in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),". In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," will need to appear twice in the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," - resolved once with ",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.0.0")," and again with ",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.1.0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.1.0/node_modules/c\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}m.isMDXComponent=!0}}]);