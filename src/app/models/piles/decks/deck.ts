import { Pile } from '..';
import { ICard } from '../../../interfaces';
import { Guid } from '../../../utils/guid';
import { SeededGuid } from '../../../utils/seeded-guid';

export class Deck<T extends ICard> extends Pile<'Deck', T> {
    static readonly defaultBackImg = 'b2fv';
    private static readonly shuffleSeedPattern = /^shuffle:(.*):(\d+)$/;

    public backImg = Deck.defaultBackImg;
    public shuffleSeed?: string;

    private static formatShuffleSeed(seed: string, count: number): string {
        return `shuffle:${seed}:${count}`;
    }

    private static parseShuffleSeed(seed?: string): { value?: string; count?: number } {
        const match = Deck.shuffleSeedPattern.exec(seed ?? '');
        if (!match) {
            return { value: seed };
        }
        return { value: match[1], count: Number(match[2]) };
    }

    public setBackImg = (back: string) => {
        this.cards.forEach(x => x.style.images.back = back || Deck.defaultBackImg);
    }

    public shuffle = (count?: number, seed?: string): ICard[] => {
        const { value: _seed, count: _count } = Deck.parseShuffleSeed(seed);
        const shuffleSeed = _seed ?? Guid.newGuid();
        const shuffleCount = Math.max(count ?? _count ?? 1, 1);
        this.shuffleSeed = Deck.formatShuffleSeed(shuffleSeed, shuffleCount);
        for (let c = 0; c < shuffleCount; c++) {
            const cards = this.cards.slice(0)
                .map(x => ({ guid: SeededGuid.newGuid(`${this.shuffleSeed}:${c}:${x.ids.deckId}`), card: x }))
                .sort((a, b) => a.guid.localeCompare(b.guid))
                .map(x => x.card);
            this.cards.splice(0, this.cards.length, ...cards);
        }
        return this.cards;
    }
}
