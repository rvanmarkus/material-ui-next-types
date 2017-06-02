import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface DialogTitleProps  {
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
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be usefull to can render an h4 instead of a
   */
  disableTypography?: boolean,
}

export default function DialogTitle(props: DialogTitleProps): JSX.Element;
