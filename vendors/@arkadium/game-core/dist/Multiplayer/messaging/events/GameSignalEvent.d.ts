/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "../IEvent";
import { EventBase } from "../EventBase";
export interface IGameSignalEvent extends IEvent {
    readonly gameId?: string;
    readonly playerId?: string;
    readonly signal: any;
}
export declare class GameSignalEvent extends EventBase implements IGameSignalEvent {
    static readonly id: string;
    get id(): string;
    readonly gameId: string;
    readonly playerId: string;
    readonly signal: any;
    private constructor();
    static fromObject(object: IGameSignalEvent): GameSignalEvent;
}
