/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
import { AbTestManager } from "../../AbTest/AbTestManager";
import { IDimension } from "../IDimension";
import { IProperty } from "../IProperty";
import { AnalyticResources } from "../../AnalyticResources";
export declare abstract class BaseAnalytic {
    private _properties;
    private readonly _dimensions;
    private _tracker;
    private _analyticProviders;
    protected _gameVersion: string;
    constructor(analyticsResources: AnalyticResources, abTestManager: AbTestManager);
    private parseTracker;
    protected addProperty(value: IProperty): void;
    protected addDimension(value: IDimension): void;
    protected sendPageViewInternal(pageName: string): void;
    protected sendEventInternal(eventCategory: string, eventAction: string): Promise<boolean>;
    private getAbsoluteDomainUrl;
}
