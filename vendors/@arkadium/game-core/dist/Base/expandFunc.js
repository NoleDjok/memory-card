"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var underscore_1=require("../Utils/underscore");exports.expandFunc=function(r,n){if("string"!=typeof r)return r;var e=r.split(/([.-].*)/);return 1<e.length?function(t,u,o,c){void 0===c&&(c=null);var l="string"==typeof t,i="number"==typeof u||null==u;return null==u&&(u=1),c||(c=[]),i||(u=u.replace(/\./g,function(e,r){return 8<r?"-":r+1}).replace(/[^1-9.\-]+/g,"-").replace(/-+$/,"")),function(){for(var e=o||this,r=i?c.concat(underscore_1._u.rest(arguments,u)):c.concat(),n=0;n<u.length;n++)"-"!=u[n]&&r.push(arguments[u[n]-1]);return(l?e[t]:t).apply(e,r)}}(e[0],e[1],n):function(){var e=n||this;return e[r].apply(e,arguments)}};