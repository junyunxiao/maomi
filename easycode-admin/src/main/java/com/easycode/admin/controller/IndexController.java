package com.easycode.admin.controller;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.easycode.admin.utils.ValidateCode;




/**
 * @author 萧竣匀
 * @description ：
 * @version：跳转到首页
 * @createTime：2017年9月28日下午3:16:07
 */

@Controller
public class IndexController {
	
	@RequestMapping("/")
	private String showIndex(HttpServletRequest request){

		return "index";
	}
	
	
    @RequestMapping("/validateCode")
    public void validateCode(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setHeader("Cache-Control", "no-cache");
        String verifyCode = ValidateCode.generateTextCode(ValidateCode.TYPE_NUM_LOWER, 4, null);
        request.getSession().setAttribute("validateCode", verifyCode);
        response.setContentType("image/jpeg");
        BufferedImage bim = ValidateCode.generateImageCode(verifyCode,106,34, 5, true, Color.WHITE, Color.BLUE, null);
        ImageIO.write(bim, "JPEG", response.getOutputStream());
    }

    @RequestMapping("/home")
	private String home(HttpServletRequest request){

		return "welcome";
	}
    
    
}
