export interface IOptionState { 
 /**
   * If true, component will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Label for the option element.
   */
  label?: string;
  /** 
  * If true, the option element is selected.
  * @default false
  */
  selected?: boolean;
  /**
   * Value for the option element.
   */
  value?: string;


}