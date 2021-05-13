/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { MovieClipBaseFactory } from "./MovieClipFactory";
export declare class PixiAnimateFactory {
    __assets: any;
    __spritesheets: Array<{
        spritesheet?: PIXI.Spritesheet;
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
    __shapesheets: Array<{
        spritesheet?: PIXI.Spritesheet;
        data: {
            frames: {
                [key: string]: {
                    frame: {
                        x: number;
                        y: number;
                        w: number;
                        h: number;
                    };
                    offset: {
                        x: number;
                        y: number;
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
    __name: string;
    [key: string]: MovieClipBaseFactory;
}
