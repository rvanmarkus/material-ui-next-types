import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface DrawerProps {
  /**
   * Side which will the drawer will appear from.
   */
  anchor?: 'left' | 'top' | 'right' | 'bottom',
  /**
   * The contents of the drawer.
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
   * If `true`, the drawer will dock itself
   * and will no longer slide in with an overlay.
   */
  docked?: boolean,
  /**
   * The elevation of the drawer.
   */
  elevation?: number,
  /**
   * Customizes duration of enter animation (ms)
   */
  enterTransitionDuration?: number,
  /**
   * Customizes duration of leave animation (ms)
   */
  leaveTransitionDuration?: number,
  /**
   * Callback fired when the internal modal requests to be closed.
   */
  onRequestClose?: Function,
  /**
   * If `true`, the drawer is open.
   */
  open?: boolean,
  /**
   * The CSS class name of the paper element.
   */
  paperClassName?: string,
}

export default function Drawer(props: DrawerProps, content: any): JSX.Element;

