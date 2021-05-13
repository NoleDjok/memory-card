/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
export declare class Tween {
    startProps: any;
    endProps: any;
    private duration;
    private startFrame;
    private endFrame;
    private ease;
    private isTweenlessFrame;
    constructor(startProps: any, endProps: any, startFrame: any, duration: any, ease?: any);
    setPosition(target: PIXI.Container, currentFrame: any): void;
    setToEnd(target: PIXI.Container): void;
}
