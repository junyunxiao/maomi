package com.easycode.common.server.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import org.apache.ibatis.mapping.MappedStatement.Builder;
import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.mapping.SqlSource;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSessionFactory;
import org.hibernate.dialect.Dialect;
import org.hibernate.dialect.HSQLDialect;
import org.hibernate.dialect.MySQLDialect;
import org.hibernate.dialect.Oracle10gDialect;
import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.easycode.common.domain.Page;
import com.easycode.common.server.DataService;
import com.easycode.common.utils.DataUtils;
import com.easycode.common.utils.TextUtils;

public class DataServiceMybatis implements DataService {
	private SqlSessionTemplate dataService;
	private SqlSessionFactory sqlSessionFactory;
	private Dialect dialect;

	private static Logger logger = LoggerFactory.getLogger(DataServiceMybatis.class);

	public void initialize() {
		try {
			long exception = System.currentTimeMillis();
			if (this.dialect != null) {
				DataServiceMybatis.OffsetLimitInterceptor offsetLimitInterceptor = new DataServiceMybatis.OffsetLimitInterceptor();
				offsetLimitInterceptor.setDialect(this.dialect);
				this.sqlSessionFactory.getConfiguration().addInterceptor(offsetLimitInterceptor);
			}
			this.dataService = new SqlSessionTemplate(this.sqlSessionFactory);
			System.out.println("DataServiceMybatis服务已启动(" + (System.currentTimeMillis() - exception) + "毫秒)，加载sql("
					+ this.sqlSessionFactory.getConfiguration().getMappedStatementNames().size() + "个)。");
		} catch (Exception arg3) {
			logger.error("DataServiceMybatis服务启动错误：" + arg3.getMessage() + "。");
		}
	}

	public boolean validate(String dataServiceName) {
		return TextUtils.isNotEmpty(dataServiceName)? this.sqlSessionFactory.getConfiguration().hasStatement(dataServiceName): false;
	}

	@Override
	public <T> List<T> query(String getData, Object parameter) {
		long time = System.currentTimeMillis();
		List<T> list = this.dataService.selectList(getData, parameter);
		time = System.currentTimeMillis() - time;
		return list;
	}

	@Override
	public <T> Page<T> query(String getData, String getDataCount, Object parameter, Page<T> page) {
		Map<String, Object> mapParameter = DataUtils.convertToMap(parameter);
		long time = System.currentTimeMillis();
		if (page.getPageRows() > 0) {
			if (TextUtils.isNotEmpty(getDataCount)) {
				page.setRowSum(((Integer) this.dataService.selectOne(getDataCount, mapParameter)).intValue());
			}
			if (page.getRowSum() > 0) {
				int pageCurrent = page.getPageCurrent();
				if (pageCurrent > 0) {
					--pageCurrent;
				}
				page.setRows(this.dataService.selectList(getData, mapParameter,new RowBounds(pageCurrent * page.getPageRows(), page.getRowsCurrent())));
			} else {
				page.setRows(new ArrayList<T>());
			}
		} else {
			page.setRows(this.dataService.selectList(getData, mapParameter));
			page.setRowSum(page.getRows().size());
		}
		time = System.currentTimeMillis() - time;
		System.err.println("sql执行时间:"+time);
		return page;
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T, V> Map<T, V> query(String getData, String name, Object parameter) {
		long time = System.currentTimeMillis();
		Map<String, Object> map = this.dataService.selectMap(getData, parameter, name);
		time = System.currentTimeMillis() - time;
		return (Map<T, V>) map;
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T getObject(String getObject, Object parameter) {
		long time = System.currentTimeMillis();
		Map<String, Object> map =this.dataService.selectOne(getObject, parameter);
		time = System.currentTimeMillis() - time;
		return (T) map;
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> Map<String, T> getMap(String getMap, Object parameter) {
		long time = System.currentTimeMillis();
		Map<String, Object> map = this.dataService.selectOne(getMap, parameter);
		time = System.currentTimeMillis() - time;
		return (Map<String, T>) map;
	}

	@Override
	public void insert(String insertData, Object parameter) {
		this.dataService.insert(insertData, parameter);
	}

	@Override
	public void insert(String insertData, List<?> parameterContainer) {
		if (parameterContainer != null) {
			Iterator<?> arg2 = parameterContainer.iterator();
			if (arg2.hasNext()) {
				Object parameter = arg2.next();
				 this.dataService.insert(insertData, parameter);
			}
		}
	}

	@Override
	public void update(String updateData, Object parameter) {
		this.dataService.update(updateData, parameter);
	}


	@Override
	public void delete(String deleteData, Object parameter) {
		 this.dataService.delete(deleteData, parameter);
	}

	public SqlSessionTemplate getDataService() {
		return dataService;
	}

	public void setDataService(SqlSessionTemplate dataService) {
		this.dataService = dataService;
	}

	public SqlSessionFactory getSqlSessionFactory() {
		return sqlSessionFactory;
	}

	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}

	public Dialect getDialect() {
		return dialect;
	}

	public void setDialect(Dialect dialect) {
		this.dialect = dialect;
	}

	@Intercepts({ @Signature(type = Executor.class, method = "query", args = { MappedStatement.class, Object.class,
			RowBounds.class, ResultHandler.class }) })
	private class OffsetLimitInterceptor implements Interceptor {

		private int MAPPED_STATEMENT_INDEX;
		private int PARAMETER_INDEX;
		private int ROWBOUNDS_INDEX;
		private Dialect dialect;

		private OffsetLimitInterceptor() {
			this.MAPPED_STATEMENT_INDEX = 0;
			this.PARAMETER_INDEX = 1;
			this.ROWBOUNDS_INDEX = 2;
		}

		@Override
		public Object intercept(Invocation invocation) throws Throwable {
			this.processIntercept(invocation.getArgs());
			return invocation.proceed();
		}

		private void processIntercept(Object[] queryArgs) {
			RowBounds rowBounds = (RowBounds) queryArgs[this.ROWBOUNDS_INDEX];
			int offset = rowBounds.getOffset();
			int limit = rowBounds.getLimit();
			if (this.dialect.supportsLimit() && (offset != 0 || limit != Integer.MAX_VALUE)) {
				MappedStatement ms = (MappedStatement) queryArgs[this.MAPPED_STATEMENT_INDEX];
				Object parameter = queryArgs[this.PARAMETER_INDEX];
				boolean symbolable = this.dialect.supportsLimitOffset();
				queryArgs[this.MAPPED_STATEMENT_INDEX] = this.createMappedStatement(ms, symbolable, parameter, offset,
						limit);
				if (symbolable && offset > 0) {
					offset = 0;
				}
				limit = Integer.MAX_VALUE;
				queryArgs[this.ROWBOUNDS_INDEX] = new RowBounds(offset, limit);
			}
		}

		private MappedStatement createMappedStatement(MappedStatement ms, boolean symbolable, Object parameter,
				int offset, int limit) {
			BoundSql boundSql = ms.getBoundSql(parameter);
			String sql = boundSql.getSql().trim();
			ArrayList<ParameterMapping> list = new ArrayList<ParameterMapping>();
			if (boundSql.getParameterMappings() != null) {
				list.addAll(boundSql.getParameterMappings());
			}

			if (symbolable) {
				sql = this.dialect.getLimitString(sql, offset, limit);
			} else {
				sql = this.dialect.getLimitString(sql, 0, limit);
			}

			sql = this.addParameter(list, ms, parameter, offset, limit, sql, symbolable);
			BoundSql newBoundSql = new BoundSql(ms.getConfiguration(), sql, list, boundSql.getParameterObject());
			return this.copyFromMappedStatement(ms,
					new DataServiceMybatis.OffsetLimitInterceptor.BoundSqlSqlSource(newBoundSql));
		}

		private MappedStatement copyFromMappedStatement(MappedStatement ms, SqlSource newSqlSource) {
			Builder builder = new Builder(ms.getConfiguration(), ms.getId(), newSqlSource, ms.getSqlCommandType());
			builder.resource(ms.getResource());
			builder.fetchSize(ms.getFetchSize());
			builder.statementType(ms.getStatementType());
			builder.keyGenerator(ms.getKeyGenerator());
			builder.timeout(ms.getTimeout());
			builder.parameterMap(ms.getParameterMap());
			builder.resultMaps(ms.getResultMaps());
			builder.resultSetType(ms.getResultSetType());
			builder.cache(ms.getCache());
			builder.flushCacheRequired(ms.isFlushCacheRequired());
			builder.useCache(ms.isUseCache());
			return builder.build();
		}

		@SuppressWarnings("unchecked")
		private String addParameter(List<ParameterMapping> parameterMapping, MappedStatement ms, Object parameter,
				int offset, int limit, String sql, boolean symbolable) {
			Map<String, Integer> result;
			if (this.dialect instanceof Oracle10gDialect) {
				if (parameter instanceof Map) {
					result = (Map<String, Integer>) parameter;
					if (symbolable && offset > 0) {
						result.put("offset", Integer.valueOf(offset));
						result.put("limit", Integer.valueOf(offset + limit));
					} else {
						result.put("limit", Integer.valueOf(limit));
					}
				}
				parameterMapping.add((new org.apache.ibatis.mapping.ParameterMapping.Builder(ms.getConfiguration(),
						"limit", Integer.class)).build());
				if (symbolable && offset > 0) {
					parameterMapping.add((new org.apache.ibatis.mapping.ParameterMapping.Builder(ms.getConfiguration(),
							"offset", Integer.class)).build());
				}
			} else if (this.dialect instanceof MySQLDialect) {
				if (parameter instanceof Map) {
					result = (Map<String, Integer>) parameter;
					if (symbolable && offset > 0) {
						result.put("offset", Integer.valueOf(offset));
						result.put("limit", Integer.valueOf(limit));
					} else {
						result.put("limit", Integer.valueOf(limit));
					}
				}

				if (symbolable && offset > 0) {
					parameterMapping.add((new org.apache.ibatis.mapping.ParameterMapping.Builder(ms.getConfiguration(),
							"offset", Integer.class)).build());
				}

				parameterMapping.add((new org.apache.ibatis.mapping.ParameterMapping.Builder(ms.getConfiguration(),
						"limit", Integer.class)).build());
			} else if (this.dialect instanceof HSQLDialect) {
				String result1 = sql;
				if (sql.lastIndexOf("offset ?") > 0) {
					result1 = sql.replace("offset ?", "offset " + offset);
				}
				if (result1.lastIndexOf("limit ?") > 0) {
					result1 = result1.replace("limit ?", "limit " + limit);
				}
				return result1;
			}
			return sql;
		}

		@Override
		public Object plugin(Object target) {
			return Plugin.wrap(target, this);
		}

		@Override
		public void setProperties(Properties properties) {
			// TODO Auto-generated method stub

		}
		
		public void setDialect(Dialect dialect) {
			this.dialect = dialect;
		}



		private class BoundSqlSqlSource implements SqlSource {
			private BoundSql boundSql;

			public BoundSqlSqlSource(BoundSql boundSql) {
				this.boundSql = boundSql;
			}

			@Override
			public BoundSql getBoundSql(Object parameterObject) {
				return this.boundSql;
			}
		}
		
		
	}


}