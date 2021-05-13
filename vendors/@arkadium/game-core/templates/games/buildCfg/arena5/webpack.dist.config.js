const config  = require('./webpack.config');
const WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpriteSheetBuilderPlugin = require('../../../../spritesheet-builder-plugin');
const gameCfg = require(process.cwd() + '/gamecfg.json');
const phenixcfgModify  = require('./phenixcfg');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

config.output = {
    filename:'[name].min.js',
    //path: path.resolve(__dirname, 'dist/phoenix'),
    libraryTarget: 'var',
    library: ["__arenax_v1__", gameCfg.arena5.phenixCfg.sdkName + "Game"]
};
config.mode = 'production';
config.optimization = {
    minimize: true,
    minimizer: [
        new UglifyJsPlugin({
        })
    ]
};
config.devtool = '';
config.plugins = [
    new webpack.ProvidePlugin({
        PIXI: "pixi.js"
    }),
    new CopyWebpackPlugin(gameCfg.resources.concat([
        {
            from: path.resolve(__dirname, 'phenixcfg.json'),
            to: 'phenixcfg.json',
            transform (content, path) {
                return phenixcfgModify(content)
            }
        }
    ]))
];

if (gameCfg.adobeAnimate && gameCfg.adobeAnimate.spritesheetBuilderPluginConfig && gameCfg.adobeAnimate.spritesheetBuilderPluginConfig.enable) {
    config.plugins.push(new SpriteSheetBuilderPlugin(gameCfg.adobeAnimate.spritesheetBuilderPluginConfig));

    for (let inputJson of gameCfg.adobeAnimate.spritesheetBuilderPluginConfig.inputJsons) {
        config.module.rules.push({
            test: new RegExp(`${path.parse(inputJson.path).name}.json`),
            use: {
                loader: path.resolve(__dirname, '../../../../spritesheet-builder-plugin/loader.js'),
                options: {
                    inputJson: inputJson
                }
            }
        })
    }
}


module.exports = config;
