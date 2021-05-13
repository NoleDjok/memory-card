/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { TextureList } from "./TextureList";
import { SpriteEvents } from "./SpriteEvents";
import { IDragonBonesViewConfiguration } from "./IDragonBonesViewConfiguration";
import { Armature } from "../dragonBones/armature/Armature";
import { SpriteList } from "./SpriteList";
import { SlotList } from "./SlotList";
import { BoundingBoxList } from "./BoundingBoxList";
import { AnimationsList } from "./AnimationsList";
import { AnimationsEventsList } from "./AnimationsEventsList";
import { ILoadingViewBase, IViewBase } from "./IViewBase";
import { PixiArmatureDisplay } from "../dragonBones/pixi4/PixiArmatureDisplay";
import { _ViewBase } from "./_ViewBase";
export declare abstract class DragonBonesViewBase extends _ViewBase implements IViewBase {
    name: string;
    protected _armature: Armature;
    protected _armatureDisplay: PixiArmatureDisplay;
    private container;
    get display(): PIXI.Container;
    get armature(): Armature;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get rotation(): number;
    set rotation(value: number);
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    get armatureDisplay(): PixiArmatureDisplay;
    get alpha(): number;
    set alpha(value: number);
    get visible(): boolean;
    set visible(value: boolean);
    private _armatureMustDispose;
    private _parentArmature;
    private _armatureSlots;
    private _armatureName;
    $textures: TextureList;
    $sprites: SpriteList;
    $slots: SlotList;
    $boundingBoxes: BoundingBoxList;
    $spritesEvents: SpriteEvents;
    $animations: AnimationsList;
    $animationsEvents: AnimationsEventsList;
    config: IDragonBonesViewConfiguration;
    protected abstract getConfiguration(): IDragonBonesViewConfiguration;
    protected abstract onInitialize(): void;
    constructor(name: string);
    initialize(parent: IViewBase, container?: PIXI.Container): PIXI.Container;
    dispose(): void;
    clear(): void;
}
export declare abstract class DragonBonesLoadingViewBase extends DragonBonesViewBase implements ILoadingViewBase {
    abstract onLoadingProgress(progress: number): void;
    toggleVisible(visible: boolean): void;
    abstract onShow(): void;
    abstract onHide(): void;
}
