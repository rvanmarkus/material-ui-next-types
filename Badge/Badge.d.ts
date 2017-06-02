import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface BadgeProps {
      /**
   * If `true`, the badge will use the accent badge colors.
   */
  accent?: boolean,
  /**
   * The CSS class name of the badge element.
   */
  badgeClassName?: string,
  /**
   * The content rendered within the badge.
   */
  badgeContent: number | string | React.ReactElement<any> | Array<any>,
  /**
   * The badge will be added relative to this node.
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
   * If `true`, the badge will use the primary badge colors.
   */
  primary?: boolean,
}

export default function Badge(props: BadgeProps): JSX.Element;
