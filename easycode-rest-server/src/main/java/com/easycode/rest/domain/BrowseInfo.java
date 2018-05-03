package com.easycode.rest.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:浏览记录
 * @createTime:2018年1月30日下午4:08:38
 */
public class BrowseInfo implements Serializable{

	private static final long serialVersionUID = 8661450013938640243L;

	private Long browseinfoid;

    private Long projectid;

    private Date createtime;

    private Date updatetime;

    private String ipaddress;

    public Long getBrowseinfoid() {
        return browseinfoid;
    }

    public void setBrowseinfoid(Long browseinfoid) {
        this.browseinfoid = browseinfoid;
    }

    public Long getProjectid() {
        return projectid;
    }

    public void setProjectid(Long projectid) {
        this.projectid = projectid;
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

    public String getIpaddress() {
        return ipaddress;
    }

    public void setIpaddress(String ipaddress) {
        this.ipaddress = ipaddress == null ? null : ipaddress.trim();
    }
}