/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { List } from "../Linq/Linq";
import { IDisplayObject } from "./IViewConfiguration";
import { ILoadingViewBase, IViewBase } from "./IViewBase";
import { IAnimateViewChildViewConfiguration, IAnimateViewConfiguration } from "./IAnimateViewConfiguration";
import { SpriteList } from "./SpriteList";
import { SpriteEvents } from "./SpriteEvents";
import { _ViewBase } from "./_ViewBase";
export declare abstract class AnimateViewBase extends _ViewBase {
    name: string;
    $sprites: SpriteList;
    $spritesEvents: SpriteEvents;
    config: IAnimateViewConfiguration;
    private __movieClip;
    protected abstract getConfiguration(): IAnimateViewConfiguration;
    protected abstract onInitialize(): void;
    private _width;
    private _height;
    protected constructor(name: string);
    private get _movieClip();
    get text(): PIXI.Text;
    get container(): PIXI.Container;
    get graphics(): PIXI.Graphics;
    get sprite(): PIXI.Sprite;
    get width(): number;
    get height(): number;
    get loop(): boolean;
    set loop(value: boolean);
    get currentFrame(): number;
    get startPosition(): number;
    get movieClipLabels(): string[];
    get paused(): boolean;
    get autoReset(): boolean;
    set autoReset(value: boolean);
    get selfAdvance(): boolean;
    set selfAdvance(value: boolean);
    get framerate(): number;
    set framerate(value: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get visible(): boolean;
    set visible(value: boolean);
    get display(): PIXI.Container;
    configure(child: IAnimateViewChildViewConfiguration): void;
    private _stopAllMovieClip;
    gotoAndStop(index: number | string): void;
    gotoAndPlay(index: number | string): void;
    gotoAndStopChild(query: string, positionOrLabel?: number | string): void;
    gotoAndStopAllChild(positionOrLabel?: number | string): void;
    gotoAndPlayChild(query: string, positionOrLabel?: number | string, loop?: boolean, inherit?: boolean): void;
    gotoAndPlayAll(positionOrLabel: number | string, excludeFilter?: List<string>): void;
    gotoAndStopAll(positionOrLabel: number | string): void;
    protected stop(inherit?: boolean): void;
    private _dispatchEvent;
    protected onDispatchEvent(name: string, ...args: any[]): void;
    private _getChild;
    sortCurrentMovieClipChildren(sort: (displayObject: IDisplayObject, view: IViewBase) => boolean): void;
    getCurrentMovieClipChildren(event: (displayObject: PIXI.DisplayObject) => void, query?: string): void;
    initialize(parent: IViewBase, container?: PIXI.Container): PIXI.Container;
    private __needUpdate;
    update(frameRate: number): boolean;
    dispose(): void;
    clear(): void;
}
export declare abstract class AnimateLoadingViewBase extends AnimateViewBase implements ILoadingViewBase {
    name: string;
    protected constructor(name: string);
    abstract onLoadingProgress(progress: number): void;
    toggleVisible(visible: boolean): void;
    abstract onShow(): void;
    abstract onHide(): void;
}
