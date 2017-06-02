import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';

export const styleSheet: ThemeReactorStyleSheet;

export interface TableRowProps {
    /**
     * Should be valid `<tr>` children such as `TableCell`.
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
     * If `true`, the table row will shade on hover.
     */
    hover?: boolean,
    /**
     * If `true`, the table row will have the selected shading.
     */
    selected?: boolean,
}

export default function TableRow(props: TableRowProps, content: any): JSX.Element;
