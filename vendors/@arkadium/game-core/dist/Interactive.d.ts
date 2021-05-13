/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ISupportedLanguages } from "./Base/Localization/ISupportedLanguages";
import { ScreenOrientationEnum } from "./Base/Orientation/ScreenOrientationEnum";
import { InteractiveBase } from "./Base/InteractiveBase";
import { EnvironmentTypeEnum } from "./Environment";
export interface IInteractiveOptions {
    main: typeof InteractiveBase;
    options?: any;
    version: string;
    supportLanguages?: ISupportedLanguages;
    resourcesRoot: string;
    elementId: string | HTMLElement;
    fonts?: Array<string>;
    renderOptions?: {
        noWebGL: boolean;
        backgroundColor?: number;
        clearBeforeRender?: boolean;
        transparent?: boolean;
        fps?: number;
        showStats?: boolean;
    };
    devicePixelRatio?: number;
    moduleId: string;
    orientations?: Array<{
        orientation: ScreenOrientationEnum;
        orientationEnvironment: EnvironmentTypeEnum;
    }>;
}
export declare class Interactive {
    private readonly _htmlElement;
    constructor(options: IInteractiveOptions);
    private _addWindowListeners;
}
