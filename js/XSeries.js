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
//轮播图效果
(()=>{
  var box = $(".show-box"),n=0,i= box.children().size(),LIWIDTH=150;
  console.log(i);
  $(".prev").click(function () {
    if(n>=1){
      n--;
      box.css("left",-n*LIWIDTH);
    }
  })
  $(".next").click(function () {
    if(n<i-6){
      n++;
      box.css("left",-n*LIWIDTH);
    }
  })
})();