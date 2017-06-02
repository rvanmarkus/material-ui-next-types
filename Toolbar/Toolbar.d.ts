import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
export const styleSheet: ThemeReactorStyleSheet;

export interface ToolbarProps {
    /**
     * Can be a `ToolbarGroup` to render a group of related items.
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
     * If `true`, disables gutter padding.
     */
    disableGutters?: boolean,
}

export default function Toolbar(props: ToolbarProps): JSX.Element;
