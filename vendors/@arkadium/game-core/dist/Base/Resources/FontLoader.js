"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports.FontLoader=function(e,t,i,o,n){void 0===o&&(o=null),void 0===n&&(n=null),(i=i||0).timeoutAfter&&setTimeout(function(){o&&(document.body.removeChild(o),o=0,i.onTimeout&&i.onTimeout())},i.timeoutAfter),(n=function(){o&&o.firstChild.clientWidth==o.lastChild.clientWidth&&(document.body.removeChild(o),o=0,t())})(document.body.appendChild(o=document.createElement("div")).innerHTML='<div style="position:fixed;white-space:pre;bottom:999%;right:999%;font:999px '+(i.generic?"":"'")+e+(i.generic?"":"'")+',serif">'+(i.sampleText||" ")+'</div><div style="position:fixed;white-space:pre;bottom:999%;right:999%;font:999px '+(i.generic?"":"'")+e+(i.generic?"":"'")+',monospace">'+(i.sampleText||" ")+"</div>"),o&&(o.firstChild.appendChild(e=document.createElement("iframe")).style.width="999%",e.contentWindow.onresize=n,o.lastChild.appendChild(e=document.createElement("iframe")).style.width="999%",e.contentWindow.onresize=n,e=setTimeout(n))};