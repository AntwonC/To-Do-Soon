(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),l=n(667),c=n.n(l),d=new URL(n(433),n.b),s=a()(o()),u=c()(d);s.push([e.id,'@font-face {\n    font-family: "Print"; \n    src: url('+u+");\n} \n\n.urgent-option {\n    color: black; \n    width: 100px;\n    text-decoration: none; \n    display: block;\n}\n\n.urgent-option:hover {\n    background-color: aqua;\n}\n\n.font-text:hover {\n    background-color: red;\n}\n\n",""]);const p=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var c=e[l],d=r.base?c[0]+r.base:c[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var y=o(m,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:y,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var c=r(e,o),d=0;d<i.length;d++){var s=n(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},433:(e,t,n)=>{e.exports=n.p+"6cccd24bbc58dabcd04c.ttf"},183:(e,t,n)=>{e.exports=n.p+"6aa0fae40ef9d34555b6.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),l=n(565),c=n.n(l),d=n(216),s=n.n(d),u=n(589),p=n.n(u),m=n(28),y={};y.styleTagTransform=p(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=s(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;var h=n(183);const f=()=>{document.querySelector(".dropdown"),document.querySelector(".dropdown-content").style.display="block"},g=()=>{document.querySelector(".dropdown"),document.querySelector(".dropdown-content").style.display="none"},x=(e,t)=>{t.textContent=e.textContent};(()=>{const e=document.querySelector("#body-element"),t=document.querySelector("#content"),n=document.createElement("div");document.createElement("div"),document.createElement("div"),document.createElement("div").style.gridArea="header",document.createElement("div").style.gridArea="sidebar",document.createElement("div").style.gridArea="main",e.style.margin="0 0 0 0",n.setAttribute("id","main-container"),n.style.display="grid",n.style.gridTemplateColumns="25% 25% 25% 25%",n.style.gridTemplateRows="10% 30% 30% 30%",n.style.gridTemplateAreas='"header header header header"                                           "sidebar sidebar main main"                                           "sidebar sidebar main main"                                           "sidebar sidebar main main',n.style.backgroundColor="teal",n.style.height="972px",t.appendChild(n)})(),(()=>{document.querySelector("#content");const e=document.querySelector("#main-container"),t=document.createElement("div");t.setAttribute("id","header-container"),t.style.width="400%",t.style.height="100%",t.style.backgroundColor="green",e.appendChild(t)})(),(()=>{document.querySelector("#content");const e=document.querySelector("#main-container"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("button"),o=document.createElement("input");n.style.display="flex",n.style.width="100%",n.style.height="100px",n.style.justifyContent="center",n.style.marginTop="20px",r.setAttribute("id","create-task"),r.style.width="60px",r.style.height="31px",r.textContent="Create",r.style.marginLeft="10px",o.setAttribute("id","textfield-area"),o.style.width="150px",o.style.height="25px",o.placeholder="Enter project name here",n.appendChild(o),n.appendChild(r),t.setAttribute("id","sidebar-container"),t.style.backgroundColor="grey",t.style.width="100%",t.style.height="100%",t.style.gridColumn="1 / span 1",t.style.gridRow="2 / span 3",t.appendChild(n);const i=document.createElement("div"),a=document.createElement("h1"),l=document.createElement("div");i.style.border="2px solid turquoise",i.style.height="85%",i.style.borderRadius="25px",a.textContent="Projects",l.setAttribute("class","font-text"),l.textContent="test",l.style.fontSize="35px",l.style.fontFamily="Print",i.appendChild(a),i.appendChild(l),t.appendChild(i),e.appendChild(t)})(),(()=>{document.querySelector("#content");const e=document.querySelector("#main-container"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("input"),o=document.createElement("input"),i=document.createElement("input"),a=document.createElement("input"),l=document.createElement("div"),c=document.createElement("button"),d=document.createElement("div"),s=document.createElement("a"),u=document.createElement("a"),p=document.createElement("a");l.setAttribute("class","dropdown"),l.addEventListener("mouseenter",f),l.addEventListener("mouseleave",g),l.style.position="relative",l.style.display="inline-block",c.setAttribute("class","dropdown-button"),c.style.fontSize="16px",c.style.width="100px",c.style.height="35px",c.style.marginLeft="10px",c.style.marginRight="10px",c.textContent="Priority",d.setAttribute("class","dropdown-content"),d.style.display="none",d.style.position="absolute",d.style.width="90px",d.style.marginLeft="10px",s.setAttribute("class","urgent-option"),u.setAttribute("class","urgent-option"),p.setAttribute("class","urgent-option"),s.textContent="High",u.textContent="Medium",p.textContent="Low",s.addEventListener("click",(function(){x(s,c)})),u.addEventListener("click",(function(){x(u,c)})),p.addEventListener("click",(function(){x(p,c)})),l.appendChild(c),d.appendChild(s),d.appendChild(u),d.appendChild(p),l.appendChild(d),n.style.width="100%",n.style.display="flex",n.style.justifyContent="left",r.setAttribute("id","textfield-title"),r.setAttribute("class","input-element"),r.placeholder="Task Title Here",r.style.width="100px",r.style.height="30px",r.style.marginRight="10px",a.setAttribute("id","textfield-desc"),a.setAttribute("class","input-element"),a.placeholder="Details of your task",a.style.width="150px",a.style.height="30px",a.style.marginLeft="10px",a.style.marginRight="10px",i.setAttribute("id","textfield-date"),i.setAttribute("class","input-element"),i.placeholder="MM/DD/YYYY",i.style.width="90px",i.style.height="30px",i.style.marginLeft="10px",i.style.marginRight="10px",o.setAttribute("id","create-task-button"),o.style.width="40px",o.style.height="35px",o.type="image",o.src=h,n.appendChild(r),n.appendChild(a),n.appendChild(i),n.appendChild(l),n.appendChild(o),t.appendChild(n),t.setAttribute("id","actual-content-container"),t.style.width="100%",t.style.height="100%",t.style.gridColumn="2 / span 3",t.style.gridRow="2 / span 3",t.style.backgroundColor="purple",e.appendChild(t)})(),(()=>{document.querySelector("#actual-content-container"),document.querySelector("#textfield-title"),document.querySelector("#textfield-date"),document.querySelector("#textfield-desc"),document.querySelector(".dropdown-button");const e=document.querySelector("#create-task-button");document.querySelector("#textfield-title"),document.querySelector("#textfield-date"),document.querySelector("#textfield-desc"),document.querySelectorAll(".input-element").forEach((e=>{e.addEventListener("input",(function(t){((e,t)=>{t.textContent=e.target.value})(t,e)}))})),e.addEventListener("click",(function(){(()=>{document.createElement("div");const e=document.querySelector("#textfield-title");document.querySelector("#textfield-date"),document.querySelector("#textfield-desc"),document.querySelector(".dropdown-button"),document.querySelector("#create-task-button"),document.querySelectorAll(".input-element"),0==e.textContent.length?alert("This textfield is empty"):alert("Task Title is not empty")})()}));const t=document.createElement("div");t.style.width="100px",t.style.height="100px",t.style.backgroundColor="red",t.style.gridColumn="4 / span 1",t.style.gridRow="3 / span 1"})(),console.log("You set this up properly!")})()})();