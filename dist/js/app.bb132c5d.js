(function(e){function t(t){for(var r,o,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)o=u[s],i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return l.p+"js/"+({About:"About",Finish:"Finish",Login:"Login",Question:"Question",Rule:"Rule"}[e]||e)+"."+{About:"d1822fa5",Finish:"de992318",Login:"1232f1c1",Question:"43843daa",Rule:"ab5e21ec"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={About:1,Finish:1,Login:1,Question:1,Rule:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({About:"About",Finish:"Finish",Login:"Login",Question:"Question",Rule:"Rule"}[e]||e)+"."+{About:"8db81831",Finish:"c1a30077",Login:"c46793fb",Question:"d045a67d",Rule:"3edbfd8a"}[e]+".css",i=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e),c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticStyle:{display:"none"},attrs:{id:"allmap"}})],1)},i=[],a=(n("7faf"),n("2877")),u={},l=Object(a["a"])(u,o,i,!1,null,null,null),c=l.exports,s=n("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],d={name:"home"},m=d,h=Object(a["a"])(m,f,p,!1,null,null,null),b=h.exports,v=function(e){return n.e("About").then(function(){return e(n("f820"))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e("Login").then(function(){return e(n("a55b"))}.bind(null,n)).catch(n.oe)},y=function(e){return n.e("Question").then(function(){return e(n("e254"))}.bind(null,n)).catch(n.oe)},w=function(e){return n.e("Rule").then(function(){return e(n("2dd9"))}.bind(null,n)).catch(n.oe)},x=function(e){return n.e("Finish").then(function(){return e(n("dc0d"))}.bind(null,n)).catch(n.oe)};r["a"].use(s["a"]);var E=new s["a"]({routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:v},{path:"/login",name:"login",meta:{title:"登陆"},component:g},{path:"/question",name:"question",meta:{title:"问答"},component:y},{path:"/rule",name:"rule",meta:{title:"规则"},component:w},{path:"/finish",name:"finish",meta:{title:"完成"},component:x}]});E.beforeEach(function(e,t,n){sessionStorage.setItem("pathName",e.path),e.meta.title&&(document.title=e.meta.title),n()});var A=E,F=n("2f62");r["a"].use(F["a"]);var S=new F["a"].Store({state:{},mutations:{},actions:{}}),L=n("bc3a"),_=n.n(L),C=n("b3b4"),O=n.n(C);n("4917");(function(e,t){var n,r=e.document,o=r.documentElement,i=r.querySelector('meta[name="viewport"]'),a=r.querySelector('meta[name="flexible"]'),u=0,l=0,c=t.flexible||(t.flexible={});if(i){var s=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);s&&(l=parseFloat(s[1]),u=parseInt(1/l))}else if(a){var f=a.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),d=f.match(/maximum\-dpr=([\d\.]+)/);p&&(u=parseFloat(p[1]),l=parseFloat((1/u).toFixed(2))),d&&(u=parseFloat(d[1]),l=parseFloat((1/u).toFixed(2)))}}if(!u&&!l){var m=e.navigator.appVersion.match(/iphone/gi),h=e.devicePixelRatio;u=m?h>=3&&(!u||u>=3)?3:h>=2&&(!u||u>=2)?2:1:1,l=1/u}if(o.setAttribute("data-dpr",u),!i)if(i=r.createElement("meta"),i.setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(i);else{var b=r.createElement("div");b.appendChild(i),r.write(b.innerHTML)}function v(){var t=o.getBoundingClientRect().width;t/u>750&&(t=750*u);var n=t/10;o.style.fontSize=n+"px",c.rem=e.rem=n}e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(v,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(v,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*u+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*u+"px"},!1),v(),c.dpr=e.dpr=u,c.refreshRem=v,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"===typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"===typeof e&&e.match(/px$/)&&(t+="rem"),t}})(window,window["lib"]||(window["lib"]={})),r["a"].config.productionTip=!1,r["a"].prototype.$axios=_.a,r["a"].prototype.$bmob=O.a,new r["a"]({router:A,store:S,render:function(e){return e(c)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.bb132c5d.js.map