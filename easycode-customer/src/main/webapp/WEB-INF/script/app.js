var app = angular.module('myapp',['ngRoute','controllers'])



//var	user = window.localStorage.getItem("username");	//获取用户名
app.config(['$routeProvider','$locationProvider',function($routeProvider){
//				$locationProvider.html5Mode(true);
			$routeProvider
			//home页
			.when('/home',{templateUrl:'views/home.html'})
			//发现页
			.when('/find',{templateUrl:'views/find.html',controller:'find'})
			//创作页
//			.when('/editor',{templateUrl:'editor.html',controller:'editor'})
			//作品管理
			.when('/WorksManagement',{templateUrl:'views/WorksManagement.html',controller:'WorksManagement'})
			//作品详情页面
//			.when('/gameDetails',{templateUrl:'gameDetails.html',controller:'gamedetails'})
			//个人主页
			.when('/gr_index',{templateUrl:'gr_index',controller:'gr_index'})
			//账号设置
			.when('/information',{templateUrl:'information',controller:'information'})
			//我的消息
			.when('/message',{templateUrl:'views/message.html',controller:'message'})
			//我的收藏
			.when('/shoucang',{templateUrl:'views/shoucang.html',controller:'shoucang'})
			//手机端的创作
			.when('/mobilecreation',{templateUrl:'views/mobilecreation.html',controller:'mobilecreation'})
			//精选专题
			.when('/selected',{templateUrl:'views/selected.html',controller:'selected'})
			//网站地图
			.when('/sitemap',{templateUrl:'views/sitemap.html',controller:'sitemap'})
			//社区公约	==================================================================================
			.when('/convention',{templateUrl:'views/convention.html',controller:'convention'})
			//关于我们	
			.when('/aboutUs',{templateUrl:'views/aboutUs.html',controller:'aboutUs'})
			//联系我们
			.when('/conectUs',{templateUrl:'views/conectUs.html',controller:'conectUs'})
			//使用条款
			.when('/termsUs',{templateUrl:'views/termsUs.html',controller:'termsUs'})
			//意见反馈
			.when('/feedbackUs',{templateUrl:'views/feedbackUs.html',controller:'feedbackUs'})
			//加入我们
			/*.when('/joinUs',{templateUrl:'views/joinUs.html',controller:'joinUs'})*/
			//=============================================================================================
			//登录
			.when('/login',{templateUrl:'login.html',controller:'login'})
			//注册
			.when('/register',{templateUrl:'views/register.html',controller:'register'})
			//发布
			.when('/rele',{templateUrl:'views/rele.html',controller:'rele'})
			//发布2
			.when('/rele2',{templateUrl:'views/rele2.html',controller:'rele2'})
			//课程体系
			.when('/system',{templateUrl:'views/system.html'})
            //课程报名
			.when('/enroll',{templateUrl:'views/enroll.html'})
			.otherwise({redirectTo:'/home'});

		}])
		.run(function($rootScope){  
			// 搜索
			$rootScope.search = function () {

				if ( !$('#search').val()) {
					window.location.href="#/find?q="+$('#search').val()

				}else {
					window.location.href="#/find?q="+$('#search').val()
				}
			}
			document.onkeydown = function(e) {
				if(!e) e = window.event;
				if((e.keyCode || e.which) == 13) {
					$rootScope.search()
				}
			}
			$rootScope.showLogin = function () {
			$('#add').show()
				$('#add-reg').hide()
				$('.cd-user-modal').show()
				$('#cd-signup').hide()
				$('#cd-login').show()
			}
			//弹出注册框
			$rootScope.showReg = function () {
				$('#add-reg').show()
					$('#add').hide()
					$('.cd-user-modal').show()
					$('#cd-login').css('display','none');
					$('#cd-signup').removeAttr('style');
			}		
			// 登录方法
			$('#login').click( function() {
				if (!$('#userName').val()) {
				angular.element('.tips1').html('请输入猫咪号');
				return false;
				} 
			else{
				angular.element('.tips1').html('');
			}
			if (!$('#userPwd').val()) {
				
				angular.element('.tips2').html('请输入密码');
				return false;
			} 
			else{
				angular.element('.tips2').html('');
			}	
				
					$.ajax({
						type:"post",
						url:"login",
						data:{
							userName:$('#userName').val(),
							userPwd:$('#userPwd').val(),
						},
						success:function(res) {

							if(res.resultCode == -2){	//用户名不存在
								angular.element('.tips1').html(res.resultMessage)
							} else {
								angular.element('.tips1').html('')
							}
							if (res.resultCode == -1) {	//密码错误
									angular.element('.tips2').html(res.resultMessage)
							}else{
									angular.element('.tips2').html('');
							}
							//登录成功
							if (res.resultCode == 1) {
									//保存用户名
								$('.cd-user-modal').hide()
								location.reload();
								}
						},
						error:function(err) {
							console.log(err);
						}
						});
				})
					
				document.onkeydown = function(e){
			        if(!e) e = window.event;
			        if((e.keyCode || e.which) == 13){
			            document.getElementById("login").click();
			        }
			    }	
			    
			    //记住用户名				
		  		$('#regName').click( function () {
		  			//失去焦点判断用户名  			
				$('#regName').bind('blur',function() {
						if (!$('#regName').val()) {
							angular.element('.reg-tips-user').html('猫咪号不能为空');
							return false;
						} else {
							angular.element('.reg-tips-user').html('');
						}
						
						$.ajax({
							type:"post",
							url:"http://www.maomiyibian.com/userCheck",
							data:{
								userName:$('#regName').val()
							},
							success:function(res) {
								if (res.resultCode == 1) {
									angular.element('.reg-tips-user').css('color','green');
									angular.element('.reg-tips-user').html(res.resultMessage);
									
								} else if(res.resultCode == -1) {
									angular.element('.reg-tips-user').css('color','red');
									angular.element('.reg-tips-user').html(res.resultMessage);
								}
								$('#regName').unbind('blur');
							},
							error:function (err) {
								console.log(err)
							 }
							})
				});
		  		})		
	  			$rootScope.hideSchool = true;
				$rootScope.hideGrade = true;
				$rootScope.hideClassNo = true;

			$('#signup-occupation').change( function () {
				angular.element('.reg-tips-usertype').html('用户类型一旦选择将不可更改');
				if ($(this) .val() == 1) {
					$('#hideGrade').hide()
					$('#hideClassNo').hide()
					$('#hideSchool').hide()
				} else if($(this) .val() == 3) {
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
			$rootScope.regNick=/^([a-z\d\u4e00-\u9fa5]{1,16})$/;	//昵称
			$rootScope.regPwd =/^([a-zA-Z\d]{6,12})$/; 				//密码
			$rootScope.regTelphone =/^(1(3|4|5|7|8)\d{9})$/; 		//电话
			$rootScope.regEmail=/^(([a-z\d]{0,15}[a-z]{0,10})@([a-z\d]{0,10})\.((com)|(cn)))$/i;	//邮箱
			$rootScope.regQq=/^(\d{5,12})$/;	//QQ
			$rootScope.regWx=/^[a-z]{1}[-_a-z\d]{6,20}$/i;	//微信	
			//注册方法add-reg		
			$('#signup-password-again').blur(function () {
						if($('#signup-password-again').val()===$('#signup-password').val()) {
						angular.element('.reg-tips-pwd-again').html('');
					}
					else{						
						angular.element('.reg-tips-pwd-again').html('两次密码不一致');
						return false;
					}
				})
			$rootScope.regs = function () {
						//用户名
				if(!$('#regName').val()) {
					angular.element('.reg-tips-user').html('猫咪号不能为空');
					return false;
				} else if($('#regName').val().length < 2 || $('#regName').val().length>16) {
					angular.element('.reg-tips-user').html('猫咪号长度为2-16位');
					return false;
				} else {
					angular.element('.reg-tips-user').html('');
				}
			//密码			
			if(!$('#signup-password').val()) {
				angular.element('.reg-tips-pwd').html('密码不能为空');
				return false;
			} else {
				if($('#signup-password').val().length < 6 || $('#signup-password').val().length >16) {
					angular.element('.reg-tips-pwd').html('密码字母或数字组成，长度为6-16位');
					return false;
				}
				if($rootScope.regPwd.test($('#signup-password').val())) {
					angular.element('.reg-tips-pwd').html('');
				}
			}
			//确认密码
			if(!$('#signup-password-again').val() && !$('#signup-password').val()) {
				angular.element('.reg-tips-pwd-again').html('');
				return false;
			} else {
				if($('#signup-password-again').val().length ==0) {
					angular.element('.reg-tips-pwd-again').html('请再次输入密码');
					return false;
				}
				if($('#signup-password-again').val()===$('#signup-password').val()) {
					angular.element('.reg-tips-pwd-again').html('');
				}
				else{					
					angular.element('.reg-tips-pwd-again').html('两次密码不一致');
					return false;
				}
			}			
			// 昵称
			if($('#signup-userNick').val().length > 16) {
				angular.element('.reg-tips-nick').html('昵称长度为1-6位');
				return false;
			}
			// 姓名
			if(!$('#signup-userNAME').val()) {
				angular.element('.reg-tips-nickname').html('姓名不能为空');
				return false;
			} else if($('#signup-userNAME').val().length < 1 || $('#signup-userNAME').val().length > 16) {
				angular.element('.reg-tips-nickname').html('姓名长度为1-16位');
				return false;
			} else if($rootScope.regNick.test($('#signup-userNAME').val())){
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
			if(!$('#signup-phone').val() || $rootScope.regTelphone.test($('#signup-phone').val())) {
				angular.element('.reg-tips-tel').html('');
			} else {
				angular.element('.reg-tips-tel').html('电话号码格式错误');
				return false;
			}
			//邮箱
			if(!$('#signup-email').val() || $rootScope.regEmail.test($('#signup-email').val())){
				angular.element('.reg-tips-email').html('');
			}
			else{
				angular.element('.reg-tips-email').html('邮箱格式错误');
				return false;
			}
			//QQ
			if(!$('#signup-qq').val() || $rootScope.regQq.test($('#signup-qq').val())){
				angular.element('.reg-tips-qq').html('');
			}
			else{
				angular.element('.reg-tips-qq').html('QQ号码有误');
				return false;
			}
			//微信
			if(!$('#signup-wechat').val() || $rootScope.regWx.test($('#signup-wechat').val())){
				angular.element('.reg-tips-wx').html('');
			}
			else{
				angular.element('.reg-tips-wx').html('微信号格式错误');
				return false;
			}
			$.ajax({
				type:"post",
				url: "http://www.maomiyibian.com/regist",
				async:true,
				data: {
					userName: $('#regName').val(),//用户名
					userPwd: $('#signup-password').val(),//密码
					userNick: $('#signup-userNick').val(),//昵称
					name: $('#signup-userNAME').val(),//姓名
					userType: $('#signup-occupation').val(),
					telphone: $('#signup-phone').val(),//电话
					school: $('#signup-provinces').val(),//学校
					grade: $('#signup-school').val(),//年级
					classNo: $('#signup-grade').val(),//班级
					email:$('#signup-email').val(),	//邮箱
					qq:$('#signup-qq').val() ,		//qq
					wechat:$('#signup-wechat').val(),	//微信
				},
				success:function(res){
					console.log(res)
					if (res.resultCode == 0) {
						angular.element('.reg-tips-user').html('用户名已经存在');
					} else if (res.resultCode == 1) {
						alert('注册成功,即将跳转到首页')
						location.reload();
						}
					},
			    error:function(err){
					  console.log(err)
			    }
			});
		  	}
		
//footer表单验证
		$rootScope.apply = function () {
				//孩子姓名
			if(!$('#childName').val()) {
				angular.element('.child-name').html('孩子姓名不能为空');
				return false;
			} else if($('#childName').val().length < 2 || $('#childName').val().length>16) {
				angular.element('.child-name').html('姓名长度为2-16位');
				return false;
			} else {
				angular.element('.child-name').html('');
			}
				//孩子年龄
			if(!$('#childAge').val()) {
				angular.element('.child-age').html('孩子年龄不能为空');
				return false;
			} else if($('#childAge').val() < 1 || $('#childAge').val()>=18) {
				angular.element('.child-age').html('输入的年龄有误');
				return false;
			} else {
				angular.element('.child-age').html('');
			}
			//电话号码
			if(!$('#parentPone').val()){
				angular.element('.parent-pone').html('请输入电话号码');
				return false;
			}
			if($rootScope.regTelphone.test($('#parentPone').val())) {
				angular.element('.parent-pone').html('');
			} else {
				angular.element('.parent-pone').html('电话号码格式错误');
				return false;
			}
			//验证码
			if(!$('#footerCode').val()){
				angular.element('.phone-code').html('请输入验证码');
				return false;
			}else {
				angular.element('.phone-code').html('');
				
			}
		
		}
		
					//点击创作的时候 header、footer隐藏
					var firstHref = window.location.href.split('#/')[1];
						if (firstHref == 'editor') {
							$('header').hide();
							$('footer').hide();
						}	
					
					if (firstHref == 'editor') {
						$('header').hide();
						$('footer').hide();
					}
					 $('#create').click(function(){
							var firstHref = window.location.href.split('#/')[1];
							$('header').hide();
							$('footer').hide();
						});
					window.addEventListener('hashchange', function(ev){
					    var newUrl=ev.newURL.toString();
					    if(newUrl.split('#/')[1]=='editor'){
					    	$('header').hide();
					    	$('footer').hide();
					    }
					    else{
					    	$('header').show();
					    	$('footer').show();
					    }
					});
		}) 

		
	
		
