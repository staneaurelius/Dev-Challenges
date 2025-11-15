<script lang="ts">
	import searchIcon from '$lib/assets/icon-search.svg';
	import searchStore from '$lib/stores/searchStore.svelte';
	import SearchDrop from '$lib/components/ui/SearchDrop.svelte';

	let debounceTimer: ReturnType<typeof setTimeout>;
	let searchContainer: HTMLDivElement;

	const handleInput = () => {
		if (searchStore.query.length > 2) {
			searchStore.isOpen = true;
		} else {
			searchStore.isOpen = false;
		}

		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			searchStore.search();
		}, 300);
	};

	const handleFocusOut = (e: FocusEvent) => {
		const target = e.relatedTarget as Node;
		if (!searchContainer.contains(target)) {
			searchStore.isOpen = false;
		}
	};

	const handleFocus = () => {
		if (searchStore.query.length > 2) {
			searchStore.isOpen = true;
		}
	};
</script>

<div class="search-container" bind:this={searchContainer}>
	<img src={searchIcon} alt="search icon" aria-hidden="true" width="20" height="20" />
	<input
		name="location"
		type="text"
		placeholder="Search for a place..."
		bind:value={searchStore.query}
		oninput={handleInput}
		onfocus={handleFocus}
		onfocusout={handleFocusOut}
		autocomplete="off"
	/>

	{#if searchStore.isOpen}
		<SearchDrop />
	{/if}
</div>

<style>
	.search-container {
		position: relative;
		flex: 1;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background-color: rgb(var(--neutral-800));
		border-radius: 12px;
		transition: box-shadow ease-in-out 0.15s;

		&:hover:not(:has(ul:hover)) {
			background-color: rgb(var(--neutral-700));
		}

		&:focus-within {
			box-shadow:
				0 0 0 3px rgb(var(--neutral-900)),
				0 0 0 5px rgb(var(--neutral-0));
		}

		/* Children */
		img {
			width: 1.25rem;
			height: 1.25rem;
		}

		input {
			font-size: var(--fs-5);
			font-weight: 500;
			flex: 1;
			background: none;
			border: none;
			outline: none;
			font-weight: 500;
			color: rgb(var(--neutral-200));
		}

		input::placeholder {
			color: rgb(var(--neutral-300));
		}
	}
</style>
