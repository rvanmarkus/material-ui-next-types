declare function createMuiTheme(options?: {
    palette?: any;
    breakpoints?: any;
    mixins?: any;
    typography?: any;
}): {
    direction: string;
    palette: any;
    typography: any;
    shadows: string[];
    transitions: {
        easing: {
            easeInOut: string;
            easeOut: string;
            easeIn: string;
            sharp: string;
        };
        duration: {
            shortest: number;
            shorter: number;
            short: number;
            standard: number;
            complex: number;
            enteringScreen: number;
            leavingScreen: number;
        };
        create(props?: string[], options?: {
            duration?: string;
            easing?: string;
            delay?: number;
        }): string;
        getAutoHeightDuration(height: any): number;
    };
    mixins: any;
    spacing: {
        unit: number;
    };
    breakpoints: any;
    zIndex: {
        menu: number;
        appBar: number;
        drawerOverlay: number;
        navDrawer: number;
        dialogOverlay: number;
        dialog: number;
        layer: number;
        popover: number;
        snackbar: number;
        tooltip: number;
    };
};
export default createMuiTheme;
