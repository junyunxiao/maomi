package com.easycode.admin.server;

import com.easycode.admin.domain.SysUser;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:后台管理系统用户接口
 * @createTime:2018年4月11日下午6:00:22
 */
public interface SysUserServer {

	/** 
	* @Title: login 
	* @Description: 后台系统登陆
	* @param userName:用户名
	* @return SysUser
	* @throws Exception
	*/
	SysUser login(String userName)throws Exception;
}
