"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1722],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||l;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(2962),i=t(2742),l=(t(9496),t(9613)),o=["components"],a={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-6.x/cli/unlink",title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/zh-TW/6.x/cli/unlink",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-6.x/docs",previous:{title:"pnpm link",permalink:"/zh-TW/6.x/cli/link"},next:{title:"pnpm import",permalink:"/zh-TW/6.x/cli/import"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],f={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,l.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,l.kt)("p",null,"This is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-TW/6.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);