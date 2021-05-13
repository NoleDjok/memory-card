"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Roodik Anton <roodika@arkadium.com>
 */var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__decorate=this&&this.__decorate||function(t,e,r,n){var i,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;0<=s;s--)(i=t[s])&&(a=(o<3?i(a):3<o?i(e,r,a):i(e,r))||a);return 3<o&&a&&Object.defineProperty(e,r,a),a},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},__param=this&&this.__param||function(r,n){return function(t,e){n(t,e,r)}},__awaiter=this&&this.__awaiter||function(t,a,s,c){return new(s||(s=Promise))(function(r,e){function n(t){try{o(c.next(t))}catch(t){e(t)}}function i(t){try{o(c.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s(function(t){t(e)})).then(n,i)}o((c=c.apply(t,a||[])).next())})},__generator=this&&this.__generator||function(r,n){var i,o,a,t,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&e[0]?o.return:e[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,e[1])).done)return a;switch(o=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,o=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=n.call(r,s)}catch(t){e=[6,t],o=0}finally{i=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(exports,"__esModule",{value:!0});var AbTestManager_1=require("../AbTest/AbTestManager"),typescript_ioc_1=require("../IoC/typescript-ioc"),AnalyticProperty_1=require("./AnalyticProperty"),BaseAnalytic_1=require("./Base/BaseAnalytic"),AnalyticResources_1=require("../AnalyticResources"),Analytic=function(n){function t(t,e){var r=n.call(this,t,e)||this;return r.START_BUTTON="Start_Button",r.GAME_END="Game_End",r.ROUND_N="Round{N}",r.ROUND_N_END="Round{N}_End",r.IMPRESSION="Impression",r.CLICK="Click",r.WIN="Win",r.TIME_OUT="Time_Out",r.NEW_GAME="New_Game",r.RESTART="Restart",r.QUIT="Quit",r.LOSE="Lose",r.START="Start",r.FINISHED="Finished",r.NOT_FINISHED="Not_Finished",r.INTRO_SCREEN="IntroScreen",r.GAME_SCREEN="GameScreen",r.GAME_OVER_SCREEN="GameOver",r.QUIT_CONFIRMED="QuitConfirmed",r}return __extends(t,n),t.prototype.startButtonImpression=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.sendEvent(this.START_BUTTON,this.IMPRESSION)]})})},t.prototype.startButtonClick=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.sendEvent(this.START_BUTTON,this.CLICK)]})})},t.prototype.levelStart=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.sendEvent(this.ROUND_N.replace("{N}",e.toString()),this.START)]})})},t.prototype.levelEndFinished=function(e,r){return void 0===r&&(r=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),[2,this.sendEvent(this.ROUND_N_END.replace("{N}",e.toString()),this.FINISHED)]})})},t.prototype.levelEndNotFinished=function(e,r){return void 0===r&&(r=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),[2,this.sendEvent(this.ROUND_N_END.replace("{N}",e.toString()),this.NOT_FINISHED)]})})},t.prototype.winGame=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),-1!=n&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.ROUND,value:n.toString()}),this.addProperty({key:AnalyticProperty_1.AnalyticProperty.SCORE,value:e.toString()}),[2,this.sendEvent(this.GAME_END,this.WIN)]})})},t.prototype.gameEndTimeOut=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),-1!=n&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.ROUND,value:n.toString()}),this.addProperty({key:AnalyticProperty_1.AnalyticProperty.SCORE,value:e.toString()}),[2,this.sendEvent(this.GAME_END,this.TIME_OUT)]})})},t.prototype.gameEndNewGame=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),-1!=n&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.ROUND,value:n.toString()}),this.addProperty({key:AnalyticProperty_1.AnalyticProperty.SCORE,value:e.toString()}),[2,this.sendEvent(this.GAME_END,this.NEW_GAME)]})})},t.prototype.gameEndRestart=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),-1!=n&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.ROUND,value:n.toString()}),this.addProperty({key:AnalyticProperty_1.AnalyticProperty.SCORE,value:e.toString()}),[2,this.sendEvent(this.GAME_END,this.RESTART)]})})},t.prototype.gameQuited=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),-1!=n&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.ROUND,value:n.toString()}),this.addProperty({key:AnalyticProperty_1.AnalyticProperty.SCORE,value:e.toString()}),[2,this.sendEvent(this.GAME_END,this.QUIT)]})})},t.prototype.gameLose=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=-1),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return-1!=r&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.TIME_SPENT,value:r.toString()}),-1!=n&&this.addProperty({key:AnalyticProperty_1.AnalyticProperty.ROUND,value:n.toString()}),this.addProperty({key:AnalyticProperty_1.AnalyticProperty.SCORE,value:e.toString()}),[2,this.sendEvent(this.GAME_END,this.LOSE)]})})},t.prototype.introPanelShowed=function(){this.sendPageView(this.INTRO_SCREEN)},t.prototype.gamePanelShowed=function(){this.sendPageView(this.GAME_SCREEN)},t.prototype.gameOverPanelShowed=function(){this.sendPageView(this.GAME_OVER_SCREEN)},t.prototype.quitGamePanelConfirmed=function(){this.sendPageView(this.QUIT_CONFIRMED)},t.prototype.sendEvent=function(e,r){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.sendEventInternal(e,r)]})})},t.prototype.sendPageView=function(t){this.sendPageViewInternal(t)},t=__decorate([typescript_ioc_1.Singleton,__param(1,typescript_ioc_1.Inject),__metadata("design:paramtypes",[AnalyticResources_1.AnalyticResources,AbTestManager_1.AbTestManager])],t)}(BaseAnalytic_1.BaseAnalytic);exports.Analytic=Analytic;