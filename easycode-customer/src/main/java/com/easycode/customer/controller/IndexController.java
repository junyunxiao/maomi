package com.easycode.customer.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.domain.WorksInfo;

/**
 * @author 萧竣匀
 * @description ：
 * @version：首页进行跳转
 * @createTime：2017年9月28日下午3:16:07
 */

@Controller
public class IndexController {
	
	@RequestMapping("/")
	private String showIndex(Model model,HttpServletRequest request){
		return "index";
	}
	
	@RequestMapping("/editor")
	private String showEditor(HttpServletRequest request){
		User userData = (User) request.getSession().getAttribute("userData");
		if(userData==null) {
			request.setAttribute("isLogin", false);
		}else {
			request.setAttribute("isLogin", true);
		}
		request.setAttribute("projectId", System.currentTimeMillis());
		//作品路径
		request.setAttribute("projectUrl","scratch/Original.sb2");
		//是否已发布
		request.setAttribute("isPublish",false);
		//是否为编辑
		request.setAttribute("modifiable",false);
		
		request.setAttribute("isMine", true);
		
		request.setAttribute("isReview",true);
		//备注
		request.setAttribute("remark", System.currentTimeMillis());
		
		return "editor";
	}
	
	@RequestMapping("/prompt")
	private String showPrompt(Model model){
		return "prompt";
	}
	
	@RequestMapping("/about")
	private String showAbout(Model model){
		return "about";
	}
	
	@RequestMapping("/gr_index")
	private String showGrIndex(){
		return "views/gr_index";
	}
	
	@RequestMapping("/information")
	private String information(HttpServletRequest request){
		//需要判断是否已经登录
		User user =(User) request.getSession().getAttribute("userData");
		if (user!=null) {
			return "views/information";
		}
		request.setAttribute("message", "非法的请求");
		return "error";
		
	}
	
	@RequestMapping("/phoneMode")
	private String phoneMode(){
		return "mobile";
	}
	
	
	@RequestMapping("/gameDetails")
	private String gameDetails(){
		return "gameDetails";
	}

	@RequestMapping("/issue")
	private ModelAndView issue(HttpServletRequest request){
		ModelAndView mv=new ModelAndView();
		String projectData = request.getParameter("projectData");
		User user= (User) request.getSession().getAttribute("userData");
		if(projectData!=null && user !=null) {
			ProjectInfo projectInfo = JSONUtils.fromJSON(projectData, ProjectInfo.class);
			mv.addObject("projectUrl", projectInfo.getProjectUrl());
			mv.addObject("resourcesUrl", projectInfo.getResourcesUrl());
			mv.addObject("projectName", projectInfo.getProjectName()!=null?projectInfo.getProjectName():"maomi"+System.currentTimeMillis());
			mv.addObject("createUserName", user.getUserName());
			mv.addObject("createUserId", user.getUserId());
			mv.setViewName("rele");
			return mv;
		}else {
			mv.setViewName("error");
			mv.addObject("message", "非法的请求");
			return mv;
		}
	}
	
	@RequestMapping("/adaptationIssue")
	private ModelAndView adaptationIssue(HttpServletRequest request){
		ModelAndView mv=new ModelAndView();
		String projectData = request.getParameter("adaptationData");
		User user= (User) request.getSession().getAttribute("userData");
		if(projectData!=null && user !=null) {
			ProjectInfo projectInfo = JSONUtils.fromJSON(projectData, ProjectInfo.class);
			mv.addObject("projectUrl", projectInfo.getProjectUrl());
			mv.addObject("resourcesUrl", projectInfo.getResourcesUrl());
			mv.addObject("projectName", projectInfo.getProjectName()!=null?projectInfo.getProjectName():"maomi"+System.currentTimeMillis()+" - 改编");
			mv.addObject("createUserName", user.getUserName());
			mv.addObject("createUserId", user.getUserId());
			mv.addObject("remark", projectInfo.getProjectRemark());
			mv.setViewName("rele");
			return mv;
		}else {
			mv.setViewName("error");
			mv.addObject("message", "非法的请求");
			return mv;
		}
	}
	
	/**
	 * 未发布作品的发布
	 * @param worksInfo
	 * @param request
	 * @return
	 */
	@RequestMapping("/unReleasedIssue")
	private String unReleasedIssue(WorksInfo worksInfo,HttpServletRequest request){
		User user= (User) request.getSession().getAttribute("userData");
		if(user!=null) {
			request.setAttribute("projectId", worksInfo.getProjectId());
			request.setAttribute("projectUrl", worksInfo.getProjectUrl());
			request.setAttribute("resourcesUrl", worksInfo.getResourcesUrl());
			request.setAttribute("projectName", worksInfo.getProjectName()!=null?worksInfo.getProjectName():"maomi"+System.currentTimeMillis());
			request.setAttribute("createUserName", worksInfo.getCreateUserName());
			request.setAttribute("createUserId", worksInfo.getCreateUserId());
			return "rele2";
		}else {
			request.setAttribute("message", "非法的请求");
			return "error";
		}
	}
}
