<script>
	import Current from '$lib/components/Current.svelte';

	let { data } = $props();
</script>

<section class="dashboard" aria-label="Weather dashboard">
	<Current location={data.location} date={data.date} current={data.current} />
</section>

<style>
	.dashboard {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto auto;
	}
</style>
