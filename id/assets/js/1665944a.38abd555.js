"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5367],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(2962),a=n(2742),i=(n(9496),n(9613)),o=["components"],l={id:"git",title:"Bekerja dengan Git"},s=void 0,c={unversionedId:"git",id:"version-7.x/git",title:"Bekerja dengan Git",description:"Lockfiles",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/git.md",sourceDirName:".",slug:"/git",permalink:"/id/git",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"git",title:"Bekerja dengan Git"},sidebar:"version-7.x/docs",previous:{title:"Integrasi Berkelanjutan (CI)",permalink:"/id/continuous-integration"},next:{title:"Error Codes",permalink:"/id/errors"}},p={},u=[{value:"Lockfiles",id:"lockfiles",level:2},{value:"Merge conflicts",id:"merge-conflicts",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,i.kt)("p",null,"Anda harus selalu mengikutsertakan lockfile (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),") kedalam git. sebagian besar kasus penggunaan lockfile, terutama :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"memungkinkan instalasi lebih cepat untuk CI dan lingkungan produksi, karena mampu melewati resolusi paket"),(0,i.kt)("li",{parentName:"ul"},"membuat instalasi dan resolusi yang konsisten antara lingkungan pengembangan, pengujian , dan produksi, yang berarti paket yang digunakan dalam pengujian dan produksi akan sama persis seperti ketika Anda mengembangkan proyek Anda")),(0,i.kt)("h3",{id:"merge-conflicts"},"Merge conflicts"),(0,i.kt)("p",null,"pnpm dapat secara otomatis menyelesaikan merge conflict di ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Jika Anda menemui konflik dalam git, jalankan saja ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," lalu komit perubahan tersebut."),(0,i.kt)("p",null,"Namun, berhati-hatilah. It is advised that you review the changes prior to staging a commit, because we cannot guarantee that pnpm will choose the correct head - it instead builds with the most updated of lockfiles, which is ideal in most cases."))}d.isMDXComponent=!0}}]);