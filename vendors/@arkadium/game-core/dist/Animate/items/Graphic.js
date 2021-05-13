"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};return function(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var LibraryItem_1=require("./LibraryItem"),GraphicInstance_1=require("../instances/GraphicInstance"),Graphic=function(e){function t(t,r){return e.call(this,t,r)||this}return __extends(t,e),t.prototype.render=function(t){},t.prototype.create=function(t){return new GraphicInstance_1.GraphicInstance(this,t)},t}(LibraryItem_1.LibraryItem);exports.Graphic=Graphic;