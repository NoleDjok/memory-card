"use strict";var __extends=this&&this.__extends||function(){var n=function(e,i){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var t in i)i.hasOwnProperty(t)&&(e[t]=i[t])})(e,i)};return function(e,i){function t(){this.constructor=e}n(e,i),e.prototype=null===i?Object.create(i):(t.prototype=i.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var BaseObject_1=require("../core/BaseObject"),AnimationData=function(i){function e(){var e=null!==i&&i.apply(this,arguments)||this;return e.cachedFrames=[],e.boneTimelines={},e.slotTimelines={},e.constraintTimelines={},e.animationTimelines={},e.boneCachedFrameIndices={},e.slotCachedFrameIndices={},e.actionTimeline=null,e.zOrderTimeline=null,e}return __extends(e,i),e.toString=function(){return"[class dragonBones.AnimationData]"},e.prototype._onClear=function(){for(var e in this.boneTimelines){for(var i=0,t=this.boneTimelines[e];i<t.length;i++){t[i].returnToPool()}delete this.boneTimelines[e]}for(var e in this.slotTimelines){for(var n=0,s=this.slotTimelines[e];n<s.length;n++){s[n].returnToPool()}delete this.slotTimelines[e]}for(var e in this.constraintTimelines){for(var o=0,a=this.constraintTimelines[e];o<a.length;o++){a[o].returnToPool()}delete this.constraintTimelines[e]}for(var e in this.animationTimelines){for(var r=0,l=this.animationTimelines[e];r<l.length;r++){l[r].returnToPool()}delete this.animationTimelines[e]}for(var e in this.boneCachedFrameIndices)delete this.boneCachedFrameIndices[e];for(var e in this.slotCachedFrameIndices)delete this.slotCachedFrameIndices[e];null!==this.actionTimeline&&this.actionTimeline.returnToPool(),null!==this.zOrderTimeline&&this.zOrderTimeline.returnToPool(),this.frameIntOffset=0,this.frameFloatOffset=0,this.frameOffset=0,this.blendType=0,this.frameCount=0,this.playTimes=0,this.duration=0,this.scale=1,this.fadeInTime=0,this.cacheFrameRate=0,this.name="",this.cachedFrames.length=0,this.actionTimeline=null,this.zOrderTimeline=null,this.parent=null},e.prototype.cacheFrames=function(e){if(!(0<this.cacheFrameRate)){this.cacheFrameRate=Math.max(Math.ceil(e*this.scale),1);var i=Math.ceil(this.cacheFrameRate*this.duration)+1;this.cachedFrames.length=i;for(var t=0,n=this.cacheFrames.length;t<n;++t)this.cachedFrames[t]=!1;for(var s=0,o=this.parent.sortedBones;s<o.length;s++){var a=o[s];for(t=0,n=(h=new Array(i)).length;t<n;++t)h[t]=-1;this.boneCachedFrameIndices[a.name]=h}for(var r=0,l=this.parent.sortedSlots;r<l.length;r++){var h,c=l[r];for(t=0,n=(h=new Array(i)).length;t<n;++t)h[t]=-1;this.slotCachedFrameIndices[c.name]=h}}},e.prototype.addBoneTimeline=function(e,i){var t=e in this.boneTimelines?this.boneTimelines[e]:this.boneTimelines[e]=[];t.indexOf(i)<0&&t.push(i)},e.prototype.addSlotTimeline=function(e,i){var t=e in this.slotTimelines?this.slotTimelines[e]:this.slotTimelines[e]=[];t.indexOf(i)<0&&t.push(i)},e.prototype.addConstraintTimeline=function(e,i){var t=e in this.constraintTimelines?this.constraintTimelines[e]:this.constraintTimelines[e]=[];t.indexOf(i)<0&&t.push(i)},e.prototype.addAnimationTimeline=function(e,i){var t=e in this.animationTimelines?this.animationTimelines[e]:this.animationTimelines[e]=[];t.indexOf(i)<0&&t.push(i)},e.prototype.getBoneTimelines=function(e){return e in this.boneTimelines?this.boneTimelines[e]:null},e.prototype.getSlotTimelines=function(e){return e in this.slotTimelines?this.slotTimelines[e]:null},e.prototype.getConstraintTimelines=function(e){return e in this.constraintTimelines?this.constraintTimelines[e]:null},e.prototype.getAnimationTimelines=function(e){return e in this.animationTimelines?this.animationTimelines[e]:null},e.prototype.getBoneCachedFrameIndices=function(e){return e in this.boneCachedFrameIndices?this.boneCachedFrameIndices[e]:null},e.prototype.getSlotCachedFrameIndices=function(e){return e in this.slotCachedFrameIndices?this.slotCachedFrameIndices[e]:null},e}(BaseObject_1.BaseObject);exports.AnimationData=AnimationData;var TimelineData=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.toString=function(){return"[class dragonBones.TimelineData]"},i.prototype._onClear=function(){this.type=10,this.offset=0,this.frameIndicesOffset=-1},i}(BaseObject_1.BaseObject),AnimationTimelineData=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return __extends(i,e),i.toString=function(){return"[class dragonBones.AnimationTimelineData]"},i.prototype._onClear=function(){e.prototype._onClear.call(this),this.x=0,this.y=0},i}(exports.TimelineData=TimelineData);exports.AnimationTimelineData=AnimationTimelineData;