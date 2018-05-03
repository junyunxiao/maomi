package com.easycode.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.SchoolInfo;
import com.easycode.rest.server.SchoolInfoServer;

@Controller
public class SchoolController {

	@Autowired
	private SchoolInfoServer schoolInfoService;
	
	@RequestMapping("/querySchoolInfo")
	@ResponseBody
	public String querySchoolInfo(Long parentId) throws Exception {
		TradeMessages<List<SchoolInfo>> messages=new TradeMessages<List<SchoolInfo>>();
		if (parentId !=null) {
			List<SchoolInfo> querySchool = schoolInfoService.querySchool(parentId);
			messages.setData(querySchool);
			messages.setResultCode("1");
			messages.setResultMessage("rpc调用成功,学校数据请求成功!");
			return JSONUtils.toJSON(messages);
		}else {
			messages.setData(null);
			messages.setResultCode("0");
			messages.setResultMessage("非法请求，请检查输入参数!");
			return JSONUtils.toJSON(messages);
		}
	}
	
}
