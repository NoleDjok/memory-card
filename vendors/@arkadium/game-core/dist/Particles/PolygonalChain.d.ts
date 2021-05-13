/// <reference types="pixi.js" />
export interface BasicPoint {
    x: number;
    y: number;
}
export interface Segment {
    p1: BasicPoint;
    p2: BasicPoint;
    l: number;
}
export declare class PolygonalChain {
    private segments;
    private totalLength;
    private countingLengths;
    constructor(data: BasicPoint[] | BasicPoint[][]);
    private init;
    getRandomPoint(out: PIXI.Point): void;
}
