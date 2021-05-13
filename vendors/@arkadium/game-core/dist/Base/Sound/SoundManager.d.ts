/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { ISoundManager, Sound, SoundConfig, SoundType } from "./ISoundManager";
import { SoundData } from "./SoundData";
export declare class SoundManager implements ISoundManager {
    private _config;
    private _cdnUrl;
    private readonly _sounds;
    private _data;
    private _storageManager;
    private _logger;
    private _soundStorageKey;
    private readonly _soundController;
    constructor();
    get data(): SoundData;
    get musicOn(): boolean;
    get soundOn(): boolean;
    setMasterVolume(value: number): void;
    getMasterVolume(): number;
    reload(id: any, src: any): void;
    play(id: string, loop?: boolean, volume?: number): void;
    playSound(id: string, delaySec?: number, volume?: number): void;
    stop(id: string): void;
    changeVolume(id: string, volume: number): void;
    stopAll(): void;
    muteSoundsByType(mute: boolean, type: SoundType): void;
    private muteSoundsByTypeInternal;
    loadSound(id: string, type: SoundType, callerName: string): void;
    isSoundPlaying(id: string): boolean;
    loadData(config: SoundConfig[], cdnUrl: string, soundStorageKey?: string): void;
    private saveData;
    isAdded(id: string): boolean;
    isLoaded(id: string): boolean;
    getSoundById(id: string): Sound;
    private getSoundsByType;
    private getUrlById;
    private subscribe;
    private windowFocusChanged;
    update(frameRate: number): void;
}
