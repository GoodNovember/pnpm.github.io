"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5933],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),h=i,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||s;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(2962),i=t(2742),s=(t(9496),t(9613)),r=["components"],o={id:"using-changesets",title:"Usando Changesets con pnpm"},p=void 0,l={unversionedId:"using-changesets",id:"version-7.x/using-changesets",title:"Usando Changesets con pnpm",description:"Al momento de escribir esta documentaci\xf3n, la \xfaltima versi\xf3n de pnpm era v6.14. La \xfaltima versi\xf3n de Changesets fue v2.16.0.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/es/using-changesets",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"using-changesets",title:"Usando Changesets con pnpm"},sidebar:"version-7.x/docs",previous:{title:"Autocompletado en la linea de comandos",permalink:"/es/completion"},next:{title:"Integraci\xf3n continua",permalink:"/es/continuous-integration"}},c={},u=[{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Adding new changesets",id:"adding-new-changesets",level:2},{value:"Releasing changes",id:"releasing-changes",level:2},{value:"Using GitHub Actions",id:"using-github-actions",level:2},{value:"Bump up package versions",id:"bump-up-package-versions",level:3},{value:"Publishing",id:"publishing",level:3}],m={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Al momento de escribir esta documentaci\xf3n, la \xfaltima versi\xf3n de pnpm era v6.14. La \xfaltima versi\xf3n de ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," fue v2.16.0.")),(0,s.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,s.kt)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency in the root of the workspace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,s.kt)("p",null,"Then changesets' init command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,s.kt)("h2",{id:"adding-new-changesets"},"Adding new changesets"),(0,s.kt)("p",null,"To generate a new changeset, run ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," in the root of the repository. The generated markdown files in the ",(0,s.kt)("inlineCode",{parentName:"p"},".changeset")," directory should be committed to the repository."),(0,s.kt)("h2",{id:"releasing-changes"},"Releasing changes"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset version"),". This will bump the versions of the packages previously specified with ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," (and any dependents of those) and update the changelog files."),(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),(0,s.kt)("li",{parentName:"ol"},"Commit the changes."),(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),(0,s.kt)("h2",{id:"using-github-actions"},"Using GitHub Actions"),(0,s.kt)("p",null,"To automate the process, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,s.kt)("h3",{id:"bump-up-package-versions"},"Bump up package versions"),(0,s.kt)("p",null,"The action will detect when changeset files arrive in the ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," branch, and then open a new PR listing all the packages with bumped versions. Once merged, the packages will be updated and you can decide whether to publish or not by adding the ",(0,s.kt)("inlineCode",{parentName:"p"},"publish")," property."),(0,s.kt)("h3",{id:"publishing"},"Publishing"),(0,s.kt)("p",null,"Add a new script ",(0,s.kt)("inlineCode",{parentName:"p"},"ci:publish")," which executes ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm publish -r"),". It will publish to the registry once the PR is opened by ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"package.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n      "ci:publish": "pnpm publish -r"\n   },\n   ...\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,s.kt)("p",null,"More info and documentation regarding this action can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."))}h.isMDXComponent=!0}}]);