/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class Matrix {
    private readonly x;
    private readonly y;
    private readonly scaleX;
    private readonly scaleY;
    private readonly skewX;
    private readonly skewY;
    private readonly rotation;
    constructor(matrix: any);
    round(val: any): number;
    toTween(): {
        x: number;
        y: number;
        sx: number;
        sy: number;
        kx: number;
        ky: number;
        r: number;
    };
}
