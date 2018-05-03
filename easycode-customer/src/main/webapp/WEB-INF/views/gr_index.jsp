<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"  %>
<style type="text/css">
	.item {
		margin-top: 10px!important;
	}
	.gr_tab #myTab>li>a>i {
		    font-style: normal;
		    padding-bottom: 5px;
		}
	.ssg {
		border-bottom: solid 3px #34C9DB;
	}
	.nav-tabs>li.active>a {
		border-bottom: none!important;
	}
	#myTab>li a:hover {
		background: none;
		border-color: transparent;
	}
	.ux-btn {
		display: inline-block;
		text-align: center;
		cursor: pointer;
		float: right;
		margin-top: 5px;
		width: 76px;
		height: 32px;
		background: #78bdff;
		font-size: 14px;
    color: #FFFFFF;
    border-radius: 35px !important;
    line-height: 32px;
    
	}
	@media only screen and (max-width: 768px){
		.gr_tab #myTab>li>a>i {
			padding-bottom: 5px;
		}
	}

		#home img {
			height: 130px;
			width: 100%;
			object-fit: cover;
		}

</style>
		<div class="container gr_main" id="gr_index">
			<!--电脑端：个人信息-->
			<div class="gr_top row clearmp hidden-xs hidden-sm">
				<div class="col-md-9 col-sm-9 col-xs-9 clearmp">
					<div class="gr_top_img col-md-3 col-sm-4 col-xs-4" style="width: 20%;">
							<c:if test="${userData.avatar!=null }">
								<img src="http://www.maomi.xn--fiqs8s/${userData.avatar}" class="img_header"/>
							</c:if>
							<c:if test="${userData.avatar==null }">
								<img src="public/img/ren.png" class="img_header"/>
							</c:if>
					</div>
					<div class="gr_top_info col-md-9 col-sm-8 col-xs-8">
						<p>${userData.userName }</p>
						<p>加入时间：<fmt:formatDate value="${userData.creatTime}" type="both"/> </p>
						<p>${userData.remark }</p>
					</div>
				</div>
				<div class="col-md-3 col-sm-3 col-xs-3 text-right gr_top_lianjie">
					
					<a href="#/information" class="gr_top_shouchang clearmp">
						<span class="glyphicon glyphicon-cog"></span>
						<span>设置</span>
					</a>
				</div>
			</div>
			<!--手机-->
				<div class="clearmp gr_main_shouji hidden-md hidden-lg">
					<!--手机端：个人信息-->
					<div class="container-fluid">
						<div class="row">
							<div class="col-xs-4"></div>
							<div class="col-xs-4 text-center">
								<img src="public/img/touxiang.png" class="img_header"/>
							</div>
							<div class="col-xs-4 text-center">
								<c:if test="${userData.avatar!=null }">
									<img src="http://www.maomi.xn--fiqs8s/${userData.avatar}" class="img_header"/>
								</c:if>
								<c:if test="${userData.avatar==null }">
									<img src="public/img/touxiang.png" class="img_header"/>
								</c:if>
							</div> 

						</div>
						<div class="row text-center p1">${userData.userName }</div>
						<div class="row text-center p1">${userData.remark }</div>
					</div>
				</div>
			<!--tab-->
			<div class="container tabtab">
				<div class="gr_tab">
				<ul id="myTab" class="nav nav-tabs">
						<li class="col-xs-3 col-sm-3 col-md-2" @click="fabulous"><a href="javascript:" data-toggle="tab"><i>赞过的作品</i> </a></li>
						<li class="col-xs-3 col-md-2 col-sm-3" @click="release"><a href="javascript:" data-toggle="tab"><i>收藏的作品</i> </a></li>
						
				</ul>
				<div id="myTabContent" class="tab-content clearfix">
					<div class="tab-pane active clearfix" id="home">
						<div class="row">
							<div class="col-md-3 col-sm-6 col-xs-6 item"v-for="val in resultData" @click="zanguo(val.projectId)">
									<div class="thumbnail">
								      <a href="javascript:">
								      <img :src="'http://www.maomi.xn--fiqs8s/'+val.resourcesUrl" class="my_pic"/>
								      </a>
								      <div class="caption">
								        <h5 class="ovhiden"><a href="" class="title-name">{{val.projectName}}</a></h5>
								        	<div class="row">
								        		<div class="col-md-5 col-xs-12 text-left"><a class="names" href="">{{val.createUserName}}</a></div>
								        		<div class="col-md-7 col-xs-12 locate ">
								        			<div class="col-md-6 col-xs-4">
								        				<span class="glyphicon glyphicon-thumbs-up"><font>{{val.upvoteNum}}</font></span>
								        			</div>
								        			<div class="col-md-6 col-xs-8">
								        				<span class="glyphicon glyphicon-eye-open"><font>{{val.browseNum}}</font></span>
								        			</div>
								        		</div>
								        	</div>
								      </div>
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
		
<script type="text/javascript">
	new Vue({
	  el: '#gr_index',
	  data:function(){
			return {
			pageCurrent:1, //当前页 默认为1 
			pageRows:8,//每页显示多少条(默认30)
	  		resultData:[],
	  		 url:'queryAlreadyUpvote',	// 赞过的作品
	  		 isLoding:false,
	  		 rowSum:0,
			}
	  		

	  },
	  methods:{
	  	//默认显示赞过的作品
	  	zan:function(flag) {
	  		var _this = this;
	  		_this.isLoding = true;//显示loding
					$.ajax({
						type:"post",
						url: _this.url,
						async:true,
						data: {
					    pageCurrent:_this.pageCurrent,
						pageRows:_this.pageRows

					 },
					 success:function (res) {
					 	if (res.resultCode == 1) {
					 	_this.isLoding = false	//隐藏loding
					 	_this.rowSum = res.data.rowSum;
					 	if (flag) {		//为true就实现累加
								_this.resultData = _this.resultData.concat(res.data.rows);
								
							} else {
								_this.resultData = res.data.rows;
							}
					 	}
					 	
					 }
					});
	  	},
	  	//点击已经赞过的作品按钮
	  	fabulous:function () {
	  		this.url = 'queryAlreadyUpvote';
	  		this.zan();
	  	},
	  	//点击已经收藏的作品按钮
	  	release:function () {
	  		this.url = 'queryAlreadyCollected';
	  		this.zan();
	  	},
	  //分页
	  	page:function() {
	  		var _this = this;
	  		$(window).scroll(function(){
				var scrollPos = $(this).scrollTop();
				var dbHiht = $(document).height();
				if(dbHiht - scrollPos - $(this).height() < 1){
					setTimeout( function () {
						_this.pageCurrent++;
						if (_this.resultData.length == _this.rowSum) {
								return;
								
							}
						_this.zan(true);
					},500)
				}
			})
	  	},
	  	zanguo(val){
	  		window.location.href="getDetails/"+val;
	  	}
	  	
	  },
	  created:function (){
	  	this.zan();
	  	this.page();
	  }
	})
</script>