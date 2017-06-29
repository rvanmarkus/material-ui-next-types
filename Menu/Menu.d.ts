import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

interface MenuProps {
    /**
     * The DOM element used to set the position of the menu.
     */
    anchorEl?: any,
    /**
     * Menu contents, normally `MenuItem`s.
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
     * Properties applied to the `MenuList` element.
     */
    MenuListProps?: any,
    /**
     * Callback fired before the Menu enters.
     */
    onEnter?: Function,
    /**
     * Callback fired when the Menu is entering.
     */
    onEntering?: Function,
    /**
     * Callback fired when the Menu has entered.
     */
    // eslint-disable-line react/sort-prop-types
    onEntered?: Function,
    /**
     * Callback fired before the Menu exits.
     */
    onExit?: Function,
    /**
     * Callback fired when the Menu is exiting.
     */
    onExiting?: Function,
    /**
     * Callback fired when the Menu has exited.
     */
    // eslint-disable-line react/sort-prop-types
    onExited?: Function,
    /**
     * Callback function fired when the menu is requested to be closed.
     *
     * @param {event} event The event that triggered the close request
     */
    onRequestClose?: Function,
    /**
     * If `true`, the menu is visible.
     */
    open?: boolean,
    /**
     * The length of the transition in `ms`, or 'auto'
     */
    transitionDuration?: number | string,
}

export default class Menu extends React.Component<MenuProps, any> {}
