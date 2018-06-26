package com.easycode.customer.controller;

import com.test.util.WxconfigUtil;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
public class WxController {
    

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
    @RequestMapping(value = "/getWxInfo1")
    @ResponseBody
    public void getWxInfo1(HttpServletRequest request, HttpServletResponse response){
        
        String url1= request.getParameter("url1");
        PrintWriter printWriter=null;


        if (!" ".equals(url1) && url1!=null){
            Map<String,String> map=WxconfigUtil.getWxInfo(url1);
            JSONObject jsonObject=JSONObject.fromObject(map);
           
           try {
               printWriter=response.getWriter();
               printWriter.print(jsonObject);
           }catch (Exception e){
               e.printStackTrace();
            }finally {
               if (printWriter!=null) {
                   printWriter.flush();
                   printWriter.close();
               }
           }
        }
        else {
			logger.info("=========传入的url为空==========");
        }
    }

}
