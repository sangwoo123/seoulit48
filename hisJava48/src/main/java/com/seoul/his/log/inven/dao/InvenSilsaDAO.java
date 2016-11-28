package com.seoul.his.log.inven.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inven.to.InvenSilsaBean;
import com.seoul.his.log.inven.to.InvenSilsaDtlInfoBean;




/**
 * @Package  com.seoul.his.log.inven.dao
 * @Class    InvenSilsaDAO.java
 * @Create   2016. 5. 29.
 * @Author   Chun
 * @Description
 *
 * @LastUpdated
 */

public interface InvenSilsaDAO {
    //재고실사 조회
	List<InvenSilsaBean> selectInvenSilsaList(Map<String, String> argsMap);
	//재고실사 일괄처리
	void insertInvenSilsaList(InvenSilsaBean invenSilsaBean);
	void updateInvenSilsaList(InvenSilsaBean invenSilsaBean);
	void deleteInvenSilsaList(InvenSilsaBean invenSilsaBean);
    //재고실사 상세 일괄처리
	void insertInvenSilsaDtlInfoList(InvenSilsaDtlInfoBean invenSilsaDetailBean);
	void updateInvenSilsaDtlInfoList(InvenSilsaDtlInfoBean invenSilsaDetailBean);
	void deleteInvenSilsaDtlInfoList(InvenSilsaDtlInfoBean invenSilsaDetailBean);
    void adjustPstInven(InvenSilsaDtlInfoBean invenSilsaDtlInfoBean);

}

