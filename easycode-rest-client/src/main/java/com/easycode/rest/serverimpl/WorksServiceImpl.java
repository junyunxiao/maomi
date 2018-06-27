package com.easycode.rest.serverimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.server.CacheServeice;
import com.easycode.common.server.DataService;
import com.easycode.rest.domain.BrowseInfo;
import com.easycode.rest.domain.CollectionInfo;
import com.easycode.rest.domain.PraiseInfo;
import com.easycode.rest.domain.ProjectCategory;
import com.easycode.rest.domain.ProjectDesc;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.WorksInfo;
import com.easycode.rest.server.WorksServer;

@Service("worksService")
public class WorksServiceImpl implements WorksServer {

	@Autowired
	private DataService dataService;

	@Autowired
	private CacheServeice cacheServeice;

	@Value("${INDEX_QUERYHOT_REDIS_KEY}")
	private String INDEX_QUERYHOT_REDIS_KEY;

	@Value("${UPVOTE_REDIS_KEY}")
	private String UPVOTE_REDIS_KEY;

	@Value("${COLLECTION_REDIS_KEY}")
	private String COLLECTION_REDIS_KEY;

	@Transactional
	@Override
	public void release(ProjectInfo projectInfo, ProjectDesc pDesc,List<ProjectCategory> types) throws Exception {
		dataService.insert("com.easycode.rest.dao.Project.insertSelective", projectInfo);
		dataService.insert("com.easycode.rest.dao.Project.insertSelectiveDesc", pDesc);
		//插入作品类型数据
		for (ProjectCategory projectCategory : types) {
			projectCategory.setProjectcategoryid(System.currentTimeMillis());
			dataService.insert("com.easycode.rest.dao.ProjectCategory.insertSelective", projectCategory);
			 
		}
	}

	// 热门
	@Override
	public Page<WorksInfo> popular(Page<WorksInfo> page) throws Exception {
		Page<WorksInfo> query = dataService.query("com.easycode.rest.dao.Works.queryHot","com.easycode.rest.dao.Works.queryHotCount", null, page);
		return query;
	}

	// 精选
	@Override
	public Page<WorksInfo> featured(Page<WorksInfo> page) throws Exception {
		Page<WorksInfo> query = dataService.query("com.easycode.rest.dao.Works.queryChosen",
				"com.easycode.rest.dao.Works.queryChosenCount", null, page);
		return query;
	}

	// 分类查询
	@Override
	public Page<WorksInfo> queryProjectSort(Map<String, Object> parameter, Page<WorksInfo> page) throws Exception {
		Page<WorksInfo> query = dataService.query("com.easycode.rest.dao.Works.queryFind",
				"com.easycode.rest.dao.Works.queryFindCount", parameter, page);
		return query;
	}

	@Override
	public WorksInfo queryDetail(long projectId) throws Exception {
		WorksInfo worksInfo = (WorksInfo) dataService.query("com.easycode.rest.dao.Works.queryDetail", projectId).get(0);
		return worksInfo;
	}

	@Transactional
	@Override
	public long upvote(PraiseInfo praiseInfo) throws Exception {
		// 将点赞数据存入缓存
		long hincrBy = 0;
		try {
			hincrBy = cacheServeice.hincrBy(UPVOTE_REDIS_KEY, String.valueOf(praiseInfo.getProjectId()), 1);
			if(hincrBy<=1) {
				int browse=dataService.getObject("com.easycode.rest.dao.Praise.censusPraise", praiseInfo.getProjectId());
				hincrBy = cacheServeice.hincrBy(UPVOTE_REDIS_KEY, String.valueOf(praiseInfo.getProjectId()),browse);
			}
			// 将点赞数据写入缓存
			cacheServeice.hset(UPVOTE_REDIS_KEY + String.valueOf(praiseInfo.getProjectId()),String.valueOf(praiseInfo.getUserId()), String.valueOf(praiseInfo.getUserId()));
			// 将点赞数据插入数据库
			praiseInfo.setPraiseId(System.currentTimeMillis());
			dataService.insert("com.easycode.rest.dao.Praise.insertSelective", praiseInfo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return hincrBy;
	}

	// 取消点赞
	@Transactional
	@Override
	public long cancelUpvote(PraiseInfo praiseInfo) throws Exception {
		long hincrBy = 0;
		try {
			hincrBy = cacheServeice.hincrBy(UPVOTE_REDIS_KEY, String.valueOf(praiseInfo.getProjectId()), -1);
			// 清空缓存
			cacheServeice.hdel(UPVOTE_REDIS_KEY + String.valueOf(praiseInfo.getProjectId()),
					String.valueOf(praiseInfo.getUserId()));
			// 通过userID和作品ID删除点赞记录
			dataService.delete("com.easycode.rest.dao.Praise.deleteByPrimaryKey", praiseInfo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return hincrBy;
	}

	// 收藏
	@Transactional
	@Override
	public long enshrine(CollectionInfo collectionInfo) throws Exception {
		// 点击收藏 ->存入缓存->存入数据库
		long hincrBy = 0;
		try {
			// 利用redis自增原理实现收藏数统计
			hincrBy = cacheServeice.hincrBy(COLLECTION_REDIS_KEY, String.valueOf(collectionInfo.getProjectId()), 1);
			// 将收藏记录存入缓存
			cacheServeice.hset(COLLECTION_REDIS_KEY + String.valueOf(collectionInfo.getProjectId()),
					String.valueOf(collectionInfo.getUserId()), String.valueOf(collectionInfo.getUserId()));
			// 将数据写入数据库
			collectionInfo.setCollectionId(System.currentTimeMillis());
			dataService.insert("com.easycode.rest.dao.Collection.insertSelective", collectionInfo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return hincrBy;
	}

	// 取消收藏
	@Transactional
	@Override
	public long cancelEnshrine(CollectionInfo collectionInfo) throws Exception {
		long hincrBy = 0;
		try {
			// 利用redis自增原理实现收藏数统计
			hincrBy = cacheServeice.hincrBy(COLLECTION_REDIS_KEY, String.valueOf(collectionInfo.getProjectId()), -1);
			// 将收藏记录清除
			cacheServeice.hdel(COLLECTION_REDIS_KEY + String.valueOf(collectionInfo.getProjectId()),
					String.valueOf(collectionInfo.getUserId()));
			// 通过作品ID及用户ID删除收藏记录
			dataService.delete("com.easycode.rest.dao.Collection.deleteByPrimaryKey", collectionInfo);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return hincrBy;
	}
	@Transactional
	@Override
	public TradeMessages<String> browse(BrowseInfo browseInfo) throws Exception {

		TradeMessages<String> messages = new TradeMessages<String>();

		// 判断是否已经浏览过
		boolean hexists = cacheServeice.hexists(browseInfo.getIpaddress(), String.valueOf(browseInfo.getProjectid()));
		if (hexists) {
			messages.setData(cacheServeice.hget(COLLECTION_REDIS_KEY, String.valueOf(browseInfo.getProjectid())));
			messages.setResultCode("2");
			messages.setResultMessage("您已浏览过该作品");
			return messages;
		}else {
			//记录点赞了多少次
			long hb = cacheServeice.hincrBy(COLLECTION_REDIS_KEY, String.valueOf(browseInfo.getProjectid()), 1);
			if(hb<=1) {
				int browse=dataService.getObject("com.easycode.rest.dao.Browse.censusBrowse", browseInfo.getProjectid());
				hb = cacheServeice.hincrBy(COLLECTION_REDIS_KEY, String.valueOf(browseInfo.getProjectid()), browse);
			}
			//
			//long hincrBy = cacheServeice.hincrBy(browseInfo.getIpaddress(), String.valueOf(browseInfo.getProjectid()), 1);
			//存储地址,避免数据重复
			cacheServeice.hset(browseInfo.getIpaddress(), String.valueOf(browseInfo.getProjectid()), "1");
			browseInfo.setBrowseinfoid(System.currentTimeMillis());
			dataService.insert("com.easycode.rest.dao.Browse.insertSelective", browseInfo);
			messages.setData(String.valueOf(hb));
			messages.setResultCode("1");
			messages.setResultMessage("作品浏览成功，浏览数+1");
			return messages;
		}
		
	}

	@Transactional
	@Override
	public void uodateProject(ProjectInfo projectInfo) throws Exception {
		//更新数据库数据
		dataService.update("com.easycode.rest.dao.Project.updateByPrimaryKeySelective", projectInfo);
		
	}

	@Override
	public Map<String, Object> queryState(Long projectId, Long userId) throws Exception {
		//是否已点赞
		String isUpvote = cacheServeice.hget(UPVOTE_REDIS_KEY + String.valueOf(projectId),String.valueOf(userId));
		//是否已收藏
		String isCollect = cacheServeice.hget(COLLECTION_REDIS_KEY + String.valueOf(projectId),String.valueOf(userId));
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("isUpvote", isUpvote != null && isUpvote.length() > 0?true:false);
		map.put("isCollect", isCollect != null && isCollect.length() > 0?true:false);
/*		logger.info("=========判断是否已点赞，结果为："+map.get("isUpvote")+"========== 作品ID："+projectId+"用户id"+userId);
		logger.info("=========判断是否已收藏，结果为："+map.get("isCollect")+"========== 作品ID："+projectId+"用户id"+userId);*/
		return map;
	}
	
	@Transactional
	@Override
	public void reviseProject(ProjectInfo projectInfo, ProjectDesc pDesc, List<ProjectCategory> types) throws Exception {
		// TODO Auto-generated method stub
		dataService.update("com.easycode.rest.dao.Project.updateByPrimaryKeySelective", projectInfo);
		dataService.insert("com.easycode.rest.dao.Project.insertSelectiveDesc", pDesc);
		//插入作品类型数据
		for (ProjectCategory projectCategory : types) {
			projectCategory.setProjectcategoryid(System.currentTimeMillis());
			dataService.insert("com.easycode.rest.dao.ProjectCategory.insertSelective", projectCategory);
		}
	}
	@Transactional
	@Override
	public void delProject(Long projectId) throws Exception {
		// TODO Auto-generated method stub
		//删除作品信息
		dataService.delete("com.easycode.rest.dao.Project.deleteProjectByPrimaryKey", projectId);
		//删除作品描述信息
		dataService.delete("com.easycode.rest.dao.Project.deleteDescByPrimaryKey", projectId);
	}
	
	@Transactional
	@Override
	public void editProject(ProjectInfo info, ProjectDesc desc,List<ProjectCategory> types,Long projectId) throws Exception {
		// TODO Auto-generated method stub
		//更新作品表数据
		dataService.update("com.easycode.rest.dao.Project.updateByPrimaryKeySelective", info);
		//更新作品描述
		dataService.update("com.easycode.rest.dao.Project.updateDescByProjectId", desc);
		//更新作品类型
		//删除作品类型然后插入数据
		dataService.delete("com.easycode.rest.dao.ProjectCategory.deleteByProjectId",projectId);
		for (ProjectCategory projectCategory : types) {
			projectCategory.setProjectcategoryid(System.currentTimeMillis());
			dataService.insert("com.easycode.rest.dao.ProjectCategory.insertSelective", projectCategory);
		}
	}
	
}
