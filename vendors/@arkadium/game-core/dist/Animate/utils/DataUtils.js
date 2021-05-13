"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var DataUtils=function(){function r(){}return r.toPrecision=function(r,e){void 0===e&&(e=null),e=e||2;var n=Math.pow(10,e);return Math.round(r*n)/n},r.stringifySimple=function(r){return JSON.stringify(r,null,"  ").replace(/\"([^(\")"\d\s\-]+)\":/g,"$1:")},r.readableShapes=function(r){return JSON.stringify(r).replace("{","{\n  ").replace("]}","\n  ]\n}").replace(/\:/g,": ").replace(/,/g,", ").replace(/(\"[a-z])/g,"\n    $1").replace(/\],/g,"],\n  ")},r.compressColors=function(r){return r.replace(/([a-f0-9])\1([a-f0-9])\2([a-f0-9])\3/,"$1$2$3")},r.simpleTint=function(r){if(0===r[1]&&0===r[3]&&0===r[5]&&0<=r[0]&&0<=r[2]&&0<=r[4]){var e=Math.round(255*r[0]),n=Math.round(255*r[2]),t="#"+((1<<24)+(e<<16)+(Math.round(255*r[4])<<8)+n).toString(16).slice(1);return this.compressColors(t)}return null},r.optimizeColorTransforms=function(r){var e={};for(var n in r){if(!(i=r[n]).c)return;var t=this.simpleTint(r[n].c);if(null===t)return;e[n]=t}for(var n in r){var i;delete(i=r[n]).c,i.t=e[n]}},r}();exports.DataUtils=DataUtils;