export interface ISelectState { 
 /**
   * If true, component will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Name for the select field.
   */
  name?: string;
  /*
  Size value of the select element.
  */
  size?: number;
  /**
   * If true, the html select has a required attribute.
   * @default false
   */
  required?: boolean;
  /**
   * If true, the select element allow multiple selection.
   */
  multiple?: boolean;


}