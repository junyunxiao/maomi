package com.easycode.common.message;

import java.io.Serializable;

public class TradeMessages<T> implements Serializable {

	private static final long serialVersionUID = -2352663152701894912L;

	private HeadData headData = new HeadData();// 请求头

	private T bodyData;// 请求bodyData

	/**
	 * 以下是请求响应回写数据
	 */
	private String resultCode;// 返回码 1成功，其它为异常码
	private String resultMessage;// 返回信息
	private String requestUniqeld; // 请求的唯一编号，接口处理完业务后，将返回客户请求时传入的唯一编号
	private String serial; // 流水号
	private T data; // 返回数据 JSON格式

	public HeadData getHeadData() {
		return headData;
	}

	public void setHeadData(HeadData headData) {
		this.headData = headData;
	}

	public T getBodyData() {
		return bodyData;
	}

	public void setBodyData(T bodyData) {
		this.bodyData = bodyData;
	}

	public String getResultCode() {
		return resultCode;
	}

	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}

	public String getResultMessage() {
		return resultMessage;
	}

	public void setResultMessage(String resultMessage) {
		this.resultMessage = resultMessage;
	}

	public String getRequestUniqeld() {
		return requestUniqeld;
	}

	public void setRequestUniqeld(String requestUniqeld) {
		this.requestUniqeld = requestUniqeld;
	}

	public String getSerial() {
		return serial;
	}

	public void setSerial(String serial) {
		this.serial = serial;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
