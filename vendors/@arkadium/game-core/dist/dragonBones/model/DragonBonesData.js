"use strict";var __extends=this&&this.__extends||function(){var a=function(t,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};return function(t,r){function e(){this.constructor=t}a(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var BaseObject_1=require("../core/BaseObject"),DragonBonesData=function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.frameIndices=[],t.cachedFrames=[],t.armatureNames=[],t.armatures={},t.userData=null,t}return __extends(t,r),t.toString=function(){return"[class dragonBones.DragonBonesData]"},t.prototype._onClear=function(){for(var t in this.armatures)this.armatures[t].returnToPool(),delete this.armatures[t];null!==this.userData&&this.userData.returnToPool(),this.autoSearch=!1,this.frameRate=0,this.version="",this.name="",this.stage=null,this.frameIndices.length=0,this.cachedFrames.length=0,this.armatureNames.length=0,this.binary=null,this.intArray=null,this.floatArray=null,this.frameIntArray=null,this.frameFloatArray=null,this.frameArray=null,this.timelineArray=null,this.colorArray=null,this.userData=null},t.prototype.addArmature=function(t){t.name in this.armatures?console.warn("Same armature: "+t.name):((t.parent=this).armatures[t.name]=t,this.armatureNames.push(t.name))},t.prototype.getArmature=function(t){return t in this.armatures?this.armatures[t]:null},t}(BaseObject_1.BaseObject);exports.DragonBonesData=DragonBonesData;