/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { ILoadingViewBase, IViewBase } from "./IViewBase";
import { ISimpleViewConfiguration } from "./ISimpleViewConfiguration";
import { _ViewBase } from "./_ViewBase";
import { SpriteEvents } from "./SpriteEvents";
import { SpriteList } from "./SpriteList";
import { IDisplayObject } from "./IViewConfiguration";
export declare abstract class SimpleViewBase extends _ViewBase implements IViewBase {
    name: string;
    $sprites: SpriteList;
    $spritesEvents: SpriteEvents;
    private __childrenSorted;
    config: ISimpleViewConfiguration;
    constructor(name: string);
    initialize(parent: IViewBase, container?: PIXI.Container): PIXI.Container;
    protected abstract getConfiguration(): ISimpleViewConfiguration;
    protected abstract onInitialize(): void;
    protected _applyChildrenSorted(): void;
    sortCurrentChildren(sort: (displayObject: IDisplayObject, view: IViewBase) => boolean): void;
    update(frameRate: number): boolean;
    dispose(): void;
}
export declare abstract class SimpleLoadingViewBase extends SimpleViewBase implements ILoadingViewBase {
    abstract onLoadingProgress(progress: number): void;
    toggleVisible(visible: boolean): void;
    abstract onShow(): void;
    abstract onHide(): void;
}
