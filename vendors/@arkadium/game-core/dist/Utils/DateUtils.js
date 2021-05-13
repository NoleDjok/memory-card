"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var DateUtils=function(){function t(){}return t.prototype.getOrdinalSuffix=function(t){if(10<t%100&&t%100<20)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},t.prototype.convertMStoTime=function(t){var r="",e=Math.floor(t/1e3)%60,n=Math.floor(t/6e4)%60;return r+=this.convertZero(n)+":",r+=0<e?this.convertZero(e):"00"},t.prototype.convertZero=function(t){var r=t.toString();return t<10&&(r="0"+r),r},t.prototype.stripDateFromString=function(t){return t.replace(/(\d)?[- /.](\d)?[- /.](\d)?/g,""),t},t.prototype.getCurrentTimeUTCms=function(){return(new Date).getTime()},t.timeFormat=function(t){var r=Math.floor(t/60),e=Math.floor(t%60);return 9<e?String(r)+":"+String(e):String(r)+":0"+String(e)},t}();exports.DateUtils=DateUtils;