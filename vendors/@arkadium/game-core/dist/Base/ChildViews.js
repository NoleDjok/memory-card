"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var Linq_1=require("../Linq/Linq"),ChildItem=function(i){this.view=i};exports.ChildItem=ChildItem;var ChildViews=function(){function i(){this.items=new Linq_1.List}return i.prototype.get=function(i){if(!this[i])return null;var e=this[i].view;return e.disposed?null:e},i}();exports.ChildViews=ChildViews;