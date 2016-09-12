
declare namespace jQuery {
	class Event {
		/**
		 * Constructor for a jQuery.Event object.<br/>
		 */
		 constructor();
		/**
		 * Returns OffsetX of Event. In jQuery there is a bug. In IE the value is in offsetX, in FF in layerX
		 * @return offsetX
		 */
		 getOffsetX(): number;
		/**
		 * Returns OffsetY of Event. In jQuery there is a bug. in IE the value is in offsetY, in FF in layerY.
		 * @return offsetY
		 */
		 getOffsetY(): number;
		/**
		 * Returns an array of names (as strings) identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
		 * @return Array of names identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
		 */
		 getPseudoTypes(): string[];
		/**
		 * Checks whether this instance of {@link jQuery.Event} is of the given <code>sType</code> pseudo type.
		 * @param sType The name of the pseudo type this event should be checked for.
		 * @return <code>true</code> if this instance of jQuery.Event is of the given sType, <code>false</code> otherwise.
		 */
		 isPseudoType(sType:string): boolean;
	}
	/**
	 * Root Namespace for the jQuery plug-in provided by SAP SE.
	 */
	namespace sap {
		/**
		 * Loads the given Javascript resource (URN) asynchronously via as script tag.
		 * Returns a promise that will be resolved when the load event is fired or reject
		 * when the error event is fired.
		 * 
		 * Note: execution errors of the script are not reported as 'error'.
		 * 
		 * This method is not a full implementation of require. It is intended only for
		 * loading "preload" files that do not define an own module / module value.
		 * 
		 * Functionality might be removed/renamed in future, so no code outside the
		 * sap.ui.core library must use it.
		 */
		function _loadJSResourceAsync();
		/**
		 * Adds a whitelist entry for URL validation.
		 * @param protocol The protocol of the URL
		 * @param host The host of the URL
		 * @param port The port of the URL
		 * @param path the path of the URL
		 */
		function addUrlWhitelist(protocol:string, host:string, port:string, path:string);
		/**
		 * Calculate delta of old list and new list
		 * This partly implements the algorithm described in "A Technique for Isolating Differences Between Files"
		 * but instead of working with hashes, it does compare each entry of the old list with each entry of the new
		 * list, which causes terrible performane on large datasets.
		 * @param aOld Old Array
		 * @param aNew New Array
		 * @param fnCompare Function to compare list entries
		 * @param bUniqueEntries Whether entries are unique, so no duplicate entries exist
		 * @deprecated 
		 * @return List of changes
		 */
		function arrayDiff(aOld:any[], aNew:any[], fnCompare?:any, bUniqueEntries?:boolean): any[];
		/**
		 * Calculate delta of old list and new list
		 * This implements the algorithm described in "A Technique for Isolating Differences Between Files"
		 * (Commun. ACM, April 1978, Volume 21, Number 4, Pages 264-268)
		 * @param aOld Old Array
		 * @param aNew New Array
		 * @param fnSymbol Function to get entry symbol
		 * @return List of changes
		 */
		function arraySymbolDiff(aOld:any[], aNew:any[], fnSymbol?:any): any[];
		/**
		 * A simple assertion mechanism that logs a message when a given condition is not met.
		 * 
		 * <b>Note:</b> Calls to this method might be removed when the JavaScript code
		 *              is optimized during build. Therefore, callers should not rely on any side effects
		 *              of this method.
		 * @param bResult Result of the checked assertion
		 * @param vMessage Message that will be logged when the result is <code>false</code>. In case this is a function, the return value of the function will be displayed. This can be used to execute complex code only if the assertion fails.
		 */
		function assert(bResult:boolean, vMessage:string|any);
		/**
		 * Binds all events for listening with the given callback function.
		 * @param fnCallback Callback function
		 */
		function bindAnyEvent(fnCallback:any);
		/**
		 * Converts a character of the string to upper case.<br/>
		 * If no pos is defined as second parameter or pos is negative or greater than sString the first character will be
		 * converted into upper case. the first char position is 0.
		 * @param sString The string to be checked
		 * @param iPos the position of the character that will be uppercase
		 * @return The string with the firstletter in upper case
		 */
		function charToUpperCase(sString:string, iPos:number): string;
		/**
		 * Checks a given mouseover or mouseout event whether it is
		 * equivalent to a mouseenter or mousleave event regarding the given DOM reference.
		 * @param oEvent 
		 * @param oDomRef 
		 */
		function checkMouseEnterOrLeave(oEvent:jQuery.Event, oDomRef:any);
		/**
		 * Stops the delayed call.
		 * 
		 * The function given when calling delayedCall is not called anymore.
		 * @param sDelayedCallId The id returned, when calling delayedCall
		 */
		function clearDelayedCall(sDelayedCallId:string);
		/**
		 * Stops the interval call.
		 * 
		 * The function given when calling intervalCall is not called anymore.
		 * @param sIntervalCallId The id returned, when calling intervalCall
		 */
		function clearIntervalCall(sIntervalCallId:string);
		/**
		 * Clears the whitelist for URL validation
		 */
		function clearUrlWhitelist();
		/**
		 * Declares a module as existing.
		 * 
		 * By default, this function assumes that the module will create a JavaScript object
		 * with the same name as the module. As a convenience it ensures that the parent
		 * namespace for that object exists (by calling jQuery.sap.getObject).
		 * If such an object creation is not desired, <code>bCreateNamespace</code> must be set to false.
		 * @param sModuleName name of the module to be declared
		 *                           or in case of an object {modName: "...", type: "..."}
		 *                           where modName is the name of the module and the type
		 *                           could be a specific dot separated extension e.g.
		 *                           <code>{modName: "sap.ui.core.Dev", type: "view"}</code>
		 *                           loads <code>sap/ui/core/Dev.view.js</code> and
		 *                           registers as <code>sap.ui.core.Dev.view</code>
		 * @param bCreateNamespace whether to create the parent namespace
		 */
		function declare(sModuleName:string|any, bCreateNamespace?:boolean);
		/**
		 * Calls a method after a given delay and returns an id for this timer
		 * @param iDelay Delay time in milliseconds
		 * @param oObject Object from which the method should be called
		 * @param method function pointer or name of the method
		 * @param aParameters Method parameters
		 * @return Id which can be used to cancel the timer with clearDelayedCall
		 */
		function delayedCall(iDelay:number, oObject:any, method:string|any, aParameters?:any[]): string;
		/**
		 * Disable touch to mouse handling
		 */
		function disableTouchToMouseHandling();
		/**
		 * Encode the string for inclusion into CSS string literals or identifiers
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
		function encodeCSS(sString:string): string;
		/**
		 * Encode the string for inclusion into HTML content/attribute
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
		function encodeHTML(sString:string): string;
		/**
		 * Encode the string for inclusion into a JS string literal
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
		function encodeJS(sString:string): string;
		/**
		 * Encode the string for inclusion into an URL parameter
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
		function encodeURL(sString:string): string;
		/**
		 * Encode a map of parameters into a combined URL parameter string
		 * @param mParams The map of parameters to encode
		 * @return The URL encoded parameters
		 */
		function encodeURLParameters(mParams:any): string;
		/**
		 * Encode the string for inclusion into XML content/attribute
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
		function encodeXML(sString:string): string;
		/**
		 * Checks whether a given sString ends with sEndString
		 * respecting the case of the strings.
		 * @param sString The string to be checked
		 * @param sEndString The end string to be searched
		 * @return True if sString ends with sEndString
		 */
		function endsWith(sString:string, sEndString:string): boolean;
		/**
		 * Checks whether a given sString ends with sEndString
		 * ignoring the case of the strings.
		 * @param sString the string to be checked
		 * @param sEndString the end string to be searched
		 * @return true if sString ends with sEndString
		 */
		function endsWithIgnoreCase(sString:string, sEndString:string): boolean;
		/**
		 * Compares the two given values for equality, especially takes care not to compare
		 * arrays and objects by reference, but compares their content.
		 * Note: function does not work with comparing XML objects
		 * @param a A value of any type
		 * @param b A value of any type
		 * @param maxDepth Maximum recursion depth
		 * @param contains Whether all existing properties in a are equal as in b
		 * @return Whether a and b are equal
		 */
		function equal(a:any, b:any, maxDepth?:number, contains?:boolean): boolean;
		/**
		 * Encode the string for inclusion into HTML content/attribute.
		 * Old name "escapeHTML" kept for backward compatibility
		 * @param sString The string to be escaped
		 * @deprecated Has been renamed, use {@link jQuery.sap.encodeHTML} instead.
		 * @return The escaped string
		 */
		function escapeHTML(sString:string): string;
		/**
		 * Returns a new constructor function that creates objects with
		 * the given prototype.
		 * @param oPrototype Prototype to use for the new objects
		 * @return the newly created constructor function
		 */
		function factory(oPrototype:any): any;
		/**
		 * Returns the names of all declared modules.
		 * @return the names of all declared modules
		 */
		function getAllDeclaredModules(): string[];
		/**
		 * Constructs an URL to load the module with the given name and file type (suffix).
		 * 
		 * Searches the longest prefix of the given module name for which a registration
		 * exists (see {@link jQuery.sap.registerModulePath}) and replaces that prefix
		 * by the registered URL prefix.
		 * 
		 * The remainder of the module name is appended to the URL, replacing any dot with a slash.
		 * 
		 * Finally, the given suffix (typically a file name extension) is added (unconverted).
		 * 
		 * The returned name (without the suffix) doesn't end with a slash.
		 * @param sModuleName module name to detemrine the path for
		 * @param sSuffix suffix to be added to the resulting path
		 * @return calculated path (URL) to the given module
		 */
		function getModulePath(sModuleName:string, sSuffix:string): string;
		/**
		 * Returns a JavaScript object which is identified by a sequence of names.
		 * 
		 * A call to <code>getObject("a.b.C")</code> has essentially the same effect
		 * as accessing <code>window.a.b.C</code> but with the difference that missing
		 * intermediate objects (a or b in the example above) don't lead to an exception.
		 * 
		 * When the addressed object exists, it is simply returned. If it doesn't exists,
		 * the behavior depends on the value of the second, optional parameter
		 * <code>iNoCreates</code> (assuming 'n' to be the number of names in the name sequence):
		 * <ul>
		 * <li>NaN: if iNoCreates is not a number and the addressed object doesn't exist,
		 *          then <code>getObject()</code> returns <code>undefined</code>.
		 * <li>0 &lt; iNoCreates &lt; n: any non-existing intermediate object is created, except
		 *          the <i>last</i> <code>iNoCreates</code> ones.
		 * </ul>
		 * 
		 * Example:
		 * <pre>
		 *   getObject()            -- returns the context object (either param or window)
		 *   getObject("a.b.C")     -- will only try to get a.b.C and return undefined if not found.
		 *   getObject("a.b.C", 0)  -- will create a, b, and C in that order if they don't exists
		 *   getObject("a.b.c", 1)  -- will create a and b, but not C.
		 * </pre>
		 * 
		 * When a <code>oContext</code> is given, the search starts in that object.
		 * Otherwise it starts in the <code>window</code> object that this plugin
		 * has been created in.
		 * 
		 * Note: Although this method internally uses <code>object["key"]</code> to address object
		 *       properties, it does not support all possible characters in a name.
		 *       Especially the dot ('.') is not supported in the individual name segments,
		 *       as it is always interpreted as a name separator.
		 * @param sName a dot separated sequence of names that identify the required object
		 * @param iNoCreates number of objects (from the right) that should not be created
		 * @param oContext the context to execute the search in
		 * @return The value of the named object
		 */
		function getObject(sName:string, iNoCreates?:number, oContext?:any): any;
		/**
		 * Converts a UI5 module name to a unified resource name.
		 * 
		 * Used by View and Fragment APIs to convert a given module name into a unified resource name.
		 * When the <code>sSuffix</code> is not given, the suffix '.js' is added. This fits the most
		 * common use case of converting a module name to the Javascript resource that contains the
		 * module. Note that an empty <code>sSuffix</code> is not replaced by '.js'. This allows to
		 * convert UI5 module names to requireJS module names with a call to this method.
		 * @param sModuleName Module name as a dot separated name
		 * @param sSuffix Suffix to add to the final resource name
		 */
		function getResourceName(sModuleName:string, sSuffix?:string);
		/**
		 * Determines the URL for a resource given its unified resource name.
		 * 
		 * Searches the longest prefix of the given resource name for which a registration
		 * exists (see {@link jQuery.sap.registerResourcePath}) and replaces that prefix
		 * by the registered URL prefix.
		 * 
		 * The remainder of the resource name is appended to the URL.
		 * 
		 * <b>Unified Resource Names</b>
		 * Several UI5 APIs use <i>Unified Resource Names (URNs)</i> as naming scheme for resources that
		 * they deal with (e.h. Javascript, CSS, JSON, XML, ...). URNs are similar to the path
		 * component of an URL:
		 * <ul>
		 * <li>they consist of a non-empty sequence of name segments</li>
		 * <li>segments are separated by a forward slash '/'</li>
		 * <li>name segments consist of URL path segment characters only. It is recommened to use only ASCII
		 * letters (upper or lower case), digits and the special characters '$', '_', '-', '.')</li>
		 * <li>the empty name segment is not supported</li>
		 * <li>names consisting of dots only, are reserved and must not be used for resources</li>
		 * <li>names are case sensitive although the underlying server might be case-insensitive</li>
		 * <li>the behavior with regard to URL encoded characters is not specified, %ddd notation should be avoided</li>
		 * <li>the meaning of a leading slash is undefined, but might be defined in future. It therefore should be avoided</li>
		 * </ul>
		 * 
		 * UI5 APIs that only deal with Javascript resources, use a slight variation of this scheme,
		 * where the extension '.js' is always omitted (see {@link sap.ui.define}, {@link sap.ui.require}).
		 * 
		 * 
		 * <b>Relationship to old Module Name Syntax</b>
		 * 
		 * Older UI5 APIs that deal with resources (like {@link jQuery.sap.registerModulePath},
		 * {@link jQuery.sap.require} and {@link jQuery.sap.declare}) used a dot-separated naming scheme
		 * (called 'module names') which was motivated by object names in the global namespace in
		 * Javascript.
		 * 
		 * The new URN scheme better matches the names of the corresponding resources (files) as stored
		 * in a server and the dot ('.') is no longer a forbidden character in a resource name. This finally
		 * allows to handle resources with different types (extensions) with the same API, not only JS files.
		 * 
		 * Last but not least does the URN scheme better match the naming conventions used by AMD loaders
		 * (like <code>requireJS</code>).
		 * @param sResourceName unified resource name of the resource
		 * @return URL to load the resource from
		 */
		function getResourcePath(sResourceName:string): string;
		/**
		 * Returns a new function that returns the given <code>oValue</code> (using its closure).
		 * 
		 * Avoids the need for a dedicated member for the value.
		 * 
		 * As closures don't come for free, this function should only be used when polluting
		 * the enclosing object is an absolute "must-not" (as it is the case in public base classes).
		 * @param oValue The value that the getter should return
		 * @return The new getter function
		 */
		function getter(oValue:any): any;
		/**
		 * Creates and returns a new instance of {@link jQuery.sap.util.UriParameters}.
		 * 
		 * Example for reading a single URI parameter (or the value of the first
		 * occurrence of the URI parameter):
		 * <pre>
		 * 	var sValue = jQuery.sap.getUriParameters().get("myUriParam");
		 * </pre>
		 * 
		 * Example for reading the values of the first of the URI parameter
		 * (with multiple occurrences):
		 * <pre>
		 * 	var aValues = jQuery.sap.getUriParameters().get("myUriParam", true);
		 * 	for(i in aValues){
		 * 	var sValue = aValues[i];
		 * 	}
		 * </pre>
		 * @param sUri Uri to determine the parameters for
		 * @return A new URI parameters instance
		 */
		function getUriParameters(sUri:string): jQuery.sap.util.UriParameters;
		/**
		 * Gets the whitelist for URL validation.
		 * @return A copy of the whitelist
		 */
		function getUrlWhitelist(): any[];
		/**
		 * Executes an 'eval' for its arguments in the global context (without closure variables).
		 * 
		 * This is a synchronous replacement for <code>jQuery.globalEval</code> which in some
		 * browsers (e.g. FireFox) behaves asynchronously.
		 */
		function globalEval();
		/**
		 * Includes the script (via &lt;script&gt;-tag) into the head for the
		 * specified <code>sUrl</code> and optional <code>sId</code>.
		 * @param vUrl the URL of the script to load or a configuration object
		 * @param sId id that should be used for the script tag
		 * @param fnLoadCallback callback function to get notified once the script has been loaded
		 * @param fnErrorCallback callback function to get notified once the script loading failed
		 * @return When using the configuration object a <code>Promise</code> will be returned. The
		 *            documentation for the <code>fnLoadCallback</code> applies to the <code>resolve</code>
		 *            handler of the <code>Promise</code> and the one for the <code>fnErrorCallback</code>
		 *            applies to the <code>reject</code> handler of the <code>Promise</code>.
		 */
		function includeScript(vUrl:string|any, sId?:string, fnLoadCallback?:any, fnErrorCallback?:any): void|any;
		/**
		 * Includes the specified stylesheet via a &lt;link&gt;-tag in the head of the current document. If there is call to
		 * <code>includeStylesheet</code> providing the sId of an already included stylesheet, the existing element will be
		 * replaced.
		 * @param vUrl the URL of the stylesheet to load or a configuration object
		 * @param sId id that should be used for the link tag
		 * @param fnLoadCallback callback function to get notified once the stylesheet has been loaded
		 * @param fnErrorCallback callback function to get notified once the stylesheet loading failed.
		 *            In case of usage in IE the error callback will also be executed if an empty stylesheet
		 *            is loaded. This is the only option how to determine in IE if the load was successful
		 *            or not since the native onerror callback for link elements doesn't work in IE. The IE
		 *            always calls the onload callback of the link element.
		 *            Another issue of the IE9 is that in case of loading too many stylesheets the eventing
		 *            is not working and therefore the error or load callback will not be triggered anymore.
		 * @return When using the configuration object a <code>Promise</code> will be returned. The
		 *            documentation for the <code>fnLoadCallback</code> applies to the <code>resolve</code>
		 *            handler of the <code>Promise</code> and the one for the <code>fnErrorCallback</code>
		 *            applies to the <code>reject</code> handler of the <code>Promise</code>.
		 */
		function includeStyleSheet(vUrl:string|any, sId?:string, fnLoadCallback?:any, fnErrorCallback?:any): void|any;
		/**
		 * Does some basic modifications to the HTML page that make it more suitable for mobile apps.
		 * Only the first call to this method is executed, subsequent calls are ignored. Note that this method is also called by the constructor of toplevel controls like sap.m.App, sap.m.SplitApp and sap.m.Shell.
		 * Exception: if no homeIcon was set, subsequent calls have the chance to set it.
		 * 
		 * The "options" parameter configures what exactly should be done.
		 * 
		 * It can have the following properties:
		 * <ul>
		 * <li>viewport: whether to set the viewport in a way that disables zooming (default: true)</li>
		 * <li>statusBar: the iOS status bar color, "default", "black" or "black-translucent" (default: "default")</li>
		 * <li>hideBrowser: whether the browser UI should be hidden as far as possible to make the app feel more native (default: true)</li>
		 * <li>preventScroll: whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved (default: true)</li>
		 * <li>preventPhoneNumberDetection: whether Safari Mobile should be prevented from transforming any numbers that look like phone numbers into clickable links; this should be left as "true", otherwise it might break controls because Safari actually changes the DOM. This only affects all page content which is created after initMobile is called.</li>
		 * <li>rootId: the ID of the root element that should be made fullscreen; only used when hideBrowser is set (default: the document.body)</li>
		 * <li>useFullScreenHeight: a boolean that defines whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height (default: true)</li>
		 * <li>homeIcon: deprecated since 1.12, use jQuery.sap.setIcons instead.
		 * </ul>
		 * @param options configures what exactly should be done
		 */
		function initMobile(options?:any);
		/**
		 * Calls a method after a given interval and returns an id for this interval.
		 * @param iInterval Interval time in milliseconds
		 * @param oObject Object from which the method should be called
		 * @param method function pointer or name of the method
		 * @param aParameters Method parameters
		 * @return Id which can be used to cancel the interval with clearIntervalCall
		 */
		function intervalCall(iInterval:number, oObject:any, method:string|any, aParameters?:any[]): string;
		/**
		 * Check whether a given module has been loaded / declared already.
		 * 
		 * Returns true as soon as a module has been required the first time, even when
		 * loading/executing it has not finished yet. So the main assertion of a
		 * return value of <code>true</code> is that the necessary actions have been taken
		 * to make the module available in the near future. It does not mean, that
		 * the content of the module is already available!
		 * 
		 * This fuzzy behavior is necessary to avoid multiple requests for the same module.
		 * As a consequence of the assertion above, a <i>preloaded</i> module does not
		 * count as <i>declared</i>. For preloaded modules, an explicit call to
		 * <code>jQuery.sap.require</code> is necessary to make them available.
		 * 
		 * If a caller wants to know whether a module needs to be loaded from the server,
		 * it can set <code>bIncludePreloaded</code> to true. Then, preloaded modules will
		 * be reported as 'declared' as well by this method.
		 * @param sModuleName name of the module to be checked
		 * @param bIncludePreloaded whether preloaded modules should be reported as declared.
		 * @return whether the module has been declared already
		 */
		function isDeclared(sModuleName:string, bIncludePreloaded?:boolean): boolean;
		/**
		 * Whether the given resource has been loaded (or preloaded).
		 * @param sResourceName Name of the resource to check, in unified resource name format
		 * @return Whether the resource has been loaded already
		 */
		function isResourceLoaded(sResourceName:string): boolean;
		/**
		 * Returns a new object which has the given <code>oPrototype</code> as its prototype.
		 * 
		 * If several objects with the same prototype are to be created,
		 * {@link jQuery.sap.factory} should be used instead.
		 * @param oPrototype Prototype to use for the new object
		 * @return new object
		 */
		function newObject(oPrototype:any): any;
		/**
		 * Pads a string on the left side until is has the given length.<br/>
		 * @param sString The string to be padded
		 * @param sPadChar The char to use for the padding
		 * @param iLength the target length of the string
		 * @return The padded string
		 */
		function padLeft(sString:string, sPadChar:string, iLength:number): string;
		/**
		 * Pads a string on the right side until is has the given length.<br/>
		 * @param sString The string to be padded
		 * @param sPadChar The char to use for the padding
		 * @param iLength the target length of the string
		 * @return The padded string
		 */
		function padRight(sString:string, sPadChar:string, iLength:number): string;
		/**
		 * Parses the specified XML formatted string text using native parsing
		 * function of the browser and returns a valid XML document. If an error
		 * occurred during parsing a parse error object is returned as property (parseError) of the
		 * returned XML document object. The parse error object has the following error
		 * information parameters: errorCode, url, reason, srcText, line, linepos, filepos
		 * @param sXMLText the XML data as string
		 * @return the parsed XML document with a parseError property as described in
		 *         getParseError. An error occurred if the errorCode property of the parseError is != 0.
		 */
		function parseXML(sXMLText:string): any;
		/**
		 * Creates and returns a new instance of {@link jQuery.sap.util.Properties}.
		 * 
		 * If option 'url' is passed, immediately a load request for the given target is triggered.
		 * A property file that is loaded can contain comments with a leading ! or #.
		 * The loaded property list does not contain any comments.
		 * 
		 * <b>Example for loading a property file:</b>
		 * <pre>
		 *  jQuery.sap.properties({url : "../myProperty.properties"});
		 * </pre>
		 * 
		 * <b>Example for creating an empty properties instance:</b>
		 * <pre>
		 *  jQuery.sap.properties();
		 * </pre>
		 * 
		 * <b>Examples for getting and setting properties:</b>
		 * <pre>
		 * 	var oProperties = jQuery.sap.properties();
		 * 	oProperties.setProperty("KEY_1","Test Key");
		 * 	var sValue1 = oProperties.getProperty("KEY_1");
		 * 	var sValue2 = oProperties.getProperty("KEY_2","Default");
		 * </pre>
		 * @param mParams Parameters used to initialize the property list
		 * @return A new property list instance (synchronous case). In case of asynchronous loading an ECMA Script 6 Promise is returned.
		 */
		function properties(mParams?:any): jQuery.sap.util.Properties|any;
		/**
		 * Registers an URL prefix for a module name prefix.
		 * 
		 * Before a module is loaded, the longest registered prefix of its module name
		 * is searched for and the associated URL prefix is used as a prefix for the request URL.
		 * The remainder of the module name is attached to the request URL by replacing
		 * dots ('.') with slashes ('/').
		 * 
		 * The registration and search operates on full name segments only. So when a prefix
		 * 
		 *    'sap.com'  ->  'http://www.sap.com/ui5/resources/'
		 * 
		 * is registered, then it will match the name
		 * 
		 *    'sap.com.Button'
		 * 
		 * but not
		 * 
		 *    'sap.commons.Button'
		 * 
		 * Note that the empty prefix ('') will always match and thus serves as a fallback for
		 * any search.
		 * 
		 * The prefix can either be given as string or as object which contains the url and a 'final' property.
		 * If 'final' is set to true, overwriting a module prefix is not possible anymore.
		 * @param sModuleName module name to register a path for
		 * @param vUrlPrefix path prefix to register, either a string literal or an object (e.g. {url : 'url/to/res', 'final': true})
		 */
		function registerModulePath(sModuleName:string, vUrlPrefix:string|any);
		/**
		 * Adds all resources from a preload bundle to the preload cache.
		 * 
		 * When a resource exists already in the cache, the new content is ignored.
		 * @param oData Preload bundle
		 */
		function registerPreloadedModules(oData:any);
		/**
		 * Registers an URL prefix for a resource name prefix.
		 * 
		 * Before a resource is loaded, the longest registered prefix of its unified resource name
		 * is searched for and the associated URL prefix is used as a prefix for the request URL.
		 * The remainder of the resource name is attached to the request URL 1:1.
		 * 
		 * The registration and search operates on full name segments only. So when a prefix
		 * 
		 *    'sap/com'  ->  'http://www.sap.com/ui5/resources/'
		 * 
		 * is registered, then it will match the name
		 * 
		 *    'sap/com/Button'
		 * 
		 * but not
		 * 
		 *    'sap/commons/Button'
		 * 
		 * Note that the empty prefix ('') will always match and thus serves as a fallback for
		 * any search.
		 * 
		 * The url prefix can either be given as string or as object which contains the url and a final flag.
		 * If final is set to true, overwriting a resource name prefix is not possible anymore.
		 * @param sResourceNamePrefix in unified resource name syntax
		 * @param vUrlPrefix prefix to use instead of the sResourceNamePrefix, either a string literal or an object (e.g. {url : 'url/to/res', 'final': true})
		 */
		function registerResourcePath(sResourceNamePrefix:string, vUrlPrefix:string|any);
		/**
		 * Removes a whitelist entry for URL validation.
		 * @param iIndex index of entry
		 */
		function removeUrlWhitelist(iIndex:number);
		/**
		 * Ensures that the given module is loaded and executed before execution of the
		 * current script continues.
		 * 
		 * By issuing a call to this method, the caller declares a dependency to the listed modules.
		 * 
		 * Any required and not yet loaded script will be loaded and execute synchronously.
		 * Already loaded modules will be skipped.
		 * @param vModuleName one or more names of modules to be loaded
		 *                              or in case of an object {modName: "...", type: "..."}
		 *                              where modName is the name of the module and the type
		 *                              could be a specific dot separated extension e.g.
		 *                              <code>{modName: "sap.ui.core.Dev", type: "view"}</code>
		 *                              loads <code>sap/ui/core/Dev.view.js</code> and
		 *                              registers as <code>sap.ui.core.Dev.view</code>
		 */
		function require(vModuleName:string|any);
		/**
		 * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle}
		 * using the given URL and locale to determine what to load.
		 * @param mParams Parameters used to initialize the resource bundle
		 * @return A new resource bundle instance or a ECMA Script 6 Promise (in asynchronous case)
		 */
		function resources(mParams?:any): jQuery.sap.util.ResourceBundle|any;
		/**
		 * Serializes the specified XML document into a string representation.
		 * @param oXMLDocument the XML document object to be serialized as string
		 * @return the serialized XML string
		 */
		function serializeXML(oXMLDocument:string): any;
		/**
		 * Sets the bookmark icon for desktop browsers and the icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
		 * 
		 * Only call this method once and call it early when the page is loading: browsers behave differently when the favicon is modified while the page is alive.
		 * Some update the displayed icon inside the browser but use an old icon for bookmarks.
		 * When a favicon is given, any other existing favicon in the document will be removed.
		 * When at least one home icon is given, all existing home icons will be removed and new home icon tags for all four resolutions will be created.
		 * 
		 * The home icons must be in PNG format and given in different sizes for iPad/iPhone with and without retina display.
		 * The favicon is used in the browser and for desktop shortcuts and should optimally be in ICO format:
		 * PNG does not seem to be supported by Internet Explorer and ICO files can contain different image sizes for different usage locations. E.g. a 16x16px version
		 * is used inside browsers.
		 * 
		 * All icons are given in an an object holding icon URLs and other settings. The properties of this object are:
		 * <ul>
		 * <li>phone: a 60x60 pixel version for non-retina iPhones</li>
		 * <li>tablet: a 76x76 pixel version for non-retina iPads</li>
		 * <li>phone@2: a 120x120 pixel version for retina iPhones</li>
		 * <li>tablet@2: a 152x152 pixel version for retina iPads</li>
		 * <li>precomposed: whether the home icons already have some glare effect (otherwise iOS will add it) (default: false)</li>
		 * <li>favicon: the ICO file to be used inside the browser and for desktop shortcuts</li>
		 * </ul>
		 * 
		 * One example is:
		 * <pre>
		 * {
		 *    'phone':'phone-icon_60x60.png',
		 *    'phone@2':'phone-retina_120x120.png',
		 *    'tablet':'tablet-icon_76x76.png',
		 *    'tablet@2':'tablet-retina_152x152.png',
		 *    'precomposed':true,
		 *    'favicon':'desktop.ico'
		 * }
		 * </pre>
		 * If one of the sizes is not given, the largest available alternative image will be used instead for this size.
		 * On Android these icons may or may not be used by the device. Apparently chances can be improved by using icons with glare effect, so the "precomposed" property can be set to "true". Some Android devices may also use the favicon for bookmarks instead of the home icons.</li>
		 * @param oIcons 
		 */
		function setIcons(oIcons:any);
		/**
		 * Sets the "apple-mobile-web-app-capable" and "mobile-web-app-capable" meta information which defines whether the application is loaded
		 * in full screen mode (browser address bar and toolbar are hidden) after the user does "add to home screen" on mobile devices. Currently
		 * this meta tag is only supported by iOS Safari and mobile Chrome from version 31.
		 * 
		 * If the application opens new tabs because of attachments, url and so on, setting this to false will let the user be able to go from the
		 * new tab back to the application tab after the application is added to home screen.
		 * 
		 * Note: this function only has effect when the application runs on iOS Safari and mobile Chrome from version 31.
		 * @param bValue whether the Application will be loaded in full screen mode after added to home screen from iOS Safari or mobile Chrome from version 31.
		 */
		function setMobileWebAppCapable(bValue:boolean);
		/**
		 * Sets an object property to a given value, where the property is
		 * identified by a sequence of names (path).
		 * 
		 * When a <code>oContext</code> is given, the path starts in that object.
		 * Otherwise it starts in the <code>window</code> object that this plugin
		 * has been created for.
		 * 
		 * Note: Although this method internally uses <code>object["key"]</code> to address object
		 *       properties, it does not support all possible characters in a name.
		 *       Especially the dot ('.') is not supported in the individual name segments,
		 *       as it is always interpreted as a name separator.
		 * @param sName a dot separated sequence of names that identify the property
		 * @param vValue value to be set, can have any type
		 * @param oContext the context to execute the search in
		 */
		function setObject(sName:string, vValue:any, oContext?:any);
		/**
		 * Checks whether a given sString starts with sStartString
		 * respecting the case of the strings.
		 * @param sString The string to be checked
		 * @param sStartString The start string to be searched
		 * @return True if sString ends with sEndString
		 */
		function startsWith(sString:string, sStartString:string): boolean;
		/**
		 * Checks whether a given sString starts with sStartString
		 * ignoring the case of the strings.
		 * @param sString The string to be checked
		 * @param sStartString The start string to be searched
		 * @return True if sString ends with sEndString
		 */
		function startsWithIgnoreCase(sString:string, sStartString:string): boolean;
		/**
		 * Creates and returns a pseudo-unique id.
		 * 
		 * No means for detection of overlap with already present or future UIDs.
		 * @return A pseudo-unique id.
		 */
		function uid(): string;
		/**
		 * Unbinds all events for listening with the given callback function.
		 * @param fnCallback Callback function
		 */
		function unbindAnyEvent(fnCallback:any);
		/**
		 * Sorts the given array in-place and removes any duplicates (identified by "===").
		 * 
		 * Use <code>jQuery.unique()</code> for arrays of DOMElements.
		 * @param a An Array of any type
		 * @return Same array as given (for chaining)
		 */
		function unique(a:any[]): any[];
		/**
		 * Validates an URL. Check if it's not a script or other security issue.
		 * 
		 * Split URL into components and check for allowed characters according to RFC3986:
		 * 
		 * <pre>
		 * pct-encoded   = "%" HEXDIG HEXDIG
		 * reserved      = gen-delims / sub-delims
		 * gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
		 * sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
		 *               / "*" / "+" / "," / ";" / "="
		 * unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
		 * pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
		 * 
		 * path          = path-abempty    ; begins with "/" or is empty
		 *               / path-absolute   ; begins with "/" but not "//"
		 *               / path-noscheme   ; begins with a non-colon segment
		 *               / path-rootless   ; begins with a segment
		 *               / path-empty      ; zero characters
		 * 
		 * path-abempty  = *( "/" segment )
		 * path-absolute = "/" [ segment-nz *( "/" segment ) ]
		 * path-noscheme = segment-nz-nc *( "/" segment )
		 * path-rootless = segment-nz *( "/" segment )
		 * path-empty    = 0<pchar>
		 * segment       = *pchar
		 * segment-nz    = 1*pchar
		 * segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
		 *               ; non-zero-length segment without any colon ":"
		 * 
		 * query       = *( pchar / "/" / "?" )
		 * 
		 * fragment    = *( pchar / "/" / "?" )
		 * </pre>
		 * 
		 * When the URI uses the protocol 'mailto:', the address part is additionally checked
		 * against the most commonly used parts of RFC 6068:
		 * 
		 * <pre>
		 * mailtoURI    = "mailto:" [ to ] [ hfields ]
		 * to           = addr-spec *("," addr-spec )
		 * hfields      = "?" hfield *( "&" hfield )
		 * hfield       = hfname "=" hfvalue
		 * hfname       = *qchar
		 * hfvalue      = *qchar
		 * addr-spec    = local-part "@" domain
		 * local-part   = dot-atom-text              // not accepted: quoted-string
		 * domain       = dot-atom-text              // not accepted: "[" *dtext-no-obs "]"
		 * dtext-no-obs = %d33-90 / ; Printable US-ASCII
		 *                %d94-126  ; characters not including
		 *                          ; "[", "]", or "\"
		 * qchar        = unreserved / pct-encoded / some-delims
		 * some-delims  = "!" / "$" / "'" / "(" / ")" / "*"
		 *              / "+" / "," / ";" / ":" / "@"
		 * 
		 * Note:
		 * A number of characters that can appear in <addr-spec> MUST be
		 * percent-encoded.  These are the characters that cannot appear in
		 * a URI according to [STD66] as well as "%" (because it is used for
		 * percent-encoding) and all the characters in gen-delims except "@"
		 * and ":" (i.e., "/", "?", "#", "[", and "]").  Of the characters
		 * in sub-delims, at least the following also have to be percent-
		 * encoded: "&", ";", and "=".  Care has to be taken both when
		 * encoding as well as when decoding to make sure these operations
		 * are applied only once.
		 * 
		 * </pre>
		 * 
		 * When a whitelist has been configured using {@link .addUrlWhitelist addUrlWhitelist},
		 * any URL that passes the syntactic checks above, additionally will be tested against
		 * the content of the whitelist.
		 * @param sUrl 
		 * @return true if valid, false if not valid
		 */
		function validateUrl(sUrl:string);
	}
}
