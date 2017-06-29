import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
import * as React from 'react';

export const styleSheet: ThemeReactorStyleSheet;

interface TabsProps {
    /**
     * The CSS class name of the scroll button elements.
     */
    buttonClassName?: string,
    /**
     * If `true`, the tabs will be centered.
     * This property is intended for large views.
     */
    centered?: boolean,
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
     * If `true`, the tabs will grow to use all the available space.
     * This property is intended for small views.
     */
    fullWidth?: boolean,
    /**
     * The index of the currently selected `Tab`.
     */
    index: number,
    /**
     * The CSS class name of the indicator element.
     */
    indicatorClassName?: string,
    /**
     * Determines the color of the indicator.
     */
    indicatorColor?: 'accent' | string,
    /**
     * Function called when the index change.
     */
    onChange: Function,
    /**
     * True invokes scrolling properties and allow for horizontally scrolling
     * (or swiping) the tab bar.
     */
    scrollable?: boolean,
    /**
     * Determine behavior of scroll buttons when tabs are set to scroll
     * `auto` will only present them on medium and larger viewports
     * `on` will always present them
     * `off` will never present them
     */
    scrollButtons?: 'auto' | 'on' | 'off',
    /**
     * Determines the color of the `Tab`.
     */
    textColor?: 'accent' | 'inherit' | string,
    /**
     * @ignore
     * width prop provided by withWidth decorator
     */
    width?: string,
}

interface TabsState {
    indicatorStyle: { [key: string]: any },
    scrollerStyle: {
        marginBottom: number,
    },
    showLeftScroll: boolean,
    showRightScroll: boolean,
}

export default class Tabs extends React.Component<TabsProps, TabsState> {}
