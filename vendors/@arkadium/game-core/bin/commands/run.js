"use strict";
/*!
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
const inquirer_1 = require("inquirer");
const path = require("path");
const spawn = require("cross-spawn");
const gameCfgCheck_1 = require("./gameCfgCheck");
const getGameCfg_1 = require("./getGameCfg");
function run(name, cmdObj) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = yield getDebugConfig(name, cmdObj["host"], cmdObj["port"]);
        config.environment = name || config.environment;
        config.host = cmdObj["host"] || config.host;
        config.port = cmdObj["port"] || config.port;
        const chdir = cmdObj["chdir"] || null;
        if (chdir) {
            console.log('Starting directory: ' + process.cwd());
            try {
                process.chdir(chdir);
                console.log('New directory: ' + process.cwd());
            }
            catch (err) {
                console.log('chdir: ' + err);
            }
        }
        process.env.GAME_CFG_FILE_NAME = cmdObj["cfg"];
        const gameCfg = getGameCfg_1.default(cmdObj["cfg"]);
        if (!gameCfg) {
            return;
        }
        if (!gameCfgCheck_1.default(gameCfg)) {
            return;
        }
        let webpackCfg = ["--inline", "--content-base", "public", "--colors", "--progress"];
        switch (config.environment) {
            case "arena4":
            case "standalone":
                webpackCfg.push("--open");
                webpackCfg.push("--config");
                webpackCfg.push(path.resolve(__dirname, './../../templates/games/buildCfg/arena4/', 'webpack.config.js'));
                console.log();
                console.log('starting arena4...');
                break;
            case "mp":
                webpackCfg.push("--open");
                webpackCfg.push("--config");
                webpackCfg.push(path.resolve(__dirname, './../../templates/games/buildCfg/mp/', 'webpack.config.js'));
                console.log();
                console.log('starting multiplayer...');
                break;
            case "arena5":
                webpackCfg.push("--open");
                webpackCfg.push("--open-page");
                webpackCfg.push("games/" + gameCfg.arena5.phenixCfg.slug);
                webpackCfg.push("--history-api-fallback");
                webpackCfg.push("--config");
                webpackCfg.push(path.resolve(__dirname, './../../templates/games/buildCfg/arena5/', 'webpack.config.js'));
                console.log();
                console.log('starting arena5...');
                break;
            case "msn":
                webpackCfg.push("--open");
                webpackCfg.push("--config");
                webpackCfg.push(path.resolve(__dirname, './../../templates/games/buildCfg/msn/', 'webpack.config.js'));
                console.log();
                console.log('starting msn...');
                break;
            case "factive":
                webpackCfg.push("--config");
                webpackCfg.push("--open");
                webpackCfg.push(path.resolve(__dirname, './../../templates/factives/buildCfg/', 'webpack.dev.config.js'));
                console.log();
                console.log('starting factive...');
                break;
            default:
                return;
        }
        if (config.host) {
            webpackCfg.push("--host");
            webpackCfg.push(config.host);
        }
        if (config.port) {
            webpackCfg.push("--port");
            webpackCfg.push(config.port);
        }
        console.log('config:', webpackCfg.join(' '));
        console.log();
        spawn.sync("webpack-dev-server", webpackCfg, {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
    });
}
exports.default = run;
function getDebugConfig(name, host, port) {
    const questions = [
        {
            type: 'list',
            name: 'environment',
            message: 'environment:',
            default: 'arena4',
            when: (config) => {
                return !name;
            },
            choices: [
                {
                    name: 'arena4',
                    value: 'arena4'
                },
                {
                    name: 'mp',
                    value: 'mp'
                },
                {
                    name: 'arena5',
                    value: 'arena5'
                },
                {
                    name: 'factive',
                    value: 'factive'
                }
            ]
        },
        {
            type: 'input',
            name: 'host',
            message: 'host(localhost):',
            when: (config) => {
                return !host;
            },
        },
        {
            type: 'input',
            name: 'port',
            message: 'port(8080):',
            when: (config) => {
                return !port;
            },
        },
    ];
    return inquirer_1.prompt(questions);
}
