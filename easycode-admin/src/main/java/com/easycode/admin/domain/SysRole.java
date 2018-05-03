package com.easycode.admin.domain;

import java.io.Serializable;
import java.util.Date;

public class SysRole implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 3671313174451867638L;

	private Long roleId;

    private String roleName;

    private Integer roleStart;

    private Long createUserId;

    private Long updateUserId;

    private Date createTime;

    private Date updateTime;

    private String roleRemark;

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName == null ? null : roleName.trim();
    }

    public Integer getRoleStart() {
        return roleStart;
    }

    public void setRoleStart(Integer roleStart) {
        this.roleStart = roleStart;
    }

    public Long getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Long createUserId) {
        this.createUserId = createUserId;
    }

    public Long getUpdateUserId() {
        return updateUserId;
    }

    public void setUpdateUserId(Long updateUserId) {
        this.updateUserId = updateUserId;
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

    public String getRoleRemark() {
        return roleRemark;
    }

    public void setRoleRemark(String roleRemark) {
        this.roleRemark = roleRemark == null ? null : roleRemark.trim();
    }
}