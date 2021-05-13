"use strict";var __extends=this&&this.__extends||function(){var n=function(e,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};return function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var PixiArmatureDisplay_1=require("./PixiArmatureDisplay"),PixiTextureAtlasData_1=require("./PixiTextureAtlasData"),BaseFactory_1=require("../factory/BaseFactory"),DragonBones_1=require("../core/DragonBones"),BaseObject_1=require("../core/BaseObject"),Armature_1=require("../armature/Armature"),PixiSlot_1=require("./PixiSlot"),PixiFactory=function(n){function a(e){void 0===e&&(e=null);var r=n.call(this,e)||this;if(null===a._dragonBonesInstance){var t=new PixiArmatureDisplay_1.PixiArmatureDisplay;a._dragonBonesInstance=new DragonBones_1.DragonBones(t)}return r._dragonBones=a._dragonBonesInstance,r}return __extends(a,n),a.clockHandler=function(e){null!==a._dragonBonesInstance&&a._dragonBonesInstance.advanceTime(e)},Object.defineProperty(a,"factory",{get:function(){return null===a._factory&&(a._factory=new a),a._factory},enumerable:!0,configurable:!0}),a.prototype._buildTextureAtlasData=function(e,r){return e?e.renderTexture=r:e=BaseObject_1.BaseObject.borrowObject(PixiTextureAtlasData_1.PixiTextureAtlasData),e},a.prototype._buildArmature=function(e){var r=BaseObject_1.BaseObject.borrowObject(Armature_1.Armature),t=new PixiArmatureDisplay_1.PixiArmatureDisplay;return r.init(e.armature,t,t,this._dragonBones),r},a.prototype._buildSlot=function(e,r,t){var n=BaseObject_1.BaseObject.borrowObject(PixiSlot_1.PixiSlot);return n.init(r,t,new PIXI.Sprite,new PIXI.mesh.Mesh(null,null,null,null,PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES)),n},a.prototype.buildArmatureDisplay=function(e,r,t,n){void 0===r&&(r=""),void 0===t&&(t=""),void 0===n&&(n="");var a=this.buildArmature(e,r||"",t||"",n||"");return null!==a?(this._dragonBones.clock.add(a),a.display):null},a.prototype.getTextureDisplay=function(e,r){void 0===r&&(r=null);var t=this._getTextureData(null!==r?r:"",e);return null!==t&&null!==t.renderTexture?new PIXI.Sprite(t.renderTexture):null},Object.defineProperty(a.prototype,"soundEventManager",{get:function(){return this._dragonBones.eventManager},enumerable:!0,configurable:!0}),a._dragonBonesInstance=null,a._factory=null,a}(BaseFactory_1.BaseFactory);exports.PixiFactory=PixiFactory;