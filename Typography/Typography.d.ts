import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
export const styleSheet: ThemeReactorStyleSheet;

export type displayTypes =
    | 'display4'
    | 'display3'
    | 'display2'
    | 'display1'
    | 'headline'
    | 'title'
    | 'subheading'
    | 'body2'
    | 'body1'
    | 'caption'
    | 'button';

export interface TypographyProps {
    align?: 'left' | 'center' | 'right' | 'justify',
    
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * If `true`, the text will inherit its color.
     */
    colorInherit?: boolean,
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default we map the type to a good default headline component.
     */
    component?: string | Function,
    /**
     * If `true`, the text will have a bottom margin.
     */
    gutterBottom?: boolean,
    /**
     * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
     */
    noWrap?: boolean,
    /**
     * If `true`, the text will have a bottom margin.
     */
    paragraph?: boolean,
    /**
     * If `true`, the secondary color will be applied.
     */
    secondary?: boolean,
    /**
     * Applies the theme typography styles.
     */
    type?: displayTypes,
}


export type headlineMapping = {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p',
};

export default function Typography(props: TypographyProps): JSX.Element;
