/// <reference types="pixi.js" />
import { Particle } from "./Particle";
import { Emitter } from "./Emitter";
export interface ParsedAnimatedParticleArt {
    textures: PIXI.Texture[];
    duration: number;
    framerate: number;
    loop: boolean;
}
export interface AnimatedParticleArt {
    framerate: "matchLife" | number;
    loop?: boolean;
    textures: (string | PIXI.Texture | {
        texture: string | PIXI.Texture;
        count: number;
    })[];
}
export declare class AnimatedParticle extends Particle {
    private textures;
    private duration;
    private framerate;
    private elapsed;
    private loop;
    constructor(emitter: Emitter);
    init(): void;
    applyArt(art: ParsedAnimatedParticleArt): void;
    update(delta: number): number;
    destroy(): void;
    static parseArt(art: AnimatedParticleArt[]): ParsedAnimatedParticleArt[];
}
