/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../Linq/Linq";
import { Slot } from "../dragonBones/armature/Slot";
import { ISlotsConfiguration } from "./IDragonBonesViewConfiguration";
import { Armature } from "../dragonBones/armature/Armature";
export declare class SlotItem {
    name: string;
    slot: Slot;
}
export declare class SlotList {
    items: List<SlotItem>;
    get(name: string): Slot;
    initialize(slotsConfigurations: ISlotsConfiguration, armature: Armature): void;
}
