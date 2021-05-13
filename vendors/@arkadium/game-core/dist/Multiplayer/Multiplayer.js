"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */Object.defineProperty(exports,"__esModule",{value:!0});var typescript_ioc_1=require("../IoC/typescript-ioc"),LobbyManagerBase_1=require("./LobbyManagerBase"),LobbyPlayerIOManager_1=require("./LobbyPlayerIOManager"),MultiplayerClientBase_1=require("./MultiplayerClientBase"),MultiplayerPlayerIOClient_1=require("./MultiplayerPlayerIOClient"),Multiplayer=function(){function e(){}return e.initPlayerIO=function(e){void 0===e&&(e=!0),typescript_ioc_1.Container.bind(LobbyManagerBase_1.LobbyManager).to(LobbyPlayerIOManager_1.LobbyPlayerIOManager).scope(typescript_ioc_1.Scope.Singleton),typescript_ioc_1.Container.bind(MultiplayerClientBase_1.MultiplayerClient).to(MultiplayerPlayerIOClient_1.MultiplayerPlayerIOClient).scope(typescript_ioc_1.Scope.Singleton),typescript_ioc_1.Container.get(MultiplayerClientBase_1.MultiplayerClient).__isCompressingTraffic=e},e}();exports.Multiplayer=Multiplayer;