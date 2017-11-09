export interface ITextareaState { 
  /**
   * Number of characters for line.
   */
  cols?: number;
 /**
   * If true, component will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Specifies one or more forms the label belongs to.
   */
  form?: string;  
    /**
   * Specifies the maximum number of characters allowed in the component.
   */
  maxlength?: number;
  /**
   * Name for the textarea field.
   */
  name?: string;
    /*
 Readonly value of the textarea element.
  */
  readonly?: boolean;
    /**
   * If true, the html textarea has a required attribute.
   * @default false
   */
  required?: boolean;
    /**
   * Number of total lines.
   */
  rows?: number;

}