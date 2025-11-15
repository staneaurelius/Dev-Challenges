import { page } from 'vitest/browser';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from 'vitest-browser-svelte';
import CurrentInfo from './CurrentInfo.svelte';

describe('Component Weather Info Card', () => {
	beforeEach(() => {
		render(CurrentInfo, {
			text: 'Wind',
			value: 5,
			unit: ' km/h'
		});
	});

	afterEach(() => {
		cleanup();
	});

	it('should render the text', async () => {
		const text = page.getByText('Wind');
		await expect.element(text).toBeVisible();
	});

	it('should render the value', async () => {
		const value = page.getByText('5');
		await expect.element(value).toBeVisible();
	});

	it('should render the correct icon', async () => {
		const unit = page.getByText('km/h');
		await expect.element(unit).toBeVisible();
	});
});
