import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

interface MuiThemeProps {
    children: JSX.Element | any | any[];
    styleManager?: any,
    theme?: any,
}


export default function MuiTheme(props: MuiThemeProps): JSX.Element;
