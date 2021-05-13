import { BaseObject } from "../core/BaseObject";
import { ArmatureData } from "./ArmatureData";
import { UserData } from "./UserData";
import { dbMap } from "../core/DragonBones";
export declare class DragonBonesData extends BaseObject {
    static toString(): string;
    autoSearch: boolean;
    frameRate: number;
    version: string;
    name: string;
    stage: ArmatureData | null;
    readonly frameIndices: Array<number>;
    readonly cachedFrames: Array<number>;
    readonly armatureNames: Array<string>;
    readonly armatures: dbMap<ArmatureData>;
    binary: ArrayBuffer;
    intArray: Int16Array;
    floatArray: Float32Array;
    frameIntArray: Int16Array;
    frameFloatArray: Float32Array;
    frameArray: Int16Array;
    timelineArray: Uint16Array;
    colorArray: Int16Array;
    userData: UserData | null;
    protected _onClear(): void;
    addArmature(value: ArmatureData): void;
    getArmature(armatureName: string): ArmatureData | null;
}
