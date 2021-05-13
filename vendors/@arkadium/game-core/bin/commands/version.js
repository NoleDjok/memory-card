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
const chalk = require("chalk");
const semverRegex = require("semver-regex");
const gitTags = require("./../git/git-tags");
const git = require('./../git/utilities/git');
const gulp = require('gulp');
const jeditor = require("gulp-json-editor");
const PARTS = {
    patch: 2,
    minor: 1,
    major: 0
};
function updateVersionFile(versionFilePath, version) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            gulp.src(versionFilePath)
                .pipe(jeditor(function (json) {
                var date = new Date();
                json.date = date.toString();
                json.version = version;
                return json;
            }))
                .pipe(gulp.dest("./"))
                .on('end', resolve);
        });
    });
}
function version(command) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (command) {
            case "check":
                let checkTag = yield gitTags.latest();
                console.log(chalk.yellow("Current version: "), chalk.black.bgYellow(checkTag));
                break;
            case "create":
                let tagCreate = yield gitTags.latest();
                if (!tagCreate || !semverRegex().test(tagCreate)) {
                    yield git.createTag("0.0.1");
                }
                console.log(chalk.yellow("Version already created: "), chalk.black.bgYellow(tagCreate));
                break;
            case "update":
                let tag = yield gitTags.latest();
                if (!tag || !semverRegex().test(tag)) {
                    console.log(chalk.red("You do not have any version following semver yet!"));
                    console.log("You have to create one first: " + chalk.green("game-core-cli version create"));
                    process.exit(1);
                }
                console.log(chalk.yellow("Current version: "), chalk.black.bgYellow(tag));
                const answer = yield getVersionConfig();
                const config = yield git.getRepoConfig();
                let version = semverRegex().exec(tag)[0];
                let bumped = getBumbedVersion(version, answer.part);
                // let bumpedPrefix = config.hasOwnProperty('gitflow.prefix.release')
                //     ? config['gitflow.prefix.release'] + bumped
                //     : bumped;
                try {
                    let versionFilePath = path.resolve(process.cwd() + '/gameversion.json');
                    yield updateVersionFile(versionFilePath, bumped);
                    yield git.commitVersion(bumped, versionFilePath);
                    yield git.createTag(bumped);
                    console.log(chalk.green("Bumped version to "), chalk.bgGreen.black(bumped));
                }
                catch (err) {
                    console.log(chalk.red("Could not create"), chalk.red.bold(bumped), chalk.red("tag"));
                    console.log(err);
                    process.exit(1);
                }
                break;
            default:
                break;
        }
    });
}
exports.default = version;
function getBumbedVersion(version, part) {
    let versionIndex = part;
    let versionParts = version.split(".");
    versionParts[versionIndex] = parseInt(versionParts[versionIndex]) + 1;
    if (versionIndex <= 1) {
        versionParts[2] = 0;
    }
    if (versionIndex == 0) {
        versionParts[1] = 0;
    }
    return versionParts.join(".");
}
function getVersionConfig() {
    const gameQuestions = [
        {
            type: "list",
            name: "part",
            message: "Which part of the version you want to bump?",
            choices: [
                {
                    name: 'Patch (?.?.x)',
                    value: 2
                },
                {
                    name: 'Minor (?.x.?)',
                    value: 1
                },
                {
                    name: 'Major (x.?.?)',
                    value: 0
                }
            ]
        }
    ];
    return inquirer_1.prompt(gameQuestions);
}
