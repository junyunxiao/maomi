<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html ng-app="myapp" ng-controller="mycont">

	<head>
		<meta charset="utf-8" />
		<meta name="baidu-site-verification" content="KaR0Uw34mF" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="google" value="notranslate" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="Keywords" content="猫咪易编,少儿编程,少儿应用,Scratch,创客,创客教育,创新思维,编程思维创客教育,steam教育,人工智能教育,素质教育,思维锻炼，6至12岁" />
		<meta name="Description" content="猫咪易编是重庆猫咪科技有限公司旗下的Scratch创作型社区。基于麻省理工媒体实验室终身幼儿园组的图形化在线编程工具Scratch，为所有喜欢Scratch创作的朋友，提供一个自由创作、发表、交流作品的平台，并永久公益，免费开放。" />
		<title>猫咪易编</title>
		<!-- 网站图标 -->
		<link rel="icon" href="public/img/favicon.ico" type="image/x-icon" />
		<script src="script/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="script/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="script/angular.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="script/angular-route.min.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="public/css/flat-ui.css"/>
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
		<link rel="stylesheet" type="text/css" href="public/css/checkbox.min.css"/>
		<script src="script/vue.min.js" type="text/javascript" charset="utf-8"></script>

		<!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	</head>
	<body>
		<!--导航条-->
		<header>
			<div class="container header">
				<nav class="navbar navbar-default">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				      </button>
						<a class="navbar-brand" ng-click="add()">猫咪易编
							<span class="beta">EzCode</span>
						</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav navlist">
							<li id="index">
								<a href="#/home">首页</a>
							</li>
							<li>
								<a href="#/find">发现</a>
							</li>
							<li>
								<a href="editor.html" id="create" ng-click="create()">创作</a>
							</li>
							<li>
								<a href="#/system">课程体系</a>
							</li>
							<li>
								<a href="#/enroll">课程报名</a>
							</li>
						</ul>
						<form class="navbar-form navbar-left hidden-xs">
							<div class="form-group">

									<input type="text" id="search" class="form-control" placeholder="搜索">
									<span class="glyphicon glyphicon-search"  ng-click="search()"></span>

							</div>
						</form>
						
			
						<c:choose>
							<c:when test="${userData.userName!=null }">
							<!--登录后显示-->
								<ul class="nav navbar-nav navbar-right menu-top" >
									<li class="dropdown">
										<a href="javascript:" class="dropdown-toggle bell">
											<c:if test="${userData.avatar!=null }">
												<img src="http://www.maomi.xn--fiqs8s/${userData.avatar}" />
											</c:if>
											<c:if test="${userData.avatar==null }">
												<img src="public/img/ren.png" />
											</c:if>
											</a>
										<ul class="dropdown-menu menu-1">
											<li>
												<a href="#/WorksManagement">作品/专题管理</a>
											</li>
											<li>
												<a href="#/gr_index">个人主页</a>
											</li>
											<li>
												<a href="#/information">账号设置</a>
											</li>
											<!--退出登录-->
											<li>
												<a href="javascript:" ng-click="clickLogin()">退出登录</a>
											</li>
										</ul>
									</li>
								</ul>
							</c:when>
							<c:otherwise>
								<!--登录注册-->
								<ul class="nav navbar-nav navbar-right login hidden-sm hidden-xs" style="display: block;">
									<li>
										<a href="javascript:" class="log" ng-click="log()">登录</a>
									</li>
								</ul>
							</c:otherwise>
							</c:choose>
					</div>
				</nav>
			</div>
		</header>
		<!--手机端导航条-->
		<div class="mobile">
			<div class="container-fluid">
				<div class="col-xs-5 data">
					<a class="">猫咪易编
						<span class="beta">EzCode</span>
					</a>
				</div>
				<div class="col-xs-7">
					<div class="arra">
						<div class="col-xs-4">
							<a href="#/home" class="act2">首页</a>
						</div>
						<div class="col-xs-4">
							<a href="#/find">发现</a>
						</div>
						<!--<div class="col-xs-3"><a href="#/mobilecreation">创作</a></div>-->
						<c:choose>
							<c:when test="${userData.userName!=null }">
									<div class="col-xs-3" id="leftTop" >
										<a href="javascript:" class="dropdown-toggle bell">
											<c:if test="${userData.avatar!=null }">
												<img src="http://www.maomi.xn--fiqs8s/${userData.avatar}" />
											</c:if>
											<c:if test="${userData.avatar==null }">
												<img src="public/img/ren.png" />
											</c:if>
										</a>
										<ul id="leftTopto" style="display: none;">
											<li>
												<a href="#/gr_index">个人主页</a>
											</li>
											<li><span ng-click="clickLogin()">退出登录</span></li>
										</ul>
										<script type="text/javascript">
											$('.dropdown-toggle').click(function() {
												$('#leftTopto').slideToggle(300)
											})
											$('#leftTopto li').click(function() {
												$('#leftTopto').hide()
											})
										</script>
									</div>
							</c:when>
							<c:otherwise>
									<!--登录-->
								<div class="col-xs-4">
									<a href="javascript:" ng-click="userMo()" style="color: #000!important;background: none!important;" class="dropdown-toggle bell">
										登录
									</a>
								</div>
							</c:otherwise>
						</c:choose>
					</div>
				</div>
			</div>
		</div>

		<!--页面-->
		<div ng-view=""  ></div>

		<!--底部导航条-->
		<footer class="hidden-sm hidden-xs">
			<div class="container">
				<div class="col-md-3 footer-clean">
					<ul>
						<li>
							<h4>联系我们</h4></li>
						<li>重庆猫咪科技有限公司</li>
						<li>地址 : 重庆市渝北区仙桃街数据谷东路19号</li>
						<li>电话 : 15123218389</li>
						<li>邮箱 : 503131970@qq.com</li>
					</ul>
				</div>
				<!-- <div class="col-md-6">
					<div class="col-md-6">
						<li>

							<h4><a href="#/home">首页</a></h4>
						</li>
						<li>
							<a href="#/convention">社区公约</a>
						</li>
						<li>
							<a href="#/aboutUs">关于我们</a>
						</li>
						<li>
							<a href="#/conectUs">联系我们</a>
						</li>
						<li>
							<a href="#/termsUs">使用条款</a>
						</li>
						<li>
							<a href="#/sitemap">网站地图</a>
						</li>
					</div>
					<div class="col-md-6">
						<li>
							<h4>其他服务</h4>
						</li>
						
						<li>
							<img src="public/img/sdfsdf.png" class="footer-code" />
						</li>
					</div>
				</div> -->
				<div class="col-md-6">
					<div class="col-md-6">
						<li>
							<h4><a href="#/home">首页</a></h4>
						</li>
						<li>
							<a href="#/convention">社区公约</a>
						</li>
						<li>
							<a href="#/aboutUs">关于我们</a>
						</li>
						<li>
							<a href="#/conectUs">联系我们</a>
						</li>
						<li>
							<a href="#/termsUs">使用条款</a>
						</li>
						<li>
							<a href="#/sitemap">网站地图</a>
						</li>
					</div>
					<div class="col-md-6">
						<li>
							<h4>其他服务</h4>
						</li>
						
						<li>
							<img src="public/img/sdfsdf.png" class="footer-code" />
						</li>
					</div>
				</div>
				<div class="col-md-3 footer-input">

						<img src="public/img/20180201123032.png">
				</div>
			</div>
			</div>
		</footer>
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
							<input class="full-width has-padding has-border" name="userPwd" id="userPwd" type="password" placeholder="请输入密码">
							<i class="fa fa-eye fa-2x eye" title="点击显示或隐藏密码"></i>
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

				<!-- 注册表单 -->
				<style type="text/css">
					
				</style>
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
							<span id="mustwrite2">*必填</span>
							<i class="fa fa-eye fa-2x eye" title="点击显示或隐藏密码"></i>
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
								<option disabled selected>请选择用户类型:</option>
								<option value="1">老师</option>
								<option value="2">学生</option>
								<option value="3">家长</option>
							</select>
						</p>
						<span class="tips reg-tips-usertype"></span>
						<span class="tips"></span>
						<p class="fieldset" id="hideSchool" style="display: none;">
							<label class="image-replace" for="signup-provinces">请选择学校</label>
							<select class="full-width has-padding has-border" name="school"  id="signup-provinces" @change="changeScroll">
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
						<p class="fieldset">
							<input class="full-width2" type="button" value="注册新用户" id="reg" ng-click="regs()">
						</p>
						<p id="gologin">已有账号？去登录</p>
					</form>
				</div>
			</div>
		</div>
		<script type="text/javascript">
			new Vue({
				el:'#userModal',
				data:function() {
					return {
						parentId:0,
						scroll:[],	//学校
						dataid:'',	// 学校的id
						dataid2:'',	//班级的id
						grade:[],	//年级
						className:[],	//班级
					}
				},
				methods:{
					queryScroll:function () {
						var _this = this;
						$.ajax({
							type:"post",
							url:"http://www.maomi.xn--fiqs8s/querySchoolInfo",
							async:false,
							data:{
								parentId:_this.parentId
							},
							success:function (res) {
								_this.scroll = res.data
							}
						});
					},
					//学校
					changeScroll:function(ele){
						this.dataid = ele.target.value
						this.changeGrade()
					},
					//年级
					changeGrade:function(){
						var _this = this;
						$.ajax({
							type:"post",
							url:"http://www.maomi.xn--fiqs8s/querySchoolInfo",
							async:false,
							data:{
								parentId:this.dataid
							},
							success:function (res) {
								_this.grade = res.data
							}
						});
					},
					changeScroll2:function(ele) {
						this.dataid2 = ele.target.value
						this.changeClass()
					},
					//班级
					changeClass:function() {
						var _this = this;
						$.ajax({
							type:"post",
							url:"http://www.maomi.xn--fiqs8s/querySchoolInfo",
							async:false,
							data:{
								parentId:this.dataid2
							},
							success:function (res) {
								_this.className = res.data
							}
						});
					}
				},
				created:function () {
					this.queryScroll()
				}
			})

		</script>
		<script>
			$(document).on('click', '#add', function() {
				$('#cd-signup').css('display', 'none');
				$('#cd-login').removeAttr('style');
			});
			$(document).on('click', '#add-reg', function() {
				$('#cd-login').css('display', 'none');
				$('#cd-signup').removeAttr('style');
			});
			$('#close').click(function() {
				$('.cd-user-modal').hide();
			})
		</script>

	</body>
	
	<script src="script/app.js" type="text/javascript" charset="utf-8"></script>
	<script src="script/set_style.js" type="text/javascript" charset="utf-8"></script>
	<script src="script/swiper.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="script/router.js" type="text/javascript" charset="utf-8"></script>

</html>
