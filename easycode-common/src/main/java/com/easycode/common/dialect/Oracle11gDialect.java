package com.easycode.common.dialect;

import org.hibernate.dialect.Oracle10gDialect;

public class Oracle11gDialect extends Oracle10gDialect {
	public String getLimitString(String sql, boolean hasOffset) {
		sql = sql.trim();
		String forUpdateClause = null;
		boolean isForUpdate = false;
		int forUpdateIndex = sql.toLowerCase().lastIndexOf("for update");
		if (forUpdateIndex > -1) {
			forUpdateClause = sql.substring(forUpdateIndex);
			sql = sql.substring(0, forUpdateIndex - 1);
			isForUpdate = true;
		}

		StringBuffer pagingSelect = new StringBuffer(sql.length() + 100);
		pagingSelect.append("select * from ( select row_.*, row_number() over(order by 1) rownum_ from ( ");
		pagingSelect.append(sql);
		if (hasOffset) {
			pagingSelect.append(" ) row_ ) trow_ where trow_.rownum_ <= ? and trow_.rownum_ > ?");
		} else {
			pagingSelect.append(" ) row_ ) trow_ where trow_.rownum_ <= ?");
		}

		if (isForUpdate) {
			pagingSelect.append(" ");
			pagingSelect.append(forUpdateClause);
		}

		return pagingSelect.toString();
	}
}