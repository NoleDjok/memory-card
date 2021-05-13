/*!@license
 * Copyright (c) Arkadium Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Denis Gusarov <denis.gusarov@arkadium.com>
 */
/**
 * This code is adapted from https://github.com/bfricka/node-git-tags/blob/master/src/git-tags.js
 * That package is not maintained.
 */
const _ = require('lodash');
const path = require('path');
const semver = require('semver');
const git = require('./utilities/git');
const parseTags = (data) => {
    return _.compact(data.split('\n'))
        .filter(semver.valid)
        .sort(semver.compare)
        .reverse();
};
const filterTags = (repo) => {
    return git.getTags(repo).then((tags) => {
        return git.getRepoConfig(repo).then((config) => {
            let gitFlowConfigs = Object.keys(config).filter(item => item.indexOf('gitflow') === 0);
            if (gitFlowConfigs.length > 0) {
                let releasePrefix = config['gitflow.prefix.release'];
                let gitFlowTags = tags.split('\n').filter((tag) => tag.indexOf(releasePrefix) === 0).map((tag) => tag.substring(releasePrefix.length)).join('\n');
                return parseTags(gitFlowTags);
            }
            else {
                return parseTags(tags);
            }
        });
    });
};
const normalizeFn = (fn) => {
    return (repo) => {
        return new Promise((resolve, reject) => {
            if (!repo) {
                repo = process.cwd();
            }
            if (repo.charAt(0) === '.') {
                repo = path.resolve(repo);
            }
            filterTags(repo).then((tags) => {
                resolve(fn(tags));
            }).catch((error) => {
                console.log("normalizeFn", error);
                reject(error);
            });
        });
    };
};
const ret = (arg) => {
    return arg;
};
module.exports = {
    get: normalizeFn(ret),
    latest: normalizeFn(_.first),
    oldest: normalizeFn(_.last),
    parse: semver.parse,
    mmp: function (tag) {
        var p = semver.parse(tag);
        return [p.major, p.minor, p.patch].join('.');
    }
};
