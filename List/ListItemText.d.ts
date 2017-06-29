import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

export interface ListItemTextProps {
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * If `true`, the children will be indented.
     * This should be used if there is no left avatar or left icon.
     */
    inset?: boolean,
    primary?: number | string | React.ReactElement<any> | Array<any>,
    secondary?: number | string | React.ReactElement<any> | Array<any>,
}

export default function ListItemText(props: ListItemTextProps, context: any): JSX.Element;
