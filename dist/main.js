(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>h});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),u=n(667),s=n.n(u),c=new URL(n(433),n.b),d=i()(a()),l=s()(c);d.push([t.id,'@font-face {\n    font-family: "Print"; \n    src: url('+l+");\n} \n\n.urgent-option {\n    color: black; \n    width: 100px;\n    text-decoration: none; \n    display: block;\n}\n\n.urgent-option:hover {\n    background-color: aqua;\n}\n\n.font-text:hover {\n    background-color: red;\n}\n\n#popup {\n    background-color: white; \n    width: 420px; \n    height: 200px; \n    position: absolute; \n     \n    border-radius: 8px; \n    \n}\n",""]);const h=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var s=t[u],c=r.base?s[0]+r.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var h=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var s=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},433:(t,e,n)=>{t.exports=n.p+"6cccd24bbc58dabcd04c.ttf"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),s=n.n(u),c=n(216),d=n.n(c),l=n(589),h=n.n(l),m=n(28),f={};f.styleTagTransform=h(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"6aa0fae40ef9d34555b6.png";function p(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function y(t){return p(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function w(t){p(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function v(t){if(p(1,arguments),!y(t)&&"number"!=typeof t)return!1;var e=w(t);return!isNaN(Number(e))}var b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const C={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var T={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const S={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function k(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?D(s,(function(t){return t.test(u)})):E(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function E(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function D(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var P,q={ordinalNumber:(P={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(P.matchPattern);if(!n)return null;var r=n[0],a=t.match(P.parsePattern);if(!a)return null;var o=P.valueCallback?P.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const U={code:"en-US",formatDistance:function(t,e,n){var r,a=b[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:C,formatRelative:function(t,e,n,r){return T[t]},localize:S,match:q,options:{weekStartsOn:0,firstWeekContainsDate:1}};function A(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Y(t,e){p(2,arguments);var n=w(t).getTime(),r=A(e);return new Date(n+r)}function W(t,e){p(2,arguments);var n=A(e);return Y(t,-n)}var N=864e5;function L(t){p(1,arguments);var e=1,n=w(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function O(t){p(1,arguments);var e=w(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=L(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=L(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function j(t){p(1,arguments);var e=O(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=L(n);return r}var F=6048e5;function H(t,e){p(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:A(a),i=null==n.weekStartsOn?o:A(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=w(t),s=u.getUTCDay(),c=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function R(t,e){p(1,arguments);var n=w(t),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:A(i),s=null==a.firstWeekContainsDate?u:A(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=H(c,e),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var h=H(l,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function z(t,e){p(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:A(a),i=null==n.firstWeekContainsDate?o:A(n.firstWeekContainsDate),u=R(t,e),s=new Date(0);s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0);var c=H(s,e);return c}var I=6048e5;function Q(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const B=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},G=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Q(n+1,2)},X=function(t,e){return Q(t.getUTCDate(),e.length)},$=function(t,e){return Q(t.getUTCHours()%12||12,e.length)},_=function(t,e){return Q(t.getUTCHours(),e.length)},J=function(t,e){return Q(t.getUTCMinutes(),e.length)},Z=function(t,e){return Q(t.getUTCSeconds(),e.length)},V=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Q(Math.floor(r*Math.pow(10,n-3)),e.length)};var K={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B(t,e)},Y:function(t,e,n,r){var a=R(t,r),o=a>0?a:1-a;return"YY"===e?Q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){return Q(O(t),e.length)},u:function(t,e){return Q(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return G(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){p(1,arguments);var n=w(t),r=H(n,e).getTime()-z(n,e).getTime();return Math.round(r/I)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){var r=function(t){p(1,arguments);var e=w(t),n=L(e).getTime()-j(e).getTime();return Math.round(n/F)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):X(t,e)},D:function(t,e,n){var r=function(t){p(1,arguments);var e=w(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/N)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return $(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):_(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):J(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Z(t,e)},S:function(t,e){return V(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return et(a);case"XXXX":case"XX":return nt(a);default:return nt(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return et(a);case"xxxx":case"xx":return nt(a);default:return nt(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+tt(a,":");default:return"GMT"+nt(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+tt(a,":");default:return"GMT"+nt(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Q(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Q((r._originalDate||t).getTime(),e.length)}};function tt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+Q(o,2)}function et(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):nt(t,e)}function nt(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Q(Math.floor(a/60),2)+n+Q(a%60,2)}const rt=K;function at(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function ot(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}const it={p:ot,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return at(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",at(a,e)).replace("{{time}}",ot(o,e))}};function ut(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var st=["D","DD"],ct=["YY","YYYY"];function dt(t){return-1!==st.indexOf(t)}function lt(t){return-1!==ct.indexOf(t)}function ht(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ft=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,gt=/^'([^]*?)'?$/,pt=/''/g,yt=/[a-zA-Z]/;function wt(t){return t.match(gt)[1].replace(pt,"'")}const vt=()=>{document.querySelector(".dropdown"),document.querySelector(".dropdown-content").style.display="block"},bt=()=>{document.querySelector(".dropdown"),document.querySelector(".dropdown-content").style.display="none"},xt=(t,e)=>{e.textContent=t.textContent},Ct=()=>{const t=document.querySelector("#main-container"),e=(document.querySelector("#details-button"),document.createElement("div"));e.setAttribute("id","popup"),console.log("inside openDetails()"),t.appendChild(e)};(()=>{const t=document.querySelector("#body-element"),e=document.querySelector("#content"),n=document.createElement("div");document.createElement("div"),document.createElement("div"),document.createElement("div").style.gridArea="header",document.createElement("div").style.gridArea="sidebar",document.createElement("div").style.gridArea="main",t.style.margin="0 0 0 0",n.setAttribute("id","main-container"),n.style.display="grid",n.style.gridTemplateColumns="25% 25% 25% 25%",n.style.gridTemplateRows="10% 30% 30% 30%",n.style.gridTemplateAreas='"header header header header"                                           "sidebar sidebar main main"                                           "sidebar sidebar main main"                                           "sidebar sidebar main main',n.style.backgroundColor="teal",n.style.height="972px",e.appendChild(n)})(),(()=>{document.querySelector("#content");const t=document.querySelector("#main-container"),e=document.createElement("div");e.setAttribute("id","header-container"),e.style.width="400%",e.style.height="100%",e.style.backgroundColor="green",t.appendChild(e)})(),(()=>{document.querySelector("#content");const t=document.querySelector("#main-container"),e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("button"),a=document.createElement("input");n.style.display="flex",n.style.width="100%",n.style.height="100px",n.style.justifyContent="center",n.style.marginTop="20px",r.setAttribute("id","create-task"),r.style.width="60px",r.style.height="31px",r.textContent="Create",r.style.marginLeft="10px",a.setAttribute("id","textfield-area"),a.style.width="150px",a.style.height="25px",a.placeholder="Enter project name here",n.appendChild(a),n.appendChild(r),e.setAttribute("id","sidebar-container"),e.style.backgroundColor="grey",e.style.width="100%",e.style.height="100%",e.style.gridColumn="1 / span 1",e.style.gridRow="2 / span 3",e.appendChild(n);const o=document.createElement("div"),i=document.createElement("h1"),u=document.createElement("div");o.style.border="2px solid turquoise",o.style.height="85%",o.style.borderRadius="25px",i.textContent="Projects",u.setAttribute("class","font-text"),u.textContent="test",u.style.fontSize="35px",u.style.fontFamily="Print",o.appendChild(i),o.appendChild(u),e.appendChild(o),t.appendChild(e)})(),(()=>{document.querySelector("#content");const t=document.querySelector("#main-container"),e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("input"),a=document.createElement("input"),o=document.createElement("input"),i=document.createElement("input"),u=document.createElement("div"),s=document.createElement("button"),c=document.createElement("div"),d=document.createElement("a"),l=document.createElement("a"),h=document.createElement("a");u.setAttribute("class","dropdown"),u.addEventListener("mouseenter",vt),u.addEventListener("mouseleave",bt),u.style.position="relative",u.style.display="inline-block",s.setAttribute("class","dropdown-button"),s.style.fontSize="16px",s.style.width="100px",s.style.height="35px",s.style.marginLeft="10px",s.style.marginRight="10px",s.textContent="Priority",c.setAttribute("class","dropdown-content"),c.style.display="none",c.style.position="absolute",c.style.width="90px",c.style.marginLeft="10px",d.setAttribute("class","urgent-option"),l.setAttribute("class","urgent-option"),h.setAttribute("class","urgent-option"),d.textContent="High",l.textContent="Medium",h.textContent="Low",d.addEventListener("click",(function(){xt(d,s)})),l.addEventListener("click",(function(){xt(l,s)})),h.addEventListener("click",(function(){xt(h,s)})),u.appendChild(s),c.appendChild(d),c.appendChild(l),c.appendChild(h),u.appendChild(c),n.style.width="100%",n.style.display="flex",n.style.justifyContent="left",r.setAttribute("id","textfield-title"),r.setAttribute("class","input-element"),r.placeholder="Task Title Here",r.style.width="100px",r.style.height="30px",r.style.marginRight="10px",i.setAttribute("id","textfield-desc"),i.setAttribute("class","input-element"),i.placeholder="Details of your task",i.style.width="150px",i.style.height="30px",i.style.marginLeft="10px",i.style.marginRight="10px",o.setAttribute("id","textfield-date"),o.setAttribute("class","input-element"),o.placeholder="MM/DD/YYYY",o.style.width="90px",o.style.height="30px",o.style.marginLeft="10px",o.style.marginRight="10px",a.setAttribute("id","create-task-button"),a.style.width="40px",a.style.height="35px",a.type="image",a.src=g,n.appendChild(r),n.appendChild(i),n.appendChild(o),n.appendChild(u),n.appendChild(a),e.appendChild(n),e.setAttribute("id","actual-content-container"),e.style.width="100%",e.style.height="100%",e.style.gridColumn="2 / span 3",e.style.gridRow="2 / span 3",e.style.backgroundColor="purple",t.appendChild(e)})(),(()=>{const t=document.querySelector("#actual-content-container"),e=document.querySelector("#textfield-title"),n=document.querySelector("#textfield-date"),r=(document.querySelector("#textfield-desc"),document.querySelector(".dropdown-button")),a=document.querySelector("#create-task-button");var o=null;document.querySelector("#textfield-title"),document.querySelector("#textfield-date"),document.querySelector("#textfield-desc"),document.querySelectorAll(".input-element").forEach((t=>{t.addEventListener("input",(function(e){((t,e)=>{e.textContent=t.target.value})(e,t)}))})),a.addEventListener("click",(function(){if(o=(()=>{document.createElement("div");const t=document.querySelector("#textfield-title"),e=document.querySelector("#textfield-desc"),n=document.querySelector("#textfield-date"),r=document.querySelector(".dropdown-button"),a=(document.querySelector("#create-task-button"),document.querySelectorAll(".input-element"),document.createElement("div"));return 0===t.textContent.length&&(a.textContent+="Task Title is empty.\n"),0===e.textContent.length&&(a.textContent+="Task Description is empty.\n"),0===n.textContent.length&&(a.textContent+="Task Date is empty.\n"),"Priority"===r.textContent&&(a.textContent+="Pick a level of priority.\n"),!(a.textContent.length>0&&(alert(a.textContent),1))})(),o){var a,i,u;alert("Move onto next step of checking for valid dates...."),a=n.textContent.substring(0,3),i=n.textContent.substring(4,5),u=n.textContent.substring(6,11);var s=parseInt(a),c=parseInt(i),d=parseInt(u),l=null;if(isNaN(s)||isNaN(c)||isNaN(d))alert("Invalid date");else{l=function(t,e,n){p(2,arguments);var r=String(e),a=n||{},o=a.locale||U,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:A(i),s=null==a.firstWeekContainsDate?u:A(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:A(c),l=null==a.weekStartsOn?d:A(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var h=w(t);if(!v(h))throw new RangeError("Invalid time value");var m=ut(h),f=W(h,m),g={firstWeekContainsDate:s,weekStartsOn:l,locale:o,_originalDate:h};return r.match(ft).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,it[e])(t,o.formatLong,g):t})).join("").match(mt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return wt(n);var i=rt[r];if(i)return!a.useAdditionalWeekYearTokens&&lt(n)&&ht(n,e,t),!a.useAdditionalDayOfYearTokens&&dt(n)&&ht(n,e,t),i(f,n,o.localize,g);if(r.match(yt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(parseInt(u),parseInt(a)-1,parseInt(i)),"MM/dd/yyyy"),console.log(l);const n=document.createElement("div"),o=document.createElement("input"),s=document.createElement("button");o.type="checkbox",o.style.float="left",o.style.height="50px",o.style.marginRight="10px","High"===r.textContent?n.style.backgroundColor="red":"Medium"===r.textContent?n.style.backgroundColor="yellow":"Low"===r.textContent&&(n.style.backgroundColor="green"),n.style.height="50px",n.style.marginTop="10px",n.style.fontSize="50px",n.textContent=`${e.textContent}`,s.setAttribute("id","details-button"),s.textContent="Details",s.style.width="70px",s.style.height="50px",s.style.float="right",s.addEventListener("click",Ct),n.appendChild(o),n.appendChild(s),t.appendChild(n)}console.log(`month: ${parseInt(a)} | day: ${i} | year: ${u}`)}}))})(),console.log("You set this up properly!")})()})();