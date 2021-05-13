import {Inject, ISimpleViewConfiguration, SimpleViewBase} from "@arkadium/game-core";
import {GameScreenView} from './GameScreenView'
import {GameModel} from "../Models/GameModel";
import {ButtonView, IButtonViewOptions} from "./ButtonView";
import {GameLogic} from "../Logic/GameLogic";
import {YouWinView} from "./YouWinView";


export interface IRootViewOptions {
}

export class RootView extends SimpleViewBase {
    $model: GameModel;


    public constructor(@Inject private _options: IRootViewOptions, @Inject private _gameLogic: GameLogic) {
        super("RootView");
    }

    protected getConfiguration(): ISimpleViewConfiguration {

        return {
            childViews: {
                gameScreen: {
                    view: GameScreenView,
                    model: this.$model,
                    x: -370,
                    y: -290
                },

                buttonReset: {
                    view: ButtonView,
                    options: <IButtonViewOptions>{
                        label: "Reset",
                        onClick: () => {
                            this._gameLogic.startNewGame();
                        }
                    },
                    x: 0,
                    y: 412
                },
                youWinView: {
                    view: YouWinView,
                    model: this.$model,
                    y: -344

                },
            },
            resources: {}
        };
    }

    protected onInitialize(): void {
    }

    protected onSetLandscape(): void {
    }

    protected onSetPortrait(): void {
    }
}
