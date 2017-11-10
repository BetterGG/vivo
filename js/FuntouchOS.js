(()=> {
  /**********引入 header 1********************/
  $.ajax({
    type: "GET",
    url: "header.html",
    success: function (data) {
      $(".header-putIn").html(data);
      headerJs();
    },
    error: function () {
      alert("网络故障");
    }
  });
})();