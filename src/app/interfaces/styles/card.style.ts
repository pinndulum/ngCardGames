import { CardState } from '../../enum';

export interface CardImages { front: string; back: string; }

export interface CardStyle {
    state: CardState;
    images: CardImages;
}
