export interface IFieldsetState { 
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
   * Name for the fielset field.
   */
  name?: string;
      /**
   * Legend for the fielset field.
   */
  legend?: string;

}