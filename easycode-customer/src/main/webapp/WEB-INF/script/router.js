angular.module('controllers', [])


.controller('mycont',['$scope','$http',function($scope,$http){
		//退出登录
		$scope.clickLogin = function (){
			var msg = '确定要退出登录?'
			if (confirm(msg)==true){ 
					$.ajax({
						type: "post",
						url: "logout",
						async: false,
						success:function (res) {
							window.location.href="http://www.maomi.xn--fiqs8s/#/home";
						}
					});
					/*location.reload();*/
					return true;
			 }else{ 
			  return false; 
			 }
		}
		
		//登录注册框处理处理
			$scope.log = function () {	
				$scope.showLogin()		//调用弹出登录框方法
			}

			$scope.reg = function () {	//调用弹出登注册
				$scope.showReg()
			}
			
			$scope.userMo = function () {
				$scope.showLogin()	//调用弹出登录框方法
			}
			$('#goreg').click( function () {
				$scope.showReg()	//调用弹出登注册
			})
			$('#gologin').click( function () {
				$scope.showLogin()		//调用弹出登录框方法
			})
		
}])



//作品详情页
//.controller('gamedetails',['$scope','$http',function($scope,$http){
//		$scope.game = function () {
//			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
//						window.location = 'sc/sc.html';
//				}
//		}
//		//作品点赞
//	$scope.zan = function () {
//		$.ajax({
//				type:"post",
//				url:"upvote",
//				data: {
//					projectId:1516863653960
//				},
//				success:function(res){
//					if (res.resultCode == -1) {
//							$('.cd-user-modal').show()
//						}
//					}
//			});
//	}
//	//点击留言
//	$scope.liuyan = function () {
//		$scope.showLogin()		//调用弹出登录框方法
//	}
//	//用户评论点赞
//	$scope.userzan = function () {
//		$.ajax({
//				type:"post",
//				url:"upvote",
//				data: {
//					projectId:1516863653960
//				},
//				success:function(res){
//					if (res.resultCode == -1) {
//							$('.cd-user-modal').show()
//						}
//					}
//			});
//	}
//	//评论的评论点赞
//	$scope.pinlun = function() {
//		$.ajax({
//				type:"post",
//				url:"hupvote",
//				data: {
//					projectId:1516863653960
//				},
//				success:function(res){
//					if (res.resultCode == -1) {
//							$scope.showLogin()		//调用弹出登录框方法
//						}
//					}
//			    
//			});
//	}
//}])




//修改用户信息
//.controller('information',['$scope','$http',function($scope,$http){
//				$scope.student = true;		//用户类型是否为学生
//				$scope.parentId = 0;
//				$scope.scroll = [];	//学校
//				$scope.dataid = '';	// 学校的id
//				$scope.dataid2 = '';	//班级的id
//				$scope.grade = [];	//年级
//				$scope.className = [];	//班级
//				$scope.isValue = ''
//
//				$scope.queryScroll = function () {
//						$.ajax({
//							type:"post",
//							url:"http://www.maomi.xn--fiqs8s/querySchoolInfo",
//							async:false,
//							data:{
//								parentId:$scope.parentId
//							},
//							success:function (res) {
//								console.log(res.data)
//								$scope.scroll = res.data
//							}
//						});
//					}
//				//学校
//					$scope.changeScroll = function(ele){
////						$scope.dataid = ele.target.value
//							console.log(ele)
//						$scope.changeGrade()
//					}
//					//年级
//					$scope.changeGrade = function(){
//						$.ajax({
//							type:"post",
//							url:"http://www.maomi.xn--fiqs8s/querySchoolInfo",
//							async:false,
//							data:{
//								parentId:$scope.dataid
//							},
//							success:function (res) {
//								$scope.grade = res.data
//							}
//						});
//					}
//					$scope.changeScroll2 = function(ele) {
////						$scope.dataid2 = ele.target.value
//						console.log(ele)
//						$scope.changeClass()
//					}
//					//班级
//					$scope.changeClass = function() {
//						$.ajax({
//							type:"post",
//							url:"http://www.maomi.xn--fiqs8s/querySchoolInfo",
//							async:false,
//							data:{
//								parentId:$scope.dataid2
//							},
//							success:function (res) {
//								$scope.className = res.data
//							}
//						});
//					}
//				$scope.queryScroll()
//					
//			$('#previewImg').change( function () {
//           		$.ajax({
//           			type:"post",
//           			url:"upload",
//           			data:new FormData($( "#reg-form" )[0]),
// 					    cache: false,
// 					    contentType: false,  
//        				processData: false, 
//           			success:function(res) {
//								$scope.files = res.data;
//           			},
//           			error:function(err) {
//           				console.log(err)
//           			}
//           		});
//           	})
//		//正则验证
//		$scope.regNick=/^([a-z\d\u4e00-\u9fa5]{6,16})$/;	//昵称
//		$scope.regPwd = /^([a-zA-Z\d]{6,12})$/; 	//密码
//		$scope.regTelphone = /^(1(3|4|5|7|8)\d{9})$/; 	//电话
//		$scope.regEmail=/^(([a-z\d]{0,15}[a-z]{0,10})@([a-z\d]{0,10})\.((com)|(cn)))$/i;	//邮箱
//		$scope.regQq=/^(\d{5,12})$/;	//QQ
//		$scope.regWx=/^[a-z]{1}[-_a-z\d]{6,20}$/i;	//微信
//		$scope.changeInfor = function() {
//			//密码
//			if(!$('#USERPWD').val() || $('#USERPWD').val()  == 'undefined') {
//				angular.element('.reg-tips-pwd').html('密码不能为空');
//				return false;
//			} else {
//				if($('#USERPWD').val().length < 6 || $('#USERPWD').val().length > 16) {
//					angular.element('.reg-tips-pwd').html('字母或数字组成，长度为6-16位');
//					return false;
//				}
//				if($scope.regPwd.test($('#USERPWD').val())) {
//					angular.element('.reg-tips-pwd').html('');
//				}
//			}
//			//确认密码
//			if(!$('#USERPWD').val() && !$('#USERPWD-AGAIN').val()) {
//				angular.element('.reg-tips-pwd-again').html('');
//				return false;
//			} else {
//				if($('#USERPWD-AGAIN').val().length ==0) {
//					angular.element('.reg-tips-pwd-again').html('请再次输入密码');
//					return false;
//				}
//				if($('#USERPWD-AGAIN').val()===$('#USERPWD').val()) {
//					angular.element('.reg-tips-pwd-again').html('');
//				}
//				else{
//					angular.element('.reg-tips-pwd-again').html('两次密码不一致');
//					return false;
//				}
//			}
//			
//			
//			// 昵称
//			if(!$('#USERNACK').val()) {
//				angular.element('.reg-tips-nick').html('昵称长度为1-16位');
//				return false;
//			}
//			// 姓名
//			if(!$('#USERNAME').val()) {
//				angular.element('.reg-tips-name').html('姓名不能为空');
//				return false;
//			} else if($('#USERNAME').val() < 1 || $('#USERNAME').val() > 16) {
//				angular.element('.reg-tips-name').html('姓名长度为1-16位');
//				return false;
//			} else if($scope.regNick.test($('#USERNAME').val())){
//				angular.element('.reg-tips-name').html('');
//			}
//			
//			
//			
//			
//			//电话telphoneNAME
//			if(!$('#telphoneNAME').val() || $scope.regTelphone.test($('#telphoneNAME').val())) {
//				angular.element('.reg-tips-tel').html('');
//			} else {
//				angular.element('.reg-tips-tel').html('电话号码格式错误');
//				return false;
//			}
//			//邮箱
//			if(!$('#Email').val() || $scope.regEmail.test($('#Email').val())){
//				angular.element('.reg-tips-email').html('');
//			}
//			else{
//				angular.element('.reg-tips-email').html('邮箱验证失败');
//				return false;
//			}
//		
//			//QQqqNAME
//			if(!$('#qqNAME').val() || $scope.regQq.test($('#qqNAME').val())){
//				angular.element('.reg-tips-qq').html('');
//			}
//			else{
//				angular.element('.reg-tips-qq').html('QQ号码有误');
//				return false;
//			}
//			
//			//微信
//			if(!$('#wechatNAME').val() || $scope.regWx.test($('#wechatNAME').val())){
//				angular.element('.reg-tips-wx').html('');
//			}
//			else{
//				angular.element('.reg-tips-wx').html('微信号格式错误');
//				return false;
//			}
//			
//
//			$.ajax({
//				type:"post",
//				url:"userModify",
//				async:true,
//				data: {
//					userId: $('#USERID').val(),//用户名ID
//					userPwd: $('#USERPWD').val(),//密码
//					userNick: $('#USERNACK').val(),//昵称USERNACK
//					name: $('#USERNAME').val(),//姓名
////					userType: $scope.userType ? $scope.userType : '2',//用户类型
//					telphone: $('#telphoneNAME').val(),//电话
////					school: $scope.school,//学校
////					grade: $scope.grade,//年级
////					classNo: $scope.classNo,//班级
//					email:$('#Email').val(),	//邮箱
//					qq:$('#qqNAME').val(),		//qq
//					wechat:$('#wechatNAME').val(),	//微信
//					file:$scope.files,
//					remark:$('#remark').val()
//				},
//				success:function(res){
//					if (res.resultCode == 0) {
//						angular.element('.reg-tips-user').html('用户名已经存在');
//						}
//					alert('更新用户信息成功')
//					},
//			    error:function(err){
//					  console.log(1)
//			    }
//			});
//		}
//
//
//}])

//  find页面



