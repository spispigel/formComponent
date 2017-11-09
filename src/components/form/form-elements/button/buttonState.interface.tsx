export interface IButtonState { 
 /**
   * If true, component will be disabled.
   * @default false
   */
  disabled?: boolean;
    /**
   * Specifies one or more forms the button belongs to
   */
  form?: string;
  /**
   * Name for the button element.
   */
  name?: string;
  /** 
  * Type for the button element.
  */
  type?: string;
  /**
   * Value for the button element.
   */
  value?: string;


}