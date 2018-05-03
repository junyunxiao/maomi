package com.easycode.rest.server;

import java.util.Map;

import com.easycode.common.domain.Page;
import com.easycode.rest.domain.CommentInfo;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:评论接口
 * @createTime:2018年2月6日下午8:37:39
 */
public interface CommentServer {

	//查询某个作品的评论及回复信息
	public Page<CommentInfo> queryCommentInfo(Map<String, Object> map ,Page<CommentInfo> page) throws Exception;

	//添加评论
	public void addCommentInfo(CommentInfo commentInfo) throws Exception;
	
}
