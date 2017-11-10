/**
 * Created by Bianwangyang on 2017/4/7.
 */
// $(function() {
// G.setErrorMsg('登录页面错误');
// G.invokeTimer(1000);
// });
var utils = {
	triggerModal : function(templateid, data) {
		var html = template(templateid, data);
		$(".modal-container").remove();
		$("body").append(html);
		$(".x-icon").click(function() {
			$(".modal-container").remove();
			$(this).off("click");
			G.clearTimer();
		});
	}
};

$(function() {

	/***************************************************************************
	 * $("#accountInput").blur(function() { var account =
	 * $.trim($("#accountInput").attr("value")); if (account.length == 0) {
	 * G.setErrorMsg('请输入帐号'); } });
	 **************************************************************************/

	$(".third-ctn .link-box a").on(
			'click',
			function() {
				var $currentLink = $(this);
				var hrefValue = $currentLink.attr('href');
				var isWap = window.isMobile;
				if (hrefValue != null
						&& hrefValue.indexOf('/v3/web/login/renrenLogin') >= 0
						&& isWap) {
					window.location.href = hrefValue + "&isWap=1";
				} else {
					window.location.href = hrefValue;
				}
				return false;
			});

	if (window.isMobile) {
		$("#weichatRef").hide();
	}
	
	$(".third-ctn").show();
	/***************************************************************************
	 * $("#accountInput").focus(function() { G.setErrorMsg(""); });
	 * 
	 * $("#passwordInput").blur(function() { var pwd =
	 * $.trim($("#passwordInput").attr("value")); if (pwd.length == 0) {
	 * G.setErrorMsg("请输入密码"); } });
	 * 
	 * $("#passwordInput").focus(function() { G.setErrorMsg(""); });
	 **************************************************************************/

	$("#loginForm")
			.on(
					'submit',
					function(e) {
						e.preventDefault();
						var account = $.trim($("#accountInput").attr("value"));
						var pwd = $.trim($("#passwordInput").attr("value"));
						var picCode = $.trim($("#codeInput").attr("value"));
						if (account.length == 0) {
							G.setErrorMsg("请输入帐号");
							return false;
						}
						if (pwd.length == 0) {
							G.setErrorMsg("请输入密码");
							return false;
						}
						pwd = $.md5(pwd);
						var client_id = $("#client_id").val();
						var redirect_uri = $("#redirect_uri").val();
						var remember = "0";

						if ($('.check-ctn .checked').hasClass('no')) {
							remember = "0";
						} else {
							remember = "1";
						}
						/*******************************************************
						 * if ($("#autoLogin").is(":checked")) { remember = "1"; }
						 ******************************************************/
						$
								.ajax({
									type : "POST",
									url : "/v3s2/web/login/login",
									data : "account=" + account + "&pwd=" + pwd
											+ "&picCode=" + picCode
											+ "&remember=" + remember
											+ "&client_id=" + client_id + "&t="
											+ new Date().getTime(),
									success : function(result) {
										if (result.stat == 200) {
											window.location.href = "/v3/web/login/authorize?client_id="
													+ client_id
													+ "&redirect_uri="
													+ redirect_uri
													+ "&t="
													+ new Date().getTime();
										} else if (result.stat == 10300) {
											// 如果存在风险，显示图片验证码
											G.setErrorMsg(result.msg);
											$("#web_login_piccode").show();
											G.refreshPicImg($(".chkcode_img"));
										} else if (result.stat == 10301) {
											// 如果存在高风险，需要验证手机号
											window.location.href = "/pass/login/validate/phone/page?p="
													+ result.data.phonenum
													+ "&client_id="
													+ client_id
													+ "&redirect_uri="
													+ redirect_uri
													+ "&t="
													+ new Date().getTime();
										} else if (result.stat == 10302) {
											// 如果存在高风险，需要验证邮箱
											window.location.href = "/pass/login/validate/email/page?email="
													+ result.data.email
													+ "&client_id="
													+ client_id
													+ "&redirect_uri="
													+ redirect_uri
													+ "&t="
													+ new Date().getTime();
										} else if (result.stat == 11100) {
											window.location.href = "/pass/login/bbs/upgrade/page?client_id="
													+ client_id
													+ "&redirect_uri="
													+ redirect_uri
													+ "&t="
													+ new Date().getTime();
										} else {
											G.refreshPicImg($(".chkcode_img"));
											G.setErrorMsg(result.msg);
										}

									}
								});
						return false;
					});

	/**
	 * 更新图片验证码
	 */
	var $picCodeImg = $('.chkcode_img');
	$picCodeImg.on('click', function(e) {
		G.refreshPicImg($picCodeImg);
	});

	/**
	 * 按回车键登录
	 */
	$(document)
			.on(
					'keypress',
					function(e) {
						e = e || window.event;
						if (e.keyCode == 13) {
							var account = $.trim($("#accountInput").attr(
									"value"));
							var pwd = $.trim($("#passwordInput").attr("value"));
							var picCode = $.trim($("#codeInput").attr("value"));
							if (account.length == 0) {
								G.setErrorMsg("请输入帐号");
								return false;
							}
							if (pwd.length == 0) {
								G.setErrorMsg("请输入密码");
								return false;
							}
							pwd = $.md5(pwd);
							var client_id = $("#client_id").val();
							var redirect_uri = $("#redirect_uri").val();
							var remember = "0";
							if ($('.check-ctn .checked').hasClass('no')) {
								remember = "0";
							} else {
								remember = "1";
							}
							$
									.ajax({
										type : "POST",
										url : "/v3s2/web/login/login",
										data : "account=" + account + "&pwd="
												+ pwd + "&picCode=" + picCode
												+ "&remember=" + remember
												+ "&client_id=" + client_id
												+ "&t=" + new Date().getTime(),
										success : function(result) {
											if (result.stat == 200) {
												window.location.href = "/v3/web/login/authorize?client_id="
														+ client_id
														+ "&redirect_uri="
														+ redirect_uri
														+ "&t="
														+ new Date().getTime();
											} else if (result.stat == 10300) {
												// 如果存在风险，显示图片验证码
												G.setErrorMsg(result.msg);
												$("#web_login_piccode").show();
												G
														.refreshPicImg($(".chkcode_img"));
											} else if (result.stat == 10301) {
												// 如果存在高风险，需要验证手机号
												window.location.href = "/pass/login/validate/phone/page?p="
														+ result.data.phonenum
														+ "&client_id="
														+ client_id
														+ "&redirect_uri="
														+ redirect_uri
														+ "&t="
														+ new Date().getTime();
											} else if (result.stat == 10302) {
												// 如果存在高风险，需要验证邮箱
												window.location.href = "/pass/login/validate/email/page?email="
														+ result.data.email
														+ "&client_id="
														+ client_id
														+ "&redirect_uri="
														+ redirect_uri
														+ "&t="
														+ new Date().getTime();
											} else if (result.stat == 11100) {
												window.location.href = "/pass/login/bbs/upgrade/page?client_id="
														+ client_id
														+ "&redirect_uri="
														+ redirect_uri
														+ "&t="
														+ new Date().getTime();
											} else {
												G
														.refreshPicImg($(".chkcode_img"));
												G.setErrorMsg(result.msg);
											}

										}
									});
							return false;
						}
					});

	// $('body')
	// .on(
	// 'click',
	// '#login_validate_get_code',
	// function(e) {// 验证邮箱身份，获取验证码
	// if ($(this).hasClass("text-link-disabled")) {
	// return false;
	// }
	// G.clearTimer();
	// G.invokeTimer(1000);
	// $
	// .ajax({
	// type : "POST",
	// url : "/pass/login/validate/email/code/get",
	// data : "openid=",
	// success : function(result) {
	// if (result.stat == 200) {
	// } else if (result.stat == 13101) {
	// // 操作超时
	// var client_id = $("#client_id")
	// .val();
	// var redirect_uri = $(
	// "#redirect_uri").val();
	// window.location.href = "/v3/web/login/authorize?client_id="
	// + client_id
	// + "&redirect_uri="
	// + redirect_uri;
	// } else {
	// G.setErrorMsg(result.msg);
	// }
	// }
	//
	// });
	// return false;
	// })
	// .on(
	// 'click',
	// '#login_validate_sub_code',
	// function(e) {// 验证邮箱身份，获取验证码
	// var code = $.trim($("#codeInput").attr("value"));
	// if (code.length == 0) {
	// var errorMsg = "请输入验证码";
	// G.setErrorMsg(errorMsg);
	// return false;
	// }
	// var client_id = $("#client_id").val();
	// var redirect_uri = $("#redirect_uri").val();
	// $
	// .ajax({
	// type : "POST",
	// url : "/pass/login/validate/email/code/verify",
	// data : "code=" + code,
	// success : function(result) {
	// if (result.stat == 200) {
	// window.location.href = "/v3/web/login/authorize?client_id="
	// + client_id
	// + "&redirect_uri="
	// + redirect_uri;
	//
	// } else if (result.stat == 13101) {
	// // 操作超时
	// window.location.href = "/v3/web/login/authorize?client_id="
	// + client_id
	// + "&redirect_uri="
	// + redirect_uri;
	// } else {
	// G.setErrorMsg(result.msg);
	// }
	// }
	//
	// });
	// return false;
	// })
});