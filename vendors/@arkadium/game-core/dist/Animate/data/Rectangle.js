"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var DataUtils_1=require("../utils/DataUtils"),Rectangle=function(){function t(t){this.x=this.round(t.x),this.y=this.round(t.y),this.width=this.round(t.width),this.height=this.round(t.height)}return t.prototype.round=function(t){return DataUtils_1.DataUtils.toPrecision(t,2)},t}();exports.Rectangle=Rectangle;