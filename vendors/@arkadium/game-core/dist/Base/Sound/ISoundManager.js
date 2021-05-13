"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var SoundType;Object.defineProperty(exports,"__esModule",{value:!0}),function(o){o[o.SFX=0]="SFX",o[o.Music=1]="Music",o[o.ALL=2]="ALL"}(SoundType=exports.SoundType||(exports.SoundType={}));var ISoundManager=function(){function o(){}return o.prototype.play=function(o,t){},o.prototype.stop=function(o){},o.prototype.changeVolume=function(o,t){},o.prototype.stopAll=function(){},o.prototype.muteSoundsByType=function(o,t){},o.prototype.loadSound=function(o,t,n){},o.prototype.isSoundPlaying=function(o){},o.prototype.isAdded=function(o){return!0},o.prototype.isLoaded=function(o){return!0},o.prototype.getSoundById=function(o){return null},o.prototype.playSound=function(o,t,n){},o}();exports.ISoundManager=ISoundManager;