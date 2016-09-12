
declare namespace sap.tnt {
	class NavigationList extends sap.ui.core.Control{
		/**
		 * Constructor for a new NavigationList.
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
		 addAriaDescribedBy(vAriaDescribedBy:sap.ui.core.ID|sap.ui.core.Control): sap.tnt.NavigationList;
		/**
		 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
		 * @param vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addAriaLabelledBy(vAriaLabelledBy:sap.ui.core.ID|sap.ui.core.Control): sap.tnt.NavigationList;
		/**
		 * Adds some item to the aggregation <code>items</code>.
		 * @param oItem the item to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addItem(oItem:sap.tnt.NavigationListItem): sap.tnt.NavigationList;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>itemSelect</code> event of this <code>sap.tnt.NavigationList</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.tnt.NavigationList</code> itself.
		 * 
		 * Fired when an item is selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationList</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachItemSelect(fnFunction:any, oData?:any, oListener?:any): sap.tnt.NavigationList;
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.tnt.NavigationList;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>itemSelect</code> event of this <code>sap.tnt.NavigationList</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachItemSelect(fnFunction:any, oListener:any): sap.tnt.NavigationList;
		/**
		 * Creates a new subclass of class sap.tnt.NavigationList with name <code>sClassName</code>
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
		 * Fires event <code>itemSelect</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>item</code> of type <code>sap.ui.core.Item</code>The selected item.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireItemSelect(mArguments?:any): sap.tnt.NavigationList;
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
		 * Gets current value of property <code>expanded</code>.
		 * 
		 * Specifies if the control is in expanded or collapsed mode.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>expanded</code>
		 */
		 getExpanded(): boolean;
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * The items displayed in the list.
		 * @return 
		 */
		 getItems(): sap.tnt.NavigationListItem[];
		/**
		 * Returns a metadata object for class sap.tnt.NavigationList.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets current value of property <code>width</code>.
		 * 
		 * Specifies the width of the control.
		 * @return Value of property <code>width</code>
		 */
		 getWidth(): sap.ui.core.CSSSize;
		/**
		 * Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.tnt.NavigationListItem): number;
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.tnt.NavigationListItem, iIndex:number): sap.tnt.NavigationList;
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
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.tnt.NavigationListItem[];
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
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.tnt.NavigationListItem): sap.tnt.NavigationListItem;
		/**
		 * Sets a new value for property <code>expanded</code>.
		 * 
		 * Specifies if the control is in expanded or collapsed mode.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bExpanded New value for property <code>expanded</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setExpanded(bExpanded:boolean): sap.tnt.NavigationList;
		/**
		 * Sets a new value for property <code>width</code>.
		 * 
		 * Specifies the width of the control.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * @param sWidth New value for property <code>width</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setWidth(sWidth:sap.ui.core.CSSSize): sap.tnt.NavigationList;
	}
	class NavigationListItem extends sap.ui.core.Item{
		/**
		 * Constructor for a new NavigationListItem.
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
		 addItem(oItem:sap.tnt.NavigationListItem): sap.tnt.NavigationListItem;
		/**
		 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.tnt.NavigationListItem</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.tnt.NavigationListItem</code> itself.
		 * 
		 * Fired when this item is selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationListItem</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachSelect(fnFunction:any, oData?:any, oListener?:any): sap.tnt.NavigationListItem;
		/**
		 * Destroys all the items in the aggregation <code>items</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItems(): sap.tnt.NavigationListItem;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.tnt.NavigationListItem</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachSelect(fnFunction:any, oListener:any): sap.tnt.NavigationListItem;
		/**
		 * Creates a new subclass of class sap.tnt.NavigationListItem with name <code>sClassName</code>
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
		 * Fires event <code>select</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>item</code> of type <code>sap.ui.core.Item</code>The selected item.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireSelect(mArguments?:any): sap.tnt.NavigationListItem;
		/**
		 * Gets current value of property <code>expanded</code>.
		 * 
		 * Specifies if the item is expanded.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>expanded</code>
		 */
		 getExpanded(): boolean;
		/**
		 * Gets current value of property <code>hasExpander</code>.
		 * 
		 * Specifies if the item has an expander.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>hasExpander</code>
		 */
		 getHasExpander(): boolean;
		/**
		 * Gets current value of property <code>icon</code>.
		 * 
		 * Specifies the icon for the item.
		 * 
		 * Default value is <code></code>.
		 * @return Value of property <code>icon</code>
		 */
		 getIcon(): sap.ui.core.URI;
		/**
		 * Gets content of aggregation <code>items</code>.
		 * 
		 * The sub items.
		 * @return 
		 */
		 getItems(): sap.tnt.NavigationListItem[];
		/**
		 * Returns a metadata object for class sap.tnt.NavigationListItem.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation <code>items</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oItem The item whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfItem(oItem:sap.tnt.NavigationListItem): number;
		/**
		 * Inserts a item into the aggregation <code>items</code>.
		 * @param oItem the item to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the item should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the item is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertItem(oItem:sap.tnt.NavigationListItem, iIndex:number): sap.tnt.NavigationListItem;
		/**
		 * Removes all the controls from the aggregation <code>items</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllItems(): sap.tnt.NavigationListItem[];
		/**
		 * Removes a item from the aggregation <code>items</code>.
		 * @param vItem The item to remove or its index or id
		 * @return The removed item or <code>null</code>
		 */
		 removeItem(vItem:number|string|sap.tnt.NavigationListItem): sap.tnt.NavigationListItem;
		/**
		 * Sets a new value for property <code>expanded</code>.
		 * 
		 * Specifies if the item is expanded.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bExpanded New value for property <code>expanded</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setExpanded(bExpanded:boolean): sap.tnt.NavigationListItem;
		/**
		 * Sets a new value for property <code>hasExpander</code>.
		 * 
		 * Specifies if the item has an expander.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code>true</code>.
		 * @param bHasExpander New value for property <code>hasExpander</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHasExpander(bHasExpander:boolean): sap.tnt.NavigationListItem;
		/**
		 * Sets a new value for property <code>icon</code>.
		 * 
		 * Specifies the icon for the item.
		 * 
		 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
		 * 
		 * Default value is <code></code>.
		 * @param sIcon New value for property <code>icon</code>
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setIcon(sIcon:sap.ui.core.URI): sap.tnt.NavigationListItem;
	}
	class SideNavigation extends sap.ui.core.Control{
		/**
		 * Constructor for a new SideNavigation.
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
		 * Attaches event handler <code>fnFunction</code> to the <code>itemSelect</code> event of this <code>sap.tnt.SideNavigation</code>.
		 * 
		 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
		 * otherwise it will be bound to this <code>sap.tnt.SideNavigation</code> itself.
		 * 
		 * Fired when an item is selected.
		 * @param fnFunction The function to be called when the event occurs
		 * @param oData An application-specific payload object that will be passed to the event handler along with the event object when firing the event
		 * @param oListener Context object to call the event handler with. Defaults to this <code>sap.tnt.SideNavigation</code> itself
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 attachItemSelect(fnFunction:any, oData?:any, oListener?:any): sap.tnt.SideNavigation;
		/**
		 * Binds aggregation <code>item</code> to model data.
		 * 
		 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
		 * detailed description of the possible properties of <code>oBindingInfo</code>.
		 * @param oBindingInfo The binding information
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 bindItem(oBindingInfo:any): sap.tnt.SideNavigation;
		/**
		 * Destroys the fixedItem in the aggregation <code>fixedItem</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyFixedItem(): sap.tnt.SideNavigation;
		/**
		 * Destroys the footer in the aggregation <code>footer</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyFooter(): sap.tnt.SideNavigation;
		/**
		 * Destroys the item in the aggregation <code>item</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyItem(): sap.tnt.SideNavigation;
		/**
		 * Detaches event handler <code>fnFunction</code> from the <code>itemSelect</code> event of this <code>sap.tnt.SideNavigation</code>.
		 * 
		 * The passed function and listener object must match the ones used for event registration.
		 * @param fnFunction The function to be called, when the event occurs
		 * @param oListener Context object on which the given function had to be called
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 detachItemSelect(fnFunction:any, oListener:any): sap.tnt.SideNavigation;
		/**
		 * Creates a new subclass of class sap.tnt.SideNavigation with name <code>sClassName</code>
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
		 * Fires event <code>itemSelect</code> to attached listeners.
		 * 
		 * Expects the following event parameters:
		 * <ul>
		 * <li><code>item</code> of type <code>sap.ui.core.Item</code>The selected item.</li>
		 * </ul>
		 * @param mArguments The arguments to pass along with the event
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		protected fireItemSelect(mArguments?:any): sap.tnt.SideNavigation;
		/**
		 * Gets current value of property <code>expanded</code>.
		 * 
		 * Specifies if the control is expanded.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>expanded</code>
		 */
		 getExpanded(): boolean;
		/**
		 * Gets content of aggregation <code>fixedItem</code>.
		 * 
		 * Defines the content inside the fixed part.
		 * @return 
		 */
		 getFixedItem(): sap.tnt.NavigationList;
		/**
		 * Gets content of aggregation <code>footer</code>.
		 * 
		 * Defines the content inside the footer.
		 * @return 
		 */
		 getFooter(): sap.tnt.NavigationList;
		/**
		 * Gets content of aggregation <code>item</code>.
		 * 
		 * Defines the content inside the flexible part.
		 * @return 
		 */
		 getItem(): sap.tnt.NavigationList;
		/**
		 * Returns a metadata object for class sap.tnt.SideNavigation.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Sets the aggregated <code>fixedItem</code>.
		 * @param oFixedItem The fixedItem to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFixedItem(oFixedItem:sap.tnt.NavigationList): sap.tnt.SideNavigation;
		/**
		 * Sets the aggregated <code>footer</code>.
		 * @param oFooter The footer to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setFooter(oFooter:sap.tnt.NavigationList): sap.tnt.SideNavigation;
		/**
		 * Sets the aggregated <code>item</code>.
		 * @param oItem The item to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setItem(oItem:sap.tnt.NavigationList): sap.tnt.SideNavigation;
		/**
		 * Unbinds aggregation <code>item</code> from model data.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 unbindItem(): sap.tnt.SideNavigation;
	}
	class ToolHeader extends sap.m.OverflowToolbar{
		/**
		 * Constructor for a new ToolHeader.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.tnt.ToolHeader with name <code>sClassName</code>
		 * and enriches it with the information contained in <code>oClassInfo</code>.
		 * 
		 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}.
		 * @param sClassName Name of the class being created
		 * @param oClassInfo Object literal with information about the class
		 * @param FNMetaImpl Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
		 * @return Created class / constructor function
		 */
		 extend(sClassName:string, oClassInfo?:any, FNMetaImpl?:any): any;
		/**
		 * Returns a metadata object for class sap.tnt.ToolHeader.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class ToolHeaderUtilitySeparator extends sap.ui.core.Control{
		/**
		 * Constructor for a new ToolHeaderUtilitySeparator.
		 * @param sId ID for the new control, generated automatically if no ID is given
		 * @param mSettings Initial settings for the new control
		 */
		 constructor(sId?:string, mSettings?:any);
		/**
		 * Creates a new subclass of class sap.tnt.ToolHeaderUtilitySeparator with name <code>sClassName</code>
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
		 * Returns a metadata object for class sap.tnt.ToolHeaderUtilitySeparator.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
	}
	class ToolPage extends sap.ui.core.Control{
		/**
		 * Constructor for a new ToolPage.
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
		 * Adds some mainContent to the aggregation <code>mainContents</code>.
		 * @param oMainContent the mainContent to add; if empty, nothing is inserted
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 addMainContent(oMainContent:sap.ui.core.Control): sap.tnt.ToolPage;
		/**
		 * Destroys the header in the aggregation <code>header</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyHeader(): sap.tnt.ToolPage;
		/**
		 * Destroys all the mainContents in the aggregation <code>mainContents</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroyMainContents(): sap.tnt.ToolPage;
		/**
		 * Destroys the sideContent in the aggregation <code>sideContent</code>.
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 destroySideContent(): sap.tnt.ToolPage;
		/**
		 * Creates a new subclass of class sap.tnt.ToolPage with name <code>sClassName</code>
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
		 * Gets content of aggregation <code>header</code>.
		 * 
		 * The control to appear in the header area.
		 * @return 
		 */
		 getHeader(): sap.tnt.ToolHeader;
		/**
		 * Gets content of aggregation <code>mainContents</code>.
		 * 
		 * The content section.
		 * @return 
		 */
		 getMainContents(): sap.ui.core.Control[];
		/**
		 * Returns a metadata object for class sap.tnt.ToolPage.
		 * @return Metadata object describing this class
		 */
		 getMetadata(): sap.ui.base.Metadata;
		/**
		 * Gets content of aggregation <code>sideContent</code>.
		 * 
		 * The side menu of the layout.
		 * @return 
		 */
		 getSideContent(): sap.tnt.SideNavigation;
		/**
		 * Gets current value of property <code>sideExpanded</code>.
		 * 
		 * Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.
		 * 
		 * Default value is <code>true</code>.
		 * @return Value of property <code>sideExpanded</code>
		 */
		 getSideExpanded(): boolean;
		/**
		 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>mainContents</code>.
		 * and returns its index if found or -1 otherwise.
		 * @param oMainContent The mainContent whose index is looked for
		 * @return The index of the provided control in the aggregation if found, or -1 otherwise
		 */
		 indexOfMainContent(oMainContent:sap.ui.core.Control): number;
		/**
		 * Inserts a mainContent into the aggregation <code>mainContents</code>.
		 * @param oMainContent the mainContent to insert; if empty, nothing is inserted
		 * @param iIndex the <code>0</code>-based index the mainContent should be inserted at; for
		 *              a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value
		 *              greater than the current size of the aggregation, the mainContent is inserted at
		 *              the last position
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 insertMainContent(oMainContent:sap.ui.core.Control, iIndex:number): sap.tnt.ToolPage;
		/**
		 * Removes all the controls from the aggregation <code>mainContents</code>.
		 * 
		 * Additionally, it unregisters them from the hosting UIArea.
		 * @return An array of the removed elements (might be empty)
		 */
		 removeAllMainContents(): sap.ui.core.Control[];
		/**
		 * Removes a mainContent from the aggregation <code>mainContents</code>.
		 * @param vMainContent The mainContent to remove or its index or id
		 * @return The removed mainContent or <code>null</code>
		 */
		 removeMainContent(vMainContent:number|string|sap.ui.core.Control): sap.ui.core.Control;
		/**
		 * Sets the aggregated <code>header</code>.
		 * @param oHeader The header to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setHeader(oHeader:sap.tnt.ToolHeader): sap.tnt.ToolPage;
		/**
		 * Sets the aggregated <code>sideContent</code>.
		 * @param oSideContent The sideContent to set
		 * @return Reference to <code>this</code> in order to allow method chaining
		 */
		 setSideContent(oSideContent:sap.tnt.SideNavigation): sap.tnt.ToolPage;
		/**
		 * Sets the expand/collapse state of the SideContent.
		 * @param isSideExpanded defines whether the SideNavigation is expanded.
		 * @return Pointer to the control instance for chaining
		 */
		 setSideExpanded(isSideExpanded:boolean): sap.tnt.ToolPage;
		/**
		 * Toggles the expand/collapse state of the SideContent.
		 * @return Pointer to the control instance for chaining.
		 */
		 toggleSideContentMode(): sap.tnt.ToolPage;
	}
}
