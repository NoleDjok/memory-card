const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteSheetBuilderPlugin = require('../../../../spritesheet-builder-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const gameCfg = require(process.cwd() + '/' + process.env.GAME_CFG_FILE_NAME);
const path = require('path');
const ArkTestRecPlayerPlugin = require('../../../../test-rec-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
            },
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
    ],
    resolve: {
        extensions: ['.js', '.ts', '.json', '.less', ".woff", ".woff2"]
    },
    externals: {
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    performance: {
        hints: false
    }
};

config.mode = 'production';
config.devtool = '';
config.optimization = {
    minimize: true,
    minimizer: [
        new UglifyJsPlugin({
            include: /pixi\.(.*?)js/
        })
    ]
};

if (gameCfg.adobeAnimate && gameCfg.adobeAnimate.spritesheetBuilderPluginConfig && gameCfg.adobeAnimate.spritesheetBuilderPluginConfig.enable) {
    config.plugins.push(new SpriteSheetBuilderPlugin(gameCfg.adobeAnimate.spritesheetBuilderPluginConfig));
}

config.plugins.push(new JavaScriptObfuscator({
    // rotateUnicodeArray: true,
    // compact: true,
    // controlFlowFlattening: false,
    // deadCodeInjection: false,
    // debugProtection: false,
    // debugProtectionInterval: false,
    // disableConsoleOutput: true,
    // identifierNamesGenerator: 'mangled',
    // log: true,
    // renameGlobals: false,
    // sourceMap: false,
    // rotateStringArray: true,
    // selfDefending: true,
    // stringArray: true,
    // stringArrayEncoding: false,
    // stringArrayThreshold: 0.1,
    // transformObjectKeys: true,
    // unicodeEscapeSequence: false
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: false,
    identifierNamesGenerator: 'mangled',
    log: true,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: false,
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false
}, ["build/pixi*"]));

config.plugins.push(new ArkTestRecPlayerPlugin({enable: true, filter: ['pixi']}));

module.exports = config;

