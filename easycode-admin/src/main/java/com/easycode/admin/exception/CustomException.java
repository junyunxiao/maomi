package com.easycode.admin.exception;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:系统自定义的异常类型，实际开发中可能要定义多种异常类型
 * @createTime:2018年4月11日下午11:34:46
 */
public class CustomException extends Exception {
	
	private static final long serialVersionUID = 3515636532601443892L;
	//异常信息
	private String message;
	
	public CustomException(String message){
		super(message);
		this.message = message;
		
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
