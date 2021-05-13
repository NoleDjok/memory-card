/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { CommandBase } from "./CommandBase";
export declare class ColorTransform extends CommandBase {
    colorMatrix: {
        r: number;
        g: number;
        b: number;
        rA: number;
        gA: number;
        bA: number;
        a: number;
        aA: number;
    };
    constructor(data: any, frame: any);
    private _round;
    toFrame(frame: any): void;
}
