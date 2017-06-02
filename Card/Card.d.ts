import * as React from 'react';
import { ThemeReactorStyleSheet } from '../common';
export const styleSheet: ThemeReactorStyleSheet;

export interface CardProps {
    /**
     * Useful to extend the style applied to components.
     */
    classes?: any,
    /**
     * @ignore
     */
    className?: string,
    /**
     * If `true`, the card will use raised styling.
     */
    raised?: boolean,
}

export default function Card(props: CardProps): JSX.Element;
