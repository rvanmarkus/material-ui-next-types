import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface IconProps {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent?: boolean,
  /**
   * If `true`, the button will use the theme's action.active color.
   */
  action?: boolean,
  /**
   * The name of the icon font ligature.
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
   * If `true`, the button will contrast the theme's primary color.
   */
  contrast?: boolean,
  /**
   * If `true`, the button will use the theme's action.disabled color.
   */
  disabled?: boolean,
  /**
   * If `true`, the text will use the theme's error color.
   */
  error?: boolean,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary?: boolean,
}

export default function Icon(props: IconProps): JSX.Element;
