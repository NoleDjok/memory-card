"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var Player=function(){function e(t){this.type=0,this.action=-1,this.left=!1,this.id=t.id,this.name=t.name,this.isServer=t.isServer,this.data=t.data,this.type=t.type}return e.fromObject=function(t){return new e(t)},e.prototype.copy=function(t){this.name=t.name,this.isServer=t.isServer,t.data&&(this.data=t.data)},e}();exports.Player=Player;