/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { List } from "../Linq/Linq";
import { ISpritesConfiguration } from "./IDragonBonesViewConfiguration";
import { Armature } from "../dragonBones/armature/Armature";
import { IViewBase } from "./IViewBase";
import { MovieClip } from "../Animate/pixi/MovieClip";
import { MovieClipContainer } from "../Animate/factories/MovieClipContainer";
export declare class SpriteItem {
    name: string;
    sprite: PIXI.Sprite;
    textureName: string;
}
export declare class SpriteList {
    items: List<SpriteItem>;
    get(name: string): PIXI.Sprite;
    initialize(sprites: ISpritesConfiguration, armature: Armature | MovieClip | MovieClipContainer | PIXI.Container, controller: IViewBase): void;
}
