import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import UnitButton from './UnitButton.svelte';

describe('Component Unit Button', () => {
	it('should render "Units" text', async () => {
		render(UnitButton);
		const button = page.getByRole('button');
		await expect.element(button).toBeVisible();
		await expect.element(button).toHaveTextContent('Units');
	});
});
