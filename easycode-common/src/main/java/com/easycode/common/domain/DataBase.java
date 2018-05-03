package com.easycode.common.domain;

import java.io.Serializable;

public class DataBase implements Serializable{

	private static final long serialVersionUID = -7924457566583064595L;
	private String privateKey;//私匙
	private String publicKey;//公匙
	private String plaintext;//明文
	private String ciphertext;//密文
	
	public String getPrivateKey() {
		return privateKey;
	}
	public void setPrivateKey(String privateKey) {
		this.privateKey = privateKey;
	}
	public String getPublicKey() {
		return publicKey;
	}
	public void setPublicKey(String publicKey) {
		this.publicKey = publicKey;
	}
	public String getPlaintext() {
		return plaintext;
	}
	public void setPlaintext(String plaintext) {
		this.plaintext = plaintext;
	}
	public String getCiphertext() {
		return ciphertext;
	}
	public void setCiphertext(String ciphertext) {
		this.ciphertext = ciphertext;
	}
	
	
	
	
}
