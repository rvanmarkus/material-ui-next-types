export declare type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare const keys: string[];
export default function createBreakpoints(breakpoints?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}, unit?: string, step?: number): {
    keys: string[];
    values: any[];
    up: (name: any) => string;
    down: (name: any) => string;
    between: (start: any, end: any) => string;
    only: (name: any) => string;
    getWidth: (name: any) => any;
};
