package com.easycode.admin.domain;

import java.io.Serializable;
import java.util.Date;

public class SysPramission implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = -3660930827908642602L;

	private Long  permissionsId;

    private String permissionsName;

    private String permissionsUrl;

    private String permissionsStr;

    private Long createUserId;

    private Long updateUserId;

    private Date createTime;

    private Date updateTime;

    private String permissionsRemark;

    public Long getPermissionsId() {
		return permissionsId;
	}

	public void setPermissionsId(Long permissionsId) {
		this.permissionsId = permissionsId;
	}

	public String getPermissionsName() {
        return permissionsName;
    }

    public void setPermissionsName(String permissionsName) {
        this.permissionsName = permissionsName == null ? null : permissionsName.trim();
    }

    public String getPermissionsUrl() {
        return permissionsUrl;
    }

    public void setPermissionsUrl(String permissionsUrl) {
        this.permissionsUrl = permissionsUrl == null ? null : permissionsUrl.trim();
    }

    public String getPermissionsStr() {
        return permissionsStr;
    }

    public void setPermissionsStr(String permissionsStr) {
        this.permissionsStr = permissionsStr == null ? null : permissionsStr.trim();
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

    public String getPermissionsRemark() {
        return permissionsRemark;
    }

    public void setPermissionsRemark(String permissionsRemark) {
        this.permissionsRemark = permissionsRemark == null ? null : permissionsRemark.trim();
    }
}