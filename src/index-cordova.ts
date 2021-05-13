declare var require;
require("es6-shim");
require('weakmap-polyfill');

import {Games} from "./index";

function runGame() {
    Games.startGame();
}

if(window["cordova"] != undefined && window["cordova"] != null)
{
    document.addEventListener('deviceready', function ()
    {
        runGame();
    }, false);
}
else
{
    runGame();
}


