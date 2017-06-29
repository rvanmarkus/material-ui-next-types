import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface AppBarProps {
  /**
   * If `true`, the AppBar will use the theme's accent color.
   */
  accent?: boolean,
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
}

export default function AppBar(props: AppBarProps): JSX.Element;
