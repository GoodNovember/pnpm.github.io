"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7657],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,_=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(_,i(i({ref:n},c),{},{components:r})):t.createElement(_,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3644:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var t=r(2962),a=r(2742),o=(r(9496),r(9613)),i=["components"],p={id:"errors",title:"C\xf3digos de error"},s=void 0,l={unversionedId:"errors",id:"version-7.x/errors",title:"C\xf3digos de error",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/es/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"errors",title:"C\xf3digos de error"},sidebar:"version-7.x/docs",previous:{title:"Trabajando con Git",permalink:"/es/git"},next:{title:"Logotipos",permalink:"/es/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],u={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"Un directorio de m\xf3dulos est\xe1 presente y est\xe1 vinculado a un directorio de almacenamiento diferente."),(0,o.kt)("p",null,"Si cambi\xf3 el directorio de la tienda intencionalmente, ejecute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," y pnpm reinstalar\xe1 las dependencias usando el nuevo almacenamiento."),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"Un proyecto tiene una dependencia de espacio de trabajo que no existe en el espacio de trabajo."),(0,o.kt)("p",null,"Por ejemplo, el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," tiene ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," en las ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencias"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Sin embargo, solo hay ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," en el espacio de trabajo, por lo que ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallar\xe1."),(0,o.kt)("p",null,"Para corregir este error, todas las dependencias que usan el ",(0,o.kt)("a",{parentName:"p",href:"/es/workspaces#workspace-protocol-workspace"},"protocolo de espacio de trabajo")," deben actualizarse para usar versiones de paquetes que est\xe1n presentes en el espacio de trabajo. Esto puede hacerse manualmente o usando el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallar\xe1 si el proyecto tiene dependencias pares sin resolver, o si las mismas no coinciden con los rangos deseados. Para arreglar esto, instale las dependencias pares que faltan."),(0,o.kt)("p",null,"Tambi\xe9n puede ignorar estos errores de forma selectiva usando los campos ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," y ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," del ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"Este error ocurre cuando la instalaci\xf3n no se puede realizar sin cambios en el lockfile. Esto podr\xeda suceder en un entorno de CI (integraci\xf3n continua) si alguien modific\xf3 el ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," en el repositorio sin ejecutar ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," despu\xe9s. O si se olvid\xf3 de ejecutar un commit despu\xe9s de modificar el lockfile."),(0,o.kt)("p",null,"Para arreglar este error, simplemente ejecute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," y luego haga un commit del lockfile."))}m.isMDXComponent=!0}}]);