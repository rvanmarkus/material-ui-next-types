import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
export const styleSheet: ThemeReactorStyleSheet;

export interface TextFieldLabelProps {
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
     * If `true`, the transition animation is disabled.
     */
    disableAnimation?: boolean,
    /**
     * If `true`, the label is displayed in an error state.
     */
    error?: boolean,
    /**
     * If `true`, the input of this label is focused.
     */
    focused?: boolean,
    /**
     * If `true`, the label will indicate that the input is required.
     */
    required?: boolean,
    /**
     * If `true`, the label is shrunk.
     */
    shrink?: boolean,
}

export default function TextFieldLabel(props: TextFieldLabelProps): JSX.Element;
