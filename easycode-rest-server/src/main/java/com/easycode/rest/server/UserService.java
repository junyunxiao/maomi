package com.easycode.rest.server;

import java.util.Map;

import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.domain.WorksInfo;

/**
 * @author 萧竣匀
 * @version:1.0
 * @description:
 * @createTime:2017年12月31日下午10:36:41
 */
public interface UserService {

	/**
	 * @description:用户登录
	 * @param parameter
	 *            userName:用户名 password：密码 userType:用户类型 0：管理员 0：系统管理员 1：老师 2：学生
	 *            3：家长
	 * @return
	 * @throws Exception
	 */
	TradeMessages<User> login(User user) throws Exception;

	/**
	 * @description:用户注册
	 * @param user
	 * @return
	 * @throws Exception
	 */
	TradeMessages<String> register(User user) throws Exception;

	/**
	 * @description:用户信息修改
	 * @param user
	 * @return
	 * @throws Exception
	 */
	TradeMessages<String> updateUserInfo(User user) throws Exception;

	/**
	 * @description:保存项目
	 * @param ：
	 *            fileContent 项目字节数组 extName 扩展名 user 用户信息
	 * @return
	 * @throws Exception
	 */

	void saveProject(ProjectInfo projectInfo) throws Exception;



	/**
	 * 检测用户名是否存在
	 * 
	 * @param userName
	 * @return
	 * @throws Exception
	 */
	TradeMessages<String> userCheck(String userName) throws Exception;

	
	/**
	 * @description:查询某用户已收藏的作品
	 * @return
	 * @throws Exception
	 */
	Page<WorksInfo> queryAlreadyCollected(Map<String, Object> map, Page<WorksInfo> page) throws Exception;

	/**
	 * @description:查询某用户已点赞的作品
	 * @param map
	 * @param page
	 * @return
	 * @throws Exception
	 */
	Page<WorksInfo> queryAlreadyUpvote(Map<String, Object> map, Page<WorksInfo> page) throws Exception;

	/**
	 * @description:查询某用户已已发布/未发布的作品信息
	 * @param map
	 * @param page
	 * @return
	 * @throws Exception
	 */
	Page<WorksInfo> queryAnnounce(Map<String, Object> map, Page<WorksInfo> page) throws Exception;

}
