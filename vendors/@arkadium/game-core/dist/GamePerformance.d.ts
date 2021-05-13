export declare function GamePerformanceMethod(name: string, desc: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare class GamePerformance {
    static delay: number;
    private static _enabled;
    static enabled(value: boolean): void;
}
