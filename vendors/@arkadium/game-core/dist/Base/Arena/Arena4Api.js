"use strict";var __extends=this&&this.__extends||function(){var o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};return function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var BaseArenaApi_1=require("./BaseArenaApi"),arena_api_1_2_3_1=require("./arena-api-1.2.3"),Arena4Api=function(o){function e(){var e=o.call(this)||this;return window.ARK_game_arena_connector=arena_api_1_2_3_1.ARK_game_arena_connector,window.ARK_game_arena_connector.init(),e}return __extends(e,o),e.prototype.registerActions=function(e){var n=this;this._pauseHandler=function(){n.handleMidrollStart()},this._resumeHandler=function(){n.handleMidrollFinish()},window.ARK_game_arena_connector.registerAction("pause",this._pauseHandler),window.ARK_game_arena_connector.registerAction("resume",this._resumeHandler),window.ARK_game_arena_connector.registerAction("test_action",e),window.ARK_game_arena_connector.initTestingEnvironment()},e.prototype.initializeABTest=function(e){window.ARK_game_arena_connector.fireEventToArena("abtest_init",e)},e.prototype.handleGameStart=function(){window.ARK_game_arena_connector.fireEventToArena("game_start")},e.prototype.handleEventChange=function(){window.ARK_game_arena_connector.fireEventToArena("event_change")},e.prototype.changeScore=function(e){window.ARK_game_arena_connector.changeScore(e)},e.prototype.handleMidrollRequest=function(){window.ARK_game_arena_connector.fireEventToArena("pause_ready")},e.prototype.handleMidrollStart=function(){},e.prototype.handleMidrollFinish=function(){},e.prototype.handleCustomEvent=function(e,n){window.ARK_game_arena_connector.fireEventToArena(e,n)},e.prototype.handleGameEnd=function(e){window.ARK_game_arena_connector.changeScore(e.score),window.ARK_game_arena_connector.fireEventToArena("game_end")},e.prototype.shouldShowInternalGameEnd=function(){return 1==window.ARK_game_arena_connector.showGameEnd()},e.prototype.absoluteURL=function(e){return e},e.prototype.getLocale=function(e,n){var t=window.ARK_game_arena_connector.getParam("locale",n);return o.prototype.getLocale.call(this,e,n,t)},e.prototype.getArenaName=function(){return this._arenaName||window.ARK_game_arena_connector.getParam("arena_name")},e.prototype.setArenaName=function(e){this._arenaName=e},e.prototype.handleInitInterstitial=function(e){},e.prototype.handleLoadInterstitial=function(){},e.prototype.handleShowInterstitial=function(){},e.prototype.setSoundManager=function(e){},e.prototype.getPlatform=function(){return""},e.prototype.rewardAvailable=function(){return!1},e.prototype.showReward=function(e){e(!1)},e.prototype.getGameConfigUrl=function(){var e=window.ARK_game_arena_connector.getParam("configURL");return null!=e&&null!=e?e:""},e.prototype.getParam=function(e,n){return arena_api_1_2_3_1.ARK_game_arena_connector.getParam(e,n)},e}(BaseArenaApi_1.BaseArenaApi);exports.Arena4Api=Arena4Api;