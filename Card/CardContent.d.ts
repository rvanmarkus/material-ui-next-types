import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface CardContentProps {
  /**
   * Useful to extend the style applied to components.
   */
  classes?: { [key: string]: any},
  /**
   * @ignore
   */
  className?: string,
}

export default function CardContent(props: CardContentProps): JSX.Element;
