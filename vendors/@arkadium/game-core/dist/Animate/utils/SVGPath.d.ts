export declare class PointCurveShape {
    private points;
    constructor();
    current(): any;
    addPoint(x: any, y: any): void;
    setLeft(x: any, y: any): void;
    setRight(x: any, y: any): void;
    toSVG(): string;
}
export declare class Outline {
    private curveshapes;
    private current;
    bounds: {
        xMin: number;
        yMin: number;
        xMax: number;
        yMax: number;
    };
    constructor();
    getShapes(): any;
    getShape(index: any): any;
    toSVG(): string;
    startGroup(): void;
    startShape(): void;
    addPoint(x: any, y: any): void;
    updateBounds(xMin: any, yMin: any, xMax: any, yMax: any): void;
    setLeftControl(x: any, y: any): void;
    setRightControl(x: any, y: any): void;
    closeShape(): void;
    closeGroup(): void;
}
export declare class SVGParser {
    receiver: Outline;
    constructor(receiver: any);
    getReceiver(): Outline;
    parse(path: any, xoffset?: any, yoffset?: any): void;
    private getQuadraticCurveBounds;
}
export declare class SVGPath {
    static parse(pathString: any): Outline;
}
