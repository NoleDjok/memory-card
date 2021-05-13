"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};return function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__decorate=this&&this.__decorate||function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(a=(n<3?r(a):3<n?r(t,i,a):r(t,i))||a);return 3<n&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter=this&&this.__awaiter||function(e,a,s,c){return new(s||(s=Promise))(function(i,t){function o(e){try{n(c.next(e))}catch(e){t(e)}}function r(e){try{n(c.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(o,r)}n((c=c.apply(e,a||[])).next())})},__generator=this&&this.__generator||function(i,o){var r,n,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(a=2&t[0]?n.return:t[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,t[1])).done)return a;switch(n=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,n=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=o.call(i,s)}catch(e){t=[6,e],n=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<i;t++)for(var n=arguments[t],a=0,s=n.length;a<s;a++,r++)o[r]=n[a];return o};Object.defineProperty(exports,"__esModule",{value:!0});var Linq_1=require("../Linq/Linq"),ViewBaseEmptyLogger_1=require("./ViewBaseEmptyLogger"),KeyboardManager_1=require("./Keyboard/KeyboardManager"),Queue_1=require("./Queue/Queue"),ChildViews_1=require("./ChildViews"),ResourcesList_1=require("./Resources/ResourcesList"),ModelWatchesList_1=require("./Model/ModelWatchesList"),typescript_ioc_1=require("../IoC/typescript-ioc"),SoundManager_1=require("./Sound/SoundManager"),WatchObject_1=require("./Model/WatchObject"),TestManager_1=require("./Tests/TestManager"),ResourcesLoader_1=require("./Resources/ResourcesLoader"),underscore_1=require("../Utils/underscore"),ResourceItem_1=require("./Resources/ResourceItem"),LocalizationManager_1=require("./Localization/LocalizationManager"),PIXIRenderer_1=require("../PIXIRenderer"),SoundsList_1=require("./SoundsList"),KeyboardItemsList_1=require("./Keyboard/KeyboardItemsList"),QueueList_1=require("./Queue/QueueList"),ModelEventsList_1=require("./Model/ModelEventsList"),ModelEvents_1=require("./Model/ModelEvents"),GamePerformance_1=require("../GamePerformance"),_PixiBase=function(){function e(){this._display=new PIXI.Container}return Object.defineProperty(e.prototype,"display",{get:function(){return this._display},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this.display.x},set:function(e){this.display.x=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.display.y},set:function(e){this.display.y=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.display.rotation},set:function(e){this.display.rotation=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleX",{get:function(){return this.display.scale.x},set:function(e){this.display.scale.x=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleY",{get:function(){return this.display.scale.y},set:function(e){this.display.scale.y=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.display.alpha},set:function(e){this.display.alpha=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return this.display.visible},set:function(e){this.display.visible=e},enumerable:!0,configurable:!0}),e}(),_ViewBase=function(i){function e(e){var t=i.call(this)||this;return t.name=e,t.__queue=new Queue_1.Queue,t.disposed=!1,t._initialized=!1,t._contentLoaded=!1,t._parentContainer=null,t.$childViews=new ChildViews_1.ChildViews,t.$resources=new ResourcesList_1.ResourcesList,t.$queue=new QueueList_1.QueueList,t.gameBase=null,t._resourcesLoader=typescript_ioc_1.Container.get(ResourcesLoader_1.ResourcesLoader),t._soundManager=typescript_ioc_1.Container.get(SoundManager_1.SoundManager),t._watchObject=typescript_ioc_1.Container.get(WatchObject_1.WatchObject),t._testManager=typescript_ioc_1.Container.get(TestManager_1.TestManager),t._keyboardManager=typescript_ioc_1.Container.get(KeyboardManager_1.KeyboardManager),t._renderer=typescript_ioc_1.Container.get(PIXIRenderer_1.PIXIRenderer),t._logger=typescript_ioc_1.Container.get(ViewBaseEmptyLogger_1.ViewBaseEmptyLogger),t._modelEvents=typescript_ioc_1.Container.get(ModelEvents_1.ModelEvents),t.$modelWatches=new ModelWatchesList_1.ModelWatchesList(t._watchObject),t.$keyboard=new KeyboardItemsList_1.KeyboardItemsList(t._keyboardManager,t._logger),t.$modelEvents=new ModelEventsList_1.ModelEventsList(t._modelEvents),t}return __extends(e,i),e.prototype.error=function(e,t){for(var i,o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];(i=this._logger).error.apply(i,__spreadArrays([this.name,e,t],o))},Object.defineProperty(e.prototype,"isLandscape",{get:function(){return this._isLandscape},set:function(e){this._isLandscape=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isReady",{get:function(){return this._initialized&&this._contentLoaded},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parentContainer",{get:function(){return this._parentContainer},set:function(e){this._parentContainer=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"soundManager",{get:function(){return this._soundManager},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"testManager",{get:function(){return this._testManager},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"localizationManager",{get:function(){return this._localizationManager},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyboardManager",{get:function(){return this._keyboardManager},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logger",{get:function(){return this._logger},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderer",{get:function(){return this._renderer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locator",{get:function(){return(this._parent&&this._parent.locator?this._parent.locator:"")+(this._locator?this._locator+".":"Game.")},set:function(e){this._locator=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showLoadingTimeout",{get:function(){return this.gameBase&&this.gameBase.showLoadingTimeout,-1},set:function(e){this.gameBase&&(this.gameBase.showLoadingTimeout=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{set:function(e){this._parent=e},enumerable:!0,configurable:!0}),e.prototype.configure=function(e){var i=this;this.config=this.getConfiguration(),underscore_1._u.each(this.config.resources,function(e,t){i.$resources.items.Add(e)},this),underscore_1._u.each(this.config.childViews,function(e,t){e.view&&i._addChild(e,t,!0)},this)},e.prototype.showLoading=function(t){var i=this;this.__queue.push({name:"showLoading",condition:function(e){return!0},action:function(e){i.gameBase.showLoading(t)}})},e.prototype.initialize=function(e,t){var i=this;return void 0===t&&(t=null),this._parent=e,underscore_1._u.each(this.config.childViews,function(e,t){e.view&&i._initializeChild(e,i.$childViews[t])},this),this.$modelWatches.initialize(this.config.modelWatch,this,this.$model,this._logger),this.$modelEvents.initialize(this.config.modelEvents,this,this.$model,this._logger),this.$keyboard.initialize(this.config.keyboard,this),this.$queue.initialize(this.config.queue,this),this.$sounds=new SoundsList_1.SoundsList(this._soundManager),this.$sounds.initialize(this.config.sounds,this),underscore_1._u.each(this.config.tests,function(e,t){i._testManager.add(e)},this),this.onInitialize(),this._initialized=!0,this._contentLoaded=!0,this.contentLoaded(),this.display},e.prototype.addChild=function(e,t,i){var o=this;void 0===i&&(i=null);var r=this._addChild(e,t,!0),n=this.getResources();return this._resourcesLoader.load(this.name,n,function(){o._initializeChild(e,o.$childViews[t],i)}),r},e.prototype.addChildAsync=function(i,o,r,e){var n=this;void 0===e&&(e=null);var a=this._addChild(i,r,!0),s=this.getResources();return o&&this.showLoading(o),new Promise(function(t){n.__queue.push({name:"addChildAsync",condition:function(e){return!o||.01<=e},action:function(e){n._resourcesLoader.load(n.name,s,function(){n._initializeChild(i,n.$childViews[r]),o&&n.showLoading(!1),t(a)})}})})},e.prototype.removeChild=function(t){var e=this.$childViews.items.FirstOrDefault(function(e){return e.view==t});this._logger.log(this.locator,"removeChild",e.name),this._removeChild(e)},e.prototype.removeChildAsync=function(t,r){return void 0===r&&(r=!1),__awaiter(this,void 0,void 0,function(){var i,o=this;return __generator(this,function(e){return i=this.$childViews.items.FirstOrDefault(function(e){return e.view==t}),r&&this.showLoading(r),[2,new Promise(function(t){o.__queue.push({name:"removeChildAsync",condition:function(e){return!r||.01<=e},action:function(e){o._logger.log(o.locator,"removeChildAsync",i.name),o._removeChild(i),r&&o.showLoading(!1),t()}})})]})})},e.prototype.removeChildByName=function(t){var e=this.$childViews.items.FirstOrDefault(function(e){return e.name==t});e&&(this._logger.log(this.locator,"removeChildByName",e.name,t),this._removeChild(e),delete this.$childViews[t])},e.prototype.removeChildByNameAsync=function(r,n){return void 0===n&&(n=!0),__awaiter(this,void 0,void 0,function(){var i,o=this;return __generator(this,function(e){return(i=this.$childViews.items.FirstOrDefault(function(e){return e.name==r}))?(n&&this.showLoading(n),i.view.visible=!1,[2,new Promise(function(t){o.__queue.push({name:"removeChildByNameAsync",condition:function(e){return!n||.1<=e},action:function(e){o._logger.log(o.locator,"removeChildByNameAsync",i.name,r),o._removeChild(i),delete o.$childViews[r],n&&o.showLoading(!1),t()}})})]):[2]})})},e.prototype._removeChild=function(t){null!=t&&this.$childViews.items.Any(function(e){return e==t})&&(this.$childViews.items.Remove(t),t.view.dispose())},e.prototype._addChild=function(e,t,i){if("items"==t)throw"invalid key";if(this.$childViews.get(t))throw"view with key='"+t+"' already added";var o=typescript_ioc_1.Container.get(e.view,e.options||{});try{var r=t||o.name;if(this._logger.log(this.locator,"addChild",r,e),o){e.model&&(o.$model=e.model),o.gameBase=this.gameBase,o.isLandscape=this.isLandscape,o.configure(e),o.config=__assign(__assign({},o.config),e.config||{});var n=new ChildViews_1.ChildItem(o);n.viewName=o.name,o.locator=r,n.name=r,o.parent=this,n.view.parent=this,n.locator=o.locator,this.$childViews.items.Add(n),null!=t&&(this.$childViews[t]=n)}else console.error(this.name+": error can't find view '"+e.view+"'")}catch(e){console.error(this.name+": error",e)}return o},e.prototype._initializeChild=function(e,t,i){void 0===i&&(i=null);try{var o=t.view.initialize(this);if(null!==i){var r=new PIXI.Container;this.display.addChildAt(r,i),this.display.swapChildren(r,o),this.display.removeChild(r)}this._logger.log(this.locator,"initializeChild",t.name,e),null!=e.x&&null!=e.x&&(t.view.x=e.x),null!=e.y&&null!=e.y&&(t.view.y=e.y),t.view.isLandscape=this.isLandscape,t.view.resize(this._resizeWidth,this._resizeHeight,this._resizeScale),this.isLandscape?t.view.setLandscape():t.view.setPortrait()}catch(e){console.error(this.name+": error",e)}},e.prototype.update=function(e){if(this.disposed||!this._initialized)return!1;this._viewQueueUpdate(e),this._onUpdate(e);for(var t=this.$childViews.items.ToArray(),i=t.length,o=0;o<i;o++)t[o].view.update(e);return!0},e.prototype._onUpdate=function(e){this.onUpdate(e)},e.prototype._viewQueueUpdate=function(e){this.__queue.length&&this.__queue.update(e)},e.prototype.onUpdate=function(e){},e.prototype.onSetLandscape=function(){},e.prototype.setLandscape=function(){!this.disposed&&this._initialized&&(this._isLandscape=!0,this.onSetLandscape(),this.$childViews.items.ForEach(function(e){e.view.setLandscape()}))},e.prototype.onSetPortrait=function(){},e.prototype.getResources=function(){var t=new Linq_1.List;return t.AddRange(this.$resources.items.ToArray()),this.$childViews.items.ForEach(function(e){t.AddRange(e.view.getResources())}),t.ToArray()},e.prototype.contentLoaded=function(){this._initialized&&this._contentLoaded&&(this.disposed||this.onContentLoaded())},e.prototype.onContentLoaded=function(){},e.prototype.setPortrait=function(){!this.disposed&&this._initialized&&(this._isLandscape=!1,this.onSetPortrait(),this.$childViews.items.ForEach(function(e){e.view.setPortrait()}))},e.prototype.onDestroy=function(){},e.prototype.dispose=function(){var i=this;this.disposed||(this.disposed=!0,this.onDestroy(),this.$childViews.items.ForEach(function(e){e.view.dispose()}),this.$queue.dispose(),this.$keyboard.dispose(),this.$resources.items.ForEach(function(e){e.temporary&&(e.type==ResourceItem_1.ResourceItemType.pixiTexture?(ResourcesLoader_1.ResourcesLoader.loader.resources[e.name].texture&&ResourcesLoader_1.ResourcesLoader.loader.resources[e.name].texture.destroy(!0),ResourcesLoader_1.ResourcesLoader.loader.resources[e.name]=null,delete ResourcesLoader_1.ResourcesLoader.loader.resources[e.name]):"string"==typeof e.resources&&(ResourcesLoader_1.ResourcesLoader.loader.resources[e.name]=null,delete ResourcesLoader_1.ResourcesLoader.loader.resources[e.name]))}),this.$modelWatches.dispose(),this.$modelEvents.dispose(),underscore_1._u.each(this.config.tests,function(e,t){i._testManager.remove(e)},this),this.$model=null,this.$keyboard=null,this.$modelWatches=null,this.$queue=null,this.$resources=null,this.$childViews=null,this.$sounds=null,this._parent=null,this._parentContainer=null,this._resourcesLoader=null,this._soundManager=null,this._watchObject=null,this._testManager=null,this._keyboardManager=null,this._renderer=null,this._logger=null,this.gameBase=null)},e.prototype.close=function(){this._parent.removeChild(this)},e.prototype.clear=function(){this.$childViews.items.ForEach(function(e){e.view.dispose()}),this.$childViews=new ChildViews_1.ChildViews,this._logger.log(this.locator,"clear",this.name)},e.prototype.clearAsync=function(o){return void 0===o&&(o=!0),__awaiter(this,void 0,void 0,function(){var i=this;return __generator(this,function(e){return this.showLoading(o),this.visible=!1,[2,new Promise(function(t){i.__queue.push({name:"clearAsync",condition:function(e){return!o||1<=e},action:function(e){i.clear(),i._logger.log(i.locator,"clearAsync",i.name),i.showLoading(!1),i.visible=!0,t()}})})]})})},e.prototype.resize=function(t,i,o){!this.disposed&&this._initialized&&(this._resizeWidth=t,this._resizeHeight=i,this._resizeScale=o,this.onResize(t,i,o),this.$childViews.items.ForEach(function(e){e.view.resize(t,i,o)}))},e.prototype.onResize=function(e,t,i){},e.prototype.focus=function(t){this.onFocus(t),this.$childViews.items.ForEach(function(e){e.view.focus(t)})},e.prototype.onFocus=function(e){},__decorate([typescript_ioc_1.Inject,__metadata("design:type",SoundManager_1.SoundManager)],e.prototype,"_soundManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",TestManager_1.TestManager)],e.prototype,"_testManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",WatchObject_1.WatchObject)],e.prototype,"_watchObject",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",ResourcesLoader_1.ResourcesLoader)],e.prototype,"_resourcesLoader",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",LocalizationManager_1.LocalizationManager)],e.prototype,"_localizationManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",KeyboardManager_1.KeyboardManager)],e.prototype,"_keyboardManager",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",PIXIRenderer_1.PIXIRenderer)],e.prototype,"_renderer",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",ViewBaseEmptyLogger_1.ViewBaseEmptyLogger)],e.prototype,"_logger",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",ModelEvents_1.ModelEvents)],e.prototype,"_modelEvents",void 0),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","View configuration"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],e.prototype,"configure",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","Remove child"),__metadata("design:type",Function),__metadata("design:paramtypes",[ChildViews_1.ChildItem]),__metadata("design:returntype",void 0)],e.prototype,"_removeChild",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","Add child"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,Object,Boolean]),__metadata("design:returntype",Object)],e.prototype,"_addChild",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","Initialize child"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,ChildViews_1.ChildItem,Object]),__metadata("design:returntype",void 0)],e.prototype,"_initializeChild",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","setLandscape"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"setLandscape",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","setPortrait"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"setPortrait",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","dispose"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"dispose",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","resize"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number,Number,Number]),__metadata("design:returntype",void 0)],e.prototype,"resize",null),__decorate([GamePerformance_1.GamePerformanceMethod("_ViewBase","focus"),__metadata("design:type",Function),__metadata("design:paramtypes",[Boolean]),__metadata("design:returntype",void 0)],e.prototype,"focus",null),e}(_PixiBase);exports._ViewBase=_ViewBase;