import { isEmpty, isNullOrUndefined, sum } from './utils';

describe('isNullOrUndefined', () => {
    it('should return true when given null', () => {
        expect(isNullOrUndefined(null)).toBe(true);
    });

    it('should return true when given undefined', () => {
        expect(isNullOrUndefined(undefined)).toBe(true);
    });

    it('should return false when given a string', () => {
        expect(isNullOrUndefined('hello')).toBe(false);
    });

    it('should return false when given a number', () => {
        expect(isNullOrUndefined(42)).toBe(false);
    });

    it('should return false when given a boolean', () => {
        expect(isNullOrUndefined(true)).toBe(false);
    });

    it('should return false when given an object', () => {
        expect(isNullOrUndefined({})).toBe(false);
    });

    it('should return false when given an array', () => {
        expect(isNullOrUndefined([])).toBe(false);
    });
});

describe('isEmpty', () => {
    test('returns true for null', () => {
        const value = null;
        expect(isEmpty(value as unknown as string)).toBe(true);
    });

    test('returns true for undefined', () => {
        const value = undefined;
        expect(isEmpty(value as unknown as string)).toBe(true);
    });

    test('returns true for empty string', () => {
        const value = '';
        expect(isEmpty(value)).toBe(true);
    });

    test('returns false for non-empty string', () => {
        const value = 'hello world';
        expect(isEmpty(value)).toBe(false);
    });
});

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-5, 10)).toBe(5);
        expect(sum(0, 0)).toBe(0);
    });

    describe('sum used in reduce', () => {
        it('should correctly sum an array of numbers', () => {
            const numbers = [1, 2, 3, 4];
            const total = numbers.reduce(sum, 0);
            expect(total).toBe(10);
        });
    });
});
