"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2226],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(2962),o=n(2742),l=(n(9496),n(9613)),i=["components"],a={id:"config",title:"pnpm config"},c=void 0,p={unversionedId:"cli/config",id:"version-7.x/cli/config",title:"pnpm config",description:"Alias : c",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/fr/cli/config",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"config",title:"pnpm config"},sidebar:"version-7.x/docs",previous:{title:"pnpm doctor",permalink:"/fr/cli/doctor"},next:{title:"package.json",permalink:"/fr/package_json"}},u={},s=[{value:"Commandes",id:"commandes",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"Options",id:"options",level:2},{value:"--global, -g",id:"--global--g",level:3}],f={toc:s};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias : ",(0,l.kt)("inlineCode",{parentName:"p"},"c")),(0,l.kt)("p",null,"Manage the configuration files."),(0,l.kt)("p",null,"The configuration files are in ",(0,l.kt)("inlineCode",{parentName:"p"},"INI")," format."),(0,l.kt)("p",null,"The local configuration file is located in the root of the project and is named ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,l.kt)("p",null,"The global configuration file is located at one of the following locations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," env variable is set, then ",(0,l.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,l.kt)("li",{parentName:"ul"},"On Windows: ",(0,l.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,l.kt)("li",{parentName:"ul"},"On macOS: ",(0,l.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,l.kt)("li",{parentName:"ul"},"On Linux: ",(0,l.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,l.kt)("h2",{id:"commandes"},"Commandes"),(0,l.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,l.kt)("p",null,"Set the config key to the value provided."),(0,l.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,l.kt)("p",null,"Print the config value for the provided key."),(0,l.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,l.kt)("p",null,"Remove the config key from the config file."),(0,l.kt)("h3",{id:"list"},"list"),(0,l.kt)("p",null,"Show all the config settings."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"See the configuration in the global config file."))}g.isMDXComponent=!0}}]);