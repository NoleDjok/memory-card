const path = require('path');
const fs = require('fs');

class ArkTestRecPlayerPlugin {
    constructor(options) {
        this.options = options;
    }

    async apply(compiler) {

        const enable = this.options.enable;
        let pathVconsole = '@arkadium/testrec-player';
        const _root = module.parent.paths.find(item => {
            let tmpPathVconsole = path.join(item, '@arkadium/testrec-player');
            if (fs.existsSync(item) && fs.existsSync(tmpPathVconsole)) {
                pathVconsole = tmpPathVconsole;
                return true;
            }
            return false;
        });
        const that = this;

        const pluginFunction = (local, entry) => {
            console.log("arkTestRecPlayer pluginFunction",local, entry);
            if (enable) {
                if (typeof entry === 'string') {
                    console.log("entry === 'string'");
                    if (!checkFilter([entry], that.options.filter)) {
                        entry = [pathVconsole, entry];
                        console.warn('[test-rec-player-webpack-plugin]\n');
                    }
                } else if (Object.prototype.toString.call(entry) === '[object Array]') {

                    console.log("entry === '[object Array]'");

                    if (!checkFilter(entry, that.options.filter)) {
                        entry.unshift(pathVconsole);
                    }
                } else if (typeof entry === 'object') {

                    console.log("entry === '[object]'");

                    for (let key in entry) {
                        console.log("let key in entry", key);
                        if (that.options.filter.indexOf(key) < 0) {
                            console.log("let key in entry process", key);
                            if (Object.prototype.toString.call(entry[key]) === '[object Array]') {
                                //if (!checkFilter(entry[key], that.options.filter)) {
                                    entry[key].unshift(pathVconsole);
                                //}
                            } else if (typeof entry[key] === 'string') {
                                //if (!checkFilter([entry[key]], that.options.filter)) {
                                    entry[key] = [pathVconsole, entry[key]];
                                //}
                            }
                        }
                    }
                }

                // console.log(entry);
            }
        };

        function wrapChunks(compilation, chunks) {
            chunks.forEach(chunk => {

                chunk.files.forEach(fileName => {
                    if (fileName === '@arkadium/testrec-player') {
                        //wrapFile(compilation, fileName, args);

                        console.log('wrapFile ' + fileName);
                    }
                });
            });
        }

        if (compiler.hooks) {
            console.log('it is webpack 4');
            compiler.hooks.entryOption.tap({ name: 'arkTestRecPlayerPlugin' }, pluginFunction);

            compiler.hooks.compilation.tap('WrapperPlugin', (compilation) => {
                compilation.hooks.optimizeChunkAssets.tapAsync('WrapperPlugin', (chunks, done) => {
                    wrapChunks(compilation, chunks);
                    done();
                });
            });

            // function wrapFile(compilation, fileName, chunkHash) {
            //     const headerContent = (typeof header === 'function') ? header(fileName, chunkHash) : header;
            //     const footerContent = (typeof footer === 'function') ? footer(fileName, chunkHash) : footer;
            //
            //     compilation.assets[fileName] = new ConcatSource(
            //         String(headerContent),
            //         compilation.assets[fileName],
            //         String(footerContent));
            // }


        } else {
            console.log('it is not webpack 4');
            compiler.plugin('entry-option', pluginFunction);
        }
    }
}


function checkFilter(entries, filter) {
    for (var i = 0; i < entries.length; i++) {
        if (!fs.existsSync(entries[i])) {
            continue;
        }
        console.log("checkFilter",entries[i]);
        const data = codeClean((fs.readFileSync(entries[i]) || '').toString());
        if (data.indexOf('new require(\'@arkadium/testrec-player') >= 0
            || data.indexOf('new require("@arkadium/testrec-player') >= 0
        ) {
            return true;
        }

        for (var j = 0; j < filter.length; j++) {
            if (filter[j] === entries[i]) {
                return true;
            }
        }
    }
    return false;
}

function codeClean(str) {
    var reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g;
    // console.log(str.match(reg));
    return str.replace(reg, function(word) {
        return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? '' : word;
    });
}

module.exports = ArkTestRecPlayerPlugin;
