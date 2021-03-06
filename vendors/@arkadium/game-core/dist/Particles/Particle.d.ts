/// <reference types="pixi.js" />
import { Emitter } from "./Emitter";
import { SimpleEase, Color } from "./ParticleUtils";
import { PropertyList } from "./PropertyList";
export declare class Particle extends PIXI.Sprite {
    emitter: Emitter;
    velocity: PIXI.Point;
    maxLife: number;
    age: number;
    ease: SimpleEase;
    extraData: any;
    alphaList: PropertyList<number>;
    speedList: PropertyList<number>;
    speedMultiplier: number;
    acceleration: PIXI.Point;
    maxSpeed: number;
    rotationSpeed: number;
    rotationAcceleration: number;
    noRotation: boolean;
    scaleList: PropertyList<number>;
    scaleMultiplier: number;
    colorList: PropertyList<Color>;
    protected Particle_init: typeof Particle.prototype.init;
    protected Particle_update: typeof Particle.prototype.update;
    protected Particle_destroy: typeof Particle.prototype.destroy;
    protected Sprite_destroy: typeof PIXI.Sprite.prototype.destroy;
    protected _doAlpha: boolean;
    protected _doScale: boolean;
    protected _doSpeed: boolean;
    protected _doAcceleration: boolean;
    protected _doColor: boolean;
    protected _doNormalMovement: boolean;
    private _oneOverLife;
    next: Particle;
    prev: Particle;
    constructor(emitter: Emitter);
    init(): void;
    applyArt(art: any): void;
    update(delta: number): number;
    kill(): void;
    destroy(): void;
    static parseArt(art: any[]): any[];
    static parseData(extraData: any): any;
}
