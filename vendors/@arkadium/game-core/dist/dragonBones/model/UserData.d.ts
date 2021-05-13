import { BaseObject } from "../core/BaseObject";
import { ActionType } from "../core/DragonBones";
import { BoneData, SlotData } from "./ArmatureData";
export declare class UserData extends BaseObject {
    static toString(): string;
    readonly ints: Array<number>;
    readonly floats: Array<number>;
    readonly strings: Array<string>;
    protected _onClear(): void;
    addInt(value: number): void;
    addFloat(value: number): void;
    addString(value: string): void;
    getInt(index?: number): number;
    getFloat(index?: number): number;
    getString(index?: number): string;
}
export declare class ActionData extends BaseObject {
    static toString(): string;
    type: ActionType;
    name: string;
    bone: BoneData | null;
    slot: SlotData | null;
    data: UserData | null;
    protected _onClear(): void;
}
