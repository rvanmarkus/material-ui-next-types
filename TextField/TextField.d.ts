export interface TextFieldProps {
    /**
     * @ignore
     */
    className?: string,
    /**
     * The default value of the `Input` element.
     */
    defaultValue?: string,
    /**
     * If `true`, the input will be disabled.
     */
    disabled?: boolean,
    /**
     * If `true`, the label will be displayed in an error state.
     */
    error?: boolean,
    /*
     * @ignore
     */
    id?: string,
    /**
     * The CSS class name of the `input` element.
     */
    inputClassName?: string,
    /**
     * The CSS class name of the `Input` element.
     */
    InputClassName?: string,
    /**
     * Properties applied to the `input` element.
     */
    inputProps?: any,
    /**
     * Properties applied to the `Input` element.
     */
    InputProps?: any,
    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef?: Function,
    /**
     * The label content.
     */
    label?: number | string | React.ReactElement<any> | Array<any>,
    /**
     * The CSS class name of the label element.
     */
    labelClassName?: string,
    /**
     * If `true`, a textarea element will be rendered instead of an input.
     */
    multiline?: boolean,
    /**
     * Name attribute of the `Input` element.
     */
    name?: string,
    /**
     * If `true`, the label is displayed as required.
     */
    required?: boolean,
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: string | number,
    /**
     * Maxium number of rows to display when multiline option is set to true.
     */
    rowsMax?: string | number,
    /**
     * Type attribute of the `Input` element. It should be a valid HTML5 input type.
     */
    type?: string,
    /**
     * The value of the `Input` element, required for a controlled component.
     */
    value?: string | number,
    /**
      * @ignore
      */
    onBlur?: Function,
    /**
     * @ignore
     */
    onChange?: Function,
    /**
     * @ignore
     */
    onClean?: Function,
    /**
     * @ignore
     */
    onDirty?: Function,
    /**
     * @ignore
     */
    onFocus?: Function,
    /**
     * @ignore
     */
    onKeyDown?: Function,
    /**
     * @ignore
     */
    onKeyUp?: Function,
    /**
     * @ignore
     */
}

export default function TextField(props: TextFieldProps): JSX.Element;