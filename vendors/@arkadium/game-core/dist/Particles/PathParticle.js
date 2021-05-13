"use strict";var __extends=this&&this.__extends||function(){var r=function(t,i){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)};return function(t,i){function e(){this.constructor=t}r(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var ParticleUtils_1=require("./ParticleUtils"),Particle_1=require("./Particle"),helperPoint=new PIXI.Point,MATH_FUNCS=["pow","sqrt","abs","floor","round","ceil","E","PI","sin","cos","tan","asin","acos","atan","atan2","log"],WHITELISTER=new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(MATH_FUNCS).join("|"),"g"),parsePath=function(t){for(var i=t.match(WHITELISTER),e=i.length-1;0<=e;--e)0<=MATH_FUNCS.indexOf(i[e])&&(i[e]="Math."+i[e]);return t=i.join(""),new Function("x","return "+t+";")},PathParticle=function(e){function t(t){var i=e.call(this,t)||this;return i.path=null,i.initialRotation=0,i.initialPosition=new PIXI.Point,i.movement=0,i}return __extends(t,e),t.prototype.init=function(){this.initialRotation=this.rotation,this.Particle_init(),this.path=this.extraData.path,this._doNormalMovement=!this.path,this.movement=0,this.initialPosition.x=this.position.x,this.initialPosition.y=this.position.y},t.prototype.update=function(t){var i=this.Particle_update(t);if(0<=i&&this.path){var e=this.speedList.interpolate(i)*this.speedMultiplier;this.movement+=e*t,helperPoint.x=this.movement,helperPoint.y=this.path(this.movement),ParticleUtils_1.ParticleUtils.rotatePoint(this.initialRotation,helperPoint),this.position.x=this.initialPosition.x+helperPoint.x,this.position.y=this.initialPosition.y+helperPoint.y}return i},t.prototype.destroy=function(){this.Particle_destroy(),this.path=this.initialPosition=null},t.parseArt=function(t){return Particle_1.Particle.parseArt(t)},t.parseData=function(t){var i={};if(t&&t.path)try{i.path=parsePath(t.path)}catch(t){ParticleUtils_1.ParticleUtils.verbose&&console.error("PathParticle: error in parsing path expression"),i.path=null}else ParticleUtils_1.ParticleUtils.verbose&&console.error("PathParticle requires a path string in extraData!"),i.path=null;return i},t}(Particle_1.Particle);exports.PathParticle=PathParticle;