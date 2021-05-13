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
declare const _: any;
declare const path: any;
declare const semver: any;
declare const git: any;
declare const parseTags: (data: any) => any;
declare const filterTags: (repo: any) => any;
declare const normalizeFn: (fn: any) => (repo: any) => Promise<unknown>;
declare const ret: (arg: any) => any;
