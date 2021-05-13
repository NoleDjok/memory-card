import {AnimateViewBase, PixiTextureResourceItem, SoundType} from "@arkadium/game-core";
import {Inject} from "@arkadium/game-core";
import {IAnimateViewConfiguration} from "@arkadium/game-core";
import {CARD_MEMORY} from "../index";
import {CardModel, GameModel} from "../Models/GameModel";
import {GameLogic} from "../Logic/GameLogic";

export interface ICardViewOptions {
    text: string;
}

export class HandView extends AnimateViewBase {

    $model: CardModel;

    public constructor(@Inject private _options: ICardViewOptions,
                       @Inject private _gameLogic: GameLogic,
                       @Inject private _model: GameModel) {
        super("HandView");
    }

    protected getConfiguration(): IAnimateViewConfiguration {

        const imageName = this.$model.cardSuit;
        return {
            resources: {
                imageName: new PixiTextureResourceItem(imageName, `/assets/images/${imageName}.png`)
            },
            sounds: [
                {
                    id: "open_card",
                    type: SoundType.Music
                },
                {
                    id: "win",
                    type: SoundType.Music
                }
            ],
            animateContent: CARD_MEMORY,
            symbolName: "card_back",
            childViews: {},

            modelWatch: {
                "taken": (e) => {
                },

                "cardSuit": (e) => {
                }
            },

            modelEvents: {
                "pickCard": (cardModel: CardModel) => {
                    const colOpenedCards = this._gameLogic.getColOpenedCards();

                    switch (true) {
                        // one card is opened

                        case colOpenedCards % 2 === 1:
                            this.$sounds.get("open_card").play(false, .5);
                            this._model.handDisplays.push(this);
                            this.disableHand();

                            this._model.firstCardChosen = cardModel;
                            break;
                        // 2 cards are opened
                        case colOpenedCards % 2 === 0:

                            this._model.handDisplays.push(this);
                            this._gameLogic.checkResult(cardModel);
                            break;
                        default:
                            break;
                    }
                },

                "checkResult": (lastCardChosen: CardModel) => {
                    this.disableAll();
                    const isWin = lastCardChosen.cardSuit === this._model.firstCardChosen.cardSuit;
                    const soundName = isWin ? "win" : "open_card";
                    this.$sounds.get(soundName).play(false, .5);

                    setTimeout(() => {
                        this.enableAll();
                        if (isWin) {
                            this.guessedHandle();
                        } else {
                            this.wrongGuessedHandle();
                        }
                    }, 500);

                },
                "startNewGame": (card: CardModel) => {
                    this.gotoAndStop('back');
                    const texture = new PixiTextureResourceItem(card.cardSuit, `/assets/images/${card.cardSuit}.png`);
                    this.display.getChildAt(0).destroy();
                    const faceCard = new PIXI.Sprite(texture.getTexture());
                    faceCard.anchor.set(.5);
                    this.display.addChildAt(faceCard, 0);
                    this.display.interactive = true;
                }
            },
            onPointerDown: () => {

                this.pick();
                this._gameLogic.pickCard(this.$model)
            }
        }
    }

    public disableAll() {
        this.display.parent.interactiveChildren = false
        this.display.parent.buttonMode = false;
    }

    public enableAll() {
        this.display.parent.interactiveChildren = true
        this.display.parent.buttonMode = true;
    }

    private disableHand() {
        this.display.interactive = false;
        this.display.buttonMode = false;
    }

    private wrongGuessedHandle() {
        this._model.handDisplays.forEach(handDisplay => {
            handDisplay.$model.taken = false;
            handDisplay.gotoAndStop("back");
            handDisplay.display.interactive = true;
            handDisplay.display.buttonMode = true;
        });
        this._model.handDisplays = [];

    }

    private guessedHandle() {
        this._model.handDisplays.forEach(handDisplay => {
            handDisplay.display.interactive = false;
            handDisplay.display.buttonMode = false;
        });
        this._model.handDisplays = [];

    }

    protected onInitialize(): void {
        const {cardSuit} = this.$model;

        this.gotoAndStop("back");

        const faceCard = new PIXI.Sprite(this.$resources.get(cardSuit).getTexture());
        faceCard.anchor.set(.5);
        this.display.addChildAt(faceCard, 0);
        this.x = this.$model.pos[0] * this.$model.cardWidth * 1.3;
        this.y = this.$model.pos[1] * this.$model.cardHeight *0.9;
        this.gotoAndStop("back");
        this.display.scale.set(1);

    }

    protected onDispatchEvent(name: string, ...args): void {

    }

    public pick() {
        this.gotoAndPlay("back");
    }
}
