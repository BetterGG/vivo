(()=>{
  /**********引入 header 1********************/
  $.ajax({
    type:"GET",
    url:"header.html",
    success:function (data) {
      $(".header-putIn").html(data);
      headerJs();
    },
    error:function () {
      alert("网络故障");
    }
  });
  /**********引入 header 2********************/
  $.ajax({
    type:"GET",
    url:"header-second.html",
    success:function (data) {
      $(".head-commend").html(data);
    },
    error:function () {
      alert("网络故障");
    }
  });
  /**********引入 footer******************/
  $.ajax({
    type:"GET",
    url:"footer.html",
    success:function (data) {
      $(".footer").html(data);
    },
    error:function () {
      alert("网络故障");
    }
  })
})();
/*****************展示图下的小图事件**********************************/
$(".smalls>li").mouseover(function () {
  $this = $(this);
  var i = $this.index();
  $(".prev-pics").children().eq(i).fadeIn().siblings().fadeOut();
});
/*****************手机套餐选项*******************************/
  /******各个边框的 click事件********/
$(".ph-choices dd").click(function (){
  $(this).addClass("active").siblings().removeClass("active")
});
  /******选择套餐********/
$(".p-spec").click(function () {
  var i = $(this).index();
  $(".fit-box").show().children().eq(i-2).show().siblings().hide();
});
$(".standard").click(function () {
  $(".fit-box").hide();
});
  /*选择配件颜色*/


  /******手机服务*******/
$(".service-choice").hover(function () {
  $(this).children().last().show();
  $(this).children().first().children().last().addClass("active");
  }, function () {
    $(".service-hide").hide();
    $(".sc-dir").removeClass("active");
    if($(this).children().last().children().children().hasClass("active")){
      $(this).addClass("active");
    }else{
      $(this).removeClass("active");
    }
  });
$(".choice-which").click(function () {
  $(this).children().toggleClass("active");
  if($(".choice-which").children().hasClass("active")){
    $(this).parent().parent().addClass("active")
  }else{
    $(this).parent().parent().removeClass("active")
  }
});
  /*******数量改变********/
$(".dec").click(function () {
  var $tar =$(".count-change>input"),
      i = $tar.val();
  $(".add").css("opacity",1);
  if(i>1){
    $tar.val(--i);
    if(i<=1){
      $(".dec").css("opacity",.5)
    }
  }
});
$(".add").click(function () {
  var $tar =$(".count-change>input"),
      i = $tar.val();
    $(".dec").css("opacity",1);
  if(i<5){
    $tar.val(++i);
    if(i>=5){
      $(".add").css("opacity",.5);
    }
  }
});

  /*******花呗分期*******/
$(".mortgage-times").click(function(){
  $(this).toggleClass("active").siblings().removeClass("active");
  if($(".mortgage-times").hasClass("active")){
    $(".default-btn").addClass("active");
    $(".buy-mart").addClass("active");
  }else{
    $(".default-btn").removeClass("active");
    $(".buy-mart").removeClass("active");
  }
});
/***********下部分区域  选项卡*************************/
$(".sub-nav>a").click(function () {
  var i =$(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  $(".tab-box").children().eq(i).addClass("active").siblings().removeClass("active");
});
