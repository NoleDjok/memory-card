/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class CommandFactory {
    private type;
    constructor(data: any, frame: any);
    toString(): string;
    toFrame(frame: any): void;
    static create(data: any): any;
}
