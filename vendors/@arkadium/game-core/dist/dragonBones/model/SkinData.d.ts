import { BaseObject } from "../core/BaseObject";
import { DisplayData } from "./DisplayData";
import { ArmatureData } from "./ArmatureData";
import { dbMap } from "../core/DragonBones";
export declare class SkinData extends BaseObject {
    static toString(): string;
    name: string;
    readonly displays: dbMap<Array<DisplayData | null>>;
    parent: ArmatureData;
    protected _onClear(): void;
    addDisplay(slotName: string, value: DisplayData | null): void;
    getDisplay(slotName: string, displayName: string): DisplayData | null;
    getDisplays(slotName: string): Array<DisplayData | null> | null;
}
