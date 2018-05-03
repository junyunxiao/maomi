package com.easycode.rest.server;

import java.util.List;

import com.easycode.rest.domain.CategoryInfo;

public interface CategoryServer {
	
	  List<CategoryInfo> queryCategroy() throws Exception;
}
