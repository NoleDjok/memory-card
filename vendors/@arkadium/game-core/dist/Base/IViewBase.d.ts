/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { ResourceItem } from "./Resources/ResourceItem";
import { _IViewBaseChildConfiguration } from "./_ViewBase";
import { IRootBase } from "./IRootBase";
export interface IChildViews {
    get<T extends IViewBase>(name: string): any;
}
export interface IViewBase {
    $model: any;
    name: string;
    visible: boolean;
    parent: IViewBase;
    y: number;
    x: number;
    isLandscape: boolean;
    display: PIXI.Container;
    isReady: boolean;
    disposed: boolean;
    config: any;
    locator: string;
    gameBase: IRootBase;
    configure(childSpecification: _IViewBaseChildConfiguration): void;
    initialize(parent: IViewBase, container?: PIXI.Container): PIXI.Container;
    resize(_resizeWidth: number, _resizeHeight: number, _resizeScale: number): void;
    setLandscape(): void;
    setPortrait(): void;
    dispose(): void;
    update(frameRate: number): void;
    getResources(): ResourceItem[];
    focus(isFocus: boolean): void;
    $childViews: IChildViews;
    removeChild(child: IViewBase): any;
}
export interface ILoadingViewBase extends IViewBase {
    onShow(): void;
    onHide(): void;
    toggleVisible(visible: boolean): void;
    onLoadingProgress(progress: number): void;
}
