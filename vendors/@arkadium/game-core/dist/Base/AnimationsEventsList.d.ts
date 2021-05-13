/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../Linq/Linq";
import { DragonBonesViewBase } from "./DragonBonesViewBase";
import { AnimationsItem, AnimationsList } from "./AnimationsList";
import { Armature } from "../dragonBones/armature/Armature";
import { IAnimationsEventsConfiguration } from "./IDragonBonesViewConfiguration";
import { IViewBaseLogger } from "./IViewBaseLogger";
export declare class AnimationsEventItem {
    eventType: string;
    private _event;
    armature: Armature;
    animation: AnimationsItem;
    private _viewName;
    event: Function;
    hasCalled: boolean;
    constructor(eventType: string, _event: Function, armature: Armature, animation: AnimationsItem, _viewName: string, logger: IViewBaseLogger);
    name: string;
}
export declare class AnimationsEventsList {
    items: List<AnimationsEventItem>;
    get(name: string): AnimationsEventItem;
    initialize(animationsEvents: Array<IAnimationsEventsConfiguration>, $animations: AnimationsList, armature: Armature, controller: DragonBonesViewBase, logger: IViewBaseLogger): void;
    dispose(): void;
}
