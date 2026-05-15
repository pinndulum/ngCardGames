import { FaceCardColor, FaceCardName, FaceCardSuit } from '../../enum/facecards';
import { CardStyle } from './card.style';

export interface FaceCardStyle extends CardStyle {
    name: FaceCardName;
    suit: FaceCardSuit;
    color: FaceCardColor;
}
