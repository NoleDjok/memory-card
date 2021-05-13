"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var LibraryItem_1=require("./LibraryItem"),SoundInstance_1=require("../instances/SoundInstance"),Sound=function(e){function t(t,n){return e.call(this,t,n)||this}return __extends(t,e),t.prototype.create=function(t){return new SoundInstance_1.SoundInstance(this,t)},t}(LibraryItem_1.LibraryItem);exports.Sound=Sound;