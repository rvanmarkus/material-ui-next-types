import * as React from 'react';
import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';


declare class Styles extends React.Component<{ classes?: any, innerRef: Function}, any> {}

declare const withStyles:  
     (stylesheet: ThemeReactorStyleSheet) => 
     <T>(baseComponenet: T) => 
     T;

export default withStyles;
