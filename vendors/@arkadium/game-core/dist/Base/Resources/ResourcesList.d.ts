/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../../Linq/Linq";
import { ResourceItem } from "./ResourceItem";
export declare class ResourcesList {
    items: List<ResourceItem>;
    get(name: string): ResourceItem;
}
