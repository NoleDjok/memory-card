/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../Linq/Linq";
import { IChildViews, IViewBase } from "./IViewBase";
export declare class ChildItem {
    view: IViewBase;
    constructor(view: IViewBase);
    name: string;
    locator: string;
    viewName: string;
}
export declare class ChildViews implements IChildViews {
    items: List<ChildItem>;
    get<T extends IViewBase>(name: string): T;
}
