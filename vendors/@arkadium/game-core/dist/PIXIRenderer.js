"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */var __decorate=this&&this.__decorate||function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;0<=a;a--)(i=e[a])&&(o=(s<3?i(o):3<s?i(t,r,o):i(t,r))||o);return 3<s&&o&&Object.defineProperty(t,r,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var typescript_ioc_1=require("./IoC/typescript-ioc"),RootHtml_1=require("./RootHtml"),GStats_1=require("./Stats/GStats"),PixiAnimateInit_1=require("./Animate/pixi/PixiAnimateInit"),Environment_1=require("./Environment"),MobileDetect=require("mobile-detect"),PIXIRenderer=function(){function e(){this.renderer3d=null,this.fps=30}return Object.defineProperty(e.prototype,"stage",{get:function(){return this._stage},enumerable:!0,configurable:!0}),e.prototype.initialize=function(e){var t=this._htmlElement.htmlDivElement;PixiAnimateInit_1.PixiAnimateInit.setup(),e.fps&&(this.fps=e.fps),t.style.display="none",t.style.display="none";var r={backgroundColor:e.backgroundColor||0,clearBeforeRender:e.clearBeforeRender||!0,transparent:e.transparent||!1};r.antialias=e.antialias||!1,r.roundPixels=e.roundPixels||!1;var n=new MobileDetect(window.navigator.userAgent);if(n.tablet())Environment_1.Environment.type=Environment_1.EnvironmentTypeEnum.tablet;else if(n.phone()){if(Environment_1.Environment.type=Environment_1.EnvironmentTypeEnum.phone,"AndroidOS"==n.os()){var i=n.version("Android");i&&Math.floor(i)<=4&&(r.preserveDrawingBuffer=!0)}}else Environment_1.Environment.type=Environment_1.EnvironmentTypeEnum.pc;this.isCanvasRenderer=!1,this.renderer=PIXI.autoDetectRenderer(t.clientWidth,t.clientHeight,r,e.noWebGL);var s=this.renderer.view.getContext("webgl")||this.renderer.view.getContext("experimental-webgl");if(s&&s instanceof WebGLRenderingContext?this.isCanvasRenderer=!1:this.isCanvasRenderer=!0,e.disableContextMenu&&this.renderer.view.addEventListener("contextmenu",function(e){e.preventDefault()}),t.appendChild(this.renderer.view),e.showStats){var o=new GStats_1.Stats,a=new GStats_1.PIXIHooks(this.renderer);this.statsAdapter=new GStats_1.StatsJSAdapter(a,o),t.appendChild(this.statsAdapter.stats.dom||this.statsAdapter.stats.domElement)}this.renderer.view.style["-webkit-user-select"]="none",this.renderer.view.style["-khtml-user-select"]="none",this.renderer.view.style["-moz-user-select"]="none",this.renderer.view.style["-ms-user-select"]="none",this.renderer.view.style["user-select"]="none",this.renderer.view.style.outline="none",this.renderer.view.style["-webkit-tap-highlight-color"]="rgba(255, 255, 255, 0)",this.renderer.view.id="gameCanvas",t.style.display="block",this.webGlError=!1,!!window.THREE&&(this.webGlError=this.isCanvasRenderer,this.webGlError||(this.renderer3d=new THREE.WebGLRenderer({canvas:this.renderer.view,context:this.renderer.gl,antialias:!0}),this.renderer3d.autoClear=!1)),this._stage=new PIXI.Container},e.prototype.destroy=function(){this._stage.destroy(!0),this._stage=null,this.renderer.destroy(!0),this.renderer3d&&this.renderer3d.dispose()},e.prototype.render=function(){this.renderer3d&&(this.renderer.gl.disable(this.renderer.gl.DEPTH_TEST),this.renderer.gl.disable(this.renderer.gl.CULL_FACE),this.renderer.gl.enable(this.renderer.gl.BLEND),this.renderer.gl.blendFunc(this.renderer.gl.ONE,this.renderer.gl.ONE_MINUS_SRC_ALPHA)),this._stage&&this.renderer.render(this._stage),this.statsAdapter&&this.statsAdapter.update()},__decorate([typescript_ioc_1.Inject,__metadata("design:type",RootHtml_1.RootHtml)],e.prototype,"_htmlElement",void 0),e=__decorate([typescript_ioc_1.Singleton,__metadata("design:paramtypes",[])],e)}();exports.PIXIRenderer=PIXIRenderer;