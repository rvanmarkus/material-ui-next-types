export default function createTypography(palette: any, constants?: {
    [key: string]: number | string;
}): {
    fontFamily: string | number;
    fontSize: string | number;
    fontWeightLight: string | number;
    fontWeightRegular: string | number;
    fontWeightMedium: string | number;
    display4: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        letterSpacing: string;
        lineHeight: number;
        color: any;
    };
    display3: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        letterSpacing: string;
        lineHeight: number;
        color: any;
    };
    display2: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: string;
        color: any;
    };
    display1: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: string;
        color: any;
    };
    headline: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: string;
        color: any;
    };
    title: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: number;
        color: any;
    };
    subheading: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: string;
        color: any;
    };
    body2: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: string;
        color: any;
    };
    body1: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: string;
        color: any;
    };
    caption: {
        fontSize: number;
        fontWeight: string | number;
        fontFamily: string | number;
        lineHeight: number;
        color: any;
    };
    button: {
        textTransform: string;
        fontWeight: string | number;
    };
};
