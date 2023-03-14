import { CardState } from 'src/app/enum';
import { FaceCardColor, FaceCardName, FaceCardSuit } from 'src/app/enum/facecards';
import { CardIds, FaceCardStyle } from 'src/app/interfaces';
import { Card } from '../../card';
import { Deck } from './deck';

const facecards = [
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk',
    's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk',
    'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk'
];

const jokers: { [key in FaceCardColor]: string } = {
    [FaceCardColor.Black]: 'jb',
    [FaceCardColor.Red]: 'jr'
};

const buildCard = (name: string, deckId: number, backImg?: string): Card<FaceCardStyle> => {
    const faceId = deckId < 52 ? (deckId % 13) + 1 : FaceCardName.Joker;
    const cardname: FaceCardName = faceId < 14 ? faceId : FaceCardName.Joker;
    const cardsuit: FaceCardSuit = deckId < 52 ? Math.floor(deckId / 13) : FaceCardSuit.Joker;
    let cardcolor: FaceCardColor = cardsuit % 2;
    if (cardname === FaceCardName.Joker && cardcolor === FaceCardColor.Black && name === 'jr') {
        cardcolor = FaceCardColor.Red;
    }
    const fullname: string = (faceId < 14 ? `${FaceCardName[cardname]} of` : FaceCardColor[cardcolor]) + ` ${FaceCardSuit[cardsuit]}`;

    const ids: CardIds = {
        name,
        deckId,
        faceId,
        fullname
    };
    const style: FaceCardStyle = {
        name: cardname,
        suit: cardsuit,
        color: cardcolor,
        state: CardState.Down,
        images: {
            front: `assets/img/cards/face/${name}.png`,
            back: `assets/img/cards/back/${backImg || Deck.defaultBackImg}.png`
        }
    };
    return new Card(ids, style);
};

export class FaceCards extends Deck<Card<FaceCardStyle>> {
    constructor(backImg?: string, jokerCount?: number) {
        super(facecards.map((name, deckid) => buildCard(name, deckid, backImg)));
        this.backImg = backImg || Deck.defaultBackImg;
        jokerCount = Math.max(jokerCount || 0, 0);
        for (let i = 0; i < jokerCount; i++) {
            this.addJoker(i % 2);
        }
    }

    public addJoker = (color: FaceCardColor): void => {
        if (this.includes(jokers[color])) {
            return;
        }
        this.add(buildCard(jokers[color], this.cards.length, this.backImg));
    }

    public removeJoker = (color: FaceCardColor): void => {
        const card = this.find(jokers[color]);
        if (card) {
            this.remove(card);
        }
    }
}
