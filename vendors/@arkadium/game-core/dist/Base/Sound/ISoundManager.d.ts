/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/// <reference types="howler" />
import { SoundData } from "./SoundData";
export interface Sound {
    id: string;
    type: SoundType;
    item: Howl;
    delay: number;
}
export interface SoundConfig {
    id: string;
    path: string;
}
export declare enum SoundType {
    SFX = 0,
    Music = 1,
    ALL = 2
}
export declare abstract class ISoundManager {
    data: SoundData;
    play(id: string, loop: boolean): void;
    stop(id: string): void;
    changeVolume(id: string, volume: number): void;
    stopAll(): void;
    muteSoundsByType(mute: boolean, type: SoundType): void;
    loadSound(id: string, type: SoundType, callerName: string): void;
    isSoundPlaying(id: string): void;
    isAdded(id: string): boolean;
    isLoaded(id: string): boolean;
    getSoundById(id: string): Sound;
    playSound(id: string, delaySec: number, volume?: number): void;
}
