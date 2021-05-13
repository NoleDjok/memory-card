/// <reference types="pixi.js" />
import { Particle } from "./Particle";
import { Emitter } from "./Emitter";
export declare class PathParticle extends Particle {
    path: Function;
    initialRotation: number;
    initialPosition: PIXI.Point;
    movement: number;
    constructor(emitter: Emitter);
    init(): void;
    update(delta: number): number;
    destroy(): void;
    static parseArt(art: (PIXI.Texture | string)[]): PIXI.Texture[];
    static parseData(extraData: {
        path: string;
    }): any;
}
