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
</style>
