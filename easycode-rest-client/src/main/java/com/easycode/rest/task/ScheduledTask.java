package com.easycode.rest.task;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import com.easycode.common.server.CacheServeice;
import com.easycode.common.server.DataService;
import com.easycode.rest.domain.TempInfo;

public class ScheduledTask {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private CacheServeice cacheServeice;

	// 注入dataservice
	@Autowired
	private DataService dataService;

	@Value("${UPVOTE_REDIS_KEY}")
	private String UPVOTE_REDIS_KEY;

	@Value("${LAST_UPVOTE_REDIS_KEY}")
	private String LAST_UPVOTE_REDIS_KEY;
	
	@Value("${COLLECTION_REDIS_KEY}")
	private String COLLECTION_REDIS_KEY;
	
	@Value("${LAST_COLLECTION_REDIS_KEY}")
	private String LAST_COLLECTION_REDIS_KEY;

	/**
	 * 每5分钟定时同步一次数据到mysql 解决定时器重复同步数据的问题思路：将各个作品的id及点赞数存入redis与将要更新的数据作对比
	 * 有差异时跟新，没有差异则不做同步
	 * 
	 * @throws Exception
	 */
	@Transactional
	public void modifyUpvoteNum() throws Exception {
		long startTime = System.currentTimeMillis();
		// 主数据
		Set<String> hkeys = cacheServeice.hkeys(UPVOTE_REDIS_KEY);
		// 存储需要更新的数据
		List<TempInfo> parmes = new ArrayList<TempInfo>();
		for (String key : hkeys) {
			// 主数据
			String hget = cacheServeice.hget(UPVOTE_REDIS_KEY, key);
			// 备份数据
			String kget = cacheServeice.hget(LAST_UPVOTE_REDIS_KEY, key);
			if (!hget.equals(kget)) {
				TempInfo tempInfo = new TempInfo();
				tempInfo.setProjectId(Long.parseLong(key));
				tempInfo.setUpvoteNum(Integer.parseInt(hget));
				// 更新redis数据
				cacheServeice.hset(LAST_UPVOTE_REDIS_KEY, key, hget);
				parmes.add(tempInfo);
				logger.info("-----------开始更新数据:--------------作品ID:" + key + "------------点赞数:" + hget);
			}
		}
		if (parmes != null && parmes.size() > 0) {
			dataService.update("com.easycode.rest.dao.Project.batchUpdateUpvoteNum", parmes);
			long endTime = System.currentTimeMillis();
			logger.info("任务调度结束,执行时间:" + (endTime - startTime) + "ms");
			return;
		}
		long endTime = System.currentTimeMillis();
		logger.info("尚未找到需要更新的数据,任务调度结束,执行时间:" + (endTime - startTime) + "ms");
	}

	@Transactional
	public void modifyViewNum() throws Exception {
		// TODO Auto-generated method stub
		// 更新浏览量
		long startTime = System.currentTimeMillis();
		// 主数据
		Set<String> hkeys = cacheServeice.hkeys(COLLECTION_REDIS_KEY);
		// 存储需要更新的数据
		List<TempInfo> parmes = new ArrayList<TempInfo>();
		for (String key : hkeys) {
			// 主数据
			String hget = cacheServeice.hget(COLLECTION_REDIS_KEY, key);
			// 备份数据
			String kget = cacheServeice.hget(LAST_COLLECTION_REDIS_KEY, key);
			if (!hget.equals(kget)) {
				TempInfo tempInfo = new TempInfo();
				tempInfo.setProjectId(Long.parseLong(key));
				tempInfo.setBrowseNum(Integer.parseInt(hget));
				// 更新redis数据
				cacheServeice.hset(LAST_COLLECTION_REDIS_KEY, key, hget);
				parmes.add(tempInfo);
				logger.info("-----------开始更新数据:--------------作品ID:" + key + "------------点赞数:" + hget);
			}
		}
		if (parmes != null && parmes.size() > 0) {
			dataService.update("com.easycode.rest.dao.Project.updateBrowseNum", parmes);
			long endTime = System.currentTimeMillis();
			logger.info("任务调度结束,执行时间:" + (endTime - startTime) + "ms");
			return;
		}
		long endTime = System.currentTimeMillis();
		logger.info("尚未找到需要更新的数据,任务调度结束,执行时间:" + (endTime - startTime) + "ms");
	}
}
