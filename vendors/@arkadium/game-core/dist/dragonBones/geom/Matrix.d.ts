export declare class Matrix {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    toString(): string;
    copyFrom(value: Matrix): Matrix;
    copyFromArray(value: Array<number>, offset?: number): Matrix;
    identity(): Matrix;
    concat(value: Matrix): Matrix;
    invert(): Matrix;
    transformPoint(x: number, y: number, result: {
        x: number;
        y: number;
    }, delta?: boolean): void;
    transformRectangle(rectangle: {
        x: number;
        y: number;
        width: number;
        height: number;
    }, delta?: boolean): void;
}
