"use strict";

const webpack_sources_1 = require("webpack-sources");

class WebpackMsnBannerPlugin {
    constructor(options, excludes) {
        this.options = options || {};
        this.excludes = [];
        this.excludes = this.excludes.concat(excludes || []);
    }
    apply(compiler) {
        const pluginName = this.constructor.name;
        compiler.hooks.emit.tap(pluginName, (compilation) => {
            compilation.chunks.forEach(chunk => {

                chunk.files.forEach((fileName) => {
                    if (!fileName.toLowerCase().endsWith('main.js')) {
                        return;
                    }
                    const asset = compilation.assets[fileName];
                    const { inputSource, inputSourceMap } = this.extractSourceAndSourceMap(asset);
                    compilation.assets[fileName] = new webpack_sources_1.RawSource('/*!\n * Copyright (C) Microsoft Corporation. All rights reserved.\n */\n' + inputSource);
                });
            });
        });
    }
    extractSourceAndSourceMap(asset) {
        if (asset.sourceAndMap) {
            const { source, map } = asset.sourceAndMap();
            return { inputSource: source, inputSourceMap: map };
        }
        else {
            return {
                inputSource: asset.source(),
                inputSourceMap: asset.map()
            };
        }
    }
}
module.exports = WebpackMsnBannerPlugin;
