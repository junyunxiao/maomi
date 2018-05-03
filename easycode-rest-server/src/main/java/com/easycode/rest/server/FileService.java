package com.easycode.rest.server;

import java.util.List;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:文件上传接口
 * @createTime:2017年12月31日下午3:39:27
 */
public interface FileService {
	
	/**
	 * 作品上传
	 * @param fileContent
	 * @param extName
	 * @return
	 * @throws Exception
	 */
	String fileUpload(byte[] fileContent, String extName) throws Exception; 
	
	/**
	 * 作品删除
	 * @param projectUrl
	 * @param resourcesUrl
	 * @throws Exception
	 */
	void delProject(List<String> filesUrl) throws Exception;
	
	
}
