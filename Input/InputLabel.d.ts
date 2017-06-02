import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;

export interface InputLabelProps {
  /**
   * The contents of the `InputLabel`.
   */
  
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation?: boolean,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean,
  /**
   * If `true`, the input of this label is focused.
   */
  focused?: boolean,
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required?: boolean,
  /**
   * If `true`, the label is shrunk.
   */
  shrink?: boolean,
}

export default function InputLabel(props: InputLabelProps, context: any): JSX.Element;
