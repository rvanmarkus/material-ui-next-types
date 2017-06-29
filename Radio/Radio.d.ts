import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;

interface RadioProps {
    checked: boolean | string,
    checkedClassName: string,
    /**
     * The icon to display when selected.
     */
    checkedIcon: React.ReactNode
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className: string,
    /**
     * @ignore
     */
    defaultChecked: boolean,
    /**
     * If `true`, the component disabled.
     */
    disabled: boolean,
    /**
     * The CSS class name of the root element when disabled.
     */
    disabledClassName: string,
    /**
     * The icon to display when the component is unselected.
     */
    icon: React.ReactNode,
    /*
     * @ignore
     */
    name: string,
    /**
     * Callback fired when the state is changed.
     *
     * @param {any} event `change` event
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: Function,
    /**
     * If `false`, the ripple effect will be disabled.
     */
    ripple: boolean,
    /**
     * @ignore
     */
    tabIndex: string,
    /**
     * The value of the component.
     */
    value: string,
}


export default function Radio(props: RadioProps): JSX.Element;
export function LabelRadio(props: RadioProps): JSX.Element;
export const RadioDocs: () => JSX.Element;
