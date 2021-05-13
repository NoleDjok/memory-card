"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var Player_1=require("./Player"),Game=function(){function t(e){this.id=e.id,this.players=e.players.map(function(e){return Player_1.Player.fromObject(e)}),this.createdUtc=e.createdUtc,this.startedUtc=e.startedUtc,this.endedUtc=e.endedUtc}return t.fromObject=function(e){return new t(e)},t}();exports.Game=Game;