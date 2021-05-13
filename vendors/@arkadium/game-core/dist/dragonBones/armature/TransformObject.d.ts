import { BaseObject } from "../core/BaseObject";
import { Matrix } from "../geom/Matrix";
import { Transform } from "../geom/Transform";
import { Point } from "../geom/Point";
import { Armature } from "./Armature";
export declare abstract class TransformObject extends BaseObject {
    protected static readonly _helpMatrix: Matrix;
    protected static readonly _helpTransform: Transform;
    protected static readonly _helpPoint: Point;
    readonly globalTransformMatrix: Matrix;
    readonly global: Transform;
    readonly offset: Transform;
    origin: Transform | null;
    userData: any;
    protected _globalDirty: boolean;
    _alpha: number;
    _globalAlpha: number;
    _armature: Armature;
    protected _onClear(): void;
    updateGlobalTransform(): void;
    get armature(): Armature;
}
