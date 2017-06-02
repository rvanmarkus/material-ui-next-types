import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

interface CheckboxProps {
    checked?: boolean | string;
    checkClassName?: string;
    checkedIcon?: React.ReactNode;
    classes?: any;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    disabledClassName?: string;
    icon?: React.ReactNode;
    name?: string;
    onChange?: Function;
    ripple?: boolean;
    tabIndex?: string;
    value?: string;
}

export default class CheckBox extends React.Component<CheckboxProps, any> {}
export class LabelCheckbox extends React.Component<CheckboxProps, any> {}
export const CheckboxDocs: () => JSX.Element;
