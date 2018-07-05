$('#close').click(function() {
			$('.cd-user-modal').hide()
		})
		$(document).on('click', '#add', function() {
			$('#cd-signup').css('display', 'none');
			$('#cd-login').removeAttr('style');
		});
		$(document).on('click', '#add-reg', function() {
			$('#cd-login').css('display', 'none');
			$('#cd-signup').removeAttr('style');
		});
		$('#close').click(function() {
			$('.cd-user-modal').hide()

		})

		$('#log').click( function () {
			$('#add').show()
				$('#add-reg').hide()
				$('.cd-user-modal').show()
				$('#cd-signup').hide()
				$('#cd-login').show()
		})
			
				
		
		$('#goreg').click( function () {
				$('#add-reg').show()
				$('#add').hide()
				$('.cd-user-modal').show()
				$('#cd-login').css('display','none');
				$('#cd-signup').removeAttr('style');
			})
			$('#gologin').click( function () {
				$('#add').show()
				$('#add-reg').hide()
				$('.cd-user-modal').show()
				$('#cd-signup').hide()
				$('#cd-login').show()
			})
		//			if (user) {
		//				flashvars.isLogin = true
		//			}
		var app = angular.module('myapp', [])
			.controller('mycont', ['$scope', '$http', function($scope, $http) {
				// 登录方法

				$('#login').click(function() {
			
					if(!$('#userName').val()) {
						angular.element('.tips1').html('请输入猫咪号');
						return false;
					} else {
						angular.element('.tips1').html('');
					}
					if(!$('#userPwd').val()) {

						angular.element('.tips2').html('请输入密码');
						return false;
					} else {
						angular.element('.tips2').html('');
					}

					$.ajax({
						type: "post",
						url: "http://www.maomiyibian.com/login ",
						data: {
							userName: $('#userName').val(),
							userPwd: $('#userPwd').val(),
						},
						success: function(res) {

							if(res.resultCode == -2) { //用户名不存在
								angular.element('.tips1').html(res.resultMessage)
							} else {
								angular.element('.tips1').html('')
							}
							if(res.resultCode == -1) { //密码错误
								angular.element('.tips2').html(res.resultMessage)
							} else {
								angular.element('.tips2').html('');
							}
							//登录成功
							if(res.resultCode == 1) {
								//保存用户名
								$('.cd-user-modal').hide();
								// 保存用户全部的信息
								location.reload();
							}

						},
						error: function(err) {
							console.log(err);
						}
					});
				})

				document.onkeydown = function(e) {
					if(!e) e = window.event;
					if((e.keyCode || e.which) == 13) {
						document.getElementById("login").click();
					}
				}
				//判断用户名是否重复
				$('#signup-password-again').blur(function () {
						if($('#signup-password-again').val()===$('#signup-password').val()) {
						angular.element('.reg-tips-pwd-again').html('');
					}
					else{
						
						angular.element('.reg-tips-pwd-again').html('两次密码不一致');
						return false;
					}
				})
				$('#regName').click(function() {
					//失去焦点判断用户名  			
					$('#regName').bind('blur', function() {
						if(!$('#regName').val()) {
							angular.element('.reg-tips-user').html('猫咪号不能为空');
							return false;
						} else {
							angular.element('.reg-tips-user').html('');

						}

						$.ajax({
							type: "post",
							url: "http://www.maomiyibian.com/userCheck",
							data: {
								userName: $('#regName').val()
							},
							success: function(res) {
								if(res.resultCode == 1) {
									angular.element('.reg-tips-user').css('color', 'green');
									angular.element('.reg-tips-user').html(res.resultMessage);

								} else if(res.resultCode == -1) {
									angular.element('.reg-tips-user').css('color', 'red');
									angular.element('.reg-tips-user').html(res.resultMessage);
								}
								$('#regName').unbind('blur');
							},
							error: function(err) {
								console.log(err)
							}
						})
					});
				})

				$scope.hideSchool = true;
				$scope.hideGrade = true;
				$scope.hideClassNo = true;

				$('#signup-occupation').change(function() {
					angular.element('.reg-tips-usertype').html('用户类型一旦选择将不可更改');
					if($(this).val() == 1) {

						$('#hideGrade').hide()
						$('#hideClassNo').hide()
						$('#hideSchool').hide()
					} else if($(this).val() == 3) {
						$('#hideGrade').hide()
						$('#hideClassNo').hide()
						$('#hideSchool').hide()

					} else {
						$('#hideGrade').show()
						$('#hideClassNo').show()
						$('#hideSchool').show()
					}
				})
				//正则
				$scope.regNick = /^([a-z\d\u4e00-\u9fa5]{1,16})$/; //昵称
				$scope.regPwd = /^([a-zA-Z\d]{6,12})$/; //密码
				$scope.regTelphone = /^(1(3|4|5|6|7|8)\d{9})$/; //电话
				$scope.regEmail = /^(([a-z\d]{0,15}[a-z]{0,10})@([a-z\d]{0,10})\.((com)|(cn)))$/i; //邮箱
				$scope.regQq = /^(\d{5,12})$/; //QQ
				$scope.regWx = /^[a-z]{1}[-_a-z\d]{6,20}$/i; //微信	
				//注册方法add-reg

					$('#reg').click(function () {
							//用户名
						if(!$('#regName').val()) {
							angular.element('.reg-tips-user').html('猫咪号不能为空');
							return false;
						} else if($('#regName').val().length < 2 || $('#regName').val().length > 16) {
							angular.element('.reg-tips-user').html('用户名长度为2-16位');
							return false;
						} else {
							angular.element('.reg-tips-user').html('');
						}
	
						//密码
	
						if(!$('#signup-password').val()) {
							angular.element('.reg-tips-pwd').html('密码不能为空');
							return false;
						} else {
							if($('#signup-password').val().length < 6 || $('#signup-password').val().length > 16) {
								angular.element('.reg-tips-pwd').html('密码字母或数字组成，长度为6-16位');
								return false;
							}
							if($scope.regPwd.test($('#signup-password').val())) {
								angular.element('.reg-tips-pwd').html('');
							}
						}
						//确认密码
						if(!$('#signup-password-again').val() && !$('#signup-password').val()) {
							angular.element('.reg-tips-pwd-again').html('');
							return false;
						} else {
							if($('#signup-password-again').val().length == 0) {
								angular.element('.reg-tips-pwd-again').html('请再次输入密码');
								return false;
							}
							if($('#signup-password-again').val() === $('#signup-password').val()) {
								angular.element('.reg-tips-pwd-again').html('');
							} else {
								angular.element('.reg-tips-pwd-again').html('两次密码不一致');
								return false;
							}
						}
						// 昵称
						if($('#signup-userNick').val().length > 16) {
							angular.element('.reg-tips-nick').html('昵称长度为1-16位');
							return false;
						}
						
						// 姓名
						if(!$('#signup-userNAME').val()) {
							angular.element('.reg-tips-nickname').html('姓名不能为空');
							return false;
						} else if($('#signup-userNAME').val().length < 1 || $('#signup-userNAME').val().length > 16) {
							angular.element('.reg-tips-nickname').html('姓名长度为1-16位');
							return false;
						} else if($scope.regNick.test($('#signup-userNAME').val())) {
							angular.element('.reg-tips-nickname').html('');
						}
	//用户类型
			
					if (!$('#signup-occupation').val()) {
						angular.element('.reg-tips-usertype').html('用户类型不能为空');
						return false;
					} else {
						angular.element('.reg-tips-usertype').html('');
					}
						//电话
						if(!$('#signup-phone').val() || $scope.regTelphone.test($('#signup-phone').val())) {
							angular.element('.reg-tips-tel').html('');
						} else {
							angular.element('.reg-tips-tel').html('电话号码格式错误');
							return false;
						}
	
						//邮箱
	
						if(!$('#signup-email').val() || $scope.regEmail.test($('#signup-email').val())) {
							angular.element('.reg-tips-email').html('');
						} else {
							angular.element('.reg-tips-email').html('邮箱格式错误');
							return false;
						}
	
						//QQ
						if(!$('#signup-qq').val() || $scope.regQq.test($('#signup-qq').val())) {
							angular.element('.reg-tips-qq').html('');
						} else {
							angular.element('.reg-tips-qq').html('QQ号码有误');
							return false;
						}
	
						//微信
						if(!$('#signup-wechat').val() || $scope.regWx.test($('#signup-wechat').val())) {
							angular.element('.reg-tips-wx').html('');
						} else {
							angular.element('.reg-tips-wx').html('微信号格式错误');
							return false;
						}

						$.ajax({
							type: "post",
							url: "http://www.maomiyibian.com/regist",
							data: {
								userName: $('#regName').val(), //用户名
								userPwd: $('#signup-password').val(), //密码
								userNick: $('#signup-userNick').val(), //昵称
								name: $('#signup-userNAME').val(), //姓名
								userType: $('#signup-occupation').val(), //用户类型
								telphone: $('#signup-phone').val(), //电话
						
								school: $('#signup-provinces').val(),//学校
								grade: $('#signup-school').val(),//年级
								classNo: $('#signup-grade').val(),//班级
								email: $('#signup-email').val(), //邮箱
								qq: $('#signup-qq').val(), //qq
								wechat: $('#signup-wechat').val(), //微信
							},
							success: function(res) {
	
								if(res.resultCode == 0) {
									angular.element('.reg-tips-user').html('用户名已经存在');
								} else if(res.resultCode == 1) {
									//						location.reload();
									alert('注册成功')
									$('.cd-user-modal').hide()
								}
							},
							error: function(err) {
								console.log(err)
							}
						});
					})
					


			}])
			

