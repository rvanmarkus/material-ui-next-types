import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;


export interface ChipProps {
  /**
   * Avatar element.
   */
  avatar?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The CSS class name of the delete icon element.
   */
  deleteIconClassName?: string,
  /**
   * The content of the label.
   */
  label?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * The CSS `className` of the label.
   */
  labelClassName?: string,
  /**
   * @ignore
   */
  onClick?: Function,
  /**
   * @ignore
   */
  onKeyDown?: Function,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   * @param {any} event `onClick` event targeting the delete icon element.
   */
  onRequestDelete?: Function,
  /**
   * @ignore
   */
  tabIndex?: number,
}

export default function Chip(props: ChipProps): JSX.Element;
