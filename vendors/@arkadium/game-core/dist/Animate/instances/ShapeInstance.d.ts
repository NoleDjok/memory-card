/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Instance } from "./Instance";
import { MovieClipBaseFactory } from "../factories/MovieClipFactory";
import { MovieClipContainer } from "../factories/MovieClipContainer";
export declare class ShapeInstance extends Instance {
    private readonly _memoryAtlas;
    private readonly _memoryCache;
    constructor(libraryItem: any, id: any);
    private static _isIe;
    private static _isNotIe;
    isIE(): boolean;
    buildContent(movieClip: MovieClipBaseFactory, isMask?: boolean, staticMask?: any, scale?: number): MovieClipContainer;
    private buildTextureSource;
    private buildSvgBase64;
    private buildDrawCommands;
}
