package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:点赞信息表
 * @createTime:2018年1月30日下午4:07:04
 */
public class PraiseInfo implements Serializable{

	private static final long serialVersionUID = 531741716728830573L;

	private Long praiseId;

    private Long projectId;

    private Long userId;

    private String ipaddress;

    private Date createTime;

    private Date updateTime;

    public Long getPraiseId() {
        return praiseId;
    }

    public void setPraiseId(Long praiseId) {
        this.praiseId = praiseId;
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

    public String getIpaddress() {
        return ipaddress;
    }

    public void setIpaddress(String ipaddress) {
        this.ipaddress = ipaddress == null ? null : ipaddress.trim();
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