"use strict";var __extends=this&&this.__extends||function(){var i=function(t,r){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};return function(t,r){function e(){this.constructor=t}i(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Bone_1=require("./Bone"),Surface=function(h){function D(){var t=null!==h&&h.apply(this,arguments)||this;return t._vertices=[],t._deformVertices=[],t._hullCache=[],t._matrixCahce=[],t}return __extends(D,h),D.toString=function(){return"[class dragonBones.Surface]"},D.prototype._onClear=function(){h.prototype._onClear.call(this),this._dX=0,this._dY=0,this._k=0,this._kX=0,this._kY=0,this._vertices.length=0,this._deformVertices.length=0,this._matrixCahce.length=0,this._hullCache.length=0,this._bone=null},D.prototype._getAffineTransform=function(t,r,e,i,a,s,h,n,o,_,l,c,f){var m=h-a,u=n-s,d=o-a,p=_-s;l.rotation=Math.atan2(u,m),l.skew=Math.atan2(p,d)-.5*Math.PI-l.rotation,f&&(l.rotation+=Math.PI),l.scaleX=Math.sqrt(m*m+u*u)/e,l.scaleY=Math.sqrt(d*d+p*p)/i,l.toMatrix(c),l.x=c.tx=a-(c.a*t+c.c*r),l.y=c.ty=s-(c.b*t+c.d*r)},D.prototype._updateVertices=function(){var t=this._armature.armatureData.parent,r=this._boneData.geometry,e=t.intArray,i=t.floatArray,a=e[r.offset+0],s=e[r.offset+2],h=this._vertices,n=this._deformVertices;if(null!==this._parent)if(1===this._parent._boneData.type)for(var o=0,_=a;o<_;++o){var l=i[s+(u=2*o)]+n[u],c=i[s+u+1]+n[u+1],f=this._parent._getGlobalTransformMatrix(l,c);h[u]=f.a*l+f.c*c+f.tx,h[u+1]=f.b*l+f.d*c+f.ty}else{var m=this._parent.globalTransformMatrix;for(o=0,_=a;o<_;++o){l=i[s+(u=2*o)]+n[u],c=i[s+u+1]+n[u+1];h[u]=m.a*l+m.c*c+m.tx,h[u+1]=m.b*l+m.d*c+m.ty}}else for(o=0,_=a;o<_;++o){var u;h[u=2*o]=i[s+u]+n[u],h[u+1]=i[s+u+1]+n[u+1]}},D.prototype._updateGlobalTransformMatrix=function(t){var r=2*this._boneData.segmentX,e=this._vertices.length-2,i=this._vertices[0],a=this._vertices[1],s=this._vertices[r],h=this._vertices[r+1],n=this._vertices[e],o=this._vertices[e+1],_=this._vertices[e-r],l=this._vertices[e-r+1],c=i+.5*(n-i),f=a+.5*(o-a),m=c+.5*(s+.5*(_-s)-c),u=f+.5*(h+.5*(l-h)-f),d=s+.5*(n-s),p=h+.5*(o-h),y=_+.5*(n-_),g=l+.5*(o-l);this._getAffineTransform(0,0,200,200,m,u,d,p,y,g,this.global,this.globalTransformMatrix,!1),this._globalDirty=!1},D.prototype._getGlobalTransformMatrix=function(t,r){var e=200,i=1e3;if(t<-i||i<t||r<-i||i<r)return this.globalTransformMatrix;var a=!1,s=this._boneData,h=s.segmentX,n=s.segmentY,o=2*s.segmentX,_=this._dX,l=this._dY,c=Math.floor((t+e)/_),f=Math.floor((r+e)/l),m=0,u=c*_-e,d=f*l-e,p=this._matrixCahce,y=D._helpMatrix;if(t<-e){if(r<-e||e<=r)return this.globalTransformMatrix;if(0<p[m=7*(2*(h*n+h+n+n+f)+((a=r>this._kX*(t+e)+d)?1:0))])y.copyFromArray(p,m+1);else{var g=f*(o+2),x=this._hullCache[4],b=this._hullCache[5],T=this._hullCache[2]-(n-f)*x,v=this._hullCache[3]-(n-f)*b,C=this._vertices;a?this._getAffineTransform(-e,d+l,800,l,C[g+o+2],C[g+o+3],T+x,v+b,C[g],C[g+1],D._helpTransform,y,!0):this._getAffineTransform(-i,d,800,l,T,v,C[g],C[g+1],T+x,v+b,D._helpTransform,y,!1),p[m]=1,p[m+1]=y.a,p[m+2]=y.b,p[m+3]=y.c,p[m+4]=y.d,p[m+5]=y.tx,p[m+6]=y.ty}}else if(e<=t){if(r<-e||e<=r)return this.globalTransformMatrix;if(0<p[m=7*(2*(h*n+h+f)+((a=r>this._kX*(t-i)+d)?1:0))])y.copyFromArray(p,m+1);else{g=(f+1)*(o+2)-2,x=this._hullCache[4],b=this._hullCache[5],T=this._hullCache[0]+f*x,v=this._hullCache[1]+f*b,C=this._vertices;a?this._getAffineTransform(i,d+l,800,l,T+x,v+b,C[g+o+2],C[g+o+3],T,v,D._helpTransform,y,!0):this._getAffineTransform(e,d,800,l,C[g],C[g+1],T,v,C[g+o+2],C[g+o+3],D._helpTransform,y,!1),p[m]=1,p[m+1]=y.a,p[m+2]=y.b,p[m+3]=y.c,p[m+4]=y.d,p[m+5]=y.tx,p[m+6]=y.ty}}else if(r<-e){if(t<-e||e<=t)return this.globalTransformMatrix;if(0<p[m=7*(2*(h*n+c)+((a=r>this._kY*(t-u-_)-i)?1:0))])y.copyFromArray(p,m+1);else{g=2*c,x=this._hullCache[10],b=this._hullCache[11],T=this._hullCache[8]+c*x,v=this._hullCache[9]+c*b,C=this._vertices;a?this._getAffineTransform(u+_,-e,_,800,C[g+2],C[g+3],C[g],C[g+1],T+x,v+b,D._helpTransform,y,!0):this._getAffineTransform(u,-i,_,800,T,v,T+x,v+b,C[g],C[g+1],D._helpTransform,y,!1),p[m]=1,p[m+1]=y.a,p[m+2]=y.b,p[m+3]=y.c,p[m+4]=y.d,p[m+5]=y.tx,p[m+6]=y.ty}}else if(e<=r){if(t<-e||e<=t)return this.globalTransformMatrix;if(0<p[m=7*(2*(h*n+h+n+c)+((a=r>this._kY*(t-u-_)+e)?1:0))])y.copyFromArray(p,m+1);else{g=n*(o+2)+2*c,x=this._hullCache[10],b=this._hullCache[11],T=this._hullCache[6]-(h-c)*x,v=this._hullCache[7]-(h-c)*b,C=this._vertices;a?this._getAffineTransform(u+_,i,_,800,T+x,v+b,T,v,C[g+2],C[g+3],D._helpTransform,y,!0):this._getAffineTransform(u,e,_,800,C[g],C[g+1],C[g+2],C[g+3],T,v,D._helpTransform,y,!1),p[m]=1,p[m+1]=y.a,p[m+2]=y.b,p[m+3]=y.c,p[m+4]=y.d,p[m+5]=y.tx,p[m+6]=y.ty}}else if(0<p[m=7*(2*(h*f+c)+((a=r>this._k*(t-u-_)+d)?1:0))])y.copyFromArray(p,m+1);else{g=2*c+f*(o+2),C=this._vertices;a?this._getAffineTransform(u+_,d+l,_,l,C[g+o+4],C[g+o+5],C[g+o+2],C[g+o+3],C[g+2],C[g+3],D._helpTransform,y,!0):this._getAffineTransform(u,d,_,l,C[g],C[g+1],C[g+2],C[g+3],C[g+o+2],C[g+o+3],D._helpTransform,y,!1),p[m]=1,p[m+1]=y.a,p[m+2]=y.b,p[m+3]=y.c,p[m+4]=y.d,p[m+5]=y.tx,p[m+6]=y.ty}return y},D.prototype.init=function(t,r){if(null===this._boneData){h.prototype.init.call(this,t,r);var e=t.segmentX,i=t.segmentY,a=this._armature.armatureData.parent.intArray[t.geometry.offset+0];this._dX=400/e,this._dY=400/i,this._k=-this._dY/this._dX,this._kX=-this._dY/800,this._kY=-800/this._dX,this._vertices.length=2*a,this._deformVertices.length=2*a,this._matrixCahce.length=2*(e*i+2*e+2*i)*7,this._hullCache.length=10;for(var s=0;s<2*a;++s)this._deformVertices[s]=0;null!==this._parent&&(0===this._parent.boneData.type?this._bone=this._parent:this._bone=this._parent._bone)}},D.prototype.update=function(t){if(0<=t&&null!==this._cachedFrameIndices){var r=this._cachedFrameIndices[t];if(0<=r&&this._cachedFrameIndex===r)this._transformDirty=!1;else if(0<=r)this._transformDirty=!0,this._cachedFrameIndex=r;else{if(this._hasConstraint)for(var e=0,i=this._armature._constraints;e<i.length;e++){(h=i[e])._root===this&&h.update()}this._transformDirty||null!==this._parent&&this._parent._childrenTransformDirty?(this._transformDirty=!0,this._cachedFrameIndex=-1):0<=this._cachedFrameIndex?(this._transformDirty=!1,this._cachedFrameIndices[t]=this._cachedFrameIndex):(this._transformDirty=!0,this._cachedFrameIndex=-1)}}else{if(this._hasConstraint)for(var a=0,s=this._armature._constraints;a<s.length;a++){var h;(h=s[a])._root===this&&h.update()}(this._transformDirty||null!==this._parent&&this._parent._childrenTransformDirty)&&(t=-1,this._transformDirty=!0,this._cachedFrameIndex=-1)}if(this._transformDirty){this._transformDirty=!1,this._childrenTransformDirty=!0;for(var n=0,o=this._matrixCahce.length;n<o;n+=7)this._matrixCahce[n]=-1;if(this._updateVertices(),this._cachedFrameIndex<0){var _=0<=t;this._localDirty&&this._updateGlobalTransformMatrix(_),_&&null!==this._cachedFrameIndices&&(this._cachedFrameIndex=this._cachedFrameIndices[t]=this._armature._armatureData.setCacheFrame(this.globalTransformMatrix,this.global))}else this._armature._armatureData.getCacheFrame(this.globalTransformMatrix,this.global,this._cachedFrameIndex);var l=2*this.global.x,c=2*this.global.y,f=D._helpPoint;this.globalTransformMatrix.transformPoint(1e3,-200,f),this._hullCache[0]=f.x,this._hullCache[1]=f.y,this._hullCache[2]=l-f.x,this._hullCache[3]=c-f.y,this.globalTransformMatrix.transformPoint(0,this._dY,f,!0),this._hullCache[4]=f.x,this._hullCache[5]=f.y,this.globalTransformMatrix.transformPoint(200,1e3,f),this._hullCache[6]=f.x,this._hullCache[7]=f.y,this._hullCache[8]=l-f.x,this._hullCache[9]=c-f.y,this.globalTransformMatrix.transformPoint(this._dX,0,f,!0),this._hullCache[10]=f.x,this._hullCache[11]=f.y}else this._childrenTransformDirty&&(this._childrenTransformDirty=!1);this._localDirty=!0},D}(Bone_1.Bone);exports.Surface=Surface;