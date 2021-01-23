import { CardState } from 'src/app/enum';
import { CardIds, CardStyle, ICard, IPile } from 'src/app/interfaces';

export class Card<T extends CardStyle> implements ICard {
    private pile: IPile;

    constructor(
        public readonly ids: CardIds,
        public readonly style: T
    ) {
    }

    get imagePath() {
        return this.style.state === CardState.Up ? this.style.images.front : this.style.images.back;
    }

    public setState = (state: CardState): void => {
        this.style.state = state;
    }

    public getPile = (): IPile => {
        return this.pile;
    }

    public setPile = (pile: IPile): void => {
        if (this.pile?.includes(this.ids.deckId)) {
            this.pile.remove(this);
        }
        this.pile = pile;
        this.pile?.add(this);
    }

    public flip = () => {
        this.setState(this.style.state === 0 ? 1 : 0);
    }

    public toString = (): string => this.ids.fullname;
}
