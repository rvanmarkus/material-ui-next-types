import { ThemeReactorStyleSheet } from 'jss-theme-reactor/types';

export const styleSheet: ThemeReactorStyleSheet;

export interface TableSortLabelProps {
    /**
     * If `true`, the label will have the active styling (should be true for the sorted column).
     */
    active?: boolean,
    /**
     * Label contents, the arrow will be appended automatically.
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
     * The current sort direction.
     */
    direction?: 'asc' | 'desc',
}

export default function TableSortLabel(props: TableSortLabelProps): JSX.Element;
