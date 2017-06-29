import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

interface MenuListProps {
    /**
     * Menu item contents.
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
     * @ignore
     */
    role?: string,
    /**
     * Use to apply selected styling.
     */
    selected?: boolean,
}


export default function MenuList(props: MenuListProps): JSX.Element;
