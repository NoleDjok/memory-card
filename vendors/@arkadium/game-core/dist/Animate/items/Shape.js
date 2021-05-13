"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var ShapeInstance_1=require("../instances/ShapeInstance"),DataUtils_1=require("../utils/DataUtils"),LibraryItem_1=require("./LibraryItem"),utils_1=require("../pixi/utils"),Shape=function(c){function o(t,e){var r=c.call(this,t,e)||this;r.name="";var o=[];if(r.isIE())for(var i=0,n=r.paths.length;i<n;i++){var s=r.paths[i],a=s.radialGradient||s.linearGradient;if(s.stroke){o.push("f",0,0);var p=0,u=0;u=a?(p=utils_1.default.hexToUint(a.stop[0].stopColor),a.stop[0].stopOpacity):(p=utils_1.default.hexToUint(s.color),s.alpha),o.push("s",s.thickness,p,u)}else a?o.push("f",utils_1.default.hexToUint(a.stop[0].stopColor),a.stop[0].stopOpacity):s.image?o.push("f",0,1):o.push("f",utils_1.default.hexToUint(s.color),s.alpha);s.d.forEach(function(t,e,r){"number"==typeof t&&(r[e]=Math.round(100*t)/100)}),o.push.apply(o,s.d)}return r.draw=o,r}return __extends(o,c),o.prototype.isIE=function(){if(o._isIe||o._isNotIe)return o._isIe;var t=window.navigator.userAgent,e=t.indexOf("MSIE "),r=t.indexOf("Trident/");return o._isNotIe=!(o._isIe=0<e||0<r),o._isIe},o.prototype.toColor=function(t){return DataUtils_1.DataUtils.compressColors(t)},o.prototype.create=function(t){return new ShapeInstance_1.ShapeInstance(this,t)},o.prototype.toString=function(){return this.draw.join(" ")},o._isIe=!1,o._isNotIe=!1,o}(LibraryItem_1.LibraryItem);exports.Shape=Shape;