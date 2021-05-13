/// <reference types="pixi.js" />
import { Armature } from "../armature/Armature";
import { EventStringType } from "../event/IEventDispatcher";
import { EventObject } from "../event/EventObject";
import { IArmatureProxy } from "../armature/IArmatureProxy";
import { Animation } from "../animation/Animation";
export declare class PixiArmatureDisplay extends PIXI.Sprite implements IArmatureProxy {
    debugDraw: boolean;
    private _debugDraw;
    private _armature;
    private _debugDrawer;
    dbInit(armature: Armature): void;
    dbClear(): void;
    dbUpdate(): void;
    dispose(disposeProxy?: boolean): void;
    destroy(): void;
    dispatchDBEvent(type: EventStringType, eventObject: EventObject): void;
    hasDBEventListener(type: EventStringType): boolean;
    addDBEventListener(type: EventStringType, listener: (event: EventObject) => void, target: any): void;
    removeDBEventListener(type: EventStringType, listener: (event: EventObject) => void, target: any): void;
    get armature(): Armature;
    get animation(): Animation;
}
