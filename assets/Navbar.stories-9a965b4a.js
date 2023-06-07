import{j as P}from"./jsx-runtime-6eef64cc.js";import{R as U,r as L}from"./index-c013ead5.js";import{P as b}from"./index-2baff29e.js";import"./_commonjsHelpers-725317a4.js";function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(a){_(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Nt(t){return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function En(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ke(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function In(t,e,n){return e&&ke(t.prototype,e),n&&ke(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oe(t,e){return Mn(t)||zn(t,e)||Ke(t,e)||Rn()}function mt(t){return Tn(t)||Ln(t)||Ke(t)||jn()}function Tn(t){if(Array.isArray(t))return Ht(t)}function Mn(t){if(Array.isArray(t))return t}function Ln(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ke(t,e){if(t){if(typeof t=="string")return Ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ht(t,e)}}function Ht(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function jn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xe=function(){},se={},Qe={},Je=null,Ze={mark:xe,measure:xe};try{typeof window<"u"&&(se=window),typeof document<"u"&&(Qe=document),typeof MutationObserver<"u"&&(Je=MutationObserver),typeof performance<"u"&&(Ze=performance)}catch{}var Fn=se.navigator||{},we=Fn.userAgent,Ae=we===void 0?"":we,W=se,h=Qe,_e=Je,pt=Ze;W.document;var F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",tn=~Ae.indexOf("MSIE")||~Ae.indexOf("Trident/"),gt,ht,yt,kt,xt,z="___FONT_AWESOME___",Vt=16,en="fa",nn="svg-inline--fa",K="data-fa-i2svg",Bt="data-fa-pseudo-element",Dn="data-fa-pseudo-element-pending",fe="data-prefix",le="data-icon",Oe="fontawesome-i2svg",$n="async",Yn=["HTML","HEAD","STYLE","SCRIPT"],an=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",ce=[g,y];function dt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[g]}})}var st=dt((gt={},_(gt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_(gt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gt)),ft=dt((ht={},_(ht,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(ht,y,{solid:"fass",regular:"fasr",light:"fasl"}),ht)),lt=dt((yt={},_(yt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(yt,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yt)),Un=dt((kt={},_(kt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(kt,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kt)),Wn=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,rn="fa-layers-text",Hn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vn=dt((xt={},_(xt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(xt,y,{900:"fass",400:"fasr",300:"fasl"}),xt)),on=[1,2,3,4,5,6,7,8,9,10],Bn=on.concat([11,12,13,14,15,16,17,18,19,20]),qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(ft[g]).map(ct.add.bind(ct));Object.keys(ft[y]).map(ct.add.bind(ct));var Xn=[].concat(ce,mt(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(on.map(function(t){return"".concat(t,"x")})).concat(Bn.map(function(t){return"w-".concat(t)})),it=W.FontAwesomeConfig||{};function Gn(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var Qn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qn.forEach(function(t){var e=oe(t,2),n=e[0],a=e[1],r=Kn(Gn(n));r!=null&&(it[a]=r)})}var sn={styleDefault:"solid",familyDefault:"classic",cssPrefix:en,replacementClass:nn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var nt=m(m({},sn),it);nt.autoReplaceSvg||(nt.observeMutations=!1);var d={};Object.keys(sn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){nt[t]=n,ot.forEach(function(a){return a(d)})},get:function(){return nt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){nt.cssPrefix=e,ot.forEach(function(n){return n(d)})},get:function(){return nt.cssPrefix}});W.FontAwesomeConfig=d;var ot=[];function Jn(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var $=Vt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zn(t){if(!(!t||!F)){var e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=h.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}}var ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var t=12,e="";t-- >0;)e+=ta[Math.random()*62|0];return e}function at(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ue(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function fn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ea(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(fn(t[n]),'" ')},"").trim()}function Mt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function me(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function na(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function aa(t){var e=t.transform,n=t.width,a=n===void 0?Vt:n,r=t.height,i=r===void 0?Vt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&tn?f+="translate(".concat(e.x/$-a/2,"em, ").concat(e.y/$-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):f+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),f+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var ra=`:root, :host {
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
}`;function ln(){var t=en,e=nn,n=d.cssPrefix,a=d.replacementClass,r=ra;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Se=!1;function Ft(){d.autoAddCss&&!Se&&(Zn(ln()),Se=!0)}var ia={mixout:function(){return{dom:{css:ln,insertCss:Ft}}},hooks:function(){return{beforeDOMElementCreation:function(){Ft()},beforeI2svg:function(){Ft()}}}},j=W||{};j[z]||(j[z]={});j[z].styles||(j[z].styles={});j[z].hooks||(j[z].hooks={});j[z].shims||(j[z].shims=[]);var T=j[z],cn=[],oa=function t(){h.removeEventListener("DOMContentLoaded",t),Ct=1,cn.map(function(e){return e()})},Ct=!1;F&&(Ct=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Ct||h.addEventListener("DOMContentLoaded",oa));function sa(t){F&&(Ct?setTimeout(t,0):cn.push(t))}function vt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?fn(t):"<".concat(e," ").concat(ea(a),">").concat(i.map(vt).join(""),"</").concat(e,">")}function Pe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var fa=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Dt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?fa(n,r):n,f,c,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,e[c],c,e);return l};function la(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function qt(t){var e=la(t);return e.length===1?e[0].toString(16):null}function ca(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ne(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Xt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ne(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,Ne(e)):T.styles[t]=m(m({},T.styles[t]||{}),i),t==="fas"&&Xt("fa",e)}var wt,At,_t,J=T.styles,ua=T.shims,ma=(wt={},_(wt,g,Object.values(lt[g])),_(wt,y,Object.values(lt[y])),wt),de=null,un={},mn={},dn={},vn={},bn={},da=(At={},_(At,g,Object.keys(st[g])),_(At,y,Object.keys(st[y])),At);function va(t){return~Xn.indexOf(t)}function ba(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!va(r)?r:null}var pn=function(){var e=function(i){return Dt(J,function(o,s,f){return o[f]=Dt(s,i,{}),o},{})};un=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),mn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),bn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in J||d.autoFetchSvg,a=Dt(ua,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});dn=a.names,vn=a.unicodes,de=Lt(d.styleDefault,{family:d.familyDefault})};Jn(function(t){de=Lt(t.styleDefault,{family:d.familyDefault})});pn();function ve(t,e){return(un[t]||{})[e]}function pa(t,e){return(mn[t]||{})[e]}function G(t,e){return(bn[t]||{})[e]}function gn(t){return dn[t]||{prefix:null,iconName:null}}function ga(t){var e=vn[t],n=ve("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return de}var be=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?g:n,r=st[a][t],i=ft[a][t]||ft[a][r],o=t in T.styles?t:null;return i||o||null}var Ce=(_t={},_(_t,g,Object.keys(lt[g])),_(_t,y,Object.keys(lt[y])),_t);function zt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},_(e,g,"".concat(d.cssPrefix,"-").concat(g)),_(e,y,"".concat(d.cssPrefix,"-").concat(y)),e),o=null,s=g;(t.includes(i[g])||t.some(function(c){return Ce[g].includes(c)}))&&(s=g),(t.includes(i[y])||t.some(function(c){return Ce[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var u=ba(d.cssPrefix,l);if(J[l]?(l=ma[s].includes(l)?Un[s][l]:l,o=l,c.prefix=l):da[s].indexOf(l)>-1?(o=l,c.prefix=Lt(l,{family:s})):u?c.iconName=u:l!==d.replacementClass&&l!==i[g]&&l!==i[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=o==="fa"?gn(c.iconName):{},p=G(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},be());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(J.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=G(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var ha=function(){function t(){En(this,t),this.definitions={}}return In(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=lt[g][s];f&&Xt(f,o[s]),pn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][f]=c}),n}}]),t}(),Ee=[],Z={},et={},ya=Object.keys(et);function ka(t,e){var n=e.mixoutsTo;return Ee=t,Z={},Object.keys(et).forEach(function(a){ya.indexOf(a)===-1&&delete et[a]}),Ee.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Nt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(et)}),n}function Gt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,n)})}function R(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||H();if(e)return e=G(n,e)||e,Pe(hn.definitions,n,e)||Pe(T.styles,n,e)}var hn=new ha,xa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Q("noAuto")},wa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(Q("beforeI2svg",e),R("pseudoElements2svg",e),R("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,sa(function(){_a({autoReplaceSvgRoot:n}),Q("watch",e)})}},Aa={icon:function(e){if(e===null)return null;if(Nt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Lt(e[0]);return{prefix:a,iconName:G(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Wn))){var r=zt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=H();return{prefix:i,iconName:G(i,e)||e}}}},I={noAuto:xa,config:d,dom:wa,parse:Aa,library:hn,findIconDefinition:Kt,toHtml:vt},_a=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?h:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function jt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Oa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(me(o)&&n.found&&!a.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=Mt(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Sa(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function pe(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,u=t.extra,v=t.watchable,p=v===void 0?!1:v,w=a.found?a:n,S=w.width,k=w.height,C=r==="fak",x=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),A={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},E=C&&!~u.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};p&&(A.attributes[K]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||ut())},children:[f]}),delete A.attributes.title);var O=m(m({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},E),u.styles)}),B=a.found&&n.found?R("generateAbstractMask",O)||{children:[],attributes:{}}:R("generateAbstractIcon",O)||{children:[],attributes:{}},q=B.children,Rt=B.attributes;return O.children=q,O.attributes=Rt,s?Sa(O):Oa(O)}function Ie(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[K]="");var l=m({},o.styles);me(r)&&(l.transform=aa({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var u=Mt(l);u.length>0&&(c.style=u);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Pa(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Mt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $t=T.styles;function Qt(t){var e=t[0],n=t[1],a=t.slice(4),r=oe(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Na={found:!1,width:512,height:512};function Ca(t,e){!an&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=H()),new Promise(function(a,r){if(R("missingIconAbstract"),n==="fa"){var i=gn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&$t[e]&&$t[e][t]){var o=$t[e][t];return a(Qt(o))}Ca(t,e),a(m(m({},Na),{},{icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var Te=function(){},Zt=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Te,measure:Te},rt='FA "6.4.0"',Ea=function(e){return Zt.mark("".concat(rt," ").concat(e," begins")),function(){return yn(e)}},yn=function(e){Zt.mark("".concat(rt," ").concat(e," ends")),Zt.measure("".concat(rt," ").concat(e),"".concat(rt," ").concat(e," begins"),"".concat(rt," ").concat(e," ends"))},ge={begin:Ea,end:yn},St=function(){};function Me(t){var e=t.getAttribute?t.getAttribute(K):null;return typeof e=="string"}function Ia(t){var e=t.getAttribute?t.getAttribute(fe):null,n=t.getAttribute?t.getAttribute(le):null;return e&&n}function Ta(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ma(){if(d.autoReplaceSvg===!0)return Pt.replace;var t=Pt[d.autoReplaceSvg];return t||Pt.replace}function La(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function za(t){return h.createElement(t)}function kn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?La:za:n;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(kn(o,{ceFn:a}))}),r}function ja(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(kn(r),n)}),n.getAttribute(K)===null&&d.keepOriginalSource){var a=h.createComment(ja(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ue(n).indexOf(d.replacementClass))return Pt.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);n.setAttribute(K,""),n.innerHTML=o}};function Le(t){t()}function xn(t,e){var n=typeof e=="function"?e:St;if(t.length===0)n();else{var a=Le;d.mutateApproach===$n&&(a=W.requestAnimationFrame||Le),a(function(){var r=Ma(),i=ge.begin("mutate");t.map(r),i(),n()})}}var he=!1;function wn(){he=!0}function te(){he=!1}var Et=null;function ze(t){if(_e&&d.observeMutations){var e=t.treeCallback,n=e===void 0?St:e,a=t.nodeCallback,r=a===void 0?St:a,i=t.pseudoElementsCallback,o=i===void 0?St:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Et=new _e(function(c){if(!he){var l=H();at(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Me(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Me(u.target)&&~qn.indexOf(u.attributeName))if(u.attributeName==="class"&&Ia(u.target)){var v=zt(ue(u.target)),p=v.prefix,w=v.iconName;u.target.setAttribute(fe,p||l),w&&u.target.setAttribute(le,w)}else Ta(u.target)&&r(u.target)})}}),F&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ra(){Et&&Et.disconnect()}function Fa(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Da(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=zt(ue(t));return r.prefix||(r.prefix=H()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=pa(r.prefix,t.innerText)||ve(r.prefix,qt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function $a(t){var e=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ut()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ya(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function je(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Da(t),a=n.iconName,r=n.prefix,i=n.rest,o=$a(t),s=Gt("parseNodeAttributes",{},t),f=e.styleParser?Fa(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ua=T.styles;function An(t){var e=d.autoReplaceSvg==="nest"?je(t,{styleParser:!1}):je(t);return~e.extra.classes.indexOf(rn)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}var V=new Set;ce.map(function(t){V.add("fa-".concat(t))});Object.keys(st[g]).map(V.add.bind(V));Object.keys(st[y]).map(V.add.bind(V));V=mt(V);function Re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var n=h.documentElement.classList,a=function(u){return n.add("".concat(Oe,"-").concat(u))},r=function(u){return n.remove("".concat(Oe,"-").concat(u))},i=d.autoFetchSvg?V:ce.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ua));i.includes("fa")||i.push("fa");var o=[".".concat(rn,":not([").concat(K,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ge.begin("onTree"),c=s.reduce(function(l,u){try{var v=An(u);v&&l.push(v)}catch(p){an||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(v){xn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(v){f(),u(v)})})}function Wa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;An(t).then(function(n){n&&xn([n],e)})}function Ha(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Kt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(a,m(m({},n),{},{mask:r}))}}var Va=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,u=n.title,v=u===void 0?null:u,p=n.titleId,w=p===void 0?null:p,S=n.classes,k=S===void 0?[]:S,C=n.attributes,x=C===void 0?{}:C,A=n.styles,E=A===void 0?{}:A;if(e){var O=e.prefix,B=e.iconName,q=e.icon;return jt(m({type:"icon"},e),function(){return Q("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?x["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(w||ut()):(x["aria-hidden"]="true",x.focusable="false")),pe({icons:{main:Qt(q),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:B,transform:m(m({},M),r),symbol:o,title:v,maskId:l,titleId:w,extra:{attributes:x,styles:E,classes:k}})})}},Ba={mixout:function(){return{icon:Ha(Va)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Re,n.nodeCallback=Wa,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?h:a,i=n.callback,o=i===void 0?function(){}:i;return Re(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,u=a.maskId,v=a.extra;return new Promise(function(p,w){Promise.all([Jt(r,s),l.iconName?Jt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var k=oe(S,2),C=k[0],x=k[1];p([n,pe({icons:{main:C,mask:x},prefix:s,iconName:r,transform:f,symbol:c,maskId:u,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Mt(s);f.length>0&&(r.style=f);var c;return me(o)&&(c=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},qa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return jt({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Xa={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,u=l===void 0?{}:l;return jt({type:"counter",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Pa({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Ga={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,u=l===void 0?{}:l,v=a.styles,p=v===void 0?{}:v;return jt({type:"text",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Ie({content:n,transform:m(m({},M),i),title:s,extra:{attributes:u,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(mt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(tn){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ie({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ka=new RegExp('"',"ug"),Fe=[1105920,1112319];function Qa(t){var e=t.replace(Ka,""),n=ca(e,0),a=n>=Fe[0]&&n<=Fe[1],r=e.length===2?e[0]===e[1]:!1;return{value:qt(r?e[0]:e),isSecondary:a||r}}function De(t,e){var n="".concat(Dn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=at(t.children),o=i.filter(function(q){return q.getAttribute(Bt)===e})[0],s=W.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Hn),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ft[v][f[2].toLowerCase()]:Vn[v][c],w=Qa(u),S=w.value,k=w.isSecondary,C=f[0].startsWith("FontAwesome"),x=ve(p,S),A=x;if(C){var E=ga(S);E.iconName&&E.prefix&&(x=E.iconName,p=E.prefix)}if(x&&!k&&(!o||o.getAttribute(fe)!==p||o.getAttribute(le)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var O=Ya(),B=O.extra;B.attributes[Bt]=e,Jt(x,p).then(function(q){var Rt=pe(m(m({},O),{},{icons:{main:q,mask:be()},prefix:p,iconName:A,extra:B,watchable:!0})),D=h.createElement("svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=Rt.map(function(Cn){return vt(Cn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ja(t){return Promise.all([De(t,"::before"),De(t,"::after")])}function Za(t){return t.parentNode!==document.head&&!~Yn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $e(t){if(F)return new Promise(function(e,n){var a=at(t.querySelectorAll("*")).filter(Za).map(Ja),r=ge.begin("searchPseudoElements");wn(),Promise.all(a).then(function(){r(),te(),e()}).catch(function(){r(),te(),n()})})}var tr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$e,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?h:a;d.searchPseudoElements&&$e(r)}}},Ye=!1,er={mixout:function(){return{dom:{unwatch:function(){wn(),Ye=!0}}}},hooks:function(){return{bootstrap:function(){ze(Gt("mutationObserverCallbacks",{}))},noAuto:function(){Ra()},watch:function(n){var a=n.observeMutationsRoot;Ye?te():ze(Gt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ue=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},nr={mixout:function(){return{parse:{transform:function(n){return Ue(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ue(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},Yt={x:0,y:0,width:"100%",height:"100%"};function We(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ar(t){return t.tag==="g"?t.children:[t]}var rr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?zt(r.split(" ").map(function(o){return o.trim()})):be();return i.prefix||(i.prefix=H()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,u=o.width,v=o.icon,p=na({transform:f,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:m(m({},Yt),{},{fill:"white"})},S=l.children?{children:l.children.map(We)}:{},k={tag:"g",attributes:m({},p.inner),children:[We(m({tag:l.tag,attributes:m(m({},l.attributes),p.path)},S))]},C={tag:"g",attributes:m({},p.outer),children:[k]},x="mask-".concat(s||ut()),A="clip-".concat(s||ut()),E={tag:"mask",attributes:m(m({},Yt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,C]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:ar(v)},E]};return a.push(O,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},Yt)}),{children:a,attributes:r}}}},ir={provides:function(e){var n=!1;W.matchMedia&&(n=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},or={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},sr=[ia,Ba,qa,Xa,Ga,tr,er,nr,rr,ir,or];ka(sr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var ee=I.parse;I.findIconDefinition;I.toHtml;var fr=I.icon;I.layer;I.text;I.counter;function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){tt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function It(t){return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function cr(t,e){if(t==null)return{};var n=lr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ne(t){return ur(t)||mr(t)||dr(t)||vr()}function ur(t){if(Array.isArray(t))return ae(t)}function mr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dr(t,e){if(t){if(typeof t=="string")return ae(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(t,e)}}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,u=t.pulse,v=t.fixedWidth,p=t.inverse,w=t.border,S=t.listItem,k=t.flip,C=t.size,x=t.rotation,A=t.pull,E=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":v,"fa-inverse":p,"fa-border":w,"fa-li":S,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},tt(e,"fa-".concat(C),typeof C<"u"&&C!==null),tt(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),tt(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),tt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(O){return E[O]?O:null}).filter(function(O){return O})}function pr(t){return t=t-0,t===t}function _n(t){return pr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var gr=["style"];function hr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function yr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=_n(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[hr(r)]=i:e[r]=i,e},{})}function On(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return On(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var l=e.attributes[c];switch(c){case"class":f.attrs.className=l,delete e.attributes.class;break;case"style":f.attrs.style=yr(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[_n(c)]=l}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=cr(n,gr);return r.attrs.style=Y(Y({},r.attrs.style),o),t.apply(void 0,[e.tag,Y(Y({},r.attrs),s)].concat(ne(a)))}var Sn=!1;try{Sn=!0}catch{}function kr(){if(!Sn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ve(t){if(t&&It(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ee.icon)return ee.icon(t);if(t===null)return null;if(t&&It(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ut(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?tt({},t,e):{}}var bt=U.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=Ve(n),l=Ut("classes",[].concat(ne(br(t)),ne(i.split(" ")))),u=Ut("transform",typeof t.transform=="string"?ee.transform(t.transform):t.transform),v=Ut("mask",Ve(a)),p=fr(c,Y(Y(Y(Y({},l),u),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return kr("Could not find icon",c),null;var w=p.abstract,S={ref:e};return Object.keys(t).forEach(function(k){bt.defaultProps.hasOwnProperty(k)||(S[k]=t[k])}),xr(w[0],S)});bt.displayName="FontAwesomeIcon";bt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};bt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var xr=On.bind(null,U.createElement);const Pn=U.createContext(void 0);function wr(){const t=window.localStorage.getItem("color-mode"),e=typeof t=="string",n=window.matchMedia("(prefers-color-scheme: dark)"),a=typeof n.matches=="boolean";return e?t:a&&n.matches?"dark":"light"}const re=({children:t})=>{const[e,n]=U.useState(wr()),a=r=>{n(r),window.localStorage.setItem("color-mode",r)};return U.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),i=o=>{o.matches?n("dark"):n("light")};return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),P.jsx(Pn.Provider,{value:{colorMode:e,setColorMode:a},children:t})};try{re.displayName="ThemeProvider",re.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch{}function Ar({items:t,activeId:e}){return{"--navbar-items":String(t),"--navbar-item-active":String(e??"")}}const _r="#eee",Or="#111",Sr="#fff",Pr="#000",Nr="#000",Cr="#fff",Er="#4c21ea",Wt={bodyLightBackground:_r,bodyDarkBackground:Or,lightBackground:Sr,lightText:Pr,darkBackground:Nr,darkText:Cr,primary:Er},Ir="_navbar_126cz_1",Tr="_active_126cz_74",Mr="_jump_126cz_1",Lr="_fadeOut_126cz_1",N={navbar:Ir,"navbar-list":"_navbar-list_126cz_5","navbar-space":"_navbar-space_126cz_15","navbar-space-spot":"_navbar-space-spot_126cz_20","navbar-space-dot":"_navbar-space-dot_126cz_29","navbar-item":"_navbar-item_126cz_58","navbar-item-btn":"_navbar-item-btn_126cz_66","navbar-item-icon":"_navbar-item-icon_126cz_71",active:Tr,jump:Mr,"navbar-item-icon-container":"_navbar-item-icon-container_126cz_82","navbar-item-icon-overlay":"_navbar-item-icon-overlay_126cz_87","navbar-item-title":"_navbar-item-title_126cz_108",fadeOut:Lr,"navbar-item-title-text":"_navbar-item-title-text_126cz_121"},Nn=U.createContext({});function ie({icon:t,title:e,onSelect:n,id:a,iconStyles:r}){const i=L.useContext(Pn),{activeId:o,setActiveId:s,registerItem:f,unRegisterItem:c}=L.useContext(Nn),l=L.useRef(null),u=()=>{a!==o&&(s==null||s(a),n({title:e,id:a}))};L.useEffect(()=>(f==null||f(l),()=>c==null?void 0:c(l)),[s,a,f,c]);const v=a===o;return P.jsx("li",{className:N["navbar-item"],ref:l,children:P.jsxs("button",{onClick:u,className:N["navbar-item-btn"],children:[P.jsxs("span",{className:N["navbar-item-icon-container"],children:[P.jsx(bt,{"data-testid":`${t.iconName}-icon`,className:`${N["navbar-item-icon"]} ${v?N.active:""}`,style:r,icon:t,color:v?(r==null?void 0:r.color)??Wt.primary:(i==null?void 0:i.colorMode)==="dark"?Wt.lightBackground:Wt.darkBackground}),P.jsx("div",{className:`${N["navbar-item-icon-overlay"]} ${v?N.active:""}`})]}),P.jsx("div",{className:`${N["navbar-item-title"]} ${v?N.active:""}`,children:P.jsx("span",{className:N["navbar-item-title-text"],children:e})})]})})}function Tt({label:t,children:e,defaultActive:n}){const[a,r]=L.useState(),[i,o]=L.useState([]),s=Ar({items:i.length,activeId:a}),f=L.useCallback(l=>{o(u=>u.includes(l)?u:[...u,l])},[]),c=L.useCallback(l=>{o(u=>(r(v=>u.length-1===v?0:v),u.filter(v=>v!==l)))},[]);return L.useEffect(()=>{n!==void 0&&a===void 0&&r(n)},[a,i,n]),P.jsx(re,{children:P.jsx(Nn.Provider,{value:{items:i,activeId:a,setActiveId:r,registerItem:f,unRegisterItem:c},children:P.jsxs("nav",{"aria-label":t,className:N.navbar,children:[P.jsx("ul",{role:"menubar",className:N["navbar-list"],style:s,children:U.Children.map(e,(l,u)=>U.cloneElement(l,{id:u}))}),P.jsx("div",{className:N["navbar-space"],style:s,children:P.jsx("div",{className:N["navbar-space-spot"],children:a!==void 0&&P.jsx("div",{"data-testid":"navbar-space-dot",className:N["navbar-space-dot"]})})})]})})})}try{ie.displayName="NavbarItem",ie.__docgenInfo={description:"",displayName:"NavbarItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconDefinition"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"({ title, id }: { title: string; id?: number | undefined; }) => void"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},iconStyles:{defaultValue:null,description:"",name:"iconStyles",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{Tt.displayName="Navbar",Tt.__docgenInfo={description:"",displayName:"Navbar",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},defaultActive:{defaultValue:null,description:"",name:"defaultActive",required:!1,type:{name:"number"}}}}}catch{}try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},defaultActive:{defaultValue:null,description:"",name:"defaultActive",required:!1,type:{name:"number"}}}}}catch{}try{NavbarItem.displayName="NavbarItem",NavbarItem.__docgenInfo={description:"",displayName:"NavbarItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconDefinition"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"({ title, id }: { title: string; id?: number | undefined; }) => void"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},iconStyles:{defaultValue:null,description:"",name:"iconStyles",required:!1,type:{name:"CSSProperties"}}}}}catch{}var zr={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},jr={prefix:"fas",iconName:"futbol",icon:[512,512,[9917,"futbol-ball","soccer-ball"],"f1e3","M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"]},Rr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Fr={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Be=[{icon:Fr,title:"Time"},{icon:jr,title:"Comments"},{icon:zr,title:"Compass"},{icon:Rr,title:"User"}],Wr={title:"Navbar",component:Tt,args:{children:Be.map((t,e)=>P.jsx(ie,{icon:t.icon,title:t.title,onSelect:({title:n,id:a})=>{console.log(`Item clicked title ${n} id ${a}`)}},`${t.title}-${e}`))},argTypes:{defaultActive:{defaultValue:3,options:[...Array(Be.length).keys()],control:{type:"select"}}}},Ot={render:({label:t,defaultActive:e,children:n,...a})=>P.jsx(Tt,{label:t,defaultActive:e,...a,children:n})};var qe,Xe,Ge;Ot.parameters={...Ot.parameters,docs:{...(qe=Ot.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: ({
    label,
    defaultActive,
    children,
    ...args
  }) => <Navbar label={label} defaultActive={defaultActive} {...args}>
      {children}
    </Navbar>
}`,...(Ge=(Xe=Ot.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source}}};const Hr=["Primary"];export{Ot as Primary,Hr as __namedExportsOrder,Wr as default};
//# sourceMappingURL=Navbar.stories-9a965b4a.js.map
