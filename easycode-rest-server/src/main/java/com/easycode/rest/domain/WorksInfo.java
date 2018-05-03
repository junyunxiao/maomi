package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:作品信息展示
 * @createTime:2018年1月30日下午4:39:57
 */
public class WorksInfo implements Serializable {

	
	private static final long serialVersionUID = -3654579874034047382L;
	
	private long projectId;// 作品ID
	private String projectName;// 作品名称
	private long createUserId;// 创建者ID
	private String createUserName;// 创建者Name
	private Date createTime;// 创建时间
	private Date updateTime;// 更新时间
	private String projectUrl;// 作品Url
	private String resourcesUrl;// 资源图片路径
	private String phoneMode;// 手机端操作模式
	private String projectDescription;// 作品描述
	private String projectInstructions;// 操作说明
	private String isPublish;// 是否已发布
	private String isPublic;// 是否公开创作页
	private int upvoteNum;
	private int browseNum;
	private boolean alCollected=false;//是否已收藏
	private boolean alUpvote=false;//是否已点赞
	private String projectRemark;//作品备注

	List<ProjectCategory> projectTypes;// 作品类型

	public long getProjectId() {
		return projectId;
	}

	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public long getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(long createUserId) {
		this.createUserId = createUserId;
	}

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getProjectUrl() {
		return projectUrl;
	}

	public void setProjectUrl(String projectUrl) {
		this.projectUrl = projectUrl;
	}

	public String getResourcesUrl() {
		return resourcesUrl;
	}

	public void setResourcesUrl(String resourcesUrl) {
		this.resourcesUrl = resourcesUrl;
	}

	public String getPhoneMode() {
		return phoneMode;
	}

	public void setPhoneMode(String phoneMode) {
		this.phoneMode = phoneMode;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public String getProjectInstructions() {
		return projectInstructions;
	}

	public void setProjectInstructions(String projectInstructions) {
		this.projectInstructions = projectInstructions;
	}

	public String getIsPublish() {
		return isPublish;
	}

	public void setIsPublish(String isPublish) {
		this.isPublish = isPublish;
	}

	public String getIsPublic() {
		return isPublic;
	}

	public void setIsPublic(String isPublic) {
		this.isPublic = isPublic;
	}

	public int getUpvoteNum() {
		return upvoteNum;
	}

	public void setUpvoteNum(int upvoteNum) {
		this.upvoteNum = upvoteNum;
	}

	public int getBrowseNum() {
		return browseNum;
	}

	public void setBrowseNum(int browseNum) {
		this.browseNum = browseNum;
	}

	public List<ProjectCategory> getProjectTypes() {
		return projectTypes;
	}

	public void setProjectTypes(List<ProjectCategory> projectTypes) {
		this.projectTypes = projectTypes;
	}

	public boolean isAlCollected() {
		return alCollected;
	}

	public void setAlCollected(boolean alCollected) {
		this.alCollected = alCollected;
	}

	public boolean isAlUpvote() {
		return alUpvote;
	}

	public void setAlUpvote(boolean alUpvote) {
		this.alUpvote = alUpvote;
	}

	public String getProjectRemark() {
		return projectRemark;
	}

	public void setProjectRemark(String projectRemark) {
		this.projectRemark = projectRemark;
	}

}
