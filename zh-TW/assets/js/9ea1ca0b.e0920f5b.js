"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1567],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(2962),o=r(2742),l=(r(9496),r(9613)),a=["components"],s={id:"server",title:"pnpm server"},i=void 0,p={unversionedId:"cli/server",id:"version-6.x/cli/server",title:"pnpm server",description:"Added in: v1.30.0",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/zh-TW/6.x/cli/server",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-6.x/docs",previous:{title:"pnpm -r, --recursive",permalink:"/zh-TW/6.x/cli/recursive"},next:{title:"pnpm store",permalink:"/zh-TW/6.x/cli/store"}},u={},c=[{value:"Commands",id:"commands",level:2},{value:"pnpm server start",id:"pnpm-server-start",level:3},{value:"pnpm server stop",id:"pnpm-server-stop",level:3},{value:"pnpm server status",id:"pnpm-server-status",level:3},{value:"Options",id:"options",level:2},{value:"--background",id:"--background",level:3},{value:"--network-concurrency",id:"--network-concurrency",level:3},{value:"--protocol",id:"--protocol",level:3},{value:"--port",id:"--port",level:3},{value:"--store-dir",id:"--store-dir",level:3},{value:"--no-lock",id:"--no-lock",level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v1.30.0"),(0,l.kt)("p",null,"Manage a store server."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,l.kt)("p",null,"Starts a server that performs all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,l.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,l.kt)("p",null,"Stops the store server."),(0,l.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,l.kt)("p",null,"Prints information about the running server."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--background"},"--background"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Runs the server in the background, similar to daemonizing on UNIX systems."),(0,l.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"The maximum number of network requests to process simultaneously."),(0,l.kt)("h3",{id:"--protocol"},"--protocol"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"auto")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"auto"),", ",(0,l.kt)("strong",{parentName:"li"},"tcp"),", ",(0,l.kt)("strong",{parentName:"li"},"ipc"))),(0,l.kt)("p",null,"The communication protocol used by the server. When this is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"auto"),", IPC is used on all systems except for Windows, which uses TCP."),(0,l.kt)("h3",{id:"--port"},"--port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"5813")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"port number"))),(0,l.kt)("p",null,"The port number to use when TCP is used for communication. If a port is specified and the protocol is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"auto"),", regardless of system type, the protocol is automatically set to use TCP."),(0,l.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Path"))),(0,l.kt)("p",null,"Added in: v1 as ",(0,l.kt)("inlineCode",{parentName:"p"},"store")),(0,l.kt)("p",null,"The directory to use for the content addressable store."),(0,l.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Set whether to make the package store immutable to external processes while the server is running or not."),(0,l.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Prevents you from stopping the server using ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,l.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Prevents creating a new side effect cache during install."))}d.isMDXComponent=!0}}]);