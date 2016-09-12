
declare namespace jQuery.sap {
	namespace act {
		/**
		 * Registers the given handler to the activity event, which is fired when an activity was detected after a certain period of inactivity.
		 * 
		 * The Event is not fired for Internet Explorer 8.
		 * @param fnFunction The function to call, when an activity event occurs.
		 * @param oListener The 'this' context of the handler function.
		 */
		function attachActivate(fnFunction:any, oListener?:any);
		/**
		 * Deregisters a previously registered handler from the activity event.
		 * @param fnFunction The function to call, when an activity event occurs.
		 * @param oListener The 'this' context of the handler function.
		 */
		function detachActivate(fnFunction:any, oListener?:any);
		/**
		 * Checks whether recently an activity was detected.
		 * 
		 * Not supported for Internet Explorer 8.
		 * @return true if recently an activity was detected, false otherwise
		 */
		function isActive();
		/**
		 * Reports an activity.
		 */
		function refresh();
	}
	/**
	 * Namespace for the jQuery performance measurement plug-in provided by SAP SE.
	 */
	namespace measure {
		/**
		 * Adds a performance measurement with all data
		 * This is usefull to add external measurements (e.g. from a backend) to the common measurement UI
		 * @param sId ID of the measurement
		 * @param sInfo Info for the measurement
		 * @param iStart start timestamp
		 * @param iEnd end timestamp
		 * @param iTime time in milliseconds
		 * @param iDuration effective time in milliseconds
		 * @param aCategories An optional list of categories for the measure
		 * @return [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration, categories (false if error)
		 */
		function add(sId:string, sInfo:string, iStart:number, iEnd:number, iTime:number, iDuration:number, aCategories?:string|string[]): any;
		/**
		 * Starts an average performance measure.
		 * The duration of this measure is an avarage of durations measured for each call.
		 * Optionally a category or list of categories can be passed to allow filtering of measurements.
		 * @param sId ID of the measurement
		 * @param sInfo Info for the measurement
		 * @param aCategories An optional list of categories for the measure
		 * @return current measurement containing id, info and start-timestamp (false if error)
		 */
		function average(sId:string, sInfo:string, aCategories?:string|string[]): any;
		/**
		 * Clears all performance measurements
		 */
		function clear();
		/**
		 * Ends a performance measure
		 * @param sId ID of the measurement
		 * @return current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
		 */
		function end(sId:string): any;
		/**
		 * Gets the current state of the perfomance measurement functionality
		 * @return current state of the perfomance measurement functionality
		 */
		function getActive(): boolean;
		/**
		 * Gets all performance measurements
		 * @param bCompleted Whether only completed measurements should be returned, if explicitly set to false only incomplete measurements are returned
		 * @return current array with measurements containing id, info and start-timestamp, end-timestamp, time, duration, categories
		 */
		function getAllMeasurements(bCompleted?:boolean): any[];
		/**
		 * Gets a performance measure
		 * @param sId ID of the measurement
		 * @return current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
		 */
		function getMeasurement(sId:string): any;
		/**
		 * Pauses a performance measure
		 * @param sId ID of the measurement
		 * @return current measurement containing id, info and start-timestamp, pause-timestamp (false if error)
		 */
		function pause(sId:string): any;
		/**
		 * Removes a performance measure
		 * @param sId ID of the measurement
		 */
		function remove(sId:string);
		/**
		 * Resumes a performance measure
		 * @param sId ID of the measurement
		 * @return current measurement containing id, info and start-timestamp, resume-timestamp (false if error)
		 */
		function resume(sId:string): any;
		/**
		 * Activates or deactivates the performance measure functionality
		 * Optionally a category or list of categories can be passed to restrict measurements to certain categories
		 * like "javascript", "require", "xmlhttprequest", "render"
		 * @param bOn state of the perfomance measurement functionality to set
		 * @param An optional list of categories that should be measured
		 * @return current state of the perfomance measurement functionality
		 */
		function setActive(bOn:boolean, An:string|string[]): boolean;
		/**
		 * Starts a performance measure.
		 * Optionally a category or list of categories can be passed to allow filtering of measurements.
		 * @param sId ID of the measurement
		 * @param sInfo Info for the measurement
		 * @param aCategories An optional list of categories for the measure
		 * @return current measurement containing id, info and start-timestamp (false if error)
		 */
		function start(sId:string, sInfo:string, aCategories?:string|string[]): any;
	}
	/**
	 * Enumeration of all so called "pseudo events", a useful classification
	 * of standard browser events as implied by SAP product standards.
	 * 
	 * Whenever a browser event is recognized as one or more pseudo events, then this
	 * classification is attached to the original {@link jQuery.Event} object and thereby
	 * delivered to any jQuery-style listeners registered for that browser event.
	 * 
	 * Pure JavaScript listeners can evaluate the classification information using
	 * the {@link jQuery.Event#isPseudoType} method.
	 * 
	 * Instead of using the procedure as described above, the SAPUI5 controls and elements
	 * should simply implement an <code>on<i>pseudo-event</i>(oEvent)</code> method. It will
	 * be invoked only when that specific pseudo event has been recognized. This simplifies event
	 * dispatching even further.
	 */
	type PseudoEvents = any
}

declare namespace jQuery.sap.history {
	type NavType = any
}

declare namespace jQuery.sap.log {
	/**
	 * Enumeration of the configurable log levels that a Logger should persist to the log.
	 * 
	 * Only if the current LogLevel is higher than the level {@link jQuery.sap.log.Level} of the currently added log entry,
	 * then this very entry is permanently added to the log. Otherwise it is ignored.
	 */
	type Level = any
}
