package com.easycode.rest.server;

/**
 * TODO: 微信分享接口
 *
 * @author 萧竣匀
 * @date 2018/6/30 20:12
 */
public interface WeChatService {


    /**
     * 获取Ticket
     * @return
     * @throws Exception
     */
     String getTicket() throws  Exception;
}
