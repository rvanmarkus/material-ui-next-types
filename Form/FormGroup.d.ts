import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface FormGroupProps {
  /**
   * The content of the component.
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
   * Display group of elements in a compact row.
   */
  row?: boolean,
}

export default function FormGroup(props: FormGroupProps): JSX.Element;
