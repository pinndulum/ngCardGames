import { Guid } from './guid';
import { SeededGuid } from './seeded-guid';

describe('SeededGuid', () => {
    it('should generate the same guid for the same seed', () => {
        expect(SeededGuid.newGuid('shuffle-seed')).toBe(SeededGuid.newGuid('shuffle-seed'));
    });

    it('should generate a valid guid from a seed', () => {
        expect(Guid.isGuid(SeededGuid.newGuid('shuffle-seed'))).toBeTrue();
    });

    it('should generate a valid random guid without a seed', () => {
        expect(Guid.isGuid(SeededGuid.newGuid())).toBeTrue();
    });

    it('should generate a valid random guid from a null seed', () => {
        expect(Guid.isGuid(SeededGuid.newGuid(null))).toBeTrue();
    });
});
