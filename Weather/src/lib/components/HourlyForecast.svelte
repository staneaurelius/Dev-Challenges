<script>
	import HourlyCard from '$lib/components/ui/HourlyCard.svelte';

	let { hourly } = $props();
</script>

<section class="hourly" aria-labelledby="hourly-forecast">
	<h2 id="hourly-forecast">Hourly forecast</h2>
	{#each { length: 8 }, i}
		<HourlyCard
			weatherCode={hourly.weatherCode[i + 1]}
			time={hourly.time[i + 1]}
			temperature={hourly.temperature[i + 1]}
		/>
	{/each}
</section>

<style>
	.hourly {
		background-color: rgb(var(--neutral-800));
		grid-row: 1 / 3;
		grid-column: 2 / 3;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem;
		border-radius: 20px;
	}
</style>
