"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var DataUtils_1=require("../utils/DataUtils"),Matrix=function(){function t(t){this.x=this.round(t.tx),this.y=this.round(t.ty),this.scaleX=this.round(Math.sqrt(t.a*t.a+t.b*t.b)),this.scaleY=this.round(Math.sqrt(t.c*t.c+t.d*t.d)),this.skewX=-1*this.round(Math.atan2(t.d,t.c)-Math.PI/2),this.skewY=this.round(Math.atan2(t.b,t.a)),this.rotation=0,this.skewX+this.skewY===0&&(this.rotation=this.skewY,this.skewX=0,this.skewY=0)}return t.prototype.round=function(t){return DataUtils_1.DataUtils.toPrecision(t,3)},t.prototype.toTween=function(){return{x:this.x,y:this.y,sx:this.scaleX,sy:this.scaleY,kx:this.skewX,ky:this.skewY,r:this.rotation}},t}();exports.Matrix=Matrix;