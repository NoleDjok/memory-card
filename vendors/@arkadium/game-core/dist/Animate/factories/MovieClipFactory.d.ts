/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { MovieClip } from "../pixi/MovieClip";
import { PixiAnimateFactory } from "./PixiAnimateFactory";
import { MovieClipContainer } from "./MovieClipContainer";
import { Timeline } from "../pixi/Timeline";
export declare enum AnimateFactoryTypeEnum {
    Container = 0,
    MovieClip = 1,
    BaseFactory = 2
}
export declare class MovieClipBaseFactory {
    type: AnimateFactoryTypeEnum;
    animate: PixiAnimateFactory;
    name: string;
    getInstance(options: any): MovieClipContainer;
    reset(): void;
    _children: {
        [key: string]: MovieClipChildFactory;
    };
    _frames: any[];
    _scripts: any[];
}
export declare class MovieClipChildFactory {
    private _instance;
    private _factory;
    instance: MovieClipContainer;
    setTransform: () => void;
    setRenderable: () => void;
    setMask: () => void;
    setAlpha: () => void;
    setTint: () => void;
    setColorTransform: () => void;
    constructor(_instance: any, _factory: MovieClipBaseFactory);
    getInstance(mask?: any): MovieClipContainer;
    reset(): void;
}
export declare class MovieClipFactory extends MovieClipBaseFactory {
    private _options;
    animate: PixiAnimateFactory;
    name: string;
    private _totalFrames;
    private _timelines;
    private _timedChildTimelines;
    private _timelineReady;
    constructor(_options: any, animate: PixiAnimateFactory, name: string);
    _getChildTimeline(targetIndex: number): Timeline;
    _autoExtend(endFrame: any): void;
    _parseProperties(properties: any): void;
    addTimedChild(targetIndex: number, startFrame: any, duration: any, keyframes: any): this;
    getInstance(opt?: any): MovieClip;
}
export declare class MovieClipContainerFactory extends MovieClipBaseFactory {
    private _options;
    animate: PixiAnimateFactory;
    name: string;
    constructor(_options: any, animate: PixiAnimateFactory, name: string);
    getInstance(mask?: any): MovieClipContainer;
}
