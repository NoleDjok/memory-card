/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class Peer {
    readonly id: string;
    constructor(id: string);
    private _peer;
    private _initiator;
    create(initiator: boolean, n?: number): Promise<void>;
    _checkConnect(n?: number): Promise<void>;
    signal(data: any): void;
    destroy(): void;
    send(data: any): void;
    isConnected(): any;
    received: number;
    sent: number;
    getStats(): void;
    delay(value: number): Promise<unknown>;
    private _queue;
    update(frameRate: number): void;
    private __$eventListeners_;
    on(eventType: string, callback: Function, context?: any): void;
    off(eventType: string, callback: any): void;
    trigger(eventType: string, ...args: any[]): void;
}
export declare class Peers {
    private _peers;
    dataReceivedTotalSize: number;
    dataSentTotalSize: number;
    private _dataReceivedTotalSize;
    private _dataSentTotalSize;
    getPeer(id: string): Peer;
    server(playerId: string): void;
    client(playerId: string): void;
    signal(id: string, data: any): void;
    destroy(id: string): void;
    destroyAll(): void;
    send(data: any): void;
    getStats(): void;
    isConnected(id: string): boolean;
    update(frameRate: number): void;
}
