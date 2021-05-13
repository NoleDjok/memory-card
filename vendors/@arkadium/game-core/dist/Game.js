"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0}),require("es6-promise").polyfill(),require("string.prototype.startswith"),require("string.prototype.endswith"),require("fetch-ie8");var AbTestManager_1=require("./AbTest/AbTestManager"),ArenaXApi_1=require("./Base/Arena/ArenaXApi"),typescript_ioc_1=require("./IoC/typescript-ioc"),IArenaApi_1=require("./Base/Arena/IArenaApi"),SoundManager_1=require("./Base/Sound/SoundManager"),StorageManager_1=require("./Base/Storage/StorageManager"),Debug_1=require("./Debug"),ScreenOrientationEnum_1=require("./Base/Orientation/ScreenOrientationEnum"),Arena4Api_1=require("./Base/Arena/Arena4Api"),Environment_1=require("./Environment"),RootHtml_1=require("./RootHtml"),PIXIRenderer_1=require("./PIXIRenderer"),DevicePixelRatio_1=require("./DevicePixelRatio"),GameResources_1=require("./GameResources"),GameLanguages_1=require("./GameLanguages"),AnalyticResources_1=require("./AnalyticResources"),Game=function(){function e(s){var d=this,e=document.createElement("div");e.style.height="100%",e.style.overflow="hidden";var n="1.4.9";if(-1<navigator.userAgent.toLowerCase().indexOf("chrome")){var i=["\n %c %c %c Arkadium Game Core, version 1.4.9 %c  \n","background: #7FC9FF; padding:5px 0;","background: #7FC9FF; padding:5px 0;","color: #7FC9FF; background: #030307; padding:5px 0;","background: #7FC9FF; padding:5px 0;"];window.console.log.apply(console,i)}else window.console&&window.console.log("Arkadium Game Core, version "+n);typescript_ioc_1.Container.get(RootHtml_1.RootHtml).htmlDivElement=e,typescript_ioc_1.Container.get(DevicePixelRatio_1.DevicePixelRatio).value=s.devicePixelRatio||window.devicePixelRatio;var t=typescript_ioc_1.Container.get(GameResources_1.GameResources);t.root=s.resourcesRoot,t.options=s.dragonBones||{},(s.elementId?s.elementId instanceof HTMLElement?s.elementId:document.getElementById(s.elementId):document.getElementById("gamePlace")).appendChild(e);var c=typescript_ioc_1.Container.get(PIXIRenderer_1.PIXIRenderer);c.initialize(s.renderOptions),this._arenaApi(),typescript_ioc_1.Container.get(GameLanguages_1.GameLanguages).init(s.supportLanguages.languages,s.supportLanguages.defaultLanguage);var u=typescript_ioc_1.Container.get(IArenaApi_1.IArenaApi),p=u.absoluteURL(""),o=typescript_ioc_1.Container.get(Debug_1.Debug);o.version=s.version,o.gameId=s.gameId,o.init(window,{htmlElement:e,gameRun:function(){var e=typescript_ioc_1.Container.get(StorageManager_1.StorageManager);e.setGameId(s.gameId);var n=typescript_ioc_1.Container.get(AbTestManager_1.AbTestManager);n.initialize(s.abTest,e);var i=typescript_ioc_1.Container.get(AnalyticResources_1.AnalyticResources);i.arenaName=u.getArenaName(),i.gameVersion=s.version,i.testGroup=n.isActive?n.testGroup:"",i.providers=s.analytic?s.analytic.providers:[],typescript_ioc_1.Container.get(SoundManager_1.SoundManager).loadData(s.sounds,p+s.resourcesRoot,s.soundStorageKey||"sound-settings");for(var t=typescript_ioc_1.Container.get(s.main,s.options),o=s.orientations||[],r=ScreenOrientationEnum_1.ScreenOrientationEnum.PortraitAndLandscape,a=0;a<o.length;a++)o[a].orientationEnvironment&Environment_1.Environment.type&&(r=o[a].orientation);return t.orientation=r,t.create().then(function(){d._addWindowListeners(t,c.renderer.view)},function(e){}),t.version=s.version,t.gameId=s.gameId,t}}),o.ready=!0}return e.prototype._arenaApi=function(){null!=window.ArenaXApi&&null!=window.ArenaXApi?typescript_ioc_1.Container.bind(IArenaApi_1.IArenaApi).to(ArenaXApi_1.ArenaXApi).scope(typescript_ioc_1.Scope.Singleton):typescript_ioc_1.Container.bind(IArenaApi_1.IArenaApi).to(Arena4Api_1.Arena4Api).scope(typescript_ioc_1.Scope.Singleton)},e.prototype._addWindowListeners=function(o,e){var r="hidden";void 0!==document.mozHidden?(r="mozHidden",document.addEventListener("mozvisibilitychange",n)):void 0!==document.webkitHidden?(r="webkitHidden",document.addEventListener("webkitvisibilitychange",n)):void 0!==document.msHidden?(r="msHidden",document.addEventListener("msvisibilitychange",n)):void 0!==document.hidden?document.addEventListener("visibilitychange",n):"onfocusin"in document&&(document.onfocusin=document.onfocusout=n),window.onpageshow=window.onpagehide=window.onfocus=window.onblur=n;var a=!0;function n(e){var n="visible",i="hidden",t={focus:n,focusin:n,pageshow:n,blur:i,focusout:i,pagehide:i};(e=e||window.event).type in t?"hidden"==t[e.type]?(a=!1,o.focus(!1)):(a=!0,o.focus(!0),o.rendererResize(!0),window.focus()):document[r]?(a=!1,o.focus(!1)):(a=!0,o.focus(!0),o.rendererResize(!0),window.focus())}void 0!==document[r]&&n({type:document[r]?"blur":"focus"}),e.addEventListener("touchstart",function(){a||window.focus()}),e.addEventListener("click",function(){a||window.focus()}),window.addEventListener("deviceOrientation",function(){a=!0,o.focus(!0),o.rendererResize()})},e}();exports.Game=Game;