export declare class Simplify {
    constructor();
    getSqDist(p1: any, p2: any): number;
    getSqSegDist(p: any, p1: any, p2: any): number;
    simplifyRadialDist(points: any, sqTolerance: any): any[];
    simplifyDPStep(points: any, first: any, last: any, sqTolerance: any, simplified: any): void;
    simplifyDouglasPeucker(points: any, sqTolerance: any): any[];
    simplify(points: Array<{
        x: number;
        y: number;
    }>, tolerance: number, highestQuality: boolean): {
        x: number;
        y: number;
    }[];
}
