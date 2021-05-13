/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Instance } from "../instances/Instance";
import { Library } from "../Library";
export declare class LibraryItem {
    name: string;
    id: number;
    txt: string;
    assetId: number;
    paths: PathItem[];
    spritesheetId: number;
    behaviour: {
        lineMode: string;
    };
    protected library: Library;
    constructor(library: any, data: any);
    create(id: any): Instance;
}
export interface PathItem {
    d: any[];
    stroke: boolean;
    alpha?: number;
    color?: string;
    thickness?: number;
    linecap?: string;
    linejoin?: number;
    miterLimit?: number;
    linearGradient?: any;
    radialGradient?: any;
    image?: any;
}
