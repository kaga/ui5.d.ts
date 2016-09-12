
declare namespace sap.uxap {
	/**
	 * Used by the BlockBase control to define how many columns should it be assigned by the objectPageSubSection.
	 *     The allowed values can be auto (subsection assigned a number of columns based on the parent objectPageLayout subsectionLayout property), 1, 2 or 3
	 *     (This may not be a valid value for some subSectionLayout, for example asking for 3 columns in a 2 column layout would raise warnings).
	 */
	type BlockBaseColumnLayout = any
	/**
	 * Used by the BlockBase control to define if it should do automatic adjustment of its nested forms.
	 */
	type BlockBaseFormAdjustment = 
	/**
	 * Used by the BlockBase control to define if it should do automatic adjustment of its nested forms.
	 */
	"BlockColumns" |
	/**
	 * Used by the BlockBase control to define if it should do automatic adjustment of its nested forms.
	 */
	"None" |
	/**
	 * Used by the BlockBase control to define if it should do automatic adjustment of its nested forms.
	 */
	"OneColumn";
	/**
	 * Used by the sap.uxap.component.Component how to initialize the ObjectPageLayout sections and subsections.
	 */
	type ObjectPageConfigurationMode = 
	/**
	 * Used by the sap.uxap.component.Component how to initialize the ObjectPageLayout sections and subsections.
	 */
	"JsonModel" |
	/**
	 * Used by the sap.uxap.component.Component how to initialize the ObjectPageLayout sections and subsections.
	 */
	"JsonURL";
	/**
	 * Used by the ObjectPageHeader control to define which design to use.
	 */
	type ObjectPageHeaderDesign = 
	/**
	 * Used by the ObjectPageHeader control to define which design to use.
	 */
	"Dark" |
	/**
	 * Used by the ObjectPageHeader control to define which design to use.
	 */
	"Light";
	/**
	 * Used by the ObjectPageHeader control to define which shape to use for the image.
	 */
	type ObjectPageHeaderPictureShape = 
	/**
	 * Used by the ObjectPageHeader control to define which shape to use for the image.
	 */
	"Circle" |
	/**
	 * Used by the ObjectPageHeader control to define which shape to use for the image.
	 */
	"Square";
	/**
	 * Used by the ObjectPagSubSection control to define which layout to apply.
	 */
	type ObjectPageSubSectionLayout = 
	/**
	 * Used by the ObjectPagSubSection control to define which layout to apply.
	 */
	"TitleOnLeft" |
	/**
	 * Used by the ObjectPagSubSection control to define which layout to apply.
	 */
	"TitleOnTop";
	/**
	 * Used by the ObjectPageLayout control to define which layout to use (either Collapsed or Expanded).
	 */
	type ObjectPageSubSectionMode = 
	/**
	 * Used by the ObjectPageLayout control to define which layout to use (either Collapsed or Expanded).
	 */
	"Collapsed" |
	/**
	 * Used by the ObjectPageLayout control to define which layout to use (either Collapsed or Expanded).
	 */
	"Expanded";
}
