package com.easycode.common.utils;

import org.csource.common.NameValuePair;
import org.csource.fastdfs.ClientGlobal;
import org.csource.fastdfs.StorageClient1;
import org.csource.fastdfs.StorageServer;
import org.csource.fastdfs.TrackerClient;
import org.csource.fastdfs.TrackerServer;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:fastdfs客户端操作文件
 * @createTime:2017年12月5日下午11:03:06
 */
public class FileUtils {
	private TrackerClient trackerClient = null;
	private TrackerServer trackerServer = null;
	private StorageServer storageServer = null;
	// 使用StorageClient1进行上传
	private StorageClient1 storageClient = null;

	public FileUtils(String conf) throws Exception {
		// 获取classpath路径下配置文件"fdfs_client.conf"的路径
		// conf直接写相对于classpath的位置，不需要写classpath:
		  String configPath = this.getClass().getClassLoader().getResource(conf).getFile();
	      System.out.println(configPath);
	     ClientGlobal.init(configPath);
		trackerClient = new TrackerClient();
		trackerServer = trackerClient.getConnection();
		storageServer = trackerClient.getStoreStorage(trackerServer);
		storageClient = new StorageClient1(trackerServer, storageServer);
	}

	/**
	 * @description:文件上传方法
	 * @param file_buff
	 * @param file_ext_name
	 * @return
	 * @throws Exception
	 */

	public String uploadFile(String fileName, String extName, NameValuePair[] metas) throws Exception {
		String result = storageClient.upload_file1(fileName, extName, metas);
		return result;
	}

	public String uploadFile(String fileName, String extName) throws Exception {
		String result = storageClient.upload_file1(fileName, extName, null);
		return result;
	}

	public String uploadFile(String fileName) throws Exception {
		String result = storageClient.upload_file1(fileName, null, null);
		return result;
	}

	public String uploadFile(byte[] fileContent, String extName, NameValuePair[] metas) throws Exception {
		String result = storageClient.upload_file1(fileContent, extName, metas);
		return result;
	}

	public String uploadFile(byte[] fileContent, String extName) throws Exception {
		String result = storageClient.upload_file1(fileContent, extName, null);
		return result;
	}

	public String uploadFile(byte[] fileContent) throws Exception {
		String result = storageClient.upload_file1(fileContent, null, null);
		return result;
	}
	
	
	/**
	 * @param storagePath 文件全路径
	 * @return 0：成功，-1 失败
	 * @throws Exception
	 */
	public int delFiles(String storagePath) throws Exception {
		int result =storageClient.delete_file1(storagePath);
		return result;
	}
}