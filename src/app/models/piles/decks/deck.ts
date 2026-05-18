import { Pile } from '..';
import { ICard } from '../../../interfaces';
import { seededShuffle } from '../../../utils/seeded-shuffle';

export class Deck<T extends ICard> extends Pile<'Deck', T> {
    static readonly defaultBackImg = 'b2fv';

    public backImg = Deck.defaultBackImg;
    public shuffleSeed?: string;

    public shuffle = (count?: number, seed?: string): ICard[] => {
        const result = seededShuffle(this.cards, card => card.ids.deckId, count, seed);
        this.shuffleSeed = result.seed;
        this.cards.splice(0, this.cards.length, ...result.items);
        return this.cards;
    }
}
