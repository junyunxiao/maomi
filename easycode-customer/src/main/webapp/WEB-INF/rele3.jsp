<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html ng-app="myapp" ng-controller="mycont">

	<head>
		<meta charset="utf-8" />
		<meta name="google" value="notranslate" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="google" value="notranslate" />
		<meta name="renderer" content="webkit" />
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
				<!-- 生成二维码 -->
		<script src="${pageContext.request.contextPath}/js/jquery.qrcode.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/js/qrcode.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/js/utf.js" type="text/javascript" charset="utf-8"></script>
		
		<link rel="stylesheet" type="text/css" href="public/css/flat-ui.css" />
		<link rel="stylesheet" type="text/css" href="public/css/find.css" />
		<link rel="stylesheet" type="text/css" href="public/css/index.css" />
		<link rel="stylesheet" type="text/css" href="public/css/gr_index.css" />
		<link rel="stylesheet" type="text/css" href="public/css/information.css" />
		<link rel="stylesheet" type="text/css" href="public/css/gameDetails.css" />
		<!--字体图标-->
		<link rel="stylesheet" href="public/css/font-awesome.min.css" />
		<!--登录与注册-->
		<link rel="stylesheet" type="text/css" href="public/css/log-reg.css" />
		<link rel="stylesheet" href="public/css/reg_log1.css" />
		<link rel="stylesheet" href="public/css/reg_log2.css" />

		<link rel="stylesheet" type="text/css" href="public/css/convention.css" />
		<link rel="stylesheet" type="text/css" href="public/css/checkbox.min.css" />
		<link rel="stylesheet" type="text/css" href="public/css/loading.css" />
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
				projectUrl: 'scratch/Original.sb2'
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
				text-align: center;
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
				margin-left: auto;
				cursor: pointer;
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
			
			#cuouemian {
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
			label.checkbox {
				display: inline-block;
			}
			
			.el-radio {
				text-align: center;
			}
			
			.game-instruction {
				margin-top: 0;
			}
			
			a {
				font-weight: normal!important;
			}
			
			.navbar-form {
				margin-top: 11px!important;
			}
			
			.navbar-form input {
				padding-right: 50px!important;
			}
			
			.span3 label {
				padding-left: 15px;
				font-size: 12px;
			}
			
			.el-radio-style {}
			
			.cd-user-modal input {
				margin-bottom: 0;
			}
			
			label.checkbox {
				margin-right: 15px;
			}
			
			.togzan {
				background: #FC7373;
			}
			
			.colors {
				color: #fff!important;
			}
			
			#dianzan {
				position: relative;
			}
			
			.jiayi {
				position: absolute;
				top: -40px;
				left: 15px;
				display: none;
				font-size: 14px;
			}
			
			.togcoll {
				background: #FFC530;
			}
			
			.fa-angle-down,
			.fa-angle-up {
				font-size: 20px;
				display: inline-block;
				margin-left: 6px;
			}
			.togzan {
				background: #FC7373;
				color: #fff!important;
			}
			.colors {
				color: #fff!important;
			}
			#dianzan {
				position: relative;
				line-height: 50px;
			}
			.jiayi {
				position: absolute;
				top: -40px;
				left: 15px;
				display: none;
				font-size: 14px;
			}
			.togcoll {
				background: #FFC530;
				color: #fff!important;
			}
			.prohibit {
				background: #ccc!important;
			}
			.prohibit:hover {
				cursor: not-allowed;
			}
			.fa-thumbs-o-up {
				position: absolute;
				top: 50%;
				left: 50%;
				webkit-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				transform: translate(-50%,-50%);
			}
			.content-bootom {
				height: 50px;
				line-height: 50px;
			}
			.content-bootom .col-sm-3{
				font-size: 16px;
			}
		</style>
		<div class="big" id="rele">
			<div class="container">
				<!--内容上部分-->
				<div class="content-top hidden-sm hidden-xs">
					<ul style="margin-bottom: 0;">
						<li style="position: relative;">
							<p class="game-title"><input type="text" class="col-md-6" id="projectName" name="projectName" value="${projectName}"></p>

							<span style="position: absolute;right:0;top: 0;cursor: pointer;font-size: 18px;color: #666;" class="glyphicon glyphicon-cog"></span>
							<div id="cuouemian">
								<div class="span3">
									<label class="radio"><span class="icon"></span><span class="icon-to-fade"></span>
					            <input type="radio" :checked="isPublic==1" v-model="isPublicValue"  name="optionsRadios" id="optionsRadios1" value="1">
					            将创作页面设为：公开
					          </label>
									<label class="radio checked"><span class="icon"></span><span class="icon-to-fade"></span>
					            <input type="radio" :checked="isPublic==0"  v-model="isPublicValue" name="optionsRadios" id="optionsRadios2" value="0" >
					            将创作页面设为：私密
					          </label>
								</div>
							</div>
						</li>
						<br />
						<li>
							<p>
								<span class="game-writer">${createUserName }</span>
								<span class="game-writer" style="display: inline-block;margin-left: 20px;">${remark}</span>

							</p>
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
										To view this page ensure that Adobe Flash Player version 11.1.0 or greater is installed.
									</p>
									<script type="text/javascript">
										var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://");
										document.write("<a href='http://www.adobe.com/go/getflashplayer'><img src='" +
											pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>");
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
											<textarea name="projectDescription" id="projectDescription" class="form-control" rows="4" placeholder="写下你的作品介绍">${projectDescription}</textarea>
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
											<textarea name="projectInstructions" id="projectInstructions" class="form-control" rows="4" placeholder="添加操作说明">${projectInstructions}</textarea>
										</p>
									</li>
								</ul>
							</div>
							<!--标记标签-->
							<div class="col-md-12 col-sm-12 hidden-xs labelling">
								<label class="checkbox" :for="'checkbox'+index" v-for="(val,index) in resultData" @click="add(val)">
						            <input type="checkbox" :value="val.category"  :checked="category.includes(val.category)"  name="apk[]"  :id="'checkbox'+index" data-toggle="checkbox" class="custom-checkbox"><span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"></span></span>
						            	{{val.category}}
						          </label>

							</div>

							<div class="col-md-12 col-sm-12 content-other hidden-sm hidden-xs">

								<!--<div class="col-md-6 col-sm-6 choose-make">
									<a href="javascript:" id="game-choose" class="col-md-6 col-sm-12">转到创作页</a>
								</div>-->
							</div>
						</div>
						<div class="col-md-12 hidden-xs content-bootom">
							<!--浏览、收藏和分享-->
							<div class="col-md-12">
								<div class="col-md-6 col-sm-9 col-xm-9 content-bottom-left">
									<div class="col-sm-3">
										浏览 <span id="browse" style="color: #000;">{{browseTxt}}</span>次
									</div>

							<div class="col-sm-3" id="dianzan" @click="isThumbsup">
								<div class="jiayi">+1</div>
								<div class="dianzan  dianzan1" :class={'togzan':isLike==true}>
									<i class="fa  fa-thumbs-o-up" :class={'togzan':isLike==true}></i>
									<span id="upvotes">${upvoteNum}</span>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="dianzan  dianzan2" :class={'togcoll':isCollection==true} id="collection" @click="collection">
									<i class="fa fa-heart-o" :class={'togcoll':isCollection==true}></i>
									<span class="coll" >收藏</span>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="dianzan dianzan3">
									<i class="fa fa-mobile"></i>
									<span>用手机玩</span>
									<div id="qrcodeCanvas"></div>
								</div>
							</div>
								</div>
								<div class="col-md-6">
									<ul style="margin-bottom: 0;">
										<li class="fabu" @click="release">
											保存
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--=================================================下半部分===================================================-->

				<div class="content-middle rele-bottom">
					<div class="row">
						<div class="col-md-12 col-sm-12 btn-style">
							<li>
								<p>选择移动端键盘操作按钮方式，已选择手机操作模式：{{moshi[phoneMode]}} <span style="float: right;cursor: pointer;" @click="open">展开<i class="fa" :class="down" aria-hidden="true"></i></span></p>
							</li>
							<li>
								<span>注：版本可能与PC端不一样</span>

							</li>
						</div>

						<div class="btn-phone clearfix">
							<ul v-show="openMode">
								<li>
									<div class="el-radio">
										<input type="radio" :checked="operationMode==1" v-model="phoneMode" name="radio1" id="1_5" value="1">
										<label class="el-radio-style" for="1_5"></label>
										<label for="1_5">模式一</label>
									</div>
									<div><label class="el-radio-style" for="1_5"><img src="public/img/m1.png"/></label></div>
								</li>
								<li>
									<div class="el-radio">
										<input type="radio" :checked="operationMode==2" v-model="phoneMode" name="radio1" id="1_6" value="2">
										<label class="el-radio-style" for="1_6"></label>
										<label for="1_6">模式二</label>

									</div>
									<div><label class="el-radio-style" for="1_6"><img src="public/img/m2.png"/></label></div>
								</li>
								<li>
									<div class="el-radio">
										<input type="radio" name="radio1" :checked="operationMode==3" v-model="phoneMode" id="1_7" value="3">
										<label class="el-radio-style" for="1_7"></label>
										<label for="1_7">模式三</label>
									</div>
									<div><label class="el-radio-style" for="1_7"><img src="public/img/m3.png"/></label></div>
								</li>
								<li>
									<div class="el-radio">
										<input type="radio" name="radio1" id="1_8" :checked="operationMode==4" v-model="phoneMode" value="4">
										<label class="el-radio-style" for="1_8"></label>

										<label for="1_8">模式四</label>

									</div>
									<div><label class="el-radio-style" for="1_8"><img src="public/img/m4.png"/></label></div>
								</li>
								<li>
									<div class="el-radio">
										<input type="radio" name="radio1" id="1_9" :checked="operationMode==5" v-model="phoneMode" value="5">
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
								<p class="fieldset" id="hideSchool">
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

			</div>
			<div class="container">
				<!--留言评论部分手机端隐藏-->
				<div class="col-md-12 col-sm-12 hidden-xs" style="padding: 0;">
					<!-- 评论区 -->
					<div class="col-md-12 col-sm-12 comment">
						<div class="comment-list">
							<!-- 留言 -->
							<div class="comment-head">
								<span>留言</span>
							</div>
							<!-- 添加评论 -->
							<div class="conmment-add">
								<label for="" class="comment-add-box">
									<textarea name="" v-model="content" style="height: 100px;" class="form-control" rows="" cols="" placeholder="作品有哪些值得鼓励或可以改进的地方呢？记得保持友善和礼貌，互相鼓励，互相学习哦~"></textarea>
								<!--<span class="emm"><img src="public/img/em.png"/></span>-->
									
								</label>
								<!--没有登录的时候点击留言-->
								<span class="comment-submit" @click="reply()">留言</span>

							</div>
							<!-- 评论详情 -->
							<div class="conmment">
								<div class="conmment-ui" v-for="(val,index) in commens">
									<div class="conmment-content clearfix">
										<div class="item-left">
											<a href="javascript:">
												<img width="60px" height="60px" v-if="val.customer.avatar" :src="'http://www.maomi.xn--fiqs8s/'+val.customer.avatar" />
												<img v-else src="public/img/touxiang.png" />
												<div class="item-content">
													<a href="javascript:">{{val.customer.userNick}}</a>
													<span class="timer">{{val.commentdate}}</span>
													<p class="message">{{val.commentcontent}}</p>
												</div>
										</div>
										<div class="item-right">

											<span class="huifu" @click="currentActive=index" @click.prevent.stop="doLogin">
												<i class="fa fa-commenting-o"></i>
												  回复
											</span>
										</div>
										<!--评论回复框-->
										<div class="conmment-add conmment-review reply2" v-if="showComment" v-show="currentActive == index">
											<label for="" class="comment-add-box">
											<textarea v-model="com1" placeholder="作品有哪些值得鼓励或可以改进的地方呢？记得保持友善和礼貌，互相鼓励，互相学习哦~" class="form-control" style="height: 100px;"></textarea>
										</label>
											<span class="comment-submit" @click="reply2(val.commentinfoid)">留言</span>
										</div>
									</div>

									<div class="children-box" v-if="val.replyComment!=''">
										<!--评论中的评论-->
										<div class="conmment-content clearfix">
											<div class="item-left item-left-to" v-for="(item,ind) in val.replyComment">
												<a href="javascript:" style="margin-right: 20px;">
													<img width="60px" height="60px" v-if="item.replyCustomer.avatar" :src="'http://www.maomi.xn--fiqs8s/'+item.replyCustomer.avatar" />
													<img v-else src="public/img/touxiang.png" />
												</a>
												<div class="item-content">
													<a href="javascript:">{{item.replyCustomer.userNick}}</a>
													<span class="timer">{{item.commentdate}}</span>
													<p class="message"><span>@{{item.customer.userNick}}</span>&nbsp;&nbsp;&nbsp;<span style="color: #666;">{{item.commentcontent}}</span></p>
												</div>
												<div class="item-right">
													<span class="huifu" @click="current = ind" @click.prevent.stop="doLogin">
													<i class="fa fa-commenting-o"></i>
													  回复
												</span>
												</div>
												<!--评论回复框-->
												<div class="conmment-add conmment-review reply3" v-if="showComment" v-show="current == ind">
													<label for="" class="comment-add-box">
													<textarea v-model="com2"  placeholder="作品有哪些值得鼓励或可以改进的地方呢？记得保持友善和礼貌，互相鼓励，互相学习哦~" class="form-control" style="height: 100px;"></textarea>
												</label>
													<span class="comment-submit" @click="reply3(item.commentinfoid)">留言</span>
												</div>
											</div>

										</div>
										<!--评论中的评论结束-->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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

		<script src="script/jquery.sinaEmotion.js" type="text/javascript" charset="utf-8"></script>

		<!--底部导航条-->
		<!-- <div ng-include="'footer.html'"></div> -->
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
		data: function() {
			return {
				resultData: [],
				isLoding: false,
				parentId: 0,
				scroll: [], //学校
				dataid: '', // 学校的id
				dataid2: '', //班级的id
				grade: [], //年级
				className: [], //班级
				moshi: ['模式o', '模式一', '模式二', '模式三', '模式四', '模式五'],
				content: '', //主评论框的内容
				commens: [],
				pageCurrent: 1,
				pageRows: 5,
				content: '', //主评论框的内容
				rowSum: 0, //评论的长度
				currentActive: -1,
				current: -1,
				showComment: true, //是否显示评论框
				com1: '',
				com2: '',
				up:'${userData.userName}', //没有登录的时候
				openMode: false, //默认隐藏操作模式
				browseTxt: 1, //浏览次数
				showComment: true, //是否显示评论框
				isLike: null, // 是否已经点赞,false的时候是已经点赞
				isCollection: null, // 是否已经收藏，false的时候是已经收藏
				parentId: 0,
				phoneMode:"${phoneMode}", //操作模式
				projectType: '',
				isPublicValue:"${isPublic}", //是否公开
				// 以下三个是后台返回的数据 回填
				isPublic:"${isPublic}", //  //1为公开  0为未公开
				category: [], //返回的作品类型
				categorys:${projectType},
				operationMode:"${phoneMode}", //操作模式
			}
		},
		methods: {
			query: function() {
				var _this = this;
				_this.isLoding = true //显示loding
				$.ajax({
					type: "post",
					url: "${pageContext.request.contextPath}/queryCategoryInfo",
					success: function(res) {
						_this.isLoding = false;//隐藏loding
						_this.resultData = res.data.slice(1, -1);
					}
				});
			},
			add: function(val) {
				$("input[name='apk[]']").attr('disabled', true);
				if($("input[name='apk[]']:checked").length >= 3) { //选中个数大于3
					$("input[name='apk[]']:checked").attr('disabled', false);
				} else {
					$("input[name='apk[]']").attr('disabled', false);
				}
			},
			queryScroll: function() {
				var _this = this;
				$.ajax({
					type: "post",
					url: "${pageContext.request.contextPath}/querySchoolInfo",
					async: false,
					data: {
						parentId: _this.parentId
					},
					success: function(res) {
						_this.scroll = res.data;
					}
				});
			},
			//学校
			changeScroll: function(ele) {
				this.dataid = ele.target.value;
				this.changeGrade();
			},
			//年级
			changeGrade: function() {
				var _this = this;
				$.ajax({
					type: "post",
					url: "${pageContext.request.contextPath}/querySchoolInfo",
					async: false,
					data: {
						parentId: this.dataid
					},
					success: function(res) {
						_this.grade = res.data;
					}
				});
			},
			changeScroll2: function(ele) {
				this.dataid2 = ele.target.value;
				this.changeClass()
			},
			//班级
			changeClass: function() {
				var _this = this;
				$.ajax({
					type: "post",
					url: "${pageContext.request.contextPath}/querySchoolInfo",
					async: false,
					data: {
						parentId: this.dataid2
					},
					success: function(res) {
						_this.className = res.data;
					}
				});
			},
			//评论查询
			commen: function(flag) {
				var _this = this;
				_this.isLoding = true //显示loding
				$.ajax({
					type: "POST",
					url: "${pageContext.request.contextPath}/comment",
					async: true,
					data: {
						projectId:"${projectId}",
						pageCurrent: _this.pageCurrent,
						pageRows: _this.pageRows
					},
					success: function(res) {
						_this.rowSum = res.data.rowSum
						_this.isLoding = false //隐藏loding
						if(flag) {
							_this.commens = _this.commens.concat(res.data.rows);
						} else {
							_this.commens = res.data.rows;
						}
					}
				});
			},
			//分页评论
			page: function() {
				var _this = this;
				$(window).scroll(function() {
					var scrollPos = $(this).scrollTop();
					var dbHiht = $(document).height();
					if(dbHiht - scrollPos - $(this).height() < 1) {
						setTimeout(function() {
							_this.pageCurrent++;
							//禁止下拉
							if(_this.commens.length == _this.rowSum) {
								return
							}
							_this.commen(true);
						}, 500)
					}
				})
			},
			//提交评论
			reply: function() {
				var _this = this
				_this.isLoding = true //显示loding
				if(!_this.up) {
					$('#add').show()
					$('#add-reg').hide()
					$('.cd-user-modal').show()
					$('#cd-signup').hide()
					$('#cd-login').show()
					_this.isLoding = false //显示loding
					return false
				} else {
					if(!this.content) {
						_this.isLoding = false //显示loding
						return false
					} else {
						$.ajax({
							type: "post",
							url: "${pageContext.request.contextPath}/addComment",
							async: true,
							data: {
				  				projectId:"${projectId}",// 作品的id
				  				commentuserid:"${userData.userId}",	//评论者用户ID 
				  				commentcontent:this.content,	//评论的内容
				  				parentid:"${projectId}"
							},
							success: function(res) {
								_this.isLoding = false; //隐藏loding
								_this.commen();
								_this.content = '';
							}
						});
					}
				}

			},
			//评论中的评论1
			reply2: function(index) {
				var _this = this
				_this.isLoding = true //显示loding
				if(!_this.up) {
					$('#add').show()
					$('#add-reg').hide()
					$('.cd-user-modal').show()
					$('#cd-signup').hide()
					$('#cd-login').show()
					_this.isLoding = false //显示loding
					return false
				} else {
					if(!this.com1) {
						_this.isLoding = false //显示loding
						return false
					} else {
						$.ajax({
							type: "post",
							url: "${pageContext.request.contextPath}/addComment",
							async: true,
							data: {
				  				projectId:"${projectId}",// 作品的id
				  				commentuserid:"${userData.userId}",	//评论者用户ID 
				  				commentcontent:this.com1,	//评论的内容
				  				parentid:index		//评论对象的ID
							},
							success: function(res) {
								_this.isLoding = false; //隐藏loding
								$('.reply2').addClass('displays');
								_this.commen();
								_this.com1 = '';
							}
						});
					}
				}

			},
			//评论中的评论2
			reply3: function(index) {
				var _this = this
				_this.isLoding = true //显示loding
				if(!_this.up) {
					$('#add').show()
					$('#add-reg').hide()
					$('.cd-user-modal').show()
					$('#cd-signup').hide()
					$('#cd-login').show()
					_this.isLoding = false //显示loding
					return false
				} else {
					if(!this.com2) {
						_this.isLoding = false //显示loding
						return false
					} else {
						$.ajax({
							type: "post",
							url: "${pageContext.request.contextPath}/addComment",
							async: true,
							data: {
					  				projectId:"${projectId}",// 作品的id
					  				commentuserid:"${userData.userId}",	//评论者用户ID 
					  				commentcontent:this.com2,	//评论的内容
					  				parentid:index		//评论对象的ID
							},
							success: function(res) {
								_this.isLoding = false; //隐藏loding
								$('.reply3').addClass('displays');
								_this.commen();
								_this.com2 = '';
							}
						});
					}
				}

			},
			//点击保存
			release: function() {
				var _this = this
				if($('#projectName') == '') {
					alert('请输入作品名字')
					return false
				}
				if($("input[name='apk[]']:checked").length == 0) { //选中个数大于3
					alert('请选择作品类别');
					return false
				}
				$("input[name='apk[]']:checked").each(function(i) {
					_this.projectType += $(this).val() + ','
				})
				$.ajax({
					type: "post",
					url: "${pageContext.request.contextPath}/projectUpdateSubmit",
					data: {
						projectId:"${projectId}",// 作品的id
						projectName: $('#projectName').val(),
						projectType: _this.projectType, //作品类别
						isPublic: _this.isPublicValue, //是否公开
						projectDescription: $('#projectDescription').val(), //作品介绍
						projectInstructions: $('#projectInstructions').val(), //操作说明
						phoneMode: _this.phoneMode, //操作类别
						/* projectUrl: '', //作品url（我回传）
						resourcesUrl: '' //作品截图 */
					},success: function(res) {
						alert(res.resultMessage);
					}
				})
			},
			//展开
			open: function() {
				this.openMode = !this.openMode
			},
			doLogin: function() {
				if(!this.up) {
					$('#add').show()
					$('#add-reg').hide()
					$('.cd-user-modal').show()
					$('#cd-signup').hide()
					$('#cd-login').show()
					this.showComment = false
					return false
				}
			},
			//点击弹出登录框
		  	isThumbsup:function(){
		  		_this = this
		  		if (!_this.up) {
						$('#add').show()
						$('#add-reg').hide()
						$('.cd-user-modal').show()
						$('#cd-signup').hide()
						$('#cd-login').show()
						return false
					} else {
						//点赞的时候请求的接口
						if (_this.isLike==true) {
							$.ajax({
								type:"post",
								url:"${pageContext.request.contextPath}/cancelUpvote",
								data:{
									projectId:"${projectId}"
								},
								success:function(res) {
											//取消点赞
									$("#upvotes").text(res.data);
									_this.isLike = false;
								}
							});
						//没有点赞的时候请求的接口
						} else if(_this.isLike == false ) {
							$.ajax({
								type:"post",
								url:"${pageContext.request.contextPath}/upvote",
								data:{
									projectId:"${projectId}"
								},
								success:function(res) {
											//点赞
									$('.jiayi').css('color','#FC7373');
									$(".jiayi").stop().fadeIn(1000).fadeOut(1000);
									$(".jiayi").text('点赞数 +1');
									$("#upvotes").text(res.data);
									_this.isLike = true;
								}
							});
						}
						
					}
		  	},
		  	
		  	//收藏和取消收藏
		  	collection:function() {
		  		var _this = this
		  		if (!_this.up) {

						$('#add').show()
						$('#add-reg').hide()
						$('.cd-user-modal').show()
						$('#cd-signup').hide()
						$('#cd-login').show()
						return false
						
					} else {
						//取消收藏的时候请求的接口
						if (_this.isCollection == true) {
							$.ajax({
								type:"post",
								url:"${pageContext.request.contextPath}/cancelEnshrine",
								data:{
									projectId:"${projectId}"
								},
								success:function(res) {
									//取消收藏
									$('.coll').text('收藏');
									_this.isCollection = false;
								}
							});
						//收藏的时候请求的接口
						} else if(_this.isCollection == false ) {
							$.ajax({
								type:"post",
								url:"${pageContext.request.contextPath}/enshrine",
								data:{
									projectId:"${projectId}"
								},
								success:function(res) {
									//收藏
									$('.coll').text('已收藏');
									_this.isCollection = true;
								}
							});
						}
					}
		  	},
			//浏览次数
			browse:function () {
				var that = this
				$.ajax({
					type:"post",
					url:"${pageContext.request.contextPath}/browse",
					data:{
						projectId:"${projectId}"
					},
					success:function(res) {
							that.browseTxt = res.data;
						}
						});
			},
			//查询点赞没有
			queryLike: function() {
				var _this = this
				//登录的时候才去查询点赞没有
				if(_this.up) {
					$.ajax({
						type: "post",
						url: "${pageContext.request.contextPath}/queryState",
						async: true,
						data:{
							projectId:"${projectId}"
						},
						success: function(res) {
							console.log(res)
							//成功
							_this.isLike = res.data.isUpvote
							_this.isCollection = res.data.isCollect
							if (res.data.isCollect == true ) {
								$('.coll').text('已收藏')
							}
						}
					});
				}

			},
			//处理返回数据
			queryCategory:function () {
				var that = this
				that.categorys.forEach(function(item) {
					that.category.push(item.category);
				})
				console.log(that.category );
			}
		},
		created: function() {
			this.query();
			this.queryScroll();
			this.commen();
			this.page();
			this.queryLike();
			this.queryCategory();
		},
		computed: {
			down: function() {
				return this.openMode ? 'fa-angle-up' : 'fa-angle-down'
			},
			
		},
		mounted:function () {
			this.browse();
		}
	})

    jQuery('#qrcodeCanvas').qrcode({
    	 render    : "canvas",
        text    : "http://www.maomi.xn--fiqs8s/queryDetail/${projectId}",
        width : "100",               //二维码的宽度
        height : "100",              //二维码的高度
        background : "#ffffff",       //二维码的后景色
        foreground : "#000000",        //二维码的前景色
        src: '${pageContext.request.contextPath}/public/img/20180304221625.gif'             //二维码中间的图片
    });  
</script>
<script type="text/javascript">
	$('.glyphicon-cog').mouseover(function() {
		$('#cuouemian').show();
	})
	$('#cuouemian').mouseleave(function() {
		$(this).hide();
	})
</script>