!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);jQuery(document).ready(function(e){function t(){var t=e(window).scrollTop(),o=e(window).height(),i=r.height(),u=r.offset().top;i+u>o?n.css({top:o-50}):n.css({top:i+u-50}),t>10?n.hasClass("fadeout")&&n.hide().removeClass("fadeout"):!n.hasClass("fadeout")&&n.show().addClass("fadeout")}var n=(new o.default({header:"#gb-subpage-header",menu:".subpage-menu a",stage:".stage"}),e(".pd-stage-arrows")),r=e(".stage").first();e(window).on({scroll:t,resize:t}),t()})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o),u=n(3),a=r(u),s=n(22),f=r(s),c=function(){function e(t){(0,i.default)(this,e),this.win=$(window),this.mobileHeader=$(t.header),this.stage=$(t.stage),this.$menuBtn=this.mobileHeader.find(t.menu),this.isOpenMobileHeader=!1,this.isfollow=!this.mobileHeader.data("not-follow"),this.theme=this.mobileHeader.data("def-theme")||!1,this.win.on({scroll:(0,f.default)(this.scroll.bind(this),10),resize:(0,f.default)(this.resize.bind(this),10)}),this.scroll(),this.menu()}return(0,a.default)(e,[{key:"scroll",value:function(){if(this.isfollow){var e=this.win.scrollTop(),t=this;e>=(this.winWidth>768?44:56)?(TweenMax.set(t.mobileHeader,{position:"fixed",top:0}),setTimeout(function(){t.mobileHeader.addClass("nav-locked"),t.theme&&t.mobileHeader.addClass("nav-theme-"+t.theme)},1)):(t.mobileHeader.removeClass("nav-locked"),t.theme&&t.mobileHeader.removeClass("nav-theme-"+t.theme),setTimeout(function(){TweenMax.set(t.mobileHeader,{position:"",top:""})},1)),this.close_menu()}}},{key:"resize",value:function(){this.winWidth=this.win.width(),this.scroll(),this.winWidth>768&&this.close_menu()}},{key:"menu",value:function(){var e=this;e.$menuBtn.click(function(t){if(e.isOpenMobileHeader)e.mobileHeader.removeClass("open-subpage-menu"),e.isOpenMobileHeader=!1;else{if(!$(this).is(":visible"))return!1;e.mobileHeader.addClass("open-subpage-menu"),e.isOpenMobileHeader=!0}t.preventDefault()})}},{key:"close_menu",value:function(){this.isOpenMobileHeader&&this.$menuBtn.click()}},{key:"theme",value:function(){this.stage.first().hasClass("theme-black")&&!this.mobileHeader.hasClass("theme-black")&&this.mobileHeader.addClass("theme-black")}}]),e}();t.default=c},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){e.exports={default:n(5),__esModule:!0}},function(e,t,n){n(6);var r=n(9).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(7);r(r.S+r.F*!n(17),"Object",{defineProperty:n(13).f})},function(e,t,n){var r=n(8),o=n(9),i=n(10),u=n(12),a=function(e,t,n){var s,f,c,l=e&a.F,d=e&a.G,p=e&a.S,h=e&a.P,m=e&a.B,v=e&a.W,b=d?o:o[t]||(o[t]={}),w=b.prototype,y=d?r:p?r[t]:(r[t]||{}).prototype;d&&(n=t);for(s in n)(f=!l&&y&&void 0!==y[s])&&s in b||(c=f?y[s]:n[s],b[s]=d&&"function"!=typeof y[s]?n[s]:m&&f?i(c,r):v&&y[s]==c?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((b.virtual||(b.virtual={}))[s]=c,e&a.R&&w&&!w[s]&&u(w,s,c)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(11);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(13),o=n(21);e.exports=n(17)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(14),o=n(16),i=n(20),u=Object.defineProperty;t.f=n(17)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(15);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(15),o=n(8).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(15);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports=function(e,t,n){function r(){var f=Date.now()-a;f<t&&f>=0?o=setTimeout(r,t-f):(o=null,n||(s=e.apply(u,i),u=i=null))}var o,i,u,a,s;null==t&&(t=100);var f=function(){u=this,i=arguments,a=Date.now();var f=n&&!o;return o||(o=setTimeout(r,t)),f&&(s=e.apply(u,i),u=i=null),s};return f.clear=function(){o&&(clearTimeout(o),o=null)},f}}]);