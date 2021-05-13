/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IPlayer, Player } from "./Player";
import { IActionsQueue } from "../IActionsQueue";
export interface IGame {
    id: string;
    players: IPlayer[];
    createdUtc: Date;
    startedUtc?: Date;
    endedUtc?: Date;
}
export declare class Game implements IGame {
    readonly id: string;
    readonly players: Player[];
    createdUtc: Date;
    startedUtc?: Date;
    endedUtc?: Date;
    queue?: IActionsQueue[];
    private constructor();
    static fromObject(object: IGame): Game;
}
