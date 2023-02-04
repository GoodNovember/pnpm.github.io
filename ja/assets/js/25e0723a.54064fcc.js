"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4553],{9613:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,d=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(d,o(o({ref:t},h),{},{components:a})):n.createElement(d,o({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(2962),i=a(2742),r=(a(9496),a(9613)),o=["components"],l={title:"The year 2022 for pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48",image:"/img/blog/2022-review.png"},s=void 0,p={permalink:"/ja/blog/2022/12/30/yearly-update",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2022-12-30-yearly-update.md",title:"The year 2022 for pnpm",description:"It is the end of the year. A really hard year. As you may know, I live in Ukraine, so due to Russia's war against us, it was harder to lead this project than in previous years. Nevertheless, it was a good year for pnpm. We've got a lot of new users, contributors, and we have implemented many great features.",date:"2022-12-30T00:00:00.000Z",formattedDate:"2022\u5e7412\u670830\u65e5",tags:[],readingTime:2.545,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"The year 2022 for pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48",image:"/img/blog/2022-review.png"},nextItem:{title:"2021\u5e74\u306epnpm",permalink:"/ja/blog/2021/12/29/yearly-update"}},h={authorsImageUrls:[void 0]},m=[{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570",id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570",level:3},{value:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570",id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570",level:3},{value:"GitHub\u306e\u30b9\u30bf\u30fc\u6570",id:"github\u306e\u30b9\u30bf\u30fc\u6570",level:3},{value:"Our contributors",id:"our-contributors",level:3},{value:"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8",id:"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8",level:2},{value:"Supporting a symlinkless hoisted <code>node_modules</code> (since v6.25.0)",id:"supporting-a-symlinkless-hoisted-node_modules-since-v6250",level:3},{value:"Side effects cache (since v7.0.0)",id:"side-effects-cache-since-v700",level:3},{value:"Dependencies patching (since v7.4.0)",id:"dependencies-patching-since-v740",level:3},{value:"Time-based resolution strategy (since v7.10.0)",id:"time-based-resolution-strategy-since-v7100",level:3},{value:"Listing licenses of dependencies (since v7.17.0)",id:"listing-licenses-of-dependencies-since-v7170",level:3}],c={toc:m};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is the end of the year. A really hard year. As you may know, I live in Ukraine, so due to Russia's war against us, it was harder to lead this project than in previous years. Nevertheless, it was a good year for pnpm. We've got a lot of new users, contributors, and we have implemented many great features."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2423).Z,width:"640",height:"640"})),(0,r.kt)("p",null,"(the above illustration was generated by Midjourney. The tiger symolizes the year of the tiger)"),(0,r.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,r.kt)("h3",{id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570"),(0,r.kt)("p",null,"My goal this year was to beat Lerna by the number of downloads. We were able to achieve this goal ",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=lerna&from=2022-01-01&to=2022-12-30"},"in August"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6717).Z,width:"997",height:"400"})),(0,r.kt)("p",null,"pnpm was downloaded more than ",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2022-12-30"},"5 times more")," in 2022 than in 2021:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1119).Z,width:"997",height:"400"})),(0,r.kt)("h3",{id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570"),(0,r.kt)("p",null,"\u79c1\u305f\u3061\u306fGoogle Analytics\u3092\u4f7f\u3063\u3066\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30b5\u30a4\u30c8\u304b\u3089\u500b\u4eba\u3092\u7279\u5b9a\u3067\u304d\u306a\u3044\u7d71\u8a08\u60c5\u5831\u3092\u53ce\u96c6\u3057\u3066\u3044\u307e\u3059\u3002 In 2022, sometimes we had more than 20,000 unique visitors a week. This is 10 times more than in 2021!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7865).Z,width:"778",height:"391"})),(0,r.kt)("h3",{id:"github\u306e\u30b9\u30bf\u30fc\u6570"},"GitHub\u306e\u30b9\u30bf\u30fc\u6570"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"main GitHub repository")," received almost +7,000 stars this year."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2871).Z,width:"584",height:"787"})),(0,r.kt)("h3",{id:"our-contributors"},"Our contributors"),(0,r.kt)("p",null,"We had a lot of new and active contributors this year. These are the people the merge at least one PR in 2022:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zkochan"},"Zoltan Kochan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lvqq"},"chlorine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/await-ovo"},"await-ovo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gluxon"},"Brandon Cheng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/d3lm"},"Dominic Elm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mcmxcdev"},"MCMXC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dev-itsheng"},"\u90a3\u91cc\u597d\u810f\u4e0d\u53ef\u4ee5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HomyeeKing"},"Homyee King")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Shinyaigeek"},"Shinobu Hayashi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/BlackHole1"},"Black-Hole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kenrick95"},"Kenrick")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/weyert"},"Weyert de Boer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gwhitney"},"Glen Whitney")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chengcyber"},"Cheng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fireairforce"},"zoomdong")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufec"},"thinkhalo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/LuciNyan"},"\u5b50\u77bb Luci")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Spencer17x"},"spencer17x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/liuxingbaoyu"},"liuxingbaoyu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WhiteKiwi"},"\uc7a5\uc9c0\ud6c8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jondlm"},"Jon de la Motte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Jack-Works"},"Jack Works")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/milahu"},"milahu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/David-Collins"},"David Collins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nikoladev"},"nikoladev")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ibezkrovnyi"},"Igor Bezkrovnyi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/illright"},"Lev Chelyadinov")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/javier-garcia-meteologica"},"javier-garcia-meteologica"))),(0,r.kt)("h2",{id:"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8"},"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8"),(0,r.kt)("h3",{id:"supporting-a-symlinkless-hoisted-node_modules-since-v6250"},"Supporting a symlinkless hoisted ",(0,r.kt)("inlineCode",{parentName:"h3"},"node_modules")," (since ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.25.0"},"v6.25.0"),")"),(0,r.kt)("p",null,'Right at the beginning of 2022, we have added support for the "traditional" hoisted (a.k.a flat ',(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"). We use Yarn's hoisting algorithm to create a proper hoisted ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". This new setting has basically made pnpm compatible with all Node.js stack that are compatible with npm CLI."),(0,r.kt)("p",null,"To use the hoisted ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory structure, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-linker=hoisted")," setting in an ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," file."),(0,r.kt)("h3",{id:"side-effects-cache-since-v700"},"Side effects cache (since ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.0.0"},"v7.0.0"),")"),(0,r.kt)("p",null,"Since v7, ",(0,r.kt)("a",{parentName:"p",href:"/npmrc#side-effects-cache"},"side-effect-cache")," is enabled by default, so dependencies that should be built are only built once on a machine. This improves installation speed by a lot in projects that have dependencies with build scripts."),(0,r.kt)("h3",{id:"dependencies-patching-since-v740"},"Dependencies patching (since ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.4.0"},"v7.4.0"),")"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/cli/patch"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," command have been added for patching dependencies in your ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,r.kt)("h3",{id:"time-based-resolution-strategy-since-v7100"},"Time-based resolution strategy (since ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.10.0"},"v7.10.0"),")"),(0,r.kt)("p",null,"A new resolution mode was added to pnpm, which should make updating dependencies more secure. You can change the resolution mode with the ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/npmrc#resolution-mode"},"resolution-mode")," setting."),(0,r.kt)("h3",{id:"listing-licenses-of-dependencies-since-v7170"},"Listing licenses of dependencies (since ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.17.0"},"v7.17.0"),")"),(0,r.kt)("p",null,"You may now use the ",(0,r.kt)("a",{parentName:"p",href:"/cli/licenses"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm licenses list"))," command to check the licenses of the installed packages."))}u.isMDXComponent=!0},2423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2022-review-092f8f0dfe82b760c2e90fd776d82f75.png"},1119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/download-stats-2022-e4de79bf61e1066802166f9d97cb36ac.png"},7865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ga-unique-visits-2022-b2e9bf0b6c559a5c59fdbfd8bb1861f0.png"},6717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pnpm-vs-lerna-stats-cad28f3b9685ef684c864f919f7f9c5e.png"},2871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stars-2022-434ca95e6da688fdff1bb1bf89d6a2d9.png"}}]);