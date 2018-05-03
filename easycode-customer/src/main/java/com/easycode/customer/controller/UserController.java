package com.easycode.customer.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.domain.WorksInfo;
import com.easycode.rest.server.FileService;
import com.easycode.rest.server.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private FileService fileService;


	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public String login(User user, HttpServletRequest request) throws Exception {
		if (user == null || user.getUserName() == null || user.getUserPwd() == null) {
			TradeMessages<User> message = new TradeMessages<User>();
			message.setData(null);
			message.setResultCode("-3");
			message.setResultMessage("必传参数未传，请检查");
			return JSONUtils.toJSON(message);
		} else {
			TradeMessages<User> tradeMessages = userService.login(user);
			if(tradeMessages.getData()!=null) {
				request.getSession().setAttribute("userData", tradeMessages.getData());
			}
			return JSONUtils.toJSON(tradeMessages);
		}
	}
	
	@RequestMapping(value = "/saveProject")
	@ResponseBody
	public String saveProject(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) throws Exception {
		TradeMessages<String> messages=new TradeMessages<String>();
		ProjectInfo projectInfo=new ProjectInfo();
		try {
			String imageName = files[0].getOriginalFilename();
			String projectName = files[1].getOriginalFilename();
			String imgUrl=fileService.fileUpload(files[0].getBytes(),imageName.substring(imageName.lastIndexOf(".") + 1));
			String sb2Url=fileService.fileUpload(files[1].getBytes(),projectName.substring(projectName.lastIndexOf(".") + 1));
			User user=(User) request.getSession().getAttribute("userData");
			projectInfo.setProjectId(System.currentTimeMillis());
			projectInfo.setCreateUserId(user.getUserId());
			projectInfo.setCreateUserName(user.getUserName());
			if(!projectName.substring(0, projectName.indexOf(".")) .equals("EzCode")) {
				projectInfo.setProjectName(projectName.substring(0, projectName.lastIndexOf(".")));
			}else {
				projectInfo.setProjectName("maomi"+System.currentTimeMillis());
			}
			projectInfo.setResourcesUrl(imgUrl);
			projectInfo.setProjectUrl(sb2Url);
			projectInfo.setIsPublish("0");
			projectInfo.setUpvotenum(0);//点赞数
			projectInfo.setBrowsenum(0);//浏览数
			//调用服务  写入数据库
			userService.saveProject(projectInfo);
			messages.setResultCode("1");
			messages.setData(null);
			messages.setResultMessage("作品保存成功");
		} catch (Exception e) {
			messages.setResultCode("0");
			
			messages.setData(null);
			messages.setResultMessage("系统异常");
		}
		return JSONUtils.toJSON(messages);
	}
	
	@RequestMapping("/publish")
	@ResponseBody
	public String  Publish(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) throws Exception {
		ProjectInfo projectInfo=new ProjectInfo();
		TradeMessages<ProjectInfo> tradeMessages=new TradeMessages<ProjectInfo>();
		try {
			String imageName = files[0].getOriginalFilename();
			String projectName = files[1].getOriginalFilename();
			String imgUrl=fileService.fileUpload(files[0].getBytes(),imageName.substring(imageName.lastIndexOf(".") + 1));
			String sb2Url=fileService.fileUpload(files[1].getBytes(),projectName.substring(projectName.lastIndexOf(".") + 1));
			if(!projectName.substring(0, projectName.indexOf(".")) .equals("EzCode")) {
				projectInfo.setProjectName(projectName.substring(0, projectName.lastIndexOf(".")));
			}
			projectInfo.setResourcesUrl(imgUrl);
			projectInfo.setProjectUrl(sb2Url);
			return JSONUtils.toJSON(projectInfo);
		} catch (Exception e) {
			tradeMessages.setData(null);
			tradeMessages.setResultMessage("发布异常");
			tradeMessages.setResultCode("0");
			return JSONUtils.toJSON(tradeMessages);
		}
	}

	
	@RequestMapping("/userModify")
	@ResponseBody
	public String userModify(User user, HttpServletRequest request) throws Exception {
		User userData = (User) request.getSession().getAttribute("userData");
		if (userData!=null) {
			TradeMessages<String> updateUserInfo = userService.updateUserInfo(user);
			request.setAttribute("userData", user);
			return JSONUtils.toJSON(updateUserInfo);
		} else {
			TradeMessages<String> messages=new TradeMessages<String>();
			messages.setData(null);
			messages.setResultCode("-1");
			messages.setResultMessage("请登录后再进行操作");
			return JSONUtils.toJSON(messages);
		}
		
	}

	// 注册
	@RequestMapping(value = "/regist", method = RequestMethod.POST)
	@ResponseBody
	public String regist(User user, HttpServletRequest request) throws Exception {
		TradeMessages<String> messages = userService.register(user);
		return JSONUtils.toJSON(messages);
	}

	@RequestMapping("/userCheck")
	@ResponseBody
	public String userCheck(String userName) throws Exception {
		TradeMessages<String> userCheck = userService.userCheck(userName);
		return JSONUtils.toJSON(userCheck);
	}
	
	@RequestMapping("/queryAlreadyCollected")
	@ResponseBody
	public  String queryAlreadyCollected(@RequestParam Map<String, Object> map,HttpServletRequest request) throws Exception {
		User userData = (User) request.getSession().getAttribute("userData");
		TradeMessages<Page<WorksInfo>> messages=new TradeMessages<Page<WorksInfo>>();
		if(userData !=null) {
			Page<WorksInfo> page=new Page<WorksInfo>();
			page.setPageCurrent(map.get("pageCurrent")!=null?Integer.valueOf(map.get("pageCurrent").toString()):1);
			page.setPageRows(map.get("pageRows")!=null?Integer.valueOf(map.get("pageRows").toString()):30);
			map.put("createUserId", userData.getUserId());
			Page<WorksInfo> collected = userService.queryAlreadyCollected(map, page);
			messages.setData(collected);
			messages.setResultCode("1");
			messages.setResultMessage("rpc调用成功");
			return JSONUtils.toJSON(messages);
		}else {
			messages.setData(null);
			messages.setResultCode("-1");
			messages.setResultMessage("请登录后再进行操作");
			return JSONUtils.toJSON(messages);
		}
	}
	
	@RequestMapping("/queryAlreadyUpvote")
	@ResponseBody
	public  String queryAlreadyUpvote(@RequestParam Map<String, Object> map,HttpServletRequest request) throws Exception {
		User userData = (User) request.getSession().getAttribute("userData");
		TradeMessages<Page<WorksInfo>> messages=new TradeMessages<Page<WorksInfo>>();
		if(userData !=null) {
			Page<WorksInfo> page=new Page<WorksInfo>();
			page.setPageCurrent(map.get("pageCurrent")!=null?Integer.valueOf(map.get("pageCurrent").toString()):1);
			page.setPageRows(map.get("pageRows")!=null?Integer.valueOf(map.get("pageRows").toString()):30);
			map.put("createUserId", userData.getUserId());
			Page<WorksInfo> upvote = userService.queryAlreadyUpvote(map, page);
			messages.setData(upvote);
			messages.setResultCode("1");
			messages.setResultMessage("rpc调用成功");
			return JSONUtils.toJSON(messages);
		}else {
			messages.setData(null);
			messages.setResultCode("-1");
			messages.setResultMessage("请登录后再进行操作");
			return JSONUtils.toJSON(messages);
		}
	}
	
	@RequestMapping("/queryAnnounce")
	@ResponseBody
	public  String queryAnnounce(@RequestParam Map<String, Object> map,HttpServletRequest request) throws Exception {
		User userData = (User) request.getSession().getAttribute("userData");
		TradeMessages<Page<WorksInfo>> messages=new TradeMessages<Page<WorksInfo>>();
		if(userData !=null) {
			Page<WorksInfo> page=new Page<WorksInfo>();
			page.setPageCurrent(map.get("pageCurrent")!=null?Integer.valueOf(map.get("pageCurrent").toString()):1);
			page.setPageRows(map.get("pageRows")!=null?Integer.valueOf(map.get("pageRows").toString()):30);
			map.put("createUserId", userData.getUserId());
			Page<WorksInfo> announce = userService.queryAnnounce(map, page);
			messages.setData(announce);
			messages.setResultCode("1");
			messages.setResultMessage("rpc调用成功");
			return JSONUtils.toJSON(messages);
		}else {
			messages.setData(null);
			messages.setResultCode("-1");
			messages.setResultMessage("请登录后再进行操作");
			return JSONUtils.toJSON(messages);
		}
	}
	
	
	@RequestMapping("/logout")
	@ResponseBody
	public String logout(HttpServletRequest request) throws Exception {
		TradeMessages<String> messages=new TradeMessages<String>();
		messages.setData(null);
		messages.setResultCode("1");
		messages.setResultMessage("登出操作成功");
		request.getSession().removeAttribute("userData");
		return JSONUtils.toJSON(messages);
	}
	
}
