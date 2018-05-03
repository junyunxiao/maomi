package com.easycode.rest.domain;

import java.io.Serializable;

public class ProjectCategory  implements Serializable{

	private static final long serialVersionUID = -7609036550535059532L;

	private Long projectcategoryid;

    private Long projectid;

    private String category;

    public Long getProjectcategoryid() {
        return projectcategoryid;
    }

    public void setProjectcategoryid(Long projectcategoryid) {
        this.projectcategoryid = projectcategoryid;
    }

    public Long getProjectid() {
        return projectid;
    }

    public void setProjectid(Long projectid) {
        this.projectid = projectid;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category == null ? null : category.trim();
    }
}