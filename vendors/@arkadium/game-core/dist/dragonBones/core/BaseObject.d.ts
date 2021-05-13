export declare abstract class BaseObject {
    private static _hashCode;
    private static _defaultMaxCount;
    private static readonly _maxCountMap;
    private static readonly _poolsMap;
    private static _returnObject;
    static toString(): string;
    static setMaxCount(objectConstructor: (typeof BaseObject) | null, maxCount: number): void;
    static clearPool(objectConstructor?: (typeof BaseObject) | null): void;
    static borrowObject<T extends BaseObject>(objectConstructor: {
        new (): T;
    }): T;
    readonly hashCode: number;
    private _isInPool;
    protected abstract _onClear(): void;
    returnToPool(): void;
}
