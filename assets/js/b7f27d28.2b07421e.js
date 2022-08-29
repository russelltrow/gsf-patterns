"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[271],{4137:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(i),p=n,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8156:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=i(7462),n=(i(7294),i(4137));const a={},o="Minimising the size of data transmitted with reduction",s={unversionedId:"catalog/cloud/minimising-data-size-transmitted-with-reduction",id:"catalog/cloud/minimising-data-size-transmitted-with-reduction",title:"Minimising the size of data transmitted with reduction",description:"Version",source:"@site/docs/catalog/cloud/minimising-data-size-transmitted-with-reduction.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/minimising-data-size-transmitted-with-reduction",permalink:"/catalog/cloud/minimising-data-size-transmitted-with-reduction",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/minimising-data-size-transmitted-with-reduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Match Utilization Requirements With Pre-Configured Servers",permalink:"/catalog/cloud/match-utilization-requirements-with-pre-configured-server"},next:{title:"Move storage resources from underutilised storage resources",permalink:"/catalog/cloud/optimise-storage-resource-utilisation"}},l={},u=[{value:"Version",id:"version",level:2},{value:"Submitted By",id:"submitted-by",level:2},{value:"Published Date",id:"published-date",level:2},{value:"Intent",id:"intent",level:2},{value:"Tags",id:"tags",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minimising-the-size-of-data-transmitted-with-reduction"},"Minimising the size of data transmitted with reduction"),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("p",null,"1.0"),(0,n.kt)("h2",{id:"submitted-by"},"Submitted By"),(0,n.kt)("p",null,"Sarah Hsu (@greenhsu123)"),(0,n.kt)("h2",{id:"published-date"},"Published Date"),(0,n.kt)("p",null,"TBD"),(0,n.kt)("h2",{id:"intent"},"Intent"),(0,n.kt)("p",null,"Minimising the size of data transmitted with reduction "),(0,n.kt)("h2",{id:"tags"},"Tags"),(0,n.kt)("p",null,"Cloud, Networking, Cloud Engineer, Small"),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("p",null,"From an energy-efficiency perspective, it's better to minimise the size of the data transmitted so that less energy is required because the network traffic is reduced. "),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Minimise the size of data transmitted by only sending properties or values deemed necessary. "),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,n.kt)("p",null,"Concerning the SCI equation. Reducing the size of data will impact one part:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": We reduce the total electricity required by reducing network traffic. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total size of data stored, we reduce the total embodied carbon.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"Suppose we choose to transfer data  (e.g. payloads) to the client side as it is because some properties or values may be needed later. A better solution would be to consider curating the data set, ensuring only necessary properties are sent across the network so the overall network traffic is reduced. And in many use cases, certain properties or values can be correlated later. "),(0,n.kt)("p",null,"Another consideration worth noting is the choice between different data formats, e.g. XML v.s. Protobuf, where the latter is much more compact, will affect the overall network traffic. "),(0,n.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PRO"),": It may reduce cloud bills because minimising the size of the data transmitted will cost less. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CON"),": If we minimise the dataset by taking away properties or values, there may be overhead to corelate the missing properties or values.s")))}d.isMDXComponent=!0}}]);