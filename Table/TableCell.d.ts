import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';
export const styleSheet: ThemeReactorStyleSheet;

export interface TableCellProps {
    /**
     * If `true`, the cell padding will be adjusted to accommodate a checkbox.
     */
    checkbox?: boolean,
    /**
     * The table cell contents.
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
     * If `true`, compact cell padding will be used to accommodate more content.
     */
    compact?: boolean,
    /**
     * If `true`, left/right cell padding will be disabled.
     */
    disablePadding?: boolean,
    /**
     * If `true`, content will align to the right.
     */
    numeric?: boolean,
}

export default function TableCell(props: TableCellProps, content: any): JSX.Element;
