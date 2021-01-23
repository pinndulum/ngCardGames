import { DrawFrom } from 'src/app/enum';
import { ICard, IPile } from 'src/app/interfaces';

export type PileType = 'Hand' | 'Deck' | 'Draw' | 'Tableau' | 'Foundation' | 'Discard';

export class Pile<T extends PileType, U extends ICard> implements IPile {
    public readonly type: T;
    public readonly cards: U[];
    public readonly drawFrom: DrawFrom;

    constructor(cards?: U[], drawFrom?: DrawFrom) {
        this.cards = cards || [];
        this.drawFrom = drawFrom || DrawFrom.Top;
    }

    public find = (deckId: string | number): U => {
        return this.cards.find(x => x.ids.name === deckId || x.ids.deckId === deckId);
    }

    public findIndex = (deckId: string | number): number => {
        return this.cards.findIndex(x => x.ids.name === deckId || x.ids.deckId === deckId);
    }

    public includes = (deckId: string | number): boolean => {
        return !!this.find(deckId);
    }

    public turn = (start?: number, end?: number): U[] => {
        const cards = this.cards.slice(start, end);
        cards.forEach(x => x.flip());
        return cards;
    }

    public add = (card: U): void => {
        if (!card || this.includes(card.ids.deckId)) {
            return;
        }
        this.cards.push(card);
    }

    public remove = (card: U): void => {
        if (!this.includes(card.ids.deckId)) {
            return;
        }
        this.cards.remove(card);
    }

    public move = (topile: IPile, start?: number, count?: number): U[] => {
        start = start || 0;
        count = count || this.cards.length - start;
        const cards = this.cards.splice(start, count);
        cards.forEach(x => x.setPile(topile));
        return cards;
    }
}
