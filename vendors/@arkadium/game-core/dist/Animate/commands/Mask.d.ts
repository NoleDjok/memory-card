/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { CommandBase } from "./CommandBase";
export declare class Mask extends CommandBase {
    private maskTill;
    constructor(data: any, frame: any);
    toFrame(frame: any): void;
}
