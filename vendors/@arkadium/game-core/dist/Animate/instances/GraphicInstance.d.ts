/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Instance } from "./Instance";
import { MovieClipBaseFactory } from "../factories/MovieClipFactory";
import { MovieClipContainer } from "../factories/MovieClipContainer";
export declare class GraphicInstance extends Instance {
    private mode;
    constructor(libraryItem: any, id: any);
    buildContent(movieClip: MovieClipBaseFactory, isMask?: boolean, staticMask?: any): MovieClipContainer;
}
