import { BaseObject } from "../core/BaseObject";
import { ColorTransform } from "../geom/ColorTransform";
import { ArmatureType, BlendMode, BoneType, dbMap } from "../core/DragonBones";
import { ActionData, UserData } from "./UserData";
import { GeometryData, MeshDisplayData } from "./DisplayData";
import { Transform } from "../geom/Transform";
import { AnimationData } from "./AnimationData";
import { SkinData } from "./SkinData";
import { ConstraintData } from "./ConstraintData";
import { Matrix } from "../geom/Matrix";
import { DragonBonesData } from "./DragonBonesData";
import { CanvasData } from "./CanvasData";
import { Rectangle } from "../geom/Rectangle";
export declare class ArmatureData extends BaseObject {
    static toString(): string;
    type: ArmatureType;
    frameRate: number;
    cacheFrameRate: number;
    scale: number;
    name: string;
    readonly aabb: Rectangle;
    readonly animationNames: Array<string>;
    readonly sortedBones: Array<BoneData>;
    readonly sortedSlots: Array<SlotData>;
    readonly defaultActions: Array<ActionData>;
    readonly actions: Array<ActionData>;
    readonly bones: dbMap<BoneData>;
    readonly slots: dbMap<SlotData>;
    readonly constraints: dbMap<ConstraintData>;
    readonly skins: dbMap<SkinData>;
    readonly animations: dbMap<AnimationData>;
    defaultSkin: SkinData | null;
    defaultAnimation: AnimationData | null;
    canvas: CanvasData | null;
    userData: UserData | null;
    parent: DragonBonesData;
    protected _onClear(): void;
    sortBones(): void;
    cacheFrames(frameRate: number): void;
    setCacheFrame(globalTransformMatrix: Matrix, transform: Transform): number;
    getCacheFrame(globalTransformMatrix: Matrix, transform: Transform, arrayOffset: number): void;
    addBone(value: BoneData): void;
    addSlot(value: SlotData): void;
    addConstraint(value: ConstraintData): void;
    addSkin(value: SkinData): void;
    addAnimation(value: AnimationData): void;
    addAction(value: ActionData, isDefault: boolean): void;
    getBone(boneName: string): BoneData | null;
    getSlot(slotName: string): SlotData | null;
    getConstraint(constraintName: string): ConstraintData | null;
    getSkin(skinName: string): SkinData | null;
    getMesh(skinName: string, slotName: string, meshName: string): MeshDisplayData | null;
    getAnimation(animationName: string): AnimationData | null;
}
export declare class BoneData extends BaseObject {
    static toString(): string;
    inheritTranslation: boolean;
    inheritRotation: boolean;
    inheritScale: boolean;
    inheritReflection: boolean;
    type: BoneType;
    length: number;
    alpha: number;
    name: string;
    readonly transform: Transform;
    userData: UserData | null;
    parent: BoneData | null;
    protected _onClear(): void;
}
export declare class SurfaceData extends BoneData {
    static toString(): string;
    segmentX: number;
    segmentY: number;
    readonly geometry: GeometryData;
    protected _onClear(): void;
}
export declare class SlotData extends BaseObject {
    static readonly DEFAULT_COLOR: ColorTransform;
    static createColor(): ColorTransform;
    static toString(): string;
    blendMode: BlendMode;
    displayIndex: number;
    zOrder: number;
    zIndex: number;
    alpha: number;
    name: string;
    color: ColorTransform;
    userData: UserData | null;
    parent: BoneData;
    protected _onClear(): void;
}