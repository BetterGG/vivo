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


/*banner部分*/
$(()=>{
	  var $img=$("[data-load=bannerImgs]");
	  var $indx=$("[data-load=bannerIdxs]");
	  var LIWIDTH=parseFloat($("#banner").css("width"));
	  var n=0,trans=300,WITE=5000;  //n:第0张图片,0.3s速度滑动,
	  var timer=null;

      $img.css("width",LIWIDTH*5);
      $indx.children().first().addClass("hover");
      
	  function bannerMove(){
			n++;
			var left = -n * LIWIDTH;
			$img.css("left", left);
			$indx.children().eq(n - 1).removeClass("hover");
			if (n === $img.children().size() - 1) {
				$indx.children().eq(0).addClass("hover");
				setTimeout(()=> {
					$img.css("transition", '');
					$img.css("left", 0);
					n = 0;
					setTimeout(()=> {
						$img.css("transition",'all .' + trans / 100 + 's linear');
					}, 100);
				}, trans);
			} else {
				$indx.children().eq(n).addClass("hover");
			}
	  }
		timer=setInterval(bannerMove,WITE);
	 //鼠标移入时
	 $("#banner").hover(
	 		()=>{clearInterval(timer);timer=null;},
		  ()=>{timer=setInterval(bannerMove,WITE)}
	 );
		
	 //当鼠标移入小圆点时
	 $indx.on("mouseenter","li",function(e){
	   var $num=$(e.target);
	   n=$num.index();
	   $img.css("left",-LIWIDTH*n);
	   $num.addClass("hover").siblings().removeClass("hover"); 
	 });

	 //点击左按钮
	 $(".ck-left").click(function (e) {
		e.preventDefault();
		if(n>0){
			n--;
			$img.css("left",-n*LIWIDTH);
			$indx.children().eq(n+1).removeClass("hover");
			$indx.children().eq(n).addClass("hover");
		}else{
			//快速将第一张切到最后一张
			$img.css("transition",'');
			n=$img.children().size()-1;
			$img.css("left",-n*LIWIDTH);

			setTimeout(()=>{
				$img.css("transition",
					'all .'+trans/100+'s linear');
				n--;
				$img.css("left",-n*LIWIDTH);
				$indx.children().eq(0).removeClass("hover");
				$indx.children().eq(n).addClass("hover");
			},100)
		}
   });

	//点击右按钮
	$(".ck-right").click(function (e) {
		e.preventDefault();
		//图片可以正常移动,多走1张图
		n++;
		$img.css("left",-n*LIWIDTH);
		if(n<$img.children().size()-1){
			$indx.children().eq(n-1).removeClass("hover");
			$indx.children().eq(n).addClass("hover");
		}else{
			$indx.children().last().removeClass("hover");
			$indx.children().first().addClass("hover");
			setTimeout(()=>{
				$img.css("transition",'');
				n=0;
				$img.css("left",0);
				setTimeout(()=>{
					$img.css("transition",
						'all .'+trans/100+'s linear');
				},100)
			},trans)
		}
	})

});

