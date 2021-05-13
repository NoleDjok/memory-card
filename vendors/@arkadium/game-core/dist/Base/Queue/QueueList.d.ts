/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../../Linq/Linq";
import { IQueue, Queue } from "./Queue";
import { IQueueConfiguration } from "../IViewConfiguration";
import { IViewBase } from "../IViewBase";
export declare class QueueItem {
    private _name;
    condition: (clock: number) => boolean;
    action: (clock: number) => void;
    queue: IQueue;
    static queueCount: number;
    static queue: {
        [key: string]: Queue;
    };
    constructor(_name: string, condition: (clock: number) => boolean, action: (clock: number) => void);
    addToQueue(index?: number, obj?: any): void;
    removeFromQueue(): void;
}
export declare class QueueList {
    items: List<QueueItem>;
    get(name: string): QueueItem;
    initialize(queue: IQueueConfiguration, view: IViewBase): void;
    dispose(): void;
}
