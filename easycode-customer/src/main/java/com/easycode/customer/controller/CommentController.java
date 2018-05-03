package com.easycode.customer.controller;

import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.CommentInfo;
import com.easycode.rest.server.CommentServer;

@Controller
public class CommentController {
	
	@Autowired
	private CommentServer commentServer;
	
	@RequestMapping(value = "/comment")
	@ResponseBody
    public String comment(@RequestParam Map<String, Object> map,HttpServletRequest request) throws Exception {
		TradeMessages<Page<CommentInfo>> messages=new TradeMessages<Page<CommentInfo>>();
		Page<CommentInfo> page=new Page<>();
		page.setPageCurrent(map.get("pageCurrent")!=null?Integer.valueOf(map.get("pageCurrent").toString()):1);
		page.setPageRows(map.get("pageRows")!=null?Integer.valueOf(map.get("pageRows").toString()):10);
		if(map.get("projectId")!=null) {
			Page<CommentInfo> commentInfo = commentServer.queryCommentInfo(map, page);
			messages.setData(commentInfo);
			messages.setResultCode("1");
			messages.setResultMessage("评论数据请求成功");
			return JSONUtils.toJSON(messages);
		}else {
			messages.setData(null);
			messages.setResultCode("-1");
			messages.setResultMessage("必传参数未传入，数据请求失败");
			return JSONUtils.toJSON(messages);
		}
    }
	
	@RequestMapping(value = "/addComment")
	@ResponseBody
    public String addComment(CommentInfo commentInfo,HttpServletRequest request) throws Exception {
		TradeMessages<String> messages=new TradeMessages<String>();
		try {
			commentInfo.setCommentinfoid(System.currentTimeMillis());
			commentInfo.setCommentstate(0);
			commentInfo.setCommenttype(1);
			commentServer.addCommentInfo(commentInfo);
			messages.setResultCode("1");
			messages.setData(null);
			messages.setResultMessage("rpc调用成功,评论成功");
			return JSONUtils.toJSON(messages);
		} catch (Exception e) {
			messages.setResultCode("0");
			messages.setResultMessage("系统异常,评论失败");
			messages.setData(null);
			return JSONUtils.toJSON(messages);
		}
    }
}
