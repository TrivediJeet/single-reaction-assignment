import { describe, it, expect } from 'vitest';
import { formatCount } from "./numberFormatters";

describe('number formatter', () => {
    it('should return the entire value for 1 - 999 inclusive without rounding or adding any suffix', () => {
        expect(formatCount(1)).toEqual('1');
        expect(formatCount(949)).toEqual('949');
        expect(formatCount(999)).toEqual('999');
    });
    it('should round, add decimals totalling a maximum of 4 characters, and include the K suffix for 1,000 - 999.9K inclusive', () => {
        expect(formatCount(1000)).toEqual('1K');
        expect(formatCount(9558)).toEqual('9.6K');
        expect(formatCount(10000)).toEqual('10K');
        expect(formatCount(19949)).toEqual('19.9K');
        expect(formatCount(99949)).toEqual('99.9K');
        expect(formatCount(99950)).toEqual('100K');
        expect(formatCount(999949)).toEqual('999.9K');
    });
    it('should round, add decimals totalling a maximum of 4 characters, and include the M suffix for 999.5k and up', () => {
        expect(formatCount(999950)).toEqual('1M');
        expect(formatCount(1200000)).toEqual('1.2M');
        expect(formatCount(8499999)).toEqual('8.5M');
        expect(formatCount(10000000)).toEqual('10M');
    });
});