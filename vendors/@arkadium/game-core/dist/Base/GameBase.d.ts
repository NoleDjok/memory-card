/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { KeyboardManager } from "./Keyboard/KeyboardManager";
import { ChildViews } from "./ChildViews";
import { IPreloadersConfiguration } from "./IViewConfiguration";
import { LocalizationManager } from "./Localization/LocalizationManager";
import { TestManager } from "./Tests/TestManager";
import { ScreenOrientationEnum } from "./Orientation/ScreenOrientationEnum";
import { PIXIRenderer } from "../PIXIRenderer";
import { IRootBase } from "./IRootBase";
import { ViewBaseEmptyLogger } from "./ViewBaseEmptyLogger";
import { _IViewBaseConfiguration } from "./_ViewBase";
import { SoundManager } from "./Sound/SoundManager";
import { SimpleLoadingViewBase } from "./SimpleViewBase";
export interface IGameBaseConfiguration extends _IViewBaseConfiguration {
}
export declare abstract class GameBase implements IRootBase {
    private _preloadLoaded;
    private _manualResize;
    version: any;
    gameId: any;
    static SIZE_LANDSCAPE: PIXI.Point;
    private _contentLoaded;
    private readonly _resourcesLoader;
    private readonly _devicePixelRatio;
    private readonly _localizationManager;
    private readonly _arenaApi;
    private readonly _resourcesRoot;
    private readonly _testManager;
    private readonly _renderer;
    private readonly _htmlElement;
    private readonly _keyboardManager;
    private readonly _soundManager;
    private readonly _logger;
    protected get soundManager(): SoundManager;
    protected get testManager(): TestManager;
    protected get localizationManager(): LocalizationManager;
    protected get keyboardManager(): KeyboardManager;
    protected get logger(): ViewBaseEmptyLogger;
    protected get renderer(): PIXIRenderer;
    protected get shadowUpdateEnabled(): boolean;
    protected set shadowUpdateEnabled(value: boolean);
    private _initialized;
    protected _container: PIXI.Container;
    protected _width: number;
    protected _height: number;
    protected _scaleFactor: number;
    protected _layers: Array<PIXI.Container>;
    private _orientation;
    set orientation(value: ScreenOrientationEnum);
    private _clientWidth;
    private _clientHeight;
    private _resizeDelay;
    private _tweenResizeDelay;
    protected _assetScale: number;
    private _scale;
    graphHigh: boolean;
    private _isLandscape;
    get width(): number;
    get height(): number;
    get scaleFactor(): number;
    get isLandscape(): boolean;
    private _size;
    private config;
    private _preloaderchildViews;
    protected $childViews: ChildViews;
    constructor(options?: any);
    protected abstract getConfiguration(): IGameBaseConfiguration;
    protected getPreloadersConfiguration(): IPreloadersConfiguration;
    protected abstract onInitialize(): void;
    protected abstract onSetLandscape(): void;
    protected abstract onSetPortrait(): void;
    protected onUpdate(frameRate: number): void;
    protected onCreate(): void;
    protected preloaderConfigure(): any;
    protected configure(): void;
    protected initialize(): void;
    showLoadingTimeout: number;
    private __showLoadingTimeout;
    showLoading(visible: boolean): void;
    setLoading(progress: number): void;
    create(): Promise<unknown>;
    private _showStage;
    private _createStage;
    private _initShadowUpdate;
    private __shadowUpdateEnabled;
    private __shadowUpdateTime;
    private __shadowUpdateTime2;
    private __getUtcNow2;
    private __getUtcFromLocal2;
    dispose(): void;
    focus(isFocus: boolean): void;
    protected onFocus(isFocus: boolean): void;
    private update;
    private _queueUpdate;
    stop: boolean;
    frameCount: number;
    currentFps: number;
    private last_time;
    fpsInterval: any;
    startTime: any;
    now: any;
    then: any;
    elapsed: any;
    play(): void;
    pause(): void;
    private __getUtcNow;
    private __getUtcFromLocal;
    private _animate;
    private _rendererResize;
    rendererResize(force?: boolean): void;
    protected setRotatedPortrait(width: any, height: any): void;
    protected setPortrait(width: any, height: any): void;
    protected setLandscape(width: any, height: any): void;
    protected clear(): void;
    protected resize(): void;
    getLayer(level: number): PIXI.Container;
    protected contentLoaded(): void;
    protected onContentLoaded(): void;
    protected defineAssetScale(): number;
    private _addChild;
    private _innitializeChild;
    removeChildByName(childName: string): void;
    private _removeChild;
    private addCommonTests;
}
export declare class DefaultLoadingView extends SimpleLoadingViewBase {
    private _options;
    $model: any;
    constructor(_options: any);
    protected getConfiguration(): {};
    protected onInitialize(): void;
    protected onSetLandscape(): void;
    protected onSetPortrait(): void;
    protected onUpdate(frameRate: number): void;
    onLoadingProgress(progress: number): void;
    onHide(): void;
    onShow(): void;
}
