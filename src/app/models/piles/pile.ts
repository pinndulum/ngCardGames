import { DrawFrom } from 'src/app/enum';
import { ICard, IPile } from 'src/app/interfaces';

export type PileType = 'Hand' | 'Deck' | 'Draw' | 'Tableau' | 'Foundation' | 'Discard';

export class Pile<T extends PileType, U extends ICard> implements IPile {
    public drawFrom: DrawFrom;

    public readonly type?: T;
    public readonly cards: U[];

    constructor(cards?: U[], drawFrom?: DrawFrom) {
        this.cards = cards || [];
        this.drawFrom = drawFrom || DrawFrom.Top;
    }

    public find = (deckId: string | number): U | undefined => {
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

    public add = (card: ICard): void => {
        if (!card || this.includes(card.ids.deckId)) {
            return;
        }
        this.cards.push(card as U);
    }

    public remove = (card: ICard): void => {
        if (!this.includes(card.ids.deckId)) {
            return;
        }
        this.cards.remove(card as U);
    }

    public move = (to_pile: IPile, start?: number, count?: number): U[] => {
        start = (start || 0) * this.drawFrom;
        if (this.drawFrom < 1 && start === 0) {
            start = -(count || 1);
        }
        count = count || this.cards.length - start;
        let cards = this.cards.splice(start, count);
        if (to_pile.drawFrom !== this.drawFrom) {
            cards = cards.reverse();
        }
        cards.forEach(x => x.setPile(to_pile));
        return cards;
    }
}
