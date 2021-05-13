/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ChildTimeline, Timeline } from './Timeline';
import { MovieClipContainer } from "../factories/MovieClipContainer";
import { List } from "../../Linq/Linq";
export declare class MovieClip extends MovieClipContainer {
    mode: number;
    startPosition: number;
    loop: boolean;
    currentFrame: number;
    private _labels;
    private _labelDict;
    selfAdvance: boolean;
    paused: boolean;
    actionsEnabled: boolean;
    autoReset: boolean;
    private _synchOffset;
    private _prevPos;
    private _t;
    private _framerate;
    private _duration;
    private _totalFrames;
    private _timelines;
    private _timedChildTimelines;
    private _depthSorted;
    private _actions;
    private _beforeUpdate;
    private ___updateTimeline;
    private ___setTimelinePosition;
    private ___goto;
    private ___advance;
    static INDEPENDENT: number;
    static SINGLE_FRAME: number;
    private static SYNCHED;
    private static DEFAULT_FRAMERATE;
    parentStartPosition: any;
    constructor(name: any, options: any, duration?: any, loop?: any, framerate?: any, labels?: any);
    update(tickerDeltaTime: any): void;
    get labels(): string[];
    get labelsMap(): {};
    set timelines(value: Array<Timeline>);
    set timedChildTimelines(value: Array<ChildTimeline>);
    get currentLabel(): string;
    get elapsedTime(): number;
    set elapsedTime(value: number);
    get framerate(): number;
    set framerate(value: number);
    get totalFrames(): number;
    addAction(callback: Function, startFrame: number | string): MovieClip;
    removeAction(callback: any, startFrame: any): void;
    playSound(alias: string, loop?: boolean): MovieClip;
    play(): void;
    stop(inherit?: boolean): void;
    private _stopAll;
    dispatchEvent(name: string, ...args: any[]): void;
    onDispatchEvent(name: string): void;
    gotoAndPlayAll(index: number | string, filter?: List<string>): void;
    gotoAndStopAll(index: number | string): void;
    parseMovieClipScripts(): void;
    gotoAndPlay(positionOrLabel: number | string): void;
    gotoAndStop(positionOrLabel: number | string): void;
    get parentFramerate(): number;
    advance(time: number): void;
    _goto(positionOrLabel: number | string): void;
    _reset(): void;
    _updateTimeline(): void;
    _setTimelinePosition(startFrame: any, currentFrame: any, doActions: any): void;
    destroy(destroyChildren?: any): void;
    static extend: (child: any) => any;
}
