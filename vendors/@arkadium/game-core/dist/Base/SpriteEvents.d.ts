/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { List } from "../Linq/Linq";
import { IEventConfiguration, ISpriteEvent } from "./IViewConfiguration";
import { BoundingBoxList } from "./BoundingBoxList";
import { SpriteList } from "./SpriteList";
import { IViewBaseLogger } from "./IViewBaseLogger";
import { IViewBase } from "./IViewBase";
export declare class SpriteEvents {
    items: List<SpritesEventItem>;
    private _scrollYOnDown;
    private _pointerDown;
    private static _pointerDownGlobal;
    private _pointerOver;
    initialize(events: Array<IEventConfiguration>, $boundingBoxes: BoundingBoxList, $sprites: SpriteList, controller: IViewBase, logger: IViewBaseLogger): void;
    addEvent(sprite: PIXI.Container, spriteEvent: string | ((event: ISpriteEvent) => void), controller: IViewBase, logger: IViewBaseLogger, eventCfg: IEventConfiguration): void;
    dispose(): void;
}
export declare class SpritesEventItem {
    private _event;
    name: string;
    sprite: PIXI.Container;
    private _view;
    spriteName: string;
    static blockSpritesEvents: boolean;
    private _tempPoint;
    containsPoint: (point: any) => boolean;
    private static _genHitMap;
    constructor(_event: Function, name: string, sprite: PIXI.Container, _view: IViewBase, spriteName: string, useTextureHitMap?: boolean);
    event: Function;
    run(event: ISpriteEvent): ISpriteEvent[];
}
