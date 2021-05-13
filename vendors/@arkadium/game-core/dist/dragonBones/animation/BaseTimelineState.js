"use strict";var __extends=this&&this.__extends||function(){var s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var BaseObject_1=require("../core/BaseObject"),TimelineState=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"armature",{get:function(){return this._armature},set:function(t){this._armature=t},enumerable:!0,configurable:!0}),e.prototype._onClear=function(){this.dirty=!1,this.playState=-1,this.currentPlayTimes=0,this.currentTime=-1,this.target=null,this._isTween=!1,this._valueOffset=0,this._frameValueOffset=0,this._frameOffset=0,this._frameRate=0,this._frameCount=0,this._frameIndex=-1,this._frameRateR=0,this._position=0,this._duration=0,this._timeScale=1,this._timeOffset=0,this._animationData=null,this._timelineData=null,this._armature=null,this._animationState=null,this._actionTimeline=null,this._frameArray=null,this._valueArray=null,this._timelineArray=null,this._frameIndices=null},e.prototype._setCurrentTime=function(t){var e=this.playState,i=this.currentPlayTimes,s=this.currentTime;if(null!==this._actionTimeline&&this._frameCount<=1)this.playState=0<=this._actionTimeline.playState?1:-1,this.currentPlayTimes=1,this.currentTime=this._actionTimeline.currentTime;else if(null===this._actionTimeline||1!==this._timeScale||0!==this._timeOffset){var a=this._animationState.playTimes,r=a*this._duration;t*=this._timeScale,0!==this._timeOffset&&(t+=this._timeOffset*this._animationData.duration),0<a&&(r<=t||t<=-r)?(this.playState<=0&&3===this._animationState._playheadState&&(this.playState=1),this.currentPlayTimes=a,this.currentTime=t<0?0:1===this.playState?this._duration+1e-6:this._duration):(0!==this.playState&&3===this._animationState._playheadState&&(this.playState=0),t<0?(t=-t,this.currentPlayTimes=Math.floor(t/this._duration),this.currentTime=this._duration-t%this._duration):(this.currentPlayTimes=Math.floor(t/this._duration),this.currentTime=t%this._duration)),this.currentTime+=this._position}else this.playState=this._actionTimeline.playState,this.currentPlayTimes=this._actionTimeline.currentPlayTimes,this.currentTime=this._actionTimeline.currentTime;return(this.currentPlayTimes!==i||this.currentTime!==s)&&((e<0&&this.playState!==e||this.playState<=0&&this.currentPlayTimes!==i)&&(this._frameIndex=-1),!0)},e.prototype.init=function(t,e,i){if(this._armature=t,this._animationState=e,this._timelineData=i,this._actionTimeline=this._animationState._actionTimeline,this===this._actionTimeline&&(this._actionTimeline=null),this._animationData=this._animationState.animationData,this._frameRate=this._animationData.parent.frameRate,this._frameRateR=1/this._frameRate,this._position=this._animationState._position,this._duration=this._animationState._duration,null!==this._timelineData){var s=this._animationData.parent.parent;this._frameArray=s.frameArray,this._timelineArray=s.timelineArray,this._frameIndices=s.frameIndices,this._frameCount=this._timelineArray[this._timelineData.offset+2],this._frameValueOffset=this._timelineArray[this._timelineData.offset+4],this._timeScale=100/this._timelineArray[this._timelineData.offset+0],this._timeOffset=.01*this._timelineArray[this._timelineData.offset+1]}},e.prototype.fadeOut=function(){this.dirty=!1},e.prototype.update=function(t){if(this._setCurrentTime(t)){if(1<this._frameCount){var e=Math.floor(this.currentTime*this._frameRate),i=this._frameIndices[this._timelineData.frameIndicesOffset+e];this._frameIndex!==i&&(this._frameIndex=i,this._frameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5+this._frameIndex],this._onArriveAtFrame())}else this._frameIndex<0&&(this._frameIndex=0,null!==this._timelineData&&(this._frameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5]),this._onArriveAtFrame());(this._isTween||this.dirty)&&this._onUpdateFrame()}},e.prototype.blend=function(t){},e}(BaseObject_1.BaseObject),TweenTimelineState=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e._getEasingValue=function(t,e,i){var s=e;switch(t){case 3:s=Math.pow(e,2);break;case 4:s=1-Math.pow(1-e,2);break;case 5:s=.5*(1-Math.cos(e*Math.PI))}return(s-e)*i+e},e._getEasingCurveValue=function(t,e,i,s){if(t<=0)return 0;if(1<=t)return 1;var a=0<i,r=i+1,n=Math.floor(t*r),h=0,_=0;return _=a?(h=0===n?0:e[s+n-1],n===r-1?1e4:e[s+n]):(h=e[s+n-1],e[s+n]),1e-4*(h+(_-h)*(t*r-n))},e.prototype._onClear=function(){t.prototype._onClear.call(this),this._tweenType=0,this._curveCount=0,this._framePosition=0,this._frameDurationR=0,this._tweenEasing=0,this._tweenProgress=0,this._valueScale=1},e.prototype._onArriveAtFrame=function(){if(1<this._frameCount&&(this._frameIndex!==this._frameCount-1||0===this._animationState.playTimes||this._animationState.currentPlayTimes<this._animationState.playTimes-1))if(this._tweenType=this._frameArray[this._frameOffset+1],this._isTween=0!==this._tweenType,this._isTween?2===this._tweenType?this._curveCount=this._frameArray[this._frameOffset+2]:0!==this._tweenType&&1!==this._tweenType&&(this._tweenEasing=.01*this._frameArray[this._frameOffset+2]):this.dirty=!0,this._framePosition=this._frameArray[this._frameOffset]*this._frameRateR,this._frameIndex===this._frameCount-1)this._frameDurationR=1/(this._animationData.duration-this._framePosition);else{var t=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5+this._frameIndex+1],e=this._frameArray[t]*this._frameRateR-this._framePosition;this._frameDurationR=0<e?1/e:0}else this.dirty=!0,this._isTween=!1},e.prototype._onUpdateFrame=function(){this._isTween&&(this.dirty=!0,this._tweenProgress=(this.currentTime-this._framePosition)*this._frameDurationR,2===this._tweenType?this._tweenProgress=e._getEasingCurveValue(this._tweenProgress,this._frameArray,this._curveCount,this._frameOffset+3):1!==this._tweenType&&(this._tweenProgress=e._getEasingValue(this._tweenType,this._tweenProgress,this._tweenEasing)))},e}(exports.TimelineState=TimelineState),SingleValueTimelineState=function(a){function t(){return null!==a&&a.apply(this,arguments)||this}return __extends(t,a),t.prototype._onClear=function(){a.prototype._onClear.call(this),this._current=0,this._difference=0,this._result=0},t.prototype._onArriveAtFrame=function(){if(a.prototype._onArriveAtFrame.call(this),null!==this._timelineData){var t=this._valueScale,e=this._valueArray,i=this._valueOffset+this._frameValueOffset+this._frameIndex;if(this._isTween){var s=this._frameIndex===this._frameCount-1?this._valueOffset+this._frameValueOffset:i+1;1===t?(this._current=e[i],this._difference=e[s]-this._current):(this._current=e[i]*t,this._difference=e[s]*t-this._current)}else this._result=e[i]*t}else this._result=0},t.prototype._onUpdateFrame=function(){a.prototype._onUpdateFrame.call(this),this._isTween&&(this._result=this._current+this._difference*this._tweenProgress)},t}(exports.TweenTimelineState=TweenTimelineState);exports.SingleValueTimelineState=SingleValueTimelineState;var DoubleValueTimelineState=function(a){function t(){return null!==a&&a.apply(this,arguments)||this}return __extends(t,a),t.prototype._onClear=function(){a.prototype._onClear.call(this),this._currentA=0,this._currentB=0,this._differenceA=0,this._differenceB=0,this._resultA=0,this._resultB=0},t.prototype._onArriveAtFrame=function(){if(a.prototype._onArriveAtFrame.call(this),null!==this._timelineData){var t=this._valueScale,e=this._valueArray,i=this._valueOffset+this._frameValueOffset+2*this._frameIndex;if(this._isTween){var s=this._frameIndex===this._frameCount-1?this._valueOffset+this._frameValueOffset:i+2;1===t?(this._currentA=e[i],this._currentB=e[i+1],this._differenceA=e[s]-this._currentA,this._differenceB=e[s+1]-this._currentB):(this._currentA=e[i]*t,this._currentB=e[i+1]*t,this._differenceA=e[s]*t-this._currentA,this._differenceB=e[s+1]*t-this._currentB)}else this._resultA=e[i]*t,this._resultB=e[i+1]*t}else this._resultA=0,this._resultB=0},t.prototype._onUpdateFrame=function(){a.prototype._onUpdateFrame.call(this),this._isTween&&(this._resultA=this._currentA+this._differenceA*this._tweenProgress,this._resultB=this._currentB+this._differenceB*this._tweenProgress)},t}(TweenTimelineState);exports.DoubleValueTimelineState=DoubleValueTimelineState;var MutilpleValueTimelineState=function(h){function t(){var t=null!==h&&h.apply(this,arguments)||this;return t._rd=[],t}return __extends(t,h),t.prototype._onClear=function(){h.prototype._onClear.call(this),this._valueCount=0,this._rd.length=0},t.prototype._onArriveAtFrame=function(){h.prototype._onArriveAtFrame.call(this);var t=this._valueCount,e=this._rd;if(null!==this._timelineData){var i=this._valueScale,s=this._valueArray,a=this._valueOffset+this._frameValueOffset+this._frameIndex*t;if(this._isTween){var r=this._frameIndex===this._frameCount-1?this._valueOffset+this._frameValueOffset:a+t;if(1===i)for(var n=0;n<t;++n)e[t+n]=s[r+n]-s[a+n];else for(n=0;n<t;++n)e[t+n]=(s[r+n]-s[a+n])*i}else if(1===i)for(n=0;n<t;++n)e[n]=s[a+n];else for(n=0;n<t;++n)e[n]=s[a+n]*i}else for(n=0;n<t;++n)e[n]=0},t.prototype._onUpdateFrame=function(){if(h.prototype._onUpdateFrame.call(this),this._isTween){var t=this._valueCount,e=this._valueScale,i=this._tweenProgress,s=this._valueArray,a=this._rd,r=this._valueOffset+this._frameValueOffset+this._frameIndex*t;if(1===e)for(var n=0;n<t;++n)a[n]=s[r+n]+a[t+n]*i;else for(n=0;n<t;++n)a[n]=s[r+n]*e+a[t+n]*i}},t}(TweenTimelineState);exports.MutilpleValueTimelineState=MutilpleValueTimelineState;