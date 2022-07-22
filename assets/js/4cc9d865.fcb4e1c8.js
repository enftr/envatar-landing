"use strict";(self.webpackChunkenvatar_enftr_io=self.webpackChunkenvatar_enftr_io||[]).push([[188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"context",title:"Function Context",description:"TODO"},a="Function context",s={unversionedId:"providers/pipeline/context",id:"providers/pipeline/context",title:"Function Context",description:"TODO",source:"@site/docs/providers/pipeline/context.md",sourceDirName:"providers/pipeline",slug:"/providers/pipeline/context",permalink:"https://enftr.github.io/envatar-landing/docs/providers/pipeline/context",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/providers/pipeline/context.md",tags:[],version:"current",frontMatter:{id:"context",title:"Function Context",description:"TODO"},sidebar:"providerSidebar",previous:{title:"Custom Stage",permalink:"https://enftr.github.io/envatar-landing/docs/providers/pipeline/custom"},next:{title:"4. Test Bridge Integration",permalink:"https://enftr.github.io/envatar-landing/docs/providers/testing"}},l={},p=[{value:"<code>aggregate</code>",id:"aggregate",level:3},{value:"<code>config</code>",id:"config",level:3},{value:"<code>$debug(...args)</code>",id:"debugargs",level:3},{value:"Usage",id:"usage",level:4},{value:"<code>$axios</code>",id:"axios",level:3},{value:"Usage",id:"usage-1",level:4},{value:"<code>provider</code>",id:"provider",level:3},{value:"<code>ethereumAddress</code>",id:"ethereumaddress",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-context"},"Function context"),(0,o.kt)("p",null,"All functions you use in the provider stage can make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),". We provide the following properties for you to leverage:"),(0,o.kt)("h3",{id:"aggregate"},(0,o.kt)("inlineCode",{parentName:"h3"},"aggregate")),(0,o.kt)("p",null,"This is the cumulative result of your pipeline operations at the current stage. You can use this to use or transform the values of the previous stage."),(0,o.kt)("h3",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h3"},"config")),(0,o.kt)("p",null,"If applicable, this is an object containing all of the configuration variables required by your provider."),(0,o.kt)("h3",{id:"debugargs"},(0,o.kt)("inlineCode",{parentName:"h3"},"$debug(...args)")),(0,o.kt)("p",null,"This allows you to console log via iframe messages."),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"this.$debug('Hello', 'World')\n")),(0,o.kt)("h3",{id:"axios"},(0,o.kt)("inlineCode",{parentName:"h3"},"$axios")),(0,o.kt)("p",null,"This is a standard ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," instance to help with making any API requests in your pipeline."),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data } = await this.$axios.post('https://my-api.com/test?query=test', {\n  bodyAttribute: 1\n})\n")),(0,o.kt)("h3",{id:"provider"},(0,o.kt)("inlineCode",{parentName:"h3"},"provider")),(0,o.kt)("p",null,"This is the exported configuration for your provider. Normally only used by generic components and stages, so not likely needed for any ",(0,o.kt)("inlineCode",{parentName:"p"},"custom")," stages."),(0,o.kt)("h3",{id:"ethereumaddress"},(0,o.kt)("inlineCode",{parentName:"h3"},"ethereumAddress")),(0,o.kt)("p",null,"This is the current user's Ethereum address. This will ",(0,o.kt)("strong",{parentName:"p"},"ONLY")," be set after a ",(0,o.kt)("inlineCode",{parentName:"p"},"web3")," stage has been successfully used."))}u.isMDXComponent=!0}}]);