package com.easycode.rest.serverimpl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easycode.common.server.DataService;
import com.easycode.rest.domain.SchoolInfo;
import com.easycode.rest.server.SchoolInfoServer;

@Service("schoolInfoService")
public class SchoolInfoServiceImpl implements SchoolInfoServer{

	@Autowired
	private DataService dataService;
	
	@Override
	public List<SchoolInfo> querySchool(Long parentId) throws Exception {
		List<SchoolInfo> query = dataService.query("com.easycode.rest.dao.school.selectByPrimaryKey", parentId);
		return query;
	}

}
