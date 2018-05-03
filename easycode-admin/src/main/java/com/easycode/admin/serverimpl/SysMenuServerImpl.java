package com.easycode.admin.serverimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.easycode.admin.domain.SysMenu;
import com.easycode.admin.server.SysMenuServer;
import com.easycode.common.server.DataService;

@Service
@Transactional
public class SysMenuServerImpl implements SysMenuServer {
	
	@Autowired
	private DataService dataService;


	@Override
	public List<SysMenu> queryMenus(long userId) throws Exception {
		// TODO Auto-generated method stub
		List<SysMenu> menus = dataService.query("com.easycode.admin.dao.SysMenu.queryMenusByUserId", userId);
		return menus;
	}

}
