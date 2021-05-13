"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var typescript_ioc_1=require("./IoC/typescript-ioc"),ScreenOrientationEnum_1=require("./Base/Orientation/ScreenOrientationEnum"),StorageManager_1=require("./Base/Storage/StorageManager"),RootHtml_1=require("./RootHtml"),DevicePixelRatio_1=require("./DevicePixelRatio"),GameResources_1=require("./GameResources"),PIXIRenderer_1=require("./PIXIRenderer"),Environment_1=require("./Environment"),Interactive=function(){function e(e){var t=this;this._htmlElement=document.createElement("div"),this._htmlElement.style.height="100%",this._htmlElement.style.overflow="hidden",typescript_ioc_1.Container.get(RootHtml_1.RootHtml).htmlDivElement=this._htmlElement,typescript_ioc_1.Container.get(DevicePixelRatio_1.DevicePixelRatio).value=e.devicePixelRatio||window.devicePixelRatio;var n=typescript_ioc_1.Container.get(GameResources_1.GameResources);n.root=e.resourcesRoot,n.options={},(e.elementId?e.elementId instanceof HTMLElement?e.elementId:document.getElementById(e.elementId):document.getElementById("gamePlace")).appendChild(this._htmlElement),typescript_ioc_1.Container.get(StorageManager_1.StorageManager).setGameId(e.moduleId),typescript_ioc_1.Container.get(PIXIRenderer_1.PIXIRenderer).initialize(e.renderOptions);for(var i=typescript_ioc_1.Container.get(e.main,e.options),o=e.orientations||[],r=ScreenOrientationEnum_1.ScreenOrientationEnum.PortraitAndLandscape,d=0;d<o.length;d++)o[d].orientationEnvironment&Environment_1.Environment.type&&(r=o[d].orientation);i.orientation=r,i.create().then(function(){t._addWindowListeners(i)},function(e){}),i.version=e.version,i.gameId=e.moduleId}return e.prototype._addWindowListeners=function(o){var r="hidden";function e(e){var t="visible",n="hidden",i={focus:t,focusin:t,pageshow:t,blur:n,focusout:n,pagehide:n};(e=e||window.event).type in i?"hidden"==i[e.type]?o.focus(!1):(o.focus(!0),o.rendererResize(!0)):document[r]?o.focus(!1):(o.focus(!0),o.rendererResize(!0))}void 0!==document.mozHidden?(r="mozHidden",document.addEventListener("mozvisibilitychange",e)):void 0!==document.webkitHidden?(r="webkitHidden",document.addEventListener("webkitvisibilitychange",e)):void 0!==document.msHidden?(r="msHidden",document.addEventListener("msvisibilitychange",e)):void 0!==document.hidden?document.addEventListener("visibilitychange",e):"onfocusin"in document&&(document.onfocusin=document.onfocusout=e),window.onpageshow=window.onpagehide=window.onfocus=window.onblur=e,void 0!==document[r]&&e({type:document[r]?"blur":"focus"}),window.addEventListener("deviceOrientation",function(){o.rendererResize()})},e}();exports.Interactive=Interactive;