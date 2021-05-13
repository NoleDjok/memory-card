/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IViewBaseLogger } from "./Base/IViewBaseLogger";
import { GameBase } from "./Base/GameBase";
import { Container } from "./IoC/typescript-ioc";
import { ResourcesLoader } from "./Base/Resources/ResourcesLoader";
import { LocalizationManager } from "./Base/Localization/LocalizationManager";
import { KeyboardManager } from "./Base/Keyboard/KeyboardManager";
import { Random } from "./Utils/Rndm";
import { StorageManager } from "./Base/Storage/StorageManager";
import { SoundManager } from "./Base/Sound/SoundManager";
import { DevicePixelRatio } from "./DevicePixelRatio";
import { GameResources } from "./GameResources";
import { PIXIRenderer } from "./PIXIRenderer";
export declare class AutotestLogger implements IViewBaseLogger {
    private static _logIndex;
    private static _logList;
    private static _ignoreMessageList;
    static addMessageToIgnoreList(viewName: string, messageType?: string, message?: string): void;
    private _current;
    log(viewName: string, messageType: string, message?: any, ...optionalParams: any[]): void;
    warn(msg: string, viewName: string, messageType: string, message?: any, ...optionalParams: any[]): void;
    error(viewName: string, errorType: string, message?: any, ...optionalParams: any[]): void;
}
export interface IDebugOptions {
    htmlElement: HTMLElement;
    gameRun: () => GameBase;
}
export declare class DebugEmptyLogger implements IViewBaseLogger {
    private _innerLogger;
    log(viewName: string, messageType: string, message?: any, ...optionalParams: any[]): void;
    error(viewName: string, messageType: string, message?: any, ...optionalParams: any[]): void;
    warn(msg: string, viewName: string, messageType: string, message?: any, ...optionalParams: any[]): void;
    setInnerLogger(innerLogger: IViewBaseLogger): void;
}
export declare class Debug {
    static instancesList: Array<Debug>;
    $root: GameBase;
    version: any;
    gameId: any;
    static pages: any[];
    enabled: boolean;
    ready: boolean;
    private _gameRun;
    private _htmlElement;
    static container: any;
    get htmlElement(): HTMLElement;
    get resourcesLoader(): ResourcesLoader;
    get devicePixelRatio(): DevicePixelRatio;
    get localizationManager(): LocalizationManager;
    get resourcesRoot(): GameResources;
    get renderer(): PIXIRenderer;
    get keyboardManager(): KeyboardManager;
    get random(): Random;
    get storageManager(): StorageManager;
    get soundManager(): SoundManager;
    get logger(): IViewBaseLogger;
    static addMessageToIgnoreList(viewName: string, messageType?: string, message?: string): void;
    container: Container;
    constructor();
    init(window: any, options: IDebugOptions): void;
    bindStorageManager(storageManager: StorageManager): void;
    setLogger(logger: IViewBaseLogger): void;
    blockSpritesEvents(toggle: boolean): void;
    play(): void;
    pause(): void;
}
