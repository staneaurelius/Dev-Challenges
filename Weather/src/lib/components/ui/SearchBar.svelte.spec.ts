import { page } from 'vitest/browser';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from 'vitest-browser-svelte';
import SearchBar from './SearchBar.svelte';

describe('Component Search Bar', () => {
	beforeEach(() => {
		render(SearchBar);
	});

	afterEach(() => {
		cleanup();
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
});
