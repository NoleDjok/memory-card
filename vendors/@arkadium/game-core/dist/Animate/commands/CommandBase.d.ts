/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class CommandBase {
    type: string;
    instanceId: number;
    constructor(data: any, frame: any);
    toString(): string;
    toFrame(frame: any): void;
}
