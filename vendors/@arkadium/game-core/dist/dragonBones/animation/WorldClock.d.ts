import { IAnimatable } from "./IAnimatable";
export declare class WorldClock implements IAnimatable {
    time: number;
    timeScale: number;
    private _systemTime;
    private readonly _animatebles;
    private _clock;
    constructor(time?: number);
    advanceTime(passedTime: number): void;
    contains(value: IAnimatable): boolean;
    add(value: IAnimatable): void;
    remove(value: IAnimatable): void;
    clear(): void;
    get clock(): WorldClock | null;
    set clock(value: WorldClock | null);
}
