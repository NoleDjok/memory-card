/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
import { IAnalytic } from "../IAnalytic";
import { IDimension } from "../IDimension";
import { IProperty } from "../IProperty";
export declare class AnalyticDecorator implements IAnalytic {
    private _analytic?;
    constructor(_analytic?: IAnalytic);
    sendPageView(pageName: string, properties: Array<IProperty>, dimensions: Array<IDimension>): void;
    sendEvent(eventCategory: string, eventAction: string, properties: Array<IProperty>, dimensions: Array<IDimension>): Promise<boolean>;
}
