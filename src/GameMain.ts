import {GameBase, IGameBaseConfiguration} from "@arkadium/game-core";
import {Inject} from "@arkadium/game-core";
import {RootView} from "./Views/RootView";
import {GameModel} from "./Models/GameModel";

export interface IGameMainOptions {
}

export class GameMain extends GameBase
{
    @Inject private $model: GameModel;


    public constructor(@Inject options: IGameMainOptions)
    {
        super();
    }

    protected getConfiguration(): IGameBaseConfiguration
    {
        return {
            childViews:{
                root:{
                    view:RootView,
                    model: this.$model
                }
            }
        };
    }

    protected onSetLandscape():void {}
    protected onSetPortrait():void {}
    protected onInitialize():void {}
}
