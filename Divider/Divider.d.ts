import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface DividerProps {
  absolute?: boolean,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * If `true`, the divider will be indented.
   */
  inset?: boolean,
  /**
   * If `true`, the divider will have a lighter color.
   */
  light?: boolean,
}

export default function Divider(props: DividerProps): JSX.Element;
