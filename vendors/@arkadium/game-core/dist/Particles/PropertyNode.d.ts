import { EaseSegment, SimpleEase, Color } from "./ParticleUtils";
import { BasicTweenable } from "./EmitterConfig";
export interface ValueStep<T> {
    value: T;
    time: number;
}
export interface ValueList<T> {
    list: ValueStep<T>[];
    isStepped?: boolean;
    ease?: SimpleEase | EaseSegment[];
}
export declare class PropertyNode<V> {
    value: V;
    time: number;
    next: PropertyNode<V>;
    isStepped: boolean;
    ease: SimpleEase;
    constructor(value: V, time: number, ease?: SimpleEase | EaseSegment[]);
    static createList<T extends (string | number)>(data: ValueList<T> | BasicTweenable<T>): PropertyNode<T extends string ? Color : T>;
}
