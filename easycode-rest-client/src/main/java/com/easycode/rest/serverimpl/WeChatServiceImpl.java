package com.easycode.rest.serverimpl;

import com.easycode.common.server.CacheServeice;
import com.easycode.common.utils.HttpUtils;
import com.easycode.rest.server.WeChatService;
import org.codehaus.jackson.JsonNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;


/**
 * TODO: 微信分享接口
 *
 * @author 萧竣匀
 * @date 2018/6/30 20:12
 */
@Service("weChatService")
public class WeChatServiceImpl implements WeChatService {

    private static final Logger logger=LoggerFactory.getLogger(WeChatServiceImpl.class);

    @Autowired
    private CacheServeice cacheServeice;

    /**
     * 获取Token接口地址
     */
    private String TOKE_URL="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential";

    /**
     * 获取Ticket接口地址
     */
    private String TICKET_URL="https://api.weixin.qq.com/cgi-bin/ticket/getticket";

    private String APPID="wx246bae8548b676c6";

    private  String APPSECRET="62dbd3330ad2284b37677da9e6315903";



    private String getToken() throws  Exception{
        //首先判断Token是否存在
  /*      String token=cacheServeice.get("accessToken");
        if (!StringUtils.isEmpty(token)){
            return  token;
        }else {*/
            //请求token
            //缓存token 7200秒
    		long startTime=System.currentTimeMillis(); 
            StringBuffer stringBuffer=new StringBuffer(TOKE_URL.length()+100);
            stringBuffer.append(TOKE_URL);
            stringBuffer.append("&appid="+APPID);
            stringBuffer.append("&secret="+APPSECRET);
            String url=stringBuffer.toString();
            JsonNode jsonNode=HttpUtils.httpsRequest(url,"GET",null);
            logger.info("请求Token接口,耗时:{} ms",(System.currentTimeMillis()-startTime));
            if (null != jsonNode.get("access_token") && !"".equals("access_token")) {
                //获取Token
                String accessToken=jsonNode.get("access_token").getTextValue();
                //获取Token超时时间
                Integer timeOut=toInt(jsonNode.get("expires_in").toString());
                //将Token存入redis
                /*cacheServeice.setex("accessToken",timeOut,accessToken);*/
                logger.info("获取到token数据:"+accessToken);
                return  accessToken;
            }else {
                logger.error("获取微信Token出现异常，请检查！");
                return  null;
            }
    }

    @Override
    public String  getTicket() throws  Exception{
        StringBuffer stringBuffer=new StringBuffer(TICKET_URL.length()+100);
        stringBuffer.append(TICKET_URL);
        stringBuffer.append("?access_token="+getToken());
        stringBuffer.append("&type=jsapi");
        String url=stringBuffer.toString();
       JsonNode jsonNode= HttpUtils.httpsRequest(url,"GET",null);
        if (null != jsonNode.get("ticket")) {
            //获取票据
            String ticket=jsonNode.get("ticket").getTextValue();
            //获取超时时间
            Integer timeOut=toInt(jsonNode.get("expires_in").toString());
            return  ticket;
        }else {
        	 logger.error("获取微信Ticket出现异常，请检查！");
			return null;
		}
       
    }

    private static Integer toInt(String str) {
        if (str == null || str.equals("")) {
            return null;
        }
        return Integer.valueOf(str);
    }


}
