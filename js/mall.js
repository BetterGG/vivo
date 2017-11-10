/*********轮播图*****************************/
(()=>{
  /*轮播效果*/
  var timer = null, m=-1, TRANS=300,INTERVAL=2000,
      $pics = $(".banner-pics"),$inds= $(".banner-btns");
  function moveOnce(n) {
    setTimeout(()=>{
      n++;
      var i = n%4;
      m=n;
      $pics.children().eq(i).addClass("active").siblings().removeClass("active");
      $inds.children().eq(i).addClass("active").siblings().removeClass("active");
    },TRANS)
  }
  var timer = setInterval(function () {
    moveOnce(m);
  },INTERVAL+TRANS);
  $pics.mouseover(()=>{
    clearInterval(timer);
    timer=null;
  });
  $pics.mouseout(function(){
    timer=setInterval(function(){
      moveOnce(m)
    },INTERVAL+TRANS);
  });
  $(".ban-btn").click(function () {
    $this = $(this);
    var i = $this.index();
    $pics.children().eq(i).addClass("active");
    $this.addClass("active").siblings().removeClass("active");
  })
})();
/*********右下楼梯***********/
$(".stairs li").hover(function () {
  $this = $(this);
  var i = $this.index();
  $this.parent().next().children().eq(i).children().show();
  },function () {
    $this = $(this);
    var i = $this.index();
    $this.parent().next().children().eq(i).children().hide();
  }
);
/**********引入 header*************************/
(()=>{
  /********引入 header 1*****************/
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
  /********引入 header 2*****************/
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
/***************手机图 显示效果**********************************/
function changeDiv(obj) {
  $(obj).hover(
      function () {
        $this = $(this);
        $this.children().last().children().first().hide();
        $this.children().last().children().last().show();
      },
      function () {
        $this = $(this);
        $this.children().last().children().first().show();
        $this.children().last().children().last().hide();
      }
  )
}
changeDiv(".hot-pic");
changeDiv(".fit-box");
/*************** 动态加载 商品图******************************************/
function showPics(data,length,picType) {
  var html = "";
  for(var i=0;i<length;i++){
    html += ``
  }
}
(()=>{
  $.ajax({
    url:"data/mall.php",
    success:function (data) {
      console.log(data);
      // var html = shpwPics(data,4,"carouselItems")
      var html = "";
      for(var i=0;i<data['carouselItems'].length;i++){
        html += `<li class="banner-big pic${i+1}">
            <a href="javascript:;">
              <img src="${data['carouselItems'][i]['banner_pic']}" alt="">
            </a>
          </li>`
      };
      $(".banner-pics").append(html);
      // $(".banner-pics").children().first().css("class","active");
    },
    error:function () {
      alert("网络故障")
    }
  })
})();


