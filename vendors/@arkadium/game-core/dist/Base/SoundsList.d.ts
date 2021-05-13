/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
import { List } from "../Linq/Linq";
import { ISoundManager } from "./Sound/ISoundManager";
import { ISoundsConfiguration } from "./IViewConfiguration";
import { IViewBase } from "./IViewBase";
export declare class SoundsList {
    private readonly _soundManager;
    items: List<SoundItem>;
    constructor(soundManager: ISoundManager);
    muteMusic(muted: boolean): void;
    muteSoundEffects(muted: boolean): void;
    get(name: string): SoundItem;
    initialize(sounds: Array<ISoundsConfiguration>, view: IViewBase): void;
}
export declare class SoundItem {
    private readonly _soundManager;
    private readonly _soundId;
    constructor(soundManager: ISoundManager, soundId: string);
    play(loop?: boolean, volume?: number): void;
    stop(): void;
    changeVolume(volume: number): void;
    isLoaded(): boolean;
    playSound(delaySec?: number, volume?: number): void;
}
