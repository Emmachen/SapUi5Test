sap.ui.jsview("sapui5.shellView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5.shellView
	*/ 
	getControllerName : function() {
		return "sapui5.shellView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5.shellView
	*/ 
	createContent : function(oController) {
		var oShell = new sap.ui.ux3.Shell("shell1");
		//item:每个签
		var oItem1 = new sap.ui.ux3.NavigationItem({
			key:"btn",
			text:"BUTTON"
		});
		var oItem2 = new sap.ui.ux3.NavigationItem({
			key:"tf",
			text:"TextField"
		});
		
		var oItem3 = new sap.ui.ux3.NavigationItem({
			key:"xml",
			text:"XmlView"
		})
		var mContent = {}
		mContent.btn = new sap.ui.commons.Button("bt",{text:"SUBMIT"});
		mContent.tf = new sap.ui.commons.TextField("textField");		
		mContent.xml = sap.ui.view({id:"xmlView",viewName:"sapui5.xmlView",type:sap.ui.core.mvc.ViewType.XML});
		
		oShell.addWorksetItem(oItem1);
		oShell.addWorksetItem(oItem2);
		oShell.addWorksetItem(oItem3);
		//每个shell的内容（所以视图的重要）
		oShell.setContent(mContent.btn);//初始化了才有内容显示
		
		oShell.attachWorksetItemSelected(function(evt){
			//alert(evt.Parameter("key"));
			oShell.setContent(mContent[evt.getParameter("key")]);
		});
		
		return oShell;//返回才能显示
	}

});
