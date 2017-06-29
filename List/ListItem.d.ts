import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

export interface ListItemProps {
  /**
   * If `true`, the ListItem will be a button.
   */
  button?: boolean,
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: string | Function,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense?: boolean,
  /**
   * @ignore
   */
  disabled?: boolean,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters?: boolean,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider?: boolean,
}

export default class ListItem extends React.Component<ListItemProps, {}> {} 
