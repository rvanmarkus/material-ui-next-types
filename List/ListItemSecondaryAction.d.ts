import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;


export interface ListItemSecondaryActionProps {
  /**
   * The content of the component, normally an `IconButton` or selection control.
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
}

export default function ListItemSecondaryAction(props: ListItemSecondaryActionProps): JSX.Element;
