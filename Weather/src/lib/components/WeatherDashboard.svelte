<script>
	import Current from '$lib/components/Current.svelte';
	import DailyForecast from '$lib/components/DailyForecast.svelte';
	import HourlyForecast from '$lib/components/HourlyForecast.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';

	let { data } = $props();
</script>

{#key page.url.pathname}
	<section
		class="dashboard"
		aria-label="Weather dashboard"
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 300 }}
	>
		<Current location={data.location} date={data.date} current={data.current} />
		<DailyForecast daily={data.daily} />
		<HourlyForecast hourly={data.hourly} />
	</section>
{/key}

<style>
	.dashboard {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto auto;
		row-gap: 3rem;
		column-gap: 2rem;
	}
</style>
