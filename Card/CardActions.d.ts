import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface CardActionProps {
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
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing?: boolean,
}

export default function CardActions(props: CardActionProps): JSX.Element;
