package com.easycode.common.server.impl;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import com.easycode.common.server.CacheServeice;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

public class CacheServiceSingle implements CacheServeice{


	@Autowired
	private JedisPool jedisPool; 
	
	@Override
	public String get(String key) {
		Jedis jedis = jedisPool.getResource();
		String string = jedis.get(key);
		jedis.close();
		return string;
	}

	@Override
	public String set(String key, String value) {
		Jedis jedis = jedisPool.getResource();
		String string = jedis.set(key, value);
		jedis.close();
		return string;
	}

	@Override
	public String hget(String hkey, String key) {
		Jedis jedis = jedisPool.getResource();
		String string = jedis.hget(hkey, key);
		jedis.close();
		return string;
	}

	@Override
	public String setex(String key, int timeOurt, String value) throws Exception {
		Jedis jedis = jedisPool.getResource();
		String string = jedis.setex(key, timeOurt,value);
		jedis.close();
		return string;
	}

	@Override
	public long hset(String hkey, String key, String value) {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.hset(hkey, key, value);
		jedis.close();
		return result;
	}

	@Override
	public long incr(String key) {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.incr(key);
		jedis.close();
		return result;
	}

	@Override
	public long expire(String key, int second) {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.expire(key, second);
		jedis.close();
		return result;
	}

	@Override
	public long ttl(String key) {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.ttl(key);
		jedis.close();
		return result;
	}

	@Override
	public long del(String key) {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.del(key);
		jedis.close();
		return result;
	}

	@Override
	public long hdel(String hkey, String key) {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.hdel(hkey, key);
		jedis.close();
		return result;
	}

	@Override
	public long decr(String key) throws Exception {
		Jedis jedis = jedisPool.getResource();
		Long result = jedis.decr(key);
		jedis.close();
		return result;
	}

	@Override
	public boolean hexists(String key, String field) throws Exception {
		Jedis jedis = jedisPool.getResource();
		Boolean hexists = jedis.hexists(key, field);
		jedis.close();
		return hexists;
	}

	@Override
	public long hincrBy(String key, String field, long value) throws Exception {
		Jedis jedis = jedisPool.getResource();
		Long hincrBy = jedis.hincrBy(key, field, value);
		jedis.close();
		return hincrBy;
	}

	@Override
	public Set<String> hkeys(String key) throws Exception {
		Jedis jedis = jedisPool.getResource();
		Set<String> hkeys = jedis.hkeys(key);
		jedis.close();
		return hkeys;
	}
	
	public static void main(String[] args) {
		//Jedis jedis = jedisPool.getResource();
		JedisPool jedisPool=new JedisPool("39.108.113.98", 6379);
		Jedis jedis = jedisPool.getResource();
		//Jedis jedis=new Jedis("39.108.113.98", 6379);
		//1520243739865
		//userid:1520239480893
		long hb = jedis.hincrBy("UPVOTE_REDIS_KEY", String.valueOf(1522670585087L),0);
		jedis.close();
		System.out.println(hb);
	}

}
