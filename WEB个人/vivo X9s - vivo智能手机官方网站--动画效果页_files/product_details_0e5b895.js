!function(e,t){"use strict";var i=function(){new o},o=function(){this.isTabHide=!0,this.LG=null,this.MobTabDisplay=!1,this.$tabControl=document.getElementsByClassName("tabControl")[0],this.argumentsList=t.getElementsByClassName("argument"),this.$fixed=t.getElementsByClassName("topNavMaxScreen")[0],this.init(),this.tabListener(),this.onscroll(),this.headerHoverListener(),this.resize()};o.prototype={init:function(){var e=$$.getQueryString("checked");e=e?parseInt(e):1,this.argumentsList[this.argumentsList.length-e].style.color="white"},headerHoverListener:function(){var e=this,i=t.getElementsByTagName("header")[0];i.onmouseover=function(t){var i=t.target,o=i.getAttribute("class"),s=i.parentNode,n=s&&s.getAttribute("class");if(n&&n.indexOf("series")>-1||o&&o.indexOf("series")>-1)return void(e.$fixed.style.opacity="0");var a=function(){var t=s&&$$.deleteEmptyNode(s.parentNode);if(t){var i=t.childNodes[0].getAttribute("class");if(i&&i.indexOf("f-menu-link")>-1)return void(e.$fixed.style.opacity="0")}if(s){var o=$$.deleteEmptyNode(s).childNodes[0],n="#text"!==o.nodeName&&o.getAttribute("class");if(n&&n.indexOf("f-menu-link")>-1)return void(e.$fixed.style.opacity="0")}}();return a?void 0:o&&o.indexOf("gb-vivo-head")>-1?void(e.$fixed.style.opacity="1"):void 0},i.onmouseout=function(){e.$fixed.style.opacity="1"}},tabListener:function(){var e=this,t=document.getElementById("MobShowHide"),i=$$.deleteEmptyNode(t.parentNode),o=$$.deleteEmptyNode(i.childNodes[0]).lastChild;t.onclick=function(){e.isTabHide?($$.show(o,{opacity:"",height:"",notHeightAuto:!0},"300"),e.isTabHide=!e.isTabHide):($$.hide(o,{opacity:"",height:""},"300"),e.isTabHide=!e.isTabHide)}},onscroll:function(){var i=this,o=t.querySelector("#vivo-head-wrap"),s=o.offsetHeight,n=!0;e.onscroll=function(){var t=($$.browser,e.scrollY);n&&t>s?(n=!n,i.$fixed.style.position="fixed",i.$fixed.style.top="0"):!n&&s>=t&&(n=!n,i.$fixed.style.position="absolute",i.$fixed.style.top=s+"px")}},resize:function(){var e=this;officialWebFun.onresize([function(){var t=officialWebFun.getLGScreen();if(e.LG!=t&&t){var i=e.$tabControl.style;"block"==i.display&&(e.MobTabDisplay=!0),i.display="block",i.height="auto",e.LG=t}else if(e.LG!=t&&!t){var i=e.$tabControl.style;i.display=e.MobTabDisplay?"block":"none";for(var o=e.argumentsList,s=o.length,n=0,a=o.length;a>n;n++)o[n].style&&"none"==o[n].style.display&&s--;i.height=1.22*s+"rem",e.LG=t}}])}},$$.domReady([i])}(window,document);