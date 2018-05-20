<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html ng-app="myapp" ng-controller="mycont">

	<head>
		<meta charset="utf-8" />
		 <meta name="google" value="notranslate" />         
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>猫咪易编</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
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
		<link rel="stylesheet" type="text/css" href="public/css/log-reg.css"/>
		<link rel="stylesheet" href="public/css/reg_log1.css" />
		<link rel="stylesheet" href="public/css/reg_log2.css" />

		<link rel="stylesheet" type="text/css" href="public/css/convention.css" />
		<link rel="stylesheet" type="text/css" href="public/css/checkbox.min.css"/>
		<link rel="stylesheet" type="text/css" href="public/css/loading.css8"/>
		<script type="text/javascript" src="js/history.js"></script>
        <script type="text/javascript" src="js/swfobject.js"></script>
         <script type="text/javascript">
            // For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection. 
            var swfVersionStr = "11.1.0";
            // To use express install, set to playerProductInstall.swf, otherwise the empty string. 
            var xiSwfUrlStr = "playerProductInstall.swf";
            var flashvars = {
            	extensionDevMode: 'true',
            	showOnly: 'true',
            	projectUrl: 'http://www.maomi.xn--fiqs8s/${projectUrl}'
            };
            var params = {};
            params.quality = "high";
            params.bgcolor = "#ffffff";
            params.allowscriptaccess = "sameDomain";
            params.allowfullscreen = "true";
            var attributes = {};
            attributes.id = "Player";
            attributes.name = "Player";
            attributes.align = "middle";
            swfobject.embedSWF(
                "scratch/Scratch.swf", "flashContent", 
                "100%", "100%", 
                swfVersionStr, xiSwfUrlStr, 
                flashvars, params, attributes);
            // JavaScript enabled so display the flashContent div in case it is not replaced with a swf object.
            swfobject.createCSS("#flashContent", "display:block;text-align:left;");
        </script>
	</head>

	<body>
		<!--导航条-->
		<!-- <div ng-include="'header.html'"></div> -->
		<c:import url="header.jsp"></c:import>

		<!--页面-->
		<style>
			.game-title input {
				outline: none;
				border: none;
				border: 1px dashed #DDDDDD;
			}
			
			.game-writer {
				padding-left: 16px;
			}
			
			.rele-bottom {
				margin-top: 20px;
			}
			
			.btn-style p {
				font-size: 16px;
			}
			
			.btn-style span {
				font-size: 16px;
				color: #666;
			}
			
			.caption {
				margin-top: 20px;
			}
			
			.btn-phone ul {
				display: flex;
				width: 100%;
				padding-top: 40px;
			}
			
			.btn-phone ul li {
				flex: 1;
			}
			
			.btn-phone li:focus,
			.btn-phone li:hover {
				color: #20a0ff;
			}
			
			.btn-phone li img:focus,
			.btn-phone li img:hover {}
			
			.fabu {
				background: #34C9DB;
				font-size: 18px;
				color: #FFF;
				display: block;
				width: 220px;
				height: 52px;
				line-height: 52px;
				text-align: center;
				border-radius: 100px !important;
				margin: 30px auto 0;
				cursor: pointer;
				border: none;
			}
			
			.publish-rules {
				margin-top: 20px;
				text-align: center;
				font-size: 16px;
			}
			
			.publish-rules label {
				font-weight: 500;
			}
			
			.lefrs {
				display: inline-block;
				margin-left: 5px;
				color: #fff!important;
				background: #0099FF!important;
			}
			
			#choose-tips {
				color: orangered;
				padding-left: 20px;
			}
			#cuouemian{
				position: absolute;
				right: -73px;
				top: 25px;
				width: 160px;
			    box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
			    border: 1px solid #ccc;
			    padding: 10px;
			    display: none;
				z-index: 10;
			}
			/*#cuouemian p{
				margin: 0;

				line-height: 0;
			}
			#cuouemian p label {
				
			}*/
			label.checkbox{
				display: inline-block;
			}
			.el-radio {
				text-align: center;
			}
		.game-instruction{
			margin-top: 0;
		}
		a{
			font-weight: normal!important;
		}
		.navbar-form{
			margin-top: 11px!important;
		}
		.navbar-form input {
			padding-right: 50px!important;
		}
		.span3 label{
			padding-left: 15px;
			font-size: 12px;
		}
		 .el-radio-style{
		 	
		 }
		 .cd-user-modal input {
		 	margin-bottom: 0;
		 }
		 label.checkbox {
		 	margin-right: 15px;
		 }
		</style>
		<div class="big" id="rele">
			<form action="projectRelease" method="post" onsubmit="return check()">
			<div class="container">
				<!--内容上部分-->
				<div class="content-top hidden-sm hidden-xs">
					<ul style="margin-bottom: 0;">
						<li style="position: relative;">
							<p class="game-title"><input type="text" class="col-md-6" id="projectName" name="projectName" value="${projectName }"></p>

								<span style="position: absolute;right:0;top: 0;cursor: pointer;font-size: 18px;color: #666;" class="glyphicon glyphicon-cog"></span>
							<div id="cuouemian">
								<div class="span3">
					          <label class="radio" ><span class="icon"></span><span class="icon-to-fade"></span>
					            <input type="radio" v-model="isPublicValue" checked id="optionsRadios1" value="1" name="isPublic">
					            将创作页面设为：公开
					          </label>
					          <label class="radio" ><span class="icon"></span><span class="icon-to-fade"></span>
					            <input type="radio" v-model="isPublicValue" id="optionsRadios2" value="0" name="isPublic">
					            将创作页面设为：私密
					          </label>
					        </div>
							</div>							
						</li>
						<br />
						<li>
							<p><span class="game-writer">${createUserName }</span></p>
						</li>
					</ul>
				</div>
				<!--内容中间部分-->
				<div class="content-middle">
					<div class="row">
						
						<!--游戏框-->
						<div class="col-md-6 col-sm-12 content-middle-left">
							<div class="game-div">
									<div id="flashContent">
						            <p>
						                To view this page ensure that Adobe Flash Player version 
						                11.1.0 or greater is installed. 
						            </p>
						            <script type="text/javascript"> 
						                var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://"); 
						                document.write("<a href='http://www.adobe.com/go/getflashplayer'><img src='" 
						                                + pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>" ); 
						            </script> 
						        </div>
								     <noscript>
							            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="Player" style="margin-left: 300px;">
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
							</div>
						</div>
						<!--游戏内容框-->
						<div class="col-md-6 col-sm-12 hidden-xs content-middle-right">
							<!--作品介绍-->
							<div class="col-md-12 col-sm-12 game-introduce">
								<ul>
									<li class="game-introduce-title">
										<p>作品介绍：</p>
									</li>
									<li class="game-introduce-content">
										<p style="overflow-y: auto;height: 120px;">
											<textarea name="projectDescription" id="projectDescription" class="form-control" rows="4" placeholder="写下你的作品介绍"></textarea>
										</p>
									</li>
								</ul>
							</div>
							<!--操作说明-->
							<div class="col-md-12 col-sm-12 game-instruction">
								<ul>
									<li class="game-instruction-title">
										<p>操作说明：</p>
									</li>
									<li class="game-instruction-content">
										<p>
											<textarea name="projectInstructions" id="projectInstructions" class="form-control" rows="4" placeholder="添加操作说明"></textarea>
										</p>
									</li>
								</ul>
							</div>
							<div style="display: none;">
								<input type="text" name="projectId" value="${projectId}"/>
								<input type="text" name="projectUrl" value="${projectUrl }"/>
								<input type="text" name="resourcesUrl" value="${resourcesUrl }"/>
							</div>
							
							
							<!--标记标签-->
							<div class="col-md-12 col-sm-12 hidden-xs labelling" >
						          <label class="checkbox sect" :for="'checkbox'+index" v-for="(val,index) in resultData" @click="add(val)">
						            <input type="checkbox" :value="val.category" name="projectType"  :id="'checkbox'+index" data-toggle="checkbox" class="custom-checkbox sect"><span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"></span></span>
						            	{{val.category}}
						          </label>
						          	<!--LODING-->
							<div class="loading" v-show="isLoding">
								<div class="loading-content">
									<div class="sk-three-bounce">
								        <div class="sk-child sk-bounce1"></div>
								        <div class="sk-child sk-bounce2"></div>
								        <div class="sk-child sk-bounce3"></div>
								      </div>
								</div>
			</div>
			
							</div>
			
							

							<div class="col-md-12 col-sm-12 content-other hidden-sm hidden-xs">
								<!-- 转到创作页面 -->
								<!-- <div class="col-md-6 col-sm-6 choose-make">
									<a href="javascript:" id="game-choose" class="col-md-6 col-sm-12">转到创作页</a>
								</div> -->
							</div>
						</div>

					</div>
				</div>
				<!--=================================================下半部分===================================================-->

				<div class="content-middle rele-bottom">
					<div class="row">
						<div class="col-md-12 col-sm-12 btn-style">
							<li>
								<p>选择移动端键盘操作按钮方式</p>
							</li>
							<li>
								<span>注：版本可能与PC端不一样</span>

							</li>
						</div>
						
						<div class="btn-phone clearfix">
							<ul>
								<li>
										<div class="el-radio">
											<input type="radio" checked name="phoneMode" id="1_5" value="1" v-model="phoneMode">
											<label class="el-radio-style" for="1_5"></label>
											<label for="1_5">模式一</label>
										</div>						            
										<div><label class="el-radio-style" for="1_5"><img src="public/img/m1.png"/></label></div>
								</li>
							<li>
										<div class="el-radio">
											<input type="radio" name="phoneMode" id="1_6" value="2" v-model="phoneMode">
											<label class="el-radio-style" for="1_6"></label>
											<label for="1_6">模式二</label>
											
										</div>						            
										<div><label class="el-radio-style" for="1_6"><img src="public/img/m2.png"/></label></div>
								</li>
								<li>
										<div class="el-radio">
											<input type="radio" name="phoneMode" id="1_7" value="3" v-model="phoneMode">
											<label class="el-radio-style" for="1_7"></label>
											<label for="1_7">模式三</label>										
										</div>						            
										<div><label class="el-radio-style" for="1_7"><img src="public/img/m3.png"/></label></div>
								</li>
								<li>
										<div class="el-radio">
											<input type="radio" name="phoneMode" id="1_8" value="4" v-model="phoneMode">
											<label class="el-radio-style" for="1_8"></label>

											<label for="1_8">模式四</label>
																						
										</div>						            
										<div><label class="el-radio-style" for="1_8"><img src="public/img/m4.png"/></label></div>
								</li>
								<li>
										<div class="el-radio">
											<input type="radio" name="phoneMode" id="1_9" value="5" v-model="phoneMode">
											<label class="el-radio-style" for="1_9"></label>
											<label for="1_9">模式五</label>
										</div>						            
										<div><label class="el-radio-style" for="1_9"><img src="public/img/m5.png"/></label></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
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
						<p class="fieldset" id="hideSchool">
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
				<div>
					<ul>
						<!--<li class="fabu" @click="release">
							发布
						</li>-->
						<input type="submit" class="fabu" name="" id="" value="发布" />
					</ul>
				</div>

			</div>
				<!--<input type="submit" value=""/>-->
			</form>
		</div>
	
		<script src="script/jquery.sinaEmotion.js" type="text/javascript" charset="utf-8"></script>

		<!--底部导航条-->
		<c:import url="footer.jsp"></c:import>

	</body>

</html>

<script src="script/app.js" type="text/javascript" charset="utf-8"></script>
<script src="script/set_style.js" type="text/javascript" charset="utf-8"></script>
<script src="script/swiper.min.js" type="text/javascript" charset="utf-8"></script>
<script src="script/router.js" type="text/javascript" charset="utf-8"></script>
<script src="script/login_res.js" type="text/javascript" charset="utf-8"></script>
<script src="script/vue.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
		new Vue({
			  el: '#rele',
			  data:function(){
					return {
				  		resultData:[],
				  		isLoding:false,
				  		parentId:0,
						scroll:[],	//学校
						dataid:'',	// 学校的id
						dataid2:'',	//班级的id
						grade:[],	//年级
						className:[],	//班级
						isPublic:1,	//  是否公开
						phoneMode:1,	//手机端操作模式
						projectType:'',
						isPublicValue:1
					}
			  },
			  methods:{
			  	query:function() {
			  		var _this = this;
			  		_this.isLoding = true	//显示loding
							$.ajax({
								type:"post",
								url: "http://www.maomi.xn--fiqs8s/queryCategoryInfo",
							 success:function (res) {
							 	if (res.resultCode == 1) {
							 		_this.isLoding = false	//隐藏loding
										_this.resultData = res.data.slice(1)
							 	}
							 }
							});
			  	},
			  	add:function (val) {

						   $("input[name='projectType']").attr('disabled', true);
						            if ($("input[name='projectType']:checked").length >= 3) {//选中个数大于3
						                $("input[name='projectType']:checked").attr('disabled', false);
						            } else {
						                $("input[name='projectType']").attr('disabled', false);			
						            }
			
			  },
			 
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
					},
					//点击发布
					release:function (){
						var _this = this
						if($('#projectName') == '') {
								alert('请输入作品名字')
								return false
							}
							if ($("input[name='projectType']:checked").length == 0) {//选中个数大于3
					                alert('请选择作品类别');
					                return false
					            } 
					        $("input[name='projectType']:checked").each(function(i){
					        	_this.projectType +=  $(this).val() + ','
					        })
							$.ajax({
								type:"post",
								url: "http://www.maomi.xn--fiqs8s/release",
								data:{
									projectName:$('#projectName').val(),
									projectType:_this.projectType,	//作品类别
									isPublic:_this.isPublicValue,		//是否公开
									projectDescription:$('#projectDescription').val(),	//作品介绍
									projectInstructions:$('#projectInstructions').val(),	//操作说明
									phoneMode:_this.phoneMode,		//操作类别
									projectUrl:'',		//作品url（我回传）
									resourcesUrl:''	//作品截图
								},
								success:function() {
								},
								error:function(){
									console.log('错误')
								}
							})
					}
},
created:function (){
			  	this.query()
				this.queryScroll()

			  }
	})
</script>
<script type="text/javascript">
	$('.glyphicon-cog').mouseover(function () {
		$('#cuouemian').show()
	})
	$('#cuouemian').mouseleave(function () {
		$(this).hide()
	})
</script>
<script type="text/javascript">
			var projectType = ''
			function check() {
				
				$("input[name='projectType']:checked").each(function(i){
			        	projectType +=  $(this).val() + ','
			        })
			        $("input[name='projectType']").val(projectType)

				if ($("input[name='projectType']:checked").length == 0) {
			                alert('请选择作品类别');
			                return false
					} 
				return true;
				}
				
	
</script>