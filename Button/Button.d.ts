import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface ButtonProps {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent?: boolean,
  /**
   * The content of the button.
   */
  children: number | string | React.ReactElement<any> | Array<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * Uses a smaller minWidth, ideal for things like card actions.
   */
  compact?: boolean,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: string | Function,
  /**
   * If `true`, the button will use the theme's contrast color.
   */
  contrast?: boolean,
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `ripple` must also be true.
   */
  disableFocusRipple?: boolean,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple?: boolean,
  /**
   * If `true`, well use floating action button styling.
   */
  fab?: boolean,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary?: boolean,
  /**
   * If `true`, the button will use raised styling.
   */
  raised?: boolean,
  /**
   * @ignore
   */
  type?: string,
}

export default function Button(props: ButtonProps): JSX.Element;
