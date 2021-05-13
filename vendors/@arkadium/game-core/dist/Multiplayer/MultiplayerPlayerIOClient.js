"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__decorate=this&&this.__decorate||function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;0<=o;o--)(a=e[o])&&(s=(i<3?a(s):3<i?a(t,n,s):a(t,n))||s);return 3<i&&s&&Object.defineProperty(t,n,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter=this&&this.__awaiter||function(e,s,o,c){return new(o||(o=Promise))(function(n,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(r,a)}i((c=c.apply(e,s||[])).next())})},__generator=this&&this.__generator||function(n,r){var a,i,s,e,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,i&&(s=2&t[0]?i.return:t[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,t[1])).done)return s;switch(i=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return o.label++,{value:t[1],done:!1};case 5:o.label++,i=t[1],t=[0];continue;case 7:t=o.ops.pop(),o.trys.pop();continue;default:if(!(s=0<(s=o.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){o=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){o.label=t[1];break}if(6===t[0]&&o.label<s[1]){o.label=s[1],s=t;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(t);break}s[2]&&o.ops.pop(),o.trys.pop();continue}t=r.call(n,o)}catch(e){t=[6,e],i=0}finally{a=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(exports,"__esModule",{value:!0});var MultiplayerClientBase_1=require("./MultiplayerClientBase"),GameStateChangedEvent_1=require("./messaging/events/GameStateChangedEvent"),PlayerStateChangedEvent_1=require("./messaging/events/PlayerStateChangedEvent"),GameActionEvent_1=require("./messaging/events/GameActionEvent"),GameSignalEvent_1=require("./messaging/events/GameSignalEvent"),PlayerLeftGameEvent_1=require("./messaging/events/PlayerLeftGameEvent"),__1=require(".."),MultiplayerClientTraceEventsEnum_1=require("./MultiplayerClientTraceEventsEnum"),jsonpack=require("jsonpack"),MultiplayerPlayerIOClient=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.create=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this._connection=t.connection,this._gameId=t.matchId,this._playerId=t.playerGuid,this._ready=!0,[2,Promise.resolve(!0)]})})},e.prototype.start=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){return this._connection.addMessageCallback("*",function(l){return __awaiter(t,void 0,void 0,function(){var t,n,r,a,i,s,o,c;return __generator(this,function(e){switch(e.label){case 0:switch(l.type){case"playerJoin":return[3,1];case"playerLeft":return[3,3];case"playerStateChanged":return[3,5];case"playerSignal":return[3,7];case"gameAction":return[3,9];case"updateGame":return[3,10];case"startMatch":return[3,11]}return[3,12];case 1:return t=JSON.parse(l.getString(0)),n=t.player.id,r=t.player.name,this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.playerJoinReceive&&console.log("->playerJoinReceive",r,n),[4,this._playerJoined(n,r)];case 2:return e.sent(),[3,12];case 3:return a=JSON.parse(l.getString(0)),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.playerLeftReceive&&console.log("->playerLeftReceive",l.getString(0)),[4,this._playerLeft(PlayerLeftGameEvent_1.PlayerLeftGameEvent.fromObject(a))];case 4:return e.sent(),[3,12];case 5:return i=JSON.parse(l.getString(0)),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.playerStateChangedReceive&&console.log("->playerStateChangedReceive",l.getString(0)),[4,this._playerStateChanged(PlayerStateChangedEvent_1.PlayerStateChangedEvent.fromObject(i))];case 6:return e.sent(),[3,12];case 7:return s=JSON.parse(l.getString(0)),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.playerSignalReceive&&console.log("->playerSignalReceive",l.getString(0)),[4,this._gameSignal(GameSignalEvent_1.GameSignalEvent.fromObject(s))];case 8:return e.sent(),[3,12];case 9:return o=this.isCompressingTraffic?jsonpack.unpack(l.getString(0)):JSON.parse(l.getString(0)),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.gameActionReceive&&console.log("->gameActionReceive",JSON.stringify(o)),this._gameAction(GameActionEvent_1.GameActionEvent.fromObject(o)),[3,12];case 10:return c=JSON.parse(l.getString(0)),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.updateGameReceive&&console.log("->updateGameReceive.game",l.getString(0)),1<l.length&&(c.queue=this.isCompressingTraffic?jsonpack.unpack(l.getString(1)):JSON.parse(l.getString(1)),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.updateGameReceive&&console.log("->updateGameReceive.queue",JSON.stringify(c.queue))),this._updateGame(GameStateChangedEvent_1.GameStateChangedEvent.fromObject(c),!1),[3,12];case 11:return[3,12];case 12:return[2]}})})}),[2,Promise.resolve(!0)]})})},e.prototype._sendGameActionAsync=function(n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){return t=this.isCompressingTraffic?jsonpack.pack(n):JSON.stringify(n),this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.gameActionSend&&console.log("<-gameActionSend",JSON.stringify(n)),this._connection.send("gameAction",t),[2,Promise.resolve()]})})},e.prototype._updateGameAsync=function(t,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.updateGameSend&&console.log("<-updateGameSend",JSON.stringify(t.queue)),this._connection.send("updateGame",JSON.stringify(t.players),this.isCompressingTraffic?jsonpack.pack(t.queue):JSON.stringify(t.queue),JSON.stringify(this.playersPeersConnected),n?1:0),[2,Promise.resolve()]})})},e.prototype._sendGameSignalAsync=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.traceEvents&MultiplayerClientTraceEventsEnum_1.MultiplayerClientTraceEventsEnum.playerSignalSend&&console.log("<-playerSignalSend",JSON.stringify(t)),this._connection.send("playerSignal",t.playerId,JSON.stringify(t)),[2,Promise.resolve()]})})},e.prototype.startMatch=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this._connection.send("startMatch"),[2,Promise.resolve()]})})},e.prototype.update=function(e){this._ready&&t.prototype.update.call(this,e)},e=__decorate([__1.Singleton,__metadata("design:paramtypes",[])],e)}(MultiplayerClientBase_1.MultiplayerClient);exports.MultiplayerPlayerIOClient=MultiplayerPlayerIOClient;