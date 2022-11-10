"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[7904],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),b=i,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const a={version:1,submitted_by:"navveenb",published_date:"tbd",category:"web",description:"Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser.",tags:["web","role:web-developer","size:small"]},s="Minify web assets",o={unversionedId:"catalog/web/minify-web-assets",id:"catalog/web/minify-web-assets",title:"Minify web assets",description:"Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser.",source:"@site/docs/catalog/web/minify-web-assets.md",sourceDirName:"catalog/web",slug:"/catalog/web/minify-web-assets",permalink:"/catalog/web/minify-web-assets",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/web/minify-web-assets.md",tags:[{label:"web",permalink:"/tags/web"},{label:"role:web-developer",permalink:"/tags/role-web-developer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"navveenb",published_date:"tbd",category:"web",description:"Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser.",tags:["web","role:web-developer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Deprecate GIFs for animated content",permalink:"/catalog/web/deprecate-gifs"},next:{title:"Optimize image size",permalink:"/catalog/web/properly-sized-images"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minify-web-assets"},"Minify web assets"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A web page comprises various assets, such as HTML, CSS, JavaScript, and third-party libraries like jQuery, Bootstrap etc. Minification removes unnecessary or redundant data without affecting how the resource is processed by the web browser."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Minify web assets to reduce page size and network bandwidth while delivering the content. At scale, even a small reduction in size can have a significant impact."),(0,i.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,i.kt)("p",null,"Minifying web assets will impact the SCI as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E"),": Minifying  web assets can reduce the size of the web page and lead to a reduction in network bytes during the transfer of content. The browser/device would take less energy to render the content. This should reduce the energy consumption of your web page.")),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"None "),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/unminified-css/"},"Minify CSS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/unminified-javascript/"},"Minify JavaScript"))))}u.isMDXComponent=!0}}]);