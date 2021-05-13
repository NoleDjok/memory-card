/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { MovieClip } from "../pixi/MovieClip";
import { IViewBase } from "../..";
import { IDisplayObject } from "../../Base/IViewConfiguration";
import { List } from "../../Linq/Linq";
export declare class MovieClipContainer extends PIXI.Container {
    _instanceId: number;
    _maskTill: number;
    _placeAfter: number;
    ___scripts: Array<{
        script: string;
        frame: number;
    }>;
    ___children: Array<PIXI.Container>;
    __view: IViewBase;
    __childrenSorted: IDisplayObject[];
    protected __destroyed: boolean;
    constructor(name: any);
    protected _removeChildrenMask: (mask: any) => void;
    update(tickerDeltaTime: any): void;
    protected _applyChildrenSorted(): void;
    renderOrderedItems(depthSorted: any): void;
    destroy(options?: PIXI.DestroyOptions | boolean): void;
    getChild(path: string[], container: MovieClipContainer, n?: number): PIXI.Container;
    gotoAndPlayChild(query: string, index?: number | string, loop?: boolean, inherit?: boolean): void;
    protected _gotoAndPlayAllChildren(pos: number, movieClip: MovieClip, filter?: List<string>): void;
    gotoAndStopAllChild(index?: number | string): void;
    gotoAndStopChild(query: string, index?: number | string): void;
    protected _gotoAndStopAllChildren(pos: number | string, movieClip: MovieClipContainer): void;
    private __$eventListeners_;
    onEvent(eventType: string, callback: Function, context?: any): void;
    offEvent(eventType: string, callback: any): void;
    triggerEvent(eventType: string, ...args: any[]): void;
}
