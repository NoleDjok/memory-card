/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { IEventConfiguration } from "./IViewConfiguration";
import { PixiAnimateLoader } from "../Animate/PixiAnimateLoader";
import { _IViewBaseChildConfiguration, _IViewBaseConfiguration } from "./_ViewBase";
import { ISpritesConfiguration } from "./IDragonBonesViewConfiguration";
export interface IAnimateViewContentConfiguration {
    factory: PixiAnimateLoader;
    _meta: {
        width: number;
        height: number;
        spritesheets?: {
            bitmaps: Array<{
                file: string;
                data: {
                    frames: {
                        [key: string]: {
                            frame: {
                                x: number;
                                y: number;
                                w: number;
                                h: number;
                            };
                            sourceSize: {
                                w: number;
                                h: number;
                            };
                        };
                    };
                    meta: {
                        app: string;
                        scale: number;
                        image: string;
                        size: {
                            w: number;
                            h: number;
                        };
                    };
                };
            }>;
            shapes: Array<{
                file: string;
                data: {
                    frames: {
                        [key: string]: {
                            frame: {
                                x: number;
                                y: number;
                                w: number;
                                h: number;
                            };
                            sourceSize: {
                                w: number;
                                h: number;
                            };
                        };
                    };
                    meta: {
                        app: string;
                        scale: number;
                        image: string;
                        size: {
                            w: number;
                            h: number;
                        };
                    };
                };
            }>;
        };
    };
}
export interface IAnimateViewChildViewConfiguration extends _IViewBaseChildConfiguration {
    movieClipName?: string;
    symbolName?: string;
    animateContent?: IAnimateViewContentConfiguration;
    config?: IAnimateViewConfiguration;
}
export interface IAnimateViewConfiguration extends _IViewBaseConfiguration {
    movieClipName?: string;
    symbolName?: string;
    animateContent?: IAnimateViewContentConfiguration;
    sprites?: ISpritesConfiguration;
    events?: Array<IEventConfiguration>;
    config?: IAnimateViewConfiguration;
}
