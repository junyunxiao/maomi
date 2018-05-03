package com.easycode.rest.server;

import java.util.List;
import java.util.Map;
import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.rest.domain.BrowseInfo;
import com.easycode.rest.domain.CollectionInfo;
import com.easycode.rest.domain.PraiseInfo;
import com.easycode.rest.domain.ProjectCategory;
import com.easycode.rest.domain.ProjectDesc;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.WorksInfo;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:作品Server
 * @createTime:2018年1月23日上午11:53:58
 */
public interface WorksServer {

	/**
	 * @description:点赞
	 * @param praiseInfo
	 * @return
	 * @throws Exception
	 */
	long upvote(PraiseInfo praiseInfo) throws Exception;

	/**
	 * @description:取消点赞
	 * @param praiseInfo
	 * @return
	 * @throws Exception
	 */
	long cancelUpvote(PraiseInfo praiseInfo) throws Exception;

	/**
	 * @description:项目发布
	 * @param pDesc
	 * @throws Exception
	 */
	void release(ProjectInfo projectInfo, ProjectDesc pDesc,List<ProjectCategory> types) throws Exception;
	
	/**
	 * 作品编辑
	 * @param praiseInfo
	 * @param pDesc
	 * @param types
	 * @throws Exception
	 */
	void reviseProject(ProjectInfo praiseInfo, ProjectDesc pDesc,List<ProjectCategory> types) throws Exception;

	/**
	 * @description:热门作品
	 * @param parameter
	 * @return
	 * @throws Exception
	 */
	Page<WorksInfo> popular(Page<WorksInfo> page) throws Exception;

	/**
	 * @description:精选作品
	 * @param parameter
	 * @return
	 * @throws Exception
	 */
	Page<WorksInfo> featured(Page<WorksInfo> page) throws Exception;

	/**
	 * @description:按照作品分类查询作品信息
	 * @param parameter
	 * @return
	 * @throws Exception
	 */
	Page<WorksInfo> queryProjectSort(Map<String, Object> parameter, Page<WorksInfo> page) throws Exception;

	/**
	 * 查看详情
	 * 
	 * @param projectId
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	WorksInfo queryDetail(long projectId) throws Exception;

	/**
	 * 作品收藏
	 * 
	 * @param collectionInfo
	 * @return
	 * @throws Exception
	 */
	long enshrine(CollectionInfo collectionInfo) throws Exception;

	/**
	 * 取消收藏
	 * 
	 * @param collectionInfo
	 * @return
	 * @throws Exception
	 */
	long cancelEnshrine(CollectionInfo collectionInfo) throws Exception;

	/**
	 * 作品浏览
	 * 
	 * @param browseInfo
	 * @return
	 * @throws Exception
	 */
	TradeMessages<String> browse(BrowseInfo browseInfo) throws Exception;

	/**
	 * 作品数据修改
	 * @param projectId
	 * @param projectUrl
	 * @param resourcesUrl
	 * @throws Exception
	 */
	void uodateProject(ProjectInfo projectInfo) throws Exception;
	
	void editProject(ProjectInfo info,ProjectDesc desc,List<ProjectCategory> types,Long projectId) throws Exception;
	
	/**
	 *查询状态
	 * @param projectId
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> queryState(Long projectId,Long userId) throws Exception;

	void delProject(Long projectId) throws Exception;
}
