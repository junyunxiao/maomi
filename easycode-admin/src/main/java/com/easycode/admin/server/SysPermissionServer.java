package com.easycode.admin.server;

import java.util.List;

public interface SysPermissionServer {

	List<String> queryPermissionsByUserId(long userId);
	
}
