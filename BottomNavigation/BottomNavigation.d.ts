import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface BottomNavigationProps {
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
   * The index of the currently selected `BottomNavigationButton`.
   */
  index?: number,
  /**
   * Function called when the index changes.
   */
  onChange?: Function,
  /**
   * If `true`, all `BottomNavigationButton`s will show their labels.
   * By default only the selected `BottomNavigationButton` will show its label.
   */
  showLabels?: boolean,
}

export default function BottomNavigation(props: BottomNavigationProps): JSX.Element
