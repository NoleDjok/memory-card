import {GameMain, IGameMainOptions} from "./GameMain";
import {Game} from "@arkadium/game-core";
import {ILanguage} from "@arkadium/game-core";
import {ISupportedLanguages} from "@arkadium/game-core";
import {ScreenOrientationEnum} from "@arkadium/game-core";
import {EnvironmentTypeEnum} from "@arkadium/game-core";

declare var require;

export const CARD_MEMORY = require("../animate/card_memory.json");

require("../resources/fonts/fonts.css");
const gameVersion = require('../gameversion.json');
const gameCfg =  require('../gamecfg.json');

export class Games {

    public static startGame(elementId?:string): Game {

        return new Game({
            main: GameMain,                             // Main class entry point. It should be extended from GameBase class.
            options: <IGameMainOptions>{                // Options to send some parameters to GameMain constructor
                opt0: "test",
                opt1: 1
            },
            version: gameVersion.version,               // Game Version
            supportLanguages: <ISupportedLanguages>{    // Localization options
                languages:[
                    <ILanguage>{name:"English",value:"en",key:"en-US"},
                    <ILanguage>{name:"Deutsch",value:"de",key:"de-DE"},
                    <ILanguage>{name:"Español",value:"es",key:"es-ES"},
                    <ILanguage>{name:"Français",value:"fr",key:"fr-FR"},
                    <ILanguage>{name:"Italiano",value:"it",key:"it-IT"}
                ],
                defaultLanguage:"en-US",
                textPath:`${gameCfg.resourcesRoot}assets/texts/`
            },
            sounds:[
                {
                    "id": "background",
                    "path": "/assets/sounds/background.mp3"
                },
                {
                    "id": "open_card",
                    "path": "/assets/sounds/open_card.mp3"
                },
                {
                    "id": "win",
                    "path": "/assets/sounds/win.mp3"
                }
            ],                                 // List of sound files
            resourcesRoot: gameCfg.resourcesRoot,       // Relative resources root path (url)
            elementId: elementId || "gamePlace",        // DOM element or element id
            renderOptions:{                             // Main render options
                noWebGL: false,
                backgroundColor: 0x5fbcd3,
                clearBeforeRender: true,
                transparent: false,
                showStats: true,
                disableContextMenu: true,
                fps: 30
            },
            gameId: gameCfg.gameId,                     // Games id
            orientations: [                             // Orientations rules
                {
                    orientation:ScreenOrientationEnum.Portrait,
                    orientationEnvironment: EnvironmentTypeEnum.phone
                },
                {
                    orientation:ScreenOrientationEnum.PortraitAndLandscape,
                    orientationEnvironment: EnvironmentTypeEnum.pc | EnvironmentTypeEnum.tablet
                }
            ]
        });
    }
}

