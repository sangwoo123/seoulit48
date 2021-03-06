﻿(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("SSC_PackageForm");
                this.set_classname("SSC_PackageForm");
                this.set_titletext("종합검진 패키지 관리폼");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPckList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findPckList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPck=dsPck</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findPckInspList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findPckInspList.do</Col><Col id=\"outData\">dsPckInsp=dsScct</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findDetailsCheckupList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findDetailsCheckupList.do</Col><Col id=\"outData\">dsDtcu=dsDtcu</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">batchPckProcess</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchPckProcess.do</Col><Col id=\"inData\">dsPck=dsPck:U dsScct=dsPckInsp:U</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"outData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row><Row><Col id=\"code\">SC049</Col><Col id=\"dsName\">dsInspDivCd</Col></Row><Row><Col id=\"code\">SC035</Col><Col id=\"dsName\">dsOcsDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDtcu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlInspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlInspNm\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"runYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPckInsp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInspDivCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOcsDivCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRunYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">실행</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"value\">미실행</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.32%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.49%", "3", null, "45", "71.83%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 검사패키지 관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("pckGrid", "absolute", "2.24%", "111", null, "586", "58.8%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPck");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.style.set_font("돋움,8,antialias");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"152\"/><Column size=\"89\"/><Column size=\"41\"/><Column size=\"80\"/><Column size=\"43\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"종합검진 패키지 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"패키지명\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진구분\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성별\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"사용\"/></Band><Band id=\"body\"><Cell style=\"align:center;background2:#eeeeeeff;\" text=\"bind:pckCd\"/><Cell col=\"1\" style=\"align:center;background2:#eeeeeeff;\" text=\"bind:pckNm\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center;background2:#eeeeeeff;\" text=\"bind:inspDivCd\" combodataset=\"dsInspDivCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;background2:#eeeeeeff;\" text=\"bind:genderCd\" combodataset=\"dsGenderCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background: ;background2:#eeeeeeff;\" text=\"bind:amt\"/><Cell col=\"5\" style=\"align:center;background2:#eeeeeeff;\" text=\"bind:useYn\" combodataset=\"dsUseYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("pckCdEd", "absolute", "9.68%", "65", null, "27", "81.6%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.16%", "65", null, "27", "90.8%", null, this);
            obj.set_taborder("3");
            obj.set_text("패키지코드");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "19.12%", "65", null, "27", "73.84%", null, this);
            obj.set_taborder("4");
            obj.set_text("패키지명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("pckNmEd", "absolute", "26.64%", "65", null, "27", "61.68%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("pckSearchBtn", "absolute", "38.72%", "65", null, "27", "58.72%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "42.16%", "71", null, "322", "2.32%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsPckInsp");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("antialias 8 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"200\"/><Column size=\"76\"/><Column size=\"194\"/><Column size=\"67\"/><Column size=\"86\"/><Column size=\"95\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"8\" text=\"패키지 구성 검사 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"처방코드\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"처방명\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"OCS구분\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"결과부서\"/><Cell row=\"1\" col=\"6\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/><Cell row=\"1\" col=\"7\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"사용\"/></Band><Band id=\"body\"><Cell style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:inspCd\"/><Cell col=\"1\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:inspNm\"/><Cell col=\"2\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:ocsCd\"/><Cell col=\"3\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:ocsNm\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:ocsDivCd\" combodataset=\"dsOcsDivCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:rsltDeptNm\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:amt\"/><Cell col=\"7\" style=\"align:center;background:#f6f6f6ff;background2:#eeeeeeff;\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("dtInspGrid", "absolute", "42.16%", "400", null, "297", "2.32%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsDtcu");
            obj.set_autofittype("col");
            obj.style.set_background("transparent");
            obj.style.set_font("antialias 8 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"352\"/><Column size=\"109\"/><Column size=\"112\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"세부검사 항목\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사항목코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검  사  항  목  명\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성    별\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"실행여부\"/></Band><Band id=\"body\"><Cell style=\"background:whitesmoke;background2:#eeeeeeff;\" text=\"bind:dtInspCd\"/><Cell col=\"1\" style=\"background:whitesmoke;background2:#eeeeeeff;\" text=\"bind:dtInspNm\"/><Cell col=\"2\" displaytype=\"combo\" style=\"background:whitesmoke;background2:#eeeeeeff;\" text=\"bind:genderCd\" combodataset=\"dsGenderCd\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" style=\"background:whitesmoke;background2:#eeeeeeff;\" text=\"bind:runYn\" combodataset=\"dsRunYN\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "80.48%", "704", "50", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "93.68%", "704", "50", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("modBtn", "absolute", "84.88%", "704", "50", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "89.28%", "704", "50", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_PackageForm");
            		p.set_titletext("종합검진 패키지 관리폼");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_PackgeForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SSC_PackgeForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SSC_PackgeForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 패키지관리                                                *
        *                                                                               *
        * @Path		    scripts-commonScript                   	                        *
        * @Description 											   	*
        * @Author	    박상우					                                		*
        * 									                                            *
        * Created on 2016. 12. 01.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        // 화면변수
        var mainGrid ;
        var pckCd ;

        
        // 코드바인드 및 전체조회
        this.SSC_PackageForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.pckSearchBtn_onclick(null,null);
        }

        
        // 조회버튼
        this.pckSearchBtn_onclick = function(obj,e)
        {
        	var pckCd = this.pckCdEd.value;
        	var pckNm = this.pckNmEd.value;
        	var argument = 'pckCd='+pckCd+' pckNm='+pckNm;
        	var row = this.dsService.findRow('serviceID' , "findPckList");
        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findPckList",false);
        	
        	this.addBtn.set_enable(false);
        	this.modBtn.set_enable(false);
        	this.delBtn.set_enable(false);
        	this.saveBtn.set_enable(false);

        }

        //  패키지 검사 조회
        this.dsPck_onrowposchanged=function(obj,e)
        {
        	if(obj != null)
        	{
        		pckCd = obj.getColumn(e.newrow, "pckCd").trim();
        	}
        	var argument = 'pckCd='+pckCd;
        	
        	var row = this.dsService.findRow('serviceID' , "findPckInspList");
        	this.dsService.setColumn(row, "argument", argument);

        	this.gfnService("findPckInspList",false);
        	
        }

        
        //  검사별 세부검사 조회
        this.dsPckInsp_onrowposchanged=function(obj,e)
        {
        	var argument = 'inspCd='+obj.getColumn(e.newrow , "inspCd");
        	var row = this.dsService.findRow('serviceID' , "findDetailsCheckupList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findDetailsCheckupList",false);
        }

        //  그리드 포커스 이동 시 
        this.pckGrid_onsetfocus=function(obj,e)
        {
        	this.mainGrid = obj;
        	this.addBtn.set_enable(true);
        	this.modBtn.set_enable(true);
        	this.delBtn.set_enable(true);
        }

        this.inspGrid_onsetfocus=function(obj,e)
        {
        	this.mainGrid = obj;
        	this.addBtn.set_enable(true);
        	this.modBtn.set_enable(false);
        	this.delBtn.set_enable(true);
        }

        this.dtInspGrid_onsetfocus=function(obj,e)
        {
        	this.mainGrid = obj;
        	this.addBtn.set_enable(false);
        	this.modBtn.set_enable(false);
        	this.delBtn.set_enable(false);
        }

        
        // 추가
        this.addBtn_onclick=function(obj,e)
        {
        	switch(this.mainGrid.name)
        	{
        		case "pckGrid" : 
        				var param = {};
        				var retVal = this.gfnPopup("SSC_PackgeAddPopupForm","sup",param);
        			
        			if(retVal == 1)
        			{
        				alert(this.MSG_SUP_SAVE);
        				this.pckSearchBtn_onclick (null,null);
        			}
        			
        			break;

        		case "inspGrid" :
        			var param = { param : pckCd };
        			var retVal = this.gfnPopup("SSC_PackgeScctPopupForm","sup",param);
        			
        			this.saveBtn.set_enable(true);
        			
        			break;

        		case "dtInspGrid" : break;
        	}	
        }

        this.pCode=function(retVal)
        {
        	if(retVal == 1)
        		{

        			alert(this.MSG_SUP_SAVE);
        			this.pckSearchBtn_onclick (null,null);		
        		}
        }

        // 수정버튼
        this.modBtn_onclick = function(obj,e)
        {
        	if(this.mainGrid.name == "pckGrid")
        	{
        		var param = { param : pckCd };
        		this.gfnPopup("SSC_PackgeAddPopupForm","sup",param);
        	}	
        }

        // 삭제버튼
        this.delBtn_onclick = function(obj,e)
        {
        	if(this.mainGrid.name == "inspGrid"){
        		this.saveBtn.set_enable(true);
        		this.dsPckInsp.deleteRow(this.dsPckInsp.rowposition);	
        	}else if(this.mainGrid.name == "pckGrid"){
        		this.saveBtn.set_enable(true);
        		this.dsPck.deleteRow(this.dsPck.rowposition);	
        	}
        }

        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID.slice(0,5)=="batch"){
        			alert(this.MSG_SUP_SAVE);
        		}
         	}
        }

        // 저장
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchPckProcess",false);
        	this.saveBtn.set_enable(false);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPck.addEventHandler("onrowposchanged", this.dsPck_onrowposchanged, this);
            this.dsPckInsp.addEventHandler("onrowposchanged", this.dsPckInsp_onrowposchanged, this);
            this.addEventHandler("onload", this.SSC_PackageForm_onload, this);
            this.pckGrid.addEventHandler("onsetfocus", this.pckGrid_onsetfocus, this);
            this.pckSearchBtn.addEventHandler("onclick", this.pckSearchBtn_onclick, this);
            this.inspGrid.addEventHandler("onsetfocus", this.inspGrid_onsetfocus, this);
            this.dtInspGrid.addEventHandler("onsetfocus", this.dtInspGrid_onsetfocus, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_PackgeForm.xfdl");

       
    };
}
)();
