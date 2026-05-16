import { Guid } from './guid';
import { SeededGuid } from './seeded-guid';

export interface SeededShuffleResult<T> {
    items: T[];
    seed: string;
}

const shuffleSeedPattern = /^shuffle:(.*):(\d+)$/;

export const formatShuffleSeed = (seed: string, count: number): string =>
    `shuffle:${seed}:${count}`;

export const parseShuffleSeed = (seed?: string): { value?: string; count?: number } => {
    const match = shuffleSeedPattern.exec(seed ?? '');
    if (!match) {
        return { value: seed };
    }
    return { value: match[1], count: Number(match[2]) };
};

export const resolveShuffleSeed = (count?: number, seed?: string): string => {
    const { value, count: parsedCount } = parseShuffleSeed(seed);
    const shuffleSeed = value ?? Guid.newGuid();
    const shuffleCount = Math.max(count ?? parsedCount ?? 1, 1);
    return formatShuffleSeed(shuffleSeed, shuffleCount);
};

export const shuffleSeedLabel = (seed: string, length = 8): string => {
    const { value } = parseShuffleSeed(seed);
    const label = value ?? seed;
    return label.length > length ? label.slice(0, length) : label;
};

export const seededShuffle = <T>(
    items: T[],
    keySelector: (item: T) => string | number,
    count?: number,
    seed?: string
): SeededShuffleResult<T> => {
    const shuffleSeed = resolveShuffleSeed(count, seed);
    const { count: shuffleCount = 1 } = parseShuffleSeed(shuffleSeed);
    let shuffled = items.slice();
    for (let c = 0; c < shuffleCount; c++) {
        shuffled = shuffled
            .map(item => ({
                guid: SeededGuid.newGuid(`${shuffleSeed}:${c}:${keySelector(item)}`),
                item
            }))
            .sort((a, b) => a.guid.localeCompare(b.guid))
            .map(x => x.item);
    }
    return { items: shuffled, seed: shuffleSeed };
};
