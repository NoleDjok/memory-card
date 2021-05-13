"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var BaseArenaApi_1=require("./BaseArenaApi"),ArenaXApi=function(o){function t(){var t=o.call(this)||this;return t._arenaApi=window.ArenaXApi.getInstance(),t._pauseHandler=function(){t.handleMidrollStart()},t._resumeHandler=function(){t.handleMidrollFinish()},t}return __extends(t,o),t.prototype.initializeABTest=function(t){window.ARK_game_arena_connector.fireEventToArena("abtest_init",t)},t.prototype.registerActions=function(t){this._arenaApi.addAction("GAME_PAUSE",this._pauseHandler),this._arenaApi.addAction("GAME_RESUME",this._resumeHandler),this._arenaApi.addAction("TEST_ACTION",t),this._arenaApi.dispatch({type:"TEST_READY",payload:null})},t.prototype.handleMidrollRequest=function(){this._arenaApi.dispatch({type:"PAUSE_READY",payload:null})},t.prototype.handleMidrollStart=function(){},t.prototype.handleMidrollFinish=function(){},t.prototype.handleCustomEvent=function(t,e){},t.prototype.handleEventChange=function(){this._arenaApi.dispatch({type:"EVENT_CHANGE",payload:null})},t.prototype.handleGameStart=function(){this._arenaApi.dispatch({type:"GAME_START",payload:null})},t.prototype.changeScore=function(t){},t.prototype.handleGameEnd=function(t){this._arenaApi.dispatch({type:"CHANGE_SCORE",payload:t.score}),this._arenaApi.dispatch({type:"GAME_END",payload:null})},t.prototype.shouldShowInternalGameEnd=function(){return!1},t.prototype.absoluteURL=function(t){return[this._arenaApi.assetOriginUrl,t].join("")},t.prototype.getLocale=function(t,e){var n=this._arenaApi.locale.split("-")[0];return o.prototype.getLocale.call(this,t,e,n)},t.prototype.getArenaName=function(){return this._arenaName||window.arenaName},t.prototype.setArenaName=function(t){this._arenaName=t},t.prototype.handleInitInterstitial=function(t){},t.prototype.handleLoadInterstitial=function(){},t.prototype.handleShowInterstitial=function(){},t.prototype.destroy=function(){this._arenaApi.removeAction("GAME_PAUSE"),this._arenaApi.removeAction("GAME_RESUME"),this._arenaApi.removeAction("TEST_ACTION"),this._pauseHandler=null,this._resumeHandler=null},t.prototype.setSoundManager=function(t){},t.prototype.getPlatform=function(){return""},t.prototype.rewardAvailable=function(){return!1},t.prototype.showReward=function(t){t(!1)},t.prototype.getGameConfigUrl=function(){return window.configURL?window.configURL():""},t.prototype.getParam=function(t,e){switch(t){case"configURL":return this._arenaApi.configUrl;default:return e}},t}(BaseArenaApi_1.BaseArenaApi);exports.ArenaXApi=ArenaXApi;