/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { List } from "../Linq/Linq";
import { BoundingBoxData } from "../dragonBones/model/BoundingBoxData";
import { Slot } from "../dragonBones/armature/Slot";
import { PixiArmatureDisplay } from "../dragonBones/pixi4/PixiArmatureDisplay";
import { IBoundingBoxesConfiguration } from "./IDragonBonesViewConfiguration";
import { Armature } from "../dragonBones/armature/Armature";
export declare class BoundingBoxItem {
    name: string;
    boundingBoxData: BoundingBoxData;
    slot: Slot;
    display: PixiArmatureDisplay;
    slotName: string;
    sprite: PIXI.Container;
    get interactive(): boolean;
    set interactive(value: boolean);
    containsPoint(pX: number, pY: number): boolean;
    toMask(container: PIXI.Sprite | PIXI.Container, parent: PIXI.Sprite | PIXI.Container): void;
    toPolygon(): PIXI.Polygon;
    toGraphics(): PIXI.Graphics;
}
export declare class BoundingBoxList {
    items: List<BoundingBoxItem>;
    get(name: string): BoundingBoxItem;
    initialize(boundingBoxes: IBoundingBoxesConfiguration, armature: Armature): void;
}
