(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(433),n.b),d=i()(o()),p=s()(l);d.push([e.id,'@font-face {\n    font-family: "Print"; \n    src: url('+p+");\n} \n\n.urgent-option {\n    color: black; \n    width: 100px;\n    text-decoration: none; \n    display: block;\n}\n\n.urgent-option:hover {\n    background-color: aqua;\n}\n\n.font-text:hover {\n    background-color: red;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},433:(e,t,n)=>{e.exports=n.p+"6cccd24bbc58dabcd04c.ttf"},183:(e,t,n)=>{e.exports=n.p+"6aa0fae40ef9d34555b6.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),d=n.n(l),p=n(589),u=n.n(p),m=n(28),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var y=n(183);const f=()=>{const e=document.querySelector(".dropdown"),t=document.querySelector(".dropdown-content");e.addEventListener("mouseover",(function(e){t.style.display="block"}))};(()=>{const e=document.querySelector("#body-element"),t=document.querySelector("#content"),n=document.createElement("div");document.createElement("div"),document.createElement("div"),document.createElement("div").style.gridArea="header",document.createElement("div").style.gridArea="sidebar",document.createElement("div").style.gridArea="main",e.style.margin="0 0 0 0",n.setAttribute("id","main-container"),n.style.display="grid",n.style.gridTemplateColumns="25% 25% 25% 25%",n.style.gridTemplateRows="10% 30% 30% 30%",n.style.gridTemplateAreas='"header header header header"                                           "sidebar sidebar main main"                                           "sidebar sidebar main main"                                           "sidebar sidebar main main',n.style.backgroundColor="teal",n.style.height="972px",t.appendChild(n)})(),(()=>{document.querySelector("#content");const e=document.querySelector("#main-container"),t=document.createElement("div");t.setAttribute("id","header-container"),t.style.width="400%",t.style.height="100%",t.style.backgroundColor="green",e.appendChild(t)})(),(()=>{document.querySelector("#content");const e=document.querySelector("#main-container"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("button"),o=document.createElement("input");n.style.display="flex",n.style.width="100%",n.style.height="100px",n.style.justifyContent="center",n.style.marginTop="20px",r.setAttribute("id","create-task"),r.style.width="60px",r.style.height="31px",r.textContent="Create",r.style.marginLeft="10px",o.setAttribute("id","textfield-area"),o.style.width="150px",o.style.height="25px",o.placeholder="Enter project name here",n.appendChild(o),n.appendChild(r),t.setAttribute("id","sidebar-container"),t.style.backgroundColor="grey",t.style.width="100%",t.style.height="100%",t.style.gridColumn="1 / span 1",t.style.gridRow="2 / span 3",t.appendChild(n);const a=document.createElement("div"),i=document.createElement("h1"),c=document.createElement("div");a.style.border="2px solid turquoise",a.style.height="85%",a.style.borderRadius="25px",i.textContent="Projects",c.setAttribute("class","font-text"),c.textContent="test",c.style.fontSize="35px",c.style.fontFamily="Print",a.appendChild(i),a.appendChild(c),t.appendChild(a),e.appendChild(t)})(),(()=>{document.querySelector("#content");const e=document.querySelector("#main-container"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("input"),o=document.createElement("input"),a=document.createElement("input"),i=document.createElement("div"),c=document.createElement("button"),s=document.createElement("div"),l=document.createElement("a"),d=document.createElement("a"),p=document.createElement("a");i.setAttribute("class","dropdown"),i.onclick=f,i.style.position="relative",i.style.display="inline-block",c.setAttribute("class","dropdown-button"),c.style.padding="16px",c.style.fontSize="16px",c.style.color="white",c.textContent="DropDown",s.setAttribute("class","dropdown-content"),s.style.display="none",s.style.position="absolute",s.style.minWidth="160px",s.style.boxShadow="0px 8px 16px 0px rgba(0,0,0,0.2)",l.setAttribute("class","urgent-option"),d.setAttribute("class","urgent-option"),p.setAttribute("class","urgent-option"),l.textContent="High",d.textContent="Medium",p.textContent="Low",i.appendChild(c),s.appendChild(l),s.appendChild(d),s.appendChild(p),i.appendChild(s),n.style.width="100%",n.style.display="flex",n.style.justifyContent="left",r.placeholder="Task Here",r.style.width="150px",r.style.height="30px",a.placeholder="MM/DD/YYYY",a.style.width="90px",a.style.height="30px",a.style.marginLeft="10px",a.style.marginRight="10px",o.style.width="45px",o.style.height="35px",o.type="image",o.src=y,n.appendChild(r),n.appendChild(a),n.appendChild(i),n.appendChild(o),t.appendChild(n),t.setAttribute("id","actual-content-container"),t.style.width="100%",t.style.height="100%",t.style.gridColumn="2 / span 3",t.style.gridRow="2 / span 3",t.style.backgroundColor="purple",e.appendChild(t)})(),console.log("You set this up properly!")})()})();