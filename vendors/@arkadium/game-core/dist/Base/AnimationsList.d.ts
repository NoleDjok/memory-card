/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../Linq/Linq";
import { DragonBonesViewBase } from "./DragonBonesViewBase";
import { AnimationState } from "../dragonBones/animation/AnimationState";
import { Armature } from "../dragonBones/armature/Armature";
import { IAnimationsConfiguration } from "./IDragonBonesViewConfiguration";
import { IViewBaseLogger } from "./IViewBaseLogger";
export declare class AnimationsItem {
    animationName: string;
    private _armature;
    private _viewName;
    private _logger;
    private _armatureDisplay;
    constructor(animationName: string, _armature: Armature, _viewName: string, _logger: IViewBaseLogger);
    name: string;
    checkName(name: any): boolean;
    play(playTimes?: number): AnimationState;
    gotoAndStopByProgress(progress: number): AnimationState;
    stop(): void;
}
export declare class AnimationsList {
    items: List<AnimationsItem>;
    get(name: string): AnimationsItem;
    initialize(animations: IAnimationsConfiguration, armature: Armature, controller: DragonBonesViewBase, logger: IViewBaseLogger): void;
}
