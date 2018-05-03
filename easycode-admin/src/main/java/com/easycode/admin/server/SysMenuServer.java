package com.easycode.admin.server;

import java.util.List;

import com.easycode.admin.domain.SysMenu;

public interface SysMenuServer {
	
	List<SysMenu> queryMenus(long userId) throws Exception;
}
