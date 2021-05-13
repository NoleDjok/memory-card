/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { MovieClipBaseFactory } from "../factories/MovieClipFactory";
import { Instance } from "./Instance";
import { MovieClipContainer } from "../factories/MovieClipContainer";
export declare class BitmapInstance extends Instance {
    constructor(data: any, frame: any);
    buildContent(movieClip: MovieClipBaseFactory, isMask?: boolean, staticMask?: any): MovieClipContainer;
}
