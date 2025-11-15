import { describe, it, expect } from 'vitest';
import getTime from './getTime';

describe('Utils getTime', () => {
	it('should convert the date properly', () => {
		const firstDate = '2025-11-04T17:00';
		const secondDate = '2025-11-04T03:00';

		expect(getTime(firstDate)).toBe('5 PM');
		expect(getTime(secondDate)).toBe('3 AM');
	});
});
