<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="zh" ng-app="myapp" ng-controller="mycont">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta name="google" value="notranslate" />
		<meta name="renderer" content="webkit"/>
	<title>猫咪易编</title>
		<!-- 网站图标 -->
	  <link rel="icon" href="${pageContext.request.contextPath}/public/img/favicon.ico" type="image/x-icon" />
	  <script src="${pageContext.request.contextPath}/script/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/script/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/script/angular.min.js" type="text/javascript" charset="utf-8"></script>
		<!-- 生成二维码 -->
		<script src="${pageContext.request.contextPath}/js/jquery.qrcode.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/js/qrcode.js" type="text/javascript" charset="utf-8"></script>
		<script src="${pageContext.request.contextPath}/js/utf.js" type="text/javascript" charset="utf-8"></script>

		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/find.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/index.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/gr_index.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/information.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/gameDetails.css" />
		<!--字体图标-->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/public/css/font-awesome.min.css" />
		<!--登录与注册-->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/public/css/reg_log1.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/public/css/reg_log2.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/convention.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/loading.css" />
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/public/css/log-reg.css" />
		<!-- <style type="text/css">
			.togzan {
				background: #FC7373;
				color: #fff!important;
			}
			.colors{
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
			.togcoll{
				background: #FFC530;
				color: #fff!important;
				
			}
			.prohibit {

				background: #ccc!important;
				cursor: not-allowed;
			}
		</style> -->
		<style type="text/css">
			.togzan {
				background: #FC7373;
				color: #fff!important;
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
				color: #fff!important;
			}
			
			.prohibit {
				background: #ccc!important;
			}
			
			.prohibit:hover {
				cursor: not-allowed;
			}
		</style>
</head>
<body>
	    <script type="text/javascript" src="${pageContext.request.contextPath}/js/history.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/swfobject.js"></script>
    <script type="text/javascript">
            // For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection. 
            var swfVersionStr = "11.1.0";
            // To use express install, set to playerProductInstall.swf, otherwise the empty string. 
            var xiSwfUrlStr = "playerProductInstall.swf";
            var flashvars = {
            	extensionDevMode: 'true',
            	showOnly: 'true',
            	projectUrl: 'http://www.maomiyibian.com/${projectUrl}'
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
                "${pageContext.request.contextPath}/scratch/Scratch.swf", "flashContent", 
                "100%", "100%", 
                swfVersionStr, xiSwfUrlStr, 
                flashvars, params, attributes);
            // JavaScript enabled so display the flashContent div in case it is not replaced with a swf object.
            swfobject.createCSS("#flashContent", "display:block;text-align:left;");
        </script>
		
		
		
   
		
		
		<div class="big" id="projectName">
       	 <!--导航条-->
<!-- 			<div ng-include="'header.html'"></div> -->
		<c:import url="header.jsp"></c:import>
			<div class="container">
				<!--内容上部分-->
				<div class="content-top hidden-sm hidden-xs">
					<ul style="margin-bottom: 0;">
						<li>
							<p class="game-title">${projectName }</p>
						</li>
						<li><span class="game-writer">${createUserName }</span><span>${remark }</span> </li>
					</ul>

				</div>
				<!--内容中间部分-->
				<div class="content-middle">
					<div class="row">
						<!--游戏框-->
						<div ng-class="game()" class="col-md-6 col-sm-12 content-middle-left">
							
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
							                <param name="movie" value="${pageContext.request.contextPath}/scratch/Scratch.swf" />
							                <param name="quality" value="high" />
							                <param name="bgcolor" value="#ffffff" />
							                <param name="allowScriptAccess" value="sameDomain" />
							                <param name="allowFullScreen" value="true" />
							                <!--[if !IE]>-->
							                <object type="application/x-shockwave-flash" data="${pageContext.request.contextPath}/scratch/Scratch.swf" width="100%" height="100%">
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
					<div class="col-md-6 col-sm-12 hidden-xs content-middle-right" >
							<!--作品介绍-->
							<div class="col-md-12 col-sm-12 game-introduce">
								<ul>
									<li class="game-introduce-title">
										<p>作品介绍：</p>
									</li>
									<li class="game-introduce-content">
										<p style="overflow-y: auto;height: 120px;">
											${projectDescription}
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
											${projectInstructions}
										</p>
										
									</li>
								</ul>
							</div>
							<!--标记标签-->
							
							<div class="col-md-12 col-sm-12 hidden-xs labelling">
								<!-- <a v-for="val in resultData" style="display: inline-block; margin-right: 10px;">{{val.category}}</a> -->
								<c:forEach var="types" items="${projectType }">
									<a>${types.category }</a>
								</c:forEach>
							</div>
							<!--改编、创作与发布-->
							<div class="col-md-12 col-sm-12 content-other hidden-sm hidden-xs">
								<div class="col-md-6 col-sm-6 choose-make">
									<!--改编form提交-->
									  <form action="${pageContext.request.contextPath}/adaptation" method="post" class="col-md-6 col-sm-12">
									  	<input type="hidden" name="remark"  value=" 本作品改编自 ${createUserName} 的作品 ${projectName}" />
									  	<input type="hidden" name="projectUrl"  value="http://www.maomiyibian.com/${projectUrl}" />
										  <a href="javascript:" id="game-choose">
										  		<input type="submit" value="改编" :disabled="isPublic==0"  :class="{'prohibit':isPublic==0}"/>
										  	</a>
									  </form>
									  
									  <!--查看创作页form提交-->
										<form action="${pageContext.request.contextPath}/viewPage" method="post" class="col-md-6 col-sm-12">
									     	<input type="hidden" name="projectId" value=" ${projectId}" />
									     	<input type="hidden" name="projectUrl" value=" ${projectUrl}" />
											<a href="javascript:">
										  		<input type="submit" value="查看创作页" :disabled="isPublic==0"  :class="{'prohibit':isPublic==0}"/>
										  	</a>
										</form>
								  </div>
								<div class="col-md-6 col-sm-6 posted-updata">
									<ul>
										<li class="clearfix" style="text-align: right;">
											<span class="col-md-6 col-ms-12">发布于：<fmt:formatDate value="${createTime}" type="both"/></span>

										</li>
									</ul>
								</div>
							</div>
						</div>
				
						

					</div>
				</div>

				<!--内容下边部分 手机端自动隐藏-->
				<div class="col-md-12 hidden-xs content-bootom">
					<!--浏览、收藏和分享-->
					<div class="col-md-12 col-sm-12 col-xs-12 view-share">
						<div class="col-md-6 col-sm-9 col-xm-9 content-bottom-left">
						
							<div class="col-sm-3">
								浏览 <span id="browse" style="color: #000;">{{browseTxt}}</span>次
							</div>
							<!--点赞-->
							<div class="col-sm-3" id="dianzan" @click="isThumbsup">
								<div class="jiayi">+1</div>
								<div class="dianzan  dianzan1" :class={'togzan':isLike==true}>
									<i class="fa  fa-thumbs-o-up" :class={'togzan':isLike==true}></i>
									<span id="upvotes">${upvoteNum }</span>
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
									<!-- <img src="public/img/erweim.png" id="imgshouji"/> -->
								</div>

								
							</div>
							
						</div>
					</div>
				</div>

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
								<span class="comment-submit"  @click="reply()">留言</span>

							</div>
							<!-- 评论详情 -->
							<div class="conmment">
								<div class="conmment-ui" v-for="(val,index) in commens">
									<div class="conmment-content clearfix">
										<div class="item-left">
											<a href="javascript:">
												<img width="60px" height="60px" v-if="val.customer.avatar" :src="'http://www.maomiyibian.com/'+val.customer.avatar"/>
												<img v-else src="${pageContext.request.contextPath}/public/img/touxiang.png" />
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
													<img width="60px" height="60px"  v-if="item.replyCustomer.avatar" :src="'http://www.maomiyibian.com/'+item.replyCustomer.avatar"/>
													<img v-else src="${pageContext.request.contextPath}/public/img/touxiang.png" />
												</a>
												<div class="item-content">
													<a href="javascript:">{{item.replyCustomer.userNick}}</a>
													<span class="timer">{{item.commentdate}}</span>
													<p class="message"><span>@{{item.customer.userNick}}</span>&nbsp;&nbsp;&nbsp;<span style="color: #666;">{{item.commentcontent}}</span></p>
												</div>
												<div class="item-right">											
												<span class="huifu" @click="current = ind"  @click.prevent.stop="doLogin">
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

						<p class="fieldset">
							<input class="full-width2" type="button" value="注册新用户" id="reg" ng-click="regs()">
						</p>
						<p id="gologin">已有账号？去登录</p>
					</form>
				</div>
			</div>
		</div>
		</div>
	
		   		<!--底部导航条-->
<!-- 		<div ng-include="'footer.html'"></div> -->
			<c:import url="footer.jsp"></c:import>
				<!--注册登录-->
		
		

<script type="text/javascript">

if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	window.location.href="${pageContext.request.contextPath}/queryDetail/${projectId}";
}
</script>

				
</body>
</html>
<script src="${pageContext.request.contextPath}/script/vue.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	new Vue({
	  el: '#projectName',
	  data:function(){
			return {
		  		resultData:[],
		  		isPublic:'${isPublic}',	//为1的时候 改编和查看 创作页可以点击 ,为0的时候不允许点击  按钮颜色为灰色
		  		commens:[],
		  		content:'',	//主评论框的内容
		  		currentActive:-1,
		  		current:-1,
		  		com1:'',
		  		com2:'',
		  		isLoding:false,
		  		up:'${userData.userName}',	//没有登录的时候
		  		parentId:0,
				scroll:[],	//学校
				dataid:'',	// 学校的id
				dataid2:'',	//班级的id
				grade:[],	//年级
				className:[],	//班级
				browseTxt:1,	//浏览次数
				showComment:true,//是否显示评论框
				isLike:null,	// 是否已经点赞,false的时候是已经点赞
				isCollection:null,// 是否已经收藏，false的时候是已经收藏
			}
	  },
	  methods:{
	  	doLogin:function() {
	  		if (!this.up) {
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
	
	  	//评论查询
	  	commen:function(){
	  		var _this = this;
	  		_this.isLoding = true	//显示loding
	  		$.ajax({
	  			type:"POST",
	  			url:"${pageContext.request.contextPath}/comment",
	  			async:true,
	  			data:{
	  				projectId:"${projectId}",
	  				pageCurrent:1,
	  				pageRows:10
	  			},
	  			success:function(res) {
	  				_this.commens = res.data.rows;
	  				_this.isLoding = false;	//隐藏loding
	  			}
	  		});
	  	},
	  	//提交评论
	  	reply:function(){

	  		var _this = this
	  		_this.isLoding = true	//显示loding
	  		if (!_this.up) {
	  			$('#add').show()
				$('#add-reg').hide()
				$('.cd-user-modal').show()
				$('#cd-signup').hide()
				$('#cd-login').show()
	  			_this.isLoding = false	//显示loding
				return false
	  		} else {
	  			if (!this.content) {
	  			_this.isLoding = false	//显示loding
	  			return false
	  		} else {
	  			$.ajax({
		  			type:"post",
			  			url:"${pageContext.request.contextPath}/addComment",
			  			async:true,
			  			data:{
			  				projectId:"${projectId}",// 作品的id
			  				commentuserid:"${userData.userId}",	//评论者用户ID 
			  				commentcontent:this.content,	//评论的内容
			  				parentid:"${projectId}"
			  				//评论对象的ID
			  			},
			  			success:function(res){
			  				_this.isLoding = false	//隐藏loding
			  				
			  				_this.commen()
			  				_this.content = ''
			  			}
	  		});
	  		}
	  		}
	  			  		
	  	},
	  	
	  	//评论中的评论1
	  	reply2:function(index){
	  		var _this = this
	  		_this.isLoding = true	//显示loding
	  		if (!_this.up) {
	  			$('#add').show()
				$('#add-reg').hide()
				$('.cd-user-modal').show()
				$('#cd-signup').hide()
				$('#cd-login').show()
	  			_this.isLoding = false	//显示loding
				return false
	  		} else {
	  			if (!this.com1) {
	  			_this.isLoding = false	//显示loding
	  			return false
	  		} else {
	  			$.ajax({
		  			type:"post",
			  			url:"${pageContext.request.contextPath}/addComment",
			  			async:true,
			  			data:{
			  				projectId:"${projectId}",// 作品的id
			  				commentuserid:"${userData.userId}",	//评论者用户ID 
			  				commentcontent:this.com1,	//评论的内容
			  				parentid:index		//评论对象的ID
			  			},
			  			success:function(res){
			  				_this.isLoding = false	//隐藏loding
							$('.reply2').addClass('displays');
			  				
			  				_this.commen();
			  				_this.com1 = '';
			  			}
	  		});
	  		}
	  		}
	  			
	  	},
	  	//评论中的评论2
	  	reply3:function(index){
	  		var _this = this
	  		_this.isLoding = true	//显示loding
	  		if (!_this.up) {
	  			$('#add').show()
				$('#add-reg').hide()
				$('.cd-user-modal').show()
				$('#cd-signup').hide()
				$('#cd-login').show()
	  			_this.isLoding = false	//显示loding
				return false
	  		} else {
	  			if (!this.com2) {
	  			_this.isLoding = false	//显示loding
	  			return false
	  		} else {
	  			$.ajax({
		  			type:"post",
			  			url:"${pageContext.request.contextPath}/addComment",
			  			async:true,
			  			data:{
			  				projectId:"${projectId}",// 作品的id
			  				commentuserid:"${userData.userId}",	//评论者用户ID 
			  				commentcontent:this.com2,	//评论的内容
			  				parentid:index		//评论对象的ID
			  			},
			  			success:function(res){
			  				_this.isLoding = false	//隐藏loding
			  				$('.reply3').addClass('displays');
			  				_this.commen();
			  				_this.com2 = '';
			  			}
	  		});
	  		}
	  		}
	  		
	  	},
	  		queryScroll:function () {
						var _this = this;
						$.ajax({
							type:"post",
							url:"${pageContext.request.contextPath}/querySchoolInfo",
							async:false,
							data:{
								parentId:_this.parentId
							},
							success:function (res) {
								_this.scroll = res.data;
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
							url:"${pageContext.request.contextPath}/querySchoolInfo",
							async:false,
							data:{
								parentId:this.dataid
							},
							success:function (res) {
								_this.grade = res.data;
							}
						});
					},
					changeScroll2:function(ele) {
						this.dataid2 = ele.target.value;
						this.changeClass();
					},
					//班级
					changeClass:function() {
						var _this = this;
						$.ajax({
							type:"post",
							url:"${pageContext.request.contextPath}/querySchoolInfo",
							async:false,
							data:{
								parentId:this.dataid2
							},
							success:function (res) {
								_this.className = res.data;
							}
						});
					},
					//查询点赞没有
					queryLike:function() {
						_this = this
						//登录的时候才去查询点赞没有
						if (_this.up) {
							$.ajax({
								type:"post",
								url:"${pageContext.request.contextPath}/queryState",
								async:false,
								data:{
									projectId:"${projectId}"
								},
								success:function(res) {
									if(res.data !=null){
										//成功
										_this.isLike =res.data.isUpvote;
										_this.isCollection =res.data.isCollect;
										if(res.data.isCollect==true){$('.coll').text('已收藏');}
									}else{
										_this.isLike =false;
										_this.isCollection =false;
									}
									
								}
							});	
						}
					}
	  },
	  created:function (){
	  	/*this.query()*/
		this.commen()
		this.queryScroll()
//		if (!this.up) {
//			this.isLike = false;	// 是否已经点赞
//			this.isCollection = false;// 是否已经收藏
//		}
		// 在页面加载 前请求接口

			this.queryLike()


	  },
	  mounted:function(){
		this.browse()
	  }
	})
    jQuery('#qrcodeCanvas').qrcode({
    	 render    : "canvas",
        text    : "http://www.maomiyibian.com/queryDetail/${projectId}",
        width : "100",               //二维码的宽度
        height : "100",              //二维码的高度
        background : "#ffffff",       //二维码的后景色
        foreground : "#000000",        //二维码的前景色
        src: '${pageContext.request.contextPath}/public/img/20180304221625.gif'             //二维码中间的图片
    });  
	
</script>
<script type="text/javascript">
$('#serachbox').click(function() {
	if(!$('#serachbox').val()) {
		window.location.href = "http://www.maomiyibian.com/#/find?q=" + $('#inputbox').val()

	} else {
		window.location.href = "http://www.maomiyibian.com/#/find?q=" + $('#inputbox').val()
	}
})
	//alert("搜索框"+$('#').val());
	$('#logout').click( function () {
		var r=confirm("确定退出？?");
		    if (r == true){
		    	$.ajax({
					type:"post",
					url:"${pageContext.request.contextPath}/logout",
					async:false,
					success:function (res) {
						window.location.href="http://www.maomiyibian.com/#/home";
					}
				});
		    }
	
			})
</script>
<script src="${pageContext.request.contextPath}/script/login_res.js" type="text/javascript" charset="utf-8"></script>

