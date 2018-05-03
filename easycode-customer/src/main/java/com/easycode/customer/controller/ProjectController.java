package com.easycode.customer.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.ProjectCategory;
import com.easycode.rest.domain.ProjectDesc;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.domain.WorksInfo;
import com.easycode.rest.server.FileService;
import com.easycode.rest.server.UserService;
import com.easycode.rest.server.WorksServer;

/**
 * 作品控制器
 * 
 * @author 萧潇
 *
 */

@Controller
public class ProjectController {
	
	@Autowired
	private FileService fileService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private WorksServer worksServer;
	
	@RequestMapping("/adaptation")
	public String adaptation(@RequestParam Map<String, Object> map, HttpServletRequest request) throws Exception {
		User userData = (User) request.getSession().getAttribute("userData");
		if (userData == null) {
			request.setAttribute("isLogin", false);
		} else {
			request.setAttribute("isLogin", true);
		}
		
		request.setAttribute("projectId", System.currentTimeMillis());
		// 原作品url
		request.setAttribute("projectUrl", map.get("projectUrl"));
		// 备注
		request.setAttribute("remark",map.get("remark"));
		// 是否已发布
		request.setAttribute("isPublish", false);
		// 是否为编辑
		request.setAttribute("modifiable", true);

		request.setAttribute("isMine", false);

		request.setAttribute("isReview", false);
		return "editor";

	}

	// 点击改编那妞(获取原作者及作品名称)--跳转到编辑器页面---点击保存---

	// --点击发布----发布作品

	@RequestMapping("/adaptationSave")
	@ResponseBody
	public String adaptationSave(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) {
		TradeMessages<String> messages = new TradeMessages<String>();
		ProjectInfo projectInfo = new ProjectInfo();
		try {
			String imageName = files[0].getOriginalFilename();
			String projectName = files[1].getOriginalFilename();
			 String  imgUrl=fileService.fileUpload(files[0].getBytes(),imageName.substring(imageName.lastIndexOf(".")+ 1));
			 String  sb2Url=fileService.fileUpload(files[1].getBytes(),projectName.substring(projectName.lastIndexOf(".")+ 1));
			User user = (User) request.getSession().getAttribute("userData");
			projectInfo.setProjectId(System.currentTimeMillis());
			projectInfo.setCreateUserId(user.getUserId());
			projectInfo.setCreateUserName(user.getUserName());
			if (!projectName.substring(0, projectName.indexOf(".")).equals("EzCode")) {
				projectInfo.setProjectName(projectName.substring(0, projectName.lastIndexOf("."))+" - 改编");
			} else {
				projectInfo.setProjectName("maomi" + System.currentTimeMillis()+" - 改编");
			}
			// 设置备注
			 projectInfo.setProjectRemark(request.getParameter("remark").toString());
			 projectInfo.setResourcesUrl(imgUrl);
			 projectInfo.setProjectUrl(sb2Url);
			projectInfo.setIsPublish("0");
			projectInfo.setUpvotenum(0);// 点赞数
			projectInfo.setBrowsenum(0);// 浏览数
			// 调用服务 写入数据库
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

	public void adaptationPublsh() {

	}

	
	@RequestMapping("/adaptationPublsh")
	@ResponseBody
	public String  adaptationPublsh(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) throws Exception {
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
			projectInfo.setProjectRemark(request.getParameter("remark").toString());
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
	
	/**
	 * 查看创作页面
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("/viewPage")
	public String viewPage(@RequestParam Map<String, Object> map,HttpServletRequest request) {
		User userData = (User) request.getSession().getAttribute("userData");
		if (userData == null) {
			request.setAttribute("isLogin", false);
		} else {
			request.setAttribute("isLogin", true);
		}
		//作品ID
		request.setAttribute("projectId", map.get("projectId"));
		
		request.setAttribute("projectUrl", map.get("projectUrl"));
		// 备注
		request.setAttribute("remark", "");
		// 是否已发布
		request.setAttribute("isPublish", true);
		// 是否为编辑
		request.setAttribute("modifiable", false);

		request.setAttribute("isMine", true);

		request.setAttribute("isReview", false);

		return "editor";
	}
	

	/**
	 * 未发布作品的编辑
	 * @param map
	 * @param request
	 * @return
	 */
	@RequestMapping("/projectCompiler")
	public String projectCompiler(@RequestParam Map<String, Object> map,HttpServletRequest request) {
		User userData = (User) request.getSession().getAttribute("userData");
		if (userData == null) {
			request.setAttribute("isLogin", false);
		} else {
			request.setAttribute("isLogin", true);
		}
		//作品ID 
		
		//request.setAttribute("projectId", 1520861621456L);
		request.setAttribute("projectId", map.get("projectId"));
		
		//原作品url
		//
		//request.setAttribute("projectUrl", "group1/M00/00/09/rBEAEFqmgXGAR__PAAOkYgn5e_w192.sb2");
		request.setAttribute("projectUrl", map.get("projectUrl"));
		//原作品资源图片地址
		request.setAttribute("resourcesUrl", map.get("resourcesUrl"));
		//request.setAttribute("resourcesUrl", "group1/M00/00/09/rBEAEFqmgXWAMpVWAAHNbUBBFEg563.png");
		// 备注
		request.setAttribute("remark", "");

		request.setAttribute("isPublish", false);
		request.setAttribute("modifiable", true);
		request.setAttribute("isMine", true);
		request.setAttribute("isReview", false);

		return "editor";

	}

	/**
	 * 未发布作品编辑之作品保存
	 * @param files
	 * @param request
	 * @return
	 */
	@RequestMapping("/unReleasedSave")
	@ResponseBody
	public String unReleasedSave(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) {
		TradeMessages<String> messages = new TradeMessages<String>();
		ProjectInfo projectInfo = new ProjectInfo();
		try {
			String imageName = files[0].getOriginalFilename();
			String projectName = files[1].getOriginalFilename();
			//资源图片路径
			 String  imgUrl=fileService.fileUpload(files[0].getBytes(),imageName.substring(imageName.lastIndexOf(".")+ 1));
			 //作品路径
			 String  sb2Url=fileService.fileUpload(files[1].getBytes(),projectName.substring(projectName.lastIndexOf(".")+ 1));
			/********取出原作品url   id   资源图片路径等基础数据，删除文件系统中的文件*******/
			 //原作品ID
			 Long projectId=Long.parseLong(request.getParameter("projectId"));
			 //资源图片路径
			 String projectUrl = request.getParameter("projectUrl");
			 //作品路径
			 String resourcesUrl = request.getParameter("resourcesUrl");
			 List<String> fileList=new ArrayList<String>();
			 fileList.add(resourcesUrl);
			 fileList.add(projectUrl);
			 fileService.delProject(fileList);
			 projectInfo.setProjectId(projectId);
			 projectInfo.setProjectUrl(sb2Url);
			 projectInfo.setResourcesUrl(imgUrl);
			 projectInfo.setUpdateTime(new Date());
			 worksServer.uodateProject(projectInfo);
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
	
	@RequestMapping("/unReleasedPublsh")
	@ResponseBody
	public String  unReleasedPublsh(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) throws Exception {
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
			 //原作品ID
			 Long projectId=Long.parseLong(request.getParameter("projectId"));
			 //资源图片路径
			 String projectUrl = request.getParameter("projectUrl");
			 //作品路径
			 String resourcesUrl = request.getParameter("resourcesUrl");
			 List<String> fileList=new ArrayList<String>();
			 fileList.add(resourcesUrl);
			 fileList.add(projectUrl);
			 //删除文件系统中的文件
			 fileService.delProject(fileList);
			 //将最新的数据返回到前端
			 projectInfo.setProjectId(projectId);
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
	
	
	//作品发布
		@RequestMapping("/projectRelease")
		 private String projectRelease(@RequestParam Map<String, Object> map,HttpServletRequest request) {
			User user=(User) request.getSession().getAttribute("userData");
			if(user!=null && !map.isEmpty()) {
				try {
					//取出数据进行组装
					ProjectInfo projectInfo=new ProjectInfo();
					ProjectDesc projectDesc=new ProjectDesc();
					
					List<ProjectCategory> types=new ArrayList<ProjectCategory>();
					//原作品ID
					projectInfo.setProjectId(Long.parseLong(map.get("projectId").toString()));
					projectInfo.setProjectName(map.get("projectName").toString());//作品名字
					projectInfo.setCreateUserId(user.getUserId());//创作者ID
					projectInfo.setCreateUserName(user.getUserName());//创作者name
					projectInfo.setPhoneMode(map.get("phoneMode").toString());//手机端操作模式
					projectInfo.setIsPublic(map.get("isPublic").toString());//是否公开创作页
					projectInfo.setIsPublish("1");//是否已发布
					projectInfo.setProjectUrl(map.get("projectUrl").toString());//作品保存路径
					projectInfo.setResourcesUrl(map.get("resourcesUrl").toString());//资源图片存储路径
					projectInfo.setUpdateTime(new Date());
					//projectInfo.setProjectRemark(map.get("remark")!=null?map.get("remark").toString():null);
					//作品类型
					String str=map.get("projectType").toString();
					String[] split = str.split(",");
					for (int i = 0; i < split.length; i++) {
						ProjectCategory projectCategory=new ProjectCategory();
						projectCategory.setCategory(split[i]);
						projectCategory.setProjectid(projectInfo.getProjectId());
						types.add(projectCategory);
					}
					
					//作品ID
					projectDesc.setProjectDescid(System.currentTimeMillis());
					projectDesc.setProjectId(projectInfo.getProjectId());
					projectDesc.setProjectDescription(map.get("projectDescription").toString());
					projectDesc.setProjectInstructions(map.get("projectInstructions").toString());
					worksServer.reviseProject(projectInfo, projectDesc, types);
					//worksServer.release(projectInfo, projectDesc,types);
			
					//是否公开装作业
					
					request.setAttribute("isPublic", projectInfo.getIsPublic());
					//作品备注
					request.setAttribute("remark", projectInfo.getProjectRemark());
					//资源图片地址
					request.setAttribute("resourcesUrl", projectInfo.getResourcesUrl());
					//项目地址
					request.setAttribute("projectUrl", projectInfo.getProjectUrl());
					//点赞数
					request.setAttribute("upvoteNum", 0);
					//浏览数
					request.setAttribute("browseNum", 0);
					//创建人ID
					request.setAttribute("createUserId", projectInfo.getCreateUserId());
					//创建人Name
					request.setAttribute("createUserName", projectInfo.getCreateUserName());
					//作品ID
					request.setAttribute("projectId", projectInfo.getProjectId());
					//作品名称
					request.setAttribute("projectName", projectInfo.getProjectName());
					//创作时间
					request.setAttribute("createTime", new Date());
					//更新时间
					request.setAttribute("updateTime",new Date());
					//作品介绍 
					request.setAttribute("projectDescription", projectDesc.getProjectDescription());
					//操作说明
					request.setAttribute("projectInstructions", projectDesc.getProjectInstructions());
					//作品类型
					request.setAttribute("projectType", types);
					 //是否已收藏
					request.setAttribute("alCollected",false);
					//是否已点赞
					request.setAttribute("alUpvote",false);
					//评论数据
					return "gameDetails";
				} catch (Exception e) {
					request.setAttribute("message","作品发布异常，请与管理员联系");
					return "error";
				}
			}else {
				request.setAttribute("message","非法请求");
				return "error";
			}
		}
	
	
	
	
	/*
	 * 已发布作品的编辑
	 * 
	 * */
	@RequestMapping("/publishedEditor")
	public String publishedEditor(@RequestParam Map<String, Object> map,HttpServletRequest request) {
		User userData = (User) request.getSession().getAttribute("userData");
		if (userData == null) {
			request.setAttribute("isLogin", false);
		} else {
			request.setAttribute("isLogin", true);
		}
		//System.err.println(JSONUtils.toJSON(map));
		
		request.setAttribute("projectId", map.get("projectId"));
		
		//原作品url
		request.setAttribute("projectUrl", map.get("projectUrl"));
		//原作品资源图片地址
		request.setAttribute("resourcesUrl", map.get("resourcesUrl"));
		// 备注
		request.setAttribute("remark", "");
		request.setAttribute("isPublish", true);
		request.setAttribute("modifiable", true);
		request.setAttribute("isMine", true);
		request.setAttribute("isReview", false);

		return "editor";
	}
	
	@RequestMapping("/delProject")
	@ResponseBody
	public String delProject(Long projectId,String projectUrl,String resourcesUrl){
		TradeMessages<String> messages=new TradeMessages<String>();
		try {
			List<String> list=new ArrayList<String>();
			list.add(resourcesUrl);
			list.add(projectUrl);
			fileService.delProject(list);
			worksServer.delProject(projectId);
			messages.setData(null);
			messages.setResultCode("1");
			messages.setResultMessage("作品删除成功");
		} catch (Exception e) {
			messages.setData(null);
			messages.setResultCode("0");
			messages.setResultMessage("系统异常，作品删除失败");
		}
		
		return JSONUtils.toJSON(messages);
	}
	
	@RequestMapping("/showProject")
	public String showProject(Long projectId,HttpServletRequest request) throws Exception{
		//查询作品详情
		WorksInfo detail = worksServer.queryDetail(projectId);
		//作品ID
		request.setAttribute("projectId", detail.getProjectId());
		//资源图片地址
		request.setAttribute("resourcesUrl", detail.getResourcesUrl());
		//项目地址
		request.setAttribute("projectUrl",  detail.getProjectUrl());
		//点赞数
		request.setAttribute("upvoteNum", detail.getUpvoteNum());
		//浏览数
		request.setAttribute("browseNum", detail.getBrowseNum());
		//创建人ID
		request.setAttribute("createUserId", detail.getCreateUserId());
		//创建人Name
		request.setAttribute("createUserName", detail.getCreateUserName());
		//作品ID
		request.setAttribute("projectId", detail.getProjectId());
		//作品名称
		request.setAttribute("projectName", detail.getProjectName());
		//作品类型
		request.setAttribute("projectType", JSONUtils.toJSON(detail.getProjectTypes()));
		//创作时间
		request.setAttribute("createTime", detail.getCreateTime());
		//更新时间
		request.setAttribute("updateTime",detail.getUpdateTime());
		//作品介绍 
		request.setAttribute("projectDescription",detail.getProjectDescription());
		//操作说明
		request.setAttribute("projectInstructions", detail.getProjectInstructions());
		 //是否已收藏
		request.setAttribute("alCollected",detail.isAlCollected());
		//是否已点赞
		request.setAttribute("alUpvote",detail.isAlUpvote());
		//是否公开创作页
		request.setAttribute("isPublic", detail.getIsPublic());
		//作品备注
		request.setAttribute("remark", detail.getProjectRemark());
		//手机端操作模式
		request.setAttribute("phoneMode", detail.getPhoneMode());
		
	
		return "rele3";
	}
	
	/**
	 * 已发布作品保存
	 * @return
	 */
	@RequestMapping("/editeSave")
	@ResponseBody
	public String editeSave(@PathVariable("files") MultipartFile[] files, HttpServletRequest request) {
		TradeMessages<String> messages=new TradeMessages<String>();
		String imageName = files[0].getOriginalFilename();
		String projectName = files[1].getOriginalFilename();
		String projectUrl = request.getParameter("projectUrl");
		String resourcesUrl = request.getParameter("resourcesUrl");
		String projectId = request.getParameter("projectId");
		ProjectInfo projectInfo=new ProjectInfo();
		projectInfo.setProjectId(Long.parseLong(projectId));
		//文件上传
		List<String> list=new ArrayList<String>();
		list.add(resourcesUrl);
		list.add(projectUrl);
		try {
			String imgUrl=fileService.fileUpload(files[0].getBytes(),imageName.substring(imageName.lastIndexOf(".") + 1));
			String sb2Url=fileService.fileUpload(files[1].getBytes(),projectName.substring(projectName.lastIndexOf(".") + 1));
			if (!projectName.substring(0, projectName.indexOf(".")).equals("EzCode")) {
				projectInfo.setProjectName(projectName.substring(0, projectName.lastIndexOf(".")));
			} else {
				projectInfo.setProjectName("maomi" + System.currentTimeMillis());
			}
			fileService.delProject(list);
			projectInfo.setResourcesUrl(imgUrl);
			projectInfo.setProjectUrl(sb2Url);
			worksServer.uodateProject(projectInfo);
			messages.setData(null);
			messages.setResultMessage("作品保存成功");
			messages.setResultCode("1");
			return JSONUtils.toJSON(messages);
		} catch (Exception e) {
			messages.setData(null);
			messages.setResultMessage("发布异常,请与管理员联系");
			messages.setResultCode("0");
			e.printStackTrace();
			return JSONUtils.toJSON(messages);
		}
	}
	
	/**
	 * 已发布作品查看作品展示数据修改后提交
	 * @param map
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping("/projectUpdateSubmit")
	@ResponseBody
	public String projectUpdateSubmit(@RequestParam Map<String, Object> map,HttpServletRequest request){
		TradeMessages<String> messages=new TradeMessages<String>();
		try {
			if (map.get("projectId") !=null && map.get("projectId").toString()!=null && map.get("projectId").toString()!="") {
				ProjectInfo projectInfo=new ProjectInfo();
				ProjectDesc projectDesc=new ProjectDesc();
				
				List<ProjectCategory> types=new ArrayList<ProjectCategory>();
				projectInfo.setProjectId(Long.parseLong(map.get("projectId").toString()));
				projectInfo.setProjectName(map.get("projectName").toString());
				projectInfo.setIsPublic(map.get("isPublic").toString());
				projectInfo.setPhoneMode(map.get("phoneMode").toString());
				String str=map.get("projectType").toString();
				String[] split = str.split(",");
				for (int i = 0; i < split.length; i++) {
					ProjectCategory projectCategory=new ProjectCategory();
					projectCategory.setCategory(split[i]);
					projectCategory.setProjectid(projectInfo.getProjectId());
					types.add(projectCategory);
				}
				projectDesc.setProjectId(projectInfo.getProjectId());
				projectDesc.setProjectDescription(map.get("projectDescription").toString());
				projectDesc.setProjectInstructions(map.get("projectInstructions").toString());
				worksServer.editProject(projectInfo,projectDesc,types,projectInfo.getProjectId());
				messages.setBodyData(null);
				messages.setResultCode("1");
				messages.setResultMessage("作品数据已更新");
			}else {
				messages.setBodyData(null);
				messages.setResultCode("-1");
				messages.setResultMessage("系统未获取到作品ID,请检查");
			}
			return JSONUtils.toJSON(messages);
		} catch (Exception e) {
			messages.setBodyData(null);
			messages.setResultCode("0");
			messages.setResultMessage("系统异常，数据保存失败");
			return JSONUtils.toJSON(messages);
		}
	}
	
	
}
