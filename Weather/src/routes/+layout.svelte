<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Search from '$lib/components/Search.svelte';

	let { children } = $props();
</script>

<Header />
<main>
	<h1>How's the sky looking today?</h1>
	<Search />
	{@render children()}
</main>

<style>
	main {
		padding: 0 112px 80px;
		gap: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font-family: 'Bricolage Grotesque';
			font-size: var(--fs-2);
			font-weight: 700;
			margin: 1rem 0;
		}
	}

	@media (max-width: 1439px) {
		main {
			padding: 0 24px 24px;
			gap: 2rem;

			h1 {
				max-width: 65%;
				margin: 1.5rem 0 1rem;
				text-align: center;
			}
		}
	}

	@media (max-width: 767px) {
		main {
			padding: 0 16px 16px;

			h1 {
				max-width: 100%;
				margin: 2rem 0 1rem;
			}
		}
	}
</style>
