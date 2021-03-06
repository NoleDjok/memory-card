import { BaseObject } from "../core/BaseObject";
import { AnimationState, BlendState } from "./AnimationState";
import { AnimationData } from "../model/AnimationData";
import { Armature } from "../armature/Armature";
import { AnimationConfig } from "../model/AnimationConfig";
import { AnimationFadeOutMode, dbMap } from "../core/DragonBones";
export declare class Animation extends BaseObject {
    static toString(): string;
    timeScale: number;
    private _animationDirty;
    private _inheritTimeScale;
    private readonly _animationNames;
    private readonly _animationStates;
    private readonly _animations;
    private readonly _blendStates;
    private _armature;
    private _animationConfig;
    private _lastAnimationState;
    protected _onClear(): void;
    private _fadeOut;
    init(armature: Armature): void;
    advanceTime(passedTime: number): void;
    reset(): void;
    stop(animationName?: string | null): void;
    playConfig(animationConfig: AnimationConfig): AnimationState | null;
    play(animationName?: string | null, playTimes?: number): AnimationState | null;
    fadeIn(animationName: string, fadeInTime?: number, playTimes?: number, layer?: number, group?: string | null, fadeOutMode?: AnimationFadeOutMode): AnimationState | null;
    gotoAndPlayByTime(animationName: string, time?: number, playTimes?: number): AnimationState | null;
    gotoAndPlayByFrame(animationName: string, frame?: number, playTimes?: number): AnimationState | null;
    gotoAndPlayByProgress(animationName: string, progress?: number, playTimes?: number): AnimationState | null;
    gotoAndStopByTime(animationName: string, time?: number): AnimationState | null;
    gotoAndStopByFrame(animationName: string, frame?: number): AnimationState | null;
    gotoAndStopByProgress(animationName: string, progress?: number): AnimationState | null;
    getBlendState(type: string, name: string, target: BaseObject): BlendState;
    getState(animationName: string, layer?: number): AnimationState | null;
    hasAnimation(animationName: string): boolean;
    getStates(): ReadonlyArray<AnimationState>;
    get isPlaying(): boolean;
    get isCompleted(): boolean;
    get lastAnimationName(): string;
    get animationNames(): ReadonlyArray<string>;
    get animations(): dbMap<AnimationData>;
    set animations(value: dbMap<AnimationData>);
    get animationConfig(): AnimationConfig;
    get lastAnimationState(): AnimationState | null;
}
