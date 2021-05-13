"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var Queue=function(){function e(){this._queueClock=0,this._queue=[],this._queueData=[],this.items={}}return Object.defineProperty(e.prototype,"clock",{get:function(){return this._queueClock},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._queue.length},enumerable:!0,configurable:!0}),e.prototype.update=function(e,u){for(this._queueClock+=e;this._queue.length&&(this._queue[0].condition(this._queueClock)||u);){for(var t=this._queue[0].action,i=this._queueData[0],o=0;o<this._queue.length-1;++o)this._queue[o]=this._queue[o+1],this._queueData[o]=this._queueData[o+1];this._queue.pop(),this._queueData.pop(),t(this._queueClock,i),this._queueClock=0}},e.prototype.push=function(e,u){this._queue.indexOf(e);0==this._queue.length&&(this._queueClock=0),this._queue.push(e),this._queueData.push(u||{})},e.prototype.clear=function(){this._queue.length=0},e.prototype.remove=function(e){for(var u=this._queue.indexOf(e);-1<u;)this._queue.splice(u,1),this._queueData.splice(u,1),u=this._queue.indexOf(e)},e}();exports.Queue=Queue;