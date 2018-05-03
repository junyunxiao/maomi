package com.easycode.common.server;

import java.util.List;
import java.util.Map;
import com.easycode.common.domain.Page;



public interface DataService {

	public boolean validate(String dataServiceName);

	public <T> List<T> query(String getData, Object parameter);

	public <T> Page<T> query(String getData, String getDataCount,Object parameter, Page<T> page);

	public <T, V> Map<T, V> query(String getData, String name, Object parameter);

	public <T> T getObject(String getObject, Object parameter);

	public <T> Map<String, T> getMap(String getMap, Object parameter);

	public void insert(String insertData, Object parameter);

	public void insert(String insertData, List<?> parameterContainer);

	public void update(String updateData, Object parameter);
	
	public void delete(String deleteData, Object parameter);
	
	


}
