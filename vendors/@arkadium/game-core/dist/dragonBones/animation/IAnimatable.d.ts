import { WorldClock } from "./WorldClock";
export interface IAnimatable {
    advanceTime(passedTime: number): void;
    clock: WorldClock | null;
}
