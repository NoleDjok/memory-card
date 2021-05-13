const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteSheetBuilderPlugin = require('../../../../spritesheet-builder-plugin');
const phenixcfgModify  = require('./phenixcfg');
const gamesConfigModify  = require('./games.config');
const arenaDataConfigModify  = require('./arena-data.config');
const gameCfg = require(process.cwd() + '/' + process.env.GAME_CFG_FILE_NAME);
const path = require('path');

const config = {
    optimization: {
        minimize: false
    },
    entry: {
        main: gameCfg.arena5.entry
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    },
    output: {
        publicPath: "/",
        filename: '[name].min.js',
        libraryTarget: 'var',
        library: ["__arenax_v1__", gameCfg.arena5.phenixCfg.sdkName + "Game"]
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json', '.less', ".woff", ".woff2"]
    },
    target : 'web',
    plugins: [
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
            },
            {
                from: path.resolve(__dirname, 'games.config.json'),
                to: 'games.config.json',
                transform (content, path) {
                    return gamesConfigModify(content)
                }
            },
            {
                from: path.resolve(__dirname, 'arena-data.json'),
                to: 'arena-data.json',
                transform (content, path) {
                    return arenaDataConfigModify(content);
                }
            },
            {
                from: path.resolve(__dirname, 'index.html'),
                to: 'index.html'
            }
        ]))
    ],
    performance: {
        hints: false
    }
};

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

