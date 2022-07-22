"use strict";(self.webpackChunkenvatar_enftr_io=self.webpackChunkenvatar_enftr_io||[]).push([[388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"bridge",title:"Bridge SDK",description:"TODO"},i="Bridge SDK (web)",l={unversionedId:"experiences/bridge",id:"experiences/bridge",title:"Bridge SDK",description:"TODO",source:"@site/docs/experiences/bridge.md",sourceDirName:"experiences",slug:"/experiences/bridge",permalink:"/envatar-landing/docs/experiences/bridge",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/experiences/bridge.md",tags:[],version:"current",frontMatter:{id:"bridge",title:"Bridge SDK",description:"TODO"},sidebar:"providerSidebar",previous:{title:"Introduction",permalink:"/envatar-landing/docs/"},next:{title:"Available Avatars",permalink:"/envatar-landing/docs/experiences/providers"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"<code>providers</code>",id:"providers",level:3},{value:"<code>.on(&#39;result&#39;, &lt;result handler&gt;)</code>",id:"onresult-result-handler",level:3},{value:"<code>options</code>",id:"options",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridge-sdk-web"},"Bridge SDK (web)"),(0,a.kt)("p",null,"A JavaScript sdk for integrating AvatarConnect into your web-based metaverse"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check out the source code at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvatarConnect/sdk"},"github.com/AvatarConnect/sdk")))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Via CDN:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@avatarconnect/sdk/dist/index.js"><\/script>\n')),(0,a.kt)("p",null,"Using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @avatarconnect/sdk\n")),(0,a.kt)("p",null,"Using bower:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bower install @avatarconnect/sdk\n")),(0,a.kt)("p",null,"Using yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @avatarconnect/sdk\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import AvatarConnect from '@avatarconnect/sdk' // Injected into browser globals if using CDN\n\nconst connector = new AvatarConnect(\n  [\n    ['ready-player-me', { gateway: 'mona' }],\n    ['crypto-avatars', { apiKey: '<Your CryptoAvatars API Key>' }],\n    'meebits'\n  ],\n  { maxHeight: 610 }\n)\n\n// Display the AvatarConnect modal\nconnector.enable()\n\nconnector.on('close', handleClose)\nconnector.on('error', handleError)\n\n// Pass the result into the AvatarConnect plugin for your game engine\nconnector.on('result', handleResult)\n\n// Hide the AvatarConnect modal\nconnector.disable()\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"new AvatarConnect(<providers>[, <options>])\n  .on('result', <result handler>)\n  .on('close', <close handler>)\n  .on('error', <error handler>)\n")),(0,a.kt)("h3",{id:"providers"},(0,a.kt)("inlineCode",{parentName:"h3"},"providers")),(0,a.kt)("p",null,"A list of providers you want to offer your users. Check out our ",(0,a.kt)("a",{parentName:"p",href:"/docs/experiences/providers"},(0,a.kt)("strong",{parentName:"a"},"available providers here")),"."),(0,a.kt)("p",null,"If a provider requires a configuration object, pass it in as a tuple with the provider ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  'provider-id',\n  ['provider-with-config', { apiKey: 'XXX' }]\n]\n")),(0,a.kt)("h3",{id:"onresult-result-handler"},(0,a.kt)("inlineCode",{parentName:"h3"},".on('result', <result handler>)")),(0,a.kt)("p",null,"Here, you'll receive the result from the bridge and pass it to the Game Engine SDK of your choosing. The result handler will receive an object in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BridgeResult {\n  avatar: {\n    format: string // 'glb' | 'vrm' | ...\n    type: string // 'humanoid' | null\n    uri: string // A downloadable avatar URI\n  }\n  metadata: unknown // An object containing any custom metadata for the provider used\n  provider: string // The ID of the provider used\n  version: string // The AvatarConnect Bridge version used\n}\n")),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"options")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"bridgeUrl"))),(0,a.kt)("td",{parentName:"tr",align:null},"Pass in a custom url for your own hosted version of ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/AvatarConnect/bridge"},"@avatarconnect/bridge")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://v0.avatarconnect.org"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"maxHeight"))),(0,a.kt)("td",{parentName:"tr",align:null},"Max height of the modal's content (in pixels)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"610"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"maxWidth"))),(0,a.kt)("td",{parentName:"tr",align:null},"Max width of the modal's content (in pixels)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"800"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"padding"))),(0,a.kt)("td",{parentName:"tr",align:null},"The padding on the sides of the modal at full width (in pixels)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"6"))))))}c.isMDXComponent=!0}}]);