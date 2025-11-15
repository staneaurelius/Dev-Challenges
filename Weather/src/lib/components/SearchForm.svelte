<script>
	import SearchBar from '$lib/components/ui/SearchBar.svelte';
</script>

<form method="GET" action="">
	<SearchBar />
	<button type="submit">Search</button>
</form>

<style>
	form {
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
