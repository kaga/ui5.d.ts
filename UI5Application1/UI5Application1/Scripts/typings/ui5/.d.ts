
declare namespace  {
	/**
	 * Provides base functionality of the SAP jQuery plugin as extension of the jQuery framework.<br/>
	 * See also <a href="http://api.jquery.com/jQuery/">jQuery</a> for details.<br/>
	 * Although these functions appear as static ones, they are meant to be used on jQuery instances.<br/>
	 * If not stated differently, the functions follow the fluent interface paradigm and return the jQuery instance for chaining of statements.
	 * 
	 * Example for usage of an instance method:
	 * <pre>
	 *   var oRect = jQuery("#myDiv").rect();
	 *   alert("Top Position: " + oRect.top);
	 * </pre>
	 */
	namespace jQuery {
		/**
		 * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
		 * @param idx optional parameter to return the control instance at the given idx's position in the array.
		 * @return depending on the given context and idx parameter an array of controls, an instance or null.
		 */
		function control(idx?:number): sap.ui.core.Control[]|sap.ui.core.Control;
		/**
		 * 
		 * @param oRootControl 
		 */
		function root(oRootControl:any);
		/**
		 * 
		 * @param iIdx 
		 */
		function uiarea(iIdx:number);
	}
	/**
	 * Root namespace for JavaScript functionality provided by SAP SE.
	 * 
	 * The <code>sap</code> namespace is automatically registered with the
	 * OpenAjax hub if it exists.
	 */
	type sap = any
}
