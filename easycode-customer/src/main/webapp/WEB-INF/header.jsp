<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
				<a class="navbar-brand" href="#/" ng-click="add()">猫咪易编
					<span class="beta">EzCode</span>
				</a>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navlist">
					<li id="index">
						<a href="${pageContext.request.contextPath}/#/home">首页</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/#/find">发现</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/editor" id="create" ng-click="create()">创作</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/#/system">课程体系</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/#/enroll">课程报名</a>
					</li>
				</ul>
				<form class="navbar-form navbar-left hidden-xs">
					<div class="form-group">
						<input type="text" class="form-control" id="inputbox" placeholder="搜索">
						<span class="glyphicon glyphicon-search" id="serachbox"></span>
					</div>
				</form>
					<c:choose>
						<c:when test="${userData.userName!=null }">
							<ul class="nav navbar-nav navbar-right menu-top" style="display: block;">
							<!--登录后显示-->
							<li class="dropdown">
								<a href="javascript:" class="dropdown-toggle bell">
										<c:if test="${userData.avatar!=null }">
												<img src="http://www.maomiyibian.com/${userData.avatar}" />
											</c:if>
											<c:if test="${userData.avatar==null }">
												<img src="${pageContext.request.contextPath}/public/img/ren.png" />
											</c:if>
								<ul class="dropdown-menu menu-1">
									<li>
										<a href="${pageContext.request.contextPath}/#/WorksManagement">作品/专题管理</a>
									</li>
									<li>
										<a href="${pageContext.request.contextPath}/#/gr_index">个人主页</a>
									</li>
									<li>
										<a href="${pageContext.request.contextPath}/#/information">账号设置</a>
									</li>
									<!--退出登录-->
									<li>
										<a href="javascript:" id="logout">退出登录</a>
									</li>
								</ul>
							</li>
						</ul>
					</c:when>
					<c:otherwise>
						<!--登录注册-->
						<ul class="nav navbar-nav navbar-right login hidden-sm hidden-xs" style="display: block;">
							<li>
								<a href="javascript:" class="log" ng-click="log()" id="log">登录</a>
							</li>
						</ul>
					</c:otherwise>
				</c:choose>
			</div>
		</nav>
	</div>
</header>
<script type="text/javascript">
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
<script type="text/javascript">
	$('#serachbox').click(function() {
		if(!$('#serachbox').val()) {
			window.location.href = "http://www.maomiyibian.com/#/find?q=" + $('#inputbox').val()

		} else {
			window.location.href = "http://www.maomiyibian.com/#/find?q=" + $('#inputbox').val()
		}
	})
/* 	document.onkeydown = function(e) {
			if(!e) e = window.event;
			if((e.keyCode || e.which) == 13) {
				alert("回车");
				document.getElementById("serachbox").click();
			}
		} */

</script>
<script type="text/javascript">
	$('#logout').click( function () {
		var r=confirm("确定退出？?");
		    if (r == true){
		    	$.ajax({
					type:"post",
					url:"${pageContext.request.contextPath}/logout",
					async:true,
					success:function (res) {
						window.location.href="http://www.maomiyibian.com/#/home";
					}
				});
		    }
	
			})
</script>
