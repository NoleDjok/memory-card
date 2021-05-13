"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var Linq_1=require("../../Linq/Linq"),ResourcesList=function(){function e(){this.items=new Linq_1.List}return e.prototype.get=function(t){return this.items.FirstOrDefault(function(e){return e.name==t})},e}();exports.ResourcesList=ResourcesList;