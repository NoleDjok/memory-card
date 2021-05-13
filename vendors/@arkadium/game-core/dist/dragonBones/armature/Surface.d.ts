import { Bone } from "./Bone";
import { Matrix } from "../geom/Matrix";
import { SurfaceData } from "../model/ArmatureData";
import { Armature } from "./Armature";
export declare class Surface extends Bone {
    static toString(): string;
    private _dX;
    private _dY;
    private _k;
    private _kX;
    private _kY;
    readonly _vertices: Array<number>;
    readonly _deformVertices: Array<number>;
    private readonly _hullCache;
    private readonly _matrixCahce;
    _bone: Bone | null;
    protected _onClear(): void;
    private _getAffineTransform;
    private _updateVertices;
    protected _updateGlobalTransformMatrix(isCache: boolean): void;
    _getGlobalTransformMatrix(x: number, y: number): Matrix;
    init(surfaceData: SurfaceData, armatureValue: Armature): void;
    update(cacheFrameIndex: number): void;
}
