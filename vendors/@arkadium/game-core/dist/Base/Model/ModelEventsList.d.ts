/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../../Linq/Linq";
import { IViewBaseLogger } from "../IViewBaseLogger";
import { IViewBase } from "../IViewBase";
import { IModelEventConfiguration } from "../_ViewBase";
import { ModelEvents } from "./ModelEvents";
export declare class ModelEventItem {
    private _event;
    private _viewName;
    disposed: boolean;
    event: Function;
    name: string;
    key: string;
    model: any;
    constructor(_event: Function, _viewName: string, logger: IViewBaseLogger);
    protected run(...params: any[]): void;
}
export declare class ModelEventsList {
    private _modelEvents;
    constructor(_modelEvents: ModelEvents);
    items: List<ModelEventItem>;
    get(name: string): ModelEventItem;
    initialize(modelWatch: IModelEventConfiguration, controller: IViewBase, $model: any, logger: IViewBaseLogger): void;
    dispose(): void;
}
