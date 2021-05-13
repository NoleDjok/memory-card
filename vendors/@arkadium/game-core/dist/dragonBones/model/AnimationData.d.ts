import { BaseObject } from "../core/BaseObject";
import { AnimationBlendType, dbMap, TimelineType } from "../core/DragonBones";
import { ArmatureData } from "./ArmatureData";
export declare class AnimationData extends BaseObject {
    static toString(): string;
    frameIntOffset: number;
    frameFloatOffset: number;
    frameOffset: number;
    blendType: AnimationBlendType;
    frameCount: number;
    playTimes: number;
    duration: number;
    scale: number;
    fadeInTime: number;
    cacheFrameRate: number;
    name: string;
    readonly cachedFrames: Array<boolean>;
    readonly boneTimelines: dbMap<Array<TimelineData>>;
    readonly slotTimelines: dbMap<Array<TimelineData>>;
    readonly constraintTimelines: dbMap<Array<TimelineData>>;
    readonly animationTimelines: dbMap<Array<TimelineData>>;
    readonly boneCachedFrameIndices: dbMap<Array<number>>;
    readonly slotCachedFrameIndices: dbMap<Array<number>>;
    actionTimeline: TimelineData | null;
    zOrderTimeline: TimelineData | null;
    parent: ArmatureData;
    protected _onClear(): void;
    cacheFrames(frameRate: number): void;
    addBoneTimeline(timelineName: string, timeline: TimelineData): void;
    addSlotTimeline(timelineName: string, timeline: TimelineData): void;
    addConstraintTimeline(timelineName: string, timeline: TimelineData): void;
    addAnimationTimeline(timelineName: string, timeline: TimelineData): void;
    getBoneTimelines(timelineName: string): Array<TimelineData> | null;
    getSlotTimelines(timelineName: string): Array<TimelineData> | null;
    getConstraintTimelines(timelineName: string): Array<TimelineData> | null;
    getAnimationTimelines(timelineName: string): Array<TimelineData> | null;
    getBoneCachedFrameIndices(boneName: string): Array<number> | null;
    getSlotCachedFrameIndices(slotName: string): Array<number> | null;
}
export declare class TimelineData extends BaseObject {
    static toString(): string;
    type: TimelineType;
    offset: number;
    frameIndicesOffset: number;
    protected _onClear(): void;
}
export declare class AnimationTimelineData extends TimelineData {
    static toString(): string;
    x: number;
    y: number;
    protected _onClear(): void;
}
