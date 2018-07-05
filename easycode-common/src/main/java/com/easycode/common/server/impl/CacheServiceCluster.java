package com.easycode.common.server.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import com.easycode.common.server.CacheServeice;
import redis.clients.jedis.JedisCluster;

public class CacheServiceCluster implements CacheServeice{

	@Autowired
	private JedisCluster jedisCluster;
	
	@Override
	public String get(String key) {
		return jedisCluster.get(key);
	}

	@Override
	public String set(String key, String value) {
		return jedisCluster.set(key, value);
	}

	@Override
	public String hget(String hkey, String key) {
		return jedisCluster.hget(hkey, key);
	}

	@Override
	public String setex(String key, int timeOurt, String value) throws Exception {
		return jedisCluster.setex(key,timeOurt,value);
	}

	@Override
	public long hset(String hkey, String key, String value) {
		return jedisCluster.hset(hkey, key, value);
	}

	@Override
	public long incr(String key) {
		return jedisCluster.incr(key);
	}

	@Override
	public long expire(String key, int second) {
		return jedisCluster.expire(key, second);
	}

	@Override
	public long ttl(String key) {
		return jedisCluster.ttl(key);
	}

	@Override
	public long del(String key) {
		
		return jedisCluster.del(key);
	}

	@Override
	public long hdel(String hkey, String key) {
		
		return jedisCluster.hdel(hkey, key);
	}

	@Override
	public long decr(String key) throws Exception {
		return jedisCluster.decr(key);
	}

	@Override
	public boolean hexists(String key,String field)  throws Exception {
		
		return  jedisCluster.hexists(key, field);
	}

	@Override
	public long hincrBy(String key, String field, long value) throws Exception {
		
		return  jedisCluster.hincrBy(key, field, value);
	}

	@Override
	public Set<String> hkeys(String key) throws Exception {
		return  jedisCluster.hkeys(key);
	}

}
