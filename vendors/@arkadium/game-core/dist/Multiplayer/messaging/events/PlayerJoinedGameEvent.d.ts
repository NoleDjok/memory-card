/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEvent } from "../IEvent";
import { IPlayer, Player } from "../../models/Player";
import { EventBase } from "../EventBase";
import { IGame } from "../../models/Game";
export interface IPlayerJoinedGameEvent extends IEvent {
    readonly gameId: string;
    readonly player: IPlayer;
}
export declare class PlayerJoinedGameEvent extends EventBase implements IPlayerJoinedGameEvent {
    static readonly id: string;
    get id(): string;
    readonly gameId: string;
    readonly player: Player;
    private constructor();
    static fromObject(object: IPlayerJoinedGameEvent): PlayerJoinedGameEvent;
    static fromPlayerInGame(game: IGame, player: IPlayer): PlayerJoinedGameEvent;
}
