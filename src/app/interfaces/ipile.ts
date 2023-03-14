import { DrawFrom } from 'src/app/enum';
import { ICard } from './icard';

export interface IPile {
    cards: ICard[];
    drawFrom: DrawFrom;
    find: (deckId: string | number) => ICard | undefined;
    findIndex: (deckId: string | number) => number;
    includes: (deckId: string | number) => boolean;
    turn: (start?: number, end?: number) => ICard[];
    add: (card: ICard) => void;
    remove: (card: ICard) => void;
    move: (to_pile: IPile, start?: number, count?: number) => ICard[];
}
