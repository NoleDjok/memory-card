/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
import { AbTestManager } from "../AbTest/AbTestManager";
import { BaseAnalytic } from "./Base/BaseAnalytic";
import { IGameBaseAnalytic } from "./IGameBaseAnalytic";
import { AnalyticResources } from "../AnalyticResources";
export declare class Analytic extends BaseAnalytic implements IGameBaseAnalytic {
    protected readonly START_BUTTON: string;
    protected readonly GAME_END: string;
    protected readonly ROUND_N: string;
    protected readonly ROUND_N_END: string;
    protected readonly IMPRESSION: string;
    protected readonly CLICK: string;
    protected readonly WIN: string;
    protected readonly TIME_OUT: string;
    protected readonly NEW_GAME: string;
    protected readonly RESTART: string;
    protected readonly QUIT: string;
    protected readonly LOSE: string;
    protected readonly START: string;
    protected readonly FINISHED: string;
    protected readonly NOT_FINISHED: string;
    protected readonly INTRO_SCREEN: string;
    protected readonly GAME_SCREEN: string;
    protected readonly GAME_OVER_SCREEN: string;
    protected readonly QUIT_CONFIRMED: string;
    constructor(analyticsResources: AnalyticResources, abTestManager: AbTestManager);
    startButtonImpression(): Promise<boolean>;
    startButtonClick(): Promise<boolean>;
    levelStart(level: number): Promise<boolean>;
    levelEndFinished(level: number, timeSpent?: number): Promise<boolean>;
    levelEndNotFinished(level: number, timeSpent?: number): Promise<boolean>;
    winGame(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameEndTimeOut(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameEndNewGame(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameEndRestart(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameQuited(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameLose(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    introPanelShowed(): void;
    gamePanelShowed(): void;
    gameOverPanelShowed(): void;
    quitGamePanelConfirmed(): void;
    sendEvent(eventCategory: string, eventAction: string): Promise<boolean>;
    sendPageView(pageName: string): void;
}
