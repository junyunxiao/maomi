package com.easycode.admin.domain;

import java.io.Serializable;
import java.util.List;

public class ActiveUser implements Serializable {

	private static final long serialVersionUID = -6108491129120035230L;

	private Long sysUserId;//用户ID

	private String sysUserName;//用户名

	private String sysUserPassord;//登陆密码

	private List<SysMenu> menus;// 菜单

	private List<SysPramission> permissions;// 权限

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
		this.sysUserName = sysUserName;
	}

	public String getSysUserPassord() {
		return sysUserPassord;
	}

	public void setSysUserPassord(String sysUserPassord) {
		this.sysUserPassord = sysUserPassord;
	}

	public List<SysMenu> getMenus() {
		return menus;
	}

	public void setMenus(List<SysMenu> menus) {
		this.menus = menus;
	}

	public List<SysPramission> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<SysPramission> permissions) {
		this.permissions = permissions;
	}

}
