"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7255],{9613:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>c});var t=a(9496);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},i=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?t.createElement(k,s(s({ref:n},i),{},{components:a})):t.createElement(k,s({ref:n},i))}));function c(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var d=2;d<r;d++)s[d]=a[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2750:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var t=a(2962),o=a(2742),r=(a(9496),a(9613)),s=["components"],p={title:"El node_modules plano no es la \xfanica forma",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,d={permalink:"/es/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/es-ES",source:"@site/i18n/es/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"El node_modules plano no es la \xfanica forma",description:"Los nuevos usuarios de pnpm me preguntan con frecuencia sobre la extra\xf1a estructura de node_modules que crea pnpm. \xbfPor qu\xe9 no es plano? \xbfD\xf3nde est\xe1n todas las sub-dependencias?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 de mayo de 2020",tags:[],readingTime:2.89,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"El node_modules plano no es la \xfanica forma",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/es/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},i={authorsImageUrls:[void 0]},u=[],m={toc:u};function c(e){var n=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Los nuevos usuarios de pnpm me preguntan con frecuencia sobre la extra\xf1a estructura de ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," que crea pnpm. \xbfPor qu\xe9 no es plano? \xbfD\xf3nde est\xe1n todas las sub-dependencias?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Voy a suponer que los lectores del art\xedculo ya est\xe1n familiarizados con el ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," plano creado por npm y Yarn. Si no entiendes por qu\xe9 npm 3 tuvo que empezar a usar planos ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," en v3, puedes encontrar algo de prehistoria en ",(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"}," \xbfPor qu\xe9 debemos usar pnpm?")," ",(0,r.kt)("em",{parentName:"p"},"(en ingl\xe9s)"),".")),(0,r.kt)("p",null,"Entonces, \xbfpor qu\xe9 es inusual el ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules de pnpm"),"? Vamos a crear dos directorios y ejecutar ",(0,r.kt)("inlineCode",{parentName:"p"},"npm add express")," en uno de ellos y ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add express")," en el otro. Aqu\xed est\xe1 la parte superior de lo que obtienes en ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," del primer directorio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,r.kt)("p",null,"Puedes ver todo el directorio ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"aqu\xed"),"."),(0,r.kt)("p",null,"Y esto es lo que obtienes en los ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," creados por pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,r.kt)("p",null,"Puedes comprobarlo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"aqu\xed"),"."),(0,r.kt)("p",null,"Entonces, \xbfd\xf3nde est\xe1n todas las sub-dependencias? Solo hay una carpeta en ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," llamada ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," y un enlace simb\xf3lico llamado ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),". Bueno, solo hemos instalado ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", as\xed que este es el \xfanico paquete al que tu aplicaci\xf3n tiene que tener acceso"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lea m\xe1s sobre por qu\xe9 la rigurosidad de pnpm es algo bueno ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"aqu\xed")," ",(0,r.kt)("em",{parentName:"p"},"(en ingl\xe9s)"))),(0,r.kt)("p",null,"Let's see what is inside ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n  .modules.yaml\n")),(0,r.kt)("p",null,"\xbf",(0,r.kt)("inlineCode",{parentName:"p"},"express")," no tiene ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"? \xbfD\xf3nde est\xe1n todas las dependencias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),"?"),(0,r.kt)("p",null,"El truco est\xe1 en que ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," es s\xf3lo un enlace simb\xf3lico. Cuando Node.js resuelve las dependencias, usa sus ubicaciones reales, por lo que no conserva los enlaces simb\xf3licos. Pero, \xbfd\xf3nde est\xe1 la ubicaci\xf3n real de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", podr\xedas preguntarte?"),(0,r.kt)("p",null,"Aqu\xed: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,r.kt)("p",null,"OK, ahora conocemos el prop\xf3sito de la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/"),". ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," almacena todos los paquetes en una estructura de carpetas plana, por lo que cada paquete se puede encontrar en una carpeta nombrada con este patr\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,r.kt)("p",null,"Lo llamamos el directorio de almacenamiento virtual."),(0,r.kt)("p",null,"Esta estructura plana evita los problemas de ruta larga causados por los ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," anidados creados por npm v2, pero mantiene los paquetes aislados a diferencia de los ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," planos creados por npm v3,4,5,6 o Yarn v1."),(0,r.kt)("p",null,"Ahora veamos la ubicaci\xf3n real de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,r.kt)("p",null,"\xbfEs una estafa? \xa1Todav\xeda le falta ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"! El segundo truco de la estructura de ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," de pnpm es que las dependencias de los paquetes est\xe1n en el mismo nivel de directorio en el que se encuentra la ubicaci\xf3n real del paquete dependiente. As\xed que las dependencias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," no est\xe1n en ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," sino en ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,r.kt)("p",null,"Todas las dependencias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," son enlaces simb\xf3licos a los directorios apropiados en ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Colocar dependencias de ",(0,r.kt)("inlineCode",{parentName:"p"},"expreso")," en un nivel superior permite evitar enlaces simb\xf3licos circulares."),(0,r.kt)("p",null,"As\xed que como puedes ver, a pesar de que la estructura ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," de pnpm parece inusual al principio:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"es completamente compatible con Node.js"),(0,r.kt)("li",{parentName:"ol"},"los paquetes est\xe1n bien agrupados con sus dependencias")),(0,r.kt)("p",null,"La estructura es un poco ",(0,r.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"m\xe1s compleja")," para paquetes con dependencias entre pares, pero la idea es la misma: usar enlaces simb\xf3licos para crear un anidamiento con una estructura de directorio plana."))}c.isMDXComponent=!0}}]);