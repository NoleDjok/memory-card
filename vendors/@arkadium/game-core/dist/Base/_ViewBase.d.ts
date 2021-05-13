/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { ViewBaseEmptyLogger } from "./ViewBaseEmptyLogger";
import { KeyboardManager } from "./Keyboard/KeyboardManager";
import { ChildViews } from "./ChildViews";
import { ResourcesList } from "./Resources/ResourcesList";
import { ModelWatchesList } from "./Model/ModelWatchesList";
import { IDragonBonesChildViewConfiguration, IKeyboardConfiguration, IQueueConfiguration, IResourceItem, ISoundsConfiguration, ISpriteEvent, ITest } from "./IViewConfiguration";
import { SoundManager } from "./Sound/SoundManager";
import { TestManager } from "./Tests/TestManager";
import { ResourceItem } from "./Resources/ResourceItem";
import { LocalizationManager } from "./Localization/LocalizationManager";
import { PIXIRenderer } from "../PIXIRenderer";
import { SoundsList } from "./SoundsList";
import { KeyboardItemsList } from "./Keyboard/KeyboardItemsList";
import { QueueList } from "./Queue/QueueList";
import { IViewBase } from "./IViewBase";
import { IAnimateViewChildViewConfiguration } from "./IAnimateViewConfiguration";
import { ISimpleViewChildViewConfiguration } from "./ISimpleViewConfiguration";
import { IRootBase } from "./IRootBase";
import { IParticlesViewChildViewConfiguration } from "../Particles/IParticlesViewConfiguration";
import { ModelEventsList } from "./Model/ModelEventsList";
export interface IModelWatchConfiguration {
    [key: string]: ((newValue: any, oldValue: any) => void) | string;
}
export interface IModelEventConfiguration {
    [key: string]: ((...params: any[]) => void) | string;
}
export interface _IViewBaseChildConfiguration {
    view: Function;
    model?: any;
    options?: any;
    x?: number;
    y?: number;
    config?: _IViewBaseConfiguration;
}
export interface _IViewBaseConfiguration {
    childViews?: {
        [key: string]: IDragonBonesChildViewConfiguration | IAnimateViewChildViewConfiguration | ISimpleViewChildViewConfiguration | IParticlesViewChildViewConfiguration;
    };
    modelWatch?: IModelWatchConfiguration;
    modelEvents?: IModelEventConfiguration;
    config?: _IViewBaseConfiguration;
    resources?: {
        [key: string]: IResourceItem;
    };
    sounds?: Array<ISoundsConfiguration>;
    keyboard?: IKeyboardConfiguration;
    tests?: {
        [key: string]: ITest;
    };
    queue?: IQueueConfiguration;
    onTap?: (e: ISpriteEvent) => void | string;
    onPointerDown?: (e: ISpriteEvent) => void | string;
    onPointerUp?: (e: ISpriteEvent) => void | string;
    onPointerUpOutside?: (e: ISpriteEvent) => void | string;
    onPointerOver?: (e: ISpriteEvent) => void | string;
    onPointerOut?: (e: ISpriteEvent) => void | string;
    onPointerMove?: (e: ISpriteEvent) => void | string;
}
declare abstract class _PixiBase {
    private _display;
    get display(): PIXI.Container;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get rotation(): number;
    set rotation(value: number);
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    get alpha(): number;
    set alpha(value: number);
    get visible(): boolean;
    set visible(value: boolean);
}
export declare abstract class _ViewBase extends _PixiBase implements IViewBase {
    name: string;
    private __queue;
    protected error(errorType: string, message?: any, ...optionalParams: any[]): void;
    disposed: boolean;
    private _isLandscape;
    get isLandscape(): boolean;
    set isLandscape(value: boolean);
    get isReady(): boolean;
    private _initialized;
    private _contentLoaded;
    private _resizeWidth;
    private _resizeHeight;
    private _resizeScale;
    private _parent;
    private _parentContainer;
    set parentContainer(value: PIXI.Container);
    get parentContainer(): PIXI.Container;
    $childViews: ChildViews;
    $resources: ResourcesList;
    $sounds: SoundsList;
    $modelWatches: ModelWatchesList;
    $modelEvents: ModelEventsList;
    $keyboard: KeyboardItemsList;
    $queue: QueueList;
    abstract $model: any;
    config: _IViewBaseConfiguration;
    protected abstract getConfiguration(): _IViewBaseConfiguration;
    protected abstract onInitialize(): void;
    private _soundManager;
    private _testManager;
    private _watchObject;
    private _resourcesLoader;
    private _localizationManager;
    private _keyboardManager;
    private _renderer;
    private _logger;
    private _modelEvents;
    gameBase: IRootBase;
    get soundManager(): SoundManager;
    get testManager(): TestManager;
    get localizationManager(): LocalizationManager;
    get keyboardManager(): KeyboardManager;
    get logger(): ViewBaseEmptyLogger;
    get renderer(): PIXIRenderer;
    private _locator;
    get locator(): string;
    set locator(value: string);
    get showLoadingTimeout(): number;
    set showLoadingTimeout(value: number);
    set parent(value: IViewBase);
    protected constructor(name: string);
    configure(childSpecification: _IViewBaseChildConfiguration): void;
    showLoading(visible: boolean): void;
    initialize(parent: IViewBase, container?: PIXI.Container): PIXI.Container;
    addChild(child: _IViewBaseChildConfiguration | IAnimateViewChildViewConfiguration | ISimpleViewChildViewConfiguration | IParticlesViewChildViewConfiguration | IDragonBonesChildViewConfiguration, key: string, index?: number): IViewBase;
    addChildAsync(child: _IViewBaseChildConfiguration | IAnimateViewChildViewConfiguration | ISimpleViewChildViewConfiguration | IParticlesViewChildViewConfiguration | IDragonBonesChildViewConfiguration, showLoading: boolean, key: string, index?: number): Promise<IViewBase>;
    removeChild(child: IViewBase): void;
    removeChildAsync(child: IViewBase, showLoading?: boolean): Promise<unknown>;
    removeChildByName(key: string): void;
    removeChildByNameAsync(key: string, showLoading?: boolean): Promise<unknown>;
    private _removeChild;
    private _addChild;
    private _initializeChild;
    update(frameRate: number): boolean;
    private _onUpdate;
    private _viewQueueUpdate;
    protected onUpdate(frameRate: number): void;
    protected onSetLandscape(): void;
    setLandscape(): void;
    protected onSetPortrait(): void;
    getResources(): ResourceItem[];
    contentLoaded(): void;
    protected onContentLoaded(): void;
    setPortrait(): void;
    protected onDestroy(): void;
    dispose(): void;
    protected close(): void;
    clear(): void;
    clearAsync(showLoading?: boolean): Promise<unknown>;
    resize(width: number, height: number, scale: number): void;
    protected onResize(width: number, height: number, scale: number): void;
    focus(isFocus: boolean): void;
    protected onFocus(isFocus: boolean): void;
}
export {};
