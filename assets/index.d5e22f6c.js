import{r as e,o as t,c as r,a as n,b as o,d as a,e as s,i,E as p}from"./vendor.ee1ba453.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const c={setup:n=>(n,o)=>{const a=e("router-view");return t(),r(a)}},m={},d=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},_=n({history:o(),routes:[{name:"animate",path:"/animate",component:()=>d((()=>import("./animate.38cad1a6.js")),["assets/animate.38cad1a6.js","assets/animate.b6bb1a65.css","assets/animate.c72c22a6.css","assets/wow.054453f9.js","assets/vendor.ee1ba453.js"])},{name:"homepage",path:"/",component:()=>d((()=>import("./homepage.25356171.js")),["assets/homepage.25356171.js","assets/homepage.d8ebcf83.css","assets/animate.c72c22a6.css","assets/part1.817a0d45.js","assets/part1.d9135e49.css","assets/vendor.ee1ba453.js","assets/wow.054453f9.js","assets/part2.a5f32ed6.js","assets/part2.d805eb7e.css","assets/part3.df250ccb.js","assets/part3.1d0a42d8.css","assets/part4.2b8fb77d.js","assets/part4.9991ee18.css","assets/part5.73df7b5d.js","assets/part5.6e41427e.css"])},{name:"index",path:"/index",component:()=>d((()=>import("./index.b79c03e6.js")),["assets/index.b79c03e6.js","assets/index.daf6d537.css","assets/vendor.ee1ba453.js"])},{name:"part1",path:"/part1",component:()=>d((()=>import("./part1.817a0d45.js")),["assets/part1.817a0d45.js","assets/part1.d9135e49.css","assets/animate.c72c22a6.css","assets/vendor.ee1ba453.js","assets/wow.054453f9.js"])},{name:"part2",path:"/part2",component:()=>d((()=>import("./part2.a5f32ed6.js")),["assets/part2.a5f32ed6.js","assets/part2.d805eb7e.css","assets/animate.c72c22a6.css","assets/vendor.ee1ba453.js"])},{name:"part3",path:"/part3",component:()=>d((()=>import("./part3.df250ccb.js")),["assets/part3.df250ccb.js","assets/part3.1d0a42d8.css","assets/vendor.ee1ba453.js"])},{name:"part4",path:"/part4",component:()=>d((()=>import("./part4.2b8fb77d.js")),["assets/part4.2b8fb77d.js","assets/part4.9991ee18.css","assets/vendor.ee1ba453.js"])},{name:"part5",path:"/part5",component:()=>d((()=>import("./part5.73df7b5d.js")),["assets/part5.73df7b5d.js","assets/part5.6e41427e.css","assets/vendor.ee1ba453.js"])},{name:"map1",path:"/map1",component:()=>d((()=>import("./map1.35ac27db.js")),[])}]});const l=a(c);l.use(_).mount("#app"),l.config.globalProperties.$echarts=s,l.use(i);for(const[u,f]of Object.entries(p))l.component(u,f);
