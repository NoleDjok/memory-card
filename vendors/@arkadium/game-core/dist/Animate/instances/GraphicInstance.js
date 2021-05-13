"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Instance_1=require("./Instance"),SYNCHED=2,GraphicInstance=function(r){function t(t,n){var e=r.call(this,t,n)||this;return e.mode=SYNCHED,e}return __extends(t,r),t.prototype.buildContent=function(t,n,e){return void 0===n&&(n=!1),t._children[this.libraryItem.name].getInstance()},t}(Instance_1.Instance);exports.GraphicInstance=GraphicInstance;