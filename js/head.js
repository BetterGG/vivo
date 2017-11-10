
/*将头部引入首页*/
$.ajax({
		url: "02_head.html",
		success(data){
			$("#head").html(data);

			$(".head-list>li").hover(function(){   
			 $(this).children().first().siblings().children().toggleClass("in");
		 
			});
		   $(".search").click(function(){
			 $(".input").addClass("display");
			 
		   });
           $(".login,.login-list").hover(function(){
			 $(".login-list").toggleClass("in");

		   });

		}
})
   
