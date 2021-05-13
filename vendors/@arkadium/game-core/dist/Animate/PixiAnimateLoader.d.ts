/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { PixiAnimateFactory } from "./factories/PixiAnimateFactory";
export declare class PixiAnimateLoader {
    private _data;
    private library;
    private debug;
    animate: PixiAnimateFactory;
    constructor(data: any);
    exportAssets(): void;
    destroy(): void;
    getInstance(name?: string): import("./factories/MovieClipContainer").MovieClipContainer;
    build(): void;
}
