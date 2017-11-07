export interface IInputState { 
 /**
   * If true, component will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Specifies the maximum number of characters allowed in the component
   */
  maxLength?: number;
  /**
   * Name for the input field.
   */
  name?: string;
    /**
   * Type of the input element. It can be a valid HTML5 input type.
   * @default "text"
   */
  type?: string;
  /**
   * Current value of the input element.
   */
  value?: any;
  /*
 Readonly value of the input element.
  */
  readonly?: boolean;
  /*
Checked value of the input element.
  */
  checked?: boolean;
  /*
  Size value of the input element.
  */
  size?: number;
  /**
   * Callback function that is fired when component is blurred.
   */
  onblur?: Function;
  /**
   * Callback function that is fired when component is focused.
   */
  onfocus?: Function;
  /**
   * Callback function that is fired when a key is pressed down.
   */
  onkeydown?: Function;
  /**
   * Callback function that is fired when a key is released.
   */
  onkeyup?: Function;
  /**
   * Callback function that is fired when a key is pressed.
   */
  onkeypress?: Function;
    /**
   * Callback function that is fired when a click is pressed.
   */
  onclick?: Function;
    /**
   * Callback function that is fired when the component's value changes
   */
  onchange?: Function;
  /**
   * If true, the html input has a required attribute.
   * @default false
   */
  required?: boolean;

}