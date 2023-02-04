"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1830],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(b,p(p({ref:n},s),{},{components:t})):r.createElement(b,p({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var d=2;d<a;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(2962),o=t(2742),a=(t(9496),t(9613)),p=["components"],l={id:"how-peers-are-resolved",title:"\u041a\u0430\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 peer depencies"},i=void 0,d={unversionedId:"how-peers-are-resolved",id:"version-6.x/how-peers-are-resolved",title:"\u041a\u0430\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 peer depencies",description:"\u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 pnpm \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d \u043d\u0430\u0431\u043e\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. \u041e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u2014 \u043f\u0430\u043a\u0435\u0442\u044b \u0441 peer dependencies.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/how-peers-are-resolved.md",sourceDirName:".",slug:"/how-peers-are-resolved",permalink:"/ru/6.x/how-peers-are-resolved",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"how-peers-are-resolved",title:"\u041a\u0430\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 peer depencies"},sidebar:"version-6.x/docs",previous:{title:"Symlinked `node_modules` structure",permalink:"/ru/6.x/symlinked-node-modules-structure"},next:{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",permalink:"/ru/6.x/uninstall"}},s={},u=[],c={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 pnpm \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d \u043d\u0430\u0431\u043e\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. \u041e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u2014 \u043f\u0430\u043a\u0435\u0442\u044b \u0441 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"peer dependencies"),"."),(0,a.kt)("p",null,"Peer-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u044e\u0442\u0441\u044f \u0438\u0437 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435 \u0432 \u0433\u0440\u0430\u0444\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u043f\u043e\u043a\u0430 \u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442 \u0441 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u0435\u0441\u0442\u044c \u0434\u0432\u0435 peer-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 (",(0,a.kt)("inlineCode",{parentName:"p"},"bar@^1")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@^1"),"), \u0442\u043e \u0443 \u043d\u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),(0,a.kt)("p",null,"\u0412 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-1")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-2"),". \u041e\u0431\u0430 \u043f\u0430\u043a\u0435\u0442\u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u044e\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),", \u043d\u043e \u043e\u043d\u0438 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),". \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u0438\u043c\u0435\u0435\u0442 \u0434\u0432\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u0430 \u0438\u0437 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439: \u043e\u0434\u0438\u043d \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.0.0"),", \u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.1.0"),". \u0427\u0442\u043e\u0431\u044b \u044d\u0442\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u043b\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, pnpm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0436\u0451\u0441\u0442\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u043d \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u0430\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 peer dependencies, \u043e\u043d \u0441\u0432\u044f\u0437\u0430\u043d \u0436\u0451\u0441\u0442\u043a\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0441 \u043f\u0430\u043f\u043a\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0440\u044f\u0434\u043e\u043c \u0441 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 peer dependencies, \u0434\u043b\u044f \u043d\u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f peer dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043b\u0438\u0431\u043e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.0.0"),", \u043b\u0438\u0431\u043e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),". \u041a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0432 Node.js \u043d\u0430\u0439\u0434\u0435\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 peer dependencies."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If a package has no peer dependencies but has dependencies with peers that are resolved higher in the graph"),", then that transitive package can appear in the project with different sets of dependencies. For instance, there's package ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," with a single dependency ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," has a peer dependency ",(0,a.kt)("inlineCode",{parentName:"p"},"c@^1"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," will never resolve the peers of ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),", so it becomes dependent from the peers of ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," as well."),(0,a.kt)("p",null,"Here's how that structure will look in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),". In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," will need to appear twice in the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," - resolved once with ",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.0.0")," and again with ",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.1.0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.1.0/node_modules/c\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}m.isMDXComponent=!0}}]);