import { page } from 'vitest/browser';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from 'vitest-browser-svelte';
import CurrentMain from './CurrentMain.svelte';

describe('Component Weather Main Card', () => {
	beforeEach(() => {
		render(CurrentMain, {
			location: 'Tokyo, Japan',
			date: 'Monday, Nov 3, 2025',
			weatherCode: 3,
			temperature: 15
		});
	});

	afterEach(() => {
		cleanup();
	});

	it('should render the location', async () => {
		const location = page.getByText('Tokyo, Japan');
		await expect.element(location).toBeVisible();
	});

	it('should render the date', async () => {
		const date = page.getByText('Monday, Nov 3, 2025');
		await expect.element(date).toBeVisible();
	});

	it('should render the correct icon', async () => {
		const icon = page.getByRole('img', { name: 'overcast icon' });
		await expect.element(icon).toBeVisible();
	});

	it('should render the temperature', async () => {
		const temp = page.getByText('20');
		await expect.element(temp).toBeVisible();
	});
});
