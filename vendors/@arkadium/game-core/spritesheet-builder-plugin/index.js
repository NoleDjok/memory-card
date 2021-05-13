class SpriteSheetBuilderPlugin {
    constructor(options) {
        this.options = options;
    }

    async apply(compiler) {
        compiler.hooks.emit.tapPromise('SpriteSheetBuilderPlugin', compilation => {
            return new Promise(async (resolve, reject) => {
                if (!global.SPRITESHEETBUILDER_RESULTS) {
                    return resolve();
                }

                for (let result of global.SPRITESHEETBUILDER_RESULTS) {
                    if (result.inputJson.emitBitmapAtlas) {
                        for (let bitmap of result.outputData.bitmaps) {
                            compilation.assets[`${this.options.outputDir}/${bitmap.name}.json`] = {
                                source: () => bitmap.json,
                                size: () => bitmap.json.length
                            };

                            compilation.assets[`${this.options.outputDir}/${bitmap.name}.png`] = {
                                source: () => new Buffer(bitmap.image, "base64"),
                                size: () => Buffer.byteLength(bitmap.image, 'base64')
                            };
                        }
                    }

                    if (result.inputJson.emitShapeAtlas) {
                        for (let shape of result.outputData.shapes) {
                            compilation.assets[`${this.options.outputDir}/${shape.name}.json`] = {
                                source: () => shape.json,
                                size: () => shape.json.length
                            };

                            compilation.assets[`${this.options.outputDir}/${shape.name}.png`] = {
                                source: () => new Buffer(shape.image, "base64"),
                                size: () => Buffer.byteLength(shape.image, 'base64')
                            };
                        }
                    }
                }

                resolve();
            });
        });
    }
}

module.exports = SpriteSheetBuilderPlugin;
