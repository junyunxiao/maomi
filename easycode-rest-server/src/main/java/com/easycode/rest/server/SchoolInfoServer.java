package com.easycode.rest.server;

import java.util.List;

import com.easycode.rest.domain.SchoolInfo;


/**
 * @author 萧竣匀
 * @version:1.0
 * @description:学校信息维护
 * @createTime:2018年1月16日下午9:25:28
 */
public interface SchoolInfoServer {
	
	List<SchoolInfo> querySchool(Long parentId) throws Exception;
}
