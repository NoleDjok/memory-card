/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
export declare class PIXI5Renderer {
    private _htmlElement;
    renderer: PIXI.WebGLRenderer;
    renderer3d: THREE.WebGLRenderer;
    webGlError: boolean;
    isCanvasRenderer: boolean;
    private _stage;
    private statsAdapter;
    fps: number;
    get stage(): PIXI.Container;
    constructor();
    initialize(renderOptions: {
        noWebGL: boolean;
        backgroundColor?: number;
        clearBeforeRender?: boolean;
        transparent?: boolean;
        fps?: number;
        showStats?: boolean;
    }): void;
    destroy(): void;
    render(): void;
}
