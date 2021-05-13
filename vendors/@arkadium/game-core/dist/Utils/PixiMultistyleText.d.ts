/// <reference types="pixi.js" />
export interface ExtendedTextStyle extends PIXI.TextStyleOptions {
    valign?: "top" | "middle" | "bottom" | "baseline" | number;
    debug?: boolean;
    width?: number;
}
export interface TextStyleSet {
    [key: string]: ExtendedTextStyle;
}
export interface FontProperties {
    ascent: number;
    descent: number;
    fontSize: number;
}
export interface TextData {
    text: string;
    style: ExtendedTextStyle;
    width: number;
    height: number;
    fontProperties: FontProperties;
    tagName: string;
}
export interface TextDrawingData {
    text: string;
    style: ExtendedTextStyle;
    x: number;
    y: number;
    width: number;
    ascent: number;
    descent: number;
    tagName: string;
}
export interface MstDebugOptions {
    spans: {
        enabled?: boolean;
        baseline?: string;
        top?: string;
        bottom?: string;
        bounding?: string;
        text?: boolean;
    };
    objects: {
        enabled?: boolean;
        bounding?: string;
        text?: boolean;
    };
}
export declare class MultiStyleText extends PIXI.Text {
    private static DEFAULT_TAG_STYLE;
    static debugOptions: MstDebugOptions;
    textStyles: TextStyleSet;
    constructor(text: string, styles: TextStyleSet);
    set styles(styles: TextStyleSet);
    setTagStyle(tag: string, style: ExtendedTextStyle): void;
    deleteTagStyle(tag: string): void;
    private _getTextDataPerLine;
    private getFontString;
    private createTextData;
    private getDropShadowPadding;
    updateText(): void;
    protected wordWrap(text: string): string;
    protected updateTexture(): void;
    private assign;
}
