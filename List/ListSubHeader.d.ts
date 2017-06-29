import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;

interface ListSubHeaderProps {
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
     * If `true`, the List Subheader will be indented.
     */
    inset?: boolean,
    /**
     * If `true`, the List Subheader will have the theme primary color.
     */
    primary?: boolean,
}

export default function ListSubHeader(props: ListSubHeaderProps): JSX.Element;
