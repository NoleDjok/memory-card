import { SimpleEase } from "./ParticleUtils";
import { PropertyNode } from "./PropertyNode";
export declare class PropertyList<V> {
    current: PropertyNode<V>;
    next: PropertyNode<V>;
    interpolate: (lerp: number) => number;
    ease: SimpleEase;
    private isColor;
    constructor(isColor?: boolean);
    reset(first: PropertyNode<V>): void;
}
