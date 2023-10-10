import{k as t,l as e}from"./vendor.ee1ba453.js";var n={exports:{}};!function(t,e){var n,i;function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function a(t,e){return e.indexOf(t)>=0}function r(t,e){for(var n in e)if(null==t[n]){var i=e[n];t[n]=i}return t}function l(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)}function u(t){var e=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=void 0;return null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o}function c(t,e){null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)&&t["on"+e]()}function h(t,e,n){null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n}function d(t,e,n){null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]}function f(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}var v=window.WeakMap||window.MozWeakMap||function(){function t(){o(this,t),this.keys=[],this.values=[]}return s(t,[{key:"get",value:function(t){for(var e=0;e<this.keys.length;e++)if(this.keys[e]===t)return this.values[e]}},{key:"set",value:function(t,e){for(var n=0;n<this.keys.length;n++)if(this.keys[n]===t)return this.values[n]=e,this;return this.keys.push(t),this.values.push(e),this}}]),t}(),m=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function t(){o(this,t),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return s(t,[{key:"observe",value:function(){}}]),t}(),n.notSupported=!0,i),y=window.getComputedStyle||function(t){var e=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),e.test(n)&&n.replace(e,(function(t,e){return e.toUpperCase()}));var i=t.currentStyle;return(null!=i?i[n]:void 0)||null}}},p=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,t),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=r(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new v,this.wowEvent=u(this.config.boxClass)}return s(t,[{key:"init",value:function(){this.element=window.document.documentElement,a(document.readyState,["interactive","complete"])?this.start():h(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var t=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var e=0;e<this.boxes.length;e++){var n=this.boxes[e];this.applyStyle(n,!0)}this.disabled()||(h(this.config.scrollContainer||window,"scroll",this.scrollHandler),h(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new m((function(e){for(var n=0;n<e.length;n++)for(var i=e[n],o=0;o<i.addedNodes.length;o++){var s=i.addedNodes[o];t.doSync(s)}})).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,d(this.config.scrollContainer||window,"scroll",this.scrollHandler),d(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){m.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(t){if(null==t&&(t=this.element),1===t.nodeType)for(var e=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass),n=0;n<e.length;n++){var i=e[n];a(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),c(t,this.wowEvent),h(t,"animationend",this.resetAnimation),h(t,"oanimationend",this.resetAnimation),h(t,"webkitAnimationEnd",this.resetAnimation),h(t,"MSAnimationEnd",this.resetAnimation),t}},{key:"applyStyle",value:function(t,e){var n=this,i=t.getAttribute("data-wow-duration"),o=t.getAttribute("data-wow-delay"),s=t.getAttribute("data-wow-iteration");return this.animate((function(){return n.customStyle(t,e,i,o,s)}))}},{key:"resetStyle",value:function(){for(var t=0;t<this.boxes.length;t++)this.boxes[t].style.visibility="visible"}},{key:"resetAnimation",value:function(t){if(t.type.toLowerCase().indexOf("animationend")>=0){var e=t.target||t.srcElement;e.className=e.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t}},{key:"vendorSet",value:function(t,e){for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];t[""+n]=i;for(var o=0;o<this.vendors.length;o++)t[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}},{key:"vendorCSS",value:function(t,e){for(var n=y(t),i=n.getPropertyCSSValue(e),o=0;o<this.vendors.length;o++){var s=this.vendors[o];i=i||n.getPropertyCSSValue("-"+s+"-"+e)}return i}},{key:"animationName",value:function(t){var e=void 0;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=y(t).getPropertyValue("animation-name")}return"none"===e?"":e}},{key:"cacheAnimationName",value:function(t){return this.animationNameCache.set(t,this.animationName(t))}},{key:"cachedAnimationName",value:function(t){return this.animationNameCache.get(t)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var t=[],e=0;e<this.boxes.length;e++){var n=this.boxes[e];if(n){if(this.isVisible(n)){this.show(n);continue}t.push(n)}}this.boxes=t,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(t){for(;void 0===t.offsetTop;)t=t.parentNode;for(var e=t.offsetTop;t.offsetParent;)e+=(t=t.offsetParent).offsetTop;return e}},{key:"isVisible",value:function(t){var e=t.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,f())-e,o=this.offsetTop(t),s=o+t.clientHeight;return o<=i&&s>=n}},{key:"disabled",value:function(){return!this.config.mobile&&l(navigator.userAgent)}}]),t}();e.default=p,t.exports=e.default}(n,n.exports);var i=e(n.exports);export{i as W};
