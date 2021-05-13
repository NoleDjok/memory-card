/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "./IEvent";
import { AsyncEventHandler, IEventBus } from "./IEventBus";
export declare class LocalEventBus implements IEventBus {
    private readonly subscriptions;
    constructor();
    getHandlers<TEvent extends IEvent>(key: string): AsyncEventHandler<TEvent>[];
    private getSubscriptions;
    dispose(): void;
    publishAsync<TEvent extends IEvent>(evt: TEvent): Promise<void>;
    subscribe<TEvent extends IEvent>(key: string, asyncHandler: (evt: TEvent) => Promise<void>): void;
    unsubscribe<TEvent extends IEvent>(key: string, asyncHandler: (evt: TEvent) => Promise<void>): void;
}
