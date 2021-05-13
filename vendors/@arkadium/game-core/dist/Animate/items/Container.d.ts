/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LibraryItem } from "./LibraryItem";
import { Instance } from "../instances/Instance";
import { MovieClipBaseFactory } from "../factories/MovieClipFactory";
import { PixiAnimateFactory } from "../factories/PixiAnimateFactory";
export declare class Container extends LibraryItem {
    private instancesMap;
    private children;
    protected addChildren: any[];
    protected _isTimeline: boolean;
    protected frames: any[];
    private sortByStartFrame;
    constructor(library: any, data: any);
    render(animate: PixiAnimateFactory): void;
    getChildren(): void;
    getContents(movieClip: MovieClipBaseFactory): void;
    flattenDepthItems(items: any): any[];
    renderChildren(movieClip: MovieClipBaseFactory): string;
    renderInstance(instance: Instance, movieClip: MovieClipBaseFactory): void;
    create(id: number): Instance;
}
