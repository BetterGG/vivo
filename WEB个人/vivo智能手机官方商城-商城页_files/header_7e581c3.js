function ContentBuildFun(e,t,i,s){for(var n="<dl><dt>"+e+"（<span>"+i+"</span>）</dt>",a=0;a<t.length;a++){var o=0;switch(e){case"手机":o=1;break;case"配件":o=2;break;case"服务":o=3;break;default:o=4}var r='{cfrom:9103, name:"'+t[a].name+'", keyword: "'+s+'",result_type:'+o+", search_page:1}",l=$('<dd><a href="'+t[a].url+'">'+t[a].name+"</a></dd>");l.find("a").attr("data-track",r),n+=l.prop("outerHTML")}return n+="</dl>"}function SearchKeyEvent(e){this.$searchWrap=$(e.wrap),this.$searchInput=this.$searchWrap.find(e.input),this.$searchlist=this.$searchWrap.find(e.list).children("dl"),this.special=e.special||null,this.mutil=this.check_mutil(),this.limitHeight=0,this.check_elements(e.list),this.addkey_press()}function getKeyName(e){switch(e.which){case 38:return"up";case 40:return"down";case 13:return"enter"}}function initHomeLogin(e){if(!(e.length<=0)){var t=$("#J_topCartNum");$.ajax({url:webCtx+"/tool/cookie?t="+(new Date).getTime(),type:"get",dataType:"json",success:function(i){e[0]._isLogin=!!i.vivo_account_cookie_iqoo_openid,e[0]._isLogin?(e.find("span").html("账号中心"),t.show()):(e.find("span").html("登录/注册"),t.hide()),e.on("click",function(){this._isLogin?location.href="//passport.vivo.com.cn/":LoginConfirm.redirect()})}})}}!function(e){function t(){var e=v.round;this.isplay=!1,this.rounds=[],this.box=new createjs.Container,this.handle=null,p.addChild(this.box);for(var t=0;t<e.offsetArr.length;t++)this.rounds.push(new i(t)),this.box.addChild(this.rounds[t].ele)}function i(e){var t=v.round,i=t.offsetArr[e].split(",");this.color=t.color,this.speed=t.speed+d(.008,.006),this.isParent=!!parseInt(i[0]),this.isDot=!!parseInt(i[1]),this.width=6*parseFloat(i[2]),this.radius=parseFloat(i[3])*u/2,this.alpha=parseFloat(i[4]),this.x=u*parseFloat(i[5]),this.y=u*parseFloat(i[6]),this.angle=d(1,-1)*f,this.direct=this.angle>f/2?-1:1,this.vector=this.isParent?new a(this.x,this.y,0,0):new a(this.x,this.y,this.radius,this.angle),this.draw()}function s(){var e=v.planet;this.planets=[],this.connector=new createjs.Container,this.box=new createjs.Container,this.handle=null,this.isplay=!1,p.addChild(this.connector,this.box);for(var t=0;t<e.size;t++)this.planets.push(new n(e)),this.box.addChild(this.planets[t].ele)}function n(e){this.planet=e,this.x=d(1.2*u,u),this.y=d(.6*u,.3*u),this.length=d(.4*u,.2*u),this.angle=d(1,-1)*f,this.alpha=d(1,.1),this.direct=this.angle>f/2?-1:1,this.speed=this.planet.speed+d(.008,.001),this.vector=new a(this.x,this.y,this.length,this.angle*this.direct,this.alpha),this.draw()}function a(e,t,i,s,n){this.startX=e,this.startY=t,this.alpha=n,this.angle=s,this.setX=function(e){tihs.startX=e},this.setY=function(e){this.startY=e},this.getAngle=function(){return this.angle},this.setAngle=function(e){this.angle=e,this.x=this.startX+Math.cos(this.angle)*this.length,this.y=this.startY+Math.sin(this.angle)*this.length},this.getLength=function(){return this.length},this.setLength=function(e){this.length=e,this.x=Math.cos(this.angle)*this.length,this.Y=Math.sin(this.angle)*this.length},this.getDistance=function(e){var t=e.x-this.x,i=e.y-this.y;return Math.sqrt(t*t+i*i)},this.setLength(i),this.setAngle(s)}function o(){var e=v.circle;this.circles=[],this.isplay=!1,this.box=new createjs.Container,this.handle=null,p.addChild(this.box);for(var t=0;t<e.offsetArr.length;t++)this.circles.push(new r(t,e)),this.box.addChild(this.circles[t].ele)}function r(e,t){var i=t.offsetArr[e].split(","),s=i[0],n=i[1];this.playend=!1,this.index=e,this.direct=i[2],this.ele=new createjs.Container,this.ele.alpha=i[3],this.x=c+s*this.direct,this.y=c/2+n*this.direct,this.ele.x=this.xcache=this.x,this.ele.y=this.ycache=this.y,this.r=.7*c*i[5],this.color=t.color,this.angle=d(2*Math.PI,0),this.width=i[4],this.dotWidth=this.width*(this.width>3?1.5:2),this.box=new createjs.Container,this.box.x=this.x,this.box.y=this.y,this.box.regX=this.x,this.box.regY=this.y,this.duration=this.r/l*10,this.block=0,this.ele.addChild(this.box),this.draw()}var l,h,c,u,p,d=function(e,t,i){var e=e||0===e?e:1,t=t||0,s=t+(e-t)*Math.random();return i?Math.round(s):s},f=2*Math.PI,v=(Math.PI/180,180*Math.PI,{circle:{offsetArr:["5,0,1,0.3,2,0.6","-10,20,-1,0.5,1,0.8","-15,-10,-1,0.8,2,0.9","5,-5,1,1,4,1"],color:"#008cd6"},planet:{size:50,speed:.005,color:"#008cd6"},round:{offsetArr:["1,0,0.4,0.6,0.3,1,0.5","0,1,0.4,0.6,0.3,1,0.5","0,0,0.4,0.6,0.3,1,0.5","1,0,0.5,0.35,0.5,1.05,0.3","0,1,0.5,0.35,0.5,1.05,0.3","1,0,0.7,0.2,0.7,0.83,0.65","0,1,0.7,0.2,0.7,0.83,0.65","1,0,0.7,0.1,1,1,0.8","0,1,0.7,0.1,1,1,0.8"],color:"#008cd6",speed:.008}});t.prototype.loop=function(){for(var e=this.rounds,t=0;t<e.length;t++)e[t].update();this.handle=requestAnimationFrame(this.loop.bind(this))},t.prototype.play=function(){!this.isplay&&(this.loop(),this.isplay=!0)},t.prototype.stop=function(){this.handle&&this.isplay&&(cancelAnimationFrame(this.handle),this.handle=null,this.isplay=!1)},i.prototype.draw=function(){this.ele=new createjs.Shape;var e;this.isDot?(e=6,this.ele.graphics.f(this.color).dc(this.vector.x,this.vector.y,e)):(e=this.isParent?this.radius:this.radius*d(.15,.08),this.ele.graphics.s(this.color).ss(this.width).dc(this.vector.x,this.vector.y,e)),this.ele.alpha=this.alpha,this.ele.x=this.vector.x,this.ele.y=this.vector.y,this.ele.regX=this.vector.x,this.ele.regY=this.vector.y},i.prototype.update=function(){var e=this.vector;e.setAngle(this.speed*this.direct+e.getAngle()),this.ele.x=e.x,this.ele.y=e.y},s.prototype.drawLine=function(e,t){var i=new createjs.Shape;i.graphics.ss(4*t.alpha).s("#008cd6").mt(e.x,e.y).lt(t.x,t.y),i.alpha=t.alpha,this.connector.addChild(i)},s.prototype.loop=function(){for(var e=this.planets,t=0;t<e.length;t++)e[t].update();this.connector.removeAllChildren();for(var t=0;t<e.length;t++)for(var i=e[t],s=0;s<e.length;s++){var n=e[s],a=n.vector.getDistance(i.vector);i!=n&&.3*c>a&&this.drawLine(i.vector,n.vector)}this.handle=requestAnimationFrame(this.loop.bind(this))},s.prototype.play=function(){!this.isplay&&(this.loop(),this.isplay=!0)},s.prototype.stop=function(){this.handle&&this.isplay&&(cancelAnimationFrame(this.handle),this.handle=null,this.isplay=!1)},n.prototype.draw=function(){this.ele=new createjs.Shape,this.ele.graphics.f(this.planet.color).dc(this.vector.x,this.vector.y,6),this.ele.x=this.vector.x,this.ele.alpha=this.vector.alpha,this.ele.y=this.vector.y,this.ele.regX=this.vector.x,this.ele.regY=this.vector.y},n.prototype.update=function(){var e=this.vector;e.setAngle(this.speed*this.direct+e.getAngle()),this.ele.x=e.x,this.ele.y=e.y},o.prototype.loop=function(){for(var e=this.circles,t=0;t<e.length;t++)e[t].update();this.handle=requestAnimationFrame(this.loop.bind(this))},o.prototype.play=function(){!this.isplay&&(this.loop(),this.isplay=!0)},o.prototype.stop=function(){this.handle&&this.isplay&&(cancelAnimationFrame(this.handle),this.handle=null,this.isplay=!1)},r.prototype.draw=function(){var e=new createjs.Shape;e.graphics.s(this.color).ss(this.width).dc(this.x,this.y,this.r),this.dot=new createjs.Shape,this.dx=this.x+this.r*Math.cos(this.angle),this.dy=this.y+this.r*Math.sin(this.angle),this.dot.graphics.f(this.color).dc(this.dx,this.dy,this.dotWidth),this.box.addChild(e,this.dot)},r.prototype.update=function(){var e=f/this.duration*this.direct;this.box.rotation=this.box.rotation+e,this.block+=d(.01*Math.PI,.001*Math.PI),this.box.x=this.box.x+.2*Math.sin(this.block*this.direct),this.box.y=this.box.y+.2*Math.cos(this.block*this.direct)},e.Emitter=function(e,t){this.type=t||"circle",this.wrap=document.getElementById(e),this._canvas=document.createElement("canvas"),this.wrap.appendChild(this._canvas),p=null,this.init()},Emitter.prototype.init=function(){this._stage=new createjs.Stage(this._canvas),p=this.container=new createjs.Container,this.ant=null,this._stage.addChild(p),this.resize(),this.create(this.type),this.containx=this.container.x=c,this.container.alpha=0,this._canvas.width=2*l,this._canvas.height=2*c,e.addEventListener("resize",this.resize.bind(this)),createjs.Ticker.setFPS(30),createjs.Ticker.addEventListener("tick",this._stage)},Emitter.prototype.create=function(){switch(this.type){case"round":this.ant=new t;break;case"planet":this.ant=new s;break;default:this.ant=new o}},Emitter.prototype.in=function(e){var e=e||function(){};TweenMax.killTweensOf(this.container),TweenMax.to(this.container,.8,{x:this.containx-c,alpha:1,delay:.02,ease:Ease.easeIn,onComplete:e})},Emitter.prototype.out=function(e){var e=e||function(){};TweenMax.killTweensOf(this.container),TweenMax.to(this.container,.5,{x:this.containx+c,alpha:0,delay:.02,ease:Back.easeInOut,onComplete:e})},Emitter.prototype.play=function(){this.ant&&this.ant.play(),this.ant&&this.in()},Emitter.prototype.stop=function(){var e=this;this.ant&&this.out(function(){e.ant.stop()})},Emitter.prototype.resize=function(){var e=this.wrap.getBoundingClientRect();l=e.width,c=e.height,h=2*l,u=2*c,this._canvas.style.width=l+"px",this._canvas.style.height=c+"px"};for(var $=0,m=["ms","moz","webkit","o"],y=0;y<m.length&&!e.requestAnimationFrame;++y)e.requestAnimationFrame=e[m[y]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[m[y]+"CancelAnimationFrame"]||e[m[y]+"CancelRequestAnimationFrame"];e.requestAnimationFrame||(e.requestAnimationFrame=function(t){var i=(new Date).getTime(),s=Math.max(0,16-(i-$)),n=e.setTimeout(function(){t(i+s)},s);return $=i+s,n}),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(e){clearTimeout(e)})}(window);var Menu=function(){function e(){for(var e=0;e<a.size();e++)TweenMax.set(a.eq(e),{x:s.eq(e).offset().left})}var t=$(window),i=$("#vivo-head-wrap"),s=i.find(".series"),n=i.find(".gb-vivo-menu-series"),a=n.find("ul");e();var o=new TimelineMax({paused:!0}),r=!1;self.menuOpen=r;var l,h;o.from(n,.5,{height:0}),s.each(function(){this.handle=new TimelineMax({paused:!0}),this.handle.staggerFrom(a.eq($(this).index()).find("li"),.45,{y:-25,autoAlpha:0,ease:Ease.easeIn},.1,"+=.5").from(a.eq($(this).index()),.6,{height:0},.3),TweenMax.set(n,{autoAlpha:1}),$(this).hover(function(){clearTimeout(l,h);var e=this;e.wrap=e.wrap||$(e).data("wrap"),e.type=e.type||$(e).data("type"),r=!0,!e.c&&Modernizr.canvas&&e.wrap&&$("#"+e.wrap).size()>0&&(e.c=new Emitter(e.wrap,e.type)),$(this).siblings(".series").mouseleave(),h=setTimeout(function(){o.timeScale(1.5).play(),e.handle.timeScale(1.5).play(),e.c&&e.c.play()},100)},function(){r=!1;var e=this;l=setTimeout(function(){r||(o.timeScale(1.5).reverse(),e.handle.timeScale(4).reverse(),e.c&&e.c.stop())},100)})}),n.hover(function(){r=!0},function(){r=!1,s.mouseleave()}),t.on({resize:e})}(),searchUrlConfig={getKeyWords:HOMEURL+"/search/ajax/recWords",getAssciate:HOMEURL+"/search/ajax/assResult",globalSearch:HOMEURL+"/search"};!function(e){e.setSearchUrl=function(e,t){searchUrlConfig[e]&&(searchUrlConfig[e]=t.toString())},e.curl=function(e,t,i){var s=""==e?1==t?i:!1:e,n=searchUrlConfig.globalSearch+"?q="+s;s&&Vtrack.clickStats({cfrom:9102,keyword:s,search_page:1}),s&&(window.location.href=n)}}(window);var $box=$("#vivo-head-wrap .gb-vivo-head"),$title=$box.find(".nav-gb"),$searchBox=$box.find(".v_h_search"),$searchOpen=$box.find(".nav-t-search"),$searchClose=$searchBox.find(".search-close"),$searchResults=$searchBox.find(".results"),$input=$searchBox.find("input"),$contentBox=$searchBox.find(".search-content"),$link=$contentBox.find(".link"),$userBtn=$(".nav-t-user"),$msearchBox=$(".gb-vivo-s-nav"),$mresults=$msearchBox.find(".results"),$mmenulist=$msearchBox.find("li"),SearchBuild={LinkBuild:function(e){for(var t='<dt><a href="#">全局搜索</a></dt>',i=0;i<e.length;i++)t+='<dd><a href="'+e[i].linkUrl+'">'+e[i].word+"</a></dd>";return t},ContentBuild:function(e){var t=e.keyword;delete e.keyword;var i="";for(var s in e){var n=e[s].name,a=e[s].value,o=e[s].number;i+=ContentBuildFun(n,a,o,t)}return i}};SearchKeyEvent.prototype.addkey_press=function(){var e=this;return e.$searchlist.children("dd").size()<1?!1:void $(document).on({keyup:function(t){if(!e.isvisible())return!1;var i=getKeyName(t),s=e.islast(),n=e.isfirst();if("up"==i&&!n){var a=e.$searchlist.eq(0).children("dd");if(a.first().hasClass("current"))a.first().removeClass("current"),e.$searchInput.focus();else{var o=e.$searchlist.children(".current");if(o.index()===e.$searchlist.children("dt").index()+1){var r=o.parent().index(),l=e.check_elements(r,"up");return o.removeClass("current"),l||0===l?(e.$searchlist.eq(l).children("dd").last().addClass("current"),!1):(e.$searchInput.focus(),!1)}o.prev("dd").addClass("current").siblings().removeClass("current")}}if("down"==i&&!s)if(n)e.$searchlist.children("dd").first().addClass("current"),e.$searchInput.blur();else{var o=e.$searchlist.children(".current");if(o.index()===o.parent().children().last().index()){var r=o.parent().index(),l=e.check_elements(r);return l?(o.removeClass("current"),e.$searchlist.eq(l).children("dd").first().addClass("current"),!1):!1}o.next("dd").addClass("current").siblings().removeClass("current")}if("enter"==i&&!n){var h=e.$searchlist.find(".current a").attr("href");location.href=h}t.preventDefault()}})},SearchKeyEvent.prototype.check_mutil=function(){return this.$searchlist.size()>1?!0:!1},SearchKeyEvent.prototype.isvisible=function(){return this.$searchlist.first().is(":visible")},SearchKeyEvent.prototype.isfirst=function(){return this.$searchlist.children().hasClass("current")?!1:!0},SearchKeyEvent.prototype.islast=function(){return this.$searchlist.last().children().last().hasClass("current")?!0:!1},SearchKeyEvent.prototype.check_elements=function(e,t){if("up"===t)for(;e--;){if(this.$searchlist.eq(e).children("dd").size()>0)return e;if(0==e)return!1}else for(;++e;){if(this.$searchlist.eq(e).children("dd").size()>0)return e;if(e>=this.$searchlist.size())return!1}},SearchKeyEvent.prototype.enbleWheel=function(){$(window).scrollTop(this.limitHeight),$("html").removeClass("limit-content"),$("#vivo-head-wrap").next().css({marginTop:""})},SearchKeyEvent.prototype.unenbleWheel=function(){this.limitHeight=$(window).scrollTop(),$("html").addClass("limit-content"),$("#vivo-head-wrap").next().css({marginTop:-this.limitHeight})};var searchkeyevent=new SearchKeyEvent({wrap:"#vivo-head-wrap .v_h_search",input:".search-top input",list:".search-content"}),Search={getKey:function(){$.ajax({type:"get",url:searchUrlConfig.getKeyWords,dataType:"jsonp",jsonp:"jsoncallback",success:function(e){e.keyWord&&($input.attr("placeholder",e.keyWord),$input.attr("data-keydata","true"))}})}(),init:function(){function e(e){if(!$box.hasClass("openSearch"))return!1;e=window.event||e;var i=$(e.srcElement||e.target);$(i).is($input)||$(i).parents("dl").is($link)||$(i).parent().is(r)||$(i).is($searchOpen)||$(i).parents("section").is($searchResults)||t.close()}var t=this,i=new TimelineMax({paused:!0}),s=new TimelineMax({paused:!0});s.staggerFrom($link.children(),.45,{y:-25,autoAlpha:0,ease:Ease.easeInOut},.1,"+=.3"),i.from($searchBox,.7,{autoAlpha:0},0).to($searchOpen,.5,{x:"-=50"},.2).to($searchClose,.3,{scale:1,rotation:180},.2).to($userBtn,.1,{autoAlpha:0},0).from($input,.2,{x:0,autoAlpha:0},.6);for(var n=$title.size(),a=n;a>=0;a--)i.add(TweenMax.to($title.eq(a).find("a"),.2,{scale:0}),.04*(n-a));$mresults.hide();var o=$("#gb-mask-layer");TweenMax.set($searchBox,{display:"block"}),TweenMax.set(o,{display:"none",autoAlpha:0}),t.play=!1;var r=$("#vivo-high-switch");$searchOpen.mouseleave(function(){$searchOpen.removeClass("leave")}),$searchOpen.click(function(){if($searchOpen.addClass("leave"),searchkeyevent.unenbleWheel(),$box.hasClass("openSearch"))return curl($input.val(),$input.data("keydata"),$input.attr("placeholder")),!1;var n=$box.find(".vivo-head").hasClass("openUser");n&&UserControl(n),t.play=!0,i.timeScale(1.5).play(),TweenMax.to(o,.2,{display:"block",autoAlpha:1},0),setTimeout(function(){$box.addClass("openSearch"),$input.focus(),$(document).on("click",function(t){$box.hasClass("openSearch")&&e(t)})},500),$link.find("dd").size()>0&&(TweenMax.set($contentBox,{display:"block"}),TweenMax.to($contentBox,.3,{autoAlpha:1,ease:Ease.easeIn},.4),s.seek(0).timeScale(1.5).play())}),$searchClose.click(function(){$searchOpen.removeClass("leave"),searchkeyevent.enbleWheel(),$(document).off("click"),i.timeScale(1.5).reverse(),TweenMax.to($contentBox,.3,{autoAlpha:0,onComplete:function(){TweenMax.set($contentBox,{display:"none"}),t.SearchControl(!1,self.ismobile)}}),TweenMax.to(o,.2,{display:"none",autoAlpha:0},0),t.play=!1,$(document).off("click"),$box.removeClass("openSearch Searching"),$mresults.hide()})},SearchPlay:function(){function e(){$input.keyup(function(e){var s="37"==e.which||"38"==e.which||"39"==e.which;if(s)return!1;var n=$(this).val(),a=n.replace(/(^\s+)|(\s+$)/g,"")?n.replace(/\s/g,""):n,o=a.indexOf(" ")>-1;"13"==e.which||"108"==e.which?!o&&curl(a,$input.data("keydata"),$input.attr("placeholder")):"40"!=e.which&&(""==a?i.SearchControl(!1,self.ismobile):o?i.SearchControl(!1,self.ismobile):t(a))})}function t(e){return e?void $.ajax({type:"get",url:searchUrlConfig.getAssciate+"?query="+e,dataType:"jsonp",jsonp:"jsoncallback",success:function(t){t.result.keyword=e;var s=SearchBuild.ContentBuild(t.result);s&&i.SearchControl(s,self.ismobile)}}):!1}var i=this;$input.on({compositionstart:function(){$input.off("keyup")},compositionend:function(){t($(this).val()),e()}}),e()},SearchControl:function(e,t){if(e)if(t)$mmenulist.hide(),$mresults.empty().html(e).show();else{$link.hide(),$box.addClass("Searching"),$searchResults.empty().html(e).show();{new SearchKeyEvent({wrap:"#vivo-head-wrap .v_h_search",input:".search-top input",list:".search-content .results"})}}else t?($mresults.empty().html(e).hide(),$mmenulist.show(),$input.val("")):($searchResults.empty().html(e).hide(),$link.show())},MobileFun:function(){var e=this;e.Recovery()},open:function(){$searchOpen.click()},close:function(){$searchClose.click()},Recovery:function(){var e=this;e.SearchControl(!1,self.ismobile),$input.attr("style",""),$searchClose.click(),$searchOpen.off("click"),$searchClose.off("click"),$(document).off("click")}};Search.init();var $headDom=$("#vivo-head-wrap"),$stage=$headDom.find(".gb-vivo-head"),$userBtn=$(".nav-t-user"),$userList=$(".v_h_usercenter"),$muenBtn=$(".gb-vivo-h-menu"),listAnt=new TimelineMax({paused:!0});listAnt.staggerFrom($userList.find("li"),.45,{y:-25,autoAlpha:0,ease:Ease.easeInOut},.1,"+=0.6");var isplay=!0,Header={init:function(){$navList=$(".gb-vivo-h-nav");var e=$("#vivo-head-wrap"),t='<i id="gb-mask-layer"></i>';e.parent().append(t);var i=this;Search.SearchPlay(),$userList.mouseenter(function(){isplay=!1,isplay&&i.UserControl(!1),clearTimeout(i._userTime)}),$userList.mouseleave(function(){i.UserControl(!0),isplay=!1,i._userTime=setTimeout(function(){isplay=!0},400)}),i.AddEvent()},AddEvent:function(){var e=this;$userBtn.mouseenter(function(){return $stage.hasClass("openMenu openSearch")?!1:($stage.removeClass("openMenu"),clearTimeout(e._userTime),isplay=!0,void e.UserControl(!1))}),$userBtn.mouseleave(function(){e._userTime=setTimeout(function(){e.UserControl(!0)},300)})},UserControl:function(e,t){var i=this,s=$("#gb-mask-layer");e?($userBtn.removeClass("current"),$stage.removeClass("openUser"),TweenMax.to(s,.3,{autoAlpha:0,onComplete:function(){TweenMax.set(s,{display:"none"})}},.1),TweenMax.to($userList,.3,{autoAlpha:0,onComplete:function(){TweenMax.set($userList,{display:"none"})}}),i._tmout=setTimeout(function(){listAnt.seek(0).pause()},300),$("html").removeClass("limit-content")):(self.ismobile&&($("html").addClass("limit-content"),$userBtn.addClass("current")),self.mMuenOpen&&$muenBtn.click(),clearTimeout(i._tmout),$stage.addClass("openUser"),t?(TweenMax.set(s,{display:"block",autoAlpha:1}),TweenMax.set($userList,{display:"block",autoAlpha:1}),listAnt.seek(2)):(TweenMax.to(s,.3,{display:"block",autoAlpha:1},.1),TweenMax.to($userList,.3,{display:"block",autoAlpha:1,ease:Ease.easeIn}),listAnt.seek(0).timeScale(1.5).play()))},Recovery:function(){$userBtn.off("mouseenter mouseleave")}};Header.init(),initHomeLogin($("#J_login_home_head"));var $followBox=$(".gb-foot-copyright"),$followList=$followBox.find(".follow-list"),$followDom=$followList.find("li"),$followBtn=$followBox.find(".follow_btn"),$langBtn=$followBox.find(".lang_btn"),$langList=$followBox.find(".lang-list"),$langDom=$langList.find("li"),$wechatBtn=$(".wechat-follow"),$aliBtn=$(".ali-follow"),$follow_box=$(".vivo-follow-toast"),Foot={init:function(){var e=this;e.followAnt=new TimelineMax({paused:!0}),e.followAnt.staggerFrom($followDom,.1,{y:50,autoAlpha:0,ease:Ease.easeOut},.02,"-=0.01"),e.langAnt=new TimelineMax({paused:!0}),e.langAnt.staggerFrom($langDom,.1,{y:50,autoAlpha:0,ease:Ease.easeOut},.02,"-=0.01"),e.AddEvent()},AddEvent:function(){var e=this;$followBtn.mouseenter(function(){e.FollowAntControl(!1)}),$followBtn.mouseleave(function(){e.FollowAntControl(!0)}),$followList.mouseleave(function(){e.FollowAntControl(!0)}),$langBtn.mouseenter(function(){e.LangAntControl(!1)}),$langBtn.mouseleave(function(){e.LangAntControl(!0)}),$langList.mouseleave(function(){e.LangAntControl(!0)}),$wechatBtn.click(function(e){e.preventDefault()}),$aliBtn.click(function(e){e.preventDefault()}),$wechatBtn.mouseenter(function(){$follow_box.removeClass("openAli").addClass("openWechat"),TweenMax.to($follow_box,.2,{autoAlpha:1,ease:Ease.easeOut})}),$wechatBtn.mouseleave(function(){TweenMax.to($follow_box,.1,{autoAlpha:0,ease:Ease.easeOut})}),$aliBtn.mouseenter(function(){$follow_box.removeClass("openWechat").addClass("openAli"),TweenMax.to($follow_box,.2,{autoAlpha:1,ease:Ease.easeOut})}),$aliBtn.mouseleave(function(){TweenMax.to($follow_box,.1,{autoAlpha:0,ease:Ease.easeOut})})},FollowAntControl:function(e){var t=this;e?(TweenMax.to($followList,.1,{autoAlpha:0,ease:Ease.easeOut,onComplete:function(){$followList.hide(),$follow_box.removeClass("openAli openWechat")}}),TweenMax.to($followList.siblings(".vivo-f-triangle"),.1,{autoAlpha:0,ease:Ease.easeOut}),t.followAnt.reverse()):(TweenMax.to($followList,.1,{display:"block",autoAlpha:1,ease:Ease.easeOut}),TweenMax.to($followList.siblings(".vivo-f-triangle"),.1,{autoAlpha:1,ease:Ease.easeOut}),t.followAnt.play())},LangAntControl:function(e){var t=this;e?(TweenMax.to($langList,.1,{autoAlpha:0,ease:Ease.easeOut,onComplete:function(){$langList.hide()}}),TweenMax.to($langList.siblings(".vivo-f-triangle"),.1,{autoAlpha:0,ease:Ease.easeOut}),t.langAnt.reverse()):(TweenMax.to($langList,.1,{display:"block",autoAlpha:1,ease:Ease.easeOut}),TweenMax.to($langList.siblings(".vivo-f-triangle"),.1,{autoAlpha:1,ease:Ease.easeOut}),t.langAnt.play())},Recovery:function(){$followBtn.off("mouseenter"),$langBtn.off("mouseenter"),$wechatBtn.off("mouseenter mouseleave click"),$aliBtn.off("mouseenter mouseleave click")}};Foot.init(),$("a[burying]").each(function(){var e=$(this),t={},i=e.attr("burying"),s=i.split("&");if(i){for(var n=0;n<s.length;n++){var a=s[n].split("=");t[a[0]]=a[1]}e.on("click",function(){t.pageview="官网首页",Vtrack.clickStats(t)})}e.removeAttr("burying")});