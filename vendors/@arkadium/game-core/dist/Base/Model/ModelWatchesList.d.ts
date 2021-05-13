/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../../Linq/Linq";
import { WatchObject } from "./WatchObject";
import { IViewBaseLogger } from "../IViewBaseLogger";
import { IViewBase } from "../IViewBase";
import { IModelWatchConfiguration } from "../_ViewBase";
export declare class ModelWatchItem {
    private _event;
    private _viewName;
    disposed: boolean;
    event: Function;
    name: string;
    key: string;
    context: any;
    constructor(_event: Function, _viewName: string, logger: IViewBaseLogger);
    protected run(newVal: any, oldVal: any): void;
}
export declare class ModelWatchesList {
    private _watchObject;
    constructor(_watchObject: WatchObject);
    items: List<ModelWatchItem>;
    get(name: string): ModelWatchItem;
    initialize(modelWatch: IModelWatchConfiguration, controller: IViewBase, $model: any, logger: IViewBaseLogger): void;
    dispose(): void;
}
