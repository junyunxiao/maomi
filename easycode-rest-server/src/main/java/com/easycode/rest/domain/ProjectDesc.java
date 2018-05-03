package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:作品描述
 * @createTime:2018年1月30日下午4:06:34
 */
public class ProjectDesc implements Serializable{

	private static final long serialVersionUID = 17633469908016644L;

	private Long projectDescid;

    private Long projectId;

    private String projectDescription;

    private String projectInstructions;

    private Date createTime;

    private Date updateTime;

    public Long getProjectDescid() {
        return projectDescid;
    }

    public void setProjectDescid(Long projectDescid) {
        this.projectDescid = projectDescid;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription == null ? null : projectDescription.trim();
    }

    public String getProjectInstructions() {
        return projectInstructions;
    }

    public void setProjectInstructions(String projectInstructions) {
        this.projectInstructions = projectInstructions == null ? null : projectInstructions.trim();
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