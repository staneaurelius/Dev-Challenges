<script>
	import { resolve } from '$app/paths';
	import searchStore from '$lib/stores/searchStore.svelte';

	const handleClick = () => {
		searchStore.isOpen = false;
		searchStore.query = '';
		searchStore.results = [];
	};
</script>

<ul
	role="listbox"
	aria-label="Search results"
	onpointerdown={(e) => {
		e.preventDefault();
	}}
>
	{#if searchStore.isLoading}
		<li>Search in progress...</li>
	{:else}
		{#each searchStore.results as item (item.id)}
			<li role="option" aria-selected="false">
				<a
					href={resolve(
						`/${item.name}?lat=${item.latitude}&long=${item.longitude}&country=${item.country}`
					)}
					data-sveltekit-noscroll
					data-sveltekit-preload-data="hover"
					onclick={handleClick}>{item.name}, {item.country}</a
				>
			</li>
		{/each}
	{/if}
</ul>

<style>
	ul {
		position: absolute;
		top: calc(100% + 0.625rem);
		left: 0;
		width: 100%;
		z-index: 1;

		/* Appearance */
		list-style-type: none;
		padding: 0.5rem;
		border-radius: 12px;
		background-color: rgb(var(--neutral-800));
		border: 1px solid rgb(var(--neutral-700));

		/* Layout */
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		li {
			padding: 0.625rem 0.5rem;
			border-radius: 8px;
			border: 1px solid transparent;
			transition: border-color ease-in 0.15s;

			a {
				display: block;
				color: rgb(var(--neutral-0));
				text-decoration: none;
				outline: none;
				font-size: var(--fs-7);
				font-weight: 500;
			}

			&:hover,
			&:focus-within {
				background-color: rgb(var(--neutral-700));
				border-color: rgb(var(--neutral-600));
			}
		}
	}
</style>
