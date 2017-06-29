import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

interface LinearProgressProps {
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * The mode of show your progress, indeterminate
     * for when there is no value for progress.
     */
    mode?: 'determinate' | 'indeterminate' | 'buffer' | 'query',
    /**
     * The value of progress, only works in determinate and buffer mode.
     * Value between 0 and 100.
     */
    value?: number,
    /**
     * The value of buffer, only works in buffer mode.
     * Value between 0 and 100.
     */
    valueBuffer?: number,
}

export default function LinearProgress(props: LinearProgressProps): JSX.Element;
