"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __decorate=this&&this.__decorate||function(e,t,i,o){var c,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;0<=n;n--)(c=e[n])&&(a=(r<3?c(a):3<r?c(t,i,a):c(t,i))||a);return 3<r&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var typescript_ioc_1=require("./IoC/typescript-ioc"),DevicePixelRatio=function(){function e(){this.value=window.devicePixelRatio}return e=__decorate([typescript_ioc_1.Singleton,__metadata("design:paramtypes",[])],e)}();exports.DevicePixelRatio=DevicePixelRatio;