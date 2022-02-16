function _typeof(n){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof(n)}!function(){"use strict";var n={738:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'.dropdown .trigger {\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.dropdown .trigger::after {\n  content: ">";\n  display: inline-block;\n  position: absolute;\n  right: 15px;\n  transform: rotate(90deg) scale(0.5, 1);\n  font-weight: bold;\n  transition: transform 0.3s;\n}\n\n.dropdown .trigger.active::after {\n  transform: rotate(-90deg) scale(0.5, 1);\n}\n\n.dropdown .content {\n  opacity: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.dropdown .content.active {\n  opacity: 1;\n  max-height: 100%;\n}\n',""]);var l=a},311:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".media {\n  margin: 2rem 0;\n  padding: 2rem;\n  border-radius: 10px;\n  background: #4a4a4a;\n  color: #fff;\n  position: relative;\n}\n\n.media .paid-banner {\n  width: 8rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.media-img {\n  width: 10rem;\n}\n\n.media img {\n  width: 100%;\n}\n\n.media_text-content p {\n  margin-bottom: 1rem;\n}\n\n.media-skills-bar {\n  display: block;\n  margin-top: 2rem;\n  font-size: 3rem;\n}\n\n.media-skills-bar img {\n  width: 5rem;\n  height: 2.5rem;\n}\n\n.media-skills-bar i {\n  margin-right: 2rem;\n}\n\n.media-actions button {\n  margin-right: 1rem;\n  margin-bottom: 0;\n}\n",""]);var l=a},985:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"/* HEADER / NAVIGATION */\n\nheader {\n  justify-content: space-between;\n  background: transparent;\n}\n\nheader .container {\n  width: 90%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\nnav ul {\n  display: flex;\n}\n\n.inline-nav {\n  display: none;\n}\n\n.inline-nav ul li {\n  list-style: none;\n  margin: 0 2rem;\n}\n\n.nav-bar .menu-content {\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  max-height: 0;\n  overflow: hidden;\n}\n\n.nav-bar .menu-content nav ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.nav-bar .menu-content nav ul li {\n  list-style: none;\n  margin: 0 auto;\n  margin-bottom: 2rem;\n}\n\n.nav-bar .menu-content-collapsed {\n  opacity: 1;\n  max-height: 100%;\n  margin-top: 1rem;\n}\n\n.menu-trigger {\n  display: inline-block;\n  cursor: pointer;\n  font-size: 2rem;\n}\n\n.menu-active {\n  color: #ff6565;\n}\n\nnav button {\n  margin: 0;\n}\n\n@media screen and (min-width: 768px) {\n  .inline-nav {\n    display: inline-block;\n  }\n\n  .inline-nav ul {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: center;\n  }\n\n  .menu-trigger {\n    display: none;\n    cursor: pointer;\n  }\n}\n",""]);var l=a},673:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".tabs > ul {\n  padding: 0;\n}\n\n.tabs .trigger {\n  list-style-type: none;\n  padding: 10px;\n  margin: 4px;\n  border-radius: 6px;\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n  border: 1px solid #fff;\n}\n\n.tabs .trigger.active {\n  background: #ff6565;\n  color: white;\n}\n\n.tabs .content {\n  padding: 20px 5px;\n  border-radius: 6px;\n  display: none;\n}\n\n.tabs .content.active {\n  display: block;\n}\n",""]);var l=a},935:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'.tooltip {\n  position: relative;\n  display: inline-block;\n  color: #ff6565;\n  cursor: help;\n  width: min-content;\n}\n\n.tip {\n  font-size: 1.4rem;\n  visibility: hidden;\n  width: 100px;\n  background-color: #ff6565;\n  color: #fff;\n  text-align: center;\n  border-radius: 10px;\n  padding: 5px 0;\n  position: absolute;\n  left: 50%;\n  bottom: 120%;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip img {\n  width: 5rem;\n  height: 2.5rem;\n  padding: 0;\n  margin: 0;\n}\n\n.tooltip .xd-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\n.about-me .tip {\n  margin-left: -50px;\n}\n\n.media .tip {\n  margin-left: -60px;\n}\n\n.tip.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n/*adds a little triangle at the bottom of the tooltip message */\n.tip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px;\n  border-style: solid;\n  border-color: transparent;\n  border-top-color: #ff6565;\n}\n',""]);var l=a},991:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".about-me .grid div p {\n  margin: 2rem 0;\n}\n\n.about-me_image {\n  overflow: hidden;\n}\n\n.about-me_image img {\n  max-width: 100%;\n  border-radius: 10px;\n  border: 2px solid white;\n}\n\n.skills-bar {\n  width: 70%;\n  margin: auto;\n  font-size: 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.skills-list li {\n  margin: 0 1.5rem;\n}\n\n@media screen and (min-width: 992px) {\n  .skills-bar {\n    margin: 1rem;\n  }\n}\n",""]);var l=a},996:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,'.contact-section .grid {\n  margin: 2rem 0;\n}\n\n.contact-me {\n  padding: 2rem;\n}\n\n.contact-grid {\n  background-color: gray;\n  border-radius: 10px;\n  padding: 0 2rem;\n  padding-top: 2vw;\n}\n\nfieldset {\n  text-align: left;\n  border: none;\n  margin-bottom: 1.5rem;\n}\n\nfieldset input[type="text"],\n#name,\ninput[type="email"] {\n  height: 3rem;\n}\n\nfieldset input[type="text"],\ninput[type="email"],\n#name,\ntextarea {\n  width: 100%;\n  margin-top: 1rem;\n  border-radius: 5px;\n  box-shadow: 0;\n  border: 0;\n  padding: 0 1rem;\n}\n\nfieldset textarea {\n  padding: 1rem;\n}\n\n.reviews {\n  border-radius: 10px;\n  padding: 2rem;\n}\n\n.review-item {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  grid-template-rows: fit-content fit-content;\n  margin-bottom: 3rem;\n  padding: 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0 0 0.25rem white;\n}\n\n.review-item:last-child {\n  margin: 0;\n}\n\n.review-client-logo {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  display: flex;\n  justify-content: start;\n}\n\n.review-client-logo div {\n  width: 6rem;\n  height: 6rem;\n  background-color: white;\n  border-radius: 50%;\n}\n\n.review-text h3 {\n  margin: 0;\n}\n\n.review-text p {\n  margin: 1rem 0;\n}\n\n.review-stars i {\n  color: #ff6565;\n}\n\n.contact-me {\n  text-align: center;\n}\n',""]);var l=a},638:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),l=t(667),c=t.n(l),s=new URL(t(530),t.b),d=a()(i()),u=c()(s);d.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Color palete */\n\n/* Typography */\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  background-image: url('+u+");\n  background-size: contain;\n  background-position: top;\n}\n\nh1,\nh2,\nh3 {\n  margin-bottom: 2rem;\n}\n\np {\n  font-size: 1.6rem;\n}\n\n.logo h2 {\n  margin: 0;\n}\n\n.text-align-left {\n  text-align: center;\n}\n\n.hiding {\n  display: none !important;\n}\n\n@media screen and (min-width: 992px) {\n  .text-align-left {\n    text-align: left;\n  }\n}\n\n/* headings */\n\n.heading {\n  text-align: center;\n}\n\n/* links */\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: #ff6565;\n}\n\n/* Containers & Grids */\nsection {\n  /* border: 1px solid gray; */\n  color: white;\n}\n\nsection > .content {\n  width: 80%;\n  margin: auto;\n  text-align: center;\n  padding: 5vw 0;\n  /* border: 1px solid gray; */\n}\n\n.grid {\n  display: grid;\n}\n\n.col2row1 {\n  grid-template-columns: 1fr;\n  grid-template-rows: fit-content 1fr;\n  grid-gap: 2vw;\n  text-align: center;\n}\n\n.intro {\n  margin-bottom: 3vw;\n}\n\n@media screen and (min-width: 992px) {\n  section > .content {\n    width: 70%;\n  }\n\n  .col2row1 {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-column-gap: 2vw;\n    text-align: left;\n  }\n}\n\n/* buttons */\nbutton {\n  padding: 1rem 2rem;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  margin: 2rem 0;\n  box-shadow: 0 0 0.5rem grey;\n  font-size: 1.4rem;\n}\n\nbutton:hover {\n  background-color: #f34f29;\n  color: white;\n}\n",""]);var m=d},47:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".hero {\n  padding: 8vw 0;\n  /* background: rgb(219, 219, 219);\n  background: linear-gradient(\n    90deg,\n    rgb(161, 161, 161) 0%,\n    rgba(128, 128, 128, 1) 100%,\n    rgba(158, 169, 171, 1) 100%\n  ); */\n  color: #fff;\n}\n\n.hero h1 {\n  font-size: 5vw;\n}\n\n.hero_content {\n  height: fit-content;\n}\n\n.hero_content > p {\n  margin: 2vw auto;\n  width: 80%;\n}\n\n.hero_socials {\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-size: clamp(4rem, 3vw, 6rem);\n}\n\n.hero_socials i {\n  margin: 2.85rem 1rem;\n}\n\n.hero .explore-btn {\n  background: #ff6565;\n  color: white;\n  margin: 0 0.5rem;\n}\n\n@media screen and (min-width: 992px) {\n  .hero {\n    min-height: 100vh;\n  }\n\n  .hero_content {\n    height: 65vh;\n  }\n}\n",""]);var l=a},713:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".about-me {\n  background: #2e2e2e;\n  color: #fff;\n}\n\n.about-me .content {\n  margin: auto;\n}\n\n.about-me .content .grid {\n  margin-right: 0;\n  grid-template-rows: min-content;\n}\n\n@media screen and (min-width: 992px) {\n  .about-me .content .grid {\n    margin-right: 0;\n    grid-template-columns: 1.5fr 2fr;\n  }\n}\n\n.projects {\n  /* background: rgb(219, 219, 219);\n  background: linear-gradient(\n    90deg,\n    rgb(161, 161, 161) 0%,\n    rgba(128, 128, 128, 1) 100%,\n    rgba(158, 169, 171, 1) 100%\n  ); */\n  background: rgb(48, 48, 48);\n  background: linear-gradient(\n    0deg,\n    rgba(48, 48, 48, 1) 0%,\n    rgba(34, 34, 34, 1) 51%,\n    rgba(31, 31, 31, 1) 100%\n  );\n}\n\n.media_image {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.paid-banner {\n}\n\n@media screen and (min-width: 992px) {\n  .media_image {\n    min-width: 100%;\n    text-align: center;\n  }\n}\n\n.technologies {\n  margin: auto;\n}\n\n.technologies p {\n  display: inline;\n  margin: 1rem;\n}\n\n.tooltip .webpack {\n  width: 2.5rem;\n  color: #4a4a4a;\n}\n\n.tooltip .babel {\n  width: 5rem;\n  color: #4a4a4a;\n  margin: 0 1rem;\n}\n\n.tooltip .html {\n  color: #e44d26;\n}\n\n.tooltip .css {\n  color: #264de4;\n}\n\n.tooltip .js {\n  color: #f0db4f;\n}\n\n.tooltip .wordpress {\n  color: #21759b;\n}\n\n.tooltip .sass {\n  color: #c69;\n}\n\n.tooltip .git {\n  color: #f34f29;\n}\n\n.tooltip .mailchimp {\n  color: #6dc5dc;\n}\n\n.contact-section {\n  background: #2e2e2e;\n  color: #fff;\n}\n\n.google-maps p,\n.socials {\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.socials {\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-size: clamp(4rem, 3vw, 6rem);\n}\n\n.socials i {\n  margin: 0rem 1rem;\n}\n\n/* footer */\nfooter {\n  background: #1a1a1a;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2vw;\n}\n",""]);var l=a},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:function(n){n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:function(n){n.exports=function(n){return n[1]}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],l=0;l<n.length;l++){var c=n[l],s=r.base?c[0]+r.base:c[0],d=o[s]||0,u="".concat(s," ").concat(d);o[s]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=i(p,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=t(o[a]);e[l].references--}for(var c=r(n,i),s=0;s<o.length;s++){var d=t(o[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},530:function(n,e,t){n.exports=t.p+"32219993dc6e95356e01.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==("undefined"==typeof globalThis?"undefined":_typeof(globalThis)))return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==("undefined"==typeof window?"undefined":_typeof(window)))return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n+"../"}(),t.b=document.baseURI||self.location.href,function(){var n=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.trigger=e.querySelector(".container .menu-trigger"),this.content=e.querySelector(".menu-content")}var e,t;return e=n,(t=[{key:"init",value:function(){}},{key:"collapse",value:function(){this.content.classList.toggle("menu-content-collapsed"),this.trigger.classList.toggle("menu-active")}},{key:"uncollapse",value:function(){this.content.classList.remove("menu-content-collapsed"),this.trigger.classList.remove("menu-active")}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}(),e=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.trigger=e.querySelector(".trigger"),this.content=e.querySelector(".content")}var e,t;return e=n,(t=[{key:"init",value:function(){var n=this;this.trigger.addEventListener("click",(function(e){n.trigger.classList.toggle("active"),n.content.classList.toggle("active")}))}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}(),r=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.tabs=e.querySelectorAll(".trigger")}var e,t;return e=n,(t=[{key:"init",value:function(){var n=this;this.tabs.forEach((function(e){e.addEventListener("click",(function(e){n.toggleTabs(e),n.toggleContent(e)}))}))}},{key:"toggleTabs",value:function(n){this.tabs.forEach((function(e){e.classList.remove("active"),n.target.classList.add("active")}))}},{key:"toggleContent",value:function(n){this.container.querySelectorAll(".content").forEach((function(n){n.classList.remove("active")}));var e=n.target.getAttribute("data-target");this.container.querySelector("#".concat(e)).classList.add("active")}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}(),i=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.messaage=e.getAttribute("data-message")}var e,t;return e=n,(t=[{key:"init",value:function(){var n=document.createElement("div");n.classList.add("tip"),n.textContent=this.messaage,this.element.appendChild(n),this.element.addEventListener("mouseenter",(function(){n.classList.add("active")})),this.element.addEventListener("mouseleave",(function(){n.classList.remove("active")}))}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}(),o=t(379),a=t.n(o),l=t(795),c=t.n(l),s=t(569),d=t.n(s),u=t(565),m=t.n(u),p=t(216),f=t.n(p),g=t(589),h=t.n(g),b=t(638),v={};v.styleTagTransform=h(),v.setAttributes=m(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=f(),a()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var y=t(47),w={};w.styleTagTransform=h(),w.setAttributes=m(),w.insert=d().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=f(),a()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var x=t(991),k={};k.styleTagTransform=h(),k.setAttributes=m(),k.insert=d().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=f(),a()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var Z=t(996),S={};S.styleTagTransform=h(),S.setAttributes=m(),S.insert=d().bind(null,"head"),S.domAPI=c(),S.insertStyleElement=f(),a()(Z.Z,S),Z.Z&&Z.Z.locals&&Z.Z.locals;var T=t(713),E={};E.styleTagTransform=h(),E.setAttributes=m(),E.insert=d().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=f(),a()(T.Z,E),T.Z&&T.Z.locals&&T.Z.locals;var A=t(985),j={};j.styleTagTransform=h(),j.setAttributes=m(),j.insert=d().bind(null,"head"),j.domAPI=c(),j.insertStyleElement=f(),a()(A.Z,j),A.Z&&A.Z.locals&&A.Z.locals;var L=t(738),P={};P.styleTagTransform=h(),P.setAttributes=m(),P.insert=d().bind(null,"head"),P.domAPI=c(),P.insertStyleElement=f(),a()(L.Z,P),L.Z&&L.Z.locals&&L.Z.locals;var C=t(673),I={};I.styleTagTransform=h(),I.setAttributes=m(),I.insert=d().bind(null,"head"),I.domAPI=c(),I.insertStyleElement=f(),a()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals;var _=t(935),O={};O.styleTagTransform=h(),O.setAttributes=m(),O.insert=d().bind(null,"head"),O.domAPI=c(),O.insertStyleElement=f(),a()(_.Z,O),_.Z&&_.Z.locals&&_.Z.locals;var q=t(311),z={};z.styleTagTransform=h(),z.setAttributes=m(),z.insert=d().bind(null,"head"),z.domAPI=c(),z.insertStyleElement=f(),a()(q.Z,z),q.Z&&q.Z.locals&&q.Z.locals,document.querySelector(".load-page").style.display="none";var M=new n(document.querySelector(".nav-bar"));document.querySelector(".nav-bar .container .menu-trigger").addEventListener("click",(function(n){M.collapse()})),window.addEventListener("resize",(function(n){window.innerWidth>768&&M.uncollapse()})),document.querySelectorAll(".dropdown").forEach((function(n){new e(n).init()})),new r(document.querySelector(".tabs")).init(),document.querySelectorAll(".tooltip").forEach((function(n){new i(n).init()}));var N=document.querySelector(".contact-me"),R=document.querySelector(".contact-form-response");N.addEventListener("submit",(function(n){n.preventDefault(),fetch("https://formsubmit.co/ajax/tjnyamatore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:N.name.value.trim(),email:N.email.value.trim(),message:N.message.value.trim()})}).then((function(n){n.json(),n.ok?(R.style.display="block",R.style.color="white",R.textContent="Thank you, your message has been sent!"):(R.style.display="block",R.style.color="red",R.textContent="Sorry, there was a problem. please use our email to the left.")})).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}))}))}()}();