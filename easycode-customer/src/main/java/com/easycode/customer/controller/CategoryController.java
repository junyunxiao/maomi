package com.easycode.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easycode.common.message.TradeMessages;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.CategoryInfo;
import com.easycode.rest.server.CategoryServer;

@Controller
public class CategoryController {

	@Autowired
	private CategoryServer categoryServer;
	
	@RequestMapping("/queryCategoryInfo")
	@ResponseBody
	public String  queryCategoryInfo() throws Exception {
		TradeMessages<List<CategoryInfo>> messages=new TradeMessages<List<CategoryInfo>>();
		List<CategoryInfo> categroys = categoryServer.queryCategroy();
		messages.setData(categroys);
		messages.setResultCode("1");
		messages.setResultMessage("rpc调用成功");
		return JSONUtils.toJSON(messages);
		
	}
	
	public static void main(String[] args) {
		System.err.println(System.currentTimeMillis());
	}
}
