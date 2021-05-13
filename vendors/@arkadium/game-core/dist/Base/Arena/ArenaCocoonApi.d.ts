import { SoundManager } from "../Sound/SoundManager";
import { ILanguage } from "../Localization/ILanguage";
import { IArenaGameEndData } from "./IArenaGameEndData";
import { BaseArenaApi } from "./BaseArenaApi";
import { IArenaApi } from "./IArenaApi";
export declare class AdStates {
    static UNLOADED: string;
    static LOADING: string;
    static LOADED: string;
}
export declare class ArenaCocoonApi extends BaseArenaApi implements IArenaApi {
    private _timeMsLastShowAdMs;
    private _timeMsIntervalShowAd;
    private _interstitialAd;
    private _interstitialAdState;
    private _soundManager;
    private _needStartMusic;
    private _needStartSound;
    constructor();
    private getCurrentTimeUTCms;
    private checkIntervalShowAd;
    registerActions(handler: (param: any) => void): void;
    initializeABTest(data: string): void;
    handleGameStart(): void;
    handleEventChange(): void;
    changeScore(score: number): void;
    handleMidrollRequest(): void;
    handleMidrollStart(): void;
    getArenaName(): string;
    setArenaName(name: string): void;
    handleMidrollFinish(): void;
    handleCustomEvent(eventName: any, dataString: any): void;
    handleGameEnd(data: IArenaGameEndData): void;
    shouldShowInternalGameEnd(): boolean;
    absoluteURL(relativeUrl: string): string;
    getLocale(supportedLanguages: Array<ILanguage>, defaultLanguageKey: string): string;
    handleInitInterstitial(publisherId: string): void;
    handleLoadInterstitial(): void;
    handleShowInterstitial(): void;
    private handleRefreshInterstitial;
    setSoundManager(soundManager: SoundManager): void;
    getPlatform(): string;
    rewardAvailable(): boolean;
    showReward(callBack: (giveReward: boolean) => void): void;
    getParam(paramName: any, defaultValue?: any): any;
    getGameConfigUrl(): string;
}
