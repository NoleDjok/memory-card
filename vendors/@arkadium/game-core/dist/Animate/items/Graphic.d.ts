/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LibraryItem } from "./LibraryItem";
import { Instance } from "../instances/Instance";
import { PixiAnimateFactory } from "../factories/PixiAnimateFactory";
export declare class Graphic extends LibraryItem {
    private totalFrames;
    constructor(library: any, data: any);
    render(animate: PixiAnimateFactory): void;
    create(id: number): Instance;
}
