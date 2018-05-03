package com.easycode.rest.serverimpl;

import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.easycode.common.server.CacheServeice;
import com.easycode.common.server.DataService;
import com.easycode.common.utils.JSONUtils;
import com.easycode.rest.domain.CategoryInfo;
import com.easycode.rest.server.CategoryServer;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service("categoryServer")
public class CategoryServiceImpl implements CategoryServer {

	@Autowired
	private DataService dataService;

	@Autowired
	private CacheServeice cacheServeice;

	@Value("${QUERY_CATEGROY_REDIS_KEY}")
	private String QUERY_CATEGROY_REDIS_KEY;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public List<CategoryInfo> queryCategroy() throws Exception {
		// 取缓存
		try {
			String result = cacheServeice.hget(QUERY_CATEGROY_REDIS_KEY, "categorys");
			if (!StringUtils.isBlank(result)) {
				List<CategoryInfo> fromJSON = JSONUtils.fromJSON(result, new TypeToken<List<CategoryInfo>>(){}.getType());
				logger.info("=========作品分类查询命中缓存==========");
				return fromJSON;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		List<CategoryInfo> categorys = dataService.query("com.easycode.rest.dao.Category.selectByPrimaryKey", null);
		// 存缓存
		try {
			cacheServeice.hset(QUERY_CATEGROY_REDIS_KEY, "categorys", JSONUtils.toJSON(categorys));
			logger.info("=========作品分类查询已加入缓存==========");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return categorys;
	}

}
