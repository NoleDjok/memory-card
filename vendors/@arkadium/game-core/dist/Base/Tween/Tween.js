"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Easing_1=require("./Easing"),Interpolation_1=require("./Interpolation"),Tween=function(){function i(t){for(var e in this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=Easing_1.Easing.Linear.None,this._interpolationFunction=Interpolation_1.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._object=t)this._valuesStart[e]=parseFloat(t[e],10)}return i.getAll=function(){return this._tweens},i.removeAll=function(){this._tweens=[]},i.add=function(t){this._tweens.push(t)},i.remove=function(t){var e=this._tweens.indexOf(t);-1!==e&&this._tweens.splice(e,1)},i.update=function(t){if(0===this._tweens.length)return!1;var e=0;for(t=void 0!==t?t:window.performance.now();e<this._tweens.length;)this._tweens[e].update(t)?e++:this._tweens.splice(e,1);return!0},i.prototype.to=function(t,e){return void 0!==e&&(this._duration=e),this._valuesEnd=t,this},i.prototype.start=function(t){for(var e in i.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?t:window.performance.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}this._valuesStart[e]=this._object[e],this._valuesStart[e]instanceof Array==!1&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0}return this},i.prototype.stop=function(){return this._isPlaying&&(i.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback.call(this._object),this.stopChainedTweens()),this},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},i.prototype.delay=function(t){return this._delayTime=t,this},i.prototype.repeat=function(t){return this._repeat=t,this},i.prototype.yoyo=function(t){return this._yoyo=t,this},i.prototype.easing=function(t){return this._easingFunction=t,this},i.prototype.interpolation=function(t){return this._interpolationFunction=t,this},i.prototype.chain=function(){return this._chainedTweens=arguments,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t){var e;if(t<this._startTime)return!0;!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback.call(this._object),this._onStartCallbackFired=!0);var i=(t-this._startTime)/this._duration;i=1<i?1:i;var n=this._easingFunction(i);for(e in this._valuesEnd){var s=this._valuesStart[e]||0,a=this._valuesEnd[e];a instanceof Array?this._object[e]=this._interpolationFunction(a,n):("string"==typeof a&&(a=s+parseFloat(a,10)),"number"==typeof a&&(this._object[e]=s+(a-s)*n))}if(null!==this._onUpdateCallback&&this._onUpdateCallback.call(this._object,n),1!=i)return!0;if(0<this._repeat){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e],10)),this._yoyo){var o=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=o}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback.call(this._object);for(var r=0,h=this._chainedTweens.length;r<h;r++)this._chainedTweens[r].start(t);return!1},i._tweens=[],i}();exports.Tween=Tween;