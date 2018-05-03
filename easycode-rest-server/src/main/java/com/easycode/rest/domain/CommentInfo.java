package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class CommentInfo implements Serializable {

	private static final long serialVersionUID = -5604336089108418307L;

	private Long commentinfoid;//评论回复id

	private Long commentuserid;//评论者/回复者用户ID

	private Long parentid;//评论对象（一级评论则传递作品ID，评论中的评论则传递要评论的评论回复ID）

	private Integer commenttype;//评论类型

	private String commentcontent;//评论内容

	private Date commentdate;//评论时间

	private String commentip;

	private Integer commentstate;

	private Date createtime;

	private Date updatetime;

	private List<CommentInfo> replyComment; // 评论回复信息
	
	private User customer;// 评论者信息
	
	private User replyCustomer; // 回复评论的人

	public Long getCommentinfoid() {
		return commentinfoid;
	}

	public void setCommentinfoid(Long commentinfoid) {
		this.commentinfoid = commentinfoid;
	}

	public Long getCommentuserid() {
		return commentuserid;
	}

	public void setCommentuserid(Long commentuserid) {
		this.commentuserid = commentuserid;
	}

	public Long getParentid() {
		return parentid;
	}

	public void setParentid(Long parentid) {
		this.parentid = parentid;
	}

	public Integer getCommenttype() {
		return commenttype;
	}

	public void setCommenttype(Integer commenttype) {
		this.commenttype = commenttype;
	}

	public String getCommentcontent() {
		return commentcontent;
	}

	public void setCommentcontent(String commentcontent) {
		this.commentcontent = commentcontent == null ? null : commentcontent.trim();
	}

	public Date getCommentdate() {
		return commentdate;
	}

	public void setCommentdate(Date commentdate) {
		this.commentdate = commentdate;
	}

	public String getCommentip() {
		return commentip;
	}

	public void setCommentip(String commentip) {
		this.commentip = commentip == null ? null : commentip.trim();
	}

	public Integer getCommentstate() {
		return commentstate;
	}

	public void setCommentstate(Integer commentstate) {
		this.commentstate = commentstate;
	}

	public Date getCreatetime() {
		return createtime;
	}

	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}

	public Date getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}

	public List<CommentInfo> getReplyComment() {
		return replyComment;
	}

	public void setReplyComment(List<CommentInfo> replyComment) {
		this.replyComment = replyComment;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public User getReplyCustomer() {
		return replyCustomer;
	}

	public void setReplyCustomer(User replyCustomer) {
		this.replyCustomer = replyCustomer;
	}
}