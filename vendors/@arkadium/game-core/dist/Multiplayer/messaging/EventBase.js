"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */function getUtcNow(){return getUtcFromLocal(new Date(Date.now()))}function getUtcFromLocal(t){var e=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds());return new Date(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUtcNow=getUtcNow,exports.getUtcFromLocal=getUtcFromLocal;var EventBase=function(){function t(t){this.isoDateTime=t||getUtcNow().toISOString()}return t.getIsoDateTime=function(){return getUtcNow().toISOString()},t}();exports.EventBase=EventBase;