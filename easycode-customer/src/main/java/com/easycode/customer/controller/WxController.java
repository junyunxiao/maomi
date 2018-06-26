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

@Controller
public class WxController {
    
	@Value("${APPID}")
    private String APPID;

   @Value("${APPSECRET}")
    private String APPSECRET;

    @RequestMapping(value = "/getWxInfo1")
    @ResponseBody
    public void getWxInfo1(HttpServletRequest request, HttpServletResponse response){
        
        String url1= request.getParameter("url1");
        PrintWriter printWriter=null;


        if (!" ".equals(url1) && url1!=null){
            Map<String,String> map=WxconfigUtil.getWxInfo(url1,APPID,APPSECRET);
            JSONObject jsonObject=JSONObject.fromObject(map);
            System.out.println("map:"+map);
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
            
        }
    }

}
