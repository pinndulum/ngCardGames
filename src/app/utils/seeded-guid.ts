export class SeededGuid {
    private static seedValue(seed: string): number {
        let hash = 2166136261;
        for (let i = 0; i < seed.length; i++) {
            hash ^= seed.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return hash >>> 0;
    }

    private static seededRandom(seed: string): () => number {
        let value = this.seedValue(seed);
        return () => {
            value = (value + 0x6D2B79F5) | 0;
            let result = Math.imul(value ^ (value >>> 15), value | 1);
            result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
            return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
        };
    }

    static newGuid(seed?: string | number | null): string {
        const random = seed == null ? Math.random : this.seededRandom(`${seed}`);
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
