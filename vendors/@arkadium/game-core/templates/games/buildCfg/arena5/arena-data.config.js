const gameversion = require(process.cwd() + '/gameversion.json');
const gameCfg = require(process.cwd() + '/gamecfg.json');
//const arenaDataCfg = require('./arena-data.json');

module.exports = function (buffer) {
    let arenaDataCfg = JSON.parse(buffer.toString());
    let tags = gameCfg.arena5.phenixCfg.locales[0].settings.tags;
    let description = gameCfg.arena5.phenixCfg.locales[0].settings.description;
    let slug = gameCfg.arena5.phenixCfg.slug;
    let game = {
        id: gameCfg.arena5.phenixCfg.slug,
        status: 1,
        name: gameCfg.arena5.phenixCfg.locales[0].settings.name,
        promoThumbPath: gameCfg.arena5.phenixCfg.settings.promoThumbPath,
        thumbPath: gameCfg.arena5.phenixCfg.settings.thumbPath,
        secondaryThumbPath: gameCfg.arena5.phenixCfg.settings.secondaryThumbPath,
        screenshotPath:  gameCfg.arena5.phenixCfg.settings.screenshotPath,
        assetOriginUrl: "/",
        tags: JSON.stringify(tags),
        slug: slug,
        sdkName: gameCfg.arena5.phenixCfg.sdkName,
        description: description,
        version: "0.0",
        locales: JSON.stringify(["en","fr","it","de","es"]),
        releaseTime: 0,
        feedMetadata: {
            categories: [],
            membersOnly: false,
            alias: null,
            name: "",
            description: "",
            rules: ""
        }
    };
    for (let i = 0; i < arenaDataCfg.games.length; i++) {
        if(arenaDataCfg.games[i].id == gameCfg.arena5.phenixCfg.slug){
            arenaDataCfg.games[i] = game;
        }
    }
    arenaDataCfg.games.push(game);
    arenaDataCfg.manualSorting[0].slug = slug;


    return JSON.stringify(arenaDataCfg);
};
