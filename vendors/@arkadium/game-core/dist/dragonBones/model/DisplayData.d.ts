import { BaseObject } from "../core/BaseObject";
import { ArmatureData, BoneData } from "./ArmatureData";
import { DisplayType } from "../core/DragonBones";
import { BoundingBoxData } from "./BoundingBoxData";
import { TextureData } from "./TextureAtlasData";
import { ActionData } from "./UserData";
import { Point } from "../geom/Point";
import { SkinData } from "./SkinData";
import { Transform } from "../geom/Transform";
import { DragonBonesData } from "./DragonBonesData";
export declare class GeometryData {
    isShared: boolean;
    inheritDeform: boolean;
    offset: number;
    data: DragonBonesData;
    weight: WeightData | null;
    clear(): void;
    shareFrom(value: GeometryData): void;
    get vertexCount(): number;
    get triangleCount(): number;
}
export declare abstract class DisplayData extends BaseObject {
    type: DisplayType;
    name: string;
    path: string;
    readonly transform: Transform;
    parent: SkinData;
    protected _onClear(): void;
}
export declare class ImageDisplayData extends DisplayData {
    static toString(): string;
    readonly pivot: Point;
    texture: TextureData | null;
    protected _onClear(): void;
}
export declare class ArmatureDisplayData extends DisplayData {
    static toString(): string;
    inheritAnimation: boolean;
    readonly actions: Array<ActionData>;
    armature: ArmatureData | null;
    protected _onClear(): void;
    addAction(value: ActionData): void;
}
export declare class MeshDisplayData extends DisplayData {
    static toString(): string;
    readonly geometry: GeometryData;
    texture: TextureData | null;
    protected _onClear(): void;
}
export declare class BoundingBoxDisplayData extends DisplayData {
    static toString(): string;
    boundingBox: BoundingBoxData | null;
    protected _onClear(): void;
}
export declare class PathDisplayData extends DisplayData {
    static toString(): string;
    closed: boolean;
    constantSpeed: boolean;
    readonly geometry: GeometryData;
    readonly curveLengths: Array<number>;
    protected _onClear(): void;
}
export declare class WeightData extends BaseObject {
    static toString(): string;
    count: number;
    offset: number;
    readonly bones: Array<BoneData>;
    protected _onClear(): void;
    addBone(value: BoneData): void;
}
