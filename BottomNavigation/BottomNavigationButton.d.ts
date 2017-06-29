import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface BottomNavigationButtonProps  {
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The icon element. If a string is provided, it will be used as a font ligature.
   */
  icon?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * @ignore
   */
  index?: number,
  /**
   * The label element.
   */
  label?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * @ignore
   */
  onChange?: Function,
  /**
   * @ignore
   */
  onClick?: Function,
  /**
   * @ignore
   */
  selected?: boolean,
  /**
   * If `true`, the BottomNavigationButton will show its label.
   */
  showLabel?: boolean,
}

export default function BottomNavigationButton(props: BottomNavigationButtonProps): JSX.Element;
