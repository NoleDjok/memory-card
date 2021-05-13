const gameversion = require(process.cwd() + '/gameversion.json');
const gameCfg = require(process.cwd() + '/gamecfg.json');

module.exports = function (buffer) {
    const phenixcfg = JSON.parse(buffer.toString());

    phenixcfg.version = gameCfg.arena5.phenixCfg.version || "1.0";
    phenixcfg.slug = gameCfg.arena5.phenixCfg.slug;
    phenixcfg.sdkName = gameCfg.arena5.phenixCfg.sdkName;
    phenixcfg.locales = gameCfg.arena5.phenixCfg.locales;
    phenixcfg.settings = gameCfg.arena5.phenixCfg.settings;
    phenixcfg.scoreMatrix = gameCfg.arena5.phenixCfg.scoreMatrix || [];

    let phenixcfg_JSON = JSON.stringify(phenixcfg, null, 2);
    return phenixcfg_JSON;
};
