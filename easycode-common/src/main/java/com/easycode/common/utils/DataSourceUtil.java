package com.easycode.common.utils;


import com.alibaba.druid.filter.config.ConfigTools;

import com.easycode.common.domain.DataBase;

public class DataSourceUtil {
	
	private static String [] keyPair;
	
	
	public static String[] getKeyPair() {
		return keyPair;
	}
	
	public static void setKeyPair(String[] keyPair) {
		DataSourceUtil.keyPair = keyPair;
	}

	public static DataBase encrypt(String password) throws Exception {
		DataBase dataBase=new DataBase();
		keyPair=ConfigTools.genKeyPair(512);
		dataBase.setPrivateKey(keyPair[0]);
		dataBase.setPublicKey(keyPair[1]);
		dataBase.setCiphertext(ConfigTools.encrypt(dataBase.getPrivateKey(), password));
		dataBase.setPlaintext(ConfigTools.decrypt(dataBase.getPublicKey(), dataBase.getCiphertext()));
		return dataBase; 
	}
	
	
	public static void main(String[] args) throws Exception {
		DataBase dataBase = DataSourceUtil.encrypt("xiaoxiao");
		System.err.println("公匙:"+dataBase.getPublicKey()+"\n");
		System.err.println("私匙:"+dataBase.getPrivateKey()+"\n");
		System.err.println("密文:"+dataBase.getCiphertext()+"\n");
		System.err.println("明文:"+dataBase.getPlaintext());
	}
	
}
