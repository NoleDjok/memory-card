/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LibraryItem } from "./LibraryItem";
import { Instance } from "../instances/Instance";
export declare class Shape extends LibraryItem {
    private draw;
    private static _isIe;
    private static _isNotIe;
    isIE(): boolean;
    constructor(library: any, data: any);
    toColor(hex: any): any;
    create(id: number): Instance;
    toString(): string;
}
