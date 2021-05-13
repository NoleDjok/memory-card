"use strict";var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var DragonBones_1=require("../core/DragonBones"),PixiArmatureDisplay=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.debugDraw=!1,e._debugDraw=!1,e._armature=null,e._debugDrawer=null,e}return __extends(e,t),e.prototype.dbInit=function(e){this._armature=e},e.prototype.dbClear=function(){null!==this._debugDrawer&&this._debugDrawer.destroy({children:!0,texture:!0,baseTexture:!0}),this._armature=null,this._debugDrawer=null,t.prototype.destroy.call(this)},e.prototype.dbUpdate=function(){var e=DragonBones_1.DragonBones.debugDraw||this.debugDraw;if(e||this._debugDraw)if(this._debugDraw=e,this._debugDraw){if(null===this._debugDrawer){this._debugDrawer=new PIXI.Sprite(PIXI.Texture.EMPTY);var t=new PIXI.Graphics;this._debugDrawer.addChild(t)}this.addChild(this._debugDrawer);var r=this._debugDrawer.getChildAt(0);r.clear();for(var i=this._armature.getBones(),a=0,n=i.length;a<n;++a){var o=i[a],s=o.boneData.length,u=o.globalTransformMatrix.tx,l=o.globalTransformMatrix.ty,d=u+o.globalTransformMatrix.a*s,h=l+o.globalTransformMatrix.b*s;r.lineStyle(2,65535,.7),r.moveTo(u,l),r.lineTo(d,h),r.lineStyle(0,0,0),r.beginFill(65535,.7),r.drawCircle(u,l,3),r.endFill()}var p=this._armature.getSlots();for(a=0,n=p.length;a<n;++a){var g=p[a],_=g.boundingBoxData;if(_){switch((D=this._debugDrawer.getChildByName(g.name))||((D=new PIXI.Graphics).name=g.name,this._debugDrawer.addChild(D)),D.clear(),D.lineStyle(2,16711935,.7),_.type){case 0:D.drawRect(.5*-_.width,.5*-_.height,_.width,_.height);break;case 1:D.drawEllipse(.5*-_.width,.5*-_.height,_.width,_.height);break;case 2:for(var b=_.vertices,c=0,f=b.length;c<f;c+=2){var m=b[c],w=b[c+1];0===c?D.moveTo(m,w):D.lineTo(m,w)}D.lineTo(b[0],b[1])}D.endFill(),g.updateTransformAndMatrix(),g.updateGlobalTransform();var y=g.global;D.setTransform(y.x,y.y,y.scaleX,y.scaleY,y.rotation,y.skew,0,g._pivotX,g._pivotY)}else{var D;(D=this._debugDrawer.getChildByName(g.name))&&this._debugDrawer.removeChild(D)}}}else null!==this._debugDrawer&&this._debugDrawer.parent===this&&this.removeChild(this._debugDrawer)},e.prototype.dispose=function(e){void 0===e&&(e=!0),null!==this._armature&&(this._armature.dispose(),this._armature=null)},e.prototype.destroy=function(){this.dispose()},e.prototype.dispatchDBEvent=function(e,t){this.emit(e,t)},e.prototype.hasDBEventListener=function(e){return 0<this.listenerCount(e)},e.prototype.addDBEventListener=function(e,t,r){this.addListener(e,t,r)},e.prototype.removeDBEventListener=function(e,t,r){this.removeListener(e,t,r)},Object.defineProperty(e.prototype,"armature",{get:function(){return this._armature},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"animation",{get:function(){return this._armature.animation},enumerable:!0,configurable:!0}),e}(PIXI.Sprite);exports.PixiArmatureDisplay=PixiArmatureDisplay;