package com.easycode.admin.realm;

import java.util.List;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import com.easycode.admin.domain.ActiveUser;
import com.easycode.admin.domain.SysMenu;
import com.easycode.admin.domain.SysUser;
import com.easycode.admin.server.SysMenuServer;
import com.easycode.admin.server.SysPermissionServer;
import com.easycode.admin.server.SysUserServer;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:自定义realm
 * @createTime:2018年4月10日上午11:49:28
 */
public class CustomRealm  extends AuthorizingRealm{

	@Autowired
	private SysUserServer sysUserServer;
	
	@Autowired
	private SysMenuServer sysMenuServer;
	
	@Autowired
	private SysPermissionServer sysPermissionServer;
	
	/* 
	* <p>Title: doGetAuthenticationInfo</p> 
	* <p>Description: 认证</p> 
	* @param authenticationToken
	* @return
	* @throws AuthenticationException 
	*/
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
		String userName = (String) authenticationToken.getPrincipal();
		SysUser user=null;
		try {
			user= sysUserServer.login(userName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(user==null  || user.getSysUserName()==null) {return null;}
		//数据库查询出来的密码
		String password = user.getSysUserPassord();
		//加密串
		String salt = user.getSysUserSalt();
		ActiveUser activeUser = new ActiveUser();
		activeUser.setSysUserId(user.getSysUserId());
		activeUser.setSysUserName(user.getSysUserName());
		//根据用户ID查询出菜单
		List<SysMenu> menus  =null;
		try {
			menus=sysMenuServer.queryMenus(user.getSysUserId());
		} catch (Exception e) {
			e.printStackTrace();
		}
		activeUser.setMenus(menus);
		SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(activeUser, password,ByteSource.Util.bytes(salt), this.getName());
		return simpleAuthenticationInfo;
	}
	
	/* 
	* <p>Title: doGetAuthorizationInfo</p> 
	* <p>Description: 授权</p> 
	* @param principalCollection
	* @return 
	*/
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
		// TODO Auto-generated method stub
		ActiveUser activeUser =  (ActiveUser) principalCollection.getPrimaryPrincipal();
		//获取权限数据
		List<String> permissionList = null;
		try {
			sysPermissionServer.queryPermissionsByUserId(activeUser.getSysUserId());	
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
		//将上边查询到授权信息填充到simpleAuthorizationInfo对象中
		simpleAuthorizationInfo.addStringPermissions(permissionList);
		return simpleAuthorizationInfo;
	}
	
/*	public static void main(String[] args) {
		String salt=UUID.randomUUID().toString();
		String hashAlgorithmName = "MD5";
        String credentials = "directxjy921";
        int hashIterations = 2;
       ByteSource credentialsSalt = ByteSource.Util.bytes(salt);
        Object obj = new SimpleHash(hashAlgorithmName, credentials, credentialsSalt, hashIterations);
        System.out.println(salt);
        System.out.println(obj);
        System.err.println(System.currentTimeMillis());
	}*/
}
