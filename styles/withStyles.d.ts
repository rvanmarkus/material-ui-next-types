import * as React from 'react';
import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';


declare class Styles extends React.Component<{ classes?: any, innerRef: Function}, any> {}

declare const withStyles:  
     (stylesheet: ThemeReactorStyleSheet) => 
     (baseComponenet: React.Component<any, any>) => 
     Styles;

export default withStyles;
