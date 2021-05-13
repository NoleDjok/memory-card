/// <reference types="pixi.js" />
import { TextureAtlasData, TextureData } from "../model/TextureAtlasData";
export declare class PixiTextureAtlasData extends TextureAtlasData {
    static toString(): string;
    private _renderTexture;
    protected _onClear(): void;
    createTexture(): TextureData;
    get renderTexture(): PIXI.BaseTexture | null;
    set renderTexture(value: PIXI.BaseTexture | null);
}
export declare class PixiTextureData extends TextureData {
    static toString(): string;
    renderTexture: PIXI.Texture | null;
    protected _onClear(): void;
}
