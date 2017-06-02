import * as React from 'react';
import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
export const styleSheet: ThemeReactorStyleSheet;

export interface TableProps {
    /**
     * The content of the table, normally `TableHeader` and `TableBody`.
     */
    
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
}

export default class Table extends React.Component<TableProps, {}> {}
