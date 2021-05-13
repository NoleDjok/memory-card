/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Bitmap } from "./items/Bitmap";
import { Shape } from "./items/Shape";
import { Sound } from "./items/Sound";
import { Graphic } from "./items/Graphic";
import { Stage } from "./items/Stage";
import { Text } from "./items/Text";
import { Container } from "./items/Container";
import { Timeline } from "./items/Timeline";
export declare class Library {
    bitmaps: Bitmap[];
    sounds: Sound[];
    shapes: Shape[];
    texts: Text[];
    timelines: Array<Timeline | Graphic | Container>;
    private _mapById;
    private _mapByName;
    stage: Stage;
    meta: any;
    hasContainer: boolean;
    constructor(data: any);
    createInstance(assetId: any, instanceId: any): any;
    destroy(): void;
}
