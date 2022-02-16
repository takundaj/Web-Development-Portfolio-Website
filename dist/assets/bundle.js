(()=>{"use strict";var n={738:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'.dropdown .trigger {\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.dropdown .trigger::after {\n  content: ">";\n  display: inline-block;\n  position: absolute;\n  right: 15px;\n  transform: rotate(90deg) scale(0.5, 1);\n  font-weight: bold;\n  transition: transform 0.3s;\n}\n\n.dropdown .trigger.active::after {\n  transform: rotate(-90deg) scale(0.5, 1);\n}\n\n.dropdown .content {\n  opacity: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.dropdown .content.active {\n  opacity: 1;\n  max-height: 100%;\n}\n',""]);const l=a},311:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".media {\n  margin: 2rem 0;\n  padding: 2rem;\n  border-radius: 10px;\n  background: #3f3f3f;\n  color: #fff;\n  position: relative;\n  box-shadow: 0 0 0.5rem black;\n}\n\n.media .paid-banner {\n  width: 8rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.media-img {\n  width: 10rem;\n}\n\n.media img {\n  width: 100%;\n}\n\n.media_text-content p {\n  margin-bottom: 1rem;\n}\n\n.media-skills-bar {\n  display: block;\n  margin-top: 2rem;\n  font-size: 3rem;\n}\n\n.media-skills-bar img {\n  width: 5rem;\n  height: 2.5rem;\n}\n\n.media-skills-bar i {\n  margin-right: 2rem;\n}\n\n.media-actions button {\n  margin-right: 1rem;\n  margin-bottom: 0;\n}\n",""]);const l=a},985:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"/* HEADER / NAVIGATION */\n\nheader {\n  justify-content: space-between;\n  background: transparent;\n}\n\nheader .container {\n  width: 90%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\nnav ul {\n  display: flex;\n}\n\n.inline-nav {\n  display: none;\n}\n\n.inline-nav ul li {\n  list-style: none;\n  margin: 0 2rem;\n}\n\n.nav-bar .menu-content {\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  max-height: 0;\n  overflow: hidden;\n}\n\n.nav-bar .menu-content nav ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.nav-bar .menu-content nav ul li {\n  list-style: none;\n  margin: 0 auto;\n  margin-bottom: 2rem;\n}\n\n.nav-bar .menu-content-collapsed {\n  opacity: 1;\n  max-height: 100%;\n  margin-top: 1rem;\n}\n\n.menu-trigger {\n  display: inline-block;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n.menu-active {\n  color: #ff6565;\n}\n\nnav button {\n  margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n  .inline-nav {\n    display: inline-block;\n  }\n\n  .inline-nav ul {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: center;\n  }\n\n  .menu-trigger {\n    display: none;\n    cursor: pointer;\n  }\n}\n",""]);const l=a},673:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".tabs > ul {\n  padding: 0;\n}\n\n.tabs .trigger {\n  list-style-type: none;\n  padding: 10px;\n  margin: 4px;\n  border-radius: 6px;\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n  border: 1px solid #fff;\n}\n\n.tabs .trigger.active {\n  background: #ff6565;\n  color: white;\n}\n\n.tabs .content {\n  padding: 20px 5px;\n  border-radius: 6px;\n  display: none;\n}\n\n.tabs .content.active {\n  display: block;\n}\n",""]);const l=a},935:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'.tooltip {\n  position: relative;\n  display: inline-block;\n  color: #ff6565;\n  cursor: help;\n  width: min-content;\n}\n\n.tip {\n  font-size: 1.4rem;\n  visibility: hidden;\n  width: 100px;\n  background-color: #ff6565;\n  color: #fff;\n  text-align: center;\n  border-radius: 10px;\n  padding: 5px 0;\n  position: absolute;\n  left: 50%;\n  bottom: 120%;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip img {\n  width: 5rem;\n  height: 2.5rem;\n  padding: 0;\n  margin: 0;\n}\n\n.tooltip .xd-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\n.about-me .tip {\n  margin-left: -50px;\n}\n\n.media .tip {\n  margin-left: -60px;\n}\n\n.tip.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n/*adds a little triangle at the bottom of the tooltip message */\n.tip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px;\n  border-style: solid;\n  border-color: transparent;\n  border-top-color: #ff6565;\n}\n',""]);const l=a},991:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".about-me .grid div p {\n  margin: 2rem 0;\n}\n\n.about-me_image {\n  overflow: hidden;\n}\n\n.about-me_image img {\n  max-width: 100%;\n  border-radius: 10px;\n  border: 2px solid white;\n}\n\n.skills-bar {\n  width: 70%;\n  margin: auto;\n  font-size: 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.skills-list li {\n  margin: 0 1.5rem;\n}\n\n@media screen and (min-width: 992px) {\n  .skills-bar {\n    margin: 1rem;\n  }\n}\n",""]);const l=a},996:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'.contact-section .grid {\n  margin: 2rem 0;\n}\n\n.contact-me {\n  padding: 2rem;\n}\n\n.contact-grid {\n  background: #464545;\n  border-radius: 10px;\n  padding: 0 2rem;\n  padding-top: 2vw;\n}\n\nfieldset {\n  text-align: left;\n  border: none;\n  margin-bottom: 1.5rem;\n}\n\nfieldset input[type="text"],\n#name,\ninput[type="email"] {\n  height: 3rem;\n}\n\nfieldset input[type="text"],\ninput[type="email"],\n#name,\ntextarea {\n  width: 100%;\n  margin-top: 1rem;\n  border-radius: 5px;\n  box-shadow: 0;\n  border: 0;\n  padding: 0 1rem;\n}\n\nfieldset textarea {\n  padding: 1rem;\n}\n\n.reviews {\n  border-radius: 10px;\n  padding: 2rem;\n}\n\n.review-item {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  grid-template-rows: fit-content fit-content;\n  margin-bottom: 3rem;\n  padding: 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0 0 0.25rem white;\n}\n\n.review-item:last-child {\n  margin: 0;\n}\n\n.review-client-logo {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  display: flex;\n  justify-content: start;\n}\n\n.review-client-logo div {\n  width: 6rem;\n  height: 6rem;\n  background-color: white;\n  border-radius: 50%;\n}\n\n.review-text h3 {\n  margin: 0;\n}\n\n.review-text p {\n  margin: 1rem 0;\n}\n\n.review-stars i {\n  color: #ff6565;\n}\n\n.contact-me {\n  text-align: center;\n}\n',""]);const l=a},638:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),l=t(667),s=t.n(l),c=new URL(t(530),t.b),d=a()(i()),m=s()(c);d.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Color palete */\n\n/* Typography */\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  background-image: url('+m+");\n  background-position: top;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nh1,\nh2,\nh3 {\n  margin-bottom: 2rem;\n}\n\np {\n  font-size: 1.6rem;\n}\n\n.logo h2 {\n  margin: 0;\n}\n\n.text-align-left {\n  text-align: center;\n}\n\n.hiding {\n  display: none !important;\n}\n\n@media screen and (min-width: 992px) {\n  .text-align-left {\n    text-align: left;\n  }\n}\n\n/* headings */\n\n.heading {\n  text-align: center;\n}\n\n/* links */\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: #ff6565;\n}\n\n/* Containers & Grids */\nsection {\n  /* border: 1px solid gray; */\n  color: white;\n}\n\nsection > .content {\n  width: 80%;\n  margin: auto;\n  text-align: center;\n  padding: 5vw 0;\n  /* border: 1px solid gray; */\n}\n\n.grid {\n  display: grid;\n}\n\n.col2row1 {\n  grid-template-columns: 1fr;\n  grid-template-rows: fit-content 1fr;\n  grid-gap: 2vw;\n  text-align: center;\n}\n\n.intro {\n  margin-bottom: 3vw;\n}\n\n@media screen and (min-width: 992px) {\n  section > .content {\n    width: 70%;\n  }\n\n  .col2row1 {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-column-gap: 2vw;\n    text-align: left;\n  }\n}\n\n/* buttons */\nbutton {\n  padding: 1rem 2rem;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  margin: 2rem 0;\n  box-shadow: 0 0 0.5rem grey;\n  font-size: 1.4rem;\n}\n\nbutton:hover {\n  background-color: #f34f29;\n  color: white;\n}\n",""]);const u=d},47:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".hero {\n  padding: 8vw 0;\n  /* background: rgb(219, 219, 219);\n  background: linear-gradient(\n    90deg,\n    rgb(161, 161, 161) 0%,\n    rgba(128, 128, 128, 1) 100%,\n    rgba(158, 169, 171, 1) 100%\n  ); */\n  color: #fff;\n}\n\n.hero h1 {\n  font-size: 5vw;\n}\n\n.hero_content {\n  height: fit-content;\n}\n\n.hero_content > p {\n  margin: 2vw auto;\n  width: 80%;\n}\n\n.hero_socials {\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-size: clamp(4rem, 3vw, 6rem);\n}\n\n.hero_socials i {\n  margin: 2.85rem 1rem;\n}\n\n.hero .explore-btn {\n  background: #ff6565;\n  color: white;\n  margin: 0 0.5rem;\n}\n\n@media screen and (min-width: 992px) {\n  .hero {\n    min-height: 100vh;\n  }\n\n  .hero_content {\n    height: 65vh;\n  }\n}\n",""]);const l=a},713:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".about-me {\n  background: #2e2e2e;\n  color: #fff;\n}\n\n.about-me .content {\n  margin: auto;\n}\n\n.about-me .content .grid {\n  margin-right: 0;\n  grid-template-rows: min-content;\n}\n\n@media screen and (min-width: 992px) {\n  .about-me .content .grid {\n    margin-right: 0;\n    grid-template-columns: 1.5fr 2fr;\n  }\n}\n\n.projects {\n  /* background: rgb(219, 219, 219);\n  background: linear-gradient(\n    90deg,\n    rgb(161, 161, 161) 0%,\n    rgba(128, 128, 128, 1) 100%,\n    rgba(158, 169, 171, 1) 100%\n  ); */\n  background: transparent;\n}\n\n.media_image {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.paid-banner {\n}\n\n@media screen and (min-width: 992px) {\n  .media_image {\n    min-width: 100%;\n    text-align: center;\n  }\n}\n\n.technologies {\n  margin: auto;\n}\n\n.technologies p {\n  display: inline;\n  margin: 1rem;\n}\n\n.tooltip .webpack {\n  width: 2.5rem;\n  color: #4a4a4a;\n}\n\n.tooltip .babel {\n  width: 5rem;\n  color: #4a4a4a;\n  margin: 0 1rem;\n}\n\n.tooltip .html {\n  color: #e44d26;\n}\n\n.tooltip .css {\n  color: #264de4;\n}\n\n.tooltip .js {\n  color: #f0db4f;\n}\n\n.tooltip .wordpress {\n  color: #21759b;\n}\n\n.tooltip .sass {\n  color: #c69;\n}\n\n.tooltip .git {\n  color: #f34f29;\n}\n\n.tooltip .mailchimp {\n  color: #6dc5dc;\n}\n\n.contact-section {\n  background: #2e2e2e;\n  color: #fff;\n}\n\n.google-maps p,\n.socials {\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.socials {\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-size: clamp(4rem, 3vw, 6rem);\n}\n\n.socials i {\n  margin: 0rem 1rem;\n}\n\n/* footer */\nfooter {\n  background: #1a1a1a;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2vw;\n}\n",""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],l=0;l<n.length;l++){var s=n[l],c=r.base?s[0]+r.base:s[0],d=o[c]||0,m="".concat(c," ").concat(d);o[c]=d+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=i(p,r);r.byIndex=l,e.splice(l,0,{identifier:m,updater:g,references:1})}a.push(m)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=t(o[a]);e[l].references--}for(var s=r(n,i),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},530:(n,e,t)=>{n.exports=t.p+"d6915ee2aee78b15aff4.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n+"../"})(),t.b=document.baseURI||self.location.href,(()=>{function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var e=function(){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.trigger=n.querySelector(".container .menu-trigger"),this.content=n.querySelector(".menu-content")}var t,r;return t=e,(r=[{key:"init",value:function(){}},{key:"collapse",value:function(){this.content.classList.toggle("menu-content-collapsed"),this.trigger.classList.toggle("menu-active")}},{key:"uncollapse",value:function(){this.content.classList.remove("menu-content-collapsed"),this.trigger.classList.remove("menu-active")}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var i=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.trigger=e.querySelector(".trigger"),this.content=e.querySelector(".content")}var e,t;return e=n,(t=[{key:"init",value:function(){var n=this;this.trigger.addEventListener("click",(function(e){n.trigger.classList.toggle("active"),n.content.classList.toggle("active")}))}}])&&r(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var a=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.tabs=e.querySelectorAll(".trigger")}var e,t;return e=n,(t=[{key:"init",value:function(){var n=this;this.tabs.forEach((function(e){e.addEventListener("click",(function(e){n.toggleTabs(e),n.toggleContent(e)}))}))}},{key:"toggleTabs",value:function(n){this.tabs.forEach((function(e){e.classList.remove("active"),n.target.classList.add("active")}))}},{key:"toggleContent",value:function(n){this.container.querySelectorAll(".content").forEach((function(n){n.classList.remove("active")}));var e=n.target.getAttribute("data-target");this.container.querySelector("#".concat(e)).classList.add("active")}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var s=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.messaage=e.getAttribute("data-message")}var e,t;return e=n,(t=[{key:"init",value:function(){var n=document.createElement("div");n.classList.add("tip"),n.textContent=this.messaage,this.element.appendChild(n),this.element.addEventListener("mouseenter",(function(){n.classList.add("active")})),this.element.addEventListener("mouseleave",(function(){n.classList.remove("active")}))}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}(),c=t(379),d=t.n(c),m=t(795),u=t.n(m),p=t(569),g=t.n(p),f=t(565),h=t.n(f),b=t(216),v=t.n(b),y=t(589),w=t.n(y),x=t(638),k={};k.styleTagTransform=w(),k.setAttributes=h(),k.insert=g().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=v(),d()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var Z=t(47),S={};S.styleTagTransform=w(),S.setAttributes=h(),S.insert=g().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=v(),d()(Z.Z,S),Z.Z&&Z.Z.locals&&Z.Z.locals;var T=t(991),E={};E.styleTagTransform=w(),E.setAttributes=h(),E.insert=g().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=v(),d()(T.Z,E),T.Z&&T.Z.locals&&T.Z.locals;var A=t(996),j={};j.styleTagTransform=w(),j.setAttributes=h(),j.insert=g().bind(null,"head"),j.domAPI=u(),j.insertStyleElement=v(),d()(A.Z,j),A.Z&&A.Z.locals&&A.Z.locals;var L=t(713),P={};P.styleTagTransform=w(),P.setAttributes=h(),P.insert=g().bind(null,"head"),P.domAPI=u(),P.insertStyleElement=v(),d()(L.Z,P),L.Z&&L.Z.locals&&L.Z.locals;var C=t(985),I={};I.styleTagTransform=w(),I.setAttributes=h(),I.insert=g().bind(null,"head"),I.domAPI=u(),I.insertStyleElement=v(),d()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals;var O=t(738),q={};q.styleTagTransform=w(),q.setAttributes=h(),q.insert=g().bind(null,"head"),q.domAPI=u(),q.insertStyleElement=v(),d()(O.Z,q),O.Z&&O.Z.locals&&O.Z.locals;var z=t(673),_={};_.styleTagTransform=w(),_.setAttributes=h(),_.insert=g().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=v(),d()(z.Z,_),z.Z&&z.Z.locals&&z.Z.locals;var M=t(935),N={};N.styleTagTransform=w(),N.setAttributes=h(),N.insert=g().bind(null,"head"),N.domAPI=u(),N.insertStyleElement=v(),d()(M.Z,N),M.Z&&M.Z.locals&&M.Z.locals;var R=t(311),U={};U.styleTagTransform=w(),U.setAttributes=h(),U.insert=g().bind(null,"head"),U.domAPI=u(),U.insertStyleElement=v(),d()(R.Z,U),R.Z&&R.Z.locals&&R.Z.locals,document.querySelector(".load-page").style.display="none";var F=new e(document.querySelector(".nav-bar"));document.querySelector(".nav-bar .container .menu-trigger").addEventListener("click",(function(n){F.collapse()})),window.addEventListener("resize",(function(n){window.innerWidth>768&&F.uncollapse()})),document.querySelectorAll(".dropdown").forEach((function(n){new i(n).init()})),new a(document.querySelector(".tabs")).init(),document.querySelectorAll(".tooltip").forEach((function(n){new s(n).init()}));var H=document.querySelector(".contact-me"),$=document.querySelector(".contact-form-response");H.addEventListener("submit",(function(n){n.preventDefault(),fetch("https://formsubmit.co/ajax/tjnyamatore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:H.name.value.trim(),email:H.email.value.trim(),message:H.message.value.trim()})}).then((function(n){n.json(),n.ok?($.style.display="block",$.style.color="white",$.textContent="Thank you, your message has been sent!"):($.style.display="block",$.style.color="red",$.textContent="Sorry, there was a problem. please use our email to the left.")})).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}))}))})()})();