sap.ui.jsview("sapui5.mvcJsView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5.mvcJsView
	*/ 
	getControllerName : function() {
		return "sapui5.mvcJsView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5.mvcJsView
	*/ 
	createContent : function(oController) {
		var myButton = new sap.ui.commons.Button("jsbtn",{
			text: "Js Button",
		    press:"onPress"
		});
		myButton.attachPress(function(){
			oController.onPress();
		});
		return myButton;
	}

});
