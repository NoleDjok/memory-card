"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Timeline_1=require("./Timeline"),MovieClipFactory_1=require("../factories/MovieClipFactory"),Stage=function(n){function e(e,t,r){var o=n.call(this,e,t)||this;return o.framerate=r,o.assets={},o}return __extends(e,n),e.prototype.render=function(e){var t={duration:this.totalFrames,framerate:this.framerate,loop:!1,labels:{}},r=this.getLabels();!!Object.keys(r).length&&(t.labels=r);var o=new MovieClipFactory_1.MovieClipFactory(t,e,this.name);e[this.name]=o,this.getContents(o)},e}(Timeline_1.Timeline);exports.Stage=Stage;