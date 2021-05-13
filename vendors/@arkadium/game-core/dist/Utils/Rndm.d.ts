export declare class Random {
    private _seed;
    private _currentSeed;
    private _logger;
    constructor();
    getSeed(): number;
    setSeed(value: number): void;
    getCurrentSeed(): number;
    initialize(seed?: number): void;
    random(): number;
    float(min: number, max: number): number;
    boolean(chance: number): boolean;
    sign(chance: number): number;
    bit(chance: number): number;
    integer(min: number, max: number): number;
    reset(): void;
}
