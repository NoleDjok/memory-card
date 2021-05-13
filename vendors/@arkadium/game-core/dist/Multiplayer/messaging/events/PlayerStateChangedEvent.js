"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Player_1=require("../../models/Player"),EventBase_1=require("../EventBase"),PlayerStateChangedEvent=function(r){function n(e){var t=r.call(this,e.isoDateTime)||this;return t.gameId=e.gameId,t.player=Player_1.Player.fromObject(e.player),t}return __extends(n,r),Object.defineProperty(n.prototype,"id",{get:function(){return n.id},enumerable:!0,configurable:!0}),n.fromObject=function(e){return new n(e)},n.fromPlayerInGame=function(e,t){return new n({id:n.id,isoDateTime:EventBase_1.EventBase.getIsoDateTime(),gameId:e.id,player:t})},n.id="PlayerStateChangedEvent",n}(EventBase_1.EventBase);exports.PlayerStateChangedEvent=PlayerStateChangedEvent;