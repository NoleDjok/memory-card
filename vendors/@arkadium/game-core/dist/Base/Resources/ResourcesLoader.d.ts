/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { Queue } from "../Queue/Queue";
import { ResourceItem } from "./ResourceItem";
import { IRootBase } from "../IRootBase";
export declare class ResourcesLoader {
    _queue: Queue;
    static loading: boolean;
    static errors: Array<string>;
    private _clock;
    private _loadingCount;
    private _progress;
    private _loadingCall;
    private _currentProgress;
    private _gameBase;
    private _gameResources;
    private _arenaApi;
    private _logger;
    static loader: PIXI.loaders.Loader;
    constructor();
    setGameBase(gameBase: IRootBase): void;
    private _getUrl;
    update(frameRate: number): void;
    load(name: string, resourcesItems: ResourceItem[], callback: () => void): void;
}
