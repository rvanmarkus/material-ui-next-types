import { HiddenProps } from './types';

interface HiddenJSProps extends HiddenProps {
    width: string;
}

export default function HiddenJs(props: HiddenJSProps): JSX.Element | null;
