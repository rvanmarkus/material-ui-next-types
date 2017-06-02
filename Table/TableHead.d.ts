import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
import * as React from 'react';

export const styleSheet: ThemeReactorStyleSheet;

export interface TableHeadProps {
  /**
   * Should be valid `<thead>` children such as `TableRow`.
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
}

export default class TableHead extends React.Component<TableHeadProps, any> {}
