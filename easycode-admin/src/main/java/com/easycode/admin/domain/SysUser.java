package com.easycode.admin.domain;

import java.util.Date;

public class SysUser {
    private Long sysUserId;

    private String sysUserName;

    private String sysUserPassord;

    private String sysUserSalt;

    private String sysUserAvatar;

    private String sysUserMail;

    private Long createUserId;

    private Long updateUserId;

    private Integer sysUserStart;

    private Date createTime;

    private Date updateTime;

    private String sysUserRemark;

    public Long getSysUserId() {
        return sysUserId;
    }

    public void setSysUserId(Long sysUserId) {
        this.sysUserId = sysUserId;
    }

    public String getSysUserName() {
        return sysUserName;
    }

    public void setSysUserName(String sysUserName) {
        this.sysUserName = sysUserName == null ? null : sysUserName.trim();
    }

    public String getSysUserPassord() {
        return sysUserPassord;
    }

    public void setSysUserPassord(String sysUserPassord) {
        this.sysUserPassord = sysUserPassord == null ? null : sysUserPassord.trim();
    }

    public String getSysUserSalt() {
        return sysUserSalt;
    }

    public void setSysUserSalt(String sysUserSalt) {
        this.sysUserSalt = sysUserSalt == null ? null : sysUserSalt.trim();
    }

    public String getSysUserAvatar() {
        return sysUserAvatar;
    }

    public void setSysUserAvatar(String sysUserAvatar) {
        this.sysUserAvatar = sysUserAvatar == null ? null : sysUserAvatar.trim();
    }

    public String getSysUserMail() {
        return sysUserMail;
    }

    public void setSysUserMail(String sysUserMail) {
        this.sysUserMail = sysUserMail == null ? null : sysUserMail.trim();
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

    public Integer getSysUserStart() {
        return sysUserStart;
    }

    public void setSysUserStart(Integer sysUserStart) {
        this.sysUserStart = sysUserStart;
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

    public String getSysUserRemark() {
        return sysUserRemark;
    }

    public void setSysUserRemark(String sysUserRemark) {
        this.sysUserRemark = sysUserRemark == null ? null : sysUserRemark.trim();
    }
}