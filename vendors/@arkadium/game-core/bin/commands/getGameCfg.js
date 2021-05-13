"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function getGameCfg(fileName) {
    let gameCfgFilePath = path.resolve(process.cwd() + '/' + fileName);
    console.log("get configuration from " + gameCfgFilePath);
    console.log(gameCfgFilePath);
    let gameCfgJson = "";
    let gameCfg;
    try {
        gameCfgJson = fs.readFileSync(gameCfgFilePath, 'utf8');
        gameCfg = JSON.parse(gameCfgJson);
    }
    catch (e) {
        console.log(e);
        return null;
    }
    return gameCfg;
}
exports.default = getGameCfg;
