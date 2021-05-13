"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __decorate=this&&this.__decorate||function(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;0<=n;n--)(s=e[n])&&(a=(i<3?s(a):3<i?s(t,r,a):s(t,r))||a);return 3<i&&a&&Object.defineProperty(t,r,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var Queue_1=require("../Queue/Queue"),IArenaApi_1=require("../Arena/IArenaApi"),typescript_ioc_1=require("../../IoC/typescript-ioc"),ResourceItem_1=require("./ResourceItem"),Linq_1=require("../../Linq/Linq"),FontLoader_1=require("./FontLoader"),PixiAnimateLoader_1=require("../../Animate/PixiAnimateLoader"),GameResources_1=require("../../GameResources"),ViewBaseEmptyLogger_1=require("../ViewBaseEmptyLogger"),AnimateResourcesLoader=function(){function e(){this._queue=new Queue_1.Queue,this._clock=0,this._loadingCount=0,this._progress=0,this._loadingCall=0,this._currentProgress=0}var o;return(o=e).prototype.setGameBase=function(e){this._gameBase=e},e.prototype._getUrl=function(e){if(e.startsWith("//")||e.startsWith("http://")||e.startsWith("https://"))return e;var t=this._arenaApi.absoluteURL("")+this._gameResources.root;return t.endsWith("/")&&e.startsWith("/")?t=t.substring(0,t.length-1):t.endsWith("/")||e.startsWith("/")||(t+="/"),t+e.replace("%RESOURCES_SCALE%","2")},e.prototype.update=function(e){if(this._queue.update(e),0<this._queue.length&&.1<this._queue.clock-this._clock){this._clock=this._queue.clock,this._progress=(this._loadingCount-(this._queue.length-this._loadingCall))/this._loadingCount;var t=(PIXI.loader.progress<100?.9*(1-this._progress)*PIXI.loader.progress:0)/100,r=1-(1-this._progress);r=(r=.9<r?.9:r)<.3?.3:r;var o=1-(this._progress+t),s=o*r-o*r/(2*this._clock),i=Math.round(100*(this._progress+t+s))/100;this._currentProgress!=i&&(this._currentProgress=i,this._gameBase.setLoading(this._currentProgress<0?0:this._currentProgress))}},e.prototype.load=function(l,t,r){var _=this,g=!1,e=new Linq_1.List(t);if(o.loading)return this._loadingCall++,void this._queue.push({condition:function(e){return!0},action:function(e){_._loadingCall--,_.load(l,t,r)}});e.ForEach(function(r,e){if(!r.loaded&&!r.requested){var t=!1;if(r.type==ResourceItem_1.ResourceItemType.threeJsTexture){t=!0;var o=new THREE.TextureLoader;o.crossOrigin="",o.load(_._getUrl(r.resources),function(e){_._logger.log(l,"LoadCompleted",r.name,r.resources),r.threeTexture=e,r.loaded=!0})}else if(r.type==ResourceItem_1.ResourceItemType.font)t=!0,FontLoader_1.FontLoader(r.resources,function(){_._logger.log(l,"LoadCompleted",r.name,r.resources),r.loaded=!0},{timeoutAfter:5e3,onTimeout:function(){_._logger.log(l,"LoadCompleted",r.name,r.resources),r.loaded=!0}});else if(r.type==ResourceItem_1.ResourceItemType.threeJsCubeTexture){t=!0;var s=new THREE.CubeTextureLoader;s.crossOrigin="";for(var i=[],a=0;a<r.resources.length;a++)i.push(_._getUrl(r.resources[a]));s.load(i,function(e){_._logger.log(l,"LoadCompleted",r.name,i),r.threeCubeTexture=e,r.loaded=!0})}else if(r.type==ResourceItem_1.ResourceItemType.pixiTexture)t=!0,r.temporary=!0,PIXI.loader.resources[r.name]||(g=!0,PIXI.loader.add(r.name,_._getUrl(r.resources)),r.complete=function(){PIXI.loader.resources[r.name]&&(r.pixiTexture=PIXI.loader.resources[r.name].texture),r.loaded=!0,_._logger.log(l,"LoadCompleted",r.name,r.resources)});else if(r.type==ResourceItem_1.ResourceItemType.pixiAnimate){if(!r.resources.factory){var n=new PixiAnimateLoader_1.PixiAnimateLoader(r.resources);n.build();var u=(r.resources.factory=n).animate.__assets||{},c=!1;if(u&&Object.keys(u).length){for(var d in u)if(!PIXI.loader.resources[d]){c=t=g=!0;PIXI.loader.add(d,_._getUrl(u[d]),null)}c&&(r.complete=function(e,t){r.loaded=!0,_._logger.log(l,"LoadCompleted",r.name,r.name)})}}}else"string"==typeof r.resources&&(t=!0,r.temporary=!0,PIXI.loader.resources[r.name]||(g=!0,PIXI.loader.add(r.name,_._getUrl(r.resources)),r.complete=function(){r.loaded=!0,_._logger.log(l,"LoadCompleted",r.name,r.resources)}));g=t||g,t&&(r.requested=!0,_._queue.push({condition:function(e){return r.loaded},action:function(e){}}))}}),g?(o.loading=!0,this._gameBase.showLoading(!0),this._currentProgress=0,this._gameBase.setLoading(0),this._queue.push({condition:function(e){return!0},action:function(e){_._gameBase.setLoading(1)}}),this._queue.push({condition:function(e){return.2<e},action:function(e){o.loading=!1,_._gameBase.showLoading(!1),r()}}),this._clock=0,this._loadingCount=this._queue.length-this._loadingCall,PIXI.loader.once("complete",function(r,o){e.ForEach(function(e,t){e.complete&&(e.complete(r,o),e.loaded=!0)})},this),PIXI.loader.once("error",function(e,t,r){_._logger.log("ResourcesLoader","LoadRerror",e.name,e.message)},this),PIXI.loader.load()):r()},e.loading=!1,__decorate([typescript_ioc_1.Inject,__metadata("design:type",GameResources_1.GameResources)],e.prototype,"_gameResources",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",IArenaApi_1.IArenaApi)],e.prototype,"_arenaApi",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",ViewBaseEmptyLogger_1.ViewBaseEmptyLogger)],e.prototype,"_logger",void 0),e=o=__decorate([typescript_ioc_1.Singleton,__metadata("design:paramtypes",[])],e)}();exports.AnimateResourcesLoader=AnimateResourcesLoader;