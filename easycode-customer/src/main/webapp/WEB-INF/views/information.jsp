<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<style type="text/css">
	.reg-log-big {
		padding-top: 100px;
		padding-bottom: 50px;
		background: url('public/img/bg.jpg')no-repeat 0px 0px;
		background-size: cover;
	}
	/*select表单设置*/
	
	#reg-form .form-control {
		height: 45px;
		padding: 5px 8px;
		color: #fff;
		outline: none;
		background: none;
		font-weight: 500;
		margin-top: 15px;
		border: 1px solid #889BA0;
	}
	
	.form-control option {
		color: #000;
		margin-bottom: 10px;
		font-size: 16px;
		text-align: left;
		font-weight: bold;
	}
	/*错误提示*/
	
	.reg-tips {
		color: #FF0000;
		text-align: left;
	}
	
	.form-control input[type="file"] {
		margin-top: 10px;
		margin-bottom: 15px;
	}
	
	.not-allowed {
		border: none!important;
		border-bottom: 1px solid #889BA0!important;
		border-radius: 0;
		box-shadow: none;
	}
	
	@media only screen and (max-width: 768px) {
		input {
			margin-bottom: 5px!important;
			padding-left: 0!important;
		}
	}
	
	footer {
		margin-top: 0;
	}
	
	#imghead {
		margin-left: 26px;
	}
	/*修改placeholder字体颜色*/
	
	#reg-form input::-webkit-input-placeholder {
		color: white;
	}
	
	.show-hide-pwd {
		position: relative;
	}
	
	.show-hide-pwd .eyes {
		position: absolute;
		right: 10px;
		top: 12px;
		color: #DEDEDE;
	}
	
	.show-hide-pwd .eyes:hover {
		color: #484B43;
	}
</style>
<div class="reg-log-big">
	<div class="snow-container">
		<div class="snow foreground"></div>
		<div class="snow foreground layered"></div>
		<div class="snow middleground"></div>
		<div class="snow middleground layered"></div>
		<div class="snow background"></div>
		<div class="snow background layered"></div>
	</div>

	<div class="main-agileits" id="info">
		<!---->
		<div class="form-to-agile">
			<h2 class="sub-agileits-tolayouts">修 改</h2>
			<form id="reg-form">
				<input type="text" name="userId" id="USERID" style="display: none;" value="${userData.userId }" />
				<input type="text"   value="${userData.userName }"  name="userName" placeholder="" maxlength="16" disabled id="USER" class="form-control not-allowed" />
				<div class="reg-tips reg-tips-user"></div>
				<div id="addCommodityIndex">
					<div class="input-group row">
						<div class="big-photo">
							<div id="preview" title="点击上传头像">
								<c:if test="${userData.avatar!=null }">
									<img id="imghead" style="border-radius: 50%;" border="0" src="http://www.maomiyibian.com/${userData.avatar}" width="40" height="40" onclick="$('#previewImg').click();">
								</c:if>
								<c:if test="${userData.avatar==null }">
									<img id="imghead" style="border-radius: 50%;" border="0" src="public/img/touxiang.png" width="40" height="40" onclick="$('#previewImg').click();">
								</c:if>
								<label for="previewImg" style="font-weight: 700;color: white;">点击上传头像</label>
							</div>

							<input type="file" name="file" accept="image/*" onchange="previewImage(this)" style="display: none;" id="previewImg" @change="previewImg">

						</div>
					</div>
				</div>
				<div class="show-hide-pwd">
					<input type="password" name="userPwd" placeholder="密码" id="USERPWD" maxlength="16"  value="${userData.userPwd }"/>
					<i class="fa fa-eye fa-2x eyes" title="点击显示或隐藏密码"></i>
				</div>
				<div class="reg-tips reg-tips-pwd"></div>

				<div class="show-hide-pwd">
					<input type="password" name="userPwdAgain" placeholder="确认密码" id="USERPWD-AGAIN" maxlength="16"  value="${userData.userPwd }"/>
					<i class="fa fa-eye fa-2x eyes" title="点击显示或隐藏密码"></i>
				</div>
				<div class="reg-tips reg-tips-pwd-again"></div>

				<input type="text" name="userNick" placeholder="昵称" id="USERNACK" maxlength="16" value="${userData.userNick }" />
				<div class="reg-tips reg-tips-nick"></div>
				<input type="text" name="name" placeholder="姓名" maxlength="16" id="USERNAME" value="${userData.name }" >
				<div class="reg-tips reg-tips-name"></div>
				<div class="form-group reg-form-grop" v-show="student">
					<!--学校-->
					<select class="form-control" name="school" id="signup-provinces" name="school" @change="changeScroll">
						<option :value="val.id" :data-id="val.id" v-for="val in scroll">{{val.schoolName}}</option>
					</select>
				</div>
				<div class="reg-tips reg-tips-school" v-if="student"></div>
				<div class="form-group reg-form-grop" v-if="student" v-show="grade.length!=0">
					<!--年级-->
					<select class="form-control" name="grade" id="signup-school" @change="changeScroll2">
						<option :value="val.id" :data-id="val.id" v-for="val in grade">{{val.schoolName}}</option>
					</select>
				</div>
				<div class="reg-tips reg-tips-grade" v-if="student"></div>
				<div class="form-group reg-form-grop" v-if="student" v-show="grade.length!=0">
					<!--班级-->
					<select class="form-control" name="classNo" id="signup-grade">
						<option :value="val.id" :data-id="val.id" v-for="val in className">{{val.schoolName}}</option>
					</select>
				</div>

				<div class="reg-tips reg-tips-class" v-if="student"></div>
				<input type="text" name="telphone" placeholder="电话" maxlength="11" id="telphoneNAME"  value="${userData.telphone }" >
				<div class="reg-tips reg-tips-tel"></div>
				<input type="text" name="email"  placeholder="电子邮箱" maxlength="20" id="Email" value="${userData.email }" >
				<div class="reg-tips reg-tips-email"></div>
				<input type="text" placeholder="QQ" value="${userData.qq }" maxlength="12" id="qqNAME">
				<div class="reg-tips reg-tips-qq"></div>
				<input type="text" placeholder="微信" value="${userData.wechat }" maxlength="20" id="wechatNAME">
				<div class="reg-tips reg-tips-wx"></div>
				<!--<input type="file" name="file" accept="image/*">-->
				<div class="reg-tips reg-tips-file"></div>
				<textarea name="remark" id="remark" rows="4" cols="" style="width: 100%;padding: 5px; background: rgba(41, 39, 39, 0.3);color: #fff;" maxlength="50" placeholder="添加个人说明,50字以内">
					${userData.remark }
				</textarea>

				<div class="submit-tol">
					<input type="button" value="修 改" @click="changeInfor">
				</div>

				<p class="p-bottom-tols">
					不想修改？
					<a href="#/home">返回首页</a>
				</p>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript">
	new Vue({
		el: '#info',
		data: function() {
			return {
				student: true, //用户类型是否为学生,false为不是
				parentId: 0,
				scroll: [], //学校
				dataid: '', // 学校的id
				dataid2: '', //班级的id
				grade: [], //年级
				className: [], //班级
				files: '',
				regNick: /^([a-z\d\u4e00-\u9fa5]{6,16})$/, //昵称
				regPwd: /^([a-zA-Z\d]{6,12})$/, //密码
				regTelphone: /^(1(3|4|5|7|8)\d{9})$/, //电话
				regEmail: /^(([a-z\d]{0,15}[a-z]{0,10})@([a-z\d]{0,10})\.((com)|(cn)))$/i, //邮箱
				regQq: /^(\d{5,12})$/, //QQ
				regWx: /^[a-z]{1}[-_a-z\d]{6,20}$/i, //微信
				//						xuexiao:1518929172694,
				//								学校                                                     年级                                                   班级
				test: {
					"schoolName": "${userData.school}",
					"gradeName": "${userData.grade}",
					"classNo": "${userData.classNo}"
				}

			}
		},

		methods: {
			// 默认学校查询
			queryScroll: function() {
				var _this = this;
				$.ajax({
					type: "post",
					url: "http://www.maomiyibian.com/querySchoolInfo",
					async: false,
					data: {
						parentId: _this.parentId
					},
					success: function(res) {
						//								console.log(res.data);
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
					url: "http://www.maomiyibian.com/querySchoolInfo",
					//1518929017127
					data: {
						parentId: this.dataid
					},
					success: function(res) {
						console.log("返回的年级信息：" + res.data)
						_this.grade = res.data;
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
					url: "http://www.maomiyibian.com/querySchoolInfo",

					data: {
						parentId: this.dataid2
					},
					success: function(res) {
						_this.className = res.data
					}
				});
			},
			//表单验证
			previewImg: function() {
				var that = this
				$.ajax({
					type: "post",
					url: "upload",
					data: new FormData($("#reg-form")[0]),
					cache: false,
					contentType: false,
					processData: false,
					success: function(res) {
						console.log(res.data);
						that.files = res.data;
					}
				});
			},
			changeInfor: function() {
				var that = this
				//密码
				if(!$('#USERPWD').val() || $('#USERPWD').val() == 'undefined') {
					$('.reg-tips-pwd').html('密码不能为空');
					return false;
				} else {
					if($('#USERPWD').val().length < 6 || $('#USERPWD').val().length > 16) {
						$('.reg-tips-pwd').html('字母或数字组成，长度为6-16位');
						return false;
					}
					if(that.regPwd.test($('#USERPWD').val())) {
						$('.reg-tips-pwd').html('');
					}
				}
				//确认密码
				if(!$('#USERPWD').val() && !$('#USERPWD-AGAIN').val()) {
					$('.reg-tips-pwd-again').html('');
					return false;
				} else {
					if($('#USERPWD-AGAIN').val().length == 0) {
						$('.reg-tips-pwd-again').html('请再次输入密码');
						return false;
					}
					if($('#USERPWD-AGAIN').val() === $('#USERPWD').val()) {
						$('.reg-tips-pwd-again').html('');
					} else {
						$('.reg-tips-pwd-again').html('两次密码不一致');
						return false;
					}
				}

				// 昵称
				if(!$('#USERNACK').val()) {
					$('.reg-tips-nick').html('昵称长度为1-16位');
					return false;
				}
				// 姓名
				if(!$('#USERNAME').val()) {
					$('.reg-tips-name').html('姓名不能为空');
					return false;
				} else if($('#USERNAME').val() < 1 || $('#USERNAME').val() > 16) {
					$('.reg-tips-name').html('姓名长度为1-16位');
					return false;
				} else if(that.regNick.test($('#USERNAME').val())) {
					$('.reg-tips-name').html('');
				}
				//电话telphoneNAME
				if(!$('#telphoneNAME').val() || that.regTelphone.test($('#telphoneNAME').val())) {
					$('.reg-tips-tel').html('');
				} else {
					$('.reg-tips-tel').html('电话号码格式错误');
					return false;
				}
				//邮箱
				if(!$('#Email').val() || that.regEmail.test($('#Email').val())) {
					$('.reg-tips-email').html('');
				} else {
					$('.reg-tips-email').html('邮箱验证失败');
					return false;
				}

				//QQqqNAME
				if(!$('#qqNAME').val() || that.regQq.test($('#qqNAME').val())) {
					$('.reg-tips-qq').html('');
				} else {
					$('.reg-tips-qq').html('QQ号码有误');
					return false;
				}

				//微信
				if(!$('#wechatNAME').val() || that.regWx.test($('#wechatNAME').val())) {
					$('.reg-tips-wx').html('');
				} else {
					$('.reg-tips-wx').html('微信号格式错误');
					return false;
				}
				$.ajax({
					type: "post",
					url: "userModify",
					data: {
						userId: $('#USERID').val(), //用户名ID
						userPwd: $('#USERPWD').val(), //密码
						userNick: $('#USERNACK').val(), //昵称USERNACK
						name: $('#USERNAME').val(), //姓名
						//					userType: that.userType ? that.userType : '2',//用户类型
						telphone: $('#telphoneNAME').val(), //电话
						school: $('#signup-provinces option:selected').attr('data-id'), //学校
						grade: $('#signup-school option:selected').attr('data-id'), //年级
						classNo: $('#signup-grade option:selected').attr('data-id'), //班级
						email: $('#Email').val(), //邮箱
						qq: $('#qqNAME').val(), //qq
						wechat: $('#wechatNAME').val(), //微信
						avatar: that.files,
						remark: $('#remark').val()
					},
					success: function(res) {
						if(res.resultCode == 0) {
							$('.reg-tips-user').html('用户名已经存在');
						}
						alert('更新用户信息成功')
					},
					error: function(err) {}
				});
			},
			//学校
			selects: function() {
				var self = this
				//					var id = 1518929172694	//学校的id
				$('#signup-provinces option').each(function(index, obj) {
					if(obj.value == self.test.schoolName) {
						//							this.changeGrade();
						$(this).attr('selected', 'selected');
					}
				});

			},
			//学校                                                     年级                                                   班级
			//						test:{"schoolName":"1518929172694","gradeName":"1518929269332","classNo":"1518930425435"}
			//年级
			isClass: function() {
				var self = this

				$.ajax({
					type: "post",
					url: "http://www.maomiyibian.com/querySchoolInfo",
					data: {
						parentId: self.test.schoolName //根据学校查询年级
					},
					success: function(res) {
						self.grade = res.data;
						setTimeout(function() {
							$('#signup-school option').each(function(index, obj) {

								if(obj.value == self.test.gradeName) {
									$(this).attr('selected', 'selected')
									//											self.changeClass();
								}
							});
						}, 100);
						//								
					}
				});

			},
			//////				//班级
			banji: function() {
				var self = this;
				//拿到年级的id
				var classNo = self.test.classNo;

				$.ajax({
					type: "post",
					url: "http://www.maomiyibian.com/querySchoolInfo",
					data: {
						parentId: self.test.gradeName //根据学校查询年级
					},
					success: function(res) {
						self.className = res.data;
						console.log(self.className);
						setTimeout(function() {
							$('#signup-grade option').each(function(index, obj) { //1518930425435
								console.log(obj.value + "...." + classNo);
								if(obj.value == classNo) {
									$(this).attr('selected', 'selected');
								}
							});
						}, 100);
						//								
					}
				});

			}
		},
		created: function() {
			this.queryScroll()

		},
		mounted: function() {
			this.selects();
			this.isClass();
			this.banji();
		}
	})
</script>
<script>
	function previewImage(file) {
		var MAXWIDTH = 40;
		var MAXHEIGHT = 40;
		var div = document.getElementById('preview');
		if(file.files && file.files[0]) {
			div.innerHTML = '<img id=imghead onclick=$("#previewImg").click()>';
			var img = document.getElementById('imghead');
			img.onload = function() {
				var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
				img.width = rect.width;
				img.height = rect.height;
				img.style.marginTop = rect.top + 'px';
			}
			var reader = new FileReader();
			reader.onload = function(evt) {
				img.src = evt.target.result;
			}
			reader.readAsDataURL(file.files[0]);
		} else //兼容IE
		{
			var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
			file.select();
			var src = document.selection.createRange().text;
			div.innerHTML = '<img id=imghead>';
			var img = document.getElementById('imghead');
			img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
			div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
		}
	}

	function clacImgZoomParam(maxWidth, maxHeight, width, height) {
		var param = {
			top: 0,
			left: 0,
			width: width,
			height: height
		};
		if(width > maxWidth || height > maxHeight) {
			rateWidth = width / maxWidth;
			rateHeight = height / maxHeight;

			if(rateWidth > rateHeight) {
				param.width = maxWidth;
				param.height = Math.round(height / rateWidth);
			} else {
				param.width = Math.round(width / rateHeight);
				param.height = maxHeight;
			}
		}
		param.left = Math.round((maxWidth - param.width) / 2);
		param.top = Math.round((maxHeight - param.height) / 2);
		return param;
	}
</script>
<script type="text/javascript">
	var i = 0;
	$(document).on('click', '.eyes', function() {
		if(i % 2 == 0) {
			$(this).siblings('input').removeAttr('type').attr('type', 'text');
			$(this).removeClass('fa-eye').addClass('fa-eye-slash');
		} else {
			$(this).siblings('input').removeAttr('type').attr('type', 'password');
			$(this).removeClass('fa-eye-slash').addClass('fa-eye');
		}
		i++;

	});
</script>
