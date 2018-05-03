package com.easycode.rest.serverimpl;

import java.util.List;

import org.springframework.stereotype.Service;
import com.easycode.common.utils.FileUtils;
import com.easycode.rest.server.FileService;

@Service("fileService")
public class FileServiceImpl implements FileService {

	@Override
	public String fileUpload(byte[] fileContent, String extName) throws Exception  {
		FileUtils client = new FileUtils("properties/fdfs_client.conf");
		String resultFileUrl = client.uploadFile(fileContent, extName);
		return resultFileUrl;
	}

	@Override
	public void delProject(List<String> filesUrl) throws Exception {
		FileUtils client = new FileUtils("properties/fdfs_client.conf");
		for (String url : filesUrl) {
			client.delFiles(url);
		}
	}

}
