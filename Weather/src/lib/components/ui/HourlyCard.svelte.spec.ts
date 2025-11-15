import { page } from 'vitest/browser';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from 'vitest-browser-svelte';
import HourlyCard from './HourlyCard.svelte';

describe('Component Hourly Forecast Card', () => {
	beforeEach(() => {
		render(HourlyCard, {
			weatherCode: 2,
			time: '7 AM',
			temperature: 9.3
		});
	});

	afterEach(() => {
		cleanup();
	});

	it('should render the time', async () => {
		const time = page.getByText('7 AM');
		await expect.element(time).toBeVisible();
	});

	it('should render the correct icon', async () => {
		const icon = page.getByRole('img', { name: 'cloudy icon' });
		await expect.element(icon).toBeVisible();
	});

	it('should render the temperature', async () => {
		const temp = page.getByText('9.3');
		await expect.element(temp).toBeVisible();
	});
});
