import { StorageManager } from "../Base/Storage/StorageManager";
import { IAbTestManager } from "./IAbTestManager";
import { IAbTestSettings } from "./IAbTestSettings";
export declare class AbTestManager implements IAbTestManager {
    private readonly STORAGE_KEY;
    private _isActive;
    private _data;
    private _internalTestGroup;
    private _storage;
    private _abTestData;
    constructor();
    initialize(data: IAbTestSettings, storage: StorageManager): void;
    private generateGroup;
    get isActive(): boolean;
    get testGroup(): string;
}
export declare class AbTestData {
    group: string;
}
