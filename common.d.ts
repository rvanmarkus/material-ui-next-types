export interface ThemeReactorStyleSheet {
    name: string;
    options: any;
    createRules: (styles: any) => any;
}