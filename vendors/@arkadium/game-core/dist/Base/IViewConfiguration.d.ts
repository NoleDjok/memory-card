/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { SoundType } from "./Sound/ISoundManager";
import { _IViewBaseChildConfiguration, _IViewBaseConfiguration } from "./_ViewBase";
import { IDragonBonesViewConfiguration } from "./IDragonBonesViewConfiguration";
export interface IResourceItem {
}
export interface IDragonBonesChildViewConfiguration extends _IViewBaseChildConfiguration {
    config?: IDragonBonesViewConfiguration;
}
export interface ILoadingViewConfiguration extends _IViewBaseChildConfiguration {
    config?: _IViewBaseConfiguration;
}
export interface IMouseEvent {
    button: number;
}
export interface ISpriteEvent {
    localPosition: PIXI.Point;
    globalPosition: PIXI.Point;
    screenPosition: PIXI.Point;
    preventDefault: () => void;
    stopPropagation: () => void;
    mouseEvent?: IMouseEvent;
}
export declare class TestType {
    static readonly StartGame: string;
    static readonly QuitGame: string;
    static readonly SizeGame: string;
    static readonly EventChange: string;
    static readonly PauseReady: string;
}
export interface ITest {
    run: () => void;
    type: TestType;
}
export interface IPreloadersConfiguration {
    childViews: {
        loading: ILoadingViewConfiguration;
        preloader: ILoadingViewConfiguration;
    };
}
export declare enum EventsTargetTypeEnum {
    SLOT = 1,
    SPRITE = 2,
    BOUNDING_BOXE = 3
}
export declare enum EventsTypeEnum {
    CLICK_OR_TAP = "clickOrTap",
    CLICK = "click",
    MOUSEDOWN = "mousedown",
    MOUSEMOVE = "mousemove",
    MOUSEOUT = "mouseout",
    MOUSEOVER = "mouseover",
    MOUSEUP = "mouseup",
    MOUSEUPOUTSIDE = "mouseupoutside",
    POINTERCANCEL = "pointercancel",
    POINTERDOWN = "pointerdown",
    POINTERMOVE = "pointermove",
    POINTEROUT = "pointerout",
    POINTEROVER = "pointerover",
    POINTERTAP = "pointertap",
    POINTERUP = "pointerup",
    POINTERUPOUTSIDE = "pointerupoutside",
    RIGHTCLICK = "rightclick",
    RIGHTDOWN = "rightdown",
    RIGHTUP = "rightup",
    RIGHTUPOUTSIDE = "rightupoutside",
    TAP = "tap",
    TOUCHCANCEL = "touchcancel",
    TOUCHEND = "touchend",
    TOUCHENDOUTSIDE = "touchendoutside",
    TOUCHMOVE = "touchmove",
    TOUCHSTART = "touchstart",
    TAP_AND_POINTERMOVE = "TAP_AND_POINTERMOVE",
    TAP_GLOBAL_AND_POINTERMOVE = "TAP_GLOBAL_AND_POINTERMOVE",
    POINTER_HITAREA_MOVE = "POINTER_HITAREA_MOVE"
}
export interface IEventConfiguration {
    targetName: string;
    targetType: EventsTargetTypeEnum;
    event: string | ((event: ISpriteEvent) => void);
    eventType: EventsTypeEnum;
    useTextureHitMap?: boolean;
}
export interface IQueueConfiguration {
    [key: string]: {
        condition: (clock: number) => boolean;
        action: (clock: number, data?: any) => void;
    };
}
export interface IKeyboardConfiguration {
    down?: (keyCode: number) => void;
    pressed?: (keyCode: number) => void;
    released?: (keyCode: number) => void;
    [key: number]: {
        down?: () => void;
        pressed?: () => void;
        released?: () => void;
    };
}
export interface ISoundsConfiguration {
    id: string;
    type: SoundType;
}
export interface IDisplayObject extends PIXI.DisplayObject {
    zOrder: number;
}
