/// <reference types="pixi.js" />
import { PropertyNode, ValueStep } from "./PropertyNode";
export declare function GetTextureFromString(s: string): PIXI.Texture;
export interface Color {
    r: number;
    g: number;
    b: number;
    a?: number;
}
export interface EaseSegment {
    cp: number;
    s: number;
    e: number;
}
export declare type SimpleEase = (time: number) => number;
export declare namespace ParticleUtils {
    let verbose: boolean;
    const DEG_TO_RADS: number;
    function rotatePoint(angle: number, p: PIXI.Point): void;
    function combineRGBComponents(r: number, g: number, b: number): number;
    function normalize(point: PIXI.Point): void;
    function scaleBy(point: PIXI.Point, value: number): void;
    function length(point: PIXI.Point): number;
    function hexToRGB(color: string, output?: Color): Color;
    function generateEase(segments: EaseSegment[]): SimpleEase;
    function getBlendMode(name: string): number;
    function createSteppedGradient(list: ValueStep<string>[], numSteps?: number): PropertyNode<Color>;
}
