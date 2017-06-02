import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface CardHeaderProps  {
  /**
   * The Avatar  for the Card Header.
   */
  avatar?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The content of the component.
   */
  subheader?: number | string | React.ReactElement<any> | Array<any>,
  /**
   * The content of the Card Title.
   */
  title?: number | string | React.ReactElement<any> | Array<any>,
}

export default function CardHeader(props: CardHeaderProps): JSX.Element;
