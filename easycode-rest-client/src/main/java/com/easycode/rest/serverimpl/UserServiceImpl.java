package com.easycode.rest.serverimpl;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.easycode.common.domain.Page;
import com.easycode.common.message.TradeMessages;
import com.easycode.common.server.DataService;
import com.easycode.common.utils.PasswordUtils;
import com.easycode.rest.domain.ProjectInfo;
import com.easycode.rest.domain.User;
import com.easycode.rest.domain.WorksInfo;
import com.easycode.rest.server.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private DataService dataService;
	
	@Override
	public TradeMessages<User> login(User user) throws Exception {
		TradeMessages<User> tradeMessages = new TradeMessages<User>();
		try {
			List<User> userList = dataService.query("com.easycode.rest.dao.User.userLogin", user.getUserName());
			if (userList != null && userList.size() > 0) {
				User userData = userList.get(0);
				if (PasswordUtils.encode(user.getUserPwd(), "SHA256").equals(userData.getUserPwd())) {
					userData.setUserPwd(user.getUserPwd());
					tradeMessages.setData(userData);
					tradeMessages.setResultCode("1");
					tradeMessages.setResultMessage("登录成功");
				} else {
					tradeMessages.setData(null);
					tradeMessages.setResultCode("-1");
					tradeMessages.setResultMessage("密码错误");
				}
			} else {
				tradeMessages.setData(null);
				tradeMessages.setResultCode("-2");
				tradeMessages.setResultMessage("用户名不存在");
			}
		} catch (Exception e) {
			e.printStackTrace();
			tradeMessages.setData(null);
			tradeMessages.setResultCode("0");
			tradeMessages.setResultMessage("系统异常");
		}
		return tradeMessages;
	}

	@Transactional
	@Override
	public TradeMessages<String> register(User user) throws Exception {
		TradeMessages<String> messages = new TradeMessages<String>();
		try {
			user.setUserId(System.currentTimeMillis());
			user.setUserPwd(PasswordUtils.encode(user.getUserPwd(), "SHA256"));
			dataService.insert("com.easycode.rest.dao.User.insertSelective", user);
			messages.setData(null);
			messages.setResultCode("1");
			messages.setResultMessage("注册成功");
		} catch (Exception e) {
			e.printStackTrace();
			messages.setData(null);
			messages.setResultCode("0");
			messages.setResultMessage("系统出现异常，注册失败");
		}
		return messages;
	}

	@Transactional
	@Override
	public TradeMessages<String> updateUserInfo(User user) throws Exception {
		TradeMessages<String> messages = new TradeMessages<String>();
		try {
			user.setUserPwd(PasswordUtils.encode(user.getUserPwd(), "SHA256"));
			dataService.insert("com.easycode.rest.dao.User.updateByPrimaryKeySelective", user);
			messages.setData(null);
			messages.setResultCode("1");
			messages.setResultMessage("用户信息修改成功");
		} catch (Exception e) {
			messages.setData(null);
			messages.setResultCode("0");
			messages.setResultMessage("系统出现异常，用户信息修改失败");
		}
		return messages;
	}

	@Override
	public TradeMessages<String> userCheck(String userName) throws Exception {
		TradeMessages<String> messages = new TradeMessages<String>();
		try {
			List<Long> userList = dataService.query("com.easycode.rest.dao.User.userChick", userName);
			if (userList != null && userList.size() > 0) {
				messages.setData(null);
				messages.setResultCode("-1");
				messages.setResultMessage("该用户已存在");
			} else {
				messages.setData(null);
				messages.setResultCode("1");
				messages.setResultMessage("用户名可以使用");
			}
		} catch (Exception e) {
			messages.setData(null);
			messages.setResultCode("0");
			messages.setResultMessage("系统异常");
		}
		return messages;
	}

	@Transactional
	@Override
	public void saveProject(ProjectInfo projectInfo) throws Exception {
		dataService.insert("com.easycode.rest.dao.Project.insertSelective", projectInfo);
	}

	@Override
	public Page<WorksInfo> queryAlreadyCollected(Map<String, Object> parameter, Page<WorksInfo> page) throws Exception {
		Page<WorksInfo> query = dataService.query("com.easycode.rest.dao.User.queryAlreadyCollected","com.easycode.rest.dao.User.queryAlreadyCollectedCount", parameter, page);
		return query;
	}

	@Override
	public Page<WorksInfo> queryAlreadyUpvote(Map<String, Object> parameter, Page<WorksInfo> page) throws Exception {
		Page<WorksInfo> query = dataService.query("com.easycode.rest.dao.User.queryAlreadyUpvote","com.easycode.rest.dao.User.queryAlreadyUpvoteCount", parameter, page);
		return query;
	}

	@Override
	public Page<WorksInfo> queryAnnounce(Map<String, Object> parameter, Page<WorksInfo> page) throws Exception {
		Page<WorksInfo> query = dataService.query("com.easycode.rest.dao.User.queryAnnounce",
				"com.easycode.rest.dao.User.queryAnnounceCount", parameter, page);
		return query;
	}
}
