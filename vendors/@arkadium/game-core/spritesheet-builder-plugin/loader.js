const loaderUtils = require('loader-utils');
const SpritesheetBuilder = require("./SpritesheetBuilder");

async function main(source) {
    const callback = this.async();

    const options = loaderUtils.getOptions(this);
    const inputJson = options.inputJson;

    const ssb = new SpritesheetBuilder(inputJson.atlasSize, inputJson.path, inputJson.excludeBitmaps, inputJson.scaleBitmap, inputJson.scaleShape);
    const outputData = await ssb.build();

    if (!global.SPRITESHEETBUILDER_RESULTS) {
        global.SPRITESHEETBUILDER_RESULTS = [];
    }

    global.SPRITESHEETBUILDER_RESULTS.push({
        inputJson: inputJson,
        outputData: outputData
    });

    const sourceObject = JSON.parse(source);

    if (!sourceObject._meta.spritesheets.bitmaps) {
        sourceObject._meta.spritesheets = {
            bitmaps: [],
            shapes: []
        };
    }

    if (inputJson.emitBitmapAtlas) {
        for (let bitmap of outputData.bitmaps) {
            const bitmapJsonObject = JSON.parse(bitmap.json);

            sourceObject._meta.spritesheets.bitmaps.push({
                file: `${bitmap.name}.png`,
                data: bitmapJsonObject
            });

            const spritesheetId = sourceObject._meta.spritesheets.bitmaps.length - 1;

            for (let assetId of Object.keys(bitmapJsonObject.frames)) {
                const assetFound = sourceObject.Bitmaps.filter(x => x.assetId == assetId)[0];
                if (assetFound) {
                    assetFound.spritesheetId = spritesheetId;
                }
            }
        }
    }

    if (inputJson.emitShapeAtlas) {
        for (let shape of outputData.shapes) {
            const shapeJsonObject = JSON.parse(shape.json);

            sourceObject._meta.spritesheets.shapes.push({
                file: `${shape.name}.png`,
                data: shapeJsonObject
            });

            const spritesheetId = sourceObject._meta.spritesheets.shapes.length - 1;

            for (let assetId of Object.keys(shapeJsonObject.frames)) {
                assetId = assetId.split("_")[0];
                const assetFound = sourceObject.Shapes.filter(x => x.assetId == assetId)[0];
                if (assetFound && !assetFound.spritesheetId) {
                    assetFound.spritesheetId = spritesheetId;
                }
            }
        }
    }

    callback(null, JSON.stringify(sourceObject));
}

module.exports = main;
