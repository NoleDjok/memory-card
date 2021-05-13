import {
    Inject,
    PixiTextureResourceItem,
    SimpleViewBase, SoundType
} from "@arkadium/game-core";
import {IAnimateViewConfiguration} from "@arkadium/game-core";
import {CARD_MEMORY} from "../index";
import {CardModel, GameModel} from "../Models/GameModel";
import {HandView} from "./HandView";
import {DisplayObject} from "pixi.js";
import {SpriteList} from "@arkadium/game-core/dist/Base/SpriteList";


export interface ICardBackViewOptions {
    onPlay: () => void; //callback function onPlay
}

export class GameScreenView extends SimpleViewBase {
    $model: GameModel;
    $sprites:SpriteList = new SpriteList()

    public constructor(@Inject private _options: ICardBackViewOptions) {
        super("GameScreenView");
    }

    protected getConfiguration(): IAnimateViewConfiguration {
        const childViews = {};

        return {

            childViews: childViews,

            animateContent: CARD_MEMORY,
            symbolName: "card_back",
            sounds: [
                {
                    id: "background",
                    type: SoundType.Music
                }
            ],
            onPointerDown: e => {

            },
            onPointerUpOutside: e => {

            },
            onPointerUp: e => {

            },
            onPointerMove: e => {

            },
            onTap: e => {


            }
        };
    }

    protected onInitialize() {
        this.$sounds.get("background").play(true);
        this.$model.cards.forEach((card, i) => {
            this.addChild({
                view: HandView,
                model: card
            }, `card${card.index}`);

        });
    }

    protected onSetLandscape(): void {
    }

    protected onSetPortrait(): void {
    }

    protected onDestroy(): void {
        this.$sounds.get("background").stop();
    }
}
