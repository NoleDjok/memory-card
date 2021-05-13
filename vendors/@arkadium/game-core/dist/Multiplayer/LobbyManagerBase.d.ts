/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LobbyPlayerIOManagerSettings } from "./LobbyPlayerIOManager";
export interface LobbyManagerSettings {
    playersCount?: number;
    privateLobby?: boolean;
    autoAddBot?: boolean;
    autoAddBotDelay?: number;
}
declare class LobbyManagerBase {
    matchId: string;
    playerGuid: string;
    playerName: string;
    constructor();
    joinOrCreate(playerGuid: string, playerName: string, gameName: string, lobbySettings?: LobbyManagerSettings | LobbyPlayerIOManagerSettings): Promise<boolean>;
    protected _createGUID(): string;
}
export declare class LobbyManager extends LobbyManagerBase {
}
export {};
