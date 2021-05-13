/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Random } from "..";
import { MultiplayerClient } from "./MultiplayerClientBase";
import { IActionsQueue } from "./IActionsQueue";
import { Player } from "./models/Player";
export interface IMultiplayerModelConnectorWatchConfiguration {
    [key: string]: {
        callback: ((value: any) => void);
        delay?: number;
        step?: number;
    };
}
export interface IMultiplayerModelConnectorClientConfiguration {
    connectionId: string;
    model: any;
    modelWatch?: IMultiplayerModelConnectorWatchConfiguration;
    onStartMatch?: () => void;
    onGameUpdate?: (queue: IActionsQueue[]) => void;
    onSetServer?: (isServer: boolean) => void;
    onPlayerJoin?: (playerId: string, playerName: string) => void;
    onPlayerLeft?: (player: Player) => void;
    onUpdatePlayer?: (player: Player) => void;
    onAddPlayer?: (player: Player) => void;
    onAddPlayerOpponent?: (player: Player) => void;
    onError?: (error: any) => void;
}
export interface IMultiplayerModelConnectorServerConfiguration {
    connectionId: string;
    model: any;
    modelWatch?: IMultiplayerModelConnectorWatchConfiguration;
    onStartMatch?: () => void;
    onGameServerUpdate?: (queue: IActionsQueue[], frameRate: number) => void;
    onSetServer?: (isServer: boolean) => void;
    onPlayerJoin?: (playerId: string, playerName: string) => void;
    onPlayerLeft?: (player: Player) => void;
    onUpdatePlayer?: (player: Player) => void;
    onAddPlayer?: (player: Player) => void;
    onAddPlayerOpponent?: (player: Player) => void;
    onError?: (error: any) => void;
}
interface IMultiplayerModelConnectorClientAction {
    client: string;
    type: number;
    model: string;
    values: any[];
}
export declare class MultiplayerModelConnectorClient {
    protected _config: IMultiplayerModelConnectorClientConfiguration;
    protected _multiplayerClient: MultiplayerClient;
    private _random;
    private readonly _model;
    private readonly _playerId;
    private readonly _name;
    private _onGameUpdate;
    private readonly _watchObject;
    private readonly _$modelWatches;
    constructor(_config: IMultiplayerModelConnectorClientConfiguration, _multiplayerClient: MultiplayerClient, _random: Random);
    private _updateGame;
    updateServer(gameAction: IMultiplayerModelConnectorClientAction, playerId: string): void;
    start(): void;
    stop(): void;
    dispose(): void;
    update(frameRate: number): void;
}
export declare class MultiplayerModelConnectorServer {
    protected _config: IMultiplayerModelConnectorServerConfiguration;
    protected _multiplayerClient: MultiplayerClient;
    private _random;
    private readonly _model;
    private readonly _name;
    constructor(_config: IMultiplayerModelConnectorServerConfiguration, _multiplayerClient: MultiplayerClient, _random: Random);
    updateGame(gameAction: IMultiplayerModelConnectorClientAction, playerId: string): void;
    dispose(): void;
    update(frameRate: number): void;
}
export declare class MultiplayerModelConnector {
    protected _multiplayerClient: MultiplayerClient;
    private _clients;
    private _servers;
    protected constructor(_multiplayerClient: MultiplayerClient);
    addConnection(clientCfg: IMultiplayerModelConnectorClientConfiguration): MultiplayerModelConnectorClient;
    addConnectionServer(serverCfg: IMultiplayerModelConnectorServerConfiguration): MultiplayerModelConnectorServer;
    update(frameRate: number): void;
    updateConnectionServer(gameAction: IMultiplayerModelConnectorClientAction, playerId: string): void;
}
export {};
