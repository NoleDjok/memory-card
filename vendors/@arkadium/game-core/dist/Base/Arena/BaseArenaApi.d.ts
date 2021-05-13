import { ILanguage } from "../Localization/ILanguage";
export declare abstract class BaseArenaApi {
    protected _pauseHandler: () => void;
    protected _resumeHandler: () => void;
    protected getLocale(supportedLanguages: Array<ILanguage>, defaultLanguageKey: string, arenaLocale: string): string;
    private gup;
    abstract rewardAvailable(): boolean;
    abstract showReward(callBack: (giveReward: boolean) => void): any;
}
