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
const inquirer_1 = require("inquirer");
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const getGameCfg_1 = require("./getGameCfg");
const gameCfgCheck_1 = require("./gameCfgCheck");
const gulp = require('gulp');
const git = require('./../git/utilities/git');
const semverRegex = require("semver-regex");
const gitTags = require("./../git/git-tags");
const chalk = require("chalk");
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
function imagePngMinRes(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            gulp.src([`${path}/**/*.png`])
                .pipe(imagemin([imageminPngquant({ quality: [0.4, 0.8] })]))
                .on('error', reject)
                .pipe(gulp.dest(path))
                .on('error', reject)
                .on('end', resolve);
            console.log("Minify images:", `${path}\\**\\*.png`);
            //resolve();
        });
    });
}
function imageJpgMinRes(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            gulp.src([`${path}/**/*.jpg`])
                .pipe(imagemin([
                imagemin.jpegtran({ progressive: true })
            ]))
                .on('error', reject)
                .pipe(gulp.dest(path))
                .on('error', reject)
                .on('end', resolve);
            console.log("imageMinRes", `${path}\\**\\*.jpg`);
            //resolve();
        });
    });
}
function imageMin(gameCfg, distPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const resources = gameCfg.resources;
        let processed = [];
        for (let i = 0; i < resources.length; i++) {
            //let resource = resources[i].to;
            let resourcePath = path.resolve(distPath, resources[i].to);
            if (processed.indexOf(resourcePath) >= 0) {
                continue;
            }
            processed.push(resourcePath);
            yield imagePngMinRes(resourcePath);
            yield imageJpgMinRes(resourcePath);
        }
    });
}
///////////////////////////////
function cleanMsn() {
    return __awaiter(this, void 0, void 0, function* () {
        let arenaDist = path.resolve(process.cwd() + '/dist/msn/');
        if (fs.existsSync(arenaDist) && fs.lstatSync(arenaDist).isDirectory()) {
            return new Promise(function (resolve, reject) {
                fse.removeSync(arenaDist);
                resolve();
            });
        }
        return Promise.resolve();
    });
}
function webpackMsn() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/msn/', 'webpack.dist.config.js'));
            //const compiler = require('webpack');
            const webpackStream = require('webpack-stream');
            gulp.src('/src/index-arena-4.ts', { allowEmpty: true })
                .pipe(webpackStream(cfg))
                .on('error', reject)
                .pipe(gulp.dest("./dist/msn"))
                .on('error', reject)
                .on('end', resolve);
        });
    });
}
function buildMsn(gameCfg, version) {
    return __awaiter(this, void 0, void 0, function* () {
        let distPath = path.resolve(process.cwd() + '/dist/msn/');
        console.log();
        console.log('build MSN');
        console.log('clean folder ' + distPath);
        console.log();
        yield cleanMsn();
        console.log();
        console.log('build to ' + distPath);
        console.log();
        yield webpackMsn();
        try {
            yield imageMin(gameCfg, distPath);
        }
        catch (e) {
            console.error(e);
        }
    });
}
///////////////////////////////
function cleanArena4(outPath = null) {
    return __awaiter(this, void 0, void 0, function* () {
        let arenaDist = outPath || path.resolve(process.cwd() + '/dist/arena/');
        if (fs.existsSync(arenaDist) && fs.lstatSync(arenaDist).isDirectory()) {
            return new Promise(function (resolve, reject) {
                fse.removeSync(arenaDist);
                resolve();
            });
        }
        return Promise.resolve();
    });
}
function webpackArena4(outPath = null) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/arena4/', 'webpack.dist.config.js'));
            //const compiler = require('webpack');
            const webpackStream = require('webpack-stream');
            gulp.src('/src/index-arena-4.ts', { allowEmpty: true })
                .pipe(webpackStream(cfg))
                .on('error', reject)
                .pipe(gulp.dest(outPath || "./dist/arena"))
                .on('error', reject)
                .on('end', resolve);
        });
    });
}
// async function testRecArena4(version: string) {
//
//     return new Promise(function(resolve, reject) {
//         const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/arena4/', 'webpack.testrec.config.js'));
//         const compiler = require('webpack');
//         const webpackStream = require('webpack-stream');
//         gulp.src('/src/index-arena-4.ts', {allowEmpty: true})
//             .pipe(webpackStream({
//                 config : cfg
//             }, compiler))
//             .on('error', reject)
//             .pipe(gulp.dest(`./dist/arena/testrec/${version}`))
//             .on('error', reject)
//             .on('end', resolve);
//     });
// }
function buildArena4(gameCfg, releaseConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const outPath = path.resolve(process.cwd(), releaseConfig.outDir || 'dist/arena/');
        if (!releaseConfig.dontClean) {
            console.log();
            console.log('build arena4');
            console.log('clean folder ' + outPath);
            console.log();
            yield cleanArena4(outPath);
        }
        console.log();
        console.log('build to ' + outPath);
        console.log();
        yield webpackArena4(outPath);
        //console.log('build arena4 testRec');
        //console.log('build to ' + path.resolve(process.cwd(), `dist/arena/testrec/${version}/`));
        //await delay(5000);
        //let arenaDist = outPath;
        try {
            yield imageMin(gameCfg, outPath);
        }
        catch (e) {
            console.error(e);
        }
        //await testRecArena4(version);
    });
}
//Multiplayer
function cleanMultiplayer() {
    return __awaiter(this, void 0, void 0, function* () {
        let arenaDist = path.resolve(process.cwd() + '/dist/mp/');
        if (fs.existsSync(arenaDist) && fs.lstatSync(arenaDist).isDirectory()) {
            return new Promise(function (resolve, reject) {
                fse.removeSync(arenaDist);
                resolve();
            });
        }
        return Promise.resolve();
    });
}
function webpackMultiplayer() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/mp/', 'webpack.dist.config.js'));
            //const compiler = require('webpack');
            const webpackStream = require('webpack-stream');
            gulp.src('/src/index-arena-4.ts', { allowEmpty: true })
                .pipe(webpackStream(cfg))
                .on('error', reject)
                .pipe(gulp.dest("./dist/mp"))
                .on('error', reject)
                .on('end', resolve);
        });
    });
}
function buildMultiplayer(gameCfg, version) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log();
        console.log('build arena4');
        console.log('clean folder ' + path.resolve(process.cwd(), 'dist/mp/'));
        console.log();
        yield cleanMultiplayer();
        console.log();
        console.log('build to ' + path.resolve(process.cwd(), 'dist/mp/'));
        console.log();
        yield webpackMultiplayer();
        let arenaDist = path.resolve(process.cwd() + '/dist/mp/');
        try {
            yield imageMin(gameCfg, arenaDist);
        }
        catch (e) {
            console.error(e);
        }
    });
}
//
function delay(value) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, value);
        });
    });
}
function webpackArena5() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/arena5/', 'webpack.dist.config.js'));
            const compiler = require('webpack');
            const webpackStream = require('webpack-stream');
            gulp.src('/src/index-arena-5.ts', { allowEmpty: true })
                .pipe(webpackStream(cfg, compiler))
                .on('error', resolve)
                .pipe(gulp.dest("./dist/phoenix"))
                .on('end', resolve);
        });
    });
}
function webpackArena5Replace() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/arena5/', 'webpack.dist.config.js'));
            gulp.src(['./dist/phoenix/' + cfg.output.filename])
                .pipe(replace("PIXI", 'PIXI_GAME'))
                .pipe(gulp.dest('./dist/build/build'));
        });
    });
}
function cleanArena5() {
    return __awaiter(this, void 0, void 0, function* () {
        let arenaDist = path.resolve(process.cwd() + '/dist/phoenix/');
        if (fs.existsSync(arenaDist) && fs.lstatSync(arenaDist).isDirectory()) {
            return new Promise(function (resolve, reject) {
                fse.removeSync(arenaDist);
                resolve();
            });
        }
        return Promise.resolve();
    });
}
function buildArena5(gameCfg, version) {
    return __awaiter(this, void 0, void 0, function* () {
        let arenaDist = path.resolve(process.cwd() + '/dist/phoenix/');
        console.log();
        console.log('build arena5');
        console.log('build to ' + arenaDist);
        console.log();
        yield cleanArena5();
        yield webpackArena5();
        try {
            yield imageMin(gameCfg, arenaDist);
        }
        catch (e) {
            console.error(e);
        }
    });
}
// cordova
function cleanCordova() {
    return __awaiter(this, void 0, void 0, function* () {
        let arenaDist = path.resolve(process.cwd() + '/dist/cordova/');
        if (fs.existsSync(arenaDist) && fs.lstatSync(arenaDist).isDirectory()) {
            return new Promise(function (resolve, reject) {
                fse.removeSync(arenaDist);
                resolve();
            });
        }
        return Promise.resolve();
    });
}
function webpackCordova() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/cordova/', 'webpack.dist.config.js'));
            //const compiler = require('webpack');
            const webpackStream = require('webpack-stream');
            gulp.src('/src/index-cordova.ts', { allowEmpty: true })
                .pipe(webpackStream(cfg))
                .on('error', reject)
                .pipe(gulp.dest("./dist/cordova"))
                .on('error', reject)
                .on('end', resolve);
        });
    });
}
function testRecCordova(version) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const cfg = require(path.resolve(__dirname, './../../templates/games/buildCfg/cordova/', 'webpack.testrec.config.js'));
            const compiler = require('webpack');
            const webpackStream = require('webpack-stream');
            gulp.src('/src/index-cordova.ts', { allowEmpty: true })
                .pipe(webpackStream({
                config: cfg
            }, compiler))
                .on('error', reject)
                .pipe(gulp.dest(`./dist/cordova/testrec/${version}`))
                .on('error', reject)
                .on('end', resolve);
        });
    });
}
function buildCordova(gameCfg, version) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log();
        console.log('build cordova');
        console.log('clean folder ' + path.resolve(process.cwd(), 'dist/cordova/'));
        console.log();
        yield cleanCordova();
        console.log();
        console.log('build to ' + path.resolve(process.cwd(), 'dist/cordova/'));
        console.log();
        yield webpackCordova();
        // console.log('build cordova testRec');
        // console.log('build to ' + path.resolve(process.cwd(), `dist/cordova/testrec/${version}/`));
        //
        // //await delay(5000);
        //
        // let arenaDist = path.resolve(process.cwd() + '/dist/cordova/');
        //
        // try{
        //     await imageMin(gameCfg, arenaDist);
        // }catch (e) {
        //     console.error(e);
        // }
        //
        // await testRecCordova(version);
    });
}
//
function checkVersion(gameVersion) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk.green("checking gameversion.json..."));
        let tagVersion = "";
        let skipTagVersion = false;
        try {
            tagVersion = yield gitTags.latest();
        }
        catch (e) {
            console.log(chalk.red("git tag version error"), e);
            skipTagVersion = true;
        }
        console.log("tag version: ", chalk.yellow(tagVersion));
        console.log("file version: ", chalk.yellow(gameVersion.version));
        let commitedVersion = "not found";
        if (skipTagVersion) {
            tagVersion = gameVersion.version;
            commitedVersion = gameVersion.version;
        }
        else {
            let lastCommits = (yield git.getLastCommit(2)).split('\n\n');
            for (let i = 0; i < lastCommits.length; i++) {
                let msg = lastCommits[i].substring(1, lastCommits[i].length - 1);
                if (semverRegex().test(msg)) {
                    commitedVersion = semverRegex().exec(msg);
                    break;
                }
            }
            if (commitedVersion) {
                console.log("last commit version: ", chalk.yellow(commitedVersion));
            }
        }
        if (!tagVersion || !semverRegex().test(tagVersion)) {
            console.log(chalk.red("You do not have any version following semver yet!"));
            console.log("You have to create one first: " + chalk.green("game-core-cli version create"));
            process.exit(1);
            return false;
        }
        if (commitedVersion == gameVersion.version && commitedVersion == tagVersion) {
            console.log(chalk.green("release version: " + commitedVersion + " - ok"));
        }
        else {
            console.log(chalk.red("release version - error!"));
            let process_exit = true;
            setInterval(() => {
                if (process_exit) {
                    process.exit(1);
                }
            }, 10000);
            let vc = yield getVersion(gameVersion.version);
            process_exit = false;
            if (vc.version == "no") {
                process.exit(1);
                return false;
            }
        }
        return true;
    });
}
function release(type, environment, cmdObj) {
    return __awaiter(this, void 0, void 0, function* () {
        const chdir = cmdObj["chdir"] || null;
        const skipVersionCheck = !!cmdObj["skipVersionCheck"];
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
        let config = {
            type: "game",
            environment: "all"
        };
        switch (type) {
            case "game":
                config = yield getReleaseGameConfig(type, environment);
                break;
            case "factive":
                config = yield getReleaseFactiveConfig(type, environment);
                break;
            default:
                return;
        }
        config.type = type;
        config.environment = environment || config.environment;
        config.outDir = cmdObj["outdir"] || null;
        config.dontClean = !!cmdObj["dontClean"];
        process.env.GAME_CFG_FILE_NAME = cmdObj["cfg"];
        console.log("config.environment", config.environment);
        const gameCfg = getGameCfg_1.default(cmdObj["cfg"]);
        if (!gameCfg) {
            return;
        }
        if (!gameCfgCheck_1.default(gameCfg)) {
            return;
        }
        let gameVersionJson = fs.readFileSync(path.resolve(process.cwd(), 'gameversion.json'), 'utf8');
        if (!gameVersionJson) {
            return;
        }
        const gameVersion = JSON.parse(gameVersionJson);
        if (!skipVersionCheck && !checkVersion(gameVersion)) {
            return;
        }
        console.log("config.version:", chalk.yellow(gameVersion.version));
        config.version = gameVersion.version;
        switch (config.environment) {
            case "arena4":
                yield buildArena4(gameCfg, config);
                break;
            case "mp":
                yield buildMultiplayer(gameCfg, config.version);
                break;
            case "msn":
                yield buildMsn(gameCfg, config.version);
                break;
            case "arena5":
                yield buildArena5(gameCfg, config.version);
                break;
            case "cordova":
                yield buildCordova(gameCfg, config.version);
                break;
            case "all":
                yield buildArena4(gameCfg, config);
                yield buildArena5(gameCfg, config.version);
                break;
        }
    });
}
exports.default = release;
function getReleaseGameConfig(type, environment) {
    const gameQuestions = [
        {
            type: 'list',
            name: 'environment',
            message: 'environment:',
            default: 'all',
            when: (config) => {
                return !environment;
            },
            choices: [
                {
                    name: 'arena4',
                    value: 'arena4'
                },
                {
                    name: 'arena5',
                    value: 'arena5'
                },
                {
                    name: 'cordova',
                    value: 'cordova'
                },
                {
                    name: 'msn',
                    value: 'msn'
                },
                {
                    name: 'mp',
                    value: 'mp'
                },
                {
                    name: 'all',
                    value: 'all'
                }
            ]
        }
    ];
    return inquirer_1.prompt(gameQuestions);
}
function getReleaseFactiveConfig(type, environment) {
    const factiveQuestions = [
        {
            type: 'list',
            name: 'environment',
            message: 'environment:',
            default: 'inhabit',
            when: (config) => {
                return !environment;
            },
            choices: [
                {
                    name: 'inhabit',
                    value: 'inhabit'
                }
            ]
        }
    ];
    return inquirer_1.prompt(factiveQuestions);
}
function getVersion(version) {
    const factiveQuestions = [
        {
            type: 'list',
            name: 'version',
            message: 'Set version ' + version + ' and build release? (10 sec time uot):',
            default: 'no',
            choices: [
                {
                    name: 'no',
                    value: 'no'
                },
                {
                    name: 'yes',
                    value: 'yes'
                }
            ]
        }
    ];
    return inquirer_1.prompt(factiveQuestions);
}
