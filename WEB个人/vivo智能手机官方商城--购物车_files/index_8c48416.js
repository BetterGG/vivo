function fixBottom(e){function t(){c.style.left="0px";var t=c.offsetTop>>0,r=s.clientHeight>>0,l=c.className,u=n.innerHeight||s.offsetHeight,d=s.scrollTop||o.body.scrollTop,f=n.pageYOffset?n.pageYOffset:d;c.className=f+u-a>=i?e.defClass:t>r?l+" "+e.fixedClass:l}var i,a,n=window,o=document,s=o.documentElement,c=o.getElementById(e.obj);return c?(a=c.offsetHeight,i=c.offsetTop,void $(window).on({scroll:t,resize:t}).trigger("resize")):!1}$(function(){var e,t={},i={init:function(){e=this,e.initEvent(),e.initPageView(),e.calculateTotal(),fixBottom({obj:"fixed-bottom-bar",defClass:"cart-toolbar-wrap",fixedClass:"fixed-bottom"})},initEvent:function(){function i(e){var t=e.closest(".J_viewWrap"),i=t.attr("data-uniqueCode"),a=$(".prod-attach-wrap[data-attachcode="+i+"]");a.find("tr").size()>0?(a.show(),e.find(".tip-arrow").show()):(a.hide(),e.find(".tip-arrow").hide())}function a(t){var i,a,n=$(this).closest(".J_viewWrap"),o=n.find(".J_servicePanel"),s=n.find(".J_viewInfo").attr("data-uniqueCode"),c=n.next('[data-attachCode="'+s+'"]'),r=c.find(".J_attachTable"),l=[],u={submitUrl:"/shoppingcart/cartEdit",isAsync:!0,selectedServiceList:function(t){var i=[];return t.find(".J_serviceItem.on").each(function(t){var a=e.initSimpleSku($(this).find(".J_serviceInfo"));0==t&&(a._index=0),a.salePrice=a.salePrice.toFixed(2),i.push(a)}),i},dealResult:function(i){if(200==i.retCode){e.changeViewStatus(n,0,"",null),e.changAllStatus(),r.find(".J_selServiceTr").remove();for(var o=[],s=0;s<a.length;s++)o.push(template("J_template_service",a[s]));r.prepend(o),e.calculateViewAndTotalAmount(n)}else if(i.retMsg.match("^{(.+:.+,*){1,}}$")){var c=$.parseJSON(i.retMsg);e.changeViewStatus(n,c.operate,c.tip,c.msg)}else e.changeViewStatus(n,2,"",i.retMsg);t&&t()}};i=e.groupConfirmParameter(n),a=u.selectedServiceList(o);for(var d=0;d<a.length;d++)l.push(a[d].skuId);i.sSkuIds=l,e.confirmSimpleAjax(i,u)}$(".J_goShopping").on("click",function(){window.location=webCtx+"/index.html"}),$(".J_viewCheckAll").find(".checkbox").on("click.checkAll",function(){var t=$(this);t.hasClass("invalid")||(t.hasClass("checked")?($(".J_viewCheckAll").find(".checkbox").removeClass("checked"),$(".J_viewCheckBox").removeClass("checked")):($(".J_viewCheckAll").find(".checkbox").addClass("checked"),$(".J_viewCheckBox").each(function(){t.hasClass("invalid")||$(this).addClass("checked")})),e.calculateTotal())}),$(".J_viewCheckAll").click(function(e){"I"!=e.target.tagName.toUpperCase()&&$(this).find(".checkbox").trigger("click.checkAll"),e.stopPropagation()}),$(".J_viewCheckBox").on("click.checkView",function(){$(this).hasClass("invalid")||($(this).hasClass("checked")?($(this).removeClass("checked"),$(".J_viewCheckAll").find(".checkbox").removeClass("checked")):$(this).addClass("checked"),e.changAllStatus(),e.calculateTotal())});var n=null,o=!1;$(".J_serviceItem").on("click",function(e){var t=$(this),i=t.attr("data-index"),a=t.html(),n=t.closest(".cart-service-tags-item");t.hasClass("on")?(t.removeClass("on"),n.removeClass("on").find(".service-item-hd").attr("data-index",i).children("label").html(a)):(t.hasClass("broken")?$(".broken").removeClass("on"):$(".delay").removeClass("on"),t.addClass("on"),n.addClass("on").find(".service-item-hd").attr("data-index",i).children("label").html(a)),t.closest(".child-list").hide(),setTimeout(function(){t.closest(".child-list")[0].style.cssText=""},300),e.stopPropagation()}),$(".cart-service-tags-item").on("click",function(){var e=$(this),t=e.find(".service-item-hd").attr("data-index"),i=e.find(".J_serviceItem").eq(t);e.hasClass("on")?(e.removeClass("on"),i.removeClass("on")):(e.addClass("on"),i.addClass("on"))}).on("selectstart",!1);var s=$(".J_serviceTable"),c=$(".J_servicePanel"),r=$("#gb-mask-layer");r.click(function(t){if(o)return!1;var i=c.filter(":visible");e.closeServicePanel(i.closest(".J_viewWrap")),c.parent().css({"z-index":2}),t.stopPropagation()}),s.bind({click:function(t){if(o)return!1;clearTimeout(n);var i=$(this),a=i.find(".J_servicePanel");s.css("zIndex",1),i.css({"z-index":101}),e.closeServicePanel(s),e.serviceResizeToPanelChecked(a),a.show(),TweenMax.to(r,.2,{"z-index":100,display:"block",autoAlpha:.1},0),t.stopPropagation()}}),s.each(function(){var t=$(this),i=t.find(".J_servicePanel");e.serviceResizeToPanelChecked(i)}),c.bind({click:function(e){e.stopPropagation()},mouseover:function(e){return o?!1:(clearTimeout(n),$(this).parent().css({"z-index":101}),void e.stopPropagation())}}),$(".J_serviceCancelBtn").on("click",function(t){e.closeServicePanel($(this).closest(".J_serviceTable")),t.stopPropagation()}),$(document).on("click",".close-font",function(){var t=$(this).closest(".J_selServiceTr"),n=e.initSimpleSku(t.find(".J_selServiceInfo")),o=t.closest(".prod-attach-wrap").attr("data-attachCode"),s=$(".J_viewWrap[data-uniqueCode="+o+"]"),c=s.find(".J_serviceItem").filter('[data-skuid="'+n.skuId+'"]'),r=c.closest(".J_viewWrap");c.removeClass("on"),a.call(c,function(){i(r)})}),$(".J_serviceConfirmBtn").on("click",function(){if(o)return!1;var t=$(this);if(!t.hasClass("invalid")&&!t.hasClass("btn--wait")){t.addClass("btn--wait"),o=!0;var n=t.closest(".prod-line");a.call(this,function(){e.closeServicePanel(s),$(".btn--wait").removeClass("btn--wait"),i(n),o=!1})}}),$(".J_reduceNum").on("click",function(){if(!$(this).hasClass("invalid")){var t=$(this).closest(".J_viewWrap"),i=t.find(".J_viewNum"),a=parseInt(i.val());1>=a||e.changeViewNum($(this).closest(".J_viewWrap"),-1)}}),$(".J_addNum").on("click",function(){if(!$(this).hasClass("invalid")){var t=$(this).closest(".J_viewWrap"),i=t.find(".J_viewNum"),a=parseInt(i.val());return a>=normalCommodityNumLimit?void new Dialog({confirmBtn:!0,content:"温馨提示:商品数量不可以超过"+normalCommodityNumLimit+"件！"}).show():void e.changeViewNum(t,1)}}),$(".J_viewNum").on("blur",function(){if(!$(this).hasClass("invalid")){var t=parseInt($(this).val());isNaN(t)&&($(this).val(1),new Dialog({confirmBtn:!0,content:"温馨提示:请填写数字！"}).show()),0>=t&&($(this).val(1),new Dialog({confirmBtn:!0,content:"温馨提示:请填写正整数！"}).show()),t>normalCommodityNumLimit&&($(this).val(1),new Dialog({confirmBtn:!0,content:"温馨提示:商品数量不可以超过"+normalCommodityNumLimit+"件！"}).show()),e.changeViewNum($(this).closest(".J_viewWrap"),null)}}),$(".J_delSingle").on("click",function(){var t=$(this).closest(".J_viewWrap"),i=t.find(".J_viewInfo").attr("data-uniqueCode"),a=t.next('[data-attachCode="'+i+'"]'),n={uniqueCodes:i},o={dialogTitle:"提示信息",dialogContent:"确定将该商品从购物车中删除吗？",dialogConfirm:function(){var i={submitUrl:"/shoppingcart/cartDel",isAsync:!0,dealResult:function(i){if(200==i.retCode)return e.noneViewRefreshPage(1),t.remove(),a.remove(),e.calculateTotal(),e.refreshShopCartNumFromCookie(),void e.changAllStatus();if(i.retMsg.match("^{(.+:.+,*){1,}}$")){var n=$.parseJSON(i.retMsg);e.changeViewStatus(t,n.operate,n.tip,n.msg)}else e.changeViewStatus(t,2,null,i.retMsg)}};e.confirmSimpleAjax(n,i)}};e.confirmDialogSimple(n,o)}),$(".J_delMultiple").on("click",function(){var i=$(".J_viewCheckBox.checked");if(0==i.length)return void new Dialog({confirmBtn:!0,cancelBtn:!0,title:"至少选中一种商品",icon:"warning"});var a=[],n=[];i.each(function(){var e=$(this).attr("data-uniqueCode");a.push(e),$(this).closest(".J_viewWrap").find(".J_favorite").length>0&&n.push(t[e].mainSku.skuId)});var o={uniqueCodes:a},s={dialogTitle:"是否删除商品？",dialogConfirmText:"删除",dialogCancelText:"移入收藏夹",dialogContent:"您可以选中移到我的收藏，或删除商品",dialogConfirm:function(){var t={submitUrl:"/shoppingcart/cartDel",isAsync:!0,dealResult:function(t){if(200==t.retCode&&e.refreshPage(),t.retMsg.match("^{(.+:.+,*){1,}}$")){var i=$.parseJSON(t.retMsg);e.changeViewStatus(null,i.operate,null,i.msg)}else e.changeViewStatus(null,null,null,t.retMsg)}};e.confirmSimpleAjax(o,t)},dialogCancel:function(){if(!LoginConfirm.isLogin())return void LoginConfirm.redirect();if(n.length>0){var t={submitUrl:"/my/favorite/add",isAsync:!0,dealResult:function(){}};e.confirmSimpleAjax({goodsIds:n},t)}s.dialogConfirm()}};e.confirmDialogNormal({uniqueCodes:a},s)}),$(".J_favorite").on("click",function(){if(!LoginConfirm.isLogin())return void LoginConfirm.redirect();var i=$(this).attr("data-skuId"),a=$(".J_favorite[data-skuId="+i+"]"),n=$(this).attr("data-uniqueCode"),o={submitUrl:"/my/favorite/add",isAsync:!0,dealResult:function(){var e=new Dialog({content:"收藏成功！可到个人中心-我的收藏查看！",icon:"success"});e.show(),setTimeout(function(){e.hide()},3e3),a.replaceWith($("<span>已收藏</span>"))}};e.confirmSimpleAjax({goodsId:t[n].mainSku.skuId},o)}),$(".J_favoriteMultiple").on("click",function(){var i=$(".J_viewCheckBox.checked");if(0==i.length)return void new Dialog({confirmBtn:!0,cancelBtn:!0,title:"至少选中一种商品",icon:"warning"});if(!LoginConfirm.isLogin())return void LoginConfirm.redirect();var a=[],n=[];i.each(function(){var e=$(this).attr("data-uniqueCode");a.push(e),$(this).closest(".J_viewWrap").find(".J_favorite").length>0&&n.push(t[e].mainSku.skuId)});var o={dialogTitle:"是否移入收藏夹？",dialogContent:"移动后选中商品将不在购物车中显示",dialogConfirm:function(){if(n.length>0){var t={submitUrl:"/my/favorite/add",isAsync:!0,dealResult:function(){}};e.confirmSimpleAjax({goodsIds:n},t)}this.delConfirm()},delConfirm:function(){var t={submitUrl:"/shoppingcart/cartDel",isAsync:!0,dealResult:function(t){if(200==t.retCode&&e.refreshPage(),t.retMsg.match("^{(.+:.+,*){1,}}$")){var i=$.parseJSON(t.retMsg);e.changeViewStatus(null,i.operate,null,null)}else e.changeViewStatus(null,null,null,t.retMsg)}};e.confirmSimpleAjax({uniqueCodes:a},t)}};e.confirmDialogSimple({uniqueCodes:a},o)}),$(".J_btnConfirm").on("click",function(){var t=$(this);if(t.hasClass("btn--wait"))return!1;var i=$(".J_viewCheckBox.checked");if(0==i.length)return void new Dialog({confirmBtn:!0,cancelBtn:!0,title:"至少选中一种商品",icon:"warning"});var a=[],n=[],o=[],s=!0,c=!0;t.addClass("btn--wait"),i.each(function(){var i=$(this).closest(".J_viewWrap");o.push(i),n.push($(this).attr("data-uniqueCode"));var r={submitUrl:"/shoppingcart/sufficient",isAsync:!0,dealResult:function(a){if(200==a.retCode)return void e.changeViewStatus(i,0,null,null);if(a.retMsg.match("^{(.+:.+,*){1,}}$")){c=!1;var n=$.parseJSON(a.retMsg);return e.changeViewStatus(i,n.operate,n.tip,null),void t.removeClass("btn--wait")}s=!1}};a.push(e.confirmSimpleAjax(e.groupConfirmParameter(i),r))}),$.when.apply(null,a).done(function(){return e.changAllStatus(),s?c?e.checkSameSkuStore(o,n)?void(window.location.href=webCtx+"/order/cart/confirm?uniqueCodes="+n+"#source_from=1"):void e.calculateTotal():(new Dialog({confirmBtn:!0,content:"温馨提示:您所选购的部分商品暂时不能购买！"}).show(),void e.calculateTotal()):void new Dialog({confirmBtn:!0,content:"温馨提示:当前服务器太忙，请稍后重试！"}).show()})})},checkSameSkuStore:function(t,i){var a=e.getSameSkuStore(t,i),n=[],o=[];for(var s in a)n.push(s),o.push(a[s]);if(0==n.length||0==o.length)return!0;var c=!1,r={submitUrl:"/shoppingcart/sufficientStore",isAsync:!1,dealResult:function(t){if(200==t.retCode)c=!0;else{if(t.retMsg.match("^{(.+:.+,*){1,}}$")){var i=$.parseJSON(t.retMsg);e.changeViewStatus(null,null,null,i.msg)}else e.changeViewStatus(null,null,null,t.retMsg);e.cancelCheckBoxSelect()}}};return e.confirmSimpleAjax({skuIds:n,nums:o},r),c},getSameSkuStore:function(e,i){for(var a,n={},o={},s=0;s<e.length;s++){var c=e[s],r=t[i[s]],l=parseInt(c.find(".J_viewNum").val());if(a=r.mainSku.skuId,null==n[a]?n[a]=l:(n[a]+=l,o[a]=n[a]),2==r.cartType)for(var u=0;u<r.bundleList.length;u++)a=r.bundleList[u].skuId,null==n[a]?n[a]=l:(n[a]+=l,o[a]=n[a])}return o},changeViewStatus:function(t,i,a,n){if(null!=t)var o=t.find(".J_operate"),s=t.find(".J_viewCheckBox"),c=t.find(".J_viewNum"),r=t.find(".J_tip");null!=a&&(""==a?(r.text(""),r.hide()):(r.text(a),r.show())),null!=n&&new Dialog({confirmBtn:!0,content:"温馨提示:"+n}).show(),0==i&&(o.removeClass("invalid"),c.removeAttr("readonly")),1==i&&(o.addClass("invalid"),s.removeClass("checked"),c.attr("readonly","readonly")),2==i&&s.removeClass("checked"),3==i&&(new Dialog({confirmBtn:!0,content:"温馨提示:登录状态变更，即将刷新页面！",confirmCallback:function(){e.refreshPage()}}).show(),setTimeout(function(){e.refreshPage()},3e3))},cancelCheckBoxSelect:function(){$(".J_viewCheckAll .checkbox, .J_viewCheckBox").removeClass("checked")},changAllStatus:function(){var e=!0,t=!0,i=$(".J_viewCheckAll .checkbox");$(".J_viewCheckBox").each(function(){$(this).hasClass("invalid")||(t=!1,$(this).hasClass("checked")||(e=!1))}),(t||!e)&&i.removeClass("checked"),t&&i.addClass("invalid"),!t&&e&&i.addClass("checked")},noneViewRefreshPage:function(t){$(".J_viewWrap").length<=t&&e.refreshPage()},refreshPage:function(){window.location.href=webCtx+"/shoppingcart"},changeViewNum:function(t,i){var a=t.find(".J_viewNum"),n=!0,o=parseInt(a.val());if(null!=i){var s=o+i;s=s>normalCommodityNumLimit?normalCommodityNumLimit:s,s=1>s?1:s,n=s!=o,o=s}if(n){var c=e.groupConfirmParameter(t);c.num=o;var r={submitUrl:"/shoppingcart/cartEdit",isAsync:!0,dealResult:function(i){if(200==i.retCode)a.val(o),e.changeViewStatus(t,0,"",null);else if(i.retMsg.match("^{(.+:.+,*){1,}}$")){var n=$.parseJSON(i.retMsg);e.changeViewStatus(t,n.operate,n.tip,n.msg)}else e.changeViewStatus(t,null,null,i.retMsg);e.changAllStatus(),e.calculateViewAndTotalAmount(t),e.refreshShopCartNumFromCookie()}};e.confirmSimpleAjax(c,r)}},closeServicePanel:function(e){e.find(".J_servicePanel").hide(),TweenMax.to($("#gb-mask-layer"),.2,{"z-index":19,display:"none",autoAlpha:0},0)},serviceResizeToPanelChecked:function(t){var i=t.closest(".J_viewWrap"),a=i.find(".J_viewInfo").attr("data-uniqueCode"),n=i.next('[data-attachCode="'+a+'"]'),o="";t.find(".J_serviceItem").removeClass("on"),t.find(".cart-service-tags-item").removeClass("on"),n.find(".J_selServiceInfo").each(function(){var i=e.initSimpleSku($(this)),a=t.find(".J_serviceItem[data-skuId="+$(this).attr("data-skuId")+"]");o='<i class="seritem-icon"></i>'+i.name+' <span class="item-price"><dfn>&yen;</dfn>'+i.salePrice.toFixed(2)+"</span>",a.addClass("on");var n=a.index();a.closest(".cart-service-tags-item").addClass("on").find(".service-item-hd").attr("data-index",n).children("label").html(o)})},confirmSimpleAjax:function(e,t){return $.ajax({url:webCtx+t.submitUrl,type:"POST",async:t.isAsync,traditional:!0,data:e,success:function(e){t.dealResult(e)}})},confirmDialogSimple:function(e,t){new Dialog({confirmBtn:!0,cancelBtn:!0,title:t.dialogTitle,content:t.dialogContent,icon:t.icon||"warning",confirmCallback:function(){t.dialogConfirm(e)}}).show()},confirmDialogNormal:function(e,t){new Dialog({confirmBtn:!0,cancelBtn:!0,title:t.dialogTitle,confirmText:t.dialogConfirmText,cancelText:t.dialogCancelText,content:t.dialogContent,icon:"warning",confirmCallback:function(){t.dialogConfirm(e)},cancelCallback:function(){t.dialogCancel(e)}}).show()},groupConfirmParameter:function(e){var i=e.find(".J_viewInfo").attr("data-uniqueCode"),a=t[i],n=parseInt(e.find(".J_viewNum").val()),o=e.next('[data-attachCode="'+a.uniqueCode+'"]'),s=[];o.find(".J_selServiceInfo").each(function(){s.push($(this).attr("data-skuId"))});var c=[];if(2==a.cartType)for(var r=0;r<a.bundleList.length;r++)c.push(a.bundleList[r].skuId);return{cartType:a.cartType,num:n,skuId:a.mainSku.skuId,sSkuIds:s,suiteCode:a.suiteCode,bSkuIds:c}},refreshShopCartNumFromCookie:function(){$(document).trigger("updateShopcartNum")},calculateViewAndTotalAmount:function(t){e.calculateViewAmount(t,null),e.calculateTotal()},calculateViewAmount:function(i,a){null==a&&(a=t[i.find(".J_viewInfo").attr("data-uniqueCode")]);var n,o=0,s=0,c=0,r=parseInt(i.find(".J_viewNum").val());o+=a.viewVcoin,s+=a.viewMarketPrice,c+=a.viewSalePrice;var l=i.next('[data-attachCode="'+a.uniqueCode+'"]');l.find(".J_selServiceInfo").each(function(){var t=e.initSimpleSku($(this));o+=t.vcoin,s+=t.salePrice,c+=t.salePrice}),o*=r,s*=r,c*=r,n=s-c,i.find(".J_viewMarketPrice").val(s.toFixed(2)),i.find(".J_viewDiscount").text(0==n?n.toFixed(2):"- "+n.toFixed(2)),i.find(".J_viewVcoin").text(o),i.find(".J_viewSalePrice").text(c.toFixed(2))},calculateTotal:function(){var e,i=0,a=0,n=0;$(".J_viewCheckBox.checked").each(function(){var e=$(this).closest(".J_viewWrap"),o=e.find(".J_viewInfo").attr("data-uniqueCode"),s=t[o],c=parseInt(e.find(".J_viewNum").val()),r=1==s.cartType?1:1+s.bundleList.length;a+=r*c,n+=parseFloat(e.find(".J_viewMarketPrice").val()),i+=parseFloat(e.find(".J_viewSalePrice").text())}),e=n-i,$("#J_totalMarketPrice").text(n.toFixed(2)),$("#J_totalSalePrice").text(i.toFixed(2)),$("#J_totalDiscount").text(e.toFixed(2)),$("#J_totalSkuNum").text(a)},initPageView:function(){$(".J_viewWrap").each(function(){var i=$(this),a=e.initView(i);e.initSkuView(i,a),t[a.uniqueCode]=a}),e.changAllStatus()},initSkuView:function(t,i){e.calculateViewAmount(t,i);var a=i.suiteStatus;(1==i.cartType||0==a)&&(a=e.checkSimpleSkuStatus(i.mainSku));var n=e.getTipByStatus(i.cartType,i.viewStore,a);0!=a?e.changeViewStatus(t,1,n,null):(e.changeViewStatus(t,0,n,null),t.find(".J_viewCheckBox").addClass("checked")),i.viewStatus=a},checkSimpleSkuStatus:function(e){return 0==e.disabled?4:0==e.marketable?3:0==e.fullpay?6:0==e.store?2:0},getTipByStatus:function(e,t,i){var a=null;return 1==e?6==i?a="商品已更新！":2==i?a="无库存！":3==i?a="已下架！":4==i?a="商品已删除！":5>=t&&(a="仅剩"+t+"件！"):0!=i&&(1==i?a="套餐已更新！":2==i?a="套餐无库存！":3==i?a="套餐内商品已下架！":4==i?a="套餐内商品已删除！":6==i&&(a="套餐内商品已更新！")),a},initView:function(e){var t,i=this,a={},n=e.find(".J_viewInfo"),o=0,s=0,c=0;a.uniqueCode=n.attr("data-uniqueCode"),a.cartType=n.attr("data-cartType"),a.mainSku=i.initSimpleSku(e.find(".J_mainInfo")),1==a.cartType&&(o+=a.mainSku.vcoin),s+=a.mainSku.marketPrice,c+=a.mainSku.salePrice,t=a.mainSku.store;var r=[];e.find(".J_giftInfo").each(function(){var e=i.initSimpleSku($(this));r.push(e)}),a.giftList=r;var l=[];if(e.find(".J_serviceInfo").each(function(){l.push(i.initSimpleSku($(this)))}),a.serviceList=l,2==a.cartType){a.suiteCode=n.attr("data-suiteCode"),a.suiteDiscount=parseFloat(n.attr("data-suiteDiscount")),a.suiteVcoin=parseInt(n.attr("data-suiteVcoin")),a.suiteStatus=n.attr("data-suiteStatus"),o+=a.suiteVcoin,c-=a.suiteDiscount;var u=[],d=e.next('[data-attachCode="'+a.uniqueCode+'"]');d.find(".J_bundleInfo").each(function(){var e=i.initSimpleSku($(this));s+=e.marketPrice,c+=e.salePrice,t<e.store&&(t=e.store),u.push(e)}),a.bundleList=u}return a.viewStore=t,a.viewVcoin=o,a.viewMarketPrice=s,a.viewSalePrice=c,a},initSimpleSku:function(e){var t=[];return t.skuId=e.attr("data-skuId"),t.name=e.attr("data-name"),t.salePrice=parseFloat(e.attr("data-salePrice")),t.marketPrice=parseFloat(e.attr("data-marketPrice")),t.vcoin=parseInt(e.attr("data-vcoin")),t.marketable=e.attr("data-marketable"),t.disabled=e.attr("data-disabled"),t.fullpay=e.attr("data-fullpay"),t.store=e.attr("data-store"),t.categoryId=e.attr("data-categoryId"),t}};i.init(),Vtrack(function(){this.clickStats({cfrom:5400,pageview:"商城购物车页",is_done:1}),$(window).on("beforeunload",function(){Vtrack.clickStats({cfrom:5400,pageview:"商城购物车页",lefttime:+new Date})})},function(){console.warn("失败")}),$("#side-bar").on("mouseup","li",function(){var e=$(this).attr("class"),t=3;switch(e){case"shopcart":t=1;break;case"service":t=2;break;case"feedback":t=4;break;case"backtop":t=5}Vtrack.clickStats({cfrom:5401,pageview:"商城购物车页",name:"浮动图标",position:t})})});