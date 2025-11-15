import { page } from 'vitest/browser';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from 'vitest-browser-svelte';
import DailyCards from './DailyCard.svelte';

describe('Component Daily Forecast Card', () => {
	beforeEach(() => {
		render(DailyCards, {
			date: 'Fri',
			weatherCode: 95,
			maxTemp: 7.3,
			minTemp: 4.7
		});
	});

	afterEach(() => {
		cleanup();
	});

	it('should render the day', async () => {
		const date = page.getByText('Fri');
		await expect.element(date).toBeVisible();
	});

	it('should render the correct icon', async () => {
		const icon = page.getByRole('img', { name: 'storm icon' });
		await expect.element(icon).toBeVisible();
	});

	it('should render the max temperature', async () => {
		const temp = page.getByText('7.3');
		await expect.element(temp).toBeVisible();
	});

	it('should render the min temperature', async () => {
		const temp = page.getByText('4.7');
		await expect.element(temp).toBeVisible();
	});
});
