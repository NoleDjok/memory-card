/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { _IViewBaseChildConfiguration, _IViewBaseConfiguration } from "../Base/_ViewBase";
import { EmitterConfig, OldEmitterConfig } from "./EmitterConfig";
export interface IParticlesViewChildViewConfiguration extends _IViewBaseChildConfiguration {
    particlesConfig?: EmitterConfig | OldEmitterConfig;
    imagePaths: Array<string>;
}
export interface IParticlesViewConfiguration extends _IViewBaseConfiguration {
    particlesConfig?: EmitterConfig | OldEmitterConfig;
    imagePaths: Array<string>;
}
