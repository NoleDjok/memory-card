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
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
function game() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = yield getConfig();
        write(config);
        if (process.env.JEST_WORKER_ID === undefined) {
        }
        console.log();
        console.log('game project created');
        console.log();
    });
}
exports.default = game;
function getConfig() {
    console.log();
    console.log('enter game project configuration:');
    console.log();
    const questions = [
        {
            type: 'input',
            name: 'gameId',
            message: 'gameId, arena5 slug (example: test-game):'
        },
        {
            type: 'input',
            name: 'sdkName',
            message: 'arena5 sdkName (example: TestGame):'
        },
        {
            type: 'list',
            name: 'template',
            message: 'select game template:',
            default: 'template0',
            choices: [
                {
                    name: '0. Empty',
                    value: 'empty'
                },
                {
                    name: '1. Dragon Bones and Adobe Animate',
                    value: 'template0'
                },
                {
                    name: '2. Adobe Animate only',
                    value: 'template1'
                }
            ]
        },
    ];
    return inquirer_1.prompt(questions);
}
function write(config) {
    let destinationPath = process.cwd();
    let toolsPath = path.resolve(__dirname, './../../../templates/', 'tools');
    let commonPath = path.resolve(__dirname, './../../../templates/', 'games');
    let templatePath = path.resolve(__dirname, './../../../templates/games/', config.template);
    console.log('templatePath', templatePath);
    console.log('copy template files');
    console.log();
    try {
        // copy common files
        fs.copyFileSync(path.resolve(commonPath, 'package.json'), path.resolve(destinationPath, 'package.json'));
        fs.copyFileSync(path.resolve(commonPath, '_gitignore'), path.resolve(destinationPath, '.gitignore'));
        fs.copyFileSync(path.resolve(commonPath, '_npmrc'), path.resolve(destinationPath, '.npmrc'));
        fs.copyFileSync(path.resolve(commonPath, 'tsconfig.json'), path.resolve(destinationPath, 'tsconfig.json'));
        fs.copyFileSync(path.resolve(commonPath, 'README.md'), path.resolve(destinationPath, 'README.md'));
        fse.copySync(path.resolve(commonPath, 'resources'), path.resolve(destinationPath, 'resources'));
        fse.copySync(path.resolve(commonPath, 'src'), path.resolve(destinationPath, 'src'));
        fse.copySync(toolsPath, path.resolve(destinationPath, 'tools'));
        let gameCfgJson = fs.readFileSync(path.resolve(templatePath, 'gamecfg.json'), 'utf8');
        const gameCfg = JSON.parse(gameCfgJson);
        gameCfg.gameId = config.gameId;
        gameCfg.arena5.phenixCfg.slug = config.gameId;
        gameCfg.arena5.phenixCfg.sdkName = config.sdkName;
        fs.writeFileSync(path.resolve(destinationPath, 'gamecfg.json'), JSON.stringify(gameCfg, null, 1));
        //fs.copyFileSync(path.resolve(commonPath, 'game-core.cfg.json'), path.resolve(destinationPath, 'game-core.cfg.json'));
        fs.copyFileSync(path.resolve(commonPath, 'gameversion.json'), path.resolve(destinationPath, 'gameversion.json'));
        // copy template files
        fse.copySync(path.resolve(templatePath, 'src'), path.resolve(destinationPath, 'src'));
        fse.copySync(path.resolve(templatePath, 'resources'), path.resolve(destinationPath, 'resources'));
        fse.copySync(path.resolve(templatePath, 'animate'), path.resolve(destinationPath, 'animate'));
        //fs.copyFileSync(path.resolve(templatePath, 'index.ts'), path.resolve(destinationPath, 'src', 'index.ts'));
        //fse.copySync(path.resolve(templatePath, 'art-sources'), path.resolve(destinationPath, 'art-sources'));
    }
    catch (err) {
        console.error(err);
    }
    console.log();
    console.log('copy template files - done');
    console.log();
}
