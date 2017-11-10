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
    console.log($(".footer"));
    },
    error:function () {
      alert("网络故障");
    }
  })
})();