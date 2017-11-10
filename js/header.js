/*****最顶部 header*****/
function headerJs(){
  /*导航栏*/
  $(".recom").hover(function(){
      $this = $(this);
      $(".hide-head").fadeIn();
      $this.children().last().fadeIn();
      $this.siblings().children().last().fadeOut();
    },function(){
      $this = $(this);
      $this.children().last().fadeOut();
      $(".hide-head").fadeOut();
    }
  );

  /*导航栏尾 用户*/
  // $(".header-putIn").on("mouseover",".user",function (e) {
  //   e.preventDefault();
  //   $(".user-hide").fadeIn();
  //   $(".user-choices").fadeIn();
  //   console.log($(".user-hide"))
  // })

  $(".user").hover(e=>{
    $(".user-hide").fadeIn();
    $(".user-choices").fadeIn();
  },e=>{
    $(".user-hide").fadeOut();
    $(".user-choices").fadeOut();
  });
}