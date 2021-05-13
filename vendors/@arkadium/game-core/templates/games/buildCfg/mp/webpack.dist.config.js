const JavaScriptObfuscator = require('webpack-obfuscator');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config  = require('./webpack.config');
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

module.exports = config;

