import {Inject, ModelEvents, Random, Singleton} from "@arkadium/game-core";
import {CardModel, GameModel} from "../Models/GameModel";

@Singleton
export class GameLogic {
    constructor(@Inject private _model: GameModel,
                @Inject private _modelEvents: ModelEvents,
                @Inject private _$random: Random) {
    }

    public pickCard(model: CardModel) {
        let card = this._model.cards[model.index];
        if (card.taken) {
            return;
        }
        card.taken = true;

        this._modelEvents.dispatch(card, "pickCard", model);
    }

    public checkResult(lastCardChosen: CardModel) {
        let card = this._model.cards[lastCardChosen.index];
        const colOpenedCard = this.getColOpenedCards();

        this._modelEvents.dispatch(card, "checkResult", lastCardChosen);
        if (colOpenedCard === this._model.cards.length) {
            this._modelEvents.dispatch(this._model, "showYouWon");
        }
    }

    public getColOpenedCards() {
        return this._model.cards.filter((card => card.taken)).length;
    }

    public startNewGame() {
        this._modelEvents.dispatch(this._model, "hideYouWon");
        let cardSuit = Array.from(Array(10).keys());
        cardSuit = [...cardSuit, ...cardSuit];
        // shuffle card suits
        cardSuit.sort(() => this._$random.random() - 0.5);
        this._model.cards.forEach((card: CardModel, i: number) => {
            card.taken = false;
            card.cardSuit = `regular_0${cardSuit[i]}`;
            this._modelEvents.dispatch(card, "startNewGame", card);
        });
    }

}
