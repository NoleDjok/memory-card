"use strict";
/*!
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Validator = require('jsonschema').Validator;
const chalk = require("chalk");
const arena4Schema = {
    "id": "/Arena4Schema",
    "type": "object",
    "properties": {
        "entry": { "type": "string", "required": true },
        "html": {
            "type": "object",
            "required": true,
            "properties": {
                "title": { "type": "string", "required": true },
                "backgroundColor": { "type": "string", "required": true, "format": "color" }
            }
        }
    }
};
const arena5Schema = {
    "id": "/Arena5Schema",
    "type": "object",
    "properties": {
        "entry": { "type": "string", "required": true },
        "phenixCfg": {
            "type": "object",
            "required": true,
            "properties": {
                "slug": { "type": "string", "required": true },
                "sdkName": { "type": "string", "required": true },
                "settings": {
                    "type": "object",
                    "required": true,
                    "properties": {
                        "thumbPath": { "type": "string", "required": true },
                        "secondaryThumbPath": { "type": "string", "required": true },
                        "screenshotPath": { "type": "string", "required": true },
                        "promoThumbPath": { "type": "string", "required": true },
                    }
                },
                "locales": {
                    "type": "array",
                    "required": true,
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": { "type": "string", "required": true },
                            "settings": {
                                "type": "object",
                                "required": true,
                                "properties": {
                                    "name": { "type": "string", "required": true },
                                    "description": { "type": "string", "required": true },
                                    "tags": {
                                        "type": "array",
                                        "required": true,
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
const adobeAnimateSchema = {
    "id": "/AdobeAnimateSchema",
    "type": "object",
    "properties": {
        "spritesheetBuilderPluginConfig": {
            "type": "object",
            "required": false,
            "properties": {
                "enable": { "type": "boolean", "required": true },
                "inputJsons": {
                    "type": "array",
                    "required": false,
                    "items": {
                        "type": "object",
                        "properties": {
                            "path": { "type": "string", "required": true },
                            "atlasSize": { "type": "number", "required": true },
                            "scaleBitmap": { "type": "number", "required": false },
                            "scaleShape": { "type": "number", "required": false },
                            "emitShapeAtlas": { "type": "boolean", "required": true },
                            "emitBitmapAtlas": { "type": "boolean", "required": true },
                            "excludeBitmaps": { "type": "array", "required": false, "items": { "type": "string" } }
                        }
                    }
                },
                "outputDir": { "type": "string", "required": true },
            }
        }
    }
};
const gameCfgSchema = {
    "id": "/GameCfg",
    "type": "object",
    "properties": {
        "gameId": { "type": "string", "required": true },
        "resourcesRoot": { "type": "string", "required": true },
        "resources": {
            "type": "array",
            "required": true,
            "items": {
                "type": "object",
                "properties": {
                    "from": { "type": "string", "required": true },
                    "to": { "type": "string", "required": true }
                }
            }
        },
        "arena4": { "$ref": "/Arena4Schema", "required": true },
        "arena5": { "$ref": "/Arena5Schema", "required": true },
        "adobeAnimate": { "$ref": "/AdobeAnimateSchema", "required": false }
    }
};
function gameCfgCheck(gameCfg) {
    const v = new Validator();
    v.addSchema(arena4Schema, '/Arena4Schema');
    v.addSchema(arena5Schema, '/Arena5Schema');
    v.addSchema(adobeAnimateSchema, '/AdobeAnimateSchema');
    const validateResult = v.validate(gameCfg, gameCfgSchema);
    console.log(chalk.green('checking gamecfg.json...'));
    if (validateResult.errors.length > 0) {
        console.error("\x1b[31m");
        console.error("gamecfg.json schema errors:");
        for (let i = 0; i < validateResult.errors.length; i++) {
            let error = validateResult.errors[i];
            console.error(`- ${error.stack.replace(/^(instance\.)/, "")}`);
        }
        console.error("\x1b[0m");
        return false;
    }
    console.log('gamecfg.json - ok');
    return true;
}
exports.default = gameCfgCheck;
