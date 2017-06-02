import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface IconButtonProps  {
  /**
   * If `true`, will use the theme's accent color.
   */
  accent?: boolean,
  /**
   * @ignore
   */
  buttonRef?: Function,
  /**
   * The icon element.
   * If a string is provided, it will be used as an icon font ligature.
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
   * If `true`, the icon button will use the theme's contrast color.
   */
  contrast?: boolean,
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple?: boolean,
  /**
   * The CSS class name of the icon element if child is a string.
   */
  iconClassName?: string,
}

export default function IconButton(props: IconButtonProps): JSX.Element;
