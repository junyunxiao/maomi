<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE>
<html ng-controller="mycont" ng-app="myapp">

	<head>
		<title></title>
		<meta name="google" value="notranslate" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<!-- 网站图标 -->
		<link rel="icon" href="public/img/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css" />
		<script src="script/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="script/angular.min.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="public/css/find.css" />
		<link rel="stylesheet" type="text/css" href="public/css/index.css" />
		<link rel="stylesheet" type="text/css" href="public/css/gr_index.css" />
		<link rel="stylesheet" type="text/css" href="public/css/information.css" />
		<link rel="stylesheet" type="text/css" href="public/css/gameDetails.css" />
		<!--字体图标-->
		<link rel="stylesheet" href="public/css/font-awesome.min.css" />
		<!--登录与注册-->
		<link rel="stylesheet" href="public/css/reg_log1.css" />
		<link rel="stylesheet" href="public/css/reg_log2.css" />
		<link rel="stylesheet" type="text/css" href="public/css/convention.css" />
		<link rel="stylesheet" type="text/css" href="public/css/loading.css" />
		<link rel="stylesheet" type="text/css" href="public/css/log-reg.css" />
		<script src="script/vue.min.js" type="text/javascript" charset="utf-8"></script>
		<style type="text/css" media="screen">
			html,
			body {
				height: 100%;
			}
			
			body {
				margin: 0;
				padding: 0;
				overflow: auto;
				text-align: center;
				background-color: #ffffff;
			}
			
			object:focus {
				outline: none;
			}
			
			#flashContent {
				display: none;
			}
			
			.cd-user-modal {
				top: 0;
			}
			
			.fieldset {
				text-align: left;
			}
			
			#close {
				top: 0;
			}
			/*修改placeholder字体颜色*/
			
			#cd-signup input::-webkit-input-placeholder {
				color: gray;
			}
		</style>

		<link rel="stylesheet" type="text/css" href="css/history.css" />
		<script type="text/javascript" src="js/history.js"></script>
		<script type="text/javascript" src="js/swfobject.js"></script>
		<script type="text/javascript">
			var remark="${remark}";
			var swfVersionStr = "11.1.0";
			var xiSwfUrlStr = "playerProductInstall.swf";
			var flashvars = {
				extensionDevMode: 'true',
				autostart: 'false',
				cloudToken: '00000000-0000-0000-0000-000000000000',
				challengeMode: 'false',
				showOnly: 'false',
				projectId:'${projectId}',
				resourcesUrl:'${resourcesUrl}',
				projectUrl: '${projectUrl}',
				titleName: 'EzCode',
				isPublish:'${isPublish}',
				isLogin:'${isLogin}',
				modifiable:'${modifiable}',
				isMine:'${isMine}',
				isReview:'${isReview}',
				remark:remark,
				urlOverrides: {
					sitePrefix: window.location.protocol + '//' + window.location.host + '/',
					siteCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
					assetPrefix: window.location.protocol + '//' + window.location.host + '/',
					assetCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
					projectPrefix: window.location.protocol + '//' + window.location.host + '/',
					projectCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
					ProjectUrl: window.location.protocol + '//' + window.location.host + '/',
				},
				inIE: (navigator.userAgent.indexOf('MSIE') > -1)
			};
			var params = {};
			params.quality = "high";
			params.bgcolor = "#ffffff";
			params.allowscriptaccess = "sameDomain";
			params.allowfullscreen = "true";
			var attributes = {};
			attributes.id = "Main";
			attributes.name = "Main";
			attributes.align = "middle";
			swfobject.embedSWF(
				"scratch/Scratch.swf", "flashContent",
				"100%", "100%",
				swfVersionStr, xiSwfUrlStr,
				flashvars, params, attributes);
			swfobject.createCSS("#flashContent", "display:block;text-align:left;");
		</script>
	</head>

	<body>
		<div id="flashContent">
			<p>
				To view this page ensure that Adobe Flash Player version 11.1.0 or greater is installed.
			</p>
			<script type="text/javascript">
				var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://");
				document.write("<a href='http://www.adobe.com/go/getflashplayer'><img src='" +
					pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>");
			</script>
		</div>

		<noscript>
            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="Main">
                <param name="movie" value="scratch/Scratch.swf" />
                <param name="quality" value="high" />
                <param name="bgcolor" value="#ffffff" />
                <param name="allowScriptAccess" value="sameDomain" />
                <param name="allowFullScreen" value="true" />
                <!--[if !IE]>-->
                <object type="application/x-shockwave-flash" data="scratch/Scratch.swf" width="100%" height="100%">
                    <param name="quality" value="high" />
                    <param name="bgcolor" value="#ffffff" />
                    <param name="allowScriptAccess" value="sameDomain" />
                    <param name="allowFullScreen" value="true" />
                <!--<![endif]-->
                <!--[if gte IE 6]>-->
                    <p> 
                        Either scripts and active content are not permitted to run or Adobe Flash Player version
                        11.1.0 or greater is not installed.
                    </p>
                <!--<![endif]-->
                    <a href="http://www.adobe.com/go/getflashplayer">
                        <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash Player" />
                    </a>
                <!--[if !IE]>-->
                </object>
                <!--<![endif]-->
            </object>
        </noscript>
		<!--注册登录-->
		<div class="cd-user-modal" style="display: none;" id="userModal">

			<div class="cd-user-modal-container">
				<sapn id="close"><i class="fa fa-close"></i></sapn>
				<ul class="cd-switcher">
					<li>
						<a href="javascript:" id="add" style="display: none;">用户登录</a>
					</li>
					<li>
						<a href="javascript:" id="add-reg" style="display: none;">注册新用户</a>
					</li>
				</ul>
				<!-- 登录表单 -->
				<div id="cd-login">
					<form class="cd-form logins">
						<!--用户名-->
						<p class="fieldset">
							<label class="image-replace" for="userName">用户名</label>
							<input class="full-width has-padding has-border" id="userName" name="userName" maxlength="16" type="text" placeholder="输入用户名">
						</p>
						<span class="tips1 tips"></span>
						<!--密码-->
						<p class="fieldset">
							<label class="image-replace" for="userPwd">密码</label>
							<input class="full-width has-padding has-border" id="userPwd" type="password" placeholder="请输入密码">
						</p>
						<span class="tips tips2"></span>

						<p class="fieldset">
							<input type="checkbox" id="remember-me" checked>
							<label for="remember-me">记住登录状态</label>
							<span style="float: right;" id="goreg">没有账号？去注册</span>

						</p>

						<p class="fieldset">
							<input class="full-width2" type="button" value="登 录" id="login">
						</p>
					</form>
				</div>
				<div style="display: none;">
					<form action="issue" method="post" id="dataFrom">
					    <input id="key" type="text" name="projectData"  value=""/>
					</form>
				</div>
				
				<div style="display: none;">
					<form action="adaptationIssue" method="post" id="adaptationDataFrom">
					    <input id="adaptationKey" type="text" name="adaptationData"  value=""/>
					</form>
				</div>
				
				<div style="display: none;">
					<form action="unReleasedIssue" method="post" id="unReleasedDataFrom">
					    <input id="unReleasedKey" type="text" name="adaptationData"  value=""/>
					</form>
				</div>
				
				<div style="display: none;">
					<form action="showProject" method="post" id="showProjectForm">
					    <input id="showProjectData" type="text" name="projectId"  value=""/>
					</form>
				</div>
				
				
				<!-- 注册表单 -->
				<div id="cd-signup" style="display: none;">
					<form class="cd-form">
						<!--用户名-->
						<p class="fieldset">
							<label class="image-replace" for="signup-username">用户名</label>
							<input name="userName" maxlength="16" id="regName" class="full-width has-padding has-border" id="signup-username" type="text" placeholder="请输入猫咪号">
							<span id="mustwrite">*必填</span>
						</p>
						<span class="tips reg-tips-user"></span>
						<!--密码-->
						<p class="fieldset">
							<label class="image-replace" for="signup-password">密码</label>
							<input name="userPwd" class="full-width has-padding has-border" id="signup-password" type="password" placeholder="请输入密码">
							<i class="fa fa-eye fa-2x eye" title="点击显示或隐藏密码"></i>
							<span id="mustwrite2">*必填</span>

						</p>
						<span class="tips reg-tips-pwd"></span>
						<p class="fieldset">
							<label class="image-replace" for="signup-password-again">请再次输入密码</label>
							<input name="userPwdAgain" class="full-width has-padding has-border" id="signup-password-again" type="password" placeholder="请再次输入密码">
							<i class="fa fa-eye fa-2x eye" title="点击显示或隐藏密码"></i>
							<span id="mustwrite2">*必填</span>

						</p>
						<span class="tips reg-tips-pwd-again"></span>
						<p class="fieldset">
							<label class="image-replace cd-username" for="signup-userNAME">姓名</label>
							<input class="full-width has-padding has-border" name="name" id="signup-userNAME" type="text" placeholder="输入姓名">
							<span id="mustwrite3">*必填</span>
						</p>
						<span class="tips reg-tips-nickname"></span>
						<p class="fieldset">
							<label class="image-replace" for="signup-userNick">昵称</label>
							<input name="userNick" class="full-width has-padding has-border" id="signup-userNick" type="text" placeholder="输入昵称">
						</p>
						<span class="tips reg-tips-nick"></span>

						<p class="fieldset">
							<label class="image-replace" for="signup-occupation">请选择用户类型</label>
							<select class="full-width has-padding has-border" id="signup-occupation" name="userType">
								<option value="" disabled selected>请选择用户类型</option>
								<option value="1">老师</option>
								<option value="2">学生</option>
								<option value="3">家长</option>
							</select>
						</p>
						<span class="tips reg-tips-usertype"></span>

						<span class="tips"></span>
						<p class="fieldset" id="hideSchool" style="display: none;">
							<label class="image-replace" for="signup-provinces">请选择学校</label>
							<select class="full-width has-padding has-border" name="school" id="signup-provinces" @change="changeScroll">
								<option value="" disabled selected>请选择学校</option>
								<option :value="val.id" :data-id="val.schoolName" v-for="val in scroll">{{val.schoolName}}</option>
							</select>
						</p>
						<span class="tips"></span>
						<p class="fieldset" id="hideGrade" v-if="grade.length!=0">
							<label class="image-replace" for="signup-school">请选择年级</label>
							<select class="full-width has-padding has-border" name="grade" id="signup-school" @change="changeScroll2">
								<option value="" disabled selected>请选择年级</option>
								<option :value="val.id" :data-id="val.schoolName" v-for="val in grade">{{val.schoolName}}</option>
							</select>
						</p>
						<span class="tips"></span>
						<p class="fieldset" id="hideClassNo" v-if="className.length!=0">
							<label class="image-replace" for="signup-grade">请选择班级</label>
							<select class="full-width has-padding has-border" name="classNo" id="signup-grade">
								<option value="" disabled selected>请选择班级</option>
								<option :value="val.id" :data-id="val.schoolName" v-for="val in className">{{val.schoolName}}</option>
							</select>
						</p>
						<span class="tips"></span>
						<!--电话-->
						<p class="fieldset">
							<label class="image-replace cd-username" for="signup-phone">请输入电话号码</label>
							<input class="full-width has-padding has-border" name="telphone" id="signup-phone" type="text" placeholder="请输入电话号码">
						</p>
						<span class="tips reg-tips-tel"></span>
						<!--邮箱-->
						<p class="fieldset">
							<label class="image-replace" for="signup-email">请输入邮箱号码</label>
							<input class="full-width has-padding has-border" name="email" id="signup-email" type="email" placeholder="请输入邮箱号码">
						</p>
						<span class="tips reg-tips-email"></span>
						<!--QQ-->
						<p class="fieldset">
							<label class="image-replace  cd-username" for="signup-qq">请输入QQ号码</label>
							<input class="full-width has-padding has-border" name="qq" id="signup-qq" type="text" placeholder="请输入QQ号码">
						</p>
						<span class="tips reg-tips-qq"></span>
						<!--微信-->
						<p class="fieldset">
							<label class="image-replace  cd-username" for="signup-wechat">请输入微信号码</label>
							<input class="full-width has-padding has-border" name="wechat" id="signup-wechat" type="text" placeholder="请输入微信号码">
						</p>
						<span class="tips reg-tips-wx"></span>

						<!--<p class="fieldset">
						<input type="checkbox" id="accept-terms">
						<label for="accept-terms">我已阅读并同意 <a href="javascript:">用户协议</a></label>
					</p>-->
						<!--<span class="tips">请确认条款</span>-->
						<p class="fieldset">
							<input class="full-width2" type="button" value="注册新用户" id="reg" ng-click="regs()">
						</p>
						<p id="gologin">已有账号？去登录</p>
					</form>
				</div>
			</div>
		</div>
		<div class="loading" style="display: none;">
			<div class="loading-content">
				<div class="sk-three-bounce">
					<div class="sk-child sk-bounce1"></div>
					<div class="sk-child sk-bounce2"></div>
					<div class="sk-child sk-bounce3"></div>
				</div>
			</div>
		</div>
	</body>
	<!--<script src="script/login_res.js" type="text/javascript" charset="utf-8"></script>-->
	<script type="text/javascript">
		new Vue({
			el: '#userModal',
			data: function() {
				return {
					parentId: 0,
					scroll: [], //学校
					dataid: '', // 学校的id
					dataid2: '', //班级的id
					grade: [], //年级
					className: [], //班级
				}
			},
			methods: {
				queryScroll: function() {
					var _this = this;
					$.ajax({
						type: "post",
						url: "http://www.maomi.xn--fiqs8s/querySchoolInfo",
						async: false,
						data: {
							parentId: _this.parentId
						},
						success: function(res) {
							_this.scroll = res.data
						}
					});
				},
				//学校
				changeScroll: function(ele) {
					this.dataid = ele.target.value
					this.changeGrade()
				},
				//年级
				changeGrade: function() {
					var _this = this;
					$.ajax({
						type: "post",
						url: "http://www.maomi.xn--fiqs8s/querySchoolInfo",
						async: false,
						data: {
							parentId: this.dataid
						},
						success: function(res) {
							_this.grade = res.data
						}
					});
				},
				changeScroll2: function(ele) {
					this.dataid2 = ele.target.value
					this.changeClass()
				},
				//班级
				changeClass: function() {
					var _this = this;
					$.ajax({
						type: "post",
						url: "http://www.maomi.xn--fiqs8s/querySchoolInfo",
						async: false,
						data: {
							parentId: this.dataid2
						},
						success: function(res) {
							_this.className = res.data
						}
					});
				}
			},
			created: function() {
				this.queryScroll()
			}
		})
	</script>
	<script type="application/javascript">
		var userName="${userData.userName}"
		if (userName !=null && userName!="") {
			flashvars.isLogin='true';
		}
	
		function login(data) {
			// 弹出登录框
			$('#add').show()
			$('#add-reg').hide()
			$('.cd-user-modal').show()
			$('#cd-signup').hide()
			$('#cd-login').show()

		}

		/*************/
		function getSwfName(FlashID) {
			if(navigator.appName.indexOf("Microsoft") != -1) {
				return window[FlashID];
			} else {
				return document[FlashID];
			}
		}
		
		function publishSuccess(data){
			 document.getElementById("key").value =data;
			 document.getElementById("dataFrom").submit();
		}
		
		function adaptationSuccess(data){
			 document.getElementById("adaptationKey").value =data;
			 document.getElementById("adaptationDataFrom").submit(); 
		}

		//未发布作品发布
		function unReleasedSuccess(data){
			 document.getElementById("unReleasedKey").value =data;
			 document.getElementById("unReleasedDataFrom").submit(); 
		}
		//查看创作页面
		function returnProjectPage(data){
			window.location.href="${pageContext.request.contextPath}/getDetails/"+data;
		}
		
		//查看作品展示
		function showProject(data){
			 document.getElementById("showProjectData").value =data;
			 document.getElementById("showProjectForm").submit();
		}
		
		function logout(){

		    var r=confirm("确定退出？？!");
		    if (r == true){
				$.ajax({
					type: "post",
					url: "logout",
					async: false,
				});
				location.reload();
				return true;
		    }
		    else{
		    	return false; 
		    }
		}
		
		
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

		$('#log').click(function() {
			$('#add').show()
			$('#add-reg').hide()
			$('.cd-user-modal').show()
			$('#cd-signup').hide()
			$('#cd-login').show()
		})

		$('#goreg').click(function() {
			$('#add-reg').show()
			$('#add').hide()
			$('.cd-user-modal').show()
			$('#cd-login').css('display', 'none');
			$('#cd-signup').removeAttr('style');
		})
		$('#gologin').click(function() {
			$('#add').show()
			$('#add-reg').hide()
			$('.cd-user-modal').show()
			$('#cd-signup').hide()
			$('#cd-login').show()
		})

		var app = angular.module('myapp', [])
			.controller('mycont', ['$scope', '$http', function($scope, $http) {
				// 登录
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
						url: "login ",
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
								getSwfName('Main').ASsetLogin(true);
								$('.cd-user-modal').hide();
							}

						},
						error: function(err) {
							console.log(err)
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
				$('#signup-password-again').blur(function() {
					if($('#signup-password-again').val() === $('#signup-password').val()) {
						angular.element('.reg-tips-pwd-again').html('');
					} else {

						angular.element('.reg-tips-pwd-again').html('两次密码不一致');
						return false;
					}
				})
				$('#regName').click(function() {
					//失去焦点判断用户名  			
					$('#regName').bind('blur', function() {
						if(!$('#regName').val()) {
							angular.element('.reg-tips-user').html('用户名不能为空');
							return false;
						} else {
							angular.element('.reg-tips-user').html('');

						}

						$.ajax({
							type: "post",
							url: "http://www.maomi.xn--fiqs8s/userCheck",
							data: {
								userName: $('#regName').val()
							},
							success: function(res) {
								if(res.resultCode == 1) {
									angular.element('.reg-tips-user').css('color', 'green');
									angular.element('.reg-tips-user').html(res.resultMessage);

								} else if(res.resultCode == -1) {
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
				$scope.regTelphone = /^(1(3|4|5|7|8)\d{9})$/; //电话
				$scope.regEmail = /^(([a-z\d]{0,15}[a-z]{0,10})@([a-z\d]{0,10})\.((com)|(cn)))$/i; //邮箱
				$scope.regQq = /^(\d{5,12})$/; //QQ
				$scope.regWx = /^[a-z]{1}[-_a-z\d]{6,20}$/i; //微信	
				//注册方法add-reg

				$('#reg').click(function() {
					//用户名
					if(!$('#regName').val()) {
						angular.element('.reg-tips-user').html('用户名不能为空');
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

					if(!$('#signup-occupation').val()) {
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
						url: "http://www.maomi.xn--fiqs8s/regist",
						data: {
							userName: $('#regName').val(), //用户名
							userPwd: $('#signup-password').val(), //密码
							userNick: $('#signup-userNick').val(), //昵称
							name: $('#signup-userNAME').val(), //姓名
							userType: $('#signup-occupation').val(), //用户类型
							telphone: $('#signup-phone').val(), //电话
							school: $('#signup-provinces').val(), //学校
							grade: $('#signup-school').val(), //年级
							classNo: $('#signup-grade').val(), //班级
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

		$(window).bind('beforeunload', function() {
			return '确定离开?';
		});
		//页面状态处理
		document.onreadystatechange = documentReadyState;
		loading();

		function documentReadyState() {
			if(document.readyState == "complete") { //载入完成
				completed();
			}
		}
		//加载中显示遮罩
		function loading() {
			$('.loading').show();

			return;
		}
		//加载完成，隐藏遮罩
		function completed() {
			$('.loading').hide();

		}
	</script>
<script type="text/javascript">
		var i = 0;
				$(document).on('click', '.eye', function() {
					if(i % 2 == 0) {
						$(this).siblings('input').removeAttr('type');
						$(this).removeClass('fa-eye').addClass('fa-eye-slash');
					} else {
						$(this).siblings('input').attr('type', 'password');
						$(this).removeClass('fa-eye-slash').addClass('fa-eye');
					}
					i++;

				});

				$(document).on('click', '.header .login>li', function() {
						var index = $(this).index();
						$(this).children('a').css('background', '#3b9cf8');
					})
					.on('click', '.fa-close', function() {
						$('.nav .reg').removeAttr('style');
						$('.nav .log').removeAttr('style');
					});
	</script>
</html>