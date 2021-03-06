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
                this.set_name("AR_ResolReceiptMgtForm");
                this.set_classname("AR_ResolReceiptMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBank", this);
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

            obj = new Dataset("dsPurchSalesDiv", this);
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

            obj = new Dataset("dsBillDiv", this);
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

            obj = new Dataset("dsHmEmp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCreDebDiv", this);
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

            obj = new Dataset("dsPayRec", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"payDiv\" type=\"STRING\" size=\"256\"/><Column id=\"stdTask\" type=\"STRING\" size=\"256\"/><Column id=\"stdBimok\" type=\"STRING\" size=\"256\"/><Column id=\"cardUseDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"depoOwner\" type=\"STRING\" size=\"256\"/><Column id=\"transDate\" type=\"STRING\" size=\"256\"/><Column id=\"transBank\" type=\"STRING\" size=\"256\"/><Column id=\"accountNo\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/><Column id=\"att\" type=\"STRING\" size=\"256\"/><Column id=\"cttInwon\" type=\"STRING\" size=\"256\"/><Column id=\"users\" type=\"STRING\" size=\"256\"/><Column id=\"foodCostYb\" type=\"STRING\" size=\"256\"/><Column id=\"taxinvYb\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"exePurp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTaxInv", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pubNo\" type=\"STRING\" size=\"256\"/><Column id=\"pubDate\" type=\"STRING\" size=\"256\"/><Column id=\"pubDiv\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"billDiv\" type=\"STRING\" size=\"256\"/><Column id=\"purchSalesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"anspDiv\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"aBS\" type=\"STRING\" size=\"256\"/><Column id=\"splyPrice\" type=\"STRING\" size=\"256\"/><Column id=\"taxAmt\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"gipyoDate\" type=\"STRING\" size=\"256\"/><Column id=\"sumPrice\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppendFile", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"fileSaveLoc\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"fileSaveName\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsProgDiv", this);
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

            obj = new Dataset("dsJour", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"creDebDiv\" type=\"STRING\" size=\"256\"/><Column id=\"debAmt\" type=\"STRING\" size=\"256\"/><Column id=\"creAmt\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"slipNo\" type=\"STRING\" size=\"256\"/><Column id=\"acntNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubNm\" type=\"STRING\" size=\"256\"/><Column id=\"bimokCd\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResolLet", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"resolNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolDiv\" type=\"STRING\" size=\"256\"/><Column id=\"resolDate\" type=\"STRING\" size=\"256\"/><Column id=\"resoler\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"progStatDiv\" type=\"STRING\" size=\"256\"/><Column id=\"sakNo\" type=\"STRING\" size=\"256\"/><Column id=\"receiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"operNo\" type=\"STRING\" size=\"256\"/><Column id=\"resolAmt\" type=\"STRING\" size=\"256\"/><Column id=\"brCau\" type=\"STRING\" size=\"256\"/><Column id=\"abs\" type=\"STRING\" size=\"256\"/><Column id=\"demdDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"autoJourYb\" type=\"STRING\" size=\"256\"/><Column id=\"modWorker\" type=\"STRING\" size=\"256\"/><Column id=\"modDate\" type=\"STRING\" size=\"256\"/><Column id=\"danDiv\" type=\"STRING\" size=\"256\"/><Column id=\"acntCd\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"surtaxYb\" type=\"STRING\" size=\"256\"/><Column id=\"resolDeptExtsn\" type=\"STRING\" size=\"256\"/><Column id=\"closYb\" type=\"STRING\" size=\"256\"/><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"resolerNm\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"acntCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"assiSubCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAccPrid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"accPrid\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineYn\" type=\"STRING\" size=\"256\"/><Column id=\"dlineDate\" type=\"STRING\" size=\"256\"/><Column id=\"dlineManCd\" type=\"STRING\" size=\"256\"/><Column id=\"carrforYn\" type=\"STRING\" size=\"256\"/><Column id=\"carrforManCd\" type=\"STRING\" size=\"256\"/><Column id=\"carrforDate\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"regIp\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"modId\" type=\"STRING\" size=\"256\"/><Column id=\"modIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCust", this);
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAccPridList</Col><Col id=\"URL\">his::acc/elementary/findAccPridList.do</Col><Col id=\"inData\">dsAccPrid=dsAccPrid</Col><Col id=\"outData\">dsAccPrid=dsAccPrid</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findResolLetList</Col><Col id=\"outData\">dsResolLet=dsResolLet</Col><Col id=\"URL\">his::acc/resol/findResolLetList.do</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findResolLetDetail</Col><Col id=\"URL\">his::acc/resol/findResolLetDetailList.do</Col><Col id=\"outData\">dsJour=dsJour dsPayRec=dsPayRec dsAppendFile=dsAppendFile</Col><Col id=\"callbackFunc\">callback</Col></Row><Row><Col id=\"serviceID\">findRunBimok</Col><Col id=\"URL\">his::acc/budget/findRunBimok.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRunBudg=dsRunBudg</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">searchTaxInvoiceList</Col><Col id=\"URL\">his::acc/vat/findTaxInvList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsTaxInv=dsTaxInv dsDetailTaxInv=dsDetailTaxInv</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findAccount</Col><Col id=\"URL\">his::acc/resol/findAccount.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsAccount=dsAccount</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\">dsHmEmp=dsHmEmp</Col><Col id=\"outData\">dsHmEmp=dsHmEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">modifyResolLet</Col><Col id=\"URL\">his::acc/resol/modifyResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:u</Col></Row><Row><Col id=\"serviceID\">removeResolLet</Col><Col id=\"URL\">his::acc/resol/removeResolLet.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:u</Col></Row><Row><Col id=\"serviceID\">batchResolLetProcess</Col><Col id=\"URL\">his::acc/resol/batchResolLetProcess.do</Col><Col id=\"inData\">dsResolLet=dsResolLet:a dsJour=dsJour:a dsPayRec=dsPayRec:a dsTaxInv=dsTaxInv:a dsDetailTaxInv=dsDetailTaxInv:a </Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">registerSlipList</Col><Col id=\"URL\">his::acc/slip/registerSlipList.do</Col><Col id=\"inData\">dsSlip=dsSlip:a</Col><Col id=\"callbackFunc\">callback</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GA039</Col><Col id=\"dsName\">dsResolDiv</Col></Row><Row><Col id=\"code\">CM001</Col><Col id=\"dsName\">dsCust</Col></Row><Row><Col id=\"code\">GP500</Col><Col id=\"dsName\">dsDept</Col></Row><Row><Col id=\"code\">GB010</Col><Col id=\"dsName\">dsProgDiv</Col></Row><Row><Col id=\"code\">GA061</Col><Col id=\"dsName\">dsJibulDiv</Col></Row><Row><Col id=\"code\">GA003</Col><Col id=\"dsName\">dsBank</Col></Row><Row><Col id=\"code\">GA075</Col><Col id=\"dsName\">dsPurchSalesDiv</Col></Row><Row><Col id=\"code\">GA074</Col><Col id=\"dsName\">dsBillDiv</Col></Row><Row><Col id=\"code\">GA049</Col><Col id=\"dsName\">dsCreDebDiv</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResolDiv", this);
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

            obj = new Dataset("dsAccount", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNm\" type=\"STRING\" size=\"256\"/><Column id=\"adptdt\" type=\"STRING\" size=\"256\"/><Column id=\"bussNo\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxNo\" type=\"STRING\" size=\"256\"/><Column id=\"bankCd\" type=\"STRING\" size=\"256\"/><Column id=\"accNo\" type=\"STRING\" size=\"256\"/><Column id=\"busctgNm\" type=\"STRING\" size=\"256\"/><Column id=\"busshpNm\" type=\"STRING\" size=\"256\"/><Column id=\"prsdntNm\" type=\"STRING\" size=\"256\"/><Column id=\"resNo\" type=\"STRING\" size=\"256\"/><Column id=\"dpstr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"gpuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"gduseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cardYn\" type=\"STRING\" size=\"256\"/><Column id=\"riuseYn\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("subCodeStc01", "absolute", "34.08%", "71", null, "27", "0.59%", null, this);
            obj.set_taborder("0");
            obj.set_text("결의서 상세정보");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "1.27%", "103", null, "27", "91.7%", null, this);
            obj.set_taborder("1");
            obj.set_text("결의구분");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "17.29%", "103", null, "27", "75.68%", null, this);
            obj.set_taborder("2");
            obj.set_text("회계기수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.27%", "191", null, "27", "91.7%", null, this);
            obj.set_taborder("3");
            obj.set_text("결의부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "1.27%", "162", null, "27", "91.7%", null, this);
            obj.set_taborder("4");
            obj.set_text("결의번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "1.27%", "132", null, "27", "91.7%", null, this);
            obj.set_taborder("5");
            obj.set_text("결의일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "34.08%", "100", null, "25", "58.89%", null, this);
            obj.set_taborder("6");
            obj.set_text("결의번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "34.08%", "127", null, "25", "58.89%", null, this);
            obj.set_taborder("7");
            obj.set_text("결의일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "34.08%", "155", null, "25", "58.89%", null, this);
            obj.set_taborder("8");
            obj.set_text("거래처");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "50.49%", "127", null, "25", "42.48%", null, this);
            obj.set_taborder("9");
            obj.set_text("결의금액");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "50.49%", "100", null, "25", "42.48%", null, this);
            obj.set_taborder("10");
            obj.set_text("결의구분");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc10", "absolute", "34.08%", "183", null, "25", "58.89%", null, this);
            obj.set_taborder("11");
            obj.set_text("진행상태");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc11", "absolute", "66.8%", "100", null, "25", "26.27%", null, this);
            obj.set_taborder("12");
            obj.set_text("요구부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc12", "absolute", "50.49%", "155", null, "25", "42.48%", null, this);
            obj.set_taborder("13");
            obj.set_text("사업자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc13", "absolute", "83.11%", "100", null, "25", "9.86%", null, this);
            obj.set_taborder("14");
            obj.set_text("결의부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc14", "absolute", "83.11%", "154", null, "25", "9.86%", null, this);
            obj.set_taborder("15");
            obj.set_text("결의부서전화");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc15", "absolute", "83.11%", "181", null, "25", "9.86%", null, this);
            obj.set_taborder("16");
            obj.set_text("원인번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc16", "absolute", "83.11%", "127", null, "25", "9.86%", null, this);
            obj.set_taborder("17");
            obj.set_text("결의자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc17", "absolute", "1.27%", "71", null, "27", "66.6%", null, this);
            obj.set_taborder("18");
            obj.set_text("전표대기 결의서 목록");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc18", "absolute", "66.8%", "127", null, "25", "26.27%", null, this);
            obj.set_taborder("19");
            obj.set_text("계약번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc19", "absolute", "66.8%", "154", null, "25", "26.27%", null, this);
            obj.set_taborder("20");
            obj.set_text("접수번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("resolDivCombo", "absolute", "8.69%", "101", null, "27", "82.91%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("accPridCombo", "absolute", "24.71%", "100", null, "27", "66.89%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("dsAccPrid");
            obj.set_codecolumn("accPrid");
            obj.set_datacolumn("accPrid");
            obj.getSetter("class").set("AreaCombo");

            obj = new Edit("endResolNoEd", "absolute", "23.14%", "162", null, "27", "66.89%", null, this);
            obj.set_taborder("23");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("startResolNoEd", "absolute", "8.69%", "162", null, "27", "81.25%", null, this);
            obj.set_taborder("24");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("resolDeptCdEd", "absolute", "8.69%", "192", null, "27", "82.71%", null, this);
            obj.set_taborder("25");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("resolNoEd", "absolute", "41.6%", "99", null, "25", "49.8%", null, this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("resolDate", "absolute", "41.6%", "126", null, "25", "49.8%", null, this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt09", "absolute", "57.81%", "154", null, "25", "33.4%", null, this);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt10", "absolute", "57.81%", "127", null, "25", "33.4%", null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt12", "absolute", "73.93%", "154", null, "25", "17.29%", null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt13", "absolute", "73.93%", "127", null, "25", "17.29%", null, this);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("resolerCdEd", "absolute", "90.63%", "127", null, "25", "0.59%", null, this);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt17", "absolute", "90.63%", "154", null, "25", "0.59%", null, this);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt18", "absolute", "90.63%", "181", null, "25", "0.59%", null, this);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc20", "absolute", "19.34%", "162", null, "27", "77.73%", null, this);
            obj.set_taborder("35");
            obj.set_text("~");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc21", "absolute", "19.34%", "132", null, "27", "77.73%", null, this);
            obj.set_taborder("36");
            obj.set_text("~");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("resolStartDateCal", "absolute", "8.69%", "132", null, "27", "81.45%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");

            obj = new Calendar("resolEndDateCal", "absolute", "23.14%", "132", null, "27", "67.09%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");

            obj = new Grid("Grid00", "absolute", "34.08%", "265", null, "50", "0.59%", null, this);
            obj.set_taborder("39");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"비목명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"배정예산금액\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"예산금액\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"결의가능금액\"/></Band><Band id=\"body\"><Cell text=\"bind:bimokCd\"/><Cell col=\"1\" text=\"bind:bimokNm\"/><Cell col=\"2\" text=\"bind:allotPlanAmount\"/><Cell col=\"3\" text=\"bind:budgAmount\"/><Cell col=\"4\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("payGrid", "absolute", "34.08%", "409", null, "173", "0.59%", null, this);
            obj.set_taborder("40");
            obj.set_binddataset("dsPayRec");
            obj.set_autofittype("col");
            obj.style.set_font("8 Dotum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" style=\"background:#cfd8dcff;\" text=\"순번\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"지불구분\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"연구과제\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"연구비목\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"카드번호\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" text=\"카드사용일\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"승인번호\"/><Cell col=\"8\" style=\"background:#cfd8dcff;\" text=\"거래처명\"/><Cell col=\"9\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"사업자번호\"/><Cell col=\"11\" style=\"background:#cfd8dcff;\" text=\"주소\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"예금주\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"이체일\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;\" text=\"이체은행\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;\" text=\"계좌번호\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"집행목적\"/><Cell row=\"1\" col=\"11\" style=\"background:#cfd8dcff;\" text=\"금액\"/><Cell row=\"2\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"사용자\"/><Cell row=\"2\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"참석인원\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"참석자\"/><Cell row=\"2\" col=\"9\" style=\"background:#cfd8dcff;\" text=\"식비\"/><Cell row=\"2\" col=\"10\" style=\"background:#cfd8dcff;\" text=\"계산서\"/><Cell row=\"2\" col=\"11\" style=\"background:#cfd8dcff;\" text=\"사유/비고\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:payDiv\" combodataset=\"dsJibulDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" colspan=\"2\" text=\"bind:stdTask\"/><Cell col=\"4\" text=\"bind:stdBimok\"/><Cell col=\"5\" edittype=\"expand\" text=\"bind:cardNo\"/><Cell col=\"6\" text=\"bind:cardUseDate\"/><Cell col=\"7\" text=\"bind:aprvNo\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell col=\"9\" colspan=\"2\" edittype=\"normal\" text=\"bind:operNo\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:addr\"/><Cell row=\"1\" col=\"1\" text=\"bind:depoOwner\"/><Cell row=\"1\" col=\"2\" edittype=\"date\" text=\"bind:transDate\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:transBank\" combodataset=\"dsBank\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"1\" col=\"4\" text=\"bind:accountNo\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" edittype=\"normal\" text=\"bind:exePurp\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"normal\" text=\"bind:price\"/><Cell row=\"2\" col=\"1\" displaytype=\"combo\" edittype=\"expand\" text=\"bind:users\" combodataset=\"dsHmEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell row=\"2\" col=\"2\" edittype=\"normal\" text=\"bind:cttInwon\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"bind:att\"/><Cell row=\"2\" col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:foodCostYb\"/><Cell row=\"2\" col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:taxinvYb\"/><Cell row=\"2\" col=\"11\" edittype=\"normal\" text=\"bind:note\"/></Band><Band id=\"summary\"><Cell style=\"background:#37474fff;color:aliceblue;\"/><Cell col=\"1\" colspan=\"10\" style=\"background:#37474fff;color:aliceblue;\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" style=\"background:#37474fff;color:aliceblue;\" expr=\"expr:getSum(&quot;price*1&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc22", "absolute", "34.08%", "211", null, "25", "58.89%", null, this);
            obj.set_taborder("41");
            obj.set_text("출력양식");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc23", "absolute", "50.49%", "183", null, "25", "42.48%", null, this);
            obj.set_taborder("42");
            obj.set_text("계정과목");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc24", "absolute", "50.49%", "211", null, "25", "42.48%", null, this);
            obj.set_taborder("43");
            obj.set_text("보조과목");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc25", "absolute", "34.08%", "239", null, "25", "58.89%", null, this);
            obj.set_taborder("44");
            obj.set_text("적요");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc26", "absolute", "66.8%", "209", null, "25", "26.27%", null, this);
            obj.set_taborder("45");
            obj.set_text("반려사유");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("resolBrCauEd", "absolute", "74.02%", "209", null, "25", "0.59%", null, this);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("assiSubNmEd", "absolute", "57.81%", "210", null, "25", "33.4%", null, this);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt20", "absolute", "57.81%", "182", null, "25", "33.4%", null, this);
            obj.set_taborder("48");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("AuthEdt21", "absolute", "41.6%", "153", null, "25", "49.8%", null, this);
            obj.set_taborder("49");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("acntNmEd", "absolute", "66.8%", "182", null, "25", "17.19%", null, this);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("JourGrid", "absolute", "34.08%", "317", null, "90", "0.68%", null, this);
            obj.set_taborder("51");
            obj.set_binddataset("dsJour");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"106\"/><Column size=\"39\"/><Column size=\"179\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"167\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"순번\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"차대구분\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"계정코드\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"계정코드명\"/><Cell col=\"5\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"보조과목코드\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"보조과목명\"/><Cell col=\"8\" style=\"background:#cfd8dcff;\" text=\"차변금액\"/><Cell col=\"9\" style=\"background:#cfd8dcff;\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:creDebDiv\" combodataset=\"dsCreDebDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:acntCd\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;button&quot;\"/><Cell col=\"4\" text=\"bind:acntNm\"/><Cell col=\"5\" text=\"bind:assiSubCd\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\"/><Cell col=\"7\" text=\"bind:assiSubNm\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:debAmt\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:creAmt\"/></Band><Band id=\"summary\"><Cell style=\"background:#37474fff;color:aliceblue;\"/><Cell col=\"1\" colspan=\"7\" style=\"background:#37474fff;color:aliceblue;\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" style=\"background:#37474fff;color:aliceblue;\" expr=\"expr:getSum('!isNaN(debAmt)== true? debAmt: &quot;0&quot;')\"/><Cell col=\"9\" displaytype=\"number\" style=\"background:#37474fff;color:aliceblue;\" expr=\"expr:getSum('!isNaN(creAmt)== true? creAmt: &quot;0&quot;')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "41.6%", "238", null, "25", "0.59%", null, this);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("slipRegBtn", "absolute", "1.27%", "223", null, "25", "88.28%", null, this);
            obj.set_taborder("53");
            obj.set_text("결의서 전표등록");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("resolBrBtn", "absolute", "11.91%", "223", null, "25", "76.56%", null, this);
            obj.set_taborder("54");
            obj.set_text("결의서 접수반려");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("resolDeptNameEd", "absolute", "19.92%", "193", null, "27", "71.48%", null, this);
            obj.set_taborder("55");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Combo("resolDivCombo02", "absolute", "57.81%", "100", null, "25", "33.5%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("resolDivCombo00", "absolute", "73.93%", "100", null, "25", "17.29%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("resolDeptCdCombo", "absolute", "90.63%", "100", null, "25", "0.59%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("resolDivCombo01", "absolute", "41.89%", "181", null, "25", "49.71%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_innerdataset("dsCust");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("progStatDiv", "absolute", "41.89%", "209", null, "25", "49.71%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("dsProgDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");

            obj = new Button("searchDeptBtn", "absolute", "18.16%", "252", null, "26", "79.49%", null, this);
            obj.set_taborder("61");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchResolBtn", "absolute", "28.71%", "189", null, "29", "66.89%", null, this);
            obj.set_taborder("62");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("resolLiGrid", "absolute", "1.27%", "250", null, "509", "66.89%", null, this);
            obj.set_taborder("63");
            obj.set_binddataset("dsResolLet");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" style=\"background:#cfd8dcff;\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"결의번호\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"결의구분\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"결의부서\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"bind:check\" editautoselect=\"false\"/><Cell col=\"1\" text=\"bind:resolNo\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:right;\" text=\"bind:resolDiv\" maskchar=\" \" combodataset=\"dsResolDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:resolDeptCd\" combodataset=\"dsDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:progStatDiv\" combodataset=\"dsProgDiv\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("taxInvGrid", "absolute", "34.08%", "587", null, "172", "0.68%", null, this);
            obj.set_taborder("64");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" style=\"background:#cfd8dcff;\" text=\"순번\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"발행일\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"계산서구분\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"매입/매출\"/><Cell col=\"4\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"금액\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" text=\"공금가액\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"세액\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"거래처\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"거래처명\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;\" text=\"대표자\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;\" text=\"업태\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"종목\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" style=\"background:#cfd8dcff;\" text=\"품목\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:pubDate\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:billDiv\" combodataset=\"dsBillDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:purchSalesDiv\" combodataset=\"dsPurchSalesDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" text=\"bind:sumPrice\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:splyPrice\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:taxAmt\"/><Cell row=\"1\" col=\"1\" text=\"bind:custCd\"/><Cell row=\"1\" col=\"2\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"bussno\"/><Cell row=\"1\" col=\"4\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"prsdntnm\"/><Cell row=\"1\" col=\"5\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"busshpnm\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"busctgnm\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" edittype=\"normal\" text=\"bind:aBS\"/></Band><Band id=\"summary\"><Cell style=\"background:#37474fff;color:aliceblue;\"/><Cell col=\"1\" colspan=\"3\" style=\"background:#37474fff;color:aliceblue;\" text=\"합계\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" style=\"background:#37474fff;color:aliceblue;\" expr=\"expr:getSum(&quot;sumPrice*1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"background:#37474fff;color:aliceblue;\" expr=\"expr:getSum(&quot;splyPrice*1&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"background:#37474fff;color:aliceblue;\" expr=\"expr:getSum(&quot;taxAmt*1&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", null, "60", "0.68%", null, this);
            obj.set_taborder("65");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.82%", "-4", null, "60", "73.45%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("결의서접수 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("searchDeptBtn00", "absolute", "17.38%", "188", null, "26", "80.27%", null, this);
            obj.set_taborder("66");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1017, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("65");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_ResolReceiptMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","resolNoEd","value","dsResolLet","resolNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","resolDate","value","dsResolLet","resolDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","AuthEdt09","value","dsResolLet","operNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","AuthEdt10","value","dsResolLet","resolAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","AuthEdt12","value","dsResolLet","receiptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","AuthEdt13","value","dsResolLet","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","resolerCdEd","value","dsResolLet","resoler");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","AuthEdt17","value","dsResolLet","resolDeptExtsn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","AuthEdt18","value","dsResolLet","sakNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","resolBrCauEd","value","dsResolLet","brCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","assiSubNmEd","value","dsResolLet","assiSubCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","AuthEdt20","value","dsResolLet","acntCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","acntNmEd","value","dsResolLet","acntCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","TextArea00","value","dsResolLet","abs");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","resolDivCombo02","value","dsResolLet","resolDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","resolDivCombo00","value","dsResolLet","demdDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","resolDeptCdCombo","value","dsResolLet","resolDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","resolDivCombo01","value","dsResolLet","custCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","progStatDiv","value","dsResolLet","progStatDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AR_ResolReceiptMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("AR_ResolReceiptMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        //자동분개 여부
        var autoJourYes;
        //회계년도
        var accYear;

        
        //  폼 로드 이벤트
        this.AR_ResolReceiptMgtForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	//회계기수 호출 메서드
        	this.gfnService("findAccPridList",false);
        	//회계기수 현재 회계기수로 셋팅
        	this.accPridCombo.set_displaynulltext('6');
        	//회계기수 accPrid변수에 셋팅
        	var accPrid=this.accPridCombo.displaynulltext;
        	//회계기수 argument에 셋팅
        	var argument ='accPrid='+accPrid;
        	
        	//결의서 조회 메서드
        	var row = this.dsService.findRow( "serviceID", "findResolLetList");
        	this.dsService.setColumn(row,"argument",argument);
        	this.gfnService("findResolLetList");
        	
        	
        	//거래처 조회 메서드
        	this.gfnService("findAccount",false);//거래처 데이터셋
        	this.dsAccount.filter("custcd==''");	
        	this.gfnService("empInfo");//사원정보 데이터셋
        }

        //부서코드검색선택
        this.searchDeptBtn_onclick = function(obj,e)
        {
        	this.gfnCodePopup('GP500');
        }
        //부서코드세팅
        this.setCode=function(code,array){
        	this.resolDeptCdEd.set_value(array[0]);
        	this.resolDeptNameEd.set_value(array[1]);
        }

        
        // 결의서 조회 버튼 클릭이벤트
        this.searchResolBtn_onclick = function(obj,e)
        {
        	//회계기수 셋팅
        	var accPrid = this.accPridCombo.value;	
        	//결의구분 셋팅
        	var resolDiv = this.resolDivCombo.value;		
        	//결의부서 셋팅
        	var resolDeptCd = this.resolDeptCdEd.value;
        	//argument에 변수들 셋팅
        	var argument ='accPrid='+accPrid;
        		argument +=' resolDiv='+resolDiv;
        		argument +=' resolDeptCd='+resolDeptCd;
        		//진행상태가 예산원인등록, 결의접수결재신청만 조회
        		argument +=' resolutionReceipt=Y';				
        	
        	var nRow = this.dsService.findRow( "serviceID", "findResolLetList" );
        	this.dsService.setColumn(nRow,"argument",argument);
        	//조회 메서드 호출
        	this.gfnService("findResolLetList");
        }

        
        this.Div01_slipRegBtn_onclick = function(obj,e)
        {
        	var date=this.gfnDate("yymm");
        	var gipyoDate=this.gfnDate("yyyymmdd");
        	//체크된 결의서가 있을때 실행
        	if(this.dsResolLet.lookup("check","1","check")!=null){
        		//dsResolLet row수 만큼 for문 실행
        		for(var i=0; i<this.dsResolLet.getRowCount();i++){			
        			//체크된 결의서에 한해 실행
        			if(this.dsResolLet.getColumn(i,"check")==1){
        				//dsSlip row생성
        				var row=this.dsSlip.addRow();
        				//전표번호 셋팅
        				this.dsSlip.setColumn(row,"slipNo",date);
        				//기표일자 셋팅				
        				this.dsSlip.setColumn(row,"gipyoDate",gipyoDate);
        				//전표구분 셋팅
        				this.dsSlip.setColumn(row,"slipDiv",this.dsResolLet.getColumn(i,"resolDiv"));
        				//계약번호 셋팅
        				this.dsSlip.setColumn(row,"ctrtNo",this.dsResolLet.getColumn(i,"ctrtNo"));
        				//거래처코드 셋팅
        				this.dsSlip.setColumn(row,"custCd",this.dsResolLet.getColumn(i,"custCd"));
        				//사업자번호 셋팅
        				this.dsSlip.setColumn(row,"operNo",this.dsResolLet.getColumn(i,"operNo"));
        				//적요 셋팅
        				this.dsSlip.setColumn(row,"abs",this.dsResolLet.getColumn(i,"abs"));
        				//요구부서코드 셋팅
        				this.dsSlip.setColumn(row,"demdDeptCd",this.dsResolLet.getColumn(i,"demdDeptCd"));
        				//결의부서코드 셋팅
        				this.dsSlip.setColumn(row,"resolDeptCd",this.dsResolLet.getColumn(i,"resolDeptCd"));
        				//등록자 셋팅
        				this.dsSlip.setColumn(row,"regWorker",application.gdsEmp.getColumn(0,"empNo"));
        				//단구분 셋팅
        				this.dsSlip.setColumn(row,"danDiv","사삼병원");
        				//접수번호 셋팅
        				this.dsSlip.setColumn(row,"receiptNo",this.dsResolLet.getColumn(i,"receiptNo"));
        				//원인번호 셋팅
        				this.dsSlip.setColumn(row,"sakNo",this.dsResolLet.getColumn(i,"sakNo"));
        				//결의번호 셋팅
        				this.dsSlip.setColumn(row,"resolNo",this.dsResolLet.getColumn(i,"resolNo"));
        				//결산여부 셋팅
        				this.dsSlip.setColumn(row,"closYb","N");
        				//회계기수 셋팅
        				this.dsSlip.setColumn(row,"accPrid",this.dsResolLet.getColumn(i,"accPrid"));
        				//전표 등록  메서드 호출
        				this.gfnService("registerSlipList");
        			}
        		}
        	//체크된 결의서가 없을때 실행		
        	}else{
        		alert("전표로 등록할 결의서를 선택하시기 바랍니다.");
        	}
        }

        
        // 그리드 셀 클릭이벤트
        this.grid_oncellclick = function(obj,e)
        {
        	if(e.cell=="0"){
        		var check="0";	
        		var obj=this.dsResolLet.getColumn(e.row,"check");
        		if(obj==0){
        			this.dsResolLet.setColumn(e.row,"check","1");
        			}else if(obj==1){
        			this.dsResolLet.setColumn(e.row,"check","0");
        			}
        		
        	//다른 셀 클릭시
        	}else{
        		//자동분개 된 결의서
        		if(this.dsResolLet.getColumn(e.row,"autoJourYb")){
        			//자동분개 여부
        			autoJourYes=this.dsResolLet.getColumn(e.row,"autoJourYb");
        			//회계년도
        			var year=this.dsResolLet.getColumn(e.row,"resolDate");
        			//전역변수에 회계년도 셋팅
        			accYear = 2016;		
        		}	
        		//클릭한 결의변호 변수에 셋팅	
        		var resolNo=this.dsResolLet.getColumn(this.dsResolLet.rowposition,"resolNo");
        		//argument에 변수 셋팅
        		var argument ='resolNo='+resolNo;		
        		//dsService에서 findResolLetDetail 메서드 row 얻기
        		var nRow = this.dsService.findRow( "serviceID", "findResolLetDetail");
        		//findResolLetDetail메서드에 argument 셋팅
        		this.dsService.setColumn(nRow,"argument",argument);
        		//findResolLetDetail메서드 호출
        		this.gfnService("findResolLetDetail");
        	
        		//부가세 조회	
        		var argument = 'resolNo='+resolNo;
        		var nRow = this.dsService.findRow( "serviceID", "searchTaxInvoiceList" );
        		this.dsService.setColumn(nRow,"argument",argument);
        		this.gfnService("searchTaxInvoiceList");
        	}	
        }

        // 콜백함수
        this.callback = function(trid,ErrorCode,ErrorMsg){
        	//결의서 상세 메서드 호출 이후
        	if(trid=="findResolLetDetailList"){
        		//자동부개 일시 실행		
        		if(autoJourYes=="true"){			
        			//분개의 차변 예산비목 값을 bimokCd 셋팅
        			var bimokCd = this.dsJour.getColumn(0,"bimokCd");			
        			this.acntNmEd.value=this.dsJour.getColumn(0,"acntNm");
        			//보조과목명이 있을 때만 실행
        			if(this.dsJour.getColumn(0,"assiSubNm")!=null){
        				//보조과목명 assiSubNmEd에 셋팅				
        				this.Div01.assiSubNmEd.value=dsJour.getColumn(0,"assiSubNm");
        			}
        			//회계년도 
        			var argument ='accYear='+accYear;
        			//비목코드
        			argument +=' bimokCd='+bimokCd;
        			var nRow = this.dsService.findRow( "serviceID", "findRunBimok" );
        			this.dsService.setColumn(nRow,"argument",argument);
        			//예산비목 조회 메서드 호출
        			this.gfnService("findRunBimok");	
        		}
        	//전표등록 메서드 호출 이후
        	}else if(trid=="registerSlipList"){
        		alert("등록완료");
        		this.reload();
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.dsTaxInv.addEventHandler("canrowposchange", this.dsTaxInv_canrowposchange, this);
            this.dsAccPrid.addEventHandler("onrowposchanged", this.dsAccYear_onrowposchanged, this);
            this.addEventHandler("onload", this.AR_ResolReceiptMgtForm_onload, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc24.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc25.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc26.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.slipRegBtn.addEventHandler("onclick", this.Div01_slipRegBtn_onclick, this);
            this.resolBrBtn.addEventHandler("onclick", this.Div01_resolBrBtn_onclick, this);
            this.searchDeptBtn.addEventHandler("onclick", this.searchDeptBtn_onclick, this);
            this.searchResolBtn.addEventHandler("onclick", this.searchResolBtn_onclick, this);
            this.resolLiGrid.addEventHandler("oncellclick", this.grid_oncellclick, this);
            this.Div00.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.searchDeptBtn00.addEventHandler("onclick", this.searchDeptBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolReceiptMgtForm.xfdl");

       
    };
}
)();
