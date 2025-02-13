/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{var t,e={424:function(t,e,i){t.exports=function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=i(t),a=i(e);function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s="modal",r="bs.modal",d=".bs.modal",u=n.default.fn.modal,c={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},f="hidden.bs.modal",m="show.bs.modal",_="focusin.bs.modal",g="resize.bs.modal",p="click.dismiss.bs.modal",v="keydown.dismiss.bs.modal",b="mousedown.dismiss.bs.modal",y="modal-open",w="fade",k="show",E="modal-static",T=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",S=".sticky-top",C=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e,i,u,C=t.prototype;return C.toggle=function(t){return this._isShown?this.hide():this.show(t)},C.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){n.default(this._element).hasClass(w)&&(this._isTransitioning=!0);var i=n.default.Event(m,{relatedTarget:t});n.default(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),n.default(this._element).on(p,'[data-dismiss="modal"]',(function(t){return e.hide(t)})),n.default(this._dialog).on(b,(function(){n.default(e._element).one("mouseup.dismiss.bs.modal",(function(t){n.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},C.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=n.default.Event("hide.bs.modal");if(n.default(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=n.default(this._element).hasClass(w);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),n.default(document).off(_),n.default(this._element).removeClass(k),n.default(this._element).off(p),n.default(this._dialog).off(b),o){var l=a.default.getTransitionDurationFromElement(this._element);n.default(this._element).one(a.default.TRANSITION_END,(function(t){return e._hideModal(t)})).emulateTransitionEnd(l)}else this._hideModal()}}},C.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return n.default(t).off(d)})),n.default(document).off(_),n.default.removeData(this._element,r),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},C.handleUpdate=function(){this._adjustDialog()},C._getConfig=function(t){return t=l({},c,t),a.default.typeCheckConfig(s,t,h),t},C._triggerBackdropTransition=function(){var t=this,e=n.default.Event("hidePrevented.bs.modal");if(n.default(this._element).trigger(e),!e.isDefaultPrevented()){var i=this._element.scrollHeight>document.documentElement.clientHeight;i||(this._element.style.overflowY="hidden"),this._element.classList.add(E);var o=a.default.getTransitionDurationFromElement(this._dialog);n.default(this._element).off(a.default.TRANSITION_END),n.default(this._element).one(a.default.TRANSITION_END,(function(){t._element.classList.remove(E),i||n.default(t._element).one(a.default.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}},C._showElement=function(t){var e=this,i=n.default(this._element).hasClass(w),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),n.default(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&a.default.reflow(this._element),n.default(this._element).addClass(k),this._config.focus&&this._enforceFocus();var l=n.default.Event("shown.bs.modal",{relatedTarget:t}),s=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,n.default(e._element).trigger(l)};if(i){var r=a.default.getTransitionDurationFromElement(this._dialog);n.default(this._dialog).one(a.default.TRANSITION_END,s).emulateTransitionEnd(r)}else s()},C._enforceFocus=function(){var t=this;n.default(document).off(_).on(_,(function(e){document!==e.target&&t._element!==e.target&&0===n.default(t._element).has(e.target).length&&t._element.focus()}))},C._setEscapeEvent=function(){var t=this;this._isShown?n.default(this._element).on(v,(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||n.default(this._element).off(v)},C._setResizeEvent=function(){var t=this;this._isShown?n.default(window).on(g,(function(e){return t.handleUpdate(e)})):n.default(window).off(g)},C._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){n.default(document.body).removeClass(y),t._resetAdjustments(),t._resetScrollbar(),n.default(t._element).trigger(f)}))},C._removeBackdrop=function(){this._backdrop&&(n.default(this._backdrop).remove(),this._backdrop=null)},C._showBackdrop=function(t){var e=this,i=n.default(this._element).hasClass(w)?w:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),n.default(this._backdrop).appendTo(document.body),n.default(this._element).on(p,(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())})),i&&a.default.reflow(this._backdrop),n.default(this._backdrop).addClass(k),!t)return;if(!i)return void t();var o=a.default.getTransitionDurationFromElement(this._backdrop);n.default(this._backdrop).one(a.default.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){n.default(this._backdrop).removeClass(k);var l=function(){e._removeBackdrop(),t&&t()};if(n.default(this._element).hasClass(w)){var s=a.default.getTransitionDurationFromElement(this._backdrop);n.default(this._backdrop).one(a.default.TRANSITION_END,l).emulateTransitionEnd(s)}else l()}else t&&t()},C._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},C._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},C._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},C._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(T)),i=[].slice.call(document.querySelectorAll(S));n.default(e).each((function(e,i){var a=i.style.paddingRight,o=n.default(i).css("padding-right");n.default(i).data("padding-right",a).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")})),n.default(i).each((function(e,i){var a=i.style.marginRight,o=n.default(i).css("margin-right");n.default(i).data("margin-right",a).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}));var a=document.body.style.paddingRight,o=n.default(document.body).css("padding-right");n.default(document.body).data("padding-right",a).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}n.default(document.body).addClass(y)},C._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(T));n.default(t).each((function(t,e){var i=n.default(e).data("padding-right");n.default(e).removeData("padding-right"),e.style.paddingRight=i||""}));var e=[].slice.call(document.querySelectorAll(".sticky-top"));n.default(e).each((function(t,e){var i=n.default(e).data("margin-right");void 0!==i&&n.default(e).css("margin-right",i).removeData("margin-right")}));var i=n.default(document.body).data("padding-right");n.default(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},C._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,i){return this.each((function(){var a=n.default(this).data(r),o=l({},c,n.default(this).data(),"object"==typeof e&&e?e:{});if(a||(a=new t(this,o),n.default(this).data(r,a)),"string"==typeof e){if(void 0===a[e])throw new TypeError('No method named "'+e+'"');a[e](i)}else o.show&&a.show(i)}))},e=t,u=[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return c}}],(i=null)&&o(e.prototype,i),u&&o(e,u),t}();return n.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e,i=this,o=a.default.getSelectorFromElement(this);o&&(e=document.querySelector(o));var s=n.default(e).data(r)?"toggle":l({},n.default(e).data(),n.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var d=n.default(e).one(m,(function(t){t.isDefaultPrevented()||d.one(f,(function(){n.default(i).is(":visible")&&i.focus()}))}));C._jQueryInterface.call(n.default(e),s,this)})),n.default.fn.modal=C._jQueryInterface,n.default.fn.modal.Constructor=C,n.default.fn.modal.noConflict=function(){return n.default.fn.modal=u,C._jQueryInterface},C}(i(755),i(801))},1:(t,e,i)=>{"use strict";i(39),i(137),i(77),i(577),i(824);var n=i(755);n(".aniview").AniView({animateClass:"animate__animated",animateThreshold:50,scrollPollInterval:50}),n((function(){n('[data-toggle="tooltip"]').tooltip()})),i(424);var a=i(755);a(".image-card").on("click",(function(){var t=a(this).data("title"),e=a(this).data("src");a(".modal-body .modal-src").attr("src",e),a(".modal-content .modal-header .modal-title").text(t)})),document.addEventListener("DOMContentLoaded",(async function(){try{const t=await fetch("https://kernelwar-api.vercel.app/spotify/currently-song",{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const e=await t.json();e.trackId&&(document.getElementById("spotify-iframe").src=`https://open.spotify.com/embed/track/${e.trackId}`,document.getElementById("spotify-widget").style.display="block",document.getElementById("spotify-status").textContent="current"==e.status?"Lo que estoy escuchando ahora 🎶":"Lo último que escuché 🎶")}catch(t){console.error("Error fetching last played song:",t)}}))}},i={};function n(t){var a=i[t];if(void 0!==a)return a.exports;var o=i[t]={id:t,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,t=[],n.O=(e,i,a,o)=>{if(!i){var l=1/0;for(d=0;d<t.length;d++){for(var[i,a,o]=t[d],s=!0,r=0;r<i.length;r++)(!1&o||l>=o)&&Object.keys(n.O).every((t=>n.O[t](i[r])))?i.splice(r--,1):(s=!1,o<l&&(l=o));s&&(t.splice(d--,1),e=a())}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,a,o]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={826:0};n.O.j=e=>0===t[e];var e=(e,i)=>{var a,o,[l,s,r]=i,d=0;for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var u=r(n);for(e&&e(i);d<l.length;d++)o=l[d],n.o(t,o)&&t[o]&&t[o][0](),t[l[d]]=0;return n.O(u)},i=self.webpackChunkKernelWar=self.webpackChunkKernelWar||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var a=n.O(void 0,[395],(()=>n(1)));a=n.O(a)})();