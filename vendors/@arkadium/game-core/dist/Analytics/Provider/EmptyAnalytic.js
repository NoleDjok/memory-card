"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */var __awaiter=this&&this.__awaiter||function(t,a,u,c){return new(u||(u=Promise))(function(n,e){function r(t){try{i(c.next(t))}catch(t){e(t)}}function o(t){try{i(c.throw(t))}catch(t){e(t)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof u?e:new u(function(t){t(e)})).then(r,o)}i((c=c.apply(t,a||[])).next())})},__generator=this&&this.__generator||function(n,r){var o,i,a,t,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=2&e[0]?i.return:e[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,i=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(!(a=0<(a=u.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){u.label=e[1];break}if(6===e[0]&&u.label<a[1]){u.label=a[1],a=e;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(e);break}a[2]&&u.ops.pop(),u.trys.pop();continue}e=r.call(n,u)}catch(t){e=[6,t],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(exports,"__esModule",{value:!0});var EmptyAnalytic=function(){function t(){}return t.prototype.sendPageView=function(t){},t.prototype.sendEvent=function(t,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.resolve(!0)]})})},t}();exports.EmptyAnalytic=EmptyAnalytic;