/**
 * Created by 11041131 on 2017/4/22.
 */
!function (window) {
	//Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	window.isMobile = isAndroid || isIOS;
}(window);

!function (window) {
	// 定时器相关
	var h, duration = 60, wait = duration;
	function time() {
		var $o = $(".get-code-btn");
		if (wait == 0) {
			if ($o.hasClass('text-link')) {
				$o.removeClass('text-link-disabled').addClass('text-link-able');
				wait = duration;
				clearInterval(h);
				$o.val('获取验证码');
			}
		} else {
			if ($o.hasClass('text-link')) {
				$o.addClass('text-link-disabled').removeClass('text-link-able');
				wait--;
				$o.val('重新获取(' + wait + ')');
			}
		}
	}
	function invoke(f, start, interval) {
		if (!start)
			start = 0;
		if (h) {
			// 在触发之前，清理以前的计时器
			clearInterval(h);
		}
		setTimeout(repeat, start);
		function repeat() {
			h = setInterval(f, interval); // 循环调用f()
		}
	}

	var strategies = {
		isNonEmpty: function (value) {
			return value === '';
		},
		minLength: function (value, length) {
			return value.length < length;
		},
		isMoblie: function (value) {
			return /^1[0-9]{10}$/.test(value);
		},
		isEmail: function (value) {
			return /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
		}
	};
	function toggleEyes(ele) {
		var ele = $(ele),
			srcstr = ele.attr('src'),
			$pwd_input = ele.closest('.labelbox').parent().find('input.password-field');

		if (srcstr.indexOf('eyes-on.png') > -1) { // 关闭密码明显
			ele.attr('src', srcstr.replace('eyes-on', 'eyes-off'));
			$pwd_input.prop('type', 'password');
		} else if (srcstr.indexOf('eyes-off.png') > -1) { // 开启密码明显
			ele.attr('src', srcstr.replace('eyes-off', 'eyes-on'));
			$pwd_input.prop('type', 'text');
		}
	}
	// 密码显示与隐藏，眼睛图片的状态变化
	$(document).on("click", ".eyes-img", function () {
		// 点击眼睛图片，密码明文显示
		toggleEyes(this);
	}).on('click', 'input', function (e) {
		// 提示语，在输入框里得到焦点，错误提示消失
		var $this = $(e.target), prop = $this.prop('type');
		if (prop == 'text' || prop == 'password') {
			G.setErrorMsg('');
		}
	});
	window.placeholderfun = function () {
		if (!('placeholder' in document.createElement('input'))) {
			function GetStringNumValue(pxstr) {
				return pxstr.substring(0, pxstr.length - 2);
			}
			$('input[placeholder],textarea[placeholder]').each(function () {
				var $element = $(this),
					placeholder = $element.attr('placeholder');
				//密码框  
				if (placeholder) {
					// 文本框ID  
					var elementId = $element.attr('id');
					if (!elementId) {
						var now = new Date();
						elementId = 'lbl_placeholder' + now.getSeconds() + now.getMilliseconds();
						$element.attr('id', elementId);
					}
				} //end of if (placeholder)  
				// 添加label标签，用于显示placeholder的值  
				var $label = $('<label>', {
					html: $element.val() ? '' : placeholder,
					css: {
						position: 'absolute',
						cursor: 'text',
						color: '#cccccc',
						fontSize: $element.css('fontSize'),
						fontFamily: $element.css('fontFamily')
					}
				}).attr('for', elementId).insertAfter($element);

				var _p = $element.parent().css("position");
				if (_p != "relative" && _p != "absolute") {
					$element.parent().css("position", "relative");
				}
				// 绑定事件  
				var _setPosition = function () {
					$label.css({
						left: '20px'
					});
				};
				var _resetPlaceholder = function () {
					if ($element.val()) {
						$label.html(null);
					} else {
						_setPosition();
						$label.html(placeholder);
					}
				};
				_setPosition();
				$element.on('focus blur input keyup propertychange resetplaceholder', _resetPlaceholder);
			});
		}
	}
	$(function () {
		placeholderfun();
	})


	$(document).on('click', '.check-outer', function (event) {
		var $this = $(this);
		var $checkbox = $(".checked:eq(0)", $this);
		$checkbox.toggleClass('no');
		return false;

	});

	var G = {
		getCookie: function (name) {
			var re = new RegExp(name + '=([^;$]*)', 'i');
			return re.test(decodeURIComponent(document.cookie)) ? RegExp['$1'] : '';
		},
		formatTime: function (date) {
			function getzf(num) {
				if (parseInt(num) < 10) {
					num = '0' + num;
				}
				return num;
			}
			return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + getzf(date.getHours()) + ":" + getzf(date.getMinutes());
		},
		setErrorMsg: function (msg, ele) {
			ele = ele || '.err_tip';
			if (msg) {
				$(ele).find('span').html(msg);
				$(ele).show();
			} else {
				$(ele).hide();
			}
		},
		invokeTimer: function (interval) {
			interval = interval ? interval : 1000;
			invoke(time, 0, interval);
			$(".text-link").addClass('text-link-disabled').removeClass(
				'text-link-able');
		},
		// 获取图片验证码
		getPicImg: function () {
			return $.ajax({
				type: "GET",
				url: "/getPicCodeImg",
				async: false,
			}).responseText;
		},
		refreshPicImg: function ($picCodeImg) {
			$.ajax({
				type: "GET",
				url: "/getPicCodeImg?v=" + new Date().getTime(),
				success: function (msg) {
					if (msg == null || msg == "") {
						$picCodeImg.attr('src', "/web/images/refreshPicCode.png");
					} else {
						$picCodeImg.attr('src', msg);
					}
				}
			});
			return;
		},
		clearTimer: function () {
			clearInterval(h);
			wait = duration;
		},
		isValidPwd: function (pwd) {
			if (pwd.match(/\d/) && pwd.match(/[a-zA-Z]/) && pwd.length >= 6
				&& pwd.length <= 16) {
				return true;
			} else {
				return false;
			}
			// for (var i = 0; i < pwd.length; i++) {
			// var c = pwd.charCodeAt(i);
			// if (c <= 32 || c > 127) {
			// return false;
			// }
			// }
			// var pwdReg = /[0-9a-zA-Z]{6,16}/;
			// if (pwdReg.test(pwd)) {
			// var aphReg = /^[A-Za-z]+$/; // /[a-zA-Z]{6,16}/;
			// var numReg = /^[0-9]*$/;
			// if (aphReg.test(pwd)) {
			// return false;
			// }
			// if (numReg.test(pwd)) {
			// return false;
			// }
			// return true;
			// }
			// return false;
		},

		isSimplePwd: function (pwd) {
			var arrayObj = new Array("abc123", "qq123456", "wang1234",
				"1qaz2wsx");
			for (var i = 0; i < arrayObj.length; i++) {
				if (arrayObj[i] == pwd) {
					return true;
				}
			}
			return false;
		},
		strategies: strategies,
		stopBackScroll: function () {
			$("html,body").css({
				"overflow": "hidden"
			});
		},
		recoverBackScroll: function () {
			$("html,body").css({
				"overflow": ""
			});
		},
		clientInvoke: function (funName, info) {
			if (window.AppWebClient && window.AppWebClient.invokeLocal) {
				window.AppWebClient.invokeLocal(funName, info || '');
			}
		},
		scrollIntoView: function (el) {
			setTimeout(function () {
				el.scrollIntoViewIfNeeded();
			}, 200)
		}
	};

	// <div onclick="_gaq('update_pwd_busi=1&pwd_busi=2')"></div>
	function _gaq(paramStr) {
		$.ajax({
			type: "GET",
			url: "/BI_Statistical_Analysis?" + paramStr,
			success: function (req) {
				// console.log(req)
			}
		});
	}
	window._gaq = _gaq;
	window.G = G;
}(window);

!function (window) {
	window.routerManager = {
		routerMap: {},
		init: function (states, listener) {
			var _this = this;
			states = Array.isArray(states) ? states : [states];
			states.forEach(function (state) {
				_this.registerRouter(state, listener || function () { });
			})

			window.onhashchange = function (event) {
				var state = location.hash.replace('#', '');
				_this.stateChangeHandler(state)
			};
		},
		stateChangeHandler: function (state) {
			var listeners = this.routerMap[state] || [];
			listeners.forEach(function (listener) {
				listener(state);
			});
		},
		registerRouter: function (state, listener) {
			if (!this.routerMap[state]) {
				this.routerMap[state] = [];
			}
			this.routerMap[state].push(listener);
		},
		forwardHash: function (state) {
			location.hash = state;
		},
		replaceHash: function (state) {
			var arr = location.href.split('#');
			var url = arr[0] + '#' + state;
			location.replace(url);
		},
		resetRouter: function () {
			if (location.hash) {
				this.forwardHash('');
			}
		}
	}
}(window);

