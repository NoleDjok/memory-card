import { Rectangle } from "../geom/Rectangle";
import { BaseObject } from "../core/BaseObject";
import { dbMap } from "../core/DragonBones";
export declare abstract class TextureAtlasData extends BaseObject {
    autoSearch: boolean;
    width: number;
    height: number;
    scale: number;
    name: string;
    imagePath: string;
    readonly textures: dbMap<TextureData>;
    protected _onClear(): void;
    copyFrom(value: TextureAtlasData): void;
    abstract createTexture(): TextureData;
    addTexture(value: TextureData): void;
    getTexture(textureName: string): TextureData | null;
}
export declare abstract class TextureData extends BaseObject {
    static createRectangle(): Rectangle;
    rotated: boolean;
    name: string;
    readonly region: Rectangle;
    parent: TextureAtlasData;
    frame: Rectangle | null;
    protected _onClear(): void;
    copyFrom(value: TextureData): void;
}
