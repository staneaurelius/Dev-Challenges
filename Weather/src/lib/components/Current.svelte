<script lang="ts">
	import CurrentMain from '$lib/components/ui/CurrentMain.svelte';

	let { location, date, current } = $props();
</script>

<section class="current-weather" aria-label="Current Weather">
	<CurrentMain
		{location}
		{date}
		weatherCode={current.weatherCode}
		temperature={current.temperature}
	/>
</section>

<style>
	.current-weather {
		width: 100%;
	}
</style>
