"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var WorldClock_1=require("../animation/WorldClock"),EventObject_1=require("../event/EventObject"),DragonBones=function(){function e(e){this._clock=new WorldClock_1.WorldClock,this._events=[],this._objects=[],this._eventManager=null,this._eventManager=e}return e.prototype.advanceTime=function(e){if(0<this._objects.length){for(var t=0,n=this._objects;t<n.length;t++){n[t].returnToPool()}this._objects.length=0}if(this._clock.advanceTime(e),0<this._events.length){for(var o=0;o<this._events.length;++o){var r=this._events[o],s=r.armature;null!==s._armatureData&&(s.eventDispatcher.dispatchDBEvent(r.type,r),r.type===EventObject_1.EventObject.SOUND_EVENT&&this._eventManager.dispatchDBEvent(r.type,r)),this.bufferObject(r)}this._events.length=0}},e.prototype.bufferEvent=function(e){this._events.indexOf(e)<0&&this._events.push(e)},e.prototype.bufferObject=function(e){this._objects.indexOf(e)<0&&this._objects.push(e)},Object.defineProperty(e.prototype,"clock",{get:function(){return this._clock},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventManager",{get:function(){return this._eventManager},enumerable:!0,configurable:!0}),e.VERSION="5.7.000",e.yDown=!0,e.debug=!1,e.debugDraw=!1,e}();exports.DragonBones=DragonBones,console.warn||(console.warn=function(){}),console.assert||(console.assert=function(){}),Date.now||(Date.now=function(){return(new Date).getTime()});var __extends=function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n};