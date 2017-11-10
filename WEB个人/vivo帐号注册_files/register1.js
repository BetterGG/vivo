$(function() {

	// 隐藏错误显示框
	G.setErrorMsg("");
	if(window.isMobile){
		$(".protocal").attr("href","/warranty/wapprotocol.html");
	}
	// 初始化图片验证码
	var $picCodeBtn = $('.chkcode_img');
	$picCodeBtn.on('click', function(e) {
		G.refreshPicImg($picCodeBtn);
	});
	G.refreshPicImg($picCodeBtn);
	// 提交找回密码的帐号和图片验证码
	var $submitAccountAndPicCodeButton = $('.link-btn');
	function submit(){
		var account = $("#accountInput").val();
		var type = $("#regType").val();
		if (type == null) {
			type = 0;
		}
		if (account == null || account == "") {
			var errorMsg = (type == 0) ? "请输入手机号" : "请输入邮箱";
			G.setErrorMsg(errorMsg);
			return false;
		}
		if((type == 0 && !G.strategies.isMoblie(account))
				|| (type == 1 && !G.strategies.isEmail(account))){
			var errorMsg = (type == 0) ? "请输入有效的手机号" : "请输入有效的邮箱";
			G.setErrorMsg(errorMsg);
			return false;
		}
		var picCode = $("#codeInput").val();
		if (picCode == null || picCode == "") {
			var errorMsg = "请输入验证码";
			G.setErrorMsg(errorMsg);
			return false;
		}
		var regPolicyNotChecked = $('.check-ctn .checked').hasClass('no');
		if (regPolicyNotChecked) {
			var errorMsg = "请您先勾选接受《vivo服务协议》";
			G.setErrorMsg(errorMsg);
			return false;
		}
		var client_id = $("#client_id").val();
		var redirect_uri = $("#redirect_uri").val();
		$.ajax({
			type : "POST",
			url : "/pass/register/p1",
			data : "account=" + account + "&picCode=" + picCode
					+ "&src=passport" + "&type=" + type,
			success : function(msg) {
				if (msg.stat == 200 || msg.stat == 555) {
					window.location.href = "/pass/register/page2"
							+ "?isPc=1&account=" + account + "&client_id="
							+ client_id + "&redirect_uri=" + redirect_uri+"&type=" + type
							+ "&xid=" + msg.xid;
				} else if (msg.stat == 401) {
					G.refreshPicImg($picCodeBtn);
					var errorMsg = "图片验证码错误";
					G.setErrorMsg(errorMsg);
				} else if (msg.stat == 402) {
					var errorMsg = (type == 0) ? "请输入有效的手机号" : "请输入有效的邮箱";
					G.setErrorMsg(errorMsg);
					G.refreshPicImg($picCodeBtn);
				}else if(msg.stat = 440){
					var errorMsg = (type == 0) ? "请输入有效的手机号" : msg.msg;
					G.setErrorMsg(errorMsg);
					G.refreshPicImg($picCodeBtn);
				} else if (msg.stat == 634) {
					window.location.href = "/v3/web/reg?isPc=1&client_id="
						+ client_id + "&redirect_uri=" + redirect_uri;
				}
			}

		});
	}
	$submitAccountAndPicCodeButton.on('click', function(e) {
		submit();
		return false;
	});
	$(document).on('keypress',function(e) {
		e = e || window.event;
		if (e.keyCode == 13) {
			submit();
		}
	})

});