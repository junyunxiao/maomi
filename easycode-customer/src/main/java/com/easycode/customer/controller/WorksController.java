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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.customer.utils.IpUtils;
import com.easycode.rest.domain.BrowseInfo;
import com.easycode.rest.domain.CollectionInfo;
import com.easycode.rest.domain.PraiseInfo;
import com.easycode.rest.domain.ProjectCategory;
import com.easycode.rest.domain.ProjectDesc;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.domain.WorksInfo;
import com.easycode.rest.server.WorksServer;

@Controller
public class WorksController {

	@Autowired
	private WorksServer worksServer;
	

	//首页查询热门作品
	@RequestMapping("/queryHot")
	@ResponseBody
	 private String queryHot(HttpServletRequest request) throws Exception {
		TradeMessages<Page<WorksInfo>> messages=new TradeMessages<Page<WorksInfo>>();
		Page<WorksInfo> page=new Page<WorksInfo>();
		page.setPageCurrent(1);
		page.setPageRows(8);
		Page<WorksInfo> popular = worksServer.popular(page);
		messages.setBodyData(popular);
		messages.setResultCode("1");
		messages.setResultMessage("rpc调用成功");
		return JSONUtils.toJSON(messages);
	}
	
	
	//首页精选作品
	@RequestMapping("/queryFeatured")
	@ResponseBody
	 private String queryFeatured(HttpServletRequest request) throws Exception {
		TradeMessages<Page<WorksInfo>> messages=new TradeMessages<Page<WorksInfo>>();
		Page<WorksInfo> page=new Page<WorksInfo>();
		page.setPageCurrent(1);
		page.setPageRows(8);
		Page<WorksInfo> popular = worksServer.featured(page);
		messages.setBodyData(popular);
		messages.setResultCode("1");
		messages.setResultMessage("rpc调用成功");
		return JSONUtils.toJSON(messages);
	}

	
	//作品发布
	@RequestMapping("/release")
	 private String release(@RequestParam Map<String, Object> map,HttpServletRequest request) {
		User user=(User) request.getSession().getAttribute("userData");
		if(user!=null && !map.isEmpty()) {
			try {
				//取出数据进行组装
				ProjectInfo projectInfo=new ProjectInfo();
				ProjectDesc projectDesc=new ProjectDesc();
				
				List<ProjectCategory> types=new ArrayList<ProjectCategory>();
				projectInfo.setProjectId(System.currentTimeMillis());
				projectInfo.setProjectName(map.get("projectName").toString());//作品名字
				projectInfo.setCreateUserId(user.getUserId());//创作者ID
				projectInfo.setCreateUserName(user.getUserName());//创作者name
				projectInfo.setPhoneMode(map.get("phoneMode").toString());//手机端操作模式
				projectInfo.setIsPublic(map.get("isPublic").toString());//是否公开创作页
				projectInfo.setIsPublish("1");//是否已发布
				projectInfo.setProjectUrl(map.get("projectUrl").toString());//作品保存路径
				projectInfo.setResourcesUrl(map.get("resourcesUrl").toString());//资源图片存储路径
				projectInfo.setProjectRemark(map.get("remark")!=null?map.get("remark").toString():null);
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
				worksServer.release(projectInfo, projectDesc,types);
		
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
	
	
	//发现页面查询
	@RequestMapping("/queryProjectSort")
	@ResponseBody
	private String queryProjectSort( @RequestParam Map<String, Object> map,HttpServletRequest request) throws Exception{
		TradeMessages<Page<WorksInfo>> messages=new TradeMessages<Page<WorksInfo>>();
		Page<WorksInfo> page=new Page<WorksInfo>();
		page.setPageCurrent(map.get("pageCurrent")!=null?Integer.valueOf(map.get("pageCurrent").toString()):1);
		page.setPageRows(map.get("pageRows")!=null?Integer.valueOf(map.get("pageRows").toString()):30);
		Page<WorksInfo> sort = worksServer.queryProjectSort(map, page);
		messages.setData(sort);
		messages.setResultCode("1");
		messages.setResultMessage("rpc调用成功");
		return JSONUtils.toJSON(messages);
	}
	
	
		//作品详情
		@RequestMapping("/getDetails/{projectId}")
		public String getDetails(@PathVariable long projectId,HttpServletRequest request) throws Exception {
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
			request.setAttribute("projectType", detail.getProjectTypes());
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
			//
		
			//评论数据
			return "gameDetails";
		}
		
		/**
		 * 手机端作品详情
		 * @param request
		 * @return
		 * @throws Exception 
		 */
		@RequestMapping("/queryDetail/{projectId}")
		private String queryDetail(@PathVariable long projectId,HttpServletRequest request) throws Exception{
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
			//作品名称
			request.setAttribute("projectName", detail.getProjectName());
			//作品类型
			request.setAttribute("projectType", detail.getProjectTypes());
			//创作时间
			request.setAttribute("createTime", detail.getCreateTime());
			//更新时间
			request.setAttribute("updateTime",detail.getUpdateTime());
			//作品介绍 
			request.setAttribute("projectDescription",detail.getProjectDescription());
			//操作说明
			request.setAttribute("projectInstructions", detail.getProjectInstructions());
			//是否已点赞
			request.setAttribute("alCollected",detail.isAlCollected());
			//是否已收藏
			request.setAttribute("alUpvote",detail.isAlUpvote());
			//手机端操作模式
			request.setAttribute("phoneMode", detail.getPhoneMode());
			//评论数据
			return "mobilePhone";
			
		}
		
		/**
		 *  点赞
		 *  
		 * @param projectId
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value="/upvote",method=RequestMethod.POST)
		@ResponseBody
		public String  upvote(Long projectId, HttpServletRequest request) throws Exception {
			TradeMessages<String> messages=new TradeMessages<String>();
			User userData = (User) request.getSession().getAttribute("userData");
			if(userData==null) {
				messages.setData(null);
				messages.setResultCode("-1");
				messages.setResultMessage("您还未登陆，请登录");
				return JSONUtils.toJSON(messages);
			}
			
			try {
				PraiseInfo praiseInfo=new PraiseInfo();
				praiseInfo.setIpaddress(IpUtils.getIpAddress(request));
				praiseInfo.setUserId(userData.getUserId());
				praiseInfo.setProjectId(projectId);
				long upvote = worksServer.upvote(praiseInfo);
				messages.setData(String.valueOf(upvote));
				messages.setResultCode("1");
				messages.setResultMessage("点赞成功,点赞数+1");
				return JSONUtils.toJSON(messages) ;
			} catch (Exception e) {
				messages.setData(null);
				messages.setResultCode("0");
				messages.setResultMessage("系统异常，点赞失败");
				return JSONUtils.toJSON(messages) ;
			}
		}
		
		
		
		/**
		 * 取消点赞
		 * @param projectId
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value="/cancelUpvote",method=RequestMethod.POST)
		@ResponseBody
		public String  cancelUpvote(Long projectId, HttpServletRequest request) throws Exception {
			TradeMessages<String> messages=new TradeMessages<String>();
			try {
				User userData = (User) request.getSession().getAttribute("userData");
				if(userData==null) {
					messages.setData(null);
					messages.setResultCode("-1");
					messages.setResultMessage("您还未登陆，请登录");
					return JSONUtils.toJSON(messages);
				}
				PraiseInfo praiseInfo=new PraiseInfo();
				praiseInfo.setProjectId(projectId);
				praiseInfo.setUserId(userData.getUserId());
				
				long cancelUpvote = worksServer.cancelUpvote(praiseInfo);
				messages.setData(String.valueOf(cancelUpvote));
				messages.setResultCode("1");
				messages.setResultMessage("取消点赞成功,点赞数-1");
				return JSONUtils.toJSON(messages) ;
			} catch (Exception e) {
				messages.setData(null);
				messages.setResultCode("0");
				messages.setResultMessage("系统异常，取消点赞失败");
				return JSONUtils.toJSON(messages) ;
			}
			
		}
		
		/**
		 * 收藏
		 * @param projectId
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value="/enshrine",method=RequestMethod.POST)
		@ResponseBody
		public String  enshrine(Long projectId, HttpServletRequest request) throws Exception {
			TradeMessages<String> messages=new TradeMessages<String>();
			try {
					User userData = (User) request.getSession().getAttribute("userData");
					if(userData==null) {
						messages.setData(null);
						messages.setResultCode("-1");
						messages.setResultMessage("您还未登陆，请登录");
						return JSONUtils.toJSON(messages);
					}
					CollectionInfo cInfo=new CollectionInfo();
					cInfo.setUserId(userData.getUserId());
					cInfo.setProjectId(projectId);
					long enshrine = worksServer.enshrine(cInfo);
					messages.setData(String.valueOf(enshrine));
					messages.setResultCode("1");
					messages.setResultMessage("收藏成功,收藏数+1");
					return JSONUtils.toJSON(messages) ;																		
			} catch (Exception e) {
					messages.setData(null);
					messages.setResultCode("0");
					messages.setResultMessage("系统异常，收藏失败");
					return JSONUtils.toJSON(messages) ;
			}
		}
		
		
		
		/**
		 * 取消收藏
		 * @param projectId
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value="/cancelEnshrine",method=RequestMethod.POST)
		@ResponseBody
		public String  cancelEnshrine(Long projectId, HttpServletRequest request) throws Exception {
			TradeMessages<String> messages=new TradeMessages<String>();
			try {
					User userData = (User) request.getSession().getAttribute("userData");
					if(userData==null) {
						messages.setData(null);
						messages.setResultCode("-1");
						messages.setResultMessage("您还未登陆，请登录");
						return JSONUtils.toJSON(messages);
					}
					CollectionInfo cInfo=new CollectionInfo();
					cInfo.setUserId(userData.getUserId());
					cInfo.setProjectId(projectId);
					long cancelEnshrine = worksServer.cancelEnshrine(cInfo);
					messages.setData(String.valueOf(cancelEnshrine));
					messages.setResultCode("1");
					messages.setResultMessage("取消收藏成功,收藏数-1");
					return JSONUtils.toJSON(messages) ;																		
			} catch (Exception e) {
					messages.setData(null);
					messages.setResultCode("0");
					messages.setResultMessage("系统异常，取消收藏失败");
					return JSONUtils.toJSON(messages) ;
			}
		}
		
		
		
		
		//浏览
		@RequestMapping(value="/browse",method=RequestMethod.POST)
		@ResponseBody
		public String  browse(Long projectId, HttpServletRequest request) throws Exception {
			TradeMessages<String> messages=new TradeMessages<>();
			try {
				BrowseInfo browseInfo=new BrowseInfo();
				browseInfo.setProjectid(projectId);
				browseInfo.setIpaddress(IpUtils.getIpAddress(request));
				 TradeMessages<String> browse = worksServer.browse(browseInfo);
				return JSONUtils.toJSON(browse) ;
			} catch (Exception e) {
				messages.setData(null);
				messages.setResultCode("0");
				messages.setResultMessage("系统异常，作品浏览失败");
				return JSONUtils.toJSON(messages) ;
			}
		}	

		@RequestMapping("/queryState")
		@ResponseBody
		public String queryState(Long projectId, HttpServletRequest request) {
			TradeMessages<Map<String, Object>> messages=new TradeMessages<Map<String, Object>>();
			try {
				User userData = (User) request.getSession().getAttribute("userData");
				if(userData==null) {
					messages.setData(null);
					messages.setResultCode("-1");
					messages.setResultMessage("您还未登陆，请登录");
					return JSONUtils.toJSON(messages);
				}
				Map<String, Object> queryState = worksServer.queryState(projectId, userData.getUserId());
				messages.setData(queryState);
				messages.setResultCode("1");
				messages.setResultMessage("rpc调用成功,数据查询成功");
				return JSONUtils.toJSON(messages);
			} catch (Exception e) {
				messages.setData(null);
				messages.setResultCode("-1");
				messages.setResultMessage("系统异常，数据查询失败");
				return JSONUtils.toJSON(messages);
			}
			
		}
}
