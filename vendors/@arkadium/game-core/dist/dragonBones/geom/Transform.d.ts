import { Matrix } from "./Matrix";
export declare class Transform {
    static readonly PI: number;
    static readonly PI_D: number;
    static readonly PI_H: number;
    static readonly PI_Q: number;
    static readonly RAD_DEG: number;
    static readonly DEG_RAD: number;
    static normalizeRadian(value: number): number;
    x: number;
    y: number;
    skew: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    constructor(x?: number, y?: number, skew?: number, rotation?: number, scaleX?: number, scaleY?: number);
    toString(): string;
    copyFrom(value: Transform): Transform;
    identity(): Transform;
    add(value: Transform): Transform;
    minus(value: Transform): Transform;
    fromMatrix(matrix: Matrix): Transform;
    toMatrix(matrix: Matrix): Transform;
}
