import { Player } from "./models/Player";
import { GameStateChangedEvent } from "./messaging/events/GameStateChangedEvent";
import { PlayerStateChangedEvent } from "./messaging/events/PlayerStateChangedEvent";
import { GameActionEvent } from "./messaging/events/GameActionEvent";
import { GameSignalEvent } from "./messaging/events/GameSignalEvent";
import { PlayerLeftGameEvent } from "./messaging/events/PlayerLeftGameEvent";
import { List } from "../Linq/Linq";
import { IUpdateGameOptions } from "./interfaces/IUpdateGameOptions";
import { IGameActionOptions } from "./interfaces/IGameActionOptions";
import { IGameSignalOptions } from "./interfaces/IGameSignalOptions";
import { MultiplayerEventsEnum } from "./MultiplayerEventsEnum";
import { IActionsQueue } from "./IActionsQueue";
import { LobbyManager } from "./LobbyManagerBase";
import { MultiplayerClientTraceEventsEnum } from "./MultiplayerClientTraceEventsEnum";
declare abstract class MultiplayerClientBase {
    private __serverUpdateDelay;
    get serverUps(): number;
    set serverUps(value: number);
    private __serverPeersUpdateDelay;
    get peersUps(): number;
    set peersUps(value: number);
    get isCompressingTraffic(): boolean;
    get disableDirectConnections(): boolean;
    set disableDirectConnections(value: boolean);
    traceEvents: MultiplayerClientTraceEventsEnum;
    private __isCompressingTraffic;
    private __disableDirectConnections;
    private __queue;
    private __serverUpdateTimeOut;
    private __$eventListeners_;
    protected _playerServerId: string;
    protected _playerId: string;
    protected _ready: boolean;
    protected _gameId: string;
    protected _startedUtc: any;
    private _playerActions;
    private _playerActionIndex;
    private _serverActionsQueues;
    private _serverActionsQueueIndex;
    private _broadcastActionsQueue;
    private _currentBroadcastActionIndex;
    private _serverBroadcastActionIndex;
    private _peers;
    private _timeOutPeers;
    private _timeOutPeersStats;
    private setData;
    protected data: string;
    players: List<Player>;
    isServer: boolean;
    get playerId(): string;
    protected constructor();
    action(data: any, playerId?: string): void;
    serverBroadcast(data: any, playerId?: string): void;
    setPlayerData(data: any, playerId?: string): void;
    protected _updateGame(event: GameStateChangedEvent, isPeer: boolean): void;
    protected _addOrUpdatePlayer(fromPlayer: Player): void;
    itIsMe(playerId: string): boolean;
    protected _playerStateChanged(event: PlayerStateChangedEvent): Promise<void>;
    protected _gameAction(event: GameActionEvent): void;
    protected _updateServerPeers(frameRate: number): void;
    protected _updatePeersStats(frameRate: number): void;
    update(frameRate: number): void;
    protected _playerLeft(event: PlayerLeftGameEvent): Promise<void>;
    private _createPeers;
    private _setServer;
    protected _playerJoined(playerId: string, playerName: string): Promise<void>;
    protected _gameSignal(event: GameSignalEvent): Promise<void>;
    private _playersPeersConnected;
    protected get playersPeersConnected(): string[];
    private _createPeer;
    protected abstract _sendGameActionAsync(options: IGameActionOptions): Promise<void>;
    protected abstract _updateGameAsync(options: IUpdateGameOptions, bad: boolean): Promise<void>;
    protected abstract _sendGameSignalAsync(options: IGameSignalOptions): Promise<void>;
    abstract startMatch(): Promise<void>;
    abstract create(lobby: LobbyManager): Promise<boolean>;
    abstract start(): Promise<boolean>;
    onStartMatch(cb: () => void): void;
    onGameUpdate(cb: (queue: IActionsQueue[]) => void): void;
    onGameServerUpdate(cb: (queue: IActionsQueue[], frameRate: number) => void): void;
    onSetServer(cb: (isServer: boolean) => void): void;
    onPlayerJoin(cb: (playerId: string, playerName: string) => void): void;
    onPlayerLeft(cb: (player: Player) => void): void;
    onUpdatePlayer(cb: (player: Player) => void): void;
    onError(cb: (error: any) => void): void;
    onAddPlayer(cb: (player: Player) => void): void;
    onAddPlayerOpponent(cb: (player: Player) => void): void;
    private _on;
    off(eventType: MultiplayerEventsEnum, callback: any): void;
    trigger(eventType: MultiplayerEventsEnum, ...args: any[]): void;
    protected delay(value: number): Promise<unknown>;
}
export declare class MultiplayerClient extends MultiplayerClientBase {
    protected _sendGameActionAsync(options: IGameActionOptions): Promise<void>;
    protected _sendGameSignalAsync(options: IGameSignalOptions): Promise<void>;
    protected _updateGameAsync(options: IUpdateGameOptions, bad: boolean): Promise<void>;
    create(lobby: LobbyManager): Promise<boolean>;
    start(): Promise<boolean>;
    startMatch(): Promise<void>;
}
export {};