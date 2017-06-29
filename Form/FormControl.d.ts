import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface FormControlProps {
  /**
   * The contents of the form control.
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
   * If `true`, the label should be displayed in an error state.
   */
  error?: boolean,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required?: boolean,
}

export default class FormControl extends React.Component<FormControlProps, { dirty: boolean, focused: boolean }> {}
