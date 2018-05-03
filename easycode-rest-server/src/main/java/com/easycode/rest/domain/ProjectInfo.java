package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;

public class ProjectInfo implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long projectId;

    private String projectName;

    private String phoneMode;

    private String projectUrl;

    private String resourcesUrl;

    private Integer upvotenum;

    private Integer browsenum;

    private String isPublic;

    private String createUserName;

    private Date createTime;

    private Date updateTime;

    private String isPublish;

    private Long createUserId;

    private String projectRemark;

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName == null ? null : projectName.trim();
    }

    public String getPhoneMode() {
        return phoneMode;
    }

    public void setPhoneMode(String phoneMode) {
        this.phoneMode = phoneMode == null ? null : phoneMode.trim();
    }

    public String getProjectUrl() {
        return projectUrl;
    }

    public void setProjectUrl(String projectUrl) {
        this.projectUrl = projectUrl == null ? null : projectUrl.trim();
    }

    public String getResourcesUrl() {
        return resourcesUrl;
    }

    public void setResourcesUrl(String resourcesUrl) {
        this.resourcesUrl = resourcesUrl == null ? null : resourcesUrl.trim();
    }

    public Integer getUpvotenum() {
        return upvotenum;
    }

    public void setUpvotenum(Integer upvotenum) {
        this.upvotenum = upvotenum;
    }

    public Integer getBrowsenum() {
        return browsenum;
    }

    public void setBrowsenum(Integer browsenum) {
        this.browsenum = browsenum;
    }

    public String getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(String isPublic) {
        this.isPublic = isPublic == null ? null : isPublic.trim();
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName == null ? null : createUserName.trim();
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

    public String getIsPublish() {
        return isPublish;
    }

    public void setIsPublish(String isPublish) {
        this.isPublish = isPublish == null ? null : isPublish.trim();
    }

    public Long getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Long createUserId) {
        this.createUserId = createUserId;
    }

    public String getProjectRemark() {
        return projectRemark;
    }

    public void setProjectRemark(String projectRemark) {
        this.projectRemark = projectRemark == null ? null : projectRemark.trim();
    }
}