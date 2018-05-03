package com.easycode.common.message;

import java.io.Serializable;

public class HeadData implements Serializable{

	private static final long serialVersionUID = 2827766340863151928L;
	private String userId="9";//用户ID
    private String sign="MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIm2Xri9vqKzXdaPp6Hnq2hOcHFhrXA7cDXb5ft0eYK4USRZ9NCI/aw0Hk8L04/1F9eaIYE2BykYFNSfNMfQV7gUDVKJCXFCOGUQ2X88/CNfiNVlII/Z+UoDysELNbvMMhkhA6c1mUPSSHuzSjMdmHuEvs8ujZ4lnQKDNwICScxNAgMBAAECgYBRlsbP1TsY0gQKltnORp97EN31jtVe5Rg6EKpVLFDBbcpFKzasRj1kxQwf8PXLGH6jsiGfmA7t/eJ5hkmTCJCvEhwtJqIo9lLEFyPq+CCI7cqg59rN4EDsE7l00CczpEnEs4izR1EsqXWyxvgBtKiqv8KddJuyt6ZWdv2q6SWVgQJBANhD/5btD42zfPKEXan3rh/LOjzFdan6oSEXvCLKwTQgpZ8DSyKluSzO0HUK6lH080HrmEZrf4NTLtOdlAHsG+UCQQCjA6OTMzJc6SjuGMbF0IXtde8Bq0OSjrtQ2RkLyJp4BBme+cz5vGw4pVcwW1cqCZk+BCd73ZuXmbjoq0WAMPhJAkEAvk1PqjpeVl2b1Dffx8G4CiglzfYfrPxrLxiYp7Dsw/b6ZmtagVl9Ec3HJ0b8nDPEnrw2mbjcUu4upW3jILHodQJAF3c8osHp7An8RFn4sx0TSl2BrEHVFlHJkRfPTSzxX3lnnsTixshi47yZUnKzl2+OSakbbe82qJoOTh/pf0yNUQJAP88Lsw4YZjYzSrqmXoaYIJQk652GzjbtmTI4fqntPetzik+9zxULSzSHV42WUdDMUHhLdHwzMO0YoV10DhOCeg==";//签名
    private String version="1.2.3";//版本
    private String uniqueId=java.util.UUID.randomUUID().toString();//唯一编号
    private String token;//用户登录标识
    
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getSign() {
		return sign;
	}
	public void setSign(String sign) {
		this.sign = sign;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public String getUniqueId() {
		return uniqueId;
	}
	public void setUniqueId(String uniqueId) {
		this.uniqueId = uniqueId;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
    
    
    
    
}
