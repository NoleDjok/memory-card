/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "./IEvent";
export interface IDisposable {
    dispose(): void;
}
export declare type AsyncEventHandler<TEvent extends IEvent> = (event: TEvent) => Promise<void>;
export interface IEventBus extends IDisposable {
    getHandlers<TEvent extends IEvent>(type: string): AsyncEventHandler<TEvent>[];
    publishAsync<TEvent extends IEvent>(evt: TEvent): Promise<void>;
    subscribe<TEvent extends IEvent>(type: string, handler: AsyncEventHandler<TEvent>): void;
    unsubscribe<TEvent extends IEvent>(type: string, handler: AsyncEventHandler<TEvent>): void;
}
