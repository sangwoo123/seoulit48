    package com.seoul.his.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;

public interface InoutWorkTimeDAO {

	List<InoutWorkTimeBean> selectInoutWorkTimeList(Map<String, String> argsMap);

	void insertInoutWorkTime(InoutWorkTimeBean inoutWorkTimeBean);

	void updateInoutWorkTime(InoutWorkTimeBean inoutWorkTimeBean);

}
