/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { LibraryItem } from "../items/LibraryItem";
import { Frame } from "./Frame";
import { MovieClipBaseFactory } from "../factories/MovieClipFactory";
import { MovieClipContainer } from "../factories/MovieClipContainer";
declare class EventEmitter {
    private events;
    constructor();
    on(event: any, listener: any): () => void;
    removeListener(event: any, listener: any): void;
    emit(event: any, ...args: any[]): void;
    once(event: any, listener: any): void;
}
export declare class Instance extends EventEmitter {
    id: number;
    localName: string;
    instanceName: string;
    startFrame: number;
    endFrame: number;
    libraryItem: LibraryItem;
    initFrame: Frame;
    placeAfter: number;
    maskTill: number;
    frames: any;
    loop: boolean;
    renderable: boolean;
    isAnimated: boolean;
    constructor(libraryItem: LibraryItem, id: number);
    addToFrame(frameIndex: any, command: any): void;
    getDuration(totalFrames: any): number;
    getFrames(): any;
    equals(a: any, b: any): boolean;
    buildContent(movieClip: MovieClipBaseFactory, isMask?: boolean, staticMask?: any): MovieClipContainer;
    render(movieClip: MovieClipBaseFactory): void;
}
export {};
