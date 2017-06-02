import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface DialogProps {
  /**
   * Dialog children, usually the included sub-components.
   */
  children?: React.ReactElement<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * If `true`, it will be full-screen
   */
  fullScreen?: boolean,
  /**
   * If `true`, clicking the backdrop will not fire the `onRequestClose` callback.
   */
  ignoreBackdropClick?: boolean,
  /**
   * If `true`, hitting escape will not fire the `onRequestClose` callback.
   */
  ignoreEscapeKeyUp?: boolean,
  /**
   * Duration of the animation when the element is entering.
   */
  enterTransitionDuration?: number, // eslint-disable-line react/sort-prop-types
  /**
   * Duration of the animation when the element is leaving.
   */
  leaveTransitionDuration?: number,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth?: 'xs' | 'sm' | 'md',
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick?: Function,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter?: Function,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering?: Function,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered?: Function, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp?: Function, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the dialog exits.
   */
  onExit?: Function,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting?: Function,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited?: Function, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired when the dialog requests to be closed.
   */
  onRequestClose?: Function,
  /**
   * If `true`, the Dialog is open.
   */
  open?: boolean,
  /**
   * The CSS class name of the paper inner element.
   */
  paperClassName?: string,
  /**
   * Transition component.
   */
  transition?: Function | React.ReactElement<any>;
}

export default function Dialog(props: DialogProps): JSX.Element;
