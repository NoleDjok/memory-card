export declare class MemoryCache {
    private readonly _collection;
    constructor();
    get(key: string): any;
    add(key: string, value: any): void;
    remove(key: string): void;
    clear(): void;
}
