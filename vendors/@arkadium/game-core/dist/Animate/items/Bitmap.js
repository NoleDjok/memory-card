"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var LibraryItem_1=require("./LibraryItem"),BitmapInstance_1=require("../instances/BitmapInstance"),Bitmap=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),t.prototype.create=function(t){return new BitmapInstance_1.BitmapInstance(this,t)},t}(LibraryItem_1.LibraryItem);exports.Bitmap=Bitmap;