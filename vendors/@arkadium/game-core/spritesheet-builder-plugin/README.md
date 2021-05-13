Example:


```javascript
// webpack.config.js

const SpriteSheetBuilderPlugin = require("@arkadium/game-core/spritesheet-builder-plugin");

...

plugins: [
        new SpriteSheetBuilderPlugin({
        inputJsonPaths: [
            path.resolve(__dirname, "./src/resources/pga-drive-distance-estimator-callaway.json"),
            path.resolve(__dirname, "./src/resources/ucl-best-players-guesser.json")
            ],
            outputDir: "resources/spritesheet",
            size: 2048
        })
],

...

```