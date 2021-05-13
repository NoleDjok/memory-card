/// <reference types="pixi.js" />
export declare class MemoryAtlas {
    private readonly Size;
    private readonly _frames;
    private readonly _containerPromises;
    private readonly _baseAtlases;
    private readonly _canvases;
    private readonly _baseTextureAtlases;
    private _current;
    constructor();
    fillContainer(id: number, container: PIXI.Container, textureSources: {
        svgBase64: string;
        offsetX: number;
        offsetY: number;
    }[]): Promise<void>;
    private addSprites;
    private createNewAtlas;
}
