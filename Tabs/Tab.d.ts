import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
export const styleSheet: ThemeReactorStyleSheet;
import * as React from 'react';

export interface TabProps {
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * If `true`, the tab will be disabled.
     */
    disabled?: boolean,
    /**
     * @ignore
     */
    fullWidth?: boolean,
    /**
     * The icon element. If a string is provided, it will be used as a font ligature.
     */
    icon?: number | string | React.ReactElement<any> | Array<any>,
    /**
     * @ignore
     */
    index?: number,
    /**
     * The label element.
     */
    label?: number | string | React.ReactElement<any> | Array<any>,
    /**
     * The CSS class name of the label element.
     */
    labelClassName?: string,
    /**
     * @ignore
     */
    onChange?: Function,
    /**
     * @ignore
     */
    onClick?: Function,
    /**
     * @ignore
     */
    selected?: boolean,
    /**
     * @ignore
     */
    style?: any,
    /**
     * @ignore
     */
    textColor?: 'accent' | 'inherit' | string,
}

export default class Tab extends React.Component<TabProps, { wrappedText: boolean }> {}
