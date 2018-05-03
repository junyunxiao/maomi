<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="zh" ng-app="myapp" ng-controller="mycont">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<!-- 网站图标 -->
	<link rel="icon" href="public/img/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="public/css/index.css"/>
	<link rel="stylesheet" type="text/css" href="public/css/log-reg.css"/>
	<link rel="stylesheet" type="text/css" href="public/css/reg_log1.css"/>
	<link rel="stylesheet" type="text/css" href="public/css/reg_log2.css"/>
		<link rel="stylesheet" type="text/css" href="public/css/find.css" />
		<link rel="stylesheet" href="public/css/font-awesome.min.css" />
	<script src="js/jquery-2.1.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="script/angular.min.js" type="text/javascript" charset="utf-8"></script>

	<title>错误提示</title>
	<style type="text/css">
		.cd-user-modal input{
			margin-bottom: 0;
		}
	</style>
</head>
<body>
	        <script type="text/javascript">
            $(function() {
                var h = $(window).height();
                $('body').height(h);
                $('.mianBox').height(h);
                centerWindow(".tipInfo");
            });

            //2.将盒子方法放入这个方，方便法统一调用
            function centerWindow(a) {
                center(a);
                //自适应窗口
                $(window).bind('scroll resize',
                        function() {
                            center(a);
                        });
            }
            //1.居中方法，传入需要剧中的标签
            function center(a) {
                var wWidth = $(window).width();
                var wHeight = $(window).height();
                var boxWidth = $(a).width();
                var boxHeight = $(a).height();
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                var top = scrollTop + (wHeight - boxHeight) / 2 - 100;
                var left = scrollLeft + (wWidth - boxWidth) / 2;
                $(a).css({
                    "top": top,
                    "left": left
                });
            }
        </script>
        <style type="text/css">

		footer {
			margin-top: 0;
		}

        </style>
    </head>
    <body>
    	<!-- 头部-->
		<!-- <div ng-include="'header.html'"> -->
		<c:import url="header.jsp"></c:import>
			
		</div>
        <div class="mianBox">
            <img src="public/img/san.png" alt="" class="san" />
            <div class="tipInfo" style="top: 50px;">
                <div class="in">
                    <div class="textThis">
                        <h2>错误提示：</h2>
                        <p>${message}</p>
                    </div>
                </div>
            </div>
        </div>
        		<!--底部导航条-->
		<c:import url="footer.jsp"></c:import>
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
							<span id="mustwrite2">*必填</span>

						</p>
						<span class="tips reg-tips-pwd"></span>
						<p class="fieldset">
							<label class="image-replace" for="signup-password-again">请再次输入密码</label>
							<input name="userPwdAgain" class="full-width has-padding has-border" id="signup-password-again" type="password" placeholder="请再次输入密码">
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
</body>
<script src="script/login_res.js" type="text/javascript" charset="utf-8"></script>
	<script src="sc/vue.min.js" type="text/javascript" charset="utf-8"></script>
</html>
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