"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var ArenaCocoonApi_1=require("./ArenaCocoonApi"),BaseArenaApi_1=require("./BaseArenaApi"),ISoundManager_1=require("../Sound/ISoundManager"),HeyzapAdvertisment=function(i){function t(){var t=i.call(this)||this;return t._timeMsLastShowAdMs=0,t._timeMsIntervalShowAd=3e5,t._interstitialAdState=ArenaCocoonApi_1.AdStates.UNLOADED,t._needStartMusic=!1,t._needStartSound=!1,t._pauseHandler=function(){t.handleMidrollStart()},t._resumeHandler=function(){t.handleMidrollFinish()},t}return __extends(t,i),t.prototype.initializeABTest=function(t){},t.prototype.registerActions=function(t){},t.prototype.handleGameStart=function(){},t.prototype.handleEventChange=function(){},t.prototype.changeScore=function(t){},t.prototype.handleMidrollRequest=function(){},t.prototype.handleMidrollStart=function(){this._soundManager&&(this._soundManager.data.musicOn&&(this._needStartMusic=!0,this._soundManager.muteSoundsByType(!0,ISoundManager_1.SoundType.Music)),this._soundManager.data.soundOn&&(this._needStartSound=!0,this._soundManager.muteSoundsByType(!0,ISoundManager_1.SoundType.SFX)))},t.prototype.handleMidrollFinish=function(){this._soundManager&&(this._needStartMusic&&(this._needStartMusic=!1,this._soundManager.muteSoundsByType(!1,ISoundManager_1.SoundType.Music)),this._needStartSound&&(this._needStartSound=!1,this._soundManager.muteSoundsByType(!1,ISoundManager_1.SoundType.SFX)))},t.prototype.handleCustomEvent=function(t,e){},t.prototype.handleGameEnd=function(t){},t.prototype.shouldShowInternalGameEnd=function(){return!0},t.prototype.absoluteURL=function(t){return t},t.prototype.getLocale=function(t,e){var n=window.navigator.language;return i.prototype.getLocale.call(this,t,e,n)},t.prototype.handleInitInterstitial=function(t){var e=this;this.HeyzapAds=window.HeyzapAds,this.HeyzapAds&&this.HeyzapAds.start(t,new this.HeyzapAds.Options({disableAutomaticPrefetch:!1})).then(function(){e.subscribe()},function(t){console.log("! error = ",t)})},t.prototype.subscribe=function(){var n=this;this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.AVAILABLE,function(t){console.log("! HeyzapAds.VideoAd.Events.AVAILABLE"),n._interstitialAdState=ArenaCocoonApi_1.AdStates.LOADED}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.SHOW,function(t){n.handleMidrollFinish()}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.HIDE,function(t){console.log("! HeyzapAds.VideoAd.Events.HIDE"),n.handleMidrollFinish()}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.CLICKED,function(t){console.log("! HeyzapAds.VideoAd.Events.CLICKED")}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.SHOW_FAILED,function(t,e){console.log("! HeyzapAds.VideoAd.Events.SHOW_FAILED"),n._interstitialAdState=ArenaCocoonApi_1.AdStates.UNLOADED,null!=n._rewardCallBack&&(n._rewardCallBack(!1),n._rewardCallBack=null)}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.FETCH_FAILED,function(t,e){console.log("! HeyzapAds.VideoAd.Events.SHOW_FAILED")}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.AUDIO_STARTED,function(){console.log("! HeyzapAds.VideoAd.Events.AUDIO_STARTED")}),this.HeyzapAds.InterstitialAd.addEventListener(this.HeyzapAds.InterstitialAd.Events.AUDIO_FINISHED,function(t){console.log("! HeyzapAds.VideoAd.Events.AUDIO_FINISHED")}),this.HeyzapAds.IncentivizedAd.addEventListener(this.HeyzapAds.IncentivizedAd.Events.COMPLETE,function(t){console.log("! HeyzapAds.IncentivizedAd.Events.COMPLETE"),null!=n._rewardCallBack&&(n._rewardCallBack(!0),n._rewardCallBack=null)}),this.HeyzapAds.IncentivizedAd.addEventListener(this.HeyzapAds.IncentivizedAd.Events.INCOMPLETE,function(t){console.log("! HeyzapAds.IncentivizedAd.Events.INCOMPLETE"),null!=n._rewardCallBack&&(n._rewardCallBack(!1),n._rewardCallBack=null)})},t.prototype.fetchRewardedVideo=function(){console.log("fetchRewardedVideo"),this.HeyzapAds.IncentivizedAd.fetch().then(function(){console.log("fetchRewardedVideo successful")},function(t){console.log("fetchRewardedVideo Error")})},t.prototype.handleLoadInterstitial=function(){this.isAvailable()&&(this._interstitialAdState=ArenaCocoonApi_1.AdStates.LOADING,this.HeyzapAds.InterstitialAd.fetch())},t.prototype.isAvailable=function(){return null!=this.HeyzapAds&&null!=this.HeyzapAds.InterstitialAd},t.prototype.handleShowInterstitial=function(){this.isAvailable()&&(this.checkIntervalShowAd()&&this._interstitialAdState==ArenaCocoonApi_1.AdStates.LOADED?(this._timeMsLastShowAdMs=this.getCurrentTimeUTCms(),this._interstitialAdState=ArenaCocoonApi_1.AdStates.UNLOADED,this.HeyzapAds.InterstitialAd.show(),this.handleMidrollStart()):this.handleLoadInterstitial())},t.prototype.getCurrentTimeUTCms=function(){return(new Date).getTime()},t.prototype.checkIntervalShowAd=function(){var t=!1;return this.getCurrentTimeUTCms()-this._timeMsLastShowAdMs>this._timeMsIntervalShowAd&&(t=!0),t},t.prototype.setSoundManager=function(t){this._soundManager=t},t.prototype.getPlatform=function(){return"undefined"},t.prototype.getArenaName=function(){return""},t.prototype.setArenaName=function(t){},t.prototype.rewardAvailable=function(){return null!=this.HeyzapAds&&null!=this.HeyzapAds.IncentivizedAd},t.prototype.showReward=function(t){this._rewardCallBack=t,this.rewardAvailable?this.HeyzapAds.IncentivizedAd.show():(this._rewardCallBack(!1),this._rewardCallBack=null)},t.prototype.getGameConfigUrl=function(){return""},t.prototype.getParam=function(t,e){return e},t}(BaseArenaApi_1.BaseArenaApi);exports.HeyzapAdvertisment=HeyzapAdvertisment;