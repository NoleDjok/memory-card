/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare class StorageManager {
    private _allowLocalStorage;
    private _gameID;
    private _logger;
    constructor();
    setGameId(gameId: string): void;
    loadData(key: any): string;
    saveData(key: any, value: any): boolean;
}
