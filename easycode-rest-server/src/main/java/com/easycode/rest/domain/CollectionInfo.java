package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:收藏
 * @createTime:2018年1月30日下午4:07:49
 */
public class CollectionInfo implements Serializable{
   
	private static final long serialVersionUID = 3444728406721386542L;

	private Long collectionId;

    private Long projectId;

    private Long userId;

    private Date createTime;

    private Date updateTime;

    public Long getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(Long collectionId) {
        this.collectionId = collectionId;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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
}