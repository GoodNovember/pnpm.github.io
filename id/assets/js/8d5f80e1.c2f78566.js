"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8753],{9613:(n,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(9496);function t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function p(n,e){if(null==n)return{};var a,r,t=function(n,e){if(null==n)return{};var a,r,t={},i=Object.keys(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var u=r.createContext({}),c=function(n){var e=r.useContext(u),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},s=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var a=n.components,t=n.mdxType,i=n.originalType,u=n.parentName,s=p(n,["components","mdxType","originalType","parentName"]),m=c(a),g=t,f=m["".concat(u,".").concat(g)]||m[g]||l[g]||i;return a?r.createElement(f,o(o({ref:e},s),{},{components:a})):r.createElement(f,o({ref:e},s))}));function g(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p.mdxType="string"==typeof n?n:t,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4857:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var r=a(2848),t=a(9213),i=(a(9496),a(9613)),o=["components"],p={id:"configuring",title:"Mengonfigurasi"},u=void 0,c={unversionedId:"configuring",id:"version-7.x/configuring",title:"Mengonfigurasi",description:"pnpm menggunakan  format konfigurasi npm. Maka dari itu, anda harus mengatur konfigurasi dengan cara yang serupa dengan npm. Misalnya,",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/id/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"configuring",title:"Mengonfigurasi"},sidebar:"version-7.x/docs",previous:{title:"pnpm CLI",permalink:"/id/pnpm-cli"},next:{title:"Filtering",permalink:"/id/filtering"}},s={},l=[],m={toc:l};function g(n){var e=n.components,a=(0,t.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm menggunakan ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"}," format konfigurasi npm"),". Maka dari itu, anda harus mengatur konfigurasi dengan cara yang serupa dengan npm. Misalnya,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,i.kt)("p",null,"Jika tidak ada konfigurasi yang dibuat, pnpm akan membuatnya otomatis di diska yang sama. Jika anda menginginkan pnpm dapat bekerja pada seluruh penyimpanan atau filesistem-nya, silahkan mengacu pada ",(0,i.kt)("a",{parentName:"p",href:"/id/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"}," Pertanyaan yang sering ditanyakan"),"."),(0,i.kt)("p",null,"Berikutnya, pnpm akan menggunakan konfigurasi yang sama dengan npm untuk instalasi. Jika anda memiliki registri pribadi dan npm dikonfigurasi untuk itu, pnpm juga dapat melakukan hal yang sama. tanpa konfigurasi tambahan."),(0,i.kt)("p",null,'selain diatas, pnpm juga memungkinkan anda untuk menggunakan semua parameter berbentuk "flags" (contoh ',(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,i.kt)("p",null,"Lihat pada ",(0,i.kt)("a",{parentName:"p",href:"/id/cli/config"},(0,i.kt)("inlineCode",{parentName:"a"},"config")," command")," untuk informasi lebih lanjut."))}g.isMDXComponent=!0}}]);