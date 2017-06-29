import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;

export interface InputProps {
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * The CSS class name of the wrapper element.
   */
  className?: string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * It's an `input` by default.
   */
  component?: string | Function,
  /**
   * The default value of the `Input` element.
   */
  defaultValue?: string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled?: boolean,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline?: boolean,
  /**
   * If `true`, the input will indicate an error.
   */
  error?: boolean,
  /*
   * @ignore
   */
  id?: string,
  /**
   * The CSS class name of the input element.
   */
  inputClassName?: string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps?: any,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef?: Function,
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline?: boolean,
  /**
   * @ignore
   */
  name?: string,
  /**
   * @ignore
   */
  onBlur?: Function,
  /**
   * @ignore
   */
  onChange?: Function,
  /**
   * @ignore
   */
  onClean?: Function,
  /**
   * @ignore
   */
  onDirty?: Function,
  /**
   * @ignore
   */
  onFocus?: Function,
  /**
   * @ignore
   */
  onKeyDown?: Function,
  /**
   * @ignore
   */
  onKeyUp?: Function,
  /**
   * @ignore
   */
  placeholder?: string,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number,
  /**
   * Maxium number of rows to display when multiline option is set to true.
   */
  rowsMax?: string | number,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type?: string,
  /**
   * The input value, required for a controlled component.
   */
  value?: string | number,
}

export default class Input extends React.Component<InputProps, { focued: boolean }> {}
 