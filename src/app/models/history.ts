import { CardIds, CardStyle, ICard, IPile } from 'src/app/interfaces';

export interface CardHistory {
    ids: CardIds;
    style: CardStyle;
    pile?: IPile;
}

export interface PileHistory {
    cards: CardHistory[];
}

export interface History {
    piles: PileHistory[];
}

export const cardHistory = (pile: IPile, card: ICard): CardHistory => ({ ids: card.ids, style: card.style, pile });
export const pileHistory = (pile: IPile, ...cards: ICard[]): PileHistory => ({ cards: (cards || []).map(x => cardHistory(pile, x)) });
