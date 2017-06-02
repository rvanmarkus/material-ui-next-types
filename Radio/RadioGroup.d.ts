import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
import * as React from 'react'
export const styleSheet: ThemeReactorStyleSheet;

export interface RadioGroupProps {
    /**
     * The content of the component.
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
    /**
     * The name used to reference the value of the control.
     */
    name?: string,
    /**
     * @ignore
     */
    onBlur?: Function,
    /**
     * Callback fired when a radio button is selected.
     *
     * @param {object} event `change` event
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange?: Function,
    /**
     * @ignore
     */
    onKeyDown?: Function,
}

export default class RadioGroup extends React.Component<RadioGroup, any> {}

