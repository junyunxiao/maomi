package com.easycode.admin.controller;

import javax.servlet.http.HttpServletRequest;
import org.apache.log4j.Logger;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * @author 萧竣匀
 * @version:1.0
 * @description:用户登陆和退出
 * @createTime:2017年9月22日下午3:54:17
 *
 */
@Controller
public class LoginController {
	
	public final static Logger LOGGER = Logger.getLogger(LoginController.class);
	
	//登陆提交地址，和applicationContext-shiro.xml中配置的loginurl一致
	@RequestMapping("/login")
	public String login(HttpServletRequest request,Model model)throws Exception{
		LOGGER.debug("用户请求登陆，客户端ip地址为:");
		//如果登陆失败从request中获取认证异常信息，shiroLoginFailure就是shiro异常类的全限定名
		String exceptionClassName = (String) request.getAttribute("shiroLoginFailure");
		//根据shiro返回的异常类路径判断，抛出指定异常信息
		String message = "";  
		if(exceptionClassName!=null){
			if (UnknownAccountException.class.getName().equals(exceptionClassName)) {
				//最终会抛给异常处理器
				message="账号不存在";
			} else if (IncorrectCredentialsException.class.getName().equals(exceptionClassName)) {
				message="用户名或密码错误";
			} else if("randomCodeError".equals(exceptionClassName)){
				message="验证码错误";
			}else {
				message="未知错误";
			}
		}
		//此方法不处理登陆成功（认证成功），shiro认证成功会自动跳转到上一个请求路径
		//登陆失败还到login页面
		model.addAttribute("error", message); 
		return "login";
	}

}
