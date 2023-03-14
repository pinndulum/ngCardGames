import { CardState } from 'src/app/enum';
import { IPile } from './ipile';
import { CardStyle } from './styles/card.style';

export interface CardIds {
    name: string;
    fullname: string;
    deckId: number;
    faceId: number;
}

export interface ICard {
    ids: CardIds;
    style: CardStyle;
    imagePath: string;
    setState: (state: CardState) => void;
    getPile: () => IPile | undefined;
    setPile: (pile: IPile) => void;
    flip: () => void;
    toString: () => string;
}
