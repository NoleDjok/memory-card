import {Random, ModelEvents} from "@arkadium/game-core";
import {Inject, Singleton} from "@arkadium/game-core";
import {HandView} from "../Views/HandView";

export class CardModel {
    public taken: boolean = false;
    public cardSuit: string;
    public cardWidth = 142;
    public cardHeight = 201;

    constructor(public index: number,
                public pos: [number, number] = [0, 0],
                cardSuit) {
        this.cardSuit = `regular_0${cardSuit}`
    }
}

@Singleton
export class GameModel {
    public cards = new Array<CardModel>();
    public firstCardChosen: CardModel;
    public handDisplays: Array<HandView> = [];

    constructor(@Inject private _$modelEvents: ModelEvents,
                @Inject private _$random: Random) {
        let cardSuit = Array.from(Array(10).keys());
        cardSuit = [...cardSuit, ...cardSuit];
        // shuffle card suits
        cardSuit.sort(() => _$random.random() - 0.5);

        for (let i = 0; i < 20; i++) {
            const colIndex = i % 5;
            const rowIndex = Math.floor(i / 5) % 4;
            let pos: [number, number] = [colIndex, rowIndex];

            this.cards.push(new CardModel(i, pos, cardSuit[i]));
        }
    }
}

