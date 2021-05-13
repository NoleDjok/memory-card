/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { _IViewBaseChildConfiguration, _IViewBaseConfiguration } from "./_ViewBase";
import { IEventConfiguration } from "./IViewConfiguration";
export interface ISimpleViewChildViewConfiguration extends _IViewBaseChildConfiguration {
    config?: ISimpleViewConfiguration;
}
export interface ISimpleViewConfiguration extends _IViewBaseConfiguration {
    events?: Array<IEventConfiguration>;
}
