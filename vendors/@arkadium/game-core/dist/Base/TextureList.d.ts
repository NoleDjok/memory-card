/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { List } from "../Linq/Linq";
export declare class TextureItem {
    name: string;
    textureName: string;
    texture: PIXI.Texture;
}
export declare class TextureList {
    items: List<TextureItem>;
    get(name: string): PIXI.Texture;
}
