"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var CommandBase_1=require("./CommandBase"),Matrix_1=require("../data/Matrix"),Move=function(o){function t(t,e){var r=o.call(this,t,e)||this;return r.transform=new Matrix_1.Matrix(r.transform),r}return __extends(t,o),t.prototype.toFrame=function(t){Object.assign(t,this.transform.toTween())},t}(CommandBase_1.CommandBase);exports.Move=Move;