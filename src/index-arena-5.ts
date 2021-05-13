import {Games} from "./index";

declare var module;
declare var require;
declare var ArenaXApi;

window["ArenaXApi"] = require('arenax-game-api');

module.exports = {
    game: {
        game: null,
        register: function (observable, options) {
            let arenaXApi = ArenaXApi.init(observable, options);
            arenaXApi.dispatch({type: 'GAME_REGISTERED', payload: null});
        },
        render: function (width, height, elementId) {
            this.game = Games.startGame(elementId);
        },
        destroy: function () {
            if (this.game !== null && typeof this.game !== 'undefined') {
                this.game.destroy();
            }
        }
    }
};

