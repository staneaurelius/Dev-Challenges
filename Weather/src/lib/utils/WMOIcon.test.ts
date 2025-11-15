import { describe, it, expect } from 'vitest';
import iconTranslator from './WMOIcon';

describe('Utils WMOIcon translator', () => {
	it('should return the correct object', () => {
		const sunnyAltText: string = iconTranslator[0][1];
		const stormAltText: string = iconTranslator[95][1];

		expect(sunnyAltText).toBe('sunny icon');
		expect(stormAltText).toBe('storm icon');
	});
});
