import { ICard } from 'src/app/interfaces';
import { Guid } from 'src/app/utils/guid';
import { Pile } from '..';

export class Deck<T extends ICard> extends Pile<'Deck', T> {
    static readonly defaultBackImg = 'b2fv';

    public backImg = Deck.defaultBackImg;

    public setBackImg = (back: string) => {
        this.cards.forEach(x => x.style.images.back = back || Deck.defaultBackImg);
    }

    public shuffle = (count?: number): ICard[] => {
        count = Math.max(count || 1, 1);
        for (let c = 0; c < count; c++) {
            const cards = this.cards.slice(0)
                .map(x => ({ guid: Guid.newGuid(), card: x }))
                .sort((a, b) => a.guid.localeCompare(b.guid))
                .map(x => x.card);
            this.cards.splice(0, this.cards.length, ...cards);
        }
        return this.cards;
    }
}
