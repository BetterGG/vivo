$(function() {
	var UA = window.navigator.userAgent.toLowerCase();
	var isAndroid = UA && UA.indexOf('android') > 0;
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	$('#logo_link').on('click', function(e) {
		if (isAndroid || isIOS) {
			// wap的登录首页logo全部改为不可点
			return false;
		}else{
			window.open("https://www.vivo.com.cn");      
		}
	});
});