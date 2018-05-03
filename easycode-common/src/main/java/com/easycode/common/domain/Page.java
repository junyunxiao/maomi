package com.easycode.common.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Page<T> implements Serializable {
	private static final long serialVersionUID = 1L;
	private int total = 1;
	private int pageCurrent = 1;
	private int rowSum;
	private int pageRows = 20;
	private int rowsCurrent;
	private int pageFrom = 1;
	private int pageTo = 1;
	private int pageGroupBy = 10;
	private List<T> rows;

	public Page() {
	}

	public Page(Map<String, Object> parameter) {
		String pageGroupBy;
		if (parameter.containsKey("pageRows")) {
			pageGroupBy = (String) parameter.get("pageRows");
			if (!"".equals(pageGroupBy)) {
				this.setPageRows(Integer.parseInt(pageGroupBy));
			}
		}

		if (parameter.containsKey("pageCurrent")) {
			pageGroupBy = (String) parameter.get("pageCurrent");
			if (!"".equals(pageGroupBy)) {
				this.setPageCurrent(Integer.parseInt(pageGroupBy));
			}
		}

		if (parameter.containsKey("rowSum")) {
			pageGroupBy = (String) parameter.get("rowSum");
			if (!"".equals(pageGroupBy)) {
				this.setRowSum(Integer.parseInt(pageGroupBy));
			}
		}

		if (parameter.containsKey("pageGroupBy")) {
			pageGroupBy = (String) parameter.get("pageGroupBy");
			if (!"".equals(pageGroupBy)) {
				this.setPageGroupBy(Integer.parseInt("pageGroupBy"));
			}
		}

	}

	public void setRowSum(int rowSum) {
		this.rowSum = rowSum;
		if (rowSum != 0) {
			if (this.pageRows == 0) {
				this.total = 1;
			} else {
				this.total = rowSum % this.pageRows == 0 ? rowSum / this.pageRows : rowSum / this.pageRows + 1;
				if (this.pageCurrent < 1) {
					this.pageCurrent = 1;
				} else if (this.pageCurrent > this.total) {
					this.pageCurrent = this.total;
				}
			}
		} else {
			this.total = 1;
			this.pageCurrent = 1;
		}

		if (this.pageRows == 0) {
			this.rowsCurrent = rowSum;
		} else if (this.pageCurrent >= this.total) {
			this.rowsCurrent = rowSum % this.pageRows == 0 ? this.pageRows : rowSum % this.pageRows;
		} else {
			this.rowsCurrent = this.pageRows;
		}

		if (this.pageCurrent % this.pageGroupBy == 0) {
			this.pageFrom = this.pageCurrent - this.pageGroupBy + 1;
		} else {
			this.pageFrom = this.pageCurrent - this.pageCurrent % this.pageGroupBy + 1;
		}

		if (this.pageFrom < 1) {
			this.pageFrom = 1;
		}

		if (this.pageFrom + this.pageGroupBy - 1 > this.total) {
			this.pageTo = this.total;
		} else {
			this.pageTo = this.pageFrom + this.pageGroupBy - 1;
		}

	}

	public void setPageRows(int pageRows) {
		if (pageRows >= 0) {
			this.pageRows = pageRows;
		}
	}

	public Page<T> addData(T data) {
		if (data != null && this.rows == null) {
			this.rows = new ArrayList<T>();
		}

		this.rows.add(data);
		return this;
	}

	public int getTotal() {
		return this.total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getPageCurrent() {
		return this.pageCurrent;
	}

	public void setPageCurrent(int pageCurrent) {
		this.pageCurrent = pageCurrent;
	}

	public int getRowsCurrent() {
		return this.rowsCurrent;
	}

	public void setRowsCurrent(int rowsCurrent) {
		this.rowsCurrent = rowsCurrent;
	}

	public List<T> getRows() {
		return this.rows;
	}

	public void setRows(List<T> rows) {
		this.rows = rows;
	}

	public int getRowSum() {
		return this.rowSum;
	}

	public int getPageRows() {
		return this.pageRows;
	}

	public int getPageFrom() {
		return this.pageFrom;
	}

	public void setPageFrom(int pageFrom) {
		this.pageFrom = pageFrom;
	}

	public int getPageTo() {
		return this.pageTo;
	}

	public void setPageTo(int pageTo) {
		this.pageTo = pageTo;
	}

	public int getPageGroupBy() {
		return this.pageGroupBy;
	}

	public void setPageGroupBy(int pageGroupBy) {
		this.pageGroupBy = pageGroupBy;
	}
}