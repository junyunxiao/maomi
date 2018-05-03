package com.easycode.admin.serverimpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.easycode.admin.domain.SysUser;
import com.easycode.admin.server.SysUserServer;
import com.easycode.common.server.DataService;

@Service
@Transactional
public class SysUserServerImpl implements SysUserServer {
	
	@Autowired
	private DataService dataService;

	@Override
	public SysUser login(String userName) throws Exception {
		// TODO Auto-generated method stub
		List<SysUser> userList = dataService.query("com.easycode.admin.dao.SysUser.getSysUserByUserNmae", userName);
		
		return userList!=null&&userList.size()>0?userList.get(0):null;
	}

}
