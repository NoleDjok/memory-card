/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IAbTestSettings } from "./AbTest/IAbTestSettings";
import { IAnalyticSettings } from "./Analytics/IAnalyticConfig";
import { GameBase } from "./Base/GameBase";
import { ISupportedLanguages } from "./Base/Localization/ISupportedLanguages";
import { ScreenOrientationEnum } from "./Base/Orientation/ScreenOrientationEnum";
import { EnvironmentTypeEnum } from "./Environment";
export interface IGameOptions {
    main: typeof GameBase;
    options?: any;
    version: string;
    supportLanguages: ISupportedLanguages;
    sounds: Array<{
        id: string;
        path: string;
    }>;
    soundStorageKey?: string;
    embeddedResources?: Array<any>;
    resourcesRoot: string;
    elementId: string | HTMLElement;
    fonts?: Array<string>;
    analytic?: IAnalyticSettings;
    abTest?: IAbTestSettings;
    renderOptions?: {
        noWebGL: boolean;
        backgroundColor?: number;
        clearBeforeRender?: boolean;
        transparent?: boolean;
        fps?: number;
        showStats?: boolean;
        disableContextMenu?: boolean;
        antialias?: boolean;
        roundPixels?: boolean;
    };
    devicePixelRatio?: number;
    dragonBones?: {
        armaturesPrivateScope?: boolean;
    };
    gameId: string;
    orientations?: Array<{
        orientation: ScreenOrientationEnum;
        orientationEnvironment: EnvironmentTypeEnum;
    }>;
}
export declare class Game {
    constructor(options: IGameOptions);
    private _arenaApi;
    private _addWindowListeners;
}
