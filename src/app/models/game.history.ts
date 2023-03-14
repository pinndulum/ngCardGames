import { CardStyle, ICard, IPile } from 'src/app/interfaces';

export interface HistoryData {
    deckId: number;
    style: CardStyle;
    pile: IPile;
}

export interface MoveHistory {
    moves: HistoryData[];
}

export interface GameHistory {
    records: MoveHistory[];
}

export const cardRecord = (pile: IPile, card: ICard): HistoryData => 
    ({ deckId: card.ids.deckId, style: { ...card.style }, pile });
export const moveHistory = (pile: IPile, ...cards: ICard[]): MoveHistory => 
    ({ moves: (cards || []).map(x => cardRecord(pile, x)) });
