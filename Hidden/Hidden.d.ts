import { HiddenProps } from './types';
export interface HiddenComponentProps extends HiddenProps {
    implementation?: 'js' | 'css';
}

export default function Hidden(props: HiddenComponentProps): JSX.Element;
