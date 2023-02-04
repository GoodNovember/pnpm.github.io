"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1229],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var p=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=p.createContext({}),o=function(e){var n=p.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return p.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=o(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?p.createElement(g,l(l({ref:n},c),{},{components:t})):p.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var o=2;o<i;o++)l[o]=t[o];return p.createElement.apply(null,l)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var p=t(2962),a=t(2742),i=(t(9496),t(9613)),l=["components"],r={id:"continuous-integration",title:"Continuous Integration"},s=void 0,o={unversionedId:"continuous-integration",id:"continuous-integration",title:"Continuous Integration",description:"pnpm\uc740 \ub2e4\uc591\ud55c ci \uc2dc\uc2a4\ud15c\ub4e4\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/ko/next/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"continuous-integration",title:"Continuous Integration"},sidebar:"docs",previous:{title:"pnpm\uc5d0\uc11c changesets \uc0ac\uc6a9\ud558\uae30",permalink:"/ko/next/using-changesets"},next:{title:"Git\uc73c\ub85c \uc791\uc5c5\ud558\uae30",permalink:"/ko/next/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"CircleCI",id:"circleci",level:2},{value:"Jenkins",id:"jenkins",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,p.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm\uc740 \ub2e4\uc591\ud55c ci \uc2dc\uc2a4\ud15c\ub4e4\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),"\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),"\uc5d0 \ucd94\uac00\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\ub294\ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),"\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),"\uc5d0 \ucd94\uac00\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\b\uace0 \uce90\uc2f1\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),"\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),"\uc5d0 \ucd94\uac00\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"GitHub Actions\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"\ub97c \uc791\uc131\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\uace0 \uce90\uc2f1\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v3\n    - uses: pnpm/action-setup@v2\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2"),"\ub97c \ud1b5\ud574 dependencies\ub97c \uce90\uc2f1\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,i.kt)("strong",{parentName:"p"},"6.10+")," \ubc84\uc804\uc758 pnpm\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,i.kt)("p",null,"GitLab\uc5d0\uc11c pnpm\uc744 \uc0ac\uc6a9\ud558\uc5ec dependencies\uc744 \uc124\uce58\ud558\uace0 \uce90\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4( ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"\uc5d0 \uc18d\ud568)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,i.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"pnpm\uc744 \ud1b5\ud574 dependencies\ub97c \uc124\uce58\ud558\uace0 \uce90\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')),(0,i.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,i.kt)("p",null,"Azure Pipelines\uc5d0\uc11c pnpm\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),"\uc5d0 \ucd94\uac00\ud558\uc5ec dependencies\uc744 \uc124\uce58\ud558\uace0 \uce90\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="azure-pipelines.yml"',title:'"azure-pipelines.yml"'},'variables:\n  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store\n\nsteps:\n  - task: Cache@2\n    inputs:\n      key: \'pnpm | "$(Agent.OS)" | pnpm-lock.yaml\'\n      path: $(pnpm_config_cache)\n    displayName: Cache pnpm\n\n  - script: |\n      curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n      pnpm config set store-dir $(pnpm_config_cache)\n    displayName: "Setup pnpm"\n\n  - script: |\n      pnpm install\n      pnpm run build\n    displayName: "pnpm install and build"\n')),(0,i.kt)("h2",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"CircleCI\uc5d0\uc11c \uc774\uac83\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},".circleci/config.yml"),"\uc5d0 \ucd94\uac00\ud558\uc5ec pnpm\uc744 \uc0ac\uc6a9\ud558\uc5ec dependencies\uc744 \uc124\uce58\ud558\uace0 \uce90\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},'version: 2.1\n\njobs:\n  build: # this can be any name you choose\n    docker:\n      - image: node:18\n    resource_class: large\n    parallelism: 10\n\n    steps:\n      - checkout\n      - restore_cache:\n          name: Restore pnpm Package Cache\n          keys:\n            - pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n      - run:\n          name: Install pnpm package manager\n          command: |\n            curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm@7\n      - run:\n          name: Install Dependencies\n          command: |\n            pnpm install\n      - save_cache:\n          name: Save pnpm Package Cache\n          key: pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n          paths:\n            - node_modules\n')),(0,i.kt)("h2",{id:"jenkins"},"Jenkins"),(0,i.kt)("p",null,"pnpm\uc744 \ud1b5\ud574 dependencies\ub97c \uc124\uce58\ud558\uace0 \uce90\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="Jenkinsfile"'},"pipeline {\n    agent {\n        docker {\n            image 'node:lts-bullseye-slim' \n            args '-p 3000:3000' \n        }\n    }\n    stages {\n        stage('Build') { \n            steps {\n                sh 'corepack enable'\n                sh 'corepack prepare pnpm@latest --activate'\n                sh 'pnpm install'\n            }\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);