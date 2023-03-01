"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5493],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(t),d=p,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:p,r[1]=l;for(var o=2;o<i;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(2962),p=t(2742),i=(t(9496),t(9613)),r=["components"],l={id:"continuous-integration",title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},s=void 0,o={unversionedId:"continuous-integration",id:"version-7.x/continuous-integration",title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",description:"pnpm\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u3067\u7c21\u5358\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/ja/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"continuous-integration",title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3"},sidebar:"version-7.x/docs",previous:{title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b",permalink:"/ja/using-changesets"},next:{title:"Git \u3068\u306e\u9023\u643a",permalink:"/ja/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"CircleCI",id:"circleci",level:2},{value:"Jenkins",id:"jenkins",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,p.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u3067\u7c21\u5358\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u3053\u3053\u3067\u63d0\u4f9b\u3057\u3066\u3044\u308b\u5168\u3066\u306e\u8a2d\u5b9a\u3067\u3001\u30b9\u30c8\u30a2\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002 \u3068\u306f\u3044\u3048\u3001\u3053\u308c\u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3057\u3001\u30b9\u30c8\u30a2\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u901f\u304f\u306a\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u8a33\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002 \u3067\u3059\u306e\u3067\u3001\u3042\u306a\u305f\u306e\u30b8\u30e7\u30d6\u3067 pnpm \u30b9\u30c8\u30a2\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u306a\u304f\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002")),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),"\u3067\u306f\u3001\u6b21\u306e\u5185\u5bb9\u3092",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),"\u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - corepack enable\n  - corepack prepare pnpm@latest-7 --activate\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore")," \u3067\u306f\u3001\u6b21\u306e\u5185\u5bb9\u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore.yml")," \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - corepack enable\n            - corepack prepare pnpm@latest-7 --activate\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),"\u3067\u306f\u3001\u6b21\u306e\u5185\u5bb9\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),"\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - corepack enable\n  - corepack prepare pnpm@latest-7 --activate\n  - pnpm install\n")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"GitHub Actions\u3067\u306f\u3001( ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml")," \u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u304f\u3053\u3068\u306b\u3088\u3063\u3066) pnpm \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v3\n    - uses: pnpm/action-setup@v2\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u4f9d\u5b58\u95a2\u4fc2\u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," \u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u306b\u306f\u3001 pnpm \u306e\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,i.kt)("strong",{parentName:"p"},"6.10+")," \u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,i.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,i.kt)("p",null,"GitLab\u3067\u306f\u3001\u6b21\u306e\u5185\u5bb9\u3092",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"\u306b\u542b\u3081\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001pnpm\u3067\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304a\u3088\u3073\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - corepack enable\n    - corepack prepare pnpm@latest-7 --activate\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,i.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306b pnpm \u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - corepack enable\n            - corepack prepare pnpm@latest-7 --activate\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')),(0,i.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,i.kt)("p",null,"Azure Pipelines\u3067\u306f\u3001\u6b21\u306e\u5185\u5bb9\u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},".azure-pipelines.yml")," \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm\u3067\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304a\u3088\u3073\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="azure-pipelines.yml"',title:'"azure-pipelines.yml"'},'variables:\n  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store\n\nsteps:\n  - task: Cache@2\n    inputs:\n      key: \'pnpm | "$(Agent.OS)" | pnpm-lock.yaml\'\n      path: $(pnpm_config_cache)\n    displayName: Cache pnpm\n\n  - script: |\n      corepack enable\n      corepack prepare pnpm@latest-7 --activate\n      pnpm config set store-dir $(pnpm_config_cache)\n    displayName: "Setup pnpm"\n\n  - script: |\n      pnpm install\n      pnpm run build\n    displayName: "pnpm install and build"\n')),(0,i.kt)("h2",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"CircleCI\u3067\u306f\u3001\u6b21\u306e\u5185\u5bb9\u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},".circleci/config.yml")," \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001pnpm\u3067\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304a\u3088\u3073\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},'version: 2.1\n\njobs:\n  build: # this can be any name you choose\n    docker:\n      - image: node:18\n    resource_class: large\n    parallelism: 10\n\n    steps:\n      - checkout\n      - restore_cache:\n          name: Restore pnpm Package Cache\n          keys:\n            - pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n      - run:\n          name: Install pnpm package manager\n          command: |\n            corepack enable\n            corepack prepare pnpm@latest-7 --activate\n      - run:\n          name: Install Dependencies\n          command: |\n            pnpm install\n      - save_cache:\n          name: Save pnpm Package Cache\n          key: pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n          paths:\n            - node_modules\n')),(0,i.kt)("h2",{id:"jenkins"},"Jenkins"),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u306b pnpm \u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="Jenkinsfile"'},"pipeline {\n    agent {\n        docker {\n            image 'node:lts-bullseye-slim' \n            args '-p 3000:3000' \n        }\n    }\n    stages {\n        stage('Build') { \n            steps {\n                sh 'corepack enable'\n                sh 'corepack prepare pnpm@latest-7 --activate'\n                sh 'pnpm install'\n            }\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);