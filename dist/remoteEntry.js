var stackspotDesign;(()=>{"use strict";var e,r,t,n,o,i,a,s,u,l,f,p,c,d,h={359:(e,r,t)=>{var n={"./Widget":()=>Promise.all([t.e(558),t.e(630)]).then((()=>()=>t(630)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},v={};function g(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return h[e](t,t.exports,g),t.exports}g.m=h,g.c=v,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="stackspotDesignXtension:",g.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,g.nc&&a.setAttribute("nonce",g.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var p=(r,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var i=g.S[t],a="stackspotDesignXtension",s=(e,r,t,n)=>{var o=i[e]=i[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:a>s.from))&&(o[r]={get:t,from:a,eager:!!n})},u=[];return"default"===t&&(s("react-dom","16.14.0",(()=>Promise.all([g.e(935),g.e(558)]).then((()=>()=>g(935))))),s("react","16.14.0",(()=>g.e(294).then((()=>()=>g(294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],s=(typeof a)[0];if(i!=s)return"o"==i&&"n"==s||"s"==s||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(s=e[i]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var a=[];for(i=1;i<e.length;i++){var s=e[i];a.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?a.pop()+" "+a.pop():o(s))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,s=1,u=!0;;s++,a++){var l,f,p=s<e.length?(typeof e[s])[0]:"";if(a>=r.length||"o"==(f=(typeof(l=r[a]))[0]))return!u||("u"==p?s>n&&!o:""==p!=o);if("u"==f){if(!u||"u"!=p)return!1}else if(u)if(p==f)if(s<=n){if(l!=e[s])return!1}else{if(o?l>e[s]:l<e[s])return!1;l!=e[s]&&(u=!1)}else if("s"!=p&&"n"!=p){if(o||s<=n)return!1;u=!1,s--}else{if(s<=n||f<p!=o)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,s--)}}var c=[],d=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?d()|d():2==h?d()&d():h?i(h,r):!d())}return!!d()},a=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=a(e,t);return i(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,o,n)),l(e[t][o])},l=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var i=g.I(r);return i&&i.then?i.then(e.bind(e,r,g.S[r],t,n,o)):e(0,g.S[r],t,n,o)})(((e,r,t,n,o)=>r&&g.o(r,t)?u(r,0,t,n):o())),p={},c={558:()=>f("default","react",[1,16,13,0],(()=>g.e(294).then((()=>()=>g(294)))))},d={558:[558]},g.f.consumes=(e,r)=>{g.o(d,e)&&d[e].forEach((e=>{if(g.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete p[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=c[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={813:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(558!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=g.p+g.u(r),a=new Error;g.l(i,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,s]=t,u=0;if(i.some((r=>0!==e[r]))){for(n in a)g.o(a,n)&&(g.m[n]=a[n]);s&&s(g)}for(r&&r(t);u<i.length;u++)o=i[u],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkstackspotDesignXtension=self.webpackChunkstackspotDesignXtension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=g(359);stackspotDesign=m})();