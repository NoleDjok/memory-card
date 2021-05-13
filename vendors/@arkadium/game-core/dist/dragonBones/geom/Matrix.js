"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Matrix=function(){function t(t,i,h,s,o,r){void 0===t&&(t=1),void 0===i&&(i=0),void 0===h&&(h=0),void 0===s&&(s=1),void 0===o&&(o=0),void 0===r&&(r=0),this.a=t,this.b=i,this.c=h,this.d=s,this.tx=o,this.ty=r}return t.prototype.toString=function(){return"[object dragonBones.Matrix] a:"+this.a+" b:"+this.b+" c:"+this.c+" d:"+this.d+" tx:"+this.tx+" ty:"+this.ty},t.prototype.copyFrom=function(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this},t.prototype.copyFromArray=function(t,i){return void 0===i&&(i=0),this.a=t[i],this.b=t[i+1],this.c=t[i+2],this.d=t[i+3],this.tx=t[i+4],this.ty=t[i+5],this},t.prototype.identity=function(){return this.a=this.d=1,this.b=this.c=0,this.tx=this.ty=0,this},t.prototype.concat=function(t){var i=this.a*t.a,h=0,s=0,o=this.d*t.d,r=this.tx*t.a+t.tx,a=this.ty*t.d+t.ty;return 0===this.b&&0===this.c||(i+=this.b*t.c,h+=this.b*t.d,s+=this.c*t.a,o+=this.c*t.b),0===t.b&&0===t.c||(h+=this.a*t.b,s+=this.d*t.c,r+=this.ty*t.c,a+=this.tx*t.b),this.a=i,this.b=h,this.c=s,this.d=o,this.tx=r,this.ty=a,this},t.prototype.invert=function(){var t=this.a,i=this.b,h=this.c,s=this.d,o=this.tx,r=this.ty;if(0===i&&0===h)return this.b=this.c=0,0===t||0===s?this.a=this.b=this.tx=this.ty=0:(t=this.a=1/t,s=this.d=1/s,this.tx=-t*o,this.ty=-s*r),this;var a=t*s-i*h;if(0===a)return this.a=this.d=1,this.b=this.c=0,this.tx=this.ty=0,this;a=1/a;var c=this.a=s*a;return i=this.b=-i*a,h=this.c=-h*a,s=this.d=t*a,this.tx=-(c*o+h*r),this.ty=-(i*o+s*r),this},t.prototype.transformPoint=function(t,i,h,s){void 0===s&&(s=!1),h.x=this.a*t+this.c*i,h.y=this.b*t+this.d*i,s||(h.x+=this.tx,h.y+=this.ty)},t.prototype.transformRectangle=function(t,i){void 0===i&&(i=!1);var h=this.a,s=this.b,o=this.c,r=this.d,a=i?0:this.tx,c=i?0:this.ty,n=t.x,e=t.y,y=n+t.width,d=e+t.height,x=h*n+o*e+a,b=s*n+r*e+c,u=h*y+o*e+a,p=s*y+r*e+c,f=h*y+o*d+a,v=s*y+r*d+c,M=h*n+o*d+a,l=s*n+r*d+c,g=0;u<x&&(g=x,x=u,u=g),M<f&&(g=f,f=M,M=g),t.x=Math.floor(x<f?x:f),t.width=Math.ceil((M<u?u:M)-t.x),p<b&&(g=b,b=p,p=g),l<v&&(g=v,v=l,l=g),t.y=Math.floor(b<v?b:v),t.height=Math.ceil((l<p?p:l)-t.y)},t}();exports.Matrix=Matrix;