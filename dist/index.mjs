var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{f0:function(){return r},vI:function(){return o},Ds:function(){return i},ZP:function(){return U},xP:function(){return n},IL:function(){return c},T8:function(){return a},zv:function(){return s},cL:function(){return u},Y4:function(){return f},pn:function(){return l},yj:function(){return d},GP:function(){return g},lI:function(){return h},Tk:function(){return m},P2:function(){return p},fy:function(){return w},Ab:function(){return y},xn:function(){return b}});const n=function(){(window.elbLayer=window.elbLayer||[]).push(arguments)};function r(e,t={}){return Object.entries(t).forEach((([n,r])=>{const o=e[n];Array.isArray(o)&&Array.isArray(r)&&(t[n]=r.reduce(((e,t)=>e.includes(t)?e:[...e,t]),[...o]))})),{...e,...t}}function o(e){if("true"===e)return!0;if("false"===e)return!1;const t=Number(e);return e==t&&""!==e?t:String(e)}function i(e,t=1e3){let n;return(...r)=>(clearTimeout(n),new Promise((o=>{n=setTimeout((()=>{o(e(...r))}),t)})))}function c(e,t){return e.getAttribute(t)||""}function s(e=6){for(var t="";t.length<e;)t+=(36*Math.random()|0).toString(36);return t}function u(e,t={}){const n={},r=Object.assign({utm_campaign:"campaign",utm_content:"content",dclid:"clickId",fbclid:"clickId",gclid:"clickId",utm_medium:"medium",msclkid:"clickId",utm_source:"source",utm_term:"term"},t);return Object.entries(r).forEach((([t,r])=>{const o=e.searchParams.get(t);o&&(n[r]=o)})),n}function a(e,t,n=0){const r=t.split(".").reduce(((e,t)=>{if("*"==t&&(t=String(n)),e instanceof Object)return e[t]}),e);return r}function f(e,t){return typeof e==typeof t}function l(e){const t=getComputedStyle(e);if("none"===t.display)return!1;if("visible"!==t.visibility)return!1;if(t.opacity&&Number(t.opacity)<.1)return!1;let n;const r=window.innerHeight,o=e.getBoundingClientRect(),i=o.height,c=o.y,s=c+i,u={x:o.x+e.offsetWidth/2,y:o.y+e.offsetHeight/2};if(i<=r){if(e.offsetWidth+o.width===0||e.offsetHeight+o.height===0)return!1;if(u.x<0)return!1;if(u.x>(document.documentElement.clientWidth||window.innerWidth))return!1;if(u.y<0)return!1;if(u.y>(document.documentElement.clientHeight||window.innerHeight))return!1;n=document.elementFromPoint(u.x,u.y)}else{const e=r/2;if(c<0&&s<e)return!1;if(s>r&&c>e)return!1;n=document.elementFromPoint(u.x,r/2)}if(n)do{if(n===e)return!0}while(n=n.parentElement);return!1}function d(e={}){let t=e.isNew||!1;if(!t){const[e]=performance.getEntriesByType("navigation");if("navigate"!==e.type)return!1}const n=new URL(e.url||window.location.href),r=e.referrer||document.referrer,o=r&&new URL(r).hostname,i={},c=u(n,e.parameters);if(Object.keys(c).length&&(i.marketing=!0,t=!0),!t){const r=e.domains||[];r.push(n.hostname),t=!r.includes(o)}return!!t&&(o&&(i.referrer=o),Object.assign(i,{id:i.id||s(12)},c,e.data),i)}function g(e,t=2){switch(t){case 0:m(e,"",0,t);break;case 1:window.localStorage.removeItem(e);break;case 2:window.sessionStorage.removeItem(e)}}function h(e,t=2){var n;function r(e){try{return JSON.parse(e||"")}catch(t){let n=1,r="";return e&&(n=0,r=e),{e:n,v:r}}}let i,c;switch(t){case 0:i=decodeURIComponent((null===(n=document.cookie.split("; ").find((t=>t.startsWith(e+"="))))||void 0===n?void 0:n.split("=")[1])||"");break;case 1:c=r(window.localStorage.getItem(e));break;case 2:c=r(window.sessionStorage.getItem(e))}return c&&(i=c.v,0!=c.e&&c.e<Date.now()&&(g(e,t),i="")),o(i||"")}function m(e,t,n=30,r=2,o){const i={e:Date.now()+6e4*n,v:String(t)},c=JSON.stringify(i);switch(r){case 0:let r=`${e}=${encodeURIComponent(t)}; max-age=${60*n}; path=/; SameSite=Lax; secure`;o&&(r+="; domain="+o),document.cookie=r;break;case 1:window.localStorage.setItem(e,c);break;case 2:window.sessionStorage.setItem(e,c)}return h(e,r)}function p(e,t=1e3){let n;return function(...r){if(!n)return n=setTimeout((()=>{n=0}),t),e(...r)}}function w(e){return e?e.trim().replace(/^'|'$/g,"").trim():""}function y(e,t){return function(...n){try{return e(...n)}catch(e){return void(t&&t(e)||console.error(e))}}}function b(e,t,n){return function(...r){let o;const i="post"+t,c=n["pre"+t],s=n[i];return o=c?c({fn:e},...r):e(...r),s&&(o=s({fn:e,result:o},...r)),o}}function v(e,t,n=!0){return e+(null!=t?(n?"-":"")+t:"")}function k(e,t,n,r=!0){return O(c(t,v(e,n,r))||"").reduce(((e,n)=>{let[r,i]=P(n);if(!r)return e;if(i||(":"===r.charAt(r.length-1)&&(r=r.slice(0,-1)),i=""),"#"===i.charAt(0)){i=i.substring(1);try{let e=t[i];e||"selected"!==i||(e=t.options[t.selectedIndex].text),e&&(i=e)}catch(e){i=""}}return"[]"===r.slice(-2)?(r=r.slice(0,-2),Array.isArray(e[r])||(e[r]=[]),e[r].push(o(i))):e[r]=o(i),e}),{})}function E(e){const t=`[${v(e,"globals",!1)}]`;let n={};return document.querySelectorAll(t).forEach((t=>{n=r(n,k(e,t,"globals",!1))})),n}function x(e){const t={};return O(e).forEach((e=>{let[n,r]=P(e);const[o,i]=$(n);if(!o)return;let[c,s]=$(r||"");c=c||o,t[o]||(t[o]=[]),t[o].push({trigger:o,triggerParams:i,action:c,actionParams:s})})),t}function S(e,t,n){const r=[];let o=t;for(n=0!==Object.keys(n||{}).length?n:void 0;o;){const i=L(e,o,t);!i||n&&!n[i.type]||r.push(i),o=I(e,o)}return r}function L(e,t,n){const o=c(t,v(e));if(!o)return null;const i=[t],s=`[${v(e,o)}],[${v(e,"")}]`,u=v(e,"link",!1);let[a,f]=A(n||t,s,e,o);t.querySelectorAll(`[${u}]`).forEach((e=>{let[t,n]=P(c(e,u));"parent"===n&&document.querySelectorAll(`[${u}="${t}:child"]`).forEach((t=>{t!==e&&i.push(t)}))}));let l=[];i.forEach((e=>{e.matches(s)&&l.push(e),e.querySelectorAll(s).forEach((e=>{l.push(e)}))}));let d={},g={};l.forEach((t=>{g=r(g,k(e,t,"")),d=r(d,k(e,t,o))})),d=r(a,r(g,d));const h=[];return t.querySelectorAll(`[${v(e)}]`).forEach((t=>{const n=L(e,t);n&&h.push(n)})),{type:o,data:d,context:f,nested:h}}function I(e,t){const n=v(e,"link",!1);if(t.matches(`[${n}]`)){let[e,r]=P(c(t,n));if("child"===r)return document.querySelector(`[${n}="${e}:parent"]`)}return t.parentElement}function A(e,t,n,o){let i={},c={},s=e;const u=`[${v(n,"context",!1)}]`;let a=0;for(;s;)s.matches(t)&&(i=r(k(n,s,""),i),i=r(k(n,s,o),i)),s.matches(u)&&(Object.entries(k(n,s,"context",!1)).forEach((([e,t])=>{c[e]||(c[e]=[t,a])})),++a),s=I(n,s);return[i,c]}function O(e,t=";"){if(!e)return[];const n=new RegExp(`(?:[^${t}']+|'[^']*')+`,"ig");return e.match(n)||[]}function P(e){const[t,n]=e.split(/:(.+)/,2);return[w(t),w(n)]}function $(e){const[t,n]=e.split("(",2);return[t,n?n.slice(0,-1):""]}let q,j,T=[];function H(e,t){const n=()=>{e(t)};"loading"!==document.readyState?n():document.addEventListener("DOMContentLoaded",n)}function D(e){e.config.pageview&&function(e){const t=window.location,n={domain:t.hostname,title:document.title,referrer:document.referrer};t.search&&(n.search=t.search),t.hash&&(n.hash=t.hash),e.config.elbLayer.push("page view",n,"load")}(e),N(e)}function R(e){document.addEventListener("click",y((function(t){_.call(this,e,t)}))),document.addEventListener("submit",y((function(t){C.call(this,e,t)})))}function N(e,t=document){T=[],q=q||y(J)(e,1e3);const n=v(e.config.prefix,"action",!1);t===document?q&&q.disconnect():M(e,t,n),t.querySelectorAll(`[${n}]`).forEach((t=>M(e,t,n))),T.length&&function(e){const t=(e,t)=>e.filter((([e,n])=>{const r=window.scrollY+window.innerHeight,o=e.offsetTop;if(r<o)return!0;const i=e.clientHeight;return!(100*(1-(o+i-r)/(i||1))>=n&&(W(t,e,"scroll"),1))}));j||(j=p((function(){T=t.call(document,T,e)})),document.addEventListener("scroll",j))}(e)}function W(e,t,n){(function(e,t,n="data-elb"){const r=[],o=function(e,t,n){let r=t;for(;r;){const t=x(c(r,v(e,"action",!1)));if(t[n]||"click"!==n)return t[n];r=I(e,r)}return[]}(n,e,t);return o?(o.forEach((o=>{const i=O(o.actionParams||"",",").reduce(((e,t)=>(e[t]=!0,e)),{}),c=S(n,e,i);if(!c.length){const t="page",r=`[${v(n,t)}]`;let[o,i]=A(e,r,n,t);c.push({type:t,data:o,nested:[],context:i})}c.forEach((e=>{r.push({entity:e.type,action:o.action,data:e.data,trigger:t,context:e.context,nested:e.nested})}))})),r):r})(t,n,e.config.prefix).forEach((t=>{e.config.elbLayer.push(`${t.entity} ${t.action}`,t.data,n,t.context,t.nested)}))}function M(e,t,n){const r=c(t,n);r&&Object.values(x(r)).forEach((n=>n.forEach((n=>{switch(n.trigger){case"hover":!function(e,t){t.addEventListener("mouseenter",y((function(t){t.target instanceof Element&&W(e,t.target,"hover")})))}(e,t);break;case"load":!function(e,t){W(e,t,"load")}(e,t);break;case"pulse":!function(e,t,n=""){setInterval((()=>{document.hidden||W(e,t,"pulse")}),parseInt(n||"")||15e3)}(e,t,n.triggerParams);break;case"scroll":!function(e,t=""){let n=parseInt(t||"")||50;n<0||n>100||T.push([e,n])}(t,n.triggerParams);break;case"visible":!function(e,t){t&&t.observe(e)}(t,q);break;case"wait":!function(e,t,n=""){setTimeout((()=>W(e,t,"wait")),parseInt(n||"")||15e3)}(e,t,n.triggerParams)}}))))}function _(e,t){W(e,t.target,"click")}function C(e,t){W(e,t.target,"submit")}function J(e,t=1e3){if(window.IntersectionObserver)return new window.IntersectionObserver((n=>{n.forEach((n=>{const r=n.target,o="elbTimerId";let i=Number(r.dataset[o]);if(n.intersectionRatio>0&&(r.offsetHeight>window.innerHeight&&l(r)||n.intersectionRatio>=.5))return i=i||window.setTimeout((function(){l(r)&&(W(e,r,"visible"),delete r.dataset[o],q&&q.unobserve(r))}),t),void(r.dataset[o]=String(i));i&&(clearTimeout(i),delete r.dataset[o])}))}),{rootMargin:"0px",threshold:[0,.1,.2,.3,.4,.5]})}var U=function(e={}){const t="walker run",n=e.globals||{},o=u(e),i={push:b((function(e,n,r="",o={},s=[]){if(!e||!f(e,""))return;const a=i.config;if(!a.allowed&&e!=t)return;const[m,p]=e.split(" ");if(!m||!p)return;if("walker"===m)return void function(e,t,n,r){switch(t){case"config":d(n)&&(e.config=u(n,e.config));break;case"consent":d(n)&&function(e,t){const n=e.config;let r=!1;Object.entries(t).forEach((([e,t])=>{const o=!!t;n.consent[e]=o,r=r||o})),r&&Object.values(n.destinations).forEach((t=>{let r=t.queue||[];t.queue=r.filter((r=>(r.consent=n.consent,r.globals=n.globals,r.user=n.user,!g(e,t,r,!1))))}))}(e,n);break;case"destination":d(n)&&c(e,n,r);break;case"hook":f(n,"")&&f(r,f)&&function(e,t,n){e.hooks[t]=n}(e.config,n,r);break;case"init":(Array.isArray(n)?n:[n||document]).forEach((t=>{l(t)&&N(e,t)}));break;case"run":H(h,e);break;case"user":d(n)&&function(e,t){const n=e.config.user;t.id&&(n.id=t.id),t.device&&(n.device=t.device),t.session&&(n.session=t.session)}(e,n)}}(i,p,n,r);let w,y=!1;if(l(n)?(w=n,y=!0):l(o)&&(w=o),w){const e=S(a.prefix,w).find((e=>e.type==m));e&&(n=y?e.data:n,o=e.context)}n=n||{},"page"===m&&(n.id=n.id||window.location.pathname),++a.count;const b=Date.now(),v=Math.round((performance.now()-a.timing)/10)/100,k=`${b}-${a.group}-${a.count}`,E={type:1,id:window.location.href,previous_id:document.referrer},x={event:e,data:n,context:o,globals:a.globals,user:a.user,nested:s,consent:a.consent,id:k,trigger:r,entity:m,action:p,timestamp:b,timing:v,group:a.group,count:a.count,version:{config:a.version,walker:1.6},source:E};a.queue.push(x),Object.values(a.destinations).forEach((e=>{g(i,e,x)}))}),"Push",o.hooks),config:o};function c(e,t,n){if(!t.push)return;const r=n||t.config||{init:!1},o={init:t.init,push:t.push,config:r,type:t.type};!1!==r.queue&&e.config.queue.forEach((t=>{g(e,o,t)}));let i=r.id;if(!i)do{i=s(4)}while(e.config.destinations[i]);e.config.destinations[i]=o}function u(e,t={}){return{allowed:e.allowed||t.allowed||!1,consent:e.consent||t.consent||{},count:e.count||t.count||0,destinations:e.destinations||t.destinations||{},elbLayer:e.elbLayer||t.elbLayer||(window.elbLayer=window.elbLayer||[]),globals:r(n,r(t.globals||{},e.globals||{})),group:e.group||t.group||"",hooks:e.hooks||t.hooks||{},pageview:"pageview"in e?!!e.pageview:t.pageview||!0,prefix:e.prefix||t.prefix||"data-elb",queue:e.queue||t.queue||[],round:e.round||t.round||0,timing:e.timing||t.timing||0,user:e.user||t.user||{},version:e.version||t.version||0}}function a(e){return{}.hasOwnProperty.call(e,"callee")}function l(e){return e===document||e instanceof HTMLElement}function d(e){return f(e,{})&&!Array.isArray(e)&&null!==e}function g(e,t,n,r=!0){if(n=JSON.parse(JSON.stringify(n)),!function(e,t){let n=!0;const r=t.config.consent;if(r){n=!1;const t=e.config.consent;Object.keys(r).forEach((e=>{t[e]&&(n=!0)}))}return n}(e,t))return r&&(t.queue=t.queue||[],t.queue.push(n)),!1;let i;const c=t.config.mapping;if(c){const e=c[n.entity]||c["*"]||{};if(i=e[n.action]||e["*"],i){if(i.ignore)return!1;i.name&&(n.event=i.name)}if(!i)return!1}return!!y((()=>{if(t.init&&!t.config.init){const e=b(t.init,"DestinationInit",o.hooks)(t.config);if(t.config.init=e,!e)return!1}return b(t.push,"DestinationPush",o.hooks)(n,t.config,i,e.config),!0}))()}function h(e){e.config=r(e.config,{allowed:!0,count:0,globals:r(n,E(e.config.prefix)),group:s()}),e.config.queue=[],Object.values(e.config.destinations).forEach((e=>{e.queue=[]})),1==++e.config.round?function(e){const n=[],r=[];let o=!0;e.config.elbLayer.map((e=>{let[i,c,s,u,a]=[...Array.from(e)];({}).hasOwnProperty.call(i,"callee")&&([i,c,s,u,a]=[...Array.from(i)]),f(i,"")&&(o&&i==t?o=!1:i.startsWith("walker ")?n.push([i,c,s,u,a]):r.push([i,c,s,u,a]))})),n.concat(r).map((t=>{const[n,r,o,i,c]=t;e.push(String(n),r,o,i,c)}))}(e):e.config.timing=performance.now(),y(D)(e)}return function(e){const n=e.config.elbLayer;n.push=function(t,n,r,o,i){a(t)&&([t,n,r,o,i]=[...Array.from(t)]);let c=Array.prototype.push.apply(this,[arguments]);return e.push(String(t),n,r,o,i),c},n.find((e=>(e=a(e)?e[0]:e)==t))&&H(h,e)}(i),e.default&&(window.dataLayer=window.dataLayer||[],c(i,{config:{},push:e=>{window.dataLayer.push({...e,walker:!0})},type:"dataLayer"}),H(h,i)),R(i),i},B=t.f0,Y=t.vI,z=t.Ds,F=t.ZP,G=t.xP,V=t.IL,Z=t.T8,K=t.zv,Q=t.cL,X=t.Y4,ee=t.pn,te=t.yj,ne=t.GP,re=t.lI,oe=t.Tk,ie=t.P2,ce=t.fy,se=t.Ab,ue=t.xn;export{B as assign,Y as castValue,z as debounce,F as default,G as elb,V as getAttribute,Z as getByStringDot,K as getId,Q as getMarketingParameters,X as isSameType,ee as isVisible,te as startSession,ne as storageDelete,re as storageRead,oe as storageWrite,ie as throttle,ce as trim,se as trycatch,ue as useHooks};