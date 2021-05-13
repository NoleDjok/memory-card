/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */
export interface IGameBaseAnalytic {
    startButtonImpression(): Promise<boolean>;
    startButtonClick(): Promise<boolean>;
    levelStart(level: number): Promise<boolean>;
    levelEndFinished(level: number, timeSpent?: number): Promise<boolean>;
    levelEndNotFinished(level: number, timeSpent?: number): Promise<boolean>;
    introPanelShowed(): any;
    gamePanelShowed(): any;
    gameOverPanelShowed(): any;
    quitGamePanelConfirmed(): any;
    winGame(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameLose(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameEndTimeOut(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameEndNewGame(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameEndRestart(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    gameQuited(score: number, timeSpent?: number, level?: number): Promise<boolean>;
    sendPageView(pageName: string): void;
    sendEvent(eventCategory: string, eventAction: string, eventLabel: string, eventValue: number): Promise<boolean>;
}
