import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

interface TableBodyProps {
    /**
     * The content of the table, normally `TableHeader` and `TableBody`.
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

export default class TableBody extends React.Component<TableBodyProps, any> {}
