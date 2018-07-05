package com.easycode.common.server;

import java.util.Set;

public interface CacheServeice {
	
	 public String set(String key,String value) throws Exception;
	 
	 public String get(String key) throws Exception;
	 
	 public long hset(String key,String field,String value) throws Exception;
	 
	 public String hget(String key,String field) throws Exception;

	 public  String setex(String key, int timeOurt, String value) throws  Exception;
	 
	 public long incr(String key) throws Exception;
	 
	 public long decr(String key) throws Exception;
	 
	 public long expire(String key,int timeout) throws Exception;
	 
	 public long ttl(String key) throws Exception;
	 
	 public long del(String key) throws Exception;
	 
	 public long hdel(String hkey, String key) throws Exception;
	 
	 public  boolean hexists(String key,String field) throws Exception;
	 
	 public long hincrBy(String key,String field,long value) throws Exception;
	 
	 public Set<String> hkeys(String key) throws Exception;
	 
	 
}
