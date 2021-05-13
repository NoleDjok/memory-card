/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { MultiplayerClient } from "./MultiplayerClientBase";
import { LobbyPlayerIOManager } from "./LobbyPlayerIOManager";
import { IGameActionOptions } from "./interfaces/IGameActionOptions";
import { IUpdateGameOptions } from "./interfaces/IUpdateGameOptions";
import { IGameSignalOptions } from "./interfaces/IGameSignalOptions";
export declare class MultiplayerPlayerIOClient extends MultiplayerClient {
    private _connection;
    constructor();
    create(lobby: LobbyPlayerIOManager): Promise<boolean>;
    start(): Promise<boolean>;
    protected _sendGameActionAsync(options: IGameActionOptions): Promise<void>;
    protected _updateGameAsync(options: IUpdateGameOptions, bad: boolean): Promise<void>;
    protected _sendGameSignalAsync(options: IGameSignalOptions): Promise<void>;
    startMatch(): Promise<void>;
    update(frameRate: number): void;
}
