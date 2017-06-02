import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface AvatarProps {
      /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt?: string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children?: number | string | React.ReactChild | Array<any>,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName?: string,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: string | Function,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes?: string,
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet?: string,
}

export default function Avatar(props: AvatarProps): JSX.Element;
