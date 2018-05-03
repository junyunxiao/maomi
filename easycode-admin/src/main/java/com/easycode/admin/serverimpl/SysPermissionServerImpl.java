package com.easycode.admin.serverimpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.easycode.admin.server.SysPermissionServer;
import com.easycode.common.server.DataService;

@Service
@Transactional
public class SysPermissionServerImpl implements SysPermissionServer {

	@Autowired
	private DataService dataService;
	
	@Override
	public List<String> queryPermissionsByUserId(long userId) {
		// TODO Auto-generated method stub
		/*com.easycode.admin.dao.SysPramission*/
		List<String> permissions = dataService.query("com.easycode.admin.dao.SysPramission.queryPermissionsByUserId", userId);
		return permissions;
	}

}
