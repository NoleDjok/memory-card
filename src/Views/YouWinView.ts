import {AnimateViewBase, PixiTextureResourceItem} from "@arkadium/game-core";
import {Inject} from "@arkadium/game-core";
import {IAnimateViewConfiguration} from "@arkadium/game-core";
import {CARD_MEMORY} from "../index";
import {GameModel} from "../Models/GameModel";

export interface IYouWonViewOptions {

}


export class YouWinView extends AnimateViewBase {

    $model: GameModel;

    public constructor(@Inject private _options: IYouWonViewOptions) {
        super("YouWinView");
    }

    protected getConfiguration(): IAnimateViewConfiguration {
        return {
            animateContent: CARD_MEMORY,
            symbolName: "congrats",
            childViews: {},

            modelEvents: {
                "showYouWon": (s) => {
                    this.gotoAndStop('show');
                },
                "hideYouWon": (s) => {
                    this.gotoAndStop('hide');
                }
            }
        }
    }

    protected onInitialize(): void {

    }
}
