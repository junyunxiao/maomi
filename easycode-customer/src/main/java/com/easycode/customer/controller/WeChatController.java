package com.easycode.customer.controller;

import com.easycode.rest.server.WeChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Formatter;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * TODO: 微信分享控制层
 *
 * @author 萧竣匀
 * @date 2018/6/29 0:37
 */

@Controller
public class WeChatController {

    @Autowired
    private WeChatService weChatService;

    /**
     *
     * @return
     * @throws Exception
     */
    @RequestMapping("/share")
    public @ResponseBody Map<String, String> share(String url) throws  Exception{
        //获取jsapi_ticket
        String jsapi_ticket = weChatService.getTicket();
        Map<String, String> ret = sign(jsapi_ticket, url);
        return ret;

    }

    /**
     * 根据tikcet和utl进行签名
     * @param jsapi_ticket
     * @param url
     * @return
     */
    public Map<String, String> sign(String jsapi_ticket, String url) {
        Map<String, String> ret = new HashMap<String, String>();
        String nonce_str = create_nonce_str();
        String timestamp = create_timestamp();
        String string1;
        String signature = "";
        // 注意这里参数名必须全部小写，且必须有序
        string1 = "jsapi_ticket=" + jsapi_ticket +"&noncestr=" + nonce_str +"×tamp=" + timestamp +"&url=" + url;
        System.out.println(string1);
        try {
            MessageDigest crypt = MessageDigest.getInstance("SHA-1");
            crypt.reset();
            crypt.update(string1.getBytes("UTF-8"));
            signature = byteToHex(crypt.digest());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        ret.put("url", url);
        ret.put("appId","wx246bae8548b676c6");
        ret.put("jsapi_ticket", jsapi_ticket);
        ret.put("nonceStr", nonce_str);
        ret.put("timestamp", timestamp);
        ret.put("signature", signature);
        return ret;
    }

    /**
     * 加密
     * @param hash
     * @return
     */
    private static String byteToHex(final byte[] hash) {
        Formatter formatter = new Formatter();
        for (byte b : hash) {
            formatter.format("%02x", b);
        }
        String result = formatter.toString();
        formatter.close();
        return result;
    }

    /**
     * 获取随机数
     * @return
     */
    private static String create_nonce_str() {
        return UUID.randomUUID().toString();
    }

    /**
     * 获取时间
     * @return
     */
    private static String create_timestamp() {
        return Long.toString(System.currentTimeMillis() / 1000);
    }
}
