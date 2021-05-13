const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteSheetBuilderPlugin = require('../../../../spritesheet-builder-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const gameCfg = require(process.cwd() + '/' + process.env.GAME_CFG_FILE_NAME);
const path = require('path');
const ArkTestRecPlayerPlugin = require('../../../../test-rec-plugin');

console.log("process.env.GAME_CFG", process.env.GAME_CFG_FILE_NAME);

const config = {
    entry: {
        pixi: 'pixi.js',
        main: gameCfg.arena4.entry
    },
    output: {
        filename: 'build/[name].js'
    },
    devtool: 'source-map',
    mode: 'development',
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             include: /pixi\.(.*?)js/
    //         })
    //     ]
    // },
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            title: gameCfg.arena4.html.title
        }),
        new CopyWebpackPlugin( gameCfg.resources),
        new CopyWebpackPlugin( [
            {
                "from": path.resolve(__dirname, "PlayerIOClient.development.js"),
                "to": "PlayerIOClient.development.js",
                toType: 'file'
            }
        ])
    ],
    resolve: {
        extensions: ['.js', '.ts', '.json', '.less', ".woff", ".woff2"]
    },
    externals: {
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        // inline: false
    },
    performance: {
        hints: false
    }
};

if (gameCfg.testRec && gameCfg.testRec.enable) {
    config.plugins.push(new ArkTestRecPlayerPlugin({enable: true, filter: ['pixi']}));
}

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
