/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Tween } from "../pixi/Tween";
export declare class TimeLineTweens {
    startFrame: number;
    duration: number;
    constructor(startFrame: number, duration: number);
    tweens: {
        [key: number]: Tween;
    };
}
