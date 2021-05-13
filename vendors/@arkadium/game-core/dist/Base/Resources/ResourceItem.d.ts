/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="pixi.js" />
import { IResourceItem } from "../IViewConfiguration";
export declare enum ResourceItemType {
    dragonBonesProject = 1,
    threeJsTexture = 2,
    threeJsCubeTexture = 3,
    image = 4,
    json = 5,
    font = 6,
    pixiTexture = 7,
    pixiAnimate = 8
}
export declare class ResourceItem implements IResourceItem {
    name: string;
    resources: any | ResourceItem[];
    type?: ResourceItemType;
    temporary: boolean;
    dragonBonesData?: any;
    dragonBonesTexturesData?: any;
    threeTexture: THREE.Texture;
    threeCubeTexture: THREE.CubeTexture;
    pixiTexture: PIXI.Texture;
    loaded: boolean;
    requested: boolean;
    constructor(name: string, resources: any | ResourceItem[], type?: ResourceItemType, temporary?: boolean);
    getResource(): PIXI.loaders.Resource;
    getTexture(): PIXI.Texture;
    complete: (loader: PIXI.loaders.Loader, object: Array<PIXI.loaders.Resource>) => void;
}
export declare class DragonBonesResourceItem extends ResourceItem {
    name: string;
    resource: string;
    constructor(name: string, resource: string);
}
export declare class FontResourceItem extends ResourceItem {
    fontName: string;
    constructor(fontName: string);
}
export declare class JsonResourceItem extends ResourceItem {
    name: string;
    resource: string;
    constructor(name: string, resource: string);
}
export declare class ImageResourceItem extends ResourceItem {
    name: string;
    resource: string;
    constructor(name: string, resource: string);
}
export declare class PixiTextureResourceItem extends ResourceItem {
    name: string;
    resource: string;
    constructor(name: string, resource: string);
}
