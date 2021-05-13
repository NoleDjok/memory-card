/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LibraryItem } from "./LibraryItem";
import { Instance } from "../instances/Instance";
export declare class Text extends LibraryItem {
    constructor(library: any, data: any);
    create(id: number): Instance;
}
