import { IArenaGameEndData } from "./IArenaGameEndData";
import { ILanguage } from "../Localization/ILanguage";
import { SoundManager } from "../Sound/SoundManager";
export declare abstract class IArenaApi {
    rewardAvailable(): boolean;
    showReward(callBack: (grant: boolean) => void): void;
    initializeABTest(data: string): void;
    registerActions(handler: (param: any) => void): void;
    handleGameStart(): void;
    handleEventChange(): void;
    changeScore(score: number): void;
    handleMidrollRequest(): void;
    handleMidrollStart(): void;
    handleMidrollFinish(): void;
    handleCustomEvent(eventName: any, dataString: any): void;
    handleGameEnd(data: IArenaGameEndData): void;
    shouldShowInternalGameEnd(): boolean;
    absoluteURL(relativeUrl: string): string;
    getLocale(supportedLanguages: Array<ILanguage>, defaultLanguageKey: string): string;
    handleInitInterstitial(publisherId: string): void;
    handleLoadInterstitial(): void;
    handleShowInterstitial(): void;
    setSoundManager(soundManager: SoundManager): void;
    getPlatform(): string;
    getArenaName(): string;
    getGameConfigUrl(): string;
    getParam(paramName: any, defaultValue?: any): any;
    setArenaName(name: string): void;
}
