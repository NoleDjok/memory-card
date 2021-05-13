"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ScreenOrientationEnum_1=require("./ScreenOrientationEnum"),Portrait_1=require("./Portrait"),Landscape_1=require("./Landscape"),PortraitAndLandscape_1=require("./PortraitAndLandscape"),OrientationFactory=function(){function n(){}return n.getOrientation=function(n){switch(n){case ScreenOrientationEnum_1.ScreenOrientationEnum.Portrait:return new Portrait_1.Portrait;case ScreenOrientationEnum_1.ScreenOrientationEnum.Landscape:return new Landscape_1.Landscape;case ScreenOrientationEnum_1.ScreenOrientationEnum.PortraitAndLandscape:default:return new PortraitAndLandscape_1.PortraitAndLandscape}},n}();exports.OrientationFactory=OrientationFactory;