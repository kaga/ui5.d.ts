
declare namespace sap {
	/**
	 * The main UI5 control library, with responsive controls that can be used in touch devices as well as desktop browsers.
	 */
	namespace m {
	}
	/**
	 * SAPUI5 library with controls specialized for administrative applications.
	 */
	type tnt = any
	/**
	 * The <code>sap.ui</code> namespace is the central OpenAjax compliant entry
	 * point for UI related JavaScript functionality provided by SAP.
	 */
	namespace ui {
		/**
		 * Defines a controller class or creates an instance of an already defined controller class.
		 * 
		 * When a name and a controller implementation object is given, a new controller class
		 * of the given name is created. The members of the implementation object will be copied
		 * into each new instance of that controller class (shallow copy).
		 * <b>Note</b>: as the members are shallow copied, controller instances will share all object values.
		 * This might or might not be what applications expect.
		 * 
		 * If only a name is given, a new instance of the named controller class is returned.
		 * @param sName The controller name
		 * @param oControllerImpl An object literal defining the methods and properties of the controller
		 * @return void or the new controller instance, depending on the use case
		 */
		function controller(sName:string, oControllerImpl?:any): void|sap.ui.core.mvc.Controller;
		/**
		 * Creates 0..n UI5 controls from an ExtensionPoint.
		 * One control if the ExtensionPoint is e.g. filled with a View, zero for ExtensionPoints without configured extension and
		 * n controls for multi-root Fragments as extension.
		 * 
		 * In JSViews, this function allows both JSON notation in aggregation content as well as adding an extension point to an aggregation after the target control
		 * has already been instantiated. In the latter case the optional parameters oTargetControls and oTargetAggregation need to be specified.
		 * @param oContainer The view or fragment containing the extension point
		 * @param sExtName The extensionName used to identify the extension point in the customizing
		 * @param fnCreateDefaultContent Optional callback function creating default content, returning an Array of controls. It is executed
		 * 			when there's no customizing, if not provided, no default content will be rendered.
		 * @param oTargetControl Optional - use this parameter to attach the extension point to a particular aggregation
		 * @param sAggregationName Optional - if provided along with oTargetControl, the extension point content is added to this particular aggregation at oTargetControl,
		 * 			if not given, but an oTargetControl is still present, the function will attempt to add the extension point to the default aggregation of oTargetControl.
		 * 			If no oTargetControl is provided, sAggregationName will also be ignored.
		 * @return an array with 0..n controls created from an ExtensionPoint
		 */
		function extensionpoint(oContainer:sap.ui.core.mvc.View|sap.ui.core.Fragment, sExtName:string, fnCreateDefaultContent?:any, oTargetControl?:sap.ui.core.Control, sAggregationName?:string): sap.ui.core.Control[];
		/**
		 * Instantiate a Fragment - this method loads the Fragment content, instantiates it, and returns this content.
		 * The Fragment object itself is not an entity which has further significance beyond this constructor.
		 * 
		 * To instantiate an existing Fragment, call this method as:
		 *    sap.ui.fragment(sName, sType, [oController]);
		 * The sName must correspond to an XML Fragment which can be loaded
		 * via the module system (fragmentName + suffix ".fragment.[typeextension]") and which defines the Fragment content.
		 * If oController is given, the (event handler) methods referenced in the Fragment will be called on this controller.
		 * Note that Fragments may require a Controller to be given and certain methods to be available.
		 * 
		 * The Fragment types "XML", "JS" and "HTML" are available by default; additional Fragment types can be implemented
		 * and added using the sap.ui.core.Fragment.registerType() function.
		 * 
		 * 
		 * Advanced usage:
		 * To instantiate a Fragment and give further configuration options, call this method as:
		 *     sap.ui.fragment(oFragmentConfig, [oController]);
		 * The oFragmentConfig object can have the following properties:
		 * - "fragmentName": the name of the Fragment, as above
		 * - "fragmentContent": the definition of the Fragment content itself. When this property is given, any given name is ignored.
		 *         The type of this property depends on the Fragment type, e.g. it could be a string for XML Fragments.
		 * - "type": the type of the Fragment, as above (mandatory)
		 * - "id": the ID of the Fragment (optional)
		 * Further properties may be supported by future or custom Fragment types. Any given properties
		 * will be forwarded to the Fragment implementation.
		 * 
		 * If you want to give a fixed ID for the Fragment, please use the advanced version of this method call with the
		 * configuration object or use the typed factories like sap.ui.xmlfragment(...) or sap.ui.jsfragment(...).
		 * Otherwise the Fragment ID is generated. In any case, the Fragment ID will be used as prefix for the ID of
		 * all contained controls.
		 * @param sName the Fragment name
		 * @param sType the Fragment type, e.g. "XML", "JS", or "HTML"
		 * @param oController the Controller which should be used by the controls in the Fragment. Note that some Fragments may not need a Controller and other may need one - and even rely on certain methods implemented in the Controller.
		 * @return the root Control(s) of the Fragment content
		 */
		function fragment(sName:string, sType:string, oController?:sap.ui.core.mvc.Controller): sap.ui.core.Control|sap.ui.core.Control[];
		/**
		 * Retrieve the {@link sap.ui.core.Core SAPUI5 Core} instance for the current window.
		 * @return the API of the current SAPUI5 Core instance.
		 */
		function getCore(): sap.ui.core.Core;
		/**
		 * Loads the version info file (resources/sap-ui-version.json) and returns
		 * it or if a library name is specified then the version info of the individual
		 * library will be returned.
		 * 
		 * In case of the version info file is not available an error will occur when
		 * calling this function.
		 * @param mOptions name of the library (e.g. "sap.ui.core") or a object map (see below)
		 * @return the full version info, the library specific one,
		 *                                    undefined (if library is not listed or there was an error and "failOnError" is set to "false")
		 *                                    or a Promise which resolves with one of them
		 */
		function getVersionInfo(mOptions?:string|any): any|any|any;
		/**
		 * Instantiates an HTML-based Fragment.
		 * 
		 * To instantiate a Fragment, call this method as:
		 *    sap.ui.htmlfragment([sId], sFragmentName, [oController]);
		 * The Fragment instance ID is optional (generated if not given) and will be used as prefix for the ID of all
		 * contained controls. The sFragmentName must correspond to an HTML Fragment which can be loaded
		 * via the module system (fragmentName + ".fragment.html") and which defines the Fragment.
		 * If oController is given, the methods referenced in the Fragment will be called on this controller.
		 * Note that Fragments may require a Controller to be given and certain methods to be available.
		 * 
		 * 
		 * Advanced usage:
		 * To instantiate a Fragment and optionally directly give the HTML definition instead of loading it from a file,
		 * call this method as:
		 *     sap.ui.htmlfragment(oFragmentConfig, [oController]);
		 * The oFragmentConfig object can have a either a "fragmentName" or a "fragmentContent" property.
		 * fragmentContent is optional and can hold the Fragment definition as XML string; if not
		 * given, fragmentName must be given and the Fragment content definition is loaded by the module system.
		 * Again, if oController is given, the methods referenced in the Fragment will be called on this controller.
		 * @param vFragment name of the Fragment (or Fragment configuration as described above, in this case no sId may be given. Instead give the id inside the config object, if desired.)
		 * @param sId id of the newly created Fragment
		 * @param oController a Controller to be used for event handlers in the Fragment
		 * @return the root Control(s) of the created Fragment instance
		 */
		function htmlfragment(vFragment:string|any, sId?:string, oController?:sap.ui.core.mvc.Controller): sap.ui.core.Control|sap.ui.core.Control[];
		/**
		 * Defines or creates an instance of a declarative HTML view.
		 * 
		 * The behavior of this method depends on the signature of the call and on the current context.
		 * 
		 * <ul>
		 * <li>View Definition <code>sap.ui.htmlview(sId, vView)</code>: Defines a view of the given name with the given
		 * implementation. sId must be the views name, vView must be an object and can contain
		 * implementations for any of the hooks provided by HTMLView</li>
		 * <li>View Instantiation <code>sap.ui.htmlview(sId?, vView)</code>: Creates an instance of the view with the given name (and id)</li>.
		 * </ul>
		 * 
		 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
		 * be created automatically.
		 * @param vView name or implementation of the view.
		 * @param sId id of the newly created view, only allowed for instance creation
		 * @return the created HTMLView instance in the creation case, otherwise undefined
		 */
		function htmlview(vView:string|any, sId?:string): sap.ui.core.mvc.HTMLView|any;
		/**
		 * Defines OR instantiates an HTML-based Fragment.
		 * 
		 * To define a JS Fragment, call this method as:
		 *    sap.ui.jsfragment(sName, oFragmentDefinition)
		 * Where:
		 * - "sName" is the name by which this fragment can be found and instantiated. If defined in its own file,
		 *    in order to be found by the module loading system, the file location and name must correspond to sName
		 *    (path + file name must be: fragmentName + ".fragment.js").
		 * - "oFragmentDefinition" is an object at least holding the "createContent(oController)" method which defines
		 *    the Fragment content. If given during instantiation, the createContent method receives a Controller
		 *    instance (otherwise oController is undefined) and the return value must be one sap.ui.core.Control
		 *    (which could have any number of children).
		 * 
		 * 
		 * To instantiate a JS Fragment, call this method as:
		 *    sap.ui.jsfragment([sId], sFragmentName, [oController]);
		 * The Fragment ID is optional (generated if not given) and the Fragment implementation CAN use it
		 * to make contained controls unique (this depends on the implementation: some JS Fragments may choose
		 * not to support multiple instances within one application and not use the ID prefixing).
		 * The sFragmentName must correspond to a JS Fragment which can be loaded
		 * via the module system (fragmentName + ".fragment.js") and which defines the Fragment.
		 * If oController is given, the methods referenced in the Fragment will be called on this controller.
		 * Note that Fragments may require a Controller to be given and certain methods to be available.
		 * @param sFragmentName name of the Fragment (or Fragment configuration as described above, in this case no sId may be given. Instead give the id inside the config object, if desired)
		 * @param sId id of the newly created Fragment
		 * @param oController a Controller to be used for event handlers in the Fragment
		 * @return the root Control(s) of the created Fragment instance
		 */
		function jsfragment(sFragmentName:string|any, sId?:string, oController?:sap.ui.core.mvc.Controller): sap.ui.core.Control|sap.ui.core.Control[];
		/**
		 * Creates a JSON view of the given name and id.
		 * 
		 * The <code>viewName</code> must either correspond to a JSON module that can be loaded
		 * via the module system (viewName + suffix ".view.json") and which defines the view or it must
		 * be a configuration object for a view.
		 * The configuration object can have a viewName, viewContent and a controller property. The viewName
		 * behaves as described above, viewContent can hold the view description as JSON string or as object literal.
		 * 
		 * <strong>Note</strong>: when an object literal is given, it might be modified during view construction.
		 * 
		 * The controller property can hold an controller instance. If a controller instance is given,
		 * it overrides the controller defined in the view.
		 * 
		 * Like with any other control, an id is optional and will be created when missing.
		 * @param vView name of a view resource or view configuration as described above.
		 * @param sId id of the newly created view
		 * @return the created JSONView instance
		 */
		function jsonview(vView:string|any, sId?:string): sap.ui.core.mvc.JSONView;
		/**
		 * Defines or creates an instance of a JavaScript view.
		 * 
		 * The behavior of this method depends on the signature of the call and on the current context.
		 * 
		 * <ul>
		 * <li>View Definition <code>sap.ui.jsview(sId, vView)</code>: Defines a view of the given name with the given
		 * implementation. sId must be the view's name, vView must be an object and can contain
		 * implementations for any of the hooks provided by JSView</li>
		 * 
		 * <li>View Instantiation <code>sap.ui.jsview(sId?, vView)</code>: Creates an instance of the view with the given name (and id).
		 * If no view implementation has been defined for that view name, a JavaScript module with the same name and with suffix "view.js" will be loaded
		 * and executed. The module should contain a view definition (1st. variant above). </li>
		 * </ul>
		 * 
		 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
		 * be created automatically.
		 * @param vView name or implementation of the view.
		 * @param sId id of the newly created view, only allowed for instance creation
		 * @param bAsync defines how the view source is loaded and rendered later on (only relevant for instantiation, ignored for everything else)
		 * @return the created JSView instance in the creation case, otherwise undefined
		 */
		function jsview(vView:string|any, sId?:string, bAsync?:boolean): sap.ui.core.mvc.JSView|any;
		/**
		 * Creates a lazy loading stub for a given class <code>sClassName</code>.
		 * 
		 * If the class has been loaded already, nothing is done. Otherwise a stub object
		 * or constructor and - optionally - a set of stub methods are created.
		 * All created stubs will load the corresponding module on execution
		 * and then delegate to their counterpart in the loaded module.
		 * 
		 * When no methods are given or when the list of methods contains the special name
		 * "new" (which is an operator can't be used as method name in JavaScript), then a
		 * stub <b>constructor</b> for class <code>sClassName</code> is created.
		 * Otherwise, a plain object is created.
		 * 
		 * <b>Note</b>: Accessing any stub as a plain object without executing it (no matter
		 * whether it is a function or an object) won't load the module and therefore most like
		 * won't work as expected. This is a fundamental restriction of the lazy loader approach.
		 * It could only be fixed with JavaScript 1.5 features that are not available in all
		 * UI5 target browsers (e.g. not in IE8).
		 * 
		 * <b>Note</b>: As a side effect of this method, the namespace containing the given
		 * class is created <b>immediately</b>.
		 * @param sClassName Fully qualified name (dot notation) of the class that should be prepared
		 * @param sMethods space separated list of additional (static) methods that should be created as stubs
		 * @param sModuleName name of the module to load, defaults to the class name
		 */
		function lazyRequire(sClassName:string, sMethods?:string, sModuleName?:string);
		/**
		 * Redirects access to resources that are part of the given namespace to a location
		 * relative to the assumed <b>application root folder</b>.
		 * 
		 * Any UI5 managed resource (view, controller, control, JavaScript module, CSS file, etc.)
		 * whose resource name starts with <code>sNamespace</code>, will be loaded from an
		 * equally named subfolder of the <b>application root folder</b>.
		 * If the resource name consists of multiple segments (separated by a dot), each segment
		 * is assumed to represent an individual folder. In other words: when a resource name is
		 * converted to an URL, any dots ('.') are converted to slashes ('/').
		 * 
		 * <b>Limitation:</b> For the time being, the <b>application root folder</b> is assumed to be
		 * the same as the folder where the current page resides in.
		 * 
		 * Usage sample:
		 * <pre>
		 *   // Let UI5 know that resources, whose name starts with "com.mycompany.myapp"
		 *   // should be loaded from the URL location "./com/mycompany/myapp"
		 *   sap.ui.localResources("com.mycompany.myapp");
		 * 
		 *   // The following call implicitly will use the mapping done by the previous line
		 *   // It will load a view from ./com/mycompany/myapp/views/Main.view.xml
		 *   sap.ui.view({ view : "com.mycompany.myapp.views.Main", type : sap.ui.core.mvc.ViewType.XML});
		 * </pre>
		 * 
		 * When applications need a more flexible mapping between resource names and their location,
		 * they can use {@link jQuery.sap.registerModulePath}.
		 * 
		 * It is intended to make this configuration obsolete in future releases, but for the time
		 * being, applications must call this method when they want to store resources relative to
		 * the assumed application root folder.
		 * @param sNamespace Namespace prefix for which to load resources relative to the application root folder
		 */
		function localResources(sNamespace:string);
		/**
		 * Ensures that a given a namespace or hierarchy of nested namespaces exists in the
		 * current <code>window</code>.
		 * @param sNamespace 
		 * @deprecated Use jQuery.sap.declare or jQuery.sap.getObject(...,0) instead
		 * @return the innermost namespace of the hierarchy
		 */
		function namespace(sNamespace:string): any;
		/**
		 * Resolves one or more module dependencies.
		 * 
		 * <b>Synchronous Retrieval of a Single Module Value</b>
		 * 
		 * When called with a single string, that string is assumed to be the name of an already loaded
		 * module and the value of that module is returned. If the module has not been loaded yet,
		 * or if it is a Non-UI5 module (e.g. third party module), <code>undefined</code> is returned.
		 * This signature variant allows synchronous access to module values without initiating module loading.
		 * 
		 * Sample:
		 * <pre>
		 *   var JSONModel = sap.ui.require("sap/ui/model/json/JSONModel");
		 * </pre>
		 * 
		 * For modules that are known to be UI5 modules, this signature variant can be used to check whether
		 * the module has been loaded.
		 * 
		 * <b>Asynchronous Loading of Multiple Modules</b>
		 * 
		 * If an array of strings is given and (optionally) a callback function, then the strings
		 * are interpreted as module names and the corresponding modules (and their transitive
		 * dependencies) are loaded. Then the callback function will be called asynchronously.
		 * The module values of the specified modules will be provided as parameters to the callback
		 * function in the same order in which they appeared in the dependencies array.
		 * 
		 * The return value for the asynchronous use case is <code>undefined</code>.
		 * 
		 * <pre>
		 *   sap.ui.require(['sap/ui/model/json/JSONModel', 'sap/ui/core/UIComponent'], function(JSONModel,UIComponent) {
		 * 
		 *     var MyComponent = UIComponent.extend('MyComponent', {
		 *       ...
		 *     });
		 *     ...
		 * 
		 *   });
		 * </pre>
		 * 
		 * This method uses the same variation of the {@link jQuery.sap.getResourcePath unified resource name}
		 * syntax that {@link sap.ui.define} uses: module names are specified without the implicit extension '.js'.
		 * Relative module names are not supported.
		 * @param vDependencies dependency (dependencies) to resolve
		 * @param fnCallback callback function to execute after resolving an array of dependencies
		 * @return a single module value or undefined
		 */
		function require(vDependencies:string|string[], fnCallback?:any): any|any;
		/**
		 * Returns the URL of a resource that belongs to the given library and has the given relative location within the library.
		 * This is mainly meant for static resources like images that are inside the library.
		 * It is NOT meant for access to JavaScript modules or anything for which a different URL has been registered with jQuery.sap.registerModulePath(). For
		 * these cases use jQuery.sap.getModulePath().
		 * It DOES work, however, when the given sResourcePath starts with "themes/" (= when it is a theme-dependent resource). Even when for this theme a different
		 * location outside the normal library location is configured.
		 * @param sLibraryName the name of a library, like "sap.ui.commons"
		 * @param sResourcePath the relative path of a resource inside this library, like "img/mypic.png" or "themes/my_theme/img/mypic.png"
		 * @return the URL of the requested resource
		 */
		function resource(sLibraryName:string, sResourcePath:string): string;
		/**
		 * Displays the control tree with the given root inside the area of the given
		 * DOM reference (or inside the DOM node with the given ID) or in the given Control.
		 * 
		 * Example:
		 * <pre>
		 *   &lt;div id="SAPUI5UiArea">&lt;/div>
		 *   &lt;script type="text/javascript">
		 *     var oRoot = new sap.ui.commons.Label();
		 *     oRoot.setText("Hello world!");
		 *     sap.ui.setRoot("SAPUI5UiArea", oRoot);
		 *   &lt;/script>
		 * </pre>
		 * <p>
		 * 
		 * This is a shortcut for <code>sap.ui.getCore().setRoot()</code>.
		 * 
		 * Internally, if a string is given that does not identify an UIArea or a control
		 * then implicitly a new <code>UIArea</code> is created for the given DOM reference
		 * and the given control is added.
		 * @param oDomRef a DOM Element or Id String of the UIArea
		 * @param oControl the Control that should be added to the <code>UIArea</code>.
		 * @deprecated Use function <code>placeAt</code> of <code>sap.ui.core.Control</code> instead.
		 */
		function setRoot(oDomRef:string|any|sap.ui.core.Control, oControl:sap.ui.base.Interface|sap.ui.core.Control);
		/**
		 * Creates a Template for the given id, dom reference or a configuration object.
		 * If no parameter is defined this function makes a lookup of DOM elements
		 * which are specifying a type attribute. If the value of this type attribute
		 * matches an registered type then the content of this DOM element will be
		 * used to create a new <code>Template</code> instance.
		 * 
		 * If you want to lookup all kind of existing and known templates and parse them
		 * directly you can simply call:
		 * <pre>
		 *   sap.ui.template();
		 * </pre>
		 * 
		 * To parse a concrete DOM element you can do so by using this function in the
		 * following way:
		 * <pre>
		 *   sap.ui.template("theTemplateId");
		 * </pre>
		 * 
		 * Or you can pass the reference to a DOM element and use this DOM element as
		 * a source for the template:
		 * <pre>
		 *   sap.ui.template(oDomRef);
		 * </pre>
		 * 
		 * The last option to use this function is to pass the information via a
		 * configuration object. This configuration object can be used to pass a
		 * context for the templating framework when compiling the template:
		 * <pre>
		 *   var oTemplateById = sap.ui.template({
		 *     id: "theTemplateId",
		 *     context: { ... }
		 *   });
		 * 
		 *   var oTemplateByDomRef = sap.ui.template({
		 *     domref: oDomRef,
		 *     context: { ... }
		 *   });
		 * </pre>
		 * 
		 * It can also be used to load a template from another file:
		 * <pre>
		 *   var oTemplate = sap.ui.template({
		 *     id: "myTemplate",
		 *     src: "myTemplate.tmpl"
		 *   });
		 * 
		 *   var oTemplateWithContext = sap.ui.template({
		 *     id: "myTemplate",
		 *     src: "myTemplate.tmpl",
		 *     context: { ... }
		 *   });
		 * </pre>
		 * 
		 * The properties of the configuration object are the following:
		 * <ul>
		 * <li><code>id</code> - the ID of the Template / the ID  of the DOM element containing the source of the Template</li>
		 * <li><code>domref</code> - the DOM element containing the source of the Template</li>
		 * <li><code>type</code> - the type of the Template</li>
		 * <li><code>src</code> - the URL to lookup the template</li> (<i>experimental!</i>)
		 * <li><code>control</code> - the fully qualified name of the control to declare</li> (<i>experimental!</i>)
		 * </ul>
		 * @param oTemplate the id or the DOM reference to the template to lookup or an configuration object containing the src, type and eventually the id of the Template.
		 * @return the created Template instance
		 *         or in case of usage without parametes any array of templates is returned
		 */
		function template(oTemplate?:string|any|any): sap.ui.core.tmpl.Template|sap.ui.core.tmpl.Template[];
		/**
		 * Defines or creates an instance of a template view.
		 * 
		 * The behavior of this method depends on the signature of the call and on the current context.
		 * 
		 * <ul>
		 * <li>View Definition <code>sap.ui.templateview(sId, vView)</code>: Defines a view of the given name with the given
		 * implementation. sId must be the views name, vView must be an object and can contain
		 * implementations for any of the hooks provided by templateview</li>
		 * <li>View Instantiation <code>sap.ui.templateview(sId?, vView)</code>: Creates an instance of the view with the given name (and id)</li>.
		 * </ul>
		 * 
		 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
		 * be created automatically.
		 * @param vView name or implementation of the view.
		 * @param sId id of the newly created view, only allowed for instance creation
		 * @return the created TemplateView instance in the creation case, otherwise undefined
		 */
		function templateview(vView:string|any, sId?:string): sap.ui.core.mvc.TemplateView|any;
		/**
		 * Creates a view of the given type, name and with the given id.
		 * 
		 * The <code>vView</code> configuration object can have the following properties for the view
		 * instantiation:
		 * <ul>
		 * <li>The ID <code>vView.id</code> specifies an ID for the View instance. If no ID is given,
		 * an ID will be generated.</li>
		 * <li>The view name <code>vView.viewName</code> corresponds to an XML module that can be loaded
		 * via the module system (vView.viewName + suffix ".view.xml")</li>
		 * <li>The controller instance <code>vView.controller</code> must be a valid controller implementation.
		 * The given controller instance overrides the controller defined in the view definition</li>
		 * <li>The view type <code>vView.type</code> specifies what kind of view will be instantiated. All valid
		 * view types are listed in the enumeration sap.ui.core.mvc.ViewType.</li>
		 * <li>The view data <code>vView.viewData</code> can hold user specific data. This data is available
		 * during the whole lifecycle of the view and the controller</li>
		 * <li>The view loading mode <code>vView.async</code> must be a boolean and defines if the view source is loaded
		 * synchronously or asynchronously. In async mode, the view is rendered empty initially, and rerenderd with the
		 * loaded view content.</li>
		 * <li><code>vView.preprocessors</code></li> can hold a map from the specified preprocessor type (e.g. "xml") to an array of
		 * preprocessor configurations; each configuration consists of a <code>preprocessor</code> property (optional when
		 * registered as on-demand preprocessor) and may contain further preprocessor-specific settings. The preprocessor can
		 * be either a module name as string implementation of {@link sap.ui.core.mvc.View.Preprocessor} or a function according to
		 * {@link sap.ui.core.mvc.View.Preprocessor.process}. Do not set properties starting with underscore like <code>_sProperty</code>
		 * property, these are reserved for internal purposes. When several preprocessors are provided for one hook, it has to be made
		 * sure that they do not conflict when beeing processed serially.
		 * 
		 * <strong>Note</strong>: These preprocessors are only available to this instance. For global or
		 * on-demand availability use {@link sap.ui.core.mvc.XMLView.registerPreprocessor}.
		 * 
		 * <strong>Note</strong>: Please note that preprocessors in general are currently only available
		 * to XMLViews.
		 * 
		 * <strong>Note</strong>: Preprocessors only work in async views and will be ignored when the view is instantiated
		 * in sync mode by default, as this could have unexpected side effects. You may override this behaviour by setting the
		 * bSyncSupport flag of the preprocessor to true.
		 * @param sId id of the newly created view, only allowed for instance creation
		 * @param vView the view name or view configuration object
		 * @return the created View instance
		 */
		function view(sId:string, vView?:string|any): sap.ui.core.mvc.View;
		/**
		 * Instantiates an XML-based Fragment.
		 * 
		 * To instantiate a Fragment, call this method as:
		 *    sap.ui.xmlfragment([sId], sFragmentName, [oController]);
		 * The Fragment instance ID is optional (generated if not given) and will be used as prefix for the ID of all
		 * contained controls. The sFragmentName must correspond to an XML Fragment which can be loaded
		 * via the module system (fragmentName + ".fragment.xml") and which defines the Fragment.
		 * If oController is given, the methods referenced in the Fragment will be called on this controller.
		 * Note that Fragments may require a Controller to be given and certain methods to be available.
		 * 
		 * 
		 * Advanced usage:
		 * To instantiate a Fragment and optionally directly give the XML definition instead of loading it from a file,
		 * call this method as:
		 *     sap.ui.xmlfragment(oFragmentConfig, [oController]);
		 * The oFragmentConfig object can have a either a "fragmentName" or a "fragmentContent" property.
		 * fragmentContent is optional and can hold the Fragment definition as XML string; if not
		 * given, fragmentName must be given and the Fragment content definition is loaded by the module system.
		 * Again, if oController is given, the methods referenced in the Fragment will be called on this controller.
		 * @param vFragment name of the Fragment (or Fragment configuration as described above, in this case no sId may be given. Instead give the id inside the config object, if desired)
		 * @param sId id of the newly created Fragment
		 * @param oController a Controller to be used for event handlers in the Fragment
		 * @return the root Control(s) of the created Fragment instance
		 */
		function xmlfragment(vFragment:string|any, sId?:string, oController?:sap.ui.core.mvc.Controller): sap.ui.core.Control|sap.ui.core.Control[];
		/**
		 * Instantiates an XMLView of the given name and with the given ID.
		 * 
		 * The <code>viewName</code> must either correspond to an XML module that can be loaded
		 * via the module system (viewName + suffix ".view.xml") and which defines the view, or it must
		 * be a configuration object for a view.
		 * The configuration object can have a <code>viewName</code>, <code>viewContent</code> and a <code>controller
		 * </code> property. The <code>viewName</code> behaves as described above. <code>viewContent</code> is optional
		 * and can hold a view description as XML string or as already parsed XML Document. If not given, the view content
		 *  definition is loaded by the module system.
		 * 
		 * <strong>Note</strong>: if a <code>Document</code> is given, it might be modified during view construction.
		 * 
		 * <strong>Note</strong>: if you enable caching, you need to take care of the invalidation via keys. Automatic
		 * invalidation takes only place if the UI5 version or the component descriptor (manifest.json) change. This is
		 * still an experimental feature and may experience slight changes of the invalidation parameters or the cache
		 * key format.
		 * 
		 * The controller property can hold an controller instance. If a controller instance is given,
		 * it overrides the controller defined in the view.
		 * 
		 * Like with any other control, ID is optional and one will be created automatically.
		 * @param vView Name of the view or a view configuration object as described above
		 * @param  
		 * @param sId ID of the newly created view
		 * @return the created XMLView instance
		 */
		function xmlview(vView:string|any, :any, sId?:string): sap.ui.core.mvc.XMLView;
	}
	/**
	 * SAP UxAP
	 */
	type uxap = any
}
