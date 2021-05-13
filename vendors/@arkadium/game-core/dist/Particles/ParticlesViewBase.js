"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var _ViewBase_1=require("../Base/_ViewBase"),Emitter_1=require("./Emitter"),__1=require(".."),ParticlesViewBase=function(s){function t(){var t=null!==s&&s.apply(this,arguments)||this;return t._pause=!1,t}return __extends(t,s),Object.defineProperty(t.prototype,"particlesEmitter",{get:function(){return this._emitter},enumerable:!0,configurable:!0}),t.prototype.configure=function(t){if(s.prototype.configure.call(this,t),this.config.imagePaths)for(var e=0;e<this.config.imagePaths.length;e++)this.$resources.items.Add(new __1.ResourceItem("Particles_Resources_"+this.name+e,this.config.imagePaths[e],__1.ResourceItemType.pixiTexture))},t.prototype.initialize=function(t,e){void 0===e&&(e=null),this.parentContainer=e||t.display;var i=[];if(this.config.imagePaths)for(var r=0;r<this.config.imagePaths.length;r++)i.push(this.$resources.get("Particles_Resources_"+this.name+r).pixiTexture);return this._emitter=new Emitter_1.Emitter(this.display,i,this.config.particlesConfig),this.parentContainer.addChild(this.display),s.prototype.initialize.call(this,t,e)},t.prototype.pause=function(t){this._pause=t},t.prototype.update=function(t){return!!s.prototype.update.call(this,t)&&(this._pause||this._emitter.update(t),!0)},t.prototype.dispose=function(){this.parentContainer.removeChild(this.display),this._emitter.cleanup(),this._emitter.destroy(),this._emitter=null,s.prototype.dispose.call(this)},t}(_ViewBase_1._ViewBase);exports.ParticlesViewBase=ParticlesViewBase;