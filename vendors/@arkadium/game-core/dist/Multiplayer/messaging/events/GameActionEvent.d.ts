/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "../IEvent";
import { EventBase } from "../EventBase";
export interface IGameActionEvent extends IEvent {
    readonly gameId?: string;
    readonly playerId?: string;
    readonly actionType: number;
    readonly action: any;
}
export declare class GameActionEvent extends EventBase implements IGameActionEvent {
    static readonly id: string;
    get id(): string;
    readonly gameId: string;
    readonly playerId: string;
    readonly actionType: number;
    readonly action: any;
    private constructor();
    static fromObject(object: IGameActionEvent): GameActionEvent;
}
