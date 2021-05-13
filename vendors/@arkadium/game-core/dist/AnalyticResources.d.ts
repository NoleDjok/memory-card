/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IAnalyticConfig } from "./Analytics/IAnalyticConfig";
export declare class AnalyticResources {
    arenaName: string;
    gameVersion: string;
    testGroup?: string;
    providers: Array<IAnalyticConfig>;
}
