#!/usr/bin/env node
"use strict";
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
/*!
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
const program = require("commander");
const create_1 = require("./commands/create");
const run_1 = require("./commands/run");
const release_1 = require("./commands/release");
const version_1 = require("./commands/version");
const cliVersion = "1.4.9";
program
    .version(require('../package').version)
    .usage("<command> [options]");
// Create command
program
    .command("create [type]")
    .description("Create a new game or factive project")
    .action((type) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Arkadium Game Core CLI, version: ${cliVersion}\n`);
    try {
        yield create_1.default(type);
    }
    catch (e) {
        process.exit(1);
    }
}));
// Create command
program
    .command("run [environment]")
    .option('--cfg [cfg]', 'add the specified gamecfg.json', 'gamecfg.json')
    .option('--port [port]', 'custom port')
    .option('--host [host]', 'custom host')
    .option('--chdir [chdir]', 'change the working directory')
    .description("Run current project")
    .action((environment, cmdObj) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Arkadium Game Core CLI, version: ${cliVersion}\n`);
    try {
        yield run_1.default(environment, cmdObj);
    }
    catch (e) {
        process.exit(1);
    }
}));
// Create command
program
    .command("release <type> [environment]")
    .option('--cfg [cfg]', 'add the specified gamecfg.json', 'gamecfg.json')
    .option('--chdir [chdir]', 'change the working directory')
    .option('--skip-version-check', 'skip version check')
    .option('--outdir [outdir]', 'output directory')
    .option('--dont-clean', 'do not clear the directory before build')
    .description("Release project type game of factive, environment for game:arena4,arena5,all and for factive is inhabit")
    .action((type, environment, cmdObj) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Arkadium Game Core CLI, version: ${cliVersion}\n`);
    try {
        yield release_1.default(type, environment, cmdObj);
        process.exit(0);
    }
    catch (e) {
        process.exit(1);
    }
}));
// Create command
program
    .command("version <command>")
    .description("Release build version update")
    .action((command) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Arkadium Game Core CLI, version: ${cliVersion}\n`);
    try {
        yield version_1.default(command);
    }
    catch (e) {
        process.exit(1);
    }
}));
// Add command
// program
//     .command("add <type> <name>")
//     .description("Add")
//     .action((type, name) => {
//         add(type, name);
//     });
// Show help on unknown command
program
    .arguments('<command>')
    .action((cmd) => {
    program.outputHelp();
    console.log(`Arkadium Game Core CLI, version: ${cliVersion}\n`);
    console.log();
    console.log(`Unknown command ${cmd}.`);
    console.log();
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
