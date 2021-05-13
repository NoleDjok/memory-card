/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export interface IGameConnection {
    latency: number;
    signalR: [number, number, number];
    webRTC: [number, number, number];
}
export interface IGameActionOptions {
    playerId: string;
    action: any;
    actionType: number;
    connection?: IGameConnection;
}
