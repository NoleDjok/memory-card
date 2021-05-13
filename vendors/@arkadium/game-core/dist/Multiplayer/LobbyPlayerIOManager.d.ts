/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LobbyManager, LobbyManagerSettings } from "./LobbyManagerBase";
export interface LobbyPlayerIOManagerSettings extends LobbyManagerSettings {
    playerIoKey?: string;
    developmentServer?: string;
    serverNodeName?: string;
}
export declare class LobbyPlayerIOManager extends LobbyManager {
    constructor();
    private _connection;
    get connection(): any;
    private _listRooms;
    private _joinRoom;
    joinOrCreate(playerGuid: string, playerName: string, gameName: string, lobbySettings?: LobbyPlayerIOManagerSettings): Promise<boolean>;
}
