"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(a=(o<3?r(a):3<o?r(t,i,a):r(t,i))||a);return 3<o&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(i,n){return function(e,t){n(e,t,i)}},__awaiter=this&&this.__awaiter||function(e,a,s,c){return new(s||(s=Promise))(function(i,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(n,r)}o((c=c.apply(e,a||[])).next())})},__generator=this&&this.__generator||function(i,n){var r,o,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(i,s)}catch(e){t=[6,e],o=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(exports,"__esModule",{value:!0});var KeyboardManager_1=require("./Keyboard/KeyboardManager"),ResourcesLoader_1=require("./Resources/ResourcesLoader"),Tween_1=require("./Tween/Tween"),Easing_1=require("./Tween/Easing"),ChildViews_1=require("./ChildViews"),IViewConfiguration_1=require("./IViewConfiguration"),Linq_1=require("../Linq/Linq"),typescript_ioc_1=require("../IoC/typescript-ioc"),LocalizationManager_1=require("./Localization/LocalizationManager"),PixiFactory_1=require("../dragonBones/pixi4/PixiFactory"),underscore_1=require("../Utils/underscore"),TestManager_1=require("./Tests/TestManager"),IArenaApi_1=require("./Arena/IArenaApi"),ScreenOrientationEnum_1=require("./Orientation/ScreenOrientationEnum"),OrientationFactory_1=require("./Orientation/OrientationFactory"),DevicePixelRatio_1=require("../DevicePixelRatio"),GameResources_1=require("../GameResources"),PIXIRenderer_1=require("../PIXIRenderer"),RootHtml_1=require("../RootHtml"),ViewBaseEmptyLogger_1=require("./ViewBaseEmptyLogger"),QueueList_1=require("./Queue/QueueList"),SoundManager_1=require("./Sound/SoundManager"),SimpleViewBase_1=require("./SimpleViewBase"),GameSize=function(){function e(e,t,i){this._x=e,this._y=t,this._s=i}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e},enumerable:!0,configurable:!0}),e}(),GameBase=function(){function r(e){var i=this;this._preloadLoaded=!1,this._manualResize=!1,this._contentLoaded=!1,this._initialized=!1,this._scaleFactor=1,this._layers=[],this._orientation=ScreenOrientationEnum_1.ScreenOrientationEnum.PortraitAndLandscape,this._resizeDelay={d:2},this._tweenResizeDelay=new Tween_1.Tween(this._resizeDelay).to({d:0},200).easing(Easing_1.Easing.Linear.None).onComplete(function(){i.rendererResize(),i._resizeDelay.d=2;for(var e=i._layers.length,t=0;t<e;t++)i._layers[t].visible=!0}),this.graphHigh=!0,this._isLandscape=!0,this._size=new GameSize(r.SIZE_LANDSCAPE.x,r.SIZE_LANDSCAPE.y,1),this._preloaderchildViews=new ChildViews_1.ChildViews,this.$childViews=new ChildViews_1.ChildViews,this.showLoadingTimeout=2e3,this.__showLoadingTimeout=null,this.__shadowUpdateEnabled=!1,this.__shadowUpdateTime=0,this.__shadowUpdateTime2=0,this.stop=!0,this.frameCount=0,this.currentFps=0;var t=this.defineAssetScale();this._scaleFactor=t,this._resourcesLoader=typescript_ioc_1.Container.get(ResourcesLoader_1.ResourcesLoader),this._soundManager=typescript_ioc_1.Container.get(SoundManager_1.SoundManager),this._devicePixelRatio=typescript_ioc_1.Container.get(DevicePixelRatio_1.DevicePixelRatio),this._localizationManager=typescript_ioc_1.Container.get(LocalizationManager_1.LocalizationManager),this._arenaApi=typescript_ioc_1.Container.get(IArenaApi_1.IArenaApi),this._resourcesRoot=typescript_ioc_1.Container.get(GameResources_1.GameResources),this._testManager=typescript_ioc_1.Container.get(TestManager_1.TestManager),this._renderer=typescript_ioc_1.Container.get(PIXIRenderer_1.PIXIRenderer),this._htmlElement=typescript_ioc_1.Container.get(RootHtml_1.RootHtml),this._keyboardManager=typescript_ioc_1.Container.get(KeyboardManager_1.KeyboardManager),this._logger=typescript_ioc_1.Container.get(ViewBaseEmptyLogger_1.ViewBaseEmptyLogger),this.__shadowUpdateTime=this.__getUtcNow2()}return Object.defineProperty(r.prototype,"soundManager",{get:function(){return this._soundManager},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"testManager",{get:function(){return this._testManager},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"localizationManager",{get:function(){return this._localizationManager},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"keyboardManager",{get:function(){return this._keyboardManager},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"logger",{get:function(){return this._logger},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderer",{get:function(){return this._renderer},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"shadowUpdateEnabled",{get:function(){return this.__shadowUpdateEnabled},set:function(e){!this.__shadowUpdateEnabled&&e&&this._initShadowUpdate(),this.__shadowUpdateEnabled=e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"orientation",{set:function(e){this._orientation=e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width*this.scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height*this.scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLandscape",{get:function(){return this._size.x>=this._size.y},enumerable:!0,configurable:!0}),r.prototype.getPreloadersConfiguration=function(){return{childViews:{loading:{view:DefaultLoadingView},preloader:{view:DefaultLoadingView}}}},r.prototype.onUpdate=function(e){},r.prototype.onCreate=function(){},r.prototype.preloaderConfigure=function(){var i=this;this.config=this.getPreloadersConfiguration(),underscore_1._u.each(this.config.childViews,function(e,t){e.view&&i._addChild(e,t,i._preloaderchildViews)},this);var n=new Linq_1.List;return this._preloaderchildViews.items.ForEach(function(e){n.AddRange(e.view.getResources())}),new Promise(function(e,t){i._resourcesLoader.load("Game",n.ToArray(),function(){underscore_1._u.each(i.config.childViews,function(e,t){e.view&&i._innitializeChild(e,i._preloaderchildViews[t],i._layers[2])},i),i._preloaderchildViews.get("loading").toggleVisible(!1),i._preloaderchildViews.get("preloader").toggleVisible(!0),i._contentLoaded=!0,i._preloadLoaded=!0,e()})})},r.prototype.configure=function(){var i=this;this._contentLoaded=!1,this.config=this.getConfiguration(),underscore_1._u.each(this.config.childViews,function(e,t){e.view&&i._addChild(e,t,i.$childViews)},this);var t=new Linq_1.List;this.$childViews.items.ForEach(function(e){t.AddRange(e.view.getResources())}),this._resourcesLoader.load("Game",t.ToArray(),function(){i._contentLoaded=!0,i.initialize()})},r.prototype.initialize=function(){var i=this;this._initialized||(underscore_1._u.each(this.config.childViews,function(e,t){e.view&&i._innitializeChild(e,i.$childViews[t],i._layers[1])},this),this._preloaderchildViews.get("preloader").toggleVisible(!1),this.onInitialize(),this._initialized=!0,this.contentLoaded(),this.rendererResize(!0))},r.prototype.showLoading=function(e){var t=this;this._preloadLoaded&&(this.__showLoadingTimeout&&clearTimeout(this.__showLoadingTimeout),this.__showLoadingTimeout=e?setTimeout(function(){t._preloaderchildViews.get("loading").toggleVisible(e),t.__showLoadingTimeout=null},this.showLoadingTimeout):setTimeout(function(){t._preloaderchildViews.get("loading").toggleVisible(e),t.__showLoadingTimeout=null},50))},r.prototype.setLoading=function(e){if(this._preloadLoaded){var t=this._preloaderchildViews.get("loading");t.visible&&t.onLoadingProgress(e);var i=this._preloaderchildViews.get("preloader");i.visible&&i.onLoadingProgress(e)}},r.prototype.create=function(){return __awaiter(this,void 0,void 0,function(){var i=this;return __generator(this,function(e){return this._resourcesLoader.setGameBase(this),[2,new Promise(function(e,t){return i._createStage(),i.onCreate(),Promise.all([i._localizationManager.load(),i.preloaderConfigure()]).then(function(){return i.rendererResize(!0),i._showStage(),Promise.all([]).then(function(){setTimeout(function(){i.configure(),i.addCommonTests(),e(i)},300)},function(e){})},function(e){})})]})})},r.prototype._showStage=function(){this._container.visible=!0},r.prototype._createStage=function(){return __awaiter(this,void 0,void 0,function(){var t,i,n;return __generator(this,function(e){for(this._container=new PIXI.Container,this._container.visible=!1,5,t=0;t<5;t++)i=new PIXI.Container,this._layers[t]=i,this._container.addChild(i);return this._renderer.stage.addChild(this._container),this.fpsInterval=1e3/this._renderer.fps,this.then=this.__getUtcNow(),this.startTime=this.then,this.stop=!1,(n=PIXI.ticker.shared).autoStart=!1,n.stop(),this._animate(),this._initShadowUpdate(),[2]})})},r.prototype._initShadowUpdate=function(){return __awaiter(this,void 0,void 0,function(){var t,i;return __generator(this,function(e){switch(e.label){case 0:t=function(i){return new Promise(function(e,t){setTimeout(e,i)})},e.label=1;case 1:return this.__shadowUpdateEnabled?[4,t(500)]:[3,3];case 2:return e.sent(),this.stop||1e3<this.__getUtcNow2()-this.__shadowUpdateTime&&(i=(this.__getUtcNow2()-this.__shadowUpdateTime2)/1e3,this.update(i,!0)),this.__shadowUpdateTime2=this.__getUtcNow2(),[3,1];case 3:return[2]}})})},r.prototype.__getUtcNow2=function(){var e=new Date(Date.now());return this.__getUtcFromLocal2(e)},r.prototype.__getUtcFromLocal2=function(e){return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())},r.prototype.dispose=function(){this.stop=!0,this.$childViews.items.ForEach(function(e){e.view.dispose()}),this._renderer.destroy()},r.prototype.focus=function(t){t?this._keyboardManager.enable():this._keyboardManager.disable(),this.onFocus(t),this.$childViews.items.ForEach(function(e){e.view.focus(t)})},r.prototype.onFocus=function(e){},r.prototype.update=function(e,t){Tween_1.Tween.update(),PixiFactory_1.PixiFactory.clockHandler(e),this._soundManager.update(e),this._resourcesLoader.update(e),this.onUpdate(e);for(var i=this.$childViews.items.ToArray(),n=i.length,r=0;r<n;r++)i[r].view.update(e);n=(i=this._preloaderchildViews.items.ToArray()).length;for(r=0;r<n;r++)i[r].view.update(e);this._keyboardManager.update(),this._queueUpdate(e,t)},r.prototype._queueUpdate=function(e,t){for(var i in QueueList_1.QueueItem.queue){QueueList_1.QueueItem.queue[i].update(e,t)}},r.prototype.play=function(){var e=this.__getUtcNow();this.then=e,this.startTime=this.then,this.last_time=e.getTime(),this.stop=!1},r.prototype.pause=function(){this.stop=!0},r.prototype.__getUtcNow=function(){var e=new Date(Date.now());return this.__getUtcFromLocal(e)},r.prototype.__getUtcFromLocal=function(e){var t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());return new Date(t)},r.prototype._animate=function(){var e=this;if(this._clientWidth==this._htmlElement.htmlDivElement.clientWidth&&this._clientHeight==this._htmlElement.htmlDivElement.clientHeight||this._manualResize||this.resize(),requestAnimationFrame(function(){e._animate()}),!this.stop){var t=this.__getUtcNow();this.__shadowUpdateTime=this.__getUtcNow2(),this.now=t,this.elapsed=this.now-this.then;var i=t.getTime(),n=(i-this.last_time)/1e3;if(this.last_time=this.last_time?i:t.getTime(),this.update(n,!1),this.elapsed>this.fpsInterval){this.then=this.now-this.elapsed%this.fpsInterval,this._renderer.render();var r=this.now-this.startTime;this.currentFps=Math.round(1e3/(r/++this.frameCount)*100)/100,600==this.frameCount&&(this.startTime=this.now,this.frameCount=0)}}},r.prototype._rendererResize=function(e,t){var i=this;this._clientWidth=e,this._clientHeight=t;var n=this._clientWidth*(this.graphHigh?this._devicePixelRatio.value:1),r=this._clientHeight*(this.graphHigh?this._devicePixelRatio.value:1);this._renderer.renderer.resize(n,r);var o=this._renderer.renderer.view;(o.style.width=this._clientWidth+"px",o.style.height=this._clientHeight+"px",this._contentLoaded)&&(OrientationFactory_1.OrientationFactory.getOrientation(ScreenOrientationEnum_1.ScreenOrientationEnum.PortraitAndLandscape).run(n,r)==ScreenOrientationEnum_1.ScreenOrientationEnum.Portrait?(this.setPortrait(n,r),this._isLandscape=!1,this.$childViews.items.ForEach(function(e){e.view.resize(n,r,i._scale)})):this._orientation==ScreenOrientationEnum_1.ScreenOrientationEnum.Portrait?(this.setRotatedPortrait(n,r),this._isLandscape=!1,this.$childViews.items.ForEach(function(e){e.view.resize(r,n,i._scale)})):(this.setLandscape(n,r),this._isLandscape=!0,this.$childViews.items.ForEach(function(e){e.view.resize(n,r,i._scale)})))},r.prototype.rendererResize=function(e){void 0===e&&(e=!1),this._manualResize||this._clientWidth==this._htmlElement.htmlDivElement.clientWidth&&this._clientHeight==this._htmlElement.htmlDivElement.clientHeight&&0==e||(this._logger.log("Game","RendererResize",this._htmlElement.htmlDivElement.clientWidth+"-"+this._htmlElement.htmlDivElement.clientHeight,this._htmlElement.htmlDivElement.clientWidth,this._htmlElement.htmlDivElement.clientHeight),this._rendererResize(this._htmlElement.htmlDivElement.clientWidth,this._htmlElement.htmlDivElement.clientHeight))},r.prototype.setRotatedPortrait=function(e,t){this._size.x=r.SIZE_LANDSCAPE.y,this._size.y=r.SIZE_LANDSCAPE.x,this._scale=Math.min(e/(this._size.y*this.scaleFactor),t/(this._size.x*this.scaleFactor));for(var i=this._layers.length,n=0;n<i;n++)0!=n&&(this._layers[n].scale.x=this._layers[n].scale.y=this._scale,this._layers[n].rotation=-Math.PI/2);this._container.x=.5*this._renderer.renderer.view.width,this._container.y=.5*this._renderer.renderer.view.height,this.onSetPortrait(),this.$childViews.items.ForEach(function(e){e.view.setPortrait()})},r.prototype.setPortrait=function(e,t){this._size.x=r.SIZE_LANDSCAPE.y,this._size.y=r.SIZE_LANDSCAPE.x,this._scale=Math.min(t/(this._size.y*this.scaleFactor),e/(this._size.x*this.scaleFactor));for(var i=this._layers.length,n=0;n<i;n++)0!=n&&(this._layers[n].scale.x=this._layers[n].scale.y=this._scale,this._layers[n].rotation=0);this._container.x=.5*this._renderer.renderer.view.width,this._container.y=.5*this._renderer.renderer.view.height,this.onSetPortrait(),this.$childViews.items.ForEach(function(e){e.view.setPortrait()})},r.prototype.setLandscape=function(e,t){this._size.x=r.SIZE_LANDSCAPE.x,this._size.y=r.SIZE_LANDSCAPE.y,this._scale=Math.min(t/(this._size.y*this.scaleFactor),e/(this._size.x*this.scaleFactor));for(var i=this._layers.length,n=1;n<i;n++)this._layers[n].scale.x=this._layers[n].scale.y=this._scale,this._layers[n].rotation=0;this._container.x=.5*this._renderer.renderer.view.width,this._container.y=.5*this._renderer.renderer.view.height,this.onSetLandscape(),this.$childViews.items.ForEach(function(e){e.view.setLandscape()})},r.prototype.clear=function(){this.$childViews.items.ForEach(function(e){e.view.dispose()}),this.$childViews=new ChildViews_1.ChildViews},r.prototype.resize=function(){if(!(this._resizeDelay.d<2)){if(1.1*(this._htmlElement.htmlDivElement.clientWidth*(this.graphHigh?this._devicePixelRatio.value:1))<this._htmlElement.htmlDivElement.clientHeight*(this.graphHigh?this._devicePixelRatio.value:1)){if(this._isLandscape)for(var e=this._layers.length,t=0;t<e;t++)this._layers[t].visible=!1}else if(!this._isLandscape)for(e=this._layers.length,t=0;t<e;t++)this._layers[t].visible=!1;this._tweenResizeDelay.start()}},r.prototype.getLayer=function(e){return!this._layers||e>=this._layers.length?null:this._layers[e]},r.prototype.contentLoaded=function(){this._initialized&&this._contentLoaded&&this.onContentLoaded()},r.prototype.onContentLoaded=function(){},r.prototype.defineAssetScale=function(){window.innerWidth,devicePixelRatio,window.innerHeight,devicePixelRatio;return this._assetScale=1,2},r.prototype._addChild=function(e,t,i){void 0===t&&(t=null);var n=typescript_ioc_1.Container.get(e.view,e.options),r=t||n.name;if(this._logger.log("GameBase","addChild",r,e),n){n.name=r,n.isLandscape=this.isLandscape,n.gameBase=this,e.model&&(n.$model=e.model),n.configure(e),underscore_1._u.extend(n.config,e.config||{});var o=new ChildViews_1.ChildItem(n);o.name=t,o.viewName=r,i.items.Add(o),null!=t&&(i[t]=o)}return n},r.prototype._innitializeChild=function(e,t,i){t.view.initialize(null,i),null!=e.x&&null!=e.x&&(t.view.x=e.x),null!=e.y&&null!=e.y&&(t.view.y=e.y)},r.prototype.removeChildByName=function(t){var e=this.$childViews.items.FirstOrDefault(function(e){return e.name==t});this._removeChild(e),this.$childViews[t]=null},r.prototype._removeChild=function(e){null!=e&&(this.$childViews.items.Remove(e),e.view.dispose())},r.prototype.addCommonTests=function(){var t=this;this._testManager.add({run:function(){var e=new PIXI.Graphics;e.beginFill(16711680),e.lineStyle(10,65280,1),e.drawRect(.5*-t._renderer.renderer.width,.5*-t._renderer.renderer.height,t._renderer.renderer.width,t._renderer.renderer.height),e.endFill(),t._container.addChild(e)},type:IViewConfiguration_1.TestType.SizeGame}),this._testManager.add({run:function(){t._arenaApi.handleCustomEvent(IViewConfiguration_1.TestType.EventChange,null)},type:IViewConfiguration_1.TestType.EventChange}),this._testManager.add({run:function(){t._arenaApi.handleCustomEvent(IViewConfiguration_1.TestType.PauseReady,null)},type:IViewConfiguration_1.TestType.PauseReady})},r.SIZE_LANDSCAPE=new PIXI.Point(640,480),__decorate([typescript_ioc_1.Inject,__metadata("design:type",ResourcesLoader_1.ResourcesLoader)],r.prototype,"_resourcesLoader",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",DevicePixelRatio_1.DevicePixelRatio)],r.prototype,"_devicePixelRatio",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",LocalizationManager_1.LocalizationManager)],r.prototype,"_localizationManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",IArenaApi_1.IArenaApi)],r.prototype,"_arenaApi",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",GameResources_1.GameResources)],r.prototype,"_resourcesRoot",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",TestManager_1.TestManager)],r.prototype,"_testManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",PIXIRenderer_1.PIXIRenderer)],r.prototype,"_renderer",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",RootHtml_1.RootHtml)],r.prototype,"_htmlElement",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",KeyboardManager_1.KeyboardManager)],r.prototype,"_keyboardManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",SoundManager_1.SoundManager)],r.prototype,"_soundManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",ViewBaseEmptyLogger_1.ViewBaseEmptyLogger)],r.prototype,"_logger",void 0),r}();exports.GameBase=GameBase;var DefaultLoadingView=function(i){function e(e){var t=i.call(this,"DefaultLoadingView")||this;return t._options=e,t}return __extends(e,i),e.prototype.getConfiguration=function(){return{}},e.prototype.onInitialize=function(){},e.prototype.onSetLandscape=function(){},e.prototype.onSetPortrait=function(){},e.prototype.onUpdate=function(e){},e.prototype.onLoadingProgress=function(e){},e.prototype.onHide=function(){},e.prototype.onShow=function(){},e=__decorate([__param(0,typescript_ioc_1.Inject),__metadata("design:paramtypes",[Object])],e)}(SimpleViewBase_1.SimpleLoadingViewBase);exports.DefaultLoadingView=DefaultLoadingView;