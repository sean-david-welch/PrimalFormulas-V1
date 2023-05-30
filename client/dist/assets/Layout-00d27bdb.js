import{o as Ee,R as Wn,a as je,j as l,q as nn,t as Ie,u as Te,b as $,g as Bn,r as Yt,L as Vn}from"./index-5d20dca2.js";function gn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?gn(Object(e),!0).forEach(function(a){O(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):gn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function St(t){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function _e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function hn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Le(t,n,e){return n&&hn(t.prototype,n),e&&hn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function en(t,n){return Me(t)||Fe(t,n)||Xn(t,n)||Ye()}function mt(t){return ze(t)||Re(t)||Xn(t)||De()}function ze(t){if(Array.isArray(t))return $t(t)}function Me(t){if(Array.isArray(t))return t}function Re(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fe(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Xn(t,n){if(t){if(typeof t=="string")return $t(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $t(t,n)}}function $t(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function De(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yn=function(){},an={},Gn={},qn=null,Kn={mark:yn,measure:yn};try{typeof window<"u"&&(an=window),typeof document<"u"&&(Gn=document),typeof MutationObserver<"u"&&(qn=MutationObserver),typeof performance<"u"&&(Kn=performance)}catch{}var $e=an.navigator||{},xn=$e.userAgent,kn=xn===void 0?"":xn,U=an,y=Gn,wn=qn,pt=Kn;U.document;var F=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Qn=~kn.indexOf("MSIE")||~kn.indexOf("Trident/"),bt,gt,ht,yt,xt,z="___FONT_AWESOME___",Ht=16,Jn="fa",Zn="svg-inline--fa",K="data-fa-i2svg",Ut="data-fa-pseudo-element",He="data-fa-pseudo-element-pending",rn="data-prefix",on="data-icon",An="fontawesome-i2svg",Ue="async",We=["HTML","HEAD","STYLE","SCRIPT"],te=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",sn=[h,x];function dt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var st=dt((bt={},O(bt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(bt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),bt)),ft=dt((gt={},O(gt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(gt,x,{solid:"fass",regular:"fasr",light:"fasl"}),gt)),lt=dt((ht={},O(ht,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(ht,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ht)),Be=dt((yt={},O(yt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(yt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yt)),Ve=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ne="fa-layers-text",Xe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ge=dt((xt={},O(xt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(xt,x,{900:"fass",400:"fasr",300:"fasl"}),xt)),ee=[1,2,3,4,5,6,7,8,9,10],qe=ee.concat([11,12,13,14,15,16,17,18,19,20]),Ke=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(ft[h]).map(ct.add.bind(ct));Object.keys(ft[x]).map(ct.add.bind(ct));var Qe=[].concat(sn,mt(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(ee.map(function(t){return"".concat(t,"x")})).concat(qe.map(function(t){return"w-".concat(t)})),it=U.FontAwesomeConfig||{};function Je(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ze(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var ta=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ta.forEach(function(t){var n=en(t,2),e=n[0],a=n[1],r=Ze(Je(e));r!=null&&(it[a]=r)})}var ae={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jn,replacementClass:Zn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var et=m(m({},ae),it);et.autoReplaceSvg||(et.observeMutations=!1);var v={};Object.keys(ae).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){et[t]=e,ot.forEach(function(a){return a(v)})},get:function(){return et[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){et.cssPrefix=n,ot.forEach(function(e){return e(v)})},get:function(){return et.cssPrefix}});U.FontAwesomeConfig=v;var ot=[];function na(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var Y=Ht,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ea(t){if(!(!t||!F)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),t}}var aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var t=12,n="";t-- >0;)n+=aa[Math.random()*62|0];return n}function at(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function fn(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function re(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(re(t[e]),'" ')},"").trim()}function jt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function ln(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function ia(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function oa(t){var n=t.transform,e=t.width,a=e===void 0?Ht:e,r=t.height,i=r===void 0?Ht:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Qn?f+="translate(".concat(n.x/Y-a/2,"em, ").concat(n.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/Y,"em), calc(-50% + ").concat(n.y/Y,"em)) "):f+="translate(".concat(n.x/Y,"em, ").concat(n.y/Y,"em) "),f+="scale(".concat(n.size/Y*(n.flipX?-1:1),", ").concat(n.size/Y*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ie(){var t=Jn,n=Zn,e=v.cssPrefix,a=v.replacementClass,r=sa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Nn=!1;function zt(){v.autoAddCss&&!Nn&&(ea(ie()),Nn=!0)}var fa={mixout:function(){return{dom:{css:ie,insertCss:zt}}},hooks:function(){return{beforeDOMElementCreation:function(){zt()},beforeI2svg:function(){zt()}}}},M=U||{};M[z]||(M[z]={});M[z].styles||(M[z].styles={});M[z].hooks||(M[z].hooks={});M[z].shims||(M[z].shims=[]);var _=M[z],oe=[],la=function t(){y.removeEventListener("DOMContentLoaded",t),Ct=1,oe.map(function(n){return n()})},Ct=!1;F&&(Ct=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Ct||y.addEventListener("DOMContentLoaded",la));function ca(t){F&&(Ct?setTimeout(t,0):oe.push(t))}function vt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?re(t):"<".concat(n," ").concat(ra(a),">").concat(i.map(vt).join(""),"</").concat(n,">")}function On(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ua=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Mt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ua(e,r):e,f,c,u;for(a===void 0?(f=1,u=n[i[0]]):(f=0,u=a);f<o;f++)c=i[f],u=s(u,n[c],c,n);return u};function ma(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Wt(t){var n=ma(t);return n.length===1?n[0].toString(16):null}function da(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Sn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Bt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Sn(n);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(t,Sn(n)):_.styles[t]=m(m({},_.styles[t]||{}),i),t==="fas"&&Bt("fa",n)}var kt,wt,At,J=_.styles,va=_.shims,pa=(kt={},O(kt,h,Object.values(lt[h])),O(kt,x,Object.values(lt[x])),kt),cn=null,se={},fe={},le={},ce={},ue={},ba=(wt={},O(wt,h,Object.keys(st[h])),O(wt,x,Object.keys(st[x])),wt);function ga(t){return~Qe.indexOf(t)}function ha(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}var me=function(){var n=function(i){return Mt(J,function(o,s,f){return o[f]=Mt(s,i,{}),o},{})};se=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),fe=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ue=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in J||v.autoFetchSvg,a=Mt(va,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});le=a.names,ce=a.unicodes,cn=It(v.styleDefault,{family:v.familyDefault})};na(function(t){cn=It(t.styleDefault,{family:v.familyDefault})});me();function un(t,n){return(se[t]||{})[n]}function ya(t,n){return(fe[t]||{})[n]}function q(t,n){return(ue[t]||{})[n]}function de(t){return le[t]||{prefix:null,iconName:null}}function xa(t){var n=ce[t],e=un("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return cn}var mn=function(){return{prefix:null,iconName:null,rest:[]}};function It(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=st[a][t],i=ft[a][t]||ft[a][r],o=t in _.styles?t:null;return i||o||null}var Cn=(At={},O(At,h,Object.keys(lt[h])),O(At,x,Object.keys(lt[x])),At);function Tt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,h,"".concat(v.cssPrefix,"-").concat(h)),O(n,x,"".concat(v.cssPrefix,"-").concat(x)),n),o=null,s=h;(t.includes(i[h])||t.some(function(c){return Cn[h].includes(c)}))&&(s=h),(t.includes(i[x])||t.some(function(c){return Cn[x].includes(c)}))&&(s=x);var f=t.reduce(function(c,u){var d=ha(v.cssPrefix,u);if(J[u]?(u=pa[s].includes(u)?Be[s][u]:u,o=u,c.prefix=u):ba[s].indexOf(u)>-1?(o=u,c.prefix=It(u,{family:s})):d?c.iconName=d:u!==v.replacementClass&&u!==i[h]&&u!==i[x]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var p=o==="fa"?de(c.iconName):{},g=q(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!J.far&&J.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},mn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(J.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var ka=function(){function t(){_e(this,t),this.definitions={}}return Le(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),Bt(s,o[s]);var f=lt[h][s];f&&Bt(f,o[s]),me()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,u=c[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(e[s][d]=c)}),e[s][f]=c}),e}}]),t}(),Pn=[],Z={},nt={},wa=Object.keys(nt);function Aa(t,n){var e=n.mixoutsTo;return Pn=t,Z={},Object.keys(nt).forEach(function(a){wa.indexOf(a)===-1&&delete nt[a]}),Pn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),St(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(nt)}),e}function Vt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,e)})}function R(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,n):void 0}function Xt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||W();if(n)return n=q(e,n)||n,On(ve.definitions,e,n)||On(_.styles,e,n)}var ve=new ka,Na=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Q("noAuto")},Oa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(Q("beforeI2svg",n),R("pseudoElements2svg",n),R("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ca(function(){Ca({autoReplaceSvgRoot:e}),Q("watch",n)})}},Sa={icon:function(n){if(n===null)return null;if(St(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=It(n[0]);return{prefix:a,iconName:q(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(Ve))){var r=Tt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:q(i,n)||n}}}},I={noAuto:Na,config:v,dom:Oa,parse:Sa,library:ve,findIconDefinition:Xt,toHtml:vt},Ca=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(_.styles).length>0||v.autoFetchSvg)&&F&&v.autoReplaceSvg&&I.dom.i2svg({node:a})};function _t(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Pa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ln(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=jt(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ea(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function dn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,u=t.titleId,d=t.extra,p=t.watchable,g=p===void 0?!1:p,A=a.found?a:e,C=A.width,k=A.height,E=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),N={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(k)})},j=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/k*16*.0625,"em")}:{};g&&(N.attributes[K]=""),f&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||ut())},children:[f]}),delete N.attributes.title);var S=m(m({},N),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},j),d.styles)}),V=a.found&&e.found?R("generateAbstractMask",S)||{children:[],attributes:{}}:R("generateAbstractIcon",S)||{children:[],attributes:{}},X=V.children,Lt=V.attributes;return S.children=X,S.attributes=Lt,s?Ea(S):Pa(S)}function En(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[K]="");var u=m({},o.styles);ln(r)&&(u.transform=oa({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var d=jt(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ja(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=jt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Rt=_.styles;function Gt(t){var n=t[0],e=t[1],a=t.slice(4),r=en(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Ia={found:!1,width:512,height:512};function Ta(t,n){!te&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function qt(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=W()),new Promise(function(a,r){if(R("missingIconAbstract"),e==="fa"){var i=de(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Rt[n]&&Rt[n][t]){var o=Rt[n][t];return a(Gt(o))}Ta(t,n),a(m(m({},Ia),{},{icon:v.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var jn=function(){},Kt=v.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:jn,measure:jn},rt='FA "6.4.0"',_a=function(n){return Kt.mark("".concat(rt," ").concat(n," begins")),function(){return pe(n)}},pe=function(n){Kt.mark("".concat(rt," ").concat(n," ends")),Kt.measure("".concat(rt," ").concat(n),"".concat(rt," ").concat(n," begins"),"".concat(rt," ").concat(n," ends"))},vn={begin:_a,end:pe},Nt=function(){};function In(t){var n=t.getAttribute?t.getAttribute(K):null;return typeof n=="string"}function La(t){var n=t.getAttribute?t.getAttribute(rn):null,e=t.getAttribute?t.getAttribute(on):null;return n&&e}function za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Ma(){if(v.autoReplaceSvg===!0)return Ot.replace;var t=Ot[v.autoReplaceSvg];return t||Ot.replace}function Ra(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Fa(t){return y.createElement(t)}function be(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ra:Fa:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(be(o,{ceFn:a}))}),r}function Da(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ot={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(be(r),e)}),e.getAttribute(K)===null&&v.keepOriginalSource){var a=y.createComment(Da(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~fn(e).indexOf(v.replacementClass))return Ot.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);e.setAttribute(K,""),e.innerHTML=o}};function Tn(t){t()}function ge(t,n){var e=typeof n=="function"?n:Nt;if(t.length===0)e();else{var a=Tn;v.mutateApproach===Ue&&(a=U.requestAnimationFrame||Tn),a(function(){var r=Ma(),i=vn.begin("mutate");t.map(r),i(),e()})}}var pn=!1;function he(){pn=!0}function Qt(){pn=!1}var Pt=null;function _n(t){if(wn&&v.observeMutations){var n=t.treeCallback,e=n===void 0?Nt:n,a=t.nodeCallback,r=a===void 0?Nt:a,i=t.pseudoElementsCallback,o=i===void 0?Nt:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Pt=new wn(function(c){if(!pn){var u=W();at(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!In(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&In(d.target)&&~Ke.indexOf(d.attributeName))if(d.attributeName==="class"&&La(d.target)){var p=Tt(fn(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(rn,g||u),A&&d.target.setAttribute(on,A)}else za(d.target)&&r(d.target)})}}),F&&Pt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ya(){Pt&&Pt.disconnect()}function $a(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ha(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Tt(fn(t));return r.prefix||(r.prefix=W()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ya(r.prefix,t.innerText)||un(r.prefix,Wt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ua(t){var n=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||ut()):(n["aria-hidden"]="true",n.focusable="false")),n}function Wa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ha(t),a=e.iconName,r=e.prefix,i=e.rest,o=Ua(t),s=Vt("parseNodeAttributes",{},t),f=n.styleParser?$a(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ba=_.styles;function ye(t){var n=v.autoReplaceSvg==="nest"?Ln(t,{styleParser:!1}):Ln(t);return~n.extra.classes.indexOf(ne)?R("generateLayersText",t,n):R("generateSvgReplacementMutation",t,n)}var B=new Set;sn.map(function(t){B.add("fa-".concat(t))});Object.keys(st[h]).map(B.add.bind(B));Object.keys(st[x]).map(B.add.bind(B));B=mt(B);function zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=y.documentElement.classList,a=function(d){return e.add("".concat(An,"-").concat(d))},r=function(d){return e.remove("".concat(An,"-").concat(d))},i=v.autoFetchSvg?B:sn.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ba));i.includes("fa")||i.push("fa");var o=[".".concat(ne,":not([").concat(K,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=vn.begin("onTree"),c=s.reduce(function(u,d){try{var p=ye(d);p&&u.push(p)}catch(g){te||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(p){ge(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),u()})}).catch(function(p){f(),d(p)})})}function Va(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ye(t).then(function(e){e&&ge([e],n)})}function Xa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Xt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Xt(r||{})),t(a,m(m({},e),{},{mask:r}))}}var Ga=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,u=c===void 0?null:c,d=e.title,p=d===void 0?null:d,g=e.titleId,A=g===void 0?null:g,C=e.classes,k=C===void 0?[]:C,E=e.attributes,w=E===void 0?{}:E,N=e.styles,j=N===void 0?{}:N;if(n){var S=n.prefix,V=n.iconName,X=n.icon;return _t(m({type:"icon"},n),function(){return Q("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(p?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(A||ut()):(w["aria-hidden"]="true",w.focusable="false")),dn({icons:{main:Gt(X),mask:f?Gt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:V,transform:m(m({},L),r),symbol:o,title:p,maskId:u,titleId:A,extra:{attributes:w,styles:j,classes:k}})})}},qa={mixout:function(){return{icon:Xa(Ga)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=zn,e.nodeCallback=Va,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return zn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,u=a.mask,d=a.maskId,p=a.extra;return new Promise(function(g,A){Promise.all([qt(r,s),u.iconName?qt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var k=en(C,2),E=k[0],w=k[1];g([e,dn({icons:{main:E,mask:w},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=jt(s);f.length>0&&(r.style=f);var c;return ln(o)&&(c=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Ka={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Qa={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,u=a.styles,d=u===void 0?{}:u;return _t({type:"counter",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),ja({content:e.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Ja={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,u=a.attributes,d=u===void 0?{}:u,p=a.styles,g=p===void 0?{}:p;return _t({type:"text",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),En({content:e,transform:m(m({},L),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(v.cssPrefix,"-layers-text")].concat(mt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Qn){var c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/c,f=u.height/c}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,En({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Za=new RegExp('"',"ug"),Mn=[1105920,1112319];function tr(t){var n=t.replace(Za,""),e=da(n,0),a=e>=Mn[0]&&e<=Mn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Wt(r?n[0]:n),isSecondary:a||r}}function Rn(t,n){var e="".concat(He).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=at(t.children),o=i.filter(function(X){return X.getAttribute(Ut)===n})[0],s=U.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Xe),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?x:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ft[p][f[2].toLowerCase()]:Ge[p][c],A=tr(d),C=A.value,k=A.isSecondary,E=f[0].startsWith("FontAwesome"),w=un(g,C),N=w;if(E){var j=xa(C);j.iconName&&j.prefix&&(w=j.iconName,g=j.prefix)}if(w&&!k&&(!o||o.getAttribute(rn)!==g||o.getAttribute(on)!==N)){t.setAttribute(e,N),o&&t.removeChild(o);var S=Wa(),V=S.extra;V.attributes[Ut]=n,qt(w,g).then(function(X){var Lt=dn(m(m({},S),{},{icons:{main:X,mask:mn()},prefix:g,iconName:N,extra:V,watchable:!0})),D=y.createElement("svg");n==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=Lt.map(function(Pe){return vt(Pe)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function nr(t){return Promise.all([Rn(t,"::before"),Rn(t,"::after")])}function er(t){return t.parentNode!==document.head&&!~We.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ut)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fn(t){if(F)return new Promise(function(n,e){var a=at(t.querySelectorAll("*")).filter(er).map(nr),r=vn.begin("searchPseudoElements");he(),Promise.all(a).then(function(){r(),Qt(),n()}).catch(function(){r(),Qt(),e()})})}var ar={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Fn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;v.searchPseudoElements&&Fn(r)}}},Dn=!1,rr={mixout:function(){return{dom:{unwatch:function(){he(),Dn=!0}}}},hooks:function(){return{bootstrap:function(){_n(Vt("mutationObserverCallbacks",{}))},noAuto:function(){Ya()},watch:function(e){var a=e.observeMutationsRoot;Dn?Qt():_n(Vt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Yn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ir={mixout:function(){return{parse:{transform:function(e){return Yn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Yn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),g.path)}]}]}}}},Ft={x:0,y:0,width:"100%",height:"100%"};function $n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function or(t){return t.tag==="g"?t.children:[t]}var sr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):mn();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,u=i.icon,d=o.width,p=o.icon,g=ia({transform:f,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:m(m({},Ft),{},{fill:"white"})},C=u.children?{children:u.children.map($n)}:{},k={tag:"g",attributes:m({},g.inner),children:[$n(m({tag:u.tag,attributes:m(m({},u.attributes),g.path)},C))]},E={tag:"g",attributes:m({},g.outer),children:[k]},w="mask-".concat(s||ut()),N="clip-".concat(s||ut()),j={tag:"mask",attributes:m(m({},Ft),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,E]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:or(p)},j]};return a.push(S,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(w,")")},Ft)}),{children:a,attributes:r}}}},fr={provides:function(n){var e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},lr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},cr=[fa,qa,Ka,Qa,Ja,ar,rr,ir,sr,fr,lr];Aa(cr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Jt=I.parse;I.findIconDefinition;I.toHtml;var ur=I.icon;I.layer;I.text;I.counter;var xe={exports:{}},mr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dr=mr,vr=dr;function ke(){}function we(){}we.resetWarningCache=ke;var pr=function(){function t(a,r,i,o,s,f){if(f!==vr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:we,resetWarningCache:ke};return e.PropTypes=e,e};xe.exports=pr();var br=xe.exports;const b=Ee(br);function Hn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function H(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Hn(Object(e),!0).forEach(function(a){tt(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Hn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Et(t){return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Et(t)}function tt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function gr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function hr(t,n){if(t==null)return{};var e=gr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function Zt(t){return yr(t)||xr(t)||kr(t)||wr()}function yr(t){if(Array.isArray(t))return tn(t)}function xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kr(t,n){if(t){if(typeof t=="string")return tn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return tn(t,n)}}function tn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function wr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ar(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,p=t.fixedWidth,g=t.inverse,A=t.border,C=t.listItem,k=t.flip,E=t.size,w=t.rotation,N=t.pull,j=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":A,"fa-li":C,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},tt(n,"fa-".concat(E),typeof E<"u"&&E!==null),tt(n,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),tt(n,"fa-pull-".concat(N),typeof N<"u"&&N!==null),tt(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(j).map(function(S){return j[S]?S:null}).filter(function(S){return S})}function Nr(t){return t=t-0,t===t}function Ae(t){return Nr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Or=["style"];function Sr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Cr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Ae(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[Sr(r)]=i:n[r]=i,n},{})}function Ne(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return Ne(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,c){var u=n.attributes[c];switch(c){case"class":f.attrs.className=u,delete n.attributes.class;break;case"style":f.attrs.style=Cr(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[Ae(c)]=u}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=hr(e,Or);return r.attrs.style=H(H({},r.attrs.style),o),t.apply(void 0,[n.tag,H(H({},r.attrs),s)].concat(Zt(a)))}var Oe=!1;try{Oe=!0}catch{}function Pr(){if(!Oe&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Un(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jt.icon)return Jt.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Dt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?tt({},t,n):{}}var P=Wn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=Un(e),u=Dt("classes",[].concat(Zt(Ar(t)),Zt(i.split(" ")))),d=Dt("transform",typeof t.transform=="string"?Jt.transform(t.transform):t.transform),p=Dt("mask",Un(a)),g=ur(c,H(H(H(H({},u),d),p),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return Pr("Could not find icon",c),null;var A=g.abstract,C={ref:n};return Object.keys(t).forEach(function(k){P.defaultProps.hasOwnProperty(k)||(C[k]=t[k])}),Er(A[0],C)});P.displayName="FontAwesomeIcon";P.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};P.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Er=Ne.bind(null,Wn.createElement),Jr={prefix:"fas",iconName:"atom",icon:[512,512,[9883],"f5d2","M256 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM446 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.6 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C21.7 346.9 33 301.2 66 256c-33-45.2-44.3-90.9-23.6-128c20.2-36.3 62.5-49.3 115.2-43.2C179.6 32.7 213.2 0 256 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM290.9 99.7C274.1 65.9 259.9 64 256 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM110.2 304.8C91.4 335 96 348.7 98.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},jr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ir={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Zr=Ir,ti={prefix:"fas",iconName:"cart-plus",icon:[576,512,[],"f217","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"]},ni={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},Tr={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},ei={prefix:"fas",iconName:"shield-virus",icon:[512,512,[],"e06c","M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},Se={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},_r={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Ce={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},ai={prefix:"fas",iconName:"hammer",icon:[576,512,[128296],"f6e3","M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"]},Lr={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};function zr({to:t,label:n,icon:e,onClick:a}){const r=je(),i=async o=>{a&&a(o),t&&r(t)};return l.jsx(l.Fragment,{children:l.jsx("li",{className:"nav-button",children:l.jsxs("button",{className:"btn btn-nav btn-primary",onClick:i,children:[n," ",l.jsx("i",{className:"icon",children:e})]})})})}nn.defaults.baseURL=Ie;nn.defaults.headers.post["Content-Type"]="application/json";const Mr=async t=>{const{endpoint:n,method:e,data:a}=t;try{const r=await nn({method:e,url:n,data:a});if(r.status<200||r.status>=300){const o=r;throw new Error(o.statusText||"Error fetching data")}return r.data}catch(r){throw r instanceof Error?new Error(r.message):r}},Rr=async t=>{try{return await Mr({endpoint:`content/${t}`,method:"GET"})}catch(n){throw n instanceof Error?new Error(n.message):n}},bn=(t,n)=>Te([`${t}.${n}`],()=>Rr(t),{retry:!1,staleTime:1e3*60*60*24});function T({to:t,children:n}){return l.jsx("li",{className:"nav-item",children:l.jsx($,{className:"nav-link",to:t,children:n})})}function Fr(){const n=Bn().pathname==="/",[e,a]=Yt.useState(n);return Yt.useEffect(()=>{const r=()=>{if(n){const o=window.scrollY<250;a(o)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[n]),e}function Dr(){var a;const t=Fr(),n=bn("logo","png");if(n.isLoading)return l.jsx(Vn,{});if(n.isError&&n.error instanceof Error)return l.jsxs("div",{children:["Error: ",n.error.message]});const e=(a=n.data)==null?void 0:a.content;return l.jsx("nav",{id:"navbar",className:t?"transparent":"",children:l.jsxs("ul",{className:"nav-list",children:[l.jsx($,{className:"logo",to:"/",children:l.jsx("img",{src:e,className:"logo",id:"logo",alt:"Logo"})}),l.jsx("div",{className:"nav-list-side",children:l.jsxs("ul",{className:"nav-list",children:[l.jsx(zr,{to:"/shop",icon:l.jsx(P,{icon:Tr}),label:"Products"}),l.jsx(T,{id:"cart","aria-label":"cart-nav",to:"/cart",children:l.jsx(P,{icon:Se,size:"xl"})}),l.jsx(T,{id:"user","aria-label":"user-nav",to:"/login",children:l.jsx(P,{icon:Ce,size:"2xl"})})]})})]})})}const Yr=({headingText:t})=>{var a;const n=bn("logo","png");if(n.isLoading)return l.jsx("div",{children:"Loading..."});if(n.isError&&n.error instanceof Error)return l.jsxs("div",{children:["Error: ",n.error.message]});const e=(a=n.data)==null?void 0:a.content;return l.jsx(l.Fragment,{children:l.jsxs("div",{className:"logo-heading",children:[l.jsx($,{to:"/",className:"logo-link",children:l.jsx("img",{src:e,id:"logo",alt:"Logo",className:"logo-heading"})}),l.jsx("h2",{className:"section-heading",children:t})]})})},$r=()=>{const[t,n]=Yt.useState(!1);return{isOpen:t,toggleSideNavbar:()=>{n(!t)}}};function Hr(){const{isOpen:t,toggleSideNavbar:n}=$r();return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`side-nav ${t?"open":"closed"}`,children:[l.jsxs("nav",{className:"side-nav__menu",children:[l.jsx(Yr,{headingText:"Primal Formulas"}),l.jsxs("ul",{className:"nav-list",children:[l.jsx(T,{to:"/about",children:"Our Story"}),l.jsx(T,{to:"/shop",children:"Products"}),l.jsx(T,{to:"/login",children:"Account"})]}),l.jsxs("ul",{className:"icon-nav",children:[l.jsx(T,{to:"/cart",children:l.jsx(P,{icon:Se,size:"lg"})}),l.jsx(T,{to:"/login",children:l.jsx(P,{icon:Ce,size:"xl"})})]})]}),t&&l.jsx("div",{className:"side-nav__icon",onClick:n,children:l.jsx(P,{icon:Lr,className:"navigation"})})]}),!t&&l.jsx("div",{className:"side-nav__icon",onClick:n,children:l.jsx(P,{icon:jr,className:" navigation"})})]})}function Ur(){return l.jsxs("header",{children:[l.jsx(Dr,{}),l.jsx(Hr,{})]})}var Wr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Br={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Vr={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Xr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const Gr=()=>{window.scrollTo({top:0,behavior:"smooth"})},qr=()=>l.jsx("button",{id:"toTopButton","aria-label":"scroll-to-top-button",className:"toTopButton",onClick:Gr,children:l.jsx(P,{icon:_r,size:"2x"})});function Kr(){var e;const t=bn("logo","png");if(t.isLoading)return l.jsx(Vn,{});if(t.isError&&t.error instanceof Error)return l.jsxs("div",{children:["Error: ",t.error.message]});const n=(e=t.data)==null?void 0:e.content;return l.jsxs("footer",{children:[l.jsx("div",{className:"footer-navigation",children:l.jsxs("ul",{className:"nav-list",children:[l.jsx(T,{to:"/about",children:"About"}),l.jsx(T,{to:"/shop",children:"Products"}),l.jsx(T,{to:"/cart",children:"Cart"}),l.jsx(T,{to:"/login",children:"Login"})]})}),l.jsxs("div",{className:"footer-information",children:[l.jsx($,{to:"/",children:l.jsx("img",{src:n,alt:"Logo",id:"logo"})}),l.jsxs("ul",{className:"address-list",children:[l.jsx("li",{className:"address-item",children:"Primal Formulas Ltd."}),l.jsx("li",{className:"address-item",children:"Clonross, Drumree"}),l.jsx("li",{className:"address-item",children:"Co. Meath,"}),l.jsx("li",{className:"address-item",children:"A85 PK30"}),l.jsx("li",{className:"address-item",children:"Tel: 01 - 8259289"}),l.jsx("li",{className:"address-item",children:"Email: info@primalformulas.ie"})]})]}),l.jsxs("div",{className:"social-links",children:[l.jsx($,{to:"#",target:"_blank",className:"facebook socials",children:l.jsx(P,{icon:Br,size:"2xl"})}),l.jsx($,{to:"#",target:"_blank",className:"twitter socials",children:l.jsx(P,{icon:Xr,size:"2xl"})}),l.jsx($,{to:"#",target:"_blank",className:"instagram socials",children:l.jsx(P,{icon:Wr,size:"2xl"})}),l.jsx($,{to:"#",target:"_blank",className:"youtube socials",children:l.jsx(P,{icon:Vr,size:"2xl"})})]}),l.jsx(qr,{})]})}const ri=({children:t})=>{const e=Bn().pathname==="/";return l.jsxs(l.Fragment,{children:[l.jsx(Ur,{}),l.jsx("div",{className:e?"":"container",children:t}),l.jsx(Kr,{})]})};export{P as F,ri as L,zr as N,b as P,ei as a,ni as b,Jr as c,ai as d,Mr as e,Tr as f,ti as g,Yr as h,Zr as i,bn as u};
