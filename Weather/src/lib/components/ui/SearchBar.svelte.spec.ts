import { page } from 'vitest/browser';
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup } from 'vitest-browser-svelte';
import SearchBar from './SearchBar.svelte';
import searchStore from '$lib/stores/searchStore.svelte';

describe('Component Search Bar', () => {
	beforeEach(() => {
		vi.spyOn(searchStore, 'search').mockImplementation(async () => {
			searchStore.results = [
				{ id: 1, name: 'London', country: 'UK', latitude: 51.5, longitude: -0.1 }
			];
		});
		render(SearchBar);
	});

	afterEach(() => {
		cleanup();
		vi.restoreAllMocks();
	});

	it('should render placeholder text', async () => {
		const input = page.getByRole('textbox');
		await expect.element(input).toHaveAttribute('placeholder', 'Search for a place...');
	});

	it('should allow typing input text', async () => {
		const input = page.getByRole('textbox');
		await input.fill('London');
		await expect.element(input).toHaveValue('London');
	});

	it('should open dropdown after typing >2 characters', async () => {
		const input = page.getByRole('textbox');
		await input.fill('Lond');

		const dropdown = await vi.waitFor(() => page.getByRole('listbox'), { timeout: 300 });

		await expect.element(dropdown).toBeVisible();
	});

	it('should show search results', async () => {
		const input = page.getByRole('textbox');
		await input.fill('Lond');

		const result = await vi.waitFor(() => page.getByText('London, UK'), { timeout: 300 });
		await expect.element(result).toBeVisible();
	});
});
