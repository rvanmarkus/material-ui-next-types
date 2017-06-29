interface Options { 
    breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function withResponsiveFullScreen(options: Options): React.ReactElement<any>;