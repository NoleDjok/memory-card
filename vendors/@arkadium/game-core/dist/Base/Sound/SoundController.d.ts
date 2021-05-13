/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="howler" />
export declare class SoundController {
    private readonly _isInternetExplorer;
    private readonly _howler1;
    private _masterVolume;
    constructor();
    load(url: string): Howl;
    updateMasterVolume(): void;
    setMasterVolume(value: number): void;
    getMasterVolume(): number;
}
