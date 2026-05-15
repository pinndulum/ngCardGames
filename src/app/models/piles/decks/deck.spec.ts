import { FaceCards } from './face.cards';

const deckOrder = (deck: FaceCards): string[] => deck.cards.map(card => card.ids.name);

describe('Deck', () => {
    it('should replay shuffle order from a seed', () => {
        const first = new FaceCards();
        const replay = new FaceCards();

        first.shuffle(3, 'replay-seed');
        replay.shuffle(undefined, first.shuffleSeed);

        expect(deckOrder(replay)).toEqual(deckOrder(first));
    });

    it('should replay shuffle order from the generated seed and count', () => {
        const first = new FaceCards();
        const replay = new FaceCards();

        first.shuffle(3);
        const seed = first.shuffleSeed ?? '';

        expect(seed).toMatch(/^shuffle:.+:3$/);
        replay.shuffle(undefined, seed);
        expect(deckOrder(replay)).toEqual(deckOrder(first));
    });
});
