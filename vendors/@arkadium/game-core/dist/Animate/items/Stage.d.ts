/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Timeline } from "./Timeline";
import { PixiAnimateFactory } from "../factories/PixiAnimateFactory";
export declare class Stage extends Timeline {
    framerate: number;
    assets: any;
    constructor(library: any, data: any, framerate: any);
    render(animate: PixiAnimateFactory): void;
}
