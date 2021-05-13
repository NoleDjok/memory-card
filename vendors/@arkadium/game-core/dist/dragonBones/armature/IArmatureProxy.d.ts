import { Armature } from "./Armature";
import { IEventDispatcher } from "../event/IEventDispatcher";
import { Animation } from "../animation/Animation";
export interface IArmatureProxy extends IEventDispatcher {
    dbInit(armature: Armature): void;
    dbClear(): void;
    dbUpdate(): void;
    dispose(disposeProxy: boolean): void;
    readonly armature: Armature;
    readonly animation: Animation;
}
