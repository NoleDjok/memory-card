import { WorldClock } from "../animation/WorldClock";
import { EventObject } from "../event/EventObject";
import { IEventDispatcher } from "../event/IEventDispatcher";
import { BaseObject } from "./BaseObject";
export declare const enum BinaryOffset {
    WeigthBoneCount = 0,
    WeigthFloatOffset = 1,
    WeigthBoneIndices = 2,
    GeometryVertexCount = 0,
    GeometryTriangleCount = 1,
    GeometryFloatOffset = 2,
    GeometryWeightOffset = 3,
    GeometryVertexIndices = 4,
    TimelineScale = 0,
    TimelineOffset = 1,
    TimelineKeyFrameCount = 2,
    TimelineFrameValueCount = 3,
    TimelineFrameValueOffset = 4,
    TimelineFrameOffset = 5,
    FramePosition = 0,
    FrameTweenType = 1,
    FrameTweenEasingOrCurveSampleCount = 2,
    FrameCurveSamples = 3,
    DeformVertexOffset = 0,
    DeformCount = 1,
    DeformValueCount = 2,
    DeformValueOffset = 3,
    DeformFloatOffset = 4
}
export declare const enum ArmatureType {
    Armature = 0,
    MovieClip = 1,
    Stage = 2
}
export declare const enum BoneType {
    Bone = 0,
    Surface = 1
}
export declare const enum DisplayType {
    Image = 0,
    Armature = 1,
    Mesh = 2,
    BoundingBox = 3,
    Path = 4
}
export declare const enum BoundingBoxType {
    Rectangle = 0,
    Ellipse = 1,
    Polygon = 2
}
export declare const enum ActionType {
    Play = 0,
    Frame = 10,
    Sound = 11
}
export declare const enum BlendMode {
    Normal = 0,
    Add = 1,
    Alpha = 2,
    Darken = 3,
    Difference = 4,
    Erase = 5,
    HardLight = 6,
    Invert = 7,
    Layer = 8,
    Lighten = 9,
    Multiply = 10,
    Overlay = 11,
    Screen = 12,
    Subtract = 13
}
export declare const enum TweenType {
    None = 0,
    Line = 1,
    Curve = 2,
    QuadIn = 3,
    QuadOut = 4,
    QuadInOut = 5
}
export declare const enum TimelineType {
    Action = 0,
    ZOrder = 1,
    BoneAll = 10,
    BoneTranslate = 11,
    BoneRotate = 12,
    BoneScale = 13,
    Surface = 50,
    BoneAlpha = 60,
    SlotDisplay = 20,
    SlotColor = 21,
    SlotDeform = 22,
    SlotZIndex = 23,
    SlotAlpha = 24,
    IKConstraint = 30,
    AnimationProgress = 40,
    AnimationWeight = 41,
    AnimationParameter = 42
}
export declare const enum OffsetMode {
    None = 0,
    Additive = 1,
    Override = 2
}
export declare const enum AnimationFadeOutMode {
    SameLayer = 1,
    SameGroup = 2,
    SameLayerAndGroup = 3,
    All = 4,
    Single = 5
}
export declare const enum AnimationBlendType {
    None = 0,
    E1D = 1
}
export declare const enum AnimationBlendMode {
    Additive = 0,
    Override = 1
}
export declare const enum ConstraintType {
    IK = 0,
    Path = 1
}
export declare const enum PositionMode {
    Fixed = 0,
    Percent = 1
}
export declare const enum SpacingMode {
    Length = 0,
    Fixed = 1,
    Percent = 2
}
export declare const enum RotateMode {
    Tangent = 0,
    Chain = 1,
    ChainScale = 2
}
export interface dbMap<T> {
    [key: string]: T;
}
export declare class DragonBones {
    static readonly VERSION: string;
    static yDown: boolean;
    static debug: boolean;
    static debugDraw: boolean;
    private readonly _clock;
    private readonly _events;
    private readonly _objects;
    private _eventManager;
    constructor(eventManager: IEventDispatcher);
    advanceTime(passedTime: number): void;
    bufferEvent(value: EventObject): void;
    bufferObject(object: BaseObject): void;
    get clock(): WorldClock;
    get eventManager(): IEventDispatcher;
}
