package com.easycode.admin.configuration;

import java.io.IOException;

import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import com.jagregory.shiro.freemarker.ShiroTags;

import freemarker.template.Configuration;
import freemarker.template.TemplateException;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:shiro标签在freemark中的扩展
 * @createTime:2018年4月12日下午4:17:11
 */
public class FreeMarkerConfigExtend extends FreeMarkerConfigurer {
	@Override
	public void afterPropertiesSet() throws IOException, TemplateException {
		// TODO Auto-generated method stub
		super.afterPropertiesSet();
		 Configuration cfg = this.getConfiguration();
        cfg.setSharedVariable("shiro", new ShiroTags());//shiro标签
        cfg.setNumberFormat("#");//防止页面输出数字,变成2,000
	}
}
