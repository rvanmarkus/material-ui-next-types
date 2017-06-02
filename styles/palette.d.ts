export declare const light: {
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        icon: string;
        divider: string;
        lightDivider: string;
    };
    action: {
        active: string;
        disabled: string;
    };
    background: {
        default: string;
        paper: string;
        appBar: string;
        contentFrame: string;
        status: string;
    };
};
export declare const dark: {
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        icon: string;
        divider: string;
        lightDivider: string;
    };
    action: {
        active: string;
        disabled: string;
    };
    background: {
        default: string;
        paper: string;
        appBar: string;
        contentFrame: string;
        status: string;
    };
};
export default function createPalette(options?: {
    [key: string]: string;
}): {
    type: string;
    text: any;
    action: any;
    background: any;
    primary: string | {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
        contrastDefaultColor: string;
    };
    accent: string | {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
        contrastDefaultColor: string;
    };
    error: string | {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
        contrastDefaultColor: string;
    };
    grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
        contrastDefaultColor: string;
    };
    getContrastText: (color: any) => string;
};
