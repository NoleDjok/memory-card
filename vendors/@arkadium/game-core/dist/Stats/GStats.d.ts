/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
export declare class TextureHook {
    createdTextures: Array<any>;
    maxTexturesCount: number;
    isInit: boolean;
    private realGLCreateTexture;
    private realGLDeleteTexture;
    private gl;
    constructor(_gl?: any);
    get currentTextureCount(): number;
    registerTexture(texture: any): void;
    private fakeGLCreateTexture;
    private fakeGLDeleteTexture;
    reset(): void;
    release(): void;
}
export declare class GLHook {
    drawPasses: number;
    isInit: boolean;
    private realGLDrawElements;
    private gl;
    constructor(_gl?: any);
    private fakeGLdrawElements;
    reset(): void;
    release(): void;
}
export declare class BaseHooks {
    protected _drawCalls: number;
    protected _maxDeltaDrawCalls: number;
    protected glhook?: GLHook;
    protected texturehook?: TextureHook;
    constructor();
    attach(gl: any): void;
    get drawCalls(): number;
    get maxDeltaDrawCalls(): number;
    get deltaDrawCalls(): number;
    get maxTextureCount(): number;
    get texturesCount(): number;
    reset(): void;
    release(): void;
}
export declare class PIXIHooks extends BaseHooks {
    constructor(renderer: PIXI.WebGLRenderer);
}
export declare class StatsJSAdapter {
    stats: any;
    dcPanel?: any;
    tcPanel?: any;
    hook: BaseHooks;
    constructor(_hook: BaseHooks, _stats?: any);
    update(): void;
    reset(): void;
}
export declare class Stats {
    private beginTime;
    private msPanel;
    private fpsPanel;
    private prevTime;
    private frames;
    private memPanel;
    constructor();
    REVISION: 16;
    dom: any;
    addPanel: any;
    showPanel: any;
    begin(): void;
    end(): number;
    update(): void;
    domElement: any;
    setMode: any;
    static Panel: (name: any, fg: any, bg: any) => {
        dom: HTMLCanvasElement;
        update: (value: any, maxValue: any) => void;
    };
}
