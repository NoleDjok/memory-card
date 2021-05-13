"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var EventBase_1=require("../EventBase"),GameActionEvent=function(n){function t(e){var t=n.call(this,e.isoDateTime)||this;return t.gameId=e.gameId,t.playerId=e.playerId,t.action=e.action,t.actionType=e.actionType,t}return __extends(t,n),Object.defineProperty(t.prototype,"id",{get:function(){return t.id},enumerable:!0,configurable:!0}),t.fromObject=function(e){return new t(e)},t.id="GameActionEvent",t}(EventBase_1.EventBase);exports.GameActionEvent=GameActionEvent;