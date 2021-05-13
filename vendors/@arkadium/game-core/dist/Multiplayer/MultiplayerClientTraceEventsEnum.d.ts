/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
export declare enum MultiplayerClientTraceEventsEnum {
    none = 0,
    updateGameReceive = 2,
    updateGameSend = 4,
    gameActionReceive = 8,
    gameActionSend = 16,
    playerSignalSend = 32,
    playerSignalReceive = 64,
    playerStateChangedReceive = 128,
    playerLeftReceive = 256,
    playerJoinReceive = 512
}
