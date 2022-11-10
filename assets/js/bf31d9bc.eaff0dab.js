"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[6795],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(4137));const a={version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",description:"In order to reduce carbon emissions and costs, Dev&Test Kubernetes clusters can turn off nodes out of office hours. Thereby, optimization is implemented at the cluster level. For production clusters, where nodes need to stay up and running, optimization needs to be implemented at the application level.",tags:["kubernetes","role:cloud-engineer","size:small"]},s="Scale down kubernetes applications when not in use",i={unversionedId:"catalog/cloud/scale-down-kubernetes-workloads",id:"catalog/cloud/scale-down-kubernetes-workloads",title:"Scale down kubernetes applications when not in use",description:"In order to reduce carbon emissions and costs, Dev&Test Kubernetes clusters can turn off nodes out of office hours. Thereby, optimization is implemented at the cluster level. For production clusters, where nodes need to stay up and running, optimization needs to be implemented at the application level.",source:"@site/docs/catalog/cloud/scale-down-kubernetes-workloads.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/scale-down-kubernetes-workloads",permalink:"/catalog/cloud/scale-down-kubernetes-workloads",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/scale-down-kubernetes-workloads.md",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",description:"In order to reduce carbon emissions and costs, Dev&Test Kubernetes clusters can turn off nodes out of office hours. Thereby, optimization is implemented at the cluster level. For production clusters, where nodes need to stay up and running, optimization needs to be implemented at the application level.",tags:["kubernetes","role:cloud-engineer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Reduce transmitted data",permalink:"/catalog/cloud/reduce-transmitted-data"},next:{title:"Scale Kubernetes workloads based on relevent demand metrics",permalink:"/catalog/cloud/scale-kubernetes-workloads-based-on-events"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scale-down-kubernetes-applications-when-not-in-use"},"Scale down kubernetes applications when not in use"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"In order to reduce carbon emissions and costs, Dev&Test Kubernetes clusters can turn off nodes (VMs) out of office hours (e.g at night & during weekends). => thereby, optimization is implemented at the cluster level."),(0,r.kt)("p",null,"For production clusters, where nodes need to stay up and running: optimization needs to be implemented at the application level (Deployment, StatefulSet)."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Scale down Kubernetes applications (Deployments, StatefulSets) based on time (out of office hours). Turning off an application means scaling its pods to zero."),(0,r.kt)("p",null,"The scaled down Kubernetes resources can be selected using Labels or Annotations. "),(0,r.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,r.kt)("p",null,"Regarding the SCI equation. scaling down the pods to zero will impact:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),': The goal is to "reduce demand", aka the number of pods running out of office hours, which reduces overall consumed power by the application.')),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"The Business Application has predictible traffic (usage), which allows to scale up & down based on Time. "),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This pattern does not require application code changes."),(0,r.kt)("li",{parentName:"ul"},"This pattern requires an understanding of the application usage patterns including technical governance and inventory management.")))}d.isMDXComponent=!0}}]);