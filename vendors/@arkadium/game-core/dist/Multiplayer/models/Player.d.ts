/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export interface IPlayer {
    id: string;
    name: string;
    isServer: boolean;
    data: any;
    action: number;
    type: number;
}
export declare class Player implements IPlayer {
    readonly id: string;
    name: string;
    isServer: boolean;
    type: number;
    data: any;
    action: number;
    left: boolean;
    private constructor();
    static fromObject(object: IPlayer): Player;
    copy(fromPlayer: Player): void;
}
