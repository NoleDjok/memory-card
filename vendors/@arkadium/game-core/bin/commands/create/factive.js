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
function factive() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = yield getConfig();
        write(config);
        if (process.env.JEST_WORKER_ID === undefined) {
            console.log('install base packages');
            console.log();
            // spawn.sync("npm", ["install"], {
            //     cwd: process.cwd(),
            //     stdio: 'inherit'
            // });
        }
        console.log();
        console.log('factive project created');
        console.log();
    });
}
exports.default = factive;
function getConfig() {
    console.log();
    console.log('enter factive project configuration:');
    console.log();
    const questions = [
        {
            type: 'input',
            name: 'moduleId',
            message: 'moduleId:'
        },
        {
            type: 'list',
            name: 'template',
            message: 'select factive template:',
            default: 'template1',
            choices: [
                {
                    name: 'template 1',
                    value: 'template1'
                },
                {
                    name: 'template 1',
                    value: 'template1'
                }
            ]
        }
    ];
    return inquirer_1.prompt(questions);
}
function write(config) {
    let destinationPath = process.cwd();
    let toolsPath = path.resolve(__dirname, '../../../node_modules/@arkadium/game-core/templates/', 'tools');
    let commonPath = path.resolve(__dirname, '../../../node_modules/@arkadium/game-core/templates/', 'factives');
    let templatePath = path.resolve(__dirname, '../../../node_modules/@arkadium/game-core/templates/factives/', 'template0');
    console.log('templatePath', templatePath);
    console.log('copy template files');
    console.log();
    try {
        // copy common files
        fs.copyFileSync(path.resolve(commonPath, 'package.json'), path.resolve(destinationPath, 'package.json'));
        fs.copyFileSync(path.resolve(commonPath, '_gitignore'), path.resolve(destinationPath, '.gitignore'));
        fs.copyFileSync(path.resolve(commonPath, '_npmrc'), path.resolve(destinationPath, '.npmrc'));
        fs.copyFileSync(path.resolve(commonPath, 'tsconfig.json'), path.resolve(destinationPath, 'tsconfig.json'));
        fs.copyFileSync(path.resolve(commonPath, 'preview.png'), path.resolve(destinationPath, 'preview.png'));
        fs.copyFileSync(path.resolve(commonPath, 'README.md'), path.resolve(destinationPath, 'README.md'));
        //fs.copyFileSync(path.resolve(commonPath, 'webpack.dev.config.js'), path.resolve(destinationPath, 'webpack.dev.config.js'));
        //fs.copyFileSync(path.resolve(commonPath, 'webpack.prod.config.js'), path.resolve(destinationPath, 'webpack.prod.config.js'));
        fse.copySync(path.resolve(commonPath, 'public'), path.resolve(destinationPath, 'public'));
        fse.copySync(toolsPath, path.resolve(destinationPath, 'tools'));
        //TODO
        fs.copyFileSync(path.resolve(commonPath, 'inhabitcfg.json'), path.resolve(destinationPath, 'inhabitcfg.json'));
        // copy template files
        fse.copySync(path.resolve(templatePath, 'src'), path.resolve(destinationPath, 'src'));
        fse.copySync(path.resolve(templatePath, 'resources'), path.resolve(destinationPath, 'resources'));
        fse.copySync(path.resolve(templatePath, 'art-sources'), path.resolve(destinationPath, 'art-sources'));
    }
    catch (err) {
        console.error(err);
    }
}
