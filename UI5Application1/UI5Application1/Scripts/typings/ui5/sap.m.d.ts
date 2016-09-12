
declare namespace sap.m {
	class ActionListItem extends sap.m.ListItemBase{
		/**
		 * Constructor for a new ActionListItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId Id for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.ActionListItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.ActionListItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Determines item specific mode
		 * 
		 * ActionListItems are not selectable because they are command controls (like Button or Link) so triggering the associated command, rather than selection is
		 * appropriate to happen upon user action on these items. By overwriting isSelectable (inherited from ListItemBase) we exclude the item from processing
		 * specific to selectable list-items.
		 */
		protected getMode();
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Defines the text that appears in the control.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Defines the text that appears in the control.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.ActionListItem;
	}
	class App extends sap.m.NavContainer{
		/**
		 * Constructor for a new App.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.App with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.NavContainer.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>homeIcon</code>.
		 * 
		 * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
		 * 
		 * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
		 * 
		 * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
		 * 
		 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
		 * 
		 * One example is:
		 * 
		 * app.setHomeIcon({
		 * 'phone':'phone-icon.png',
		 * 'phone@2':'phone-retina.png',
		 * 'tablet':'tablet-icon.png',
		 * 'tablet@2':'tablet-retina.png',
		 * 'icon':'desktop.ico'
		 * });
		 * 
		 * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet.
		 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
		 * 
		 * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
		 * @return Value of property <code>homeIcon</code>
		 */
		 getHomeIcon(): any;
		/**
		 * Returns a metadata object for class sap.m.App.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Sets a new value for property <code>homeIcon</code>.
		 * 
		 * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
		 * 
		 * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
		 * 
		 * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
		 * 
		 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
		 * 
		 * One example is:
		 * 
		 * app.setHomeIcon({
		 * 'phone':'phone-icon.png',
		 * 'phone@2':'phone-retina.png',
		 * 'tablet':'tablet-icon.png',
		 * 'tablet@2':'tablet-retina.png',
		 * 'icon':'desktop.ico'
		 * });
		 * 
		 * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet.
		 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
		 * 
		 * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param oHomeIcon New value for property <code>homeIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHomeIcon(oHomeIcon:any): sap.m.App;
	}
	/**
	 * Available Background Design.
	 */
	type BackgroundDesign = 
	/**
	 * Available Background Design.
	 */
	"Solid" |
	/**
	 * Available Background Design.
	 */
	"Translucent" |
	/**
	 * Available Background Design.
	 */
	"Transparent";
	class Bar extends sap.ui.core.Control{
		/**
		 * Constructor for a new Bar.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Bar;
		/**
		 * Adds some contentLeft to the aggregation <code>contentLeft</code>.
		 * @param oContentLeft the contentLeft to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContentLeft(oContentLeft:sap.ui.core.Control): sap.m.Bar;
		/**
		 * Adds some contentMiddle to the aggregation <code>contentMiddle</code>.
		 * @param oContentMiddle the contentMiddle to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContentMiddle(oContentMiddle:sap.ui.core.Control): sap.m.Bar;
		/**
		 * Adds some contentRight to the aggregation <code>contentRight</code>.
		 * @param oContentRight the contentRight to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContentRight(oContentRight:sap.ui.core.Control): sap.m.Bar;
		/**
		 * Destroys all the contentLeft in the aggregation <code>contentLeft</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContentLeft(): sap.m.Bar;
		/**
		 * Destroys all the contentMiddle in the aggregation <code>contentMiddle</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContentMiddle(): sap.m.Bar;
		/**
		 * Destroys all the contentRight in the aggregation <code>contentRight</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContentRight(): sap.m.Bar;
		/**
		 * Creates a new subclass of class sap.m.Bar with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets content of aggregation <code>contentLeft</code>.
		 * 
		 * Represents the left content area, usually containing a button or an app icon. If it is overlapped by the right content, its content will disappear and the text will show an ellipsis.
		 * @return 
		 */
		 getContentLeft(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>contentMiddle</code>.
		 * 
		 * Represents the middle content area. Controls such as label, segmented buttons or select can be placed here. The content is centrally positioned if there is enough space. If the right or left content overlaps the middle content, the middle content will be centered in the space between the left and the right content.
		 * @return 
		 */
		 getContentMiddle(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>contentRight</code>.
		 * 
		 * Represents the right content area. Controls such as action buttons or search field can be placed here.
		 * @return 
		 */
		 getContentRight(): sap.ui.core.Control[];
		/**
		 * Returns a metadata object for class sap.m.Bar.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>contentLeft</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContentLeft The contentLeft whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContentLeft(oContentLeft:sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>contentMiddle</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContentMiddle The contentMiddle whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContentMiddle(oContentMiddle:sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>contentRight</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContentRight The contentRight whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContentRight(oContentRight:sap.ui.core.Control): number;
		/**
		 * Inserts a contentLeft into the aggregation <code>contentLeft</code>.
		 * @param oContentLeft the contentLeft to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the contentLeft should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the contentLeft is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the contentLeft is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContentLeft(oContentLeft:sap.ui.core.Control, iIndex:number): sap.m.Bar;
		/**
		 * Inserts a contentMiddle into the aggregation <code>contentMiddle</code>.
		 * @param oContentMiddle the contentMiddle to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the contentMiddle should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the contentMiddle is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the contentMiddle is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContentMiddle(oContentMiddle:sap.ui.core.Control, iIndex:number): sap.m.Bar;
		/**
		 * Inserts a contentRight into the aggregation <code>contentRight</code>.
		 * @param oContentRight the contentRight to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the contentRight should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the contentRight is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the contentRight is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContentRight(oContentRight:sap.ui.core.Control, iIndex:number): sap.m.Bar;
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls from the aggregation <code>contentLeft</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContentLeft(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>contentMiddle</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContentMiddle(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>contentRight</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContentRight(): sap.ui.core.Control[];
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes a contentLeft from the aggregation <code>contentLeft</code>.
		 * @param vContentLeft The contentLeft to remove or its index or id
		 * @return The removed contentLeft or <code>null</code>
		 */
		 removeContentLeft(vContentLeft:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a contentMiddle from the aggregation <code>contentMiddle</code>.
		 * @param vContentMiddle The contentMiddle to remove or its index or id
		 * @return The removed contentMiddle or <code>null</code>
		 */
		 removeContentMiddle(vContentMiddle:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a contentRight from the aggregation <code>contentRight</code>.
		 * @param vContentRight The contentRight to remove or its index or id
		 * @return The removed contentRight or <code>null</code>
		 */
		 removeContentRight(vContentRight:number|string|sap.ui.core.Control): sap.ui.core.Control;
	/**
	 * Sets classes and tag according to the context of the page. Possible contexts are header, footer and sub-header.
	 */
	protected applyTagAndContextClassFor: any
	
	/**
	 * Gets the available Bar contexts.
	 */
	protected getContext: any
	
	/**
	 * Gets the HTML tag of the root element.
	 */
	protected getHTMLTag: any
	
	/**
	 * Determines whether the Bar is sensitive to the container context.
	 * 
	 * Implementation of the IBar interface.
	 */
	protected isContextSensitive: any
	
	/**
	 * Sets the HTML tag of the root element.
	 */
	protected setHTMLTag: any
	
	}
	class BusyDialog extends sap.ui.core.Control{
		/**
		 * Constructor for a new BusyDialog.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given.
		 * @param mSettings Initial settings for the new control.
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.BusyDialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>close</code> event of this <code>sap.m.BusyDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.BusyDialog</code> itself.
		 * 
		 * Fires when the busy dialog is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.BusyDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachClose(fnFunction:any, oData?:any, oListener?:any): sap.m.BusyDialog;
		/**
		 * Closes the BusyDialog.
		 * @return 
		 */
		 close(): sap.m.BusyDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>close</code> event of this <code>sap.m.BusyDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachClose(fnFunction:any, oListener:any): sap.m.BusyDialog;
		/**
		 * Creates a new subclass of class sap.m.BusyDialog with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>close</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>cancelPressed</code> of type <code>boolean</code>Indicates if the close events are triggered by a user, pressing a cancel button or because the operation was terminated.
		 * This parameter is set to true if the close event is fired by user interaction.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireClose(mArguments?:any): sap.m.BusyDialog;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>cancelButtonText</code>.
		 * 
		 * The text of the cancel button. The default text is "Cancel" (translated to the respective language).
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>cancelButtonText</code>
		 */
		 getCancelButtonText(): string;
		/**
		 * Gets current value of property <code>customIcon</code>.
		 * 
		 * Icon, used from the BusyIndicator. This icon is invisible in iOS platform and it is density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screens.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>customIcon</code>
		 */
		 getCustomIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>customIconDensityAware</code>.
		 * 
		 * If this is set to <code>false</code>, the source image will be loaded directly without attempting to fetch the density perfect image for high density devices.
		 * By default, this is set to <code>true</code> but then one or more requests are sent trying to get the density perfect version of the image.
		 * 
		 * If bandwidth is the key for the application, set this value to <code>false</code>.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>customIconDensityAware</code>
		 */
		 getCustomIconDensityAware(): boolean;
		/**
		 * Gets current value of property <code>customIconHeight</code>.
		 * 
		 * Height of the provided icon with default value "44px".
		 * 
		 * Default value is <code>44px</code>.
		 * @return Value of property <code>customIconHeight</code>
		 */
		 getCustomIconHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>customIconRotationSpeed</code>.
		 * 
		 * Defines the rotation speed of the given image. If GIF file is used, the speed has to be set to 0. The value is in milliseconds.
		 * 
		 * Default value is <code>1000</code>.
		 * @return Value of property <code>customIconRotationSpeed</code>
		 */
		 getCustomIconRotationSpeed(): number;
		/**
		 * Gets current value of property <code>customIconWidth</code>.
		 * 
		 * Width of the provided icon with default value "44px".
		 * 
		 * Default value is <code>44px</code>.
		 * @return Value of property <code>customIconWidth</code>
		 */
		 getCustomIconWidth(): sap.ui.core.CSSSize;
		/**
		 * Returns a metadata object for class sap.m.BusyDialog.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>showCancelButton</code>.
		 * 
		 * Indicates if the cancel button will be rendered inside the busy dialog. The default value is set to <code>false</code>.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showCancelButton</code>
		 */
		 getShowCancelButton(): boolean;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Optional text displayed inside the dialog.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Sets the title of the BusyDialog. The default value is an empty string.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Opens the BusyDialog.
		 * @return 
		 */
		 open(): sap.m.BusyDialog;
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>cancelButtonText</code>.
		 * 
		 * The text of the cancel button. The default text is "Cancel" (translated to the respective language).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sCancelButtonText New value for property <code>cancelButtonText</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCancelButtonText(sCancelButtonText:string): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>customIcon</code>.
		 * 
		 * Icon, used from the BusyIndicator. This icon is invisible in iOS platform and it is density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screens.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sCustomIcon New value for property <code>customIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIcon(sCustomIcon:sap.ui.core.URI): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>customIconDensityAware</code>.
		 * 
		 * If this is set to <code>false</code>, the source image will be loaded directly without attempting to fetch the density perfect image for high density devices.
		 * By default, this is set to <code>true</code> but then one or more requests are sent trying to get the density perfect version of the image.
		 * 
		 * If bandwidth is the key for the application, set this value to <code>false</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bCustomIconDensityAware New value for property <code>customIconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconDensityAware(bCustomIconDensityAware:boolean): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>customIconHeight</code>.
		 * 
		 * Height of the provided icon with default value "44px".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>44px</code>.
		 * @param sCustomIconHeight New value for property <code>customIconHeight</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconHeight(sCustomIconHeight:sap.ui.core.CSSSize): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>customIconRotationSpeed</code>.
		 * 
		 * Defines the rotation speed of the given image. If GIF file is used, the speed has to be set to 0. The value is in milliseconds.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>1000</code>.
		 * @param iCustomIconRotationSpeed New value for property <code>customIconRotationSpeed</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconRotationSpeed(iCustomIconRotationSpeed:number): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>customIconWidth</code>.
		 * 
		 * Width of the provided icon with default value "44px".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>44px</code>.
		 * @param sCustomIconWidth New value for property <code>customIconWidth</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconWidth(sCustomIconWidth:sap.ui.core.CSSSize): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>showCancelButton</code>.
		 * 
		 * Indicates if the cancel button will be rendered inside the busy dialog. The default value is set to <code>false</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowCancelButton New value for property <code>showCancelButton</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowCancelButton(bShowCancelButton:boolean): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Optional text displayed inside the dialog.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.BusyDialog;
		/**
		 * Sets a new value for property <code>title</code>.
		 * 
		 * Sets the title of the BusyDialog. The default value is an empty string.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sTitle New value for property <code>title</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTitle(sTitle:string): sap.m.BusyDialog;
	}
	class BusyIndicator extends sap.ui.core.Control{
		/**
		 * Constructor for a new BusyIndicator.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.BusyIndicator with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>customIcon</code>.
		 * 
		 * Icon URL if an icon is used as the busy indicator.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>customIcon</code>
		 */
		 getCustomIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>customIconDensityAware</code>.
		 * 
		 * If this is set to false, the src image will be loaded directly without attempting
		 * to fetch the density perfect image for high density device.
		 * By default, this is set to true but then one or more requests are sent to the server,
		 * trying to get the density perfect version of the specified image.
		 * If bandwidth is the key for the application, set this value to false.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>customIconDensityAware</code>
		 */
		 getCustomIconDensityAware(): boolean;
		/**
		 * Gets current value of property <code>customIconHeight</code>.
		 * 
		 * Height of the provided icon. By default 44px are used.
		 * 
		 * Default value is <code>44px</code>.
		 * @return Value of property <code>customIconHeight</code>
		 */
		 getCustomIconHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>customIconRotationSpeed</code>.
		 * 
		 * Defines the rotation speed of the given image.
		 * If a .gif is used, the speed has to be set to 0.
		 * The unit is in ms.
		 * <b>Note:</b> Values are considered valid when greater than or equal to 0.
		 * If invalid value is provided the speed defaults to 0.
		 * 
		 * Default value is <code>1000</code>.
		 * @return Value of property <code>customIconRotationSpeed</code>
		 */
		 getCustomIconRotationSpeed(): number;
		/**
		 * Gets current value of property <code>customIconWidth</code>.
		 * 
		 * Width of the provided icon. By default 44px are used.
		 * 
		 * Default value is <code>44px</code>.
		 * @return Value of property <code>customIconWidth</code>
		 */
		 getCustomIconWidth(): sap.ui.core.CSSSize;
		/**
		 * Returns a metadata object for class sap.m.BusyIndicator.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>size</code>.
		 * 
		 * Defines the size of the busy indicator.
		 * The animation consists of three circles, each of which will be this size.
		 * Therefore the total width of the control amounts to three times the given size.
		 * 
		 * Default value is <code>1rem</code>.
		 * @return Value of property <code>size</code>
		 */
		 getSize(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Defines text to be displayed below the busy indicator.
		 * It can be used to inform the user of the current operation.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR.
		 * Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Sets a new value for property <code>customIcon</code>.
		 * 
		 * Icon URL if an icon is used as the busy indicator.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sCustomIcon New value for property <code>customIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIcon(sCustomIcon:sap.ui.core.URI): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>customIconDensityAware</code>.
		 * 
		 * If this is set to false, the src image will be loaded directly without attempting
		 * to fetch the density perfect image for high density device.
		 * By default, this is set to true but then one or more requests are sent to the server,
		 * trying to get the density perfect version of the specified image.
		 * If bandwidth is the key for the application, set this value to false.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bCustomIconDensityAware New value for property <code>customIconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconDensityAware(bCustomIconDensityAware:boolean): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>customIconHeight</code>.
		 * 
		 * Height of the provided icon. By default 44px are used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>44px</code>.
		 * @param sCustomIconHeight New value for property <code>customIconHeight</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconHeight(sCustomIconHeight:sap.ui.core.CSSSize): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>customIconRotationSpeed</code>.
		 * 
		 * Defines the rotation speed of the given image.
		 * If a .gif is used, the speed has to be set to 0.
		 * The unit is in ms.
		 * <b>Note:</b> Values are considered valid when greater than or equal to 0.
		 * If invalid value is provided the speed defaults to 0.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>1000</code>.
		 * @param iCustomIconRotationSpeed New value for property <code>customIconRotationSpeed</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconRotationSpeed(iCustomIconRotationSpeed:number): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>customIconWidth</code>.
		 * 
		 * Width of the provided icon. By default 44px are used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>44px</code>.
		 * @param sCustomIconWidth New value for property <code>customIconWidth</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomIconWidth(sCustomIconWidth:sap.ui.core.CSSSize): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>size</code>.
		 * 
		 * Defines the size of the busy indicator.
		 * The animation consists of three circles, each of which will be this size.
		 * Therefore the total width of the control amounts to three times the given size.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>1rem</code>.
		 * @param sSize New value for property <code>size</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSize(sSize:sap.ui.core.CSSSize): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Defines text to be displayed below the busy indicator.
		 * It can be used to inform the user of the current operation.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.BusyIndicator;
		/**
		 * Sets a new value for property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR.
		 * Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @param sTextDirection New value for property <code>textDirection</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextDirection(sTextDirection:sap.ui.core.TextDirection): sap.m.BusyIndicator;
	}
	class Button extends sap.ui.core.Control{
		/**
		 * Constructor for a new Button.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Button;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Button;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.m.Button</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Button</code> itself.
		 * 
		 * Event is fired when the user clicks on the control.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Button</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachPress(fnFunction:any, oData?:any, oListener?:any): sap.m.Button;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.m.Button</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachPress(fnFunction:any, oListener:any): sap.m.Button;
		/**
		 * Creates a new subclass of class sap.m.Button with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>press</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected firePress(mArguments?:any): sap.m.Button;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>activeIcon</code>.
		 * 
		 * The source property of an alternative icon for the active (depressed) state of the button.
		 * Both active and default icon properties should be defined and have the same type: image or icon font.
		 * If the <code>icon</code> property is not set or has a different type, the active icon is not displayed.
		 * @return Value of property <code>activeIcon</code>
		 */
		 getActiveIcon(): sap.ui.core.URI;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Icon to be displayed as graphical element within the button. This can be an image or an icon from the icon font.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>iconDensityAware</code>.
		 * 
		 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
		 * 
		 * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconDensityAware</code>
		 */
		 getIconDensityAware(): boolean;
		/**
		 * Gets current value of property <code>iconFirst</code>.
		 * 
		 * If set to true (default), the display sequence is 1. icon 2. control text
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconFirst</code>
		 */
		 getIconFirst(): boolean;
		/**
		 * Returns a metadata object for class sap.m.Button.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Defines to which DOM reference the Popup should be docked
		 * @return the DOM reference that Popup should dock to
		 */
		protected getPopupAnchorDomRef(): any;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Button text
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * Type of a button (e.g. Default, Accept, Reject, Back, etc.)
		 * 
		 * Default value is <code>Default</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.ButtonType;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Defines the width of the button.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>activeIcon</code>.
		 * 
		 * The source property of an alternative icon for the active (depressed) state of the button.
		 * Both active and default icon properties should be defined and have the same type: image or icon font.
		 * If the <code>icon</code> property is not set or has a different type, the active icon is not displayed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sActiveIcon New value for property <code>activeIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActiveIcon(sActiveIcon:sap.ui.core.URI): sap.m.Button;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.Button;
		/**
		 * Property setter for the icon
		 * @param sIcon new value of the Icon property
		 * @return this to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.m.Button;
		/**
		 * Sets a new value for property <code>iconDensityAware</code>.
		 * 
		 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
		 * 
		 * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconDensityAware New value for property <code>iconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconDensityAware(bIconDensityAware:boolean): sap.m.Button;
		/**
		 * Sets a new value for property <code>iconFirst</code>.
		 * 
		 * If set to true (default), the display sequence is 1. icon 2. control text
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconFirst New value for property <code>iconFirst</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconFirst(bIconFirst:boolean): sap.m.Button;
		/**
		 * Property setter for the text
		 * @param sText new value of the Text attribute
		 * @return this to allow method chaining
		 */
		 setText(sText:string): sap.m.Button;
		/**
		 * Sets a new value for property <code>type</code>.
		 * 
		 * Type of a button (e.g. Default, Accept, Reject, Back, etc.)
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Default</code>.
		 * @param sType New value for property <code>type</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setType(sType:sap.m.ButtonType): sap.m.Button;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Defines the width of the button.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Button;
	}
	/**
	 * Different types for a button (predefined types)
	 */
	type ButtonType = 
	/**
	 * Different types for a button (predefined types)
	 */
	"Accept" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Back" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Default" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Emphasized" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Reject" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Transparent" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Unstyled" |
	/**
	 * Different types for a button (predefined types)
	 */
	"Up";
	class Carousel extends sap.ui.core.Control{
		/**
		 * Constructor for a new Carousel.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some page to the aggregation <code>pages</code>.
		 * @param oPage the page to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addPage(oPage:sap.ui.core.Control): sap.m.Carousel;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>pageChanged</code> event of this <code>sap.m.Carousel</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Carousel</code> itself.
		 * 
		 * This event is fired after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachPageChanged(fnFunction:any, oData?:any, oListener?:any): sap.m.Carousel;
		/**
		 * Destroys all the pages in the aggregation <code>pages</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyPages(): sap.m.Carousel;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>pageChanged</code> event of this <code>sap.m.Carousel</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachPageChanged(fnFunction:any, oListener:any): sap.m.Carousel;
		/**
		 * Creates a new subclass of class sap.m.Carousel with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>pageChanged</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>oldActivePageId</code> of type <code>string</code>Id of the page which was active before the page change.</li>
		 * <li><code>newActivePageId</code> of type <code>string</code>Id of the page which is active after the page change.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected firePageChanged(mArguments?:any): sap.m.Carousel;
		/**
		 * ID of the element which is the current target of the association <code>activePage</code>, or <code>null</code>.
		 * @return 
		 */
		 getActivePage(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>height</code>.
		 * 
		 * The height of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>height</code>
		 */
		 getHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>loop</code>.
		 * 
		 * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>loop</code>
		 */
		 getLoop(): boolean;
		/**
		 * Returns a metadata object for class sap.m.Carousel.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>pageIndicatorPlacement</code>.
		 * 
		 * Defines where the carousel's page indicator is displayed. Possible values are sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. Other values are ignored and the default value will be applied. The default value is sap.m.PlacementType.Bottom.
		 * 
		 * Default value is <code>Bottom</code>.
		 * @return Value of property <code>pageIndicatorPlacement</code>
		 */
		 getPageIndicatorPlacement(): sap.m.PlacementType;
		/**
		 * Gets content of aggregation <code>pages</code>.
		 * 
		 * The content which the carousel displays.
		 * @return 
		 */
		 getPages(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>showPageIndicator</code>.
		 * 
		 * Show or hide carousel's page indicator.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showPageIndicator</code>
		 */
		 getShowPageIndicator(): boolean;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * The width of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>pages</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oPage The page whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfPage(oPage:sap.ui.core.Control): number;
		/**
		 * Inserts a page into the aggregation <code>pages</code>.
		 * @param oPage the page to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the page should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the page is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertPage(oPage:sap.ui.core.Control, iIndex:number): sap.m.Carousel;
		/**
		 * Call this method to display the next page (corresponds to a swipe right). Returns 'this' for method chaining.
		 * @return 
		 */
		 next(): sap.m.Carousel;
		/**
		 * Call this method to display the previous page (corresponds to a swipe left). Returns 'this' for method chaining.
		 * @return 
		 */
		 previous(): sap.m.Carousel;
		/**
		 * Removes all the controls from the aggregation <code>pages</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllPages(): sap.ui.core.Control[];
		/**
		 * Removes a page from the aggregation <code>pages</code>.
		 * @param vPage The page to remove or its index or id
		 * @return The removed page or <code>null</code>
		 */
		 removePage(vPage:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets the associated <code>activePage</code>.
		 * @param oActivePage ID of an element which becomes the new target of this activePage association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActivePage(oActivePage:sap.ui.core.ID|sap.ui.core.Control): sap.m.Carousel;
		/**
		 * Sets a new value for property <code>height</code>.
		 * 
		 * The height of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sHeight New value for property <code>height</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeight(sHeight:sap.ui.core.CSSSize): sap.m.Carousel;
		/**
		 * Sets a new value for property <code>loop</code>.
		 * 
		 * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bLoop New value for property <code>loop</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setLoop(bLoop:boolean): sap.m.Carousel;
		/**
		 * Sets a new value for property <code>pageIndicatorPlacement</code>.
		 * 
		 * Defines where the carousel's page indicator is displayed. Possible values are sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. Other values are ignored and the default value will be applied. The default value is sap.m.PlacementType.Bottom.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Bottom</code>.
		 * @param sPageIndicatorPlacement New value for property <code>pageIndicatorPlacement</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setPageIndicatorPlacement(sPageIndicatorPlacement:sap.m.PlacementType): sap.m.Carousel;
		/**
		 * Sets a new value for property <code>showPageIndicator</code>.
		 * 
		 * Show or hide carousel's page indicator.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowPageIndicator New value for property <code>showPageIndicator</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowPageIndicator(bShowPageIndicator:boolean): sap.m.Carousel;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * The width of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Carousel;
	}
	class CheckBox extends sap.ui.core.Control{
		/**
		 * Constructor for a new CheckBox.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId The ID for the new control, generated automatically if no ID is given
		 * @param mSettings The Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.CheckBox;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.CheckBox;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.m.CheckBox</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.CheckBox</code> itself.
		 * 
		 * Event is triggered when the control status is changed by the user by selecting or deselecting the checkbox.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.CheckBox</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.m.CheckBox;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.m.CheckBox</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.m.CheckBox;
		/**
		 * Creates a new subclass of class sap.m.CheckBox with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>select</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>selected</code> of type <code>boolean</code>Checks whether the CheckBox is marked or not .</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.m.CheckBox;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>activeHandling</code>.
		 * 
		 * Flag to switch on activeHandling, when it is switched off, there will be no visual changes on active state. Default value is 'true'
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>activeHandling</code>
		 */
		 getActiveHandling(): boolean;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Disables the Checkbox. Disabled controls are not interactive and are rendered differently according to the theme.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Returns a metadata object for class sap.m.CheckBox.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>name</code>.
		 * 
		 * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
		 * @return Value of property <code>name</code>
		 */
		 getName(): string;
		/**
		 * Gets current value of property <code>selected</code>.
		 * 
		 * Stores the state of the checkbox whether it is selected or not.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>selected</code>
		 */
		 getSelected(): boolean;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Defines the text displayed next to the checkbox
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textAlign</code>.
		 * 
		 * Aligns the text of the checkbox. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
		 * 
		 * Default value is <code>Begin</code>.
		 * @return Value of property <code>textAlign</code>
		 */
		 getTextAlign(): sap.ui.core.TextAlign;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Width of the checkbox`s label
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>activeHandling</code>.
		 * 
		 * Flag to switch on activeHandling, when it is switched off, there will be no visual changes on active state. Default value is 'true'
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bActiveHandling New value for property <code>activeHandling</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActiveHandling(bActiveHandling:boolean): sap.m.CheckBox;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Disables the Checkbox. Disabled controls are not interactive and are rendered differently according to the theme.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.CheckBox;
		/**
		 * Sets a new value for property <code>name</code>.
		 * 
		 * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sName New value for property <code>name</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setName(sName:string): sap.m.CheckBox;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Defines the text displayed next to the checkbox
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.CheckBox;
		/**
		 * Sets a new value for property <code>textAlign</code>.
		 * 
		 * Aligns the text of the checkbox. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Begin</code>.
		 * @param sTextAlign New value for property <code>textAlign</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextAlign(sTextAlign:sap.ui.core.TextAlign): sap.m.CheckBox;
		/**
		 * Sets a new value for property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @param sTextDirection New value for property <code>textDirection</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextDirection(sTextDirection:sap.ui.core.TextDirection): sap.m.CheckBox;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Width of the checkbox`s label
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.CheckBox;
	}
	class CustomListItem extends sap.m.ListItemBase{
		/**
		 * Constructor for a new CustomListItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.CustomListItem;
		/**
		 * Binds aggregation <code>content</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>.
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindContent(oBindingInfo:any): sap.m.CustomListItem;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.CustomListItem;
		/**
		 * Creates a new subclass of class sap.m.CustomListItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * The content of this list item
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Returns a metadata object for class sap.m.CustomListItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.CustomListItem;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Unbinds aggregation <code>content</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindContent(): sap.m.CustomListItem;
	}
	class Dialog extends sap.ui.core.Control{
		/**
		 * Constructor for a new Dialog.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Returns the custom header instance when the customHeader aggregation is set. Otherwise it returns the internal managed
		 * header instance. This method can be called within composite controls which use sap.m.Dialog inside.
		 */
		protected _getAnyHeader();
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Dialog;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Dialog;
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.Dialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterClose</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Dialog</code> itself.
		 * 
		 * This event will be fired after the dialog is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterClose(fnFunction:any, oData?:any, oListener?:any): sap.m.Dialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterOpen</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Dialog</code> itself.
		 * 
		 * This event will be fired after the dialog is opened.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.Dialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>beforeClose</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Dialog</code> itself.
		 * 
		 * This event will be fired before the dialog is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachBeforeClose(fnFunction:any, oData?:any, oListener?:any): sap.m.Dialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>beforeOpen</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Dialog</code> itself.
		 * 
		 * This event will be fired before the dialog is opened.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachBeforeOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.Dialog;
		/**
		 * Close the dialog.
		 */
		 close();
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.Dialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterClose</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterClose(fnFunction:any, oListener:any): sap.m.Dialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterOpen</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterOpen(fnFunction:any, oListener:any): sap.m.Dialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>beforeClose</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachBeforeClose(fnFunction:any, oListener:any): sap.m.Dialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>beforeOpen</code> event of this <code>sap.m.Dialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachBeforeOpen(fnFunction:any, oListener:any): sap.m.Dialog;
		/**
		 * Creates a new subclass of class sap.m.Dialog with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>afterClose</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>origin</code> of type <code>sap.m.Button</code>This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterClose(mArguments?:any): sap.m.Dialog;
		/**
		 * Fires event <code>afterOpen</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterOpen(mArguments?:any): sap.m.Dialog;
		/**
		 * Fires event <code>beforeClose</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>origin</code> of type <code>sap.m.Button</code>This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireBeforeClose(mArguments?:any): sap.m.Dialog;
		/**
		 * Fires event <code>beforeOpen</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireBeforeOpen(mArguments?:any): sap.m.Dialog;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * The content inside the dialog.<br/><b>Note:</b> When the content of the <code>Dialog</code> is comprised of controls that use <code>position: absolute</code>, such as <code>SplitContainer</code>, the dialog has to have either <code>stretch: true</code> or <code>contentHeight</code> set.
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Icon displayed in the dialog's header. This icon is invisible on the iOS platform and it's density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Returns a metadata object for class sap.m.Dialog.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Title text appears in the dialog header.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * The type of the dialog. In theme sap_bluecrystal, the type "message" will limit the dialog's width within 480px on tablet and desktop.
		 * 
		 * Default value is <code>Standard</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.DialogType;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.Dialog;
		/**
		 * Open the dialog.
		 */
		 open();
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>icon</code>.
		 * 
		 * Icon displayed in the dialog's header. This icon is invisible on the iOS platform and it's density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sIcon New value for property <code>icon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.m.Dialog;
		/**
		 * Sets a new value for property <code>title</code>.
		 * 
		 * Title text appears in the dialog header.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sTitle New value for property <code>title</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTitle(sTitle:string): sap.m.Dialog;
		/**
		 * Sets a new value for property <code>type</code>.
		 * 
		 * The type of the dialog. In theme sap_bluecrystal, the type "message" will limit the dialog's width within 480px on tablet and desktop.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Standard</code>.
		 * @param sType New value for property <code>type</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setType(sType:sap.m.DialogType): sap.m.Dialog;
	}
	/**
	 * Enum for the type of sap.m.Dialog control.
	 */
	type DialogType = 
	/**
	 * Enum for the type of sap.m.Dialog control.
	 */
	"Message" |
	/**
	 * Enum for the type of sap.m.Dialog control.
	 */
	"Standard";
	class DisplayListItem extends sap.m.ListItemBase{
		/**
		 * Constructor for a new DisplayListItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId Id for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.DisplayListItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>label</code>.
		 * 
		 * Defines the label of the list item.
		 * @return Value of property <code>label</code>
		 */
		 getLabel(): string;
		/**
		 * Returns a metadata object for class sap.m.DisplayListItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>value</code>.
		 * 
		 * Defines the value of the list item.
		 * @return Value of property <code>value</code>
		 */
		 getValue(): string;
		/**
		 * Sets a new value for property <code>label</code>.
		 * 
		 * Defines the label of the list item.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sLabel New value for property <code>label</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setLabel(sLabel:string): sap.m.DisplayListItem;
		/**
		 * Sets a new value for property <code>value</code>.
		 * 
		 * Defines the value of the list item.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sValue New value for property <code>value</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setValue(sValue:string): sap.m.DisplayListItem;
	}
	/**
	 * Enum for the state of sap.m.DraftIndicator control.
	 */
	type DraftIndicatorState = 
	/**
	 * Enum for the state of sap.m.DraftIndicator control.
	 */
	"Clear" |
	/**
	 * Enum for the state of sap.m.DraftIndicator control.
	 */
	"Saved" |
	/**
	 * Enum for the state of sap.m.DraftIndicator control.
	 */
	"Saving";
	class FacetFilter extends sap.ui.core.Control{
		/**
		 * Constructor for a new FacetFilter.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some list to the aggregation <code>lists</code>.
		 * @param oList the list to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addList(oList:sap.m.FacetFilterList): sap.m.FacetFilter;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>confirm</code> event of this <code>sap.m.FacetFilter</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.FacetFilter</code> itself.
		 * 
		 * Fired when the user confirms filter selection.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilter</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachConfirm(fnFunction:any, oData?:any, oListener?:any): sap.m.FacetFilter;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>reset</code> event of this <code>sap.m.FacetFilter</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.FacetFilter</code> itself.
		 * 
		 * Fired when the Reset button is pressed to inform that all FacetFilterLists need to be reset.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilter</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachReset(fnFunction:any, oData?:any, oListener?:any): sap.m.FacetFilter;
		/**
		 * Destroys all the lists in the aggregation <code>lists</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyLists(): sap.m.FacetFilter;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>confirm</code> event of this <code>sap.m.FacetFilter</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachConfirm(fnFunction:any, oListener:any): sap.m.FacetFilter;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>reset</code> event of this <code>sap.m.FacetFilter</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachReset(fnFunction:any, oListener:any): sap.m.FacetFilter;
		/**
		 * Creates a new subclass of class sap.m.FacetFilter with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>confirm</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireConfirm(mArguments?:any): sap.m.FacetFilter;
		/**
		 * Fires event <code>reset</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireReset(mArguments?:any): sap.m.FacetFilter;
		/**
		 * Gets current value of property <code>liveSearch</code>.
		 * 
		 * Enables/disables live search on all search fields except for the FacetFilterList search.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>liveSearch</code>
		 */
		 getLiveSearch(): boolean;
		/**
		 * Returns a metadata object for class sap.m.FacetFilter.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>showPersonalization</code>.
		 * 
		 * If set to <code>true</code> and the FacetFilter type is <code>Simple</code>, then the Add Facet icon will be displayed and each facet button will also have a Facet Remove icon displayed beside it, allowing the user to deactivate the facet.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showPersonalization</code>
		 */
		 getShowPersonalization(): boolean;
		/**
		 * Gets current value of property <code>showPopoverOKButton</code>.
		 * 
		 * If set to <code>true</code>, an OK button is displayed for every FacetFilterList popover. This button allows the user to close the popover from within the popover instead of having to click outside of it.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showPopoverOKButton</code>
		 */
		 getShowPopoverOKButton(): boolean;
		/**
		 * Gets current value of property <code>showReset</code>.
		 * 
		 * Shows/hides the FacetFilter Reset button.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showReset</code>
		 */
		 getShowReset(): boolean;
		/**
		 * Gets current value of property <code>showSummaryBar</code>.
		 * 
		 * Shows the summary bar instead of the FacetFilter buttons bar when set to <code>true</code>.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showSummaryBar</code>
		 */
		 getShowSummaryBar(): boolean;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * Defines the default appearance of the FacetFilter on the device. Possible values are <code>Simple</code> (default) and <code>Light</code>.
		 * 
		 * Default value is <code>Simple</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.FacetFilterType;
		/**
		 * Checks for the provided <code>sap.m.FacetFilterList</code> in the aggregation <code>lists</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oList The list whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfList(oList:sap.m.FacetFilterList): number;
		/**
		 * Inserts a list into the aggregation <code>lists</code>.
		 * @param oList the list to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the list should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the list is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the list is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertList(oList:sap.m.FacetFilterList, iIndex:number): sap.m.FacetFilter;
		/**
		 * Opens the FacetFilter dialog.
		 * @return this pointer for chaining
		 */
		 openFilterDialog(): sap.m.FacetFilter;
		/**
		 * Removes all the controls from the aggregation <code>lists</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllLists(): sap.m.FacetFilterList[];
		/**
		 * Sets a new value for property <code>showPersonalization</code>.
		 * 
		 * If set to <code>true</code> and the FacetFilter type is <code>Simple</code>, then the Add Facet icon will be displayed and each facet button will also have a Facet Remove icon displayed beside it, allowing the user to deactivate the facet.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowPersonalization New value for property <code>showPersonalization</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowPersonalization(bShowPersonalization:boolean): sap.m.FacetFilter;
		/**
		 * Sets a new value for property <code>showPopoverOKButton</code>.
		 * 
		 * If set to <code>true</code>, an OK button is displayed for every FacetFilterList popover. This button allows the user to close the popover from within the popover instead of having to click outside of it.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowPopoverOKButton New value for property <code>showPopoverOKButton</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowPopoverOKButton(bShowPopoverOKButton:boolean): sap.m.FacetFilter;
	}
	class FacetFilterItem extends sap.m.ListItemBase{
		/**
		 * Constructor for a new FacetFilterItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.FacetFilterItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>key</code>.
		 * 
		 * Can be used as input for subsequent actions.
		 * @return Value of property <code>key</code>
		 */
		 getKey(): string;
		/**
		 * Returns a metadata object for class sap.m.FacetFilterItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Determines the text to be displayed for the item.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Sets a new value for property <code>key</code>.
		 * 
		 * Can be used as input for subsequent actions.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sKey New value for property <code>key</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setKey(sKey:string): sap.m.FacetFilterItem;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Determines the text to be displayed for the item.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.FacetFilterItem;
	}
	class FacetFilterList extends sap.m.List{
		/**
		 * Constructor for a new FacetFilterList.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>listClose</code> event of this <code>sap.m.FacetFilterList</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.FacetFilterList</code> itself.
		 * 
		 * Triggered after the list of items is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilterList</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachListClose(fnFunction:any, oData?:any, oListener?:any): sap.m.FacetFilterList;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>listOpen</code> event of this <code>sap.m.FacetFilterList</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.FacetFilterList</code> itself.
		 * 
		 * Fired before the filter list is opened.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilterList</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachListOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.FacetFilterList;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>listClose</code> event of this <code>sap.m.FacetFilterList</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachListClose(fnFunction:any, oListener:any): sap.m.FacetFilterList;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>listOpen</code> event of this <code>sap.m.FacetFilterList</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachListOpen(fnFunction:any, oListener:any): sap.m.FacetFilterList;
		/**
		 * Creates a new subclass of class sap.m.FacetFilterList with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.List.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>listClose</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>selectedItems</code> of type <code>sap.m.FacetFilterItem[]</code>Array of selected items. Items returned are only copies and therefore can only be used to read properties, not set them.</li>
		 * <li><code>allSelected</code> of type <code>boolean</code><code>True</code> if the select All checkbox is selected. This will be <code>false</code> if all items are actually selected (every FacetFilterItem.selected == true). In that case selectedItems will contain all selected items.</li>
		 * <li><code>selectedKeys</code> of type <code>object</code>Associative array containing the keys of selected FacetFilterItems. Unlike the selectedItems parameter, this contains only the keys for all selected items, not the items themselves. Being an associative array, each object property is the FacetFilterItem key value and the value of the property is the FacetFilterItem text.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireListClose(mArguments?:any): sap.m.FacetFilterList;
		/**
		 * Fires event <code>listOpen</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireListOpen(mArguments?:any): sap.m.FacetFilterList;
		/**
		 * Gets current value of property <code>active</code>.
		 * 
		 * Indicates that the list is displayed as a button when the FacetFilter type is set to <code>Simple</code>.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>active</code>
		 */
		 getActive(): boolean;
		/**
		 * Gets current value of property <code>allCount</code>.
		 * 
		 * Determines the number of objects that match this item in the target data set when all filter items are selected.
		 * @return Value of property <code>allCount</code>
		 */
		 getAllCount(): number;
		/**
		 * Gets current value of property <code>dataType</code>.
		 * 
		 * FacetFilterList data type. Only String data type will provide search function.
		 * 
		 * Default value is <code>String</code>.
		 * @return Value of property <code>dataType</code>
		 */
		 getDataType(): sap.m.FacetFilterListDataType;
		/**
		 * Gets current value of property <code>enableCaseInsensitiveSearch</code>.
		 * 
		 * If set to <code>true</code>, enables case-insensitive search for OData.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>enableCaseInsensitiveSearch</code>
		 */
		 getEnableCaseInsensitiveSearch(): boolean;
		/**
		 * Gets current value of property <code>key</code>.
		 * 
		 * Unique identifier for this filter list.
		 * @return Value of property <code>key</code>
		 */
		 getKey(): string;
		/**
		 * Returns a metadata object for class sap.m.FacetFilterList.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>sequence</code>.
		 * 
		 * Sequence that determines the order in which FacetFilterList is shown on the FacetFilter. Lists are rendered by ascending order of sequence.
		 * 
		 * Default value is <code>-1</code>.
		 * @return Value of property <code>sequence</code>
		 */
		 getSequence(): number;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Defines the title of the facet. The facet title is displayed on the facet button when the FacetFilter type is set to <code>Simple</code>. It is also displayed as a list item in the facet page of the dialog.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Gets current value of property <code>wordWrap</code>.
		 * 
		 * If set to <code>true</code>, the item text wraps when it is too long.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>wordWrap</code>
		 */
		 getWordWrap(): boolean;
		/**
		 * Sets a new value for property <code>active</code>.
		 * 
		 * Indicates that the list is displayed as a button when the FacetFilter type is set to <code>Simple</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bActive New value for property <code>active</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActive(bActive:boolean): sap.m.FacetFilterList;
		/**
		 * Sets a new value for property <code>allCount</code>.
		 * 
		 * Determines the number of objects that match this item in the target data set when all filter items are selected.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param iAllCount New value for property <code>allCount</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setAllCount(iAllCount:number): sap.m.FacetFilterList;
		/**
		 * Sets a new value for property <code>dataType</code>.
		 * 
		 * FacetFilterList data type. Only String data type will provide search function.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>String</code>.
		 * @param sDataType New value for property <code>dataType</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDataType(sDataType:sap.m.FacetFilterListDataType): sap.m.FacetFilterList;
		/**
		 * Sets a new value for property <code>enableCaseInsensitiveSearch</code>.
		 * 
		 * If set to <code>true</code>, enables case-insensitive search for OData.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bEnableCaseInsensitiveSearch New value for property <code>enableCaseInsensitiveSearch</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnableCaseInsensitiveSearch(bEnableCaseInsensitiveSearch:boolean): sap.m.FacetFilterList;
		/**
		 * Sets a new value for property <code>key</code>.
		 * 
		 * Unique identifier for this filter list.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sKey New value for property <code>key</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setKey(sKey:string): sap.m.FacetFilterList;
		/**
		 * Overrides to allow only MultiSelect and SingleSelectMaster list modes.
		 * If an invalid mode is given then the mode will not be changed.
		 * @param mode The list mode
		 */
		 setMode(mode:sap.m.ListMode);
		/**
		 * Sets a new value for property <code>sequence</code>.
		 * 
		 * Sequence that determines the order in which FacetFilterList is shown on the FacetFilter. Lists are rendered by ascending order of sequence.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>-1</code>.
		 * @param iSequence New value for property <code>sequence</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSequence(iSequence:number): sap.m.FacetFilterList;
		/**
		 * Sets a new value for property <code>wordWrap</code>.
		 * 
		 * If set to <code>true</code>, the item text wraps when it is too long.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bWordWrap New value for property <code>wordWrap</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWordWrap(bWordWrap:boolean): sap.m.FacetFilterList;
	}
	/**
	 * FacetFilterList data types.
	 */
	type FacetFilterListDataType = 
	/**
	 * FacetFilterList data types.
	 */
	"Boolean" |
	/**
	 * FacetFilterList data types.
	 */
	"Date" |
	/**
	 * FacetFilterList data types.
	 */
	"DateTime" |
	/**
	 * FacetFilterList data types.
	 */
	"Float" |
	/**
	 * FacetFilterList data types.
	 */
	"Integer" |
	/**
	 * FacetFilterList data types.
	 */
	"String" |
	/**
	 * FacetFilterList data types.
	 */
	"Time";
	/**
	 * Used by the FacetFilter control to adapt its design according to type.
	 */
	type FacetFilterType = 
	/**
	 * Used by the FacetFilter control to adapt its design according to type.
	 */
	"Light" |
	/**
	 * Used by the FacetFilter control to adapt its design according to type.
	 */
	"Simple";
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	type FlexAlignContent = 
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"Center" |
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"End" |
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"Inherit" |
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"SpaceAround" |
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"SpaceBetween" |
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"Start" |
	/**
	 * Available options for the layout of container lines along the cross axis of the flexbox layout. <b>Note:</b> This property has no effect in Internet Explorer 10.
	 */
	"Stretch";
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	type FlexAlignItems = 
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	"Baseline" |
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	"Center" |
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	"End" |
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	"Inherit" |
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	"Start" |
	/**
	 * Available options for the layout of all elements along the cross axis of the flexbox layout.
	 */
	"Stretch";
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	type FlexAlignSelf = 
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"Auto" |
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"Baseline" |
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"Center" |
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"End" |
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"Inherit" |
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"Start" |
	/**
	 * Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
	 */
	"Stretch";
	class FlexBox extends sap.ui.core.Control{
		/**
		 * Constructor for a new <code>sap.m.FlexBox</code>.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some item to the aggregation <code>items</code>.
		 * @param oItem the item to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addItem(oItem:sap.ui.core.Control): sap.m.FlexBox;
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.m.FlexBox;
		/**
		 * Creates a new subclass of class sap.m.FlexBox with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>alignItems</code>.
		 * 
		 * Determines the layout behavior of items along the cross-axis. "Baseline" is not supported in Internet Explorer 10.
		 * 
		 * Default value is <code>Stretch</code>.
		 * @return Value of property <code>alignItems</code>
		 */
		 getAlignItems(): sap.m.FlexAlignItems;
		/**
		 * Gets current value of property <code>direction</code>.
		 * 
		 * Determines the direction of the layout of child elements.
		 * 
		 * Default value is <code>Row</code>.
		 * @return Value of property <code>direction</code>
		 */
		 getDirection(): sap.m.FlexDirection;
		/**
		 * Gets current value of property <code>displayInline</code>.
		 * 
		 * Determines whether the <code>sap.m.FlexBox</code> is in block or inline mode.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>displayInline</code>
		 */
		 getDisplayInline(): boolean;
		/**
		 * Gets current value of property <code>fitContainer</code>.
		 * 
		 * Determines whether the <code>sap.m.FlexBox</code> will be sized to completely fill its container. If the <code>sap.m.FlexBox</code> is inserted into a Page, the property 'enableScrolling' of the Page needs to be set to 'false' for the FlexBox to fit the entire viewport.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>fitContainer</code>
		 */
		 getFitContainer(): boolean;
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * Flex items within the flexible box layout
		 * @return 
		 */
		 getItems(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>justifyContent</code>.
		 * 
		 * Determines the layout behavior along the main axis.
		 * 
		 * Default value is <code>Start</code>.
		 * @return Value of property <code>justifyContent</code>
		 */
		 getJustifyContent(): sap.m.FlexJustifyContent;
		/**
		 * Returns a metadata object for class sap.m.FlexBox.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>renderType</code>.
		 * 
		 * Determines whether the layout is rendered as a series of divs or as an unordered list (ul)
		 * 
		 * Default value is <code>Div</code>.
		 * @return Value of property <code>renderType</code>
		 */
		 getRenderType(): sap.m.FlexRendertype;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.ui.core.Control): number;
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.ui.core.Control, iIndex:number): sap.m.FlexBox;
		/**
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.ui.core.Control[];
		/**
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>alignItems</code>.
		 * 
		 * Determines the layout behavior of items along the cross-axis. "Baseline" is not supported in Internet Explorer 10.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Stretch</code>.
		 * @param sAlignItems New value for property <code>alignItems</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setAlignItems(sAlignItems:sap.m.FlexAlignItems): sap.m.FlexBox;
		/**
		 * Sets a new value for property <code>direction</code>.
		 * 
		 * Determines the direction of the layout of child elements.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Row</code>.
		 * @param sDirection New value for property <code>direction</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDirection(sDirection:sap.m.FlexDirection): sap.m.FlexBox;
		/**
		 * Sets a new value for property <code>displayInline</code>.
		 * 
		 * Determines whether the <code>sap.m.FlexBox</code> is in block or inline mode.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bDisplayInline New value for property <code>displayInline</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDisplayInline(bDisplayInline:boolean): sap.m.FlexBox;
		/**
		 * Sets a new value for property <code>fitContainer</code>.
		 * 
		 * Determines whether the <code>sap.m.FlexBox</code> will be sized to completely fill its container. If the <code>sap.m.FlexBox</code> is inserted into a Page, the property 'enableScrolling' of the Page needs to be set to 'false' for the FlexBox to fit the entire viewport.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bFitContainer New value for property <code>fitContainer</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFitContainer(bFitContainer:boolean): sap.m.FlexBox;
		/**
		 * Sets a new value for property <code>justifyContent</code>.
		 * 
		 * Determines the layout behavior along the main axis.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Start</code>.
		 * @param sJustifyContent New value for property <code>justifyContent</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setJustifyContent(sJustifyContent:sap.m.FlexJustifyContent): sap.m.FlexBox;
		/**
		 * Sets a new value for property <code>renderType</code>.
		 * 
		 * Determines whether the layout is rendered as a series of divs or as an unordered list (ul)
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Div</code>.
		 * @param sRenderType New value for property <code>renderType</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setRenderType(sRenderType:sap.m.FlexRendertype): sap.m.FlexBox;
	}
	/**
	 * Available directions for flex layouts.
	 */
	type FlexDirection = 
	/**
	 * Available directions for flex layouts.
	 */
	"Column" |
	/**
	 * Available directions for flex layouts.
	 */
	"ColumnReverse" |
	/**
	 * Available directions for flex layouts.
	 */
	"Inherit" |
	/**
	 * Available directions for flex layouts.
	 */
	"Row" |
	/**
	 * Available directions for flex layouts.
	 */
	"RowReverse";
	class FlexItemData extends sap.ui.core.LayoutData{
		/**
		 * Constructor for a new <code>sap.m.FlexItemData</code>.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new element, generated automatically if no id is given
		 * @param mSettings initial settings for the new element
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.FlexItemData with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>alignSelf</code>.
		 * 
		 * Determines cross-axis alignment of individual element (not currently supported in Internet Explorer)
		 * 
		 * Default value is <code>Auto</code>.
		 * @return Value of property <code>alignSelf</code>
		 */
		 getAlignSelf(): sap.m.FlexAlignSelf;
		/**
		 * Gets current value of property <code>growFactor</code>.
		 * 
		 * Determines the flexibility of the flex item when allocatable space is remaining.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>growFactor</code>
		 */
		 getGrowFactor(): number;
		/**
		 * Returns a metadata object for class sap.m.FlexItemData.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>order</code>.
		 * 
		 * Determines the display order of flex items independent of their source code order.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>order</code>
		 */
		 getOrder(): number;
		/**
		 * Gets current value of property <code>styleClass</code>.
		 * 
		 * The style class will be applied to the flex item and can be used for CSS selectors
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>styleClass</code>
		 */
		 getStyleClass(): string;
		/**
		 * Sets a new value for property <code>alignSelf</code>.
		 * 
		 * Determines cross-axis alignment of individual element (not currently supported in Internet Explorer)
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Auto</code>.
		 * @param sAlignSelf New value for property <code>alignSelf</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setAlignSelf(sAlignSelf:sap.m.FlexAlignSelf): sap.m.FlexItemData;
		/**
		 * Sets a new value for property <code>growFactor</code>.
		 * 
		 * Determines the flexibility of the flex item when allocatable space is remaining.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param fGrowFactor New value for property <code>growFactor</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setGrowFactor(fGrowFactor:number): sap.m.FlexItemData;
		/**
		 * Sets a new value for property <code>order</code>.
		 * 
		 * Determines the display order of flex items independent of their source code order.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param iOrder New value for property <code>order</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setOrder(iOrder:number): sap.m.FlexItemData;
		/**
		 * Sets a new value for property <code>styleClass</code>.
		 * 
		 * The style class will be applied to the flex item and can be used for CSS selectors
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sStyleClass New value for property <code>styleClass</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setStyleClass(sStyleClass:string): sap.m.FlexItemData;
	}
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	type FlexJustifyContent = 
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	"Center" |
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	"End" |
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	"Inherit" |
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	"SpaceAround" |
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	"SpaceBetween" |
	/**
	 * Available options for the layout of elements along the main axis of the flexbox layout.
	 */
	"Start";
	/**
	 * Determines the type of HTML elements used for rendering controls.
	 */
	type FlexRendertype = 
	/**
	 * Determines the type of HTML elements used for rendering controls.
	 */
	"Div" |
	/**
	 * Determines the type of HTML elements used for rendering controls.
	 */
	"List";
	/**
	 * Available options for the wrapping behavior of a flex container.
	 */
	type FlexWrap = 
	/**
	 * Available options for the wrapping behavior of a flex container.
	 */
	"NoWrap" |
	/**
	 * Available options for the wrapping behavior of a flex container.
	 */
	"Wrap" |
	/**
	 * Available options for the wrapping behavior of a flex container.
	 */
	"WrapReverse";
	class GrowingEnablement extends sap.ui.base.Object{
		/**
		 * Creates a new subclass of class sap.m.GrowingEnablement with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.GrowingEnablement.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class HBox extends sap.m.FlexBox{
		/**
		 * Constructor for a new HBox.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.HBox with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.FlexBox.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.HBox.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	/**
	 * Different levels for headers
	 */
	type HeaderLevel = 
	/**
	 * Different levels for headers
	 */
	"H1" |
	/**
	 * Different levels for headers
	 */
	"H2" |
	/**
	 * Different levels for headers
	 */
	"H3" |
	/**
	 * Different levels for headers
	 */
	"H4" |
	/**
	 * Different levels for headers
	 */
	"H5" |
	/**
	 * Different levels for headers
	 */
	"H6";
	class IBarInPageEnabler {
		/**
		 * Adds the sapMBarChildClass to a control.
		 * @param oControl 
		 */
		protected addChildClassTo(oControl:sap.ui.core.Control);
		/**
		 * Renders the tooltip for the given control
		 * @param oRM the RenderManager that can be used for writing to the render output buffer.
		 * @param oControl an object representation of the control that should be rendered.
		 */
		protected renderTooltip(oRM:sap.ui.core.RenderManager, oControl:sap.ui.core.Control);
	}
	interface IconTab {
	}
	class IconTabBar extends sap.ui.core.Control{
		/**
		 * Constructor for a new IconTabBar.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.IconTabBar;
		/**
		 * Adds some item to the aggregation <code>items</code>.
		 * @param oItem the item to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addItem(oItem:sap.m.IconTab): sap.m.IconTabBar;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.m.IconTabBar</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.IconTabBar</code> itself.
		 * 
		 * Fires when an item is selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.IconTabBar</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.m.IconTabBar;
		/**
		 * Forwards aggregations with the name of items to the internal list.
		 * @param sAggregationName The name for the binding
		 * @param oBindingInfo The configuration parameters for the binding
		 * @return this pointer for chaining
		 */
		 bindAggregation(sAggregationName:string, oBindingInfo:any): sap.m.IconTabBar;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.IconTabBar;
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.m.IconTabBar;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.m.IconTabBar</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.m.IconTabBar;
		/**
		 * Creates a new subclass of class sap.m.IconTabBar with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>select</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>item</code> of type <code>sap.m.IconTabFilter</code>The selected item</li>
		 * <li><code>key</code> of type <code>string</code>The key of the selected item</li>
		 * <li><code>selectedItem</code> of type <code>sap.m.IconTabFilter</code>The selected item</li>
		 * <li><code>selectedKey</code> of type <code>string</code>The key of the selected item</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.m.IconTabBar;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * Represents the contents displayed below the IconTabBar.
		 * If there are multiple contents, they are rendered after each other.
		 * The developer has to manage to display the right one or use the content aggregation
		 * inside the IconTabFilter (which will be displayed instead if it is set).
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * The items displayed in the IconTabBar.
		 * @return 
		 */
		 getItems(): sap.m.IconTab[];
		/**
		 * Returns a metadata object for class sap.m.IconTabBar.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Reflector for the internal header's selectedKey property.
		 * @return The current property value
		 */
		 getSelectedKey(): string;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.m.IconTab): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.IconTabBar;
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.m.IconTab, iIndex:number): sap.m.IconTabBar;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.m.IconTab[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.m.IconTab): sap.m.IconTab;
		/**
		 * Sets the tabs as collapsible and expandable without re-rendering the control.
		 * @param bExpandable new parameter value
		 * @return this pointer for chaining
		 */
		 setExpandable(bExpandable:boolean): sap.m.IconTabBar;
		/**
		 * Sets the tab content as expanded.
		 * @param bExpanded new parameter value
		 * @return this pointer for chaining
		 */
		 setExpanded(bExpanded:boolean): sap.m.IconTabBar;
		/**
		 * Sets the header mode.
		 * @param mode new parameter value
		 * @return this pointer for chaining
		 */
		 setHeaderMode(mode:sap.m.IconTabHeaderMode): sap.m.IconTabBar;
		/**
		 * Reflector for the internal header's selectedKey property.
		 * @param sValue the new value
		 * @return this pointer for chaining
		 */
		 setSelectedKey(sValue:string): sap.m.IconTabBar;
	}
	class IconTabFilter extends sap.ui.core.Item{
		/**
		 * Constructor for a new IconTabFilter.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given.
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.IconTabFilter with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>count</code>.
		 * 
		 * Represents the "count" text, which is displayed in the tab filter.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>count</code>
		 */
		 getCount(): string;
		/**
		 * Gets current value of property <code>design</code>.
		 * 
		 * Specifies whether the icon and the texts are placed vertically or horizontally.
		 * 
		 * Default value is <code>Vertical</code>.
		 * @return Value of property <code>design</code>
		 */
		 getDesign(): sap.m.IconTabFilterDesign;
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Specifies the icon to be displayed for the tab filter.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>iconColor</code>.
		 * 
		 * Specifies the icon color.
		 * 
		 * If an icon font is used, the color can be chosen from the icon colors (sap.ui.core.IconColor).
		 * Possible semantic colors are: Neutral, Positive, Critical, Negative.
		 * Instead of the semantic icon color the brand color can be used, this is named Default.
		 * Semantic colors and brand colors should not be mixed up inside one IconTabBar.
		 * 
		 * Default value is <code>Default</code>.
		 * @return Value of property <code>iconColor</code>
		 */
		 getIconColor(): sap.ui.core.IconColor;
		/**
		 * Gets current value of property <code>iconDensityAware</code>.
		 * 
		 * If set to true, it sends one or more requests,
		 * trying to get the density perfect version of the image if this version of
		 * the image doesn't exist on the server. Default value is set to true.
		 * 
		 * If bandwidth is key for the application, set this value to false.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconDensityAware</code>
		 */
		 getIconDensityAware(): boolean;
		/**
		 * Returns a metadata object for class sap.m.IconTabFilter.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>showAll</code>.
		 * 
		 * Enables special visualization for disabled filter (show all items).
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showAll</code>
		 */
		 getShowAll(): boolean;
		/**
		 * Gets current value of property <code>visible</code>.
		 * 
		 * Specifies whether the tab filter is rendered.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visible</code>
		 */
		 getVisible(): boolean;
		/**
		 * Sets a new value for property <code>count</code>.
		 * 
		 * Represents the "count" text, which is displayed in the tab filter.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sCount New value for property <code>count</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCount(sCount:string): sap.m.IconTabFilter;
		/**
		 * Sets a new value for property <code>design</code>.
		 * 
		 * Specifies whether the icon and the texts are placed vertically or horizontally.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Vertical</code>.
		 * @param sDesign New value for property <code>design</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDesign(sDesign:sap.m.IconTabFilterDesign): sap.m.IconTabFilter;
		/**
		 * Sets a new value for property <code>icon</code>.
		 * 
		 * Specifies the icon to be displayed for the tab filter.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sIcon New value for property <code>icon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.m.IconTabFilter;
		/**
		 * Sets a new value for property <code>iconColor</code>.
		 * 
		 * Specifies the icon color.
		 * 
		 * If an icon font is used, the color can be chosen from the icon colors (sap.ui.core.IconColor).
		 * Possible semantic colors are: Neutral, Positive, Critical, Negative.
		 * Instead of the semantic icon color the brand color can be used, this is named Default.
		 * Semantic colors and brand colors should not be mixed up inside one IconTabBar.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Default</code>.
		 * @param sIconColor New value for property <code>iconColor</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconColor(sIconColor:sap.ui.core.IconColor): sap.m.IconTabFilter;
		/**
		 * Sets a new value for property <code>iconDensityAware</code>.
		 * 
		 * If set to true, it sends one or more requests,
		 * trying to get the density perfect version of the image if this version of
		 * the image doesn't exist on the server. Default value is set to true.
		 * 
		 * If bandwidth is key for the application, set this value to false.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconDensityAware New value for property <code>iconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconDensityAware(bIconDensityAware:boolean): sap.m.IconTabFilter;
		/**
		 * Sets a new value for property <code>showAll</code>.
		 * 
		 * Enables special visualization for disabled filter (show all items).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowAll New value for property <code>showAll</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowAll(bShowAll:boolean): sap.m.IconTabFilter;
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Specifies whether the tab filter is rendered.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setVisible(bVisible:boolean): sap.m.IconTabFilter;
	}
	/**
	 * Available Filter Item Design.
	 */
	type IconTabFilterDesign = 
	/**
	 * Available Filter Item Design.
	 */
	"Horizontal" |
	/**
	 * Available Filter Item Design.
	 */
	"Vertical";
	class IconTabHeader extends sap.ui.core.Control{
		/**
		 * Constructor for a new IconTabHeader.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some item to the aggregation <code>items</code>.
		 * @param oItem the item to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addItem(oItem:sap.m.IconTab): sap.m.IconTabHeader;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.m.IconTabHeader</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.IconTabHeader</code> itself.
		 * 
		 * Fires when an item is selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.IconTabHeader</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.m.IconTabHeader;
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.m.IconTabHeader;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.m.IconTabHeader</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.m.IconTabHeader;
		/**
		 * Creates a new subclass of class sap.m.IconTabHeader with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>select</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>item</code> of type <code>sap.m.IconTabFilter</code>The selected item</li>
		 * <li><code>key</code> of type <code>string</code>The key of the selected item</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.m.IconTabHeader;
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * The items displayed in the IconTabHeader.
		 * @return 
		 */
		 getItems(): sap.m.IconTab[];
		/**
		 * Returns a metadata object for class sap.m.IconTabHeader.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.m.IconTab): number;
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.m.IconTab, iIndex:number): sap.m.IconTabHeader;
		/**
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.m.IconTab[];
		/**
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.m.IconTab): sap.m.IconTab;
		/**
		 * Sets the selected item based on key.
		 * @param sKey The key of the item to be selected
		 * @return this pointer for chaining
		 */
		 setSelectedKey(sKey:string): sap.m.IconTabHeader;
	}
	/**
	 * Specifies <code>IconTabBar</code> header mode.
	 */
	type IconTabHeaderMode = any;
	class IconTabSeparator extends sap.ui.core.Element{
		/**
		 * Constructor for a new IconTabSeparator.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.IconTabSeparator with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * The icon to display for this separator. If no icon is given, a separator line is used instead.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>iconDensityAware</code>.
		 * 
		 * If set to true, it sends one or more requests,
		 * trying to get the density perfect version of the image if this version of
		 * the image doesn't exist on the server. Default value is set to true.
		 * 
		 * If bandwidth is key for the application, set this value to false.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconDensityAware</code>
		 */
		 getIconDensityAware(): boolean;
		/**
		 * Returns a metadata object for class sap.m.IconTabSeparator.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Sets a new value for property <code>icon</code>.
		 * 
		 * The icon to display for this separator. If no icon is given, a separator line is used instead.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sIcon New value for property <code>icon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.m.IconTabSeparator;
		/**
		 * Sets a new value for property <code>iconDensityAware</code>.
		 * 
		 * If set to true, it sends one or more requests,
		 * trying to get the density perfect version of the image if this version of
		 * the image doesn't exist on the server. Default value is set to true.
		 * 
		 * If bandwidth is key for the application, set this value to false.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconDensityAware New value for property <code>iconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconDensityAware(bIconDensityAware:boolean): sap.m.IconTabSeparator;
	}
	class Image extends sap.ui.core.Control{
		/**
		 * Constructor for a new Image.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.m.Image</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Image</code> itself.
		 * 
		 * Event is fired when the user clicks on the control.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Image</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachPress(fnFunction:any, oData?:any, oListener?:any): sap.m.Image;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>tap</code> event of this <code>sap.m.Image</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Image</code> itself.
		 * 
		 * Event is fired when the user clicks on the control. (This event is deprecated, use the press event instead)
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Image</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachTap(fnFunction:any, oData?:any, oListener?:any): sap.m.Image;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.m.Image</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachPress(fnFunction:any, oListener:any): sap.m.Image;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>tap</code> event of this <code>sap.m.Image</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachTap(fnFunction:any, oListener:any): sap.m.Image;
		/**
		 * Creates a new subclass of class sap.m.Image with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>press</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected firePress(mArguments?:any): sap.m.Image;
		/**
		 * Fires event <code>tap</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireTap(mArguments?:any): sap.m.Image;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>activeSrc</code>.
		 * 
		 * The source property which is used when the image is pressed.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>activeSrc</code>
		 */
		 getActiveSrc(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>alt</code>.
		 * 
		 * The alternative text that is displayed in case the Image is not available, or cannot be displayed.
		 * If the image is set to decorative this property is ignored.
		 * @return Value of property <code>alt</code>
		 */
		 getAlt(): string;
		/**
		 * Gets current value of property <code>decorative</code>.
		 * 
		 * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
		 * 
		 * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative).
		 * A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>decorative</code>
		 */
		 getDecorative(): boolean;
		/**
		 * Gets current value of property <code>densityAware</code>.
		 * 
		 * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
		 * 
		 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
		 * 
		 * If bandwidth is the key for the application, set this value to false.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>densityAware</code>
		 */
		 getDensityAware(): boolean;
		/**
		 * Gets current value of property <code>height</code>.
		 * 
		 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
		 * @return Value of property <code>height</code>
		 */
		 getHeight(): sap.ui.core.CSSSize;
		/**
		 * Returns a metadata object for class sap.m.Image.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>src</code>.
		 * 
		 * Relative or absolute path to URL where the image file is stored. The path will be adapted to the density aware format according to the density of the device following the convention that [imageName]@[densityValue].[extension]
		 * @return Value of property <code>src</code>
		 */
		 getSrc(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>useMap</code>.
		 * 
		 * The name of the image map that defines the clickable areas
		 * @return Value of property <code>useMap</code>
		 */
		 getUseMap(): string;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * This overrides the default setter of the activeSrc property in order to avoid the rerendering.
		 * @param sActiveSrc 
		 * @return <code>this</code> pointer for chaining
		 */
		 setActiveSrc(sActiveSrc:sap.ui.core.URI): sap.m.Image;
		/**
		 * Sets a new value for property <code>alt</code>.
		 * 
		 * The alternative text that is displayed in case the Image is not available, or cannot be displayed.
		 * If the image is set to decorative this property is ignored.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sAlt New value for property <code>alt</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setAlt(sAlt:string): sap.m.Image;
		/**
		 * Sets a new value for property <code>decorative</code>.
		 * 
		 * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
		 * 
		 * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative).
		 * A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bDecorative New value for property <code>decorative</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDecorative(bDecorative:boolean): sap.m.Image;
		/**
		 * Sets a new value for property <code>densityAware</code>.
		 * 
		 * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
		 * 
		 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
		 * 
		 * If bandwidth is the key for the application, set this value to false.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bDensityAware New value for property <code>densityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDensityAware(bDensityAware:boolean): sap.m.Image;
		/**
		 * Sets a new value for property <code>height</code>.
		 * 
		 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sHeight New value for property <code>height</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeight(sHeight:sap.ui.core.CSSSize): sap.m.Image;
		/**
		 * This overrides the default setter of the src property and update the dom node.
		 * @param sSrc 
		 */
		 setSrc(sSrc:sap.ui.core.URI);
		/**
		 * Sets a new value for property <code>useMap</code>.
		 * 
		 * The name of the image map that defines the clickable areas
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sUseMap New value for property <code>useMap</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setUseMap(sUseMap:string): sap.m.Image;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Image;
	}
	class Input extends sap.m.InputBase{
		/**
		 * Constructor for a new Input.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>liveChange</code> event of this <code>sap.m.Input</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Input</code> itself.
		 * 
		 * This event is fired when the value of the input is changed - e.g. at each keypress
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Input</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachLiveChange(fnFunction:any, oData?:any, oListener?:any): sap.m.Input;
		/**
		 * Forwards aggregations with the name of items or columns to the internal table.
		 * @param sAggregationName the name for the binding
		 * @param oBindingInfo the configuration parameters for the binding
		 * @return this pointer for chaining
		 */
		 bindAggregation(sAggregationName:string, oBindingInfo:any): sap.m.Input;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>liveChange</code> event of this <code>sap.m.Input</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachLiveChange(fnFunction:any, oListener:any): sap.m.Input;
		/**
		 * Creates a new subclass of class sap.m.Input with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>liveChange</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>value</code> of type <code>string</code>The new value of the input.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireLiveChange(mArguments?:any): sap.m.Input;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>description</code>.
		 * 
		 * The description is a text after the input field, e.g. units of measurement, currencies.
		 * @return Value of property <code>description</code>
		 */
		 getDescription(): string;
		/**
		 * Gets current value of property <code>fieldWidth</code>.
		 * 
		 * This property only takes effect if the description property is set. It controls the distribution of space between the input field and the description text. The default value is 50% leaving the other 50% for the description.
		 * 
		 * Default value is <code>50%</code>.
		 * @return Value of property <code>fieldWidth</code>
		 */
		 getFieldWidth(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>filterSuggests</code>.
		 * 
		 * Defines whether to filter the provided suggestions before showing them to the user.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>filterSuggests</code>
		 */
		 getFilterSuggests(): boolean;
		/**
		 * Gets current value of property <code>maxLength</code>.
		 * 
		 * Maximum number of characters. Value '0' means the feature is switched off.
		 * This parameter is not compatible with the input type <code>sap.m.InputType.Number</code>.
		 * If the input type is set to <code>Number</code>, the <code>maxLength</code> value is ignored.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>maxLength</code>
		 */
		 getMaxLength(): number;
		/**
		 * Returns a metadata object for class sap.m.Input.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * HTML type of the internal <code>input</code> tag (e.g. Text, Number, Email, Phone).
		 * The particular effect of this property differs depending on the browser and the current language settings,
		 * especially for the type Number.<br>
		 * This parameter is intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.<br>
		 * Only the default value <code>sap.m.InputType.Text</code> may be used in combination with data model formats.
		 * <code>sap.ui.model</code> defines extended formats that are mostly incompatible with normal HTML
		 * representations for numbers and dates.
		 * 
		 * Default value is <code>Text</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.InputType;
		/**
		 * Returns the width of the input.
		 * @return The current width or 100% as default
		 */
		 getWidth(): string;
		/**
		 * Fire valueHelpRequest event on tap
		 * @param oEvent 
		 */
		 ontap(oEvent:jQuery.Event);
		/**
		 * Sets a new value for property <code>description</code>.
		 * 
		 * The description is a text after the input field, e.g. units of measurement, currencies.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sDescription New value for property <code>description</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDescription(sDescription:string): sap.m.Input;
		/**
		 * Sets a new value for property <code>fieldWidth</code>.
		 * 
		 * This property only takes effect if the description property is set. It controls the distribution of space between the input field and the description text. The default value is 50% leaving the other 50% for the description.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>50%</code>.
		 * @param sFieldWidth New value for property <code>fieldWidth</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFieldWidth(sFieldWidth:sap.ui.core.CSSSize): sap.m.Input;
		/**
		 * Sets a new value for property <code>filterSuggests</code>.
		 * 
		 * Defines whether to filter the provided suggestions before showing them to the user.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bFilterSuggests New value for property <code>filterSuggests</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFilterSuggests(bFilterSuggests:boolean): sap.m.Input;
		/**
		 * Sets a new value for property <code>maxLength</code>.
		 * 
		 * Maximum number of characters. Value '0' means the feature is switched off.
		 * This parameter is not compatible with the input type <code>sap.m.InputType.Number</code>.
		 * If the input type is set to <code>Number</code>, the <code>maxLength</code> value is ignored.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param iMaxLength New value for property <code>maxLength</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMaxLength(iMaxLength:number): sap.m.Input;
		/**
		 * Sets a new value for property <code>type</code>.
		 * 
		 * HTML type of the internal <code>input</code> tag (e.g. Text, Number, Email, Phone).
		 * The particular effect of this property differs depending on the browser and the current language settings,
		 * especially for the type Number.<br>
		 * This parameter is intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.<br>
		 * Only the default value <code>sap.m.InputType.Text</code> may be used in combination with data model formats.
		 * <code>sap.ui.model</code> defines extended formats that are mostly incompatible with normal HTML
		 * representations for numbers and dates.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Text</code>.
		 * @param sType New value for property <code>type</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setType(sType:sap.m.InputType): sap.m.Input;
		/**
		 * Setter for property <code>value</code>.
		 * 
		 * Default value is empty/<code>undefined</code>.
		 * @param sValue New value for property <code>value</code>.
		 * @return <code>this</code> to allow method chaining.
		 */
		 setValue(sValue:string): sap.m.Input;
		/**
		 * Defines the width of the input. Default value is 100%
		 * @param sWidth 
		 */
		 setWidth(sWidth:string);
	}
	class InputListItem extends sap.m.ListItemBase{
		/**
		 * Constructor for a new InputListItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.InputListItem;
		/**
		 * Binds aggregation <code>content</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>.
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindContent(oBindingInfo:any): sap.m.InputListItem;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.InputListItem;
		/**
		 * Creates a new subclass of class sap.m.InputListItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * Content controls can be added
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>label</code>.
		 * 
		 * Label of the list item
		 * @return Value of property <code>label</code>
		 */
		 getLabel(): string;
		/**
		 * Returns a metadata object for class sap.m.InputListItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.InputListItem;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>label</code>.
		 * 
		 * Label of the list item
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sLabel New value for property <code>label</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setLabel(sLabel:string): sap.m.InputListItem;
		/**
		 * Unbinds aggregation <code>content</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindContent(): sap.m.InputListItem;
	}
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	type InputType = 
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Date" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Datetime" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"DatetimeLocale" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Email" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Month" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Number" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Password" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Tel" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Text" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Time" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Url" |
	/**
	 * A subset of input types that fits to a simple API returning one string.
	 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
	 */
	"Week";
	class Label extends sap.ui.core.Control{
		/**
		 * Constructor for a new Label.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.Label with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>design</code>.
		 * 
		 * Sets the design of a Label to either Standard or Bold.
		 * 
		 * Default value is <code>Standard</code>.
		 * @return Value of property <code>design</code>
		 */
		 getDesign(): sap.m.LabelDesign;
		/**
		 * ID of the element which is the current target of the association <code>labelFor</code>, or <code>null</code>.
		 * @return 
		 */
		 getLabelFor(): sap.ui.core.ID;
		/**
		 * Returns a metadata object for class sap.m.Label.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>required</code>.
		 * 
		 * Indicates that user input is required in the input this label labels.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>required</code>
		 */
		 getRequired(): boolean;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Determines the Label text to be displayed.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textAlign</code>.
		 * 
		 * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
		 * 
		 * Default value is <code>Begin</code>.
		 * @return Value of property <code>textAlign</code>
		 */
		 getTextAlign(): sap.ui.core.TextAlign;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Determines the width of the label.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Sets a new value for property <code>design</code>.
		 * 
		 * Sets the design of a Label to either Standard or Bold.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Standard</code>.
		 * @param sDesign New value for property <code>design</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDesign(sDesign:sap.m.LabelDesign): sap.m.Label;
		/**
		 * Sets the associated <code>labelFor</code>.
		 * @param oLabelFor ID of an element which becomes the new target of this labelFor association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setLabelFor(oLabelFor:sap.ui.core.ID|sap.ui.core.Control): sap.m.Label;
		/**
		 * Sets a new value for property <code>required</code>.
		 * 
		 * Indicates that user input is required in the input this label labels.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bRequired New value for property <code>required</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setRequired(bRequired:boolean): sap.m.Label;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Determines the Label text to be displayed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.Label;
		/**
		 * Sets a new value for property <code>textAlign</code>.
		 * 
		 * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Begin</code>.
		 * @param sTextAlign New value for property <code>textAlign</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextAlign(sTextAlign:sap.ui.core.TextAlign): sap.m.Label;
		/**
		 * Sets a new value for property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @param sTextDirection New value for property <code>textDirection</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextDirection(sTextDirection:sap.ui.core.TextDirection): sap.m.Label;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Determines the width of the label.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Label;
	}
	/**
	 * Available label display modes.
	 */
	type LabelDesign = 
	/**
	 * Available label display modes.
	 */
	"Bold" |
	/**
	 * Available label display modes.
	 */
	"Standard";
	class List extends sap.m.ListBase{
		/**
		 * Constructor for a new List.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId Id for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.List with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.List.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class ListItemBase extends sap.ui.core.Control{
		/**
		 * Constructor for a new ListItemBase.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId Id for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>detailPress</code> event of this <code>sap.m.ListItemBase</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.ListItemBase</code> itself.
		 * 
		 * Fires when the user clicks on the detail button of the control.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachDetailPress(fnFunction:any, oData?:any, oListener?:any): sap.m.ListItemBase;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.m.ListItemBase</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.ListItemBase</code> itself.
		 * 
		 * Fires when the user clicks on the control.
		 * <b>Note:</b> This event is not fired when the parent <code>mode</code> is <code>SingleSelectMaster</code> or when the <code>includeItemInSelection</code> property is set to <code>true</code>.
		 * If there is an interactive element that handles its own <code>press</code> event then the list item's <code>press</code> event is not fired.
		 * Also see {@link sap.m.ListBase#attachItemPress}.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachPress(fnFunction:any, oData?:any, oListener?:any): sap.m.ListItemBase;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>detailPress</code> event of this <code>sap.m.ListItemBase</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachDetailPress(fnFunction:any, oListener:any): sap.m.ListItemBase;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.m.ListItemBase</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachPress(fnFunction:any, oListener:any): sap.m.ListItemBase;
		/**
		 * Creates a new subclass of class sap.m.ListItemBase with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>detailPress</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireDetailPress(mArguments?:any): sap.m.ListItemBase;
		/**
		 * Fires event <code>press</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected firePress(mArguments?:any): sap.m.ListItemBase;
		/**
		 * Gets current value of property <code>counter</code>.
		 * 
		 * Defines the counter value of the list items.
		 * @return Value of property <code>counter</code>
		 */
		 getCounter(): number;
		/**
		 * Returns a metadata object for class sap.m.ListItemBase.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>selected</code>.
		 * 
		 * Defines the selected state of the list items.
		 * <b>Note:</b> Binding the <code>selected</code> property in single selection modes may cause unwanted results if you have more than one selected items in your binding.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>selected</code>
		 */
		 getSelected(): boolean;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * Defines the visual indication and behavior of the list items, e.g. <code>Active</code>, <code>Navigation</code>, <code>Detail</code>.
		 * 
		 * Default value is <code>Inactive</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.ListType;
		/**
		 * Gets current value of property <code>unread</code>.
		 * 
		 * Activates the unread indicator for the list item, if set to <code>true</code>.
		 * <b>Note:</b> This flag is ignored when the <code>showUnread</code> property of the parent is set to <code>false</code>.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>unread</code>
		 */
		 getUnread(): boolean;
		/**
		 * Gets current value of property <code>visible</code>.
		 * 
		 * Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead of the real control.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visible</code>
		 */
		 getVisible(): boolean;
		/**
		 * Sets a new value for property <code>counter</code>.
		 * 
		 * Defines the counter value of the list items.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param iCounter New value for property <code>counter</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCounter(iCounter:number): sap.m.ListItemBase;
		/**
		 * Sets a new value for property <code>selected</code>.
		 * 
		 * Defines the selected state of the list items.
		 * <b>Note:</b> Binding the <code>selected</code> property in single selection modes may cause unwanted results if you have more than one selected items in your binding.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bSelected New value for property <code>selected</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSelected(bSelected:boolean): sap.m.ListItemBase;
		/**
		 * Sets a new value for property <code>type</code>.
		 * 
		 * Defines the visual indication and behavior of the list items, e.g. <code>Active</code>, <code>Navigation</code>, <code>Detail</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inactive</code>.
		 * @param sType New value for property <code>type</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setType(sType:sap.m.ListType): sap.m.ListItemBase;
		/**
		 * Sets a new value for property <code>unread</code>.
		 * 
		 * Activates the unread indicator for the list item, if set to <code>true</code>.
		 * <b>Note:</b> This flag is ignored when the <code>showUnread</code> property of the parent is set to <code>false</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bUnread New value for property <code>unread</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setUnread(bUnread:boolean): sap.m.ListItemBase;
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead of the real control.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setVisible(bVisible:boolean): sap.m.ListItemBase;
	}
	/**
	 * Defines the mode of the list.
	 */
	type ListMode = 
	/**
	 * Defines the mode of the list.
	 */
	"Delete" |
	/**
	 * Defines the mode of the list.
	 */
	"MultiSelect" |
	/**
	 * Defines the mode of the list.
	 */
	"None" |
	/**
	 * Defines the mode of the list.
	 */
	"SingleSelect" |
	/**
	 * Defines the mode of the list.
	 */
	"SingleSelectLeft" |
	/**
	 * Defines the mode of the list.
	 */
	"SingleSelectMaster";
	/**
	 * Defines which separator style will be applied for the items.
	 */
	type ListSeparators = 
	/**
	 * Defines which separator style will be applied for the items.
	 */
	"All" |
	/**
	 * Defines which separator style will be applied for the items.
	 */
	"Inner" |
	/**
	 * Defines which separator style will be applied for the items.
	 */
	"None";
	/**
	 * Defines the visual indication and behaviour of the list items.
	 */
	type ListType = 
	/**
	 * Defines the visual indication and behaviour of the list items.
	 */
	"Active" |
	/**
	 * Defines the visual indication and behaviour of the list items.
	 */
	"Detail" |
	/**
	 * Defines the visual indication and behaviour of the list items.
	 */
	"DetailAndActive" |
	/**
	 * Defines the visual indication and behaviour of the list items.
	 */
	"Inactive" |
	/**
	 * Defines the visual indication and behaviour of the list items.
	 */
	"Navigation";
	class Menu extends sap.ui.core.Control{
		/**
		 * Constructor for a new Menu.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some item to the aggregation <code>items</code>.
		 * @param oItem the item to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addItem(oItem:sap.m.MenuItem): sap.m.Menu;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>closed</code> event of this <code>sap.m.Menu</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Menu</code> itself.
		 * 
		 * Fired when the menu is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Menu</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachClosed(fnFunction:any, oData?:any, oListener?:any): sap.m.Menu;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>itemSelected</code> event of this <code>sap.m.Menu</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Menu</code> itself.
		 * 
		 * Fired when a <code>MenuItem</code> is selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Menu</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachItemSelected(fnFunction:any, oData?:any, oListener?:any): sap.m.Menu;
		/**
		 * Binds aggregation <code>items</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>.
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindItems(oBindingInfo:any): sap.m.Menu;
		/**
		 * Closes the <code>Menu</code>.
		 */
		 close();
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.m.Menu;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>closed</code> event of this <code>sap.m.Menu</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachClosed(fnFunction:any, oListener:any): sap.m.Menu;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>itemSelected</code> event of this <code>sap.m.Menu</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachItemSelected(fnFunction:any, oListener:any): sap.m.Menu;
		/**
		 * Creates a new subclass of class sap.m.Menu with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>closed</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireClosed(mArguments?:any): sap.m.Menu;
		/**
		 * Fires event <code>itemSelected</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>item</code> of type <code>sap.m.MenuItem</code>The <code>MenuItem</code> which was selected.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireItemSelected(mArguments?:any): sap.m.Menu;
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * Defines the items contained within this control.
		 * @return 
		 */
		 getItems(): sap.m.MenuItem[];
		/**
		 * Returns a metadata object for class sap.m.Menu.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Defines the <code>Menu</code> title.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Checks for the provided <code>sap.m.MenuItem</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.m.MenuItem): number;
		/**
		 * Initializes the control.
		 */
		 init();
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.m.MenuItem, iIndex:number): sap.m.Menu;
		/**
		 * Opens the <code>Menu</code> next to the given control.
		 * @param oControl The control that defines the position for the menu
		 * @param bWithKeyboard Whether the menu is opened with a shortcut or not
		 */
		 openBy(oControl:any, bWithKeyboard:any);
		/**
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.m.MenuItem[];
		/**
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.m.MenuItem): sap.m.MenuItem;
		/**
		 * Sets the title of the <code>Menu</code>.
		 * @param sTitle The new title of the <code>Menu</code>
		 */
		 setTitle(sTitle:string);
		/**
		 * Unbinds aggregation <code>items</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindItems(): sap.m.Menu;
	}
	class MenuButton extends sap.ui.core.Control{
		/**
		 * Constructor for a new MenuButton.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>defaultAction</code> event of this <code>sap.m.MenuButton</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.MenuButton</code> itself.
		 * 
		 * Fired when the <code>buttonMode</code> is set to <code>Split</code> and the user presses the main button
		 * unless <code>useDefaultActionOnly</code> is set to <code>false</code> and another action
		 * from the menu has been selected previously.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.MenuButton</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachDefaultAction(fnFunction:any, oData?:any, oListener?:any): sap.m.MenuButton;
		/**
		 * Binds aggregation <code>menu</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>.
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindMenu(oBindingInfo:any): sap.m.MenuButton;
		/**
		 * Destroys the menu in the aggregation <code>menu</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyMenu(): sap.m.MenuButton;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>defaultAction</code> event of this <code>sap.m.MenuButton</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachDefaultAction(fnFunction:any, oListener:any): sap.m.MenuButton;
		/**
		 * Creates a new subclass of class sap.m.MenuButton with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>defaultAction</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireDefaultAction(mArguments?:any): sap.m.MenuButton;
		/**
		 * Gets current value of property <code>activeIcon</code>.
		 * 
		 * The source property of an alternative icon for the active (pressed) state of the button.
		 * Both active and default icon properties should be defined and of the same type - image or icon font.
		 * If the <code>icon</code> property is not set or has a different type, the active icon is not displayed.
		 * @return Value of property <code>activeIcon</code>
		 */
		 getActiveIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>buttonMode</code>.
		 * 
		 * Defines whether the <code>MenuButton</code> is set to <code>Regular</code> or <code>Split</code> mode.
		 * 
		 * Default value is <code>Regular</code>.
		 * @return Value of property <code>buttonMode</code>
		 */
		 getButtonMode(): sap.m.MenuButtonMode;
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Boolean property to enable the control (default is <code>true</code>).
		 * <br/><b>Note:</b> Depending on custom settings, the buttons that are disabled have other colors than the enabled ones.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Defines the icon to be displayed as a graphical element within the button.
		 * It can be an image or an icon from the icon font.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>iconDensityAware</code>.
		 * 
		 * When set to <code>true</code> (default), one or more requests are sent trying to get the
		 * density perfect version of image if this version of image doesn't exist on the server.
		 * If only one version of image is provided, set this value to <code>false</code> to
		 * avoid the attempt of fetching density perfect image.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconDensityAware</code>
		 */
		 getIconDensityAware(): boolean;
		/**
		 * Gets content of aggregation <code>menu</code>.
		 * 
		 * Defines the menu that opens for this button.
		 * @return 
		 */
		 getMenu(): sap.m.Menu;
		/**
		 * Returns a metadata object for class sap.m.MenuButton.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Defines the text of the <code>MenuButton</code>.
		 * <br/><b>Note:</b> In <code>Split</code> <code>buttonMode</code> with <code>useDefaultActionOnly</code>
		 * set to <code>false</code>, the text is changed to display the last selected item's text,
		 * while in <code>Regular</code> <code>buttonMode<code> the text stays unchanged.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Specifies the element's text directionality with enumerated options.
		 * By default, the control inherits text direction from the DOM.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * Defines the type of the <code>MenuButton</code> (for example, Default, Accept, Reject, Back, etc.)
		 * 
		 * Default value is <code>Default</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.ButtonType;
		/**
		 * Gets current value of property <code>useDefaultActionOnly</code>.
		 * 
		 * Controls whether the default action handler is invoked always or it is invoked only until a menu item is selected.
		 * Usable only if <code>buttonMode</code> is set to <code>Split</code>.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>useDefaultActionOnly</code>
		 */
		 getUseDefaultActionOnly(): boolean;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Defines the width of the <code>MenuButton</code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Initializes the control.
		 */
		 init();
		/**
		 * Sets a new value for property <code>activeIcon</code>.
		 * 
		 * The source property of an alternative icon for the active (pressed) state of the button.
		 * Both active and default icon properties should be defined and of the same type - image or icon font.
		 * If the <code>icon</code> property is not set or has a different type, the active icon is not displayed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sActiveIcon New value for property <code>activeIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActiveIcon(sActiveIcon:sap.ui.core.URI): sap.m.MenuButton;
		/**
		 * Sets the <code>buttonМode</code> of the control.
		 * @param sMode The new button mode
		 * @return This instance
		 */
		 setButtonMode(sMode:sap.m.MenuButtonMode): any;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Boolean property to enable the control (default is <code>true</code>).
		 * <br/><b>Note:</b> Depending on custom settings, the buttons that are disabled have other colors than the enabled ones.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.MenuButton;
		/**
		 * Sets a new value for property <code>iconDensityAware</code>.
		 * 
		 * When set to <code>true</code> (default), one or more requests are sent trying to get the
		 * density perfect version of image if this version of image doesn't exist on the server.
		 * If only one version of image is provided, set this value to <code>false</code> to
		 * avoid the attempt of fetching density perfect image.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconDensityAware New value for property <code>iconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconDensityAware(bIconDensityAware:boolean): sap.m.MenuButton;
		/**
		 * Sets the aggregated <code>menu</code>.
		 * @param oMenu The menu to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMenu(oMenu:sap.m.Menu): sap.m.MenuButton;
		/**
		 * Sets a new value for property <code>textDirection</code>.
		 * 
		 * Specifies the element's text directionality with enumerated options.
		 * By default, the control inherits text direction from the DOM.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @param sTextDirection New value for property <code>textDirection</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextDirection(sTextDirection:sap.ui.core.TextDirection): sap.m.MenuButton;
		/**
		 * Sets the tooltip for the <code>MenuButton</code>.
		 * Can either be an instance of a TooltipBase subclass or a simple string.
		 * @param vTooltip The tooltip that should be shown.
		 * @return this instance
		 */
		 setTooltip(vTooltip:sap.ui.core.TooltipBase): any;
		/**
		 * Sets a new value for property <code>useDefaultActionOnly</code>.
		 * 
		 * Controls whether the default action handler is invoked always or it is invoked only until a menu item is selected.
		 * Usable only if <code>buttonMode</code> is set to <code>Split</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param sUseDefaultActionOnly New value for property <code>useDefaultActionOnly</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setUseDefaultActionOnly(sUseDefaultActionOnly:boolean): sap.m.MenuButton;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Defines the width of the <code>MenuButton</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.MenuButton;
		/**
		 * Unbinds aggregation <code>menu</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindMenu(): sap.m.MenuButton;
	}
	class MultiInput extends sap.m.Input{
		/**
		 * Constructor for a new MultiInput.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some token to the aggregation <code>tokens</code>.
		 * @param oToken the token to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addToken(oToken:sap.m.Token): sap.m.MultiInput;
		/**
		 * Function adds an validation callback called before any new token gets added to the tokens aggregation
		 * @param fValidator 
		 */
		 addValidator(fValidator:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>tokenChange</code> event of this <code>sap.m.MultiInput</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.MultiInput</code> itself.
		 * 
		 * Fired when the tokens aggregation changed (add / remove token)
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.MultiInput</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachTokenChange(fnFunction:any, oData?:any, oListener?:any): sap.m.MultiInput;
		/**
		 * Function overwrites clone function to add tokens to MultiInput
		 * @return reference to the newly created clone
		 */
		 clone(): sap.ui.core.Element;
		/**
		 * Destroys all the tokens in the aggregation <code>tokens</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyTokens(): sap.m.MultiInput;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>tokenChange</code> event of this <code>sap.m.MultiInput</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachTokenChange(fnFunction:any, oListener:any): sap.m.MultiInput;
		/**
		 * Creates a new subclass of class sap.m.MultiInput with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Input.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>tokenChange</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>type</code> of type <code>string</code>Type of tokenChange event.
		 * There are four TokenChange types: "added", "removed", "removedAll", "tokensChanged".
		 * Use Tokenizer.TokenChangeType.Added for "added",	Tokenizer.TokenChangeType.Removed for "removed", Tokenizer.TokenChangeType.RemovedAll for "removedAll" and Tokenizer.TokenChangeType.TokensChanged for "tokensChanged".</li>
		 * <li><code>token</code> of type <code>sap.m.Token</code>The added token or removed token.
		 * This parameter is used when tokenChange type is "added" or "removed".</li>
		 * <li><code>tokens</code> of type <code>sap.m.Token[]</code>The array of removed tokens.
		 * This parameter is used when tokenChange type is "removedAll".</li>
		 * <li><code>addedTokens</code> of type <code>sap.m.Token[]</code>The array of tokens that are added.
		 * This parameter is used when tokenChange type is "tokenChanged".</li>
		 * <li><code>removedTokens</code> of type <code>sap.m.Token[]</code>The array of tokens that are removed.
		 * This parameter is used when tokenChange type is "tokenChanged".</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireTokenChange(mArguments?:any): sap.m.MultiInput;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Get the reference element which the message popup should dock to
		 * @return Dom Element which the message popup should dock to
		 */
		protected getDomRefForValueStateMessage(): any;
		/**
		 * Returns a metadata object for class sap.m.MultiInput.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Function returns domref which acts as reference point for the opening suggestion menu
		 * @return the domref at which to open the suggestion menu
		 */
		 getPopupAnchorDomRef(): any;
		/**
		 * Gets content of aggregation <code>tokens</code>.
		 * 
		 * The currently displayed tokens
		 * @return 
		 */
		 getTokens(): sap.m.Token[];
		/**
		 * Checks for the provided <code>sap.m.Token</code> in the aggregation <code>tokens</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oToken The token whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfToken(oToken:sap.m.Token): number;
		/**
		 * Inserts a token into the aggregation <code>tokens</code>.
		 * @param oToken the token to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the token should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the token is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the token is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertToken(oToken:sap.m.Token, iIndex:number): sap.m.MultiInput;
		/**
		 * Focus is on MultiInput
		 * @param oEvent 
		 */
		 onfocusin(oEvent:jQuery.Event);
		/**
		 * When press ESC, deselect all tokens and all texts
		 * @param oEvent 
		 */
		 onsapescape(oEvent:jQuery.Event);
		/**
		 * When tap on text field, deselect all tokens
		 * @param oEvent 
		 */
		 ontap(oEvent:jQuery.Event);
		/**
		 * Removes all the controls from the aggregation <code>tokens</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllTokens(): sap.m.Token[];
		/**
		 * Function removes all validation callbacks
		 */
		 removeAllValidators();
		/**
		 * Removes a token from the aggregation <code>tokens</code>.
		 * @param vToken The token to remove or its index or id
		 * @return The removed token or <code>null</code>
		 */
		 removeToken(vToken:number|string|sap.m.Token): sap.m.Token;
		/**
		 * Function removes an validation callback
		 * @param fValidator 
		 */
		 removeValidator(fValidator:any);
		/**
		 * Function sets an array of tokens, existing tokens will get overridden
		 * @param aTokens the new token set
		 */
		 setTokens(aTokens:sap.m.Token[]);
	}
	class NavContainer extends sap.ui.core.Control{
		/**
		 * Constructor for a new NavContainer.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds a custom transition to the NavContainer type (not to a particular instance!). The transition is identified by a "name". Make sure to only use names that will not collide with transitions which may be added to the NavContainer later. A suggestion is to use the prefix "c_" or "_" for your custom transitions to ensure this.
		 * 
		 * "to" and "back" are the transition functions for the forward and backward navigation.
		 * Both will be called with the following parameters:
		 * - oFromPage: the Control which is currently being displayed by the NavContainer
		 * - oToPage: the Control which should be displayed by the NavContainer after the transition
		 * - fCallback: a function which MUST be called when the transition has completed
		 * - oTransitionParameters: a data object that can be given by application code when triggering the transition by calling to() or back(); this object could give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration
		 * 
		 * The contract for "to" and "back" is that they may do an animation of their choice, but it should not take "too long". At the beginning of the transition the target page "oToPage" does have the CSS class "sapMNavItemHidden" which initially hides the target page (visibility:hidden). The transition can do any preparation (e.g. move that page out of the screen or make it transparent) and then should remove this CSS class.
		 * After the animation the target page "oToPage" should cover the entire screen and the source page "oFromPage" should not be visible anymore. This page should then have the CSS class "sapMNavItemHidden".
		 * For adding/removing this or other CSS classes, the transition can use the addStyleClass/removeStyleClass method:
		 * oFromPage.addStyleClass("sapMNavItemHidden");
		 * When the transition is complete, it MUST call the given fCallback method to inform the NavContainer that navigation has finished!
		 * 
		 * Hint: if the target page of your transition stays black on iPhone, try wrapping the animation start into a
		 * setTimeout(..., 0)
		 * block (delayed, but without waiting).
		 * 
		 * This method can be called on any NavContainer instance or statically on the sap.m.NavContainer type. However, the transition will always be registered for the type (and ALL instances), not for the single instance on which this method was invoked.
		 * 
		 * Returns the sap.m.NavContainer type if called statically, or "this" (to allow method chaining) if called on a particular NavContainer instance.
		 * @param sName The name of the transition. This name can be used by the application to choose this transition when navigating "to()" or "back()": the "transitionName" parameter of "NavContainer.to()" corresponds to this name, the back() navigation will automatically use the same transition.
		 * 
		 *         Make sure to only use names that will not collide with transitions which may be added to the NavContainer later. A suggestion is to use the prefix "c_" or "_" for your custom transitions to ensure this.
		 * @param oTo The function which will be called by the NavContainer when the application navigates "to()", using this animation's name. The NavContainer instance is the "this" context within the animation function.
		 * 
		 *         See the documentation of NavContainer.addCustomTransitions for more details about this function.
		 * @param oBack The function which will be called by the NavContainer when the application navigates "back()" from a page where it had navigated to using this animation's name. The NavContainer instance is the "this" context within the animation function.
		 * 
		 *         See the documentation of NavContainer.addCustomTransitions for more details about this function.
		 * @return 
		 */
		 addCustomTransition(sName:string, oTo:any, oBack:any): sap.m.NavContainer;
		/**
		 * Adds some page to the aggregation <code>pages</code>.
		 * @param oPage the page to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addPage(oPage:sap.ui.core.Control): sap.m.NavContainer;
		/**
		 * Navigates back one level. If already on the initial page and there is no place to go back, nothing happens.
		 * 
		 * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
		 * @param oBackData Since version 1.7.1. This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
		 * 
		 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
		 * 
		 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameters Since version 1.7.1. This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
		 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
		 * 
		 *         In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 * @return 
		 */
		 back(oBackData?:any, oTransitionParameters?:any): sap.m.NavContainer;
		/**
		 * Returns whether the current page is the top/initial page.
		 * 
		 * Note: going to the initial page again with a row of "to" navigations causes the initial page to be displayed again, but logically one is not at the top level, so this method returns "false" in this case.
		 * @return 
		 */
		 currentPageIsTopPage(): boolean;
		/**
		 * Destroys all the pages in the aggregation <code>pages</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyPages(): sap.m.NavContainer;
		/**
		 * Creates a new subclass of class sap.m.NavContainer with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns the currently displayed page-level control. Note: it is not necessarily an instance of sap.m.Page, but it could also be a sap.ui.core.View, sap.m.Carousel, or whatever is aggregated.
		 * 
		 * Returns undefined if no page has been added yet.
		 * @return 
		 */
		 getCurrentPage(): sap.ui.core.Control;
		/**
		 * Gets current value of property <code>height</code>.
		 * 
		 * The height of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>height</code>
		 */
		 getHeight(): sap.ui.core.CSSSize;
		/**
		 * ID of the element which is the current target of the association <code>initialPage</code>, or <code>null</code>.
		 * @return 
		 */
		 getInitialPage(): sap.ui.core.ID;
		/**
		 * Returns a metadata object for class sap.m.NavContainer.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Returns the control with the given ID from the "pages" aggregation (if available).
		 * @param sId The ID of the aggregated control to find.
		 * @return 
		 */
		 getPage(sId:string): sap.ui.core.Control;
		/**
		 * Gets content of aggregation <code>pages</code>.
		 * 
		 * The content entities between which this NavContainer navigates. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
		 * 
		 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
		 * @return 
		 */
		 getPages(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>visible</code>.
		 * 
		 * Whether the NavContainer is visible.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visible</code>
		 */
		 getVisible(): boolean;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * The width of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>pages</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oPage The page whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfPage(oPage:sap.ui.core.Control): number;
		/**
		 * Inserts a page into the aggregation <code>pages</code>.
		 * @param oPage the page to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the page should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the page is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertPage(oPage:sap.ui.core.Control, iIndex:number): sap.m.NavContainer;
		/**
		 * Removes all the controls from the aggregation <code>pages</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllPages(): sap.ui.core.Control[];
		/**
		 * Removes a page from the aggregation <code>pages</code>.
		 * @param vPage The page to remove or its index or id
		 * @return The removed page or <code>null</code>
		 */
		 removePage(vPage:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>height</code>.
		 * 
		 * The height of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sHeight New value for property <code>height</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeight(sHeight:sap.ui.core.CSSSize): sap.m.NavContainer;
		/**
		 * Sets the associated <code>initialPage</code>.
		 * @param oInitialPage ID of an element which becomes the new target of this initialPage association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setInitialPage(oInitialPage:sap.ui.core.ID|sap.ui.core.Control): sap.m.NavContainer;
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Whether the NavContainer is visible.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setVisible(bVisible:boolean): sap.m.NavContainer;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * The width of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.NavContainer;
		/**
		 * Navigates to the next page (with drill-down semantic) with the given (or default) animation. This creates a new history item inside the NavContainer and allows going back.
		 * 
		 * Note that any modifications to the target page (like setting its title, or anything else that could cause a re-rendering) should be done BEFORE calling to(), in order to avoid unwanted side effects, e.g. related to the page animation.
		 * 
		 * Available transitions currently include "slide" (default), "fade", "flip", and "show". None of these is currently making use of any given transitionParameters.
		 * 
		 * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given data object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property.
		 * @param sPageId The screen to which drilldown should happen. The ID or the control itself can be given.
		 * @param sTransitionName The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
		 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
		 * 
		 *         None of the standard transitions is currently making use of any given transition parameters.
		 * @param oData Since version 1.7.1. This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
		 * 
		 *         Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 * 
		 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameters Since version 1.7.1. This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
		 * 
		 *         For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 *         The "show", "slide" and "fade" transitions do not use any parameter.
		 * @return 
		 */
		 to(sPageId:string, sTransitionName?:string, oData?:any, oTransitionParameters?:any): sap.m.NavContainer;
	}
	interface NavContainerChild {
	}
	interface ObjectHeaderContainer {
	}
	/**
	 * Predefined types for ObjectMarker.
	 */
	type ObjectMarkerType = 
	/**
	 * Predefined types for ObjectMarker.
	 */
	"Draft" |
	/**
	 * Predefined types for ObjectMarker.
	 */
	"Favorite" |
	/**
	 * Predefined types for ObjectMarker.
	 */
	"Flagged" |
	/**
	 * Predefined types for ObjectMarker.
	 */
	"Locked" |
	/**
	 * Predefined types for ObjectMarker.
	 */
	"Unsaved";
	/**
	 * Predefined visibility for ObjectMarker.
	 */
	type ObjectMarkerVisibility = 
	/**
	 * Predefined visibility for ObjectMarker.
	 */
	"IconAndText" |
	/**
	 * Predefined visibility for ObjectMarker.
	 */
	"IconOnly" |
	/**
	 * Predefined visibility for ObjectMarker.
	 */
	"TextOnly";
	class ObjectStatus extends sap.ui.core.Control{
		/**
		 * Constructor for a new ObjectStatus.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.ObjectStatus;
		/**
		 * Creates a new subclass of class sap.m.ObjectStatus with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Icon URI. This may be either an icon font or image path.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>iconDensityAware</code>.
		 * 
		 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
		 * 
		 * If bandwidth is key for the application, set this value to false.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconDensityAware</code>
		 */
		 getIconDensityAware(): boolean;
		/**
		 * Returns a metadata object for class sap.m.ObjectStatus.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>state</code>.
		 * 
		 * Defines the text value state.
		 * 
		 * Default value is <code>None</code>.
		 * @return Value of property <code>state</code>
		 */
		 getState(): sap.ui.core.ValueState;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Defines the ObjectStatus text.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Determines the direction of the text, not including the title.
		 * Available options for the text direction are LTR (left-to-right) and RTL (right-to-left). By default the control inherits the text direction from its parent control.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Defines the ObjectStatus title.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>icon</code>.
		 * 
		 * Icon URI. This may be either an icon font or image path.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sIcon New value for property <code>icon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.m.ObjectStatus;
		/**
		 * Sets a new value for property <code>iconDensityAware</code>.
		 * 
		 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
		 * 
		 * If bandwidth is key for the application, set this value to false.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconDensityAware New value for property <code>iconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconDensityAware(bIconDensityAware:boolean): sap.m.ObjectStatus;
		/**
		 * Sets a new value for property <code>state</code>.
		 * 
		 * Defines the text value state.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>None</code>.
		 * @param sState New value for property <code>state</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setState(sState:sap.ui.core.ValueState): sap.m.ObjectStatus;
		/**
		 * Sets the text.
		 * The default value is empty/undefined.
		 * @param sText New value for property text
		 * @return this to allow method chaining
		 */
		 setText(sText:string): sap.m.ObjectStatus;
		/**
		 * Sets a new value for property <code>textDirection</code>.
		 * 
		 * Determines the direction of the text, not including the title.
		 * Available options for the text direction are LTR (left-to-right) and RTL (right-to-left). By default the control inherits the text direction from its parent control.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @param sTextDirection New value for property <code>textDirection</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextDirection(sTextDirection:sap.ui.core.TextDirection): sap.m.ObjectStatus;
		/**
		 * Sets the title.
		 * The default value is empty/undefined.
		 * @param sTitle New value for property title
		 * @return this to allow method chaining
		 */
		 setTitle(sTitle:string): sap.m.ObjectStatus;
	}
	class P13nConditionPanel extends sap.ui.core.Control{
		/**
		 * Constructor for a new P13nConditionPanel.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>dataChange</code> event of this <code>sap.m.P13nConditionPanel</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.P13nConditionPanel</code> itself.
		 * 
		 * Workaround for updating the binding
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.P13nConditionPanel</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachDataChange(fnFunction:any, oData?:any, oListener?:any): sap.m.P13nConditionPanel;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>dataChange</code> event of this <code>sap.m.P13nConditionPanel</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachDataChange(fnFunction:any, oListener:any): sap.m.P13nConditionPanel;
		/**
		 * Creates a new subclass of class sap.m.P13nConditionPanel with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>dataChange</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireDataChange(mArguments?:any): sap.m.P13nConditionPanel;
		/**
		 * Gets current value of property <code>alwaysShowAddIcon</code>.
		 * 
		 * makes the Add icon visible on each condition row. If is set to false the Add is only visible at the end and you can only append a
		 * new condition.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>alwaysShowAddIcon</code>
		 */
		 getAlwaysShowAddIcon(): boolean;
		/**
		 * Gets current value of property <code>autoAddNewRow</code>.
		 * 
		 * adds initial a new empty condition row
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>autoAddNewRow</code>
		 */
		 getAutoAddNewRow(): boolean;
		/**
		 * Gets current value of property <code>autoReduceKeyFieldItems</code>.
		 * 
		 * KeyField value can only be selected once. When you set the property to true the ConditionPanel will automatically offers on the
		 * KeyField drop down only the keyFields which are not used. The default behavior is that in each keyField dropdown all keyfields are
		 * listed.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>autoReduceKeyFieldItems</code>
		 */
		 getAutoReduceKeyFieldItems(): boolean;
		/**
		 * Gets current value of property <code>containerQuery</code>.
		 * 
		 * defines if the mediaQuery or a ContainerResize will be used for layout update. When the P13nConditionPanel is used on a dialog the
		 * property should be set to true!
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>containerQuery</code>
		 */
		 getContainerQuery(): boolean;
		/**
		 * Gets current value of property <code>disableFirstRemoveIcon</code>.
		 * 
		 * makes the remove icon on the first condition row disabled when only one condition exist.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>disableFirstRemoveIcon</code>
		 */
		 getDisableFirstRemoveIcon(): boolean;
		/**
		 * Gets current value of property <code>displayFormat</code>.
		 * 
		 * This represents the displayFormat of the condition Values. With the value "UpperCase" the entered value of the condition will be
		 * converted to upperCase.
		 * @return Value of property <code>displayFormat</code>
		 */
		 getDisplayFormat(): string;
		/**
		 * Gets current value of property <code>exclude</code>.
		 * 
		 * exclude options for filter
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>exclude</code>
		 */
		 getExclude(): boolean;
		/**
		 * Gets current value of property <code>layoutMode</code>.
		 * 
		 * can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table"
		 * or"Phone" you can set a fixed layout.
		 * @return Value of property <code>layoutMode</code>
		 */
		 getLayoutMode(): string;
		/**
		 * Gets current value of property <code>maxConditions</code>.
		 * 
		 * defines the max number of conditions on the ConditionPanel
		 * 
		 * Default value is <code>-1</code>.
		 * @return Value of property <code>maxConditions</code>
		 */
		 getMaxConditions(): string;
		/**
		 * Returns a metadata object for class sap.m.P13nConditionPanel.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>showLabel</code>.
		 * 
		 * show additional labels in the condition
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showLabel</code>
		 */
		 getShowLabel(): boolean;
		/**
		 * Gets current value of property <code>usePrevConditionSetting</code>.
		 * 
		 * new added condition use the settings from the previous condition as default.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>usePrevConditionSetting</code>
		 */
		 getUsePrevConditionSetting(): boolean;
		/**
		 * Gets current value of property <code>validationExecutor</code>.
		 * 
		 * Calls the validation listener tbd...
		 * @return Value of property <code>validationExecutor</code>
		 */
		 getValidationExecutor(): any;
		/**
		 * Sets a new value for property <code>autoAddNewRow</code>.
		 * 
		 * adds initial a new empty condition row
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bAutoAddNewRow New value for property <code>autoAddNewRow</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setAutoAddNewRow(bAutoAddNewRow:boolean): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>autoReduceKeyFieldItems</code>.
		 * 
		 * KeyField value can only be selected once. When you set the property to true the ConditionPanel will automatically offers on the
		 * KeyField drop down only the keyFields which are not used. The default behavior is that in each keyField dropdown all keyfields are
		 * listed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bAutoReduceKeyFieldItems New value for property <code>autoReduceKeyFieldItems</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setAutoReduceKeyFieldItems(bAutoReduceKeyFieldItems:boolean): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>disableFirstRemoveIcon</code>.
		 * 
		 * makes the remove icon on the first condition row disabled when only one condition exist.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bDisableFirstRemoveIcon New value for property <code>disableFirstRemoveIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDisableFirstRemoveIcon(bDisableFirstRemoveIcon:boolean): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>displayFormat</code>.
		 * 
		 * This represents the displayFormat of the condition Values. With the value "UpperCase" the entered value of the condition will be
		 * converted to upperCase.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sDisplayFormat New value for property <code>displayFormat</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDisplayFormat(sDisplayFormat:string): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>exclude</code>.
		 * 
		 * exclude options for filter
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bExclude New value for property <code>exclude</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setExclude(bExclude:boolean): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>maxConditions</code>.
		 * 
		 * defines the max number of conditions on the ConditionPanel
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>-1</code>.
		 * @param sMaxConditions New value for property <code>maxConditions</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMaxConditions(sMaxConditions:string): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>showLabel</code>.
		 * 
		 * show additional labels in the condition
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowLabel New value for property <code>showLabel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowLabel(bShowLabel:boolean): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>usePrevConditionSetting</code>.
		 * 
		 * new added condition use the settings from the previous condition as default.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bUsePrevConditionSetting New value for property <code>usePrevConditionSetting</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setUsePrevConditionSetting(bUsePrevConditionSetting:boolean): sap.m.P13nConditionPanel;
		/**
		 * Sets a new value for property <code>validationExecutor</code>.
		 * 
		 * Calls the validation listener tbd...
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param oValidationExecutor New value for property <code>validationExecutor</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setValidationExecutor(oValidationExecutor:any): sap.m.P13nConditionPanel;
	}
	class P13nFilterItem extends sap.ui.core.Item{
		/**
		 * Constructor for a new P13nFilterItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.P13nFilterItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.P13nFilterItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class P13nFilterPanel extends sap.m.P13nPanel{
		/**
		 * Constructor for a new P13nFilterPanel.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.P13nFilterPanel with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.P13nFilterPanel.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class P13nGroupItem extends sap.ui.core.Item{
		/**
		 * Constructor for a new P13nGroupItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.P13nGroupItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.P13nGroupItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class P13nGroupPanel extends sap.m.P13nPanel{
		/**
		 * Constructor for a new P13nGroupPanel.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.P13nGroupPanel with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.P13nGroupPanel.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	/**
	 * Type of panels used in the personalization dialog.
	 */
	type P13nPanelType = 
	/**
	 * Type of panels used in the personalization dialog.
	 */
	"columns" |
	/**
	 * Type of panels used in the personalization dialog.
	 */
	"dimeasure" |
	/**
	 * Type of panels used in the personalization dialog.
	 */
	"filter" |
	/**
	 * Type of panels used in the personalization dialog.
	 */
	"group" |
	/**
	 * Type of panels used in the personalization dialog.
	 */
	"sort";
	class P13nSortItem extends sap.ui.core.Item{
		/**
		 * Constructor for a new P13nSortItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.P13nSortItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.P13nSortItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class P13nSortPanel extends sap.m.P13nPanel{
		/**
		 * Constructor for a new P13nSortPanel.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.P13nSortPanel with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.P13nSortPanel.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class Page extends sap.ui.core.Control{
		/**
		 * Constructor for a new Page.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.Page;
		/**
		 * Adds some headerContent to the aggregation <code>headerContent</code>.
		 * @param oHeaderContent the headerContent to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addHeaderContent(oHeaderContent:sap.ui.core.Control): sap.m.Page;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.Page;
		/**
		 * Destroys the customHeader in the aggregation <code>customHeader</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyCustomHeader(): sap.m.Page;
		/**
		 * Destroys the footer in the aggregation <code>footer</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyFooter(): sap.m.Page;
		/**
		 * Destroys all the headerContent in the aggregation <code>headerContent</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyHeaderContent(): sap.m.Page;
		/**
		 * Destroys the landmarkInfo in the aggregation <code>landmarkInfo</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyLandmarkInfo(): sap.m.Page;
		/**
		 * Destroys the subHeader in the aggregation <code>subHeader</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroySubHeader(): sap.m.Page;
		/**
		 * Creates a new subclass of class sap.m.Page with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>backgroundDesign</code>.
		 * 
		 * This property is used to set the background color of a page. When a list is placed inside a page, the value "List" should be used to display a gray background. "Standard", with the value white, is used as default if not specified.
		 * 
		 * Default value is <code>Standard</code>.
		 * @return Value of property <code>backgroundDesign</code>
		 */
		 getBackgroundDesign(): sap.m.PageBackgroundDesign;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * The content of this page
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>customHeader</code>.
		 * 
		 * The (optional) custom header of this page.
		 * Use this aggregation only when a custom header is constructed where the default header consisting of title text + nav button is not sufficient.
		 * If this aggregation is set, the simple properties "title", "showNavButton", "NavButtonText" and "icon" are not used.
		 * @return 
		 */
		 getCustomHeader(): sap.m.IBar;
		/**
		 * Gets current value of property <code>enableScrolling</code>.
		 * 
		 * Enable vertical scrolling of page contents. Page headers and footers are fixed and do not scroll.
		 * If set to false, there will be no scrolling at all.
		 * 
		 * The Page only allows vertical scrolling because horizontal scrolling is discouraged in general for full-page content. If it still needs to be achieved, disable the Page scrolling and use a ScrollContainer as full-page content of the Page. This allows you to freely configure scrolling. It can also be used to create horizontally-scrolling sub-areas of (vertically-scrolling) Pages.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enableScrolling</code>
		 */
		 getEnableScrolling(): boolean;
		/**
		 * Gets current value of property <code>floatingFooter</code>.
		 * 
		 * Decides whether the floating footer behavior should be enabled.
		 * When the floating footer behavior is used, the content is visible when it's underneath the footer.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>floatingFooter</code>
		 */
		 getFloatingFooter(): boolean;
		/**
		 * Gets content of aggregation <code>footer</code>.
		 * 
		 * The (optional) footer of this page. It is always located at the bottom of the page
		 * @return 
		 */
		 getFooter(): sap.m.IBar;
		/**
		 * Gets content of aggregation <code>headerContent</code>.
		 * 
		 * Controls to be added to the right side of the page header. Usually an application would use Button controls and limit the number to one when the application needs to run on smartphones. There is no automatic overflow handling when the space is insufficient.
		 * When a customHeader is used, this aggregation will be ignored.
		 * @return 
		 */
		 getHeaderContent(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>landmarkInfo</code>.
		 * 
		 * Accessible landmark settings to be applied on the containers of the <code>sap.m.Page</code> control.
		 * 
		 * If not set, no landmarks will be written.
		 * @return 
		 */
		 getLandmarkInfo(): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Returns a metadata object for class sap.m.Page.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>navButtonTooltip</code>.
		 * 
		 * The tooltip of the nav button
		 * 
		 * Since version 1.34
		 * @return Value of property <code>navButtonTooltip</code>
		 */
		 getNavButtonTooltip(): string;
		/**
		 * Gets current value of property <code>showHeader</code>.
		 * 
		 * Whether this page shall have a header.
		 * If set to true, either the control under the "customHeader" aggregation is used, or if there is no such control, a Header control is constructed from the properties "title", "showNavButton", "navButtonText" and "icon" depending on the platform.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showHeader</code>
		 */
		 getShowHeader(): boolean;
		/**
		 * Gets current value of property <code>showNavButton</code>.
		 * 
		 * A nav button will be rendered on the left area of header bar if this property is set to true.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>showNavButton</code>
		 */
		 getShowNavButton(): boolean;
		/**
		 * Gets content of aggregation <code>subHeader</code>.
		 * 
		 * a subHeader will be rendered directly under the header
		 * @return 
		 */
		 getSubHeader(): sap.m.IBar;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * The title text appearing in the page header bar.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Gets current value of property <code>titleLevel</code>.
		 * 
		 * Defines the semantic level of the title. Using "Auto" no explicit level information is written.
		 * Used for accessibility purposes only.
		 * 
		 * Default value is <code>Auto</code>.
		 * @return Value of property <code>titleLevel</code>
		 */
		 getTitleLevel(): sap.ui.core.TitleLevel;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>headerContent</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oHeaderContent The headerContent whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfHeaderContent(oHeaderContent:sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.Page;
		/**
		 * Inserts a headerContent into the aggregation <code>headerContent</code>.
		 * @param oHeaderContent the headerContent to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the headerContent should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the headerContent is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertHeaderContent(oHeaderContent:sap.ui.core.Control, iIndex:number): sap.m.Page;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>headerContent</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllHeaderContent(): sap.ui.core.Control[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a headerContent from the aggregation <code>headerContent</code>.
		 * @param vHeaderContent The headerContent to remove or its index or id
		 * @return The removed headerContent or <code>null</code>
		 */
		 removeHeaderContent(vHeaderContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Scrolls to the given position. Only available if enableScrolling is set to "true".
		 * @param y The vertical pixel position to scroll to. Scrolling down happens with positive values.
		 * @param time The duration of animated scrolling. To scroll immediately without animation, give 0 as value. 0 is also the default value, when this optional parameter is omitted.
		 * @return 
		 */
		 scrollTo(y:number, time:number): sap.m.Page;
		/**
		 * Sets a new value for property <code>backgroundDesign</code>.
		 * 
		 * This property is used to set the background color of a page. When a list is placed inside a page, the value "List" should be used to display a gray background. "Standard", with the value white, is used as default if not specified.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Standard</code>.
		 * @param sBackgroundDesign New value for property <code>backgroundDesign</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setBackgroundDesign(sBackgroundDesign:sap.m.PageBackgroundDesign): sap.m.Page;
		/**
		 * Sets a new value for property <code>enableScrolling</code>.
		 * 
		 * Enable vertical scrolling of page contents. Page headers and footers are fixed and do not scroll.
		 * If set to false, there will be no scrolling at all.
		 * 
		 * The Page only allows vertical scrolling because horizontal scrolling is discouraged in general for full-page content. If it still needs to be achieved, disable the Page scrolling and use a ScrollContainer as full-page content of the Page. This allows you to freely configure scrolling. It can also be used to create horizontally-scrolling sub-areas of (vertically-scrolling) Pages.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnableScrolling New value for property <code>enableScrolling</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnableScrolling(bEnableScrolling:boolean): sap.m.Page;
		/**
		 * Sets a new value for property <code>floatingFooter</code>.
		 * 
		 * Decides whether the floating footer behavior should be enabled.
		 * When the floating footer behavior is used, the content is visible when it's underneath the footer.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bFloatingFooter New value for property <code>floatingFooter</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFloatingFooter(bFloatingFooter:boolean): sap.m.Page;
		/**
		 * Sets the aggregated <code>footer</code>.
		 * @param oFooter The footer to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFooter(oFooter:sap.m.IBar): sap.m.Page;
		/**
		 * Sets the aggregated <code>landmarkInfo</code>.
		 * @param oLandmarkInfo The landmarkInfo to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setLandmarkInfo(oLandmarkInfo:sap.m.PageAccessibleLandmarkInfo): sap.m.Page;
		/**
		 * Sets a new value for property <code>navButtonTooltip</code>.
		 * 
		 * The tooltip of the nav button
		 * 
		 * Since version 1.34
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sNavButtonTooltip New value for property <code>navButtonTooltip</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setNavButtonTooltip(sNavButtonTooltip:string): sap.m.Page;
		/**
		 * Sets a new value for property <code>showHeader</code>.
		 * 
		 * Whether this page shall have a header.
		 * If set to true, either the control under the "customHeader" aggregation is used, or if there is no such control, a Header control is constructed from the properties "title", "showNavButton", "navButtonText" and "icon" depending on the platform.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowHeader New value for property <code>showHeader</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowHeader(bShowHeader:boolean): sap.m.Page;
		/**
		 * Sets a new value for property <code>showNavButton</code>.
		 * 
		 * A nav button will be rendered on the left area of header bar if this property is set to true.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bShowNavButton New value for property <code>showNavButton</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowNavButton(bShowNavButton:boolean): sap.m.Page;
		/**
		 * Sets the aggregated <code>subHeader</code>.
		 * @param oSubHeader The subHeader to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSubHeader(oSubHeader:sap.m.IBar): sap.m.Page;
		/**
		 * Sets a new value for property <code>title</code>.
		 * 
		 * The title text appearing in the page header bar.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sTitle New value for property <code>title</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTitle(sTitle:string): sap.m.Page;
		/**
		 * Sets a new value for property <code>titleLevel</code>.
		 * 
		 * Defines the semantic level of the title. Using "Auto" no explicit level information is written.
		 * Used for accessibility purposes only.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Auto</code>.
		 * @param sTitleLevel New value for property <code>titleLevel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTitleLevel(sTitleLevel:sap.ui.core.TitleLevel): sap.m.Page;
	}
	class PageAccessibleLandmarkInfo extends sap.ui.core.Element{
		/**
		 * Constructor for a new <code>sap.m.PageAccessibleLandmarkInfo</code> element.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId Id for the new element, generated automatically if no id is given
		 * @param mSettings Initial settings for the new element
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.PageAccessibleLandmarkInfo with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>contentLabel</code>.
		 * 
		 * Texts which describes the landmark of the content container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * @return Value of property <code>contentLabel</code>
		 */
		 getContentLabel(): string;
		/**
		 * Gets current value of property <code>contentRole</code>.
		 * 
		 * Landmark role of the content container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * Default value is <code>Main</code>.
		 * @return Value of property <code>contentRole</code>
		 */
		 getContentRole(): sap.ui.core.AccessibleLandmarkRole;
		/**
		 * Gets current value of property <code>footerLabel</code>.
		 * 
		 * Texts which describes the landmark of the header container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * @return Value of property <code>footerLabel</code>
		 */
		 getFooterLabel(): string;
		/**
		 * Gets current value of property <code>footerRole</code>.
		 * 
		 * Landmark role of the footer container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * Default value is <code>Region</code>.
		 * @return Value of property <code>footerRole</code>
		 */
		 getFooterRole(): sap.ui.core.AccessibleLandmarkRole;
		/**
		 * Gets current value of property <code>headerLabel</code>.
		 * 
		 * Texts which describes the landmark of the header container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * @return Value of property <code>headerLabel</code>
		 */
		 getHeaderLabel(): string;
		/**
		 * Gets current value of property <code>headerRole</code>.
		 * 
		 * Landmark role of the header container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * Default value is <code>Region</code>.
		 * @return Value of property <code>headerRole</code>
		 */
		 getHeaderRole(): sap.ui.core.AccessibleLandmarkRole;
		/**
		 * Returns a metadata object for class sap.m.PageAccessibleLandmarkInfo.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>rootLabel</code>.
		 * 
		 * Texts which describes the landmark of the root container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * @return Value of property <code>rootLabel</code>
		 */
		 getRootLabel(): string;
		/**
		 * Gets current value of property <code>rootRole</code>.
		 * 
		 * Landmark role of the root container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * Default value is <code>Region</code>.
		 * @return Value of property <code>rootRole</code>
		 */
		 getRootRole(): sap.ui.core.AccessibleLandmarkRole;
		/**
		 * Gets current value of property <code>subHeaderLabel</code>.
		 * 
		 * Texts which describes the landmark of the subheader container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * @return Value of property <code>subHeaderLabel</code>
		 */
		 getSubHeaderLabel(): string;
		/**
		 * Gets current value of property <code>subHeaderRole</code>.
		 * 
		 * Landmark role of the subheader container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * @return Value of property <code>subHeaderRole</code>
		 */
		 getSubHeaderRole(): sap.ui.core.AccessibleLandmarkRole;
		/**
		 * Sets a new value for property <code>contentLabel</code>.
		 * 
		 * Texts which describes the landmark of the content container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sContentLabel New value for property <code>contentLabel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setContentLabel(sContentLabel:string): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>contentRole</code>.
		 * 
		 * Landmark role of the content container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Main</code>.
		 * @param sContentRole New value for property <code>contentRole</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setContentRole(sContentRole:sap.ui.core.AccessibleLandmarkRole): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>footerLabel</code>.
		 * 
		 * Texts which describes the landmark of the header container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sFooterLabel New value for property <code>footerLabel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFooterLabel(sFooterLabel:string): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>footerRole</code>.
		 * 
		 * Landmark role of the footer container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Region</code>.
		 * @param sFooterRole New value for property <code>footerRole</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFooterRole(sFooterRole:sap.ui.core.AccessibleLandmarkRole): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>headerLabel</code>.
		 * 
		 * Texts which describes the landmark of the header container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sHeaderLabel New value for property <code>headerLabel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeaderLabel(sHeaderLabel:string): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>headerRole</code>.
		 * 
		 * Landmark role of the header container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Region</code>.
		 * @param sHeaderRole New value for property <code>headerRole</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeaderRole(sHeaderRole:sap.ui.core.AccessibleLandmarkRole): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>rootLabel</code>.
		 * 
		 * Texts which describes the landmark of the root container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sRootLabel New value for property <code>rootLabel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setRootLabel(sRootLabel:string): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>rootRole</code>.
		 * 
		 * Landmark role of the root container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Region</code>.
		 * @param sRootRole New value for property <code>rootRole</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setRootRole(sRootRole:sap.ui.core.AccessibleLandmarkRole): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>subHeaderLabel</code>.
		 * 
		 * Texts which describes the landmark of the subheader container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), a predefined text
		 * is used.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sSubHeaderLabel New value for property <code>subHeaderLabel</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSubHeaderLabel(sSubHeaderLabel:string): sap.m.PageAccessibleLandmarkInfo;
		/**
		 * Sets a new value for property <code>subHeaderRole</code>.
		 * 
		 * Landmark role of the subheader container of the corresponding <code>sap.m.Page</code> control.
		 * 
		 * If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sSubHeaderRole New value for property <code>subHeaderRole</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSubHeaderRole(sSubHeaderRole:sap.ui.core.AccessibleLandmarkRole): sap.m.PageAccessibleLandmarkInfo;
	}
	/**
	 * Available Page Background Design.
	 */
	type PageBackgroundDesign = 
	/**
	 * Available Page Background Design.
	 */
	"List" |
	/**
	 * Available Page Background Design.
	 */
	"Solid" |
	/**
	 * Available Page Background Design.
	 */
	"Standard" |
	/**
	 * Available Page Background Design.
	 */
	"Transparent";
	/**
	 * Types for the placement of popover control.
	 */
	type PlacementType = 
	/**
	 * Types for the placement of popover control.
	 */
	"Auto" |
	/**
	 * Types for the placement of popover control.
	 */
	"Bottom" |
	/**
	 * Types for the placement of popover control.
	 */
	"Horizontal" |
	/**
	 * Types for the placement of popover control.
	 */
	"HorizontalPreferedLeft" |
	/**
	 * Types for the placement of popover control.
	 */
	"HorizontalPreferedRight" |
	/**
	 * Types for the placement of popover control.
	 */
	"HorizontalPreferredLeft" |
	/**
	 * Types for the placement of popover control.
	 */
	"HorizontalPreferredRight" |
	/**
	 * Types for the placement of popover control.
	 */
	"Left" |
	/**
	 * Types for the placement of popover control.
	 */
	"PreferredBottomOrFlip" |
	/**
	 * Types for the placement of popover control.
	 */
	"PreferredLeftOrFlip" |
	/**
	 * Types for the placement of popover control.
	 */
	"PreferredRightOrFlip" |
	/**
	 * Types for the placement of popover control.
	 */
	"PreferredTopOrFlip" |
	/**
	 * Types for the placement of popover control.
	 */
	"Right" |
	/**
	 * Types for the placement of popover control.
	 */
	"Top" |
	/**
	 * Types for the placement of popover control.
	 */
	"Vertical" |
	/**
	 * Types for the placement of popover control.
	 */
	"VerticalPreferedBottom" |
	/**
	 * Types for the placement of popover control.
	 */
	"VerticalPreferedTop" |
	/**
	 * Types for the placement of popover control.
	 */
	"VerticalPreferredBottom" |
	/**
	 * Types for the placement of popover control.
	 */
	"VerticalPreferredTop";
	class Popover extends sap.ui.core.Control{
		/**
		 * Constructor for a new Popover.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Hook called after adjusment of the Popover position.
		 */
		protected _afterAdjustPositionAndArrowHook();
		/**
		 * If customHeader is set, this will return the customHeaer. Otherwise it creates a header and put the
		 * title and buttons if needed inside, and finally return this newly create header.
		 */
		protected _getAnyHeader();
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Popover;
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.Popover;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterClose</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Popover</code> itself.
		 * 
		 * This event will be fired after the popover is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterClose(fnFunction:any, oData?:any, oListener?:any): sap.m.Popover;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterOpen</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Popover</code> itself.
		 * 
		 * This event will be fired after the popover is opened.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.Popover;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>beforeClose</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Popover</code> itself.
		 * 
		 * This event will be fired before the popover is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachBeforeClose(fnFunction:any, oData?:any, oListener?:any): sap.m.Popover;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>beforeOpen</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Popover</code> itself.
		 * 
		 * This event will be fired before the popover is opened.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachBeforeOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.Popover;
		/**
		 * Closes the popover when it's already opened.
		 * @return Reference to the control instance for chaining
		 */
		 close(): sap.m.Popover;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.Popover;
		/**
		 * Destroys the customHeader in the aggregation <code>customHeader</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyCustomHeader(): sap.m.Popover;
		/**
		 * Destroys the footer in the aggregation <code>footer</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyFooter(): sap.m.Popover;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterClose</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterClose(fnFunction:any, oListener:any): sap.m.Popover;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterOpen</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterOpen(fnFunction:any, oListener:any): sap.m.Popover;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>beforeClose</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachBeforeClose(fnFunction:any, oListener:any): sap.m.Popover;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>beforeOpen</code> event of this <code>sap.m.Popover</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachBeforeOpen(fnFunction:any, oListener:any): sap.m.Popover;
		/**
		 * Creates a new subclass of class sap.m.Popover with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>afterClose</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>openBy</code> of type <code>sap.ui.core.Control</code>This refers to the control which opens the popover.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterClose(mArguments?:any): sap.m.Popover;
		/**
		 * Fires event <code>afterOpen</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>openBy</code> of type <code>sap.ui.core.Control</code>This refers to the control which opens the popover.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterOpen(mArguments?:any): sap.m.Popover;
		/**
		 * Fires event <code>beforeClose</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>openBy</code> of type <code>sap.ui.core.Control</code>This refers to the control which opens the popover.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireBeforeClose(mArguments?:any): sap.m.Popover;
		/**
		 * Fires event <code>beforeOpen</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>openBy</code> of type <code>sap.ui.core.Control</code>This refers to the control which opens the popover.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireBeforeOpen(mArguments?:any): sap.m.Popover;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * The content inside the popover.
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Gets content of aggregation <code>customHeader</code>.
		 * 
		 * Any control that needed to be displayed in the header area. When this is set, the showHeader property is ignored, and only this customHeader is shown on the top of popover.
		 * @return 
		 */
		 getCustomHeader(): sap.ui.core.Control;
		/**
		 * Gets content of aggregation <code>footer</code>.
		 * 
		 * This is optional footer which is shown on the bottom of the popover.
		 * @return 
		 */
		 getFooter(): sap.ui.core.Control;
		/**
		 * Returns a metadata object for class sap.m.Popover.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>modal</code>.
		 * 
		 * If the popover will not be closed when tapping outside the popover. It also blocks any interaction with the background. The default value is false.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>modal</code>
		 */
		 getModal(): boolean;
		/**
		 * Gets current value of property <code>offsetX</code>.
		 * 
		 * The offset for the popover placement in the x axis. It's with unit pixel.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>offsetX</code>
		 */
		 getOffsetX(): number;
		/**
		 * Gets current value of property <code>offsetY</code>.
		 * 
		 * The offset for the popover placement in the y axis. It's with unit pixel.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>offsetY</code>
		 */
		 getOffsetY(): number;
		/**
		 * Gets current value of property <code>placement</code>.
		 * 
		 * This is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom, sap.m.PlacementType.Horizontal, sap.m.PlacementType.HorizontalPreferredLeft, sap.m.PlacementType.HorizontalPreferredRight, sap.m.PlacementType.Vertical, sap.m.PlacementType.VerticalPreferredTop, sap.m.PlacementType.VerticalPreferredBottom, sap.m.PlacementType.Auto. The default value is sap.m.PlacementType.Right. Setting this property while popover is open won't cause any rerendering of the popover, but it will take effect when it's opened again.
		 * 
		 * Default value is <code>Right</code>.
		 * @return Value of property <code>placement</code>
		 */
		 getPlacement(): sap.m.PlacementType;
		/**
		 * Gets current value of property <code>showHeader</code>.
		 * 
		 * If a header should be shown at the top of the popover.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showHeader</code>
		 */
		 getShowHeader(): boolean;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Title text appears in the header. This property will be ignored when showHeader is set to false.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.Popover;
		/**
		 * Opens the Popover and set the Popover position according to the {@link #getPlacement() placement} property around the <code>oControl</code> parameter.
		 * @param oControl This is the control to which the Popover will be placed. It can be not only a UI5 control, but also an existing DOM reference. The side of the placement depends on the placement property set in the Popover.
		 * @param bSkipInstanceManager 
		 * @return Reference to the control instance for chaining
		 */
		 openBy(oControl:any, bSkipInstanceManager:boolean): sap.m.Popover;
		/**
		 * Calculate outerHeight of the element; used as hook for SVG elements
		 * @param oElement An Element for which outerHeight will be calculated.
		 * @param bIncludeMargin Determines if the margins should be included in the calculated outerHeight. Default value is false.
		 */
		protected outerHeight(oElement:any, bIncludeMargin:boolean);
		/**
		 * Calculate outerWidth of the element; used as hook for SVG elements
		 * @param oElement An Element for which outerWidth will be calculated.
		 * @param bIncludeMargin Determines if the margins should be included in the calculated outerWidth. Default value is false.
		 */
		protected outerWidth(oElement:any, bIncludeMargin:boolean);
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Setter for property <code>bounce</code>.
		 * 
		 * Default value is empty
		 * @param bBounce New value for property <code>bounce</code>
		 * @return Reference to the control instance for chaining
		 */
		protected setBounce(bBounce:boolean): sap.m.Popover;
		/**
		 * Sets the aggregated <code>customHeader</code>.
		 * @param oCustomHeader The customHeader to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomHeader(oCustomHeader:sap.ui.core.Control): sap.m.Popover;
		/**
		 * Sets the aggregated <code>footer</code>.
		 * @param oFooter The footer to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFooter(oFooter:sap.ui.core.Control): sap.m.Popover;
		/**
		 * Setter for property <code>modal</code>.
		 * This overwrites the default setter of the property <code>modal</code> to avoid rerendering the whole popover control.
		 * 
		 * Default value is <code>false</code>
		 * @param bModal New value for property <code>modal</code>.
		 * @param sModalCSSClass A CSS class (or space-separated list of classes) that should be added to the block layer.
		 * @return Reference to the control instance for chaining
		 */
		 setModal(bModal:boolean, sModalCSSClass?:string): sap.m.Popover;
		/**
		 * Sets a new value for property <code>offsetX</code>.
		 * 
		 * The offset for the popover placement in the x axis. It's with unit pixel.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param iOffsetX New value for property <code>offsetX</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setOffsetX(iOffsetX:number): sap.m.Popover;
		/**
		 * Sets a new value for property <code>offsetY</code>.
		 * 
		 * The offset for the popover placement in the y axis. It's with unit pixel.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param iOffsetY New value for property <code>offsetY</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setOffsetY(iOffsetY:number): sap.m.Popover;
		/**
		 * Set the placement of the Popover.
		 * @param sPlacement The position of the Popover
		 * @return Reference to the control instance for chaining
		 */
		 setPlacement(sPlacement:sap.m.PlacementType): sap.m.Popover;
		/**
		 * Sets a new value for property <code>showHeader</code>.
		 * 
		 * If a header should be shown at the top of the popover.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bShowHeader New value for property <code>showHeader</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setShowHeader(bShowHeader:boolean): sap.m.Popover;
		/**
		 * The setter of the title property.
		 * 
		 * If you want to show a header in the popover, don't forget to set the
		 * {@link #setShowHeader showHeader} property to true.
		 * @param sTitle The title to be set
		 * @return Reference to the control instance for chaining
		 */
		 setTitle(sTitle:string): sap.m.Popover;
	}
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	type QuickViewGroupElementType = 
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	"email" |
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	"link" |
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	"mobile" |
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	"pageLink" |
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	"phone" |
	/**
	 * QuickViewGroupElement is a combination of one label and another control (Link or Text) associated to this label
	 */
	"text";
	class RadioButton extends sap.ui.core.Control{
		/**
		 * Constructor for a new RadioButton.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.RadioButton;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.RadioButton;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.m.RadioButton</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.RadioButton</code> itself.
		 * 
		 * Event is triggered when the user makes a change on the radio button (selecting or unselecting it).
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.RadioButton</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.m.RadioButton;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.m.RadioButton</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.m.RadioButton;
		/**
		 * Destroys all related objects to the RadioButton
		 */
		 exit();
		/**
		 * Creates a new subclass of class sap.m.RadioButton with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>select</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>selected</code> of type <code>boolean</code>Checks whether the RadioButton is active or not.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.m.RadioButton;
		/**
		 * Gets current value of property <code>activeHandling</code>.
		 * 
		 * This is a flag to switch on activeHandling. When it is switched off,
		 * there will not be visual changes on active state. Default value is 'true'
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>activeHandling</code>
		 */
		 getActiveHandling(): boolean;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Specifies if the radio button is disabled.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Gets current value of property <code>groupName</code>.
		 * 
		 * Name of the radio button group the current radio button belongs to. You can define a new name for the group.
		 * If no new name is specified, this radio button belongs to the sapMRbDefaultGroup per default. Default behavior of a radio button in a group is that when one of the radio buttons in a group is selected, all others are unselected.
		 * 
		 * Default value is <code>sapMRbDefaultGroup</code>.
		 * @return Value of property <code>groupName</code>
		 */
		 getGroupName(): string;
		/**
		 * Returns a metadata object for class sap.m.RadioButton.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>selected</code>.
		 * 
		 * Specifies the select state of the radio button
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>selected</code>
		 */
		 getSelected(): boolean;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Specifies the text displayed next to the RadioButton
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Width of the Label
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Pseudo event for pseudo 'select' event... space, enter, ... without modifiers (Ctrl, Alt or Shift)
		 * @param oEvent provides information for the event
		 */
		 onsapselect(oEvent:any);
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>activeHandling</code>.
		 * 
		 * This is a flag to switch on activeHandling. When it is switched off,
		 * there will not be visual changes on active state. Default value is 'true'
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bActiveHandling New value for property <code>activeHandling</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActiveHandling(bActiveHandling:boolean): sap.m.RadioButton;
		/**
		 * Method to set a RadioButton's state to active or inactive.
		 * @param bActive Sets the active state to true or false
		 */
		 setActiveState(bActive:boolean);
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Specifies if the radio button is disabled.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.RadioButton;
		/**
		 * Sets RadioButton's groupName. Only one radioButton from the same group can be selected
		 * @param sGroupName Name of the group to which the RadioButton will belong.
		 * @return Reference to the control instance for chaining
		 */
		 setGroupName(sGroupName:string): sap.m.RadioButton;
		/**
		 * Sets the state of the RadioButton to selected.
		 * @param bSelected defines if the radio button is selected
		 * @return Reference to the control instance for chaining
		 */
		 setSelected(bSelected:boolean): sap.m.RadioButton;
		/**
		 * Sets the text for the RadioButton's label.
		 * @param sText The text to be set
		 * @return Reference to the control instance for chaining
		 */
		 setText(sText:string): sap.m.RadioButton;
		/**
		 * Sets the text direction for the RadioButton's label.
		 * @param sDirection Text direction to be set to RadioButton's label
		 * @return Reference to the control instance for chaining
		 */
		 setTextDirection(sDirection:string): sap.m.RadioButton;
		/**
		 * Sets the width for the RadioButton's label.
		 * @param sWidth CSS size to be set as width of the label
		 * @return Reference to the control instance for chaining
		 */
		 setWidth(sWidth:string): sap.m.RadioButton;
	}
	/**
	 * Possible values for the visualization of float values in the RatingIndicator Control.
	 */
	type RatingIndicatorVisualMode = 
	/**
	 * Possible values for the visualization of float values in the RatingIndicator Control.
	 */
	"Full" |
	/**
	 * Possible values for the visualization of float values in the RatingIndicator Control.
	 */
	"Half";
	/**
	 * Breakpoint names for different screen sizes.
	 */
	type ScreenSize = 
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"Desktop" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"Large" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"Medium" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"Phone" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"Small" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"Tablet" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"XLarge" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"XSmall" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"XXLarge" |
	/**
	 * Breakpoint names for different screen sizes.
	 */
	"XXSmall";
	class ScrollContainer extends sap.ui.core.Control{
		/**
		 * Constructor for a new ScrollContainer.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some content to the aggregation <code>content</code>.
		 * @param oContent the content to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addContent(oContent:sap.ui.core.Control): sap.m.ScrollContainer;
		/**
		 * Destroys all the content in the aggregation <code>content</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyContent(): sap.m.ScrollContainer;
		/**
		 * Creates a new subclass of class sap.m.ScrollContainer with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets content of aggregation <code>content</code>.
		 * 
		 * The content of the ScrollContainer.
		 * @return 
		 */
		 getContent(): sap.ui.core.Control[];
		/**
		 * Gets current value of property <code>focusable</code>.
		 * 
		 * Whether the scroll container can be focused.
		 * 
		 * Note that it should be set to "true" when there are no focusable elements inside or when keyboard interaction requires an additional tab stop on the container.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>focusable</code>
		 */
		 getFocusable(): boolean;
		/**
		 * Gets current value of property <code>height</code>.
		 * 
		 * The height of the ScrollContainer.
		 * By default the height equals the content height. If only horizontal scrolling is used, do not set the height or make sure the height is always larger than the height of the content.
		 * 
		 * Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
		 * 
		 * Default value is <code>auto</code>.
		 * @return Value of property <code>height</code>
		 */
		 getHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>horizontal</code>.
		 * 
		 * Whether horizontal scrolling should be possible.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>horizontal</code>
		 */
		 getHorizontal(): boolean;
		/**
		 * Returns a metadata object for class sap.m.ScrollContainer.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>vertical</code>.
		 * 
		 * Whether vertical scrolling should be possible.
		 * 
		 * Note that this is off by default because typically a Page is used as fullscreen element which can handle vertical scrolling. If this is not the case and vertical scrolling is required, this flag needs to be set to "true".
		 * Important: it is not supported to have nested controls that both enable scrolling into the same dimension.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>vertical</code>
		 */
		 getVertical(): boolean;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * The width of the ScrollContainer.
		 * If not set, it consumes the complete available width, behaving like normal HTML block elements. If only vertical scrolling is enabled, make sure the content always fits or wraps.
		 * 
		 * Default value is <code>auto</code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oContent The content whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfContent(oContent:sap.ui.core.Control): number;
		/**
		 * Inserts a content into the aggregation <code>content</code>.
		 * @param oContent the content to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the content should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the content is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertContent(oContent:sap.ui.core.Control, iIndex:number): sap.m.ScrollContainer;
		/**
		 * Removes all the controls from the aggregation <code>content</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllContent(): sap.ui.core.Control[];
		/**
		 * Removes a content from the aggregation <code>content</code>.
		 * @param vContent The content to remove or its index or id
		 * @return The removed content or <code>null</code>
		 */
		 removeContent(vContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Scrolls to the given position.
		 * When called while the control is not rendered (yet), the scrolling position is still applied, but there is no animation.
		 * @param x The horizontal pixel position to scroll to.
		 *         Scrolling to the right happens with positive values. In right-to-left mode scrolling starts at the right side and higher values scroll to the left.
		 *         If only vertical scrolling is enabled, give 0 as value.
		 * @param y The vertical pixel position to scroll to.
		 *         Scrolling down happens with positive values.
		 *         If only horizontal scrolling is enabled, give 0 as value.
		 * @param time The duration of animated scrolling.
		 *         To scroll immediately without animation, give 0 as value. 0 is also the default value, when this optional parameter is omitted.
		 * @return 
		 */
		 scrollTo(x:number, y:number, time:number): sap.m.ScrollContainer;
		/**
		 * Sets a new value for property <code>focusable</code>.
		 * 
		 * Whether the scroll container can be focused.
		 * 
		 * Note that it should be set to "true" when there are no focusable elements inside or when keyboard interaction requires an additional tab stop on the container.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bFocusable New value for property <code>focusable</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFocusable(bFocusable:boolean): sap.m.ScrollContainer;
		/**
		 * Sets a new value for property <code>height</code>.
		 * 
		 * The height of the ScrollContainer.
		 * By default the height equals the content height. If only horizontal scrolling is used, do not set the height or make sure the height is always larger than the height of the content.
		 * 
		 * Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>auto</code>.
		 * @param sHeight New value for property <code>height</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeight(sHeight:sap.ui.core.CSSSize): sap.m.ScrollContainer;
		/**
		 * Sets a new value for property <code>horizontal</code>.
		 * 
		 * Whether horizontal scrolling should be possible.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bHorizontal New value for property <code>horizontal</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHorizontal(bHorizontal:boolean): sap.m.ScrollContainer;
		/**
		 * Sets a new value for property <code>vertical</code>.
		 * 
		 * Whether vertical scrolling should be possible.
		 * 
		 * Note that this is off by default because typically a Page is used as fullscreen element which can handle vertical scrolling. If this is not the case and vertical scrolling is required, this flag needs to be set to "true".
		 * Important: it is not supported to have nested controls that both enable scrolling into the same dimension.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bVertical New value for property <code>vertical</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setVertical(bVertical:boolean): sap.m.ScrollContainer;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * The width of the ScrollContainer.
		 * If not set, it consumes the complete available width, behaving like normal HTML block elements. If only vertical scrolling is enabled, make sure the content always fits or wraps.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>auto</code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.ScrollContainer;
	}
	class SearchField extends sap.ui.core.Control{
		/**
		 * Constructor for a new SearchField.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.SearchField;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.SearchField;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>search</code> event of this <code>sap.m.SearchField</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SearchField</code> itself.
		 * 
		 * Event which is fired when the user triggers a search.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSearch(fnFunction:any, oData?:any, oListener?:any): sap.m.SearchField;
		/**
		 * Binds property <code>value</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindValue(oBindingInfo:any): sap.m.SearchField;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>search</code> event of this <code>sap.m.SearchField</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSearch(fnFunction:any, oListener:any): sap.m.SearchField;
		/**
		 * Creates a new subclass of class sap.m.SearchField with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>search</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>query</code> of type <code>string</code>The search query string.</li>
		 * <li><code>suggestionItem</code> of type <code>sap.m.SuggestionItem</code>Suggestion list item in case if the user has selected an item from the suggestions list.</li>
		 * <li><code>refreshButtonPressed</code> of type <code>boolean</code>Indicates if the user pressed the refresh icon.</li>
		 * <li><code>clearButtonPressed</code> of type <code>boolean</code>Indicates if the user pressed the clear icon.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSearch(mArguments?:any): sap.m.SearchField;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Boolean property to enable the control (default is true).
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Gets current value of property <code>maxLength</code>.
		 * 
		 * Maximum number of characters. Value '0' means the feature is switched off.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>maxLength</code>
		 */
		 getMaxLength(): number;
		/**
		 * Returns a metadata object for class sap.m.SearchField.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>placeholder</code>.
		 * 
		 * Text shown when no value available. Default placeholder text is the word "Search" in the current local language (if supported) or in English.
		 * @return Value of property <code>placeholder</code>
		 */
		 getPlaceholder(): string;
		/**
		 * Gets current value of property <code>value</code>.
		 * 
		 * Input Value.
		 * @return Value of property <code>value</code>
		 */
		 getValue(): string;
		/**
		 * Gets current value of property <code>visible</code>.
		 * 
		 * Invisible inputs are not rendered.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>visible</code>
		 */
		 getVisible(): boolean;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Defines the CSS width of the input. If not set, width is 100%.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Boolean property to enable the control (default is true).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.SearchField;
		/**
		 * Sets a new value for property <code>maxLength</code>.
		 * 
		 * Maximum number of characters. Value '0' means the feature is switched off.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param iMaxLength New value for property <code>maxLength</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMaxLength(iMaxLength:number): sap.m.SearchField;
		/**
		 * Sets a new value for property <code>placeholder</code>.
		 * 
		 * Text shown when no value available. Default placeholder text is the word "Search" in the current local language (if supported) or in English.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sPlaceholder New value for property <code>placeholder</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setPlaceholder(sPlaceholder:string): sap.m.SearchField;
		/**
		 * Sets a new value for property <code>value</code>.
		 * 
		 * Input Value.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sValue New value for property <code>value</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setValue(sValue:string): sap.m.SearchField;
		/**
		 * Sets a new value for property <code>visible</code>.
		 * 
		 * Invisible inputs are not rendered.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bVisible New value for property <code>visible</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setVisible(bVisible:boolean): sap.m.SearchField;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Defines the CSS width of the input. If not set, width is 100%.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.SearchField;
		/**
		 * Unbinds property <code>value</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindValue(): sap.m.SearchField;
	}
	class SegmentedButton extends sap.ui.core.Control{
		/**
		 * Constructor for a new SegmentedButton.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.SegmentedButton;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.SegmentedButton;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.m.SegmentedButton</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SegmentedButton</code> itself.
		 * 
		 * Fires when the user selects a button, which returns the ID and button object.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SegmentedButton</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.m.SegmentedButton;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.m.SegmentedButton</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.m.SegmentedButton;
		/**
		 * Creates a new subclass of class sap.m.SegmentedButton with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>select</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>button</code> of type <code>sap.m.Button</code>Reference to the button, that has been selected.</li>
		 * <li><code>id</code> of type <code>string</code>ID of the button, which has been selected.</li>
		 * <li><code>key</code> of type <code>string</code>Key of the button, which has been selected. This property is only filled when the control is initiated with the items aggregation.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.m.SegmentedButton;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Disables all the buttons in the SegmentedButton control. When disabled all the buttons look grey and you cannot focus or click on them.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Returns a metadata object for class sap.m.SegmentedButton.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * ID of the element which is the current target of the association <code>selectedButton</code>, or <code>null</code>.
		 * @return 
		 */
		 getSelectedButton(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Defines the width of the SegmentedButton control. If not set, it uses the minimum required width to make all buttons inside of the same size (based on the biggest button).
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Disables all the buttons in the SegmentedButton control. When disabled all the buttons look grey and you cannot focus or click on them.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.SegmentedButton;
		/**
		 * Setter for association <code>selectedButton</code>.
		 * @param vButton New value for association <code>setSelectedButton</code>
		 *    A sap.m.Button instance which becomes the new target of this <code>selectedButton</code> association.
		 *    Alternatively, the ID of a sap.m.Button instance may be given as a string.
		 *    If the value of null, undefined, or an empty string is provided the first item will be selected.
		 * @return <code>this</code> this pointer for chaining
		 */
		 setSelectedButton(vButton:string|sap.m.Button|any): sap.m.SegmentedButton;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Defines the width of the SegmentedButton control. If not set, it uses the minimum required width to make all buttons inside of the same size (based on the biggest button).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.SegmentedButton;
	}
	class Select extends sap.ui.core.Control{
		/**
		 * Constructor for a new <code>sap.m.Select</code>.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given.
		 * @param mSettings Initial settings for the new control.
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds an item to the aggregation named <code>items</code>.
		 * @param oItem The item to be added; if empty, nothing is added.
		 * @return <code>this</code> to allow method chaining.
		 */
		 addItem(oItem:sap.ui.core.Item): sap.m.Select;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.m.Select</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Select</code> itself.
		 * 
		 * This event is fired when the value in the selection field is changed in combination with one of
		 * the following actions:
		 * <ul>
		 * 	<li>The focus leaves the selection field</li>
		 * 	<li>The <i>Enter</i> key is pressed</li>
		 * 	<li>The item is pressed</li>
		 * </ul>
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Select</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachChange(fnFunction:any, oData?:any, oListener?:any): sap.m.Select;
		/**
		 * Binds aggregation <code>items</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>.
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindItems(oBindingInfo:any): sap.m.Select;
		/**
		 * Creates a picker popup container where the selection should take place.
		 * @param sPickerType 
		 * @return 
		 */
		protected createPicker(sPickerType:string): sap.m.Popover|sap.m.Dialog;
		/**
		 * Destroys all the items in the aggregation named <code>items</code>.
		 * @return <code>this</code> to allow method chaining.
		 */
		 destroyItems(): sap.m.Select;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.m.Select</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachChange(fnFunction:any, oListener:any): sap.m.Select;
		/**
		 * Creates a new subclass of class sap.m.Select with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>change</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>selectedItem</code> of type <code>sap.ui.core.Item</code>The selected item.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireChange(mArguments?:any): sap.m.Select;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Indicates whether the user can change the selection.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Gets aggregation <code>items</code>.
		 * 
		 * <b>Note</b>: This is the default aggregation.
		 * @return 
		 */
		 getItems(): sap.ui.core.Item[];
		/**
		 * Gets current value of property <code>maxWidth</code>.
		 * 
		 * Sets the maximum width of the control.
		 * 
		 * <b>Note:</b> This property is ignored if the <code>autoAdjustWidth</code> property is set to <code>true</code>.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>maxWidth</code>
		 */
		 getMaxWidth(): sap.ui.core.CSSSize;
		/**
		 * Returns a metadata object for class sap.m.Select.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>name</code>.
		 * 
		 * The name to be used in the HTML code (for example, for HTML forms that send data to the server via submit).
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>name</code>
		 */
		 getName(): string;
		/**
		 * Gets the selected item object from the aggregation named <code>items</code>.
		 * @return The current target of the <code>selectedItem</code> association, or null.
		 */
		 getSelectedItem(): sap.ui.core.Item;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Sets the width of the control. The default width is derived from the widest item.
		 * If the width defined is smaller than the widest item in the selection list, only the width of
		 * the selection field will be changed: the list will keep the width of its widest item.
		 * If the list is wider than the viewport, it is truncated and an ellipsis is displayed for each item.
		 * For phones, the width of the list is always the same as the viewport.
		 * 
		 * <b>Note:</b> This property is ignored if the <code>autoAdjustWidth</code> property is set to <code>true</code>.
		 * 
		 * Default value is <code>auto</code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.ui.core.Item): number;
		/**
		 * Inserts an item into the aggregation named <code>items</code>.
		 * @param oItem The item to be inserted; if empty, nothing is inserted.
		 * @param iIndex The <code>0</code>-based index the item should be inserted at; for
		 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *             greater than the current size of the aggregation, the item is inserted at the last position.
		 * @return <code>this</code> to allow method chaining.
		 */
		 insertItem(oItem:sap.ui.core.Item, iIndex:number): sap.m.Select;
		/**
		 * Removes all the items in the aggregation named <code>items</code>.
		 * Additionally unregisters them from the hosting UIArea.
		 * @return An array of the removed items (might be empty).
		 */
		 removeAllItems(): sap.ui.core.Item[];
		/**
		 * Removes an item from the aggregation named <code>items</code>.
		 * @param vItem The item to be removed or its index or ID.
		 * @return The removed item or null.
		 */
		 removeItem(vItem:number|string|sap.ui.core.Item): sap.ui.core.Item;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Indicates whether the user can change the selection.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.Select;
		/**
		 * Sets a new value for property <code>maxWidth</code>.
		 * 
		 * Sets the maximum width of the control.
		 * 
		 * <b>Note:</b> This property is ignored if the <code>autoAdjustWidth</code> property is set to <code>true</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sMaxWidth New value for property <code>maxWidth</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMaxWidth(sMaxWidth:sap.ui.core.CSSSize): sap.m.Select;
		/**
		 * Sets a new value for property <code>name</code>.
		 * 
		 * The name to be used in the HTML code (for example, for HTML forms that send data to the server via submit).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sName New value for property <code>name</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setName(sName:string): sap.m.Select;
		/**
		 * Sets the <code>selectedItem</code> association.
		 * 
		 * Default value is <code>null</code>.
		 * @param vItem New value for the <code>selectedItem</code> association.
		 * If an ID of a <code>sap.ui.core.Item</code> is given, the item with this ID becomes the <code>selectedItem</code> association.
		 * Alternatively, a <code>sap.ui.core.Item</code> instance may be given or <code>null</code>.
		 * If the value of <code>null</code> is provided, the first enabled item will be selected (if any items exist).
		 * @return <code>this</code> to allow method chaining.
		 */
		 setSelectedItem(vItem:string|sap.ui.core.Item): sap.m.Select;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Sets the width of the control. The default width is derived from the widest item.
		 * If the width defined is smaller than the widest item in the selection list, only the width of
		 * the selection field will be changed: the list will keep the width of its widest item.
		 * If the list is wider than the viewport, it is truncated and an ellipsis is displayed for each item.
		 * For phones, the width of the list is always the same as the viewport.
		 * 
		 * <b>Note:</b> This property is ignored if the <code>autoAdjustWidth</code> property is set to <code>true</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>auto</code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Select;
		/**
		 * Unbinds aggregation <code>items</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindItems(): sap.m.Select;
	}
	class SelectDialog extends sap.ui.core.Control{
		/**
		 * Constructor for a new SelectDialog.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some item to the aggregation <code>items</code>.
		 * @param oItem the item to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addItem(oItem:sap.m.ListItemBase): sap.m.SelectDialog;
		/**
		 * Forward method to the inner dialog: addStyleClass
		 * @return this pointer for chaining
		 */
		 addStyleClass(): sap.m.SelectDialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SelectDialog</code> itself.
		 * 
		 * This event will be fired when the cancel button is clicked
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SelectDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachCancel(fnFunction:any, oData?:any, oListener?:any): sap.m.SelectDialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>confirm</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SelectDialog</code> itself.
		 * 
		 * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode . The items being selected are returned as event parameters.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SelectDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachConfirm(fnFunction:any, oData?:any, oListener?:any): sap.m.SelectDialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>liveChange</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SelectDialog</code> itself.
		 * 
		 * This event will be fired when the value of the search field is changed by a user - e.g. at each key press
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SelectDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachLiveChange(fnFunction:any, oData?:any, oListener?:any): sap.m.SelectDialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>search</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SelectDialog</code> itself.
		 * 
		 * This event will be fired when the search button has been clicked on the searchfield on the visual control
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SelectDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSearch(fnFunction:any, oData?:any, oListener?:any): sap.m.SelectDialog;
		/**
		 * Forwards aggregations with the name of items to the internal list.
		 * @param sAggregationName The name for the binding
		 * @param oBindingInfo The configuration parameters for the binding
		 * @return this pointer for chaining
		 */
		protected bindAggregation(sAggregationName:string, oBindingInfo:any): sap.m.SelectDialog;
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.m.SelectDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachCancel(fnFunction:any, oListener:any): sap.m.SelectDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>confirm</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachConfirm(fnFunction:any, oListener:any): sap.m.SelectDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>liveChange</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachLiveChange(fnFunction:any, oListener:any): sap.m.SelectDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>search</code> event of this <code>sap.m.SelectDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSearch(fnFunction:any, oListener:any): sap.m.SelectDialog;
		/**
		 * Creates a new subclass of class sap.m.SelectDialog with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>cancel</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireCancel(mArguments?:any): sap.m.SelectDialog;
		/**
		 * Fires event <code>confirm</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>selectedItem</code> of type <code>sap.m.StandardListItem</code>Returns the selected list item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.</li>
		 * <li><code>selectedItems</code> of type <code>sap.m.StandardListItem[]</code>Returns an array containing the visible selected list items. If no items are selected, an empty array is returned.</li>
		 * <li><code>selectedContexts</code> of type <code>string</code>Returns the binding contexts of the selected items including the non-visible items.
		 * NOTE: In contrast to the parameter "selectedItems", this parameter will also include the selected but NOT visible items (e.g. due to list filtering). An empty array will be set for this parameter if no data binding is used.
		 * NOTE: When the list binding is pre-filtered and there are items in the selection that are not visible upon opening the dialog, these contexts are not loaded. Therefore, these items will not be included in the selectedContexts array unless they are displayed at least once.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireConfirm(mArguments?:any): sap.m.SelectDialog;
		/**
		 * Fires event <code>liveChange</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>value</code> of type <code>string</code>The value to search for, which can change at any keypress</li>
		 * <li><code>itemsBinding</code> of type <code>any</code>The Items binding of the Select Dialog. It will only be available if the items aggregation is bound to a model.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireLiveChange(mArguments?:any): sap.m.SelectDialog;
		/**
		 * Fires event <code>search</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>value</code> of type <code>string</code>The value entered in the search</li>
		 * <li><code>itemsBinding</code> of type <code>any</code>The Items binding of the Select Dialog for search purposes. It will only be available if the items aggregation is bound to a model.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSearch(mArguments?:any): sap.m.SelectDialog;
		/**
		 * Get the internal Dialog's contentHeight property {@link sap.m.Dialog}
		 * @return sHeight The content width of the internal dialog
		 */
		 getContentHeight(): sap.ui.core.CSSSize;
		/**
		 * Get the internal Dialog's contentWidth property {@link sap.m.Dialog}
		 * @return sWidth The content width of the internal dialog
		 */
		 getContentWidth(): sap.ui.core.CSSSize;
		/**
		 * Forward method to the inner dialog: getDomRef
		 * @return The Element's DOM Element sub DOM Element or null
		 */
		 getDomRef(): any;
		/**
		 * Gets current value of property <code>growingThreshold</code>.
		 * 
		 * Determines the number of items initially displayed in the list. Also defines the number of items to be requested from the model for each grow.
		 * @return Value of property <code>growingThreshold</code>
		 */
		 getGrowingThreshold(): number;
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * The items of the list shown in the search dialog. It is recommended to use a StandardListItem for the dialog but other combinations are also possible.
		 * @return 
		 */
		 getItems(): sap.m.ListItemBase[];
		/**
		 * Returns a metadata object for class sap.m.SelectDialog.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>multiSelect</code>.
		 * 
		 * Determines if the user can select several options from the list
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>multiSelect</code>
		 */
		 getMultiSelect(): boolean;
		/**
		 * Get the internal List's no data text property
		 * @return the current no data text
		 */
		 getNoDataText(): string;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Determines the title text that appears in the dialog header
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Forward method to the inner dialog: hasStyleClass
		 * @return true if the class is set, false otherwise
		 */
		 hasStyleClass(): boolean;
		/**
		 * Checks for the provided <code>sap.m.ListItemBase</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.m.ListItemBase): number;
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.m.ListItemBase, iIndex:number): sap.m.SelectDialog;
		/**
		 * Opens the internal dialog with a searchfield and a list.
		 * @param sSearchValue A value for the search can be passed to match with the filter applied to the list binding.
		 * @return 
		 */
		 open(sSearchValue:string): sap.m.SelectDialog;
		/**
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.m.ListItemBase[];
		/**
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.m.ListItemBase): sap.m.ListItemBase;
		/**
		 * Forward method to the inner dialog: removeStyleClass
		 * @return this pointer for chaining
		 */
		 removeStyleClass(): sap.m.SelectDialog;
		/**
		 * Set the internal Dialog's contentHeight property {@link sap.m.Dialog}
		 * @param sHeight The new content width value for the dialog
		 * @return this pointer for chaining
		 */
		 setContentHeight(sHeight:sap.ui.core.CSSSize): sap.m.SelectDialog;
		/**
		 * Set the internal Dialog's contentWidth property {@link sap.m.Dialog}
		 * @param sWidth The new content width value for the dialog
		 * @return this pointer for chaining
		 */
		 setContentWidth(sWidth:sap.ui.core.CSSSize): sap.m.SelectDialog;
		/**
		 * Sets the growing threshold to the internal list
		 * @param iValue Value for the list's growing threshold.
		 * @return this pointer for chaining
		 */
		 setGrowingThreshold(iValue:number): sap.m.SelectDialog;
		/**
		 * Enable/Disable multi selection mode.
		 * @param bMulti Flag for multi selection mode
		 * @return this pointer for chaining
		 */
		 setMultiSelect(bMulti:boolean): sap.m.SelectDialog;
		/**
		 * Set the internal List's no data text property
		 * @param sNoDataText The no data text for the list
		 * @return this pointer for chaining
		 */
		 setNoDataText(sNoDataText:string): sap.m.SelectDialog;
		/**
		 * Set the title of the internal dialog
		 * @param sTitle The title text for the dialog
		 * @return this pointer for chaining
		 */
		 setTitle(sTitle:string): sap.m.SelectDialog;
		/**
		 * Forward method to the inner dialog: toggleStyleClass
		 * @return this pointer for chaining
		 */
		 toggleStyleClass(): sap.m.SelectDialog;
	}
	class Slider extends sap.ui.core.Control{
		/**
		 * Constructor for a new <code>sap.m.Slider</code>.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given.
		 * @param mSettings Initial settings for the new control.
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.m.Slider</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Slider</code> itself.
		 * 
		 * This event is triggered after the end user finishes interacting, if there is any change.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachChange(fnFunction:any, oData?:any, oListener?:any): sap.m.Slider;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>liveChange</code> event of this <code>sap.m.Slider</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Slider</code> itself.
		 * 
		 * This event is triggered during the dragging period, each time the slider value changes.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachLiveChange(fnFunction:any, oData?:any, oListener?:any): sap.m.Slider;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.m.Slider</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachChange(fnFunction:any, oListener:any): sap.m.Slider;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>liveChange</code> event of this <code>sap.m.Slider</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachLiveChange(fnFunction:any, oListener:any): sap.m.Slider;
		/**
		 * Creates a new subclass of class sap.m.Slider with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>change</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>value</code> of type <code>float</code>The current value of the slider after a change.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireChange(mArguments?:any): sap.m.Slider;
		/**
		 * Fires event <code>liveChange</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>value</code> of type <code>float</code>The current value of the slider after a live change.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireLiveChange(mArguments?:any): sap.m.Slider;
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Indicates whether the user can change the value.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Gets current value of property <code>max</code>.
		 * 
		 * The maximum value.
		 * 
		 * Default value is <code>100</code>.
		 * @return Value of property <code>max</code>
		 */
		 getMax(): number;
		/**
		 * Returns a metadata object for class sap.m.Slider.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>min</code>.
		 * 
		 * The minimum value.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>min</code>
		 */
		 getMin(): number;
		/**
		 * Gets current value of property <code>name</code>.
		 * 
		 * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>name</code>
		 */
		 getName(): string;
		/**
		 * Gets current value of property <code>progress</code>.
		 * 
		 * Indicate whether a progress bar indicator is shown.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>progress</code>
		 */
		 getProgress(): boolean;
		/**
		 * Gets current value of property <code>step</code>.
		 * 
		 * Define the amount of units to change the slider when adjusting by drag and drop.
		 * 
		 * Defines the size of the slider's selection intervals. (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
		 * 
		 * The step must be positive, if a negative number is provided, the default value will be used instead.
		 * If the width of the slider converted to pixels is less than the range (max – min), the value will be rounded to multiples of the step size.
		 * 
		 * Default value is <code>1</code>.
		 * @return Value of property <code>step</code>
		 */
		 getStep(): number;
		/**
		 * Gets current value of property <code>value</code>.
		 * 
		 * Define the value.
		 * 
		 * If the value is lower/higher than the allowed minimum/maximum, the value of the properties <code>min<code>/<code>max</code> are used instead.
		 * 
		 * Default value is <code>0</code>.
		 * @return Value of property <code>value</code>
		 */
		 getValue(): number;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Defines the width of the control.
		 * 
		 * Default value is <code>100%</code>.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Indicates whether the user can change the value.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.Slider;
		/**
		 * Sets a new value for property <code>max</code>.
		 * 
		 * The maximum value.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100</code>.
		 * @param fMax New value for property <code>max</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMax(fMax:number): sap.m.Slider;
		/**
		 * Sets a new value for property <code>min</code>.
		 * 
		 * The minimum value.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>0</code>.
		 * @param fMin New value for property <code>min</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMin(fMin:number): sap.m.Slider;
		/**
		 * Sets a new value for property <code>name</code>.
		 * 
		 * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sName New value for property <code>name</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setName(sName:string): sap.m.Slider;
		/**
		 * Sets a new value for property <code>progress</code>.
		 * 
		 * Indicate whether a progress bar indicator is shown.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bProgress New value for property <code>progress</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setProgress(bProgress:boolean): sap.m.Slider;
		/**
		 * Sets a new value for property <code>step</code>.
		 * 
		 * Define the amount of units to change the slider when adjusting by drag and drop.
		 * 
		 * Defines the size of the slider's selection intervals. (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
		 * 
		 * The step must be positive, if a negative number is provided, the default value will be used instead.
		 * If the width of the slider converted to pixels is less than the range (max – min), the value will be rounded to multiples of the step size.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>1</code>.
		 * @param fStep New value for property <code>step</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setStep(fStep:number): sap.m.Slider;
		/**
		 * Sets the property <code>value</code>.
		 * 
		 * Default value is <code>0</code>.
		 * @param fNewValue new value for property <code>value</code>.
		 * @return <code>this</code> to allow method chaining.
		 */
		 setValue(fNewValue:number): sap.m.Slider;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Defines the width of the control.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>100%</code>.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Slider;
		/**
		 * Decrements the value by multiplying the step the <code>step</code> with the given parameter.
		 * @param iStep The number of steps the slider goes down.
		 * @return <code>this</code> to allow method chaining.
		 */
		 stepDown(iStep?:number): sap.m.Slider;
		/**
		 * Increments the value by multiplying the <code>step</code> with the given parameter.
		 * @param iStep The number of steps the slider goes up.
		 * @return <code>this</code> to allow method chaining.
		 */
		 stepUp(iStep?:number): sap.m.Slider;
	}
	class SplitApp extends sap.m.SplitContainer{
		/**
		 * Constructor for a new SplitApp.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Fires the orientationChange event after SplitApp has reacted to the browser orientationChange event.
		 */
		protected _onOrientationChange();
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>orientationChange</code> event of this <code>sap.m.SplitApp</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitApp</code> itself.
		 * 
		 * Fires when orientation (portrait/landscape) is changed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachOrientationChange(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitApp;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>orientationChange</code> event of this <code>sap.m.SplitApp</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachOrientationChange(fnFunction:any, oListener:any): sap.m.SplitApp;
		/**
		 * Creates a new subclass of class sap.m.SplitApp with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.SplitContainer.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>orientationChange</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>landscape</code> of type <code>boolean</code>Returns true if the device is in landscape mode.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireOrientationChange(mArguments?:any): sap.m.SplitApp;
		/**
		 * Gets current value of property <code>homeIcon</code>.
		 * 
		 * Represents the icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
		 * Note that only the first attempt to set the homeIcon is executed, subsequent settings are ignored.
		 * The icon must be in PNG format. The property can either store the URL of one single icon or an object holding icon URLs for the different required sizes.
		 * Note that if single icon is used for all devices, when scaled, its quality can regress.
		 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon.
		 * For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting as the file can contain different images for different resolutions.
		 * 
		 * One example is:
		 * 
		 * app.setHomeIcon({
		 * 'phone':'phone-icon.png',
		 * 'phone@2':'phone-retina.png',
		 * 'tablet':'tablet-icon.png',
		 * 'tablet@2':'tablet-retina.png',
		 * 'icon':'desktop.ico'
		 * });
		 * 
		 * The image size is 57/114 px for the phone and 72/144 px for the tablet.
		 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
		 * 
		 * On Android, these icons may or may not be used by the device. Chances can be improved by adding glare effect, rounded corners, setting the file name to end with "-precomposed.png", and setting the homeIconPrecomposed property to true.
		 * @return Value of property <code>homeIcon</code>
		 */
		 getHomeIcon(): any;
		/**
		 * Returns a metadata object for class sap.m.SplitApp.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Sets a new value for property <code>homeIcon</code>.
		 * 
		 * Represents the icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
		 * Note that only the first attempt to set the homeIcon is executed, subsequent settings are ignored.
		 * The icon must be in PNG format. The property can either store the URL of one single icon or an object holding icon URLs for the different required sizes.
		 * Note that if single icon is used for all devices, when scaled, its quality can regress.
		 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon.
		 * For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting as the file can contain different images for different resolutions.
		 * 
		 * One example is:
		 * 
		 * app.setHomeIcon({
		 * 'phone':'phone-icon.png',
		 * 'phone@2':'phone-retina.png',
		 * 'tablet':'tablet-icon.png',
		 * 'tablet@2':'tablet-retina.png',
		 * 'icon':'desktop.ico'
		 * });
		 * 
		 * The image size is 57/114 px for the phone and 72/144 px for the tablet.
		 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
		 * 
		 * On Android, these icons may or may not be used by the device. Chances can be improved by adding glare effect, rounded corners, setting the file name to end with "-precomposed.png", and setting the homeIconPrecomposed property to true.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param oHomeIcon New value for property <code>homeIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHomeIcon(oHomeIcon:any): sap.m.SplitApp;
	}
	/**
	 * The mode of SplitContainer or SplitApp control to show/hide the master area.
	 */
	type SplitAppMode = 
	/**
	 * The mode of SplitContainer or SplitApp control to show/hide the master area.
	 */
	"HideMode" |
	/**
	 * The mode of SplitContainer or SplitApp control to show/hide the master area.
	 */
	"PopoverMode" |
	/**
	 * The mode of SplitContainer or SplitApp control to show/hide the master area.
	 */
	"ShowHideMode" |
	/**
	 * The mode of SplitContainer or SplitApp control to show/hide the master area.
	 */
	"StretchCompressMode";
	class SplitContainer extends sap.ui.core.Control{
		/**
		 * Constructor for a new SplitContainer.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some detailPage to the aggregation <code>detailPages</code>.
		 * @param oDetailPage the detailPage to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addDetailPage(oDetailPage:sap.ui.core.Control): sap.m.SplitContainer;
		/**
		 * Adds some masterPage to the aggregation <code>masterPages</code>.
		 * @param oMasterPage the masterPage to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addMasterPage(oMasterPage:sap.ui.core.Control): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterDetailNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when navigation between two pages in detail area has completed.
		 * NOTE: In case of animated transitions this event is fired with some delay after the "navigate" event.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterDetailNavigate(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterMasterClose</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when the master area is fully closed after the animation (if any).
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterMasterClose(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterMasterNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when navigation between two pages in master area has completed.
		 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterMasterNavigate(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>afterMasterOpen</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when the master area is fully opened after animation if any.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachAfterMasterOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>beforeMasterClose</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires before the master area is closed.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachBeforeMasterClose(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>beforeMasterOpen</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires before the master area is opened.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachBeforeMasterOpen(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>detailNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when navigation between two pages in detail area has been triggered.
		 * The transition (if any) to the new page has not started yet.
		 * NOTE: This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachDetailNavigate(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>masterButton</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitContainer control does not handle the placement of the master button automatically.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachMasterButton(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>masterNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.SplitContainer</code> itself.
		 * 
		 * Fires when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
		 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachMasterNavigate(fnFunction:any, oData?:any, oListener?:any): sap.m.SplitContainer;
		/**
		 * Navigates back to the previous detail page found in the history.
		 * @param oBackData This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as backData property. (The original data from the to() navigation will still be available as data property.)
		 * 
		 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 *         For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.
		 * 
		 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameter This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration.
		 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
		 * 
		 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 * @return 
		 */
		 backDetail(oBackData:any, oTransitionParameter:any): sap.m.SplitContainer;
		/**
		 * Navigates back to the previous master page which is found in the history.
		 * @param oBackData This optional object can carry any payload data which should be made available to the target page of the back navigation.
		 *         The event on the target page will contain this data object as backData property (the original data from the to() navigation will still be available as data property).
		 * 
		 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 *         For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.
		 * 
		 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameter This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration.
		 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
		 * 
		 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 * @return 
		 */
		 backMaster(oBackData:any, oTransitionParameter:any): sap.m.SplitContainer;
		/**
		 * Navigates back to the initial/top level of Detail (this is the element aggregated as initialPage, or the first added element).
		 * NOTE: If already on the initial page, nothing happens.
		 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
		 * @param oBackData This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as backData property (the original data from the to() navigation will still be available as data property).
		 * 
		 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 *         For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.
		 * 
		 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameter This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration.
		 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
		 * 
		 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 * @return 
		 */
		 backToTopDetail(oBackData:any, oTransitionParameter:any): sap.ui.core.Control;
		/**
		 * Navigates back to the initial/top level of Master (this is the element aggregated as "initialPage", or the first added element).
		 * NOTE: If already on the initial page, nothing happens.
		 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
		 * @param oBackData This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
		 * 
		 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
		 * 
		 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameter This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
		 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
		 * 
		 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 * @return 
		 */
		 backToTopMaster(oBackData:any, oTransitionParameter:any): sap.ui.core.Control;
		/**
		 * Destroys all the detailPages in the aggregation <code>detailPages</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyDetailPages(): sap.m.SplitContainer;
		/**
		 * Destroys all the masterPages in the aggregation <code>masterPages</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyMasterPages(): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterDetailNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterDetailNavigate(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterMasterClose</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterMasterClose(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterMasterNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterMasterNavigate(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>afterMasterOpen</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachAfterMasterOpen(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>beforeMasterClose</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachBeforeMasterClose(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>beforeMasterOpen</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachBeforeMasterOpen(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>detailNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachDetailNavigate(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>masterButton</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachMasterButton(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>masterNavigate</code> event of this <code>sap.m.SplitContainer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachMasterNavigate(fnFunction:any, oListener:any): sap.m.SplitContainer;
		/**
		 * Creates a new subclass of class sap.m.SplitContainer with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>afterDetailNavigate</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>from</code> of type <code>sap.ui.core.Control</code>The page, which had been displayed before navigation.</li>
		 * <li><code>fromId</code> of type <code>string</code>The ID of the page, which had been displayed before navigation.</li>
		 * <li><code>to</code> of type <code>sap.ui.core.Control</code>The page, which is now displayed after navigation.</li>
		 * <li><code>toId</code> of type <code>string</code>The ID of the page, which is now displayed after navigation.</li>
		 * <li><code>firstTime</code> of type <code>boolean</code>Determines whether the "to" page (more precisely: a control with the ID of the page,
		 * which has been navigated to) has not been displayed/navigated to before.</li>
		 * <li><code>isTo</code> of type <code>boolean</code>Determines whether was a forward navigation, triggered by to().</li>
		 * <li><code>isBack</code> of type <code>boolean</code>Determines whether this was a back navigation, triggered by back().</li>
		 * <li><code>isBackToTop</code> of type <code>boolean</code>Determines whether this was a navigation to the root page, triggered by backToTop().</li>
		 * <li><code>isBackToPage</code> of type <code>boolean</code>Determines whether this was a navigation to a specific page, triggered by backToPage().</li>
		 * <li><code>direction</code> of type <code>string</code>Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterDetailNavigate(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>afterMasterClose</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterMasterClose(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>afterMasterNavigate</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>from</code> of type <code>sap.ui.core.Control</code>The page, which had been displayed before navigation.</li>
		 * <li><code>fromId</code> of type <code>string</code>The ID of the page, which had been displayed before navigation.</li>
		 * <li><code>to</code> of type <code>sap.ui.core.Control</code>The page, which is now displayed after navigation.</li>
		 * <li><code>toId</code> of type <code>string</code>The ID of the page, which is now displayed after navigation.</li>
		 * <li><code>firstTime</code> of type <code>boolean</code>Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
		 * has not been displayed/navigated to before.</li>
		 * <li><code>isTo</code> of type <code>boolean</code>Determines whether was a forward navigation, triggered by to().</li>
		 * <li><code>isBack</code> of type <code>boolean</code>Determines whether this was a back navigation, triggered by back().</li>
		 * <li><code>isBackToTop</code> of type <code>boolean</code>Determines whether this was a navigation to the root page, triggered by backToTop().</li>
		 * <li><code>isBackToPage</code> of type <code>boolean</code>Determines whether this was a navigation to a specific page, triggered by backToPage().</li>
		 * <li><code>direction</code> of type <code>string</code>Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterMasterNavigate(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>afterMasterOpen</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireAfterMasterOpen(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>beforeMasterClose</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireBeforeMasterClose(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>beforeMasterOpen</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireBeforeMasterOpen(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>detailNavigate</code> to attached listeners.
		 * 
		 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>from</code> of type <code>sap.ui.core.Control</code>The page, which was displayed before the current navigation.</li>
		 * <li><code>fromId</code> of type <code>string</code>The ID of the page, which was displayed before the current navigation.</li>
		 * <li><code>to</code> of type <code>sap.ui.core.Control</code>The page, which will be displayed after the current navigation.</li>
		 * <li><code>toId</code> of type <code>string</code>The ID of the page, which will be displayed after the current navigation.</li>
		 * <li><code>firstTime</code> of type <code>boolean</code>Determines whether the "to" page (more precisely: a control with the ID of the page,
		 * which is currently navigated to) has not been displayed/navigated to before.</li>
		 * <li><code>isTo</code> of type <code>boolean</code>Determines whether this is a forward navigation, triggered by to().</li>
		 * <li><code>isBack</code> of type <code>boolean</code>Determines whether this is a back navigation, triggered by back().</li>
		 * <li><code>isBackToTop</code> of type <code>boolean</code>Determines whether this is a navigation to the root page, triggered by backToTop().</li>
		 * <li><code>isBackToPage</code> of type <code>boolean</code>Determines whether this was a navigation to a specific page, triggered by backToPage().</li>
		 * <li><code>direction</code> of type <code>string</code>Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Whether or not to prevent the default action
		 */
		protected fireDetailNavigate(mArguments?:any): boolean;
		/**
		 * Fires event <code>masterButton</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireMasterButton(mArguments?:any): sap.m.SplitContainer;
		/**
		 * Fires event <code>masterNavigate</code> to attached listeners.
		 * 
		 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>from</code> of type <code>sap.ui.core.Control</code>The page, which was displayed before the current navigation.</li>
		 * <li><code>fromId</code> of type <code>string</code>The ID of the page, which was displayed before the current navigation.</li>
		 * <li><code>to</code> of type <code>sap.ui.core.Control</code>The page, which will be displayed after the current navigation.</li>
		 * <li><code>toId</code> of type <code>string</code>The ID of the page, which will be displayed after the current navigation.</li>
		 * <li><code>firstTime</code> of type <code>boolean</code>Determines whether the "to" page (more precisely: a control with the ID of the page,
		 * which is currently being navigated to) has not been displayed/navigated to before.</li>
		 * <li><code>isTo</code> of type <code>boolean</code>Determines whether this is a forward navigation, triggered by to().</li>
		 * <li><code>isBack</code> of type <code>boolean</code>Determines whether this is a back navigation, triggered by back().</li>
		 * <li><code>isBackToTop</code> of type <code>boolean</code>Determines whether this is a navigation to the root page, triggered by backToTop().</li>
		 * <li><code>isBackToPage</code> of type <code>boolean</code>Determines whether this was a navigation to a specific page, triggered by backToPage().</li>
		 * <li><code>direction</code> of type <code>string</code>Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Whether or not to prevent the default action
		 */
		protected fireMasterNavigate(mArguments?:any): boolean;
		/**
		 * Returns the current displayed detail page.
		 * @return 
		 */
		 getCurrentDetailPage(): sap.ui.core.Control;
		/**
		 * Returns the current displayed master page.
		 * @return 
		 */
		 getCurrentMasterPage(): sap.ui.core.Control;
		/**
		 * Gets current value of property <code>defaultTransitionNameDetail</code>.
		 * 
		 * Determines the type of the transition/animation to apply when to() is called without defining the
		 * transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
		 * 
		 * Default value is <code>slide</code>.
		 * @return Value of property <code>defaultTransitionNameDetail</code>
		 */
		 getDefaultTransitionNameDetail(): string;
		/**
		 * Gets current value of property <code>defaultTransitionNameMaster</code>.
		 * 
		 * Determines the type of the transition/animation to apply when to() is called, without defining the
		 * transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
		 * 
		 * Default value is <code>slide</code>.
		 * @return Value of property <code>defaultTransitionNameMaster</code>
		 */
		 getDefaultTransitionNameMaster(): string;
		/**
		 * Gets content of aggregation <code>detailPages</code>.
		 * 
		 * Determines the content entities, between which the SplitContainer navigates in detail area.
		 * These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
		 * These aggregated controls receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow},
		 * they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
		 * @return 
		 */
		 getDetailPages(): sap.ui.core.Control[];
		/**
		 * ID of the element which is the current target of the association <code>initialDetail</code>, or <code>null</code>.
		 * @return 
		 */
		 getInitialDetail(): sap.ui.core.ID;
		/**
		 * ID of the element which is the current target of the association <code>initialMaster</code>, or <code>null</code>.
		 * @return 
		 */
		 getInitialMaster(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>masterButtonText</code>.
		 * 
		 * Determines the text displayed in master button, which has a default value "Navigation".
		 * This text is only displayed in iOS platform and the icon from the current page in detail area is
		 * displayed in the master button for the other platforms.
		 * The master button is shown/hidden depending on the orientation of the device and whether
		 * the master area is opened or not. SplitContainer manages the show/hide of the master button by itself
		 * only when the pages added to the detail area are sap.m.Page with built-in header or sap.m.Page
		 * with built-in header, which is wrapped by one or several sap.ui.core.mvc.View.
		 * Otherwise, the show/hide of master button needs to be managed by the application.
		 * @return Value of property <code>masterButtonText</code>
		 */
		 getMasterButtonText(): string;
		/**
		 * Gets content of aggregation <code>masterPages</code>.
		 * 
		 * Determines the content entities, between which the SplitContainer navigates in master area.
		 * These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
		 * These aggregated controls receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow},
		 * they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
		 * @return 
		 */
		 getMasterPages(): sap.ui.core.Control[];
		/**
		 * Returns a metadata object for class sap.m.SplitContainer.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>mode</code>.
		 * 
		 * Defines whether the master page will always be displayed (in portrait and landscape mode - StretchCompressMode),
		 * or if it should be hidden when in portrait mode (ShowHideMode). Default is ShowHideMode.
		 * Other possible values are Hide (Master is always hidden) and Popover (master is displayed in popover).
		 * 
		 * Default value is <code>ShowHideMode</code>.
		 * @return Value of property <code>mode</code>
		 */
		 getMode(): sap.m.SplitAppMode;
		/**
		 * Returns the previous page (the page, from which the user drilled down to the current page with to()).
		 * Note: this is not the page, which the user has seen before, but the page which is the target of the next back() navigation.
		 * If there is no previous page, "undefined" is returned.
		 * @param bMaster States if this function returns the previous page in master area. If it's set to false, the previous page in detail area will be returned.
		 * @return 
		 */
		 getPreviousPage(bMaster:boolean): sap.ui.core.Control;
		/**
		 * Used to hide the master page when in ShowHideMode and the device is in portrait mode.
		 * @return 
		 */
		 hideMaster(): sap.m.SplitContainer;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>detailPages</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oDetailPage The detailPage whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfDetailPage(oDetailPage:sap.ui.core.Control): number;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>masterPages</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oMasterPage The masterPage whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfMasterPage(oMasterPage:sap.ui.core.Control): number;
		/**
		 * Inserts a detailPage into the aggregation <code>detailPages</code>.
		 * @param oDetailPage the detailPage to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the detailPage should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the detailPage is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the detailPage is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertDetailPage(oDetailPage:sap.ui.core.Control, iIndex:number): sap.m.SplitContainer;
		/**
		 * Inserts a masterPage into the aggregation <code>masterPages</code>.
		 * @param oMasterPage the masterPage to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the masterPage should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the masterPage is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the masterPage is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertMasterPage(oMasterPage:sap.ui.core.Control, iIndex:number): sap.m.SplitContainer;
		/**
		 * Inserts the page/control with the specified ID into the navigation history stack of the NavContainer.
		 * 
		 * This can be used for deep-linking when the user directly reached a drilldown detail page using a bookmark and then wants to navigate up in the drilldown hierarchy.
		 * Normally, such a back navigation would not be possible as there is no previous page in the SplitContainer's history stack.
		 * @param sPageId The ID of the control/page/screen, which is inserted into the history stack. The respective control must be aggregated by the SplitContainer, otherwise this will cause an error.
		 * @param sTransitionName The type of the transition/animation, which would have been used to navigate from the (inserted) previous page to the current page. When navigating back, the inverse animation will be applied.
		 *         This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
		 * @param oData This optional object can carry any payload data which would have been given to the inserted previous page if the user would have done a normal forward navigation to it.
		 * @return 
		 */
		 insertPreviousPage(sPageId:string, sTransitionName:string, oData:any): sap.m.SplitContainer;
		/**
		 * Removes all the controls from the aggregation <code>detailPages</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllDetailPages(): sap.ui.core.Control[];
		/**
		 * Removes all the controls from the aggregation <code>masterPages</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllMasterPages(): sap.ui.core.Control[];
		/**
		 * Removes a detailPage from the aggregation <code>detailPages</code>.
		 * @param vDetailPage The detailPage to remove or its index or id
		 * @return The removed detailPage or <code>null</code>
		 */
		 removeDetailPage(vDetailPage:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Removes a masterPage from the aggregation <code>masterPages</code>.
		 * @param vMasterPage The masterPage to remove or its index or id
		 * @return The removed masterPage or <code>null</code>
		 */
		 removeMasterPage(vMasterPage:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets a new value for property <code>defaultTransitionNameDetail</code>.
		 * 
		 * Determines the type of the transition/animation to apply when to() is called without defining the
		 * transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>slide</code>.
		 * @param sDefaultTransitionNameDetail New value for property <code>defaultTransitionNameDetail</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDefaultTransitionNameDetail(sDefaultTransitionNameDetail:string): sap.m.SplitContainer;
		/**
		 * Sets a new value for property <code>defaultTransitionNameMaster</code>.
		 * 
		 * Determines the type of the transition/animation to apply when to() is called, without defining the
		 * transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>slide</code>.
		 * @param sDefaultTransitionNameMaster New value for property <code>defaultTransitionNameMaster</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDefaultTransitionNameMaster(sDefaultTransitionNameMaster:string): sap.m.SplitContainer;
		/**
		 * Sets the associated <code>initialDetail</code>.
		 * @param oInitialDetail ID of an element which becomes the new target of this initialDetail association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setInitialDetail(oInitialDetail:sap.ui.core.ID|sap.ui.core.Control): sap.m.SplitContainer;
		/**
		 * Sets the associated <code>initialMaster</code>.
		 * @param oInitialMaster ID of an element which becomes the new target of this initialMaster association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setInitialMaster(oInitialMaster:sap.ui.core.ID|sap.ui.core.Control): sap.m.SplitContainer;
		/**
		 * Sets a new value for property <code>masterButtonText</code>.
		 * 
		 * Determines the text displayed in master button, which has a default value "Navigation".
		 * This text is only displayed in iOS platform and the icon from the current page in detail area is
		 * displayed in the master button for the other platforms.
		 * The master button is shown/hidden depending on the orientation of the device and whether
		 * the master area is opened or not. SplitContainer manages the show/hide of the master button by itself
		 * only when the pages added to the detail area are sap.m.Page with built-in header or sap.m.Page
		 * with built-in header, which is wrapped by one or several sap.ui.core.mvc.View.
		 * Otherwise, the show/hide of master button needs to be managed by the application.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sMasterButtonText New value for property <code>masterButtonText</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMasterButtonText(sMasterButtonText:string): sap.m.SplitContainer;
		/**
		 * Sets a new value for property <code>mode</code>.
		 * 
		 * Defines whether the master page will always be displayed (in portrait and landscape mode - StretchCompressMode),
		 * or if it should be hidden when in portrait mode (ShowHideMode). Default is ShowHideMode.
		 * Other possible values are Hide (Master is always hidden) and Popover (master is displayed in popover).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>ShowHideMode</code>.
		 * @param sMode New value for property <code>mode</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setMode(sMode:sap.m.SplitAppMode): sap.m.SplitContainer;
		/**
		 * Used to make the master page visible when in ShowHideMode and the device is in portrait mode.
		 * @return 
		 */
		 showMaster(): sap.m.SplitContainer;
		/**
		 * Navigates to a given detail page.
		 * @param sPageId 
		 * @param sTransitionName The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
		 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
		 * 
		 *         None of the standard transitions is currently making use of any given transition parameters.
		 * @param oData This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
		 * 
		 *         Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 * 
		 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameter This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
		 * 
		 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 *         The "show", "slide" and "fade" transitions do not use any parameter.
		 * @return 
		 */
		 toDetail(sPageId:string, sTransitionName:string, oData:any, oTransitionParameter:any): sap.m.SplitContainer;
		/**
		 * Navigates to a given master page.
		 * @param sPageId The screen to which drilldown should happen. The ID or the control itself can be given.
		 * @param sTransitionName The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
		 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
		 * 
		 *         None of the standard transitions is currently making use of any given transition parameters.
		 * @param oData Since version 1.7.1. This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
		 * 
		 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
		 * 
		 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
		 * @param oTransitionParameters Since version 1.7.1. This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
		 * 
		 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
		 * 
		 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
		 *         The "show", "slide" and "fade" transitions do not use any parameter.
		 * @return 
		 */
		 toMaster(sPageId:string, sTransitionName:string, oData:any, oTransitionParameters:any): sap.m.SplitContainer;
	}
	class StandardListItem extends sap.m.ListItemBase{
		/**
		 * Constructor for a new StandardListItem.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId Id for the new control, generated automatically if no id is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.StandardListItem with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Gets current value of property <code>activeIcon</code>.
		 * 
		 * Defines the icon that is shown while the list item is pressed.
		 * @return Value of property <code>activeIcon</code>
		 */
		 getActiveIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>description</code>.
		 * 
		 * Defines the additional information for the title.
		 * <b>Note:</b> This is only visible when the <code>title</code> property is not empty.
		 * @return Value of property <code>description</code>
		 */
		 getDescription(): string;
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Defines the list item icon.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets current value of property <code>iconDensityAware</code>.
		 * 
		 * By default, one or more requests are sent to get the density perfect version of the icon if the given version of the icon doesn't exist on the server.
		 * <b>Note:<b> If bandwidth is a key factor for the application, set this value to <code>false</code>.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconDensityAware</code>
		 */
		 getIconDensityAware(): boolean;
		/**
		 * Gets current value of property <code>iconInset</code>.
		 * 
		 * Defines the indentation of the icon. If set to <code>false</code>, the icon will not be shown as embedded. Instead it will take the full height of the list item.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>iconInset</code>
		 */
		 getIconInset(): boolean;
		/**
		 * Gets current value of property <code>info</code>.
		 * 
		 * Defines an additional information text.
		 * @return Value of property <code>info</code>
		 */
		 getInfo(): string;
		/**
		 * Gets current value of property <code>infoState</code>.
		 * 
		 * Defines the state of the information text, e.g. <code>Error</code>, <code>Warning</code>, <code>Success</code>.
		 * 
		 * Default value is <code>None</code>.
		 * @return Value of property <code>infoState</code>
		 */
		 getInfoState(): sap.ui.core.ValueState;
		/**
		 * Returns a metadata object for class sap.m.StandardListItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>title</code>.
		 * 
		 * Defines the title of the list item.
		 * @return Value of property <code>title</code>
		 */
		 getTitle(): string;
		/**
		 * Sets a new value for property <code>activeIcon</code>.
		 * 
		 * Defines the icon that is shown while the list item is pressed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sActiveIcon New value for property <code>activeIcon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setActiveIcon(sActiveIcon:sap.ui.core.URI): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>description</code>.
		 * 
		 * Defines the additional information for the title.
		 * <b>Note:</b> This is only visible when the <code>title</code> property is not empty.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sDescription New value for property <code>description</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setDescription(sDescription:string): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>icon</code>.
		 * 
		 * Defines the list item icon.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sIcon New value for property <code>icon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>iconDensityAware</code>.
		 * 
		 * By default, one or more requests are sent to get the density perfect version of the icon if the given version of the icon doesn't exist on the server.
		 * <b>Note:<b> If bandwidth is a key factor for the application, set this value to <code>false</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconDensityAware New value for property <code>iconDensityAware</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconDensityAware(bIconDensityAware:boolean): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>iconInset</code>.
		 * 
		 * Defines the indentation of the icon. If set to <code>false</code>, the icon will not be shown as embedded. Instead it will take the full height of the list item.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bIconInset New value for property <code>iconInset</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIconInset(bIconInset:boolean): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>info</code>.
		 * 
		 * Defines an additional information text.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sInfo New value for property <code>info</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setInfo(sInfo:string): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>infoState</code>.
		 * 
		 * Defines the state of the information text, e.g. <code>Error</code>, <code>Warning</code>, <code>Success</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>None</code>.
		 * @param sInfoState New value for property <code>infoState</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setInfoState(sInfoState:sap.ui.core.ValueState): sap.m.StandardListItem;
		/**
		 * Sets a new value for property <code>title</code>.
		 * 
		 * Defines the title of the list item.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sTitle New value for property <code>title</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTitle(sTitle:string): sap.m.StandardListItem;
	}
	/**
	 * Types for StandardTile
	 */
	type StandardTileType = 
	/**
	 * Types for StandardTile
	 */
	"Create" |
	/**
	 * Types for StandardTile
	 */
	"Monitor" |
	/**
	 * Types for StandardTile
	 */
	"None";
	/**
	 * Directions for swipe event.
	 */
	type SwipeDirection = 
	/**
	 * Directions for swipe event.
	 */
	"Both" |
	/**
	 * Directions for swipe event.
	 */
	"LeftToRight" |
	/**
	 * Directions for swipe event.
	 */
	"RightToLeft";
	class Switch extends sap.ui.core.Control{
		/**
		 * Constructor for a new Switch.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.m.Switch</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Switch</code> itself.
		 * 
		 * Triggered when a switch changes the state.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Switch</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachChange(fnFunction:any, oData?:any, oListener?:any): sap.m.Switch;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.m.Switch</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachChange(fnFunction:any, oListener:any): sap.m.Switch;
		/**
		 * Creates a new subclass of class sap.m.Switch with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>change</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>state</code> of type <code>boolean</code>The new state of the switch.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireChange(mArguments?:any): sap.m.Switch;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Gets current value of property <code>customTextOff</code>.
		 * 
		 * Custom text for the "OFF" state.
		 * 
		 * "OFF" translated to the current language is the default value.
		 * Beware that the given text will be cut off after three characters.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>customTextOff</code>
		 */
		 getCustomTextOff(): string;
		/**
		 * Gets current value of property <code>customTextOn</code>.
		 * 
		 * Custom text for the "ON" state.
		 * 
		 * "ON" translated to the current language is the default value.
		 * Beware that the given text will be cut off after three characters.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>customTextOn</code>
		 */
		 getCustomTextOn(): string;
		/**
		 * Gets current value of property <code>enabled</code>.
		 * 
		 * Whether the switch is enabled.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>enabled</code>
		 */
		 getEnabled(): boolean;
		/**
		 * Returns a metadata object for class sap.m.Switch.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>name</code>.
		 * 
		 * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>name</code>
		 */
		 getName(): string;
		/**
		 * Gets current value of property <code>state</code>.
		 * 
		 * A boolean value indicating whether the switch is on or off.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>state</code>
		 */
		 getState(): boolean;
		/**
		 * Gets current value of property <code>type</code>.
		 * 
		 * Type of a Switch. Possibles values "Default", "AcceptReject".
		 * 
		 * Default value is <code>Default</code>.
		 * @return Value of property <code>type</code>
		 */
		 getType(): sap.m.SwitchType;
		/**
		 * Sets a new value for property <code>customTextOff</code>.
		 * 
		 * Custom text for the "OFF" state.
		 * 
		 * "OFF" translated to the current language is the default value.
		 * Beware that the given text will be cut off after three characters.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sCustomTextOff New value for property <code>customTextOff</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomTextOff(sCustomTextOff:string): sap.m.Switch;
		/**
		 * Sets a new value for property <code>customTextOn</code>.
		 * 
		 * Custom text for the "ON" state.
		 * 
		 * "ON" translated to the current language is the default value.
		 * Beware that the given text will be cut off after three characters.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sCustomTextOn New value for property <code>customTextOn</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setCustomTextOn(sCustomTextOn:string): sap.m.Switch;
		/**
		 * Sets a new value for property <code>enabled</code>.
		 * 
		 * Whether the switch is enabled.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEnabled New value for property <code>enabled</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEnabled(bEnabled:boolean): sap.m.Switch;
		/**
		 * Sets a new value for property <code>name</code>.
		 * 
		 * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sName New value for property <code>name</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setName(sName:string): sap.m.Switch;
		/**
		 * Change the switch state between on and off.
		 * @param bState 
		 * @return <code>this</code> to allow method chaining.
		 */
		 setState(bState:boolean): sap.m.Switch;
		/**
		 * Sets a new value for property <code>type</code>.
		 * 
		 * Type of a Switch. Possibles values "Default", "AcceptReject".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Default</code>.
		 * @param sType New value for property <code>type</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setType(sType:sap.m.SwitchType): sap.m.Switch;
	}
	/**
	 * Enumaration for different switch types.
	 */
	type SwitchType = 
	/**
	 * Enumaration for different switch types.
	 */
	"AcceptReject" |
	/**
	 * Enumaration for different switch types.
	 */
	"Default";
	class TablePersoController extends sap.ui.base.ManagedObject{
		/**
		 * The TablePersoController can be used to connect a table that you want to provide
		 * a personalization dialog for, with a persistence service such as one provided by
		 * the unified shell.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId optional id for the new control; generated automatically if
		 * 			no non-empty id is given Note: this can be omitted, no matter
		 * 			whether <code>mSettings</code> will be given or not!
		 * @param mSettings optional map/JSON-object with initial settings for the
		 * 			new component instance
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Activates the controller, i.e. tries to retrieve existing persisted
		 * personalizations, creates a TablePersoDialog for the associated
		 * table and attaches a close handler to apply the personalizations to
		 * the table and persist them.
		 * 
		 * This method should be called when the table to be personalized knows
		 * its columns. Usually, this is when that table's view has set its model,
		 * which is typically done in the corresponding controller's init method.
		 * For example
		 * <pre><code>
		 *  onInit: function () {
		 * 
		 * 		// set explored app's demo model on this sample
		 * 		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
		 * 		var oGroupingModel = new JSONModel({ hasGrouping: false});
		 * 		this.getView().setModel(oModel);
		 * 		this.getView().setModel(oGroupingModel, 'Grouping');
		 * 
		 * 		// init and activate controller
		 * 		this._oTPC = new TablePersoController({
		 * 			table: this.getView().byId("productsTable"),
		 * 			//specify the first part of persistence ids e.g. 'demoApp-productsTable-dimensionsCol'
		 * 			componentName: "demoApp",
		 * 			persoService: DemoPersoService,
		 * 		}).activate();
		 * 	}
		 * </code></pre>
		 * @return the TablePersoController instance.
		 */
		 activate(): any;
		/**
		 * Adds some table into the association <code>tables</code>.
		 * @param vTable the tables to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addTable(vTable:sap.ui.core.ID|sap.m.Table): sap.m.TablePersoController;
		/**
		 * Applies the personalizations by getting the existing personalizations
		 * and adjusting to the table.
		 * @param oTable the table to be personalized.
		 */
		 applyPersonalizations(oTable:sap.m.Table);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>personalizationsDone</code> event of this <code>sap.m.TablePersoController</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.TablePersoController</code> itself.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.TablePersoController</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachPersonalizationsDone(fnFunction:any, oData?:any, oListener?:any): sap.m.TablePersoController;
		/**
		 * Destroys the persoService in the aggregation <code>persoService</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyPersoService(): sap.m.TablePersoController;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>personalizationsDone</code> event of this <code>sap.m.TablePersoController</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachPersonalizationsDone(fnFunction:any, oListener:any): sap.m.TablePersoController;
		/**
		 * Do some clean up: remove event delegates, etc
		 */
		protected exit();
		/**
		 * Creates a new subclass of class sap.m.TablePersoController with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>personalizationsDone</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected firePersonalizationsDone(mArguments?:any): sap.m.TablePersoController;
		/**
		 * Gets current value of property <code>componentName</code>.
		 * 
		 * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
		 * @return Value of property <code>componentName</code>
		 */
		 getComponentName(): string;
		/**
		 * Gets current value of property <code>contentHeight</code>.
		 * 
		 * Default value is <code>20rem</code>.
		 * @return Value of property <code>contentHeight</code>
		 */
		 getContentHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>contentWidth</code>.
		 * @return Value of property <code>contentWidth</code>
		 */
		 getContentWidth(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>hasGrouping</code>.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>hasGrouping</code>
		 */
		 getHasGrouping(): boolean;
		/**
		 * Returns a metadata object for class sap.m.TablePersoController.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets content of aggregation <code>persoService</code>.
		 * @return 
		 */
		 getPersoService(): any;
		/**
		 * Gets current value of property <code>showResetAll</code>.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showResetAll</code>
		 */
		 getShowResetAll(): boolean;
		/**
		 * Gets current value of property <code>showSelectAll</code>.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>showSelectAll</code>
		 */
		 getShowSelectAll(): boolean;
		/**
		 * ID of the element which is the current target of the association <code>table</code>, or <code>null</code>.
		 * @return 
		 */
		 getTable(): sap.ui.core.ID;
		/**
		 * Returns a  _tablePersoDialog instance if available. It can be NULL if
		 * the controller has not been activated yet.
		 * 
		 * This function makes a private aggregate publicly accessable. This is
		 * necessary for downward compatibility reasons: in the first versions
		 * of the tablePersoProvider developers still worked with the TablePersoDialog
		 * directly, which is now not necessary any longer.
		 * @return the TablePersoDialog instance.
		 */
		 getTablePersoDialog(): any;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>tables</code>.
		 * @return 
		 */
		 getTables(): sap.ui.core.ID[];
		/**
		 * Initializes the TablePersoController instance after creation.
		 */
		protected init();
		/**
		 * Opens the TablePersoDialog, stores the personalized settings on close,
		 * modifies the table columns, and sends them to the persistence service
		 */
		 openDialog();
		/**
		 * Refresh the personalizations: reloads the personalization information from the table perso
		 * provider, applies it to the controller's table and updates the controller's table perso dialog.
		 * 
		 * Use case for a 'refresh' call would be that the table which si personalized changed its columns
		 * during runtime, after personalization has been activated.
		 */
		 refresh();
		/**
		 * Removes all the controls in the association named <code>tables</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllTables(): sap.ui.core.ID[];
		/**
		 * Removes an table from the association named <code>tables</code>.
		 * @param vTable The table to be removed or its index or ID
		 * @return The removed table or <code>null</code>
		 */
		 removeTable(vTable:number|sap.ui.core.ID|sap.m.Table): sap.ui.core.ID;
		/**
		 * Persist the personalizations
		 */
		 savePersonalizations();
		/**
		 * Using this method, the first part of tablePerso persistence ids can be
		 * provided, in case the table's app does not provide that part itself.
		 * 
		 * If a component name is set using this method, it will be used, regardless of
		 * whether the table's app has a different component name or not.
		 * @param sCompName the new component name.
		 * @return the TablePersoController instance.
		 */
		 setComponentName(sCompName:string): any;
		/**
		 * Reflector for the controller's 'contentHeight' property.
		 * @param sHeight the new height of the TablePersoDialog.
		 * @return the TablePersoController instance.
		 */
		 setContentHeight(sHeight:sap.ui.core.CSSSize): any;
		/**
		 * Reflector for the controller's 'contentWidth' property.
		 * @param sWidth the new width of the tablePersoDialog
		 * @return the TablePersoController instance.
		 */
		 setContentWidth(sWidth:sap.ui.core.CSSSize): any;
		/**
		 * Reflector for the controller's 'hasGrouping' property.
		 * @param bHasGrouping is the tablePersoDialog displayed in grouping mode or not.
		 * @return the TablePersoController instance.
		 */
		 setHasGrouping(bHasGrouping:boolean): any;
		/**
		 * Sets the aggregated <code>persoService</code>.
		 * @param oPersoService The persoService to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setPersoService(oPersoService:any): sap.m.TablePersoController;
		/**
		 * Reflector for the controller's 'showResetAll' property.
		 * @param bShowResetAll is the tablePersoDialog's 'UndoPersonalization' button displayed or not.
		 * @return the TablePersoController instance.
		 */
		 setShowResetAll(bShowResetAll:boolean): any;
		/**
		 * Reflector for the controller's 'showSelectAll' property.
		 * @param bShowSelectAll is the tablePersoDialog's 'Display All' checkbox displayed or not.
		 * @return the TablePersoController instance.
		 */
		 setShowSelectAll(bShowSelectAll:boolean): any;
		/**
		 * Sets the associated <code>table</code>.
		 * @param oTable ID of an element which becomes the new target of this table association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTable(oTable:sap.ui.core.ID|sap.m.Table): sap.m.TablePersoController;
	}
	class TablePersoDialog extends sap.ui.base.ManagedObject{
		/**
		 * The TablePersoDialog can be used to display and allow modification of personalization settings relating to a Table. It displays the columns of the table that it refers to by using
		 * <ul><li>The result of calling sap.m.TablePersoProvider's 'getCaption' callback if it is implemented and delivers a non-null value for a column</li>
		 * <li>the column header control's 'text' property if no caption property is available</li>
		 * <li>the column header control's 'title' property if neither 'text' nor 'caption' property are available</li>
		 * <li>the column id is displayed as last fallback, if none of the above is at hand. In that case, a warning is logged. </li></ul>
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId optional id for the new control; generated automatically if
		 * 			no non-empty id is given Note: this can be omitted, no matter
		 * 			whether <code>mSettings</code> will be given or not!
		 * @param mSettings optional map/JSON-object with initial settings for the
		 * 			new component instance
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this <code>sap.m.TablePersoDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.TablePersoDialog</code> itself.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.TablePersoDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachCancel(fnFunction:any, oData?:any, oListener?:any): sap.m.TablePersoDialog;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>confirm</code> event of this <code>sap.m.TablePersoDialog</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.TablePersoDialog</code> itself.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.TablePersoDialog</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachConfirm(fnFunction:any, oData?:any, oListener?:any): sap.m.TablePersoDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this <code>sap.m.TablePersoDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachCancel(fnFunction:any, oListener:any): sap.m.TablePersoDialog;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>confirm</code> event of this <code>sap.m.TablePersoDialog</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachConfirm(fnFunction:any, oListener:any): sap.m.TablePersoDialog;
		/**
		 * Creates a new subclass of class sap.m.TablePersoDialog with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>cancel</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireCancel(mArguments?:any): sap.m.TablePersoDialog;
		/**
		 * Fires event <code>confirm</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireConfirm(mArguments?:any): sap.m.TablePersoDialog;
		/**
		 * Gets current value of property <code>columnInfoCallback</code>.
		 * @return Value of property <code>columnInfoCallback</code>
		 */
		 getColumnInfoCallback(): any;
		/**
		 * Gets current value of property <code>contentHeight</code>.
		 * @return Value of property <code>contentHeight</code>
		 */
		 getContentHeight(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>contentWidth</code>.
		 * @return Value of property <code>contentWidth</code>
		 */
		 getContentWidth(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>hasGrouping</code>.
		 * @return Value of property <code>hasGrouping</code>
		 */
		 getHasGrouping(): boolean;
		/**
		 * Gets current value of property <code>initialColumnState</code>.
		 * @return Value of property <code>initialColumnState</code>
		 */
		 getInitialColumnState(): any;
		/**
		 * Returns a metadata object for class sap.m.TablePersoDialog.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * ID of the element which is the current target of the association <code>persoDialogFor</code>, or <code>null</code>.
		 * @return 
		 */
		 getPersoDialogFor(): sap.ui.core.ID;
		/**
		 * Gets current value of property <code>persoMap</code>.
		 * @return Value of property <code>persoMap</code>
		 */
		 getPersoMap(): any;
		/**
		 * Gets current value of property <code>showResetAll</code>.
		 * @return Value of property <code>showResetAll</code>
		 */
		 getShowResetAll(): boolean;
		/**
		 * Gets current value of property <code>showSelectAll</code>.
		 * @return Value of property <code>showSelectAll</code>
		 */
		 getShowSelectAll(): boolean;
		/**
		 * Initializes the TablePersoDialog instance after creation.
		 */
		protected init();
		/**
		 * Sets the content of the dialog, being list items representing
		 * the associated table's column settings, and opens the dialog
		 */
		 open();
		/**
		 * Returns the personalizations made. Currently supports
		 * a 'columns' property which holds an array of settings,
		 * one element per column in the associated table. The element
		 * contains column-specific information as follows: id: column id;
		 * order: new order; text: the column's header text that was displayed
		 * in the dialog; visible: visibility (true or false).
		 * @return the personalization data
		 */
		 retrievePersonalizations(): any;
		/**
		 * Sets a new value for property <code>columnInfoCallback</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param oColumnInfoCallback New value for property <code>columnInfoCallback</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setColumnInfoCallback(oColumnInfoCallback:any): sap.m.TablePersoDialog;
		/**
		 * Sets a new value for property <code>contentHeight</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sContentHeight New value for property <code>contentHeight</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setContentHeight(sContentHeight:sap.ui.core.CSSSize): sap.m.TablePersoDialog;
		/**
		 * Sets a new value for property <code>contentWidth</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sContentWidth New value for property <code>contentWidth</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setContentWidth(sContentWidth:sap.ui.core.CSSSize): sap.m.TablePersoDialog;
		/**
		 * Setter to turn on/ switch off TablePersoDialog's grouping mode.
		 * @param bHasGrouping groping mode on or off.
		 * @return the TablePersoDialog instance.
		 */
		 setHasGrouping(bHasGrouping:boolean): any;
		/**
		 * Sets a new value for property <code>initialColumnState</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param oInitialColumnState New value for property <code>initialColumnState</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setInitialColumnState(oInitialColumnState:any): sap.m.TablePersoDialog;
		/**
		 * Sets the associated <code>persoDialogFor</code>.
		 * @param oPersoDialogFor ID of an element which becomes the new target of this persoDialogFor association; alternatively, an element instance may be given
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setPersoDialogFor(oPersoDialogFor:sap.ui.core.ID|sap.m.Table): sap.m.TablePersoDialog;
		/**
		 * Sets a new value for property <code>persoMap</code>.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param oPersoMap New value for property <code>persoMap</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setPersoMap(oPersoMap:any): sap.m.TablePersoDialog;
		/**
		 * Setter to show/hide TablePersoDialog's 'Undo Personalization' button.
		 * @param bShowResetAll 'undo Personalization' button visible or not.
		 * @return the TablePersoDialog instance.
		 */
		 setShowResetAll(bShowResetAll:boolean): any;
		/**
		 * Setter to show/hide TablePersoDialog's 'selectAll' checkbox.
		 * @param bShowSelectAll selectAll checkbox visible or not.
		 * @return the TablePersoDialog instance.
		 */
		 setShowSelectAll(bShowSelectAll:boolean): any;
	}
	class TablePersoProvider extends sap.ui.base.ManagedObject{
		/**
		 * This is an abstract TablePersoProvider, describing the interface for a real
		 * TablePersoProvider.
		 */
		 constructor();
		/**
		 * Removes the personalization bundle
		 * This must return a jQuery promise (see http://api.jquery.com/promise/)
		 */
		 delPersData();
		/**
		 * Creates a new subclass of class sap.m.TablePersoProvider with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Callback function which can be used to determine the title of a given column
		 * within the TablePersoDialog. As a default, the column header controls are
		 * asked for their 'text' or 'title' property. This works in most cases, for example
		 * if the header control is a sap.m.Label (has 'text' property) or a sap.m.ObjectListItem
		 * (has 'title' property).
		 * 
		 * If the header control used in a column has neither 'text' nor 'title' property, or if you would like to
		 * display a modified column name for a certain column, this callback function can be used.
		 * 
		 * If the callback delivers null for a column (which is the default implementation), the default
		 * texts described above are displayed for that column in the TablePersoDialog.
		 * 
		 * In case neither the callback delivers null and neither 'text' nor ' title' property are at hand,
		 * the TablePersoDialog will display the column id and a warning message is logged.
		 * @param oColumn column whose caption shall be determined
		 */
		 getCaption(oColumn:sap.m.Column);
		/**
		 * Callback function which can be used to determine the group of a given column
		 * within the TablePersoDialog. As a default, the columns are not assigned to a group.
		 * 
		 * This information is used to group the columns within the TablePersoDialog if the TablePersoController's
		 * 'group' flag is set, otherwise, the groups are ignored.
		 * @param oColumn column whose group shall be determined
		 */
		 getGroup(oColumn:sap.m.Column);
		/**
		 * Returns a metadata object for class sap.m.TablePersoProvider.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Retrieves the personalization bundle.
		 * This must return a jQuery promise (see http://api.jquery.com/promise/)
		 */
		 getPersData();
		/**
		 * Initializes the TablePersoProvider instance after creation.
		 */
		protected init();
		/**
		 * Resets user’s personalization for a given table so that ‘getPersData’ will
		 * deliver its initial state. If no table is specified, all personalizations
		 * of the currently logged on user are reset.
		 * 
		 * This must return a jQuery promise (see http://api.jquery.com/promise/)
		 */
		 resetPersData();
		/**
		 * Stores the personalization bundle, overwriting any
		 * previous bundle completely
		 * This must return a jQuery promise (see http://api.jquery.com/promise/)
		 * @param oBundle 
		 */
		 setPersData(oBundle:any);
	}
	class Text extends sap.ui.core.Control{
		/**
		 * Constructor for a new Text.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Binds property <code>text</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindText(oBindingInfo:any): sap.m.Text;
		/**
		 * Creates a new subclass of class sap.m.Text with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Returns a metadata object for class sap.m.Text.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Determines the text to be displayed.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Gets current value of property <code>textAlign</code>.
		 * 
		 * Sets the horizontal alignment of the text.
		 * 
		 * Default value is <code>Begin</code>.
		 * @return Value of property <code>textAlign</code>
		 */
		 getTextAlign(): sap.ui.core.TextAlign;
		/**
		 * Gets current value of property <code>textDirection</code>.
		 * 
		 * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @return Value of property <code>textDirection</code>
		 */
		 getTextDirection(): sap.ui.core.TextDirection;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Sets the width of the Text control. By default, the Text control uses the full width available. Set this property to restrict the width to a custom value.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Gets current value of property <code>wrapping</code>.
		 * 
		 * Enables text wrapping.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>wrapping</code>
		 */
		 getWrapping(): boolean;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Determines the text to be displayed.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.Text;
		/**
		 * Sets a new value for property <code>textAlign</code>.
		 * 
		 * Sets the horizontal alignment of the text.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Begin</code>.
		 * @param sTextAlign New value for property <code>textAlign</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextAlign(sTextAlign:sap.ui.core.TextAlign): sap.m.Text;
		/**
		 * Sets a new value for property <code>textDirection</code>.
		 * 
		 * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>Inherit</code>.
		 * @param sTextDirection New value for property <code>textDirection</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setTextDirection(sTextDirection:sap.ui.core.TextDirection): sap.m.Text;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Sets the width of the Text control. By default, the Text control uses the full width available. Set this property to restrict the width to a custom value.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Text;
		/**
		 * Sets a new value for property <code>wrapping</code>.
		 * 
		 * Enables text wrapping.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bWrapping New value for property <code>wrapping</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWrapping(bWrapping:boolean): sap.m.Text;
		/**
		 * Unbinds property <code>text</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindText(): sap.m.Text;
	}
	class ToggleButton extends sap.m.Button{
		/**
		 * Constructor for a new ToggleButton.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.ToggleButton with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Button.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * 
		 */
		protected getAccessibilityInfo();
		/**
		 * Returns a metadata object for class sap.m.ToggleButton.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>pressed</code>.
		 * 
		 * The property is “true” when the control is toggled. The default state of this property is "false".
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>pressed</code>
		 */
		 getPressed(): boolean;
		/**
		 * Sets a new value for property <code>pressed</code>.
		 * 
		 * The property is “true” when the control is toggled. The default state of this property is "false".
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>false</code>.
		 * @param bPressed New value for property <code>pressed</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setPressed(bPressed:boolean): sap.m.ToggleButton;
	}
	class Token extends sap.ui.core.Control{
		/**
		 * Constructor for a new Token.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId ID for the new control, generated automatically if no ID is given.
		 * @param mSettings Initial settings for the new control.
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Token;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Token;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>delete</code> event of this <code>sap.m.Token</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Token</code> itself.
		 * 
		 * This event is fired if the user clicks the token's delete icon.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Token</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachDelete(fnFunction:any, oData?:any, oListener?:any): sap.m.Token;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.m.Token</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Token</code> itself.
		 * 
		 * This event is fired when the user clicks on the token.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Token</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachPress(fnFunction:any, oData?:any, oListener?:any): sap.m.Token;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.m.Token</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Token</code> itself.
		 * 
		 * This event is fired when the token gets selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Token</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.m.Token;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>delete</code> event of this <code>sap.m.Token</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachDelete(fnFunction:any, oListener:any): sap.m.Token;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.m.Token</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachPress(fnFunction:any, oListener:any): sap.m.Token;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.m.Token</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.m.Token;
		/**
		 * Creates a new subclass of class sap.m.Token with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>delete</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireDelete(mArguments?:any): sap.m.Token;
		/**
		 * Fires event <code>press</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected firePress(mArguments?:any): sap.m.Token;
		/**
		 * Fires event <code>select</code> to attached listeners.
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.m.Token;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>editable</code>.
		 * 
		 * Indicates the editable status of the token. If it is set to <code>true</code>, token displays a delete icon.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>editable</code>
		 */
		 getEditable(): boolean;
		/**
		 * Gets current value of property <code>key</code>.
		 * 
		 * Key of the token.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>key</code>
		 */
		 getKey(): string;
		/**
		 * Returns a metadata object for class sap.m.Token.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>selected</code>.
		 * 
		 * Indicates the current selection status of the token.
		 * 
		 * Default value is <code>false</code>.
		 * @return Value of property <code>selected</code>
		 */
		 getSelected(): boolean;
		/**
		 * Gets current value of property <code>text</code>.
		 * 
		 * Displayed text of the token.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>text</code>
		 */
		 getText(): string;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Sets a new value for property <code>editable</code>.
		 * 
		 * Indicates the editable status of the token. If it is set to <code>true</code>, token displays a delete icon.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEditable New value for property <code>editable</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEditable(bEditable:boolean): sap.m.Token;
		/**
		 * Sets a new value for property <code>key</code>.
		 * 
		 * Key of the token.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sKey New value for property <code>key</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setKey(sKey:string): sap.m.Token;
		/**
		 * Sets a new value for property <code>text</code>.
		 * 
		 * Displayed text of the token.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sText New value for property <code>text</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setText(sText:string): sap.m.Token;
	}
	class Tokenizer extends sap.ui.core.Control{
		/**
		 * Constructor for a new Tokenizer.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Adds some ariaDescribedBy into the association <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Tokenizer;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.m.Tokenizer;
		/**
		 * Adds some token to the aggregation <code>tokens</code>.
		 * @param oToken the token to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addToken(oToken:sap.m.Token): sap.m.Tokenizer;
		/**
		 * Function validates the given text and adds a new token if validation was successful
		 * @param oParameters parameter bag containing following fields: {sap.m.String} text - the source text {sap.m.Token}
		 *          [optional] token - a suggested token {object} [optional] suggestionObject - any object used to find the
		 *          suggested token {function} [optional] validationCallback - callback which gets called after validation has
		 *          finished
		 */
		 addValidateToken(oParameters:any);
		/**
		 * Function adds an validation callback called before any new token gets added to the tokens aggregation
		 * @param fValidator 
		 */
		 addValidator(fValidator:any);
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>tokenChange</code> event of this <code>sap.m.Tokenizer</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.m.Tokenizer</code> itself.
		 * 
		 * fired when the tokens aggregation changed (add / remove token)
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.m.Tokenizer</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachTokenChange(fnFunction:any, oData?:any, oListener?:any): sap.m.Tokenizer;
		/**
		 * Destroys all the tokens in the aggregation <code>tokens</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyTokens(): sap.m.Tokenizer;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>tokenChange</code> event of this <code>sap.m.Tokenizer</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachTokenChange(fnFunction:any, oListener:any): sap.m.Tokenizer;
		/**
		 * Creates a new subclass of class sap.m.Tokenizer with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Fires event <code>tokenChange</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>type</code> of type <code>string</code>type of tokenChange event.
		 * There are four TokenChange types: "added", "removed", "removedAll", "tokensChanged".
		 * Use Tokenizer.TokenChangeType.Added for "added",	Tokenizer.TokenChangeType.Removed for "removed", Tokenizer.TokenChangeType.RemovedAll for "removedAll" and Tokenizer.TokenChangeType.TokensChanged for "tokensChanged".</li>
		 * <li><code>token</code> of type <code>sap.m.Token</code>the added token or removed token.
		 * This parameter is used when tokenChange type is "added" or "removed".</li>
		 * <li><code>tokens</code> of type <code>sap.m.Token[]</code>the array of removed tokens.
		 * This parameter is used when tokenChange type is "removedAll".</li>
		 * <li><code>addedTokens</code> of type <code>sap.m.Token[]</code>the array of tokens that are added.
		 * This parameter is used when tokenChange type is "tokenChanged".</li>
		 * <li><code>removedTokens</code> of type <code>sap.m.Token[]</code>the array of tokens that are removed.
		 * This parameter is used when tokenChange type is "tokenChanged".</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireTokenChange(mArguments?:any): sap.m.Tokenizer;
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaDescribedBy</code>.
		 * @return 
		 */
		 getAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
		 * @return 
		 */
		 getAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Gets current value of property <code>editable</code>.
		 * 
		 * true if tokens shall be editable otherwise false
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>editable</code>
		 */
		 getEditable(): boolean;
		/**
		 * Returns a metadata object for class sap.m.Tokenizer.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Function returns the internally used scroll delegate
		 * @return 
		 */
		 getScrollDelegate(): sap.ui.core.delegate.ScrollEnablement;
		/**
		 * Function returns the tokens' width
		 * @return the complete tokens' width
		 */
		 getScrollWidth();
		/**
		 * Function returns all currently selected tokens
		 * @return - array of selected tokens or empty array
		 */
		 getSelectedTokens(): sap.m.Token[];
		/**
		 * Gets content of aggregation <code>tokens</code>.
		 * 
		 * the currently displayed tokens
		 * @return 
		 */
		 getTokens(): sap.m.Token[];
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Defines the width of the Tokenizer.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Checks for the provided <code>sap.m.Token</code> in the aggregation <code>tokens</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oToken The token whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfToken(oToken:sap.m.Token): number;
		/**
		 * Inserts a token into the aggregation <code>tokens</code>.
		 * @param oToken the token to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the token should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the token is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the token is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertToken(oToken:sap.m.Token, iIndex:number): sap.m.Tokenizer;
		/**
		 * Removes all the controls in the association named <code>ariaDescribedBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaDescribedBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllAriaLabelledBy(): sap.ui.core.ID[];
		/**
		 * Removes all the controls from the aggregation <code>tokens</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllTokens(): sap.m.Token[];
		/**
		 * Function removes all validation callbacks
		 */
		 removeAllValidators();
		/**
		 * Removes an ariaDescribedBy from the association named <code>ariaDescribedBy</code>.
		 * @param vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
		 * @return The removed ariaDescribedBy or <code>null</code>
		 */
		 removeAriaDescribedBy(vAriaDescribedBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
		 * @return The removed ariaLabelledBy or <code>null</code>
		 */
		 removeAriaLabelledBy(vAriaLabelledBy:number|sap.ui.core.ID|sap.ui.core.Control): sap.ui.core.ID;
		/**
		 * Function removes all selected tokens
		 * @return - this for chaining
		 */
		 removeSelectedTokens(): sap.m.Tokenizer;
		/**
		 * Removes a token from the aggregation <code>tokens</code>.
		 * @param vToken The token to remove or its index or id
		 * @return The removed token or <code>null</code>
		 */
		 removeToken(vToken:number|string|sap.m.Token): sap.m.Token;
		/**
		 * Function removes an validation callback
		 * @param fValidator 
		 */
		 removeValidator(fValidator:any);
		/**
		 * Function scrolls the tokens to the end
		 * @param bInitialize indicates if we should reset the 'scroll-to-end-pending' flag; if true we would reset this flag
		 */
		 scrollToEnd(bInitialize:boolean);
		/**
		 * Function scrolls the tokens to the start
		 */
		 scrollToStart();
		/**
		 * Function selects all tokens
		 * @param optional bSelect - true for selecting, false for deselecting
		 * @return - this for chaining
		 */
		 selectAllTokens(optional?:boolean): sap.m.Tokenizer;
		/**
		 * Sets a new value for property <code>editable</code>.
		 * 
		 * true if tokens shall be editable otherwise false
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bEditable New value for property <code>editable</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setEditable(bEditable:boolean): sap.m.Tokenizer;
		/**
		 * Function sets the tokenizer's width in pixels
		 * @param nWidth the new width in pixels
		 */
		 setPixelWidth(nWidth:number);
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Defines the width of the Tokenizer.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.m.Tokenizer;
	}
	/**
	 * Touch helper.
	 */
	namespace touch {
		/**
		 * Given a list of touches, count the number of touches related with the given element.
		 * @param oTouchList The list of touch objects to search.
		 * @param vElement A jQuery element or an element reference or an element id.
		 * @return The number of touches related with the given element.
		 */
		function countContained(oTouchList:any, vElement:any|any|string): number;
		/**
		 * Given a list of touch objects, find the touch that matches the given one.
		 * @param oTouchList The list of touch objects to search.
		 * @param oTouch A touch object to find or a Touch.identifier that uniquely identifies the current finger in the touch session.
		 * @return The touch matching if any.
		 */
		function find(oTouchList:any, oTouch:any|number): any|any;
	}
	class UploadCollectionParameter extends sap.ui.core.Element{
		/**
		 * Constructor for a new UploadCollectionParameter.
		 * 
		 * 
		 * Accepts an object literal <code>mSettings</code> that defines initial
		 * property values, aggregated and associated objects as well as event handlers.
		 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.UploadCollectionParameter with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.UploadCollectionParameter.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	/**
	 * Enumeration of possible value color settings.
	 */
	type ValueColor = 
	/**
	 * Enumeration of possible value color settings.
	 */
	"Critical" |
	/**
	 * Enumeration of possible value color settings.
	 */
	"Error" |
	/**
	 * Enumeration of possible value color settings.
	 */
	"Good" |
	/**
	 * Enumeration of possible value color settings.
	 */
	"Neutral";
	/**
	 * A string type that represents CSS color values and sap.m.ValueColor.
	 * 
	 * Allowed values are {@link sap.ui.core.CSSColor} and {@link sap.m.ValueColor}
	 * 
	 * The empty string is also allowed and has the same effect as setting no color.
	 */
	type ValueCSSColor = any
	class VBox extends sap.m.FlexBox{
		/**
		 * Constructor for a new VBox.
		 * @param sId id for the new control, generated automatically if no id is given
		 * @param mSettings initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.m.VBox with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.FlexBox.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.m.VBox.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	/**
	 * Types for the placement of message popover control.
	 */
	type VerticalPlacementType = 
	/**
	 * Types for the placement of message popover control.
	 */
	"Bottom" |
	/**
	 * Types for the placement of message popover control.
	 */
	"Top" |
	/**
	 * Types for the placement of message popover control.
	 */
	"Vertical";
}

declare namespace sap.m.MessageBox {
	/**
	 * Enumeration of supported actions in a MessageBox.
	 * 
	 * Each action is represented as a button in the message box. The values of this enumeration are used for both,
	 * specifying the set of allowed actions as well as reporting back the user choice.
	 */
	type Action = any
	/**
	 * Enumeration of the pre-defined icons that can be used in a MessageBox.
	 */
	type Icon = any
}

declare namespace sap.m.semantic {
	interface IFilter {
	}
	interface IGroup {
	}
	interface ISort {
	}
}
