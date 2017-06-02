import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface FormLabelProps {
  /**
   * The content of the component.
   */
  children?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error?: boolean,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused?: boolean,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required?: boolean,
}

export default function FormLabel(props: FormLabelProps, context: any): JSX.Element;
