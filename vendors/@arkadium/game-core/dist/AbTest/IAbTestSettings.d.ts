/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
export interface IAbTestSettings {
    key: string;
    experiment: Array<IExperiment>;
    refresh: boolean;
}
export declare class IExperiment {
    key: string;
    probability: number;
}
