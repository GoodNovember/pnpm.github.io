"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8106],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),g=l,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(2962),l=n(2742),i=(n(9496),n(9613)),o=["components"],a={id:"config",title:"pnpm config"},c=void 0,p={unversionedId:"cli/config",id:"cli/config",title:"pnpm config",description:"\u522b\u540d\uff1a c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/zh/next/cli/config",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"config",title:"pnpm config"},sidebar:"docs",previous:{title:"pnpm doctor",permalink:"/zh/next/cli/doctor"},next:{title:"package.json",permalink:"/zh/next/package_json"}},u={},s=[{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--global, -g",id:"--global--g",level:3}],f={toc:s};function g(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u522b\u540d\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"c")),(0,i.kt)("p",null,"\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"INI")," \u683c\u5f0f\u3002"),(0,i.kt)("p",null,"\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\uff0c\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc"),"\u3002"),(0,i.kt)("p",null,"\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,i.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," \u73af\u5883\u53d8\u91cf\uff0c\u5219\u4e3a ",(0,i.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,i.kt)("li",{parentName:"ul"},"\u5728 Windows \u4e0a\uff1a",(0,i.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,i.kt)("li",{parentName:"ul"},"\u5728 macOS \u4e0a\uff1a",(0,i.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,i.kt)("li",{parentName:"ul"},"\u5728 Linux \u4e0a\uff1a",(0,i.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,i.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,i.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,i.kt)("p",null,"\u8bbe\u7f6econfig\u4e2d\u63d0\u4f9b\u7684key\uff0c\u548c\u76f8\u5bf9\u5e94\u7684value"),(0,i.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,i.kt)("p",null,"\u6253\u5370config\u4e2d\u63d0\u4f9b\u7684key\u5bf9\u5e94\u7684value"),(0,i.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,i.kt)("p",null,"\u4ececonfig\u6587\u4ef6\u4e2d\u5220\u9664\u914d\u7f6e\u8fc7\u7684key\u3002"),(0,i.kt)("h3",{id:"list"},"list"),(0,i.kt)("p",null,"\u663e\u793a\u6240\u6709config\u7684\u8bbe\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"\u67e5\u770b\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u3002"))}g.isMDXComponent=!0}}]);