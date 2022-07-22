"use strict";(self.webpackChunkenvatar_enftr_io=self.webpackChunkenvatar_enftr_io||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"basic",title:"2. Basic Configuration",description:"TODO"},o="Basic Configuration",l={unversionedId:"providers/basic",id:"providers/basic",title:"2. Basic Configuration",description:"TODO",source:"@site/docs/providers/basicConfig.md",sourceDirName:"providers",slug:"/providers/basic",permalink:"/docs/providers/basic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/providers/basicConfig.md",tags:[],version:"current",frontMatter:{id:"basic",title:"2. Basic Configuration",description:"TODO"},sidebar:"providerSidebar",previous:{title:"1. Bridge Integration Setup",permalink:"/docs/providers/bridge"},next:{title:"Overview",permalink:"/docs/providers/pipeline/intro"}},p={},d=[{value:"Example Provider Configuration",id:"example-provider-configuration",level:3},{value:"Experience Configuration (<code>config</code> object)",id:"experience-configuration-config-object",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-configuration"},"Basic Configuration"),(0,a.kt)("p",null,"TODO: describe this"),(0,a.kt)("h3",{id:"example-provider-configuration"},"Example Provider Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/providers/MyProvider/index.js"',title:'"/providers/MyProvider/index.js"'},"import icon from './icon.svg'\n\nexport default {\n  config: {\n    apiKey: { required: true, validate: v => matchesAPIKeyRegex(v), type: String },\n  },\n  description: '10,000 unique avatars I made',\n  icon,\n  id: 'my-provider',\n  name: 'My Avatar|My Avatars',\n  pipeline: [\n    ...\n  ],\n  title: 'My Provider',\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"config"))),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"#experience-configuration-config-object"},"Experience Configuration")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"optional"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))),(0,a.kt)("td",{parentName:"tr",align:null},"A brief description of your integration to show users when they're choosing a provider"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"icon"))),(0,a.kt)("td",{parentName:"tr",align:null},"A reference to an imported SVG icon for your provider or a link to an external icon"),(0,a.kt)("td",{parentName:"tr",align:null},"`File"),(0,a.kt)("td",{parentName:"tr",align:null},"string`")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"id"))),(0,a.kt)("td",{parentName:"tr",align:null},"A kebab-case, unique identifier for your provider  (i.e. ",(0,a.kt)("inlineCode",{parentName:"td"},"ready-player-me")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"crypto-avatars"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"name"))),(0,a.kt)("td",{parentName:"tr",align:null},"What we'll call your individual avatar (i.e. \"Body","|",'Bodies"). Use "',"|",'" to separate plural name if necessary.'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"pipeline"))),(0,a.kt)("td",{parentName:"tr",align:null},"See the ",(0,a.kt)("a",{parentName:"td",href:"/docs/providers/pipeline/intro"},"Pipeline")," section"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"array")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"title"))),(0,a.kt)("td",{parentName:"tr",align:null},"The plaintext name for your provider"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))),(0,a.kt)("h2",{id:"experience-configuration-config-object"},"Experience Configuration (",(0,a.kt)("inlineCode",{parentName:"h2"},"config")," object)"),(0,a.kt)("p",null,"In some instances, it's helpful to have information about the specific game or application using the AvatarConnect bridge. This might be an API key or some other identifier for the experience."),(0,a.kt)("p",null,"Any attributes described in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," will be accessible by any functions you define in your ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline"),"."),(0,a.kt)("p",null,"Your object should be structured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/providers/MyProvider/index.js"',title:'"/providers/MyProvider/index.js"'},"export default {\n  config: {\n    <firstProperty>: {\n      default: 'A default value', // Optional\n      required: true | false, // Default `false`\n      type: String | Object | Array | Number | null, // required\n      validate: (inputValue) => isValid(inputValue), // return `true` or `false` (optional)\n    },\n    <anotherProperty>: {\n      ...\n    }\n  },\n  ...\n}\n")))}s.isMDXComponent=!0}}]);