/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { Tween } from './Tween';
export declare class ChildTimeline extends Array {
    targetIndex: number;
    constructor(target: number);
}
export declare class Timeline extends Array {
    targetIndex: number;
    _currentProps: {};
    addTween: (properties: any, startFrame: any, duration: any, ease: any) => void;
    addKeyframe: (properties: any, startFrame: any) => Tween;
    extendLastFrame: (endFrame: any) => void;
    getPropFromShorthand: (prop: any) => any;
    constructor(target: number);
}
