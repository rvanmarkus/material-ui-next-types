export declare const easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
};
export declare const duration: {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
};
declare const _default: {
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
export default _default;
