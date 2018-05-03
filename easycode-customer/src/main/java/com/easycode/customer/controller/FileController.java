package com.easycode.customer.controller;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.User;
import com.easycode.rest.server.FileService;

@Controller
public class FileController {

	@Autowired
	private FileService fileService;

	@RequestMapping("/upload")
	@ResponseBody
	public String upload(MultipartFile file, HttpServletRequest request) throws IOException, Exception {
		TradeMessages<String> messages = new TradeMessages<String>();
		try {
			User userdata = (User) request.getSession().getAttribute("userData");
			if (userdata == null) {
				messages.setData(null);
				messages.setResultCode("-1");
				messages.setResultMessage("您还未登录，请登录");
				return JSONUtils.toJSON(messages);
			}
			// 判断用户登录状态
			// 获取文件扩展名
			System.err.println("文件名："+file.getOriginalFilename());
			String extName = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1);
			String resultUrl = fileService.fileUpload(file.getBytes(), extName);
			messages.setData(resultUrl);
			messages.setResultCode("1");
			messages.setResultMessage("文件上传成功");
		} catch (Exception e) {
			e.printStackTrace();
			messages.setData(null);
			messages.setResultCode("0");
			messages.setResultMessage("系统异常，文件上传失败");
		}
		return JSONUtils.toJSON(messages);
	}
}
