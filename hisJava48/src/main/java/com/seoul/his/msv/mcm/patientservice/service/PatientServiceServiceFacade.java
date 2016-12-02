package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.service
 *    |_ PatientServiceServiceFacade.java
 * </pre>
 *
 * @date : 2016. 11. 30. 오후 5:44:11
 * @version :
 * @author : Minhyeog
 */

public interface PatientServiceServiceFacade {
	List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap);
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
	List<AttentionalCodeBean> findAttentionalCodeList(Map<String, String> argsMap);
	List<AdrBean> findAdrList(Map<String, String> argsMap);
	void batchAdrProcess(List<AdrBean> adrList);

}
