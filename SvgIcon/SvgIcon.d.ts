import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';

export const styleSheet: ThemeReactorStyleSheet;

export interface SvgIconProps {
    /**
     * Elements passed into the SVG Icon.
     */
    
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    titleAccess?: string,
    /**
     * Allows you to redefine what the coordinates without units mean inside an svg element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the svg will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     */
    viewBox?: string,
}

export default function SvgIcon(props: SvgIconProps): JSX.Element;
