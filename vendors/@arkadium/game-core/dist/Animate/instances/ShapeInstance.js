"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__decorate=this&&this.__decorate||function(e,t,r,i){var a,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;0<=n;n--)(a=e[n])&&(o=(s<3?a(o):3<s?a(t,r,o):a(t,r))||o);return 3<s&&o&&Object.defineProperty(t,r,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var Instance_1=require("./Instance"),MemoryAtlas_1=require("../utils/MemoryAtlas"),typescript_ioc_1=require("../../IoC/typescript-ioc"),SVGPath_1=require("../utils/SVGPath"),MemoryCache_1=require("../utils/MemoryCache"),utils_1=require("../pixi/utils"),ShapeInstance=function(r){function i(e,t){return r.call(this,e,t)||this}return __extends(i,r),i.prototype.isIE=function(){if(i._isIe||i._isNotIe)return i._isIe;var e=window.navigator.userAgent,t=e.indexOf("MSIE "),r=e.indexOf("Trident/");return i._isIe=0<t||0<r||-1<navigator.userAgent.toLowerCase().indexOf("firefox"),i._isNotIe=!i._isIe,i._isIe},i.prototype.buildContent=function(e,t,r,i){void 0===t&&(t=!1),void 0===i&&(i=1);var a=new PIXI.Container;if(a.x=0,a.y=0,null!==this.libraryItem.spritesheetId&&void 0!==this.libraryItem.spritesheetId&&e.animate.__shapesheets[this.libraryItem.spritesheetId]){var s=0,o=this.libraryItem.assetId+"_"+s,n=e.animate.__shapesheets[this.libraryItem.spritesheetId].spritesheet.textures[o],h=e.animate.__shapesheets[this.libraryItem.spritesheetId].data.frames[o];if(n&&h){for(;n;){(b=new PIXI.Sprite(n)).x=h.offset.x,b.y=h.offset.y,a.addChild(b),s++,o=this.libraryItem.assetId+"_"+s,n=e.animate.__shapesheets[this.libraryItem.spritesheetId].spritesheet.textures[o],h=e.animate.__shapesheets[this.libraryItem.spritesheetId].data.frames[o]}return a.name=this.libraryItem.assetId+"",a}}if(t||this.isIE()){var p=this.buildDrawCommands(this.libraryItem.paths,t),d=(new PIXI.Graphics).drawCommands(p);return d.name=this.libraryItem.name,d}var l="shape_instance_"+e.animate.__name+this.libraryItem.assetId,f=this._memoryCache.get(l);if(f){for(var u=0,c=f;u<c.length;u++){var _=c[u];(b=new PIXI.Sprite(_.texture)).x=_.offsetX,b.y=_.offsetY,a.addChild(b)}return a}for(var y=[],m=0,I=this.libraryItem.paths;m<I.length;m++){var x=I[m],v=this.buildTextureSource(x,i);if(v){var b;n=PIXI.Texture.fromImage(v.svgBase64,!1,PIXI.SCALE_MODES.LINEAR,1/i);(b=new PIXI.Sprite(n)).x=v.offsetX,b.y=v.offsetY,y.push({texture:n,offsetX:v.offsetX,offsetY:v.offsetY}),a.addChild(b)}}return this._memoryCache.add(l,y),a},i.prototype.buildTextureSource=function(e,t){var r=e.d.join(" ").toUpperCase(),i=SVGPath_1.SVGPath.parse(r);e.thickness&&(i.bounds.xMin-=e.thickness/2,i.bounds.yMin-=e.thickness/2,i.bounds.xMax+=e.thickness/2,i.bounds.yMax+=e.thickness/2);var a=-i.bounds.xMin,s=-i.bounds.yMin,o=new SVGPath_1.SVGParser(new SVGPath_1.Outline);o.parse(""+r,a,s);var n=o.receiver.toSVG(),h=Math.abs(i.bounds.xMin-i.bounds.xMax),p=Math.abs(i.bounds.yMin-i.bounds.yMax);if(!(h<1||p<1))return{svgBase64:this.buildSvgBase64(e,n,h,p,a,s,t),offsetX:-a,offsetY:-s}},i.prototype.buildSvgBase64=function(e,t,r,i,a,s,o){var n,h='<svg height="'+(i*=o)+'" width="'+(r*=o)+'" xmlns="http://www.w3.org/2000/svg"><g transform="scale('+o+')">',p="";if(e.linearGradient||e.radialGradient){var d=void 0;if(e.linearGradient)h+='<linearGradient id="gradient" gradientUnits="userSpaceOnUse" spreadMethod="'+(d=e.linearGradient).spreadMethod+'" x1="'+(d.x1+a)+'" \n                            y1="'+(d.y1+s)+'" x2="'+(d.x2+a)+'" y2="'+(d.y2+s)+'">';else{var l=(d=e.radialGradient).gradientTransform;h+='<radialGradient id="gradient" gradientUnits="userSpaceOnUse" spreadMethod="'+d.spreadMethod+'" cx="'+d.cx+'" \n                            cy="'+d.cy+'" r="'+d.r+'" fx="'+d.fx+'" fy="'+d.fy+'" \n                            gradientTransform="matrix('+l.a+", "+l.b+", "+l.c+", "+l.d+", "+(l.tx+a)+", "+(l.ty+s)+')">'}for(var f=0,u=d.stop;f<u.length;f++){var c=u[f];h+='<stop offset="'+c.offset+'%" stop-color="'+c.stopColor+'" stop-opacity="'+c.stopOpacity+'"></stop>'}e.linearGradient?h+="</linearGradient>":h+="</radialGradient>",n="url(#gradient)"}return e.stroke?(n||(n=e.color),p+=' stroke="'+n+'"',p+=' fill="none"',e.alpha&&(p+=' stroke-opacity="'+e.alpha+'"'),e.thickness&&(p+=' stroke-width="'+e.thickness+'"'),e.linejoin&&(p+=' stroke-linejoin="'+e.linejoin+'"'),e.linecap&&(p+=' stroke-linecap="'+e.linecap+'"'),e.miterLimit&&(p+=' stroke-miterlimit="'+e.miterLimit+'"')):(n||(n=e.color),p+=' fill="'+n+'"',e.alpha&&(p+=' fill-opacity="'+e.alpha+'"')),h+="<path "+p+' d="'+t+'" />',h+="</g></svg>","data:image/svg+xml;base64,"+btoa(h)},i.prototype.buildDrawCommands=function(e,t){if(t){for(var r=[],i=0,a=e.length;i<a;i++){if((h=e[i]).stroke){r.push("f",0,0);var s=void 0,o=void 0;s=utils_1.default.hexToUint(h.color),o=h.alpha,r.push("s",h.thickness,s,o)}else h.image?r.push("f",0,1):r.push("f",utils_1.default.hexToUint(h.color),h.alpha);h.d.forEach(function(e,t,r){"number"==typeof e&&(r[t]=Math.round(100*e)/100)}),r.push.apply(r,h.d)}return r}var n=[];if(this.isIE())for(i=0,a=e.length;i<a;i++){var h,p=(h=e[i]).radialGradient||h.linearGradient;if(h.stroke){n.push("f",0,0);s=0,o=0;o=p?(s=utils_1.default.hexToUint(p.stop[0].stopColor),p.stop[0].stopOpacity):(s=utils_1.default.hexToUint(h.color),h.alpha),n.push("s",h.thickness,s,o)}else p?n.push("f",utils_1.default.hexToUint(p.stop[0].stopColor),p.stop[0].stopOpacity):h.image?n.push("f",0,1):n.push("f",utils_1.default.hexToUint(h.color),h.alpha);h.d.forEach(function(e,t,r){"number"==typeof e&&(r[t]=Math.round(100*e)/100)}),n.push.apply(n,h.d)}return n},i._isIe=!1,i._isNotIe=!1,__decorate([typescript_ioc_1.Inject,__metadata("design:type",MemoryAtlas_1.MemoryAtlas)],i.prototype,"_memoryAtlas",void 0),__decorate([typescript_ioc_1.Inject,__metadata("design:type",MemoryCache_1.MemoryCache)],i.prototype,"_memoryCache",void 0),i}(Instance_1.Instance);exports.ShapeInstance=ShapeInstance;