/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../../Linq/Linq";
import { IKeyboardConfiguration } from "../IViewConfiguration";
import { IViewBase } from "../IViewBase";
import { KeyboardManager } from "./KeyboardManager";
import { IViewBaseLogger } from "../IViewBaseLogger";
export declare class KeyboardItem {
    name: string;
    event: (key: any) => void;
    key: number;
    constructor(name: string, event: (key: any) => void, key: number);
}
export declare class KeyboardItemsList {
    private _keyboardManager;
    private _logger;
    items: List<KeyboardItem>;
    get(name: string): KeyboardItem;
    [key: string]: KeyboardItem | List<KeyboardItem> | Function;
    constructor(_keyboardManager: KeyboardManager, _logger: IViewBaseLogger);
    initialize(keyboard: IKeyboardConfiguration, controller: IViewBase): void;
    private _addKeyboardItem;
    dispose(): void;
}
