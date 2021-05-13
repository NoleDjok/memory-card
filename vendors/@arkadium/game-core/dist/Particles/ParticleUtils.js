"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var TextureFromString,ParticleUtils,PropertyNode_1=require("./PropertyNode");function GetTextureFromString(e){return TextureFromString(e)}exports.GetTextureFromString=GetTextureFromString,function(f){f.verbose=!1,f.DEG_TO_RADS=Math.PI/180,f.rotatePoint=function(e,r){if(e){e*=f.DEG_TO_RADS;var t=Math.sin(e),n=Math.cos(e),o=r.x*n-r.y*t,i=r.x*t+r.y*n;r.x=o,r.y=i}},f.combineRGBComponents=function(e,r,t){return e<<16|r<<8|t},f.normalize=function(e){var r=1/f.length(e);e.x*=r,e.y*=r},f.scaleBy=function(e,r){e.x*=r,e.y*=r},f.length=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},f.hexToRGB=function(e,r){var t;return r||(r={}),"#"==e.charAt(0)?e=e.substr(1):0===e.indexOf("0x")&&(e=e.substr(2)),8==e.length&&(t=e.substr(0,2),e=e.substr(2)),r.r=parseInt(e.substr(0,2),16),r.g=parseInt(e.substr(2,2),16),r.b=parseInt(e.substr(4,2),16),t&&(r.a=parseInt(t,16)),r},f.generateEase=function(o){var i=o.length,s=1/i;return function(e){var r,t,n=i*e|0;return r=(e-n*s)*i,(t=o[n]||o[i-1]).s+r*(2*(1-r)*(t.cp-t.s)+r*(t.e-t.s))}},f.getBlendMode=function(e){if(!e)return PIXI.BLEND_MODES.NORMAL;for(e=e.toUpperCase();0<=e.indexOf(" ");)e=e.replace(" ","_");return PIXI.BLEND_MODES[e]||PIXI.BLEND_MODES.NORMAL},f.createSteppedGradient=function(e,r){void 0===r&&(r=10),("number"!=typeof r||r<=0)&&(r=10);var t=new PropertyNode_1.PropertyNode(f.hexToRGB(e[0].value),e[0].time);t.isStepped=!0;for(var n=t,o=e[0],i=1,s=e[i],u=1;u<r;++u){for(var a=u/r;a>s.time;)o=s,s=e[++i];a=(a-o.time)/(s.time-o.time);var c=f.hexToRGB(o.value),p=f.hexToRGB(s.value),x={r:(p.r-c.r)*a+c.r,g:(p.g-c.g)*a+c.g,b:(p.b-c.b)*a+c.b};n.next=new PropertyNode_1.PropertyNode(x,u/r),n=n.next}return t}}(ParticleUtils=exports.ParticleUtils||(exports.ParticleUtils={}));