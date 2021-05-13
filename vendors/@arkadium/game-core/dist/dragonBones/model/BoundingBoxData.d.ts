import { BoundingBoxType } from "../core/DragonBones";
import { BaseObject } from "../core/BaseObject";
export declare abstract class BoundingBoxData extends BaseObject {
    type: BoundingBoxType;
    color: number;
    width: number;
    height: number;
    protected _onClear(): void;
    abstract containsPoint(pX: number, pY: number): boolean;
    abstract intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA: {
        x: number;
        y: number;
    } | null, intersectionPointB: {
        x: number;
        y: number;
    } | null, normalRadians: {
        x: number;
        y: number;
    } | null): number;
}
export declare class RectangleBoundingBoxData extends BoundingBoxData {
    static toString(): string;
    private static _computeOutCode;
    static rectangleIntersectsSegment(xA: number, yA: number, xB: number, yB: number, xMin: number, yMin: number, xMax: number, yMax: number, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
    protected _onClear(): void;
    containsPoint(pX: number, pY: number): boolean;
    intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
}
export declare class EllipseBoundingBoxData extends BoundingBoxData {
    static toString(): string;
    static ellipseIntersectsSegment(xA: number, yA: number, xB: number, yB: number, xC: number, yC: number, widthH: number, heightH: number, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
    protected _onClear(): void;
    containsPoint(pX: number, pY: number): boolean;
    intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
}
export declare class PolygonBoundingBoxData extends BoundingBoxData {
    static toString(): string;
    static polygonIntersectsSegment(xA: number, yA: number, xB: number, yB: number, vertices: Array<number>, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
    x: number;
    y: number;
    readonly vertices: Array<number>;
    protected _onClear(): void;
    containsPoint(pX: number, pY: number): boolean;
    intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
        x: number;
        y: number;
    } | null, intersectionPointB?: {
        x: number;
        y: number;
    } | null, normalRadians?: {
        x: number;
        y: number;
    } | null): number;
}
