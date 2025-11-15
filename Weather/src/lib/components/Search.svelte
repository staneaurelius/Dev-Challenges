<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import SearchBar from '$lib/components/ui/SearchBar.svelte';
	import searchStore from '$lib/stores/searchStore.svelte';

	const handleClick = () => {
		if (searchStore.query.length > 2 && searchStore.results) {
			const dest = searchStore.results[0];
			goto(
				resolve(
					`/${dest.name}?lat=${dest.latitude}&long=${dest.longitude}&country=${dest.country}`
				),
				{ noScroll: true }
			);
			searchStore.query = '';
			searchStore.results = [];
		}
	};
</script>

<div>
	<SearchBar />
	<button type="button" onclick={handleClick}>Search</button>
</div>

<style>
	div {
		width: 50%;
		display: flex;
		gap: 1rem;
		align-items: center;

		button {
			font-size: var(--fs-5);
			font-weight: 500;
			background-color: rgb(var(--blue-500));
			padding: 1rem 1.5rem;
			border: none;
			border-radius: 12px;
			transition: box-shadow ease-in-out 0.15s;
		}

		button:hover {
			cursor: pointer;
			background-color: rgb(var(--blue-700));
		}

		button:focus {
			outline: none;
			box-shadow:
				0 0 0 3px rgb(var(--neutral-900)),
				0 0 0 5px rgb(var(--blue-500));
		}
	}
</style>
