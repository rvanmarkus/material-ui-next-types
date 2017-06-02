import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';

export const styleSheet: ThemeReactorStyleSheet;

interface SwitchProps {
    /**
     * If `true`, the component appears selected.
     */
    checked?: boolean | string,
    /**
     * The CSS class name of the root element when checked.
     */
    checkedClassName?: string,
    /**
     * The icon to display when the component is checked.
     */
    checkedIcon?: number | string | React.ReactElement<any> | Array<any>,
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * @ignore
     */
    defaultChecked?: boolean,
    /**
     * If `true`, the switch will be disabled.
     */
    disabled?: boolean,
    /**
     * The CSS class name of the root element when disabled.
     */
    disabledClassName?: string,
    /**
     * The icon to display when the component is unchecked.
     */
    icon?: number | string | React.ReactElement<any> | Array<any>,
    /*
     * @ignore
     */
    name?: string,
    /**
     * Callback fired when the  is changed.
     *
     * @param {any} event `change` event
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange?: Function,
    /**
     * If `false`, the ripple effect will be disabled.
     */
    ripple?: boolean,
    /**
     * @ignore
     */
    tabIndex?: string,
    /**
     * The value of the component.
     */
    value?: string,
}


export default function Switch(props: SwitchProps): JSX.Element;
