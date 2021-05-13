"use strict";
/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./create/game");
const factive_1 = require("./create/factive");
const inquirer_1 = require("inquirer");
function create(type) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            type: "game"
        };
        if (type) {
            config.type = type;
        }
        else {
            config = yield getProject();
        }
        switch (config.type) {
            case "game":
                game_1.default();
                break;
            case "factive":
                factive_1.default();
                break;
            default:
                console.log('Unknown project type. Enter webresource, plugin, workflow or console');
                break;
        }
    });
}
exports.default = create;
function getProject() {
    const questions = [
        {
            type: 'list',
            name: 'type',
            message: 'select project type:',
            default: 'game',
            choices: [
                {
                    name: 'game',
                    value: 'game'
                }
            ]
        }
    ];
    return inquirer_1.prompt(questions);
}
