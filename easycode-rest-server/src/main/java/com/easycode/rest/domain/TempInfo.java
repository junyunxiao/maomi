package com.easycode.rest.domain;

import java.io.Serializable;

public class TempInfo implements Serializable{

	private static final long serialVersionUID = 573222941083993383L;
	
	private long projectId;// 作品ID
	private int upvoteNum;
	private int browseNum;
	public long getProjectId() {
		return projectId;
	}
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
	public int getUpvoteNum() {
		return upvoteNum;
	}
	public void setUpvoteNum(int upvoteNum) {
		this.upvoteNum = upvoteNum;
	}
	public int getBrowseNum() {
		return browseNum;
	}
	public void setBrowseNum(int browseNum) {
		this.browseNum = browseNum;
	}
	
}
