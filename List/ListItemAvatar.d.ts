import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;

export interface ListItemAvatarProps  {
  /**
   * The content of the component, normally `Avatar`.
   */
  children: React.ReactElement<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
}

export default function ListItemAvatar(props: ListItemAvatarProps, context: any): JSX.Element;
