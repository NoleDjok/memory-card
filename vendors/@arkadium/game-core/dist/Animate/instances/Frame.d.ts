/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Rectangle } from "../data/Rectangle";
import { MovieClipChildFactory } from "../factories/MovieClipFactory";
export declare class Frame {
    static DEFAULT_VALUES: {
        c: number[];
        a: number;
        r: number;
        x: number;
        y: number;
        sx: number;
        sy: number;
        kx: number;
        ky: number;
        v: number;
        placeAfter: any;
        maskTill: any;
    };
    a: number;
    t: number | string;
    c: number[];
    x: number;
    y: number;
    sx: number;
    sy: number;
    kx: number;
    ky: number;
    r: number;
    v: number;
    bounds: Rectangle;
    placeAfter: number;
    maskTill: number;
    constructor();
    addCommand(command: any): void;
    get hasValues(): boolean;
    get validKeys(): any[];
    clean(usedProperties: any): void;
    render(childSetup: MovieClipChildFactory): void;
    isDefaultColorTransform(c: any): boolean;
    toTransform(): number[];
    toJSON(): {};
    toString(): string;
}
