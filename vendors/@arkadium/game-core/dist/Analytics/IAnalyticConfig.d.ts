/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
import { AnalyticProviderEnum } from "./Provider/AnalyticProviderEnum";
export interface IAnalyticConfig {
    appId: string;
    provider: AnalyticProviderEnum;
    providerConfig?: any;
}
export interface IAnalyticSettings {
    providers: Array<IAnalyticConfig>;
}
