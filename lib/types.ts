// @ts-ignore
import * as CSS from 'csstype';

export interface CSSProperties extends CSS.Properties<string | number> {
}

export interface HTMLAttributes {
    [key:string]:any;
    // Standard HTML Attributes
    className?: string;
    hidden?: boolean;
    id?: string;
    lang?: string;
    style?: CSSProperties;
}