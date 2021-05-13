const gameversion = require(process.cwd() + '/gameversion.json');
const gameCfg = require(process.cwd() + '/gamecfg.json');


module.exports = function (buffer) {
    const gamesConfig = JSON.parse(buffer.toString());

    gamesConfig.games[0].slug = gameCfg.arena5.phenixCfg.slug;

    let phenixcfg_JSON = JSON.stringify(gamesConfig, null, 2);
    return phenixcfg_JSON;
};
