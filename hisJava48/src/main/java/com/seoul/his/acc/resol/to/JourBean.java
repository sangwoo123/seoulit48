package com.seoul.his.acc.resol.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsJour")
public class JourBean extends BaseBean{
    private String  seq      ,   //����
                    creDebDiv,  //��������
                    debAmt   ,  //�����ݾ�
                    creAmt   ,  //�뺯�ݾ�
                    taxDiv   ,  //��������
                    acntCd   ,  //���������ڵ�
                    assiSubCd,  //���������ڵ�
                    accPrid  ,  //ȸ����
                    resolNo  ,  //���ǹ�ȣ
                    slipNo   ,  //��ǥ��ȣ
                    acntNm   ,  //�������� ��
                    assiSubNm,  //�������� ��
                    bimokCd  ,  //������ �ڵ�
                    closYb	 ;  //��꿩��
}
