"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __decorate=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;0<=p;p--)(n=e[p])&&(i=(c<3?n(i):3<c?n(t,r,i):n(t,r))||i);return 3<c&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var typescript_ioc_1=require("../IoC/typescript-ioc"),ViewBaseEmptyLogger=function(){function e(){}return e.prototype.log=function(e,t,r){for(var o=[],n=3;n<arguments.length;n++)o[n-3]=arguments[n]},e.prototype.error=function(e,t,r){for(var o=[],n=3;n<arguments.length;n++)o[n-3]=arguments[n]},e.prototype.warn=function(e,t,r,o){for(var n=[],c=4;c<arguments.length;c++)n[c-4]=arguments[c]},e=__decorate([typescript_ioc_1.Singleton],e)}();exports.ViewBaseEmptyLogger=ViewBaseEmptyLogger;