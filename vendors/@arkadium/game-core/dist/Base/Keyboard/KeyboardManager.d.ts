/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
export declare class KeyboardManager extends PIXI.utils.EventEmitter {
    private isEnabled;
    private _pressedKeys;
    private _releasedKeys;
    private _downKeys;
    private _hotKeys;
    private _preventDefaultKeys;
    constructor();
    enable(): void;
    _enableEvents(): void;
    disable(): void;
    _disableEvents(): void;
    setPreventDefault(key: string, value?: boolean): void;
    _onKeyDown(evt: any): void;
    _onKeyUp(evt: any): void;
    isDown(key: number): boolean;
    isPressed(key: number): boolean;
    isReleased(key: number): boolean;
    update(): void;
    getHotKey(key: any): any;
    removeHotKey(key: any): void;
}
