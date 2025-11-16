<script lang="ts">
	import CurrentMain from '$lib/components/ui/CurrentMain.svelte';
	import CurrentInfo from '$lib/components/ui/CurrentInfo.svelte';

	let { location, date, current } = $props();
</script>

<section class="current-weather" aria-label="Current Weather">
	<CurrentMain
		{location}
		{date}
		weatherCode={current.weatherCode}
		temperature={current.temperature}
	/>
	<div class="info">
		<CurrentInfo text="Feels Like" value={current.feelsLike} unit="&deg;C" />
		<CurrentInfo text="Humidity" value={current.humidity} unit="%" />
		<CurrentInfo text="Wind" value={current.wind} unit=" km/h" />
		<CurrentInfo text="Precipitation" value={current.precipitation} unit=" mm" />
	</div>
</section>

<style>
	.current-weather {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.info {
			display: flex;
			gap: 1.5rem;
			align-items: center;
		}
	}

	@media (max-width: 767px) {
		.current-weather {
			.info {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				gap: 1rem 1rem;
			}
		}
	}
</style>
