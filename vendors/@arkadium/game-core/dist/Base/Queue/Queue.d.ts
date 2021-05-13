/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { QueueItem } from "./QueueList";
export interface IQueue {
    name?: string;
    condition: (clock: number) => boolean;
    action: (clock: number, data?: any) => void;
}
export declare class Queue {
    private _queueClock;
    private _queue;
    private _queueData;
    items: {
        [key: string]: QueueItem;
    };
    get clock(): number;
    get length(): number;
    constructor();
    update(frameRate: number, shadow?: boolean): void;
    push(queue: IQueue, obj?: any): void;
    clear(): void;
    remove(queue: IQueue): void;
}
