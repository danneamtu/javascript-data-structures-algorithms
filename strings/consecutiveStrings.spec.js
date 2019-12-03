const consecutiveStrings = require('./consecutiveStrings');

describe('consecutive strings', () => {
    describe('edge cases', () => {
        it('returns empty string when k <= 0', () => {
            expect(consecutiveStrings(['alpha', 'theta', 'christina'], -2)).toBe('');
        })
        it('returns empty string when k > arr.length', () => {
            expect(consecutiveStrings(['beta', 'gamma', 'christina'], 6)).toBe('');
        })
        it('returns empty string when no length', () => {
            expect(consecutiveStrings([])).toBe('');
        })
    })
    describe('it works', () => {
        it('returns longest string', () => {
            expect(consecutiveStrings(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toBe('abigailtheta')
        })
        it('returns longest string 2', () => {
            expect(consecutiveStrings(["apple", "banana", "kiwi", "pineapple", "strawberry", "grape"], 2)).toBe('pineapplestrawberry')
        })
        it('returns longest string 2', () => {
            expect(consecutiveStrings(["Harry", "Ron", "Hermione", "Minerva", "Albus", "Draco"], 4)).toBe('HermioneMinervaAlbusDraco')
        })
    })
})