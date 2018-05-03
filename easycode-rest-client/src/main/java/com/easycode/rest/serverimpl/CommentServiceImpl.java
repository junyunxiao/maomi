package com.easycode.rest.serverimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.easycode.common.domain.Page;
import com.easycode.common.server.DataService;
import com.easycode.rest.domain.CommentInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.server.CommentServer;

@Service("commentServer")
public class CommentServiceImpl implements CommentServer {

	@Autowired
	private DataService dataService;

	@Override
	public void addCommentInfo(CommentInfo commentInfo) throws Exception {
		dataService.insert("com.easycode.rest.dao.Comment.insertSelective", commentInfo);
	}

	@Override
	public Page<CommentInfo> queryCommentInfo(Map<String, Object> map, Page<CommentInfo> page) throws Exception {
		Page<CommentInfo> query = dataService.query("com.easycode.rest.dao.Comment.queryCommentInfo","com.easycode.rest.dao.Comment.queryCommentInfoCount", map, page);
		if (query.getRows()!=null && query.getRows().size()>0) {
			for (CommentInfo commentInfo : query.getRows()) {
				List<CommentInfo> replyComment = new ArrayList<CommentInfo>();// 实例化回复的集合
				commentInfo.setReplyComment(replyComment);// 设置评论的回复集合
				User user=(User) dataService.query("com.easycode.rest.dao.User.selectByPrimaryKey", commentInfo.getCommentuserid()).get(0);
				commentInfo.setCustomer(user);// 设置评论的人的信息
				buildReplyComment(commentInfo, replyComment);// 构建评论与回复信息
			}
		}
		return query;
	}

	/**
	 * 构建评论与回复的关系
	 * 
	 * @param comment
	 * @param replys
	 * @param offset
	 * @param limit
	 */
	private void buildReplyComment(CommentInfo comment, List<CommentInfo> replys) {
		// PageHelper.startPage(offset, limit);
		List<CommentInfo> replyComments = dataService.query("com.easycode.rest.dao.Comment.findReplyCommentByCommentId",comment.getCommentinfoid());// 获取评论的所有回复
		replys.addAll(replyComments);
		// 遍历回复中的回复
		if (replyComments!=null && replyComments.size()>0) {
			for (CommentInfo commentInfo : replyComments) {
				User replyCustomer=(User) dataService.query("com.easycode.rest.dao.User.selectByPrimaryKey", commentInfo.getCommentuserid()).get(0);// 获取回复人信息
				User customer = (User) dataService.query("com.easycode.rest.dao.User.selectByPrimaryKey", comment.getCommentuserid()).get(0); // 获取回复人信息
				commentInfo.setCustomer(customer);
				commentInfo.setReplyCustomer(replyCustomer);
				buildReplyComment(commentInfo, replys); // 递归调用
			}
		}
			
		}

}
