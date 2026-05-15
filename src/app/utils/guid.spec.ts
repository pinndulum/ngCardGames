import { Guid } from './guid';

describe('Guid', () => {
    it('should generate a valid random guid', () => {
        expect(Guid.isGuid(Guid.newGuid())).toBeTrue();
    });
});
