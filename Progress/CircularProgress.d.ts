import { ThemeReactorStyleSheet } from '../common';
import * as React from 'React';
export const styleSheet: ThemeReactorStyleSheet;

interface CircularProgressProps {
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * The size of the circle.
     */
    size?: number,
    /**
     * The value of progress in determinate mode.
     * @ignore - not yet implemented.
     * TODO: Implement determinate mode.
     */
    value?: number,
}

export default function CircularProgress(props: CircularProgressProps): JSX.Element;
