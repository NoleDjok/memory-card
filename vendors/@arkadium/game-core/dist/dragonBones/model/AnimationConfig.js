"use strict";var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var BaseObject_1=require("../core/BaseObject"),AnimationConfig=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.boneMask=[],t}return __extends(t,e),t.toString=function(){return"[class dragonBones.AnimationConfig]"},t.prototype._onClear=function(){this.pauseFadeOut=!0,this.fadeOutMode=4,this.fadeOutTweenType=1,this.fadeOutTime=-1,this.actionEnabled=!0,this.additive=!1,this.displayControl=!0,this.pauseFadeIn=!0,this.resetToPose=!0,this.fadeInTweenType=1,this.playTimes=-1,this.layer=0,this.position=0,this.duration=-1,this.timeScale=-100,this.weight=1,this.fadeInTime=-1,this.autoFadeOutTime=-1,this.name="",this.animation="",this.group="",this.boneMask.length=0},t.prototype.clear=function(){this._onClear()},t.prototype.copyFrom=function(t){this.pauseFadeOut=t.pauseFadeOut,this.fadeOutMode=t.fadeOutMode,this.autoFadeOutTime=t.autoFadeOutTime,this.fadeOutTweenType=t.fadeOutTweenType,this.actionEnabled=t.actionEnabled,this.additive=t.additive,this.displayControl=t.displayControl,this.pauseFadeIn=t.pauseFadeIn,this.resetToPose=t.resetToPose,this.playTimes=t.playTimes,this.layer=t.layer,this.position=t.position,this.duration=t.duration,this.timeScale=t.timeScale,this.fadeInTime=t.fadeInTime,this.fadeOutTime=t.fadeOutTime,this.fadeInTweenType=t.fadeInTweenType,this.weight=t.weight,this.name=t.name,this.animation=t.animation,this.group=t.group,this.boneMask.length=t.boneMask.length;for(var e=0,i=this.boneMask.length;e<i;++e)this.boneMask[e]=t.boneMask[e]},t}(BaseObject_1.BaseObject);exports.AnimationConfig=AnimationConfig;