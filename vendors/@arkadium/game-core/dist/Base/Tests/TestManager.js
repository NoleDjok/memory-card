"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __decorate=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;0<=s;s--)(n=e[s])&&(o=(a<3?n(o):3<a?n(t,r,o):n(t,r))||o);return 3<a&&o&&Object.defineProperty(t,r,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var Linq_1=require("../../Linq/Linq"),IArenaApi_1=require("../Arena/IArenaApi"),typescript_ioc_1=require("../../IoC/typescript-ioc"),TestManager=function(){function e(){this._tests=new Array,this._arenaApi.registerActions(this.processTestAction.bind(this))}return e.prototype.add=function(e){this._tests.push(e)},e.prototype.remove=function(e){var t=this._tests.indexOf(e);this._tests.splice(t,1)},e.prototype.processTestAction=function(e){for(var t=0;t<e.length;t++){var r=e[t];if("test_object"==r.name){var i=r.value.split(";");this.runTestByName(i[0]);break}}},e.prototype.runTestByName=function(t){var e=new Linq_1.List(this._tests).FirstOrDefault(function(e){return e.type==t});null!=e&&e.run()},__decorate([typescript_ioc_1.Inject,__metadata("design:type",IArenaApi_1.IArenaApi)],e.prototype,"_arenaApi",void 0),e=__decorate([typescript_ioc_1.Singleton,__metadata("design:paramtypes",[])],e)}();exports.TestManager=TestManager;