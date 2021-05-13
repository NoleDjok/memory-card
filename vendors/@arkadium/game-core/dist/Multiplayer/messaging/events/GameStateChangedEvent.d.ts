/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "../IEvent";
import { Game, IGame } from "../../models/Game";
import { EventBase } from "../EventBase";
import { IActionsQueue } from "../../IActionsQueue";
export interface IGameStateChangedEvent extends IEvent {
    readonly game?: IGame;
    queue?: IActionsQueue[];
}
export declare class GameStateChangedEvent extends EventBase implements IGameStateChangedEvent {
    static readonly id: string;
    get id(): string;
    readonly game?: Game;
    queue?: IActionsQueue[];
    private constructor();
    static fromObject(object: IGameStateChangedEvent): GameStateChangedEvent;
    static fromGame(game?: Game): GameStateChangedEvent;
}
