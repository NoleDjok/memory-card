/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Queue } from "../Queue/Queue";
import { ResourceItem } from "./ResourceItem";
import { IRootBase } from "../IRootBase";
export declare class AnimateResourcesLoader {
    _queue: Queue;
    static loading: boolean;
    private _clock;
    private _loadingCount;
    private _progress;
    private _loadingCall;
    private _currentProgress;
    private _gameBase;
    private _gameResources;
    private _arenaApi;
    private _logger;
    constructor();
    setGameBase(gameBase: IRootBase): void;
    private _getUrl;
    update(frameRate: number): void;
    load(name: string, resourcesItems: ResourceItem[], callback: () => void): void;
}
