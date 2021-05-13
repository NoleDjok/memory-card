"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;0<=s;s--)(n=e[s])&&(a=(r<3?n(a):3<r?n(t,i,a):n(t,i))||a);return 3<r&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<i;t++)for(var r=arguments[t],a=0,s=r.length;a<s;a++,n++)o[n]=r[a];return o};Object.defineProperty(exports,"__esModule",{value:!0});var Linq_1=require("../Linq/Linq"),IViewConfiguration_1=require("./IViewConfiguration"),ResourceItem_1=require("./Resources/ResourceItem"),SpriteList_1=require("./SpriteList"),SpriteEvents_1=require("./SpriteEvents"),_ViewBase_1=require("./_ViewBase"),GamePerformance_1=require("../GamePerformance"),MovieClipContainer_1=require("../Animate/factories/MovieClipContainer"),AnimateViewBase=function(n){function e(e){var t=n.call(this,e)||this;return t.name=e,t.$sprites=new SpriteList_1.SpriteList,t.$spritesEvents=new SpriteEvents_1.SpriteEvents,t._width=void 0,t._height=void 0,t.__needUpdate=!1,t}return __extends(e,n),Object.defineProperty(e.prototype,"_movieClip",{get:function(){return this.__movieClip},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this.__movieClip},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"container",{get:function(){return this.__movieClip},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"graphics",{get:function(){return this.__movieClip instanceof PIXI.Graphics?this.__movieClip:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sprite",{get:function(){return this.__movieClip instanceof PIXI.Sprite?this.__movieClip:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.__movieClip.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.__movieClip.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loop",{get:function(){return this._movieClip.loop},set:function(e){this._movieClip.loop=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){return this._movieClip.currentFrame},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startPosition",{get:function(){return this._movieClip.startPosition},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"movieClipLabels",{get:function(){return this._movieClip.labels},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._movieClip.paused},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoReset",{get:function(){return this._movieClip.autoReset},set:function(e){this._movieClip.autoReset=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selfAdvance",{get:function(){return this._movieClip.selfAdvance},set:function(e){this._movieClip.selfAdvance=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"framerate",{get:function(){return this._movieClip.framerate},set:function(e){this._movieClip.framerate=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this.__movieClip.x},set:function(e){this.__movieClip.x=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.__movieClip.y},set:function(e){this.__movieClip.y=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return this.__movieClip.visible},set:function(e){this.__movieClip.visible=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"display",{get:function(){return this.__movieClip},enumerable:!0,configurable:!0}),e.prototype.configure=function(e){n.prototype.configure.call(this,e),this.config.movieClipName=e.movieClipName||this.config.movieClipName,this.config.symbolName=e.symbolName||this.config.symbolName,this.config.animateContent=e.animateContent||this.config.animateContent,this.config.animateContent&&this.$resources.items.Add(new ResourceItem_1.ResourceItem("Animate_Resources_"+this.name,this.config.animateContent,ResourceItem_1.ResourceItemType.pixiAnimate))},e.prototype._stopAllMovieClip=function(e){if(e.___children&&e.___children.length)for(var t=e.___children,i=0;i<t.length;i++){var o=t[i];o.stop&&o.stop(),o.loop&&(o.loop=!1),this._stopAllMovieClip(o)}},e.prototype.gotoAndStop=function(e){this._movieClip.gotoAndStop(e)},e.prototype.gotoAndPlay=function(e){this._movieClip.gotoAndPlay(e)},e.prototype.gotoAndStopChild=function(e,t){void 0===t&&(t=0),this._movieClip.gotoAndStopChild(e,t)},e.prototype.gotoAndStopAllChild=function(e){void 0===e&&(e=0),this._movieClip.gotoAndStopAllChild(e)},e.prototype.gotoAndPlayChild=function(e,t,i,o){void 0===t&&(t=0),void 0===i&&(i=!1),void 0===o&&(o=!0),this._movieClip.gotoAndPlayChild(e,t,i,o)},e.prototype.gotoAndPlayAll=function(e,t){this._movieClip.gotoAndPlayAll(e,t)},e.prototype.gotoAndStopAll=function(e){this._movieClip.gotoAndStopAll(e)},e.prototype.stop=function(e){void 0===e&&(e=!0),this._movieClip.stop(e)},e.prototype._dispatchEvent=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this.onDispatchEvent.apply(this,__spreadArrays([e],t))},e.prototype.onDispatchEvent=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i]},e.prototype._getChild=function(e,t,i){void 0===i&&(i=0);for(var o=t.___children,n=null,r=0;r<o.length;r++)if(o[r].name==e[i])return n=o[r],i++,e.length==i?n:this._getChild(e,n,i);return n},e.prototype.sortCurrentMovieClipChildren=function(e){for(var t=this._movieClip.children,i=null,o=new Linq_1.List,n=0;n<t.length;n++)(i=t[n]).zOrder=0,e(i,i.__view)&&o.Add(i);this._movieClip.__childrenSorted=o.OrderBy(function(e){return e.zOrder}).ToArray()},e.prototype.getCurrentMovieClipChildren=function(e,t){var i=this._movieClip;if(t){var o=t.split(".");i=this._getChild(o,this._movieClip)}for(var n=i.children,r=0;r<n.length;r++)e(n[r])},e.prototype.initialize=function(e,t){if(void 0===t&&(t=null),this.parentContainer=t||e.display,this.config.symbolName&&!this.config.animateContent)throw'To build a movie clip by "symbolName" "animateContent" must be assigned';if(this.config.animateContent)this.config.symbolName?this.__movieClip=this.config.animateContent.factory.getInstance(this.config.symbolName):this.__movieClip=this.config.animateContent.factory.getInstance(),this._movieClip.loop=!1,this._stopAllMovieClip(this._movieClip),this._width=this.config.animateContent._meta.width,this._height=this.config.animateContent._meta.height,this.parentContainer.addChild(this.__movieClip),this.__needUpdate=!(this.parentContainer instanceof MovieClipContainer_1.MovieClipContainer);else if(this.config.movieClipName){var i=this.config.movieClipName.split("."),o=this._getChild(i,this.parentContainer);o&&(this.__movieClip=o,this._movieClip.stop&&this._movieClip.stop(),this._movieClip.loop&&(this._movieClip.loop=!1),this._stopAllMovieClip(this._movieClip))}return this.__movieClip&&(this._movieClip.__view=this)._movieClip.onEvent&&this._movieClip.onEvent("dispatchEvent",this._dispatchEvent,this),this.$sprites.initialize(this.config.sprites,this._movieClip,this),this.$spritesEvents.initialize(this.config.events,null,this.$sprites,this,this.logger),this.config.onTap&&this.$spritesEvents.addEvent(this._movieClip,this.config.onTap,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.CLICK_OR_TAP,event:this.config.onTap,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),this.config.onPointerDown&&this.$spritesEvents.addEvent(this._movieClip,this.config.onPointerDown,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.POINTERDOWN,event:this.config.onPointerDown,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),this.config.onPointerUp&&this.$spritesEvents.addEvent(this._movieClip,this.config.onPointerUp,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.POINTERUP,event:this.config.onPointerUp,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),this.config.onPointerUpOutside&&this.$spritesEvents.addEvent(this._movieClip,this.config.onPointerUpOutside,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.POINTERUPOUTSIDE,event:this.config.onPointerUpOutside,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),this.config.onPointerOut&&this.$spritesEvents.addEvent(this._movieClip,this.config.onPointerOut,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.POINTEROUT,event:this.config.onPointerOut,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),this.config.onPointerOver&&this.$spritesEvents.addEvent(this._movieClip,this.config.onPointerOver,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.POINTEROVER,event:this.config.onPointerOver,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),this.config.onPointerMove&&this.$spritesEvents.addEvent(this._movieClip,this.config.onPointerMove,this,this.logger,{eventType:IViewConfiguration_1.EventsTypeEnum.POINTERMOVE,event:this.config.onPointerMove,targetType:IViewConfiguration_1.EventsTargetTypeEnum.SPRITE,targetName:this._movieClip.name}),n.prototype.initialize.call(this,e,t)},e.prototype.update=function(e){return this.__needUpdate&&this.visible&&this._movieClip.update(e),n.prototype.update.call(this,e)},e.prototype.dispose=function(){this.config.animateContent&&(this.parentContainer.removeChild(this._movieClip),this._movieClip.destroy({children:!0})),n.prototype.dispose.call(this),this.$spritesEvents.dispose(),this.__movieClip&&this._movieClip.offEvent&&this._movieClip.offEvent("dispatchEvent",this._dispatchEvent),this.config=null,this.$sprites=null,this.$spritesEvents=null,delete this.__movieClip,this.__movieClip=null},e.prototype.clear=function(){n.prototype.clear.call(this),this.$sprites=new SpriteList_1.SpriteList,this.$spritesEvents=new SpriteEvents_1.SpriteEvents},__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndStop"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndStop",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndPlay"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndPlay",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndStopChild"),__metadata("design:type",Function),__metadata("design:paramtypes",[String,Object]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndStopChild",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndStopChild"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndStopAllChild",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndPlayChild"),__metadata("design:type",Function),__metadata("design:paramtypes",[String,Object,Boolean,Boolean]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndPlayChild",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndPlayAll"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,Linq_1.List]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndPlayAll",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","gotoAndStopAll"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],e.prototype,"gotoAndStopAll",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","stop"),__metadata("design:type",Function),__metadata("design:paramtypes",[Boolean]),__metadata("design:returntype",void 0)],e.prototype,"stop",null),__decorate([GamePerformance_1.GamePerformanceMethod("AnimateViewBase","Initialize view"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,PIXI.Container]),__metadata("design:returntype",PIXI.Container)],e.prototype,"initialize",null),e}(_ViewBase_1._ViewBase),AnimateLoadingViewBase=function(i){function e(e){var t=i.call(this,e)||this;return t.name=e,t}return __extends(e,i),e.prototype.toggleVisible=function(e){this.visible!=e&&((this.visible=e)?this.onShow():this.onHide())},e}(exports.AnimateViewBase=AnimateViewBase);exports.AnimateLoadingViewBase=AnimateLoadingViewBase;