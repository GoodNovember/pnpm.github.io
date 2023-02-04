"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9507],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(a,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=s;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>f});var n=r(2962),o=r(2742),i=(r(9496),r(9613)),c=["components"],p={id:"production",title:"Production"},a=void 0,l={unversionedId:"production",id:"version-6.x/production",title:"Production",description:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u0441 pnpm. \u041e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u2014 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u043c\u043c\u0438\u0442 lockfile. \u0417\u0430\u0442\u0435\u043c, \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 pnpm install - \u044d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0434\u0435\u0440\u0435\u0432\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e lockfile, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043c\u0443, \u043a\u0430\u043a\u0438\u043c\u0438 \u043e\u043d\u0438 \u0431\u044b\u043b\u0438 \u043f\u0440\u0438 \u043a\u043e\u043c\u043c\u0438\u0442\u0435 lockfile. \u042d\u0442\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 (\u0438 \u0442\u043e\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c) \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0430\u0445.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/production.md",sourceDirName:".",slug:"/production",permalink:"/ru/6.x/production",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"production",title:"Production"}},u={},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u0441 pnpm. \u041e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u2014 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u043c\u043c\u0438\u0442 lockfile. \u0417\u0430\u0442\u0435\u043c, \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," - \u044d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0434\u0435\u0440\u0435\u0432\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e lockfile, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043c\u0443, \u043a\u0430\u043a\u0438\u043c\u0438 \u043e\u043d\u0438 \u0431\u044b\u043b\u0438 \u043f\u0440\u0438 \u043a\u043e\u043c\u043c\u0438\u0442\u0435 lockfile. \u042d\u0442\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 (\u0438 \u0442\u043e\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c) \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0430\u0445."),(0,i.kt)("p",null,"\u0414\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u043e\u043c\u043c\u0438\u0442\u0438\u0442\u044c lockfile \u0418 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432 \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u0441\u0440\u0435\u0434\u0443 (\u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u043f\u0446\u0438\u0438 ",(0,i.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"store location option"),"). \u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --offline"),", \u0438 pnpm \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0440\u0435\u0435\u0441\u0442\u0440\u0443. \u042d\u0442\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f ",(0,i.kt)("strong",{parentName:"p"},"\u0422\u041e\u041b\u042c\u041a\u041e")," \u0434\u043b\u044f \u0441\u0440\u0435\u0434, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0435\u0441\u0442\u0440\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435."))}m.isMDXComponent=!0}}]);